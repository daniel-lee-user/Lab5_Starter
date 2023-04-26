// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  load_voices();
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


function load_voices() {
  window.speechSynthesis.addEventListener("voiceschanged", e => {
    const voices = speechSynthesis.getVoices();
    const drop_down_list = document.getElementById("voice-select");
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement("option");
      option.value = voices[i];
      option.textContent = voices[i];
      drop_down_list.add(option);
    }
  });
}