/** Variáveis */
/** Elementos HTML */
let btnSubmit = document.getElementById("btnSubmit");

let inputNome = document.getElementById("inputNome");

let inputDesc = document.getElementById("inputDesc");

let inputValor = document.getElementById("inputValor");

let nomeProduto;

// Array que armazena todos os produtos cadastrados
let listaDeProdutos = [];

// Simulando o cadastro de um produto
function cadastrarProduto(nome, preco) {
  let produto = {
    nome: nome,
    preco: preco
  };

  listaDeProdutos.push(produto);
}

// Cadastro de dois produtos
cadastrarProduto("Camisa", 49.90);
cadastrarProduto("Tênis", 129.99);

console.log(listaDeProdutos);


function cadastrar() {

    /** Validação do preenchimento dos campos */
    if(inputNome.value.trim() == '') {

        alert("O campo nome do produto é obrigatório.");

    } else if (inputDesc.value.trim() == '') {

        alert("O campo descrição do produto é obrigatório.");

    } else if (inputValor.value.trim() == '') {

        alert("O campo valor do produto é obrigatório.");

    } else {

        /** Armazenando através da session */

        sessionStorage.setItem(nomeProduto, inputNome.value);

        alert(nomeProduto);

        sessionStorage.setItem('descProduto', inputDesc.value);

        sessionStorage.setItem('valorProduto', inputValor.value);

        window.location.href = "../listagem.html";

        alert("Produto cadastrado!");

    }

}