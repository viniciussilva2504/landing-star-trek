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
document.getElementById('newsletter-button').addEventListener('click', function (e) {
    e.preventDefault(); // Impede a ação padrão do botão (se houver)
    
    // Rola até o formulário de newsletter
    document.getElementById('newsletter-form').scrollIntoView({
        behavior: 'smooth' // Rolagem suave
    });
});
