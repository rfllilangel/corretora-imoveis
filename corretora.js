const prompt = require("prompt-sync")();
const ultimoId = 0;
const corretoras = [];
const modelo = (id = ++ultimoId) => {
  const nome = prompt("Digite o nome da corretora: ");

  if (nome != "") {
    return nome, id;
  }

  console.log("Nome inválido.");
};

const criarCorretora = () => {
  const novo = modelo();
  if (novo) {
    corretoras.push(novo);
    console.log("Corretora adicionada com sucesso!");
  }
};

const lerCorretora = () => {
  corretoras.forEach((corretora, indice) => {
    console.log(`ID: ${corretora.id}. Corretora: ${corretora.nome}.`);
  });
};

const atualizarCorretora = () => {
  lerCorretora();
  const id = prompt("Digite o ID da corretora que deseja atualizar: ");

  const novo = modelo(id);

  const indice = corretoras.findIndex((corretora) => corretora.id == id);

  if (novo) {
    corretoras[indice] = novo;
    console.log("Residência atualizada com sucesso");
  }
};

const deletarCorretora = () => {
  lerCorretora();
  const id = prompt("ID da corretora que deseja deletar: ");

  const indice = corretoras.findIndex((corretora) => corretora.id == id);
  corretoras.splice(indice, 1);
};

module.exports() = {
  criarCorretora,
  lerCorretora,
  atualizarCorretora,
  deletarCorretora
};