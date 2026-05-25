function calculateAge() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  // Input validation
  if (!day || !month || !year) {
    document.getElementById("result").innerText = "Please fill all fields!";
    return;
  }

  let today = new Date();
  let birthDate = new Date(year, month - 1, day);

  if (birthDate > today) {
    document.getElementById("result").innerText = "Invalid Date of Birth!";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust days and months
  if (days < 0) {
    months--;
    let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("result").innerText =
    `Age: ${years} Years, ${months} Months, ${days} Days`;
}