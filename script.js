const ringStates = {
  ring1: 0,
  ring2: 0,
  ring3: 0
};

function rotateRing(id) {
  ringStates[id] = (ringStates[id] + 45) % 360;
  document.getElementById(id).style.transform = `rotate(${ringStates[id]}deg)`;
  checkSolution();
}

function checkSolution() {
  // Example winning condition: 90, 180, 270
  if (ringStates.ring1 === 90 &&
      ringStates.ring2 === 180 &&
      ringStates.ring3 === 270) {
    document.getElementById('result').textContent = "✅ The drain unlocks!";
  } else {
    document.getElementById('result').textContent = "";
  }
}
