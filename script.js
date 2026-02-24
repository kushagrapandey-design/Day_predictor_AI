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

async function predict() {
  if (!selectedDay) {
    alert("Select a day first!");
    return;
  }

  const consoleBox = document.getElementById("console");
  const result = document.getElementById("result");
  const progress = document.getElementById("progress");

  consoleBox.innerHTML = "";
  result.innerHTML = "";
  progress.style.width = "0%";

  const steps = [
    "Booting Quantum AI Core...",
    "Running DNA analysis...",
    "Stealing satellite data... 3%",
    "Stealing satellite data... 97%",
    "Stealing satellite data... 3% (error)",
    "Consulting Elon Musk...",
    "Hacking NASA mainframe...",
    "Calling Stephen Hawking...",
    "Calculating with fingers...",
    "Missed call received from Jaadu...",
    "Encrypting brain signals...",
    "Finalizing ultra prediction..."
  ];

  for (let i = 0; i < steps.length; i++) {
    consoleBox.innerHTML = steps[i];
    progress.style.width = ((i + 1) / steps.length) * 100 + "%";
    await sleep(900);
  }

  showResult();
}

function showResult() {
  const result = document.getElementById("result");

  const today = new Date();
  today.setDate(today.getDate() + 1);
  const realTomorrow = today.toLocaleString('en-us', { weekday: 'long' });

  const randomIQ = Math.floor(Math.random() * 110) + 70;

  if (selectedDay === realTomorrow) {
    result.innerHTML =
      `✅ CORRECT! Tomorrow is ${realTomorrow}.<br>
      Your IQ is ${randomIQ}.<br>
      You are smarter than 99.7% of humanity 🧠🔥`;
  } else {
    result.innerHTML =
      `❌ WRONG! Tomorrow is ${realTomorrow}.<br>
      Your IQ is ${randomIQ}.<br>
      NASA has been notified 🚀`;
  }
}
