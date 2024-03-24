import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChartComponent = ({ chartData }) => {
  const options = {
    chart: {
      id: 'basic-bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758']
      }
    },
    xaxis: {
      categories: chartData.categories,
      position: 'bottom',
      labels: {
        offsetY: 0,
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        }
      }
    },
    title: {
      text: 'Site Traffic Overview over the months', // Title text
      floating: false, // Set floating to false to position the title properly
      offsetY: 0, // Adjust offsetY as needed
      align: 'center',
      style: {
        color: '#444',
        fontSize: '16px', // You can adjust the font size as needed
        fontWeight: 'bold', // Making the title bold for emphasis
      }
    }
  };

  const series = [{
    name: chartData.seriesName,
    data: chartData.values
  }];

  return (
    <div className="chart-container" style={{ margin: '35px' }}>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="500"
        height="400"
      />
    </div>
  );
};

export default ColumnChartComponent;
