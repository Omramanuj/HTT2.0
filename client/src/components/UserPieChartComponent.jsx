import React from 'react';
import Chart from 'react-apexcharts';

const UserPieChartComponent = ({ userData }) => {
  const { series, labels } = userData;

  const options = {
    // Existing configurations...
    plotOptions: {
      pie: {
        donut: {
          size: '65%', // Adjust the donut size if needed
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: undefined, // Leaving color undefined so it takes the default or series color
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: undefined, // Leaving color undefined so it takes the default or series color
              offsetY: 16,
              formatter: function (val) {
                return `${val}`;
              }
            },
            total: {
              show: true,
              showAlways: false,
              label: 'Total',
              fontSize: '22px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: '#373d3f', // You can keep this color constant or base it on some logic
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              }
            }
          }
        }
      }
    },

  };

  return (
    <div className="chart-container" style={{ margin: '20px 0', padding: '15px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Chart options={options} series={series} type="donut" width="100%" />
    </div>
  );
};

export default UserPieChartComponent;
