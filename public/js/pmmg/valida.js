/////////////////////////////////////TODO REFATORAR /////////////////////////
function mostraMsgValidacao(mapa) {
    var keys = Object.keys(mapa);
    var len = keys.length;
    if (len > 0) {
        var mensagem = '';
        var j = 0;
        while (j < len) {
            mensagem += mapa[keys[j]] + '<br/>';
            j++;
        }
        stopLoadz();
        mostraMsg('erro', mensagem, true, 5000);
    } else {
        mostraMsg('error', 'Erro ao montar mensagem de erro, de uma olhada no console (F12)');
        stopLoadz();
        throw new Error('Ocorreu erro no servidor e ao montar a mensagem no cliente')
    }
}
function validaRadios(validacoes){  //TODO

}
function validaRadio(validacoes) {   //TODO

}
function validaChecks(validacoes) {   //REFAX todos valida(s) em um só avaliar
    var msgs = {}
    for (var v = 0; v < checks.length; v++) {
        //  ['Nome ', 'pe_nome', true]  check tem apenas 3 parâmetros
        msgs = validaCheck(validacoes[v][0], validacoes[v][1], validacoes[v][2], msgs)
    }
    if (Object.keys(msgs).length === 0) {
        return true
    } else {
        return msgs
        //mostraMsgValidacao(msgs)
    }
}
function validaCheck(label, id, obriga, msgs){//REFAX todos valida(s) em um só avaliar
    var msgs = {}
    var errorSize = label.length + 1
    if (cidv(id).length <= 0) {
        label += ' é obrigatório, '
    }
    if (label.length > errorSize) {
        msgs[id] = label.substring(0, label.length - 2)   //2 pq sempre tem 2 espaços ou (,+espaço) no final da msg de validação e tem que limpar isto
    }
    return msgs
}
function validaTexts(validacoes) {  //vetor de vetor   , mostra msg    //REFAX todos valida(s) em um só avaliar
    var msgs = {}
    for (var v = 0; v < validacoes.length; v++) {
        msgs = validaText(validacoes[v][0], validacoes[v][1], validacoes[v][2], validacoes[v][3], validacoes[v][4], msgs)
    }
    if (Object.keys(msgs).length === 0) {
        return true
    } else {
        return msgs
        //mostraMsgValidacao(msgs)   ///TODO colocar mais um parametro tipo mostraMsg true opts ? ou param ?
    }
}
function validaText(label, id, size, tipoVal, obriga, msgs) {   //REFAX todos valida(s) em um só avaliar
    var valor = cidv(id)
    var errorSize = label.length + 1
    label = validaObriga(valor, obriga, label)
    if (( !obriga && valor.trim().length > 0 ) || obriga) {  //se ñ for obrigatório mas tem conteúdo dae tem que validar o resto
        label = validaTamanho(valor, size, label)
        label = validaTipo(valor, tipoVal, label)
    }
    if (label.length > errorSize) {
        msgs[id] = label.substring(0, label.length - 2)   //2 pq sempre tem 2 espaços ou (,+espaço) no final da msg de validação e tem que limpar isto
    }
    return msgs
}
function validaFiles(validacoes) {  //vetor de vetor   , mostra msg   //TODO   //REFAX todos valida(s) em um só avaliar
    var msgs = {}
    //for (var v = 0; v < validacoes.length; v++) {
    //    msgs = validaText(validacoes[v][0], validacoes[v][1], validacoes[v][2], validacoes[v][3], validacoes[v][4], msgs)
    //}
    //if (Object.keys(msgs).length === 0) {
    //    return true
    //} else {
    //    return msgs
    //    //mostraMsgValidacao(msgs)   ///TODO colocar mais um parametro tipo mostraMsg true opts ? ou param ?
    //}
    return msgs
}
function validaFile(label, id, size, tipoVal, obriga, msgs) {   //TODO  //REFAX todos valida(s) em um só avaliar
    //var valor = cidv(id)
    //var errorSize = label.length + 1
    //label = validaObriga(valor, obriga, label)
    //if (( !obriga && valor.trim().length > 0 ) || obriga) {  //se ñ for obrigatório mas tem conteúdo dae tem que validar o resto
    //    label = validaTamanho(valor, size, label)
    //    label = validaTipo(valor, tipoVal, label)
    //}
    //if (label.length > errorSize) {
    //    msgs[id] = label.substring(0, label.length - 2)   //2 pq sempre tem 2 espaços ou (,+espaço) no final da msg de validação e tem que limpar isto
    //}
    //return msgs
}
function validaDataLists(validacoes) {
    var msgs = {}
    for (var v = 0; v < validacoes.length; v++) {
        msgs = validaDataList(validacoes[v][0], validacoes[v][1], validacoes[v][2], validacoes[v][3], validacoes[v][4], msgs)
    }
    if (Object.keys(msgs).length === 0) {
        return true
    } else {
        return msgs
        //mostraMsgValidacao(msgs)   ///TODO colocar mais um parametro tipo mostraMsg true opts ? ou param ?
    }
}
function validaDataList(label, id, size, tipoVal, obriga, msgs) {

    var valor = getValorComponente( cid(id) )
    var errorSize = label.length + 1
    label = validaObriga(valor, obriga, label)
    if (( !obriga && valor.trim().length > 0 ) || obriga) {  //se ñ for obrigatório mas tem conteúdo dae tem que validar o resto
        label = validaTamanho(valor, size, label)
        label = validaTipo(valor, tipoVal, label)
    }
    if (label.length > errorSize) {
        msgs[id] = label.substring(0, label.length - 2)   //2 pq sempre tem 2 espaços ou (,+espaço) no final da msg de validação e tem que limpar isto
    }
    return msgs
}

