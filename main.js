document.addEventListener('DOMContentLoaded', function () {
    const menuToggler = document.querySelector('.menu-toggler');
    const topNav = document.querySelector('.top-nav');
    const upButton = document.getElementById('up');

    if (menuToggler && topNav) {
        menuToggler.addEventListener('click', function () {
            menuToggler.classList.toggle('open');
            topNav.classList.toggle('open');
        });

        topNav.addEventListener('click', function () {
            menuToggler.classList.remove('open');
            topNav.classList.remove('open');
        });
    }

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

                if (menuToggler) menuToggler.classList.remove('open');
                if (topNav) topNav.classList.remove('open');
            }
        });
    });

    if (upButton) {
        upButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    if (typeof AOS !== 'undefined') {
        AOS.init({
            easing: 'ease',
            duration: 1800
        });
    }
});
