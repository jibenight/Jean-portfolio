// cancel icon
document.getElementById('cancel').addEventListener('click', function () {
  document.getElementById('home').style.display = 'flex';
  document.getElementById('cancel').style.display = 'none';
  document.querySelector('header').style.display = 'block';
  document.querySelector('footer').style.display = 'none';
  document.getElementById('aboutMe').style.display = 'none';
});

// nav feature
document.getElementById('nav-about').addEventListener('click', function () {
  document.getElementById('home').style.display = 'none';
  document.getElementById('cancel').style.display = 'block';
  document.querySelector('header').style.display = 'none';
  document.querySelector('footer').style.display = 'flex';
  document.getElementById('aboutMe').style.display = 'block';
});
