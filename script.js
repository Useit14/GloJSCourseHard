"use strict";
let str = prompt(
  "Введите строку",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis impedit accusantium nostrum maiores amet incidunt consectetur quibusdam sequi aliquid rem minima nesciunt consequuntur at voluptates veniam itaque, suscipit debitis adipisci?"
);

function toOverflow(str) {
  function getStr(str) {
    if (str / 2) {
      alert("Введите строку!");
      let str = prompt(
        "Введите строку",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis impedit accusantium nostrum maiores amet incidunt consectetur quibusdam sequi aliquid rem minima nesciunt consequuntur at voluptates veniam itaque, suscipit debitis adipisci?"
      );
      toOverflow(str);
    } else {
      return str;
    }
  }

  function toOverflowStart(str) {
    let result = "";
    let i = 0;
    loop: for (let index = 0; index < str.length; index++) {
      const element = str[index];
      while (element == " ") {
        continue loop;
      }
      i = index;
      break;
    }
    for (let index = i; index < str.length; index++) {
      const element = str[index];
      result += element;
    }
    return result;
  }

  function toOverflowEnd(str) {
    let result = "";
    let i = 0;
    loop: for (let index = str.length; index > 0; index--) {
      const element = str[index - 1];
      while (element == " ") {
        continue loop;
      }
      i = index;
      break;
    }
    for (let index = i; index > 0; index--) {
      const element = str[index - 1];
      result = element + result;
    }
    return result;
  }

  function toOverflowStr(str) {
    return str.substring(0, 30) + "...";
  }

  let string = getStr(str);
  let strOverflow = toOverflowEnd(toOverflowStart(string));
  if (strOverflow.length > 30) {
    return toOverflowStr(strOverflow);
  } else {
    return strOverflow;
  }
}
console.log(toOverflow(str));
