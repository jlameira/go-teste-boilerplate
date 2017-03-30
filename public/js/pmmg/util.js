function contemAlgum(lista,outraLista){
    for (var i = 0; i < outraLista.length; i++) {
        if (lista.indexOf(outraLista[i]) > -1) {
            return true
        }
    }
    return false
}

function kontaiz(t, v) {
    for (var i = 0; i < t.length; i++) {
        if (t[i] === v && i in t) {
            return true
        }
    }
    return false
}

function dispatch(fn, args) {
    fn = (typeof fn == "function") ? fn : window[fn];  // Allow fn to be a function object or the name of a global function
    return fn.apply(this, args || []);  // args is optional, use an empty array by default
}

function funcz(func /*, 0..n args */) {
    var args = Array.prototype.slice.call(arguments).splice(1);
    return function () {
        var allArguments = args.concat(Array.prototype.slice.call(arguments));
        return func.apply(this, allArguments);
    };
}

function funcz2(func, vetor) {
    return function () {
        return func.apply(this, vetor);
    };
}

function removeStrArray(array, str) {

    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] === str) {
            array.splice(i, 1);
            break;
        }
    }
}

function filtrarLista(lista, valor, prop) {
    var filtrada = [];
    for (i = lista.length - 1; i >= 0; --i) {
        if (lista[i][prop].indexOf(valor) > -1) {
            filtrada.push(lista[i])
        }
    }
    return filtrada
}

function ordenaPm(lista, prop) {

    var num = [];
    var letra = [];

    for (i = 0; i < lista.length; i++) {
        if (parseInt(lista[i][prop][0])) {
            num.push(lista[i])
        } else {
            letra.push(lista[i])
        }
    }

    letra = letra.sort(function (a, b) {
        return a[prop].localeCompare(b[prop])
    });

    return letra.concat(num.sort(comparaAlfaNumChave(prop)))
}

function comparaAlfaNumChave(chave) {
    return function (a, b) {
        var ra = a[chave].match(/\D+|\d+/g);
        var rb = b[chave].match(/\D+|\d+/g);
        var r = 0;

        while (!r && ra.length && rb.length) {
            var x = ra.shift(), y = rb.shift(),
                nx = parseInt(x), ny = parseInt(y);

            if (isNaN(nx) || isNaN(ny))
                r = x < y ? 1 : (x < y ? -1 : 0);
            else
                r = nx - ny;
        }
        return r || ra.length - rb.length;
    }
}

function recuperaValoresArrayIndexByProp(obj, index){
    var valores = []
    var chaves = Object.keys(obj)
    for(var i=0;i<chaves.length;i++){
        valores.push( obj[ chaves[i] ][ index ]  )
    }
    return valores
}

function setaValorArrayIndexByProp(obj,index,novoValor){
    var chaves = Object.keys(obj)
    for(var i=0;i<chaves.length;i++){
        obj[ chaves[i] ][ index ] = novoValor
    }
    return obj
}

function cfgFuncao(func,params){
    var valores = [];
    for (var ii = 0; ii < params.length; ii++) {
        valores.push(params[ii])
    }
    return funcz2(func, valores)
}

//TODO realocar depois
function nav(rota){

    if( rota  === location.hash ){
        _hashDI.executaHashDI( rota )
    }else{
        location.hash = rota
    }
   
    return false
}