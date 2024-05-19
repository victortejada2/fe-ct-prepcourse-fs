function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var array = [];
   arrayOfStrings.filter(function(element){
       if(element.charAt(0) === "a"){
           array.push(element);
       }
   })
   return array;
}

module.exports = filter;
