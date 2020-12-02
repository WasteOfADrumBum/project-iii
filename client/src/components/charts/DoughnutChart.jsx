import React from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import { useUserContext } from "../../utils/UserContext";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DoughnutChart = () => {
    const [{ routes }] = useUserContext();
    console.log("Doughnut Routes", routes)

    // routes.filter(routes.mode = driving).map
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
            { name: "Driving", y: 50, color: "#CDB30C" },
            { name: "Walking", y: 50, color: "#62760c" },
            { name: "Bicycling", y: 15, color: "#535204" },
            { name: "Transit", y: 10, color: "#523906" },
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

export default DoughnutChart;
