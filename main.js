const prompt = require("prompt-sync")();
const corretoras = require("./corretora.js");
const clientes = require("./cliente.js");
const corretor = require("./corretor.js");
const vendas = rquire("./venda.js")
const menuPrincipal = () => {
  console.log(`GERENCIAMENTO DE CORRETORA DE IMÓVEIS`);

  while (true) {
    console.log(` ESCOLHA O MÓDULO QUE QUER GERENCIAR: 
        
        1- Corretora
        2- Corretor
        3- Clientes
        4- Imóveis
        5- Vendidos 
        0- Sair`);

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
      case 4:
        menuImovel();
        break;
      case 5:
        menuVendas();
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

const menuImovel = () => {
  while (true) {
    console.log(`
            1- Cadastrar imóvel
            2- Listar imóvel
            3- Atualizar imóvel
            4- Excluir imóvel
            0- Sair`);
    const opcaoServico = parseInt(prompt(": "));
    switch (opcaoServico) {
      case 1:
        imovel.store();
        break;
      case 2:
        imovel.index();
        break;
      case 3:
        imovel.update();
        break;
      case 4:
        imovel.destroy();
        break;
      case 0:
        return;

      default:
        console.log("Opção inválida.");
        break;
    }
  }
};

const menuVendas = () => {
  while (true) {
    console.log(`
            1- Cadastrar imóvel vendido
            2- Listar imóveis vendidos
            3- Atualizar imóvel vendido
            4- Excluir imóvel vendido
            0- Sair`);
    const opcaoServico = parseInt(prompt(": "));
    switch (opcaoServico) {
      case 1:
        vendas.store();
        break;
      case 2:
        vendas.index();
        break;
      case 3:
        vendas.update();
        break;
      case 4:
        vendas.destroy();
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
