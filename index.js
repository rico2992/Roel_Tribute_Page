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

// Toggle function for Hamburger menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active'); // Toggles the "active" class showing/hiding the menu
    hamburger.classList.toggle('active'); // Toggles the "active" class changing the hamburger icon
}

// Event listener for Hamburger menu
document.querySelector('.hamburger').addEventListener('click', toggleMenu);