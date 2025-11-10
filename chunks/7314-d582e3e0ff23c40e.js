function _array_like_to_array(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _define_property(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _iterable_to_array_limit(e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var a, r, s = [],
            o = !0,
            i = !1;
        try {
            for (n = n.call(e); !(o = (a = n.next()).done) && (s.push(a.value), !t || s.length !== t); o = !0);
        } catch (e) {
            i = !0, r = e
        } finally {
            try {
                o || null == n.return || n.return()
            } finally {
                if (i) throw r
            }
        }
        return s
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _object_spread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
            _define_property(e, t, n[t])
        })
    }
    return e
}

function ownKeys(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, a)
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

function _unsupported_iterable_to_array(e, t) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _array_like_to_array(e, t) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7314], {
        58507: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return w
                }
            });
            var a = n(32930),
                r = n(40877),
                s = n(41889),
                o = n.n(s),
                i = n(36350),
                l = n(88107),
                c = n(60802),
                u = n(27434),
                d = n(28030),
                _ = n(2389),
                h = n.n(_),
                f = n(2134),
                m = n.n(f),
                b = n(81592),
                p = n.n(b),
                y = n(45835),
                v = n(89504),
                x = h()(function() {
                    return Promise.all([n.e(973), n.e(246), n.e(5382), n.e(337), n.e(9161), n.e(4691), n.e(971)]).then(n.bind(n, 64691))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [64691]
                        }
                    },
                    ssr: !1
                }),
                j = h()(function() {
                    return n.e(8022).then(n.bind(n, 78022))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [78022]
                        }
                    },
                    ssr: !1
                });

            function g() {
                var e = (0, y.b)().isWebview,
                    t = _sliced_to_array((0, u.useState)(null), 2),
                    n = t[0],
                    s = t[1],
                    o = _sliced_to_array((0, i.useDisclosure)(), 2),
                    l = o[0],
                    c = o[1],
                    d = c.open,
                    _ = c.close,
                    h = m()().publicRuntimeConfig,
                    f = (0, u.useCallback)(function(e) {
                        _(), setTimeout(function() {
                            return s(e)
                        }, 350)
                    }, [_]),
                    b = (0, u.useCallback)(function() {
                        s(null)
                    }, []);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: p()["search__header-icon"],
                        children: (0, a.jsx)("i", {
                            className: (0, r.Z)("bi-image-search"),
                            onClick: function() {
                                if (e)
                                    if (window.WebviewInterfaceVersion === v.gO.PARTIAL_WEBVIEW) window.location.href = "basalam://image_search";
                                    else {
                                        var t, n = (0, v.Cw)();
                                        null === (t = n.openLink) || void 0 === t || t.call(n, "".concat(h.baseUrl, "/s/image?client=app&screen.type=native"))
                                    }
                                else d()
                            }
                        })
                    }), l && (0, a.jsx)(j, {
                        show: !0,
                        onClose: _,
                        onSelectFile: f
                    }), n && (0, a.jsx)(x, {
                        file: n,
                        onClose: b
                    })]
                })
            }
            var k = {
                src: "https://basalam.com/_next/static/media/header-logotype.5b1447ff.svg"
            };

            function w(e) {
                var t, s = e.className,
                    _ = (0, l.Z)(),
                    h = (0, i.useEmitter)().subEvent,
                    f = (0, c.l)().getFeatureValue,
                    m = _sliced_to_array((0, u.useState)(!1), 2),
                    b = m[0],
                    p = m[1],
                    y = (0, u.useMemo)(function() {
                        return "yes" === f("image_search")
                    }, [f]),
                    v = (0, u.useCallback)(function() {
                        return setTimeout(function() {
                            p(!0)
                        }, 0)
                    }, []),
                    x = (0, u.useCallback)(function() {
                        return setTimeout(function() {
                            p(!1)
                        }, 0)
                    }, []);
                return h("search-focus", function() {
                    p(!0)
                }), (0, u.useEffect)(function() {
                    requestIdleCallback(function() {
                        n.e(9e3).then(n.bind(n, 99e3)), Promise.all([n.e(973), n.e(5625), n.e(268)]).then(n.bind(n, 15625))
                    })
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.Z, {
                        show: b,
                        onClose: x
                    }), (0, a.jsxs)("div", {
                        className: (0, r.Z)(o()["mobile-search-field__search"], s),
                        children: [(0, a.jsxs)("button", {
                            className: o()["mobile-search-field__search-input"],
                            onClick: v,
                            children: [(0, a.jsx)("i", {
                                className: (0, r.Z)("bi-search", o()["mobile-search-field__search-input-icon"])
                            }), (null === (t = _.query) || void 0 === t ? void 0 : t.q) ? (0, a.jsx)("span", {
                                className: o()["mobile-search-field__search-input-text"],
                                children: _.query.q
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("span", {
                                    className: o()["mobile-search-field__search-input-placeholder-text"],
                                    children: "جست‌وجو در"
                                }), (0, a.jsx)("img", {
                                    className: o()["mobile-search-field__search-input-placeholder-logo"],
                                    src: k.src,
                                    alt: "باسلام"
                                })]
                            })]
                        }), y && (0, a.jsx)(g, {})]
                    })]
                })
            }
        },
        37314: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(32930),
                r = n(40877),
                s = n(50874),
                o = n.n(s),
                i = n(53175),
                l = n.n(i),
                c = n(81433),
                u = n.n(c),
                d = n(61033),
                _ = n(45835),
                h = n(88107),
                f = n(29723),
                m = n(58507),
                b = n(27434),
                p = n(9775);

            function y(e) {
                var t = e.title,
                    n = e.onBack,
                    s = e.actions,
                    o = e.className,
                    i = e.slotOuter,
                    c = e.slotAppend,
                    y = e.slotPrepend,
                    v = e.isShowSearch,
                    x = e.removeBorder,
                    j = (0, h.Z)(),
                    g = (0, _.b)(),
                    k = g.isWebview,
                    w = g.ua,
                    C = (0, f.Kp)(["isIosApp"]).isIosApp,
                    N = (0, b.useRef)(),
                    O = _sliced_to_array((0, b.useState)(58), 2),
                    S = O[0],
                    E = O[1],
                    T = (0, b.useMemo)(function() {
                        return !!n || C && !p.w.includes(j.pathname)
                    }, [j.pathname, n, C]);
                return (0, b.useEffect)(function() {
                    d.Z.init(l(), k || w.isIOS ? "static" : "dynamic")
                }, [k, w]), (0, b.useEffect)(function() {
                    var e;
                    E((null === (e = N.current) || void 0 === e ? void 0 : e.offsetHeight) || 58)
                }, [N]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        id: "header-placeholder",
                        style: {
                            height: "".concat(S, "px")
                        },
                        className: l()["header-placeholder"]
                    }), (0, a.jsxs)("header", {
                        className: (0, r.Z)(l().header, _define_property({}, l()["header--not-bordered"], x)),
                        id: "header",
                        ref: N,
                        children: [(0, a.jsxs)("div", {
                            className: (0, r.Z)(l()["header-body"], o),
                            children: [y, T && (0, a.jsx)("button", {
                                className: l()["header-body__back"],
                                onClick: function() {
                                    n ? n() : j.back()
                                },
                                "aria-label": "برگشت",
                                children: (0, a.jsx)("i", {
                                    className: "bi-right"
                                })
                            }), t && (0, a.jsx)("h2", {
                                className: l()["header-body__title"],
                                children: t
                            }), v && (0, a.jsx)(m.Z, {}), s && (0, a.jsx)(u(), {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                className: l()["header-body__actions"],
                                children: null == s ? void 0 : s.map(function(e, t) {
                                    return (0, a.jsx)("button", _object_spread_props(_object_spread({
                                        className: l()["header-body__actions-btn"],
                                        onClick: e.onClick,
                                        "aria-label": e.label || "عملیات"
                                    }, s.attrs || {}), {
                                        children: (0, a.jsx)("i", {
                                            className: (0, r.Z)(e.icon, e.className),
                                            "data-badge": e.data
                                        })
                                    }), t)
                                })
                            }), c]
                        }), i, (0, a.jsx)("div", {
                            id: "header-mobile--outer"
                        })]
                    })]
                })
            }
            y.displayName = "HeaderMobile", y.propTypes = {
                onBack: o().func,
                title: o().string,
                slotAppend: o().node,
                slotPrepend: o().node,
                isShowSearch: o().bool,
                actions: o().arrayOf(o().shape({
                    icon: o().string.isRequired,
                    onClick: o().func.isRequired
                }))
            }, t.default = (0, b.memo)(y)
        },
        28030: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return C
                }
            });
            var a = n(32930),
                r = n(40877),
                s = n(2389),
                o = n.n(s),
                i = n(19611),
                l = n.n(i),
                c = n(36350),
                u = n(88107),
                d = n(29723),
                _ = n(60802),
                h = n(56855),
                f = n.n(h),
                m = n(92034),
                b = n.n(m),
                p = n(34087),
                y = n.n(p),
                v = n(27434),
                x = o()(function() {
                    return n.e(9e3).then(n.bind(n, 99e3))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [99e3]
                        }
                    },
                    ssr: !1
                }),
                j = o()(function() {
                    return Promise.all([n.e(973), n.e(5625), n.e(268)]).then(n.bind(n, 15625))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [15625]
                        }
                    },
                    ssr: !1
                }),
                g = [{
                    default: !0,
                    pathname: "/s",
                    key: "PRODUCTS",
                    name: "محصولات"
                }, {
                    key: "VENDORS",
                    name: "غرفه‌ها",
                    pathname: "/s/vendors"
                }, {
                    key: "REELS",
                    name: "ویدئوها",
                    pathname: "/s/reels",
                    label: (0, a.jsxs)(a.Fragment, {
                        children: ["ویدئوها ", (0, a.jsx)(f(), {
                            label: "جدید",
                            color: "black",
                            size: "sm"
                        })]
                    })
                }],
                k = function(e) {
                    var t;
                    switch (e) {
                        case "PRODUCTS":
                        default:
                            t = g[0];
                            break;
                        case "VENDORS":
                            t = g[1];
                            break;
                        case "REELS":
                            t = g[2]
                    }
                    return t
                },
                w = function(e) {
                    var t = g.find(function(t) {
                        return t.pathname === e
                    });
                    return t
                };

            function C(e) {
                var t = e.show,
                    n = e.onClose,
                    s = (0, v.useRef)(null),
                    o = (0, v.useRef)(""),
                    i = (0, v.useRef)(null),
                    h = (0, u.Z)(),
                    f = _sliced_to_array((0, v.useState)(""), 2),
                    m = f[0],
                    p = f[1],
                    C = _sliced_to_array((0, v.useState)(!1), 2),
                    N = C[0],
                    O = C[1],
                    S = _sliced_to_array((0, v.useState)(null), 2),
                    E = S[0],
                    T = S[1],
                    P = (0, c.useEmitter)(),
                    Z = P.subEvent,
                    R = P.offEvent,
                    A = (0, d.Kp)(["isIosApp"]).isIosApp,
                    M = (0, _.l)().runGBTest,
                    F = (0, v.useRef)(null),
                    q = _sliced_to_array((0, v.useState)(!1), 2),
                    I = q[0],
                    D = q[1],
                    V = (0, v.useCallback)(function(e) {
                        null == e || e.preventDefault();
                        var t = s.current.value,
                            a = k(F.current);
                        D(!1), setTimeout(function() {
                            null == n || n()
                        }, 250), setTimeout(function() {
                            h.push({
                                query: {
                                    q: t
                                },
                                pathname: a.pathname
                            })
                        }, 500)
                    }, [n]),
                    W = (0, v.useCallback)(function(e) {
                        var t = e.target.value;
                        o.current = t, clearTimeout(i.current), i.current = setTimeout(function() {
                            (0, v.startTransition)(function() {
                                p(t)
                            })
                        }, 250)
                    }, []),
                    B = (0, v.useCallback)(function(e) {
                        F.current = e, o.current.length > 0 ? setTimeout(function() {
                            V()
                        }, 0) : setTimeout(function() {
                            D(!1)
                        }, 0)
                    }, [V]),
                    G = (0, v.useCallback)(function() {
                        setTimeout(function() {
                            D(!1)
                        }, 0)
                    }, []),
                    K = (0, v.useCallback)(function() {
                        setTimeout(function() {
                            D(!0)
                        }, 0)
                    }, []),
                    U = (0, v.useCallback)(function(e) {
                        if (s.current = e, null !== e) {
                            var t, n = w(h.pathname);
                            void 0 !== n && (F.current = n.key);
                            var a = (null === (t = h.query) || void 0 === t ? void 0 : t.q) || "";
                            e.value !== a && (e.value = a, o.current = a, setTimeout(function() {
                                (0, v.startTransition)(function() {
                                    p(a)
                                })
                            }, 0))
                        }
                    }, [h.asPath]),
                    z = (0, v.useCallback)(function() {
                        setTimeout(function() {
                            var e;
                            null === (e = s.current) || void 0 === e || e.select()
                        }, 300)
                    }, []);
                (0, v.useEffect)(function() {
                    n()
                }, [h.asPath]), (0, v.useEffect)(function() {
                    if (!t) return O(!1), void setTimeout(function() {
                        var e, t;
                        return null === (e = (t = window).startMainCarouselAutoplay) || void 0 === e ? void 0 : e.call(t)
                    }, 0);
                    setTimeout(function() {
                        var e, t;
                        return null === (e = (t = window).stopMainCarouselAutoplay) || void 0 === e ? void 0 : e.call(t)
                    }, 0), setTimeout(function() {
                        (0, v.startTransition)(function() {
                            O(!0)
                        })
                    }, 1e3);
                    var e = 0;
                    return function t() {
                            (!s.current || document.activeElement !== s.current) && (e += 1, s.current && document.activeElement !== s.current ? (s.current.focus(), document.activeElement !== s.current && e < 20 && setTimeout(t, 100)) : e < 20 && setTimeout(t, 100))
                        }(),
                        function() {
                            e = 20, setTimeout(function() {
                                return O(!1)
                            }, 1e3)
                        }
                }, [t]), (0, v.useEffect)(function() {
                    var e;
                    if (t && !E) {
                        var n = null === (e = M("test_autocomplete_service")) || void 0 === e ? void 0 : e.value;
                        T(n)
                    }
                }, [E, t, M]), (0, v.useEffect)(function() {
                    return Z("search-focus", z, {
                            autoOff: !1
                        }),
                        function() {
                            R("search-focus", z)
                        }
                }, [t]);
                var L = k(F.current),
                    Q = (null == L ? void 0 : L.name) || "انتخاب";
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsxs)(b(), {
                        className: (0, r.Z)("dataset-inp-SearchModal", l()["search-modal"]),
                        isPlain: !0,
                        show: t,
                        isFullScreen: !0,
                        keepMounted: !0,
                        onClose: n,
                        bodyClass: l()["search-modal__body"],
                        children: [(0, a.jsxs)("div", {
                            className: l()["search-modal__header"],
                            children: [(0, a.jsx)("button", {
                                className: l()["search-modal__header-back"],
                                onClick: n,
                                "aria-label": "برگشت",
                                children: (0, a.jsx)("i", {
                                    className: "bi-right"
                                })
                            }), (0, a.jsxs)("div", {
                                className: l()["search-modal__header-box"],
                                children: [(0, a.jsx)("form", {
                                    onSubmit: V,
                                    className: l()["search-modal__header-box-form"],
                                    children: (0, a.jsx)("input", {
                                        ref: U,
                                        autoFocus: !0,
                                        autoComplete: "off",
                                        className: (0, r.Z)(l()["search-modal__header-box-input"], _define_property({}, l()["search-modal__header-box-input--ios"], A)),
                                        onChange: W
                                    })
                                }), (0, a.jsxs)("button", {
                                    className: l()["search-modal__header-box-select"],
                                    onClick: K,
                                    "aria-label": "انتخاب نوع جست‌وجو",
                                    children: [(0, a.jsx)("i", {
                                        className: (0, r.Z)("bi-angle-down", l()["search-modal__header-box-select-icon"])
                                    }), (0, a.jsx)("span", {
                                        children: Q
                                    })]
                                })]
                            })]
                        }), N && (0, a.jsxs)("div", {
                            className: l()["search-modal__suggestions"],
                            children: [(0, a.jsx)(j, {
                                query: m,
                                className: l()["search-modal__suggestion"],
                                onClose: n,
                                searchSuggestionsVariant: E
                            }), (0, a.jsx)(x, {
                                className: l()["search-modal__suggestion"],
                                onClose: n
                            })]
                        })]
                    }), I && (0, a.jsx)(b(), {
                        show: !0,
                        className: "dataset-inp-SearchModalBasedOn",
                        hideOtherModals: !1,
                        onClose: G,
                        title: "جست‌وجو بر اساس",
                        children: (0, a.jsx)(y().Group, {
                            value: L.key,
                            onChange: B,
                            children: g.map(function(e) {
                                return (0, a.jsx)("div", {
                                    className: l()["types-modal__item"],
                                    children: (0, a.jsx)(y(), {
                                        value: e.key,
                                        label: (0, a.jsx)("span", {
                                            className: l()["types-modal__item-label"],
                                            children: e.label || e.name
                                        })
                                    })
                                }, e.key)
                            })
                        })
                    })]
                })
            }
        },
        41889: function(e) {
            e.exports = {
                "mobile-search-field__search": "cyRCTO",
                "mobile-search-field__search-input": "uPMvFo",
                "mobile-search-field__search-input-icon": "rwxYO_",
                "mobile-search-field__search-input-text": "s4_gbq",
                "mobile-search-field__search-input-placeholder-text": "YsZ3eJ",
                "mobile-search-field__search-input-placeholder-logo": "_6_rFnb"
            }
        },
        81592: function(e) {
            e.exports = {
                "search__header-icon": "M6ySxi"
            }
        },
        19611: function(e) {
            e.exports = {
                "search-modal": "lBwVQO",
                "search-modal__body": "nKFZFN",
                "search-modal__header": "txzU6X",
                "search-modal__header-back": "ZRlV_g",
                "search-modal__header-box": "vl1Z_W",
                "search-modal__header-box-form": "zMxW2M",
                "search-modal__header-box-input": "nXQAZz",
                "search-modal__header-box-input--ios": "pRjjXO",
                "search-modal__header-box-select": "P9xnVn",
                "search-modal__header-box-select-icon": "MVpEWR",
                "search-modal__suggestions": "MJj0Uk",
                "types-modal__item": "h8mKAP",
                "types-modal__item-label": "jQFtif",
                "types-modal__item-label-icon": "eCDVw8"
            }
        }
    }
]);