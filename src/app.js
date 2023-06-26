/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let simbolos = document.querySelector(".simbolos");
  let numeroIndex = document.querySelector(".numero");
  let simbolos2 = document.querySelector(".simbolos2");


  let palos = ["spade", "club", "heart", "diamond"];
  let numeros = ["2","3","4","5","6","7","8","9","10","J","A","Q","K"];
  let arraySimbolos = ["♦","♥","♠","♣"];

  let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
  let palosaleatorio = palos[Math.floor(Math.random() * palos.length)];

  if (palosaleatorio === "spade") simbolos.innerHTML = arraySimbolos[2];
  if (palosaleatorio === "spade") simbolos2.innerHTML = arraySimbolos[2];
  if (palosaleatorio === "club") simbolos.innerHTML = arraySimbolos[3];
  if (palosaleatorio === "club") simbolos2.innerHTML = arraySimbolos[3];
  if (palosaleatorio === "heart") simbolos.innerHTML = arraySimbolos[1];
  if (palosaleatorio === "heart") simbolos2.innerHTML = arraySimbolos[1];
  if (palosaleatorio === "diamond") simbolos.innerHTML = arraySimbolos[0];
  if (palosaleatorio === "diamond") simbolos2.innerHTML = arraySimbolos[0];
  


  return (palosaleatorio, numeroAleatorio);
};
