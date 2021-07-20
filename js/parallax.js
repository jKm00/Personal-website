const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const headerHeight = document.querySelector('header').scrollHeight;

const aboutStart = windowHeight;
const aboutHeight = document.querySelector('.about').scrollHeight;

const languagesStart = headerHeight + aboutHeight;

// Only add parallax effects to dektop version
let classAdded = false;
//if (windowWidth >= 870) {
    document.addEventListener('scroll', e => {
        const scroll = window.scrollY;
        //console.log(scroll);
        //console.log(languagesStart);

        if (scroll >= aboutStart) {
            const title = document.querySelector('.title--about');
            title.style.transform = `translateY(${(scroll - aboutStart) * 0.7}px)`;
        }

        if (scroll > (languagesStart - (windowHeight / 3)) && !classAdded) {
            fadeInCards();
            classAdded = true;
        }
    });
//}

function fadeInCards() {
    const cards = document.querySelectorAll('.language__card--outer');

    let delay = 0;
    cards.forEach(card => {
        card.style.animationDelay = `${delay}ms`;
        card.classList.add('fadeIn');
        delay += 200
    });
}

// TODO: Make sure parallax only works on dekstop