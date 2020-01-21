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
        ["LT 230 KV ORIXIMINÁ - JURUTI", brazil],
        ["LT 230 KV JURUTI - PARINTINS", brazil]
    ],
    /* 2 */
    [
        ["LT 500 KV PARNAÍBA -TIANGUA", brazil],
        ["LT 230 KV IBIAPINA - TIANGUÁ", brazil],
        ["LT 230 KV IBIAPINA - PIRIPIRI", brazil],
        ["LT 230 KV PIRIPIRI - TERESINA", brazil],
        ["LT 230 KV ACARAÚ II - ACARAÚ III", brazil],
        ["SECC. LT 500 KV TIANGUÁ - SOBRAL", brazil],
        ["SECC. LT 500 KV TERESINA - TIANGUÁ", brazil],
    ],
    /* 3 */
    [
        ["LT 500 KV COLETORA FV SÃO JOÃO DO PIAUÍ", brazil]
    ],
    /* 4 */
    [
        ["LT 230 KV MONTE DO RONCA - JOÃO CÂMARA III", brazil]
    ],
    /* 5 */
    [
        ["LT 500 KV ARARAQUARA 2 - FERNÃO DIAS", brazil],
        ["LT 500 KV ARARAQUARA 2 - ITATIBA", brazil],
        ["SECC. LT 500 KV CAMPINAS - CACHOEIRA PAULISTA", brazil],
        ["SECC. LT 440 KV BOM JARDIM - TAUBATÉ", brazil]
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

function backIndex() {
    location.href = "index";
}