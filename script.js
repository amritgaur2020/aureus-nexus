// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Mobile menu toggle
const toggle = document.querySelector('.toggle');
const menu  = document.querySelector('.menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Mock contact form submission
function submitForm(e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Sending…';
  setTimeout(() => {
    status.textContent = 'Thank you! Your message has been sent.';
    e.target.reset();
  }, 1000);
}
