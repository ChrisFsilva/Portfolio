// Seleciona os links do menu lateral e a área de conteúdo
const menuLinks = document.querySelectorAll('.sidebar a'); 
const contentArea = document.querySelector('.content'); 

// Função para carregar o conteúdo do tópico
function loadPage(page) {
    fetch(page) 
    // Usa o caminho direto fornecido para buscar o arquivo
        .then(response => {
            if (!response.ok) { 
                throw new Error('Página não encontrada'); 
            }
            return response.text(); 
        })
        .then(html => {
            contentArea.innerHTML = html; 
        })
        .catch(error => {
            contentArea.innerHTML = '<p style="color: red;">Erro ao carregar a página: ' + error.message + '</p>'; 
        });
}

// Adiciona evento de clique a cada link do menu
menuLinks.forEach(link => { 
    link.addEventListener('click', event => { 
        event.preventDefault(); 
        const page = `./${link.getAttribute('data-page')}`; 
        // Usa o atributo data-page para construir o caminho correto
        loadPage(page); 
    });
});

// Carrega o tópico profile automaticamente ao abrir o site
loadPage('./profile/contents.html');
