const ringStates = {
  ring1: 0,
  ring2: 0
};

function rotateRing(id) {
  ringStates[id] = (ringStates[id] + 45) % 360;
  const element = document.getElementById(id);
  element.style.transform = `rotate(${ringStates[id]}deg)`;
}

function checkSolution() {
  // Adjust solution to your desired angles
  if (ringStates.ring1 === 90 && ringStates.ring2 === 270) {
    document.getElementById('result').textContent = "✅ The mechanism unlocks!";
  } else {
    document.getElementById('result').textContent = "";
  }
}
