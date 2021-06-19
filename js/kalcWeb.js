//screen
const screen = document.getElementsByClassName("teste");

//operações
const igual = document.getElementById("igual");
const subtracao = document.getElementById("subtracao");
const adicao = document.getElementById("adicao");
const multiplicacao = document.getElementById("multiplicacao");
const divisao = document.getElementById("divisao");
const clear = document.getElementById("clear");
//numeros
const zero = document.getElementById("zero");
const um = document.getElementById("um");
const dois = document.getElementById("dois");
const tres = document.getElementById("tres");
const quatro = document.getElementById("quatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const sete = document.getElementById("sete");
const oito = document.getElementById("oito");
const nove = document.getElementById("nove");

const ponto = document.getElementById("ponto");

zero.onclick = () => {
  console.log("value", zero.innerText);
};

um.onclick = () => {
  console.log("value", um.innerText);
};

dois.onclick = () => {
  console.log("value", dois.innerText);
};

tres.onclick = () => {
  console.log("value", tres.innerText);
};

quatro.onclick = () => {
  console.log("value", quatro.innerText);
};

cinco.onclick = () => {
  console.log("value", cinco.innerText);
};

seis.onclick = () => {
  console.log("value", seis.innerText);
};

sete.onclick = () => {
  console.log("value", sete.innerText);
};

oito.onclick = () => {
  console.log("value", oito.innerText);
};

nove.onclick = () => {
  console.log("value", nove.innerText);
};

ponto.onclick = () => {
  console.log("value", ponto.innerText);
};

clear.onclick = () => {
  console.log("value", clear.innerText);
};

function mouse() {
  console.log("screen", screen[0].innerText);
}