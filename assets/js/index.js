let body = document.body;
let hlogos = document.getElementsByClassName("hlogo");
let enable = document.getElementById("enable-dark");
let disable = document.getElementById("disable-dark");
let menuButton = document.getElementById("menu");
let leaveMenuButton = document.getElementById("leave-menu");
let menu = document.getElementById("fixed");
let dropdown = document.getElementById("dropdown");
let dropdownA = dropdown.querySelectorAll("a");

// Get dark mode
function dark(bool) {
    let dark_mode = bool;

    if (dark_mode) {

        body.style["background-color"] = "#292929";
        swap(enable, disable);
        menuButton.style["color"] = "white";
        menu.style["background-color"] = "#292929";
        leaveMenuButton.style["color"] = "white";

        for (let i = 0 ; i < hlogos.length; i++) {
            hlogos[i].src = "assets/img/horizontal_logo_white_large.png"
        }

        for (let i = 0 ; i < dropdownA.length ; i++) {
            dropdownA[i].style["color"] = "white";
        }

    } else {

        body.style["background-color"] = "white";
        swap(disable, enable);
        menuButton.style["color"] = "black";
        menu.style["background-color"] = "white";
        leaveMenuButton.style["color"] = "#292929";
        
        for (let i = 0 ; i < hlogos.length; i++) {
            hlogos[i].src = "assets/img/horizontal_logo_large.png"
        }

        for (let i = 0 ; i < dropdownA.length ; i++) {
            dropdownA[i].style["color"] = "black";
        }

    }
}

function swap(a = null, b = null) {
    if (a !== null) a.style["display"] = "none";
    if (b !== null) b.style["display"] = "block"
}

function swapMenu(bool) {
    if (bool) {
        swap(menuButton, leaveMenuButton);
        dropdown.style["display"] = "flex";

    } else {
        swap(leaveMenuButton, menuButton);
        dropdown.style["display"] = "none";
    }
}