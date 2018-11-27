
//Creando una variable para obtener el elemento colocado en el input
let hiddenCode = document.getElementById("hidden-code");
let mainText = document.getElementById("enter-text");
//Creando una nueva variable para guardar el nuevo texto, darle valor a la cadena vacía, y luego al momento de cifrar o descifrar aparezca en el input
let newWord;
//Creando una constante en la que se va obtener el elemento con id btnCipher y btnDescipher
const btnCipher = document.getElementById("btn-cipher");
const btnDescipher = document.getElementById("btn-descipher");
//Creando una constante en la que se va a obtener el elemento con id resultado
//const result = document.getElementById("resultado");

//Función que se ejecuta al hacer click en Cifrar
btnCipher.addEventListener("click",hiddenText);
//Codificar: Función que mostrará el texto al hacer click en cifrar
function hiddenText(){
//Creando la variable para obtener elemento colocado en el input hidden-code y para guardar su valor
  let hiddenCodeValue = parseInt(hiddenCode.value);
//Creando la variable para obtener elemento colocado en el input main-text y para guardar su valor
  let mainTextValue = mainText.value.toUpperCase();
//Con esta variable se va a obtener el valor después de ejecutar encode:function dada la conexión con cipher.encode
    newWord = cipher.encode(hiddenCodeValue, mainTextValue);
//Con esto, devuelve el cifrado en la caja de texto
  let result;
  return result.value = newWord;
}

//Función que se ejecuta al hacer click en Descifrar
btnDescipher.addEventListener("click",revealedText);
//Decodificar: Función que mostrará el texto al hacer click en descifrar
function revealedText(){
//Creando la variable para obtener elemento colocado en el input hidden-code y para guardar su valor
  let hiddenCodeValue = parseInt(hiddenCode.value);
//Creando la variable para obtener elemento colocado en el input main-text y para guardar su valor
  let mainTextValue = mainText.value.toUpperCase();
//Con esta variable se va a obtener el valor después de ejecutar decode:function dada la conexión con cipher.decode
    newWord = cipher.decode(hiddenCodeValue, mainTextValue);

//Con esto, devuelve el descifrado en la caja de texto
  let result;
  return result.value = newWord;
}

//Agregamos al boton final, el evento click para que la pagina se reinicie
document.getElementById("btn-reboot").addEventListener("click",() => {
  location.reload ();
  /*result.addEventListener("click", () => {*/
});
