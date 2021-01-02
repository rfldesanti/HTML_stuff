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
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        mySubTitle.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    mySubTitle.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();    
}

var numtext = localStorage.getItem('name').length;

while(numtext>0) {
    if (numtext === localStorage.getItem('name').length) {
        alert("Your name have " + numtext + " letters");
        alert("Now I'm gonna reduce this number until reach to 0");
    } else {
        alert("Now the number is " + numtext); 
    }
    numtext = numtext - 1;
}