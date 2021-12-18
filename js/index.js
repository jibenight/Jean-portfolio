//import '../node_modules/@fortawesome/fontawesome-free/js/all';

const togglenav = document.querySelector('nav');
const cancel = document.getElementById('cancel');
const chevron = document.getElementById('chevron');
const home = document.getElementById('home');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// cancel icon
cancel.addEventListener('click', function () {
  home.style.display = 'flex';
  cancel.style.display = 'none';
  header.style.display = 'block';
  footer.style.display = 'none';

  //à propos de moi
  document.getElementById('aboutMe').classList.remove('animate__slideInDown');
  document.getElementById('aboutMe').classList.add('animate__slideOutUp');
  setTimeout(function () {
    document.getElementById('aboutMe').style.display = 'none';
  }, 1000);

  // portfolio
  document
    .getElementById('portfolio')
    .classList.remove('animate__slideIntLeft');
  document.getElementById('portfolio').classList.add('animate__slideOutLeft');
  setTimeout(function () {
    document.getElementById('portfolio').style.display = 'none';
  }, 1000);
  document.getElementById('contact').style.display = 'none';
  document.getElementById('skills').style.display = 'none';
});

// nav feature

togglenav.addEventListener('click', function (e) {
  e.defaultPrevented;
  const cible = e.target;

  function display() {
    home.style.display = 'none';
    cancel.style.display = 'block';
    header.style.display = 'none';
    footer.style.display = 'flex';
  }

  if (cible.firstChild.nodeValue == 'À propos de moi') {
    const aboutMe = document.getElementById('aboutMe');
    chevron.style.transform = 'rotate(270deg)';
    aboutMe.style.display = 'block';
    aboutMe.classList.remove('animate__slideOutUp');
    aboutMe.classList.add('animate__slideInDown');
    display();
  }
  if (cible.firstChild.nodeValue == 'Portfolio') {
    const element = document.getElementById('portfolio');
    cancel.style.display = 'block';
    chevron.style.transform = 'rotate(180deg)';
    element.style.display = 'block';
    element.classList.remove('animate__slideOutLeft');
    element.classList.add('animate__slideInLeft');
    display();
  }
  if (cible.firstChild.nodeValue == 'Contact') {
    document.getElementById('contact').style.display = 'block';
    display();
  }
  if (cible.firstChild.nodeValue == 'Mes compétences') {
    document.getElementById('skills').style.display = 'block';
    display();
  }
});
