document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('[data-aos]');

    const animateOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                el.classList.add('aos-animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // trigger on load
});
