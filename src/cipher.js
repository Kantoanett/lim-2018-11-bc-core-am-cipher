window.cipher = {
encode: function(offset, string){
  newWord = "";
/*Bucle para obtener el código ASCII de cada letra ingresada en el texto*/
  for(let i=0; i<string.length; i++){
    let mainTextAscii = string.charCodeAt(i);
/*Condicional para obtener el código ASCII de cada letra al darse el offset*/
      if (65 <= string.charCodeAt(i) <= 90) {
/*Mostrar la nueva palabra, concatenando letras*/
      newWord = newWord + (String.fromCharCode ((((mainTextAscii-65) + offset) % 26) + 65));
}
/*Condicional para que se reconozca el espacio mediante su código ASCII, y luego sea transformado y se concatene como espacio*/
      else if (mainTextAscii === 32) {
      newWord = newWord + String.fromCharCode(mainTextAscii);
}
}
//Con esto, devuelve el cifrado en la caja de texto
  return result.value = newWord;
},

decode: function(offset, string){
  newWord = "";
/*Bucle para obtener el código ASCII de cada letra ingresada en el texto*/
  for(let i=0; i<string.length; i++){
    let mainTextAscii = string.charCodeAt(i);
/*Condicional para obtener el código ASCII de cada letra al darse el offset*/
      if (65 <= string.charCodeAt(i) <= 90) {
/*Mostrar la nueva palabra, concatenando letras*/
      newWord = newWord + (String.fromCharCode ((((mainTextAscii-90) - offset) % 26) + 90));
}
/*Condicional para que se reconozca el espacio mediante su código ASCII, y luego sea transformado y se concatene como espacio*/
      else if (mainTextAscii === 32) {
      newWord = newWord + String.fromCharCode(mainTextAscii);
}
}
//Con esto, devuelve el cifrado en la caja de texto
  return result.value = newWord;

},

};
