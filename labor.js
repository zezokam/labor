function calculateYearsOfService(startDate, endDate) {
	// calculate the number of years between two dates
	var years = endDate.getFullYear() - startDate.getFullYear();
	var monthDifference = endDate.getMonth() - startDate.getMonth();
	if (monthDifference < 0 || (monthDifference === 0 && endDate.getDate() < startDate.getDate())) {
		years--;
	}
	return years;
}

function calculateMonthsOfService(startDate, endDate) {
	// calculate the number of months between two dates
	var months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
	months -= startDate.getMonth() + 1;
	months += endDate.getMonth() + 1;
	return months <= 0 ? 0 : months;
}

function calculateGratuity() {
	var startDate = new Date(document.getElementById("start_date").value);
	var endDate = new Date(document.getElementById("end_date").value);
	var lastSalary = document.getElementById("last_salary").value;
	var yearsOfService = calculateYearsOfService(startDate, endDate);
	var gratuity;
	if (yearsOfService <= 3) {
		gratuity = (lastSalary * yearsOfService * 15) / 365;
	} else {
		var monthsOfService = calculateMonthsOfService(startDate, endDate);
		gratuity = (lastSalary * (3 * 15 / 365)) + ((monthsOfService - 36) * (lastSalary / 30));
	}
	document.getElementById("result").innerHTML = gratuity.toFixed(2) + " SAR";
}
