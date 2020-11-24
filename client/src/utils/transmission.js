const vDB = require("./vehicle.json");

const transmissionArr = [];
for (let i = 0; i < vDB.length; i++) {
  // console.log(transmissionArr.indexOf(vDB[i].transmission));
  if (transmissionArr.indexOf(vDB[i].transmission === -1)) {
    transmissionArr.push(vDB[i].transmission);
  }
}

const Transmissions = Array.from(new Set(transmissionArr));

export default Transmissions;
