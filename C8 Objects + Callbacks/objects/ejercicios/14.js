function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if(objetoUsuario.email){
    return true;
  }else{
    return false;
  }
}

module.exports = tieneEmail;
