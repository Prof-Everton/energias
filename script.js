// ========== CONFIGURAÇÃO DO JSONBIN.IO ==========
const JSONBIN_URL = 'https://api.jsonbin.io/v3/b/6a298352f5f4af5e29d8f997'; // Substitua pelo seu ID
const JSONBIN_KEY = '6a298352f5f4af5e29d8f997'; // Substitua pela sua chave

// Array com os dados das imagens
const imagens = [
    // ... (seu array de imagens aqui - igual ao anterior)
];

let votosGlobais = {};
let usuariosVotantes = {};

// Carregar votos do servidor
async function carregarDados() {
    try {
        const response = await fetch(JSONBIN_URL, {
            headers: {
                'X-Master-Key': JSONBIN_KEY
            }
        });
        const data = await response.json();
        votosGlobais = data.record.votos || {};
        usuariosVotantes = data.record.usuarios || {};
        
        // Inicializa votos para todas as imagens
        imagens.forEach(img => {
            if (votosGlobais[img.src] === undefined) {
                votosGlobais[img.src] = 0;
            }
        });
        
        console.log('✅ Dados carregados do servidor!');
        console.log('📊 Votos:', votosGlobais);
        
        // Atualiza a interface
        renderizarGaleria();
        renderizarRankingVotacao();
        renderizarTopVotados();
        
    } catch (error) {
        console.error('❌ Erro ao carregar dados:', error);
        // Fallback para localStorage
        carregarDadosLocal();
    }
}

// Salvar votos no servidor
async function salvarDados() {
    try {
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
        console.log('✅ Dados salvos no servidor!');
    } catch (error) {
        console.error('❌ Erro ao salvar dados:', error);
        salvarDadosLocal();
    }
}

// Fallback para localStorage quando offline
function carregarDadosLocal() {
    const localVotos = localStorage.getItem('votos_cache');
    if (localVotos) {
        votosGlobais = JSON.parse(localVotos);
    } else {
        imagens.forEach(img => {
            votosGlobais[img.src] = 0;
        });
    }
    
    const localUsuarios = localStorage.getItem('usuarios_cache');
    if (localUsuarios) {
        usuariosVotantes = JSON.parse(localUsuarios);
    }
    
    renderizarGaleria();
    renderizarRankingVotacao();
    renderizarTopVotados();
}

function salvarDadosLocal() {
    localStorage.setItem('votos_cache', JSON.stringify(votosGlobais));
    localStorage.setItem('usuarios_cache', JSON.stringify(usuariosVotantes));
}

// Registrar voto (versão global)
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

// Gerar ID único do usuário
function getUsuarioId() {
    let id = localStorage.getItem('usuario_id_global');
    if (!id) {
        id = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('usuario_id_global', id);
    }
    return id;
}

// Verificar se usuário já votou e em qual
function getVotoUsuario() {
    const usuarioId = getUsuarioId();
    return usuariosVotantes[usuarioId] || null;
}

// Admin: zerar votações
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

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarDados();
});
