//<div id="n">
//    <a href="http://intranet.policiamilitar.mg.gov.br/">Principal</a> / <a href="javascript:void(0)">pocWeb</a>
//</div>

//TODO dae tem q fazer um call la no spa(*) pra setar o bicho
var _migalha = new ( function () {

    var me = {
        hrefIni : null,
        labelIni : null,
        divMigalha : null
    }

    me.initx = function(_hrefIni,_labelIni){
        me.hrefIni    = _hrefIni
        me.labelIni   = _labelIni
        me.divMigalha = cid('n')
    }

    me.add = function(texto,href){
        var list = cid('n')
        if (list.hasChildNodes()) {
            list.removeChild(list.childNodes[list.childElementCount])
        }
        var a = document.createElement('a')
        a.appendChild( document.createTextNode(texto) )
        a.href = href
        me.divMigalha.appendChild( a )
    }

    me.init = function(){
        me.add(me.labelIni,me.hrefIni)
    }

    return me;
})