const noButton = document.querySelector('.no-button');
const loveMessage = document.getElementById('love-message');

// Move the "No" button randomly when hovered
noButton.addEventListener('mouseenter', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Show love message when "Yes" is clicked
function handleYesClick() {
    loveMessage.classList.add('show');
    loveMessage.classList.remove('hidden');
}
