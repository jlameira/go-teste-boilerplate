function trataErroServer(erroz) {
    try {
        var erroz = JSON.parse(erroz);
        if (erroz.erro) {
            var msgs = {};
            if (typeof erroz.erro === 'string') {
                msgs['param'] = erroz.erro
            } else if (erroz.erro instanceof Object && !Array.isArray(erroz.erro)) {
                msgs[erroz.erro.param] = erroz.erro.msg
            } else {
                for (var i = erroz.erro.length - 1; i >= 0; --i) {
                    if (msgs[erroz.erro[i].param]) {
                        msgs[erroz.erro[i].param] = msgs[erroz.erro[i].param] + ' ' + erroz.erro[i].msg
                    } else {
                        msgs[erroz.erro[i].param] = erroz.erro[i].msg
                    }
                }
            }
            this.montaMensagemErro(msgs)
        } else {
            mostraMsg('error', 'Erro inesperado :_( contate o CTS  ' + erroz);
            stopLoadz()
        }
    } catch (e) {
        mostraMsg('error', 'Erro inesperado :_( contate o CTS  ' + erroz);
        stopLoadz()
    }
}