/*=====================================================
                CONTACT.JS
                SOLUTEC
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

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
                MENU MOBILE
    =========================================*/

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");
            nav.classList.toggle("active");

        });

    }



    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            if (nav) nav.classList.remove("active");

            if (menuToggle) menuToggle.classList.remove("active");

        });

    });



    /*=========================================
                FAQ ACCORDÉON
    =========================================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {

                if (faq !== item) {

                    faq.classList.remove("active");

                    faq.querySelector(".faq-answer").style.maxHeight = null;

                    faq.querySelector("i").classList.remove("fa-minus");
                    faq.querySelector("i").classList.add("fa-plus");

                }

            });

            item.classList.toggle("active");

            const answer = item.querySelector(".faq-answer");

            const icon = item.querySelector("i");

            if (item.classList.contains("active")) {

                answer.style.maxHeight = answer.scrollHeight + "px";

                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");

            } else {

                answer.style.maxHeight = null;

                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");

            }

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

        ".contact-info,.contact-form,.faq-item,.section-title"

    ).forEach(el => {

        observer.observe(el);

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

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });



    /*=========================================
            VALIDATION FORMULAIRE
    =========================================*/

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function(e) {

            e.preventDefault();

            const requiredFields = form.querySelectorAll("[required]");

            let valid = true;

            requiredFields.forEach(field => {

                if (field.value.trim() === "") {

                    valid = false;

                    field.style.borderColor = "#e63946";

                } else {

                    field.style.borderColor = "#3E84C4";

                }

            });

            if (valid) {

                alert("Votre message a été envoyé avec succès !");

                form.reset();

            } else {

                alert("Veuillez remplir tous les champs obligatoires.");

            }

        });

    }

});