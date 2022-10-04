


const skunk = document.querySelector(".skunk");
const logFour = document.querySelector(".logcard4");
logFour.addEventListener("click", () => {
  skunk.classList.add("skunk-shake");
  setTimeout(() => skunk.classList.remove("skunk-shake"), 200);
  const fart = new Audio("./fart.mp3");
  fart.play();
});

const roll = document.querySelector("[data-roll]");
const logTwo = document.querySelector(".logcard2");
logTwo.addEventListener("click", () => {
  roll.classList.add("rollshrink");
  setTimeout(() => roll.classList.remove("rollshrink"), 1000);
  const flush = new Audio("./flush.mp3");
  flush.play();
});

const poop = document.querySelector(".poop");
const logThree = document.querySelector(".logcard3");
logThree.addEventListener("click", () => {
  poop.classList.add("skunk-shake");
  setTimeout(() => poop.classList.remove("skunk-shake"), 200);
  const fart = new Audio("./fart.mp3");
  fart.play();
});

const restrooms = document.querySelector(".restrooms");
const logOne = document.querySelector(".logcard1");
logOne.addEventListener("click", () => {
  restrooms.classList.add("dooropen");
  setTimeout(() => restrooms.classList.remove("dooropen"), 1500);
});

const plunger = document.querySelector("[data-plunge]");
const logFive = document.querySelector(".logcard5");
logFive.addEventListener("click", () => {
  plunger.classList.add("plunge");
  setTimeout(() => plunger.classList.remove("plunge"), 900);
  const hooray = new Audio("./hooray.mp3");
  hooray.play();
});

const odd = document.querySelector(".odd");
const logSix = document.querySelector(".logcard6");
logSix.addEventListener("click", () => {
  odd.classList.add("warp");
  setTimeout(() => odd.classList.remove("warp"), 900);
});

const awardImages = document.querySelector(".ribbon");
const awardButtons = document.querySelectorAll(".award_button");
const numberOfImages = document.querySelectorAll(".ribbon img").length;
// const showAward = document.querySelectorAll('.ribbon img')

let imageIndex = 1;
let translateX = 0;

awardButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "previous") {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 500;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 500;
      }
    }
    // showAward.classList.remove('ribbon-hide')
    // console.log(showAward)

    awardImages.style.transform = `translateX(${translateX}px)`;
  });
});

const openModalCards = document.querySelectorAll("[data-modal-target]");
const closeModalBtns = document.querySelectorAll("[data-close-btn]");
const overlay = document.getElementById("overlay");
const logItems = document.getElementById("log-items");

openModalCards.forEach((card) => {
  card.addEventListener("click", () => {
    const modal = document.querySelector(card.dataset.modalTarget);
    setTimeout(() => openModal(modal), 500);
  });
});
closeModalBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

// overlay.addEventListener('click', () => {
//   const modal = document.querySelector('.modal')
//   closeModal(modal)
// })

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
  logItems.classList.add("active");
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  logItems.classList.remove("active");
}
