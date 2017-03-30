function injetaHtml(pagina, cb) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            cb(req.responseText)

        } else if (req.readyState === 4 && req.status !== 200) {
            stopLoadz();
            if (req.status === 401) {
               console.log("nao permitido")
            } else {
                console.log('e3')
                trataErroServer(req.response)
            }
        }
    };
    req.open("GET", pagina, true);
    req.send(null)
}

function injetaHtmlCidInner(pagina, cid, cb) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            cidInner(cid, req.responseText)
            if (cb) cb()
        }
    };
    req.open("GET", pagina, true);
    req.send(null)
}

function spa(pagina, cb) {
    injetaHtml(pagina, function (conteudo) {
        //location.hash = '#inicio'   //avaliar   ou sempre usar a partir de um link ou nao
        cidInner('spa', conteudo)
        if (cb) cb()
    })
}

function spaDI(html, js, cb) {
    injetaHtml(html, function (conteudo) {
        cidInner('spa', conteudo);
        injectJS(js, function () {
            if (cb) window[cb]()
        })
    })
}

function spaDI2(di) {

    injetaHtml(di.html, function (conteudo) {
        cidInner('spa', conteudo);
        injectJS(di.js, function () {
            window[di.var][di.cbInit]()
        })
    })
}

function injectJS(nome, cb) {

    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {

            var s = document.createElement("script");
            s.type = "text/javascript";
            s.text = req.responseText;
            document.getElementsByTagName("head")[0].appendChild(s);
            if (cb) cb()
        }
    };

    req.open("GET", nome, true);
    req.send(null);
}

////////////////////////////////////////////////q

function zpa(hash, di) {
    injetaHtml(di[4], function (conteudo) {
        //_migalha.add(di[1], '#' + hash)      //TODO colocar nos outros navegacao, tem que ver quando sobrescreve o anterior ou não., níveis
        cidInner('spa', conteudo);
        injectJS(di[5], function () {
            window[di[3]][di[6]]() //di.param e se pa tem q fazer o funcz caso di.param seja []
        })
    })
}

function setObjKeyVal(obj, key, val) {
    [obj][key] = val
    return obj
}

function newDI(_permissao, _migalha, _hash, _pre, _html, _js, _cb, _param) {
    return {
        permissao: _permissao,
        migalha: _migalha,
        hash: _hash,
        pre: _pre,
        html: _html,
        js: _js,
        cb: _cb,
        param: _param
    }
}

//ex: ['null,'Início','inicio', 'ini', 'html/inicio/inicio.html', 'js/inicio/inicio.js', 'init', null]
//    _permissao,_migalha,_hash,_pre,_html,_js,_cb,_param
function newDI2(params) {
    return newDI(params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7])
}
