// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Breathing Exercise
// function startBreathing() {
//     const btn = document.querySelector('.tool-btn');
//     let count = 4;
//     btn.textContent = `Breathe in (${count})`;

//     const interval = setInterval(() => {
//         count--;
//         if (count === 0) {
//             count = 4;
//             btn.textContent = btn.textContent.includes('in') ? 
//                 `Breathe out (${count})` : `Breathe in (${count})`;
//         } else {
//             btn.textContent = btn.textContent.includes('in') ? 
//                 `Breathe in (${count})` : `Breathe out (${count})`;
//         }
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(interval);
//         btn.textContent = 'Start Breathing';
//     }, 32000); // 4 cycles of breathing
// }

let breathingInterval = null; // Store the interval globally
let isBreathing = false; // Track whether breathing is active

function startBreathing() {
    const btn = document.querySelector('.tool-btn');
    let count = 4;

    if (isBreathing) return; // Prevent starting multiple intervals
    isBreathing = true;

    btn.textContent = `Breathe in (${count})`;

    breathingInterval = setInterval(() => {
        count--;
        if (count === 0) {
            count = 4;
            btn.textContent = btn.textContent.includes('in') ?
                `Breathe out (${count})` : `Breathe in (${count})`;
        } else {
            btn.textContent = btn.textContent.includes('in') ?
                `Breathe in (${count})` : `Breathe out (${count})`;
        }
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
        btn.textContent = 'Start Breathing';
    }, 32000); // 4 cycles of breathing
}

function stopBreathing() {
    const btn = document.querySelector('.tool-btn-sos');

    if (breathingInterval) {
        clearInterval(breathingInterval);
        breathingInterval = null;
    }

    isBreathing = false; // Allow restarting later
}

// Example usage: Bind the functions to buttons
document.querySelector('.tool-btn-sos').addEventListener('click', () => {
    const btn = document.querySelector('.tool-btn');
    if (isBreathing) {
        stopBreathing();
    }
    btn.textContent = 'Start Breathing';
});

// function stopBreathingh(){
//     const btn = document.querySelector('.tool-btn-sos');
//     setTimeout(() => {
//         clearInterval(interval);
//         btn.textContent = 'Start Breathing';
//     }, 32000); 
// }

// Daily Affirmations
const affirmations = [
    "I am capable of handling whatever comes my way today.",
    "I choose to be confident and self-assured.",
    "I am in charge of my own happiness.",
    "I release all anxiety and fear.",
    "I am worthy of love, respect, and happiness.",
    "Every day I'm getting stronger.",
    "I trust in my ability to make good decisions.",
    "I am calm and at peace.",
];

function newAffirmation() {
    const affirmationText = document.getElementById('affirmation');
    let newAffirmation;
    do {
        newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    } while (newAffirmation === affirmationText.textContent);

    affirmationText.textContent = newAffirmation;
}