document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    //OFFSET SCROLL WITH NAVBAR HEIGHT
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

//NAVBAR BRAND SCROLL BACK TO TOP
document.querySelector('.navbar-brand').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//OWL CAROUSEL
$(document).ready(function () {
  const owlCarousel = $(".owl-carousel");

  owlCarousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $(".left-btn").click(function () {
    owlCarousel.trigger('prev.owl.carousel');
  });

  $(".right-btn").click(function () {
    owlCarousel.trigger('next.owl.carousel');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  function setupHoverForGroup(buttonGroupSelector) {
    const buttons = document.querySelectorAll(`${buttonGroupSelector} .btn-skills`);

    //STORE ORIGINAL TXT
    buttons.forEach((button) => {
      button.setAttribute('data-original-text', button.textContent);
    });

    //HOVER EVENT LISTENER
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', function () {
        const hoverText = this.getAttribute('data-hover');
        if (hoverText) {
          buttons.forEach((btn) => {
            if (btn !== this) {
              const hoverItems = hoverText.split(', ');
              const btnIndex = Array.from(buttons).indexOf(btn);
              const newText = hoverItems[btnIndex - 1];

              if (newText) {
                btn.textContent = newText.trim();
                btn.classList.remove('hidden');
              } else {
                btn.classList.add('hidden');
              }
            }
          });
        }
      });

      button.addEventListener('mouseleave', function () {
        // RESET BTNS
        buttons.forEach((btn) => {
          btn.textContent = btn.getAttribute('data-original-text');
          btn.classList.remove('hidden');
        });
      });
    });
  }
  setupHoverForGroup('#skills-buttons');

  // Set up hover functionality for soft skills (if needed)
  setupHoverForGroup('#soft-skills-buttons');
});
