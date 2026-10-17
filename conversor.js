const modo = document.querySelector("#modo");
const cantidad = document.querySelector("#cantidad");
const etiqueta = document.querySelector("#etiqueta-cantidad");
const boton = document.querySelector("#convertir");
const resultado = document.querySelector("#resultado");

function actualizarEtiqueta() {
    etiqueta.textContent = modo.value === "studs"
        ? "Cantidad de studs"
        : "Cantidad de metros";

    resultado.textContent = "Introduce una cantidad";
}

function convertir() {
    const texto = cantidad.value.trim();
    const valor = Number(texto);

    if (texto === "" || !Number.isFinite(valor) || valor < 0) {
        resultado.textContent = "Introduce un número válido";
        return;
    }

    const conversion = modo.value === "studs"
        ? valor * 0.28
        : valor / 0.28;

    const unidad = modo.value === "studs" ? "metros" : "studs";

    resultado.textContent =
        `${conversion.toLocaleString("es-MX", {
            maximumFractionDigits: 4
        })} ${unidad}`;
}

modo.addEventListener("change", actualizarEtiqueta);
boton.addEventListener("click", convertir);

cantidad.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        convertir();
    }
});
