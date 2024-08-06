const prompt = require("prompt-sync")();
let ultimoId = 1;
const corretoras = require("./corretora.js");
const corretor = require("./corretor.js");
const imovel = require("./imovel.js");

const vendas = [];

const modelo = (id = ultimoId++) => {
  const id_imovel = prompt("ID do imóvel: ");
  const id_corretora = prompt("ID da corretora: ");
  const id_corretor = prompt("ID do corretor: ");

  if (
    imovel.show(id_imovel) > 0 &&
    corretoras.show(id_corretora) > 0 &&
    corretor.show(id_corretor > 0)
  ) {
    return {
      id,
      id_imovel,
      id_corretor,
      id_corretora,
    };
  }

  console.log("Dados inválidos.");
};

const store = () => {
  const novo = modelo();
  if (novo) {
    vendas.push(novo);
    console.log("Imóvel adicionado com sucesso!");
  }
};

const index = () => {
  if (vendas.length == 0) {
    console.log("Nenhum imóvel registrado.");
    return false;
  }
  vendas.forEach((el) => console.log(el));
  return true;
};
const show = (id) => vendas.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = vendas.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = modelo(id);

      if (novo) {
        vendas[indice] = novo;
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
      const indice = vendas.findIndex((el) => el.id == id);
      vendas.splice(indice, 1);
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
