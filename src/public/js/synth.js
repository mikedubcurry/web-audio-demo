const synth = document.querySelector(".synth")
const playBtn = document.querySelector(".play")

const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

const gainNode = audioCtx.createGain()

const oscillator = audioCtx.createOscillator()
oscillator.type = "sawtooth"
oscillator.frequency.setValueAtTime(55, audioCtx.currentTime)
oscillator.connect(gainNode)
oscillator.start()

const lfo = audioCtx.createOscillator();
lfo.type = 'sawtooth'
lfo.frequency.setValueAtTime(1.18, audioCtx.currentTime)
lfo.connect(gainNode.gain)
lfo.start()

gainNode.connect(audioCtx.destination)

console.log(audioCtx)

playBtn.addEventListener("click", function() {
  audioCtx.state === "suspended"
    ? audioCtx.resume().then(() => {})
    : audioCtx.suspend()
})
