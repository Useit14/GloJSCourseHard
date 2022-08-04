let num;

const isNumber = function (num) {
  return !isNaN(num) && isFinite(num);
};

do {
  num = prompt("Введите число", "  54");
  if (num == null) {
    num = 0;
    break;
  }
  num = parseFloat(num);
} while (!isNumber(num) || num.length == 0);

console.log(num, typeof num);

let arr = [22, 43, 53, 23, 42, 16, 73];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index].toString();
  if (element[0] == 2 || element[0] == 4) {
    console.log(element);
  }
}

let numbers = [];
let simpleNumbers = [];

for (let index = 1; index < 101; index++) {
  numbers.push(index);
}

for (let index = 0; index < numbers.length; index++) {
  let tempArray = [];
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[index] % numbers[i] == 0) {
      tempArray.push("Делитель " + numbers[i]);
    }
  }
  if (tempArray.length == 2) {
    tempArray.push("Число " + numbers[index]);
    simpleNumbers.push(tempArray);
  }
  tempArray = [];
}
console.log(simpleNumbers);
