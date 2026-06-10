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
    { src: "panfletos/Laura.Rebeca.Comercial.png", tag: "imagem", titulo: "Conservação de Energia", descricao: "descrição da imagem" },
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

// ========== GERENCIAMENTO DO LOCALSTORAGE ==========
// Chave única para armazenamento no localStorage
const STORAGE_KEY = 'panfletos_visualizacoes';

// Carrega os dados salvos ou cria um novo objeto
function carregarContadores() {
    const salvos = localStorage.getItem(STORAGE_KEY);
    if (salvos) {
        try {
            return JSON.parse(salvos);
        } catch(e) {
            console.error('Erro ao carregar contadores:', e);
            return {};
        }
    }
    return {};
}

// Salva os contadores no localStorage
function salvarContadores() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cliquesData));
    console.log('Contadores salvos:', cliquesData); // Debug
}

// Inicializa os contadores
let cliquesData = carregarContadores();

// Garante que todas as imagens tenham um contador (zera as novas)
imagens.forEach(img => {
    if (cliquesData[img.src] === undefined) {
        cliquesData[img.src] = 0;
    }
});

// Salva imediatamente para garantir que novas imagens sejam registradas
salvarContadores();

// ========== ELEMENTOS DO DOM ==========
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageCounter = document.getElementById('imageCounter');

let currentImageIndex = 0;

// ========== FUNÇÕES DO MODAL ==========
function updateCounter() {
    if (imageCounter) {
        imageCounter.textContent = `📄 ${currentImageIndex + 1} de ${imagens.length}`;
    }
}

