// Question 1
let employeeArray = [];

const sam = {
  first_name: 'Sam',
  department: 'Tech',
  designation: 'Manager',
  salary: 40000,
  raise_eligible: true,
};

const mary = {
  first_name: 'Mary',
  department: 'Finance',
  designation: 'Trainee',
  salary: 18500,
  raise_eligible: true,
};

const bill = {
  first_name: 'Bill',
  department: 'HR',
  designation: 'Executive',
  salary: 21200,
  raise_eligible: false,
};

employeeArray.push(sam);
employeeArray.push(mary);
employeeArray.push(bill);

console.log(`Q1: ${JSON.stringify(employeeArray)}`);

// Question 2
const company = {
  companyName: 'Tech Stars',
  website: 'www.techstars.site',
  employees: [sam, mary, bill],
};

console.log(`Q2: ${JSON.stringify(company)}`);

// Question 3
const anna = {
  first_name: 'Anna',
  department: 'Tech',
  designation: 'Executive',
  salary: 25600,
  raise_eligible: false,
}

employeeArray.push(anna);
company.employees = employeeArray;

console.log(`Q3 Employees: ${JSON.stringify(employeeArray)}`);
console.log(`Q3 Company: ${JSON.stringify(company)}`);

// Question 4
let totalSalary = 0;
company.employees.forEach((employee) => {
  totalSalary += employee.salary;
});

console.log(`Q4: ${totalSalary}`);

// Question 5
async function raiseSalaries(companyObject) {
  companyObject.employees.forEach((employee) => {
    if (employee.raise_eligible === true) {
      employee.salary = employee.salary + (employee.salary * 0.1);
      employee.raise_eligible = false;
    }
  })
}

raiseSalaries(company)

console.log(`Q5: ${JSON.stringify(company)}`);

// Question 6
const workFromHome = ['Anna', 'Sam'];

company.employees.forEach((employee) => {
  let employeeIsWorkingFromHome = false;

  workFromHome.forEach((wfhName) => {
    if (employee.first_name === wfhName) {
      employeeIsWorkingFromHome = true;
    }
  });

  if (employeeIsWorkingFromHome === true) {
    employee.wfh = true;
  } else {
    employee.wfh = false;
  }
});

console.log(`Q6: ${JSON.stringify(company)}`);
