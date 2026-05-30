// ===== NAVIGATION ACTIVE STATE =====
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation || 
            currentLocation.includes(link.getAttribute('href').replace('.html', ''))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ===== RESPONSIVE MENU HANDLER =====
window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 768 && navLinks) {
        navLinks.style.display = 'flex';
    }
});

// ===== SMOOTH SCROLL PENTRU ANCORE INTERNE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ===== LAZY LOAD IMAGES (PERFORMANȚĂ PENTRU CLOUDFLARE) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== CONSOLE LOG CLEAN INFO =====
console.log('%c🚀 Service PC Laptop - Bucuresti', 'color: #0066cc; font-size: 16px; font-weight: bold;');
console.log('%cMentenanta avansata, curatare hardware si asamblari PC custom.', 'color: #666; font-size: 12px;');
