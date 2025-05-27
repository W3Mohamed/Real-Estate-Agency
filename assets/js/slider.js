document.addEventListener('turbo:load', function() {
    if(document.querySelector('#property-carousel')){
        // Initialisation du carrousel Splide
        new Splide('#property-carousel', {
            type: 'fade',
            rewind: true,
            pagination: true,
            arrows: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            cover: true,
            heightRatio: 0.5
        }).mount();
        
        // Animation des éléments au scroll
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.property-details-item, .similar-property-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Initial state for animation
        const items = document.querySelectorAll('.property-details-item, .similar-property-card');
        items.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s ease-out';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Trigger on load
    }
});