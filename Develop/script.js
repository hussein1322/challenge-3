// Collect employee data
// Function to update the employee roster table
const updateEmployeeTable = function(employeesArray) {
  const tableBody = document.getElementById("employee-table");
  tableBody.innerHTML = "";

  employeesArray.forEach(employee => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.firstName}</td>
      <td>${employee.lastName}</td>
      <td>${employee.salary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      })}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Collect employee data
const collectEmployees = function() {
  const employeesArray = [];
  let addAnotherEmployee = true;

  while (addAnotherEmployee) {
    let firstName = prompt("Enter employee's first name:");
    let lastName = prompt("Enter employee's last name:");
    let salary = parseFloat(prompt("Enter employee's salary:"));

    if (firstName && lastName && !isNaN(salary)) {
      employeesArray.push({ firstName, lastName, salary });
    } else {
      alert("Invalid input! Please provide valid information.");
    }

    addAnotherEmployee = confirm("Do you want to add another employee?");
  }

  // Sort employees by last name
  employeesArray.sort((a, b) => a.lastName.localeCompare(b.lastName));
  if (employeesArray.length > 0) {
    const totalSalary = employeesArray.reduce((acc, curr) => acc + curr.salary, 0);
    const averageSalary = totalSalary / employeesArray.length;
    console.log("Average Salary:", averageSalary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    }));
  } else {
    console.log("No employees added yet.");
  }
  getRandomEmployee(employeesArray);
  // Update employee roster table
  updateEmployeeTable(employeesArray);
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees added yet.");
    return;
  }

  const totalSalary = employeesArray.reduce((acc, curr) => acc + curr.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log("Average Salary:", averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  }));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees added yet.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log("Random Employee:", randomEmployee.firstName, randomEmployee.lastName);
}
