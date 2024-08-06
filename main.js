const prompt = require("prompt-sync")();
const corretoras = require("./corretora.js");
const clientes = require("./cliente.js");
const corretor = require("./corretor.js");

const menuPrincipal = () => {
  console.log(`GERENCIAMENTO DE CORRETORA DE IMÓVEIS`);

  while (true) {
    console.log(` ESCOLHA O MÓDULO QUE QUER GERENCIAR: 
        
        1- Corretora
        2- Corretor
        3- Clientes
        0 - Sair`);

    const opcaoModulo = parseInt(prompt(": "));

    switch (opcaoModulo) {
      case 1:
        menuCorretora();
        break;
      case 2:
        menuCorretor();
        break;
      case 3:
        menuClientes();
        break;
      case 0:
        process.exit();
        break;

      default:
        console.log("Opção inválida.");
        break;
    }
  }
};

const menuCorretora = () => {
  while (true) {
    console.log(`
        1- Cadastrar corretoras
        2- Listar corretoras
        3- Atualizar corretoras
        4- Excluir corretoras
        0- Sair`);
    const opcaoServico = parseInt(prompt(": "));
    switch (opcaoServico) {
      case 1:
        corretoras.store();
        break;
      case 2:
        corretoras.index();
        break;
      case 3:
        corretoras.update();
        break;
      case 4:
        corretoras.destroy();
        break;
      case 0:
        return;

      default:
        console.log("Opção inválida.");
    }
  }
};
const menuClientes = () => {
  while (true) {
    console.log(`
        1- Cadastrar clientes
        2- Listar clientes
        3- Atualizar clientes
        4- Excluir clientes
        0- Sair`);
    const opcaoServico = parseInt(prompt(": "));
    switch (opcaoServico) {
      case 1:
        clientes.store();
        break;
      case 2:
        clientes.index();
        break;
      case 3:
        clientes.update();
        break;
      case 4:
        clientes.destroy();
        break;
      case 0:
        return;

      default:
        console.log("Opção inválida.");
        break;
    }
  }
};

const menuCorretor = () => {
  while (true) {
    console.log(`
          1- Cadastrar corretor
          2- Listar corretor
          3- Atualizar corretor
          4- Excluir corretor
          0- Sair`);
    const opcaoServico = parseInt(prompt(": "));
    switch (opcaoServico) {
      case 1:
        corretor.store();
        break;
      case 2:
        corretor.index();
        break;
      case 3:
        corretor.update();
        break;
      case 4:
        corretor.destroy();
        break;
      case 0:
        return;

      default:
        console.log("Opção inválida.");
        break;
    }
  }
};
menuPrincipal();
