document.getElementById('mobile-menu').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! We will get back to you shortly.');
});
