"use strict";

function _array_like_to_array(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function _assert_this_initialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function asyncGeneratorStep(e, t, n, r, o, a, i) {
    try {
        var s = e[a](i),
            c = s.value
    } catch (e) {
        return void n(e)
    }
    s.done ? t(c) : Promise.resolve(c).then(r, o)
}

function _async_to_generator(e) {
    return function() {
        var t = this,
            n = arguments;
        return new Promise(function(r, o) {
            var a = e.apply(t, n);

            function i(e) {
                asyncGeneratorStep(a, r, o, i, s, "next", e)
            }

            function s(e) {
                asyncGeneratorStep(a, r, o, i, s, "throw", e)
            }
            i(void 0)
        })
    }
}

function _call_super(e, t, n) {
    return t = _get_prototype_of(t), _possible_constructor_return(e, _is_native_reflect_construct() ? Reflect.construct(t, n || [], _get_prototype_of(e).constructor) : t.apply(e, n))
}

function _class_call_check(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _construct(e, t, n) {
    return _construct = _is_native_reflect_construct() ? Reflect.construct : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var o = new(Function.bind.apply(e, r));
        return n && _set_prototype_of(o, n.prototype), o
    }, _construct.apply(null, arguments)
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _create_class(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _define_property(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _get_prototype_of(e) {
    return _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }, _get_prototype_of(e)
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _set_prototype_of(e, t)
}

function _instanceof(e, t) {
    return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
}

function _is_native_function(e) {
    return -1 !== Function.toString.call(e).indexOf("[native code]")
}

function _iterable_to_array(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _iterable_to_array_limit(e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var r, o, a = [],
            i = !0,
            s = !1;
        try {
            for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
        } catch (e) {
            s = !0, o = e
        } finally {
            try {
                i || null == n.return || n.return()
            } finally {
                if (s) throw o
            }
        }
        return a
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _object_spread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            _define_property(e, t, n[t])
        })
    }
    return e
}

function ownKeys(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function _object_spread_props(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function _object_without_properties(e, t) {
    if (null == e) return {};
    var n, r, o = _object_without_properties_loose(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
}

function _object_without_properties_loose(e, t) {
    if (null == e) return {};
    var n, r, o = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
}

function _possible_constructor_return(e, t) {
    return !t || "object" !== _type_of(t) && "function" != typeof t ? _assert_this_initialized(e) : t
}

function _set_prototype_of(e, t) {
    return _set_prototype_of = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    }, _set_prototype_of(e, t)
}

function _sliced_to_array(e, t) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, t) || _unsupported_iterable_to_array(e, t) || _non_iterable_rest()
}

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
}

function _type_of(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}

function _unsupported_iterable_to_array(e, t) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _array_like_to_array(e, t) : void 0
    }
}