function validaSelects(validacoes){   //vetor de vetor   , mostra msg
    var msgs = {}
    for (var v = 0; v < validacoes.length; v++) {
        msgs = validaSelect(validacoes[v][0], validacoes[v][1], validacoes[v][2], validacoes[v][3], validacoes[v][4], msgs)
    }
    if (Object.keys(msgs).length === 0) {
        return true
    } else {
        return msgs
        //mostraMsgValidacao(msgs) ///TODO colocar mais um parametro tipo mostraMsg true opts ? ou param
    }
}
function validaSelect(label, id, size, tipoVal, obriga, msgs){
    var valor = cidVSelect(id)
    var errorSize = label.length + 1
    label = validaObrigaSelect(valor, obriga, label)
    if (( !obriga && valor.trim().length > 0 ) || obriga) {  //se ñ for obrigatório mas tem conteúdo dae tem que validar o resto
        label = validaTamanho(valor, size, label)
        label = validaTipo(valor, tipoVal, label)
    }
    if (label.length > errorSize) {
        msgs[id] = label.substring(0, label.length - 2)   //2 pq sempre tem 2 espaços ou (,+espaço) no final da msg de validação e tem que limpar isto
    }
    return msgs
}

function validaSelectMultiples(validacoes){   //vetor de vetor   , mostra msg
    var msgs = {}
    for (var v = 0; v < validacoes.length; v++) {
        msgs = validaSelectMultiple(validacoes[v][0], validacoes[v][1], validacoes[v][2], validacoes[v][3], validacoes[v][4], msgs)
    }
    if (Object.keys(msgs).length === 0) {
        return true
    } else {
        return msgs
        //mostraMsgValidacao(msgs) ///TODO colocar mais um parametro tipo mostraMsg true opts ? ou param
    }
}
function validaSelectMultiple(label, id, size, tipoVal, obriga, msgs){ //TODO refax
    var valor = cidVSelectMultiple(id)
    var errorSize = label.length + 1
    label = validaObrigaSelect(valor, obriga, label)
    if ( !obriga && valor && valor.length > 0 ) {  //se ñ for obrigatório mas tem conteúdo dae tem que validar o resto
        label = validaTamanho(valor, size, label)
        label = validaTipo(valor, tipoVal, label)  //ao juntar todos( validas ) tem que refax aqui
    }
    if (label.length > errorSize) {
        msgs[id] = label.substring(0, label.length - 2)   //2 pq sempre tem 2 espaços ou (,+espaço) no final da msg de validação e tem que limpar isto
    }
    return msgs
}


