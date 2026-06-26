const descricao = document.querySelector("#descricao");
const valor = document.querySelector("#valor");
const quantidade = document.querySelector("#quantidade");

const btnAdicionar = document.querySelector("#btnAdicionar");

const listaProdutos = document.querySelector("#listaProdutos");

let produtos = [];

btnAdicionar.addEventListener("click", cadastrarProduto);

function cadastrarProduto() {

    let produto = {
        descricao: descricao.value,
        valor: Number(valor.value),
        quantidade: Number(quantidade.value)
    };

    produto.total = produto.valor * produto.quantidade;
    produto.adicional = calcularAdicional(produto.total);

    produtos.push(produto);

    mostrarProdutos();

    descricao.value = "";
    valor.value = "";
    quantidade.value = "";
}

function calcularAdicional(total) {

    if (total <= 3000) {
        return "Isento";
    } else if (total <= 8000) {
        return "5%";
    } else if (total <= 12000) {
        return "10%";
    } else if (total <= 20000) {
        return "15%";
    } else {
        return "20%";
    }

}

function mostrarProdutos() {

    listaProdutos.innerHTML = "";

    for (let i = 0; i < produtos.length; i++) {

        listaProdutos.innerHTML += `
            <hr>

            <p><b>Descrição:</b> ${produtos[i].descricao}</p>

            <p><b>Valor Unitário:</b> R$ ${produtos[i].valor.toFixed(2)}</p>

            <p><b>Quantidade:</b> ${produtos[i].quantidade}</p>

            <p><b>Valor Total:</b> R$ ${produtos[i].total.toFixed(2)}</p>

            <p><b>Valor Adicional:</b> ${produtos[i].adicional}</p>

        `;
    }

}