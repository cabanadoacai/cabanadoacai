// ============================================================
// CARRINHO - Sistema compartilhado via localStorage
// ============================================================

function getCarrinho() {
  return JSON.parse(localStorage.getItem('carrinho') || '[]');
}

function salvarCarrinho(carrinho) {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function adicionarAoCarrinho(id, nome, preco, quantidade) {
  if (quantidade <= 0) {
    removerDoCarrinho(id);
    return;
  }
  const carrinho = getCarrinho();
  const idx = carrinho.findIndex(i => i.id === id);
  if (idx >= 0) {
    carrinho[idx].quantidade = quantidade;
  } else {
    carrinho.push({ id, nome, preco, quantidade, complementos: [] });
  }
  salvarCarrinho(carrinho);
}

function removerDoCarrinho(id) {
  const carrinho = getCarrinho().filter(i => i.id !== id);
  salvarCarrinho(carrinho);
}

function salvarComplementos(id, complementos, extras) {
  const carrinho = getCarrinho();
  const idx = carrinho.findIndex(i => i.id === id);
  if (idx >= 0) {
    carrinho[idx].complementos = complementos;
    carrinho[idx].extras = extras || 0;
    salvarCarrinho(carrinho);
  }
}

// ============================================================
// CAPTURAR COMPLEMENTOS DE UM GRUPO DE CHECKBOXES
// ============================================================

function capturarComplementos(grupoId) {
  const div = document.getElementById(grupoId);
  if (!div) return { nomes: [], extras: 0 };
  const marcados = div.querySelectorAll('input[type=checkbox]:checked');
  let nomes = [];
  let extras = 0;
  marcados.forEach(cb => {
    const texto = cb.parentElement.textContent.trim();
    nomes.push(texto);
    const match = texto.match(/R\$\s*(\d+),(\d+)/);
    if (match) extras += parseFloat(match[1] + '.' + match[2]);
  });
  return { nomes, extras };
}

function monitorarComplementos(grupoId, carrinhoId) {
  const div = document.getElementById(grupoId);
  if (!div) return;
  div.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', function () {
      const { nomes, extras } = capturarComplementos(grupoId);
      salvarComplementos(carrinhoId, nomes, extras);
    });
  });
}



// ============================================================
// MAPA: id do carrinho → id do span no HTML
// ============================================================

const mapaSpans = {
  acai200:           'qtd200',
  acai300:           'qtd300',
  acai500:           'qtd500',
  comboPopular:      'qtdPopular',
  comboEnergia:      'qtdEnergia',
  comboPremium:      'qtdPremium',
  comboPrime:        'qtdPrime',
  comboCasal:        'qtdCasal',
  copoBanana300:     'qtdBanana300',
  copoBanana500:     'qtdBanana500',
  copoMorango300:    'qtdMorango300',
  copoMorango500:    'qtdMorango500',
  copoMaracuja300:   'qtdMaracuja300',
  copoMaracuja500:   'qtdMaracuja500',
  copoPacoquinha300: 'qtdPacoquinha300',
  copoPacoquinha500: 'qtdPacoquinha500',
  garrafaTrad:       'qtdTradicional',
  garrafaMorango:    'qtdMorango',
  garrafaMaracuja:   'qtdMaracuja',
  garrafaLimao:      'qtdLimao',
  garrafaPrestigio:  'qtdPrestigio',
  barca:             'qtdBarca',
  boloPrestigio:     'qtdBoloPrestigio',
  boloDoisAmores:    'qtdBoloDoisAmores',
  boloNinho:         'qtdBoloNinho',
  boloChocolate:     'qtdBoloChocolate',
  boloPacoca:        'qtdBoloPacoca',
  coxinhaFrango:     'qtdCoxinhaFrango',
  coxinhaCalabresa:  'qtdCoxinhaCalabresa',
  coxinhaGourmet:    'qtdCoxinhaGourmet',
  cachorroQuente:    'qtdCachorroQuente',
};

function getSpan(id) {
  const spanId = mapaSpans[id];
  return spanId ? document.getElementById(spanId) : null;
}

// ============================================================
// FUNÇÕES GENÉRICAS DE QUANTIDADE
// ============================================================

function aumentar(id, nome, preco) {
  const span = getSpan(id);
  if (!span) return;
  let qtd = parseInt(span.textContent) + 1;
  span.textContent = qtd;
  adicionarAoCarrinho(id, nome, preco, qtd);
}

function diminuir(id, nome, preco) {
  const span = getSpan(id);
  if (!span) return;
  let qtd = Math.max(0, parseInt(span.textContent) - 1);
  span.textContent = qtd;
  adicionarAoCarrinho(id, nome, preco, qtd);
}

