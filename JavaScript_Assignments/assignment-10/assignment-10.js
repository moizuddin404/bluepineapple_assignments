let count = 0;

function ChangeImage() {
    let imgs = document.getElementsByTagName('img');
    let img = imgs[0];
    let btn = document.getElementById('btn');

    img.src = "pc.png";
    btn.innerHTML = "Image Changed!";
}

function advancedChange() {
    let imgArr = ['autumn-wallpaper.jpg', 'Bachalpsee_Switzerland.jpg', 'lighthouse.jpeg', 'pc.png', 'lakebled.jpeg'];

    let imgs = document.getElementsByTagName('img');
    let img = imgs[0]
    img.src = imgArr[count];
    console.log(count);
    if (count < imgArr.length - 1) {
        count++;
    } else {
        count = 0;
    }

}

