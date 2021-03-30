let cancel = document.getElementById('cancel');
let home = document.getElementById('home');
let header = document.querySelector('header');
let footer = document.querySelector('footer');

// cancel icon
cancel.addEventListener('click', function () {
  home.style.display = 'flex';
  cancel.style.display = 'none';
  header.style.display = 'block';
  footer.style.display = 'none';
  document.getElementById('aboutMe').style.display = 'none';
});

// nav feature
const el = document.querySelector('nav');
el.addEventListener('click', function (e) {
  const cible = e.target;
  home.style.display = 'none';
  cancel.style.display = 'block';
  header.style.display = 'none';
  footer.style.display = 'flex';
  if (cible.firstChild.nodeValue == 'À propos de moi') {
    const clickNav = document.getElementById('aboutMe');
    clickNav.style.display = 'block';
  } else if (cible.firstChild.nodeValue == 'Portfolio') {
    document.getElementById('portfolio').style.display = 'block';
  } else if (cible.firstChild.nodeValue == 'Contact') {
    document.getElementById('contact').style.display = 'block';
  } else {
    console.log('alert');
  }
});
