import * as sub from "./ms6_sub";
import * as _ from "./sample";

// arrow function
let strBoolean = b => b ? "true" : "false";

{
    let numbers = {
        nums : [1,3,5,7,9,10,13,15,17,19],
        fives : [],
        fivecheck : function(){
            // not change this value
            this.nums.forEach((v) => {
                if (v % 5 === 0) this.fives.push(v);
            });
        },
        fiveecho: function() {
            _.logging("fives is " + JSON.stringify(this.fives));
        },
    }
    numbers.fivecheck();
    numbers.fiveecho();
}

// Constants
{
    const PI=3.141593;
    _.logging("PI > 3 : " + strBoolean(PI > 3));
}

// Scoping
{
    let callbacks = [];
    for (let i = 0; i <= 2; i++) {
        callbacks[i] = ()=>{ return i * 2 };
    }
    _.logging("callbacks0 " + callbacks[0]());
    _.logging("callbacks1 " + callbacks[1]());
    _.logging("callbacks2 " + callbacks[2]());
}

{
    function foo () { return 1 }
    _.logging("foo is " + strBoolean(foo() === 1));
    {
        function foo () { return 2 }
        _.logging("foo is 2 " + strBoolean(foo() === 2));
        
    }
    _.logging("foo is 1 " + strBoolean(foo() === 1));
}

// Extended Parameter Handling
{
    let multi = (a, b=1, ...c) => {
        if (c.length == 0) return a * b;
        let multi = a * b;
        c.forEach(v => multi = multi * v);
        return multi;
    }
    _.logging("multi(1) = " + multi(1));
    _.logging("multi(3, 4) = " + multi(3, 4));
    _.logging("multi(3, 4, 5, 6) = " + multi(3, 4, 5, 6));

    let vals = ["a","b","c","d","e"];
    let vals2 = ["z","y","x",...vals];
    _.logging("vals2" + JSON.stringify(vals2));
}

// Template Literals
{
    let a = "abc\n";
    let b = "def";
    let c = 3;
    let d = 4;
    let message = `hello\na = ${a}b = ${b}
    c * d * 3 = ${c * d * 3}`;
    _.logging("message is " + message);

    // String.raw (not escape string)
    _.logging("String.raw = " + String.raw`a\nb`);
}

// Extended Literals(Binary & Octal Literal)
{
    _.logging("0b111110111 === 503 : " + strBoolean(0b111110111 === 503));
    _.logging("0o767 === 503 : " + strBoolean(0o767 === 503));

    // Extended Literals(Unicode String & RegExp Literal)
    _.logging(`"𠮷".length === 2 ${strBoolean("𠮷".length === 2)}`);
    _.logging(`"𠮷".match(/./u)[0].length === 2 ${strBoolean("𠮷".match(/./u)[0].length === 2)}`);
    _.logging(`"𠮷" === "\uD842\uDFB7" ${strBoolean("𠮷" === "\uD842\uDFB7")}`);
    _.logging(`"𠮷" === "\u{20BB7}" ${strBoolean("𠮷" === "\u{20BB7}")}`);
    _.logging(`"𠮷".codePointAt(0) == 0x20BB7 ${strBoolean("𠮷".codePointAt(0) == 0x20BB7)}`);
    for (let codepoint of "𠮷") _.logging(`codepoint = ${codepoint}`)

    // Enhanced Object Properties
    let x = "a";
    let y = "b";
    let obj = { x, y, [x+y]: x+y, foo(){return "bar"}};
    _.logging(JSON.stringify(obj));
    _.logging(obj.foo());
}

// Destructuring Assignment
{
    let [ a, , b ] = [ 1, 2, 3 ];
    _.logging(`a,b = ${a},${b}`);
    [ a, b ] = [ b, a ];
    _.logging(`after [ a, b ] = [ b, a ]; a,b = ${a},${b}`);
}
{
    let getObj = ()=>({a:1,b:2,c:3,x:{z:9,y:8}});
    var {e=99, c, b, a, x:{y:d}} = getObj();
    _.logging(`a, b, c, d, e = ${a}, ${b}, ${c}, ${JSON.stringify(d)}, ${e}`);
}

// Parameter Context Matching
{
    let f = ({a, b}) => {
        _.logging(`a, b = ${a}, ${b}`);
    }
    f({b: "B", a: "A"});

    let f2 = ({A:a, B:b}) => {
        _.logging(`a, b = ${a}, ${b}`);
    }
    f2({B: "B", A: "A"});
}

{
    sub.foo();
}
