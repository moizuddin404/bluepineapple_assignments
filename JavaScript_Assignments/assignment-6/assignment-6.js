let count = 1;
function addItem() {


    document.getElementById('list').innerHTML += `<li class="li">Item ${count}</li>`;
    count++;
}