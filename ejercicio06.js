const validarEdad = (edad) => {
    if (edad < 0 || isNaN(edad)){
        throw new Error ("Edad invalida");
    }
    return "Edad Valida: "+edad;
}

try {
    console.log(validarEdad(18));
    console.log(validarEdad("hola"));
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}