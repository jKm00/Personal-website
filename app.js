const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('.nav__link');

// Toggle menu when hamburger icon is clicked
hamburger.addEventListener('click', e => {
    toggleNav();
})

// Hide menu when a link in the menu is clicked
menuLinks.forEach(e => {
    e.addEventListener('click', e => {
        if (getViewPortWidth() < 1300) {
            toggleNav();
        }
    });
});

/**
 * Toggles the menu of the website
 */
function toggleNav() {
    hamburger.classList.toggle('hamburger-open');
    const menu = document.querySelector('.nav__list');
    if (hamburger.classList.contains('hamburger-open')) {
        menu.style.transform = 'translateX(0)';
    } else {
        menu.style.transform = 'translateX(100%)';
    }
}

/**
 * Returns the width of the viewport
 * 
 * @return the width of the viewport
 */
function getViewPortWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
}