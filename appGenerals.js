"use Strict";

document.addEventListener("DOMContentLoaded", function (event) {
  function fecha() {
    const hoy = new Date(2021, 0, 1);
    const fechita = hoy.getFullYear();
    const textArea = document.querySelector("#date");
    textArea.textContent = fechita;
    console.log(hoy);
  }
  fecha();
});
