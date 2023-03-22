// speed control
const speedDec = document.getElementById("speedDec")
const speedInc = document.getElementById("speedInc")
const currentSpeed = document.getElementById("currentSpeed")
let speed = 1

// Player controls
const stopBtn = document.getElementById("stopBtn")
const pauseBtn = document.getElementById("pauseBtn")
const playBtn = document.getElementById("playBtn")

// misc Control
const decFontBtn = document.getElementById("decFontBtn")
const currentFontSize = document.getElementById("currentFontSize")
const incFontBtn = document.getElementById("incFontBtn")

const script = document.getElementById("script")


// change speed 
speedInc.addEventListener("click", () => {
  if (speed < 20) speed += 1
  currentSpeed.innerText = `x${speed}`
})

speedDec.addEventListener("click", () => {
  if (speed > 1) speed -= 1
  currentSpeed.innerText = `x${speed}`
})