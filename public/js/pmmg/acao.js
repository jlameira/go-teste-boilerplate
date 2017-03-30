var acoes = {};

function setaAcao(nome, ref) {

    acoes[nome] = ref
}

function executarAcao(nome) {

    acoes[nome]()
}

function cleanAcao() {

    acoes = {}
}

function limpaAcoes(acoes) {

    var nomesAcao = Object.keys(acoes);
    for (var i = 0; i < nomesAcao.length; i++) {
        acoes[nomesAcao[i]] = null
    }
}
