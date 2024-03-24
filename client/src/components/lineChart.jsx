import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = ({ chartData }) => {
  const options = {
    chart: {
      id: 'basic-line',
      toolbar: {
        show: false
      }
    },
    title: {
      text: 'Page-wise Traffic Overview', // Title for the line chart
      align: 'center',
      style: {
        fontSize: '16px', // Adjust the font size as needed
        fontWeight: 'bold', // Make the title bold for emphasis
        color: '#263238' // Set the color of the title
      }
    },
    xaxis: {
      categories: chartData.categories,
      labels: {
        style: {
          colors: chartData.color
        }
      }
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#546E7A'],
    stroke: {
      curve: 'smooth',
      width: 3
    },
    markers: {
      size: 6
    },
    tooltip: {
      theme: 'dark'
    }
  };

  const series = [{
    name: 'Visits', // Changed from 'Sales' to 'Visits' to better represent the data context
    data: chartData.values
  }];

  return (
    <div className="chart-container" style={{ margin: '35px' }}>
      <Chart
        options={options}
        series={series}
        type="line"
        width="500"
        height="400"
      />
    </div>
  );
};

export default LineChart;
