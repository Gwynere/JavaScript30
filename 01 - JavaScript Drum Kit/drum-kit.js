// Listen for the key event
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) // selects the audio file
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) // selects the corresponding key div
    if(!audio) return // stop the function
    audio.currentTime = '' // rewind to the start
    audio.play() // if you click, it plays the audio file
    key.classList.add('playing') // if you click, it adds the class of 'playing' on the key div
})

const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', function(e){
    if(e.propertyName !== 'transform') return // skip it if it's not a transform
    this.classList.remove('playing') // after the transition is finished, it removes the 'playing' class
}))