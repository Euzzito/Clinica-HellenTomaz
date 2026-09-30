
/* ============================= */
/* MENU MOBILE */
/* ============================= */

const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click", () => {
    menuIcone.classList.toggle("active");
    navMenu.classList.toggle("active");
});


/* Fecha o menu depois de clicar em algum link */

const linksMenu = document.querySelectorAll("#nav-menu a");

linksMenu.forEach(link => {
    link.addEventListener("click", () => {
        menuIcone.classList.remove("active");
        navMenu.classList.remove("active");
    });
});


/* ============================= */
/* SLIDESHOW */
/* ============================= */

const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");

const botaoAnterior = document.getElementById("prev");
const botaoProximo = document.getElementById("next");

let slideAtual = 0;


/* Mostra o slide escolhido */

function mostrarSlide(numero) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    indicadores.forEach(indicador => {
        indicador.classList.remove("active");
    });

    slides[numero].classList.add("active");
    indicadores[numero].classList.add("active");

    slideAtual = numero;
}


/* Próximo slide */

function proximoSlide() {

    let proximo = slideAtual + 1;

    if (proximo >= slides.length) {
        proximo = 0;
    }

    mostrarSlide(proximo);
}


/* Slide anterior */

function slideAnterior() {

    let anterior = slideAtual - 1;

    if (anterior < 0) {
        anterior = slides.length - 1;
    }

    mostrarSlide(anterior);
}


/* Botões */

botaoProximo.addEventListener("click", proximoSlide);
botaoAnterior.addEventListener("click", slideAnterior);


/* Indicadores */

indicadores.forEach((indicador, index) => {

    indicador.addEventListener("click", () => {
        mostrarSlide(index);
    });

});


/* Troca automaticamente a cada 6 segundos */

setInterval(proximoSlide, 6000);
