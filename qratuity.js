function calculateGratuity() {
	// Get input values
	var startDate = new Date(document.getElementById("startDate").value);
	var endDate = new Date(document.getElementById("endDate").value);
	var monthlySalary = parseInt(document.getElementById("monthlySalary").value);

	// Calculate daily salary
	var dailySalary = monthlySalary / 30;

	// Calculate years of service
	var yearsOfService = (endDate - startDate) / (1000 * 60 * 60 * 24 * 365);

	// Calculate gratuity rate
	var gratuityRate;
	if (yearsOfService <= 3) {
		gratuityRate = 15;
	} else {
		gratuityRate = 30;
	}

	// Calculate fraction of year of service
	var fractionOfYear = (endDate - startDate) % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 365);

	// Calculate gratuity amount
	var gratuityAmount = (gratuityRate / 30) * dailySalary * (yearsOfService + fractionOfYear);

	// Display result
	document.getElementById("result").innerHTML = "The post service gratuity is: " + gratuityAmount.toFixed(2) + " OMR";
}
