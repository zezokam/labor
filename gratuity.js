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
  duration += "سنة";
} else if (yearsOfService == 2) {
  duration += "سنتين";
} else if (yearsOfService >= 3 && yearsOfService <= 10) {
  duration += yearsOfService + " سنوات";
} else {
  duration += yearsOfService + " سنة";
}

if (monthsOfService > 0) {
  if (duration != "") {
    duration += " و ";
  }
  if (monthsOfService == 1) {
    duration += "شهر";
  } else if (monthsOfService == 2) {
    duration += "شهرين";
  } else if (monthsOfService >= 3 && monthsOfService <= 10) {
    duration += monthsOfService + " أشهر";
  } else if (monthsOfService == 12) {
    duration += "سنة";
  } else {
    duration += "أشهر";
  }
}

if (daysOfService > 0) {
  if (duration != "") {
    duration += " و ";
  }
  if (daysOfService == 1) {
    duration += "يوم";
  } else if (daysOfService == 2) {
    duration += "يومين";
  } else if (daysOfService >= 3 && daysOfService <= 10) {
    duration += daysOfService + " أيام";
  } else {
    duration += daysOfService + " يوم";
  }
}

  // Display result
  var duration = yearsOfService + " " + yearsText + " و " + monthsOfService + " " + monthsText + " و " + daysOfService + " " + daysText;
  var resultString = "قيمة المكافأة: " + gratuityAmount.toFixed(3) + " ريال" + "<br>" + "مدة الخدمة: " + duration;
  document.getElementById("result").innerHTML = resultString;
}
