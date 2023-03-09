function calculate() {
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);
  const salary = parseFloat(document.getElementById("salary").value);

  const daysWorked = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const yearsWorked = daysWorked / 365;
  const dailySalary = salary / 30;

  let gratuity = 0;
  let steps = "";

  if (yearsWorked < 1) {
    steps = "البدل التقاعدي غير مطبق على مدة
