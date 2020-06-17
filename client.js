
$(document).ready(start);


const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);



function showAllBonuses() {
  for(employeeObj of employees){
    console.log('Employee information:', employeeObj);
    console.log('Employee bonus statistics:',updateEmployee(employeeObj));
  }
}


function updateEmployee(employeeObj){
  
  //destructure contents of employeeObj into another object 
  //without destructuring original Object will just change its' name, hence being permanantly altered.
  let employee = {...employeeObj};

  //convert number strings into numbers
  employee.employeeNumber = Number(employee.employeeNumber);
  employee.annualSalary = Number(employee.annualSalary);

  //base bonusPercentage begins at 0%
  employee.bonusPercentage = 0;

   //company experience based bonusPercentage addition
  if((String(employee.employeeNumber)).length === 4){
    employee.bonusPercentage += 5;
  } 
  //if annualSalary is above 65k 
  if(employee.annualSalary > 65000){
    employee.bonusPercentage -= 1;
  }

  //reviewRating based bonusPercentage addition
  if(employee.reviewRating <= 2){
    //ratings 2 and below are not eligible for bonuses
    employee.bonusPercentage = 0;
  }
  else if(employee.reviewRating===3){
      employee.bonusPercentage += 4;
  }
  else if(employee.reviewRating===4){
    employee.bonusPercentage += 6;
  }
  else if(employee.reviewRating === 5){
    employee.bonusPercentage += 10;
  }

  //No bonusPercentage above max of 13%
  if(employee.bonusPercentage > 13){
    employee.bonusPercentage = 13;
  }
  //No bonusPercentage below min of 0%
  else if(employee.bonusPercentage <= 0){
    employee.bonusPercentage = 0;
  }
  //calculate total bonus rounded to the nearest dollar
  employee.totalBonus = Math.round(employee.annualSalary * (employee.bonusPercentage/100));
  //calculate total compensation
  employee.totalCompensation = employee.totalBonus + employee.annualSalary;
  //remove unwanted properties now that calculations are complete
  delete employee.annualSalary;
  delete employee.employeeNumber;
  delete employee.reviewRating;
  //return employee object which has property information about employee bonuses
  return employee;
}

function start(){
  $('#bonus-button').on('click', showAllBonuses);
}

