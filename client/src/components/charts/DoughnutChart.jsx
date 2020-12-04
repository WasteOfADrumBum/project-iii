import React from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import { useUserContext } from "../../utils/UserContext";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DoughnutChart = () => {
  const [{ routes }] = useUserContext();
  console.log("Doughnut Routes", routes);

  const drivingArr = [];
  const walkingArr = [];
  const cyclingArr = [];
  routes.map((route) => {
    if (route.mode === "Driving") {
      drivingArr.push(route.footprint);
    } else if (route.mode === "Walking") {
      walkingArr.push(route.footprint);
    } else {
      cyclingArr.push(route.footprint);
    }
  });

  const drivingFootPrint = drivingArr.reduce((a, b) => a + b, 0);
  const walkingFootPrint = walkingArr.reduce((a, b) => a + b, 0);
  const cyclingFootPrint = cyclingArr.reduce((a, b) => a + b, 0);

  function number_format(val, decimals) {
    val = parseFloat(val);
    return val.toFixed(decimals);
  }

  const options = {
    animationEnabled: true,
    title: {
      text: "Your Carbon FX",
    },
    subtitles: [
      {
        text:
          number_format(
            drivingFootPrint + walkingFootPrint + cyclingFootPrint,
            2
          ) + " kg CO2e",
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
        yValueFormatString: "#,###.##",
        dataPoints: [
          // TODO: Replace Placeholder text and y cordinate with user data
          { name: "Driving", y: drivingFootPrint, color: "#CDB30C" },
          { name: "Walking", y: walkingFootPrint, color: "#62760c" },
          { name: "Bicycling", y: cyclingFootPrint, color: "#535204" },
          // { name: "Transit", y: 10, color: "#523906" },
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
};

export default DoughnutChart;
