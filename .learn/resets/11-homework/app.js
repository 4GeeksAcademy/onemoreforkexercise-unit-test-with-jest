const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

// Solo un registro en consola para nosotros
console.log(sum(7, 3));

// Exporta la función para usarla en otros archivos
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

// Función para convertir de dólares a yen
function fromDollarToYen(num) {
    let dolarToEuro = num / 1.07; // Conversión correcta
    let euroToYen = dolarToEuro * 156.5;
    return euroToYen;
}

// Función para convertir de yen a libra
function fromYenToPound(num) {
    let yenToEuro = num / 156.5;
    let euroToPound = yenToEuro * 0.87;
    return euroToPound;
}