const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get('user') || "Guest";
const endpoint = "YOUR_WEB_APP_URL"; // Replace with your Apps Script Web App URL

document.getElementById('yesBtn').addEventListener('click', () => {
    fetch(`${endpoint}?user=${user}&action=yes`)
    .then(() => alert("💖 Thank you! You made my day!"))
    .catch(err => console.error(err));
});

let noCount = 0;
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('click', () => {
    noCount++;
    
    // Fetch log, but don't block the button
    fetch(`${endpoint}?user=${user}&action=no`)
    .catch(err => console.error(err));
    
    // Playful message without blocking
    alert(`😢 Maybe next time! (No clicked ${noCount} times)`);

    // Optional: small dodge effect to make it fun
    const x = Math.random() * 100 - 50; // move left/right
    const y = Math.random() * 50 - 25;  // move up/down
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
