const descricao = document.querySelector("#descricao");

const valor = document.querySelector("#valor");

const quantidade = document.querySelector("#quantidade");


const btnAdicionar = document.querySelector("#btnAdicionar");


const divDados = document.querySelector("#div-dados");



// ARRAY

let produtos = [];




// BOTÃO

btnAdicionar.addEventListener("click", cadastrarProduto);




// FUNÇÃO CADASTRAR

function cadastrarProduto(){


    let produto = {


        descricao: descricao.value,


        valor: Number(valor.value),


        quantidade: Number(quantidade.value)


    };



    produto.total = produto.valor * produto.quantidade;



    produto.adicional = calcularAdicional(produto.total);



    // COLOCA NO ARRAY

    produtos.push(produto);



    mostrarProdutos();



    descricao.value = "";

    valor.value = "";

    quantidade.value = "";


}





// FUNÇÃO DE DECISÃO

function calcularAdicional(total){



    if(total <= 3000){


        return "Isento";


    }


    else if(total <= 8000){


        return "5%";


    }


    else if(total <= 12000){


        return "10%";


    }


    else if(total <= 20000){


        return "15%";


    }


    else{


        return "20%";


    }



}





// MOSTRAR ARRAY NA TELA

function mostrarProdutos(){


    divDados.innerHTML = "";



    // ESTRUTURA DE REPETIÇÃO

    for(let i = 0; i < produtos.length; i++){



        divDados.innerHTML += `


        <div class="produto">


        <h3>${produtos[i].descricao}</h3>


        <p>Valor Unitário: R$ ${produtos[i].valor}</p>


        <p>Quantidade: ${produtos[i].quantidade}</p>


        <p>Valor Total: R$ ${produtos[i].total}</p>


        <p>Valor Adicional: ${produtos[i].adicional}</p>


        </div>


        `;


    }



}