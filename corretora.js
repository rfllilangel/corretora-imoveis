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
    console.log(
      `ID: ${corretora.id}. Corretora: ${corretora.nome}.`
    );
  });
};
