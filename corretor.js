const prompt = require("prompt-sync")();
const corretoras = require("./corretora.js");

const corretor = [];

let proxId = 1;

const model = (id = proxId++) => {
  const nome = prompt("Nome: ");

  corretoras.index();
  const id_corretora = parseInt(prompt("ID da corretora: "));

  if (nome != "" && corretoras.show(id_corretora)) {
    return {
      id,
      nome,
      id_corretora,
    };
  }
  console.log("Dados inválidos.");
};

const store = () => {
  const novo = model();
  if (novo) {
    corretor.push(novo);
    console.log("Corretor adicionado com sucesso!");
  }
};

const index = () => {
  if (corretor.length == 0) {
    console.log("Nenhum corretor registrado.");
    return false;
  }
  corretor.forEach((el) => console.log(el));
  return true;
};
const show = (id) => corretor.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = corretor.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = modelo(id);

      if (novo) {
        corretor[indice] = novo;
        console.log("Atualizado com sucesso!");
      }
    } else {
      console.log("Registro não encontrado.");
    }
  }
};

const destroy = () => {
  if (index()) {
    const id = prompt("ID: ");
    if (id != -1) {
      const indice = corretor.findIndex((el) => el.id == id);
      corretor.splice(indice, 1);
      console.log("Registro deletado com sucesso!");
    }
  } else {
    console.log("Registro não encontrado.");
  }
};

module.exports = {
  store,
  index,
  update,
  destroy,
  show,
};
