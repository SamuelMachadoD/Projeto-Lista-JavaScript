import { dataPost } from "./fazerTextoData.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome de item: ");
    if(novoItem !== null && novoItem.trim() !== ""){
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;
        const comprado = elemento.querySelector(".checkbox-input").checked; 

        if(comprado){
            elemento.querySelector(".checkbox-input").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";
        }
        const horaAtual = elemento.querySelector(".texto-data");
        horaAtual.textContent = dataPost().textContent;
    }
}