// ============================================================
// COMPATIBILIDADE COM FUNÇÕES ANTIGAS
// ============================================================

function aumentar200() { aumentar('acai200', 'Açaí na Tigela 200ml', 7.90); }
function diminuir200() { diminuir('acai200', 'Açaí na Tigela 200ml', 7.90); }
function aumentar300() { aumentar('acai300', 'Açaí na Tigela 300ml', 11.90); }
function diminuir300() { diminuir('acai300', 'Açaí na Tigela 300ml', 11.90); }
function aumentar500() { aumentar('acai500', 'Açaí na Tigela 500ml', 16.90); }
function diminuir500() { diminuir('acai500', 'Açaí na Tigela 500ml', 16.90); }

function aumentarPopular()     { aumentar('comboPopular',    'Combo Popular (2x 200ml)', 14.90); }
function diminuirPopular()     { diminuir('comboPopular',    'Combo Popular (2x 200ml)', 14.90); }
function aumentarEnergia()     { aumentar('comboEnergia',    'Combo Energia (300ml + Coxinha)', 15.90); }
function diminuirEnergia()     { diminuir('comboEnergia',    'Combo Energia (300ml + Coxinha)', 15.90); }
function aumentarPremium()     { aumentar('comboPremium',    'Combo Premium (300ml + Coxinha Gourmet)', 17.90); }
function diminuirPremium()     { diminuir('comboPremium',    'Combo Premium (300ml + Coxinha Gourmet)', 17.90); }
function aumentarPrime()       { aumentar('comboPrime',      'Combo Prime (500ml + 2 Coxinhas)', 23.90); }
function diminuirPrime()       { diminuir('comboPrime',      'Combo Prime (500ml + 2 Coxinhas)', 23.90); }
function aumentarCasal()       { aumentar('comboCasal',      'Combo Casal (2x 500ml)', 29.90); }
function diminuirCasal()       { diminuir('comboCasal',      'Combo Casal (2x 500ml)', 29.90); }

function aumentarBanana300()    { aumentar('copoBanana300',   'Copo Ninho c/ Banana 300ml', 13.90); }
function diminuirBanana300()    { diminuir('copoBanana300',   'Copo Ninho c/ Banana 300ml', 13.90); }
function aumentarBanana500()    { aumentar('copoBanana500',   'Copo Ninho c/ Banana 500ml', 18.90); }
function diminuirBanana500()    { diminuir('copoBanana500',   'Copo Ninho c/ Banana 500ml', 18.90); }
function aumentarMorango300()   { aumentar('copoMorango300',  'Copo Ninho c/ Morango 300ml', 15.90); }
function diminuirMorango300()   { diminuir('copoMorango300',  'Copo Ninho c/ Morango 300ml', 15.90); }
function aumentarMorango500()   { aumentar('copoMorango500',  'Copo Ninho c/ Morango 500ml', 20.90); }
function diminuirMorango500()   { diminuir('copoMorango500',  'Copo Ninho c/ Morango 500ml', 20.90); }
function aumentarMaracuja300()  { aumentar('copoMaracuja300', 'Copo Maracujá c/ Biscoito 300ml', 13.90); }
function diminuirMaracuja300()  { diminuir('copoMaracuja300', 'Copo Maracujá c/ Biscoito 300ml', 13.90); }
function aumentarMaracuja500()  { aumentar('copoMaracuja500', 'Copo Maracujá c/ Biscoito 500ml', 18.90); }
function diminuirMaracuja500()  { diminuir('copoMaracuja500', 'Copo Maracujá c/ Biscoito 500ml', 18.90); }
function aumentarPacoquinha300(){ aumentar('copoPacoquinha300','Copo Paçoquinha 300ml', 13.90); }
function diminuirPacoquinha300(){ diminuir('copoPacoquinha300','Copo Paçoquinha 300ml', 13.90); }
function aumentarPacoquinha500(){ aumentar('copoPacoquinha500','Copo Paçoquinha 500ml', 18.90); }
function diminuirPacoquinha500(){ diminuir('copoPacoquinha500','Copo Paçoquinha 500ml', 18.90); }

