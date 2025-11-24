const cargarMensaje = (callback) => {
    setTimeout(() => {
        callback("Mensaje cargado");
    }, 1000);
}

cargarMensaje((mensaje) => {
    console.log(mensaje);
});
