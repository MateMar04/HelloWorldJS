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
    document.getElementById("body").classList.remove("body-contrast")
    document.getElementById("body").classList.remove("body-rainbow")

    document.getElementById("title").classList.add("title-light")
    document.getElementById("title").classList.remove("title-dark")
    document.getElementById("title").classList.remove("title-contrast")
    document.getElementById("title").classList.remove("title-rainbow")

    document.getElementById("btnMostrar").classList.add("button-light")
    document.getElementById("btnMostrar").classList.remove("button-dark")
    document.getElementById("btnMostrar").classList.remove("button-contrast")
    document.getElementById("btnMostrar").classList.remove("button-rainbow")

    document.getElementById("btnBorrar").classList.add("button-light")
    document.getElementById("btnBorrar").classList.remove("button-dark")
    document.getElementById("btnBorrar").classList.remove("button-contrast")
    document.getElementById("btnBorrar").classList.remove("button-rainbow")

    document.getElementById("lblSaludar").classList.add("text-light")
    document.getElementById("lblSaludar").classList.remove("text-dark")
    document.getElementById("lblSaludar").classList.remove("text-contrast")
    document.getElementById("lblSaludar").classList.remove("text-rainbow")

    document.getElementById("btnLightTheme").classList.add("button-light")
    document.getElementById("btnLightTheme").classList.remove("button-dark")
    document.getElementById("btnLightTheme").classList.remove("button-contrast")
    document.getElementById("btnLightTheme").classList.remove("button-rainbow")

    document.getElementById("btnDarkTheme").classList.add("button-light")
    document.getElementById("btnDarkTheme").classList.remove("button-dark")
    document.getElementById("btnDarkTheme").classList.remove("button-contrast")
    document.getElementById("btnDarkTheme").classList.remove("button-rainbow")

    document.getElementById("btnContrastTheme").classList.add("button-light")
    document.getElementById("btnContrastTheme").classList.remove("button-dark");
    document.getElementById("btnContrastTheme").classList.remove("button-contrast")
    document.getElementById("btnContrastTheme").classList.remove("button-rainbow")

    document.getElementById("btnRainbowTheme").classList.add("button-light")
    document.getElementById("btnRainbowTheme").classList.remove("button-dark");
    document.getElementById("btnRainbowTheme").classList.remove("button-contrast")
    document.getElementById("btnRainbowTheme").classList.remove("button-rainbow")
}

function darkTheme() {
    document.getElementById("body").classList.remove("body-light")
    document.getElementById("body").classList.add("body-dark")
    document.getElementById("body").classList.remove("body-contrast")
    document.getElementById("body").classList.remove("body-rainbow")

    document.getElementById("title").classList.remove("title-light")
    document.getElementById("title").classList.add("title-dark")
    document.getElementById("title").classList.remove("title-contrast")
    document.getElementById("title").classList.remove("title-rainbow")

    document.getElementById("btnMostrar").classList.remove("button-light")
    document.getElementById("btnMostrar").classList.add("button-dark")
    document.getElementById("btnMostrar").classList.remove("button-contrast")
    document.getElementById("btnMostrar").classList.remove("button-rainbow")

    document.getElementById("btnBorrar").classList.remove("button-light")
    document.getElementById("btnBorrar").classList.add("button-dark")
    document.getElementById("btnBorrar").classList.remove("button-contrast")
    document.getElementById("btnBorrar").classList.remove("button-rainbow")

    document.getElementById("lblSaludar").classList.remove("text-light")
    document.getElementById("lblSaludar").classList.add("text-dark")
    document.getElementById("lblSaludar").classList.remove("text-contrast")
    document.getElementById("lblSaludar").classList.remove("text-rainbow")

    document.getElementById("btnLightTheme").classList.remove("button-light")
    document.getElementById("btnLightTheme").classList.add("button-dark")
    document.getElementById("btnLightTheme").classList.remove("button-contrast")
    document.getElementById("btnLightTheme").classList.remove("button-rainbow")

    document.getElementById("btnDarkTheme").classList.remove("button-light")
    document.getElementById("btnDarkTheme").classList.add("button-dark")
    document.getElementById("btnDarkTheme").classList.remove("button-contrast")
    document.getElementById("btnDarkTheme").classList.remove("button-rainbow")


    document.getElementById("btnContrastTheme").classList.remove("button-light")
    document.getElementById("btnContrastTheme").classList.add("button-dark");
    document.getElementById("btnContrastTheme").classList.remove("button-contrast")
    document.getElementById("btnContrastTheme").classList.remove("button-rainbow")

    document.getElementById("btnRainbowTheme").classList.remove("button-light")
    document.getElementById("btnRainbowTheme").classList.add("button-dark");
    document.getElementById("btnRainbowTheme").classList.remove("button-contrast")
    document.getElementById("btnRainbowTheme").classList.remove("button-rainbow")
}

