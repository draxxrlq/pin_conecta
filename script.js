// ========================================
// EMPÓRIO DOS CEREAIS
// SCRIPT.JS
// ========================================


// ========================================
// CABEÇALHO AO ROLAR A PÁGINA
// ========================================

const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 12) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


// ========================================
// MENU MOBILE
// ========================================

const burger = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobile-menu");

burger.addEventListener("click", () => {

  mobileMenu.classList.toggle("open");

});


// ========================================
// SISTEMA DE NAVEGAÇÃO
// ========================================

function goToPanel(nome) {

  // Procura todas as páginas
  const panels = document.querySelectorAll(".panel");

  // Esconde todas
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });


  // Procura a página escolhida
  const painelSelecionado =
    document.getElementById("panel-" + nome);


  // Mostra a página escolhida
  if (painelSelecionado) {

    painelSelecionado.classList.add("active");

  }


  // ========================================
  // ATUALIZA O MENU
  // ========================================

  const botoesMenu =
    document.querySelectorAll("#tabNav button");

  botoesMenu.forEach((botao) => {

    if (botao.dataset.goto === nome) {

      botao.classList.add("active");

    } else {

      botao.classList.remove("active");

    }

  });


  // Fecha menu mobile
  mobileMenu.classList.remove("open");


  // Volta para o topo
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ========================================
// BOTÕES COM data-goto
// ========================================

const botoesNavegacao =
  document.querySelectorAll("[data-goto]");


botoesNavegacao.forEach((botao) => {

  botao.addEventListener("click", () => {

    const destino = botao.dataset.goto;

    goToPanel(destino);

  });

});


// ========================================
// FECHAR MENU MOBILE AO CLICAR FORA
// ========================================

document.addEventListener("click", (event) => {

  const clicouNoMenu =
    mobileMenu.contains(event.target);

  const clicouNoBurger =
    burger.contains(event.target);


  if (
    !clicouNoMenu &&
    !clicouNoBurger
  ) {

    mobileMenu.classList.remove("open");

  }

});


// ========================================
// FECHAR MENU AO REDIMENSIONAR
// ========================================

window.addEventListener("resize", () => {

  if (window.innerWidth > 900) {

    mobileMenu.classList.remove("open");

  }

});

// ========================================
// LIGHTBOX: VER FOTO DO PRODUTO INTEIRA
// ========================================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxFechar = document.getElementById("lightbox-fechar");


// Ao clicar na foto de um produto,
// abre a foto completa, sem corte
const fotosProdutos =
  document.querySelectorAll(".produto-card img");

fotosProdutos.forEach((foto) => {

  foto.addEventListener("click", () => {

    lightboxImg.src = foto.src;
    lightboxImg.alt = foto.alt;

    lightbox.classList.add("aberto");
    document.body.classList.add("lightbox-aberto");

  });

});


// Funcao para fechar a foto ampliada
function fecharLightbox() {

  lightbox.classList.remove("aberto");
  document.body.classList.remove("lightbox-aberto");

}


// Fecha no botao X
lightboxFechar.addEventListener("click", fecharLightbox);


// Fecha ao clicar no fundo escuro (fora da foto)
lightbox.addEventListener("click", (event) => {

  if (event.target === lightbox) {
    fecharLightbox();
  }

});


// Fecha ao apertar a tecla ESC
document.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    lightbox.classList.contains("aberto")
  ) {
    fecharLightbox();
  }

});
