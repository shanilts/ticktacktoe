console.log("haii");
var clear1 = document.querySelector("button");
var square = document.querySelectorAll("td");
function clear(){
  console.log("haii");
  for (var i = 0; i < square.length; i++) {
    square[i].textContent=" ";
  }
}
clear1.addEventListener("click",clear);
var b1 = document.querySelector("#a");
function a(){
  if (this.textContent==="")
  {
    this.textContent="x";
  }
  else if(this.textContent==="x")
  {
    this.textContent="0";
  }
  else {
    this.textContent="";
  }
}
for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click",a);
}
