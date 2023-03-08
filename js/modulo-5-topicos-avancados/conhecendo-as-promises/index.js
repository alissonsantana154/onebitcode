function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada...");
    setTimeout(() => {
      console.log("Resolvendo a promise...");
      resolve("Resultado");
    }, 1000);
  });
}

const P = execute();

console.log(P);

setTimeout(() => {
  console.log(P);
}, 2000);
