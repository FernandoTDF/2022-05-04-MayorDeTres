let BtnEnv = document.getElementById("boton");

BtnEnv?.addEventListener("click", () => {
  let numA: number = Number(datoA.value);
  let numB: number = Number(datoB.value);
  let numC: number = Number(datoC.value);

  if (numA > numB) {
    if (numA > numC) {
      if (numC > numB) {
        console.log("El numero " + numA + " es el mayor, y el numero " + numB + "es el menor");
      } else {
        console.log("El numero " + numA + " es el mayor, y el numero " + numC + "es el menor");
      }
    } else {
      console.log("El numero " + numC + " es el mayor, y el numero " + numB + "es el menor");
    }
  } else {
  if (numA > numC) {
    console.log("El numero " + numB + " es el mayor, y el numero " + numC + "es el menor");
  } else {
    if (numB > numC) {
      console.log(
        "El numero " + numB + " es el mayor, y el numero " + numA + "es el menor");
    } else {
      console.log(
        "El numero " + numC + " es el mayor, y el numero " + numA + "es el menor");
    }
  }
}
});
