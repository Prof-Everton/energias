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

// ========== CONFIGURAÇÕES ==========
const STORAGE_KEY_VOTOS = 'panfletos_votos';
const STORAGE_KEY_VISUALIZACOES = 'panfletos_visualizacoes';
const ADMIN_SENHA = 'admin123'; // ALTERE A SENHA AQUI!

// ========== GERENCIAMENTO DE VOTOS ==========
function carregarVotos() {
    const salvos = localStorage.getItem(STORAGE_KEY_VOTOS);
    if (salvos) {
        try {
            return JSON.parse(salvos);
        } catch(e) {
            console.error('Erro ao carregar votos:', e);
            return {};
        }
    }
    return {};
}

function salvarVotos() {
    localStorage.setItem(STORAGE_KEY_VOTOS, JSON.stringify(votosData));
    console.log('Votos salvos:', votosData);
}

let votosData = carregarVotos();

// Garante que todas as imagens tenham um contador de votos
imagens.forEach(img => {
    if (votosData[img.src] === undefined) {
        votosData[img.src] = 0;
    }
});
salvarVotos();

// ========== GERENCIAMENTO DE VISUALIZAÇÕES ==========
function carregarVisualizacoes() {
    const salvos = localStorage.getItem(STORAGE_KEY_VISUALIZACOES);
    if (salvos) {
        try {
            return JSON.parse(salvos);
        } catch(e) {
            console.error('Erro ao carregar visualizações:', e);
            return {};
        }
    }
    return {};
}

function salvarVisualizacoes() {
    localStorage.setItem(STORAGE_KEY_VISUALIZACOES, JSON.stringify(visualizacoesData));
    console.log('Visualizações salvas:', visualizacoesData);
}

let visualizacoesData = carregarVisualizacoes();

