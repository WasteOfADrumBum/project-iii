import React from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import { useUserContext } from "../../utils/UserContext";
import moment from "moment";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
function ColumnChart() {
  const [{ routes }] = useUserContext();
  const today = moment();
  const now = today.format("YYYYMMDD");
  const footPrintDay = [];
  const footPrintWeek = [];
  const footPrintMonth = [];
  const footPrintYear = [];
  routes.map((date) => {

    if (now - moment(date.created).format("YYYYMMDD") < 1) {
      footPrintDay.push(date.footprint);
    } else if (now - moment(date.created).format("YYYYMMDD") < 7) {
      footPrintWeek.push(date.footprint);
    } else if (now - moment(date.created).format("YYYYMMDD") < 30) {
      footPrintMonth.push(date.footprint);
    } else if (now - moment(date.created).format("YYYYMMDD") < 365) {
      footPrintYear.push(date.footprint);
    }
  });

  console.log(parseInt(now) - parseInt(moment(routes[0].created).format("YYYYMMDD")))
  console.log(parseInt(now))

  const dayCalc = footPrintDay.reduce((a, b) => a + b, 0);
  const weekCalc = footPrintWeek.reduce((a, b) => a + b, 0);
  const monthCalc = footPrintMonth.reduce((a, b) => a + b, 0);
  const yearCalc = footPrintYear.reduce((a, b) => a + b, 0);

  console.log(dayCalc, weekCalc, monthCalc, yearCalc)

  const options = {
    title: {
      text: "US Avg. vs Acutal (kg CO2e)",
    },
    animationEnabled: true,
    data: [
      {
        type: "column",
        dataPoints: [
          // TODO: Replace y cordinate with user data

          { label: "Actual /Day", y: dayCalc, color: "OliveDrab" },
          // { label: "US Avg. /Day", y: 318.15, color: "YellowGreen" },
          { label: "Actual /Week", y: dayCalc + weekCalc, color: "OliveDrab" },
          // { label: "US Avg. /Week", y: 318.15, color: "YellowGreen" },
          { label: "Actual /Month", y: dayCalc + weekCalc + monthCalc, color: "OliveDrab" },
          // { label: "US Avg. /Month", y: 1383.33, color: "YellowGreen" },
          { label: "Actual /Year", y: dayCalc + weekCalc + monthCalc + yearCalc, color: "OliveDrab" },
          // { label: "US Avg. /Year", y: 16600, color: "YellowGreen" },
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
export default ColumnChart;