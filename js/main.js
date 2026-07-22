/* ==================================================
   CLÍNICA VIDA PLENA
   main.js
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MENU MOBILE
    ========================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });

    }


    /* ==========================================
       FAQ ACCORDION
    ========================================== */

    const faqButtons = document.querySelectorAll(".faq-item button");

    faqButtons.forEach(button => {

        button.addEventListener("click", () => {

            const item = button.parentElement;

            item.classList.toggle("active");

        });

    });


    /* ==========================================
       BOTÃO VOLTAR AO TOPO
    ========================================== */

    const backTop = document.getElementById("back-top");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /* ==========================================
       ANIMAÇÕES AO APARECER
    ========================================== */

    const elements = document.querySelectorAll(
        ".card, .hero-text, .hero-image, .steps div"
    );

    elements.forEach(element => {

        element.classList.add("hidden");

    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    elements.forEach(element => {

        observer.observe(element);

    });

    const whatsappButton = document.getElementById("whatsapp-button");

if (whatsappButton) {

    whatsappButton.addEventListener("click", () => {

        alert(
            "Projeto fictício, é apenas uma demonstração.\n\nO WhatsApp não está disponível."
        );

    });

}

});