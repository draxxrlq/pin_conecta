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


// Controle de Som do Vídeo da Página Inicial
const videoHero = document.getElementById('hero-video');
const btnSom = document.getElementById('btn-som');

if (videoHero && btnSom) {
  const labelSom = btnSom.querySelector('.video-audio-label');

  btnSom.addEventListener('click', () => {
    if (videoHero.muted) {
      videoHero.muted = false;
      btnSom.classList.add('com-som');
      if (labelSom) labelSom.textContent = 'Silenciar';
      btnSom.setAttribute('aria-label', 'Silenciar som do vídeo');
    } else {
      videoHero.muted = true;
      btnSom.classList.remove('com-som');
      if (labelSom) labelSom.textContent = 'Ativar som';
      btnSom.setAttribute('aria-label', 'Ativar som do vídeo');
    }
  });
}

/* =============================================
   CATÁLOGO E CARRINHO MOBILE
============================================= */

// Banco simples de detalhes
const produtosInfo = {
  'hibisco': {
    nome: 'Hibisco',
    tag: 'Ervas e Flores',
    desc: 'Flor rica em antioxidantes, tradicionalmente consumida em chás pela ação diurética e sabor levemente cítrico.',
    img: 'img/hibisco.png',
    unit: '100g'
  },
  'castanha-brasil': {
    nome: 'Castanha-do-Brasil',
    tag: 'Castanhas',
    desc: 'Castanhas selecionadas da Amazônia, fontes naturais de selênio, gorduras benéficas e proteínas.',
    img: 'img/castanhas.png',
    unit: '200g'
  },
  'cavalinha': {
    nome: 'Cavalinha',
    tag: 'Ervas e Folhas',
    desc: 'Erva tradicionalmente preparada em infusão para retenção de líquidos e reposição de minerais.',
    img: 'img/cavalinha.png',
    unit: '100g'
  },
  'chia': {
    nome: 'Chia em grão',
    tag: 'Grãos e Sementes',
    desc: 'Sementes com alta concentração de fibras solúveis, ideais para digestão e saciedade no dia a dia.',
    img: 'img/loja/chia.jpg',
    unit: 'A granel'
  },
  'linhaca': {
    nome: 'Linhaça selecionada',
    tag: 'Grãos e Sementes',
    desc: 'Rica em ômega 3 vegetal, pode ser consumida em grãos ou triturada no preparo de refeições.',
    img: 'img/loja/linhaca.jpg',
    unit: 'A granel'
  },
  'sal-rosa': {
    nome: 'Sal rosa do Himalaia',
    tag: 'Temperos',
    desc: 'Sal puro com minerais naturais preservados, disponível nas versões moído fino e grosso.',
    img: 'img/loja/sal-rosa.jpg',
    unit: 'Fino/Grosso'
  },
  'curry': {
    nome: 'Curry indiano',
    tag: 'Temperos',
    desc: 'Mix aromático de especiarias puras e cúrcuma para conferir cor e sabor aos preparos culinários.',
    img: 'img/loja/curry.jpg',
    unit: 'A granel'
  },
  'nozes': {
    nome: 'Nozes chilenas',
    tag: 'Castanhas',
    desc: 'Nozes de qualidade superior, recomendadas para a saúde cardiovascular e lanches práticos.',
    img: 'img/loja/nozes.jpg',
    unit: 'A granel'
  }
};

let carrinho = [];
let produtoAtualModal = null;
let quantidadeModal = 1;

// Filtro por Categoria
const botoesCat = document.querySelectorAll('.cat-pill');
const cards = document.querySelectorAll('.shop-card');

