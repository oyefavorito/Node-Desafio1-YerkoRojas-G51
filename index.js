const { agregar, leer } = require("./operaciones.js");

const [inicio, id, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

if (inicio === "add") {
  agregar(id, nombre, edad, animal, color, enfermedad);
}

if (inicio === "leer") {
  leer();
}