function _wrap_native_super(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return _wrap_native_super = function(e) {
        if (null === e || !_is_native_function(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
        }

        function n() {
            return _construct(e, arguments, _get_prototype_of(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), _set_prototype_of(n, e)
    }, _wrap_native_super(e)
}

function _is_native_reflect_construct() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch (e) {}
    return (_is_native_reflect_construct = function() {
        return !!e
    })()
}

function _ts_generator(e, t) {
    var n, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return i.next = s(0), i.throw = s(1), i.return = s(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this
    }), i;

    function s(s) {
        return function(c) {
            return function(s) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i && (i = 0, s[0] && (a = 0)), a;) try {
                    if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;
                    switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                        case 0:
                        case 1:
                            o = s;
                            break;
                        case 4:
                            return a.label++, {
                                value: s[1],
                                done: !1
                            };
                        case 5:
                            a.label++, r = s[1], s = [0];
                            continue;
                        case 7:
                            s = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                a.label = s[1];
                                break
                            }
                            if (6 === s[0] && a.label < o[1]) {
                                a.label = o[1], o = s;
                                break
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2], a.ops.push(s);
                                break
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    s = t.call(e, a)
                } catch (e) {
                    s = [6, e], r = 0
                } finally {
                    n = o = 0
                }
                if (5 & s[0]) throw s[1];
                return {
                    value: s[0] ? s[1] : void 0,
                    done: !0
                }
            }([s, c])
        }
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7163], {
        57163: function(e, t, n) {
            var r, o, a, i = n(90379),
                s = n(5164),
                c = n(76581),
                u = n(97218),
                l = n(77434),
                d = n(79323),
                f = n(27434),
                p = n(36350),
                _ = n(32930),
                v = n(36839),
                m = n(54230),
                h = n(5067),
                b = n(70437),
                y = n(55253),
                g = n(76303),
                w = n(56855),
                C = n(77417),
                E = n(65074),
                S = n(92034),
                T = n(34087),
                j = n(1103),
                x = n(26246),
                N = n(59318),
                I = n(81174),
                k = n(31445),
                O = n(49517);

            function L(e) {
                return e && "object" == (void 0 === e ? "undefined" : _type_of(e)) && "default" in e ? e : {
                    default: e
                }
            }
            var U = L(u),
                A = L(l),
                R = L(m),
                P = L(b),
                M = L(y),
                F = L(g),
                B = L(w),
                D = L(C),
                X = L(E),
                z = L(S),
                G = L(T),
                W = L(j),
                H = L(N),
                V = L(I),
                q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};

            function Y(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }
            var K, J, Q = function(e) {
                    return e && e.Math === Math && e
                },
                $ = Q("object" == ("undefined" == typeof globalThis ? "undefined" : _type_of(globalThis)) && globalThis) || Q("object" == ("undefined" == typeof window ? "undefined" : _type_of(window)) && window) || Q("object" == ("undefined" == typeof self ? "undefined" : _type_of(self)) && self) || Q("object" == (void 0 === q ? "undefined" : _type_of(q)) && q) || Q("object" == (void 0 === q ? "undefined" : _type_of(q)) && q) || function() {
                    return this
                }() || Function("return this")(),
                Z = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                },
                ee = !Z(function() {
                    return 7 !== Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                }),
                te = !Z(function() {
                    var e = function() {}.bind();
                    return "function" != typeof e || e.hasOwnProperty("prototype")
                }),
                ne = Function.prototype.call,
                re = te ? ne.bind(ne) : function() {
                    return ne.apply(ne, arguments)
                },
                oe = {}.propertyIsEnumerable,
                ae = Object.getOwnPropertyDescriptor,
                ie = {
                    f: ae && !oe.call({
                        1: 2
                    }, 1) ? function(e) {
                        var t = ae(this, e);
                        return !!t && t.enumerable
                    } : oe
                },
                se = function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                },
                ce = Function.prototype,
                ue = ce.call,
                le = te && ce.bind.bind(ue, ue),
                de = te ? le : function(e) {
                    return function() {
                        return ue.apply(e, arguments)
                    }
                },
                fe = de({}.toString),
                pe = de("".slice),
                _e = function(e) {
                    return pe(fe(e), 8, -1)
                },
                ve = Object,
                me = de("".split),
                he = Z(function() {
                    return !ve("z").propertyIsEnumerable(0)
                }) ? function(e) {
                    return "String" === _e(e) ? me(e, "") : ve(e)
                } : ve,
                be = function(e) {
                    return null == e
                },
                ye = TypeError,
                ge = function(e) {
                    if (be(e)) throw new ye("Can't call method on " + e);
                    return e
                },
                we = function(e) {
                    return he(ge(e))
                },
                Ce = "object" == ("undefined" == typeof document ? "undefined" : _type_of(document)) && document.all,
                Ee = void 0 === Ce && void 0 !== Ce ? function(e) {
                    return "function" == typeof e || e === Ce
                } : function(e) {
                    return "function" == typeof e
                },
                Se = function(e) {
                    return "object" == (void 0 === e ? "undefined" : _type_of(e)) ? null !== e : Ee(e)
                },
                Te = function(e, t) {
                    var n;
                    return arguments.length < 2 ? Ee(n = $[e]) ? n : void 0 : $[e] && $[e][t]
                },
                je = de({}.isPrototypeOf),
                xe = $.navigator,
                Ne = xe && xe.userAgent,
                Ie = Ne ? String(Ne) : "",
                ke = $.process,
                Oe = $.Deno,
                Le = ke && ke.versions || Oe && Oe.version,
                Ue = Le && Le.v8;
            Ue && (J = (K = Ue.split("."))[0] > 0 && K[0] < 4 ? 1 : +(K[0] + K[1])), !J && Ie && (!(K = Ie.match(/Edge\/(\d+)/)) || K[1] >= 74) && (K = Ie.match(/Chrome\/(\d+)/)) && (J = +K[1]);
            var Ae = J,
                Re = $.String,
                Pe = !!Object.getOwnPropertySymbols && !Z(function() {
                    var e = Symbol("symbol detection");
                    return !Re(e) || !_instanceof(Object(e), Symbol) || !Symbol.sham && Ae && Ae < 41
                }),
                Me = Pe && !Symbol.sham && "symbol" == _type_of(Symbol.iterator),
                Fe = Object,
                Be = Me ? function(e) {
                    return "symbol" == (void 0 === e ? "undefined" : _type_of(e))
                } : function(e) {
                    var t = Te("Symbol");
                    return Ee(t) && je(t.prototype, Fe(e))
                },
                De = String,
                Xe = TypeError,
                ze = function(e) {
                    if (Ee(e)) return e;
                    throw new Xe(function(e) {
                        try {
                            return De(e)
                        } catch (e) {
                            return "Object"
                        }
                    }(e) + " is not a function")
                },
                Ge = TypeError,
                We = Object.defineProperty,
                He = function(e, t) {
                    try {
                        We($, e, {
                            value: t,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (n) {
                        $[e] = t
                    }
                    return t
                },
                Ve = Y(function(e) {
                    var t = "__core-js_shared__",
                        n = e.exports = $[t] || He(t, {});
                    (n.versions || (n.versions = [])).push({
                        version: "3.41.0",
                        mode: "global",
                        copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
                        license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
                        source: "https://github.com/zloirock/core-js"
                    })
                }),
                qe = function(e, t) {
                    return Ve[e] || (Ve[e] = t || {})
                },
                Ye = Object,
                Ke = function(e) {
                    return Ye(ge(e))
                },
                Je = de({}.hasOwnProperty),
                Qe = Object.hasOwn || function(e, t) {
                    return Je(Ke(e), t)
                },
                $e = 0,
                Ze = Math.random(),
                et = de(1..toString),
                tt = function(e) {
                    return "Symbol(" + (void 0 === e ? "" : e) + ")_" + et(++$e + Ze, 36)
                },
                nt = $.Symbol,
                rt = qe("wks"),
                ot = Me ? nt.for || nt : nt && nt.withoutSetter || tt,
                at = function(e) {
                    return Qe(rt, e) || (rt[e] = Pe && Qe(nt, e) ? nt[e] : ot("Symbol." + e)), rt[e]
                },
                it = TypeError,
                st = at("toPrimitive"),
                ct = function(e) {
                    var t = function(e, t) {
                        if (!Se(e) || Be(e)) return e;
                        var n, r, o = be(n = e[st]) ? void 0 : ze(n);
                        if (o) {
                            if (void 0 === t && (t = "default"), !Se(r = re(o, e, t)) || Be(r)) return r;
                            throw new it("Can't convert object to primitive value")
                        }
                        return void 0 === t && (t = "number"),
                            function(e, t) {
                                var n, r;
                                if ("string" === t && Ee(n = e.toString) && !Se(r = re(n, e)) || Ee(n = e.valueOf) && !Se(r = re(n, e)) || "string" !== t && Ee(n = e.toString) && !Se(r = re(n, e))) return r;
                                throw new Ge("Can't convert object to primitive value")
                            }(e, t)
                    }(e, "string");
                    return Be(t) ? t : t + ""
                },
                ut = $.document,
                lt = Se(ut) && Se(ut.createElement),
                dt = function(e) {
                    return lt ? ut.createElement(e) : {}
                },
                ft = !ee && !Z(function() {
                    return 7 !== Object.defineProperty(dt("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }),
                pt = Object.getOwnPropertyDescriptor,
                _t = {
                    f: ee ? pt : function(e, t) {
                        if (e = we(e), t = ct(t), ft) try {
                            return pt(e, t)
                        } catch (e) {}
                        if (Qe(e, t)) return se(!re(ie.f, e, t), e[t])
                    }
                },
                vt = ee && Z(function() {
                    return 42 !== Object.defineProperty(function() {}, "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype
                }),
                mt = String,
                ht = TypeError,
                bt = function(e) {
                    if (Se(e)) return e;
                    throw new ht(mt(e) + " is not an object")
                },
                yt = TypeError,
                gt = Object.defineProperty,
                wt = Object.getOwnPropertyDescriptor,
                Ct = "enumerable",
                Et = "configurable",
                St = "writable",
                Tt = {
                    f: ee ? vt ? function(e, t, n) {
                        if (bt(e), t = ct(t), bt(n), "function" == typeof e && "prototype" === t && "value" in n && St in n && !n[St]) {
                            var r = wt(e, t);
                            r && r[St] && (e[t] = n.value, n = {
                                configurable: Et in n ? n[Et] : r[Et],
                                enumerable: Ct in n ? n[Ct] : r[Ct],
                                writable: !1
                            })
                        }
                        return gt(e, t, n)
                    } : gt : function(e, t, n) {
                        if (bt(e), t = ct(t), bt(n), ft) try {
                            return gt(e, t, n)
                        } catch (e) {}
                        if ("get" in n || "set" in n) throw new yt("Accessors not supported");
                        return "value" in n && (e[t] = n.value), e
                    }
                },
                jt = ee ? function(e, t, n) {
                    return Tt.f(e, t, se(1, n))
                } : function(e, t, n) {
                    return e[t] = n, e
                },
                xt = Function.prototype,
                Nt = ee && Object.getOwnPropertyDescriptor,
                It = Qe(xt, "name"),
                kt = {
                    EXISTS: It,
                    PROPER: It && "something" === function() {}.name,
                    CONFIGURABLE: It && (!ee || ee && Nt(xt, "name").configurable)
                },
                Ot = de(Function.toString);
            Ee(Ve.inspectSource) || (Ve.inspectSource = function(e) {
                return Ot(e)
            });
            var Lt, Ut, At, Rt = Ve.inspectSource,
                Pt = $.WeakMap,
                Mt = Ee(Pt) && /native code/.test(String(Pt)),
                Ft = qe("keys"),
                Bt = function(e) {
                    return Ft[e] || (Ft[e] = tt(e))
                },
                Dt = {},
                Xt = "Object already initialized",
                zt = $.TypeError,
                Gt = $.WeakMap;
            if (Mt || Ve.state) {
                var Wt = Ve.state || (Ve.state = new Gt);
                Wt.get = Wt.get, Wt.has = Wt.has, Wt.set = Wt.set, Lt = function(e, t) {
                    if (Wt.has(e)) throw new zt(Xt);
                    return t.facade = e, Wt.set(e, t), t
                }, Ut = function(e) {
                    return Wt.get(e) || {}
                }, At = function(e) {
                    return Wt.has(e)
                }
            } else {
                var Ht = Bt("state");
                Dt[Ht] = !0, Lt = function(e, t) {
                    if (Qe(e, Ht)) throw new zt(Xt);
                    return t.facade = e, jt(e, Ht, t), t
                }, Ut = function(e) {
                    return Qe(e, Ht) ? e[Ht] : {}
                }, At = function(e) {
                    return Qe(e, Ht)
                }
            }
            var Vt, qt = {
                    get: Ut,
                    enforce: function(e) {
                        return At(e) ? Ut(e) : Lt(e, {})
                    }
                },
                Yt = Y(function(e) {
                    var t = kt.CONFIGURABLE,
                        n = qt.enforce,
                        r = qt.get,
                        o = String,
                        a = Object.defineProperty,
                        i = de("".slice),
                        s = de("".replace),
                        c = de([].join),
                        u = ee && !Z(function() {
                            return 8 !== a(function() {}, "length", {
                                value: 8
                            }).length
                        }),
                        l = String(String).split("String"),
                        d = e.exports = function(e, r, d) {
                            "Symbol(" === i(o(r), 0, 7) && (r = "[" + s(o(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), d && d.getter && (r = "get " + r), d && d.setter && (r = "set " + r), (!Qe(e, "name") || t && e.name !== r) && (ee ? a(e, "name", {
                                value: r,
                                configurable: !0
                            }) : e.name = r), u && d && Qe(d, "arity") && e.length !== d.arity && a(e, "length", {
                                value: d.arity
                            });
                            try {
                                d && Qe(d, "constructor") && d.constructor ? ee && a(e, "prototype", {
                                    writable: !1
                                }) : e.prototype && (e.prototype = void 0)
                            } catch (e) {}
                            var f = n(e);
                            return Qe(f, "source") || (f.source = c(l, "string" == typeof r ? r : "")), e
                        };
                    Function.prototype.toString = d(function() {
                        return Ee(this) && r(this).source || Rt(this)
                    }, "toString")
                }),
                Kt = function(e, t, n, r) {
                    r || (r = {});
                    var o = r.enumerable,
                        a = void 0 !== r.name ? r.name : t;
                    if (Ee(n) && Yt(n, a, r), r.global) o ? e[t] = n : He(t, n);
                    else {
                        try {
                            r.unsafe ? e[t] && (o = !0) : delete e[t]
                        } catch (e) {}
                        o ? e[t] = n : Tt.f(e, t, {
                            value: n,
                            enumerable: !1,
                            configurable: !r.nonConfigurable,
                            writable: !r.nonWritable
                        })
                    }
                    return e
                },
                Jt = Math.ceil,
                Qt = Math.floor,
                $t = Math.trunc || function(e) {
                    var t = +e;
                    return (t > 0 ? Qt : Jt)(t)
                },
                Zt = function(e) {
                    var t = +e;
                    return t != t || 0 === t ? 0 : $t(t)
                },
                en = Math.max,
                tn = Math.min,
                nn = Math.min,
                rn = function(e) {
                    var t;
                    return (t = Zt(e.length)) > 0 ? nn(t, 9007199254740991) : 0
                },
                on = function(e) {
                    return function(t, n, r) {
                        var o = we(t),
                            a = rn(o);
                        if (0 === a) return !e && -1;
                        var i, s, c = (i = Zt(r)) < 0 ? en(i + a, 0) : tn(i, a);
                        if (e && n != n) {
                            for (; a > c;)
                                if ((s = o[c++]) != s) return !0
                        } else
                            for (; a > c; c++)
                                if ((e || c in o) && o[c] === n) return e || c || 0;
                        return !e && -1
                    }
                },
                an = (on(!0), on(!1)),
                sn = de([].push),
                cn = function(e, t) {
                    var n, r = we(e),
                        o = 0,
                        a = [];
                    for (n in r) !Qe(Dt, n) && Qe(r, n) && sn(a, n);
                    for (; t.length > o;) Qe(r, n = t[o++]) && (~an(a, n) || sn(a, n));
                    return a
                },
                un = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                ln = un.concat("length", "prototype"),
                dn = {
                    f: Object.getOwnPropertyNames || function(e) {
                        return cn(e, ln)
                    }
                },
                fn = {
                    f: Object.getOwnPropertySymbols
                },
                pn = de([].concat),
                _n = Te("Reflect", "ownKeys") || function(e) {
                    var t = dn.f(bt(e)),
                        n = fn.f;
                    return n ? pn(t, n(e)) : t
                },
                vn = function(e, t, n) {
                    for (var r = _n(t), o = Tt.f, a = _t.f, i = 0; i < r.length; i++) {
                        var s = r[i];
                        Qe(e, s) || n && Qe(n, s) || o(e, s, a(t, s))
                    }
                },
                mn = /#|\.prototype\./,
                hn = function(e, t) {
                    var n = yn[bn(e)];
                    return n === wn || n !== gn && (Ee(t) ? Z(t) : !!t)
                },
                bn = hn.normalize = function(e) {
                    return String(e).replace(mn, ".").toLowerCase()
                },
                yn = hn.data = {},
                gn = hn.NATIVE = "N",
                wn = hn.POLYFILL = "P",
                Cn = _t.f,
                En = function(e, t) {
                    var n, r, o, a, i, s = e.target,
                        c = e.global,
                        u = e.stat;
                    if (n = c ? $ : u ? $[s] || He(s, {}) : $[s] && $[s].prototype)
                        for (r in t) {
                            if (a = t[r], o = e.dontCallGetSet ? (i = Cn(n, r)) && i.value : n[r], !hn(c ? r : s + (u ? "." : "#") + r, e.forced) && void 0 !== o) {
                                if ((void 0 === a ? "undefined" : _type_of(a)) == (void 0 === o ? "undefined" : _type_of(o))) continue;
                                vn(a, o)
                            }(e.sham || o && o.sham) && jt(a, "sham", !0), Kt(n, r, a, e)
                        }
                },
                Sn = Object.keys || function(e) {
                    return cn(e, un)
                },
                Tn = {
                    f: ee && !vt ? Object.defineProperties : function(e, t) {
                        bt(e);
                        for (var n, r = we(t), o = Sn(t), a = o.length, i = 0; a > i;) Tt.f(e, n = o[i++], r[n]);
                        return e
                    }
                },
                jn = Te("document", "documentElement"),
                xn = "prototype",
                Nn = "script",
                In = Bt("IE_PROTO"),
                kn = function() {},
                On = function(e) {
                    return "<" + Nn + ">" + e + "</" + Nn + ">"
                },
                Ln = function(e) {
                    e.write(On("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                },
                Un = function() {
                    try {
                        Vt = new ActiveXObject("htmlfile")
                    } catch (e) {}
                    Un = "undefined" != typeof document ? document.domain && Vt ? Ln(Vt) : ((t = dt("iframe")).style.display = "none", jn.appendChild(t), t.src = String("java" + Nn + ":"), (e = t.contentWindow.document).open(), e.write(On("document.F=Object")), e.close(), e.F) : Ln(Vt);
                    for (var e, t, n = un.length; n--;) delete Un[xn][un[n]];
                    return Un()
                };
            Dt[In] = !0;
            var An = Object.create || function(e, t) {
                    var n;
                    return null !== e ? (kn[xn] = bt(e), n = new kn, kn[xn] = null, n[In] = e) : n = Un(), void 0 === t ? n : Tn.f(n, t)
                },
                Rn = Tt.f,
                Pn = at("unscopables"),
                Mn = Array.prototype;
            void 0 === Mn[Pn] && Rn(Mn, Pn, {
                configurable: !0,
                value: An(null)
            });
            var Fn = function(e) {
                Mn[Pn][e] = !0
            };
            En({
                target: "Array",
                proto: !0
            }, {
                at: function(e) {
                    var t = Ke(this),
                        n = rn(t),
                        r = Zt(e),
                        o = r >= 0 ? r : n + r;
                    return o < 0 || o >= n ? void 0 : t[o]
                }
            }), Fn("at");
            var Bn = function(e, t) {
                return de($[e].prototype[t])
            };
            Bn("Array", "at");
            var Dn = function(e) {
                    if ("Function" === _e(e)) return de(e)
                },
                Xn = Dn(Dn.bind),
                zn = Array.isArray || function(e) {
                    return "Array" === _e(e)
                },
                Gn = {};
            Gn[at("toStringTag")] = "z";
            var Wn = "[object z]" === String(Gn),
                Hn = at("toStringTag"),
                Vn = Object,
                qn = "Arguments" === _e(function() {
                    return arguments
                }()),
                Yn = Wn ? _e : function(e) {
                    var t, n, r;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                        try {
                            return e[t]
                        } catch (e) {}
                    }(t = Vn(e), Hn)) ? n : qn ? _e(t) : "Object" === (r = _e(t)) && Ee(t.callee) ? "Arguments" : r
                },
                Kn = function() {},
                Jn = Te("Reflect", "construct"),
                Qn = /^\s*(?:class|function)\b/,
                $n = de(Qn.exec),
                Zn = !Qn.test(Kn),
                er = function(e) {
                    if (!Ee(e)) return !1;
                    try {
                        return Jn(Kn, [], e), !0
                    } catch (e) {
                        return !1
                    }
                },
                tr = function(e) {
                    if (!Ee(e)) return !1;
                    switch (Yn(e)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return Zn || !!$n(Qn, Rt(e))
                    } catch (e) {
                        return !0
                    }
                };
            tr.sham = !0;
            var nr = !Jn || Z(function() {
                    var e;
                    return er(er.call) || !er(Object) || !er(function() {
                        e = !0
                    }) || e
                }) ? tr : er,
                rr = at("species"),
                or = Array,
                ar = function(e, t) {
                    var n;
                    return new(zn(e) && (nr(n = e.constructor) && (n === or || zn(n.prototype)) || Se(n) && null === (n = n[rr])) && (n = void 0), void 0 === n ? or : n)(0 === t ? 0 : t)
                },
                ir = de([].push),
                sr = function(e) {
                    var t = 1 === e,
                        n = 2 === e,
                        r = 3 === e,
                        o = 4 === e,
                        a = 6 === e,
                        i = 7 === e,
                        s = 5 === e || a;
                    return function(c, u, l, d) {
                        for (var f, p, _ = Ke(c), v = he(_), m = rn(v), h = (ze(u), void 0 === l ? u : te ? Xn(u, l) : function() {
                                return u.apply(l, arguments)
                            }), b = 0, y = d || ar, g = t ? y(c, m) : n || i ? y(c, 0) : void 0; m > b; b++)
                            if ((s || b in v) && (p = h(f = v[b], b, _), e))
                                if (t) g[b] = p;
                                else if (p) switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return f;
                            case 6:
                                return b;
                            case 2:
                                ir(g, f)
                        } else switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                ir(g, f)
                        }
                        return a ? -1 : r || o ? o : g
                    }
                },
                cr = [sr(0), sr(1), sr(2), sr(3), sr(4), sr(5), sr(6), sr(7)][6],
                ur = "findIndex",
                lr = !0;
            ur in [] && [, ][ur](function() {
                    lr = !1
                }), En({
                    target: "Array",
                    proto: !0,
                    forced: lr
                }, {
                    findIndex: function(e) {
                        return cr(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), Fn(ur), Bn("Array", "findIndex"),
                function() {
                    if ("undefined" != typeof window && void 0 === n) {
                        var e = window,
                            t = [];
                        n.prototype = {
                            get name() {
                                return this._name
                            },
                            postMessage: function(n) {
                                var r, o, a = this;
                                if (this._closed) {
                                    var i = Error();
                                    throw i.name = "InvalidStateError", i
                                }
                                var s = JSON.stringify(n),
                                    c = this._id + String(Date.now()) + "$" + String(Math.random());
                                null == e || null === (o = e.localStorage) || void 0 === o || null === (r = o.setItem) || void 0 === r || r.call(o, c, s), setTimeout(function() {
                                    var t, n;
                                    null == e || null === (n = e.localStorage) || void 0 === n || null === (t = n.removeItem) || void 0 === t || t.call(n, c)
                                }, 500), t[this._id].forEach(function(e) {
                                    e !== a && e._mc.port2.postMessage(JSON.parse(s))
                                })
                            },
                            close: function() {
                                if (!this._closed) {
                                    this._closed = !0, this._mc.port1.close(), this._mc.port2.close();
                                    var e = t[this._id].indexOf(this);
                                    t[this._id].splice(e, 1)
                                }
                            },
                            get onmessage() {
                                return this._mc.port1.onmessage
                            },
                            set onmessage(e) {
                                this._mc.port1.onmessage = e
                            },
                            addEventListener: function(e, t) {
                                return this._mc.port1.addEventListener.apply(this._mc.port1, arguments)
                            },
                            removeEventListener: function(e, t) {
                                return this._mc.port1.removeEventListener.apply(this._mc.port1, arguments)
                            },
                            dispatchEvent: function(e) {
                                return this._mc.port1.dispatchEvent.apply(this._mc.port1, arguments)
                            }
                        }, e.BroadcastChannel = e.BroadcastChannel || n
                    }

                    function n(n) {
                        var r = this,
                            o = "$BroadcastChannel$" + (n = String(n)) + "$";
                        t[o] = t[o] || [], t[o].push(this), this._name = n, this._id = o, this._closed = !1, this._mc = new MessageChannel, this._mc.port1.start(), this._mc.port2.start(), e.addEventListener("storage", function(t) {
                            if (t.storageArea === (null == e ? void 0 : e.localStorage) && null !== t.newValue && t.key.substring(0, o.length) === o) {
                                var n = JSON.parse(t.newValue);
                                r._mc.port2.postMessage(n)
                            }
                        })
                    }
                }();
            var dr = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return c.useQuery(e, t, n)
                },
                fr = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return c.useMutation(e, t)
                },
                pr = void 0 === i ? {} : i.env,
                _r = {
                    CLIENT_ID: 11,
                    baseUrl: pr.NEXT_PUBLIC_BASE_URL || "https://basalam.com",
                    coreUrl: pr.NEXT_PUBLIC_CORE_URL || "https://core.basalam.com",
                    authUrl: pr.NEXT_PUBLIC_AUTH_URL || "https://auth.basalam.com",
                    listUrl: pr.NEXT_PUBLIC_LIST_URL || "https://list.basalam.com",
                    liveUrl: pr.NEXT_PUBLIC_LIVE_URL || "https://live.basalam.com",
                    appsUrl: pr.NEXT_PUBLIC_APPS_URL || "https://apps.basalam.com",
                    storyUrl: pr.NEXT_PUBLIC_STORY_URL || "https://story.basalam.com",
                    orderUrl: pr.NEXT_PUBLIC_ORDER_URL || "https://order.basalam.com",
                    gamesUrl: pr.NEXT_PUBLIC_GAMES_URL || "https://games.basalam.com",
                    statsUrl: pr.NEXT_PUBLIC_STATS_URL || "https://stats.basalam.com",
                    badgeUrl: pr.NEXT_PUBLIC_BADGE_URL || "https://badge.basalam.com",
                    chatUrl: pr.NEXT_PUBLIC_BASE_CHAT_URL || "https://chat.basalam.com",
                    walletUrl: pr.NEXT_PUBLIC_WALLET_URL || "https://wallet.basalam.com",
                    reportUrl: pr.NEXT_PUBLIC_REPORT_URL || "https://report.basalam.com",
                    reviewUrl: pr.NEXT_PUBLIC_REVIEW_URL || "https://review.basalam.com",
                    searchUrl: pr.NEXT_PUBLIC_SEARCH_URL || "https://search.basalam.com",
                    lotteryUrl: pr.NEXT_PUBLIC_LOTTERY_URL || "https://lottery.basalam.com",
                    staticsUrl: pr.NEXT_PUBLIC_STATICS_URL || "https://statics.basalam.com",
                    graphqlUrl: pr.NEXT_PUBLIC_GRAPHQL_URL || "https://api.basalam.com/user",
                    appsApiUrl: pr.NEXT_PUBLIC_APPS_API_URL || "https://apps-api.basalam.com",
                    activityUrl: pr.NEXT_PUBLIC_ACTIVITY_URL || "https://activity.basalam.com",
                    kashkoolUrl: pr.NEXT_PUBLIC_KASHKOOL_URL || "https://kashkool.basalam.com",
                    feedbackUrl: pr.NEXT_PUBLIC_FEEDBACK_URL || "https://feedback.basalam.com",
                    uploadioUrl: pr.NEXT_PUBLIC_UPLOADIO_URL || "https://uploadio.basalam.com",
                    exploreUrl: pr.NEXT_PUBLIC_EXPLORE_URL || "https://api.basalam.com/explore",
                    WebsocketUrl: pr.NEXT_PUBLIC_CENTRIFUGO_WS_URL || "wss://wsocket.basalam.com",
                    uploadUrl: pr.NEXT_PUBLIC_UPLOAD_URL || "https://api.basalam.com/file/upload",
                    discoveryUrl: pr.NEXT_PUBLIC_DISCOVERY_URL || "https://discovery.basalam.com",
                    logisticUrl: pr.NEXT_PUBLIC_LOGISTIC_URL || "https://logistic.basalam.com/v1",
                    aggregator: pr.NEXT_PUBLIC_AGGREGATOR_URL || "https://aggregator.basalam.com",
                    voucherServiceUrl: pr.NEXT_PUBLIC_VOCHER_URL || "https://voucher.basalam.com",
                    automationUrl: pr.NEXT_PUBLIC_AUTOMATION_URL || "https://automation.basalam.com",
                    khabarchinUrl: pr.NEXT_PUBLIC_KHABARCHIN_URL || "https://khabarchin.basalam.com",
                    scoreUrl: pr.NEXT_PUBLIC_SCORE_URL || "https://score-system.basalam.com/api_v1.0",
                    featureFlagUrl: pr.NEXT_PUBLIC_FEATURE_FLAG || "https://feature-flag.basalam.com",
                    growthbookApiKey: pr.NEXT_PUBLIC_GROWTHBOOK_API_KEY || "key_web__08438f21d1f29e31",
                    conversation: pr.NEXT_PUBLIC_NEW_BASE_CHAT_URL || "https://conversation.basalam.com",
                    customerClubUrl: pr.NEXT_PUBLIC_CUSTOMER_CLUB || "https://customer-club.basalam.com",
                    orderProcess: pr.NEXT_PUBLIC_ORDER_PROCESS || "https://order-processing.basalam.com",
                    promotionServiceUrl: pr.NEXT_PUBLIC_PROMOTION_URL || "https://promotion.basalam.com",
                    arvanLiveKey: pr.NEXT_PUBLIC_ARVAN_LIVE_KEY || "56e825be-5940-59db-95d6-86eff4ec5bc7",
                    notificationUrl: pr.NEXT_PUBLIC_NOTIFICATION_URL || "https://notification.basalam.com",
                    paymentUrl: pr.NEXT_PUBLIC_BASALAM_PAYMENT_URL || "https://payment.basalam.com/payment",
                    vendorDashboardUrl: pr.NEXT_PUBLIC_VENDOR_DASHBOARD_URL || "https://vendor.basalam.com",
                    graphqlAdminUrl: pr.NEXT_PUBLIC_GRAPHQL_ADMIN_URL || "https://api.basalam.com/api/admin",
                    userActivityUrl: pr.NEXT_PUBLIC_USER_ACTIVITY_URL || "https://user-activity.basalam.com",
                    chatResourcesUrl: pr.NEXT_PUBLIC_CHAT_RESOURCES_URL || "https://dal.basalam.com/api_v1.0/chat",
                    gameCenterUrl: pr.NEXT_PUBLIC_GAME_CENTER_URL || "https://gamecenter.basalam.com/api_v1.0/users",
                    posthogInstanceAddress: pr.NEXT_PUBLIC_POSTHOG_INSTANCE_ADDRESS || "https://posthog.basalam.com",
                    currentUserUrl: pr.NEXT_PUBLIC_CURRENT_USER_URL || "https://api.basalam.com/api/user/getCurrentUser",
                    gamesExploreUrl: pr.NEXT_PUBLIC_GAMES_EXPLORE_URL || "https://api.basalam.com/explore/api_v1.0/games",
                    logClickBoost: pr.NEXT_PUBLIC_BASALAM_LOG_CLICK_ADS_URL || "https://api-intheeye.basalam.com/v1/hit/click",
                    identityInformationUrl: pr.NEXT_PUBLIC_IDENTITY_INFORMATION_URL || "https://identity-information.basalam.com",
                    feedSuggestionUrl: pr.NEXT_PUBLIC_FEED_SUGGESTION_URL || "https://activity.basalam.com/api_v1.0/users/suggestion"
                },
                vr = "deviceId",
                mr = function() {
                    var e = A.default.get(vr);
                    return e || (e = d.v4()), A.default.set(vr, e, {
                        expires: 3650,
                        domain: s.isProduction() ? ".basalam." + (s.isStaging(window.location.hostname) ? "dev" : "com") : void 0,
                        secure: s.isProduction()
                    }), e
                },
                hr = function() {
                    return window.dalanWidgetConfig ? window.dalanWidgetConfig : null
                },
                br = function(e) {
                    return "undefined" != typeof window && "getApiBaseUrl" in window ? window.getApiBaseUrl(e) : s.isProduction() ? e : "/api-proxy?url=".concat(e)
                },
                yr = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = n.hasCamelizeInterceptor,
                        o = void 0 === r || r,
                        a = n.hasSnakizeInterceptor,
                        i = void 0 !== a && a,
                        c = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t.headers,
                                r = _object_without_properties(t, ["headers"]);
                            return U.default.create(_object_spread({
                                timeout: 15e3,
                                withCredentials: !0,
                                baseURL: br(e),
                                headers: _object_spread({}, n)
                            }, r))
                        }(e, t);
                    return function(e) {
                            e.interceptors.request.use(function(e) {
                                var t, n, r = {
                                        platform: "web",
                                        project: "dalan",
                                        name: "web.public",
                                        version: "3.1.18",
                                        deviceId: mr()
                                    },
                                    o = s.isStaging(window.location.href) ? A.default.get("secondAccessToken") || A.default.get("accessToken") : null === (n = window.WebViewInterface) || void 0 === n || null === (t = n.fetchToken) || void 0 === t ? void 0 : t.call(n),
                                    a = hr();
                                return _object_spread_props(_object_spread({}, e), {
                                    headers: _object_spread_props(_object_spread({}, null == e ? void 0 : e.headers, o && {
                                        Authorization: "Bearer ".concat(o)
                                    }, a && {
                                        Accept: "application/json",
                                        "Content-Type": "application/json"
                                    }), {
                                        "X-Client-Info": JSON.stringify(r)
                                    })
                                })
                            }, function(e) {
                                return Promise.reject(e)
                            })
                        }(c),
                        function(e) {
                            e.interceptors.response.use(function(e) {
                                return e && e.data ? e.data : e
                            })
                        }(c),
                        function(e) {
                            e.interceptors.response.use(null, function(e) {
                                var t, n = e.config;
                                if (401 === (null === (t = e.response) || void 0 === t ? void 0 : t.status) && !n._retry) {
                                    n._retry = !0;
                                    var r = s.isProduction() ? "/accounts" : "/login",
                                        o = s.isProduction() ? "/account/chats" : "/chats";
                                    window.location.pathname.startsWith(o) && window.location.replace("".concat(r, "?prev=").concat(encodeURIComponent(window.location.href)))
                                }
                                return Promise.reject(e)
                            })
                        }(c), o && function(e) {
                            e.interceptors.response.use(function(e) {
                                return s.camelize(e)
                            }, function(e) {
                                return Promise.reject(e)
                            })
                        }(c), i && function(e) {
                            e.interceptors.request.use(function(e) {
                                return _instanceof(e.data, FormData) || e.noSnakize ? e : _object_spread_props(_object_spread({}, e), {
                                    params: e.params || {},
                                    data: e.data ? s.snakize(e.data) : void 0
                                })
                            }, function(e) {
                                return Promise.reject(e)
                            })
                        }(c), c
                };
            yr(_r.authUrl);
            var gr = yr(_r.coreUrl),
                wr = yr(_r.chatUrl),
                Cr = yr(_r.conversation, {}, {
                    hasSnakizeInterceptor: !0,
                    hasCamelizeInterceptor: !0
                });
            yr(_r.storyUrl), yr(_r.reviewUrl), yr(_r.searchUrl), yr(_r.orderProcess);
            var Er = yr(_r.featureFlagUrl),
                Sr = yr(_r.userActivityUrl),
                Tr = yr(_r.notificationUrl);

            function jr() {
                return gr.get("/api_v2/user")
            }
            yr(_r.uploadioUrl, {
                timeout: 6e4
            }), yr(_r.automationUrl), yr(_r.appsApiUrl);
            var xr = "connected",
                Nr = "disconnected",
                Ir = "NOTIFICATION",
                kr = "bot",
                Or = "group",
                Lr = "private",
                Ur = "channel",
                Ar = "text",
                Rr = "file",
                Pr = "user",
                Mr = "voice",
                Fr = "order",
                Br = "video",
                Dr = "story",
                Xr = "review",
                zr = "vendor",
                Gr = "product",
                Wr = "sticker",
                Hr = "picture",
                Vr = "social_post",
                qr = "notification",
                Yr = "order_process",
                Kr = "new-message",
                Jr = "sender-seen",
                Qr = "broadcast-to-all",
                $r = "new-message-toast",
                Zr = "publish-to-socket",
                eo = "add-event-listener",
                to = "sender-chat-seen-all",
                no = "receiver-chat-seen-all",
                ro = "update-chat-list-by-id",
                oo = "update-last-seen-message",
                ao = "update-chat-list-by-socket",
                io = "message.new.notify",
                so = "chat.seen.notify",
                co = "message.seen.notify",
                uo = "chat.last_seen.notify";

            function lo(e) {
                var t = e.children,
                    n = _sliced_to_array(f.useState(!1), 2),
                    r = n[0],
                    o = n[1];
                return f.useEffect(function() {
                    return o(!0)
                }, []), r && t
            }
            var fo = {
                    limit: 30,
                    chatType: Ur
                },
                po = {
                    limit: 30,
                    chatType: Ur
                };

            function _o() {
                var e;
                return ((window.DALAN_NEW_SERVICE_TESTERS || []).includes(null === (e = window.currentUser) || void 0 === e ? void 0 : e.id) ? Cr : wr).get("/v2/user/websocket/auth/token")
            }

            function vo(e) {
                return Cr.post("/v2/broadcast", s.snakize(e))
            }

            function mo() {
                return Cr.get("/v3/messages/unseen_count")
            }
            var ho = function(e, t) {
                    var n, r = e.limit,
                        o = e.query,
                        a = e.filter,
                        i = e.isLoggedIn,
                        u = e.searchType,
                        l = f.useId();
                    return n = _object_spread_props(_object_spread({}, t), {
                        cacheTime: 0,
                        queryKey: ["chat-list", a, o, u, i, l],
                        getNextPageParam: function(e, t) {
                            var n;
                            return e.data.chats.length === r ? o ? {
                                limit: r,
                                offset: t.length * r
                            } : {
                                limit: r,
                                updatedBefore: null === (n = e.data.chats[r - 1]) || void 0 === n ? void 0 : n.updatedAt
                            } : void 0
                        },
                        queryFn: function(e) {
                            var t = e.pageParam,
                                n = {
                                    pageParam: _object_spread({}, null != t ? t : {
                                        limit: 30
                                    })
                                };
                            if (!i) return function(e) {
                                var t = e.pageParam;
                                return Cr.get("/v3/chats/public", {
                                    params: t
                                })
                            }(n);
                            if (o) {
                                var r = {
                                    q: o,
                                    rows: n.pageParam.limit || 30,
                                    start: n.pageParam.offset || 0
                                };
                                if ("CONTACTS" === u) return Cr.post("/v3/search/contact", r);
                                if ("MESSAGES" === u) return Cr.post("/v3/search/message", r)
                            }
                            return function(e, t) {
                                var n = e.pageParam;
                                return Cr.get("/v3/chats", {
                                    params: _object_spread_props(_object_spread({}, s.snakize(n)), {
                                        filters: t
                                    })
                                })
                            }(n, a)
                        }
                    }), c.useInfiniteQuery(n)
                },
                bo = f.createContext(null);

            function yo(e) {
                var t = e.children,
                    n = f.useRef([]),
                    r = f.useCallback(function(e) {
                        return n.current.push(e),
                            function() {
                                n.current = n.current.filter(function(t) {
                                    return t !== e
                                })
                            }
                    }, []),
                    o = f.useCallback(function(e) {
                        var t = function() {
                            e(), n.current = n.current.filter(function(e) {
                                return e !== t
                            })
                        };
                        return n.current.push(t),
                            function() {
                                n.current = n.current.filter(function(e) {
                                    return e !== t
                                })
                            }
                    }, []),
                    a = f.useCallback(function(e) {
                        if ("Escape" === e.key) {
                            var t = n.current.at(-1);
                            t && t()
                        }
                    }, []);
                f.useEffect(function() {
                    return document.addEventListener("keydown", a),
                        function() {
                            return document.removeEventListener("keydown", a)
                        }
                }, [a]);
                var i = f.useMemo(function() {
                    return {
                        push: r,
                        pushOnce: o
                    }
                }, [r, o]);
                return _.jsx(bo.Provider, {
                    value: i,
                    children: t
                })
            }

            function go() {
                var e, t, n, r, o, a = new h.UAParser(window.navigator.userAgent).getResult(),
                    i = hr(),
                    s = "mobile" === (null == i ? void 0 : i.forcedDeviceType) || "mobile" === (null === (e = a.device) || void 0 === e ? void 0 : e.type);
                return _object_spread_props(_object_spread({}, a), {
                    isMobile: s,
                    isCrawler: !(null === (t = a.browser) || void 0 === t ? void 0 : t.name),
                    isTablet: "tablet" === (null === (n = a.device) || void 0 === n ? void 0 : n.type),
                    isPc: !s && "tablet" !== (null === (r = a.device) || void 0 === r ? void 0 : r.type),
                    isIOS: "iOS" === (null === (o = a.os) || void 0 === o ? void 0 : o.name) || "true" === A.default.get("isIosApp") || !0 === A.default.get("isIosApp")
                })
            }
            var wo = "de-E01",
                Co = "acqgp-",
                Eo = "_2TK-mb",
                So = "qpMUJq",
                To = "GpDR99",
                jo = "L3-l6K",
                xo = "_02XQzk",
                No = "-W-mPL",
                Io = "_0CbCrG",
                ko = "Io23HP";

            function Oo(e) {
                var t = e.className,
                    n = e.show,
                    r = e.radius,
                    o = void 0 === r ? 4 : r,
                    a = e.width,
                    i = void 0 === a ? "100%" : a,
                    s = _sliced_to_array(f.useState(!0), 2),
                    c = s[0],
                    u = s[1];
                return f.useEffect(function() {
                    n ? u(!0) : setTimeout(function() {
                        u(!1)
                    }, 500)
                }, [n]), c ? _.jsx(P.default, {
                    width: i,
                    height: "100%",
                    radius: o,
                    className: R.default(t, Io, _define_property({}, ko, n))
                }) : null
            }

            function Lo(e) {
                var t, n, r, o = e.chat,
                    a = e.contact,
                    i = e.onClick,
                    c = f.useRef(),
                    u = !go().isPc,
                    l = _sliced_to_array(f.useState(!1), 2),
                    d = l[0],
                    p = l[1],
                    m = v.dalanMapGetters(["currentUser"]).currentUser,
                    h = (null == a || null === (t = a.avatar) || void 0 === t ? void 0 : t.extraSmall) && !d,
                    b = a && m && a.id === m.id,
                    y = f.useMemo(function() {
                        return function(e) {
                            if (!e) return "offline";
                            var t = s.gregoryDate().diff(e, "minutes");
                            return t < 5 ? "online" : t < 30 ? "recently" : "offline"
                        }(null == a ? void 0 : a.lastActivity)
                    }, [null == a ? void 0 : a.lastActivity]);
                return _.jsx("div", {
                    ref: c,
                    className: wo,
                    children: _.jsx("div", {
                        className: Co,
                        onClick: function() {
                            return null == i ? void 0 : i(o)
                        },
                        children: _.jsxs("div", {
                            className: Eo,
                            children: [b ? _.jsx("div", {
                                className: So,
                                children: _.jsx(F.default, {
                                    name: "bi-saved-message-fill",
                                    color: "white"
                                })
                            }) : _.jsxs("div", {
                                className: To,
                                children: [_.jsx(M.default, {
                                    src: null == a || null === (n = a.avatar) || void 0 === n ? void 0 : n.extraSmall,
                                    size: u ? "40" : "44",
                                    status: h ? "offline" : y,
                                    onLoad: function() {
                                        return p(!0)
                                    }
                                }), _.jsx(Oo, {
                                    show: h,
                                    radius: "50%"
                                })]
                            }), _.jsxs("div", {
                                className: jo,
                                children: [_.jsxs("div", {
                                    className: xo,
                                    children: [_.jsx("span", {
                                        children: b ? "پیام های ذخیره شده" : null == a ? void 0 : a.name
                                    }), !!(null == a ? void 0 : a.badge) && !b && _.jsx(B.default, {
                                        label: null == a ? void 0 : a.badge,
                                        size: "sm",
                                        color: "black"
                                    })]
                                }), !!(null == a ? void 0 : a.vendor) && !b && _.jsxs("span", {
                                    className: No,
                                    children: [_.jsx("i", {
                                        className: "bi-vendor"
                                    }), null === (r = a.vendor) || void 0 === r ? void 0 : r.title]
                                })]
                            })]
                        })
                    })
                })
            }
            var Uo = {
                "contact-list-filter": "bdaUDs",
                "contact-list-filter__btn": "NsmhRl",
                "contact-list-filter__btn--active": "UvpqI-",
                "contact-list-filter__dropdown": "Ton9-9",
                "contact-list-filter__dropdown-item": "OJRgrt",
                in: "I9yWTX",
                "contact-list-filter__dropdown-item-title": "w49yE9",
                "contact-list-filter__modal-item": "b3hCyh",
                "contact-list-filter__modal-item-title": "SCzvhS",
                "contact-list-filter__modal-item-nav": "weHh9c"
            };

            function Ao(e) {
                var t = e.show,
                    n = e.className,
                    r = e.children,
                    o = e.onClose,
                    a = _object_without_properties(e, ["show", "className", "children", "onClose"]),
                    i = function() {
                        var e = f.useContext(bo);
                        if (!e) throw Error("useEscapeContext must be used within an EscapeStackProvider");
                        return e
                    }(),
                    s = i.push;
                return f.useEffect(function() {
                    if (t) return s(function(e) {
                        o(e)
                    })
                }, [s, t]), _.jsx(D.default, _object_spread_props(_object_spread({
                    show: t,
                    className: n,
                    onClose: o
                }, a), {
                    children: r
                }))
            }
            var Ro = f.forwardRef(function(e, t) {
                    var n, r = e.className,
                        o = e.disabled,
                        a = e.onChange,
                        i = f.useRef(),
                        s = _sliced_to_array(f.useState(), 2),
                        c = s[0],
                        u = s[1],
                        l = _sliced_to_array(f.useState(null), 2),
                        d = l[0],
                        p = l[1],
                        m = go(),
                        h = v.dalanMapGetters(["currentUser"]).currentUser,
                        b = null == h || null === (n = h.vendor) || void 0 === n ? void 0 : n.isActive,
                        y = f.useCallback(function(e) {
                            p(e), setTimeout(function() {
                                return u(!1)
                            }, 200)
                        }, []),
                        g = function(e) {
                            y(e), setTimeout(function() {
                                a(e)
                            }, 0)
                        };
                    return f.useImperativeHandle(t, function() {
                        return {
                            updateFilter: y
                        }
                    }, [y]), _.jsxs("div", {
                        className: r,
                        ref: t,
                        children: [_.jsx("div", {
                            ref: i,
                            className: Uo["contact-list-filter"],
                            children: _.jsx(X.default, {
                                className: R.default(Uo["contact-list-filter__btn"], _define_property({}, Uo["contact-list-filter__btn--active"], null !== d)),
                                icon: "bi-filter",
                                variant: "text",
                                color: "secondary",
                                size: "md",
                                square: !0,
                                disabled: o,
                                onClick: function() {
                                    return u(!0)
                                }
                            })
                        }), m.isPc && _.jsx(Ao, {
                            show: !!c,
                            anchorEl: i.current,
                            transition: "fade",
                            position: "bottom-left",
                            onClose: function() {
                                return u(!1)
                            },
                            className: "dataset-inp-ChatListFilter",
                            children: _.jsxs("div", {
                                className: Uo["contact-list-filter__dropdown"],
                                children: [_.jsxs("button", {
                                    className: Uo["contact-list-filter__dropdown-item"],
                                    onClick: function() {
                                        return g(null)
                                    },
                                    children: [_.jsx(G.default, {
                                        value: "",
                                        checked: null === d
                                    }), _.jsx("span", {
                                        className: Uo["contact-list-filter__dropdown-title"],
                                        children: "همه گفت‌و‌گوها"
                                    })]
                                }), _.jsxs("button", {
                                    className: Uo["contact-list-filter__dropdown-item"],
                                    onClick: function() {
                                        return g("unseen")
                                    },
                                    children: [_.jsx(G.default, {
                                        value: "unseen",
                                        checked: "unseen" === d
                                    }), _.jsx("span", {
                                        className: Uo["contact-list-filter__dropdown-title"],
                                        children: "خوانده نشده‌ها"
                                    })]
                                }), b && _.jsxs("button", {
                                    className: Uo["contact-list-filter__dropdown-item"],
                                    onClick: function() {
                                        return g("order")
                                    },
                                    children: [_.jsx(G.default, {
                                        value: "order",
                                        checked: "order" === d
                                    }), _.jsx("span", {
                                        className: Uo["contact-list-filter__dropdown-title"],
                                        children: "سفارش‌های جاری"
                                    })]
                                })]
                            })
                        }), !m.isPc && _.jsx(z.default, {
                            show: c,
                            showClose: !1,
                            title: "فیلتر",
                            onClose: function() {
                                return u(!1)
                            },
                            showHeader: !0,
                            className: "dataset-inp-ChatListFilter",
                            children: _.jsxs("div", {
                                className: Uo["contact-list-filter__modal"],
                                children: [_.jsxs("button", {
                                    className: Uo["contact-list-filter__modal-item"],
                                    onClick: function() {
                                        return g(null)
                                    },
                                    children: [_.jsx(G.default, {
                                        value: "",
                                        checked: null === d
                                    }), _.jsx("span", {
                                        className: Uo["contact-list-filter__modal-item-title"],
                                        children: "همه گفت‌و‌گوها"
                                    })]
                                }), _.jsxs("button", {
                                    className: Uo["contact-list-filter__modal-item"],
                                    onClick: function() {
                                        return g("unseen")
                                    },
                                    children: [_.jsx(G.default, {
                                        value: "unseen",
                                        checked: "unseen" === d
                                    }), _.jsx("span", {
                                        className: Uo["contact-list-filter__modal-item-title"],
                                        children: "خوانده نشده‌ها"
                                    })]
                                }), b && _.jsxs("button", {
                                    className: Uo["contact-list-filter__modal-item"],
                                    onClick: function() {
                                        return g("order")
                                    },
                                    children: [_.jsx(G.default, {
                                        value: "order",
                                        checked: "order" === d
                                    }), _.jsx("span", {
                                        className: Uo["contact-list-filter__modal-item-title"],
                                        children: "سفارش‌های جاری"
                                    })]
                                })]
                            })
                        })]
                    })
                }),
                Po = {
                    "contact-list-search__box": "tX3StQ",
                    "contact-list-search__box--disabled": "_92uQar",
                    "contact-list-search__box--focus": "ULh-3e",
                    "contact-list-search__box-icon": "dLPKQt",
                    "contact-list-search__box-input": "PYZeue",
                    "contact-list-search__box-clear": "BUDhlD",
                    "contact-list-search__types": "_0v2352",
                    "contact-list-search__types--show": "MQzieq",
                    "contact-list-search__types-radio": "_215J8k"
                };

            function Mo(e) {
                var t, n = e.disabled,
                    r = e.onSearch,
                    o = e.className,
                    a = e.placeholder,
                    i = void 0 === a ? "جست‌وجو در گفت‌وگوها" : a,
                    s = f.useRef(),
                    c = f.useRef(),
                    u = _sliced_to_array(f.useState(""), 2),
                    l = u[0],
                    d = u[1],
                    p = _sliced_to_array(f.useState("MESSAGES"), 2),
                    v = p[0],
                    m = p[1],
                    h = _sliced_to_array(f.useState(!1), 2),
                    b = h[0],
                    y = h[1],
                    g = function(e) {
                        m(e.target.value), setTimeout(function() {
                            r({
                                query: l,
                                type: e.target.value
                            })
                        }, 0)
                    },
                    w = function() {
                        d(""), setTimeout(function() {
                            var e;
                            r({
                                query: "",
                                type: "MESSAGES"
                            }), null === (e = s.current) || void 0 === e || e.blur()
                        }, 0), clearTimeout(c.current)
                    };
                return _.jsxs("div", {
                    className: R.default(o, Po["contact-list-search"]),
                    children: [_.jsxs("div", {
                        className: R.default(Po["contact-list-search__box"], (t = {}, _define_property(t, Po["contact-list-search__box--focus"], b), _define_property(t, Po["contact-list-search__box--disabled"], n), t)),
                        children: [_.jsx("i", {
                            className: R.default("bi-search", Po["contact-list-search__box-icon"])
                        }), _.jsx("input", {
                            ref: s,
                            className: Po["contact-list-search__box-input"],
                            type: "text",
                            placeholder: i,
                            value: l,
                            disabled: n,
                            onInput: function(e) {
                                d(e.target.value), clearTimeout(c.current), c.current = setTimeout(function() {
                                    return r({
                                        query: e.target.value,
                                        type: v
                                    })
                                }, 500)
                            },
                            onFocus: function() {
                                return y(!0)
                            },
                            onBlur: function() {
                                return y(!1)
                            }
                        }), _.jsx(W.default, {
                            mounted: l.length > 0,
                            transition: "fade",
                            duration: 250,
                            children: function(e) {
                                return _.jsx("button", {
                                    "aria-label": "بستن",
                                    className: Po["contact-list-search__box-clear"],
                                    style: e,
                                    onClick: w,
                                    children: _.jsx("i", {
                                        className: "bi-close"
                                    })
                                })
                            }
                        })]
                    }), _.jsxs("div", {
                        className: R.default(Po["contact-list-search__types"], _define_property({}, Po["contact-list-search__types--show"], !!l)),
                        children: [_.jsx(G.default, {
                            className: Po["contact-list-search__types-radio"],
                            label: "متن گفت‌وگوها",
                            value: "MESSAGES",
                            checked: "MESSAGES" === v,
                            onChange: g
                        }), _.jsx(G.default, {
                            className: Po["contact-list-search__types-radio"],
                            label: "اسم آدم‌ها",
                            value: "CONTACTS",
                            checked: "CONTACTS" === v,
                            onChange: g
                        })]
                    })]
                })
            }

            function Fo(e) {
                return _object_spread_props(_object_spread({}, e), {
                    identifier: e.hashId,
                    avatar: "string" == typeof e.avatar ? {
                        small: e.avatar,
                        large: e.avatar,
                        medium: e.avatar,
                        extraSmall: e.avatar
                    } : e.avatar
                })
            }

            function Bo(e) {
                return _object_spread_props(_object_spread({}, e), {
                    name: e.title,
                    hashId: "@".concat(e.link),
                    identifier: "@".concat(e.link),
                    verified: (null == e ? void 0 : e.verified) || (null == e ? void 0 : e.blueTick),
                    avatar: {
                        small: e.avatar,
                        large: e.avatar,
                        medium: e.avatar,
                        extraSmall: e.avatar
                    }
                })
            }

            function Do(e) {
                return _object_spread_props(_object_spread({}, e), {
                    name: e.title,
                    hashId: "@".concat(e.link),
                    identifier: "@".concat(e.link),
                    verified: (null == e ? void 0 : e.verified) || (null == e ? void 0 : e.blueTick),
                    avatar: {
                        small: e.avatar,
                        large: e.avatar,
                        medium: e.avatar,
                        extraSmall: e.avatar
                    }
                })
            }

            function Xo(e) {
                return _object_spread_props(_object_spread({}, e), {
                    identifier: "@".concat(e.hashId),
                    avatar: {
                        small: e.avatar,
                        large: e.avatar,
                        medium: e.avatar,
                        extraSmall: e.avatar
                    }
                })
            }
            var zo = {
                    limit: 30,
                    autoUpdate: !0,
                    filterChannels: !1
                },
                Go = "ontzlD",
                Wo = "_9vC78N",
                Ho = "W2pL5g",
                Vo = "iKsTnS",
                qo = "Gsp3-Q";

            function Yo(e) {
                var t = e.title,
                    n = void 0 === t ? "هنوز با کسی گفت‌وگو نداشتی" : t;
                return _.jsxs("div", {
                    className: Go,
                    children: [_.jsx("img", {
                        className: Wo,
                        src: "https://statics.basalam.com/public-63/admin/Ddrd75/02-16/0IEzG4Xzn31sjerX1YkvJJ7yFgPvnj80NB4T9xTJyMExlVsRfI.SVG",
                        alt: n
                    }), _.jsx("span", {
                        className: Ho,
                        children: n
                    })]
                })
            }

            function Ko(e) {
                var t = "MESSAGES" === e.searchType;
                return _.jsxs("div", {
                    className: Go,
                    children: [_.jsx("img", {
                        className: Wo,
                        src: "https://statics.basalam.com/public-13/admin/b28/10-09/S8xey4XNdzddRqVfcb5VlqyEwIfCdG4FirwqeELhqraLmdga0T.SVG",
                        alt: "پیدا نشد!"
                    }), _.jsx("span", {
                        className: Ho,
                        children: "نتونستیم گفت‌وگویی پیدا کنیم"
                    }), _.jsx("div", {
                        className: Vo,
                        children: _.jsxs("div", {
                            children: ["ببین ", t ? "کلمه" : "اسم", " رو درست نوشتی.", " ", t ? "در اسم آدم‌ها جستجو کن." : "در متن گفت‌وگوها جستجو کن."]
                        })
                    })]
                })
            }

            function Jo(e) {
                var t = e.onFilterClear;
                return _.jsxs("div", {
                    className: Go,
                    children: [_.jsx("img", {
                        className: Wo,
                        src: "https://statics.basalam.com/public-63/admin/Ddrd75/02-16/0IEzG4Xzn31sjerX1YkvJJ7yFgPvnj80NB4T9xTJyMExlVsRfI.SVG",
                        alt: "نتونستیم گفت‌وگویی پیدا کنیم"
                    }), _.jsx("span", {
                        className: Ho,
                        children: "نتونستیم گفت‌وگویی پیدا کنیم"
                    }), _.jsx(X.default, {
                        size: "sm",
                        color: "secondary",
                        variant: "outline",
                        label: "پاک کردن فیلتر",
                        className: qo,
                        onClick: t
                    })]
                })
            }
            var Qo = f.memo(function(e) {
                    var t, n, r = e.className,
                        o = e.multiSelect,
                        a = f.useRef(),
                        i = v.dalanMapGetters(["isLoggedIn", "featureFlags"]),
                        c = i.isLoggedIn,
                        u = i.featureFlags,
                        l = function() {
                            var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zo,
                                r = n.limit,
                                o = n.autoUpdate,
                                a = n.filterChannels,
                                i = n.openedChatIdentifier,
                                c = f.useRef(),
                                u = p.useEmitter().emitEvent,
                                l = _sliced_to_array(f.useState(null), 2),
                                _ = l[0],
                                m = l[1],
                                h = v.dalanMapGetters(["isLoggedIn", "featureFlags"]),
                                b = h.isLoggedIn,
                                y = h.featureFlags,
                                g = _sliced_to_array(f.useState({}), 2),
                                w = g[0],
                                C = g[1],
                                E = _sliced_to_array(f.useState(""), 2),
                                S = E[0],
                                T = E[1],
                                j = _sliced_to_array(f.useState("CONTACTS"), 2),
                                x = j[0],
                                N = j[1],
                                I = _sliced_to_array(f.useState(!0), 2),
                                k = I[0],
                                O = I[1],
                                L = _sliced_to_array(f.useState([]), 2),
                                A = L[0],
                                R = L[1],
                                P = _sliced_to_array(f.useState(!1), 2),
                                M = P[0],
                                F = P[1],
                                B = f.useRef(),
                                D = !!(null == y || null === (e = y.features) || void 0 === e ? void 0 : e.chat),
                                X = f.useMemo(function() {
                                    return S.trim().length > 0
                                }, [S]),
                                z = f.useMemo(function() {
                                    return null !== _
                                }, [_]),
                                G = f.useCallback(function(e) {
                                    return _async_to_generator(function() {
                                        var t;
                                        return _ts_generator(this, function(n) {
                                            return t = [], [2, (e.forEach(function(e) {
                                                if (e.chatType === Lr) {
                                                    var n = e.contact.id;
                                                    void 0 === w[n] && t.push(n)
                                                }
                                            }), t.length > 0 && function(e) {
                                                var t = e.userIds,
                                                    n = e.onlyMaxActionTime;
                                                return Sr.post("/api_v1.0/user-last-activity/get-activities", s.snakize({
                                                    userIds: t,
                                                    onlyMaxActionTime: n
                                                }))
                                            }({
                                                onlyMaxActionTime: !0,
                                                userIds: t
                                            }).then(function(e) {
                                                if (e) {
                                                    var t = _object_spread({}, w, e);
                                                    C(t), R(function(t) {
                                                        return t.map(function(t) {
                                                            var n, r;
                                                            return t.chatType === Lr && e[null === (n = t.contact) || void 0 === n ? void 0 : n.id] ? _object_spread_props(_object_spread({}, t), {
                                                                contact: _object_spread_props(_object_spread({}, t.contact), {
                                                                    lastActivity: e[null === (r = t.contact) || void 0 === r ? void 0 : r.id]
                                                                })
                                                            }) : t
                                                        })
                                                    })
                                                }
                                            }).catch(function(e) {
                                                console.error("Failed to fetch user activities:", e)
                                            }), w)]
                                        })
                                    })()
                                }, [w]),
                                W = ho({
                                    limit: r,
                                    filter: _,
                                    searchType: x,
                                    isLoggedIn: b,
                                    query: S
                                }, {
                                    enabled: D,
                                    onSuccess: function(e) {
                                        var t = e.pages;
                                        return _async_to_generator(function() {
                                            var e, n, r, o, i;
                                            return _ts_generator(this, function(s) {
                                                switch (s.label) {
                                                    case 0:
                                                        return n = null === (e = t.at(-1)) || void 0 === e ? void 0 : e.data, r = n.chats.filter(function(e) {
                                                            var t, n;
                                                            return e.chatType === Lr ? !!(null === (t = e.contact) || void 0 === t ? void 0 : t.id) : e.chatType === Ur ? !a || (null == (n = e.channel) ? void 0 : n.isAdmin) : e.chatType === Or || e.chatType === kr && !!e.contact
                                                        }), [4, G(r)];
                                                    case 1:
                                                        return o = s.sent(), i = [], r.forEach(function(e) {
                                                            var t = _object_spread_props(_object_spread({
                                                                uuid: d.v4()
                                                            }, e), {
                                                                searchedMessage: e.message
                                                            });
                                                            if (delete t.message, e.chatType === Lr) {
                                                                var n, r, a = null == o ? void 0 : o[null === (n = e.contact) || void 0 === n ? void 0 : n.id];
                                                                t.contact = _object_spread_props(_object_spread({}, Fo(t.contact)), {
                                                                    snippet: null === (r = e.contact) || void 0 === r ? void 0 : r.snippet,
                                                                    lastActivity: a || null
                                                                })
                                                            } else e.chatType === Ur ? t.contact = Bo(e.channel) : e.chatType === Or ? t.contact = Do(e.group) : e.chatType === kr && (t.contact = Xo(t.contact));
                                                            i.push(t)
                                                        }), t.length <= 1 ? R(function() {
                                                            return _to_consumable_array(i)
                                                        }) : R(function(e) {
                                                            return _to_consumable_array(e).concat(_to_consumable_array(i))
                                                        }), C(function(e) {
                                                            return _object_spread({}, e, o)
                                                        }), O(!1), setTimeout(function() {
                                                            F(!1)
                                                        }, 0), [2]
                                                }
                                            })
                                        })()
                                    }
                                }),
                                H = W.isError,
                                V = W.isLoading,
                                q = W.hasNextPage,
                                Y = W.fetchNextPage,
                                K = W.refetch,
                                J = W.isFetchingNextPage,
                                Q = W.error,
                                $ = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return dr(["chat-list-".concat(e.updatedFrom)], function() {
                                        return e.isLoggedIn ? function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fo,
                                                t = e.limit,
                                                n = e.updatedFrom,
                                                r = e.chatType;
                                            return Cr.get("/v3/chats", {
                                                params: s.snakize({
                                                    limit: t,
                                                    updatedFrom: n,
                                                    chatType: r
                                                })
                                            })
                                        }(e) : function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : po,
                                                t = e.limit,
                                                n = e.updatedFrom,
                                                r = e.chatType;
                                            return Cr.get("/v3/chats/public", {
                                                params: {
                                                    limit: t,
                                                    updatedFrom: n,
                                                    chatType: r
                                                }
                                            })
                                        }(e)
                                    }, t)
                                }({
                                    limit: 30,
                                    updatedFrom: null === (t = A[0]) || void 0 === t ? void 0 : t.updatedAt,
                                    isLoggedIn: b
                                }, {
                                    enabled: !1,
                                    onSuccess: function(e) {
                                        var t = e.data;
                                        return _async_to_generator(function() {
                                            var e;
                                            return _ts_generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return 0 === t.chats.length ? [2] : [4, G(t.chats)];
                                                    case 1:
                                                        return e = n.sent(), R(function(n) {
                                                            var r = _to_consumable_array(n);
                                                            return t.chats.reverse().forEach(function(t) {
                                                                var n = r.findIndex(function(e) {
                                                                    return e.id === t.id
                                                                });
                                                                if (-1 === n) {
                                                                    var o, a, s = _object_spread({
                                                                        uuid: d.v4()
                                                                    }, t);
                                                                    s.chatType === Lr ? s.contact = _object_spread_props(_object_spread({}, Fo(s.contact)), {
                                                                        lastActivity: (null == e ? void 0 : e[null === (o = t.contact) || void 0 === o ? void 0 : o.id]) || null
                                                                    }) : s.chatType === Ur ? s.contact = Bo(s.channel) : s.chatType === Or ? s.contact = Do(s.group) : t.chatType === kr && (s.contact = Xo(s.contact)), (null === (a = s.contact) || void 0 === a ? void 0 : a.identifier) === i && (s.unseenMessageCount = 0), r.unshift(s)
                                                                } else {
                                                                    var c, l = r[n];
                                                                    r.splice(n, 1);
                                                                    var f = t.unseenMessageCount;
                                                                    (null === (c = l.contact) || void 0 === c ? void 0 : c.identifier) === i && (u(Qr, {
                                                                        customType: "markAsRead",
                                                                        data: {
                                                                            chatIndex: n
                                                                        }
                                                                    }), f = 0), r.unshift(_object_spread_props(_object_spread({}, t), {
                                                                        uuid: l.uuid,
                                                                        unseenMessageCount: f,
                                                                        contact: l.contact,
                                                                        chatType: l.chatType
                                                                    }))
                                                                }
                                                            }), r
                                                        }), [2]
                                                }
                                            })
                                        })()
                                    }
                                }),
                                Z = $.refetch,
                                ee = f.useCallback(function() {
                                    V || !q || J || k || Y()
                                }, [Y, q, J, V, k]),
                                te = f.useCallback(function() {
                                    clearTimeout(c.current), c.current = setTimeout(function() {
                                        X || z || Z(), te()
                                    }, 1e4)
                                }, [X, z, Z]),
                                ne = f.useCallback(function(e) {
                                    var t = e.query,
                                        n = e.type;
                                    t && F(!0), (t !== S || n !== x && t) && (O(!0), R([]), T(t), N(n))
                                }, [S, x]),
                                re = f.useCallback(function(e) {
                                    var t = e.chatId,
                                        n = e.chatUpdate;
                                    R(function(e) {
                                        var r = e.findIndex(function(e) {
                                            return e.id === t
                                        });
                                        if (-1 === r) return Z(), e;
                                        var o = e[r],
                                            a = _to_consumable_array(e),
                                            i = "function" == typeof n ? n(o) : n;
                                        return a[r] = _object_spread({}, o, i), a
                                    })
                                }, [Z]),
                                oe = f.useCallback(function(e) {
                                    var t = e.message,
                                        n = e.chatId;
                                    R(function(e) {
                                        var r = e.findIndex(function(e) {
                                            return e.id === n
                                        });
                                        if (-1 === r) return Z(), e;
                                        var o = e[r],
                                            a = _to_consumable_array(e);
                                        return a[r] = _object_spread_props(_object_spread({}, o), {
                                            lastMessage: t,
                                            updatedAt: (null == t ? void 0 : t.createdAt) || (null == o ? void 0 : o.updatedAt)
                                        }), a.sort(function(e, t) {
                                            return e.updatedAt > t.updatedAt ? -1 : 1
                                        }), a
                                    })
                                }, [R, Z]),
                                ae = f.useCallback(function(e) {
                                    R(function(t) {
                                        var n = t.findIndex(function(t) {
                                            return t.id === e.id
                                        });
                                        if (-1 === n) return [e].concat(_to_consumable_array(t));
                                        var r = _to_consumable_array(t);
                                        return r[n] = _object_spread({}, r[n], e), r.sort(function(e, t) {
                                            return e.updatedAt > t.updatedAt ? -1 : 1
                                        }), r
                                    })
                                }, []),
                                ie = f.useCallback(function(e) {
                                    R(function(t) {
                                        return t[e].contactIsBlocked = !0, t
                                    })
                                }, []),
                                se = f.useCallback(function(e) {
                                    (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && u(Qr, {
                                        customType: "markAsRead",
                                        data: {
                                            chatIndex: e
                                        }
                                    }), R(function(t) {
                                        return t[e].markedAsUnread = !1, t
                                    })
                                }, [u]),
                                ce = f.useCallback(function(e) {
                                    R(function(t) {
                                        return t[e].markedAsUnread = !0, t
                                    })
                                }, []);
                            f.useEffect(function() {
                                u("markAsRead", function(e) {
                                    var t = e.data;
                                    se(t.chatIndex, !1)
                                })
                            }, [se, u]), f.useEffect(function() {
                                return function() {
                                    B.current && clearTimeout(B.current)
                                }
                            }, []), f.useEffect(function() {
                                return o ? te() : clearTimeout(c.current),
                                    function() {
                                        clearTimeout(c.current)
                                    }
                            }, [o, X, z]);
                            var ue = null;
                            H && (ue = U.default.isAxiosError(Q) ? Q.response ? Q.response.status >= 500 && Q.response.status < 600 ? "SERVER" : "OTHER" : "NETWORK" : "UNKNOWN");
                            var le = f.useMemo(function() {
                                return A
                            }, [A]);
                            return {
                                block: ie,
                                search: ne,
                                errorType: ue,
                                searchType: x,
                                markAsRead: se,
                                applyFilter: function(e) {
                                    e !== _ && (O(!0), R([]), m(e))
                                },
                                isSearching: X,
                                isFiltering: z,
                                getNextChats: ee,
                                markAsUnread: ce,
                                isLoadingSearch: M,
                                hasError: H,
                                isLoadingChatList: V,
                                updateChatListById: re,
                                setIsLoadingSearch: F,
                                chats: le,
                                loadingModifyChatList: k,
                                updateChatListBySocket: ae,
                                updateChatListLastMessage: oe,
                                isFetchingNextPageChatList: J,
                                hasMoreChats: !!q,
                                updateChats: Z,
                                refetchChatList: function() {
                                    O(!0), K()
                                }
                            }
                        }({
                            limit: 30,
                            autoUpdate: !1,
                            filterChannels: !0
                        }),
                        m = l.search,
                        h = l.applyFilter,
                        b = l.isSearching,
                        y = l.isFiltering,
                        g = l.chats,
                        w = l.getNextChats,
                        C = [null == u || null === (t = u.features) || void 0 === t ? void 0 : t.searchChatList, null == u || null === (n = u.features) || void 0 === n ? void 0 : n.unseenChatListFilter],
                        E = C[0],
                        S = C[1],
                        T = (E || S) && c,
                        j = f.useCallback(function(e, t) {
                            var n = {
                                chat: t,
                                contact: t.contact
                            };
                            return _.jsx(H.default, {
                                value: t.contact.id,
                                className: "-n5vYh",
                                children: _.jsx(Lo, _object_spread({}, n))
                            })
                        }, []),
                        N = g.length > 0;
                    return _.jsxs("div", {
                        id: "contact-list",
                        className: R.default("_5vzvk7", r),
                        children: [T && _.jsxs("header", {
                            className: "fS3vbS",
                            children: [E && _.jsx(Mo, {
                                disabled: y,
                                className: "hbHr7N",
                                onSearch: m
                            }), S && _.jsx(Ro, {
                                ref: a,
                                disabled: b,
                                className: "kG5pf0",
                                onChange: h
                            })]
                        }), N ? _.jsx(H.default.Group, {
                            onChange: o.onChange,
                            value: o.selected,
                            children: _.jsx(x.Virtuoso, {
                                className: R.default("QkCx5-", {
                                    _0ny2TR: !T
                                }),
                                data: g,
                                endReached: w,
                                itemContent: function(e, t) {
                                    return j(e, t)
                                }
                            })
                        }) : b || y ? b ? _.jsx(Ko, {
                            searchType: "CONTACTS"
                        }) : _.jsx(Jo, {
                            onFilterClear: function() {
                                a.current.updateFilter(null), setTimeout(function() {
                                    h(null)
                                }, 0)
                            }
                        }) : _.jsx(Yo, {})]
                    })
                }),
                $o = "JI41O8",
                Zo = "OR35fK",
                ea = "_6skCvs",
                ta = "_64NXHd",
                na = "k-2aIk",
                ra = "ngxQQc",
                oa = "UGCY-b",
                aa = function() {
                    function e(t) {
                        var n;
                        return _class_call_check(this, e), (n = _call_super(this, e, [t])).name = "ApiError", n
                    }
                    return _inherits(e, _wrap_native_super(Error)), e
                }(),
                ia = function(e) {
                    var t = window.emitter;
                    t && t.emit("bs-snackbar-show", {
                        type: "error",
                        title: e
                    })
                },
                sa = {
                    showToast: !0
                };

            function ca(e) {
                var t, n;
                (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sa).showToast && ia("مشکلی در انجام عملیات رخ داد. لطفا دوباره امتحان کنید."), n = null, (null == e ? void 0 : e.response) || (null == e ? void 0 : e.request) ? n = function(e) {
                    var t, n, r, o, a, i, s, c;
                    if (!(null == e ? void 0 : e.response) && !(null == e ? void 0 : e.request)) return e;
                    var u = new aa(e.response ? "Response error: " + (null == e || null === (t = e.response) || void 0 === t ? void 0 : t.statusText) : "Network error: " + (null == e ? void 0 : e.message));
                    if (u.statusCode = e.response || "ECONNABORTED" !== e.code ? e.response || u.isTimeoutError ? (null == e || null === (n = e.response) || void 0 === n ? void 0 : n.status) || 500 : 599 : 408, u.errorType = "api", u.url = (null == e || null === (r = e.config) || void 0 === r ? void 0 : r.baseURL) + (null == e || null === (o = e.config) || void 0 === o ? void 0 : o.url), u.method = null == e || null === (a = e.config) || void 0 === a ? void 0 : a.method, u.headers = null == e || null === (i = e.config) || void 0 === i ? void 0 : i.headers, u.data = null == e || null === (s = e.config) || void 0 === s ? void 0 : s.data, u.timeout = null == e || null === (c = e.config) || void 0 === c ? void 0 : c.timeout, u.url) {
                        var l = new URL(u.url);
                        u.hostname = l.hostname, u.pathname = l.pathname, u.search = l.search
                    }
                    return u
                }(e) : _instanceof(e, Error) ? (n = e).errorType = "logic" : (n = Error("something unexpected", {
                    cause: e
                })).errorType = "unknown", n.statusCode || (n.statusCode = 500), t = n, void 0 !== i ? console.warn("%c Capture Error::", "color:#FF5C39;font-weight:900", t) : console.error("Capture Error::", t), t.errorType
            }

            function ua() {
                var e = _sliced_to_array(f.useState(""), 2),
                    t = e[0],
                    n = e[1],
                    r = p.useSnackbar().showSuccessSnackbar,
                    o = v.useDalanActions(),
                    a = o.closeDirectModal,
                    i = o.openDirectModal,
                    c = v.dalanMapGetters(["directModalData"]).directModalData,
                    u = function() {
                        return fr(vo, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                    }(),
                    l = u.mutateAsync,
                    d = f.useRef(),
                    m = _sliced_to_array(f.useState([]), 2),
                    h = m[0],
                    b = m[1],
                    y = !!(null == h ? void 0 : h.length);
                f.useEffect(function() {
                    var e = new URLSearchParams(window.location.search),
                        t = e.get("multiSelect"),
                        n = e.get("messageType"),
                        r = e.get("entityId"),
                        o = e.get("payloadText");
                    "true" === t && i({
                        messageType: n,
                        messagePayload: {
                            entityId: r,
                            text: o
                        }
                    })
                }, []);
                var g = f.useCallback(function() {
                        return _async_to_generator(function() {
                            var e, t, o, i, u, f;
                            return _ts_generator(this, function(p) {
                                switch (p.label) {
                                    case 0:
                                        e = (null == c ? void 0 : c.messageType) === Ar, p.label = 1;
                                    case 1:
                                        return p.trys.push([1, 3, , 4]), a(), t = d.current, o = c.messagePayload || {}, i = o.entityId, u = o.text, f = {
                                            text: [u, t].filter(Boolean).join("\r\n\r\n") || void 0
                                        }, !e && i && (f.entityId = i), [4, l({
                                            message: f,
                                            receivers: h,
                                            messageType: c.messageType
                                        })];
                                    case 2:
                                        return p.sent(), r("با موفقیت ارسال شد!"), n(""), d.current = "", [3, 4];
                                    case 3:
                                        return function(e, t) {
                                            try {
                                                var n, r;
                                                if (!(null == e || null === (n = e.response) || void 0 === n ? void 0 : n.data) || 500 === (null == e || null === (r = e.response) || void 0 === r ? void 0 : r.status)) return ca(e);
                                                var o = e.response.data.error;
                                                o.messages ? o.messages.forEach(function(e) {
                                                    e.text && ia(s.replaceAllMatchedKeys(e.text, t))
                                                }) : Array.isArray(o) ? o.forEach(function(e) {
                                                    e.text && ia(s.replaceAllMatchedKeys(e.text, t))
                                                }) : ca()
                                            } catch (e) {
                                                ca(e)
                                            }
                                        }(p.sent()), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })()
                    }, [h]),
                    w = _.jsxs("div", {
                        className: na,
                        children: [y && _.jsx("div", {
                            className: ea,
                            children: _.jsx(V.default, {
                                value: t,
                                wrapperClassName: ta,
                                placeholder: "توضیحات",
                                onChange: function(e) {
                                    n(e.target.value), d.current = e.target.value
                                }
                            })
                        }), _.jsx(X.default, {
                            className: ra,
                            color: "primary",
                            label: "ارسال",
                            icon: "bi bi-send-right",
                            disabled: !y,
                            onClick: g
                        })]
                    });
                return _.jsx(z.default, {
                    size: "sm",
                    showClose: !0,
                    show: !!c,
                    footerComponent: w,
                    title: "ارسال در گفت‌وگو",
                    bodyClass: oa,
                    onClose: function() {
                        b([]), n(""), a()
                    },
                    className: "dataset-inp-ChatDirectModal",
                    children: _.jsx("div", {
                        className: $o,
                        children: _.jsx(Qo, {
                            className: Zo,
                            multiSelect: {
                                selected: h,
                                onChange: function(e) {
                                    setTimeout(function() {
                                        b(e)
                                    }, 0)
                                }
                            }
                        })
                    })
                })
            }
            var la = function(e, t) {
                    return "function" == typeof e ? e(t) : e
                },
                da = k.create(function(e) {
                    return {
                        tabs: [],
                        messages: [],
                        hasMoreMessages: !0,
                        selectedTab: void 0,
                        containerRef: void 0,
                        isFetchedFirstPage: !1,
                        getNextMessages: function() {},
                        unseenMessageCount: void 0,
                        refetchNotifications: void 0,
                        isLoadingFetchNotifications: !1,
                        actions: {
                            setSelectedTab: function(t) {
                                return e({
                                    selectedTab: t
                                })
                            },
                            setContainerRef: function(t) {
                                return e({
                                    containerRef: t
                                })
                            },
                            setHasMoreMessages: function(t) {
                                return e({
                                    hasMoreMessages: t
                                })
                            },
                            setGetNextMessages: function(t) {
                                return e({
                                    getNextMessages: t
                                })
                            },
                            setIsFetchedFirstPage: function(t) {
                                return e({
                                    isFetchedFirstPage: t
                                })
                            },
                            setRefetchNotifications: function(t) {
                                return e({
                                    refetchNotifications: t
                                })
                            },
                            setIsLoadingFetchNotifications: function(t) {
                                return e({
                                    isLoadingFetchNotifications: t
                                })
                            },
                            updateTabs: function(t) {
                                return e(function(e) {
                                    return {
                                        tabs: la(t, e.tabs)
                                    }
                                })
                            },
                            updateMessages: function(t) {
                                return e(function(e) {
                                    return {
                                        messages: la(t, e.messages)
                                    }
                                })
                            },
                            updateNotification: function(t) {
                                return e(function(e) {
                                    return {
                                        notification: la(t, e.notification)
                                    }
                                })
                            },
                            updateUnseenMessageCount: function(t) {
                                return e(function(e) {
                                    return {
                                        unseenMessageCount: la(t, e.unseenMessageCount)
                                    }
                                })
                            }
                        },
                        notification: {
                            id: -2,
                            deletedAt: "",
                            createdAt: "",
                            updatedAt: "",
                            showApprovals: !1,
                            markedAsUnread: !1,
                            isSearchResult: !1,
                            unseenMessageCount: 0,
                            contactIsBlocked: !1,
                            chatType: Ir,
                            lastMessage: {
                                id: -20,
                                chatId: -2,
                                tempId: null,
                                updatedAt: "",
                                createdAt: "",
                                messageSource: null,
                                sender: {
                                    id: -3
                                },
                                messageType: qr,
                                message: {
                                    text: "",
                                    links: [],
                                    files: [],
                                    entityId: 212059117
                                }
                            },
                            contact: {
                                id: -3,
                                bio: "",
                                hashId: "",
                                lastActivity: "",
                                userFollowerCount: 0,
                                userFollowingCount: 0,
                                name: "اعلان‌های باسلام",
                                username: "BASALAM_NOTIFICATIONS",
                                identifier: Ir,
                                markedType: {
                                    id: 3706,
                                    parentId: -4,
                                    description: null,
                                    title: "همکاران باسلام"
                                },
                                avatar: {
                                    id: -5,
                                    small: "https://statics.basalam.com/public-41/admin/Ddrd75/11-05/2KWi7NTi7XSdyz7dDu8EAGFRazYgXFk7Zy5DpyVaiz24uCmXhG.SVG",
                                    large: "https://statics.basalam.com/public-41/admin/Ddrd75/11-05/2KWi7NTi7XSdyz7dDu8EAGFRazYgXFk7Zy5DpyVaiz24uCmXhG.SVG",
                                    medium: "https://statics.basalam.com/public-41/admin/Ddrd75/11-05/2KWi7NTi7XSdyz7dDu8EAGFRazYgXFk7Zy5DpyVaiz24uCmXhG.SVG",
                                    extraSmall: "https://statics.basalam.com/public-41/admin/Ddrd75/11-05/2KWi7NTi7XSdyz7dDu8EAGFRazYgXFk7Zy5DpyVaiz24uCmXhG.SVG"
                                }
                            }
                        }
                    }
                }),
                fa = {
                    features: {
                        chat: !0,
                        forward: !0,
                        websocket: !0,
                        attachFile: !0,
                        deleteChat: !0,
                        attachMedia: !0,
                        sendMessage: !0,
                        selectMessage: 25,
                        editMessage: !0,
                        savedMessage: !0,
                        attachReview: !0,
                        blockContact: !0,
                        attachProduct: !0,
                        deleteMessage: !0,
                        searchChatList: !0,
                        restoreArchive: !1,
                        requestArchive: !1,
                        canResizeChatList: !0,
                        attachSatisfaction: !0,
                        chatListMoreOptions: !0,
                        unseenChatListFilter: !0,
                        toastExcludedRoutes: ["/chat"],
                        botsList: [{
                            contact: {
                                badge: null,
                                vendor: null,
                                verified: !1,
                                description: null,
                                id: 1223372036731,
                                hashId: "product_desc_bot",
                                name: "توضیح ساز هوشمند برای محصولات باسلامی",
                                avatar: "https://statics.basalam.com/public-133/admin/ylMQL/09-27/xoPOMLEWogrlUTrwiz2vSZL0fJebILN0Vx22u4xMQ3GTXLcHz0.png"
                            }
                        }]
                    },
                    hintBox: {
                        show: !0,
                        showReportButton: !0,
                        text: "هشدار! \n لطفا به هیچ وجه اطلاعات خصوصی مثل اطلاعات هویتی، کد اعتبارسنجی، رمز، اطلاعات حساب و سایر اطلاعات محرمانه‌ت رو توی چت برای کسی ارسال نکن، حتی برای اعضای تیم باسلام!\n پرداخت پول سفارش در باسلام فقط از طریق سبد خرید و درگاه بانک انجام می‌شه. در صورت پرداخت بیرون از باسلام (مثلا کارت به کارت و...) پشتیبانی باسلام، تضمین رضایت و بازگشت پولت رو از دست می‌دی.\n اگر توی چت، رفتار نامناسب یا مشکوکی از کسی دیدی، حتما گزارش کن."
                    },
                    newHintBox: [{
                        text: "طبق فقط سفارش‌هایی پشتیبانی دارند که از سبد خرید و  درگاه پرداخت باسلام ثبت بشن.",
                        metadatas: [{
                            size: "sm",
                            position: 2,
                            component: "a",
                            type: "button",
                            text: "قوانین",
                            target: "_blank",
                            underlined: !0,
                            variant: "text-link",
                            href: "/about/messaging-terms"
                        }]
                    }, {
                        text: "لطفا به هیچ وجه، اطلاعات خصوصی و بانکیت رو اینجا برای کسی ارسال نکن. باسلام هیچوقت از طریق گفت‌وگو درخواست اطلاعات نمی‌کنه."
                    }, {
                        text: "اگر تخلفی در چت دیدی، گزارش کن."
                    }],
                    cantReceiveMessage: [2587468, 869029, 718323, 68565, 814019, 759404, 225310, 3989321, 3055810, 463105, 2479521, 3009063, 5111597, 2564801],
                    cache: {
                        version: 3,
                        enabled: !1
                    },
                    secureCallActiveVendors: [222934, 266, 907326, 176716, 194860, 18895, 209096, 419590, 350306, 969214, 68244, 643346, 158865, 42734, 1139177, 1006152, 494949, 270678, 23402, 105204, 79835, 220743, 134519, 727256, 949450, 190006, 518467, 537129, 1030094, 55899, 206209, 568073, 611769, 514815, 702, 382947, 807804, 314592, 815094, 1023525, 794812, 544083, 248488, 441392, 736211, 46826, 922558, 735112, 730261, 473828, 944153, 221800, 498011, 285435, 850513, 703715, 329745, 126503, 747707, 996156, 634027, 53388, 478692, 522246, 552229, 792392, 102129, 433888, 708460, 323069, 174536],
                    notificationTabs: {
                        enabled: !0,
                        showReadAll: !0,
                        showSettings: !1,
                        tabs: [{
                            title: "همه",
                            visiblity: "all",
                            identifier: "all",
                            visibility: "all"
                        }, {
                            visiblity: "vendor",
                            title: "مدیریت غرفه",
                            visibility: "vendor",
                            identifier: "vendor_management"
                        }, {
                            visiblity: "all",
                            visibility: "all",
                            title: "اطلاعیه‌ها",
                            identifier: "notice"
                        }, {
                            title: "خرید‌ها",
                            visiblity: "all",
                            visibility: "all",
                            identifier: "purchase"
                        }, {
                            visiblity: "all",
                            visibility: "all",
                            identifier: "social",
                            title: "شبکه اجتماعی"
                        }]
                    },
                    ces: {
                        cache: 90,
                        enabled: !0
                    },
                    allowNotLogin: !0,
                    allowedLinks: ["https://basalam.com"]
                },
                pa = function(e, t) {
                    if (!e) return console.warn("Broadcast channel is not available"), !1;
                    try {
                        var n = function(e) {
                            try {
                                return "undefined" != typeof structuredClone ? structuredClone(e) : JSON.parse(JSON.stringify(e))
                            } catch (t) {
                                return console.error("Failed to sanitize data for broadcast:", t), {
                                    error: "Data could not be serialized",
                                    originalType: void 0 === e ? "undefined" : _type_of(e)
                                }
                            }
                        }(t);
                        return e.postMessage(n), !0
                    } catch (e) {
                        return console.error("Failed to broadcast message:", e), console.error("Problematic message:", t), !1
                    }
                },
                _a = "CHAT_WARN",
                va = Object.freeze({
                    CHAT_PRIVATE_WARN: Symbol("chat.private.warn")
                });
            Object.freeze({
                CHAT_PRIVATE_WARN: Symbol("chat_private_warn")
            });
            var ma = "ppDI6t",
                ha = "gISHDJ",
                ba = "esQhOX",
                ya = "_81-ph6",
                ga = "sBQtAB",
                wa = "ACCrTQ",
                Ca = "S29bqX",
                Ea = "gIFjHm",
                Sa = "-kNcSq",
                Ta = "object" == (void 0 === q ? "undefined" : _type_of(q)) && q && q.Object === Object && q,
                ja = "object" == ("undefined" == typeof self ? "undefined" : _type_of(self)) && self && self.Object === Object && self,
                xa = Ta || ja || Function("return this")(),
                Na = xa.Symbol,
                Ia = Object.prototype,
                ka = Ia.hasOwnProperty,
                Oa = Ia.toString,
                La = Na ? Na.toStringTag : void 0,
                Ua = Object.prototype.toString,
                Aa = Na ? Na.toStringTag : void 0,
                Ra = function(e) {
                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Aa && Aa in Object(e) ? function(e) {
                        var t = ka.call(e, La),
                            n = e[La];
                        try {
                            e[La] = void 0;
                            var r = !0
                        } catch (e) {}
                        var o = Oa.call(e);
                        return r && (t ? e[La] = n : delete e[La]), o
                    }(e) : Ua.call(e)
                },
                Pa = function(e) {
                    var t = void 0 === e ? "undefined" : _type_of(e);
                    return null != e && ("object" == t || "function" == t)
                },
                Ma = xa["__core-js_shared__"],
                Fa = (r = /[^.]+$/.exec(Ma && Ma.keys && Ma.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
                Ba = Function.prototype.toString,
                Da = function(e) {
                    if (null != e) {
                        try {
                            return Ba.call(e)
                        } catch (e) {}
                        try {
                            return e + ""
                        } catch (e) {}
                    }
                    return ""
                },
                Xa = /^\[object .+?Constructor\]$/,
                za = Object.prototype,
                Ga = Function.prototype.toString,
                Wa = za.hasOwnProperty,
                Ha = RegExp("^" + Ga.call(Wa).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                Va = function(e, t) {
                    var n, r = null == e ? void 0 : e[t];
                    return !Pa(n = r) || Fa && Fa in n || !(function(e) {
                        if (!Pa(e)) return !1;
                        var t = Ra(e);
                        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
                    }(n) ? Ha : Xa).test(Da(n)) ? void 0 : r
                },
                qa = Va(xa, "Map");
            Va(Object, "create"),
                function() {
                    try {
                        Va(Object, "defineProperty")({}, "", {})
                    } catch (e) {}
                }();
            var Ya = Object.prototype;
            Ya.hasOwnProperty, Ya.propertyIsEnumerable, null != (a = o = function() {
                return arguments
            }()) && "object" == (void 0 === a ? "undefined" : _type_of(a)) && Ra(o);
            var Ka = function() {
                return !1
            };
            Y(function(e, t) {
                var n = t && !t.nodeType && t,
                    r = n && e && !e.nodeType && e,
                    o = r && r.exports === n ? xa.Buffer : void 0,
                    a = (o ? o.isBuffer : void 0) || Ka;
                e.exports = a
            });
            var Ja = Y(function(e, t) {
                var n = t && !t.nodeType && t,
                    r = n && e && !e.nodeType && e,
                    o = r && r.exports === n && Ta.process,
                    a = function() {
                        try {
                            return r && r.require && r.require("util").types || o && o.binding && o.binding("util")
                        } catch (e) {}
                    }();
                e.exports = a
            });
            Ja && Ja.isTypedArray, Y(function(e, t) {
                var n = t && !t.nodeType && t,
                    r = n && e && !e.nodeType && e,
                    o = r && r.exports === n ? xa.Buffer : void 0,
                    a = o ? o.allocUnsafe : void 0;
                e.exports = function(e, t) {
                    if (t) return e.slice();
                    var n = e.length,
                        r = a ? a(n) : new e.constructor(n);
                    return e.copy(r), r
                }
            });
            var Qa = Va(xa, "DataView"),
                $a = Va(xa, "Promise"),
                Za = Va(xa, "Set"),
                ei = Va(xa, "WeakMap"),
                ti = "[object Map]",
                ni = "[object Promise]",
                ri = "[object Set]",
                oi = "[object WeakMap]",
                ai = "[object DataView]",
                ii = Da(Qa),
                si = Da(qa),
                ci = Da($a),
                ui = Da(Za),
                li = Da(ei),
                di = Ra;
            (Qa && di(new Qa(new ArrayBuffer(1))) != ai || qa && di(new qa) != ti || $a && di($a.resolve()) != ni || Za && di(new Za) != ri || ei && di(new ei) != oi) && (di = function(e) {
                var t = Ra(e),
                    n = "[object Object]" == t ? e.constructor : void 0,
                    r = n ? Da(n) : "";
                if (r) switch (r) {
                    case ii:
                        return ai;
                    case si:
                        return ti;
                    case ci:
                        return ni;
                    case ui:
                        return ri;
                    case li:
                        return oi
                }
                return t
            }), xa.Uint8Array;
            var fi = Na ? Na.prototype : void 0;

            function pi(e) {
                var t = e.t,
                    n = e.contactName,
                    r = e.contactAvatar,
                    o = e.lastMessage,
                    a = e.onClick,
                    i = function(e) {
                        var t;
                        if (null == e || null === (t = e.content) || void 0 === t ? void 0 : t.text) return e.content.text;
                        switch (null == e ? void 0 : e.messageType) {
                            case Ar:
                                var n;
                                return null == e || null === (n = e.content) || void 0 === n ? void 0 : n.text;
                            case Hr:
                                return "تصویر";
                            case Wr:
                                return "استیکر";
                            case Gr:
                                return "محصول";
                            case Vr:
                                return "پست";
                            case Mr:
                                return "پیام صوتی";
                            case qr:
                                return "اطلاع رسانی";
                            case zr:
                                return "غرفه";
                            case Pr:
                                return "کاربر";
                            case Yr:
                                return "پردازش سفارش";
                            case Xr:
                                return "ثبت تجربه";
                            case Fr:
                                return "ثبت رضایت";
                            case Dr:
                                return "استوری";
                            case Br:
                                return "ویدئو";
                            case Rr:
                                return "فایل";
                            default:
                                var r;
                                return (null == e || null === (r = e.content) || void 0 === r ? void 0 : r.text) || ""
                        }
                    }(o),
                    s = p.useSnackbar().hideSnackbar;
                return _.jsxs("div", {
                    className: ma,
                    style: {
                        opacity: t.visible ? 1 : 0,
                        transition: "all 0.3s ease",
                        transform: "translateY(".concat(t.visible ? 0 : -100, "%)")
                    },
                    onClick: a,
                    children: [_.jsx("div", {
                        className: ha,
                        children: _.jsxs("div", {
                            className: ba,
                            children: [_.jsx("div", {
                                className: ya,
                                children: _.jsx(M.default, {
                                    size: "40",
                                    src: r,
                                    alt: ""
                                })
                            }), _.jsxs("div", {
                                className: ga,
                                children: [_.jsx("p", {
                                    className: wa,
                                    children: n
                                }), _.jsx("p", {
                                    className: Ca,
                                    children: i
                                })]
                            })]
                        })
                    }), _.jsx("div", {
                        className: Ea,
                        onClick: function(e) {
                            e.stopPropagation(), s(t.id)
                        },
                        children: _.jsx(F.default, {
                            size: "24",
                            className: Sa,
                            icon: "bi-close"
                        })
                    })]
                })
            }

            function _i(e) {
                var t = e.children,
                    n = v.useDalanActions(),
                    r = n.setIsLoggedIn,
                    o = n.setCurrentUser,
                    a = n.setFeatureFlags,
                    i = n.setSocketMessages,
                    c = n.setSocketConnected,
                    u = n.setUnseenMessages,
                    l = n.setChatSocketMessages,
                    d = v.dalanMapGetters(["user", "target", "options", "isLoggedIn"]),
                    _ = d.target,
                    m = d.options,
                    h = d.isLoggedIn,
                    b = d.user,
                    y = da(function(e) {
                        return e.actions
                    }),
                    g = y.updateUnseenMessageCount,
                    w = function() {
                        return dr(["feature-flags"], function() {
                            return _async_to_generator(function() {
                                var e, t;
                                return _ts_generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, Er.get("/api_v1.0/flags/chat_config?parse-data=true")];
                                        case 1:
                                            return e = n.sent(), t = e.value, [2, s.camelize(t)]
                                    }
                                })
                            })()
                        }, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                    }({
                        initialData: fa,
                        enabled: !!(null == m ? void 0 : m.featureFlagFetch),
                        placeholderData: fa
                    }),
                    C = w.data,
                    E = function() {
                        var e, t, n = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "dalan-chat-broadcast-channel",
                                    t = _sliced_to_array(f.useState(!1), 2),
                                    n = t[0],
                                    r = t[1],
                                    o = _sliced_to_array(f.useState(new Set), 2),
                                    a = o[0],
                                    i = o[1],
                                    c = p.useEmitter(),
                                    u = c.subEvent,
                                    l = c.offEvent,
                                    d = f.useRef(null),
                                    _ = f.useRef("client_".concat(Date.now(), "_").concat(Math.random().toString(36).slice(2, 11), "_").concat(Math.floor(1e3 * Math.random()))),
                                    v = f.useRef(Date.now()),
                                    m = f.useRef(null),
                                    h = f.useRef(null),
                                    b = f.useRef(!1),
                                    y = f.useCallback(function() {
                                        try {
                                            var t = s.bsLocalStorage.getItem("".concat(e, "_client_registry"));
                                            return t ? JSON.parse(t) : {}
                                        } catch (e) {
                                            return {}
                                        }
                                    }, [e]),
                                    g = f.useCallback(function(t) {
                                        try {
                                            s.bsLocalStorage.setItem("".concat(e, "_client_registry"), JSON.stringify(t))
                                        } catch (e) {
                                            console.warn("Failed to update client registry:", e)
                                        }
                                    }, [e]),
                                    w = f.useCallback(function() {
                                        try {
                                            var t = s.bsLocalStorage.getItem("".concat(e, "_connection_status"));
                                            return t ? JSON.parse(t) : {
                                                isConnected: !1,
                                                lastUpdate: 0,
                                                leaderId: null
                                            }
                                        } catch (e) {
                                            return {
                                                isConnected: !1,
                                                lastUpdate: 0,
                                                leaderId: null
                                            }
                                        }
                                    }, [e]),
                                    C = f.useCallback(function(t) {
                                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                        try {
                                            var o = {
                                                isConnected: t,
                                                lastUpdate: Date.now(),
                                                leaderId: r || (n ? _.current : null)
                                            };
                                            s.bsLocalStorage.setItem("".concat(e, "_connection_status"), JSON.stringify(o))
                                        } catch (e) {
                                            console.warn("Failed to update connection status:", e)
                                        }
                                    }, [e, n]),
                                    E = f.useCallback(function() {
                                        var e = y(),
                                            t = Date.now(),
                                            n = {};
                                        return Object.entries(e).forEach(function(e) {
                                            var r = _sliced_to_array(e, 2),
                                                o = r[0],
                                                a = r[1];
                                            t - a.lastSeen < 12e3 && (n[o] = a)
                                        }), g(n), n
                                    }, [y, g]),
                                    S = f.useCallback(function() {
                                        if (b.current) return null;
                                        b.current = !0;
                                        try {
                                            var e = E(),
                                                t = Object.keys(e);
                                            if (0 === t.length) return r(!1), i(new Set), C(!1, null), null;
                                            i(new Set(t));
                                            var n = t[0],
                                                o = e[n].timestamp;
                                            t.forEach(function(t) {
                                                e[t].timestamp < o && (o = e[t].timestamp, n = t)
                                            });
                                            var a = n === _.current;
                                            r(a);
                                            var s = w();
                                            return C(s.isConnected, n), pa(d.current, {
                                                leaderId: n,
                                                timestamp: Date.now(),
                                                type: "LEADER_SELECTED",
                                                fromClientId: _.current
                                            }), n
                                        } finally {
                                            b.current = !1
                                        }
                                    }, [E, w, C]),
                                    T = f.useCallback(function() {
                                        var e = y();
                                        e[_.current] = {
                                            lastSeen: Date.now(),
                                            timestamp: v.current
                                        }, g(e), pa(d.current, {
                                            type: "HEARTBEAT",
                                            timestamp: Date.now(),
                                            clientId: _.current,
                                            fromClientId: _.current
                                        })
                                    }, [y, g]),
                                    j = f.useCallback(function(e) {
                                        return d.current ? pa(d.current, _object_spread_props(_object_spread({}, e), {
                                            timestamp: Date.now(),
                                            fromClientId: _.current
                                        })) : (console.warn("Broadcast channel not available"), !1)
                                    }, []),
                                    x = f.useCallback(function(e) {
                                        return j({
                                            data: e,
                                            type: "WEBSOCKET_MESSAGE"
                                        })
                                    }, [j]),
                                    N = f.useCallback(function(e) {
                                        return j({
                                            data: e,
                                            type: "WARNING_MESSAGE"
                                        })
                                    }, [j]),
                                    I = f.useCallback(function(e) {
                                        return C(e), j({
                                            isConnected: e,
                                            type: "CONNECTION_STATUS"
                                        })
                                    }, [j, C]),
                                    k = f.useCallback(function() {
                                        pa(d.current, {
                                            timestamp: Date.now(),
                                            fromClientId: _.current,
                                            type: "REQUEST_CONNECTION_STATUS"
                                        })
                                    }, []),
                                    O = f.useRef({
                                        markAsRead: [],
                                        leaderChange: [],
                                        seenMessages: [],
                                        warningMessage: [],
                                        addMessageEvent: [],
                                        websocketMessage: [],
                                        connectionStatus: [],
                                        setUnseenMessages: [],
                                        publishToWebSocket: [],
                                        replaceMessageEvent: []
                                    }),
                                    L = f.useCallback(function(e) {
                                        var t = e.event,
                                            n = e.callback;
                                        return O.current[t] && O.current[t].push(n),
                                            function() {
                                                O.current[t] && (O.current[t] = O.current[t].filter(function(e) {
                                                    return e !== n
                                                }))
                                            }
                                    }, []),
                                    U = f.useCallback(function(e) {
                                        var t = e.event,
                                            n = e.callback;
                                        O.current[t] && (O.current[t] = O.current[t].filter(function(e) {
                                            return e !== n
                                        }))
                                    }, []),
                                    A = f.useCallback(function(e) {
                                        var t = e.event,
                                            n = e.data;
                                        O.current[t] && O.current[t].forEach(function(e) {
                                            try {
                                                e(n)
                                            } catch (e) {
                                                console.error("Error in ".concat(t, " event listener:"), e)
                                            }
                                        })
                                    }, []),
                                    R = f.useCallback(function(e) {
                                        if (!d.current) return console.warn("Broadcast channel not available"), !1;
                                        var t = w();
                                        return t.leaderId ? t.leaderId === _.current ? (A({
                                            event: "publishToWebSocket",
                                            data: {
                                                data: e,
                                                fromClientId: _.current
                                            }
                                        }), !0) : pa(d.current, {
                                            data: e,
                                            timestamp: Date.now(),
                                            fromClientId: _.current,
                                            type: "PUBLISH_TO_WEBSOCKET_REQUEST"
                                        }) : (console.warn("No leader available to publish message"), !1)
                                    }, [w, A]),
                                    P = f.useCallback(function() {
                                        var e = w(),
                                            t = y();
                                        (e.leaderId && !t[e.leaderId] || !e.leaderId && Object.keys(t).length > 0) && S()
                                    }, [w, y, S]);
                                return f.useEffect(function() {
                                    try {
                                        d.current = new BroadcastChannel(e);
                                        var t = y();
                                        t[_.current] = {
                                            lastSeen: Date.now(),
                                            timestamp: v.current
                                        }, g(t), d.current.addEventListener("message", function(e) {
                                            try {
                                                var t = e.data,
                                                    n = t.type,
                                                    o = t.fromClientId,
                                                    a = _object_without_properties(t, ["type", "fromClientId"]);
                                                if (o === _.current) return;
                                                switch (n) {
                                                    case "HEARTBEAT":
                                                        i(function(e) {
                                                            return new Set(_to_consumable_array(e).concat([a.clientId]))
                                                        });
                                                        break;
                                                    case "LEADER_SELECTED":
                                                        var s = a.leaderId === _.current;
                                                        r(s), A({
                                                            event: "leaderChange",
                                                            data: {
                                                                isLeader: s,
                                                                leaderId: a.leaderId
                                                            }
                                                        });
                                                        break;
                                                    case "WEBSOCKET_MESSAGE":
                                                        A({
                                                            data: a.data,
                                                            event: "websocketMessage"
                                                        });
                                                        break;
                                                    case "WARNING_MESSAGE":
                                                        A({
                                                            data: a.data,
                                                            event: "warningMessage"
                                                        });
                                                        break;
                                                    case "CONNECTION_STATUS":
                                                        A({
                                                            event: "connectionStatus",
                                                            data: {
                                                                isConnected: a.isConnected,
                                                                fromClientId: o
                                                            }
                                                        });
                                                        break;
                                                    case "REQUEST_CONNECTION_STATUS":
                                                        var c = w();
                                                        c.leaderId === _.current && pa(d.current, {
                                                            timestamp: Date.now(),
                                                            fromClientId: _.current,
                                                            type: "CONNECTION_STATUS_RESPONSE",
                                                            isConnected: c.isConnected
                                                        });
                                                        break;
                                                    case "CONNECTION_STATUS_RESPONSE":
                                                        A({
                                                            event: "connectionStatus",
                                                            data: {
                                                                fromClientId: o,
                                                                isResponse: !0,
                                                                isConnected: a.isConnected
                                                            }
                                                        });
                                                        break;
                                                    case "CLIENT_DISCONNECT":
                                                        i(function(e) {
                                                            var t = new Set(e);
                                                            return t.delete(a.clientId), t
                                                        }), w().leaderId === a.clientId && setTimeout(S, 50);
                                                        break;
                                                    case "LEADER_VERIFICATION_REQUEST":
                                                        w().leaderId === _.current && pa(d.current, {
                                                            timestamp: Date.now(),
                                                            leaderId: _.current,
                                                            fromClientId: _.current,
                                                            type: "LEADER_VERIFICATION_RESPONSE"
                                                        });
                                                        break;
                                                    case "PUBLISH_TO_WEBSOCKET_REQUEST":
                                                        w().leaderId === _.current && A({
                                                            event: "publishToWebSocket",
                                                            data: {
                                                                fromClientId: o,
                                                                data: a.data
                                                            }
                                                        });
                                                        break;
                                                    default:
                                                        a.customType && A({
                                                            data: a,
                                                            event: a.customType
                                                        })
                                                }
                                            } catch (e) {
                                                console.error("Error handling broadcast message:", e)
                                            }
                                        });
                                        var n = 100 * Math.random() + 50;
                                        setTimeout(S, n), setTimeout(k, n + 100), T(), m.current = setInterval(T, 3e3);
                                        var o = setInterval(P, 5e3),
                                            a = function() {
                                                try {
                                                    pa(d.current, {
                                                        timestamp: Date.now(),
                                                        type: "CLIENT_DISCONNECT",
                                                        clientId: _.current,
                                                        fromClientId: _.current
                                                    });
                                                    var e = y();
                                                    delete e[_.current], g(e);
                                                    var t = w();
                                                    t.leaderId === _.current && t.isConnected && (C(!1, null), pa(d.current, {
                                                        isConnected: !1,
                                                        timestamp: Date.now(),
                                                        type: "CONNECTION_STATUS",
                                                        fromClientId: _.current
                                                    }))
                                                } catch (e) {
                                                    console.error("Error during unload:", e)
                                                }
                                            };
                                        window.addEventListener("beforeunload", a), window.addEventListener("unload", a);
                                        var s = function() {
                                            try {
                                                document.hidden || (T(), setTimeout(P, 100))
                                            } catch (e) {
                                                console.error("Error handling visibility change:", e)
                                            }
                                        };
                                        return document.addEventListener("visibilitychange", s),
                                            function() {
                                                try {
                                                    m.current && clearInterval(m.current), h.current && clearTimeout(h.current), o && clearInterval(o), a(), d.current && d.current.close(), window.removeEventListener("beforeunload", a), window.removeEventListener("unload", a), document.removeEventListener("visibilitychange", s)
                                                } catch (e) {
                                                    console.error("Error during cleanup:", e)
                                                }
                                            }
                                    } catch (e) {
                                        console.error("Error initializing broadcast channel:", e)
                                    }
                                }, [e, y, g, S, T, A, k, w, C, P]), f.useEffect(function() {
                                    try {
                                        return u(eo, L, {
                                                autoOff: !1
                                            }), u(Qr, j, {
                                                autoOff: !1
                                            }),
                                            function() {
                                                l(eo, L), l(Qr, j)
                                            }
                                    } catch (e) {
                                        console.error("Error setting up event listeners:", e)
                                    }
                                }, [L, j, l, u]), {
                                    isLeader: n,
                                    selectLeader: S,
                                    sendHeartbeat: T,
                                    broadcastToAll: j,
                                    connectedClients: a,
                                    addEventListener: L,
                                    removeEventListener: U,
                                    broadcastWarningMessage: N,
                                    requestConnectionStatus: k,
                                    sendToLeaderForPublishing: R,
                                    broadcastWebsocketMessage: x,
                                    broadcastConnectionStatus: I,
                                    clientId: _.current,
                                    broadcastChannel: d.current
                                }
                            }(),
                            r = n.isLeader,
                            o = n.connectedClients,
                            a = n.clientId,
                            i = n.broadcastWebsocketMessage,
                            c = n.broadcastWarningMessage,
                            u = n.broadcastConnectionStatus,
                            l = n.addEventListener,
                            d = n.broadcastToAll,
                            _ = n.requestConnectionStatus,
                            m = n.sendToLeaderForPublishing,
                            h = p.useEmitter(),
                            b = h.emitEvent,
                            y = h.subEvent,
                            g = function() {
                                var e = v.dalanMapGetters(["injection"]).injection,
                                    t = f.useRef(e);
                                f.useEffect(function() {
                                    t.current = e
                                }, [e]);
                                var n = f.useCallback(function(e, n) {
                                    var r = t.current;
                                    (null == r ? void 0 : r.publishEvent) ? r.publishEvent(e, n): console.warn("publishEvent method not provided!!!")
                                }, []);
                                return {
                                    publishEvent: n
                                }
                            }(),
                            w = g.publishEvent,
                            C = v.useDalanActions().setChatSocketMessages,
                            E = v.dalanMapGetters(["currentUser", "featureFlags"]),
                            S = E.currentUser,
                            T = E.featureFlags,
                            j = function() {
                                var e = p.useEmitter().emitEvent,
                                    t = v.useDalanActions().setUnseenMessages,
                                    n = v.dalanMapGetters(["currentUser", "unseenMessages", "currentChat", "toastOptions"]),
                                    r = n.currentUser,
                                    o = n.unseenMessages,
                                    a = n.currentChat,
                                    i = n.toastOptions,
                                    s = f.useRef(a),
                                    c = f.useRef(i);
                                f.useEffect(function() {
                                    s.current = a
                                }, [a]), f.useEffect(function() {
                                    c.current = i
                                }, [i]);
                                var u = f.useCallback(function(n) {
                                        var r, o = _object_spread_props(_object_spread({}, n), {
                                            contact: _object_spread({}, Fo(n.contact))
                                        });
                                        e(ao, o), e(Kr, o), (null === (r = c.current) || void 0 === r ? void 0 : r.enabled) && e($r, o), t(function(e) {
                                            return _object_spread_props(_object_spread({}, e), {
                                                chat: e.chat + 1
                                            })
                                        })
                                    }, [e, o, t]),
                                    l = f.useCallback(function(t) {
                                        var n;
                                        (null === (n = s.current) || void 0 === n ? void 0 : n.id) === t.chatId && e(Jr, t)
                                    }, [e]),
                                    d = f.useCallback(function(n) {
                                        var o, a = n.chatId,
                                            i = n.seenAt,
                                            c = n.receiver,
                                            u = n.lastSeenMessageId;
                                        String(c) === String(null == r ? void 0 : r.id) ? (t(function(e) {
                                            var t;
                                            return _object_spread_props(_object_spread({}, e), {
                                                chat: Math.max(e.chat - ((null === (t = s.current) || void 0 === t ? void 0 : t.unseenMessageCount) || 0), 0)
                                            })
                                        }), e(ro, {
                                            chatId: a,
                                            chatUpdate: function(e) {
                                                return _object_spread_props(_object_spread({}, e), {
                                                    unseenMessageCount: 0,
                                                    markedAsUnread: !1,
                                                    lastSeenId: u,
                                                    lastMessage: _object_spread_props(_object_spread({}, e.lastMessage), {
                                                        seenAt: i
                                                    })
                                                })
                                            }
                                        }), (null === (o = s.current) || void 0 === o ? void 0 : o.id) === a && e(no, {
                                            chatId: a,
                                            seenAt: i,
                                            lastSeenId: u
                                        })) : e(to, {
                                            chatId: a,
                                            seenAt: i,
                                            lastSeenId: u
                                        })
                                    }, [null == r ? void 0 : r.id, t, e]),
                                    _ = f.useCallback(function(t) {
                                        e(oo, {
                                            chatId: t.chatId,
                                            messageIds: t.messageIds,
                                            lastSeenMessageId: t.lastSeenMessageId
                                        })
                                    }, [e]),
                                    m = f.useCallback(function(e) {
                                        if ((null == e ? void 0 : e.type) && (null == e ? void 0 : e.data)) {
                                            var t = e.type,
                                                n = e.data;
                                            switch (t) {
                                                case io:
                                                    u(n);
                                                    break;
                                                case co:
                                                    l(n);
                                                    break;
                                                case uo:
                                                    _(n);
                                                    break;
                                                case so:
                                                    d(n);
                                                    break;
                                                default:
                                                    console.warn("Unknown socket message type:", t)
                                            }
                                        } else console.warn("Invalid socket message format:", e)
                                    }, [d, u, l, _]);
                                return {
                                    handleChatSeen: d,
                                    handleNewMessage: u,
                                    processSocketMessage: m,
                                    handleUpdateLastSeenId: _
                                }
                            }(),
                            x = j.processSocketMessage,
                            N = null == S ? void 0 : S.id,
                            I = !!N && (null == T || null === (e = T.features) || void 0 === e ? void 0 : e.chat) && (null == T || null === (t = T.features) || void 0 === t ? void 0 : t.websocket),
                            k = function() {
                                return dr(["centrifuge-token"], _o, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                            }({
                                enabled: I && r
                            }),
                            L = k.data,
                            U = _sliced_to_array(f.useState({}), 2),
                            A = U[0],
                            R = U[1],
                            P = _sliced_to_array(f.useState([]), 2),
                            M = P[0],
                            F = P[1],
                            B = _sliced_to_array(f.useState(!1), 2),
                            D = B[0],
                            X = B[1],
                            z = _sliced_to_array(f.useState(null), 2),
                            G = z[0],
                            W = z[1],
                            H = f.useRef(null),
                            V = f.useRef(!1),
                            q = f.useRef(!1);
                        f.useEffect(function() {
                            if (null === H.current) try {
                                H.current = new O.Centrifuge("".concat(_r.WebsocketUrl, "/connection/websocket")), W(null)
                            } catch (e) {
                                console.error("Failed to initialize Centrifuge (likely due to localStorage being disabled):", e), W(e), H.current = null
                            }
                        }, []);
                        var Y = f.useCallback(function() {
                                X(!0), u(!0)
                            }, [u]),
                            K = f.useCallback(function() {
                                X(!1), u(!1)
                            }, [u]),
                            J = f.useCallback(function(e) {
                                var t = e.data,
                                    n = s.camelize("string" == typeof t ? JSON.parse(t) : t);
                                F(function(e) {
                                    return _to_consumable_array(e).concat([n])
                                }), x(n), i(n)
                            }, [F, x, i]),
                            Q = f.useCallback(function(e) {
                                var t = e.data;
                                R(function(e) {
                                    var n = _object_spread({}, e);
                                    t.type === va.CHAT_PRIVATE_WARN.description && (n = _object_spread_props(_object_spread({}, n), _define_property({}, t.data.chat_id, _object_spread_props(_object_spread({}, t), {
                                        shouldShow: !0
                                    }))));
                                    try {
                                        s.bsLocalStorage.setItem(_a, JSON.stringify(_define_property({}, va.CHAT_PRIVATE_WARN.description, _object_spread({}, n))))
                                    } catch (e) {
                                        console.warn("Failed to save warning message to localStorage:", e)
                                    }
                                    return C(_object_spread({}, n)), w("showWarningInChat", {
                                        type: t.type,
                                        chatId: t.data.chat_id
                                    }), _object_spread({}, n)
                                }), c(t)
                            }, [c, C, w]),
                            $ = f.useCallback(function() {
                                if (I && L && N && r && !q.current && H.current)
                                    if (G) console.warn("Cannot initialize WebSocket due to Centrifuge initialization error:", G);
                                    else {
                                        q.current = !0;
                                        try {
                                            H.current.setToken(L.data), H.current.removeAllListeners("publication"), H.current.on("publication", function(e) {
                                                var t = e.channel,
                                                    n = e.data;
                                                t === "personal:#".concat(N) && J({
                                                    data: n
                                                })
                                            });
                                            var e = H.current.getSubscription("public:USER_".concat(N, ":warn"));
                                            if (e) e.on("publication", Q), e.subscribe();
                                            else {
                                                var t = H.current.newSubscription("public:USER_".concat(N, ":warn"));
                                                t.on("publication", Q), t.subscribe()
                                            }
                                            H.current.connect()
                                        } catch (e) {
                                            console.error("Failed to initialize WebSocket:", e), q.current = !1
                                        }
                                    }
                            }, [I, L, N, r, J, Q, G]),
                            Z = f.useCallback(function() {
                                if (H.current && H.current.state === xr) try {
                                    H.current.disconnect(), X(!1)
                                } catch (e) {
                                    console.error("Failed to disconnect WebSocket:", e)
                                }
                                q.current = !1
                            }, []),
                            ee = f.useCallback(function(e) {
                                var t = e.channel,
                                    n = void 0 === t ? "personal:#".concat(N) : t,
                                    o = e.payload;
                                if (r) {
                                    if (!H.current || H.current.state !== xr) return void console.warn("Centrifuge is not connected");
                                    try {
                                        H.current.publish(n, JSON.stringify(s.snakize(o)))
                                    } catch (e) {
                                        console.error("Failed to publish message", e)
                                    }
                                } else try {
                                    m(o)
                                } catch (e) {
                                    console.error("Failed to publish via leader:", e)
                                }
                            }, [r, m, N]);
                        return f.useEffect(function() {
                            if (r) {
                                var e = l({
                                    event: "publishToWebSocket",
                                    callback: function(e) {
                                        var t, n = e.data;
                                        if ((null === (t = H.current) || void 0 === t ? void 0 : t.state) === xr) try {
                                            ee({
                                                channel: "personal:#".concat(N),
                                                payload: n
                                            })
                                        } catch (e) {
                                            console.error("Failed to publish to WebSocket:", e)
                                        } else console.warn("WebSocket not connected, cannot publish message")
                                    }
                                });
                                return e
                            }
                        }, [r, l, ee, N]), f.useEffect(function() {
                            y(Zr, ee)
                        }, [b, ee]), f.useEffect(function() {
                            var e = l({
                                    event: "websocketMessage",
                                    callback: function(e) {
                                        F(function(t) {
                                            return _to_consumable_array(t).concat([e])
                                        }), x(e)
                                    }
                                }),
                                t = l({
                                    event: "warningMessage",
                                    callback: function(e) {
                                        R(function(t) {
                                            var n = _object_spread({}, t);
                                            e.type === va.CHAT_PRIVATE_WARN.description && (n = _object_spread_props(_object_spread({}, n), _define_property({}, e.data.chat_id, _object_spread_props(_object_spread({}, e), {
                                                shouldShow: !0
                                            }))));
                                            try {
                                                s.bsLocalStorage.setItem(_a, JSON.stringify(_define_property({}, va.CHAT_PRIVATE_WARN.description, _object_spread({}, n))))
                                            } catch (e) {
                                                console.warn("Failed to save warning message to localStorage:", e)
                                            }
                                            return C(_object_spread({}, n)), w("showWarningInChat", {
                                                chatId: e.data.chat_id,
                                                type: e.type
                                            }), _object_spread({}, n)
                                        })
                                    }
                                }),
                                n = l({
                                    event: "connectionStatus",
                                    callback: function(e) {
                                        var t = e.isConnected;
                                        void 0 !== t && X(t)
                                    }
                                });
                            return function() {
                                e(), t(), n()
                            }
                        }, [l, b, C, w]), f.useEffect(function() {
                            r || V.current || (V.current = !0, setTimeout(function() {
                                _()
                            }, 300))
                        }, [r, _]), f.useEffect(function() {
                            r && I && L && N && !G ? $() : r || Z()
                        }, [r, I, L, N, $, Z, G]), f.useEffect(function() {
                            if (H.current) return H.current.on(xr, Y), H.current.on(Nr, K),
                                function() {
                                    H.current && (H.current.off(xr, Y), H.current.off(Nr, K))
                                }
                        }, [Y, K]), f.useEffect(function() {
                            return l({
                                event: "leaderChange",
                                callback: function(e) {
                                    e.isLeader ? I && L && N && !G && setTimeout($, 100) : Z(), V.current = !1
                                }
                            })
                        }, [l, I, L, N, $, Z, G]), {
                            messages: M,
                            firstTab: r,
                            clientId: a,
                            broadcastToAll: d,
                            warningMessages: A,
                            publishToSocket: ee,
                            connectedClients: o,
                            addEventListener: l,
                            centrifugeError: G,
                            isConnected: !G && D
                        }
                    }(),
                    S = E.messages,
                    T = E.warningMessages,
                    j = E.isConnected,
                    x = E.addEventListener;
                f.useEffect(function() {
                        l(T)
                    }, [T]), f.useEffect(function() {
                        c(j)
                    }, [j]), f.useEffect(function() {
                        i(S)
                    }, [S]), f.useEffect(function() {
                        C && a(C)
                    }, [C]), f.useEffect(function() {
                        r(h)
                    }, [h]), f.useEffect(function() {
                        var e = x("setUnseenMessages", function(e) {
                            var t = e.data;
                            u(t)
                        });
                        return function() {
                            e()
                        }
                    }, [x, u]),
                    function() {
                        dr(["unseen-messages-count"], mo, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                    }({
                        enabled: !!h,
                        refetchInterval: 3e5,
                        onSuccess: function(e) {
                            u(function(t) {
                                return _object_spread_props(_object_spread({}, t), {
                                    chat: e.unseenMessageCount
                                })
                            })
                        }
                    }),
                    function() {
                        dr(["notif-count"], function() {
                            return Tr.get("/api_v1.0/user/notifications/un_read_count")
                        }, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                    }({
                        enabled: !!h,
                        onSuccess: function(e) {
                            g(e), u(function(t) {
                                return _object_spread_props(_object_spread({}, t), {
                                    notification: e.count
                                })
                            })
                        }
                    });
                var N = function() {
                        return dr(["current-user"], jr, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                    }({
                        enabled: !(!h || !(null == m ? void 0 : m.currentUserFetch)),
                        onError: function(e) {
                            var t, n;
                            403 === (null == e || null === (t = e.response) || void 0 === t ? void 0 : t.status) && "staging" === _ && (s.isProduction() ? window.location = (null === (n = window) || void 0 === n ? void 0 : n.location.host.endsWith("dev")) ? "https://basalam.dev/accounts/login?prev=https%3A%2F%2Fdalan.basalam.dev" : "https://basalam.com/accounts/login?prev=https%3A%2F%2Fdalan.basalam.com" : "/login" !== window.location.pathname && (window.location = "/login"))
                        }
                    }),
                    I = N.data;
                return f.useEffect(function() {
                    o((null == m ? void 0 : m.currentUserFetch) ? I : b)
                }, [null == m ? void 0 : m.currentUserFetch, I, b]), t
            }
            fi && fi.valueOf, Ja && Ja.isMap, Ja && Ja.isSet, t.O = function(e) {
                var t = e.user,
                    n = e.target,
                    r = e.children,
                    o = e.injection,
                    a = e.isLoggedIn,
                    i = e.featureFlags,
                    s = e.pagesBasePath,
                    u = void 0 === s ? "/chat" : s,
                    l = e.options,
                    d = void 0 === l ? {
                        currentUserFetch: !0,
                        featureFlagFetch: !0,
                        toastOptions: {
                            enabled: !0,
                            duration: 4e3,
                            position: "top-right",
                            onOpen: function(e) {
                                var t = e.identifier;
                                window.location.href = "/chat/".concat(t)
                            }
                        }
                    } : l,
                    m = v.useDalanActions().setDefaultValue,
                    h = p.useEmitter().subEvent,
                    b = p.useSnackbar(),
                    y = b.showCustomSnackbar,
                    g = b.hideSnackbar,
                    w = f.useMemo(function() {
                        return new c.QueryClient({
                            defaultOptions: {
                                queries: {
                                    retry: !1,
                                    refetchOnWindowFocus: !1,
                                    refetchOnMount: !1
                                }
                            }
                        })
                    }, []);
                f.useEffect(function() {
                    m({
                        user: t,
                        target: n,
                        options: d,
                        injection: o,
                        isLoggedIn: a,
                        pagesBasePath: u,
                        toastOptions: d.toastOptions || {},
                        featureFlags: i || fa
                    })
                }, [t, n, d, o, a, u, i, d.toastOptions]);
                var C = f.useCallback(function(e) {
                    var t, n, r, o = e.chatData,
                        a = e.t;
                    return _.jsx(pi, {
                        t: a,
                        contactName: null === (t = o.contact) || void 0 === t ? void 0 : t.name,
                        contactAvatar: null === (r = o.contact) || void 0 === r || null === (n = r.avatar) || void 0 === n ? void 0 : n.small,
                        lastMessage: o.lastMessage,
                        onClick: function() {
                            var e, t;
                            (null === (e = d.toastOptions) || void 0 === e ? void 0 : e.onOpen) && d.toastOptions.onOpen({
                                t: a,
                                identifier: null === (t = o.contact) || void 0 === t ? void 0 : t.identifier
                            }), g(a.id)
                        }
                    })
                }, [d.toastOptions, u]);
                return f.useEffect(function() {
                    h($r, function(e) {
                        var t, n;
                        y(function(t) {
                            return C({
                                chatData: e,
                                t: t
                            })
                        }, {
                            position: null === (t = d.toastOptions) || void 0 === t ? void 0 : t.position,
                            duration: null === (n = d.toastOptions) || void 0 === n ? void 0 : n.duration
                        })
                    })
                }, [C, h]), _.jsx(yo, {
                    children: _.jsxs(c.QueryClientProvider, {
                        client: w,
                        children: [_.jsx(_i, {}), r, _.jsx(lo, {
                            children: _.jsx(ua, {})
                        })]
                    })
                })
            }
        },
        55253: function(e, t, n) {
            var r = n(32930),
                o = n(69389),
                a = n(52545),
                i = n(50874),
                s = n(27434);
            n(7095), n(11966), n(36350), n(5164), n(99249);
            var c = {
                    lazy: i.bool,
                    src: i.string,
                    alt: i.string,
                    onLoad: i.func,
                    onClick: i.func,
                    className: i.string,
                    hasAddStoryButton: i.bool,
                    onAddStoryButtonClick: i.func,
                    storyStatus: i.oneOf(["seen", "unseen", "none"]),
                    storyRingColor: i.oneOf(["primary", "secondary"]),
                    status: i.oneOf(["offline", "recently", "online"]).isRequired,
                    size: i.oneOf(["28", "32", "40", "44", "48", "56", "64", "72", "96"]).isRequired
                },
                u = function(e) {
                    var t = e.src,
                        n = e.alt,
                        i = e.size,
                        c = e.status,
                        u = e.onLoad,
                        l = e.onClick,
                        d = e.className,
                        f = e.lazy,
                        p = void 0 !== f && f,
                        _ = e.storyStatus,
                        v = void 0 === _ ? "none" : _,
                        m = e.onAddStoryButtonClick,
                        h = e.hasAddStoryButton,
                        b = void 0 !== h && h,
                        y = e.storyRingColor,
                        g = void 0 === y ? "primary" : y,
                        w = s.useRef(null),
                        C = _sliced_to_array(s.useState(!1), 2),
                        E = C[0],
                        S = C[1];
                    return s.useEffect(function() {
                        var e = w.current;
                        if (e) {
                            var t = e.complete,
                                n = e.naturalHeight;
                            t && !n && S(!0)
                        }
                    }, []), r.jsxs("div", {
                        onClick: l,
                        className: o.clsx("bs-avatar bs-avatar--".concat(i, " bs-avatar--").concat(v), d),
                        children: ["none" !== v && r.jsxs("svg", {
                            className: "bs-avatar__story-ring",
                            children: [r.jsxs("linearGradient", {
                                id: "".concat(v, "-").concat(g),
                                x1: "0",
                                y1: "0",
                                x2: "1",
                                y2: "1",
                                children: [r.jsx("stop", {
                                    className: o.clsx("bs-avatar__gradient-first-stop bs-avatar__gradient-first-stop--".concat(g)),
                                    offset: "64%"
                                }), r.jsx("stop", {
                                    className: o.clsx("bs-avatar__gradient-first-stop bs-avatar__gradient-second-stop--".concat(g)),
                                    offset: "100%"
                                })]
                            }), r.jsx("g", {
                                children: r.jsx("circle", {
                                    className: "bs-avatar__story-ring-circle",
                                    cx: "50%",
                                    cy: "50%",
                                    stroke: "url(#".concat(v, "-").concat(g, ")"),
                                    fill: "transparent"
                                })
                            })]
                        }), t && !E ? r.jsx("img", {
                            ref: w,
                            src: t,
                            onLoad: u,
                            alt: null != n ? n : "",
                            className: "bs-avatar__image",
                            loading: p ? "lazy" : void 0,
                            onError: function() {
                                return S(!0)
                            }
                        }) : r.jsx("div", {
                            className: "bs-avatar__icon-bg",
                            children: r.jsx("i", {
                                className: "bi bi-no-avatar bs-avatar__icon"
                            })
                        }), b && r.jsx("div", {
                            onClick: function(e) {
                                e.stopPropagation(), null == m || m(e)
                            },
                            className: "bs-avatar__add-story-button",
                            children: r.jsx("span", {
                                className: "bi-plus bs-avatar__add-story-button-icon"
                            })
                        }), ("online" === c || "recently" === c) && r.jsx("div", {
                            className: "bs-avatar__badge",
                            children: r.jsx(a, {
                                label: "online" === c ? "آنلاین" : "به تازگی آنلاین بوده است",
                                size: ["28", "32", "40"].includes(i) ? "sm" : "md",
                                children: r.jsx("span", {
                                    className: "bs-avatar__badge-bullet bs-avatar__badge-bullet--".concat(c, " ")
                                })
                            })
                        })]
                    })
                };
            u.propTypes = c, u.defaultProps = {
                size: "32",
                status: "offline",
                storyStatus: "none",
                showAddStoryButton: !1
            }, u.displayName = "BsAvatar";
            var l = s.memo(u);
            e.exports = l
        },
        81174: function(e, t, n) {
            var r = n(32930),
                o = n(69389),
                a = n(36350),
                i = n(5164),
                s = n(50874),
                c = n(27434),
                u = {
                    id: s.string,
                    min: s.number,
                    max: s.number,
                    title: s.node,
                    label: s.node,
                    suffix: s.node,
                    name: s.string,
                    type: s.string,
                    rows: s.number,
                    onBlur: s.func,
                    error: s.string,
                    onFocus: s.func,
                    disabled: s.bool,
                    readonly: s.bool,
                    autoSize: s.bool,
                    ltrInput: s.bool,
                    onChange: s.func,
                    autoFocus: s.bool,
                    isNumeric: s.bool,
                    caption: s.string,
                    tabIndex: s.number,
                    isRequired: s.bool,
                    maxLength: s.number,
                    isMultiline: s.bool,
                    suffixIcon: s.string,
                    isErrorFloat: s.bool,
                    placeholder: s.string,
                    captionIcon: s.string,
                    convertNumbers: s.bool,
                    autoComplete: s.string,
                    indentFirstLine: s.bool,
                    scrollAfterFocus: s.bool,
                    wrapperClassName: s.string,
                    showMaxLengthCounter: s.bool,
                    value: s.oneOfType([s.string, s.number]),
                    defaultValue: s.oneOfType([s.string, s.number])
                },
                l = c.forwardRef(function(e, t) {
                    var n = e.id,
                        s = e.min,
                        u = e.max,
                        l = e.name,
                        d = e.value,
                        f = e.title,
                        p = e.label,
                        _ = e.error,
                        v = e.suffix,
                        m = e.onBlur,
                        h = e.caption,
                        b = e.onFocus,
                        y = e.onChange,
                        g = e.rows,
                        w = void 0 === g ? 2 : g,
                        C = e.maxLength,
                        E = e.autoFocus,
                        S = e.suffixIcon,
                        T = e.isMultiline,
                        j = e.placeholder,
                        x = e.captionIcon,
                        N = e.size,
                        I = void 0 === N ? "md" : N,
                        k = e.defaultValue,
                        O = e.autoComplete,
                        L = e.tabIndex,
                        U = void 0 === L ? 0 : L,
                        A = e.type,
                        R = void 0 === A ? "text" : A,
                        P = e.align,
                        M = void 0 === P ? "right" : P,
                        F = e.autoSize,
                        B = void 0 === F || F,
                        D = e.ltrInput,
                        X = void 0 !== D && D,
                        z = e.wrapperClassName,
                        G = e.disabled,
                        W = void 0 !== G && G,
                        H = e.readonly,
                        V = void 0 !== H && H,
                        q = e.isNumeric,
                        Y = void 0 !== q && q,
                        K = e.isRequired,
                        J = void 0 !== K && K,
                        Q = e.isErrorFloat,
                        $ = void 0 !== Q && Q,
                        Z = e.convertNumbers,
                        ee = void 0 === Z || Z,
                        te = e.indentFirstLine,
                        ne = void 0 === te || te,
                        re = e.showMaxLengthCounter,
                        oe = void 0 === re || re,
                        ae = c.useId(),
                        ie = a.useFallbackRef(t),
                        se = c.useRef(null),
                        ce = c.useRef(null),
                        ue = _ || h,
                        le = n || "bs_input__".concat(ae),
                        de = _sliced_to_array(c.useState(!1), 2),
                        fe = de[0],
                        pe = de[1],
                        _e = T && ne && !!p && !X && "center" !== M,
                        ve = function(e) {
                            ee && (e.target.value = i.toEnglishDigits(e.target.value)), Y && (e.target.value = e.target.value.replace(/[^\d,.]/g, "")), T && B && ie.current && (ie.current.style.height = "auto", ie.current.style.height = "".concat(ie.current.scrollHeight, "px")), C && oe && ce.current && (e.target.value.length > C ? ce.current.classList.add("bs-input__counter--error") : ce.current.classList.remove("bs-input__counter--error"), ce.current.textContent = C - e.target.value.length + " کاراکتر"), null == y || y(e)
                        },
                        me = function(e) {
                            pe(!0), null == b || b(e)
                        },
                        he = function(e) {
                            pe(!1);
                            var t = e.target.value;
                            void 0 !== s && Number(t) < Number(s) && (e.target.value = "".concat(s), ve(e)), void 0 !== u && Number(t) > Number(u) && (e.target.value = "".concat(u), ve(e)), null == m || m(e)
                        },
                        be = o.clsx("bs-input", z, "bs-input--size-".concat(I), "bs-input--type-".concat(R), "bs-input--align-".concat(M), {
                            "bs-input--dir-ltr": X,
                            "bs-input--focused": fe,
                            "bs-input--readonly": V,
                            "bs-input--disabled": W,
                            "bs-input--has-title": !!f,
                            "bs-input--has-error": !!_,
                            "bs-input--has-indent": _e,
                            "bs-input--is-required": J,
                            "bs-input--is-multiline": T,
                            "bs-input--is-error-float": $
                        });
                    return c.useEffect(function() {
                        if (_e) {
                            var e = se.current ? se.current.offsetWidth + 10 : 0;
                            ie.current && (ie.current.style.textIndent = e ? "".concat(e, "px") : "")
                        }
                    }, [_e, ie]), c.useEffect(function() {
                        k && ie.current && (ie.current.value = String(k))
                    }, [k, ie]), r.jsxs("div", {
                        className: be,
                        "data-type": R,
                        children: [r.jsxs("div", {
                            className: "bs-input__head",
                            children: [f && r.jsx("p", {
                                className: "bs-input__title",
                                children: f
                            }), C && oe && r.jsx("p", {
                                ref: ce,
                                className: "bs-input__counter"
                            })]
                        }), r.jsxs("div", {
                            className: "bs-input__container",
                            children: [p && r.jsx("label", {
                                className: "bs-input__label",
                                htmlFor: le,
                                ref: se,
                                children: p
                            }), T ? r.jsx("textarea", {
                                ref: ie,
                                name: l,
                                rows: w,
                                id: le,
                                value: d,
                                tabIndex: U,
                                onBlur: he,
                                readOnly: V,
                                disabled: W,
                                onFocus: me,
                                maxLength: C,
                                autoFocus: E,
                                onChange: ve,
                                placeholder: j,
                                autoComplete: O,
                                className: "bs-input__input"
                            }) : r.jsx("input", {
                                min: s,
                                max: u,
                                ref: ie,
                                name: l,
                                type: R,
                                id: le,
                                value: d,
                                tabIndex: U,
                                onBlur: he,
                                readOnly: V,
                                disabled: W,
                                autoFocus: E,
                                maxLength: C,
                                onFocus: me,
                                onChange: ve,
                                placeholder: j,
                                autoComplete: O,
                                className: "bs-input__input"
                            }), (S || v) && r.jsxs("div", {
                                className: "bs-input__suffix",
                                children: [v && r.jsx("span", {
                                    children: v
                                }), S && r.jsx("i", {
                                    className: S
                                })]
                            }), ue && r.jsxs("p", {
                                className: "bs-input__caption",
                                children: [x && r.jsx("i", {
                                    className: x
                                }), r.jsx("span", {
                                    children: ue
                                })]
                            })]
                        })]
                    })
                });
            l.propTypes = u, l.displayName = "BsInput", e.exports = l
        },
        56855: function(e, t, n) {
            var r = n(32930),
                o = n(69389),
                a = n(50874),
                i = {
                    icon: a.string,
                    disabled: a.bool,
                    className: a.string,
                    size: a.oneOf(["sm", "md", "lg"]),
                    variant: a.oneOf(["fill", "text"]),
                    label: a.oneOfType([a.string, a.number]).isRequired,
                    color: a.oneOf(["primary", "black", "green", "blue", "dark-blue", "red", "yellow"])
                },
                s = function(e) {
                    var t = e.icon,
                        n = e.label,
                        a = e.className,
                        i = e.size,
                        s = void 0 === i ? "md" : i,
                        c = e.disabled,
                        u = void 0 !== c && c,
                        l = e.variant,
                        d = void 0 === l ? "text" : l,
                        f = e.color,
                        p = void 0 === f ? "primary" : f;
                    return r.jsxs("span", {
                        className: o.clsx(a, "bs-label", "bs-label--".concat(p, "-").concat(d), "bs-label--".concat(s), {
                            "bs-label--disabled": u
                        }),
                        children: [t && r.jsx("i", {
                            className: "".concat(t, " bs-label__icon")
                        }), n]
                    })
                };
            s.propTypes = i, s.displayName = "BsLabel", e.exports = s
        },
        77417: function(e, t, n) {
            var r = n(32930),
                o = n(69389),
                a = n(36350),
                i = n(7095),
                s = n(99249),
                c = n(5164),
                u = n(27434),
                l = n(50874);
            n(11966);
            var d = function(e) {
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, c.sleep(10)];
                                case 1:
                                    return t.sent(), e(), [2]
                            }
                        })
                    })()
                },
                f = function(e) {
                    var t = e.show,
                        n = e.coords,
                        l = e.onClose,
                        f = e.children,
                        p = e.anchorEl,
                        _ = e.className,
                        v = void 0 === _ ? "" : _,
                        m = e.transition,
                        h = void 0 === m ? "fade" : m,
                        b = e.getAwayThreshold,
                        y = void 0 === b ? 100 : b,
                        g = e.animationDuration,
                        w = void 0 === g ? 250 : g,
                        C = e.position,
                        E = void 0 === C ? "bottom-right" : C,
                        S = u.useId(),
                        T = u.useRef({
                            uid: S
                        }),
                        j = u.useRef(null),
                        x = u.useRef(null),
                        N = _sliced_to_array(u.useState(!1), 2),
                        I = N[0],
                        k = N[1],
                        O = u.useCallback(function(e) {
                            var t, r;
                            if ("number" == typeof(null == n ? void 0 : n.top) && "number" == typeof(null == n ? void 0 : n.left) && l) {
                                var o = y + ((null === (t = x.current) || void 0 === t ? void 0 : t.clientHeight) || 0),
                                    a = y + ((null === (r = x.current) || void 0 === r ? void 0 : r.clientWidth) || 0),
                                    i = e.pageY - n.top,
                                    s = e.pageX - n.left;
                                (i > o || i < -1 * o) && l(), (s > a || s < -1 * a) && l()
                            }
                        }, [null == n ? void 0 : n.top, null == n ? void 0 : n.left, y, l]);
                    return a.useIsomorphicEffect(function() {
                        return t ? (c.popupManager.setIsOpen(T.current), d(function() {
                                "number" == typeof(null == n ? void 0 : n.top) && "number" == typeof(null == n ? void 0 : n.left) && document.addEventListener("mousemove", O), j.current && (j.current.style.zIndex = "".concat(c.popupManager.getNewZIndex()))
                            })) : c.popupManager.setIsClosed(T.current, w),
                            function() {
                                document.removeEventListener("mousemove", O), c.popupManager.setIsClosed(T.current, w)
                            }
                    }, [t]), u.useEffect(function() {
                        t ? d(function() {
                            return k(!0)
                        }) : k(!1)
                    }, [t]), u.useEffect(function() {
                        var e = function(e) {
                            var t;
                            "Escape" === e.key && (null === (t = c.popupManager.topElements[0]) || void 0 === t ? void 0 : t.uid) === S && (null == l || l())
                        };
                        document.addEventListener("keydown", e);
                        var t = T.current;
                        return function() {
                            document.removeEventListener("keydown", e), c.popupManager.setIsClosed(t, w)
                        }
                    }, []), r.jsx(i, {
                        children: r.jsx(s.BsTransition, {
                            keepMounted: !0,
                            mounted: I,
                            transition: h,
                            duration: w,
                            onEnter: function() {
                                var e = x.current;
                                if (n) {
                                    if ("number" == typeof(null == n ? void 0 : n.top) && "number" == typeof(null == n ? void 0 : n.left) && e) {
                                        var t = e.offsetWidth,
                                            r = e.offsetHeight;
                                        n.left - t < 0 ? e.style.right = window.innerWidth - n.left - t + "px" : e.style.left = n.left - t + "px", n.top + r > window.innerHeight ? e.style.bottom = window.innerHeight - n.top + "px" : e.style.top = "".concat(n.top, "px")
                                    }
                                } else {
                                    var o = null == p ? void 0 : p.getBoundingClientRect(),
                                        a = _sliced_to_array(E.split("-"), 2),
                                        i = a[0],
                                        s = a[1],
                                        c = (null == o ? void 0 : o.bottom) || 0,
                                        u = window.innerWidth - ((null == o ? void 0 : o.right) || 0),
                                        l = (null == o ? void 0 : o.x) || 0,
                                        d = (null == o ? void 0 : o.y) || 0;
                                    if (!(null == e ? void 0 : e.style)) return;
                                    var f = e.clientWidth,
                                        _ = e.clientHeight;
                                    "right" === s && u + f < window.innerWidth || ((null == o ? void 0 : o.right) || 0) + f > window.innerWidth ? e.style.right = "".concat(u, "px") : e.style.left = "".concat(l, "px"), "bottom" === i && c + _ < window.innerHeight || d < _ ? e.style.top = "".concat(c, "px") : e.style.bottom = window.innerHeight - d + "px"
                                }
                            },
                            children: function(e) {
                                return r.jsxs("div", {
                                    className: o.clsx("bs-popover", {
                                        "bs-popover--visible": I
                                    }),
                                    ref: j,
                                    children: [r.jsx("div", {
                                        onClick: l,
                                        className: "bs-popover__wrapper"
                                    }), r.jsx("div", {
                                        style: e,
                                        ref: x,
                                        className: o.clsx(["bs-popover__content", _define_property({}, v, !!v)]),
                                        children: f
                                    })]
                                })
                            }
                        })
                    })
                },
                p = {
                    onClose: l.func,
                    children: l.node,
                    className: l.string,
                    transition: s.TransitionPropType,
                    show: l.bool.isRequired,
                    getAwayThreshold: l.number,
                    animationDuration: l.number,
                    position: l.oneOf(["top-left", "top-right", "bottom-left", "bottom-right"]),
                    anchorEl: l.oneOfType([l.element, l.object, l.func]),
                    coords: l.shape({
                        top: l.number.isRequired,
                        left: l.number.isRequired
                    })
                },
                _ = function(e) {
                    var t = e.show,
                        n = e.keepMounted,
                        o = void 0 !== n && n,
                        a = e.onClose,
                        i = _object_without_properties(e, ["show", "keepMounted", "onClose"]),
                        s = _sliced_to_array(u.useState(!1), 2),
                        c = s[0],
                        l = s[1],
                        d = _sliced_to_array(u.useState(!1), 2),
                        p = d[0],
                        _ = d[1],
                        v = u.useCallback(function() {
                            o || l(!1), _(!1), null == a || a()
                        }, [o, a]);
                    return u.useEffect(function() {
                        t !== p && (t ? (l(!0), _(!0)) : (_(!1), v()))
                    }, [t]), c ? r.jsx(f, _object_spread_props(_object_spread({}, i), {
                        show: p,
                        keepMounted: o,
                        onClose: v
                    })) : null
                };
            _.propTypes = p, _.displayName = "BsPopover", e.exports = _
        },
        70437: function(e, t, n) {
            var r = n(32930),
                o = n(69389),
                a = n(27434),
                i = n(36350),
                s = n(50874),
                c = {
                    waveColor: s.string,
                    className: s.string,
                    backgroundColor: s.string,
                    width: s.oneOfType([s.string, s.number]),
                    radius: s.oneOfType([s.string, s.number]),
                    height: s.oneOfType([s.string, s.number])
                },
                u = function(e) {
                    return "number" == typeof e ? "".concat(e, "px") : e
                },
                l = function(e) {
                    var t = e.width,
                        n = e.height,
                        s = e.className,
                        c = e.radius,
                        l = void 0 === c ? 4 : c,
                        d = e.waveColor,
                        f = void 0 === d ? "var(--gray-100)" : d,
                        p = e.backgroundColor,
                        _ = void 0 === p ? "var(--gray-050)" : p,
                        v = a.useRef(null),
                        m = i.useIntersectionObserver(),
                        h = m.observe,
                        b = m.unobserve,
                        y = m.isInViewport,
                        g = {
                            backgroundColor: _,
                            borderRadius: u(l),
                            "--skeleton-gradient-color": f,
                            width: t ? u(t) : void 0,
                            height: n ? u(n) : void 0
                        };
                    return a.useEffect(function() {
                        var e = v.current;
                        return e && h(e),
                            function() {
                                e && b(e)
                            }
                    }, []), r.jsx("div", {
                        ref: v,
                        className: o.clsx("bs-skeleton", s, {
                            "bs-skeleton--animate": y
                        }),
                        style: g
                    })
                };
            l.propTypes = c, l.displayName = "BsSkeleton";
            var d = a.memo(l);
            e.exports = d
        },
        52545: function(e, t, n) {
            var r, o, a = n(32930),
                i = n(69389),
                s = n(7095),
                c = n(5164),
                u = n(50874),
                l = n(99249),
                d = n(27434);
            n(11966), n(36350);
            var f = {
                    show: u.bool,
                    delay: u.number,
                    onClick: u.func,
                    disabled: u.bool,
                    timeout: u.number,
                    className: u.string,
                    tooltipClass: u.string,
                    onTooltipClick: u.func,
                    label: u.node.isRequired,
                    children: u.node.isRequired,
                    color: u.oneOf(["gray", "green"]),
                    size: u.oneOf(["sm", "md", "lg"]),
                    tag: u.oneOfType([u.element, u.string, u.func])
                },
                p = "hide-tooltip",
                _ = function() {
                    function e() {
                        _class_call_check(this, e), this.stacks = 0, this.initialized = !1, this.isVisible = !1
                    }
                    return _create_class(e, [{
                        key: "init",
                        value: function() {
                            this.stacks += 1, this.initEventListeners()
                        }
                    }, {
                        key: "onLeave",
                        value: function() {
                            this.isVisible && (this.isVisible = !1, e.dispatchHideEvent())
                        }
                    }, {
                        key: "onClick",
                        value: function() {
                            this.onLeave(), this.isVisible || e.dispatchHideEvent()
                        }
                    }, {
                        key: "onTooltipVisible",
                        value: function() {
                            this.isVisible = !0
                        }
                    }, {
                        key: "initEventListeners",
                        value: function() {
                            this.initialized || (r = this.onLeave.bind(this), o = this.onClick.bind(this), window.addEventListener("mousedown", r), window.addEventListener("mouseup", r), window.addEventListener("click", o), this.initialized = !0)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.stacks -= 1, !this.initialized || this.stacks > 0 || (window.removeEventListener("mousedown", r), window.removeEventListener("mouseup", r), window.removeEventListener("click", o))
                        }
                    }], [{
                        key: "dispatchHideEvent",
                        value: function() {
                            window.dispatchEvent(new Event(p))
                        }
                    }]), e
                }(),
                v = function() {
                    function e() {
                        var t = this;
                        _class_call_check(this, e), this.hoverTimeout = null, this.onLeave = null, this.eventHandler = function() {
                            var e, n;
                            return null === (e = (n = t).onLeave) || void 0 === e ? void 0 : e.call(n)
                        }
                    }
                    return _create_class(e, [{
                        key: "init",
                        value: function(e) {
                            this.onLeave = e, this.initEventListeners()
                        }
                    }, {
                        key: "initEventListeners",
                        value: function() {
                            window.addEventListener(p, this.eventHandler)
                        }
                    }, {
                        key: "clearTimeout",
                        value: function() {
                            this.hoverTimeout && window.clearTimeout(this.hoverTimeout)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e;
                            window.removeEventListener(p, this.eventHandler), window.clearTimeout(null !== (e = this.hoverTimeout) && void 0 !== e ? e : 0)
                        }
                    }]), e
                }(),
                m = new _,
                h = function(e) {
                    var t = e.show,
                        n = e.label,
                        r = e.onClick,
                        o = e.children,
                        u = e.className,
                        f = e.size,
                        p = void 0 === f ? "lg" : f,
                        _ = e.delay,
                        h = void 0 === _ ? 400 : _,
                        b = (e._tag, e.tooltipClass),
                        y = e.timeout,
                        g = void 0 === y ? null : y,
                        w = e.color,
                        C = void 0 === w ? "gray" : w,
                        E = e.onTooltipClick,
                        S = e.disabled,
                        T = void 0 !== S && S,
                        j = _sliced_to_array(d.useState(!1), 2),
                        x = j[0],
                        N = j[1],
                        I = d.useRef(null),
                        k = d.useRef(null),
                        O = d.useRef(null),
                        L = d.useRef(null),
                        U = d.useRef(null),
                        A = d.useMemo(function() {
                            return void 0 === t ? x : t
                        }, [x, t]),
                        R = function() {
                            T || (U.current && clearTimeout(U.current), U.current = setTimeout(function() {
                                void 0 === t && N(!0)
                            }, h))
                        },
                        P = d.useCallback(function() {
                            U.current && clearTimeout(U.current), void 0 === t && N(!1)
                        }, [t]),
                        M = new v,
                        F = d.useCallback(function() {
                            setTimeout(function() {
                                if (A && O.current && k.current) {
                                    var e = O.current.getBoundingClientRect(),
                                        t = !0,
                                        n = O.current.offsetWidth / 2,
                                        r = k.current.offsetWidth / 2,
                                        o = e.left + n - r,
                                        a = e.top - k.current.offsetHeight - 10;
                                    o < 5 ? o = 5 : o + k.current.offsetWidth > window.innerWidth - 20 && (o = window.innerWidth - k.current.offsetWidth - 20), a < 5 && (a = e.top + O.current.offsetHeight + 10, t = !1), k.current.style.top = "".concat(a, "px"), k.current.style.left = "".concat(o, "px"), k.current.style.zIndex = c.popupManager.getNewZIndex().toString(), k.current.dataset.bsTooltipTop = "".concat(t);
                                    var i = k.current.getBoundingClientRect(),
                                        s = O.current.getBoundingClientRect(),
                                        u = i.x + i.width / 2;
                                    if (u < s.left || u > s.right) {
                                        var l = s.x + s.width / 2;
                                        I.current && (I.current.style.right = i.right - l + "px")
                                    }
                                }
                            }, 0)
                        }, [A]),
                        B = d.useCallback(function() {
                            g && (L.current = setTimeout(function() {
                                P()
                            }, g))
                        }, [g, P]),
                        D = d.useCallback(function() {
                            "undefined" != typeof document && (A ? (m.onTooltipVisible(), F(), g && B(), window.addEventListener("scroll", F)) : window.removeEventListener("scroll", F))
                        }, [A, g, F, m, B]);
                    return d.useEffect(function() {
                        return m.init(), M.init(P),
                            function() {
                                "undefined" != typeof window && (m.destroy(), M.destroy(), window.removeEventListener("scroll", F), U.current && clearTimeout(U.current), L.current && clearTimeout(L.current))
                            }
                    }, []), d.useEffect(function() {
                        D()
                    }, [A]), a.jsxs("div", {
                        className: i.clsx("bs-tooltip-wrapper", {
                            "bs-tooltip-wrapper--disabled": T
                        }, u),
                        onMouseOver: R,
                        onFocus: R,
                        onTouchStart: R,
                        onMouseLeave: P,
                        onTouchEnd: P,
                        onTouchCancel: P,
                        onClick: function(e) {
                            return null == r ? void 0 : r(e)
                        },
                        onBlur: P,
                        ref: O,
                        children: [o, a.jsx(s, {
                            children: a.jsx(l.BsTransition, {
                                mounted: A,
                                transition: "fade",
                                duration: 400,
                                children: function(e) {
                                    return a.jsxs("div", {
                                        style: e,
                                        ref: k,
                                        role: "tooltip",
                                        className: i.clsx([b, "bs-tooltip", "bs-tooltip--".concat(p), "bs-tooltip--".concat(C), {
                                            "bs-tooltip--active": A
                                        }]),
                                        onClick: E,
                                        onKeyDown: E,
                                        children: [a.jsx("div", {
                                            className: "bs-tooltip__inner",
                                            children: n
                                        }), a.jsx("div", {
                                            className: "bs-tooltip__arrow",
                                            ref: I
                                        })]
                                    })
                                }
                            })
                        })]
                    })
                };
            h.propTypes = f, h.displayName = "BsTooltip", e.exports = h
        },
        99249: function(e, t, n) {
            var r = n(32930),
                o = n(36350),
                a = n(27434),
                i = n(50874),
                s = i.oneOfType([i.oneOf(["fade", "skew-up", "skew-down", "rotate-right", "rotate-left", "slide-down", "slide-up", "slide-right", "slide-left", "scale-y", "scale-x", "scale", "pop", "pop-top-left", "pop-top-right", "pop-bottom-left", "pop-bottom-right"]), i.shape({
                    common: i.object,
                    in: i.object.isRequired,
                    out: i.object.isRequired,
                    transitionProperty: i.string.isRequired
                })]),
                c = {
                    onExit: i.func,
                    onEnter: i.func,
                    onExited: i.func,
                    onEntered: i.func,
                    duration: i.number,
                    keepMounted: i.bool,
                    exitDuration: i.number,
                    transition: s,
                    timingFunction: i.string,
                    mounted: i.bool.isRequired,
                    children: i.func.isRequired
                },
                u = {
                    transitionProperty: "transform, opacity",
                    in: {
                        opacity: 1,
                        transform: "scale(1)"
                    },
                    out: {
                        opacity: 0,
                        transform: "scale(.9)"
                    }
                },
                l = {
                    pop: _object_spread_props(_object_spread({}, u), {
                        common: {
                            transformOrigin: "center center"
                        }
                    }),
                    "pop-top-left": _object_spread_props(_object_spread({}, u), {
                        common: {
                            transformOrigin: "top left"
                        }
                    }),
                    "pop-top-right": _object_spread_props(_object_spread({}, u), {
                        common: {
                            transformOrigin: "top right"
                        }
                    }),
                    "pop-bottom-left": _object_spread_props(_object_spread({}, u), {
                        common: {
                            transformOrigin: "bottom left"
                        }
                    }),
                    "pop-bottom-right": _object_spread_props(_object_spread({}, u), {
                        common: {
                            transformOrigin: "bottom right"
                        }
                    }),
                    fade: {
                        in: {
                            opacity: 1
                        },
                        out: {
                            opacity: 0
                        },
                        transitionProperty: "opacity"
                    },
                    scale: {
                        common: {
                            transformOrigin: "top"
                        },
                        transitionProperty: "transform, opacity",
                        in: {
                            opacity: 1,
                            transform: "scale(1)"
                        },
                        out: {
                            opacity: 0,
                            transform: "scale(0)"
                        }
                    },
                    "scale-y": {
                        common: {
                            transformOrigin: "top"
                        },
                        transitionProperty: "transform, opacity",
                        in: {
                            opacity: 1,
                            transform: "scaleY(1)"
                        },
                        out: {
                            opacity: 0,
                            transform: "scaleY(0)"
                        }
                    },
                    "scale-x": {
                        common: {
                            transformOrigin: "left"
                        },
                        transitionProperty: "transform, opacity",
                        in: {
                            opacity: 1,
                            transform: "scaleX(1)"
                        },
                        out: {
                            opacity: 0,
                            transform: "scaleX(0)"
                        }
                    },
                    "slide-down": {
                        common: {
                            transformOrigin: "top"
                        },
                        transitionProperty: "transform, opacity",
                        in: {
                            opacity: 1,
                            transform: "translateY(0)"
                        },
                        out: {
                            opacity: 0,
                            transform: "translateY(-100%)"
                        }
                    },
                    "slide-up": {
                        common: {
                            transformOrigin: "bottom"
                        },
                        transitionProperty: "transform, opacity",
                        in: {
                            opacity: 1,
                            transform: "translateY(0)"
                        },
                        out: {
                            opacity: 0,
                            transform: "translateY(100%)"
                        }
                    },
                    "slide-left": {
                        common: {
                            transformOrigin: "left"
                        },
                        transitionProperty: "transform, opacity",
                        in: {
                            opacity: 1,
                            transform: "translateX(0)"
                        },
                        out: {
                            opacity: 0,
                            transform: "translateX(100%)"
                        }
                    },
                    "slide-right": {
                        common: {
                            transformOrigin: "right"
                        },
                        transitionProperty: "transform, opacity",
                        in: {
                            opacity: 1,
                            transform: "translateX(0)"
                        },
                        out: {
                            opacity: 0,
                            transform: "translateX(-100%)"
                        }
                    },
                    "rotate-right": {
                        common: {
                            transformOrigin: "top"
                        },
                        transitionProperty: "transform, opacity",
                        in: {
                            opacity: 1,
                            transform: "translateY(0) rotate(0deg)"
                        },
                        out: {
                            opacity: 0,
                            transform: "translateY(20px}) rotate(5deg)"
                        }
                    },
                    "rotate-left": {
                        common: {
                            transformOrigin: "bottom"
                        },
                        transitionProperty: "transform, opacity",
                        in: {
                            opacity: 1,
                            transform: "translateY(0) rotate(0deg)"
                        },
                        out: {
                            opacity: 0,
                            transform: "translateY(20px}) rotate(-5deg)"
                        }
                    },
                    "skew-up": {
                        common: {
                            transformOrigin: "top"
                        },
                        transitionProperty: "transform, opacity",
                        in: {
                            opacity: 1,
                            transform: "translateY(0) skew(0deg, 0deg)"
                        },
                        out: {
                            opacity: 0,
                            transform: "translateY(-20px}) skew(-10deg, -5deg)"
                        }
                    },
                    "skew-down": {
                        common: {
                            transformOrigin: "bottom"
                        },
                        transitionProperty: "transform, opacity",
                        in: {
                            opacity: 1,
                            transform: "translateY(0) skew(0deg, 0deg)"
                        },
                        out: {
                            opacity: 0,
                            transform: "translateY(20px}) skew(-10deg, -5deg)"
                        }
                    }
                },
                d = {
                    entered: "in",
                    exited: "out",
                    entering: "in",
                    exiting: "out",
                    "pre-exiting": "out",
                    "pre-entering": "out"
                };

            function f(e) {
                var t = e.onExit,
                    n = e.mounted,
                    i = e.onEnter,
                    s = e.children,
                    c = e.onExited,
                    u = e.onEntered,
                    f = e.keepMounted,
                    p = e.duration,
                    _ = void 0 === p ? 250 : p,
                    v = e.transition,
                    m = void 0 === v ? "fade" : v,
                    h = e.timingFunction,
                    b = void 0 === h ? "fade" : h,
                    y = e.exitDuration,
                    g = function(e) {
                        var t = e.onExit,
                            n = e.mounted,
                            r = e.onEnter,
                            i = e.duration,
                            s = e.onExited,
                            c = e.onEntered,
                            u = e.exitDuration,
                            l = e.timingFunction,
                            d = _sliced_to_array(a.useState(i), 2),
                            f = d[0],
                            p = d[1],
                            _ = _sliced_to_array(a.useState(n ? "entered" : "exited"), 2),
                            v = _[0],
                            m = _[1],
                            h = a.useRef(-1);
                        return o.useDidUpdate(function() {
                            ! function(e) {
                                var n = e ? r : t,
                                    o = e ? c : s;
                                m(e ? "pre-entering" : "pre-exiting"), window.clearTimeout(h.current);
                                var a = e ? i : u;
                                if (p(a), 0 === a) "function" == typeof n && n(), "function" == typeof o && o(), m(e ? "entered" : "exited");
                                else {
                                    var l = window.setTimeout(function() {
                                        "function" == typeof n && n(), m(e ? "entering" : "exiting")
                                    }, 10);
                                    h.current = window.setTimeout(function() {
                                        window.clearTimeout(l), "function" == typeof o && o(), m(e ? "entered" : "exited")
                                    }, a)
                                }
                            }(n)
                        }, [n]), a.useEffect(function() {
                            return function() {
                                return window.clearTimeout(h.current)
                            }
                        }, []), {
                            transitionStatus: v,
                            transitionDuration: f,
                            transitionTimingFunction: l || "ease"
                        }
                    }({
                        onExit: t,
                        mounted: n,
                        onEnter: i,
                        duration: _,
                        onExited: c,
                        onEntered: u,
                        exitDuration: void 0 === y ? _ : y,
                        timingFunction: b
                    }),
                    w = g.transitionDuration,
                    C = g.transitionStatus,
                    E = g.transitionTimingFunction;
                return 0 === w ? n ? r.jsx(r.Fragment, {
                    children: s({})
                }) : f ? s({
                    display: "none"
                }) : null : "exited" === C ? f ? s({
                    display: "none"
                }) : null : r.jsx(r.Fragment, {
                    children: s(function(e) {
                        var t = e.state,
                            n = e.transition,
                            r = e.timingFunction,
                            o = {
                                transitionDuration: "".concat(e.duration, "ms"),
                                transitionTimingFunction: r
                            };
                        return "string" == typeof n ? n in l ? _object_spread({
                            transitionProperty: l[n].transitionProperty
                        }, o, l[n].common, l[n][d[t]]) : {} : _object_spread({
                            transitionProperty: n.transitionProperty
                        }, o, n.common, n[d[t]])
                    }({
                        transition: m,
                        state: C,
                        duration: w,
                        timingFunction: E
                    }))
                })
            }
            f.propTypes = c, f.displayName = "BsTransition", t.BsTransition = f, t.TransitionPropType = s
        },
        1103: function(e, t, n) {
            n(32930);
            var r = n(99249);
            n(36350), n(27434), n(50874), e.exports = r.BsTransition
        }
    }
]);