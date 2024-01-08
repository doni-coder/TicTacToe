let turnMusic = new Audio("./ting.mp3");
let music = new Audio("./music.mp3");
let gameOverMusic = new Audio("./gameover.mp3");
let info = document.querySelector(".info");
let turn = "X";
let reset = document.querySelector("#reset");
let imgBox = document.querySelector(".gifimg")
info.textContent = `Turn for ${turn}`;

//change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//function to check win
const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      info.textContent = `${boxTexts[e[0]].innerText} won`;
      imgBox.style.width = "200px";
      setTimeout(()=>{
        gameOverMusic.play();
      },1000)
    }
  });
};

//Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      info.textContent = `Turn for ${turn}`;
      checkWin();
      turnMusic.play();
    }
  });
});

reset.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxText");
  Array.from(boxText).forEach((element) => {
    element.innerText = " ";
  });
  turn = "X";
  info.textContent = `Turn for ${turn}`;
  imgBox.style.width = "0px"
});
