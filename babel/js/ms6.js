"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["a\nb"], ["a\\nb"]);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import * as sub from "./ms6_sub";
// import * as _ from "./sample";

// arrow function
var strBoolean = function strBoolean(b) {
    return b ? "true" : "false";
};

{
    var numbers = {
        nums: [1, 3, 5, 7, 9, 10, 13, 15, 17, 19],
        fives: [],
        fivecheck: function fivecheck() {
            var _this = this;

            // not change this value
            this.nums.forEach(function (v) {
                if (v % 5 === 0) _this.fives.push(v);
            });
        },
        fiveecho: function fiveecho() {
            logging("fives is " + JSON.stringify(this.fives));
        }
    };
    numbers.fivecheck();
    numbers.fiveecho();
}

// Constants
{
    var PI = 3.141593;
    logging("PI > 3 : " + strBoolean(PI > 3));
}

// Scoping
{
    var callbacks = [];

    var _loop = function _loop(i) {
        callbacks[i] = function () {
            return i * 2;
        };
    };

    for (var i = 0; i <= 2; i++) {
        _loop(i);
    }
    logging("callbacks0 " + callbacks[0]());
    logging("callbacks1 " + callbacks[1]());
    logging("callbacks2 " + callbacks[2]());
}

{
    var foo = function foo() {
        return 1;
    };

    logging("foo is " + strBoolean(foo() === 1));
    {
        var _foo = function _foo() {
            return 2;
        };

        logging("foo is 2 " + strBoolean(_foo() === 2));
    }
    logging("foo is 1 " + strBoolean(foo() === 1));
}

// Extended Parameter Handling
{
    var multi = function multi(a) {
        for (var _len = arguments.length, c = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            c[_key - 2] = arguments[_key];
        }

        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        if (c.length == 0) return a * b;
        var multi = a * b;
        c.forEach(function (v) {
            return multi = multi * v;
        });
        return multi;
    };
    logging("multi(1) = " + multi(1));
    logging("multi(3, 4) = " + multi(3, 4));
    logging("multi(3, 4, 5, 6) = " + multi(3, 4, 5, 6));

    var vals = ["a", "b", "c", "d", "e"];
    var vals2 = ["z", "y", "x"].concat(vals);
    logging("vals2" + JSON.stringify(vals2));
}

// Template Literals
{
    var _a = "abc\n";
    var _b = "def";
    var _c = 3;
    var _d = 4;
    var message = "hello\na = " + _a + "b = " + _b + "\n    c * d * 3 = " + _c * _d * 3;
    logging("message is " + message);

    // String.raw (not escape string)
    logging("String.raw = " + String.raw(_templateObject));
}

