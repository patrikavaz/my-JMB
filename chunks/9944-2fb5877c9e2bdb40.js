function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
    return n
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function _define_property(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e
}

function _iterable_to_array(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _iterable_to_array_limit(e, r) {
    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != t) {
        var n, o, a = [],
            i = !0,
            u = !1;
        try {
            for (t = t.call(e); !(i = (n = t.next()).done) && (a.push(n.value), !r || a.length !== r); i = !0);
        } catch (e) {
            u = !0, o = e
        } finally {
            try {
                i || null == t.return || t.return()
            } finally {
                if (u) throw o
            }
        }
        return a
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
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

function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), t.push.apply(t, n)
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

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
}

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _array_like_to_array(e, r) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9944], {
        56345: function(e, r, t) {
            "use strict";
            t.d(r, {
                c: function() {
                    return o
                },
                F: function() {
                    return n
                }
            });
            var n = {
                    src: "/charsou-assets/3.45.20/_next/static/media/default-image.aa5c295a.webp",
                    height: 500,
                    width: 500,
                    blurDataURL: "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoIAAgAAkA4JaQAA3AA/vpUDm/IJayGCiAAAA==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                o = {
                    src: "/charsou-assets/3.45.20/_next/static/media/default-avatar.6647bbbb.webp",
                    height: 100,
                    width: 100,
                    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBIAAAABD3Dk/4iIIBBIVs99iIj+hwZWUDggNgAAAPABAJ0BKggACAACQDglpAAPgBCR9DNVAAD+/Pcih+6N6tuNTHR1rB+Mul7iZyljFb5laUAAAA==",
                    blurWidth: 8,
                    blurHeight: 8
                }
        },
        95313: function(e, r, t) {
            "use strict";
            t.d(r, {
                Fw: function() {
                    return l
                },
                H6: function() {
                    return i
                },
                IO: function() {
                    return a
                },
                oo: function() {
                    return s
                },
                z$: function() {
                    return u
                }
            });
            var n = t(5164),
                o = t(79614);

            function a(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.DZ.get("/web/v1/badge/vendor/".concat(e, "/badges"), r)
            }

            function i(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.DZ.get("/web/v1/badge/vendor/".concat(e, "/all-badges"), r)
            }

            function u(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.DZ.get("/web/v1/badge/leaderboard/".concat(e), r)
            }

            function l(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.DZ.get("/web/v1/badge/vendors/".concat(e, "/leaderboard-items"), r)
            }

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o.DZ.get("/web/v1/badge/vendors/badges", _object_spread_props(_object_spread({}, e), {
                    params: (0, n.snakize)(e.params)
                }))
            }
        },
        39953: function(e, r, t) {
            "use strict";
            t.d(r, {
                z: function() {
                    return o
                }
            });
            var n = t(79614);

            function o(e, r, t) {
                return n.DZ.post("/web/v1/uploadio/store-file", e, {
                    timeout: 0,
                    onUploadProgress: t,
                    processData: !1,
                    contentType: !1,
                    signal: null == r ? void 0 : r.signal
                })
            }
        },
        23489: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return c
                }
            });
            var n = t(32930),
                o = t(40877),
                a = t(97271),
                i = t.n(a),
                u = t(65074),
                l = t.n(u),
                s = t(45835);

            function c() {
                var e = (0, s.b)().ua;
                return (0, n.jsx)(l(), {
                    square: !0,
                    icon: "bi-angle-up",
                    size: e.isPc ? "lg" : "md",
                    className: (0, o.Z)("jump-to-top-button", i()["jump-to-top-button"]),
                    onClick: function() {
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        })
                    }
                })
            }
        },
        50112: function(e, r, t) {
            "use strict";
            t.d(r, {
                AV: function() {
                    return n
                },
                Bt: function() {
                    return s
                },
                U$: function() {
                    return i
                },
                hz: function() {
                    return a
                },
                oW: function() {
                    return u
                },
                uX: function() {
                    return l
                },
                xw: function() {
                    return o
                }
            });
            var n = 2,
                o = 3,
                a = "userCity",
                i = "productShippingTooltip",
                u = Object.freeze({
                    NO_INFO: "no_info",
                    OLD_INFO: "old_info",
                    FULL_INFO: "full_info",
                    JUST_FREE_SHIPPING: "just_free_shipping"
                }),
                l = Object.freeze({
                    FREE: "free",
                    PAID: "paid"
                }),
                s = Object.freeze({
                    DAY: "روزه",
                    HOUR: "ساعته"
                })
        },
        30257: function(e, r, t) {
            "use strict";
            t.d(r, {
                OW: function() {
                    return c
                },
                jB: function() {
                    return h
                },
                xL: function() {
                    return w
                },
                oR: function() {
                    return f
                },
                y0: function() {
                    return b
                },
                Vr: function() {
                    return g
                },
                $G: function() {
                    return p
                },
                XT: function() {
                    return _
                },
                c: function() {
                    return m
                },
                rv: function() {
                    return v
                },
                pW: function() {
                    return j
                },
                Cn: function() {
                    return y
                },
                Ly: function() {
                    return A
                },
                uU: function() {
                    return d
                }
            });
            var n = t(17902),
                o = t(13014),
                a = t(39953),
                i = t(88107),
                u = t(59403),
                l = t(36492),
                s = t(32066),
                c = function() {
                    return (0, n.Db)(["add-reel"], s.f5)
                },
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, n.Db)(function(e) {
                        var r = e.data,
                            t = e.controller,
                            n = e.onProgress;
                        return (0, a.z)(r, t, n)
                    }, e)
                },
                _ = function(e) {
                    var r = e.limit,
                        t = void 0 === r ? 6 : r,
                        n = e.options,
                        a = void 0 === n ? {} : n,
                        i = e.userId,
                        l = void 0 === i ? null : i,
                        c = e.enabled,
                        d = void 0 !== c && c,
                        _ = e.isConfirmed,
                        p = void 0 === _ || _;
                    return (0, u.N)(_object_spread({
                        enabled: !!d,
                        select: function(e) {
                            return function(e) {
                                return _object_spread_props(_object_spread({}, e), {
                                    pages: e.pages.map(function(e) {
                                        return _object_spread_props(_object_spread({}, e), {
                                            reels: e.reels.map(function(r) {
                                                var t;
                                                return _object_spread_props(_object_spread({}, r), {
                                                    isFrom: "tab",
                                                    user: e.user,
                                                    instance: "reel",
                                                    seen: r.seenCount,
                                                    like: r.likeCount,
                                                    link: null !== (t = r.metadata.link) && void 0 !== t ? t : null
                                                })
                                            })
                                        })
                                    })
                                })
                            }(e)
                        },
                        getNextPageParam: function(e) {
                            return e.reels.length === t ? e.lastIdx : void 0
                        },
                        queryKey: ["reels"].concat(_to_consumable_array(l ? [o.d.user_reels, l] : [o.d.owner_reels, p])),
                        queryFn: function(e) {
                            var r = e.pageParam,
                                n = void 0 === r ? 0 : r;
                            return (0, s.MB)({
                                params: {
                                    limit: t,
                                    isConfirmed: p,
                                    lastIdx: n
                                }
                            }, l)
                        }
                    }, a))
                },
                p = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, l.a)(_object_spread({
                        queryFn: function() {
                            return (0, s.Q1)(e)
                        },
                        select: function(e) {
                            return function(e) {
                                var r, t;
                                return _object_spread_props(_object_spread({}, e), {
                                    isFrom: "share",
                                    instance: "reel",
                                    seen: e.seenCount,
                                    like: e.likeCount,
                                    link: null !== (t = null === (r = e.metadata) || void 0 === r ? void 0 : r.link) && void 0 !== t ? t : null
                                })
                            }(e)
                        },
                        queryKey: ["reels", o.d.single_reels, e]
                    }, r))
                },
                f = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, u.N)(_object_spread({
                        select: function(e) {
                            return function(e) {
                                return _object_spread_props(_object_spread({}, e), {
                                    pages: e.pages.map(function(e) {
                                        return _object_spread_props(_object_spread({}, e), {
                                            reels: e.reels.map(function(e) {
                                                var r;
                                                return _object_spread_props(_object_spread({}, e), {
                                                    instance: "reel",
                                                    seen: e.seenCount,
                                                    like: e.likeCount,
                                                    isFrom: "discovery-hashtag",
                                                    link: null !== (r = e.metadata.link) && void 0 !== r ? r : null
                                                })
                                            })
                                        })
                                    })
                                })
                            }(e)
                        },
                        queryKey: ["reels", o.d.hashtag_reels, e],
                        queryFn: function(r) {
                            var t = r.pageParam,
                                n = void 0 === t ? 0 : t;
                            return (0, s.AA)({
                                params: {
                                    hashtag: e,
                                    last_id: n
                                }
                            })
                        },
                        getNextPageParam: function(e) {
                            return e.lastId > 0 ? e.lastId : void 0
                        }
                    }, r))
                },
                b = function(e) {
                    var r = e.productId,
                        t = e.limit,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, u.N)(_object_spread({
                        select: function(e) {
                            return function(e) {
                                return _object_spread_props(_object_spread({}, e), {
                                    pages: e.pages.map(function(e) {
                                        return _object_spread_props(_object_spread({}, e), {
                                            reels: e.reels.map(function(e) {
                                                var r;
                                                return _object_spread_props(_object_spread({}, e), {
                                                    instance: "reel",
                                                    isFrom: "product",
                                                    seen: e.seenCount,
                                                    like: e.likeCount,
                                                    link: null !== (r = e.metadata.link) && void 0 !== r ? r : null
                                                })
                                            })
                                        })
                                    })
                                })
                            }(e)
                        },
                        queryKey: ["reels", o.d.product_reels, r],
                        getNextPageParam: function(e) {
                            return e.lastIdx > 0 ? e.lastIdx : void 0
                        },
                        queryFn: function(e) {
                            var n = e.pageParam,
                                o = void 0 === n ? 0 : n;
                            return (0, s.rH)({
                                productId: r,
                                params: {
                                    last_idx: o,
                                    limit: t
                                }
                            })
                        }
                    }, n))
                },
                v = function(e) {
                    var r = e.isFrom,
                        t = void 0 === r ? "default" : r,
                        n = e.payload,
                        a = void 0 === n ? {} : n,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        u = (null == t ? void 0 : t.startsWith("top")) ? t : "top-".concat(t);
                    return (0, l.a)(_object_spread({
                        queryKey: ["reels", o.d.top_reels, u],
                        select: function(e) {
                            return function(e, r) {
                                var t;
                                return null === (t = e.openapiRawData) || void 0 === t ? void 0 : t.map(function(e) {
                                    var t, n;
                                    return _object_spread_props(_object_spread({}, e), {
                                        isFrom: r,
                                        instance: "reel",
                                        seen: e.seenCount,
                                        like: e.likeCount,
                                        link: null !== (n = null === (t = e.metadata) || void 0 === t ? void 0 : t.link) && void 0 !== n ? n : null
                                    })
                                })
                            }(e, u)
                        },
                        queryFn: function() {
                            return (0, s.P6)(_object_spread({
                                count: 15,
                                component: "top",
                                where: {
                                    typeFilter: ["review"]
                                }
                            }, a))
                        }
                    }, i))
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = (0, i.Z)();
                    return (0, l.a)(_object_spread({
                        enabled: !1,
                        initialData: [],
                        queryFn: function() {
                            return []
                        },
                        queryKey: ["reels", o.d.products_has_reels, null == r ? void 0 : r.asPath]
                    }, e))
                },
                y = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return (0, u.N)(_object_spread({
                        enabled: !!e,
                        select: function(e) {
                            return function(e) {
                                return _object_spread_props(_object_spread({}, e), {
                                    pages: e.pages.map(function(e) {
                                        var r;
                                        return _object_spread_props(_object_spread({}, e), {
                                            reels: null == e || null === (r = e.reels) || void 0 === r ? void 0 : r.map(function(e) {
                                                var r, t;
                                                return _object_spread_props(_object_spread({}, e), {
                                                    instance: "reel",
                                                    isFrom: "search",
                                                    seen: e.seenCount,
                                                    like: e.likeCount,
                                                    link: null !== (t = null === (r = e.metadata) || void 0 === r ? void 0 : r.link) && void 0 !== t ? t : null
                                                })
                                            })
                                        })
                                    })
                                })
                            }(e)
                        },
                        queryKey: ["reels", o.d.search_reels, e],
                        getNextPageParam: function(e, t) {
                            return e.reels.length === r ? t.length + 1 : void 0
                        },
                        queryFn: function(t) {
                            var n = t.pageParam,
                                o = void 0 === n ? 1 : n;
                            return (0, s.aV)({
                                query: e,
                                limit: r,
                                offset: (o - 1) * r
                            })
                        }
                    }, t))
                },
                m = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, l.a)(_object_spread({
                        queryFn: function() {
                            return (0, s.xJ)({
                                params: {
                                    query: e
                                }
                            })
                        },
                        queryKey: ["reels", o.d.search_score_reels, e]
                    }, r))
                },
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, n.Db)(s.Y8, e)
                },
                A = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, n.Db)(s.Hi, e)
                },
                j = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, n.Db)(s.Q2, e)
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, n.Db)(s.H4, e)
                }
        },
        25977: function(e, r, t) {
            "use strict";
            t.d(r, {
                O: function() {
                    return s
                }
            });
            var n = t(27434),
                o = t(30257),
                a = t(88592),
                i = t(39029),
                u = t(88107),
                l = t(60802);

            function s(e) {
                var r, t, s, c, d = (0, u.Z)(),
                    _ = (0, a.M_)(["userId", "currentUser"]),
                    p = _.userId,
                    f = _.currentUser,
                    b = null == d || null === (r = d.query) || void 0 === r ? void 0 : r.vendorIdentifier,
                    v = (0, i.b)(b),
                    g = v.data,
                    y = v.isLoading,
                    m = p === (null == g || null === (t = g.user) || void 0 === t ? void 0 : t.id) || !b && "reels" === d.query.tab,
                    h = (0, o.XT)({
                        enabled: !(y || !e),
                        userId: m ? null : null == g || null === (s = g.user) || void 0 === s ? void 0 : s.id
                    }),
                    A = h.data,
                    j = h.isLoading,
                    w = _sliced_to_array(function(e) {
                        var r = (0, l.l)().getFeatureValue,
                            t = (0, n.useMemo)(function() {
                                return r("reels_configs") || {}
                            }, [r]);
                        return (0, n.useMemo)(function() {
                            return e.map(function(e) {
                                return t[e]
                            }) || []
                        }, [e, t])
                    }(["vendor_tutorials", "can_create", "can_import_from_instagram", "discovery_reels", "pdp_reels", "max_upload", "search_item"]), 7),
                    C = w[0],
                    k = w[1],
                    I = w[2],
                    O = w[3],
                    P = w[4],
                    D = w[5],
                    F = w[6],
                    q = (0, n.useMemo)(function() {
                        var r, t, n = null == A || null === (t = A.pages) || void 0 === t || null === (r = t[0]) || void 0 === r ? void 0 : r.metadata;
                        if (!e || !n) return {
                            reelsCheckingCount: 0,
                            reelsConfirmedCount: 0
                        };
                        var o = n.countConfirmed;
                        return {
                            reelsCheckingCount: n.countChecking,
                            reelsConfirmedCount: o
                        }
                    }, [e, null == A ? void 0 : A.pages]),
                    R = q.reelsConfirmedCount,
                    S = q.reelsCheckingCount,
                    U = (null == f || null === (c = f.vendor) || void 0 === c ? void 0 : c.isActive) && k;
                return {
                    isLoading: y || j,
                    isReelsOwner: m,
                    isReelsCreator: U,
                    reelsCheckingCount: S,
                    canWatchReelsInPdp: P,
                    maxUploadReelsCount: D,
                    reelsConfirmedCount: R,
                    showReelsInDiscovery: U || O,
                    canImportFromInstagram: I,
                    canWatchReelsInDiscovery: O,
                    canWatchReelsInSearchItem: F,
                    canWatchReelsTutorialInTab: C
                }
            }
        },
        39029: function(e, r, t) {
            "use strict";
            t.d(r, {
                b: function() {
                    return i
                }
            });
            var n = t(17902),
                o = t(5164),
                a = t(34e3),
                i = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return (0, n.aM)(["vendor", e], function() {
                        return (0, a.Ot)(_object_spread_props(_object_spread({}, r), {
                            params: {
                                identifiers: e
                            }
                        }))
                    }, _object_spread_props(_object_spread({
                        enabled: !!e
                    }, t), {
                        select: function(e) {
                            var r, t = null === (r = e.data) || void 0 === r ? void 0 : r[0];
                            return Array.isArray(null == t ? void 0 : t.homeTabSettings) && (t.homeTabSettings = (0, o.arrayToObject)(t.homeTabSettings, "name")), t
                        }
                    }))
                }
        },
        97271: function(e) {
            e.exports = {
                "jump-to-top-button": "D1qB_U"
            }
        }
    }
]);