// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll(
        '.section-header, .about-content, .timeline-item, .skill-category, .portfolio-item, .swot-item, .contact-item'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Animate progress bar
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        const progressObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = progressBar.getAttribute('data-progress');
                    progressBar.style.width = progress + '%';
                }
            });
        }, observerOptions);
        
        progressObserver.observe(progressBar);
    }
});

// Add hover effects for interactive elements
document.querySelectorAll('.portfolio-item, .skill-category, .swot-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Dynamic typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Preloader (optional)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

// Form validation and submission (if you add a contact form later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Fonction pour afficher le détail d'un projet
function afficherDetailProjet(projetId) {
    // Masquer la section projets
    document.getElementById('projets').style.display = 'none';
    
    // Afficher la section détail correspondante
    document.getElementById(projetId).style.display = 'block';
    
    // Scroll vers le haut
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Fonction pour retourner à la liste des projets
function retourProjets() {
    // Masquer toutes les sections de détail
    const detailSections = document.querySelectorAll('.projet-detail');
    detailSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Réafficher la section projets
    document.getElementById('projets').style.display = 'block';
    
    // Scroll vers la section projets
    document.getElementById('projets').scrollIntoView({
        behavior: 'smooth'
    });
}

// Fonction pour gérer les liens du menu principal vers les projets
function scrollToProjects() {
    // S'assurer que la section projets est visible
    document.getElementById('projets').style.display = 'block';
    
    // Masquer toutes les sections de détail
    const detailSections = document.querySelectorAll('.projet-detail');
    detailSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Scroll vers la section projets
    document.getElementById('projets').scrollIntoView({
        behavior: 'smooth'
    });
}

// Animation des éléments au scroll pour la page de détail
const observerDetailOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observerDetail = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerDetailOptions);

// Observer les éléments de la page de détail
function observeDetailElements() {
    const elementsToAnimate = document.querySelectorAll(
        '.objectif-item, .defi-hardware, .defi-software, .tech-category, .resultat-item, .competence-category, .perspective-item'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observerDetail.observe(el);
    });
}

// Initialiser l'observation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    observeDetailElements();
});

// Effet de parallaxe léger pour les images
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.comparison-img, .schema-placeholder');
    
    parallaxElements.forEach(element => {
        const speed = scrolled * 0.02;
        element.style.transform = `translateY(${speed}px)`;
    });
});

// Animation des métriques avec compteur
function animateMetrics() {
    const metrics = document.querySelectorAll('.metric-value');
    
    metrics.forEach(metric => {
        const target = metric.textContent;
        const isPercentage = target.includes('%');
        const numericTarget = parseInt(target.replace(/[^\d]/g, ''));
        
        if (!isNaN(numericTarget)) {
            let current = 0;
            const increment = numericTarget / 50; // Animation sur 50 frames
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= numericTarget) {
                    current = numericTarget;
                    clearInterval(counter);
                }
                
                metric.textContent = Math.floor(current) + (isPercentage ? '%' : '');
            }, 30);
        }
    });
}

// Observer pour déclencher l'animation des métriques
const metricsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateMetrics();
            metricsObserver.unobserve(entry.target);
        }
    });
}, observerDetailOptions);

// Observer la section des résultats
document.addEventListener('DOMContentLoaded', function() {
    const resultatsSection = document.querySelector('.resultats-section');
    if (resultatsSection) {
        metricsObserver.observe(resultatsSection);
    }
});