function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var array = [];
  var i = 2; 
  var veces = 0;
  
  while(veces < 10){
    if(num === veces){
      return "Se interrumpió la ejecución";
    }
    veces++
    array.push(num = num + i);
  }
  return array;
}

module.exports = breakStatement;
