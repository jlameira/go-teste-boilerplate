function _getCombo(url, idCombo, label, id, cbCombo){
    reqzGetDelete('GET', url, function(dadosCombo){
        if(cbCombo){
            populaSelectField(idCombo, dadosCombo, label, id, cbCombo)
        }else{
            populaSelectField(idCombo, dadosCombo, label, id)
        }
    })
}

function downloadz(url, nome, mime) {
    var x = new XMLHttpRequest();
    x.open("GET", url, true);
    x.setRequestHeader("Authorization", getCookie('tokiuz'));
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, nome, mime);
    };
    x.send();
}

function _get(url, ok, erro) {
    reqzGetDelete('GET', url, ok, erro)
}

function _del(url, ok, erro) {
    reqzGetDelete('DELETE', url, ok, erro)
}

function _post(url, data, ok, erro) {
    reqzPostPut('POST', url, data, ok, erro)
}

function _postFile(url, data, ok, erro) {
    reqzPostPutFile('POST', url, data, ok, erro)
}

//['post', '/enviaArquivo', ['Arquivo ', 'file', 'testeArquivo', '1024', true]]
function _postz(rest, ok, erro) {
    var validacoes =  rest[2]
    if ( validALL( validacoes ) ) {
        //var dados = JSON.stringify(getDados([dadoIdade, dadoIdade], 3))
        var dados =  getDadosFile( 'uploadForm', [ 'testeArquivo','nome' ] )   ///TODO pegar da validacoes sei l...
        _post( urlServer + rest[1], dados, function (retorno) {
            ok(retorno)
        })
    }
}

function _put(url, data, ok, erro) {
    reqzPostPut('PUT', url, data, ok, erro)
}

function _putFile(url, data, ok, erro) {
    reqzPostPutFile('PUT', url, data, ok, erro)
}

function reqz(type,url ,ok, erro){
    var req = new XMLHttpRequest();
   // loadz(' Processando ');
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            //stopLoadz();
            var obj = null;
            try {
                obj =req.responseText;
                if (ok) {
                    ok(obj);
                }
            } catch (error) {
                //stopLoadz();
                trataErroServer(error)
            }
        } else if (req.readyState === 4 && req.status !== 200) {
            //stopLoadz();
            if (erro) {
                erro(obj.retorno);
            }
            if (req.status === 401) {
                //window.location.href = k.URL_INTRANET   //TODO quando sistema dentro da intranet
               // delCookie('tokiuz');
               // loginWeb()
            } else {
                console.log(req.response)
               // trataErroServer(req.response)
            }
        }
    };
    req.open(type, url, true);
    return req
}

function reqzPostPut(type, url, data, ok, erro) {

    var req = reqz(type, url, ok, erro)
    setAppJson(req)
    sendCookieAndData(req,data)
}

function setAppJson(req){
    req.setRequestHeader("Content-type", "application/json");
}

function setCookieAuth(req){
    if (getCookie('tokiuz')) {
        req.setRequestHeader("Authorization", getCookie('tokiuz'));
    }
}

function sendCookieAndData(req,data){
    //setCookieAuth(req)
    req.send(data);
}

function reqzPostPutFile(type, url, data, ok, erro) {

    var req = reqz(type, url, ok, erro)
    sendCookieAndData(req,data)
}

function reqzGetDelete(type, url, ok, erro) {

    var req = reqz(type, url, ok, erro)
    setAppJson(req)
  //  setCookieAuth(req)
  
    req.send();
}
