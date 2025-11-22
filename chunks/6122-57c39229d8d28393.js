function _array_like_to_array(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
    return r
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function asyncGeneratorStep(e, n, t, r, o, l, i) {
    try {
        var a = e[l](i),
            u = a.value
    } catch (e) {
        return void t(e)
    }
    a.done ? n(u) : Promise.resolve(u).then(r, o)
}

function _async_to_generator(e) {
    return function() {
        var n = this,
            t = arguments;
        return new Promise(function(r, o) {
            var l = e.apply(n, t);

            function i(e) {
                asyncGeneratorStep(l, r, o, i, a, "next", e)
            }

            function a(e) {
                asyncGeneratorStep(l, r, o, i, a, "throw", e)
            }
            i(void 0)
        })
    }
}

function _define_property(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e
}

function _iterable_to_array(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _iterable_to_array_limit(e, n) {
    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != t) {
        var r, o, l = [],
            i = !0,
            a = !1;
        try {
            for (t = t.call(e); !(i = (r = t.next()).done) && (l.push(r.value), !n || l.length !== n); i = !0);
        } catch (e) {
            a = !0, o = e
        } finally {
            try {
                i || null == t.return || t.return()
            } finally {
                if (a) throw o
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
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(n) {
            _define_property(e, n, t[n])
        })
    }
    return e
}

function ownKeys(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter(function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
        })), t.push.apply(t, r)
    }
    return t
}

function _object_spread_props(e, n) {
    return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), e
}

function _object_without_properties(e, n) {
    if (null == e) return {};
    var t, r, o = _object_without_properties_loose(e, n);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) t = l[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
    }
    return o
}

function _object_without_properties_loose(e, n) {
    if (null == e) return {};
    var t, r, o = {},
        l = Object.keys(e);
    for (r = 0; r < l.length; r++) t = l[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
    return o
}

function _sliced_to_array(e, n) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, n) || _unsupported_iterable_to_array(e, n) || _non_iterable_rest()
}

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
}

function _unsupported_iterable_to_array(e, n) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, n);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _array_like_to_array(e, n) : void 0
    }
}

