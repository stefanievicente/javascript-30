// to do: put a button that makes the video go fullscreen and show the video current time

// Get our elements

const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

// Build our functions

function togglePlay(){
    
    // this

    // if (video.paused) {
    //     video.play()
    // } else {
    //     video.pause()
    // } 

    // or just

    video[video.paused ? 'play' : 'pause']()
}

function updateButton(){
    toggle.textContent = this.paused ? '►' : '❚❚'
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
    video[this.name] = this.value
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime
}

// Hook up the event listners 

toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)

video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

video.addEventListener('timeupdate', handleProgress)

progress.addEventListener('click', scrub)
let mousedown = false
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)