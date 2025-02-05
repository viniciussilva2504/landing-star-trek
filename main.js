document.addEventListener('DOMContentLoaded', function() {
    // Função de rolagem suave para as âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Função para rolar até a última seção quando clicar no botão de Newsletter
    const newsletterButton = document.getElementById('newsletter-button');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.getElementById('newsletter-form');
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});