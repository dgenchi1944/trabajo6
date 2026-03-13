let formulario = document.getElementById("form1");

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(formulario);
    let d1 = parseInt(formData.get("dato1"))
    let d2 = parseInt(formData.get("dato2"))
    let d3 = parseInt(formData.get("dato3"))

    let suma = Number(d1) + Number(d2) + Number(d3);
    let menor = Math.min(d1, d2, d3)
    console.log("La suma de los datos es:", suma);
    console.log("El valor menor es:", menor);



})