"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyCommon = function () {
    function MyCommon() {
        _classCallCheck(this, MyCommon);
    }

    _createClass(MyCommon, null, [{
        key: "isUndefine",

        // is check
        value: function isUndefine() {
            return typeof v == "undefined";
        }
    }, {
        key: "existArg",
        value: function existArg(v) {
            return this.isUndefine(v);
        }
    }, {
        key: "isNumber",
        value: function isNumber(v) {
            var type = typeof v === "undefined" ? "undefined" : _typeof(v);
            if (type != "number" && type != "string") return true;
            return v == parseFloat(v) && isFinite(v);
        }
    }, {
        key: "isExists",
        value: function isExists(v) {
            if (!v) return false;
            return (typeof v === "undefined" ? "undefined" : _typeof(v)) != "object" || Object.keys(v).length !== 0;
        }

        // Object

    }, {
        key: "getObjectValue",
        value: function getObjectValue(object, key, def) {
            if (object && key in object) return object[key];
            return def;
        }

        // URL

    }, {
        key: "parseUrlQuery",
        value: function parseUrlQuery(query) {
            if (!query || typeof query != "string") return {};

            var params = {};
            var queries = query.split("&");
            var _decode = decodeURIComponent;
            for (var i in queries) {
                var param = queries[i].split("=");
                if (param.length < 2) continue;
                params[_decode(param[0])] = _decode(param[1]);
            }
            return params;
        }
    }, {
        key: "encodeUrlQuery",
        value: function encodeUrlQuery(obj) {
            var query = "";
            var _encode = encodeURIComponent;
            for (var k in obj) {
                if (query) query = query + "&";
                query = query + _encode(k) + "=" + _encode(obj[k]);
            }
            return query;
        }

        //==================================================
        // node
        //==================================================

    }, {
        key: "getArgumentNode",
        value: function getArgumentNode() {
            return process.argv[0];
        }
    }, {
        key: "getArgumentCurrent",
        value: function getArgumentCurrent() {
            return process.argv[1];
        }
    }, {
        key: "getArgumentValue",
        value: function getArgumentValue(index) {
            if (common.is.undefined(index)) return process.argv.slice(2);
            return common.object.val(process.argv, 2 + index, undefined);
        }
    }, {
        key: "addNodePathEnv",
        value: function addNodePathEnv(path) {
            if ("NODE_PATH" in process.env && process.env) {
                process.env.NODE_PATH = process.env.NODE_PATH + ";" + path;
            } else {
                process.env.NODE_PATH = path;
            }
            require('module')._initPaths();
        }
    }]);

    return MyCommon;
}();

module.exports.class = MyCommon;