window.addEventListener("keydown", playSkunk);
const skunk = document.querySelectorAll(".skunk");
const audioCtx = new AudioContext();
const fart = new Audio("../fartscale.wav");
const source = audioCtx.createMediaElementSource(fart);
source.connect(audioCtx.destination);

let segmentEnd;

function playSegment(startTime, endTime) {
  segmentEnd = endTime;
  fart.currentTime = startTime;
  fart.play();
}

fart.addEventListener(
  "timeupdate",
  function () {
    if (segmentEnd && fart.currentTime >= segmentEnd) {
      fart.pause();
    }
    // console.log(fart.currentTime);
  },
  false
);

function playSkunk(e) {
  const note = document.querySelector(`div[data-key="${e.key}"]`);
  note?.classList.add("skunk-shake");
  setTimeout(() => note?.classList.remove("skunk-shake"), 200);
  switch (e.key) {
    case "z":
      playSegment(0, 0.2);
      break;
    case "s":
      playSegment(0.4, 0.6);
      break;
    case "x":
      playSegment(0.9, 1.1);
      break;
    case "d":
      playSegment(1.3, 1.5);
      break;
    case "c":
      playSegment(1.7, 1.9);
      break;
    case "v":
      playSegment(2.15, 2.3);
      break;
    case "g":
      playSegment(2.6, 2.8);
      break;
    case "b":
      playSegment(3, 3.2);
      break;
    case "h":
      playSegment(3.43, 3.6);
      break;
    case "n":
      playSegment(3.85, 4);
      break;
    case "j":
      playSegment(4.25, 4.4);
      break;
    case "m":
      playSegment(4.7, 4.8);
      break;
    case ",":
      playSegment(5.15, 5.3);
  }
}