function aumentarTradicional()  { aumentar('garrafaTrad',      'Garrafa Tradicional 500ml', 15.90); }
function diminuirTradicional()  { diminuir('garrafaTrad',      'Garrafa Tradicional 500ml', 15.90); }
function aumentarMorango()      { aumentar('garrafaMorango',   'Garrafa Mousse de Morango 500ml', 17.90); }
function diminuirMorango()      { diminuir('garrafaMorango',   'Garrafa Mousse de Morango 500ml', 17.90); }
function aumentarMaracuja()     { aumentar('garrafaMaracuja',  'Garrafa Mousse de Maracujá 500ml', 17.90); }
function diminuirMaracuja()     { diminuir('garrafaMaracuja',  'Garrafa Mousse de Maracujá 500ml', 17.90); }
function aumentarLimao()        { aumentar('garrafaLimao',     'Garrafa Mousse de Limão 500ml', 17.90); }
function diminuirLimao()        { diminuir('garrafaLimao',     'Garrafa Mousse de Limão 500ml', 17.90); }
function aumentarPrestigio()    { aumentar('garrafaPrestigio', 'Garrafa Prestígio 500ml', 17.90); }
function diminuirPrestigio()    { diminuir('garrafaPrestigio', 'Garrafa Prestígio 500ml', 17.90); }

function aumentarBarca()        { aumentar('barca',            'Barca Monte do Seu Jeito', 18.00); }
function diminuirBarca()        { diminuir('barca',            'Barca Monte do Seu Jeito', 18.00); }

function aumentarBoloPrestigio()  { aumentar('boloPrestigio',  'Bolo de Prestígio', 10.00); }
function diminuirBoloPrestigio()  { diminuir('boloPrestigio',  'Bolo de Prestígio', 10.00); }
function aumentarBoloDoisAmores() { aumentar('boloDoisAmores', 'Bolo Dois Amores', 10.00); }
function diminuirBoloDoisAmores() { diminuir('boloDoisAmores', 'Bolo Dois Amores', 10.00); }
function aumentarBoloNinho()      { aumentar('boloNinho',      'Bolo de Ninho', 10.00); }
function diminuirBoloNinho()      { diminuir('boloNinho',      'Bolo de Ninho', 10.00); }
function aumentarBoloChocolate()  { aumentar('boloChocolate',  'Bolo de Chocolate', 10.00); }
function diminuirBoloChocolate()  { diminuir('boloChocolate',  'Bolo de Chocolate', 10.00); }
function aumentarBoloPacoca()     { aumentar('boloPacoca',     'Bolo de Paçoca', 10.00); }
function diminuirBoloPacoca()     { diminuir('boloPacoca',     'Bolo de Paçoca', 10.00); }

function aumentarCoxinhaFrango()    { aumentar('coxinhaFrango',    'Coxinha Tradicional - Frango', 5.00); }
function diminuirCoxinhaFrango()    { diminuir('coxinhaFrango',    'Coxinha Tradicional - Frango', 5.00); }
function aumentarCoxinhaCalabresa() { aumentar('coxinhaCalabresa', 'Coxinha Tradicional - Calabresa', 5.00); }
function diminuirCoxinhaCalabresa() { diminuir('coxinhaCalabresa', 'Coxinha Tradicional - Calabresa', 5.00); }
function aumentarCoxinhaGourmet()   { aumentar('coxinhaGourmet',   'Coxinha Gourmet (Farinha Panko)', 7.00); }
function diminuirCoxinhaGourmet()   { diminuir('coxinhaGourmet',   'Coxinha Gourmet (Farinha Panko)', 7.00); }
function aumentarCachorroQuente()   { aumentar('cachorroQuente',   'Cachorro-Quente Tradicional', 7.00); }
function diminuirCachorroQuente()   { diminuir('cachorroQuente',   'Cachorro-Quente Tradicional', 7.00); }

// ============================================================
// ABRIR/FECHAR OPÇÕES
// ============================================================

function abrirProduto() {
  const el = document.getElementById("opcoes");
  if (el) el.style.display = el.style.display === "block" ? "none" : "block";
}
function abrirProduto300() {
  const el = document.getElementById("opcoes300");
  if (el) el.style.display = el.style.display === "block" ? "none" : "block";
}
function abrirProduto500() {
  const el = document.getElementById("opcoes500");
  if (el) el.style.display = el.style.display === "block" ? "none" : "block";
}
function abrirNinhoBanana() {
  const el = document.getElementById("ninhoBanana");
  if (el) el.style.display = el.style.display === "block" ? "none" : "block";
}
function abrirNinhoMorango() {
  const el = document.getElementById("ninhoMorango");
  if (el) el.style.display = el.style.display === "block" ? "none" : "block";
}
function abrirMaracuja() {
  const el = document.getElementById("maracuja");
  if (el) el.style.display = el.style.display === "block" ? "none" : "block";
}
function abrirPacoquinha() {
  const el = document.getElementById("pacoquinha");
  if (el) el.style.display = el.style.display === "block" ? "none" : "block";
}
function abrirBarca() {
  const el = document.getElementById("opcoesBarca");
  if (el) el.style.display = el.style.display === "block" ? "none" : "block";
}

