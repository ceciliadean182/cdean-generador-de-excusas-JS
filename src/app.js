/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};

function excuseGenerator() {
  let pronombre = ["Un", "El", "Mi"];
  let persona = [
    "lobo",
    "gato",
    "conductor de bondi",
    "madre",
    "abuela",
    "vecino"
  ];
  let accion = ["comió", "robó", "mojó", "rompió"];
  let objeto = ["mi tarea", "mi informe del trabajo", "mi curriculum"];
  let lugar = [
    "en la rambla",
    "en el balcón",
    "en mi casa",
    "en su casa",
    "en el edificio"
  ];

  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
  let personaIndex = Math.floor(Math.random() * persona.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let objetoIndex = Math.floor(Math.random() * objeto.length);
  let lugarIndex = Math.floor(Math.random() * lugar.length);

  return (
    pronombre[pronombreIndex] +
    " " +
    persona[personaIndex] +
    " " +
    accion[accionIndex] +
    " " +
    objeto[objetoIndex] +
    " " +
    lugar[lugarIndex]
  );
}
