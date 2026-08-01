/*=====================================================
                SERVICES.JS
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



    /*=========================================
            FERMER LE MENU
    =========================================*/

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuToggle.classList.remove("active");

        });

    });



    /*=========================================
            SCROLL ANIMATION
    =========================================*/

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll(

        ".service-card,.advantage-box,.intro-image,.intro-content,.section-title"

    ).forEach(el=>{

        observer.observe(el);

    });



    /*=========================================
            PARALLAX HERO
    =========================================*/

    const heroImage = document.querySelector(".hero-right img");

    window.addEventListener("scroll",()=>{

        const y = window.pageYOffset;

        if(heroImage){

            heroImage.style.transform=`translateY(${y*0.08}px)`;

        }

    });



    /*=========================================
            BUTTON RIPPLE
    =========================================*/

    document.querySelectorAll(".btn-primary").forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.classList.add("hover");

        });

        btn.addEventListener("mouseleave",()=>{

            btn.classList.remove("hover");

        });

    });



    /*=========================================
            BACK TO TOP
    =========================================*/

    const backTop = document.querySelector(".back-top");

    if(backTop){

        window.addEventListener("scroll",()=>{

            if(window.scrollY>500){

                backTop.classList.add("active");

            }else{

                backTop.classList.remove("active");

            }

        });

        backTop.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }



    /*=========================================
            SMOOTH SCROLL
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});