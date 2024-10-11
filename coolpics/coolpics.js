const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector("ul");
    menu.classList.toggle("show");

    console.log(100000)
}

menuButton.addEventListener("click", toggleMenu)