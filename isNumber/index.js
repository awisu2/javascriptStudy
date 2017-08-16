function isNumber(v){
    let type = typeof(v);
    if (type != "number" && type != "string") return true;
    return v == parseFloat(v) && isFinite(v);
}

function isExists(v){
    if(!v) return false;
    return typeof(v) != "object" ||  Object.keys(v).length !== 0;
}

function echoIsNumber(x){
    console.log(x, isNumber(x) ? "true": "false", isExists(x) ? "true": "false");
}

function main() {
    echoIsNumber();
    echoIsNumber(1);
    echoIsNumber(0);
    echoIsNumber(-1);
    echoIsNumber(NaN);
    echoIsNumber(Infinity);    
    echoIsNumber("a");
    echoIsNumber("");
    echoIsNumber(null);
    echoIsNumber([]);
    echoIsNumber([1]);
    echoIsNumber([0]);
    echoIsNumber({});
    echoIsNumber({a:1});
    echoIsNumber(()=>{});
    echoIsNumber(function(){});
    echoIsNumber(main);}
main();

// undefined 'is' 'undefined'
// 1 'is' 'number'
// 0 'is' 'number'
// -1 'is' 'number'
// a is string
//  is string
// null 'is' 'object'
// [] 'is' 'object'
// {} 'is' 'object'
// [Function] 'is' 'function'
// [Function] 'is' 'function'
