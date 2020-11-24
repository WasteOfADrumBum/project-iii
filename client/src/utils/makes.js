const vDB = require("./vehicle.json");

const makeArr = [];
for (let i = 0; i < vDB.length; i++) {
  // console.log(makeArr.indexOf(vDB[i].make));
  if (makeArr.indexOf(vDB[i].make === -1)) {
    makeArr.push(vDB[i].make);
  }
}

const Makes = Array.from(new Set(makeArr));

export default Makes;
