"use strict";

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
    [3656], {
        39953: function(e, r, n) {
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
        95433: function(e, r, n) {
            n.d(r, {
                Bc: function() {
                    return v
                },
                OW: function() {
                    return m
                },
                jB: function() {
                    return P
                },
                xL: function() {
                    return I
                },
                f4: function() {
                    return F
                },
                cc: function() {
                    return q
                },
                oR: function() {
                    return h
                },
                y0: function() {
                    return C
                },
                Vr: function() {
                    return w
                },
                $G: function() {
                    return g
                },
                XT: function() {
                    return y
                },
                rv: function() {
                    return k
                },
                pW: function() {
                    return O
                },
                Ly: function() {
                    return D
                },
                OZ: function() {
                    return R
                },
                nM: function() {
                    return L
                },
                Bi: function() {
                    return M
                },
                yV: function() {
                    return x
                },
                ay: function() {
                    return A
                },
                DU: function() {
                    return N
                },
                F9: function() {
                    return Q
                },
                uU: function() {
                    return j
                }
            });
            var t = n(27434),
                o = n(39953),
                a = n(67938),
                u = n(88107),
                i = n(59403),
                s = n(36492),
                c = n(85945),
                l = n(32066),
                _ = "owner-reels",
                p = "user-reels",
                d = "hashtag-reels",
                f = "product-reels",
                b = "top-reels",
                v = "products-has-reels",
                m = function() {
                    return (0, a.Db)(["add-reel"], l.f5)
                },
                j = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Db)(function(e) {
                        var r = e.data,
                            n = e.controller;
                        return (0, o.z)(r, n)
                    }, e)
                },
                y = function(e) {
                    var r = e.limit,
                        n = e.options,
                        t = void 0 === n ? {} : n,
                        o = e.userId,
                        a = void 0 === o ? null : o,
                        u = e.enabled,
                        s = void 0 !== u && u,
                        c = e.isConfirmed,
                        d = void 0 === c || c;
                    return (0, i.N)(_object_spread({
                        enabled: !!s,
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
                        queryKey: ["reels"].concat(_to_consumable_array(a ? [p, a] : [_, d])),
                        getNextPageParam: function(e) {
                            return e.lastIdx > 0 ? e.lastIdx : void 0
                        },
                        queryFn: function(e) {
                            var n = e.pageParam,
                                t = void 0 === n ? 0 : n;
                            return (0, l.MB)({
                                params: {
                                    limit: r,
                                    isConfirmed: d,
                                    lastIdx: t
                                }
                            }, a)
                        }
                    }, t))
                },
                g = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, s.a)(_object_spread({
                        queryFn: function() {
                            return (0, l.Q1)(e)
                        },
                        queryKey: ["reels", "single-reels", e],
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
                        }
                    }, r))
                },
                h = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, i.N)(_object_spread({
                        queryKey: ["reels", d, e],
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
                C = function(e) {
                    var r = e.productId,
                        n = e.limit,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, i.N)(_object_spread({
                        queryKey: ["reels", f, r],
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
                    }, t))
                },
                k = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e ? Array.isArray(e) ? e : [e] : ["review", "business"],
                        t = (0, a.hu)({
                            queries: n.map(function(e) {
                                return _object_spread({
                                    queryKey: ["reels", b, e],
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
                                    }
                                }, r)
                            })
                        }),
                        o = t.reduce(function(e, r) {
                            var n;
                            return _to_consumable_array(e).concat(_to_consumable_array((null == r || null === (n = r.data) || void 0 === n ? void 0 : n.openapiRawData) || []))
                        }, []),
                        u = t.some(function(e) {
                            return e.isLoading
                        }),
                        i = t.some(function(e) {
                            return e.isError
                        });
                    return {
                        data: o,
                        isError: i,
                        isLoading: u
                    }
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = (0, u.Z)();
                    return (0, s.a)(_object_spread({
                        queryFn: function() {
                            return []
                        },
                        queryKey: ["reels", v, null == r ? void 0 : r.asPath]
                    }, e))
                },
                D = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Db)(l.Hi, e)
                },
                O = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Db)(l.Q2, e)
                },
                I = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Db)(l.H4, e)
                },
                P = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Db)(l.Y8, e)
                },
                N = function(e, r) {
                    var n = (0, c.NL)();
                    return (0, t.useCallback)(function(t, o) {
                        n.setQueryData(["reels"].concat(_to_consumable_array(e ? [_, !0] : [p, r])), function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                pages: e.pages.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        reels: e.reels.map(function(e) {
                                            return (null == e ? void 0 : e.id) === t ? _object_spread({}, e, o) : e
                                        })
                                    })
                                })
                            })
                        })
                    }, [n, e, r])
                },
                L = function() {
                    var e = (0, c.NL)();
                    return (0, t.useCallback)(function(r, n) {
                        e.setQueryData(["reels", _, !0], function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                pages: e.pages.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        metadata: _object_spread_props(_object_spread({}, e.metadata), {
                                            countChecking: e.metadata.countChecking - 1
                                        })
                                    })
                                })
                            })
                        })
                    }, [e])
                },
                R = function() {
                    var e = (0, c.NL)();
                    return (0, t.useCallback)(function(r, n) {
                        e.setQueryData(["reels", _, !0], function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                pages: e.pages.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        metadata: _object_spread_props(_object_spread({}, e.metadata), {
                                            countChecking: e.metadata.countChecking + 1
                                        })
                                    })
                                })
                            })
                        })
                    }, [e])
                },
                q = function() {
                    var e = (0, c.NL)();
                    return (0, t.useCallback)(function(r, n) {
                        e.setQueryData(["reels", _, !0], function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                pages: e.pages.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        reels: e.reels.filter(function(e) {
                                            return (null == e ? void 0 : e.id) !== r
                                        }),
                                        metadata: _object_spread_props(_object_spread({}, e.metadata), {
                                            countConfirmed: e.metadata.countConfirmed - 1
                                        })
                                    })
                                })
                            })
                        })
                    }, [e])
                },
                F = function() {
                    var e = (0, c.NL)();
                    return (0, t.useCallback)(function(r, n) {
                        e.setQueryData(["reels", _, !1], function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                pages: e.pages.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        reels: e.reels.filter(function(e) {
                                            return (null == e ? void 0 : e.id) !== r
                                        }),
                                        metadata: _object_spread_props(_object_spread({}, e.metadata), {
                                            countChecking: e.metadata.countChecking - 1
                                        })
                                    })
                                })
                            })
                        })
                    }, [e])
                },
                x = function() {
                    var e = (0, c.NL)();
                    return (0, t.useCallback)(function(r, n) {
                        e.setQueryData(["mixed-page-discovery"], function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                pages: e.pages.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        components: e.components.map(function(e) {
                                            var t;
                                            return "reel" === (null == e ? void 0 : e.type) ? _object_spread_props(_object_spread({}, e), {
                                                reel: (null === (t = e.reel) || void 0 === t ? void 0 : t.id) === r ? _object_spread({}, e.reel, n) : e.reel
                                            }) : e
                                        })
                                    })
                                })
                            })
                        })
                    }, [e])
                },
                M = function(e) {
                    var r = (0, c.NL)();
                    return (0, t.useCallback)(function(n, t) {
                        r.setQueryData(["reels", d, e], function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                pages: e.pages.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        reels: e.reels.map(function(e) {
                                            return (null == e ? void 0 : e.id) === n ? _object_spread({}, e, t) : e
                                        })
                                    })
                                })
                            })
                        })
                    }, [r, e])
                },
                A = function(e) {
                    var r = (0, c.NL)();
                    return (0, t.useCallback)(function(n, t) {
                        r.setQueryData(["reels", f, e], function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                pages: e.pages.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        reels: e.reels.map(function(e) {
                                            return (null == e ? void 0 : e.id) === n ? _object_spread({}, e, t) : e
                                        })
                                    })
                                })
                            })
                        })
                    }, [r, e])
                },
                Q = function() {
                    var e = (0, c.NL)();
                    return (0, t.useCallback)(function(r, n, t) {
                        e.setQueryData(["reels", b, n], function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                openapiRawData: e.openapiRawData.map(function(e) {
                                    return (null == e ? void 0 : e.id) === r ? _object_spread({}, e, t) : e
                                })
                            })
                        })
                    }, [e])
                }
        },
        33656: function(e, r, n) {
            n.d(r, {
                O: function() {
                    return c
                }
            });
            var t = n(27434),
                o = n(95433),
                a = n(88592),
                u = n(39029),
                i = n(88107),
                s = n(60802);

            function c(e) {
                var r, n, c, l, _ = (0, i.Z)(),
                    p = (0, a.M_)(["userId", "currentUser"]),
                    d = p.userId,
                    f = p.currentUser,
                    b = (0, s.l)().getFeatureValue,
                    v = null == _ || null === (r = _.query) || void 0 === r ? void 0 : r.vendorIdentifier,
                    m = (0, u.b)(v),
                    j = m.data,
                    y = m.isLoading,
                    g = d === (null == j || null === (n = j.user) || void 0 === n ? void 0 : n.id) || !v && "reels" === _.query.tab,
                    h = (0, o.XT)({
                        limit: 6,
                        enabled: !(y || !e),
                        userId: g ? null : null == j || null === (c = j.user) || void 0 === c ? void 0 : c.id
                    }),
                    C = h.data,
                    k = h.isLoading,
                    w = (0, t.useMemo)(function() {
                        return b("reels_is_visible_in_vendor_home")
                    }, [b]),
                    D = (0, t.useMemo)(function() {
                        return b("reels_tutorial_is_visible_in_vendor_home")
                    }, [b]),
                    O = (0, t.useMemo)(function() {
                        return b("reels_can_create")
                    }, [b]),
                    I = (0, t.useMemo)(function() {
                        return b("reels_can_import_from_instagram")
                    }, [b]),
                    P = (0, t.useMemo)(function() {
                        return b("reels_is_visible_in_discovery")
                    }, [b]),
                    N = (0, t.useMemo)(function() {
                        return b("reels_is_visible_in_search")
                    }, [b]),
                    L = (0, t.useMemo)(function() {
                        return b("reels_is_visible_in_pdp")
                    }, [b]),
                    R = (0, t.useMemo)(function() {
                        return b("reels_create_max_upload_number")
                    }, [b]),
                    q = (0, t.useMemo)(function() {
                        var r, n, t = null == C || null === (n = C.pages) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r.metadata;
                        if (!e || !t) return {
                            reelsCheckingCount: 0,
                            reelsConfirmedCount: 0
                        };
                        var o = t.countConfirmed;
                        return {
                            reelsCheckingCount: t.countChecking,
                            reelsConfirmedCount: o
                        }
                    }, [e, null == C ? void 0 : C.pages]),
                    F = q.reelsConfirmedCount,
                    x = q.reelsCheckingCount,
                    M = (null == f || null === (l = f.vendor) || void 0 === l ? void 0 : l.isActive) && O;
                return {
                    isLoading: y || k,
                    isReelsOwner: g,
                    isReelsCreator: M,
                    showReelsInSearch: M || N,
                    reelsCheckingCount: x,
                    canWatchReelsInTab: w,
                    canWatchReelsInPdp: L,
                    maxUploadReelsCount: R,
                    reelsConfirmedCount: F,
                    showReelsInDiscovery: M || P,
                    canWatchReelsInSearch: N,
                    canImportFromInstagram: I,
                    canWatchReelsInDiscovery: P,
                    canWatchReelsTutorialInTab: D
                }
            }
        }
    }
]);