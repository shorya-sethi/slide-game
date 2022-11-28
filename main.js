for (let i = 25; i > 0; i--) {
    let slider = document.createElement("div")
    slider.setAttribute("class", "slider animate")
    slider.setAttribute("id", "slider" + i)
    document.getElementById("game").append(slider)
}

let slideWidth = 400
let counter = 1


// document.getElementById("btn").addEventListener("click", stopSliding(1))
function stopSliding(slider) {
    let sliderCurent = document.getElementById("slider" + slider)
    let sliderAbove = document.getElementById("slider" + (slider + 1))

    if (slider == 1) {
        let sliderBelow = sliderCurent
    } else {
        let sliderBelow = document.getElementById("slider" + (slider - 1))
    }

    let left = window.getComputedStyle(sliderCurent).getPropertyValue("left")
    sliderCurent.classList.remove("animate")
    sliderCurent.style.left = left
    let width = parseFloat(window.getComputedStyle(sliderCurent).getPropertyValue("width"))
    let leftBelow = parseFloat(window.getComputedStyle(sliderBelow).getPropertyValue("left"))
    left = parseFloat(left)
    let difference = left - leftBelow
    let absDifference = Math.abs(difference)
    if (difference < 0) {
        left = left + absDifference
        sliderCurent.style.left = left.toString().concat("px")
    }
    else {
        left = left - absDifference
        sliderCurent.style.left = left.toString().concat("px")
    }
    let offset = (width - absDifference).toString.concat("px")
    sliderCurent.style.width = offset
    sliderAbove.style.width = offset
    sliderAbove.style.visibility = "visible"
    let onclick = "stopSliding(" + (slider + 1) + ")"
    document.getElementById("btn").setAttribute("onclick", onclick)
}