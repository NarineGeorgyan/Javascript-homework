let cells = [];
const container = document.getElementById("container");
const startButton = document.getElementById("start-button");
let winCount = 0;
let loseCount = 0;
let levelUp = 0;
let num = 0;
let isWin = false;

const drawBoard = () => {
  for (let i = 0; i < 15; i++) {
    const cell = document.createElement("div");
    cell.className = "grid-item";
    container.appendChild(cell);
    cells = [...container.children];
  }
};
drawBoard();

startButton.addEventListener("click", (e) => {
  levelUp++;
  localStorage.setItem("levelUp", levelUp);
  num = Number(localStorage.getItem("levelUp"));

  openCardsCount(num);
});

function openCardsCount(num) {
  if (num < 6) getRandomCell(num);
  else if (num >= 6 && num <= 15) {
    localStorage.removeItem("levelUp");
    getRandomCell(6);
  } else {
    startButton.removeEventListener("click", openCardsCount);
    alert(`you are guestCount is ${winCount} and loseCount ${loseCount}`);
    location.reload();
  }
}

function getRandomCell(num) {
  let set = new Set();
  for (let i = 0; set.size < num; i++) {
    let index = Math.trunc(Math.random() * 12);
    set.add(index);
  }
  arr = [...set];
  foo(arr);
}

async function foo(arr) {
  const randomIndex = [];
  for (let i = 0; i < arr.length; i++) {
    let firstPlayer = await bar(arr[i]);
    cells[firstPlayer].style.backgroundColor = "red";
    cells[firstPlayer].setAttribute("data-id", `${arr[i]}`);
    setTimeout(() => {
      cells[firstPlayer].style.backgroundColor = "transparent";
    }, 300);
    randomIndex.push(firstPlayer);
  }

  checkMatched(randomIndex);
}
function checkMatched(randomIndex) {
  let sumCompleteIndex = 0;
  cells.forEach((cell, index) => {
    cell.addEventListener("click", (e) => {
      e.target.style.backgroundColor = "green";
      e.target.setAttribute("data-id", `${index}`);
      let p = cells.indexOf(cell);

      if (randomIndex.includes(p)) {
        e.target.classList.add("checked");
        sumCompleteIndex++;
        console.log(sumCompleteIndex);
      } else {
        loseCount++;
      }
      if (sumCompleteIndex === randomIndex.length) {
        console.log(e.target);
        winCount++;
        checked();
      }
      e.target.style.pointerEvents = "none";
    });
  });
}

function bar(i) {
  return new Promise((resolved) => setTimeout(() => resolved(i), 0));
}

function checked() {
  if (!isWin && winCount === num) {
    let id = setTimeout(() => {
      container.innerHTML = "";
      drawBoard();
    }, 300);
    setTimeout(() => {
      clearInterval(id);
    }, 500);
  }
}
