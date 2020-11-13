import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DoughnutChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "Your Carbon FX",
      },
      subtitles: [
        {
          text: "Total % Here",
          verticalAlign: "center",
          fontSize: 24,
          dockInsidePlotArea: true,
        },
      ],
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          indexLabel: "{name}: {y}",
          yValueFormatString: "#,###'%'",
          dataPoints: [
            // TODO: Replace Placeholder text and y cordinate with user data
            { name: "Placeholder-1", y: 25, color: "#CDB30C"},
            { name: "Placeholder-2", y: 50, color: "#62760c" },
            { name: "Placeholder-3", y: 15, color: "#535204" },
            { name: "Placeholder-4", y: 10, color: "#523906" },
          ],
        },
      ],
    };

    return (
      <div>
        {/* <h1>React Doughnut Chart</h1> */}
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default DoughnutChart;
