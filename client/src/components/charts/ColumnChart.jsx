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
  // const formattedArr= []
  const now = new Date()
  // const today = moment(todayUnformatted).startOf().fromNow()
  // const lastWeek = moment(todayUnformatted).subtract(7, "days").fromNow()
  // const lastMonth = moment(todayUnformatted).subtract(30, "days").fromNow()
  // const lastYear = moment(todayUnformatted).subtract(365, "days").fromNow()
  // console.log(lastWeek)

  // function formatDates() {
  //   user.routes.map((route) => {
  //     formattedArr.push({
  //       created: moment(route.created).format(),
  //       footprint: route.footprint
  //     }
  //       )
      
  //   })
  //   console.log(formattedArr, "ARRAY")
  // }

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
    console.log("ROUTES", user.routes)
    user.routes.map((date) => {
      console.log(now - date.created)
      // console.log(date.created, "DATE CREATED | ", [date.created].diff(lastWeek))
      if (now - date.created < 86400000) {
        footPrintDay.push(date.footprint)
      } else if (now - date.created > 604800000) {
        footPrintWeek.push(date.footprint)
      } else if (now - date.created > 2592000000) {
        footPrintMonth.push(date.footprint)
      } else  if (now - date.created > 31104000000) {
        footPrintYear.push(date.footprint)
      }  
    })
    console.log(footPrintDay, footPrintWeek, footPrintMonth, footPrintYear)
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

  // formatDates()
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
