/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { doc } from "prettier";

window.onload = function() {
  //write your code here
  
  let simbolos = document.querySelector(".simbolos");
  let numeroIndex = document.querySelector(".numero");
  let simbolos2 = document.querySelector(".simbolos2");


  let numeros = ["2","3","4","5","6","7","8","9","10","J","A","Q","K"];
  let arraySimbolos = ["♦","♥","♠","♣"];

  let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
  let arrayaleatorio = arraySimbolos[Math.floor(Math.random() * arraySimbolos.length)];


  if (arrayaleatorio === "♦" || arrayaleatorio === "♥") {
    simbolos2.classList.add("red");
    simbolos.classList.add("red");
  } else {
    simbolos2.classList.add("black");
    simbolos.classList.add("black");
  }

  simbolos.innerHTML = arrayaleatorio;
  simbolos2.innerHTML = arrayaleatorio;
  numeroIndex.innerHTML = numeroAleatorio;
  
};


let boton = document.querySelector ("#boton");
boton.addEventListener ("click", function (){
  onload();
});

setInterval(onload, 10000);
