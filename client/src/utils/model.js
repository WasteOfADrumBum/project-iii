const vDB = require("./vehicle.json");

const modelArr = [];
for (let i = 0; i < vDB.length; i++) {
  // console.log(modelArr.indexOf(vDB[i].model));
  if (modelArr.indexOf(vDB[i].model === -1)) {
    modelArr.push(vDB[i].model);
  }
}

const Models = Array.from(new Set(modelArr));

export default Models;
