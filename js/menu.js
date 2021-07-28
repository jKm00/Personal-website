const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('.nav__link');
const menu = document.querySelector('.nav__list');

/**
 * Toggle menu when hamburger icon is clicked
 */
hamburger.addEventListener('click', e => {
    toggleNav();
})

/**
 * Hide menu when a link in the menu is clicked.
 * Only hides the menu when in mobile view.
 * (Viewport is less than 1300px width)
 */
menuLinks.forEach(e => {
    e.addEventListener('click', e => {
        if (getViewPortWidth() < 870) {
            toggleNav();
        }
    });
});

/**
 * Toggles the menu of the website
 */
function toggleNav() {
    hamburger.classList.toggle('hamburger-open');
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
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

// Make sure the menu is not translated when site changes from
// hamburger size to default size
window.addEventListener('resize', e => {
    const windowWidth = getViewPortWidth();
    if (windowWidth >= 870) {
        menu.style.transform = 'translateX(0)';
    } else {
        menu.style.transform = 'translateX(100%)';
    }
});