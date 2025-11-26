const cargarUsuario = () => {

    return new Promise((resolve, reject) => {

        let tiempo = Math.floor(Math.random()*(1500 - 800 + 1) + 800);

        setTimeout(() => {
            let usuario = {
                id: 1,
                nombre: "Juancito"
            }

            if (usuario) {
                resolve(usuario);
            } else {
                reject("Usuario no encontrado");
            }
        }, tiempo);
    });
};


const mostrarUsuario = (usuario) => {
    console.log("Usuario cargado: "+usuario.nombre + " |ID: " + usuario.id);
}

cargarUsuario()
    .then(mostrarUsuario)
    .catch (error => {
        console.log("Error: ", error);
    });
