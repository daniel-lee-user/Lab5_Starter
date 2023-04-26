// explore.js

window.addEventListener('DOMContentLoaded', init);

var voices;

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
    input.voice = voices[document.getElementById("voice-select").value];
    speechSynthesis.speak(input);
    input.addEventListener("end", (event) => {
      face.src = "assets/images/smiling.png";
    });
  });
}

function load_voices() {
  window.speechSynthesis.addEventListener("voiceschanged", e => {
    voices = speechSynthesis.getVoices();
    const drop_down_list = document.getElementById("voice-select");
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      drop_down_list.add(option);
    }
  });
}