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


  let numeros = ["2","3","4","5","6","7","8","9","10","J","A","Q","K"];
  let arraySimbolos = ["♦","♥","♠","♣"];

  let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
  let arrayaleatorio = arraySimbolos[Math.floor(Math.random() * arraySimbolos.length)];


  simbolos.innerHTML = arrayaleatorio;
  simbolos2.innerHTML = arrayaleatorio;
  numeroIndex.innerHTML = numeroAleatorio;

  color.classList.remove("red","black");
  if(arrayaleatorio === "♦" || arrayaleatorio === "♥") 
    color.classList.add("red");
  else color.classList.add("black");

  return (arrayaleatorio, numeroAleatorio);
};
