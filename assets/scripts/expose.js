// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  selectHorn();
}

function selectHorn() {
  const horn = document.getElementById("horn-select");
  horn.addEventListener("change", (event) => {
    document.getElementsByTagName("img")[0].src = "assets/images/" + event.target.value + ".svg";
    document.getElementsByClassName("hidden")[0].src = "assets/audio/" + event.target.value + ".mp3";
  });
}


