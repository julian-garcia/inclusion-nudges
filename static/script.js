export function playPause() {
  var video = document.getElementById('video');

  if (video.paused || video.ended) {
    video.play();
  }
  else {
    video.pause();
  }
}

export function adjustVolume() {
  var video = document.getElementById('video');
  var volume = document.getElementById("volume");
  video.volume = volume.value;
}

export function muteVolume() {
  var video = document.getElementById('video');
  video.muted = !video.muted;
}