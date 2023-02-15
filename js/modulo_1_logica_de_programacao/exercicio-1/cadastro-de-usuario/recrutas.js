const primeiroNome = prompt("Informe o primeiro nome do recruta:");
const sobrenome = prompt("Infome o sobrenome do recruta:");
const campoDeEstudo = prompt("Qual o campo de estudo do recruta?");
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?");

alert(
  "recruta cadastrado com sucesso!\n" +
    "Nome completo: " +
    primeiroNome +
    "" +
    sobrenome +
    "\ncampo de estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    (2023 - anoDeNascimento)
);
