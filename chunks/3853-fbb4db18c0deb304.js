function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
    return t
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function _define_property(e, r, n) {
    return r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = n, e
}

function _iterable_to_array(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _object_spread(e) {
    for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), t.forEach(function(r) {
            _define_property(e, r, n[r])
        })
    }
    return e
}

function ownKeys(e, r) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        r && (t = t.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), n.push.apply(n, t)
    }
    return n
}

function _object_spread_props(e, r) {
    return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
    }), e
}

function _object_without_properties(e, r) {
    if (null == e) return {};
    var n, t, o = _object_without_properties_loose(e, r);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (t = 0; t < s.length; t++) n = s[t], r.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
}

function _object_without_properties_loose(e, r) {
    if (null == e) return {};
    var n, t, o = {},
        s = Object.keys(e);
    for (t = 0; t < s.length; t++) n = s[t], r.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
}

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
}

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _array_like_to_array(e, r) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3853], {
        39953: function(e, r, n) {
            "use strict";
            n.d(r, {
                z: function() {
                    return o
                }
            });
            var t = n(79614);

            function o(e, r) {
                return t.DZ.post("/web/v1/uploadio/store-file", e, {
                    timeout: 0,
                    processData: !1,
                    contentType: !1,
                    signal: null == r ? void 0 : r.signal
                })
            }
        },
        21318: function(e, r, n) {
            "use strict";
            n.d(r, {
                w: function() {
                    return a
                }
            }), n(67938), n(3087);
            var t = n(59403),
                o = n(5164),
                s = n(79614),
                i = function(e) {
                    return _object_spread_props(_object_spread({}, e), {
                        pages: e.pages.map(function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                components: e.components.map(function(e) {
                                    var r;
                                    return "reel" === e.type ? _object_spread_props(_object_spread({}, e), {
                                        reel: _object_spread_props(_object_spread({}, e.reel), {
                                            instance: "reel",
                                            isFrom: "discovery",
                                            like: e.reel.likeCount,
                                            seen: e.reel.seenCount,
                                            link: null !== (r = e.reel.metadata.link) && void 0 !== r ? r : null
                                        })
                                    }) : e
                                })
                            })
                        })
                    })
                };

            function a(e) {
                var r = e.isDesktop,
                    n = e.hasReels,
                    a = e.enabled,
                    u = void 0 === a || a,
                    l = e.limited,
                    c = void 0 !== l && l;
                return (0, t.N)({
                    enabled: u,
                    queryKey: ["mixed-page-discovery"],
                    select: function(e) {
                        return i(e)
                    },
                    queryFn: function(e) {
                        var t = e.pageParam;
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = e.params,
                                n = void 0 === r ? {} : r,
                                t = _object_without_properties(e, ["params"]);
                            return s.DZ.get("/web/v1/discovery/mixed_discovery_handler", _object_spread_props(_object_spread({}, t), {
                                params: (0, o.snakize)(n)
                            }))
                        }({
                            params: {
                                hasReels: n,
                                isDesktop: r,
                                nextCompIdx: void 0 === t ? 0 : t
                            }
                        })
                    },
                    getNextPageParam: function(e) {
                        var r;
                        return c ? e.nextComponentIndex <= 1 ? e.nextComponentIndex : void 0 : null !== (r = e.nextComponentIndex) && void 0 !== r ? r : void 0
                    }
                })
            }
        },
        83642: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return u
                }
            });
            var t = n(32930),
                o = n(65074),
                s = n.n(o),
                i = n(81433),
                a = n.n(i);

            function u(e) {
                var r = e.fetch;
                return (0, t.jsx)(a(), {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0, t.jsx)(s(), {
                        onClick: function() {
                            return null == r ? void 0 : r()
                        },
                        children: "تلاش مجدد "
                    })
                })
            }
        },
        65817: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return m
                }
            });
            var t = n(32930),
                o = n(40877),
                s = n(27434),
                i = n(5164),
                a = n(82549),
                u = n.n(a),
                l = n(45835),
                c = n(81433),
                d = n.n(c),
                _ = n(177),
                p = n.n(_),
                v = n(70437),
                f = n.n(v);

            function m(e) {
                var r = e.hasReels,
                    n = e.className,
                    a = (0, l.b)().ua;
                return (0, t.jsxs)(p(), {
                    className: (0, o.Z)(u().discovery__skeleton, n),
                    children: [r && (0, t.jsxs)(d(), {
                        className: u()["discovery__skeleton-reals"],
                        children: [(0, t.jsx)(d(), {
                            mb: 14,
                            children: (0, t.jsx)(f(), {
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)",
                                width: 150,
                                height: 36
                            })
                        }), (0, t.jsx)(d(), {
                            display: "flex",
                            className: u()["discovery__skeleton-reals-items"],
                            children: (0, i.range)(a.isPc ? 4 : 3).map(function(e, r) {
                                return (0, t.jsx)("div", {
                                    className: u()["discovery__skeleton-reals-item"],
                                    children: (0, t.jsx)(f(), {
                                        className: u()["discovery__skeleton-reals-item-img"],
                                        waveColor: "var(--gray-200)",
                                        backgroundColor: "var(--gray-100)"
                                    })
                                }, r)
                            })
                        })]
                    }), (0, i.range)(6).map(function(e, r) {
                        return (0, t.jsx)(s.Fragment, {
                            children: (0, t.jsx)(f(), {
                                className: u()["discovery__skeleton-item"],
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)"
                            })
                        }, r)
                    })]
                })
            }
        },
        70157: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return v
                }
            });
            var t = n(32930),
                o = n(2389),
                s = n.n(o),
                i = s()(function() {
                    return n.e(4164).then(n.bind(n, 14164))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [14164]
                        }
                    },
                    ssr: !1
                }),
                a = s()(function() {
                    return n.e(5627).then(n.bind(n, 75627))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [75627]
                        }
                    },
                    ssr: !1
                }),
                u = s()(function() {
                    return n.e(9745).then(n.bind(n, 69745))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [69745]
                        }
                    },
                    ssr: !1
                }),
                l = s()(function() {
                    return Promise.all([n.e(3620), n.e(2776)]).then(n.bind(n, 12776))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [12776]
                        }
                    },
                    ssr: !1
                }),
                c = s()(function() {
                    return Promise.all([n.e(3620), n.e(9928)]).then(n.bind(n, 59928))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [59928]
                        }
                    },
                    ssr: !1
                }),
                d = s()(function() {
                    return Promise.all([n.e(3620), n.e(8978)]).then(n.bind(n, 48978))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [48978]
                        }
                    },
                    ssr: !1
                }),
                _ = s()(function() {
                    return n.e(9217).then(n.bind(n, 59217))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [59217]
                        }
                    },
                    ssr: !1
                }),
                p = new Set(["product", "story", "hashtags", "tag", "stories", "vendor", "reel"]);

            function v(e) {
                var r = e.sections,
                    n = e.onClick;
                return r.filter(function(e) {
                    return p.has(null == e ? void 0 : e.type)
                }).map(function(e, r) {
                    var o, s, p, v, f;
                    switch (e.type) {
                        case "product":
                            return (0, t.jsx)(i, {
                                product: e.product,
                                onClick: n
                            }, e.product.id);
                        case "story":
                            return (0, t.jsx)(a, {
                                story: e.story,
                                onClick: n
                            }, e.story.id);
                        case "hashtags":
                            return e.hashtags.length > 0 ? (0, t.jsx)(u, {
                                hashtags: e.hashtags,
                                onClick: n
                            }, (null === (o = e.hashtags[0]) || void 0 === o ? void 0 : o.id) || r) : null;
                        case "tag":
                            return (0, t.jsx)(l, {
                                tag: e,
                                onClick: n
                            }, (null === (s = e.meta) || void 0 === s ? void 0 : s.tagId) || r);
                        case "stories":
                            return (0, t.jsx)(c, {
                                stories: e,
                                onClick: n
                            }, (null === (p = e.meta) || void 0 === p ? void 0 : p.id) || r);
                        case "reel":
                            return (0, t.jsx)(_, {
                                reel: e.reel,
                                onClick: n,
                                source: "discovery"
                            }, (null === (v = e.reel.vendor) || void 0 === v ? void 0 : v.id) || r);
                        case "vendor":
                            return (0, t.jsx)(d, {
                                vendor: e,
                                onClick: n
                            }, (null === (f = e.vendor) || void 0 === f ? void 0 : f.id) || r);
                        default:
                            return null
                    }
                })
            }
        },
        73853: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return w
                }
            });
            var t = n(32930),
                o = n(52233),
                s = n.n(o),
                i = n(31748),
                a = n.n(i),
                u = n(21318),
                l = n(33656),
                c = n(27434),
                d = n(45835),
                _ = n(83642),
                p = n(5164),
                v = n(65817),
                f = n(177),
                m = n.n(f),
                b = n(55701),
                y = n.n(b),
                h = n(94287),
                g = n(37314),
                j = n(23489),
                k = n(70157),
                x = (0, c.forwardRef)(function(e, r) {
                    var n = e.children,
                        o = e.style;
                    return (0, t.jsx)("div", {
                        ref: r,
                        style: o,
                        children: n
                    })
                });

            function w() {
                var e, r = (0, l.O)().showReelsInDiscovery,
                    n = (0, d.b)().ua.isPc,
                    o = (0, u.w)({
                        isDesktop: n,
                        hasReels: r
                    }),
                    i = o.data,
                    f = o.isError,
                    b = o.refetch,
                    w = o.hasNextPage,
                    C = o.fetchNextPage,
                    P = o.isFetchingNextPage;
                (0, c.useEffect)(function() {
                    var e = p.bsSessionStorage.getItem("discoveryPosition");
                    e && (setTimeout(function() {
                        window.scrollTo({
                            top: Number(e),
                            behavior: "smooth"
                        })
                    }, 600), p.bsSessionStorage.removeItem("discoveryPosition"))
                }, []);
                var O = n ? 1500 : 500,
                    I = (0, c.useMemo)(function() {
                        var e;
                        return null == i || null === (e = i.pages) || void 0 === e ? void 0 : e.reduce(function(e, r) {
                            return _to_consumable_array(e).concat(_to_consumable_array(r.components || []))
                        }, [])
                    }, [null == i ? void 0 : i.pages]),
                    q = function() {
                        var e = window.scrollY;
                        p.bsSessionStorage.setItem("discoveryPosition", e)
                    };
                return (0, c.useEffect)(function() {
                    if ((null == i ? void 0 : i.pages) && 0 !== (null == I ? void 0 : I.length) && !(null == I ? void 0 : I.some(function(e) {
                            return null === e
                        }))) {
                        var e = i.pages.length,
                            r = i.pages[e - 1].components.map(function(e) {
                                var r, n, t, o = null == e ? void 0 : e.type,
                                    s = [];
                                return "story" === o || "product" === o || "vendor" === o || "reel" === o ? s = [{
                                    id: (null === (r = e[o]) || void 0 === r ? void 0 : r.id) || (null === (n = e[o]) || void 0 === n ? void 0 : n.vendorId)
                                }] : o && (s = null == e || null === (t = e[o]) || void 0 === t ? void 0 : t.map(function(e) {
                                    return {
                                        id: null == e ? void 0 : e.id
                                    }
                                })), {
                                    name: o,
                                    content: s
                                }
                            });
                        (0, p.publishEvent)("discoveryMixedView", {
                            page: e,
                            components: r
                        })
                    }
                }, [null == i ? void 0 : i.pages, I]), (0, t.jsxs)("main", {
                    children: [(0, t.jsxs)(s(), {
                        children: [(0, t.jsx)("title", {
                            children: "بازارگردی | باسلام"
                        }), (0, t.jsx)("meta", {
                            name: "robots",
                            content: "noindex"
                        })]
                    }), n ? (0, t.jsx)(h.default, {}) : (0, t.jsx)(g.default, {
                        isShowSearch: !0
                    }), (0, t.jsx)(m(), {
                        className: a().discovery__wrapper,
                        children: (null == I ? void 0 : I.length) > 0 && (0, t.jsx)(y(), {
                            useWindowScroll: !0,
                            totalCount: null == i || null === (e = i.pages) || void 0 === e ? void 0 : e.length,
                            data: i.pages,
                            itemContent: function(e, r) {
                                var n;
                                return (0, t.jsx)("div", {
                                    className: a().discovery__grid,
                                    "data-page": null == r ? void 0 : r.nextComponentIndex,
                                    children: null == r || null === (n = r.components) || void 0 === n ? void 0 : n.map(function(r, n) {
                                        return (0, t.jsx)(k.Z, {
                                            sections: [r],
                                            onClick: q
                                        }, "".concat(n, "-").concat(e))
                                    })
                                })
                            },
                            endReached: w && C,
                            components: {
                                List: x,
                                Footer: function() {
                                    return (0, t.jsxs)(t.Fragment, {
                                        children: [P && (0, t.jsx)(v.Z, {}), f && (0, t.jsx)(_.Z, {
                                            fetch: b
                                        })]
                                    })
                                }
                            },
                            atBottomThreshold: 500,
                            overscan: {
                                main: O,
                                reverse: O
                            }
                        })
                    }), (0, t.jsx)(j.Z, {})]
                })
            }
        },
        23489: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return c
                }
            });
            var t = n(32930),
                o = n(40877),
                s = n(97271),
                i = n.n(s),
                a = n(65074),
                u = n.n(a),
                l = n(45835);

            function c() {
                var e = (0, l.b)().ua;
                return (0, t.jsx)(u(), {
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
        30257: function(e, r, n) {
            "use strict";
            n.d(r, {
                OW: function() {
                    return c
                },
                jB: function() {
                    return g
                },
                xL: function() {
                    return x
                },
                oR: function() {
                    return v
                },
                y0: function() {
                    return f
                },
                Vr: function() {
                    return b
                },
                $G: function() {
                    return p
                },
                XT: function() {
                    return _
                },
                c: function() {
                    return h
                },
                rv: function() {
                    return m
                },
                pW: function() {
                    return k
                },
                Cn: function() {
                    return y
                },
                Ly: function() {
                    return j
                },
                uU: function() {
                    return d
                }
            });
            var t = n(13014),
                o = n(39953),
                s = n(67938),
                i = n(88107),
                a = n(59403),
                u = n(36492),
                l = n(32066),
                c = function() {
                    return (0, s.Db)(["add-reel"], l.f5)
                },
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.Db)(function(e) {
                        var r = e.data,
                            n = e.controller;
                        return (0, o.z)(r, n)
                    }, e)
                },
                _ = function(e) {
                    var r = e.limit,
                        n = void 0 === r ? 6 : r,
                        o = e.options,
                        s = void 0 === o ? {} : o,
                        i = e.userId,
                        u = void 0 === i ? null : i,
                        c = e.enabled,
                        d = void 0 !== c && c,
                        _ = e.isConfirmed,
                        p = void 0 === _ || _;
                    return (0, a.N)(_object_spread({
                        enabled: !!d,
                        select: function(e) {
                            return function(e) {
                                return _object_spread_props(_object_spread({}, e), {
                                    pages: e.pages.map(function(e) {
                                        return _object_spread_props(_object_spread({}, e), {
                                            reels: e.reels.map(function(r) {
                                                var n;
                                                return _object_spread_props(_object_spread({}, r), {
                                                    isFrom: "tab",
                                                    user: e.user,
                                                    instance: "reel",
                                                    seen: r.seenCount,
                                                    like: r.likeCount,
                                                    link: null !== (n = r.metadata.link) && void 0 !== n ? n : null
                                                })
                                            })
                                        })
                                    })
                                })
                            }(e)
                        },
                        getNextPageParam: function(e) {
                            return e.reels.length === n ? e.lastIdx : void 0
                        },
                        queryKey: ["reels"].concat(_to_consumable_array(u ? [t.d.user_reels, u] : [t.d.owner_reels, p])),
                        queryFn: function(e) {
                            var r = e.pageParam,
                                t = void 0 === r ? 0 : r;
                            return (0, l.MB)({
                                params: {
                                    limit: n,
                                    isConfirmed: p,
                                    lastIdx: t
                                }
                            }, u)
                        }
                    }, s))
                },
                p = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, u.a)(_object_spread({
                        queryFn: function() {
                            return (0, l.Q1)(e)
                        },
                        select: function(e) {
                            return function(e) {
                                var r, n;
                                return _object_spread_props(_object_spread({}, e), {
                                    isFrom: "share",
                                    instance: "reel",
                                    seen: e.seenCount,
                                    like: e.likeCount,
                                    link: null !== (n = null === (r = e.metadata) || void 0 === r ? void 0 : r.link) && void 0 !== n ? n : null
                                })
                            }(e)
                        },
                        queryKey: ["reels", t.d.single_reels, e]
                    }, r))
                },
                v = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, a.N)(_object_spread({
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
                        queryKey: ["reels", t.d.hashtag_reels, e],
                        queryFn: function(r) {
                            var n = r.pageParam,
                                t = void 0 === n ? 0 : n;
                            return (0, l.AA)({
                                params: {
                                    hashtag: e,
                                    last_id: t
                                }
                            })
                        },
                        getNextPageParam: function(e) {
                            return e.lastId > 0 ? e.lastId : void 0
                        }
                    }, r))
                },
                f = function(e) {
                    var r = e.productId,
                        n = e.limit,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, a.N)(_object_spread({
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
                        queryKey: ["reels", t.d.product_reels, r],
                        getNextPageParam: function(e) {
                            return e.lastIdx > 0 ? e.lastIdx : void 0
                        },
                        queryFn: function(e) {
                            var t = e.pageParam,
                                o = void 0 === t ? 0 : t;
                            return (0, l.rH)({
                                productId: r,
                                params: {
                                    last_idx: o,
                                    limit: n
                                }
                            })
                        }
                    }, o))
                },
                m = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e ? Array.isArray(e) ? e : [e] : ["review", "business"],
                        o = (0, s.hu)({
                            queries: n.map(function(e) {
                                return _object_spread({
                                    select: function(e) {
                                        return function(e) {
                                            var r;
                                            return _object_spread_props(_object_spread({}, e), {
                                                openapiRawData: null === (r = e.openapiRawData) || void 0 === r ? void 0 : r.map(function(e) {
                                                    var r, n;
                                                    return _object_spread_props(_object_spread({}, e), {
                                                        isFrom: "top",
                                                        instance: "reel",
                                                        seen: e.seenCount,
                                                        like: e.likeCount,
                                                        link: null !== (n = null === (r = e.metadata) || void 0 === r ? void 0 : r.link) && void 0 !== n ? n : null
                                                    })
                                                })
                                            })
                                        }(e)
                                    },
                                    queryFn: function() {
                                        return (0, l.P6)({
                                            params: {
                                                type: e
                                            }
                                        })
                                    },
                                    queryKey: ["reels", t.d.top_reels, e]
                                }, r)
                            })
                        }),
                        i = o.reduce(function(e, r) {
                            var n;
                            return _to_consumable_array(e).concat(_to_consumable_array((null == r || null === (n = r.data) || void 0 === n ? void 0 : n.openapiRawData) || []))
                        }, []),
                        a = o.some(function(e) {
                            return e.isLoading
                        }),
                        u = o.some(function(e) {
                            return e.isError
                        });
                    return {
                        data: i,
                        isError: u,
                        isLoading: a
                    }
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = (0, i.Z)();
                    return (0, u.a)(_object_spread({
                        queryFn: function() {
                            return []
                        },
                        queryKey: ["reels", t.d.products_has_reels, null == r ? void 0 : r.asPath]
                    }, e))
                },
                y = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return (0, a.N)(_object_spread({
                        enabled: !!e,
                        select: function(e) {
                            return function(e) {
                                return _object_spread_props(_object_spread({}, e), {
                                    pages: e.pages.map(function(e) {
                                        var r;
                                        return _object_spread_props(_object_spread({}, e), {
                                            reels: null == e || null === (r = e.reels) || void 0 === r ? void 0 : r.map(function(e) {
                                                var r, n;
                                                return _object_spread_props(_object_spread({}, e), {
                                                    instance: "reel",
                                                    isFrom: "search",
                                                    seen: e.seenCount,
                                                    like: e.likeCount,
                                                    link: null !== (n = null === (r = e.metadata) || void 0 === r ? void 0 : r.link) && void 0 !== n ? n : null
                                                })
                                            })
                                        })
                                    })
                                })
                            }(e)
                        },
                        queryKey: ["reels", t.d.search_reels, e],
                        getNextPageParam: function(e, n) {
                            return e.reels.length === r ? n.length + 1 : void 0
                        },
                        queryFn: function(n) {
                            var t = n.pageParam,
                                o = void 0 === t ? 1 : t;
                            return (0, l.aV)({
                                query: e,
                                limit: r,
                                offset: (o - 1) * r
                            })
                        }
                    }, n))
                },
                h = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, u.a)(_object_spread({
                        queryFn: function() {
                            return (0, l.xJ)({
                                params: {
                                    query: e
                                }
                            })
                        },
                        queryKey: ["reels", t.d.search_score_reels, e]
                    }, r))
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.Db)(l.Y8, e)
                },
                j = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.Db)(l.Hi, e)
                },
                k = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.Db)(l.Q2, e)
                },
                x = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.Db)(l.H4, e)
                }
        },
        13014: function(e, r, n) {
            "use strict";
            n.d(r, {
                d: function() {
                    return o
                },
                t: function() {
                    return t
                }
            });
            var t = {
                    pdp: "pdp",
                    pgp: "pgp",
                    home: "home",
                    share: "share",
                    vendor: "vendor",
                    hashtag: "hashtag"
                },
                o = {
                    top_reels: "top-reels",
                    user_reels: "user-reels",
                    owner_reels: "owner-reels",
                    single_reels: "single-reels",
                    search_reels: "search-reels",
                    hashtag_reels: "hashtag-reels",
                    product_reels: "product-reels",
                    mixed_discovery: "mixed-page-discovery",
                    products_has_reels: "products-has-reels",
                    search_score_reels: "search-score-reels"
                }
        },
        33656: function(e, r, n) {
            "use strict";
            n.d(r, {
                O: function() {
                    return l
                }
            });
            var t = n(27434),
                o = n(30257),
                s = n(88592),
                i = n(39029),
                a = n(88107),
                u = n(60802);

            function l(e) {
                var r, n, l, c, d = (0, a.Z)(),
                    _ = (0, s.M_)(["userId", "currentUser"]),
                    p = _.userId,
                    v = _.currentUser,
                    f = (0, u.l)().getFeatureValue,
                    m = null == d || null === (r = d.query) || void 0 === r ? void 0 : r.vendorIdentifier,
                    b = (0, i.b)(m),
                    y = b.data,
                    h = b.isLoading,
                    g = p === (null == y || null === (n = y.user) || void 0 === n ? void 0 : n.id) || !m && "reels" === d.query.tab,
                    j = (0, o.XT)({
                        enabled: !(h || !e),
                        userId: g ? null : null == y || null === (l = y.user) || void 0 === l ? void 0 : l.id
                    }),
                    k = j.data,
                    x = j.isLoading,
                    w = (0, t.useMemo)(function() {
                        return f("reels_is_visible_in_vendor_home")
                    }, [f]),
                    C = (0, t.useMemo)(function() {
                        return f("reels_tutorial_is_visible_in_vendor_home")
                    }, [f]),
                    P = (0, t.useMemo)(function() {
                        return f("reels_can_create")
                    }, [f]),
                    O = (0, t.useMemo)(function() {
                        return f("reels_can_import_from_instagram")
                    }, [f]),
                    I = (0, t.useMemo)(function() {
                        return f("reels_is_visible_in_discovery")
                    }, [f]),
                    q = (0, t.useMemo)(function() {
                        return f("reels_is_visible_in_search")
                    }, [f]),
                    N = (0, t.useMemo)(function() {
                        return f("reels_is_visible_in_pdp")
                    }, [f]),
                    S = (0, t.useMemo)(function() {
                        return f("reels_create_max_upload_number")
                    }, [f]),
                    D = (0, t.useMemo)(function() {
                        var r, n, t = null == k || null === (n = k.pages) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r.metadata;
                        if (!e || !t) return {
                            reelsCheckingCount: 0,
                            reelsConfirmedCount: 0
                        };
                        var o = t.countConfirmed;
                        return {
                            reelsCheckingCount: t.countChecking,
                            reelsConfirmedCount: o
                        }
                    }, [e, null == k ? void 0 : k.pages]),
                    F = D.reelsConfirmedCount,
                    R = D.reelsCheckingCount,
                    Z = (null == v || null === (c = v.vendor) || void 0 === c ? void 0 : c.isActive) && P;
                return {
                    isLoading: h || x,
                    isReelsOwner: g,
                    isReelsCreator: Z,
                    showReelsInSearch: Z || q,
                    reelsCheckingCount: R,
                    canWatchReelsInTab: w,
                    canWatchReelsInPdp: N,
                    maxUploadReelsCount: S,
                    reelsConfirmedCount: F,
                    showReelsInDiscovery: Z || I,
                    canWatchReelsInSearch: q,
                    canImportFromInstagram: O,
                    canWatchReelsInDiscovery: I,
                    canWatchReelsTutorialInTab: C
                }
            }
        },
        39029: function(e, r, n) {
            "use strict";
            n.d(r, {
                b: function() {
                    return i
                }
            });
            var t = n(67938),
                o = n(5164),
                s = n(34e3),
                i = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return (0, t.aM)(["vendor", e], function() {
                        return (0, s.Ot)(_object_spread_props(_object_spread({}, r), {
                            params: {
                                identifiers: e
                            }
                        }))
                    }, _object_spread_props(_object_spread({
                        enabled: !!e
                    }, n), {
                        select: function(e) {
                            var r, n = null === (r = e.data) || void 0 === r ? void 0 : r[0];
                            return Array.isArray(null == n ? void 0 : n.homeTabSettings) && (n.homeTabSettings = (0, o.arrayToObject)(n.homeTabSettings, "name")), n
                        }
                    }))
                }
        },
        82549: function(e) {
            e.exports = {
                discovery__skeleton: "j7Fyu4",
                "discovery__skeleton-item": "RZnUOZ",
                "discovery__skeleton-story": "_5UHpxN",
                "discovery__skeleton-reals": "jnJ2w8",
                "discovery__skeleton-reals-items": "dIZ5lM",
                "discovery__skeleton-reals-item": "y_1zzM",
                "discovery__skeleton-reals-item-img": "rWE_DK"
            }
        },
        31748: function(e) {
            e.exports = {
                "jump-to-top": "FxfL_C",
                "jump-to-top--show": "Km5hyq",
                discovery__grid: "VgeJi6",
                discovery__wrapper: "vOq4_L"
            }
        },
        97271: function(e) {
            e.exports = {
                "jump-to-top-button": "D1qB_U"
            }
        }
    }
]);