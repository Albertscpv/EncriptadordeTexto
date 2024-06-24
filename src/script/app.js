function encriptarTexto(){
    let entrada  = document.getElementById('TextoSinConvertir').value;
    let cifrado = "";
    for(let i = 0; i < entrada.length; i++){
        if(entrada[i] == "a") cifrado += "ai";
        else if (entrada[i] == "e") cifrado += "enter";
        else if (entrada[i] == "i") cifrado += "imes";
        else if (entrada[i] == "o") cifrado += "ober";
        else if (entrada[i] == "u") cifrado += "ufat";
        else cifrado += entrada[i];
    }
    document.getElementById("TextoConvertido").value = cifrado;
}
function desencriptarTexto(){
    let salida = document.getElementById('TextoSinConvertir').value;
    let descifrado = "";
    for (let i = 0 ; i < salida.length; i++){
        if (salida[i] == 'e') {descifrado += salida[i];i+=4;}
            else if (salida[i] == 'o'  || salida[i]=='u' || salida[i] == 'i' ){descifrado  += salida[i];i+=3;}
            else if(salida[i]=='a'){descifrado += salida[i++];}     
        else  descifrado+=salida[i];
    }
    document.getElementById('TextoConvertido').value = descifrado;
}
function copyText(){
    let temp =  document.getElementById('TextoConvertido'); 
    if (temp.value == '')  return temp.setAttribute('placeholder', 'Aqui veras tu resultado',);
    else
    navigator.clipboard.writeText(temp.value);
    temp.value = "";
    temp.setAttribute('placeholder', 'Texto copiado',)
}