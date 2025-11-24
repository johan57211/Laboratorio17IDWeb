const procesarJSON = (texto) => {
    try {
        let obj = JSON.parse(texto);
    }catch(e){
        console.log(e.name + " El dato no tiene la estructura esperada");
        console.log("Mensaje: " + e.message);
    }
}

procesarJSON('{nombre: "Juan" ');