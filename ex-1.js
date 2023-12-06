const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function forEach(array, operation) {
  for (let i = 0; i < array.length; i++) {
    operation(array[i]);
  }
}

function new500(price) {
  const newEmployeeSalaries = price + 500;
  console.log(newEmployeeSalaries);
}

forEach(employeeSalaries, new500);
