const form = document.getElementById("formProducto");
const tabla = document.querySelector("#tablaInventario tbody");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const codigo = document.getElementById("codigo").value;
    const cantidad = document.getElementById("cantidad").value;
    const vencimiento = document.getElementById("vencimiento").value;

    // Validación simple
    if (cantidad <= 0) {
        alert("La cantidad debe ser mayor a 0");
        return;
    }

    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${codigo}</td>
        <td>${cantidad}</td>
        <td>${vencimiento}</td>
        <td><button onclick="eliminarFila(this)">Eliminar</button></td>
    `;
    tabla.appendChild(fila);

    form.reset();
});

function eliminarFila(boton) {
    boton.parentElement.parentElement.remove();
}