// Garante que todas as imagens tenham um contador de visualizações
imagens.forEach(img => {
    if (visualizacoesData[img.src] === undefined) {
        visualizacoesData[img.src] = 0;
    }
});
salvarVisualizacoes();

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
        
        const visualizacoes = visualizacoesData[img.src] || 0;
        const votos = votosData[img.src] || 0;
        
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
                    <div class="stats">
                        <small class="view-count">👁️ ${visualizacoes} ${visualizacoes === 1 ? 'visualização' : 'visualizações'}</small>
                        <small class="vote-count">⭐ ${votos} ${votos === 1 ? 'voto' : 'votos'}</small>
                    </div>
                </div>
                <div class="card-buttons">
                    <button class="btn-view" data-index="${index}">
                        🔍 Visualizar
                    </button>
                    <button class="btn-vote" data-index="${index}">
                        ⭐ Votar neste panfleto
                    </button>
                </div>
            </div>
        `;
        
        gallery.appendChild(card);
    });
    
    adicionarEventos();
    renderizarRankingVotacao();
    renderizarTopVotados();
}

// ========== REGISTRO DE VISUALIZAÇÕES ==========
function registrarVisualizacao(src) {
    visualizacoesData[src] = (visualizacoesData[src] || 0) + 1;
    salvarVisualizacoes();
    
    // Atualiza o contador visual no card correspondente
    document.querySelectorAll('.card').forEach(card => {
        const imgEl = card.querySelector('.img-container img');
        if (imgEl && imgEl.getAttribute('src') === src) {
            const countEl = card.querySelector('.view-count');
            if (countEl) {
                const novoValor = visualizacoesData[src];
                countEl.textContent = `👁️ ${novoValor} ${novoValor === 1 ? 'visualização' : 'visualizações'}`;
            }
        }
    });
    
    renderizarRankingVotacao();
}

// ========== REGISTRO DE VOTOS ==========
function registrarVoto(src) {
    // Verifica se o usuário já votou nesta imagem
    const votosUsuario = JSON.parse(localStorage.getItem('votos_usuario') || '{}');
    const usuarioId = getUsuarioId();
    
    if (votosUsuario[usuarioId] === src) {
        alert('❌ Você já votou neste panfleto! Cada usuário pode votar apenas uma vez.');
        return false;
    }
    
    if (votosUsuario[usuarioId]) {
        alert('❌ Você já votou em outro panfleto! Cada usuário pode votar apenas uma vez.');
        return false;
    }
    
    // Registra o voto
    votosData[src] = (votosData[src] || 0) + 1;
    salvarVotos();
    
    // Marca que este usuário já votou
    votosUsuario[usuarioId] = src;
    localStorage.setItem('votos_usuario', JSON.stringify(votosUsuario));
    
    // Atualiza o contador visual no card correspondente
    document.querySelectorAll('.card').forEach(card => {
        const imgEl = card.querySelector('.img-container img');
        if (imgEl && imgEl.getAttribute('src') === src) {
            const countEl = card.querySelector('.vote-count');
            if (countEl) {
                const novoValor = votosData[src];
                countEl.textContent = `⭐ ${novoValor} ${novoValor === 1 ? 'voto' : 'votos'}`;
            }
        }
    });
    
    renderizarRankingVotacao();
    renderizarTopVotados();
    
    alert('✅ Voto computado com sucesso! Obrigado por participar!');
    return true;
}

// Gera um ID único para o usuário baseado no navegador
function getUsuarioId() {
    let id = localStorage.getItem('usuario_id');
    if (!id) {
        id = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('usuario_id', id);
    }
    return id;
}

// ========== RANKING DE VOTAÇÃO ==========
function renderizarRankingVotacao() {
    const rankingVotos = document.getElementById('rankingVotos');
    if (!rankingVotos) return;

    // Cria array com as imagens e seus votos
    const comVotos = imagens
        .map(img => ({ 
            ...img, 
            votos: votosData[img.src] || 0,
            visualizacoes: visualizacoesData[img.src] || 0,
            nomeArquivo: img.src.replace('panfletos/', '').replace(/\.png$/i, '')
        }))
        .sort((a, b) => b.votos - a.votos)
        .slice(0, 5); // Top 5
    
    // Se não houver votos, mostra mensagem
    if (comVotos.length === 0 || comVotos.every(v => v.votos === 0)) {
        rankingVotos.innerHTML = '<li style="justify-content: center;">📭 Nenhum voto registrado ainda. Seja o primeiro a votar!</li>';
        return;
    }
    
    rankingVotos.innerHTML = comVotos.map((img, i) => {
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
                <strong>⭐ ${img.votos} ${img.votos === 1 ? 'voto' : 'votos'}</strong>
            </li>
        `;
    }).join('');
}

// ========== TOP 3 DESTAQUE (no topo da página) ==========
function renderizarTopVotados() {
    const topVotadosContainer = document.getElementById('topVotados');
    if (!topVotadosContainer) return;

    // Pega os 3 mais votados
    const top3 = imagens
        .map(img => ({ 
            ...img, 
            votos: votosData[img.src] || 0,
            nomeArquivo: img.src.replace('panfletos/', '').replace(/\.png$/i, '')
        }))
        .sort((a, b) => b.votos - a.votos)
        .slice(0, 3);
    
    // Verifica se há votos
    const totalVotos = Object.values(votosData).reduce((sum, v) => sum + v, 0);
    
    if (totalVotos === 0) {
        topVotadosContainer.innerHTML = `
            <div class="no-votes">
                <p>📊 Nenhum voto registrado ainda</p>
                <small>Vote no seu panfleto preferido!</small>
            </div>
        `;
        return;
    }
    
    // Calcula porcentagens
    const totalVotosReal = top3.reduce((sum, img) => sum + img.votos, 0);
    
    topVotadosContainer.innerHTML = `
        <div class="top-podium">
            ${top3.map((img, index) => {
                let posicao = index + 1;
                let altura = '';
                let cor = '';
                let medalha = '';
                
                if (posicao === 1) {
                    altura = 'first';
                    cor = 'gold';
                    medalha = '👑';
                } else if (posicao === 2) {
                    altura = 'second';
                    cor = 'silver';
                    medalha = '🥈';
                } else {
                    altura = 'third';
                    cor = 'bronze';
                    medalha = '🥉';
                }
                
                const porcentagem = totalVotosReal > 0 ? ((img.votos / totalVotosReal) * 100).toFixed(1) : 0;
                
                return `
                    <div class="podium-item ${altura}">
                        <div class="podium-icon">${medalha}</div>
                        <div class="podium-name">${img.nomeArquivo.substring(0, 20)}${img.nomeArquivo.length > 20 ? '...' : ''}</div>
                        <div class="podium-votes">⭐ ${img.votos} ${img.votos === 1 ? 'voto' : 'votos'}</div>
                        <div class="podium-bar" style="width: ${porcentagem}%; background: ${cor === 'gold' ? '#ffd700' : cor === 'silver' ? '#c0c0c0' : '#cd7f32'}"></div>
                        <div class="podium-percent">${porcentagem}%</div>
                    </div>
                `;
            }).join('')}
        </div>
        <div class="voting-info">
            <p>🎉 Total de votos: ${totalVotos} | 👍 Cada usuário pode votar apenas uma vez!</p>
        </div>
    `;
}

