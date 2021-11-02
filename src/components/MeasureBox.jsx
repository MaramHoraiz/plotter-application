import * as React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import { Droppable } from 'react-beautiful-dnd';
import Card from '@mui/material/Card';

import CustomListItem from './common/ListItem';

import { listType } from '../Config.js';
/**
 * functional component to render measure box
 * handles dropping feature for the box
 * features:
 *    - allow multiple drop cards
 *    - clear all and clear card buttons
 *    - update app state to use the data in chart component
 *    - cards resizing based on no. of cards in the box
 * @param {array} dropBoxList
 * @param {func} setDropBoxList setter function to update app state
 */
function MeasureBox({ dropBoxList, setDropBoxList }) {

  /**
   * create clear button
   * @param {flag} isClearAll
   * @param {string} title
   * @param {string} size
   * @param {string} itemId
   * @returns
   */
  const clearButton=(isClearAll, title, size, itemId)=>{
  return  (<IconButton
    edge="end"
    aria-label={title}
    disabled={dropBoxList.length > 0 ? false : true}
    title={title}
    size={size}
    onClick={(e) => {
      if (dropBoxList.length === 0 || isClearAll) {
        setDropBoxList([]);
        return;
      }
      dropBoxList = dropBoxList.filter(
        (item) => item.name !== e.target.id
      );
      setDropBoxList([...dropBoxList]);
    }}
  >
    <ClearIcon id={itemId} />
  </IconButton>)
  }

  return (
    <Card className="drop-box" variant="outlined">
      <Typography variant="h6" className="text-name">
        Measure
      </Typography>
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
                key={`${item.name}-${item.id}`}
                isDraggable={false}
                secondaryAction={clearButton(false, "clear", "small", item.name)
                }
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {clearButton(true, "Clear All", "large", "clearAll")}
    </Card>
  );
}

MeasureBox.propTypes = {
  dropBoxList: PropTypes.array,
  setDropBoxList: PropTypes.func,
};

export default MeasureBox;
