// Lista de descrições correspondentes às imagens
const descricoes = [
    "Personagem 1: Guerreiro com alta resistência e ataques pesados.",
    "Personagem 2: Ágil e furtivo, ideal para ataques rápidos.",
    "Personagem 3: Maga poderosa com magias de longo alcance.",
    "Personagem 4: Suporte, cura aliados e controla o campo."
  ];
  
  // Pega todos os elementos <img> da galeria
  const imagens = document.querySelectorAll(".galeria img");
  
  // Pega o elemento onde a descrição será exibida
  const descricao = document.getElementById("descricao");
  
  // Adiciona evento de clique a cada imagem
  imagens.forEach((img) => {
    img.addEventListener("click", () => {
      // Remove a classe "selecionado" de todas as imagens
      imagens.forEach(i => i.classList.remove("selecionado"));
  
      // Adiciona a classe "selecionado" à imagem clicada
      img.classList.add("selecionado");
  
      // Pega o índice da imagem clicada
      const index = img.getAttribute("data-index");
  
      // Atualiza a descrição
      descricao.textContent = descricoes[index];
    });
  });
  