function _ts_generator(e, n) {
    var t, r, o, l = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return i.next = a(0), i.throw = a(1), i.return = a(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this
    }), i;

    function a(a) {
        return function(u) {
            return function(a) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; i && (i = 0, a[0] && (l = 0)), l;) try {
                    if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                        case 0:
                        case 1:
                            o = a;
                            break;
                        case 4:
                            return l.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            l.label++, r = a[1], a = [0];
                            continue;
                        case 7:
                            a = l.ops.pop(), l.trys.pop();
                            continue;
                        default:
                            if (!(o = l.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                l = 0;
                                continue
                            }
                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                l.label = a[1];
                                break
                            }
                            if (6 === a[0] && l.label < o[1]) {
                                l.label = o[1], o = a;
                                break
                            }
                            if (o && l.label < o[2]) {
                                l.label = o[2], l.ops.push(a);
                                break
                            }
                            o[2] && l.ops.pop(), l.trys.pop();
                            continue
                    }
                    a = n.call(e, l)
                } catch (e) {
                    a = [6, e], r = 0
                } finally {
                    t = o = 0
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }([a, u])
        }
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6122, 3508], {
        68731: function(e, n, t) {
            "use strict";
            t.d(n, {
                BZ: function() {
                    return v
                },
                C_: function() {
                    return f
                },
                G4: function() {
                    return m
                },
                eX: function() {
                    return _
                },
                u7: function() {
                    return b
                }
            });
            var r = t(32930),
                o = t(40877),
                l = t(5164),
                i = t(78888),
                a = t.n(i),
                u = t(81433),
                s = t.n(u),
                c = t(70437),
                d = t.n(c),
                p = t(19616);

            function _(e) {
                var n = e.ratio,
                    t = e.className;
                return (0, r.jsx)(s(), {
                    className: (0, o.Z)(a()["single-slider-skeleton"], t),
                    children: (0, r.jsx)("div", {
                        className: a()["single-slider-skeleton__items"],
                        style: {
                            paddingBottom: n ? "".concat((100 * n).toFixed(3), "%") : "60%"
                        },
                        children: (0, r.jsx)(d(), {
                            width: "100%",
                            height: "100%",
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            className: a()["single-slider-skeleton__item"]
                        })
                    })
                })
            }

            function v() {
                return (0, r.jsx)(s(), {
                    className: a()["horizontal-quick-access-skeleton"],
                    children: (0, r.jsx)(s(), {
                        className: a()["horizontal-quick-access-skeleton__items"],
                        children: (0, l.range)(4).map(function(e, n) {
                            return (0, r.jsxs)(s(), {
                                className: a()["horizontal-quick-access-skeleton__item"],
                                children: [(0, r.jsx)(d(), {
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)",
                                    width: "100%",
                                    radius: "50%",
                                    className: a()["horizontal-quick-access-skeleton__item-image"]
                                }), (0, r.jsx)(d(), {
                                    className: a()["horizontal-quick-access-skeleton__item-text"]
                                })]
                            }, n)
                        })
                    })
                })
            }

            function m() {
                return (0, r.jsxs)(s(), {
                    className: a()["horizontal-product-popular-skeleton"],
                    children: [(0, r.jsx)(d(), {
                        className: a()["horizontal-product-popular-skeleton__title"]
                    }), (0, r.jsx)(s(), {
                        className: a()["horizontal-product-popular-skeleton__items"],
                        children: (0, l.range)(2).map(function(e, n) {
                            return (0, r.jsxs)(s(), {
                                className: a()["horizontal-product-popular-skeleton__item"],
                                children: [(0, r.jsx)(s(), {
                                    className: a()["horizontal-product-popular-skeleton__item-image"],
                                    children: (0, r.jsx)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-image-sk"]
                                    })
                                }), (0, r.jsxs)(s(), {
                                    className: a()["horizontal-product-popular-skeleton__item-body"],
                                    children: [(0, r.jsx)(s(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-title"],
                                        children: (0, r.jsx)(d(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-title-sk"]
                                        })
                                    }), (0, r.jsxs)(s(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-vendor-rate"],
                                        children: [(0, r.jsx)(d(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-vendor-sk"]
                                        }), (0, r.jsx)(d(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-rate-sk"]
                                        })]
                                    }), (0, r.jsxs)(s(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-price-tag"],
                                        children: [(0, r.jsx)(d(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-price-sk"]
                                        }), (0, r.jsx)(d(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-tag-sk"]
                                        })]
                                    }), (0, r.jsx)(s(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-add"],
                                        children: (0, r.jsx)(d(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-add-sk"]
                                        })
                                    })]
                                })]
                            }, n)
                        })
                    })]
                })
            }

            function f() {
                return (0, r.jsxs)(s(), {
                    className: a()["horizontal-product-popular-skeleton"],
                    children: [(0, r.jsx)(d(), {
                        className: a()["horizontal-product-popular-skeleton__title"]
                    }), (0, r.jsx)(s(), {
                        className: a()["horizontal-product-popular-skeleton__items"],
                        children: (0, l.range)(2).map(function(e, n) {
                            return (0, r.jsxs)(s(), {
                                className: a()["horizontal-product-popular-skeleton__item"],
                                children: [(0, r.jsx)(s(), {
                                    className: a()["horizontal-product-popular-skeleton__item-image"],
                                    children: (0, r.jsx)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-image-sk"]
                                    })
                                }), (0, r.jsxs)(s(), {
                                    className: a()["horizontal-product-popular-skeleton__item-body"],
                                    children: [(0, r.jsx)(s(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-title"],
                                        children: (0, r.jsx)(d(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-title-sk"]
                                        })
                                    }), (0, r.jsxs)(s(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-vendor-rate"],
                                        children: [(0, r.jsx)(d(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-vendor-sk"]
                                        }), (0, r.jsx)(d(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-rate-sk"]
                                        })]
                                    }), (0, r.jsx)(s(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-price-tag"],
                                        children: (0, r.jsx)(d(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-price-sk"]
                                        })
                                    })]
                                })]
                            }, n)
                        })
                    })]
                })
            }

            function b() {
                return (0, r.jsxs)(s(), {
                    className: a()["horizontal-product-timely-skeleton"],
                    children: [(0, r.jsxs)("div", {
                        className: a()["horizontal-product-timely-skeleton__header"],
                        children: [(0, r.jsx)("div", {
                            className: a()["horizontal-product-timely-skeleton__header-icon"],
                            children: (0, r.jsx)(d(), {
                                className: a()["horizontal-product-timely-skeleton__icon"]
                            })
                        }), (0, r.jsxs)("div", {
                            className: a()["horizontal-product-timely-skeleton__header-content"],
                            children: [(0, r.jsx)(d(), {
                                className: a()["horizontal-product-timely-skeleton__header-title"]
                            }), (0, r.jsx)(d(), {
                                className: a()["horizontal-product-timely-skeleton__header-show-all"]
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: a()["horizontal-product-timely-skeleton__items"],
                        children: [(0, r.jsx)(p.Z, {
                            className: a()["horizontal-product-timely-skeleton__item"],
                            discountMode: !0
                        }), (0, r.jsx)(p.Z, {
                            className: a()["horizontal-product-timely-skeleton__item"],
                            discountMode: !0
                        })]
                    })]
                })
            }
        },
        71963: function(e, n, t) {
            "use strict";
            t.d(n, {
                c: function() {
                    return _e
                },
                w: function() {
                    return pe
                }
            });
            var r = t(2389),
                o = t.n(r),
                l = t(26491),
                i = t(68731),
                a = o()(function() {
                    return Promise.all([t.e(6999), t.e(7957)]).then(t.bind(t, 57957))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [57957]
                        }
                    },
                    ssr: !0
                }),
                u = o()(function() {
                    return t.e(6447).then(t.bind(t, 46447))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [46447]
                        }
                    },
                    ssr: !0
                }),
                s = o()(function() {
                    return Promise.all([t.e(3620), t.e(8231), t.e(2639), t.e(1740), t.e(3063)]).then(t.bind(t, 69664))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [69664]
                        }
                    },
                    ssr: !0
                }),
                c = o()(function() {
                    return Promise.all([t.e(5434), t.e(7978)]).then(t.bind(t, 57978))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [57978]
                        }
                    },
                    ssr: !0
                }),
                d = o()(function() {
                    return t.e(5467).then(t.bind(t, 85467))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [85467]
                        }
                    },
                    ssr: !0
                }),
                p = o()(function() {
                    return t.e(921).then(t.bind(t, 10921))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [10921]
                        }
                    },
                    ssr: !0
                }),
                _ = o()(function() {
                    return t.e(1100).then(t.bind(t, 51100))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [51100]
                        }
                    },
                    ssr: !0
                }),
                v = o()(function() {
                    return Promise.all([t.e(5434), t.e(5135)]).then(t.bind(t, 65135))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [65135]
                        }
                    },
                    ssr: !0
                }),
                m = o()(function() {
                    return Promise.all([t.e(3620), t.e(3941), t.e(928), t.e(6974)]).then(t.bind(t, 81313))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [81313]
                        }
                    },
                    ssr: !0
                }),
                f = o()(function() {
                    return Promise.all([t.e(296), t.e(3620), t.e(7339), t.e(1558), t.e(1150)]).then(t.bind(t, 26964))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [26964]
                        }
                    },
                    ssr: !0
                }),
                b = o()(function() {
                    return t.e(3217).then(t.bind(t, 33217))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [33217]
                        }
                    },
                    ssr: !0
                }),
                h = o()(function() {
                    return Promise.all([t.e(3620), t.e(9606)]).then(t.bind(t, 9606))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [9606]
                        }
                    },
                    ssr: !0
                }),
                y = o()(function() {
                    return Promise.all([t.e(8231), t.e(5798)]).then(t.bind(t, 35798))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [35798]
                        }
                    },
                    ssr: !0,
                    loading: i.BZ
                }),
                k = o()(function() {
                    return Promise.all([t.e(7339), t.e(377)]).then(t.bind(t, 84419))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [84419]
                        }
                    },
                    ssr: !0
                }),
                g = o()(function() {
                    return Promise.all([t.e(3620), t.e(7586)]).then(t.bind(t, 67586))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [67586]
                        }
                    },
                    ssr: !0
                }),
                z = o()(function() {
                    return Promise.all([t.e(296), t.e(8231), t.e(7339), t.e(1558), t.e(4086)]).then(t.bind(t, 21861))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [21861]
                        }
                    },
                    ssr: !0,
                    loading: i.u7
                }),
                w = o()(function() {
                    return Promise.all([t.e(3620), t.e(5939)]).then(t.bind(t, 15939))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [15939]
                        }
                    },
                    ssr: !0
                }),
                x = o()(function() {
                    return Promise.all([t.e(8231), t.e(7339), t.e(717), t.e(4813)]).then(t.bind(t, 27410))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [27410]
                        }
                    },
                    ssr: !0,
                    loading: i.G4
                }),
                j = o()(function() {
                    return t.e(8529).then(t.bind(t, 98529))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [98529]
                        }
                    },
                    ssr: !0,
                    loading: i.C_
                }),
                P = o()(function() {
                    return Promise.all([t.e(3620), t.e(7339), t.e(5632)]).then(t.bind(t, 27900))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [27900]
                        }
                    },
                    ssr: !0
                }),
                N = o()(function() {
                    return Promise.all([t.e(3620), t.e(1122)]).then(t.bind(t, 1122))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [1122]
                        }
                    },
                    ssr: !0
                }),
                O = o()(function() {
                    return t.e(6214).then(t.bind(t, 46214))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [46214]
                        }
                    },
                    ssr: !0
                }),
                C = o()(function() {
                    return Promise.all([t.e(296), t.e(3620), t.e(7339), t.e(6160), t.e(5347)]).then(t.bind(t, 30878))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [30878]
                        }
                    },
                    ssr: !0
                }),
                G = o()(function() {
                    return t.e(959).then(t.bind(t, 10959))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [10959]
                        }
                    },
                    ssr: !0
                }),
                H = o()(function() {
                    return Promise.all([t.e(3620), t.e(7339), t.e(8920)]).then(t.bind(t, 10829))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [10829]
                        }
                    },
                    ssr: !0
                }),
                Z = o()(function() {
                    return Promise.all([t.e(3620), t.e(9836), t.e(4266), t.e(8454), t.e(7726)]).then(t.bind(t, 8634))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8634]
                        }
                    },
                    ssr: !0
                }),
                S = o()(function() {
                    return Promise.all([t.e(7339), t.e(3907)]).then(t.bind(t, 74754))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [74754]
                        }
                    },
                    ssr: !0
                }),
                E = o()(function() {
                    return Promise.all([t.e(296), t.e(3620), t.e(5382), t.e(7339), t.e(3598), t.e(6160), t.e(8712)]).then(t.bind(t, 13160))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [13160]
                        }
                    },
                    ssr: !0
                }),
                I = o()(function() {
                    return Promise.all([t.e(3620), t.e(2438)]).then(t.bind(t, 22438))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [22438]
                        }
                    },
                    ssr: !0
                }),
                A = o()(function() {
                    return t.e(680).then(t.bind(t, 90680))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [90680]
                        }
                    },
                    ssr: !0,
                    loading: i.eX
                }),
                B = o()(function() {
                    return t.e(662).then(t.bind(t, 662))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [662]
                        }
                    },
                    ssr: !0
                }),
                V = o()(function() {
                    return t.e(5512).then(t.bind(t, 5512))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [5512]
                        }
                    },
                    ssr: !0
                }),
                T = (0, l.Z)({
                    on: ["visible"]
                })(A),
                D = (0, l.Z)({
                    on: ["visible"]
                })(a),
                q = (0, l.Z)({
                    on: ["visible"]
                })(u),
                L = (0, l.Z)({
                    on: ["visible"]
                })(s),
                M = (0, l.Z)({
                    on: ["visible"]
                })(E),
                F = (0, l.Z)({
                    on: ["visible"]
                })(Z),
                Q = (0, l.Z)({
                    on: ["visible"]
                })(c),
                R = (0, l.Z)({
                    on: ["visible"]
                })(d),
                W = (0, l.Z)({
                    on: ["visible"]
                })(p),
                X = (0, l.Z)({
                    on: ["visible"]
                })(_),
                K = (0, l.Z)({
                    on: ["visible"]
                })(v),
                U = (0, l.Z)({
                    on: ["visible"]
                })(m),
                J = (0, l.Z)({
                    on: ["visible"]
                })(H),
                Y = (0, l.Z)({
                    on: ["visible"]
                })(f),
                $ = (0, l.Z)({
                    on: ["visible"]
                })(b),
                ee = (0, l.Z)({
                    on: ["visible"]
                })(h),
                ne = (0, l.Z)({
                    on: ["visible"]
                })(j),
                te = (0, l.Z)({
                    on: ["visible"]
                })(y),
                re = (0, l.Z)({
                    on: ["visible"]
                })(k),
                oe = (0, l.Z)({
                    on: ["visible"]
                })(g),
                le = (0, l.Z)({
                    on: ["visible"]
                })(I),
                ie = (0, l.Z)({
                    on: ["visible"]
                })(z),
                ae = (0, l.Z)({
                    on: ["visible"]
                })(w),
                ue = (0, l.Z)({
                    on: ["visible"]
                })(x),
                se = (0, l.Z)({
                    on: ["visible"]
                })(N),
                ce = (0, l.Z)({
                    on: ["visible"]
                })(P),
                de = (0, l.Z)({
                    on: ["visible"]
                })(B),
                pe = {
                    IranMap: D,
                    TextBox: q,
                    StoryBar: L,
                    SingleSlider: T,
                    ExploreSearch: M,
                    HomeCouponList: F,
                    ExploreMarkdown: Q,
                    ExpandableVideo: R,
                    VideoViewSingle: W,
                    CouponCardsList: X,
                    ExploreBnplDebt: (0, l.Z)({
                        on: ["visible"]
                    })(V),
                    CollapseMarkdown: K,
                    HorizontalReview: U,
                    TimeLimitedOffer: J,
                    CouponProductLine: Y,
                    ExploreBnplCredit: de,
                    BannerBannerTriple: $,
                    HorizontalVideoSlide: ee,
                    HorizontalPGPPopular: ne,
                    HorizontalQuickAccess: te,
                    VerticalProductTimely: re,
                    HorizontalCategoryView: oe,
                    HorizontalBrandPopular: le,
                    HorizontalProductTimely: ie,
                    HorizontalProductVideos: ae,
                    HorizontalVendorCoupons: (0, l.Z)({
                        on: ["visible"]
                    })(O),
                    HorizontalProductPopular: ue,
                    HorizontalVendorWithChat: se,
                    DailyOffCategoryProducts: ce,
                    HorizontalCategoryViewHome: (0, l.Z)({
                        on: ["visible"]
                    })(G),
                    HorizontalDiscountedProducts: (0, l.Z)({
                        on: ["visible"]
                    })(S),
                    HorizontalProductTimelyBasalam: (0, l.Z)({
                        on: ["visible"]
                    })(C)
                },
                _e = {
                    iran_map: "IranMap",
                    text_box: "TextBox",
                    story_bar: "StoryBar",
                    markdown: "ExploreMarkdown",
                    single_slider: "SingleSlider",
                    explore_search: "ExploreSearch",
                    home_coupon_list: "HomeCouponList",
                    expandable_video: "ExpandableVideo",
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
                    horizontal_product_timely_basalam: "HorizontalProductTimelyBasalam"
                }
        },
        19361: function(e, n, t) {
            "use strict";
            t.d(n, {
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
            var r = t(71963),
                o = function(e) {
                    var n, t, r;
                    return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && "number" == typeof(null == e ? void 0 : e.price) && (null == e || null === (n = e.photo) || void 0 === n ? void 0 : n.small) && (null == e || null === (t = e.vendor) || void 0 === t ? void 0 : t.name) && (null == e || null === (r = e.vendor) || void 0 === r ? void 0 : r.identifier)
                },
                l = function(e) {
                    var n = e || {},
                        t = n.ui,
                        r = n.name,
                        l = n.result;
                    if (!t || !r) return !1;
                    var i = !0;
                    switch (t) {
                        case "iran_map":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    if ("number" != typeof(null == e ? void 0 : e.id)) return !1;
                                    var t = null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.provinces;
                                    return (null == t ? void 0 : t.length) > 0 && t.every(function(e) {
                                        return (null == e ? void 0 : e.url) && (null == e ? void 0 : e.name) && (null == e ? void 0 : e.title)
                                    })
                                })
                            }(l);
                            break;
                        case "text_box":
                            i = function(e) {
                                var n, t, r, o, l, i, a, u, s, c, d, p, _ = null == e ? void 0 : e.metaData,
                                    v = (null == _ || null === (n = _.body) || void 0 === n ? void 0 : n.text) && (null == _ || null === (t = _.body) || void 0 === t ? void 0 : t.color) && (null == _ || null === (o = _.body) || void 0 === o || null === (r = o.size) || void 0 === r ? void 0 : r.desktop) && (null == _ || null === (i = _.body) || void 0 === i || null === (l = i.size) || void 0 === l ? void 0 : l.mobile),
                                    m = (null == _ || null === (a = _.title) || void 0 === a ? void 0 : a.text) && (null == _ || null === (u = _.title) || void 0 === u ? void 0 : u.color) && (null == _ || null === (c = _.title) || void 0 === c || null === (s = c.size) || void 0 === s ? void 0 : s.desktop) && (null == _ || null === (p = _.title) || void 0 === p || null === (d = p.size) || void 0 === d ? void 0 : d.mobile);
                                return v || m
                            }(e);
                            break;
                        case "story_bar":
                            i = function(e) {
                                var n, t = null == e ? void 0 : e.metaData;
                                return (null == t || null === (n = t.userIds) || void 0 === n ? void 0 : n.length) > 0
                            }(e);
                            break;
                        case "breadcrumbs":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, t, r;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.slug) && (null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.title) && "number" == typeof(null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.parentId)
                                })
                            }(l);
                            break;
                        case "single_slider":
                        case "banner_banner_slider":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, t, r, o;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (t = e.metadata) || void 0 === t || null === (n = t.image) || void 0 === n ? void 0 : n.large) && (null == e || null === (o = e.metadata) || void 0 === o || null === (r = o.image) || void 0 === r ? void 0 : r.small)
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
                            i = function(e, n) {
                                var t = null == e ? void 0 : e.metaData;
                                return !!((null == t ? void 0 : t.endDate) && (null == n ? void 0 : n.length) && (null == t || !t.reward || Array.isArray(t.reward) && t.reward.every(function(e) {
                                    return "number" == typeof(null == e ? void 0 : e.id) && (null == e ? void 0 : e.label) && (null == e ? void 0 : e.description)
                                }))) && n.every(function(e) {
                                    var n;
                                    return "number" == typeof(null == e ? void 0 : e.id) && (null == e ? void 0 : e.metadata) && "number" == typeof(null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.vendorId)
                                })
                            }(e, l);
                            break;
                        case "comments_slider":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, t, r, o, l;
                                    return !!((null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.name) && (null == e || null === (t = e.metadata) || void 0 === t || !t.vendor || (null == e || null === (o = e.metadata) || void 0 === o || null === (r = o.vendor) || void 0 === r ? void 0 : r.name)) && (null == e || null === (l = e.metadata) || void 0 === l ? void 0 : l.comments) && Array.isArray(e.metadata.comments) && e.metadata.comments.every(function(e) {
                                        return (null == e ? void 0 : e.user) && (null == e ? void 0 : e.text)
                                    }))
                                })
                            }(l);
                            break;
                        case "markdown":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    return "number" == typeof(null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.text)
                                })
                            }(l);
                            break;
                        case "expandable_video":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, t;
                                    return (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.url) && (null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.thumbnail)
                                })
                            }(l);
                            break;
                        case "video_view_single":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    return null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.url
                                })
                            }(l);
                            break;
                        case "coupon_cards_list":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.couponCode)
                                })
                            }(l);
                            break;
                        case "collapse_markdown":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, t;
                                    return (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.title) && (null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.text)
                                })
                            }(l);
                            break;
                        case "horizontal_review":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return !("number" != typeof(null == e ? void 0 : e.id) || "number" != typeof(null == e ? void 0 : e.userId) || !(null == e ? void 0 : e.description) || !o(null == e ? void 0 : e.product))
                                })
                            }(l);
                            break;
                        case "coupon_product_line":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return !!o(e)
                                })
                            }(l);
                            break;
                        case "wishlist_horizontal":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, t, r;
                                    return !(!(null == e ? void 0 : e.listId) || !(null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.id) || "number" != typeof(null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.itemsCount) || (null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.products) && Array.isArray(e.metadata.products) && !e.metadata.products.every(function(e) {
                                        return o(e)
                                    }))
                                })
                            }(l);
                            break;
                        case "horizontal_category_view_home":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, t;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.link) && (null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.title)
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
                        case "daily_off_category_products":
                        case "horizontal_product_timely_basalam":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return o(e)
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
                                    var n;
                                    if (!(null == e ? void 0 : e.id)) return !1;
                                    var t = null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.banners;
                                    return (null == t ? void 0 : t.length) > 0 && t.every(function(e) {
                                        return null == e ? void 0 : e.image
                                    })
                                })
                            }(l);
                            break;
                        case "banner_triple_slider":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, t = null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.banners;
                                    return (null == t ? void 0 : t.length) > 0 && t.every(function(e) {
                                        var n, t;
                                        return (null == e || null === (n = e.image) || void 0 === n ? void 0 : n.large) && (null == e || null === (t = e.image) || void 0 === t ? void 0 : t.small)
                                    })
                                })
                            }(l);
                            break;
                        case "vertical_video_slide":
                        case "horizontal_video_slide":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, t, r, o, l;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.length) && (null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.thumbnail) && (null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.video) && (null == e || null === (l = e.metadata) || void 0 === l || null === (o = l.video) || void 0 === o ? void 0 : o.medium)
                                })
                            }(l);
                            break;
                        case "horizontal_quick_access":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, t, r;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.link) && (null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.image) && (null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.title)
                                })
                            }(l);
                            break;
                        case "horizontal_category_view":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.title)
                                })
                            }(l);
                            break;
                        case "horizontal_product_videos":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    return o(e) && (null == e || null === (n = e.video) || void 0 === n ? void 0 : n.small)
                                })
                            }(l);
                            break;
                        case "horizontal_vendor_with_chat":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return function(e) {
                                        var n;
                                        return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && (null == e ? void 0 : e.identifier) && (null == e || null === (n = e.user) || void 0 === n ? void 0 : n.name)
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
                                    var n, t, r, o;
                                    return !!(null != e && e.id && null != e && null !== (n = e.vendor) && void 0 !== n && n.name && null != e && null !== (t = e.vendor) && void 0 !== t && t.identifier && Array.isArray(null == e || null === (r = e.vendor) || void 0 === r ? void 0 : r.products) && (null == e || null === (o = e.vendor) || void 0 === o ? void 0 : o.products.every(function(e) {
                                        var n;
                                        return "number" == typeof(null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && (null == e || null === (n = e.photo) || void 0 === n ? void 0 : n.small)
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
                    var n = r.c[e.ui],
                        t = r.w[n];
                    return t && void 0 !== t ? {
                        items: e,
                        name: e.ui,
                        component: t
                    } : null
                },
                a = function(e, n) {
                    for (var t = [], r = e.length, o = 0; o < r; o += 1) {
                        var a = e[o];
                        if (n ? n(a) : l(a)) {
                            var u = i(a);
                            u && t.push(u)
                        }
                    }
                    return t
                }
        },
        26491: function(e, n, t) {
            "use strict";
            var r = t(32930),
                o = t(43828),
                l = t(5164),
                i = t(27434),
                a = (0, l.isClientSide)(),
                u = {
                    once: !0,
                    capture: !0,
                    passive: !0
                },
                s = function(e) {
                    return function(n) {
                        var t = n.wrapperProps,
                            o = _object_without_properties(n, ["wrapperProps"]);
                        return (0, r.jsx)("section", _object_spread_props(_object_spread({
                            "data-hydration-on-demand": !0
                        }, t), {
                            children: (0, r.jsx)(e, _object_spread({}, o))
                        }))
                    }
                },
                c = function(e) {
                    var n = e.on,
                        t = void 0 === n ? [] : n,
                        l = e.onBefore,
                        a = e.disableFallback,
                        s = void 0 !== a && a,
                        c = e.whenInputPending,
                        d = void 0 !== c && c,
                        p = e.isInputPendingFallbackValue,
                        _ = void 0 === p || p;
                    return function(e) {
                        var n = function(n) {
                            var a = n.wrapperProps,
                                c = n.forceHydration,
                                p = void 0 !== c && c,
                                v = n.isServerRendered,
                                m = void 0 === v || v,
                                f = _object_without_properties(n, ["wrapperProps", "forceHydration", "isServerRendered"]),
                                b = (0, i.useRef)(null),
                                h = (0, i.useRef)([]),
                                y = (0, o.useRouter)(),
                                k = function() {
                                    var e = d && ! function() {
                                        var e, n, t, r = null === (t = navigator) || void 0 === t || null === (n = t.scheduling) || void 0 === n || null === (e = n.isInputPending) || void 0 === e ? void 0 : e.call(n);
                                        return null != r ? r : _
                                    }();
                                    return (e || p || !m) && !l
                                },
                                g = _sliced_to_array((0, i.useState)(function() {
                                    return k()
                                }), 2),
                                z = g[0],
                                w = g[1],
                                x = _sliced_to_array((0, i.useState)(!0), 2),
                                j = x[0],
                                P = x[1],
                                N = function() {
                                    h.current.forEach(function(e) {
                                        return e()
                                    }), h.current = []
                                },
                                O = function() {
                                    return _async_to_generator(function() {
                                        var e, n = arguments;
                                        return _ts_generator(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return e = !(n.length > 0) || void 0 === n[0] || n[0], N(), z ? [3, 3] : l ? [4, l()] : [3, 2];
                                                case 1:
                                                    t.sent(), t.label = 2;
                                                case 2:
                                                    w(!0), t.label = 3;
                                                case 3:
                                                    return P(e), [2]
                                            }
                                        })
                                    }).apply(this, arguments)
                                },
                                C = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3;
                                    if (!(e <= 0)) {
                                        var n = setTimeout(function() {
                                            return O(!1)
                                        }, e);
                                        h.current.push(function() {
                                            return clearTimeout(n)
                                        })
                                    }
                                },
                                G = function(e, n) {
                                    switch (e) {
                                        case "delay":
                                            C(n);
                                            break;
                                        case "visible":
                                            ! function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Function.prototype;
                                                if ("IntersectionObserver" in window) {
                                                    var n = e(),
                                                        t = new IntersectionObserver(function(e) {
                                                            var n = _sliced_to_array(e, 1)[0];
                                                            n.isIntersecting && n.intersectionRatio > 0 && O(!1)
                                                        }, n);
                                                    h.current.push(function() {
                                                        t && t.disconnect()
                                                    }), t.observe(b.current)
                                                } else O(!1)
                                            }(n);
                                            break;
                                        case "idle":
                                            ! function() {
                                                if ("requestIdleCallback" in window) {
                                                    var e = requestIdleCallback(function() {
                                                        return requestAnimationFrame(function() {
                                                            return O(!1)
                                                        })
                                                    }, {
                                                        timeout: 500
                                                    });
                                                    "cancelIdleCallback" in window && h.current.push(function() {
                                                        cancelIdleCallback(e)
                                                    })
                                                } else C()
                                            }();
                                            break;
                                        default:
                                            ! function(e) {
                                                var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                                                    return b.current
                                                })();
                                                n.addEventListener(e, function() {
                                                    return O(!1)
                                                }, u), h.current.push(function() {
                                                    n && n.removeEventListener(e, function() {
                                                        return O(!1)
                                                    }, u)
                                                })
                                            }(e, n)
                                    }
                                };
                            return (0, i.useLayoutEffect)(function() {
                                z || (!p && m && (!!b.current.dataset.hydrationOnDemand || s) || O())
                            }, [p, m]), (0, i.useEffect)(function() {
                                return t.forEach(function(e) {
                                        return Array.isArray(e) ? G.apply(void 0, _to_consumable_array(e)) : G(e)
                                    }),
                                    function() {
                                        return N()
                                    }
                            }, [y.asPath]), (0, i.useEffect)(function() {
                                P(!0)
                            }, [y.asPath]), z ? (0, r.jsx)("section", _object_spread_props(_object_spread({
                                ref: b
                            }, a), {
                                children: (0, r.jsx)(e, _object_spread_props(_object_spread({}, f), {
                                    isQueuedEvent: j
                                }))
                            })) : (0, r.jsx)("section", _object_spread({
                                ref: b,
                                dangerouslySetInnerHTML: {
                                    __html: ""
                                },
                                suppressHydrationWarning: !0
                            }, a))
                        };
                        return n.displayName = "withHydrationOnDemand(".concat(function(e) {
                            return e.displayName || e.name || "Component"
                        }(e), ")"), n
                    }
                };
            n.Z = function(e) {
                return a ? c(e) : s
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
                "horizontal-product-timely-skeleton__item": "_6eyvhW"
            }
        }
    }
]);