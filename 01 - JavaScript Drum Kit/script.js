function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0  // rewind to the start
    audio.play()
    key.classList.add('playing')  // adiciona a animação

}

function removeTransition(e){
    
    if (e.propertyName !== 'transform') return  // skip it if it's not a transform
    this.classList.remove('playing')  // this is always equal to what got called against it, in this case this is equal to key (in keys.forEach) 
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)