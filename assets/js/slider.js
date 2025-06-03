// Fonction pour initialiser un carrousel avec un ID spécifique
function initSplideCarousel(selector, options) {
    const element = document.querySelector(selector);
    if (!element) return null;
    
    // Ajout d'un ID unique aux éléments de pagination
    const paginationId = `${selector.replace('#', '')}-pagination`;
    options.pagination = options.pagination !== false ? paginationId : false;
    
    return new Splide(selector, options).mount();
}

// Configuration des différents carrousels
const carouselConfigs = [
    {
        selector: '#property-carousel',
        options: {
            type: 'fade',
            rewind: true,
            pagination: true,
            arrows: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            cover: true,
            heightRatio: 0.5
        }
    },
    {
        selector: '#properties-for-sale',
        options: {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1.5rem',
            pagination: false, // Désactive la pagination pour ce carrousel
            breakpoints: {
                1024: { perPage: 2 },
                768: { perPage: 1 }
            }
        }
    },
    {
        selector: '#properties-for-rent',
        options: {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1.5rem',
            pagination: false, // Désactive la pagination pour ce carrousel
            breakpoints: {
                1024: { perPage: 2 },
                768: { perPage: 1 }
            }
        }
    }
];

// Initialisation de tous les carrousels
function initAllCarousels() {
    carouselConfigs.forEach(config => {
        initSplideCarousel(config.selector, config.options);
    });
}

// Gestion des animations au scroll (inchangé)
function initScrollAnimations() {
    // ... (votre code existant pour les animations)
}

// Initialisation complète
function initializeAll() {
    initAllCarousels();
    initScrollAnimations();
}
console.log('fichier slider chargé');
// Écouteurs d'événements
document.addEventListener('turbo:load', initializeAll);
document.addEventListener('DOMContentLoaded', initializeAll);