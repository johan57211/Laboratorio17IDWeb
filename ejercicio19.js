const dividirAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log("Calculando división...");

        setTimeout(() => {
            if (b === 0) {
                reject(new Error("No se puede dividir entre 0"));
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
};

async function ejecutarDivision() {
    try {
        const resultado = await dividirAsync(5, 0);
        console.log("Resultado:", resultado);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

ejecutarDivision();
