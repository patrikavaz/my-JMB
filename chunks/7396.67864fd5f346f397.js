function _array_like_to_array(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _define_property(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function _iterable_to_array_limit(e, t) {
    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != r) {
        var n, a, o = [],
            i = !0,
            l = !1;
        try {
            for (r = r.call(e); !(i = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
        } catch (e) {
            l = !0, a = e
        } finally {
            try {
                i || null == r.return || r.return()
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
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            _define_property(e, t, r[t])
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
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _array_like_to_array(e, t) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7396], {
        70508: function(e, t, r) {
            "use strict";
            r.d(t, {
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
            var n = r(5164),
                a = r(79614);

            function o(e) {
                return a.DZ.post("/web/v1/conversation/users/call/phone", (0, n.snakize)(e))
            }

            function i() {
                return a.DZ.get("/web/v1/conversation/exit-platform/user/warning")
            }

            function l(e) {
                return a.DZ.post("/web/v1/conversation/exit-platform/user/acknowledge", (0, n.snakize)(e))
            }
        },
        39275: function(e, t, r) {
            "use strict";
            r.d(t, {
                H: function() {
                    return o
                },
                c: function() {
                    return i
                }
            });
            var n = r(67938),
                a = r(70508),
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, n.aM)(["chat", "approval"], a.J7, _object_spread({
                        select: function(e) {
                            return "openapiRawData" in e ? e.openapi_raw_data : e
                        }
                    }, e))
                },
                i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, n.Db)(a.zR, e)
                }
        },
        41804: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                STORAGE_KEY: function() {
                    return m
                },
                default: function() {
                    return g
                }
            });
            var n = r(32930),
                a = r(11445),
                o = r.n(a),
                i = r(27434),
                l = r(5164),
                s = r(39275),
                u = r(92034),
                c = r.n(u),
                _ = r(65074),
                d = r.n(_),
                p = r(59318),
                f = r.n(p),
                b = r(85434),
                h = r.n(b),
                v = r(81174),
                y = r.n(v),
                m = "silentApprovalChat";

            function g(e) {
                var t = e.show,
                    r = e.data,
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
                            reason: r.reason || ""
                        }, {
                            onSettled: function() {
                                C()
                            },
                            onSuccess: function() {
                                l.bsLocalStorage.setItem(m, !0, 864e5)
                            }
                        }), C()
                    }, [C, r.reason, w, k]),
                    O = (0, i.useCallback)(function() {
                        v ? S(!1) : g(!0)
                    }, [v, S]),
                    E = (0, i.useCallback)(function() {
                        v ? g(!1) : S(!0)
                    }, [v, S]),
                    I = (0, i.useCallback)(function(e) {
                        x(e.target.value)
                    }, []);
                return (0, n.jsx)(c(), {
                    show: t,
                    onClose: C,
                    size: "sm",
                    showClose: !1,
                    title: r.title,
                    noClose: !0,
                    bodyClass: o().approval__body,
                    footerComponent: (0, n.jsxs)("div", {
                        className: o().approval__footer,
                        children: [(0, n.jsx)(d(), {
                            label: v ? "بازگشت" : r.buttonText,
                            variant: "fill",
                            fullWidth: !0,
                            disabled: !v && !_,
                            onClick: E
                        }), (0, n.jsx)(d(), {
                            label: v ? "ارسال" : "مشکلی پیش آمده!",
                            variant: "outline",
                            fullWidth: !0,
                            onClick: O,
                            className: o().approval__footer__button
                        })]
                    }),
                    children: (0, n.jsxs)("div", {
                        className: o().approval,
                        children: [(0, n.jsx)("img", {
                            src: "https://statics.basalam.com/public-15/admin/67gZL/12-25/i0krIjmOlXD6yKM8OjAU98gy69Y8PbMj0KPrQqxRDT843XOy1S.SVG",
                            alt: "ban",
                            className: o().approval__img
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("div", {
                                className: o().approval__title,
                                children: (0, n.jsx)(h(), {
                                    source: r.body
                                })
                            }), !v && (0, n.jsx)("div", {
                                className: o().approval__checkbox,
                                children: (0, n.jsx)(f(), {
                                    size: "sm",
                                    label: r.checkboxText,
                                    checked: _,
                                    onChange: function(e) {
                                        p(e.target.checked)
                                    }
                                })
                            }), v && (0, n.jsx)(y(), {
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
        27396: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return k
                }
            });
            var n = r(32930),
                a = r(27434),
                o = r(18925),
                i = r(2389),
                l = r.n(i),
                s = r(79373),
                u = r(36839),
                c = l()(function() {
                    return Promise.all([r.e(9262), r.e(6999), r.e(3608), r.e(9145)]).then(r.t.bind(r, 44217, 23))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [44217]
                        }
                    },
                    ssr: !1
                });

            function _() {
                var e = (0, u.dalanMapGetters)(["chatModalData"]).chatModalData;
                return (0, n.jsx)(s.Z, {
                    children: e && (0, n.jsx)(c, {})
                })
            }
            var d = r(84581),
                p = r(88592),
                f = r(5164),
                b = r(41804),
                h = r(94002),
                v = r(58271),
                y = r(39275),
                m = l()(function() {
                    return Promise.resolve().then(r.bind(r, 41804))
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
                        r = e[1],
                        o = (0, p.M_)(["isLoggedIn"]).isLoggedIn,
                        i = (0, a.useCallback)(function() {
                            return r(!1)
                        }, []),
                        l = (0, y.H)({
                            enabled: o && !f.bsLocalStorage.getItem(b.STORAGE_KEY)
                        }).data;
                    return (0, a.useEffect)(function() {
                        l && r(!0)
                    }, [l]), (0, n.jsx)(s.Z, {
                        children: (0, n.jsx)(h.ErrorBoundary, {
                            fallback: (0, n.jsx)("div", {}),
                            onError: v.wJ,
                            children: l && (0, n.jsx)(m, {
                                show: t,
                                data: l,
                                onClose: i
                            })
                        })
                    })
                }),
                j = r(88107),
                w = r(57163),
                x = r(60802);

            function k(e) {
                var t, r = e.children,
                    i = (0, j.Z)(),
                    l = (0, o.t)().quickAddToCart,
                    s = (0, x.l)(),
                    u = s.runGBTest,
                    c = s.getFeatureValue,
                    b = (0, p.M_)(["currentUser", "isLoggedIn"]),
                    h = b.currentUser,
                    v = b.isLoggedIn,
                    y = (0, a.useMemo)(function() {
                        return (0, f.camelize)(c("chat_config"))
                    }, [c]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(g, {}), (0, n.jsxs)(w.O, {
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
                                    i.push("/account/chats/".concat(t))
                                },
                                enabled: (0, f.isClientSide)() && "Notification" in window && "granted" !== Notification.permission && !((null == y || null === (t = y.features) || void 0 === t ? void 0 : t.toastExcludedRoutes) || []).some(function(e) {
                                    return window.location.pathname.includes(e)
                                })
                            }
                        },
                        injection: {
                            runGBTest: u,
                            publishEvent: d.s,
                            routerPush: i.push,
                            addToCart: l
                        },
                        children: [r, (0, n.jsx)(_, {})]
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