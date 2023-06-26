/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let palos = ["spade", "club", "heart", "diamond"];
  let numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "A",
    "Q",
    "K"
  ];
  let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
  let palosaleatorio = palos[Math.floor(Math.random() * palos.length)];

  console.log(numeroAleatorio);
};
