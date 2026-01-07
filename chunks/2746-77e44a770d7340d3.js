function _array_like_to_array(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var o = 0, t = new Array(n); o < n; o++) t[o] = e[o];
    return t
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function asyncGeneratorStep(e, n, o, t, r, i, a) {
    try {
        var u = e[i](a),
            s = u.value
    } catch (e) {
        return void o(e)
    }
    u.done ? n(s) : Promise.resolve(s).then(t, r)
}

function _async_to_generator(e) {
    return function() {
        var n = this,
            o = arguments;
        return new Promise(function(t, r) {
            var i = e.apply(n, o);

            function a(e) {
                asyncGeneratorStep(i, t, r, a, u, "next", e)
            }

            function u(e) {
                asyncGeneratorStep(i, t, r, a, u, "throw", e)
            }
            a(void 0)
        })
    }
}

function _define_property(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e
}

function _iterable_to_array_limit(e, n) {
    var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != o) {
        var t, r, i = [],
            a = !0,
            u = !1;
        try {
            for (o = o.call(e); !(a = (t = o.next()).done) && (i.push(t.value), !n || i.length !== n); a = !0);
        } catch (e) {
            u = !0, r = e
        } finally {
            try {
                a || null == o.return || o.return()
            } finally {
                if (u) throw r
            }
        }
        return i
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _object_spread(e) {
    for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable
        }))), t.forEach(function(n) {
            _define_property(e, n, o[n])
        })
    }
    return e
}

function ownKeys(e, n) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        n && (t = t.filter(function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
        })), o.push.apply(o, t)
    }
    return o
}

function _object_spread_props(e, n) {
    return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(o) {
        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
    }), e
}

function _sliced_to_array(e, n) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, n) || _unsupported_iterable_to_array(e, n) || _non_iterable_rest()
}

function _unsupported_iterable_to_array(e, n) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, n);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(o) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _array_like_to_array(e, n) : void 0
    }
}

