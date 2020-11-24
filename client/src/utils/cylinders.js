const vDB = require("./vehicle.json");

const cylindersArr = [];
for (let i = 0; i < vDB.length; i++) {
  // console.log(cylindersArr.indexOf(vDB[i].cylinders));
  if (cylindersArr.indexOf(vDB[i].cylinders === -1)) {
    cylindersArr.push(vDB[i].cylinders);
  }
}

const Cylinders = Array.from(new Set(cylindersArr));

export default Cylinders;
