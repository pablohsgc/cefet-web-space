// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
const input_M1 = document.querySelector("#massa1");
const input_M2 = document.querySelector("#massa2");
const input_dis = document.querySelector("#distancia");
const input_G = document.querySelector("#constante");
const btn_calcular = document.querySelector("#calcular");
const input_resultado = document.querySelector("#resultado");

btn_calcular.addEventListener("click",function(){
    let valor = (input_G.value * input_M1.value * input_M2.value)/ (input_dis.value ** 2);

    input_resultado.value = valor;
});

// 6.67 * 10**-11