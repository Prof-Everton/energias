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
// URL do seu Google Sheets (você precisa criar e configurar)
// Vou usar uma solução alternativa com JSONBin.io (gratuito)

const API_URL = 'https://api.jsonbin.io/v3/b/SEU-BIN-ID'; // Você precisa criar uma conta
const API_KEY = '$2a$10$sua-chave-aqui'; // Sua chave da API

// Alternativa mais simples: usar um serviço gratuito chamado "MockAPI" ou "Sheetsu"

// ========== SISTEMA DE VOTAÇÃO GLOBAL ==========
let votosGlobais = {};
let usuariosVotantes = {};

// Carregar votos do servidor
async function carregarVotosGlobais() {
    try {
        // Usando JSONBin.io como exemplo (serviço gratuito)
        const response = await fetch('https://api.jsonbin.io/v3/b/67c8f3a8acd3cb34a8e9f5a4', {
            headers: {
                'X-Master-Key': '$2a$10$ExemploDeChave'
            }
        });
        const data = await response.json();
        votosGlobais = data.record.votos || {};
        usuariosVotantes = data.record.usuarios || {};
        
        // Inicializa votos para imagens novas
        imagens.forEach(img => {
            if (votosGlobais[img.src] === undefined) {
                votosGlobais[img.src] = 0;
            }
        });
        
        console.log('Votos carregados do servidor:', votosGlobais);
        renderizarGaleria();
        renderizarRankingVotacao();
        renderizarTopVotados();
        
    } catch (error) {
        console.error('Erro ao carregar votos:', error);
        // Fallback para localStorage
        carregarVotosLocal();
    }
}

// Salvar votos no servidor
async function salvarVotosGlobais() {
    try {
        const response = await fetch('https://api.jsonbin.io/v3/b/SEU-BIN-ID', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2a$10$sua-chave-aqui'
            },
            body: JSON.stringify({
                votos: votosGlobais,
                usuarios: usuariosVotantes,
                ultimaAtualizacao: new Date().toISOString()
            })
        });
        console.log('Votos salvos no servidor');
    } catch (error) {
        console.error('Erro ao salvar votos:', error);
        salvarVotosLocal();
    }
}
