function checaInitToken() {
    // if (getCookie('tokiuz') === null || getCookie('tokiuz') === '' || getCookie('tokiuz') === "null") {
    //     //token DEEAS
        setCookie('tokiuz', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6ImZlYjI1MjQzLWQ5NTUtNDYxOS04NGMxLWFhYWZmMjJlYmY5NCIsImlhdCI6MTQ4OTU4NzQ3MDExNCwiZXhwIjoxNDg5NTg3NTU2NTE0fQ.eyJnIjoiMTA3NjQzOSIsInAiOiJERUVBUyIsInIiOiJERUVBUyIsInUiOjcyNDcsImYiOlsiMTAzLjM0IiwiMTAzLjIzMiIsIjIyMy4xNyIsIjIyMy4xMTciLCIyMjMuMjMzIl0sImkiOiIifQ.PwdgLShDxTkdGmqSD6THXCk-CXS_nBGxfEmMQG26PXI', 30)
    //     //Token CTPM
    //     // setCookie('tokiuz', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImp0aSI6IjU1ZDIwYzc0LTAzMzctNDE1Zi1hNzhkLWJhNzVmMjNhMWE3OSIsImlhdCI6MTQ4OTU4NzYzNzEyNSwiZXhwIjoxNDg5NTg3NzIzNTI1fQ.eyJnIjoiMTY3ODk0NSIsInAiOiJDVFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiciI6IkRFRUFTIiwidSI6MjE1NywiZiI6WyIyMTYuMzM2Il0sImkiOiIifQ.LpyU8E8eap6EfTZ5ew23k3LacQTUNmOQF-qc_L_qYA8', 30)
    // }
    _hashDI.registers()
    if( sessionStorage.getItem( cfg.nome ) === 'true' && getCookie('tokiuz') ){
        if( location.hash !== '' &&  location.hash !== 'undefined'  ){
            _hashDI.executaHashDI(  location.hash )
        }else{
            _hashDI.executaHashDI(cfg.rotaInit )
        }
        //TODO fazer o initx
    }else if(sessionStorage.getItem( cfg.nome ) === null || sessionStorage.getItem( cfg.nome ) === 'false' && getCookie('tokiuz') ){
         sessionStorage.setItem( cfg.nome, true)
        if( location.hash !== '' &&  location.hash !== 'undefined'  ){
            _hashDI.executaHashDI(  location.hash )
        }else{
            _hashDI.executaHashDI( cfg.rotaInit )
        }
    }else{
        sessionStorage.setItem( cfg.nome, false)
        location = k.intranet
    }
}
