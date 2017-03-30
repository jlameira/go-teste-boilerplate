/*
 window.onload = function (e) {
 alert(location.hash)
 }

 var myEvent = window.attachEvent || window.addEventListener;
 var chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'; /// make IE7, IE8 compitable

 myEvent(chkevent, function(e) { // For >=IE7, Chrome, Firefox
 executaHashDI(location.hash)
 e.preventDefault()
 });
 */

var _hashDI = new ( function () {

    var me = {
        appAtual : null,
        wasPressed : false,
        ctrlKeyDown : false
    }

    me.registers = function(){
        me.registerOnHashChange()
        me.registerForCtrlF5()
    }

    me.registerOnHashChange = function (){
        window.onhashchange = me.locationHashChanged
    }

    me.registerForCtrlF5 = function (){
        document.onkeydown = me.F5
        document.onkeyup = me.F5
    }

    me.init = function( ){
        me.registers()
    }

    me.F5 = function(e){
        window.onhashchange = me.locationHashChanged
        e = e || window.event;

        if (e.keyCode == 116) {  //|| ( me.ctrlKeyDown && e.keyCode == 116 )
            e.preventDefault()
            me.executaHashDI(location.hash)
            //wasPressed = true;
        } else if(window.event){

            window.event.cancelBubble = true;
        }

        /*if( me.wasPressed ) return;
         if ((e.which || e.keyCode) == 17) {
         me.ctrlKeyDown = true;
         }*/
    }

    me.locationHashChanged = function () {

        if( location.hash === '' ||  location.hash === 'undefined' ){
            _hashDI.executaHashDI( cfg.rotaInit )
        }else{
            me.executaHashDI( location.hash )
        }
    }

    me.executaHashDI = function(hash,alteraLocation) {

        if (getCookie('tokiuz')) {

            if ( location.hash === '' || location.hash === undefined ) {

                 ///TODO aqui tem q ser intranet
                location.hash = + cfg.rotaInit
            } else {

                var rota = _di.rotas[hash]
                if( rota != undefined && rota != null){
                    menuAtivo([1])
                        zpa(hash, rota)
                }else{
                    //TODO e manda uma mensagem falando que tal rota não existe
                    location.hash = cfg.rotaInit
                    mostraMsg('erro',hash + ' rota não existe')
                }
            }
        }
    }

    return me
})
