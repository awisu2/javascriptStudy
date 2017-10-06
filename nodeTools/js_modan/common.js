"use strict";

class MyCommon {
    // is check
    static isUndefine() {
        return typeof(v) == "undefined";
    }
    static existArg(v) {
        return this.isUndefine(v);
    }
    static isNumber(v) {
        let type = typeof(v);
        if (type != "number" && type != "string") return true;
        return v == parseFloat(v) && isFinite(v);
    }
    static isExists(v) {
        if(!v) return false;
        return typeof(v) != "object" ||  Object.keys(v).length !== 0;
    }

    // Object
    static getObjectValue(object, key, def) {
        if(object && key in object) return object[key];
        return def;
    }

    // URL
    static parseUrlQuery(query) {
        if(!query || typeof(query) != "string") return {};

        let params = {};
        let queries = query.split("&");
        const _decode = decodeURIComponent;
        for(let i in queries) {
            let param = queries[i].split("=");
            if(param.length < 2) continue;
            params[_decode(param[0])] = _decode(param[1]);
        }
        return params;
    }
    static encodeUrlQuery(obj) {
        let query = "";
        const _encode = encodeURIComponent;
        for(let k in obj) {
            if(query) query = query + "&";
            query = query + _encode(k) + "=" + _encode(obj[k]);
        }
        return query;
    }

    //==================================================
    // node
    //==================================================
    static getArgumentNode() {
        return process.argv[0];
    }
    static getArgumentCurrent() {
        return process.argv[1];
    }
    static getArgumentValue(index) {
        if(common.is.undefined(index)) return process.argv.slice(2);
        return common.object.val(process.argv, 2+index, undefined);
    }

    static addNodePathEnv(path) {
        if("NODE_PATH" in process.env && process.env) {
            process.env.NODE_PATH = process.env.NODE_PATH + ";" + path;
        } else {
            process.env.NODE_PATH = path;
        }
        require('module')._initPaths();
    }
}
module.exports.class = MyCommon;
