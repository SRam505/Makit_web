const button = document.getElementById("fakeDownload");
const note = document.getElementById("downloadNote");

button.addEventListener("click", () => {
  note.textContent = "Vista previa lista: la descarga está simulada para la demo.";
  button.textContent = "APK lista para la demo";
  button.disabled = true;
  button.style.opacity = "0.75";
  button.style.cursor = "default";
});
