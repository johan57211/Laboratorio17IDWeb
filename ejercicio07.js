try {
    let x = null;
    console.log(x.nombre);
} catch (e) {
    if (e instanceof TypeError) {
        console.log("Ocurrió un TypeError");
    } else {
        console.log("Ocurrió otro tipo de error");
    }
    console.log(e.message);
}
