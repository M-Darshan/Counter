// const subtract = document.querySelector(".subtract");
// const resetCount = document.querySelector(".reset");
// const add = document.querySelector(".add");
let count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

// By event delegation
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    // setColor();
  } else if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    // setColor();
  } else if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    // setColor();
  }
  setColor();
});

const setColor = () => {
  if (count.innerHTML < 0) {
    count.style.color = "red";
  } else if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else {
    count.style.color = "white";
  }
};

// subtract.addEventListener("click", () => {
//   count.innerHTML--;
//   colorFunction();
// });

// add.addEventListener("click", () => {
//   count.innerHTML++;
//   colorFunction();
// });

// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
//   count.style.color = "white";
// });
