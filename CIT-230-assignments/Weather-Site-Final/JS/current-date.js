//  Current Date

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("fullDate").textContent = new Date(
  document.lastModified
).toLocaleDateString("en-US", options);

document.getElementById("time").textContent = new Date(
  document.lastModified
).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

document.getElementById("updateYear").textContent = new Date().getFullYear();

// Day Full Name Array

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Month Full Name Array

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const todaysDate = new Date();
const dayName = dayNames[todaysDate.getDay()];
const monthName = months[todaysDate.getMonth()];
const today =
  dayName +
  ", " +
  todaysDate.getDate() +
  " " +
  monthName +
  ", " +
  todaysDate.getFullYear();

document.getElementById("today").textContent = today;
