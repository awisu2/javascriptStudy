setTimeout((foo = "bar") => {
    console.log(foo);
}, 1000);

let logging = (text = "---")=>{
    let html = $("#log").html();
    if(html) html = html + "<br>";
    $("#log").html(html + text);
};