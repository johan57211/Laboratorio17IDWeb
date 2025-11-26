const cargarMensaje = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000)
    });
};

cargarMensaje ()
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch (error => {
        console.log("Error: ", error);
    });