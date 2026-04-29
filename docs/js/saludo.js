function obtenerSaludo(nombre) {
    if (!nombre || nombre.trim() === "") return "";
    return "Bienvenido a mi sitio, " + nombre;
}

module.exports = obtenerSaludo;