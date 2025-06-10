/** Variáveis */
/** Elementos HTML */
let btnSubmit = document.getElementById("btnSubmit");

let inputNome = document.getElementById("inputNome");

let inputDesc = document.getElementById("inputDesc");

let inputValor = document.getElementById("inputValor");

let nomeProduto, descProduto, valorProduto;

function cadastrar() {

    /** Validação do preenchimento dos campos */
    if(inputNome.value.trim() == '') {

        alert("O campo nome do produto é obrigatório.");

    } else if (inputDesc.value.trim() == '') {

        alert("O campo descrição do produto é obrigatório.");

    } else if (inputValor.value.trim() == '') {

        alert("O campo valor do produto é obrigatório.");

    } else {

        nomeProduto = inputNome.value;

        descProduto = inputDesc.value;

        valorProduto = inputValor.value;

        alert("Cadastrando produto!");

        window.location.href = "../listagem.html";

    }

}