var crud = function (_label, _id, _dado, _form, _list, _urlBase, _validaCriar, _validaAtualizar, _listInit, _combos, _filtro, _acoes, _hiddens, _prefix) {

    var me = {}

    me.loadCombos = function (editando, cb) {
        var loadados = 0
        for (var c = 0; c < cfg.combos.length; c++) {
            _getCombo(cfg.combos[c][0], cfg.combos[c][1], cfg.combos[c][2], cfg.combos[c][3], function(){
                loadados++
                if(loadados === cfg.combos.length){
                    if (cb) cb()
                }
            })
        }
    }

    me.init = function (cb) {
        if (cfg.listInit) {
            me.listar()
        }
        me.loadCombos()
        if (cb)  cb()
    }
    me.novo = function (cb) {
        spa(cfg.form, function () {
            cidvv(cfg.id[1], '')
            if(cb)  cb()
            if (cfg.combos && cfg.combos.length) {
                me.loadCombos(false)
            }
        })
    }
    me.cancelar = function (cb) {
        spa(cfg.list, me.init)
        //if(cb)  cb() ?  como fazer aqui
    }
    me.salvar = function (cb) {
        if (cidv(cfg.id[1])) {
            me.atualizar(cb)
        } else {
            me.criar(cb)
        }
    }
    me.navegarList = function (cb, retornoCriarAtualizar) {
        spa(cfg.list, function () {
            me.init(cb)
        })
    }
    me.criar = function (cb) {
        if (validALL(cfg.validaCriar)) {
            var ids = recuperaValoresArrayIndexByProp(cfg.validaCriar, 1)
            var dados = JSON.stringify(getDados(ids, cfg.prefix.length))
            _post(cfg.urlBase, dados, function (retorno) {
                mostraMsg(INFO, 'Salvo com sucesso', null, 3000)
                me.navegarList(cb, retorno)
            })
        }
    }
    me.atualizar = function (cb) {
        if (validALL(cfg.validaAtualizar)) {
            var ids = recuperaValoresArrayIndexByProp(cfg.validaAtualizar, 1)
            var dados = getDados(ids, cfg.prefix.length)
            _put(cfg.urlBase, JSON.stringify(dados), function (retorno) {
                mostraMsg(INFO, 'Atualizado com sucesso', null, 3000)
                me.navegarList(cb, retorno)
            })
        }
    }
    me.apagar = function (id) {   //cb ?
        _del(cfg.urlBase + '/' + id, function (ok) {
            mostraMsg(INFO, 'Removido com sucesso', null, 3000)
            me.listar()
        })
    }
    me.recuperar = function (id) {    //cb ?
        _get(cfg.urlBase + '/' + id, function (obj) {
            if (obj !== null) {
                spa(cfg.form, function () {

                    if (cfg.combos && cfg.combos.length) {
                        me.loadCombos(true, function () {
                            populaFormulario(obj, cfg.prefix)
                        })
                    } else {
                        populaFormulario(obj, cfg.prefix)
                    }

                })
            } else {
                mostraMsg('erro', 'Registro inexistente, favor recarregar sua página', null, 3000)
            }
        })
    }
    me.filtrar = function (cb) {
        if (validALL(cfg.filtro.valida)) {
            var ids = recuperaValoresArrayIndexByProp(cfg.validaCriar, 1)
            var dados = getDados(ids, 3)
            _post(cfg.urlBase + '/filtro', JSON.stringify(dados), function (retorno) {
                mostraMsg(INFO, 'Pesquisado com sucesso', null, 3000)
                me.cfgLista(retorno)
            })
        }
    }
    me.listar = function (cb) {
        _get(cfg.urlBase, function (dados) {
            mostraMsg(INFO, 'Listado com sucesso', null, 3000)
            me.cfgLista(dados)
        })
    }
    me.cfgLista = function (dados) {  //cb ?
        populaTabela('lista' + cfg.label, dados, cfgIndexAcoes(), cfg.hiddens)
    }

    function cfgIndexAcoes(){

        var tabela = cid( 'lista' + cfg.label )
        var lastCol = tabela.rows[0].cells.length
        cfg.acoes[0].index = lastCol-2
        cfg.acoes[1].index = lastCol-1
        return cfg.acoes
    }

    var cfg = {
        label: _label,
        id: _id,
        dado: _dado,
        form: _form,
        list: _list,
        urlBase: _urlBase,
        validaCriar: _validaCriar,
        validaAtualizar: _validaAtualizar,
        listInit: _listInit,
        combos: _combos,

        filtro: _filtro ? _filtro : {valida: [], paginacaoId: ''},
        paginacao: null,
        acoes: _acoes ? _acoes : [
            {index: 2, acao: ['', me.recuperar, ['_id']], titulo: 'Recuperar ' + _label, class: ['ic', 'ed']},
            {index: 3, acao: ['', me.apagar, ['_id']], titulo: 'Apagar ' + _label, class: ['ic', 'ex']}
        ],
        hiddens: _hiddens,
        prefix: _prefix
    }

    me.getCfg = function(){
        return cfg
    }

    if (cfg.filtro.paginacao !== '') {
        cfg.paginacao = new paginacao('listaPessoaPag') //TODO
        cfg.paginacao.criarComponenteVisual()
    }

    return me
}