// ============================================================
// LIMITE DE COMPLEMENTOS
// ============================================================

function configurarLimiteComplementos(seletor, limite) {
  const checkboxes = document.querySelectorAll(seletor);
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      const marcados = document.querySelectorAll(seletor + ':checked');
      if (marcados.length > limite) {
        this.checked = false;
        alert('Escolha no máximo ' + limite + ' complementos.');
      }
    });
  });
}

// ============================================================
// WINDOW ONLOAD
// ============================================================

window.onload = function () {
  // Limites de complementos
  configurarLimiteComplementos('.complemento', 3);
  configurarLimiteComplementos('.complemento300', 3);

  // Monitorar complementos do açaí e barca para salvar no carrinho
  monitorarComplementos('opcoes',      'acai200');
  monitorarComplementos('opcoes300',   'acai300');
  monitorarComplementos('opcoes500',   'acai500');
  monitorarComplementos('opcoesBarca', 'barca');

  // Restaurar quantidades salvas
  restaurarQuantidades();

  // Se estiver na página do carrinho, renderizar
  if (document.getElementById('itensCarrinho')) {
    renderizarCarrinho();
  }
};

// ============================================================
// RESTAURAR QUANTIDADES AO VOLTAR PARA UMA PÁGINA
// ============================================================

function restaurarQuantidades() {
  const carrinho = getCarrinho();
  carrinho.forEach(item => {
    const spanId = mapaSpans[item.id];
    if (spanId) {
      const span = document.getElementById(spanId);
      if (span) span.textContent = item.quantidade;
    }
  });
}

// ============================================================
// PÁGINA DO CARRINHO
// ============================================================

function renderizarCarrinho() {
  const carrinho = getCarrinho();
  const container = document.getElementById('itensCarrinho');
  const totalEl = document.getElementById('totalPedido');

  if (carrinho.length === 0) {
    container.innerHTML = '<p style="color:#ffd700;">Seu carrinho está vazio.</p>';
    totalEl.textContent = 'R$ 0,00';
    return;
  }

  let total = 0;
  let html = '';

  carrinho.forEach(item => {
    const extras = item.extras || 0;
const subtotal = (item.preco + extras) * item.quantidade;
    total += subtotal;

    let complementosHtml = '';
    if (item.complementos && item.complementos.length > 0) {
      complementosHtml = `<p style="color:rgba(255,255,255,0.7); font-size:14px; margin:4px 0 0 0;">
        📝 ${item.complementos.join(', ')}
      </p>`;
    }

    html += `
      <div class="produto" style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <p style="color:#ffd700; font-weight:bold; margin:0;">${item.nome}</p>
          <p style="color:white; margin:4px 0 0 0;">
            ${item.quantidade}x — R$ ${subtotal.toFixed(2).replace('.', ',')}
          </p>
          ${complementosHtml}
        </div>
        <button onclick="removerItem('${item.id}')"
          style="background:transparent; border:1px solid rgba(255,255,255,0.2);
                 color:#ff6b6b; border-radius:10px; padding:8px 14px; font-size:18px; flex-shrink:0;">
          ✕
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
  totalEl.textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
}

function removerItem(id) {
  removerDoCarrinho(id);
  renderizarCarrinho();
}

// ============================================================
// ENVIAR PEDIDO VIA WHATSAPP
// ============================================================

function enviarPedido() {
  const nome = document.getElementById('nome').value.trim();
  const endereco = document.getElementById('endereco').value.trim();
  const pagamento = document.getElementById('pagamento').value;

  if (!nome || !endereco || !pagamento) {
    alert('Por favor, preencha seu nome, endereço e forma de pagamento.');
    return;
  }

  const carrinho = getCarrinho();
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  let mensagem = `*Pedido - Cabana do Açaí* 🍇\n\n`;
  mensagem += `*Cliente:* ${nome}\n`;
  mensagem += `*Endereço:* ${endereco}\n`;
  mensagem += `*Pagamento:* ${pagamento}\n\n`;
  mensagem += `*Itens:*\n`;

  let total = 0;
  carrinho.forEach(item => {
    const extras = item.extras || 0;
const subtotal = (item.preco + extras) * item.quantidade;
total += subtotal;
mensagem += `• ${item.quantidade}x ${item.nome} — R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    if (item.complementos && item.complementos.length > 0) {
      mensagem += `  📝 ${item.complementos.join(', ')}\n`;
    }
  });

  mensagem += `\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*`;

  // Substitua pelo número do WhatsApp da loja (somente números, com DDI)
  const numero = '55081984542123';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  localStorage.removeItem('carrinho');
  window.open(url, '_blank');
}