// Extended Literals(Binary & Octal Literal)
{
    var _obj;

    logging("0b111110111 === 503 : " + strBoolean(503 === 503));
    logging("0o767 === 503 : " + strBoolean(503 === 503));

    // Extended Literals(Unicode String & RegExp Literal)
    logging("\"\uD842\uDFB7\".length === 2 " + strBoolean("𠮷".length === 2));
    logging("\"\uD842\uDFB7\".match(/./u)[0].length === 2 " + strBoolean("𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0].length === 2));
    logging("\"\uD842\uDFB7\" === \"\uD842\uDFB7\" " + strBoolean("𠮷" === "\uD842\uDFB7"));
    logging("\"\uD842\uDFB7\" === \"\uD842\uDFB7\" " + strBoolean("𠮷" === "\uD842\uDFB7"));
    logging("\"\uD842\uDFB7\".codePointAt(0) == 0x20BB7 " + strBoolean("𠮷".codePointAt(0) == 0x20BB7));
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = "𠮷"[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var codepoint = _step.value;
            logging("codepoint = " + codepoint);
        } // Enhanced Object Properties
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var x = "a";
    var y = "b";
    var obj = (_obj = { x: x, y: y }, _defineProperty(_obj, x + y, x + y), _defineProperty(_obj, "foo", function foo() {
        return "bar";
    }), _obj);
    logging(JSON.stringify(obj));
    logging(obj.foo());
}

// Destructuring Assignment
{
    var _ref = [1, 2, 3],
        _a2 = _ref[0],
        _b2 = _ref[2];

    logging("a,b = " + _a2 + "," + _b2);
    var _ref2 = [_b2, _a2];
    _a2 = _ref2[0];
    _b2 = _ref2[1];

    logging("after [ a, b ] = [ b, a ]; a,b = " + _a2 + "," + _b2);
}
{
    var getObj = function getObj() {
        return { a: 1, b: 2, c: 3, x: { z: 9, y: 8 } };
    };

    var _getObj = getObj(),
        _getObj$e = _getObj.e,
        e = _getObj$e === undefined ? 99 : _getObj$e,
        c = _getObj.c,
        b = _getObj.b,
        a = _getObj.a,
        d = _getObj.x.y;

    logging("a, b, c, d, e = " + a + ", " + b + ", " + c + ", " + JSON.stringify(d) + ", " + e);
}

// Parameter Context Matching
{
    var f = function f(_ref3) {
        var a = _ref3.a,
            b = _ref3.b;

        logging("a, b = " + a + ", " + b);
    };
    f({ b: "B", a: "A" });

    var f2 = function f2(_ref4) {
        var a = _ref4.A,
            b = _ref4.B;

        logging("a, b = " + a + ", " + b);
    };
    f2({ B: "B", A: "A" });
}

// {
//     sub.foo();
// }

// Classes
{
    var Shape = function () {
        _createClass(Shape, [{
            key: "x",
            set: function set(v) {
                this._x = v;
            },
            get: function get() {
                return this._x;
            }
        }, {
            key: "y",
            set: function set(v) {
                this._y = v;
            },
            get: function get() {
                return this._y;
            }
        }], [{
            key: "createDefault",
            value: function createDefault() {
                return new Shape(0, 100, 100);
            }
        }]);

        function Shape(id, x, y) {
            _classCallCheck(this, Shape);

            this.id = id;
            this.x = x;
            this.y = y;
        }

        _createClass(Shape, [{
            key: "toString",
            value: function toString() {
                return "Shape > id:" + this.id + ",x:" + this.x + ",y:" + this.y;
            }
        }]);

        return Shape;
    }();

    var Rectangle = function (_Shape) {
        _inherits(Rectangle, _Shape);

        function Rectangle(id, x, y, width, height) {
            _classCallCheck(this, Rectangle);

            var _this2 = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, id, x, y));

            _this2.width = width;
            _this2.height = height;
            return _this2;
        }

        _createClass(Rectangle, [{
            key: "toString",
            value: function toString() {
                return _get(Rectangle.prototype.__proto__ || Object.getPrototypeOf(Rectangle.prototype), "toString", this).call(this) + (" Rectangle > id:" + this.id + ", width:" + this.width + ", height:" + this.height);
            }
        }]);

        return Rectangle;
    }(Shape);

    var shape = new Shape(1, 3, 5);
    shape.x = 10;
    logging(shape.toString());

    var rectangle = new Rectangle(2, 4, 6, 100, 50);
    logging(rectangle.toString());

    var defaultShape = Shape.createDefault();
    logging(defaultShape.toString());
}

// Iterators
{
    var fibonacci = _defineProperty({}, Symbol.iterator, function () {
        var pre = 0,
            cur = 1;
        return {
            next: function next() {
                var _ref5 = [cur, pre + cur];
                pre = _ref5[0];
                cur = _ref5[1];

                return { done: false, value: cur };
            }
        };
    });

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = fibonacci[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var n = _step2.value;

            if (n > 1000) break;
            logging(n.toString());
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = fibonacci[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _n = _step3.value;

            if (_n > 1000) break;
            logging(_n.toString());
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
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
    var s = new Set();
    s.add("hello").add("goodbye").add("kitty");

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = s.values()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var key = _step4.value;
            // insertion order
            logging(key);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    logging("s.has(\"kitty\") : " + s.has("kitty"));
    logging(s.size.toString());
}

{
    var m = new Map();
    var _s = Symbol();
    m.set("hello", 42);
    m.set(_s, 34);
    m.get(_s) === 34;
    m.size === 2;
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = m.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _step5$value = _slicedToArray(_step5.value, 2),
                _key2 = _step5$value[0],
                val = _step5$value[1];

            logging(JSON.stringify(_key2) + " = " + val);
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }
}