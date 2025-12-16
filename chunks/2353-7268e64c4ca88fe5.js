function _array_like_to_array(e, o) {
    (null == o || o > e.length) && (o = e.length);
    for (var n = 0, t = new Array(o); n < o; n++) t[n] = e[n];
    return t
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function asyncGeneratorStep(e, o, n, t, r, l, i) {
    try {
        var a = e[l](i),
            s = a.value
    } catch (e) {
        return void n(e)
    }
    a.done ? o(s) : Promise.resolve(s).then(t, r)
}

function _async_to_generator(e) {
    return function() {
        var o = this,
            n = arguments;
        return new Promise(function(t, r) {
            var l = e.apply(o, n);

            function i(e) {
                asyncGeneratorStep(l, t, r, i, a, "next", e)
            }

            function a(e) {
                asyncGeneratorStep(l, t, r, i, a, "throw", e)
            }
            i(void 0)
        })
    }
}

function _define_property(e, o, n) {
    return o in e ? Object.defineProperty(e, o, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = n, e
}

function _iterable_to_array(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _iterable_to_array_limit(e, o) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var t, r, l = [],
            i = !0,
            a = !1;
        try {
            for (n = n.call(e); !(i = (t = n.next()).done) && (l.push(t.value), !o || l.length !== o); i = !0);
        } catch (e) {
            a = !0, r = e
        } finally {
            try {
                i || null == n.return || n.return()
            } finally {
                if (a) throw r
            }
        }
        return l
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _object_spread(e) {
    for (var o = 1; o < arguments.length; o++) {
        var n = null != arguments[o] ? arguments[o] : {},
            t = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), t.forEach(function(o) {
            _define_property(e, o, n[o])
        })
    }
    return e
}

function ownKeys(e, o) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        o && (t = t.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), n.push.apply(n, t)
    }
    return n
}

function _object_spread_props(e, o) {
    return o = null != o ? o : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ownKeys(Object(o)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(o, n))
    }), e
}

function _object_without_properties(e, o) {
    if (null == e) return {};
    var n, t, r = _object_without_properties_loose(e, o);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (t = 0; t < l.length; t++) n = l[t], o.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function _object_without_properties_loose(e, o) {
    if (null == e) return {};
    var n, t, r = {},
        l = Object.keys(e);
    for (t = 0; t < l.length; t++) n = l[t], o.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
}

function _sliced_to_array(e, o) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, o) || _unsupported_iterable_to_array(e, o) || _non_iterable_rest()
}

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
}

function _unsupported_iterable_to_array(e, o) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, o);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _array_like_to_array(e, o) : void 0
    }
}

