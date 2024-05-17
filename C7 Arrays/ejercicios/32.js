function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  for(var i = 0; i < string.length; i++){
    for(var j = string.length -1; j >= 0; j--){
      if(string[i] === string[j]){
        return true;
      }else{
        return false;
      }
    }
  }
}

module.exports = esPalindromo;