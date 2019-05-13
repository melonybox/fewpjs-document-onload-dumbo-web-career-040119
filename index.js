// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  let textEdit = document.querySelector("p#text");
  textEdit.textContent = "This is really cool!";
  console.log(textEdit);
});
