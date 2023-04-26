// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  bind_volume();
  bind_play_btn();
  selectHorn();
}

function bind_volume() {
  let volume_slider = document.getElementById("volume");
  volume_slider.addEventListener("change", e => {
    let volume_icon = document.getElementById("volume-controls").querySelector("img");
    if (volume_slider.value == 0) {
      volume_icon.src = "assets/icons/volume-level-0.svg";
    }else if (volume_slider.value < 33) {
      volume_icon.src = "assets/icons/volume-level-1.svg";
    }else if (volume_slider.value < 67) {
      volume_icon.src = "assets/icons/volume-level-2.svg";
    }else{
      volume_icon.src = "assets/icons/volume-level-3.svg";
    }
    let audio_object = document.getElementsByClassName("hidden");
    audio_object.volume = volume_slider.value;
  });
}

function bind_play_btn() {
  let play_btn = document.querySelector("button");
  play_btn.addEventListener("click", e => {
    let audio_object = document.getElementsByClassName("hidden");
    console.log(audio_object);
  });
}

function selectHorn() {
  const horn = document.getElementById("horn-select");
  horn.addEventListener("change", (event) => {
    document.getElementsByTagName("img")[0].src = "assets/images/" + event.target.value + ".svg";
    document.getElementsByClassName("hidden")[0].src = "assets/audio/" + event.target.value + ".mp3";
  });
}