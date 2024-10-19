"use strict";

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Show slide in normal slider
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Next and previous slide functionality
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

// Lightbox functionality
document.querySelectorAll('.slide img').forEach((img, index) => {
    img.addEventListener('click', () => {
        openLightbox(index);
    });
});

function openLightbox(index) {
    // Prevent lightbox from opening on screens smaller than 768px
    if (window.innerWidth > 768) {
        currentSlide = index;
        lightbox.style.display = 'block';  // Show the lightbox
        showSlideLightbox(currentSlide);
    }
}

function closeLightbox() {
    lightbox.style.display = 'none';  // Hide the lightbox
}

function showSlideLightbox(index) {
    const imgSrc = slides[index].querySelector('img').src;
    lightboxImg.src = imgSrc;
}

function nextSlideLightbox() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlideLightbox(currentSlide);
}

function prevSlideLightbox() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlideLightbox(currentSlide);
}

// Close lightbox on outside click (optional)
lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Toggle function for Hamburger menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active'); // Toggles the "active" class showing/hiding the menu
    hamburger.classList.toggle('active'); // Toggles the "active" class changing the hamburger icon
}

// Event listener for Hamburger menu
document.querySelector('.hamburger').addEventListener('click', toggleMenu);