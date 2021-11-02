import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

/**
 * common functional component creates list item by material ui
 * features:
 *   - create draggable/ normal list item
 */
const CustomListItem = ({
  isDraggable,
  text,
  itemId,
  index,
  tooltip,
  width,
  secondaryAction,
}) => {
  return isDraggable ? (
    <Draggable draggableId={text} index={index}>
      {(provided) => (
        <ListItem
          className="dnd-item"
          button
          title={tooltip}
          // key={itemId || text }
          // id={itemId || text }
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{ width: width }}
          secondaryAction={secondaryAction}
        >
          <ListItemText className="dnd-item__text" primary={text} />
        </ListItem>
      )}
    </Draggable>
  ) : (
    <ListItem
      className="dnd-item"
      button
      // key={itemId || text }
      // id={itemId || text }
      sx={{ width: width }}
      secondaryAction={secondaryAction}
    >
      <ListItemText primary={text} />
    </ListItem>
  );
};
CustomListItem.propTypes = {
  isDraggable: PropTypes.bool,
  text: PropTypes.string,
  tooltip: PropTypes.string,
  secondaryAction: PropTypes.object,
};
export default CustomListItem;
