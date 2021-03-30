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
// document.getElementById('nav-about').addEventListener('click', function () {
//   home.style.display = 'none';
//   cancel.style.display = 'block';
//   header.style.display = 'none';
//   footer.style.display = 'flex';
//   document.getElementById('aboutMe').style.display = 'block';
// });

function changeNav() {
  const aboutMe = document.getElementById('aboutMe');

  if (aboutMe.firstChild.nodeValue == 'À propos de moi') {
    console.log('ça marche');
  }
  console.log('ça marche');
}

const el = document.querySelector('nav');
el.addEventListener('click', function (e) {
  console.log(e.target);
});
