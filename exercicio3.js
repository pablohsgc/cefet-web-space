// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const paragrafos = document.querySelectorAll(".botao-expandir-retrair");
var elementoExpandido = null;


function clicouExpandir(e){
    let elemento = e.currentTarget;
    let elementoPai = elemento.parentNode;

    if(elementoExpandido != null)
        elementoExpandido.classList.remove('expandido');

    elementoPai.classList.add('expandido');
    elementoExpandido = elementoPai;
}

for (let paragrafo of paragrafos) {
    paragrafo.addEventListener("click",clicouExpandir);    
}