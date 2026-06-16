function abrirProduto() {

  const opcoes = document.getElementById("opcoes");

  if (opcoes.style.display === "block") {

    opcoes.style.display = "none";

  } else {

    opcoes.style.display = "block";

  }

}

window.onload = function() {

  const checkboxes = document.querySelectorAll('.complemento');

  checkboxes.forEach(function(checkbox) {

    checkbox.addEventListener('change', function() {

      const marcados = document.querySelectorAll('.complemento:checked');

      if (marcados.length > 3) {

        this.checked = false;

        alert("Escolha no máximo 3 complementos.");

      }

    });

  });

};


function abrirProduto300() {

  const opcoes = document.getElementById("opcoes300");

  if (opcoes.style.display === "block") {

    opcoes.style.display = "none";

  } else {

    opcoes.style.display = "block";

  }

}

const checkboxes300 = document.querySelectorAll('.complemento300');

checkboxes300.forEach(function(checkbox) {

  checkbox.addEventListener('change', function() {

    const marcados = document.querySelectorAll('.complemento300:checked');

    if (marcados.length > 3) {

      this.checked = false;

      alert("Escolha no máximo 3 complementos.");

    }

  });

});


function abrirProduto500() {

  const opcoes = document.getElementById("opcoes500");

  if (opcoes.style.display === "block") {

    opcoes.style.display = "none";

  } else {

    opcoes.style.display = "block";

  }

}

function abrirNinhoBanana() {

  const item = document.getElementById("ninhoBanana");

  if (item.style.display === "block") {

    item.style.display = "none";

  } else {

    item.style.display = "block";

  }

}

function abrirNinhoMorango() {

  const item = document.getElementById("ninhoMorango");

  if (item.style.display === "block") {

    item.style.display = "none";

  } else {

    item.style.display = "block";

  }

}

function abrirMaracuja() {

  const item = document.getElementById("maracuja");

  if (item.style.display === "block") {

    item.style.display = "none";

  } else {

    item.style.display = "block";

  }

}

function abrirPacoquinha() {

  const item = document.getElementById("pacoquinha");

  if (item.style.display === "block") {

    item.style.display = "none";

  } else {

    item.style.display = "block";

  }

}

function abrirBarca() {

  const opcoes = document.getElementById("opcoesBarca");

  if (opcoes.style.display === "block") {

    opcoes.style.display = "none";

  } else {

    opcoes.style.display = "block";

  }

}

let quantidade200 = 0;

function aumentar200() {

  quantidade200++;

  document.getElementById("qtd200").textContent = quantidade200;

}

function diminuir200() {

  if (quantidade200 > 0) {

    quantidade200--;

    document.getElementById("qtd200").textContent = quantidade200;

  }

}

let quantidade300 = 0;

function aumentar300() {

  quantidade300++;

  document.getElementById("qtd300").textContent = quantidade300;

}

function diminuir300() {

  if (quantidade300 > 0) {

    quantidade300--;

    document.getElementById("qtd300").textContent = quantidade300;

  }

}

let quantidade500 = 0;

function aumentar500() {

  quantidade500++;

  document.getElementById("qtd500").textContent = quantidade500;

}

function diminuir500() {

  if (quantidade500 > 0) {

    quantidade500--;

    document.getElementById("qtd500").textContent = quantidade500;

  }

}

let quantidadePopular = 0;

function aumentarPopular() {

  quantidadePopular++;

  document.getElementById("qtdPopular").textContent = quantidadePopular;

}

function diminuirPopular() {

  if (quantidadePopular > 0) {

    quantidadePopular--;

    document.getElementById("qtdPopular").textContent = quantidadePopular;

  }

}


let quantidadeEnergia = 0;

function aumentarEnergia() {

  quantidadeEnergia++;

  document.getElementById("qtdEnergia").textContent = quantidadeEnergia;

}

function diminuirEnergia() {

  if (quantidadeEnergia > 0) {

    quantidadeEnergia--;

    document.getElementById("qtdEnergia").textContent = quantidadeEnergia;

  }

}


let quantidadePremium = 0;

function aumentarPremium() {

  quantidadePremium++;

  document.getElementById("qtdPremium").textContent = quantidadePremium;

}

function diminuirPremium() {

  if (quantidadePremium > 0) {

    quantidadePremium--;

    document.getElementById("qtdPremium").textContent = quantidadePremium;

  }

}


let quantidadePrime = 0;

function aumentarPrime() {

  quantidadePrime++;

  document.getElementById("qtdPrime").textContent = quantidadePrime;

}

function diminuirPrime() {

  if (quantidadePrime > 0) {

    quantidadePrime--;

    document.getElementById("qtdPrime").textContent = quantidadePrime;

  }

}


let quantidadeCasal = 0;

function aumentarCasal() {

  quantidadeCasal++;

  document.getElementById("qtdCasal").textContent = quantidadeCasal;

}

function diminuirCasal() {

  if (quantidadeCasal > 0) {

    quantidadeCasal--;

    document.getElementById("qtdCasal").textContent = quantidadeCasal;

  }

}

