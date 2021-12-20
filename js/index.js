//import '../node_modules/@fortawesome/fontawesome-free/js/all';
//import 'animate.css';

const togglenav = document.querySelector('nav');
const cancel = document.getElementById('cancel');
const chevron = document.getElementById('chevron');
const home = document.getElementById('home');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
//4 Zones
const aboutMe = document.getElementById('aboutMe');
const entete = document.getElementById('entete');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');

// add and clean display animation
const animateCSS = (
  animationIn,
  nameIn,
  animationOut,
  nameOut,
  home,
  prefix = 'animate__'
) =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    //for animation in
    const animationNameIn = `${prefix}${nameIn}`;
    const nodeIn = document.querySelector(animationIn);
    nodeIn.classList.add(`${prefix}animated`, animationNameIn);
    //for animation Out
    const animationNameOut = `${prefix}${nameOut}`;
    const nodeOut = document.querySelector(animationOut);
    nodeOut.classList.add(`${prefix}animated`, animationNameOut);
    home.style.display = 'none';
    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      nodeIn.classList.remove(`${prefix}animated`, animationNameIn);
      nodeOut.classList.remove(`${prefix}animated`, animationNameOut);
      resolve('Animation ended');
    }

    nodeIn.addEventListener('animationend', handleAnimationEnd, { once: true });
    nodeOut.addEventListener('animationend', handleAnimationEnd, {
      once: true,
    });
  });

// cancel icon
cancel.addEventListener('click', function () {
  home.style.display = 'flex';
  cancel.style.display = 'none';
  header.style.display = 'block';
  footer.style.display = 'none';
  chevron.style.transform = 'rotate(0deg)';

  //à propos de moi
  if (cancel.classList.contains('cancel-aboutMe')) {
    animateCSS('#entete', 'slideOutUp', '#home', 'slideInUp').then(
      (aboutMe.style.display = 'none'),
      cancel.classList.remove('cancel-aboutMe')
    );
  }
  // portfolio
  if (cancel.classList.contains('cancel-portfolio')) {
    animateCSS('#portfolio', 'slideOutLeft', '#home', 'slideInRight').then(
      (portfolio.style.display = 'none'),
      cancel.classList.remove('cancel-portfolio')
    );
  }

  // contact
  if (cancel.classList.contains('cancel-contact')) {
    contact.classList.remove('animate__slideInRight');
    //contact.classList.add('animate__faster');
    contact.classList.add('animate__slideOutRight1');
    setTimeout(function () {
      contact.style.display = 'none';
      home.classList.remove('animate__slideInLeft');
      cancel.classList.remove('cancel-contact');
      contact.classList.remove('animate__slideOutRight1');
      //contact.classList.remove('animate__faster');
    }, 1000);
  }

  document.getElementById('skills').style.display = 'none';
});

// Animation in display
togglenav.addEventListener('click', function (e) {
  e.defaultPrevented;
  const cible = e.target;
  cancel.style.display = 'block';
  header.style.display = 'none';
  footer.style.display = 'flex';
  //home.classList.remove('animate__fadeIn');

  if (cible.firstChild.nodeValue == 'À propos de moi') {
    cancel.classList.add('cancel-aboutMe');
    chevron.style.transform = 'rotate(270deg)';
    aboutMe.style.display = 'block';
    animateCSS('#entete', 'slideInDown', '#home', 'slideOutDown', 'home');
  }
  if (cible.firstChild.nodeValue == 'Portfolio') {
    cancel.classList.add('cancel-portfolio');
    chevron.style.transform = 'rotate(180deg)';
    portfolio.style.display = 'block';
    animateCSS('#portfolio', 'slideInLeft', '#home', 'slideOutRight').then(
      (home.style.display = 'none')
    );
  }
  if (cible.firstChild.nodeValue == 'Contact') {
    cancel.classList.add('cancel-contact');
    contact.style.display = 'block';
    contact.classList.add('animate__slideInRight');
    home.classList.add('animate__slideInLeft');
  }
  if (cible.firstChild.nodeValue == 'Mes compétences') {
    document.getElementById('skills').style.display = 'block';
  }
});
