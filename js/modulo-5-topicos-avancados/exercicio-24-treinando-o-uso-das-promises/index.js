function imc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== "number" || typeof height !== "number")
      reject("arguments must be of type number");
    else resolve(weight / (height * height));
  });
}

function swowImc(weight, height) {
  imc(weight, height)
    .then((result) => {
      console.log(`O resultado do Imc foi de ${result}.`);

      if (result < 18.5) console.log("Situação: MAGREZA");
      else if (result < 25) console.log("Situação: NORMAL");
      else if (result < 30) console.log("Situação: SOBREPESO");
      else if (result < 40) console.log("Situação: OBESIDADE");
      else console.log("Situação: OBESIDADE GRAVE");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`calculando 0 IMC para peso ${weight} e altura ${height}...`);
}

swowImc(71, 1.74);
swowImc(48, 1.6);
swowImc(71, "texto");
swowImc(82, 1.72);
swowImc(120, 1.8);
