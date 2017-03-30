var sufixDATALIST = '_dl_'

var getTipoDadoValue = {
    hidden: function (idc) {
        return cidv(idc)
    },
    text: function (idc) {
        return cidv(idc)
    },
    radio: function (idc) {
        return cidVcheck(idc)
    },
    check: function (idc) {
        return cidVcheck(idc)
    },
    file: function (idc) {
        return cidVFile(idc, false) //TODO olhar como falar que ( pode ou tem que ter mais de 1 ) ,opts ?  opts.mult = true ? pensar no opts para os outros
    },
    'select-one': function (idc) {
        var val = cidVSelect(idc)
        return val === 'Selecione' ? null : val
    },
    'select-multiple': function (idc) {
        return cidVSelectMultiple(idc)
    },
    'datalist': function (idc) {

        var shownVal = document.getElementById(idc + sufixDATALIST).value;
        if (shownVal && shownVal.trim() !== '') {
            try {
                var value2send = document.querySelector("#" + idc + " option[value='" + shownVal + "']").label;
                return value2send + '#' + shownVal
            } catch (e) {
                cidvv(idc + sufixDATALIST)
                return ''
            }
        } else {
            return ''
        }
    }
}

var setTipoDadoValue = {
    text: function (id, valor) {
        cidvv(id, valor)
    },
    hidden: function (id, valor) {
        cidvv(id, valor)
    },
    radio: function (id, valor) {
        cidCheckV(id, valor)
    },
    check: function (id, valor) {
        cidCheckV(id, valor)
    },
    file: function (id, valor) {
        //TODO apenas o nome do arquivo
    },
    'select-one': function (id, valor) {
        if (valor) {
            cidSelectV(id, valor)
        }
    },
    'select-multiple': function (id, valores) {
        if (valores) {
            cidSelectMultV(id, valores)
        }
    },
    'datalist': function (idc, valores) {

        var id = valores.split('#')[0]
        var label = valores.split('#')[1]

        var list = cid(idc)
        var option = document.createElement('option');
        option.label = id
        option.value = label;
        list.appendChild(option);

        cidvv(idc + sufixDATALIST, label)
    }
}

function getValorComponente(c) {  //TODO opts

    if (c.nodeName === 'DATALIST') {
        return getTipoDadoValue['datalist'](c.id)
    } else {
        return getTipoDadoValue[c.type](c.id)
    }
}

function setaValorComponente(c, valor) {  //TODO opts
    if (c.nodeName === 'DATALIST') {
        return setTipoDadoValue['datalist'](c.id, valor)
    } else {
        setTipoDadoValue[c.type](c.id, valor)
    }
}

function getDados(chaves, prefixcount) {
    var dados = {};

    if (!prefixcount) {
        prefixcount = 0
    }
    for (var i = 0; i < chaves.length; i++) {
        var comp = cid(chaves[i])
        if (comp) {

            dados[chaves[i].substring(prefixcount, chaves[i].length)] = getValorComponente(comp)
        }
    }
    return dados;
}

function getDadosFile(idForm, chaves, prefixcount) {

    var dados = new FormData(cid(idForm));
    if (!prefixcount) {
        prefixcount = 0
    }
    for (i = chaves.length - 1; i >= 0; --i) {
        var comp = cid(chaves[i])
        if (comp) {
            dados.append(chaves[i].substring(prefixcount, chaves[i].length), getValorComponente(comp))
        }
    }
    return dados;
}

function populaFormulario(dados, prefix) {

    var campos = Object.keys(dados);
    for (var i = 0; i < campos.length; i++) {
        var comp = cid(campos[i])
        if (comp) {
            setaValorComponente(comp, dados[campos[i]])
        }
    }
}
