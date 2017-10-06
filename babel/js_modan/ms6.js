// import * as sub from "./ms6_sub";
// import * as _ from "./sample";

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
            logging("fives is " + JSON.stringify(this.fives));
        },
    }
    numbers.fivecheck();
    numbers.fiveecho();
}

// Constants
{
    const PI=3.141593;
    logging("PI > 3 : " + strBoolean(PI > 3));
}

// Scoping
{
    let callbacks = [];
    for (let i = 0; i <= 2; i++) {
        callbacks[i] = ()=>{ return i * 2 };
    }
    logging("callbacks0 " + callbacks[0]());
    logging("callbacks1 " + callbacks[1]());
    logging("callbacks2 " + callbacks[2]());
}

{
    function foo () { return 1 }
    logging("foo is " + strBoolean(foo() === 1));
    {
        function foo () { return 2 }
        logging("foo is 2 " + strBoolean(foo() === 2));
        
    }
    logging("foo is 1 " + strBoolean(foo() === 1));
}

// Extended Parameter Handling
{
    let multi = (a, b=1, ...c) => {
        if (c.length == 0) return a * b;
        let multi = a * b;
        c.forEach(v => multi = multi * v);
        return multi;
    }
    logging("multi(1) = " + multi(1));
    logging("multi(3, 4) = " + multi(3, 4));
    logging("multi(3, 4, 5, 6) = " + multi(3, 4, 5, 6));

    let vals = ["a","b","c","d","e"];
    let vals2 = ["z","y","x",...vals];
    logging("vals2" + JSON.stringify(vals2));
}

// Template Literals
{
    let a = "abc\n";
    let b = "def";
    let c = 3;
    let d = 4;
    let message = `hello\na = ${a}b = ${b}
    c * d * 3 = ${c * d * 3}`;
    logging("message is " + message);

    // String.raw (not escape string)
    logging("String.raw = " + String.raw`a\nb`);
}

// Extended Literals(Binary & Octal Literal)
{
    logging("0b111110111 === 503 : " + strBoolean(0b111110111 === 503));
    logging("0o767 === 503 : " + strBoolean(0o767 === 503));

    // Extended Literals(Unicode String & RegExp Literal)
    logging(`"𠮷".length === 2 ${strBoolean("𠮷".length === 2)}`);
    logging(`"𠮷".match(/./u)[0].length === 2 ${strBoolean("𠮷".match(/./u)[0].length === 2)}`);
    logging(`"𠮷" === "\uD842\uDFB7" ${strBoolean("𠮷" === "\uD842\uDFB7")}`);
    logging(`"𠮷" === "\u{20BB7}" ${strBoolean("𠮷" === "\u{20BB7}")}`);
    logging(`"𠮷".codePointAt(0) == 0x20BB7 ${strBoolean("𠮷".codePointAt(0) == 0x20BB7)}`);
    for (let codepoint of "𠮷") logging(`codepoint = ${codepoint}`)

    // Enhanced Object Properties
    let x = "a";
    let y = "b";
    let obj = { x, y, [x+y]: x+y, foo(){return "bar"}};
    logging(JSON.stringify(obj));
    logging(obj.foo());
}

// Destructuring Assignment
{
    let [ a, , b ] = [ 1, 2, 3 ];
    logging(`a,b = ${a},${b}`);
    [ a, b ] = [ b, a ];
    logging(`after [ a, b ] = [ b, a ]; a,b = ${a},${b}`);
}
{
    let getObj = ()=>({a:1,b:2,c:3,x:{z:9,y:8}});
    var {e=99, c, b, a, x:{y:d}} = getObj();
    logging(`a, b, c, d, e = ${a}, ${b}, ${c}, ${JSON.stringify(d)}, ${e}`);
}

// Parameter Context Matching
{
    let f = ({a, b}) => {
        logging(`a, b = ${a}, ${b}`);
    }
    f({b: "B", a: "A"});

    let f2 = ({A:a, B:b}) => {
        logging(`a, b = ${a}, ${b}`);
    }
    f2({B: "B", A: "A"});
}

// {
//     sub.foo();
// }

// Classes
{
    class Shape {
        set x (v){this._x = v}
        get x () {return this._x}
        set y (v){this._y = v}
        get y () {return this._y}

        static createDefault () {
            return new Shape(0, 100, 100)
        }
        constructor (id, x, y) {
            this.id = id;
            this.x = x;
            this.y = y;
        }
        toString () {
            return `Shape > id:${this.id},x:${this.x},y:${this.y}`
        }
    }
    class Rectangle extends Shape {

        constructor (id, x, y, width, height) {
            super(id, x, y)
            this.width  = width;
            this.height = height;
        }
        toString () {
            return super.toString() + ` Rectangle > id:${this.id}, width:${this.width}, height:${this.height}`;
        }
    }
    let shape = new Shape(1, 3, 5);
    shape.x = 10;
    logging(shape.toString())

    let rectangle = new Rectangle(2, 4, 6, 100, 50);
    logging(rectangle.toString())

    let defaultShape = Shape.createDefault();
    logging(defaultShape.toString())
}

// Iterators
{
    let fibonacci = {
        [Symbol.iterator]() {
            let pre = 0, cur = 1
            return {
               next () {
                   [ pre, cur ] = [ cur, pre + cur ]
                   return { done: false, value: cur }
               }
            }
        }
    };

    for (let n of fibonacci) {
        if (n > 1000) break
        logging(n.toString());
    }
    for (let n of fibonacci) {
        if (n > 1000) break
        logging(n.toString());
    }
}

// {
//     //  generic asynchronous control-flow driver
//     function async (proc, ...params) {
//         var iterator = proc(...params)
//         return new Promise((resolve, reject) => {
//             let loop = (value) => {
//                 let result
//                 try {
//                     result = iterator.next(value)
//                 }
//                 catch (err) {
//                     reject(err)
//                 }
//                 if (result.done)
//                     resolve(result.value)
//                 else if (   typeof result.value      === "object"
//                          && typeof result.value.then === "function")
//                     result.value.then((value) => {
//                         loop(value)
//                     }, (err) => {
//                         reject(err)
//                     })
//                 else
//                     loop(result.value)
//             }
//             loop()
//         })
//     }

//     //  application-specific asynchronous builder
//     function makeAsync (text, after) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve(text), after)
//         })
//     }

//     //  application-specific asynchronous procedure
//     async(function* (greeting) {
//         let foo = yield makeAsync("foo", 300)
//         let bar = yield makeAsync("bar", 200)
//         let baz = yield makeAsync("baz", 100)
//         return `${greeting} ${foo} ${bar} ${baz}`
//     }, "Hello").then((msg) => {
//         console.log("RESULT:", msg) // "Hello foo bar baz"
//     })
// }

{
    let s = new Set()
    s.add("hello").add("goodbye").add("kitty")

    for (let key of s.values()) // insertion order
        logging(key);
    logging(`s.has("kitty") : ${(s.has("kitty"))}`);
    logging(s.size.toString());
}

{
    let m = new Map()
    let s = Symbol()
    m.set("hello", 42)
    m.set(s, 34)
    m.get(s) === 34
    m.size === 2
    for (let [ key, val ] of m.entries())
        logging(JSON.stringify(key) + " = " + val)
}

