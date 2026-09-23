function validarAcceso() {

    const USUARIO_CORRECTO = "admin";
    const CONTRASEÑA_CORRECTA = "12345";
    const MAX_INTENTOS = 3;
    let intentos =0;
    
    while (intentos < MAX_INTENTOS) {
        intentos++;

        const usuario = prompt("Ingrese su usuario:");
        const contraseña =  prompt("Ingrese su contraseña:");

        if (usuario === USUARIO_CORRECTO && contraseña === CONTRASEÑA_CORRECTA) {
            console.log("¡Bienvenido al sistema!");
            break;
        } else if (intentos < MAX_INTENTOS) {
            console.log(`Datos incorrectos. Intento ${intentos} de ${MAX_INTENTOS}.`);    
        }    
      }
        if (intentos === MAX_INTENTOS) {
            console.log("Usuario bloqueado. Ha superado el numero de intentos.");
        }
     }
     validarAcceso();