let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/troll.jpg') {
        myImage.setAttribute('src','images/sapato.jpg');
    } else {
        myImage.setAttribute('src','images/troll.jpg');
    }
}