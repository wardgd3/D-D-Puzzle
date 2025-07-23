const ringStates = {
  ring1: 0,
  ring2: 0
};

function rotateRing(id, direction = 'right') {
  const increment = 30;
  const delta = direction === 'left' ? -increment : increment;

  ringStates[id] += delta;

  const element = document.getElementById(id);

  // Animate properly
  element.style.transition = 'none';
  element.style.transform = `rotate(${ringStates[id] - delta}deg)`;
  void element.offsetWidth;
  element.style.transition = 'transform 0.4s ease-in-out';
  element.style.transform = `rotate(${ringStates[id]}deg)`;

  // Update rotation display text
  const display = document.getElementById(`${id}-degrees`);
  if (display) {
    const normalized = ((ringStates[id] % 360) + 360) % 360; // Always 0–359
    display.textContent = `${normalized}°`;
  }
}




function checkSolution() {
  const r1 = ((ringStates.ring1 % 360) + 360) % 360;
  const r2 = ((ringStates.ring2 % 360) + 360) % 360;

  const result = document.getElementById('result');
  if (!result) return;

  result.style.display = "block"; // 🔑 Ensure it's visible again

  if (r1 === 120 && r2 === 180) {
    result.textContent = "✅ Correct!";
    result.style.color = "#9fef9f";
  } else {
    result.textContent = "❌ Incorrect!";
    result.style.color = "#ffaaaa";
  }
}


function resetPuzzle() {
  // Reset internal state
  ringStates.ring1 = 0;
  ringStates.ring2 = 0;

  // Reset visuals
  const ring1 = document.getElementById('ring1');
  const ring2 = document.getElementById('ring2');

  ring1.style.transition = 'none';
  ring1.style.transform = `rotate(0deg)`;
  ring2.style.transition = 'none';
  ring2.style.transform = `rotate(0deg)`;

  void ring1.offsetWidth;
  void ring2.offsetWidth;

  ring1.style.transition = 'transform 0.4s ease-in-out';
  ring2.style.transition = 'transform 0.4s ease-in-out';

  // Reset degree display text
  const d1 = document.getElementById('ring1-degrees');
  const d2 = document.getElementById('ring2-degrees');
  if (d1) d1.textContent = "0°";
  if (d2) d2.textContent = "0°";

  // Clear result text
  const result = document.getElementById('result');
  if (result) {
    result.textContent = "";
    result.style.color = "";
    result.style.display = "none"; // 🔑 Hide the element visually
  }
}



