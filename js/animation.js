// Elements for header. Used for creating on load animation
const title = document.querySelector('.header__title');
const text = document.querySelector('.header__text');
const learnMore = document.querySelector('.learn-more--btn');
const visitSocials = document.querySelector('.socials--btn');

// Elements for animation when scrolling
const languageCards = document.querySelectorAll('.language__card--outer');
const portfolioCards = document.querySelectorAll('.portfolio__card');

/**
 * Creates animation when page loads
 */
document.addEventListener('DOMContentLoaded', e => {
    // Hide elements that are gonna be animated in when scrolled to them
    languageCards.forEach(e => {e.style.opacity = 0});
    portfolioCards.forEach(e => {e.style.opacity = 0});

    // Add animation class to header elements
    title.classList.add('fade-in');
    text.classList.add('fade-in');
    learnMore.classList.add('fade-in');
    visitSocials.classList.add('fade-in');

    // Add delay so elements fade in one after another
    text.style.animationDelay = '200ms';
    learnMore.style.animationDelay = '400ms';
    visitSocials.style.animationDelay = '600ms';
})

// Keep track of whats been animated
let languagesAnimated = false;
let portfolioAnimated = false;
// When different sections start
const languagesStart = getViewPortHeight() * 1.5;
const portfolioStart = getViewPortHeight() * 3.5;

/**
 * Creates animation when scrolled to a section of the page
 */
window.addEventListener('scroll', e => {
    const currentScroll = scrollY;

    if (currentScroll >= languagesStart && !languagesAnimated) {
        languagesAnimated = animateCards(languageCards);
    } else if (currentScroll >= portfolioStart && !portfolioAnimated) {
        portfolioAnimated = animateCards(portfolioCards);
    }
})

/**
 * Returns the width of the viewport
 * 
 * @return the width of the viewport
 */
 function getViewPortHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

/**
 * Animate the cards entered as parameter to fade in on after another
 * 
 * @param cards the cards to be animated
 * @returns {@code true} if the cards where animated and {@code false} if not
 */
function animateCards(cards) {
    animated = false;

    let index = 0;
    cards.forEach(e => {
        e.classList.add('fade-in--fast');
        const delay = 200 * index;
        e.style.animationDelay = delay + 'ms';
        index++;
    })

    animated = true;

    return animated;
}