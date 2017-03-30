function linkCorpo(id, idDiv) {
    var link = cid(id).import;
    var x = document.importNode(link.getElementById('id' + id), true);
    cid(idDiv).appendChild(x)
}

function habilitaCampos(id) {
    var c = cid(id);
    //c.style.position='relative';
    var i = c.getElementsByTagName('input');
    for (var j = 0; j < i.length; j++) {
        i[j].removeAttribute('disabled');
    }
    var s = c.getElementsByTagName('select');
    for (var j = 0; j < s.length; j++) {
        s[j].removeAttribute('disabled');
    }
    var t = c.getElementsByTagName('button');
    for (var j = 0; j < t.length; j++) {
        t[j].removeAttribute('disabled');
    }
}

function desabilitaCampos(id) {
    var c = cid(id);
    //c.style.position='relative';
    var i = c.getElementsByTagName('input');
    for (var j = 0; j < i.length; j++) {
        i[j].disabled = 'disabled';
    }
    var s = c.getElementsByTagName('select');
    for (var j = 0; j < s.length; j++) {
        s[j].disabled = 'disabled';
    }
    var t = c.getElementsByTagName('button');
    for (var j = 0; j < t.length; j++) {
        t[j].disabled = 'disabled';
    }
}

function cid(nome) {
    return document.getElementById(nome)
}

function cidInner(nome, valor) {
    cid(nome).innerHTML = valor
}

function cidInnerAppend(nome, valor) {
    cid(nome).innerHTML += valor
}

function cidzvv(nomes, vals, obj) {
    for (a = 0; a < nomes.length; a++) {
        cidvv(nomes[a], obj[vals[a]])
    }
}

function cidzvvInner(nomes, vals, obj) {
    for (a = 0; a < nomes.length; a++) {
        cidInner(nomes[a], obj[vals[a]])
    }
}

function cidzvvInnerSame(nomes, obj) {
    for (a = 0; a < nomes.length; a++) {
        cidInner(nomes[a], obj[nomes[a]])
    }
}

function cidv(nome) {
    return cid(nome).value
}

function cidvv(nome, valor) {
    return cid(nome).value = valor
}

function cidVcheck(nome) {
    if (cid(nome).checked) {
        return true
    } else {
        return false
    }
}

function cidVFile(nome, multiplo) {

    if (cid(nome).files) {
        if (multiplo) {
            return cid(nome).files
        } else {
            return cid(nome).files[0]
        }
    } else {
        throw new Error('erro no componente ' + nome)
    }

}

function cidVSelect(nome) {
    return cidv(nome)
}

function cidVSelectMultiple(nome) {
    var select = cid(nome)
    var result = [];
    var options = select && select.options;
    var opt;
    for (var i=0, iLen=options.length; i<iLen; i++) {
        opt = options[i];
        if (opt.selected) {
            result.push(opt.value || opt.text);
        }
    }
    return result;
}

//TODO padronizar estes nomes
function cidCheckV(nome, valor) {
    if (valor && valor === true) {
        cid(nome).checked = true
    } else {
        cid(nome).checked = false
    }
}

function selectItemByValue(elmnt, value) {
    for (var i = 0; i < elmnt.options.length; i++) {
        if (elmnt.options[i].value == value) {
            return i;
            break;
        }
    }
}

function cidSelectMultV(id, valores) {
    var comp = cid(id)

    for(var i=0;i < comp.options.length;i++){
        comp.options[i].selected = false;
    }

    for(var i=0;i < valores.length;i++){
        var ii = selectItemByValue(comp, valores[i]);
        comp.options[ii].selected = true;
    }
}

function cidSelectV(id, valor) {
    var comp = cid(id)
    var i = selectItemByValue(comp, valor);
    comp.options[i].selected = true;
}

function addClass(id, claz) {
    if (cid(id)) {
        cid(id).classList.add(claz)
    }
}

function byeClass(id, claz) {
    if (cid(id)) {
        cid(id).classList.remove(claz)
    }
}

function labelz(id, novo) {
    cid(id).innerHTML = novo
}

function limpaTabela(tabela) {
    if (tabela && tabela.rows) {
        var rowCount = tabela.rows.length;
        for (var i = rowCount - 1; i > 0; i--) {
            tabela.deleteRow(i);
        }
    }
}

