const atacante = prompt("Qual é o  nome do personagem atacante?");
const poderDeATaque = prompt("Qual é o seu poder de ataque?");

const defensor = prompt("Qual o nome do personagem defensor?");
let pontosDeVida = prompt("Quantos pontos de vida ele possui?");
const poderDeDefesa = prompt("Qual é o seu poder de defesa?");
const possuiEscudo = prompt("Ele possui escudo? (Sim/Não)");

let danoCausado = 0;

if (poderDeATaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeATaque - poderDeDefesa;
} else if (poderDeATaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeATaque - poderDeDefesa) / 2;
}
pontosDeVida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert(
  atacante +
    "\nPoder de ataque: " +
    poderDeATaque +
    "\n\n" +
    defensor +
    "Pontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\npossui escudo: " +
    possuiEscudo
);
