function procesarLista(lista, callbackFinal) {
    let procesados = 0;

    lista.forEach((numero) => {
        let tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

        console.log("Procesando " + numero + "... (espera " + tiempo + " ms)");

        setTimeout(() => {
            console.log("Número procesado:", numero);
            procesados++;

            if (procesados === lista.length) {
                callbackFinal("Proceso completado");
            }
        }, tiempo);
    });
}

procesarLista([5, 10, 15, 20], (mensaje) => {
    console.log(mensaje);
});
