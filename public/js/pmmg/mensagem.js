function loadz(msg) {

    if (msg) {
        cid("redirecMsg").innerHTML = msg;
    } else {
        cid("redirecMsg").innerHTML = 'Processando ...';
    }

    cid('redirecMsg').className = 'msg de carr flu';
    //cid('redirecFundo').className = 'transp';
    //desabilitaCampos() //TODO fazer um desabilita novo,
}

function stopLoadz() {

    cid('redirecMsg').className = 'no';
    //cid('redirecFundo').className = 'no';
    //habilitaCampos()  //TODO fazer um habilita novo,
}

function montaMensagemErro(mapa) {
    var keys = Object.keys(mapa);
    var len = keys.length;

    if (len > 0) {

        var mensagem = '';
        var j = 0;
        while (j < len) {

            mensagem += (keys[j] + mapa[keys[j]]) + ' , ';
            j++;
        }
        mensagem = mensagem.substring(0, mensagem.length - 2)
        mostraMsg('erro', mensagem, null, 3000);
        stopLoadz();
        ///throw new Error('Ocorreu erro no servidor')
    } else {

        mostraMsg('error', 'Erro ao montar mensagem de erro, de uma olhada no console (F12)');
        stopLoadz();
        throw new Error('Ocorreu erro no servidor e ao montar a mensagem no cliente')
    }
}

/*
 *tipo = [ok,erro,info,alerta]
 */
var ERRO = 'erro'
var INFO = 'info'
var OK = 'ok'
var ALERTA = 'alerta'

function mostraMsg(tipo, msg, limpaAnterior, timeout) {
    var intervale = null;

    if (timeout) {
        intervale = setInterval(function () {
            limpaMsg();
            clearInterval(intervale)
        }, timeout);
    }

    if (limpaAnterior) {
        limpaMsg()
        cid('divMsg').innerHTML = '<div class="msg de ' + tipo + ' flu">' + msg + '</div>'
    }else{
        cid('divMsg').innerHTML += '<div class="msg de ' + tipo + ' flu">' + msg + '</div>'
    }


}

function limpaMsg() {
    cid('divMsg').innerHTML = '';
}
