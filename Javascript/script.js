let displayBox = document.querySelector(".display")
function showDisplay (event) {
    const x = event.target.innerText
    if (displayBox.innerText == 0){
        return displayBox.innerText = x
    }
    return displayBox.innerText += x
}
function calculat () {
    let result = displayBox.innerText
    displayBox.innerText = eval(result)
}
function allclear () {
    displayBox.innerText = 0
}
function clear () {
    let text = displayBox.innerText
    if (text.length == 1) {
        displayBox.innerText = 0 
    }else {
        displayBox.innerText = text.substring(0, text.length - 1)
    }
}
document.querySelector(".clear-last").addEventListener("click", clear)
document.querySelector(".all-clear").addEventListener("click", allclear)
document.querySelector(".calculate").addEventListener("click", calculat)
let list = document.querySelectorAll(".show-display")
list.forEach(item => {
    item.addEventListener("click", showDisplay)
})