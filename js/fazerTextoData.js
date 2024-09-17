export function dataPost(){
    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long"})} (${new Date().toLocaleDateString("pt-BR")}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`;
    itemData.classList.add("texto-data");
    
    return itemData;
}