import * as React from 'react';
import PropTypes from 'prop-types';

import { Droppable } from 'react-beautiful-dnd';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';

import CustomListItem from './ListItem';

import { listType } from '../Config.js';
function MeasureBox({ dropBoxList, setDropBoxList }) {
  return (
    <Card className="drop-box" variant="outlined">
      <Typography variant="h6" className="text-name">Measure</Typography>
      <Droppable droppableId={listType.MEASURE}>
        {(provided) => (
          <div
            className="drop-box__list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {dropBoxList.map((item) => (
              <CustomListItem
                width={dropBoxList.length > 2 ? '20%' : 1}
                tooltip={item.name}
                text={item.name}
                index={item.id}
                isDraggable={false}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="clear"
                    title="Clear"
                    size="small"
                    onClick={(e) => {
                      if (dropBoxList.length === 0) {
                        setDropBoxList([]);
                        return;
                      }
                      dropBoxList = dropBoxList.filter(
                        (item) => item.name !== e.target.id
                      );
                      setDropBoxList([...dropBoxList]);
                    }}
                  >
                    <ClearIcon id={item.name} />
                  </IconButton>
                }
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <IconButton
        disabled={dropBoxList?.length > 0 ? false : true}
        title="Clear All"
        aria-label="clear all"
        size="large"
        onClick={() => {
          setDropBoxList([]);
        }}
      >
        <ClearIcon />
      </IconButton>
    </Card>
  );
}

MeasureBox.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MeasureBox;