function validaObrigaSelect(text, obriga, label) {
    if (obriga && text.trim() === 'Selecione') {
        label += ' é obrigatório, '
    }
    return label
}

function validaObriga(text, obriga, label) {
    if (obriga && text.trim().length === 0) {
        label += ' é obrigatório, '
    }
    return label
}

function validaTamanho(text, size, label) {  //TODO refatorar o if

    if ( ( Array.isArray(text) && text.length > size  ) ||
        ( !Array.isArray(text) && ( text.trim().length < size[0] || text.trim().length > size[0]) ) ) {
        label += ' tamanho invalido, '
    }
    return label
}

var tipoz = {
    float: function (label,valor) {
        if (!validator.isFloat(valor)) {
            label += ' não é do tipo float  ' //é de propoósito estes dois espaços no final
        }
        return label
    },
    int: function (label,valor) {
        if (!validator.isInt(valor)) {
            label += ' não é do tipo int  '  //é de propoósito estes dois espaços no final
        }
        return label
    },
    letra: function (label,valor) {
        if (!validator.isAlpha(valor)) {
            label += ' apenas letra é permitido  ' //é de propoósito estes dois espaços no final
        }
        return label
    },
    letraNumero: function (label,valor) {
        if (!validator.isAlphanumeric(valor)) {
            label += ' apenas número e letra é permitido  '  //é de propoósito estes dois espaços no final
        }
        return label
    },
    string: function (label,valor) {
        return label
    },
    file : function(label,valor){
        //TODO   implementar
        return label
    },
    '[]' : function(label, valor){
        if( !Array.isArray( valor ) ){
            label += ' não é um vetor '
        }
        return label
    },
    '_#_' : function(label, valor){   //casos datalist
        var idDesc = valor.split('#')
        if( valor.indexOf('#') <= -1 ||  idDesc.length < 2 || idDesc.length > 2 ){
            label += ' não esta no padrão id#desc'
        }
        return label
    }
}

function validaTipo(valor, tipoVal, label) {
    return tipoz[tipoVal](label,valor)
}

var tipoHtml = {
    text : validaTexts,
    'select-one' : validaSelects,
    'select-multiple' : validaSelectMultiples,
    //radio : validaRadios,
    check : validaChecks,
    hidden : validaTexts,
    file : validaFiles,
    datalist : validaDataLists
}

function checkMensagensErro(mensagens){

    var msgs = {}
    for(var m=0;m<mensagens.length;m++){
        var chaves = Object.keys(mensagens[m])
        for(var c=0;c<chaves.length;c++){
            msgs[chaves[c]] = mensagens[m][chaves[c]]
        }
    }
    if (Object.keys(msgs).length === 0) {
        return true
    }else{
        mostraMsgValidacao(msgs)
    }
}

function validALL(validacoes) {
    var mensagens = []
    var chaves = Object.keys( validacoes )
    for (var v = 0; v < chaves.length; v++) {
        var componente = cid( validacoes[chaves[v]][1] )
        var tipo = componente.type
        if( tipo === undefined && componente.nodeName === 'DATALIST'){
            mensagens.push( tipoHtml[ 'datalist' ]( [validacoes[chaves[v]]] ) )
        }else{
            mensagens.push( tipoHtml[ tipo ]( [validacoes[chaves[v]]] ) )
        }

    }
    return checkMensagensErro(mensagens)
}
