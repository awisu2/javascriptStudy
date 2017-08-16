function echoTrueFalse(v) {
    console.log(v, "is " + (v ? "true": "false"), typeof(v));
}

function main() {
    echoTrueFalse();
    echoTrueFalse(1);
    echoTrueFalse(0);
    echoTrueFalse(-1);
    echoTrueFalse(NaN);
    echoTrueFalse(Infinity);    
    echoTrueFalse("a");
    echoTrueFalse("");
    echoTrueFalse(null);
    echoTrueFalse([]);
    echoTrueFalse([1]);
    echoTrueFalse([0]);
    echoTrueFalse({});
    echoTrueFalse({a:1});
    echoTrueFalse(()=>{});
    echoTrueFalse(function(){});
    echoTrueFalse(main);
}
main();

// undefined 'is false' 'undefined'
// 1 'is true' 'number'
// 0 'is false' 'number'
// -1 'is true' 'number'
// NaN 'is false' 'number'
// Infinity 'is true' 'number'
// a is true string
//  is false string
// null 'is false' 'object'
// [] 'is true' 'object'
// [ 1 ] 'is true' 'object'
// [ 0 ] 'is true' 'object'
// {} 'is true' 'object'
// { a: 1 } 'is true' 'object'
// [Function] 'is true' 'function'
// [Function] 'is true' 'function'
// [Function: main] 'is true' 'function'
