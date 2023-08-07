// Função para abrir e fechar o menu:
function toggleMenu() {
  const menu = document.getElementById("menu");
    menu.classList.toggle("-active");
}

// Função para play do vídeo ao clicar na imagem de capa:
const video = document.getElementById("video-player");
const videoCover = document.getElementById("video-cover");
  
  video.addEventListener("play", function() {
    videoCover.style.display = "none";
});

// Função para o sistema de sanfona para a lista::
function toggleAccordion(titleElement) {
    const item = titleElement.parentNode;
      item.classList.toggle("-active");
}

// Função para carregar a informação da API CatFact:
function loadCatFact() { 
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      const extract = document.querySelector(".extract");
      extract.textContent = data.fact;
    })
    .catch((error) => {
      console.error("Erro ao carregar o fato do gato: ", error);
    });
}

loadCatFact(); // Chamando a função para carregar o conteúdo, ao carregar a página!

// Função para abrir modal com a foto:
function openModal() {
  const modal = document.querySelector(".modal-wiki");
    modal.classList.add("-active");
}

// Função para o botão de fechar do modal:
function closeModal() {
  const modal = document.querySelector(".modal-wiki");
    modal.classList.remove("-active");
}