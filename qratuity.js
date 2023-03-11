function calculateGratuity() {
  // Get input values
  var startDate = new Date(document.getElementById("startDate").value);
  var endDate = new Date(document.getElementById("endDate").value);
  var lastBasicWage = parseFloat(document.getElementById("lastBasicWage").value).toFixed(3);

  // Calculate years and months of service
  var yearsOfService = endDate.getFullYear() - startDate.getFullYear();
  var monthsOfService = endDate.getMonth() - startDate.getMonth();
  var daysOfService = endDate.getDate() - startDate.getDate();

  if (daysOfService < 0) {
    var daysInLastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    if (daysOfService + daysInLastMonth >= 30) {
      monthsOfService--;
    } else {
      daysOfService += daysInLastMonth;
    }
  }

  if (monthsOfService < 0) {
    yearsOfService--;
    monthsOfService += 12;
  }

  // Calculate daily wage
  var dailyWage = lastBasicWage / 30;

  // Calculate gratuity amount
  var gratuityAmount = 0;
  if (yearsOfService < 3) {
    gratuityAmount = (dailyWage * 15 * yearsOfService) + (dailyWage * monthsOfService * 30 / 12) + (dailyWage * daysOfService / 12);
  } else {
    gratuityAmount = (dailyWage * 15 * 3) + (dailyWage * 30 * (yearsOfService - 3)) + (dailyWage * monthsOfService * 30 / 12) + (dailyWage * daysOfService / 12);
  }

  // Display result
  var duration = yearsOfService + " years, " + monthsOfService + " months, " + daysOfService + " days";
  document.getElementById("result").innerHTML = "The end of service gratuity is: " + gratuityAmount.toFixed(3) + " OMR. /nDuration of service: " + duration;
}
