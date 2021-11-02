# Getting Started with Plotter App

### Libraries 
This react project was created using: 
- Material UI.
- react-beautiful-dnd.
- chart.js.
- fetch webAPI

### Handled Features
- Fetches the data of "dimension and measure" and creates a Dragabble list.
- Creates two droppable boxes "dimension and measure".
- Each data type should be able to be dropped into its dropbox.
- in dropbox one or multiple items are allowed (bonus).
- You can clear one more more items.
- a line-chart created based on user selection on drop boxes, Where the X-Axis represents the dimension datavalues and the Y-Axis represents the measure data values corresponding to the dimension values.
- The line-chart supports multiple Y-Axis "measure" at the same time (bonus).
- The label on each axis, shows the current measure/dimension.
- X-Axis, Y-Axis are showing ticks with labels representing the current dimension values.
- When the data-points are hovered, a tooltip for the values at that point is showen (bonus).

### Wireframe
architecture component for plotter app

![alt text](https://github.com/MaramHoraiz/plotter-application/blob/master/public/plotter-app-wireframe.png?raw=true)
### The APIs

- Get all columns 'GET https://plotter-task.herokuapp.com/columns'

- Get data by the dimension and measure columns data values 'POST https://plotter-task.herokuapp.com/data'
