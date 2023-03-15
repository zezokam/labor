function calculateGratuity() {
  // Get input values
  var startDate = new Date(document.getElementById("startDate").value);
  var endDate = new Date(document.getElementById("endDate").value);
  var lastBasicWage = parseFloat(document.getElementById("lastBasicWage").value);

  // Calculate years, months, and days of service
  var yearsOfService = endDate.getFullYear() - startDate.getFullYear();
  var monthsOfService = endDate.getMonth() - startDate.getMonth();
  var daysOfService = endDate.getDate() - startDate.getDate();

  if (daysOfService < 0) {
    var daysInLastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    daysOfService += daysInLastMonth;
    monthsOfService--;
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
    gratuityAmount = (dailyWage * 15 * yearsOfService) + (dailyWage * monthsOfService * 15 / 12) + (dailyWage * daysOfService / 12);
  } else {
    gratuityAmount = (dailyWage * 15 * 3) + (dailyWage * 30 * (yearsOfService - 3)) + (dailyWage * monthsOfService * 30 / 12) + (dailyWage * daysOfService / 12);
  }

  // Format duration of service
  var duration = "";
  if (yearsOfService == 1) {
    duration += "1 year";
  } else if (yearsOfService == 2) {
    duration += "2 years";
  } else if (yearsOfService >= 3 && yearsOfService <= 10) {
    duration += yearsOfService + " years";
  } else {
    duration += yearsOfService + " year";
  }

  if (monthsOfService > 0) {
    if (duration != "") {
      duration += " and ";
    }
    if (monthsOfService == 1) {
      duration += "1 month";
    } else if (monthsOfService == 2) {
      duration += "2 months";
    } else if (monthsOfService >= 3 && monthsOfService <= 10) {
      duration += monthsOfService + " months";
    } else if (monthsOfService == 12) {
      duration += "1 year";
    } else {
      duration += "months";
    }
  }

  if (daysOfService > 0) {
    if (duration != "") {
      duration += " and ";
    }
    if (daysOfService == 1) {
      duration += "1 day";
    } else if (daysOfService == 2) {
      duration += "2 days";
    } else if (daysOfService >= 3 && daysOfService <= 10) {
      duration += daysOfService + " days";
    } else {
      duration += daysOfService + " day";
    }
  }

  // Display result
  var resultString = "Gratuity Amount: " + gratuityAmount.toFixed(3) + " SAR" + "<br>" + "Duration of Service: " + duration;
  document.getElementById("result").innerHTML = resultString;
}
