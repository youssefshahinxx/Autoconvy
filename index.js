
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const announcementBar = document.getElementById('announcement-bar');
const nav = document.querySelector('nav');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
let lastScrollTop = 0;

function updateNavVisibility() {
    if (window.innerWidth >= 768) {
        // On large screens, ensure nav-links is visible (md:flex handles it)
        navLinks.classList.remove('hidden');
        navLinks.classList.remove('nav-open');
    } else {
        // On small screens, hide by default unless open
        if (!navLinks.classList.contains('nav-open')) {
            navLinks.classList.add('hidden');
        }
    }
}

// function updateScrollBehavior() {
//     if (announcementBar) {
//         announcementBar.classList.remove('hide-announcement');
//     }
//     if (nav) {
//         nav.classList.remove('announcement-hidden');
//     }

//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//         if (announcementBar) {
//             announcementBar.classList.add('hide-announcement');
//         }
//         if (nav) {
//             nav.classList.add('announcement-hidden');
//         }
//     }

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
// }

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.contains('nav-open');
        if (isOpen) {
            navLinks.classList.remove('nav-open');
        } else {
            navLinks.classList.remove('hidden');
            navLinks.classList.add('nav-open');
        }
        navToggle.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
}

window.addEventListener('scroll', updateScrollBehavior);
window.addEventListener('resize', () => {
    updateScrollBehavior();
    updateNavVisibility();
});

updateNavVisibility();
updateScrollBehavior();

