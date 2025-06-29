
function calculo(){

var a = document.getElementById('text1').value;
var b = document.getElementById('text2').value;
var resultado = (parseInt(a)+parseInt(b));
var nome = ("O IDH CALCULADO FOI DE: "+ resultado);
document.getElementById('resultado').innerHTML =  nome;

 }
 function calculo2(){

var a = document.getElementById('text1').value;
var b = document.getElementById('text2').value;
var c = document.getElementById('text3').value;
if (c == ""){
    c=0;
}
var resultado = (parseInt(a)-parseInt(b)/2+parseInt(c)/2)+1;
var nome = ("O IDH CALCULADO FOI DE: "+ resultado);
document.getElementById('resultado').innerHTML =  nome;

 }



function CalcUmidade() {
    const pesoAmostra = parseFloat(document.getElementById('pesoAmostra').value);
    const pesoCapsula = parseFloat(document.getElementById('pesoCapsula').value);
    const pesoFinal = parseFloat(document.getElementById('pesoFinal').value);

    const resultadoDiv = document.getElementById('resultado');
    const detalhadoDiv = document.getElementById('calculo-detalhado');

    if (isNaN(pesoAmostra) || isNaN(pesoCapsula) || isNaN(pesoFinal)) {
        resultadoDiv.textContent = "Erro!";
        resultadoDiv.style.color = "#D93025";
        resultadoDiv.style.backgroundColor = "#FAD2D0";
        detalhadoDiv.innerHTML = "Por favor, preencha todos os campos com números válidos.";
        return;
    }

    if (pesoAmostra <= 0) {
        resultadoDiv.textContent = "Inválido!";
        resultadoDiv.style.color = "#D93025";
        resultadoDiv.style.backgroundColor = "#FAD2D0";
        detalhadoDiv.innerHTML = "O peso da amostra deve ser maior que zero.";
        return;
    }

    if (pesoFinal < pesoCapsula) {
        resultadoDiv.textContent = "Inválido!";
        resultadoDiv.style.color = "#D93025";
        resultadoDiv.style.backgroundColor = "#FAD2D0";
        detalhadoDiv.innerHTML = "O peso final (amostra seca + cápsula) não pode ser menor que o peso da cápsula sozinha.";
        return;
    }

    const pesoSeco = pesoFinal - pesoCapsula;
    const umidadeAbsoluta = pesoAmostra - pesoSeco;
    const umidadePercentual = (umidadeAbsoluta / pesoAmostra) * 100;

    resultadoDiv.style.color = "var(--cor-sucesso)";
    resultadoDiv.style.backgroundColor = "var(--cor-sucesso-fundo)";
    
    resultadoDiv.textContent = `${umidadePercentual.toFixed(2)} %`;

    detalhadoDiv.innerHTML = `
        <strong>Cálculo Passo a Passo:</strong><br>
        1. <strong>Peso da Matéria Seca:</strong><br>
           P. Final - P. Cápsula<br>
           ${pesoFinal.toFixed(2)}g - ${pesoCapsula.toFixed(2)}g = <strong>${pesoSeco.toFixed(2)}g</strong>
        <br><br>
        2. <strong>Umidade (%):</strong><br>
           [(P. Amostra - P. Seco) / P. Amostra] * 100<br>
           [(${pesoAmostra.toFixed(2)}g - ${pesoSeco.toFixed(2)}g) / ${pesoAmostra.toFixed(2)}g] * 100 = <strong>${umidadePercentual.toFixed(2)}%</strong>
    `;
}


function CalcCinzas(){
var pesoDaAmostraSeca = document.getElementById('text1').value;
var PesoDoCadinho = document.getElementById('text2').value;
var PesoDaCadinhoCinzas = document.getElementById('text3').value;
var umidade = document.getElementById('text4').value;
if (pesoDaAmostraSeca == "" && PesoDoCadinho == "" && PesoDaCadinhoCinzas == ""){
    window.alert("DIGITE OS DADOS REQUISITADOS");
}
if (pesoDaAmostraSeca == "" || PesoDoCadinho == "" || PesoDaCadinhoCinzas == ""){
    window.alert("DIGITE OS DADOS REQUISITADOS");
}
var Cinzas = (parseFloat(PesoDaCadinhoCinzas)-parseFloat(PesoDoCadinho));
var percentagem = ((100*Cinzas)/pesoDaAmostraSeca);
var percentagemIntegral = ((100-parseFloat(umidade))*Cinzas)/pesoDaAmostraSeca;
var nome = ("<b>CINZAS</b><br><br>"+ percentagem.toFixed(5)+"% ou "+percentagem.toFixed(5)+" gramas"+"<br>"+"Cinzas em peso integral:"+percentagemIntegral.toFixed(6)+" %");
document.getElementById('resultado').innerHTML =  nome;
 }


 function CalcFibras(){
var pesoDaAmostraSeca = document.getElementById('text1').value;
var PesoDoCadinho = document.getElementById('text2').value;
var PesoDaCadinhoCinzas = document.getElementById('text3').value;
var umidade = document.getElementById('text4').value;
if (pesoDaAmostraSeca == "" && PesoDoCadinho == "" && PesoDaCadinhoCinzas == ""){
    window.alert("DIGITE OS DADOS REQUISITADOS");
}
if (pesoDaAmostraSeca == "" || PesoDoCadinho == "" || PesoDaCadinhoCinzas == ""){
    window.alert("DIGITE OS DADOS REQUISITADOS");
}
var Cinzas = (parseFloat(PesoDaCadinhoCinzas)-parseFloat(PesoDoCadinho));
var percentagem = ((100*Cinzas)/pesoDaAmostraSeca);
var percentagemIntegral = ((100-parseFloat(umidade))*Cinzas)/pesoDaAmostraSeca;
var nome = ("<b>FIBRAS</b><br><br>"+ percentagem.toFixed(5)+"% ou "+percentagem.toFixed(5)+" gramas"+"<br><br>"+"Fibras em peso integral:"+percentagemIntegral.toFixed(6)+" %");
document.getElementById('resultado').innerHTML =  nome;
 }

 function CalcLipidios(){
var pesoDaAmostraSeca = document.getElementById('text1').value;
var PesoDoCadinho = document.getElementById('text2').value;
var PesoDaCadinhoCinzas = document.getElementById('text3').value;
var umidade = document.getElementById('text4').value;
if (pesoDaAmostraSeca == "" && PesoDoCadinho == "" && PesoDaCadinhoCinzas == ""){
    window.alert("DIGITE OS DADOS REQUISITADOS");
}
if (pesoDaAmostraSeca == "" || PesoDoCadinho == "" || PesoDaCadinhoCinzas == ""){
    window.alert("DIGITE OS DADOS REQUISITADOS");
}
var Cinzas = (parseFloat(PesoDaCadinhoCinzas)-parseFloat(PesoDoCadinho));
var percentagem = ((100*Cinzas)/pesoDaAmostraSeca);
var percentagemIntegral = ((100-parseFloat(umidade))*Cinzas)/pesoDaAmostraSeca;
var nome = ("<b>Extrato éterio</b><br><br>"+ percentagem.toFixed(5)+"% ou "+percentagem.toFixed(5)+" gramas"+"<br><br>"+"Extrato éterio em peso integral:"+percentagemIntegral.toFixed(6)+" %");
document.getElementById('resultado').innerHTML =  nome;
 }

