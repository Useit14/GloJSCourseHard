const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const month = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const root = document.getElementById("main");

const element1 = document.createElement("div");
const element2 = document.createElement("div");

const getDateWord = () => {
  const dateWord = {};
  const date = new Date();
  const hours = date.getHours().toString();
  const minutes = date.getMinutes().toString();
  const seconds = date.getSeconds().toString();

  if (["11", "12", "13", "14"].includes(hours)) {
    dateWord.hours = "часов";
  } else if (hours.substring(hours.length - 1, hours.length) == "1") {
    dateWord.hours = "час";
  } else if (
    ["2", "3", "4"].includes(hours.substring(hours.length - 1, hours.length))
  ) {
    dateWord.hours = "часа";
  } else {
    dateWord.hours = "часов";
  }

  if (["11", "12", "13", "14"].includes(minutes)) {
    dateWord.minutes = "минут";
  } else if (minutes.substring(minutes.length - 1, minutes.length) == "1") {
    dateWord.minutes = "минута";
  } else if (
    ["2", "3", "4"].includes(
      minutes.substring(minutes.length - 1, minutes.length)
    )
  ) {
    dateWord.minutes = "минуты";
  } else {
    dateWord.minutes = "минут";
  }

  if (["11", "12", "13", "14"].includes(seconds)) {
    dateWord.seconds = "секунд";
  } else if (seconds.substring(seconds.length - 1, seconds.length) == "1") {
    dateWord.seconds = "сенунда";
  } else if (
    ["2", "3", "4"].includes(
      seconds.substring(seconds.length - 1, seconds.length)
    )
  ) {
    dateWord.seconds = "секунды";
  } else {
    dateWord.seconds = "секунд";
  }

  return dateWord;
};

const addZero = (date) => {
  let arr = date.toString().split("-");
  let count = 0;
  arr.forEach((element) => {
    let innerArr = element.split(".");
    let count1 = 0;
    innerArr.forEach((element) => {
      if (element.length == 1) {
        innerArr[count1] = "0" + element;
      }
      count1++;
    });
    arr[count] = innerArr.join(".");
    count++;
  });
  return arr.join("-");
};

root.append(element1);
root.append(element2);

setInterval(() => {
  const date = new Date();

  element1.textContent = `Сегодня ${
    week[date.getDay() - 1]
  }, ${date.getDate()} ${
    month[date.getMonth()]
  } ${date.getFullYear()} года, ${date.getHours()} ${
    getDateWord().hours
  } ${date.getMinutes()} ${getDateWord().minutes} ${date.getSeconds()} ${
    getDateWord().seconds
  } `;

  element2.textContent = addZero(
    `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()} - ${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`
  );
}, 100);
