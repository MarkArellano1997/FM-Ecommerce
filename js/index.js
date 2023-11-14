const counter = document.querySelector("#count")

const add = document.querySelector("#btnAdd")

const subtract = document.querySelector("#btnSubtract")

const bar = document.querySelector("#siderbar")

const openMenu = document.querySelector("#btnOpenMenu")

const closeMenu = document.querySelector("#btnCloseMenu")



add.onclick = function () {
    counter.textContent=Number(counter.textContent)+1
}

subtract.onclick = function () {
    counter.textContent=Number(counter.textContent)-1
}

openMenu.onclick = function () {
    bar.classList.remove("hidden")
    console.log(menu)
}

closeMenu.onclick = function () {
    bar.classList.add("hidden")
}

console.log(closeMenu);

console.log(openMenu);