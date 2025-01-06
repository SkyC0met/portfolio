document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    //  OFFSET SCROLL WITH NAVBAR HEIGHT
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

//  NAVBAR BRAND SCROLL BACK TO TOP
document.querySelector('.navbar-brand').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//  OWL CAROUSEL
$(document).ready(function () {
  //  PROJ CAROU
  const projsCarousel = $(".projs-carousel");
  projsCarousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $(".left-btn-projs").click(function () {
    projsCarousel.trigger("prev.owl.carousel");
  });
  $(".right-btn-projs").click(function () {
    projsCarousel.trigger("next.owl.carousel");
  });

  //  CERTS CAROU
  const certsCarousel = $(".certs-carousel");
  certsCarousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $(".left-btn-certs").click(function () {
    certsCarousel.trigger("prev.owl.carousel");
  });
  $(".right-btn-certs").click(function () {
    certsCarousel.trigger("next.owl.carousel");
  });

  //  LOCKBOX CAROU
  const lockboxCarousel = $(".lockbox-carousel");
  lockboxCarousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $(".left-btn-lockbox").click(function () {
    lockboxCarousel.trigger("prev.owl.carousel");
  });
  $(".right-btn-lockbox").click(function () {
    lockboxCarousel.trigger("next.owl.carousel");
  });

  //  EARTHECHO CAROU
  const earthechoCarousel = $(".earthecho-carousel");
  earthechoCarousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $(".left-btn-earthecho").click(function () {
    earthechoCarousel.trigger("prev.owl.carousel");
  });
  $(".right-btn-earthecho").click(function () {
    earthechoCarousel.trigger("next.owl.carousel");
  });

  //  PAWITHLUV CAROU
  const pawithluvCarousel = $(".pawithluv-carousel");
  pawithluvCarousel.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $(".left-btn-pawithluv").click(function () {
    pawithluvCarousel.trigger("prev.owl.carousel");
  });
  $(".right-btn-pawithluv").click(function () {
    pawithluvCarousel.trigger("next.owl.carousel");
  });
});


//SKILLS BTNS
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
