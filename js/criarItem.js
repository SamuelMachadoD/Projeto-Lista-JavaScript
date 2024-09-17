import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { dataPost } from "./fazerTextoData.js";
import { verificarListaComprados } from "./verificarListaComprados.js";

const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");

let contador = 0;

export function criarItemDaLista(item){
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");
    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("container-nome-compra");
    const containerCheckBox = document.createElement("div");
    containerCheckBox.classList.add("checkbox-container");
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++;
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);
    checkboxLabel.addEventListener("click", function(evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustom = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if(checkboxInput.checked){
            checkboxCustom.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustom.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }

        verificarListaComprados(listaComprados)
    })

    const checkboxCustom = document.createElement("div");
    checkboxCustom.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustom);
    containerCheckBox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckBox);

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item;
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";
    botaoRemover.addEventListener("click", function(){
        excluirItem(itemDaLista);
    })
    botaoRemover.appendChild(imagemRemover);
    

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");
    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";
    botaoEditar.appendChild(imagemEditar);

    botaoEditar.addEventListener("click", function(){
        editarItem(itemDaLista);
    })
    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(dataPost());

    return itemDaLista;
}