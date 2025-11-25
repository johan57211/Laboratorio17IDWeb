const cargarUsuario = (callback) => {
    let tiempo = Math.floor(Math.random()*(1500 - 800 + 1) + 800)
    setTimeout (() => {

        let usuario = {
            id: 1,
            nombre: "Juancito"
        };

        callback(usuario);
    }, tiempo)
}

const mostrarUsuario = (usuario) => {
    console.log("Usuario cargado: "+usuario.nombre + " " + usuario.id);
}

cargarUsuario(mostrarUsuario);
