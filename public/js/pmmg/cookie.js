function setCookie(cname, cvalue, minutos) {
    var d = new Date();
    d.setTime(d.getTime() + (minutos * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
function delCookie(cname) {
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function buscarJSSOID() {
    try {
        var cookiez = window.location.href.split('?')[1].split(';');
        for (i = cookiez.length - 1; i >= 0; --i) {
            if (cookiez[i].indexOf('JSESSIONIDSSO=') > -1) {
                return cookiez[i].split('&')[0].split('JSESSIONIDSSO=')[1]
            }
        }
    } catch (e) {
        return '';
    }
}
