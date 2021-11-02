import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import RestHelper from '../utils/RestHelper';
import CustomListItem from './ListItem';

import { listType } from '../Config.js';

function ColumnsList({ drawerWidth, columnsSetter, columns }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let columnObject = {};
    const rest = new RestHelper();
    rest
      .get('https://plotter-task.herokuapp.com/columns')
      .then((data) => {
        data.map((item, index) => {
          columnObject[index] = { ...item };
        });
        columnsSetter(columnObject);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  /**
   * create 2 lists for dimension and measure list
   */
  const listContent = (
    <div>
      <Divider />
      <List>
        {Object.keys(columns).map((key, index) => {
          const item = columns[key];
          return item.function === listType.DIMENSION ? (
            <CustomListItem
              tooltip={`${item.name} ${listType.DIMENSION}`}
              text={item.name}
              index={index}
              isDraggable={true}
            />
          ) : null;
        })}
      </List>
      <Divider />
      <List>
        {Object.keys(columns).map((key, index) => {
          const item = columns[key];
          return item.function === listType.MEASURE ? (
            <CustomListItem
              tooltip={`${item.name} ${listType.MEASURE}`}
              text={item.name}
              index={index}
              isDraggable={true}
            />
          ) : null;
        })}
      </List>
    </div>
  );

  /**
   * returns DOM ele based on data status (loading, data, error alert)
   * @returns returns dom elements
   */
  const showContent = () => {
    return Object.keys(columns).length > 0 ? (
      listContent
    ) : loading ? (
      <CircularProgress className="icon__loading" />
    ) : (
      <Alert severity="error" variant="filled" color="error">
        Something went wrong, please reload the application
      </Alert>
    );
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
        },
      }}
      open
    >
      <Toolbar style={{ fontWeight: '600', fontSize: 'larger' }}>
        Columns
      </Toolbar>
      {showContent()}
    </Drawer>
  );
}

ColumnsList.propTypes = {
  drawerWidth: PropTypes.number,
  columnsSetter: PropTypes.func,
  columns: PropTypes.object,
};

export default ColumnsList;
