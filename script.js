const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Function to update the slider position
function updateSlider() {
    const width = images[0].clientWidth;
    slider.style.transform = `translateX(${-currentIndex * width}px)`;
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});

// Automatically resize slider on window resize
window.addEventListener('resize', updateSlider);

document.getElementById('submitButton').addEventListener('click', function() {
    window.location.href = 'admission.html';  // Redirect to another page
});
document.addEventListener("DOMContentLoaded", () => {
    // No changes needed for dropdown JS
});
