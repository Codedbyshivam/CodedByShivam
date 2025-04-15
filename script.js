const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
});
const emojiCursor = document.querySelector('.cursor-emoji');
const buttons = document.querySelectorAll('button, .btn, a'); // Add more selectors if needed

let mouseX = 0, mouseY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    emojiCursor.style.left = `${mouseX}px`;
    emojiCursor.style.top = `${mouseY}px`;
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover effect on buttons
buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        emojiCursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    });
    btn.addEventListener("mouseleave", () => {
        emojiCursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
});








// You can add custom interactivity here later

// Example: console log to show JS is working
console.log("Portfolio JS loaded 🚀");