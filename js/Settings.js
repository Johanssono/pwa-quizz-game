
function PauseCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) +
        ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getPauseCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}






function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) +
        ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

var myAudio = document.getElementById('audioplayer');

var song = document.getElementsByTagName('audio')[0];
var played = false;
var ifPaused = getPauseCookie('paused');

var tillPlayed = getCookie('timePlayed');
function update() {
    if (!played) {
        if (tillPlayed) {
            song.currentTime = tillPlayed;
            if (ifPaused) {
                song.play();
                played = true;
            }
            else {
                played = true;
            }
        }
        else {
            song.play();
            played = true;
        }
    }

    else {
        setCookie('timePlayed', song.currentTime);
        PauseCookie('paused', myAudio)
    }
}
setInterval(update, 1000);





function ColorCheck() {
    if ("11" == (document.cookie.match(/^(?:.*;)?\s*Color\s*=\s*([^;]+)(?:.*)?$/) || [, null])[1] || "10" == (document.cookie.match(/^(?:.*;)?\s*Color\s*=\s*([^;]+)(?:.*)?$/) || [, null])[1]) {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}
var dark = false;
function darkmode() {
    if (dark) {
        dark = false;
        document.getElementById("moon").classList.remove("sun");
        document.getElementById("tdnn").classList.remove("day");
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            document.cookie = "Color=11;";
        } else {
            document.cookie = "Color=01;";
        }
    } else {
        dark = true;
        document.getElementById("moon").classList.add("sun");
        document.getElementById("tdnn").classList.add("day");
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.cookie = "Color=10;";
        } else {
            document.cookie = "Color=00;";
        }
    }
    ColorCheck();
}
window.onload = function start() {
    if ("11" == (document.cookie.match(/^(?:.*;)?\s*Color\s*=\s*([^;]+)(?:.*)?$/) || [, null])[1] || "01" == (document.cookie.match(/^(?:.*;)?\s*Color\s*=\s*([^;]+)(?:.*)?$/) || [, null])[1]) {
        ColorCheck();
    }
    else {
        darkmode();
    }
}