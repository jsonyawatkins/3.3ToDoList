// add variable and assign it to ID's that were created in html file
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// every time you press the add button a new paragraph "p" is created lines 7,8,12
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    // links text input to list lines 10,11
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    // clears input field after entering
    inputField.value="";
    // makes strike through line item
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
})
// makes line item disapper
paragraph.addEventListener('dblclick', function(){
  toDoContainer.removeChild(paragraph);
})
})