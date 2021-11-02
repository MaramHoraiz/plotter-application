# Getting Started with Plotter App

### Libraries 
This react project was created by 
- Material UI.
- react-beautiful-dnd.
- chart.js.
- fetch webAPI

### Handled Features
- Fetch Data of "dimension and measure" and create Dragabble list.
- create two droppable boxes "dimension and measure".
- each data type should be able to drop to its dropbox.
- dropbox can allow only one item or multiple (bonus).
- you can clear all or clear one of the items.
- a line-chart created based on user selection on drop boxes, Where the X-Axis represents the dimension datavalues and the Y-Axis represents the measure data values corresponding to the dimension values.
- line-chart support multiple Y-Axis "measure" at the same time (bonus).
- Label on each axis, showing the current measure/dimension
- X-Axis, Y-Axis showing ticks with labels representing the current dimension values
- When hover on the data-points, show a tooltip for the values at that point (bonus).

### Wireframe
architecture component for plotter app

![alt text](https://github.com/MaramHoraiz/plotter-application/blob/master/public/plotter-app-wireframe.png?raw=true)
### The APIs

- Get all columns 'GET https://plotter-task.herokuapp.com/columns'

- Get data by the dimension and measure columns data values 'POST https://plotter-task.herokuapp.com/data'
