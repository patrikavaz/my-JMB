function _array_like_to_array(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function asyncGeneratorStep(e, t, r, n, o, i, s) {
    try {
        var a = e[i](s),
            u = a.value
    } catch (e) {
        return void r(e)
    }
    a.done ? t(u) : Promise.resolve(u).then(n, o)
}

function _async_to_generator(e) {
    return function() {
        var t = this,
            r = arguments;
        return new Promise(function(n, o) {
            var i = e.apply(t, r);

            function s(e) {
                asyncGeneratorStep(i, n, o, s, a, "next", e)
            }

            function a(e) {
                asyncGeneratorStep(i, n, o, s, a, "throw", e)
            }
            s(void 0)
        })
    }
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
        var n, o, i = [],
            s = !0,
            a = !1;
        try {
            for (r = r.call(e); !(s = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); s = !0);
        } catch (e) {
            a = !0, o = e
        } finally {
            try {
                s || null == r.return || r.return()
            } finally {
                if (a) throw o
            }
        }
        return i
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

function ownKeys(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function _object_spread_props(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
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
}

function _ts_generator(e, t) {
    var r, n, o, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return s.next = a(0), s.throw = a(1), s.return = a(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function a(a) {
        return function(u) {
            return function(a) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; s && (s = 0, a[0] && (i = 0)), i;) try {
                    if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                    switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                        case 0:
                        case 1:
                            o = a;
                            break;
                        case 4:
                            return i.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            i.label++, n = a[1], a = [0];
                            continue;
                        case 7:
                            a = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                i.label = a[1];
                                break
                            }
                            if (6 === a[0] && i.label < o[1]) {
                                i.label = o[1], o = a;
                                break
                            }
                            if (o && i.label < o[2]) {
                                i.label = o[2], i.ops.push(a);
                                break
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    a = t.call(e, i)
                } catch (e) {
                    a = [6, e], n = 0
                } finally {
                    r = o = 0
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
    [2026], {
        32397: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return E
                }
            });
            var n = r(32930),
                o = r(27434),
                i = r(48075),
                s = r.n(i),
                a = r(36350),
                u = r(50874),
                l = r.n(u),
                c = r(5164),
                d = r(5112),
                f = r.n(d),
                h = r(73599),
                v = r(92518),
                p = r(78456),
                b = r(85945),
                w = r(39145),
                g = r.n(w),
                y = r(81433),
                _ = r.n(y),
                m = r(70437),
                j = r.n(m);

            function D(e) {
                var t, r = e.userId,
                    o = e.show,
                    i = e.onClick,
                    s = (0, b.NL)(),
                    a = (0, p.qf)(r, {
                        enabled: o
                    }),
                    u = a.hasNextPage,
                    l = a.isFetchingNextPage,
                    d = a.fetchNextPage,
                    f = a.isError,
                    h = a.data,
                    w = a.isLoading,
                    y = (null == h || null === (t = h.pages) || void 0 === t ? void 0 : t.flatMap(function(e) {
                        return e.openapiRawData
                    })) || [],
                    m = function() {
                        s.invalidateQueries(["followings", r])
                    };
                return (0, n.jsxs)(g(), {
                    useWindow: !1,
                    hasMore: !!u && !l,
                    fetchMore: d,
                    hasError: !!f && !l,
                    children: [y.map(function(e) {
                        return (0, n.jsx)(v.Z, {
                            user: e,
                            followCallback: m,
                            onClick: i
                        }, e.id)
                    }), (w || l) && (0, c.range)(10).map(function(e) {
                        return (0, n.jsxs)(_(), {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            pr: 32,
                            pt: 16,
                            children: [(0, n.jsx)(j(), {
                                width: 40,
                                height: 40,
                                radius: "50%"
                            }), (0, n.jsx)(j(), {
                                width: 80,
                                height: 16
                            })]
                        }, e)
                    })]
                })
            }
            var x = r(92034),
                C = r.n(x),
                k = r(21937),
                Z = r.n(k),
                I = r(88107),
                P = r(45835),
                O = r(89504),
                S = [{
                    value: "follower",
                    title: "دنبال کننده"
                }, {
                    value: "following",
                    title: "دنبال شونده"
                }];

            function N(e) {
                var t = e.show,
                    r = e.onClose,
                    i = e.focusedTab,
                    s = e.onChangeTab,
                    a = e.userId,
                    u = e.hasTab,
                    l = void 0 === u || u,
                    d = (0, I.Z)(),
                    v = (0, P.b)(),
                    p = v.ua,
                    b = v.isWebview;
                (0, o.useEffect)(function() {
                    if (b && window.WebviewInterfaceVersion === O.gO.PARTIAL_WEBVIEW) {
                        var e, r = (0, O.Cw)();
                        null === (e = r.setRefreshEnabled) || void 0 === e || e.call(r, !t)
                    }
                }, [t, b]);
                var w = (0, o.useCallback)(function(e) {
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return r(), [4, (0, c.sleep)(200)];
                                case 1:
                                    return t.sent(), d.push(e), [2]
                            }
                        })
                    })()
                }, [d, r]);
                return (0, o.useEffect)(function() {
                    var e = function() {
                        t && r()
                    };
                    return d.events.on("routeChangeStart", e),
                        function() {
                            d.events.off("routeChangeStart", e)
                        }
                }, [d, t, r]), (0, n.jsxs)(C(), {
                    size: "md",
                    show: t,
                    showClose: !1,
                    onClose: r,
                    className: f().followers,
                    showHeader: !0,
                    children: [l && (0, n.jsx)(Z(), {
                        tabs: S,
                        value: i,
                        fullWidth: !p.isPc,
                        onChange: s,
                        className: f().followers__tabs
                    }), (0, n.jsx)("div", {
                        className: f().followers__wrapper,
                        children: "follower" === i ? (0, n.jsx)(h.Z, {
                            userId: a,
                            show: t,
                            onClick: w
                        }) : (0, n.jsx)(D, {
                            userId: a,
                            show: t,
                            onClick: w
                        })
                    })]
                })
            }
            N.propType = {
                show: l().bool,
                onClose: l().func,
                focusedTab: l().oneOf(S.map(function(e) {
                    return e.value
                }))
            };
            var E = function(e) {
                var t = e.user,
                    r = e.showFollowers,
                    i = void 0 === r || r,
                    u = e.showFollowings,
                    l = void 0 === u || u,
                    c = e.followers,
                    d = void 0 === c ? "دنبال شده‌اید" : c,
                    f = e.followings,
                    h = void 0 === f ? "دنبال کرده‌اید" : f,
                    v = _sliced_to_array((0, o.useState)(""), 2),
                    p = v[0],
                    b = v[1],
                    w = _sliced_to_array((0, a.useDisclosure)(), 2),
                    g = w[0],
                    y = w[1],
                    _ = y.open,
                    m = y.close,
                    j = l && i,
                    D = function(e) {
                        ("follower" !== e || (null == t ? void 0 : t.userFollowerCount)) && ("following" !== e || (null == t ? void 0 : t.userFollowingCount)) && (b(e), _())
                    };
                return (0, n.jsxs)("div", {
                    onClick: function(e) {
                        null == e || e.preventDefault(), null == e || e.stopPropagation()
                    },
                    className: s()["follows-info"],
                    children: [i && (0, n.jsxs)("div", {
                        onClick: function() {
                            return D("follower")
                        },
                        children: [(0, n.jsx)("span", {
                            className: s()["follows-info__follower-count"],
                            children: null == t ? void 0 : t.userFollowerCount
                        }), (0, n.jsx)("span", {
                            children: d
                        })]
                    }), j && (0, n.jsx)("div", {
                        className: s()["follows-info__divider"]
                    }), l && (0, n.jsxs)("div", {
                        onClick: function() {
                            return D("following")
                        },
                        children: [(0, n.jsx)("span", {
                            className: s()["follows-info__following-count"],
                            children: null == t ? void 0 : t.userFollowingCount
                        }), (0, n.jsx)("span", {
                            children: h
                        })]
                    }), g && (0, n.jsx)(N, {
                        show: g,
                        onClose: m,
                        focusedTab: p,
                        userId: null == t ? void 0 : t.id,
                        hasTab: j,
                        onChangeTab: function(e) {
                            b(e)
                        }
                    })]
                })
            }
        },
        95313: function(e, t, r) {
            "use strict";
            r.d(t, {
                Fw: function() {
                    return u
                },
                H6: function() {
                    return s
                },
                IO: function() {
                    return i
                },
                oo: function() {
                    return l
                },
                z$: function() {
                    return a
                }
            });
            var n = r(5164),
                o = r(79614);

            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.DZ.get("/web/v1/badge/vendor/".concat(e, "/badges"), t)
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.DZ.get("/web/v1/badge/vendor/".concat(e, "/all-badges"), t)
            }

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.DZ.get("/web/v1/badge/leaderboard/".concat(e), t)
            }

            function u(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.DZ.get("/web/v1/badge/vendors/".concat(e, "/leaderboard-items"), t)
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o.DZ.get("/web/v1/badge/vendors/badges", _object_spread_props(_object_spread({}, e), {
                    params: (0, n.snakize)(e.params)
                }))
            }
        },
        42358: function(e, t, r) {
            "use strict";
            r.d(t, {
                Eb: function() {
                    return i
                },
                F3: function() {
                    return s
                },
                G$: function() {
                    return l
                },
                Is: function() {
                    return c
                },
                aD: function() {
                    return o
                },
                iA: function() {
                    return a
                },
                rJ: function() {
                    return d
                },
                tG: function() {
                    return u
                },
                x5: function() {
                    return f
                }
            });
            var n = r(79614);

            function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return n.DZ.get("/web/v1/search/product/search?".concat(e), t)
            }

            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return n.DZ.get("/web/v1/search/product/count?".concat(e), t)
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return n.DZ.get("/web/v1/search/product/special?".concat(e), t)
            }

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return n.DZ.post("/web/v1/search/vendor/search", e)
            }

            function u(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return n.DZ.get("/web/v1/search/ac?q=".concat(e, "&is_new_api=").concat(r), t)
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return n.DZ.get("/web/v1/search/product/popular-searches", e)
            }

            function c(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return n.DZ.get("/web/v1/search/product/search", _object_spread({
                    params: e
                }, t))
            }

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return n.DZ.get("/web/v1/search/mlt", {
                    params: e
                })
            }

            function f(e, t) {
                return n.DZ.post("/web/v1/search/image/search", e, {
                    signal: t,
                    timeout: 3e4
                })
            }
        },
        32066: function(e, t, r) {
            "use strict";
            r.d(t, {
                $J: function() {
                    return b
                },
                $f: function() {
                    return l
                },
                A1: function() {
                    return D
                },
                AA: function() {
                    return k
                },
                H4: function() {
                    return E
                },
                Hi: function() {
                    return N
                },
                MB: function() {
                    return C
                },
                N5: function() {
                    return h
                },
                Of: function() {
                    return g
                },
                P6: function() {
                    return O
                },
                Q1: function() {
                    return P
                },
                Q2: function() {
                    return S
                },
                Ru: function() {
                    return w
                },
                TB: function() {
                    return u
                },
                Tw: function() {
                    return I
                },
                Vw: function() {
                    return p
                },
                Y8: function() {
                    return F
                },
                Z6: function() {
                    return a
                },
                d0: function() {
                    return y
                },
                f5: function() {
                    return x
                },
                ie: function() {
                    return j
                },
                kT: function() {
                    return v
                },
                ld: function() {
                    return _
                },
                mu: function() {
                    return s
                },
                qM: function() {
                    return m
                },
                rH: function() {
                    return Z
                },
                tz: function() {
                    return d
                },
                vu: function() {
                    return i
                },
                wJ: function() {
                    return f
                },
                yq: function() {
                    return c
                }
            });
            var n = r(5164),
                o = r(79614);

            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.DZ.get("/web/v1/story/story_data/".concat(e), t)
            }

            function s(e) {
                return o.DZ.get("/web/v1/story/stories/".concat(e))
            }

            function a(e) {
                var t = e.data;
                return o.DZ.post("/web/v1/story/stories/add", t)
            }

            function u(e) {
                return o.DZ.get("/web/v1/story/my-stories", _object_spread({}, e))
            }

            function l(e) {
                return o.DZ.post("/web/v1/story/stories", (0, n.snakize)({
                    userIds: e
                }))
            }

            function c(e) {
                return o.DZ.get("/web/v1/story/hashtag", _object_spread({}, e))
            }

            function d(e) {
                var t = e.vendors,
                    r = e.count;
                return o.DZ.post("/web/v1/story/user-feed", {
                    count: r,
                    vendors: t
                })
            }

            function f(e) {
                var t = e.count,
                    r = e.identifier,
                    i = e.lastRank,
                    s = e.timeout,
                    a = (0, n.snakize)({
                        count: t,
                        lastRank: i,
                        identifier: r
                    });
                return o.DZ.get("/web/v1/story/highlight/read-user-highlights", _object_spread({
                    params: a
                }, s ? {
                    timeout: s
                } : {}))
            }

            function h(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.DZ.post("/web/v1/story/stories/".concat(e, "/seen"), t)
            }

            function v(e) {
                return o.DZ.post("/web/v1/story/stories/".concat(e, "/like"))
            }

            function p(e) {
                return o.DZ.delete("/web/v1/story/stories/".concat(e, "/like"))
            }

            function b(e) {
                return o.DZ.delete("/web/v1/story/stories/".concat(e))
            }

            function w(e) {
                return o.DZ.get("/web/v1/story/follow-service/has-followed-v2/".concat(e))
            }

            function g(e) {
                return o.DZ.post("/web/v1/story/follow-service/follow", (0, n.snakize)(e))
            }

            function y(e) {
                return o.DZ.post("/web/v1/story/follow-service/followers-list", (0, n.snakize)(e))
            }

            function _(e) {
                return o.DZ.post("/web/v1/story/follow-service/followings-list", (0, n.snakize)(e))
            }

            function m(e) {
                return o.DZ.post("/web/v1/story/blocked-users", {
                    target_user_id: e
                })
            }

            function j(e) {
                return o.DZ.delete("/web/v1/story/blocked-users/".concat(e))
            }

            function D(e, t, r) {
                var n = r.signal;
                return o.DZ.get("/web/v1/story/hashtag/autocomplete", {
                    signal: n,
                    params: {
                        substring: e,
                        count: t
                    }
                })
            }

            function x(e) {
                var t = e.data;
                return o.DZ.post("/web/v1/story/reels/", t)
            }

            function C(e, t) {
                var r = e.params;
                return o.DZ.get("/web/v1/story/reels/".concat(t ? "user/".concat(t) : "my-reels"), {
                    params: (0, n.snakize)(r)
                })
            }

            function k(e) {
                return o.DZ.get("/web/v1/story/hashtag/reels", _object_spread({}, e))
            }

            function Z(e) {
                var t = e.productId,
                    r = e.params;
                return o.DZ.get("/web/v1/story/reels/product/".concat(t), {
                    params: (0, n.snakize)(r)
                })
            }

            function I(e) {
                return o.DZ.post("/web/v1/story/reels/product/has-reel", (0, n.snakize)(e))
            }

            function P(e) {
                return o.DZ.get("/web/v1/story/reels/data/".concat(e))
            }

            function O(e) {
                var t = e.params;
                return o.DZ.get("/web/v1/story/reels/top", {
                    params: (0, n.snakize)(t)
                })
            }

            function S(e) {
                var t = e.reelId,
                    r = e.like;
                return o.DZ.post("/web/v1/story/reels/".concat(t, "/like"), {
                    like: r
                })
            }

            function N(e) {
                return o.DZ.post("/web/v1/story/reels/".concat(e, "/seen"))
            }

            function E(e) {
                return o.DZ.delete("/web/v1/story/reels/".concat(e))
            }

            function F(e) {
                return o.DZ.post("/web/v1/story/add-story/reel/".concat(e))
            }
        },
        55633: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return p
                }
            });
            var n = r(2134),
                o = r.n(n),
                i = r(5164),
                s = r(36350),
                a = r(84581),
                u = r(88592),
                l = r(61262),
                c = r(88107),
                d = r(45835),
                f = r(89504),
                h = r(60802),
                v = r(27434);

            function p() {
                var e, t = (0, c.Z)(),
                    r = (0, v.useRef)(!1),
                    n = (0, d.b)().isWebview,
                    p = (0, h.l)(),
                    b = p.runGBTest,
                    w = p.getFeatureValue,
                    g = p.evaluateGBTest,
                    y = o()().publicRuntimeConfig,
                    _ = (0, l.B)().authForm.toggleModal,
                    m = (0, s.useSnackbar)().showSuccessSnackbar,
                    j = (0, u.M_)(["isLoggedIn", "currentUser", "isVendor"]),
                    D = j.isLoggedIn,
                    x = j.currentUser,
                    C = j.isVendor,
                    k = null === (e = b("test_header_direct_login_to_vendor", !1)) || void 0 === e ? void 0 : e.value,
                    Z = (0, v.useMemo)(function() {
                        var e;
                        return null === (e = (0, i.camelize)(w("vendor_creation_flags"))) || void 0 === e ? void 0 : e.vendorCreate
                    }, [w]),
                    I = (0, v.useCallback)(function() {
                        if ((0, a.s)("createVendorClick", {
                                location: "header"
                            }), r.current = !0, x) {
                            var e = "".concat(y.vendorDashboardUrl).concat((null == x ? void 0 : x.vendor) ? "/dashboard" : "/create-vendor");
                            n ? null === f.Hr || void 0 === f.Hr || (0, f.Hr)(e) : window.location.href = e
                        }
                    }, [x, y.vendorDashboardUrl, n]);
                (0, v.useEffect)(function() {
                    x && r.current && I()
                }, [x, I]);
                return {
                    handleCreateVendorClickBtn: function() {
                        C ? n ? (0, f.Hr)(y.vendorDashboardUrl) : window.location.href = y.vendorDashboardUrl : (g("test_header_direct_login_to_vendor"), "indirect" === k ? ((0, a.s)("createVendorClick", {
                            location: "header"
                        }), t.push("/landings/create-vendor")) : "direct" === k && (Z ? m("در حال حاضر امکان ساخت غرفه وجود ندارد.") : D ? I() : _({
                            callback: function() {
                                return I()
                            }
                        })))
                    }
                }
            }
        },
        61033: function(e, t, r) {
            "use strict";
            var n = r(5164),
                o = 0;
            t.Z = {
                bindEvents: function() {
                    this.header && window.addEventListener("scroll", this.pageScroll.bind(this))
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dynamic";
                    if (!(0, n.elementHasClass)(document.body, "purepage") && (this.mode = t, this.body = document.querySelector("body"), this.header = document.querySelector("#header"), this.headerPlaceholder = document.querySelector("#header-placeholder"), this.header && this.headerPlaceholder))
                        if (this.styles = e, this.headerPlaceholder.style.height = "".concat((0, n.getElementOuterHeight)(this.header), "px"), "dynamic" === t) this.isFixed = !1, this.isVisible = !1, this.bindEvents(), this.pageScroll();
                        else if ("static" === t) {
                        var r = this.header.getBoundingClientRect().top;
                        this.isFixed = !0, this.isVisible = !0, this.header.style.top = "0", this.header.style.left = "0", (0, n.addClass)(this.body, "header-show"), (0, n.addClass)(this.header, "header-static"), 0 === r ? (this.headerPlaceholder.style.display = "block", this.header.style.position = "fixed") : (this.headerPlaceholder.style.display = "inline", this.bindEvents())
                    }
                },
                pageScroll: function() {
                    var e = window.pageYOffset;
                    if ("static" !== this.mode) e > Number(this.header.offsetHeight) ? ((0, n.addClass)(this.body, "header-fixed"), (0, n.addClass)(this.header, this.styles["header--fixed"]), (0, n.addClass)(this.headerPlaceholder, this.styles["header-placeholder--fixed"]), this.isFixed = !0, e < o - 120 ? (o = e, this.isVisible = !0, window.isHeaderVisible = !0, (0, n.addClass)(this.body, "header-show"), (0, n.addClass)(this.header, this.styles["header--fixed-show"])) : e > o + 100 && ((0, n.removeClass)(this.header, this.styles["header--fixed-show"]), (0, n.removeClass)(this.body, "header-show"), o = e, this.isVisible = !1, window.isHeaderVisible = !1)) : (e <= this.headerPlaceholder.offsetTop || this.isFixed && !this.isVisible && e <= this.headerPlaceholder.offsetTop + this.headerPlaceholder.offsetHeight) && ((0, n.removeClass)(this.body, "header-fixed"), (0, n.removeClass)(this.header, this.styles["header--fixed"]), (0, n.removeClass)(this.headerPlaceholder, this.styles["header-placeholder--fixed"]), (0, n.removeClass)(this.header, this.styles["header--fixed-show"]), (0, n.addClass)(this.body, "header-show"), this.isFixed = !1, this.isVisible = !1, o = e);
                    else {
                        var t = this.header.getBoundingClientRect().top;
                        this.headerPlaceholder.getBoundingClientRect().top >= 0 ? (this.headerPlaceholder.style.display = "inline", this.header.style.position = "relative") : t <= 0 && (this.headerPlaceholder.style.display = "block", this.header.style.position = "fixed")
                    }
                }
            }
        },
        78456: function(e, t, r) {
            "use strict";
            r.d(t, {
                C5: function() {
                    return w
                },
                K9: function() {
                    return b
                },
                Kn: function() {
                    return h
                },
                VL: function() {
                    return v
                },
                dU: function() {
                    return c
                },
                jc: function() {
                    return p
                },
                lq: function() {
                    return d
                },
                qf: function() {
                    return f
                }
            });
            var n = r(82623),
                o = r(42358),
                i = r(81030),
                s = r(95313),
                a = r(67938),
                u = r(63729),
                l = r(32066),
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, a.aM)(["vendor-products", e], function() {
                        return (0, o.aD)((0, i.Z)({
                            size: 4,
                            from: 0,
                            filters: {
                                vendorIdentifier: e
                            }
                        }))
                    }, t)
                },
                d = function(e) {
                    var t = e.userId,
                        r = e.followerIds,
                        n = void 0 === r ? [] : r,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, a.NS)(_object_spread({
                        queryKey: ["followers", t, n.toString()],
                        queryFn: function(e) {
                            var r = e.pageParam,
                                o = void 0 === r ? 0 : r;
                            return (0, l.d0)({
                                userId: t,
                                offset: o,
                                limit: 10,
                                userIds: n
                            })
                        },
                        getNextPageParam: function(e, t) {
                            var r = t.flatMap(function(e) {
                                    return e.openapiRawData
                                }),
                                n = null == e ? void 0 : e.openapiRawData;
                            return 10 === (null == n ? void 0 : n.length) && r.length
                        }
                    }, o))
                },
                f = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, a.NS)(_object_spread({
                        queryKey: ["followings", e],
                        queryFn: function(t) {
                            var r = t.pageParam;
                            return (0, l.ld)({
                                userId: e,
                                offset: r || 0,
                                limit: 10
                            })
                        },
                        getNextPageParam: function(e, t) {
                            var r = t.flatMap(function(e) {
                                    return e.openapiRawData
                                }),
                                n = null == e ? void 0 : e.openapiRawData;
                            return 10 === (null == n ? void 0 : n.length) ? r.length : void 0
                        }
                    }, t))
                },
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Db)(["follow-unfollow-user"], l.Of, e)
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.aM)(["unreviewed-count"], function() {
                        return (0, n.sE)({
                            limit: 1,
                            offset: 0
                        })
                    }, e)
                },
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.aM)(["notif-settings"], u.Gi, _object_spread_props(_object_spread({}, e), {
                        select: function(e) {
                            return (null == e ? void 0 : e.openapi_raw_data) || []
                        }
                    }))
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Db)(_object_spread({
                        mutationFn: u.f2
                    }, e))
                },
                w = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, a.aM)(["vendor-leaderboard", e], function() {
                        return (0, s.Fw)(e)
                    }, t)
                }
        },
        92518: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return y
                }
            });
            var n = r(32930),
                o = r(27434),
                i = r(2347),
                s = r(26695),
                a = r.n(s),
                u = r(84581),
                l = r(58271),
                c = r(88592),
                d = r(78456),
                f = r(45835),
                h = r(61262),
                v = r(34641),
                p = r(55253),
                b = r.n(p),
                w = r(65074),
                g = r.n(w);

            function y(e) {
                var t, r, s = e.user,
                    p = e.followCallback,
                    w = e.onClick,
                    y = (0, f.b)().isWebview,
                    _ = (0, h.B)().dalan.openChatModal,
                    m = (0, c.M_)(["currentUser", "isLoggedIn"]),
                    j = m.currentUser,
                    D = m.isLoggedIn,
                    x = (0, h.B)().authForm.toggleModal,
                    C = _sliced_to_array((0, o.useState)(s.isFollowedByCurrentUser), 2),
                    k = C[0],
                    Z = C[1],
                    I = (0, d.Kn)(),
                    P = I.mutate,
                    O = I.isLoading;
                return (0, n.jsxs)("div", {
                    className: a().user,
                    children: [(0, n.jsx)("div", {
                        onClick: function() {
                            w(s.vendor ? "/".concat(s.vendor.identifier) : (0, v.j)(s))
                        },
                        className: a().user__link,
                        children: (0, n.jsx)(b(), {
                            size: "40",
                            src: null == s || null === (t = s.avatar) || void 0 === t ? void 0 : t.small
                        })
                    }), s.name, s.id !== (null == j ? void 0 : j.id) && (!k && (null === (r = s.vendor) || void 0 === r ? void 0 : r.isActive) ? (0, n.jsx)(g(), {
                        size: "sm",
                        color: "secondary",
                        variant: "outline",
                        className: a().user__button,
                        label: "دنبال کنید",
                        loading: O,
                        onClick: function() {
                            D ? P({
                                action: "follow",
                                targetUserHashid: s.hashId
                            }, {
                                onError: l.S_,
                                onSuccess: function() {
                                    Z(function(e) {
                                        return !e
                                    }), null == p || p()
                                }
                            }) : x()
                        }
                    }) : (0, n.jsx)(g(), {
                        size: "sm",
                        color: "secondary",
                        variant: "outline",
                        className: a().user__button,
                        label: "گفت‌وگو",
                        href: "/account/chats/".concat(s.hashId),
                        component: y ? i.Z : "button",
                        onClick: function() {
                            var e;
                            D ? y || (_(s.hashId), (0, u.s)("chatOpen", {
                                productId: null,
                                receiverId: null == s ? void 0 : s.id,
                                comesFrom: "follow-modal",
                                receiverIsVendor: !!(null == s ? void 0 : s.vendor),
                                receiverVendorId: null == s || null === (e = s.vendor) || void 0 === e ? void 0 : e.id
                            })) : x()
                        }
                    }))]
                })
            }
        },
        73599: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return v
                }
            });
            var n = r(32930),
                o = r(92518),
                i = r(5164),
                s = r(78456),
                a = r(85945),
                u = r(81433),
                l = r.n(u),
                c = r(39145),
                d = r.n(c),
                f = r(70437),
                h = r.n(f);

            function v(e) {
                var t, r = e.userId,
                    u = e.show,
                    c = e.followerIds,
                    f = e.onClick,
                    v = (0, a.NL)(),
                    p = (0, s.lq)({
                        userId: r,
                        followerIds: c
                    }, {
                        enabled: u
                    }),
                    b = p.hasNextPage,
                    w = p.isFetchingNextPage,
                    g = p.fetchNextPage,
                    y = p.isError,
                    _ = p.isLoading,
                    m = p.data,
                    j = (null == m || null === (t = m.pages) || void 0 === t ? void 0 : t.flatMap(function(e) {
                        return e.openapiRawData
                    })) || [],
                    D = function() {
                        v.invalidateQueries(["followers", r, (c || []).toString()])
                    };
                return (0, n.jsxs)(d(), {
                    useWindow: !1,
                    hasMore: !!b && !w,
                    fetchMore: g,
                    hasError: !!y && !w,
                    children: [j.map(function(e) {
                        return (0, n.jsx)(o.Z, {
                            user: e,
                            onClick: f,
                            followCallback: D
                        }, e.id)
                    }), (_ || w) && (0, i.range)(10).map(function(e) {
                        return (0, n.jsxs)(l(), {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            pr: 32,
                            pt: 16,
                            children: [(0, n.jsx)(h(), {
                                width: 40,
                                height: 40,
                                radius: "50%"
                            }), (0, n.jsx)(h(), {
                                width: 80,
                                height: 16
                            })]
                        }, e)
                    })]
                })
            }
        },
        81030: function(e, t, r) {
            "use strict";
            var n = r(246),
                o = r.n(n);
            t.Z = function(e) {
                return o().stringify(e, {
                    arrayFormat: "comma",
                    allowDots: !0
                })
            }
        },
        34641: function(e, t, r) {
            "use strict";

            function n(e) {
                if (null == e ? void 0 : e.username) return "https://basalam.com/@".concat(e.username);
                if (null == e ? void 0 : e.hashId) {
                    var t = e.hashId;
                    return "https://basalam.com/user/".concat(t)
                }
                return "#"
            }
            r.d(t, {
                j: function() {
                    return n
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
        },
        24654: function() {}
    }
]);