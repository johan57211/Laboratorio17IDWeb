const dividirAsync = (a, b) => {
    return new Promise ((resolve, reject) => {
        console.log("Calculando la division...");

        setTimeout(() => {
            if (b === 0) {
                reject(new Error("No se puede dividir entre 0"))
            } else {
                resolve(a/b);
            }
        }, 1500);
    });
}   

dividirAsync (5, 0)
    .then(resultado => {
        console.log("El resultado es: "+resultado);
    })
    .catch(error => {
        console.error("Error: "+error.message)
    })