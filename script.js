let selectedDay = "";

function selectDay(button) {
  document.querySelectorAll(".buttons button").forEach(btn => {
    btn.classList.remove("selected");
  });
  button.classList.add("selected");
  selectedDay = button.innerText;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeLine(text, duration = 1500) {
  const consoleBox = document.getElementById("console");
  consoleBox.innerHTML = ""; // clears previous line

  let i = 0;
  const typingSpeed = 30;

  return new Promise(resolve => {
    const interval = setInterval(() => {
      consoleBox.innerHTML =
        text.substring(0, i) + '<span class="cursor">|</span>';
      i++;

      if (i > text.length) {
        clearInterval(interval);
        setTimeout(resolve, duration);
      }
    }, typingSpeed);
  });
}

async function predict() {
  if (!selectedDay) {
    alert("Select a day first!");
    return;
  }

  const result = document.getElementById("result");
  result.innerHTML = "";

  const steps = [
    "Initializing Quantum AI Engine...",
    "Running DNA analysis...",
    "Consulting Elon Musk...",
    "Hacking NASA servers...",
    "Calling Stephen Hawking...",
    "Calculating with fingers...",
    "Missed call from Jaadu...",
    "Finalizing prediction..."
  ];

  for (let step of steps) {
    await typeLine(step, 1200);
  }

  showResult();
}

function showResult() {
  const result = document.getElementById("result");

  const today = new Date();
  today.setDate(today.getDate() + 1);
  const realTomorrow = today.toLocaleString('en-us', { weekday: 'long' });

  if (selectedDay === realTomorrow) {
    result.innerHTML =
      `✅ YES! Tomorrow is ${realTomorrow}.<br>
      Your IQ is higher than 99.7% of humanity 🧠🔥`;
  } else {
    result.innerHTML =
      `❌ Oops! You are wrong.<br>
      Your IQ is below average 😭`;
  }
}
