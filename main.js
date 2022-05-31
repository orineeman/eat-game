const container = document.querySelector(".container");
const packman = document.querySelector(".packman");
const scoreNum = document.querySelector(".score-num");
const gameOver = document.querySelector(".game-over");
const pTime = document.querySelector(".pTime");
const pRecord = document.querySelector(".pRecord");
const play = document.querySelector(".play");
const yourSorce = document.querySelector(".your-sorce");
const bless = document.querySelector(".bless");
const timeDiv = document.querySelector(".time-div");
let score = 0;

packman.style.top = "500px";
packman.style.left = "100px";
packman.style.fontSize = "30px";
container.style.top = "100px";
container.style.left = "500px";

let newFood = document.createElement("div");
newFood.classList.add("food");


createFood(getRandomInt(130, 700), getRandomInt(500, 1330));

function createFood(localFoodX, localFoodY) {
  newFood.style.top = localFoodX + "px";
  newFood.style.left = localFoodY + "px";
  container.append(newFood);
}
window.addEventListener("keydown", function (e) {
  //
  if (e.keyCode === 38) {
    let localX = parseInt(packman.style.top);
    localX = localX - 10;
    packman.style.top = localX + "px";
    eat();
  }
  if (e.keyCode === 37) {
    let localX = parseInt(packman.style.left);
    localX = localX - 10;
    packman.style.left = localX + "px";
    eat();
  }
  if (e.keyCode === 39) {
    let localX = parseInt(packman.style.left);
    localX = localX + 10;
    packman.style.left = localX + "px";
    eat();
  }
  if (e.keyCode === 40) {
    let localX = parseInt(packman.style.top);
    localX = localX + 10;
    packman.style.top = localX + "px";
    eat();
  }
});

function eat() {
  let newFoodX = parseInt(newFood.style.top);
  let newFood_X = newFoodX + 70;

  let newFoodY = parseInt(newFood.style.left);
  let newFood_Y = newFoodY + 70;

  let packmanX = parseInt(packman.style.top);
  let packman_X = packmanX + 135;

  let packmanY = parseInt(packman.style.left);
  let packman_Y = packmanY + 135;

  if (
    packmanX <= newFood_X &&
    packman_X > newFood_X &&
    packmanY <= newFood_Y &&
    packman_Y > newFood_Y
  ) {
    score++;
    scoreNum.textContent = score;
    newFood.classList.add("boom");
    newFood.remove();
    createFood(getRandomInt(130, 700), getRandomInt(500, 1330));

    let sizeOfPackman = parseInt(packman.style.fontSize);
    sizeOfPackman = sizeOfPackman * 1.1;
    packman.style.fontSize = sizeOfPackman + "px";

    if (sizeOfPackman > 100) {
        packman.style.display = "none";
        // timeDiv.style.display = "none";
        gameOver.style.display = "block";
        newFood.remove();
      pTime.textContent = `It took you ${30 - timeGame} seconds`;
      pRecord.textContent = "hight sorce : " + score;
      yourSorce.textContent = "your sorce : " + score;
      bless.textContent = "Congratulations! you broke the record!";
      clearInterval(interval);
      play.onclick = () => location.reload();
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let timeGame = 40;
  let interval = setInterval(function sfiraLeahor() {
    if (timeGame > 0) {
      timeDiv.textContent = timeGame - 1;
      timeGame--;
    } else {
      alert("game over");
      timeGame = 30;
      location.reload();
    }
  }, 1000);
