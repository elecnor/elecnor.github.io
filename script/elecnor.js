/*
 * https://elecnor.github.io
 * elecnor v1.0.0
 * copyright 2020 by elecnor
 * created on 2020/01/20 20:38
 * author fernando silva
 */

var brazil = "https://www.google.com/maps/d/embed?mid=1INsjKux93UdmBOXFMeRcc2Z1nGuL7KxE";

var projects = [
    /* 0 */
    [
        ["LT 500 KV GILBUÉS II - BARREIRAS II C2", "https://www.google.com/maps/d/embed?mid=1FfKUbWCZGy-5mGHVy9SZq4q9yUgcexqY"]
    ],
    /* 1 */
    [
        ["LT 230 KV ORIXIMINÁ - JURUTI", "https://www.google.com/maps/d/embed?mid=1RB07k0uE47ZHeYyCiWW3RjOpinUkIp7w"],
        ["LT 230 KV JURUTI - PARINTINS", "https://www.google.com/maps/d/embed?mid=1Khg7Y5FHYg1KlOwThv2OdOSiangeOBhD"]
    ],
    /* 2 */
    [
        ["LT 500 KV PARNAÍBA -TIANGUA", "https://www.google.com/maps/d/embed?mid=12fr8dvfOSLr6SLmb17HNNHS8agPSkKYW"],
        ["LT 230 KV IBIAPINA - TIANGUÁ", "https://www.google.com/maps/d/embed?mid=1VljyviybDxIyTsasZXhkV5akpxaUUmXu"],
        ["LT 230 KV IBIAPINA - PIRIPIRI", "https://www.google.com/maps/d/embed?mid=1XQfcYT61JcPb9Pjv0OHf2GoBaXSpdFL9"],
        ["LT 230 KV PIRIPIRI - TERESINA", "https://www.google.com/maps/d/embed?mid=1XnnikNeOefeZGNQYfkyWTG1VUq1NeKC1"],
        ["LT 230 KV ACARAÚ II - ACARAÚ III", "https://www.google.com/maps/d/embed?mid=18jsQeL4Bp_AZx_Zql0M3oDEIPg8-XERx"],
        ["SECC. LT 500 KV TIANGUÁ - SOBRAL", "https://www.google.com/maps/d/embed?mid=1eaX4vGNdhSACb7g8vOsulS_V86e3KhN4"],
        ["SECC. LT 500 KV TERESINA - TIANGUÁ", "https://www.google.com/maps/d/embed?mid=1xN29d_0-ONBkYMjO7HnIw8YOf7dOXVgR"],
    ],
    /* 3 */
    [
        ["LT 500 KV COLETORA FV SÃO JOÃO DO PIAUÍ", "https://www.google.com/maps/d/embed?mid=13RtoaKQCeMqVZ89RRV7IKTxGuDY9k9NH"]
    ],
    /* 4 */
    [
        ["LT 230 KV MONTE DO RONCA - JOÃO CÂMARA III", "https://www.google.com/maps/d/embed?mid=17zRtTnHkRs6MThC9uOWm9WZh3GwEl83-"]
    ],
    /* 5 */
    [
        ["LT 500 KV ARARAQUARA 2 - FERNÃO DIAS", "https://www.google.com/maps/d/embed?mid=1prRTTlk79Lf5QLclJme9Et_OT4ZcROBg"],
        ["LT 500 KV ARARAQUARA 2 - ITATIBA", "https://www.google.com/maps/d/embed?mid=1Ht7eLZdkjOVWGQpCTw5LiQmmHD5wuxAZ"],
        ["SECC. LT 500 KV CAMPINAS - CACHOEIRA PAULISTA", "https://www.google.com/maps/d/embed?mid=1IaMBu5tyXEdVjnanakq-CWBMcPO3vg0f"],
        ["SECC. LT 440 KV BOM JARDIM - TAUBATÉ", "https://www.google.com/maps/d/embed?mid=1iC7XY5iZkUG16lXl9ZhB98K0s7Ieaoqn"]
    ]
]

function loadMaps(parameter) {
    var identifier = parameter.id;
    var element    = document.getElementById(identifier);
    var list       = document.getElementById("div_list");
    list.innerHTML = "";
    if (projects[element.value].length > 1) {
        element.setAttribute("data-toggle", "modal");
        element.setAttribute("data-target", "#exampleModal");
        for (var a = 0; a < projects[element.value].length; a++) {
            var tagButton = document.createElement("button");
            tagButton.setAttribute("type", "button");
            tagButton.setAttribute("class", "list-group-item list-group-item-action");
            tagButton.setAttribute("id", "button_modal" + a);
            tagButton.setAttribute("value", projects[element.value][a][1]);
            tagButton.setAttribute("onclick", "getLink(this)");
            tagButton.innerHTML = projects[element.value][a][0];
            list.appendChild(tagButton);
        }
    } else {
        document.cookie = "link=" + projects[element.value][0][1] + "; path=/";
        location.href   = "maps";
    }
}

function getLink(parameter) {
    var identifier  = parameter.id;
    var element     = document.getElementById(identifier).value;
    document.cookie = "link=" + element + "; path=/";
    location.href   = "maps";
}

function getCookie(parameter) {
    var names = "; " + document.cookie;
    var split = names.split("; " + parameter + "=");
    if (split.length == 2) {
        return split.pop().split(";").shift()
    };
}

function updateIframe() {
    var cookie = getCookie("link") ? getCookie("link") : brazil;
    document.getElementById("iframe_maps").setAttribute("src", cookie);
}

function goIndex() {
    location.href = "index";
}

function goProjects() {
    location.href = "projects";
}

function goPowerbi() {
    location.href = "powerbi";
}