function _ts_generator(e, n) {
    var o, t, r, i = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        },
        a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return a.next = u(0), a.throw = u(1), a.return = u(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }), a;

    function u(u) {
        return function(s) {
            return function(u) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; a && (a = 0, u[0] && (i = 0)), i;) try {
                    if (o = 1, t && (r = 2 & u[0] ? t.return : u[0] ? t.throw || ((r = t.return) && r.call(t), 0) : t.next) && !(r = r.call(t, u[1])).done) return r;
                    switch (t = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                        case 0:
                        case 1:
                            r = u;
                            break;
                        case 4:
                            return i.label++, {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            i.label++, t = u[1], u = [0];
                            continue;
                        case 7:
                            u = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(r = i.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                i.label = u[1];
                                break
                            }
                            if (6 === u[0] && i.label < r[1]) {
                                i.label = r[1], r = u;
                                break
                            }
                            if (r && i.label < r[2]) {
                                i.label = r[2], i.ops.push(u);
                                break
                            }
                            r[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    u = n.call(e, i)
                } catch (e) {
                    u = [6, e], t = 0
                } finally {
                    o = r = 0
                }
                if (5 & u[0]) throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                }
            }([u, s])
        }
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2746], {
        32397: function(e, n, o) {
            "use strict";
            o.d(n, {
                Z: function() {
                    return P
                }
            });
            var t = o(32930),
                r = o(27434),
                i = o(48075),
                a = o.n(i),
                u = o(36350),
                s = o(5164),
                l = o(5112),
                c = o.n(l),
                d = o(73599),
                f = o(92518),
                h = o(78456),
                v = o(85945),
                p = o(39145),
                _ = o.n(p),
                b = o(81433),
                w = o.n(b),
                g = o(70437),
                m = o.n(g);

            function y(e) {
                var n, o = e.userId,
                    r = e.show,
                    i = e.onClick,
                    a = (0, v.NL)(),
                    u = (0, h.qf)(o, {
                        enabled: r
                    }),
                    l = u.hasNextPage,
                    c = u.isFetchingNextPage,
                    d = u.fetchNextPage,
                    p = u.isError,
                    b = u.data,
                    g = u.isLoading,
                    y = (null == b || null === (n = b.pages) || void 0 === n ? void 0 : n.flatMap(function(e) {
                        return e.openapiRawData
                    })) || [],
                    k = function() {
                        a.invalidateQueries(["followings", o])
                    };
                return (0, t.jsxs)(_(), {
                    useWindow: !1,
                    hasMore: !!l && !c,
                    fetchMore: d,
                    hasError: !!p && !c,
                    children: [y.map(function(e) {
                        return (0, t.jsx)(f.Z, {
                            user: e,
                            followCallback: k,
                            onClick: i
                        }, e.id)
                    }), (g || c) && (0, s.range)(10).map(function(e) {
                        return (0, t.jsxs)(w(), {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            pr: 32,
                            pt: 16,
                            children: [(0, t.jsx)(m(), {
                                width: 40,
                                height: 40,
                                radius: "50%"
                            }), (0, t.jsx)(m(), {
                                width: 80,
                                height: 16
                            })]
                        }, e)
                    })]
                })
            }
            var k = o(92034),
                j = o.n(k),
                C = o(21937),
                I = o.n(C),
                x = o(88107),
                S = o(45835),
                T = o(89504),
                O = [{
                    value: "follower",
                    title: "دنبال کننده"
                }, {
                    value: "following",
                    title: "غرفه‌‌ی دنبال‌شده"
                }],
                D = function(e) {
                    var n = e.show,
                        o = e.onClose,
                        i = e.focusedTab,
                        a = e.onChangeTab,
                        u = e.userId,
                        l = e.hasTab,
                        f = void 0 === l || l,
                        h = (0, x.Z)(),
                        v = (0, S.b)(),
                        p = v.ua,
                        _ = v.isWebview;
                    (0, r.useEffect)(function() {
                        if (_ && window.WebviewInterfaceVersion === T.gO.PARTIAL_WEBVIEW) {
                            var e, o = (0, T.Cw)();
                            null === (e = o.setRefreshEnabled) || void 0 === e || e.call(o, !n)
                        }
                    }, [n, _]);
                    var b = (0, r.useCallback)(function(e) {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return o(), [4, (0, s.sleep)(200)];
                                    case 1:
                                        return n.sent(), h.push(e), [2]
                                }
                            })
                        })()
                    }, [h, o]);
                    return (0, r.useEffect)(function() {
                        var e = function() {
                            n && o()
                        };
                        return h.events.on("routeChangeStart", e),
                            function() {
                                h.events.off("routeChangeStart", e)
                            }
                    }, [h, n, o]), (0, t.jsxs)(j(), {
                        size: "md",
                        show: n,
                        showClose: !1,
                        onClose: o,
                        className: c().followers,
                        showHeader: !0,
                        children: [f && (0, t.jsx)(I(), {
                            tabs: O,
                            value: i,
                            fullWidth: !p.isPc,
                            onChange: a,
                            className: c().followers__tabs
                        }), (0, t.jsx)("div", {
                            className: c().followers__wrapper,
                            children: "follower" === i ? (0, t.jsx)(d.Z, {
                                userId: u,
                                show: n,
                                onClick: b
                            }) : (0, t.jsx)(y, {
                                userId: u,
                                show: n,
                                onClick: b
                            })
                        })]
                    })
                },
                P = function(e) {
                    var n = e.user,
                        o = e.showFollowers,
                        i = void 0 === o || o,
                        s = e.showFollowings,
                        l = void 0 === s || s,
                        c = e.followers,
                        d = void 0 === c ? "دنبال‌کننده" : c,
                        f = e.followings,
                        h = void 0 === f ? "غرفه‌‌ی دنبال‌شده" : f,
                        v = _sliced_to_array((0, r.useState)(""), 2),
                        p = v[0],
                        _ = v[1],
                        b = _sliced_to_array((0, u.useDisclosure)(), 2),
                        w = b[0],
                        g = b[1],
                        m = g.open,
                        y = g.close,
                        k = l && i,
                        j = function(e) {
                            ("follower" !== e || (null == n ? void 0 : n.userFollowerCount)) && ("following" !== e || (null == n ? void 0 : n.userFollowingCount)) && (_(e), m())
                        };
                    return (0, t.jsxs)("div", {
                        onClick: function(e) {
                            null == e || e.preventDefault(), null == e || e.stopPropagation()
                        },
                        className: a()["follows-info"],
                        children: [i && (0, t.jsxs)("div", {
                            onClick: function() {
                                return j("follower")
                            },
                            children: [(0, t.jsx)("span", {
                                className: a()["follows-info__follower-count"],
                                children: null == n ? void 0 : n.userFollowerCount
                            }), (0, t.jsx)("span", {
                                children: d
                            })]
                        }), k && (0, t.jsx)("div", {
                            className: a()["follows-info__divider"]
                        }), l && (0, t.jsxs)("div", {
                            onClick: function() {
                                return j("following")
                            },
                            children: [(0, t.jsx)("span", {
                                className: a()["follows-info__following-count"],
                                children: null == n ? void 0 : n.userFollowingCount
                            }), (0, t.jsx)("span", {
                                children: h
                            })]
                        }), w && (0, t.jsx)(D, {
                            show: w,
                            onClose: y,
                            focusedTab: p,
                            userId: null == n ? void 0 : n.id,
                            hasTab: k,
                            onChangeTab: function(e) {
                                _(e)
                            }
                        })]
                    })
                }
        },
        57171: function(e, n, o) {
            "use strict";
            o.d(n, {
                Bq: function() {
                    return s
                },
                H0: function() {
                    return v
                },
                JF: function() {
                    return i
                },
                K$: function() {
                    return p
                },
                M5: function() {
                    return _
                },
                PG: function() {
                    return l
                },
                TG: function() {
                    return f
                },
                UK: function() {
                    return h
                },
                Vu: function() {
                    return u
                },
                _h: function() {
                    return a
                },
                dZ: function() {
                    return w
                },
                fJ: function() {
                    return b
                },
                h0: function() {
                    return d
                },
                xS: function() {
                    return c
                },
                zy: function() {
                    return g
                }
            });
            var t = o(5164),
                r = o(79614);

            function i(e) {
                var n = e.mobile,
                    o = e.hash,
                    t = e.code,
                    i = e.shouldSendCodeToBackupMobile;
                return r.DZ.post("/web/v1/auth/captcha/otp-request", {
                    hash: o,
                    code: t,
                    mobile: n,
                    client_id: "11",
                    login_by_backup_mobile: i
                })
            }

            function a(e) {
                var n = e.mobile,
                    o = e.otp,
                    t = e.authMode;
                return r.DZ.post("/web/v1/auth/otp-login", {
                    mobile: n,
                    otp_code: o,
                    client_id: "11"
                }, {
                    headers: "HTTP_ONLY" === t ? {
                        SetTokenInCookie: !0
                    } : {}
                })
            }

            function u(e) {
                var n = e.mobile,
                    o = e.password,
                    t = e.authMode;
                return r.DZ.post("/web/v1/auth/login", {
                    mobile: n,
                    password: o,
                    client_id: "11"
                }, {
                    headers: "HTTP_ONLY" === t ? {
                        SetTokenInCookie: !0
                    } : {}
                })
            }

            function s(e) {
                var n = e.data,
                    o = e.authMode;
                return r.DZ.post("/web/v1/auth/auth/eitaa", {
                    data: n
                }, {
                    headers: "HTTP_ONLY" === o ? {
                        SetTokenInCookie: !0
                    } : {}
                })
            }

            function l(e) {
                var n = e.mobile,
                    o = e.name,
                    t = e.otp,
                    i = e.authMode;
                return r.DZ.post("/web/v1/auth/register", {
                    name: o,
                    mobile: n,
                    verification_code: t,
                    client_id: "11"
                }, {
                    headers: "HTTP_ONLY" === i ? {
                        SetTokenInCookie: !0
                    } : {}
                })
            }

            function c() {
                return r.DZ.post("/web/v1/auth/logout")
            }

            function d(e) {
                var n = e.mobile,
                    o = e.otp,
                    t = e.password,
                    i = e.authMode;
                return r.DZ.post("/web/v1/auth/reset-forgot-password", {
                    mobile: n,
                    password: t,
                    verification_code: o,
                    client_id: "11"
                }, {
                    headers: "HTTP_ONLY" === i ? {
                        SetTokenInCookie: !0
                    } : {}
                })
            }

            function f(e) {
                var n = e.password,
                    o = e.currentPassword,
                    t = e.authMode;
                return r.DZ.post("/web/v1/auth/reset-password", {
                    new_password: n,
                    client_id: "11",
                    current_password: o
                }, {
                    headers: "HTTP_ONLY" === t ? {
                        SetTokenInCookie: !0
                    } : {}
                })
            }

            function h(e) {
                var n = e.mobile,
                    o = e.otp;
                return r.DZ.post("/web/v1/auth/check-verification-code", {
                    mobile: n,
                    verification_code: o
                })
            }

            function v(e) {
                var n = e.mobile,
                    o = e.hash,
                    t = e.code;
                return r.DZ.post("/web/v1/auth/captcha/request-forgot-password", {
                    hash: o,
                    code: t,
                    mobile: n,
                    client_id: "11"
                })
            }

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return r.DZ.get("/web/v1/auth/check-user-has-password", e)
            }

            function _(e) {
                var n = e.mobile,
                    o = e.authMode;
                return r.DZ.post("/web/v1/auth/admin/impersonate", {
                    identifier: n
                }, {
                    headers: "HTTP_ONLY" === o ? {
                        SetTokenInCookie: !0
                    } : {}
                })
            }

            function b() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.clientId,
                    o = e.redirectUri,
                    i = e.state,
                    a = e.scope,
                    u = void 0 === a ? [] : a,
                    s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return r.DZ.get("/web/v1/auth/authorize", _object_spread_props(_object_spread({}, s), {
                    params: (0, t.snakize)({
                        clientId: n,
                        state: i,
                        redirectUri: o,
                        scope: u
                    })
                }))
            }

            function w() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.clientId,
                    o = e.redirectUri,
                    i = e.state,
                    a = e.scope,
                    u = void 0 === a ? [] : a;
                return r.DZ.post("/web/v1/auth/authorize", (0, t.snakize)({
                    clientId: n,
                    redirectUri: o,
                    state: i,
                    scope: u
                }))
            }

            function g() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return r.DZ.get("/web/v1/auth/captcha", e)
            }
        },
        9353: function(e, n, o) {
            "use strict";
            o.d(n, {
                g: function() {
                    return s
                },
                o: function() {
                    return l
                }
            });
            var t = o(17902),
                r = o(5164),
                i = o(79614);

            function a(e) {
                return i.iP.post("/api/api_v1.0/fcm", (0, r.snakize)(e))
            }

            function u(e) {
                return i.iP.delete("/api/api_v1.0/fcm", {
                    data: (0, r.snakize)(e)
                })
            }
            var s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, t.Db)(a, e)
                },
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, t.Db)(u, e)
                }
        },
        22434: function(e, n, o) {
            "use strict";
            var t = o(17902),
                r = o(57171),
                i = o(88592),
                a = o(67552),
                u = o.n(a),
                s = o(21306),
                l = o(5164),
                c = o(9353),
                d = o(50112),
                f = o(53777),
                h = o(76255),
                v = o(58271),
                p = o(23282),
                _ = o(27203),
                b = o(40276),
                w = o(19402),
                g = new Set(["/account", "/account/activity", "/account/addresses", "/account/bookmarks", "/account/bookmarks/[id]", "/account/chats/[hashId]", "/account/edit", "/account/invoices", "/account/orders", "/account/orders/[orderId]", "/account/reviews", "/account/settings", "/account/unrevieweds", "/account/vendor"]);
            n.Z = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = (0, c.o)().mutate;
                return (0, t.Db)(r.xS, _object_spread({
                    onSuccess: function() {
                        if (l.bsLocalStorage.removeItem(d.hz), l.bsLocalStorage.removeItem(_.D), l.bsLocalStorage.removeItem(b.S), (0, s.isIosApp)() && (0, f.getFcmToken)()) a({
                            identifier: (0, f.getFcmToken)()
                        }, {
                            onError: function(e) {
                                (0, v.O7)((0, v.Pt)(e))
                            },
                            onSettled: function() {
                                (alert("logout setteled"), "BASIC" === e) && ((0, w.rL)() ? (0, w.De)() : ((0, w.yL)(), (0, w.DF)()));
                                (0, h.S)(), g.has(n) ? window.location.href = "/" : window.location.reload()
                            }
                        });
                        else {
                            if ("BASIC" === e)(0, w.rL)() ? (0, w.De)() : ((0, w.yL)(), (0, w.DF)());
                            if ((0, h.S)(), (0, p.y)(), u()()) try {
                                localStorage.removeItem(i.gm)
                            } catch (e) {
                                console.error(e)
                            }
                            g.has(n) ? window.location.href = "/" : window.location.reload()
                        }
                    }
                }, o))
            }
        },
        27203: function(e, n, o) {
            "use strict";
            o.d(n, {
                D: function() {
                    return t
                }
            });
            var t = "home_coupon_list"
        },
        55633: function(e, n, o) {
            "use strict";
            o.d(n, {
                Z: function() {
                    return p
                }
            });
            var t = o(2134),
                r = o.n(t),
                i = o(5164),
                a = o(36350),
                u = o(92369),
                s = o(88592),
                l = o(61262),
                c = o(88107),
                d = o(45835),
                f = o(89504),
                h = o(60802),
                v = o(27434);

            function p() {
                var e, n = (0, c.Z)(),
                    o = (0, v.useRef)(!1),
                    t = (0, d.b)().isWebview,
                    p = (0, h.l)(),
                    _ = p.runGBTest,
                    b = p.getFeatureValue,
                    w = p.evaluateGBTest,
                    g = r()().publicRuntimeConfig,
                    m = (0, l.B)().authForm.toggleModal,
                    y = (0, a.useSnackbar)().showSuccessSnackbar,
                    k = (0, s.M_)(["isLoggedIn", "currentUser", "isVendor"]),
                    j = k.isLoggedIn,
                    C = k.currentUser,
                    I = k.isVendor,
                    x = null === (e = _("test_header_direct_login_to_vendor", !1)) || void 0 === e ? void 0 : e.value,
                    S = (0, v.useMemo)(function() {
                        var e;
                        return null === (e = (0, i.camelize)(b("vendor_creation_flags"))) || void 0 === e ? void 0 : e.vendorCreate
                    }, [b]),
                    T = (0, v.useCallback)(function() {
                        if ((0, u.publishEvent)("createVendorClick", {
                                location: "header"
                            }), o.current = !0, C) {
                            var e = "".concat(g.vendorDashboardUrl).concat((null == C ? void 0 : C.vendor) ? "/dashboard" : "/create-vendor");
                            t ? null === f.Hr || void 0 === f.Hr || (0, f.Hr)(e) : window.location.href = e
                        }
                    }, [C, g.vendorDashboardUrl, t]);
                (0, v.useEffect)(function() {
                    C && o.current && T()
                }, [C, T]);
                return {
                    handleCreateVendorClickBtn: function() {
                        I ? t ? (0, f.Hr)(g.vendorDashboardUrl) : window.location.href = g.vendorDashboardUrl : (w("test_header_direct_login_to_vendor"), "indirect" === x ? ((0, u.publishEvent)("createVendorClick", {
                            location: "header"
                        }), n.push("/landings/create-vendor")) : "direct" === x && (S ? y("در حال حاضر امکان ساخت غرفه وجود ندارد.") : j ? T() : m({
                            callback: function() {
                                return T()
                            }
                        })))
                    }
                }
            }
        },
        92518: function(e, n, o) {
            "use strict";
            o.d(n, {
                Z: function() {
                    return g
                }
            });
            var t = o(32930),
                r = o(27434),
                i = o(2347),
                a = o(26695),
                u = o.n(a),
                s = o(92369),
                l = o(58271),
                c = o(88592),
                d = o(78456),
                f = o(45835),
                h = o(61262),
                v = o(34641),
                p = o(55253),
                _ = o.n(p),
                b = o(65074),
                w = o.n(b);

            function g(e) {
                var n, o, a = e.user,
                    p = e.followCallback,
                    b = e.onClick,
                    g = (0, f.b)().isWebview,
                    m = (0, h.B)().dalan.openChatModal,
                    y = (0, c.M_)(["currentUser", "isLoggedIn"]),
                    k = y.currentUser,
                    j = y.isLoggedIn,
                    C = (0, h.B)().authForm.toggleModal,
                    I = _sliced_to_array((0, r.useState)(a.isFollowedByCurrentUser), 2),
                    x = I[0],
                    S = I[1],
                    T = (0, d.Kn)(),
                    O = T.mutate,
                    D = T.isLoading;
                return (0, t.jsxs)("div", {
                    className: u().user,
                    children: [(0, t.jsxs)("div", {
                        onClick: function() {
                            b(a.vendor ? "/".concat(a.vendor.identifier) : (0, v.j)(a))
                        },
                        className: u().user__link,
                        children: [(0, t.jsx)(_(), {
                            size: "40",
                            src: null == a || null === (n = a.avatar) || void 0 === n ? void 0 : n.small
                        }), a.name]
                    }), a.id !== (null == k ? void 0 : k.id) && (!x && (null === (o = a.vendor) || void 0 === o ? void 0 : o.isActive) ? (0, t.jsx)(w(), {
                        size: "sm",
                        color: "primary",
                        variant: "outline",
                        className: u().user__button,
                        label: "دنبال کنید",
                        loading: D,
                        onClick: function() {
                            j ? O({
                                action: "follow",
                                targetUserHashid: a.hashId
                            }, {
                                onError: l.S_,
                                onSuccess: function() {
                                    S(function(e) {
                                        return !e
                                    }), null == p || p()
                                }
                            }) : C()
                        }
                    }) : (0, t.jsx)(w(), {
                        size: "sm",
                        color: "secondary",
                        variant: "outline",
                        className: u().user__button,
                        label: "گفت‌وگو",
                        href: "/account/chats/".concat(a.hashId),
                        component: g ? i.Z : "button",
                        onClick: function() {
                            var e;
                            j ? g || (m(a.hashId), (0, s.publishEvent)("chatOpen", {
                                productId: null,
                                receiverId: null == a ? void 0 : a.id,
                                comesFrom: "follow-modal",
                                receiverIsVendor: !!(null == a ? void 0 : a.vendor),
                                receiverVendorId: null == a || null === (e = a.vendor) || void 0 === e ? void 0 : e.id
                            })) : C()
                        }
                    }))]
                })
            }
        },
        73599: function(e, n, o) {
            "use strict";
            o.d(n, {
                Z: function() {
                    return v
                }
            });
            var t = o(32930),
                r = o(92518),
                i = o(5164),
                a = o(78456),
                u = o(85945),
                s = o(81433),
                l = o.n(s),
                c = o(39145),
                d = o.n(c),
                f = o(70437),
                h = o.n(f);

            function v(e) {
                var n, o = e.userId,
                    s = e.show,
                    c = e.followerIds,
                    f = e.onClick,
                    v = (0, u.NL)(),
                    p = (0, a.lq)({
                        userId: o,
                        followerIds: c
                    }, {
                        enabled: s
                    }),
                    _ = p.hasNextPage,
                    b = p.isFetchingNextPage,
                    w = p.fetchNextPage,
                    g = p.isError,
                    m = p.isLoading,
                    y = p.data,
                    k = (null == y || null === (n = y.pages) || void 0 === n ? void 0 : n.flatMap(function(e) {
                        return e.openapiRawData
                    })) || [],
                    j = function() {
                        v.invalidateQueries(["followers", o, (c || []).toString()])
                    };
                return (0, t.jsxs)(d(), {
                    useWindow: !1,
                    hasMore: !!_ && !b,
                    fetchMore: w,
                    hasError: !!g && !b,
                    children: [k.map(function(e) {
                        return (0, t.jsx)(r.Z, {
                            user: e,
                            onClick: f,
                            followCallback: j
                        }, e.id)
                    }), (m || b) && (0, i.range)(10).map(function(e) {
                        return (0, t.jsxs)(l(), {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            pr: 32,
                            pt: 16,
                            children: [(0, t.jsx)(h(), {
                                width: 40,
                                height: 40,
                                radius: "50%"
                            }), (0, t.jsx)(h(), {
                                width: 80,
                                height: 16
                            })]
                        }, e)
                    })]
                })
            }
        },
        40276: function(e, n, o) {
            "use strict";
            o.d(n, {
                S: function() {
                    return t
                }
            });
            var t = "story_following_feed_v3"
        },
        53777: function(e, n, o) {
            "use strict";
            var t = o(37787).getCookie,
                r = o(5164).isClientSide;
            e.exports = {
                getFcmToken: function() {
                    var e, n, o, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = i.req,
                        u = i.res;
                    return (null == a || null === (e = a.headers) || void 0 === e ? void 0 : e["fcm-token"]) || t("fcmToken", {
                        req: a,
                        res: u
                    }) || (null == a || null === (n = a.headers) || void 0 === n ? void 0 : n["x-app-push-token"]) || r() && (null === (o = window.SibApp) || void 0 === o ? void 0 : o.pushToken)
                }
            }
        },
        34641: function(e, n, o) {
            "use strict";

            function t(e) {
                if (null == e ? void 0 : e.username) return "https://basalam.com/@".concat(e.username);
                if (null == e ? void 0 : e.hashId) {
                    var n = e.hashId;
                    return "https://basalam.com/user/".concat(n)
                }
                return "#"
            }
            o.d(n, {
                j: function() {
                    return t
                }
            })
        },
        48075: function(e) {
            e.exports = {
                "follows-info": "w4uoTj",
                "follows-info__follower-count": "GgwynM",
                "follows-info__following-count": "Xm8ZY6",
                "follows-info__divider": "mrsaEH"
            }
        },
        26695: function(e) {
            e.exports = {
                user: "QQrUBn",
                user__link: "_0ghk_r",
                user__button: "Ll3tsb"
            }
        },
        5112: function(e) {
            e.exports = {
                followers__wrapper: "ny3oc7"
            }
        }
    }
]);