const { record, read } = require("./operations");

const [comando, name, age, tipe, color, sickness] = process.argv.slice(2);

if (comando === "record") {
  if (
    name === undefined ||
    age === undefined ||
    tipe === undefined ||
    color === undefined ||
    sickness === undefined
  ) {
    console.log("campos incompletos");
    return;
  } 

  record(name, age, tipe, color, sickness);
} else if (comando === "read") {
  read();
} else {
  console.log("error al introducir los datos");
}
