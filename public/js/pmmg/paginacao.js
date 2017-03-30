var paginacao = function (idPaginacao) {

    var ANT = 'Anterior'
    var PRO = 'Proximo'
    var ULT = 'Ultimo'
    var PRI = 'Primeiro'
    var PAG = 'Pag'
    var PGS = 'Pags'
    var PAA = 'Página:'
    var me ={}

    var cfg ={
        nome : idPaginacao,
        total : 0,
        qtd : 0,
        pagina : 0
    }

    me.setPagina = function(num){
        cfg.pagina = num
    }
    me.getPagina = function(){
        return cfg.pagina
    }
    me.setQtd = function(qtd){
        cfg.qtd = qtd
    }
    me.getQtd = function(){
        return cfg.qtd
    }
    me.getTotal = function(){
        return cfg.total
    }
    me.setTotal = function(total){
        cfg.total = total
    }

    me.proxima = function(){  //TODO checar qnd tiver uma pagina apenas
        if( cfg.pagina < cfg.total ){
            me.setPagina( cfg.pagina + 1 )
        }
        if( cfg.pagina === cfg.total ){
            addClass('no', cfg.nome+ANT )
        }
    }

    me.anterior = function(){ //TODO checar qnd tiver uma pagina apenas
        if( cfg.pagina > 1 ){
            me.setPagina( cfg.pagina - 1 )
        }
        if( cfg.pagina === 1 ){
            addClass('no', cfg.nome+PRO )
        }
    }

    me.primeira = function(){

    }

    me.ultima = function(){

    }

    me.criarComponenteVisual = function(){

        // var divPag = cid(cfg.nome)
        // divPag.appendChild( criaLabel(PAA) )
        //
        // divPag.appendChild( criaLink(cfg.nome + PRI + cfg.nome,'<< ',null,'Primeira',me.primeira,[]) )
        // divPag.appendChild( criaLink(cfg.nome + ANT + cfg.nome,'< ',null,'Anterior',me.anterior,[]) )
        //
        // divPag.appendChild( criaLabel('1 2 3 4 5 6 7 8 9 10') )
        //
        // divPag.appendChild( criaLink(cfg.nome + PRO + cfg.nome,' >',null,'Próxima',me.proxima,[]) )
        // divPag.appendChild( criaLink(cfg.nome + ULT + cfg.nome,' >>',null,'Última',me.ultima,[]) )
        //
        // divPag.appendChild( criaLabel(' / 10 registros') )
    }

    return me
}

