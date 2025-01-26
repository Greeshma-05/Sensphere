// Select the Meditation link
const meditationLink = document.getElementById('meditation-link');

// Add a click event listener
meditationLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  window.location.href = 'meditation.html'; // Redirect to the new page
});
