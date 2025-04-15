// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

function fromDollarToYen (num){
    let dolarToEuro = num * 1,07;
    let euroToYen = dolarToEuro * 156.5;
    return euroToYen;
}