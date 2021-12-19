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
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
// cancel icon
cancel.addEventListener('click', function () {
  home.style.display = 'flex';
  cancel.style.display = 'none';
  header.style.display = 'block';
  footer.style.display = 'none';
  chevron.style.transform = 'rotate(0deg)';

  //à propos de moi
  if (cancel.classList.contains('cancel-aboutMe')) {
    aboutMe.classList.remove('animate__slideInDown');
    aboutMe.classList.add('animate__slideOutUp');
    aboutMe.classList.add('animate__faster');
    setTimeout(function () {
      aboutMe.style.display = 'none';
      home.classList.remove('animate__slideInUp');
      cancel.classList.remove('cancel-aboutMe');
      aboutMe.classList.remove('animate__slideOutUp');
      aboutMe.classList.remove('animate__faster');
    }, 1000);
  }

  // portfolio
  if (cancel.classList.contains('cancel-portfolio')) {
    portfolio.classList.remove('animate__slideInLeft');
    portfolio.classList.add('animate__backOutLeft');
    setTimeout(function () {
      portfolio.style.display = 'none';
      home.classList.remove('animate__slideInRight');
      cancel.classList.remove('cancel-portfolio');
      portfolio.classList.remove('animate__backOutLeft');
    }, 1000);
  }

  // contact
  if (cancel.classList.contains('cancel-contact')) {
    contact.classList.remove('animate__slideInRight');
    //contact.classList.add('animate__faster');
    contact.classList.add('animate__slideOutRight');
    setTimeout(function () {
      contact.style.display = 'none';
      home.classList.remove('animate__slideInLeft');
      cancel.classList.remove('cancel-contact');
      contact.classList.remove('animate__slideOutRight');
      contact.classList.remove('animate__faster');
    }, 1000);
  }

  document.getElementById('skills').style.display = 'none';
});

// nav feature

togglenav.addEventListener('click', function (e) {
  e.defaultPrevented;
  const cible = e.target;

  home.style.display = 'none';
  cancel.style.display = 'block';
  header.style.display = 'none';
  footer.style.display = 'flex';
  home.classList.remove('animate__fadeIn');

  if (cible.firstChild.nodeValue == 'À propos de moi') {
    cancel.classList.add('cancel-aboutMe');
    chevron.style.transform = 'rotate(270deg)';
    aboutMe.style.display = 'block';
    aboutMe.classList.add('animate__slideInDown');
    home.classList.add('animate__slideInUp');
  }
  if (cible.firstChild.nodeValue == 'Portfolio') {
    cancel.classList.add('cancel-portfolio');
    chevron.style.transform = 'rotate(180deg)';
    portfolio.style.display = 'block';
    portfolio.classList.add('animate__slideInLeft');
    home.classList.add('animate__slideInRight');
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
