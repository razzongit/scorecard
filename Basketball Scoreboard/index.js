const displayEl1 = document.getElementById("display1")
const displayEl2 = document.getElementById("display2")
const resetBtn = document.getElementById("reset-btn")

function add1(a) {
    if (a === "El1") {
        displayEl1.textContent++
    } else if (a === "El2") {
        displayEl2.textContent++
    }
}

function add2(a) {
    if (a === "El1") {
        displayEl1.textContent++
        displayEl1.textContent++
    } else if (a === "El2") {
        displayEl2.textContent++
        displayEl2.textContent++
    }
    
}

function add3(a) {
    if (a === "El1") {
        displayEl1.textContent++
        displayEl1.textContent++
        displayEl1.textContent++
    } else if (a === "El2") {
        displayEl2.textContent++
        displayEl2.textContent++
        displayEl2.textContent++
    }
}

function reset() {
    displayEl1.textContent = 0;
    displayEl2.textContent = 0;
    
}