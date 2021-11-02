import * as React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import CustomListItem from './common/ListItem';

import { listType } from '../Config.js';

/**
 *  functional component to render Dimension box
 * handles dropping feature for the box
 * features:
 *    - allow single drop card
 *    - clear card button
 *    - update app state to use the data in chart component
 *    - cards resizing based on no. of cards in the box
 * @param {array} dropBoxList
 * @param {func} setDropBoxList setter function to update app state
 */
function Dimension({ dropBoxValue, setDropBoxValue }) {
  /**
   * clear button for clearing dimension box
   */
  const clearBtn = (
    <IconButton
      disabled={dropBoxValue ? false : true}
      title="Clear "
      aria-label="clear"
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
