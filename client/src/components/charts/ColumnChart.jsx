import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import { useUserContext } from "../../utils/UserContext"
import moment from "moment"
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
    console.log("MOMENT DATE", parseInt(moment(date.created).format("YYYYMMDD")))
    console.log("MOWWWW: ", parseInt(now))
    console.log("SUBTRACT:  ", parseInt(now) - parseInt(moment(date.created).format("YYMMDD")))
    console.log("LETS TEST THE CONDITIONAL:  ", now - moment(date.created).format("YYYYMMDD"))

    if (now - moment(date.created).format("YYYYMMDD") < 1) {
      footPrintDay.push(date.footprint);
      console.log("PUSHING ", date.footprint, "TO DAY")
    } else if (now - moment(date.created).format("YYYYMMDD") > 7) {
      footPrintWeek.push(date.footprint);
      console.log("PUSHING ", date.footprint, "TO week")

    } else if (now - moment(date.created).format("YYYYMMDD") > 30) {
      footPrintMonth.push(date.footprint);
      console.log("PUSHING ", date.footprint, "TO MONTH")

    } else if (now - moment(date.created).format("YYYYMMDD") > 365) {
      footPrintYear.push(date.footprint);
      console.log("PUSHING ", date.footprint, "TO YEAR")

    }
  });
  console.log("DAY: ", footPrintDay, "WEEK: ", footPrintWeek, "MONTH: ", footPrintMonth, "YEAR: ", footPrintYear)
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
          { label: "Actual /Day", y: 12, color: "OliveDrab" },
          { label: "US Avg. /Day", y: 318.15, color: "YellowGreen" },
          { label: "Actual /Week", y: 12, color: "OliveDrab" },
          { label: "US Avg. /Week", y: 318.15, color: "YellowGreen" },
          { label: "Actual /Month", y: 12, color: "OliveDrab" },
          { label: "US Avg. /Month", y: 1383.33, color: "YellowGreen" },
          { label: "Actual /Year", y: 12, color: "OliveDrab" },
          { label: "US Avg. /Year", y: 16600, color: "YellowGreen" },
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