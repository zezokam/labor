function calculateGratuity() {
    // Get input values
    var startDate = new Date(document.getElementById("startDate").value);
    var endDate = new Date(document.getElementById("endDate").value);
    var lastBasicWage = parseInt(document.getElementById("lastBasicWage").value);

    // Calculate years and months of service
    var yearsOfService = endDate.getFullYear() - startDate.getFullYear();
    var monthsOfService = endDate.getMonth() - startDate.getMonth();
    if (monthsOfService < 0) {
        yearsOfService--;
        monthsOfService += 12;
    }

    // Calculate daily wage
    var dailyWage = lastBasicWage / 30;

    // Calculate gratuity amount
var gratuityAmount = 0;
if (yearsOfService < 3) {
    gratuityAmount = (dailyWage * 15 * yearsOfService);
} else {
    gratuityAmount = (dailyWage * 45) + (dailyWage * 30 * (yearsOfService - 3)) + (dailyWage * monthsOfService / 12 * 30);
}


    // Display result
    document.getElementById("result").innerHTML = "The end of service gratuity is: " + gratuityAmount.toFixed(2) + " OMR";
}
