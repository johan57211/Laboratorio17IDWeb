function procesarLista(lista) {
    return new Promise((resolve, reject) => {
        if (lista.length === 0) {
            reject(new Error("La lista no es válida"));
            return;
        }

        let procesados = 0;

        lista.forEach((numero) => {
            let tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

            console.log("Procesando " + numero + "...");

            setTimeout(() => {
                if (typeof numero !== "number") {
                    reject(new Error("Un valor no es un número"));
                    return;
                }

                procesados++;

                if (procesados === lista.length) {
                    resolve("Proceso completado");
                }
            }, tiempo);
        });
    });
}

async function ejecutarProceso() {
    try {
        const mensaje = await procesarLista([5, 10, 15, 20]);
        console.log(mensaje);
    } catch (error) {
        console.error("Error:", error.message);
    }
}
ejecutarProceso();
