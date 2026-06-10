// Array com os dados das imagens
const imagens = [
    { src: "panfletos/1.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "Por que é melhor para sua residencia?" },
    { src: "panfletos/2.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/comercial.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/conservaçao.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Conservacaodeenergia.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/EconomizarEnergiaBomparaoPlanetaeparaoseuBolso(1).png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/EconomizarEnergiaBomparaoPlanetaeparaoseuBolso(2).png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" }, 
    { src: "panfletos/EconomizarEnergiaBomparaoPlanetaeparaoseuBolso.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Economizenaconta(1).png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Economizenaconta(2).png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Economizenaconta(3).png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Fernando.Jennifer.Comercial.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Gabriel.Carvalho.Residencial.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Gabriel.Carvalho.SetorComercial.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/GuiaVerticaldeConservaçãodeEnergiaResidencialcomDados,DicaseBenefícios(1).png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/GuiaVerticaldeConservaçãodeEnergiaResidencialcomDados,DicaseBenefícios.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Hendriky.Rafael.Resedencial.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Hendriky.Rafael.SetorPublico.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/João.11.e.Paulo.24.Residencial.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/João11.e.Paulo.24.Público.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/João11.e.Paulo24.Comercial.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Laura.Rebeca. Comercial.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/nessefrio,ofriodiminui,massuacontaaumenta.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/PamfletoJoãoeJhonny.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/panfletocomercial(1).png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/panfletoComercial.eloisaeana.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/panfletocomercial.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/PlanfetosetorresidencialAnaeEloisa outroplanfetofoimandadopelaaElo.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Rafael.HendrikySetorComercial.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Rebeca.Laura.residencial.png_20260513_182953_0000.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Rebeca.Laura.setorpublico.png_20260513_224012_0000.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Residencial.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
    { src: "panfletos/Setorpublico.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
];

// Inicializa ou busca os cliques salvos no LocalStorage
let cliquesData = JSON.parse(localStorage.getItem('cliquesImagens')) || {};

// Garante que todas as imagens atuais possuam um contador zerado se não existirem no storage
imagens.forEach(img => {
    if (cliquesData[img.src] === undefined) {
        cliquesData[img.src] = 0;
    }
});

// Variáveis do modal
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageCounter = document.getElementById('imageCounter');

let currentImageIndex = 0;

// Função para renderizar a galeria
function renderizarGaleria() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    
    imagens.forEach((img, index) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.setAttribute('data-index', index);
        
        card.innerHTML = `
            <div class="img-container">
                <img src="${img.src}" alt="Panfleto sobre ${img.titulo}" loading="lazy">
            </div>
            <div class="card-content">
                <div>
                    <span class="card-tag">${img.tag}</span>
                    <h3>${img.titulo}</h3>
                    <p>${img.descricao}</p>
                    <small class="click-count">👁️ ${cliquesData[img.src]} visualizações</small>
                </div>
                <button class="btn-view" data-index="${index}">
                    🔍 Visualizar imagem completa
                </button>
            </div>
        `;
        
        gallery.appendChild(card);
    });
    
    adicionarEventos();
    renderizarRanking();
}

// Função para registrar o clique e atualizar os dados
function registrarClique(src) {
    cliquesData[src] = (cliquesData[src] || 0) + 1;
    localStorage.setItem('cliquesImagens', JSON.stringify(cliquesData));
    
    // Atualiza os contadores visuais sem precisar recarregar a página toda
    document.querySelectorAll('.card').forEach(card => {
        const imgEl = card.querySelector('.img-container img');
        if (imgEl && imgEl.getAttribute('src') === src) {
            const countEl = card.querySelector('.click-count');
            if (countEl) countEl.textContent = `👁️ ${cliquesData[src]} visualizações`;
        }
    });
    
    renderizarRanking();
}

// Renderiza a lista de classificação das mais vistas
function renderizarRanking() {
    const rankingList = document.getElementById('rankingList');
    if (!rankingList) return;

    // Mapeia e ordena as imagens com base nos cliques
    const ordenadas = [...imagens]
        .map(img => ({ ...img, cliques: cliquesData[img.src] || 0 }))
        .sort((a, b) => b.cliques - a.cliques)
        .slice(0, 5); // Pega o Top 5 (mude para o número que quiser)

    rankingList.innerHTML = ordenadas.map((img, i) => {
        // Pega apenas o nome do arquivo para não ficar muito longo no ranking
        const nomeArquivo = img.src.replace('panfletos/', '');
        let medalha = `${i + 1}º`;
        if (i === 0) medalha = '🥇';
        if (i === 1) medalha = '🥈';
        if (i === 2) medalha = '🥉';

        return `<li><span>${medalha} ${nomeArquivo}</span> <strong>${img.cliques} desc.</strong></li>`;
    }).join('');
}

// Função para adicionar eventos de clique
function adicionarEventos() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const imgContainer = card.querySelector('.img-container');
        const btn = card.querySelector('.btn-view');
        const index = parseInt(card.getAttribute('data-index'));
        
        const abrirModal = () => abrirImagem(index);
        
        imgContainer.addEventListener('click', abrirModal);
        btn.addEventListener('click', abrirModal);
    });
}

// Função para abrir a imagem no modal
function abrirImagem(index) {
    currentImageIndex = index;
    const imagem = imagens[currentImageIndex];
    modalImage.src = imagem.src;
    modalImage.alt = `Panfleto: ${imagem.titulo}`;
    updateCounter();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
    
    registrarClique(imagem.src);
}

// Navegação - Próxima imagem
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imagens.length;
    const imagem = imagens[currentImageIndex];
    modalImage.src = imagem.src;
    modalImage.alt = `Panfleto: ${imagem.titulo}`;
    updateCounter();
    
    registrarClique(imagem.src);
}

// Navegação - Imagem anterior
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imagens.length) % imagens.length;
    const imagem = imagens[currentImageIndex];
    modalImage.src = imagem.src;
    modalImage.alt = `Panfleto: ${imagem.titulo}`;
    updateCounter();
    
    registrarClique(imagem.src);
}

// Fechar modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; 
}

// Configurar todos os eventos
function configurarEventos() {
    closeBtn.addEventListener('click', closeModal);
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape': closeModal(); break;
            case 'ArrowLeft': prevImage(); break;
            case 'ArrowRight': nextImage(); break;
        }
    });
}

// Inicializar a aplicação
function init() {
    renderizarGaleria();
    configurarEventos();
}

document.addEventListener('DOMContentLoaded', init);