function contrastTheme() {
    document.getElementById("body").classList.remove("body-light")
    document.getElementById("body").classList.remove("body-dark")
    document.getElementById("body").classList.add("body-contrast")
    document.getElementById("body").classList.remove("body-rainbow")

    document.getElementById("title").classList.remove("title-light")
    document.getElementById("title").classList.remove("title-dark")
    document.getElementById("title").classList.add("title-contrast")
    document.getElementById("title").classList.remove("title-rainbow")

    document.getElementById("btnMostrar").classList.remove("button-light")
    document.getElementById("btnMostrar").classList.remove("button-dark")
    document.getElementById("btnMostrar").classList.add("button-contrast")
    document.getElementById("btnMostrar").classList.remove("button-rainbow")

    document.getElementById("btnBorrar").classList.remove("button-light")
    document.getElementById("btnBorrar").classList.remove("button-dark")
    document.getElementById("btnBorrar").classList.add("button-contrast")
    document.getElementById("btnBorrar").classList.remove("button-rainbow")


    document.getElementById("lblSaludar").classList.remove("text-light")
    document.getElementById("lblSaludar").classList.remove("text-dark")
    document.getElementById("lblSaludar").classList.add("text-contrast")
    document.getElementById("lblSaludar").classList.remove("text-rainbow")

    document.getElementById("btnLightTheme").classList.remove("button-light")
    document.getElementById("btnLightTheme").classList.remove("button-dark")
    document.getElementById("btnLightTheme").classList.add("button-contrast")
    document.getElementById("btnLightTheme").classList.remove("button-rainbow")

    document.getElementById("btnDarkTheme").classList.remove("button-light")
    document.getElementById("btnDarkTheme").classList.remove("button-dark")
    document.getElementById("btnDarkTheme").classList.add("button-contrast")
    document.getElementById("btnDarkTheme").classList.remove("button-rainbow")

    document.getElementById("btnContrastTheme").classList.remove("button-light")
    document.getElementById("btnContrastTheme").classList.remove("button-dark");
    document.getElementById("btnContrastTheme").classList.add("button-contrast")
    document.getElementById("btnContrastTheme").classList.remove("button-rainbow")

    document.getElementById("btnRainbowTheme").classList.remove("button-light")
    document.getElementById("btnRainbowTheme").classList.remove("button-dark");
    document.getElementById("btnRainbowTheme").classList.add("button-contrast")
    document.getElementById("btnRainbowTheme").classList.remove("button-rainbow")
}

function rainbowTheme() {
    document.getElementById("body").classList.remove("body-light")
    document.getElementById("body").classList.remove("body-dark")
    document.getElementById("body").classList.remove("body-contrast")
    document.getElementById("body").classList.add("body-rainbow")

    document.getElementById("title").classList.remove("title-light")
    document.getElementById("title").classList.remove("title-dark")
    document.getElementById("title").classList.remove("title-contrast")
    document.getElementById("title").classList.add("title-rainbow")

    document.getElementById("btnMostrar").classList.remove("button-light")
    document.getElementById("btnMostrar").classList.remove("button-dark")
    document.getElementById("btnMostrar").classList.remove("button-contrast")
    document.getElementById("btnMostrar").classList.add("button-rainbow")

    document.getElementById("btnBorrar").classList.remove("button-light")
    document.getElementById("btnBorrar").classList.remove("button-dark")
    document.getElementById("btnBorrar").classList.remove("button-contrast")
    document.getElementById("btnBorrar").classList.add("button-rainbow")

    document.getElementById("lblSaludar").classList.remove("text-light")
    document.getElementById("lblSaludar").classList.remove("text-dark")
    document.getElementById("lblSaludar").classList.remove("text-contrast")
    document.getElementById("lblSaludar").classList.add("text-rainbow")

    document.getElementById("btnLightTheme").classList.remove("button-light")
    document.getElementById("btnLightTheme").classList.remove("button-dark")
    document.getElementById("btnLightTheme").classList.remove("button-contrast")
    document.getElementById("btnLightTheme").classList.add("button-rainbow")

    document.getElementById("btnDarkTheme").classList.remove("button-light")
    document.getElementById("btnDarkTheme").classList.remove("button-dark")
    document.getElementById("btnDarkTheme").classList.remove("button-contrast")
    document.getElementById("btnDarkTheme").classList.add("button-rainbow")

    document.getElementById("btnContrastTheme").classList.remove("button-light")
    document.getElementById("btnContrastTheme").classList.remove("button-dark");
    document.getElementById("btnContrastTheme").classList.remove("button-contrast")
    document.getElementById("btnContrastTheme").classList.add("button-rainbow")

    document.getElementById("btnRainbowTheme").classList.remove("button-light")
    document.getElementById("btnRainbowTheme").classList.remove("button-dark");
    document.getElementById("btnRainbowTheme").classList.remove("button-contrast")
    document.getElementById("btnRainbowTheme").classList.add("button-rainbow")
}
