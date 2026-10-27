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
   CATÁLOGO COMPLETO COM TODOS OS PRODUTOS
============================================= */

const catalogoProdutos = [
  // ERVAS E FLORES
  { id: 'cavalinha', nome: 'Cavalinha', cat: 'ervas', tag: 'Ervas e folhas', desc: 'Tradicionalmente usada em chás pela ação diurética e por ser rica em silício.', img: 'img/cavalinha.png', unit: 'A granel' },
  { id: 'hibisco', nome: 'Hibisco', cat: 'ervas', tag: 'Ervas e flores', desc: 'Flor de hibisco muito consumida em chá, associada à ação diurética e antioxidante.', img: 'img/hibisco.png', unit: 'A granel' },
  { id: 'catuaba', nome: 'Catuaba', cat: 'ervas', tag: 'Ervas e cascas', desc: 'Tradicionalmente consumida como tônico natural para dar mais disposição.', img: 'img/catuaba.png', unit: 'Embalada' },
  { id: 'cascas-ervas', nome: 'Cascas e ervas variadas', cat: 'ervas', tag: 'Ervas e cascas', desc: 'Diversas opções de cascas e ervas comercializadas em embalagens tradicionais.', img: 'img/cascas-ervas.png', unit: 'Embaladas' },
  { id: 'ervas-embaladas', nome: 'Ervas medicinais embaladas', cat: 'ervas', tag: 'Ervas', desc: 'Seleção de chás e ervas secas prontas para infusões do dia a dia.', img: 'img/ervas-embaladas.png', unit: 'Embaladas' },
  { id: 'hortela', nome: 'Hortelã desidratada', cat: 'ervas', tag: 'Ervas e folhas', desc: 'Auxilia na digestão e proporciona alívio para gases e sensação de peso.', img: 'img/loja/hortela.jpg', unit: 'A granel' },
  { id: 'manjericao', nome: 'Manjericão desidratado', cat: 'ervas', tag: 'Ervas e folhas', desc: 'Aroma fresco para temperar molhos, massas, carnes e saladas.', img: 'img/loja/manjericao.jpg', unit: 'A granel' },

  // CASTANHAS E FRUTAS SECAS
  { id: 'castanhas', nome: 'Castanhas e derivados', cat: 'castanhas', tag: 'Castanhas', desc: 'Castanha-do-Brasil, castanha-de-caju, farinhas e derivados ricos em gorduras boas e selênio.', img: 'img/castanhas.png', unit: 'Fracionada' },
  { id: 'nozes', nome: 'Nozes chilenas', cat: 'castanhas', tag: 'Castanhas e frutas', desc: 'Ajudam a controlar o colesterol, cuidam do coração e estimulam a memória.', img: 'img/loja/nozes.jpg', unit: 'A granel' },
  { id: 'ameixa', nome: 'Ameixa sem caroço', cat: 'castanhas', tag: 'Frutas secas', desc: 'Fruta seca rica em fibras digestivas, pronta para consumo ou receitas.', img: 'img/loja/ameixa.jpg', unit: 'A granel' },

  // GRÃOS, SEMENTES E FIBRAS
  { id: 'fibras', nome: 'Fibras e farinhas integrais', cat: 'graos', tag: 'Farinhas e fibras', desc: 'Variedades que auxiliam no trânsito intestinal e aumentam a saciedade das refeições.', img: 'img/fibras.png', unit: 'A granel' },
  { id: 'linhaca', nome: 'Linhaça marrom e dourada', cat: 'graos', tag: 'Grãos e sementes', desc: 'Rica em ômega 3 vegetal e fibras benéficas ao controle do açúcar no sangue.', img: 'img/loja/linhaca.jpg', unit: 'A granel' },
  { id: 'chia', nome: 'Chia em grão', cat: 'graos', tag: 'Grãos e sementes', desc: 'Sementes com alta densidade de fibras, fortalecem o sistema imune e a saciedade.', img: 'img/loja/chia.jpg', unit: 'A granel' },
  { id: 'gergelim-preto', nome: 'Gergelim preto', cat: 'graos', tag: 'Grãos e sementes', desc: 'Auxilia no cuidado do coração e estimula a atividade cognitiva.', img: 'img/loja/gergelim-preto.jpg', unit: 'A granel' },
  { id: 'gergelim-branco', nome: 'Gergelim branco', cat: 'graos', tag: 'Grãos e sementes', desc: 'Rico em cálcio vegetal, ferro e vitaminas do complexo B.', img: 'img/loja/gergelim-branco.jpg', unit: 'A granel' },
  { id: 'ervilha', nome: 'Ervilha inteira', cat: 'graos', tag: 'Grãos e sementes', desc: 'Baixo teor calórico, rica em proteínas vegetais, antioxidantes e minerais.', img: 'img/loja/ervilha.jpg', unit: 'A granel' },
  { id: 'arroz-integral', nome: 'Arroz integral multigrãos', cat: 'graos', tag: 'Grãos e sementes', desc: 'Blend especial com cereais nutritivos que enriquecem o almoço diário.', img: 'img/loja/arroz-integral.jpg', unit: 'A granel' },
  { id: 'arroz-casca', nome: 'Arroz com casca', cat: 'graos', tag: 'Grãos e sementes', desc: 'Grãos naturais com casca preservada para dietas integrais.', img: 'img/loja/arroz-com-casca.jpg', unit: 'A granel' },

  // TEMPEROS E ESPECIARIAS
  { id: 'canelas', nome: 'Canela em pau e em pó', cat: 'temperos', tag: 'Especiarias', desc: 'Sabor marcante para receitas, digestão suave e compostos antioxidantes.', img: 'img/canelas.png', unit: 'Pau / Pó' },
  { id: 'sal-rosa', nome: 'Sal rosa do Himalaia', cat: 'temperos', tag: 'Temperos', desc: 'Sal não refinado, preservando dezenas de microminerais e potássio.', img: 'img/loja/sal-rosa.jpg', unit: 'Fino / Grosso' },
  { id: 'flor-de-sal', nome: 'Flor de sal', cat: 'temperos', tag: 'Temperos', desc: 'Cristais nobres para finalização de pratos e realce de sabor.', img: 'img/loja/flor-de-sal.jpg', unit: 'Embalada' },
  { id: 'sal-marinho', nome: 'Sal marinho integral', cat: 'temperos', tag: 'Temperos', desc: 'Secado naturalmente sem processos químicos agressivos.', img: 'img/loja/sal-marinho.jpg', unit: 'Fino / Grosso' },
  { id: 'noz-moscada', nome: 'Noz-moscada', cat: 'temperos', tag: 'Especiarias', desc: 'Aroma quente e adocicado para molhos brancos, purês e preparos tradicionais.', img: 'img/loja/noz-moscada.jpg', unit: 'Unidade / Pó' },
  { id: 'fumaca-em-po', nome: 'Fumaça em pó', cat: 'temperos', tag: 'Temperos', desc: 'Proporciona aroma e notas defumadas deliciosas a legumes, carnes e queijos.', img: 'img/loja/fumaca-em-po.jpg', unit: 'A granel' },
  { id: 'curry', nome: 'Curry indiano', cat: 'temperos', tag: 'Temperos', desc: 'Mistura clássica de cúrcuma com especiarias orientais aromáticas.', img: 'img/loja/curry.jpg', unit: 'A granel' },
  { id: 'tempero-caipira', nome: 'Tempero caipira', cat: 'temperos', tag: 'Temperos', desc: 'Combinação caseira de alho, açafrão, cebola, cenoura, pimentão e salsa.', img: 'img/loja/tempero-caipira.jpg', unit: 'A granel' },
  { id: 'tempero-edu', nome: 'Tempero Edu Guedes premium', cat: 'temperos', tag: 'Temperos', desc: 'Mix com ervas finas, alho tostado e cúrcuma para todo tipo de prato.', img: 'img/loja/tempero-edu.jpg', unit: 'A granel' },
  { id: 'louro-em-po', nome: 'Louro em pó', cat: 'temperos', tag: 'Temperos', desc: 'Prático e potente para temperar feijões, sopas e cozidos.', img: 'img/loja/louro-em-po.jpg', unit: 'A granel' },
  { id: 'acafrao-paprica', nome: 'Açafrão, páprica e colorau', cat: 'temperos', tag: 'Temperos', desc: 'Páprica doce e defumada, açafrão da terra puro e colorau sem sal.', img: 'img/loja/acafrao-paprica.jpg', unit: 'A granel' },
  { id: 'tempero-tartaro', nome: 'Tempero tártaro', cat: 'temperos', tag: 'Temperos', desc: 'Blend perfeito para realçar o sabor de peixes, aves e legumes assados.', img: 'img/loja/tempero-tartaro.jpg', unit: 'A granel' },
  { id: 'tempero-feijao', nome: 'Tempero para feijão em flocos', cat: 'temperos', tag: 'Temperos', desc: 'Temperos secos que hidratam e perfumam o feijão durante o cozimento.', img: 'img/loja/tempero-feijao.jpg', unit: 'A granel' },
  { id: 'chimichurri', nome: 'Chimichurri barbecue', cat: 'temperos', tag: 'Temperos', desc: 'Ervas clássicas desidratadas para churrasco, molhos e marinadas.', img: 'img/loja/chimichurri.jpg', unit: 'A granel' },

  // CHÁS E CAFÉS
  { id: 'cafe', nome: 'Café em grão 100% arábica', cat: 'chas-cafes', tag: 'Cafés', desc: 'Grãos selecionados com aroma marcante para moer e preparar na hora.', img: 'img/loja/cafe.jpg', unit: 'Em grãos' },
  { id: 'cha-leao', nome: 'Chás Leão variados', cat: 'chas-cafes', tag: 'Chás', desc: 'Seleção em sachês: camomila, erva-doce, hortelã, cidreira e matte.', img: 'img/loja/cha-leao-prateleira.jpg', unit: 'Caixa com sachês' },

  // SUPLEMENTOS E ENERGIA
  { id: 'guarana', nome: 'Guaraná em pó puro', cat: 'suplementos', tag: 'Energéticos naturais', desc: 'Estimulante natural que combate a fadiga física e mental.', img: 'img/loja/guarana.jpg', unit: 'Pó' },
  { id: 'creatina', nome: 'Creatina pura', cat: 'suplementos', tag: 'Suplementos', desc: 'Marcas de alta procedência para auxílio de força e recuperação muscular.', img: 'img/loja/creatina.jpg', unit: 'Pote' },
  { id: 'glutamina-beta', nome: 'Glutamina e beta-alanina', cat: 'suplementos', tag: 'Suplementos', desc: 'Suplementação direcionada à rotina esportiva e imunidade.', img: 'img/loja/glutamina-beta-alanina.jpg', unit: 'Pote' },
  { id: 'vitamina-b12', nome: 'Vitamina B12 (metilcobalamina)', cat: 'suplementos', tag: 'Suplementos', desc: 'Cápsulas com forma ativa de B12 de absorção otimizada.', img: 'img/loja/vitamina-b12.jpg', unit: 'Frasco' },

  // EMPÓRIO, DOCES E CUIDADOS
  { id: 'cacau', nome: 'Cacau em pó 100% puro', cat: 'emporio', tag: 'Confeitaria natural', desc: 'Sem adição de açúcar para bolos, sobremesas e bebidas nutritivas.', img: 'img/loja/cacau.jpg', unit: 'A granel' },
  { id: 'bebidas-vegetais', nome: 'Bebidas vegetais Silk', cat: 'emporio', tag: 'Bebidas vegetais', desc: 'Alternativas sem lactose nos sabores amêndoa, coco e castanha.', img: 'img/loja/bebidas-vegetais.jpg', unit: '1 Litro' },
  { id: 'flocos-confeitos', nome: 'Flocos macios e confeitos', cat: 'emporio', tag: 'Confeitaria', desc: 'Acabamento profissional para bolos e doces caseiros.', img: 'img/loja/flocos-confeitos.jpg', unit: 'Embalagem' },
  { id: 'confeito-micanga', nome: 'Confeito miçanga de chocolate', cat: 'emporio', tag: 'Confeitaria', desc: 'Para enrolar brigadeiros e finalizar sobremesas festivas.', img: 'img/loja/confeito-micanga.jpg', unit: 'Embalagem' },
  { id: 'cereja-calda', nome: 'Cereja em calda com cabo', cat: 'emporio', tag: 'Confeitaria', desc: 'Cerejas selecionadas para decoração de drinks, tortas e taças.', img: 'img/loja/cereja-calda.jpg', unit: 'Vidro' },
  { id: 'gelatinas-zero', nome: 'Gelatinas zero açúcar', cat: 'emporio', tag: 'Doces saudáveis', desc: 'Sobremesa leve e refrescante sem açúcares adicionados.', img: 'img/loja/gelatinas-zero.jpg', unit: 'Caixinha' },
  { id: 'geleias-queensberry', nome: 'Geleias gourmet Queensberry', cat: 'emporio', tag: 'Geleias', desc: 'Opções diet de frutas e gourmet para tábuas e queijos.', img: 'img/loja/geleias-queensberry.jpg', unit: 'Vidro' },
  { id: 'vinagre-maca', nome: 'Vinagre de maçã orgânico', cat: 'emporio', tag: 'Vinagres e azeites', desc: 'Fermentação natural de maçã para saladas e bem-estar.', img: 'img/loja/vinagre-maca.jpg', unit: '500ml' },
  { id: 'oleo-coco', nome: 'Óleo de coco virgem', cat: 'emporio', tag: 'Óleos saudáveis', desc: 'Multiuso culinário resistente a altas temperaturas.', img: 'img/loja/oleo-coco.jpg', unit: 'Frasco' },
  { id: 'oleos-vegetais', nome: 'Óleos vegetais prensados', cat: 'emporio', tag: 'Óleos corporais e capilares', desc: 'Óleos de buriti, mamona, babosa e rícino.', img: 'img/loja/oleos-vegetais.jpg', unit: 'Frasco' },
  { id: 'oleos-gotas', nome: 'Óleos e extratos em gotas', cat: 'emporio', tag: 'Gotas e tinturas', desc: 'Rosa mosqueta, óleo ozonizado e extratos concentrados.', img: 'img/loja/oleos-gotas.jpg', unit: 'Conta-gotas' },
  { id: 'sabonetes', nome: 'Sabonetes naturais em barra', cat: 'emporio', tag: 'Cuidados pessoais', desc: 'Artesanais como enxofre e aroeira para limpeza suave da pele.', img: 'img/loja/sabonetes.jpg', unit: 'Barra' },
  { id: 'percarbonato', nome: 'Percarbonato de sódio', cat: 'emporio', tag: 'Limpeza ecológica', desc: 'Alvejante biodegradável com ação de oxigênio ativo.', img: 'img/loja/percarbonato.jpg', unit: 'A granel' }
];

