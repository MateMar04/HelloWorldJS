function show() {
    var d = new Date();
    var time = d.getHours();
    console.log(time);
    var name = prompt("Ingrese su nombre");
    var validName = false;

    if (name == "") {
        alert("Nombre invalido");
    } else {
        if (time >= 4 && time <= 12) {
            document.getElementById("lblSaludar").innerText = "Buenos dias " + name;
        } else if (time >= 13 && time <= 19) {
            document.getElementById("lblSaludar").innerText = "Buenas tardes " + name;
        } else {
            document.getElementById("lblSaludar").innerText = "Buenas noches " + name;
        }
    }




}

function clear() {
    document.getElementById("lblSaludar").innerText = "";
}

function lightTheme() {
    document.getElementById("body").classList.add("body-light")
    document.getElementById("body").classList.remove("body-dark")
    document.getElementById("title").classList.add("title-light")
    document.getElementById("title").classList.remove("title-dark")
    document.getElementById("btnMostrar").classList.add("button-light")
    document.getElementById("btnMostrar").classList.remove("button-dark")
    document.getElementById("btnBorrar").classList.add("button-light")
    document.getElementById("btnBorrar").classList.remove("button-dark")
    document.getElementById("lblSaludar").classList.add("text-light")
    document.getElementById("lblSaludar").classList.remove("text-dark")
    document.getElementById("btnLightTheme").classList.add("button-light")
    document.getElementById("btnLightTheme").classList.remove("button-dark")
    document.getElementById("btnDarkTheme").classList.add("button-light")
    document.getElementById("btnDarkTheme").classList.remove("button-dark")
    document.getElementById("btnContrastTheme").classList.add("button-light")
    document.getElementById("btnContrastTheme").classList.remove("button-dark");
    document.getElementById("btnRainbowTheme").classList.add("button-light")
    document.getElementById("btnRainbowTheme").classList.remove("button-dark");
}

function darkTheme() {
    document.getElementById("body").classList.remove("body-light")
    document.getElementById("body").classList.add("body-dark")
    document.getElementById("title").classList.remove("title-light")
    document.getElementById("title").classList.add("title-dark")
    document.getElementById("btnMostrar").classList.remove("button-light")
    document.getElementById("btnMostrar").classList.add("button-dark")
    document.getElementById("btnBorrar").classList.remove("button-light")
    document.getElementById("btnBorrar").classList.add("button-dark")
    document.getElementById("lblSaludar").classList.remove("text-light")
    document.getElementById("lblSaludar").classList.add("text-dark")
    document.getElementById("btnLightTheme").classList.remove("button-light")
    document.getElementById("btnLightTheme").classList.add("button-dark")
    document.getElementById("btnDarkTheme").classList.remove("button-light")
    document.getElementById("btnDarkTheme").classList.add("button-dark")
    document.getElementById("btnContrastTheme").classList.remove("button-light")
    document.getElementById("btnContrastTheme").classList.add("button-dark");
    document.getElementById("btnRainbowTheme").classList.remove("button-light")
    document.getElementById("btnRainbowTheme").classList.add("button-dark");
}
