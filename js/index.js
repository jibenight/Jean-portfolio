//import '../node_modules/@fortawesome/fontawesome-free/js/all';
//import 'animate.css';

const togglenav = document.querySelector('nav');
const arrow = document.getElementById('arrow-down');
const cancel = document.getElementById('cancel');
const chevron = document.getElementById('chevron');
const home = document.getElementById('home');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const timeout = 1000;
//4 Zones
const aboutMe = document.getElementById('aboutMe');
const entete = document.getElementById('entete');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
const skills = document.getElementById('skills');

// add and clean display animation
const animateCSS = (
  animationIn,
  nameIn,
  animationOut,
  nameOut,
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
  chevron.classList.remove('fade-in-image');
  arrow.style.display = 'none';
  arrow.style.visibility = 'visible';
  arrow.classList.remove('animate__animated', 'animate__fadeOut');

  const startTop = params => {
    const top = params.offsetTop;
    window.scrollTo(0, top);
  };

  //à propos de moi
  if (cancel.classList.contains('cancel-aboutMe')) {
    startTop(aboutMe);
    animateCSS('#entete', 'slideOutUp', '#home', 'slideInUp').then(
      setTimeout(() => {
        (aboutMe.style.display = 'none'),
          cancel.classList.remove('cancel-aboutMe');
      }, timeout)
    );
  }
  // portfolio
  if (cancel.classList.contains('cancel-portfolio')) {
    startTop(portfolio);
    animateCSS('#portfolio', 'slideOutLeft', '#home', 'slideInRight').then(
      setTimeout(() => {
        (portfolio.style.display = 'none'),
          cancel.classList.remove('cancel-portfolio');
      }, timeout)
    );
  }

  // contact
  if (cancel.classList.contains('cancel-contact')) {
    startTop(contact);
    animateCSS('#contact', 'slideOutRight', '#home', 'slideInLeft').then(
      setTimeout(() => {
        (contact.style.display = 'none'),
          cancel.classList.remove('cancel-contact');
      }, timeout)
    );
  }

  // skills
  if (cancel.classList.contains('cancel-skills')) {
    document.getElementById('skills-techno').style.display = 'none';
    startTop(skills);
    animateCSS('#skills', 'slideOutDown', '#home', 'slideInDown').then(
      setTimeout(() => {
        (skills.style.display = 'none'),
          cancel.classList.remove('cancel-skills');
      }, timeout)
    );
  }
});

// Animation in display
togglenav.addEventListener('click', function (e) {
  e.defaultPrevented;
  const cible = e.target;
  header.style.display = 'none';
  footer.style.display = 'flex';
  setTimeout(() => {
    cancel.style.display = 'block';
    chevron.classList.add('fade-in-image');
  }, timeout);

  // show arrow for content
  const showArrow = () => {
    setTimeout(() => {
      arrow.style.display = 'block';
      animateCSS('#arrow-animation', 'shakeY');
    }, timeout);
    document.onscroll = () => {
      animateCSS('#arrow-down', 'fadeOut');
    };
  };

  if (cible.firstChild.nodeValue == 'À propos de moi') {
    cancel.classList.add('cancel-aboutMe');
    chevron.style.transform = 'rotate(270deg)';
    //chevron.classlist.add('fade-in-image');
    aboutMe.style.display = 'block';
    showArrow();
    animateCSS('#entete', 'slideInDown', '#home', 'slideOutDown').then(
      setTimeout(() => {
        home.style.display = 'none';
      }, timeout)
    );
  }
  if (cible.firstChild.nodeValue == 'Portfolio') {
    cancel.classList.add('cancel-portfolio');
    chevron.style.transform = 'rotate(180deg)';
    portfolio.style.display = 'block';
    animateCSS('#portfolio', 'slideInLeft', '#home', 'slideOutRight').then(
      setTimeout(() => {
        home.style.display = 'none';
      }, timeout)
    );
  }
  if (cible.firstChild.nodeValue == 'Contact') {
    cancel.classList.add('cancel-contact');
    contact.style.display = 'block';
    animateCSS('#contact', 'slideInRight', '#home', 'slideOutLeft').then(
      setTimeout(() => {
        home.style.display = 'none';
      }, timeout)
    );
    showArrow();
  }
  if (cible.firstChild.nodeValue == 'Mes compétences') {
    skills.style.display = 'block';
    cancel.classList.add('cancel-skills');
    chevron.style.transform = 'rotate(90deg)';
    animateCSS('#skills', 'slideInUp', '#home', 'slideOutUp').then(
      setTimeout(() => {
        home.style.display = 'none';
        document.getElementById('skills-techno').style.display = 'block';
      }, timeout)
    );
    showArrow();
  }
});
