/**
 * @description         Creates title of the page
 * @returns { title }   Title of game
 */
const makeTitle = () => {
    const title = document.createElement("h1");
    title.id = "title";
    title.innerHTML = "Battleship";
    return title;
}

export { makeTitle }