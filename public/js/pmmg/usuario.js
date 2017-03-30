var _usuario = new ( function () {
    var me = {}

    var cfg = 'lucas'

    me = {
        jwt: null,
        dados: {},
        permissao: {}
    }

    //me.inita = function (_jwt, _dados, _permissao) {
    //
    //    if(_jwt){
    //        me.jwt = _jwt
    //    }
    //    me.dados = _dados
    //    me.permissao = _permissao
    //    setCookie('tokiuz',me.jwt,30)
    //}

    me.possui = function (chave, valor) {

        if ( me.permissao && kontaiz( me.permissao[chave], valor)) {

            return true

        } else {

            //throw Error('sem permissão') TODO pensar melhor depois
        }
    }

    return me
})