let quantidadeTradicional = 0;

function aumentarTradicional() {

  quantidadeTradicional++;

  document.getElementById("qtdTradicional").textContent = quantidadeTradicional;

}

function diminuirTradicional() {

  if (quantidadeTradicional > 0) {

    quantidadeTradicional--;

    document.getElementById("qtdTradicional").textContent = quantidadeTradicional;

  }

}


let quantidadeMorango = 0;

function aumentarMorango() {

  quantidadeMorango++;

  document.getElementById("qtdMorango").textContent = quantidadeMorango;

}

function diminuirMorango() {

  if (quantidadeMorango > 0) {

    quantidadeMorango--;

    document.getElementById("qtdMorango").textContent = quantidadeMorango;

  }

}


let quantidadeMaracuja = 0;

function aumentarMaracuja() {

  quantidadeMaracuja++;

  document.getElementById("qtdMaracuja").textContent = quantidadeMaracuja;

}

function diminuirMaracuja() {

  if (quantidadeMaracuja > 0) {

    quantidadeMaracuja--;

    document.getElementById("qtdMaracuja").textContent = quantidadeMaracuja;

  }

}


let quantidadeLimao = 0;

function aumentarLimao() {

  quantidadeLimao++;

  document.getElementById("qtdLimao").textContent = quantidadeLimao;

}

function diminuirLimao() {

  if (quantidadeLimao > 0) {

    quantidadeLimao--;

    document.getElementById("qtdLimao").textContent = quantidadeLimao;

  }

}


let quantidadePrestigio = 0;

function aumentarPrestigio() {

  quantidadePrestigio++;

  document.getElementById("qtdPrestigio").textContent = quantidadePrestigio;

}

function diminuirPrestigio() {

  if (quantidadePrestigio > 0) {

    quantidadePrestigio--;

    document.getElementById("qtdPrestigio").textContent = quantidadePrestigio;

  }

}

let quantidadeBarca = 0;

function aumentarBarca() {

  quantidadeBarca++;

  document.getElementById("qtdBarca").textContent = quantidadeBarca;

}

function diminuirBarca() {

  if (quantidadeBarca > 0) {

    quantidadeBarca--;

    document.getElementById("qtdBarca").textContent = quantidadeBarca;

  }

}

let quantidadeBanana300 = 0;

function aumentarBanana300() {

  quantidadeBanana300++;

  document.getElementById("qtdBanana300").textContent = quantidadeBanana300;

}

function diminuirBanana300() {

  if (quantidadeBanana300 > 0) {

    quantidadeBanana300--;

    document.getElementById("qtdBanana300").textContent = quantidadeBanana300;

  }

}

let quantidadeBanana500 = 0;

function aumentarBanana500() {

  quantidadeBanana500++;

  document.getElementById("qtdBanana500").textContent = quantidadeBanana500;

}

function diminuirBanana500() {

  if (quantidadeBanana500 > 0) {

    quantidadeBanana500--;

    document.getElementById("qtdBanana500").textContent = quantidadeBanana500;

  }

}

let quantidadeMorango300 = 0;

function aumentarMorango300() {

  quantidadeMorango300++;

  document.getElementById("qtdMorango300").textContent = quantidadeMorango300;

}

function diminuirMorango300() {

  if (quantidadeMorango300 > 0) {

    quantidadeMorango300--;

    document.getElementById("qtdMorango300").textContent = quantidadeMorango300;

  }

}


let quantidadeMorango500 = 0;

function aumentarMorango500() {

  quantidadeMorango500++;

  document.getElementById("qtdMorango500").textContent = quantidadeMorango500;

}

function diminuirMorango500() {

  if (quantidadeMorango500 > 0) {

    quantidadeMorango500--;

    document.getElementById("qtdMorango500").textContent = quantidadeMorango500;

  }

}

let quantidadeMaracuja300 = 0;

function aumentarMaracuja300() {

  quantidadeMaracuja300++;

  document.getElementById("qtdMaracuja300").textContent = quantidadeMaracuja300;

}

function diminuirMaracuja300() {

  if (quantidadeMaracuja300 > 0) {

    quantidadeMaracuja300--;

    document.getElementById("qtdMaracuja300").textContent = quantidadeMaracuja300;

  }

}


let quantidadeMaracuja500 = 0;

function aumentarMaracuja500() {

  quantidadeMaracuja500++;

  document.getElementById("qtdMaracuja500").textContent = quantidadeMaracuja500;

}

function diminuirMaracuja500() {

  if (quantidadeMaracuja500 > 0) {

    quantidadeMaracuja500--;

    document.getElementById("qtdMaracuja500").textContent = quantidadeMaracuja500;

  }

}

let quantidadePacoquinha300 = 0;

function aumentarPacoquinha300() {

  quantidadePacoquinha300++;

  document.getElementById("qtdPacoquinha300").textContent = quantidadePacoquinha300;

}

