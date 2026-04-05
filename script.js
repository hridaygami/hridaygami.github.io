// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
    });
});

// Scroll-triggered fade-in animations
const observerOptions = { threshold: 0.15 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Apply fade-in to section content
document.querySelectorAll(
    '.about-content, .skill-card, .project-card, .contact-card, .section-title'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Stagger animation delays for grid items
document.querySelectorAll('.skills-grid .skill-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
});

document.querySelectorAll('.projects-grid .project-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
});

document.querySelectorAll('.contact-links .contact-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
});

// Navbar background change on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.97)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    }
});
