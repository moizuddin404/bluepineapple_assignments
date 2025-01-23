function showModal() {
    let modal = document.getElementById('modal');

    modal.style.display = "block";

}

function hideModal() {
    let modal = document.getElementById('modal');
    if (modal.style.display === "block") {
        modal.style.display = "none";
    }
}