//import '../node_modules/@fortawesome/fontawesome-free/js/all';

const togglenav = document.querySelector('nav');
const cancel = document.getElementById('cancel');
const home = document.getElementById('home');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// cancel icon
cancel.addEventListener('click', function () {
  home.style.display = 'flex';
  cancel.style.display = 'none';
  header.style.display = 'block';
  footer.style.display = 'none';
  document.getElementById('aboutMe').style.display = 'none';
  document.getElementById('portfolio').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('skills').style.display = 'none';
});

// nav feature

togglenav.addEventListener('click', function (e) {
  const cible = e.target;

  function display() {
    home.style.display = 'none';
    cancel.style.display = 'block';
    header.style.display = 'none';
    footer.style.display = 'flex';
  }

  if (cible.firstChild.nodeValue == 'À propos de moi') {
    document.getElementById('aboutMe').style.display = 'block';
    display();
  }
  if (cible.firstChild.nodeValue == 'Portfolio') {
    document.getElementById('portfolio').style.display = 'block';
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
