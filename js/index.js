const counter = document.querySelector("#count")

const add = document.querySelector("#btnAdd")

const subtract = document.querySelector("#btnSubtract")

add.onclick = function () {
    counter.textContent=Number(counter.textContent)+1
}

subtract.onclick = function () {
    counter.textContent=Number(counter.textContent)-1
}

console.log(counter.textContent);

console.log(add);