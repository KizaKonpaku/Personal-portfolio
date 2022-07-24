/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.portfolio-container', {
    selectors: {
        target: '.portfolio-card'
    },
    animation: {
        duration: 300
    }
});

/* Link active portfolio */ 

const linkPortfolio = document.querySelectorAll('.portfolio-item');

function activePortfolio(){
    linkPortfolio.forEach(l=> l.classList.remove('active-portfolio'))
    this.classList.add('active-portfolio')
};

linkPortfolio.forEach(l=> l.addEventListener('click', activePortfolio));


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight =current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id') 

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        };
    })
}

window.addEventListener('scroll', scrollActive);