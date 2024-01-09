const departmentSalary = {
  HR: 120000,
  development: 550000,
  PR: 50000,
  marketing: 120000,
  assistan: undefined,
};

function sumSalary(salaryObject) {
  let sum = 0;

  for (let key in salaryObject) {
    if (typeof salaryObject[key] === "number") {
      sum = sum + salaryObject[key];
    }
  }

  return sum;
}
