if (getCookie('PMMG_SESSIONID') === null || getCookie('PMMG_SESSIONID') === '') {
    setCookie('PMMG_SESSIONID', 'bANhw4yt9TQit4PvHmZ42yBNHNJq2pAupNiEGkHO', 30)

}
if (sessionStorage.getItem( cfg.nome ) === null || sessionStorage.getItem(cfg.nome) === 'false') {
    if (cid('g')) {
        $.ajax({
            method: 'GET',
            url: k.intranet + '/lite/seguranca/web/menuservice/menugeral?token=' + getCookie('PMMG_SESSIONID'),
            success: function (data) {
            cid('g').insertAdjacentHTML("afterbegin",data)
            sessionStorage.setItem('restMenu', data)
            }
        });
    }
} else if (sessionStorage.getItem( cfg.nome ) === true) {
    cid('g').insertAdjacentHTML("afterbegin",sessionStorage.getItem('restMenu'))
    // cidInner('restMenu', sessionStorage.getItem('restMenu'))
}

var menuLateral = function(){
    //TODO
}

var menuSuperior = function(){
    //TODO
}

var menuFuncionalidade = function(){
    //TODO
}