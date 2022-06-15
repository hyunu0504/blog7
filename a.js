//5초후 부터 작동되는 버튼

const btn = document.querySelector(".btn");
const colors = document.querySelector(".colors");

let count = 0;

const counter = setInterval(changeNum, 1000);

function changeColor() {
  if (count == 1) {
    colors.style.backgroundColor = "black";
  }
}

btn.addEventListener("click", changeColor);

setTimeout(timer, 5000);

function timer() {
  count++;
}

//5초후 부터 작동안되는 버튼

const btn2 = document.querySelector(".btn2");
const colors2 = document.querySelector(".colors2");

let count2 = 0;

btn2.addEventListener("click", changeColor2);

function changeColor2() {
  if (count2 != 1) {
    colors2.style.backgroundColor = "powderblue";
  }
}
function timer2() {
  count2 = 1;
  clearInterval(stop2);
}
const stop2 = setInterval(timer2, 5000);

let i = 5;

function changeNum() {
  i--;
  console.log(i);

  btn.innerHTML = `${i}초 후부터 작동되는 버튼`;
  btn2.innerHTML = `${i}초 후부터 작동안되는 버튼`;

  if (i == 0) {
    clearInterval(counter);
    btn.innerHTML = "작동 o";
    btn2.innerHTML = "작동 x";
  }
}
