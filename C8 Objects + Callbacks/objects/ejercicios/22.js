function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   var string1 = str1.toLowerCase();
   var string2 = str2.toLowerCase();
   var suma = 0;
   if(string1.length === string2.length){
      for(var i = 0; i < string1.length; i++){
         for(var j = 0; j < string2.length; j++){
            if(string1[i] === string2[j]){
               suma = suma + 1;
               break;
            }
         }
      }
   }
   if(suma === string1.length){
      return true;
   }else{
      return false;
   }
}

module.exports = esAnagrama;
