let logging = (text = "---")=>{
    let html = $("#log").html();
    if(html) html = html + "<br>";
    $("#log").html(html + text.replace(/\n/g, "<br>"));
};

exports.logging = logging;