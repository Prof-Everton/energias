// ========== CONFIGURAÇÃO DO JSONBIN.IO ==========
// URL CORRETA do JSONBin.io (você só tinha o ID, faltava a URL completa)
const JSONBIN_URL = 'https://api.jsonbin.io/v3/b/6a298352f5f4af5e29d8f997'; // URL completa!
const JSONBIN_KEY = '$2a$10$yGOnoe1EUipmwj311L6cl.sMZQulA2xrlQqb07R5MaX3WAUFTzwkm'; // Sua chave API

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

// ========== ELEMENTOS DO DOM ==========
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageCounter = document.getElementById('imageCounter');

let currentImageIndex = 0;
let votosGlobais = {};
let usuariosVotantes = {};

// ========== FUNÇÃO DO MODAL ==========
function updateCounter() {
    if (imageCounter) {
        imageCounter.textContent = `📄 ${currentImageIndex + 1} de ${imagens.length}`;
    }
}

// ========== RENDERIZAR GALERIA ==========
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
        
        const votos = votosGlobais[img.src] || 0;
        
        card.innerHTML = `
            <div class="img-container">
                <img src="${img.src}" 
                     alt="Panfleto sobre ${img.titulo}" 
                     loading="lazy"
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/300x250?text=Imagem+Não+Encontrada&color=ff6b6b'; this.alt='Imagem não disponível'">
            </div>
            <div class="card-content">
                <div>
                    <span class="card-tag">${img.tag}</span>
                    <h3>${img.titulo}</h3>
                    <p>${img.descricao}</p>
                    <div class="stats">
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
}

// ========== CARREGAR DADOS DO SERVIDOR ==========
async function carregarDados() {
    try {
        console.log('🔄 Tentando carregar dados do JSONBin.io...');
        
        const response = await fetch(JSONBIN_URL, {
            method: 'GET',
            headers: {
                'X-Master-Key': JSONBIN_KEY,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('📦 Dados recebidos:', data);
        
        // Verifica se o bin existe e tem a estrutura correta
        if (data.record) {
            votosGlobais = data.record.votos || {};
            usuariosVotantes = data.record.usuarios || {};
        } else {
            // Se o bin estiver vazio, cria estrutura padrão
            votosGlobais = {};
            usuariosVotantes = {};
        }
        
        // Inicializa votos para todas as imagens
        imagens.forEach(img => {
            if (votosGlobais[img.src] === undefined) {
                votosGlobais[img.src] = 0;
            }
        });
        
        console.log('✅ Dados carregados com sucesso!');
        console.log('📊 Votos:', votosGlobais);
        
        // Atualiza a interface
        renderizarGaleria();
        renderizarRankingVotacao();
        renderizarTopVotados();
        
    } catch (error) {
        console.error('❌ Erro ao carregar dados:', error);
        console.log('🔄 Usando fallback localStorage...');
        carregarDadosLocal();
    }
}

// ========== SALVAR DADOS NO SERVIDOR ==========
async function salvarDados() {
    try {
        console.log('💾 Salvando dados no JSONBin.io...');
        
        const response = await fetch(JSONBIN_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_KEY
            },
            body: JSON.stringify({
                votos: votosGlobais,
                usuarios: usuariosVotantes,
                ultimaAtualizacao: new Date().toISOString()
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        console.log('✅ Dados salvos com sucesso no servidor!');
        
    } catch (error) {
        console.error('❌ Erro ao salvar dados:', error);
        console.log('💾 Salvando apenas no localStorage...');
        salvarDadosLocal();
    }
}

// ========== FALLBACK LOCALSTORAGE ==========
function carregarDadosLocal() {
    const localVotos = localStorage.getItem('votos_cache');
    const localUsuarios = localStorage.getItem('usuarios_cache');
    
    if (localVotos) {
        votosGlobais = JSON.parse(localVotos);
    } else {
        imagens.forEach(img => {
            votosGlobais[img.src] = 0;
        });
    }
    
    if (localUsuarios) {
        usuariosVotantes = JSON.parse(localUsuarios);
    } else {
        usuariosVotantes = {};
    }
    
    console.log('📊 Dados carregados do localStorage:', votosGlobais);
    
    renderizarGaleria();
    renderizarRankingVotacao();
    renderizarTopVotados();
}

function salvarDadosLocal() {
    localStorage.setItem('votos_cache', JSON.stringify(votosGlobais));
    localStorage.setItem('usuarios_cache', JSON.stringify(usuariosVotantes));
    console.log('💾 Dados salvos no localStorage');
}

// ========== REGISTRAR VOTO ==========
async function registrarVoto(src, nomeImagem) {
    const usuarioId = getUsuarioId();
    
    // Verifica se usuário já votou
    if (usuariosVotantes[usuarioId]) {
        alert(`❌ Você já votou no panfleto "${usuariosVotantes[usuarioId]}"! Cada usuário pode votar apenas uma vez.`);
        return false;
    }
    
    // Confirma o voto
    if (confirm(`⭐ Confirmar voto para "${nomeImagem}"? Você não poderá votar novamente.`)) {
        // Registra o voto
        votosGlobais[src] = (votosGlobais[src] || 0) + 1;
        usuariosVotantes[usuarioId] = nomeImagem;
        
        // Salva no servidor
        await salvarDados();
        
        // Atualiza a interface
        renderizarGaleria();
        renderizarRankingVotacao();
        renderizarTopVotados();
        
        alert('✅ Voto computado com sucesso! Obrigado por participar!');
        return true;
    }
    return false;
}

// ========== ID DO USUÁRIO ==========
function getUsuarioId() {
    let id = localStorage.getItem('usuario_id_global');
    if (!id) {
        id = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('usuario_id_global', id);
    }
    return id;
}

// ========== RANKING DE VOTAÇÃO ==========
function renderizarRankingVotacao() {
    const rankingVotos = document.getElementById('rankingVotos');
    if (!rankingVotos) return;

    const comVotos = imagens
        .map(img => ({ 
            ...img, 
            votos: votosGlobais[img.src] || 0,
            nomeArquivo: img.src.replace('panfletos/', '').replace(/\.png$/i, '')
        }))
        .sort((a, b) => b.votos - a.votos)
        .slice(0, 5);
    
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

// ========== TOP 3 VOTADOS ==========
function renderizarTopVotados() {
    const topVotadosContainer = document.getElementById('topVotados');
    if (!topVotadosContainer) return;

    const top3 = imagens
        .map(img => ({ 
            ...img, 
            votos: votosGlobais[img.src] || 0,
            nomeArquivo: img.src.replace('panfletos/', '').replace(/\.png$/i, '')
        }))
        .sort((a, b) => b.votos - a.votos)
        .slice(0, 3);
    
    const totalVotos = Object.values(votosGlobais).reduce((sum, v) => sum + v, 0);
    
    if (totalVotos === 0) {
        topVotadosContainer.innerHTML = `
            <div class="no-votes">
                <p>📊 Nenhum voto registrado ainda</p>
                <small>Vote no seu panfleto preferido!</small>
            </div>
        `;
        return;
    }
    
    topVotadosContainer.innerHTML = `
        <div class="top-podium">
            ${top3.map((img, index) => {
                let altura = '';
                let cor = '';
                let medalha = '';
                
                if (index === 0) {
                    altura = 'first';
                    cor = 'gold';
                    medalha = '👑';
                } else if (index === 1) {
                    altura = 'second';
                    cor = 'silver';
                    medalha = '🥈';
                } else {
                    altura = 'third';
                    cor = 'bronze';
                    medalha = '🥉';
                }
                
                const porcentagem = totalVotos > 0 ? ((img.votos / totalVotos) * 100).toFixed(1) : 0;
                
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
            const nomeExibido = imagem.src.replace('panfletos/', '').replace(/\.png$/i, '');
            registrarVoto(imagem.src, nomeExibido);
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
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imagens.length;
    const imagem = imagens[currentImageIndex];
    modalImage.src = imagem.src;
    modalImage.alt = `Panfleto: ${imagem.titulo}`;
    updateCounter();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imagens.length) % imagens.length;
    const imagem = imagens[currentImageIndex];
    modalImage.src = imagem.src;
    modalImage.alt = `Panfleto: ${imagem.titulo}`;
    updateCounter();
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; 
}

// ========== ADMIN: ZERAR VOTAÇÕES ==========
async function adminZerarVotacoes() {
    const senha = prompt('🔒 Digite a senha de administrador para zerar todas as votações:');
    
    if (senha === 'admin123') {
        if (confirm('⚠️ ATENÇÃO! Isso irá zerar TODOS os votos globalmente. Esta ação não pode ser desfeita. Deseja continuar?')) {
            // Zera todos os votos
            Object.keys(votosGlobais).forEach(key => {
                votosGlobais[key] = 0;
            });
            usuariosVotantes = {};
            
            // Salva no servidor
            await salvarDados();
            
            // Recarrega a interface
            renderizarGaleria();
            renderizarRankingVotacao();
            renderizarTopVotados();
            
            alert('✅ Todas as votações foram zeradas com sucesso!');
        }
    } else if (senha !== null) {
        alert('❌ Senha incorreta! Acesso negado.');
    }
}

// ========== CONFIGURAR EVENTOS GLOBAIS ==========
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
    
    const adminBtn = document.getElementById('adminResetBtn');
    if (adminBtn) {
        adminBtn.addEventListener('click', adminZerarVotacoes);
    }
}

// ========== INICIALIZAÇÃO ==========
function init() {
    console.log('🚀 Inicializando aplicação...');
    console.log('📡 JSONBin URL:', JSONBIN_URL);
    configurarEventos();
    carregarDados();
}

// Iniciar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
