const obtenerSaludo = require("../docs/js/saludo");

describe("Función obtenerSaludo", () => {

    test("retorna saludo correcto", () => {
        expect(obtenerSaludo("Juan"))
            .toBe("Bienvenido a mi sitio, Juan");
    });

    test("retorna vacío si el nombre es vacío", () => {
        expect(obtenerSaludo(""))
            .toBe("");
    });

});