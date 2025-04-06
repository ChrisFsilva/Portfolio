// Adiciona um ouvinte de evento para capturar todos os cliques na página
document.addEventListener('click', function(event) { 
    // Verifica se o elemento clicado (ou algum pai dele) contém o atributo 'data-page'
    const target = event.target.closest('[data-page]'); 

    // Se o clique foi em um elemento com 'data-page', executa o código abaixo
    if (target) {
        event.preventDefault(); // Evita que o link tente abrir a página normalmente (com recarregamento)
        const page = target.getAttribute('data-page'); // Obtém o valor do atributo 'data-page', que contém o caminho do arquivo HTML
        loadPage(page); // Chama a função que carrega a página dinamicamente
    }
});
