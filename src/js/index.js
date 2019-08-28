/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
var alpha = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
var bravo = [
  "A",
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
  "Q",
  "K",
  "JOKER"
];

document.querySelector(".suit").innerHTML =
  alpha[Math.floor(Math.random() * alpha.length)];

document.querySelector(".cardnumber").innerHTML =
  bravo[Math.floor(Math.random() * alpha.length)];
