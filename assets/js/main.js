document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll('.video');

  videos.forEach(function (video) {
      var src = video.dataset.src;

      video.addEventListener('mouseenter', function () {
          video.load(); // Load metadata
          video.play();
      });

      video.addEventListener('mouseleave', function () {
          video.pause();
          video.currentTime = 0;
      });
  });
});
