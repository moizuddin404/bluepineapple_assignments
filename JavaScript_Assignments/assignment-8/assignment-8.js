function change() {
    let cb = document.getElementById('cb');
    let box = document.getElementById('box');

    if (cb.checked == true) {
        box.style.backgroundColor = "red";
    }
    else {
        box.style.backgroundColor = "lightblue";
    }
}

function toggle() {
    let box = document.getElementById('box');
    box.classList.toggle("highlight");
}