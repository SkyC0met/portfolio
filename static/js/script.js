document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Adjust the scroll position with an offset
    window.scrollTo({
      top: targetElement.offsetTop - 80, // 80px is the height of the navbar
      behavior: 'smooth'
    });
  });
});

// Ensure the navbar brand scrolls back to the top
document.querySelector('.navbar-brand').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});