//TODO REFAX!!
function cellSelect(row, optionsCell, linha) {

    //por enquanto só pega o primeiro
    if (!optionsCell.showIf) {
        var a = document.createElement('a');
        if (optionsCell.label && optionsCell.label !== '') {
            var label = document.createTextNode(linha[optionsCell.label]);
            a.appendChild(label);
        }
        if (optionsCell.class) {
            for (var t = 0; t < optionsCell.class.length; t++) {
                a.classList.add(optionsCell.class[t])
            }
        }
        a.title = optionsCell.titulo;
        if (Array.isArray(optionsCell.acao[2])) {
            //TODO refax
            var paramz = optionsCell.acao[2];
            var valores = [];
            for (var ii = 0; ii < paramz.length; ii++) {

                valores.push(linha[paramz[ii]])
            }
            a.onclick = funcz2(optionsCell.acao[1], valores)
        } else {
            a.onclick = funcz(optionsCell.acao[1], linha[optionsCell.acao[2]])
        }
        row.insertCell(optionsCell.index).appendChild(a)

    } else if (optionsCell.showIf && linha[optionsCell.showIf[0]] != null) {
        var a = document.createElement('a');
        if (optionsCell.label && optionsCell.label !== '') {
            var label = document.createTextNode(linha[optionsCell.label]);
            a.appendChild(label);
        }
        if (optionsCell.class) {
            for (var t = 0; t < optionsCell.class.length; t++) {
                a.classList.add(optionsCell.class[t])
            }
        }
        a.title = optionsCell.titulo;
        if (Array.isArray(optionsCell.acao[2])) {
            //TODO refax
            var paramz = optionsCell.acao[2];
            var valores = [];
            for (var ii = 0; ii < paramz.length; ii++) {

                valores.push(linha[paramz[ii]])
            }
            a.onclick = funcz2(optionsCell.acao[1], valores)
        } else {
            a.onclick = funcz(optionsCell.acao[1], linha[optionsCell.acao[2]])
        }
        row.insertCell(optionsCell.index).appendChild(a)
    } else {
        var span = document.createElement('span');
        row.insertCell(optionsCell.index).appendChild(span)
    }
}


//TODO FAZER GENERICO
function atualizaLinhaTabela(idTable, idRow, linha, colunas) {

    var row = cid(idRow);      //cid(idRow).rowIndex

    if (!row) {
        var table = cid(idTable);
        row = table.insertRow(1);   // vai ter que pegar sei o rowindex ...
        row.id = idRow;
        row.insertCell(0);
        row.insertCell(1);
        row.insertCell(2);
        row.insertCell(3);
        row.insertCell(4);
        row.insertCell(5)
    }

    row.cells[0].innerHTML = linha.nome;
    row.cells[1].innerHTML = linha.count;
    row.cells[2].innerHTML = linha.maisLenta;
    row.cells[3].innerHTML = linha.maisRapida;
    row.cells[4].innerHTML = linha.total;
    row.cells[5].innerHTML = linha.media
}

function addCellRow(row) {

}

function addRowTable(tabela, id) {

    var row;
    var qtd = tabela.rows.length;
    if (qtd == 0) {
        row = tabela.insertRow(0)
    } else {
        row = tabela.insertRow(qtd)
    }

    if (id) {
        row.id = id
    }

    return row
}

function populaTabela(idTable, dados, optionsCell, hiddens, acaoTodos) {

    var table = cid(idTable);
    if (table) limpaTabela(table);

    if (dados && dados.length > 0) {

        cfgPaginacao(idTable, {}); ///TODO depois fazer acoplator

        if (acaoTodos) {
            cfgAcaoTodos(idTable, acaoTodos);
            cfgAcaoSelectTodos(idTable + 'All', funcz(selAll, idTable, dados, acaoTodos[2]))
        }

        for (var i = 0; i < dados.length; i++) {
            try {
                var linha = dados[i];
                var keys = Object.keys(linha);
                var len = keys.length;

                var row = table.insertRow(i + 1);
                var j = 0, k = 0, p = 0;

                if (acaoTodos) {
                    var checkbox = document.createElement('input');
                    checkbox.type = "checkbox";
                    checkbox.name = "name";
                    checkbox.value = "value";
                    checkbox.id = idTable + "Check" + i;
                    checkbox.onclick = funcz(selLinha, idTable, linha[acaoTodos[2]], i);
                    row.insertCell(0).appendChild(checkbox);
                    k = 1
                }

                while (j < len) {   // caminha campo por campo da linha

                    if (optionsCell) {    //se foi informado options cell

                        if (!hiddens || ( hiddens && !kontaiz(hiddens, keys[p]) )) {  // se o campo tiver que aparecer

                            row.insertCell(k++).innerHTML = linha[keys[p]];
                        }

                        for (var x = 0; x < optionsCell.length; x++) {       // tenho que percorrer todos
                            if (optionsCell[x] && k === optionsCell[x].index) {    // se o index corrente da coluna (k) for igual do options cell dae tenho que colocar
                                cellSelect(row, optionsCell[x], linha);
                                k += 1
                            }
                        }

                    } else {

                        if (!hiddens || ( hiddens && !kontaiz(hiddens, keys[p]) )) {  // se o campo tiver que aparecer

                            row.insertCell(k++).innerHTML = linha[keys[p]];
                        }
                    }

                    j++;         //vai para a proxima info da linha
                    p++;         // j e p mesma ???
                }

            } catch (eee) {
                console.log('populatabelaerro ' + eee.message)
            }
        }

    }
}

