function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var showCookiePopup = true;

function hidePopup() {
    showCookiePopup = false;
    if (showCookiePopup === false) {
        $('.cookie').css('display', 'none');
    }
    return;
}

function hasCookie() {
    var cookie = getCookie("cookies_accepted");
    if (cookie != "" && cookie == "true") {
        hidePopup();
    }else {
        var el = document.getElementById("cookieAccept");
        if (el) {
            el.addEventListener('click', addCookie, false);
        }
    }
}

function addCookie() {
    setCookie("cookies_accepted", "true", 365);
    hidePopup();
}

$(document).ready(function () {
    hasCookie();
});
