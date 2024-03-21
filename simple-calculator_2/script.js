const clearBtn = document.getElementById("clear-button");
const deleteBtn = document.getElementById("delete-button");
const divideBtn = document.getElementById("divide-button");
const multiplyBtn = document.getElementById("multiply-button");
const subtractBtn = document.getElementById("subtract-button");
const addBtn = document.getElementById("add-button");
const decimalBtn = document.getElementById("decimal-button");
const equalBtn = document.getElementById("equal-button");
const result = document.getElementById("result");
numberButtons = document.querySelectorAll(".number")

numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        console.log(button.innerText);
    });
});
