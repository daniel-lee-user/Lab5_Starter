// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  bind_volume();
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
  });
}