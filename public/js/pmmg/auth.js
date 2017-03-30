function ulrzAuthok(titulo, url) {
    var obj = {Title: titulo, Url: url}
    history.pushState(obj, obj.Title, obj.Url)
    window.authOk = true
}

function loginWeb() {
    if (!getCookie('tokiuz')) {
        injetaHtml('html/login.html', function (conteudo) {
            addClass('c1', 'no')
            location.hash = ''
            cidInner('spa', conteudo)
            mostraMsg('info', 'Efetue login!')
        })
    }
}

function efetuarLoginWeb( URL_LOGIN ) {
    if (!getCookie('tokiuz')) {
        var dados = {
            login: cidv('login'),
            senha: Sha1.hash(cidv('senha'))
        }
        reqzPostPut('POST', URL_LOGIN, JSON.stringify(dados), function (retornoAuth) {
            limpaMsg()
            sessionStorage.setItem( cfg.nome, true)
            setCookie('tokiuz',retornoAuth,30)
            location.hash = '#' + cfg.rotaInit
        })
    }
}

function loginIntranetSSO(init) {
    if (!getCookie('tokiuz')) {
        var jssoid = getCookie(k.JSESSIONIDSSO);
        if (jssoid === '') {
            jssoid = buscarJSSOID();
            if (jssoid) {
                setCookie(k.JSESSIONIDSSO, jssoid, k._30MIN);
                //ulrzAuthok(k.TITULO_ME, k.URL_ME)
            }
        }
        if (jssoid === '') {
            window.location.href = k.URL_INTRANET
        }
        reqzPostPut('POST', k.SERVA + k.LOGIN_INTRA, JSON.stringify({"JSESSIONIDSSO": jssoid}), function (tok) {
            setCookie('tokiuz', tok, 666);
            init()
        }, function (err) {
            window.location.href = k.URL_INTRANET
        })
    } else {
        init()
    }
}
