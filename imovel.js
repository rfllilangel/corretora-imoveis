const prompt = require("prompt-sync")();
const corretoras = require("./corretora.js");
let ultimoId = 1;
const imovel = [];

const modelo = (id = ultimoId++) => {
  const rua = prompt("Rua: ");
  const bairro = prompt("Bairro: ");
  const numero = parseInt(prompt("Número: "));
  corretoras.index();
  const id_corretora = parseInt(prompt("ID da corretora: "));

  if (
    rua != "" &&
    bairro != "" &&
    numero > 0 &&
    corretoras.show(id_corretora)
  ) {
    return {
      id,
      rua,
      bairro,
      numero,
      id_corretora,
    };
  }

  console.log("Nome inválido.");
};

const store = () => {
  const novo = modelo();
  if (novo) {
    imovel.push(novo);
    console.log("Imóvel adicionado com sucesso!");
  }
};

const index = () => {
  if (imovel.length == 0) {
    console.log("Nenhum imóvel registrado.");
    return false;
  }
  imovel.forEach((el) => console.log(el));
  return true;
};
const show = (id) => imovel.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = imovel.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = modelo(id);

      if (novo) {
        imovel[indice] = novo;
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
      const indice = imovel.findIndex((el) => el.id == id);
      imovel.splice(indice, 1);
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

