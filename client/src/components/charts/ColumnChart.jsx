import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
  render() {
    const options = {
      title: {
        text: "Potential vs Acutal",
      },
      animationEnabled: true,
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints: [
            // TODO: Replace y cordinate with user data
            { label: "Potential /Day", y: 10, color: "YellowGreen"},
            { label: "Actual /Day", y: 8 , color: "OliveDrab"},
            { label: "Potential /Week", y: 15 , color: "YellowGreen"},
            { label: "Actual /Week", y: 12 , color: "OliveDrab"},
            { label: "Potential /Month", y: 25 , color: "YellowGreen"},
            { label: "Actual /Month", y: 20 , color: "OliveDrab"},
            { label: "Potential /Year", y: 30 , color: "YellowGreen"},
            { label: "Actual /Year", y: 18 , color: "OliveDrab"},
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
