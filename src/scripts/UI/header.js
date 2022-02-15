
const makeTitle = () => {
    const title = document.createElement("h1");
    title.id = "title";
    title.innerHTML = "Battleship";
    return title;
}

export { makeTitle }