function cfgAcaoSelectTodos(idCheckAll, ref) {
    if (cid(idCheckAll)) {
        cid(idCheckAll).onclick = ref
    }
}

function onOffAll(idTable, onOff) {
    var table = cid(idTable);
    if (table.rows) {
        for (var i = 0; i < table.rows.length - 1; i++) {
            var linha = table.rows[i];
            cid(idTable + 'Check' + i).checked = onOff
        }
    }
}

function addAllSelectCtx(idTable, dados, atr) {
    var table = cid(idTable);
    for (var i = 0; i < dados.length; i++) {
        var linha = dados[i];
        getCtx(idTable + 'Select').push(linha[atr])
    }
}

function removeAllSelectCtx(idTable) {
    window.ctx[idTable + 'Select'] = []
}

function selAll(idTable, dados, atr) {
    if (cid(idTable + 'All').checked === true) {
        onOffAll(idTable, true);
        addAllSelectCtx(idTable, dados, atr)
    } else {
        onOffAll(idTable, false);
        removeAllSelectCtx(idTable)
    }
}

function selLinha(idTable, dados, i) {

    if (cid(idTable + 'Check' + i).checked === true) {
        getCtx(idTable + 'Select').push(dados)
    } else {
        removeStrArray(getCtx(idTable + 'Select'), dados)
    }
}

function cfgPaginacao(idTable, cfg) {

}

function criarListaSelecionados(id, dados) {
    setCtx(id + 'Select', [])
}

function cfgAcaoTodos(idTable, acoes) {

    if (idTable && acoes) {

        var checkbox = document.createElement('button');
        checkbox.name = acoes[0];
        checkbox.class = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect";
        checkbox.onclick = funcz(acoes[1], funcz(getCtx, acoes[2]));
        checkbox.innerHTML = acoes[0];
        cid(idTable + 'AcaoTodos').appendChild(checkbox);

        criarListaSelecionados(idTable, {})
    }
}

function populaSelectField(id, dados, pLabel, pId, cbPopulado) {
    var selectz = cid(id);
    for (var i = 0; i < dados.length; i++) {
        selectz.options[selectz.options.length] = new Option(dados[i][pLabel], dados[i][pId]);
    }
    if (cbPopulado) {
        cbPopulado()
    }
}
////////////////////// form resets

var tipoReset = {
    radio: resetRadioCheck,
    checkbox: resetRadioCheck,
    file: resetFile,
    text: resetText
    //TODO fazer pra select one e multiple, limpaCombo ??
}

function resetRadioCheck(radios) {
    for (var r = 0; r < radios.length; r++) {
        cid(radios[r]).checked = false;
    }
}

function resetText(texts) {
    for (var r = 0; r < texts.length; r++) {
        cid(texts[r]).value = ''
    }
}

function resetFile(files) {
    for (var r = 0; r < files.length; r++) {
        cid(files[r]).type = '';
        cid(files[r]).type = 'file'
    }
}

function resets(ids) {
    for (var r = 0; r < ids.length; r++) {
        var campo = cid(ids[r])
        if (campo) {
            tipoReset[campo.type](ids[r])
        }
    }
}

function criaLabel(texto) {
    var x = document.createElement("LABEL");
    var t = document.createTextNode(texto);
    x.appendChild(t);
    return x
}

function criaLink(id, texto, icone, titulo, func, params) {
    var a = document.createElement('a');

    if (texto && texto !== '') {
        var label = document.createTextNode(texto);
        a.appendChild(label);
    }
    if (icone) {
        for (var t = 0; t < icone.length; t++) {
            a.classList.add(icone[t])
        }
    }
    a.id = id
    a.href = '#'
    a.title = titulo
    a.onclick = cfgFuncao(func, params)

    return a
}


function deleteRow(rowid) {
    var row = document.getElementById(rowid);
    var table = row.parentNode;
    while (table && table.tagName != 'TABLE')
        table = table.parentNode;
    if (!table)
        return;
    table.deleteRow(row.rowIndex);
}

