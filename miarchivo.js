function calcularTotal(monto, cuotas, tasaInteres) {
    let total = 0;
    for (let i = 1; i <= cuotas; i++) {
        total += monto / cuotas * (1 + tasaInteres);
    }
    // Redondear sin usar toFixed
    return Math.round(total * 100) / 100;
}

function obtenerDatos() {
    let monto;
    while (true) {
        monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
        if (!isNaN(monto) && monto > 0) {
            break; // Salir del bucle si el monto es válido
        }
        alert("Por favor, ingrese un monto válido.");
    }

    let cuotas;
    while (true) {
        cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
        if (!isNaN(cuotas) && cuotas > 0) {
            break;
        }
        alert("Por favor, ingrese un número de cuotas válido.");
    }

    return { monto, cuotas };
}

function mostrarResultado(total) {
    alert("El total a pagar es: $" + total);
}

function simuladorDePrestamo() {
    const tasaInteres = 0.05;
    const { monto, cuotas } = obtenerDatos();
    const total = calcularTotal(monto, cuotas, tasaInteres);
    mostrarResultado(total);
}

// Iniciar simulador
simuladorDePrestamo();
