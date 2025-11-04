"use strict";

function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
    return n
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
        var n, a, o = [],
            i = !0,
            u = !1;
        try {
            for (t = t.call(e); !(i = (n = t.next()).done) && (o.push(n.value), !r || o.length !== r); i = !0);
        } catch (e) {
            u = !0, a = e
        } finally {
            try {
                i || null == t.return || t.return()
            } finally {
                if (u) throw a
            }
        }
        return o
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _object_spread(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.forEach(function(r) {
            _define_property(e, r, t[r])
        })
    }
    return e
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
    [7396], {
        70508: function(e, r, t) {
            t.d(r, {
                EP: function() {
                    return o
                },
                J7: function() {
                    return i
                },
                zR: function() {
                    return u
                }
            });
            var n = t(5164),
                a = t(79614);

            function o(e) {
                return a.DZ.post("/web/v1/conversation/users/call/phone", (0, n.snakize)(e))
            }

            function i() {
                return a.DZ.get("/web/v1/conversation/warning/exit-platform")
            }

            function u(e) {
                return a.DZ.post("/web/v1/conversation/warning/exit-platform/acknowledge", (0, n.snakize)(e))
            }
        },
        39275: function(e, r, t) {
            t.d(r, {
                H: function() {
                    return o
                },
                c: function() {
                    return i
                }
            });
            var n = t(67938),
                a = t(70508),
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
        27396: function(e, r, t) {
            t.r(r), t.d(r, {
                default: function() {
                    return k
                }
            });
            var n = t(32930),
                a = t(27434),
                o = t(18925),
                i = t(2389),
                u = t.n(i),
                c = t(79373),
                l = t(36839),
                s = u()(function() {
                    return Promise.all([t.e(9262), t.e(6999), t.e(3608), t.e(9145)]).then(t.t.bind(t, 44217, 23))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [44217]
                        }
                    },
                    ssr: !1
                });

            function f() {
                var e = (0, l.dalanMapGetters)(["chatModalData"]).chatModalData;
                return (0, n.jsx)(c.Z, {
                    children: e && (0, n.jsx)(s, {})
                })
            }
            var d = t(84581),
                _ = t(88592),
                p = t(5164),
                h = t(94002),
                b = t(58271),
                y = t(39275),
                v = t(60802),
                g = u()(function() {
                    return Promise.all([t.e(5434), t.e(1804)]).then(t.bind(t, 41804))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [41804]
                        }
                    },
                    ssr: !1
                }),
                m = (0, a.memo)(function() {
                    var e, r = _sliced_to_array((0, a.useState)(!0), 2),
                        t = r[0],
                        o = r[1],
                        i = (0, v.l)().getFeatureValue,
                        u = (0, _.M_)(["userId"]).userId,
                        l = (0, a.useMemo)(function() {
                            return (0, p.camelize)(i("chat_config"))
                        }, [i]),
                        s = (null == l || null === (e = l.features) || void 0 === e ? void 0 : e.userIdsWithWarning) || [],
                        f = (0, a.useCallback)(function() {
                            return o(!1)
                        }, []),
                        d = (0, y.H)({
                            enabled: s.includes(u)
                        }).data;
                    return (0, a.useEffect)(function() {
                        d && o(!0)
                    }, [d]), (0, n.jsx)(c.Z, {
                        children: (0, n.jsx)(h.ErrorBoundary, {
                            fallback: (0, n.jsx)("div", {}),
                            onError: b.wJ,
                            children: d && (0, n.jsx)(g, {
                                show: t,
                                data: d,
                                onClose: f
                            })
                        })
                    })
                }),
                w = t(88107),
                j = t(57163);

            function k(e) {
                var r, t = e.children,
                    i = (0, w.Z)(),
                    u = (0, o.t)().quickAddToCart,
                    c = (0, v.l)(),
                    l = c.runGBTest,
                    s = c.getFeatureValue,
                    h = (0, _.M_)(["currentUser", "isLoggedIn"]),
                    b = h.currentUser,
                    y = h.isLoggedIn,
                    g = (0, a.useMemo)(function() {
                        return (0, p.camelize)(s("chat_config"))
                    }, [s]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(m, {}), (0, n.jsxs)(j.O, {
                        target: "lib",
                        user: b,
                        isLoggedIn: y,
                        featureFlags: g,
                        pagesBasePath: "/account/chats",
                        options: {
                            currentUserFetch: !1,
                            featureFlagFetch: !1,
                            toastOptions: {
                                duration: 4e3,
                                position: "top-right",
                                onOpen: function(e) {
                                    var r = e.identifier;
                                    i.push("/account/chats/".concat(r))
                                },
                                enabled: (0, p.isClientSide)() && "Notification" in window && "granted" !== Notification.permission && !((null == g || null === (r = g.features) || void 0 === r ? void 0 : r.toastExcludedRoutes) || []).some(function(e) {
                                    return window.location.pathname.includes(e)
                                })
                            }
                        },
                        injection: {
                            runGBTest: l,
                            publishEvent: d.s,
                            routerPush: i.push,
                            addToCart: u
                        },
                        children: [t, (0, n.jsx)(f, {})]
                    })]
                })
            }
        }
    }
]);