function bigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function radioChange(id) {
    if (id === "fancyRadio") {
        document.getElementById("textInput").style.fontWeight = "bold";
        document.getElementById("textInput").style.color = "blue";
        document.getElementById("textInput").style.textDecoration = "underline"
    } else {
        document.getElementById("textInput").style.fontWeight = "";
        document.getElementById("textInput").style.color = "black";
        document.getElementById("textInput").style.textDecoration = ""
    }
}

function moo() {
    let str = document.getElementById("textInput").value.toUpperCase();
    let parts = str.split(".");
    str = parts.join("-Moo.");
    document.getElementById("textInput").value = str;

}
