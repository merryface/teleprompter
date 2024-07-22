// speed control
const speedDec = document.getElementById("speedDec")
const speedInc = document.getElementById("speedInc")
const currentSpeed = document.getElementById("currentSpeed")
let speed = 0.5

// Player controls
const stopBtn = document.getElementById("stopBtn")
const pauseBtn = document.getElementById("pauseBtn")
const playBtn = document.getElementById("playBtn")

// misc Control
const decFontBtn = document.getElementById("decFontBtn")
const currentFontSize = document.getElementById("currentFontSize")
const incFontBtn = document.getElementById("incFontBtn")
let fontSize = 16

const script = document.getElementById("script")

let scrollInterval = null;
let currentScroll = 0;


// Load saved speed from local storage
if (localStorage.getItem("speed")) {
  speed = parseInt(localStorage.getItem("speed"));
  currentSpeed.innerText = `x ${speed.toFixed(1)}`;
}

// change speed
speedInc.addEventListener("click", () => {
  if (speed < 20) speed += 0.1
  localStorage.setItem("speed", speed.toFixed(1).toString());
  currentSpeed.innerText = `x ${speed.toFixed(1)}`
})

speedDec.addEventListener("click", () => {
  if (speed > 0.2) speed -= 0.1
  localStorage.setItem("speed", speed.toFixed(1).toString());
  currentSpeed.innerText = `x ${speed.toFixed(1)}`
})

// Load saved font size from local storage
if (localStorage.getItem("fontSize")) {
  fontSize = parseInt(localStorage.getItem("fontSize"));
  currentFontSize.innerText = `Text size: ${fontSize}px`;
  script.style.fontSize = `${fontSize}px`;
}

// change font size
incFontBtn.addEventListener("click", () => {
  if (fontSize < 100) fontSize += 2
  currentFontSize.innerText = `Text size: ${fontSize}px`
  script.style.fontSize = `${fontSize}px`
  localStorage.setItem("fontSize", fontSize.toString());
})

decFontBtn.addEventListener("click", () => {
  if (fontSize > 10) fontSize -= 2
  currentFontSize.innerText = `Text size: ${fontSize}px`
  script.style.fontSize = `${fontSize}px`
  localStorage.setItem("fontSize", fontSize.toString());
})

// Start prompter
const startPrompter = () => {
  const scrollHeight = script.scrollHeight - script.clientHeight;
  scrollInterval = setInterval(() => {
    if (currentScroll < scrollHeight) {
      currentScroll += speed;
      script.scrollTop = currentScroll;
    } else {
      clearInterval(scrollInterval);
    }
  }, 10); // Change this value to adjust the refresh rate of the scroll interval.
};

const pausePrompter = () => {
  clearInterval(scrollInterval);
};

const stopPrompter = () => {
  clearInterval(scrollInterval);
  currentScroll = 0;
  script.scrollTop = 0;
};

playBtn.addEventListener('click', startPrompter);
pauseBtn.addEventListener('click', pausePrompter);
stopBtn.addEventListener('click', stopPrompter);

// Load saved script from local storage
if (localStorage.getItem("script")) {
  script.value = localStorage.getItem("script");
}

// Update saved script when new line is added
script.addEventListener("input", () => {
  localStorage.setItem("script", script.value);
});