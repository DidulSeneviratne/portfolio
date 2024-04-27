/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const zoomImage = document.getElementById('zoom_img');
const zoomButton = document.getElementById('zoom_div');
const zoomImage1 = document.getElementById('zoom_img1');
const zoomButton1 = document.getElementById('zoom_div1');
const zoomImage2 = document.getElementById('zoom_img2');
const zoomButton2 = document.getElementById('zoom_div2');
const zoomImage3 = document.getElementById('zoom_img3');
const zoomButton3 = document.getElementById('zoom_div3');
const zoomImage4 = document.getElementById('zoom_img4');
const zoomButton4 = document.getElementById('zoom_div4');
const zoomImage5 = document.getElementById('zoom_img5');
const zoomButton5 = document.getElementById('zoom_div5');

zoomButton.addEventListener('mouseover', () => {
    zoomImage.style.transform = 'scale(1.1)'; // Zoom in by 20%
    zoomButton.style.transform = 'scale(1.2)';
});

zoomButton.addEventListener('mouseout', () => {
    zoomImage.style.transform = 'scale(1.0)';
    zoomButton.style.transform = 'scale(1.1)'; // Reset zoom to normal size
});

zoomButton1.addEventListener('mouseover', () => {
    zoomImage1.style.transform = 'scale(1.1)'; // Zoom in by 20%
    zoomButton1.style.transform = 'scale(1.2)';
});

zoomButton1.addEventListener('mouseout', () => {
    zoomImage1.style.transform = 'scale(1.0)';
    zoomButton1.style.transform = 'scale(1.1)'; // Reset zoom to normal size
});

zoomButton2.addEventListener('mouseover', () => {
    zoomImage2.style.transform = 'scale(1.1)'; // Zoom in by 20%
    zoomButton2.style.transform = 'scale(1.2)';
});

zoomButton2.addEventListener('mouseout', () => {
    zoomImage2.style.transform = 'scale(1.0)';
    zoomButton2.style.transform = 'scale(1.1)'; // Reset zoom to normal size
});

zoomButton3.addEventListener('mouseover', () => {
    zoomImage3.style.transform = 'scale(1.1)'; // Zoom in by 20%
    zoomButton3.style.transform = 'scale(1.2)';
});

zoomButton3.addEventListener('mouseout', () => {
    zoomImage3.style.transform = 'scale(1.0)';
    zoomButton3.style.transform = 'scale(1.1)'; // Reset zoom to normal size
});

zoomButton4.addEventListener('mouseover', () => {
    zoomImage4.style.transform = 'scale(1.1)'; // Zoom in by 20%
    zoomButton4.style.transform = 'scale(1.2)';
});

zoomButton4.addEventListener('mouseout', () => {
    zoomImage4.style.transform = 'scale(1.0)';
    zoomButton4.style.transform = 'scale(1.1)'; // Reset zoom to normal size
});

zoomButton5.addEventListener('mouseover', () => {
    zoomImage5.style.transform = 'scale(1.1)'; // Zoom in by 20%
    zoomButton5.style.transform = 'scale(1.2)';
});

zoomButton5.addEventListener('mouseout', () => {
    zoomImage5.style.transform = 'scale(1.0)';
    zoomButton5.style.transform = 'scale(1.1)'; // Reset zoom to normal size
});

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 
