const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    // 1. nome, (x cadidatos)
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + "\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe um nome para a vaga:");
  const descricao = prompt("Informe uma descrição para a vaga:");
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/aaaa0) para a vaga:"
  );

  const confirmacao = confirm(
    "Deseja criar uma vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, cadidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada.");
  }
}

function exibirVaga() {
  const indice = prompt("Informe o índice de vaga que deseja exibir:");
  const vaga = vagas[indice];

  const cadidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");

  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescriçaõ: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.cadidatos.length +
      "\nCandidatos inscritos: " +
      cadidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) cadidato(a):");
  const indice = prompt(
    "Informe o índice da vaga para a qual o(a) cadidato(a) deseja se inscrever"
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidato.push(candidato);
    alert("Inscrição reaçizada.");
  }
}

function excluirVaga() {
  const indice = prompt("Tem certeza que deseja excluir a vaga:");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("vaga excluida.");
  }
}
