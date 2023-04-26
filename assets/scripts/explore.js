// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  load_voices();
}

function load_voices(){
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