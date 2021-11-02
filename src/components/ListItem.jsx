import { withWidth } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Draggable } from 'react-beautiful-dnd';

const classes = makeStyles({
  root: {
    '&$selected': {
      backgroundColor: 'red',
      '&:hover': {
        backgroundColor: 'yellow',
      },
    },
  },
  selected: {},
});
const CustomListItem = ({
  isDraggable,
  text,
  index,
  tooltip,
  width,
  secondaryAction,
}) => {
  return isDraggable ? (
    <Draggable draggableId={text} index={index}>
      {(provided) => (
        <ListItem
          className="dnd__item "
          button
          title={tooltip}
          key={text}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{ width: width }}
          secondaryAction={secondaryAction}
        >
          <ListItemText primary={text} />
        </ListItem>
      )}
    </Draggable>
  ) : (
    <ListItem
      className="dnd__item"
      button
      key={text}
      sx={{ width: width }}
      secondaryAction={secondaryAction}
    >
      <ListItemText primary={text} />
    </ListItem>
  );
};
export default CustomListItem;
