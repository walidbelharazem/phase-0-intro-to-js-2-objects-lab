// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  };
  
function updateEmployeeWithKeyAndValue (employee, key, value) {
    const nemployee={... employee}
    nemployee [key]  = value ;
    return (nemployee)
}
 
 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key]  = value ;
    return (employee)
}

function deleteFromEmployeeByKey(employee, key){
    const nemployee = {... employee}
    delete nemployee[key] 
return (nemployee)
}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key] 
    return (employee)
}