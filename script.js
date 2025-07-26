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
    const normalized = ((ringStates[id] % 360) + 360) % 360;
    display.textContent = `${normalized}°`;
  }

  // 🔊 Play rotation sound
  const rotateSound = document.getElementById('rotate-sound');
  if (rotateSound) {
    rotateSound.currentTime = 0;
    rotateSound.volume = 0.2; // optional volume adjustment
    rotateSound.play().catch(err => console.warn("Autoplay blocked:", err));
  }
}


function checkSolution() {
  const r1 = ((ringStates.ring1 % 360) + 360) % 360;
  const r2 = ((ringStates.ring2 % 360) + 360) % 360;

  const result = document.getElementById('result');
  const incorrectFlash = document.getElementById('incorrect-flash');
  const overlay = document.getElementById('dark-overlay');

  result.style.display = "block";

  if (r1 === 120 && r2 === 180) {
  result.textContent = "";
  result.style.color = "";

  const unlockSound = document.getElementById('unlock-sound');
const lockUnlockSound = document.getElementById('lockUnlock-sound');

if (unlockSound) {
  unlockSound.volume = 0.5;
  unlockSound.currentTime = 0;
  unlockSound.play().catch(err => console.warn("Autoplay blocked:", err));

  // ⏱️ Play the second sound after 1 second
  if (lockUnlockSound) {
    setTimeout(() => {
      lockUnlockSound.volume = 0.4;
      lockUnlockSound.currentTime = 0;
      lockUnlockSound.play().catch(err => console.warn("Autoplay blocked:", err));
    }, 4900);
  }
}


  const ring1 = document.getElementById('ring1');
  const ring2 = document.getElementById('ring2');
  const gear  = document.getElementById('gear');

  [ring1, ring2, gear].forEach(el => {
    if (el) {
      el.classList.remove('unlock-anim');
      void el.offsetWidth;
      el.classList.add('unlock-anim');
    }
  });

  // Fade in end screen after the 5s unlock animation
setTimeout(() => {
  const endScreen = document.getElementById('end-screen');
  endScreen.classList.add('show');

  // Fade out after 2 seconds
  setTimeout(() => {
    endScreen.classList.add('hide');
    endScreen.classList.remove('show');
  }, 2000);

  // (Optional) Hide completely after fade-out
  setTimeout(() => {
    endScreen.style.display = 'none';
  }, 3000); // 1s for fade-out
}, 5000);



  // 🔓 Show unlocked image and overlay
  const unlockedImg = document.getElementById('unlocked-image');
  const overlay = document.getElementById('overlay');
  if (unlockedImg && overlay) {
    unlockedImg.classList.add('show');
    overlay.classList.add('active');

    setTimeout(() => {
      unlockedImg.classList.remove('show');
      overlay.classList.remove('active');
    }, 2000); // 2 seconds display time
  }
}
 else {
  // ❌ Incorrect – show PNG + fade background
  const incorrectSound = document.getElementById('incorrect-sound');
  if (incorrectSound) {
    incorrectSound.volume = 0.5;
    incorrectSound.currentTime = 0;
    incorrectSound.play().catch(err => console.warn("Autoplay blocked:", err));
  }

  overlay.classList.add("show");
  incorrectFlash.classList.add("show");

  setTimeout(() => {
    incorrectFlash.classList.remove("show");
    overlay.classList.remove("show");
    resetPuzzle();
  }, 1900);
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



