function calculateGratuity() {
  // Get input values
  var startDate = new Date(document.getElementById("startDate").value);
  var endDate = new Date(document.getElementById("endDate").value);
  var lastBasicWage = parseInt(document.getElementById("lastBasicWage").value);

  // Calculate years of service and months of service
  var yearsOfService = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 365));
  var monthsOfService = Math.floor(((endDate - startDate) % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

  // Calculate daily wage
  var dailyWage = lastBasicWage / 30;

  // Calculate gratuity amount
  var gratuityAmount = 0;
  if (yearsOfService < 3) {
    gratuityAmount = (15 * dailyWage * 30) * yearsOfService + (monthsOfService * dailyWage * 15);
  } else {
    gratuityAmount = (30 * dailyWage * 30) * yearsOfService + (monthsOfService * dailyWage * 30);
  }

  // Display result
  document.getElementById("result").innerHTML = "The post service gratuity is: " + gratuityAmount.toFixed(2) + " OMR";
}
