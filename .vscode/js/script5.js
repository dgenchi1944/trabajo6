let miArreglo = document.getElementById("form1");
let miA = []
miArreglo.addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(miArreglo);
    let dato1 = formData.get("dato1");



    miA.push(dato1);

    console.log(miA)


});

function buscar() {
    let buscartext = document.getElementById("buscar").value;
    if (miA.includes(buscartext)) {
        console.log(buscartext + " si existe en el arreglo");
    } else {
        console.log(buscartext + " no existe en el arreglo");
    }
}