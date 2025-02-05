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

function hejhej() {
    const word = document.getElementById("search-input").value.toLowerCase();

    const link_vindkraft = "wind.html";
    const link_vattenkraft = "water.html";
    const link_solenergi = "solar.html";
    const link_vågkraft = "wave.html";
    const link_kärnkraft = "nuclear.html";
    const link_home = "index.html";

    if (word === "vindkraft") {
        window.location.href = link_vindkraft;
    } else if (word === "vattenkraft") {
        window.location.href = link_vattenkraft;
    } else if (word === "solkraft") {
        window.location.href = link_solkraft;
    } else if (word === "vågkraft") {
        window.location.href = link_vågkraft
    } else if (word === "kärnkraft") {
        window.location.href = link_kärnkraft;
    } else if (word === "wind power") {
        window.location.href = link_vindkraft;
    } else if (word === "water power") {
        window.location.href = link_vattenkraft;
    } else if (word === "solar power") {
        window.location.href = link_solkraft;
    } else if (word === "nuclear power") {
        window.location.href = link_kärnkraft;
    } else if (word === "hydropower") {
        window.location.href = link_vattenkraft;
    } else if (word === "techhub") {
        window.location.href = link_home;
    } else {
        window.location.href = "notfound.html"
    }
}