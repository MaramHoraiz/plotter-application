import * as React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';

import CustomListItem from './ListItem';

import { listType } from '../Config.js';

function Dimension({ dropBoxValue, setDropBoxValue }) {
  const clearBtn = (
    <IconButton
      disabled={dropBoxValue ? false : true}
      title="Clear"
      aria-label="delete"
      size="large"
      onClick={() => {
        setDropBoxValue(null);
      }}
    >
      <ClearIcon />
    </IconButton>
  );

  return (
    <Card className="drop-box" variant="outlined">
      <Typography variant="h6" className="text-name">
        Dimension
      </Typography>
      <Droppable droppableId={listType.DIMENSION}>
        {(provided) => (
          <div
            className="drop-box__list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {dropBoxValue && (
              <CustomListItem
                tooltip={dropBoxValue.name}
                text={dropBoxValue.name}
                index={dropBoxValue.id}
                isDraggable={false}
              />
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {clearBtn}
    </Card>
  );
}

Dimension.propTypes = {
  dropBoxValue: PropTypes.object,
  setDropBoxValue: PropTypes.func,
};

export default Dimension;
