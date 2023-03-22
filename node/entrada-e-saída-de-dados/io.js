const process = require("process");

console.log("digite seu nome:");

process.stdin.on("data", (Keyboard) => {
  process.stdout.write(`Texto do usuário: ${Keyboard}`);
  process.exit();
});
