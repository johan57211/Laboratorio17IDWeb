const dividirAsync = (a, b, callback) => {
    console.log("Calculando division...")
    setTimeout(() => {
        if(b === 0){
            callback(new Error ("No se puede dividir entre 0"), null);
        } else {
            callback (null, a/b);
        }
    }, 1500)
}

dividirAsync(5, 0, (error, resultado) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Resultado:", resultado);
    }
});