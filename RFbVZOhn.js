import {_ as m3} from "./Cbr12_Mb.js";
import {L as Ki, N as w3, M as M3, j as S3, r as E3, h as A3, o as tt, c as Et, a as ft, u as Se, F as Ft, b as yr, w as Hr, d as rt, v as jn, n as Wn, g as Wh, E as R3, b2 as B3, p as I3, e as T3} from "./Dp3sgwFn.js";
import {_ as P3} from "./bV2fqLdI.js";
import {B as jr} from "./C8V467oI.js";
import {u as L3} from "./q6Gp6DWr.js";
import {_ as k3} from "./DlAUqK2U.js";
import "./CrsIpeO-.js";
import "./mfekxdxr.js";
const C3 = "" + new URL("lose.4lR7syRB.png",import.meta.url).href
  , $3 = function(N) {
    var ie = O3(x3(N3(D3(N), 8 * N.length)));
    return ie.toLowerCase()
};
function O3(N) {
    for (var ie, D = "0123456789ABCDEF", O = "", U = 0; U < N.length; U++)
        ie = N.charCodeAt(U),
        O += D.charAt(ie >>> 4 & 15) + D.charAt(15 & ie);
    return O
}
function D3(N) {
    for (var ie = Array(N.length >> 2), D = 0; D < ie.length; D++)
        ie[D] = 0;
    for (D = 0; D < 8 * N.length; D += 8)
        ie[D >> 5] |= (255 & N.charCodeAt(D / 8)) << D % 32;
    return ie
}
function x3(N) {
    for (var ie = "", D = 0; D < 32 * N.length; D += 8)
        ie += String.fromCharCode(N[D >> 5] >>> D % 32 & 255);
    return ie
}
function N3(N, ie) {
    N[ie >> 5] |= 128 << ie % 32,
    N[14 + (ie + 64 >>> 9 << 4)] = ie;
    for (var D = 1732584193, O = -271733879, U = -1732584194, q = 271733878, H = 0; H < N.length; H += 16) {
        var mr = D
          , Pt = O
          , Lt = U
          , gt = q;
        O = bt(O = bt(O = bt(O = bt(O = vt(O = vt(O = vt(O = vt(O = pt(O = pt(O = pt(O = pt(O = lt(O = lt(O = lt(O = lt(O, U = lt(U, q = lt(q, D = lt(D, O, U, q, N[H + 0], 7, -680876936), O, U, N[H + 1], 12, -389564586), D, O, N[H + 2], 17, 606105819), q, D, N[H + 3], 22, -1044525330), U = lt(U, q = lt(q, D = lt(D, O, U, q, N[H + 4], 7, -176418897), O, U, N[H + 5], 12, 1200080426), D, O, N[H + 6], 17, -1473231341), q, D, N[H + 7], 22, -45705983), U = lt(U, q = lt(q, D = lt(D, O, U, q, N[H + 8], 7, 1770035416), O, U, N[H + 9], 12, -1958414417), D, O, N[H + 10], 17, -42063), q, D, N[H + 11], 22, -1990404162), U = lt(U, q = lt(q, D = lt(D, O, U, q, N[H + 12], 7, 1804603682), O, U, N[H + 13], 12, -40341101), D, O, N[H + 14], 17, -1502002290), q, D, N[H + 15], 22, 1236535329), U = pt(U, q = pt(q, D = pt(D, O, U, q, N[H + 1], 5, -165796510), O, U, N[H + 6], 9, -1069501632), D, O, N[H + 11], 14, 643717713), q, D, N[H + 0], 20, -373897302), U = pt(U, q = pt(q, D = pt(D, O, U, q, N[H + 5], 5, -701558691), O, U, N[H + 10], 9, 38016083), D, O, N[H + 15], 14, -660478335), q, D, N[H + 4], 20, -405537848), U = pt(U, q = pt(q, D = pt(D, O, U, q, N[H + 9], 5, 568446438), O, U, N[H + 14], 9, -1019803690), D, O, N[H + 3], 14, -187363961), q, D, N[H + 8], 20, 1163531501), U = pt(U, q = pt(q, D = pt(D, O, U, q, N[H + 13], 5, -1444681467), O, U, N[H + 2], 9, -51403784), D, O, N[H + 7], 14, 1735328473), q, D, N[H + 12], 20, -1926607734), U = vt(U, q = vt(q, D = vt(D, O, U, q, N[H + 5], 4, -378558), O, U, N[H + 8], 11, -2022574463), D, O, N[H + 11], 16, 1839030562), q, D, N[H + 14], 23, -35309556), U = vt(U, q = vt(q, D = vt(D, O, U, q, N[H + 1], 4, -1530992060), O, U, N[H + 4], 11, 1272893353), D, O, N[H + 7], 16, -155497632), q, D, N[H + 10], 23, -1094730640), U = vt(U, q = vt(q, D = vt(D, O, U, q, N[H + 13], 4, 681279174), O, U, N[H + 0], 11, -358537222), D, O, N[H + 3], 16, -722521979), q, D, N[H + 6], 23, 76029189), U = vt(U, q = vt(q, D = vt(D, O, U, q, N[H + 9], 4, -640364487), O, U, N[H + 12], 11, -421815835), D, O, N[H + 15], 16, 530742520), q, D, N[H + 2], 23, -995338651), U = bt(U, q = bt(q, D = bt(D, O, U, q, N[H + 0], 6, -198630844), O, U, N[H + 7], 10, 1126891415), D, O, N[H + 14], 15, -1416354905), q, D, N[H + 5], 21, -57434055), U = bt(U, q = bt(q, D = bt(D, O, U, q, N[H + 12], 6, 1700485571), O, U, N[H + 3], 10, -1894986606), D, O, N[H + 10], 15, -1051523), q, D, N[H + 1], 21, -2054922799), U = bt(U, q = bt(q, D = bt(D, O, U, q, N[H + 8], 6, 1873313359), O, U, N[H + 15], 10, -30611744), D, O, N[H + 6], 15, -1560198380), q, D, N[H + 13], 21, 1309151649), U = bt(U, q = bt(q, D = bt(D, O, U, q, N[H + 4], 6, -145523070), O, U, N[H + 11], 10, -1120210379), D, O, N[H + 2], 15, 718787259), q, D, N[H + 9], 21, -343485551),
        D = _r(D, mr),
        O = _r(O, Pt),
        U = _r(U, Lt),
        q = _r(q, gt)
    }
    return Array(D, O, U, q)
}
function Yn(N, ie, D, O, U, q) {
    return _r(q3(_r(_r(ie, N), _r(O, q)), U), D)
}
function lt(N, ie, D, O, U, q, H) {
    return Yn(ie & D | ~ie & O, N, ie, U, q, H)
}
function pt(N, ie, D, O, U, q, H) {
    return Yn(ie & O | D & ~O, N, ie, U, q, H)
}
function vt(N, ie, D, O, U, q, H) {
    return Yn(ie ^ D ^ O, N, ie, U, q, H)
}
function bt(N, ie, D, O, U, q, H) {
    return Yn(D ^ (ie | ~O), N, ie, U, q, H)
}
function _r(N, ie) {
    var D = (65535 & N) + (65535 & ie);
    return (N >> 16) + (ie >> 16) + (D >> 16) << 16 | 65535 & D
}
function q3(N, ie) {
    return N << ie | N >>> 32 - ie
}
var Ef = {
    exports: {}
};
(function(N, ie) {
    (function(D, O) {
        O(ie)
    }
    )(Ki, function(D) {
        var O = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof Ki < "u" ? Ki : typeof self < "u" ? self : {};
        function U(t) {
            return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
        }
        function q(t) {
            if (t.__esModule)
                return t;
            var e = t.default;
            if (typeof e == "function") {
                var r = function i() {
                    return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
                };
                r.prototype = e.prototype
            } else
                r = {};
            return Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            Object.keys(t).forEach(function(i) {
                var n = Object.getOwnPropertyDescriptor(t, i);
                Object.defineProperty(r, i, n.get ? n : {
                    enumerable: !0,
                    get: function() {
                        return t[i]
                    }
                })
            }),
            r
        }
        var H = {}
          , mr = {};
        mr.encrypt = function(t, e) {
            return t._cipher.encryptBlock(e)
        }
        ,
        mr.decrypt = function(t, e) {
            return t._cipher.decryptBlock(e)
        }
        ;
        var Pt = {}
          , Lt = typeof Ki < "u" ? Ki : typeof self < "u" ? self : typeof window < "u" ? window : {}
          , gt = []
          , yt = []
          , pi = typeof Uint8Array < "u" ? Uint8Array : Array
          , vi = !1;
        function Vi() {
            vi = !0;
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, r = t.length; e < r; ++e)
                gt[e] = t[e],
                yt[t.charCodeAt(e)] = e;
            yt[45] = 62,
            yt[95] = 63
        }
        function wr(t) {
            vi || Vi();
            var e, r, i, n, a, f, h = t.length;
            if (h % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            a = t[h - 2] === "=" ? 2 : t[h - 1] === "=" ? 1 : 0,
            f = new pi(h * 3 / 4 - a),
            i = a > 0 ? h - 4 : h;
            var c = 0;
            for (e = 0,
            r = 0; e < i; e += 4,
            r += 3)
                n = yt[t.charCodeAt(e)] << 18 | yt[t.charCodeAt(e + 1)] << 12 | yt[t.charCodeAt(e + 2)] << 6 | yt[t.charCodeAt(e + 3)],
                f[c++] = n >> 16 & 255,
                f[c++] = n >> 8 & 255,
                f[c++] = n & 255;
            return a === 2 ? (n = yt[t.charCodeAt(e)] << 2 | yt[t.charCodeAt(e + 1)] >> 4,
            f[c++] = n & 255) : a === 1 && (n = yt[t.charCodeAt(e)] << 10 | yt[t.charCodeAt(e + 1)] << 4 | yt[t.charCodeAt(e + 2)] >> 2,
            f[c++] = n >> 8 & 255,
            f[c++] = n & 255),
            f
        }
        function Mr(t) {
            return gt[t >> 18 & 63] + gt[t >> 12 & 63] + gt[t >> 6 & 63] + gt[t & 63]
        }
        function Kn(t, e, r) {
            for (var i, n = [], a = e; a < r; a += 3)
                i = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2],
                n.push(Mr(i));
            return n.join("")
        }
        function bi(t) {
            vi || Vi();
            for (var e, r = t.length, i = r % 3, n = "", a = [], f = 16383, h = 0, c = r - i; h < c; h += f)
                a.push(Kn(t, h, h + f > c ? c : h + f));
            return i === 1 ? (e = t[r - 1],
            n += gt[e >> 2],
            n += gt[e << 4 & 63],
            n += "==") : i === 2 && (e = (t[r - 2] << 8) + t[r - 1],
            n += gt[e >> 10],
            n += gt[e >> 4 & 63],
            n += gt[e << 2 & 63],
            n += "="),
            a.push(n),
            a.join("")
        }
        function Wr(t, e, r, i, n) {
            var a, f, h = n * 8 - i - 1, c = (1 << h) - 1, l = c >> 1, v = -7, y = r ? n - 1 : 0, E = r ? -1 : 1, T = t[e + y];
            for (y += E,
            a = T & (1 << -v) - 1,
            T >>= -v,
            v += h; v > 0; a = a * 256 + t[e + y],
            y += E,
            v -= 8)
                ;
            for (f = a & (1 << -v) - 1,
            a >>= -v,
            v += i; v > 0; f = f * 256 + t[e + y],
            y += E,
            v -= 8)
                ;
            if (a === 0)
                a = 1 - l;
            else {
                if (a === c)
                    return f ? NaN : (T ? -1 : 1) * (1 / 0);
                f = f + Math.pow(2, i),
                a = a - l
            }
            return (T ? -1 : 1) * f * Math.pow(2, a - i)
        }
        function Gi(t, e, r, i, n, a) {
            var f, h, c, l = a * 8 - n - 1, v = (1 << l) - 1, y = v >> 1, E = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, T = i ? 0 : a - 1, I = i ? 1 : -1, P = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e),
            isNaN(e) || e === 1 / 0 ? (h = isNaN(e) ? 1 : 0,
            f = v) : (f = Math.floor(Math.log(e) / Math.LN2),
            e * (c = Math.pow(2, -f)) < 1 && (f--,
            c *= 2),
            f + y >= 1 ? e += E / c : e += E * Math.pow(2, 1 - y),
            e * c >= 2 && (f++,
            c /= 2),
            f + y >= v ? (h = 0,
            f = v) : f + y >= 1 ? (h = (e * c - 1) * Math.pow(2, n),
            f = f + y) : (h = e * Math.pow(2, y - 1) * Math.pow(2, n),
            f = 0)); n >= 8; t[r + T] = h & 255,
            T += I,
            h /= 256,
            n -= 8)
                ;
            for (f = f << n | h,
            l += n; l > 0; t[r + T] = f & 255,
            T += I,
            f /= 256,
            l -= 8)
                ;
            t[r + T - I] |= P * 128
        }
        var it = {}.toString
          , _t = Array.isArray || function(t) {
            return it.call(t) == "[object Array]"
        }
        ;
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
        var ot = 50;
        k.TYPED_ARRAY_SUPPORT = Lt.TYPED_ARRAY_SUPPORT !== void 0 ? Lt.TYPED_ARRAY_SUPPORT : !0;
        var ce = Yr();
        function Yr() {
            return k.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function At(t, e) {
            if (Yr() < e)
                throw new RangeError("Invalid typed array length");
            return k.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e),
            t.__proto__ = k.prototype) : (t === null && (t = new k(e)),
            t.length = e),
            t
        }
        function k(t, e, r) {
            if (!k.TYPED_ARRAY_SUPPORT && !(this instanceof k))
                return new k(t,e,r);
            if (typeof t == "number") {
                if (typeof e == "string")
                    throw new Error("If encoding is specified then the first argument must be a string");
                return Vn(this, t)
            }
            return Ji(this, t, e, r)
        }
        k.poolSize = 8192,
        k._augment = function(t) {
            return t.__proto__ = k.prototype,
            t
        }
        ;
        function Ji(t, e, r, i) {
            if (typeof e == "number")
                throw new TypeError('"value" argument must not be a number');
            return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? Vh(t, e, r, i) : typeof e == "string" ? Kh(t, e, r) : Gh(t, e)
        }
        k.from = function(t, e, r) {
            return Ji(null, t, e, r)
        }
        ,
        k.TYPED_ARRAY_SUPPORT && (k.prototype.__proto__ = Uint8Array.prototype,
        k.__proto__ = Uint8Array,
        typeof Symbol < "u" && Symbol.species && k[Symbol.species]);
        function gi(t) {
            if (typeof t != "number")
                throw new TypeError('"size" argument must be a number');
            if (t < 0)
                throw new RangeError('"size" argument must not be negative')
        }
        function Yh(t, e, r, i) {
            return gi(e),
            e <= 0 ? At(t, e) : r !== void 0 ? typeof i == "string" ? At(t, e).fill(r, i) : At(t, e).fill(r) : At(t, e)
        }
        k.alloc = function(t, e, r) {
            return Yh(null, t, e, r)
        }
        ;
        function Vn(t, e) {
            if (gi(e),
            t = At(t, e < 0 ? 0 : Jn(e) | 0),
            !k.TYPED_ARRAY_SUPPORT)
                for (var r = 0; r < e; ++r)
                    t[r] = 0;
            return t
        }
        k.allocUnsafe = function(t) {
            return Vn(null, t)
        }
        ,
        k.allocUnsafeSlow = function(t) {
            return Vn(null, t)
        }
        ;
        function Kh(t, e, r) {
            if ((typeof r != "string" || r === "") && (r = "utf8"),
            !k.isEncoding(r))
                throw new TypeError('"encoding" must be a valid string encoding');
            var i = Af(e, r) | 0;
            t = At(t, i);
            var n = t.write(e, r);
            return n !== i && (t = t.slice(0, n)),
            t
        }
        function Gn(t, e) {
            var r = e.length < 0 ? 0 : Jn(e.length) | 0;
            t = At(t, r);
            for (var i = 0; i < r; i += 1)
                t[i] = e[i] & 255;
            return t
        }
        function Vh(t, e, r, i) {
            if (e.byteLength,
            r < 0 || e.byteLength < r)
                throw new RangeError("'offset' is out of bounds");
            if (e.byteLength < r + (i || 0))
                throw new RangeError("'length' is out of bounds");
            return r === void 0 && i === void 0 ? e = new Uint8Array(e) : i === void 0 ? e = new Uint8Array(e,r) : e = new Uint8Array(e,r,i),
            k.TYPED_ARRAY_SUPPORT ? (t = e,
            t.__proto__ = k.prototype) : t = Gn(t, e),
            t
        }
        function Gh(t, e) {
            if (Ht(e)) {
                var r = Jn(e.length) | 0;
                return t = At(t, r),
                t.length === 0 || e.copy(t, 0, 0, r),
                t
            }
            if (e) {
                if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length"in e)
                    return typeof e.length != "number" || vu(e.length) ? At(t, 0) : Gn(t, e);
                if (e.type === "Buffer" && _t(e.data))
                    return Gn(t, e.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }
        function Jn(t) {
            if (t >= Yr())
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Yr().toString(16) + " bytes");
            return t | 0
        }
        function Jh(t) {
            return +t != t && (t = 0),
            k.alloc(+t)
        }
        k.isBuffer = Of;
        function Ht(t) {
            return !!(t != null && t._isBuffer)
        }
        k.compare = function(e, r) {
            if (!Ht(e) || !Ht(r))
                throw new TypeError("Arguments must be Buffers");
            if (e === r)
                return 0;
            for (var i = e.length, n = r.length, a = 0, f = Math.min(i, n); a < f; ++a)
                if (e[a] !== r[a]) {
                    i = e[a],
                    n = r[a];
                    break
                }
            return i < n ? -1 : n < i ? 1 : 0
        }
        ,
        k.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        k.concat = function(e, r) {
            if (!_t(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (e.length === 0)
                return k.alloc(0);
            var i;
            if (r === void 0)
                for (r = 0,
                i = 0; i < e.length; ++i)
                    r += e[i].length;
            var n = k.allocUnsafe(r)
              , a = 0;
            for (i = 0; i < e.length; ++i) {
                var f = e[i];
                if (!Ht(f))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                f.copy(n, a),
                a += f.length
            }
            return n
        }
        ;
        function Af(t, e) {
            if (Ht(t))
                return t.length;
            if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                return t.byteLength;
            typeof t != "string" && (t = "" + t);
            var r = t.length;
            if (r === 0)
                return 0;
            for (var i = !1; ; )
                switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                case void 0:
                    return Qi(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return r * 2;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return $f(t).length;
                default:
                    if (i)
                        return Qi(t).length;
                    e = ("" + e).toLowerCase(),
                    i = !0
                }
        }
        k.byteLength = Af;
        function Xh(t, e, r) {
            var i = !1;
            if ((e === void 0 || e < 0) && (e = 0),
            e > this.length || ((r === void 0 || r > this.length) && (r = this.length),
            r <= 0) || (r >>>= 0,
            e >>>= 0,
            r <= e))
                return "";
            for (t || (t = "utf8"); ; )
                switch (t) {
                case "hex":
                    return ou(this, e, r);
                case "utf8":
                case "utf-8":
                    return Tf(this, e, r);
                case "ascii":
                    return au(this, e, r);
                case "latin1":
                case "binary":
                    return fu(this, e, r);
                case "base64":
                    return iu(this, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return su(this, e, r);
                default:
                    if (i)
                        throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(),
                    i = !0
                }
        }
        k.prototype._isBuffer = !0;
        function Sr(t, e, r) {
            var i = t[e];
            t[e] = t[r],
            t[r] = i
        }
        k.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 !== 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var r = 0; r < e; r += 2)
                Sr(this, r, r + 1);
            return this
        }
        ,
        k.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 !== 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var r = 0; r < e; r += 4)
                Sr(this, r, r + 3),
                Sr(this, r + 1, r + 2);
            return this
        }
        ,
        k.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 !== 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var r = 0; r < e; r += 8)
                Sr(this, r, r + 7),
                Sr(this, r + 1, r + 6),
                Sr(this, r + 2, r + 5),
                Sr(this, r + 3, r + 4);
            return this
        }
        ,
        k.prototype.toString = function() {
            var e = this.length | 0;
            return e === 0 ? "" : arguments.length === 0 ? Tf(this, 0, e) : Xh.apply(this, arguments)
        }
        ,
        k.prototype.equals = function(e) {
            if (!Ht(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e ? !0 : k.compare(this, e) === 0
        }
        ,
        k.prototype.inspect = function() {
            var e = ""
              , r = ot;
            return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "),
            this.length > r && (e += " ... ")),
            "<Buffer " + e + ">"
        }
        ,
        k.prototype.compare = function(e, r, i, n, a) {
            if (!Ht(e))
                throw new TypeError("Argument must be a Buffer");
            if (r === void 0 && (r = 0),
            i === void 0 && (i = e ? e.length : 0),
            n === void 0 && (n = 0),
            a === void 0 && (a = this.length),
            r < 0 || i > e.length || n < 0 || a > this.length)
                throw new RangeError("out of range index");
            if (n >= a && r >= i)
                return 0;
            if (n >= a)
                return -1;
            if (r >= i)
                return 1;
            if (r >>>= 0,
            i >>>= 0,
            n >>>= 0,
            a >>>= 0,
            this === e)
                return 0;
            for (var f = a - n, h = i - r, c = Math.min(f, h), l = this.slice(n, a), v = e.slice(r, i), y = 0; y < c; ++y)
                if (l[y] !== v[y]) {
                    f = l[y],
                    h = v[y];
                    break
                }
            return f < h ? -1 : h < f ? 1 : 0
        }
        ;
        function Rf(t, e, r, i, n) {
            if (t.length === 0)
                return -1;
            if (typeof r == "string" ? (i = r,
            r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
            r = +r,
            isNaN(r) && (r = n ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length) {
                if (n)
                    return -1;
                r = t.length - 1
            } else if (r < 0)
                if (n)
                    r = 0;
                else
                    return -1;
            if (typeof e == "string" && (e = k.from(e, i)),
            Ht(e))
                return e.length === 0 ? -1 : Bf(t, e, r, i, n);
            if (typeof e == "number")
                return e = e & 255,
                k.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? n ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : Bf(t, [e], r, i, n);
            throw new TypeError("val must be string, number or Buffer")
        }
        function Bf(t, e, r, i, n) {
            var a = 1
              , f = t.length
              , h = e.length;
            if (i !== void 0 && (i = String(i).toLowerCase(),
            i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
                if (t.length < 2 || e.length < 2)
                    return -1;
                a = 2,
                f /= 2,
                h /= 2,
                r /= 2
            }
            function c(T, I) {
                return a === 1 ? T[I] : T.readUInt16BE(I * a)
            }
            var l;
            if (n) {
                var v = -1;
                for (l = r; l < f; l++)
                    if (c(t, l) === c(e, v === -1 ? 0 : l - v)) {
                        if (v === -1 && (v = l),
                        l - v + 1 === h)
                            return v * a
                    } else
                        v !== -1 && (l -= l - v),
                        v = -1
            } else
                for (r + h > f && (r = f - h),
                l = r; l >= 0; l--) {
                    for (var y = !0, E = 0; E < h; E++)
                        if (c(t, l + E) !== c(e, E)) {
                            y = !1;
                            break
                        }
                    if (y)
                        return l
                }
            return -1
        }
        k.prototype.includes = function(e, r, i) {
            return this.indexOf(e, r, i) !== -1
        }
        ,
        k.prototype.indexOf = function(e, r, i) {
            return Rf(this, e, r, i, !0)
        }
        ,
        k.prototype.lastIndexOf = function(e, r, i) {
            return Rf(this, e, r, i, !1)
        }
        ;
        function Zh(t, e, r, i) {
            r = Number(r) || 0;
            var n = t.length - r;
            i ? (i = Number(i),
            i > n && (i = n)) : i = n;
            var a = e.length;
            if (a % 2 !== 0)
                throw new TypeError("Invalid hex string");
            i > a / 2 && (i = a / 2);
            for (var f = 0; f < i; ++f) {
                var h = parseInt(e.substr(f * 2, 2), 16);
                if (isNaN(h))
                    return f;
                t[r + f] = h
            }
            return f
        }
        function Qh(t, e, r, i) {
            return en(Qi(e, t.length - r), t, r, i)
        }
        function If(t, e, r, i) {
            return en(lu(e), t, r, i)
        }
        function eu(t, e, r, i) {
            return If(t, e, r, i)
        }
        function tu(t, e, r, i) {
            return en($f(e), t, r, i)
        }
        function ru(t, e, r, i) {
            return en(pu(e, t.length - r), t, r, i)
        }
        k.prototype.write = function(e, r, i, n) {
            if (r === void 0)
                n = "utf8",
                i = this.length,
                r = 0;
            else if (i === void 0 && typeof r == "string")
                n = r,
                i = this.length,
                r = 0;
            else if (isFinite(r))
                r = r | 0,
                isFinite(i) ? (i = i | 0,
                n === void 0 && (n = "utf8")) : (n = i,
                i = void 0);
            else
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            var a = this.length - r;
            if ((i === void 0 || i > a) && (i = a),
            e.length > 0 && (i < 0 || r < 0) || r > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var f = !1; ; )
                switch (n) {
                case "hex":
                    return Zh(this, e, r, i);
                case "utf8":
                case "utf-8":
                    return Qh(this, e, r, i);
                case "ascii":
                    return If(this, e, r, i);
                case "latin1":
                case "binary":
                    return eu(this, e, r, i);
                case "base64":
                    return tu(this, e, r, i);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return ru(this, e, r, i);
                default:
                    if (f)
                        throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(),
                    f = !0
                }
        }
        ,
        k.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        function iu(t, e, r) {
            return e === 0 && r === t.length ? bi(t) : bi(t.slice(e, r))
        }
        function Tf(t, e, r) {
            r = Math.min(t.length, r);
            for (var i = [], n = e; n < r; ) {
                var a = t[n]
                  , f = null
                  , h = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
                if (n + h <= r) {
                    var c, l, v, y;
                    switch (h) {
                    case 1:
                        a < 128 && (f = a);
                        break;
                    case 2:
                        c = t[n + 1],
                        (c & 192) === 128 && (y = (a & 31) << 6 | c & 63,
                        y > 127 && (f = y));
                        break;
                    case 3:
                        c = t[n + 1],
                        l = t[n + 2],
                        (c & 192) === 128 && (l & 192) === 128 && (y = (a & 15) << 12 | (c & 63) << 6 | l & 63,
                        y > 2047 && (y < 55296 || y > 57343) && (f = y));
                        break;
                    case 4:
                        c = t[n + 1],
                        l = t[n + 2],
                        v = t[n + 3],
                        (c & 192) === 128 && (l & 192) === 128 && (v & 192) === 128 && (y = (a & 15) << 18 | (c & 63) << 12 | (l & 63) << 6 | v & 63,
                        y > 65535 && y < 1114112 && (f = y))
                    }
                }
                f === null ? (f = 65533,
                h = 1) : f > 65535 && (f -= 65536,
                i.push(f >>> 10 & 1023 | 55296),
                f = 56320 | f & 1023),
                i.push(f),
                n += h
            }
            return nu(i)
        }
        var Pf = 4096;
        function nu(t) {
            var e = t.length;
            if (e <= Pf)
                return String.fromCharCode.apply(String, t);
            for (var r = "", i = 0; i < e; )
                r += String.fromCharCode.apply(String, t.slice(i, i += Pf));
            return r
        }
        function au(t, e, r) {
            var i = "";
            r = Math.min(t.length, r);
            for (var n = e; n < r; ++n)
                i += String.fromCharCode(t[n] & 127);
            return i
        }
        function fu(t, e, r) {
            var i = "";
            r = Math.min(t.length, r);
            for (var n = e; n < r; ++n)
                i += String.fromCharCode(t[n]);
            return i
        }
        function ou(t, e, r) {
            var i = t.length;
            (!e || e < 0) && (e = 0),
            (!r || r < 0 || r > i) && (r = i);
            for (var n = "", a = e; a < r; ++a)
                n += du(t[a]);
            return n
        }
        function su(t, e, r) {
            for (var i = t.slice(e, r), n = "", a = 0; a < i.length; a += 2)
                n += String.fromCharCode(i[a] + i[a + 1] * 256);
            return n
        }
        k.prototype.slice = function(e, r) {
            var i = this.length;
            e = ~~e,
            r = r === void 0 ? i : ~~r,
            e < 0 ? (e += i,
            e < 0 && (e = 0)) : e > i && (e = i),
            r < 0 ? (r += i,
            r < 0 && (r = 0)) : r > i && (r = i),
            r < e && (r = e);
            var n;
            if (k.TYPED_ARRAY_SUPPORT)
                n = this.subarray(e, r),
                n.__proto__ = k.prototype;
            else {
                var a = r - e;
                n = new k(a,void 0);
                for (var f = 0; f < a; ++f)
                    n[f] = this[f + e]
            }
            return n
        }
        ;
        function Je(t, e, r) {
            if (t % 1 !== 0 || t < 0)
                throw new RangeError("offset is not uint");
            if (t + e > r)
                throw new RangeError("Trying to access beyond buffer length")
        }
        k.prototype.readUIntLE = function(e, r, i) {
            e = e | 0,
            r = r | 0,
            i || Je(e, r, this.length);
            for (var n = this[e], a = 1, f = 0; ++f < r && (a *= 256); )
                n += this[e + f] * a;
            return n
        }
        ,
        k.prototype.readUIntBE = function(e, r, i) {
            e = e | 0,
            r = r | 0,
            i || Je(e, r, this.length);
            for (var n = this[e + --r], a = 1; r > 0 && (a *= 256); )
                n += this[e + --r] * a;
            return n
        }
        ,
        k.prototype.readUInt8 = function(e, r) {
            return r || Je(e, 1, this.length),
            this[e]
        }
        ,
        k.prototype.readUInt16LE = function(e, r) {
            return r || Je(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        k.prototype.readUInt16BE = function(e, r) {
            return r || Je(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        k.prototype.readUInt32LE = function(e, r) {
            return r || Je(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216
        }
        ,
        k.prototype.readUInt32BE = function(e, r) {
            return r || Je(e, 4, this.length),
            this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        k.prototype.readIntLE = function(e, r, i) {
            e = e | 0,
            r = r | 0,
            i || Je(e, r, this.length);
            for (var n = this[e], a = 1, f = 0; ++f < r && (a *= 256); )
                n += this[e + f] * a;
            return a *= 128,
            n >= a && (n -= Math.pow(2, 8 * r)),
            n
        }
        ,
        k.prototype.readIntBE = function(e, r, i) {
            e = e | 0,
            r = r | 0,
            i || Je(e, r, this.length);
            for (var n = r, a = 1, f = this[e + --n]; n > 0 && (a *= 256); )
                f += this[e + --n] * a;
            return a *= 128,
            f >= a && (f -= Math.pow(2, 8 * r)),
            f
        }
        ,
        k.prototype.readInt8 = function(e, r) {
            return r || Je(e, 1, this.length),
            this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
        }
        ,
        k.prototype.readInt16LE = function(e, r) {
            r || Je(e, 2, this.length);
            var i = this[e] | this[e + 1] << 8;
            return i & 32768 ? i | 4294901760 : i
        }
        ,
        k.prototype.readInt16BE = function(e, r) {
            r || Je(e, 2, this.length);
            var i = this[e + 1] | this[e] << 8;
            return i & 32768 ? i | 4294901760 : i
        }
        ,
        k.prototype.readInt32LE = function(e, r) {
            return r || Je(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        k.prototype.readInt32BE = function(e, r) {
            return r || Je(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        k.prototype.readFloatLE = function(e, r) {
            return r || Je(e, 4, this.length),
            Wr(this, e, !0, 23, 4)
        }
        ,
        k.prototype.readFloatBE = function(e, r) {
            return r || Je(e, 4, this.length),
            Wr(this, e, !1, 23, 4)
        }
        ,
        k.prototype.readDoubleLE = function(e, r) {
            return r || Je(e, 8, this.length),
            Wr(this, e, !0, 52, 8)
        }
        ,
        k.prototype.readDoubleBE = function(e, r) {
            return r || Je(e, 8, this.length),
            Wr(this, e, !1, 52, 8)
        }
        ;
        function mt(t, e, r, i, n, a) {
            if (!Ht(t))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > n || e < a)
                throw new RangeError('"value" argument is out of bounds');
            if (r + i > t.length)
                throw new RangeError("Index out of range")
        }
        k.prototype.writeUIntLE = function(e, r, i, n) {
            if (e = +e,
            r = r | 0,
            i = i | 0,
            !n) {
                var a = Math.pow(2, 8 * i) - 1;
                mt(this, e, r, i, a, 0)
            }
            var f = 1
              , h = 0;
            for (this[r] = e & 255; ++h < i && (f *= 256); )
                this[r + h] = e / f & 255;
            return r + i
        }
        ,
        k.prototype.writeUIntBE = function(e, r, i, n) {
            if (e = +e,
            r = r | 0,
            i = i | 0,
            !n) {
                var a = Math.pow(2, 8 * i) - 1;
                mt(this, e, r, i, a, 0)
            }
            var f = i - 1
              , h = 1;
            for (this[r + f] = e & 255; --f >= 0 && (h *= 256); )
                this[r + f] = e / h & 255;
            return r + i
        }
        ,
        k.prototype.writeUInt8 = function(e, r, i) {
            return e = +e,
            r = r | 0,
            i || mt(this, e, r, 1, 255, 0),
            k.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            this[r] = e & 255,
            r + 1
        }
        ;
        function Xi(t, e, r, i) {
            e < 0 && (e = 65535 + e + 1);
            for (var n = 0, a = Math.min(t.length - r, 2); n < a; ++n)
                t[r + n] = (e & 255 << 8 * (i ? n : 1 - n)) >>> (i ? n : 1 - n) * 8
        }
        k.prototype.writeUInt16LE = function(e, r, i) {
            return e = +e,
            r = r | 0,
            i || mt(this, e, r, 2, 65535, 0),
            k.TYPED_ARRAY_SUPPORT ? (this[r] = e & 255,
            this[r + 1] = e >>> 8) : Xi(this, e, r, !0),
            r + 2
        }
        ,
        k.prototype.writeUInt16BE = function(e, r, i) {
            return e = +e,
            r = r | 0,
            i || mt(this, e, r, 2, 65535, 0),
            k.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8,
            this[r + 1] = e & 255) : Xi(this, e, r, !1),
            r + 2
        }
        ;
        function Zi(t, e, r, i) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var n = 0, a = Math.min(t.length - r, 4); n < a; ++n)
                t[r + n] = e >>> (i ? n : 3 - n) * 8 & 255
        }
        k.prototype.writeUInt32LE = function(e, r, i) {
            return e = +e,
            r = r | 0,
            i || mt(this, e, r, 4, 4294967295, 0),
            k.TYPED_ARRAY_SUPPORT ? (this[r + 3] = e >>> 24,
            this[r + 2] = e >>> 16,
            this[r + 1] = e >>> 8,
            this[r] = e & 255) : Zi(this, e, r, !0),
            r + 4
        }
        ,
        k.prototype.writeUInt32BE = function(e, r, i) {
            return e = +e,
            r = r | 0,
            i || mt(this, e, r, 4, 4294967295, 0),
            k.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 24,
            this[r + 1] = e >>> 16,
            this[r + 2] = e >>> 8,
            this[r + 3] = e & 255) : Zi(this, e, r, !1),
            r + 4
        }
        ,
        k.prototype.writeIntLE = function(e, r, i, n) {
            if (e = +e,
            r = r | 0,
            !n) {
                var a = Math.pow(2, 8 * i - 1);
                mt(this, e, r, i, a - 1, -a)
            }
            var f = 0
              , h = 1
              , c = 0;
            for (this[r] = e & 255; ++f < i && (h *= 256); )
                e < 0 && c === 0 && this[r + f - 1] !== 0 && (c = 1),
                this[r + f] = (e / h >> 0) - c & 255;
            return r + i
        }
        ,
        k.prototype.writeIntBE = function(e, r, i, n) {
            if (e = +e,
            r = r | 0,
            !n) {
                var a = Math.pow(2, 8 * i - 1);
                mt(this, e, r, i, a - 1, -a)
            }
            var f = i - 1
              , h = 1
              , c = 0;
            for (this[r + f] = e & 255; --f >= 0 && (h *= 256); )
                e < 0 && c === 0 && this[r + f + 1] !== 0 && (c = 1),
                this[r + f] = (e / h >> 0) - c & 255;
            return r + i
        }
        ,
        k.prototype.writeInt8 = function(e, r, i) {
            return e = +e,
            r = r | 0,
            i || mt(this, e, r, 1, 127, -128),
            k.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            this[r] = e & 255,
            r + 1
        }
        ,
        k.prototype.writeInt16LE = function(e, r, i) {
            return e = +e,
            r = r | 0,
            i || mt(this, e, r, 2, 32767, -32768),
            k.TYPED_ARRAY_SUPPORT ? (this[r] = e & 255,
            this[r + 1] = e >>> 8) : Xi(this, e, r, !0),
            r + 2
        }
        ,
        k.prototype.writeInt16BE = function(e, r, i) {
            return e = +e,
            r = r | 0,
            i || mt(this, e, r, 2, 32767, -32768),
            k.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8,
            this[r + 1] = e & 255) : Xi(this, e, r, !1),
            r + 2
        }
        ,
        k.prototype.writeInt32LE = function(e, r, i) {
            return e = +e,
            r = r | 0,
            i || mt(this, e, r, 4, 2147483647, -2147483648),
            k.TYPED_ARRAY_SUPPORT ? (this[r] = e & 255,
            this[r + 1] = e >>> 8,
            this[r + 2] = e >>> 16,
            this[r + 3] = e >>> 24) : Zi(this, e, r, !0),
            r + 4
        }
        ,
        k.prototype.writeInt32BE = function(e, r, i) {
            return e = +e,
            r = r | 0,
            i || mt(this, e, r, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            k.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 24,
            this[r + 1] = e >>> 16,
            this[r + 2] = e >>> 8,
            this[r + 3] = e & 255) : Zi(this, e, r, !1),
            r + 4
        }
        ;
        function Lf(t, e, r, i, n, a) {
            if (r + i > t.length)
                throw new RangeError("Index out of range");
            if (r < 0)
                throw new RangeError("Index out of range")
        }
        function kf(t, e, r, i, n) {
            return n || Lf(t, e, r, 4),
            Gi(t, e, r, i, 23, 4),
            r + 4
        }
        k.prototype.writeFloatLE = function(e, r, i) {
            return kf(this, e, r, !0, i)
        }
        ,
        k.prototype.writeFloatBE = function(e, r, i) {
            return kf(this, e, r, !1, i)
        }
        ;
        function Cf(t, e, r, i, n) {
            return n || Lf(t, e, r, 8),
            Gi(t, e, r, i, 52, 8),
            r + 8
        }
        k.prototype.writeDoubleLE = function(e, r, i) {
            return Cf(this, e, r, !0, i)
        }
        ,
        k.prototype.writeDoubleBE = function(e, r, i) {
            return Cf(this, e, r, !1, i)
        }
        ,
        k.prototype.copy = function(e, r, i, n) {
            if (i || (i = 0),
            !n && n !== 0 && (n = this.length),
            r >= e.length && (r = e.length),
            r || (r = 0),
            n > 0 && n < i && (n = i),
            n === i || e.length === 0 || this.length === 0)
                return 0;
            if (r < 0)
                throw new RangeError("targetStart out of bounds");
            if (i < 0 || i >= this.length)
                throw new RangeError("sourceStart out of bounds");
            if (n < 0)
                throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
            e.length - r < n - i && (n = e.length - r + i);
            var a = n - i, f;
            if (this === e && i < r && r < n)
                for (f = a - 1; f >= 0; --f)
                    e[f + r] = this[f + i];
            else if (a < 1e3 || !k.TYPED_ARRAY_SUPPORT)
                for (f = 0; f < a; ++f)
                    e[f + r] = this[f + i];
            else
                Uint8Array.prototype.set.call(e, this.subarray(i, i + a), r);
            return a
        }
        ,
        k.prototype.fill = function(e, r, i, n) {
            if (typeof e == "string") {
                if (typeof r == "string" ? (n = r,
                r = 0,
                i = this.length) : typeof i == "string" && (n = i,
                i = this.length),
                e.length === 1) {
                    var a = e.charCodeAt(0);
                    a < 256 && (e = a)
                }
                if (n !== void 0 && typeof n != "string")
                    throw new TypeError("encoding must be a string");
                if (typeof n == "string" && !k.isEncoding(n))
                    throw new TypeError("Unknown encoding: " + n)
            } else
                typeof e == "number" && (e = e & 255);
            if (r < 0 || this.length < r || this.length < i)
                throw new RangeError("Out of range index");
            if (i <= r)
                return this;
            r = r >>> 0,
            i = i === void 0 ? this.length : i >>> 0,
            e || (e = 0);
            var f;
            if (typeof e == "number")
                for (f = r; f < i; ++f)
                    this[f] = e;
            else {
                var h = Ht(e) ? e : Qi(new k(e,n).toString())
                  , c = h.length;
                for (f = 0; f < i - r; ++f)
                    this[f + r] = h[f % c]
            }
            return this
        }
        ;
        var hu = /[^+\/0-9A-Za-z-_]/g;
        function uu(t) {
            if (t = cu(t).replace(hu, ""),
            t.length < 2)
                return "";
            for (; t.length % 4 !== 0; )
                t = t + "=";
            return t
        }
        function cu(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }
        function du(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }
        function Qi(t, e) {
            e = e || 1 / 0;
            for (var r, i = t.length, n = null, a = [], f = 0; f < i; ++f) {
                if (r = t.charCodeAt(f),
                r > 55295 && r < 57344) {
                    if (!n) {
                        if (r > 56319) {
                            (e -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        } else if (f + 1 === i) {
                            (e -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        n = r;
                        continue
                    }
                    if (r < 56320) {
                        (e -= 3) > -1 && a.push(239, 191, 189),
                        n = r;
                        continue
                    }
                    r = (n - 55296 << 10 | r - 56320) + 65536
                } else
                    n && (e -= 3) > -1 && a.push(239, 191, 189);
                if (n = null,
                r < 128) {
                    if ((e -= 1) < 0)
                        break;
                    a.push(r)
                } else if (r < 2048) {
                    if ((e -= 2) < 0)
                        break;
                    a.push(r >> 6 | 192, r & 63 | 128)
                } else if (r < 65536) {
                    if ((e -= 3) < 0)
                        break;
                    a.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128)
                } else if (r < 1114112) {
                    if ((e -= 4) < 0)
                        break;
                    a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128)
                } else
                    throw new Error("Invalid code point")
            }
            return a
        }
        function lu(t) {
            for (var e = [], r = 0; r < t.length; ++r)
                e.push(t.charCodeAt(r) & 255);
            return e
        }
        function pu(t, e) {
            for (var r, i, n, a = [], f = 0; f < t.length && !((e -= 2) < 0); ++f)
                r = t.charCodeAt(f),
                i = r >> 8,
                n = r % 256,
                a.push(n),
                a.push(i);
            return a
        }
        function $f(t) {
            return wr(uu(t))
        }
        function en(t, e, r, i) {
            for (var n = 0; n < i && !(n + r >= e.length || n >= t.length); ++n)
                e[n + r] = t[n];
            return n
        }
        function vu(t) {
            return t !== t
        }
        function Of(t) {
            return t != null && (!!t._isBuffer || Df(t) || bu(t))
        }
        function Df(t) {
            return !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t)
        }
        function bu(t) {
            return typeof t.readFloatLE == "function" && typeof t.slice == "function" && Df(t.slice(0, 0))
        }
        var gu = Object.freeze({
            __proto__: null,
            Buffer: k,
            INSPECT_MAX_BYTES: ot,
            SlowBuffer: Jh,
            isBuffer: Of,
            kMaxLength: ce
        })
          , yi = function(e, r) {
            for (var i = Math.min(e.length, r.length), n = new k(i), a = 0; a < i; ++a)
                n[a] = e[a] ^ r[a];
            return n
        }
          , xf = yi;
        Pt.encrypt = function(t, e) {
            var r = xf(e, t._prev);
            return t._prev = t._cipher.encryptBlock(r),
            t._prev
        }
        ,
        Pt.decrypt = function(t, e) {
            var r = t._prev;
            t._prev = e;
            var i = t._cipher.decryptBlock(e);
            return xf(i, r)
        }
        ;
        var Nf = {}
          , Xn = {
            exports: {}
        }
          , Kr = q(gu);
        /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
        (function(t, e) {
            var r = Kr
              , i = r.Buffer;
            function n(f, h) {
                for (var c in f)
                    h[c] = f[c]
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (n(r, e),
            e.Buffer = a);
            function a(f, h, c) {
                return i(f, h, c)
            }
            a.prototype = Object.create(i.prototype),
            n(i, a),
            a.from = function(f, h, c) {
                if (typeof f == "number")
                    throw new TypeError("Argument must not be a number");
                return i(f, h, c)
            }
            ,
            a.alloc = function(f, h, c) {
                if (typeof f != "number")
                    throw new TypeError("Argument must be a number");
                var l = i(f);
                return h !== void 0 ? typeof c == "string" ? l.fill(h, c) : l.fill(h) : l.fill(0),
                l
            }
            ,
            a.allocUnsafe = function(f) {
                if (typeof f != "number")
                    throw new TypeError("Argument must be a number");
                return i(f)
            }
            ,
            a.allocUnsafeSlow = function(f) {
                if (typeof f != "number")
                    throw new TypeError("Argument must be a number");
                return r.SlowBuffer(f)
            }
        }
        )(Xn, Xn.exports);
        var ge = Xn.exports
          , _i = ge.Buffer
          , yu = yi;
        function qf(t, e, r) {
            var i = e.length
              , n = yu(e, t._cache);
            return t._cache = t._cache.slice(i),
            t._prev = _i.concat([t._prev, r ? e : n]),
            n
        }
        Nf.encrypt = function(t, e, r) {
            for (var i = _i.allocUnsafe(0), n; e.length; )
                if (t._cache.length === 0 && (t._cache = t._cipher.encryptBlock(t._prev),
                t._prev = _i.allocUnsafe(0)),
                t._cache.length <= e.length)
                    n = t._cache.length,
                    i = _i.concat([i, qf(t, e.slice(0, n), r)]),
                    e = e.slice(n);
                else {
                    i = _i.concat([i, qf(t, e, r)]);
                    break
                }
            return i
        }
        ;
        var zf = {}
          , Zn = ge.Buffer;
        function _u(t, e, r) {
            var i = t._cipher.encryptBlock(t._prev)
              , n = i[0] ^ e;
            return t._prev = Zn.concat([t._prev.slice(1), Zn.from([r ? e : n])]),
            n
        }
        zf.encrypt = function(t, e, r) {
            for (var i = e.length, n = Zn.allocUnsafe(i), a = -1; ++a < i; )
                n[a] = _u(t, e[a], r);
            return n
        }
        ;
        var Uf = {}
          , tn = ge.Buffer;
        function mu(t, e, r) {
            for (var i, n = -1, a = 8, f = 0, h, c; ++n < a; )
                i = t._cipher.encryptBlock(t._prev),
                h = e & 1 << 7 - n ? 128 : 0,
                c = i[0] ^ h,
                f += (c & 128) >> n % 8,
                t._prev = wu(t._prev, r ? h : c);
            return f
        }
        function wu(t, e) {
            var r = t.length
              , i = -1
              , n = tn.allocUnsafe(t.length);
            for (t = tn.concat([t, tn.from([e])]); ++i < r; )
                n[i] = t[i] << 1 | t[i + 1] >> 7;
            return n
        }
        Uf.encrypt = function(t, e, r) {
            for (var i = e.length, n = tn.allocUnsafe(i), a = -1; ++a < i; )
                n[a] = mu(t, e[a], r);
            return n
        }
        ;
        var Ff = {}
          , Mu = yi;
        function Su(t) {
            return t._prev = t._cipher.encryptBlock(t._prev),
            t._prev
        }
        Ff.encrypt = function(t, e) {
            for (; t._cache.length < e.length; )
                t._cache = k.concat([t._cache, Su(t)]);
            var r = t._cache.slice(0, e.length);
            return t._cache = t._cache.slice(e.length),
            Mu(e, r)
        }
        ;
        var Qn = {};
        function Eu(t) {
            for (var e = t.length, r; e--; )
                if (r = t.readUInt8(e),
                r === 255)
                    t.writeUInt8(0, e);
                else {
                    r++,
                    t.writeUInt8(r, e);
                    break
                }
        }
        var Hf = Eu
          , Au = yi
          , jf = ge.Buffer
          , Ru = Hf;
        function Bu(t) {
            var e = t._cipher.encryptBlockRaw(t._prev);
            return Ru(t._prev),
            e
        }
        var ea = 16;
        Qn.encrypt = function(t, e) {
            var r = Math.ceil(e.length / ea)
              , i = t._cache.length;
            t._cache = jf.concat([t._cache, jf.allocUnsafe(r * ea)]);
            for (var n = 0; n < r; n++) {
                var a = Bu(t)
                  , f = i + n * ea;
                t._cache.writeUInt32BE(a[0], f + 0),
                t._cache.writeUInt32BE(a[1], f + 4),
                t._cache.writeUInt32BE(a[2], f + 8),
                t._cache.writeUInt32BE(a[3], f + 12)
            }
            var h = t._cache.slice(0, e.length);
            return t._cache = t._cache.slice(e.length),
            Au(e, h)
        }
        ;
        var Iu = {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CBC",
            type: "block"
        }
          , Tu = {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CBC",
            type: "block"
        }
          , Pu = {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CBC",
            type: "block"
        }
          , Wf = {
            "aes-128-ecb": {
                cipher: "AES",
                key: 128,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            "aes-192-ecb": {
                cipher: "AES",
                key: 192,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            "aes-256-ecb": {
                cipher: "AES",
                key: 256,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            "aes-128-cbc": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            "aes-192-cbc": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            "aes-256-cbc": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            aes128: Iu,
            aes192: Tu,
            aes256: Pu,
            "aes-128-cfb": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            "aes-192-cfb": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            "aes-256-cfb": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            "aes-128-cfb8": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            },
            "aes-192-cfb8": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            },
            "aes-256-cfb8": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            },
            "aes-128-cfb1": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            },
            "aes-192-cfb1": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            },
            "aes-256-cfb1": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            },
            "aes-128-ofb": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            "aes-192-ofb": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            "aes-256-ofb": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            "aes-128-ctr": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            "aes-192-ctr": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            "aes-256-ctr": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            "aes-128-gcm": {
                cipher: "AES",
                key: 128,
                iv: 12,
                mode: "GCM",
                type: "auth"
            },
            "aes-192-gcm": {
                cipher: "AES",
                key: 192,
                iv: 12,
                mode: "GCM",
                type: "auth"
            },
            "aes-256-gcm": {
                cipher: "AES",
                key: 256,
                iv: 12,
                mode: "GCM",
                type: "auth"
            }
        }
          , Lu = {
            ECB: mr,
            CBC: Pt,
            CFB: Nf,
            CFB8: zf,
            CFB1: Uf,
            OFB: Ff,
            CTR: Qn,
            GCM: Qn
        }
          , rn = Wf;
        for (var Yf in rn)
            rn[Yf].module = Lu[rn[Yf].mode];
        var Kf = rn
          , mi = {}
          , nn = ge.Buffer;
        function ta(t) {
            nn.isBuffer(t) || (t = nn.from(t));
            for (var e = t.length / 4 | 0, r = new Array(e), i = 0; i < e; i++)
                r[i] = t.readUInt32BE(i * 4);
            return r
        }
        function ra(t) {
            for (var e = 0; e < t.length; t++)
                t[e] = 0
        }
        function Vf(t, e, r, i, n) {
            for (var a = r[0], f = r[1], h = r[2], c = r[3], l = t[0] ^ e[0], v = t[1] ^ e[1], y = t[2] ^ e[2], E = t[3] ^ e[3], T, I, P, C, L = 4, x = 1; x < n; x++)
                T = a[l >>> 24] ^ f[v >>> 16 & 255] ^ h[y >>> 8 & 255] ^ c[E & 255] ^ e[L++],
                I = a[v >>> 24] ^ f[y >>> 16 & 255] ^ h[E >>> 8 & 255] ^ c[l & 255] ^ e[L++],
                P = a[y >>> 24] ^ f[E >>> 16 & 255] ^ h[l >>> 8 & 255] ^ c[v & 255] ^ e[L++],
                C = a[E >>> 24] ^ f[l >>> 16 & 255] ^ h[v >>> 8 & 255] ^ c[y & 255] ^ e[L++],
                l = T,
                v = I,
                y = P,
                E = C;
            return T = (i[l >>> 24] << 24 | i[v >>> 16 & 255] << 16 | i[y >>> 8 & 255] << 8 | i[E & 255]) ^ e[L++],
            I = (i[v >>> 24] << 24 | i[y >>> 16 & 255] << 16 | i[E >>> 8 & 255] << 8 | i[l & 255]) ^ e[L++],
            P = (i[y >>> 24] << 24 | i[E >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[v & 255]) ^ e[L++],
            C = (i[E >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[v >>> 8 & 255] << 8 | i[y & 255]) ^ e[L++],
            T = T >>> 0,
            I = I >>> 0,
            P = P >>> 0,
            C = C >>> 0,
            [T, I, P, C]
        }
        var ku = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
          , Be = function() {
            for (var t = new Array(256), e = 0; e < 256; e++)
                e < 128 ? t[e] = e << 1 : t[e] = e << 1 ^ 283;
            for (var r = [], i = [], n = [[], [], [], []], a = [[], [], [], []], f = 0, h = 0, c = 0; c < 256; ++c) {
                var l = h ^ h << 1 ^ h << 2 ^ h << 3 ^ h << 4;
                l = l >>> 8 ^ l & 255 ^ 99,
                r[f] = l,
                i[l] = f;
                var v = t[f]
                  , y = t[v]
                  , E = t[y]
                  , T = t[l] * 257 ^ l * 16843008;
                n[0][f] = T << 24 | T >>> 8,
                n[1][f] = T << 16 | T >>> 16,
                n[2][f] = T << 8 | T >>> 24,
                n[3][f] = T,
                T = E * 16843009 ^ y * 65537 ^ v * 257 ^ f * 16843008,
                a[0][l] = T << 24 | T >>> 8,
                a[1][l] = T << 16 | T >>> 16,
                a[2][l] = T << 8 | T >>> 24,
                a[3][l] = T,
                f === 0 ? f = h = 1 : (f = v ^ t[t[t[E ^ v]]],
                h ^= t[t[h]])
            }
            return {
                SBOX: r,
                INV_SBOX: i,
                SUB_MIX: n,
                INV_SUB_MIX: a
            }
        }();
        function kt(t) {
            this._key = ta(t),
            this._reset()
        }
        kt.blockSize = 4 * 4,
        kt.keySize = 256 / 8,
        kt.prototype.blockSize = kt.blockSize,
        kt.prototype.keySize = kt.keySize,
        kt.prototype._reset = function() {
            for (var t = this._key, e = t.length, r = e + 6, i = (r + 1) * 4, n = [], a = 0; a < e; a++)
                n[a] = t[a];
            for (a = e; a < i; a++) {
                var f = n[a - 1];
                a % e === 0 ? (f = f << 8 | f >>> 24,
                f = Be.SBOX[f >>> 24] << 24 | Be.SBOX[f >>> 16 & 255] << 16 | Be.SBOX[f >>> 8 & 255] << 8 | Be.SBOX[f & 255],
                f ^= ku[a / e | 0] << 24) : e > 6 && a % e === 4 && (f = Be.SBOX[f >>> 24] << 24 | Be.SBOX[f >>> 16 & 255] << 16 | Be.SBOX[f >>> 8 & 255] << 8 | Be.SBOX[f & 255]),
                n[a] = n[a - e] ^ f
            }
            for (var h = [], c = 0; c < i; c++) {
                var l = i - c
                  , v = n[l - (c % 4 ? 0 : 4)];
                c < 4 || l <= 4 ? h[c] = v : h[c] = Be.INV_SUB_MIX[0][Be.SBOX[v >>> 24]] ^ Be.INV_SUB_MIX[1][Be.SBOX[v >>> 16 & 255]] ^ Be.INV_SUB_MIX[2][Be.SBOX[v >>> 8 & 255]] ^ Be.INV_SUB_MIX[3][Be.SBOX[v & 255]]
            }
            this._nRounds = r,
            this._keySchedule = n,
            this._invKeySchedule = h
        }
        ,
        kt.prototype.encryptBlockRaw = function(t) {
            return t = ta(t),
            Vf(t, this._keySchedule, Be.SUB_MIX, Be.SBOX, this._nRounds)
        }
        ,
        kt.prototype.encryptBlock = function(t) {
            var e = this.encryptBlockRaw(t)
              , r = nn.allocUnsafe(16);
            return r.writeUInt32BE(e[0], 0),
            r.writeUInt32BE(e[1], 4),
            r.writeUInt32BE(e[2], 8),
            r.writeUInt32BE(e[3], 12),
            r
        }
        ,
        kt.prototype.decryptBlock = function(t) {
            t = ta(t);
            var e = t[1];
            t[1] = t[3],
            t[3] = e;
            var r = Vf(t, this._invKeySchedule, Be.INV_SUB_MIX, Be.INV_SBOX, this._nRounds)
              , i = nn.allocUnsafe(16);
            return i.writeUInt32BE(r[0], 0),
            i.writeUInt32BE(r[3], 4),
            i.writeUInt32BE(r[2], 8),
            i.writeUInt32BE(r[1], 12),
            i
        }
        ,
        kt.prototype.scrub = function() {
            ra(this._keySchedule),
            ra(this._invKeySchedule),
            ra(this._key)
        }
        ,
        mi.AES = kt;
        var Cu;
        function sr() {}
        sr.prototype = Object.create(null);
        function ae() {
            ae.init.call(this)
        }
        ae.EventEmitter = ae,
        ae.usingDomains = !1,
        ae.prototype.domain = void 0,
        ae.prototype._events = void 0,
        ae.prototype._maxListeners = void 0,
        ae.defaultMaxListeners = 10,
        ae.init = function() {
            this.domain = null,
            ae.usingDomains && Cu.active,
            (!this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = new sr,
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        ae.prototype.setMaxListeners = function(e) {
            if (typeof e != "number" || e < 0 || isNaN(e))
                throw new TypeError('"n" argument must be a positive number');
            return this._maxListeners = e,
            this
        }
        ;
        function Gf(t) {
            return t._maxListeners === void 0 ? ae.defaultMaxListeners : t._maxListeners
        }
        ae.prototype.getMaxListeners = function() {
            return Gf(this)
        }
        ;
        function $u(t, e, r) {
            if (e)
                t.call(r);
            else
                for (var i = t.length, n = wi(t, i), a = 0; a < i; ++a)
                    n[a].call(r)
        }
        function Ou(t, e, r, i) {
            if (e)
                t.call(r, i);
            else
                for (var n = t.length, a = wi(t, n), f = 0; f < n; ++f)
                    a[f].call(r, i)
        }
        function Du(t, e, r, i, n) {
            if (e)
                t.call(r, i, n);
            else
                for (var a = t.length, f = wi(t, a), h = 0; h < a; ++h)
                    f[h].call(r, i, n)
        }
        function xu(t, e, r, i, n, a) {
            if (e)
                t.call(r, i, n, a);
            else
                for (var f = t.length, h = wi(t, f), c = 0; c < f; ++c)
                    h[c].call(r, i, n, a)
        }
        function Nu(t, e, r, i) {
            if (e)
                t.apply(r, i);
            else
                for (var n = t.length, a = wi(t, n), f = 0; f < n; ++f)
                    a[f].apply(r, i)
        }
        ae.prototype.emit = function(e) {
            var r, i, n, a, f, h, c, l = e === "error";
            if (h = this._events,
            h)
                l = l && h.error == null;
            else if (!l)
                return !1;
            if (c = this.domain,
            l) {
                if (r = arguments[1],
                c)
                    r || (r = new Error('Uncaught, unspecified "error" event')),
                    r.domainEmitter = this,
                    r.domain = c,
                    r.domainThrown = !1,
                    c.emit("error", r);
                else {
                    if (r instanceof Error)
                        throw r;
                    var v = new Error('Uncaught, unspecified "error" event. (' + r + ")");
                    throw v.context = r,
                    v
                }
                return !1
            }
            if (i = h[e],
            !i)
                return !1;
            var y = typeof i == "function";
            switch (n = arguments.length,
            n) {
            case 1:
                $u(i, y, this);
                break;
            case 2:
                Ou(i, y, this, arguments[1]);
                break;
            case 3:
                Du(i, y, this, arguments[1], arguments[2]);
                break;
            case 4:
                xu(i, y, this, arguments[1], arguments[2], arguments[3]);
                break;
            default:
                for (a = new Array(n - 1),
                f = 1; f < n; f++)
                    a[f - 1] = arguments[f];
                Nu(i, y, this, a)
            }
            return !0
        }
        ;
        function Jf(t, e, r, i) {
            var n, a, f;
            if (typeof r != "function")
                throw new TypeError('"listener" argument must be a function');
            if (a = t._events,
            a ? (a.newListener && (t.emit("newListener", e, r.listener ? r.listener : r),
            a = t._events),
            f = a[e]) : (a = t._events = new sr,
            t._eventsCount = 0),
            !f)
                f = a[e] = r,
                ++t._eventsCount;
            else if (typeof f == "function" ? f = a[e] = i ? [r, f] : [f, r] : i ? f.unshift(r) : f.push(r),
            !f.warned && (n = Gf(t),
            n && n > 0 && f.length > n)) {
                f.warned = !0;
                var h = new Error("Possible EventEmitter memory leak detected. " + f.length + " " + e + " listeners added. Use emitter.setMaxListeners() to increase limit");
                h.name = "MaxListenersExceededWarning",
                h.emitter = t,
                h.type = e,
                h.count = f.length,
                qu(h)
            }
            return t
        }
        function qu(t) {
            typeof console.warn == "function" ? console.warn(t) : console.log(t)
        }
        ae.prototype.addListener = function(e, r) {
            return Jf(this, e, r, !1)
        }
        ,
        ae.prototype.on = ae.prototype.addListener,
        ae.prototype.prependListener = function(e, r) {
            return Jf(this, e, r, !0)
        }
        ;
        function Xf(t, e, r) {
            var i = !1;
            function n() {
                t.removeListener(e, n),
                i || (i = !0,
                r.apply(t, arguments))
            }
            return n.listener = r,
            n
        }
        ae.prototype.once = function(e, r) {
            if (typeof r != "function")
                throw new TypeError('"listener" argument must be a function');
            return this.on(e, Xf(this, e, r)),
            this
        }
        ,
        ae.prototype.prependOnceListener = function(e, r) {
            if (typeof r != "function")
                throw new TypeError('"listener" argument must be a function');
            return this.prependListener(e, Xf(this, e, r)),
            this
        }
        ,
        ae.prototype.removeListener = function(e, r) {
            var i, n, a, f, h;
            if (typeof r != "function")
                throw new TypeError('"listener" argument must be a function');
            if (n = this._events,
            !n)
                return this;
            if (i = n[e],
            !i)
                return this;
            if (i === r || i.listener && i.listener === r)
                --this._eventsCount === 0 ? this._events = new sr : (delete n[e],
                n.removeListener && this.emit("removeListener", e, i.listener || r));
            else if (typeof i != "function") {
                for (a = -1,
                f = i.length; f-- > 0; )
                    if (i[f] === r || i[f].listener && i[f].listener === r) {
                        h = i[f].listener,
                        a = f;
                        break
                    }
                if (a < 0)
                    return this;
                if (i.length === 1) {
                    if (i[0] = void 0,
                    --this._eventsCount === 0)
                        return this._events = new sr,
                        this;
                    delete n[e]
                } else
                    zu(i, a);
                n.removeListener && this.emit("removeListener", e, h || r)
            }
            return this
        }
        ,
        ae.prototype.off = function(t, e) {
            return this.removeListener(t, e)
        }
        ,
        ae.prototype.removeAllListeners = function(e) {
            var r, i;
            if (i = this._events,
            !i)
                return this;
            if (!i.removeListener)
                return arguments.length === 0 ? (this._events = new sr,
                this._eventsCount = 0) : i[e] && (--this._eventsCount === 0 ? this._events = new sr : delete i[e]),
                this;
            if (arguments.length === 0) {
                for (var n = Object.keys(i), a = 0, f; a < n.length; ++a)
                    f = n[a],
                    f !== "removeListener" && this.removeAllListeners(f);
                return this.removeAllListeners("removeListener"),
                this._events = new sr,
                this._eventsCount = 0,
                this
            }
            if (r = i[e],
            typeof r == "function")
                this.removeListener(e, r);
            else if (r)
                do
                    this.removeListener(e, r[r.length - 1]);
                while (r[0]);
            return this
        }
        ,
        ae.prototype.listeners = function(e) {
            var r, i, n = this._events;
            return n ? (r = n[e],
            r ? typeof r == "function" ? i = [r.listener || r] : i = Uu(r) : i = []) : i = [],
            i
        }
        ,
        ae.listenerCount = function(t, e) {
            return typeof t.listenerCount == "function" ? t.listenerCount(e) : Zf.call(t, e)
        }
        ,
        ae.prototype.listenerCount = Zf;
        function Zf(t) {
            var e = this._events;
            if (e) {
                var r = e[t];
                if (typeof r == "function")
                    return 1;
                if (r)
                    return r.length
            }
            return 0
        }
        ae.prototype.eventNames = function() {
            return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
        }
        ;
        function zu(t, e) {
            for (var r = e, i = r + 1, n = t.length; i < n; r += 1,
            i += 1)
                t[r] = t[i];
            t.pop()
        }
        function wi(t, e) {
            for (var r = new Array(e); e--; )
                r[e] = t[e];
            return r
        }
        function Uu(t) {
            for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                e[r] = t[r].listener || t[r];
            return e
        }
        var Fu = Object.freeze({
            __proto__: null,
            EventEmitter: ae,
            default: ae
        });
        function Qf() {
            throw new Error("setTimeout has not been defined")
        }
        function eo() {
            throw new Error("clearTimeout has not been defined")
        }
        var hr = Qf
          , ur = eo;
        typeof Lt.setTimeout == "function" && (hr = setTimeout),
        typeof Lt.clearTimeout == "function" && (ur = clearTimeout);
        function to(t) {
            if (hr === setTimeout)
                return setTimeout(t, 0);
            if ((hr === Qf || !hr) && setTimeout)
                return hr = setTimeout,
                setTimeout(t, 0);
            try {
                return hr(t, 0)
            } catch {
                try {
                    return hr.call(null, t, 0)
                } catch {
                    return hr.call(this, t, 0)
                }
            }
        }
        function Hu(t) {
            if (ur === clearTimeout)
                return clearTimeout(t);
            if ((ur === eo || !ur) && clearTimeout)
                return ur = clearTimeout,
                clearTimeout(t);
            try {
                return ur(t)
            } catch {
                try {
                    return ur.call(null, t)
                } catch {
                    return ur.call(this, t)
                }
            }
        }
        var tr = [], Vr = !1, Er, an = -1;
        function ju() {
            !Vr || !Er || (Vr = !1,
            Er.length ? tr = Er.concat(tr) : an = -1,
            tr.length && ro())
        }
        function ro() {
            if (!Vr) {
                var t = to(ju);
                Vr = !0;
                for (var e = tr.length; e; ) {
                    for (Er = tr,
                    tr = []; ++an < e; )
                        Er && Er[an].run();
                    an = -1,
                    e = tr.length
                }
                Er = null,
                Vr = !1,
                Hu(t)
            }
        }
        function Rt(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                    e[r - 1] = arguments[r];
            tr.push(new io(t,e)),
            tr.length === 1 && !Vr && to(ro)
        }
        function io(t, e) {
            this.fun = t,
            this.array = e
        }
        io.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ;
        var Wu = "browser"
          , Yu = "browser"
          , Ku = !0
          , Vu = {}
          , Gu = []
          , Ju = ""
          , Xu = {}
          , Zu = {}
          , Qu = {};
        function Ar() {}
        var ec = Ar
          , tc = Ar
          , rc = Ar
          , ic = Ar
          , nc = Ar
          , ac = Ar
          , fc = Ar;
        function oc(t) {
            throw new Error("process.binding is not supported")
        }
        function sc() {
            return "/"
        }
        function hc(t) {
            throw new Error("process.chdir is not supported")
        }
        function uc() {
            return 0
        }
        var Gr = Lt.performance || {}
          , cc = Gr.now || Gr.mozNow || Gr.msNow || Gr.oNow || Gr.webkitNow || function() {
            return new Date().getTime()
        }
        ;
        function dc(t) {
            var e = cc.call(Gr) * .001
              , r = Math.floor(e)
              , i = Math.floor(e % 1 * 1e9);
            return t && (r = r - t[0],
            i = i - t[1],
            i < 0 && (r--,
            i += 1e9)),
            [r, i]
        }
        var lc = new Date;
        function pc() {
            var t = new Date
              , e = t - lc;
            return e / 1e3
        }
        var se = {
            nextTick: Rt,
            title: Wu,
            browser: Ku,
            env: Vu,
            argv: Gu,
            version: Ju,
            versions: Xu,
            on: ec,
            addListener: tc,
            once: rc,
            off: ic,
            removeListener: nc,
            removeAllListeners: ac,
            emit: fc,
            binding: oc,
            cwd: sc,
            chdir: hc,
            umask: uc,
            hrtime: dc,
            platform: Yu,
            release: Zu,
            config: Qu,
            uptime: pc
        }, ia;
        typeof Object.create == "function" ? ia = function(e, r) {
            e.super_ = r,
            e.prototype = Object.create(r.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }
        : ia = function(e, r) {
            e.super_ = r;
            var i = function() {};
            i.prototype = r.prototype,
            e.prototype = new i,
            e.prototype.constructor = e
        }
        ;
        var cr = ia
          , no = Object.getOwnPropertyDescriptors || function(e) {
            for (var r = Object.keys(e), i = {}, n = 0; n < r.length; n++)
                i[r[n]] = Object.getOwnPropertyDescriptor(e, r[n]);
            return i
        }
          , vc = /%[sdj%]/g;
        function fn(t) {
            if (!Si(t)) {
                for (var e = [], r = 0; r < arguments.length; r++)
                    e.push(jt(arguments[r]));
                return e.join(" ")
            }
            for (var r = 1, i = arguments, n = i.length, a = String(t).replace(vc, function(h) {
                if (h === "%%")
                    return "%";
                if (r >= n)
                    return h;
                switch (h) {
                case "%s":
                    return String(i[r++]);
                case "%d":
                    return Number(i[r++]);
                case "%j":
                    try {
                        return JSON.stringify(i[r++])
                    } catch {
                        return "[Circular]"
                    }
                default:
                    return h
                }
            }), f = i[r]; r < n; f = i[++r])
                Mi(f) || !Rr(f) ? a += " " + f : a += " " + jt(f);
            return a
        }
        function on(t, e) {
            if (Wt(Lt.process))
                return function() {
                    return on(t, e).apply(this, arguments)
                }
                ;
            if (se.noDeprecation === !0)
                return t;
            var r = !1;
            function i() {
                if (!r) {
                    if (se.throwDeprecation)
                        throw new Error(e);
                    se.traceDeprecation ? console.trace(e) : console.error(e),
                    r = !0
                }
                return t.apply(this, arguments)
            }
            return i
        }
        var sn = {}, na;
        function aa(t) {
            if (Wt(na) && (na = se.env.NODE_DEBUG || ""),
            t = t.toUpperCase(),
            !sn[t])
                if (new RegExp("\\b" + t + "\\b","i").test(na)) {
                    var e = 0;
                    sn[t] = function() {
                        var r = fn.apply(null, arguments);
                        console.error("%s %d: %s", t, e, r)
                    }
                } else
                    sn[t] = function() {}
                    ;
            return sn[t]
        }
        function jt(t, e) {
            var r = {
                seen: [],
                stylize: gc
            };
            return arguments.length >= 3 && (r.depth = arguments[2]),
            arguments.length >= 4 && (r.colors = arguments[3]),
            un(e) ? r.showHidden = e : e && da(r, e),
            Wt(r.showHidden) && (r.showHidden = !1),
            Wt(r.depth) && (r.depth = 2),
            Wt(r.colors) && (r.colors = !1),
            Wt(r.customInspect) && (r.customInspect = !0),
            r.colors && (r.stylize = bc),
            hn(r, t, r.depth)
        }
        jt.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        },
        jt.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        };
        function bc(t, e) {
            var r = jt.styles[e];
            return r ? "\x1B[" + jt.colors[r][0] + "m" + t + "\x1B[" + jt.colors[r][1] + "m" : t
        }
        function gc(t, e) {
            return t
        }
        function yc(t) {
            var e = {};
            return t.forEach(function(r, i) {
                e[r] = !0
            }),
            e
        }
        function hn(t, e, r) {
            if (t.customInspect && e && Ri(e.inspect) && e.inspect !== jt && !(e.constructor && e.constructor.prototype === e)) {
                var i = e.inspect(r, t);
                return Si(i) || (i = hn(t, i, r)),
                i
            }
            var n = _c(t, e);
            if (n)
                return n;
            var a = Object.keys(e)
              , f = yc(a);
            if (t.showHidden && (a = Object.getOwnPropertyNames(e)),
            Ai(e) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
                return fa(e);
            if (a.length === 0) {
                if (Ri(e)) {
                    var h = e.name ? ": " + e.name : "";
                    return t.stylize("[Function" + h + "]", "special")
                }
                if (Ei(e))
                    return t.stylize(RegExp.prototype.toString.call(e), "regexp");
                if (cn(e))
                    return t.stylize(Date.prototype.toString.call(e), "date");
                if (Ai(e))
                    return fa(e)
            }
            var c = ""
              , l = !1
              , v = ["{", "}"];
            if (sa(e) && (l = !0,
            v = ["[", "]"]),
            Ri(e)) {
                var y = e.name ? ": " + e.name : "";
                c = " [Function" + y + "]"
            }
            if (Ei(e) && (c = " " + RegExp.prototype.toString.call(e)),
            cn(e) && (c = " " + Date.prototype.toUTCString.call(e)),
            Ai(e) && (c = " " + fa(e)),
            a.length === 0 && (!l || e.length == 0))
                return v[0] + c + v[1];
            if (r < 0)
                return Ei(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
            t.seen.push(e);
            var E;
            return l ? E = mc(t, e, r, f, a) : E = a.map(function(T) {
                return oa(t, e, r, f, T, l)
            }),
            t.seen.pop(),
            wc(E, c, v)
        }
        function _c(t, e) {
            if (Wt(e))
                return t.stylize("undefined", "undefined");
            if (Si(e)) {
                var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return t.stylize(r, "string")
            }
            if (ha(e))
                return t.stylize("" + e, "number");
            if (un(e))
                return t.stylize("" + e, "boolean");
            if (Mi(e))
                return t.stylize("null", "null")
        }
        function fa(t) {
            return "[" + Error.prototype.toString.call(t) + "]"
        }
        function mc(t, e, r, i, n) {
            for (var a = [], f = 0, h = e.length; f < h; ++f)
                uo(e, String(f)) ? a.push(oa(t, e, r, i, String(f), !0)) : a.push("");
            return n.forEach(function(c) {
                c.match(/^\d+$/) || a.push(oa(t, e, r, i, c, !0))
            }),
            a
        }
        function oa(t, e, r, i, n, a) {
            var f, h, c;
            if (c = Object.getOwnPropertyDescriptor(e, n) || {
                value: e[n]
            },
            c.get ? c.set ? h = t.stylize("[Getter/Setter]", "special") : h = t.stylize("[Getter]", "special") : c.set && (h = t.stylize("[Setter]", "special")),
            uo(i, n) || (f = "[" + n + "]"),
            h || (t.seen.indexOf(c.value) < 0 ? (Mi(r) ? h = hn(t, c.value, null) : h = hn(t, c.value, r - 1),
            h.indexOf(`
`) > -1 && (a ? h = h.split(`
`).map(function(l) {
                return "  " + l
            }).join(`
`).substr(2) : h = `
` + h.split(`
`).map(function(l) {
                return "   " + l
            }).join(`
`))) : h = t.stylize("[Circular]", "special")),
            Wt(f)) {
                if (a && n.match(/^\d+$/))
                    return h;
                f = JSON.stringify("" + n),
                f.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (f = f.substr(1, f.length - 2),
                f = t.stylize(f, "name")) : (f = f.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"),
                f = t.stylize(f, "string"))
            }
            return f + ": " + h
        }
        function wc(t, e, r) {
            var i = t.reduce(function(n, a) {
                return a.indexOf(`
`) >= 0,
                n + a.replace(/\u001b\[\d\d?m/g, "").length + 1
            }, 0);
            return i > 60 ? r[0] + (e === "" ? "" : e + `
 `) + " " + t.join(`,
  `) + " " + r[1] : r[0] + e + " " + t.join(", ") + " " + r[1]
        }
        function sa(t) {
            return Array.isArray(t)
        }
        function un(t) {
            return typeof t == "boolean"
        }
        function Mi(t) {
            return t === null
        }
        function ao(t) {
            return t == null
        }
        function ha(t) {
            return typeof t == "number"
        }
        function Si(t) {
            return typeof t == "string"
        }
        function fo(t) {
            return typeof t == "symbol"
        }
        function Wt(t) {
            return t === void 0
        }
        function Ei(t) {
            return Rr(t) && ua(t) === "[object RegExp]"
        }
        function Rr(t) {
            return typeof t == "object" && t !== null
        }
        function cn(t) {
            return Rr(t) && ua(t) === "[object Date]"
        }
        function Ai(t) {
            return Rr(t) && (ua(t) === "[object Error]" || t instanceof Error)
        }
        function Ri(t) {
            return typeof t == "function"
        }
        function oo(t) {
            return t === null || typeof t == "boolean" || typeof t == "number" || typeof t == "string" || typeof t == "symbol" || typeof t > "u"
        }
        function so(t) {
            return k.isBuffer(t)
        }
        function ua(t) {
            return Object.prototype.toString.call(t)
        }
        function ca(t) {
            return t < 10 ? "0" + t.toString(10) : t.toString(10)
        }
        var Mc = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function Sc() {
            var t = new Date
              , e = [ca(t.getHours()), ca(t.getMinutes()), ca(t.getSeconds())].join(":");
            return [t.getDate(), Mc[t.getMonth()], e].join(" ")
        }
        function ho() {
            console.log("%s - %s", Sc(), fn.apply(null, arguments))
        }
        function da(t, e) {
            if (!e || !Rr(e))
                return t;
            for (var r = Object.keys(e), i = r.length; i--; )
                t[r[i]] = e[r[i]];
            return t
        }
        function uo(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        var Br = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
        function la(t) {
            if (typeof t != "function")
                throw new TypeError('The "original" argument must be of type Function');
            if (Br && t[Br]) {
                var e = t[Br];
                if (typeof e != "function")
                    throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(e, Br, {
                    value: e,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }),
                e
            }
            function e() {
                for (var r, i, n = new Promise(function(h, c) {
                    r = h,
                    i = c
                }
                ), a = [], f = 0; f < arguments.length; f++)
                    a.push(arguments[f]);
                a.push(function(h, c) {
                    h ? i(h) : r(c)
                });
                try {
                    t.apply(this, a)
                } catch (h) {
                    i(h)
                }
                return n
            }
            return Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            Br && Object.defineProperty(e, Br, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }),
            Object.defineProperties(e, no(t))
        }
        la.custom = Br;
        function Ec(t, e) {
            if (!t) {
                var r = new Error("Promise was rejected with a falsy value");
                r.reason = t,
                t = r
            }
            return e(t)
        }
        function co(t) {
            if (typeof t != "function")
                throw new TypeError('The "original" argument must be of type Function');
            function e() {
                for (var r = [], i = 0; i < arguments.length; i++)
                    r.push(arguments[i]);
                var n = r.pop();
                if (typeof n != "function")
                    throw new TypeError("The last argument must be of type Function");
                var a = this
                  , f = function() {
                    return n.apply(a, arguments)
                };
                t.apply(this, r).then(function(h) {
                    se.nextTick(f.bind(null, null, h))
                }, function(h) {
                    se.nextTick(Ec.bind(null, h, f))
                })
            }
            return Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            Object.defineProperties(e, no(t)),
            e
        }
        var Ac = {
            inherits: cr,
            _extend: da,
            log: ho,
            isBuffer: so,
            isPrimitive: oo,
            isFunction: Ri,
            isError: Ai,
            isDate: cn,
            isObject: Rr,
            isRegExp: Ei,
            isUndefined: Wt,
            isSymbol: fo,
            isString: Si,
            isNumber: ha,
            isNullOrUndefined: ao,
            isNull: Mi,
            isBoolean: un,
            isArray: sa,
            inspect: jt,
            deprecate: on,
            format: fn,
            debuglog: aa,
            promisify: la,
            callbackify: co
        }
          , Rc = Object.freeze({
            __proto__: null,
            _extend: da,
            callbackify: co,
            debuglog: aa,
            default: Ac,
            deprecate: on,
            format: fn,
            inherits: cr,
            inspect: jt,
            isArray: sa,
            isBoolean: un,
            isBuffer: so,
            isDate: cn,
            isError: Ai,
            isFunction: Ri,
            isNull: Mi,
            isNullOrUndefined: ao,
            isNumber: ha,
            isObject: Rr,
            isPrimitive: oo,
            isRegExp: Ei,
            isString: Si,
            isSymbol: fo,
            isUndefined: Wt,
            log: ho,
            promisify: la
        });
        function Ir() {
            this.head = null,
            this.tail = null,
            this.length = 0
        }
        Ir.prototype.push = function(t) {
            var e = {
                data: t,
                next: null
            };
            this.length > 0 ? this.tail.next = e : this.head = e,
            this.tail = e,
            ++this.length
        }
        ,
        Ir.prototype.unshift = function(t) {
            var e = {
                data: t,
                next: this.head
            };
            this.length === 0 && (this.tail = e),
            this.head = e,
            ++this.length
        }
        ,
        Ir.prototype.shift = function() {
            if (this.length !== 0) {
                var t = this.head.data;
                return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next,
                --this.length,
                t
            }
        }
        ,
        Ir.prototype.clear = function() {
            this.head = this.tail = null,
            this.length = 0
        }
        ,
        Ir.prototype.join = function(t) {
            if (this.length === 0)
                return "";
            for (var e = this.head, r = "" + e.data; e = e.next; )
                r += t + e.data;
            return r
        }
        ,
        Ir.prototype.concat = function(t) {
            if (this.length === 0)
                return k.alloc(0);
            if (this.length === 1)
                return this.head.data;
            for (var e = k.allocUnsafe(t >>> 0), r = this.head, i = 0; r; )
                r.data.copy(e, i),
                i += r.data.length,
                r = r.next;
            return e
        }
        ;
        var Bc = k.isEncoding || function(t) {
            switch (t && t.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
                return !0;
            default:
                return !1
            }
        }
        ;
        function Ic(t) {
            if (t && !Bc(t))
                throw new Error("Unknown encoding: " + t)
        }
        function Jr(t) {
            switch (this.encoding = (t || "utf8").toLowerCase().replace(/[-_]/, ""),
            Ic(t),
            this.encoding) {
            case "utf8":
                this.surrogateSize = 3;
                break;
            case "ucs2":
            case "utf16le":
                this.surrogateSize = 2,
                this.detectIncompleteChar = Pc;
                break;
            case "base64":
                this.surrogateSize = 3,
                this.detectIncompleteChar = Lc;
                break;
            default:
                this.write = Tc;
                return
            }
            this.charBuffer = new k(6),
            this.charReceived = 0,
            this.charLength = 0
        }
        Jr.prototype.write = function(t) {
            for (var e = ""; this.charLength; ) {
                var r = t.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : t.length;
                if (t.copy(this.charBuffer, this.charReceived, 0, r),
                this.charReceived += r,
                this.charReceived < this.charLength)
                    return "";
                t = t.slice(r, t.length),
                e = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
                var n = e.charCodeAt(e.length - 1);
                if (n >= 55296 && n <= 56319) {
                    this.charLength += this.surrogateSize,
                    e = "";
                    continue
                }
                if (this.charReceived = this.charLength = 0,
                t.length === 0)
                    return e;
                break
            }
            this.detectIncompleteChar(t);
            var i = t.length;
            this.charLength && (t.copy(this.charBuffer, 0, t.length - this.charReceived, i),
            i -= this.charReceived),
            e += t.toString(this.encoding, 0, i);
            var i = e.length - 1
              , n = e.charCodeAt(i);
            if (n >= 55296 && n <= 56319) {
                var a = this.surrogateSize;
                return this.charLength += a,
                this.charReceived += a,
                this.charBuffer.copy(this.charBuffer, a, 0, a),
                t.copy(this.charBuffer, 0, 0, a),
                e.substring(0, i)
            }
            return e
        }
        ,
        Jr.prototype.detectIncompleteChar = function(t) {
            for (var e = t.length >= 3 ? 3 : t.length; e > 0; e--) {
                var r = t[t.length - e];
                if (e == 1 && r >> 5 == 6) {
                    this.charLength = 2;
                    break
                }
                if (e <= 2 && r >> 4 == 14) {
                    this.charLength = 3;
                    break
                }
                if (e <= 3 && r >> 3 == 30) {
                    this.charLength = 4;
                    break
                }
            }
            this.charReceived = e
        }
        ,
        Jr.prototype.end = function(t) {
            var e = "";
            if (t && t.length && (e = this.write(t)),
            this.charReceived) {
                var r = this.charReceived
                  , i = this.charBuffer
                  , n = this.encoding;
                e += i.slice(0, r).toString(n)
            }
            return e
        }
        ;
        function Tc(t) {
            return t.toString(this.encoding)
        }
        function Pc(t) {
            this.charReceived = t.length % 2,
            this.charLength = this.charReceived ? 2 : 0
        }
        function Lc(t) {
            this.charReceived = t.length % 3,
            this.charLength = this.charReceived ? 3 : 0
        }
        var kc = Object.freeze({
            __proto__: null,
            StringDecoder: Jr
        });
        me.ReadableState = lo;
        var he = aa("stream");
        cr(me, ae);
        function Cc(t, e, r) {
            if (typeof t.prependListener == "function")
                return t.prependListener(e, r);
            !t._events || !t._events[e] ? t.on(e, r) : Array.isArray(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]]
        }
        function $c(t, e) {
            return t.listeners(e).length
        }
        function lo(t, e) {
            t = t || {},
            this.objectMode = !!t.objectMode,
            e instanceof Bt && (this.objectMode = this.objectMode || !!t.readableObjectMode);
            var r = t.highWaterMark
              , i = this.objectMode ? 16 : 16 * 1024;
            this.highWaterMark = r || r === 0 ? r : i,
            this.highWaterMark = ~~this.highWaterMark,
            this.buffer = new Ir,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.defaultEncoding = t.defaultEncoding || "utf8",
            this.ranOut = !1,
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            t.encoding && (this.decoder = new Jr(t.encoding),
            this.encoding = t.encoding)
        }
        function me(t) {
            if (!(this instanceof me))
                return new me(t);
            this._readableState = new lo(t,this),
            this.readable = !0,
            t && typeof t.read == "function" && (this._read = t.read),
            ae.call(this)
        }
        me.prototype.push = function(t, e) {
            var r = this._readableState;
            return !r.objectMode && typeof t == "string" && (e = e || r.defaultEncoding,
            e !== r.encoding && (t = k.from(t, e),
            e = "")),
            po(this, r, t, e, !1)
        }
        ,
        me.prototype.unshift = function(t) {
            var e = this._readableState;
            return po(this, e, t, "", !0)
        }
        ,
        me.prototype.isPaused = function() {
            return this._readableState.flowing === !1
        }
        ;
        function po(t, e, r, i, n) {
            var a = xc(e, r);
            if (a)
                t.emit("error", a);
            else if (r === null)
                e.reading = !1,
                Nc(t, e);
            else if (e.objectMode || r && r.length > 0)
                if (e.ended && !n) {
                    var f = new Error("stream.push() after EOF");
                    t.emit("error", f)
                } else if (e.endEmitted && n) {
                    var h = new Error("stream.unshift() after end event");
                    t.emit("error", h)
                } else {
                    var c;
                    e.decoder && !n && !i && (r = e.decoder.write(r),
                    c = !e.objectMode && r.length === 0),
                    n || (e.reading = !1),
                    c || (e.flowing && e.length === 0 && !e.sync ? (t.emit("data", r),
                    t.read(0)) : (e.length += e.objectMode ? 1 : r.length,
                    n ? e.buffer.unshift(r) : e.buffer.push(r),
                    e.needReadable && dn(t))),
                    qc(t, e)
                }
            else
                n || (e.reading = !1);
            return Oc(e)
        }
        function Oc(t) {
            return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0)
        }
        me.prototype.setEncoding = function(t) {
            return this._readableState.decoder = new Jr(t),
            this._readableState.encoding = t,
            this
        }
        ;
        var vo = 8388608;
        function Dc(t) {
            return t >= vo ? t = vo : (t--,
            t |= t >>> 1,
            t |= t >>> 2,
            t |= t >>> 4,
            t |= t >>> 8,
            t |= t >>> 16,
            t++),
            t
        }
        function bo(t, e) {
            return t <= 0 || e.length === 0 && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = Dc(t)),
            t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0,
            0))
        }
        me.prototype.read = function(t) {
            he("read", t),
            t = parseInt(t, 10);
            var e = this._readableState
              , r = t;
            if (t !== 0 && (e.emittedReadable = !1),
            t === 0 && e.needReadable && (e.length >= e.highWaterMark || e.ended))
                return he("read: emitReadable", e.length, e.ended),
                e.length === 0 && e.ended ? va(this) : dn(this),
                null;
            if (t = bo(t, e),
            t === 0 && e.ended)
                return e.length === 0 && va(this),
                null;
            var i = e.needReadable;
            he("need readable", i),
            (e.length === 0 || e.length - t < e.highWaterMark) && (i = !0,
            he("length less than watermark", i)),
            e.ended || e.reading ? (i = !1,
            he("reading or ended", i)) : i && (he("do read"),
            e.reading = !0,
            e.sync = !0,
            e.length === 0 && (e.needReadable = !0),
            this._read(e.highWaterMark),
            e.sync = !1,
            e.reading || (t = bo(r, e)));
            var n;
            return t > 0 ? n = yo(t, e) : n = null,
            n === null ? (e.needReadable = !0,
            t = 0) : e.length -= t,
            e.length === 0 && (e.ended || (e.needReadable = !0),
            r !== t && e.ended && va(this)),
            n !== null && this.emit("data", n),
            n
        }
        ;
        function xc(t, e) {
            var r = null;
            return !k.isBuffer(e) && typeof e != "string" && e !== null && e !== void 0 && !t.objectMode && (r = new TypeError("Invalid non-string/buffer chunk")),
            r
        }
        function Nc(t, e) {
            if (!e.ended) {
                if (e.decoder) {
                    var r = e.decoder.end();
                    r && r.length && (e.buffer.push(r),
                    e.length += e.objectMode ? 1 : r.length)
                }
                e.ended = !0,
                dn(t)
            }
        }
        function dn(t) {
            var e = t._readableState;
            e.needReadable = !1,
            e.emittedReadable || (he("emitReadable", e.flowing),
            e.emittedReadable = !0,
            e.sync ? Rt(go, t) : go(t))
        }
        function go(t) {
            he("emit readable"),
            t.emit("readable"),
            pa(t)
        }
        function qc(t, e) {
            e.readingMore || (e.readingMore = !0,
            Rt(zc, t, e))
        }
        function zc(t, e) {
            for (var r = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (he("maybeReadMore read 0"),
            t.read(0),
            r !== e.length); )
                r = e.length;
            e.readingMore = !1
        }
        me.prototype._read = function(t) {
            this.emit("error", new Error("not implemented"))
        }
        ,
        me.prototype.pipe = function(t, e) {
            var r = this
              , i = this._readableState;
            switch (i.pipesCount) {
            case 0:
                i.pipes = t;
                break;
            case 1:
                i.pipes = [i.pipes, t];
                break;
            default:
                i.pipes.push(t);
                break
            }
            i.pipesCount += 1,
            he("pipe count=%d opts=%j", i.pipesCount, e);
            var n = !e || e.end !== !1
              , a = n ? h : v;
            i.endEmitted ? Rt(a) : r.once("end", a),
            t.on("unpipe", f);
            function f(L) {
                he("onunpipe"),
                L === r && v()
            }
            function h() {
                he("onend"),
                t.end()
            }
            var c = Uc(r);
            t.on("drain", c);
            var l = !1;
            function v() {
                he("cleanup"),
                t.removeListener("close", I),
                t.removeListener("finish", P),
                t.removeListener("drain", c),
                t.removeListener("error", T),
                t.removeListener("unpipe", f),
                r.removeListener("end", h),
                r.removeListener("end", v),
                r.removeListener("data", E),
                l = !0,
                i.awaitDrain && (!t._writableState || t._writableState.needDrain) && c()
            }
            var y = !1;
            r.on("data", E);
            function E(L) {
                he("ondata"),
                y = !1;
                var x = t.write(L);
                x === !1 && !y && ((i.pipesCount === 1 && i.pipes === t || i.pipesCount > 1 && _o(i.pipes, t) !== -1) && !l && (he("false write response, pause", r._readableState.awaitDrain),
                r._readableState.awaitDrain++,
                y = !0),
                r.pause())
            }
            function T(L) {
                he("onerror", L),
                C(),
                t.removeListener("error", T),
                $c(t, "error") === 0 && t.emit("error", L)
            }
            Cc(t, "error", T);
            function I() {
                t.removeListener("finish", P),
                C()
            }
            t.once("close", I);
            function P() {
                he("onfinish"),
                t.removeListener("close", I),
                C()
            }
            t.once("finish", P);
            function C() {
                he("unpipe"),
                r.unpipe(t)
            }
            return t.emit("pipe", r),
            i.flowing || (he("pipe resume"),
            r.resume()),
            t
        }
        ;
        function Uc(t) {
            return function() {
                var e = t._readableState;
                he("pipeOnDrain", e.awaitDrain),
                e.awaitDrain && e.awaitDrain--,
                e.awaitDrain === 0 && t.listeners("data").length && (e.flowing = !0,
                pa(t))
            }
        }
        me.prototype.unpipe = function(t) {
            var e = this._readableState;
            if (e.pipesCount === 0)
                return this;
            if (e.pipesCount === 1)
                return t && t !== e.pipes ? this : (t || (t = e.pipes),
                e.pipes = null,
                e.pipesCount = 0,
                e.flowing = !1,
                t && t.emit("unpipe", this),
                this);
            if (!t) {
                var r = e.pipes
                  , i = e.pipesCount;
                e.pipes = null,
                e.pipesCount = 0,
                e.flowing = !1;
                for (var n = 0; n < i; n++)
                    r[n].emit("unpipe", this);
                return this
            }
            var a = _o(e.pipes, t);
            return a === -1 ? this : (e.pipes.splice(a, 1),
            e.pipesCount -= 1,
            e.pipesCount === 1 && (e.pipes = e.pipes[0]),
            t.emit("unpipe", this),
            this)
        }
        ,
        me.prototype.on = function(t, e) {
            var r = ae.prototype.on.call(this, t, e);
            if (t === "data")
                this._readableState.flowing !== !1 && this.resume();
            else if (t === "readable") {
                var i = this._readableState;
                !i.endEmitted && !i.readableListening && (i.readableListening = i.needReadable = !0,
                i.emittedReadable = !1,
                i.reading ? i.length && dn(this) : Rt(Fc, this))
            }
            return r
        }
        ,
        me.prototype.addListener = me.prototype.on;
        function Fc(t) {
            he("readable nexttick read 0"),
            t.read(0)
        }
        me.prototype.resume = function() {
            var t = this._readableState;
            return t.flowing || (he("resume"),
            t.flowing = !0,
            Hc(this, t)),
            this
        }
        ;
        function Hc(t, e) {
            e.resumeScheduled || (e.resumeScheduled = !0,
            Rt(jc, t, e))
        }
        function jc(t, e) {
            e.reading || (he("resume read 0"),
            t.read(0)),
            e.resumeScheduled = !1,
            e.awaitDrain = 0,
            t.emit("resume"),
            pa(t),
            e.flowing && !e.reading && t.read(0)
        }
        me.prototype.pause = function() {
            return he("call pause flowing=%j", this._readableState.flowing),
            this._readableState.flowing !== !1 && (he("pause"),
            this._readableState.flowing = !1,
            this.emit("pause")),
            this
        }
        ;
        function pa(t) {
            var e = t._readableState;
            for (he("flow", e.flowing); e.flowing && t.read() !== null; )
                ;
        }
        me.prototype.wrap = function(t) {
            var e = this._readableState
              , r = !1
              , i = this;
            t.on("end", function() {
                if (he("wrapped end"),
                e.decoder && !e.ended) {
                    var f = e.decoder.end();
                    f && f.length && i.push(f)
                }
                i.push(null)
            }),
            t.on("data", function(f) {
                if (he("wrapped data"),
                e.decoder && (f = e.decoder.write(f)),
                !(e.objectMode && f == null) && !(!e.objectMode && (!f || !f.length))) {
                    var h = i.push(f);
                    h || (r = !0,
                    t.pause())
                }
            });
            for (var n in t)
                this[n] === void 0 && typeof t[n] == "function" && (this[n] = function(f) {
                    return function() {
                        return t[f].apply(t, arguments)
                    }
                }(n));
            var a = ["error", "close", "destroy", "pause", "resume"];
            return Gc(a, function(f) {
                t.on(f, i.emit.bind(i, f))
            }),
            i._read = function(f) {
                he("wrapped _read", f),
                r && (r = !1,
                t.resume())
            }
            ,
            i
        }
        ,
        me._fromList = yo;
        function yo(t, e) {
            if (e.length === 0)
                return null;
            var r;
            return e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (e.decoder ? r = e.buffer.join("") : e.buffer.length === 1 ? r = e.buffer.head.data : r = e.buffer.concat(e.length),
            e.buffer.clear()) : r = Wc(t, e.buffer, e.decoder),
            r
        }
        function Wc(t, e, r) {
            var i;
            return t < e.head.data.length ? (i = e.head.data.slice(0, t),
            e.head.data = e.head.data.slice(t)) : t === e.head.data.length ? i = e.shift() : i = r ? Yc(t, e) : Kc(t, e),
            i
        }
        function Yc(t, e) {
            var r = e.head
              , i = 1
              , n = r.data;
            for (t -= n.length; r = r.next; ) {
                var a = r.data
                  , f = t > a.length ? a.length : t;
                if (f === a.length ? n += a : n += a.slice(0, t),
                t -= f,
                t === 0) {
                    f === a.length ? (++i,
                    r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r,
                    r.data = a.slice(f));
                    break
                }
                ++i
            }
            return e.length -= i,
            n
        }
        function Kc(t, e) {
            var r = k.allocUnsafe(t)
              , i = e.head
              , n = 1;
            for (i.data.copy(r),
            t -= i.data.length; i = i.next; ) {
                var a = i.data
                  , f = t > a.length ? a.length : t;
                if (a.copy(r, r.length - t, 0, f),
                t -= f,
                t === 0) {
                    f === a.length ? (++n,
                    i.next ? e.head = i.next : e.head = e.tail = null) : (e.head = i,
                    i.data = a.slice(f));
                    break
                }
                ++n
            }
            return e.length -= n,
            r
        }
        function va(t) {
            var e = t._readableState;
            if (e.length > 0)
                throw new Error('"endReadable()" called on non-empty stream');
            e.endEmitted || (e.ended = !0,
            Rt(Vc, e, t))
        }
        function Vc(t, e) {
            !t.endEmitted && t.length === 0 && (t.endEmitted = !0,
            e.readable = !1,
            e.emit("end"))
        }
        function Gc(t, e) {
            for (var r = 0, i = t.length; r < i; r++)
                e(t[r], r)
        }
        function _o(t, e) {
            for (var r = 0, i = t.length; r < i; r++)
                if (t[r] === e)
                    return r;
            return -1
        }
        nt.WritableState = ba,
        cr(nt, ae);
        function Jc() {}
        function Xc(t, e, r) {
            this.chunk = t,
            this.encoding = e,
            this.callback = r,
            this.next = null
        }
        function ba(t, e) {
            Object.defineProperty(this, "buffer", {
                get: on(function() {
                    return this.getBuffer()
                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
            }),
            t = t || {},
            this.objectMode = !!t.objectMode,
            e instanceof Bt && (this.objectMode = this.objectMode || !!t.writableObjectMode);
            var r = t.highWaterMark
              , i = this.objectMode ? 16 : 16 * 1024;
            this.highWaterMark = r || r === 0 ? r : i,
            this.highWaterMark = ~~this.highWaterMark,
            this.needDrain = !1,
            this.ending = !1,
            this.ended = !1,
            this.finished = !1;
            var n = t.decodeStrings === !1;
            this.decodeStrings = !n,
            this.defaultEncoding = t.defaultEncoding || "utf8",
            this.length = 0,
            this.writing = !1,
            this.corked = 0,
            this.sync = !0,
            this.bufferProcessing = !1,
            this.onwrite = function(a) {
                nd(e, a)
            }
            ,
            this.writecb = null,
            this.writelen = 0,
            this.bufferedRequest = null,
            this.lastBufferedRequest = null,
            this.pendingcb = 0,
            this.prefinished = !1,
            this.errorEmitted = !1,
            this.bufferedRequestCount = 0,
            this.corkedRequestsFree = new Ao(this)
        }
        ba.prototype.getBuffer = function() {
            for (var e = this.bufferedRequest, r = []; e; )
                r.push(e),
                e = e.next;
            return r
        }
        ;
        function nt(t) {
            if (!(this instanceof nt) && !(this instanceof Bt))
                return new nt(t);
            this._writableState = new ba(t,this),
            this.writable = !0,
            t && (typeof t.write == "function" && (this._write = t.write),
            typeof t.writev == "function" && (this._writev = t.writev)),
            ae.call(this)
        }
        nt.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }
        ;
        function Zc(t, e) {
            var r = new Error("write after end");
            t.emit("error", r),
            Rt(e, r)
        }
        function Qc(t, e, r, i) {
            var n = !0
              , a = !1;
            return r === null ? a = new TypeError("May not write null values to stream") : !k.isBuffer(r) && typeof r != "string" && r !== void 0 && !e.objectMode && (a = new TypeError("Invalid non-string/buffer chunk")),
            a && (t.emit("error", a),
            Rt(i, a),
            n = !1),
            n
        }
        nt.prototype.write = function(t, e, r) {
            var i = this._writableState
              , n = !1;
            return typeof e == "function" && (r = e,
            e = null),
            k.isBuffer(t) ? e = "buffer" : e || (e = i.defaultEncoding),
            typeof r != "function" && (r = Jc),
            i.ended ? Zc(this, r) : Qc(this, i, t, r) && (i.pendingcb++,
            n = td(this, i, t, e, r)),
            n
        }
        ,
        nt.prototype.cork = function() {
            var t = this._writableState;
            t.corked++
        }
        ,
        nt.prototype.uncork = function() {
            var t = this._writableState;
            t.corked && (t.corked--,
            !t.writing && !t.corked && !t.finished && !t.bufferProcessing && t.bufferedRequest && wo(this, t))
        }
        ,
        nt.prototype.setDefaultEncoding = function(e) {
            if (typeof e == "string" && (e = e.toLowerCase()),
            !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                throw new TypeError("Unknown encoding: " + e);
            return this._writableState.defaultEncoding = e,
            this
        }
        ;
        function ed(t, e, r) {
            return !t.objectMode && t.decodeStrings !== !1 && typeof e == "string" && (e = k.from(e, r)),
            e
        }
        function td(t, e, r, i, n) {
            r = ed(e, r, i),
            k.isBuffer(r) && (i = "buffer");
            var a = e.objectMode ? 1 : r.length;
            e.length += a;
            var f = e.length < e.highWaterMark;
            if (f || (e.needDrain = !0),
            e.writing || e.corked) {
                var h = e.lastBufferedRequest;
                e.lastBufferedRequest = new Xc(r,i,n),
                h ? h.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest,
                e.bufferedRequestCount += 1
            } else
                ga(t, e, !1, a, r, i, n);
            return f
        }
        function ga(t, e, r, i, n, a, f) {
            e.writelen = i,
            e.writecb = f,
            e.writing = !0,
            e.sync = !0,
            r ? t._writev(n, e.onwrite) : t._write(n, a, e.onwrite),
            e.sync = !1
        }
        function rd(t, e, r, i, n) {
            --e.pendingcb,
            r ? Rt(n, i) : n(i),
            t._writableState.errorEmitted = !0,
            t.emit("error", i)
        }
        function id(t) {
            t.writing = !1,
            t.writecb = null,
            t.length -= t.writelen,
            t.writelen = 0
        }
        function nd(t, e) {
            var r = t._writableState
              , i = r.sync
              , n = r.writecb;
            if (id(r),
            e)
                rd(t, r, i, e, n);
            else {
                var a = Mo(r);
                !a && !r.corked && !r.bufferProcessing && r.bufferedRequest && wo(t, r),
                i ? Rt(mo, t, r, a, n) : mo(t, r, a, n)
            }
        }
        function mo(t, e, r, i) {
            r || ad(t, e),
            e.pendingcb--,
            i(),
            Eo(t, e)
        }
        function ad(t, e) {
            e.length === 0 && e.needDrain && (e.needDrain = !1,
            t.emit("drain"))
        }
        function wo(t, e) {
            e.bufferProcessing = !0;
            var r = e.bufferedRequest;
            if (t._writev && r && r.next) {
                var i = e.bufferedRequestCount
                  , n = new Array(i)
                  , a = e.corkedRequestsFree;
                a.entry = r;
                for (var f = 0; r; )
                    n[f] = r,
                    r = r.next,
                    f += 1;
                ga(t, e, !0, e.length, n, "", a.finish),
                e.pendingcb++,
                e.lastBufferedRequest = null,
                a.next ? (e.corkedRequestsFree = a.next,
                a.next = null) : e.corkedRequestsFree = new Ao(e)
            } else {
                for (; r; ) {
                    var h = r.chunk
                      , c = r.encoding
                      , l = r.callback
                      , v = e.objectMode ? 1 : h.length;
                    if (ga(t, e, !1, v, h, c, l),
                    r = r.next,
                    e.writing)
                        break
                }
                r === null && (e.lastBufferedRequest = null)
            }
            e.bufferedRequestCount = 0,
            e.bufferedRequest = r,
            e.bufferProcessing = !1
        }
        nt.prototype._write = function(t, e, r) {
            r(new Error("not implemented"))
        }
        ,
        nt.prototype._writev = null,
        nt.prototype.end = function(t, e, r) {
            var i = this._writableState;
            typeof t == "function" ? (r = t,
            t = null,
            e = null) : typeof e == "function" && (r = e,
            e = null),
            t != null && this.write(t, e),
            i.corked && (i.corked = 1,
            this.uncork()),
            !i.ending && !i.finished && fd(this, i, r)
        }
        ;
        function Mo(t) {
            return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing
        }
        function So(t, e) {
            e.prefinished || (e.prefinished = !0,
            t.emit("prefinish"))
        }
        function Eo(t, e) {
            var r = Mo(e);
            return r && (e.pendingcb === 0 ? (So(t, e),
            e.finished = !0,
            t.emit("finish")) : So(t, e)),
            r
        }
        function fd(t, e, r) {
            e.ending = !0,
            Eo(t, e),
            r && (e.finished ? Rt(r) : t.once("finish", r)),
            e.ended = !0,
            t.writable = !1
        }
        function Ao(t) {
            var e = this;
            this.next = null,
            this.entry = null,
            this.finish = function(r) {
                var i = e.entry;
                for (e.entry = null; i; ) {
                    var n = i.callback;
                    t.pendingcb--,
                    n(r),
                    i = i.next
                }
                t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
            }
        }
        cr(Bt, me);
        for (var Ro = Object.keys(nt.prototype), ya = 0; ya < Ro.length; ya++) {
            var _a = Ro[ya];
            Bt.prototype[_a] || (Bt.prototype[_a] = nt.prototype[_a])
        }
        function Bt(t) {
            if (!(this instanceof Bt))
                return new Bt(t);
            me.call(this, t),
            nt.call(this, t),
            t && t.readable === !1 && (this.readable = !1),
            t && t.writable === !1 && (this.writable = !1),
            this.allowHalfOpen = !0,
            t && t.allowHalfOpen === !1 && (this.allowHalfOpen = !1),
            this.once("end", od)
        }
        function od() {
            this.allowHalfOpen || this._writableState.ended || Rt(sd, this)
        }
        function sd(t) {
            t.end()
        }
        cr(xt, Bt);
        function hd(t) {
            this.afterTransform = function(e, r) {
                return ud(t, e, r)
            }
            ,
            this.needTransform = !1,
            this.transforming = !1,
            this.writecb = null,
            this.writechunk = null,
            this.writeencoding = null
        }
        function ud(t, e, r) {
            var i = t._transformState;
            i.transforming = !1;
            var n = i.writecb;
            if (!n)
                return t.emit("error", new Error("no writecb in Transform class"));
            i.writechunk = null,
            i.writecb = null,
            r != null && t.push(r),
            n(e);
            var a = t._readableState;
            a.reading = !1,
            (a.needReadable || a.length < a.highWaterMark) && t._read(a.highWaterMark)
        }
        function xt(t) {
            if (!(this instanceof xt))
                return new xt(t);
            Bt.call(this, t),
            this._transformState = new hd(this);
            var e = this;
            this._readableState.needReadable = !0,
            this._readableState.sync = !1,
            t && (typeof t.transform == "function" && (this._transform = t.transform),
            typeof t.flush == "function" && (this._flush = t.flush)),
            this.once("prefinish", function() {
                typeof this._flush == "function" ? this._flush(function(r) {
                    Bo(e, r)
                }) : Bo(e)
            })
        }
        xt.prototype.push = function(t, e) {
            return this._transformState.needTransform = !1,
            Bt.prototype.push.call(this, t, e)
        }
        ,
        xt.prototype._transform = function(t, e, r) {
            throw new Error("Not implemented")
        }
        ,
        xt.prototype._write = function(t, e, r) {
            var i = this._transformState;
            if (i.writecb = r,
            i.writechunk = t,
            i.writeencoding = e,
            !i.transforming) {
                var n = this._readableState;
                (i.needTransform || n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
            }
        }
        ,
        xt.prototype._read = function(t) {
            var e = this._transformState;
            e.writechunk !== null && e.writecb && !e.transforming ? (e.transforming = !0,
            this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
        }
        ;
        function Bo(t, e) {
            if (e)
                return t.emit("error", e);
            var r = t._writableState
              , i = t._transformState;
            if (r.length)
                throw new Error("Calling transform done when ws.length != 0");
            if (i.transforming)
                throw new Error("Calling transform done when still transforming");
            return t.push(null)
        }
        cr(Xr, xt);
        function Xr(t) {
            if (!(this instanceof Xr))
                return new Xr(t);
            xt.call(this, t)
        }
        Xr.prototype._transform = function(t, e, r) {
            r(null, t)
        }
        ,
        cr(Nt, ae),
        Nt.Readable = me,
        Nt.Writable = nt,
        Nt.Duplex = Bt,
        Nt.Transform = xt,
        Nt.PassThrough = Xr,
        Nt.Stream = Nt;
        function Nt() {
            ae.call(this)
        }
        Nt.prototype.pipe = function(t, e) {
            var r = this;
            function i(v) {
                t.writable && t.write(v) === !1 && r.pause && r.pause()
            }
            r.on("data", i);
            function n() {
                r.readable && r.resume && r.resume()
            }
            t.on("drain", n),
            !t._isStdio && (!e || e.end !== !1) && (r.on("end", f),
            r.on("close", h));
            var a = !1;
            function f() {
                a || (a = !0,
                t.end())
            }
            function h() {
                a || (a = !0,
                typeof t.destroy == "function" && t.destroy())
            }
            function c(v) {
                if (l(),
                ae.listenerCount(this, "error") === 0)
                    throw v
            }
            r.on("error", c),
            t.on("error", c);
            function l() {
                r.removeListener("data", i),
                t.removeListener("drain", n),
                r.removeListener("end", f),
                r.removeListener("close", h),
                r.removeListener("error", c),
                t.removeListener("error", c),
                r.removeListener("end", l),
                r.removeListener("close", l),
                t.removeListener("close", l)
            }
            return r.on("end", l),
            r.on("close", l),
            t.on("close", l),
            t.emit("pipe", r),
            t
        }
        ;
        var cd = Object.freeze({
            __proto__: null,
            Duplex: Bt,
            PassThrough: Xr,
            Readable: me,
            Stream: Nt,
            Transform: xt,
            Writable: nt,
            default: Nt
        }), dd = q(cd), ma = q(kc), wa;
        typeof Object.create == "function" ? wa = function(e, r) {
            e.super_ = r,
            e.prototype = Object.create(r.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }
        : wa = function(e, r) {
            e.super_ = r;
            var i = function() {};
            i.prototype = r.prototype,
            e.prototype = new i,
            e.prototype.constructor = e
        }
        ;
        var ld = wa
          , pd = Object.freeze({
            __proto__: null,
            default: ld
        })
          , we = q(pd)
          , Io = ge.Buffer
          , To = dd.Transform
          , vd = ma.StringDecoder
          , bd = we;
        function qt(t) {
            To.call(this),
            this.hashMode = typeof t == "string",
            this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest,
            this._final && (this.__final = this._final,
            this._final = null),
            this._decoder = null,
            this._encoding = null
        }
        bd(qt, To),
        qt.prototype.update = function(t, e, r) {
            typeof t == "string" && (t = Io.from(t, e));
            var i = this._update(t);
            return this.hashMode ? this : (r && (i = this._toString(i, r)),
            i)
        }
        ,
        qt.prototype.setAutoPadding = function() {}
        ,
        qt.prototype.getAuthTag = function() {
            throw new Error("trying to get auth tag in unsupported state")
        }
        ,
        qt.prototype.setAuthTag = function() {
            throw new Error("trying to set auth tag in unsupported state")
        }
        ,
        qt.prototype.setAAD = function() {
            throw new Error("trying to set aad in unsupported state")
        }
        ,
        qt.prototype._transform = function(t, e, r) {
            var i;
            try {
                this.hashMode ? this._update(t) : this.push(this._update(t))
            } catch (n) {
                i = n
            } finally {
                r(i)
            }
        }
        ,
        qt.prototype._flush = function(t) {
            var e;
            try {
                this.push(this.__final())
            } catch (r) {
                e = r
            }
            t(e)
        }
        ,
        qt.prototype._finalOrDigest = function(t) {
            var e = this.__final() || Io.alloc(0);
            return t && (e = this._toString(e, t, !0)),
            e
        }
        ,
        qt.prototype._toString = function(t, e, r) {
            if (this._decoder || (this._decoder = new vd(e),
            this._encoding = e),
            this._encoding !== e)
                throw new Error("can't switch encodings");
            var i = this._decoder.write(t);
            return r && (i += this._decoder.end()),
            i
        }
        ;
        var ln = qt
          , Zr = ge.Buffer
          , gd = Zr.alloc(16, 0);
        function yd(t) {
            return [t.readUInt32BE(0), t.readUInt32BE(4), t.readUInt32BE(8), t.readUInt32BE(12)]
        }
        function Po(t) {
            var e = Zr.allocUnsafe(16);
            return e.writeUInt32BE(t[0] >>> 0, 0),
            e.writeUInt32BE(t[1] >>> 0, 4),
            e.writeUInt32BE(t[2] >>> 0, 8),
            e.writeUInt32BE(t[3] >>> 0, 12),
            e
        }
        function Bi(t) {
            this.h = t,
            this.state = Zr.alloc(16, 0),
            this.cache = Zr.allocUnsafe(0)
        }
        Bi.prototype.ghash = function(t) {
            for (var e = -1; ++e < t.length; )
                this.state[e] ^= t[e];
            this._multiply()
        }
        ,
        Bi.prototype._multiply = function() {
            for (var t = yd(this.h), e = [0, 0, 0, 0], r, i, n, a = -1; ++a < 128; ) {
                for (i = (this.state[~~(a / 8)] & 1 << 7 - a % 8) !== 0,
                i && (e[0] ^= t[0],
                e[1] ^= t[1],
                e[2] ^= t[2],
                e[3] ^= t[3]),
                n = (t[3] & 1) !== 0,
                r = 3; r > 0; r--)
                    t[r] = t[r] >>> 1 | (t[r - 1] & 1) << 31;
                t[0] = t[0] >>> 1,
                n && (t[0] = t[0] ^ 225 << 24)
            }
            this.state = Po(e)
        }
        ,
        Bi.prototype.update = function(t) {
            this.cache = Zr.concat([this.cache, t]);
            for (var e; this.cache.length >= 16; )
                e = this.cache.slice(0, 16),
                this.cache = this.cache.slice(16),
                this.ghash(e)
        }
        ,
        Bi.prototype.final = function(t, e) {
            return this.cache.length && this.ghash(Zr.concat([this.cache, gd], 16)),
            this.ghash(Po([0, t, 0, e])),
            this.state
        }
        ;
        var _d = Bi
          , md = mi
          , wt = ge.Buffer
          , Lo = ln
          , wd = we
          , ko = _d
          , Md = yi
          , Sd = Hf;
        function Ed(t, e) {
            var r = 0;
            t.length !== e.length && r++;
            for (var i = Math.min(t.length, e.length), n = 0; n < i; ++n)
                r += t[n] ^ e[n];
            return r
        }
        function Ad(t, e, r) {
            if (e.length === 12)
                return t._finID = wt.concat([e, wt.from([0, 0, 0, 1])]),
                wt.concat([e, wt.from([0, 0, 0, 2])]);
            var i = new ko(r)
              , n = e.length
              , a = n % 16;
            i.update(e),
            a && (a = 16 - a,
            i.update(wt.alloc(a, 0))),
            i.update(wt.alloc(8, 0));
            var f = n * 8
              , h = wt.alloc(8);
            h.writeUIntBE(f, 0, 8),
            i.update(h),
            t._finID = i.state;
            var c = wt.from(t._finID);
            return Sd(c),
            c
        }
        function Tr(t, e, r, i) {
            Lo.call(this);
            var n = wt.alloc(4, 0);
            this._cipher = new md.AES(e);
            var a = this._cipher.encryptBlock(n);
            this._ghash = new ko(a),
            r = Ad(this, r, a),
            this._prev = wt.from(r),
            this._cache = wt.allocUnsafe(0),
            this._secCache = wt.allocUnsafe(0),
            this._decrypt = i,
            this._alen = 0,
            this._len = 0,
            this._mode = t,
            this._authTag = null,
            this._called = !1
        }
        wd(Tr, Lo),
        Tr.prototype._update = function(t) {
            if (!this._called && this._alen) {
                var e = 16 - this._alen % 16;
                e < 16 && (e = wt.alloc(e, 0),
                this._ghash.update(e))
            }
            this._called = !0;
            var r = this._mode.encrypt(this, t);
            return this._decrypt ? this._ghash.update(t) : this._ghash.update(r),
            this._len += t.length,
            r
        }
        ,
        Tr.prototype._final = function() {
            if (this._decrypt && !this._authTag)
                throw new Error("Unsupported state or unable to authenticate data");
            var t = Md(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID));
            if (this._decrypt && Ed(t, this._authTag))
                throw new Error("Unsupported state or unable to authenticate data");
            this._authTag = t,
            this._cipher.scrub()
        }
        ,
        Tr.prototype.getAuthTag = function() {
            if (this._decrypt || !wt.isBuffer(this._authTag))
                throw new Error("Attempting to get auth tag in unsupported state");
            return this._authTag
        }
        ,
        Tr.prototype.setAuthTag = function(e) {
            if (!this._decrypt)
                throw new Error("Attempting to set auth tag in unsupported state");
            this._authTag = e
        }
        ,
        Tr.prototype.setAAD = function(e) {
            if (this._called)
                throw new Error("Attempting to set AAD in unsupported state");
            this._ghash.update(e),
            this._alen += e.length
        }
        ;
        var Co = Tr
          , Rd = mi
          , Ma = ge.Buffer
          , $o = ln
          , Bd = we;
        function pn(t, e, r, i) {
            $o.call(this),
            this._cipher = new Rd.AES(e),
            this._prev = Ma.from(r),
            this._cache = Ma.allocUnsafe(0),
            this._secCache = Ma.allocUnsafe(0),
            this._decrypt = i,
            this._mode = t
        }
        Bd(pn, $o),
        pn.prototype._update = function(t) {
            return this._mode.encrypt(this, t, this._decrypt)
        }
        ,
        pn.prototype._final = function() {
            this._cipher.scrub()
        }
        ;
        var Oo = pn, Sa = {
            exports: {}
        }, Do = q(Fu), xo = Do.EventEmitter, No = q(Rc), Ea, qo;
        function Id() {
            if (qo)
                return Ea;
            qo = 1;
            function t(I, P) {
                var C = Object.keys(I);
                if (Object.getOwnPropertySymbols) {
                    var L = Object.getOwnPropertySymbols(I);
                    P && (L = L.filter(function(x) {
                        return Object.getOwnPropertyDescriptor(I, x).enumerable
                    })),
                    C.push.apply(C, L)
                }
                return C
            }
            function e(I) {
                for (var P = 1; P < arguments.length; P++) {
                    var C = arguments[P] != null ? arguments[P] : {};
                    P % 2 ? t(Object(C), !0).forEach(function(L) {
                        r(I, L, C[L])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(C)) : t(Object(C)).forEach(function(L) {
                        Object.defineProperty(I, L, Object.getOwnPropertyDescriptor(C, L))
                    })
                }
                return I
            }
            function r(I, P, C) {
                return P = f(P),
                P in I ? Object.defineProperty(I, P, {
                    value: C,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : I[P] = C,
                I
            }
            function i(I, P) {
                if (!(I instanceof P))
                    throw new TypeError("Cannot call a class as a function")
            }
            function n(I, P) {
                for (var C = 0; C < P.length; C++) {
                    var L = P[C];
                    L.enumerable = L.enumerable || !1,
                    L.configurable = !0,
                    "value"in L && (L.writable = !0),
                    Object.defineProperty(I, f(L.key), L)
                }
            }
            function a(I, P, C) {
                return P && n(I.prototype, P),
                C && n(I, C),
                Object.defineProperty(I, "prototype", {
                    writable: !1
                }),
                I
            }
            function f(I) {
                var P = h(I, "string");
                return typeof P == "symbol" ? P : String(P)
            }
            function h(I, P) {
                if (typeof I != "object" || I === null)
                    return I;
                var C = I[Symbol.toPrimitive];
                if (C !== void 0) {
                    var L = C.call(I, P || "default");
                    if (typeof L != "object")
                        return L;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return (P === "string" ? String : Number)(I)
            }
            var c = Kr
              , l = c.Buffer
              , v = No
              , y = v.inspect
              , E = y && y.custom || "inspect";
            function T(I, P, C) {
                l.prototype.copy.call(I, P, C)
            }
            return Ea = function() {
                function I() {
                    i(this, I),
                    this.head = null,
                    this.tail = null,
                    this.length = 0
                }
                return a(I, [{
                    key: "push",
                    value: function(C) {
                        var L = {
                            data: C,
                            next: null
                        };
                        this.length > 0 ? this.tail.next = L : this.head = L,
                        this.tail = L,
                        ++this.length
                    }
                }, {
                    key: "unshift",
                    value: function(C) {
                        var L = {
                            data: C,
                            next: this.head
                        };
                        this.length === 0 && (this.tail = L),
                        this.head = L,
                        ++this.length
                    }
                }, {
                    key: "shift",
                    value: function() {
                        if (this.length !== 0) {
                            var C = this.head.data;
                            return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next,
                            --this.length,
                            C
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.head = this.tail = null,
                        this.length = 0
                    }
                }, {
                    key: "join",
                    value: function(C) {
                        if (this.length === 0)
                            return "";
                        for (var L = this.head, x = "" + L.data; L = L.next; )
                            x += C + L.data;
                        return x
                    }
                }, {
                    key: "concat",
                    value: function(C) {
                        if (this.length === 0)
                            return l.alloc(0);
                        for (var L = l.allocUnsafe(C >>> 0), x = this.head, Y = 0; x; )
                            T(x.data, L, Y),
                            Y += x.data.length,
                            x = x.next;
                        return L
                    }
                }, {
                    key: "consume",
                    value: function(C, L) {
                        var x;
                        return C < this.head.data.length ? (x = this.head.data.slice(0, C),
                        this.head.data = this.head.data.slice(C)) : C === this.head.data.length ? x = this.shift() : x = L ? this._getString(C) : this._getBuffer(C),
                        x
                    }
                }, {
                    key: "first",
                    value: function() {
                        return this.head.data
                    }
                }, {
                    key: "_getString",
                    value: function(C) {
                        var L = this.head
                          , x = 1
                          , Y = L.data;
                        for (C -= Y.length; L = L.next; ) {
                            var F = L.data
                              , V = C > F.length ? F.length : C;
                            if (V === F.length ? Y += F : Y += F.slice(0, C),
                            C -= V,
                            C === 0) {
                                V === F.length ? (++x,
                                L.next ? this.head = L.next : this.head = this.tail = null) : (this.head = L,
                                L.data = F.slice(V));
                                break
                            }
                            ++x
                        }
                        return this.length -= x,
                        Y
                    }
                }, {
                    key: "_getBuffer",
                    value: function(C) {
                        var L = l.allocUnsafe(C)
                          , x = this.head
                          , Y = 1;
                        for (x.data.copy(L),
                        C -= x.data.length; x = x.next; ) {
                            var F = x.data
                              , V = C > F.length ? F.length : C;
                            if (F.copy(L, L.length - C, 0, V),
                            C -= V,
                            C === 0) {
                                V === F.length ? (++Y,
                                x.next ? this.head = x.next : this.head = this.tail = null) : (this.head = x,
                                x.data = F.slice(V));
                                break
                            }
                            ++Y
                        }
                        return this.length -= Y,
                        L
                    }
                }, {
                    key: E,
                    value: function(C, L) {
                        return y(this, e(e({}, L), {}, {
                            depth: 0,
                            customInspect: !1
                        }))
                    }
                }]),
                I
            }(),
            Ea
        }
        function Td(t, e) {
            var r = this
              , i = this._readableState && this._readableState.destroyed
              , n = this._writableState && this._writableState.destroyed;
            return i || n ? (e ? e(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
            se.nextTick(Aa, this, t)) : se.nextTick(Aa, this, t)),
            this) : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(t || null, function(a) {
                !e && a ? r._writableState ? r._writableState.errorEmitted ? se.nextTick(vn, r) : (r._writableState.errorEmitted = !0,
                se.nextTick(zo, r, a)) : se.nextTick(zo, r, a) : e ? (se.nextTick(vn, r),
                e(a)) : se.nextTick(vn, r)
            }),
            this)
        }
        function zo(t, e) {
            Aa(t, e),
            vn(t)
        }
        function vn(t) {
            t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close")
        }
        function Pd() {
            this._readableState && (this._readableState.destroyed = !1,
            this._readableState.reading = !1,
            this._readableState.ended = !1,
            this._readableState.endEmitted = !1),
            this._writableState && (this._writableState.destroyed = !1,
            this._writableState.ended = !1,
            this._writableState.ending = !1,
            this._writableState.finalCalled = !1,
            this._writableState.prefinished = !1,
            this._writableState.finished = !1,
            this._writableState.errorEmitted = !1)
        }
        function Aa(t, e) {
            t.emit("error", e)
        }
        function Ld(t, e) {
            var r = t._readableState
              , i = t._writableState;
            r && r.autoDestroy || i && i.autoDestroy ? t.destroy(e) : t.emit("error", e)
        }
        var Uo = {
            destroy: Td,
            undestroy: Pd,
            errorOrDestroy: Ld
        }
          , Pr = {};
        function kd(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            t.__proto__ = e
        }
        var Fo = {};
        function Ct(t, e, r) {
            r || (r = Error);
            function i(a, f, h) {
                return typeof e == "string" ? e : e(a, f, h)
            }
            var n = function(a) {
                kd(f, a);
                function f(h, c, l) {
                    return a.call(this, i(h, c, l)) || this
                }
                return f
            }(r);
            n.prototype.name = r.name,
            n.prototype.code = t,
            Fo[t] = n
        }
        function Ho(t, e) {
            if (Array.isArray(t)) {
                var r = t.length;
                return t = t.map(function(i) {
                    return String(i)
                }),
                r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : r === 2 ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0])
            } else
                return "of ".concat(e, " ").concat(String(t))
        }
        function Cd(t, e, r) {
            return t.substr(!r || r < 0 ? 0 : +r, e.length) === e
        }
        function $d(t, e, r) {
            return (r === void 0 || r > t.length) && (r = t.length),
            t.substring(r - e.length, r) === e
        }
        function Od(t, e, r) {
            return typeof r != "number" && (r = 0),
            r + e.length > t.length ? !1 : t.indexOf(e, r) !== -1
        }
        Ct("ERR_INVALID_OPT_VALUE", function(t, e) {
            return 'The value "' + e + '" is invalid for option "' + t + '"'
        }, TypeError),
        Ct("ERR_INVALID_ARG_TYPE", function(t, e, r) {
            var i;
            typeof e == "string" && Cd(e, "not ") ? (i = "must not be",
            e = e.replace(/^not /, "")) : i = "must be";
            var n;
            if ($d(t, " argument"))
                n = "The ".concat(t, " ").concat(i, " ").concat(Ho(e, "type"));
            else {
                var a = Od(t, ".") ? "property" : "argument";
                n = 'The "'.concat(t, '" ').concat(a, " ").concat(i, " ").concat(Ho(e, "type"))
            }
            return n += ". Received type ".concat(typeof r),
            n
        }, TypeError),
        Ct("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        Ct("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
            return "The " + t + " method is not implemented"
        }),
        Ct("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        Ct("ERR_STREAM_DESTROYED", function(t) {
            return "Cannot call " + t + " after a stream was destroyed"
        }),
        Ct("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        Ct("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        Ct("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        Ct("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
        Ct("ERR_UNKNOWN_ENCODING", function(t) {
            return "Unknown encoding: " + t
        }, TypeError),
        Ct("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
        Pr.codes = Fo;
        var Dd = Pr.codes.ERR_INVALID_OPT_VALUE;
        function xd(t, e, r) {
            return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null
        }
        function Nd(t, e, r, i) {
            var n = xd(e, i, r);
            if (n != null) {
                if (!(isFinite(n) && Math.floor(n) === n) || n < 0) {
                    var a = i ? r : "highWaterMark";
                    throw new Dd(a,n)
                }
                return Math.floor(n)
            }
            return t.objectMode ? 16 : 16 * 1024
        }
        var jo = {
            getHighWaterMark: Nd
        }
          , qd = zd;
        function zd(t, e) {
            if (Ra("noDeprecation"))
                return t;
            var r = !1;
            function i() {
                if (!r) {
                    if (Ra("throwDeprecation"))
                        throw new Error(e);
                    Ra("traceDeprecation") ? console.trace(e) : console.warn(e),
                    r = !0
                }
                return t.apply(this, arguments)
            }
            return i
        }
        function Ra(t) {
            try {
                if (!O.localStorage)
                    return !1
            } catch {
                return !1
            }
            var e = O.localStorage[t];
            return e == null ? !1 : String(e).toLowerCase() === "true"
        }
        var Ba, Wo;
        function Yo() {
            if (Wo)
                return Ba;
            Wo = 1,
            Ba = te;
            function t(A) {
                var R = this;
                this.next = null,
                this.entry = null,
                this.finish = function() {
                    re(R, A)
                }
            }
            var e;
            te.WritableState = Q;
            var r = {
                deprecate: qd
            }
              , i = xo
              , n = Kr.Buffer
              , a = (typeof O < "u" ? O : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {}
            ;
            function f(A) {
                return n.from(A)
            }
            function h(A) {
                return n.isBuffer(A) || A instanceof a
            }
            var c = Uo
              , l = jo
              , v = l.getHighWaterMark
              , y = Pr.codes
              , E = y.ERR_INVALID_ARG_TYPE
              , T = y.ERR_METHOD_NOT_IMPLEMENTED
              , I = y.ERR_MULTIPLE_CALLBACK
              , P = y.ERR_STREAM_CANNOT_PIPE
              , C = y.ERR_STREAM_DESTROYED
              , L = y.ERR_STREAM_NULL_VALUES
              , x = y.ERR_STREAM_WRITE_AFTER_END
              , Y = y.ERR_UNKNOWN_ENCODING
              , F = c.errorOrDestroy;
            we(te, i);
            function V() {}
            function Q(A, R, z) {
                e = e || Qr(),
                A = A || {},
                typeof z != "boolean" && (z = R instanceof e),
                this.objectMode = !!A.objectMode,
                z && (this.objectMode = this.objectMode || !!A.writableObjectMode),
                this.highWaterMark = v(this, A, "writableHighWaterMark", z),
                this.finalCalled = !1,
                this.needDrain = !1,
                this.ending = !1,
                this.ended = !1,
                this.finished = !1,
                this.destroyed = !1;
                var j = A.decodeStrings === !1;
                this.decodeStrings = !j,
                this.defaultEncoding = A.defaultEncoding || "utf8",
                this.length = 0,
                this.writing = !1,
                this.corked = 0,
                this.sync = !0,
                this.bufferProcessing = !1,
                this.onwrite = function(Z) {
                    m(R, Z)
                }
                ,
                this.writecb = null,
                this.writelen = 0,
                this.bufferedRequest = null,
                this.lastBufferedRequest = null,
                this.pendingcb = 0,
                this.prefinished = !1,
                this.errorEmitted = !1,
                this.emitClose = A.emitClose !== !1,
                this.autoDestroy = !!A.autoDestroy,
                this.bufferedRequestCount = 0,
                this.corkedRequestsFree = new t(this)
            }
            Q.prototype.getBuffer = function() {
                for (var R = this.bufferedRequest, z = []; R; )
                    z.push(R),
                    R = R.next;
                return z
            }
            ,
            function() {
                try {
                    Object.defineProperty(Q.prototype, "buffer", {
                        get: r.deprecate(function() {
                            return this.getBuffer()
                        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                    })
                } catch {}
            }();
            var oe;
            typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (oe = Function.prototype[Symbol.hasInstance],
            Object.defineProperty(te, Symbol.hasInstance, {
                value: function(R) {
                    return oe.call(this, R) ? !0 : this !== te ? !1 : R && R._writableState instanceof Q
                }
            })) : oe = function(R) {
                return R instanceof this
            }
            ;
            function te(A) {
                e = e || Qr();
                var R = this instanceof e;
                if (!R && !oe.call(te, this))
                    return new te(A);
                this._writableState = new Q(A,this,R),
                this.writable = !0,
                A && (typeof A.write == "function" && (this._write = A.write),
                typeof A.writev == "function" && (this._writev = A.writev),
                typeof A.destroy == "function" && (this._destroy = A.destroy),
                typeof A.final == "function" && (this._final = A.final)),
                i.call(this)
            }
            te.prototype.pipe = function() {
                F(this, new P)
            }
            ;
            function W(A, R) {
                var z = new x;
                F(A, z),
                se.nextTick(R, z)
            }
            function Ae(A, R, z, j) {
                var Z;
                return z === null ? Z = new L : typeof z != "string" && !R.objectMode && (Z = new E("chunk",["string", "Buffer"],z)),
                Z ? (F(A, Z),
                se.nextTick(j, Z),
                !1) : !0
            }
            te.prototype.write = function(A, R, z) {
                var j = this._writableState
                  , Z = !1
                  , w = !j.objectMode && h(A);
                return w && !n.isBuffer(A) && (A = f(A)),
                typeof R == "function" && (z = R,
                R = null),
                w ? R = "buffer" : R || (R = j.defaultEncoding),
                typeof z != "function" && (z = V),
                j.ending ? W(this, z) : (w || Ae(this, j, A, z)) && (j.pendingcb++,
                Z = o(this, j, w, A, R, z)),
                Z
            }
            ,
            te.prototype.cork = function() {
                this._writableState.corked++
            }
            ,
            te.prototype.uncork = function() {
                var A = this._writableState;
                A.corked && (A.corked--,
                !A.writing && !A.corked && !A.bufferProcessing && A.bufferedRequest && b(this, A))
            }
            ,
            te.prototype.setDefaultEncoding = function(R) {
                if (typeof R == "string" && (R = R.toLowerCase()),
                !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((R + "").toLowerCase()) > -1))
                    throw new Y(R);
                return this._writableState.defaultEncoding = R,
                this
            }
            ,
            Object.defineProperty(te.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            });
            function M(A, R, z) {
                return !A.objectMode && A.decodeStrings !== !1 && typeof R == "string" && (R = n.from(R, z)),
                R
            }
            Object.defineProperty(te.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            });
            function o(A, R, z, j, Z, w) {
                if (!z) {
                    var g = M(R, j, Z);
                    j !== g && (z = !0,
                    Z = "buffer",
                    j = g)
                }
                var $ = R.objectMode ? 1 : j.length;
                R.length += $;
                var J = R.length < R.highWaterMark;
                if (J || (R.needDrain = !0),
                R.writing || R.corked) {
                    var ne = R.lastBufferedRequest;
                    R.lastBufferedRequest = {
                        chunk: j,
                        encoding: Z,
                        isBuf: z,
                        callback: w,
                        next: null
                    },
                    ne ? ne.next = R.lastBufferedRequest : R.bufferedRequest = R.lastBufferedRequest,
                    R.bufferedRequestCount += 1
                } else
                    u(A, R, !1, $, j, Z, w);
                return J
            }
            function u(A, R, z, j, Z, w, g) {
                R.writelen = j,
                R.writecb = g,
                R.writing = !0,
                R.sync = !0,
                R.destroyed ? R.onwrite(new C("write")) : z ? A._writev(Z, R.onwrite) : A._write(Z, w, R.onwrite),
                R.sync = !1
            }
            function d(A, R, z, j, Z) {
                --R.pendingcb,
                z ? (se.nextTick(Z, j),
                se.nextTick(K, A, R),
                A._writableState.errorEmitted = !0,
                F(A, j)) : (Z(j),
                A._writableState.errorEmitted = !0,
                F(A, j),
                K(A, R))
            }
            function p(A) {
                A.writing = !1,
                A.writecb = null,
                A.length -= A.writelen,
                A.writelen = 0
            }
            function m(A, R) {
                var z = A._writableState
                  , j = z.sync
                  , Z = z.writecb;
                if (typeof Z != "function")
                    throw new I;
                if (p(z),
                R)
                    d(A, z, j, R, Z);
                else {
                    var w = s(z) || A.destroyed;
                    !w && !z.corked && !z.bufferProcessing && z.bufferedRequest && b(A, z),
                    j ? se.nextTick(S, A, z, w, Z) : S(A, z, w, Z)
                }
            }
            function S(A, R, z, j) {
                z || B(A, R),
                R.pendingcb--,
                j(),
                K(A, R)
            }
            function B(A, R) {
                R.length === 0 && R.needDrain && (R.needDrain = !1,
                A.emit("drain"))
            }
            function b(A, R) {
                R.bufferProcessing = !0;
                var z = R.bufferedRequest;
                if (A._writev && z && z.next) {
                    var j = R.bufferedRequestCount
                      , Z = new Array(j)
                      , w = R.corkedRequestsFree;
                    w.entry = z;
                    for (var g = 0, $ = !0; z; )
                        Z[g] = z,
                        z.isBuf || ($ = !1),
                        z = z.next,
                        g += 1;
                    Z.allBuffers = $,
                    u(A, R, !0, R.length, Z, "", w.finish),
                    R.pendingcb++,
                    R.lastBufferedRequest = null,
                    w.next ? (R.corkedRequestsFree = w.next,
                    w.next = null) : R.corkedRequestsFree = new t(R),
                    R.bufferedRequestCount = 0
                } else {
                    for (; z; ) {
                        var J = z.chunk
                          , ne = z.encoding
                          , ee = z.callback
                          , ue = R.objectMode ? 1 : J.length;
                        if (u(A, R, !1, ue, J, ne, ee),
                        z = z.next,
                        R.bufferedRequestCount--,
                        R.writing)
                            break
                    }
                    z === null && (R.lastBufferedRequest = null)
                }
                R.bufferedRequest = z,
                R.bufferProcessing = !1
            }
            te.prototype._write = function(A, R, z) {
                z(new T("_write()"))
            }
            ,
            te.prototype._writev = null,
            te.prototype.end = function(A, R, z) {
                var j = this._writableState;
                return typeof A == "function" ? (z = A,
                A = null,
                R = null) : typeof R == "function" && (z = R,
                R = null),
                A != null && this.write(A, R),
                j.corked && (j.corked = 1,
                this.uncork()),
                j.ending || X(this, j, z),
                this
            }
            ,
            Object.defineProperty(te.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            });
            function s(A) {
                return A.ending && A.length === 0 && A.bufferedRequest === null && !A.finished && !A.writing
            }
            function _(A, R) {
                A._final(function(z) {
                    R.pendingcb--,
                    z && F(A, z),
                    R.prefinished = !0,
                    A.emit("prefinish"),
                    K(A, R)
                })
            }
            function G(A, R) {
                !R.prefinished && !R.finalCalled && (typeof A._final == "function" && !R.destroyed ? (R.pendingcb++,
                R.finalCalled = !0,
                se.nextTick(_, A, R)) : (R.prefinished = !0,
                A.emit("prefinish")))
            }
            function K(A, R) {
                var z = s(R);
                if (z && (G(A, R),
                R.pendingcb === 0 && (R.finished = !0,
                A.emit("finish"),
                R.autoDestroy))) {
                    var j = A._readableState;
                    (!j || j.autoDestroy && j.endEmitted) && A.destroy()
                }
                return z
            }
            function X(A, R, z) {
                R.ending = !0,
                K(A, R),
                z && (R.finished ? se.nextTick(z) : A.once("finish", z)),
                R.ended = !0,
                A.writable = !1
            }
            function re(A, R, z) {
                var j = A.entry;
                for (A.entry = null; j; ) {
                    var Z = j.callback;
                    R.pendingcb--,
                    Z(z),
                    j = j.next
                }
                R.corkedRequestsFree.next = A
            }
            return Object.defineProperty(te.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return this._writableState === void 0 ? !1 : this._writableState.destroyed
                },
                set: function(R) {
                    this._writableState && (this._writableState.destroyed = R)
                }
            }),
            te.prototype.destroy = c.destroy,
            te.prototype._undestroy = c.undestroy,
            te.prototype._destroy = function(A, R) {
                R(A)
            }
            ,
            Ba
        }
        var Ia, Ko;
        function Qr() {
            if (Ko)
                return Ia;
            Ko = 1;
            var t = Object.keys || function(l) {
                var v = [];
                for (var y in l)
                    v.push(y);
                return v
            }
            ;
            Ia = f;
            var e = Qo()
              , r = Yo();
            we(f, e);
            for (var i = t(r.prototype), n = 0; n < i.length; n++) {
                var a = i[n];
                f.prototype[a] || (f.prototype[a] = r.prototype[a])
            }
            function f(l) {
                if (!(this instanceof f))
                    return new f(l);
                e.call(this, l),
                r.call(this, l),
                this.allowHalfOpen = !0,
                l && (l.readable === !1 && (this.readable = !1),
                l.writable === !1 && (this.writable = !1),
                l.allowHalfOpen === !1 && (this.allowHalfOpen = !1,
                this.once("end", h)))
            }
            Object.defineProperty(f.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }),
            Object.defineProperty(f.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }),
            Object.defineProperty(f.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            });
            function h() {
                this._writableState.ended || se.nextTick(c, this)
            }
            function c(l) {
                l.end()
            }
            return Object.defineProperty(f.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed
                },
                set: function(v) {
                    this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = v,
                    this._writableState.destroyed = v)
                }
            }),
            Ia
        }
        var Vo = Pr.codes.ERR_STREAM_PREMATURE_CLOSE;
        function Ud(t) {
            var e = !1;
            return function() {
                if (!e) {
                    e = !0;
                    for (var r = arguments.length, i = new Array(r), n = 0; n < r; n++)
                        i[n] = arguments[n];
                    t.apply(this, i)
                }
            }
        }
        function Fd() {}
        function Hd(t) {
            return t.setHeader && typeof t.abort == "function"
        }
        function Go(t, e, r) {
            if (typeof e == "function")
                return Go(t, null, e);
            e || (e = {}),
            r = Ud(r || Fd);
            var i = e.readable || e.readable !== !1 && t.readable
              , n = e.writable || e.writable !== !1 && t.writable
              , a = function() {
                t.writable || h()
            }
              , f = t._writableState && t._writableState.finished
              , h = function() {
                n = !1,
                f = !0,
                i || r.call(t)
            }
              , c = t._readableState && t._readableState.endEmitted
              , l = function() {
                i = !1,
                c = !0,
                n || r.call(t)
            }
              , v = function(I) {
                r.call(t, I)
            }
              , y = function() {
                var I;
                if (i && !c)
                    return (!t._readableState || !t._readableState.ended) && (I = new Vo),
                    r.call(t, I);
                if (n && !f)
                    return (!t._writableState || !t._writableState.ended) && (I = new Vo),
                    r.call(t, I)
            }
              , E = function() {
                t.req.on("finish", h)
            };
            return Hd(t) ? (t.on("complete", h),
            t.on("abort", y),
            t.req ? E() : t.on("request", E)) : n && !t._writableState && (t.on("end", a),
            t.on("close", a)),
            t.on("end", l),
            t.on("finish", h),
            e.error !== !1 && t.on("error", v),
            t.on("close", y),
            function() {
                t.removeListener("complete", h),
                t.removeListener("abort", y),
                t.removeListener("request", E),
                t.req && t.req.removeListener("finish", h),
                t.removeListener("end", a),
                t.removeListener("close", a),
                t.removeListener("finish", h),
                t.removeListener("end", l),
                t.removeListener("error", v),
                t.removeListener("close", y)
            }
        }
        var Ta = Go, Pa, Jo;
        function jd() {
            if (Jo)
                return Pa;
            Jo = 1;
            var t;
            function e(Y, F, V) {
                return F = r(F),
                F in Y ? Object.defineProperty(Y, F, {
                    value: V,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : Y[F] = V,
                Y
            }
            function r(Y) {
                var F = i(Y, "string");
                return typeof F == "symbol" ? F : String(F)
            }
            function i(Y, F) {
                if (typeof Y != "object" || Y === null)
                    return Y;
                var V = Y[Symbol.toPrimitive];
                if (V !== void 0) {
                    var Q = V.call(Y, F || "default");
                    if (typeof Q != "object")
                        return Q;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return (F === "string" ? String : Number)(Y)
            }
            var n = Ta
              , a = Symbol("lastResolve")
              , f = Symbol("lastReject")
              , h = Symbol("error")
              , c = Symbol("ended")
              , l = Symbol("lastPromise")
              , v = Symbol("handlePromise")
              , y = Symbol("stream");
            function E(Y, F) {
                return {
                    value: Y,
                    done: F
                }
            }
            function T(Y) {
                var F = Y[a];
                if (F !== null) {
                    var V = Y[y].read();
                    V !== null && (Y[l] = null,
                    Y[a] = null,
                    Y[f] = null,
                    F(E(V, !1)))
                }
            }
            function I(Y) {
                se.nextTick(T, Y)
            }
            function P(Y, F) {
                return function(V, Q) {
                    Y.then(function() {
                        if (F[c]) {
                            V(E(void 0, !0));
                            return
                        }
                        F[v](V, Q)
                    }, Q)
                }
            }
            var C = Object.getPrototypeOf(function() {})
              , L = Object.setPrototypeOf((t = {
                get stream() {
                    return this[y]
                },
                next: function() {
                    var F = this
                      , V = this[h];
                    if (V !== null)
                        return Promise.reject(V);
                    if (this[c])
                        return Promise.resolve(E(void 0, !0));
                    if (this[y].destroyed)
                        return new Promise(function(W, Ae) {
                            se.nextTick(function() {
                                F[h] ? Ae(F[h]) : W(E(void 0, !0))
                            })
                        }
                        );
                    var Q = this[l], oe;
                    if (Q)
                        oe = new Promise(P(Q, this));
                    else {
                        var te = this[y].read();
                        if (te !== null)
                            return Promise.resolve(E(te, !1));
                        oe = new Promise(this[v])
                    }
                    return this[l] = oe,
                    oe
                }
            },
            e(t, Symbol.asyncIterator, function() {
                return this
            }),
            e(t, "return", function() {
                var F = this;
                return new Promise(function(V, Q) {
                    F[y].destroy(null, function(oe) {
                        if (oe) {
                            Q(oe);
                            return
                        }
                        V(E(void 0, !0))
                    })
                }
                )
            }),
            t), C)
              , x = function(F) {
                var V, Q = Object.create(L, (V = {},
                e(V, y, {
                    value: F,
                    writable: !0
                }),
                e(V, a, {
                    value: null,
                    writable: !0
                }),
                e(V, f, {
                    value: null,
                    writable: !0
                }),
                e(V, h, {
                    value: null,
                    writable: !0
                }),
                e(V, c, {
                    value: F._readableState.endEmitted,
                    writable: !0
                }),
                e(V, v, {
                    value: function(te, W) {
                        var Ae = Q[y].read();
                        Ae ? (Q[l] = null,
                        Q[a] = null,
                        Q[f] = null,
                        te(E(Ae, !1))) : (Q[a] = te,
                        Q[f] = W)
                    },
                    writable: !0
                }),
                V));
                return Q[l] = null,
                n(F, function(oe) {
                    if (oe && oe.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                        var te = Q[f];
                        te !== null && (Q[l] = null,
                        Q[a] = null,
                        Q[f] = null,
                        te(oe)),
                        Q[h] = oe;
                        return
                    }
                    var W = Q[a];
                    W !== null && (Q[l] = null,
                    Q[a] = null,
                    Q[f] = null,
                    W(E(void 0, !0))),
                    Q[c] = !0
                }),
                F.on("readable", I.bind(null, Q)),
                Q
            };
            return Pa = x,
            Pa
        }
        var La, Xo;
        function Wd() {
            return Xo || (Xo = 1,
            La = function() {
                throw new Error("Readable.from is not available in the browser")
            }
            ),
            La
        }
        var ka, Zo;
        function Qo() {
            if (Zo)
                return ka;
            Zo = 1,
            ka = W;
            var t;
            W.ReadableState = te,
            Do.EventEmitter;
            var e = function(g, $) {
                return g.listeners($).length
            }
              , r = xo
              , i = Kr.Buffer
              , n = (typeof O < "u" ? O : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {}
            ;
            function a(w) {
                return i.from(w)
            }
            function f(w) {
                return i.isBuffer(w) || w instanceof n
            }
            var h = No, c;
            h && h.debuglog ? c = h.debuglog("stream") : c = function() {}
            ;
            var l = Id(), v = Uo, y = jo, E = y.getHighWaterMark, T = Pr.codes, I = T.ERR_INVALID_ARG_TYPE, P = T.ERR_STREAM_PUSH_AFTER_EOF, C = T.ERR_METHOD_NOT_IMPLEMENTED, L = T.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, x, Y, F;
            we(W, r);
            var V = v.errorOrDestroy
              , Q = ["error", "close", "destroy", "pause", "resume"];
            function oe(w, g, $) {
                if (typeof w.prependListener == "function")
                    return w.prependListener(g, $);
                !w._events || !w._events[g] ? w.on(g, $) : Array.isArray(w._events[g]) ? w._events[g].unshift($) : w._events[g] = [$, w._events[g]]
            }
            function te(w, g, $) {
                t = t || Qr(),
                w = w || {},
                typeof $ != "boolean" && ($ = g instanceof t),
                this.objectMode = !!w.objectMode,
                $ && (this.objectMode = this.objectMode || !!w.readableObjectMode),
                this.highWaterMark = E(this, w, "readableHighWaterMark", $),
                this.buffer = new l,
                this.length = 0,
                this.pipes = null,
                this.pipesCount = 0,
                this.flowing = null,
                this.ended = !1,
                this.endEmitted = !1,
                this.reading = !1,
                this.sync = !0,
                this.needReadable = !1,
                this.emittedReadable = !1,
                this.readableListening = !1,
                this.resumeScheduled = !1,
                this.paused = !0,
                this.emitClose = w.emitClose !== !1,
                this.autoDestroy = !!w.autoDestroy,
                this.destroyed = !1,
                this.defaultEncoding = w.defaultEncoding || "utf8",
                this.awaitDrain = 0,
                this.readingMore = !1,
                this.decoder = null,
                this.encoding = null,
                w.encoding && (x || (x = ma.StringDecoder),
                this.decoder = new x(w.encoding),
                this.encoding = w.encoding)
            }
            function W(w) {
                if (t = t || Qr(),
                !(this instanceof W))
                    return new W(w);
                var g = this instanceof t;
                this._readableState = new te(w,this,g),
                this.readable = !0,
                w && (typeof w.read == "function" && (this._read = w.read),
                typeof w.destroy == "function" && (this._destroy = w.destroy)),
                r.call(this)
            }
            Object.defineProperty(W.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return this._readableState === void 0 ? !1 : this._readableState.destroyed
                },
                set: function(g) {
                    this._readableState && (this._readableState.destroyed = g)
                }
            }),
            W.prototype.destroy = v.destroy,
            W.prototype._undestroy = v.undestroy,
            W.prototype._destroy = function(w, g) {
                g(w)
            }
            ,
            W.prototype.push = function(w, g) {
                var $ = this._readableState, J;
                return $.objectMode ? J = !0 : typeof w == "string" && (g = g || $.defaultEncoding,
                g !== $.encoding && (w = i.from(w, g),
                g = ""),
                J = !0),
                Ae(this, w, g, !1, J)
            }
            ,
            W.prototype.unshift = function(w) {
                return Ae(this, w, null, !0, !1)
            }
            ;
            function Ae(w, g, $, J, ne) {
                c("readableAddChunk", g);
                var ee = w._readableState;
                if (g === null)
                    ee.reading = !1,
                    m(w, ee);
                else {
                    var ue;
                    if (ne || (ue = o(ee, g)),
                    ue)
                        V(w, ue);
                    else if (ee.objectMode || g && g.length > 0)
                        if (typeof g != "string" && !ee.objectMode && Object.getPrototypeOf(g) !== i.prototype && (g = a(g)),
                        J)
                            ee.endEmitted ? V(w, new L) : M(w, ee, g, !0);
                        else if (ee.ended)
                            V(w, new P);
                        else {
                            if (ee.destroyed)
                                return !1;
                            ee.reading = !1,
                            ee.decoder && !$ ? (g = ee.decoder.write(g),
                            ee.objectMode || g.length !== 0 ? M(w, ee, g, !1) : b(w, ee)) : M(w, ee, g, !1)
                        }
                    else
                        J || (ee.reading = !1,
                        b(w, ee))
                }
                return !ee.ended && (ee.length < ee.highWaterMark || ee.length === 0)
            }
            function M(w, g, $, J) {
                g.flowing && g.length === 0 && !g.sync ? (g.awaitDrain = 0,
                w.emit("data", $)) : (g.length += g.objectMode ? 1 : $.length,
                J ? g.buffer.unshift($) : g.buffer.push($),
                g.needReadable && S(w)),
                b(w, g)
            }
            function o(w, g) {
                var $;
                return !f(g) && typeof g != "string" && g !== void 0 && !w.objectMode && ($ = new I("chunk",["string", "Buffer", "Uint8Array"],g)),
                $
            }
            W.prototype.isPaused = function() {
                return this._readableState.flowing === !1
            }
            ,
            W.prototype.setEncoding = function(w) {
                x || (x = ma.StringDecoder);
                var g = new x(w);
                this._readableState.decoder = g,
                this._readableState.encoding = this._readableState.decoder.encoding;
                for (var $ = this._readableState.buffer.head, J = ""; $ !== null; )
                    J += g.write($.data),
                    $ = $.next;
                return this._readableState.buffer.clear(),
                J !== "" && this._readableState.buffer.push(J),
                this._readableState.length = J.length,
                this
            }
            ;
            var u = 1073741824;
            function d(w) {
                return w >= u ? w = u : (w--,
                w |= w >>> 1,
                w |= w >>> 2,
                w |= w >>> 4,
                w |= w >>> 8,
                w |= w >>> 16,
                w++),
                w
            }
            function p(w, g) {
                return w <= 0 || g.length === 0 && g.ended ? 0 : g.objectMode ? 1 : w !== w ? g.flowing && g.length ? g.buffer.head.data.length : g.length : (w > g.highWaterMark && (g.highWaterMark = d(w)),
                w <= g.length ? w : g.ended ? g.length : (g.needReadable = !0,
                0))
            }
            W.prototype.read = function(w) {
                c("read", w),
                w = parseInt(w, 10);
                var g = this._readableState
                  , $ = w;
                if (w !== 0 && (g.emittedReadable = !1),
                w === 0 && g.needReadable && ((g.highWaterMark !== 0 ? g.length >= g.highWaterMark : g.length > 0) || g.ended))
                    return c("read: emitReadable", g.length, g.ended),
                    g.length === 0 && g.ended ? z(this) : S(this),
                    null;
                if (w = p(w, g),
                w === 0 && g.ended)
                    return g.length === 0 && z(this),
                    null;
                var J = g.needReadable;
                c("need readable", J),
                (g.length === 0 || g.length - w < g.highWaterMark) && (J = !0,
                c("length less than watermark", J)),
                g.ended || g.reading ? (J = !1,
                c("reading or ended", J)) : J && (c("do read"),
                g.reading = !0,
                g.sync = !0,
                g.length === 0 && (g.needReadable = !0),
                this._read(g.highWaterMark),
                g.sync = !1,
                g.reading || (w = p($, g)));
                var ne;
                return w > 0 ? ne = R(w, g) : ne = null,
                ne === null ? (g.needReadable = g.length <= g.highWaterMark,
                w = 0) : (g.length -= w,
                g.awaitDrain = 0),
                g.length === 0 && (g.ended || (g.needReadable = !0),
                $ !== w && g.ended && z(this)),
                ne !== null && this.emit("data", ne),
                ne
            }
            ;
            function m(w, g) {
                if (c("onEofChunk"),
                !g.ended) {
                    if (g.decoder) {
                        var $ = g.decoder.end();
                        $ && $.length && (g.buffer.push($),
                        g.length += g.objectMode ? 1 : $.length)
                    }
                    g.ended = !0,
                    g.sync ? S(w) : (g.needReadable = !1,
                    g.emittedReadable || (g.emittedReadable = !0,
                    B(w)))
                }
            }
            function S(w) {
                var g = w._readableState;
                c("emitReadable", g.needReadable, g.emittedReadable),
                g.needReadable = !1,
                g.emittedReadable || (c("emitReadable", g.flowing),
                g.emittedReadable = !0,
                se.nextTick(B, w))
            }
            function B(w) {
                var g = w._readableState;
                c("emitReadable_", g.destroyed, g.length, g.ended),
                !g.destroyed && (g.length || g.ended) && (w.emit("readable"),
                g.emittedReadable = !1),
                g.needReadable = !g.flowing && !g.ended && g.length <= g.highWaterMark,
                A(w)
            }
            function b(w, g) {
                g.readingMore || (g.readingMore = !0,
                se.nextTick(s, w, g))
            }
            function s(w, g) {
                for (; !g.reading && !g.ended && (g.length < g.highWaterMark || g.flowing && g.length === 0); ) {
                    var $ = g.length;
                    if (c("maybeReadMore read 0"),
                    w.read(0),
                    $ === g.length)
                        break
                }
                g.readingMore = !1
            }
            W.prototype._read = function(w) {
                V(this, new C("_read()"))
            }
            ,
            W.prototype.pipe = function(w, g) {
                var $ = this
                  , J = this._readableState;
                switch (J.pipesCount) {
                case 0:
                    J.pipes = w;
                    break;
                case 1:
                    J.pipes = [J.pipes, w];
                    break;
                default:
                    J.pipes.push(w);
                    break
                }
                J.pipesCount += 1,
                c("pipe count=%d opts=%j", J.pipesCount, g);
                var ne = (!g || g.end !== !1) && w !== se.stdout && w !== se.stderr
                  , ee = ne ? de : gr;
                J.endEmitted ? se.nextTick(ee) : $.once("end", ee),
                w.on("unpipe", ue);
                function ue(le, pe) {
                    c("onunpipe"),
                    le === $ && pe && pe.hasUnpiped === !1 && (pe.hasUnpiped = !0,
                    Re())
                }
                function de() {
                    c("onend"),
                    w.end()
                }
                var be = _($);
                w.on("drain", be);
                var Yi = !1;
                function Re() {
                    c("cleanup"),
                    w.removeListener("close", ye),
                    w.removeListener("finish", _e),
                    w.removeListener("drain", be),
                    w.removeListener("error", li),
                    w.removeListener("unpipe", ue),
                    $.removeListener("end", de),
                    $.removeListener("end", gr),
                    $.removeListener("data", Me),
                    Yi = !0,
                    J.awaitDrain && (!w._writableState || w._writableState.needDrain) && be()
                }
                $.on("data", Me);
                function Me(le) {
                    c("ondata");
                    var pe = w.write(le);
                    c("dest.write", pe),
                    pe === !1 && ((J.pipesCount === 1 && J.pipes === w || J.pipesCount > 1 && Z(J.pipes, w) !== -1) && !Yi && (c("false write response, pause", J.awaitDrain),
                    J.awaitDrain++),
                    $.pause())
                }
                function li(le) {
                    c("onerror", le),
                    gr(),
                    w.removeListener("error", li),
                    e(w, "error") === 0 && V(w, le)
                }
                oe(w, "error", li);
                function ye() {
                    w.removeListener("finish", _e),
                    gr()
                }
                w.once("close", ye);
                function _e() {
                    c("onfinish"),
                    w.removeListener("close", ye),
                    gr()
                }
                w.once("finish", _e);
                function gr() {
                    c("unpipe"),
                    $.unpipe(w)
                }
                return w.emit("pipe", $),
                J.flowing || (c("pipe resume"),
                $.resume()),
                w
            }
            ;
            function _(w) {
                return function() {
                    var $ = w._readableState;
                    c("pipeOnDrain", $.awaitDrain),
                    $.awaitDrain && $.awaitDrain--,
                    $.awaitDrain === 0 && e(w, "data") && ($.flowing = !0,
                    A(w))
                }
            }
            W.prototype.unpipe = function(w) {
                var g = this._readableState
                  , $ = {
                    hasUnpiped: !1
                };
                if (g.pipesCount === 0)
                    return this;
                if (g.pipesCount === 1)
                    return w && w !== g.pipes ? this : (w || (w = g.pipes),
                    g.pipes = null,
                    g.pipesCount = 0,
                    g.flowing = !1,
                    w && w.emit("unpipe", this, $),
                    this);
                if (!w) {
                    var J = g.pipes
                      , ne = g.pipesCount;
                    g.pipes = null,
                    g.pipesCount = 0,
                    g.flowing = !1;
                    for (var ee = 0; ee < ne; ee++)
                        J[ee].emit("unpipe", this, {
                            hasUnpiped: !1
                        });
                    return this
                }
                var ue = Z(g.pipes, w);
                return ue === -1 ? this : (g.pipes.splice(ue, 1),
                g.pipesCount -= 1,
                g.pipesCount === 1 && (g.pipes = g.pipes[0]),
                w.emit("unpipe", this, $),
                this)
            }
            ,
            W.prototype.on = function(w, g) {
                var $ = r.prototype.on.call(this, w, g)
                  , J = this._readableState;
                return w === "data" ? (J.readableListening = this.listenerCount("readable") > 0,
                J.flowing !== !1 && this.resume()) : w === "readable" && !J.endEmitted && !J.readableListening && (J.readableListening = J.needReadable = !0,
                J.flowing = !1,
                J.emittedReadable = !1,
                c("on readable", J.length, J.reading),
                J.length ? S(this) : J.reading || se.nextTick(K, this)),
                $
            }
            ,
            W.prototype.addListener = W.prototype.on,
            W.prototype.removeListener = function(w, g) {
                var $ = r.prototype.removeListener.call(this, w, g);
                return w === "readable" && se.nextTick(G, this),
                $
            }
            ,
            W.prototype.removeAllListeners = function(w) {
                var g = r.prototype.removeAllListeners.apply(this, arguments);
                return (w === "readable" || w === void 0) && se.nextTick(G, this),
                g
            }
            ;
            function G(w) {
                var g = w._readableState;
                g.readableListening = w.listenerCount("readable") > 0,
                g.resumeScheduled && !g.paused ? g.flowing = !0 : w.listenerCount("data") > 0 && w.resume()
            }
            function K(w) {
                c("readable nexttick read 0"),
                w.read(0)
            }
            W.prototype.resume = function() {
                var w = this._readableState;
                return w.flowing || (c("resume"),
                w.flowing = !w.readableListening,
                X(this, w)),
                w.paused = !1,
                this
            }
            ;
            function X(w, g) {
                g.resumeScheduled || (g.resumeScheduled = !0,
                se.nextTick(re, w, g))
            }
            function re(w, g) {
                c("resume", g.reading),
                g.reading || w.read(0),
                g.resumeScheduled = !1,
                w.emit("resume"),
                A(w),
                g.flowing && !g.reading && w.read(0)
            }
            W.prototype.pause = function() {
                return c("call pause flowing=%j", this._readableState.flowing),
                this._readableState.flowing !== !1 && (c("pause"),
                this._readableState.flowing = !1,
                this.emit("pause")),
                this._readableState.paused = !0,
                this
            }
            ;
            function A(w) {
                var g = w._readableState;
                for (c("flow", g.flowing); g.flowing && w.read() !== null; )
                    ;
            }
            W.prototype.wrap = function(w) {
                var g = this
                  , $ = this._readableState
                  , J = !1;
                w.on("end", function() {
                    if (c("wrapped end"),
                    $.decoder && !$.ended) {
                        var ue = $.decoder.end();
                        ue && ue.length && g.push(ue)
                    }
                    g.push(null)
                }),
                w.on("data", function(ue) {
                    if (c("wrapped data"),
                    $.decoder && (ue = $.decoder.write(ue)),
                    !($.objectMode && ue == null) && !(!$.objectMode && (!ue || !ue.length))) {
                        var de = g.push(ue);
                        de || (J = !0,
                        w.pause())
                    }
                });
                for (var ne in w)
                    this[ne] === void 0 && typeof w[ne] == "function" && (this[ne] = function(de) {
                        return function() {
                            return w[de].apply(w, arguments)
                        }
                    }(ne));
                for (var ee = 0; ee < Q.length; ee++)
                    w.on(Q[ee], this.emit.bind(this, Q[ee]));
                return this._read = function(ue) {
                    c("wrapped _read", ue),
                    J && (J = !1,
                    w.resume())
                }
                ,
                this
            }
            ,
            typeof Symbol == "function" && (W.prototype[Symbol.asyncIterator] = function() {
                return Y === void 0 && (Y = jd()),
                Y(this)
            }
            ),
            Object.defineProperty(W.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }),
            Object.defineProperty(W.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }),
            Object.defineProperty(W.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(g) {
                    this._readableState && (this._readableState.flowing = g)
                }
            }),
            W._fromList = R,
            Object.defineProperty(W.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            });
            function R(w, g) {
                if (g.length === 0)
                    return null;
                var $;
                return g.objectMode ? $ = g.buffer.shift() : !w || w >= g.length ? (g.decoder ? $ = g.buffer.join("") : g.buffer.length === 1 ? $ = g.buffer.first() : $ = g.buffer.concat(g.length),
                g.buffer.clear()) : $ = g.buffer.consume(w, g.decoder),
                $
            }
            function z(w) {
                var g = w._readableState;
                c("endReadable", g.endEmitted),
                g.endEmitted || (g.ended = !0,
                se.nextTick(j, g, w))
            }
            function j(w, g) {
                if (c("endReadableNT", w.endEmitted, w.length),
                !w.endEmitted && w.length === 0 && (w.endEmitted = !0,
                g.readable = !1,
                g.emit("end"),
                w.autoDestroy)) {
                    var $ = g._writableState;
                    (!$ || $.autoDestroy && $.finished) && g.destroy()
                }
            }
            typeof Symbol == "function" && (W.from = function(w, g) {
                return F === void 0 && (F = Wd()),
                F(W, w, g)
            }
            );
            function Z(w, g) {
                for (var $ = 0, J = w.length; $ < J; $++)
                    if (w[$] === g)
                        return $;
                return -1
            }
            return ka
        }
        var es = rr
          , bn = Pr.codes
          , Yd = bn.ERR_METHOD_NOT_IMPLEMENTED
          , Kd = bn.ERR_MULTIPLE_CALLBACK
          , Vd = bn.ERR_TRANSFORM_ALREADY_TRANSFORMING
          , Gd = bn.ERR_TRANSFORM_WITH_LENGTH_0
          , gn = Qr();
        we(rr, gn);
        function Jd(t, e) {
            var r = this._transformState;
            r.transforming = !1;
            var i = r.writecb;
            if (i === null)
                return this.emit("error", new Kd);
            r.writechunk = null,
            r.writecb = null,
            e != null && this.push(e),
            i(t);
            var n = this._readableState;
            n.reading = !1,
            (n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
        }
        function rr(t) {
            if (!(this instanceof rr))
                return new rr(t);
            gn.call(this, t),
            this._transformState = {
                afterTransform: Jd.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            },
            this._readableState.needReadable = !0,
            this._readableState.sync = !1,
            t && (typeof t.transform == "function" && (this._transform = t.transform),
            typeof t.flush == "function" && (this._flush = t.flush)),
            this.on("prefinish", Xd)
        }
        function Xd() {
            var t = this;
            typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(e, r) {
                ts(t, e, r)
            }) : ts(this, null, null)
        }
        rr.prototype.push = function(t, e) {
            return this._transformState.needTransform = !1,
            gn.prototype.push.call(this, t, e)
        }
        ,
        rr.prototype._transform = function(t, e, r) {
            r(new Yd("_transform()"))
        }
        ,
        rr.prototype._write = function(t, e, r) {
            var i = this._transformState;
            if (i.writecb = r,
            i.writechunk = t,
            i.writeencoding = e,
            !i.transforming) {
                var n = this._readableState;
                (i.needTransform || n.needReadable || n.length < n.highWaterMark) && this._read(n.highWaterMark)
            }
        }
        ,
        rr.prototype._read = function(t) {
            var e = this._transformState;
            e.writechunk !== null && !e.transforming ? (e.transforming = !0,
            this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
        }
        ,
        rr.prototype._destroy = function(t, e) {
            gn.prototype._destroy.call(this, t, function(r) {
                e(r)
            })
        }
        ;
        function ts(t, e, r) {
            if (e)
                return t.emit("error", e);
            if (r != null && t.push(r),
            t._writableState.length)
                throw new Gd;
            if (t._transformState.transforming)
                throw new Vd;
            return t.push(null)
        }
        var Zd = Ii
          , rs = es;
        we(Ii, rs);
        function Ii(t) {
            if (!(this instanceof Ii))
                return new Ii(t);
            rs.call(this, t)
        }
        Ii.prototype._transform = function(t, e, r) {
            r(null, t)
        }
        ;
        var Ca;
        function Qd(t) {
            var e = !1;
            return function() {
                e || (e = !0,
                t.apply(void 0, arguments))
            }
        }
        var is = Pr.codes
          , e0 = is.ERR_MISSING_ARGS
          , t0 = is.ERR_STREAM_DESTROYED;
        function ns(t) {
            if (t)
                throw t
        }
        function r0(t) {
            return t.setHeader && typeof t.abort == "function"
        }
        function i0(t, e, r, i) {
            i = Qd(i);
            var n = !1;
            t.on("close", function() {
                n = !0
            }),
            Ca === void 0 && (Ca = Ta),
            Ca(t, {
                readable: e,
                writable: r
            }, function(f) {
                if (f)
                    return i(f);
                n = !0,
                i()
            });
            var a = !1;
            return function(f) {
                if (!n && !a) {
                    if (a = !0,
                    r0(t))
                        return t.abort();
                    if (typeof t.destroy == "function")
                        return t.destroy();
                    i(f || new t0("pipe"))
                }
            }
        }
        function as(t) {
            t()
        }
        function n0(t, e) {
            return t.pipe(e)
        }
        function a0(t) {
            return !t.length || typeof t[t.length - 1] != "function" ? ns : t.pop()
        }
        function f0() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            var i = a0(e);
            if (Array.isArray(e[0]) && (e = e[0]),
            e.length < 2)
                throw new e0("streams");
            var n, a = e.map(function(f, h) {
                var c = h < e.length - 1
                  , l = h > 0;
                return i0(f, c, l, function(v) {
                    n || (n = v),
                    v && a.forEach(as),
                    !c && (a.forEach(as),
                    i(n))
                })
            });
            return e.reduce(n0)
        }
        var o0 = f0;
        (function(t, e) {
            e = t.exports = Qo(),
            e.Stream = e,
            e.Readable = e,
            e.Writable = Yo(),
            e.Duplex = Qr(),
            e.Transform = es,
            e.PassThrough = Zd,
            e.finished = Ta,
            e.pipeline = o0
        }
        )(Sa, Sa.exports);
        var s0 = Sa.exports
          , yn = ge.Buffer
          , fs = s0.Transform
          , h0 = we;
        function u0(t, e) {
            if (!yn.isBuffer(t) && typeof t != "string")
                throw new TypeError(e + " must be a string or a buffer")
        }
        function dr(t) {
            fs.call(this),
            this._block = yn.allocUnsafe(t),
            this._blockSize = t,
            this._blockOffset = 0,
            this._length = [0, 0, 0, 0],
            this._finalized = !1
        }
        h0(dr, fs),
        dr.prototype._transform = function(t, e, r) {
            var i = null;
            try {
                this.update(t, e)
            } catch (n) {
                i = n
            }
            r(i)
        }
        ,
        dr.prototype._flush = function(t) {
            var e = null;
            try {
                this.push(this.digest())
            } catch (r) {
                e = r
            }
            t(e)
        }
        ,
        dr.prototype.update = function(t, e) {
            if (u0(t, "Data"),
            this._finalized)
                throw new Error("Digest already called");
            yn.isBuffer(t) || (t = yn.from(t, e));
            for (var r = this._block, i = 0; this._blockOffset + t.length - i >= this._blockSize; ) {
                for (var n = this._blockOffset; n < this._blockSize; )
                    r[n++] = t[i++];
                this._update(),
                this._blockOffset = 0
            }
            for (; i < t.length; )
                r[this._blockOffset++] = t[i++];
            for (var a = 0, f = t.length * 8; f > 0; ++a)
                this._length[a] += f,
                f = this._length[a] / 4294967296 | 0,
                f > 0 && (this._length[a] -= 4294967296 * f);
            return this
        }
        ,
        dr.prototype._update = function() {
            throw new Error("_update is not implemented")
        }
        ,
        dr.prototype.digest = function(t) {
            if (this._finalized)
                throw new Error("Digest already called");
            this._finalized = !0;
            var e = this._digest();
            t !== void 0 && (e = e.toString(t)),
            this._block.fill(0),
            this._blockOffset = 0;
            for (var r = 0; r < 4; ++r)
                this._length[r] = 0;
            return e
        }
        ,
        dr.prototype._digest = function() {
            throw new Error("_digest is not implemented")
        }
        ;
        var os = dr
          , c0 = we
          , ss = os
          , d0 = ge.Buffer
          , l0 = new Array(16);
        function _n() {
            ss.call(this, 64),
            this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878
        }
        c0(_n, ss),
        _n.prototype._update = function() {
            for (var t = l0, e = 0; e < 16; ++e)
                t[e] = this._block.readInt32LE(e * 4);
            var r = this._a
              , i = this._b
              , n = this._c
              , a = this._d;
            r = st(r, i, n, a, t[0], 3614090360, 7),
            a = st(a, r, i, n, t[1], 3905402710, 12),
            n = st(n, a, r, i, t[2], 606105819, 17),
            i = st(i, n, a, r, t[3], 3250441966, 22),
            r = st(r, i, n, a, t[4], 4118548399, 7),
            a = st(a, r, i, n, t[5], 1200080426, 12),
            n = st(n, a, r, i, t[6], 2821735955, 17),
            i = st(i, n, a, r, t[7], 4249261313, 22),
            r = st(r, i, n, a, t[8], 1770035416, 7),
            a = st(a, r, i, n, t[9], 2336552879, 12),
            n = st(n, a, r, i, t[10], 4294925233, 17),
            i = st(i, n, a, r, t[11], 2304563134, 22),
            r = st(r, i, n, a, t[12], 1804603682, 7),
            a = st(a, r, i, n, t[13], 4254626195, 12),
            n = st(n, a, r, i, t[14], 2792965006, 17),
            i = st(i, n, a, r, t[15], 1236535329, 22),
            r = ht(r, i, n, a, t[1], 4129170786, 5),
            a = ht(a, r, i, n, t[6], 3225465664, 9),
            n = ht(n, a, r, i, t[11], 643717713, 14),
            i = ht(i, n, a, r, t[0], 3921069994, 20),
            r = ht(r, i, n, a, t[5], 3593408605, 5),
            a = ht(a, r, i, n, t[10], 38016083, 9),
            n = ht(n, a, r, i, t[15], 3634488961, 14),
            i = ht(i, n, a, r, t[4], 3889429448, 20),
            r = ht(r, i, n, a, t[9], 568446438, 5),
            a = ht(a, r, i, n, t[14], 3275163606, 9),
            n = ht(n, a, r, i, t[3], 4107603335, 14),
            i = ht(i, n, a, r, t[8], 1163531501, 20),
            r = ht(r, i, n, a, t[13], 2850285829, 5),
            a = ht(a, r, i, n, t[2], 4243563512, 9),
            n = ht(n, a, r, i, t[7], 1735328473, 14),
            i = ht(i, n, a, r, t[12], 2368359562, 20),
            r = ut(r, i, n, a, t[5], 4294588738, 4),
            a = ut(a, r, i, n, t[8], 2272392833, 11),
            n = ut(n, a, r, i, t[11], 1839030562, 16),
            i = ut(i, n, a, r, t[14], 4259657740, 23),
            r = ut(r, i, n, a, t[1], 2763975236, 4),
            a = ut(a, r, i, n, t[4], 1272893353, 11),
            n = ut(n, a, r, i, t[7], 4139469664, 16),
            i = ut(i, n, a, r, t[10], 3200236656, 23),
            r = ut(r, i, n, a, t[13], 681279174, 4),
            a = ut(a, r, i, n, t[0], 3936430074, 11),
            n = ut(n, a, r, i, t[3], 3572445317, 16),
            i = ut(i, n, a, r, t[6], 76029189, 23),
            r = ut(r, i, n, a, t[9], 3654602809, 4),
            a = ut(a, r, i, n, t[12], 3873151461, 11),
            n = ut(n, a, r, i, t[15], 530742520, 16),
            i = ut(i, n, a, r, t[2], 3299628645, 23),
            r = ct(r, i, n, a, t[0], 4096336452, 6),
            a = ct(a, r, i, n, t[7], 1126891415, 10),
            n = ct(n, a, r, i, t[14], 2878612391, 15),
            i = ct(i, n, a, r, t[5], 4237533241, 21),
            r = ct(r, i, n, a, t[12], 1700485571, 6),
            a = ct(a, r, i, n, t[3], 2399980690, 10),
            n = ct(n, a, r, i, t[10], 4293915773, 15),
            i = ct(i, n, a, r, t[1], 2240044497, 21),
            r = ct(r, i, n, a, t[8], 1873313359, 6),
            a = ct(a, r, i, n, t[15], 4264355552, 10),
            n = ct(n, a, r, i, t[6], 2734768916, 15),
            i = ct(i, n, a, r, t[13], 1309151649, 21),
            r = ct(r, i, n, a, t[4], 4149444226, 6),
            a = ct(a, r, i, n, t[11], 3174756917, 10),
            n = ct(n, a, r, i, t[2], 718787259, 15),
            i = ct(i, n, a, r, t[9], 3951481745, 21),
            this._a = this._a + r | 0,
            this._b = this._b + i | 0,
            this._c = this._c + n | 0,
            this._d = this._d + a | 0
        }
        ,
        _n.prototype._digest = function() {
            this._block[this._blockOffset++] = 128,
            this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            this._blockOffset = 0),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
            var t = d0.allocUnsafe(16);
            return t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t
        }
        ;
        function mn(t, e) {
            return t << e | t >>> 32 - e
        }
        function st(t, e, r, i, n, a, f) {
            return mn(t + (e & r | ~e & i) + n + a | 0, f) + e | 0
        }
        function ht(t, e, r, i, n, a, f) {
            return mn(t + (e & i | r & ~i) + n + a | 0, f) + e | 0
        }
        function ut(t, e, r, i, n, a, f) {
            return mn(t + (e ^ r ^ i) + n + a | 0, f) + e | 0
        }
        function ct(t, e, r, i, n, a, f) {
            return mn(t + (r ^ (e | ~i)) + n + a | 0, f) + e | 0
        }
        var hs = _n
          , Lr = ge.Buffer
          , p0 = hs;
        function v0(t, e, r, i) {
            if (Lr.isBuffer(t) || (t = Lr.from(t, "binary")),
            e && (Lr.isBuffer(e) || (e = Lr.from(e, "binary")),
            e.length !== 8))
                throw new RangeError("salt should be Buffer with 8 byte length");
            for (var n = r / 8, a = Lr.alloc(n), f = Lr.alloc(i || 0), h = Lr.alloc(0); n > 0 || i > 0; ) {
                var c = new p0;
                c.update(h),
                c.update(t),
                e && c.update(e),
                h = c.digest();
                var l = 0;
                if (n > 0) {
                    var v = a.length - n;
                    l = Math.min(n, h.length),
                    h.copy(a, v, 0, l),
                    n -= l
                }
                if (l < h.length && i > 0) {
                    var y = f.length - i
                      , E = Math.min(i, h.length - l);
                    h.copy(f, y, l, l + E),
                    i -= E
                }
            }
            return h.fill(0),
            {
                key: a,
                iv: f
            }
        }
        var us = v0
          , cs = Kf
          , b0 = Co
          , ir = ge.Buffer
          , g0 = Oo
          , ds = ln
          , y0 = mi
          , _0 = us
          , m0 = we;
        function Ti(t, e, r) {
            ds.call(this),
            this._cache = new wn,
            this._cipher = new y0.AES(e),
            this._prev = ir.from(r),
            this._mode = t,
            this._autopadding = !0
        }
        m0(Ti, ds),
        Ti.prototype._update = function(t) {
            this._cache.add(t);
            for (var e, r, i = []; e = this._cache.get(); )
                r = this._mode.encrypt(this, e),
                i.push(r);
            return ir.concat(i)
        }
        ;
        var w0 = ir.alloc(16, 16);
        Ti.prototype._final = function() {
            var t = this._cache.flush();
            if (this._autopadding)
                return t = this._mode.encrypt(this, t),
                this._cipher.scrub(),
                t;
            if (!t.equals(w0))
                throw this._cipher.scrub(),
                new Error("data not multiple of block length")
        }
        ,
        Ti.prototype.setAutoPadding = function(t) {
            return this._autopadding = !!t,
            this
        }
        ;
        function wn() {
            this.cache = ir.allocUnsafe(0)
        }
        wn.prototype.add = function(t) {
            this.cache = ir.concat([this.cache, t])
        }
        ,
        wn.prototype.get = function() {
            if (this.cache.length > 15) {
                var t = this.cache.slice(0, 16);
                return this.cache = this.cache.slice(16),
                t
            }
            return null
        }
        ,
        wn.prototype.flush = function() {
            for (var t = 16 - this.cache.length, e = ir.allocUnsafe(t), r = -1; ++r < t; )
                e.writeUInt8(t, r);
            return ir.concat([this.cache, e])
        }
        ;
        function ls(t, e, r) {
            var i = cs[t.toLowerCase()];
            if (!i)
                throw new TypeError("invalid suite type");
            if (typeof e == "string" && (e = ir.from(e)),
            e.length !== i.key / 8)
                throw new TypeError("invalid key length " + e.length);
            if (typeof r == "string" && (r = ir.from(r)),
            i.mode !== "GCM" && r.length !== i.iv)
                throw new TypeError("invalid iv length " + r.length);
            return i.type === "stream" ? new g0(i.module,e,r) : i.type === "auth" ? new b0(i.module,e,r) : new Ti(i.module,e,r)
        }
        function M0(t, e) {
            var r = cs[t.toLowerCase()];
            if (!r)
                throw new TypeError("invalid suite type");
            var i = _0(e, !1, r.key, r.iv);
            return ls(t, i.key, i.iv)
        }
        H.createCipheriv = ls,
        H.createCipher = M0;
        var $a = {}
          , S0 = Co
          , ei = ge.Buffer
          , ps = Kf
          , E0 = Oo
          , vs = ln
          , A0 = mi
          , R0 = us
          , B0 = we;
        function Pi(t, e, r) {
            vs.call(this),
            this._cache = new Mn,
            this._last = void 0,
            this._cipher = new A0.AES(e),
            this._prev = ei.from(r),
            this._mode = t,
            this._autopadding = !0
        }
        B0(Pi, vs),
        Pi.prototype._update = function(t) {
            this._cache.add(t);
            for (var e, r, i = []; e = this._cache.get(this._autopadding); )
                r = this._mode.decrypt(this, e),
                i.push(r);
            return ei.concat(i)
        }
        ,
        Pi.prototype._final = function() {
            var t = this._cache.flush();
            if (this._autopadding)
                return I0(this._mode.decrypt(this, t));
            if (t)
                throw new Error("data not multiple of block length")
        }
        ,
        Pi.prototype.setAutoPadding = function(t) {
            return this._autopadding = !!t,
            this
        }
        ;
        function Mn() {
            this.cache = ei.allocUnsafe(0)
        }
        Mn.prototype.add = function(t) {
            this.cache = ei.concat([this.cache, t])
        }
        ,
        Mn.prototype.get = function(t) {
            var e;
            if (t) {
                if (this.cache.length > 16)
                    return e = this.cache.slice(0, 16),
                    this.cache = this.cache.slice(16),
                    e
            } else if (this.cache.length >= 16)
                return e = this.cache.slice(0, 16),
                this.cache = this.cache.slice(16),
                e;
            return null
        }
        ,
        Mn.prototype.flush = function() {
            if (this.cache.length)
                return this.cache
        }
        ;
        function I0(t) {
            var e = t[15];
            if (e < 1 || e > 16)
                throw new Error("unable to decrypt data");
            for (var r = -1; ++r < e; )
                if (t[r + (16 - e)] !== e)
                    throw new Error("unable to decrypt data");
            if (e !== 16)
                return t.slice(0, 16 - e)
        }
        function bs(t, e, r) {
            var i = ps[t.toLowerCase()];
            if (!i)
                throw new TypeError("invalid suite type");
            if (typeof r == "string" && (r = ei.from(r)),
            i.mode !== "GCM" && r.length !== i.iv)
                throw new TypeError("invalid iv length " + r.length);
            if (typeof e == "string" && (e = ei.from(e)),
            e.length !== i.key / 8)
                throw new TypeError("invalid key length " + e.length);
            return i.type === "stream" ? new E0(i.module,e,r,!0) : i.type === "auth" ? new S0(i.module,e,r,!0) : new Pi(i.module,e,r)
        }
        function T0(t, e) {
            var r = ps[t.toLowerCase()];
            if (!r)
                throw new TypeError("invalid suite type");
            var i = R0(e, !1, r.key, r.iv);
            return bs(t, i.key, i.iv)
        }
        $a.createDecipher = T0,
        $a.createDecipheriv = bs,
        D.getCiphers = void 0;
        var gs = H
          , ys = $a
          , P0 = Wf;
        function L0() {
            return Object.keys(P0)
        }
        var k0 = gs.createCipher
          , C0 = gs.createCipheriv
          , $0 = ys.createDecipher
          , O0 = ys.createDecipheriv;
        D.getCiphers = L0;
        var _s = {}
          , D0 = "elliptic"
          , x0 = "6.5.4"
          , N0 = "EC cryptography"
          , q0 = "lib/elliptic.js"
          , z0 = ["lib"]
          , U0 = {
            lint: "eslint lib test",
            "lint:fix": "npm run lint -- --fix",
            unit: "istanbul test _mocha --reporter=spec test/index.js",
            test: "npm run lint && npm run unit",
            version: "grunt dist && git add dist/"
        }
          , F0 = {
            type: "git",
            url: "git@github.com:indutny/elliptic"
        }
          , H0 = ["EC", "Elliptic", "curve", "Cryptography"]
          , j0 = "Fedor Indutny <fedor@indutny.com>"
          , W0 = "MIT"
          , Y0 = {
            url: "https://github.com/indutny/elliptic/issues"
        }
          , K0 = "https://github.com/indutny/elliptic"
          , V0 = {
            brfs: "^2.0.2",
            coveralls: "^3.1.0",
            eslint: "^7.6.0",
            grunt: "^1.2.1",
            "grunt-browserify": "^5.3.0",
            "grunt-cli": "^1.3.2",
            "grunt-contrib-connect": "^3.0.0",
            "grunt-contrib-copy": "^1.0.0",
            "grunt-contrib-uglify": "^5.0.0",
            "grunt-mocha-istanbul": "^5.0.2",
            "grunt-saucelabs": "^9.0.1",
            istanbul: "^0.4.5",
            mocha: "^8.0.1"
        }
          , G0 = {
            "bn.js": "^4.11.9",
            brorand: "^1.1.0",
            "hash.js": "^1.0.0",
            "hmac-drbg": "^1.0.1",
            inherits: "^2.0.4",
            "minimalistic-assert": "^1.0.1",
            "minimalistic-crypto-utils": "^1.0.1"
        }
          , J0 = {
            name: D0,
            version: x0,
            description: N0,
            main: q0,
            files: z0,
            scripts: U0,
            repository: F0,
            keywords: H0,
            author: j0,
            license: W0,
            bugs: Y0,
            homepage: K0,
            devDependencies: V0,
            dependencies: G0
        }
          , It = {}
          , ms = {
            exports: {}
        };
        (function(t) {
            (function(e, r) {
                function i(M, o) {
                    if (!M)
                        throw new Error(o || "Assertion failed")
                }
                function n(M, o) {
                    M.super_ = o;
                    var u = function() {};
                    u.prototype = o.prototype,
                    M.prototype = new u,
                    M.prototype.constructor = M
                }
                function a(M, o, u) {
                    if (a.isBN(M))
                        return M;
                    this.negative = 0,
                    this.words = null,
                    this.length = 0,
                    this.red = null,
                    M !== null && ((o === "le" || o === "be") && (u = o,
                    o = 10),
                    this._init(M || 0, o || 10, u || "be"))
                }
                typeof e == "object" ? e.exports = a : r.BN = a,
                a.BN = a,
                a.wordSize = 26;
                var f;
                try {
                    typeof window < "u" && typeof window.Buffer < "u" ? f = window.Buffer : f = Kr.Buffer
                } catch {}
                a.isBN = function(o) {
                    return o instanceof a ? !0 : o !== null && typeof o == "object" && o.constructor.wordSize === a.wordSize && Array.isArray(o.words)
                }
                ,
                a.max = function(o, u) {
                    return o.cmp(u) > 0 ? o : u
                }
                ,
                a.min = function(o, u) {
                    return o.cmp(u) < 0 ? o : u
                }
                ,
                a.prototype._init = function(o, u, d) {
                    if (typeof o == "number")
                        return this._initNumber(o, u, d);
                    if (typeof o == "object")
                        return this._initArray(o, u, d);
                    u === "hex" && (u = 16),
                    i(u === (u | 0) && u >= 2 && u <= 36),
                    o = o.toString().replace(/\s+/g, "");
                    var p = 0;
                    o[0] === "-" && (p++,
                    this.negative = 1),
                    p < o.length && (u === 16 ? this._parseHex(o, p, d) : (this._parseBase(o, u, p),
                    d === "le" && this._initArray(this.toArray(), u, d)))
                }
                ,
                a.prototype._initNumber = function(o, u, d) {
                    o < 0 && (this.negative = 1,
                    o = -o),
                    o < 67108864 ? (this.words = [o & 67108863],
                    this.length = 1) : o < 4503599627370496 ? (this.words = [o & 67108863, o / 67108864 & 67108863],
                    this.length = 2) : (i(o < 9007199254740992),
                    this.words = [o & 67108863, o / 67108864 & 67108863, 1],
                    this.length = 3),
                    d === "le" && this._initArray(this.toArray(), u, d)
                }
                ,
                a.prototype._initArray = function(o, u, d) {
                    if (i(typeof o.length == "number"),
                    o.length <= 0)
                        return this.words = [0],
                        this.length = 1,
                        this;
                    this.length = Math.ceil(o.length / 3),
                    this.words = new Array(this.length);
                    for (var p = 0; p < this.length; p++)
                        this.words[p] = 0;
                    var m, S, B = 0;
                    if (d === "be")
                        for (p = o.length - 1,
                        m = 0; p >= 0; p -= 3)
                            S = o[p] | o[p - 1] << 8 | o[p - 2] << 16,
                            this.words[m] |= S << B & 67108863,
                            this.words[m + 1] = S >>> 26 - B & 67108863,
                            B += 24,
                            B >= 26 && (B -= 26,
                            m++);
                    else if (d === "le")
                        for (p = 0,
                        m = 0; p < o.length; p += 3)
                            S = o[p] | o[p + 1] << 8 | o[p + 2] << 16,
                            this.words[m] |= S << B & 67108863,
                            this.words[m + 1] = S >>> 26 - B & 67108863,
                            B += 24,
                            B >= 26 && (B -= 26,
                            m++);
                    return this.strip()
                }
                ;
                function h(M, o) {
                    var u = M.charCodeAt(o);
                    return u >= 65 && u <= 70 ? u - 55 : u >= 97 && u <= 102 ? u - 87 : u - 48 & 15
                }
                function c(M, o, u) {
                    var d = h(M, u);
                    return u - 1 >= o && (d |= h(M, u - 1) << 4),
                    d
                }
                a.prototype._parseHex = function(o, u, d) {
                    this.length = Math.ceil((o.length - u) / 6),
                    this.words = new Array(this.length);
                    for (var p = 0; p < this.length; p++)
                        this.words[p] = 0;
                    var m = 0, S = 0, B;
                    if (d === "be")
                        for (p = o.length - 1; p >= u; p -= 2)
                            B = c(o, u, p) << m,
                            this.words[S] |= B & 67108863,
                            m >= 18 ? (m -= 18,
                            S += 1,
                            this.words[S] |= B >>> 26) : m += 8;
                    else {
                        var b = o.length - u;
                        for (p = b % 2 === 0 ? u + 1 : u; p < o.length; p += 2)
                            B = c(o, u, p) << m,
                            this.words[S] |= B & 67108863,
                            m >= 18 ? (m -= 18,
                            S += 1,
                            this.words[S] |= B >>> 26) : m += 8
                    }
                    this.strip()
                }
                ;
                function l(M, o, u, d) {
                    for (var p = 0, m = Math.min(M.length, u), S = o; S < m; S++) {
                        var B = M.charCodeAt(S) - 48;
                        p *= d,
                        B >= 49 ? p += B - 49 + 10 : B >= 17 ? p += B - 17 + 10 : p += B
                    }
                    return p
                }
                a.prototype._parseBase = function(o, u, d) {
                    this.words = [0],
                    this.length = 1;
                    for (var p = 0, m = 1; m <= 67108863; m *= u)
                        p++;
                    p--,
                    m = m / u | 0;
                    for (var S = o.length - d, B = S % p, b = Math.min(S, S - B) + d, s = 0, _ = d; _ < b; _ += p)
                        s = l(o, _, _ + p, u),
                        this.imuln(m),
                        this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
                    if (B !== 0) {
                        var G = 1;
                        for (s = l(o, _, o.length, u),
                        _ = 0; _ < B; _++)
                            G *= u;
                        this.imuln(G),
                        this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s)
                    }
                    this.strip()
                }
                ,
                a.prototype.copy = function(o) {
                    o.words = new Array(this.length);
                    for (var u = 0; u < this.length; u++)
                        o.words[u] = this.words[u];
                    o.length = this.length,
                    o.negative = this.negative,
                    o.red = this.red
                }
                ,
                a.prototype.clone = function() {
                    var o = new a(null);
                    return this.copy(o),
                    o
                }
                ,
                a.prototype._expand = function(o) {
                    for (; this.length < o; )
                        this.words[this.length++] = 0;
                    return this
                }
                ,
                a.prototype.strip = function() {
                    for (; this.length > 1 && this.words[this.length - 1] === 0; )
                        this.length--;
                    return this._normSign()
                }
                ,
                a.prototype._normSign = function() {
                    return this.length === 1 && this.words[0] === 0 && (this.negative = 0),
                    this
                }
                ,
                a.prototype.inspect = function() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                ;
                var v = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
                  , y = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
                  , E = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                a.prototype.toString = function(o, u) {
                    o = o || 10,
                    u = u | 0 || 1;
                    var d;
                    if (o === 16 || o === "hex") {
                        d = "";
                        for (var p = 0, m = 0, S = 0; S < this.length; S++) {
                            var B = this.words[S]
                              , b = ((B << p | m) & 16777215).toString(16);
                            m = B >>> 24 - p & 16777215,
                            m !== 0 || S !== this.length - 1 ? d = v[6 - b.length] + b + d : d = b + d,
                            p += 2,
                            p >= 26 && (p -= 26,
                            S--)
                        }
                        for (m !== 0 && (d = m.toString(16) + d); d.length % u !== 0; )
                            d = "0" + d;
                        return this.negative !== 0 && (d = "-" + d),
                        d
                    }
                    if (o === (o | 0) && o >= 2 && o <= 36) {
                        var s = y[o]
                          , _ = E[o];
                        d = "";
                        var G = this.clone();
                        for (G.negative = 0; !G.isZero(); ) {
                            var K = G.modn(_).toString(o);
                            G = G.idivn(_),
                            G.isZero() ? d = K + d : d = v[s - K.length] + K + d
                        }
                        for (this.isZero() && (d = "0" + d); d.length % u !== 0; )
                            d = "0" + d;
                        return this.negative !== 0 && (d = "-" + d),
                        d
                    }
                    i(!1, "Base should be between 2 and 36")
                }
                ,
                a.prototype.toNumber = function() {
                    var o = this.words[0];
                    return this.length === 2 ? o += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? o += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"),
                    this.negative !== 0 ? -o : o
                }
                ,
                a.prototype.toJSON = function() {
                    return this.toString(16)
                }
                ,
                a.prototype.toBuffer = function(o, u) {
                    return i(typeof f < "u"),
                    this.toArrayLike(f, o, u)
                }
                ,
                a.prototype.toArray = function(o, u) {
                    return this.toArrayLike(Array, o, u)
                }
                ,
                a.prototype.toArrayLike = function(o, u, d) {
                    var p = this.byteLength()
                      , m = d || Math.max(1, p);
                    i(p <= m, "byte array longer than desired length"),
                    i(m > 0, "Requested array length <= 0"),
                    this.strip();
                    var S = u === "le", B = new o(m), b, s, _ = this.clone();
                    if (S) {
                        for (s = 0; !_.isZero(); s++)
                            b = _.andln(255),
                            _.iushrn(8),
                            B[s] = b;
                        for (; s < m; s++)
                            B[s] = 0
                    } else {
                        for (s = 0; s < m - p; s++)
                            B[s] = 0;
                        for (s = 0; !_.isZero(); s++)
                            b = _.andln(255),
                            _.iushrn(8),
                            B[m - s - 1] = b
                    }
                    return B
                }
                ,
                Math.clz32 ? a.prototype._countBits = function(o) {
                    return 32 - Math.clz32(o)
                }
                : a.prototype._countBits = function(o) {
                    var u = o
                      , d = 0;
                    return u >= 4096 && (d += 13,
                    u >>>= 13),
                    u >= 64 && (d += 7,
                    u >>>= 7),
                    u >= 8 && (d += 4,
                    u >>>= 4),
                    u >= 2 && (d += 2,
                    u >>>= 2),
                    d + u
                }
                ,
                a.prototype._zeroBits = function(o) {
                    if (o === 0)
                        return 26;
                    var u = o
                      , d = 0;
                    return u & 8191 || (d += 13,
                    u >>>= 13),
                    u & 127 || (d += 7,
                    u >>>= 7),
                    u & 15 || (d += 4,
                    u >>>= 4),
                    u & 3 || (d += 2,
                    u >>>= 2),
                    u & 1 || d++,
                    d
                }
                ,
                a.prototype.bitLength = function() {
                    var o = this.words[this.length - 1]
                      , u = this._countBits(o);
                    return (this.length - 1) * 26 + u
                }
                ;
                function T(M) {
                    for (var o = new Array(M.bitLength()), u = 0; u < o.length; u++) {
                        var d = u / 26 | 0
                          , p = u % 26;
                        o[u] = (M.words[d] & 1 << p) >>> p
                    }
                    return o
                }
                a.prototype.zeroBits = function() {
                    if (this.isZero())
                        return 0;
                    for (var o = 0, u = 0; u < this.length; u++) {
                        var d = this._zeroBits(this.words[u]);
                        if (o += d,
                        d !== 26)
                            break
                    }
                    return o
                }
                ,
                a.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }
                ,
                a.prototype.toTwos = function(o) {
                    return this.negative !== 0 ? this.abs().inotn(o).iaddn(1) : this.clone()
                }
                ,
                a.prototype.fromTwos = function(o) {
                    return this.testn(o - 1) ? this.notn(o).iaddn(1).ineg() : this.clone()
                }
                ,
                a.prototype.isNeg = function() {
                    return this.negative !== 0
                }
                ,
                a.prototype.neg = function() {
                    return this.clone().ineg()
                }
                ,
                a.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1),
                    this
                }
                ,
                a.prototype.iuor = function(o) {
                    for (; this.length < o.length; )
                        this.words[this.length++] = 0;
                    for (var u = 0; u < o.length; u++)
                        this.words[u] = this.words[u] | o.words[u];
                    return this.strip()
                }
                ,
                a.prototype.ior = function(o) {
                    return i((this.negative | o.negative) === 0),
                    this.iuor(o)
                }
                ,
                a.prototype.or = function(o) {
                    return this.length > o.length ? this.clone().ior(o) : o.clone().ior(this)
                }
                ,
                a.prototype.uor = function(o) {
                    return this.length > o.length ? this.clone().iuor(o) : o.clone().iuor(this)
                }
                ,
                a.prototype.iuand = function(o) {
                    var u;
                    this.length > o.length ? u = o : u = this;
                    for (var d = 0; d < u.length; d++)
                        this.words[d] = this.words[d] & o.words[d];
                    return this.length = u.length,
                    this.strip()
                }
                ,
                a.prototype.iand = function(o) {
                    return i((this.negative | o.negative) === 0),
                    this.iuand(o)
                }
                ,
                a.prototype.and = function(o) {
                    return this.length > o.length ? this.clone().iand(o) : o.clone().iand(this)
                }
                ,
                a.prototype.uand = function(o) {
                    return this.length > o.length ? this.clone().iuand(o) : o.clone().iuand(this)
                }
                ,
                a.prototype.iuxor = function(o) {
                    var u, d;
                    this.length > o.length ? (u = this,
                    d = o) : (u = o,
                    d = this);
                    for (var p = 0; p < d.length; p++)
                        this.words[p] = u.words[p] ^ d.words[p];
                    if (this !== u)
                        for (; p < u.length; p++)
                            this.words[p] = u.words[p];
                    return this.length = u.length,
                    this.strip()
                }
                ,
                a.prototype.ixor = function(o) {
                    return i((this.negative | o.negative) === 0),
                    this.iuxor(o)
                }
                ,
                a.prototype.xor = function(o) {
                    return this.length > o.length ? this.clone().ixor(o) : o.clone().ixor(this)
                }
                ,
                a.prototype.uxor = function(o) {
                    return this.length > o.length ? this.clone().iuxor(o) : o.clone().iuxor(this)
                }
                ,
                a.prototype.inotn = function(o) {
                    i(typeof o == "number" && o >= 0);
                    var u = Math.ceil(o / 26) | 0
                      , d = o % 26;
                    this._expand(u),
                    d > 0 && u--;
                    for (var p = 0; p < u; p++)
                        this.words[p] = ~this.words[p] & 67108863;
                    return d > 0 && (this.words[p] = ~this.words[p] & 67108863 >> 26 - d),
                    this.strip()
                }
                ,
                a.prototype.notn = function(o) {
                    return this.clone().inotn(o)
                }
                ,
                a.prototype.setn = function(o, u) {
                    i(typeof o == "number" && o >= 0);
                    var d = o / 26 | 0
                      , p = o % 26;
                    return this._expand(d + 1),
                    u ? this.words[d] = this.words[d] | 1 << p : this.words[d] = this.words[d] & ~(1 << p),
                    this.strip()
                }
                ,
                a.prototype.iadd = function(o) {
                    var u;
                    if (this.negative !== 0 && o.negative === 0)
                        return this.negative = 0,
                        u = this.isub(o),
                        this.negative ^= 1,
                        this._normSign();
                    if (this.negative === 0 && o.negative !== 0)
                        return o.negative = 0,
                        u = this.isub(o),
                        o.negative = 1,
                        u._normSign();
                    var d, p;
                    this.length > o.length ? (d = this,
                    p = o) : (d = o,
                    p = this);
                    for (var m = 0, S = 0; S < p.length; S++)
                        u = (d.words[S] | 0) + (p.words[S] | 0) + m,
                        this.words[S] = u & 67108863,
                        m = u >>> 26;
                    for (; m !== 0 && S < d.length; S++)
                        u = (d.words[S] | 0) + m,
                        this.words[S] = u & 67108863,
                        m = u >>> 26;
                    if (this.length = d.length,
                    m !== 0)
                        this.words[this.length] = m,
                        this.length++;
                    else if (d !== this)
                        for (; S < d.length; S++)
                            this.words[S] = d.words[S];
                    return this
                }
                ,
                a.prototype.add = function(o) {
                    var u;
                    return o.negative !== 0 && this.negative === 0 ? (o.negative = 0,
                    u = this.sub(o),
                    o.negative ^= 1,
                    u) : o.negative === 0 && this.negative !== 0 ? (this.negative = 0,
                    u = o.sub(this),
                    this.negative = 1,
                    u) : this.length > o.length ? this.clone().iadd(o) : o.clone().iadd(this)
                }
                ,
                a.prototype.isub = function(o) {
                    if (o.negative !== 0) {
                        o.negative = 0;
                        var u = this.iadd(o);
                        return o.negative = 1,
                        u._normSign()
                    } else if (this.negative !== 0)
                        return this.negative = 0,
                        this.iadd(o),
                        this.negative = 1,
                        this._normSign();
                    var d = this.cmp(o);
                    if (d === 0)
                        return this.negative = 0,
                        this.length = 1,
                        this.words[0] = 0,
                        this;
                    var p, m;
                    d > 0 ? (p = this,
                    m = o) : (p = o,
                    m = this);
                    for (var S = 0, B = 0; B < m.length; B++)
                        u = (p.words[B] | 0) - (m.words[B] | 0) + S,
                        S = u >> 26,
                        this.words[B] = u & 67108863;
                    for (; S !== 0 && B < p.length; B++)
                        u = (p.words[B] | 0) + S,
                        S = u >> 26,
                        this.words[B] = u & 67108863;
                    if (S === 0 && B < p.length && p !== this)
                        for (; B < p.length; B++)
                            this.words[B] = p.words[B];
                    return this.length = Math.max(this.length, B),
                    p !== this && (this.negative = 1),
                    this.strip()
                }
                ,
                a.prototype.sub = function(o) {
                    return this.clone().isub(o)
                }
                ;
                function I(M, o, u) {
                    u.negative = o.negative ^ M.negative;
                    var d = M.length + o.length | 0;
                    u.length = d,
                    d = d - 1 | 0;
                    var p = M.words[0] | 0
                      , m = o.words[0] | 0
                      , S = p * m
                      , B = S & 67108863
                      , b = S / 67108864 | 0;
                    u.words[0] = B;
                    for (var s = 1; s < d; s++) {
                        for (var _ = b >>> 26, G = b & 67108863, K = Math.min(s, o.length - 1), X = Math.max(0, s - M.length + 1); X <= K; X++) {
                            var re = s - X | 0;
                            p = M.words[re] | 0,
                            m = o.words[X] | 0,
                            S = p * m + G,
                            _ += S / 67108864 | 0,
                            G = S & 67108863
                        }
                        u.words[s] = G | 0,
                        b = _ | 0
                    }
                    return b !== 0 ? u.words[s] = b | 0 : u.length--,
                    u.strip()
                }
                var P = function(o, u, d) {
                    var p = o.words, m = u.words, S = d.words, B = 0, b, s, _, G = p[0] | 0, K = G & 8191, X = G >>> 13, re = p[1] | 0, A = re & 8191, R = re >>> 13, z = p[2] | 0, j = z & 8191, Z = z >>> 13, w = p[3] | 0, g = w & 8191, $ = w >>> 13, J = p[4] | 0, ne = J & 8191, ee = J >>> 13, ue = p[5] | 0, de = ue & 8191, be = ue >>> 13, Yi = p[6] | 0, Re = Yi & 8191, Me = Yi >>> 13, li = p[7] | 0, ye = li & 8191, _e = li >>> 13, gr = p[8] | 0, le = gr & 8191, pe = gr >>> 13, $h = p[9] | 0, Ie = $h & 8191, Te = $h >>> 13, Oh = m[0] | 0, Pe = Oh & 8191, Le = Oh >>> 13, Dh = m[1] | 0, ke = Dh & 8191, Ce = Dh >>> 13, xh = m[2] | 0, $e = xh & 8191, Oe = xh >>> 13, Nh = m[3] | 0, De = Nh & 8191, xe = Nh >>> 13, qh = m[4] | 0, Ne = qh & 8191, qe = qh >>> 13, zh = m[5] | 0, ze = zh & 8191, Ue = zh >>> 13, Uh = m[6] | 0, Fe = Uh & 8191, He = Uh >>> 13, Fh = m[7] | 0, je = Fh & 8191, We = Fh >>> 13, Hh = m[8] | 0, Ye = Hh & 8191, Ke = Hh >>> 13, jh = m[9] | 0, Ve = jh & 8191, Ge = jh >>> 13;
                    d.negative = o.negative ^ u.negative,
                    d.length = 19,
                    b = Math.imul(K, Pe),
                    s = Math.imul(K, Le),
                    s = s + Math.imul(X, Pe) | 0,
                    _ = Math.imul(X, Le);
                    var nf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (nf >>> 26) | 0,
                    nf &= 67108863,
                    b = Math.imul(A, Pe),
                    s = Math.imul(A, Le),
                    s = s + Math.imul(R, Pe) | 0,
                    _ = Math.imul(R, Le),
                    b = b + Math.imul(K, ke) | 0,
                    s = s + Math.imul(K, Ce) | 0,
                    s = s + Math.imul(X, ke) | 0,
                    _ = _ + Math.imul(X, Ce) | 0;
                    var af = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (af >>> 26) | 0,
                    af &= 67108863,
                    b = Math.imul(j, Pe),
                    s = Math.imul(j, Le),
                    s = s + Math.imul(Z, Pe) | 0,
                    _ = Math.imul(Z, Le),
                    b = b + Math.imul(A, ke) | 0,
                    s = s + Math.imul(A, Ce) | 0,
                    s = s + Math.imul(R, ke) | 0,
                    _ = _ + Math.imul(R, Ce) | 0,
                    b = b + Math.imul(K, $e) | 0,
                    s = s + Math.imul(K, Oe) | 0,
                    s = s + Math.imul(X, $e) | 0,
                    _ = _ + Math.imul(X, Oe) | 0;
                    var ff = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (ff >>> 26) | 0,
                    ff &= 67108863,
                    b = Math.imul(g, Pe),
                    s = Math.imul(g, Le),
                    s = s + Math.imul($, Pe) | 0,
                    _ = Math.imul($, Le),
                    b = b + Math.imul(j, ke) | 0,
                    s = s + Math.imul(j, Ce) | 0,
                    s = s + Math.imul(Z, ke) | 0,
                    _ = _ + Math.imul(Z, Ce) | 0,
                    b = b + Math.imul(A, $e) | 0,
                    s = s + Math.imul(A, Oe) | 0,
                    s = s + Math.imul(R, $e) | 0,
                    _ = _ + Math.imul(R, Oe) | 0,
                    b = b + Math.imul(K, De) | 0,
                    s = s + Math.imul(K, xe) | 0,
                    s = s + Math.imul(X, De) | 0,
                    _ = _ + Math.imul(X, xe) | 0;
                    var of = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (of >>> 26) | 0,
                    of &= 67108863,
                    b = Math.imul(ne, Pe),
                    s = Math.imul(ne, Le),
                    s = s + Math.imul(ee, Pe) | 0,
                    _ = Math.imul(ee, Le),
                    b = b + Math.imul(g, ke) | 0,
                    s = s + Math.imul(g, Ce) | 0,
                    s = s + Math.imul($, ke) | 0,
                    _ = _ + Math.imul($, Ce) | 0,
                    b = b + Math.imul(j, $e) | 0,
                    s = s + Math.imul(j, Oe) | 0,
                    s = s + Math.imul(Z, $e) | 0,
                    _ = _ + Math.imul(Z, Oe) | 0,
                    b = b + Math.imul(A, De) | 0,
                    s = s + Math.imul(A, xe) | 0,
                    s = s + Math.imul(R, De) | 0,
                    _ = _ + Math.imul(R, xe) | 0,
                    b = b + Math.imul(K, Ne) | 0,
                    s = s + Math.imul(K, qe) | 0,
                    s = s + Math.imul(X, Ne) | 0,
                    _ = _ + Math.imul(X, qe) | 0;
                    var sf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (sf >>> 26) | 0,
                    sf &= 67108863,
                    b = Math.imul(de, Pe),
                    s = Math.imul(de, Le),
                    s = s + Math.imul(be, Pe) | 0,
                    _ = Math.imul(be, Le),
                    b = b + Math.imul(ne, ke) | 0,
                    s = s + Math.imul(ne, Ce) | 0,
                    s = s + Math.imul(ee, ke) | 0,
                    _ = _ + Math.imul(ee, Ce) | 0,
                    b = b + Math.imul(g, $e) | 0,
                    s = s + Math.imul(g, Oe) | 0,
                    s = s + Math.imul($, $e) | 0,
                    _ = _ + Math.imul($, Oe) | 0,
                    b = b + Math.imul(j, De) | 0,
                    s = s + Math.imul(j, xe) | 0,
                    s = s + Math.imul(Z, De) | 0,
                    _ = _ + Math.imul(Z, xe) | 0,
                    b = b + Math.imul(A, Ne) | 0,
                    s = s + Math.imul(A, qe) | 0,
                    s = s + Math.imul(R, Ne) | 0,
                    _ = _ + Math.imul(R, qe) | 0,
                    b = b + Math.imul(K, ze) | 0,
                    s = s + Math.imul(K, Ue) | 0,
                    s = s + Math.imul(X, ze) | 0,
                    _ = _ + Math.imul(X, Ue) | 0;
                    var hf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (hf >>> 26) | 0,
                    hf &= 67108863,
                    b = Math.imul(Re, Pe),
                    s = Math.imul(Re, Le),
                    s = s + Math.imul(Me, Pe) | 0,
                    _ = Math.imul(Me, Le),
                    b = b + Math.imul(de, ke) | 0,
                    s = s + Math.imul(de, Ce) | 0,
                    s = s + Math.imul(be, ke) | 0,
                    _ = _ + Math.imul(be, Ce) | 0,
                    b = b + Math.imul(ne, $e) | 0,
                    s = s + Math.imul(ne, Oe) | 0,
                    s = s + Math.imul(ee, $e) | 0,
                    _ = _ + Math.imul(ee, Oe) | 0,
                    b = b + Math.imul(g, De) | 0,
                    s = s + Math.imul(g, xe) | 0,
                    s = s + Math.imul($, De) | 0,
                    _ = _ + Math.imul($, xe) | 0,
                    b = b + Math.imul(j, Ne) | 0,
                    s = s + Math.imul(j, qe) | 0,
                    s = s + Math.imul(Z, Ne) | 0,
                    _ = _ + Math.imul(Z, qe) | 0,
                    b = b + Math.imul(A, ze) | 0,
                    s = s + Math.imul(A, Ue) | 0,
                    s = s + Math.imul(R, ze) | 0,
                    _ = _ + Math.imul(R, Ue) | 0,
                    b = b + Math.imul(K, Fe) | 0,
                    s = s + Math.imul(K, He) | 0,
                    s = s + Math.imul(X, Fe) | 0,
                    _ = _ + Math.imul(X, He) | 0;
                    var uf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (uf >>> 26) | 0,
                    uf &= 67108863,
                    b = Math.imul(ye, Pe),
                    s = Math.imul(ye, Le),
                    s = s + Math.imul(_e, Pe) | 0,
                    _ = Math.imul(_e, Le),
                    b = b + Math.imul(Re, ke) | 0,
                    s = s + Math.imul(Re, Ce) | 0,
                    s = s + Math.imul(Me, ke) | 0,
                    _ = _ + Math.imul(Me, Ce) | 0,
                    b = b + Math.imul(de, $e) | 0,
                    s = s + Math.imul(de, Oe) | 0,
                    s = s + Math.imul(be, $e) | 0,
                    _ = _ + Math.imul(be, Oe) | 0,
                    b = b + Math.imul(ne, De) | 0,
                    s = s + Math.imul(ne, xe) | 0,
                    s = s + Math.imul(ee, De) | 0,
                    _ = _ + Math.imul(ee, xe) | 0,
                    b = b + Math.imul(g, Ne) | 0,
                    s = s + Math.imul(g, qe) | 0,
                    s = s + Math.imul($, Ne) | 0,
                    _ = _ + Math.imul($, qe) | 0,
                    b = b + Math.imul(j, ze) | 0,
                    s = s + Math.imul(j, Ue) | 0,
                    s = s + Math.imul(Z, ze) | 0,
                    _ = _ + Math.imul(Z, Ue) | 0,
                    b = b + Math.imul(A, Fe) | 0,
                    s = s + Math.imul(A, He) | 0,
                    s = s + Math.imul(R, Fe) | 0,
                    _ = _ + Math.imul(R, He) | 0,
                    b = b + Math.imul(K, je) | 0,
                    s = s + Math.imul(K, We) | 0,
                    s = s + Math.imul(X, je) | 0,
                    _ = _ + Math.imul(X, We) | 0;
                    var cf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (cf >>> 26) | 0,
                    cf &= 67108863,
                    b = Math.imul(le, Pe),
                    s = Math.imul(le, Le),
                    s = s + Math.imul(pe, Pe) | 0,
                    _ = Math.imul(pe, Le),
                    b = b + Math.imul(ye, ke) | 0,
                    s = s + Math.imul(ye, Ce) | 0,
                    s = s + Math.imul(_e, ke) | 0,
                    _ = _ + Math.imul(_e, Ce) | 0,
                    b = b + Math.imul(Re, $e) | 0,
                    s = s + Math.imul(Re, Oe) | 0,
                    s = s + Math.imul(Me, $e) | 0,
                    _ = _ + Math.imul(Me, Oe) | 0,
                    b = b + Math.imul(de, De) | 0,
                    s = s + Math.imul(de, xe) | 0,
                    s = s + Math.imul(be, De) | 0,
                    _ = _ + Math.imul(be, xe) | 0,
                    b = b + Math.imul(ne, Ne) | 0,
                    s = s + Math.imul(ne, qe) | 0,
                    s = s + Math.imul(ee, Ne) | 0,
                    _ = _ + Math.imul(ee, qe) | 0,
                    b = b + Math.imul(g, ze) | 0,
                    s = s + Math.imul(g, Ue) | 0,
                    s = s + Math.imul($, ze) | 0,
                    _ = _ + Math.imul($, Ue) | 0,
                    b = b + Math.imul(j, Fe) | 0,
                    s = s + Math.imul(j, He) | 0,
                    s = s + Math.imul(Z, Fe) | 0,
                    _ = _ + Math.imul(Z, He) | 0,
                    b = b + Math.imul(A, je) | 0,
                    s = s + Math.imul(A, We) | 0,
                    s = s + Math.imul(R, je) | 0,
                    _ = _ + Math.imul(R, We) | 0,
                    b = b + Math.imul(K, Ye) | 0,
                    s = s + Math.imul(K, Ke) | 0,
                    s = s + Math.imul(X, Ye) | 0,
                    _ = _ + Math.imul(X, Ke) | 0;
                    var df = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (df >>> 26) | 0,
                    df &= 67108863,
                    b = Math.imul(Ie, Pe),
                    s = Math.imul(Ie, Le),
                    s = s + Math.imul(Te, Pe) | 0,
                    _ = Math.imul(Te, Le),
                    b = b + Math.imul(le, ke) | 0,
                    s = s + Math.imul(le, Ce) | 0,
                    s = s + Math.imul(pe, ke) | 0,
                    _ = _ + Math.imul(pe, Ce) | 0,
                    b = b + Math.imul(ye, $e) | 0,
                    s = s + Math.imul(ye, Oe) | 0,
                    s = s + Math.imul(_e, $e) | 0,
                    _ = _ + Math.imul(_e, Oe) | 0,
                    b = b + Math.imul(Re, De) | 0,
                    s = s + Math.imul(Re, xe) | 0,
                    s = s + Math.imul(Me, De) | 0,
                    _ = _ + Math.imul(Me, xe) | 0,
                    b = b + Math.imul(de, Ne) | 0,
                    s = s + Math.imul(de, qe) | 0,
                    s = s + Math.imul(be, Ne) | 0,
                    _ = _ + Math.imul(be, qe) | 0,
                    b = b + Math.imul(ne, ze) | 0,
                    s = s + Math.imul(ne, Ue) | 0,
                    s = s + Math.imul(ee, ze) | 0,
                    _ = _ + Math.imul(ee, Ue) | 0,
                    b = b + Math.imul(g, Fe) | 0,
                    s = s + Math.imul(g, He) | 0,
                    s = s + Math.imul($, Fe) | 0,
                    _ = _ + Math.imul($, He) | 0,
                    b = b + Math.imul(j, je) | 0,
                    s = s + Math.imul(j, We) | 0,
                    s = s + Math.imul(Z, je) | 0,
                    _ = _ + Math.imul(Z, We) | 0,
                    b = b + Math.imul(A, Ye) | 0,
                    s = s + Math.imul(A, Ke) | 0,
                    s = s + Math.imul(R, Ye) | 0,
                    _ = _ + Math.imul(R, Ke) | 0,
                    b = b + Math.imul(K, Ve) | 0,
                    s = s + Math.imul(K, Ge) | 0,
                    s = s + Math.imul(X, Ve) | 0,
                    _ = _ + Math.imul(X, Ge) | 0;
                    var lf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (lf >>> 26) | 0,
                    lf &= 67108863,
                    b = Math.imul(Ie, ke),
                    s = Math.imul(Ie, Ce),
                    s = s + Math.imul(Te, ke) | 0,
                    _ = Math.imul(Te, Ce),
                    b = b + Math.imul(le, $e) | 0,
                    s = s + Math.imul(le, Oe) | 0,
                    s = s + Math.imul(pe, $e) | 0,
                    _ = _ + Math.imul(pe, Oe) | 0,
                    b = b + Math.imul(ye, De) | 0,
                    s = s + Math.imul(ye, xe) | 0,
                    s = s + Math.imul(_e, De) | 0,
                    _ = _ + Math.imul(_e, xe) | 0,
                    b = b + Math.imul(Re, Ne) | 0,
                    s = s + Math.imul(Re, qe) | 0,
                    s = s + Math.imul(Me, Ne) | 0,
                    _ = _ + Math.imul(Me, qe) | 0,
                    b = b + Math.imul(de, ze) | 0,
                    s = s + Math.imul(de, Ue) | 0,
                    s = s + Math.imul(be, ze) | 0,
                    _ = _ + Math.imul(be, Ue) | 0,
                    b = b + Math.imul(ne, Fe) | 0,
                    s = s + Math.imul(ne, He) | 0,
                    s = s + Math.imul(ee, Fe) | 0,
                    _ = _ + Math.imul(ee, He) | 0,
                    b = b + Math.imul(g, je) | 0,
                    s = s + Math.imul(g, We) | 0,
                    s = s + Math.imul($, je) | 0,
                    _ = _ + Math.imul($, We) | 0,
                    b = b + Math.imul(j, Ye) | 0,
                    s = s + Math.imul(j, Ke) | 0,
                    s = s + Math.imul(Z, Ye) | 0,
                    _ = _ + Math.imul(Z, Ke) | 0,
                    b = b + Math.imul(A, Ve) | 0,
                    s = s + Math.imul(A, Ge) | 0,
                    s = s + Math.imul(R, Ve) | 0,
                    _ = _ + Math.imul(R, Ge) | 0;
                    var pf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (pf >>> 26) | 0,
                    pf &= 67108863,
                    b = Math.imul(Ie, $e),
                    s = Math.imul(Ie, Oe),
                    s = s + Math.imul(Te, $e) | 0,
                    _ = Math.imul(Te, Oe),
                    b = b + Math.imul(le, De) | 0,
                    s = s + Math.imul(le, xe) | 0,
                    s = s + Math.imul(pe, De) | 0,
                    _ = _ + Math.imul(pe, xe) | 0,
                    b = b + Math.imul(ye, Ne) | 0,
                    s = s + Math.imul(ye, qe) | 0,
                    s = s + Math.imul(_e, Ne) | 0,
                    _ = _ + Math.imul(_e, qe) | 0,
                    b = b + Math.imul(Re, ze) | 0,
                    s = s + Math.imul(Re, Ue) | 0,
                    s = s + Math.imul(Me, ze) | 0,
                    _ = _ + Math.imul(Me, Ue) | 0,
                    b = b + Math.imul(de, Fe) | 0,
                    s = s + Math.imul(de, He) | 0,
                    s = s + Math.imul(be, Fe) | 0,
                    _ = _ + Math.imul(be, He) | 0,
                    b = b + Math.imul(ne, je) | 0,
                    s = s + Math.imul(ne, We) | 0,
                    s = s + Math.imul(ee, je) | 0,
                    _ = _ + Math.imul(ee, We) | 0,
                    b = b + Math.imul(g, Ye) | 0,
                    s = s + Math.imul(g, Ke) | 0,
                    s = s + Math.imul($, Ye) | 0,
                    _ = _ + Math.imul($, Ke) | 0,
                    b = b + Math.imul(j, Ve) | 0,
                    s = s + Math.imul(j, Ge) | 0,
                    s = s + Math.imul(Z, Ve) | 0,
                    _ = _ + Math.imul(Z, Ge) | 0;
                    var vf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (vf >>> 26) | 0,
                    vf &= 67108863,
                    b = Math.imul(Ie, De),
                    s = Math.imul(Ie, xe),
                    s = s + Math.imul(Te, De) | 0,
                    _ = Math.imul(Te, xe),
                    b = b + Math.imul(le, Ne) | 0,
                    s = s + Math.imul(le, qe) | 0,
                    s = s + Math.imul(pe, Ne) | 0,
                    _ = _ + Math.imul(pe, qe) | 0,
                    b = b + Math.imul(ye, ze) | 0,
                    s = s + Math.imul(ye, Ue) | 0,
                    s = s + Math.imul(_e, ze) | 0,
                    _ = _ + Math.imul(_e, Ue) | 0,
                    b = b + Math.imul(Re, Fe) | 0,
                    s = s + Math.imul(Re, He) | 0,
                    s = s + Math.imul(Me, Fe) | 0,
                    _ = _ + Math.imul(Me, He) | 0,
                    b = b + Math.imul(de, je) | 0,
                    s = s + Math.imul(de, We) | 0,
                    s = s + Math.imul(be, je) | 0,
                    _ = _ + Math.imul(be, We) | 0,
                    b = b + Math.imul(ne, Ye) | 0,
                    s = s + Math.imul(ne, Ke) | 0,
                    s = s + Math.imul(ee, Ye) | 0,
                    _ = _ + Math.imul(ee, Ke) | 0,
                    b = b + Math.imul(g, Ve) | 0,
                    s = s + Math.imul(g, Ge) | 0,
                    s = s + Math.imul($, Ve) | 0,
                    _ = _ + Math.imul($, Ge) | 0;
                    var bf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (bf >>> 26) | 0,
                    bf &= 67108863,
                    b = Math.imul(Ie, Ne),
                    s = Math.imul(Ie, qe),
                    s = s + Math.imul(Te, Ne) | 0,
                    _ = Math.imul(Te, qe),
                    b = b + Math.imul(le, ze) | 0,
                    s = s + Math.imul(le, Ue) | 0,
                    s = s + Math.imul(pe, ze) | 0,
                    _ = _ + Math.imul(pe, Ue) | 0,
                    b = b + Math.imul(ye, Fe) | 0,
                    s = s + Math.imul(ye, He) | 0,
                    s = s + Math.imul(_e, Fe) | 0,
                    _ = _ + Math.imul(_e, He) | 0,
                    b = b + Math.imul(Re, je) | 0,
                    s = s + Math.imul(Re, We) | 0,
                    s = s + Math.imul(Me, je) | 0,
                    _ = _ + Math.imul(Me, We) | 0,
                    b = b + Math.imul(de, Ye) | 0,
                    s = s + Math.imul(de, Ke) | 0,
                    s = s + Math.imul(be, Ye) | 0,
                    _ = _ + Math.imul(be, Ke) | 0,
                    b = b + Math.imul(ne, Ve) | 0,
                    s = s + Math.imul(ne, Ge) | 0,
                    s = s + Math.imul(ee, Ve) | 0,
                    _ = _ + Math.imul(ee, Ge) | 0;
                    var gf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (gf >>> 26) | 0,
                    gf &= 67108863,
                    b = Math.imul(Ie, ze),
                    s = Math.imul(Ie, Ue),
                    s = s + Math.imul(Te, ze) | 0,
                    _ = Math.imul(Te, Ue),
                    b = b + Math.imul(le, Fe) | 0,
                    s = s + Math.imul(le, He) | 0,
                    s = s + Math.imul(pe, Fe) | 0,
                    _ = _ + Math.imul(pe, He) | 0,
                    b = b + Math.imul(ye, je) | 0,
                    s = s + Math.imul(ye, We) | 0,
                    s = s + Math.imul(_e, je) | 0,
                    _ = _ + Math.imul(_e, We) | 0,
                    b = b + Math.imul(Re, Ye) | 0,
                    s = s + Math.imul(Re, Ke) | 0,
                    s = s + Math.imul(Me, Ye) | 0,
                    _ = _ + Math.imul(Me, Ke) | 0,
                    b = b + Math.imul(de, Ve) | 0,
                    s = s + Math.imul(de, Ge) | 0,
                    s = s + Math.imul(be, Ve) | 0,
                    _ = _ + Math.imul(be, Ge) | 0;
                    var yf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (yf >>> 26) | 0,
                    yf &= 67108863,
                    b = Math.imul(Ie, Fe),
                    s = Math.imul(Ie, He),
                    s = s + Math.imul(Te, Fe) | 0,
                    _ = Math.imul(Te, He),
                    b = b + Math.imul(le, je) | 0,
                    s = s + Math.imul(le, We) | 0,
                    s = s + Math.imul(pe, je) | 0,
                    _ = _ + Math.imul(pe, We) | 0,
                    b = b + Math.imul(ye, Ye) | 0,
                    s = s + Math.imul(ye, Ke) | 0,
                    s = s + Math.imul(_e, Ye) | 0,
                    _ = _ + Math.imul(_e, Ke) | 0,
                    b = b + Math.imul(Re, Ve) | 0,
                    s = s + Math.imul(Re, Ge) | 0,
                    s = s + Math.imul(Me, Ve) | 0,
                    _ = _ + Math.imul(Me, Ge) | 0;
                    var _f = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (_f >>> 26) | 0,
                    _f &= 67108863,
                    b = Math.imul(Ie, je),
                    s = Math.imul(Ie, We),
                    s = s + Math.imul(Te, je) | 0,
                    _ = Math.imul(Te, We),
                    b = b + Math.imul(le, Ye) | 0,
                    s = s + Math.imul(le, Ke) | 0,
                    s = s + Math.imul(pe, Ye) | 0,
                    _ = _ + Math.imul(pe, Ke) | 0,
                    b = b + Math.imul(ye, Ve) | 0,
                    s = s + Math.imul(ye, Ge) | 0,
                    s = s + Math.imul(_e, Ve) | 0,
                    _ = _ + Math.imul(_e, Ge) | 0;
                    var mf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (mf >>> 26) | 0,
                    mf &= 67108863,
                    b = Math.imul(Ie, Ye),
                    s = Math.imul(Ie, Ke),
                    s = s + Math.imul(Te, Ye) | 0,
                    _ = Math.imul(Te, Ke),
                    b = b + Math.imul(le, Ve) | 0,
                    s = s + Math.imul(le, Ge) | 0,
                    s = s + Math.imul(pe, Ve) | 0,
                    _ = _ + Math.imul(pe, Ge) | 0;
                    var wf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    B = (_ + (s >>> 13) | 0) + (wf >>> 26) | 0,
                    wf &= 67108863,
                    b = Math.imul(Ie, Ve),
                    s = Math.imul(Ie, Ge),
                    s = s + Math.imul(Te, Ve) | 0,
                    _ = Math.imul(Te, Ge);
                    var Mf = (B + b | 0) + ((s & 8191) << 13) | 0;
                    return B = (_ + (s >>> 13) | 0) + (Mf >>> 26) | 0,
                    Mf &= 67108863,
                    S[0] = nf,
                    S[1] = af,
                    S[2] = ff,
                    S[3] = of,
                    S[4] = sf,
                    S[5] = hf,
                    S[6] = uf,
                    S[7] = cf,
                    S[8] = df,
                    S[9] = lf,
                    S[10] = pf,
                    S[11] = vf,
                    S[12] = bf,
                    S[13] = gf,
                    S[14] = yf,
                    S[15] = _f,
                    S[16] = mf,
                    S[17] = wf,
                    S[18] = Mf,
                    B !== 0 && (S[19] = B,
                    d.length++),
                    d
                };
                Math.imul || (P = I);
                function C(M, o, u) {
                    u.negative = o.negative ^ M.negative,
                    u.length = M.length + o.length;
                    for (var d = 0, p = 0, m = 0; m < u.length - 1; m++) {
                        var S = p;
                        p = 0;
                        for (var B = d & 67108863, b = Math.min(m, o.length - 1), s = Math.max(0, m - M.length + 1); s <= b; s++) {
                            var _ = m - s
                              , G = M.words[_] | 0
                              , K = o.words[s] | 0
                              , X = G * K
                              , re = X & 67108863;
                            S = S + (X / 67108864 | 0) | 0,
                            re = re + B | 0,
                            B = re & 67108863,
                            S = S + (re >>> 26) | 0,
                            p += S >>> 26,
                            S &= 67108863
                        }
                        u.words[m] = B,
                        d = S,
                        S = p
                    }
                    return d !== 0 ? u.words[m] = d : u.length--,
                    u.strip()
                }
                function L(M, o, u) {
                    var d = new x;
                    return d.mulp(M, o, u)
                }
                a.prototype.mulTo = function(o, u) {
                    var d, p = this.length + o.length;
                    return this.length === 10 && o.length === 10 ? d = P(this, o, u) : p < 63 ? d = I(this, o, u) : p < 1024 ? d = C(this, o, u) : d = L(this, o, u),
                    d
                }
                ;
                function x(M, o) {
                    this.x = M,
                    this.y = o
                }
                x.prototype.makeRBT = function(o) {
                    for (var u = new Array(o), d = a.prototype._countBits(o) - 1, p = 0; p < o; p++)
                        u[p] = this.revBin(p, d, o);
                    return u
                }
                ,
                x.prototype.revBin = function(o, u, d) {
                    if (o === 0 || o === d - 1)
                        return o;
                    for (var p = 0, m = 0; m < u; m++)
                        p |= (o & 1) << u - m - 1,
                        o >>= 1;
                    return p
                }
                ,
                x.prototype.permute = function(o, u, d, p, m, S) {
                    for (var B = 0; B < S; B++)
                        p[B] = u[o[B]],
                        m[B] = d[o[B]]
                }
                ,
                x.prototype.transform = function(o, u, d, p, m, S) {
                    this.permute(S, o, u, d, p, m);
                    for (var B = 1; B < m; B <<= 1)
                        for (var b = B << 1, s = Math.cos(2 * Math.PI / b), _ = Math.sin(2 * Math.PI / b), G = 0; G < m; G += b)
                            for (var K = s, X = _, re = 0; re < B; re++) {
                                var A = d[G + re]
                                  , R = p[G + re]
                                  , z = d[G + re + B]
                                  , j = p[G + re + B]
                                  , Z = K * z - X * j;
                                j = K * j + X * z,
                                z = Z,
                                d[G + re] = A + z,
                                p[G + re] = R + j,
                                d[G + re + B] = A - z,
                                p[G + re + B] = R - j,
                                re !== b && (Z = s * K - _ * X,
                                X = s * X + _ * K,
                                K = Z)
                            }
                }
                ,
                x.prototype.guessLen13b = function(o, u) {
                    var d = Math.max(u, o) | 1
                      , p = d & 1
                      , m = 0;
                    for (d = d / 2 | 0; d; d = d >>> 1)
                        m++;
                    return 1 << m + 1 + p
                }
                ,
                x.prototype.conjugate = function(o, u, d) {
                    if (!(d <= 1))
                        for (var p = 0; p < d / 2; p++) {
                            var m = o[p];
                            o[p] = o[d - p - 1],
                            o[d - p - 1] = m,
                            m = u[p],
                            u[p] = -u[d - p - 1],
                            u[d - p - 1] = -m
                        }
                }
                ,
                x.prototype.normalize13b = function(o, u) {
                    for (var d = 0, p = 0; p < u / 2; p++) {
                        var m = Math.round(o[2 * p + 1] / u) * 8192 + Math.round(o[2 * p] / u) + d;
                        o[p] = m & 67108863,
                        m < 67108864 ? d = 0 : d = m / 67108864 | 0
                    }
                    return o
                }
                ,
                x.prototype.convert13b = function(o, u, d, p) {
                    for (var m = 0, S = 0; S < u; S++)
                        m = m + (o[S] | 0),
                        d[2 * S] = m & 8191,
                        m = m >>> 13,
                        d[2 * S + 1] = m & 8191,
                        m = m >>> 13;
                    for (S = 2 * u; S < p; ++S)
                        d[S] = 0;
                    i(m === 0),
                    i((m & -8192) === 0)
                }
                ,
                x.prototype.stub = function(o) {
                    for (var u = new Array(o), d = 0; d < o; d++)
                        u[d] = 0;
                    return u
                }
                ,
                x.prototype.mulp = function(o, u, d) {
                    var p = 2 * this.guessLen13b(o.length, u.length)
                      , m = this.makeRBT(p)
                      , S = this.stub(p)
                      , B = new Array(p)
                      , b = new Array(p)
                      , s = new Array(p)
                      , _ = new Array(p)
                      , G = new Array(p)
                      , K = new Array(p)
                      , X = d.words;
                    X.length = p,
                    this.convert13b(o.words, o.length, B, p),
                    this.convert13b(u.words, u.length, _, p),
                    this.transform(B, S, b, s, p, m),
                    this.transform(_, S, G, K, p, m);
                    for (var re = 0; re < p; re++) {
                        var A = b[re] * G[re] - s[re] * K[re];
                        s[re] = b[re] * K[re] + s[re] * G[re],
                        b[re] = A
                    }
                    return this.conjugate(b, s, p),
                    this.transform(b, s, X, S, p, m),
                    this.conjugate(X, S, p),
                    this.normalize13b(X, p),
                    d.negative = o.negative ^ u.negative,
                    d.length = o.length + u.length,
                    d.strip()
                }
                ,
                a.prototype.mul = function(o) {
                    var u = new a(null);
                    return u.words = new Array(this.length + o.length),
                    this.mulTo(o, u)
                }
                ,
                a.prototype.mulf = function(o) {
                    var u = new a(null);
                    return u.words = new Array(this.length + o.length),
                    L(this, o, u)
                }
                ,
                a.prototype.imul = function(o) {
                    return this.clone().mulTo(o, this)
                }
                ,
                a.prototype.imuln = function(o) {
                    i(typeof o == "number"),
                    i(o < 67108864);
                    for (var u = 0, d = 0; d < this.length; d++) {
                        var p = (this.words[d] | 0) * o
                          , m = (p & 67108863) + (u & 67108863);
                        u >>= 26,
                        u += p / 67108864 | 0,
                        u += m >>> 26,
                        this.words[d] = m & 67108863
                    }
                    return u !== 0 && (this.words[d] = u,
                    this.length++),
                    this
                }
                ,
                a.prototype.muln = function(o) {
                    return this.clone().imuln(o)
                }
                ,
                a.prototype.sqr = function() {
                    return this.mul(this)
                }
                ,
                a.prototype.isqr = function() {
                    return this.imul(this.clone())
                }
                ,
                a.prototype.pow = function(o) {
                    var u = T(o);
                    if (u.length === 0)
                        return new a(1);
                    for (var d = this, p = 0; p < u.length && u[p] === 0; p++,
                    d = d.sqr())
                        ;
                    if (++p < u.length)
                        for (var m = d.sqr(); p < u.length; p++,
                        m = m.sqr())
                            u[p] !== 0 && (d = d.mul(m));
                    return d
                }
                ,
                a.prototype.iushln = function(o) {
                    i(typeof o == "number" && o >= 0);
                    var u = o % 26, d = (o - u) / 26, p = 67108863 >>> 26 - u << 26 - u, m;
                    if (u !== 0) {
                        var S = 0;
                        for (m = 0; m < this.length; m++) {
                            var B = this.words[m] & p
                              , b = (this.words[m] | 0) - B << u;
                            this.words[m] = b | S,
                            S = B >>> 26 - u
                        }
                        S && (this.words[m] = S,
                        this.length++)
                    }
                    if (d !== 0) {
                        for (m = this.length - 1; m >= 0; m--)
                            this.words[m + d] = this.words[m];
                        for (m = 0; m < d; m++)
                            this.words[m] = 0;
                        this.length += d
                    }
                    return this.strip()
                }
                ,
                a.prototype.ishln = function(o) {
                    return i(this.negative === 0),
                    this.iushln(o)
                }
                ,
                a.prototype.iushrn = function(o, u, d) {
                    i(typeof o == "number" && o >= 0);
                    var p;
                    u ? p = (u - u % 26) / 26 : p = 0;
                    var m = o % 26
                      , S = Math.min((o - m) / 26, this.length)
                      , B = 67108863 ^ 67108863 >>> m << m
                      , b = d;
                    if (p -= S,
                    p = Math.max(0, p),
                    b) {
                        for (var s = 0; s < S; s++)
                            b.words[s] = this.words[s];
                        b.length = S
                    }
                    if (S !== 0)
                        if (this.length > S)
                            for (this.length -= S,
                            s = 0; s < this.length; s++)
                                this.words[s] = this.words[s + S];
                        else
                            this.words[0] = 0,
                            this.length = 1;
                    var _ = 0;
                    for (s = this.length - 1; s >= 0 && (_ !== 0 || s >= p); s--) {
                        var G = this.words[s] | 0;
                        this.words[s] = _ << 26 - m | G >>> m,
                        _ = G & B
                    }
                    return b && _ !== 0 && (b.words[b.length++] = _),
                    this.length === 0 && (this.words[0] = 0,
                    this.length = 1),
                    this.strip()
                }
                ,
                a.prototype.ishrn = function(o, u, d) {
                    return i(this.negative === 0),
                    this.iushrn(o, u, d)
                }
                ,
                a.prototype.shln = function(o) {
                    return this.clone().ishln(o)
                }
                ,
                a.prototype.ushln = function(o) {
                    return this.clone().iushln(o)
                }
                ,
                a.prototype.shrn = function(o) {
                    return this.clone().ishrn(o)
                }
                ,
                a.prototype.ushrn = function(o) {
                    return this.clone().iushrn(o)
                }
                ,
                a.prototype.testn = function(o) {
                    i(typeof o == "number" && o >= 0);
                    var u = o % 26
                      , d = (o - u) / 26
                      , p = 1 << u;
                    if (this.length <= d)
                        return !1;
                    var m = this.words[d];
                    return !!(m & p)
                }
                ,
                a.prototype.imaskn = function(o) {
                    i(typeof o == "number" && o >= 0);
                    var u = o % 26
                      , d = (o - u) / 26;
                    if (i(this.negative === 0, "imaskn works only with positive numbers"),
                    this.length <= d)
                        return this;
                    if (u !== 0 && d++,
                    this.length = Math.min(d, this.length),
                    u !== 0) {
                        var p = 67108863 ^ 67108863 >>> u << u;
                        this.words[this.length - 1] &= p
                    }
                    return this.strip()
                }
                ,
                a.prototype.maskn = function(o) {
                    return this.clone().imaskn(o)
                }
                ,
                a.prototype.iaddn = function(o) {
                    return i(typeof o == "number"),
                    i(o < 67108864),
                    o < 0 ? this.isubn(-o) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < o ? (this.words[0] = o - (this.words[0] | 0),
                    this.negative = 0,
                    this) : (this.negative = 0,
                    this.isubn(o),
                    this.negative = 1,
                    this) : this._iaddn(o)
                }
                ,
                a.prototype._iaddn = function(o) {
                    this.words[0] += o;
                    for (var u = 0; u < this.length && this.words[u] >= 67108864; u++)
                        this.words[u] -= 67108864,
                        u === this.length - 1 ? this.words[u + 1] = 1 : this.words[u + 1]++;
                    return this.length = Math.max(this.length, u + 1),
                    this
                }
                ,
                a.prototype.isubn = function(o) {
                    if (i(typeof o == "number"),
                    i(o < 67108864),
                    o < 0)
                        return this.iaddn(-o);
                    if (this.negative !== 0)
                        return this.negative = 0,
                        this.iaddn(o),
                        this.negative = 1,
                        this;
                    if (this.words[0] -= o,
                    this.length === 1 && this.words[0] < 0)
                        this.words[0] = -this.words[0],
                        this.negative = 1;
                    else
                        for (var u = 0; u < this.length && this.words[u] < 0; u++)
                            this.words[u] += 67108864,
                            this.words[u + 1] -= 1;
                    return this.strip()
                }
                ,
                a.prototype.addn = function(o) {
                    return this.clone().iaddn(o)
                }
                ,
                a.prototype.subn = function(o) {
                    return this.clone().isubn(o)
                }
                ,
                a.prototype.iabs = function() {
                    return this.negative = 0,
                    this
                }
                ,
                a.prototype.abs = function() {
                    return this.clone().iabs()
                }
                ,
                a.prototype._ishlnsubmul = function(o, u, d) {
                    var p = o.length + d, m;
                    this._expand(p);
                    var S, B = 0;
                    for (m = 0; m < o.length; m++) {
                        S = (this.words[m + d] | 0) + B;
                        var b = (o.words[m] | 0) * u;
                        S -= b & 67108863,
                        B = (S >> 26) - (b / 67108864 | 0),
                        this.words[m + d] = S & 67108863
                    }
                    for (; m < this.length - d; m++)
                        S = (this.words[m + d] | 0) + B,
                        B = S >> 26,
                        this.words[m + d] = S & 67108863;
                    if (B === 0)
                        return this.strip();
                    for (i(B === -1),
                    B = 0,
                    m = 0; m < this.length; m++)
                        S = -(this.words[m] | 0) + B,
                        B = S >> 26,
                        this.words[m] = S & 67108863;
                    return this.negative = 1,
                    this.strip()
                }
                ,
                a.prototype._wordDiv = function(o, u) {
                    var d = this.length - o.length
                      , p = this.clone()
                      , m = o
                      , S = m.words[m.length - 1] | 0
                      , B = this._countBits(S);
                    d = 26 - B,
                    d !== 0 && (m = m.ushln(d),
                    p.iushln(d),
                    S = m.words[m.length - 1] | 0);
                    var b = p.length - m.length, s;
                    if (u !== "mod") {
                        s = new a(null),
                        s.length = b + 1,
                        s.words = new Array(s.length);
                        for (var _ = 0; _ < s.length; _++)
                            s.words[_] = 0
                    }
                    var G = p.clone()._ishlnsubmul(m, 1, b);
                    G.negative === 0 && (p = G,
                    s && (s.words[b] = 1));
                    for (var K = b - 1; K >= 0; K--) {
                        var X = (p.words[m.length + K] | 0) * 67108864 + (p.words[m.length + K - 1] | 0);
                        for (X = Math.min(X / S | 0, 67108863),
                        p._ishlnsubmul(m, X, K); p.negative !== 0; )
                            X--,
                            p.negative = 0,
                            p._ishlnsubmul(m, 1, K),
                            p.isZero() || (p.negative ^= 1);
                        s && (s.words[K] = X)
                    }
                    return s && s.strip(),
                    p.strip(),
                    u !== "div" && d !== 0 && p.iushrn(d),
                    {
                        div: s || null,
                        mod: p
                    }
                }
                ,
                a.prototype.divmod = function(o, u, d) {
                    if (i(!o.isZero()),
                    this.isZero())
                        return {
                            div: new a(0),
                            mod: new a(0)
                        };
                    var p, m, S;
                    return this.negative !== 0 && o.negative === 0 ? (S = this.neg().divmod(o, u),
                    u !== "mod" && (p = S.div.neg()),
                    u !== "div" && (m = S.mod.neg(),
                    d && m.negative !== 0 && m.iadd(o)),
                    {
                        div: p,
                        mod: m
                    }) : this.negative === 0 && o.negative !== 0 ? (S = this.divmod(o.neg(), u),
                    u !== "mod" && (p = S.div.neg()),
                    {
                        div: p,
                        mod: S.mod
                    }) : this.negative & o.negative ? (S = this.neg().divmod(o.neg(), u),
                    u !== "div" && (m = S.mod.neg(),
                    d && m.negative !== 0 && m.isub(o)),
                    {
                        div: S.div,
                        mod: m
                    }) : o.length > this.length || this.cmp(o) < 0 ? {
                        div: new a(0),
                        mod: this
                    } : o.length === 1 ? u === "div" ? {
                        div: this.divn(o.words[0]),
                        mod: null
                    } : u === "mod" ? {
                        div: null,
                        mod: new a(this.modn(o.words[0]))
                    } : {
                        div: this.divn(o.words[0]),
                        mod: new a(this.modn(o.words[0]))
                    } : this._wordDiv(o, u)
                }
                ,
                a.prototype.div = function(o) {
                    return this.divmod(o, "div", !1).div
                }
                ,
                a.prototype.mod = function(o) {
                    return this.divmod(o, "mod", !1).mod
                }
                ,
                a.prototype.umod = function(o) {
                    return this.divmod(o, "mod", !0).mod
                }
                ,
                a.prototype.divRound = function(o) {
                    var u = this.divmod(o);
                    if (u.mod.isZero())
                        return u.div;
                    var d = u.div.negative !== 0 ? u.mod.isub(o) : u.mod
                      , p = o.ushrn(1)
                      , m = o.andln(1)
                      , S = d.cmp(p);
                    return S < 0 || m === 1 && S === 0 ? u.div : u.div.negative !== 0 ? u.div.isubn(1) : u.div.iaddn(1)
                }
                ,
                a.prototype.modn = function(o) {
                    i(o <= 67108863);
                    for (var u = (1 << 26) % o, d = 0, p = this.length - 1; p >= 0; p--)
                        d = (u * d + (this.words[p] | 0)) % o;
                    return d
                }
                ,
                a.prototype.idivn = function(o) {
                    i(o <= 67108863);
                    for (var u = 0, d = this.length - 1; d >= 0; d--) {
                        var p = (this.words[d] | 0) + u * 67108864;
                        this.words[d] = p / o | 0,
                        u = p % o
                    }
                    return this.strip()
                }
                ,
                a.prototype.divn = function(o) {
                    return this.clone().idivn(o)
                }
                ,
                a.prototype.egcd = function(o) {
                    i(o.negative === 0),
                    i(!o.isZero());
                    var u = this
                      , d = o.clone();
                    u.negative !== 0 ? u = u.umod(o) : u = u.clone();
                    for (var p = new a(1), m = new a(0), S = new a(0), B = new a(1), b = 0; u.isEven() && d.isEven(); )
                        u.iushrn(1),
                        d.iushrn(1),
                        ++b;
                    for (var s = d.clone(), _ = u.clone(); !u.isZero(); ) {
                        for (var G = 0, K = 1; !(u.words[0] & K) && G < 26; ++G,
                        K <<= 1)
                            ;
                        if (G > 0)
                            for (u.iushrn(G); G-- > 0; )
                                (p.isOdd() || m.isOdd()) && (p.iadd(s),
                                m.isub(_)),
                                p.iushrn(1),
                                m.iushrn(1);
                        for (var X = 0, re = 1; !(d.words[0] & re) && X < 26; ++X,
                        re <<= 1)
                            ;
                        if (X > 0)
                            for (d.iushrn(X); X-- > 0; )
                                (S.isOdd() || B.isOdd()) && (S.iadd(s),
                                B.isub(_)),
                                S.iushrn(1),
                                B.iushrn(1);
                        u.cmp(d) >= 0 ? (u.isub(d),
                        p.isub(S),
                        m.isub(B)) : (d.isub(u),
                        S.isub(p),
                        B.isub(m))
                    }
                    return {
                        a: S,
                        b: B,
                        gcd: d.iushln(b)
                    }
                }
                ,
                a.prototype._invmp = function(o) {
                    i(o.negative === 0),
                    i(!o.isZero());
                    var u = this
                      , d = o.clone();
                    u.negative !== 0 ? u = u.umod(o) : u = u.clone();
                    for (var p = new a(1), m = new a(0), S = d.clone(); u.cmpn(1) > 0 && d.cmpn(1) > 0; ) {
                        for (var B = 0, b = 1; !(u.words[0] & b) && B < 26; ++B,
                        b <<= 1)
                            ;
                        if (B > 0)
                            for (u.iushrn(B); B-- > 0; )
                                p.isOdd() && p.iadd(S),
                                p.iushrn(1);
                        for (var s = 0, _ = 1; !(d.words[0] & _) && s < 26; ++s,
                        _ <<= 1)
                            ;
                        if (s > 0)
                            for (d.iushrn(s); s-- > 0; )
                                m.isOdd() && m.iadd(S),
                                m.iushrn(1);
                        u.cmp(d) >= 0 ? (u.isub(d),
                        p.isub(m)) : (d.isub(u),
                        m.isub(p))
                    }
                    var G;
                    return u.cmpn(1) === 0 ? G = p : G = m,
                    G.cmpn(0) < 0 && G.iadd(o),
                    G
                }
                ,
                a.prototype.gcd = function(o) {
                    if (this.isZero())
                        return o.abs();
                    if (o.isZero())
                        return this.abs();
                    var u = this.clone()
                      , d = o.clone();
                    u.negative = 0,
                    d.negative = 0;
                    for (var p = 0; u.isEven() && d.isEven(); p++)
                        u.iushrn(1),
                        d.iushrn(1);
                    do {
                        for (; u.isEven(); )
                            u.iushrn(1);
                        for (; d.isEven(); )
                            d.iushrn(1);
                        var m = u.cmp(d);
                        if (m < 0) {
                            var S = u;
                            u = d,
                            d = S
                        } else if (m === 0 || d.cmpn(1) === 0)
                            break;
                        u.isub(d)
                    } while (!0);
                    return d.iushln(p)
                }
                ,
                a.prototype.invm = function(o) {
                    return this.egcd(o).a.umod(o)
                }
                ,
                a.prototype.isEven = function() {
                    return (this.words[0] & 1) === 0
                }
                ,
                a.prototype.isOdd = function() {
                    return (this.words[0] & 1) === 1
                }
                ,
                a.prototype.andln = function(o) {
                    return this.words[0] & o
                }
                ,
                a.prototype.bincn = function(o) {
                    i(typeof o == "number");
                    var u = o % 26
                      , d = (o - u) / 26
                      , p = 1 << u;
                    if (this.length <= d)
                        return this._expand(d + 1),
                        this.words[d] |= p,
                        this;
                    for (var m = p, S = d; m !== 0 && S < this.length; S++) {
                        var B = this.words[S] | 0;
                        B += m,
                        m = B >>> 26,
                        B &= 67108863,
                        this.words[S] = B
                    }
                    return m !== 0 && (this.words[S] = m,
                    this.length++),
                    this
                }
                ,
                a.prototype.isZero = function() {
                    return this.length === 1 && this.words[0] === 0
                }
                ,
                a.prototype.cmpn = function(o) {
                    var u = o < 0;
                    if (this.negative !== 0 && !u)
                        return -1;
                    if (this.negative === 0 && u)
                        return 1;
                    this.strip();
                    var d;
                    if (this.length > 1)
                        d = 1;
                    else {
                        u && (o = -o),
                        i(o <= 67108863, "Number is too big");
                        var p = this.words[0] | 0;
                        d = p === o ? 0 : p < o ? -1 : 1
                    }
                    return this.negative !== 0 ? -d | 0 : d
                }
                ,
                a.prototype.cmp = function(o) {
                    if (this.negative !== 0 && o.negative === 0)
                        return -1;
                    if (this.negative === 0 && o.negative !== 0)
                        return 1;
                    var u = this.ucmp(o);
                    return this.negative !== 0 ? -u | 0 : u
                }
                ,
                a.prototype.ucmp = function(o) {
                    if (this.length > o.length)
                        return 1;
                    if (this.length < o.length)
                        return -1;
                    for (var u = 0, d = this.length - 1; d >= 0; d--) {
                        var p = this.words[d] | 0
                          , m = o.words[d] | 0;
                        if (p !== m) {
                            p < m ? u = -1 : p > m && (u = 1);
                            break
                        }
                    }
                    return u
                }
                ,
                a.prototype.gtn = function(o) {
                    return this.cmpn(o) === 1
                }
                ,
                a.prototype.gt = function(o) {
                    return this.cmp(o) === 1
                }
                ,
                a.prototype.gten = function(o) {
                    return this.cmpn(o) >= 0
                }
                ,
                a.prototype.gte = function(o) {
                    return this.cmp(o) >= 0
                }
                ,
                a.prototype.ltn = function(o) {
                    return this.cmpn(o) === -1
                }
                ,
                a.prototype.lt = function(o) {
                    return this.cmp(o) === -1
                }
                ,
                a.prototype.lten = function(o) {
                    return this.cmpn(o) <= 0
                }
                ,
                a.prototype.lte = function(o) {
                    return this.cmp(o) <= 0
                }
                ,
                a.prototype.eqn = function(o) {
                    return this.cmpn(o) === 0
                }
                ,
                a.prototype.eq = function(o) {
                    return this.cmp(o) === 0
                }
                ,
                a.red = function(o) {
                    return new W(o)
                }
                ,
                a.prototype.toRed = function(o) {
                    return i(!this.red, "Already a number in reduction context"),
                    i(this.negative === 0, "red works only with positives"),
                    o.convertTo(this)._forceRed(o)
                }
                ,
                a.prototype.fromRed = function() {
                    return i(this.red, "fromRed works only with numbers in reduction context"),
                    this.red.convertFrom(this)
                }
                ,
                a.prototype._forceRed = function(o) {
                    return this.red = o,
                    this
                }
                ,
                a.prototype.forceRed = function(o) {
                    return i(!this.red, "Already a number in reduction context"),
                    this._forceRed(o)
                }
                ,
                a.prototype.redAdd = function(o) {
                    return i(this.red, "redAdd works only with red numbers"),
                    this.red.add(this, o)
                }
                ,
                a.prototype.redIAdd = function(o) {
                    return i(this.red, "redIAdd works only with red numbers"),
                    this.red.iadd(this, o)
                }
                ,
                a.prototype.redSub = function(o) {
                    return i(this.red, "redSub works only with red numbers"),
                    this.red.sub(this, o)
                }
                ,
                a.prototype.redISub = function(o) {
                    return i(this.red, "redISub works only with red numbers"),
                    this.red.isub(this, o)
                }
                ,
                a.prototype.redShl = function(o) {
                    return i(this.red, "redShl works only with red numbers"),
                    this.red.shl(this, o)
                }
                ,
                a.prototype.redMul = function(o) {
                    return i(this.red, "redMul works only with red numbers"),
                    this.red._verify2(this, o),
                    this.red.mul(this, o)
                }
                ,
                a.prototype.redIMul = function(o) {
                    return i(this.red, "redMul works only with red numbers"),
                    this.red._verify2(this, o),
                    this.red.imul(this, o)
                }
                ,
                a.prototype.redSqr = function() {
                    return i(this.red, "redSqr works only with red numbers"),
                    this.red._verify1(this),
                    this.red.sqr(this)
                }
                ,
                a.prototype.redISqr = function() {
                    return i(this.red, "redISqr works only with red numbers"),
                    this.red._verify1(this),
                    this.red.isqr(this)
                }
                ,
                a.prototype.redSqrt = function() {
                    return i(this.red, "redSqrt works only with red numbers"),
                    this.red._verify1(this),
                    this.red.sqrt(this)
                }
                ,
                a.prototype.redInvm = function() {
                    return i(this.red, "redInvm works only with red numbers"),
                    this.red._verify1(this),
                    this.red.invm(this)
                }
                ,
                a.prototype.redNeg = function() {
                    return i(this.red, "redNeg works only with red numbers"),
                    this.red._verify1(this),
                    this.red.neg(this)
                }
                ,
                a.prototype.redPow = function(o) {
                    return i(this.red && !o.red, "redPow(normalNum)"),
                    this.red._verify1(this),
                    this.red.pow(this, o)
                }
                ;
                var Y = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };
                function F(M, o) {
                    this.name = M,
                    this.p = new a(o,16),
                    this.n = this.p.bitLength(),
                    this.k = new a(1).iushln(this.n).isub(this.p),
                    this.tmp = this._tmp()
                }
                F.prototype._tmp = function() {
                    var o = new a(null);
                    return o.words = new Array(Math.ceil(this.n / 13)),
                    o
                }
                ,
                F.prototype.ireduce = function(o) {
                    var u = o, d;
                    do
                        this.split(u, this.tmp),
                        u = this.imulK(u),
                        u = u.iadd(this.tmp),
                        d = u.bitLength();
                    while (d > this.n);
                    var p = d < this.n ? -1 : u.ucmp(this.p);
                    return p === 0 ? (u.words[0] = 0,
                    u.length = 1) : p > 0 ? u.isub(this.p) : u.strip !== void 0 ? u.strip() : u._strip(),
                    u
                }
                ,
                F.prototype.split = function(o, u) {
                    o.iushrn(this.n, 0, u)
                }
                ,
                F.prototype.imulK = function(o) {
                    return o.imul(this.k)
                }
                ;
                function V() {
                    F.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }
                n(V, F),
                V.prototype.split = function(o, u) {
                    for (var d = 4194303, p = Math.min(o.length, 9), m = 0; m < p; m++)
                        u.words[m] = o.words[m];
                    if (u.length = p,
                    o.length <= 9) {
                        o.words[0] = 0,
                        o.length = 1;
                        return
                    }
                    var S = o.words[9];
                    for (u.words[u.length++] = S & d,
                    m = 10; m < o.length; m++) {
                        var B = o.words[m] | 0;
                        o.words[m - 10] = (B & d) << 4 | S >>> 22,
                        S = B
                    }
                    S >>>= 22,
                    o.words[m - 10] = S,
                    S === 0 && o.length > 10 ? o.length -= 10 : o.length -= 9
                }
                ,
                V.prototype.imulK = function(o) {
                    o.words[o.length] = 0,
                    o.words[o.length + 1] = 0,
                    o.length += 2;
                    for (var u = 0, d = 0; d < o.length; d++) {
                        var p = o.words[d] | 0;
                        u += p * 977,
                        o.words[d] = u & 67108863,
                        u = p * 64 + (u / 67108864 | 0)
                    }
                    return o.words[o.length - 1] === 0 && (o.length--,
                    o.words[o.length - 1] === 0 && o.length--),
                    o
                }
                ;
                function Q() {
                    F.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }
                n(Q, F);
                function oe() {
                    F.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }
                n(oe, F);
                function te() {
                    F.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }
                n(te, F),
                te.prototype.imulK = function(o) {
                    for (var u = 0, d = 0; d < o.length; d++) {
                        var p = (o.words[d] | 0) * 19 + u
                          , m = p & 67108863;
                        p >>>= 26,
                        o.words[d] = m,
                        u = p
                    }
                    return u !== 0 && (o.words[o.length++] = u),
                    o
                }
                ,
                a._prime = function(o) {
                    if (Y[o])
                        return Y[o];
                    var u;
                    if (o === "k256")
                        u = new V;
                    else if (o === "p224")
                        u = new Q;
                    else if (o === "p192")
                        u = new oe;
                    else if (o === "p25519")
                        u = new te;
                    else
                        throw new Error("Unknown prime " + o);
                    return Y[o] = u,
                    u
                }
                ;
                function W(M) {
                    if (typeof M == "string") {
                        var o = a._prime(M);
                        this.m = o.p,
                        this.prime = o
                    } else
                        i(M.gtn(1), "modulus must be greater than 1"),
                        this.m = M,
                        this.prime = null
                }
                W.prototype._verify1 = function(o) {
                    i(o.negative === 0, "red works only with positives"),
                    i(o.red, "red works only with red numbers")
                }
                ,
                W.prototype._verify2 = function(o, u) {
                    i((o.negative | u.negative) === 0, "red works only with positives"),
                    i(o.red && o.red === u.red, "red works only with red numbers")
                }
                ,
                W.prototype.imod = function(o) {
                    return this.prime ? this.prime.ireduce(o)._forceRed(this) : o.umod(this.m)._forceRed(this)
                }
                ,
                W.prototype.neg = function(o) {
                    return o.isZero() ? o.clone() : this.m.sub(o)._forceRed(this)
                }
                ,
                W.prototype.add = function(o, u) {
                    this._verify2(o, u);
                    var d = o.add(u);
                    return d.cmp(this.m) >= 0 && d.isub(this.m),
                    d._forceRed(this)
                }
                ,
                W.prototype.iadd = function(o, u) {
                    this._verify2(o, u);
                    var d = o.iadd(u);
                    return d.cmp(this.m) >= 0 && d.isub(this.m),
                    d
                }
                ,
                W.prototype.sub = function(o, u) {
                    this._verify2(o, u);
                    var d = o.sub(u);
                    return d.cmpn(0) < 0 && d.iadd(this.m),
                    d._forceRed(this)
                }
                ,
                W.prototype.isub = function(o, u) {
                    this._verify2(o, u);
                    var d = o.isub(u);
                    return d.cmpn(0) < 0 && d.iadd(this.m),
                    d
                }
                ,
                W.prototype.shl = function(o, u) {
                    return this._verify1(o),
                    this.imod(o.ushln(u))
                }
                ,
                W.prototype.imul = function(o, u) {
                    return this._verify2(o, u),
                    this.imod(o.imul(u))
                }
                ,
                W.prototype.mul = function(o, u) {
                    return this._verify2(o, u),
                    this.imod(o.mul(u))
                }
                ,
                W.prototype.isqr = function(o) {
                    return this.imul(o, o.clone())
                }
                ,
                W.prototype.sqr = function(o) {
                    return this.mul(o, o)
                }
                ,
                W.prototype.sqrt = function(o) {
                    if (o.isZero())
                        return o.clone();
                    var u = this.m.andln(3);
                    if (i(u % 2 === 1),
                    u === 3) {
                        var d = this.m.add(new a(1)).iushrn(2);
                        return this.pow(o, d)
                    }
                    for (var p = this.m.subn(1), m = 0; !p.isZero() && p.andln(1) === 0; )
                        m++,
                        p.iushrn(1);
                    i(!p.isZero());
                    var S = new a(1).toRed(this)
                      , B = S.redNeg()
                      , b = this.m.subn(1).iushrn(1)
                      , s = this.m.bitLength();
                    for (s = new a(2 * s * s).toRed(this); this.pow(s, b).cmp(B) !== 0; )
                        s.redIAdd(B);
                    for (var _ = this.pow(s, p), G = this.pow(o, p.addn(1).iushrn(1)), K = this.pow(o, p), X = m; K.cmp(S) !== 0; ) {
                        for (var re = K, A = 0; re.cmp(S) !== 0; A++)
                            re = re.redSqr();
                        i(A < X);
                        var R = this.pow(_, new a(1).iushln(X - A - 1));
                        G = G.redMul(R),
                        _ = R.redSqr(),
                        K = K.redMul(_),
                        X = A
                    }
                    return G
                }
                ,
                W.prototype.invm = function(o) {
                    var u = o._invmp(this.m);
                    return u.negative !== 0 ? (u.negative = 0,
                    this.imod(u).redNeg()) : this.imod(u)
                }
                ,
                W.prototype.pow = function(o, u) {
                    if (u.isZero())
                        return new a(1).toRed(this);
                    if (u.cmpn(1) === 0)
                        return o.clone();
                    var d = 4
                      , p = new Array(1 << d);
                    p[0] = new a(1).toRed(this),
                    p[1] = o;
                    for (var m = 2; m < p.length; m++)
                        p[m] = this.mul(p[m - 1], o);
                    var S = p[0]
                      , B = 0
                      , b = 0
                      , s = u.bitLength() % 26;
                    for (s === 0 && (s = 26),
                    m = u.length - 1; m >= 0; m--) {
                        for (var _ = u.words[m], G = s - 1; G >= 0; G--) {
                            var K = _ >> G & 1;
                            if (S !== p[0] && (S = this.sqr(S)),
                            K === 0 && B === 0) {
                                b = 0;
                                continue
                            }
                            B <<= 1,
                            B |= K,
                            b++,
                            !(b !== d && (m !== 0 || G !== 0)) && (S = this.mul(S, p[B]),
                            b = 0,
                            B = 0)
                        }
                        s = 26
                    }
                    return S
                }
                ,
                W.prototype.convertTo = function(o) {
                    var u = o.umod(this.m);
                    return u === o ? u.clone() : u
                }
                ,
                W.prototype.convertFrom = function(o) {
                    var u = o.clone();
                    return u.red = null,
                    u
                }
                ,
                a.mont = function(o) {
                    return new Ae(o)
                }
                ;
                function Ae(M) {
                    W.call(this, M),
                    this.shift = this.m.bitLength(),
                    this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26),
                    this.r = new a(1).iushln(this.shift),
                    this.r2 = this.imod(this.r.sqr()),
                    this.rinv = this.r._invmp(this.m),
                    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                    this.minv = this.minv.umod(this.r),
                    this.minv = this.r.sub(this.minv)
                }
                n(Ae, W),
                Ae.prototype.convertTo = function(o) {
                    return this.imod(o.ushln(this.shift))
                }
                ,
                Ae.prototype.convertFrom = function(o) {
                    var u = this.imod(o.mul(this.rinv));
                    return u.red = null,
                    u
                }
                ,
                Ae.prototype.imul = function(o, u) {
                    if (o.isZero() || u.isZero())
                        return o.words[0] = 0,
                        o.length = 1,
                        o;
                    var d = o.imul(u)
                      , p = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                      , m = d.isub(p).iushrn(this.shift)
                      , S = m;
                    return m.cmp(this.m) >= 0 ? S = m.isub(this.m) : m.cmpn(0) < 0 && (S = m.iadd(this.m)),
                    S._forceRed(this)
                }
                ,
                Ae.prototype.mul = function(o, u) {
                    if (o.isZero() || u.isZero())
                        return new a(0)._forceRed(this);
                    var d = o.mul(u)
                      , p = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                      , m = d.isub(p).iushrn(this.shift)
                      , S = m;
                    return m.cmp(this.m) >= 0 ? S = m.isub(this.m) : m.cmpn(0) < 0 && (S = m.iadd(this.m)),
                    S._forceRed(this)
                }
                ,
                Ae.prototype.invm = function(o) {
                    var u = this.imod(o._invmp(this.m).mul(this.r2));
                    return u._forceRed(this)
                }
            }
            )(t, O)
        }
        )(ms);
        var Yt = ms.exports
          , kr = ws;
        function ws(t, e) {
            if (!t)
                throw new Error(e || "Assertion failed")
        }
        ws.equal = function(e, r, i) {
            if (e != r)
                throw new Error(i || "Assertion failed: " + e + " != " + r)
        }
        ;
        var Oa = {};
        (function(t) {
            var e = t;
            function r(a, f) {
                if (Array.isArray(a))
                    return a.slice();
                if (!a)
                    return [];
                var h = [];
                if (typeof a != "string") {
                    for (var c = 0; c < a.length; c++)
                        h[c] = a[c] | 0;
                    return h
                }
                if (f === "hex") {
                    a = a.replace(/[^a-z0-9]+/ig, ""),
                    a.length % 2 !== 0 && (a = "0" + a);
                    for (var c = 0; c < a.length; c += 2)
                        h.push(parseInt(a[c] + a[c + 1], 16))
                } else
                    for (var c = 0; c < a.length; c++) {
                        var l = a.charCodeAt(c)
                          , v = l >> 8
                          , y = l & 255;
                        v ? h.push(v, y) : h.push(y)
                    }
                return h
            }
            e.toArray = r;
            function i(a) {
                return a.length === 1 ? "0" + a : a
            }
            e.zero2 = i;
            function n(a) {
                for (var f = "", h = 0; h < a.length; h++)
                    f += i(a[h].toString(16));
                return f
            }
            e.toHex = n,
            e.encode = function(f, h) {
                return h === "hex" ? n(f) : f
            }
        }
        )(Oa),
        function(t) {
            var e = t
              , r = Yt
              , i = kr
              , n = Oa;
            e.assert = i,
            e.toArray = n.toArray,
            e.zero2 = n.zero2,
            e.toHex = n.toHex,
            e.encode = n.encode;
            function a(v, y, E) {
                var T = new Array(Math.max(v.bitLength(), E) + 1);
                T.fill(0);
                for (var I = 1 << y + 1, P = v.clone(), C = 0; C < T.length; C++) {
                    var L, x = P.andln(I - 1);
                    P.isOdd() ? (x > (I >> 1) - 1 ? L = (I >> 1) - x : L = x,
                    P.isubn(L)) : L = 0,
                    T[C] = L,
                    P.iushrn(1)
                }
                return T
            }
            e.getNAF = a;
            function f(v, y) {
                var E = [[], []];
                v = v.clone(),
                y = y.clone();
                for (var T = 0, I = 0, P; v.cmpn(-T) > 0 || y.cmpn(-I) > 0; ) {
                    var C = v.andln(3) + T & 3
                      , L = y.andln(3) + I & 3;
                    C === 3 && (C = -1),
                    L === 3 && (L = -1);
                    var x;
                    C & 1 ? (P = v.andln(7) + T & 7,
                    (P === 3 || P === 5) && L === 2 ? x = -C : x = C) : x = 0,
                    E[0].push(x);
                    var Y;
                    L & 1 ? (P = y.andln(7) + I & 7,
                    (P === 3 || P === 5) && C === 2 ? Y = -L : Y = L) : Y = 0,
                    E[1].push(Y),
                    2 * T === x + 1 && (T = 1 - T),
                    2 * I === Y + 1 && (I = 1 - I),
                    v.iushrn(1),
                    y.iushrn(1)
                }
                return E
            }
            e.getJSF = f;
            function h(v, y, E) {
                var T = "_" + y;
                v.prototype[y] = function() {
                    return this[T] !== void 0 ? this[T] : this[T] = E.call(this)
                }
            }
            e.cachedProperty = h;
            function c(v) {
                return typeof v == "string" ? e.toArray(v, "hex") : v
            }
            e.parseBytes = c;
            function l(v) {
                return new r(v,"hex","le")
            }
            e.intFromLE = l
        }(It);
        var Da = {
            exports: {}
        }, X0 = {}, Z0 = Object.freeze({
            __proto__: null,
            default: X0
        }), Q0 = q(Z0), xa;
        Da.exports = function(e) {
            return xa || (xa = new lr(null)),
            xa.generate(e)
        }
        ;
        function lr(t) {
            this.rand = t
        }
        if (Da.exports.Rand = lr,
        lr.prototype.generate = function(e) {
            return this._rand(e)
        }
        ,
        lr.prototype._rand = function(e) {
            if (this.rand.getBytes)
                return this.rand.getBytes(e);
            for (var r = new Uint8Array(e), i = 0; i < r.length; i++)
                r[i] = this.rand.getByte();
            return r
        }
        ,
        typeof self == "object")
            self.crypto && self.crypto.getRandomValues ? lr.prototype._rand = function(e) {
                var r = new Uint8Array(e);
                return self.crypto.getRandomValues(r),
                r
            }
            : self.msCrypto && self.msCrypto.getRandomValues ? lr.prototype._rand = function(e) {
                var r = new Uint8Array(e);
                return self.msCrypto.getRandomValues(r),
                r
            }
            : typeof window == "object" && (lr.prototype._rand = function() {
                throw new Error("Not implemented yet")
            }
            );
        else
            try {
                var Ms = Q0;
                if (typeof Ms.randomBytes != "function")
                    throw new Error("Not supported");
                lr.prototype._rand = function(e) {
                    return Ms.randomBytes(e)
                }
            } catch {}
        var Ss = Da.exports
          , Na = {}
          , Cr = Yt
          , Li = It
          , Sn = Li.getNAF
          , el = Li.getJSF
          , En = Li.assert;
        function pr(t, e) {
            this.type = t,
            this.p = new Cr(e.p,16),
            this.red = e.prime ? Cr.red(e.prime) : Cr.mont(this.p),
            this.zero = new Cr(0).toRed(this.red),
            this.one = new Cr(1).toRed(this.red),
            this.two = new Cr(2).toRed(this.red),
            this.n = e.n && new Cr(e.n,16),
            this.g = e.g && this.pointFromJSON(e.g, e.gRed),
            this._wnafT1 = new Array(4),
            this._wnafT2 = new Array(4),
            this._wnafT3 = new Array(4),
            this._wnafT4 = new Array(4),
            this._bitLength = this.n ? this.n.bitLength() : 0;
            var r = this.n && this.p.div(this.n);
            !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0,
            this.redN = this.n.toRed(this.red))
        }
        var An = pr;
        pr.prototype.point = function() {
            throw new Error("Not implemented")
        }
        ,
        pr.prototype.validate = function() {
            throw new Error("Not implemented")
        }
        ,
        pr.prototype._fixedNafMul = function(e, r) {
            En(e.precomputed);
            var i = e._getDoubles()
              , n = Sn(r, 1, this._bitLength)
              , a = (1 << i.step + 1) - (i.step % 2 === 0 ? 2 : 1);
            a /= 3;
            var f = [], h, c;
            for (h = 0; h < n.length; h += i.step) {
                c = 0;
                for (var l = h + i.step - 1; l >= h; l--)
                    c = (c << 1) + n[l];
                f.push(c)
            }
            for (var v = this.jpoint(null, null, null), y = this.jpoint(null, null, null), E = a; E > 0; E--) {
                for (h = 0; h < f.length; h++)
                    c = f[h],
                    c === E ? y = y.mixedAdd(i.points[h]) : c === -E && (y = y.mixedAdd(i.points[h].neg()));
                v = v.add(y)
            }
            return v.toP()
        }
        ,
        pr.prototype._wnafMul = function(e, r) {
            var i = 4
              , n = e._getNAFPoints(i);
            i = n.wnd;
            for (var a = n.points, f = Sn(r, i, this._bitLength), h = this.jpoint(null, null, null), c = f.length - 1; c >= 0; c--) {
                for (var l = 0; c >= 0 && f[c] === 0; c--)
                    l++;
                if (c >= 0 && l++,
                h = h.dblp(l),
                c < 0)
                    break;
                var v = f[c];
                En(v !== 0),
                e.type === "affine" ? v > 0 ? h = h.mixedAdd(a[v - 1 >> 1]) : h = h.mixedAdd(a[-v - 1 >> 1].neg()) : v > 0 ? h = h.add(a[v - 1 >> 1]) : h = h.add(a[-v - 1 >> 1].neg())
            }
            return e.type === "affine" ? h.toP() : h
        }
        ,
        pr.prototype._wnafMulAdd = function(e, r, i, n, a) {
            var f = this._wnafT1, h = this._wnafT2, c = this._wnafT3, l = 0, v, y, E;
            for (v = 0; v < n; v++) {
                E = r[v];
                var T = E._getNAFPoints(e);
                f[v] = T.wnd,
                h[v] = T.points
            }
            for (v = n - 1; v >= 1; v -= 2) {
                var I = v - 1
                  , P = v;
                if (f[I] !== 1 || f[P] !== 1) {
                    c[I] = Sn(i[I], f[I], this._bitLength),
                    c[P] = Sn(i[P], f[P], this._bitLength),
                    l = Math.max(c[I].length, l),
                    l = Math.max(c[P].length, l);
                    continue
                }
                var C = [r[I], null, null, r[P]];
                r[I].y.cmp(r[P].y) === 0 ? (C[1] = r[I].add(r[P]),
                C[2] = r[I].toJ().mixedAdd(r[P].neg())) : r[I].y.cmp(r[P].y.redNeg()) === 0 ? (C[1] = r[I].toJ().mixedAdd(r[P]),
                C[2] = r[I].add(r[P].neg())) : (C[1] = r[I].toJ().mixedAdd(r[P]),
                C[2] = r[I].toJ().mixedAdd(r[P].neg()));
                var L = [-3, -1, -5, -7, 0, 7, 5, 1, 3]
                  , x = el(i[I], i[P]);
                for (l = Math.max(x[0].length, l),
                c[I] = new Array(l),
                c[P] = new Array(l),
                y = 0; y < l; y++) {
                    var Y = x[0][y] | 0
                      , F = x[1][y] | 0;
                    c[I][y] = L[(Y + 1) * 3 + (F + 1)],
                    c[P][y] = 0,
                    h[I] = C
                }
            }
            var V = this.jpoint(null, null, null)
              , Q = this._wnafT4;
            for (v = l; v >= 0; v--) {
                for (var oe = 0; v >= 0; ) {
                    var te = !0;
                    for (y = 0; y < n; y++)
                        Q[y] = c[y][v] | 0,
                        Q[y] !== 0 && (te = !1);
                    if (!te)
                        break;
                    oe++,
                    v--
                }
                if (v >= 0 && oe++,
                V = V.dblp(oe),
                v < 0)
                    break;
                for (y = 0; y < n; y++) {
                    var W = Q[y];
                    W !== 0 && (W > 0 ? E = h[y][W - 1 >> 1] : W < 0 && (E = h[y][-W - 1 >> 1].neg()),
                    E.type === "affine" ? V = V.mixedAdd(E) : V = V.add(E))
                }
            }
            for (v = 0; v < n; v++)
                h[v] = null;
            return a ? V : V.toP()
        }
        ;
        function $t(t, e) {
            this.curve = t,
            this.type = e,
            this.precomputed = null
        }
        pr.BasePoint = $t,
        $t.prototype.eq = function() {
            throw new Error("Not implemented")
        }
        ,
        $t.prototype.validate = function() {
            return this.curve.validate(this)
        }
        ,
        pr.prototype.decodePoint = function(e, r) {
            e = Li.toArray(e, r);
            var i = this.p.byteLength();
            if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * i) {
                e[0] === 6 ? En(e[e.length - 1] % 2 === 0) : e[0] === 7 && En(e[e.length - 1] % 2 === 1);
                var n = this.point(e.slice(1, 1 + i), e.slice(1 + i, 1 + 2 * i));
                return n
            } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === i)
                return this.pointFromX(e.slice(1, 1 + i), e[0] === 3);
            throw new Error("Unknown point format")
        }
        ,
        $t.prototype.encodeCompressed = function(e) {
            return this.encode(e, !0)
        }
        ,
        $t.prototype._encode = function(e) {
            var r = this.curve.p.byteLength()
              , i = this.getX().toArray("be", r);
            return e ? [this.getY().isEven() ? 2 : 3].concat(i) : [4].concat(i, this.getY().toArray("be", r))
        }
        ,
        $t.prototype.encode = function(e, r) {
            return Li.encode(this._encode(r), e)
        }
        ,
        $t.prototype.precompute = function(e) {
            if (this.precomputed)
                return this;
            var r = {
                doubles: null,
                naf: null,
                beta: null
            };
            return r.naf = this._getNAFPoints(8),
            r.doubles = this._getDoubles(4, e),
            r.beta = this._getBeta(),
            this.precomputed = r,
            this
        }
        ,
        $t.prototype._hasDoubles = function(e) {
            if (!this.precomputed)
                return !1;
            var r = this.precomputed.doubles;
            return r ? r.points.length >= Math.ceil((e.bitLength() + 1) / r.step) : !1
        }
        ,
        $t.prototype._getDoubles = function(e, r) {
            if (this.precomputed && this.precomputed.doubles)
                return this.precomputed.doubles;
            for (var i = [this], n = this, a = 0; a < r; a += e) {
                for (var f = 0; f < e; f++)
                    n = n.dbl();
                i.push(n)
            }
            return {
                step: e,
                points: i
            }
        }
        ,
        $t.prototype._getNAFPoints = function(e) {
            if (this.precomputed && this.precomputed.naf)
                return this.precomputed.naf;
            for (var r = [this], i = (1 << e) - 1, n = i === 1 ? null : this.dbl(), a = 1; a < i; a++)
                r[a] = r[a - 1].add(n);
            return {
                wnd: e,
                points: r
            }
        }
        ,
        $t.prototype._getBeta = function() {
            return null
        }
        ,
        $t.prototype.dblp = function(e) {
            for (var r = this, i = 0; i < e; i++)
                r = r.dbl();
            return r
        }
        ;
        var tl = It
          , Ee = Yt
          , qa = we
          , ti = An
          , rl = tl.assert;
        function Ot(t) {
            ti.call(this, "short", t),
            this.a = new Ee(t.a,16).toRed(this.red),
            this.b = new Ee(t.b,16).toRed(this.red),
            this.tinv = this.two.redInvm(),
            this.zeroA = this.a.fromRed().cmpn(0) === 0,
            this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0,
            this.endo = this._getEndomorphism(t),
            this._endoWnafT1 = new Array(4),
            this._endoWnafT2 = new Array(4)
        }
        qa(Ot, ti);
        var il = Ot;
        Ot.prototype._getEndomorphism = function(e) {
            if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
                var r, i;
                if (e.beta)
                    r = new Ee(e.beta,16).toRed(this.red);
                else {
                    var n = this._getEndoRoots(this.p);
                    r = n[0].cmp(n[1]) < 0 ? n[0] : n[1],
                    r = r.toRed(this.red)
                }
                if (e.lambda)
                    i = new Ee(e.lambda,16);
                else {
                    var a = this._getEndoRoots(this.n);
                    this.g.mul(a[0]).x.cmp(this.g.x.redMul(r)) === 0 ? i = a[0] : (i = a[1],
                    rl(this.g.mul(i).x.cmp(this.g.x.redMul(r)) === 0))
                }
                var f;
                return e.basis ? f = e.basis.map(function(h) {
                    return {
                        a: new Ee(h.a,16),
                        b: new Ee(h.b,16)
                    }
                }) : f = this._getEndoBasis(i),
                {
                    beta: r,
                    lambda: i,
                    basis: f
                }
            }
        }
        ,
        Ot.prototype._getEndoRoots = function(e) {
            var r = e === this.p ? this.red : Ee.mont(e)
              , i = new Ee(2).toRed(r).redInvm()
              , n = i.redNeg()
              , a = new Ee(3).toRed(r).redNeg().redSqrt().redMul(i)
              , f = n.redAdd(a).fromRed()
              , h = n.redSub(a).fromRed();
            return [f, h]
        }
        ,
        Ot.prototype._getEndoBasis = function(e) {
            for (var r = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i = e, n = this.n.clone(), a = new Ee(1), f = new Ee(0), h = new Ee(0), c = new Ee(1), l, v, y, E, T, I, P, C = 0, L, x; i.cmpn(0) !== 0; ) {
                var Y = n.div(i);
                L = n.sub(Y.mul(i)),
                x = h.sub(Y.mul(a));
                var F = c.sub(Y.mul(f));
                if (!y && L.cmp(r) < 0)
                    l = P.neg(),
                    v = a,
                    y = L.neg(),
                    E = x;
                else if (y && ++C === 2)
                    break;
                P = L,
                n = i,
                i = L,
                h = a,
                a = x,
                c = f,
                f = F
            }
            T = L.neg(),
            I = x;
            var V = y.sqr().add(E.sqr())
              , Q = T.sqr().add(I.sqr());
            return Q.cmp(V) >= 0 && (T = l,
            I = v),
            y.negative && (y = y.neg(),
            E = E.neg()),
            T.negative && (T = T.neg(),
            I = I.neg()),
            [{
                a: y,
                b: E
            }, {
                a: T,
                b: I
            }]
        }
        ,
        Ot.prototype._endoSplit = function(e) {
            var r = this.endo.basis
              , i = r[0]
              , n = r[1]
              , a = n.b.mul(e).divRound(this.n)
              , f = i.b.neg().mul(e).divRound(this.n)
              , h = a.mul(i.a)
              , c = f.mul(n.a)
              , l = a.mul(i.b)
              , v = f.mul(n.b)
              , y = e.sub(h).sub(c)
              , E = l.add(v).neg();
            return {
                k1: y,
                k2: E
            }
        }
        ,
        Ot.prototype.pointFromX = function(e, r) {
            e = new Ee(e,16),
            e.red || (e = e.toRed(this.red));
            var i = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b)
              , n = i.redSqrt();
            if (n.redSqr().redSub(i).cmp(this.zero) !== 0)
                throw new Error("invalid point");
            var a = n.fromRed().isOdd();
            return (r && !a || !r && a) && (n = n.redNeg()),
            this.point(e, n)
        }
        ,
        Ot.prototype.validate = function(e) {
            if (e.inf)
                return !0;
            var r = e.x
              , i = e.y
              , n = this.a.redMul(r)
              , a = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
            return i.redSqr().redISub(a).cmpn(0) === 0
        }
        ,
        Ot.prototype._endoWnafMulAdd = function(e, r, i) {
            for (var n = this._endoWnafT1, a = this._endoWnafT2, f = 0; f < e.length; f++) {
                var h = this._endoSplit(r[f])
                  , c = e[f]
                  , l = c._getBeta();
                h.k1.negative && (h.k1.ineg(),
                c = c.neg(!0)),
                h.k2.negative && (h.k2.ineg(),
                l = l.neg(!0)),
                n[f * 2] = c,
                n[f * 2 + 1] = l,
                a[f * 2] = h.k1,
                a[f * 2 + 1] = h.k2
            }
            for (var v = this._wnafMulAdd(1, n, a, f * 2, i), y = 0; y < f * 2; y++)
                n[y] = null,
                a[y] = null;
            return v
        }
        ;
        function Xe(t, e, r, i) {
            ti.BasePoint.call(this, t, "affine"),
            e === null && r === null ? (this.x = null,
            this.y = null,
            this.inf = !0) : (this.x = new Ee(e,16),
            this.y = new Ee(r,16),
            i && (this.x.forceRed(this.curve.red),
            this.y.forceRed(this.curve.red)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.inf = !1)
        }
        qa(Xe, ti.BasePoint),
        Ot.prototype.point = function(e, r, i) {
            return new Xe(this,e,r,i)
        }
        ,
        Ot.prototype.pointFromJSON = function(e, r) {
            return Xe.fromJSON(this, e, r)
        }
        ,
        Xe.prototype._getBeta = function() {
            if (this.curve.endo) {
                var e = this.precomputed;
                if (e && e.beta)
                    return e.beta;
                var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (e) {
                    var i = this.curve
                      , n = function(a) {
                        return i.point(a.x.redMul(i.endo.beta), a.y)
                    };
                    e.beta = r,
                    r.precomputed = {
                        beta: null,
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(n)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(n)
                        }
                    }
                }
                return r
            }
        }
        ,
        Xe.prototype.toJSON = function() {
            return this.precomputed ? [this.x, this.y, this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }] : [this.x, this.y]
        }
        ,
        Xe.fromJSON = function(e, r, i) {
            typeof r == "string" && (r = JSON.parse(r));
            var n = e.point(r[0], r[1], i);
            if (!r[2])
                return n;
            function a(h) {
                return e.point(h[0], h[1], i)
            }
            var f = r[2];
            return n.precomputed = {
                beta: null,
                doubles: f.doubles && {
                    step: f.doubles.step,
                    points: [n].concat(f.doubles.points.map(a))
                },
                naf: f.naf && {
                    wnd: f.naf.wnd,
                    points: [n].concat(f.naf.points.map(a))
                }
            },
            n
        }
        ,
        Xe.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
        }
        ,
        Xe.prototype.isInfinity = function() {
            return this.inf
        }
        ,
        Xe.prototype.add = function(e) {
            if (this.inf)
                return e;
            if (e.inf)
                return this;
            if (this.eq(e))
                return this.dbl();
            if (this.neg().eq(e))
                return this.curve.point(null, null);
            if (this.x.cmp(e.x) === 0)
                return this.curve.point(null, null);
            var r = this.y.redSub(e.y);
            r.cmpn(0) !== 0 && (r = r.redMul(this.x.redSub(e.x).redInvm()));
            var i = r.redSqr().redISub(this.x).redISub(e.x)
              , n = r.redMul(this.x.redSub(i)).redISub(this.y);
            return this.curve.point(i, n)
        }
        ,
        Xe.prototype.dbl = function() {
            if (this.inf)
                return this;
            var e = this.y.redAdd(this.y);
            if (e.cmpn(0) === 0)
                return this.curve.point(null, null);
            var r = this.curve.a
              , i = this.x.redSqr()
              , n = e.redInvm()
              , a = i.redAdd(i).redIAdd(i).redIAdd(r).redMul(n)
              , f = a.redSqr().redISub(this.x.redAdd(this.x))
              , h = a.redMul(this.x.redSub(f)).redISub(this.y);
            return this.curve.point(f, h)
        }
        ,
        Xe.prototype.getX = function() {
            return this.x.fromRed()
        }
        ,
        Xe.prototype.getY = function() {
            return this.y.fromRed()
        }
        ,
        Xe.prototype.mul = function(e) {
            return e = new Ee(e,16),
            this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
        }
        ,
        Xe.prototype.mulAdd = function(e, r, i) {
            var n = [this, r]
              , a = [e, i];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, a) : this.curve._wnafMulAdd(1, n, a, 2)
        }
        ,
        Xe.prototype.jmulAdd = function(e, r, i) {
            var n = [this, r]
              , a = [e, i];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, a, !0) : this.curve._wnafMulAdd(1, n, a, 2, !0)
        }
        ,
        Xe.prototype.eq = function(e) {
            return this === e || this.inf === e.inf && (this.inf || this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0)
        }
        ,
        Xe.prototype.neg = function(e) {
            if (this.inf)
                return this;
            var r = this.curve.point(this.x, this.y.redNeg());
            if (e && this.precomputed) {
                var i = this.precomputed
                  , n = function(a) {
                    return a.neg()
                };
                r.precomputed = {
                    naf: i.naf && {
                        wnd: i.naf.wnd,
                        points: i.naf.points.map(n)
                    },
                    doubles: i.doubles && {
                        step: i.doubles.step,
                        points: i.doubles.points.map(n)
                    }
                }
            }
            return r
        }
        ,
        Xe.prototype.toJ = function() {
            if (this.inf)
                return this.curve.jpoint(null, null, null);
            var e = this.curve.jpoint(this.x, this.y, this.curve.one);
            return e
        }
        ;
        function at(t, e, r, i) {
            ti.BasePoint.call(this, t, "jacobian"),
            e === null && r === null && i === null ? (this.x = this.curve.one,
            this.y = this.curve.one,
            this.z = new Ee(0)) : (this.x = new Ee(e,16),
            this.y = new Ee(r,16),
            this.z = new Ee(i,16)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            this.zOne = this.z === this.curve.one
        }
        qa(at, ti.BasePoint),
        Ot.prototype.jpoint = function(e, r, i) {
            return new at(this,e,r,i)
        }
        ,
        at.prototype.toP = function() {
            if (this.isInfinity())
                return this.curve.point(null, null);
            var e = this.z.redInvm()
              , r = e.redSqr()
              , i = this.x.redMul(r)
              , n = this.y.redMul(r).redMul(e);
            return this.curve.point(i, n)
        }
        ,
        at.prototype.neg = function() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }
        ,
        at.prototype.add = function(e) {
            if (this.isInfinity())
                return e;
            if (e.isInfinity())
                return this;
            var r = e.z.redSqr()
              , i = this.z.redSqr()
              , n = this.x.redMul(r)
              , a = e.x.redMul(i)
              , f = this.y.redMul(r.redMul(e.z))
              , h = e.y.redMul(i.redMul(this.z))
              , c = n.redSub(a)
              , l = f.redSub(h);
            if (c.cmpn(0) === 0)
                return l.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
            var v = c.redSqr()
              , y = v.redMul(c)
              , E = n.redMul(v)
              , T = l.redSqr().redIAdd(y).redISub(E).redISub(E)
              , I = l.redMul(E.redISub(T)).redISub(f.redMul(y))
              , P = this.z.redMul(e.z).redMul(c);
            return this.curve.jpoint(T, I, P)
        }
        ,
        at.prototype.mixedAdd = function(e) {
            if (this.isInfinity())
                return e.toJ();
            if (e.isInfinity())
                return this;
            var r = this.z.redSqr()
              , i = this.x
              , n = e.x.redMul(r)
              , a = this.y
              , f = e.y.redMul(r).redMul(this.z)
              , h = i.redSub(n)
              , c = a.redSub(f);
            if (h.cmpn(0) === 0)
                return c.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
            var l = h.redSqr()
              , v = l.redMul(h)
              , y = i.redMul(l)
              , E = c.redSqr().redIAdd(v).redISub(y).redISub(y)
              , T = c.redMul(y.redISub(E)).redISub(a.redMul(v))
              , I = this.z.redMul(h);
            return this.curve.jpoint(E, T, I)
        }
        ,
        at.prototype.dblp = function(e) {
            if (e === 0)
                return this;
            if (this.isInfinity())
                return this;
            if (!e)
                return this.dbl();
            var r;
            if (this.curve.zeroA || this.curve.threeA) {
                var i = this;
                for (r = 0; r < e; r++)
                    i = i.dbl();
                return i
            }
            var n = this.curve.a
              , a = this.curve.tinv
              , f = this.x
              , h = this.y
              , c = this.z
              , l = c.redSqr().redSqr()
              , v = h.redAdd(h);
            for (r = 0; r < e; r++) {
                var y = f.redSqr()
                  , E = v.redSqr()
                  , T = E.redSqr()
                  , I = y.redAdd(y).redIAdd(y).redIAdd(n.redMul(l))
                  , P = f.redMul(E)
                  , C = I.redSqr().redISub(P.redAdd(P))
                  , L = P.redISub(C)
                  , x = I.redMul(L);
                x = x.redIAdd(x).redISub(T);
                var Y = v.redMul(c);
                r + 1 < e && (l = l.redMul(T)),
                f = C,
                c = Y,
                v = x
            }
            return this.curve.jpoint(f, v.redMul(a), c)
        }
        ,
        at.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
        }
        ,
        at.prototype._zeroDbl = function() {
            var e, r, i;
            if (this.zOne) {
                var n = this.x.redSqr()
                  , a = this.y.redSqr()
                  , f = a.redSqr()
                  , h = this.x.redAdd(a).redSqr().redISub(n).redISub(f);
                h = h.redIAdd(h);
                var c = n.redAdd(n).redIAdd(n)
                  , l = c.redSqr().redISub(h).redISub(h)
                  , v = f.redIAdd(f);
                v = v.redIAdd(v),
                v = v.redIAdd(v),
                e = l,
                r = c.redMul(h.redISub(l)).redISub(v),
                i = this.y.redAdd(this.y)
            } else {
                var y = this.x.redSqr()
                  , E = this.y.redSqr()
                  , T = E.redSqr()
                  , I = this.x.redAdd(E).redSqr().redISub(y).redISub(T);
                I = I.redIAdd(I);
                var P = y.redAdd(y).redIAdd(y)
                  , C = P.redSqr()
                  , L = T.redIAdd(T);
                L = L.redIAdd(L),
                L = L.redIAdd(L),
                e = C.redISub(I).redISub(I),
                r = P.redMul(I.redISub(e)).redISub(L),
                i = this.y.redMul(this.z),
                i = i.redIAdd(i)
            }
            return this.curve.jpoint(e, r, i)
        }
        ,
        at.prototype._threeDbl = function() {
            var e, r, i;
            if (this.zOne) {
                var n = this.x.redSqr()
                  , a = this.y.redSqr()
                  , f = a.redSqr()
                  , h = this.x.redAdd(a).redSqr().redISub(n).redISub(f);
                h = h.redIAdd(h);
                var c = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a)
                  , l = c.redSqr().redISub(h).redISub(h);
                e = l;
                var v = f.redIAdd(f);
                v = v.redIAdd(v),
                v = v.redIAdd(v),
                r = c.redMul(h.redISub(l)).redISub(v),
                i = this.y.redAdd(this.y)
            } else {
                var y = this.z.redSqr()
                  , E = this.y.redSqr()
                  , T = this.x.redMul(E)
                  , I = this.x.redSub(y).redMul(this.x.redAdd(y));
                I = I.redAdd(I).redIAdd(I);
                var P = T.redIAdd(T);
                P = P.redIAdd(P);
                var C = P.redAdd(P);
                e = I.redSqr().redISub(C),
                i = this.y.redAdd(this.z).redSqr().redISub(E).redISub(y);
                var L = E.redSqr();
                L = L.redIAdd(L),
                L = L.redIAdd(L),
                L = L.redIAdd(L),
                r = I.redMul(P.redISub(e)).redISub(L)
            }
            return this.curve.jpoint(e, r, i)
        }
        ,
        at.prototype._dbl = function() {
            var e = this.curve.a
              , r = this.x
              , i = this.y
              , n = this.z
              , a = n.redSqr().redSqr()
              , f = r.redSqr()
              , h = i.redSqr()
              , c = f.redAdd(f).redIAdd(f).redIAdd(e.redMul(a))
              , l = r.redAdd(r);
            l = l.redIAdd(l);
            var v = l.redMul(h)
              , y = c.redSqr().redISub(v.redAdd(v))
              , E = v.redISub(y)
              , T = h.redSqr();
            T = T.redIAdd(T),
            T = T.redIAdd(T),
            T = T.redIAdd(T);
            var I = c.redMul(E).redISub(T)
              , P = i.redAdd(i).redMul(n);
            return this.curve.jpoint(y, I, P)
        }
        ,
        at.prototype.trpl = function() {
            if (!this.curve.zeroA)
                return this.dbl().add(this);
            var e = this.x.redSqr()
              , r = this.y.redSqr()
              , i = this.z.redSqr()
              , n = r.redSqr()
              , a = e.redAdd(e).redIAdd(e)
              , f = a.redSqr()
              , h = this.x.redAdd(r).redSqr().redISub(e).redISub(n);
            h = h.redIAdd(h),
            h = h.redAdd(h).redIAdd(h),
            h = h.redISub(f);
            var c = h.redSqr()
              , l = n.redIAdd(n);
            l = l.redIAdd(l),
            l = l.redIAdd(l),
            l = l.redIAdd(l);
            var v = a.redIAdd(h).redSqr().redISub(f).redISub(c).redISub(l)
              , y = r.redMul(v);
            y = y.redIAdd(y),
            y = y.redIAdd(y);
            var E = this.x.redMul(c).redISub(y);
            E = E.redIAdd(E),
            E = E.redIAdd(E);
            var T = this.y.redMul(v.redMul(l.redISub(v)).redISub(h.redMul(c)));
            T = T.redIAdd(T),
            T = T.redIAdd(T),
            T = T.redIAdd(T);
            var I = this.z.redAdd(h).redSqr().redISub(i).redISub(c);
            return this.curve.jpoint(E, T, I)
        }
        ,
        at.prototype.mul = function(e, r) {
            return e = new Ee(e,r),
            this.curve._wnafMul(this, e)
        }
        ,
        at.prototype.eq = function(e) {
            if (e.type === "affine")
                return this.eq(e.toJ());
            if (this === e)
                return !0;
            var r = this.z.redSqr()
              , i = e.z.redSqr();
            if (this.x.redMul(i).redISub(e.x.redMul(r)).cmpn(0) !== 0)
                return !1;
            var n = r.redMul(this.z)
              , a = i.redMul(e.z);
            return this.y.redMul(a).redISub(e.y.redMul(n)).cmpn(0) === 0
        }
        ,
        at.prototype.eqXToP = function(e) {
            var r = this.z.redSqr()
              , i = e.toRed(this.curve.red).redMul(r);
            if (this.x.cmp(i) === 0)
                return !0;
            for (var n = e.clone(), a = this.curve.redN.redMul(r); ; ) {
                if (n.iadd(this.curve.n),
                n.cmp(this.curve.p) >= 0)
                    return !1;
                if (i.redIAdd(a),
                this.x.cmp(i) === 0)
                    return !0
            }
        }
        ,
        at.prototype.inspect = function() {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
        }
        ,
        at.prototype.isInfinity = function() {
            return this.z.cmpn(0) === 0
        }
        ;
        var ri = Yt
          , Es = we
          , Rn = An
          , nl = It;
        function ii(t) {
            Rn.call(this, "mont", t),
            this.a = new ri(t.a,16).toRed(this.red),
            this.b = new ri(t.b,16).toRed(this.red),
            this.i4 = new ri(4).toRed(this.red).redInvm(),
            this.two = new ri(2).toRed(this.red),
            this.a24 = this.i4.redMul(this.a.redAdd(this.two))
        }
        Es(ii, Rn);
        var al = ii;
        ii.prototype.validate = function(e) {
            var r = e.normalize().x
              , i = r.redSqr()
              , n = i.redMul(r).redAdd(i.redMul(this.a)).redAdd(r)
              , a = n.redSqrt();
            return a.redSqr().cmp(n) === 0
        }
        ;
        function Ze(t, e, r) {
            Rn.BasePoint.call(this, t, "projective"),
            e === null && r === null ? (this.x = this.curve.one,
            this.z = this.curve.zero) : (this.x = new ri(e,16),
            this.z = new ri(r,16),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)))
        }
        Es(Ze, Rn.BasePoint),
        ii.prototype.decodePoint = function(e, r) {
            return this.point(nl.toArray(e, r), 1)
        }
        ,
        ii.prototype.point = function(e, r) {
            return new Ze(this,e,r)
        }
        ,
        ii.prototype.pointFromJSON = function(e) {
            return Ze.fromJSON(this, e)
        }
        ,
        Ze.prototype.precompute = function() {}
        ,
        Ze.prototype._encode = function() {
            return this.getX().toArray("be", this.curve.p.byteLength())
        }
        ,
        Ze.fromJSON = function(e, r) {
            return new Ze(e,r[0],r[1] || e.one)
        }
        ,
        Ze.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }
        ,
        Ze.prototype.isInfinity = function() {
            return this.z.cmpn(0) === 0
        }
        ,
        Ze.prototype.dbl = function() {
            var e = this.x.redAdd(this.z)
              , r = e.redSqr()
              , i = this.x.redSub(this.z)
              , n = i.redSqr()
              , a = r.redSub(n)
              , f = r.redMul(n)
              , h = a.redMul(n.redAdd(this.curve.a24.redMul(a)));
            return this.curve.point(f, h)
        }
        ,
        Ze.prototype.add = function() {
            throw new Error("Not supported on Montgomery curve")
        }
        ,
        Ze.prototype.diffAdd = function(e, r) {
            var i = this.x.redAdd(this.z)
              , n = this.x.redSub(this.z)
              , a = e.x.redAdd(e.z)
              , f = e.x.redSub(e.z)
              , h = f.redMul(i)
              , c = a.redMul(n)
              , l = r.z.redMul(h.redAdd(c).redSqr())
              , v = r.x.redMul(h.redISub(c).redSqr());
            return this.curve.point(l, v)
        }
        ,
        Ze.prototype.mul = function(e) {
            for (var r = e.clone(), i = this, n = this.curve.point(null, null), a = this, f = []; r.cmpn(0) !== 0; r.iushrn(1))
                f.push(r.andln(1));
            for (var h = f.length - 1; h >= 0; h--)
                f[h] === 0 ? (i = i.diffAdd(n, a),
                n = n.dbl()) : (n = i.diffAdd(n, a),
                i = i.dbl());
            return n
        }
        ,
        Ze.prototype.mulAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }
        ,
        Ze.prototype.jumlAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }
        ,
        Ze.prototype.eq = function(e) {
            return this.getX().cmp(e.getX()) === 0
        }
        ,
        Ze.prototype.normalize = function() {
            return this.x = this.x.redMul(this.z.redInvm()),
            this.z = this.curve.one,
            this
        }
        ,
        Ze.prototype.getX = function() {
            return this.normalize(),
            this.x.fromRed()
        }
        ;
        var fl = It
          , nr = Yt
          , As = we
          , Bn = An
          , ol = fl.assert;
        function Kt(t) {
            this.twisted = (t.a | 0) !== 1,
            this.mOneA = this.twisted && (t.a | 0) === -1,
            this.extended = this.mOneA,
            Bn.call(this, "edwards", t),
            this.a = new nr(t.a,16).umod(this.red.m),
            this.a = this.a.toRed(this.red),
            this.c = new nr(t.c,16).toRed(this.red),
            this.c2 = this.c.redSqr(),
            this.d = new nr(t.d,16).toRed(this.red),
            this.dd = this.d.redAdd(this.d),
            ol(!this.twisted || this.c.fromRed().cmpn(1) === 0),
            this.oneC = (t.c | 0) === 1
        }
        As(Kt, Bn);
        var sl = Kt;
        Kt.prototype._mulA = function(e) {
            return this.mOneA ? e.redNeg() : this.a.redMul(e)
        }
        ,
        Kt.prototype._mulC = function(e) {
            return this.oneC ? e : this.c.redMul(e)
        }
        ,
        Kt.prototype.jpoint = function(e, r, i, n) {
            return this.point(e, r, i, n)
        }
        ,
        Kt.prototype.pointFromX = function(e, r) {
            e = new nr(e,16),
            e.red || (e = e.toRed(this.red));
            var i = e.redSqr()
              , n = this.c2.redSub(this.a.redMul(i))
              , a = this.one.redSub(this.c2.redMul(this.d).redMul(i))
              , f = n.redMul(a.redInvm())
              , h = f.redSqrt();
            if (h.redSqr().redSub(f).cmp(this.zero) !== 0)
                throw new Error("invalid point");
            var c = h.fromRed().isOdd();
            return (r && !c || !r && c) && (h = h.redNeg()),
            this.point(e, h)
        }
        ,
        Kt.prototype.pointFromY = function(e, r) {
            e = new nr(e,16),
            e.red || (e = e.toRed(this.red));
            var i = e.redSqr()
              , n = i.redSub(this.c2)
              , a = i.redMul(this.d).redMul(this.c2).redSub(this.a)
              , f = n.redMul(a.redInvm());
            if (f.cmp(this.zero) === 0) {
                if (r)
                    throw new Error("invalid point");
                return this.point(this.zero, e)
            }
            var h = f.redSqrt();
            if (h.redSqr().redSub(f).cmp(this.zero) !== 0)
                throw new Error("invalid point");
            return h.fromRed().isOdd() !== r && (h = h.redNeg()),
            this.point(h, e)
        }
        ,
        Kt.prototype.validate = function(e) {
            if (e.isInfinity())
                return !0;
            e.normalize();
            var r = e.x.redSqr()
              , i = e.y.redSqr()
              , n = r.redMul(this.a).redAdd(i)
              , a = this.c2.redMul(this.one.redAdd(this.d.redMul(r).redMul(i)));
            return n.cmp(a) === 0
        }
        ;
        function ve(t, e, r, i, n) {
            Bn.BasePoint.call(this, t, "projective"),
            e === null && r === null && i === null ? (this.x = this.curve.zero,
            this.y = this.curve.one,
            this.z = this.curve.one,
            this.t = this.curve.zero,
            this.zOne = !0) : (this.x = new nr(e,16),
            this.y = new nr(r,16),
            this.z = i ? new nr(i,16) : this.curve.one,
            this.t = n && new nr(n,16),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
            this.zOne = this.z === this.curve.one,
            this.curve.extended && !this.t && (this.t = this.x.redMul(this.y),
            this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
        }
        As(ve, Bn.BasePoint),
        Kt.prototype.pointFromJSON = function(e) {
            return ve.fromJSON(this, e)
        }
        ,
        Kt.prototype.point = function(e, r, i, n) {
            return new ve(this,e,r,i,n)
        }
        ,
        ve.fromJSON = function(e, r) {
            return new ve(e,r[0],r[1],r[2])
        }
        ,
        ve.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }
        ,
        ve.prototype.isInfinity = function() {
            return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0)
        }
        ,
        ve.prototype._extDbl = function() {
            var e = this.x.redSqr()
              , r = this.y.redSqr()
              , i = this.z.redSqr();
            i = i.redIAdd(i);
            var n = this.curve._mulA(e)
              , a = this.x.redAdd(this.y).redSqr().redISub(e).redISub(r)
              , f = n.redAdd(r)
              , h = f.redSub(i)
              , c = n.redSub(r)
              , l = a.redMul(h)
              , v = f.redMul(c)
              , y = a.redMul(c)
              , E = h.redMul(f);
            return this.curve.point(l, v, E, y)
        }
        ,
        ve.prototype._projDbl = function() {
            var e = this.x.redAdd(this.y).redSqr(), r = this.x.redSqr(), i = this.y.redSqr(), n, a, f, h, c, l;
            if (this.curve.twisted) {
                h = this.curve._mulA(r);
                var v = h.redAdd(i);
                this.zOne ? (n = e.redSub(r).redSub(i).redMul(v.redSub(this.curve.two)),
                a = v.redMul(h.redSub(i)),
                f = v.redSqr().redSub(v).redSub(v)) : (c = this.z.redSqr(),
                l = v.redSub(c).redISub(c),
                n = e.redSub(r).redISub(i).redMul(l),
                a = v.redMul(h.redSub(i)),
                f = v.redMul(l))
            } else
                h = r.redAdd(i),
                c = this.curve._mulC(this.z).redSqr(),
                l = h.redSub(c).redSub(c),
                n = this.curve._mulC(e.redISub(h)).redMul(l),
                a = this.curve._mulC(h).redMul(r.redISub(i)),
                f = h.redMul(l);
            return this.curve.point(n, a, f)
        }
        ,
        ve.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
        }
        ,
        ve.prototype._extAdd = function(e) {
            var r = this.y.redSub(this.x).redMul(e.y.redSub(e.x))
              , i = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x))
              , n = this.t.redMul(this.curve.dd).redMul(e.t)
              , a = this.z.redMul(e.z.redAdd(e.z))
              , f = i.redSub(r)
              , h = a.redSub(n)
              , c = a.redAdd(n)
              , l = i.redAdd(r)
              , v = f.redMul(h)
              , y = c.redMul(l)
              , E = f.redMul(l)
              , T = h.redMul(c);
            return this.curve.point(v, y, T, E)
        }
        ,
        ve.prototype._projAdd = function(e) {
            var r = this.z.redMul(e.z), i = r.redSqr(), n = this.x.redMul(e.x), a = this.y.redMul(e.y), f = this.curve.d.redMul(n).redMul(a), h = i.redSub(f), c = i.redAdd(f), l = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(n).redISub(a), v = r.redMul(h).redMul(l), y, E;
            return this.curve.twisted ? (y = r.redMul(c).redMul(a.redSub(this.curve._mulA(n))),
            E = h.redMul(c)) : (y = r.redMul(c).redMul(a.redSub(n)),
            E = this.curve._mulC(h).redMul(c)),
            this.curve.point(v, y, E)
        }
        ,
        ve.prototype.add = function(e) {
            return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
        }
        ,
        ve.prototype.mul = function(e) {
            return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
        }
        ,
        ve.prototype.mulAdd = function(e, r, i) {
            return this.curve._wnafMulAdd(1, [this, r], [e, i], 2, !1)
        }
        ,
        ve.prototype.jmulAdd = function(e, r, i) {
            return this.curve._wnafMulAdd(1, [this, r], [e, i], 2, !0)
        }
        ,
        ve.prototype.normalize = function() {
            if (this.zOne)
                return this;
            var e = this.z.redInvm();
            return this.x = this.x.redMul(e),
            this.y = this.y.redMul(e),
            this.t && (this.t = this.t.redMul(e)),
            this.z = this.curve.one,
            this.zOne = !0,
            this
        }
        ,
        ve.prototype.neg = function() {
            return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
        }
        ,
        ve.prototype.getX = function() {
            return this.normalize(),
            this.x.fromRed()
        }
        ,
        ve.prototype.getY = function() {
            return this.normalize(),
            this.y.fromRed()
        }
        ,
        ve.prototype.eq = function(e) {
            return this === e || this.getX().cmp(e.getX()) === 0 && this.getY().cmp(e.getY()) === 0
        }
        ,
        ve.prototype.eqXToP = function(e) {
            var r = e.toRed(this.curve.red).redMul(this.z);
            if (this.x.cmp(r) === 0)
                return !0;
            for (var i = e.clone(), n = this.curve.redN.redMul(this.z); ; ) {
                if (i.iadd(this.curve.n),
                i.cmp(this.curve.p) >= 0)
                    return !1;
                if (r.redIAdd(n),
                this.x.cmp(r) === 0)
                    return !0
            }
        }
        ,
        ve.prototype.toP = ve.prototype.normalize,
        ve.prototype.mixedAdd = ve.prototype.add,
        function(t) {
            var e = t;
            e.base = An,
            e.short = il,
            e.mont = al,
            e.edwards = sl
        }(Na);
        var In = {}
          , Tn = {}
          , fe = {}
          , hl = kr
          , ul = we;
        fe.inherits = ul;
        function cl(t, e) {
            return (t.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= t.length ? !1 : (t.charCodeAt(e + 1) & 64512) === 56320
        }
        function dl(t, e) {
            if (Array.isArray(t))
                return t.slice();
            if (!t)
                return [];
            var r = [];
            if (typeof t == "string")
                if (e) {
                    if (e === "hex")
                        for (t = t.replace(/[^a-z0-9]+/ig, ""),
                        t.length % 2 !== 0 && (t = "0" + t),
                        n = 0; n < t.length; n += 2)
                            r.push(parseInt(t[n] + t[n + 1], 16))
                } else
                    for (var i = 0, n = 0; n < t.length; n++) {
                        var a = t.charCodeAt(n);
                        a < 128 ? r[i++] = a : a < 2048 ? (r[i++] = a >> 6 | 192,
                        r[i++] = a & 63 | 128) : cl(t, n) ? (a = 65536 + ((a & 1023) << 10) + (t.charCodeAt(++n) & 1023),
                        r[i++] = a >> 18 | 240,
                        r[i++] = a >> 12 & 63 | 128,
                        r[i++] = a >> 6 & 63 | 128,
                        r[i++] = a & 63 | 128) : (r[i++] = a >> 12 | 224,
                        r[i++] = a >> 6 & 63 | 128,
                        r[i++] = a & 63 | 128)
                    }
            else
                for (n = 0; n < t.length; n++)
                    r[n] = t[n] | 0;
            return r
        }
        fe.toArray = dl;
        function ll(t) {
            for (var e = "", r = 0; r < t.length; r++)
                e += Bs(t[r].toString(16));
            return e
        }
        fe.toHex = ll;
        function Rs(t) {
            var e = t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (t & 255) << 24;
            return e >>> 0
        }
        fe.htonl = Rs;
        function pl(t, e) {
            for (var r = "", i = 0; i < t.length; i++) {
                var n = t[i];
                e === "little" && (n = Rs(n)),
                r += Is(n.toString(16))
            }
            return r
        }
        fe.toHex32 = pl;
        function Bs(t) {
            return t.length === 1 ? "0" + t : t
        }
        fe.zero2 = Bs;
        function Is(t) {
            return t.length === 7 ? "0" + t : t.length === 6 ? "00" + t : t.length === 5 ? "000" + t : t.length === 4 ? "0000" + t : t.length === 3 ? "00000" + t : t.length === 2 ? "000000" + t : t.length === 1 ? "0000000" + t : t
        }
        fe.zero8 = Is;
        function vl(t, e, r, i) {
            var n = r - e;
            hl(n % 4 === 0);
            for (var a = new Array(n / 4), f = 0, h = e; f < a.length; f++,
            h += 4) {
                var c;
                i === "big" ? c = t[h] << 24 | t[h + 1] << 16 | t[h + 2] << 8 | t[h + 3] : c = t[h + 3] << 24 | t[h + 2] << 16 | t[h + 1] << 8 | t[h],
                a[f] = c >>> 0
            }
            return a
        }
        fe.join32 = vl;
        function bl(t, e) {
            for (var r = new Array(t.length * 4), i = 0, n = 0; i < t.length; i++,
            n += 4) {
                var a = t[i];
                e === "big" ? (r[n] = a >>> 24,
                r[n + 1] = a >>> 16 & 255,
                r[n + 2] = a >>> 8 & 255,
                r[n + 3] = a & 255) : (r[n + 3] = a >>> 24,
                r[n + 2] = a >>> 16 & 255,
                r[n + 1] = a >>> 8 & 255,
                r[n] = a & 255)
            }
            return r
        }
        fe.split32 = bl;
        function gl(t, e) {
            return t >>> e | t << 32 - e
        }
        fe.rotr32 = gl;
        function yl(t, e) {
            return t << e | t >>> 32 - e
        }
        fe.rotl32 = yl;
        function _l(t, e) {
            return t + e >>> 0
        }
        fe.sum32 = _l;
        function ml(t, e, r) {
            return t + e + r >>> 0
        }
        fe.sum32_3 = ml;
        function wl(t, e, r, i) {
            return t + e + r + i >>> 0
        }
        fe.sum32_4 = wl;
        function Ml(t, e, r, i, n) {
            return t + e + r + i + n >>> 0
        }
        fe.sum32_5 = Ml;
        function Sl(t, e, r, i) {
            var n = t[e]
              , a = t[e + 1]
              , f = i + a >>> 0
              , h = (f < i ? 1 : 0) + r + n;
            t[e] = h >>> 0,
            t[e + 1] = f
        }
        fe.sum64 = Sl;
        function El(t, e, r, i) {
            var n = e + i >>> 0
              , a = (n < e ? 1 : 0) + t + r;
            return a >>> 0
        }
        fe.sum64_hi = El;
        function Al(t, e, r, i) {
            var n = e + i;
            return n >>> 0
        }
        fe.sum64_lo = Al;
        function Rl(t, e, r, i, n, a, f, h) {
            var c = 0
              , l = e;
            l = l + i >>> 0,
            c += l < e ? 1 : 0,
            l = l + a >>> 0,
            c += l < a ? 1 : 0,
            l = l + h >>> 0,
            c += l < h ? 1 : 0;
            var v = t + r + n + f + c;
            return v >>> 0
        }
        fe.sum64_4_hi = Rl;
        function Bl(t, e, r, i, n, a, f, h) {
            var c = e + i + a + h;
            return c >>> 0
        }
        fe.sum64_4_lo = Bl;
        function Il(t, e, r, i, n, a, f, h, c, l) {
            var v = 0
              , y = e;
            y = y + i >>> 0,
            v += y < e ? 1 : 0,
            y = y + a >>> 0,
            v += y < a ? 1 : 0,
            y = y + h >>> 0,
            v += y < h ? 1 : 0,
            y = y + l >>> 0,
            v += y < l ? 1 : 0;
            var E = t + r + n + f + c + v;
            return E >>> 0
        }
        fe.sum64_5_hi = Il;
        function Tl(t, e, r, i, n, a, f, h, c, l) {
            var v = e + i + a + h + l;
            return v >>> 0
        }
        fe.sum64_5_lo = Tl;
        function Pl(t, e, r) {
            var i = e << 32 - r | t >>> r;
            return i >>> 0
        }
        fe.rotr64_hi = Pl;
        function Ll(t, e, r) {
            var i = t << 32 - r | e >>> r;
            return i >>> 0
        }
        fe.rotr64_lo = Ll;
        function kl(t, e, r) {
            return t >>> r
        }
        fe.shr64_hi = kl;
        function Cl(t, e, r) {
            var i = t << 32 - r | e >>> r;
            return i >>> 0
        }
        fe.shr64_lo = Cl;
        var ni = {}
          , Ts = fe
          , $l = kr;
        function Pn() {
            this.pending = null,
            this.pendingTotal = 0,
            this.blockSize = this.constructor.blockSize,
            this.outSize = this.constructor.outSize,
            this.hmacStrength = this.constructor.hmacStrength,
            this.padLength = this.constructor.padLength / 8,
            this.endian = "big",
            this._delta8 = this.blockSize / 8,
            this._delta32 = this.blockSize / 32
        }
        ni.BlockHash = Pn,
        Pn.prototype.update = function(e, r) {
            if (e = Ts.toArray(e, r),
            this.pending ? this.pending = this.pending.concat(e) : this.pending = e,
            this.pendingTotal += e.length,
            this.pending.length >= this._delta8) {
                e = this.pending;
                var i = e.length % this._delta8;
                this.pending = e.slice(e.length - i, e.length),
                this.pending.length === 0 && (this.pending = null),
                e = Ts.join32(e, 0, e.length - i, this.endian);
                for (var n = 0; n < e.length; n += this._delta32)
                    this._update(e, n, n + this._delta32)
            }
            return this
        }
        ,
        Pn.prototype.digest = function(e) {
            return this.update(this._pad()),
            $l(this.pending === null),
            this._digest(e)
        }
        ,
        Pn.prototype._pad = function() {
            var e = this.pendingTotal
              , r = this._delta8
              , i = r - (e + this.padLength) % r
              , n = new Array(i + this.padLength);
            n[0] = 128;
            for (var a = 1; a < i; a++)
                n[a] = 0;
            if (e <<= 3,
            this.endian === "big") {
                for (var f = 8; f < this.padLength; f++)
                    n[a++] = 0;
                n[a++] = 0,
                n[a++] = 0,
                n[a++] = 0,
                n[a++] = 0,
                n[a++] = e >>> 24 & 255,
                n[a++] = e >>> 16 & 255,
                n[a++] = e >>> 8 & 255,
                n[a++] = e & 255
            } else
                for (n[a++] = e & 255,
                n[a++] = e >>> 8 & 255,
                n[a++] = e >>> 16 & 255,
                n[a++] = e >>> 24 & 255,
                n[a++] = 0,
                n[a++] = 0,
                n[a++] = 0,
                n[a++] = 0,
                f = 8; f < this.padLength; f++)
                    n[a++] = 0;
            return n
        }
        ;
        var ai = {}
          , Vt = {}
          , Ol = fe
          , Gt = Ol.rotr32;
        function Dl(t, e, r, i) {
            if (t === 0)
                return Ps(e, r, i);
            if (t === 1 || t === 3)
                return ks(e, r, i);
            if (t === 2)
                return Ls(e, r, i)
        }
        Vt.ft_1 = Dl;
        function Ps(t, e, r) {
            return t & e ^ ~t & r
        }
        Vt.ch32 = Ps;
        function Ls(t, e, r) {
            return t & e ^ t & r ^ e & r
        }
        Vt.maj32 = Ls;
        function ks(t, e, r) {
            return t ^ e ^ r
        }
        Vt.p32 = ks;
        function xl(t) {
            return Gt(t, 2) ^ Gt(t, 13) ^ Gt(t, 22)
        }
        Vt.s0_256 = xl;
        function Nl(t) {
            return Gt(t, 6) ^ Gt(t, 11) ^ Gt(t, 25)
        }
        Vt.s1_256 = Nl;
        function ql(t) {
            return Gt(t, 7) ^ Gt(t, 18) ^ t >>> 3
        }
        Vt.g0_256 = ql;
        function zl(t) {
            return Gt(t, 17) ^ Gt(t, 19) ^ t >>> 10
        }
        Vt.g1_256 = zl;
        var fi = fe
          , Ul = ni
          , Fl = Vt
          , za = fi.rotl32
          , ki = fi.sum32
          , Hl = fi.sum32_5
          , jl = Fl.ft_1
          , Cs = Ul.BlockHash
          , Wl = [1518500249, 1859775393, 2400959708, 3395469782];
        function Jt() {
            if (!(this instanceof Jt))
                return new Jt;
            Cs.call(this),
            this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
            this.W = new Array(80)
        }
        fi.inherits(Jt, Cs);
        var Yl = Jt;
        Jt.blockSize = 512,
        Jt.outSize = 160,
        Jt.hmacStrength = 80,
        Jt.padLength = 64,
        Jt.prototype._update = function(e, r) {
            for (var i = this.W, n = 0; n < 16; n++)
                i[n] = e[r + n];
            for (; n < i.length; n++)
                i[n] = za(i[n - 3] ^ i[n - 8] ^ i[n - 14] ^ i[n - 16], 1);
            var a = this.h[0]
              , f = this.h[1]
              , h = this.h[2]
              , c = this.h[3]
              , l = this.h[4];
            for (n = 0; n < i.length; n++) {
                var v = ~~(n / 20)
                  , y = Hl(za(a, 5), jl(v, f, h, c), l, i[n], Wl[v]);
                l = c,
                c = h,
                h = za(f, 30),
                f = a,
                a = y
            }
            this.h[0] = ki(this.h[0], a),
            this.h[1] = ki(this.h[1], f),
            this.h[2] = ki(this.h[2], h),
            this.h[3] = ki(this.h[3], c),
            this.h[4] = ki(this.h[4], l)
        }
        ,
        Jt.prototype._digest = function(e) {
            return e === "hex" ? fi.toHex32(this.h, "big") : fi.split32(this.h, "big")
        }
        ;
        var oi = fe
          , Kl = ni
          , si = Vt
          , Vl = kr
          , zt = oi.sum32
          , Gl = oi.sum32_4
          , Jl = oi.sum32_5
          , Xl = si.ch32
          , Zl = si.maj32
          , Ql = si.s0_256
          , e1 = si.s1_256
          , t1 = si.g0_256
          , r1 = si.g1_256
          , $s = Kl.BlockHash
          , i1 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        function Xt() {
            if (!(this instanceof Xt))
                return new Xt;
            $s.call(this),
            this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
            this.k = i1,
            this.W = new Array(64)
        }
        oi.inherits(Xt, $s);
        var Os = Xt;
        Xt.blockSize = 512,
        Xt.outSize = 256,
        Xt.hmacStrength = 192,
        Xt.padLength = 64,
        Xt.prototype._update = function(e, r) {
            for (var i = this.W, n = 0; n < 16; n++)
                i[n] = e[r + n];
            for (; n < i.length; n++)
                i[n] = Gl(r1(i[n - 2]), i[n - 7], t1(i[n - 15]), i[n - 16]);
            var a = this.h[0]
              , f = this.h[1]
              , h = this.h[2]
              , c = this.h[3]
              , l = this.h[4]
              , v = this.h[5]
              , y = this.h[6]
              , E = this.h[7];
            for (Vl(this.k.length === i.length),
            n = 0; n < i.length; n++) {
                var T = Jl(E, e1(l), Xl(l, v, y), this.k[n], i[n])
                  , I = zt(Ql(a), Zl(a, f, h));
                E = y,
                y = v,
                v = l,
                l = zt(c, T),
                c = h,
                h = f,
                f = a,
                a = zt(T, I)
            }
            this.h[0] = zt(this.h[0], a),
            this.h[1] = zt(this.h[1], f),
            this.h[2] = zt(this.h[2], h),
            this.h[3] = zt(this.h[3], c),
            this.h[4] = zt(this.h[4], l),
            this.h[5] = zt(this.h[5], v),
            this.h[6] = zt(this.h[6], y),
            this.h[7] = zt(this.h[7], E)
        }
        ,
        Xt.prototype._digest = function(e) {
            return e === "hex" ? oi.toHex32(this.h, "big") : oi.split32(this.h, "big")
        }
        ;
        var Ua = fe
          , Ds = Os;
        function ar() {
            if (!(this instanceof ar))
                return new ar;
            Ds.call(this),
            this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
        }
        Ua.inherits(ar, Ds);
        var n1 = ar;
        ar.blockSize = 512,
        ar.outSize = 224,
        ar.hmacStrength = 192,
        ar.padLength = 64,
        ar.prototype._digest = function(e) {
            return e === "hex" ? Ua.toHex32(this.h.slice(0, 7), "big") : Ua.split32(this.h.slice(0, 7), "big")
        }
        ;
        var Mt = fe
          , a1 = ni
          , f1 = kr
          , Zt = Mt.rotr64_hi
          , Qt = Mt.rotr64_lo
          , xs = Mt.shr64_hi
          , Ns = Mt.shr64_lo
          , vr = Mt.sum64
          , Fa = Mt.sum64_hi
          , Ha = Mt.sum64_lo
          , o1 = Mt.sum64_4_hi
          , s1 = Mt.sum64_4_lo
          , h1 = Mt.sum64_5_hi
          , u1 = Mt.sum64_5_lo
          , qs = a1.BlockHash
          , c1 = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
        function Ut() {
            if (!(this instanceof Ut))
                return new Ut;
            qs.call(this),
            this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209],
            this.k = c1,
            this.W = new Array(160)
        }
        Mt.inherits(Ut, qs);
        var zs = Ut;
        Ut.blockSize = 1024,
        Ut.outSize = 512,
        Ut.hmacStrength = 192,
        Ut.padLength = 128,
        Ut.prototype._prepareBlock = function(e, r) {
            for (var i = this.W, n = 0; n < 32; n++)
                i[n] = e[r + n];
            for (; n < i.length; n += 2) {
                var a = M1(i[n - 4], i[n - 3])
                  , f = S1(i[n - 4], i[n - 3])
                  , h = i[n - 14]
                  , c = i[n - 13]
                  , l = m1(i[n - 30], i[n - 29])
                  , v = w1(i[n - 30], i[n - 29])
                  , y = i[n - 32]
                  , E = i[n - 31];
                i[n] = o1(a, f, h, c, l, v, y, E),
                i[n + 1] = s1(a, f, h, c, l, v, y, E)
            }
        }
        ,
        Ut.prototype._update = function(e, r) {
            this._prepareBlock(e, r);
            var i = this.W
              , n = this.h[0]
              , a = this.h[1]
              , f = this.h[2]
              , h = this.h[3]
              , c = this.h[4]
              , l = this.h[5]
              , v = this.h[6]
              , y = this.h[7]
              , E = this.h[8]
              , T = this.h[9]
              , I = this.h[10]
              , P = this.h[11]
              , C = this.h[12]
              , L = this.h[13]
              , x = this.h[14]
              , Y = this.h[15];
            f1(this.k.length === i.length);
            for (var F = 0; F < i.length; F += 2) {
                var V = x
                  , Q = Y
                  , oe = y1(E, T)
                  , te = _1(E, T)
                  , W = d1(E, T, I, P, C)
                  , Ae = l1(E, T, I, P, C, L)
                  , M = this.k[F]
                  , o = this.k[F + 1]
                  , u = i[F]
                  , d = i[F + 1]
                  , p = h1(V, Q, oe, te, W, Ae, M, o, u, d)
                  , m = u1(V, Q, oe, te, W, Ae, M, o, u, d);
                V = b1(n, a),
                Q = g1(n, a),
                oe = p1(n, a, f, h, c),
                te = v1(n, a, f, h, c, l);
                var S = Fa(V, Q, oe, te)
                  , B = Ha(V, Q, oe, te);
                x = C,
                Y = L,
                C = I,
                L = P,
                I = E,
                P = T,
                E = Fa(v, y, p, m),
                T = Ha(y, y, p, m),
                v = c,
                y = l,
                c = f,
                l = h,
                f = n,
                h = a,
                n = Fa(p, m, S, B),
                a = Ha(p, m, S, B)
            }
            vr(this.h, 0, n, a),
            vr(this.h, 2, f, h),
            vr(this.h, 4, c, l),
            vr(this.h, 6, v, y),
            vr(this.h, 8, E, T),
            vr(this.h, 10, I, P),
            vr(this.h, 12, C, L),
            vr(this.h, 14, x, Y)
        }
        ,
        Ut.prototype._digest = function(e) {
            return e === "hex" ? Mt.toHex32(this.h, "big") : Mt.split32(this.h, "big")
        }
        ;
        function d1(t, e, r, i, n) {
            var a = t & r ^ ~t & n;
            return a < 0 && (a += 4294967296),
            a
        }
        function l1(t, e, r, i, n, a) {
            var f = e & i ^ ~e & a;
            return f < 0 && (f += 4294967296),
            f
        }
        function p1(t, e, r, i, n) {
            var a = t & r ^ t & n ^ r & n;
            return a < 0 && (a += 4294967296),
            a
        }
        function v1(t, e, r, i, n, a) {
            var f = e & i ^ e & a ^ i & a;
            return f < 0 && (f += 4294967296),
            f
        }
        function b1(t, e) {
            var r = Zt(t, e, 28)
              , i = Zt(e, t, 2)
              , n = Zt(e, t, 7)
              , a = r ^ i ^ n;
            return a < 0 && (a += 4294967296),
            a
        }
        function g1(t, e) {
            var r = Qt(t, e, 28)
              , i = Qt(e, t, 2)
              , n = Qt(e, t, 7)
              , a = r ^ i ^ n;
            return a < 0 && (a += 4294967296),
            a
        }
        function y1(t, e) {
            var r = Zt(t, e, 14)
              , i = Zt(t, e, 18)
              , n = Zt(e, t, 9)
              , a = r ^ i ^ n;
            return a < 0 && (a += 4294967296),
            a
        }
        function _1(t, e) {
            var r = Qt(t, e, 14)
              , i = Qt(t, e, 18)
              , n = Qt(e, t, 9)
              , a = r ^ i ^ n;
            return a < 0 && (a += 4294967296),
            a
        }
        function m1(t, e) {
            var r = Zt(t, e, 1)
              , i = Zt(t, e, 8)
              , n = xs(t, e, 7)
              , a = r ^ i ^ n;
            return a < 0 && (a += 4294967296),
            a
        }
        function w1(t, e) {
            var r = Qt(t, e, 1)
              , i = Qt(t, e, 8)
              , n = Ns(t, e, 7)
              , a = r ^ i ^ n;
            return a < 0 && (a += 4294967296),
            a
        }
        function M1(t, e) {
            var r = Zt(t, e, 19)
              , i = Zt(e, t, 29)
              , n = xs(t, e, 6)
              , a = r ^ i ^ n;
            return a < 0 && (a += 4294967296),
            a
        }
        function S1(t, e) {
            var r = Qt(t, e, 19)
              , i = Qt(e, t, 29)
              , n = Ns(t, e, 6)
              , a = r ^ i ^ n;
            return a < 0 && (a += 4294967296),
            a
        }
        var ja = fe
          , Us = zs;
        function fr() {
            if (!(this instanceof fr))
                return new fr;
            Us.call(this),
            this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
        }
        ja.inherits(fr, Us);
        var E1 = fr;
        fr.blockSize = 1024,
        fr.outSize = 384,
        fr.hmacStrength = 192,
        fr.padLength = 128,
        fr.prototype._digest = function(e) {
            return e === "hex" ? ja.toHex32(this.h.slice(0, 12), "big") : ja.split32(this.h.slice(0, 12), "big")
        }
        ,
        ai.sha1 = Yl,
        ai.sha224 = n1,
        ai.sha256 = Os,
        ai.sha384 = E1,
        ai.sha512 = zs;
        var Fs = {}
          , $r = fe
          , A1 = ni
          , Ln = $r.rotl32
          , Hs = $r.sum32
          , Ci = $r.sum32_3
          , js = $r.sum32_4
          , Ws = A1.BlockHash;
        function er() {
            if (!(this instanceof er))
                return new er;
            Ws.call(this),
            this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
            this.endian = "little"
        }
        $r.inherits(er, Ws),
        Fs.ripemd160 = er,
        er.blockSize = 512,
        er.outSize = 160,
        er.hmacStrength = 192,
        er.padLength = 64,
        er.prototype._update = function(e, r) {
            for (var i = this.h[0], n = this.h[1], a = this.h[2], f = this.h[3], h = this.h[4], c = i, l = n, v = a, y = f, E = h, T = 0; T < 80; T++) {
                var I = Hs(Ln(js(i, Ys(T, n, a, f), e[I1[T] + r], R1(T)), P1[T]), h);
                i = h,
                h = f,
                f = Ln(a, 10),
                a = n,
                n = I,
                I = Hs(Ln(js(c, Ys(79 - T, l, v, y), e[T1[T] + r], B1(T)), L1[T]), E),
                c = E,
                E = y,
                y = Ln(v, 10),
                v = l,
                l = I
            }
            I = Ci(this.h[1], a, y),
            this.h[1] = Ci(this.h[2], f, E),
            this.h[2] = Ci(this.h[3], h, c),
            this.h[3] = Ci(this.h[4], i, l),
            this.h[4] = Ci(this.h[0], n, v),
            this.h[0] = I
        }
        ,
        er.prototype._digest = function(e) {
            return e === "hex" ? $r.toHex32(this.h, "little") : $r.split32(this.h, "little")
        }
        ;
        function Ys(t, e, r, i) {
            return t <= 15 ? e ^ r ^ i : t <= 31 ? e & r | ~e & i : t <= 47 ? (e | ~r) ^ i : t <= 63 ? e & i | r & ~i : e ^ (r | ~i)
        }
        function R1(t) {
            return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
        }
        function B1(t) {
            return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
        }
        var I1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
          , T1 = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
          , P1 = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
          , L1 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
          , k1 = fe
          , C1 = kr;
        function hi(t, e, r) {
            if (!(this instanceof hi))
                return new hi(t,e,r);
            this.Hash = t,
            this.blockSize = t.blockSize / 8,
            this.outSize = t.outSize / 8,
            this.inner = null,
            this.outer = null,
            this._init(k1.toArray(e, r))
        }
        var $1 = hi;
        hi.prototype._init = function(e) {
            e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
            C1(e.length <= this.blockSize);
            for (var r = e.length; r < this.blockSize; r++)
                e.push(0);
            for (r = 0; r < e.length; r++)
                e[r] ^= 54;
            for (this.inner = new this.Hash().update(e),
            r = 0; r < e.length; r++)
                e[r] ^= 106;
            this.outer = new this.Hash().update(e)
        }
        ,
        hi.prototype.update = function(e, r) {
            return this.inner.update(e, r),
            this
        }
        ,
        hi.prototype.digest = function(e) {
            return this.outer.update(this.inner.digest()),
            this.outer.digest(e)
        }
        ,
        function(t) {
            var e = t;
            e.utils = fe,
            e.common = ni,
            e.sha = ai,
            e.ripemd = Fs,
            e.hmac = $1,
            e.sha1 = e.sha.sha1,
            e.sha256 = e.sha.sha256,
            e.sha224 = e.sha.sha224,
            e.sha384 = e.sha.sha384,
            e.sha512 = e.sha.sha512,
            e.ripemd160 = e.ripemd.ripemd160
        }(Tn);
        var Wa, Ks;
        function O1() {
            return Ks || (Ks = 1,
            Wa = {
                doubles: {
                    step: 4,
                    points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
                },
                naf: {
                    wnd: 7,
                    points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
                }
            }),
            Wa
        }
        (function(t) {
            var e = t
              , r = Tn
              , i = Na
              , n = It
              , a = n.assert;
            function f(l) {
                l.type === "short" ? this.curve = new i.short(l) : l.type === "edwards" ? this.curve = new i.edwards(l) : this.curve = new i.mont(l),
                this.g = this.curve.g,
                this.n = this.curve.n,
                this.hash = l.hash,
                a(this.g.validate(), "Invalid curve"),
                a(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }
            e.PresetCurve = f;
            function h(l, v) {
                Object.defineProperty(e, l, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var y = new f(v);
                        return Object.defineProperty(e, l, {
                            configurable: !0,
                            enumerable: !0,
                            value: y
                        }),
                        y
                    }
                })
            }
            h("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: r.sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }),
            h("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: r.sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }),
            h("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: r.sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }),
            h("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: r.sha384,
                gRed: !1,
                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
            }),
            h("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: r.sha512,
                gRed: !1,
                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
            }),
            h("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: r.sha256,
                gRed: !1,
                g: ["9"]
            }),
            h("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: r.sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            var c;
            try {
                c = O1()
            } catch {
                c = void 0
            }
            h("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: r.sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", c]
            })
        }
        )(In);
        var D1 = Tn
          , Or = Oa
          , Vs = kr;
        function br(t) {
            if (!(this instanceof br))
                return new br(t);
            this.hash = t.hash,
            this.predResist = !!t.predResist,
            this.outLen = this.hash.outSize,
            this.minEntropy = t.minEntropy || this.hash.hmacStrength,
            this._reseed = null,
            this.reseedInterval = null,
            this.K = null,
            this.V = null;
            var e = Or.toArray(t.entropy, t.entropyEnc || "hex")
              , r = Or.toArray(t.nonce, t.nonceEnc || "hex")
              , i = Or.toArray(t.pers, t.persEnc || "hex");
            Vs(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._init(e, r, i)
        }
        var x1 = br;
        br.prototype._init = function(e, r, i) {
            var n = e.concat(r).concat(i);
            this.K = new Array(this.outLen / 8),
            this.V = new Array(this.outLen / 8);
            for (var a = 0; a < this.V.length; a++)
                this.K[a] = 0,
                this.V[a] = 1;
            this._update(n),
            this._reseed = 1,
            this.reseedInterval = 281474976710656
        }
        ,
        br.prototype._hmac = function() {
            return new D1.hmac(this.hash,this.K)
        }
        ,
        br.prototype._update = function(e) {
            var r = this._hmac().update(this.V).update([0]);
            e && (r = r.update(e)),
            this.K = r.digest(),
            this.V = this._hmac().update(this.V).digest(),
            e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(),
            this.V = this._hmac().update(this.V).digest())
        }
        ,
        br.prototype.reseed = function(e, r, i, n) {
            typeof r != "string" && (n = i,
            i = r,
            r = null),
            e = Or.toArray(e, r),
            i = Or.toArray(i, n),
            Vs(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._update(e.concat(i || [])),
            this._reseed = 1
        }
        ,
        br.prototype.generate = function(e, r, i, n) {
            if (this._reseed > this.reseedInterval)
                throw new Error("Reseed is required");
            typeof r != "string" && (n = i,
            i = r,
            r = null),
            i && (i = Or.toArray(i, n || "hex"),
            this._update(i));
            for (var a = []; a.length < e; )
                this.V = this._hmac().update(this.V).digest(),
                a = a.concat(this.V);
            var f = a.slice(0, e);
            return this._update(i),
            this._reseed++,
            Or.encode(f, r)
        }
        ;
        var N1 = Yt
          , q1 = It
          , Ya = q1.assert;
        function dt(t, e) {
            this.ec = t,
            this.priv = null,
            this.pub = null,
            e.priv && this._importPrivate(e.priv, e.privEnc),
            e.pub && this._importPublic(e.pub, e.pubEnc)
        }
        var z1 = dt;
        dt.fromPublic = function(e, r, i) {
            return r instanceof dt ? r : new dt(e,{
                pub: r,
                pubEnc: i
            })
        }
        ,
        dt.fromPrivate = function(e, r, i) {
            return r instanceof dt ? r : new dt(e,{
                priv: r,
                privEnc: i
            })
        }
        ,
        dt.prototype.validate = function() {
            var e = this.getPublic();
            return e.isInfinity() ? {
                result: !1,
                reason: "Invalid public key"
            } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                result: !0,
                reason: null
            } : {
                result: !1,
                reason: "Public key * N != O"
            } : {
                result: !1,
                reason: "Public key is not a point"
            }
        }
        ,
        dt.prototype.getPublic = function(e, r) {
            return typeof e == "string" && (r = e,
            e = null),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            r ? this.pub.encode(r, e) : this.pub
        }
        ,
        dt.prototype.getPrivate = function(e) {
            return e === "hex" ? this.priv.toString(16, 2) : this.priv
        }
        ,
        dt.prototype._importPrivate = function(e, r) {
            this.priv = new N1(e,r || 16),
            this.priv = this.priv.umod(this.ec.curve.n)
        }
        ,
        dt.prototype._importPublic = function(e, r) {
            if (e.x || e.y) {
                this.ec.curve.type === "mont" ? Ya(e.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Ya(e.x && e.y, "Need both x and y coordinate"),
                this.pub = this.ec.curve.point(e.x, e.y);
                return
            }
            this.pub = this.ec.curve.decodePoint(e, r)
        }
        ,
        dt.prototype.derive = function(e) {
            return e.validate() || Ya(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
        }
        ,
        dt.prototype.sign = function(e, r, i) {
            return this.ec.sign(e, this, r, i)
        }
        ,
        dt.prototype.verify = function(e, r) {
            return this.ec.verify(e, r, this)
        }
        ,
        dt.prototype.inspect = function() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
        }
        ;
        var kn = Yt
          , Ka = It
          , U1 = Ka.assert;
        function Cn(t, e) {
            if (t instanceof Cn)
                return t;
            this._importDER(t, e) || (U1(t.r && t.s, "Signature without r or s"),
            this.r = new kn(t.r,16),
            this.s = new kn(t.s,16),
            t.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
        }
        var F1 = Cn;
        function H1() {
            this.place = 0
        }
        function Va(t, e) {
            var r = t[e.place++];
            if (!(r & 128))
                return r;
            var i = r & 15;
            if (i === 0 || i > 4)
                return !1;
            for (var n = 0, a = 0, f = e.place; a < i; a++,
            f++)
                n <<= 8,
                n |= t[f],
                n >>>= 0;
            return n <= 127 ? !1 : (e.place = f,
            n)
        }
        function Gs(t) {
            for (var e = 0, r = t.length - 1; !t[e] && !(t[e + 1] & 128) && e < r; )
                e++;
            return e === 0 ? t : t.slice(e)
        }
        Cn.prototype._importDER = function(e, r) {
            e = Ka.toArray(e, r);
            var i = new H1;
            if (e[i.place++] !== 48)
                return !1;
            var n = Va(e, i);
            if (n === !1 || n + i.place !== e.length || e[i.place++] !== 2)
                return !1;
            var a = Va(e, i);
            if (a === !1)
                return !1;
            var f = e.slice(i.place, a + i.place);
            if (i.place += a,
            e[i.place++] !== 2)
                return !1;
            var h = Va(e, i);
            if (h === !1 || e.length !== h + i.place)
                return !1;
            var c = e.slice(i.place, h + i.place);
            if (f[0] === 0)
                if (f[1] & 128)
                    f = f.slice(1);
                else
                    return !1;
            if (c[0] === 0)
                if (c[1] & 128)
                    c = c.slice(1);
                else
                    return !1;
            return this.r = new kn(f),
            this.s = new kn(c),
            this.recoveryParam = null,
            !0
        }
        ;
        function Ga(t, e) {
            if (e < 128) {
                t.push(e);
                return
            }
            var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
            for (t.push(r | 128); --r; )
                t.push(e >>> (r << 3) & 255);
            t.push(e)
        }
        Cn.prototype.toDER = function(e) {
            var r = this.r.toArray()
              , i = this.s.toArray();
            for (r[0] & 128 && (r = [0].concat(r)),
            i[0] & 128 && (i = [0].concat(i)),
            r = Gs(r),
            i = Gs(i); !i[0] && !(i[1] & 128); )
                i = i.slice(1);
            var n = [2];
            Ga(n, r.length),
            n = n.concat(r),
            n.push(2),
            Ga(n, i.length);
            var a = n.concat(i)
              , f = [48];
            return Ga(f, a.length),
            f = f.concat(a),
            Ka.encode(f, e)
        }
        ;
        var Dr = Yt
          , Js = x1
          , j1 = It
          , Ja = In
          , W1 = Ss
          , Xs = j1.assert
          , Xa = z1
          , $n = F1;
        function Dt(t) {
            if (!(this instanceof Dt))
                return new Dt(t);
            typeof t == "string" && (Xs(Object.prototype.hasOwnProperty.call(Ja, t), "Unknown curve " + t),
            t = Ja[t]),
            t instanceof Ja.PresetCurve && (t = {
                curve: t
            }),
            this.curve = t.curve.curve,
            this.n = this.curve.n,
            this.nh = this.n.ushrn(1),
            this.g = this.curve.g,
            this.g = t.curve.g,
            this.g.precompute(t.curve.n.bitLength() + 1),
            this.hash = t.hash || t.curve.hash
        }
        var Y1 = Dt;
        Dt.prototype.keyPair = function(e) {
            return new Xa(this,e)
        }
        ,
        Dt.prototype.keyFromPrivate = function(e, r) {
            return Xa.fromPrivate(this, e, r)
        }
        ,
        Dt.prototype.keyFromPublic = function(e, r) {
            return Xa.fromPublic(this, e, r)
        }
        ,
        Dt.prototype.genKeyPair = function(e) {
            e || (e = {});
            for (var r = new Js({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || W1(this.hash.hmacStrength),
                entropyEnc: e.entropy && e.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), i = this.n.byteLength(), n = this.n.sub(new Dr(2)); ; ) {
                var a = new Dr(r.generate(i));
                if (!(a.cmp(n) > 0))
                    return a.iaddn(1),
                    this.keyFromPrivate(a)
            }
        }
        ,
        Dt.prototype._truncateToN = function(e, r) {
            var i = e.byteLength() * 8 - this.n.bitLength();
            return i > 0 && (e = e.ushrn(i)),
            !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
        }
        ,
        Dt.prototype.sign = function(e, r, i, n) {
            typeof i == "object" && (n = i,
            i = null),
            n || (n = {}),
            r = this.keyFromPrivate(r, i),
            e = this._truncateToN(new Dr(e,16));
            for (var a = this.n.byteLength(), f = r.getPrivate().toArray("be", a), h = e.toArray("be", a), c = new Js({
                hash: this.hash,
                entropy: f,
                nonce: h,
                pers: n.pers,
                persEnc: n.persEnc || "utf8"
            }), l = this.n.sub(new Dr(1)), v = 0; ; v++) {
                var y = n.k ? n.k(v) : new Dr(c.generate(this.n.byteLength()));
                if (y = this._truncateToN(y, !0),
                !(y.cmpn(1) <= 0 || y.cmp(l) >= 0)) {
                    var E = this.g.mul(y);
                    if (!E.isInfinity()) {
                        var T = E.getX()
                          , I = T.umod(this.n);
                        if (I.cmpn(0) !== 0) {
                            var P = y.invm(this.n).mul(I.mul(r.getPrivate()).iadd(e));
                            if (P = P.umod(this.n),
                            P.cmpn(0) !== 0) {
                                var C = (E.getY().isOdd() ? 1 : 0) | (T.cmp(I) !== 0 ? 2 : 0);
                                return n.canonical && P.cmp(this.nh) > 0 && (P = this.n.sub(P),
                                C ^= 1),
                                new $n({
                                    r: I,
                                    s: P,
                                    recoveryParam: C
                                })
                            }
                        }
                    }
                }
            }
        }
        ,
        Dt.prototype.verify = function(e, r, i, n) {
            e = this._truncateToN(new Dr(e,16)),
            i = this.keyFromPublic(i, n),
            r = new $n(r,"hex");
            var a = r.r
              , f = r.s;
            if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0 || f.cmpn(1) < 0 || f.cmp(this.n) >= 0)
                return !1;
            var h = f.invm(this.n), c = h.mul(e).umod(this.n), l = h.mul(a).umod(this.n), v;
            return this.curve._maxwellTrick ? (v = this.g.jmulAdd(c, i.getPublic(), l),
            v.isInfinity() ? !1 : v.eqXToP(a)) : (v = this.g.mulAdd(c, i.getPublic(), l),
            v.isInfinity() ? !1 : v.getX().umod(this.n).cmp(a) === 0)
        }
        ,
        Dt.prototype.recoverPubKey = function(t, e, r, i) {
            Xs((3 & r) === r, "The recovery param is more than two bits"),
            e = new $n(e,i);
            var n = this.n
              , a = new Dr(t)
              , f = e.r
              , h = e.s
              , c = r & 1
              , l = r >> 1;
            if (f.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l)
                throw new Error("Unable to find sencond key candinate");
            l ? f = this.curve.pointFromX(f.add(this.curve.n), c) : f = this.curve.pointFromX(f, c);
            var v = e.r.invm(n)
              , y = n.sub(a).mul(v).umod(n)
              , E = h.mul(v).umod(n);
            return this.g.mulAdd(y, f, E)
        }
        ,
        Dt.prototype.getKeyRecoveryParam = function(t, e, r, i) {
            if (e = new $n(e,i),
            e.recoveryParam !== null)
                return e.recoveryParam;
            for (var n = 0; n < 4; n++) {
                var a;
                try {
                    a = this.recoverPubKey(t, e, n)
                } catch {
                    continue
                }
                if (a.eq(r))
                    return n
            }
            throw new Error("Unable to find valid recovery factor")
        }
        ;
        var $i = It
          , Zs = $i.assert
          , Qs = $i.parseBytes
          , ui = $i.cachedProperty;
        function Qe(t, e) {
            this.eddsa = t,
            this._secret = Qs(e.secret),
            t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = Qs(e.pub)
        }
        Qe.fromPublic = function(e, r) {
            return r instanceof Qe ? r : new Qe(e,{
                pub: r
            })
        }
        ,
        Qe.fromSecret = function(e, r) {
            return r instanceof Qe ? r : new Qe(e,{
                secret: r
            })
        }
        ,
        Qe.prototype.secret = function() {
            return this._secret
        }
        ,
        ui(Qe, "pubBytes", function() {
            return this.eddsa.encodePoint(this.pub())
        }),
        ui(Qe, "pub", function() {
            return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
        }),
        ui(Qe, "privBytes", function() {
            var e = this.eddsa
              , r = this.hash()
              , i = e.encodingLength - 1
              , n = r.slice(0, e.encodingLength);
            return n[0] &= 248,
            n[i] &= 127,
            n[i] |= 64,
            n
        }),
        ui(Qe, "priv", function() {
            return this.eddsa.decodeInt(this.privBytes())
        }),
        ui(Qe, "hash", function() {
            return this.eddsa.hash().update(this.secret()).digest()
        }),
        ui(Qe, "messagePrefix", function() {
            return this.hash().slice(this.eddsa.encodingLength)
        }),
        Qe.prototype.sign = function(e) {
            return Zs(this._secret, "KeyPair can only verify"),
            this.eddsa.sign(e, this)
        }
        ,
        Qe.prototype.verify = function(e, r) {
            return this.eddsa.verify(e, r, this)
        }
        ,
        Qe.prototype.getSecret = function(e) {
            return Zs(this._secret, "KeyPair is public only"),
            $i.encode(this.secret(), e)
        }
        ,
        Qe.prototype.getPublic = function(e) {
            return $i.encode(this.pubBytes(), e)
        }
        ;
        var K1 = Qe
          , V1 = Yt
          , On = It
          , G1 = On.assert
          , Dn = On.cachedProperty
          , J1 = On.parseBytes;
        function xr(t, e) {
            this.eddsa = t,
            typeof e != "object" && (e = J1(e)),
            Array.isArray(e) && (e = {
                R: e.slice(0, t.encodingLength),
                S: e.slice(t.encodingLength)
            }),
            G1(e.R && e.S, "Signature without R or S"),
            t.isPoint(e.R) && (this._R = e.R),
            e.S instanceof V1 && (this._S = e.S),
            this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded,
            this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded
        }
        Dn(xr, "S", function() {
            return this.eddsa.decodeInt(this.Sencoded())
        }),
        Dn(xr, "R", function() {
            return this.eddsa.decodePoint(this.Rencoded())
        }),
        Dn(xr, "Rencoded", function() {
            return this.eddsa.encodePoint(this.R())
        }),
        Dn(xr, "Sencoded", function() {
            return this.eddsa.encodeInt(this.S())
        }),
        xr.prototype.toBytes = function() {
            return this.Rencoded().concat(this.Sencoded())
        }
        ,
        xr.prototype.toHex = function() {
            return On.encode(this.toBytes(), "hex").toUpperCase()
        }
        ;
        var X1 = xr
          , Z1 = Tn
          , Q1 = In
          , ci = It
          , e2 = ci.assert
          , eh = ci.parseBytes
          , th = K1
          , rh = X1;
        function St(t) {
            if (e2(t === "ed25519", "only tested with ed25519 so far"),
            !(this instanceof St))
                return new St(t);
            t = Q1[t].curve,
            this.curve = t,
            this.g = t.g,
            this.g.precompute(t.n.bitLength() + 1),
            this.pointClass = t.point().constructor,
            this.encodingLength = Math.ceil(t.n.bitLength() / 8),
            this.hash = Z1.sha512
        }
        var t2 = St;
        St.prototype.sign = function(e, r) {
            e = eh(e);
            var i = this.keyFromSecret(r)
              , n = this.hashInt(i.messagePrefix(), e)
              , a = this.g.mul(n)
              , f = this.encodePoint(a)
              , h = this.hashInt(f, i.pubBytes(), e).mul(i.priv())
              , c = n.add(h).umod(this.curve.n);
            return this.makeSignature({
                R: a,
                S: c,
                Rencoded: f
            })
        }
        ,
        St.prototype.verify = function(e, r, i) {
            e = eh(e),
            r = this.makeSignature(r);
            var n = this.keyFromPublic(i)
              , a = this.hashInt(r.Rencoded(), n.pubBytes(), e)
              , f = this.g.mul(r.S())
              , h = r.R().add(n.pub().mul(a));
            return h.eq(f)
        }
        ,
        St.prototype.hashInt = function() {
            for (var e = this.hash(), r = 0; r < arguments.length; r++)
                e.update(arguments[r]);
            return ci.intFromLE(e.digest()).umod(this.curve.n)
        }
        ,
        St.prototype.keyFromPublic = function(e) {
            return th.fromPublic(this, e)
        }
        ,
        St.prototype.keyFromSecret = function(e) {
            return th.fromSecret(this, e)
        }
        ,
        St.prototype.makeSignature = function(e) {
            return e instanceof rh ? e : new rh(this,e)
        }
        ,
        St.prototype.encodePoint = function(e) {
            var r = e.getY().toArray("le", this.encodingLength);
            return r[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0,
            r
        }
        ,
        St.prototype.decodePoint = function(e) {
            e = ci.parseBytes(e);
            var r = e.length - 1
              , i = e.slice(0, r).concat(e[r] & -129)
              , n = (e[r] & 128) !== 0
              , a = ci.intFromLE(i);
            return this.curve.pointFromY(a, n)
        }
        ,
        St.prototype.encodeInt = function(e) {
            return e.toArray("le", this.encodingLength)
        }
        ,
        St.prototype.decodeInt = function(e) {
            return ci.intFromLE(e)
        }
        ,
        St.prototype.isPoint = function(e) {
            return e instanceof this.pointClass
        }
        ,
        function(t) {
            var e = t;
            e.version = J0.version,
            e.utils = It,
            e.rand = Ss,
            e.curve = Na,
            e.curves = In,
            e.ec = Y1,
            e.eddsa = t2
        }(_s);
        var r2 = _s
          , i2 = Yt
          , n2 = function(e) {
            return new Nr(e)
        }
          , Tt = {
            secp256k1: {
                name: "secp256k1",
                byteLength: 32
            },
            secp224r1: {
                name: "p224",
                byteLength: 28
            },
            prime256v1: {
                name: "p256",
                byteLength: 32
            },
            prime192v1: {
                name: "p192",
                byteLength: 24
            },
            ed25519: {
                name: "ed25519",
                byteLength: 32
            },
            secp384r1: {
                name: "p384",
                byteLength: 48
            },
            secp521r1: {
                name: "p521",
                byteLength: 66
            }
        };
        Tt.p224 = Tt.secp224r1,
        Tt.p256 = Tt.secp256r1 = Tt.prime256v1,
        Tt.p192 = Tt.secp192r1 = Tt.prime192v1,
        Tt.p384 = Tt.secp384r1,
        Tt.p521 = Tt.secp521r1;
        function Nr(t) {
            this.curveType = Tt[t],
            this.curveType || (this.curveType = {
                name: t
            }),
            this.curve = new r2.ec(this.curveType.name),
            this.keys = void 0
        }
        Nr.prototype.generateKeys = function(t, e) {
            return this.keys = this.curve.genKeyPair(),
            this.getPublicKey(t, e)
        }
        ,
        Nr.prototype.computeSecret = function(t, e, r) {
            e = e || "utf8",
            k.isBuffer(t) || (t = new k(t,e));
            var i = this.curve.keyFromPublic(t).getPublic()
              , n = i.mul(this.keys.getPrivate()).getX();
            return Za(n, r, this.curveType.byteLength)
        }
        ,
        Nr.prototype.getPublicKey = function(t, e) {
            var r = this.keys.getPublic(e === "compressed", !0);
            return e === "hybrid" && (r[r.length - 1] % 2 ? r[0] = 7 : r[0] = 6),
            Za(r, t)
        }
        ,
        Nr.prototype.getPrivateKey = function(t) {
            return Za(this.keys.getPrivate(), t)
        }
        ,
        Nr.prototype.setPublicKey = function(t, e) {
            return e = e || "utf8",
            k.isBuffer(t) || (t = new k(t,e)),
            this.keys._importPublic(t),
            this
        }
        ,
        Nr.prototype.setPrivateKey = function(t, e) {
            e = e || "utf8",
            k.isBuffer(t) || (t = new k(t,e));
            var r = new i2(t);
            return r = r.toString(16),
            this.keys = this.curve.genKeyPair(),
            this.keys._importPrivate(r),
            this
        }
        ;
        function Za(t, e, r) {
            Array.isArray(t) || (t = t.toArray());
            var i = new k(t);
            if (r && i.length < r) {
                var n = new k(r - i.length);
                n.fill(0),
                i = k.concat([n, i])
            }
            return e ? i.toString(e) : i
        }
        var a2 = U(n2), f2 = Math.pow(2, 30) - 1, ih = function(t, e) {
            if (typeof t != "number")
                throw new TypeError("Iterations not a number");
            if (t < 0)
                throw new TypeError("Bad iterations");
            if (typeof e != "number")
                throw new TypeError("Key length not a number");
            if (e < 0 || e > f2 || e !== e)
                throw new TypeError("Bad key length")
        }, xn;
        if (O.process && O.process.browser)
            xn = "utf-8";
        else if (O.process && O.process.version) {
            var o2 = parseInt(se.version.split(".")[0].slice(1), 10);
            xn = o2 >= 6 ? "utf-8" : "binary"
        } else
            xn = "utf-8";
        var nh = xn
          , s2 = hs
          , h2 = function(t) {
            return new s2().update(t).digest()
        }
          , Qa = Kr.Buffer
          , u2 = we
          , ah = os
          , c2 = new Array(16)
          , Oi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
          , Di = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
          , xi = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
          , Ni = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
          , qi = [0, 1518500249, 1859775393, 2400959708, 2840853838]
          , zi = [1352829926, 1548603684, 1836072691, 2053994217, 0];
        function Nn() {
            ah.call(this, 64),
            this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878,
            this._e = 3285377520
        }
        u2(Nn, ah),
        Nn.prototype._update = function() {
            for (var t = c2, e = 0; e < 16; ++e)
                t[e] = this._block.readInt32LE(e * 4);
            for (var r = this._a | 0, i = this._b | 0, n = this._c | 0, a = this._d | 0, f = this._e | 0, h = this._a | 0, c = this._b | 0, l = this._c | 0, v = this._d | 0, y = this._e | 0, E = 0; E < 80; E += 1) {
                var T, I;
                E < 16 ? (T = fh(r, i, n, a, f, t[Oi[E]], qi[0], xi[E]),
                I = uh(h, c, l, v, y, t[Di[E]], zi[0], Ni[E])) : E < 32 ? (T = oh(r, i, n, a, f, t[Oi[E]], qi[1], xi[E]),
                I = hh(h, c, l, v, y, t[Di[E]], zi[1], Ni[E])) : E < 48 ? (T = sh(r, i, n, a, f, t[Oi[E]], qi[2], xi[E]),
                I = sh(h, c, l, v, y, t[Di[E]], zi[2], Ni[E])) : E < 64 ? (T = hh(r, i, n, a, f, t[Oi[E]], qi[3], xi[E]),
                I = oh(h, c, l, v, y, t[Di[E]], zi[3], Ni[E])) : (T = uh(r, i, n, a, f, t[Oi[E]], qi[4], xi[E]),
                I = fh(h, c, l, v, y, t[Di[E]], zi[4], Ni[E])),
                r = f,
                f = a,
                a = qr(n, 10),
                n = i,
                i = T,
                h = y,
                y = v,
                v = qr(l, 10),
                l = c,
                c = I
            }
            var P = this._b + n + v | 0;
            this._b = this._c + a + y | 0,
            this._c = this._d + f + h | 0,
            this._d = this._e + r + c | 0,
            this._e = this._a + i + l | 0,
            this._a = P
        }
        ,
        Nn.prototype._digest = function() {
            this._block[this._blockOffset++] = 128,
            this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            this._blockOffset = 0),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
            var t = Qa.alloc ? Qa.alloc(20) : new Qa(20);
            return t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t.writeInt32LE(this._e, 16),
            t
        }
        ;
        function qr(t, e) {
            return t << e | t >>> 32 - e
        }
        function fh(t, e, r, i, n, a, f, h) {
            return qr(t + (e ^ r ^ i) + a + f | 0, h) + n | 0
        }
        function oh(t, e, r, i, n, a, f, h) {
            return qr(t + (e & r | ~e & i) + a + f | 0, h) + n | 0
        }
        function sh(t, e, r, i, n, a, f, h) {
            return qr(t + ((e | ~r) ^ i) + a + f | 0, h) + n | 0
        }
        function hh(t, e, r, i, n, a, f, h) {
            return qr(t + (e & i | r & ~i) + a + f | 0, h) + n | 0
        }
        function uh(t, e, r, i, n, a, f, h) {
            return qr(t + (e ^ (r | ~i)) + a + f | 0, h) + n | 0
        }
        var d2 = Nn
          , ch = {
            exports: {}
        }
          , dh = ge.Buffer;
        function qn(t, e) {
            this._block = dh.alloc(t),
            this._finalSize = e,
            this._blockSize = t,
            this._len = 0
        }
        qn.prototype.update = function(t, e) {
            typeof t == "string" && (e = e || "utf8",
            t = dh.from(t, e));
            for (var r = this._block, i = this._blockSize, n = t.length, a = this._len, f = 0; f < n; ) {
                for (var h = a % i, c = Math.min(n - f, i - h), l = 0; l < c; l++)
                    r[h + l] = t[f + l];
                a += c,
                f += c,
                a % i === 0 && this._update(r)
            }
            return this._len += n,
            this
        }
        ,
        qn.prototype.digest = function(t) {
            var e = this._len % this._blockSize;
            this._block[e] = 128,
            this._block.fill(0, e + 1),
            e >= this._finalSize && (this._update(this._block),
            this._block.fill(0));
            var r = this._len * 8;
            if (r <= 4294967295)
                this._block.writeUInt32BE(r, this._blockSize - 4);
            else {
                var i = (r & 4294967295) >>> 0
                  , n = (r - i) / 4294967296;
                this._block.writeUInt32BE(n, this._blockSize - 8),
                this._block.writeUInt32BE(i, this._blockSize - 4)
            }
            this._update(this._block);
            var a = this._hash();
            return t ? a.toString(t) : a
        }
        ,
        qn.prototype._update = function() {
            throw new Error("_update must be implemented by subclass")
        }
        ;
        var di = qn
          , l2 = we
          , lh = di
          , p2 = ge.Buffer
          , v2 = [1518500249, 1859775393, -1894007588, -899497514]
          , b2 = new Array(80);
        function Ui() {
            this.init(),
            this._w = b2,
            lh.call(this, 64, 56)
        }
        l2(Ui, lh),
        Ui.prototype.init = function() {
            return this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878,
            this._e = 3285377520,
            this
        }
        ;
        function g2(t) {
            return t << 5 | t >>> 27
        }
        function y2(t) {
            return t << 30 | t >>> 2
        }
        function _2(t, e, r, i) {
            return t === 0 ? e & r | ~e & i : t === 2 ? e & r | e & i | r & i : e ^ r ^ i
        }
        Ui.prototype._update = function(t) {
            for (var e = this._w, r = this._a | 0, i = this._b | 0, n = this._c | 0, a = this._d | 0, f = this._e | 0, h = 0; h < 16; ++h)
                e[h] = t.readInt32BE(h * 4);
            for (; h < 80; ++h)
                e[h] = e[h - 3] ^ e[h - 8] ^ e[h - 14] ^ e[h - 16];
            for (var c = 0; c < 80; ++c) {
                var l = ~~(c / 20)
                  , v = g2(r) + _2(l, i, n, a) + f + e[c] + v2[l] | 0;
                f = a,
                a = n,
                n = y2(i),
                i = r,
                r = v
            }
            this._a = r + this._a | 0,
            this._b = i + this._b | 0,
            this._c = n + this._c | 0,
            this._d = a + this._d | 0,
            this._e = f + this._e | 0
        }
        ,
        Ui.prototype._hash = function() {
            var t = p2.allocUnsafe(20);
            return t.writeInt32BE(this._a | 0, 0),
            t.writeInt32BE(this._b | 0, 4),
            t.writeInt32BE(this._c | 0, 8),
            t.writeInt32BE(this._d | 0, 12),
            t.writeInt32BE(this._e | 0, 16),
            t
        }
        ;
        var m2 = Ui
          , w2 = we
          , ph = di
          , M2 = ge.Buffer
          , S2 = [1518500249, 1859775393, -1894007588, -899497514]
          , E2 = new Array(80);
        function Fi() {
            this.init(),
            this._w = E2,
            ph.call(this, 64, 56)
        }
        w2(Fi, ph),
        Fi.prototype.init = function() {
            return this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878,
            this._e = 3285377520,
            this
        }
        ;
        function A2(t) {
            return t << 1 | t >>> 31
        }
        function R2(t) {
            return t << 5 | t >>> 27
        }
        function B2(t) {
            return t << 30 | t >>> 2
        }
        function I2(t, e, r, i) {
            return t === 0 ? e & r | ~e & i : t === 2 ? e & r | e & i | r & i : e ^ r ^ i
        }
        Fi.prototype._update = function(t) {
            for (var e = this._w, r = this._a | 0, i = this._b | 0, n = this._c | 0, a = this._d | 0, f = this._e | 0, h = 0; h < 16; ++h)
                e[h] = t.readInt32BE(h * 4);
            for (; h < 80; ++h)
                e[h] = A2(e[h - 3] ^ e[h - 8] ^ e[h - 14] ^ e[h - 16]);
            for (var c = 0; c < 80; ++c) {
                var l = ~~(c / 20)
                  , v = R2(r) + I2(l, i, n, a) + f + e[c] + S2[l] | 0;
                f = a,
                a = n,
                n = B2(i),
                i = r,
                r = v
            }
            this._a = r + this._a | 0,
            this._b = i + this._b | 0,
            this._c = n + this._c | 0,
            this._d = a + this._d | 0,
            this._e = f + this._e | 0
        }
        ,
        Fi.prototype._hash = function() {
            var t = M2.allocUnsafe(20);
            return t.writeInt32BE(this._a | 0, 0),
            t.writeInt32BE(this._b | 0, 4),
            t.writeInt32BE(this._c | 0, 8),
            t.writeInt32BE(this._d | 0, 12),
            t.writeInt32BE(this._e | 0, 16),
            t
        }
        ;
        var T2 = Fi
          , P2 = we
          , vh = di
          , L2 = ge.Buffer
          , k2 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
          , C2 = new Array(64);
        function Hi() {
            this.init(),
            this._w = C2,
            vh.call(this, 64, 56)
        }
        P2(Hi, vh),
        Hi.prototype.init = function() {
            return this._a = 1779033703,
            this._b = 3144134277,
            this._c = 1013904242,
            this._d = 2773480762,
            this._e = 1359893119,
            this._f = 2600822924,
            this._g = 528734635,
            this._h = 1541459225,
            this
        }
        ;
        function $2(t, e, r) {
            return r ^ t & (e ^ r)
        }
        function O2(t, e, r) {
            return t & e | r & (t | e)
        }
        function D2(t) {
            return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
        }
        function x2(t) {
            return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
        }
        function N2(t) {
            return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
        }
        function q2(t) {
            return (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10
        }
        Hi.prototype._update = function(t) {
            for (var e = this._w, r = this._a | 0, i = this._b | 0, n = this._c | 0, a = this._d | 0, f = this._e | 0, h = this._f | 0, c = this._g | 0, l = this._h | 0, v = 0; v < 16; ++v)
                e[v] = t.readInt32BE(v * 4);
            for (; v < 64; ++v)
                e[v] = q2(e[v - 2]) + e[v - 7] + N2(e[v - 15]) + e[v - 16] | 0;
            for (var y = 0; y < 64; ++y) {
                var E = l + x2(f) + $2(f, h, c) + k2[y] + e[y] | 0
                  , T = D2(r) + O2(r, i, n) | 0;
                l = c,
                c = h,
                h = f,
                f = a + E | 0,
                a = n,
                n = i,
                i = r,
                r = E + T | 0
            }
            this._a = r + this._a | 0,
            this._b = i + this._b | 0,
            this._c = n + this._c | 0,
            this._d = a + this._d | 0,
            this._e = f + this._e | 0,
            this._f = h + this._f | 0,
            this._g = c + this._g | 0,
            this._h = l + this._h | 0
        }
        ,
        Hi.prototype._hash = function() {
            var t = L2.allocUnsafe(32);
            return t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t.writeInt32BE(this._h, 28),
            t
        }
        ;
        var bh = Hi
          , z2 = we
          , U2 = bh
          , F2 = di
          , H2 = ge.Buffer
          , j2 = new Array(64);
        function zn() {
            this.init(),
            this._w = j2,
            F2.call(this, 64, 56)
        }
        z2(zn, U2),
        zn.prototype.init = function() {
            return this._a = 3238371032,
            this._b = 914150663,
            this._c = 812702999,
            this._d = 4144912697,
            this._e = 4290775857,
            this._f = 1750603025,
            this._g = 1694076839,
            this._h = 3204075428,
            this
        }
        ,
        zn.prototype._hash = function() {
            var t = H2.allocUnsafe(28);
            return t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t
        }
        ;
        var W2 = zn
          , Y2 = we
          , gh = di
          , K2 = ge.Buffer
          , yh = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
          , V2 = new Array(160);
        function ji() {
            this.init(),
            this._w = V2,
            gh.call(this, 128, 112)
        }
        Y2(ji, gh),
        ji.prototype.init = function() {
            return this._ah = 1779033703,
            this._bh = 3144134277,
            this._ch = 1013904242,
            this._dh = 2773480762,
            this._eh = 1359893119,
            this._fh = 2600822924,
            this._gh = 528734635,
            this._hh = 1541459225,
            this._al = 4089235720,
            this._bl = 2227873595,
            this._cl = 4271175723,
            this._dl = 1595750129,
            this._el = 2917565137,
            this._fl = 725511199,
            this._gl = 4215389547,
            this._hl = 327033209,
            this
        }
        ;
        function _h(t, e, r) {
            return r ^ t & (e ^ r)
        }
        function mh(t, e, r) {
            return t & e | r & (t | e)
        }
        function wh(t, e) {
            return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
        }
        function Mh(t, e) {
            return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
        }
        function G2(t, e) {
            return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7
        }
        function J2(t, e) {
            return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25)
        }
        function X2(t, e) {
            return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6
        }
        function Z2(t, e) {
            return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26)
        }
        function et(t, e) {
            return t >>> 0 < e >>> 0 ? 1 : 0
        }
        ji.prototype._update = function(t) {
            for (var e = this._w, r = this._ah | 0, i = this._bh | 0, n = this._ch | 0, a = this._dh | 0, f = this._eh | 0, h = this._fh | 0, c = this._gh | 0, l = this._hh | 0, v = this._al | 0, y = this._bl | 0, E = this._cl | 0, T = this._dl | 0, I = this._el | 0, P = this._fl | 0, C = this._gl | 0, L = this._hl | 0, x = 0; x < 32; x += 2)
                e[x] = t.readInt32BE(x * 4),
                e[x + 1] = t.readInt32BE(x * 4 + 4);
            for (; x < 160; x += 2) {
                var Y = e[x - 30]
                  , F = e[x - 15 * 2 + 1]
                  , V = G2(Y, F)
                  , Q = J2(F, Y);
                Y = e[x - 2 * 2],
                F = e[x - 2 * 2 + 1];
                var oe = X2(Y, F)
                  , te = Z2(F, Y)
                  , W = e[x - 7 * 2]
                  , Ae = e[x - 7 * 2 + 1]
                  , M = e[x - 16 * 2]
                  , o = e[x - 16 * 2 + 1]
                  , u = Q + Ae | 0
                  , d = V + W + et(u, Q) | 0;
                u = u + te | 0,
                d = d + oe + et(u, te) | 0,
                u = u + o | 0,
                d = d + M + et(u, o) | 0,
                e[x] = d,
                e[x + 1] = u
            }
            for (var p = 0; p < 160; p += 2) {
                d = e[p],
                u = e[p + 1];
                var m = mh(r, i, n)
                  , S = mh(v, y, E)
                  , B = wh(r, v)
                  , b = wh(v, r)
                  , s = Mh(f, I)
                  , _ = Mh(I, f)
                  , G = yh[p]
                  , K = yh[p + 1]
                  , X = _h(f, h, c)
                  , re = _h(I, P, C)
                  , A = L + _ | 0
                  , R = l + s + et(A, L) | 0;
                A = A + re | 0,
                R = R + X + et(A, re) | 0,
                A = A + K | 0,
                R = R + G + et(A, K) | 0,
                A = A + u | 0,
                R = R + d + et(A, u) | 0;
                var z = b + S | 0
                  , j = B + m + et(z, b) | 0;
                l = c,
                L = C,
                c = h,
                C = P,
                h = f,
                P = I,
                I = T + A | 0,
                f = a + R + et(I, T) | 0,
                a = n,
                T = E,
                n = i,
                E = y,
                i = r,
                y = v,
                v = A + z | 0,
                r = R + j + et(v, A) | 0
            }
            this._al = this._al + v | 0,
            this._bl = this._bl + y | 0,
            this._cl = this._cl + E | 0,
            this._dl = this._dl + T | 0,
            this._el = this._el + I | 0,
            this._fl = this._fl + P | 0,
            this._gl = this._gl + C | 0,
            this._hl = this._hl + L | 0,
            this._ah = this._ah + r + et(this._al, v) | 0,
            this._bh = this._bh + i + et(this._bl, y) | 0,
            this._ch = this._ch + n + et(this._cl, E) | 0,
            this._dh = this._dh + a + et(this._dl, T) | 0,
            this._eh = this._eh + f + et(this._el, I) | 0,
            this._fh = this._fh + h + et(this._fl, P) | 0,
            this._gh = this._gh + c + et(this._gl, C) | 0,
            this._hh = this._hh + l + et(this._hl, L) | 0
        }
        ,
        ji.prototype._hash = function() {
            var t = K2.allocUnsafe(64);
            function e(r, i, n) {
                t.writeInt32BE(r, n),
                t.writeInt32BE(i, n + 4)
            }
            return e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            e(this._gh, this._gl, 48),
            e(this._hh, this._hl, 56),
            t
        }
        ;
        var Sh = ji
          , Q2 = we
          , e3 = Sh
          , t3 = di
          , r3 = ge.Buffer
          , i3 = new Array(160);
        function Un() {
            this.init(),
            this._w = i3,
            t3.call(this, 128, 112)
        }
        Q2(Un, e3),
        Un.prototype.init = function() {
            return this._ah = 3418070365,
            this._bh = 1654270250,
            this._ch = 2438529370,
            this._dh = 355462360,
            this._eh = 1731405415,
            this._fh = 2394180231,
            this._gh = 3675008525,
            this._hh = 1203062813,
            this._al = 3238371032,
            this._bl = 914150663,
            this._cl = 812702999,
            this._dl = 4144912697,
            this._el = 4290775857,
            this._fl = 1750603025,
            this._gl = 1694076839,
            this._hl = 3204075428,
            this
        }
        ,
        Un.prototype._hash = function() {
            var t = r3.allocUnsafe(48);
            function e(r, i, n) {
                t.writeInt32BE(r, n),
                t.writeInt32BE(i, n + 4)
            }
            return e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            t
        }
        ;
        var n3 = Un
          , zr = ch.exports = function(e) {
            e = e.toLowerCase();
            var r = zr[e];
            if (!r)
                throw new Error(e + " is not supported (we accept pull requests)");
            return new r
        }
        ;
        zr.sha = m2,
        zr.sha1 = T2,
        zr.sha224 = W2,
        zr.sha256 = bh,
        zr.sha384 = n3,
        zr.sha512 = Sh;
        var a3 = ch.exports
          , ef = ge.Buffer
          , Eh = function(t, e, r) {
            if (ef.isBuffer(t))
                return t;
            if (typeof t == "string")
                return ef.from(t, e);
            if (ArrayBuffer.isView(t))
                return ef.from(t.buffer);
            throw new TypeError(r + " must be a string, a Buffer, a typed array or a DataView")
        }
          , f3 = h2
          , o3 = d2
          , s3 = a3
          , Ur = ge.Buffer
          , h3 = ih
          , Ah = nh
          , Rh = Eh
          , u3 = Ur.alloc(128)
          , Fn = {
            md5: 16,
            sha1: 20,
            sha224: 28,
            sha256: 32,
            sha384: 48,
            sha512: 64,
            rmd160: 20,
            ripemd160: 20
        };
        function Bh(t, e, r) {
            var i = c3(t)
              , n = t === "sha512" || t === "sha384" ? 128 : 64;
            e.length > n ? e = i(e) : e.length < n && (e = Ur.concat([e, u3], n));
            for (var a = Ur.allocUnsafe(n + Fn[t]), f = Ur.allocUnsafe(n + Fn[t]), h = 0; h < n; h++)
                a[h] = e[h] ^ 54,
                f[h] = e[h] ^ 92;
            var c = Ur.allocUnsafe(n + r + 4);
            a.copy(c, 0, 0, n),
            this.ipad1 = c,
            this.ipad2 = a,
            this.opad = f,
            this.alg = t,
            this.blocksize = n,
            this.hash = i,
            this.size = Fn[t]
        }
        Bh.prototype.run = function(t, e) {
            t.copy(e, this.blocksize);
            var r = this.hash(e);
            return r.copy(this.opad, this.blocksize),
            this.hash(this.opad)
        }
        ;
        function c3(t) {
            function e(i) {
                return s3(t).update(i).digest()
            }
            function r(i) {
                return new o3().update(i).digest()
            }
            return t === "rmd160" || t === "ripemd160" ? r : t === "md5" ? f3 : e
        }
        function d3(t, e, r, i, n) {
            h3(r, i),
            t = Rh(t, Ah, "Password"),
            e = Rh(e, Ah, "Salt"),
            n = n || "sha1";
            var a = new Bh(n,t,e.length)
              , f = Ur.allocUnsafe(i)
              , h = Ur.allocUnsafe(e.length + 4);
            e.copy(h, 0, 0, e.length);
            for (var c = 0, l = Fn[n], v = Math.ceil(i / l), y = 1; y <= v; y++) {
                h.writeUInt32BE(y, e.length);
                for (var E = a.run(h, a.ipad1), T = E, I = 1; I < r; I++) {
                    T = a.run(T, a.ipad2);
                    for (var P = 0; P < l; P++)
                        E[P] ^= T[P]
                }
                E.copy(f, c),
                c += l
            }
            return f
        }
        var Ih = d3, Th = ge.Buffer, l3 = ih, Ph = nh, Lh = Ih, kh = Eh, Hn, Wi = O.crypto && O.crypto.subtle, p3 = {
            sha: "SHA-1",
            "sha-1": "SHA-1",
            sha1: "SHA-1",
            sha256: "SHA-256",
            "sha-256": "SHA-256",
            sha384: "SHA-384",
            "sha-384": "SHA-384",
            "sha-512": "SHA-512",
            sha512: "SHA-512"
        }, tf = [];
        function v3(t) {
            if (O.process && !O.process.browser || !Wi || !Wi.importKey || !Wi.deriveBits)
                return Promise.resolve(!1);
            if (tf[t] !== void 0)
                return tf[t];
            Hn = Hn || Th.alloc(8);
            var e = Ch(Hn, Hn, 10, 128, t).then(function() {
                return !0
            }).catch(function() {
                return !1
            });
            return tf[t] = e,
            e
        }
        var Fr;
        function rf() {
            return Fr || (O.process && O.process.nextTick ? Fr = O.process.nextTick : O.queueMicrotask ? Fr = O.queueMicrotask : O.setImmediate ? Fr = O.setImmediate : Fr = O.setTimeout,
            Fr)
        }
        function Ch(t, e, r, i, n) {
            return Wi.importKey("raw", t, {
                name: "PBKDF2"
            }, !1, ["deriveBits"]).then(function(a) {
                return Wi.deriveBits({
                    name: "PBKDF2",
                    salt: e,
                    iterations: r,
                    hash: {
                        name: n
                    }
                }, a, i << 3)
            }).then(function(a) {
                return Th.from(a)
            })
        }
        function b3(t, e) {
            t.then(function(r) {
                rf()(function() {
                    e(null, r)
                })
            }, function(r) {
                rf()(function() {
                    e(r)
                })
            })
        }
        var g3 = function(t, e, r, i, n, a) {
            typeof n == "function" && (a = n,
            n = void 0),
            n = n || "sha1";
            var f = p3[n.toLowerCase()];
            if (!f || typeof O.Promise != "function") {
                rf()(function() {
                    var h;
                    try {
                        h = Lh(t, e, r, i, n)
                    } catch (c) {
                        return a(c)
                    }
                    a(null, h)
                });
                return
            }
            if (l3(r, i),
            t = kh(t, Ph, "Password"),
            e = kh(e, Ph, "Salt"),
            typeof a != "function")
                throw new Error("No callback provided to pbkdf2");
            b3(v3(f).then(function(h) {
                return h ? Ch(t, e, r, i, f) : Lh(t, e, r, i, n)
            }), a)
        }
          , y3 = g3
          , _3 = Ih;
        D.Buffer = k,
        D.createCipher = k0,
        D.createCipheriv = C0,
        D.createDecipher = $0,
        D.createDecipheriv = O0,
        D.createECDH = a2,
        D.pbkdf2 = y3,
        D.pbkdf2Sync = _3
    })
}
)(Ef, Ef.exports);
var Sf = Ef.exports;
const or = N=>(I3("data-v-a9bf80b9"),
N = N(),
T3(),
N)
  , z3 = {
    class: "modal-body"
}
  , U3 = {
    class: "gresult"
}
  , F3 = {
    key: 0,
    src: C3,
    alt: "lose"
}
  , H3 = {
    key: 1,
    src: P3,
    alt: "fury image"
}
  , j3 = or(()=>ft("p", {
    class: "error-title"
}, "Server Error", -1))
  , W3 = or(()=>ft("p", {
    class: "error-text"
}, "Something went wrong, please try again", -1))
  , Y3 = or(()=>ft("h2", null, [rt(" Good job! "), ft("br"), rt(" You’ve collected: ")], -1))
  , K3 = or(()=>ft("h5", {
    class: "double-win-text"
}, [rt(" Activated “Double Win”"), ft("br"), rt(" booster doubles your"), ft("br"), rt(" winnings ")], -1))
  , V3 = or(()=>ft("h2", null, "Oops, give it another shot", -1))
  , G3 = or(()=>ft("h2", null, [rt(" Good job! "), ft("br"), rt(" You’ve collected: ")], -1))
  , J3 = or(()=>ft("h2", null, [rt(" Good job! "), ft("br"), rt(" You’ve collected: ")], -1))
  , X3 = or(()=>ft("h2", null, [rt(" Good job! "), ft("br"), rt(" You’ve collected: ")], -1))
  , Z3 = or(()=>ft("h3", null, "Share your success in social media to claim your crypto.", -1))
  , Q3 = {
    class: "gresult_btns"
}
  , e6 = Object.assign({
    name: "GameResult"
}, {
    __name: "GameResult",
    setup(N) {
        const {$socket: ie, $showModal: D, $hideModal: O} = R3()
          , U = w3()
          , {amounts: q, energySpent: H, gameStartedDate: mr, type: Pt, isDoubleWin: Lt, unclaimed: gt, isLost: yt, prevError: pi} = U.activeModalData
          , vi = M3();
        function Vi(it) {
            return it === "gp" ? q[it] || wr.value.length === 1 && !q[it] : !!q[it]
        }
        const wr = S3(()=>{
            const it = Object.keys(q);
            if (it != null && it.length)
                return it.filter(_t=>_t !== "energy")
        }
        )
          , Mr = E3(!0);
        A3(()=>{
            pi || Kn()
        }
        );
        async function Kn() {
            const it = `${vi.$state.user._id}${new Date(mr).getTime()}`
              , _t = $3(it)
              , ot = (At,k)=>{
                const Ji = Sf.Buffer.from(k, "hex")
                  , gi = Sf.createCipheriv("aes-256-cbc", k, Ji);
                return Sf.Buffer.concat([gi.update(At), gi.final()]).toString("hex")
            }
              , ce = Lt ? Wr(q) : q
              , Yr = ot(JSON.stringify({
                amounts: ce,
                energySpent: H,
                isLost: yt
            }), _t);
            if (gt)
                Mr.value = !0;
            else
                try {
                    await ie.emit("Game.finish", {
                        roundHash: Yr
                    }),
                    Mr.value = !0
					setTimeout(()=>{
						//document.querySelector("#__nuxt > div > div.modal-wrap > div > div > div > button").click();
						location.reload();
					} , 5000);
					
                } catch (At) {
                    Mr.value = !1,
                    console.log(At)
                }
        }
        async function bi() {
            if (!await L3("game"))
                return;
            const _t = [];
            for (const ot in q)
                _t.push({
                    currency: ot,
                    amount: q[ot]
                });
            O(),
            D({
                name: "Share",
                data: {
                    type: "game",
                    rewards: _t
                }
            })
        }
        function Wr(it) {
            const _t = {
                ...it
            };
            for (const ot in _t)
                ot !== "energy" && (_t[ot] /= 2);
            return _t
        }
        function Gi() {
            B3()
        }
        return (it,_t)=>{
            const ot = m3;
            return tt(),
            Et("div", z3, [ft("div", U3, [Se(Pt) === "Continue" || !Se(Mr) || Se(pi) ? (tt(),
            Et("img", F3)) : (tt(),
            Et("img", H3)), !Se(Mr) || Se(pi) ? (tt(),
            Et(Ft, {
                key: 2
            }, [j3, W3, yr(jr, {
                size: "l",
                color: "blue",
                fullwidth: "",
                class: "pending-claim__button",
                onClick: Gi
            }, {
                default: Hr(()=>[rt(" Try again")]),
                _: 1
            })], 64)) : Se(Lt) && Se(Pt) !== "Continue" ? (tt(),
            Et(Ft, {
                key: 3
            }, [Y3, (tt(!0),
            Et(Ft, null, jn(Se(wr), ce=>(tt(),
            Et(Ft, null, [Vi(ce) ? (tt(),
            Wn(ot, {
                key: ce,
                "is-double-win": Se(Lt),
                amount: Se(q)[ce],
                currency: ce,
                state: "done",
                img: ce === "gp" ? "pts.svg" : ce + ".svg"
            }, null, 8, ["is-double-win", "amount", "currency", "img"])) : Wh("", !0)], 64))), 256)), K3, yr(jr, {
                size: "l",
                color: "red",
                fullwidth: "",
                class: "pending-claim__button",
                onClick: Se(O)
            }, {
                default: Hr(()=>[rt(" Got it")]),
                _: 1
            }, 8, ["onClick"])], 64)) : Se(Pt) === "Continue" ? (tt(),
            Et(Ft, {
                key: 4
            }, [V3, yr(ot, {
                amount: 0,
                state: "done"
            }), yr(jr, {
                size: "l",
                color: "blue",
                fullwidth: "",
                class: "pending-claim__button",
                onClick: Se(O)
            }, {
                default: Hr(()=>[rt(" Continue")]),
                _: 1
            }, 8, ["onClick"])], 64)) : Se(Pt) === "Share" ? (tt(),
            Et(Ft, {
                key: 5
            }, [G3, (tt(!0),
            Et(Ft, null, jn(Se(wr), ce=>(tt(),
            Wn(ot, {
                key: ce,
                amount: Se(q)[ce],
                currency: ce,
                state: "done",
                img: ce === "gp" ? "pts.svg" : ce + ".svg"
            }, null, 8, ["amount", "currency", "img"]))), 128)), yr(jr, {
                size: "l",
                color: "blue",
                icon: "share",
                fullwidth: "",
                class: "pending-claim__button",
                onClick: bi
            }, {
                default: Hr(()=>[rt(" Share")]),
                _: 1
            })], 64)) : Se(Pt) === "Got it" ? (tt(),
            Et(Ft, {
                key: 6
            }, [J3, (tt(!0),
            Et(Ft, null, jn(Se(wr), ce=>(tt(),
            Wn(ot, {
                key: ce,
                amount: Se(q)[ce],
                currency: ce,
                state: "done",
                img: ce === "gp" ? "pts.svg" : ce + ".svg"
            }, null, 8, ["amount", "currency", "img"]))), 128)), yr(jr, {
                size: "l",
                color: "red",
                fullwidth: "",
                class: "pending-claim__button",
                onClick: Se(O)
            }, {
                default: Hr(()=>[rt(" Got it")]),
                _: 1
            }, 8, ["onClick"])], 64)) : Se(Pt) === "ClaimShare" ? (tt(),
            Et(Ft, {
                key: 7
            }, [X3, (tt(!0),
            Et(Ft, null, jn(Se(wr), ce=>(tt(),
            Wn(ot, {
                key: ce,
                amount: Se(q)[ce],
                currency: ce,
                state: "done",
                img: ce === "gp" ? "pts.svg" : ce + ".svg"
            }, null, 8, ["amount", "currency", "img"]))), 128)), Z3, ft("div", Q3, [yr(jr, {
                disabled: !0,
                size: "l",
                color: "red",
                fullwidth: "",
                class: "pending-claim__button"
            }, {
                default: Hr(()=>[rt(" Claim")]),
                _: 1
            }), yr(jr, {
                size: "l",
                color: "blue",
                icon: "share",
                fullwidth: "",
                class: "pending-claim__button",
                onClick: bi
            }, {
                default: Hr(()=>[rt(" Share")]),
                _: 1
            })])], 64)) : Wh("", !0)])])
        }
    }
})
  , h6 = k3(e6, [["__scopeId", "data-v-a9bf80b9"]]);
export {h6 as default};
