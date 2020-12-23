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

let myButton = document.querySelector('button');
let mySubTitle = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    mySubTitle.textContent = 'Mozilla is cool,' + myName;
}