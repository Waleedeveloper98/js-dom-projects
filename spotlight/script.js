let spotlight = document.querySelector(".spotlight")
spotlight.addEventListener("mousemove", (e) => {
    spotlight.style.setProperty("--x", e.clientX + "px")
    spotlight.style.setProperty("--y", e.clientY + "px")
})