let hiddenCode = document.getElementById("hidden-code");
let mainText = document.getElementById("enter-text");
//Creamos una nueva variable para guardar el nuevo texto, darle valor a la cadena vacía, y luego al momento de cifrar o descifrar aparezca en el input
let newWord = "";
const btnCipher = document.getElementById("btn-cipher")
const btnDescipher = document.getElementById("btn-descipher")

//Función que se ejecuta al hacer click en Cifrar
btnCipher.addEventListener("click", Cifrar);

//Función que mostrará el texto al hacer click en cifrar
function encode(hiddenCodeValue,mainTextValue){
//Bucle para obtener el código ASCII de cada letra ingresada en el texto
  for(let i=0; i<mainTextValue.length; i++){
    let mainTextAscii = mainTextValue.charCodeAt(i);
    
}
}
