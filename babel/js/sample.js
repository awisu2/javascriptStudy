"use strict";

setTimeout(function () {
    var foo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "bar";

    console.log(foo);
}, 1000);

var logging = function logging() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "---";

    var html = $("#log").html();
    if (html) html = html + "<br>";
    $("#log").html(html + text);
};