import React from "react";



const [wrapperState, setWrapperState] = useState({
  vehicles,
  filteredVehics: [],
});
const handleFilter = (event) => {
  const newFiltered = []
  wrapperState.vehicles.map (vehicle => {
    if (vehicle[event.target.name].toLowerCase().substring(0, event.target.value.length) === event.target.value.toLowerCase()) {
      newFiltered.push(vehicle)
    }
  })
  setWrapperState({...wrapperState, filteredEmps: newFiltered })
}
let vehicsToDisplay = wrapperState.vehicles
if (wrapperState.filteredVehics.length > 0) {
  vehicsToDisplay = wrapperState.filteredVehics
}

export default VehicleDrop1;
