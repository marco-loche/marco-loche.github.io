
jQuery(document).ready(function () {

  console.log( "ready!" );
  var vid = document.getElementById("background-video");

  var pauseButton = document.getElementById("background-video-pause-button");

  vid.addEventListener('ended', function () {
    this.pause();
    this.classList.add("stopfade");
  });

  pauseButton.addEventListener('click', function(e){
    debugger;
    e.preventDefault();
    console.log('click');
    vid.classList.toggle("stopfade");
    if (vid.paused) {
      vid.play();
      pauseButton.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
      vid.pause();
      pauseButton.innerHTML = '<i class="fa fa-play"></i>';
    }
  });

});