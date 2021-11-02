import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import Alert from '@mui/material/Alert';

import RestHelper from '../utils/RestHelper';

const LineChart = ({ measureList, dimensionValue }) => {
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    const rest = new RestHelper();
    if (measureList.length === 0 || !dimensionValue){
        setChartData(null);
        return;
    };
    rest
      .post('https://plotter-task.herokuapp.com/data', {
        measures: measureList.map((a) => {
          return a.name;
        }),
        dimension: dimensionValue.name,
      })
      .then((data) => {
        let dim = [];
        let measure = [];
        for (let dataObj of data) {
          if (dataObj.name === dimensionValue.name) dim.push(...dataObj.values);
          else
            measure.push({
              id: dataObj.name,
              label: `# of ${dataObj.name}`,
              data: [...dataObj.values],
              fill: false,
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
              borderColor: `#${Math.floor(Math.random() * 16777215).toString(
                16
              )}33`,
              yAxisID: `y-axis-${dataObj.name}`,
            });
        }
        setChartData({ labels: dim, datasets: measure });
      })
      .catch((err) => console.log(err));
  }, [measureList, dimensionValue]);

  return (
    chartData? (
      <div className="line-chart__container">
        <Line data={chartData}  />
      </div>
    ):
    <Alert  severity="info" variant="filled" className="line-chart__info-box">
    Please select your chart criteria!
  </Alert>
  );
};
export default LineChart;
