let myImage = document.querySelector('img');
let myTitle = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/troll.jpg') {
        myImage.setAttribute('src','images/sapato.jpg');
        myTitle.textContent = 'Sapatinho!';
    } else {
        myImage.setAttribute('src','images/troll.jpg');
        myTitle.textContent = 'What a troll!';
    }
}