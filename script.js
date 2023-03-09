function calculateGratuity() {
	const start_date = new Date(document.getElementById("start_date").value);
	const end_date = new Date(document.getElementById("end_date").value);
	const monthly_salary = parseInt(document.getElementById("monthly_salary").value);

	const daily_salary = monthly_salary / 30;
	const years_of_service = Math.floor((end_date - start_date) / (1000 * 60 * 60 * 24 * 365));

	let post_service_gratuity = 0;

	if (years_of_service >= 1) {
		if (years_of_service <= 3) {
			post_service_gratuity = years_of_service * 15 * daily_salary;
		} else {
			post_service_gratuity = 3 * 15 * daily_salary;
			post_service_gratuity += (years_of_service - 3) * 30 * daily_salary;
		}
	}

	document.getElementById("result").innerHTML = "Post-Service Gratuity: " + post_service_gratuity.toFixed(2) + " O.R";
}
 
