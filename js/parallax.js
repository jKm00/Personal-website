const header = document.querySelector('header');
const about = document.querySelector('.about');
const languages = document.querySelector('.language');

// Heights of different elements in the website
// Used to calculate the offsets of the parallax effect on elements
// far down the site
let windowHeight = getWindowHeight();
let windowWidth = getWindowWidth();
let headerHeight = header.offsetHeight;
let aboutHeight = about.offsetHeight;
let languagesHeight = languages.offsetHeight;

// Get height of elements when site is resized
window.addEventListener('resize', e => {
    windowHeight = getWindowHeight();
    windowWidth = getWindowWidth();
    headerHeight = header.offsetHeight;
    aboutHeight = about.offsetHeight;
    languagesHeight = languages.offsetHeight;

    // If site is too small, remove parallax
    if (windowWidth <= 870 || windowHeight <= 650) {
        resetParallax(headerContent);
        headerCubes.forEach(e => {
            resetParallax(e);
        });
        resetParallax(aboutTitle);
        resetParallax(workflowTitle);
    }
});

// Elements to add parallax effect on
const headerContent = document.querySelector('.header__content');
const headerCubes = document.querySelectorAll('.header__cube');
const aboutTitle = document.querySelector('.title--about');
const workflowTitle = document.querySelector('.title--workflow');

document.addEventListener('scroll', e => {
    // Only add parallax if site is big enough
    if (windowWidth > 870 && windowHeight > 650) {

        const currentScroll = scrollY;
        addParallax(headerContent, currentScroll, .2, 0);
        
        headerCubes.forEach(e => {
            addParallax(e, currentScroll, -0.3, 0)
        });
        
        addParallax(aboutTitle, currentScroll, .3, 0);
        addParallax(workflowTitle, currentScroll, 0.4, aboutHeight + languagesHeight);
    }
});


/**
 * Returns the height of the window
 * 
 * @returns height of the window
 */
 function getWindowHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

/**
 *Returns the width of the window
 * 
 * @returns width of the window
 */
function getWindowWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

/**
 * Adds parallax to the elements given in parameter
 * 
 * @param {*} element the element to give parallax effect on
 * @param {*} scroll the current scroll of the website
 * @param {*} multiplier multiplies the scroll to make it go faster or slower than the
 * actuall scroll speed
 * @param {*} offset the offset of the element. If the element is far down on the site you
 * might want to offset the scroll to make it start at the top of the element
 */
function addParallax(element, scroll, multiplier, offset) {
    element.style.transform = 'translateY(' + (scroll - offset) * multiplier + 'px)';
}

/**
 * Resets the parallax effect of the element given as parameter
 * 
 * @param {*} element to reset the parallax effect off
 */
function resetParallax(element) {
    element.style.transform = 'translateY(0)';
}