let display = document.getElementById("display");
let modeSwitch = document.getElementById("modeSwitch");
let modeLabel = document.getElementById("modeLabel");
let clickSound = document.getElementById("clickSound");

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function press(value) {
  playSound();
  animateButton(event.target);

  if (value === "C") {
    clearDisplay();
  } else if (value === "⌫") {
    deleteLast();
  } else if (value === "=") {
    calculate();
  } else {
    append(value);
  }
}

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function animateButton(button) {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.left = `${event.offsetX}px`;
  ripple.style.top = `${event.offsetY}px`;
  button.appendChild(ripple);
  setTimeout(() => ripple.remove(), 400);
}

// Theme toggle
modeSwitch.addEventListener("change", () => {
  if (modeSwitch.checked) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    modeLabel.textContent = "Light Mode";
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    modeLabel.textContent = "Dark Mode";
  }
});

// Default theme
document.body.classList.add("dark");
