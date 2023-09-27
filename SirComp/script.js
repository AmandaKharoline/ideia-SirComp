// Função para rolagem suave ao clicar nos links da barra de navegação
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    for (const link of links) {
        link.addEventListener("click", scrollToSection);
    }

    function scrollToSection(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const yOffset = -70; // Ajuste o valor conforme necessário para corrigir a posição do scroll
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }
});
