
let input;

const inputCriptografar = ()=>{
    input = document.getElementById("encrypt").value;
    criptografando(input);
}
const inputDescriptografar = ()=>{
    input = document.getElementById("decrypt").value;
    descriptografando(input);
}

/* 
As "chaves" de criptografia que utilizaremos são:
A letra "a" é convertida para "ai"
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

function criptografando(frase){
    let fraseCoded = frase;
    
    fraseCoded = fraseCoded.replace(/e/g , "enter");  
    fraseCoded = fraseCoded.replace(/i/g , "imes");
    fraseCoded = fraseCoded.replace(/a/g , "ai");
    fraseCoded = fraseCoded.replace(/o/g , "ober");       
    fraseCoded = fraseCoded.replace(/u/g , "ufat");
    document.getElementById("encodedTxt").innerHTML = fraseCoded;
     
}

function descriptografando(frase){
    let fraseDecoded = frase;

    fraseDecoded = fraseDecoded.replace(/enter/g , "e");
    fraseDecoded = fraseDecoded.replace(/imes/g , "i");
    fraseDecoded = fraseDecoded.replace(/ai/g , "a");
    fraseDecoded = fraseDecoded.replace(/ober/g , "o");
    fraseDecoded = fraseDecoded.replace(/ufat/g , "u");
    document.getElementById("encodedTxt").innerHTML = fraseDecoded;

}

function copiar(){
    let copyText = document.getElementById("encodedTxt").innerHTML;
    navigator.clipboard.writeText(copyText);
}