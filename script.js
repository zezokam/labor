function calculateGratuity() {
  // Get the input values and validate them
  const start_date_input = document.getElementById("start_date");
  const end_date_input = document.getElementById("end_date");
  const monthly_salary_input = document.getElementById("monthly_salary");

  const start_date_value = start_date_input.value;
  const end_date_value = end_date_input.value;
  const monthly_salary_value = parseFloat(monthly_salary_input.value);

  if (!isValidDate(start_date_value)) {
    alert("Please enter a valid start date in the format yyyy-mm-dd.");
    return;
  }

  if (!isValidDate(end_date_value)) {
    alert("Please enter a valid end date in the format yyyy-mm-dd.");
    return;
  }

  if (isNaN(monthly_salary_value) || monthly_salary_value < 0) {
    alert("Please enter a valid monthly salary greater than or equal to 0.");
    return;
  }

  // Convert the dates to Date objects
  const start_date = new Date(start_date_value);
  const end_date = new Date(end_date_value);

  // Calculate the daily salary and years of service
  const daily_salary = monthly_salary_value / 30;
  const years_of_service = Math.floor((end_date - start_date) / (1000 * 60 * 60 * 24 * 365));

  // Calculate the gratuity based on the years of service
  let post_service_gratuity = 0;

  if (years_of_service >= 1) {
    if (years_of_service <= 3) {
      post_service_gratuity = years_of_service * 15 * daily_salary;
    } else {
      post_service_gratuity = 3 * 15 * daily_salary;
      post_service_gratuity += (years_of_service - 3) * 30 * daily_salary;
    }
  }

  // Update the result element with the calculated gratuity
  const result_element = document.getElementById("result");
  result_element.innerHTML = "Post-Service Gratuity: " + post_service_gratuity.toFixed(3) + " O.R";
}

function isValidDate(dateString) {
  // Check that the date string is in the format yyyy-mm-dd
  const date_regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!date_regex.test(dateString)) {
    return false;
  }

  // Check that the date is a valid date
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return false;
  }

  return true;
}
