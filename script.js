// Smooth scroll and nav highlighter
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Simple form handler
function submitForm(e){
  e.preventDefault();
  document.getElementById("form-status").textContent = "Message sent! We'll get back shortly.";
  setTimeout(() => document.getElementById("form-status").textContent = "", 4000);
  e.target.reset();
  return false;
}

