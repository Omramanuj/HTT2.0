import React from 'react';
import Chart from 'react-apexcharts';

const UserPieChartComponent = ({ userData }) => {
  const { series, labels } = userData; // Destructure series and labels from userData

  const options = {
    chart: {
      background: '#f8f9fa', // Light grey background
      toolbar: {
        show: false // Hide the toolbar for a cleaner look
      }
    },
    title: {
      text: 'Visited Pages by User',
      align: 'center',
      margin: 40,
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#343a40' // Dark grey title
      }
    },
    labels,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%' // Make the chart fully responsive
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
      labels: {
        colors: ['#333'], // Dark grey color for better readability
        useSeriesColors: false
      }
    },
    colors: ['#e6194B', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#f032e6', '#bfef45', '#fabed4', '#469990'], // Vibrant color palette
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              color: '#343a40', // Dark label for the total value
              formatter: function (w) {
                // Sum up all series values
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              }
            }
          }
        }
      }
    },
    tooltip: {
      style: {
        fontSize: '12px', // Reducing font size to make tooltip less obtrusive
      },
      y: {
        formatter: function (value) {
          return `${value} Users`; // Custom tooltip formatting
        }
      },
      theme: 'light',
      fillSeriesColor: false, // Prevents series color from filling the tooltip background
      marker: {
        show: false, // Hides the marker in the tooltip
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff'], // White color for data labels for contrast
        fontSize: '14px', // Slightly larger font size for readability
        fontWeight: 400,
      },
      background: {
        enabled: true,
        foreColor: '#000', // Dark background for the data labels
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#fff',
        opacity: 0.7, // Reducing opacity to make the data label less obtrusive
      },
      formatter: function (val) {
        return `${val}%`; // Display percentage on the chart segments
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