// ========== ADMIN: ZERAR VOTAÇÕES COM SENHA ==========
function adminZerarVotacoes() {
    const senha = prompt('🔒 Digite a senha de administrador para zerar todas as votações:');
    
    if (senha === ADMIN_SENHA) {
        if (confirm('⚠️ ATENÇÃO! Isso irá zerar TODOS os votos. Esta ação não pode ser desfeita. Deseja continuar?')) {
            // Zera todos os votos
            Object.keys(votosData).forEach(key => {
                votosData[key] = 0;
            });
            salvarVotos();
            
            // Limpa os registros de votos dos usuários
            localStorage.removeItem('votos_usuario');
            
            // Recarrega as visualizações
            renderizarGaleria();
            renderizarRankingVotacao();
            renderizarTopVotados();
            
            alert('✅ Todas as votações foram zeradas com sucesso!');
            console.log('Votações zeradas pelo administrador');
        }
    } else if (senha !== null) {
        alert('❌ Senha incorreta! Acesso negado.');
    }
}

// ========== EVENTOS DOS CARDS ==========
function adicionarEventos() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const imgContainer = card.querySelector('.img-container');
        const btnView = card.querySelector('.btn-view');
        const btnVote = card.querySelector('.btn-vote');
        const index = parseInt(card.getAttribute('data-index'));
        
        const abrirModalHandler = (e) => {
            e.stopPropagation();
            abrirImagem(index);
        };
        
        const votarHandler = (e) => {
            e.stopPropagation();
            const imagem = imagens[index];
            registrarVoto(imagem.src);
        };
        
        if (imgContainer) imgContainer.addEventListener('click', abrirModalHandler);
        if (btnView) btnView.addEventListener('click', abrirModalHandler);
        if (btnVote) btnVote.addEventListener('click', votarHandler);
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
    
    registrarVisualizacao(imagem.src);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imagens.length;
    const imagem = imagens[currentImageIndex];
    modalImage.src = imagem.src;
    modalImage.alt = `Panfleto: ${imagem.titulo}`;
    updateCounter();
    registrarVisualizacao(imagem.src);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imagens.length) % imagens.length;
    const imagem = imagens[currentImageIndex];
    modalImage.src = imagem.src;
    modalImage.alt = `Panfleto: ${imagem.titulo}`;
    updateCounter();
    registrarVisualizacao(imagem.src);
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
    
    // Botão admin (opcional - visível apenas para quem sabe)
    const adminBtn = document.getElementById('adminResetBtn');
    if (adminBtn) {
        adminBtn.addEventListener('click', adminZerarVotacoes);
    }
}

// ========== INICIALIZAÇÃO ==========
function init() {
    console.log('🚀 Inicializando aplicação com sistema de votação...');
    console.log('📊 Votos carregados:', votosData);
    console.log('👁️ Visualizações carregadas:', visualizacoesData);
    
    renderizarGaleria();
    configurarEventos();
}

// Inicia quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
