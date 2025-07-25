
    // script.js
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
  function selectVideoByTime() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return 'morning.mp4';
  if (hour >= 12 && hour < 17) return 'afternoon.mp4';
  if (hour >= 17 && hour < 20) return 'evening.mp4';
  return 'night.mp4';
}

const bgVideo = document.createElement('video');
bgVideo.src = `./images/${selectVideoByTime()}`;
bgVideo.autoplay = bgVideo.loop = bgVideo.muted = true;
bgVideo.style = 'position:fixed; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:-1;';
document.body.prepend(bgVideo);
