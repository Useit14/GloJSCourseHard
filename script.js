let lang = prompt("Введите язык", "ru");

const daysRu = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const daysEng = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday ",
  "Friday ",
  "Saturday",
  "Sunday ",
];

if (lang == "ru") {
  daysRu.forEach((element) => {
    console.log(element);
  });
} else if (lang == "en") {
  daysEng.forEach((element) => {
    console.log(element);
  });
}

switch (lang) {
  case "ru":
    daysRu.forEach((element) => {
      console.log(element);
    });
    break;
  case "en":
    daysEng.forEach((element) => {
      console.log(element);
    });
    break;
}

const days = [daysRu, daysEng];
lang == "ru" ? console.log(days[0].join(",")) : console.log(days[1].join(","));

const namePerson = prompt("Введите имя", "Артем");

namePerson === "Артем"
  ? console.log("Директор")
  : namePerson == "Александр"
  ? console.log("Преподователь")
  : console.log("Студент");
