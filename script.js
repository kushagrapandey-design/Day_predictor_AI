let selectedDay = "";

function selectDay(button) {
  document.querySelectorAll(".buttons button").forEach(btn => {
    btn.classList.remove("selected");
  });
  button.classList.add("selected");
  selectedDay = button.innerText;
}

function typeLine(text, delay) {
  return new Promise(resolve => {
    const consoleBox = document.getElementById("console");
    let i = 0;
    const interval = setInterval(() => {
      consoleBox.innerHTML += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        consoleBox.innerHTML += "<br>";
        setTimeout(resolve, delay);
      }
    }, 40);
  });
}

async function predict() {
  if (!selectedDay) {
    alert("Select a day first!");
    return;
  }

  const consoleBox = document.getElementById("console");
  const result = document.getElementById("result");

  consoleBox.innerHTML = "";
  result.innerHTML = "";

  await typeLine("Initializing Quantum AI Engine...", 800);
  await typeLine("Running DNA analysis...", 800);
  await typeLine("Consulting Elon Musk...", 800);
  await typeLine("Hacking NASA for data...", 800);
  await typeLine("Calling Stephen Hawking...", 800);
  await typeLine("Calculating with fingers...", 800);
  await typeLine("Missed call received from Jaadu...", 800);
  await typeLine("Finalizing prediction...", 1000);

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
