const prompt = require("prompt-sync")();
let ultimoId = 1;
const clientes = [];


const modelo = (id = ultimoId++) => {
  const nome = prompt("Nome: ");

  if (nome != "") {
    return {
      id, nome
    };
  }

  console.log("Nome inválido.");
};

const store = () => {
  const novo = modelo();
  if (novo) {
    clientes.push(novo);
    console.log("Cliente adicionado com sucesso!");
  } 
};

const index = () => {
  if(clientes.length == 0) {
    console.log("Nenhum cliente registrado.")
    return false
  }
  clientes.forEach(el => console.log(el))
  return true
}
const show = id => clientes.find(el => el.id == id)

const update = () => {
 if (index())
 {
   const id = parseInt(prompt("ID: "));

   const indice = clientes.findIndex(el => el.id == id);

   if (indice != -1) {
     const novo = modelo(id);
     
     if (novo) {
      clientes[indice] = novo;
      console.log("Atualizado com sucesso!")
     }
   } else { 
    console.log("Registro não encontrado.")
   }
 }
};
 
const destroy = () => {
  if(index()) {
    const id = prompt("ID: ");
   if(id != -1) {
     const indice = clientes.findIndex(el => el.id == id);
     clientes.splice(indice, 1);
     console.log("Registro deletado com sucesso!")
    }
  } else {
    console.log("Registro não encontrado.")
  }

};

module.exports = {
  store,
  index,
  update,
  destroy,
  show
};