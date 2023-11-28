//Seleção de elementos
const formTabuada=document.querySelector("#formTabuada")
const numero=document.querySelector("#numero")
const multiplicador=document.querySelector("#multiplicador")
const tabela=document.querySelector("#tabela")
const span=document.querySelector("#span")
//Funções
function criarTabela(numero, multiplicador){
    tabela.innerHTML="";

    for( i=0; i<= multiplicador; i++){
        const result = numero * i;
        

        const template = `<div class="row flex bg-white p-4 rounded-xl text-center justify-center w-80 text-gray-500">
                            <div class="operation">${numero} x ${i} = </div>
                            <div class="result">${result}</div>
                        </div>`
        
        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template,"text/html");
        const row = htmlTemplate.querySelector(".row");
        tabela.appendChild(row)


    }
    span.innerText=numero
}



// Eventos
formTabuada.addEventListener("submit", (e) =>{
    e.preventDefault();

    const valorNumero = +numero.value;
    const valorMultiplicador = +multiplicador.value;;

    if(!valorMultiplicador || !valorNumero) return;

    criarTabela(valorNumero, valorMultiplicador )
})

