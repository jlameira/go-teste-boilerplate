if (typeof(Storage) === "undefined") {
    alert('Atualize seu navegador')
    throw Error('Atualize seu navegador')
}

function createCtx() {
    if(!sessionStorage.getItem('_ctx_')){
        sessionStorage.setItem('_ctx_', JSON.stringify({}))
    }
}

function getCtxP(key) {
    return JSON.parse( sessionStorage.getItem('_ctx_') )[key]
}

function getCtxO(key) {
    //TODO tratar se a key nao existir senao da pau
    return JSON.parse( JSON.parse( sessionStorage.getItem('_ctx_') )[key] )
}

function setCtxP(key, val) {

    var ctx = JSON.parse( sessionStorage.getItem('_ctx_') )
    ctx[key] = val
    sessionStorage.setItem('_ctx_', JSON.stringify(ctx))
}

function setCtxO(key, val) {
    var ctx = JSON.parse( sessionStorage.getItem('_ctx_') )
    ctx[key] = JSON.stringify( val )
    sessionStorage.setItem('_ctx_', JSON.stringify(ctx))
}

function limpaCtx(key) {
    var ctx = JSON.parse( sessionStorage.getItem('_ctx_') )
    delete ctx[key]
    sessionStorage.setItem('_ctx_', JSON.stringify(ctx))
}

function resetCtx() {
    createCtx()
}




