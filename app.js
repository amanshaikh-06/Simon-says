let gameSeq = [];
let userSeq = [];

// for setting High Score on Game page
let h3 = document.querySelector("h3");
let highScore = 0;

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("Game Started");
    started = true;
  }

  levelUp();
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  // Choosing randon Button
  let randomIDX = Math.floor(Math.random() * 4);
  let randomClr = btns[randomIDX];
  let randomBtn = document.querySelector(`.${randomClr}`);

  gameSeq.push(randomClr);
  console.log(gameSeq);

  gameflash(randomBtn);
}

function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (level - 1 > highScore) {
      highScore = level - 1;
    }
    h3.innerText = `High Score: ${highScore}`;
    h2.innerHTML = `Game Over!<br>Your Score was : <b> ${level - 1}</b> <br>  Press any key to restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
}

function btnpress() {
  //   console.log(this);
  let btn = this;
  userflash(this);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
