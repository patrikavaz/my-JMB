function _array_like_to_array(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
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
        var r, a, o = [],
            i = !0,
            l = !1;
        try {
            for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
        } catch (e) {
            l = !0, a = e
        } finally {
            try {
                i || null == n.return || n.return()
            } finally {
                if (l) throw a
            }
        }
        return o
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
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
    [7396], {
        70508: function(e, t, n) {
            "use strict";
            n.d(t, {
                EP: function() {
                    return o
                },
                J7: function() {
                    return i
                },
                zR: function() {
                    return l
                }
            });
            var r = n(5164),
                a = n(79614);

            function o(e) {
                return a.DZ.post("/web/v1/conversation/users/call/phone", (0, r.snakize)(e))
            }

            function i() {
                return a.DZ.get("/web/v1/conversation/exit-platform/user/warning")
            }

            function l(e) {
                return a.DZ.post("/web/v1/conversation/exit-platform/user/acknowledge", (0, r.snakize)(e))
            }
        },
        39275: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return o
                },
                c: function() {
                    return i
                }
            });
            var r = n(17902),
                a = n(70508),
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, r.aM)(["chat", "approval"], a.J7, _object_spread({
                        select: function(e) {
                            return "openapiRawData" in e ? e.openapi_raw_data : e
                        }
                    }, e))
                },
                i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, r.Db)(a.zR, e)
                }
        },
        41804: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                STORAGE_KEY: function() {
                    return m
                },
                default: function() {
                    return g
                }
            });
            var r = n(32930),
                a = n(11445),
                o = n.n(a),
                i = n(27434),
                l = n(5164),
                s = n(39275),
                u = n(92034),
                c = n.n(u),
                _ = n(65074),
                d = n.n(_),
                p = n(59318),
                f = n.n(p),
                b = n(85434),
                h = n.n(b),
                v = n(81174),
                y = n.n(v),
                m = "silentApprovalChat";

            function g(e) {
                var t = e.show,
                    n = e.data,
                    a = e.onClose,
                    u = _sliced_to_array((0, i.useState)(!1), 2),
                    _ = u[0],
                    p = u[1],
                    b = _sliced_to_array((0, i.useState)(!1), 2),
                    v = b[0],
                    g = b[1],
                    j = _sliced_to_array((0, i.useState)(""), 2),
                    w = j[0],
                    x = j[1],
                    k = (0, s.c)().mutate,
                    C = (0, i.useCallback)(function() {
                        setTimeout(function() {
                            return null == a ? void 0 : a()
                        }, 350)
                    }, [a]),
                    S = (0, i.useCallback)(function(e) {
                        k({
                            description: w,
                            acknowledged: e,
                            reason: n.reason || ""
                        }, {
                            onSettled: function() {
                                C()
                            },
                            onSuccess: function() {
                                l.bsLocalStorage.setItem(m, !0, 864e5)
                            }
                        }), C()
                    }, [C, n.reason, w, k]),
                    O = (0, i.useCallback)(function() {
                        v ? S(!1) : g(!0)
                    }, [v, S]),
                    E = (0, i.useCallback)(function() {
                        v ? g(!1) : S(!0)
                    }, [v, S]),
                    I = (0, i.useCallback)(function(e) {
                        x(e.target.value)
                    }, []);
                return (0, r.jsx)(c(), {
                    show: t,
                    onClose: C,
                    size: "sm",
                    showClose: !1,
                    title: n.title,
                    noClose: !0,
                    bodyClass: o().approval__body,
                    footerComponent: (0, r.jsxs)("div", {
                        className: o().approval__footer,
                        children: [(0, r.jsx)(d(), {
                            label: v ? "بازگشت" : n.buttonText,
                            variant: "fill",
                            fullWidth: !0,
                            disabled: !v && !_,
                            onClick: E
                        }), (0, r.jsx)(d(), {
                            label: v ? "ارسال" : "مشکلی پیش آمده!",
                            variant: "outline",
                            fullWidth: !0,
                            onClick: O,
                            className: o().approval__footer__button
                        })]
                    }),
                    children: (0, r.jsxs)("div", {
                        className: o().approval,
                        children: [(0, r.jsx)("img", {
                            src: "https://statics.basalam.com/public-15/admin/67gZL/12-25/i0krIjmOlXD6yKM8OjAU98gy69Y8PbMj0KPrQqxRDT843XOy1S.SVG",
                            alt: "ban",
                            className: o().approval__img
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("div", {
                                className: o().approval__title,
                                children: (0, r.jsx)(h(), {
                                    source: n.body
                                })
                            }), !v && (0, r.jsx)("div", {
                                className: o().approval__checkbox,
                                children: (0, r.jsx)(f(), {
                                    size: "sm",
                                    label: n.checkboxText,
                                    checked: _,
                                    onChange: function(e) {
                                        p(e.target.checked)
                                    }
                                })
                            }), v && (0, r.jsx)(y(), {
                                isMultiline: !0,
                                value: w,
                                placeholder: "اینجا بنویسید",
                                type: "textarea",
                                rows: 8,
                                wrapperClassName: o().approval__input,
                                onChange: I
                            })]
                        })]
                    })
                })
            }
        },
        27396: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            });
            var r = n(32930),
                a = n(27434),
                o = n(92369),
                i = n(18925),
                l = n(2389),
                s = n.n(l),
                u = n(79373),
                c = n(36839),
                _ = s()(function() {
                    return Promise.all([n.e(9262), n.e(6999), n.e(3608), n.e(9145)]).then(n.t.bind(n, 44217, 23))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [44217]
                        }
                    },
                    ssr: !1
                });

            function d() {
                var e = (0, c.dalanMapGetters)(["chatModalData"]).chatModalData;
                return (0, r.jsx)(u.Z, {
                    children: e && (0, r.jsx)(_, {})
                })
            }
            var p = n(88592),
                f = n(5164),
                b = n(41804),
                h = n(94002),
                v = n(58271),
                y = n(39275),
                m = s()(function() {
                    return Promise.resolve().then(n.bind(n, 41804))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [41804]
                        }
                    },
                    ssr: !1
                }),
                g = (0, a.memo)(function() {
                    var e = _sliced_to_array((0, a.useState)(!0), 2),
                        t = e[0],
                        n = e[1],
                        o = (0, p.M_)(["isLoggedIn"]).isLoggedIn,
                        i = (0, a.useCallback)(function() {
                            return n(!1)
                        }, []),
                        l = (0, y.H)({
                            enabled: o && !f.bsLocalStorage.getItem(b.STORAGE_KEY)
                        }).data;
                    return (0, a.useEffect)(function() {
                        l && n(!0)
                    }, [l]), (0, r.jsx)(u.Z, {
                        children: (0, r.jsx)(h.ErrorBoundary, {
                            fallback: (0, r.jsx)("div", {}),
                            onError: v.wJ,
                            children: l && (0, r.jsx)(m, {
                                show: t,
                                data: l,
                                onClose: i
                            })
                        })
                    })
                }),
                j = n(88107),
                w = n(57163),
                x = n(60802);

            function k(e) {
                var t, n = e.children,
                    l = (0, j.Z)(),
                    s = (0, i.t)().quickAddToCart,
                    u = (0, x.l)(),
                    c = u.runGBTest,
                    _ = u.getFeatureValue,
                    b = (0, p.M_)(["currentUser", "isLoggedIn"]),
                    h = b.currentUser,
                    v = b.isLoggedIn,
                    y = (0, a.useMemo)(function() {
                        return (0, f.camelize)(_("chat_config"))
                    }, [_]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(g, {}), (0, r.jsxs)(w.O, {
                        target: "lib",
                        user: h,
                        isLoggedIn: v,
                        featureFlags: y,
                        pagesBasePath: "/account/chats",
                        options: {
                            currentUserFetch: !1,
                            featureFlagFetch: !1,
                            toastOptions: {
                                duration: 4e3,
                                position: "top-right",
                                onOpen: function(e) {
                                    var t = e.identifier;
                                    l.push("/account/chats/".concat(t))
                                },
                                enabled: (0, f.isClientSide)() && "Notification" in window && "granted" !== Notification.permission && !((null == y || null === (t = y.features) || void 0 === t ? void 0 : t.toastExcludedRoutes) || []).some(function(e) {
                                    return window.location.pathname.includes(e)
                                })
                            }
                        },
                        injection: {
                            runGBTest: c,
                            publishEvent: o.publishEvent,
                            routerPush: l.push,
                            addToCart: s
                        },
                        children: [n, (0, r.jsx)(d, {})]
                    })]
                })
            }
        },
        11445: function(e) {
            e.exports = {
                approval: "IPw9XV",
                approval__body: "sqTpn2",
                approval__checkbox: "_3CkRIc",
                approval__input: "sxLTyb",
                approval__title: "_2T61na",
                approval__img: "gNyNBO",
                approval__footer: "uzDheL",
                approval__footer__button: "Imw6Z5"
            }
        }
    }
]);