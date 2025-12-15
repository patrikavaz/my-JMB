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

function asyncGeneratorStep(e, t, n, r, o, a, i) {
    try {
        var s = e[a](i),
            u = s.value
    } catch (e) {
        return void n(e)
    }
    s.done ? t(u) : Promise.resolve(u).then(r, o)
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

function _define_property(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _instanceof(e, t) {
    return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
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

function _sliced_to_array(e, t) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, t) || _unsupported_iterable_to_array(e, t) || _non_iterable_rest()
}

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
}

function _unsupported_iterable_to_array(e, t) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _array_like_to_array(e, t) : void 0
    }
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
        return function(u) {
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
            }([s, u])
        }
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1234], {
        79373: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(27434);

            function o(e) {
                var t = e.children,
                    n = e.fallback,
                    o = _sliced_to_array((0, r.useState)(!1), 2),
                    a = o[0],
                    i = o[1];
                return (0, r.useEffect)(function() {
                    return i(!0)
                }, []), a ? t : n
            }
        },
        97910: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return _
                }
            });
            var r = n(32930),
                o = n(40877),
                a = [{
                    title: "۷ روز ضمانت بازگشت وجه",
                    key: "ProductGuaranteeReturnTemplate",
                    image: "https://statics.basalam.com/public/admin/bx3V8/12-10/4XcaQULTqnF7P4OF9L9k1Ydw6GMhGtWLaWAYajqS8Fgu3zTN5U.svg",
                    description: "مبلغ سفارشت تا ۷ روز پیش ما می‌مونه و به غرفه‌دار پرداخت نمی‌کنیم. اگه از محصول ناراضی بودی، مبلغ رو بهت برمی‌گردونیم."
                }, {
                    title: "پرداخت امن از درگاه بانکی",
                    key: "ProductGuaranteePaymentTemplate",
                    image: "https://statics.basalam.com/public/admin/bx3V8/12-10/6fFqzaedwv8fddcj4je9ma7WZwRKTNJU4vcqOC0dYhmEqhoqrr.svg",
                    description: "باسلام ای‌نماد (نماد اعتماد الکترونیکی) داره و خیالت راحت باشه که پرداختت از درگاه رسمی امن خود بانکه."
                }, {
                    key: "ProductGuaranteeSupportTemplate",
                    title: "پشتیبانی سفارش‌ها توسط باسلام",
                    description: "برای مشکلات احتمالی، پشتیبانی باسلام کنار مشتری‌ها و غرفه‌دارها هست.",
                    image: "https://statics.basalam.com/public/admin/lAB6a/01-03/q94DHRJQn8Xbqe8omCBwlzh15zcblkXXZIUdelO1k0EwTmN7IX.svg"
                }],
                i = n(5164),
                s = n(88361),
                u = n.n(s),
                c = n(45835),
                l = n(81433),
                d = n.n(l),
                v = n(93222),
                p = n.n(v),
                f = n(27434),
                m = (0, f.forwardRef)(function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.isSlider,
                        s = void 0 === n || n,
                        l = t.hasNavigation,
                        v = void 0 !== l && l,
                        m = t.hasBorder,
                        _ = void 0 !== m && m,
                        b = t.className,
                        h = void 0 === b ? "" : b,
                        g = t.slidesOffset,
                        w = void 0 === g ? 0 : g,
                        y = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        j = (0, c.b)().ua,
                        I = (0, f.useRef)(null),
                        x = _sliced_to_array((0, f.useState)(!1), 2),
                        S = x[0],
                        C = x[1];
                    (0, f.useImperativeHandle)(y, function() {
                        return {
                            scrollIntoView: function() {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return C(!0), I.current.scrollIntoView({
                                                    behavior: "smooth"
                                                }), [4, (0, i.sleep)(3e3)];
                                            case 1:
                                                return e.sent(), C(!1), [2]
                                        }
                                    })
                                })()
                            }
                        }
                    }, []);
                    var k = (0, o.Z)([h, u()["trust-slides"], (e = {}, _define_property(e, u()["trust-slides--is-slider"], s), _define_property(e, u()["trust-slides--has-border"], _), _define_property(e, u()["trust-slides--is-appearing"], S), _define_property(e, u()["trust-slides--has-navigation"], v), e)]),
                        E = j.isPc ? p() : "div",
                        D = j.isPc ? p().Item : "div";
                    return (0, r.jsxs)("div", {
                        ref: I,
                        className: k,
                        children: [(0, r.jsx)(d(), {
                            mr: w,
                            children: (0, r.jsx)("h5", {
                                className: u()["trust-slides__title"],
                                children: "چطوری اعتماد کنم؟"
                            })
                        }), (0, r.jsx)(E, {
                            className: u()["trust-slides__carousel"],
                            navigation: v,
                            children: a.map(function(e) {
                                return (0, r.jsx)(D, {
                                    className: u()["trust-slides__carousel-item"],
                                    children: (0, r.jsxs)("div", {
                                        className: u()["trust-slides__item"],
                                        children: [(0, r.jsx)("img", {
                                            src: e.image,
                                            alt: e.title,
                                            className: u()["trust-slides__item-image"]
                                        }), (0, r.jsx)("p", {
                                            className: u()["trust-slides__item-title"],
                                            children: e.title
                                        }), (0, r.jsx)("p", {
                                            className: u()["trust-slides__item-text"],
                                            children: e.description
                                        })]
                                    })
                                }, e.key)
                            })
                        })]
                    })
                }),
                _ = m
        },
        59736: function(e, t, n) {
            "use strict";
            n.d(t, {
                MW: function() {
                    return s
                },
                SU: function() {
                    return a
                },
                jm: function() {
                    return i
                }
            });
            var r = n(5164),
                o = n(79614);

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o.DZ.get("/web/v1/bnpl/status", e)
            }

            function i(e) {
                return o.DZ.post("/web/v1/bnpl/payment_intents/options", (0, r.snakize)(e))
            }

            function s(e) {
                return o.DZ.get("/web/v1/bnpl/payment_intents/options/potential", (0, r.snakize)(e))
            }
        },
        34e3: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ap: function() {
                    return s
                },
                Au: function() {
                    return u
                },
                GF: function() {
                    return v
                },
                Is: function() {
                    return _
                },
                Lt: function() {
                    return f
                },
                Ot: function() {
                    return l
                },
                RQ: function() {
                    return m
                },
                Y0: function() {
                    return a
                },
                d: function() {
                    return i
                },
                dE: function() {
                    return p
                },
                lv: function() {
                    return d
                },
                tC: function() {
                    return c
                }
            });
            var r = n(5164),
                o = n(79614);

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o.DZ.get("/web/v1/core/user", _object_spread_props(_object_spread({}, e), {
                    headers: {
                        "Cache-Control": "no-cache"
                    }
                }))
            }

            function i(e) {
                var t = e.map(function(e) {
                        return "product_ids=".concat(e)
                    }).join("&"),
                    n = "/web/v1/core/product/list/?".concat(t);
                return o.DZ.get(n)
            }

            function s(e) {
                return o.DZ.get("/web/v1/core/product/".concat(e))
            }

            function u(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.DZ.get("/web/v1/core/products/".concat(e), _object_spread_props(_object_spread({}, t), {
                    isLightCamelCase: !0
                }))
            }

            function c(e, t) {
                return o.DZ.patch("/web/v1/core/user", (0, r.snakize)(e), t)
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o.DZ.get("/web/v1/core/vendors", e)
            }

            function d(e, t) {
                var n = e.vendorId,
                    r = e.haveProduct;
                return o.DZ.get("/web/v1/core/shelve/list/".concat(n, "?have_product=").concat(r), t)
            }

            function v(e) {
                return o.DZ.get("/web/v1/core/user/username/".concat(e))
            }

            function p(e) {
                return o.DZ.get("/web/v1/core/user/".concat(e))
            }

            function f(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return o.DZ.patch("/web/v1/core/users/".concat(e, "/verification-request"), (0, r.snakize)(t), n)
            }
            var m = function() {
                return o.DZ.get("/web/v1/core/category")
            };

            function _() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o.DZ.get("/web/v1/core/vendor/products", e)
            }
        },
        3087: function(e, t, n) {
            "use strict";
            n.d(t, {
                $O: function() {
                    return w
                },
                Fn: function() {
                    return i
                },
                GI: function() {
                    return u
                },
                J2: function() {
                    return f
                },
                L$: function() {
                    return h
                },
                Qz: function() {
                    return b
                },
                SZ: function() {
                    return j
                },
                WL: function() {
                    return g
                },
                Y5: function() {
                    return s
                },
                Z1: function() {
                    return _
                },
                Z2: function() {
                    return d
                },
                _I: function() {
                    return a
                },
                _Q: function() {
                    return v
                },
                p8: function() {
                    return m
                },
                w$: function() {
                    return I
                },
                wZ: function() {
                    return c
                },
                wd: function() {
                    return x
                },
                wm: function() {
                    return y
                },
                wv: function() {
                    return p
                },
                zR: function() {
                    return l
                }
            });
            var r = n(5164),
                o = n(79614);

            function a(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/general/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function i(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/navigation/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function s(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/bazarche/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function u(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/promotion/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function c(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/landings/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function l(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/tile-landings/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function d(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/background/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function v(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/editors-choice/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function p(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/ads/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function f(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/city/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function m(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/about/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function _(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/guides/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function b(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.config,
                    i = void 0 === a ? {} : a;
                return o.DZ.get("/web/v1/explore/user/vendor-guides/".concat(n), _object_spread_props(_object_spread({}, i), {
                    params: (0, r.snakize)((null == i ? void 0 : i.params) || {})
                }))
            }

            function h() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o.DZ.get("/web/v1/explore/user/history/searches", _object_spread_props(_object_spread({}, e), {
                    params: (0, r.snakize)((null == e ? void 0 : e.params) || {})
                }))
            }

            function g() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o.DZ.delete("/web/v1/explore/user/history/searches", _object_spread_props(_object_spread({}, e), {
                    params: (0, r.snakize)((null == e ? void 0 : e.params) || {})
                }))
            }

            function w(e) {
                var t = e.userId,
                    n = e.config;
                return o.DZ.get("/web/v1/explore/user/taxonomy/".concat(t), _object_spread_props(_object_spread({}, n), {
                    params: (0, r.snakize)((null == n ? void 0 : n.params) || {})
                }))
            }

            function y(e) {
                var t = e.userId,
                    n = void 0 === t ? 0 : t,
                    a = e.section,
                    i = e.data,
                    s = void 0 === i ? {} : i,
                    u = e.config,
                    c = void 0 === u ? {} : u;
                return o.DZ.post("/web/v1/explore/component/".concat(a, "/").concat(n), (0, r.snakize)(s), c)
            }

            function j() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o.DZ.get("/web/v1/explore/user/special-sale/0", _object_spread({}, e))
            }

            function I() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o.DZ.get("/web/v1/explore/user/special-sale/0?size=0", _object_spread({}, e))
            }

            function x() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.DZ.get("/web/v1/explore/user/landings/".concat(e, "?tab=yazdah-yazdah&size=50"), t)
            }
        },
        79723: function(e, t, n) {
            "use strict";
            n.d(t, {
                BS: function() {
                    return w
                },
                BV: function() {
                    return l
                },
                D2: function() {
                    return _
                },
                F$: function() {
                    return a
                },
                G$: function() {
                    return y
                },
                Gq: function() {
                    return g
                },
                Kk: function() {
                    return i
                },
                Mw: function() {
                    return s
                },
                N7: function() {
                    return u
                },
                Tv: function() {
                    return x
                },
                Um: function() {
                    return S
                },
                Xt: function() {
                    return h
                },
                _u: function() {
                    return j
                },
                ed: function() {
                    return p
                },
                fy: function() {
                    return v
                },
                kc: function() {
                    return c
                },
                oh: function() {
                    return I
                },
                pc: function() {
                    return d
                },
                r$: function() {
                    return m
                },
                rA: function() {
                    return b
                },
                vp: function() {
                    return f
                }
            });
            var r = n(5164),
                o = n(79614);

            function a() {
                return o.DZ.get("/web/v1/order-processing/user/orders/count")
            }

            function i(e) {
                return o.DZ.get("/web/v1/order-processing/user/order-purchased/".concat(e))
            }

            function s(e) {
                return o.DZ.get("/web/v1/order-processing/customer-orders", {
                    params: e
                })
            }

            function u(e) {
                return o.DZ.get("/web/v1/order-processing/customer-items", {
                    params: (0, r.snakize)(e)
                })
            }

            function c(e) {
                return o.DZ.get("/web/v1/order-processing/customer-orders/".concat(e))
            }

            function l(e) {
                return o.DZ.get("/web/v1/order-processing/user/orders/".concat(e, "/hash-to-id"))
            }

            function d(e) {
                return o.DZ.get("/web/v1/order-processing/".concat(e, "/can-cancel"))
            }

            function v(e) {
                return o.DZ.post("/web/v1/order-processing/".concat(e.params.operator, "/agreements/").concat(e.params.agreementId, "/determine-agreement"), (0, r.snakize)(e.body))
            }

            function p(e) {
                return o.DZ.post("/web/v1/order-processing/user/order/parcel/set-feedback", (0, r.snakize)(e))
            }

            function f(e) {
                return o.DZ.post("/web/v1/order-processing/user/set-feedback", (0, r.snakize)(e))
            }

            function m(e) {
                return o.DZ.post("/web/v1/order-processing/user/set-satisfied", (0, r.snakize)(e))
            }

            function _(e) {
                return o.DZ.post("/web/v1/order-processing/user/determine-refund-suggestion", (0, r.snakize)(e))
            }

            function b(e) {
                return o.DZ.post("/web/v1/order-processing/order/".concat(e.orderId, "/can-refund-items"), (0, r.snakize)(e))
            }

            function h(e) {
                return o.DZ.post("/web/v1/order-processing/user/order/".concat(e.orderId, "/determine-agreement"), (0, r.snakize)(e.body))
            }

            function g(e) {
                return o.DZ.get("/web/v1/order-processing/orders-calculate-stats", {
                    params: (0, r.snakize)(e)
                })
            }

            function w(e) {
                return o.DZ.get("/web/v1/order-processing/customer-orders/".concat(e, "/parcel-hints"))
            }

            function y(e) {
                return o.DZ.post("/web/v1/order-processing/user/order/".concat(e.orderId, "/determine-cancel-request"), (0, r.snakize)(e.body))
            }

            function j(e) {
                return o.DZ.get("/web/v1/order-processing/user/parcel/".concat(e, "/agreement"))
            }

            function I(e) {
                return o.DZ.put("/web/v1/order-processing/user/order/".concat(e.orderId, "/cancel-items"), (0, r.snakize)(e.body))
            }

            function x(e) {
                return o.DZ.get("/web/v1/order-processing/user/parcel/".concat(e, "/tracking-details"))
            }

            function S(e) {
                var t = e.requestId,
                    n = e.data;
                return o.DZ.post("/web/v1/order-processing/user/return-requests/".concat(t, "/set-posted"), (0, r.snakize)(n))
            }
        },
        55654: function(e, t, n) {
            "use strict";
            var r = n(67938),
                o = n(34e3);
            t.Z = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, r.aM)(["current-user"], o.Y0, e)
            }
        },
        11219: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var r = n(32930),
                o = n(5164),
                a = n(36350),
                i = n(58271),
                s = n(43914),
                u = n(88107),
                c = n(25867),
                l = n(65074),
                d = n.n(l),
                v = n(35952),
                p = n.n(v),
                f = n(74495),
                m = n(27434),
                _ = n(18925);

            function b(e) {
                this.message = e, this.theme = "warning", this.name = "ShippingLimitException"
            }
            var h = function(e) {
                var t, n = e.stock,
                    l = e.children,
                    v = e.onChange,
                    h = e.label,
                    g = void 0 === h ? "" : h,
                    w = e.size,
                    y = void 0 === w ? "xs" : w,
                    j = e.product,
                    I = void 0 === j ? null : j,
                    x = e.square,
                    S = void 0 !== x && x,
                    C = e.className,
                    k = void 0 === C ? "" : C,
                    E = e.productId,
                    D = void 0 === E ? null : E,
                    T = e.disabled,
                    P = void 0 !== T && T,
                    N = (e.onUpdateQuantity, e.onAfterAddToCart),
                    M = e.buttonProps,
                    Z = void 0 === M ? {} : M,
                    A = e.fullWidth,
                    L = void 0 !== A && A,
                    q = e.productSalesCount,
                    O = e.stepperProps,
                    R = void 0 === O ? {} : O,
                    z = e.variationId,
                    U = void 0 === z ? null : z,
                    V = e.hasStepper,
                    B = void 0 !== V && V,
                    W = e.quantityInCart,
                    F = void 0 === W ? 0 : W,
                    G = e.hasVariation,
                    H = void 0 !== G && G,
                    Q = e.variationErrorHandler,
                    Y = (e.checkShippingLimit, e.isShowSuccessToast),
                    K = void 0 !== Y && Y,
                    X = (0, _.t)(),
                    J = (0, u.Z)(),
                    $ = (0, a.useSnackbar)().showSuccessSnackbar,
                    ee = "next" === J.query.tab,
                    te = "/cart" === J.pathname && !ee,
                    ne = (0, m.useRef)(),
                    re = _sliced_to_array((0, m.useState)(!1), 2),
                    oe = re[0],
                    ae = re[1],
                    ie = _sliced_to_array((0, m.useState)(!1), 2),
                    se = ie[0],
                    ue = ie[1],
                    ce = _sliced_to_array((0, m.useState)(F), 2),
                    le = ce[0],
                    de = ce[1],
                    ve = null !== (t = null != n ? n : null == I ? void 0 : I.stock) && void 0 !== t ? t : 1,
                    pe = B && F > 0,
                    fe = (0, m.useMemo)(function() {
                        switch (y) {
                            case "xxs":
                                return "32";
                            case "xs":
                            default:
                                return "36";
                            case "sm":
                                return "40";
                            case "md":
                                return "44";
                            case "lg":
                                return "48";
                            case "xl":
                                return "52";
                            case "xx":
                                return "56"
                        }
                    }, [y]);
                return (0, m.useEffect)(function() {
                    F !== le && de(F)
                }, [F]), pe ? (0, r.jsx)(p(), _object_spread_props(_object_spread({
                    min: 0,
                    canType: !0,
                    value: le,
                    size: fe,
                    max: ve,
                    disabled: P,
                    className: k,
                    loading: se,
                    decreaseIcon: 1 === F ? "bi-trash" : "bi-minus"
                }, R), {
                    onChange: function(e) {
                        oe || se || (ne.current && clearTimeout(ne.current), de(e), ne.current = setTimeout(function() {
                            return _async_to_generator(function() {
                                var t, n;
                                return _ts_generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 2, 3, 4]), "" === e ? (de(F), [2]) : (ue(!0), t = e - F, [4, X.changeQuantity({
                                                variationId: U,
                                                quantity: t,
                                                productId: I.id
                                            })]);
                                        case 1:
                                            return r.sent(), null == v || v(), [3, 4];
                                        case 2:
                                            return n = r.sent(), (0, i.S_)(n), de(F), [3, 4];
                                        case 3:
                                            return ue(!1), [7];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })()
                        }, 1e3))
                    }
                })) : (0, r.jsx)(d(), _object_spread_props(_object_spread({
                    size: y,
                    label: g,
                    square: S,
                    icon: l || g ? "" : "bi-plus",
                    loading: oe,
                    disabled: P,
                    fullWidth: L,
                    className: k
                }, Z), {
                    onClick: function(e) {
                        return _async_to_generator(function() {
                            var t, n, r;
                            return _ts_generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return null == e || e.preventDefault(), null == e || e.stopPropagation(), [4, (0, o.sleep)(0)];
                                    case 1:
                                        if (a.sent(), P) return [2];
                                        (0, c.Wt)(e), ae(!0), t = I || {
                                            id: D,
                                            hasVariation: H
                                        }, a.label = 2;
                                    case 2:
                                        return a.trys.push([2, 4, 5, 6]), [4, X.addToCart({
                                            variationId: U,
                                            product: t,
                                            autoHandleVariation: !1,
                                            salesCount: q
                                        })];
                                    case 3:
                                        return n = a.sent(), (0, s.b)("productAddToCart", t), null == v || v(), de(1), "function" == typeof N && N(t, n), te || K ? $("به سبد خریدت اضافه شد.") : ee || X.showModal({
                                            product: t,
                                            variationId: U,
                                            mode: "result"
                                        }), [3, 6];
                                    case 4:
                                        return r = a.sent(), (0, f.NS)(r) ? Q ? Q(r) : X.showModal({
                                            onChange: v,
                                            mode: "add",
                                            product: t
                                        }) : _instanceof(r, b) || (0, i.S_)(r), [3, 6];
                                    case 5:
                                        return ae(!1), [7];
                                    case 6:
                                        return [2]
                                }
                            })
                        })()
                    },
                    children: l
                }))
            }
        },
        89114: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return a
                },
                Y: function() {
                    return o
                }
            });
            var r = n(35942);

            function o(e) {
                var t = e.costs,
                    n = (Array.isArray(e.vendors) ? e.vendors : []).map(function(e) {
                        return _object_spread_props(_object_spread({}, e), {
                            items: e.items.map(function(t) {
                                return _object_spread_props(_object_spread({}, t), {
                                    vendor: e.owner || t.vendor,
                                    isFreightCollect: (0, r.G)(t.product)
                                })
                            })
                        })
                    }),
                    o = n.flatMap(function(e) {
                        return e.items
                    }),
                    a = o.flatMap(function(e) {
                        return e.errors || []
                    }).concat(e.errors || []),
                    i = a.concat(e.errors).some(function(e) {
                        return "ADDRESS_IS_INCOMPLETE" === e.code
                    });
                return {
                    items: o,
                    costs: t,
                    errors: a,
                    vendors: n,
                    id: e.id,
                    coupon: e.coupon,
                    origins: e.origins,
                    address: e.address,
                    bnpl: t.total.bnpl,
                    itemCount: e.itemCount,
                    hasIncompleteAddressError: i,
                    optionCode: e.optionCode,
                    credit: t.total.credit,
                    serviceFee: e.serviceFee,
                    totalPrice: t.products.grand,
                    payableAmount: t.total.grand,
                    installment: t.total.installment,
                    totalDeliveryCost: t.delivery.base,
                    totalPrimaryPrice: t.products.base,
                    payablePrimaryAmount: t.total.base,
                    showRecipientMobile: e.showRecipientMobile,
                    totalProductsDiscount: t.products.discount,
                    totalDeliveryDiscount: t.delivery.discount
                }
            }

            function a(e, t) {
                var n, r = (null == e || null === (n = e.serviceFee) || void 0 === n ? void 0 : n.applied) && e.serviceFee.amount || 0,
                    o = e.vendors.map(function(e) {
                        return {
                            vendorId: e.id,
                            vendorTitle: e.title,
                            ownerUserId: e.owner.id,
                            totalProductAmount: e.totalProductAmount,
                            totalDeliveryAmount: e.deliveryCosts.grand,
                            totalAmount: e.items.reduce(function(e, t) {
                                return e + t.payableAmount
                            }, 0) + r,
                            items: e.items.map(function(e) {
                                var t, n, r, o;
                                return {
                                    quantity: e.quantity,
                                    productPrice: e.price,
                                    productTitle: e.title,
                                    productId: e.product.id,
                                    productCategoryId: null !== (r = null === (t = e.product.category) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null,
                                    productCategoryTitle: null !== (o = null === (n = e.product.category) || void 0 === n ? void 0 : n.title) && void 0 !== o ? o : null
                                }
                            })
                        }
                    });
                return {
                    userId: t,
                    vendors: o,
                    amount: e.costs.total.grand + r
                }
            }
        },
        86850: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return a
                }
            });
            var r = n(82857),
                o = n(5164);

            function a(e) {
                var t, n, a, i, s, u, c, l, d, v, p, f, m, _, b, h, g, w, y, j = (null === (n = e.category) || void 0 === n || null === (t = n.parent) || void 0 === t ? void 0 : t.parent) || {},
                    I = (null === (a = e.category) || void 0 === a ? void 0 : a.parent) || {},
                    x = e.category || {},
                    S = e.vendor || {};
                return (0, o.removeEmpty)({
                    price: e.price,
                    vendorName: null == S ? void 0 : S.name,
                    productId: Number(e.id),
                    isSaleable: e.isSaleable,
                    hasVideo: !!(null === (i = e.video) || void 0 === i ? void 0 : i.url),
                    vendorId: Number(null == S ? void 0 : S.id) || 0,
                    primaryPrice: e.primaryPrice,
                    categoryName: j.title,
                    imageCount: null === (s = e.photos) || void 0 === s ? void 0 : s.length,
                    shippingArea: e.shippingArea,
                    rating: (null === (u = e.rating) || void 0 === u ? void 0 : u.rating) || 0,
                    category2Name: I.title,
                    category3Name: x.title,
                    vendorCityName: null == S || null === (c = S.city) || void 0 === c ? void 0 : c.title,
                    vendorIdentifier: null == S ? void 0 : S.identifier,
                    vendorSalesCount: null == S ? void 0 : S.salesCount,
                    inventory: Number(e.stock) || 0,
                    vendorScore: !!(null == e || null === (l = e.vendor) || void 0 === l ? void 0 : l.score),
                    isFreeShipping: e.isFreeShipping,
                    preparationDays: e.preparationDays,
                    isInUserWishlist: e.isInUserWishlist,
                    productName: (null == e ? void 0 : e.name) || (null == e ? void 0 : e.title),
                    vendorProvinceName: null == S || null === (v = S.city) || void 0 === v || null === (d = v.province) || void 0 === d ? void 0 : d.name,
                    ratingCount: Number(null === (p = e.rating) || void 0 === p ? void 0 : p.signals) || 0,
                    categoryId: Number(j.id) || void 0,
                    category2Id: Number(I.id) || void 0,
                    category3Id: Number(x.id) || void 0,
                    vendorCityId: Number(null == S || null === (f = S.city) || void 0 === f ? void 0 : f.id) || void 0,
                    promotionEndTime: (null === (m = e.currentPromotion) || void 0 === m ? void 0 : m.endTime) || "",
                    vendorProvinceId: Number(null == S || null === (b = S.city) || void 0 === b || null === (_ = b.province) || void 0 === _ ? void 0 : _.value) || void 0,
                    discountPercent: (0, o.getDiscountPercent)(e.primaryPrice, e.price),
                    promotionRemainingSeconds: (0, r.j)(null === (h = e.currentPromotion) || void 0 === h ? void 0 : h.endTime) || 0,
                    promotion: e.realDiscount ? "real_discount" : (null === (g = e.currentPromotion) || void 0 === g ? void 0 : g.type) || "",
                    metaData: {
                        productVideo: (null === (w = e.video) || void 0 === w ? void 0 : w.url) || "",
                        productPhotos: [null === (y = e.photo) || void 0 === y ? void 0 : y.md].concat(_to_consumable_array(((null == e ? void 0 : e.photos) || []).map(function(e) {
                            return (null == e ? void 0 : e.md) || (null == e ? void 0 : e.medium) || ""
                        })))
                    }
                })
            }
        },
        18925: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return C
                },
                t: function() {
                    return S
                }
            });
            var r = n(32930),
                o = n(67938),
                a = n(92369),
                i = n(58271),
                s = n(81918),
                u = n(89114),
                c = n(88107),
                l = n(45835),
                d = n(88592),
                v = n(27434),
                p = n(36350),
                f = n(60802),
                m = n(25867),
                _ = n(5164),
                b = n(86850);

            function h(e) {
                var t, n, r, o, i, s, u = e.product,
                    c = e.typeOfUser,
                    l = e.orderCount,
                    d = e.invoice,
                    v = e.salesCount;
                (0, a.publishEvent)("addToCart", _object_spread({
                    typeOfUser: c,
                    orderCount: l,
                    salesCount: v,
                    quantity: 1,
                    invoiceId: null == d ? void 0 : d.id,
                    invoiceItemId: null == d || null === (t = d.lastItem) || void 0 === t ? void 0 : t.id,
                    activeCoupons: null == u || null === (r = u.vendor) || void 0 === r || null === (n = r.defaultCoupon) || void 0 === n ? void 0 : n.code,
                    vendorLastActivity: (null === (o = u.vendor) || void 0 === o ? void 0 : o.lastActivity) || "",
                    imageCount: u.photos ? String(u.photos.length) : "0",
                    aovFromVendorForFreeShippingToIran: null === (i = u.vendor) || void 0 === i ? void 0 : i.freeShippingToIra,
                    remainingAovForFreeShippingToIran: (null === (s = u.vendor) || void 0 === s ? void 0 : s.freeShippingToIran) ? u.vendor.freeShippingToIran - u.price : void 0
                }, (0, m.rj)(), {
                    sid: _.bsSessionStorage.getItem("searchLogSearchId") || null,
                    cid: _.bsSessionStorage.getItem("searchLogConfigId") || null
                }, (0, b.N)(u)))
            }
            var g = n(71511),
                w = n(74495),
                y = n(53045),
                j = n(89504),
                I = n(41581),
                x = (0, v.createContext)({}),
                S = function() {
                    return (0, v.useContext)(x)
                };

            function C(e) {
                var t = e.children,
                    n = _sliced_to_array((0, v.useState)(null), 2),
                    m = n[0],
                    _ = n[1],
                    b = (0, v.useRef)(null),
                    S = (0, l.b)().isWebview,
                    C = (0, d.M_)(["typeOfUser", "isLoggedIn", "userId", "orderCount"]),
                    k = C.typeOfUser,
                    E = C.isLoggedIn,
                    D = C.userId,
                    T = C.orderCount;
                (0, v.useEffect)(function() {
                    return b.current = setTimeout(function() {
                            _(function() {
                                return k
                            })
                        }, 0),
                        function() {
                            return clearTimeout(null == b ? void 0 : b.current)
                        }
                }, [k]);
                var P = (0, o.NL)(),
                    N = (0, s.E)(),
                    M = (0, c.Z)(),
                    Z = (0, f.l)().runGBTest,
                    A = _sliced_to_array((0, v.useState)({
                        product: null,
                        onAdded: null,
                        onClose: null,
                        onCancel: null,
                        isShown: !1,
                        mode: "result",
                        onChange: null,
                        eventName: null
                    }), 2),
                    L = A[0],
                    q = A[1],
                    O = (0, v.useCallback)(function() {
                        q(function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                isShown: !1
                            })
                        })
                    }, []),
                    R = (0, v.useCallback)(function(e) {
                        q(function(t) {
                            return _object_spread_props(_object_spread({}, t, e), {
                                isShown: !0
                            })
                        })
                    }, []),
                    z = (0, v.useCallback)(function(e) {
                        var t = e.product,
                            n = e.mode;
                        q(function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                product: null != t ? t : e.product,
                                mode: n
                            })
                        })
                    }, []),
                    U = function(e) {
                        var t = e.product,
                            n = "/cart" !== M.pathname;
                        q(function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                product: t,
                                isShown: n,
                                mode: n ? "result" : e.mode
                            })
                        })
                    },
                    V = (0, v.useCallback)(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.product,
                            n = e.variationId,
                            r = e.autoHandleVariation,
                            o = void 0 === r || r,
                            a = e.salesCount,
                            i = !1,
                            s = function() {
                                return new y.Y("لطفا تنوع مورد نظرت رو انتخاب کن")
                            };
                        return new Promise(function(r, u) {
                            _async_to_generator(function() {
                                var e, r, o, i, u, c, l;
                                return _ts_generator(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            if (t.hasVariation && !n) throw s();
                                            return E ? (i = "/cart" !== window.location.pathname && !(null === (e = Z("free_shipping_inform", !1)) || void 0 === e ? void 0 : e.value), u = {
                                                isLight: i,
                                                variationId: n,
                                                quantity: 1,
                                                productId: Number(t.id)
                                            }, [4, (0, g.kp)(u)]) : [2, ((0, I.T7)({
                                                product: t,
                                                variationId: n
                                            }), N.update(), h({
                                                product: t,
                                                orderCount: T,
                                                salesCount: a,
                                                typeOfUser: m
                                            }), null)];
                                        case 1:
                                            return c = d.sent(), i ? N.setData(c) : (P.setQueryData(["cart", D], c), N.update()), h({
                                                product: t,
                                                orderCount: T,
                                                salesCount: a,
                                                invoice: c,
                                                typeOfUser: m
                                            }), [2, ((null == (l = (0, j.Cw)()) ? void 0 : l.version) === j.gO.MOSTLY_WEBVIEW ? null == l || null === (r = l.updateBasketSize) || void 0 === r || r.call(l, c.itemCount || -1) : null == l || null === (o = l.updateBasketSize) || void 0 === o || o.call(l), c)]
                                    }
                                })
                            })().then(r).catch(function(t) {
                                var n = (0, w.NS)(t);
                                n && o ? R(_object_spread_props(_object_spread({}, e), {
                                    mode: "add",
                                    onCancel: function() {
                                        u(Error("ATC_ABORT"))
                                    },
                                    onAdded: function(e) {
                                        i = !0, r(e)
                                    },
                                    onClose: function() {
                                        i || u(Error("ATC_ABORT"))
                                    }
                                })) : u(n ? s() : t)
                            })
                        })
                    }, [E, m, T, R, S]),
                    B = (0, v.useCallback)(function(e) {
                        return _async_to_generator(function() {
                            var t, n, r, o, s, u, c, l, d, v, p, f;
                            return _ts_generator(this, function(_) {
                                switch (_.label) {
                                    case 0:
                                        if (t = e.quantity, n = void 0 === t ? 1 : t, r = e.productId, o = e.variationId, s = void 0 === o ? null : o, u = e.refreshCart, c = "/cart" !== window.location.pathname && !u, (0, a.publishEvent)("changeCartQuantity", {
                                                orderCount: T,
                                                typeOfUser: m,
                                                item: {
                                                    product: {
                                                        id: r
                                                    }
                                                },
                                                quantityChange: n > 0 ? "+".concat(n) : "".concat(n)
                                            }), !E) return [2, ((0, I.JD)({
                                            productId: r,
                                            variationId: s,
                                            quantityFn: function(e) {
                                                return e + n
                                            }
                                        }), N.update(), null)];
                                        _.label = 1;
                                    case 1:
                                        return _.trys.push([1, 3, , 4]), [4, (0, g.kp)({
                                            isLight: c,
                                            quantity: n,
                                            productId: r,
                                            variationId: s
                                        })];
                                    case 2:
                                        return v = _.sent(), c ? N.setData(v) : (P.setQueryData(["cart", D], v), N.update()), [2, ((null == (p = (0, j.Cw)()) ? void 0 : p.version) === j.gO.MOSTLY_WEBVIEW ? null == p || null === (l = p.updateBasketSize) || void 0 === l || l.call(p, v.itemCount || -1) : null == p || null === (d = p.updateBasketSize) || void 0 === d || d.call(p), v)];
                                    case 3:
                                        throw f = _.sent(), (0, i.S_)(f), f;
                                    case 4:
                                        return [2]
                                }
                            })
                        })()
                    }, [E, N, P, m, T, S]),
                    W = function(e) {
                        var t = e.itemId,
                            n = e.productId,
                            r = e.variationId;
                        try {
                            if (E) return (0, u.Y)(P.getQueryData(["cart", D])).items.find(function(e) {
                                return e.id === t
                            });
                            var o = (0, I._D)();
                            return (0, I.lc)({
                                items: o,
                                productId: n,
                                variationId: r
                            })
                        } catch (e) {
                            return null
                        }
                    },
                    F = (0, v.useCallback)(function(e) {
                        return _async_to_generator(function() {
                            var t, n, r, o, s, u, c, l, d, v, p, f;
                            return _ts_generator(this, function(_) {
                                switch (_.label) {
                                    case 0:
                                        t = e.productId, n = e.variationId, r = void 0 === n ? null : n, o = e.itemId, _.label = 1;
                                    case 1:
                                        return _.trys.push([1, 5, , 6]), d = W({
                                            itemId: o,
                                            productId: t,
                                            variationId: r
                                        }), v = null, E ? [4, (0, g.Ep)(o)] : [3, 3];
                                    case 2:
                                        return v = _.sent(), P.setQueryData(["cart", D], v), [3, 4];
                                    case 3:
                                        (0, I.VZ)({
                                            productId: t,
                                            variationId: r
                                        }), _.label = 4;
                                    case 4:
                                        return N.update(), (0, a.publishEvent)("removeFromCart", {
                                            orderCount: T,
                                            typeOfUser: m,
                                            quantity: null == d ? void 0 : d.quantity,
                                            vendorId: null == d || null === (s = d.vendor) || void 0 === s ? void 0 : s.id,
                                            inventory: null == d || null === (u = d.product) || void 0 === u ? void 0 : u.stock
                                        }), [2, ((null == (p = (0, j.Cw)()) ? void 0 : p.version) === j.gO.MOSTLY_WEBVIEW ? null == p || null === (c = p.updateBasketSize) || void 0 === c || c.call(p, v.itemCount || -1) : null == p || null === (l = p.updateBasketSize) || void 0 === l || l.call(p), v)];
                                    case 5:
                                        throw f = _.sent(), (0, i.S_)(f), f;
                                    case 6:
                                        return [2]
                                }
                            })
                        })()
                    }, [E, P, N, m, T, S]),
                    G = (0, v.useCallback)(function(e) {
                        return _async_to_generator(function() {
                            var t;
                            return _ts_generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, V({
                                            product: e,
                                            autoHandleVariation: !1
                                        })];
                                    case 1:
                                        return n.sent(), R({
                                            product: e,
                                            mode: "result"
                                        }), [3, 3];
                                    case 2:
                                        return t = n.sent(), (0, w.NS)(t) ? R({
                                            product: e,
                                            mode: "add"
                                        }) : (0, i.S_)(t), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })()
                    }, [V, R]);
                ! function(e) {
                    var t = (0, p.useEmitter)().subEvent,
                        n = (0, s.E)(),
                        r = (0, d.M_)(["userId"]).userId,
                        o = (0, v.useRef)({
                            userId: null,
                            updateSummary: null,
                            refetchSummary: null
                        });
                    (0, v.useEffect)(function() {
                        r && (o.current.userId = r, o.current.updateSummary = n.update, o.current.refetchSummary = n.refetch)
                    }, [n, r]), (0, v.useEffect)(function() {
                        t("login", function() {
                            null == e || e(o.current)
                        }, {
                            autoOff: !0
                        })
                    }, [])
                }(function(e) {
                    return _async_to_generator(function() {
                        var t, n, r;
                        return _ts_generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, , 2, 3]), n = "/cart" !== window.location.pathname, [4, (0, I.PF)(n)];
                                case 1:
                                    return (r = o.sent()) && (P.removeQueries(["cart", null], {
                                        exact: !0
                                    }), P.setQueryData(["cart", e.userId], r)), null === (t = e.refetchSummary) || void 0 === t || t.call(e), [3, 3];
                                case 2:
                                    return (0, I.wP)(), [7];
                                case 3:
                                    return [2]
                            }
                        })
                    })()
                });
                var H = (0, v.useMemo)(function() {
                    return {
                        addToCart: V,
                        showModal: R,
                        closeModal: O,
                        changeQuantity: B,
                        removeFromCart: F,
                        quickAddToCart: G,
                        switchModalMode: z,
                        modal: L,
                        showResultModalIfNeeded: U
                    }
                }, [V, L, B, F, G, R, z, O]);
                return (0, r.jsx)(x.Provider, {
                    value: H,
                    children: t
                })
            }
        },
        43914: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return s
                }
            });
            var r = n(31564),
                o = n(5164),
                a = (0, o.isServerSide)(),
                i = (0, o.isDevelopment)();

            function s(e, t) {
                if (!a && !i) {
                    if ("undefined" == typeof yektanet) return void console.warn("yektanet is not defined.");
                    switch (e) {
                        case "productDetail":
                            return void
                            function(e) {
                                for (var t, n, a, i, s, u = {
                                        category: [],
                                        sku: e.id,
                                        price: e.price,
                                        title: e.title,
                                        extras: {
                                            categories: []
                                        },
                                        image: e.photo.medium,
                                        isAvailable: (null == e ? void 0 : e.isAvailable) && (null == e ? void 0 : e.canAddToCart),
                                        discount: (0, o.getDiscountPercent)(e.primaryPrice, e.price)
                                    }, c = e.category; c && (u.category.push(c.title), c.parentId);) c = c.parent;
                                var l = null === (t = (0, r.O)(e)) || void 0 === t ? void 0 : t.splice(1, 3);
                                u.extras.categories = l.map(function(e) {
                                    return {
                                        url: e.link,
                                        title: e.title
                                    }
                                }), null === (a = yektanet) || void 0 === a || null === (n = a.product) || void 0 === n || n.call(a, "detail", u), null === (s = yektanet) || void 0 === s || null === (i = s.event) || void 0 === i || i.call(s, "c6cf6425-e5e4-4339-bbc6-4be542846a19")
                            }(t);
                        case "productAddToCart":
                            ! function(e) {
                                var t, n, r, o, a = {
                                    quantity: 1,
                                    sku: e.id,
                                    price: e.price,
                                    title: e.title
                                };
                                null === (n = yektanet) || void 0 === n || null === (t = n.product) || void 0 === t || t.call(n, "add", a), null === (o = yektanet) || void 0 === o || null === (r = o.event) || void 0 === r || r.call(o, "7c67d4e7-5a01-4870-813c-d71ea2877bee")
                            }(t)
                    }
                }
            }
        },
        9775: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return r
                }
            });
            var r = ["/", "/cat/list", "/cart", "/account"]
        },
        61108: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return c
                },
                b: function() {
                    return l
                }
            });
            var r = n(67938),
                o = n(5164),
                a = n(34e3),
                i = n(35942),
                s = n(79614),
                u = function(e) {
                    var t, n, r, o;
                    return _object_spread_props(_object_spread({}, e), {
                        stock: null !== (r = e.stock) && void 0 !== r ? r : e.inventory,
                        isFreightCollect: (0, i.G)(e),
                        hasVariation: null !== (o = e.hasVariation) && void 0 !== o ? o : (null === (t = e.variants) || void 0 === t ? void 0 : t.length) > 0,
                        shippingArea: e.shippingArea || (null === (n = e.vendor) || void 0 === n ? void 0 : n.availableCities) || []
                    })
                },
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, r.aM)(["product", e], function() {
                        return (0, a.Au)(e)
                    }, _object_spread_props(_object_spread({}, t), {
                        select: u
                    }))
                },
                l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, r.aM)(["pdp-history-price", e], function() {
                        return s.DZ.get("/web/v1/stats/product/".concat(e, "/history/price"))
                    }, _object_spread({
                        select: function(e) {
                            var t;
                            return null == e || null === (t = e.openapiRawData) || void 0 === t ? void 0 : t.map(function(e, t) {
                                return {
                                    id: t,
                                    date: e.createdAt,
                                    price: e.price ? (0, o.rialToToman)(e.price) : null
                                }
                            }).filter(function(e) {
                                return e.price
                            })
                        }
                    }, t))
                }
        },
        87540: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var r = n(32930),
                o = n(40877),
                a = n(50874),
                i = n.n(a),
                s = n(48531),
                u = n.n(s),
                c = n(5164),
                l = n(36350),
                d = n(27434),
                v = function(e) {
                    var t = e % 60,
                        n = Math.floor(e / 86400),
                        r = Math.floor(e % 86400 / 3600),
                        o = Math.floor(e % 3600 / 60);
                    return {
                        days: n,
                        total: e,
                        hours: r,
                        seconds: t,
                        minutes: o,
                        formattedDays: "0".concat(n).slice(-2),
                        formattedHours: "0".concat(r).slice(-2),
                        formattedSeconds: "0".concat(t).slice(-2),
                        formattedMinutes: "0".concat(o).slice(-2)
                    }
                };

            function p(e) {
                var t = e.endTime,
                    n = e.onTimesUp,
                    a = e.className,
                    i = e.itemClass,
                    s = e.showDays,
                    p = void 0 !== s && s,
                    f = e.showColon,
                    m = void 0 === f || f,
                    _ = e.showHours,
                    b = void 0 !== _ && _,
                    h = (0, d.useRef)(),
                    g = _sliced_to_array((0, d.useState)(!1), 2),
                    w = g[0],
                    y = g[1],
                    j = (0, d.useMemo)(function() {
                        return (0, c.gregoryDate)()
                    }, []),
                    I = (0, d.useMemo)(function() {
                        return (0, c.gregoryDate)(t)
                    }, [t]),
                    x = (0, l.useIntersectionObserver)(),
                    S = x.isInViewport,
                    C = x.observe,
                    k = x.unobserve,
                    E = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.onTimesUp,
                            r = t.startOnMount,
                            o = void 0 === r || r,
                            a = t.shouldRender,
                            i = void 0 === a || a,
                            s = (0, d.useRef)(null),
                            u = (0, d.useRef)(e),
                            c = (0, d.useRef)(i),
                            l = _sliced_to_array((0, d.useState)(v(e)), 2),
                            p = l[0],
                            f = l[1],
                            m = (0, d.useCallback)(function() {
                                f(v(u.current))
                            }, []),
                            _ = (0, d.useCallback)(function() {
                                u.current > 0 ? (u.current -= 1, c.current && f(v(u.current)), s.current = setTimeout(_, 1e3)) : 0 === u.current && (null == n || n())
                            }, [n]),
                            b = (0, d.useCallback)(function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
                                clearTimeout(s.current), u.current = t, c.current && m(), s.current = setTimeout(_, 1e3)
                            }, [e, _, m]),
                            h = (0, d.useCallback)(function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
                                clearTimeout(s.current), u.current = t, c.current && m(), b(t)
                            }, [e, b, m]);
                        return (0, d.useEffect)(function() {
                            var e = c.current;
                            c.current = i, !e && i && m()
                        }, [i, m]), (0, d.useEffect)(function() {
                            return o && b(e),
                                function() {
                                    return clearTimeout(s.current)
                                }
                        }, []), {
                            start: b,
                            reset: h,
                            timeLeft: p
                        }
                    }(I.diff(j, "s"), {
                        onTimesUp: n,
                        shouldRender: S
                    }),
                    D = (0, d.useMemo)(function() {
                        return w ? _to_consumable_array(p ? [E.timeLeft.formattedDays] : []).concat(_to_consumable_array(b ? [Number(E.timeLeft.formattedHours) + Number(p ? 0 : 24 * E.timeLeft.formattedDays)] : []), [E.timeLeft.formattedMinutes, E.timeLeft.formattedSeconds]) : []
                    }, [w, p, b, E.timeLeft.formattedDays, E.timeLeft.formattedHours, E.timeLeft.formattedMinutes, E.timeLeft.formattedSeconds]);
                return (0, d.useEffect)(function() {
                    y(!0);
                    var e = h.current;
                    return C(e),
                        function() {
                            k(e)
                        }
                }, []), (0, r.jsx)("div", {
                    ref: h,
                    className: (0, o.Z)([a, u().countdown, _define_property({}, u().colon, m)]),
                    children: D.map(function(e, t) {
                        return (0, r.jsx)("div", {
                            className: (0, o.Z)([u().countdown__item, i]),
                            children: e
                        }, t)
                    })
                })
            }
            p.propTypes = {
                showDays: i().bool,
                showColon: i().bool,
                onTimesUp: i().func,
                showHours: i().bool,
                className: i().string,
                endTime: i().string.isRequired
            };
            var f = p
        },
        35942: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return r
                }
            });
            var r = function(e) {
                var t = ((null == e ? void 0 : e.title) || (null == e ? void 0 : e.name) || "").replace(/\s/g, "");
                return /کرایه(.*?)پس|پس(.*?)کرایه/.test(t)
            }
        },
        31564: function(e, t, n) {
            "use strict";

            function r(e) {
                var t, n, r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    o = (null == e || null === (n = e.breadcrumbs) || void 0 === n || null === (t = n.mainBreadcrumb) || void 0 === t ? void 0 : t.breadcrumb) || [],
                    a = [];
                return o.forEach(function(e, t) {
                    var n = o[0].slug;
                    if (e.title) {
                        var r = "/cat/".concat(n).concat(0 === t ? "" : "/".concat(e.slug));
                        a.push(_object_spread_props(_object_spread({}, e), {
                            link: r,
                            attrs: {
                                href: r
                            }
                        }))
                    }
                }), a.length > 0 && a.unshift({
                    title: "خانه",
                    link: "/",
                    attrs: {
                        href: "/"
                    }
                }), r && a.length > 0 && a.push({
                    title: null == e ? void 0 : e.title,
                    component: "span",
                    attrs: {
                        href: void 0
                    }
                }), a
            }
            n.d(t, {
                O: function() {
                    return r
                }
            })
        },
        44492: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return f
                }
            });
            var r = n(32930),
                o = n(40877),
                a = n(50874),
                i = n.n(a),
                s = n(27434),
                u = n(48863),
                c = n.n(u),
                l = n(67557),
                d = n.n(l),
                v = n(45835);

            function p(e) {
                var t = e.className,
                    n = e.properties,
                    a = e.isHorizontal,
                    i = e.valueClassName,
                    u = (0, o.Z)(t, c()["variation-list"], a ? c()["variation-list--horizontal"] : ""),
                    l = (0, v.b)().ua.isPc,
                    p = n.reduce(function(e, t) {
                        var n = t.property,
                            r = t.value,
                            o = _object_spread_props(_object_spread({}, n), {
                                values: [r]
                            }),
                            a = e.find(function(e) {
                                return e.id === n.id
                            });
                        return a ? a.values.some(function(e) {
                            return e.id === r.id
                        }) || a.values.push(r) : e.push(o), e
                    }, []),
                    f = (0, s.useMemo)(function() {
                        return !!p.some(function(e) {
                            var t;
                            return (null == e || null === (t = e.values) || void 0 === t ? void 0 : t.length) > 1
                        })
                    }, [p]);
                return 0 === p.length ? null : (0, r.jsxs)("div", {
                    className: u,
                    children: [p.map(function(e) {
                        var t;
                        return (0, r.jsx)("span", {
                            className: c()["variation-list__item"],
                            children: (0, r.jsxs)("div", {
                                className: c()["variation-list__item-container"],
                                children: [(0, r.jsxs)("span", {
                                    className: c()["variation-list__title"],
                                    children: [e.title, ":"]
                                }), (0, r.jsx)("div", {
                                    className: (0, o.Z)(i, c()["variation-list__value-name"]),
                                    children: null == e || null === (t = e.values[0]) || void 0 === t ? void 0 : t.title
                                })]
                            })
                        }, "p__".concat(e.id))
                    }), f && (0, r.jsx)(d(), {
                        tag: "span",
                        variant: l ? "caption-lg" : "caption-sm",
                        className: c()["variation-list__more-variation"],
                        children: "و چند تنوع دیگه"
                    })]
                })
            }
            var f = i().arrayOf(i().shape({
                value: i().shape({
                    id: i().number,
                    title: i().string,
                    value: i().string
                }),
                property: i().shape({
                    id: i().number,
                    type: i().string,
                    title: i().string
                })
            }));
            p.propTypes = {
                className: i().string,
                isHorizontal: i().bool,
                valueClassName: i().string,
                properties: f
            }, t.Z = (0, s.memo)(p)
        },
        42349: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return _
                }
            });
            var r = n(32930),
                o = n(25185),
                a = n.n(o),
                i = n(27434),
                s = n(25129),
                u = n.n(s),
                c = n(93222),
                l = n.n(c),
                d = n(40877),
                v = n(22549),
                p = n.n(v);

            function f(e) {
                var t, n, o = e.option,
                    a = e.variants,
                    s = e.onSelect,
                    u = e.valueItem,
                    c = e.selectedValues,
                    l = (0, i.useMemo)(function() {
                        var e = a.find(function(e) {
                            return e.properties.every(function(e) {
                                if (e.property.id === o.id) return e.value.id === u.id;
                                var t = c[e.property.id];
                                return !t || e.value.id === t.id
                            })
                        });
                        return !e || (null == e ? void 0 : e.stock) <= 0
                    }, [o.id, c, u.id, a]);
                return (0, r.jsx)("button", {
                    className: (0, d.Z)(p()["product-variation-item"], (n = {}, _define_property(n, p()["product-variation-item--disabled"], l), _define_property(n, p()["product-variation-item--selected"], (null === (t = c[o.id]) || void 0 === t ? void 0 : t.id) === u.id), n)),
                    onClick: function() {
                        l || null == s || s(u)
                    },
                    children: (0, r.jsx)("span", {
                        children: u.title
                    })
                })
            }

            function m(e) {
                var t = e.option,
                    n = e.selectedValues,
                    o = e.variants,
                    a = e.onSelect,
                    s = (0, i.useRef)(),
                    c = _sliced_to_array((0, i.useState)(!0), 2),
                    d = c[0],
                    v = c[1],
                    p = _sliced_to_array((0, i.useState)(!1), 2),
                    m = p[0],
                    _ = p[1],
                    b = (0, i.useCallback)(function(e) {
                        v(function() {
                            return e.canScrollNext()
                        }), _(function() {
                            return e.canScrollPrev()
                        })
                    }, []);
                return (0, r.jsxs)("div", {
                    className: u()["product-variation"],
                    children: [(0, r.jsx)("span", {
                        className: u()["product-variation__title"],
                        children: null == t ? void 0 : t.title
                    }), (0, r.jsx)(l(), {
                        ref: s,
                        className: u()["product-variation__slider"],
                        onSelect: b,
                        children: t.values.map(function(e) {
                            return (0, r.jsx)(l().Item, {
                                className: u()["product-variation__slide-item"],
                                children: (0, r.jsx)(f, {
                                    option: t,
                                    variants: o,
                                    valueItem: e,
                                    selectedValues: n,
                                    onSelect: a
                                })
                            }, e.id)
                        })
                    }), d && (0, r.jsx)("button", {
                        "aria-label": "گزینه بعدی",
                        className: u()["product-variation__slider-next"],
                        onClick: function() {
                            var e, t;
                            return null === (t = s.current) || void 0 === t || null === (e = t.api) || void 0 === e ? void 0 : e.scrollNext()
                        },
                        children: (0, r.jsx)("i", {
                            className: "bi-angle-left"
                        })
                    }), m && (0, r.jsx)("button", {
                        "aria-label": "گزینه قبلی",
                        className: u()["product-variation__slider-prev"],
                        onClick: function() {
                            var e, t;
                            return null === (t = s.current) || void 0 === t || null === (e = t.api) || void 0 === e ? void 0 : e.scrollPrev()
                        },
                        children: (0, r.jsx)("i", {
                            className: "bi-angle-right"
                        })
                    })]
                })
            }

            function _(e) {
                var t = e.product,
                    n = e.value,
                    o = e.onChange,
                    s = e.showTitle,
                    u = _sliced_to_array((0, i.useState)({}), 2),
                    c = u[0],
                    l = u[1],
                    d = (0, i.useMemo)(function() {
                        var e = [];
                        return t.variants.forEach(function(t) {
                            (null == t ? void 0 : t.properties) && Array.isArray(t.properties) && t.properties.forEach(function(t) {
                                var n, r;
                                if ((null == t || null === (n = t.property) || void 0 === n ? void 0 : n.id) && (null == t || null === (r = t.value) || void 0 === r ? void 0 : r.id)) {
                                    var o = e.findIndex(function(e) {
                                        return e.id === t.property.id
                                    });
                                    if (o > -1) {
                                        var a = e[o];
                                        a.values.some(function(e) {
                                            return e.id === t.value.id
                                        }) || (a.values = _to_consumable_array(a.values).concat([_object_spread_props(_object_spread({}, t.value), {
                                            optionId: t.property.id
                                        })]))
                                    } else e.push({
                                        id: t.property.id,
                                        type: t.property.type,
                                        title: t.property.title,
                                        values: [_object_spread_props(_object_spread({}, t.value), {
                                            optionId: t.property.id
                                        })]
                                    })
                                }
                            })
                        }), e
                    }, [null == t ? void 0 : t.variants]),
                    v = function(e) {
                        var n, r = _object_spread({}, c);
                        (null === (n = r[e.optionId]) || void 0 === n ? void 0 : n.id) === e.id ? delete r[e.optionId] : r = _object_spread_props(_object_spread({}, r), _define_property({}, e.optionId, e)), l(r);
                        var a = t.variants.find(function(e) {
                            return e.properties.every(function(e) {
                                var t, n, o;
                                return (null == e || null === (t = e.value) || void 0 === t ? void 0 : t.id) === (null === (n = r[null == e || null === (o = e.property) || void 0 === o ? void 0 : o.id]) || void 0 === n ? void 0 : n.id)
                            })
                        });
                        null == o || o(null == a ? void 0 : a.id)
                    };
                return (0, i.useEffect)(function() {
                    var e, r;
                    if (n) {
                        var o = null == t || null === (e = t.variants) || void 0 === e ? void 0 : e.find(function(e) {
                            return (null == e ? void 0 : e.id) === n
                        });
                        null == o || null === (r = o.properties) || void 0 === r || r.forEach(function(e) {
                            l(function(t) {
                                var n;
                                return _object_spread_props(_object_spread({}, t), _define_property({}, null == e || null === (n = e.property) || void 0 === n ? void 0 : n.id, null == e ? void 0 : e.value))
                            })
                        })
                    }
                }, [null == t ? void 0 : t.variants, n]), (0, r.jsxs)("div", {
                    children: [s && d.length > 0 && (0, r.jsxs)("p", {
                        className: a()["product-variations__title"],
                        children: [(0, r.jsx)("span", {
                            children: "اول"
                        }), (0, r.jsx)("span", {
                            children: d.map(function(e) {
                                return e.title
                            }).join(" و ")
                        }), (0, r.jsx)("span", {
                            children: "محصول را انتخاب کن."
                        })]
                    }), d.map(function(e) {
                        return (0, r.jsx)(m, {
                            option: e,
                            variants: (null == t ? void 0 : t.variants) || [],
                            selectedValues: c,
                            onSelect: v
                        }, e.id)
                    })]
                })
            }
        },
        21234: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return Bt
                }
            });
            var r = n(12254),
                o = n.n(r),
                a = n(32930),
                i = n(2389),
                s = n.n(i),
                u = n(27434),
                c = n(88107),
                l = n(5164);

            function d() {
                var e = (0, c.Z)();
                return (0, u.useEffect)(function() {
                    (0, l.isClientSide)() && !(0, l.isDevelopment)() && "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(t) {
                        var n = function() {
                            requestIdleCallback(function() {
                                t.update()
                            })
                        };
                        return e.events.on("routeChangeComplete", n),
                            function() {
                                e.events.off("routeChangeComplete", n)
                            }
                    }).catch(function(e) {
                        console.error("[SW] Error updating service worker:", e)
                    })
                }, [e.events]), null
            }
            var v = n(36350),
                p = n(79373),
                f = n(82280),
                m = n.n(f),
                _ = n(48679),
                b = n(67938),
                h = n(88592),
                g = n(3087),
                w = n(45835),
                y = n(82623),
                j = n(79723),
                I = n(89504),
                x = (0, u.lazy)(function() {
                    return Promise.all([n.e(246), n.e(8293), n.e(3620), n.e(5382), n.e(3098), n.e(7314), n.e(8990), n.e(2746), n.e(4287), n.e(3941), n.e(7468), n.e(2308), n.e(928), n.e(5437), n.e(4491), n.e(1305), n.e(1896)]).then(n.bind(n, 30797)).then(function(e) {
                        return {
                            default: e.ReviewSuggestion
                        }
                    })
                }),
                S = (0, u.lazy)(function() {
                    return n.e(3549).then(n.bind(n, 13549))
                }),
                C = (0, u.lazy)(function() {
                    return n.e(2721).then(n.bind(n, 92721))
                }),
                k = "POPUP_LOADER_DATA_V2",
                E = [3739, 3237, 3238, 4633, 5075, 5017, 3572, 3740, 6440];

            function D() {
                var e, t = (0, c.Z)(),
                    n = (0, w.b)(),
                    r = n.isWebview,
                    o = n.ua.isPc,
                    i = _sliced_to_array((0, u.useState)(!1), 2),
                    s = i[0],
                    d = i[1],
                    v = _sliced_to_array((0, u.useState)(!1), 2),
                    p = v[0],
                    f = v[1],
                    m = _sliced_to_array((0, u.useState)([]), 2),
                    D = m[0],
                    T = m[1],
                    P = (0, h.M_)(["banStatus", "isLoggedIn", "userId"]),
                    N = P.banStatus,
                    M = P.isLoggedIn,
                    Z = P.userId,
                    A = (0, u.useCallback)(function(e) {
                        var n = ["/cart", "/live", "/games", "/invite", "/account", "/landings", "/vendor-guides"],
                            a = !(null == N ? void 0 : N.business),
                            i = !o && "/" === t.asPath.split("?")[0],
                            s = e.filter(function(e) {
                                var o, s;
                                switch (e.ui) {
                                    case "order_tracking":
                                        return i && a;
                                    case "review_suggestion":
                                        var u = _to_consumable_array(n).concat(_to_consumable_array((null === (o = e.metaData) || void 0 === o ? void 0 : o.links) || []));
                                        return !new RegExp("^(".concat(u.join("|"), ")")).test(t.asPath) && !(0, _.isPdpPage)(t.asPath) && a && (!r || "/" === t.asPath.split("?")[0]);
                                    case "modal_promotion":
                                        var c = _to_consumable_array(n).concat(_to_consumable_array((null === (s = e.metaData) || void 0 === s ? void 0 : s.links) || []));
                                        return !new RegExp("^(".concat(c.join("|"), ")")).test(t.asPath) && !(0, _.isPdpPage)(t.asPath) && a && (!r || "/" === t.asPath.split("?")[0]);
                                    default:
                                        return !1
                                }
                            });
                        return s
                    }, [null == N ? void 0 : N.business, o, t.asPath]),
                    L = (0, u.useMemo)(function() {
                        return s && M && (!(r && (0, l.isClientSide)()) || window.WebviewInterfaceVersion === I.gO.MOSTLY_WEBVIEW) && p
                    }, [s, p, M, r]),
                    q = (0, b.aM)(["my-orders"], function() {
                        return (0, j.Mw)({
                            per_page: 10,
                            sort: "paid_at:desc",
                            "parcels.statuses": E.join(",")
                        })
                    }, {
                        enabled: L
                    }),
                    O = q.data,
                    R = q.isLoading,
                    z = q.isFetched,
                    U = (0, b.aM)(["review-suggestion"], y.xN, {
                        enabled: L
                    }),
                    V = U.data,
                    B = U.isLoading,
                    W = U.isFetched,
                    F = (0, b.aM)(["exploreModalPromotion", Z], function() {
                        return (0, g.Z2)({
                            userId: Z || 0,
                            config: {
                                params: {
                                    tab: "modals"
                                }
                            }
                        })
                    }, {
                        enabled: L && !!Z
                    }),
                    G = F.data,
                    H = F.isLoading,
                    Q = F.isFetched,
                    Y = z && W && !!Z && Q,
                    K = L && (R || B || !!Z && H),
                    X = (0, u.useMemo)(function() {
                        return {
                            OrderTracking: C,
                            ModalPromotion: S,
                            ReviewSuggestion: x
                        }
                    }, []),
                    J = (0, u.useMemo)(function() {
                        var e, t = null === (e = D[0]) || void 0 === e ? void 0 : e.ui;
                        if (!t) return null;
                        var n = t.split("_").map(function(e) {
                                return e.charAt(0).toUpperCase() + e.slice(1)
                            }).join(""),
                            r = X[n];
                        return r || console.warn('Component "'.concat(n, '" not found for popup type "').concat(t, '"')), r || null
                    }, [D, X]);
                return (0, u.useEffect)(function() {
                    var e = l.bsLocalStorage.getItem(k);
                    e ? T(A(M ? e : [])) : d(!0)
                }, [M, A]), (0, u.useEffect)(function() {
                    if ("requestIdleCallback" in window) {
                        var e = requestIdleCallback(function() {
                            f(!0)
                        });
                        return function() {
                            return cancelIdleCallback(e)
                        }
                    }
                    return f(!0),
                        function() {}
                }, []), (0, u.useEffect)(function() {
                    var e, n, r;
                    if (!K && s && Y) {
                        var o = [];
                        M && (null == O || null === (n = O.data) || void 0 === n ? void 0 : n.length) && o.push({
                            ui: "order_tracking",
                            orders: O.data
                        }), M && (null == G || null === (r = G.items) || void 0 === r ? void 0 : r.length) && (e = o).push.apply(e, _to_consumable_array(G.items)), M && !(0, _.isPdpPage)(t.asPath) && (null == V ? void 0 : V.id) && o.push({
                            ui: "review_suggestion",
                            review: V
                        }), d(!1), l.bsLocalStorage.setItem(k, o, 86400), T(A(o))
                    }
                }, [s, K, M, Y, O, G, V, t, A]), J && (0, a.jsx)(J, {
                    items: D[0],
                    clearItem: function() {
                        var e;
                        return function(e) {
                            var t = l.bsLocalStorage.getItem(k).filter(function(t) {
                                return t.ui !== e
                            });
                            T(function(t) {
                                return t.filter(function(t) {
                                    return t.ui !== e
                                })
                            }), l.bsLocalStorage.setItem(k, t, 86400)
                        }(null === (e = D[0]) || void 0 === e ? void 0 : e.ui)
                    }
                }, null === (e = D[0]) || void 0 === e ? void 0 : e.ui)
            }
            var T = n(94002),
                P = n(58271),
                N = s()(function() {
                    return n.e(1269).then(n.bind(n, 61269))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [61269]
                        }
                    },
                    ssr: !1
                }),
                M = s()(function() {
                    return Promise.all([n.e(2998), n.e(2485), n.e(4400), n.e(9796)]).then(n.bind(n, 86571))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [86571]
                        }
                    },
                    ssr: !1
                }),
                Z = s()(function() {
                    return n.e(4676).then(n.bind(n, 84676))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [84676]
                        }
                    },
                    ssr: !1
                }),
                A = s()(function() {
                    return Promise.all([n.e(1305), n.e(3904)]).then(n.bind(n, 91305))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [91305]
                        }
                    },
                    ssr: !1
                }),
                L = s()(function() {
                    return n.e(4969).then(n.bind(n, 64969))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [64969]
                        }
                    },
                    ssr: !1
                }),
                q = s()(function() {
                    return Promise.all([n.e(2998), n.e(4443)]).then(n.bind(n, 84443))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [84443]
                        }
                    },
                    ssr: !1
                }),
                O = s()(function() {
                    return n.e(4021).then(n.bind(n, 34021))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [34021]
                        }
                    },
                    ssr: !1
                }),
                R = s()(function() {
                    return Promise.all([n.e(2998), n.e(5376)]).then(n.bind(n, 65376))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [65376]
                        }
                    },
                    ssr: !1
                }),
                z = s()(function() {
                    return Promise.all([n.e(5382), n.e(7314), n.e(8035)]).then(n.bind(n, 62481))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [62481]
                        }
                    },
                    ssr: !1
                }),
                U = s()(function() {
                    return n.e(9430).then(n.bind(n, 99430))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [99430]
                        }
                    },
                    ssr: !1
                }),
                V = (0, u.memo)(function() {
                    var e = (0, c.Z)(),
                        t = (0, w.b)(),
                        n = t.isWebview,
                        r = t.ua,
                        o = (0, v.useEmitter)(),
                        i = o.subEvent,
                        s = o.offEvent,
                        f = _sliced_to_array((0, u.useState)(!1), 2),
                        _ = f[0],
                        b = f[1],
                        h = _sliced_to_array((0, u.useState)(null), 2),
                        g = h[0],
                        y = h[1],
                        j = (0, u.useRef)(null),
                        I = _sliced_to_array((0, u.useState)(null), 2),
                        x = I[0],
                        S = I[1],
                        C = _sliced_to_array((0, u.useState)(null), 2),
                        k = C[0],
                        E = C[1],
                        V = _sliced_to_array((0, u.useState)(null), 2),
                        B = V[0],
                        W = V[1],
                        F = _sliced_to_array((0, u.useState)(null), 2),
                        G = F[0],
                        H = F[1],
                        Q = _sliced_to_array((0, u.useState)(null), 2),
                        Y = Q[0],
                        K = Q[1],
                        X = (0, u.useCallback)(function() {
                            return S(!0)
                        }, []),
                        J = (0, u.useCallback)(function(e) {
                            return y(e)
                        }, []),
                        $ = (0, u.useCallback)(function(e) {
                            return E(e)
                        }, []),
                        ee = (0, u.useCallback)(function(e) {
                            return W(e)
                        }, []),
                        te = (0, u.useCallback)(function(e) {
                            return H(e)
                        }, []),
                        ne = (0, u.useCallback)(function(e) {
                            return K(e)
                        }, []),
                        re = (0, u.useCallback)(function() {
                            return (0, u.startTransition)(function() {
                                return S(null)
                            })
                        }, []),
                        oe = (0, u.useCallback)(function() {
                            return (0, u.startTransition)(function() {
                                return E(null)
                            })
                        }, []),
                        ae = (0, u.useCallback)(function() {
                            return (0, u.startTransition)(function() {
                                return W(null)
                            })
                        }, []),
                        ie = (0, u.useCallback)(function() {
                            return (0, u.startTransition)(function() {
                                return H(null)
                            })
                        }, []),
                        se = (0, u.useCallback)(function(e) {
                            return (0, u.startTransition)(function() {
                                void 0 !== e && (j.current = _object_spread_props(_object_spread({}, g), {
                                    scrollPosition: e
                                })), y(null)
                            })
                        }, [g]),
                        ue = (0, u.useCallback)(function() {
                            return (0, u.startTransition)(function() {
                                return K(null)
                            })
                        }, []);
                    return (0, u.useEffect)(function() {
                        return requestIdleCallback(function() {
                                (0, u.startTransition)(function() {
                                    return b(!0)
                                })
                            }), i("open-ban-modal", X, {
                                autoOff: !1
                            }), i("open-wishlist-modal", te, {
                                autoOff: !1
                            }), i("show-more-like-this-modal", J, {
                                autoOff: !1
                            }), i("open-cart-info-modal", ne, {
                                autoOff: !1
                            }), i("show-report-content-modal", ee, {
                                autoOff: !1
                            }), i("show-add-or-edit-review-modal", $, {
                                autoOff: !1
                            }),
                            function() {
                                s("open-ban-modal", X), s("open-wishlist-modal", te), s("show-more-like-this-modal", J), s("open-cart-info-modal", ne), s("show-report-content-modal", ee), s("show-add-or-edit-review-modal", $)
                            }
                    }, []), (0, u.useEffect)(function() {
                        !(0, l.isServerSide)() && window.location.hash.includes("mlt") && j.current && (J(j.current), j.current = null)
                    }, [e.asPath]), (0, a.jsx)(p.Z, {
                        children: (0, a.jsxs)(T.ErrorBoundary, {
                            fallback: (0, a.jsx)("div", {}),
                            onError: P.wJ,
                            children: [!n && (0, a.jsx)(q, {}), x && (0, a.jsx)(N, {
                                data: x,
                                onClose: re
                            }), !n && (0, a.jsx)(M, {}), _ && (0, a.jsx)(D, {}), k && (0, a.jsx)(A, {
                                data: k,
                                onClose: oe
                            }), B && (0, a.jsx)(O, {
                                data: B,
                                onClose: ae
                            }), G && (0, a.jsx)(R, {
                                data: G,
                                onClose: ie
                            }), g && (0, a.jsx)(U, {
                                data: g,
                                onClose: se
                            }), Y && (0, a.jsx)(L, {
                                data: Y,
                                onClose: ue
                            }), !r.isPc && !n && (0, a.jsx)(z, {}), (0, a.jsx)(m(), {
                                position: r.isPc ? "top-right" : "top-center"
                            }), !n && (0, a.jsx)(Z, {}), !n && (0, a.jsx)(d, {})]
                        })
                    })
                }),
                B = n(40877),
                W = n(2347),
                F = n(51446),
                G = n.n(F),
                H = n(72332),
                Q = n(87540),
                Y = n(60214),
                K = n(85185),
                X = n(177),
                J = n.n(X),
                $ = n(76303),
                ee = n.n($),
                te = n(53278),
                ne = n.n(te),
                re = n(60802),
                oe = {
                    hint: {
                        color: "blue",
                        icon: "bi-lamp-shine-fill"
                    },
                    neutral: {
                        color: "primary",
                        icon: "bi-info-fill"
                    },
                    warning: {
                        color: "warning",
                        icon: "bi-warning-fill"
                    },
                    error: {
                        color: "danger",
                        icon: "bi-close-circle-fill"
                    }
                };

            function ae(e) {
                var t, n, r, o = e.shouldReserveTopBannerSpace,
                    i = (0, w.b)().ua,
                    s = (0, c.Z)(),
                    d = _sliced_to_array((0, u.useState)(!1), 2),
                    v = d[0],
                    p = d[1],
                    f = _sliced_to_array((0, u.useState)(!0), 2),
                    m = f[0],
                    _ = f[1],
                    b = _sliced_to_array((0, u.useState)(!1), 2),
                    h = b[0],
                    g = b[1],
                    y = function() {
                        var e = (0, re.l)().getFeatureValue,
                            t = (0, u.useMemo)(function() {
                                return (0, l.camelize)(e("sticky_banner"))
                            }, [e]),
                            n = (0, u.useMemo)(function() {
                                return (0, l.camelize)(e("urgent_sticky_note"))
                            }, [e]),
                            r = (0, u.useMemo)(function() {
                                if (!(null == t ? void 0 : t.endTime) || !(null == t ? void 0 : t.startTime)) return !1;
                                var e = (0, l.gregoryDate)().isBefore((0, l.gregoryDate)(t.endTime));
                                return (0, l.gregoryDate)().isAfter((0, l.gregoryDate)(t.startTime)) && e
                            }, [null == t ? void 0 : t.startTime, null == t ? void 0 : t.endTime]),
                            o = (null == t ? void 0 : t.show) && r;
                        return {
                            banner: t,
                            isShowBanner: o,
                            urgentBanner: n
                        }
                    }(),
                    j = y.banner,
                    I = y.isShowBanner,
                    x = y.urgentBanner,
                    S = (null == j ? void 0 : j.moreLink) ? W.Z : "div",
                    C = null == x || null === (t = x.variant) || void 0 === t ? void 0 : t.toLowerCase();
                (0, u.useEffect)(function() {
                    p(!0), I ? ((0, Y.addClass)(document.body, "wb"), document.documentElement.style.setProperty("--top-banner-height", i.isMobile ? "48px" : "56px")) : document.documentElement.style.setProperty("--top-banner-height", "0px")
                }, [I, i.isMobile]);
                var k = (0, u.useMemo)(function() {
                    return K.X.has(s.pathname)
                }, [s.pathname]);
                return (null == x ? void 0 : x.show) && !k ? (0, a.jsx)("div", {
                    id: "urgent-sticky-note",
                    className: (0, B.Z)(G()["urgent-banner"], G()["urgent-banner--".concat(C)], _define_property({}, G()["urgent-banner--hidden"], h)),
                    children: (0, a.jsxs)(J(), {
                        fluid: i.isMobile,
                        className: G()["urgent-banner__text"],
                        children: [(0, a.jsx)(ee(), {
                            className: G()["urgent-banner__icon"],
                            name: null === (n = oe[C]) || void 0 === n ? void 0 : n.icon,
                            color: "var(--".concat(null === (r = oe[C]) || void 0 === r ? void 0 : r.color, ")")
                        }), null == x ? void 0 : x.text, (0, a.jsx)("div", {
                            className: G()["urgent-banner__close"],
                            onClick: function() {
                                g(!0)
                            },
                            children: (0, a.jsx)(ee(), {
                                name: "bi-close",
                                size: i.isMobile ? "16" : "24"
                            })
                        })]
                    })
                }) : I && !k ? (0, a.jsxs)(S, {
                    id: "top-banner",
                    target: "_blank",
                    href: j.moreLink,
                    rel: "noopener noreferrer",
                    className: G()["top-banner"],
                    children: [(0, a.jsx)(ne(), {
                        alt: "top banner",
                        className: G()["top-banner__image"],
                        src: i.isPc ? j.image.desktop : j.image.mobile,
                        ratio: i.isMobile ? .095 : .03
                    }), v && m && j.endTime && (i.isPc || i.isMobile && j.showTimerInMobile ? (0, a.jsx)("section", {
                        className: G()["top-banner__countdown-box"],
                        children: (0, a.jsx)(Q.Z, {
                            showDays: !0,
                            showHours: !0,
                            onTimesUp: function() {
                                return _(!1)
                            },
                            endTime: j.endTime,
                            itemClass: G()["top-banner__countdown-item"],
                            className: G()["top-banner__countdown"]
                        })
                    }) : null)]
                }) : o ? (0, a.jsx)(H.Z, {}) : null
            }
            var ie = n(64191),
                se = n(29723),
                ue = n(43828),
                ce = n(67101),
                le = n(61262),
                de = n(9775),
                ve = (0, u.memo)(function() {
                    var e = (0, u.useRef)(""),
                        t = (0, ue.useRouter)(),
                        n = (0, w.b)().isWebview,
                        r = (0, se.Kp)(["webviewActiveTab"]).webviewActiveTab,
                        o = (0, le.B)().auth.setWebviewActiveTab,
                        i = (0, u.useCallback)(function() {
                            if ("visible" === document.visibilityState && window.WebviewInterfaceVersion === I.gO.MOSTLY_WEBVIEW) {
                                var n, o, a, i = (0, I.Cw)();
                                e.current === r ? "navigation" === t.query.from && de.w.includes(t.pathname) ? null === (n = i.setBottomNavigationVisibility) || void 0 === n || n.call(i, !0) : null === (o = i.setBottomNavigationVisibility) || void 0 === o || o.call(i, !1) : "native" === e.current && (null === (a = i.setBottomNavigationVisibility) || void 0 === a || a.call(i, !1))
                            }
                        }, [t.pathname, t.query.from, r]),
                        s = (0, u.useCallback)(function() {
                            if (!(0, l.isDevelopment)()) try {
                                (0, ce.nZ)().setContext("Webview", {
                                    enabled: n,
                                    version: window.WebviewInterfaceVersionName
                                })
                            } catch (e) {
                                console.error("Error setting webview context", e)
                            }
                        }, [n]),
                        c = (0, u.useCallback)(function() {
                            window.__isTimersInterceptorPatched || (window.__origSetTimeout || (window.__origSetTimeout = window.setTimeout, window.__origSetInterval = window.setInterval, window.__origRaf = window.requestAnimationFrame, window.__expTimeouts = [], window.__expIntervals = []), window.onActivated = function() {
                                return -1
                            }, window.onDeactivated = function() {
                                return -1
                            }, window.onWebViewDeactivated = function() {
                                window.__pausedTimers || (window.setTimeout = function(e, t) {
                                    return window.__expTimeouts.push({
                                        cb: e,
                                        delay: t
                                    })
                                }, window.setInterval = function(e, t) {
                                    return window.__expIntervals.push({
                                        cb: e,
                                        delay: t
                                    })
                                }, window.requestAnimationFrame = function() {
                                    return -1
                                }, document.querySelectorAll("video,audio").forEach(function(e) {
                                    var t;
                                    return null === (t = e.pause) || void 0 === t ? void 0 : t.call(e)
                                }), window.__pausedTimers = !0)
                            }, window.onWebViewActivated = function() {
                                window.__pausedTimers && (window.setTimeout = window.__origSetTimeout, window.setInterval = window.__origSetInterval, window.requestAnimationFrame = window.__origRaf, window.__expTimeouts.forEach(function(e) {
                                    return setTimeout(e.cb, e.delay)
                                }), window.__expIntervals.forEach(function(e) {
                                    return setInterval(e.cb, e.delay)
                                }), window.__expTimeouts = [], window.__expIntervals = [], window.__pausedTimers = !1)
                            }, window.__isTimersInterceptorPatched = !0)
                        }, []);
                    return (0, u.useEffect)(function() {
                        n && (window.getCurrentActiveTab = function(e) {
                            return o(e)
                        }), n && (window.backFromAndroid = function(e) {
                            var n, r;
                            "/" === (null == e ? void 0 : e.split("?")[0]) && ["/account", "/cart", "/cat/list"].includes(null === (r = history) || void 0 === r || null === (n = r.state) || void 0 === n ? void 0 : n.as) ? t.push("/?client=app") : t.back()
                        }, c()), n && document.body.classList.add("webview"), requestIdleCallback(function() {
                            return s()
                        })
                    }, [n]), (0, u.useEffect)(function() {
                        var n;
                        n = l.bsSessionStorage.getItem("root_path") ? l.bsSessionStorage.getItem("root_path") : de.w.includes(t.pathname) ? t.pathname : "native", e.current = n, l.bsSessionStorage.setItem("root_path", n)
                    }, []), (0, u.useEffect)(function() {
                        return n ? (i(), document.addEventListener("visibilitychange", i), function() {
                            return document.removeEventListener("visibilitychange", i)
                        }) : function() {}
                    }, [n, i]), (0, a.jsx)("div", {})
                }),
                pe = n(24634),
                fe = n(90483),
                me = n(98412),
                _e = n(14347),
                be = n(67552),
                he = n.n(be),
                ge = n(2018),
                we = n(67375),
                ye = n(12179),
                je = .1 > Math.random(),
                Ie = [{
                    name: "soton",
                    url: "https://test2.basalam.com/"
                }, {
                    name: "miremad",
                    url: "https://dc01.basalam.com"
                }, {
                    name: "milad",
                    url: "https://dc02.basalam.com"
                }, {
                    name: "afranet",
                    url: "https://dc03.basalam.com"
                }, {
                    name: "emam",
                    url: "https://dc04.basalam.com"
                }, {
                    name: "basalam",
                    url: "https://dc05.basalam.com"
                }, {
                    name: "amin",
                    url: "https://dc06.basalam.com"
                }],
                xe = {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    auth: {
                        username: "basalam",
                        password: "ZoLGZeXHOIDyhn23"
                    }
                };
            var Se = {
                    value: 0,
                    clsPageUrl: "",
                    clsPageName: "",
                    clsPageRoute: "",
                    topCLSElements: []
                },
                Ce = 0,
                ke = 0;

            function Ee(e) {
                var t = e.webVitalData,
                    n = (0, u.useRef)({}),
                    r = (0, c.Z)(),
                    i = (0, u.useRef)(!1),
                    s = (0, u.useRef)(null),
                    d = (0, h.M_)(["userId", "currentUser", "isLoggedIn"]),
                    v = d.userId,
                    p = d.currentUser,
                    f = d.isLoggedIn,
                    m = (0, u.useCallback)(function(e) {
                        n.current = _object_spread({}, n.current, e)
                    }, []);
                return (0, u.useEffect)(function() {
                    try {
                        var e;
                        n.current = function(e, t) {
                            var n, r, o, a, i, s, u, c, l, d, v, p = e.ua,
                                f = e.deviceId,
                                m = e.userId,
                                _ = e.userAgent,
                                b = e.webVitalData,
                                h = e.isCsr;
                            return _object_spread_props(_object_spread({}, function() {
                                if (!performance || !performance.getEntriesByType) return {};
                                var e = performance.getEntriesByType("navigation");
                                if (0 === e.length) return {};
                                var t = e[0];
                                return {
                                    "network.total": Math.round(Math.max(t.requestStart - t.startTime, 0)),
                                    "network.swInit": Math.round(Math.max(t.fetchStart - t.workerStart, 0)),
                                    "network.reqToRes": Math.round(Math.max(t.responseStart - t.requestStart, 0)),
                                    "network.tcpHandshake": Math.round(Math.max(t.connectEnd - t.connectStart, 0)),
                                    "network.beforeDns": Math.round(Math.max(t.domainLookupStart - t.startTime, 0)),
                                    "network.responseTime": Math.round(Math.max(t.responseEnd - t.responseStart, 0)),
                                    "network.redirectTime": Math.round(Math.max(t.redirectEnd - t.redirectStart, 0)),
                                    "network.dnsToRes": Math.round(Math.max(t.requestStart - t.domainLookupStart, 0)),
                                    "network.connectionToReq": Math.round(Math.max(t.requestStart - t.connectEnd, 0)),
                                    "network.pageLoadTime": Math.round(Math.max(t.loadEventStart - t.loadEventEnd, 0)),
                                    "network.dnsTime": Math.round(Math.max(t.domainLookupEnd - t.domainLookupStart, 0)),
                                    "network.startUntilResponseEnd": Math.round(Math.max(t.responseEnd - t.startTime, 0)),
                                    "network.fetchUntilResponseEnd": Math.round(Math.max(t.responseEnd - t.fetchStart, 0)),
                                    "network.reqStartUntilResponseEnd": Math.round(Math.max(t.responseEnd - t.requestStart, 0)),
                                    "network.secureConnection": Math.round(Math.max(t.connectEnd - t.secureConnectionStart, 0)),
                                    "network.domTotalTime": Math.round(Math.max(t.domComplete - t.domContentLoadedEventStart, 0)),
                                    "network.domContentLoaded": Math.round(Math.max(t.domContentLoadedEventEnd - t.domContentLoadedEventStart, 0))
                                }
                            }()), {
                                inp: 0,
                                dcl: 0,
                                fcp: 0,
                                lcp: 0,
                                cls: 0,
                                fid: 0,
                                load: 0,
                                ttfb: 0,
                                lcp2: 0,
                                cls2: {},
                                ttfb2: 0,
                                inpPageUrl: null,
                                lcpResponseEnd: 0,
                                "page.spa": h,
                                inpPageName: null,
                                project: "charsou",
                                lcpRequestStart: 0,
                                inpPageRoute: null,
                                "user.ili": !!m,
                                "user.os": p.os.name,
                                isWebview: he()(),
                                "user.isCrux": (null === (d = p.browser) || void 0 === d || null === (l = d.name) || void 0 === l ? void 0 : l.toLowerCase().includes("chrome")) && !(null === (v = p.os.name) || void 0 === v ? void 0 : v.toLowerCase().includes("mac")),
                                "user.deviceId": f,
                                srt: b.srt || 0,
                                "user.ip": b.ip,
                                "user.userId": m || 0,
                                "user.userAgent": _,
                                "page.route": t.asPath,
                                _id: (0, _e.Z)() + Date.now(),
                                "user.browser": p.browser.name,
                                "page.url": window.location.href,
                                "page.name": (0, me.j)(t),
                                traceId: null !== (c = b.traceId) && void 0 !== c ? c : null,
                                "page.hasVideo": b.hasVideo,
                                "api.pdrt": b.pageData || 0,
                                "api.pdpReq": b.pdpReq || 0,
                                "page.cacheRead": window.cacheRead || 0,
                                "api.idrt": b.initialData || 0,
                                "api.pdpFirst": b.pdpFirst || 0,
                                "user.hasStorageAccess": (0, ge.$)(),
                                "user.browserMajorVersion": p.browser.major,
                                "api.pageProps": b.pageProps || 0,
                                "user.browserFullVersion": p.browser.version,
                                "page.isRedirected": !!(null == t || null === (n = t.query) || void 0 === n ? void 0 : n.replaced),
                                "api.pdpStatus": b.pdpStatus || null,
                                "page.cacheGenerate": window.cacheGenerate || 0,
                                "api.categories": b.categoriesData || 0,
                                "network.connection": (null === (o = navigator) || void 0 === o || null === (r = o.connection) || void 0 === r ? void 0 : r.type) || "unknown",
                                "page.categoryIsInExplore": !!b.categoryIsInExplore,
                                "network.networkType": (null === (i = navigator) || void 0 === i || null === (a = i.connection) || void 0 === a ? void 0 : a.effectiveType) || "unknown",
                                webviewVersion: window.WebviewInterfaceVersion || (null === (s = (0, I.Cw)()) || void 0 === s ? void 0 : s.version),
                                "app.versionName": window.WebviewInterfaceVersionName || (null === (u = (0, I.Cw)()) || void 0 === u ? void 0 : u.versionName),
                                "page.cache": void 0 === window.cacheRead ? void 0 === window.cacheGenerate ? "BYPASS" : "MISS" : "HIT"
                            })
                        }({
                            userId: v,
                            ua: o()(),
                            webVitalData: t,
                            deviceId: (0, fe.Z)(),
                            isCsr: window.loadedInCsrMode,
                            userAgent: navigator.userAgent
                        }, r), s.current = new PerformanceObserver(function(e) {
                            var t = function(e) {
                                return (e.getEntries() || []).forEach(function(e) {
                                    if (!e.hadRecentInput) {
                                        var t, n, r, o;
                                        if (e.value >= .01) {
                                            var a = function(e) {
                                                if (e) try {
                                                    return {
                                                        elementClassName: e && e.className ? "string" == typeof e.className ? e.className : void 0 !== e.className.baseVal ? e.className.baseVal : "" : "",
                                                        nodeName: e.nodeName || e.tagName || ""
                                                    }
                                                } catch (e) {}
                                                return {
                                                    elementClassName: "",
                                                    nodeName: ""
                                                }
                                            }(null === (o = e.sources) || void 0 === o || null === (r = o[0]) || void 0 === r ? void 0 : r.node);
                                            Se = _object_spread_props(_object_spread({}, Se), {
                                                topCLSElements: _to_consumable_array(Se.topCLSElements).concat([{
                                                    value: e.value,
                                                    nodeName: a.nodeName,
                                                    elementClassName: a.elementClassName
                                                }])
                                            })
                                        }
                                        Se = _object_spread_props(_object_spread({}, Se), {
                                            value: Se.value + e.value,
                                            clsPageUrl: window.location.href || "",
                                            clsPageName: (null === (t = window.__CLS2Data) || void 0 === t ? void 0 : t.name) || "",
                                            clsPageRoute: (null === (n = window.__CLS2Data) || void 0 === n ? void 0 : n.route) || ""
                                        }), Ce += e.value
                                    }
                                }), {
                                    cls: Ce
                                }
                            }(e);
                            i.current || m(t)
                        }), null === (e = s.current) || void 0 === e || e.observe({
                            type: "layout-shift",
                            buffered: !0
                        });
                        var a = new PerformanceObserver(function(e) {
                            var t = function(e) {
                                var t = {};
                                try {
                                    var n = e.getEntries().at(-1),
                                        r = performance.getEntriesByType("navigation")[0],
                                        o = performance.getEntriesByType("resource").find(function(e) {
                                            return e.name === n.url
                                        }),
                                        a = r.responseStart,
                                        i = Math.max(a, o ? o.requestStart || o.startTime : 0),
                                        s = Math.max(i, o ? o.responseEnd : 0),
                                        u = Math.max(s, n ? n.renderTime || n.loadTime : 0);
                                    t.ttfb2 = Math.round(a), t.lcpRequestStart = Math.round(i), t.lcpResponseEnd = Math.round(s), t.lcp2 = Math.round(u)
                                } catch (e) {
                                    console.log("error performance observer LCP", e)
                                }
                                return t
                            }(e);
                            m(t), (0, pe.g)(n.current)
                        });
                        a.observe({
                            type: "largest-contentful-paint",
                            buffered: !0
                        });
                        var u = new PerformanceObserver(function(e) {
                            var t = function(e) {
                                var t = 0;
                                return (e.getEntries() || []).forEach(function(e) {
                                    t = Math.round(e.processingStart - e.startTime)
                                }), t > ke ? {
                                    fid: t,
                                    inp: t
                                } : {
                                    fid: t
                                }
                            }(e);
                            m(t)
                        });
                        u.observe({
                            type: "first-input",
                            buffered: !0
                        });
                        var c = new PerformanceObserver(function(e) {
                            var t = function(e) {
                                var t, n, r = e.getEntries() || [],
                                    o = 0,
                                    a = null,
                                    i = "";
                                return r.forEach(function(e) {
                                    if (e.interactionId && !(o >= e.duration)) {
                                        var t = null == e ? void 0 : e.target;
                                        o = e.duration, a = e.name, i = (null == t ? void 0 : t.className) || ""
                                    }
                                }), ke < o ? (ke = o, {
                                    inp: o,
                                    className: i,
                                    inpAction: a,
                                    inpPageUrl: window.location.href,
                                    inpPageName: null === (t = window.__INPData) || void 0 === t ? void 0 : t.name,
                                    inpPageRoute: null === (n = window.__INPData) || void 0 === n ? void 0 : n.route
                                }) : null
                            }(e);
                            t && m(t)
                        });
                        return c.observe({
                                type: "event",
                                buffered: !0,
                                durationThreshold: 40
                            }), (0, we.NO)(function(e) {
                                n.current.lcp = e.value
                            }), (0, we.a4)(function(e) {
                                n.current.fcp = e.value, n.current.lcp2 && (n.current.lcp2 = Math.max(n.current.lcp, e.value))
                            }), (0, we.mr)(function(e) {
                                n.current.ttfb = e.value
                            }), (0, we.Yn)(function(e) {
                                var t = e.value;
                                n.current.inp = n.current.inp && t < n.current.inp ? n.current.inp : t, (0, pe.g)(n.current)
                            }),
                            function() {
                                var e;
                                e = s.current, u && u.disconnect(), e && e.disconnect()
                            }
                    } catch (e) {
                        return console.warn(e),
                            function() {}
                    }
                }, []), (0, u.useEffect)(function() {
                    var e = function(e) {
                        if ("pagehide" === e.type || "hidden" === document.visibilityState) {
                            var t = (0, me.j)(r),
                                o = _object_spread({}, Se);
                            o.value > 0 && (!n.current.cls2[t] || o.value > n.current.cls2[t].value) && m({
                                cls2: _object_spread_props(_object_spread({}, n.current.cls2), _define_property({}, t, _object_spread({}, o)))
                            }), (0, pe.g)(n.current)
                        }
                    };
                    return window.addEventListener("visibilitychange", e, !0), window.addEventListener("pagehide", e, !0),
                        function() {
                            window.removeEventListener("visibilitychange", e), window.removeEventListener("pagehide", e)
                        }
                }, []), (0, u.useEffect)(function() {
                    (!f || p) && requestIdleCallback(function() {
                        var e, n;
                        ! function(e) {
                            var t, n, r, o, a, i, s, u, c = e.ua,
                                d = e.deviceId,
                                v = e.userId,
                                p = e.ip,
                                f = e.cityId;
                            if (je && !(0, l.isDevelopment)()) {
                                var m = {
                                    ip: p,
                                    userId: v,
                                    cityId: f,
                                    deviceId: d,
                                    os: null == c || null === (t = c.os) || void 0 === t ? void 0 : t.name,
                                    project: "charsou",
                                    url: window.location.href,
                                    browser: null == c ? void 0 : c.browser.name,
                                    instanceKey: (0, l.generateRandomString)(10),
                                    userAgent: (null === (n = navigator) || void 0 === n ? void 0 : n.userAgent) || "unknown",
                                    network: (null === (a = navigator) || void 0 === a || null === (o = a.connection) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.toLowerCase()) || "unknown",
                                    networkType: (null === (u = navigator) || void 0 === u || null === (s = u.connection) || void 0 === s || null === (i = s.effectiveType) || void 0 === i ? void 0 : i.toLowerCase()) || "unknown"
                                };
                                Ie.forEach(function(e) {
                                    ! function(e, t) {
                                        _async_to_generator(function() {
                                            var n, r, o, a;
                                            return _ts_generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        n = _object_spread_props(_object_spread({}, t), {
                                                            host: e.name
                                                        }), r = Date.now(), i.label = 1;
                                                    case 1:
                                                        return i.trys.push([1, 3, 4, 6]), [4, (0, ye.Z)(e.url)];
                                                    case 2:
                                                        return i.sent(), n.status = "success", n.statusCode = 200, [3, 6];
                                                    case 3:
                                                        return o = i.sent(), a = (0, P.Pt)(o), n.status = "fail", n.error = o.message || "", n.statusCode = (null == a ? void 0 : a.statusCode) || 500, [3, 6];
                                                    case 4:
                                                        return function(e, t) {
                                                            if (void 0 !== performance) {
                                                                var n = performance.getEntriesByType("resource");
                                                                void 0 === n || n.length <= 0 || n.forEach(function(n) {
                                                                    if (n.name === e) {
                                                                        var r = n.redirectEnd - n.redirectStart;
                                                                        t.redirectTime = r >= 0 ? r : null;
                                                                        var o = n.domainLookupEnd - n.domainLookupStart;
                                                                        t.dnsTime = o >= 0 ? o : null;
                                                                        var a = n.connectEnd - n.connectStart;
                                                                        t.tcpHandshake = a >= 0 ? a : null;
                                                                        var i = n.secureConnectionStart >= 0 ? n.connectEnd - n.secureConnectionStart : "0";
                                                                        t.secureConnection = i >= 0 ? i : null;
                                                                        var s = n.responseEnd - n.responseStart;
                                                                        t.responseTime = s >= 0 ? s : null;
                                                                        var u = n.fetchStart >= 0 ? n.responseEnd - n.fetchStart : null;
                                                                        t.fetchUntilResponseEnd = u;
                                                                        var c = n.requestStart >= 0 ? n.responseEnd - n.requestStart : null;
                                                                        t.reqStartUntilResponseEnd = c;
                                                                        var l = n.startTime >= 0 ? n.responseEnd - n.startTime : null;
                                                                        t.startUntilResponseEnd = l
                                                                    }
                                                                })
                                                            }
                                                        }(e.url, n), n.totalTime = Date.now() - r, [4, Promise.allSettled([ye.Z.post("https://loki-proxy.darkube.app/store/dc", _object_spread_props(_object_spread({}, n), {
                                                            endPoint: "hamravesh"
                                                        }), xe)])];
                                                    case 5:
                                                        return i.sent(), [7];
                                                    case 6:
                                                        return [2]
                                                }
                                            })
                                        })()
                                    }(e, m)
                                })
                            }
                        }({
                            ua: o()(),
                            userId: v || 0,
                            ip: null == t ? void 0 : t.ip,
                            deviceId: (0, fe.Z)(),
                            cityId: (null == p || null === (e = p.city) || void 0 === e ? void 0 : e.id) || null,
                            cityName: (null == p || null === (n = p.city) || void 0 === n ? void 0 : n.title) || null
                        })
                    }, {
                        timeout: 1e4
                    })
                }, [f, p, v]), (0, u.useEffect)(function() {
                    var e, t, o, a, s = (0, me.j)(r),
                        u = null === (t = window) || void 0 === t || null === (e = t.__CLS2Data) || void 0 === e ? void 0 : e.name,
                        c = r.asPath;
                    (0, l.isClientSide)() && (window.__INPData = {
                        route: c,
                        name: s
                    }), n.current["page.name"] !== s && (i.current = !0);
                    var d = _object_spread({}, Se);
                    u && d.value > 0 && (!(null === (o = n.current.cls2) || void 0 === o ? void 0 : o[u]) || d.value > (null === (a = n.current.cls2) || void 0 === a ? void 0 : a[u].value)) && m({
                        cls2: _object_spread_props(_object_spread({}, n.current.cls2), _define_property({}, u, _object_spread({}, d)))
                    }), Se = {
                        value: 0,
                        clsPageUrl: "",
                        clsPageName: "",
                        clsPageRoute: "",
                        topCLSElements: []
                    }, window.__CLS2Data = {
                        route: c,
                        name: s
                    }
                }, [r.asPath]), (0, a.jsx)("div", {})
            }
            var De = n(2134),
                Te = n.n(De),
                Pe = n(38857),
                Ne = n(37787),
                Me = n(59736),
                Ze = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, b.aM)(["bnpl-status"], Me.SU, e)
                },
                Ae = n(25867),
                Le = n(33918),
                qe = n(92231),
                Oe = n(14528),
                Re = n(55654),
                ze = n(79614);

            function Ue() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return ze.DZ.get("/web/v1/wallet/public/balance", e)
            }
            var Ve = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, b.aM)(["current-user-credit"], Ue, e)
            };
            var Be = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, b.aM)(["current-user-order-count", e], function() {
                        return function(e) {
                            return _async_to_generator(function() {
                                var t, n, r, o, a;
                                return _ts_generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return e ? (r = "orderCount_".concat(e), (o = l.bsLocalStorage.getItem(r)) ? [2, o] : [4, (0, j.F$)()]) : [2, 0];
                                        case 1:
                                            return a = i.sent(), [2, (l.bsLocalStorage.setItem(r, null !== (t = a.count) && void 0 !== t ? t : null, 86400), null !== (n = null == a ? void 0 : a.count) && void 0 !== n ? n : null)]
                                    }
                                })
                            })()
                        }(e)
                    }, t)
                },
                We = n(76255),
                Fe = function(e, t) {
                    (0, Pe.D)({
                        event: "f_".concat(e),
                        f_data: _object_spread_props(_object_spread({}, t), {
                            device_id: (0, fe.Z)()
                        })
                    })
                },
                Ge = n(47665),
                He = n(92369);

            function Qe(e) {
                var t, n, r, o, i = e.initialUserId,
                    s = e.authMode,
                    d = (0, c.Z)(),
                    v = (0, w.b)().isWebview,
                    p = (0, Re.Z)({
                        onSuccess: function(e) {
                            v && l.bsLocalStorage.setItem(h.gm, e)
                        }
                    }),
                    f = Ze({
                        enabled: !!(null === (t = p.data) || void 0 === t ? void 0 : t.id)
                    }),
                    m = Ve({
                        enabled: !!(null === (n = p.data) || void 0 === n ? void 0 : n.id)
                    }),
                    _ = Be(null == p || null === (r = p.data) || void 0 === r ? void 0 : r.id, {
                        retry: 1,
                        enabled: !!(null === (o = p.data) || void 0 === o ? void 0 : o.id)
                    }),
                    b = Te()().publicRuntimeConfig,
                    g = (0, h.M_)(["isLoggedIn", "currentUser"]),
                    y = g.isLoggedIn,
                    j = g.currentUser,
                    I = (0, le.B)().auth,
                    x = I.setBnpl,
                    S = I.setUserId,
                    C = I.setCredit,
                    k = I.setAuthMode,
                    E = I.setOrderCount,
                    D = I.setCurrentUser,
                    T = I.setIsLoadingCurrentUser,
                    N = _sliced_to_array((0, u.useState)(!v || y), 2),
                    M = N[0],
                    Z = N[1],
                    A = (0, u.useCallback)(function(e) {
                        var t, n;
                        e.ctrlKey && e.altKey && ("KeyA" === e.code || 65 === e.which) && (((null == j || null === (t = j.markedType) || void 0 === t ? void 0 : t.id) === Le.Pw.BASALAM_SUPPORT || (null == j || null === (n = j.markedType) || void 0 === n ? void 0 : n.id) === Le.Pw.BASALAM_COLLEAGUES) && d.push("/accounts/admin?prev=".concat(encodeURIComponent(window.location.href))))
                    }, [j]);
                return (0, u.useEffect)(function() {
                    s && k(s), i && S(i)
                }, []), (0, Ge.Z)(function() {
                    p.isLoading ? T(!0) : (p.data && (S(p.data.id), D(p.data), window.currentUser = p.data), Z(!0), T(!1), setTimeout(function() {
                        requestIdleCallback(function() {
                            var e;
                            return (0, Pe.e)(null === (e = p.data) || void 0 === e ? void 0 : e.id)
                        })
                    }, 5e3))
                }, [p.isLoading]), (0, u.useEffect)(function() {
                    p.data && !p.isLoading && (S(p.data.id), D(p.data), window.currentUser = p.data)
                }, [p.data]), (0, u.useEffect)(function() {
                    var e = _.data;
                    void 0 !== e && E(e)
                }, [_.data]), (0, u.useEffect)(function() {
                    _.isError && (0, P.S_)(_.error)
                }, [_.isError]), (0, u.useEffect)(function() {
                    var e = function() {
                        return {
                            getComesFrom: Ae.rj,
                            serviceName: "charsou",
                            errorSamplingRate: .1,
                            isDev: (0, l.isDevelopment)(),
                            ga4Id: (0, Ne.getCookie)("_ga"),
                            clientInfo: (0, qe.n)(),
                            maxQueueIterationDelay: 5e3,
                            getSessionId: We.I,
                            tools: {
                                webengage: Fe
                            },
                            organizationEnvironmentSecret: b.organizationEnvironmentSecret
                        }
                    };
                    y && "loading" !== _.status && p.data ? requestIdleCallback(function() {
                        var t, n = null !== (t = _.data) && void 0 !== t ? t : 0;
                        (0, He.initEventSdk)(_object_spread_props(_object_spread({}, e()), {
                            user: {
                                orderCount: n,
                                id: p.data.id,
                                userType: (0, Oe.Z)(n)
                            }
                        })), (0, He.updateUserEventData)({
                            orderCount: n,
                            id: p.data.id,
                            userType: (0, Oe.Z)(n)
                        })
                    }) : "error" === p.status ? requestIdleCallback(function() {
                        return (0, He.initEventSdk)(e())
                    }) : (0, He.preInitEventConfig)(e())
                }, [y, M, p.data, p.status, _.status]), (0, u.useEffect)(function() {
                    var e = f.data;
                    e && x(_object_spread({}, e))
                }, [f.data]), (0, u.useEffect)(function() {
                    var e = m.data;
                    e && C(_object_spread({}, e))
                }, [m.data]), (0, u.useEffect)(function() {
                    return document.addEventListener("keydown", A),
                        function() {
                            document.removeEventListener("keydown", A)
                        }
                }, [A]), (0, a.jsx)("div", {})
            }
            var Ye = n(18925),
                Ke = n(29962),
                Xe = n.n(Ke),
                Je = n(92034),
                $e = n.n(Je),
                et = n(43085),
                tt = n.n(et),
                nt = n(61108),
                rt = n(60610),
                ot = n.n(rt),
                at = n(43221),
                it = function(e) {
                    var t = e.price,
                        n = e.primaryPrice,
                        r = void 0 === n ? 0 : n,
                        o = (0, l.getDiscountPercent)(r, t),
                        i = (0, at.currencyFormat)(t),
                        s = (0, at.currencyFormat)(r);
                    return (0, a.jsxs)("div", {
                        className: ot()["cart-price"],
                        children: [!!r && r > t && (0, a.jsx)("span", {
                            className: ot()["cart-price__primary-value"],
                            children: s
                        }), (0, a.jsx)("span", {
                            className: ot()["cart-price__value"],
                            children: i
                        }), (0, a.jsx)(ee(), {
                            name: "bi-toman",
                            size: "24",
                            color: "var(--gray-600)"
                        }), !!r && r > t && (0, a.jsxs)("span", {
                            className: ot()["cart-price__off"],
                            children: ["٪", o]
                        })]
                    })
                },
                st = n(21891),
                ut = n.n(st),
                ct = n(81433),
                lt = n.n(ct),
                dt = n(74495),
                vt = n(44492),
                pt = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.product,
                        r = t.variationId,
                        o = t.showVariationList,
                        i = "string" == typeof n.photo ? n.photo : null === (e = n.photo) || void 0 === e ? void 0 : e.sm,
                        s = (0, u.useMemo)(function() {
                            return r && (null == n ? void 0 : n.variants) ? (0, dt.tC)(n.variants, r) : null
                        }, [r, n]),
                        c = (0, u.useMemo)(function() {
                            return (s ? s.price : n.price) || 0
                        }, [s, n]),
                        l = (0, u.useMemo)(function() {
                            return (s ? s.primaryPrice : n.primaryPrice) || 0
                        }, [s, n]);
                    return (0, a.jsxs)("div", {
                        className: ut()["atc-modal-product"],
                        children: [(0, a.jsxs)(lt(), {
                            display: "flex",
                            alignItems: "center",
                            children: [(0, a.jsx)(ne(), {
                                src: i,
                                alt: n.name || n.title,
                                className: ut()["atc-modal-product__img"]
                            }), (0, a.jsx)("div", {
                                className: ut()["atc-modal-product__name"],
                                children: n.name || n.title
                            })]
                        }), o && s && (0, a.jsx)(vt.Z, {
                            isHorizontal: !0,
                            properties: s.properties,
                            className: ut()["atc-modal-product__variation-list"]
                        }), (0, a.jsx)(it, {
                            primaryPrice: l,
                            price: c
                        })]
                    })
                },
                ft = n(11219),
                mt = n(65074),
                _t = n.n(mt),
                bt = n(26050),
                ht = n.n(bt),
                gt = n(7095),
                wt = n.n(gt),
                yt = n(42349),
                jt = function() {
                    var e, t = (0, Ye.t)(),
                        n = (0, w.b)().ua,
                        r = t.modal,
                        o = _sliced_to_array((0, u.useState)(null), 2),
                        i = o[0],
                        s = o[1],
                        c = (0, nt.K)(null === (e = r.product) || void 0 === e ? void 0 : e.id),
                        l = c.isError,
                        d = c.isLoading,
                        v = c.data,
                        p = c.refetch,
                        f = (0, u.useMemo)(function() {
                            return v || r.product || {}
                        }, [v, r.product]),
                        m = (0, u.useMemo)(function() {
                            return i && (null == f ? void 0 : f.variants) ? (0, dt.tC)(f.variants, i) : null
                        }, [i, f]),
                        _ = !!(null == v ? void 0 : v.id);
                    return v && !v.variants && (t.addToCart({
                        product: f
                    }), setTimeout(function() {
                        t.switchModalMode({
                            mode: "result",
                            product: f
                        })
                    }, 0)), (0, u.useEffect)(function() {
                        r.isShown || s(null)
                    }, [r.isShown]), (0, a.jsxs)(a.Fragment, {
                        children: [d && (0, a.jsx)("div", {
                            className: tt()["atc-modal-add__loading"],
                            children: (0, a.jsx)(ht(), {})
                        }), l && (0, a.jsxs)("div", {
                            className: tt()["atc-modal-add__error"],
                            children: [(0, a.jsx)("span", {
                                children: "خطا در دریافت اطلاعات"
                            }), (0, a.jsx)(_t(), {
                                label: "تلاش مجدد",
                                icon: "bi bi-refresh-single",
                                onClick: p
                            })]
                        }), _ && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: tt()["atc-modal-add__variation"],
                                children: (0, a.jsx)(yt.Z, {
                                    showTitle: !0,
                                    product: f,
                                    value: i,
                                    onChange: function(e) {
                                        return s(e)
                                    }
                                }, "".concat(f.hasVariation))
                            }), (0, a.jsx)(pt, {
                                product: f,
                                variationId: i
                            })]
                        }), (0, a.jsx)(wt(), {
                            target: ".atc-modal-footer",
                            children: (0, a.jsx)("div", {
                                className: tt()["atc-modal-add__footer"],
                                children: (0, a.jsx)(lt(), {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    children: _ && (0, a.jsx)(ft.Z, {
                                        size: "md",
                                        product: f,
                                        fullWidth: !n.isPc,
                                        label: "افزودن به سبد خرید",
                                        variationId: i,
                                        buttonProps: {
                                            block: !n.isPc
                                        },
                                        onAfterAddToCart: function(e, n) {
                                            var r, o, a, i;
                                            null === (r = (o = t.modal).onAdded) || void 0 === r || r.call(o, n), null === (a = (i = t.modal).onChange) || void 0 === a || a.call(i, e, n), t.showResultModalIfNeeded({
                                                product: e
                                            })
                                        },
                                        disabled: !(null == m ? void 0 : m.stock)
                                    })
                                })
                            })
                        })]
                    })
                },
                It = n(4852),
                xt = n.n(It),
                St = n(97910),
                Ct = function() {
                    var e = (0, c.Z)(),
                        t = (0, Ye.t)(),
                        n = (0, w.b)().ua,
                        r = t.modal.product;
                    return (0, a.jsxs)("div", {
                        children: [r && (0, a.jsx)(pt, {
                            showVariationList: !0,
                            product: r,
                            variationId: t.modal.variationId
                        }), (0, a.jsx)(St.Z, {
                            className: xt()["atc-modal-result__trust-slides"],
                            hasBorder: !0
                        }), (0, a.jsx)(wt(), {
                            target: ".atc-modal-footer",
                            children: r && (0, a.jsx)(lt(), {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                children: (0, a.jsx)(_t(), {
                                    size: "md",
                                    fullWidth: !n.isPc,
                                    label: "رفتن به سبد خرید",
                                    onClick: function() {
                                        return _async_to_generator(function() {
                                            return _ts_generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return t.closeModal(), [4, (0, l.sleep)(300)];
                                                    case 1:
                                                        return n.sent(), "/live/[id]" === e.route ? window.open("https://basalam.com/cart", "_blank") : e.push("/cart"), [2]
                                                }
                                            })
                                        })()
                                    }
                                })
                            })
                        })]
                    })
                },
                kt = function() {
                    var e, t, n = (0, Ye.t)(),
                        r = "result" === (null == n || null === (e = n.modal) || void 0 === e ? void 0 : e.mode);
                    return (0, a.jsx)($e(), {
                        size: "sm",
                        title: r ? "به سبد خریدت اضافه شد." : "انتخاب تنوع",
                        show: null == n || null === (t = n.modal) || void 0 === t ? void 0 : t.isShown,
                        onClose: function() {
                            var e, t;
                            null == n || n.closeModal(), null == n || null === (t = n.modal) || void 0 === t || null === (e = t.onClose) || void 0 === e || e.call(t)
                        },
                        footerComponent: (0, a.jsx)("div", {
                            className: (0, B.Z)(["atc-modal-footer", Xe()["atc-modal__footer-portal"]])
                        }),
                        className: "dataset-inp-AddToCartModal",
                        bodyClass: Xe()["atc-modal__body"],
                        headerClass: Xe()["atc-modal__header"],
                        footerClass: Xe()["atc-modal__footer"],
                        children: r ? (0, a.jsx)(Ct, {}) : (0, a.jsx)(jt, {})
                    })
                },
                Et = n(81918);

            function Dt(e) {
                var t = e.children;
                return (0, a.jsx)(Et.C, {
                    children: (0, a.jsxs)(Ye.R, {
                        children: [t, (0, a.jsx)(kt, {})]
                    })
                })
            }
            var Tt = n(30738),
                Pt = n.n(Tt);

            function Nt(e) {
                var t, n = e.hasBottomNavigation,
                    r = (0, Et.E)(),
                    o = _sliced_to_array((0, u.useState)(!1), 2),
                    i = o[0],
                    s = o[1],
                    d = (0, re.l)().runGBTest,
                    v = (0, h.M_)(["currentUser", "isLoggedIn"]),
                    p = v.currentUser,
                    f = v.isLoggedIn,
                    m = (0, c.Z)(),
                    b = (0, w.b)().ua.isMobile && f && !!p && (null == r ? void 0 : r.itemCount) > 0 && 0 === (null == r ? void 0 : r.totalDeliveryCost) && (null === (t = d("free_shipping_inform")) || void 0 === t ? void 0 : t.value),
                    g = (0, u.useRef)(null);
                (0, u.useEffect)(function() {
                    return b && (s(!0), g.current = setTimeout(function() {
                            return s(!1)
                        }, 1e4)),
                        function() {
                            return clearTimeout(g.current)
                        }
                }, [b]);
                var y = (0, u.useMemo)(function() {
                    return (0, l.isServerSide)() ? "" : (0, _.isPdpPage)(m.asPath) ? !!(null === (e = document) || void 0 === e ? void 0 : e.getElementById("cta-social-proof-mobile")) ? "153px" : "116px" : n ? "74px" : "64px";
                    var e
                }, [n, m.asPath]);
                return b && (0, a.jsx)(W.Z, {
                    id: "free-shipping-fab",
                    href: "/cart",
                    className: (0, B.Z)(Pt().fsf, _define_property({}, Pt()["fsf--opened"], i)),
                    style: {
                        bottom: y
                    },
                    children: (0, a.jsxs)("div", {
                        className: Pt().fsf__container,
                        children: [(0, a.jsx)(ne(), {
                            className: Pt()["fsf__container-icon"],
                            src: "https://statics.basalam.com/public/admin/b28/04-04/t6LHebW3G1gDdKRQyY3waVVDpLQL2xSG2U1Vo26FNfpaHNx9Jr.SVG"
                        }), (0, a.jsx)("span", {
                            className: Pt()["fsf__container-text"],
                            children: "ارسالت رایگانه"
                        })]
                    })
                })
            }

            function Mt() {
                var e = (0, c.Z)(),
                    t = (0, ie.Qq)();
                return (0, u.useEffect)(function() {
                    t({
                        endType: "MOUNT"
                    })
                }, [t, e.asPath]), (0, a.jsx)("div", {})
            }
            var Zt = s()(function() {
                    return Promise.all([n.e(5434), n.e(6823), n.e(7163), n.e(7396)]).then(n.bind(n, 27396))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [27396]
                        }
                    },
                    ssr: !0
                }),
                At = {};

            function Lt(e) {
                var t = e.userId,
                    n = e.children,
                    r = e.deviceId,
                    o = e.authMode,
                    i = e.isIosApp,
                    s = e.userAgent,
                    l = e.isWebview,
                    d = e.gbFeatures,
                    v = e.webVitalData,
                    p = e.isCachedPage,
                    f = e.serverRouteUrl,
                    m = e.parsedUserAgent,
                    _ = e.isServerRendered,
                    b = e.options,
                    g = void 0 === b ? At : b,
                    y = e.shouldReserveTopBannerSpace,
                    j = (0, c.Z)(),
                    x = (0, h.M_)(["isLoadingCurrentUser"]).isLoadingCurrentUser;
                (0, u.useEffect)(function() {
                    (0, I.$h)(), requestIdleCallback(function() {
                        j.prefetch("/s")
                    })
                }, []), (0, u.useEffect)(function() {
                    i && document.body.classList.add("ios-mode")
                }, [i]);
                var S = "loadedInCsrMode" in window,
                    C = l ? u.Fragment : Zt;
                return (0, a.jsx)(se.g3, {
                    initialState: {
                        userId: t,
                        deviceId: r,
                        authMode: o,
                        isIosApp: i,
                        userAgent: s,
                        isWebview: l,
                        gbFeatures: d,
                        webVitalData: v,
                        isCachedPage: p,
                        serverRouteUrl: f,
                        isServerRendered: _,
                        isLoggedIn: !!t,
                        shouldReserveTopBannerSpace: y
                    },
                    children: (0, a.jsxs)(w.w, {
                        gbFeatures: d,
                        initialDeviceId: r,
                        isCachedPage: p,
                        initialUserAgent: s,
                        initialIsWebview: l,
                        parsedUserAgent: m,
                        isServerRendered: _,
                        children: [(0, a.jsx)(ve, {}), (0, a.jsx)(Qe, {
                            initialUserId: t,
                            authMode: o
                        }), (0, a.jsxs)(re.K, {
                            isCachedPage: p,
                            children: [(0, a.jsx)(ie.ZP, {}), (0, a.jsx)(Dt, {
                                children: (0, a.jsxs)(C, {
                                    children: [(0, a.jsx)(ae, {
                                        shouldReserveTopBannerSpace: y
                                    }), (0, a.jsx)("main", {
                                        className: "mainTag",
                                        children: S && x ? null : n
                                    }), (0, a.jsx)(V, {}), (0, a.jsx)(Mt, {}), !1 === g.footer && !1 !== g.header && (0, a.jsx)(Nt, {
                                        hasBottomNavigation: !1 !== g.bottomNavigation
                                    })]
                                })
                            })]
                        }), (0, a.jsx)(Ee, {
                            webVitalData: v
                        })]
                    })
                })
            }
            var qt = n(21306),
                Ot = n(19402),
                Rt = n(25910),
                zt = n(70291),
                Ut = n(30082),
                Vt = (0, l.isServerSide)(),
                Bt = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e.layout = Lt;
                    var n = e.getInitialProps || function() {
                        return {}
                    };
                    return e.getInitialProps = (0, b._U)(function(e, r) {
                        return _async_to_generator(function() {
                            var a, i, s, u, c, d, v, p, f, m, _, b, h, g, w, y, j, I, x, S, C, k, E, D, T, N, M, Z, A, L, q, O, R, z, U, V, B, W, F, G, H, Q, Y, X, J, $, ee, te, ne, re, oe, ae, ie, se, ue, le;
                            return _ts_generator(this, function(de) {
                                switch (de.label) {
                                    case 0:
                                        A = window, L = Vt && !!(null == e || null === (a = e.req) || void 0 === a ? void 0 : a.isCachedPage), q = L ? null : (0, fe.Z)(e.req, e.res), O = he()({
                                            query: e.query,
                                            pathname: e.pathname,
                                            headers: null === (i = e.req) || void 0 === i ? void 0 : i.headers
                                        }), R = (null == e || null === (u = e.req) || void 0 === u || null === (s = u.headers) || void 0 === s ? void 0 : s.host) || (null == A || null === (c = A.location) || void 0 === c ? void 0 : c.hostname), z = L ? null : (0, Ot.hP)(e.req), U = z && !L ? function(e) {
                                            if (!e) return 0;
                                            var t = function(e) {
                                                    try {
                                                        var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
                                                            n = decodeURIComponent(atob(t).split("").map(function(e) {
                                                                return "%".concat("00".concat(e.codePointAt(0).toString(16)).slice(-2))
                                                            }).join(""));
                                                        return JSON.parse(n)
                                                    } catch (e) {
                                                        return (0, P.wJ)(e), {}
                                                    }
                                                }(e),
                                                n = null == t ? void 0 : t.sub;
                                            return n ? Number(n) : 0
                                        }(z) : null, V = Vt ? e.req.headers["user-agent"] : null == A ? void 0 : A.navigator.userAgent, B = o()(V), W = Date.now(), F = (null === (d = e.req) || void 0 === d ? void 0 : d.headers["x-forwarded-for"]) || (null === (v = e.req) || void 0 === v ? void 0 : v.socket.remoteAddress), G = null === (m = e.req) || void 0 === m || null === (f = m.app) || void 0 === f || null === (p = f.get("redisDB")) || void 0 === p ? void 0 : p.DB2;
                                        try {
                                            H = (null === (C = e.req) || void 0 === C ? void 0 : C.headers["x-client-info"]) || "{}", Q = (null === (k = JSON.parse(H)) || void 0 === k ? void 0 : k.version) || null, (0, ce.nZ)().setContext("Webview", {
                                                enabled: O,
                                                version: O ? Q : null
                                            })
                                        } catch (e) {
                                            console.error("Error setting webview context", e)
                                        }
                                        return Y = (0, l.isDevelopment)() || (0, l.isStaging)(R) ? "BASIC" : "HTTP_ONLY", "sibche" === (null === (b = e.req) || void 0 === b || null === (_ = b.headers) || void 0 === _ ? void 0 : _["x-ios-store"]) && (0, Ne.setCookie)("isIosApp", "true", {
                                            path: "/",
                                            req: e.req,
                                            res: e.res,
                                            maxAge: 7776e3
                                        }), (null === (g = e.req) || void 0 === g || null === (h = g.headers) || void 0 === h ? void 0 : h["fcm-token"]) && (0, Ne.setCookie)("fcmToken", null === (D = e.req) || void 0 === D || null === (E = D.headers) || void 0 === E ? void 0 : E["fcm-token"], {
                                            path: "/",
                                            req: e.req,
                                            res: e.res,
                                            maxAge: 7776e3
                                        }), (null === (y = e.req) || void 0 === y || null === (w = y.headers) || void 0 === w ? void 0 : w["onesignal-user-id"]) && (0, Ne.setCookie)("onesignalUserId", null === (N = e.req) || void 0 === N || null === (T = N.headers) || void 0 === T ? void 0 : T["onesignal-user-id"], {
                                            path: "/",
                                            req: e.req,
                                            res: e.res,
                                            maxAge: 7776e3
                                        }), t.middleware && t.middleware(e.req, e.res, {
                                            userAgent: B
                                        }), Vt ? [4, r.fetchQuery(["feature-flag", "features"], function() {
                                            return (0, zt.N)(G, {
                                                req: e.req,
                                                res: e.res,
                                                isWebview: O
                                            })
                                        }, {
                                            cacheTime: Rt.nW
                                        })] : [3, 2];
                                    case 1:
                                        return ae = de.sent(), [3, 3];
                                    case 2:
                                        ae = {}, de.label = 3;
                                    case 3:
                                        return J = null == (X = ae) || null === (j = X.sticky_banner) || void 0 === j ? void 0 : j.defaultValue, $ = !K.X.has(e.pathname) && (null == J ? void 0 : J.show) && function(e) {
                                            if (!(null == e ? void 0 : e.endTime) || !(null == e ? void 0 : e.startTime)) return !1;
                                            try {
                                                var t = (0, l.gregoryDate)().isBefore((0, l.gregoryDate)(e.endTime));
                                                return (0, l.gregoryDate)().isAfter((0, l.gregoryDate)(e.startTime)) && t
                                            } catch (e) {
                                                return !1
                                            }
                                        }(J), ee = Date.now(), te = Date.now(), ne = Date.now(), re = new Promise(function(t, o) {
                                            return _async_to_generator(function() {
                                                var a, i;
                                                return _ts_generator(this, function(s) {
                                                    switch (s.label) {
                                                        case 0:
                                                            return s.trys.push([0, 2, , 3]), te = Date.now(), [4, n(_object_spread_props(_object_spread({}, e), {
                                                                userId: U,
                                                                deviceId: q,
                                                                isWebview: O,
                                                                userAgent: V,
                                                                gbFeatures: X,
                                                                queryClient: r,
                                                                isCachedPage: L,
                                                                parsedUserAgent: B
                                                            }))];
                                                        case 1:
                                                            return a = s.sent(), ne = Date.now(), t(a), [3, 3];
                                                        case 2:
                                                            return i = s.sent(), o(i), [3, 3];
                                                        case 3:
                                                            return [2]
                                                    }
                                                })
                                            })()
                                        }), oe = [re], Vt && !B.isMobile && (ie = new Promise(function(e, t) {
                                            return _async_to_generator(function() {
                                                var n, o;
                                                return _ts_generator(this, function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return a.trys.push([0, 2, , 3]), M = Date.now(), [4, B.isCrawler ? (0, Ut.uS)(r, G) : (0, Ut.ks)(r, G)];
                                                        case 1:
                                                            return n = a.sent(), Z = Date.now(), e(n), [3, 3];
                                                        case 2:
                                                            return o = a.sent(), Z = Date.now(), t(o), [3, 3];
                                                        case 3:
                                                            return [2]
                                                    }
                                                })
                                            })()
                                        }), oe.push(ie)), [4, Promise.all(oe)];
                                    case 4:
                                        return se = _sliced_to_array.apply(void 0, [de.sent(), 1]), ue = se[0], le = Date.now(), [2, (ue.userId = U, ue.authMode = Y, ue.deviceId = q, ue.hostname = R, ue.isWebview = O, ue.userAgent = V, ue.gbFeatures = X, ue.isCachedPage = L, ue.isServerRendered = Vt, ue.serverRouteUrl = null == e || null === (I = e.req) || void 0 === I ? void 0 : I.url, ue.parsedUserAgent = B, ue.isIosApp = (0, qt.isIosApp)({
                                            req: e.req,
                                            res: e.res
                                        }), ue.shouldReserveTopBannerSpace = $, ue.webVitalData = _object_spread_props(_object_spread({}, ue.webVitalData), {
                                            ip: F,
                                            srt: W,
                                            pageData: le - W,
                                            initialData: ee - W,
                                            pageProps: ne - te,
                                            hasVideo: !!(null == ue || null === (S = ue.product) || void 0 === S || null === (x = S.video) || void 0 === x ? void 0 : x.url),
                                            categoriesData: Z - M
                                        }), ue)]
                                }
                            })
                        })()
                    }), e
                }
        },
        82857: function(e, t, n) {
            "use strict";

            function r(e) {
                if (!e) return null;
                try {
                    var t = new Date(e).getTime() - Date.now();
                    return Math.floor(t / 1e3)
                } catch (e) {
                    return null
                }
            }
            n.d(t, {
                j: function() {
                    return r
                }
            })
        },
        88361: function(e) {
            e.exports = {
                "trust-slides": "LnkIAV",
                "trust-slides__title": "Ruq7i0",
                "trust-slides__carousel": "QAQNpq",
                "trust-slides__carousel-item": "nWTjOA",
                "trust-slides__item": "BsasM8",
                "trust-slides__item-image": "woKSVx",
                "trust-slides__item-title": "_7h5McM",
                "trust-slides__item-text": "_8KA5pD",
                "trust-slides--is-appearing": "_95b6vI",
                "g-blink": "ir9JRB",
                "trust-slides--has-border": "p4vfMo",
                "trust-slides--is-slider": "rCohXr"
            }
        },
        43085: function(e) {
            e.exports = {
                "atc-modal-add__loading": "xdg_pS",
                "atc-modal-add__error": "yUpPo6",
                "atc-modal-add__variation": "z6BIRG"
            }
        },
        21891: function(e) {
            e.exports = {
                "atc-modal-product": "JpzSN6",
                "atc-modal-product__img": "_4ODcKg",
                "atc-modal-product__name": "SGU9a2",
                "atc-modal-product__variation-list": "b7jDMu"
            }
        },
        4852: function(e) {
            e.exports = {
                "atc-modal-result__trust-slides": "_1_mqWF"
            }
        },
        29962: function(e) {
            e.exports = {
                "atc-modal__footer": "VgV3c8",
                "atc-modal__body": "WFiN0E",
                "atc-modal__header": "PCD0xB",
                "atc-modal__footer-portal": "_2eHpRM"
            }
        },
        60610: function(e) {
            e.exports = {
                "cart-price": "mnZN__",
                "cart-price__value": "n_vrb1",
                "cart-price__primary-value": "ZSENm7",
                "cart-price__off": "oS1_y1"
            }
        },
        30738: function(e) {
            e.exports = {
                fsf: "PDChrq",
                fade: "WQItm6",
                "fsf--opened": "_3UuK_A",
                fsf__container: "cNp5Hx",
                "fsf__container-text": "ZKmOzo",
                "fsf__container-icon": "gCMQ_m"
            }
        },
        48531: function(e) {
            e.exports = {
                countdown: "NtsFIb",
                countdown__item: "DoVINr",
                colon: "Cw_11G"
            }
        },
        48863: function(e) {
            e.exports = {
                "variation-list__item-value": "NSOg7K",
                "variation-list__item-separator": "gf_HgS",
                "variation-list__item": "VuBi5m",
                "variation-list__item-container": "q1tpSI",
                "variation-list__value-separator": "_4TNscL",
                "variation-list__variations": "JoP8no",
                "variation-list__item-inner": "kptjOX",
                "variation-list__value-name": "_9wWmEB",
                "variation-list__title": "eTkpB7",
                "variation-list--horizontal": "xYBvaO",
                "variation-list--wrap-items": "YPTEc7",
                "variation-list__more-variation": "pcibfW"
            }
        },
        22549: function(e) {
            e.exports = {
                "product-variation-item": "wwEMj0",
                "product-variation-item--disabled": "o8Fpd_",
                "product-variation-item--selected": "XyV87Y"
            }
        },
        25129: function(e) {
            e.exports = {
                "product-variation": "czdfrW",
                "product-variation__slider-next": "YOFMBI",
                "product-variation__slider-prev": "_4q5Z4L",
                "product-variation__title": "XImHyO",
                "product-variation__slider": "HbMWv4",
                "product-variation__slide-item": "k8_yzv"
            }
        },
        25185: function(e) {
            e.exports = {
                "product-variations__title": "EiCmKQ"
            }
        }
    }
]);