// ========== RENDERIZAÇÃO DA GALERIA ==========
function renderizarGaleria() {
    const gallery = document.getElementById('gallery');
    if (!gallery) {
        console.error('Elemento #gallery não encontrado!');
        return;
    }
    
    gallery.innerHTML = '';
    
    imagens.forEach((img, index) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.setAttribute('data-index', index);
        
        const visualizacoes = cliquesData[img.src] || 0;
        
        card.innerHTML = `
            <div class="img-container">
                <img src="${img.src}" alt="Panfleto sobre ${img.titulo}" loading="lazy" 
                     onerror="this.src='https://via.placeholder.com/300x250?text=Imagem+não+encontrada'">
            </div>
            <div class="card-content">
                <div>
                    <span class="card-tag">${img.tag}</span>
                    <h3>${img.titulo}</h3>
                    <p>${img.descricao}</p>
                    <small class="click-count">👁️ ${visualizacoes} ${visualizacoes === 1 ? 'visualização' : 'visualizações'}</small>
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

// ========== REGISTRO DE CLIQUES ==========
function registrarClique(src) {
    // Incrementa o contador
    cliquesData[src] = (cliquesData[src] || 0) + 1;
    
    // Salva no localStorage IMEDIATAMENTE
    salvarContadores();
    
    // Atualiza o contador visual no card correspondente
    document.querySelectorAll('.card').forEach(card => {
        const imgEl = card.querySelector('.img-container img');
        if (imgEl && imgEl.getAttribute('src') === src) {
            const countEl = card.querySelector('.click-count');
            if (countEl) {
                const novoValor = cliquesData[src];
                countEl.textContent = `👁️ ${novoValor} ${novoValor === 1 ? 'visualização' : 'visualizações'}`;
            }
        }
    });
    
    // Atualiza o ranking
    renderizarRanking();
    
    console.log(`📊 ${src} agora tem ${cliquesData[src]} visualizações`); // Debug
}

// ========== RANKING ==========
function renderizarRanking() {
    const rankingList = document.getElementById('rankingList');
    if (!rankingList) return;

    // Cria array com as imagens e seus contadores, filtra as que tem visualizações > 0
    const comVisualizacoes = imagens
        .map(img => ({ 
            ...img, 
            visualizacoes: cliquesData[img.src] || 0,
            nomeArquivo: img.src.replace('panfletos/', '').replace(/\.png$/i, '')
        }))
        .filter(img => img.visualizacoes > 0)
        .sort((a, b) => b.visualizacoes - a.visualizacoes)
        .slice(0, 10); // Top 10
    
    // Se não houver visualizações, mostra mensagem
    if (comVisualizacoes.length === 0) {
        rankingList.innerHTML = '<li style="justify-content: center;">📭 Nenhuma visualização registrada ainda. Clique em algum panfleto!</li>';
        return;
    }
    
    rankingList.innerHTML = comVisualizacoes.map((img, i) => {
        let medalha = '';
        if (i === 0) medalha = '🥇 ';
        else if (i === 1) medalha = '🥈 ';
        else if (i === 2) medalha = '🥉 ';
        else medalha = `${i+1}º `;
        
        // Limita o tamanho do nome
        let nomeExibido = img.nomeArquivo;
        if (nomeExibido.length > 35) {
            nomeExibido = nomeExibido.substring(0, 32) + '...';
        }
        
        return `
            <li>
                <span>${medalha}${nomeExibido}</span>
                <strong>${img.visualizacoes} ${img.visualizacoes === 1 ? 'vez' : 'vezes'}</strong>
            </li>
        `;
    }).join('');
}

// ========== EVENTOS DOS CARDS ==========
function adicionarEventos() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const imgContainer = card.querySelector('.img-container');
        const btn = card.querySelector('.btn-view');
        const index = parseInt(card.getAttribute('data-index'));
        
        const abrirModalHandler = (e) => {
            e.stopPropagation();
            abrirImagem(index);
        };
        
        if (imgContainer) imgContainer.addEventListener('click', abrirModalHandler);
        if (btn) btn.addEventListener('click', abrirModalHandler);
    });
}

// ========== FUNÇÕES DO MODAL ==========
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

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imagens.length;
    const imagem = imagens[currentImageIndex];
    modalImage.src = imagem.src;
    modalImage.alt = `Panfleto: ${imagem.titulo}`;
    updateCounter();
    registrarClique(imagem.src);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imagens.length) % imagens.length;
    const imagem = imagens[currentImageIndex];
    modalImage.src = imagem.src;
    modalImage.alt = `Panfleto: ${imagem.titulo}`;
    updateCounter();
    registrarClique(imagem.src);
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; 
}

// ========== CONFIGURAÇÃO DE EVENTOS GLOBAIS ==========
function configurarEventos() {
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (!modal || !modal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape': closeModal(); break;
            case 'ArrowLeft': prevImage(); break;
            case 'ArrowRight': nextImage(); break;
        }
    });
}

// ========== BOTÃO ZERAR CONTADORES (OPCIONAL) ==========
function adicionarBotaoZerar() {
    // Verifica se já existe o botão
    if (document.getElementById('resetBtn')) return;
    
    const rankingSection = document.querySelector('.ranking-section');
    if (rankingSection) {
        const resetBtn = document.createElement('button');
        resetBtn.id = 'resetBtn';
        resetBtn.textContent = '🔄 Zerar Contadores';
        resetBtn.style.cssText = `
            display: block;
            margin: 15px auto 0;
            padding: 8px 20px;
            background: #ff6b6b;
            color: white;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 0.9em;
            transition: all 0.3s ease;
        `;
        resetBtn.onmouseover = () => resetBtn.style.background = '#ff5252';
        resetBtn.onmouseout = () => resetBtn.style.background = '#ff6b6b';
        
        resetBtn.onclick = () => {
            if (confirm('⚠️ Tem certeza que deseja zerar todos os contadores? Esta ação não pode ser desfeita.')) {
                // Zera todos os contadores
                Object.keys(cliquesData).forEach(key => {
                    cliquesData[key] = 0;
                });
                salvarContadores();
                renderizarGaleria();
                renderizarRanking();
                console.log('Todos os contadores foram zerados!');
            }
        };
        
        rankingSection.appendChild(resetBtn);
    }
}

// ========== INICIALIZAÇÃO ==========
function init() {
    console.log('🚀 Inicializando aplicação...');
    console.log('📊 Contadores carregados:', cliquesData);
    
    renderizarGaleria();
    configurarEventos();
    adicionarBotaoZerar(); // Botão opcional para resetar os contadores
}

// Inicia quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
