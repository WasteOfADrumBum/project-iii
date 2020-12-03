import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import { useUserContext } from "../../utils/UserContext"
import moment from "moment"
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ColumnChart() {

const [footPrintState, setFootPrintState] = React.useState({
  day: null,
  week: null,
  month: null,
  year: null
})

  const [user] = useUserContext();
  const footPrintDay = [];
  const footPrintWeek = [];
  const footPrintMonth = []; 
  const footPrintYear = [];
  const formattedArr= []
  const todayUnformatted = new Date()
  const today = moment(todayUnformatted).format()
  const lastWeek = moment(today).subtract(7, "days").fromNow()
  const lastMonth = moment(today).subtract(30, "days").fromNow()
  const lastYear = moment(today).subtract(365, "days").fromNow()

  function formatDates() {
    user.routes.map((route) => {
      formattedArr.push({
        created: moment(route.created).format(),
        footprint: route.footprint
      }
        )
      
    })
    console.log(formattedArr, "ARRAY")
  }

  // function findSumDay(arr) {
  //   let sum = 0
  //   for(let i=1; i<arr.length; i++) {
  //     sum = i-1
  //   }
  //   setFootPrintState({...footPrintState, day: sum })
  // };

  // function findSumWeek(arr) {
  //   let sum = 0
  //   for(let i=1; i<arr.length; i++) {
  //     sum = i-1
  //   }
  //   setFootPrintState({...footPrintState, week: sum })
  // };

  // function findSumMonth(arr) {
  //   let sum = 0
  //   for(let i=1; i<arr.length; i++) {
  //     sum = i-1
  //   }
  //   setFootPrintState({...footPrintState, month: sum })
  // };

  // function findSumYear(arr) {
  //   let sum = 0
  //   for(let i=1; i<arr.length; i++) {
  //     sum = i-1
  //   }
  //   setFootPrintState({...footPrintState, year: sum })
  // }

  function sortRoutes() {
    formattedArr.map((date) => {
      if (date > lastWeek) {
        footPrintDay.push(date.footprint)
      } else if (date < lastWeek) {
        footPrintWeek.push(date.footprint)
      } else if (date < lastMonth) {
        footPrintMonth.push(date.footprint)
      } else  if (date < lastYear) {
        footPrintYear.push(date.footprint)
      }  
    })
    let daySum = 0;
    let weekSum = 0;
    let monthSum = 0;
    let yearSum = 0;
    console.log("PRIOR TO CONDITIONAL", daySum, weekSum, monthSum, yearSum)

    if (footPrintDay.length = 1) {
      daySum = footPrintDay[0]
    } else if (footPrintDay.length > 1) {
      for (let i = 1; i < footPrintDay.length; i++) {
        daySum = daySum + footPrintDay[i]
      }
    } else {
      daySum = 0
    };
    if (footPrintWeek.length = 1) {
      weekSum = footPrintWeek[0]
    } else if (footPrintWeek.length > 1) {
      for (let i = 1; i < footPrintWeek.length; i++) {
        weekSum = weekSum + footPrintWeek[i]
      }
    } else if (footPrintWeek.length = 0) {
      weekSum = 0
    };
    if (footPrintMonth.length = 1) {
      monthSum = footPrintMonth[0]
    } else if (footPrintMonth.length > 1) {
      for (let i = 1; i < footPrintMonth.length; i++) {
        monthSum = monthSum + footPrintMonth[i]
      }
    } else {
      monthSum = 0
    };
    if (footPrintYear.length = 1) {
      yearSum = footPrintYear[0]
    } else if (footPrintYear.length > 1) {
      for (let i = 1; i < footPrintYear.length; i++) {
        yearSum = yearSum + footPrintYear[i]
      }
    } else {
      yearSum = 0
    };

    console.log(daySum, weekSum, monthSum, yearSum)
  }

  formatDates()
  sortRoutes()

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
            { label: "Actual /Day", y: footPrintState.day, color: "OliveDrab"},
            { label: "US Avg. /Day", y: 318.15, color: "YellowGreen"},
            { label: "Actual /Week", y: footPrintState.week, color: "OliveDrab"},
            { label: "US Avg. /Week", y: 318.15 , color: "YellowGreen"},
            { label: "Actual /Month", y: footPrintState.month, color: "OliveDrab"},
            { label: "US Avg. /Month", y: 1383.33, color: "YellowGreen"},
            { label: "Actual /Year", y: footPrintState.year, color: "OliveDrab"},
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

export default ColumnChart;
