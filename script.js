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
    setTheme("light")
}

function darkTheme() {
    setTheme("dark")
}

function contrastTheme() {
    setTheme("contrast")
}

function rainbowTheme() {
    setTheme("rainbow")
}

function setTheme(themeToSet) {
    const components = [
        ["body", "body"],
        ["title", "title"],
        ["btnMostrar", "button"],
        ["btnBorrar", "button"],
        ["lblSaludar", "text"],
        ["btnLightTheme", "button"],
        ["btnDarkTheme", "button"],
        ["btnContrastTheme", "button"],
        ["btnRainbowTheme", "button"]];

    const themesToSet = [themeToSet];
    const allThemes = ["light", "dark", "rainbow", "contrast"]
    components.forEach(element => {
        allThemes.forEach(theme => document.getElementById(element[0]).classList.remove(element[1] + "-" + theme));
        themesToSet.forEach(theme => document.getElementById(element[0]).classList.add(element[1] + "-" + theme))
    });
}