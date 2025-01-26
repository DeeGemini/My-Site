// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Highlight active menu link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu ul li a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const nav = document.querySelector('.nav');
const menuToggle = document.createElement('button');
menuToggle.textContent = 'Menu';
menuToggle.className = 'menu-toggle';

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

document.querySelector('.header .container').prepend(menuToggle);

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
        }
    });
});

// Resume download functionality
const resumeLink = document.querySelector('.resume-link');
resumeLink?.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'assets/Nontuthuzelo Ngwenya Resume.pdf';
    link.download = 'Nontuthuzelo Ngwenya Resume.pdf';
    link.click();
});

