function calculateGratuity() {
  // Get input values
  var startDate = new Date(document.getElementById("startDate").value);
  var endDate = new Date(document.getElementById("endDate").value);
  var lastBasicWage = parseFloat(document.getElementById("lastBasicWage").value).toFixed(3);

  // Calculate years and months of service
  var yearsOfService = endDate.getFullYear() - startDate.getFullYear();
  var totalMonthsOfService = (endDate.getMonth() + 12 * yearsOfService) - startDate.getMonth();
  var monthsOfService = totalMonthsOfService % 12;
  var daysOfService = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  // Calculate total months of service
  var totalDaysOfService = (yearsOfService * 360) + (monthsOfService * 30) + daysOfService;

  // Calculate gratuity amount
  var gratuityAmount = 0;
  if (totalDaysOfService < 1095) {
    gratuityAmount = (lastBasicWage / 30) * totalDaysOfService * 0.5;
  } else if (totalDaysOfService < 2190) {
    gratuityAmount = (lastBasicWage / 30) * 1095 * 0.5 + (lastBasicWage / 30) * (totalDaysOfService - 1095) * 0.6667;
  } else {
    gratuityAmount = (lastBasicWage / 30) * 1095 * 0.5 + (lastBasicWage / 30) * 1095 * 0.6667 + (lastBasicWage / 30) * (totalDaysOfService - 2190);
  }

  // Display result
  var duration = yearsOfService + " years, " + monthsOfService + " months, " + (daysOfService - 1) + " days";
  document.getElementById("result").innerHTML = "The end of service gratuity is: " + gratuityAmount.toFixed(3) + " OMR. Duration of service: " + duration;
}
