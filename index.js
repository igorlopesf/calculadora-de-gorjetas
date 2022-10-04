var conta = document.querySelector("#conta");
var pessoas = document.querySelector("#pessoas")
var botao = document.getElementById("teste");
var erroLabel = document.querySelector("#erroLabel");
const wrapper = document.getElementById("porcentos");
let prevButton = null;

wrapper.addEventListener("click", (e) => {
  const isButton = e.target.nodeName === "BUTTON";

  if (!isButton) {
    return;
  }

  e.target.classList.add("active"); // Add .active CSS Class
  setErro(conta);
  setErro(pessoas);
  if (prevButton !== null) {
    prevButton.classList.remove("active"); // Remove .active CSS Class
    removeErro(conta);
    removeErro(pessoas);
  }

  prevButton = e.target;
});

/* inputs.addEventListener('input' , function () {
  if(inputs.value.length < 1){
    inputs.style.outline = "2px solid red ";
  }else{
   
  }
}) */


function setErro (x){
   
  if(x.value.length < 1){
    x.style.outline = "2px solid var(--redErro)";
    erroLabel.style.display = "block";
  }
}
function removeErro (x){
  x.style.outline = "none";
  erroLabel.style.display = "none";
  
}

/* function removeErro (y){
  if(y.value.length >= 1){
    y.style.outline = "none";
    erroLabel.style.display = "none";
  }
} */

conta.addEventListener('input',function () {
  if(conta.value.length >= 1){
    conta.style.outline = "none";
    erroLabel.style.display = "none";
  }else {
    conta.style.outline = "2px solid var(--redErro)";
    erroLabel.style.display = "block";
  }
}); 

/* pessoas.addEventListener('input', setErro(pessoas));  */

/* botao.addEventListener('click', function(){
  
  conta.addEventListener('input', setErro(conta));
  pessoas.addEventListener('input', setErro(pessoas));
  console.log(botao.value);
}) */