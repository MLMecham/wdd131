let selectElement = document.querySelector("select");
selectElement.addEventListener("change", changeTheme)

function changeTheme(event)
{
    let value = event.target.value

    if (value === "light")
    {
        let bodyElement = document.querySelector("body");
        bodyElement.removeAttribute("class")

        let imgElement = document.querySelector("img");
        // imgElement.removeAttribute("src")
        imgElement.setAttribute("src", "images/byui-logo_blue.webp") 
    }

    else if (value === "dark")
    {
        let bodyElement = document.querySelector("body");
        bodyElement.setAttribute("class", "dark")

        let imgElement = document.querySelector("img");
        // imgElement.removeAttribute("src")
        imgElement.setAttribute("src", "images/byui-logo_white.png")
    }
}