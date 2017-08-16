(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _templateObject = _taggedTemplateLiteral(["a\nb"], ["a\\nb"]);

var _ms6_sub = require("./ms6_sub");

var sub = _interopRequireWildcard(_ms6_sub);

var _sample = require("./sample");

var _ = _interopRequireWildcard(_sample);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
            _.logging("fives is " + JSON.stringify(this.fives));
        }
    };
    numbers.fivecheck();
    numbers.fiveecho();
}

// Constants
{
    var PI = 3.141593;
    _.logging("PI > 3 : " + strBoolean(PI > 3));
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
    _.logging("callbacks0 " + callbacks[0]());
    _.logging("callbacks1 " + callbacks[1]());
    _.logging("callbacks2 " + callbacks[2]());
}

{
    var foo = function foo() {
        return 1;
    };

    _.logging("foo is " + strBoolean(foo() === 1));
    {
        var _foo = function _foo() {
            return 2;
        };

        _.logging("foo is 2 " + strBoolean(_foo() === 2));
    }
    _.logging("foo is 1 " + strBoolean(foo() === 1));
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
    _.logging("multi(1) = " + multi(1));
    _.logging("multi(3, 4) = " + multi(3, 4));
    _.logging("multi(3, 4, 5, 6) = " + multi(3, 4, 5, 6));

    var vals = ["a", "b", "c", "d", "e"];
    var vals2 = ["z", "y", "x"].concat(vals);
    _.logging("vals2" + JSON.stringify(vals2));
}

// Template Literals
{
    var _a = "abc\n";
    var _b = "def";
    var _c = 3;
    var _d = 4;
    var message = "hello\na = " + _a + "b = " + _b + "\n    c * d * 3 = " + _c * _d * 3;
    _.logging("message is " + message);

    // String.raw (not escape string)
    _.logging("String.raw = " + String.raw(_templateObject));
}

// Extended Literals(Binary & Octal Literal)
{
    var _obj;

    _.logging("0b111110111 === 503 : " + strBoolean(503 === 503));
    _.logging("0o767 === 503 : " + strBoolean(503 === 503));

    // Extended Literals(Unicode String & RegExp Literal)
    _.logging("\"\uD842\uDFB7\".length === 2 " + strBoolean("𠮷".length === 2));
    _.logging("\"\uD842\uDFB7\".match(/./u)[0].length === 2 " + strBoolean("𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0].length === 2));
    _.logging("\"\uD842\uDFB7\" === \"\uD842\uDFB7\" " + strBoolean("𠮷" === "\uD842\uDFB7"));
    _.logging("\"\uD842\uDFB7\" === \"\uD842\uDFB7\" " + strBoolean("𠮷" === "\uD842\uDFB7"));
    _.logging("\"\uD842\uDFB7\".codePointAt(0) == 0x20BB7 " + strBoolean("𠮷".codePointAt(0) == 0x20BB7));
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = "𠮷"[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var codepoint = _step.value;
            _.logging("codepoint = " + codepoint);
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
    _.logging(JSON.stringify(obj));
    _.logging(obj.foo());
}

// Destructuring Assignment
{
    var _ref = [1, 2, 3],
        _a2 = _ref[0],
        _b2 = _ref[2];

    _.logging("a,b = " + _a2 + "," + _b2);
    var _ref2 = [_b2, _a2];
    _a2 = _ref2[0];
    _b2 = _ref2[1];

    _.logging("after [ a, b ] = [ b, a ]; a,b = " + _a2 + "," + _b2);
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

    _.logging("a, b, c, d, e = " + a + ", " + b + ", " + c + ", " + JSON.stringify(d) + ", " + e);
}

// Parameter Context Matching
{
    var f = function f(_ref3) {
        var a = _ref3.a,
            b = _ref3.b;

        _.logging("a, b = " + a + ", " + b);
    };
    f({ b: "B", a: "A" });

    var f2 = function f2(_ref4) {
        var a = _ref4.A,
            b = _ref4.B;

        _.logging("a, b = " + a + ", " + b);
    };
    f2({ B: "B", A: "A" });
}

{
    sub.foo();
}

},{"./ms6_sub":2,"./sample":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;

var _sample = require("./sample");

var _ = _interopRequireWildcard(_sample);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function foo() {
  _.logging("bar");
}

},{"./sample":3}],3:[function(require,module,exports){
"use strict";

var logging = function logging() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "---";

    var html = $("#log").html();
    if (html) html = html + "<br>";
    $("#log").html(html + text.replace(/\n/g, "<br>"));
};

exports.logging = logging;

},{}]},{},[1]);
