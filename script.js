const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const root = document.getElementById("main");
const date = new Date();
for (const day of week) {
  const element = document.createElement("div");
  element.textContent = day;
  if (day == "Суббота" || day == "Воскресенье") {
    element.style = "font-style:italic";
  } else if (day == week[date.getDay() - 1]) {
    element.style = "font-weight:bold";
  }
  root.append(element);
}

console.log(date.getDay());
