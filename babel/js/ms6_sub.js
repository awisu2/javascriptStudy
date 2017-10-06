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