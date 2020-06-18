const divs = document.querySelectorAll('div')
const button = document.querySelector('button')

function logText(e) {
    console.log(this.classList.value)
    // e.stopPropagation() // stop bubbling
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: true, // the function is not going to run on the bubble up (bottom to top), it's going to get run on the capture down (top to bottom)
    once: true // will listen for a click once and then unbind itself so that there's no future clicks on it
}))

button.addEventListener('click', () => {
    console.log('Click!!!')},
    {once: true})