function _ts_generator(e, o) {
    var n, t, r, l = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        },
        i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return i.next = a(0), i.throw = a(1), i.return = a(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this
    }), i;

    function a(a) {
        return function(s) {
            return function(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; i && (i = 0, a[0] && (l = 0)), l;) try {
                    if (n = 1, t && (r = 2 & a[0] ? t.return : a[0] ? t.throw || ((r = t.return) && r.call(t), 0) : t.next) && !(r = r.call(t, a[1])).done) return r;
                    switch (t = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                        case 0:
                        case 1:
                            r = a;
                            break;
                        case 4:
                            return l.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            l.label++, t = a[1], a = [0];
                            continue;
                        case 7:
                            a = l.ops.pop(), l.trys.pop();
                            continue;
                        default:
                            if (!(r = l.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                l = 0;
                                continue
                            }
                            if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                l.label = a[1];
                                break
                            }
                            if (6 === a[0] && l.label < r[1]) {
                                l.label = r[1], r = a;
                                break
                            }
                            if (r && l.label < r[2]) {
                                l.label = r[2], l.ops.push(a);
                                break
                            }
                            r[2] && l.ops.pop(), l.trys.pop();
                            continue
                    }
                    a = o.call(e, l)
                } catch (e) {
                    a = [6, e], t = 0
                } finally {
                    n = r = 0
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }([a, s])
        }
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2353, 3065], {
        88158: function(e, o, n) {
            "use strict";
            n.d(o, {
                Z: function() {
                    return m
                }
            });
            var t = n(32930),
                r = n(40877),
                l = n(52375),
                i = n.n(l),
                a = n(45835),
                s = n(81433),
                c = n.n(s),
                u = n(65074),
                d = n.n(u),
                _ = n(76303),
                p = n.n(_),
                h = n(70437),
                v = n.n(h);

            function m(e) {
                var o = e.className,
                    n = (0, a.b)().ua;
                return (0, t.jsxs)("div", {
                    className: (0, r.Z)(i().clc, o),
                    children: [(0, t.jsx)("div", {
                        className: i().clc__title,
                        children: (0, t.jsx)(v(), {
                            width: 150,
                            height: 22,
                            className: i().clc__skeleton
                        })
                    }), (0, t.jsx)("div", {
                        className: i().clc__subtitle,
                        children: (0, t.jsx)(v(), {
                            width: 100,
                            height: 20,
                            className: i().clc__skeleton
                        })
                    }), (0, t.jsxs)(c(), {
                        display: "flex",
                        alignItems: "center",
                        className: i().clc__coupon,
                        children: [(0, t.jsx)(p(), {
                            name: "bi-discount",
                            size: n.isPc ? "20" : "16",
                            className: i()["clc__coupon-icon"]
                        }), (0, t.jsx)(v(), {
                            width: 120,
                            height: 24,
                            className: i().clc__skeleton
                        })]
                    }), (0, t.jsxs)(c(), {
                        display: "flex",
                        gap: 16,
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [(0, t.jsx)(d(), {
                            icon: "bi-copy",
                            color: "primary",
                            variant: "outline",
                            size: "xs",
                            fullWidth: !0,
                            disabled: !0,
                            label: "کپی کد"
                        }), (0, t.jsx)(d(), {
                            disabled: !0,
                            size: "xs",
                            color: "secondary",
                            label: "شرایط استفاده",
                            fullWidth: !0
                        })]
                    })]
                })
            }
        },
        69324: function(e, o, n) {
            "use strict";
            n.d(o, {
                c: function() {
                    return we
                },
                w: function() {
                    return ze
                }
            });
            var t = n(32930),
                r = n(2389),
                l = n.n(r),
                i = n(81433),
                a = n.n(i),
                s = n(26491),
                c = n(58633),
                u = n(88158),
                d = n(66456),
                _ = l()(function() {
                    return Promise.all([n.e(6999), n.e(7957)]).then(n.bind(n, 57957))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [57957]
                        }
                    },
                    ssr: !0
                }),
                p = l()(function() {
                    return n.e(6447).then(n.bind(n, 46447))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [46447]
                        }
                    },
                    ssr: !0
                }),
                h = l()(function() {
                    return Promise.all([n.e(3620), n.e(8231), n.e(2639), n.e(1740), n.e(5598)]).then(n.bind(n, 69664))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [69664]
                        }
                    },
                    ssr: !0,
                    loading: function() {
                        return (0, t.jsx)(a(), {
                            py: 24,
                            children: (0, t.jsx)(c.Z, {
                                newUi: !0,
                                count: 10
                            })
                        })
                    }
                }),
                v = l()(function() {
                    return Promise.all([n.e(5434), n.e(7978)]).then(n.bind(n, 57978))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [57978]
                        }
                    },
                    ssr: !0
                }),
                m = l()(function() {
                    return n.e(5467).then(n.bind(n, 85467))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [85467]
                        }
                    },
                    ssr: !0
                }),
                b = l()(function() {
                    return n.e(921).then(n.bind(n, 10921))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [10921]
                        }
                    },
                    ssr: !0
                }),
                f = l()(function() {
                    return n.e(1100).then(n.bind(n, 51100))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [51100]
                        }
                    },
                    ssr: !0,
                    loading: function() {
                        return (0, t.jsx)(a(), {
                            p: 24,
                            children: (0, t.jsx)(u.Z, {})
                        })
                    }
                }),
                k = l()(function() {
                    return Promise.all([n.e(5434), n.e(5135)]).then(n.bind(n, 65135))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [65135]
                        }
                    },
                    ssr: !0
                }),
                y = l()(function() {
                    return Promise.all([n.e(3620), n.e(3941), n.e(928), n.e(6974)]).then(n.bind(n, 81313))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [81313]
                        }
                    },
                    ssr: !0
                }),
                g = l()(function() {
                    return Promise.all([n.e(296), n.e(3620), n.e(7339), n.e(1558), n.e(9187)]).then(n.bind(n, 26964))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [26964]
                        }
                    },
                    ssr: !0
                }),
                x = l()(function() {
                    return n.e(3217).then(n.bind(n, 33217))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [33217]
                        }
                    },
                    ssr: !0,
                    loading: d.ON
                }),
                j = l()(function() {
                    return Promise.all([n.e(3620), n.e(9606)]).then(n.bind(n, 9606))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [9606]
                        }
                    },
                    ssr: !0
                }),
                z = l()(function() {
                    return Promise.all([n.e(8231), n.e(5798)]).then(n.bind(n, 35798))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [35798]
                        }
                    },
                    ssr: !0,
                    loading: d.BZ
                }),
                w = l()(function() {
                    return Promise.all([n.e(7339), n.e(2524)]).then(n.bind(n, 84419))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [84419]
                        }
                    },
                    ssr: !0
                }),
                N = l()(function() {
                    return Promise.all([n.e(3620), n.e(7586)]).then(n.bind(n, 67586))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [67586]
                        }
                    },
                    ssr: !0
                }),
                P = l()(function() {
                    return Promise.all([n.e(296), n.e(8231), n.e(7339), n.e(1558), n.e(6106)]).then(n.bind(n, 21861))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [21861]
                        }
                    },
                    ssr: !0,
                    loading: d.u7
                }),
                C = l()(function() {
                    return Promise.all([n.e(3620), n.e(5939)]).then(n.bind(n, 15939))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [15939]
                        }
                    },
                    ssr: !0
                }),
                O = l()(function() {
                    return Promise.all([n.e(8231), n.e(7339), n.e(717), n.e(8898)]).then(n.bind(n, 27410))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [27410]
                        }
                    },
                    ssr: !0,
                    loading: d.G4
                }),
                Z = l()(function() {
                    return n.e(8529).then(n.bind(n, 98529))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [98529]
                        }
                    },
                    ssr: !0,
                    loading: d.C_
                }),
                G = l()(function() {
                    return Promise.all([n.e(3620), n.e(7339), n.e(3270)]).then(n.bind(n, 27900))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [27900]
                        }
                    },
                    ssr: !0,
                    loading: d.go
                }),
                H = l()(function() {
                    return n.e(1122).then(n.bind(n, 1122))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [1122]
                        }
                    },
                    ssr: !0,
                    loading: d.Iu
                }),
                S = l()(function() {
                    return n.e(6214).then(n.bind(n, 46214))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [46214]
                        }
                    },
                    ssr: !0,
                    loading: d.xG
                }),
                B = l()(function() {
                    return Promise.all([n.e(296), n.e(3620), n.e(7339), n.e(6160), n.e(3755)]).then(n.bind(n, 30878))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [30878]
                        }
                    },
                    ssr: !0
                }),
                A = l()(function() {
                    return n.e(959).then(n.bind(n, 10959))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [10959]
                        }
                    },
                    ssr: !0
                }),
                I = l()(function() {
                    return Promise.all([n.e(3620), n.e(7339), n.e(9342)]).then(n.bind(n, 10829))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [10829]
                        }
                    },
                    ssr: !0
                }),
                E = l()(function() {
                    return Promise.all([n.e(3620), n.e(9836), n.e(4266), n.e(8454), n.e(954)]).then(n.bind(n, 8634))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8634]
                        }
                    },
                    ssr: !0
                }),
                D = l()(function() {
                    return Promise.all([n.e(7339), n.e(3596)]).then(n.bind(n, 74754))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [74754]
                        }
                    },
                    ssr: !0
                }),
                V = l()(function() {
                    return Promise.all([n.e(7339), n.e(7132)]).then(n.bind(n, 21653))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [21653]
                        }
                    },
                    ssr: !0,
                    loading: d.Db
                }),
                L = l()(function() {
                    return n.e(9811).then(n.bind(n, 59811))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [59811]
                        }
                    },
                    ssr: !0,
                    loading: d.RP
                }),
                T = l()(function() {
                    return Promise.all([n.e(296), n.e(3620), n.e(5382), n.e(7339), n.e(3598), n.e(6160), n.e(1967)]).then(n.bind(n, 38446))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [38446]
                        }
                    },
                    ssr: !0
                }),
                q = l()(function() {
                    return Promise.all([n.e(3620), n.e(2438)]).then(n.bind(n, 22438))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [22438]
                        }
                    },
                    ssr: !0
                }),
                F = l()(function() {
                    return n.e(680).then(n.bind(n, 90680))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [90680]
                        }
                    },
                    ssr: !0,
                    loading: d.eX
                }),
                R = l()(function() {
                    return n.e(662).then(n.bind(n, 662))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [662]
                        }
                    },
                    ssr: !0
                }),
                W = l()(function() {
                    return n.e(5512).then(n.bind(n, 5512))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [5512]
                        }
                    },
                    ssr: !0
                }),
                X = (0, s.Z)({
                    on: ["visible"]
                })(F),
                M = (0, s.Z)({
                    on: ["visible"]
                })(_),
                K = (0, s.Z)({
                    on: ["visible"]
                })(p),
                Q = (0, s.Z)({
                    on: ["visible"]
                })(h),
                Y = (0, s.Z)({
                    on: ["visible"]
                })(T),
                U = (0, s.Z)({
                    on: ["visible"]
                })(E),
                J = (0, s.Z)({
                    on: ["visible"]
                })(v),
                $ = (0, s.Z)({
                    on: ["visible"]
                })(m),
                ee = (0, s.Z)({
                    on: ["visible"]
                })(b),
                oe = (0, s.Z)({
                    on: ["visible"]
                })(f),
                ne = (0, s.Z)({
                    on: ["visible"]
                })(k),
                te = (0, s.Z)({
                    on: ["visible"]
                })(y),
                re = (0, s.Z)({
                    on: ["visible"]
                })(I),
                le = (0, s.Z)({
                    on: ["visible"]
                })(g),
                ie = (0, s.Z)({
                    on: ["visible"]
                })(x),
                ae = (0, s.Z)({
                    on: ["visible"]
                })(j),
                se = (0, s.Z)({
                    on: ["visible"]
                })(Z),
                ce = (0, s.Z)({
                    on: ["visible"]
                })(z),
                ue = (0, s.Z)({
                    on: ["visible"]
                })(w),
                de = (0, s.Z)({
                    on: ["visible"]
                })(N),
                _e = (0, s.Z)({
                    on: ["visible"]
                })(q),
                pe = (0, s.Z)({
                    on: ["visible"]
                })(P),
                he = (0, s.Z)({
                    on: ["visible"]
                })(C),
                ve = (0, s.Z)({
                    on: ["visible"]
                })(O),
                me = (0, s.Z)({
                    on: ["visible"]
                })(H),
                be = (0, s.Z)({
                    on: ["visible"]
                })(G),
                fe = (0, s.Z)({
                    on: ["visible"]
                })(R),
                ke = (0, s.Z)({
                    on: ["visible"]
                })(W),
                ye = (0, s.Z)({
                    on: ["visible"]
                })(S),
                ge = (0, s.Z)({
                    on: ["visible"]
                })(A),
                xe = (0, s.Z)({
                    on: ["visible"]
                })(D),
                je = (0, s.Z)({
                    on: ["visible"]
                })(V),
                ze = {
                    IranMap: M,
                    TextBox: K,
                    StoryBar: Q,
                    SingleSlider: X,
                    ExploreSearch: Y,
                    HomeCouponList: U,
                    ExploreMarkdown: J,
                    ExpandableVideo: $,
                    VideoViewSingle: ee,
                    CouponCardsList: oe,
                    ExploreBnplDebt: ke,
                    ClickableCoupon: (0, s.Z)({
                        on: ["visible"]
                    })(L),
                    CollapseMarkdown: ne,
                    HorizontalReview: te,
                    TimeLimitedOffer: re,
                    CouponProductLine: le,
                    ExploreBnplCredit: fe,
                    BannerBannerTriple: ie,
                    HorizontalVideoSlide: ae,
                    HorizontalPGPPopular: se,
                    HorizontalQuickAccess: ce,
                    VerticalProductTimely: ue,
                    HorizontalCategoryView: de,
                    HorizontalBrandPopular: _e,
                    HorizontalProductTimely: pe,
                    HorizontalProductVideos: he,
                    HorizontalVendorCoupons: ye,
                    HorizontalProductPopular: ve,
                    HorizontalVendorWithChat: me,
                    DailyOffCategoryProducts: be,
                    HorizontalCategoryViewHome: ge,
                    HorizontalDiscountedProducts: xe,
                    HorizontalProductTimelyBasalam: (0, s.Z)({
                        on: ["visible"]
                    })(B),
                    BigHorizontalDiscountedProducts: je
                },
                we = {
                    iran_map: "IranMap",
                    text_box: "TextBox",
                    story_bar: "StoryBar",
                    markdown: "ExploreMarkdown",
                    single_slider: "SingleSlider",
                    explore_search: "ExploreSearch",
                    home_coupon_list: "HomeCouponList",
                    expandable_video: "ExpandableVideo",
                    clickable_coupon: "ClickableCoupon",
                    video_view_single: "VideoViewSingle",
                    coupon_cards_list: "CouponCardsList",
                    explore_bnpl_debt: "ExploreBnplDebt",
                    collapse_markdown: "CollapseMarkdown",
                    horizontal_review: "HorizontalReview",
                    time_limited_offer: "TimeLimitedOffer",
                    coupon_product_line: "CouponProductLine",
                    explore_bnpl_credit: "ExploreBnplCredit",
                    banner_banner_tripple: "BannerBannerTriple",
                    horizontal_video_slide: "HorizontalVideoSlide",
                    horizontal_pgp_popular: "HorizontalPGPPopular",
                    horizontal_quick_access: "HorizontalQuickAccess",
                    vertical_product_timely: "VerticalProductTimely",
                    horizontal_category_view: "HorizontalCategoryView",
                    horizontal_brand_popular: "HorizontalBrandPopular",
                    horizontal_product_timely: "HorizontalProductTimely",
                    horizontal_product_videos: "HorizontalProductVideos",
                    horizontal_vendor_coupons: "HorizontalVendorCoupons",
                    horizontal_product_popular: "HorizontalProductPopular",
                    horizontal_vendor_with_chat: "HorizontalVendorWithChat",
                    daily_off_category_products: "DailyOffCategoryProducts",
                    horizontal_category_view_home: "HorizontalCategoryViewHome",
                    horizontal_discounted_products: "HorizontalDiscountedProducts",
                    horizontal_product_timely_basalam: "HorizontalProductTimelyBasalam",
                    big_horizontal_discounted_products: "BigHorizontalDiscountedProducts"
                }
        },
        66456: function(e, o, n) {
            "use strict";
            n.d(o, {
                ON: function() {
                    return O
                },
                Db: function() {
                    return x
                },
                RP: function() {
                    return f
                },
                go: function() {
                    return C
                },
                C_: function() {
                    return N
                },
                G4: function() {
                    return w
                },
                u7: function() {
                    return P
                },
                BZ: function() {
                    return z
                },
                xG: function() {
                    return Z
                },
                Iu: function() {
                    return G
                },
                eX: function() {
                    return j
                }
            });
            var t = n(32930),
                r = n(40877),
                l = n(5164),
                i = n(78888),
                a = n.n(i),
                s = n(45835),
                c = n(19616),
                u = n(81433),
                d = n.n(u),
                _ = n(177),
                p = n.n(_),
                h = n(70437),
                v = n.n(h),
                m = n(13397),
                b = n.n(m);

            function f() {
                return (0, t.jsx)("div", {
                    className: b()["clickable-coupon"],
                    children: (0, t.jsx)(p(), {
                        children: (0, t.jsx)("div", {
                            className: b()["clickable-coupon__container"],
                            children: (0, t.jsxs)("div", {
                                className: b()["clickable-coupon__skeleton"],
                                children: [(0, t.jsx)(v(), {
                                    width: "200px",
                                    height: "32px",
                                    radius: "8px",
                                    mb: "40px"
                                }), (0, t.jsxs)("div", {
                                    className: b()["clickable-coupon__skeleton-decorations"],
                                    children: [(0, t.jsx)("div", {
                                        className: b()["clickable-coupon__skeleton-decoration--left"],
                                        children: (0, t.jsx)(v(), {
                                            width: "80px",
                                            height: "80px",
                                            radius: "50%"
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: b()["clickable-coupon__skeleton-decoration--right"],
                                        children: (0, t.jsx)(v(), {
                                            width: "90px",
                                            height: "90px",
                                            radius: "50%"
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: b()["clickable-coupon__skeleton-decoration--top-right"],
                                        children: (0, t.jsx)(v(), {
                                            width: "40px",
                                            height: "40px",
                                            radius: "50%"
                                        })
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: b()["clickable-coupon__skeleton-main"],
                                    children: (0, t.jsx)(v(), {
                                        width: "180px",
                                        height: "180px",
                                        radius: "50%"
                                    })
                                }), (0, t.jsx)("div", {
                                    className: b()["clickable-coupon__skeleton-hint"],
                                    children: (0, t.jsx)(v(), {
                                        width: "250px",
                                        height: "20px",
                                        radius: "4px"
                                    })
                                })]
                            })
                        })
                    })
                })
            }
            var k = n(52391),
                y = n.n(k);

            function g(e) {
                var o = e.isPc;
                return (0, t.jsxs)("div", {
                    className: y().bhdp__product,
                    children: [(0, t.jsx)(v(), {
                        width: "100%",
                        height: o ? "180px" : "150px",
                        radius: "12px 12px 0 0"
                    }), (0, t.jsxs)("div", {
                        style: {
                            padding: "16px",
                            backgroundColor: "var(--white)",
                            borderRadius: "0 0 12px 12px"
                        },
                        children: [(0, t.jsx)(v(), {
                            width: "100%",
                            height: "16px",
                            radius: "4px"
                        }), (0, t.jsx)(v(), {
                            width: "80%",
                            height: "14px",
                            radius: "4px",
                            mt: "8px"
                        }), (0, t.jsx)(v(), {
                            width: "60%",
                            height: "14px",
                            radius: "4px",
                            mt: "8px"
                        }), (0, t.jsx)(v(), {
                            width: "70%",
                            height: "20px",
                            radius: "4px",
                            mt: "12px"
                        })]
                    })]
                })
            }

            function x() {
                var e = (0, s.b)().ua.isPc;
                return (0, t.jsx)(p(), {
                    fluid: !0,
                    children: (0, t.jsx)("section", {
                        className: "".concat(y().bhdp, " ").concat(y()["bhdp--skeleton"]),
                        children: (0, t.jsxs)("div", {
                            className: y().bhdp__content,
                            children: [(0, t.jsxs)("div", {
                                className: y()["bhdp__left-section"],
                                children: [(0, t.jsx)("div", {
                                    className: "".concat(y()["bhdp__symbols-percent"], " ").concat(y()["bhdp__symbols-percent--mobile"]),
                                    children: (0, t.jsx)(v(), {
                                        width: "100%",
                                        height: "250px",
                                        radius: "8px"
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: y().bhdp__promotion,
                                    children: [(0, t.jsx)(v(), {
                                        width: e ? "200px" : "180px",
                                        height: e ? "30px" : "24px",
                                        radius: "8px"
                                    }), (0, t.jsx)("div", {
                                        className: y()["bhdp__promotion-countdown"],
                                        children: Array.from({
                                            length: 4
                                        }).map(function(o, n) {
                                            return (0, t.jsx)(v(), {
                                                width: e ? "43px" : "32px",
                                                height: e ? "43px" : "32px",
                                                radius: "4px"
                                            }, n)
                                        })
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: y().bhdp__products,
                                    children: [(0, t.jsx)("div", {
                                        className: y()["bhdp__products--next"],
                                        children: (0, t.jsx)(g, {
                                            isPc: e
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: y()["bhdp__products--deprecated"],
                                        children: (0, t.jsx)(g, {
                                            isPc: e
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: y()["bhdp__products--original"],
                                        children: (0, t.jsx)(g, {
                                            isPc: e
                                        })
                                    })]
                                })]
                            }), (0, t.jsx)("div", {
                                className: y()["bhdp__right-section"],
                                children: (0, t.jsx)(v(), {
                                    width: "100%",
                                    height: "350px",
                                    radius: "8px",
                                    maxWidth: "450px"
                                })
                            })]
                        })
                    })
                })
            }

            function j(e) {
                var o = e.ratio,
                    n = e.className;
                return (0, t.jsx)(d(), {
                    className: (0, r.Z)(a()["single-slider-skeleton"], n),
                    children: (0, t.jsx)("div", {
                        className: a()["single-slider-skeleton__items"],
                        style: {
                            paddingBottom: o ? "".concat((100 * o).toFixed(3), "%") : "60%"
                        },
                        children: (0, t.jsx)(v(), {
                            width: "100%",
                            height: "100%",
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            className: a()["single-slider-skeleton__item"]
                        })
                    })
                })
            }

            function z() {
                return (0, t.jsx)(d(), {
                    className: a()["horizontal-quick-access-skeleton"],
                    children: (0, t.jsx)(d(), {
                        className: a()["horizontal-quick-access-skeleton__items"],
                        children: (0, l.range)(4).map(function(e, o) {
                            return (0, t.jsxs)(d(), {
                                className: a()["horizontal-quick-access-skeleton__item"],
                                children: [(0, t.jsx)(v(), {
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)",
                                    width: "100%",
                                    radius: "50%",
                                    className: a()["horizontal-quick-access-skeleton__item-image"]
                                }), (0, t.jsx)(v(), {
                                    className: a()["horizontal-quick-access-skeleton__item-text"]
                                })]
                            }, o)
                        })
                    })
                })
            }

            function w() {
                return (0, t.jsxs)(d(), {
                    className: a()["horizontal-product-popular-skeleton"],
                    children: [(0, t.jsx)(v(), {
                        className: a()["horizontal-product-popular-skeleton__title"]
                    }), (0, t.jsx)(v(), {
                        className: a()["horizontal-product-popular-skeleton__description"]
                    }), (0, t.jsx)(d(), {
                        className: a()["horizontal-product-popular-skeleton__items"],
                        children: (0, l.range)(2).map(function(e, o) {
                            return (0, t.jsxs)(d(), {
                                className: a()["horizontal-product-popular-skeleton__item"],
                                children: [(0, t.jsx)(d(), {
                                    className: a()["horizontal-product-popular-skeleton__item-image"],
                                    children: (0, t.jsx)(v(), {
                                        className: a()["horizontal-product-popular-skeleton__item-image-sk"]
                                    })
                                }), (0, t.jsxs)(d(), {
                                    className: a()["horizontal-product-popular-skeleton__item-body"],
                                    children: [(0, t.jsx)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-title"],
                                        children: (0, t.jsx)(v(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-title-sk"]
                                        })
                                    }), (0, t.jsxs)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-vendor-rate"],
                                        children: [(0, t.jsx)(v(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-vendor-sk"]
                                        }), (0, t.jsx)(v(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-rate-sk"]
                                        })]
                                    }), (0, t.jsxs)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-price-tag"],
                                        children: [(0, t.jsx)(v(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-price-sk"]
                                        }), (0, t.jsx)(v(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-tag-sk"]
                                        })]
                                    }), (0, t.jsx)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-add"],
                                        children: (0, t.jsx)(v(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-add-sk"]
                                        })
                                    })]
                                })]
                            }, o)
                        })
                    })]
                })
            }

            function N() {
                return (0, t.jsxs)(d(), {
                    className: a()["horizontal-product-popular-skeleton"],
                    children: [(0, t.jsx)(v(), {
                        className: a()["horizontal-product-popular-skeleton__title"]
                    }), (0, t.jsx)(d(), {
                        className: a()["horizontal-product-popular-skeleton__items"],
                        children: (0, l.range)(2).map(function(e, o) {
                            return (0, t.jsxs)(d(), {
                                className: a()["horizontal-product-popular-skeleton__item"],
                                children: [(0, t.jsx)(d(), {
                                    className: a()["horizontal-product-popular-skeleton__item-image"],
                                    children: (0, t.jsx)(v(), {
                                        className: a()["horizontal-product-popular-skeleton__item-image-sk"]
                                    })
                                }), (0, t.jsxs)(d(), {
                                    className: a()["horizontal-product-popular-skeleton__item-body"],
                                    children: [(0, t.jsx)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-title"],
                                        children: (0, t.jsx)(v(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-title-sk"]
                                        })
                                    }), (0, t.jsxs)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-vendor-rate"],
                                        children: [(0, t.jsx)(v(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-vendor-sk"]
                                        }), (0, t.jsx)(v(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-rate-sk"]
                                        })]
                                    }), (0, t.jsx)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-price-tag"],
                                        children: (0, t.jsx)(v(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-price-sk"]
                                        })
                                    })]
                                })]
                            }, o)
                        })
                    })]
                })
            }

            function P() {
                var e = (0, s.b)().ua;
                return (0, t.jsxs)(d(), {
                    className: a()["horizontal-product-timely-skeleton"],
                    children: [(0, t.jsxs)("div", {
                        className: a()["horizontal-product-timely-skeleton__header"],
                        children: [(0, t.jsx)("div", {
                            className: a()["horizontal-product-timely-skeleton__header-icon"],
                            children: (0, t.jsx)(v(), {
                                className: a()["horizontal-product-timely-skeleton__icon"]
                            })
                        }), (0, t.jsxs)("div", {
                            className: a()["horizontal-product-timely-skeleton__header-content"],
                            children: [(0, t.jsx)(v(), {
                                className: a()["horizontal-product-timely-skeleton__header-title"]
                            }), (0, t.jsx)(v(), {
                                className: a()["horizontal-product-timely-skeleton__header-show-all"]
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: a()["horizontal-product-timely-skeleton__items"],
                        children: [(0, t.jsx)(c.Z, {
                            className: a()["horizontal-product-timely-skeleton__item"],
                            discountMode: !0,
                            multipleLabels: !!e.isPc || void 0
                        }), (0, t.jsx)(c.Z, {
                            className: a()["horizontal-product-timely-skeleton__item"],
                            multipleLabels: !!e.isPc || void 0,
                            discountMode: !0
                        })]
                    })]
                })
            }

            function C() {
                var e = (0, s.b)().ua;
                return (0, t.jsxs)("div", {
                    className: a()["daily-off-category-products-skeleton"],
                    children: [(0, t.jsx)("div", {
                        className: a()["daily-off-category-products-skeleton__header"],
                        children: (0, t.jsx)(v(), {
                            className: a()["daily-off-category-products-skeleton__header-title"]
                        })
                    }), (0, t.jsxs)("div", {
                        className: a()["daily-off-category-products-skeleton__inner"],
                        children: [(0, t.jsx)("div", {
                            className: a()["daily-off-category-products-skeleton__content"],
                            children: (0, t.jsx)(c.Z, {
                                isHorizontal: !0
                            })
                        }), (0, t.jsx)("div", {
                            className: a()["daily-off-category-products-skeleton__carousel"],
                            children: (0, l.range)(5).map(function(o, n) {
                                return (0, t.jsxs)("div", {
                                    className: (0, r.Z)([a()["daily-off-category-products-skeleton__slide"]]),
                                    children: [(0, t.jsx)(v(), {
                                        className: a()["daily-off-category-products-skeleton__products-img"]
                                    }), (0, t.jsx)("p", {
                                        className: a()["daily-off-category-products-skeleton__products-title"],
                                        style: {
                                            display: e.isMobile ? "none" : "block"
                                        },
                                        children: (0, t.jsx)(v(), {
                                            width: "100px",
                                            height: "20px"
                                        })
                                    })]
                                }, n)
                            })
                        })]
                    })]
                })
            }

            function O() {
                var e = (0, s.b)().ua;
                return (0, t.jsx)(p(), {
                    fluid: !0,
                    children: (0, t.jsxs)("div", {
                        className: a()["bbt-skeleton"],
                        children: [(0, t.jsx)(v(), {
                            className: a()["bbt-skeleton__item"],
                            width: "100%",
                            height: "100%"
                        }), !e.isPc && (0, t.jsx)(v(), {
                            className: a()["bbt-skeleton__item"],
                            width: "100%",
                            height: "100%"
                        })]
                    })
                })
            }

            function Z() {
                return (0, t.jsxs)(d(), {
                    className: a()["skeleton-horizontal-vendor-coupons"],
                    children: [(0, t.jsxs)(d(), {
                        pl: 24,
                        pr: 24,
                        mb: 16,
                        children: [(0, t.jsx)(v(), {
                            className: a()["skeleton-horizontal-vendor-coupons__title"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        }), (0, t.jsx)(v(), {
                            className: a()["skeleton-horizontal-vendor-coupons__subtitle"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100
                        })]
                    }), (0, t.jsx)("div", {
                        className: a()["skeleton-horizontal-vendor-coupons__items"],
                        children: (0, t.jsxs)("div", {
                            className: a()["skeleton-horizontal-vendor-coupons__item"],
                            children: [(0, t.jsxs)("div", {
                                className: a()["skeleton-horizontal-vendor-coupons__item-header"],
                                children: [(0, t.jsx)("div", {
                                    className: "skeleton-horizontal-vendor-coupons__item-header-icon-container",
                                    children: (0, t.jsx)(v(), {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-header-icon"],
                                        backgroundColor: "var(--gray-100)",
                                        waveColor: "var(--gray-200)"
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: a()["skeleton-horizontal-vendor-coupons__item-header-title-container"],
                                    children: [(0, t.jsx)(v(), {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-header-title"],
                                        backgroundColor: "var(--gray-100)",
                                        waveColor: "var(--gray-200)"
                                    }), (0, t.jsx)(v(), {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-header-subtitle"],
                                        backgroundColor: "var(--gray-100)",
                                        waveColor: "var(--gray-200)"
                                    })]
                                })]
                            }), (0, t.jsx)("div", {
                                className: a()["skeleton-horizontal-vendor-coupons__divider"]
                            }), (0, t.jsxs)("div", {
                                className: a()["skeleton-horizontal-vendor-coupons__item-images-container"],
                                children: [(0, t.jsx)(v(), {
                                    className: a()["skeleton-horizontal-vendor-coupons__item-images-vendor"],
                                    backgroundColor: "var(--gray-100)",
                                    waveColor: "var(--gray-200)"
                                }), (0, t.jsxs)("div", {
                                    className: a()["skeleton-horizontal-vendor-coupons__item-images"],
                                    children: [(0, t.jsx)("div", {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-image"],
                                        children: (0, t.jsx)(v(), {
                                            className: a()["skeleton-horizontal-vendor-coupons__item-image-img"]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-image"],
                                        children: (0, t.jsx)(v(), {
                                            className: a()["skeleton-horizontal-vendor-coupons__item-image-img"]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-image"],
                                        children: (0, t.jsx)(v(), {
                                            className: a()["skeleton-horizontal-vendor-coupons__item-image-img"]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-image"],
                                        children: (0, t.jsx)(v(), {
                                            className: a()["skeleton-horizontal-vendor-coupons__item-image-img"]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }

            function G() {
                return (0, t.jsxs)(d(), {
                    className: a()["skeleton-horizontal-vendor-with-chat"],
                    children: [(0, t.jsx)(d(), {
                        pl: 24,
                        pr: 24,
                        mb: 16,
                        children: (0, t.jsx)(v(), {
                            className: a()["skeleton-horizontal-vendor-with-chat__header"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })
                    }), (0, t.jsxs)("div", {
                        className: a()["skeleton-horizontal-vendor-with-chat__items"],
                        children: [(0, t.jsx)(v(), {
                            className: a()["skeleton-horizontal-vendor-with-chat__item"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        }), (0, t.jsx)(v(), {
                            className: a()["skeleton-horizontal-vendor-with-chat__item"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })]
                    })]
                })
            }
        },
        19361: function(e, o, n) {
            "use strict";
            n.d(o, {
                XA: function() {
                    return l
                },
                ow: function() {
                    return i
                },
                wz: function() {
                    return a
                }
            });
            var t = n(69324),
                r = function(e) {
                    var o, n, t;
                    return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && "number" == typeof(null == e ? void 0 : e.price) && (null == e || null === (o = e.photo) || void 0 === o ? void 0 : o.small) && (null == e || null === (n = e.vendor) || void 0 === n ? void 0 : n.name) && (null == e || null === (t = e.vendor) || void 0 === t ? void 0 : t.identifier)
                },
                l = function(e) {
                    var o = e || {},
                        n = o.ui,
                        t = o.name,
                        l = o.result;
                    if (!n || !t) return !1;
                    var i = !0;
                    switch (n) {
                        case "iran_map":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o;
                                    if ("number" != typeof(null == e ? void 0 : e.id)) return !1;
                                    var n = null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.provinces;
                                    return (null == n ? void 0 : n.length) > 0 && n.every(function(e) {
                                        return (null == e ? void 0 : e.url) && (null == e ? void 0 : e.name) && (null == e ? void 0 : e.title)
                                    })
                                })
                            }(l);
                            break;
                        case "text_box":
                            i = function(e) {
                                var o, n, t, r, l, i, a, s, c, u, d, _, p = null == e ? void 0 : e.metaData,
                                    h = (null == p || null === (o = p.body) || void 0 === o ? void 0 : o.text) && (null == p || null === (n = p.body) || void 0 === n ? void 0 : n.color) && (null == p || null === (r = p.body) || void 0 === r || null === (t = r.size) || void 0 === t ? void 0 : t.desktop) && (null == p || null === (i = p.body) || void 0 === i || null === (l = i.size) || void 0 === l ? void 0 : l.mobile),
                                    v = (null == p || null === (a = p.title) || void 0 === a ? void 0 : a.text) && (null == p || null === (s = p.title) || void 0 === s ? void 0 : s.color) && (null == p || null === (u = p.title) || void 0 === u || null === (c = u.size) || void 0 === c ? void 0 : c.desktop) && (null == p || null === (_ = p.title) || void 0 === _ || null === (d = _.size) || void 0 === d ? void 0 : d.mobile);
                                return h || v
                            }(e);
                            break;
                        case "story_bar":
                            i = function(e) {
                                var o, n = null == e ? void 0 : e.metaData;
                                return (null == n || null === (o = n.userIds) || void 0 === o ? void 0 : o.length) > 0
                            }(e);
                            break;
                        case "breadcrumbs":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o, n, t;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.slug) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.title) && "number" == typeof(null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.parentId)
                                })
                            }(l);
                            break;
                        case "single_slider":
                        case "banner_banner_slider":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o, n, t, r;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n || null === (o = n.image) || void 0 === o ? void 0 : o.large) && (null == e || null === (r = e.metadata) || void 0 === r || null === (t = r.image) || void 0 === t ? void 0 : t.small)
                                })
                            }(l);
                            break;
                        case "product_target":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return null == e ? void 0 : e.metadata
                                })
                            }(l);
                            break;
                        case "sales_targeting":
                            i = function(e, o) {
                                var n = null == e ? void 0 : e.metaData;
                                return !!((null == n ? void 0 : n.endDate) && (null == o ? void 0 : o.length) && (null == n || !n.reward || Array.isArray(n.reward) && n.reward.every(function(e) {
                                    return "number" == typeof(null == e ? void 0 : e.id) && (null == e ? void 0 : e.label) && (null == e ? void 0 : e.description)
                                }))) && o.every(function(e) {
                                    var o;
                                    return "number" == typeof(null == e ? void 0 : e.id) && (null == e ? void 0 : e.metadata) && "number" == typeof(null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.vendorId)
                                })
                            }(e, l);
                            break;
                        case "comments_slider":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o, n, t, r, l;
                                    return !!((null == e ? void 0 : e.id) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.name) && (null == e || null === (n = e.metadata) || void 0 === n || !n.vendor || (null == e || null === (r = e.metadata) || void 0 === r || null === (t = r.vendor) || void 0 === t ? void 0 : t.name)) && (null == e || null === (l = e.metadata) || void 0 === l ? void 0 : l.comments) && Array.isArray(e.metadata.comments) && e.metadata.comments.every(function(e) {
                                        return (null == e ? void 0 : e.user) && (null == e ? void 0 : e.text)
                                    }))
                                })
                            }(l);
                            break;
                        case "markdown":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o;
                                    return "number" == typeof(null == e ? void 0 : e.id) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.text)
                                })
                            }(l);
                            break;
                        case "expandable_video":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o, n;
                                    return (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.url) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.thumbnail)
                                })
                            }(l);
                            break;
                        case "video_view_single":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o;
                                    return null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.url
                                })
                            }(l);
                            break;
                        case "coupon_cards_list":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.couponCode)
                                })
                            }(l);
                            break;
                        case "collapse_markdown":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o, n;
                                    return (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.title) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.text)
                                })
                            }(l);
                            break;
                        case "horizontal_review":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return !("number" != typeof(null == e ? void 0 : e.id) || "number" != typeof(null == e ? void 0 : e.userId) || !(null == e ? void 0 : e.description) || !r(null == e ? void 0 : e.product))
                                })
                            }(l);
                            break;
                        case "coupon_product_line":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return !!r(e)
                                })
                            }(l);
                            break;
                        case "wishlist_horizontal":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o, n, t;
                                    return !(!(null == e ? void 0 : e.listId) || !(null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.id) || "number" != typeof(null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.itemsCount) || (null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.products) && Array.isArray(e.metadata.products) && !e.metadata.products.every(function(e) {
                                        return r(e)
                                    }))
                                })
                            }(l);
                            break;
                        case "horizontal_category_view_home":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o, n;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.link) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.title)
                                })
                            }(l);
                            break;
                        case "horizontal_product_popular":
                        case "vertical_product_timely":
                        case "horizontal_product_timely":
                        case "horizontal_product_highlight":
                        case "horizontal_product_app_timely":
                        case "time_limited_offer":
                        case "special_category_products":
                        case "horizontal_discounted_products":
                        case "big_horizontal_discounted_products":
                        case "daily_off_category_products":
                        case "horizontal_product_timely_basalam":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return r(e)
                                })
                            }(l);
                            break;
                        case "horizontal_pgp_popular":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return null == e ? void 0 : e.uuid
                                })
                            }(l);
                            break;
                        case "banner_banner_tripple":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o;
                                    if (!(null == e ? void 0 : e.id)) return !1;
                                    var n = null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.banners;
                                    return (null == n ? void 0 : n.length) > 0 && n.every(function(e) {
                                        return null == e ? void 0 : e.image
                                    })
                                })
                            }(l);
                            break;
                        case "banner_triple_slider":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o, n = null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.banners;
                                    return (null == n ? void 0 : n.length) > 0 && n.every(function(e) {
                                        var o, n;
                                        return (null == e || null === (o = e.image) || void 0 === o ? void 0 : o.large) && (null == e || null === (n = e.image) || void 0 === n ? void 0 : n.small)
                                    })
                                })
                            }(l);
                            break;
                        case "vertical_video_slide":
                        case "horizontal_video_slide":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o, n, t, r, l;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.length) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.thumbnail) && (null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.video) && (null == e || null === (l = e.metadata) || void 0 === l || null === (r = l.video) || void 0 === r ? void 0 : r.medium)
                                })
                            }(l);
                            break;
                        case "horizontal_quick_access":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o, n, t;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.link) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.image) && (null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.title)
                                })
                            }(l);
                            break;
                        case "horizontal_category_view":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.title)
                                })
                            }(l);
                            break;
                        case "horizontal_product_videos":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o;
                                    return r(e) && (null == e || null === (o = e.video) || void 0 === o ? void 0 : o.small)
                                })
                            }(l);
                            break;
                        case "horizontal_vendor_with_chat":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return function(e) {
                                        var o;
                                        return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && (null == e ? void 0 : e.identifier) && (null == e || null === (o = e.user) || void 0 === o ? void 0 : o.name)
                                    }(e)
                                })
                            }(l);
                            break;
                        case "home_coupon_list":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return null == e ? void 0 : e.id
                                })
                            }(l);
                            break;
                        case "explore_search":
                        case "explore_bnpl_credit":
                        case "explore_bnpl_debt":
                        case "clickable_coupon":
                            i = !0;
                            break;
                        case "horizontal_brand_popular":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return e.metadata && e.metadata.title && e.metadata.image && e.metadata.link
                                })
                            }(l);
                            break;
                        case "horizontal_vendor_coupons":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var o, n, t, r;
                                    return !!(null != e && e.id && null != e && null !== (o = e.vendor) && void 0 !== o && o.name && null != e && null !== (n = e.vendor) && void 0 !== n && n.identifier && Array.isArray(null == e || null === (t = e.vendor) || void 0 === t ? void 0 : t.products) && (null == e || null === (r = e.vendor) || void 0 === r ? void 0 : r.products.every(function(e) {
                                        var o;
                                        return "number" == typeof(null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && (null == e || null === (o = e.photo) || void 0 === o ? void 0 : o.small)
                                    })))
                                })
                            }(l);
                            break;
                        default:
                            i = !1
                    }
                    return i
                },
                i = function(e) {
                    var o = t.c[e.ui],
                        n = t.w[o];
                    return n && void 0 !== n ? {
                        items: e,
                        name: e.ui,
                        component: n
                    } : null
                },
                a = function(e, o) {
                    for (var n = [], t = e.length, r = 0; r < t; r += 1) {
                        var a = e[r];
                        if (o ? o(a) : l(a)) {
                            var s = i(a);
                            s && n.push(s)
                        }
                    }
                    return n
                }
        },
        58633: function(e, o, n) {
            "use strict";
            var t = n(32930),
                r = n(40877),
                l = n(27434),
                i = n(5164),
                a = n(70437),
                s = n.n(a),
                c = n(47037),
                u = n.n(c),
                d = n(45835);
            o.Z = (0, l.memo)(function(e) {
                var o = e.count,
                    n = void 0 === o ? 6 : o,
                    l = e.newUi,
                    a = (0, d.b)().ua;
                return (0, t.jsx)("div", {
                    className: (0, r.Z)(u()["story-bar-skeleton"], _define_property({}, u()["story-bar-skeleton--new-ui"], l)),
                    children: (0, i.range)(null != n ? n : 4).map(function(e, o) {
                        return (0, t.jsx)("div", {
                            className: u()["story-bar-skeleton__item"],
                            children: l ? (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("div", {
                                    className: u()["story-bar-skeleton__avatar"],
                                    children: (0, t.jsx)(s(), {
                                        width: 72,
                                        height: 72,
                                        radius: "50%",
                                        waveColor: "var(--gray-050)",
                                        backgroundColor: "var(--gray-025)"
                                    })
                                }), (0, t.jsx)("div", {
                                    className: u()["story-bar-skeleton__item-title"],
                                    children: (0, t.jsx)(s(), {
                                        width: 54,
                                        height: 19,
                                        waveColor: "var(--gray-050)",
                                        backgroundColor: "var(--gray-025)",
                                        radius: "0"
                                    })
                                })]
                            }) : (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(s(), {
                                    radius: "50%",
                                    width: a.isPc ? 96 : 72,
                                    height: a.isPc ? 96 : 72,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)"
                                }), (0, t.jsx)(s(), {
                                    width: 64,
                                    height: a.isPc ? 24 : 21,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)",
                                    className: u()["story-bar-skeleton__item-title"]
                                })]
                            })
                        }, o)
                    })
                })
            })
        },
        26491: function(e, o, n) {
            "use strict";
            var t = n(32930),
                r = n(43828),
                l = n(5164),
                i = n(27434),
                a = (0, l.isClientSide)(),
                s = {
                    once: !0,
                    capture: !0,
                    passive: !0
                },
                c = function(e) {
                    return function(o) {
                        var n = o.wrapperProps,
                            r = _object_without_properties(o, ["wrapperProps"]);
                        return (0, t.jsx)("section", _object_spread_props(_object_spread({
                            "data-hydration-on-demand": !0
                        }, n), {
                            children: (0, t.jsx)(e, _object_spread({}, r))
                        }))
                    }
                },
                u = function(e) {
                    var o = e.on,
                        n = void 0 === o ? [] : o,
                        l = e.onBefore,
                        a = e.disableFallback,
                        c = void 0 !== a && a,
                        u = e.whenInputPending,
                        d = void 0 !== u && u,
                        _ = e.isInputPendingFallbackValue,
                        p = void 0 === _ || _;
                    return function(e) {
                        var o = function(o) {
                            var a = o.wrapperProps,
                                u = o.forceHydration,
                                _ = void 0 !== u && u,
                                h = o.isServerRendered,
                                v = void 0 === h || h,
                                m = _object_without_properties(o, ["wrapperProps", "forceHydration", "isServerRendered"]),
                                b = (0, i.useRef)(null),
                                f = (0, i.useRef)([]),
                                k = (0, r.useRouter)(),
                                y = function() {
                                    var e = d && ! function() {
                                        var e, o, n, t = null === (n = navigator) || void 0 === n || null === (o = n.scheduling) || void 0 === o || null === (e = o.isInputPending) || void 0 === e ? void 0 : e.call(o);
                                        return null != t ? t : p
                                    }();
                                    return (e || _ || !v) && !l
                                },
                                g = _sliced_to_array((0, i.useState)(function() {
                                    return y()
                                }), 2),
                                x = g[0],
                                j = g[1],
                                z = _sliced_to_array((0, i.useState)(!0), 2),
                                w = z[0],
                                N = z[1],
                                P = function() {
                                    f.current.forEach(function(e) {
                                        return e()
                                    }), f.current = []
                                },
                                C = function() {
                                    return _async_to_generator(function() {
                                        var e, o = arguments;
                                        return _ts_generator(this, function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return e = !(o.length > 0) || void 0 === o[0] || o[0], P(), x ? [3, 3] : l ? [4, l()] : [3, 2];
                                                case 1:
                                                    n.sent(), n.label = 2;
                                                case 2:
                                                    j(!0), n.label = 3;
                                                case 3:
                                                    return N(e), [2]
                                            }
                                        })
                                    }).apply(this, arguments)
                                },
                                O = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3;
                                    if (!(e <= 0)) {
                                        var o = setTimeout(function() {
                                            return C(!1)
                                        }, e);
                                        f.current.push(function() {
                                            return clearTimeout(o)
                                        })
                                    }
                                },
                                Z = function(e, o) {
                                    switch (e) {
                                        case "delay":
                                            O(o);
                                            break;
                                        case "visible":
                                            ! function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Function.prototype;
                                                if ("IntersectionObserver" in window) {
                                                    var o = e(),
                                                        n = new IntersectionObserver(function(e) {
                                                            var o = _sliced_to_array(e, 1)[0];
                                                            o.isIntersecting && o.intersectionRatio > 0 && C(!1)
                                                        }, o);
                                                    f.current.push(function() {
                                                        n && n.disconnect()
                                                    }), n.observe(b.current)
                                                } else C(!1)
                                            }(o);
                                            break;
                                        case "idle":
                                            ! function() {
                                                if ("requestIdleCallback" in window) {
                                                    var e = requestIdleCallback(function() {
                                                        return requestAnimationFrame(function() {
                                                            return C(!1)
                                                        })
                                                    }, {
                                                        timeout: 500
                                                    });
                                                    "cancelIdleCallback" in window && f.current.push(function() {
                                                        cancelIdleCallback(e)
                                                    })
                                                } else O()
                                            }();
                                            break;
                                        default:
                                            ! function(e) {
                                                var o = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                                                    return b.current
                                                })();
                                                o.addEventListener(e, function() {
                                                    return C(!1)
                                                }, s), f.current.push(function() {
                                                    o && o.removeEventListener(e, function() {
                                                        return C(!1)
                                                    }, s)
                                                })
                                            }(e, o)
                                    }
                                };
                            return (0, i.useLayoutEffect)(function() {
                                x || (!_ && v && (!!b.current.dataset.hydrationOnDemand || c) || C())
                            }, [_, v]), (0, i.useEffect)(function() {
                                return n.forEach(function(e) {
                                        return Array.isArray(e) ? Z.apply(void 0, _to_consumable_array(e)) : Z(e)
                                    }),
                                    function() {
                                        return P()
                                    }
                            }, [k.asPath]), (0, i.useEffect)(function() {
                                N(!0)
                            }, [k.asPath]), x ? (0, t.jsx)("section", _object_spread_props(_object_spread({
                                ref: b
                            }, a), {
                                children: (0, t.jsx)(e, _object_spread_props(_object_spread({}, m), {
                                    isQueuedEvent: w
                                }))
                            })) : (0, t.jsx)("section", _object_spread({
                                ref: b,
                                dangerouslySetInnerHTML: {
                                    __html: ""
                                },
                                suppressHydrationWarning: !0
                            }, a))
                        };
                        return o.displayName = "withHydrationOnDemand(".concat(function(e) {
                            return e.displayName || e.name || "Component"
                        }(e), ")"), o
                    }
                };
            o.Z = function(e) {
                return a ? u(e) : c
            }
        },
        52375: function(e) {
            e.exports = {
                clc: "OLx65C",
                clc__coupon: "_70lPjZ",
                "clc__coupon-icon": "_9_pXrv",
                clc__divider: "t5A5f3",
                "clc__coupon-link": "T676QP",
                clc__title: "xDNvST",
                clc__subtitle: "APCX4I",
                clc__conditions: "XnjNDR",
                clc__condition: "cUDpI8",
                "clc__modal-title": "aypLAX",
                "clc__modal-subtitle": "Hg1sxE",
                "clc__modal-coupon-value": "dRDNqX",
                "clc__coupon-modal-icon": "VKwJ3q"
            }
        },
        52391: function(e) {
            e.exports = {
                bhdp: "xugE0C",
                "bhdp--skeleton": "ydBEnY",
                bhdp__background: "a11v47",
                "bhdp__background-image": "_2x9B4c",
                bhdp__symbols: "lUux5e",
                "bhdp__symbols-percent": "fcLFSw",
                "bhdp__symbols-percent--mobile": "Bk8yAT",
                "bhdp__symbols-percent--desktop": "KbWdHe",
                "bhdp__symbols-balloons": "y_fLW5",
                "bhdp__symbols-balloons--left": "AGmYKB",
                "bhdp__symbols-balloons--right": "RvSnj7",
                bhdp__content: "oRahxo",
                "bhdp__left-section": "pa3is7",
                "bhdp__right-section": "I2TCAh",
                bhdp__promotion: "_6Kxp_C",
                "bhdp__promotion-title": "bBDi9N",
                "bhdp__promotion-countdown": "L1Go73",
                "bhdp__promotion-countdown-item": "wjRNrh",
                "bhdp__countdown-separator": "ofK3Cc",
                bhdp__product: "Zn3WiS",
                "bhdp__product-wrapper": "KAnnam",
                bhdp__products: "_6hsqJJ",
                "bhdp__products--deprecated": "_6umLgF",
                "bhdp__products--next": "YewyIr",
                "bhdp__products--original": "YsiCX0"
            }
        },
        13397: function(e) {
            e.exports = {
                "clickable-coupon": "GkNw0G",
                "clickable-coupon__container": "fmDyN1",
                "clickable-coupon__heading": "ZYsQ12",
                "clickable-coupon__initial": "_600fxt",
                "clickable-coupon__decoration-top-right": "vXyrno",
                "clickable-coupon__pomegranate-small": "_3Kgt4s",
                "clickable-coupon__star-main": "dBgX8y",
                "clickable-coupon__star": "aPECXd",
                "clickable-coupon__decoration-left": "Nw9voY",
                float: "_6KThuZ",
                "clickable-coupon__pomegranate-left": "W6FM6z",
                "clickable-coupon__decoration-right": "wyNeBP",
                "clickable-coupon__pomegranate-right": "HuO7xt",
                "clickable-coupon__clickable": "cpPjHO",
                "clickable-coupon__main-pomegranate": "CE3D_k",
                "clickable-coupon__hint": "z6Scuk",
                "clickable-coupon__revealed": "_0OTF_3",
                "clickable-coupon__loading": "_2mn2iE",
                "clickable-coupon__revealed-image": "_5CkQEG",
                "clickable-coupon__image": "BcM69i",
                "clickable-coupon__code-container": "SbgoWG",
                "clickable-coupon__copy-button": "LkV0yW",
                "clickable-coupon__code": "Tu0RLY",
                "clickable-coupon__copy-icon": "NybaaT",
                "clickable-coupon__copy-text": "_9YPd0S",
                "clickable-coupon__title": "sbDw41",
                "clickable-coupon__skeleton": "hwmsY9",
                "clickable-coupon__skeleton-decorations": "HPm8Od",
                "clickable-coupon__skeleton-decoration--left": "yKz0IO",
                "clickable-coupon__skeleton-decoration--right": "SjReLO",
                "clickable-coupon__skeleton-decoration--top-right": "ICnGOQ",
                "clickable-coupon__skeleton-main": "ZYfQ9B",
                "clickable-coupon__skeleton-hint": "TZetwx",
                "float-gentle": "TXmrSS"
            }
        },
        78888: function(e) {
            e.exports = {
                "single-slider-skeleton": "Nk44O2",
                "single-slider-skeleton__items": "QwWi_e",
                "single-slider-skeleton__item": "Pib8Nd",
                "horizontal-quick-access-skeleton": "_7csyUu",
                "horizontal-quick-access-skeleton__items": "_mniou",
                "horizontal-quick-access-skeleton__item": "_CBW8X",
                "horizontal-quick-access-skeleton__item-image": "PC_uQ9",
                "horizontal-quick-access-skeleton__item-text": "_aXgLy",
                "horizontal-product-popular-skeleton": "UbajiH",
                "horizontal-product-popular-skeleton__title": "Giy_jE",
                "horizontal-product-popular-skeleton__description": "dB7Ps4",
                "horizontal-product-popular-skeleton__items": "_7Xz_Bs",
                "horizontal-product-popular-skeleton__item": "oF91Ke",
                "horizontal-product-popular-skeleton__item-image-sk": "LZ_VVS",
                "horizontal-product-popular-skeleton__item-body": "F_NjP8",
                "horizontal-product-popular-skeleton__item-product-title-sk": "CxF6da",
                "horizontal-product-popular-skeleton__item-product-vendor-rate": "_19myKs",
                "horizontal-product-popular-skeleton__item-product-vendor-sk": "FoGL3Q",
                "horizontal-product-popular-skeleton__item-product-rate-sk": "am_8xe",
                "horizontal-product-popular-skeleton__item-product-price-tag": "uTkuHL",
                "horizontal-product-popular-skeleton__item-product-price-sk": "qHMPt8",
                "horizontal-product-popular-skeleton__item-product-tag-sk": "s_NhzP",
                "horizontal-product-popular-skeleton__item-product-add-sk": "DC0Sgx",
                "horizontal-product-timely-skeleton": "sYKB6F",
                "horizontal-product-timely-skeleton__header": "_0Hapik",
                "horizontal-product-timely-skeleton__header-icon": "_75qJQa",
                "horizontal-product-timely-skeleton__icon": "MU_Hdd",
                "horizontal-product-timely-skeleton__header-content": "JBAWLG",
                "horizontal-product-timely-skeleton__header-title": "PWSZQ_",
                "horizontal-product-timely-skeleton__header-show-all": "_3bvzaA",
                "horizontal-product-timely-skeleton__items": "bZN_0i",
                "horizontal-product-timely-skeleton__item": "_6eyvhW",
                "daily-off-category-products-skeleton": "_9MyX3B",
                "daily-off-category-products-skeleton__header": "OU_150",
                "daily-off-category-products-skeleton__header-title": "RuJqQh",
                "daily-off-category-products-skeleton__inner": "U84UYL",
                "daily-off-category-products-skeleton__content": "dFF_Lp",
                "daily-off-category-products-skeleton__carousel": "_4_JjdU",
                "daily-off-category-products-skeleton__product-card": "VoyH_s",
                "daily-off-category-products-skeleton__product-card-container": "mMD2ON",
                "daily-off-category-products-skeleton__products-title": "Y_92G1",
                "daily-off-category-products-skeleton__slide": "VB5hOb",
                "daily-off-category-products-skeleton__products-img": "I3xcoL",
                "daily-off-category-products-skeleton__section": "_6g82rQ",
                "daily-off-category-products-skeleton__section-product": "ny67Fy",
                "bbt-skeleton": "BgHbx3",
                "bbt-skeleton__item": "_3bjlNA",
                "skeleton-horizontal-vendor-coupons": "_SzvNm",
                "skeleton-horizontal-vendor-coupons__title": "Ai2qVh",
                "skeleton-horizontal-vendor-coupons__subtitle": "_4yDqEd",
                "skeleton-horizontal-vendor-coupons__divider": "LVexyf",
                "skeleton-horizontal-vendor-coupons__items": "c0VP0V",
                "skeleton-horizontal-vendor-coupons__item": "mXim0j",
                "skeleton-horizontal-vendor-coupons__item-header": "dNcbF_",
                "skeleton-horizontal-vendor-coupons__item-header-icon": "y3pNkc",
                "skeleton-horizontal-vendor-coupons__item-header-title": "Ctgef_",
                "skeleton-horizontal-vendor-coupons__item-header-subtitle": "_5OJW_y",
                "skeleton-horizontal-vendor-coupons__item-images-container": "_9Xt_VH",
                "skeleton-horizontal-vendor-coupons__item-images-vendor": "YRFAgy",
                "skeleton-horizontal-vendor-coupons__item-images": "v_Whsx",
                "skeleton-horizontal-vendor-coupons__item-image": "rnEmZs",
                "skeleton-horizontal-vendor-coupons__item-image-img": "WZf3t6",
                "skeleton-horizontal-vendor-with-chat": "biDusl",
                "skeleton-horizontal-vendor-with-chat__header": "td7AA4",
                "skeleton-horizontal-vendor-with-chat__items": "ecucN9",
                "skeleton-horizontal-vendor-with-chat__item": "t7qIOQ"
            }
        },
        47037: function(e) {
            e.exports = {
                "story-bar-skeleton": "zrNDt6",
                "story-bar-skeleton__item": "fAeoKB",
                "story-bar-skeleton__item-title": "iAg3pf",
                "story-bar-skeleton--new-ui": "fnkBot",
                "story-bar-skeleton__avatar": "HKJiV8"
            }
        }
    }
]);