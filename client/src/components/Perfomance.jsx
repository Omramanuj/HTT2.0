import React from 'react';
import LineChart from './lineChart';
import ColumnChartComponent from './ColumnChart1';
import UserSelector from './UserChart';
import DemographicsSummary from './Summary';
// Import your new component here, replacing `AdditionalComponent` with its actual name
// import AdditionalComponent from './AdditionalComponent';

export default function Performance() {
  const chartData = {
    lineChartData: {
      categories: ['services', 'aboutUs', 'nutritionStrategy', 'ayurveda', 'protein', 'diet'],
      values: [30, 20, 30, 23, 10, 60] // Example impression counts
    },
    columnChartData: {
      categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      values: [40, 50, 35, 50, 49, 60, 70, 91, 125],
      goal: 80
    }
  };

  const chartStyles = {
    mainContainer: {
      padding: '20px', // Adds padding around the main container
      background: '#f5f5f5', // Light background color for contrast
      borderRadius: '10px', // Rounded corners for the container
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)' // Subtle shadow for depth
    },
    topRow: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: '20px', // Adds space between the charts
    },
    bottomRow: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: '20px', // Adds space between the top row and bottom row
    },
    chart: {
      flex: '1 1 ', // Flex grow, flex shrink, and flex basis
      padding: '15px', // Adds padding inside each chart container
      background: '#fff', // White background for each chart container
      borderRadius: '8px', // Rounded corners for chart containers
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)' // Adds subtle shadow around chart containers
    }
  };

  return (
    <div style={chartStyles.mainContainer}>
      <div style={chartStyles.topRow}>
        <div style={chartStyles.chart}>
          <ColumnChartComponent chartData={chartData.columnChartData} />
        </div>
        <div style={chartStyles.chart}>
          <LineChart chartData={chartData.lineChartData} />
        </div>
      </div>
      <div style={chartStyles.bottomRow}>
        <div style={chartStyles.chart}>
          <UserSelector />
        </div>
        <div className='h-full w-full m-2' style={chartStyles.chart}>
            <DemographicsSummary />
        </div>
         
        </div>
      </div>

  );
}
