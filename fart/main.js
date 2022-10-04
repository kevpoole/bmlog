window.addEventListener("keydown", playSkunk);
const skunk = document.querySelectorAll(".skunk");
const audioCtx = new AudioContext();
const fart = new Audio("../fartscale.wav");
const source = audioCtx.createMediaElementSource(fart);
source.connect(audioCtx.destination);

let segmentEnd

fart.addEventListener('timeupdate', function (){
    if (segmentEnd && fart.currentTime >= segmentEnd) {
        fart.pause();
    }   
    // console.log(fart.currentTime);
});

function playSegment(startTime, endTime){
    segmentEnd = endTime;
    fart.currentTime = startTime;
    fart.play();
}

function playSkunk(e) {
  const note = document.querySelector(`div[data-key="${e.key}"]`);
  note?.classList.add("skunk-shake");
  setTimeout(() => note?.classList.remove("skunk-shake"), 200);
  if (e.key === "z") {
    playSegment(0, .2)
  }
  if (e.key === "s") {
    playSegment(.4, .6)
  }
  if (e.key === "x") {
    playSegment(.9, 1.1)
  }
  if (e.key === "d") {
    playSegment(1.3, 1.5)
  }
  if (e.key === "c") {
    playSegment(1.7, 1.9)
  }
  if (e.key === "v") {
    playSegment(2.15, 2.3)
  }
  if (e.key === "g") {
    playSegment(2.6, 2.8)
  }
  if (e.key === "b") {
    playSegment(3, 3.2)
  }
  if (e.key === "h") {
    playSegment(3.43, 3.6)
  }
  if (e.key === "n") {
    playSegment(3.85, 4)
  }
  if (e.key === "j") {
    playSegment(4.25, 4.4)
  }
  if (e.key === "m") {
    playSegment(4.7, 4.8)
  }
  if (e.key === ",") {
    playSegment(5.15, 5.3)
  }

}