function diminuirPacoquinha300() {

  if (quantidadePacoquinha300 > 0) {

    quantidadePacoquinha300--;

    document.getElementById("qtdPacoquinha300").textContent = quantidadePacoquinha300;

  }

}


let quantidadePacoquinha500 = 0;

function aumentarPacoquinha500() {

  quantidadePacoquinha500++;

  document.getElementById("qtdPacoquinha500").textContent = quantidadePacoquinha500;

}

function diminuirPacoquinha500() {

  if (quantidadePacoquinha500 > 0) {

    quantidadePacoquinha500--;

    document.getElementById("qtdPacoquinha500").textContent = quantidadePacoquinha500;

  }

}

let quantidadeBoloPrestigio = 0;

function aumentarBoloPrestigio() {

  quantidadeBoloPrestigio++;

  document.getElementById("qtdBoloPrestigio").textContent = quantidadeBoloPrestigio;

}

function diminuirBoloPrestigio() {

  if (quantidadeBoloPrestigio > 0) {

    quantidadeBoloPrestigio--;

    document.getElementById("qtdBoloPrestigio").textContent = quantidadeBoloPrestigio;

  }

}

let quantidadeBoloDoisAmores = 0;

function aumentarBoloDoisAmores() {

  quantidadeBoloDoisAmores++;

  document.getElementById("qtdBoloDoisAmores").textContent = quantidadeBoloDoisAmores;

}

function diminuirBoloDoisAmores() {

  if (quantidadeBoloDoisAmores > 0) {

    quantidadeBoloDoisAmores--;

    document.getElementById("qtdBoloDoisAmores").textContent = quantidadeBoloDoisAmores;

  }

}

let quantidadeBoloNinho = 0;

function aumentarBoloNinho() {

  quantidadeBoloNinho++;

  document.getElementById("qtdBoloNinho").textContent = quantidadeBoloNinho;

}

function diminuirBoloNinho() {

  if (quantidadeBoloNinho > 0) {

    quantidadeBoloNinho--;

    document.getElementById("qtdBoloNinho").textContent = quantidadeBoloNinho;

  }

}

let quantidadeBoloChocolate = 0;

function aumentarBoloChocolate() {

  quantidadeBoloChocolate++;

  document.getElementById("qtdBoloChocolate").textContent = quantidadeBoloChocolate;

}

function diminuirBoloChocolate() {

  if (quantidadeBoloChocolate > 0) {

    quantidadeBoloChocolate--;

    document.getElementById("qtdBoloChocolate").textContent = quantidadeBoloChocolate;

  }

}

let quantidadeBoloPacoca = 0;

function aumentarBoloPacoca() {

  quantidadeBoloPacoca++;

  document.getElementById("qtdBoloPacoca").textContent = quantidadeBoloPacoca;

}

function diminuirBoloPacoca() {

  if (quantidadeBoloPacoca > 0) {

    quantidadeBoloPacoca--;

    document.getElementById("qtdBoloPacoca").textContent = quantidadeBoloPacoca;

  }

}

let quantidadeCoxinhaFrango = 0;

function aumentarCoxinhaFrango() {

  quantidadeCoxinhaFrango++;

  document.getElementById("qtdCoxinhaFrango").textContent = quantidadeCoxinhaFrango;

}

function diminuirCoxinhaFrango() {

  if (quantidadeCoxinhaFrango > 0) {

    quantidadeCoxinhaFrango--;

    document.getElementById("qtdCoxinhaFrango").textContent = quantidadeCoxinhaFrango;

  }

}

let quantidadeCoxinhaCalabresa = 0;

function aumentarCoxinhaCalabresa() {

  quantidadeCoxinhaCalabresa++;

  document.getElementById("qtdCoxinhaCalabresa").textContent = quantidadeCoxinhaCalabresa;

}

function diminuirCoxinhaCalabresa() {

  if (quantidadeCoxinhaCalabresa > 0) {

    quantidadeCoxinhaCalabresa--;

    document.getElementById("qtdCoxinhaCalabresa").textContent = quantidadeCoxinhaCalabresa;

  }

}

let quantidadeCoxinhaGourmet = 0;

function aumentarCoxinhaGourmet() {

  quantidadeCoxinhaGourmet++;

  document.getElementById("qtdCoxinhaGourmet").textContent = quantidadeCoxinhaGourmet;

}

function diminuirCoxinhaGourmet() {

  if (quantidadeCoxinhaGourmet > 0) {

    quantidadeCoxinhaGourmet--;

    document.getElementById("qtdCoxinhaGourmet").textContent = quantidadeCoxinhaGourmet;

  }

}

let quantidadeCachorroQuente = 0;

function aumentarCachorroQuente() {

  quantidadeCachorroQuente++;

  document.getElementById("qtdCachorroQuente").textContent = quantidadeCachorroQuente;

}

function diminuirCachorroQuente() {

  if (quantidadeCachorroQuente > 0) {

    quantidadeCachorroQuente--;

    document.getElementById("qtdCachorroQuente").textContent = quantidadeCachorroQuente;

  }

}