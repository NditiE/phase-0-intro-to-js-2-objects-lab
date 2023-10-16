// Define the employee object
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  };
  
  // Function to update an employee with a new key-value pair (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to update an employee with a new key-value pair (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from an employee (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key from an employee (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Export the functions
  module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
  };
  
  // Example usage of the functions
  let newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
  console.log(newEmployee);
  
  let mutatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log(mutatedEmployee);
  
  let deletedEmployee = deleteFromEmployeeByKey(employee, "name");
  console.log(deletedEmployee);
  
  let deletedMutatedEmployee = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(deletedMutatedEmployee);
  