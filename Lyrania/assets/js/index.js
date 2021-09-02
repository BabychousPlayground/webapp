let nav = document.getElementById("nav");

let func = () => {
    if (window.scrollY <= 5) {
        nav.style["background-color"] = "unset";
        nav.style["box-shadow"] = "none";
    } else {
        nav.style["background-color"] = "rgb(15, 15, 15)";
        nav.style["box-shadow"] = "0px 1px 15px black";
    }
};

window.addEventListener('scroll', function () {
    func();
});