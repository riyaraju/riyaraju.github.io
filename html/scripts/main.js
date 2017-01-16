var myImage = document.querySelector('img');
myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'html-images/RedApple.jpg'){
    myImage.setAttribute ('src','html-images/2.jpg');
  } else {
    myImage.setAttribute('src', 'html-images/RedApple.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName(){
  var myName = prompt('Please Enter your Name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome,' + myName + '!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome,' + storedName;
}

myButton.onclick = function() {
  setUserName();
}