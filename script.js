const container = document.querySelector(".container")
const unsplashURL = "https://picsum.photos/"
const rowsSelect = document.getElementById("rows")

let rows = 5;

rowsSelect.addEventListener("change", (e) => {
    if(e.target.value === "5") {
        rows = 5
    } else if(e.target.value === "10") {
        rows = 10
    } else if(e.target.value === "20") {
        rows = 20
    } else {
        rows = 5
    }
loadImages()
})

function loadImages() {
    container.innerHTML = ''
    for (let i = 0; i < rows * 3; i++) {
        const img = document.createElement("img")
        img.src = `${unsplashURL}${getRandomSize()}`
        container.appendChild(img)
    }
}

loadImages()
function getRandomNum() {
    return Math.floor(Math.random() * 10) + 300;
}

function getRandomSize() {
    return `${getRandomNum()}/${getRandomNum()}`
}