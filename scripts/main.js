let myImage = document.querySelector('img');
//'let' it is a declaration of a LOCAL VARIABLE. It's scope is limited
//to the block for which it is declared.
//Here, it is assigning the value of the 'img' element in the HTML document 
//to the 'myImage" variable
let myTitle = document.querySelector('h1');
//Here, the variable "myTitle" receive the value of the
//'h1' document in the HTML document

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