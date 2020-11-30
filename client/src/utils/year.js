const vDB = require("./vehicle.json");

const yearArr = [];
for (let i = 0; i < vDB.length; i++) {
  // console.log(yearArr.indexOf(vDB[i].year));
  if (yearArr.indexOf(vDB[i].year === -1)) {
    yearArr.push(vDB[i].year);
  }
}

const Years = Array.from(new Set(yearArr));

export default Years;
