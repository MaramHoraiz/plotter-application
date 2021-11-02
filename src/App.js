import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import ColumnsList from './components/ColumnsList';
import DimensionBox from './components/DimensionBox';
import MeasureBox from './components/MeasureBox';
import LineChart from './components/LineChart';

import { listType, drawerWidth } from './Config';

import './components/style.css';


function App() {
  const [columns, setColumns] = useState({});
  const [dimensionBoxValue, setDimensionBoxValue] = useState(null);
  const [measureBoxValue, setMeasureBoxValue] = useState([]);

  /**
   * event fires when drag ends to handle
   * - handle dropping cards in their right drop boxes
   * - update app states
   * @param {object} result event object
   * @returns
   */
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    // dropped outside the lists
    if (!destination) return;

    if (columns[source.index].function === destination.droppableId) {
      switch (columns[source.index].function) {
        case listType.DIMENSION:
          if (!dimensionBoxValue)
            setDimensionBoxValue({ id: source.index, name: draggableId });
          break;
        case listType.MEASURE:
          if (measureBoxValue.some((item) => item.id === source.index)) return;
          setMeasureBoxValue((oldValue) => [
            ...oldValue,
            { id: source.index, name: draggableId },
          ]);
          break;
        default:
          break;
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Droppable droppableId="list">
          {(provided) => (
            <Box
              component="nav"
              sx={{ width: { sm: drawerWidth } }}
              aria-label="Plotter Menu"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <ColumnsList
                drawerWidth={drawerWidth}
                columnsSetter={setColumns}
                columns={columns}
              />
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
        <Box
          className="main__container"
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Box className="drop-box__container">
            <DimensionBox
              dropBoxValue={dimensionBoxValue}
              setDropBoxValue={setDimensionBoxValue}
            />
            <MeasureBox
              dropBoxList={measureBoxValue}
              setDropBoxList={setMeasureBoxValue}
            />
          </Box>
          <LineChart
            measureList={measureBoxValue}
            dimensionValue={dimensionBoxValue}
          />
        </Box>
      </Box>
    </DragDropContext>
  );
}

export default App;
