const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-botao");

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault();
    console.log("Entrei na função");

    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    const con
    itemDaLista.appendChild(containerItemLista);
}