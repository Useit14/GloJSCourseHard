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
const date = new Date();
const element1 = document.createElement("div");
const element2 = document.createElement("div");

const getHourWord = () => {
  const hours = new Date().getHours();
  if (hours == 1) {
    return "час";
  } else if ([2, 3, 4].includes(parseInt(hours.toString()[1]))) {
    return "часа";
  } else {
    return "часов";
  }
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

element1.textContent = `Сегодня ${week[date.getDay() - 1]}, ${date.getDate()} ${
  month[date.getMonth()]
} ${date.getFullYear()} года, ${date.getHours()} ${getHourWord()} ${date.getMinutes()} минут ${date.getSeconds()} секунды `;

setInterval(() => {
  const date1 = new Date();
  element2.textContent = addZero(
    `${date1.getDate()}.${
      date1.getMonth() + 1
    }.${date1.getFullYear()} - ${date1.getHours()}.${date1.getMinutes()}.${date1.getSeconds()}`
  );
}, 100);
