# isNumber

check is number arg

## function

```
function isNumber(v){
    let type = typeof(v);
    if (type != "number" && type != "string") return true;
    return v == parseFloat(v) && isFinite(v);
}
```

## result

```
undefined 'true' 'false'
1 'true' 'true'
0 'true' 'false'
-1 'true' 'true'
NaN 'false' 'false'
Infinity 'false' 'true'
a false true
 false false
null 'true' 'false'
[] 'true' 'false'
[ 1 ] 'true' 'true'
[ 0 ] 'true' 'true'
{} 'true' 'false'
{ a: 1 } 'true' 'true'
[Function] 'true' 'true'
[Function] 'true' 'true'
[Function: main] 'true' 'true'
```