let myImage = document.querySelector('img');
//'let' it is a declaration of a LOCAL VARIABLE. It's scope is limited
//to the block for which it is declared.
//Here, it is assigning the value of the 'img' element in the HTML document 
//to the 'myImage" variable
let myTitle = document.querySelector('h1');
//Here, the variable "myTitle" receive the value of the
//'h1' document in the HTML document

//Both of the variables above receive their values from
//a search on the document HTML through the method querySelector,
//which is a method of the DOCUMENT interface - a interface of the
//web API DOM, that is a API that represents a structure of a document
//in memory
//The querySelector method returns the FIRST ELEMENT that
//matches the specified selector

myImage.onclick = function() {
//In this line, the myImage variable, which had it value assigned as
//an 'img' element from the HTML document, uses the ONCLICK propertie,
//assigning it to a function. The onclick is an event, that is fired
//when the element receive a mouse click.
//Is this case, every instruction inside the block's function
//will occur when the img element is clicked
    let mySrc = myImage.getAttribute('src');
    //Here, a variable called mySrc is created, and is assigned to it
    //the value returned by the getAttribute method, which returns the
    //value of the attribute parametrized. In this case, mySrc receive
    //the value found in the src attribute of the myImage variable(that
    //refers to the img HTML element)

    if(mySrc === 'images/troll.jpg') {
    //A conditional block is opened; the conditional test
    //verifies if the src attirbute, that is responsible for
    //the address of the image of the img element, matches
    //with the value stored in the mySrc variable
        myImage.setAttribute('src','images/sapato.jpg');
        //If the statement is true, the settings of the myImage variable
        //is alterated through the setAttribute propertie; this propertie sets
        //the value of an attribute on the specified element. If the attribute
        //already existsm the value is updated; in this case, the src attribute
        //is alterated to another image.
        myTitle.textContent = 'Sapatinho!';
        //The textual content of the h1 element, to which myTitle variable
        //makes reference, is alterated by the textContent propertie. This propertie
        //come from the DOM Node interface, that is an abstract base class.
        //Inside the conditional block, in being the statement true,
        //the textual content of the h1 element will change together
        //with the image
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