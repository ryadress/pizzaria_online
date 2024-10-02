// Função para verificar a visibilidade dos elementos
function checkVisibility() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    fadeInElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        console.log(`rect.top: ${rect.top}, windowHeight: ${windowHeight}`); // Log para verificar valores

        // Verifique se o topo do elemento está visível
        if (rect.top <= windowHeight * 0.9) { // Ajuste a condição para desktop
            const delay = index * 200; // Atraso em milissegundos para animação em cascata
            element.style.transitionDelay = `${delay}ms`;
            element.classList.add('visible');
        }
    });
}

// Verifica a visibilidade ao rolar a página
window.addEventListener('scroll', checkVisibility);

// Verifica a visibilidade ao redimensionar a tela
window.addEventListener('resize', checkVisibility);

// Executa a função ao carregar a página para garantir que os elementos já visíveis sejam mostrados
window.addEventListener('load', checkVisibility);

