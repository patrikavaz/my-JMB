function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
    return a
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _define_property(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e
}

function _iterable_to_array_limit(e, r) {
    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != t) {
        var a, n, s = [],
            o = !0,
            i = !1;
        try {
            for (t = t.call(e); !(o = (a = t.next()).done) && (s.push(a.value), !r || s.length !== r); o = !0);
        } catch (e) {
            i = !0, n = e
        } finally {
            try {
                o || null == t.return || t.return()
            } finally {
                if (i) throw n
            }
        }
        return s
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _object_spread(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), a.forEach(function(r) {
            _define_property(e, r, t[r])
        })
    }
    return e
}

function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        r && (a = a.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), t.push.apply(t, a)
    }
    return t
}

function _object_spread_props(e, r) {
    return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    }), e
}

function _sliced_to_array(e, r) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, r) || _unsupported_iterable_to_array(e, r) || _non_iterable_rest()
}

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _array_like_to_array(e, r) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7314], {
        58507: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return k
                }
            });
            var a = t(32930),
                n = t(40877),
                s = t(41889),
                o = t.n(s),
                i = t(36350),
                l = t(88107),
                c = t(60802),
                u = t(27434),
                d = t(28030),
                _ = t(2389),
                h = t.n(_),
                f = t(2134),
                m = t.n(f),
                b = t(81592),
                p = t.n(b),
                y = t(45835),
                v = t(89504),
                x = h()(function() {
                    return Promise.all([t.e(973), t.e(246), t.e(5382), t.e(337), t.e(4691), t.e(7290)]).then(t.bind(t, 64691))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [64691]
                        }
                    },
                    ssr: !1
                }),
                j = h()(function() {
                    return t.e(8022).then(t.bind(t, 78022))
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
                    r = _sliced_to_array((0, u.useState)(null), 2),
                    t = r[0],
                    s = r[1],
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
                            className: (0, n.Z)("bi-image-search"),
                            onClick: function() {
                                if (e)
                                    if (window.WebviewInterfaceVersion === v.gO.PARTIAL_WEBVIEW) window.location.href = "basalam://image_search";
                                    else {
                                        var r, t = (0, v.Cw)();
                                        null === (r = t.openLink) || void 0 === r || r.call(t, "".concat(h.baseUrl, "/s/image?client=app&screen.type=native"))
                                    }
                                else d()
                            }
                        })
                    }), l && (0, a.jsx)(j, {
                        show: !0,
                        onClose: _,
                        onSelectFile: f
                    }), t && (0, a.jsx)(x, {
                        file: t,
                        onClose: b
                    })]
                })
            }
            var w = {
                src: "https://basalam.com/_next/static/media/header-logotype.5b1447ff.svg"
            };

            function k(e) {
                var r, s = e.className,
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
                        t.e(9e3).then(t.bind(t, 99e3)), Promise.all([t.e(973), t.e(5625), t.e(5349)]).then(t.bind(t, 15625))
                    })
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.Z, {
                        show: b,
                        onClose: x
                    }), (0, a.jsxs)("div", {
                        className: (0, n.Z)(o()["mobile-search-field__search"], s),
                        children: [(0, a.jsxs)("button", {
                            className: o()["mobile-search-field__search-input"],
                            onClick: v,
                            children: [(0, a.jsx)("i", {
                                className: (0, n.Z)("bi-search", o()["mobile-search-field__search-input-icon"])
                            }), (null === (r = _.query) || void 0 === r ? void 0 : r.q) ? (0, a.jsx)("span", {
                                className: o()["mobile-search-field__search-input-text"],
                                children: _.query.q
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("span", {
                                    className: o()["mobile-search-field__search-input-placeholder-text"],
                                    children: "جست‌وجو در"
                                }), (0, a.jsx)("img", {
                                    className: o()["mobile-search-field__search-input-placeholder-logo"],
                                    src: w.src,
                                    alt: "باسلام"
                                })]
                            })]
                        }), y && (0, a.jsx)(g, {})]
                    })]
                })
            }
        },
        37314: function(e, r, t) {
            "use strict";
            t.r(r);
            var a = t(32930),
                n = t(40877),
                s = t(50874),
                o = t.n(s),
                i = t(53175),
                l = t.n(i),
                c = t(81433),
                u = t.n(c),
                d = t(61033),
                _ = t(45835),
                h = t(88107),
                f = t(29723),
                m = t(58507),
                b = t(27434),
                p = t(9775);

            function y(e) {
                var r = e.title,
                    t = e.onBack,
                    s = e.actions,
                    o = e.className,
                    i = e.slotOuter,
                    c = e.slotAppend,
                    y = e.slotPrepend,
                    v = e.isShowSearch,
                    x = e.removeBorder,
                    j = (0, h.Z)(),
                    g = (0, _.b)(),
                    w = g.isWebview,
                    k = g.ua,
                    C = (0, f.Kp)(["isIosApp"]).isIosApp,
                    N = (0, b.useRef)(),
                    O = _sliced_to_array((0, b.useState)(58), 2),
                    S = O[0],
                    T = O[1],
                    P = (0, b.useMemo)(function() {
                        return !!t || C && !p.w.includes(j.pathname)
                    }, [j.pathname, t, C]);
                return (0, b.useEffect)(function() {
                    d.Z.init(l(), w || k.isIOS ? "static" : "dynamic")
                }, [w, k]), (0, b.useEffect)(function() {
                    var e;
                    T((null === (e = N.current) || void 0 === e ? void 0 : e.offsetHeight) || 58)
                }, [N]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        id: "header-placeholder",
                        style: {
                            height: "".concat(S, "px")
                        },
                        className: l()["header-placeholder"]
                    }), (0, a.jsxs)("header", {
                        className: (0, n.Z)(l().header, _define_property({}, l()["header--not-bordered"], x)),
                        id: "header",
                        ref: N,
                        children: [(0, a.jsxs)("div", {
                            className: (0, n.Z)(l()["header-body"], o),
                            children: [y, P && (0, a.jsx)("button", {
                                className: l()["header-body__back"],
                                onClick: function() {
                                    t ? t() : j.back()
                                },
                                "aria-label": "برگشت",
                                children: (0, a.jsx)("i", {
                                    className: "bi-right"
                                })
                            }), r && (0, a.jsx)("h2", {
                                className: l()["header-body__title"],
                                children: r
                            }), v && (0, a.jsx)(m.Z, {}), s && (0, a.jsx)(u(), {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                className: l()["header-body__actions"],
                                children: null == s ? void 0 : s.map(function(e, r) {
                                    return (0, a.jsx)("button", _object_spread_props(_object_spread({
                                        className: l()["header-body__actions-btn"],
                                        onClick: e.onClick,
                                        "aria-label": e.label || "عملیات"
                                    }, s.attrs || {}), {
                                        children: (0, a.jsx)("i", {
                                            className: (0, n.Z)(e.icon, e.className),
                                            "data-badge": e.data
                                        })
                                    }), r)
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
            }, r.default = (0, b.memo)(y)
        },
        28030: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return C
                }
            });
            var a = t(32930),
                n = t(40877),
                s = t(2389),
                o = t.n(s),
                i = t(19611),
                l = t.n(i),
                c = t(36350),
                u = t(88107),
                d = t(29723),
                _ = t(43114),
                h = t(60802),
                f = t(56855),
                m = t.n(f),
                b = t(92034),
                p = t.n(b),
                y = t(34087),
                v = t.n(y),
                x = t(55947),
                j = t(27434),
                g = o()(function() {
                    return t.e(9e3).then(t.bind(t, 99e3))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [99e3]
                        }
                    },
                    ssr: !1
                }),
                w = o()(function() {
                    return Promise.all([t.e(973), t.e(5625), t.e(5349)]).then(t.bind(t, 15625))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [15625]
                        }
                    },
                    ssr: !1
                });

            function k(e) {
                var r = e.show,
                    t = e.onClose,
                    s = (0, u.Z)(),
                    o = (0, x.N)(),
                    i = o.getSearchTypeByKey,
                    f = o.getSearchTypeByPath,
                    b = (0, j.useRef)(null),
                    y = (0, j.useRef)(""),
                    k = (0, j.useRef)(null),
                    C = (0, j.useRef)(null),
                    N = _sliced_to_array((0, j.useState)(""), 2),
                    O = N[0],
                    S = N[1],
                    T = _sliced_to_array((0, j.useState)(!0), 2),
                    P = T[0],
                    Z = T[1],
                    E = _sliced_to_array((0, j.useState)(!1), 2),
                    A = E[0],
                    F = E[1],
                    M = _sliced_to_array((0, j.useState)(null), 2),
                    I = M[0],
                    q = M[1],
                    R = (0, c.useEmitter)(),
                    K = R.subEvent,
                    V = R.offEvent,
                    W = (0, h.l)().runGBTest,
                    B = (0, d.Kp)(["isIosApp"]).isIosApp,
                    D = (0, j.useCallback)(function(e) {
                        null == e || e.preventDefault();
                        var r = b.current.value,
                            a = i(k.current);
                        F(!1), setTimeout(function() {
                            null == t || t()
                        }, 250), setTimeout(function() {
                            s.push({
                                query: {
                                    q: r
                                },
                                pathname: a.pathname
                            })
                        }, 500)
                    }, [t]),
                    G = (0, j.useCallback)(function(e) {
                        var r = e.target.value;
                        y.current = r, clearTimeout(C.current), C.current = setTimeout(function() {
                            (0, j.startTransition)(function() {
                                S(r)
                            })
                        }, 250)
                    }, []),
                    z = (0, j.useCallback)(function(e) {
                        k.current = e, y.current.length > 0 ? setTimeout(function() {
                            D()
                        }, 0) : setTimeout(function() {
                            F(!1)
                        }, 0)
                    }, [D]),
                    L = (0, j.useCallback)(function() {
                        setTimeout(function() {
                            F(!1)
                        }, 0)
                    }, []),
                    Q = (0, j.useCallback)(function() {
                        setTimeout(function() {
                            F(!0)
                        }, 0)
                    }, []),
                    U = (0, j.useCallback)(function(e) {
                        if (b.current = e, null !== e) {
                            var r, t = f(s.pathname);
                            void 0 !== t && (k.current = t.key);
                            var a = (null === (r = s.query) || void 0 === r ? void 0 : r.q) || "";
                            e.value !== a && (e.value = a, y.current = a, setTimeout(function() {
                                (0, j.startTransition)(function() {
                                    S(a)
                                })
                            }, 0))
                        }
                    }, [s.asPath]),
                    Y = (0, j.useCallback)(function() {
                        setTimeout(function() {
                            var e;
                            null === (e = b.current) || void 0 === e || e.select()
                        }, 300)
                    }, []);
                (0, j.useEffect)(function() {
                    if (!r) return Z(!1), void setTimeout(function() {
                        var e, r;
                        return null === (e = (r = window).startMainCarouselAutoplay) || void 0 === e ? void 0 : e.call(r)
                    }, 0);
                    setTimeout(function() {
                        var e, r;
                        return null === (e = (r = window).stopMainCarouselAutoplay) || void 0 === e ? void 0 : e.call(r)
                    }, 0), setTimeout(function() {
                        (0, j.startTransition)(function() {
                            Z(!0)
                        })
                    }, 1e3);
                    var e = 0;
                    return function r() {
                            (!b.current || document.activeElement !== b.current) && (e += 1, b.current && document.activeElement !== b.current ? (b.current.focus(), document.activeElement !== b.current && e < 20 && setTimeout(r, 100)) : e < 20 && setTimeout(r, 100))
                        }(),
                        function() {
                            e = 20, setTimeout(function() {
                                return Z(!1)
                            }, 1e3)
                        }
                }, [r]), (0, j.useEffect)(function() {
                    var e;
                    if (r && !I) {
                        var t = null === (e = W("test_autocomplete_service")) || void 0 === e ? void 0 : e.value;
                        q(t)
                    }
                }, [I, r, W, q]), (0, j.useEffect)(function() {
                    return K("search-focus", Y, {
                            autoOff: !1
                        }),
                        function() {
                            V("search-focus", Y)
                        }
                }, [r]);
                var X = i(k.current),
                    H = (null == X ? void 0 : X.name) || "انتخاب";
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: l()["search-modal__header"],
                        children: [(0, a.jsx)("button", {
                            "aria-label": "برگشت",
                            className: l()["search-modal__header-back"],
                            onClick: t,
                            children: (0, a.jsx)("i", {
                                className: "bi-right"
                            })
                        }), (0, a.jsxs)("div", {
                            className: l()["search-modal__header-box"],
                            children: [(0, a.jsx)("form", {
                                onSubmit: D,
                                className: l()["search-modal__header-box-form"],
                                children: (0, a.jsx)("input", {
                                    autoFocus: !0,
                                    ref: U,
                                    autoComplete: "off",
                                    className: (0, n.Z)(l()["search-modal__header-box-input"], _define_property({}, l()["search-modal__header-box-input--ios"], B)),
                                    onChange: G
                                })
                            }), (0, a.jsxs)("button", {
                                "aria-label": "انتخاب نوع جست‌وجو",
                                className: l()["search-modal__header-box-select"],
                                onClick: Q,
                                children: [(0, a.jsx)("i", {
                                    className: (0, n.Z)("bi-angle-down", l()["search-modal__header-box-select-icon"])
                                }), (0, a.jsx)("span", {
                                    children: H
                                })]
                            })]
                        })]
                    }), P && (0, a.jsxs)("div", {
                        className: l()["search-modal__suggestions"],
                        children: [(0, a.jsx)(w, {
                            query: O,
                            className: l()["search-modal__suggestion"],
                            searchSuggestionsVariant: I,
                            onClose: t,
                            currentSearchTypeKey: X.key
                        }), X.key !== _.dQ.vendors && (0, a.jsx)(g, {
                            className: l()["search-modal__suggestion"],
                            onClose: t
                        })]
                    }), A && (0, a.jsx)(p(), {
                        show: !0,
                        hideOtherModals: !1,
                        title: "جست‌وجو بر اساس",
                        className: "dataset-inp-SearchModalBasedOn",
                        onClose: L,
                        children: (0, a.jsx)(v().Group, {
                            value: X.key,
                            onChange: z,
                            children: _.VS.map(function(e) {
                                return (0, a.jsx)("div", {
                                    className: l()["types-modal__item"],
                                    children: (0, a.jsx)(v(), {
                                        value: e.key,
                                        label: (0, a.jsxs)("span", {
                                            className: l()["types-modal__item-label"],
                                            children: [e.name, (null == e ? void 0 : e.label) && (0, a.jsx)(m(), {
                                                label: "جدید",
                                                color: "black",
                                                size: "sm"
                                            })]
                                        })
                                    })
                                }, e.key)
                            })
                        })
                    })]
                })
            }

            function C(e) {
                var r = e.show,
                    t = e.onClose,
                    s = (0, u.Z)();
                return (0, j.useEffect)(function() {
                    t()
                }, [s.asPath]), (0, a.jsx)("div", {
                    children: (0, a.jsx)(p(), {
                        isPlain: !0,
                        show: r,
                        keepMounted: !0,
                        isFullScreen: !0,
                        bodyClass: l()["search-modal__body"],
                        className: (0, n.Z)("dataset-inp-SearchModal", l()["search-modal"]),
                        onClose: t,
                        children: (0, a.jsx)(k, {
                            show: r,
                            onClose: t
                        })
                    })
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
        53175: function(e) {
            e.exports = {
                "header-placeholder": "L_3WyI",
                "header-placeholder--fixed": "dGb8P7",
                header: "OZYAlg",
                "header--fixed": "rkuCym",
                "header--not-bordered": "_0eyWZF",
                "header-body": "c2E5Pa",
                "header--fixed-show": "j_24Y0",
                "header-body__back": "KoZ0y_",
                "header-body__title": "_2rrLwF",
                "header-body__actions": "_Ksw0z",
                "header-body__actions-btn": "k3Acm0"
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