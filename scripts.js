// load the event
window.onload = function() {

  //changes font size
  document.querySelector("#title").style.fontSize = "100px";
}

//defines what's shown on click
function showIngredients() {
  document.getElementById("content1").style.visibility = "visible";
}

function showPrep() {
  document.getElementById("content2").style.visibility = "visible";
}

function showEquipment() {
  document.getElementById("content3").style.visibility = "visible";
}

function showDirections() {
  document.getElementById("content4").style.visibility = "visible";
}

//title color change via click  
document.querySelector("#title");
title.onclick = function() {
  title.classList.toggle("clicked");
}

// new HTML elements
x = document.getElementById("enjoy");
x.innerHTML = "And that's how you make the world's best lasagna! Enjoy!";
x.style.fontSize = '30px';
x.style.fontFamily = 'Sigmar One';
x.style.textAlign = 'center';
x.style.color = 'saddlebrown';