document.addEventListener('DOMContentLoaded', function () {
    const menuToggler = document.querySelector('.menu-toggler');
    const topNav = document.querySelector('.top-nav');
    const upButton = document.getElementById('up');

    // Toggle menu open/close
    if (menuToggler && topNav) {
        menuToggler.addEventListener('click', function () {
            menuToggler.classList.toggle('open');
            topNav.classList.toggle('open');
        });

        // Close menu on nav click
        topNav.addEventListener('click', function () {
            menuToggler.classList.remove('open');
            topNav.classList.remove('open');
        });
    }

    // Smooth scroll to sections
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                menuToggler.classList.remove('open');
                topNav.classList.remove('open');
            }
        });
    });

    // Scroll to top when clicking #up
    if (upButton) {
        upButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Initialize AOS (if it's included)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            easing: 'ease',
            duration: 100
        });
    }
});
