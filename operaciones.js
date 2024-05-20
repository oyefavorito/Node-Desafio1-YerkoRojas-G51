const fs = require("fs");

const agregar = (nombre, edad, animal, color, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  const id = Math.floor(Math.random() * 100).toString();
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log("Por favor ingresa todos los tados");
    return;
  }

  citas.push({ id, nombre, edad, animal, color, enfermedad });
  fs.writeFileSync("citas.json", JSON.stringify(citas));
  console.log(citas);
};

const leer = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(citas);
};

module.exports = { agregar, leer };
