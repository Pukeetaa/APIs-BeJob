const videoPlayer = document.getElementById('videoPlayer');
const loadVideoButton = document.getElementById('loadVideo');
const playVideoButton = document.getElementById('playVideo');
const pauseVideoButton = document.getElementById('pauseVideo');
const stopVideoButton = document.getElementById('stopVideo');
const volumeUpButton = document.getElementById('volumeUp');
const volumeDownButton = document.getElementById('volumeDown');

loadVideoButton.addEventListener('click', loadVideo);
playVideoButton.addEventListener('click', playVideo);
pauseVideoButton.addEventListener('click', pauseVideo);
stopVideoButton.addEventListener('click', stopVideo);
volumeUpButton.addEventListener('click', volumeUp);
volumeDownButton.addEventListener('click', volumeDown);

function loadVideo() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'video/mp4';


  input.onchange = async function (event) {
    const file = event.target.files[0];

    if (file.type !== 'video/mp4') {
        alert('Por favor, seleccione un archivo de vídeo en formato MP4.');
        return;
    }

    alert('Cargando el vídeo, por favor espere...');
    const objectURL = URL.createObjectURL(file);
    videoPlayer.src = objectURL;
    const fileInfo = document.getElementById('fileInfo');
    fileInfo.textContent = `Archivo cargado: ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)`;
};

  input.click();
}

function playVideo() {
  videoPlayer.play();
}

function pauseVideo() {
  videoPlayer.pause();
}

function stopVideo() {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
}

function volumeUp() {
  if (videoPlayer.volume < 1) {
      videoPlayer.volume += 0.1;
  }
}

function volumeDown() {
  if (videoPlayer.volume > 0) {
      videoPlayer.volume -= 0.1;
  }
}