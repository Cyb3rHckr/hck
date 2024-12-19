document.getElementById('startButton').addEventListener('click', iniciarCamara);

function iniciarCamara() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Solicitar acceso a la cámara
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        // Mostrar el flujo de la cámara en el elemento <video>
        const videoElement = document.getElementById('video');
        videoElement.srcObject = stream;
      })
      .catch(function(error) {
        console.error('Error al acceder a la cámara: ', error);
        alert('No se pudo acceder a la cámara.');
      });
  } else {
    alert('Tu navegador no soporta el acceso a la cámara.');
  }
}
