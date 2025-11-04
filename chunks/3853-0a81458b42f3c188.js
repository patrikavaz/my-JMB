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
        var i = Object.getOwnPropertySymbols(e);
        for (t = 0; t < i.length; t++) n = i[t], r.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
}

function _object_without_properties_loose(e, r) {
    if (null == e) return {};
    var n, t, o = {},
        i = Object.keys(e);
    for (t = 0; t < i.length; t++) n = i[t], r.indexOf(n) >= 0 || (o[n] = e[n]);
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
        21318: function(e, r, n) {
            "use strict";
            n.d(r, {
                w: function() {
                    return a
                }
            }), n(67938), n(3087);
            var t = n(59403),
                o = n(5164),
                i = n(79614),
                s = function(e) {
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
                    c = void 0 === a || a,
                    l = e.limited,
                    u = void 0 !== l && l;
                return (0, t.N)({
                    enabled: c,
                    queryKey: ["mixed-page-discovery"],
                    select: function(e) {
                        return s(e)
                    },
                    queryFn: function(e) {
                        var t = e.pageParam;
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = e.params,
                                n = void 0 === r ? {} : r,
                                t = _object_without_properties(e, ["params"]);
                            return i.DZ.get("/web/v1/discovery/mixed_discovery_handler", _object_spread_props(_object_spread({}, t), {
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
                        return u ? e.nextComponentIndex <= 1 ? e.nextComponentIndex : void 0 : null !== (r = e.nextComponentIndex) && void 0 !== r ? r : void 0
                    }
                })
            }
        },
        83642: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return c
                }
            });
            var t = n(32930),
                o = n(65074),
                i = n.n(o),
                s = n(81433),
                a = n.n(s);

            function c(e) {
                var r = e.fetch;
                return (0, t.jsx)(a(), {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0, t.jsx)(i(), {
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
                    return y
                }
            });
            var t = n(32930),
                o = n(40877),
                i = n(27434),
                s = n(5164),
                a = n(82549),
                c = n.n(a),
                l = n(45835),
                u = n(81433),
                d = n.n(u),
                p = n(177),
                _ = n.n(p),
                v = n(70437),
                f = n.n(v);

            function y(e) {
                var r = e.hasReels,
                    n = e.className,
                    a = (0, l.b)().ua;
                return (0, t.jsxs)(_(), {
                    className: (0, o.Z)(c().discovery__skeleton, n),
                    children: [r && (0, t.jsxs)(d(), {
                        className: c()["discovery__skeleton-reals"],
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
                            className: c()["discovery__skeleton-reals-items"],
                            children: (0, s.range)(a.isPc ? 4 : 3).map(function(e, r) {
                                return (0, t.jsx)("div", {
                                    className: c()["discovery__skeleton-reals-item"],
                                    children: (0, t.jsx)(f(), {
                                        className: c()["discovery__skeleton-reals-item-img"],
                                        waveColor: "var(--gray-200)",
                                        backgroundColor: "var(--gray-100)"
                                    })
                                }, r)
                            })
                        })]
                    }), (0, s.range)(6).map(function(e, r) {
                        return (0, t.jsx)(i.Fragment, {
                            children: (0, t.jsx)(f(), {
                                className: c()["discovery__skeleton-item"],
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
                i = n.n(o),
                s = i()(function() {
                    return n.e(4164).then(n.bind(n, 14164))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [14164]
                        }
                    },
                    ssr: !1
                }),
                a = i()(function() {
                    return n.e(5627).then(n.bind(n, 75627))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [75627]
                        }
                    },
                    ssr: !1
                }),
                c = i()(function() {
                    return n.e(9745).then(n.bind(n, 69745))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [69745]
                        }
                    },
                    ssr: !1
                }),
                l = i()(function() {
                    return Promise.all([n.e(3620), n.e(2776)]).then(n.bind(n, 12776))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [12776]
                        }
                    },
                    ssr: !1
                }),
                u = i()(function() {
                    return Promise.all([n.e(3620), n.e(9928)]).then(n.bind(n, 59928))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [59928]
                        }
                    },
                    ssr: !1
                }),
                d = i()(function() {
                    return Promise.all([n.e(3620), n.e(8978)]).then(n.bind(n, 48978))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [48978]
                        }
                    },
                    ssr: !1
                }),
                p = i()(function() {
                    return n.e(9217).then(n.bind(n, 59217))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [59217]
                        }
                    },
                    ssr: !1
                }),
                _ = new Set(["product", "story", "hashtags", "tag", "stories", "vendor", "reel"]);

            function v(e) {
                var r = e.sections,
                    n = e.onClick;
                return r.filter(function(e) {
                    return _.has(null == e ? void 0 : e.type)
                }).map(function(e, r) {
                    var o, i, _, v, f;
                    switch (e.type) {
                        case "product":
                            return (0, t.jsx)(s, {
                                product: e.product,
                                onClick: n
                            }, e.product.id);
                        case "story":
                            return (0, t.jsx)(a, {
                                story: e.story,
                                onClick: n
                            }, e.story.id);
                        case "hashtags":
                            return e.hashtags.length > 0 ? (0, t.jsx)(c, {
                                hashtags: e.hashtags,
                                onClick: n
                            }, (null === (o = e.hashtags[0]) || void 0 === o ? void 0 : o.id) || r) : null;
                        case "tag":
                            return (0, t.jsx)(l, {
                                tag: e,
                                onClick: n
                            }, (null === (i = e.meta) || void 0 === i ? void 0 : i.tagId) || r);
                        case "stories":
                            return (0, t.jsx)(u, {
                                stories: e,
                                onClick: n
                            }, (null === (_ = e.meta) || void 0 === _ ? void 0 : _.id) || r);
                        case "reel":
                            return (0, t.jsx)(p, {
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
                    return k
                }
            });
            var t = n(32930),
                o = n(52233),
                i = n.n(o),
                s = n(31748),
                a = n.n(s),
                c = n(21318),
                l = n(33656),
                u = n(27434),
                d = n(45835),
                p = n(83642),
                _ = n(5164),
                v = n(65817),
                f = n(177),
                y = n.n(f),
                b = n(55701),
                m = n.n(b),
                h = n(94287),
                g = n(37314),
                j = n(23489),
                x = n(70157),
                w = (0, u.forwardRef)(function(e, r) {
                    var n = e.children,
                        o = e.style;
                    return (0, t.jsx)("div", {
                        ref: r,
                        style: o,
                        children: n
                    })
                });

            function k() {
                var e, r = (0, l.O)().showReelsInDiscovery,
                    n = (0, d.b)().ua.isPc,
                    o = (0, c.w)({
                        isDesktop: n,
                        hasReels: r
                    }),
                    s = o.data,
                    f = o.isError,
                    b = o.refetch,
                    k = o.hasNextPage,
                    O = o.fetchNextPage,
                    C = o.isFetchingNextPage;
                (0, u.useEffect)(function() {
                    var e = _.bsSessionStorage.getItem("discoveryPosition");
                    e && (setTimeout(function() {
                        window.scrollTo({
                            top: Number(e),
                            behavior: "smooth"
                        })
                    }, 600), _.bsSessionStorage.removeItem("discoveryPosition"))
                }, []);
                var P = n ? 1500 : 500,
                    S = (0, u.useMemo)(function() {
                        var e;
                        return null == s || null === (e = s.pages) || void 0 === e ? void 0 : e.reduce(function(e, r) {
                            return _to_consumable_array(e).concat(_to_consumable_array(r.components || []))
                        }, [])
                    }, [null == s ? void 0 : s.pages]),
                    N = function() {
                        var e = window.scrollY;
                        _.bsSessionStorage.setItem("discoveryPosition", e)
                    };
                return (0, u.useEffect)(function() {
                    if ((null == s ? void 0 : s.pages) && 0 !== (null == S ? void 0 : S.length) && !(null == S ? void 0 : S.some(function(e) {
                            return null === e
                        }))) {
                        var e = s.pages.length,
                            r = s.pages[e - 1].components.map(function(e) {
                                var r, n, t, o = null == e ? void 0 : e.type,
                                    i = [];
                                return "story" === o || "product" === o || "vendor" === o || "reel" === o ? i = [{
                                    id: (null === (r = e[o]) || void 0 === r ? void 0 : r.id) || (null === (n = e[o]) || void 0 === n ? void 0 : n.vendorId)
                                }] : o && (i = null == e || null === (t = e[o]) || void 0 === t ? void 0 : t.map(function(e) {
                                    return {
                                        id: null == e ? void 0 : e.id
                                    }
                                })), {
                                    name: o,
                                    content: i
                                }
                            });
                        (0, _.publishEvent)("discoveryMixedView", {
                            page: e,
                            components: r
                        })
                    }
                }, [null == s ? void 0 : s.pages, S]), (0, t.jsxs)("main", {
                    children: [(0, t.jsxs)(i(), {
                        children: [(0, t.jsx)("title", {
                            children: "بازارگردی | باسلام"
                        }), (0, t.jsx)("meta", {
                            name: "robots",
                            content: "noindex"
                        })]
                    }), n ? (0, t.jsx)(h.default, {}) : (0, t.jsx)(g.default, {
                        isShowSearch: !0
                    }), (0, t.jsx)(y(), {
                        className: a().discovery__wrapper,
                        children: (null == S ? void 0 : S.length) > 0 && (0, t.jsx)(m(), {
                            useWindowScroll: !0,
                            totalCount: null == s || null === (e = s.pages) || void 0 === e ? void 0 : e.length,
                            data: s.pages,
                            itemContent: function(e, r) {
                                var n;
                                return (0, t.jsx)("div", {
                                    className: a().discovery__grid,
                                    "data-page": null == r ? void 0 : r.nextComponentIndex,
                                    children: null == r || null === (n = r.components) || void 0 === n ? void 0 : n.map(function(r, n) {
                                        return (0, t.jsx)(x.Z, {
                                            sections: [r],
                                            onClick: N
                                        }, "".concat(n, "-").concat(e))
                                    })
                                })
                            },
                            endReached: k && O,
                            components: {
                                List: w,
                                Footer: function() {
                                    return (0, t.jsxs)(t.Fragment, {
                                        children: [C && (0, t.jsx)(v.Z, {}), f && (0, t.jsx)(p.Z, {
                                            fetch: b
                                        })]
                                    })
                                }
                            },
                            atBottomThreshold: 500,
                            overscan: {
                                main: P,
                                reverse: P
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
                    return u
                }
            });
            var t = n(32930),
                o = n(40877),
                i = n(97271),
                s = n.n(i),
                a = n(65074),
                c = n.n(a),
                l = n(45835);

            function u() {
                var e = (0, l.b)().ua;
                return (0, t.jsx)(c(), {
                    square: !0,
                    icon: "bi-angle-up",
                    size: e.isPc ? "lg" : "md",
                    className: (0, o.Z)("jump-to-top-button", s()["jump-to-top-button"]),
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