let h1 = document.querySelector("h1")
let h1Chars = h1.textContent.split("")
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

let increment = 0;
function scramble() {
    let str = h1Chars.map((char, index) => {
        if (index < increment) {
            return char
        }
        return characters[Math.floor(Math.random() * characters.length)]
    }).join("")
    h1.innerText = str
    increment += .15
}


h1.addEventListener("mouseenter", () => {
    let intervalId = setInterval(() => {
        scramble()
        if (increment >= h1Chars.length) {
            clearInterval(intervalId)
        }
    }, 50)
})