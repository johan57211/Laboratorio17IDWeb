const cargarMensaje = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);
    });
};

async function ejecutarMensaje() {
    try {
        const mensaje = await cargarMensaje();
        console.log(mensaje);
    } catch (error) {
        console.error("Error:", error);
    }
}

ejecutarMensaje();
