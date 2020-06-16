const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')

const walk = 150

function shadow(e){
    // const width = hero.offsetWidth
    // const height = hero.offserHeight
    // are equal to
    const { offsetWidth: width, offsetHeight: height } = hero

    let { offsetX: x, offsetY: y } = e

    if (this !== e.target) {
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
    }

    const xWalk = (x / width * walk) - (walk / 2)
    const yWalk = (y / height * walk) - (walk / 2)

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.9),
    ${xWalk * - 1}px ${yWalk}px 0 rgba(0,255,255,0.9),
    ${xWalk}px ${yWalk * -1}px 0 rgba(255,255,0,0.9),
    ${yWalk}px ${xWalk}px 0 rgba(0,255,0,0.9)
    `
}



hero.addEventListener('mousemove', shadow)