// Elementos da Interface
const shopGrid = document.getElementById('shop-grid');
const countEncontrados = document.getElementById('shop-itens-encontrados');
const inputBusca = document.getElementById('input-busca-produtos');
const botoesCat = document.querySelectorAll('.cat-pill');

let categoriaAtiva = 'todos';
let buscaAtiva = '';
let carrinho = [];
let produtoAtualModal = null;
let quantidadeModal = 1;

// Renderização dos cards no grid
function renderizarProdutos() {
  if (!shopGrid) return;

  const filtrados = catalogoProdutos.filter(item => {
    const bateCategoria = categoriaAtiva === 'todos' || item.cat === categoriaAtiva;
    const termo = buscaAtiva.toLowerCase().trim();
    const bateBusca = !termo || item.nome.toLowerCase().includes(termo) || item.tag.toLowerCase().includes(termo) || item.desc.toLowerCase().includes(termo);
    return bateCategoria && bateBusca;
  });

  if (countEncontrados) {
    countEncontrados.textContent = `${filtrados.length} disponíveis`;
  }

  if (filtrados.length === 0) {
    shopGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 10px; color: var(--cinza);">
        <p>Nenhum produto encontrado nesta busca.</p>
      </div>
    `;
    return;
  }

  shopGrid.innerHTML = filtrados.map(item => `
    <article class="shop-card">
      <div class="shop-card-media" onclick="abrirDetalheProduto('${item.id}')">
        <img src="${item.img}" alt="${item.nome}" loading="lazy" onerror="this.src='img/produtos-naturais.png'">
      </div>
      <div class="shop-card-body">
        <span class="shop-card-tag">${item.tag}</span>
        <h4 onclick="abrirDetalheProduto('${item.id}')">${item.nome}</h4>
        <p class="shop-card-desc">${item.desc}</p>
        <div class="shop-card-footer">
          <span class="shop-card-unit">${item.unit}</span>
          <button class="shop-add-btn" onclick="adicionarAoCarrinho('${item.nome}', '${item.unit}', '${item.img}')" aria-label="Adicionar ${item.nome}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Eventos de Categorias
botoesCat.forEach(btn => {
  btn.addEventListener('click', () => {
    botoesCat.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    categoriaAtiva = btn.dataset.cat;
    renderizarProdutos();
  });
});

// Evento de Busca
if (inputBusca) {
  inputBusca.addEventListener('input', (e) => {
    buscaAtiva = e.target.value;
    renderizarProdutos();
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
  const item = catalogoProdutos.find(p => p.id === id);
  if (!item) return;

  produtoAtualModal = item;
  quantidadeModal = 1;
  if (qtyValor) qtyValor.textContent = '1';

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

function alterarQtdCarrinho(nome, delta) {
  const item = carrinho.find(i => i.nome === nome);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removerDoCarrinho(nome);
  } else {
    atualizarCarrinhoUI();
  }
}

function atualizarCarrinhoUI() {
  const total = carrinho.reduce((acc, item) => acc + item.qty, 0);
  if (cartCount) cartCount.textContent = total;
  if (cartTotalItens) cartTotalItens.textContent = `${total} item(ns) na lista`;

  if (!cartItemsContainer) return;

  if (carrinho.length === 0) {
    cartItemsContainer.innerHTML = '<p class="cart-empty-text">Nenhum produto adicionado ainda.</p>';
  } else {
    cartItemsContainer.innerHTML = carrinho.map(item => `
      <div class="cart-item-row">
        <img class="cart-item-img" src="${item.img}" alt="${item.nome}" onerror="this.src='img/produtos-naturais.png'">
        <div class="cart-item-meta">
          <h5>${item.nome}</h5>
          <span>${item.unit}</span>
        </div>
        <div class="qty-control" style="gap: 8px;">
          <button type="button" onclick="alterarQtdCarrinho('${item.nome}', -1)">-</button>
          <span>${item.qty}</span>
          <button type="button" onclick="alterarQtdCarrinho('${item.nome}', 1)">+</button>
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

if (btnFinalizarWhatsApp) {
  btnFinalizarWhatsApp.addEventListener('click', () => {
    if (carrinho.length === 0) {
      alert('Sua lista está vazia.');
      return;
    }

    let texto = 'Olá, Empório dos Cereais! Gostaria de consultar os seguintes produtos:\n\n';
    carrinho.forEach(item => {
      texto += `• ${item.qty}x ${item.nome} (${item.unit})\n`;
    });
    texto += '\nPoderiam me informar a disponibilidade e os valores? Obrigado!';

    const link = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(link, '_blank');
  });
}

// Inicializa o catálogo e carrinho
renderizarProdutos();
atualizarCarrinhoUI();
