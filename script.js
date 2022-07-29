let num = 266219;
let numStr = num.toString();

let mult = 1;
for (let index = 0; index < numStr.length; index++) {
  const element = +numStr[index];
  mult *= element;
}
console.log(mult);

let numToPower3 = mult ** 3;

let numToPower3Str = numToPower3.toString();
console.log(numToPower3Str.substring(0, 2));
