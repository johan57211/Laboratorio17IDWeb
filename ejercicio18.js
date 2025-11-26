const cargarUsuario = () => {
    return new Promise((resolve, reject) => {
        let tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

        setTimeout(() => {
            let usuario = {
                id: 1,
                nombre: "Juancito"
            };

            if (usuario) {
                resolve(usuario);
            } else {
                reject(new Error("Usuario no encontrado"));
            }
        }, tiempo);
    });
};

async function mostrarUsuarioAsync() {
    try {
        const usuario = await cargarUsuario();
        console.log("Usuario cargado:"+ usuario.nombre +" | " + usuario.id);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

mostrarUsuarioAsync();
