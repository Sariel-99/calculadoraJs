/** VARIABLE GLOBAL */

let conTexto = document.getElementById("conTexto");

/** NUMEROS */

let btnNum1 = document.getElementById("btnNum1"); 
let btnNum2 = document.getElementById("btnNum2");
let btnNum3 = document.getElementById("btnNum3");
let btnNum4 = document.getElementById("btnNum4");
let btnNum5 = document.getElementById("btnNum5");
let btnNum6 = document.getElementById("btnNum6");
let btnNum7 = document.getElementById("btnNum7");
let btnNum8 = document.getElementById("btnNum8");
let btnNum9 = document.getElementById("btnNum9");
let btnNum0 = document.getElementById("btnNum0");

/** LETRAS */

let letraQ = document.getElementById("letraQ");
let letraW = document.getElementById("letraW");
let letraE = document.getElementById("letraE");
let letraR = document.getElementById("letraR");
let letraT = document.getElementById("letraT");
let letraY = document.getElementById("letraY");
let letraU = document.getElementById("letraU");
let letraI = document.getElementById("letraI");
let letraO = document.getElementById("letraO");
let letraP = document.getElementById("letraP");
let letraA = document.getElementById("letraA");
let letraS = document.getElementById("letraS");
let letraD = document.getElementById("letraD");
let letraF = document.getElementById("letraF");
let letraG = document.getElementById("letraG");
let letraH = document.getElementById("letraH");
let letraJ = document.getElementById("letraJ");
let letraK = document.getElementById("letraK");
let letraL = document.getElementById("letraL");
let letraÑ = document.getElementById("letraÑ");
let letraZ = document.getElementById("letraZ");
let letraX = document.getElementById("letraX");
let letraC = document.getElementById("letraC");
let letraV = document.getElementById("letraV");
let letraB = document.getElementById("letraB");
let letraN = document.getElementById("letraN");
let letraM = document.getElementById("letraM");
let caracter1 = document.getElementById("caracter1");
let caracter2 = document.getElementById("caracter2");
let caracter3 = document.getElementById("caracter3");
let caracter4 = document.getElementById("caracter4");

/** TEMPORAL */

let teclaTem = "";

/** NUMEROS */

const btnNum1F = () => {
    conTexto.innerHTML = teclaTem + "1";
    teclaTem = teclaTem + "1";  
}
const btnNum2F = () => {
    conTexto.innerHTML = teclaTem + "2";
    teclaTem = teclaTem + "2";  
}
const btnNum3F = () => {
    conTexto.innerHTML = teclaTem + "3";
    teclaTem = teclaTem + "3";  
}
const btnNum4F = () => {
    conTexto.innerHTML = teclaTem + "4";
    teclaTem = teclaTem + "4";  
}
const btnNum5F = () => {
    conTexto.innerHTML = teclaTem + "5";
    teclaTem = teclaTem + "5";  
}
const btnNum6F = () => {
    conTexto.innerHTML = teclaTem + "6";
    teclaTem = teclaTem + "6";  
}
const btnNum7F = () => {
    conTexto.innerHTML = teclaTem + "7";
    teclaTem = teclaTem + "7";  
}
const btnNum8F = () => {
    conTexto.innerHTML = teclaTem + "8";
    teclaTem = teclaTem + "8";  
}
const btnNum9F = () => {
    conTexto.innerHTML = teclaTem + "9";
    teclaTem = teclaTem + "9";  
}
const btnNum0F = () => {
    conTexto.innerHTML = teclaTem + "0";
    teclaTem = teclaTem + "0";  
}

/** LETRAS */

const letraQf = () => {
    conTexto.innerHTML = teclaTem + "Q";
    teclaTem = teclaTem + "Q";  
}

/** onclick */

btnNum1.onclick = function() {
    btnNum1F();
}
btnNum2.onclick = function() {
    btnNum2F();
}
btnNum3.onclick = function() {
    btnNum3F();
}
btnNum4.onclick = function() {
    btnNum4F();
}
btnNum5.onclick = function() {
    btnNum5F();
}
btnNum6.onclick = function() {
    btnNum6F();
}
btnNum7.onclick = function() {
    btnNum7F();
}
btnNum8.onclick = function() {
    btnNum8F();
}
btnNum9.onclick = function() {
    btnNum9F();
}
btnNum0.onclick = function() {
    btnNum0F();
}
letraQ.onclick = function() {
    letraQf();
}

