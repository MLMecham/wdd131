const menuButton = document.querySelector(".menu-button");
const popUp = document.querySelectorAll("img")

function toggleMenu() {
    const menu = document.querySelector("ul");
    menu.classList.toggle("show");

    console.log(100000)
}
function handleResize() {
    const menu = document.querySelector("ul");
    if (window.innerWidth >= 1000)
    {
        menu.classList.remove("show");
        console.log("Not Hidden");
    }
}
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}
function viewHandler(event) {
    const clickedImage = event.target;
    const src = clickedImage.getAttribute('src');
    const parts = src.split("-");
    const fullImageSrc = parts[0] + "-full.jpeg";
    
    const viewerHTML = viewerTemplate(fullImageSrc, clickedImage.alt);
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);

    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);


}
function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

menuButton.addEventListener("click", toggleMenu)
window.addEventListener("resize", handleResize)
// popUp.addEventListener("click", viewHandler)
popUp.forEach(iamge => {
    iamge.addEventListener("click", viewHandler)
})