function _array_like_to_array(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var o = 0, r = new Array(n); o < n; o++) r[o] = e[o];
    return r
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function asyncGeneratorStep(e, n, o, r, t, i, a) {
    try {
        var s = e[i](a),
            u = s.value
    } catch (e) {
        return void o(e)
    }
    s.done ? n(u) : Promise.resolve(u).then(r, t)
}

function _async_to_generator(e) {
    return function() {
        var n = this,
            o = arguments;
        return new Promise(function(r, t) {
            var i = e.apply(n, o);

            function a(e) {
                asyncGeneratorStep(i, r, t, a, s, "next", e)
            }

            function s(e) {
                asyncGeneratorStep(i, r, t, a, s, "throw", e)
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
        var r, t, i = [],
            a = !0,
            s = !1;
        try {
            for (o = o.call(e); !(a = (r = o.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
        } catch (e) {
            s = !0, t = e
        } finally {
            try {
                a || null == o.return || o.return()
            } finally {
                if (s) throw t
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
            r = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable
        }))), r.forEach(function(n) {
            _define_property(e, n, o[n])
        })
    }
    return e
}

function ownKeys(e, n) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter(function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
        })), o.push.apply(o, r)
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
    var o, r, t, i = {
            label: 0,
            sent: function() {
                if (1 & t[0]) throw t[1];
                return t[1]
            },
            trys: [],
            ops: []
        },
        a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }), a;

    function s(s) {
        return function(u) {
            return function(s) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; a && (a = 0, s[0] && (i = 0)), i;) try {
                    if (o = 1, r && (t = 2 & s[0] ? r.return : s[0] ? r.throw || ((t = r.return) && t.call(r), 0) : r.next) && !(t = t.call(r, s[1])).done) return t;
                    switch (r = 0, t && (s = [2 & s[0], t.value]), s[0]) {
                        case 0:
                        case 1:
                            t = s;
                            break;
                        case 4:
                            return i.label++, {
                                value: s[1],
                                done: !1
                            };
                        case 5:
                            i.label++, r = s[1], s = [0];
                            continue;
                        case 7:
                            s = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(t = i.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === s[0] && (!t || s[1] > t[0] && s[1] < t[3])) {
                                i.label = s[1];
                                break
                            }
                            if (6 === s[0] && i.label < t[1]) {
                                i.label = t[1], t = s;
                                break
                            }
                            if (t && i.label < t[2]) {
                                i.label = t[2], i.ops.push(s);
                                break
                            }
                            t[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    s = n.call(e, i)
                } catch (e) {
                    s = [6, e], r = 0
                } finally {
                    o = t = 0
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
    [2746], {
        32397: function(e, n, o) {
            "use strict";
            o.d(n, {
                Z: function() {
                    return L
                }
            });
            var r = o(32930),
                t = o(27434),
                i = o(48075),
                a = o.n(i),
                s = o(36350),
                u = o(50874),
                l = o.n(u),
                c = o(5164),
                d = o(5112),
                f = o.n(d),
                h = o(73599),
                v = o(92518),
                p = o(78456),
                _ = o(85945),
                b = o(39145),
                w = o.n(b),
                g = o(81433),
                m = o.n(g),
                y = o(70437),
                k = o.n(y);

            function j(e) {
                var n, o = e.userId,
                    t = e.show,
                    i = e.onClick,
                    a = (0, _.NL)(),
                    s = (0, p.qf)(o, {
                        enabled: t
                    }),
                    u = s.hasNextPage,
                    l = s.isFetchingNextPage,
                    d = s.fetchNextPage,
                    f = s.isError,
                    h = s.data,
                    b = s.isLoading,
                    g = (null == h || null === (n = h.pages) || void 0 === n ? void 0 : n.flatMap(function(e) {
                        return e.openapiRawData
                    })) || [],
                    y = function() {
                        a.invalidateQueries(["followings", o])
                    };
                return (0, r.jsxs)(w(), {
                    useWindow: !1,
                    hasMore: !!u && !l,
                    fetchMore: d,
                    hasError: !!f && !l,
                    children: [g.map(function(e) {
                        return (0, r.jsx)(v.Z, {
                            user: e,
                            followCallback: y,
                            onClick: i
                        }, e.id)
                    }), (b || l) && (0, c.range)(10).map(function(e) {
                        return (0, r.jsxs)(m(), {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            pr: 32,
                            pt: 16,
                            children: [(0, r.jsx)(k(), {
                                width: 40,
                                height: 40,
                                radius: "50%"
                            }), (0, r.jsx)(k(), {
                                width: 80,
                                height: 16
                            })]
                        }, e)
                    })]
                })
            }
            var C = o(92034),
                I = o.n(C),
                x = o(21937),
                S = o.n(x),
                T = o(88107),
                O = o(45835),
                P = o(89504),
                H = [{
                    value: "follower",
                    title: "دنبال کننده"
                }, {
                    value: "following",
                    title: "دنبال شونده"
                }];

            function N(e) {
                var n = e.show,
                    o = e.onClose,
                    i = e.focusedTab,
                    a = e.onChangeTab,
                    s = e.userId,
                    u = e.hasTab,
                    l = void 0 === u || u,
                    d = (0, T.Z)(),
                    v = (0, O.b)(),
                    p = v.ua,
                    _ = v.isWebview;
                (0, t.useEffect)(function() {
                    if (_ && window.WebviewInterfaceVersion === P.gO.PARTIAL_WEBVIEW) {
                        var e, o = (0, P.Cw)();
                        null === (e = o.setRefreshEnabled) || void 0 === e || e.call(o, !n)
                    }
                }, [n, _]);
                var b = (0, t.useCallback)(function(e) {
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return o(), [4, (0, c.sleep)(200)];
                                case 1:
                                    return n.sent(), d.push(e), [2]
                            }
                        })
                    })()
                }, [d, o]);
                return (0, t.useEffect)(function() {
                    var e = function() {
                        n && o()
                    };
                    return d.events.on("routeChangeStart", e),
                        function() {
                            d.events.off("routeChangeStart", e)
                        }
                }, [d, n, o]), (0, r.jsxs)(I(), {
                    size: "md",
                    show: n,
                    showClose: !1,
                    onClose: o,
                    className: f().followers,
                    showHeader: !0,
                    children: [l && (0, r.jsx)(S(), {
                        tabs: H,
                        value: i,
                        fullWidth: !p.isPc,
                        onChange: a,
                        className: f().followers__tabs
                    }), (0, r.jsx)("div", {
                        className: f().followers__wrapper,
                        children: "follower" === i ? (0, r.jsx)(h.Z, {
                            userId: s,
                            show: n,
                            onClick: b
                        }) : (0, r.jsx)(j, {
                            userId: s,
                            show: n,
                            onClick: b
                        })
                    })]
                })
            }
            N.propType = {
                show: l().bool,
                onClose: l().func,
                focusedTab: l().oneOf(H.map(function(e) {
                    return e.value
                }))
            };
            var L = function(e) {
                var n = e.user,
                    o = e.showFollowers,
                    i = void 0 === o || o,
                    u = e.showFollowings,
                    l = void 0 === u || u,
                    c = e.followers,
                    d = void 0 === c ? "دنبال شده‌اید" : c,
                    f = e.followings,
                    h = void 0 === f ? "دنبال کرده‌اید" : f,
                    v = _sliced_to_array((0, t.useState)(""), 2),
                    p = v[0],
                    _ = v[1],
                    b = _sliced_to_array((0, s.useDisclosure)(), 2),
                    w = b[0],
                    g = b[1],
                    m = g.open,
                    y = g.close,
                    k = l && i,
                    j = function(e) {
                        ("follower" !== e || (null == n ? void 0 : n.userFollowerCount)) && ("following" !== e || (null == n ? void 0 : n.userFollowingCount)) && (_(e), m())
                    };
                return (0, r.jsxs)("div", {
                    onClick: function(e) {
                        null == e || e.preventDefault(), null == e || e.stopPropagation()
                    },
                    className: a()["follows-info"],
                    children: [i && (0, r.jsxs)("div", {
                        onClick: function() {
                            return j("follower")
                        },
                        children: [(0, r.jsx)("span", {
                            className: a()["follows-info__follower-count"],
                            children: null == n ? void 0 : n.userFollowerCount
                        }), (0, r.jsx)("span", {
                            children: d
                        })]
                    }), k && (0, r.jsx)("div", {
                        className: a()["follows-info__divider"]
                    }), l && (0, r.jsxs)("div", {
                        onClick: function() {
                            return j("following")
                        },
                        children: [(0, r.jsx)("span", {
                            className: a()["follows-info__following-count"],
                            children: null == n ? void 0 : n.userFollowingCount
                        }), (0, r.jsx)("span", {
                            children: h
                        })]
                    }), w && (0, r.jsx)(N, {
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
                    return u
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
                    return s
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
            var r = o(5164),
                t = o(79614);

            function i(e) {
                var n = e.mobile,
                    o = e.hash,
                    r = e.code,
                    i = e.shouldSendCodeToBackupMobile;
                return t.HR.post("/captcha/otp-request", {
                    hash: o,
                    code: r,
                    mobile: n,
                    client_id: "11",
                    login_by_backup_mobile: i
                })
            }

            function a(e) {
                var n = e.mobile,
                    o = e.otp,
                    r = e.authMode;
                return t.HR.post("/otp-login", {
                    mobile: n,
                    otp_code: o,
                    client_id: "11"
                }, {
                    headers: "HTTP_ONLY" === r ? {
                        SetTokenInCookie: !0
                    } : {}
                })
            }

            function s(e) {
                var n = e.mobile,
                    o = e.password,
                    r = e.authMode;
                return t.HR.post("/login", {
                    mobile: n,
                    password: o,
                    client_id: "11"
                }, {
                    headers: "HTTP_ONLY" === r ? {
                        SetTokenInCookie: !0
                    } : {}
                })
            }

            function u(e) {
                var n = e.data,
                    o = e.authMode;
                return t.HR.post("/auth/eitaa", {
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
                    r = e.otp,
                    i = e.authMode;
                return t.HR.post("/register", {
                    name: o,
                    mobile: n,
                    verification_code: r,
                    client_id: "11"
                }, {
                    headers: "HTTP_ONLY" === i ? {
                        SetTokenInCookie: !0
                    } : {}
                })
            }

            function c() {
                return t.HR.post("/logout")
            }

            function d(e) {
                var n = e.mobile,
                    o = e.otp,
                    r = e.password,
                    i = e.authMode;
                return t.HR.post("/reset-forgot-password", {
                    mobile: n,
                    password: r,
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
                    r = e.authMode;
                return t.HR.post("/reset-password", {
                    new_password: n,
                    client_id: "11",
                    current_password: o
                }, {
                    headers: "HTTP_ONLY" === r ? {
                        SetTokenInCookie: !0
                    } : {}
                })
            }

            function h(e) {
                var n = e.mobile,
                    o = e.otp;
                return t.HR.post("/check-verification-code", {
                    mobile: n,
                    verification_code: o
                })
            }

            function v(e) {
                var n = e.mobile,
                    o = e.hash,
                    r = e.code;
                return t.HR.post("/captcha/request-forgot-password", {
                    hash: o,
                    code: r,
                    mobile: n,
                    client_id: "11"
                })
            }

            function p() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t.HR.get("/check-user-has-password", e)
            }

            function _(e) {
                var n = e.mobile,
                    o = e.authMode;
                return t.HR.post("/admin/impersonate", {
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
                    s = void 0 === a ? [] : a,
                    u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return t.HR.get("/authorize", _object_spread_props(_object_spread({}, u), {
                    params: (0, r.snakize)({
                        clientId: n,
                        state: i,
                        redirectUri: o,
                        scope: s
                    })
                }))
            }

            function w() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.clientId,
                    o = e.redirectUri,
                    i = e.state,
                    a = e.scope,
                    s = void 0 === a ? [] : a;
                return t.HR.post("/authorize", (0, r.snakize)({
                    clientId: n,
                    redirectUri: o,
                    state: i,
                    scope: s
                }))
            }

            function g() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t.HR.get("/captcha", e)
            }
        },
        9353: function(e, n, o) {
            "use strict";
            o.d(n, {
                g: function() {
                    return u
                },
                o: function() {
                    return l
                }
            });
            var r = o(67938),
                t = o(5164),
                i = o(79614);

            function a(e) {
                return i.iP.post("/api/api_v1.0/fcm", (0, t.snakize)(e))
            }

            function s(e) {
                return i.iP.delete("/api/api_v1.0/fcm", {
                    data: (0, t.snakize)(e)
                })
            }
            var u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, r.Db)(a, e)
                },
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, r.Db)(s, e)
                }
        },
        22434: function(e, n, o) {
            "use strict";
            var r = o(67938),
                t = o(57171),
                i = o(88592),
                a = o(67552),
                s = o.n(a),
                u = o(21306),
                l = o(5164),
                c = o(9353),
                d = o(53777),
                f = o(76255),
                h = o(58271),
                v = o(23282),
                p = o(27203),
                _ = o(40276),
                b = o(19402),
                w = new Set(["/account", "/account/activity", "/account/addresses", "/account/bookmarks", "/account/bookmarks/[id]", "/account/chats/[hashId]", "/account/edit", "/account/invoices", "/account/orders", "/account/orders/[orderId]", "/account/reviews", "/account/settings", "/account/unrevieweds", "/account/vendor"]);
            n.Z = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = (0, c.o)().mutate;
                return (0, r.Db)(t.xS, _object_spread({
                    onSuccess: function() {
                        if (l.bsLocalStorage.removeItem(p.D), l.bsLocalStorage.removeItem(_.S), (0, u.isIosApp)() && (0, d.getFcmToken)()) a({
                            identifier: (0, d.getFcmToken)()
                        }, {
                            onError: function(e) {
                                (0, h.O7)((0, h.Pt)(e))
                            },
                            onSettled: function() {
                                (alert("logout setteled"), "BASIC" === e) && ((0, b.rL)() ? (0, b.De)() : ((0, b.yL)(), (0, b.DF)()));
                                (0, f.S)(), w.has(n) ? window.location.href = "/" : window.location.reload()
                            }
                        });
                        else {
                            if ("BASIC" === e)(0, b.rL)() ? (0, b.De)() : ((0, b.yL)(), (0, b.DF)());
                            (0, f.S)(), (0, v.y)(), s()() && l.bsLocalStorage.removeItem(i.gm), w.has(n) ? window.location.href = "/" : window.location.reload()
                        }
                    }
                }, o))
            }
        },
        27203: function(e, n, o) {
            "use strict";
            o.d(n, {
                D: function() {
                    return r
                }
            });
            var r = "home_coupon_list"
        },
        55633: function(e, n, o) {
            "use strict";
            o.d(n, {
                Z: function() {
                    return p
                }
            });
            var r = o(2134),
                t = o.n(r),
                i = o(5164),
                a = o(36350),
                s = o(92369),
                u = o(88592),
                l = o(61262),
                c = o(88107),
                d = o(45835),
                f = o(89504),
                h = o(60802),
                v = o(27434);

            function p() {
                var e, n = (0, c.Z)(),
                    o = (0, v.useRef)(!1),
                    r = (0, d.b)().isWebview,
                    p = (0, h.l)(),
                    _ = p.runGBTest,
                    b = p.getFeatureValue,
                    w = p.evaluateGBTest,
                    g = t()().publicRuntimeConfig,
                    m = (0, l.B)().authForm.toggleModal,
                    y = (0, a.useSnackbar)().showSuccessSnackbar,
                    k = (0, u.M_)(["isLoggedIn", "currentUser", "isVendor"]),
                    j = k.isLoggedIn,
                    C = k.currentUser,
                    I = k.isVendor,
                    x = null === (e = _("test_header_direct_login_to_vendor", !1)) || void 0 === e ? void 0 : e.value,
                    S = (0, v.useMemo)(function() {
                        var e;
                        return null === (e = (0, i.camelize)(b("vendor_creation_flags"))) || void 0 === e ? void 0 : e.vendorCreate
                    }, [b]),
                    T = (0, v.useCallback)(function() {
                        if ((0, s.publishEvent)("createVendorClick", {
                                location: "header"
                            }), o.current = !0, C) {
                            var e = "".concat(g.vendorDashboardUrl).concat((null == C ? void 0 : C.vendor) ? "/dashboard" : "/create-vendor");
                            r ? null === f.Hr || void 0 === f.Hr || (0, f.Hr)(e) : window.location.href = e
                        }
                    }, [C, g.vendorDashboardUrl, r]);
                (0, v.useEffect)(function() {
                    C && o.current && T()
                }, [C, T]);
                return {
                    handleCreateVendorClickBtn: function() {
                        I ? r ? (0, f.Hr)(g.vendorDashboardUrl) : window.location.href = g.vendorDashboardUrl : (w("test_header_direct_login_to_vendor"), "indirect" === x ? ((0, s.publishEvent)("createVendorClick", {
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
            var r = o(32930),
                t = o(27434),
                i = o(2347),
                a = o(26695),
                s = o.n(a),
                u = o(92369),
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
                    I = _sliced_to_array((0, t.useState)(a.isFollowedByCurrentUser), 2),
                    x = I[0],
                    S = I[1],
                    T = (0, d.Kn)(),
                    O = T.mutate,
                    P = T.isLoading;
                return (0, r.jsxs)("div", {
                    className: s().user,
                    children: [(0, r.jsx)("div", {
                        onClick: function() {
                            b(a.vendor ? "/".concat(a.vendor.identifier) : (0, v.j)(a))
                        },
                        className: s().user__link,
                        children: (0, r.jsx)(_(), {
                            size: "40",
                            src: null == a || null === (n = a.avatar) || void 0 === n ? void 0 : n.small
                        })
                    }), a.name, a.id !== (null == k ? void 0 : k.id) && (!x && (null === (o = a.vendor) || void 0 === o ? void 0 : o.isActive) ? (0, r.jsx)(w(), {
                        size: "sm",
                        color: "secondary",
                        variant: "outline",
                        className: s().user__button,
                        label: "دنبال کنید",
                        loading: P,
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
                    }) : (0, r.jsx)(w(), {
                        size: "sm",
                        color: "secondary",
                        variant: "outline",
                        className: s().user__button,
                        label: "گفت‌وگو",
                        href: "/account/chats/".concat(a.hashId),
                        component: g ? i.Z : "button",
                        onClick: function() {
                            var e;
                            j ? g || (m(a.hashId), (0, u.publishEvent)("chatOpen", {
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
            var r = o(32930),
                t = o(92518),
                i = o(5164),
                a = o(78456),
                s = o(85945),
                u = o(81433),
                l = o.n(u),
                c = o(39145),
                d = o.n(c),
                f = o(70437),
                h = o.n(f);

            function v(e) {
                var n, o = e.userId,
                    u = e.show,
                    c = e.followerIds,
                    f = e.onClick,
                    v = (0, s.NL)(),
                    p = (0, a.lq)({
                        userId: o,
                        followerIds: c
                    }, {
                        enabled: u
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
                return (0, r.jsxs)(d(), {
                    useWindow: !1,
                    hasMore: !!_ && !b,
                    fetchMore: w,
                    hasError: !!g && !b,
                    children: [k.map(function(e) {
                        return (0, r.jsx)(t.Z, {
                            user: e,
                            onClick: f,
                            followCallback: j
                        }, e.id)
                    }), (m || b) && (0, i.range)(10).map(function(e) {
                        return (0, r.jsxs)(l(), {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            pr: 32,
                            pt: 16,
                            children: [(0, r.jsx)(h(), {
                                width: 40,
                                height: 40,
                                radius: "50%"
                            }), (0, r.jsx)(h(), {
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
                    return r
                }
            });
            var r = "story_following_feed_v3"
        },
        53777: function(e, n, o) {
            "use strict";
            var r = o(37787).getCookie,
                t = o(5164).isClientSide;
            e.exports = {
                getFcmToken: function() {
                    var e, n, o, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = i.req,
                        s = i.res;
                    return (null == a || null === (e = a.headers) || void 0 === e ? void 0 : e["fcm-token"]) || r("fcmToken", {
                        req: a,
                        res: s
                    }) || (null == a || null === (n = a.headers) || void 0 === n ? void 0 : n["x-app-push-token"]) || t() && (null === (o = window.SibApp) || void 0 === o ? void 0 : o.pushToken)
                }
            }
        },
        34641: function(e, n, o) {
            "use strict";

            function r(e) {
                if (null == e ? void 0 : e.username) return "https://basalam.com/@".concat(e.username);
                if (null == e ? void 0 : e.hashId) {
                    var n = e.hashId;
                    return "https://basalam.com/user/".concat(n)
                }
                return "#"
            }
            o.d(n, {
                j: function() {
                    return r
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