botoesCat.forEach(btn => {
  btn.addEventListener('click', () => {
    botoesCat.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const categoria = btn.dataset.cat;

    cards.forEach(card => {
      const cardCats = card.dataset.cat || '';
      if (categoria === 'todos' || cardCats.includes(categoria)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Busca em Tempo Real
const inputBusca = document.getElementById('input-busca-produtos');
if (inputBusca) {
  inputBusca.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase().trim();
    cards.forEach(card => {
      const texto = card.dataset.nome || '';
      card.style.display = texto.includes(termo) ? 'flex' : 'none';
    });
  });
}

// Modal de Detalhes
const modalDetalhes = document.getElementById('modal-detalhes');
const btnFecharDetalhes = document.getElementById('btn-fechar-detalhes');
const qtyValor = document.getElementById('qty-valor');
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus = document.getElementById('qty-plus');
const btnModalAdicionar = document.getElementById('btn-modal-adicionar');

function abrirDetalheProduto(id) {
  const item = produtosInfo[id];
  if (!item) return;

  produtoAtualModal = item;
  quantidadeModal = 1;
  qtyValor.textContent = '1';

  document.getElementById('detalhe-nome').textContent = item.nome;
  document.getElementById('detalhe-tag').textContent = item.tag;
  document.getElementById('detalhe-desc').textContent = item.desc;
  document.getElementById('detalhe-img').src = item.img;

  modalDetalhes.classList.add('aberto');
  document.body.style.overflow = 'hidden';
}

if (btnFecharDetalhes) {
  btnFecharDetalhes.addEventListener('click', () => {
    modalDetalhes.classList.remove('aberto');
    document.body.style.overflow = '';
  });
}

if (qtyMinus && qtyPlus) {
  qtyMinus.addEventListener('click', () => {
    if (quantidadeModal > 1) {
      quantidadeModal--;
      qtyValor.textContent = quantidadeModal;
    }
  });
  qtyPlus.addEventListener('click', () => {
    quantidadeModal++;
    qtyValor.textContent = quantidadeModal;
  });
}

if (btnModalAdicionar) {
  btnModalAdicionar.addEventListener('click', () => {
    if (produtoAtualModal) {
      adicionarAoCarrinho(produtoAtualModal.nome, produtoAtualModal.unit, produtoAtualModal.img, quantidadeModal);
      modalDetalhes.classList.remove('aberto');
      document.body.style.overflow = '';
    }
  });
}

// Carrinho de Compras
const cartDrawer = document.getElementById('cart-drawer');
const btnAbrirCarrinho = document.getElementById('btn-abrir-carrinho');
const btnFecharCarrinho = document.getElementById('btn-fechar-carrinho');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalItens = document.getElementById('cart-total-itens');
const btnFinalizarWhatsApp = document.getElementById('btn-finalizar-whatsapp');

function adicionarAoCarrinho(nome, unit, img, qty = 1) {
  const index = carrinho.findIndex(i => i.nome === nome);
  if (index >= 0) {
    carrinho[index].qty += qty;
  } else {
    carrinho.push({ nome, unit, img, qty });
  }
  atualizarCarrinhoUI();
}

function removerDoCarrinho(nome) {
  carrinho = carrinho.filter(i => i.nome !== nome);
  atualizarCarrinhoUI();
}

function atualizarCarrinhoUI() {
  const total = carrinho.reduce((acc, item) => acc + item.qty, 0);
  cartCount.textContent = total;
  cartTotalItens.textContent = `${total} item(ns) na lista`;

  if (carrinho.length === 0) {
    cartItemsContainer.innerHTML = '<p class="cart-empty-text">Nenhum produto adicionado ainda.</p>';
  } else {
    cartItemsContainer.innerHTML = carrinho.map(item => `
      <div class="cart-item-row">
        <img class="cart-item-img" src="${item.img}" alt="${item.nome}">
        <div class="cart-item-meta">
          <h5>${item.nome}</h5>
          <span>${item.qty}x (${item.unit})</span>
        </div>
        <button class="cart-item-remove" onclick="removerDoCarrinho('${item.nome}')" aria-label="Remover">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path></svg>
        </button>
      </div>
    `).join('');
  }
}

if (btnAbrirCarrinho) {
  btnAbrirCarrinho.addEventListener('click', () => {
    cartDrawer.classList.add('aberto');
    document.body.style.overflow = 'hidden';
  });
}

if (btnFecharCarrinho) {
  btnFecharCarrinho.addEventListener('click', () => {
    cartDrawer.classList.remove('aberto');
    document.body.style.overflow = '';
  });
}

// Finalizar pedido enviando a lista formatada no WhatsApp
if (btnFinalizarWhatsApp) {
  btnFinalizarWhatsApp.addEventListener('click', () => {
    if (carrinho.length === 0) {
      alert('Selecione pelo menos um item primeiro.');
      return;
    }

    let texto = 'Olá, Empório dos Cereais! Gostaria de consultar a disponibilidade dos seguintes produtos:\n\n';
    carrinho.forEach(item => {
      texto += `• ${item.qty}x ${item.nome} (${item.unit})\n`;
    });
    texto += '\nPoderiam me informar a disponibilidade e os valores? Obrigado!';

    const link = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(link, '_blank');
  });
}

atualizarCarrinhoUI();
