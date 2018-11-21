//Creando una variable a través del id asigando al elemento
let hiddenCode = document.getElementById("hidden-code");
let mainText = document.getElementById("enter-text");
//Creando una nueva variable para guardar el nuevo texto, darle valor a la cadena vacía, y luego al momento de cifrar o descifrar aparezca en el input
let newWord;
//Creando una constante en la que se va obtener el elemento con id btnCipher y btnDescipher
const btnCipher = document.getElementById("btn-cipher");
const btnDescipher = document.getElementById("btn-descipher");
const result = document.getElementById("resultado");

//Función que se ejecuta al hacer click en Cifrar
//btnCipher.addEventListener("click",encode);

//Codificar: Función que mostrará el texto al hacer click en cifrar
function encode(){
//Crear variable para guardar valor
  let offset = parseInt(hiddenCode.value);
  let string = mainText.value;
//Poner valor en la caja de texto
  result.value=string;
//Asignando valor de cadena vacía
  newWord = "";
  for(let i=0; i<string.length; i++){
//Variable para obtener el código ASCII de cada letra ingresada en el texto
    let mainTextAscii = string.charCodeAt(i);
      if (65 <= string.charCodeAt(i) <= 90) {
/*Reemplazo la variable en la fórmula para obtener la letra original del alfabeto
newWord = newWord + (String.fromCharCode ((((string.charCodeAt(i)-65) + offset) % 26) + 65));*/
      newWord = newWord + (String.fromCharCode ((((mainTextAscii-65) + offset) % 26) + 65));
      }
}return (newWord);
}

btnCipher.addEventListener("click",encode);
