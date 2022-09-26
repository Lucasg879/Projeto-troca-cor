//Abtribuição a variável array de cores 
const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
//variavel btn recebe o botão com a id btn
const btn = document.getElementById("btn");
//variavel color recebe o objeto html span
const color = document.querySelector(".color");

//adicionando um evento click ao botão da variável btn e executando uma função a ele 
btn.addEventListener("click", function(){
    //obter um numero aleatório entre zero e três
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    escreveCor();
})
//função chama um numero aleatório entre 0 e 1 e multiplica pelo tamanho do array e depois arredonda
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
   
}
//função escrever a cor que está no html no título 
function escreveCor(){
    let backgr=document.body.style.backgroundColor;
    color.innerHTML=backgr;
}