// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"bundle/demojs.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var o = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) {
      n.d(r, o, function (e) {
        return t[e];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 389);
}([function (t, e, n) {
  var r = n(2),
      o = n(13).f,
      i = n(15),
      a = n(16),
      u = n(86),
      l = n(115),
      s = n(56);

  t.exports = function (t, e) {
    var n,
        c,
        f,
        h,
        p,
        d = t.target,
        y = t.global,
        v = t.stat;
    if (n = y ? r : v ? r[d] || u(d, {}) : (r[d] || {}).prototype) for (c in e) {
      if (h = e[c], f = t.noTargetGet ? (p = o(n, c)) && p.value : n[c], !s(y ? c : d + (v ? "." : "#") + c, t.forced) && void 0 !== f) {
        if (_typeof(h) == _typeof(f)) continue;
        l(h, f);
      }

      (t.sham || f && f.sham) && i(h, "sham", !0), a(n, c, h, t);
    }
  };
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  };
}, function (t, e, n) {
  (function (e) {
    var n = function n(t) {
      return t && t.Math == Math && t;
    };

    t.exports = n("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || n("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || n("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || n("object" == _typeof(e) && e) || function () {
      return this;
    }() || Function("return this")();
  }).call(this, n(112));
}, function (t, e) {
  t.exports = function (t) {
    return "object" == _typeof(t) ? null !== t : "function" == typeof t;
  };
}, function (t, e, n) {
  var r = n(3);

  t.exports = function (t) {
    if (!r(t)) throw TypeError(String(t) + " is not an object");
    return t;
  };
}, function (t, e, n) {
  var r = n(1);
  t.exports = !r(function () {
    return 7 != Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1];
  });
}, function (t, e, n) {
  var r = n(2),
      o = n(89),
      i = n(11),
      a = n(52),
      u = n(93),
      l = n(117),
      s = o("wks"),
      c = r.Symbol,
      f = l ? c : c && c.withoutSetter || a;

  t.exports = function (t) {
    return i(s, t) || (u && i(c, t) ? s[t] = c[t] : s[t] = f("Symbol." + t)), s[t];
  };
}, function (t, e, n) {
  var r = n(26),
      o = Math.min;

  t.exports = function (t) {
    return t > 0 ? o(r(t), 9007199254740991) : 0;
  };
}, function (t, e, n) {
  "use strict";

  var r,
      o = n(110),
      i = n(5),
      a = n(2),
      u = n(3),
      l = n(11),
      s = n(61),
      c = n(15),
      f = n(16),
      h = n(9).f,
      p = n(27),
      d = n(38),
      y = n(6),
      v = n(52),
      g = a.Int8Array,
      b = g && g.prototype,
      m = a.Uint8ClampedArray,
      w = m && m.prototype,
      _ = g && p(g),
      x = b && p(b),
      O = Object.prototype,
      E = O.isPrototypeOf,
      S = y("toStringTag"),
      A = v("TYPED_ARRAY_TAG"),
      T = o && !!d && "Opera" !== s(a.opera),
      k = !1,
      j = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  },
      P = {
    BigInt64Array: 8,
    BigUint64Array: 8
  },
      N = function N(t) {
    if (!u(t)) return !1;
    var e = s(t);
    return l(j, e) || l(P, e);
  };

  for (r in j) {
    a[r] || (T = !1);
  }

  if ((!T || "function" != typeof _ || _ === Function.prototype) && (_ = function _() {
    throw TypeError("Incorrect invocation");
  }, T)) for (r in j) {
    a[r] && d(a[r], _);
  }
  if ((!T || !x || x === O) && (x = _.prototype, T)) for (r in j) {
    a[r] && d(a[r].prototype, x);
  }
  if (T && p(w) !== x && d(w, x), i && !l(x, S)) for (r in k = !0, h(x, S, {
    get: function get() {
      return u(this) ? this[A] : void 0;
    }
  }), j) {
    a[r] && c(a[r], A, r);
  }
  t.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: T,
    TYPED_ARRAY_TAG: k && A,
    aTypedArray: function aTypedArray(t) {
      if (N(t)) return t;
      throw TypeError("Target is not a typed array");
    },
    aTypedArrayConstructor: function aTypedArrayConstructor(t) {
      if (d) {
        if (E.call(_, t)) return t;
      } else for (var e in j) {
        if (l(j, r)) {
          var n = a[e];
          if (n && (t === n || E.call(n, t))) return t;
        }
      }

      throw TypeError("Target is not a typed array constructor");
    },
    exportTypedArrayMethod: function exportTypedArrayMethod(t, e, n) {
      if (i) {
        if (n) for (var r in j) {
          var o = a[r];
          o && l(o.prototype, t) && delete o.prototype[t];
        }
        x[t] && !n || f(x, t, n ? e : T && b[t] || e);
      }
    },
    exportTypedArrayStaticMethod: function exportTypedArrayStaticMethod(t, e, n) {
      var r, o;

      if (i) {
        if (d) {
          if (n) for (r in j) {
            (o = a[r]) && l(o, t) && delete o[t];
          }
          if (_[t] && !n) return;

          try {
            return f(_, t, n ? e : T && g[t] || e);
          } catch (t) {}
        }

        for (r in j) {
          !(o = a[r]) || o[t] && !n || f(o, t, e);
        }
      }
    },
    isView: function isView(t) {
      if (!u(t)) return !1;
      var e = s(t);
      return "DataView" === e || l(j, e) || l(P, e);
    },
    isTypedArray: N,
    TypedArray: _,
    TypedArrayPrototype: x
  };
}, function (t, e, n) {
  var r = n(5),
      o = n(113),
      i = n(4),
      a = n(28),
      u = Object.defineProperty;
  e.f = r ? u : function (t, e, n) {
    if (i(t), e = a(e, !0), i(n), o) try {
      return u(t, e, n);
    } catch (t) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
    return "value" in n && (t[e] = n.value), t;
  };
}, function (t, e, n) {
  var r = n(14);

  t.exports = function (t) {
    return Object(r(t));
  };
}, function (t, e) {
  var n = {}.hasOwnProperty;

  t.exports = function (t, e) {
    return n.call(t, e);
  };
}, function (t, e, n) {
  var r = n(37),
      o = n(51),
      i = n(10),
      a = n(7),
      u = n(58),
      l = [].push,
      s = function s(t) {
    var e = 1 == t,
        n = 2 == t,
        s = 3 == t,
        c = 4 == t,
        f = 6 == t,
        h = 7 == t,
        p = 5 == t || f;
    return function (d, y, v, g) {
      for (var b, m, w = i(d), _ = o(w), x = r(y, v, 3), O = a(_.length), E = 0, S = g || u, A = e ? S(d, O) : n || h ? S(d, 0) : void 0; O > E; E++) {
        if ((p || E in _) && (m = x(b = _[E], E, w), t)) if (e) A[E] = m;else if (m) switch (t) {
          case 3:
            return !0;

          case 5:
            return b;

          case 6:
            return E;

          case 2:
            l.call(A, b);
        } else switch (t) {
          case 4:
            return !1;

          case 7:
            l.call(A, b);
        }
      }

      return f ? -1 : s || c ? c : A;
    };
  };

  t.exports = {
    forEach: s(0),
    map: s(1),
    filter: s(2),
    some: s(3),
    every: s(4),
    find: s(5),
    findIndex: s(6),
    filterOut: s(7)
  };
}, function (t, e, n) {
  var r = n(5),
      o = n(67),
      i = n(31),
      a = n(21),
      u = n(28),
      l = n(11),
      s = n(113),
      c = Object.getOwnPropertyDescriptor;
  e.f = r ? c : function (t, e) {
    if (t = a(t), e = u(e, !0), s) try {
      return c(t, e);
    } catch (t) {}
    if (l(t, e)) return i(!o.f.call(t, e), t[e]);
  };
}, function (t, e) {
  t.exports = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  };
}, function (t, e, n) {
  var r = n(5),
      o = n(9),
      i = n(31);
  t.exports = r ? function (t, e, n) {
    return o.f(t, e, i(1, n));
  } : function (t, e, n) {
    return t[e] = n, t;
  };
}, function (t, e, n) {
  var r = n(2),
      o = n(15),
      i = n(11),
      a = n(86),
      u = n(87),
      l = n(17),
      s = l.get,
      c = l.enforce,
      f = String(String).split("String");
  (t.exports = function (t, e, n, u) {
    var l,
        s = !!u && !!u.unsafe,
        h = !!u && !!u.enumerable,
        p = !!u && !!u.noTargetGet;
    "function" == typeof n && ("string" != typeof e || i(n, "name") || o(n, "name", e), (l = c(n)).source || (l.source = f.join("string" == typeof e ? e : ""))), t !== r ? (s ? !p && t[e] && (h = !0) : delete t[e], h ? t[e] = n : o(t, e, n)) : h ? t[e] = n : a(e, n);
  })(Function.prototype, "toString", function () {
    return "function" == typeof this && s(this).source || u(this);
  });
}, function (t, e, n) {
  var r,
      o,
      i,
      a = n(114),
      u = n(2),
      l = n(3),
      s = n(15),
      c = n(11),
      f = n(88),
      h = n(68),
      p = n(53),
      d = u.WeakMap;

  if (a) {
    var y = f.state || (f.state = new d()),
        v = y.get,
        g = y.has,
        b = y.set;
    r = function r(t, e) {
      return e.facade = t, b.call(y, t, e), e;
    }, o = function o(t) {
      return v.call(y, t) || {};
    }, i = function i(t) {
      return g.call(y, t);
    };
  } else {
    var m = h("state");
    p[m] = !0, r = function r(t, e) {
      return e.facade = t, s(t, m, e), e;
    }, o = function o(t) {
      return c(t, m) ? t[m] : {};
    }, i = function i(t) {
      return c(t, m);
    };
  }

  t.exports = {
    set: r,
    get: o,
    has: i,
    enforce: function enforce(t) {
      return i(t) ? o(t) : r(t, {});
    },
    getterFor: function getterFor(t) {
      return function (e) {
        var n;
        if (!l(e) || (n = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
        return n;
      };
    }
  };
}, function (t, e) {
  t.exports = function (t) {
    if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
    return t;
  };
}, function (t, e, n) {
  var r = n(54),
      o = n(11),
      i = n(120),
      a = n(9).f;

  t.exports = function (t) {
    var e = r.Symbol || (r.Symbol = {});
    o(e, t) || a(e, t, {
      value: i.f(t)
    });
  };
}, function (t, e, n) {
  var r = n(5),
      o = n(1),
      i = n(11),
      a = Object.defineProperty,
      u = {},
      l = function l(t) {
    throw t;
  };

  t.exports = function (t, e) {
    if (i(u, t)) return u[t];
    e || (e = {});
    var n = [][t],
        s = !!i(e, "ACCESSORS") && e.ACCESSORS,
        c = i(e, 0) ? e[0] : l,
        f = i(e, 1) ? e[1] : void 0;
    return u[t] = !!n && !o(function () {
      if (s && !r) return !0;
      var t = {
        length: -1
      };
      s ? a(t, 1, {
        enumerable: !0,
        get: l
      }) : t[1] = 1, n.call(t, c, f);
    });
  };
}, function (t, e, n) {
  var r = n(51),
      o = n(14);

  t.exports = function (t) {
    return r(o(t));
  };
}, function (t, e, n) {
  var r = n(54),
      o = n(2),
      i = function i(t) {
    return "function" == typeof t ? t : void 0;
  };

  t.exports = function (t, e) {
    return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][e] || o[t] && o[t][e];
  };
}, function (t, e, n) {
  var r = n(14),
      o = /"/g;

  t.exports = function (t, e, n, i) {
    var a = String(r(t)),
        u = "<" + e;
    return "" !== n && (u += " " + n + '="' + String(i).replace(o, "&quot;") + '"'), u + ">" + a + "</" + e + ">";
  };
}, function (t, e, n) {
  var r = n(1);

  t.exports = function (t) {
    return r(function () {
      var e = ""[t]('"');
      return e !== e.toLowerCase() || e.split('"').length > 3;
    });
  };
}, function (t, e) {
  t.exports = !1;
}, function (t, e) {
  var n = Math.ceil,
      r = Math.floor;

  t.exports = function (t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
  };
}, function (t, e, n) {
  var r = n(11),
      o = n(10),
      i = n(68),
      a = n(95),
      u = i("IE_PROTO"),
      l = Object.prototype;
  t.exports = a ? Object.getPrototypeOf : function (t) {
    return t = o(t), r(t, u) ? t[u] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? l : null;
  };
}, function (t, e, n) {
  var r = n(3);

  t.exports = function (t, e) {
    if (!r(t)) return t;
    var n, o;
    if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
    if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
    if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
    throw TypeError("Can't convert object to primitive value");
  };
}, function (t, e, n) {
  var r = n(9).f,
      o = n(11),
      i = n(6)("toStringTag");

  t.exports = function (t, e, n) {
    t && !o(t = n ? t : t.prototype, i) && r(t, i, {
      configurable: !0,
      value: e
    });
  };
}, function (t, e, n) {
  var r,
      o = n(4),
      i = n(94),
      a = n(91),
      u = n(53),
      l = n(118),
      s = n(85),
      c = n(68),
      f = c("IE_PROTO"),
      h = function h() {},
      p = function p(t) {
    return "<script>" + t + "<\/script>";
  },
      _d = function d() {
    try {
      r = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}

    var t, e;
    _d = r ? function (t) {
      t.write(p("")), t.close();
      var e = t.parentWindow.Object;
      return t = null, e;
    }(r) : ((e = s("iframe")).style.display = "none", l.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F);

    for (var n = a.length; n--;) {
      delete _d.prototype[a[n]];
    }

    return _d();
  };

  u[f] = !0, t.exports = Object.create || function (t, e) {
    var n;
    return null !== t ? (h.prototype = o(t), n = new h(), h.prototype = null, n[f] = t) : n = _d(), void 0 === e ? n : i(n, e);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    };
  };
}, function (t, e) {
  var n = {}.toString;

  t.exports = function (t) {
    return n.call(t).slice(8, -1);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(1);

  t.exports = function (t, e) {
    var n = [][t];
    return !!n && r(function () {
      n.call(null, e || function () {
        throw 1;
      }, 1);
    });
  };
}, function (t, e, n) {
  var r = n(4),
      o = n(18),
      i = n(6)("species");

  t.exports = function (t, e) {
    var n,
        a = r(t).constructor;
    return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(2),
      i = n(5),
      a = n(111),
      u = n(8),
      l = n(84),
      s = n(41),
      c = n(31),
      f = n(15),
      h = n(7),
      p = n(147),
      d = n(148),
      y = n(28),
      v = n(11),
      g = n(61),
      b = n(3),
      m = n(30),
      w = n(38),
      _ = n(42).f,
      x = n(149),
      O = n(12).forEach,
      E = n(47),
      S = n(9),
      A = n(13),
      T = n(17),
      k = n(80),
      j = T.get,
      P = T.set,
      N = S.f,
      q = A.f,
      R = Math.round,
      L = o.RangeError,
      C = l.ArrayBuffer,
      I = l.DataView,
      M = u.NATIVE_ARRAY_BUFFER_VIEWS,
      D = u.TYPED_ARRAY_TAG,
      B = u.TypedArray,
      U = u.TypedArrayPrototype,
      F = u.aTypedArrayConstructor,
      J = u.isTypedArray,
      H = function H(t, e) {
    for (var n = 0, r = e.length, o = new (F(t))(r); r > n;) {
      o[n] = e[n++];
    }

    return o;
  },
      z = function z(t, e) {
    N(t, e, {
      get: function get() {
        return j(this)[e];
      }
    });
  },
      Y = function Y(t) {
    var e;
    return t instanceof C || "ArrayBuffer" == (e = g(t)) || "SharedArrayBuffer" == e;
  },
      W = function W(t, e) {
    return J(t) && "symbol" != _typeof(e) && e in t && String(+e) == String(e);
  },
      K = function K(t, e) {
    return W(t, e = y(e, !0)) ? c(2, t[e]) : q(t, e);
  },
      V = function V(t, e, n) {
    return !(W(t, e = y(e, !0)) && b(n) && v(n, "value")) || v(n, "get") || v(n, "set") || n.configurable || v(n, "writable") && !n.writable || v(n, "enumerable") && !n.enumerable ? N(t, e, n) : (t[e] = n.value, t);
  };

  i ? (M || (A.f = K, S.f = V, z(U, "buffer"), z(U, "byteOffset"), z(U, "byteLength"), z(U, "length")), r({
    target: "Object",
    stat: !0,
    forced: !M
  }, {
    getOwnPropertyDescriptor: K,
    defineProperty: V
  }), t.exports = function (t, e, n) {
    var i = t.match(/\d+$/)[0] / 8,
        u = t + (n ? "Clamped" : "") + "Array",
        l = "get" + t,
        c = "set" + t,
        y = o[u],
        v = y,
        g = v && v.prototype,
        S = {},
        A = function A(t, e) {
      N(t, e, {
        get: function get() {
          return function (t, e) {
            var n = j(t);
            return n.view[l](e * i + n.byteOffset, !0);
          }(this, e);
        },
        set: function set(t) {
          return function (t, e, r) {
            var o = j(t);
            n && (r = (r = R(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), o.view[c](e * i + o.byteOffset, r, !0);
          }(this, e, t);
        },
        enumerable: !0
      });
    };

    M ? a && (v = e(function (t, e, n, r) {
      return s(t, v, u), k(b(e) ? Y(e) ? void 0 !== r ? new y(e, d(n, i), r) : void 0 !== n ? new y(e, d(n, i)) : new y(e) : J(e) ? H(v, e) : x.call(v, e) : new y(p(e)), t, v);
    }), w && w(v, B), O(_(y), function (t) {
      t in v || f(v, t, y[t]);
    }), v.prototype = g) : (v = e(function (t, e, n, r) {
      s(t, v, u);
      var o,
          a,
          l,
          c = 0,
          f = 0;

      if (b(e)) {
        if (!Y(e)) return J(e) ? H(v, e) : x.call(v, e);
        o = e, f = d(n, i);
        var y = e.byteLength;

        if (void 0 === r) {
          if (y % i) throw L("Wrong length");
          if ((a = y - f) < 0) throw L("Wrong length");
        } else if ((a = h(r) * i) + f > y) throw L("Wrong length");

        l = a / i;
      } else l = p(e), o = new C(a = l * i);

      for (P(t, {
        buffer: o,
        byteOffset: f,
        byteLength: a,
        length: l,
        view: new I(o)
      }); c < l;) {
        A(t, c++);
      }
    }), w && w(v, B), g = v.prototype = m(U)), g.constructor !== v && f(g, "constructor", v), D && f(g, D, u), S[u] = v, r({
      global: !0,
      forced: v != y,
      sham: !M
    }, S), "BYTES_PER_ELEMENT" in v || f(v, "BYTES_PER_ELEMENT", i), "BYTES_PER_ELEMENT" in g || f(g, "BYTES_PER_ELEMENT", i), E(u);
  }) : t.exports = function () {};
}, function (t, e, n) {
  var r = n(26),
      o = Math.max,
      i = Math.min;

  t.exports = function (t, e) {
    var n = r(t);
    return n < 0 ? o(n + e, 0) : i(n, e);
  };
}, function (t, e, n) {
  var r = n(18);

  t.exports = function (t, e, n) {
    if (r(t), void 0 === e) return t;

    switch (n) {
      case 0:
        return function () {
          return t.call(e);
        };

      case 1:
        return function (n) {
          return t.call(e, n);
        };

      case 2:
        return function (n, r) {
          return t.call(e, n, r);
        };

      case 3:
        return function (n, r, o) {
          return t.call(e, n, r, o);
        };
    }

    return function () {
      return t.apply(e, arguments);
    };
  };
}, function (t, e, n) {
  var r = n(4),
      o = n(121);
  t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t,
        e = !1,
        n = {};

    try {
      (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array;
    } catch (t) {}

    return function (n, i) {
      return r(n), o(i), e ? t.call(n, i) : n.__proto__ = i, n;
    };
  }() : void 0);
}, function (t, e, n) {
  var r = n(4),
      o = n(96),
      i = n(7),
      a = n(37),
      u = n(60),
      l = n(122),
      s = function s(t, e) {
    this.stopped = t, this.result = e;
  };

  t.exports = function (t, e, n) {
    var c,
        f,
        h,
        p,
        d,
        y,
        v,
        g = n && n.that,
        b = !(!n || !n.AS_ENTRIES),
        m = !(!n || !n.IS_ITERATOR),
        w = !(!n || !n.INTERRUPTED),
        _ = a(e, g, 1 + b + w),
        x = function x(t) {
      return c && l(c), new s(!0, t);
    },
        O = function O(t) {
      return b ? (r(t), w ? _(t[0], t[1], x) : _(t[0], t[1])) : w ? _(t, x) : _(t);
    };

    if (m) c = t;else {
      if ("function" != typeof (f = u(t))) throw TypeError("Target is not iterable");

      if (o(f)) {
        for (h = 0, p = i(t.length); p > h; h++) {
          if ((d = O(t[h])) && d instanceof s) return d;
        }

        return new s(!1);
      }

      c = f.call(t);
    }

    for (y = c.next; !(v = y.call(c)).done;) {
      try {
        d = O(v.value);
      } catch (t) {
        throw l(c), t;
      }

      if ("object" == _typeof(d) && d && d instanceof s) return d;
    }

    return new s(!1);
  };
}, function (t, e, n) {
  var r = n(6),
      o = n(30),
      i = n(9),
      a = r("unscopables"),
      u = Array.prototype;
  null == u[a] && i.f(u, a, {
    configurable: !0,
    value: o(null)
  }), t.exports = function (t) {
    u[a][t] = !0;
  };
}, function (t, e) {
  t.exports = function (t, e, n) {
    if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
    return t;
  };
}, function (t, e, n) {
  var r = n(116),
      o = n(91).concat("length", "prototype");

  e.f = Object.getOwnPropertyNames || function (t) {
    return r(t, o);
  };
}, function (t, e, n) {
  var r = n(32);

  t.exports = Array.isArray || function (t) {
    return "Array" == r(t);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(28),
      o = n(9),
      i = n(31);

  t.exports = function (t, e, n) {
    var a = r(e);
    a in t ? o.f(t, a, i(0, n)) : t[a] = n;
  };
}, function (t, e, n) {
  var r = n(53),
      o = n(3),
      i = n(11),
      a = n(9).f,
      u = n(52),
      l = n(65),
      s = u("meta"),
      c = 0,
      f = Object.isExtensible || function () {
    return !0;
  },
      h = function h(t) {
    a(t, s, {
      value: {
        objectID: "O" + ++c,
        weakData: {}
      }
    });
  },
      p = t.exports = {
    REQUIRED: !1,
    fastKey: function fastKey(t, e) {
      if (!o(t)) return "symbol" == _typeof(t) ? t : ("string" == typeof t ? "S" : "P") + t;

      if (!i(t, s)) {
        if (!f(t)) return "F";
        if (!e) return "E";
        h(t);
      }

      return t[s].objectID;
    },
    getWeakData: function getWeakData(t, e) {
      if (!i(t, s)) {
        if (!f(t)) return !0;
        if (!e) return !1;
        h(t);
      }

      return t[s].weakData;
    },
    onFreeze: function onFreeze(t) {
      return l && p.REQUIRED && f(t) && !i(t, s) && h(t), t;
    }
  };

  r[s] = !0;
}, function (t, e, n) {
  var r = n(32),
      o = n(2);
  t.exports = "process" == r(o.process);
}, function (t, e, n) {
  "use strict";

  var r = n(22),
      o = n(9),
      i = n(6),
      a = n(5),
      u = i("species");

  t.exports = function (t) {
    var e = r(t),
        n = o.f;
    a && e && !e[u] && n(e, u, {
      configurable: !0,
      get: function get() {
        return this;
      }
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(4);

  t.exports = function () {
    var t = r(this),
        e = "";
    return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
  };
}, function (t, e, n) {
  var r = n(14),
      o = "[" + n(79) + "]",
      i = RegExp("^" + o + o + "*"),
      a = RegExp(o + o + "*$"),
      u = function u(t) {
    return function (e) {
      var n = String(r(e));
      return 1 & t && (n = n.replace(i, "")), 2 & t && (n = n.replace(a, "")), n;
    };
  };

  t.exports = {
    start: u(1),
    end: u(2),
    trim: u(3)
  };
}, function (t, e, n) {
  var r = n(16);

  t.exports = function (t, e, n) {
    for (var o in e) {
      r(t, o, e[o], n);
    }

    return t;
  };
}, function (t, e, n) {
  var r = n(1),
      o = n(32),
      i = "".split;
  t.exports = r(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    return "String" == o(t) ? i.call(t, "") : Object(t);
  } : Object;
}, function (t, e) {
  var n = 0,
      r = Math.random();

  t.exports = function (t) {
    return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36);
  };
}, function (t, e) {
  t.exports = {};
}, function (t, e, n) {
  var r = n(2);
  t.exports = r;
}, function (t, e, n) {
  var r = n(21),
      o = n(7),
      i = n(36),
      a = function a(t) {
    return function (e, n, a) {
      var u,
          l = r(e),
          s = o(l.length),
          c = i(a, s);

      if (t && n != n) {
        for (; s > c;) {
          if ((u = l[c++]) != u) return !0;
        }
      } else for (; s > c; c++) {
        if ((t || c in l) && l[c] === n) return t || c || 0;
      }

      return !t && -1;
    };
  };

  t.exports = {
    includes: a(!0),
    indexOf: a(!1)
  };
}, function (t, e, n) {
  var r = n(1),
      o = /#|\.prototype\./,
      i = function i(t, e) {
    var n = u[a(t)];
    return n == s || n != l && ("function" == typeof e ? r(e) : !!e);
  },
      a = i.normalize = function (t) {
    return String(t).replace(o, ".").toLowerCase();
  },
      u = i.data = {},
      l = i.NATIVE = "N",
      s = i.POLYFILL = "P";

  t.exports = i;
}, function (t, e, n) {
  var r = n(116),
      o = n(91);

  t.exports = Object.keys || function (t) {
    return r(t, o);
  };
}, function (t, e, n) {
  var r = n(3),
      o = n(43),
      i = n(6)("species");

  t.exports = function (t, e) {
    var n;
    return o(t) && ("function" != typeof (n = t.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === e ? 0 : e);
  };
}, function (t, e) {
  t.exports = {};
}, function (t, e, n) {
  var r = n(61),
      o = n(59),
      i = n(6)("iterator");

  t.exports = function (t) {
    if (null != t) return t[i] || t["@@iterator"] || o[r(t)];
  };
}, function (t, e, n) {
  var r = n(97),
      o = n(32),
      i = n(6)("toStringTag"),
      a = "Arguments" == o(function () {
    return arguments;
  }());
  t.exports = r ? o : function (t) {
    var e, n, r;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
      try {
        return t[e];
      } catch (t) {}
    }(e = Object(t), i)) ? n : a ? o(e) : "Object" == (r = o(e)) && "function" == typeof e.callee ? "Arguments" : r;
  };
}, function (t, e, n) {
  var r = n(1),
      o = n(6),
      i = n(63),
      a = o("species");

  t.exports = function (t) {
    return i >= 51 || !r(function () {
      var e = [];
      return (e.constructor = {})[a] = function () {
        return {
          foo: 1
        };
      }, 1 !== e[t](Boolean).foo;
    });
  };
}, function (t, e, n) {
  var r,
      o,
      i = n(2),
      a = n(64),
      u = i.process,
      l = u && u.versions,
      s = l && l.v8;
  s ? o = (r = s.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), t.exports = o && +o;
}, function (t, e, n) {
  var r = n(22);
  t.exports = r("navigator", "userAgent") || "";
}, function (t, e, n) {
  var r = n(1);
  t.exports = !r(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  });
}, function (t, e, n) {
  var r = n(3),
      o = n(32),
      i = n(6)("match");

  t.exports = function (t) {
    var e;
    return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t));
  };
}, function (t, e, n) {
  "use strict";

  var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({
    1: 2
  }, 1);
  e.f = i ? function (t) {
    var e = o(this, t);
    return !!e && e.enumerable;
  } : r;
}, function (t, e, n) {
  var r = n(89),
      o = n(52),
      i = r("keys");

  t.exports = function (t) {
    return i[t] || (i[t] = o(t));
  };
}, function (t, e, n) {
  var r = n(6)("iterator"),
      o = !1;

  try {
    var i = 0,
        a = {
      next: function next() {
        return {
          done: !!i++
        };
      },
      return: function _return() {
        o = !0;
      }
    };
    a[r] = function () {
      return this;
    }, Array.from(a, function () {
      throw 2;
    });
  } catch (t) {}

  t.exports = function (t, e) {
    if (!e && !o) return !1;
    var n = !1;

    try {
      var i = {};
      i[r] = function () {
        return {
          next: function next() {
            return {
              done: n = !0
            };
          }
        };
      }, t(i);
    } catch (t) {}

    return n;
  };
}, function (t, e, n) {
  var r = n(18),
      o = n(10),
      i = n(51),
      a = n(7),
      u = function u(t) {
    return function (e, n, u, l) {
      r(n);
      var s = o(e),
          c = i(s),
          f = a(s.length),
          h = t ? f - 1 : 0,
          p = t ? -1 : 1;
      if (u < 2) for (;;) {
        if (h in c) {
          l = c[h], h += p;
          break;
        }

        if (h += p, t ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value");
      }

      for (; t ? h >= 0 : f > h; h += p) {
        h in c && (l = n(l, c[h], h, s));
      }

      return l;
    };
  };

  t.exports = {
    left: u(!1),
    right: u(!0)
  };
}, function (t, e, n) {
  "use strict";

  var r = n(21),
      o = n(40),
      i = n(59),
      a = n(17),
      u = n(99),
      l = a.set,
      s = a.getterFor("Array Iterator");
  t.exports = u(Array, "Array", function (t, e) {
    l(this, {
      type: "Array Iterator",
      target: r(t),
      index: 0,
      kind: e
    });
  }, function () {
    var t = s(this),
        e = t.target,
        n = t.kind,
        r = t.index++;
    return !e || r >= e.length ? (t.target = void 0, {
      value: void 0,
      done: !0
    }) : "keys" == n ? {
      value: r,
      done: !1
    } : "values" == n ? {
      value: e[r],
      done: !1
    } : {
      value: [r, e[r]],
      done: !1
    };
  }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
}, function (t, e, n) {
  "use strict";

  var r = n(25),
      o = n(2),
      i = n(1);
  t.exports = r || !i(function () {
    var t = Math.random();
    __defineSetter__.call(null, t, function () {}), delete o[t];
  });
}, function (t, e, n) {
  var r = n(26),
      o = n(14),
      i = function i(t) {
    return function (e, n) {
      var i,
          a,
          u = String(o(e)),
          l = r(n),
          s = u.length;
      return l < 0 || l >= s ? t ? "" : void 0 : (i = u.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === s || (a = u.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? u.charAt(l) : i : t ? u.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536;
    };
  };

  t.exports = {
    codeAt: i(!1),
    charAt: i(!0)
  };
}, function (t, e, n) {
  "use strict";

  n(103);
  var r = n(16),
      o = n(1),
      i = n(6),
      a = n(75),
      u = n(15),
      l = i("species"),
      s = !o(function () {
    var t = /./;
    return t.exec = function () {
      var t = [];
      return t.groups = {
        a: "7"
      }, t;
    }, "7" !== "".replace(t, "$<a>");
  }),
      c = "$0" === "a".replace(/./, "$0"),
      f = i("replace"),
      h = !!/./[f] && "" === /./[f]("a", "$0"),
      p = !o(function () {
    var t = /(?:)/,
        e = t.exec;

    t.exec = function () {
      return e.apply(this, arguments);
    };

    var n = "ab".split(t);
    return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
  });

  t.exports = function (t, e, n, f) {
    var d = i(t),
        y = !o(function () {
      var e = {};
      return e[d] = function () {
        return 7;
      }, 7 != ""[t](e);
    }),
        v = y && !o(function () {
      var e = !1,
          n = /a/;
      return "split" === t && ((n = {}).constructor = {}, n.constructor[l] = function () {
        return n;
      }, n.flags = "", n[d] = /./[d]), n.exec = function () {
        return e = !0, null;
      }, n[d](""), !e;
    });

    if (!y || !v || "replace" === t && (!s || !c || h) || "split" === t && !p) {
      var g = /./[d],
          b = n(d, ""[t], function (t, e, n, r, o) {
        return e.exec === a ? y && !o ? {
          done: !0,
          value: g.call(e, n, r)
        } : {
          done: !0,
          value: t.call(n, e, r)
        } : {
          done: !1
        };
      }, {
        REPLACE_KEEPS_$0: c,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: h
      }),
          m = b[0],
          w = b[1];
      r(String.prototype, t, m), r(RegExp.prototype, d, 2 == e ? function (t, e) {
        return w.call(t, this, e);
      } : function (t) {
        return w.call(t, this);
      });
    }

    f && u(RegExp.prototype[d], "sham", !0);
  };
}, function (t, e, n) {
  "use strict";

  var r,
      o,
      i = n(48),
      a = n(76),
      u = RegExp.prototype.exec,
      l = String.prototype.replace,
      s = u,
      c = (r = /a/, o = /b*/g, u.call(r, "a"), u.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
      f = a.UNSUPPORTED_Y || a.BROKEN_CARET,
      h = void 0 !== /()??/.exec("")[1];
  (c || h || f) && (s = function s(t) {
    var e,
        n,
        r,
        o,
        a = this,
        s = f && a.sticky,
        p = i.call(a),
        d = a.source,
        y = 0,
        v = t;
    return s && (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"), v = String(t).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== t[a.lastIndex - 1]) && (d = "(?: " + d + ")", v = " " + v, y++), n = new RegExp("^(?:" + d + ")", p)), h && (n = new RegExp("^" + d + "$(?!\\s)", p)), c && (e = a.lastIndex), r = u.call(s ? n : a, v), s ? r ? (r.input = r.input.slice(y), r[0] = r[0].slice(y), r.index = a.lastIndex, a.lastIndex += r[0].length) : a.lastIndex = 0 : c && r && (a.lastIndex = a.global ? r.index + r[0].length : e), h && r && r.length > 1 && l.call(r[0], n, function () {
      for (o = 1; o < arguments.length - 2; o++) {
        void 0 === arguments[o] && (r[o] = void 0);
      }
    }), r;
  }), t.exports = s;
}, function (t, e, n) {
  "use strict";

  var r = n(1);

  function o(t, e) {
    return RegExp(t, e);
  }

  e.UNSUPPORTED_Y = r(function () {
    var t = o("a", "y");
    return t.lastIndex = 2, null != t.exec("abcd");
  }), e.BROKEN_CARET = r(function () {
    var t = o("^r", "gy");
    return t.lastIndex = 2, null != t.exec("str");
  });
}, function (t, e, n) {
  "use strict";

  var r = n(73).charAt;

  t.exports = function (t, e, n) {
    return e + (n ? r(t, e).length : 1);
  };
}, function (t, e, n) {
  var r = n(32),
      o = n(75);

  t.exports = function (t, e) {
    var n = t.exec;

    if ("function" == typeof n) {
      var i = n.call(t, e);
      if ("object" != _typeof(i)) throw TypeError("RegExp exec method returned something other than an Object or null");
      return i;
    }

    if ("RegExp" !== r(t)) throw TypeError("RegExp#exec called on incompatible receiver");
    return o.call(t, e);
  };
}, function (t, e) {
  t.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
}, function (t, e, n) {
  var r = n(3),
      o = n(38);

  t.exports = function (t, e, n) {
    var i, a;
    return o && "function" == typeof (i = e.constructor) && i !== n && r(a = i.prototype) && a !== n.prototype && o(t, a), t;
  };
}, function (t, e) {
  var n = Math.expm1,
      r = Math.exp;
  t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function (t) {
    return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : r(t) - 1;
  } : n;
}, function (t, e, n) {
  "use strict";

  var r = n(18),
      o = function o(t) {
    var e, n;
    this.promise = new t(function (t, r) {
      if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
      e = t, n = r;
    }), this.resolve = r(e), this.reject = r(n);
  };

  t.exports.f = function (t) {
    return new o(t);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(2),
      i = n(56),
      a = n(16),
      u = n(45),
      l = n(39),
      s = n(41),
      c = n(3),
      f = n(1),
      h = n(69),
      p = n(29),
      d = n(80);

  t.exports = function (t, e, n) {
    var y = -1 !== t.indexOf("Map"),
        v = -1 !== t.indexOf("Weak"),
        g = y ? "set" : "add",
        b = o[t],
        m = b && b.prototype,
        w = b,
        _ = {},
        x = function x(t) {
      var e = m[t];
      a(m, t, "add" == t ? function (t) {
        return e.call(this, 0 === t ? 0 : t), this;
      } : "delete" == t ? function (t) {
        return !(v && !c(t)) && e.call(this, 0 === t ? 0 : t);
      } : "get" == t ? function (t) {
        return v && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
      } : "has" == t ? function (t) {
        return !(v && !c(t)) && e.call(this, 0 === t ? 0 : t);
      } : function (t, n) {
        return e.call(this, 0 === t ? 0 : t, n), this;
      });
    };

    if (i(t, "function" != typeof b || !(v || m.forEach && !f(function () {
      new b().entries().next();
    })))) w = n.getConstructor(e, t, y, g), u.REQUIRED = !0;else if (i(t, !0)) {
      var O = new w(),
          E = O[g](v ? {} : -0, 1) != O,
          S = f(function () {
        O.has(1);
      }),
          A = h(function (t) {
        new b(t);
      }),
          T = !v && f(function () {
        for (var t = new b(), e = 5; e--;) {
          t[g](e, e);
        }

        return !t.has(-0);
      });
      A || ((w = e(function (e, n) {
        s(e, w, t);
        var r = d(new b(), e, w);
        return null != n && l(n, r[g], {
          that: r,
          AS_ENTRIES: y
        }), r;
      })).prototype = m, m.constructor = w), (S || T) && (x("delete"), x("has"), y && x("get")), (T || E) && x(g), v && m.clear && delete m.clear;
    }
    return _[t] = w, r({
      global: !0,
      forced: w != b
    }, _), p(w, t), v || n.setStrong(w, t, y), w;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(2),
      o = n(5),
      i = n(110),
      a = n(15),
      u = n(50),
      l = n(1),
      s = n(41),
      c = n(26),
      f = n(7),
      h = n(147),
      p = n(325),
      d = n(27),
      y = n(38),
      v = n(42).f,
      g = n(9).f,
      b = n(98),
      m = n(29),
      w = n(17),
      _ = w.get,
      x = w.set,
      O = r.ArrayBuffer,
      _E2 = O,
      _S = r.DataView,
      A = _S && _S.prototype,
      T = Object.prototype,
      k = r.RangeError,
      j = p.pack,
      P = p.unpack,
      N = function N(t) {
    return [255 & t];
  },
      q = function q(t) {
    return [255 & t, t >> 8 & 255];
  },
      R = function R(t) {
    return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255];
  },
      L = function L(t) {
    return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
  },
      C = function C(t) {
    return j(t, 23, 4);
  },
      I = function I(t) {
    return j(t, 52, 8);
  },
      M = function M(t, e) {
    g(t.prototype, e, {
      get: function get() {
        return _(this)[e];
      }
    });
  },
      D = function D(t, e, n, r) {
    var o = h(n),
        i = _(t);

    if (o + e > i.byteLength) throw k("Wrong index");

    var a = _(i.buffer).bytes,
        u = o + i.byteOffset,
        l = a.slice(u, u + e);

    return r ? l : l.reverse();
  },
      B = function B(t, e, n, r, o, i) {
    var a = h(n),
        u = _(t);

    if (a + e > u.byteLength) throw k("Wrong index");

    for (var l = _(u.buffer).bytes, s = a + u.byteOffset, c = r(+o), f = 0; f < e; f++) {
      l[s + f] = c[i ? f : e - f - 1];
    }
  };

  if (i) {
    if (!l(function () {
      O(1);
    }) || !l(function () {
      new O(-1);
    }) || l(function () {
      return new O(), new O(1.5), new O(NaN), "ArrayBuffer" != O.name;
    })) {
      for (var U, F = (_E2 = function E(t) {
        return s(this, _E2), new O(h(t));
      }).prototype = O.prototype, J = v(O), H = 0; J.length > H;) {
        (U = J[H++]) in _E2 || a(_E2, U, O[U]);
      }

      F.constructor = _E2;
    }

    y && d(A) !== T && y(A, T);
    var z = new _S(new _E2(2)),
        Y = A.setInt8;
    z.setInt8(0, 2147483648), z.setInt8(1, 2147483649), !z.getInt8(0) && z.getInt8(1) || u(A, {
      setInt8: function setInt8(t, e) {
        Y.call(this, t, e << 24 >> 24);
      },
      setUint8: function setUint8(t, e) {
        Y.call(this, t, e << 24 >> 24);
      }
    }, {
      unsafe: !0
    });
  } else _E2 = function _E(t) {
    s(this, _E2, "ArrayBuffer");
    var e = h(t);
    x(this, {
      bytes: b.call(new Array(e), 0),
      byteLength: e
    }), o || (this.byteLength = e);
  }, _S = function S(t, e, n) {
    s(this, _S, "DataView"), s(t, _E2, "DataView");

    var r = _(t).byteLength,
        i = c(e);

    if (i < 0 || i > r) throw k("Wrong offset");
    if (i + (n = void 0 === n ? r - i : f(n)) > r) throw k("Wrong length");
    x(this, {
      buffer: t,
      byteLength: n,
      byteOffset: i
    }), o || (this.buffer = t, this.byteLength = n, this.byteOffset = i);
  }, o && (M(_E2, "byteLength"), M(_S, "buffer"), M(_S, "byteLength"), M(_S, "byteOffset")), u(_S.prototype, {
    getInt8: function getInt8(t) {
      return D(this, 1, t)[0] << 24 >> 24;
    },
    getUint8: function getUint8(t) {
      return D(this, 1, t)[0];
    },
    getInt16: function getInt16(t) {
      var e = D(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
      return (e[1] << 8 | e[0]) << 16 >> 16;
    },
    getUint16: function getUint16(t) {
      var e = D(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
      return e[1] << 8 | e[0];
    },
    getInt32: function getInt32(t) {
      return L(D(this, 4, t, arguments.length > 1 ? arguments[1] : void 0));
    },
    getUint32: function getUint32(t) {
      return L(D(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
    },
    getFloat32: function getFloat32(t) {
      return P(D(this, 4, t, arguments.length > 1 ? arguments[1] : void 0), 23);
    },
    getFloat64: function getFloat64(t) {
      return P(D(this, 8, t, arguments.length > 1 ? arguments[1] : void 0), 52);
    },
    setInt8: function setInt8(t, e) {
      B(this, 1, t, N, e);
    },
    setUint8: function setUint8(t, e) {
      B(this, 1, t, N, e);
    },
    setInt16: function setInt16(t, e) {
      B(this, 2, t, q, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setUint16: function setUint16(t, e) {
      B(this, 2, t, q, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setInt32: function setInt32(t, e) {
      B(this, 4, t, R, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setUint32: function setUint32(t, e) {
      B(this, 4, t, R, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setFloat32: function setFloat32(t, e) {
      B(this, 4, t, C, e, arguments.length > 2 ? arguments[2] : void 0);
    },
    setFloat64: function setFloat64(t, e) {
      B(this, 8, t, I, e, arguments.length > 2 ? arguments[2] : void 0);
    }
  });

  m(_E2, "ArrayBuffer"), m(_S, "DataView"), t.exports = {
    ArrayBuffer: _E2,
    DataView: _S
  };
}, function (t, e, n) {
  var r = n(2),
      o = n(3),
      i = r.document,
      a = o(i) && o(i.createElement);

  t.exports = function (t) {
    return a ? i.createElement(t) : {};
  };
}, function (t, e, n) {
  var r = n(2),
      o = n(15);

  t.exports = function (t, e) {
    try {
      o(r, t, e);
    } catch (n) {
      r[t] = e;
    }

    return e;
  };
}, function (t, e, n) {
  var r = n(88),
      o = Function.toString;
  "function" != typeof r.inspectSource && (r.inspectSource = function (t) {
    return o.call(t);
  }), t.exports = r.inspectSource;
}, function (t, e, n) {
  var r = n(2),
      o = n(86),
      i = r["__core-js_shared__"] || o("__core-js_shared__", {});
  t.exports = i;
}, function (t, e, n) {
  var r = n(25),
      o = n(88);
  (t.exports = function (t, e) {
    return o[t] || (o[t] = void 0 !== e ? e : {});
  })("versions", []).push({
    version: "3.8.3",
    mode: r ? "pure" : "global",
    copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
  });
}, function (t, e, n) {
  var r = n(22),
      o = n(42),
      i = n(92),
      a = n(4);

  t.exports = r("Reflect", "ownKeys") || function (t) {
    var e = o.f(a(t)),
        n = i.f;
    return n ? e.concat(n(t)) : e;
  };
}, function (t, e) {
  t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
}, function (t, e) {
  e.f = Object.getOwnPropertySymbols;
}, function (t, e, n) {
  var r = n(1);
  t.exports = !!Object.getOwnPropertySymbols && !r(function () {
    return !String(Symbol());
  });
}, function (t, e, n) {
  var r = n(5),
      o = n(9),
      i = n(4),
      a = n(57);
  t.exports = r ? Object.defineProperties : function (t, e) {
    i(t);

    for (var n, r = a(e), u = r.length, l = 0; u > l;) {
      o.f(t, n = r[l++], e[n]);
    }

    return t;
  };
}, function (t, e, n) {
  var r = n(1);
  t.exports = !r(function () {
    function t() {}

    return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
  });
}, function (t, e, n) {
  var r = n(6),
      o = n(59),
      i = r("iterator"),
      a = Array.prototype;

  t.exports = function (t) {
    return void 0 !== t && (o.Array === t || a[i] === t);
  };
}, function (t, e, n) {
  var r = {};
  r[n(6)("toStringTag")] = "z", t.exports = "[object z]" === String(r);
}, function (t, e, n) {
  "use strict";

  var r = n(10),
      o = n(36),
      i = n(7);

  t.exports = function (t) {
    for (var e = r(this), n = i(e.length), a = arguments.length, u = o(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, s = void 0 === l ? n : o(l, n); s > u;) {
      e[u++] = t;
    }

    return e;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(100),
      i = n(27),
      a = n(38),
      u = n(29),
      l = n(15),
      s = n(16),
      c = n(6),
      f = n(25),
      h = n(59),
      p = n(128),
      d = p.IteratorPrototype,
      y = p.BUGGY_SAFARI_ITERATORS,
      v = c("iterator"),
      g = function g() {
    return this;
  };

  t.exports = function (t, e, n, c, p, b, m) {
    o(n, e, c);

    var w,
        _,
        x,
        O = function O(t) {
      if (t === p && k) return k;
      if (!y && t in A) return A[t];

      switch (t) {
        case "keys":
        case "values":
        case "entries":
          return function () {
            return new n(this, t);
          };
      }

      return function () {
        return new n(this);
      };
    },
        E = e + " Iterator",
        S = !1,
        A = t.prototype,
        T = A[v] || A["@@iterator"] || p && A[p],
        k = !y && T || O(p),
        j = "Array" == e && A.entries || T;

    if (j && (w = i(j.call(new t())), d !== Object.prototype && w.next && (f || i(w) === d || (a ? a(w, d) : "function" != typeof w[v] && l(w, v, g)), u(w, E, !0, !0), f && (h[E] = g))), "values" == p && T && "values" !== T.name && (S = !0, k = function k() {
      return T.call(this);
    }), f && !m || A[v] === k || l(A, v, k), h[e] = k, p) if (_ = {
      values: O("values"),
      keys: b ? k : O("keys"),
      entries: O("entries")
    }, m) for (x in _) {
      (y || S || !(x in A)) && s(A, x, _[x]);
    } else r({
      target: e,
      proto: !0,
      forced: y || S
    }, _);
    return _;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(128).IteratorPrototype,
      o = n(30),
      i = n(31),
      a = n(29),
      u = n(59),
      l = function l() {
    return this;
  };

  t.exports = function (t, e, n) {
    var s = e + " Iterator";
    return t.prototype = o(r, {
      next: i(1, n)
    }), a(t, s, !1, !0), u[s] = l, t;
  };
}, function (t, e, n) {
  var r = n(66);

  t.exports = function (t) {
    if (r(t)) throw TypeError("The method doesn't accept regular expressions");
    return t;
  };
}, function (t, e, n) {
  var r = n(6)("match");

  t.exports = function (t) {
    var e = /./;

    try {
      "/./"[t](e);
    } catch (n) {
      try {
        return e[r] = !1, "/./"[t](e);
      } catch (t) {}
    }

    return !1;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(75);
  r({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== o
  }, {
    exec: o
  });
}, function (t, e, n) {
  var r = n(7),
      o = n(105),
      i = n(14),
      a = Math.ceil,
      u = function u(t) {
    return function (e, n, u) {
      var l,
          s,
          c = String(i(e)),
          f = c.length,
          h = void 0 === u ? " " : String(u),
          p = r(n);
      return p <= f || "" == h ? c : (l = p - f, (s = o.call(h, a(l / h.length))).length > l && (s = s.slice(0, l)), t ? c + s : s + c);
    };
  };

  t.exports = {
    start: u(!1),
    end: u(!0)
  };
}, function (t, e, n) {
  "use strict";

  var r = n(26),
      o = n(14);

  t.exports = "".repeat || function (t) {
    var e = String(o(this)),
        n = "",
        i = r(t);
    if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");

    for (; i > 0; (i >>>= 1) && (e += e)) {
      1 & i && (n += e);
    }

    return n;
  };
}, function (t, e, n) {
  var r = n(1),
      o = n(79);

  t.exports = function (t) {
    return r(function () {
      return !!o[t]() || "​᠎" != "​᠎"[t]() || o[t].name !== t;
    });
  };
}, function (t, e) {
  t.exports = Math.sign || function (t) {
    return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
  };
}, function (t, e, n) {
  var r,
      o,
      i,
      a = n(2),
      u = n(1),
      l = n(37),
      s = n(118),
      c = n(85),
      f = n(142),
      h = n(46),
      p = a.location,
      d = a.setImmediate,
      y = a.clearImmediate,
      v = a.process,
      g = a.MessageChannel,
      b = a.Dispatch,
      m = 0,
      w = {},
      _ = function _(t) {
    if (w.hasOwnProperty(t)) {
      var e = w[t];
      delete w[t], e();
    }
  },
      x = function x(t) {
    return function () {
      _(t);
    };
  },
      O = function O(t) {
    _(t.data);
  },
      E = function E(t) {
    a.postMessage(t + "", p.protocol + "//" + p.host);
  };

  d && y || (d = function d(t) {
    for (var e = [], n = 1; arguments.length > n;) {
      e.push(arguments[n++]);
    }

    return w[++m] = function () {
      ("function" == typeof t ? t : Function(t)).apply(void 0, e);
    }, r(m), m;
  }, y = function y(t) {
    delete w[t];
  }, h ? r = function r(t) {
    v.nextTick(x(t));
  } : b && b.now ? r = function r(t) {
    b.now(x(t));
  } : g && !f ? (i = (o = new g()).port2, o.port1.onmessage = O, r = l(i.postMessage, i, 1)) : a.addEventListener && "function" == typeof postMessage && !a.importScripts && p && "file:" !== p.protocol && !u(E) ? (r = E, a.addEventListener("message", O, !1)) : r = "onreadystatechange" in c("script") ? function (t) {
    s.appendChild(c("script")).onreadystatechange = function () {
      s.removeChild(this), _(t);
    };
  } : function (t) {
    setTimeout(x(t), 0);
  }), t.exports = {
    set: d,
    clear: y
  };
}, function (t, e) {
  t.exports = function (t) {
    try {
      return {
        error: !1,
        value: t()
      };
    } catch (t) {
      return {
        error: !0,
        value: t
      };
    }
  };
}, function (t, e) {
  t.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
}, function (t, e, n) {
  var r = n(2),
      o = n(1),
      i = n(69),
      a = n(8).NATIVE_ARRAY_BUFFER_VIEWS,
      u = r.ArrayBuffer,
      l = r.Int8Array;
  t.exports = !a || !o(function () {
    l(1);
  }) || !o(function () {
    new l(-1);
  }) || !i(function (t) {
    new l(), new l(null), new l(1.5), new l(t);
  }, !0) || o(function () {
    return 1 !== new l(new u(2), 1, void 0).length;
  });
}, function (t, e) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  t.exports = n;
}, function (t, e, n) {
  var r = n(5),
      o = n(1),
      i = n(85);
  t.exports = !r && !o(function () {
    return 7 != Object.defineProperty(i("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a;
  });
}, function (t, e, n) {
  var r = n(2),
      o = n(87),
      i = r.WeakMap;
  t.exports = "function" == typeof i && /native code/.test(o(i));
}, function (t, e, n) {
  var r = n(11),
      o = n(90),
      i = n(13),
      a = n(9);

  t.exports = function (t, e) {
    for (var n = o(e), u = a.f, l = i.f, s = 0; s < n.length; s++) {
      var c = n[s];
      r(t, c) || u(t, c, l(e, c));
    }
  };
}, function (t, e, n) {
  var r = n(11),
      o = n(21),
      i = n(55).indexOf,
      a = n(53);

  t.exports = function (t, e) {
    var n,
        u = o(t),
        l = 0,
        s = [];

    for (n in u) {
      !r(a, n) && r(u, n) && s.push(n);
    }

    for (; e.length > l;) {
      r(u, n = e[l++]) && (~i(s, n) || s.push(n));
    }

    return s;
  };
}, function (t, e, n) {
  var r = n(93);
  t.exports = r && !Symbol.sham && "symbol" == _typeof(Symbol.iterator);
}, function (t, e, n) {
  var r = n(22);
  t.exports = r("document", "documentElement");
}, function (t, e, n) {
  var r = n(21),
      o = n(42).f,
      i = {}.toString,
      a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  t.exports.f = function (t) {
    return a && "[object Window]" == i.call(t) ? function (t) {
      try {
        return o(t);
      } catch (t) {
        return a.slice();
      }
    }(t) : o(r(t));
  };
}, function (t, e, n) {
  var r = n(6);
  e.f = r;
}, function (t, e, n) {
  var r = n(3);

  t.exports = function (t) {
    if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
    return t;
  };
}, function (t, e, n) {
  var r = n(4);

  t.exports = function (t) {
    var e = t.return;
    if (void 0 !== e) return r(e.call(t)).value;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(37),
      o = n(10),
      i = n(177),
      a = n(96),
      u = n(7),
      l = n(44),
      s = n(60);

  t.exports = function (t) {
    var e,
        n,
        c,
        f,
        h,
        p,
        d = o(t),
        y = "function" == typeof this ? this : Array,
        v = arguments.length,
        g = v > 1 ? arguments[1] : void 0,
        b = void 0 !== g,
        m = s(d),
        w = 0;
    if (b && (g = r(g, v > 2 ? arguments[2] : void 0, 2)), null == m || y == Array && a(m)) for (n = new y(e = u(d.length)); e > w; w++) {
      p = b ? g(d[w], w) : d[w], l(n, w, p);
    } else for (h = (f = m.call(d)).next, n = new y(); !(c = h.call(f)).done; w++) {
      p = b ? i(f, g, [c.value, w], !0) : c.value, l(n, w, p);
    }
    return n.length = w, n;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(10),
      o = n(36),
      i = n(7),
      a = Math.min;

  t.exports = [].copyWithin || function (t, e) {
    var n = r(this),
        u = i(n.length),
        l = o(t, u),
        s = o(e, u),
        c = arguments.length > 2 ? arguments[2] : void 0,
        f = a((void 0 === c ? u : o(c, u)) - s, u - l),
        h = 1;

    for (s < l && l < s + f && (h = -1, s += f - 1, l += f - 1); f-- > 0;) {
      s in n ? n[l] = n[s] : delete n[l], l += h, s += h;
    }

    return n;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(43),
      o = n(7),
      i = n(37),
      a = function a(t, e, n, u, l, s, c, f) {
    for (var h, p = l, d = 0, y = !!c && i(c, f, 3); d < u;) {
      if (d in n) {
        if (h = y ? y(n[d], d, e) : n[d], s > 0 && r(h)) p = a(t, e, h, o(h.length), p, s - 1) - 1;else {
          if (p >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
          t[p] = h;
        }
        p++;
      }

      d++;
    }

    return p;
  };

  t.exports = a;
}, function (t, e, n) {
  "use strict";

  var r = n(12).forEach,
      o = n(33),
      i = n(20),
      a = o("forEach"),
      u = i("forEach");
  t.exports = a && u ? [].forEach : function (t) {
    return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(21),
      o = n(26),
      i = n(7),
      a = n(33),
      u = n(20),
      l = Math.min,
      s = [].lastIndexOf,
      c = !!s && 1 / [1].lastIndexOf(1, -0) < 0,
      f = a("lastIndexOf"),
      h = u("indexOf", {
    ACCESSORS: !0,
    1: 0
  }),
      p = c || !f || !h;
  t.exports = p ? function (t) {
    if (c) return s.apply(this, arguments) || 0;
    var e = r(this),
        n = i(e.length),
        a = n - 1;

    for (arguments.length > 1 && (a = l(a, o(arguments[1]))), a < 0 && (a = n + a); a >= 0; a--) {
      if (a in e && e[a] === t) return a || 0;
    }

    return -1;
  } : s;
}, function (t, e, n) {
  "use strict";

  var r,
      o,
      i,
      a = n(1),
      u = n(27),
      l = n(15),
      s = n(11),
      c = n(6),
      f = n(25),
      h = c("iterator"),
      p = !1;
  [].keys && ("next" in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (r = o) : p = !0);
  var d = null == r || a(function () {
    var t = {};
    return r[h].call(t) !== t;
  });
  d && (r = {}), f && !d || s(r, h) || l(r, h, function () {
    return this;
  }), t.exports = {
    IteratorPrototype: r,
    BUGGY_SAFARI_ITERATORS: p
  };
}, function (t, e, n) {
  "use strict";

  var r = n(18),
      o = n(3),
      i = [].slice,
      a = {},
      u = function u(t, e, n) {
    if (!(e in a)) {
      for (var r = [], o = 0; o < e; o++) {
        r[o] = "a[" + o + "]";
      }

      a[e] = Function("C,a", "return new C(" + r.join(",") + ")");
    }

    return a[e](t, n);
  };

  t.exports = Function.bind || function (t) {
    var e = r(this),
        n = i.call(arguments, 1),
        a = function a() {
      var r = n.concat(i.call(arguments));
      return this instanceof a ? u(e, r.length, r) : e.apply(t, r);
    };

    return o(e.prototype) && (a.prototype = e.prototype), a;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(5),
      o = n(1),
      i = n(57),
      a = n(92),
      u = n(67),
      l = n(10),
      s = n(51),
      c = Object.assign,
      f = Object.defineProperty;
  t.exports = !c || o(function () {
    if (r && 1 !== c({
      b: 1
    }, c(f({}, "a", {
      enumerable: !0,
      get: function get() {
        f(this, "b", {
          value: 3,
          enumerable: !1
        });
      }
    }), {
      b: 2
    })).b) return !0;
    var t = {},
        e = {},
        n = Symbol();
    return t[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function (t) {
      e[t] = t;
    }), 7 != c({}, t)[n] || "abcdefghijklmnopqrst" != i(c({}, e)).join("");
  }) ? function (t, e) {
    for (var n = l(t), o = arguments.length, c = 1, f = a.f, h = u.f; o > c;) {
      for (var p, d = s(arguments[c++]), y = f ? i(d).concat(f(d)) : i(d), v = y.length, g = 0; v > g;) {
        p = y[g++], r && !h.call(d, p) || (n[p] = d[p]);
      }
    }

    return n;
  } : c;
}, function (t, e, n) {
  var r = n(5),
      o = n(57),
      i = n(21),
      a = n(67).f,
      u = function u(t) {
    return function (e) {
      for (var n, u = i(e), l = o(u), s = l.length, c = 0, f = []; s > c;) {
        n = l[c++], r && !a.call(u, n) || f.push(t ? [n, u[n]] : u[n]);
      }

      return f;
    };
  };

  t.exports = {
    entries: u(!0),
    values: u(!1)
  };
}, function (t, e) {
  t.exports = Object.is || function (t, e) {
    return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
  };
}, function (t, e, n) {
  var r = n(64);
  t.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);
}, function (t, e, n) {
  var r = n(10),
      o = Math.floor,
      i = "".replace,
      a = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      u = /\$([$&'`]|\d\d?)/g;

  t.exports = function (t, e, n, l, s, c) {
    var f = n + t.length,
        h = l.length,
        p = u;
    return void 0 !== s && (s = r(s), p = a), i.call(c, p, function (r, i) {
      var a;

      switch (i.charAt(0)) {
        case "$":
          return "$";

        case "&":
          return t;

        case "`":
          return e.slice(0, n);

        case "'":
          return e.slice(f);

        case "<":
          a = s[i.slice(1, -1)];
          break;

        default:
          var u = +i;
          if (0 === u) return r;

          if (u > h) {
            var c = o(u / 10);
            return 0 === c ? r : c <= h ? void 0 === l[c - 1] ? i.charAt(1) : l[c - 1] + i.charAt(1) : r;
          }

          a = l[u - 1];
      }

      return void 0 === a ? "" : a;
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(73).charAt,
      o = n(17),
      i = n(99),
      a = o.set,
      u = o.getterFor("String Iterator");
  i(String, "String", function (t) {
    a(this, {
      type: "String Iterator",
      string: String(t),
      index: 0
    });
  }, function () {
    var t,
        e = u(this),
        n = e.string,
        o = e.index;
    return o >= n.length ? {
      value: void 0,
      done: !0
    } : (t = r(n, o), e.index += t.length, {
      value: t,
      done: !1
    });
  });
}, function (t, e, n) {
  var r = n(2),
      o = n(49).trim,
      i = n(79),
      a = r.parseInt,
      u = /^[+-]?0[Xx]/,
      l = 8 !== a(i + "08") || 22 !== a(i + "0x16");
  t.exports = l ? function (t, e) {
    var n = o(String(t));
    return a(n, e >>> 0 || (u.test(n) ? 16 : 10));
  } : a;
}, function (t, e, n) {
  var r = n(2),
      o = n(49).trim,
      i = n(79),
      a = r.parseFloat,
      u = 1 / a(i + "-0") != -1 / 0;
  t.exports = u ? function (t) {
    var e = o(String(t)),
        n = a(e);
    return 0 === n && "-" == e.charAt(0) ? -0 : n;
  } : a;
}, function (t, e, n) {
  var r = n(3),
      o = Math.floor;

  t.exports = function (t) {
    return !r(t) && isFinite(t) && o(t) === t;
  };
}, function (t, e, n) {
  var r = n(32);

  t.exports = function (t) {
    if ("number" != typeof t && "Number" != r(t)) throw TypeError("Incorrect invocation");
    return +t;
  };
}, function (t, e) {
  var n = Math.log;

  t.exports = Math.log1p || function (t) {
    return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : n(1 + t);
  };
}, function (t, e, n) {
  var r = n(2);
  t.exports = r.Promise;
}, function (t, e, n) {
  var r = n(64);
  t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
}, function (t, e, n) {
  var r,
      o,
      i,
      a,
      u,
      l,
      s,
      c,
      f = n(2),
      h = n(13).f,
      p = n(108).set,
      d = n(142),
      y = n(315),
      v = n(46),
      g = f.MutationObserver || f.WebKitMutationObserver,
      b = f.document,
      m = f.process,
      w = f.Promise,
      _ = h(f, "queueMicrotask"),
      x = _ && _.value;

  x || (r = function r() {
    var t, e;

    for (v && (t = m.domain) && t.exit(); o;) {
      e = o.fn, o = o.next;

      try {
        e();
      } catch (t) {
        throw o ? a() : i = void 0, t;
      }
    }

    i = void 0, t && t.enter();
  }, d || v || y || !g || !b ? w && w.resolve ? (s = w.resolve(void 0), c = s.then, a = function a() {
    c.call(s, r);
  }) : a = v ? function () {
    m.nextTick(r);
  } : function () {
    p.call(f, r);
  } : (u = !0, l = b.createTextNode(""), new g(r).observe(l, {
    characterData: !0
  }), a = function a() {
    l.data = u = !u;
  })), t.exports = x || function (t) {
    var e = {
      fn: t,
      next: void 0
    };
    i && (i.next = e), o || (o = e, a()), i = e;
  };
}, function (t, e, n) {
  var r = n(4),
      o = n(3),
      i = n(82);

  t.exports = function (t, e) {
    if (r(t), o(e) && e.constructor === t) return e;
    var n = i.f(t);
    return (0, n.resolve)(e), n.promise;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(9).f,
      o = n(30),
      i = n(50),
      a = n(37),
      u = n(41),
      l = n(39),
      s = n(99),
      c = n(47),
      f = n(5),
      h = n(45).fastKey,
      p = n(17),
      d = p.set,
      y = p.getterFor;
  t.exports = {
    getConstructor: function getConstructor(t, e, n, s) {
      var c = t(function (t, r) {
        u(t, c, e), d(t, {
          type: e,
          index: o(null),
          first: void 0,
          last: void 0,
          size: 0
        }), f || (t.size = 0), null != r && l(r, t[s], {
          that: t,
          AS_ENTRIES: n
        });
      }),
          p = y(e),
          v = function v(t, e, n) {
        var r,
            o,
            i = p(t),
            a = g(t, e);
        return a ? a.value = n : (i.last = a = {
          index: o = h(e, !0),
          key: e,
          value: n,
          previous: r = i.last,
          next: void 0,
          removed: !1
        }, i.first || (i.first = a), r && (r.next = a), f ? i.size++ : t.size++, "F" !== o && (i.index[o] = a)), t;
      },
          g = function g(t, e) {
        var n,
            r = p(t),
            o = h(e);
        if ("F" !== o) return r.index[o];

        for (n = r.first; n; n = n.next) {
          if (n.key == e) return n;
        }
      };

      return i(c.prototype, {
        clear: function clear() {
          for (var t = p(this), e = t.index, n = t.first; n;) {
            n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete e[n.index], n = n.next;
          }

          t.first = t.last = void 0, f ? t.size = 0 : this.size = 0;
        },
        delete: function _delete(t) {
          var e = p(this),
              n = g(this, t);

          if (n) {
            var r = n.next,
                o = n.previous;
            delete e.index[n.index], n.removed = !0, o && (o.next = r), r && (r.previous = o), e.first == n && (e.first = r), e.last == n && (e.last = o), f ? e.size-- : this.size--;
          }

          return !!n;
        },
        forEach: function forEach(t) {
          for (var e, n = p(this), r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : n.first;) {
            for (r(e.value, e.key, this); e && e.removed;) {
              e = e.previous;
            }
          }
        },
        has: function has(t) {
          return !!g(this, t);
        }
      }), i(c.prototype, n ? {
        get: function get(t) {
          var e = g(this, t);
          return e && e.value;
        },
        set: function set(t, e) {
          return v(this, 0 === t ? 0 : t, e);
        }
      } : {
        add: function add(t) {
          return v(this, t = 0 === t ? 0 : t, t);
        }
      }), f && r(c.prototype, "size", {
        get: function get() {
          return p(this).size;
        }
      }), c;
    },
    setStrong: function setStrong(t, e, n) {
      var r = e + " Iterator",
          o = y(e),
          i = y(r);
      s(t, e, function (t, e) {
        d(this, {
          type: r,
          target: t,
          state: o(t),
          kind: e,
          last: void 0
        });
      }, function () {
        for (var t = i(this), e = t.kind, n = t.last; n && n.removed;) {
          n = n.previous;
        }

        return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? {
          value: n.key,
          done: !1
        } : "values" == e ? {
          value: n.value,
          done: !1
        } : {
          value: [n.key, n.value],
          done: !1
        } : (t.target = void 0, {
          value: void 0,
          done: !0
        });
      }, n ? "entries" : "values", !n, !0), c(e);
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(50),
      o = n(45).getWeakData,
      i = n(4),
      a = n(3),
      u = n(41),
      l = n(39),
      s = n(12),
      c = n(11),
      f = n(17),
      h = f.set,
      p = f.getterFor,
      d = s.find,
      y = s.findIndex,
      v = 0,
      g = function g(t) {
    return t.frozen || (t.frozen = new b());
  },
      b = function b() {
    this.entries = [];
  },
      m = function m(t, e) {
    return d(t.entries, function (t) {
      return t[0] === e;
    });
  };

  b.prototype = {
    get: function get(t) {
      var e = m(this, t);
      if (e) return e[1];
    },
    has: function has(t) {
      return !!m(this, t);
    },
    set: function set(t, e) {
      var n = m(this, t);
      n ? n[1] = e : this.entries.push([t, e]);
    },
    delete: function _delete(t) {
      var e = y(this.entries, function (e) {
        return e[0] === t;
      });
      return ~e && this.entries.splice(e, 1), !!~e;
    }
  }, t.exports = {
    getConstructor: function getConstructor(t, e, n, s) {
      var f = t(function (t, r) {
        u(t, f, e), h(t, {
          type: e,
          id: v++,
          frozen: void 0
        }), null != r && l(r, t[s], {
          that: t,
          AS_ENTRIES: n
        });
      }),
          d = p(e),
          y = function y(t, e, n) {
        var r = d(t),
            a = o(i(e), !0);
        return !0 === a ? g(r).set(e, n) : a[r.id] = n, t;
      };

      return r(f.prototype, {
        delete: function _delete(t) {
          var e = d(this);
          if (!a(t)) return !1;
          var n = o(t);
          return !0 === n ? g(e).delete(t) : n && c(n, e.id) && delete n[e.id];
        },
        has: function has(t) {
          var e = d(this);
          if (!a(t)) return !1;
          var n = o(t);
          return !0 === n ? g(e).has(t) : n && c(n, e.id);
        }
      }), r(f.prototype, n ? {
        get: function get(t) {
          var e = d(this);

          if (a(t)) {
            var n = o(t);
            return !0 === n ? g(e).get(t) : n ? n[e.id] : void 0;
          }
        },
        set: function set(t, e) {
          return y(this, t, e);
        }
      } : {
        add: function add(t) {
          return y(this, t, !0);
        }
      }), f;
    }
  };
}, function (t, e, n) {
  var r = n(26),
      o = n(7);

  t.exports = function (t) {
    if (void 0 === t) return 0;
    var e = r(t),
        n = o(e);
    if (e !== n) throw RangeError("Wrong length or index");
    return n;
  };
}, function (t, e, n) {
  var r = n(330);

  t.exports = function (t, e) {
    var n = r(t);
    if (n % e) throw RangeError("Wrong offset");
    return n;
  };
}, function (t, e, n) {
  var r = n(10),
      o = n(7),
      i = n(60),
      a = n(96),
      u = n(37),
      l = n(8).aTypedArrayConstructor;

  t.exports = function (t) {
    var e,
        n,
        s,
        c,
        f,
        h,
        p = r(t),
        d = arguments.length,
        y = d > 1 ? arguments[1] : void 0,
        v = void 0 !== y,
        g = i(p);
    if (null != g && !a(g)) for (h = (f = g.call(p)).next, p = []; !(c = h.call(f)).done;) {
      p.push(c.value);
    }

    for (v && d > 2 && (y = u(y, arguments[2], 2)), n = o(p.length), s = new (l(this))(n), e = 0; n > e; e++) {
      s[e] = v ? y(p[e], e) : p[e];
    }

    return s;
  };
}, function (t, e) {
  t.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
}, function (t, e, n) {
  var r = n(1),
      o = n(6),
      i = n(25),
      a = o("iterator");
  t.exports = !r(function () {
    var t = new URL("b?a=1&b=2&c=3", "http://a"),
        e = t.searchParams,
        n = "";
    return t.pathname = "c%20d", e.forEach(function (t, r) {
      e.delete("b"), n += r + t;
    }), i && !t.toJSON || !e.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host;
  });
}, function (t, e, n) {
  "use strict";

  n(71);

  var r = n(0),
      o = n(22),
      i = n(151),
      a = n(16),
      u = n(50),
      l = n(29),
      s = n(100),
      c = n(17),
      f = n(41),
      h = n(11),
      p = n(37),
      d = n(61),
      y = n(4),
      v = n(3),
      g = n(30),
      b = n(31),
      m = n(386),
      w = n(60),
      _ = n(6),
      x = o("fetch"),
      O = o("Headers"),
      E = _("iterator"),
      S = c.set,
      A = c.getterFor("URLSearchParams"),
      T = c.getterFor("URLSearchParamsIterator"),
      k = /\+/g,
      j = Array(4),
      P = function P(t) {
    return j[t - 1] || (j[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"));
  },
      N = function N(t) {
    try {
      return decodeURIComponent(t);
    } catch (e) {
      return t;
    }
  },
      q = function q(t) {
    var e = t.replace(k, " "),
        n = 4;

    try {
      return decodeURIComponent(e);
    } catch (t) {
      for (; n;) {
        e = e.replace(P(n--), N);
      }

      return e;
    }
  },
      R = /[!'()~]|%20/g,
      L = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  },
      C = function C(t) {
    return L[t];
  },
      I = function I(t) {
    return encodeURIComponent(t).replace(R, C);
  },
      M = function M(t, e) {
    if (e) for (var n, r, o = e.split("&"), i = 0; i < o.length;) {
      (n = o[i++]).length && (r = n.split("="), t.push({
        key: q(r.shift()),
        value: q(r.join("="))
      }));
    }
  },
      D = function D(t) {
    this.entries.length = 0, M(this.entries, t);
  },
      B = function B(t, e) {
    if (t < e) throw TypeError("Not enough arguments");
  },
      U = s(function (t, e) {
    S(this, {
      type: "URLSearchParamsIterator",
      iterator: m(A(t).entries),
      kind: e
    });
  }, "Iterator", function () {
    var t = T(this),
        e = t.kind,
        n = t.iterator.next(),
        r = n.value;
    return n.done || (n.value = "keys" === e ? r.key : "values" === e ? r.value : [r.key, r.value]), n;
  }),
      F = function F() {
    f(this, F, "URLSearchParams");
    var t,
        e,
        n,
        r,
        o,
        i,
        a,
        u,
        l,
        s = arguments.length > 0 ? arguments[0] : void 0,
        c = this,
        p = [];
    if (S(c, {
      type: "URLSearchParams",
      entries: p,
      updateURL: function updateURL() {},
      updateSearchParams: D
    }), void 0 !== s) if (v(s)) {
      if ("function" == typeof (t = w(s))) for (n = (e = t.call(s)).next; !(r = n.call(e)).done;) {
        if ((a = (i = (o = m(y(r.value))).next).call(o)).done || (u = i.call(o)).done || !i.call(o).done) throw TypeError("Expected sequence with length 2");
        p.push({
          key: a.value + "",
          value: u.value + ""
        });
      } else for (l in s) {
        h(s, l) && p.push({
          key: l,
          value: s[l] + ""
        });
      }
    } else M(p, "string" == typeof s ? "?" === s.charAt(0) ? s.slice(1) : s : s + "");
  },
      J = F.prototype;

  u(J, {
    append: function append(t, e) {
      B(arguments.length, 2);
      var n = A(this);
      n.entries.push({
        key: t + "",
        value: e + ""
      }), n.updateURL();
    },
    delete: function _delete(t) {
      B(arguments.length, 1);

      for (var e = A(this), n = e.entries, r = t + "", o = 0; o < n.length;) {
        n[o].key === r ? n.splice(o, 1) : o++;
      }

      e.updateURL();
    },
    get: function get(t) {
      B(arguments.length, 1);

      for (var e = A(this).entries, n = t + "", r = 0; r < e.length; r++) {
        if (e[r].key === n) return e[r].value;
      }

      return null;
    },
    getAll: function getAll(t) {
      B(arguments.length, 1);

      for (var e = A(this).entries, n = t + "", r = [], o = 0; o < e.length; o++) {
        e[o].key === n && r.push(e[o].value);
      }

      return r;
    },
    has: function has(t) {
      B(arguments.length, 1);

      for (var e = A(this).entries, n = t + "", r = 0; r < e.length;) {
        if (e[r++].key === n) return !0;
      }

      return !1;
    },
    set: function set(t, e) {
      B(arguments.length, 1);

      for (var n, r = A(this), o = r.entries, i = !1, a = t + "", u = e + "", l = 0; l < o.length; l++) {
        (n = o[l]).key === a && (i ? o.splice(l--, 1) : (i = !0, n.value = u));
      }

      i || o.push({
        key: a,
        value: u
      }), r.updateURL();
    },
    sort: function sort() {
      var t,
          e,
          n,
          r = A(this),
          o = r.entries,
          i = o.slice();

      for (o.length = 0, n = 0; n < i.length; n++) {
        for (t = i[n], e = 0; e < n; e++) {
          if (o[e].key > t.key) {
            o.splice(e, 0, t);
            break;
          }
        }

        e === n && o.push(t);
      }

      r.updateURL();
    },
    forEach: function forEach(t) {
      for (var e, n = A(this).entries, r = p(t, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < n.length;) {
        r((e = n[o++]).value, e.key, this);
      }
    },
    keys: function keys() {
      return new U(this, "keys");
    },
    values: function values() {
      return new U(this, "values");
    },
    entries: function entries() {
      return new U(this, "entries");
    }
  }, {
    enumerable: !0
  }), a(J, E, J.entries), a(J, "toString", function () {
    for (var t, e = A(this).entries, n = [], r = 0; r < e.length;) {
      t = e[r++], n.push(I(t.key) + "=" + I(t.value));
    }

    return n.join("&");
  }, {
    enumerable: !0
  }), l(F, "URLSearchParams"), r({
    global: !0,
    forced: !i
  }, {
    URLSearchParams: F
  }), i || "function" != typeof x || "function" != typeof O || r({
    global: !0,
    enumerable: !0,
    forced: !0
  }, {
    fetch: function fetch(t) {
      var e,
          n,
          r,
          o = [t];
      return arguments.length > 1 && (v(e = arguments[1]) && (n = e.body, "URLSearchParams" === d(n) && ((r = e.headers ? new O(e.headers) : new O()).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), e = g(e, {
        body: b(0, String(n)),
        headers: b(0, r)
      }))), o.push(e)), x.apply(this, o);
    }
  }), t.exports = {
    URLSearchParams: F,
    getState: A
  };
}, function (t, e, n) {
  (function (e) {
    /*!
     * Quill Editor v1.3.7
     * https://quilljs.com/
     * Copyright (c) 2014, Jason Chen
     * Copyright (c) 2013, salesforce.com
     */
    var n;
    "undefined" != typeof self && self, n = function n() {
      return function (t) {
        var e = {};

        function n(r) {
          if (e[r]) return e[r].exports;
          var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
          };
          return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }

        return n.m = t, n.c = e, n.d = function (t, e, r) {
          n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r
          });
        }, n.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default;
          } : function () {
            return t;
          };
          return n.d(e, "a", e), e;
        }, n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 109);
      }([function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = n(17),
            o = n(18),
            i = n(19),
            a = n(45),
            u = n(46),
            l = n(47),
            s = n(48),
            c = n(49),
            f = n(12),
            h = n(32),
            p = n(33),
            d = n(31),
            y = n(1),
            v = {
          Scope: y.Scope,
          create: y.create,
          find: y.find,
          query: y.query,
          register: y.register,
          Container: r.default,
          Format: o.default,
          Leaf: i.default,
          Embed: s.default,
          Scroll: a.default,
          Block: l.default,
          Inline: u.default,
          Text: c.default,
          Attributor: {
            Attribute: f.default,
            Class: h.default,
            Style: p.default,
            Store: d.default
          }
        };
        e.default = v;
      }, function (t, e, n) {
        "use strict";

        var r,
            o = this && this.__extends || (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }
        }, function (t, e) {
          function n() {
            this.constructor = t;
          }

          r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        });
        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var i = function (t) {
          function e(e) {
            var n = this;
            return e = "[Parchment] " + e, (n = t.call(this, e) || this).message = e, n.name = n.constructor.name, n;
          }

          return o(e, t), e;
        }(Error);

        e.ParchmentError = i;
        var a,
            u = {},
            l = {},
            s = {},
            c = {};

        function f(t, e) {
          var n;
          if (void 0 === e && (e = a.ANY), "string" == typeof t) n = c[t] || u[t];else if (t instanceof Text || t.nodeType === Node.TEXT_NODE) n = c.text;else if ("number" == typeof t) t & a.LEVEL & a.BLOCK ? n = c.block : t & a.LEVEL & a.INLINE && (n = c.inline);else if (t instanceof HTMLElement) {
            var r = (t.getAttribute("class") || "").split(/\s+/);

            for (var o in r) {
              if (n = l[r[o]]) break;
            }

            n = n || s[t.tagName];
          }
          return null == n ? null : e & a.LEVEL & n.scope && e & a.TYPE & n.scope ? n : null;
        }

        e.DATA_KEY = "__blot", function (t) {
          t[t.TYPE = 3] = "TYPE", t[t.LEVEL = 12] = "LEVEL", t[t.ATTRIBUTE = 13] = "ATTRIBUTE", t[t.BLOT = 14] = "BLOT", t[t.INLINE = 7] = "INLINE", t[t.BLOCK = 11] = "BLOCK", t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT", t[t.INLINE_BLOT = 6] = "INLINE_BLOT", t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t[t.ANY = 15] = "ANY";
        }(a = e.Scope || (e.Scope = {})), e.create = function (t, e) {
          var n = f(t);
          if (null == n) throw new i("Unable to create " + t + " blot");
          var r = n,
              o = t instanceof Node || t.nodeType === Node.TEXT_NODE ? t : r.create(e);
          return new r(o, e);
        }, e.find = function t(n, r) {
          return void 0 === r && (r = !1), null == n ? null : null != n[e.DATA_KEY] ? n[e.DATA_KEY].blot : r ? t(n.parentNode, r) : null;
        }, e.query = f, e.register = function t() {
          for (var e = [], n = 0; n < arguments.length; n++) {
            e[n] = arguments[n];
          }

          if (e.length > 1) return e.map(function (e) {
            return t(e);
          });
          var r = e[0];
          if ("string" != typeof r.blotName && "string" != typeof r.attrName) throw new i("Invalid definition");
          if ("abstract" === r.blotName) throw new i("Cannot register abstract class");
          if (c[r.blotName || r.attrName] = r, "string" == typeof r.keyName) u[r.keyName] = r;else if (null != r.className && (l[r.className] = r), null != r.tagName) {
            Array.isArray(r.tagName) ? r.tagName = r.tagName.map(function (t) {
              return t.toUpperCase();
            }) : r.tagName = r.tagName.toUpperCase();
            var o = Array.isArray(r.tagName) ? r.tagName : [r.tagName];
            o.forEach(function (t) {
              null != s[t] && null != r.className || (s[t] = r);
            });
          }
          return r;
        };
      }, function (t, e, n) {
        var r = n(51),
            o = n(11),
            i = n(3),
            a = n(20),
            u = String.fromCharCode(0),
            l = function l(t) {
          Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = [];
        };

        l.prototype.insert = function (t, e) {
          var n = {};
          return 0 === t.length ? this : (n.insert = t, null != e && "object" == _typeof(e) && Object.keys(e).length > 0 && (n.attributes = e), this.push(n));
        }, l.prototype.delete = function (t) {
          return t <= 0 ? this : this.push({
            delete: t
          });
        }, l.prototype.retain = function (t, e) {
          if (t <= 0) return this;
          var n = {
            retain: t
          };
          return null != e && "object" == _typeof(e) && Object.keys(e).length > 0 && (n.attributes = e), this.push(n);
        }, l.prototype.push = function (t) {
          var e = this.ops.length,
              n = this.ops[e - 1];

          if (t = i(!0, {}, t), "object" == _typeof(n)) {
            if ("number" == typeof t.delete && "number" == typeof n.delete) return this.ops[e - 1] = {
              delete: n.delete + t.delete
            }, this;
            if ("number" == typeof n.delete && null != t.insert && (e -= 1, "object" != _typeof(n = this.ops[e - 1]))) return this.ops.unshift(t), this;

            if (o(t.attributes, n.attributes)) {
              if ("string" == typeof t.insert && "string" == typeof n.insert) return this.ops[e - 1] = {
                insert: n.insert + t.insert
              }, "object" == _typeof(t.attributes) && (this.ops[e - 1].attributes = t.attributes), this;
              if ("number" == typeof t.retain && "number" == typeof n.retain) return this.ops[e - 1] = {
                retain: n.retain + t.retain
              }, "object" == _typeof(t.attributes) && (this.ops[e - 1].attributes = t.attributes), this;
            }
          }

          return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this;
        }, l.prototype.chop = function () {
          var t = this.ops[this.ops.length - 1];
          return t && t.retain && !t.attributes && this.ops.pop(), this;
        }, l.prototype.filter = function (t) {
          return this.ops.filter(t);
        }, l.prototype.forEach = function (t) {
          this.ops.forEach(t);
        }, l.prototype.map = function (t) {
          return this.ops.map(t);
        }, l.prototype.partition = function (t) {
          var e = [],
              n = [];
          return this.forEach(function (r) {
            (t(r) ? e : n).push(r);
          }), [e, n];
        }, l.prototype.reduce = function (t, e) {
          return this.ops.reduce(t, e);
        }, l.prototype.changeLength = function () {
          return this.reduce(function (t, e) {
            return e.insert ? t + a.length(e) : e.delete ? t - e.delete : t;
          }, 0);
        }, l.prototype.length = function () {
          return this.reduce(function (t, e) {
            return t + a.length(e);
          }, 0);
        }, l.prototype.slice = function (t, e) {
          t = t || 0, "number" != typeof e && (e = 1 / 0);

          for (var n = [], r = a.iterator(this.ops), o = 0; o < e && r.hasNext();) {
            var i;
            o < t ? i = r.next(t - o) : (i = r.next(e - o), n.push(i)), o += a.length(i);
          }

          return new l(n);
        }, l.prototype.compose = function (t) {
          var e = a.iterator(this.ops),
              n = a.iterator(t.ops),
              r = [],
              i = n.peek();

          if (null != i && "number" == typeof i.retain && null == i.attributes) {
            for (var u = i.retain; "insert" === e.peekType() && e.peekLength() <= u;) {
              u -= e.peekLength(), r.push(e.next());
            }

            i.retain - u > 0 && n.next(i.retain - u);
          }

          for (var s = new l(r); e.hasNext() || n.hasNext();) {
            if ("insert" === n.peekType()) s.push(n.next());else if ("delete" === e.peekType()) s.push(e.next());else {
              var c = Math.min(e.peekLength(), n.peekLength()),
                  f = e.next(c),
                  h = n.next(c);

              if ("number" == typeof h.retain) {
                var p = {};
                "number" == typeof f.retain ? p.retain = c : p.insert = f.insert;
                var d = a.attributes.compose(f.attributes, h.attributes, "number" == typeof f.retain);

                if (d && (p.attributes = d), s.push(p), !n.hasNext() && o(s.ops[s.ops.length - 1], p)) {
                  var y = new l(e.rest());
                  return s.concat(y).chop();
                }
              } else "number" == typeof h.delete && "number" == typeof f.retain && s.push(h);
            }
          }

          return s.chop();
        }, l.prototype.concat = function (t) {
          var e = new l(this.ops.slice());
          return t.ops.length > 0 && (e.push(t.ops[0]), e.ops = e.ops.concat(t.ops.slice(1))), e;
        }, l.prototype.diff = function (t, e) {
          if (this.ops === t.ops) return new l();
          var n = [this, t].map(function (e) {
            return e.map(function (n) {
              if (null != n.insert) return "string" == typeof n.insert ? n.insert : u;
              throw new Error("diff() called " + (e === t ? "on" : "with") + " non-document");
            }).join("");
          }),
              i = new l(),
              s = r(n[0], n[1], e),
              c = a.iterator(this.ops),
              f = a.iterator(t.ops);
          return s.forEach(function (t) {
            for (var e = t[1].length; e > 0;) {
              var n = 0;

              switch (t[0]) {
                case r.INSERT:
                  n = Math.min(f.peekLength(), e), i.push(f.next(n));
                  break;

                case r.DELETE:
                  n = Math.min(e, c.peekLength()), c.next(n), i.delete(n);
                  break;

                case r.EQUAL:
                  n = Math.min(c.peekLength(), f.peekLength(), e);
                  var u = c.next(n),
                      l = f.next(n);
                  o(u.insert, l.insert) ? i.retain(n, a.attributes.diff(u.attributes, l.attributes)) : i.push(l).delete(n);
              }

              e -= n;
            }
          }), i.chop();
        }, l.prototype.eachLine = function (t, e) {
          e = e || "\n";

          for (var n = a.iterator(this.ops), r = new l(), o = 0; n.hasNext();) {
            if ("insert" !== n.peekType()) return;
            var i = n.peek(),
                u = a.length(i) - n.peekLength(),
                s = "string" == typeof i.insert ? i.insert.indexOf(e, u) - u : -1;
            if (s < 0) r.push(n.next());else if (s > 0) r.push(n.next(s));else {
              if (!1 === t(r, n.next(1).attributes || {}, o)) return;
              o += 1, r = new l();
            }
          }

          r.length() > 0 && t(r, {}, o);
        }, l.prototype.transform = function (t, e) {
          if (e = !!e, "number" == typeof t) return this.transformPosition(t, e);

          for (var n = a.iterator(this.ops), r = a.iterator(t.ops), o = new l(); n.hasNext() || r.hasNext();) {
            if ("insert" !== n.peekType() || !e && "insert" === r.peekType()) {
              if ("insert" === r.peekType()) o.push(r.next());else {
                var i = Math.min(n.peekLength(), r.peekLength()),
                    u = n.next(i),
                    s = r.next(i);
                if (u.delete) continue;
                s.delete ? o.push(s) : o.retain(i, a.attributes.transform(u.attributes, s.attributes, e));
              }
            } else o.retain(a.length(n.next()));
          }

          return o.chop();
        }, l.prototype.transformPosition = function (t, e) {
          e = !!e;

          for (var n = a.iterator(this.ops), r = 0; n.hasNext() && r <= t;) {
            var o = n.peekLength(),
                i = n.peekType();
            n.next(), "delete" !== i ? ("insert" === i && (r < t || !e) && (t += o), r += o) : t -= Math.min(o, t - r);
          }

          return t;
        }, t.exports = l;
      }, function (t, e) {
        "use strict";

        var n = Object.prototype.hasOwnProperty,
            r = Object.prototype.toString,
            o = Object.defineProperty,
            i = Object.getOwnPropertyDescriptor,
            a = function a(t) {
          return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === r.call(t);
        },
            u = function u(t) {
          if (!t || "[object Object]" !== r.call(t)) return !1;
          var e,
              o = n.call(t, "constructor"),
              i = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
          if (t.constructor && !o && !i) return !1;

          for (e in t) {
            ;
          }

          return void 0 === e || n.call(t, e);
        },
            l = function l(t, e) {
          o && "__proto__" === e.name ? o(t, e.name, {
            enumerable: !0,
            configurable: !0,
            value: e.newValue,
            writable: !0
          }) : t[e.name] = e.newValue;
        },
            s = function s(t, e) {
          if ("__proto__" === e) {
            if (!n.call(t, e)) return;
            if (i) return i(t, e).value;
          }

          return t[e];
        };

        t.exports = function t() {
          var e,
              n,
              r,
              o,
              i,
              c,
              f = arguments[0],
              h = 1,
              p = arguments.length,
              d = !1;

          for ("boolean" == typeof f && (d = f, f = arguments[1] || {}, h = 2), (null == f || "object" != _typeof(f) && "function" != typeof f) && (f = {}); h < p; ++h) {
            if (null != (e = arguments[h])) for (n in e) {
              r = s(f, n), f !== (o = s(e, n)) && (d && o && (u(o) || (i = a(o))) ? (i ? (i = !1, c = r && a(r) ? r : []) : c = r && u(r) ? r : {}, l(f, {
                name: n,
                newValue: t(d, c, o)
              })) : void 0 !== o && l(f, {
                name: n,
                newValue: o
              }));
            }
          }

          return f;
        };
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = e.BlockEmbed = e.bubbleFormats = void 0;

        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            i = f(n(3)),
            a = f(n(2)),
            u = f(n(0)),
            l = f(n(16)),
            s = f(n(6)),
            c = f(n(7));

        function f(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function h(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function p(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        function d(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        var y = function (t) {
          function e() {
            return h(this, e), p(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return d(e, t), r(e, [{
            key: "attach",
            value: function value() {
              o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attach", this).call(this), this.attributes = new u.default.Attributor.Store(this.domNode);
            }
          }, {
            key: "delta",
            value: function value() {
              return new a.default().insert(this.value(), (0, i.default)(this.formats(), this.attributes.values()));
            }
          }, {
            key: "format",
            value: function value(t, e) {
              var n = u.default.query(t, u.default.Scope.BLOCK_ATTRIBUTE);
              null != n && this.attributes.attribute(n, e);
            }
          }, {
            key: "formatAt",
            value: function value(t, e, n, r) {
              this.format(n, r);
            }
          }, {
            key: "insertAt",
            value: function value(t, n, r) {
              if ("string" == typeof n && n.endsWith("\n")) {
                var i = u.default.create(v.blotName);
                this.parent.insertBefore(i, 0 === t ? this : this.next), i.insertAt(0, n.slice(0, -1));
              } else o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
            }
          }]), e;
        }(u.default.Embed);

        y.scope = u.default.Scope.BLOCK_BLOT;

        var v = function (t) {
          function e(t) {
            h(this, e);
            var n = p(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return n.cache = {}, n;
          }

          return d(e, t), r(e, [{
            key: "delta",
            value: function value() {
              return null == this.cache.delta && (this.cache.delta = this.descendants(u.default.Leaf).reduce(function (t, e) {
                return 0 === e.length() ? t : t.insert(e.value(), g(e));
              }, new a.default()).insert("\n", g(this))), this.cache.delta;
            }
          }, {
            key: "deleteAt",
            value: function value(t, n) {
              o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), this.cache = {};
            }
          }, {
            key: "formatAt",
            value: function value(t, n, r, i) {
              n <= 0 || (u.default.query(r, u.default.Scope.BLOCK) ? t + n === this.length() && this.format(r, i) : o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, Math.min(n, this.length() - t - 1), r, i), this.cache = {});
            }
          }, {
            key: "insertAt",
            value: function value(t, n, r) {
              if (null != r) return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);

              if (0 !== n.length) {
                var i = n.split("\n"),
                    a = i.shift();
                a.length > 0 && (t < this.length() - 1 || null == this.children.tail ? o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, Math.min(t, this.length() - 1), a) : this.children.tail.insertAt(this.children.tail.length(), a), this.cache = {});
                var u = this;
                i.reduce(function (t, e) {
                  return (u = u.split(t, !0)).insertAt(0, e), e.length;
                }, t + a.length);
              }
            }
          }, {
            key: "insertBefore",
            value: function value(t, n) {
              var r = this.children.head;
              o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n), r instanceof l.default && r.remove(), this.cache = {};
            }
          }, {
            key: "length",
            value: function value() {
              return null == this.cache.length && (this.cache.length = o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "length", this).call(this) + 1), this.cache.length;
            }
          }, {
            key: "moveChildren",
            value: function value(t, n) {
              o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveChildren", this).call(this, t, n), this.cache = {};
            }
          }, {
            key: "optimize",
            value: function value(t) {
              o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.cache = {};
            }
          }, {
            key: "path",
            value: function value(t) {
              return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t, !0);
            }
          }, {
            key: "removeChild",
            value: function value(t) {
              o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeChild", this).call(this, t), this.cache = {};
            }
          }, {
            key: "split",
            value: function value(t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

              if (n && (0 === t || t >= this.length() - 1)) {
                var r = this.clone();
                return 0 === t ? (this.parent.insertBefore(r, this), this) : (this.parent.insertBefore(r, this.next), r);
              }

              var i = o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "split", this).call(this, t, n);
              return this.cache = {}, i;
            }
          }]), e;
        }(u.default.Block);

        function g(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return null == t ? e : ("function" == typeof t.formats && (e = (0, i.default)(e, t.formats())), null == t.parent || "scroll" == t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : g(t.parent, e));
        }

        v.blotName = "block", v.tagName = "P", v.defaultChild = "break", v.allowedChildren = [s.default, u.default.Embed, c.default], e.bubbleFormats = g, e.BlockEmbed = y, e.default = v;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = e.overload = e.expandConfig = void 0;

        var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        },
            o = function o(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function (t, e) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;

            try {
              for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
                ;
              }
            } catch (t) {
              o = !0, i = t;
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw i;
              }
            }

            return n;
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
            i = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }();

        n(50);
        var a = v(n(2)),
            u = v(n(14)),
            l = v(n(8)),
            s = v(n(9)),
            c = v(n(0)),
            f = n(15),
            h = v(f),
            p = v(n(3)),
            d = v(n(10)),
            y = v(n(34));

        function v(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function g(t, e, n) {
          return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n, t;
        }

        function b(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        var m = (0, d.default)("quill"),
            w = function () {
          function t(e) {
            var n = this,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (b(this, t), this.options = _(e, r), this.container = this.options.container, null == this.container) return m.error("Invalid Quill container", e);
            this.options.debug && t.debug(this.options.debug);
            var o = this.container.innerHTML.trim();
            this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new l.default(), this.scroll = c.default.create(this.root, {
              emitter: this.emitter,
              whitelist: this.options.formats
            }), this.editor = new u.default(this.scroll), this.selection = new h.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(l.default.events.EDITOR_CHANGE, function (t) {
              t === l.default.events.TEXT_CHANGE && n.root.classList.toggle("ql-blank", n.editor.isBlank());
            }), this.emitter.on(l.default.events.SCROLL_UPDATE, function (t, e) {
              var r = n.selection.lastRange,
                  o = r && 0 === r.length ? r.index : void 0;
              x.call(n, function () {
                return n.editor.update(null, e, o);
              }, t);
            });
            var i = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + o + "<p><br></p></div>");
            this.setContents(i), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
          }

          return i(t, null, [{
            key: "debug",
            value: function value(t) {
              !0 === t && (t = "log"), d.default.level(t);
            }
          }, {
            key: "find",
            value: function value(t) {
              return t.__quill || c.default.find(t);
            }
          }, {
            key: "import",
            value: function value(t) {
              return null == this.imports[t] && m.error("Cannot import " + t + ". Are you sure it was registered?"), this.imports[t];
            }
          }, {
            key: "register",
            value: function value(t, e) {
              var n = this,
                  r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];

              if ("string" != typeof t) {
                var o = t.attrName || t.blotName;
                "string" == typeof o ? this.register("formats/" + o, t, e) : Object.keys(t).forEach(function (r) {
                  n.register(r, t[r], e);
                });
              } else null == this.imports[t] || r || m.warn("Overwriting " + t + " with", e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName ? c.default.register(e) : t.startsWith("modules") && "function" == typeof e.register && e.register();
            }
          }]), i(t, [{
            key: "addContainer",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;

              if ("string" == typeof t) {
                var n = t;
                (t = document.createElement("div")).classList.add(n);
              }

              return this.container.insertBefore(t, e), t;
            }
          }, {
            key: "blur",
            value: function value() {
              this.selection.setRange(null);
            }
          }, {
            key: "deleteText",
            value: function value(t, e, n) {
              var r = this,
                  i = O(t, e, n),
                  a = o(i, 4);
              return t = a[0], e = a[1], n = a[3], x.call(this, function () {
                return r.editor.deleteText(t, e);
              }, n, t, -1 * e);
            }
          }, {
            key: "disable",
            value: function value() {
              this.enable(!1);
            }
          }, {
            key: "enable",
            value: function value() {
              var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t);
            }
          }, {
            key: "focus",
            value: function value() {
              var t = this.scrollingContainer.scrollTop;
              this.selection.focus(), this.scrollingContainer.scrollTop = t, this.scrollIntoView();
            }
          }, {
            key: "format",
            value: function value(t, e) {
              var n = this,
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default.sources.API;
              return x.call(this, function () {
                var r = n.getSelection(!0),
                    o = new a.default();
                if (null == r) return o;
                if (c.default.query(t, c.default.Scope.BLOCK)) o = n.editor.formatLine(r.index, r.length, g({}, t, e));else {
                  if (0 === r.length) return n.selection.format(t, e), o;
                  o = n.editor.formatText(r.index, r.length, g({}, t, e));
                }
                return n.setSelection(r, l.default.sources.SILENT), o;
              }, r);
            }
          }, {
            key: "formatLine",
            value: function value(t, e, n, r, i) {
              var a,
                  u = this,
                  l = O(t, e, n, r, i),
                  s = o(l, 4);
              return t = s[0], e = s[1], a = s[2], i = s[3], x.call(this, function () {
                return u.editor.formatLine(t, e, a);
              }, i, t, 0);
            }
          }, {
            key: "formatText",
            value: function value(t, e, n, r, i) {
              var a,
                  u = this,
                  l = O(t, e, n, r, i),
                  s = o(l, 4);
              return t = s[0], e = s[1], a = s[2], i = s[3], x.call(this, function () {
                return u.editor.formatText(t, e, a);
              }, i, t, 0);
            }
          }, {
            key: "getBounds",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  n = void 0;
              n = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length);
              var r = this.container.getBoundingClientRect();
              return {
                bottom: n.bottom - r.top,
                height: n.height,
                left: n.left - r.left,
                right: n.right - r.left,
                top: n.top - r.top,
                width: n.width
              };
            }
          }, {
            key: "getContents",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                  n = O(t, e),
                  r = o(n, 2);
              return t = r[0], e = r[1], this.editor.getContents(t, e);
            }
          }, {
            key: "getFormat",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0),
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length);
            }
          }, {
            key: "getIndex",
            value: function value(t) {
              return t.offset(this.scroll);
            }
          }, {
            key: "getLength",
            value: function value() {
              return this.scroll.length();
            }
          }, {
            key: "getLeaf",
            value: function value(t) {
              return this.scroll.leaf(t);
            }
          }, {
            key: "getLine",
            value: function value(t) {
              return this.scroll.line(t);
            }
          }, {
            key: "getLines",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
              return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e);
            }
          }, {
            key: "getModule",
            value: function value(t) {
              return this.theme.modules[t];
            }
          }, {
            key: "getSelection",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return t && this.focus(), this.update(), this.selection.getRange()[0];
            }
          }, {
            key: "getText",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                  n = O(t, e),
                  r = o(n, 2);
              return t = r[0], e = r[1], this.editor.getText(t, e);
            }
          }, {
            key: "hasFocus",
            value: function value() {
              return this.selection.hasFocus();
            }
          }, {
            key: "insertEmbed",
            value: function value(e, n, r) {
              var o = this,
                  i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.sources.API;
              return x.call(this, function () {
                return o.editor.insertEmbed(e, n, r);
              }, i, e);
            }
          }, {
            key: "insertText",
            value: function value(t, e, n, r, i) {
              var a,
                  u = this,
                  l = O(t, 0, n, r, i),
                  s = o(l, 4);
              return t = s[0], a = s[2], i = s[3], x.call(this, function () {
                return u.editor.insertText(t, e, a);
              }, i, t, e.length);
            }
          }, {
            key: "isEnabled",
            value: function value() {
              return !this.container.classList.contains("ql-disabled");
            }
          }, {
            key: "off",
            value: function value() {
              return this.emitter.off.apply(this.emitter, arguments);
            }
          }, {
            key: "on",
            value: function value() {
              return this.emitter.on.apply(this.emitter, arguments);
            }
          }, {
            key: "once",
            value: function value() {
              return this.emitter.once.apply(this.emitter, arguments);
            }
          }, {
            key: "pasteHTML",
            value: function value(t, e, n) {
              this.clipboard.dangerouslyPasteHTML(t, e, n);
            }
          }, {
            key: "removeFormat",
            value: function value(t, e, n) {
              var r = this,
                  i = O(t, e, n),
                  a = o(i, 4);
              return t = a[0], e = a[1], n = a[3], x.call(this, function () {
                return r.editor.removeFormat(t, e);
              }, n, t);
            }
          }, {
            key: "scrollIntoView",
            value: function value() {
              this.selection.scrollIntoView(this.scrollingContainer);
            }
          }, {
            key: "setContents",
            value: function value(t) {
              var e = this,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default.sources.API;
              return x.call(this, function () {
                t = new a.default(t);
                var n = e.getLength(),
                    r = e.editor.deleteText(0, n),
                    o = e.editor.applyDelta(t),
                    i = o.ops[o.ops.length - 1];
                return null != i && "string" == typeof i.insert && "\n" === i.insert[i.insert.length - 1] && (e.editor.deleteText(e.getLength() - 1, 1), o.delete(1)), r.compose(o);
              }, n);
            }
          }, {
            key: "setSelection",
            value: function value(e, n, r) {
              if (null == e) this.selection.setRange(null, n || t.sources.API);else {
                var i = O(e, n, r),
                    a = o(i, 4);
                e = a[0], n = a[1], r = a[3], this.selection.setRange(new f.Range(e, n), r), r !== l.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
              }
            }
          }, {
            key: "setText",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default.sources.API,
                  n = new a.default().insert(t);
              return this.setContents(n, e);
            }
          }, {
            key: "update",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.default.sources.USER,
                  e = this.scroll.update(t);
              return this.selection.update(t), e;
            }
          }, {
            key: "updateContents",
            value: function value(t) {
              var e = this,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default.sources.API;
              return x.call(this, function () {
                return t = new a.default(t), e.editor.applyDelta(t, n);
              }, n, !0);
            }
          }]), t;
        }();

        function _(t, e) {
          if ((e = (0, p.default)(!0, {
            container: t,
            modules: {
              clipboard: !0,
              keyboard: !0,
              history: !0
            }
          }, e)).theme && e.theme !== w.DEFAULTS.theme) {
            if (e.theme = w.import("themes/" + e.theme), null == e.theme) throw new Error("Invalid theme " + e.theme + ". Did you register it?");
          } else e.theme = y.default;

          var n = (0, p.default)(!0, {}, e.theme.DEFAULTS);
          [n, e].forEach(function (t) {
            t.modules = t.modules || {}, Object.keys(t.modules).forEach(function (e) {
              !0 === t.modules[e] && (t.modules[e] = {});
            });
          });
          var r = Object.keys(n.modules).concat(Object.keys(e.modules)).reduce(function (t, e) {
            var n = w.import("modules/" + e);
            return null == n ? m.error("Cannot load " + e + " module. Are you sure you registered it?") : t[e] = n.DEFAULTS || {}, t;
          }, {});
          return null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {
            container: e.modules.toolbar
          }), e = (0, p.default)(!0, {}, w.DEFAULTS, {
            modules: r
          }, n, e), ["bounds", "container", "scrollingContainer"].forEach(function (t) {
            "string" == typeof e[t] && (e[t] = document.querySelector(e[t]));
          }), e.modules = Object.keys(e.modules).reduce(function (t, n) {
            return e.modules[n] && (t[n] = e.modules[n]), t;
          }, {}), e;
        }

        function x(t, e, n, r) {
          if (this.options.strict && !this.isEnabled() && e === l.default.sources.USER) return new a.default();
          var o = null == n ? null : this.getSelection(),
              i = this.editor.delta,
              u = t();

          if (null != o && (!0 === n && (n = o.index), null == r ? o = E(o, u, e) : 0 !== r && (o = E(o, n, r, e)), this.setSelection(o, l.default.sources.SILENT)), u.length() > 0) {
            var s,
                c,
                f = [l.default.events.TEXT_CHANGE, u, i, e];
            (s = this.emitter).emit.apply(s, [l.default.events.EDITOR_CHANGE].concat(f)), e !== l.default.sources.SILENT && (c = this.emitter).emit.apply(c, f);
          }

          return u;
        }

        function O(t, e, n, o, i) {
          var a = {};
          return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (i = o, o = n, n = e, e = t.length, t = t.index) : (e = t.length, t = t.index) : "number" != typeof e && (i = o, o = n, n = e, e = 0), "object" === (void 0 === n ? "undefined" : r(n)) ? (a = n, i = o) : "string" == typeof n && (null != o ? a[n] = o : i = n), [t, e, a, i = i || l.default.sources.API];
        }

        function E(t, e, n, r) {
          if (null == t) return null;
          var i = void 0,
              u = void 0;

          if (e instanceof a.default) {
            var s = [t.index, t.index + t.length].map(function (t) {
              return e.transformPosition(t, r !== l.default.sources.USER);
            }),
                c = o(s, 2);
            i = c[0], u = c[1];
          } else {
            var h = [t.index, t.index + t.length].map(function (t) {
              return t < e || t === e && r === l.default.sources.USER ? t : n >= 0 ? t + n : Math.max(e, t + n);
            }),
                p = o(h, 2);
            i = p[0], u = p[1];
          }

          return new f.Range(i, u - i);
        }

        w.DEFAULTS = {
          bounds: null,
          formats: null,
          modules: {},
          placeholder: "",
          readOnly: !1,
          scrollingContainer: null,
          strict: !0,
          theme: "default"
        }, w.events = l.default.events, w.sources = l.default.sources, w.version = "1.3.7", w.imports = {
          delta: a.default,
          parchment: c.default,
          "core/module": s.default,
          "core/theme": y.default
        }, e.expandConfig = _, e.overload = O, e.default = w;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            i = u(n(7)),
            a = u(n(0));

        function u(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function l(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function s(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var c = function (t) {
          function e() {
            return l(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), r(e, [{
            key: "formatAt",
            value: function value(t, n, r, i) {
              if (e.compare(this.statics.blotName, r) < 0 && a.default.query(r, a.default.Scope.BLOT)) {
                var u = this.isolate(t, n);
                i && u.wrap(r, i);
              } else o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, i);
            }
          }, {
            key: "optimize",
            value: function value(t) {
              if (o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.parent instanceof e && e.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                var n = this.parent.isolate(this.offset(), this.length());
                this.moveChildren(n), n.wrap(this);
              }
            }
          }], [{
            key: "compare",
            value: function value(t, n) {
              var r = e.order.indexOf(t),
                  o = e.order.indexOf(n);
              return r >= 0 || o >= 0 ? r - o : t === n ? 0 : t < n ? -1 : 1;
            }
          }]), e;
        }(a.default.Inline);

        c.allowedChildren = [c, a.default.Embed, i.default], c.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], e.default = c;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r,
            o = n(0);

        function i(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function a(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var u = function (t) {
          function e() {
            return i(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), e;
        }(((r = o) && r.__esModule ? r : {
          default: r
        }).default.Text);

        e.default = u;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            i = a(n(54));

        function a(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        var u = (0, a(n(10)).default)("quill:events");
        ["selectionchange", "mousedown", "mouseup", "click"].forEach(function (t) {
          document.addEventListener(t, function () {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
              e[n] = arguments[n];
            }

            [].slice.call(document.querySelectorAll(".ql-container")).forEach(function (t) {
              var n;
              t.__quill && t.__quill.emitter && (n = t.__quill.emitter).handleDOM.apply(n, e);
            });
          });
        });

        var l = function (t) {
          function e() {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);

            var t = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));

            return t.listeners = {}, t.on("error", u.error), t;
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), r(e, [{
            key: "emit",
            value: function value() {
              u.log.apply(u, arguments), o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).apply(this, arguments);
            }
          }, {
            key: "handleDOM",
            value: function value(t) {
              for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {
                n[r - 1] = arguments[r];
              }

              (this.listeners[t.type] || []).forEach(function (e) {
                var r = e.node,
                    o = e.handler;
                (t.target === r || r.contains(t.target)) && o.apply(void 0, [t].concat(n));
              });
            }
          }, {
            key: "listenDOM",
            value: function value(t, e, n) {
              this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({
                node: e,
                handler: n
              });
            }
          }]), e;
        }(i.default);

        l.events = {
          EDITOR_CHANGE: "editor-change",
          SCROLL_BEFORE_UPDATE: "scroll-before-update",
          SCROLL_OPTIMIZE: "scroll-optimize",
          SCROLL_UPDATE: "scroll-update",
          SELECTION_CHANGE: "selection-change",
          TEXT_CHANGE: "text-change"
        }, l.sources = {
          API: "api",
          SILENT: "silent",
          USER: "user"
        }, e.default = l;
      }, function (t, e, n) {
        "use strict";

        function r(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var o = function t(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          r(this, t), this.quill = e, this.options = n;
        };

        o.DEFAULTS = {}, e.default = o;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = ["error", "warn", "log", "info"],
            o = "warn";

        function i(t) {
          if (r.indexOf(t) <= r.indexOf(o)) {
            for (var e, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) {
              i[a - 1] = arguments[a];
            }

            (e = console)[t].apply(e, i);
          }
        }

        function a(t) {
          return r.reduce(function (e, n) {
            return e[n] = i.bind(console, n, t), e;
          }, {});
        }

        i.level = a.level = function (t) {
          o = t;
        }, e.default = a;
      }, function (t, e, n) {
        var r = Array.prototype.slice,
            o = n(52),
            i = n(53),
            a = t.exports = function (t, e, n) {
          return n || (n = {}), t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != _typeof(t) && "object" != _typeof(e) ? n.strict ? t === e : t == e : function (t, e, n) {
            var s, c;
            if (u(t) || u(e)) return !1;
            if (t.prototype !== e.prototype) return !1;
            if (i(t)) return !!i(e) && (t = r.call(t), e = r.call(e), a(t, e, n));

            if (l(t)) {
              if (!l(e)) return !1;
              if (t.length !== e.length) return !1;

              for (s = 0; s < t.length; s++) {
                if (t[s] !== e[s]) return !1;
              }

              return !0;
            }

            try {
              var f = o(t),
                  h = o(e);
            } catch (t) {
              return !1;
            }

            if (f.length != h.length) return !1;

            for (f.sort(), h.sort(), s = f.length - 1; s >= 0; s--) {
              if (f[s] != h[s]) return !1;
            }

            for (s = f.length - 1; s >= 0; s--) {
              if (c = f[s], !a(t[c], e[c], n)) return !1;
            }

            return _typeof(t) == _typeof(e);
          }(t, e, n));
        };

        function u(t) {
          return null == t;
        }

        function l(t) {
          return !(!t || "object" != _typeof(t) || "number" != typeof t.length || "function" != typeof t.copy || "function" != typeof t.slice || t.length > 0 && "number" != typeof t[0]);
        }
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = n(1),
            o = function () {
          function t(t, e, n) {
            void 0 === n && (n = {}), this.attrName = t, this.keyName = e;
            var o = r.Scope.TYPE & r.Scope.ATTRIBUTE;
            null != n.scope ? this.scope = n.scope & r.Scope.LEVEL | o : this.scope = r.Scope.ATTRIBUTE, null != n.whitelist && (this.whitelist = n.whitelist);
          }

          return t.keys = function (t) {
            return [].map.call(t.attributes, function (t) {
              return t.name;
            });
          }, t.prototype.add = function (t, e) {
            return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0);
          }, t.prototype.canAdd = function (t, e) {
            return null != r.query(t, r.Scope.BLOT & (this.scope | r.Scope.TYPE)) && (null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1));
          }, t.prototype.remove = function (t) {
            t.removeAttribute(this.keyName);
          }, t.prototype.value = function (t) {
            var e = t.getAttribute(this.keyName);
            return this.canAdd(t, e) && e ? e : "";
          }, t;
        }();

        e.default = o;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = e.Code = void 0;

        var r = function r(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function (t, e) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;

            try {
              for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
                ;
              }
            } catch (t) {
              o = !0, i = t;
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw i;
              }
            }

            return n;
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            a = f(n(2)),
            u = f(n(0)),
            l = f(n(4)),
            s = f(n(6)),
            c = f(n(7));

        function f(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function h(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function p(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        function d(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        var y = function (t) {
          function e() {
            return h(this, e), p(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return d(e, t), e;
        }(s.default);

        y.blotName = "code", y.tagName = "CODE";

        var v = function (t) {
          function e() {
            return h(this, e), p(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return d(e, t), o(e, [{
            key: "delta",
            value: function value() {
              var t = this,
                  e = this.domNode.textContent;
              return e.endsWith("\n") && (e = e.slice(0, -1)), e.split("\n").reduce(function (e, n) {
                return e.insert(n).insert("\n", t.formats());
              }, new a.default());
            }
          }, {
            key: "format",
            value: function value(t, n) {
              if (t !== this.statics.blotName || !n) {
                var o = this.descendant(c.default, this.length() - 1),
                    a = r(o, 1)[0];
                null != a && a.deleteAt(a.length() - 1, 1), i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
              }
            }
          }, {
            key: "formatAt",
            value: function value(t, n, r, o) {
              if (0 !== n && null != u.default.query(r, u.default.Scope.BLOCK) && (r !== this.statics.blotName || o !== this.statics.formats(this.domNode))) {
                var i = this.newlineIndex(t);

                if (!(i < 0 || i >= t + n)) {
                  var a = this.newlineIndex(t, !0) + 1,
                      l = i - a + 1,
                      s = this.isolate(a, l),
                      c = s.next;
                  s.format(r, o), c instanceof e && c.formatAt(0, t - a + n - l, r, o);
                }
              }
            }
          }, {
            key: "insertAt",
            value: function value(t, e, n) {
              if (null == n) {
                var o = this.descendant(c.default, t),
                    i = r(o, 2),
                    a = i[0],
                    u = i[1];
                a.insertAt(u, e);
              }
            }
          }, {
            key: "length",
            value: function value() {
              var t = this.domNode.textContent.length;
              return this.domNode.textContent.endsWith("\n") ? t : t + 1;
            }
          }, {
            key: "newlineIndex",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (e) return this.domNode.textContent.slice(0, t).lastIndexOf("\n");
              var n = this.domNode.textContent.slice(t).indexOf("\n");
              return n > -1 ? t + n : -1;
            }
          }, {
            key: "optimize",
            value: function value(t) {
              this.domNode.textContent.endsWith("\n") || this.appendChild(u.default.create("text", "\n")), i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
              var n = this.next;
              null != n && n.prev === this && n.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === n.statics.formats(n.domNode) && (n.optimize(t), n.moveChildren(this), n.remove());
            }
          }, {
            key: "replace",
            value: function value(t) {
              i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function (t) {
                var e = u.default.find(t);
                null == e ? t.parentNode.removeChild(t) : e instanceof u.default.Embed ? e.remove() : e.unwrap();
              });
            }
          }], [{
            key: "create",
            value: function value(t) {
              var n = i(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
              return n.setAttribute("spellcheck", !1), n;
            }
          }, {
            key: "formats",
            value: function value() {
              return !0;
            }
          }]), e;
        }(l.default);

        v.blotName = "code-block", v.tagName = "PRE", v.TAB = "  ", e.Code = y, e.default = v;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        },
            o = function o(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function (t, e) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;

            try {
              for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
                ;
              }
            } catch (t) {
              o = !0, i = t;
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw i;
              }
            }

            return n;
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
            i = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            a = g(n(2)),
            u = g(n(20)),
            l = g(n(0)),
            s = g(n(13)),
            c = g(n(24)),
            f = n(4),
            h = g(f),
            p = g(n(16)),
            d = g(n(21)),
            y = g(n(11)),
            v = g(n(3));

        function g(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        var b = /^[ -~]*$/,
            m = function () {
          function t(e) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.scroll = e, this.delta = this.getDelta();
          }

          return i(t, [{
            key: "applyDelta",
            value: function value(t) {
              var e = this,
                  n = !1;
              this.scroll.update();
              var i = this.scroll.length();
              return this.scroll.batchStart(), (t = function (t) {
                return t.reduce(function (t, e) {
                  if (1 === e.insert) {
                    var n = (0, d.default)(e.attributes);
                    return delete n.image, t.insert({
                      image: e.attributes.image
                    }, n);
                  }

                  if (null == e.attributes || !0 !== e.attributes.list && !0 !== e.attributes.bullet || ((e = (0, d.default)(e)).attributes.list ? e.attributes.list = "ordered" : (e.attributes.list = "bullet", delete e.attributes.bullet)), "string" == typeof e.insert) {
                    var r = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                    return t.insert(r, e.attributes);
                  }

                  return t.push(e);
                }, new a.default());
              }(t)).reduce(function (t, a) {
                var s = a.retain || a.delete || a.insert.length || 1,
                    c = a.attributes || {};

                if (null != a.insert) {
                  if ("string" == typeof a.insert) {
                    var p = a.insert;
                    p.endsWith("\n") && n && (n = !1, p = p.slice(0, -1)), t >= i && !p.endsWith("\n") && (n = !0), e.scroll.insertAt(t, p);
                    var d = e.scroll.line(t),
                        y = o(d, 2),
                        g = y[0],
                        b = y[1],
                        m = (0, v.default)({}, (0, f.bubbleFormats)(g));

                    if (g instanceof h.default) {
                      var w = g.descendant(l.default.Leaf, b),
                          _ = o(w, 1)[0];
                      m = (0, v.default)(m, (0, f.bubbleFormats)(_));
                    }

                    c = u.default.attributes.diff(m, c) || {};
                  } else if ("object" === r(a.insert)) {
                    var x = Object.keys(a.insert)[0];
                    if (null == x) return t;
                    e.scroll.insertAt(t, x, a.insert[x]);
                  }

                  i += s;
                }

                return Object.keys(c).forEach(function (n) {
                  e.scroll.formatAt(t, s, n, c[n]);
                }), t + s;
              }, 0), t.reduce(function (t, n) {
                return "number" == typeof n.delete ? (e.scroll.deleteAt(t, n.delete), t) : t + (n.retain || n.insert.length || 1);
              }, 0), this.scroll.batchEnd(), this.update(t);
            }
          }, {
            key: "deleteText",
            value: function value(t, e) {
              return this.scroll.deleteAt(t, e), this.update(new a.default().retain(t).delete(e));
            }
          }, {
            key: "formatLine",
            value: function value(t, e) {
              var n = this,
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return this.scroll.update(), Object.keys(r).forEach(function (o) {
                if (null == n.scroll.whitelist || n.scroll.whitelist[o]) {
                  var i = n.scroll.lines(t, Math.max(e, 1)),
                      a = e;
                  i.forEach(function (e) {
                    var i = e.length();

                    if (e instanceof s.default) {
                      var u = t - e.offset(n.scroll),
                          l = e.newlineIndex(u + a) - u + 1;
                      e.formatAt(u, l, o, r[o]);
                    } else e.format(o, r[o]);

                    a -= i;
                  });
                }
              }), this.scroll.optimize(), this.update(new a.default().retain(t).retain(e, (0, d.default)(r)));
            }
          }, {
            key: "formatText",
            value: function value(t, e) {
              var n = this,
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return Object.keys(r).forEach(function (o) {
                n.scroll.formatAt(t, e, o, r[o]);
              }), this.update(new a.default().retain(t).retain(e, (0, d.default)(r)));
            }
          }, {
            key: "getContents",
            value: function value(t, e) {
              return this.delta.slice(t, t + e);
            }
          }, {
            key: "getDelta",
            value: function value() {
              return this.scroll.lines().reduce(function (t, e) {
                return t.concat(e.delta());
              }, new a.default());
            }
          }, {
            key: "getFormat",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  n = [],
                  r = [];
              0 === e ? this.scroll.path(t).forEach(function (t) {
                var e = o(t, 1)[0];
                e instanceof h.default ? n.push(e) : e instanceof l.default.Leaf && r.push(e);
              }) : (n = this.scroll.lines(t, e), r = this.scroll.descendants(l.default.Leaf, t, e));
              var i = [n, r].map(function (t) {
                if (0 === t.length) return {};

                for (var e = (0, f.bubbleFormats)(t.shift()); Object.keys(e).length > 0;) {
                  var n = t.shift();
                  if (null == n) return e;
                  e = w((0, f.bubbleFormats)(n), e);
                }

                return e;
              });
              return v.default.apply(v.default, i);
            }
          }, {
            key: "getText",
            value: function value(t, e) {
              return this.getContents(t, e).filter(function (t) {
                return "string" == typeof t.insert;
              }).map(function (t) {
                return t.insert;
              }).join("");
            }
          }, {
            key: "insertEmbed",
            value: function value(t, e, n) {
              return this.scroll.insertAt(t, e, n), this.update(new a.default().retain(t).insert(function (t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : t[e] = n, t;
              }({}, e, n)));
            }
          }, {
            key: "insertText",
            value: function value(t, e) {
              var n = this,
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(r).forEach(function (o) {
                n.scroll.formatAt(t, e.length, o, r[o]);
              }), this.update(new a.default().retain(t).insert(e, (0, d.default)(r)));
            }
          }, {
            key: "isBlank",
            value: function value() {
              if (0 == this.scroll.children.length) return !0;
              if (this.scroll.children.length > 1) return !1;
              var t = this.scroll.children.head;
              return t.statics.blotName === h.default.blotName && !(t.children.length > 1) && t.children.head instanceof p.default;
            }
          }, {
            key: "removeFormat",
            value: function value(t, e) {
              var n = this.getText(t, e),
                  r = this.scroll.line(t + e),
                  i = o(r, 2),
                  u = i[0],
                  l = i[1],
                  c = 0,
                  f = new a.default();
              null != u && (c = u instanceof s.default ? u.newlineIndex(l) - l + 1 : u.length() - l, f = u.delta().slice(l, l + c - 1).insert("\n"));
              var h = this.getContents(t, e + c).diff(new a.default().insert(n).concat(f)),
                  p = new a.default().retain(t).concat(h);
              return this.applyDelta(p);
            }
          }, {
            key: "update",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                  r = this.delta;

              if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(b) && l.default.find(e[0].target)) {
                var o = l.default.find(e[0].target),
                    i = (0, f.bubbleFormats)(o),
                    u = o.offset(this.scroll),
                    s = e[0].oldValue.replace(c.default.CONTENTS, ""),
                    h = new a.default().insert(s),
                    p = new a.default().insert(o.value()),
                    d = new a.default().retain(u).concat(h.diff(p, n));
                t = d.reduce(function (t, e) {
                  return e.insert ? t.insert(e.insert, i) : t.push(e);
                }, new a.default()), this.delta = r.compose(t);
              } else this.delta = this.getDelta(), t && (0, y.default)(r.compose(t), this.delta) || (t = r.diff(this.delta, n));

              return t;
            }
          }]), t;
        }();

        function w(t, e) {
          return Object.keys(e).reduce(function (n, r) {
            return null == t[r] || (e[r] === t[r] ? n[r] = e[r] : Array.isArray(e[r]) ? e[r].indexOf(t[r]) < 0 && (n[r] = e[r].concat([t[r]])) : n[r] = [e[r], t[r]]), n;
          }, {});
        }

        e.default = m;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = e.Range = void 0;

        var r = function r(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function (t, e) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;

            try {
              for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
                ;
              }
            } catch (t) {
              o = !0, i = t;
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw i;
              }
            }

            return n;
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = s(n(0)),
            a = s(n(21)),
            u = s(n(11)),
            l = s(n(8));

        function s(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function c(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) {
              n[e] = t[e];
            }

            return n;
          }

          return Array.from(t);
        }

        function f(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        var h = (0, s(n(10)).default)("quill:selection"),
            p = function t(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          f(this, t), this.index = e, this.length = n;
        },
            d = function () {
          function t(e, n) {
            var r = this;
            f(this, t), this.emitter = n, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = i.default.create("cursor", this), this.lastRange = this.savedRange = new p(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function () {
              r.mouseDown || setTimeout(r.update.bind(r, l.default.sources.USER), 1);
            }), this.emitter.on(l.default.events.EDITOR_CHANGE, function (t, e) {
              t === l.default.events.TEXT_CHANGE && e.length() > 0 && r.update(l.default.sources.SILENT);
            }), this.emitter.on(l.default.events.SCROLL_BEFORE_UPDATE, function () {
              if (r.hasFocus()) {
                var t = r.getNativeRange();
                null != t && t.start.node !== r.cursor.textNode && r.emitter.once(l.default.events.SCROLL_UPDATE, function () {
                  try {
                    r.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset);
                  } catch (t) {}
                });
              }
            }), this.emitter.on(l.default.events.SCROLL_OPTIMIZE, function (t, e) {
              if (e.range) {
                var n = e.range,
                    o = n.startNode,
                    i = n.startOffset,
                    a = n.endNode,
                    u = n.endOffset;
                r.setNativeRange(o, i, a, u);
              }
            }), this.update(l.default.sources.SILENT);
          }

          return o(t, [{
            key: "handleComposition",
            value: function value() {
              var t = this;
              this.root.addEventListener("compositionstart", function () {
                t.composing = !0;
              }), this.root.addEventListener("compositionend", function () {
                if (t.composing = !1, t.cursor.parent) {
                  var e = t.cursor.restore();
                  if (!e) return;
                  setTimeout(function () {
                    t.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset);
                  }, 1);
                }
              });
            }
          }, {
            key: "handleDragging",
            value: function value() {
              var t = this;
              this.emitter.listenDOM("mousedown", document.body, function () {
                t.mouseDown = !0;
              }), this.emitter.listenDOM("mouseup", document.body, function () {
                t.mouseDown = !1, t.update(l.default.sources.USER);
              });
            }
          }, {
            key: "focus",
            value: function value() {
              this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
            }
          }, {
            key: "format",
            value: function value(t, e) {
              if (null == this.scroll.whitelist || this.scroll.whitelist[t]) {
                this.scroll.update();
                var n = this.getNativeRange();

                if (null != n && n.native.collapsed && !i.default.query(t, i.default.Scope.BLOCK)) {
                  if (n.start.node !== this.cursor.textNode) {
                    var r = i.default.find(n.start.node, !1);
                    if (null == r) return;

                    if (r instanceof i.default.Leaf) {
                      var o = r.split(n.start.offset);
                      r.parent.insertBefore(this.cursor, o);
                    } else r.insertBefore(this.cursor, n.start.node);

                    this.cursor.attach();
                  }

                  this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
                }
              }
            }
          }, {
            key: "getBounds",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  n = this.scroll.length();
              t = Math.min(t, n - 1), e = Math.min(t + e, n - 1) - t;
              var o = void 0,
                  i = this.scroll.leaf(t),
                  a = r(i, 2),
                  u = a[0],
                  l = a[1];
              if (null == u) return null;
              var s = u.position(l, !0),
                  c = r(s, 2);
              o = c[0], l = c[1];
              var f = document.createRange();

              if (e > 0) {
                f.setStart(o, l);
                var h = this.scroll.leaf(t + e),
                    p = r(h, 2);
                if (u = p[0], l = p[1], null == u) return null;
                var d = u.position(l, !0),
                    y = r(d, 2);
                return o = y[0], l = y[1], f.setEnd(o, l), f.getBoundingClientRect();
              }

              var v = "left",
                  g = void 0;
              return o instanceof Text ? (l < o.data.length ? (f.setStart(o, l), f.setEnd(o, l + 1)) : (f.setStart(o, l - 1), f.setEnd(o, l), v = "right"), g = f.getBoundingClientRect()) : (g = u.domNode.getBoundingClientRect(), l > 0 && (v = "right")), {
                bottom: g.top + g.height,
                height: g.height,
                left: g[v],
                right: g[v],
                top: g.top,
                width: 0
              };
            }
          }, {
            key: "getNativeRange",
            value: function value() {
              var t = document.getSelection();
              if (null == t || t.rangeCount <= 0) return null;
              var e = t.getRangeAt(0);
              if (null == e) return null;
              var n = this.normalizeNative(e);
              return h.info("getNativeRange", n), n;
            }
          }, {
            key: "getRange",
            value: function value() {
              var t = this.getNativeRange();
              return null == t ? [null, null] : [this.normalizedToRange(t), t];
            }
          }, {
            key: "hasFocus",
            value: function value() {
              return document.activeElement === this.root;
            }
          }, {
            key: "normalizedToRange",
            value: function value(t) {
              var e = this,
                  n = [[t.start.node, t.start.offset]];
              t.native.collapsed || n.push([t.end.node, t.end.offset]);
              var o = n.map(function (t) {
                var n = r(t, 2),
                    o = n[0],
                    a = n[1],
                    u = i.default.find(o, !0),
                    l = u.offset(e.scroll);
                return 0 === a ? l : u instanceof i.default.Container ? l + u.length() : l + u.index(o, a);
              }),
                  a = Math.min(Math.max.apply(Math, c(o)), this.scroll.length() - 1),
                  u = Math.min.apply(Math, [a].concat(c(o)));
              return new p(u, a - u);
            }
          }, {
            key: "normalizeNative",
            value: function value(t) {
              if (!y(this.root, t.startContainer) || !t.collapsed && !y(this.root, t.endContainer)) return null;
              var e = {
                start: {
                  node: t.startContainer,
                  offset: t.startOffset
                },
                end: {
                  node: t.endContainer,
                  offset: t.endOffset
                },
                native: t
              };
              return [e.start, e.end].forEach(function (t) {
                for (var e = t.node, n = t.offset; !(e instanceof Text) && e.childNodes.length > 0;) {
                  if (e.childNodes.length > n) e = e.childNodes[n], n = 0;else {
                    if (e.childNodes.length !== n) break;
                    n = (e = e.lastChild) instanceof Text ? e.data.length : e.childNodes.length + 1;
                  }
                }

                t.node = e, t.offset = n;
              }), e;
            }
          }, {
            key: "rangeToNative",
            value: function value(t) {
              var e = this,
                  n = t.collapsed ? [t.index] : [t.index, t.index + t.length],
                  o = [],
                  i = this.scroll.length();
              return n.forEach(function (t, n) {
                t = Math.min(i - 1, t);
                var a,
                    u = e.scroll.leaf(t),
                    l = r(u, 2),
                    s = l[0],
                    c = l[1],
                    f = s.position(c, 0 !== n),
                    h = r(f, 2);
                a = h[0], c = h[1], o.push(a, c);
              }), o.length < 2 && (o = o.concat(o)), o;
            }
          }, {
            key: "scrollIntoView",
            value: function value(t) {
              var e = this.lastRange;

              if (null != e) {
                var n = this.getBounds(e.index, e.length);

                if (null != n) {
                  var o = this.scroll.length() - 1,
                      i = this.scroll.line(Math.min(e.index, o)),
                      a = r(i, 1)[0],
                      u = a;

                  if (e.length > 0) {
                    var l = this.scroll.line(Math.min(e.index + e.length, o));
                    u = r(l, 1)[0];
                  }

                  if (null != a && null != u) {
                    var s = t.getBoundingClientRect();
                    n.top < s.top ? t.scrollTop -= s.top - n.top : n.bottom > s.bottom && (t.scrollTop += n.bottom - s.bottom);
                  }
                }
              }
            }
          }, {
            key: "setNativeRange",
            value: function value(t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                  r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e,
                  o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];

              if (h.info("setNativeRange", t, e, n, r), null == t || null != this.root.parentNode && null != t.parentNode && null != n.parentNode) {
                var i = document.getSelection();
                if (null != i) if (null != t) {
                  this.hasFocus() || this.root.focus();
                  var a = (this.getNativeRange() || {}).native;

                  if (null == a || o || t !== a.startContainer || e !== a.startOffset || n !== a.endContainer || r !== a.endOffset) {
                    "BR" == t.tagName && (e = [].indexOf.call(t.parentNode.childNodes, t), t = t.parentNode), "BR" == n.tagName && (r = [].indexOf.call(n.parentNode.childNodes, n), n = n.parentNode);
                    var u = document.createRange();
                    u.setStart(t, e), u.setEnd(n, r), i.removeAllRanges(), i.addRange(u);
                  }
                } else i.removeAllRanges(), this.root.blur(), document.body.focus();
              }
            }
          }, {
            key: "setRange",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default.sources.API;

              if ("string" == typeof e && (n = e, e = !1), h.info("setRange", t), null != t) {
                var r = this.rangeToNative(t);
                this.setNativeRange.apply(this, c(r).concat([e]));
              } else this.setNativeRange(null);

              this.update(n);
            }
          }, {
            key: "update",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.default.sources.USER,
                  e = this.lastRange,
                  n = this.getRange(),
                  o = r(n, 2),
                  i = o[0],
                  s = o[1];

              if (this.lastRange = i, null != this.lastRange && (this.savedRange = this.lastRange), !(0, u.default)(e, this.lastRange)) {
                var c;
                !this.composing && null != s && s.native.collapsed && s.start.node !== this.cursor.textNode && this.cursor.restore();
                var f,
                    h = [l.default.events.SELECTION_CHANGE, (0, a.default)(this.lastRange), (0, a.default)(e), t];
                (c = this.emitter).emit.apply(c, [l.default.events.EDITOR_CHANGE].concat(h)), t !== l.default.sources.SILENT && (f = this.emitter).emit.apply(f, h);
              }
            }
          }]), t;
        }();

        function y(t, e) {
          try {
            e.parentNode;
          } catch (t) {
            return !1;
          }

          return e instanceof Text && (e = e.parentNode), t.contains(e);
        }

        e.Range = p, e.default = d;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r,
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = n(0);

        function a(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function u(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var l = function (t) {
          function e() {
            return a(this, e), u(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, [{
            key: "insertInto",
            value: function value(t, n) {
              0 === t.children.length ? function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);

                if (void 0 === o) {
                  var i = Object.getPrototypeOf(e);
                  return null === i ? void 0 : t(i, n, r);
                }

                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0;
              }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertInto", this).call(this, t, n) : this.remove();
            }
          }, {
            key: "length",
            value: function value() {
              return 0;
            }
          }, {
            key: "value",
            value: function value() {
              return "";
            }
          }], [{
            key: "value",
            value: function value() {}
          }]), e;
        }(((r = i) && r.__esModule ? r : {
          default: r
        }).default.Embed);

        l.blotName = "break", l.tagName = "BR", e.default = l;
      }, function (t, e, n) {
        "use strict";

        var r,
            o = this && this.__extends || (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }
        }, function (t, e) {
          function n() {
            this.constructor = t;
          }

          r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        });
        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var i = n(44),
            a = n(30),
            u = n(1),
            l = function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return n.build(), n;
          }

          return o(e, t), e.prototype.appendChild = function (t) {
            this.insertBefore(t);
          }, e.prototype.attach = function () {
            t.prototype.attach.call(this), this.children.forEach(function (t) {
              t.attach();
            });
          }, e.prototype.build = function () {
            var t = this;
            this.children = new i.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function (e) {
              try {
                var n = s(e);
                t.insertBefore(n, t.children.head || void 0);
              } catch (t) {
                if (t instanceof u.ParchmentError) return;
                throw t;
              }
            });
          }, e.prototype.deleteAt = function (t, e) {
            if (0 === t && e === this.length()) return this.remove();
            this.children.forEachAt(t, e, function (t, e, n) {
              t.deleteAt(e, n);
            });
          }, e.prototype.descendant = function (t, n) {
            var r = this.children.find(n),
                o = r[0],
                i = r[1];
            return null == t.blotName && t(o) || null != t.blotName && o instanceof t ? [o, i] : o instanceof e ? o.descendant(t, i) : [null, -1];
          }, e.prototype.descendants = function (t, n, r) {
            void 0 === n && (n = 0), void 0 === r && (r = Number.MAX_VALUE);
            var o = [],
                i = r;
            return this.children.forEachAt(n, r, function (n, r, a) {
              (null == t.blotName && t(n) || null != t.blotName && n instanceof t) && o.push(n), n instanceof e && (o = o.concat(n.descendants(t, r, i))), i -= a;
            }), o;
          }, e.prototype.detach = function () {
            this.children.forEach(function (t) {
              t.detach();
            }), t.prototype.detach.call(this);
          }, e.prototype.formatAt = function (t, e, n, r) {
            this.children.forEachAt(t, e, function (t, e, o) {
              t.formatAt(e, o, n, r);
            });
          }, e.prototype.insertAt = function (t, e, n) {
            var r = this.children.find(t),
                o = r[0],
                i = r[1];
            if (o) o.insertAt(i, e, n);else {
              var a = null == n ? u.create("text", e) : u.create(e, n);
              this.appendChild(a);
            }
          }, e.prototype.insertBefore = function (t, e) {
            if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function (e) {
              return t instanceof e;
            })) throw new u.ParchmentError("Cannot insert " + t.statics.blotName + " into " + this.statics.blotName);
            t.insertInto(this, e);
          }, e.prototype.length = function () {
            return this.children.reduce(function (t, e) {
              return t + e.length();
            }, 0);
          }, e.prototype.moveChildren = function (t, e) {
            this.children.forEach(function (n) {
              t.insertBefore(n, e);
            });
          }, e.prototype.optimize = function (e) {
            if (t.prototype.optimize.call(this, e), 0 === this.children.length) if (null != this.statics.defaultChild) {
              var n = u.create(this.statics.defaultChild);
              this.appendChild(n), n.optimize(e);
            } else this.remove();
          }, e.prototype.path = function (t, n) {
            void 0 === n && (n = !1);
            var r = this.children.find(t, n),
                o = r[0],
                i = r[1],
                a = [[this, t]];
            return o instanceof e ? a.concat(o.path(i, n)) : (null != o && a.push([o, i]), a);
          }, e.prototype.removeChild = function (t) {
            this.children.remove(t);
          }, e.prototype.replace = function (n) {
            n instanceof e && n.moveChildren(this), t.prototype.replace.call(this, n);
          }, e.prototype.split = function (t, e) {
            if (void 0 === e && (e = !1), !e) {
              if (0 === t) return this;
              if (t === this.length()) return this.next;
            }

            var n = this.clone();
            return this.parent.insertBefore(n, this.next), this.children.forEachAt(t, this.length(), function (t, r, o) {
              t = t.split(r, e), n.appendChild(t);
            }), n;
          }, e.prototype.unwrap = function () {
            this.moveChildren(this.parent, this.next), this.remove();
          }, e.prototype.update = function (t, e) {
            var n = this,
                r = [],
                o = [];
            t.forEach(function (t) {
              t.target === n.domNode && "childList" === t.type && (r.push.apply(r, t.addedNodes), o.push.apply(o, t.removedNodes));
            }), o.forEach(function (t) {
              if (!(null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                var e = u.find(t);
                null != e && (null != e.domNode.parentNode && e.domNode.parentNode !== n.domNode || e.detach());
              }
            }), r.filter(function (t) {
              return t.parentNode == n.domNode;
            }).sort(function (t, e) {
              return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
            }).forEach(function (t) {
              var e = null;
              null != t.nextSibling && (e = u.find(t.nextSibling));
              var r = s(t);
              r.next == e && null != r.next || (null != r.parent && r.parent.removeChild(n), n.insertBefore(r, e || void 0));
            });
          }, e;
        }(a.default);

        function s(t) {
          var e = u.find(t);
          if (null == e) try {
            e = u.create(t);
          } catch (n) {
            e = u.create(u.Scope.INLINE), [].slice.call(t.childNodes).forEach(function (t) {
              e.domNode.appendChild(t);
            }), t.parentNode && t.parentNode.replaceChild(e.domNode, t), e.attach();
          }
          return e;
        }

        e.default = l;
      }, function (t, e, n) {
        "use strict";

        var r,
            o = this && this.__extends || (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }
        }, function (t, e) {
          function n() {
            this.constructor = t;
          }

          r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        });
        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var i = n(12),
            a = n(31),
            u = n(17),
            l = n(1),
            s = function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return n.attributes = new a.default(n.domNode), n;
          }

          return o(e, t), e.formats = function (t) {
            return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0);
          }, e.prototype.format = function (t, e) {
            var n = l.query(t);
            n instanceof i.default ? this.attributes.attribute(n, e) : e && (null == n || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e));
          }, e.prototype.formats = function () {
            var t = this.attributes.values(),
                e = this.statics.formats(this.domNode);
            return null != e && (t[this.statics.blotName] = e), t;
          }, e.prototype.replaceWith = function (e, n) {
            var r = t.prototype.replaceWith.call(this, e, n);
            return this.attributes.copy(r), r;
          }, e.prototype.update = function (e, n) {
            var r = this;
            t.prototype.update.call(this, e, n), e.some(function (t) {
              return t.target === r.domNode && "attributes" === t.type;
            }) && this.attributes.build();
          }, e.prototype.wrap = function (n, r) {
            var o = t.prototype.wrap.call(this, n, r);
            return o instanceof e && o.statics.scope === this.statics.scope && this.attributes.move(o), o;
          }, e;
        }(u.default);

        e.default = s;
      }, function (t, e, n) {
        "use strict";

        var r,
            o = this && this.__extends || (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }
        }, function (t, e) {
          function n() {
            this.constructor = t;
          }

          r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        });
        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var i = n(30),
            a = n(1),
            u = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this;
          }

          return o(e, t), e.value = function (t) {
            return !0;
          }, e.prototype.index = function (t, e) {
            return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1;
          }, e.prototype.position = function (t, e) {
            var n = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
            return t > 0 && (n += 1), [this.parent.domNode, n];
          }, e.prototype.value = function () {
            var t;
            return (t = {})[this.statics.blotName] = this.statics.value(this.domNode) || !0, t;
          }, e.scope = a.Scope.INLINE_BLOT, e;
        }(i.default);

        e.default = u;
      }, function (t, e, n) {
        var r = n(11),
            o = n(3),
            i = {
          attributes: {
            compose: function compose(t, e, n) {
              "object" != _typeof(t) && (t = {}), "object" != _typeof(e) && (e = {});
              var r = o(!0, {}, e);

              for (var i in n || (r = Object.keys(r).reduce(function (t, e) {
                return null != r[e] && (t[e] = r[e]), t;
              }, {})), t) {
                void 0 !== t[i] && void 0 === e[i] && (r[i] = t[i]);
              }

              return Object.keys(r).length > 0 ? r : void 0;
            },
            diff: function diff(t, e) {
              "object" != _typeof(t) && (t = {}), "object" != _typeof(e) && (e = {});
              var n = Object.keys(t).concat(Object.keys(e)).reduce(function (n, o) {
                return r(t[o], e[o]) || (n[o] = void 0 === e[o] ? null : e[o]), n;
              }, {});
              return Object.keys(n).length > 0 ? n : void 0;
            },
            transform: function transform(t, e, n) {
              if ("object" != _typeof(t)) return e;

              if ("object" == _typeof(e)) {
                if (!n) return e;
                var r = Object.keys(e).reduce(function (n, r) {
                  return void 0 === t[r] && (n[r] = e[r]), n;
                }, {});
                return Object.keys(r).length > 0 ? r : void 0;
              }
            }
          },
          iterator: function iterator(t) {
            return new a(t);
          },
          length: function length(t) {
            return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1;
          }
        };

        function a(t) {
          this.ops = t, this.index = 0, this.offset = 0;
        }

        a.prototype.hasNext = function () {
          return this.peekLength() < 1 / 0;
        }, a.prototype.next = function (t) {
          t || (t = 1 / 0);
          var e = this.ops[this.index];

          if (e) {
            var n = this.offset,
                r = i.length(e);
            if (t >= r - n ? (t = r - n, this.index += 1, this.offset = 0) : this.offset += t, "number" == typeof e.delete) return {
              delete: t
            };
            var o = {};
            return e.attributes && (o.attributes = e.attributes), "number" == typeof e.retain ? o.retain = t : "string" == typeof e.insert ? o.insert = e.insert.substr(n, t) : o.insert = e.insert, o;
          }

          return {
            retain: 1 / 0
          };
        }, a.prototype.peek = function () {
          return this.ops[this.index];
        }, a.prototype.peekLength = function () {
          return this.ops[this.index] ? i.length(this.ops[this.index]) - this.offset : 1 / 0;
        }, a.prototype.peekType = function () {
          return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain";
        }, a.prototype.rest = function () {
          if (this.hasNext()) {
            if (0 === this.offset) return this.ops.slice(this.index);
            var t = this.offset,
                e = this.index,
                n = this.next(),
                r = this.ops.slice(this.index);
            return this.offset = t, this.index = e, [n].concat(r);
          }

          return [];
        }, t.exports = i;
      }, function (t, n) {
        var r = function () {
          "use strict";

          function t(t, e) {
            return null != e && t instanceof e;
          }

          var n, r, o;

          try {
            n = Map;
          } catch (t) {
            n = function n() {};
          }

          try {
            r = Set;
          } catch (t) {
            r = function r() {};
          }

          try {
            o = Promise;
          } catch (t) {
            o = function o() {};
          }

          function i(a, l, s, c, f) {
            "object" == _typeof(l) && (s = l.depth, c = l.prototype, f = l.includeNonEnumerable, l = l.circular);
            var h = [],
                p = [],
                d = void 0 !== e;
            return void 0 === l && (l = !0), void 0 === s && (s = 1 / 0), function a(s, y) {
              if (null === s) return null;
              if (0 === y) return s;
              var v, g;
              if ("object" != _typeof(s)) return s;
              if (t(s, n)) v = new n();else if (t(s, r)) v = new r();else if (t(s, o)) v = new o(function (t, e) {
                s.then(function (e) {
                  t(a(e, y - 1));
                }, function (t) {
                  e(a(t, y - 1));
                });
              });else if (i.__isArray(s)) v = [];else if (i.__isRegExp(s)) v = new RegExp(s.source, u(s)), s.lastIndex && (v.lastIndex = s.lastIndex);else if (i.__isDate(s)) v = new Date(s.getTime());else {
                if (d && e.isBuffer(s)) return v = e.allocUnsafe ? e.allocUnsafe(s.length) : new e(s.length), s.copy(v), v;
                t(s, Error) ? v = Object.create(s) : void 0 === c ? (g = Object.getPrototypeOf(s), v = Object.create(g)) : (v = Object.create(c), g = c);
              }

              if (l) {
                var b = h.indexOf(s);
                if (-1 != b) return p[b];
                h.push(s), p.push(v);
              }

              for (var m in t(s, n) && s.forEach(function (t, e) {
                var n = a(e, y - 1),
                    r = a(t, y - 1);
                v.set(n, r);
              }), t(s, r) && s.forEach(function (t) {
                var e = a(t, y - 1);
                v.add(e);
              }), s) {
                var w;
                g && (w = Object.getOwnPropertyDescriptor(g, m)), w && null == w.set || (v[m] = a(s[m], y - 1));
              }

              if (Object.getOwnPropertySymbols) {
                var _ = Object.getOwnPropertySymbols(s);

                for (m = 0; m < _.length; m++) {
                  var x = _[m];
                  (!(E = Object.getOwnPropertyDescriptor(s, x)) || E.enumerable || f) && (v[x] = a(s[x], y - 1), E.enumerable || Object.defineProperty(v, x, {
                    enumerable: !1
                  }));
                }
              }

              if (f) {
                var O = Object.getOwnPropertyNames(s);

                for (m = 0; m < O.length; m++) {
                  var E,
                      S = O[m];
                  (E = Object.getOwnPropertyDescriptor(s, S)) && E.enumerable || (v[S] = a(s[S], y - 1), Object.defineProperty(v, S, {
                    enumerable: !1
                  }));
                }
              }

              return v;
            }(a, s);
          }

          function a(t) {
            return Object.prototype.toString.call(t);
          }

          function u(t) {
            var e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e;
          }

          return i.clonePrototype = function (t) {
            if (null === t) return null;

            var e = function e() {};

            return e.prototype = t, new e();
          }, i.__objToStr = a, i.__isDate = function (t) {
            return "object" == _typeof(t) && "[object Date]" === a(t);
          }, i.__isArray = function (t) {
            return "object" == _typeof(t) && "[object Array]" === a(t);
          }, i.__isRegExp = function (t) {
            return "object" == _typeof(t) && "[object RegExp]" === a(t);
          }, i.__getRegExpFlags = u, i;
        }();

        "object" == _typeof(t) && t.exports && (t.exports = r);
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = function r(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function (t, e) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;

            try {
              for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
                ;
              }
            } catch (t) {
              o = !0, i = t;
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw i;
              }
            }

            return n;
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            a = p(n(0)),
            u = p(n(8)),
            l = n(4),
            s = p(l),
            c = p(n(16)),
            f = p(n(13)),
            h = p(n(25));

        function p(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function d(t) {
          return t instanceof s.default || t instanceof l.BlockEmbed;
        }

        var y = function (t) {
          function e(t, n) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);

            var r = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));

            return r.emitter = n.emitter, Array.isArray(n.whitelist) && (r.whitelist = n.whitelist.reduce(function (t, e) {
              return t[e] = !0, t;
            }, {})), r.domNode.addEventListener("DOMNodeInserted", function () {}), r.optimize(), r.enable(), r;
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, [{
            key: "batchStart",
            value: function value() {
              this.batch = !0;
            }
          }, {
            key: "batchEnd",
            value: function value() {
              this.batch = !1, this.optimize();
            }
          }, {
            key: "deleteAt",
            value: function value(t, n) {
              var o = this.line(t),
                  a = r(o, 2),
                  u = a[0],
                  s = a[1],
                  h = this.line(t + n),
                  p = r(h, 1)[0];

              if (i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), null != p && u !== p && s > 0) {
                if (u instanceof l.BlockEmbed || p instanceof l.BlockEmbed) return void this.optimize();

                if (u instanceof f.default) {
                  var d = u.newlineIndex(u.length(), !0);
                  if (d > -1 && (u = u.split(d + 1)) === p) return void this.optimize();
                } else if (p instanceof f.default) {
                  var y = p.newlineIndex(0);
                  y > -1 && p.split(y + 1);
                }

                var v = p.children.head instanceof c.default ? null : p.children.head;
                u.moveChildren(p, v), u.remove();
              }

              this.optimize();
            }
          }, {
            key: "enable",
            value: function value() {
              var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              this.domNode.setAttribute("contenteditable", t);
            }
          }, {
            key: "formatAt",
            value: function value(t, n, r, o) {
              (null == this.whitelist || this.whitelist[r]) && (i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, o), this.optimize());
            }
          }, {
            key: "insertAt",
            value: function value(t, n, r) {
              if (null == r || null == this.whitelist || this.whitelist[n]) {
                if (t >= this.length()) {
                  if (null == r || null == a.default.query(n, a.default.Scope.BLOCK)) {
                    var o = a.default.create(this.statics.defaultChild);
                    this.appendChild(o), null == r && n.endsWith("\n") && (n = n.slice(0, -1)), o.insertAt(0, n, r);
                  } else {
                    var u = a.default.create(n, r);
                    this.appendChild(u);
                  }
                } else i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
                this.optimize();
              }
            }
          }, {
            key: "insertBefore",
            value: function value(t, n) {
              if (t.statics.scope === a.default.Scope.INLINE_BLOT) {
                var r = a.default.create(this.statics.defaultChild);
                r.appendChild(t), t = r;
              }

              i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n);
            }
          }, {
            key: "leaf",
            value: function value(t) {
              return this.path(t).pop() || [null, -1];
            }
          }, {
            key: "line",
            value: function value(t) {
              return t === this.length() ? this.line(t - 1) : this.descendant(d, t);
            }
          }, {
            key: "lines",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE,
                  n = function t(e, n, r) {
                var o = [],
                    i = r;
                return e.children.forEachAt(n, r, function (e, n, r) {
                  d(e) ? o.push(e) : e instanceof a.default.Container && (o = o.concat(t(e, n, i))), i -= r;
                }), o;
              };

              return n(this, t, e);
            }
          }, {
            key: "optimize",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              !0 !== this.batch && (i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t, n), t.length > 0 && this.emitter.emit(u.default.events.SCROLL_OPTIMIZE, t, n));
            }
          }, {
            key: "path",
            value: function value(t) {
              return i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t).slice(1);
            }
          }, {
            key: "update",
            value: function value(t) {
              if (!0 !== this.batch) {
                var n = u.default.sources.USER;
                "string" == typeof t && (n = t), Array.isArray(t) || (t = this.observer.takeRecords()), t.length > 0 && this.emitter.emit(u.default.events.SCROLL_BEFORE_UPDATE, n, t), i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this, t.concat([])), t.length > 0 && this.emitter.emit(u.default.events.SCROLL_UPDATE, n, t);
              }
            }
          }]), e;
        }(a.default.Scroll);

        y.blotName = "scroll", y.className = "ql-editor", y.tagName = "DIV", y.defaultChild = "block", y.allowedChildren = [s.default, l.BlockEmbed, h.default], e.default = y;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.SHORTKEY = e.default = void 0;

        var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        },
            o = function o(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function (t, e) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;

            try {
              for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
                ;
              }
            } catch (t) {
              o = !0, i = t;
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw i;
              }
            }

            return n;
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
            i = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            a = y(n(21)),
            u = y(n(11)),
            l = y(n(3)),
            s = y(n(2)),
            c = y(n(20)),
            f = y(n(0)),
            h = y(n(5)),
            p = y(n(10)),
            d = y(n(9));

        function y(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function v(t, e, n) {
          return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n, t;
        }

        var g = (0, p.default)("quill:keyboard"),
            b = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
            m = function (t) {
          function e(t, n) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);

            var r = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));

            return r.bindings = {}, Object.keys(r.options.bindings).forEach(function (e) {
              ("list autofill" !== e || null == t.scroll.whitelist || t.scroll.whitelist.list) && r.options.bindings[e] && r.addBinding(r.options.bindings[e]);
            }), r.addBinding({
              key: e.keys.ENTER,
              shiftKey: null
            }, E), r.addBinding({
              key: e.keys.ENTER,
              metaKey: null,
              ctrlKey: null,
              altKey: null
            }, function () {}), /Firefox/i.test(navigator.userAgent) ? (r.addBinding({
              key: e.keys.BACKSPACE
            }, {
              collapsed: !0
            }, _), r.addBinding({
              key: e.keys.DELETE
            }, {
              collapsed: !0
            }, x)) : (r.addBinding({
              key: e.keys.BACKSPACE
            }, {
              collapsed: !0,
              prefix: /^.?$/
            }, _), r.addBinding({
              key: e.keys.DELETE
            }, {
              collapsed: !0,
              suffix: /^.?$/
            }, x)), r.addBinding({
              key: e.keys.BACKSPACE
            }, {
              collapsed: !1
            }, O), r.addBinding({
              key: e.keys.DELETE
            }, {
              collapsed: !1
            }, O), r.addBinding({
              key: e.keys.BACKSPACE,
              altKey: null,
              ctrlKey: null,
              metaKey: null,
              shiftKey: null
            }, {
              collapsed: !0,
              offset: 0
            }, _), r.listen(), r;
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), i(e, null, [{
            key: "match",
            value: function value(t, e) {
              return e = T(e), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function (n) {
                return !!e[n] !== t[n] && null !== e[n];
              }) && e.key === (t.which || t.keyCode);
            }
          }]), i(e, [{
            key: "addBinding",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  r = T(t);
              if (null == r || null == r.key) return g.warn("Attempted to add invalid keyboard binding", r);
              "function" == typeof e && (e = {
                handler: e
              }), "function" == typeof n && (n = {
                handler: n
              }), r = (0, l.default)(r, e, n), this.bindings[r.key] = this.bindings[r.key] || [], this.bindings[r.key].push(r);
            }
          }, {
            key: "listen",
            value: function value() {
              var t = this;
              this.quill.root.addEventListener("keydown", function (n) {
                if (!n.defaultPrevented) {
                  var i = n.which || n.keyCode,
                      a = (t.bindings[i] || []).filter(function (t) {
                    return e.match(n, t);
                  });

                  if (0 !== a.length) {
                    var l = t.quill.getSelection();

                    if (null != l && t.quill.hasFocus()) {
                      var s = t.quill.getLine(l.index),
                          c = o(s, 2),
                          h = c[0],
                          p = c[1],
                          d = t.quill.getLeaf(l.index),
                          y = o(d, 2),
                          v = y[0],
                          g = y[1],
                          b = 0 === l.length ? [v, g] : t.quill.getLeaf(l.index + l.length),
                          m = o(b, 2),
                          w = m[0],
                          _ = m[1],
                          x = v instanceof f.default.Text ? v.value().slice(0, g) : "",
                          O = w instanceof f.default.Text ? w.value().slice(_) : "",
                          E = {
                        collapsed: 0 === l.length,
                        empty: 0 === l.length && h.length() <= 1,
                        format: t.quill.getFormat(l),
                        offset: p,
                        prefix: x,
                        suffix: O
                      };
                      a.some(function (e) {
                        if (null != e.collapsed && e.collapsed !== E.collapsed) return !1;
                        if (null != e.empty && e.empty !== E.empty) return !1;
                        if (null != e.offset && e.offset !== E.offset) return !1;

                        if (Array.isArray(e.format)) {
                          if (e.format.every(function (t) {
                            return null == E.format[t];
                          })) return !1;
                        } else if ("object" === r(e.format) && !Object.keys(e.format).every(function (t) {
                          return !0 === e.format[t] ? null != E.format[t] : !1 === e.format[t] ? null == E.format[t] : (0, u.default)(e.format[t], E.format[t]);
                        })) return !1;

                        return !(null != e.prefix && !e.prefix.test(E.prefix) || null != e.suffix && !e.suffix.test(E.suffix) || !0 === e.handler.call(t, l, E));
                      }) && n.preventDefault();
                    }
                  }
                }
              });
            }
          }]), e;
        }(d.default);

        function w(t, e) {
          var n,
              r = t === m.keys.LEFT ? "prefix" : "suffix";
          return v(n = {
            key: t,
            shiftKey: e,
            altKey: null
          }, r, /^$/), v(n, "handler", function (n) {
            var r = n.index;
            t === m.keys.RIGHT && (r += n.length + 1);
            var i = this.quill.getLeaf(r);
            return !(o(i, 1)[0] instanceof f.default.Embed && (t === m.keys.LEFT ? e ? this.quill.setSelection(n.index - 1, n.length + 1, h.default.sources.USER) : this.quill.setSelection(n.index - 1, h.default.sources.USER) : e ? this.quill.setSelection(n.index, n.length + 1, h.default.sources.USER) : this.quill.setSelection(n.index + n.length + 1, h.default.sources.USER), 1));
          }), n;
        }

        function _(t, e) {
          if (!(0 === t.index || this.quill.getLength() <= 1)) {
            var n = this.quill.getLine(t.index),
                r = o(n, 1)[0],
                i = {};

            if (0 === e.offset) {
              var a = this.quill.getLine(t.index - 1),
                  u = o(a, 1)[0];

              if (null != u && u.length() > 1) {
                var l = r.formats(),
                    s = this.quill.getFormat(t.index - 1, 1);
                i = c.default.attributes.diff(l, s) || {};
              }
            }

            var f = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
            this.quill.deleteText(t.index - f, f, h.default.sources.USER), Object.keys(i).length > 0 && this.quill.formatLine(t.index - f, f, i, h.default.sources.USER), this.quill.focus();
          }
        }

        function x(t, e) {
          var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;

          if (!(t.index >= this.quill.getLength() - n)) {
            var r = {},
                i = 0,
                a = this.quill.getLine(t.index),
                u = o(a, 1)[0];

            if (e.offset >= u.length() - 1) {
              var l = this.quill.getLine(t.index + 1),
                  s = o(l, 1)[0];

              if (s) {
                var f = u.formats(),
                    p = this.quill.getFormat(t.index, 1);
                r = c.default.attributes.diff(f, p) || {}, i = s.length();
              }
            }

            this.quill.deleteText(t.index, n, h.default.sources.USER), Object.keys(r).length > 0 && this.quill.formatLine(t.index + i - 1, n, r, h.default.sources.USER);
          }
        }

        function O(t) {
          var e = this.quill.getLines(t),
              n = {};

          if (e.length > 1) {
            var r = e[0].formats(),
                o = e[e.length - 1].formats();
            n = c.default.attributes.diff(o, r) || {};
          }

          this.quill.deleteText(t, h.default.sources.USER), Object.keys(n).length > 0 && this.quill.formatLine(t.index, 1, n, h.default.sources.USER), this.quill.setSelection(t.index, h.default.sources.SILENT), this.quill.focus();
        }

        function E(t, e) {
          var n = this;
          t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
          var r = Object.keys(e.format).reduce(function (t, n) {
            return f.default.query(n, f.default.Scope.BLOCK) && !Array.isArray(e.format[n]) && (t[n] = e.format[n]), t;
          }, {});
          this.quill.insertText(t.index, "\n", r, h.default.sources.USER), this.quill.setSelection(t.index + 1, h.default.sources.SILENT), this.quill.focus(), Object.keys(e.format).forEach(function (t) {
            null == r[t] && (Array.isArray(e.format[t]) || "link" !== t && n.quill.format(t, e.format[t], h.default.sources.USER));
          });
        }

        function S(t) {
          return {
            key: m.keys.TAB,
            shiftKey: !t,
            format: {
              "code-block": !0
            },
            handler: function handler(e) {
              var n = f.default.query("code-block"),
                  r = e.index,
                  i = e.length,
                  a = this.quill.scroll.descendant(n, r),
                  u = o(a, 2),
                  l = u[0],
                  s = u[1];

              if (null != l) {
                var c = this.quill.getIndex(l),
                    p = l.newlineIndex(s, !0) + 1,
                    d = l.newlineIndex(c + s + i),
                    y = l.domNode.textContent.slice(p, d).split("\n");
                s = 0, y.forEach(function (e, o) {
                  t ? (l.insertAt(p + s, n.TAB), s += n.TAB.length, 0 === o ? r += n.TAB.length : i += n.TAB.length) : e.startsWith(n.TAB) && (l.deleteAt(p + s, n.TAB.length), s -= n.TAB.length, 0 === o ? r -= n.TAB.length : i -= n.TAB.length), s += e.length + 1;
                }), this.quill.update(h.default.sources.USER), this.quill.setSelection(r, i, h.default.sources.SILENT);
              }
            }
          };
        }

        function A(t) {
          return {
            key: t[0].toUpperCase(),
            shortKey: !0,
            handler: function handler(e, n) {
              this.quill.format(t, !n.format[t], h.default.sources.USER);
            }
          };
        }

        function T(t) {
          if ("string" == typeof t || "number" == typeof t) return T({
            key: t
          });
          if ("object" === (void 0 === t ? "undefined" : r(t)) && (t = (0, a.default)(t, !1)), "string" == typeof t.key) if (null != m.keys[t.key.toUpperCase()]) t.key = m.keys[t.key.toUpperCase()];else {
            if (1 !== t.key.length) return null;
            t.key = t.key.toUpperCase().charCodeAt(0);
          }
          return t.shortKey && (t[b] = t.shortKey, delete t.shortKey), t;
        }

        m.keys = {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          ESCAPE: 27,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46
        }, m.DEFAULTS = {
          bindings: {
            bold: A("bold"),
            italic: A("italic"),
            underline: A("underline"),
            indent: {
              key: m.keys.TAB,
              format: ["blockquote", "indent", "list"],
              handler: function handler(t, e) {
                if (e.collapsed && 0 !== e.offset) return !0;
                this.quill.format("indent", "+1", h.default.sources.USER);
              }
            },
            outdent: {
              key: m.keys.TAB,
              shiftKey: !0,
              format: ["blockquote", "indent", "list"],
              handler: function handler(t, e) {
                if (e.collapsed && 0 !== e.offset) return !0;
                this.quill.format("indent", "-1", h.default.sources.USER);
              }
            },
            "outdent backspace": {
              key: m.keys.BACKSPACE,
              collapsed: !0,
              shiftKey: null,
              metaKey: null,
              ctrlKey: null,
              altKey: null,
              format: ["indent", "list"],
              offset: 0,
              handler: function handler(t, e) {
                null != e.format.indent ? this.quill.format("indent", "-1", h.default.sources.USER) : null != e.format.list && this.quill.format("list", !1, h.default.sources.USER);
              }
            },
            "indent code-block": S(!0),
            "outdent code-block": S(!1),
            "remove tab": {
              key: m.keys.TAB,
              shiftKey: !0,
              collapsed: !0,
              prefix: /\t$/,
              handler: function handler(t) {
                this.quill.deleteText(t.index - 1, 1, h.default.sources.USER);
              }
            },
            tab: {
              key: m.keys.TAB,
              handler: function handler(t) {
                this.quill.history.cutoff();
                var e = new s.default().retain(t.index).delete(t.length).insert("\t");
                this.quill.updateContents(e, h.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index + 1, h.default.sources.SILENT);
              }
            },
            "list empty enter": {
              key: m.keys.ENTER,
              collapsed: !0,
              format: ["list"],
              empty: !0,
              handler: function handler(t, e) {
                this.quill.format("list", !1, h.default.sources.USER), e.format.indent && this.quill.format("indent", !1, h.default.sources.USER);
              }
            },
            "checklist enter": {
              key: m.keys.ENTER,
              collapsed: !0,
              format: {
                list: "checked"
              },
              handler: function handler(t) {
                var e = this.quill.getLine(t.index),
                    n = o(e, 2),
                    r = n[0],
                    i = n[1],
                    a = (0, l.default)({}, r.formats(), {
                  list: "checked"
                }),
                    u = new s.default().retain(t.index).insert("\n", a).retain(r.length() - i - 1).retain(1, {
                  list: "unchecked"
                });
                this.quill.updateContents(u, h.default.sources.USER), this.quill.setSelection(t.index + 1, h.default.sources.SILENT), this.quill.scrollIntoView();
              }
            },
            "header enter": {
              key: m.keys.ENTER,
              collapsed: !0,
              format: ["header"],
              suffix: /^$/,
              handler: function handler(t, e) {
                var n = this.quill.getLine(t.index),
                    r = o(n, 2),
                    i = r[0],
                    a = r[1],
                    u = new s.default().retain(t.index).insert("\n", e.format).retain(i.length() - a - 1).retain(1, {
                  header: null
                });
                this.quill.updateContents(u, h.default.sources.USER), this.quill.setSelection(t.index + 1, h.default.sources.SILENT), this.quill.scrollIntoView();
              }
            },
            "list autofill": {
              key: " ",
              collapsed: !0,
              format: {
                list: !1
              },
              prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
              handler: function handler(t, e) {
                var n = e.prefix.length,
                    r = this.quill.getLine(t.index),
                    i = o(r, 2),
                    a = i[0],
                    u = i[1];
                if (u > n) return !0;
                var l = void 0;

                switch (e.prefix.trim()) {
                  case "[]":
                  case "[ ]":
                    l = "unchecked";
                    break;

                  case "[x]":
                    l = "checked";
                    break;

                  case "-":
                  case "*":
                    l = "bullet";
                    break;

                  default:
                    l = "ordered";
                }

                this.quill.insertText(t.index, " ", h.default.sources.USER), this.quill.history.cutoff();
                var c = new s.default().retain(t.index - u).delete(n + 1).retain(a.length() - 2 - u).retain(1, {
                  list: l
                });
                this.quill.updateContents(c, h.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index - n, h.default.sources.SILENT);
              }
            },
            "code exit": {
              key: m.keys.ENTER,
              collapsed: !0,
              format: ["code-block"],
              prefix: /\n\n$/,
              suffix: /^\s+$/,
              handler: function handler(t) {
                var e = this.quill.getLine(t.index),
                    n = o(e, 2),
                    r = n[0],
                    i = n[1],
                    a = new s.default().retain(t.index + r.length() - i - 2).retain(1, {
                  "code-block": null
                }).delete(1);
                this.quill.updateContents(a, h.default.sources.USER);
              }
            },
            "embed left": w(m.keys.LEFT, !1),
            "embed left shift": w(m.keys.LEFT, !0),
            "embed right": w(m.keys.RIGHT, !1),
            "embed right shift": w(m.keys.RIGHT, !0)
          }
        }, e.default = m, e.SHORTKEY = b;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = function r(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function (t, e) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;

            try {
              for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
                ;
              }
            } catch (t) {
              o = !0, i = t;
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw i;
              }
            }

            return n;
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
            o = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            i = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            a = l(n(0)),
            u = l(n(7));

        function l(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        var s = function (t) {
          function e(t, n) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);

            var r = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));

            return r.selection = n, r.textNode = document.createTextNode(e.CONTENTS), r.domNode.appendChild(r.textNode), r._length = 0, r;
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), i(e, null, [{
            key: "value",
            value: function value() {}
          }]), i(e, [{
            key: "detach",
            value: function value() {
              null != this.parent && this.parent.removeChild(this);
            }
          }, {
            key: "format",
            value: function value(t, n) {
              if (0 !== this._length) return o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);

              for (var r = this, i = 0; null != r && r.statics.scope !== a.default.Scope.BLOCK_BLOT;) {
                i += r.offset(r.parent), r = r.parent;
              }

              null != r && (this._length = e.CONTENTS.length, r.optimize(), r.formatAt(i, e.CONTENTS.length, t, n), this._length = 0);
            }
          }, {
            key: "index",
            value: function value(t, n) {
              return t === this.textNode ? 0 : o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n);
            }
          }, {
            key: "length",
            value: function value() {
              return this._length;
            }
          }, {
            key: "position",
            value: function value() {
              return [this.textNode, this.textNode.data.length];
            }
          }, {
            key: "remove",
            value: function value() {
              o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this), this.parent = null;
            }
          }, {
            key: "restore",
            value: function value() {
              if (!this.selection.composing && null != this.parent) {
                var t = this.textNode,
                    n = this.selection.getNativeRange(),
                    o = void 0,
                    i = void 0,
                    l = void 0;

                if (null != n && n.start.node === t && n.end.node === t) {
                  var s = [t, n.start.offset, n.end.offset];
                  o = s[0], i = s[1], l = s[2];
                }

                for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) {
                  this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                }

                if (this.textNode.data !== e.CONTENTS) {
                  var c = this.textNode.data.split(e.CONTENTS).join("");
                  this.next instanceof u.default ? (o = this.next.domNode, this.next.insertAt(0, c), this.textNode.data = e.CONTENTS) : (this.textNode.data = c, this.parent.insertBefore(a.default.create(this.textNode), this), this.textNode = document.createTextNode(e.CONTENTS), this.domNode.appendChild(this.textNode));
                }

                if (this.remove(), null != i) {
                  var f = [i, l].map(function (t) {
                    return Math.max(0, Math.min(o.data.length, t - 1));
                  }),
                      h = r(f, 2);
                  return i = h[0], l = h[1], {
                    startNode: o,
                    startOffset: i,
                    endNode: o,
                    endOffset: l
                  };
                }
              }
            }
          }, {
            key: "update",
            value: function value(t, e) {
              var n = this;

              if (t.some(function (t) {
                return "characterData" === t.type && t.target === n.textNode;
              })) {
                var r = this.restore();
                r && (e.range = r);
              }
            }
          }, {
            key: "value",
            value: function value() {
              return "";
            }
          }]), e;
        }(a.default.Embed);

        s.blotName = "cursor", s.className = "ql-cursor", s.tagName = "span", s.CONTENTS = "\uFEFF", e.default = s;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = a(n(0)),
            o = n(4),
            i = a(o);

        function a(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function u(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function l(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var s = function (t) {
          function e() {
            return u(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), e;
        }(r.default.Container);

        s.allowedChildren = [i.default, o.BlockEmbed, s], e.default = s;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0;

        var r,
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = n(0),
            a = (r = i) && r.__esModule ? r : {
          default: r
        };

        function u(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function l(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var s = function (t) {
          function e() {
            return u(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, [{
            key: "value",
            value: function value(t) {
              var n = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);

                if (void 0 === o) {
                  var i = Object.getPrototypeOf(e);
                  return null === i ? void 0 : t(i, n, r);
                }

                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0;
              }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t);

              return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function (t) {
                return ("00" + parseInt(t).toString(16)).slice(-2);
              }).join("")) : n;
            }
          }]), e;
        }(a.default.Attributor.Style),
            c = new a.default.Attributor.Class("color", "ql-color", {
          scope: a.default.Scope.INLINE
        }),
            f = new s("color", "color", {
          scope: a.default.Scope.INLINE
        });

        e.ColorAttributor = s, e.ColorClass = c, e.ColorStyle = f;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.sanitize = e.default = void 0;

        var r,
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            a = n(6);

        function u(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function l(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var s = function (t) {
          function e() {
            return u(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, [{
            key: "format",
            value: function value(t, n) {
              if (t !== this.statics.blotName || !n) return i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
              n = this.constructor.sanitize(n), this.domNode.setAttribute("href", n);
            }
          }], [{
            key: "create",
            value: function value(t) {
              var n = i(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
              return t = this.sanitize(t), n.setAttribute("href", t), n.setAttribute("rel", "noopener noreferrer"), n.setAttribute("target", "_blank"), n;
            }
          }, {
            key: "formats",
            value: function value(t) {
              return t.getAttribute("href");
            }
          }, {
            key: "sanitize",
            value: function value(t) {
              return c(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
            }
          }]), e;
        }(((r = a) && r.__esModule ? r : {
          default: r
        }).default);

        function c(t, e) {
          var n = document.createElement("a");
          n.href = t;
          var r = n.href.slice(0, n.href.indexOf(":"));
          return e.indexOf(r) > -1;
        }

        s.blotName = "link", s.tagName = "A", s.SANITIZED_URL = "about:blank", s.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"], e.default = s, e.sanitize = c;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        },
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = u(n(23)),
            a = u(n(107));

        function u(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        var l = 0;

        function s(t, e) {
          t.setAttribute(e, !("true" === t.getAttribute(e)));
        }

        var c = function () {
          function t(e) {
            var n = this;
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function () {
              n.togglePicker();
            }), this.label.addEventListener("keydown", function (t) {
              switch (t.keyCode) {
                case i.default.keys.ENTER:
                  n.togglePicker();
                  break;

                case i.default.keys.ESCAPE:
                  n.escape(), t.preventDefault();
              }
            }), this.select.addEventListener("change", this.update.bind(this));
          }

          return o(t, [{
            key: "togglePicker",
            value: function value() {
              this.container.classList.toggle("ql-expanded"), s(this.label, "aria-expanded"), s(this.options, "aria-hidden");
            }
          }, {
            key: "buildItem",
            value: function value(t) {
              var e = this,
                  n = document.createElement("span");
              return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), t.hasAttribute("value") && n.setAttribute("data-value", t.getAttribute("value")), t.textContent && n.setAttribute("data-label", t.textContent), n.addEventListener("click", function () {
                e.selectItem(n, !0);
              }), n.addEventListener("keydown", function (t) {
                switch (t.keyCode) {
                  case i.default.keys.ENTER:
                    e.selectItem(n, !0), t.preventDefault();
                    break;

                  case i.default.keys.ESCAPE:
                    e.escape(), t.preventDefault();
                }
              }), n;
            }
          }, {
            key: "buildLabel",
            value: function value() {
              var t = document.createElement("span");
              return t.classList.add("ql-picker-label"), t.innerHTML = a.default, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t;
            }
          }, {
            key: "buildOptions",
            value: function value() {
              var t = this,
                  e = document.createElement("span");
              e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e.id = "ql-picker-options-" + l, l += 1, this.label.setAttribute("aria-controls", e.id), this.options = e, [].slice.call(this.select.options).forEach(function (n) {
                var r = t.buildItem(n);
                e.appendChild(r), !0 === n.selected && t.selectItem(r);
              }), this.container.appendChild(e);
            }
          }, {
            key: "buildPicker",
            value: function value() {
              var t = this;
              [].slice.call(this.select.attributes).forEach(function (e) {
                t.container.setAttribute(e.name, e.value);
              }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
            }
          }, {
            key: "escape",
            value: function value() {
              var t = this;
              this.close(), setTimeout(function () {
                return t.label.focus();
              }, 1);
            }
          }, {
            key: "close",
            value: function value() {
              this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
            }
          }, {
            key: "selectItem",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = this.container.querySelector(".ql-selected");

              if (t !== n && (null != n && n.classList.remove("ql-selected"), null != t && (t.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(t.parentNode.children, t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e))) {
                if ("function" == typeof Event) this.select.dispatchEvent(new Event("change"));else if ("object" === ("undefined" == typeof Event ? "undefined" : r(Event))) {
                  var o = document.createEvent("Event");
                  o.initEvent("change", !0, !0), this.select.dispatchEvent(o);
                }
                this.close();
              }
            }
          }, {
            key: "update",
            value: function value() {
              var t = void 0;

              if (this.select.selectedIndex > -1) {
                var e = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                t = this.select.options[this.select.selectedIndex], this.selectItem(e);
              } else this.selectItem(null);

              var n = null != t && t !== this.select.querySelector("option[selected]");
              this.label.classList.toggle("ql-active", n);
            }
          }]), t;
        }();

        e.default = c;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = g(n(0)),
            o = g(n(5)),
            i = n(4),
            a = g(i),
            u = g(n(16)),
            l = g(n(25)),
            s = g(n(24)),
            c = g(n(35)),
            f = g(n(6)),
            h = g(n(22)),
            p = g(n(7)),
            d = g(n(55)),
            y = g(n(42)),
            v = g(n(23));

        function g(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        o.default.register({
          "blots/block": a.default,
          "blots/block/embed": i.BlockEmbed,
          "blots/break": u.default,
          "blots/container": l.default,
          "blots/cursor": s.default,
          "blots/embed": c.default,
          "blots/inline": f.default,
          "blots/scroll": h.default,
          "blots/text": p.default,
          "modules/clipboard": d.default,
          "modules/history": y.default,
          "modules/keyboard": v.default
        }), r.default.register(a.default, u.default, s.default, f.default, h.default, p.default), e.default = o.default;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = n(1),
            o = function () {
          function t(t) {
            this.domNode = t, this.domNode[r.DATA_KEY] = {
              blot: this
            };
          }

          return Object.defineProperty(t.prototype, "statics", {
            get: function get() {
              return this.constructor;
            },
            enumerable: !0,
            configurable: !0
          }), t.create = function (t) {
            if (null == this.tagName) throw new r.ParchmentError("Blot definition missing tagName");
            var e;
            return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(), parseInt(t).toString() === t && (t = parseInt(t))), e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) : this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e;
          }, t.prototype.attach = function () {
            null != this.parent && (this.scroll = this.parent.scroll);
          }, t.prototype.clone = function () {
            var t = this.domNode.cloneNode(!1);
            return r.create(t);
          }, t.prototype.detach = function () {
            null != this.parent && this.parent.removeChild(this), delete this.domNode[r.DATA_KEY];
          }, t.prototype.deleteAt = function (t, e) {
            this.isolate(t, e).remove();
          }, t.prototype.formatAt = function (t, e, n, o) {
            var i = this.isolate(t, e);
            if (null != r.query(n, r.Scope.BLOT) && o) i.wrap(n, o);else if (null != r.query(n, r.Scope.ATTRIBUTE)) {
              var a = r.create(this.statics.scope);
              i.wrap(a), a.format(n, o);
            }
          }, t.prototype.insertAt = function (t, e, n) {
            var o = null == n ? r.create("text", e) : r.create(e, n),
                i = this.split(t);
            this.parent.insertBefore(o, i);
          }, t.prototype.insertInto = function (t, e) {
            void 0 === e && (e = null), null != this.parent && this.parent.children.remove(this);
            var n = null;
            t.children.insertBefore(this, e), null != e && (n = e.domNode), this.domNode.parentNode == t.domNode && this.domNode.nextSibling == n || t.domNode.insertBefore(this.domNode, n), this.parent = t, this.attach();
          }, t.prototype.isolate = function (t, e) {
            var n = this.split(t);
            return n.split(e), n;
          }, t.prototype.length = function () {
            return 1;
          }, t.prototype.offset = function (t) {
            return void 0 === t && (t = this.parent), null == this.parent || this == t ? 0 : this.parent.children.offset(this) + this.parent.offset(t);
          }, t.prototype.optimize = function (t) {
            null != this.domNode[r.DATA_KEY] && delete this.domNode[r.DATA_KEY].mutations;
          }, t.prototype.remove = function () {
            null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach();
          }, t.prototype.replace = function (t) {
            null != t.parent && (t.parent.insertBefore(this, t.next), t.remove());
          }, t.prototype.replaceWith = function (t, e) {
            var n = "string" == typeof t ? r.create(t, e) : t;
            return n.replace(this), n;
          }, t.prototype.split = function (t, e) {
            return 0 === t ? this : this.next;
          }, t.prototype.update = function (t, e) {}, t.prototype.wrap = function (t, e) {
            var n = "string" == typeof t ? r.create(t, e) : t;
            return null != this.parent && this.parent.insertBefore(n, this.next), n.appendChild(this), n;
          }, t.blotName = "abstract", t;
        }();

        e.default = o;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = n(12),
            o = n(32),
            i = n(33),
            a = n(1),
            u = function () {
          function t(t) {
            this.attributes = {}, this.domNode = t, this.build();
          }

          return t.prototype.attribute = function (t, e) {
            e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
          }, t.prototype.build = function () {
            var t = this;
            this.attributes = {};
            var e = r.default.keys(this.domNode),
                n = o.default.keys(this.domNode),
                u = i.default.keys(this.domNode);
            e.concat(n).concat(u).forEach(function (e) {
              var n = a.query(e, a.Scope.ATTRIBUTE);
              n instanceof r.default && (t.attributes[n.attrName] = n);
            });
          }, t.prototype.copy = function (t) {
            var e = this;
            Object.keys(this.attributes).forEach(function (n) {
              var r = e.attributes[n].value(e.domNode);
              t.format(n, r);
            });
          }, t.prototype.move = function (t) {
            var e = this;
            this.copy(t), Object.keys(this.attributes).forEach(function (t) {
              e.attributes[t].remove(e.domNode);
            }), this.attributes = {};
          }, t.prototype.values = function () {
            var t = this;
            return Object.keys(this.attributes).reduce(function (e, n) {
              return e[n] = t.attributes[n].value(t.domNode), e;
            }, {});
          }, t;
        }();

        e.default = u;
      }, function (t, e, n) {
        "use strict";

        var r,
            o = this && this.__extends || (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }
        }, function (t, e) {
          function n() {
            this.constructor = t;
          }

          r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        });

        function i(t, e) {
          return (t.getAttribute("class") || "").split(/\s+/).filter(function (t) {
            return 0 === t.indexOf(e + "-");
          });
        }

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var a = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this;
          }

          return o(e, t), e.keys = function (t) {
            return (t.getAttribute("class") || "").split(/\s+/).map(function (t) {
              return t.split("-").slice(0, -1).join("-");
            });
          }, e.prototype.add = function (t, e) {
            return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(this.keyName + "-" + e), !0);
          }, e.prototype.remove = function (t) {
            i(t, this.keyName).forEach(function (e) {
              t.classList.remove(e);
            }), 0 === t.classList.length && t.removeAttribute("class");
          }, e.prototype.value = function (t) {
            var e = (i(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
            return this.canAdd(t, e) ? e : "";
          }, e;
        }(n(12).default);

        e.default = a;
      }, function (t, e, n) {
        "use strict";

        var r,
            o = this && this.__extends || (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }
        }, function (t, e) {
          function n() {
            this.constructor = t;
          }

          r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        });

        function i(t) {
          var e = t.split("-"),
              n = e.slice(1).map(function (t) {
            return t[0].toUpperCase() + t.slice(1);
          }).join("");
          return e[0] + n;
        }

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var a = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this;
          }

          return o(e, t), e.keys = function (t) {
            return (t.getAttribute("style") || "").split(";").map(function (t) {
              return t.split(":")[0].trim();
            });
          }, e.prototype.add = function (t, e) {
            return !!this.canAdd(t, e) && (t.style[i(this.keyName)] = e, !0);
          }, e.prototype.remove = function (t) {
            t.style[i(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style");
          }, e.prototype.value = function (t) {
            var e = t.style[i(this.keyName)];
            return this.canAdd(t, e) ? e : "";
          }, e;
        }(n(12).default);

        e.default = a;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = function () {
          function t(e, n) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.quill = e, this.options = n, this.modules = {};
          }

          return r(t, [{
            key: "init",
            value: function value() {
              var t = this;
              Object.keys(this.options.modules).forEach(function (e) {
                null == t.modules[e] && t.addModule(e);
              });
            }
          }, {
            key: "addModule",
            value: function value(t) {
              var e = this.quill.constructor.import("modules/" + t);
              return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t];
            }
          }]), t;
        }();

        o.DEFAULTS = {
          modules: {}
        }, o.themes = {
          default: o
        }, e.default = o;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = a(n(0)),
            i = a(n(7));

        function a(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        var u = function (t) {
          function e(t) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);

            var n = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));

            return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), [].slice.call(n.domNode.childNodes).forEach(function (t) {
              n.contentNode.appendChild(t);
            }), n.leftGuard = document.createTextNode("\uFEFF"), n.rightGuard = document.createTextNode("\uFEFF"), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n;
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), r(e, [{
            key: "index",
            value: function value(t, n) {
              return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);

                if (void 0 === o) {
                  var i = Object.getPrototypeOf(e);
                  return null === i ? void 0 : t(i, n, r);
                }

                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0;
              }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n);
            }
          }, {
            key: "restore",
            value: function value(t) {
              var e = void 0,
                  n = void 0,
                  r = t.data.split("\uFEFF").join("");
              if (t === this.leftGuard) {
                if (this.prev instanceof i.default) {
                  var a = this.prev.length();
                  this.prev.insertAt(a, r), e = {
                    startNode: this.prev.domNode,
                    startOffset: a + r.length
                  };
                } else n = document.createTextNode(r), this.parent.insertBefore(o.default.create(n), this), e = {
                  startNode: n,
                  startOffset: r.length
                };
              } else t === this.rightGuard && (this.next instanceof i.default ? (this.next.insertAt(0, r), e = {
                startNode: this.next.domNode,
                startOffset: r.length
              }) : (n = document.createTextNode(r), this.parent.insertBefore(o.default.create(n), this.next), e = {
                startNode: n,
                startOffset: r.length
              }));
              return t.data = "\uFEFF", e;
            }
          }, {
            key: "update",
            value: function value(t, e) {
              var n = this;
              t.forEach(function (t) {
                if ("characterData" === t.type && (t.target === n.leftGuard || t.target === n.rightGuard)) {
                  var r = n.restore(t.target);
                  r && (e.range = r);
                }
              });
            }
          }]), e;
        }(o.default.Embed);

        e.default = u;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0;
        var r,
            o = n(0),
            i = (r = o) && r.__esModule ? r : {
          default: r
        },
            a = {
          scope: i.default.Scope.BLOCK,
          whitelist: ["right", "center", "justify"]
        },
            u = new i.default.Attributor.Attribute("align", "align", a),
            l = new i.default.Attributor.Class("align", "ql-align", a),
            s = new i.default.Attributor.Style("align", "text-align", a);
        e.AlignAttribute = u, e.AlignClass = l, e.AlignStyle = s;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.BackgroundStyle = e.BackgroundClass = void 0;
        var r,
            o = n(0),
            i = (r = o) && r.__esModule ? r : {
          default: r
        },
            a = n(26),
            u = new i.default.Attributor.Class("background", "ql-bg", {
          scope: i.default.Scope.INLINE
        }),
            l = new a.ColorAttributor("background", "background-color", {
          scope: i.default.Scope.INLINE
        });
        e.BackgroundClass = u, e.BackgroundStyle = l;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.DirectionStyle = e.DirectionClass = e.DirectionAttribute = void 0;
        var r,
            o = n(0),
            i = (r = o) && r.__esModule ? r : {
          default: r
        },
            a = {
          scope: i.default.Scope.BLOCK,
          whitelist: ["rtl"]
        },
            u = new i.default.Attributor.Attribute("direction", "dir", a),
            l = new i.default.Attributor.Class("direction", "ql-direction", a),
            s = new i.default.Attributor.Style("direction", "direction", a);
        e.DirectionAttribute = u, e.DirectionClass = l, e.DirectionStyle = s;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.FontClass = e.FontStyle = void 0;

        var r,
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = n(0),
            a = (r = i) && r.__esModule ? r : {
          default: r
        };

        function u(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function l(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var s = {
          scope: a.default.Scope.INLINE,
          whitelist: ["serif", "monospace"]
        },
            c = new a.default.Attributor.Class("font", "ql-font", s),
            f = new (function (t) {
          function e() {
            return u(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, [{
            key: "value",
            value: function value(t) {
              return function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);

                if (void 0 === o) {
                  var i = Object.getPrototypeOf(e);
                  return null === i ? void 0 : t(i, n, r);
                }

                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0;
              }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t).replace(/["']/g, "");
            }
          }]), e;
        }(a.default.Attributor.Style))("font", "font-family", s);
        e.FontStyle = f, e.FontClass = c;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.SizeStyle = e.SizeClass = void 0;
        var r,
            o = n(0),
            i = (r = o) && r.__esModule ? r : {
          default: r
        },
            a = new i.default.Attributor.Class("size", "ql-size", {
          scope: i.default.Scope.INLINE,
          whitelist: ["small", "large", "huge"]
        }),
            u = new i.default.Attributor.Style("size", "font-size", {
          scope: i.default.Scope.INLINE,
          whitelist: ["10px", "18px", "32px"]
        });
        e.SizeClass = a, e.SizeStyle = u;
      }, function (t, e, n) {
        "use strict";

        t.exports = {
          align: {
            "": n(76),
            center: n(77),
            right: n(78),
            justify: n(79)
          },
          background: n(80),
          blockquote: n(81),
          bold: n(82),
          clean: n(83),
          code: n(58),
          "code-block": n(58),
          color: n(84),
          direction: {
            "": n(85),
            rtl: n(86)
          },
          float: {
            center: n(87),
            full: n(88),
            left: n(89),
            right: n(90)
          },
          formula: n(91),
          header: {
            1: n(92),
            2: n(93)
          },
          italic: n(94),
          image: n(95),
          indent: {
            "+1": n(96),
            "-1": n(97)
          },
          link: n(98),
          list: {
            ordered: n(99),
            bullet: n(100),
            check: n(101)
          },
          script: {
            sub: n(102),
            super: n(103)
          },
          strike: n(104),
          underline: n(105),
          video: n(106)
        };
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.getLastChangeIndex = e.default = void 0;

        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = a(n(0)),
            i = a(n(5));

        function a(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        var u = function (t) {
          function e(t, n) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);

            var r = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));

            return r.lastRecorded = 0, r.ignoreChange = !1, r.clear(), r.quill.on(i.default.events.EDITOR_CHANGE, function (t, e, n, o) {
              t !== i.default.events.TEXT_CHANGE || r.ignoreChange || (r.options.userOnly && o !== i.default.sources.USER ? r.transform(e) : r.record(e, n));
            }), r.quill.keyboard.addBinding({
              key: "Z",
              shortKey: !0
            }, r.undo.bind(r)), r.quill.keyboard.addBinding({
              key: "Z",
              shortKey: !0,
              shiftKey: !0
            }, r.redo.bind(r)), /Win/i.test(navigator.platform) && r.quill.keyboard.addBinding({
              key: "Y",
              shortKey: !0
            }, r.redo.bind(r)), r;
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), r(e, [{
            key: "change",
            value: function value(t, e) {
              if (0 !== this.stack[t].length) {
                var n = this.stack[t].pop();
                this.stack[e].push(n), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n[t], i.default.sources.USER), this.ignoreChange = !1;
                var r = l(n[t]);
                this.quill.setSelection(r);
              }
            }
          }, {
            key: "clear",
            value: function value() {
              this.stack = {
                undo: [],
                redo: []
              };
            }
          }, {
            key: "cutoff",
            value: function value() {
              this.lastRecorded = 0;
            }
          }, {
            key: "record",
            value: function value(t, e) {
              if (0 !== t.ops.length) {
                this.stack.redo = [];
                var n = this.quill.getContents().diff(e),
                    r = Date.now();

                if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
                  var o = this.stack.undo.pop();
                  n = n.compose(o.undo), t = o.redo.compose(t);
                } else this.lastRecorded = r;

                this.stack.undo.push({
                  redo: t,
                  undo: n
                }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
              }
            }
          }, {
            key: "redo",
            value: function value() {
              this.change("redo", "undo");
            }
          }, {
            key: "transform",
            value: function value(t) {
              this.stack.undo.forEach(function (e) {
                e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0);
              }), this.stack.redo.forEach(function (e) {
                e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0);
              });
            }
          }, {
            key: "undo",
            value: function value() {
              this.change("undo", "redo");
            }
          }]), e;
        }(a(n(9)).default);

        function l(t) {
          var e = t.reduce(function (t, e) {
            return t += e.delete || 0;
          }, 0),
              n = t.length() - e;
          return function (t) {
            var e = t.ops[t.ops.length - 1];
            return null != e && (null != e.insert ? "string" == typeof e.insert && e.insert.endsWith("\n") : null != e.attributes && Object.keys(e.attributes).some(function (t) {
              return null != o.default.query(t, o.default.Scope.BLOCK);
            }));
          }(t) && (n -= 1), n;
        }

        u.DEFAULTS = {
          delay: 1e3,
          maxStack: 100,
          userOnly: !1
        }, e.default = u, e.getLastChangeIndex = l;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = e.BaseTooltip = void 0;

        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = p(n(3)),
            i = p(n(2)),
            a = p(n(8)),
            u = p(n(23)),
            l = p(n(34)),
            s = p(n(59)),
            c = p(n(60)),
            f = p(n(28)),
            h = p(n(61));

        function p(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function d(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function y(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        function v(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        var g = [!1, "center", "right", "justify"],
            b = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"],
            m = [!1, "serif", "monospace"],
            w = ["1", "2", "3", !1],
            _ = ["small", !1, "large", "huge"],
            x = function (t) {
          function e(t, n) {
            d(this, e);
            var r = y(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return t.emitter.listenDOM("click", document.body, function e(n) {
              if (!document.body.contains(t.root)) return document.body.removeEventListener("click", e);
              null == r.tooltip || r.tooltip.root.contains(n.target) || document.activeElement === r.tooltip.textbox || r.quill.hasFocus() || r.tooltip.hide(), null != r.pickers && r.pickers.forEach(function (t) {
                t.container.contains(n.target) || t.close();
              });
            }), r;
          }

          return v(e, t), r(e, [{
            key: "addModule",
            value: function value(t) {
              var n = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);

                if (void 0 === o) {
                  var i = Object.getPrototypeOf(e);
                  return null === i ? void 0 : t(i, n, r);
                }

                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0;
              }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "addModule", this).call(this, t);

              return "toolbar" === t && this.extendToolbar(n), n;
            }
          }, {
            key: "buildButtons",
            value: function value(t, e) {
              t.forEach(function (t) {
                (t.getAttribute("class") || "").split(/\s+/).forEach(function (n) {
                  if (n.startsWith("ql-") && (n = n.slice("ql-".length), null != e[n])) if ("direction" === n) t.innerHTML = e[n][""] + e[n].rtl;else if ("string" == typeof e[n]) t.innerHTML = e[n];else {
                    var r = t.value || "";
                    null != r && e[n][r] && (t.innerHTML = e[n][r]);
                  }
                });
              });
            }
          }, {
            key: "buildPickers",
            value: function value(t, e) {
              var n = this;
              this.pickers = t.map(function (t) {
                if (t.classList.contains("ql-align")) return null == t.querySelector("option") && E(t, g), new c.default(t, e.align);

                if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
                  var n = t.classList.contains("ql-background") ? "background" : "color";
                  return null == t.querySelector("option") && E(t, b, "background" === n ? "#ffffff" : "#000000"), new s.default(t, e[n]);
                }

                return null == t.querySelector("option") && (t.classList.contains("ql-font") ? E(t, m) : t.classList.contains("ql-header") ? E(t, w) : t.classList.contains("ql-size") && E(t, _)), new f.default(t);
              }), this.quill.on(a.default.events.EDITOR_CHANGE, function () {
                n.pickers.forEach(function (t) {
                  t.update();
                });
              });
            }
          }]), e;
        }(l.default);

        x.DEFAULTS = (0, o.default)(!0, {}, l.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                formula: function formula() {
                  this.quill.theme.tooltip.edit("formula");
                },
                image: function image() {
                  var t = this,
                      e = this.container.querySelector("input.ql-image[type=file]");
                  null == e && ((e = document.createElement("input")).setAttribute("type", "file"), e.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), e.classList.add("ql-image"), e.addEventListener("change", function () {
                    if (null != e.files && null != e.files[0]) {
                      var n = new FileReader();
                      n.onload = function (n) {
                        var r = t.quill.getSelection(!0);
                        t.quill.updateContents(new i.default().retain(r.index).delete(r.length).insert({
                          image: n.target.result
                        }), a.default.sources.USER), t.quill.setSelection(r.index + 1, a.default.sources.SILENT), e.value = "";
                      }, n.readAsDataURL(e.files[0]);
                    }
                  }), this.container.appendChild(e)), e.click();
                },
                video: function video() {
                  this.quill.theme.tooltip.edit("video");
                }
              }
            }
          }
        });

        var O = function (t) {
          function e(t, n) {
            d(this, e);
            var r = y(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return r.textbox = r.root.querySelector('input[type="text"]'), r.listen(), r;
          }

          return v(e, t), r(e, [{
            key: "listen",
            value: function value() {
              var t = this;
              this.textbox.addEventListener("keydown", function (e) {
                u.default.match(e, "enter") ? (t.save(), e.preventDefault()) : u.default.match(e, "escape") && (t.cancel(), e.preventDefault());
              });
            }
          }, {
            key: "cancel",
            value: function value() {
              this.hide();
            }
          }, {
            key: "edit",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link",
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != e ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + t) || ""), this.root.setAttribute("data-mode", t);
            }
          }, {
            key: "restoreFocus",
            value: function value() {
              var t = this.quill.scrollingContainer.scrollTop;
              this.quill.focus(), this.quill.scrollingContainer.scrollTop = t;
            }
          }, {
            key: "save",
            value: function value() {
              var t,
                  e,
                  n = this.textbox.value;

              switch (this.root.getAttribute("data-mode")) {
                case "link":
                  var r = this.quill.root.scrollTop;
                  this.linkRange ? (this.quill.formatText(this.linkRange, "link", n, a.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", n, a.default.sources.USER)), this.quill.root.scrollTop = r;
                  break;

                case "video":
                  e = (t = n).match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/), n = e ? (e[1] || "https") + "://www.youtube.com/embed/" + e[2] + "?showinfo=0" : (e = t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (e[1] || "https") + "://player.vimeo.com/video/" + e[2] + "/" : t;

                case "formula":
                  if (!n) break;
                  var o = this.quill.getSelection(!0);

                  if (null != o) {
                    var i = o.index + o.length;
                    this.quill.insertEmbed(i, this.root.getAttribute("data-mode"), n, a.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(i + 1, " ", a.default.sources.USER), this.quill.setSelection(i + 2, a.default.sources.USER);
                  }

              }

              this.textbox.value = "", this.hide();
            }
          }]), e;
        }(h.default);

        function E(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          e.forEach(function (e) {
            var r = document.createElement("option");
            e === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", e), t.appendChild(r);
          });
        }

        e.BaseTooltip = O, e.default = x;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = function () {
          function t() {
            this.head = this.tail = null, this.length = 0;
          }

          return t.prototype.append = function () {
            for (var t = [], e = 0; e < arguments.length; e++) {
              t[e] = arguments[e];
            }

            this.insertBefore(t[0], null), t.length > 1 && this.append.apply(this, t.slice(1));
          }, t.prototype.contains = function (t) {
            for (var e, n = this.iterator(); e = n();) {
              if (e === t) return !0;
            }

            return !1;
          }, t.prototype.insertBefore = function (t, e) {
            t && (t.next = e, null != e ? (t.prev = e.prev, null != e.prev && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1);
          }, t.prototype.offset = function (t) {
            for (var e = 0, n = this.head; null != n;) {
              if (n === t) return e;
              e += n.length(), n = n.next;
            }

            return -1;
          }, t.prototype.remove = function (t) {
            this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1);
          }, t.prototype.iterator = function (t) {
            return void 0 === t && (t = this.head), function () {
              var e = t;
              return null != t && (t = t.next), e;
            };
          }, t.prototype.find = function (t, e) {
            void 0 === e && (e = !1);

            for (var n, r = this.iterator(); n = r();) {
              var o = n.length();
              if (t < o || e && t === o && (null == n.next || 0 !== n.next.length())) return [n, t];
              t -= o;
            }

            return [null, 0];
          }, t.prototype.forEach = function (t) {
            for (var e, n = this.iterator(); e = n();) {
              t(e);
            }
          }, t.prototype.forEachAt = function (t, e, n) {
            if (!(e <= 0)) for (var r, o = this.find(t), i = o[0], a = t - o[1], u = this.iterator(i); (r = u()) && a < t + e;) {
              var l = r.length();
              t > a ? n(r, t - a, Math.min(e, a + l - t)) : n(r, 0, Math.min(l, t + e - a)), a += l;
            }
          }, t.prototype.map = function (t) {
            return this.reduce(function (e, n) {
              return e.push(t(n)), e;
            }, []);
          }, t.prototype.reduce = function (t, e) {
            for (var n, r = this.iterator(); n = r();) {
              e = t(e, n);
            }

            return e;
          }, t;
        }();

        e.default = r;
      }, function (t, e, n) {
        "use strict";

        var r,
            o = this && this.__extends || (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }
        }, function (t, e) {
          function n() {
            this.constructor = t;
          }

          r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        });
        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var i = n(17),
            a = n(1),
            u = {
          attributes: !0,
          characterData: !0,
          characterDataOldValue: !0,
          childList: !0,
          subtree: !0
        },
            l = function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return n.scroll = n, n.observer = new MutationObserver(function (t) {
              n.update(t);
            }), n.observer.observe(n.domNode, u), n.attach(), n;
          }

          return o(e, t), e.prototype.detach = function () {
            t.prototype.detach.call(this), this.observer.disconnect();
          }, e.prototype.deleteAt = function (e, n) {
            this.update(), 0 === e && n === this.length() ? this.children.forEach(function (t) {
              t.remove();
            }) : t.prototype.deleteAt.call(this, e, n);
          }, e.prototype.formatAt = function (e, n, r, o) {
            this.update(), t.prototype.formatAt.call(this, e, n, r, o);
          }, e.prototype.insertAt = function (e, n, r) {
            this.update(), t.prototype.insertAt.call(this, e, n, r);
          }, e.prototype.optimize = function (e, n) {
            var r = this;
            void 0 === e && (e = []), void 0 === n && (n = {}), t.prototype.optimize.call(this, n);

            for (var o = [].slice.call(this.observer.takeRecords()); o.length > 0;) {
              e.push(o.pop());
            }

            for (var u = function u(t, e) {
              void 0 === e && (e = !0), null != t && t !== r && null != t.domNode.parentNode && (null == t.domNode[a.DATA_KEY].mutations && (t.domNode[a.DATA_KEY].mutations = []), e && u(t.parent));
            }, l = function l(t) {
              null != t.domNode[a.DATA_KEY] && null != t.domNode[a.DATA_KEY].mutations && (t instanceof i.default && t.children.forEach(l), t.optimize(n));
            }, s = e, c = 0; s.length > 0; c += 1) {
              if (c >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");

              for (s.forEach(function (t) {
                var e = a.find(t.target, !0);
                null != e && (e.domNode === t.target && ("childList" === t.type ? (u(a.find(t.previousSibling, !1)), [].forEach.call(t.addedNodes, function (t) {
                  var e = a.find(t, !1);
                  u(e, !1), e instanceof i.default && e.children.forEach(function (t) {
                    u(t, !1);
                  });
                })) : "attributes" === t.type && u(e.prev)), u(e));
              }), this.children.forEach(l), o = (s = [].slice.call(this.observer.takeRecords())).slice(); o.length > 0;) {
                e.push(o.pop());
              }
            }
          }, e.prototype.update = function (e, n) {
            var r = this;
            void 0 === n && (n = {}), (e = e || this.observer.takeRecords()).map(function (t) {
              var e = a.find(t.target, !0);
              return null == e ? null : null == e.domNode[a.DATA_KEY].mutations ? (e.domNode[a.DATA_KEY].mutations = [t], e) : (e.domNode[a.DATA_KEY].mutations.push(t), null);
            }).forEach(function (t) {
              null != t && t !== r && null != t.domNode[a.DATA_KEY] && t.update(t.domNode[a.DATA_KEY].mutations || [], n);
            }), null != this.domNode[a.DATA_KEY].mutations && t.prototype.update.call(this, this.domNode[a.DATA_KEY].mutations, n), this.optimize(e, n);
          }, e.blotName = "scroll", e.defaultChild = "block", e.scope = a.Scope.BLOCK_BLOT, e.tagName = "DIV", e;
        }(i.default);

        e.default = l;
      }, function (t, e, n) {
        "use strict";

        var r,
            o = this && this.__extends || (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }
        }, function (t, e) {
          function n() {
            this.constructor = t;
          }

          r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        });
        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var i = n(18),
            a = n(1),
            u = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this;
          }

          return o(e, t), e.formats = function (n) {
            if (n.tagName !== e.tagName) return t.formats.call(this, n);
          }, e.prototype.format = function (n, r) {
            var o = this;
            n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : (this.children.forEach(function (t) {
              t instanceof i.default || (t = t.wrap(e.blotName, !0)), o.attributes.copy(t);
            }), this.unwrap());
          }, e.prototype.formatAt = function (e, n, r, o) {
            null != this.formats()[r] || a.query(r, a.Scope.ATTRIBUTE) ? this.isolate(e, n).format(r, o) : t.prototype.formatAt.call(this, e, n, r, o);
          }, e.prototype.optimize = function (n) {
            t.prototype.optimize.call(this, n);
            var r = this.formats();
            if (0 === Object.keys(r).length) return this.unwrap();
            var o = this.next;
            o instanceof e && o.prev === this && function (t, e) {
              if (Object.keys(t).length !== Object.keys(e).length) return !1;

              for (var n in t) {
                if (t[n] !== e[n]) return !1;
              }

              return !0;
            }(r, o.formats()) && (o.moveChildren(this), o.remove());
          }, e.blotName = "inline", e.scope = a.Scope.INLINE_BLOT, e.tagName = "SPAN", e;
        }(i.default);

        e.default = u;
      }, function (t, e, n) {
        "use strict";

        var r,
            o = this && this.__extends || (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }
        }, function (t, e) {
          function n() {
            this.constructor = t;
          }

          r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        });
        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var i = n(18),
            a = n(1),
            u = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this;
          }

          return o(e, t), e.formats = function (n) {
            var r = a.query(e.blotName).tagName;
            if (n.tagName !== r) return t.formats.call(this, n);
          }, e.prototype.format = function (n, r) {
            null != a.query(n, a.Scope.BLOCK) && (n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : this.replaceWith(e.blotName));
          }, e.prototype.formatAt = function (e, n, r, o) {
            null != a.query(r, a.Scope.BLOCK) ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o);
          }, e.prototype.insertAt = function (e, n, r) {
            if (null == r || null != a.query(n, a.Scope.INLINE)) t.prototype.insertAt.call(this, e, n, r);else {
              var o = this.split(e),
                  i = a.create(n, r);
              o.parent.insertBefore(i, o);
            }
          }, e.prototype.update = function (e, n) {
            navigator.userAgent.match(/Trident/) ? this.build() : t.prototype.update.call(this, e, n);
          }, e.blotName = "block", e.scope = a.Scope.BLOCK_BLOT, e.tagName = "P", e;
        }(i.default);

        e.default = u;
      }, function (t, e, n) {
        "use strict";

        var r,
            o = this && this.__extends || (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }
        }, function (t, e) {
          function n() {
            this.constructor = t;
          }

          r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        });
        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var i = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this;
          }

          return o(e, t), e.formats = function (t) {}, e.prototype.format = function (e, n) {
            t.prototype.formatAt.call(this, 0, this.length(), e, n);
          }, e.prototype.formatAt = function (e, n, r, o) {
            0 === e && n === this.length() ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o);
          }, e.prototype.formats = function () {
            return this.statics.formats(this.domNode);
          }, e;
        }(n(19).default);

        e.default = i;
      }, function (t, e, n) {
        "use strict";

        var r,
            o = this && this.__extends || (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var n in e) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
          }
        }, function (t, e) {
          function n() {
            this.constructor = t;
          }

          r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
        });
        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var i = n(19),
            a = n(1),
            u = function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return n.text = n.statics.value(n.domNode), n;
          }

          return o(e, t), e.create = function (t) {
            return document.createTextNode(t);
          }, e.value = function (t) {
            var e = t.data;
            return e.normalize && (e = e.normalize()), e;
          }, e.prototype.deleteAt = function (t, e) {
            this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e);
          }, e.prototype.index = function (t, e) {
            return this.domNode === t ? e : -1;
          }, e.prototype.insertAt = function (e, n, r) {
            null == r ? (this.text = this.text.slice(0, e) + n + this.text.slice(e), this.domNode.data = this.text) : t.prototype.insertAt.call(this, e, n, r);
          }, e.prototype.length = function () {
            return this.text.length;
          }, e.prototype.optimize = function (n) {
            t.prototype.optimize.call(this, n), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
          }, e.prototype.position = function (t, e) {
            return void 0 === e && (e = !1), [this.domNode, t];
          }, e.prototype.split = function (t, e) {
            if (void 0 === e && (e = !1), !e) {
              if (0 === t) return this;
              if (t === this.length()) return this.next;
            }

            var n = a.create(this.domNode.splitText(t));
            return this.parent.insertBefore(n, this.next), this.text = this.statics.value(this.domNode), n;
          }, e.prototype.update = function (t, e) {
            var n = this;
            t.some(function (t) {
              return "characterData" === t.type && t.target === n.domNode;
            }) && (this.text = this.statics.value(this.domNode));
          }, e.prototype.value = function () {
            return this.text;
          }, e.blotName = "text", e.scope = a.Scope.INLINE_BLOT, e;
        }(i.default);

        e.default = u;
      }, function (t, e, n) {
        "use strict";

        var r = document.createElement("div");

        if (r.classList.toggle("test-class", !1), r.classList.contains("test-class")) {
          var o = DOMTokenList.prototype.toggle;

          DOMTokenList.prototype.toggle = function (t, e) {
            return arguments.length > 1 && !this.contains(t) == !e ? e : o.call(this, t);
          };
        }

        String.prototype.startsWith || (String.prototype.startsWith = function (t, e) {
          return e = e || 0, this.substr(e, t.length) === t;
        }), String.prototype.endsWith || (String.prototype.endsWith = function (t, e) {
          var n = this.toString();
          ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length), e -= t.length;
          var r = n.indexOf(t, e);
          return -1 !== r && r === e;
        }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
          value: function value(t) {
            if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
            if ("function" != typeof t) throw new TypeError("predicate must be a function");

            for (var e, n = Object(this), r = n.length >>> 0, o = arguments[1], i = 0; i < r; i++) {
              if (e = n[i], t.call(o, e, i, n)) return e;
            }
          }
        }), document.addEventListener("DOMContentLoaded", function () {
          document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1);
        });
      }, function (t, e) {
        function n(t, e, a) {
          if (t == e) return t ? [[0, t]] : [];
          (a < 0 || t.length < a) && (a = null);
          var l = o(t, e),
              s = t.substring(0, l);
          l = i(t = t.substring(l), e = e.substring(l));

          var c = t.substring(t.length - l),
              f = function (t, e) {
            var a;
            if (!t) return [[1, e]];
            if (!e) return [[-1, t]];
            var u = t.length > e.length ? t : e,
                l = t.length > e.length ? e : t,
                s = u.indexOf(l);
            if (-1 != s) return a = [[1, u.substring(0, s)], [0, l], [1, u.substring(s + l.length)]], t.length > e.length && (a[0][0] = a[2][0] = -1), a;
            if (1 == l.length) return [[-1, t], [1, e]];

            var c = function (t, e) {
              var n = t.length > e.length ? t : e,
                  r = t.length > e.length ? e : t;
              if (n.length < 4 || 2 * r.length < n.length) return null;

              function a(t, e, n) {
                for (var r, a, u, l, s = t.substring(n, n + Math.floor(t.length / 4)), c = -1, f = ""; -1 != (c = e.indexOf(s, c + 1));) {
                  var h = o(t.substring(n), e.substring(c)),
                      p = i(t.substring(0, n), e.substring(0, c));
                  f.length < p + h && (f = e.substring(c - p, c) + e.substring(c, c + h), r = t.substring(0, n - p), a = t.substring(n + h), u = e.substring(0, c - p), l = e.substring(c + h));
                }

                return 2 * f.length >= t.length ? [r, a, u, l, f] : null;
              }

              var u,
                  l,
                  s,
                  c,
                  f,
                  h = a(n, r, Math.ceil(n.length / 4)),
                  p = a(n, r, Math.ceil(n.length / 2));
              if (!h && !p) return null;
              u = p ? h && h[4].length > p[4].length ? h : p : h, t.length > e.length ? (l = u[0], s = u[1], c = u[2], f = u[3]) : (c = u[0], f = u[1], l = u[2], s = u[3]);
              var d = u[4];
              return [l, s, c, f, d];
            }(t, e);

            if (c) {
              var f = c[0],
                  h = c[1],
                  p = c[2],
                  d = c[3],
                  y = c[4],
                  v = n(f, p),
                  g = n(h, d);
              return v.concat([[0, y]], g);
            }

            return function (t, e) {
              for (var n = t.length, o = e.length, i = Math.ceil((n + o) / 2), a = i, u = 2 * i, l = new Array(u), s = new Array(u), c = 0; c < u; c++) {
                l[c] = -1, s[c] = -1;
              }

              l[a + 1] = 0, s[a + 1] = 0;

              for (var f = n - o, h = f % 2 != 0, p = 0, d = 0, y = 0, v = 0, g = 0; g < i; g++) {
                for (var b = -g + p; b <= g - d; b += 2) {
                  for (var m = a + b, w = (S = b == -g || b != g && l[m - 1] < l[m + 1] ? l[m + 1] : l[m - 1] + 1) - b; S < n && w < o && t.charAt(S) == e.charAt(w);) {
                    S++, w++;
                  }

                  if (l[m] = S, S > n) d += 2;else if (w > o) p += 2;else if (h && (O = a + f - b) >= 0 && O < u && -1 != s[O]) {
                    var _ = n - s[O];

                    if (S >= _) return r(t, e, S, w);
                  }
                }

                for (var x = -g + y; x <= g - v; x += 2) {
                  for (var O = a + x, E = (_ = x == -g || x != g && s[O - 1] < s[O + 1] ? s[O + 1] : s[O - 1] + 1) - x; _ < n && E < o && t.charAt(n - _ - 1) == e.charAt(o - E - 1);) {
                    _++, E++;
                  }

                  if (s[O] = _, _ > n) v += 2;else if (E > o) y += 2;else if (!h && (m = a + f - x) >= 0 && m < u && -1 != l[m]) {
                    var S = l[m];
                    if (w = a + S - m, S >= (_ = n - _)) return r(t, e, S, w);
                  }
                }
              }

              return [[-1, t], [1, e]];
            }(t, e);
          }(t = t.substring(0, t.length - l), e = e.substring(0, e.length - l));

          return s && f.unshift([0, s]), c && f.push([0, c]), function t(e) {
            e.push([0, ""]);

            for (var n, r = 0, a = 0, u = 0, l = "", s = ""; r < e.length;) {
              switch (e[r][0]) {
                case 1:
                  u++, s += e[r][1], r++;
                  break;

                case -1:
                  a++, l += e[r][1], r++;
                  break;

                case 0:
                  a + u > 1 ? (0 !== a && 0 !== u && (0 !== (n = o(s, l)) && (r - a - u > 0 && 0 == e[r - a - u - 1][0] ? e[r - a - u - 1][1] += s.substring(0, n) : (e.splice(0, 0, [0, s.substring(0, n)]), r++), s = s.substring(n), l = l.substring(n)), 0 !== (n = i(s, l)) && (e[r][1] = s.substring(s.length - n) + e[r][1], s = s.substring(0, s.length - n), l = l.substring(0, l.length - n))), 0 === a ? e.splice(r - u, a + u, [1, s]) : 0 === u ? e.splice(r - a, a + u, [-1, l]) : e.splice(r - a - u, a + u, [-1, l], [1, s]), r = r - a - u + (a ? 1 : 0) + (u ? 1 : 0) + 1) : 0 !== r && 0 == e[r - 1][0] ? (e[r - 1][1] += e[r][1], e.splice(r, 1)) : r++, u = 0, a = 0, l = "", s = "";
              }
            }

            "" === e[e.length - 1][1] && e.pop();
            var c = !1;

            for (r = 1; r < e.length - 1;) {
              0 == e[r - 1][0] && 0 == e[r + 1][0] && (e[r][1].substring(e[r][1].length - e[r - 1][1].length) == e[r - 1][1] ? (e[r][1] = e[r - 1][1] + e[r][1].substring(0, e[r][1].length - e[r - 1][1].length), e[r + 1][1] = e[r - 1][1] + e[r + 1][1], e.splice(r - 1, 1), c = !0) : e[r][1].substring(0, e[r + 1][1].length) == e[r + 1][1] && (e[r - 1][1] += e[r + 1][1], e[r][1] = e[r][1].substring(e[r + 1][1].length) + e[r + 1][1], e.splice(r + 1, 1), c = !0)), r++;
            }

            c && t(e);
          }(f), null != a && (f = function (t, e) {
            var n = function (t, e) {
              if (0 === e) return [0, t];

              for (var n = 0, r = 0; r < t.length; r++) {
                var o = t[r];

                if (-1 === o[0] || 0 === o[0]) {
                  var i = n + o[1].length;
                  if (e === i) return [r + 1, t];

                  if (e < i) {
                    t = t.slice();
                    var a = e - n,
                        u = [o[0], o[1].slice(0, a)],
                        l = [o[0], o[1].slice(a)];
                    return t.splice(r, 1, u, l), [r + 1, t];
                  }

                  n = i;
                }
              }

              throw new Error("cursor_pos is out of bounds!");
            }(t, e),
                r = n[1],
                o = n[0],
                i = r[o],
                a = r[o + 1];

            if (null == i) return t;
            if (0 !== i[0]) return t;
            if (null != a && i[1] + a[1] === a[1] + i[1]) return r.splice(o, 2, a, i), u(r, o, 2);

            if (null != a && 0 === a[1].indexOf(i[1])) {
              r.splice(o, 2, [a[0], i[1]], [0, i[1]]);
              var l = a[1].slice(i[1].length);
              return l.length > 0 && r.splice(o + 2, 0, [a[0], l]), u(r, o, 3);
            }

            return t;
          }(f, a)), f = function (t) {
            for (var e = !1, n = function n(t) {
              return t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343;
            }, r = 2; r < t.length; r += 1) {
              0 === t[r - 2][0] && (o = t[r - 2][1]).charCodeAt(o.length - 1) >= 55296 && o.charCodeAt(o.length - 1) <= 56319 && -1 === t[r - 1][0] && n(t[r - 1][1]) && 1 === t[r][0] && n(t[r][1]) && (e = !0, t[r - 1][1] = t[r - 2][1].slice(-1) + t[r - 1][1], t[r][1] = t[r - 2][1].slice(-1) + t[r][1], t[r - 2][1] = t[r - 2][1].slice(0, -1));
            }

            var o;
            if (!e) return t;
            var i = [];

            for (r = 0; r < t.length; r += 1) {
              t[r][1].length > 0 && i.push(t[r]);
            }

            return i;
          }(f);
        }

        function r(t, e, r, o) {
          var i = t.substring(0, r),
              a = e.substring(0, o),
              u = t.substring(r),
              l = e.substring(o),
              s = n(i, a),
              c = n(u, l);
          return s.concat(c);
        }

        function o(t, e) {
          if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;

          for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) {
            t.substring(i, o) == e.substring(i, o) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
          }

          return o;
        }

        function i(t, e) {
          if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;

          for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) {
            t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
          }

          return o;
        }

        var a = n;

        function u(t, e, n) {
          for (var r = e + n - 1; r >= 0 && r >= e - 1; r--) {
            if (r + 1 < t.length) {
              var o = t[r],
                  i = t[r + 1];
              o[0] === i[1] && t.splice(r, 2, [o[0], o[1] + i[1]]);
            }
          }

          return t;
        }

        a.INSERT = 1, a.DELETE = -1, a.EQUAL = 0, t.exports = a;
      }, function (t, e) {
        function n(t) {
          var e = [];

          for (var n in t) {
            e.push(n);
          }

          return e;
        }

        (t.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n;
      }, function (t, e) {
        var n = "[object Arguments]" == function () {
          return Object.prototype.toString.call(arguments);
        }();

        function r(t) {
          return "[object Arguments]" == Object.prototype.toString.call(t);
        }

        function o(t) {
          return t && "object" == _typeof(t) && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1;
        }

        (e = t.exports = n ? r : o).supported = r, e.unsupported = o;
      }, function (t, e) {
        "use strict";

        var n = Object.prototype.hasOwnProperty,
            r = "~";

        function o() {}

        function i(t, e, n) {
          this.fn = t, this.context = e, this.once = n || !1;
        }

        function a() {
          this._events = new o(), this._eventsCount = 0;
        }

        Object.create && (o.prototype = Object.create(null), new o().__proto__ || (r = !1)), a.prototype.eventNames = function () {
          var t,
              e,
              o = [];
          if (0 === this._eventsCount) return o;

          for (e in t = this._events) {
            n.call(t, e) && o.push(r ? e.slice(1) : e);
          }

          return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(t)) : o;
        }, a.prototype.listeners = function (t, e) {
          var n = r ? r + t : t,
              o = this._events[n];
          if (e) return !!o;
          if (!o) return [];
          if (o.fn) return [o.fn];

          for (var i = 0, a = o.length, u = new Array(a); i < a; i++) {
            u[i] = o[i].fn;
          }

          return u;
        }, a.prototype.emit = function (t, e, n, o, i, a) {
          var u = r ? r + t : t;
          if (!this._events[u]) return !1;
          var l,
              s,
              c = this._events[u],
              f = arguments.length;

          if (c.fn) {
            switch (c.once && this.removeListener(t, c.fn, void 0, !0), f) {
              case 1:
                return c.fn.call(c.context), !0;

              case 2:
                return c.fn.call(c.context, e), !0;

              case 3:
                return c.fn.call(c.context, e, n), !0;

              case 4:
                return c.fn.call(c.context, e, n, o), !0;

              case 5:
                return c.fn.call(c.context, e, n, o, i), !0;

              case 6:
                return c.fn.call(c.context, e, n, o, i, a), !0;
            }

            for (s = 1, l = new Array(f - 1); s < f; s++) {
              l[s - 1] = arguments[s];
            }

            c.fn.apply(c.context, l);
          } else {
            var h,
                p = c.length;

            for (s = 0; s < p; s++) {
              switch (c[s].once && this.removeListener(t, c[s].fn, void 0, !0), f) {
                case 1:
                  c[s].fn.call(c[s].context);
                  break;

                case 2:
                  c[s].fn.call(c[s].context, e);
                  break;

                case 3:
                  c[s].fn.call(c[s].context, e, n);
                  break;

                case 4:
                  c[s].fn.call(c[s].context, e, n, o);
                  break;

                default:
                  if (!l) for (h = 1, l = new Array(f - 1); h < f; h++) {
                    l[h - 1] = arguments[h];
                  }
                  c[s].fn.apply(c[s].context, l);
              }
            }
          }

          return !0;
        }, a.prototype.on = function (t, e, n) {
          var o = new i(e, n || this),
              a = r ? r + t : t;
          return this._events[a] ? this._events[a].fn ? this._events[a] = [this._events[a], o] : this._events[a].push(o) : (this._events[a] = o, this._eventsCount++), this;
        }, a.prototype.once = function (t, e, n) {
          var o = new i(e, n || this, !0),
              a = r ? r + t : t;
          return this._events[a] ? this._events[a].fn ? this._events[a] = [this._events[a], o] : this._events[a].push(o) : (this._events[a] = o, this._eventsCount++), this;
        }, a.prototype.removeListener = function (t, e, n, i) {
          var a = r ? r + t : t;
          if (!this._events[a]) return this;
          if (!e) return 0 == --this._eventsCount ? this._events = new o() : delete this._events[a], this;
          var u = this._events[a];
          if (u.fn) u.fn !== e || i && !u.once || n && u.context !== n || (0 == --this._eventsCount ? this._events = new o() : delete this._events[a]);else {
            for (var l = 0, s = [], c = u.length; l < c; l++) {
              (u[l].fn !== e || i && !u[l].once || n && u[l].context !== n) && s.push(u[l]);
            }

            s.length ? this._events[a] = 1 === s.length ? s[0] : s : 0 == --this._eventsCount ? this._events = new o() : delete this._events[a];
          }
          return this;
        }, a.prototype.removeAllListeners = function (t) {
          var e;
          return t ? (e = r ? r + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new o() : delete this._events[e])) : (this._events = new o(), this._eventsCount = 0), this;
        }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prototype.setMaxListeners = function () {
          return this;
        }, a.prefixed = r, a.EventEmitter = a, void 0 !== t && (t.exports = a);
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.matchText = e.matchSpacing = e.matchNewline = e.matchBlot = e.matchAttributor = e.default = void 0;

        var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        },
            o = function o(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function (t, e) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;

            try {
              for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
                ;
              }
            } catch (t) {
              o = !0, i = t;
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw i;
              }
            }

            return n;
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
            i = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            a = m(n(3)),
            u = m(n(2)),
            l = m(n(0)),
            s = m(n(5)),
            c = m(n(10)),
            f = m(n(9)),
            h = n(36),
            p = n(37),
            d = m(n(13)),
            y = n(26),
            v = n(38),
            g = n(39),
            b = n(40);

        function m(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function w(t, e, n) {
          return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n, t;
        }

        var _ = (0, c.default)("quill:clipboard"),
            x = "__ql-matcher",
            O = [[Node.TEXT_NODE, I], [Node.TEXT_NODE, L], ["br", function (t, e) {
          return j(e, "\n") || e.insert("\n"), e;
        }], [Node.ELEMENT_NODE, L], [Node.ELEMENT_NODE, R], [Node.ELEMENT_NODE, C], [Node.ELEMENT_NODE, q], [Node.ELEMENT_NODE, function (t, e) {
          var n = {},
              r = t.style || {};
          return r.fontStyle && "italic" === k(t).fontStyle && (n.italic = !0), r.fontWeight && (k(t).fontWeight.startsWith("bold") || parseInt(k(t).fontWeight) >= 700) && (n.bold = !0), Object.keys(n).length > 0 && (e = T(e, n)), parseFloat(r.textIndent || 0) > 0 && (e = new u.default().insert("\t").concat(e)), e;
        }], ["li", function (t, e) {
          var n = l.default.query(t);
          if (null == n || "list-item" !== n.blotName || !j(e, "\n")) return e;

          for (var r = -1, o = t.parentNode; !o.classList.contains("ql-clipboard");) {
            "list" === (l.default.query(o) || {}).blotName && (r += 1), o = o.parentNode;
          }

          return r <= 0 ? e : e.compose(new u.default().retain(e.length() - 1).retain(1, {
            indent: r
          }));
        }], ["b", N.bind(N, "bold")], ["i", N.bind(N, "italic")], ["style", function () {
          return new u.default();
        }]],
            E = [h.AlignAttribute, v.DirectionAttribute].reduce(function (t, e) {
          return t[e.keyName] = e, t;
        }, {}),
            S = [h.AlignStyle, p.BackgroundStyle, y.ColorStyle, v.DirectionStyle, g.FontStyle, b.SizeStyle].reduce(function (t, e) {
          return t[e.keyName] = e, t;
        }, {}),
            A = function (t) {
          function e(t, n) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);

            var r = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));

            return r.quill.root.addEventListener("paste", r.onPaste.bind(r)), r.container = r.quill.addContainer("ql-clipboard"), r.container.setAttribute("contenteditable", !0), r.container.setAttribute("tabindex", -1), r.matchers = [], O.concat(r.options.matchers).forEach(function (t) {
              var e = o(t, 2),
                  i = e[0],
                  a = e[1];
              (n.matchVisual || a !== C) && r.addMatcher(i, a);
            }), r;
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), i(e, [{
            key: "addMatcher",
            value: function value(t, e) {
              this.matchers.push([t, e]);
            }
          }, {
            key: "convert",
            value: function value(t) {
              if ("string" == typeof t) return this.container.innerHTML = t.replace(/\>\r?\n +\</g, "><"), this.convert();
              var e = this.quill.getFormat(this.quill.selection.savedRange.index);

              if (e[d.default.blotName]) {
                var n = this.container.innerText;
                return this.container.innerHTML = "", new u.default().insert(n, w({}, d.default.blotName, e[d.default.blotName]));
              }

              var r = this.prepareMatching(),
                  i = o(r, 2),
                  a = i[0],
                  l = i[1],
                  s = function t(e, n, r) {
                return e.nodeType === e.TEXT_NODE ? r.reduce(function (t, n) {
                  return n(e, t);
                }, new u.default()) : e.nodeType === e.ELEMENT_NODE ? [].reduce.call(e.childNodes || [], function (o, i) {
                  var a = t(i, n, r);
                  return i.nodeType === e.ELEMENT_NODE && (a = n.reduce(function (t, e) {
                    return e(i, t);
                  }, a), a = (i[x] || []).reduce(function (t, e) {
                    return e(i, t);
                  }, a)), o.concat(a);
                }, new u.default()) : new u.default();
              }(this.container, a, l);

              return j(s, "\n") && null == s.ops[s.ops.length - 1].attributes && (s = s.compose(new u.default().retain(s.length() - 1).delete(1))), _.log("convert", this.container.innerHTML, s), this.container.innerHTML = "", s;
            }
          }, {
            key: "dangerouslyPasteHTML",
            value: function value(t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default.sources.API;
              if ("string" == typeof t) this.quill.setContents(this.convert(t), e), this.quill.setSelection(0, s.default.sources.SILENT);else {
                var r = this.convert(e);
                this.quill.updateContents(new u.default().retain(t).concat(r), n), this.quill.setSelection(t + r.length(), s.default.sources.SILENT);
              }
            }
          }, {
            key: "onPaste",
            value: function value(t) {
              var e = this;

              if (!t.defaultPrevented && this.quill.isEnabled()) {
                var n = this.quill.getSelection(),
                    r = new u.default().retain(n.index),
                    o = this.quill.scrollingContainer.scrollTop;
                this.container.focus(), this.quill.selection.update(s.default.sources.SILENT), setTimeout(function () {
                  r = r.concat(e.convert()).delete(n.length), e.quill.updateContents(r, s.default.sources.USER), e.quill.setSelection(r.length() - n.length, s.default.sources.SILENT), e.quill.scrollingContainer.scrollTop = o, e.quill.focus();
                }, 1);
              }
            }
          }, {
            key: "prepareMatching",
            value: function value() {
              var t = this,
                  e = [],
                  n = [];
              return this.matchers.forEach(function (r) {
                var i = o(r, 2),
                    a = i[0],
                    u = i[1];

                switch (a) {
                  case Node.TEXT_NODE:
                    n.push(u);
                    break;

                  case Node.ELEMENT_NODE:
                    e.push(u);
                    break;

                  default:
                    [].forEach.call(t.container.querySelectorAll(a), function (t) {
                      t[x] = t[x] || [], t[x].push(u);
                    });
                }
              }), [e, n];
            }
          }]), e;
        }(f.default);

        function T(t, e, n) {
          return "object" === (void 0 === e ? "undefined" : r(e)) ? Object.keys(e).reduce(function (t, n) {
            return T(t, n, e[n]);
          }, t) : t.reduce(function (t, r) {
            return r.attributes && r.attributes[e] ? t.push(r) : t.insert(r.insert, (0, a.default)({}, w({}, e, n), r.attributes));
          }, new u.default());
        }

        function k(t) {
          return t.nodeType !== Node.ELEMENT_NODE ? {} : t["__ql-computed-style"] || (t["__ql-computed-style"] = window.getComputedStyle(t));
        }

        function j(t, e) {
          for (var n = "", r = t.ops.length - 1; r >= 0 && n.length < e.length; --r) {
            var o = t.ops[r];
            if ("string" != typeof o.insert) break;
            n = o.insert + n;
          }

          return n.slice(-1 * e.length) === e;
        }

        function P(t) {
          if (0 === t.childNodes.length) return !1;
          var e = k(t);
          return ["block", "list-item"].indexOf(e.display) > -1;
        }

        function N(t, e, n) {
          return T(n, t, !0);
        }

        function q(t, e) {
          var n = l.default.Attributor.Attribute.keys(t),
              r = l.default.Attributor.Class.keys(t),
              o = l.default.Attributor.Style.keys(t),
              i = {};
          return n.concat(r).concat(o).forEach(function (e) {
            var n = l.default.query(e, l.default.Scope.ATTRIBUTE);
            null != n && (i[n.attrName] = n.value(t), i[n.attrName]) || (null == (n = E[e]) || n.attrName !== e && n.keyName !== e || (i[n.attrName] = n.value(t) || void 0), null == (n = S[e]) || n.attrName !== e && n.keyName !== e || (n = S[e], i[n.attrName] = n.value(t) || void 0));
          }), Object.keys(i).length > 0 && (e = T(e, i)), e;
        }

        function R(t, e) {
          var n = l.default.query(t);
          if (null == n) return e;

          if (n.prototype instanceof l.default.Embed) {
            var r = {},
                o = n.value(t);
            null != o && (r[n.blotName] = o, e = new u.default().insert(r, n.formats(t)));
          } else "function" == typeof n.formats && (e = T(e, n.blotName, n.formats(t)));

          return e;
        }

        function L(t, e) {
          return j(e, "\n") || (P(t) || e.length() > 0 && t.nextSibling && P(t.nextSibling)) && e.insert("\n"), e;
        }

        function C(t, e) {
          if (P(t) && null != t.nextElementSibling && !j(e, "\n\n")) {
            var n = t.offsetHeight + parseFloat(k(t).marginTop) + parseFloat(k(t).marginBottom);
            t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n && e.insert("\n");
          }

          return e;
        }

        function I(t, e) {
          var n = t.data;
          if ("O:P" === t.parentNode.tagName) return e.insert(n.trim());
          if (0 === n.trim().length && t.parentNode.classList.contains("ql-clipboard")) return e;

          if (!k(t.parentNode).whiteSpace.startsWith("pre")) {
            var r = function r(t, e) {
              return (e = e.replace(/[^\u00a0]/g, "")).length < 1 && t ? " " : e;
            };

            n = (n = n.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, r.bind(r, !0)), (null == t.previousSibling && P(t.parentNode) || null != t.previousSibling && P(t.previousSibling)) && (n = n.replace(/^\s+/, r.bind(r, !1))), (null == t.nextSibling && P(t.parentNode) || null != t.nextSibling && P(t.nextSibling)) && (n = n.replace(/\s+$/, r.bind(r, !1)));
          }

          return e.insert(n);
        }

        A.DEFAULTS = {
          matchers: [],
          matchVisual: !0
        }, e.default = A, e.matchAttributor = q, e.matchBlot = R, e.matchNewline = L, e.matchSpacing = C, e.matchText = I;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r,
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            a = n(6);

        function u(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function l(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var s = function (t) {
          function e() {
            return u(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, [{
            key: "optimize",
            value: function value(t) {
              i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
            }
          }], [{
            key: "create",
            value: function value() {
              return i(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this);
            }
          }, {
            key: "formats",
            value: function value() {
              return !0;
            }
          }]), e;
        }(((r = a) && r.__esModule ? r : {
          default: r
        }).default);

        s.blotName = "bold", s.tagName = ["STRONG", "B"], e.default = s;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.addControls = e.default = void 0;

        var r = function r(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function (t, e) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;

            try {
              for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
                ;
              }
            } catch (t) {
              o = !0, i = t;
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw i;
              }
            }

            return n;
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = c(n(2)),
            a = c(n(0)),
            u = c(n(5)),
            l = c(n(10)),
            s = c(n(9));

        function c(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function f(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var h = (0, l.default)("quill:toolbar"),
            p = function (t) {
          function e(t, n) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);
            var o,
                i = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));

            if (Array.isArray(i.options.container)) {
              var a = document.createElement("div");
              y(a, i.options.container), t.container.parentNode.insertBefore(a, t.container), i.container = a;
            } else "string" == typeof i.options.container ? i.container = document.querySelector(i.options.container) : i.container = i.options.container;

            return i.container instanceof HTMLElement ? (i.container.classList.add("ql-toolbar"), i.controls = [], i.handlers = {}, Object.keys(i.options.handlers).forEach(function (t) {
              i.addHandler(t, i.options.handlers[t]);
            }), [].forEach.call(i.container.querySelectorAll("button, select"), function (t) {
              i.attach(t);
            }), i.quill.on(u.default.events.EDITOR_CHANGE, function (t, e) {
              t === u.default.events.SELECTION_CHANGE && i.update(e);
            }), i.quill.on(u.default.events.SCROLL_OPTIMIZE, function () {
              var t = i.quill.selection.getRange(),
                  e = r(t, 1)[0];
              i.update(e);
            }), i) : (o = h.error("Container required for toolbar", i.options), f(i, o));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, [{
            key: "addHandler",
            value: function value(t, e) {
              this.handlers[t] = e;
            }
          }, {
            key: "attach",
            value: function value(t) {
              var e = this,
                  n = [].find.call(t.classList, function (t) {
                return 0 === t.indexOf("ql-");
              });

              if (n) {
                if (n = n.slice("ql-".length), "BUTTON" === t.tagName && t.setAttribute("type", "button"), null == this.handlers[n]) {
                  if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n]) return void h.warn("ignoring attaching to disabled format", n, t);
                  if (null == a.default.query(n)) return void h.warn("ignoring attaching to nonexistent format", n, t);
                }

                var o = "SELECT" === t.tagName ? "change" : "click";
                t.addEventListener(o, function (o) {
                  var l = void 0;

                  if ("SELECT" === t.tagName) {
                    if (t.selectedIndex < 0) return;
                    var s = t.options[t.selectedIndex];
                    l = !s.hasAttribute("selected") && (s.value || !1);
                  } else l = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value")), o.preventDefault();

                  e.quill.focus();
                  var c = e.quill.selection.getRange(),
                      f = r(c, 1)[0];
                  if (null != e.handlers[n]) e.handlers[n].call(e, l);else if (a.default.query(n).prototype instanceof a.default.Embed) {
                    if (!(l = prompt("Enter " + n))) return;
                    e.quill.updateContents(new i.default().retain(f.index).delete(f.length).insert(function (t, e, n) {
                      return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      }) : t[e] = n, t;
                    }({}, n, l)), u.default.sources.USER);
                  } else e.quill.format(n, l, u.default.sources.USER);
                  e.update(f);
                }), this.controls.push([n, t]);
              }
            }
          }, {
            key: "update",
            value: function value(t) {
              var e = null == t ? {} : this.quill.getFormat(t);
              this.controls.forEach(function (n) {
                var o = r(n, 2),
                    i = o[0],
                    a = o[1];

                if ("SELECT" === a.tagName) {
                  var u = void 0;
                  if (null == t) u = null;else if (null == e[i]) u = a.querySelector("option[selected]");else if (!Array.isArray(e[i])) {
                    var l = e[i];
                    "string" == typeof l && (l = l.replace(/\"/g, '\\"')), u = a.querySelector('option[value="' + l + '"]');
                  }
                  null == u ? (a.value = "", a.selectedIndex = -1) : u.selected = !0;
                } else if (null == t) a.classList.remove("ql-active");else if (a.hasAttribute("value")) {
                  var s = e[i] === a.getAttribute("value") || null != e[i] && e[i].toString() === a.getAttribute("value") || null == e[i] && !a.getAttribute("value");
                  a.classList.toggle("ql-active", s);
                } else a.classList.toggle("ql-active", null != e[i]);
              });
            }
          }]), e;
        }(s.default);

        function d(t, e, n) {
          var r = document.createElement("button");
          r.setAttribute("type", "button"), r.classList.add("ql-" + e), null != n && (r.value = n), t.appendChild(r);
        }

        function y(t, e) {
          Array.isArray(e[0]) || (e = [e]), e.forEach(function (e) {
            var n = document.createElement("span");
            n.classList.add("ql-formats"), e.forEach(function (t) {
              if ("string" == typeof t) d(n, t);else {
                var e = Object.keys(t)[0],
                    r = t[e];
                Array.isArray(r) ? function (t, e, n) {
                  var r = document.createElement("select");
                  r.classList.add("ql-" + e), n.forEach(function (t) {
                    var e = document.createElement("option");
                    !1 !== t ? e.setAttribute("value", t) : e.setAttribute("selected", "selected"), r.appendChild(e);
                  }), t.appendChild(r);
                }(n, e, r) : d(n, e, r);
              }
            }), t.appendChild(n);
          });
        }

        p.DEFAULTS = {}, p.DEFAULTS = {
          container: null,
          handlers: {
            clean: function clean() {
              var t = this,
                  e = this.quill.getSelection();
              if (null != e) if (0 == e.length) {
                var n = this.quill.getFormat();
                Object.keys(n).forEach(function (e) {
                  null != a.default.query(e, a.default.Scope.INLINE) && t.quill.format(e, !1);
                });
              } else this.quill.removeFormat(e, u.default.sources.USER);
            },
            direction: function direction(t) {
              var e = this.quill.getFormat().align;
              "rtl" === t && null == e ? this.quill.format("align", "right", u.default.sources.USER) : t || "right" !== e || this.quill.format("align", !1, u.default.sources.USER), this.quill.format("direction", t, u.default.sources.USER);
            },
            indent: function indent(t) {
              var e = this.quill.getSelection(),
                  n = this.quill.getFormat(e),
                  r = parseInt(n.indent || 0);

              if ("+1" === t || "-1" === t) {
                var o = "+1" === t ? 1 : -1;
                "rtl" === n.direction && (o *= -1), this.quill.format("indent", r + o, u.default.sources.USER);
              }
            },
            link: function link(t) {
              !0 === t && (t = prompt("Enter link URL:")), this.quill.format("link", t, u.default.sources.USER);
            },
            list: function list(t) {
              var e = this.quill.getSelection(),
                  n = this.quill.getFormat(e);
              "check" === t ? "checked" === n.list || "unchecked" === n.list ? this.quill.format("list", !1, u.default.sources.USER) : this.quill.format("list", "unchecked", u.default.sources.USER) : this.quill.format("list", t, u.default.sources.USER);
            }
          }
        }, e.default = p, e.addControls = y;
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r,
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            a = n(28),
            u = function (t) {
          function e(t, n) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);

            var r = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));

            return r.label.innerHTML = n, r.container.classList.add("ql-color-picker"), [].slice.call(r.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function (t) {
              t.classList.add("ql-primary");
            }), r;
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, [{
            key: "buildItem",
            value: function value(t) {
              var n = i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "buildItem", this).call(this, t);
              return n.style.backgroundColor = t.getAttribute("value") || "", n;
            }
          }, {
            key: "selectItem",
            value: function value(t, n) {
              i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n);
              var r = this.label.querySelector(".ql-color-label"),
                  o = t && t.getAttribute("data-value") || "";
              r && ("line" === r.tagName ? r.style.stroke = o : r.style.fill = o);
            }
          }]), e;
        }(((r = a) && r.__esModule ? r : {
          default: r
        }).default);

        e.default = u;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r,
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = n(28),
            a = function (t) {
          function e(t, n) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);

            var r = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));

            return r.container.classList.add("ql-icon-picker"), [].forEach.call(r.container.querySelectorAll(".ql-picker-item"), function (t) {
              t.innerHTML = n[t.getAttribute("data-value") || ""];
            }), r.defaultItem = r.container.querySelector(".ql-selected"), r.selectItem(r.defaultItem), r;
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, [{
            key: "selectItem",
            value: function value(t, n) {
              (function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);

                if (void 0 === o) {
                  var i = Object.getPrototypeOf(e);
                  return null === i ? void 0 : t(i, n, r);
                }

                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0;
              })(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n), t = t || this.defaultItem, this.label.innerHTML = t.innerHTML;
            }
          }]), e;
        }(((r = i) && r.__esModule ? r : {
          default: r
        }).default);

        e.default = a;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = function () {
          function t(e, n) {
            var r = this;
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.quill = e, this.boundsContainer = n || document.body, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function () {
              r.root.style.marginTop = -1 * r.quill.root.scrollTop + "px";
            }), this.hide();
          }

          return r(t, [{
            key: "hide",
            value: function value() {
              this.root.classList.add("ql-hidden");
            }
          }, {
            key: "position",
            value: function value(t) {
              var e = t.left + t.width / 2 - this.root.offsetWidth / 2,
                  n = t.bottom + this.quill.root.scrollTop;
              this.root.style.left = e + "px", this.root.style.top = n + "px", this.root.classList.remove("ql-flip");
              var r = this.boundsContainer.getBoundingClientRect(),
                  o = this.root.getBoundingClientRect(),
                  i = 0;

              if (o.right > r.right && (i = r.right - o.right, this.root.style.left = e + i + "px"), o.left < r.left && (i = r.left - o.left, this.root.style.left = e + i + "px"), o.bottom > r.bottom) {
                var a = o.bottom - o.top,
                    u = t.bottom - t.top + a;
                this.root.style.top = n - u + "px", this.root.classList.add("ql-flip");
              }

              return i;
            }
          }, {
            key: "show",
            value: function value() {
              this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
            }
          }]), t;
        }();

        e.default = o;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = function r(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function (t, e) {
            var n = [],
                r = !0,
                o = !1,
                i = void 0;

            try {
              for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
                ;
              }
            } catch (t) {
              o = !0, i = t;
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw i;
              }
            }

            return n;
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
            o = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            i = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            a = p(n(3)),
            u = p(n(8)),
            l = n(43),
            s = p(l),
            c = p(n(27)),
            f = n(15),
            h = p(n(41));

        function p(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function d(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function y(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        function v(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        var g = [[{
          header: ["1", "2", "3", !1]
        }], ["bold", "italic", "underline", "link"], [{
          list: "ordered"
        }, {
          list: "bullet"
        }], ["clean"]],
            b = function (t) {
          function e(t, n) {
            d(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = g);
            var r = y(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return r.quill.container.classList.add("ql-snow"), r;
          }

          return v(e, t), i(e, [{
            key: "extendToolbar",
            value: function value(t) {
              t.container.classList.add("ql-snow"), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), h.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), h.default), this.tooltip = new m(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
                key: "K",
                shortKey: !0
              }, function (e, n) {
                t.handlers.link.call(t, !n.format.link);
              });
            }
          }]), e;
        }(s.default);

        b.DEFAULTS = (0, a.default)(!0, {}, s.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function link(t) {
                  if (t) {
                    var e = this.quill.getSelection();
                    if (null == e || 0 == e.length) return;
                    var n = this.quill.getText(e);
                    /^\S+@\S+\.\S+$/.test(n) && 0 !== n.indexOf("mailto:") && (n = "mailto:" + n), this.quill.theme.tooltip.edit("link", n);
                  } else this.quill.format("link", !1);
                }
              }
            }
          }
        });

        var m = function (t) {
          function e(t, n) {
            d(this, e);
            var r = y(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return r.preview = r.root.querySelector("a.ql-preview"), r;
          }

          return v(e, t), i(e, [{
            key: "listen",
            value: function value() {
              var t = this;
              o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function (e) {
                t.root.classList.contains("ql-editing") ? t.save() : t.edit("link", t.preview.textContent), e.preventDefault();
              }), this.root.querySelector("a.ql-remove").addEventListener("click", function (e) {
                if (null != t.linkRange) {
                  var n = t.linkRange;
                  t.restoreFocus(), t.quill.formatText(n, "link", !1, u.default.sources.USER), delete t.linkRange;
                }

                e.preventDefault(), t.hide();
              }), this.quill.on(u.default.events.SELECTION_CHANGE, function (e, n, o) {
                if (null != e) {
                  if (0 === e.length && o === u.default.sources.USER) {
                    var i = t.quill.scroll.descendant(c.default, e.index),
                        a = r(i, 2),
                        l = a[0],
                        s = a[1];

                    if (null != l) {
                      t.linkRange = new f.Range(e.index - s, l.length());
                      var h = c.default.formats(l.domNode);
                      return t.preview.textContent = h, t.preview.setAttribute("href", h), t.show(), void t.position(t.quill.getBounds(t.linkRange));
                    }
                  } else delete t.linkRange;

                  t.hide();
                }
              });
            }
          }, {
            key: "show",
            value: function value() {
              o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
            }
          }]), e;
        }(l.BaseTooltip);

        m.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), e.default = b;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r = C(n(29)),
            o = n(36),
            i = n(38),
            a = n(64),
            u = C(n(65)),
            l = C(n(66)),
            s = n(67),
            c = C(s),
            f = n(37),
            h = n(26),
            p = n(39),
            d = n(40),
            y = C(n(56)),
            v = C(n(68)),
            g = C(n(27)),
            b = C(n(69)),
            m = C(n(70)),
            w = C(n(71)),
            _ = C(n(72)),
            x = C(n(73)),
            O = n(13),
            E = C(O),
            S = C(n(74)),
            A = C(n(75)),
            T = C(n(57)),
            k = C(n(41)),
            j = C(n(28)),
            P = C(n(59)),
            N = C(n(60)),
            q = C(n(61)),
            R = C(n(108)),
            L = C(n(62));

        function C(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        r.default.register({
          "attributors/attribute/direction": i.DirectionAttribute,
          "attributors/class/align": o.AlignClass,
          "attributors/class/background": f.BackgroundClass,
          "attributors/class/color": h.ColorClass,
          "attributors/class/direction": i.DirectionClass,
          "attributors/class/font": p.FontClass,
          "attributors/class/size": d.SizeClass,
          "attributors/style/align": o.AlignStyle,
          "attributors/style/background": f.BackgroundStyle,
          "attributors/style/color": h.ColorStyle,
          "attributors/style/direction": i.DirectionStyle,
          "attributors/style/font": p.FontStyle,
          "attributors/style/size": d.SizeStyle
        }, !0), r.default.register({
          "formats/align": o.AlignClass,
          "formats/direction": i.DirectionClass,
          "formats/indent": a.IndentClass,
          "formats/background": f.BackgroundStyle,
          "formats/color": h.ColorStyle,
          "formats/font": p.FontClass,
          "formats/size": d.SizeClass,
          "formats/blockquote": u.default,
          "formats/code-block": E.default,
          "formats/header": l.default,
          "formats/list": c.default,
          "formats/bold": y.default,
          "formats/code": O.Code,
          "formats/italic": v.default,
          "formats/link": g.default,
          "formats/script": b.default,
          "formats/strike": m.default,
          "formats/underline": w.default,
          "formats/image": _.default,
          "formats/video": x.default,
          "formats/list/item": s.ListItem,
          "modules/formula": S.default,
          "modules/syntax": A.default,
          "modules/toolbar": T.default,
          "themes/bubble": R.default,
          "themes/snow": L.default,
          "ui/icons": k.default,
          "ui/picker": j.default,
          "ui/icon-picker": N.default,
          "ui/color-picker": P.default,
          "ui/tooltip": q.default
        }, !0), e.default = r.default;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.IndentClass = void 0;

        var r,
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            a = n(0),
            u = (r = a) && r.__esModule ? r : {
          default: r
        };

        function l(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function s(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var c = new (function (t) {
          function e() {
            return l(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, [{
            key: "add",
            value: function value(t, n) {
              if ("+1" === n || "-1" === n) {
                var r = this.value(t) || 0;
                n = "+1" === n ? r + 1 : r - 1;
              }

              return 0 === n ? (this.remove(t), !0) : i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "add", this).call(this, t, n);
            }
          }, {
            key: "canAdd",
            value: function value(t, n) {
              return i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, n) || i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, parseInt(n));
            }
          }, {
            key: "value",
            value: function value(t) {
              return parseInt(i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t)) || void 0;
            }
          }]), e;
        }(u.default.Attributor.Class))("indent", "ql-indent", {
          scope: u.default.Scope.BLOCK,
          whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
        });
        e.IndentClass = c;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r,
            o = n(4);

        function i(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function a(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var u = function (t) {
          function e() {
            return i(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), e;
        }(((r = o) && r.__esModule ? r : {
          default: r
        }).default);

        u.blotName = "blockquote", u.tagName = "blockquote", e.default = u;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r,
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = n(4);

        function a(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function u(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var l = function (t) {
          function e() {
            return a(this, e), u(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, null, [{
            key: "formats",
            value: function value(t) {
              return this.tagName.indexOf(t.tagName) + 1;
            }
          }]), e;
        }(((r = i) && r.__esModule ? r : {
          default: r
        }).default);

        l.blotName = "header", l.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], e.default = l;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = e.ListItem = void 0;

        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            i = l(n(0)),
            a = l(n(4)),
            u = l(n(25));

        function l(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function s(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function c(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        function f(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        var h = function (t) {
          function e() {
            return s(this, e), c(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return f(e, t), r(e, [{
            key: "format",
            value: function value(t, n) {
              t !== p.blotName || n ? o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n) : this.replaceWith(i.default.create(this.statics.scope));
            }
          }, {
            key: "remove",
            value: function value() {
              null == this.prev && null == this.next ? this.parent.remove() : o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this);
            }
          }, {
            key: "replaceWith",
            value: function value(t, n) {
              return this.parent.isolate(this.offset(this.parent), this.length()), t === this.parent.statics.blotName ? (this.parent.replaceWith(t, n), this) : (this.parent.unwrap(), o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t, n));
            }
          }], [{
            key: "formats",
            value: function value(t) {
              return t.tagName === this.tagName ? void 0 : o(e.__proto__ || Object.getPrototypeOf(e), "formats", this).call(this, t);
            }
          }]), e;
        }(a.default);

        h.blotName = "list-item", h.tagName = "LI";

        var p = function (t) {
          function e(t) {
            s(this, e);

            var n = c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
                r = function r(e) {
              if (e.target.parentNode === t) {
                var r = n.statics.formats(t),
                    o = i.default.find(e.target);
                "checked" === r ? o.format("list", "unchecked") : "unchecked" === r && o.format("list", "checked");
              }
            };

            return t.addEventListener("touchstart", r), t.addEventListener("mousedown", r), n;
          }

          return f(e, t), r(e, null, [{
            key: "create",
            value: function value(t) {
              var n = "ordered" === t ? "OL" : "UL",
                  r = o(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, n);
              return "checked" !== t && "unchecked" !== t || r.setAttribute("data-checked", "checked" === t), r;
            }
          }, {
            key: "formats",
            value: function value(t) {
              return "OL" === t.tagName ? "ordered" : "UL" === t.tagName ? t.hasAttribute("data-checked") ? "true" === t.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0;
            }
          }]), r(e, [{
            key: "format",
            value: function value(t, e) {
              this.children.length > 0 && this.children.tail.format(t, e);
            }
          }, {
            key: "formats",
            value: function value() {
              return t = {}, e = this.statics.blotName, n = this.statics.formats(this.domNode), e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = n, t;
              var t, e, n;
            }
          }, {
            key: "insertBefore",
            value: function value(t, n) {
              if (t instanceof h) o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n);else {
                var r = null == n ? this.length() : n.offset(this),
                    i = this.split(r);
                i.parent.insertBefore(t, i);
              }
            }
          }, {
            key: "optimize",
            value: function value(t) {
              o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
              var n = this.next;
              null != n && n.prev === this && n.statics.blotName === this.statics.blotName && n.domNode.tagName === this.domNode.tagName && n.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (n.moveChildren(this), n.remove());
            }
          }, {
            key: "replace",
            value: function value(t) {
              if (t.statics.blotName !== this.statics.blotName) {
                var n = i.default.create(this.statics.defaultChild);
                t.moveChildren(n), this.appendChild(n);
              }

              o(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t);
            }
          }]), e;
        }(u.default);

        p.blotName = "list", p.scope = i.default.Scope.BLOCK_BLOT, p.tagName = ["OL", "UL"], p.defaultChild = "list-item", p.allowedChildren = [h], e.ListItem = h, e.default = p;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r,
            o = n(56);

        function i(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function a(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var u = function (t) {
          function e() {
            return i(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), e;
        }(((r = o) && r.__esModule ? r : {
          default: r
        }).default);

        u.blotName = "italic", u.tagName = ["EM", "I"], e.default = u;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r,
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = n(6);

        function a(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function u(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var l = function (t) {
          function e() {
            return a(this, e), u(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, null, [{
            key: "create",
            value: function value(t) {
              return "super" === t ? document.createElement("sup") : "sub" === t ? document.createElement("sub") : function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);

                if (void 0 === o) {
                  var i = Object.getPrototypeOf(e);
                  return null === i ? void 0 : t(i, n, r);
                }

                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0;
              }(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
            }
          }, {
            key: "formats",
            value: function value(t) {
              return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0;
            }
          }]), e;
        }(((r = i) && r.__esModule ? r : {
          default: r
        }).default);

        l.blotName = "script", l.tagName = ["SUB", "SUP"], e.default = l;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r,
            o = n(6);

        function i(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function a(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var u = function (t) {
          function e() {
            return i(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), e;
        }(((r = o) && r.__esModule ? r : {
          default: r
        }).default);

        u.blotName = "strike", u.tagName = "S", e.default = u;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r,
            o = n(6);

        function i(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function a(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var u = function (t) {
          function e() {
            return i(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), e;
        }(((r = o) && r.__esModule ? r : {
          default: r
        }).default);

        u.blotName = "underline", u.tagName = "U", e.default = u;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r,
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            a = n(0),
            u = (r = a) && r.__esModule ? r : {
          default: r
        },
            l = n(27);

        function s(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function c(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var f = ["alt", "height", "width"],
            h = function (t) {
          function e() {
            return s(this, e), c(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, [{
            key: "format",
            value: function value(t, n) {
              f.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
            }
          }], [{
            key: "create",
            value: function value(t) {
              var n = i(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
              return "string" == typeof t && n.setAttribute("src", this.sanitize(t)), n;
            }
          }, {
            key: "formats",
            value: function value(t) {
              return f.reduce(function (e, n) {
                return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e;
              }, {});
            }
          }, {
            key: "match",
            value: function value(t) {
              return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
            }
          }, {
            key: "sanitize",
            value: function value(t) {
              return (0, l.sanitize)(t, ["http", "https", "data"]) ? t : "//:0";
            }
          }, {
            key: "value",
            value: function value(t) {
              return t.getAttribute("src");
            }
          }]), e;
        }(u.default.Embed);

        h.blotName = "image", h.tagName = "IMG", e.default = h;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var r,
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            a = n(4),
            u = n(27),
            l = (r = u) && r.__esModule ? r : {
          default: r
        };

        function s(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function c(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        var f = ["height", "width"],
            h = function (t) {
          function e() {
            return s(this, e), c(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, t), o(e, [{
            key: "format",
            value: function value(t, n) {
              f.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : i(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
            }
          }], [{
            key: "create",
            value: function value(t) {
              var n = i(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
              return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(t)), n;
            }
          }, {
            key: "formats",
            value: function value(t) {
              return f.reduce(function (e, n) {
                return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e;
              }, {});
            }
          }, {
            key: "sanitize",
            value: function value(t) {
              return l.default.sanitize(t);
            }
          }, {
            key: "value",
            value: function value(t) {
              return t.getAttribute("src");
            }
          }]), e;
        }(a.BlockEmbed);

        h.blotName = "video", h.className = "ql-video", h.tagName = "IFRAME", e.default = h;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = e.FormulaBlot = void 0;

        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = u(n(35)),
            i = u(n(5)),
            a = u(n(9));

        function u(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function l(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function s(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        function c(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        var f = function (t) {
          function e() {
            return l(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return c(e, t), r(e, null, [{
            key: "create",
            value: function value(t) {
              var n = function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);

                if (void 0 === o) {
                  var i = Object.getPrototypeOf(e);
                  return null === i ? void 0 : t(i, n, r);
                }

                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0;
              }(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);

              return "string" == typeof t && (window.katex.render(t, n, {
                throwOnError: !1,
                errorColor: "#f00"
              }), n.setAttribute("data-value", t)), n;
            }
          }, {
            key: "value",
            value: function value(t) {
              return t.getAttribute("data-value");
            }
          }]), e;
        }(o.default);

        f.blotName = "formula", f.className = "ql-formula", f.tagName = "SPAN";

        var h = function (t) {
          function e() {
            l(this, e);
            var t = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            if (null == window.katex) throw new Error("Formula module requires KaTeX.");
            return t;
          }

          return c(e, t), r(e, null, [{
            key: "register",
            value: function value() {
              i.default.register(f, !0);
            }
          }]), e;
        }(a.default);

        e.FormulaBlot = f, e.default = h;
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = e.CodeToken = e.CodeBlock = void 0;

        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = u(n(0)),
            i = u(n(5)),
            a = u(n(9));

        function u(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function l(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function s(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        function c(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        var f = function (t) {
          function e() {
            return l(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
          }

          return c(e, t), r(e, [{
            key: "replaceWith",
            value: function value(t) {
              this.domNode.textContent = this.domNode.textContent, this.attach(), function t(e, n, r) {
                null === e && (e = Function.prototype);
                var o = Object.getOwnPropertyDescriptor(e, n);

                if (void 0 === o) {
                  var i = Object.getPrototypeOf(e);
                  return null === i ? void 0 : t(i, n, r);
                }

                if ("value" in o) return o.value;
                var a = o.get;
                return void 0 !== a ? a.call(r) : void 0;
              }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t);
            }
          }, {
            key: "highlight",
            value: function value(t) {
              var e = this.domNode.textContent;
              this.cachedText !== e && ((e.trim().length > 0 || null == this.cachedText) && (this.domNode.innerHTML = t(e), this.domNode.normalize(), this.attach()), this.cachedText = e);
            }
          }]), e;
        }(u(n(13)).default);

        f.className = "ql-syntax";

        var h = new o.default.Attributor.Class("token", "hljs", {
          scope: o.default.Scope.INLINE
        }),
            p = function (t) {
          function e(t, n) {
            l(this, e);
            var r = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            if ("function" != typeof r.options.highlight) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
            var o = null;
            return r.quill.on(i.default.events.SCROLL_OPTIMIZE, function () {
              clearTimeout(o), o = setTimeout(function () {
                r.highlight(), o = null;
              }, r.options.interval);
            }), r.highlight(), r;
          }

          return c(e, t), r(e, null, [{
            key: "register",
            value: function value() {
              i.default.register(h, !0), i.default.register(f, !0);
            }
          }]), r(e, [{
            key: "highlight",
            value: function value() {
              var t = this;

              if (!this.quill.selection.composing) {
                this.quill.update(i.default.sources.USER);
                var e = this.quill.getSelection();
                this.quill.scroll.descendants(f).forEach(function (e) {
                  e.highlight(t.options.highlight);
                }), this.quill.update(i.default.sources.SILENT), null != e && this.quill.setSelection(e, i.default.sources.SILENT);
              }
            }
          }]), e;
        }(a.default);

        p.DEFAULTS = {
          highlight: null == window.hljs ? null : function (t) {
            return window.hljs.highlightAuto(t).value;
          },
          interval: 1e3
        }, e.CodeBlock = f, e.CodeToken = h, e.default = p;
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
      }, function (t, e) {
        t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
      }, function (t, e) {
        t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
      }, function (t, e) {
        t.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
      }, function (t, e, n) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = e.BubbleTooltip = void 0;

        var r = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);

          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, n, r);
          }

          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(r) : void 0;
        },
            o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }

          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = f(n(3)),
            a = f(n(8)),
            u = n(43),
            l = f(u),
            s = n(15),
            c = f(n(41));

        function f(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function h(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }

        function p(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }

        function d(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }

        var y = [["bold", "italic", "link"], [{
          header: 1
        }, {
          header: 2
        }, "blockquote"]],
            v = function (t) {
          function e(t, n) {
            h(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = y);
            var r = p(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return r.quill.container.classList.add("ql-bubble"), r;
          }

          return d(e, t), o(e, [{
            key: "extendToolbar",
            value: function value(t) {
              this.tooltip = new g(this.quill, this.options.bounds), this.tooltip.root.appendChild(t.container), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), c.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), c.default);
            }
          }]), e;
        }(l.default);

        v.DEFAULTS = (0, i.default)(!0, {}, l.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function link(t) {
                  t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1);
                }
              }
            }
          }
        });

        var g = function (t) {
          function e(t, n) {
            h(this, e);
            var r = p(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
            return r.quill.on(a.default.events.EDITOR_CHANGE, function (t, e, n, o) {
              if (t === a.default.events.SELECTION_CHANGE) if (null != e && e.length > 0 && o === a.default.sources.USER) {
                r.show(), r.root.style.left = "0px", r.root.style.width = "", r.root.style.width = r.root.offsetWidth + "px";
                var i = r.quill.getLines(e.index, e.length);
                if (1 === i.length) r.position(r.quill.getBounds(e));else {
                  var u = i[i.length - 1],
                      l = r.quill.getIndex(u),
                      c = Math.min(u.length() - 1, e.index + e.length - l),
                      f = r.quill.getBounds(new s.Range(l, c));
                  r.position(f);
                }
              } else document.activeElement !== r.textbox && r.quill.hasFocus() && r.hide();
            }), r;
          }

          return d(e, t), o(e, [{
            key: "listen",
            value: function value() {
              var t = this;
              r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function () {
                t.root.classList.remove("ql-editing");
              }), this.quill.on(a.default.events.SCROLL_OPTIMIZE, function () {
                setTimeout(function () {
                  if (!t.root.classList.contains("ql-hidden")) {
                    var e = t.quill.getSelection();
                    null != e && t.position(t.quill.getBounds(e));
                  }
                }, 1);
              });
            }
          }, {
            key: "cancel",
            value: function value() {
              this.show();
            }
          }, {
            key: "position",
            value: function value(t) {
              var n = r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "position", this).call(this, t),
                  o = this.root.querySelector(".ql-tooltip-arrow");
              if (o.style.marginLeft = "", 0 === n) return n;
              o.style.marginLeft = -1 * n - o.offsetWidth / 2 + "px";
            }
          }]), e;
        }(u.BaseTooltip);

        g.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), e.BubbleTooltip = g, e.default = v;
      }, function (t, e, n) {
        t.exports = n(63);
      }]).default;
    }, t.exports = n();
  }).call(this, n(154).Buffer);
}, function (t, e, n) {
  "use strict";

  (function (t) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */
    var r = n(155),
        o = n(156),
        i = n(157);

    function a() {
      return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }

    function u(t, e) {
      if (a() < e) throw new RangeError("Invalid typed array length");
      return l.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = l.prototype : (null === t && (t = new l(e)), t.length = e), t;
    }

    function l(t, e, n) {
      if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(t, e, n);

      if ("number" == typeof t) {
        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
        return f(this, t);
      }

      return s(this, t, e, n);
    }

    function s(t, e, n, r) {
      if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, r) {
        if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
        if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
        e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
        l.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = l.prototype : t = h(t, e);
        return t;
      }(t, e, n, r) : "string" == typeof e ? function (t, e, n) {
        "string" == typeof n && "" !== n || (n = "utf8");
        if (!l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
        var r = 0 | d(e, n),
            o = (t = u(t, r)).write(e, n);
        o !== r && (t = t.slice(0, o));
        return t;
      }(t, e, n) : function (t, e) {
        if (l.isBuffer(e)) {
          var n = 0 | p(e.length);
          return 0 === (t = u(t, n)).length || e.copy(t, 0, 0, n), t;
        }

        if (e) {
          if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? u(t, 0) : h(t, e);
          if ("Buffer" === e.type && i(e.data)) return h(t, e.data);
        }

        var r;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }(t, e);
    }

    function c(t) {
      if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
      if (t < 0) throw new RangeError('"size" argument must not be negative');
    }

    function f(t, e) {
      if (c(e), t = u(t, e < 0 ? 0 : 0 | p(e)), !l.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) {
        t[n] = 0;
      }
      return t;
    }

    function h(t, e) {
      var n = e.length < 0 ? 0 : 0 | p(e.length);
      t = u(t, n);

      for (var r = 0; r < n; r += 1) {
        t[r] = 255 & e[r];
      }

      return t;
    }

    function p(t) {
      if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
      return 0 | t;
    }

    function d(t, e) {
      if (l.isBuffer(t)) return t.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
      "string" != typeof t && (t = "" + t);
      var n = t.length;
      if (0 === n) return 0;

      for (var r = !1;;) {
        switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return n;

          case "utf8":
          case "utf-8":
          case void 0:
            return U(t).length;

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * n;

          case "hex":
            return n >>> 1;

          case "base64":
            return F(t).length;

          default:
            if (r) return U(t).length;
            e = ("" + e).toLowerCase(), r = !0;
        }
      }
    }

    function y(t, e, n) {
      var r = !1;
      if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
      if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
      if ((n >>>= 0) <= (e >>>= 0)) return "";

      for (t || (t = "utf8");;) {
        switch (t) {
          case "hex":
            return j(this, e, n);

          case "utf8":
          case "utf-8":
            return A(this, e, n);

          case "ascii":
            return T(this, e, n);

          case "latin1":
          case "binary":
            return k(this, e, n);

          case "base64":
            return S(this, e, n);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return P(this, e, n);

          default:
            if (r) throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), r = !0;
        }
      }
    }

    function v(t, e, n) {
      var r = t[e];
      t[e] = t[n], t[n] = r;
    }

    function g(t, e, n, r, o) {
      if (0 === t.length) return -1;

      if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
        if (o) return -1;
        n = t.length - 1;
      } else if (n < 0) {
        if (!o) return -1;
        n = 0;
      }

      if ("string" == typeof e && (e = l.from(e, r)), l.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, n, r, o);
      if ("number" == typeof e) return e &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : b(t, [e], n, r, o);
      throw new TypeError("val must be string, number or Buffer");
    }

    function b(t, e, n, r, o) {
      var i,
          a = 1,
          u = t.length,
          l = e.length;

      if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (t.length < 2 || e.length < 2) return -1;
        a = 2, u /= 2, l /= 2, n /= 2;
      }

      function s(t, e) {
        return 1 === a ? t[e] : t.readUInt16BE(e * a);
      }

      if (o) {
        var c = -1;

        for (i = n; i < u; i++) {
          if (s(t, i) === s(e, -1 === c ? 0 : i - c)) {
            if (-1 === c && (c = i), i - c + 1 === l) return c * a;
          } else -1 !== c && (i -= i - c), c = -1;
        }
      } else for (n + l > u && (n = u - l), i = n; i >= 0; i--) {
        for (var f = !0, h = 0; h < l; h++) {
          if (s(t, i + h) !== s(e, h)) {
            f = !1;
            break;
          }
        }

        if (f) return i;
      }

      return -1;
    }

    function m(t, e, n, r) {
      n = Number(n) || 0;
      var o = t.length - n;
      r ? (r = Number(r)) > o && (r = o) : r = o;
      var i = e.length;
      if (i % 2 != 0) throw new TypeError("Invalid hex string");
      r > i / 2 && (r = i / 2);

      for (var a = 0; a < r; ++a) {
        var u = parseInt(e.substr(2 * a, 2), 16);
        if (isNaN(u)) return a;
        t[n + a] = u;
      }

      return a;
    }

    function w(t, e, n, r) {
      return J(U(e, t.length - n), t, n, r);
    }

    function _(t, e, n, r) {
      return J(function (t) {
        for (var e = [], n = 0; n < t.length; ++n) {
          e.push(255 & t.charCodeAt(n));
        }

        return e;
      }(e), t, n, r);
    }

    function x(t, e, n, r) {
      return _(t, e, n, r);
    }

    function O(t, e, n, r) {
      return J(F(e), t, n, r);
    }

    function E(t, e, n, r) {
      return J(function (t, e) {
        for (var n, r, o, i = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) {
          n = t.charCodeAt(a), r = n >> 8, o = n % 256, i.push(o), i.push(r);
        }

        return i;
      }(e, t.length - n), t, n, r);
    }

    function S(t, e, n) {
      return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
    }

    function A(t, e, n) {
      n = Math.min(t.length, n);

      for (var r = [], o = e; o < n;) {
        var i,
            a,
            u,
            l,
            s = t[o],
            c = null,
            f = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
        if (o + f <= n) switch (f) {
          case 1:
            s < 128 && (c = s);
            break;

          case 2:
            128 == (192 & (i = t[o + 1])) && (l = (31 & s) << 6 | 63 & i) > 127 && (c = l);
            break;

          case 3:
            i = t[o + 1], a = t[o + 2], 128 == (192 & i) && 128 == (192 & a) && (l = (15 & s) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (c = l);
            break;

          case 4:
            i = t[o + 1], a = t[o + 2], u = t[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & u) && (l = (15 & s) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & u) > 65535 && l < 1114112 && (c = l);
        }
        null === c ? (c = 65533, f = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), o += f;
      }

      return function (t) {
        var e = t.length;
        if (e <= 4096) return String.fromCharCode.apply(String, t);
        var n = "",
            r = 0;

        for (; r < e;) {
          n += String.fromCharCode.apply(String, t.slice(r, r += 4096));
        }

        return n;
      }(r);
    }

    e.Buffer = l, e.SlowBuffer = function (t) {
      +t != t && (t = 0);
      return l.alloc(+t);
    }, e.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
      try {
        var t = new Uint8Array(1);
        return t.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function foo() {
            return 42;
          }
        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
      } catch (t) {
        return !1;
      }
    }(), e.kMaxLength = a(), l.poolSize = 8192, l._augment = function (t) {
      return t.__proto__ = l.prototype, t;
    }, l.from = function (t, e, n) {
      return s(null, t, e, n);
    }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
      value: null,
      configurable: !0
    })), l.alloc = function (t, e, n) {
      return function (t, e, n, r) {
        return c(e), e <= 0 ? u(t, e) : void 0 !== n ? "string" == typeof r ? u(t, e).fill(n, r) : u(t, e).fill(n) : u(t, e);
      }(null, t, e, n);
    }, l.allocUnsafe = function (t) {
      return f(null, t);
    }, l.allocUnsafeSlow = function (t) {
      return f(null, t);
    }, l.isBuffer = function (t) {
      return !(null == t || !t._isBuffer);
    }, l.compare = function (t, e) {
      if (!l.isBuffer(t) || !l.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
      if (t === e) return 0;

      for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o) {
        if (t[o] !== e[o]) {
          n = t[o], r = e[o];
          break;
        }
      }

      return n < r ? -1 : r < n ? 1 : 0;
    }, l.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {
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
          return !1;
      }
    }, l.concat = function (t, e) {
      if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t.length) return l.alloc(0);
      var n;
      if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) {
        e += t[n].length;
      }
      var r = l.allocUnsafe(e),
          o = 0;

      for (n = 0; n < t.length; ++n) {
        var a = t[n];
        if (!l.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
        a.copy(r, o), o += a.length;
      }

      return r;
    }, l.byteLength = d, l.prototype._isBuffer = !0, l.prototype.swap16 = function () {
      var t = this.length;
      if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

      for (var e = 0; e < t; e += 2) {
        v(this, e, e + 1);
      }

      return this;
    }, l.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

      for (var e = 0; e < t; e += 4) {
        v(this, e, e + 3), v(this, e + 1, e + 2);
      }

      return this;
    }, l.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

      for (var e = 0; e < t; e += 8) {
        v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), v(this, e + 3, e + 4);
      }

      return this;
    }, l.prototype.toString = function () {
      var t = 0 | this.length;
      return 0 === t ? "" : 0 === arguments.length ? A(this, 0, t) : y.apply(this, arguments);
    }, l.prototype.equals = function (t) {
      if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t || 0 === l.compare(this, t);
    }, l.prototype.inspect = function () {
      var t = "",
          n = e.INSPECT_MAX_BYTES;
      return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">";
    }, l.prototype.compare = function (t, e, n, r, o) {
      if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
      if (r >= o && e >= n) return 0;
      if (r >= o) return -1;
      if (e >= n) return 1;
      if (this === t) return 0;

      for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (e >>>= 0), u = Math.min(i, a), s = this.slice(r, o), c = t.slice(e, n), f = 0; f < u; ++f) {
        if (s[f] !== c[f]) {
          i = s[f], a = c[f];
          break;
        }
      }

      return i < a ? -1 : a < i ? 1 : 0;
    }, l.prototype.includes = function (t, e, n) {
      return -1 !== this.indexOf(t, e, n);
    }, l.prototype.indexOf = function (t, e, n) {
      return g(this, t, e, n, !0);
    }, l.prototype.lastIndexOf = function (t, e, n) {
      return g(this, t, e, n, !1);
    }, l.prototype.write = function (t, e, n, r) {
      if (void 0 === e) r = "utf8", n = this.length, e = 0;else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;else {
        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
      }
      var o = this.length - e;
      if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      r || (r = "utf8");

      for (var i = !1;;) {
        switch (r) {
          case "hex":
            return m(this, t, e, n);

          case "utf8":
          case "utf-8":
            return w(this, t, e, n);

          case "ascii":
            return _(this, t, e, n);

          case "latin1":
          case "binary":
            return x(this, t, e, n);

          case "base64":
            return O(this, t, e, n);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return E(this, t, e, n);

          default:
            if (i) throw new TypeError("Unknown encoding: " + r);
            r = ("" + r).toLowerCase(), i = !0;
        }
      }
    }, l.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };

    function T(t, e, n) {
      var r = "";
      n = Math.min(t.length, n);

      for (var o = e; o < n; ++o) {
        r += String.fromCharCode(127 & t[o]);
      }

      return r;
    }

    function k(t, e, n) {
      var r = "";
      n = Math.min(t.length, n);

      for (var o = e; o < n; ++o) {
        r += String.fromCharCode(t[o]);
      }

      return r;
    }

    function j(t, e, n) {
      var r = t.length;
      (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);

      for (var o = "", i = e; i < n; ++i) {
        o += B(t[i]);
      }

      return o;
    }

    function P(t, e, n) {
      for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) {
        o += String.fromCharCode(r[i] + 256 * r[i + 1]);
      }

      return o;
    }

    function N(t, e, n) {
      if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
      if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
    }

    function q(t, e, n, r, o, i) {
      if (!l.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
      if (n + r > t.length) throw new RangeError("Index out of range");
    }

    function R(t, e, n, r) {
      e < 0 && (e = 65535 + e + 1);

      for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) {
        t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o);
      }
    }

    function L(t, e, n, r) {
      e < 0 && (e = 4294967295 + e + 1);

      for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) {
        t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255;
      }
    }

    function C(t, e, n, r, o, i) {
      if (n + r > t.length) throw new RangeError("Index out of range");
      if (n < 0) throw new RangeError("Index out of range");
    }

    function I(t, e, n, r, i) {
      return i || C(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4;
    }

    function M(t, e, n, r, i) {
      return i || C(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8;
    }

    l.prototype.slice = function (t, e) {
      var n,
          r = this.length;
      if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), l.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = l.prototype;else {
        var o = e - t;
        n = new l(o, void 0);

        for (var i = 0; i < o; ++i) {
          n[i] = this[i + t];
        }
      }
      return n;
    }, l.prototype.readUIntLE = function (t, e, n) {
      t |= 0, e |= 0, n || N(t, e, this.length);

      for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) {
        r += this[t + i] * o;
      }

      return r;
    }, l.prototype.readUIntBE = function (t, e, n) {
      t |= 0, e |= 0, n || N(t, e, this.length);

      for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) {
        r += this[t + --e] * o;
      }

      return r;
    }, l.prototype.readUInt8 = function (t, e) {
      return e || N(t, 1, this.length), this[t];
    }, l.prototype.readUInt16LE = function (t, e) {
      return e || N(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, l.prototype.readUInt16BE = function (t, e) {
      return e || N(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, l.prototype.readUInt32LE = function (t, e) {
      return e || N(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, l.prototype.readUInt32BE = function (t, e) {
      return e || N(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, l.prototype.readIntLE = function (t, e, n) {
      t |= 0, e |= 0, n || N(t, e, this.length);

      for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) {
        r += this[t + i] * o;
      }

      return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r;
    }, l.prototype.readIntBE = function (t, e, n) {
      t |= 0, e |= 0, n || N(t, e, this.length);

      for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) {
        i += this[t + --r] * o;
      }

      return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
    }, l.prototype.readInt8 = function (t, e) {
      return e || N(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }, l.prototype.readInt16LE = function (t, e) {
      e || N(t, 2, this.length);
      var n = this[t] | this[t + 1] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, l.prototype.readInt16BE = function (t, e) {
      e || N(t, 2, this.length);
      var n = this[t + 1] | this[t] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, l.prototype.readInt32LE = function (t, e) {
      return e || N(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, l.prototype.readInt32BE = function (t, e) {
      return e || N(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, l.prototype.readFloatLE = function (t, e) {
      return e || N(t, 4, this.length), o.read(this, t, !0, 23, 4);
    }, l.prototype.readFloatBE = function (t, e) {
      return e || N(t, 4, this.length), o.read(this, t, !1, 23, 4);
    }, l.prototype.readDoubleLE = function (t, e) {
      return e || N(t, 8, this.length), o.read(this, t, !0, 52, 8);
    }, l.prototype.readDoubleBE = function (t, e) {
      return e || N(t, 8, this.length), o.read(this, t, !1, 52, 8);
    }, l.prototype.writeUIntLE = function (t, e, n, r) {
      (t = +t, e |= 0, n |= 0, r) || q(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
      var o = 1,
          i = 0;

      for (this[e] = 255 & t; ++i < n && (o *= 256);) {
        this[e + i] = t / o & 255;
      }

      return e + n;
    }, l.prototype.writeUIntBE = function (t, e, n, r) {
      (t = +t, e |= 0, n |= 0, r) || q(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
      var o = n - 1,
          i = 1;

      for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) {
        this[e + o] = t / i & 255;
      }

      return e + n;
    }, l.prototype.writeUInt8 = function (t, e, n) {
      return t = +t, e |= 0, n || q(this, t, e, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
    }, l.prototype.writeUInt16LE = function (t, e, n) {
      return t = +t, e |= 0, n || q(this, t, e, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : R(this, t, e, !0), e + 2;
    }, l.prototype.writeUInt16BE = function (t, e, n) {
      return t = +t, e |= 0, n || q(this, t, e, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : R(this, t, e, !1), e + 2;
    }, l.prototype.writeUInt32LE = function (t, e, n) {
      return t = +t, e |= 0, n || q(this, t, e, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : L(this, t, e, !0), e + 4;
    }, l.prototype.writeUInt32BE = function (t, e, n) {
      return t = +t, e |= 0, n || q(this, t, e, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4;
    }, l.prototype.writeIntLE = function (t, e, n, r) {
      if (t = +t, e |= 0, !r) {
        var o = Math.pow(2, 8 * n - 1);
        q(this, t, e, n, o - 1, -o);
      }

      var i = 0,
          a = 1,
          u = 0;

      for (this[e] = 255 & t; ++i < n && (a *= 256);) {
        t < 0 && 0 === u && 0 !== this[e + i - 1] && (u = 1), this[e + i] = (t / a >> 0) - u & 255;
      }

      return e + n;
    }, l.prototype.writeIntBE = function (t, e, n, r) {
      if (t = +t, e |= 0, !r) {
        var o = Math.pow(2, 8 * n - 1);
        q(this, t, e, n, o - 1, -o);
      }

      var i = n - 1,
          a = 1,
          u = 0;

      for (this[e + i] = 255 & t; --i >= 0 && (a *= 256);) {
        t < 0 && 0 === u && 0 !== this[e + i + 1] && (u = 1), this[e + i] = (t / a >> 0) - u & 255;
      }

      return e + n;
    }, l.prototype.writeInt8 = function (t, e, n) {
      return t = +t, e |= 0, n || q(this, t, e, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
    }, l.prototype.writeInt16LE = function (t, e, n) {
      return t = +t, e |= 0, n || q(this, t, e, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : R(this, t, e, !0), e + 2;
    }, l.prototype.writeInt16BE = function (t, e, n) {
      return t = +t, e |= 0, n || q(this, t, e, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : R(this, t, e, !1), e + 2;
    }, l.prototype.writeInt32LE = function (t, e, n) {
      return t = +t, e |= 0, n || q(this, t, e, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : L(this, t, e, !0), e + 4;
    }, l.prototype.writeInt32BE = function (t, e, n) {
      return t = +t, e |= 0, n || q(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4;
    }, l.prototype.writeFloatLE = function (t, e, n) {
      return I(this, t, e, !0, n);
    }, l.prototype.writeFloatBE = function (t, e, n) {
      return I(this, t, e, !1, n);
    }, l.prototype.writeDoubleLE = function (t, e, n) {
      return M(this, t, e, !0, n);
    }, l.prototype.writeDoubleBE = function (t, e, n) {
      return M(this, t, e, !1, n);
    }, l.prototype.copy = function (t, e, n, r) {
      if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (e < 0) throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
      if (r < 0) throw new RangeError("sourceEnd out of bounds");
      r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
      var o,
          i = r - n;
      if (this === t && n < e && e < r) for (o = i - 1; o >= 0; --o) {
        t[o + e] = this[o + n];
      } else if (i < 1e3 || !l.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) {
        t[o + e] = this[o + n];
      } else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
      return i;
    }, l.prototype.fill = function (t, e, n, r) {
      if ("string" == typeof t) {
        if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
          var o = t.charCodeAt(0);
          o < 256 && (t = o);
        }

        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
        if ("string" == typeof r && !l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
      } else "number" == typeof t && (t &= 255);

      if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
      if (n <= e) return this;
      var i;
      if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < n; ++i) {
        this[i] = t;
      } else {
        var a = l.isBuffer(t) ? t : U(new l(t, r).toString()),
            u = a.length;

        for (i = 0; i < n - e; ++i) {
          this[i + e] = a[i % u];
        }
      }
      return this;
    };
    var D = /[^+\/0-9A-Za-z-_]/g;

    function B(t) {
      return t < 16 ? "0" + t.toString(16) : t.toString(16);
    }

    function U(t, e) {
      var n;
      e = e || 1 / 0;

      for (var r = t.length, o = null, i = [], a = 0; a < r; ++a) {
        if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
          if (!o) {
            if (n > 56319) {
              (e -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }

            if (a + 1 === r) {
              (e -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }

            o = n;
            continue;
          }

          if (n < 56320) {
            (e -= 3) > -1 && i.push(239, 191, 189), o = n;
            continue;
          }

          n = 65536 + (o - 55296 << 10 | n - 56320);
        } else o && (e -= 3) > -1 && i.push(239, 191, 189);

        if (o = null, n < 128) {
          if ((e -= 1) < 0) break;
          i.push(n);
        } else if (n < 2048) {
          if ((e -= 2) < 0) break;
          i.push(n >> 6 | 192, 63 & n | 128);
        } else if (n < 65536) {
          if ((e -= 3) < 0) break;
          i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
        } else {
          if (!(n < 1114112)) throw new Error("Invalid code point");
          if ((e -= 4) < 0) break;
          i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
        }
      }

      return i;
    }

    function F(t) {
      return r.toByteArray(function (t) {
        if ((t = function (t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
        }(t).replace(D, "")).length < 2) return "";

        for (; t.length % 4 != 0;) {
          t += "=";
        }

        return t;
      }(t));
    }

    function J(t, e, n, r) {
      for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) {
        e[o + n] = t[o];
      }

      return o;
    }
  }).call(this, n(112));
}, function (t, e, n) {
  "use strict";

  e.byteLength = function (t) {
    var e = s(t),
        n = e[0],
        r = e[1];
    return 3 * (n + r) / 4 - r;
  }, e.toByteArray = function (t) {
    var e,
        n,
        r = s(t),
        a = r[0],
        u = r[1],
        l = new i(function (t, e, n) {
      return 3 * (e + n) / 4 - n;
    }(0, a, u)),
        c = 0,
        f = u > 0 ? a - 4 : a;

    for (n = 0; n < f; n += 4) {
      e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)], l[c++] = e >> 16 & 255, l[c++] = e >> 8 & 255, l[c++] = 255 & e;
    }

    2 === u && (e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4, l[c++] = 255 & e);
    1 === u && (e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2, l[c++] = e >> 8 & 255, l[c++] = 255 & e);
    return l;
  }, e.fromByteArray = function (t) {
    for (var e, n = t.length, o = n % 3, i = [], a = 0, u = n - o; a < u; a += 16383) {
      i.push(c(t, a, a + 16383 > u ? u : a + 16383));
    }

    1 === o ? (e = t[n - 1], i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
    return i.join("");
  };

  for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, l = a.length; u < l; ++u) {
    r[u] = a[u], o[a.charCodeAt(u)] = u;
  }

  function s(t) {
    var e = t.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var n = t.indexOf("=");
    return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4];
  }

  function c(t, e, n) {
    for (var o, i, a = [], u = e; u < n; u += 3) {
      o = (t[u] << 16 & 16711680) + (t[u + 1] << 8 & 65280) + (255 & t[u + 2]), a.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
    }

    return a.join("");
  }

  o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
}, function (t, e) {
  e.read = function (t, e, n, r, o) {
    var i,
        a,
        u = 8 * o - r - 1,
        l = (1 << u) - 1,
        s = l >> 1,
        c = -7,
        f = n ? o - 1 : 0,
        h = n ? -1 : 1,
        p = t[e + f];

    for (f += h, i = p & (1 << -c) - 1, p >>= -c, c += u; c > 0; i = 256 * i + t[e + f], f += h, c -= 8) {
      ;
    }

    for (a = i & (1 << -c) - 1, i >>= -c, c += r; c > 0; a = 256 * a + t[e + f], f += h, c -= 8) {
      ;
    }

    if (0 === i) i = 1 - s;else {
      if (i === l) return a ? NaN : 1 / 0 * (p ? -1 : 1);
      a += Math.pow(2, r), i -= s;
    }
    return (p ? -1 : 1) * a * Math.pow(2, i - r);
  }, e.write = function (t, e, n, r, o, i) {
    var a,
        u,
        l,
        s = 8 * i - o - 1,
        c = (1 << s) - 1,
        f = c >> 1,
        h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        p = r ? 0 : i - 1,
        d = r ? 1 : -1,
        y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;

    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, a = c) : (a = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (e += a + f >= 1 ? h / l : h * Math.pow(2, 1 - f)) * l >= 2 && (a++, l /= 2), a + f >= c ? (u = 0, a = c) : a + f >= 1 ? (u = (e * l - 1) * Math.pow(2, o), a += f) : (u = e * Math.pow(2, f - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + p] = 255 & u, p += d, u /= 256, o -= 8) {
      ;
    }

    for (a = a << o | u, s += o; s > 0; t[n + p] = 255 & a, p += d, a /= 256, s -= 8) {
      ;
    }

    t[n + p - d] |= 128 * y;
  };
}, function (t, e) {
  var n = {}.toString;

  t.exports = Array.isArray || function (t) {
    return "[object Array]" == n.call(t);
  };
}, function (t, e, n) {
  n(159), n(378);
  var r = n(54);
  t.exports = r;
}, function (t, e, n) {
  n(160), n(161), n(162), n(163), n(164), n(165), n(166), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(174), n(175), n(176), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(71), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(135), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(103), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(275), n(277), n(278), n(279), n(280), n(281), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(295), n(296), n(297), n(298), n(299), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(309), n(310), n(312), n(313), n(314), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(326), n(327), n(328), n(329), n(331), n(332), n(333), n(334), n(335), n(336), n(337), n(338), n(339), n(340), n(341), n(342), n(343), n(344), n(345), n(346), n(347), n(348), n(349), n(350), n(351), n(352), n(353), n(354), n(355), n(356), n(357), n(358), n(359), n(360), n(361), n(362), n(363), n(364), n(365), n(366), n(367), n(368), n(369), n(370), n(371), n(372), n(373), n(374), n(375), n(376), n(377);
  var r = n(54);
  t.exports = r;
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(2),
      i = n(22),
      a = n(25),
      u = n(5),
      l = n(93),
      s = n(117),
      c = n(1),
      f = n(11),
      h = n(43),
      p = n(3),
      d = n(4),
      y = n(10),
      v = n(21),
      g = n(28),
      b = n(31),
      m = n(30),
      w = n(57),
      _ = n(42),
      x = n(119),
      O = n(92),
      E = n(13),
      S = n(9),
      A = n(67),
      T = n(15),
      k = n(16),
      j = n(89),
      P = n(68),
      N = n(53),
      q = n(52),
      R = n(6),
      L = n(120),
      C = n(19),
      I = n(29),
      M = n(17),
      D = n(12).forEach,
      B = P("hidden"),
      U = R("toPrimitive"),
      F = M.set,
      J = M.getterFor("Symbol"),
      H = Object.prototype,
      _z = o.Symbol,
      Y = i("JSON", "stringify"),
      W = E.f,
      K = S.f,
      V = x.f,
      G = A.f,
      Z = j("symbols"),
      $ = j("op-symbols"),
      X = j("string-to-symbol-registry"),
      Q = j("symbol-to-string-registry"),
      tt = j("wks"),
      et = o.QObject,
      nt = !et || !et.prototype || !et.prototype.findChild,
      rt = u && c(function () {
    return 7 != m(K({}, "a", {
      get: function get() {
        return K(this, "a", {
          value: 7
        }).a;
      }
    })).a;
  }) ? function (t, e, n) {
    var r = W(H, e);
    r && delete H[e], K(t, e, n), r && t !== H && K(H, e, r);
  } : K,
      ot = function ot(t, e) {
    var n = Z[t] = m(_z.prototype);
    return F(n, {
      type: "Symbol",
      tag: t,
      description: e
    }), u || (n.description = e), n;
  },
      it = s ? function (t) {
    return "symbol" == _typeof(t);
  } : function (t) {
    return Object(t) instanceof _z;
  },
      at = function at(t, e, n) {
    t === H && at($, e, n), d(t);
    var r = g(e, !0);
    return d(n), f(Z, r) ? (n.enumerable ? (f(t, B) && t[B][r] && (t[B][r] = !1), n = m(n, {
      enumerable: b(0, !1)
    })) : (f(t, B) || K(t, B, b(1, {})), t[B][r] = !0), rt(t, r, n)) : K(t, r, n);
  },
      ut = function ut(t, e) {
    d(t);
    var n = v(e),
        r = w(n).concat(ft(n));
    return D(r, function (e) {
      u && !lt.call(n, e) || at(t, e, n[e]);
    }), t;
  },
      lt = function lt(t) {
    var e = g(t, !0),
        n = G.call(this, e);
    return !(this === H && f(Z, e) && !f($, e)) && (!(n || !f(this, e) || !f(Z, e) || f(this, B) && this[B][e]) || n);
  },
      st = function st(t, e) {
    var n = v(t),
        r = g(e, !0);

    if (n !== H || !f(Z, r) || f($, r)) {
      var o = W(n, r);
      return !o || !f(Z, r) || f(n, B) && n[B][r] || (o.enumerable = !0), o;
    }
  },
      ct = function ct(t) {
    var e = V(v(t)),
        n = [];
    return D(e, function (t) {
      f(Z, t) || f(N, t) || n.push(t);
    }), n;
  },
      ft = function ft(t) {
    var e = t === H,
        n = V(e ? $ : v(t)),
        r = [];
    return D(n, function (t) {
      !f(Z, t) || e && !f(H, t) || r.push(Z[t]);
    }), r;
  };

  (l || (k((_z = function z() {
    if (this instanceof _z) throw TypeError("Symbol is not a constructor");

    var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
        e = q(t),
        n = function n(t) {
      this === H && n.call($, t), f(this, B) && f(this[B], e) && (this[B][e] = !1), rt(this, e, b(1, t));
    };

    return u && nt && rt(H, e, {
      configurable: !0,
      set: n
    }), ot(e, t);
  }).prototype, "toString", function () {
    return J(this).tag;
  }), k(_z, "withoutSetter", function (t) {
    return ot(q(t), t);
  }), A.f = lt, S.f = at, E.f = st, _.f = x.f = ct, O.f = ft, L.f = function (t) {
    return ot(R(t), t);
  }, u && (K(_z.prototype, "description", {
    configurable: !0,
    get: function get() {
      return J(this).description;
    }
  }), a || k(H, "propertyIsEnumerable", lt, {
    unsafe: !0
  }))), r({
    global: !0,
    wrap: !0,
    forced: !l,
    sham: !l
  }, {
    Symbol: _z
  }), D(w(tt), function (t) {
    C(t);
  }), r({
    target: "Symbol",
    stat: !0,
    forced: !l
  }, {
    for: function _for(t) {
      var e = String(t);
      if (f(X, e)) return X[e];

      var n = _z(e);

      return X[e] = n, Q[n] = e, n;
    },
    keyFor: function keyFor(t) {
      if (!it(t)) throw TypeError(t + " is not a symbol");
      if (f(Q, t)) return Q[t];
    },
    useSetter: function useSetter() {
      nt = !0;
    },
    useSimple: function useSimple() {
      nt = !1;
    }
  }), r({
    target: "Object",
    stat: !0,
    forced: !l,
    sham: !u
  }, {
    create: function create(t, e) {
      return void 0 === e ? m(t) : ut(m(t), e);
    },
    defineProperty: at,
    defineProperties: ut,
    getOwnPropertyDescriptor: st
  }), r({
    target: "Object",
    stat: !0,
    forced: !l
  }, {
    getOwnPropertyNames: ct,
    getOwnPropertySymbols: ft
  }), r({
    target: "Object",
    stat: !0,
    forced: c(function () {
      O.f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(t) {
      return O.f(y(t));
    }
  }), Y) && r({
    target: "JSON",
    stat: !0,
    forced: !l || c(function () {
      var t = _z();

      return "[null]" != Y([t]) || "{}" != Y({
        a: t
      }) || "{}" != Y(Object(t));
    })
  }, {
    stringify: function stringify(t, e, n) {
      for (var r, o = [t], i = 1; arguments.length > i;) {
        o.push(arguments[i++]);
      }

      if (r = e, (p(e) || void 0 !== t) && !it(t)) return h(e) || (e = function e(t, _e2) {
        if ("function" == typeof r && (_e2 = r.call(this, t, _e2)), !it(_e2)) return _e2;
      }), o[1] = e, Y.apply(null, o);
    }
  });
  _z.prototype[U] || T(_z.prototype, U, _z.prototype.valueOf), I(_z, "Symbol"), N[B] = !0;
}, function (t, e, n) {
  n(19)("asyncIterator");
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(5),
      i = n(2),
      a = n(11),
      u = n(3),
      l = n(9).f,
      s = n(115),
      c = i.Symbol;

  if (o && "function" == typeof c && (!("description" in c.prototype) || void 0 !== c().description)) {
    var f = {},
        h = function h() {
      var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
          e = this instanceof h ? new c(t) : void 0 === t ? c() : c(t);
      return "" === t && (f[e] = !0), e;
    };

    s(h, c);
    var p = h.prototype = c.prototype;
    p.constructor = h;
    var d = p.toString,
        y = "Symbol(test)" == String(c("test")),
        v = /^Symbol\((.*)\)[^)]+$/;
    l(p, "description", {
      configurable: !0,
      get: function get() {
        var t = u(this) ? this.valueOf() : this,
            e = d.call(t);
        if (a(f, t)) return "";
        var n = y ? e.slice(7, -1) : e.replace(v, "$1");
        return "" === n ? void 0 : n;
      }
    }), r({
      global: !0,
      forced: !0
    }, {
      Symbol: h
    });
  }
}, function (t, e, n) {
  n(19)("hasInstance");
}, function (t, e, n) {
  n(19)("isConcatSpreadable");
}, function (t, e, n) {
  n(19)("iterator");
}, function (t, e, n) {
  n(19)("match");
}, function (t, e, n) {
  n(19)("matchAll");
}, function (t, e, n) {
  n(19)("replace");
}, function (t, e, n) {
  n(19)("search");
}, function (t, e, n) {
  n(19)("species");
}, function (t, e, n) {
  n(19)("split");
}, function (t, e, n) {
  n(19)("toPrimitive");
}, function (t, e, n) {
  n(19)("toStringTag");
}, function (t, e, n) {
  n(19)("unscopables");
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(27),
      i = n(38),
      a = n(30),
      u = n(15),
      l = n(31),
      s = n(39),
      c = function c(t, e) {
    var n = this;
    if (!(n instanceof c)) return new c(t, e);
    i && (n = i(new Error(void 0), o(n))), void 0 !== e && u(n, "message", String(e));
    var r = [];
    return s(t, r.push, {
      that: r
    }), u(n, "errors", r), n;
  };

  c.prototype = a(Error.prototype, {
    constructor: l(5, c),
    message: l(5, ""),
    name: l(5, "AggregateError")
  }), r({
    global: !0
  }, {
    AggregateError: c
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(123);
  r({
    target: "Array",
    stat: !0,
    forced: !n(69)(function (t) {
      Array.from(t);
    })
  }, {
    from: o
  });
}, function (t, e, n) {
  var r = n(4),
      o = n(122);

  t.exports = function (t, e, n, i) {
    try {
      return i ? e(r(n)[0], n[1]) : e(n);
    } catch (e) {
      throw o(t), e;
    }
  };
}, function (t, e, n) {
  n(0)({
    target: "Array",
    stat: !0
  }, {
    isArray: n(43)
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(1),
      i = n(44);
  r({
    target: "Array",
    stat: !0,
    forced: o(function () {
      function t() {}

      return !(Array.of.call(t) instanceof t);
    })
  }, {
    of: function of() {
      for (var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;) {
        i(n, t, arguments[t++]);
      }

      return n.length = e, n;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(1),
      i = n(43),
      a = n(3),
      u = n(10),
      l = n(7),
      s = n(44),
      c = n(58),
      f = n(62),
      h = n(6),
      p = n(63),
      d = h("isConcatSpreadable"),
      y = p >= 51 || !o(function () {
    var t = [];
    return t[d] = !1, t.concat()[0] !== t;
  }),
      v = f("concat"),
      g = function g(t) {
    if (!a(t)) return !1;
    var e = t[d];
    return void 0 !== e ? !!e : i(t);
  };

  r({
    target: "Array",
    proto: !0,
    forced: !y || !v
  }, {
    concat: function concat(t) {
      var e,
          n,
          r,
          o,
          i,
          a = u(this),
          f = c(a, 0),
          h = 0;

      for (e = -1, r = arguments.length; e < r; e++) {
        if (g(i = -1 === e ? a : arguments[e])) {
          if (h + (o = l(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");

          for (n = 0; n < o; n++, h++) {
            n in i && s(f, h, i[n]);
          }
        } else {
          if (h >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
          s(f, h++, i);
        }
      }

      return f.length = h, f;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(124),
      i = n(40);
  r({
    target: "Array",
    proto: !0
  }, {
    copyWithin: o
  }), i("copyWithin");
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(12).every,
      i = n(33),
      a = n(20),
      u = i("every"),
      l = a("every");
  r({
    target: "Array",
    proto: !0,
    forced: !u || !l
  }, {
    every: function every(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(98),
      i = n(40);
  r({
    target: "Array",
    proto: !0
  }, {
    fill: o
  }), i("fill");
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(12).filter,
      i = n(62),
      a = n(20),
      u = i("filter"),
      l = a("filter");
  r({
    target: "Array",
    proto: !0,
    forced: !u || !l
  }, {
    filter: function filter(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(12).find,
      i = n(40),
      a = n(20),
      u = !0,
      l = a("find");
  "find" in [] && Array(1).find(function () {
    u = !1;
  }), r({
    target: "Array",
    proto: !0,
    forced: u || !l
  }, {
    find: function find(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), i("find");
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(12).findIndex,
      i = n(40),
      a = n(20),
      u = !0,
      l = a("findIndex");
  "findIndex" in [] && Array(1).findIndex(function () {
    u = !1;
  }), r({
    target: "Array",
    proto: !0,
    forced: u || !l
  }, {
    findIndex: function findIndex(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), i("findIndex");
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(125),
      i = n(10),
      a = n(7),
      u = n(26),
      l = n(58);
  r({
    target: "Array",
    proto: !0
  }, {
    flat: function flat() {
      var t = arguments.length ? arguments[0] : void 0,
          e = i(this),
          n = a(e.length),
          r = l(e, 0);
      return r.length = o(r, e, e, n, 0, void 0 === t ? 1 : u(t)), r;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(125),
      i = n(10),
      a = n(7),
      u = n(18),
      l = n(58);
  r({
    target: "Array",
    proto: !0
  }, {
    flatMap: function flatMap(t) {
      var e,
          n = i(this),
          r = a(n.length);
      return u(t), (e = l(n, 0)).length = o(e, n, n, r, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), e;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(126);
  r({
    target: "Array",
    proto: !0,
    forced: [].forEach != o
  }, {
    forEach: o
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(55).includes,
      i = n(40);
  r({
    target: "Array",
    proto: !0,
    forced: !n(20)("indexOf", {
      ACCESSORS: !0,
      1: 0
    })
  }, {
    includes: function includes(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), i("includes");
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(55).indexOf,
      i = n(33),
      a = n(20),
      u = [].indexOf,
      l = !!u && 1 / [1].indexOf(1, -0) < 0,
      s = i("indexOf"),
      c = a("indexOf", {
    ACCESSORS: !0,
    1: 0
  });
  r({
    target: "Array",
    proto: !0,
    forced: l || !s || !c
  }, {
    indexOf: function indexOf(t) {
      return l ? u.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(51),
      i = n(21),
      a = n(33),
      u = [].join,
      l = o != Object,
      s = a("join", ",");
  r({
    target: "Array",
    proto: !0,
    forced: l || !s
  }, {
    join: function join(t) {
      return u.call(i(this), void 0 === t ? "," : t);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(127);
  r({
    target: "Array",
    proto: !0,
    forced: o !== [].lastIndexOf
  }, {
    lastIndexOf: o
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(12).map,
      i = n(62),
      a = n(20),
      u = i("map"),
      l = a("map");
  r({
    target: "Array",
    proto: !0,
    forced: !u || !l
  }, {
    map: function map(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(70).left,
      i = n(33),
      a = n(20),
      u = n(63),
      l = n(46),
      s = i("reduce"),
      c = a("reduce", {
    1: 0
  });
  r({
    target: "Array",
    proto: !0,
    forced: !s || !c || !l && u > 79 && u < 83
  }, {
    reduce: function reduce(t) {
      return o(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(70).right,
      i = n(33),
      a = n(20),
      u = n(63),
      l = n(46),
      s = i("reduceRight"),
      c = a("reduce", {
    1: 0
  });
  r({
    target: "Array",
    proto: !0,
    forced: !s || !c || !l && u > 79 && u < 83
  }, {
    reduceRight: function reduceRight(t) {
      return o(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(43),
      i = [].reverse,
      a = [1, 2];
  r({
    target: "Array",
    proto: !0,
    forced: String(a) === String(a.reverse())
  }, {
    reverse: function reverse() {
      return o(this) && (this.length = this.length), i.call(this);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(3),
      i = n(43),
      a = n(36),
      u = n(7),
      l = n(21),
      s = n(44),
      c = n(6),
      f = n(62),
      h = n(20),
      p = f("slice"),
      d = h("slice", {
    ACCESSORS: !0,
    0: 0,
    1: 2
  }),
      y = c("species"),
      v = [].slice,
      g = Math.max;
  r({
    target: "Array",
    proto: !0,
    forced: !p || !d
  }, {
    slice: function slice(t, e) {
      var n,
          r,
          c,
          f = l(this),
          h = u(f.length),
          p = a(t, h),
          d = a(void 0 === e ? h : e, h);
      if (i(f) && ("function" != typeof (n = f.constructor) || n !== Array && !i(n.prototype) ? o(n) && null === (n = n[y]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return v.call(f, p, d);

      for (r = new (void 0 === n ? Array : n)(g(d - p, 0)), c = 0; p < d; p++, c++) {
        p in f && s(r, c, f[p]);
      }

      return r.length = c, r;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(12).some,
      i = n(33),
      a = n(20),
      u = i("some"),
      l = a("some");
  r({
    target: "Array",
    proto: !0,
    forced: !u || !l
  }, {
    some: function some(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(18),
      i = n(10),
      a = n(1),
      u = n(33),
      l = [],
      s = l.sort,
      c = a(function () {
    l.sort(void 0);
  }),
      f = a(function () {
    l.sort(null);
  }),
      h = u("sort");
  r({
    target: "Array",
    proto: !0,
    forced: c || !f || !h
  }, {
    sort: function sort(t) {
      return void 0 === t ? s.call(i(this)) : s.call(i(this), o(t));
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(36),
      i = n(26),
      a = n(7),
      u = n(10),
      l = n(58),
      s = n(44),
      c = n(62),
      f = n(20),
      h = c("splice"),
      p = f("splice", {
    ACCESSORS: !0,
    0: 0,
    1: 2
  }),
      d = Math.max,
      y = Math.min;
  r({
    target: "Array",
    proto: !0,
    forced: !h || !p
  }, {
    splice: function splice(t, e) {
      var n,
          r,
          c,
          f,
          h,
          p,
          v = u(this),
          g = a(v.length),
          b = o(t, g),
          m = arguments.length;
      if (0 === m ? n = r = 0 : 1 === m ? (n = 0, r = g - b) : (n = m - 2, r = y(d(i(e), 0), g - b)), g + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");

      for (c = l(v, r), f = 0; f < r; f++) {
        (h = b + f) in v && s(c, f, v[h]);
      }

      if (c.length = r, n < r) {
        for (f = b; f < g - r; f++) {
          p = f + n, (h = f + r) in v ? v[p] = v[h] : delete v[p];
        }

        for (f = g; f > g - r + n; f--) {
          delete v[f - 1];
        }
      } else if (n > r) for (f = g - r; f > b; f--) {
        p = f + n - 1, (h = f + r - 1) in v ? v[p] = v[h] : delete v[p];
      }

      for (f = 0; f < n; f++) {
        v[f + b] = arguments[f + 2];
      }

      return v.length = g - r + n, c;
    }
  });
}, function (t, e, n) {
  n(47)("Array");
}, function (t, e, n) {
  n(40)("flat");
}, function (t, e, n) {
  n(40)("flatMap");
}, function (t, e, n) {
  n(0)({
    target: "Function",
    proto: !0
  }, {
    bind: n(129)
  });
}, function (t, e, n) {
  var r = n(5),
      o = n(9).f,
      i = Function.prototype,
      a = i.toString,
      u = /^\s*function ([^ (]*)/;
  r && !("name" in i) && o(i, "name", {
    configurable: !0,
    get: function get() {
      try {
        return a.call(this).match(u)[1];
      } catch (t) {
        return "";
      }
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(3),
      o = n(9),
      i = n(27),
      a = n(6)("hasInstance"),
      u = Function.prototype;
  a in u || o.f(u, a, {
    value: function value(t) {
      if ("function" != typeof this || !r(t)) return !1;
      if (!r(this.prototype)) return t instanceof this;

      for (; t = i(t);) {
        if (this.prototype === t) return !0;
      }

      return !1;
    }
  });
}, function (t, e, n) {
  n(0)({
    global: !0
  }, {
    globalThis: n(2)
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(130);
  r({
    target: "Object",
    stat: !0,
    forced: Object.assign !== o
  }, {
    assign: o
  });
}, function (t, e, n) {
  n(0)({
    target: "Object",
    stat: !0,
    sham: !n(5)
  }, {
    create: n(30)
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(5);
  r({
    target: "Object",
    stat: !0,
    forced: !o,
    sham: !o
  }, {
    defineProperty: n(9).f
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(5);
  r({
    target: "Object",
    stat: !0,
    forced: !o,
    sham: !o
  }, {
    defineProperties: n(94)
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(131).entries;
  r({
    target: "Object",
    stat: !0
  }, {
    entries: function entries(t) {
      return o(t);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(65),
      i = n(1),
      a = n(3),
      u = n(45).onFreeze,
      l = Object.freeze;
  r({
    target: "Object",
    stat: !0,
    forced: i(function () {
      l(1);
    }),
    sham: !o
  }, {
    freeze: function freeze(t) {
      return l && a(t) ? l(u(t)) : t;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(39),
      i = n(44);
  r({
    target: "Object",
    stat: !0
  }, {
    fromEntries: function fromEntries(t) {
      var e = {};
      return o(t, function (t, n) {
        i(e, t, n);
      }, {
        AS_ENTRIES: !0
      }), e;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(1),
      i = n(21),
      a = n(13).f,
      u = n(5),
      l = o(function () {
    a(1);
  });
  r({
    target: "Object",
    stat: !0,
    forced: !u || l,
    sham: !u
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
      return a(i(t), e);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(5),
      i = n(90),
      a = n(21),
      u = n(13),
      l = n(44);
  r({
    target: "Object",
    stat: !0,
    sham: !o
  }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
      for (var e, n, r = a(t), o = u.f, s = i(r), c = {}, f = 0; s.length > f;) {
        void 0 !== (n = o(r, e = s[f++])) && l(c, e, n);
      }

      return c;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(1),
      i = n(119).f;
  r({
    target: "Object",
    stat: !0,
    forced: o(function () {
      return !Object.getOwnPropertyNames(1);
    })
  }, {
    getOwnPropertyNames: i
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(1),
      i = n(10),
      a = n(27),
      u = n(95);
  r({
    target: "Object",
    stat: !0,
    forced: o(function () {
      a(1);
    }),
    sham: !u
  }, {
    getPrototypeOf: function getPrototypeOf(t) {
      return a(i(t));
    }
  });
}, function (t, e, n) {
  n(0)({
    target: "Object",
    stat: !0
  }, {
    is: n(132)
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(1),
      i = n(3),
      a = Object.isExtensible;
  r({
    target: "Object",
    stat: !0,
    forced: o(function () {
      a(1);
    })
  }, {
    isExtensible: function isExtensible(t) {
      return !!i(t) && (!a || a(t));
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(1),
      i = n(3),
      a = Object.isFrozen;
  r({
    target: "Object",
    stat: !0,
    forced: o(function () {
      a(1);
    })
  }, {
    isFrozen: function isFrozen(t) {
      return !i(t) || !!a && a(t);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(1),
      i = n(3),
      a = Object.isSealed;
  r({
    target: "Object",
    stat: !0,
    forced: o(function () {
      a(1);
    })
  }, {
    isSealed: function isSealed(t) {
      return !i(t) || !!a && a(t);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(10),
      i = n(57);
  r({
    target: "Object",
    stat: !0,
    forced: n(1)(function () {
      i(1);
    })
  }, {
    keys: function keys(t) {
      return i(o(t));
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(3),
      i = n(45).onFreeze,
      a = n(65),
      u = n(1),
      l = Object.preventExtensions;
  r({
    target: "Object",
    stat: !0,
    forced: u(function () {
      l(1);
    }),
    sham: !a
  }, {
    preventExtensions: function preventExtensions(t) {
      return l && o(t) ? l(i(t)) : t;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(3),
      i = n(45).onFreeze,
      a = n(65),
      u = n(1),
      l = Object.seal;
  r({
    target: "Object",
    stat: !0,
    forced: u(function () {
      l(1);
    }),
    sham: !a
  }, {
    seal: function seal(t) {
      return l && o(t) ? l(i(t)) : t;
    }
  });
}, function (t, e, n) {
  n(0)({
    target: "Object",
    stat: !0
  }, {
    setPrototypeOf: n(38)
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(131).values;
  r({
    target: "Object",
    stat: !0
  }, {
    values: function values(t) {
      return o(t);
    }
  });
}, function (t, e, n) {
  var r = n(97),
      o = n(16),
      i = n(230);
  r || o(Object.prototype, "toString", i, {
    unsafe: !0
  });
}, function (t, e, n) {
  "use strict";

  var r = n(97),
      o = n(61);
  t.exports = r ? {}.toString : function () {
    return "[object " + o(this) + "]";
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(5),
      i = n(72),
      a = n(10),
      u = n(18),
      l = n(9);
  o && r({
    target: "Object",
    proto: !0,
    forced: i
  }, {
    __defineGetter__: function __defineGetter__(t, e) {
      l.f(a(this), t, {
        get: u(e),
        enumerable: !0,
        configurable: !0
      });
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(5),
      i = n(72),
      a = n(10),
      u = n(18),
      l = n(9);
  o && r({
    target: "Object",
    proto: !0,
    forced: i
  }, {
    __defineSetter__: function __defineSetter__(t, e) {
      l.f(a(this), t, {
        set: u(e),
        enumerable: !0,
        configurable: !0
      });
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(5),
      i = n(72),
      a = n(10),
      u = n(28),
      l = n(27),
      s = n(13).f;
  o && r({
    target: "Object",
    proto: !0,
    forced: i
  }, {
    __lookupGetter__: function __lookupGetter__(t) {
      var e,
          n = a(this),
          r = u(t, !0);

      do {
        if (e = s(n, r)) return e.get;
      } while (n = l(n));
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(5),
      i = n(72),
      a = n(10),
      u = n(28),
      l = n(27),
      s = n(13).f;
  o && r({
    target: "Object",
    proto: !0,
    forced: i
  }, {
    __lookupSetter__: function __lookupSetter__(t) {
      var e,
          n = a(this),
          r = u(t, !0);

      do {
        if (e = s(n, r)) return e.set;
      } while (n = l(n));
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(36),
      i = String.fromCharCode,
      a = String.fromCodePoint;
  r({
    target: "String",
    stat: !0,
    forced: !!a && 1 != a.length
  }, {
    fromCodePoint: function fromCodePoint(t) {
      for (var e, n = [], r = arguments.length, a = 0; r > a;) {
        if (e = +arguments[a++], o(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
        n.push(e < 65536 ? i(e) : i(55296 + ((e -= 65536) >> 10), e % 1024 + 56320));
      }

      return n.join("");
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(21),
      i = n(7);
  r({
    target: "String",
    stat: !0
  }, {
    raw: function raw(t) {
      for (var e = o(t.raw), n = i(e.length), r = arguments.length, a = [], u = 0; n > u;) {
        a.push(String(e[u++])), u < r && a.push(String(arguments[u]));
      }

      return a.join("");
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(73).codeAt;
  r({
    target: "String",
    proto: !0
  }, {
    codePointAt: function codePointAt(t) {
      return o(this, t);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r,
      o = n(0),
      i = n(13).f,
      a = n(7),
      u = n(101),
      l = n(14),
      s = n(102),
      c = n(25),
      f = "".endsWith,
      h = Math.min,
      p = s("endsWith");
  o({
    target: "String",
    proto: !0,
    forced: !!(c || p || (r = i(String.prototype, "endsWith"), !r || r.writable)) && !p
  }, {
    endsWith: function endsWith(t) {
      var e = String(l(this));
      u(t);
      var n = arguments.length > 1 ? arguments[1] : void 0,
          r = a(e.length),
          o = void 0 === n ? r : h(a(n), r),
          i = String(t);
      return f ? f.call(e, i, o) : e.slice(o - i.length, o) === i;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(101),
      i = n(14);
  r({
    target: "String",
    proto: !0,
    forced: !n(102)("includes")
  }, {
    includes: function includes(t) {
      return !!~String(i(this)).indexOf(o(t), arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(74),
      o = n(4),
      i = n(7),
      a = n(14),
      u = n(77),
      l = n(78);
  r("match", 1, function (t, e, n) {
    return [function (e) {
      var n = a(this),
          r = null == e ? void 0 : e[t];
      return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
    }, function (t) {
      var r = n(e, t, this);
      if (r.done) return r.value;
      var a = o(t),
          s = String(this);
      if (!a.global) return l(a, s);
      var c = a.unicode;
      a.lastIndex = 0;

      for (var f, h = [], p = 0; null !== (f = l(a, s));) {
        var d = String(f[0]);
        h[p] = d, "" === d && (a.lastIndex = u(s, i(a.lastIndex), c)), p++;
      }

      return 0 === p ? null : h;
    }];
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(100),
      i = n(14),
      a = n(7),
      u = n(18),
      l = n(4),
      s = n(32),
      c = n(66),
      f = n(48),
      h = n(15),
      p = n(1),
      d = n(6),
      y = n(34),
      v = n(77),
      g = n(17),
      b = n(25),
      m = d("matchAll"),
      w = g.set,
      _ = g.getterFor("RegExp String Iterator"),
      x = RegExp.prototype,
      O = x.exec,
      E = "".matchAll,
      S = !!E && !p(function () {
    "a".matchAll(/./);
  }),
      A = o(function (t, e, n, r) {
    w(this, {
      type: "RegExp String Iterator",
      regexp: t,
      string: e,
      global: n,
      unicode: r,
      done: !1
    });
  }, "RegExp String", function () {
    var t = _(this);

    if (t.done) return {
      value: void 0,
      done: !0
    };

    var e = t.regexp,
        n = t.string,
        r = function (t, e) {
      var n,
          r = t.exec;

      if ("function" == typeof r) {
        if ("object" != _typeof(n = r.call(t, e))) throw TypeError("Incorrect exec result");
        return n;
      }

      return O.call(t, e);
    }(e, n);

    return null === r ? {
      value: void 0,
      done: t.done = !0
    } : t.global ? ("" == String(r[0]) && (e.lastIndex = v(n, a(e.lastIndex), t.unicode)), {
      value: r,
      done: !1
    }) : (t.done = !0, {
      value: r,
      done: !1
    });
  }),
      T = function T(t) {
    var e,
        n,
        r,
        o,
        i,
        u,
        s = l(this),
        c = String(t);
    return e = y(s, RegExp), void 0 === (n = s.flags) && s instanceof RegExp && !("flags" in x) && (n = f.call(s)), r = void 0 === n ? "" : String(n), o = new e(e === RegExp ? s.source : s, r), i = !!~r.indexOf("g"), u = !!~r.indexOf("u"), o.lastIndex = a(s.lastIndex), new A(o, c, i, u);
  };

  r({
    target: "String",
    proto: !0,
    forced: S
  }, {
    matchAll: function matchAll(t) {
      var e,
          n,
          r,
          o = i(this);

      if (null != t) {
        if (c(t) && !~String(i("flags" in x ? t.flags : f.call(t))).indexOf("g")) throw TypeError("`.matchAll` does not allow non-global regexes");
        if (S) return E.apply(o, arguments);
        if (void 0 === (n = t[m]) && b && "RegExp" == s(t) && (n = T), null != n) return u(n).call(t, o);
      } else if (S) return E.apply(o, arguments);

      return e = String(o), r = new RegExp(t, "g"), b ? T.call(r, e) : r[m](e);
    }
  }), b || m in x || h(x, m, T);
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(104).end;
  r({
    target: "String",
    proto: !0,
    forced: n(133)
  }, {
    padEnd: function padEnd(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(104).start;
  r({
    target: "String",
    proto: !0,
    forced: n(133)
  }, {
    padStart: function padStart(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (t, e, n) {
  n(0)({
    target: "String",
    proto: !0
  }, {
    repeat: n(105)
  });
}, function (t, e, n) {
  "use strict";

  var r = n(74),
      o = n(4),
      i = n(7),
      a = n(26),
      u = n(14),
      l = n(77),
      s = n(134),
      c = n(78),
      f = Math.max,
      h = Math.min;
  r("replace", 2, function (t, e, n, r) {
    var p = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        d = r.REPLACE_KEEPS_$0,
        y = p ? "$" : "$0";
    return [function (n, r) {
      var o = u(this),
          i = null == n ? void 0 : n[t];
      return void 0 !== i ? i.call(n, o, r) : e.call(String(o), n, r);
    }, function (t, r) {
      if (!p && d || "string" == typeof r && -1 === r.indexOf(y)) {
        var u = n(e, t, this, r);
        if (u.done) return u.value;
      }

      var v = o(t),
          g = String(this),
          b = "function" == typeof r;
      b || (r = String(r));
      var m = v.global;

      if (m) {
        var w = v.unicode;
        v.lastIndex = 0;
      }

      for (var _ = [];;) {
        var x = c(v, g);
        if (null === x) break;
        if (_.push(x), !m) break;
        "" === String(x[0]) && (v.lastIndex = l(g, i(v.lastIndex), w));
      }

      for (var O, E = "", S = 0, A = 0; A < _.length; A++) {
        x = _[A];

        for (var T = String(x[0]), k = f(h(a(x.index), g.length), 0), j = [], P = 1; P < x.length; P++) {
          j.push(void 0 === (O = x[P]) ? O : String(O));
        }

        var N = x.groups;

        if (b) {
          var q = [T].concat(j, k, g);
          void 0 !== N && q.push(N);
          var R = String(r.apply(void 0, q));
        } else R = s(T, g, k, j, N, r);

        k >= S && (E += g.slice(S, k) + R, S = k + T.length);
      }

      return E + g.slice(S);
    }];
  });
}, function (t, e, n) {
  "use strict";

  var r = n(74),
      o = n(4),
      i = n(14),
      a = n(132),
      u = n(78);
  r("search", 1, function (t, e, n) {
    return [function (e) {
      var n = i(this),
          r = null == e ? void 0 : e[t];
      return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
    }, function (t) {
      var r = n(e, t, this);
      if (r.done) return r.value;
      var i = o(t),
          l = String(this),
          s = i.lastIndex;
      a(s, 0) || (i.lastIndex = 0);
      var c = u(i, l);
      return a(i.lastIndex, s) || (i.lastIndex = s), null === c ? -1 : c.index;
    }];
  });
}, function (t, e, n) {
  "use strict";

  var r = n(74),
      o = n(66),
      i = n(4),
      a = n(14),
      u = n(34),
      l = n(77),
      s = n(7),
      c = n(78),
      f = n(75),
      h = n(1),
      p = [].push,
      d = Math.min,
      y = !h(function () {
    return !RegExp(4294967295, "y");
  });
  r("split", 2, function (t, e, n) {
    var r;
    return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, n) {
      var r = String(a(this)),
          i = void 0 === n ? 4294967295 : n >>> 0;
      if (0 === i) return [];
      if (void 0 === t) return [r];
      if (!o(t)) return e.call(r, t, i);

      for (var u, l, s, c = [], h = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), d = 0, y = new RegExp(t.source, h + "g"); (u = f.call(y, r)) && !((l = y.lastIndex) > d && (c.push(r.slice(d, u.index)), u.length > 1 && u.index < r.length && p.apply(c, u.slice(1)), s = u[0].length, d = l, c.length >= i));) {
        y.lastIndex === u.index && y.lastIndex++;
      }

      return d === r.length ? !s && y.test("") || c.push("") : c.push(r.slice(d)), c.length > i ? c.slice(0, i) : c;
    } : "0".split(void 0, 0).length ? function (t, n) {
      return void 0 === t && 0 === n ? [] : e.call(this, t, n);
    } : e, [function (e, n) {
      var o = a(this),
          i = null == e ? void 0 : e[t];
      return void 0 !== i ? i.call(e, o, n) : r.call(String(o), e, n);
    }, function (t, o) {
      var a = n(r, t, this, o, r !== e);
      if (a.done) return a.value;
      var f = i(t),
          h = String(this),
          p = u(f, RegExp),
          v = f.unicode,
          g = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (y ? "y" : "g"),
          b = new p(y ? f : "^(?:" + f.source + ")", g),
          m = void 0 === o ? 4294967295 : o >>> 0;
      if (0 === m) return [];
      if (0 === h.length) return null === c(b, h) ? [h] : [];

      for (var w = 0, _ = 0, x = []; _ < h.length;) {
        b.lastIndex = y ? _ : 0;
        var O,
            E = c(b, y ? h : h.slice(_));
        if (null === E || (O = d(s(b.lastIndex + (y ? 0 : _)), h.length)) === w) _ = l(h, _, v);else {
          if (x.push(h.slice(w, _)), x.length === m) return x;

          for (var S = 1; S <= E.length - 1; S++) {
            if (x.push(E[S]), x.length === m) return x;
          }

          _ = w = O;
        }
      }

      return x.push(h.slice(w)), x;
    }];
  }, !y);
}, function (t, e, n) {
  "use strict";

  var r,
      o = n(0),
      i = n(13).f,
      a = n(7),
      u = n(101),
      l = n(14),
      s = n(102),
      c = n(25),
      f = "".startsWith,
      h = Math.min,
      p = s("startsWith");
  o({
    target: "String",
    proto: !0,
    forced: !!(c || p || (r = i(String.prototype, "startsWith"), !r || r.writable)) && !p
  }, {
    startsWith: function startsWith(t) {
      var e = String(l(this));
      u(t);
      var n = a(h(arguments.length > 1 ? arguments[1] : void 0, e.length)),
          r = String(t);
      return f ? f.call(e, r, n) : e.slice(n, n + r.length) === r;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(49).trim;
  r({
    target: "String",
    proto: !0,
    forced: n(106)("trim")
  }, {
    trim: function trim() {
      return o(this);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(49).start,
      i = n(106)("trimStart"),
      a = i ? function () {
    return o(this);
  } : "".trimStart;
  r({
    target: "String",
    proto: !0,
    forced: i
  }, {
    trimStart: a,
    trimLeft: a
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(49).end,
      i = n(106)("trimEnd"),
      a = i ? function () {
    return o(this);
  } : "".trimEnd;
  r({
    target: "String",
    proto: !0,
    forced: i
  }, {
    trimEnd: a,
    trimRight: a
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("anchor")
  }, {
    anchor: function anchor(t) {
      return o(this, "a", "name", t);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("big")
  }, {
    big: function big() {
      return o(this, "big", "", "");
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("blink")
  }, {
    blink: function blink() {
      return o(this, "blink", "", "");
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("bold")
  }, {
    bold: function bold() {
      return o(this, "b", "", "");
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("fixed")
  }, {
    fixed: function fixed() {
      return o(this, "tt", "", "");
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("fontcolor")
  }, {
    fontcolor: function fontcolor(t) {
      return o(this, "font", "color", t);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("fontsize")
  }, {
    fontsize: function fontsize(t) {
      return o(this, "font", "size", t);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("italics")
  }, {
    italics: function italics() {
      return o(this, "i", "", "");
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("link")
  }, {
    link: function link(t) {
      return o(this, "a", "href", t);
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("small")
  }, {
    small: function small() {
      return o(this, "small", "", "");
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("strike")
  }, {
    strike: function strike() {
      return o(this, "strike", "", "");
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("sub")
  }, {
    sub: function sub() {
      return o(this, "sub", "", "");
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(23);
  r({
    target: "String",
    proto: !0,
    forced: n(24)("sup")
  }, {
    sup: function sup() {
      return o(this, "sup", "", "");
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(14),
      i = n(66),
      a = n(48),
      u = n(134),
      l = n(6),
      s = n(25),
      c = l("replace"),
      f = RegExp.prototype,
      h = Math.max,
      p = function p(t, e, n) {
    return n > t.length ? -1 : "" === e ? n : t.indexOf(e, n);
  };

  r({
    target: "String",
    proto: !0
  }, {
    replaceAll: function replaceAll(t, e) {
      var n,
          r,
          l,
          d,
          y,
          v,
          g,
          b,
          m = o(this),
          w = 0,
          _ = 0,
          x = "";

      if (null != t) {
        if ((n = i(t)) && !~String(o("flags" in f ? t.flags : a.call(t))).indexOf("g")) throw TypeError("`.replaceAll` does not allow non-global regexes");
        if (void 0 !== (r = t[c])) return r.call(t, m, e);
        if (s && n) return String(m).replace(t, e);
      }

      for (l = String(m), d = String(t), (y = "function" == typeof e) || (e = String(e)), v = d.length, g = h(1, v), w = p(l, d, 0); -1 !== w;) {
        b = y ? String(e(d, w, l)) : u(d, l, w, [], void 0, e), x += l.slice(_, w) + b, _ = w + v, w = p(l, d, w + g);
      }

      return _ < l.length && (x += l.slice(_)), x;
    }
  });
}, function (t, e, n) {
  var r = n(5),
      o = n(2),
      i = n(56),
      a = n(80),
      u = n(9).f,
      l = n(42).f,
      s = n(66),
      c = n(48),
      f = n(76),
      h = n(16),
      p = n(1),
      d = n(17).set,
      y = n(47),
      v = n(6)("match"),
      g = o.RegExp,
      b = g.prototype,
      m = /a/g,
      w = /a/g,
      _ = new g(m) !== m,
      x = f.UNSUPPORTED_Y;

  if (r && i("RegExp", !_ || x || p(function () {
    return w[v] = !1, g(m) != m || g(w) == w || "/a/i" != g(m, "i");
  }))) {
    for (var O = function O(t, e) {
      var n,
          r = this instanceof O,
          o = s(t),
          i = void 0 === e;
      if (!r && o && t.constructor === O && i) return t;
      _ ? o && !i && (t = t.source) : t instanceof O && (i && (e = c.call(t)), t = t.source), x && (n = !!e && e.indexOf("y") > -1) && (e = e.replace(/y/g, ""));
      var u = a(_ ? new g(t, e) : g(t, e), r ? this : b, O);
      return x && n && d(u, {
        sticky: n
      }), u;
    }, E = function E(t) {
      (t in O) || u(O, t, {
        configurable: !0,
        get: function get() {
          return g[t];
        },
        set: function set(e) {
          g[t] = e;
        }
      });
    }, S = l(g), A = 0; S.length > A;) {
      E(S[A++]);
    }

    b.constructor = O, O.prototype = b, h(o, "RegExp", O);
  }

  y("RegExp");
}, function (t, e, n) {
  var r = n(5),
      o = n(9),
      i = n(48),
      a = n(76).UNSUPPORTED_Y;
  r && ("g" != /./g.flags || a) && o.f(RegExp.prototype, "flags", {
    configurable: !0,
    get: i
  });
}, function (t, e, n) {
  var r = n(5),
      o = n(76).UNSUPPORTED_Y,
      i = n(9).f,
      a = n(17).get,
      u = RegExp.prototype;
  r && o && i(RegExp.prototype, "sticky", {
    configurable: !0,
    get: function get() {
      if (this !== u) {
        if (this instanceof RegExp) return !!a(this).sticky;
        throw TypeError("Incompatible receiver, RegExp required");
      }
    }
  });
}, function (t, e, n) {
  "use strict";

  n(103);
  var r,
      o,
      i = n(0),
      a = n(3),
      u = (r = !1, (o = /[ac]/).exec = function () {
    return r = !0, /./.exec.apply(this, arguments);
  }, !0 === o.test("abc") && r),
      l = /./.test;
  i({
    target: "RegExp",
    proto: !0,
    forced: !u
  }, {
    test: function test(t) {
      if ("function" != typeof this.exec) return l.call(this, t);
      var e = this.exec(t);
      if (null !== e && !a(e)) throw new Error("RegExp exec method returned something other than an Object or null");
      return !!e;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(16),
      o = n(4),
      i = n(1),
      a = n(48),
      u = RegExp.prototype,
      l = u.toString,
      s = i(function () {
    return "/a/b" != l.call({
      source: "a",
      flags: "b"
    });
  }),
      c = "toString" != l.name;
  (s || c) && r(RegExp.prototype, "toString", function () {
    var t = o(this),
        e = String(t.source),
        n = t.flags;
    return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in u) ? a.call(t) : n);
  }, {
    unsafe: !0
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(136);
  r({
    global: !0,
    forced: parseInt != o
  }, {
    parseInt: o
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(137);
  r({
    global: !0,
    forced: parseFloat != o
  }, {
    parseFloat: o
  });
}, function (t, e, n) {
  "use strict";

  var r = n(5),
      o = n(2),
      i = n(56),
      a = n(16),
      u = n(11),
      l = n(32),
      s = n(80),
      c = n(28),
      f = n(1),
      h = n(30),
      p = n(42).f,
      d = n(13).f,
      y = n(9).f,
      v = n(49).trim,
      g = o.Number,
      b = g.prototype,
      m = "Number" == l(h(b)),
      w = function w(t) {
    var e,
        n,
        r,
        o,
        i,
        a,
        u,
        l,
        s = c(t, !1);
    if ("string" == typeof s && s.length > 2) if (43 === (e = (s = v(s)).charCodeAt(0)) || 45 === e) {
      if (88 === (n = s.charCodeAt(2)) || 120 === n) return NaN;
    } else if (48 === e) {
      switch (s.charCodeAt(1)) {
        case 66:
        case 98:
          r = 2, o = 49;
          break;

        case 79:
        case 111:
          r = 8, o = 55;
          break;

        default:
          return +s;
      }

      for (a = (i = s.slice(2)).length, u = 0; u < a; u++) {
        if ((l = i.charCodeAt(u)) < 48 || l > o) return NaN;
      }

      return parseInt(i, r);
    }
    return +s;
  };

  if (i("Number", !g(" 0o1") || !g("0b1") || g("+0x1"))) {
    for (var _, x = function x(t) {
      var e = arguments.length < 1 ? 0 : t,
          n = this;
      return n instanceof x && (m ? f(function () {
        b.valueOf.call(n);
      }) : "Number" != l(n)) ? s(new g(w(e)), n, x) : w(e);
    }, O = r ? p(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), E = 0; O.length > E; E++) {
      u(g, _ = O[E]) && !u(x, _) && y(x, _, d(g, _));
    }

    x.prototype = b, b.constructor = x, a(o, "Number", x);
  }
}, function (t, e, n) {
  n(0)({
    target: "Number",
    stat: !0
  }, {
    EPSILON: Math.pow(2, -52)
  });
}, function (t, e, n) {
  n(0)({
    target: "Number",
    stat: !0
  }, {
    isFinite: n(276)
  });
}, function (t, e, n) {
  var r = n(2).isFinite;

  t.exports = Number.isFinite || function (t) {
    return "number" == typeof t && r(t);
  };
}, function (t, e, n) {
  n(0)({
    target: "Number",
    stat: !0
  }, {
    isInteger: n(138)
  });
}, function (t, e, n) {
  n(0)({
    target: "Number",
    stat: !0
  }, {
    isNaN: function isNaN(t) {
      return t != t;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(138),
      i = Math.abs;
  r({
    target: "Number",
    stat: !0
  }, {
    isSafeInteger: function isSafeInteger(t) {
      return o(t) && i(t) <= 9007199254740991;
    }
  });
}, function (t, e, n) {
  n(0)({
    target: "Number",
    stat: !0
  }, {
    MAX_SAFE_INTEGER: 9007199254740991
  });
}, function (t, e, n) {
  n(0)({
    target: "Number",
    stat: !0
  }, {
    MIN_SAFE_INTEGER: -9007199254740991
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(137);
  r({
    target: "Number",
    stat: !0,
    forced: Number.parseFloat != o
  }, {
    parseFloat: o
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(136);
  r({
    target: "Number",
    stat: !0,
    forced: Number.parseInt != o
  }, {
    parseInt: o
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(26),
      i = n(139),
      a = n(105),
      u = n(1),
      l = 1..toFixed,
      s = Math.floor,
      c = function c(t, e, n) {
    return 0 === e ? n : e % 2 == 1 ? c(t, e - 1, n * t) : c(t * t, e / 2, n);
  };

  r({
    target: "Number",
    proto: !0,
    forced: l && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !u(function () {
      l.call({});
    })
  }, {
    toFixed: function toFixed(t) {
      var e,
          n,
          r,
          u,
          l = i(this),
          f = o(t),
          h = [0, 0, 0, 0, 0, 0],
          p = "",
          d = "0",
          y = function y(t, e) {
        for (var n = -1, r = e; ++n < 6;) {
          r += t * h[n], h[n] = r % 1e7, r = s(r / 1e7);
        }
      },
          v = function v(t) {
        for (var e = 6, n = 0; --e >= 0;) {
          n += h[e], h[e] = s(n / t), n = n % t * 1e7;
        }
      },
          g = function g() {
        for (var t = 6, e = ""; --t >= 0;) {
          if ("" !== e || 0 === t || 0 !== h[t]) {
            var n = String(h[t]);
            e = "" === e ? n : e + a.call("0", 7 - n.length) + n;
          }
        }

        return e;
      };

      if (f < 0 || f > 20) throw RangeError("Incorrect fraction digits");
      if (l != l) return "NaN";
      if (l <= -1e21 || l >= 1e21) return String(l);
      if (l < 0 && (p = "-", l = -l), l > 1e-21) if (n = (e = function (t) {
        for (var e = 0, n = t; n >= 4096;) {
          e += 12, n /= 4096;
        }

        for (; n >= 2;) {
          e += 1, n /= 2;
        }

        return e;
      }(l * c(2, 69, 1)) - 69) < 0 ? l * c(2, -e, 1) : l / c(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
        for (y(0, n), r = f; r >= 7;) {
          y(1e7, 0), r -= 7;
        }

        for (y(c(10, r, 1), 0), r = e - 1; r >= 23;) {
          v(1 << 23), r -= 23;
        }

        v(1 << r), y(1, 1), v(2), d = g();
      } else y(0, n), y(1 << -e, 0), d = g() + a.call("0", f);
      return d = f > 0 ? p + ((u = d.length) <= f ? "0." + a.call("0", f - u) + d : d.slice(0, u - f) + "." + d.slice(u - f)) : p + d;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(1),
      i = n(139),
      a = 1..toPrecision;
  r({
    target: "Number",
    proto: !0,
    forced: o(function () {
      return "1" !== a.call(1, void 0);
    }) || !o(function () {
      a.call({});
    })
  }, {
    toPrecision: function toPrecision(t) {
      return void 0 === t ? a.call(i(this)) : a.call(i(this), t);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(140),
      i = Math.acosh,
      a = Math.log,
      u = Math.sqrt,
      l = Math.LN2;
  r({
    target: "Math",
    stat: !0,
    forced: !i || 710 != Math.floor(i(Number.MAX_VALUE)) || i(1 / 0) != 1 / 0
  }, {
    acosh: function acosh(t) {
      return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? a(t) + l : o(t - 1 + u(t - 1) * u(t + 1));
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = Math.asinh,
      i = Math.log,
      a = Math.sqrt;
  r({
    target: "Math",
    stat: !0,
    forced: !(o && 1 / o(0) > 0)
  }, {
    asinh: function t(e) {
      return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : i(e + a(e * e + 1)) : e;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = Math.atanh,
      i = Math.log;
  r({
    target: "Math",
    stat: !0,
    forced: !(o && 1 / o(-0) < 0)
  }, {
    atanh: function atanh(t) {
      return 0 == (t = +t) ? t : i((1 + t) / (1 - t)) / 2;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(107),
      i = Math.abs,
      a = Math.pow;
  r({
    target: "Math",
    stat: !0
  }, {
    cbrt: function cbrt(t) {
      return o(t = +t) * a(i(t), 1 / 3);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = Math.floor,
      i = Math.log,
      a = Math.LOG2E;
  r({
    target: "Math",
    stat: !0
  }, {
    clz32: function clz32(t) {
      return (t >>>= 0) ? 31 - o(i(t + .5) * a) : 32;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(81),
      i = Math.cosh,
      a = Math.abs,
      u = Math.E;
  r({
    target: "Math",
    stat: !0,
    forced: !i || i(710) === 1 / 0
  }, {
    cosh: function cosh(t) {
      var e = o(a(t) - 1) + 1;
      return (e + 1 / (e * u * u)) * (u / 2);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(81);
  r({
    target: "Math",
    stat: !0,
    forced: o != Math.expm1
  }, {
    expm1: o
  });
}, function (t, e, n) {
  n(0)({
    target: "Math",
    stat: !0
  }, {
    fround: n(294)
  });
}, function (t, e, n) {
  var r = n(107),
      o = Math.abs,
      i = Math.pow,
      a = i(2, -52),
      u = i(2, -23),
      l = i(2, 127) * (2 - u),
      s = i(2, -126);

  t.exports = Math.fround || function (t) {
    var e,
        n,
        i = o(t),
        c = r(t);
    return i < s ? c * (i / s / u + 1 / a - 1 / a) * s * u : (n = (e = (1 + u / a) * i) - (e - i)) > l || n != n ? c * (1 / 0) : c * n;
  };
}, function (t, e, n) {
  var r = n(0),
      o = Math.hypot,
      i = Math.abs,
      a = Math.sqrt;
  r({
    target: "Math",
    stat: !0,
    forced: !!o && o(1 / 0, NaN) !== 1 / 0
  }, {
    hypot: function hypot(t, e) {
      for (var n, r, o = 0, u = 0, l = arguments.length, s = 0; u < l;) {
        s < (n = i(arguments[u++])) ? (o = o * (r = s / n) * r + 1, s = n) : o += n > 0 ? (r = n / s) * r : n;
      }

      return s === 1 / 0 ? 1 / 0 : s * a(o);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(1),
      i = Math.imul;
  r({
    target: "Math",
    stat: !0,
    forced: o(function () {
      return -5 != i(4294967295, 5) || 2 != i.length;
    })
  }, {
    imul: function imul(t, e) {
      var n = +t,
          r = +e,
          o = 65535 & n,
          i = 65535 & r;
      return 0 | o * i + ((65535 & n >>> 16) * i + o * (65535 & r >>> 16) << 16 >>> 0);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = Math.log,
      i = Math.LOG10E;
  r({
    target: "Math",
    stat: !0
  }, {
    log10: function log10(t) {
      return o(t) * i;
    }
  });
}, function (t, e, n) {
  n(0)({
    target: "Math",
    stat: !0
  }, {
    log1p: n(140)
  });
}, function (t, e, n) {
  var r = n(0),
      o = Math.log,
      i = Math.LN2;
  r({
    target: "Math",
    stat: !0
  }, {
    log2: function log2(t) {
      return o(t) / i;
    }
  });
}, function (t, e, n) {
  n(0)({
    target: "Math",
    stat: !0
  }, {
    sign: n(107)
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(1),
      i = n(81),
      a = Math.abs,
      u = Math.exp,
      l = Math.E;
  r({
    target: "Math",
    stat: !0,
    forced: o(function () {
      return -2e-17 != Math.sinh(-2e-17);
    })
  }, {
    sinh: function sinh(t) {
      return a(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (u(t - 1) - u(-t - 1)) * (l / 2);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(81),
      i = Math.exp;
  r({
    target: "Math",
    stat: !0
  }, {
    tanh: function tanh(t) {
      var e = o(t = +t),
          n = o(-t);
      return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (i(t) + i(-t));
    }
  });
}, function (t, e, n) {
  n(29)(Math, "Math", !0);
}, function (t, e, n) {
  var r = n(0),
      o = Math.ceil,
      i = Math.floor;
  r({
    target: "Math",
    stat: !0
  }, {
    trunc: function trunc(t) {
      return (t > 0 ? i : o)(t);
    }
  });
}, function (t, e, n) {
  n(0)({
    target: "Date",
    stat: !0
  }, {
    now: function now() {
      return new Date().getTime();
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(1),
      i = n(10),
      a = n(28);
  r({
    target: "Date",
    proto: !0,
    forced: o(function () {
      return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
        toISOString: function toISOString() {
          return 1;
        }
      });
    })
  }, {
    toJSON: function toJSON(t) {
      var e = i(this),
          n = a(e);
      return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(308);
  r({
    target: "Date",
    proto: !0,
    forced: Date.prototype.toISOString !== o
  }, {
    toISOString: o
  });
}, function (t, e, n) {
  "use strict";

  var r = n(1),
      o = n(104).start,
      i = Math.abs,
      a = Date.prototype,
      u = a.getTime,
      l = a.toISOString;
  t.exports = r(function () {
    return "0385-07-25T07:06:39.999Z" != l.call(new Date(-50000000000001));
  }) || !r(function () {
    l.call(new Date(NaN));
  }) ? function () {
    if (!isFinite(u.call(this))) throw RangeError("Invalid time value");
    var t = this.getUTCFullYear(),
        e = this.getUTCMilliseconds(),
        n = t < 0 ? "-" : t > 9999 ? "+" : "";
    return n + o(i(t), n ? 6 : 4, 0) + "-" + o(this.getUTCMonth() + 1, 2, 0) + "-" + o(this.getUTCDate(), 2, 0) + "T" + o(this.getUTCHours(), 2, 0) + ":" + o(this.getUTCMinutes(), 2, 0) + ":" + o(this.getUTCSeconds(), 2, 0) + "." + o(e, 3, 0) + "Z";
  } : l;
}, function (t, e, n) {
  var r = n(16),
      o = Date.prototype,
      i = o.toString,
      a = o.getTime;
  new Date(NaN) + "" != "Invalid Date" && r(o, "toString", function () {
    var t = a.call(this);
    return t == t ? i.call(this) : "Invalid Date";
  });
}, function (t, e, n) {
  var r = n(15),
      o = n(311),
      i = n(6)("toPrimitive"),
      a = Date.prototype;
  i in a || r(a, i, o);
}, function (t, e, n) {
  "use strict";

  var r = n(4),
      o = n(28);

  t.exports = function (t) {
    if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
    return o(r(this), "number" !== t);
  };
}, function (t, e, n) {
  var r = n(0),
      o = n(22),
      i = n(1),
      a = o("JSON", "stringify"),
      u = /[\uD800-\uDFFF]/g,
      l = /^[\uD800-\uDBFF]$/,
      s = /^[\uDC00-\uDFFF]$/,
      c = function c(t, e, n) {
    var r = n.charAt(e - 1),
        o = n.charAt(e + 1);
    return l.test(t) && !s.test(o) || s.test(t) && !l.test(r) ? "\\u" + t.charCodeAt(0).toString(16) : t;
  },
      f = i(function () {
    return "\"\\udf06\\ud834\"" !== a("\uDF06\uD834") || "\"\\udead\"" !== a("\uDEAD");
  });

  a && r({
    target: "JSON",
    stat: !0,
    forced: f
  }, {
    stringify: function stringify(t, e, n) {
      var r = a.apply(null, arguments);
      return "string" == typeof r ? r.replace(u, c) : r;
    }
  });
}, function (t, e, n) {
  var r = n(2);
  n(29)(r.JSON, "JSON", !0);
}, function (t, e, n) {
  "use strict";

  var r,
      o,
      i,
      a,
      u = n(0),
      l = n(25),
      s = n(2),
      c = n(22),
      f = n(141),
      h = n(16),
      p = n(50),
      d = n(29),
      y = n(47),
      v = n(3),
      g = n(18),
      b = n(41),
      m = n(87),
      w = n(39),
      _ = n(69),
      x = n(34),
      O = n(108).set,
      E = n(143),
      S = n(144),
      A = n(316),
      T = n(82),
      k = n(109),
      j = n(17),
      P = n(56),
      N = n(6),
      q = n(46),
      R = n(63),
      L = N("species"),
      C = "Promise",
      I = j.get,
      M = j.set,
      D = j.getterFor(C),
      _B = f,
      U = s.TypeError,
      F = s.document,
      J = s.process,
      H = c("fetch"),
      z = T.f,
      Y = z,
      W = !!(F && F.createEvent && s.dispatchEvent),
      K = "function" == typeof PromiseRejectionEvent,
      V = P(C, function () {
    if (!(m(_B) !== String(_B))) {
      if (66 === R) return !0;
      if (!q && !K) return !0;
    }

    if (l && !_B.prototype.finally) return !0;
    if (R >= 51 && /native code/.test(_B)) return !1;

    var t = _B.resolve(1),
        e = function e(t) {
      t(function () {}, function () {});
    };

    return (t.constructor = {})[L] = e, !(t.then(function () {}) instanceof e);
  }),
      G = V || !_(function (t) {
    _B.all(t).catch(function () {});
  }),
      Z = function Z(t) {
    var e;
    return !(!v(t) || "function" != typeof (e = t.then)) && e;
  },
      $ = function $(t, e) {
    if (!t.notified) {
      t.notified = !0;
      var n = t.reactions;
      E(function () {
        for (var r = t.value, o = 1 == t.state, i = 0; n.length > i;) {
          var a,
              u,
              l,
              s = n[i++],
              c = o ? s.ok : s.fail,
              f = s.resolve,
              h = s.reject,
              p = s.domain;

          try {
            c ? (o || (2 === t.rejection && et(t), t.rejection = 1), !0 === c ? a = r : (p && p.enter(), a = c(r), p && (p.exit(), l = !0)), a === s.promise ? h(U("Promise-chain cycle")) : (u = Z(a)) ? u.call(a, f, h) : f(a)) : h(r);
          } catch (t) {
            p && !l && p.exit(), h(t);
          }
        }

        t.reactions = [], t.notified = !1, e && !t.rejection && Q(t);
      });
    }
  },
      X = function X(t, e, n) {
    var r, o;
    W ? ((r = F.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), s.dispatchEvent(r)) : r = {
      promise: e,
      reason: n
    }, !K && (o = s["on" + t]) ? o(r) : "unhandledrejection" === t && A("Unhandled promise rejection", n);
  },
      Q = function Q(t) {
    O.call(s, function () {
      var e,
          n = t.facade,
          r = t.value;
      if (tt(t) && (e = k(function () {
        q ? J.emit("unhandledRejection", r, n) : X("unhandledrejection", n, r);
      }), t.rejection = q || tt(t) ? 2 : 1, e.error)) throw e.value;
    });
  },
      tt = function tt(t) {
    return 1 !== t.rejection && !t.parent;
  },
      et = function et(t) {
    O.call(s, function () {
      var e = t.facade;
      q ? J.emit("rejectionHandled", e) : X("rejectionhandled", e, t.value);
    });
  },
      nt = function nt(t, e, n) {
    return function (r) {
      t(e, r, n);
    };
  },
      rt = function rt(t, e, n) {
    t.done || (t.done = !0, n && (t = n), t.value = e, t.state = 2, $(t, !0));
  },
      ot = function ot(t, e, n) {
    if (!t.done) {
      t.done = !0, n && (t = n);

      try {
        if (t.facade === e) throw U("Promise can't be resolved itself");
        var r = Z(e);
        r ? E(function () {
          var n = {
            done: !1
          };

          try {
            r.call(e, nt(ot, n, t), nt(rt, n, t));
          } catch (e) {
            rt(n, e, t);
          }
        }) : (t.value = e, t.state = 1, $(t, !1));
      } catch (e) {
        rt({
          done: !1
        }, e, t);
      }
    }
  };

  V && (_B = function B(t) {
    b(this, _B, C), g(t), r.call(this);
    var e = I(this);

    try {
      t(nt(ot, e), nt(rt, e));
    } catch (t) {
      rt(e, t);
    }
  }, (r = function r(t) {
    M(this, {
      type: C,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0
    });
  }).prototype = p(_B.prototype, {
    then: function then(t, e) {
      var n = D(this),
          r = z(x(this, _B));
      return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = q ? J.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && $(n, !1), r.promise;
    },
    catch: function _catch(t) {
      return this.then(void 0, t);
    }
  }), o = function o() {
    var t = new r(),
        e = I(t);
    this.promise = t, this.resolve = nt(ot, e), this.reject = nt(rt, e);
  }, T.f = z = function z(t) {
    return t === _B || t === i ? new o(t) : Y(t);
  }, l || "function" != typeof f || (a = f.prototype.then, h(f.prototype, "then", function (t, e) {
    var n = this;
    return new _B(function (t, e) {
      a.call(n, t, e);
    }).then(t, e);
  }, {
    unsafe: !0
  }), "function" == typeof H && u({
    global: !0,
    enumerable: !0,
    forced: !0
  }, {
    fetch: function fetch(t) {
      return S(_B, H.apply(s, arguments));
    }
  }))), u({
    global: !0,
    wrap: !0,
    forced: V
  }, {
    Promise: _B
  }), d(_B, C, !1, !0), y(C), i = c(C), u({
    target: C,
    stat: !0,
    forced: V
  }, {
    reject: function reject(t) {
      var e = z(this);
      return e.reject.call(void 0, t), e.promise;
    }
  }), u({
    target: C,
    stat: !0,
    forced: l || V
  }, {
    resolve: function resolve(t) {
      return S(l && this === i ? _B : this, t);
    }
  }), u({
    target: C,
    stat: !0,
    forced: G
  }, {
    all: function all(t) {
      var e = this,
          n = z(e),
          r = n.resolve,
          o = n.reject,
          i = k(function () {
        var n = g(e.resolve),
            i = [],
            a = 0,
            u = 1;
        w(t, function (t) {
          var l = a++,
              s = !1;
          i.push(void 0), u++, n.call(e, t).then(function (t) {
            s || (s = !0, i[l] = t, --u || r(i));
          }, o);
        }), --u || r(i);
      });
      return i.error && o(i.value), n.promise;
    },
    race: function race(t) {
      var e = this,
          n = z(e),
          r = n.reject,
          o = k(function () {
        var o = g(e.resolve);
        w(t, function (t) {
          o.call(e, t).then(n.resolve, r);
        });
      });
      return o.error && r(o.value), n.promise;
    }
  });
}, function (t, e, n) {
  var r = n(64);
  t.exports = /web0s(?!.*chrome)/i.test(r);
}, function (t, e, n) {
  var r = n(2);

  t.exports = function (t, e) {
    var n = r.console;
    n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(18),
      i = n(82),
      a = n(109),
      u = n(39);
  r({
    target: "Promise",
    stat: !0
  }, {
    allSettled: function allSettled(t) {
      var e = this,
          n = i.f(e),
          r = n.resolve,
          l = n.reject,
          s = a(function () {
        var n = o(e.resolve),
            i = [],
            a = 0,
            l = 1;
        u(t, function (t) {
          var o = a++,
              u = !1;
          i.push(void 0), l++, n.call(e, t).then(function (t) {
            u || (u = !0, i[o] = {
              status: "fulfilled",
              value: t
            }, --l || r(i));
          }, function (t) {
            u || (u = !0, i[o] = {
              status: "rejected",
              reason: t
            }, --l || r(i));
          });
        }), --l || r(i);
      });
      return s.error && l(s.value), n.promise;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(18),
      i = n(22),
      a = n(82),
      u = n(109),
      l = n(39);
  r({
    target: "Promise",
    stat: !0
  }, {
    any: function any(t) {
      var e = this,
          n = a.f(e),
          r = n.resolve,
          s = n.reject,
          c = u(function () {
        var n = o(e.resolve),
            a = [],
            u = 0,
            c = 1,
            f = !1;
        l(t, function (t) {
          var o = u++,
              l = !1;
          a.push(void 0), c++, n.call(e, t).then(function (t) {
            l || f || (f = !0, r(t));
          }, function (t) {
            l || f || (l = !0, a[o] = t, --c || s(new (i("AggregateError"))(a, "No one promise resolved")));
          });
        }), --c || s(new (i("AggregateError"))(a, "No one promise resolved"));
      });
      return c.error && s(c.value), n.promise;
    }
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(25),
      i = n(141),
      a = n(1),
      u = n(22),
      l = n(34),
      s = n(144),
      c = n(16);
  r({
    target: "Promise",
    proto: !0,
    real: !0,
    forced: !!i && a(function () {
      i.prototype.finally.call({
        then: function then() {}
      }, function () {});
    })
  }, {
    finally: function _finally(t) {
      var e = l(this, u("Promise")),
          n = "function" == typeof t;
      return this.then(n ? function (n) {
        return s(e, t()).then(function () {
          return n;
        });
      } : t, n ? function (n) {
        return s(e, t()).then(function () {
          throw n;
        });
      } : t);
    }
  }), o || "function" != typeof i || i.prototype.finally || c(i.prototype, "finally", u("Promise").prototype.finally);
}, function (t, e, n) {
  "use strict";

  var r = n(83),
      o = n(145);
  t.exports = r("Map", function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  }, o);
}, function (t, e, n) {
  "use strict";

  var r = n(83),
      o = n(145);
  t.exports = r("Set", function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  }, o);
}, function (t, e, n) {
  "use strict";

  var r,
      o = n(2),
      i = n(50),
      a = n(45),
      u = n(83),
      l = n(146),
      s = n(3),
      c = n(17).enforce,
      f = n(114),
      h = !o.ActiveXObject && "ActiveXObject" in o,
      p = Object.isExtensible,
      d = function d(t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  },
      y = t.exports = u("WeakMap", d, l);

  if (f && h) {
    r = l.getConstructor(d, "WeakMap", !0), a.REQUIRED = !0;
    var v = y.prototype,
        g = v.delete,
        b = v.has,
        m = v.get,
        w = v.set;
    i(v, {
      delete: function _delete(t) {
        if (s(t) && !p(t)) {
          var e = c(this);
          return e.frozen || (e.frozen = new r()), g.call(this, t) || e.frozen.delete(t);
        }

        return g.call(this, t);
      },
      has: function has(t) {
        if (s(t) && !p(t)) {
          var e = c(this);
          return e.frozen || (e.frozen = new r()), b.call(this, t) || e.frozen.has(t);
        }

        return b.call(this, t);
      },
      get: function get(t) {
        if (s(t) && !p(t)) {
          var e = c(this);
          return e.frozen || (e.frozen = new r()), b.call(this, t) ? m.call(this, t) : e.frozen.get(t);
        }

        return m.call(this, t);
      },
      set: function set(t, e) {
        if (s(t) && !p(t)) {
          var n = c(this);
          n.frozen || (n.frozen = new r()), b.call(this, t) ? w.call(this, t, e) : n.frozen.set(t, e);
        } else w.call(this, t, e);

        return this;
      }
    });
  }
}, function (t, e, n) {
  "use strict";

  n(83)("WeakSet", function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  }, n(146));
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(2),
      i = n(84),
      a = n(47),
      u = i.ArrayBuffer;
  r({
    global: !0,
    forced: o.ArrayBuffer !== u
  }, {
    ArrayBuffer: u
  }), a("ArrayBuffer");
}, function (t, e) {
  var n = Math.abs,
      r = Math.pow,
      o = Math.floor,
      i = Math.log,
      a = Math.LN2;
  t.exports = {
    pack: function pack(t, e, u) {
      var l,
          s,
          c,
          f = new Array(u),
          h = 8 * u - e - 1,
          p = (1 << h) - 1,
          d = p >> 1,
          y = 23 === e ? r(2, -24) - r(2, -77) : 0,
          v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
          g = 0;

      for ((t = n(t)) != t || t === 1 / 0 ? (s = t != t ? 1 : 0, l = p) : (l = o(i(t) / a), t * (c = r(2, -l)) < 1 && (l--, c *= 2), (t += l + d >= 1 ? y / c : y * r(2, 1 - d)) * c >= 2 && (l++, c /= 2), l + d >= p ? (s = 0, l = p) : l + d >= 1 ? (s = (t * c - 1) * r(2, e), l += d) : (s = t * r(2, d - 1) * r(2, e), l = 0)); e >= 8; f[g++] = 255 & s, s /= 256, e -= 8) {
        ;
      }

      for (l = l << e | s, h += e; h > 0; f[g++] = 255 & l, l /= 256, h -= 8) {
        ;
      }

      return f[--g] |= 128 * v, f;
    },
    unpack: function unpack(t, e) {
      var n,
          o = t.length,
          i = 8 * o - e - 1,
          a = (1 << i) - 1,
          u = a >> 1,
          l = i - 7,
          s = o - 1,
          c = t[s--],
          f = 127 & c;

      for (c >>= 7; l > 0; f = 256 * f + t[s], s--, l -= 8) {
        ;
      }

      for (n = f & (1 << -l) - 1, f >>= -l, l += e; l > 0; n = 256 * n + t[s], s--, l -= 8) {
        ;
      }

      if (0 === f) f = 1 - u;else {
        if (f === a) return n ? NaN : c ? -1 / 0 : 1 / 0;
        n += r(2, e), f -= u;
      }
      return (c ? -1 : 1) * n * r(2, f - e);
    }
  };
}, function (t, e, n) {
  var r = n(0),
      o = n(8);
  r({
    target: "ArrayBuffer",
    stat: !0,
    forced: !o.NATIVE_ARRAY_BUFFER_VIEWS
  }, {
    isView: o.isView
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0),
      o = n(1),
      i = n(84),
      a = n(4),
      u = n(36),
      l = n(7),
      s = n(34),
      c = i.ArrayBuffer,
      f = i.DataView,
      h = c.prototype.slice;
  r({
    target: "ArrayBuffer",
    proto: !0,
    unsafe: !0,
    forced: o(function () {
      return !new c(2).slice(1, void 0).byteLength;
    })
  }, {
    slice: function slice(t, e) {
      if (void 0 !== h && void 0 === e) return h.call(a(this), t);

      for (var n = a(this).byteLength, r = u(t, n), o = u(void 0 === e ? n : e, n), i = new (s(this, c))(l(o - r)), p = new f(this), d = new f(i), y = 0; r < o;) {
        d.setUint8(y++, p.getUint8(r++));
      }

      return i;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(84);
  r({
    global: !0,
    forced: !n(110)
  }, {
    DataView: o.DataView
  });
}, function (t, e, n) {
  n(35)("Int8", function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  var r = n(26);

  t.exports = function (t) {
    var e = r(t);
    if (e < 0) throw RangeError("The argument can't be less than 0");
    return e;
  };
}, function (t, e, n) {
  n(35)("Uint8", function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(35)("Uint8", function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  }, !0);
}, function (t, e, n) {
  n(35)("Int16", function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(35)("Uint16", function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(35)("Int32", function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(35)("Uint32", function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(35)("Float32", function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  n(35)("Float64", function (t) {
    return function (e, n, r) {
      return t(this, e, n, r);
    };
  });
}, function (t, e, n) {
  "use strict";

  var r = n(111);
  (0, n(8).exportTypedArrayStaticMethod)("from", n(149), r);
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(111),
      i = r.aTypedArrayConstructor;
  (0, r.exportTypedArrayStaticMethod)("of", function () {
    for (var t = 0, e = arguments.length, n = new (i(this))(e); e > t;) {
      n[t] = arguments[t++];
    }

    return n;
  }, o);
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(124),
      i = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("copyWithin", function (t, e) {
    return o.call(i(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(12).every,
      i = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("every", function (t) {
    return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(98),
      i = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("fill", function (t) {
    return o.apply(i(this), arguments);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(12).filter,
      i = n(34),
      a = r.aTypedArray,
      u = r.aTypedArrayConstructor;
  (0, r.exportTypedArrayMethod)("filter", function (t) {
    for (var e = o(a(this), t, arguments.length > 1 ? arguments[1] : void 0), n = i(this, this.constructor), r = 0, l = e.length, s = new (u(n))(l); l > r;) {
      s[r] = e[r++];
    }

    return s;
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(12).find,
      i = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("find", function (t) {
    return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(12).findIndex,
      i = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("findIndex", function (t) {
    return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(12).forEach,
      i = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("forEach", function (t) {
    o(i(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(55).includes,
      i = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("includes", function (t) {
    return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(55).indexOf,
      i = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("indexOf", function (t) {
    return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(2),
      o = n(8),
      i = n(71),
      a = n(6)("iterator"),
      u = r.Uint8Array,
      l = i.values,
      s = i.keys,
      c = i.entries,
      f = o.aTypedArray,
      h = o.exportTypedArrayMethod,
      p = u && u.prototype[a],
      d = !!p && ("values" == p.name || null == p.name),
      y = function y() {
    return l.call(f(this));
  };

  h("entries", function () {
    return c.call(f(this));
  }), h("keys", function () {
    return s.call(f(this));
  }), h("values", y, !d), h(a, y, !d);
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = r.aTypedArray,
      i = r.exportTypedArrayMethod,
      a = [].join;
  i("join", function (t) {
    return a.apply(o(this), arguments);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(127),
      i = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("lastIndexOf", function (t) {
    return o.apply(i(this), arguments);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(12).map,
      i = n(34),
      a = r.aTypedArray,
      u = r.aTypedArrayConstructor;
  (0, r.exportTypedArrayMethod)("map", function (t) {
    return o(a(this), t, arguments.length > 1 ? arguments[1] : void 0, function (t, e) {
      return new (u(i(t, t.constructor)))(e);
    });
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(70).left,
      i = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("reduce", function (t) {
    return o(i(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(70).right,
      i = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("reduceRight", function (t) {
    return o(i(this), t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = r.aTypedArray,
      i = r.exportTypedArrayMethod,
      a = Math.floor;
  i("reverse", function () {
    for (var t, e = o(this).length, n = a(e / 2), r = 0; r < n;) {
      t = this[r], this[r++] = this[--e], this[e] = t;
    }

    return this;
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(7),
      i = n(148),
      a = n(10),
      u = n(1),
      l = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("set", function (t) {
    l(this);
    var e = i(arguments.length > 1 ? arguments[1] : void 0, 1),
        n = this.length,
        r = a(t),
        u = o(r.length),
        s = 0;
    if (u + e > n) throw RangeError("Wrong length");

    for (; s < u;) {
      this[e + s] = r[s++];
    }
  }, u(function () {
    new Int8Array(1).set({});
  }));
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(34),
      i = n(1),
      a = r.aTypedArray,
      u = r.aTypedArrayConstructor,
      l = r.exportTypedArrayMethod,
      s = [].slice;
  l("slice", function (t, e) {
    for (var n = s.call(a(this), t, e), r = o(this, this.constructor), i = 0, l = n.length, c = new (u(r))(l); l > i;) {
      c[i] = n[i++];
    }

    return c;
  }, i(function () {
    new Int8Array(1).slice();
  }));
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(12).some,
      i = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("some", function (t) {
    return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = r.aTypedArray,
      i = r.exportTypedArrayMethod,
      a = [].sort;
  i("sort", function (t) {
    return a.call(o(this), t);
  });
}, function (t, e, n) {
  "use strict";

  var r = n(8),
      o = n(7),
      i = n(36),
      a = n(34),
      u = r.aTypedArray;
  (0, r.exportTypedArrayMethod)("subarray", function (t, e) {
    var n = u(this),
        r = n.length,
        l = i(t, r);
    return new (a(n, n.constructor))(n.buffer, n.byteOffset + l * n.BYTES_PER_ELEMENT, o((void 0 === e ? r : i(e, r)) - l));
  });
}, function (t, e, n) {
  "use strict";

  var r = n(2),
      o = n(8),
      i = n(1),
      a = r.Int8Array,
      u = o.aTypedArray,
      l = o.exportTypedArrayMethod,
      s = [].toLocaleString,
      c = [].slice,
      f = !!a && i(function () {
    s.call(new a(1));
  });
  l("toLocaleString", function () {
    return s.apply(f ? c.call(u(this)) : u(this), arguments);
  }, i(function () {
    return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString();
  }) || !i(function () {
    a.prototype.toLocaleString.call([1, 2]);
  }));
}, function (t, e, n) {
  "use strict";

  var r = n(8).exportTypedArrayMethod,
      o = n(1),
      i = n(2).Uint8Array,
      a = i && i.prototype || {},
      u = [].toString,
      l = [].join;
  o(function () {
    u.call({});
  }) && (u = function u() {
    return l.call(this);
  });
  var s = a.toString != u;
  r("toString", u, s);
}, function (t, e, n) {
  var r = n(0),
      o = n(22),
      i = n(18),
      a = n(4),
      u = n(1),
      l = o("Reflect", "apply"),
      s = Function.apply;
  r({
    target: "Reflect",
    stat: !0,
    forced: !u(function () {
      l(function () {});
    })
  }, {
    apply: function apply(t, e, n) {
      return i(t), a(n), l ? l(t, e, n) : s.call(t, e, n);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(22),
      i = n(18),
      a = n(4),
      u = n(3),
      l = n(30),
      s = n(129),
      c = n(1),
      f = o("Reflect", "construct"),
      h = c(function () {
    function t() {}

    return !(f(function () {}, [], t) instanceof t);
  }),
      p = !c(function () {
    f(function () {});
  }),
      d = h || p;
  r({
    target: "Reflect",
    stat: !0,
    forced: d,
    sham: d
  }, {
    construct: function construct(t, e) {
      i(t), a(e);
      var n = arguments.length < 3 ? t : i(arguments[2]);
      if (p && !h) return f(t, e, n);

      if (t == n) {
        switch (e.length) {
          case 0:
            return new t();

          case 1:
            return new t(e[0]);

          case 2:
            return new t(e[0], e[1]);

          case 3:
            return new t(e[0], e[1], e[2]);

          case 4:
            return new t(e[0], e[1], e[2], e[3]);
        }

        var r = [null];
        return r.push.apply(r, e), new (s.apply(t, r))();
      }

      var o = n.prototype,
          c = l(u(o) ? o : Object.prototype),
          d = Function.apply.call(t, c, e);
      return u(d) ? d : c;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(5),
      i = n(4),
      a = n(28),
      u = n(9);
  r({
    target: "Reflect",
    stat: !0,
    forced: n(1)(function () {
      Reflect.defineProperty(u.f({}, 1, {
        value: 1
      }), 1, {
        value: 2
      });
    }),
    sham: !o
  }, {
    defineProperty: function defineProperty(t, e, n) {
      i(t);
      var r = a(e, !0);
      i(n);

      try {
        return u.f(t, r, n), !0;
      } catch (t) {
        return !1;
      }
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(4),
      i = n(13).f;
  r({
    target: "Reflect",
    stat: !0
  }, {
    deleteProperty: function deleteProperty(t, e) {
      var n = i(o(t), e);
      return !(n && !n.configurable) && delete t[e];
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(3),
      i = n(4),
      a = n(11),
      u = n(13),
      l = n(27);
  r({
    target: "Reflect",
    stat: !0
  }, {
    get: function t(e, n) {
      var r,
          s,
          c = arguments.length < 3 ? e : arguments[2];
      return i(e) === c ? e[n] : (r = u.f(e, n)) ? a(r, "value") ? r.value : void 0 === r.get ? void 0 : r.get.call(c) : o(s = l(e)) ? t(s, n, c) : void 0;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(5),
      i = n(4),
      a = n(13);
  r({
    target: "Reflect",
    stat: !0,
    sham: !o
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
      return a.f(i(t), e);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(4),
      i = n(27);
  r({
    target: "Reflect",
    stat: !0,
    sham: !n(95)
  }, {
    getPrototypeOf: function getPrototypeOf(t) {
      return i(o(t));
    }
  });
}, function (t, e, n) {
  n(0)({
    target: "Reflect",
    stat: !0
  }, {
    has: function has(t, e) {
      return e in t;
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(4),
      i = Object.isExtensible;
  r({
    target: "Reflect",
    stat: !0
  }, {
    isExtensible: function isExtensible(t) {
      return o(t), !i || i(t);
    }
  });
}, function (t, e, n) {
  n(0)({
    target: "Reflect",
    stat: !0
  }, {
    ownKeys: n(90)
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(22),
      i = n(4);
  r({
    target: "Reflect",
    stat: !0,
    sham: !n(65)
  }, {
    preventExtensions: function preventExtensions(t) {
      i(t);

      try {
        var e = o("Object", "preventExtensions");
        return e && e(t), !0;
      } catch (t) {
        return !1;
      }
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(4),
      i = n(3),
      a = n(11),
      u = n(1),
      l = n(9),
      s = n(13),
      c = n(27),
      f = n(31);
  r({
    target: "Reflect",
    stat: !0,
    forced: u(function () {
      var t = function t() {},
          e = l.f(new t(), "a", {
        configurable: !0
      });

      return !1 !== Reflect.set(t.prototype, "a", 1, e);
    })
  }, {
    set: function t(e, n, r) {
      var u,
          h,
          p = arguments.length < 4 ? e : arguments[3],
          d = s.f(o(e), n);

      if (!d) {
        if (i(h = c(e))) return t(h, n, r, p);
        d = f(0);
      }

      if (a(d, "value")) {
        if (!1 === d.writable || !i(p)) return !1;

        if (u = s.f(p, n)) {
          if (u.get || u.set || !1 === u.writable) return !1;
          u.value = r, l.f(p, n, u);
        } else l.f(p, n, f(0, r));

        return !0;
      }

      return void 0 !== d.set && (d.set.call(p, r), !0);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(4),
      i = n(121),
      a = n(38);
  a && r({
    target: "Reflect",
    stat: !0
  }, {
    setPrototypeOf: function setPrototypeOf(t, e) {
      o(t), i(e);

      try {
        return a(t, e), !0;
      } catch (t) {
        return !1;
      }
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(2),
      i = n(29);
  r({
    global: !0
  }, {
    Reflect: {}
  }), i(o.Reflect, "Reflect", !0);
}, function (t, e, n) {
  n(379), n(380), n(381), n(382), n(383), n(384), n(387), n(152);
  var r = n(54);
  t.exports = r;
}, function (t, e, n) {
  var r = n(2),
      o = n(150),
      i = n(126),
      a = n(15);

  for (var u in o) {
    var l = r[u],
        s = l && l.prototype;
    if (s && s.forEach !== i) try {
      a(s, "forEach", i);
    } catch (t) {
      s.forEach = i;
    }
  }
}, function (t, e, n) {
  var r = n(2),
      o = n(150),
      i = n(71),
      a = n(15),
      u = n(6),
      l = u("iterator"),
      s = u("toStringTag"),
      c = i.values;

  for (var f in o) {
    var h = r[f],
        p = h && h.prototype;

    if (p) {
      if (p[l] !== c) try {
        a(p, l, c);
      } catch (t) {
        p[l] = c;
      }
      if (p[s] || a(p, s, f), o[f]) for (var d in i) {
        if (p[d] !== i[d]) try {
          a(p, d, i[d]);
        } catch (t) {
          p[d] = i[d];
        }
      }
    }
  }
}, function (t, e, n) {
  var r = n(0),
      o = n(2),
      i = n(108);
  r({
    global: !0,
    bind: !0,
    enumerable: !0,
    forced: !o.setImmediate || !o.clearImmediate
  }, {
    setImmediate: i.set,
    clearImmediate: i.clear
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(2),
      i = n(143),
      a = n(46),
      u = o.process;
  r({
    global: !0,
    enumerable: !0,
    noTargetGet: !0
  }, {
    queueMicrotask: function queueMicrotask(t) {
      var e = a && u.domain;
      i(e ? e.bind(t) : t);
    }
  });
}, function (t, e, n) {
  var r = n(0),
      o = n(2),
      i = n(64),
      a = [].slice,
      u = function u(t) {
    return function (e, n) {
      var r = arguments.length > 2,
          o = r ? a.call(arguments, 2) : void 0;
      return t(r ? function () {
        ("function" == typeof e ? e : Function(e)).apply(this, o);
      } : e, n);
    };
  };

  r({
    global: !0,
    bind: !0,
    forced: /MSIE .\./.test(i)
  }, {
    setTimeout: u(o.setTimeout),
    setInterval: u(o.setInterval)
  });
}, function (t, e, n) {
  "use strict";

  n(135);

  var r,
      o = n(0),
      i = n(5),
      a = n(151),
      u = n(2),
      l = n(94),
      s = n(16),
      c = n(41),
      f = n(11),
      h = n(130),
      p = n(123),
      d = n(73).codeAt,
      y = n(385),
      v = n(29),
      g = n(152),
      b = n(17),
      m = u.URL,
      w = g.URLSearchParams,
      _ = g.getState,
      x = b.set,
      O = b.getterFor("URL"),
      E = Math.floor,
      S = Math.pow,
      A = /[A-Za-z]/,
      T = /[\d+-.A-Za-z]/,
      k = /\d/,
      j = /^(0x|0X)/,
      P = /^[0-7]+$/,
      N = /^\d+$/,
      q = /^[\dA-Fa-f]+$/,
      R = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
      L = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
      C = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
      I = /[\u0009\u000A\u000D]/g,
      M = function M(t, e) {
    var n, r, o;

    if ("[" == e.charAt(0)) {
      if ("]" != e.charAt(e.length - 1)) return "Invalid host";
      if (!(n = B(e.slice(1, -1)))) return "Invalid host";
      t.host = n;
    } else if (K(t)) {
      if (e = y(e), R.test(e)) return "Invalid host";
      if (null === (n = D(e))) return "Invalid host";
      t.host = n;
    } else {
      if (L.test(e)) return "Invalid host";

      for (n = "", r = p(e), o = 0; o < r.length; o++) {
        n += Y(r[o], F);
      }

      t.host = n;
    }
  },
      D = function D(t) {
    var e,
        n,
        r,
        o,
        i,
        a,
        u,
        l = t.split(".");
    if (l.length && "" == l[l.length - 1] && l.pop(), (e = l.length) > 4) return t;

    for (n = [], r = 0; r < e; r++) {
      if ("" == (o = l[r])) return t;
      if (i = 10, o.length > 1 && "0" == o.charAt(0) && (i = j.test(o) ? 16 : 8, o = o.slice(8 == i ? 1 : 2)), "" === o) a = 0;else {
        if (!(10 == i ? N : 8 == i ? P : q).test(o)) return t;
        a = parseInt(o, i);
      }
      n.push(a);
    }

    for (r = 0; r < e; r++) {
      if (a = n[r], r == e - 1) {
        if (a >= S(256, 5 - e)) return null;
      } else if (a > 255) return null;
    }

    for (u = n.pop(), r = 0; r < n.length; r++) {
      u += n[r] * S(256, 3 - r);
    }

    return u;
  },
      B = function B(t) {
    var e,
        n,
        r,
        o,
        i,
        a,
        u,
        l = [0, 0, 0, 0, 0, 0, 0, 0],
        s = 0,
        c = null,
        f = 0,
        h = function h() {
      return t.charAt(f);
    };

    if (":" == h()) {
      if (":" != t.charAt(1)) return;
      f += 2, c = ++s;
    }

    for (; h();) {
      if (8 == s) return;

      if (":" != h()) {
        for (e = n = 0; n < 4 && q.test(h());) {
          e = 16 * e + parseInt(h(), 16), f++, n++;
        }

        if ("." == h()) {
          if (0 == n) return;
          if (f -= n, s > 6) return;

          for (r = 0; h();) {
            if (o = null, r > 0) {
              if (!("." == h() && r < 4)) return;
              f++;
            }

            if (!k.test(h())) return;

            for (; k.test(h());) {
              if (i = parseInt(h(), 10), null === o) o = i;else {
                if (0 == o) return;
                o = 10 * o + i;
              }
              if (o > 255) return;
              f++;
            }

            l[s] = 256 * l[s] + o, 2 != ++r && 4 != r || s++;
          }

          if (4 != r) return;
          break;
        }

        if (":" == h()) {
          if (f++, !h()) return;
        } else if (h()) return;

        l[s++] = e;
      } else {
        if (null !== c) return;
        f++, c = ++s;
      }
    }

    if (null !== c) for (a = s - c, s = 7; 0 != s && a > 0;) {
      u = l[s], l[s--] = l[c + a - 1], l[c + --a] = u;
    } else if (8 != s) return;
    return l;
  },
      U = function U(t) {
    var e, n, r, o;

    if ("number" == typeof t) {
      for (e = [], n = 0; n < 4; n++) {
        e.unshift(t % 256), t = E(t / 256);
      }

      return e.join(".");
    }

    if ("object" == _typeof(t)) {
      for (e = "", r = function (t) {
        for (var e = null, n = 1, r = null, o = 0, i = 0; i < 8; i++) {
          0 !== t[i] ? (o > n && (e = r, n = o), r = null, o = 0) : (null === r && (r = i), ++o);
        }

        return o > n && (e = r, n = o), e;
      }(t), n = 0; n < 8; n++) {
        o && 0 === t[n] || (o && (o = !1), r === n ? (e += n ? ":" : "::", o = !0) : (e += t[n].toString(16), n < 7 && (e += ":")));
      }

      return "[" + e + "]";
    }

    return t;
  },
      F = {},
      J = h({}, F, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
  }),
      H = h({}, J, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
  }),
      z = h({}, H, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
  }),
      Y = function Y(t, e) {
    var n = d(t, 0);
    return n > 32 && n < 127 && !f(e, t) ? t : encodeURIComponent(t);
  },
      W = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  },
      K = function K(t) {
    return f(W, t.scheme);
  },
      V = function V(t) {
    return "" != t.username || "" != t.password;
  },
      G = function G(t) {
    return !t.host || t.cannotBeABaseURL || "file" == t.scheme;
  },
      Z = function Z(t, e) {
    var n;
    return 2 == t.length && A.test(t.charAt(0)) && (":" == (n = t.charAt(1)) || !e && "|" == n);
  },
      $ = function $(t) {
    var e;
    return t.length > 1 && Z(t.slice(0, 2)) && (2 == t.length || "/" === (e = t.charAt(2)) || "\\" === e || "?" === e || "#" === e);
  },
      X = function X(t) {
    var e = t.path,
        n = e.length;
    !n || "file" == t.scheme && 1 == n && Z(e[0], !0) || e.pop();
  },
      Q = function Q(t) {
    return "." === t || "%2e" === t.toLowerCase();
  },
      tt = {},
      et = {},
      nt = {},
      rt = {},
      ot = {},
      it = {},
      at = {},
      ut = {},
      lt = {},
      st = {},
      ct = {},
      ft = {},
      ht = {},
      pt = {},
      dt = {},
      yt = {},
      vt = {},
      gt = {},
      bt = {},
      mt = {},
      wt = {},
      _t = function _t(t, e, n, o) {
    var i,
        a,
        u,
        l,
        s,
        c = n || tt,
        h = 0,
        d = "",
        y = !1,
        v = !1,
        g = !1;

    for (n || (t.scheme = "", t.username = "", t.password = "", t.host = null, t.port = null, t.path = [], t.query = null, t.fragment = null, t.cannotBeABaseURL = !1, e = e.replace(C, "")), e = e.replace(I, ""), i = p(e); h <= i.length;) {
      switch (a = i[h], c) {
        case tt:
          if (!a || !A.test(a)) {
            if (n) return "Invalid scheme";
            c = nt;
            continue;
          }

          d += a.toLowerCase(), c = et;
          break;

        case et:
          if (a && (T.test(a) || "+" == a || "-" == a || "." == a)) d += a.toLowerCase();else {
            if (":" != a) {
              if (n) return "Invalid scheme";
              d = "", c = nt, h = 0;
              continue;
            }

            if (n && (K(t) != f(W, d) || "file" == d && (V(t) || null !== t.port) || "file" == t.scheme && !t.host)) return;
            if (t.scheme = d, n) return void (K(t) && W[t.scheme] == t.port && (t.port = null));
            d = "", "file" == t.scheme ? c = pt : K(t) && o && o.scheme == t.scheme ? c = rt : K(t) ? c = ut : "/" == i[h + 1] ? (c = ot, h++) : (t.cannotBeABaseURL = !0, t.path.push(""), c = bt);
          }
          break;

        case nt:
          if (!o || o.cannotBeABaseURL && "#" != a) return "Invalid scheme";

          if (o.cannotBeABaseURL && "#" == a) {
            t.scheme = o.scheme, t.path = o.path.slice(), t.query = o.query, t.fragment = "", t.cannotBeABaseURL = !0, c = wt;
            break;
          }

          c = "file" == o.scheme ? pt : it;
          continue;

        case rt:
          if ("/" != a || "/" != i[h + 1]) {
            c = it;
            continue;
          }

          c = lt, h++;
          break;

        case ot:
          if ("/" == a) {
            c = st;
            break;
          }

          c = gt;
          continue;

        case it:
          if (t.scheme = o.scheme, a == r) t.username = o.username, t.password = o.password, t.host = o.host, t.port = o.port, t.path = o.path.slice(), t.query = o.query;else if ("/" == a || "\\" == a && K(t)) c = at;else if ("?" == a) t.username = o.username, t.password = o.password, t.host = o.host, t.port = o.port, t.path = o.path.slice(), t.query = "", c = mt;else {
            if ("#" != a) {
              t.username = o.username, t.password = o.password, t.host = o.host, t.port = o.port, t.path = o.path.slice(), t.path.pop(), c = gt;
              continue;
            }

            t.username = o.username, t.password = o.password, t.host = o.host, t.port = o.port, t.path = o.path.slice(), t.query = o.query, t.fragment = "", c = wt;
          }
          break;

        case at:
          if (!K(t) || "/" != a && "\\" != a) {
            if ("/" != a) {
              t.username = o.username, t.password = o.password, t.host = o.host, t.port = o.port, c = gt;
              continue;
            }

            c = st;
          } else c = lt;

          break;

        case ut:
          if (c = lt, "/" != a || "/" != d.charAt(h + 1)) continue;
          h++;
          break;

        case lt:
          if ("/" != a && "\\" != a) {
            c = st;
            continue;
          }

          break;

        case st:
          if ("@" == a) {
            y && (d = "%40" + d), y = !0, u = p(d);

            for (var b = 0; b < u.length; b++) {
              var m = u[b];

              if (":" != m || g) {
                var w = Y(m, z);
                g ? t.password += w : t.username += w;
              } else g = !0;
            }

            d = "";
          } else if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && K(t)) {
            if (y && "" == d) return "Invalid authority";
            h -= p(d).length + 1, d = "", c = ct;
          } else d += a;

          break;

        case ct:
        case ft:
          if (n && "file" == t.scheme) {
            c = yt;
            continue;
          }

          if (":" != a || v) {
            if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && K(t)) {
              if (K(t) && "" == d) return "Invalid host";
              if (n && "" == d && (V(t) || null !== t.port)) return;
              if (l = M(t, d)) return l;
              if (d = "", c = vt, n) return;
              continue;
            }

            "[" == a ? v = !0 : "]" == a && (v = !1), d += a;
          } else {
            if ("" == d) return "Invalid host";
            if (l = M(t, d)) return l;
            if (d = "", c = ht, n == ft) return;
          }

          break;

        case ht:
          if (!k.test(a)) {
            if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && K(t) || n) {
              if ("" != d) {
                var _ = parseInt(d, 10);

                if (_ > 65535) return "Invalid port";
                t.port = K(t) && _ === W[t.scheme] ? null : _, d = "";
              }

              if (n) return;
              c = vt;
              continue;
            }

            return "Invalid port";
          }

          d += a;
          break;

        case pt:
          if (t.scheme = "file", "/" == a || "\\" == a) c = dt;else {
            if (!o || "file" != o.scheme) {
              c = gt;
              continue;
            }

            if (a == r) t.host = o.host, t.path = o.path.slice(), t.query = o.query;else if ("?" == a) t.host = o.host, t.path = o.path.slice(), t.query = "", c = mt;else {
              if ("#" != a) {
                $(i.slice(h).join("")) || (t.host = o.host, t.path = o.path.slice(), X(t)), c = gt;
                continue;
              }

              t.host = o.host, t.path = o.path.slice(), t.query = o.query, t.fragment = "", c = wt;
            }
          }
          break;

        case dt:
          if ("/" == a || "\\" == a) {
            c = yt;
            break;
          }

          o && "file" == o.scheme && !$(i.slice(h).join("")) && (Z(o.path[0], !0) ? t.path.push(o.path[0]) : t.host = o.host), c = gt;
          continue;

        case yt:
          if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
            if (!n && Z(d)) c = gt;else if ("" == d) {
              if (t.host = "", n) return;
              c = vt;
            } else {
              if (l = M(t, d)) return l;
              if ("localhost" == t.host && (t.host = ""), n) return;
              d = "", c = vt;
            }
            continue;
          }

          d += a;
          break;

        case vt:
          if (K(t)) {
            if (c = gt, "/" != a && "\\" != a) continue;
          } else if (n || "?" != a) {
            if (n || "#" != a) {
              if (a != r && (c = gt, "/" != a)) continue;
            } else t.fragment = "", c = wt;
          } else t.query = "", c = mt;

          break;

        case gt:
          if (a == r || "/" == a || "\\" == a && K(t) || !n && ("?" == a || "#" == a)) {
            if (".." === (s = (s = d).toLowerCase()) || "%2e." === s || ".%2e" === s || "%2e%2e" === s ? (X(t), "/" == a || "\\" == a && K(t) || t.path.push("")) : Q(d) ? "/" == a || "\\" == a && K(t) || t.path.push("") : ("file" == t.scheme && !t.path.length && Z(d) && (t.host && (t.host = ""), d = d.charAt(0) + ":"), t.path.push(d)), d = "", "file" == t.scheme && (a == r || "?" == a || "#" == a)) for (; t.path.length > 1 && "" === t.path[0];) {
              t.path.shift();
            }
            "?" == a ? (t.query = "", c = mt) : "#" == a && (t.fragment = "", c = wt);
          } else d += Y(a, H);

          break;

        case bt:
          "?" == a ? (t.query = "", c = mt) : "#" == a ? (t.fragment = "", c = wt) : a != r && (t.path[0] += Y(a, F));
          break;

        case mt:
          n || "#" != a ? a != r && ("'" == a && K(t) ? t.query += "%27" : t.query += "#" == a ? "%23" : Y(a, F)) : (t.fragment = "", c = wt);
          break;

        case wt:
          a != r && (t.fragment += Y(a, J));
      }

      h++;
    }
  },
      xt = function xt(t) {
    var e,
        n,
        r = c(this, xt, "URL"),
        o = arguments.length > 1 ? arguments[1] : void 0,
        a = String(t),
        u = x(r, {
      type: "URL"
    });
    if (void 0 !== o) if (o instanceof xt) e = O(o);else if (n = _t(e = {}, String(o))) throw TypeError(n);
    if (n = _t(u, a, null, e)) throw TypeError(n);

    var l = u.searchParams = new w(),
        s = _(l);

    s.updateSearchParams(u.query), s.updateURL = function () {
      u.query = String(l) || null;
    }, i || (r.href = Et.call(r), r.origin = St.call(r), r.protocol = At.call(r), r.username = Tt.call(r), r.password = kt.call(r), r.host = jt.call(r), r.hostname = Pt.call(r), r.port = Nt.call(r), r.pathname = qt.call(r), r.search = Rt.call(r), r.searchParams = Lt.call(r), r.hash = Ct.call(r));
  },
      Ot = xt.prototype,
      Et = function Et() {
    var t = O(this),
        e = t.scheme,
        n = t.username,
        r = t.password,
        o = t.host,
        i = t.port,
        a = t.path,
        u = t.query,
        l = t.fragment,
        s = e + ":";
    return null !== o ? (s += "//", V(t) && (s += n + (r ? ":" + r : "") + "@"), s += U(o), null !== i && (s += ":" + i)) : "file" == e && (s += "//"), s += t.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== u && (s += "?" + u), null !== l && (s += "#" + l), s;
  },
      St = function St() {
    var t = O(this),
        e = t.scheme,
        n = t.port;
    if ("blob" == e) try {
      return new URL(e.path[0]).origin;
    } catch (t) {
      return "null";
    }
    return "file" != e && K(t) ? e + "://" + U(t.host) + (null !== n ? ":" + n : "") : "null";
  },
      At = function At() {
    return O(this).scheme + ":";
  },
      Tt = function Tt() {
    return O(this).username;
  },
      kt = function kt() {
    return O(this).password;
  },
      jt = function jt() {
    var t = O(this),
        e = t.host,
        n = t.port;
    return null === e ? "" : null === n ? U(e) : U(e) + ":" + n;
  },
      Pt = function Pt() {
    var t = O(this).host;
    return null === t ? "" : U(t);
  },
      Nt = function Nt() {
    var t = O(this).port;
    return null === t ? "" : String(t);
  },
      qt = function qt() {
    var t = O(this),
        e = t.path;
    return t.cannotBeABaseURL ? e[0] : e.length ? "/" + e.join("/") : "";
  },
      Rt = function Rt() {
    var t = O(this).query;
    return t ? "?" + t : "";
  },
      Lt = function Lt() {
    return O(this).searchParams;
  },
      Ct = function Ct() {
    var t = O(this).fragment;
    return t ? "#" + t : "";
  },
      It = function It(t, e) {
    return {
      get: t,
      set: e,
      configurable: !0,
      enumerable: !0
    };
  };

  if (i && l(Ot, {
    href: It(Et, function (t) {
      var e = O(this),
          n = String(t),
          r = _t(e, n);

      if (r) throw TypeError(r);

      _(e.searchParams).updateSearchParams(e.query);
    }),
    origin: It(St),
    protocol: It(At, function (t) {
      var e = O(this);

      _t(e, String(t) + ":", tt);
    }),
    username: It(Tt, function (t) {
      var e = O(this),
          n = p(String(t));

      if (!G(e)) {
        e.username = "";

        for (var r = 0; r < n.length; r++) {
          e.username += Y(n[r], z);
        }
      }
    }),
    password: It(kt, function (t) {
      var e = O(this),
          n = p(String(t));

      if (!G(e)) {
        e.password = "";

        for (var r = 0; r < n.length; r++) {
          e.password += Y(n[r], z);
        }
      }
    }),
    host: It(jt, function (t) {
      var e = O(this);
      e.cannotBeABaseURL || _t(e, String(t), ct);
    }),
    hostname: It(Pt, function (t) {
      var e = O(this);
      e.cannotBeABaseURL || _t(e, String(t), ft);
    }),
    port: It(Nt, function (t) {
      var e = O(this);
      G(e) || ("" == (t = String(t)) ? e.port = null : _t(e, t, ht));
    }),
    pathname: It(qt, function (t) {
      var e = O(this);
      e.cannotBeABaseURL || (e.path = [], _t(e, t + "", vt));
    }),
    search: It(Rt, function (t) {
      var e = O(this);
      "" == (t = String(t)) ? e.query = null : ("?" == t.charAt(0) && (t = t.slice(1)), e.query = "", _t(e, t, mt)), _(e.searchParams).updateSearchParams(e.query);
    }),
    searchParams: It(Lt),
    hash: It(Ct, function (t) {
      var e = O(this);
      "" != (t = String(t)) ? ("#" == t.charAt(0) && (t = t.slice(1)), e.fragment = "", _t(e, t, wt)) : e.fragment = null;
    })
  }), s(Ot, "toJSON", function () {
    return Et.call(this);
  }, {
    enumerable: !0
  }), s(Ot, "toString", function () {
    return Et.call(this);
  }, {
    enumerable: !0
  }), m) {
    var Mt = m.createObjectURL,
        Dt = m.revokeObjectURL;
    Mt && s(xt, "createObjectURL", function (t) {
      return Mt.apply(m, arguments);
    }), Dt && s(xt, "revokeObjectURL", function (t) {
      return Dt.apply(m, arguments);
    });
  }

  v(xt, "URL"), o({
    global: !0,
    forced: !a,
    sham: !i
  }, {
    URL: xt
  });
}, function (t, e, n) {
  "use strict";

  var r = /[^\0-\u007E]/,
      o = /[.\u3002\uFF0E\uFF61]/g,
      i = "Overflow: input needs wider integers to process",
      a = Math.floor,
      u = String.fromCharCode,
      l = function l(t) {
    return t + 22 + 75 * (t < 26);
  },
      s = function s(t, e, n) {
    var r = 0;

    for (t = n ? a(t / 700) : t >> 1, t += a(t / e); t > 455; r += 36) {
      t = a(t / 35);
    }

    return a(r + 36 * t / (t + 38));
  },
      c = function c(t) {
    var e,
        n,
        r = [],
        o = (t = function (t) {
      for (var e = [], n = 0, r = t.length; n < r;) {
        var o = t.charCodeAt(n++);

        if (o >= 55296 && o <= 56319 && n < r) {
          var i = t.charCodeAt(n++);
          56320 == (64512 & i) ? e.push(((1023 & o) << 10) + (1023 & i) + 65536) : (e.push(o), n--);
        } else e.push(o);
      }

      return e;
    }(t)).length,
        c = 128,
        f = 0,
        h = 72;

    for (e = 0; e < t.length; e++) {
      (n = t[e]) < 128 && r.push(u(n));
    }

    var p = r.length,
        d = p;

    for (p && r.push("-"); d < o;) {
      var y = 2147483647;

      for (e = 0; e < t.length; e++) {
        (n = t[e]) >= c && n < y && (y = n);
      }

      var v = d + 1;
      if (y - c > a((2147483647 - f) / v)) throw RangeError(i);

      for (f += (y - c) * v, c = y, e = 0; e < t.length; e++) {
        if ((n = t[e]) < c && ++f > 2147483647) throw RangeError(i);

        if (n == c) {
          for (var g = f, b = 36;; b += 36) {
            var m = b <= h ? 1 : b >= h + 26 ? 26 : b - h;
            if (g < m) break;

            var w = g - m,
                _ = 36 - m;

            r.push(u(l(m + w % _))), g = a(w / _);
          }

          r.push(u(l(g))), h = s(f, v, d == p), f = 0, ++d;
        }
      }

      ++f, ++c;
    }

    return r.join("");
  };

  t.exports = function (t) {
    var e,
        n,
        i = [],
        a = t.toLowerCase().replace(o, ".").split(".");

    for (e = 0; e < a.length; e++) {
      n = a[e], i.push(r.test(n) ? "xn--" + c(n) : n);
    }

    return i.join(".");
  };
}, function (t, e, n) {
  var r = n(4),
      o = n(60);

  t.exports = function (t) {
    var e = o(t);
    if ("function" != typeof e) throw TypeError(String(t) + " is not iterable");
    return r(e.call(t));
  };
}, function (t, e, n) {
  "use strict";

  n(0)({
    target: "URL",
    proto: !0,
    enumerable: !0
  }, {
    toJSON: function toJSON() {
      return URL.prototype.toString.call(this);
    }
  });
}, function (t, e, n) {
  var r = function (t) {
    "use strict";

    var e = Object.prototype,
        n = e.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        o = r.iterator || "@@iterator",
        i = r.asyncIterator || "@@asyncIterator",
        a = r.toStringTag || "@@toStringTag";

    function u(t, e, n) {
      return Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }

    try {
      u({}, "");
    } catch (t) {
      u = function u(t, e, n) {
        return t[e] = n;
      };
    }

    function l(t, e, n, r) {
      var o = e && e.prototype instanceof f ? e : f,
          i = Object.create(o.prototype),
          a = new O(r || []);
      return i._invoke = function (t, e, n) {
        var r = "suspendedStart";
        return function (o, i) {
          if ("executing" === r) throw new Error("Generator is already running");

          if ("completed" === r) {
            if ("throw" === o) throw i;
            return S();
          }

          for (n.method = o, n.arg = i;;) {
            var a = n.delegate;

            if (a) {
              var u = w(a, n);

              if (u) {
                if (u === c) continue;
                return u;
              }
            }

            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if ("suspendedStart" === r) throw r = "completed", n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            r = "executing";
            var l = s(t, e, n);

            if ("normal" === l.type) {
              if (r = n.done ? "completed" : "suspendedYield", l.arg === c) continue;
              return {
                value: l.arg,
                done: n.done
              };
            }

            "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg);
          }
        };
      }(t, n, a), i;
    }

    function s(t, e, n) {
      try {
        return {
          type: "normal",
          arg: t.call(e, n)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }

    t.wrap = l;
    var c = {};

    function f() {}

    function h() {}

    function p() {}

    var d = {};

    d[o] = function () {
      return this;
    };

    var y = Object.getPrototypeOf,
        v = y && y(y(E([])));
    v && v !== e && n.call(v, o) && (d = v);
    var g = p.prototype = f.prototype = Object.create(d);

    function b(t) {
      ["next", "throw", "return"].forEach(function (e) {
        u(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }

    function m(t, e) {
      var r;

      this._invoke = function (o, i) {
        function a() {
          return new e(function (r, a) {
            !function r(o, i, a, u) {
              var l = s(t[o], t, i);

              if ("throw" !== l.type) {
                var c = l.arg,
                    f = c.value;
                return f && "object" == _typeof(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
                  r("next", t, a, u);
                }, function (t) {
                  r("throw", t, a, u);
                }) : e.resolve(f).then(function (t) {
                  c.value = t, a(c);
                }, function (t) {
                  return r("throw", t, a, u);
                });
              }

              u(l.arg);
            }(o, i, r, a);
          });
        }

        return r = r ? r.then(a, a) : a();
      };
    }

    function w(t, e) {
      var n = t.iterator[e.method];

      if (void 0 === n) {
        if (e.delegate = null, "throw" === e.method) {
          if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return c;
          e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return c;
      }

      var r = s(n, t.iterator, e.arg);
      if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, c;
      var o = r.arg;
      return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, c) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, c);
    }

    function _(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }

    function x(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }

    function O(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(_, this), this.reset(!0);
    }

    function E(t) {
      if (t) {
        var e = t[o];
        if (e) return e.call(t);
        if ("function" == typeof t.next) return t;

        if (!isNaN(t.length)) {
          var r = -1,
              i = function e() {
            for (; ++r < t.length;) {
              if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
            }

            return e.value = void 0, e.done = !0, e;
          };

          return i.next = i;
        }
      }

      return {
        next: S
      };
    }

    function S() {
      return {
        value: void 0,
        done: !0
      };
    }

    return h.prototype = g.constructor = p, p.constructor = h, h.displayName = u(p, a, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
    }, t.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, t.awrap = function (t) {
      return {
        __await: t
      };
    }, b(m.prototype), m.prototype[i] = function () {
      return this;
    }, t.AsyncIterator = m, t.async = function (e, n, r, o, i) {
      void 0 === i && (i = Promise);
      var a = new m(l(e, n, r, o), i);
      return t.isGeneratorFunction(n) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, b(g), u(g, a, "Generator"), g[o] = function () {
      return this;
    }, g.toString = function () {
      return "[object Generator]";
    }, t.keys = function (t) {
      var e = [];

      for (var n in t) {
        e.push(n);
      }

      return e.reverse(), function n() {
        for (; e.length;) {
          var r = e.pop();
          if (r in t) return n.value = r, n.done = !1, n;
        }

        return n.done = !0, n;
      };
    }, t.values = E, O.prototype = {
      constructor: O,
      reset: function reset(t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t) for (var e in this) {
          "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
        }
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(t) {
        if (this.done) throw t;
        var e = this;

        function r(n, r) {
          return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r;
        }

        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
              a = i.completion;
          if ("root" === i.tryLoc) return r("end");

          if (i.tryLoc <= this.prev) {
            var u = n.call(i, "catchLoc"),
                l = n.call(i, "finallyLoc");

            if (u && l) {
              if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return r(i.finallyLoc);
            } else if (u) {
              if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
            } else {
              if (!l) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return r(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];

          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }

        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, c) : this.complete(a);
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), c;
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), c;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];

          if (n.tryLoc === t) {
            var r = n.completion;

            if ("throw" === r.type) {
              var o = r.arg;
              x(n);
            }

            return o;
          }
        }

        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(t, e, n) {
        return this.delegate = {
          iterator: E(t),
          resultName: e,
          nextLoc: n
        }, "next" === this.method && (this.arg = void 0), c;
      }
    }, t;
  }(t.exports);

  try {
    regeneratorRuntime = r;
  } catch (t) {
    Function("r", "regeneratorRuntime = r")(r);
  }
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(153),
      o = n.n(r),
      i = (n(158), n(388), function (t) {
    return {
      applyHtmlTags: ["h1", "h2", "h3", "h4", "h5", "h6", "header"].map(function (t) {
        return t.toLowerCase();
      })
    };
  });

  function a(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  var u = function () {
    function t() {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t);
    }

    var e, n, r;
    return e = t, (n = [{
      key: "_getCustomPatternOrDefault",
      value: function value(t, e, n) {
        return t.tags && t.tags[e] && t.tags[e].pattern ? t.tags[e].pattern : n;
      }
    }, {
      key: "_getActiveTagsWithoutIgnore",
      value: function value(t, e) {
        return Array.isArray(e) ? t.reduce(function (t, n) {
          return e.includes(n) || t.push(n.toLowerCase()), t;
        }, []) : t;
      }
    }]) && a(e.prototype, n), r && a(e, r), t;
  }();

  function l(t) {
    return (l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function s(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return c(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function c(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function f(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function h(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function p(t, e) {
    return (p = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function d(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = g(t);

      if (e) {
        var o = g(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return y(this, n);
    };
  }

  function y(t, e) {
    return !e || "object" !== l(e) && "function" != typeof e ? v(t) : e;
  }

  function v(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function g(t) {
    return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var b = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && p(t, e);
    }(a, t);
    var e,
        n,
        r,
        o = d(a);

    function a(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return f(this, a), (e = o.call(this)).quillJS = t, e.name = "header", e.pattern = e._getCustomPatternOrDefault(n, e.name, /^(#){1,6}\s/g), e.getAction.bind(v(e)), e._meta = i(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = a, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r) {
            return new Promise(function (o) {
              var i = r.exec(e);

              if (i && t.activeTags.length && t.activeTags.find(function (t) {
                return "header" === t;
              })) {
                var a = i[0].length,
                    u = s(t.quillJS.getLine(n.index), 1)[0],
                    l = t.quillJS.getIndex(u);
                if (!t.activeTags.includes("h".concat(a - 1))) return o(!1);
                setTimeout(function () {
                  t.quillJS.formatLine(l, 0, "header", a - 1), t.quillJS.deleteText(l, a), o(!0);
                }, 0);
              } else o(!1);
            });
          }
        };
      }
    }]) && h(e.prototype, n), r && h(e, r), a;
  }(u),
      m = function m(t) {
    return {
      applyHtmlTags: ["blockquote"].map(function (t) {
        return t.toLowerCase();
      })
    };
  };

  function w(t) {
    return (w = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function _(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return x(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function x(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function O(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function E(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function S(t, e) {
    return (S = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function A(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = j(t);

      if (e) {
        var o = j(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return T(this, n);
    };
  }

  function T(t, e) {
    return !e || "object" !== w(e) && "function" != typeof e ? k(t) : e;
  }

  function k(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function j(t) {
    return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var P = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && S(t, e);
    }(i, t);
    var e,
        n,
        r,
        o = A(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return O(this, i), (e = o.call(this)).quillJS = t, e.name = "blockquote", e.pattern = e._getCustomPatternOrDefault(n, e.name, /^(>)\s/g), e.getAction.bind(k(e)), e._meta = m(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r) {
            return new Promise(function (o) {
              var i = r.exec(e);

              if (i && t.activeTags.length) {
                var a = i[0] || "";
                setTimeout(function () {
                  t.quillJS.formatText(n.index, i.input.length - 1, "blockquote", !0), t.quillJS.deleteText(n.index - a.length, a.length), o(!0);
                }, 0);
              } else o(!1);
            });
          },
          release: function release() {
            setTimeout(function () {
              var e = t.quillJS.getSelection().index;
              0 === _(t.quillJS.getLine(e), 2)[1] && t.quillJS.format("blockquote", !1);
            }, 0);
          }
        };
      }
    }]) && E(e.prototype, n), r && E(e, r), i;
  }(u);

  function N(t) {
    return (N = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function q(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function R(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function L(t, e) {
    return (L = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function C(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = D(t);

      if (e) {
        var o = D(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return I(this, n);
    };
  }

  function I(t, e) {
    return !e || "object" !== N(e) && "function" != typeof e ? M(t) : e;
  }

  function M(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function D(t) {
    return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var B = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && L(t, e);
    }(i, t);
    var e,
        n,
        r,
        o = C(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return q(this, i), (e = o.call(this)).quillJS = t, e.name = "blockquote", e.pattern = e._getCustomPatternOrDefault(n, e.name, /^\s{0,99}(>)\s/g), e.getAction.bind(M(e)), e._meta = m(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r) {
            return new Promise(function (o) {
              var i = r.exec(e);

              if (i && t.activeTags.length) {
                var a = i[0] || "";
                setTimeout(function () {
                  var e = n.index - 1;
                  t.quillJS.deleteText(e, 2), setTimeout(function () {
                    t.quillJS.formatLine(e, a.length - 3, "blockquote", !0), o(!0);
                  }, 0);
                }, 0);
              } else o(!1);
            });
          }
        };
      }
    }]) && R(e.prototype, n), r && R(e, r), i;
  }(u),
      U = function U(t) {
    return {
      applyHtmlTags: ["bold"].map(function (t) {
        return t.toLowerCase();
      })
    };
  };

  function F(t) {
    return (F = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function J(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return H(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return H(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function H(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function z(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function Y(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function W(t, e) {
    return (W = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function K(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = Z(t);

      if (e) {
        var o = Z(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return V(this, n);
    };
  }

  function V(t, e) {
    return !e || "object" !== F(e) && "function" != typeof e ? G(t) : e;
  }

  function G(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function Z(t) {
    return (Z = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var $ = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && W(t, e);
    }(i, t);
    var e,
        n,
        r,
        o = K(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return z(this, i), (e = o.call(this)).quillJS = t, e.name = "bold", e.pattern = e._getCustomPatternOrDefault(n, e.name, /(\*|_){2}(.+?)(?:\1){2}/g), e.getAction.bind(G(e)), e._meta = U(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r, o) {
            return new Promise(function (n) {
              var i = r.exec(e),
                  a = J(i, 3),
                  u = a[0],
                  l = a[2],
                  s = o + i.index;
              !e.match(/^([*_ \n]+)$/g) && t.activeTags.length ? setTimeout(function () {
                t.quillJS.deleteText(s, u.length), setTimeout(function () {
                  t.quillJS.insertText(s, l, {
                    bold: !0
                  }), t.quillJS.format("bold", !1), n(!0);
                });
              }, 0) : n(!1);
            });
          }
        };
      }
    }]) && Y(e.prototype, n), r && Y(e, r), i;
  }(u),
      X = function X(t) {
    return {
      applyHtmlTags: ["checkbox"].map(function (t) {
        return t.toLowerCase();
      })
    };
  };

  function Q(t) {
    return (Q = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function tt(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return et(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return et(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function et(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function nt(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function rt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function ot(t, e) {
    return (ot = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function it(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = lt(t);

      if (e) {
        var o = lt(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return at(this, n);
    };
  }

  function at(t, e) {
    return !e || "object" !== Q(e) && "function" != typeof e ? ut(t) : e;
  }

  function ut(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function lt(t) {
    return (lt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var st = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && ot(t, e);
    }(i, t);
    var e,
        n,
        r,
        o = it(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return nt(this, i), (e = o.call(this)).quillJS = t, e.name = "checkbox-checked", e.pattern = e._getCustomPatternOrDefault(n, "checkbox", /^(\[x\])+\s/g), e.getAction.bind(ut(e)), e._meta = X(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r) {
            return new Promise(function (o) {
              if (r.exec(e) && t.activeTags.length) {
                var i = tt(t.quillJS.getLine(n.index), 1)[0],
                    a = t.quillJS.getIndex(i);
                setTimeout(function () {
                  var n = e.split("[x] ").splice(1, 1).join("");
                  t.quillJS.insertText(a, n), t.quillJS.deleteText(a + n.length - 1, e.length), setTimeout(function () {
                    t.quillJS.formatLine(a, 0, "list", "checked"), o(!0);
                  });
                }, 0);
              } else o(!1);
            });
          }
        };
      }
    }]) && rt(e.prototype, n), r && rt(e, r), i;
  }(u);

  function ct(t) {
    return (ct = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function ft(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return ht(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ht(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function ht(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function pt(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function dt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function yt(t, e) {
    return (yt = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function vt(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = mt(t);

      if (e) {
        var o = mt(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return gt(this, n);
    };
  }

  function gt(t, e) {
    return !e || "object" !== ct(e) && "function" != typeof e ? bt(t) : e;
  }

  function bt(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function mt(t) {
    return (mt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var wt = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && yt(t, e);
    }(i, t);
    var e,
        n,
        r,
        o = vt(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return pt(this, i), (e = o.call(this)).quillJS = t, e.name = "checkbox-unchecked", e.pattern = e._getCustomPatternOrDefault(n, e.name, /^(\[\s?\])+\s/g), e.getAction.bind(bt(e)), e._meta = X(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r) {
            return new Promise(function (o) {
              if (r.exec(e) && t.activeTags.length) {
                var i = ft(t.quillJS.getLine(n.index), 1)[0],
                    a = t.quillJS.getIndex(i);
                setTimeout(function () {
                  var n = e.split("[ ] ").length > 1 ? e.split("[ ] ").splice(1, 1).join("") : e;
                  n = n.split("[] ").length > 1 ? n.split("[] ").splice(1, 1).join("") : n, t.quillJS.insertText(a, n), t.quillJS.deleteText(a + n.length - 1, e.length), setTimeout(function () {
                    t.quillJS.formatLine(a, 0, "list", "unchecked"), o(!0);
                  });
                }, 0);
              } else o(!1);
            });
          }
        };
      }
    }]) && dt(e.prototype, n), r && dt(e, r), i;
  }(u),
      _t = function _t(t) {
    return {
      applyHtmlTags: ["code"].map(function (t) {
        return t.toLowerCase();
      })
    };
  };

  function xt(t) {
    return (xt = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function Ot(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return Et(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Et(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function Et(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function St(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function At(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function Tt(t, e) {
    return (Tt = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function kt(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = Nt(t);

      if (e) {
        var o = Nt(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return jt(this, n);
    };
  }

  function jt(t, e) {
    return !e || "object" !== xt(e) && "function" != typeof e ? Pt(t) : e;
  }

  function Pt(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function Nt(t) {
    return (Nt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var qt = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && Tt(t, e);
    }(i, t);
    var e,
        n,
        r,
        o = kt(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return St(this, i), (e = o.call(this)).quillJS = t, e.name = "code", e.pattern = e._getCustomPatternOrDefault(n, e.name, function (t) {
        return /(`){1}(.+)(`){1}/g.test(t) && !/```.*/.test(t) ? t : null;
      }), e.getAction.bind(Pt(e)), e._meta = _t(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r, o) {
            return new Promise(function (n) {
              var r = /(`){1}(.+)(`){1}/g.exec(e);

              if (r && t.activeTags.length) {
                var i = Ot(r, 1)[0],
                    a = o + r.index;
                setTimeout(function () {
                  t.quillJS.deleteText(a, i.length), setTimeout(function () {
                    var e = i.replace(/`/g, "");
                    t.quillJS.insertText(a, e, {
                      code: !0
                    }), t.quillJS.insertText(a + e.length, " ", {
                      code: !1
                    }), n(!0);
                  }, 0);
                }, 0);
              } else n(!1);
            });
          }
        };
      }
    }]) && At(e.prototype, n), r && At(e, r), i;
  }(u),
      Rt = function Rt(t) {
    return {
      applyHtmlTags: ["italics"].map(function (t) {
        return t.toLowerCase();
      })
    };
  };

  function Lt(t) {
    return (Lt = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function Ct(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return It(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return It(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function It(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function Mt(t, e) {
    Mt = function Mt(t, e) {
      return new i(t, void 0, e);
    };

    var n = Dt(RegExp),
        r = RegExp.prototype,
        o = new WeakMap();

    function i(t, e, r) {
      var i = n.call(this, t, e);
      return o.set(i, r || o.get(t)), i;
    }

    function a(t, e) {
      var n = o.get(e);
      return Object.keys(n).reduce(function (e, r) {
        return e[r] = t[n[r]], e;
      }, Object.create(null));
    }

    return Jt(i, n), i.prototype.exec = function (t) {
      var e = r.exec.call(this, t);
      return e && (e.groups = a(e, this)), e;
    }, i.prototype[Symbol.replace] = function (t, e) {
      if ("string" == typeof e) {
        var n = o.get(this);
        return r[Symbol.replace].call(this, t, e.replace(/\$<([^>]+)>/g, function (t, e) {
          return "$" + n[e];
        }));
      }

      if ("function" == typeof e) {
        var i = this;
        return r[Symbol.replace].call(this, t, function () {
          var t = [];
          return t.push.apply(t, arguments), "object" !== Lt(t[t.length - 1]) && t.push(a(t, i)), e.apply(this, t);
        });
      }

      return r[Symbol.replace].call(this, t, e);
    }, Mt.apply(this, arguments);
  }

  function Dt(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return (Dt = function Dt(t) {
      if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
      var n;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== e) {
        if (e.has(t)) return e.get(t);
        e.set(t, r);
      }

      function r() {
        return Bt(t, arguments, Kt(this).constructor);
      }

      return r.prototype = Object.create(t.prototype, {
        constructor: {
          value: r,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), Ht(r, t);
    })(t);
  }

  function Bt(t, e, n) {
    return (Bt = Wt() ? Reflect.construct : function (t, e, n) {
      var r = [null];
      r.push.apply(r, e);
      var o = new (Function.bind.apply(t, r))();
      return n && Ht(o, n.prototype), o;
    }).apply(null, arguments);
  }

  function Ut(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function Ft(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function Jt(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && Ht(t, e);
  }

  function Ht(t, e) {
    return (Ht = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function zt(t, e) {
    return !e || "object" !== Lt(e) && "function" != typeof e ? Yt(t) : e;
  }

  function Yt(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function Wt() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  function Kt(t) {
    return (Kt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var Vt = function (t) {
    Jt(u, t);
    var e,
        n,
        r,
        o,
        i,
        a = (e = u, n = Wt(), function () {
      var t,
          r = Kt(e);

      if (n) {
        var o = Kt(this).constructor;
        t = Reflect.construct(r, arguments, o);
      } else t = r.apply(this, arguments);

      return zt(this, t);
    });

    function u(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return Ut(this, u), (e = a.call(this)).quillJS = t, e.name = "italic", e.pattern = e._getCustomPatternOrDefault(n, e.name, Mt(/(?:^|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])(?:(\*|_)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*((?:(?![\*_])[\s\S])+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?\1|(\*|_){3}[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*((?:(?![\*_])[\s\S])*)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\1{3})(?:$|(?=[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]))/g, {
        text1: 2,
        text3: 4
      })), e.getAction.bind(Yt(e)), e._meta = Rt(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return r = u, (o = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r, o) {
            return new Promise(function (n) {
              var i = r.exec(e);

              if (i && t.activeTags.length) {
                var a = Ct(i, 3),
                    u = a[0],
                    l = a[1],
                    s = a[2],
                    c = t.quillJS.getText()[o + i.index],
                    f = t.quillJS.getText()[o + i.index + 1];

                if (l !== c || c !== f) {
                  var h = o + i.index;
                  setTimeout(function () {
                    var e = !i.index,
                        r = e ? h : h + 1,
                        o = e ? u.length : u.length - 1;
                    t.quillJS.deleteText(r, o), t.quillJS.insertText(r, s, {
                      italic: !0
                    }), t.quillJS.format("italic", !1), n(!0);
                  }, 0);
                } else n(!1);
              } else n(!1);
            });
          }
        };
      }
    }]) && Ft(r.prototype, o), i && Ft(r, i), u;
  }(u),
      Gt = function Gt(t) {
    return {
      applyHtmlTags: ["link"].map(function (t) {
        return t.toLowerCase();
      })
    };
  };

  function Zt(t) {
    return (Zt = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function $t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function Xt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function Qt(t, e) {
    return (Qt = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function te(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = re(t);

      if (e) {
        var o = re(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return ee(this, n);
    };
  }

  function ee(t, e) {
    return !e || "object" !== Zt(e) && "function" != typeof e ? ne(t) : e;
  }

  function ne(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function re(t) {
    return (re = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var oe = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && Qt(t, e);
    }(i, t);
    var e,
        n,
        r,
        o = te(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return $t(this, i), (e = o.call(this)).quillJS = t, e.name = "link", e.pattern = e._getCustomPatternOrDefault(n, e.name, /(?:\[(.+?)\])(?:\((.+?)\))/g), e.getAction.bind(ne(e)), e._meta = Gt(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r, o) {
            return new Promise(function (n) {
              var i = r.exec(e),
                  a = o + i.index,
                  u = e.search(r),
                  l = e.match(r)[0],
                  s = e.match(/(?:\[(.*?)\])/g)[0],
                  c = e.match(/(?:\((.*?)\))/g)[0];
              t.activeTags.length && -1 !== u ? setTimeout(function () {
                var e = a;
                t.quillJS.deleteText(e, l.length), t.quillJS.insertText(e, s.slice(1, s.length - 1), "link", c.slice(1, c.length - 1)), n(!0);
              }, 0) : n(!1);
            });
          }
        };
      }
    }]) && Xt(e.prototype, n), r && Xt(e, r), i;
  }(u);

  function ie(t) {
    return (ie = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function ae(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function ue(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function le(t, e) {
    return (le = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function se(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = he(t);

      if (e) {
        var o = he(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return ce(this, n);
    };
  }

  function ce(t, e) {
    return !e || "object" !== ie(e) && "function" != typeof e ? fe(t) : e;
  }

  function fe(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function he(t) {
    return (he = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var pe = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && le(t, e);
    }(i, t);
    var e,
        n,
        r,
        o = se(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return ae(this, i), (e = o.call(this)).quillJS = t, e.name = "link", e.pattern = e._getCustomPatternOrDefault(n, e.name, /(?:\[(.+?)\])(?:\((.+?)\))/g), e.getAction.bind(fe(e)), e._meta = Gt(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r) {
            return new Promise(function (o) {
              var i = e.search(r),
                  a = e.match(r)[0],
                  u = e.match(/(?:\[(.*?)\])/g)[0],
                  l = e.match(/(?:\((.*?)\))/g)[0],
                  s = n.index - 1 + i;
              t.activeTags.length && -1 !== i ? setTimeout(function () {
                var e = t.quillJS.getText(s - a.length, a.length) === a ? s - a.length : s;
                t.quillJS.deleteText(e, a.length), t.quillJS.insertText(e, u.slice(1, u.length - 1), "link", l.slice(1, l.length - 1)), o(!0);
              }, 0) : o(!1);
            });
          }
        };
      }
    }]) && ue(e.prototype, n), r && ue(e, r), i;
  }(u),
      de = function de(t) {
    return {
      applyHtmlTags: ["li"].map(function (t) {
        return t.toLowerCase();
      })
    };
  };

  function ye(t) {
    return (ye = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function ve(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return ge(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ge(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function ge(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function be(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function me(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function we(t, e) {
    return (we = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function _e(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = Ee(t);

      if (e) {
        var o = Ee(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return xe(this, n);
    };
  }

  function xe(t, e) {
    return !e || "object" !== ye(e) && "function" != typeof e ? Oe(t) : e;
  }

  function Oe(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function Ee(t) {
    return (Ee = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var Se = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && we(t, e);
    }(i, t);

    var e,
        n,
        r,
        o = _e(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return be(this, i), (e = o.call(this)).quillJS = t, e.name = "li", e.pattern = e._getCustomPatternOrDefault(n, e.name, /^\s{0,9}(\d)+\.\s/g), e.getAction.bind(Oe(e)), e._meta = de(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r) {
            return new Promise(function (o) {
              if (r.exec(e) && t.activeTags.length) {
                var i = ve(t.quillJS.getLine(n.index), 1)[0],
                    a = t.quillJS.getIndex(i);
                setTimeout(function () {
                  var n = e.split(". ")[0].split("").filter(function (t) {
                    return /\s/gi.test(t);
                  }).length,
                      r = e.split(". ").splice(1, 1).join("");
                  t.quillJS.insertText(a, r), t.quillJS.deleteText(a + r.length - 1, e.length), setTimeout(function () {
                    t.quillJS.formatLine(a, 0, {
                      list: "ordered",
                      indent: n
                    }), o(!0);
                  }, 0);
                }, 0);
              } else o(!1);
            });
          }
        };
      }
    }]) && me(e.prototype, n), r && me(e, r), i;
  }(u),
      Ae = function Ae(t) {
    return {
      applyHtmlTags: ["ul"].map(function (t) {
        return t.toLowerCase();
      })
    };
  };

  function Te(t) {
    return (Te = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function ke(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return je(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return je(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function je(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function Pe(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function Ne(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function qe(t, e) {
    return (qe = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function Re(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = Ie(t);

      if (e) {
        var o = Ie(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return Le(this, n);
    };
  }

  function Le(t, e) {
    return !e || "object" !== Te(e) && "function" != typeof e ? Ce(t) : e;
  }

  function Ce(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function Ie(t) {
    return (Ie = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var Me = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && qe(t, e);
    }(i, t);
    var e,
        n,
        r,
        o = Re(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return Pe(this, i), (e = o.call(this)).quillJS = t, e.name = "ul", e.pattern = e._getCustomPatternOrDefault(n, e.name, /^\s{0,9}(-|\*){1}\s/), e.getAction.bind(Ce(e)), e._meta = Ae(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r) {
            return new Promise(function (o) {
              if (r.exec(e) && t.activeTags.length) {
                if (e.split("- ")[1] || e.split("* ")[1]) {
                  var i = ke(t.quillJS.getLine(n.index), 1)[0],
                      a = t.quillJS.getIndex(i);
                  setTimeout(function () {
                    var n = /^\s{0,9}(\*){1}\s/.test(e) ? e.replace("*", "-") : e,
                        r = n.split("- ")[0].split("").filter(function (t) {
                      return /\s/gi.test(t);
                    }).length,
                        i = n.split("- ").length > 1 ? n.split("- ").splice(1, 1).join("") : n;
                    t.quillJS.insertText(a, i), t.quillJS.deleteText(a + i.length - 1, e.length), setTimeout(function () {
                      t.quillJS.formatLine(a, 0, {
                        list: "bullet",
                        indent: r
                      }), o(!0);
                    }, 0);
                  }, 0);
                } else o(!1);
              } else o(!1);
            });
          }
        };
      }
    }]) && Ne(e.prototype, n), r && Ne(e, r), i;
  }(u),
      De = function De(t) {
    return {
      applyHtmlTags: ["pre"].map(function (t) {
        return t.toLowerCase();
      })
    };
  };

  function Be(t) {
    return (Be = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function Ue(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function Fe(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function Je(t, e) {
    return (Je = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function He(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = We(t);

      if (e) {
        var o = We(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return ze(this, n);
    };
  }

  function ze(t, e) {
    return !e || "object" !== Be(e) && "function" != typeof e ? Ye(t) : e;
  }

  function Ye(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function We(t) {
    return (We = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var Ke = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && Je(t, e);
    }(i, t);
    var e,
        n,
        r,
        o = He(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return Ue(this, i), (e = o.call(this)).quillJS = t, e.name = "pre", e.pattern = e._getCustomPatternOrDefault(n, e.name, /^(```).*/g), e.getAction.bind(Ye(e)), e._meta = De(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r) {
            return new Promise(function (o) {
              var i = r.exec(e);

              if (i && t.activeTags.length) {
                var a = i[0] || "";
                setTimeout(function () {
                  var e = n.index - a.length;
                  t.quillJS.deleteText(e, a.length), setTimeout(function () {
                    t.quillJS.insertText(e, "\n");
                    var n = e + 1 + "\n".length + 1;
                    t.quillJS.insertText(n - 1, "\n"), t.quillJS.formatLine(n - 2, 1, "code-block", !0), o(!0);
                  }, 0);
                }, 0);
              } else o(!1);
            });
          },
          release: function release() {
            setTimeout(function () {
              var e = t.quillJS.getSelection().index,
                  n = t.quillJS.getLine(e)[0],
                  r = n.domNode.textContent;
              n && r && r.replace("\n", "").length <= 0 && t.quillJS.format("code-block", !1);
            }, 0);
          }
        };
      }
    }]) && Fe(e.prototype, n), r && Fe(e, r), i;
  }(u);

  function Ve(t) {
    return (Ve = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function Ge(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return Ze(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ze(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function Ze(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function $e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function Xe(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function Qe(t, e) {
    return (Qe = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function tn(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = rn(t);

      if (e) {
        var o = rn(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return en(this, n);
    };
  }

  function en(t, e) {
    return !e || "object" !== Ve(e) && "function" != typeof e ? nn(t) : e;
  }

  function nn(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function rn(t) {
    return (rn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var on = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && Qe(t, e);
    }(i, t);
    var e,
        n,
        r,
        o = tn(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return $e(this, i), (e = o.call(this)).quillJS = t, e.name = "pre", e.pattern = e._getCustomPatternOrDefault(n, e.name, /^(```)/g), e.getAction.bind(nn(e)), e._meta = De(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r) {
            return new Promise(function (o) {
              var i = r.exec(e);

              if (i && t.activeTags.length) {
                var a = i[0] || "",
                    u = Ge(t.quillJS.getLine(n.index), 1)[0];
                setTimeout(function () {
                  var e = t.quillJS.getIndex(u);
                  t.quillJS.deleteText(e, a.length + 1), setTimeout(function () {
                    for (var n = t.quillJS.getLine(e)[0]; n;) {
                      var r = t.quillJS.getIndex(n),
                          i = n.domNode.textContent,
                          a = n.domNode.textContent.length;
                      if (t.pattern.test(i)) return t.quillJS.deleteText(r, i.length), void o(!0);
                      t.quillJS.formatLine(r, 0, "code-block", !0), n = t.quillJS.getLine(r + a + 1)[0];
                    }

                    o(!0);
                  }, 0);
                }, 0);
              } else o(!1);
            });
          },
          release: function release() {
            setTimeout(function () {
              var e = t.quillJS.getSelection().index,
                  n = t.quillJS.getLine(e)[0],
                  r = n.domNode.textContent;
              n && r && r.replace("\n", "").length <= 0 && t.quillJS.format("code-block", !1);
            }, 0);
          }
        };
      }
    }]) && Xe(e.prototype, n), r && Xe(e, r), i;
  }(u),
      an = function an(t) {
    return {
      applyHtmlTags: ["strikethrough"].map(function (t) {
        return t.toLowerCase();
      })
    };
  };

  function un(t) {
    return (un = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function ln(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function sn(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  function cn(t, e) {
    return (cn = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function fn(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = dn(t);

      if (e) {
        var o = dn(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return hn(this, n);
    };
  }

  function hn(t, e) {
    return !e || "object" !== un(e) && "function" != typeof e ? pn(t) : e;
  }

  function pn(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function dn(t) {
    return (dn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var yn = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && cn(t, e);
    }(i, t);
    var e,
        n,
        r,
        o = fn(i);

    function i(t) {
      var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return ln(this, i), (e = o.call(this)).quillJS = t, e.name = "strikethrough", e.pattern = e._getCustomPatternOrDefault(n, e.name, /(?:~|_){2}(.+?)(?:~|_){2}/g), e.getAction.bind(pn(e)), e._meta = an(), e.activeTags = e._getActiveTagsWithoutIgnore(e._meta.applyHtmlTags, n.ignoreTags), e;
    }

    return e = i, (n = [{
      key: "getAction",
      value: function value() {
        var t = this;
        return {
          name: this.name,
          pattern: this.pattern,
          action: function action(e, n, r, o) {
            return new Promise(function (n) {
              var i = r.exec(e);

              if (t.activeTags.length) {
                var a = i[0],
                    u = i[1],
                    l = o + i.index;
                e.match(/^([~_ \n]+)$/g) ? n(!1) : setTimeout(function () {
                  t.quillJS.deleteText(l, a.length), t.quillJS.insertText(l, u, {
                    strike: !0
                  }), t.quillJS.format("strike", !1), n(!0);
                }, 0);
              } else n(!1);
            });
          }
        };
      }
    }]) && sn(e.prototype, n), r && sn(e, r), i;
  }(u);

  function vn(t) {
    return function (t) {
      if (Array.isArray(t)) return gn(t);
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
    }(t) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return gn(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gn(t, e);
    }(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function gn(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function bn(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function mn(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  var wn = function () {
    function t(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        tags: {}
      };
      bn(this, t), this.quillJS = e, this.getOperatorsAll.bind(this), this.supportInlineTags = [new b(this.quillJS, n).getAction(), new P(this.quillJS, n).getAction(), new $(this.quillJS, n).getAction(), new Ke(this.quillJS, n).getAction(), new qt(this.quillJS, n).getAction(), new yn(this.quillJS, n).getAction(), new Vt(this.quillJS, n).getAction(), new oe(this.quillJS, n).getAction()], this.supportfullTextTags = [new b(this.quillJS, n).getAction(), new st(this.quillJS, n).getAction(), new wt(this.quillJS, n).getAction(), new Se(this.quillJS, n).getAction(), new Me(this.quillJS, n).getAction(), new B(this.quillJS, n).getAction(), new on(this.quillJS, n).getAction(), new $(this.quillJS, n).getAction(), new pe(this.quillJS, n).getAction(), new qt(this.quillJS, n).getAction(), new yn(this.quillJS, n).getAction(), new Vt(this.quillJS, n).getAction()], this.tags = vn(this.supportInlineTags), this.fullTextTags = vn(this.supportfullTextTags);
    }

    var e, n, r;
    return e = t, (n = [{
      key: "getOperatorsAll",
      value: function value() {
        return this.tags;
      }
    }, {
      key: "getFullTextOperatorsAll",
      value: function value() {
        return this.fullTextTags;
      }
    }]) && mn(e.prototype, n), r && mn(e, r), t;
  }();

  function _n(t, e) {
    var _n2;

    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
      if (Array.isArray(t) || (_n2 = An(t)) || e && t && "number" == typeof t.length) {
        _n2 && (t = _n2);

        var r = 0,
            o = function o() {};

        return {
          s: o,
          n: function n() {
            return r >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[r++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: o
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var i,
        a = !0,
        u = !1;
    return {
      s: function s() {
        _n2 = t[Symbol.iterator]();
      },
      n: function n() {
        var t = _n2.next();

        return a = t.done, t;
      },
      e: function e(t) {
        u = !0, i = t;
      },
      f: function f() {
        try {
          a || null == _n2.return || _n2.return();
        } finally {
          if (u) throw i;
        }
      }
    };
  }

  function xn(t, e, n, r, o, i, a) {
    try {
      var u = t[i](a),
          l = u.value;
    } catch (t) {
      return void n(t);
    }

    u.done ? e(l) : Promise.resolve(l).then(r, o);
  }

  function On(t) {
    return function () {
      var e = this,
          n = arguments;
      return new Promise(function (r, o) {
        var i = t.apply(e, n);

        function a(t) {
          xn(i, r, o, a, u, "next", t);
        }

        function u(t) {
          xn(i, r, o, a, u, "throw", t);
        }

        a(void 0);
      });
    };
  }

  function En(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || An(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function Sn(t) {
    return function (t) {
      if (Array.isArray(t)) return Tn(t);
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
    }(t) || An(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function An(t, e) {
    if (t) {
      if ("string" == typeof t) return Tn(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tn(t, e) : void 0;
    }
  }

  function Tn(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function kn(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function jn(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  var Pn = function () {
    function t(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      kn(this, t), this.quillJS = e, this.options = n, this.onTextChangeBound = this.onTextChange.bind(this), this.quillJS.on("text-change", this.onTextChangeBound), this.actionCharacters = {
        whiteSpace: " ",
        newLine: "\n",
        asterisk: "*",
        rightParenthesis: ")",
        grave: "`",
        tilde: "~",
        underscore: "_"
      }, this.ignoreTags = ["PRE"].concat(Sn(n.ignoreTags || [])), this.tags = new wn(this.quillJS, n), this.matches = this.tags.getOperatorsAll(), this.fullMatches = this.tags.getFullTextOperatorsAll();
    }

    var e, n, r, o;
    return e = t, (n = [{
      key: "destroy",
      value: function value() {
        this.quillJS.off("text-change", this.onTextChangeBound);
      }
    }, {
      key: "onTextChange",
      value: function value(t, e, n) {
        var r = this;

        if ("user" === n) {
          var o = t.ops[0] && t.ops[0].retain || 0,
              i = t.ops[0].insert || t.ops[1] && t.ops[1].insert,
              a = En(this.quillJS.getLine(o), 1)[0],
              u = t.ops.find(function (t) {
            return t.hasOwnProperty("insert");
          }) || {};
          (t.ops.find(function (t) {
            return t.hasOwnProperty("delete");
          }) || "\n" === u.insert) && a.domNode.textContent.length <= 1 && ["PRE", "BLOCKQUOTE"].includes(a.domNode.tagName) && this.onRemoveElement({
            delete: 1
          }), i && (i.length > 1 ? setTimeout(On(regeneratorRuntime.mark(function e() {
            var n, a, u, l, s, c, f, h, p, d, y, v, g, b, m;
            return regeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    n = o, a = i.split("\n"), u = n, l = _n(a), e.prev = 4, l.s();

                  case 6:
                    if ((s = l.n()).done) {
                      e.next = 35;
                      break;
                    }

                    if (s.value, c = r.quillJS.getLine(u), f = En(c, 1), h = f[0]) {
                      e.next = 11;
                      break;
                    }

                    return e.abrupt("return", 0);

                  case 11:
                    return p = r.quillJS.getIndex(h), d = "", e.next = 15, r.onFullTextExecute.bind(r)({
                      index: p,
                      delta: t,
                      length: 0
                    });

                  case 15:
                    if (!(y = e.sent)) {
                      e.next = 31;
                      break;
                    }

                  case 17:
                    if (!y) {
                      e.next = 29;
                      break;
                    }

                    if (v = r.quillJS.getLine(u), g = En(v, 1), b = g[0], m = r.quillJS.getIndex(b), b && b.domNode) {
                      e.next = 23;
                      break;
                    }

                    return y = !1, e.abrupt("break", 29);

                  case 23:
                    return d = b.domNode.textContent || "", e.next = 26, r.onFullTextExecute.bind(r)({
                      index: m,
                      delta: t,
                      length: 0
                    });

                  case 26:
                    y = e.sent, e.next = 17;
                    break;

                  case 29:
                    e.next = 32;
                    break;

                  case 31:
                    d = h.domNode.textContent || "";

                  case 32:
                    u += d.length + 1;

                  case 33:
                    e.next = 6;
                    break;

                  case 35:
                    e.next = 40;
                    break;

                  case 37:
                    e.prev = 37, e.t0 = e.catch(4), l.e(e.t0);

                  case 40:
                    return e.prev = 40, l.f(), e.finish(40);

                  case 43:
                  case "end":
                    return e.stop();
                }
              }
            }, e, null, [[4, 37, 40, 43]]);
          })), 0) : (t.ops.filter(function (t) {
            return t.hasOwnProperty("insert");
          }).forEach(function (t) {
            switch (t.insert) {
              case r.actionCharacters.whiteSpace:
              case r.actionCharacters.rightParenthesis:
              case r.actionCharacters.asterisk:
              case r.actionCharacters.grave:
              case r.actionCharacters.newLine:
              case r.actionCharacters.tilde:
              case r.actionCharacters.underscore:
                r.onInlineExecute.bind(r)();
            }
          }), t.ops.filter(function (t) {
            return t.hasOwnProperty("delete");
          }).forEach(function (t) {
            r.onRemoveElement(t);
          })));
        }
      }
    }, {
      key: "onInlineExecute",
      value: function value() {
        var t = this.quillJS.getSelection();

        if (t) {
          var e = En(this.quillJS.getLine(t.index), 2),
              n = e[0],
              r = e[1],
              o = n.domNode.textContent,
              i = t.index - r,
              a = this.quillJS.getFormat(i);

          if (!a["code-block"] && !a.code) {
            var u,
                l = _n(this.matches);

            try {
              for (l.s(); !(u = l.n()).done;) {
                var s = u.value;
                if ("function" == typeof s.pattern ? s.pattern(o) : o.match(s.pattern)) return void s.action(o, t, s.pattern, i);
              }
            } catch (t) {
              l.e(t);
            } finally {
              l.f();
            }
          }
        }
      }
    }, {
      key: "onFullTextExecute",
      value: (o = On(regeneratorRuntime.mark(function t(e) {
        var n, r, o, i, a, u, l, s, c, f, h, p, d, y, v, g, b, m;
        return regeneratorRuntime.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                if (n = e || this.quillJS.getSelection(), r = e.delta, n) {
                  t.next = 4;
                  break;
                }

                return t.abrupt("return", !1);

              case 4:
                if (o = this.quillJS.getLine(n.index), i = En(o, 2), a = i[0], u = i[1], a && !(u < 0)) {
                  t.next = 7;
                  break;
                }

                return t.abrupt("return", !1);

              case 7:
                if (l = r && r.ops && r.ops[0].retain || 0, s = n.index - u, c = l ? l - 1 : s, !(f = this.quillJS.getFormat(c))["code-block"] && !f.code) {
                  t.next = 14;
                  break;
                }

                return f.code && (h = r.ops.filter(function (t) {
                  return t.insert;
                }).map(function (t) {
                  return t.insert;
                }).join(""), this.quillJS.deleteText(l, h.length), this.quillJS.insertText(l, h.replace(/\n/g, ""), {
                  code: !0
                }), this.quillJS.format("code", !1)), t.abrupt("return", !1);

              case 14:
                if (p = this.quillJS.getLine(s - 1)[0], d = p && p.domNode.textContent, y = a.domNode.textContent + " ", n.length = n.index++, !("string" == typeof d && d.length > 0 && " " === y)) {
                  t.next = 23;
                  break;
                }

                if (!(v = this.fullMatches.find(function (t) {
                  return t.name === a.domNode.tagName.toLowerCase();
                })) || !v.release) {
                  t.next = 23;
                  break;
                }

                return v.release(n), t.abrupt("return", !1);

              case 23:
                g = _n(this.fullMatches), t.prev = 24, g.s();

              case 26:
                if ((b = g.n()).done) {
                  t.next = 35;
                  break;
                }

                if (!("function" == typeof (m = b.value).pattern ? m.pattern(y) : y.match(m.pattern))) {
                  t.next = 33;
                  break;
                }

                return t.next = 32, m.action(y, n, m.pattern, s);

              case 32:
                return t.abrupt("return", t.sent);

              case 33:
                t.next = 26;
                break;

              case 35:
                t.next = 40;
                break;

              case 37:
                t.prev = 37, t.t0 = t.catch(24), g.e(t.t0);

              case 40:
                return t.prev = 40, g.f(), t.finish(40);

              case 43:
                return t.abrupt("return", !1);

              case 44:
              case "end":
                return t.stop();
            }
          }
        }, t, this, [[24, 37, 40, 43]]);
      })), function (t) {
        return o.apply(this, arguments);
      })
    }, {
      key: "onRemoveElement",
      value: function value(t) {
        var e = this.quillJS.getSelection();

        if (t && 1 === t.delete) {
          var n = this.quillJS.getLine(e.index)[0],
              r = this.matches.find(function (t) {
            return t.name === n.domNode.tagName.toLowerCase();
          });
          r && r.release && r.release(e);
        }
      }
    }]) && jn(e.prototype, n), r && jn(e, r), t;
  }(),
      Nn = {
    theme: "snow",
    modules: {
      toolbar: [["bold", "italic", "underline", "strike"], ["link", "image"]]
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    var t = new o.a("#editor", Nn);
    new Pn(t);
  });
}]);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49699" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","bundle/demojs.js"], null)
//# sourceMappingURL=/demojs.62ca54a7.js.map