var tabelaRAM = function () {

    var me = {};
    var cfgTabelaMemoria = {};

    me.getCfg = function () {
        return cfgTabelaMemoria
    }

    me.dados = function () {
        return cfgTabelaMemoria.dados
    }

    me.init = function (_id, _ordemColunas, _acoesCelula, _dados, _hiddens, _indexPrimeiraLinha, _idModal) {

        //cfgTabelaMemoria = {
        //    id: 'ram',
        //    ordemColunas: ['conteudo', 'objetivo', 'avaliacao', 'cargaHoraria'],
        //    acoesCelula: [
        //        {index: 4, acao: ['', me.editarLinha], titulo: 'editar conteudo', class: ['ic', 'txt']},
        //        {index: 5, acao: ['', me.removerLinha], titulo: 'remover conteudo', class: ['ic', 'ex']}
        //    ],
        //    dados: [
        //        {
        //            conteudo: 'c lalal',
        //            objetivo: 'o lelell',
        //            avaliacao: 'a lalla',
        //            cargaHoraria: 13
        //        },
        //        {
        //            conteudo: 'c2 lalal',
        //            objetivo: 'o2 lelell',
        //            avaliacao: 'a2 lalla',
        //            cargaHoraria: 10
        //        },
        //        {
        //            conteudo: 'c3 lalal',
        //            objetivo: 'o3 lelell',
        //            avaliacao: 'a3 lalla',
        //            cargaHoraria: 101
        //        }
        //    ],
        //    indexCorrente: -1,
        //    hiddens: null,
        //    tabela: cid(this.id),
        //    indexPrimeiraLinha : 2
        //}
        cfgTabelaMemoria = {
            id: _id,
            ordemColunas: _ordemColunas,
            acoesCelula: _acoesCelula,
            dados: _dados,
            indexCorrente: -1,
            hiddens: _hiddens,
            tabela: cid(_id),
            indexPrimeiraLinha: _indexPrimeiraLinha,
            idModal: _idModal
        }

        me.populaTabelaMemoria(cfgTabelaMemoria.id, cfgTabelaMemoria.dados, cfgTabelaMemoria.acoesCelula, null)
    }

    me.removerLinha = function (index) {
        cfgTabelaMemoria.dados.splice(index, 1)
        me.populaTabelaMemoria(cfgTabelaMemoria.id, cfgTabelaMemoria.dados, cfgTabelaMemoria.acoesCelula, cfgTabelaMemoria.hiddens)
    }

    me.maisUm = function () {
        setaAcao(cfgTabelaMemoria.idModal, me.addLinha);
        byeClass(cfgTabelaMemoria.idModal, 'no')
        cfgTabelaMemoria.editando = false
        //TODO aqui tem que apenas passar os ids e na hora de limpar ele v o tipo do input e chamar resetText ou radio ou file ou seja o que for
        resetText(cfgTabelaMemoria.ordemColunas) //TODO ainda pode ter mais campos , tem que ver a questao dos hiddens
    }

    me.mostraModalConteudoEtapa = function (index) {
        byeClass(cfgTabelaMemoria.idModal, 'no');
        populaFormulario(cfgTabelaMemoria.dados[index])
    };

    me.editarLinha = function (index) {
        setaAcao(cfgTabelaMemoria.idModal, me.addLinha);
        me.mostraModalConteudoEtapa(index);
        cfgTabelaMemoria.editando = true;
        cfgTabelaMemoria.indexCorrente = index;
    };

    me.addLinha = function () {
        var obj = getDados(cfgTabelaMemoria.ordemColunas, 0);
        if (cfgTabelaMemoria.editando) {
            cfgTabelaMemoria.dados[cfgTabelaMemoria.indexCorrente] = obj;
            me.atualizarLinhaMemoria(obj)
        } else {
            cfgTabelaMemoria.dados.push(obj);
            me.adicionaLinhaComDados(obj);
        }
        cfgTabelaMemoria.indexCorrente = -1;
        addClass(cfgTabelaMemoria.idModal, 'no')
    };

    me.atualizarLinhaMemoria = function (obj) {
        var linha = cid(cfgTabelaMemoria.id + (cfgTabelaMemoria.indexCorrente + 1));
        for (var ii = 0; cfgTabelaMemoria.ordemColunas.length > ii; ii++) {
            linha.cells[ii].innerHTML = obj[cfgTabelaMemoria.ordemColunas[ii]];
        }
    }

    me.adicionaLinhaComDados = function (obj) {
        var tabela = cid(cfgTabelaMemoria.id)
        var row = me.adicionaLinha(tabela)
        var indexio = tabela.rows.length - cfgTabelaMemoria.indexPrimeiraLinha
        var keys = Object.keys(obj);
        var len = keys.length
        var j = 0, p = 0, k = 0;
        while (j < len) {
            if (cfgTabelaMemoria.acoesCelula) {
                if (!cfgTabelaMemoria.hiddens || (cfgTabelaMemoria.hiddens && !kontaiz(cfgTabelaMemoria.hiddens, keys[p]))) {
                    row.insertCell(k++).innerHTML = obj[keys[p]];
                }
                for (var x = 0; x < cfgTabelaMemoria.acoesCelula.length; x++) {
                    if (cfgTabelaMemoria.acoesCelula[x] && k === cfgTabelaMemoria.acoesCelula[x].index) {
                        me.acaoCelulaMemoria(indexio, row, cfgTabelaMemoria.acoesCelula[x], obj);
                        k += 1
                    }
                }
            } else {
                //TODO avisar pessoal do bug de não ter hiddens
                if (!cfgTabelaMemoria.hiddens || (cfgTabelaMemoria.hiddens && !kontaiz(cfgTabelaMemoria.hiddens, keys[p]))) {
                    row.insertCell(k++).innerHTML = obj[keys[p]];
                }
            }
            j++;
            p++;
        }
    }

    me.adicionaLinha = function (tabela) {
        var row;
        var qtd = tabela.rows.length;
        row = tabela.insertRow(qtd)
        row.id = tabela.id + qtd
        return row
    }

    me.populaTabelaMemoria = function (idTabela, dados, acaoCelula, hiddens) {
        var tabela = cid(idTabela);
        if (tabela) limpaTabela(tabela);
        if (dados && dados.length > 0) {
            for (var i = 0; i < dados.length; i++) {
                try {
                    var linha = dados[i];
                    var keys = Object.keys(linha);
                    var len = keys.length;
                    var row = me.adicionaLinha(tabela)
                    var j = 0, k = 0, p = 0;
                    while (j < len) {
                        if (acaoCelula) {
                            if (!hiddens || (hiddens && !kontaiz(hiddens, keys[p]))) {
                                row.insertCell(k++).innerHTML = linha[keys[p]];
                            }

                            for (var x = 0; x < acaoCelula.length; x++) {
                                if (acaoCelula[x] && k === acaoCelula[x].index) {
                                    me.acaoCelulaMemoria(i, row, acaoCelula[x], linha);
                                    k += 1
                                }
                            }

                        } else {
                            //TODO avisar pessoal do bug de não ter hiddens
                            if (!hiddens || (hiddens && !kontaiz(hiddens, keys[p]))) {
                                row.insertCell(k++).innerHTML = linha[keys[p]];
                            }
                        }
                        j++;
                        p++;
                    }
                } catch (eee) {
                    console.log('populatabelaMEMORIAerro ' + eee.message)
                }
            }
        }
    };

    me.acaoCelulaMemoria = function (index, row, acaoCelula, linha) {

        if (!acaoCelula.showIf || (acaoCelula.showIf && linha[acaoCelula.showIf[0]] != null)) {
            var a = document.createElement('a');
            if (acaoCelula.label && acaoCelula.label !== '') {
                var label = document.createTextNode(linha[acaoCelula.label]);
                a.appendChild(label);
            }
            if (acaoCelula.class) {
                for (var t = 0; t < acaoCelula.class.length; t++) {
                    a.classList.add(acaoCelula.class[t])
                }
            }
            a.title = acaoCelula.titulo;
            a.onclick = funcz2(acaoCelula.acao[1], [index]) //aqui so passa index
            row.insertCell(acaoCelula.index).appendChild(a)
        } else {
            row.insertCell(acaoCelula.index).appendChild(document.createElement('span'))
        }
    };
    return me
};

var ultimaSelecao
function menuAtivo(elementoId) {
    byeClass(ultimaSelecao, 'at')
    ultimaSelecao = elementoId
    addClass(elementoId, 'at')
}

function limpaCombo(comboBox) {
    while (comboBox.options.length > 0) {
        comboBox.remove(0)
    }
    var option = document.createElement("option");
    option.text = "Selecione";
    comboBox.add(option);
}

function limpaDDD(id) {
    //TODO limpa um elemento html dl dt dd, mantendo titulo ou nao
}

function htmlIdsByAuth(rota, id, permissao) {
    if (usuario.rotas[rota].indexOf(permissao) > -1) {
        byeClass(id, 'no')
    } else {
        addClass(id, 'no')
    }
}

function idsAuth(rota, perms) {
    for (var q = 0; q < perms.length; q++) {
        htmlIdsByAuth(rota, perms[q][0], perms[q][1])
    }
}
