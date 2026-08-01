/*=====================================================
            REALISATIONS.JS
            SOLUTEC
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
            FILTRE PORTFOLIO
    =========================================*/

    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            portfolioItems.forEach(item => {

                if (filter === "all" || item.dataset.category === filter) {

                    item.style.display = "block";

                    setTimeout(() => {

                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";

                    }, 100);

                } else {

                    item.style.opacity = "0";
                    item.style.transform = "scale(.9)";

                    setTimeout(() => {

                        item.style.display = "none";

                    }, 250);

                }

            });

        });

    });



    /*=========================================
            ANIMATION AU SCROLL
    =========================================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(

        ".portfolio-item,.featured-container,.stat-box,.section-title"

    ).forEach(el => {

        observer.observe(el);

    });



    /*=========================================
            COMPTEURS
    =========================================*/

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;

            const increment = Math.ceil(target / 100);

            if (current < target) {

                counter.innerText = current + increment;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });



    /*=========================================
            HEADER STICKY
    =========================================*/

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });



    /*=========================================
            RETOUR EN HAUT
    =========================================*/

    const backTop = document.querySelector(".back-top");

    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backTop.classList.add("active");

            } else {

                backTop.classList.remove("active");

            }

        });

        backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    /*=========================================
            SCROLL FLUIDE
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});