import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
  render() {
    const options = {
      title: {
        text: "US Avg. vs Acutal (kg CO2e)",
      },
      animationEnabled: true,
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints: [
            // TODO: Replace y cordinate with user data
            { label: "Actual /Day", y: 1, color: "OliveDrab"},
            { label: "US Avg. /Day", y: 318.15, color: "YellowGreen"},
            { label: "Actual /Week", y: 1, color: "OliveDrab"},
            { label: "US Avg. /Week", y: 318.15 , color: "YellowGreen"},
            { label: "Actual /Month", y: 1, color: "OliveDrab"},
            { label: "US Avg. /Month", y: 1383.33, color: "YellowGreen"},
            { label: "Actual /Year", y: 1, color: "OliveDrab"},
            { label: "US Avg. /Year", y: 16600, color: "YellowGreen"},
          ],
        },
      ],
    };

    return (
      <div>
        {/* <h1>React Column Chart</h1> */}
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default ColumnChart;
