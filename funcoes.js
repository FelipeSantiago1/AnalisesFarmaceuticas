
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



function CalcUmidade(){
var pesoDaAmostra = document.getElementById('text1').value;
var PesoDaCapsula = document.getElementById('text2').value;
var PesoDaCapsulaAmostraseca = document.getElementById('text3').value;
if (pesoDaAmostra == "" && PesoDaCapsula == "" && PesoDaCapsulaAmostraseca == ""){
    window.alert("DIGITE OS DADOS REQUISITADOS");
}
if (pesoDaAmostra == "" || PesoDaCapsula == "" || PesoDaCapsulaAmostraseca == ""){
    window.alert("DIGITE OS DADOS REQUISITADOS");
}
var AmostraSeca = (parseFloat(PesoDaCapsulaAmostraseca)-parseFloat(PesoDaCapsula));
var Umidade = (parseFloat(pesoDaAmostra)- AmostraSeca);
var percentagem = ((100*Umidade)/pesoDaAmostra);
var nome = ("<b>UMIDADE</b><br><br>"+ percentagem.toFixed(5)+"% "+"<br><br><a href='Umidade.html#calculo' style='text-decoration: none;'><button class='button'>Ver Cálculo</button></a>");
document.getElementById('resultado').innerHTML =  nome;
var formula = ("<b><h1>Cálculo</h1><br>"+"<b>Determinando a amostra seca</b><br><br>"+ PesoDaCapsulaAmostraseca +" - " + PesoDaCapsula + " = "+ AmostraSeca.toFixed(5)+"<br><br><b>Determinando umidade</b><br><br>"+pesoDaAmostra+" - "+AmostraSeca.toFixed(5)+" = "+ Umidade.toFixed(5)+"<br><br> <b>Determinando a umidade em porcentagem</b><br><br>"+pesoDaAmostra+ " ------- 100 % " +"<br><br>"+Umidade.toFixed(5)+ " ------- X (%)<br><br>"+"X = "+Umidade.toFixed(5)+" * 100/"+pesoDaAmostra+"<br><br>"+"X = "+ percentagem.toFixed(5)+" %");
document.getElementById('calculo').innerHTML = formula;

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

