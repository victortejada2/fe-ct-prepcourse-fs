function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
var arreglo = texto.split("");
var invertir = arreglo.reverse();
var string = invertir.join("");
return string;
}

module.exports = invertirTexto;
