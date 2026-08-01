document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. LOADER
    ========================================= */
    const loader = document.getElementById('loader');
    if (loader) {
        // Cache le loader une fois que toute la page est chargée
        window.addEventListener('load', () => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500); // Laisse le temps à l'opacité de fondre
        });
    }

    /* =========================================
       2. HEADER AU SCROLL (Sticky Header)
    ========================================= */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        // Ajoute la classe .scrolled si on descend de plus de 50px
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* =========================================
       3. MENU HAMBURGER (Navigation Mobile)
    ========================================= */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (menuToggle && navLinks) {
        // Ouvre/Ferme le menu au clic sur le bouton
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Change l'icône (si tu utilises FontAwesome par exemple : menu 🍔 -> croix ❌)
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Ferme le menu automatiquement quand on clique sur un lien
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    /* =========================================
       4. FAQ (Accordéon)
    ========================================= */
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // L'élément réponse juste en dessous de la question
            const answer = question.nextElementSibling;
            // L'icône dans la question (pour la faire tourner)
            const icon = question.querySelector('i');

            // Optionnel : Fermer les autres FAQ ouvertes quand on en ouvre une
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.style.maxHeight = null;
                    const otherIcon = otherQuestion.querySelector('i');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Basculer l'état de la FAQ cliquée
            question.classList.toggle('active');

            if (question.classList.contains('active')) {
                // Calcule la hauteur réelle du contenu pour l'animation
                answer.style.maxHeight = answer.scrollHeight + 'px';
                if (icon) {
                    icon.style.transform = 'rotate(180deg)';
                    icon.style.transition = 'transform 0.4s ease';
                }
            } else {
                // Referme la FAQ
                answer.style.maxHeight = null;
                if (icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
            }
        });
    });

    /* =========================================
       5. BOUTON RETOUR EN HAUT (Back to top)
    ========================================= */
    const backToTopBtn = document.querySelector('.back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            // Affiche le bouton après avoir scrollé 300px
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        // Remonte tout en haut en douceur au clic
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});