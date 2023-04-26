// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;

function init() {
  pressToTalk();
}

function pressToTalk() {
  let talkButton = document.querySelector("button");
  talkButton.addEventListener("click", e => {
    let textInput = document.getElementById("text-to-speak");
    let face = document.getElementsByTagName("img")[0];
    face.src = "assets/images/smiling-open.png";
    const input = new SpeechSynthesisUtterance(textInput.value);
    speechSynthesis.speak(input);
    input.addEventListener("end", (event) => {
      face.src = "assets/images/smiling.png";
    });
  });
}