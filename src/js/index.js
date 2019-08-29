/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

var alpha = ["&#9824", "&#9827", "&#9829", "&#9830"];
var bravo = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let x = alpha[Math.floor(Math.random() * alpha.length)];

let delta = document.getElementById("suit");
let echo = document.getElementById("suit1");

delta.innerHTML = x;
echo.innerHTML = x;

if (x === "&#9829" || x === "&#9830") {
  delta.classList.toggle("color");
  echo.classList.toggle("color");
}

document.querySelector(".cardnumber").innerHTML =
  bravo[Math.floor(Math.random() * bravo.length)];
console.log(x);
