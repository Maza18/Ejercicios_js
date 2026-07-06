function calcularDescuento(precio, descuento) { //devuelve el monto del descuento 
    if (descuento < 0 || descuento > 100) {
        throw new Error("El descuento debe estar entre 0 y 100");
    }
}

function calcularImpuesto(precio, impuesto, descuento) { //devuelve el monto del descuento
    const precioConDescuento = precio - (precio * (descuento / 100));
    const precioConImpuesto = precioConDescuento + (precioConDescuento * (impuesto / 100));
    return precioConImpuesto;
}

function calcularPrecioFinal(precio, descuento, impuesto) { //resta el descuento, agrega el impuesto y deuelve el precio final
    const precioConDescuento = precio - (precio * (descuento / 100));
    const precioFinal = precioConDescuento + (precioConDescuento * (impuesto / 100));
    return precioFinal;
}
function crearResumenPrecio(precio, descuento, impuesto) { //Devoler un objeto, precio, descuento, impuesto y precio final
    const precioFinal = calcularPrecioFinal(precio, descuento, impuesto);
    return {
        precio: precio,
        descuento: descuento,
        impuesto: impuesto,
        precioFinal: precioFinal     
    }
}

console.log (crearResumenPrecio(100, 10, 5)); // Output: { precio: 100, descuento: 10, impuesto: 5, precioFinal: 94.5 }
console.log (crearResumenPrecio(200, 20, 10)); // Output: { precio: 200, descuento: 20, impuesto: 10, precioFinal: 198 }
console.log (crearResumenPrecio(50, 5, 8)); // Output: { precio: 50, descuento: 5, impuesto: 8, precioFinal: 51.6 }