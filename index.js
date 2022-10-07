var conta = document.querySelector("#conta");
var pessoas = document.querySelector("#pessoas");
var botao = document.querySelector(".btn-prc");
var erroLabelConta = document.querySelector("#erroLabelConta");
var erroLabelPessoa = document.querySelector("#erroLabelPessoa");
const porcentos = document.getElementById("porcentos");
const calcula =document.querySelector(".btn-calc");
const valorGorjetaPorPessoa = document.querySelector("#valorGorjeta");
const valorTotalPorPessoa = document.querySelector("#valorTotal");
let prevButton = null;
let checkpoint = 0;
let valorGorjeta;
let valorTotal;


porcentos.addEventListener("click", (e) => {
  const eUmButton = e.target.nodeName === "BUTTON";

  if (!eUmButton) {
    return;
  }

  e.target.classList.add("active");
  checkpoint = 1;
  if (prevButton !== null) {
    prevButton.classList.remove("active");
  }
  prevButton = e.target;
});



function validaConta() {
  if(conta.value <= 0){
    conta.style.outline = "2px solid var(--redErro)";
    erroLabelConta.style.display="block";
  }else{
    conta.style.outline = "2px solid var(--strong_cyan)";
    erroLabelConta.style.display="none";
    checkpoint++;
  }
}

function validaPessoas() {
  if(pessoas.value <= 0){
    pessoas.style.outline = "2px solid var(--redErro)";
    erroLabelPessoa.style.display="block";
  }else{
    pessoas.style.outline = "2px solid var(--strong_cyan)";
    erroLabelPessoa.style.display="none";
    checkpoint++;
  }
}

function calculoGorjeta (x,y,z){

  valorGorjeta = (((x.value * y.value)/100)/z.value).toFixed(2);
  valorGorjetaPorPessoa.innerHTML=valorGorjeta;
}

function calculoTotal (){
  
  valorGorjeta = Number(valorGorjeta);
  valorTotal = ((conta.value / pessoas.value) + (valorGorjeta)).toFixed(2);
  valorTotalPorPessoa.innerHTML=valorTotal;
}

calcula.addEventListener('click', function(){

  validaConta();
  validaPessoas();

  if(prevButton == null || checkpoint < 3){
    alert("Informe todos os dados");
  }else{
    calculoGorjeta(conta, prevButton, pessoas);
    calculoTotal();
  }
})