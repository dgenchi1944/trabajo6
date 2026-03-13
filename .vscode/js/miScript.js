function calcular() {

    let cantidad = parseInt(document.getElementById("cantidad").value);
    let cliente = document.getElementById("cliente").value;
    let tam = document.querySelector('input[name="tm"]:checked');

    if (!cliente) {
        alert("Ingresa el nombre del cliente");
        return;
    }

    if (!cantidad || cantidad <= 0) {
        alert("Ingresa una cantidad válida");
        return;
    }

    if (!tam) {
        alert("Selecciona un tamaño");
        return;
    }

    let precioTam = parseInt(tam.value);

    let totalExtras = 0;
    let nombresExtras = [];
    const extras = document.querySelectorAll(".extra:checked");

    extras.forEach(extra => {
        totalExtras += parseInt(extra.value);

        nombresExtras.push(extra.dataset.nombre);

    });

    let total = (precioTam + totalExtras) * cantidad;
    let subtotal = precioTam * cantidad;
    alert(" RESUMEN DEL PEDIDO " +
        "\nCliente: " + cliente +
        "\nCantidad: " + cantidad +
        "\nExtras: " + (nombresExtras.length > 0 ? nombresExtras.join(", ") : "Ninguno") +
        "\nOperación:  (Total extras): $" + (totalExtras * cantidad) +
        "\nSubtotal: (sin extras): $" + subtotal +
        "\nTotal a pagar: $" + total);


}

function calculadora() {

    let n1 = parseFloat(document.getElementById("number1").value) || 0;
    let n2 = parseFloat(document.getElementById("number2").value) || 0;


    let operacion = document.querySelector('input[name="tm"]:checked').value;

    let resultado = 0;
    let simbolo = "";


    if (operacion === "suma") {
        resultado = n1 + n2;
        simbolo = "+";
    } else if (operacion === "resta") {
        resultado = n1 - n2;
        simbolo = "-";
    } else if (operacion === "multi") {
        resultado = n1 * n2;
        simbolo = "*";
    } else if (operacion === "divicion") {
        resultado = n1 / n2;
        simbolo = "÷";
    }


    alert("El resultado de " + n1 + " " + simbolo + " " + n2 + " es: " + resultado);
}