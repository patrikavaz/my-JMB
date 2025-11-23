function _array_like_to_array(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function _define_property(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function _iterable_to_array(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _iterable_to_array_limit(e, t) {
    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != r) {
        var n, o, s = [],
            a = !0,
            i = !1;
        try {
            for (r = r.call(e); !(a = (n = r.next()).done) && (s.push(n.value), !t || s.length !== t); a = !0);
        } catch (e) {
            i = !0, o = e
        } finally {
            try {
                a || null == r.return || r.return()
            } finally {
                if (i) throw o
            }
        }
        return s
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
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

function _object_without_properties(e, t) {
    if (null == e) return {};
    var r, n, o = _object_without_properties_loose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
    }
    return o
}

function _object_without_properties_loose(e, t) {
    if (null == e) return {};
    var r, n, o = {},
        s = Object.keys(e);
    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
    return o
}

function _sliced_to_array(e, t) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, t) || _unsupported_iterable_to_array(e, t) || _non_iterable_rest()
}

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
}

function _unsupported_iterable_to_array(e, t) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _array_like_to_array(e, t) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3853], {
        21318: function(e, t, r) {
            "use strict";
            r.d(t, {
                Py: function() {
                    return _
                },
                wl: function() {
                    return d
                }
            });
            var n = r(67938);
            r(3087);
            var o = r(34e3),
                s = r(59403),
                a = r(246),
                i = r.n(a),
                l = r(5164),
                c = r(79614),
                u = function(e) {
                    return _object_spread_props(_object_spread({}, e), {
                        pages: e.pages.map(function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                components: e.components.map(function(e) {
                                    var t;
                                    return "reel" === e.type ? _object_spread_props(_object_spread({}, e), {
                                        reel: _object_spread_props(_object_spread({}, e.reel), {
                                            instance: "reel",
                                            isFrom: "discovery",
                                            like: e.reel.likeCount,
                                            seen: e.reel.seenCount,
                                            link: null !== (t = e.reel.metadata.link) && void 0 !== t ? t : null
                                        })
                                    }) : e
                                })
                            })
                        })
                    })
                };

            function d(e) {
                var t = e.hasReels,
                    r = e.isDesktop,
                    n = e.categoryIds,
                    o = e.enabled,
                    a = void 0 === o || o,
                    d = e.limited,
                    _ = void 0 !== d && d;
                return (0, s.N)({
                    enabled: a,
                    cacheTime: 0,
                    initialPageParam: void 0,
                    queryKey: ["mixed-page-discovery", {
                        categoryIds: n
                    }],
                    select: function(e) {
                        return u(e)
                    },
                    queryFn: function(e) {
                        var o = e.pageParam;
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.params,
                                r = void 0 === t ? {} : t,
                                n = _object_without_properties(e, ["params"]);
                            return c.DZ.get("/web/v1/discovery/mixed_discovery_handler", _object_spread_props(_object_spread({}, n), {
                                params: (0, l.snakize)(r),
                                paramsSerializer: function(e) {
                                    return i().stringify(e, {
                                        arrayFormat: "repeat"
                                    })
                                }
                            }))
                        }({
                            params: {
                                hasReels: t,
                                isDesktop: r,
                                categoryIds: n,
                                nextCompIdx: null != o ? o : 0,
                                refresh: void 0 === o && (null == n ? void 0 : n.length) > 0
                            }
                        })
                    },
                    getNextPageParam: function(e) {
                        var t, r = !(null == e ? void 0 : e.components) || 0 === e.components.length;
                        return _ ? e.nextComponentIndex <= 1 ? e.nextComponentIndex : void 0 : r ? void 0 : null !== (t = e.nextComponentIndex) && void 0 !== t ? t : void 0
                    }
                })
            }
            var _ = function() {
                return (0, n.aM)({
                    queryFn: function() {
                        return (0, o.RQ)()
                    },
                    queryKey: ["discovery", "get-categories"],
                    select: function(e) {
                        var t;
                        return null !== (t = null == e ? void 0 : e.openapiRawData) && void 0 !== t ? t : []
                    }
                })
            }
        },
        65053: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return A
                }
            });
            var n = r(32930),
                o = r(67583),
                s = r.n(o),
                a = r(36350),
                i = r(27434),
                l = r(5164),
                c = r(45835),
                u = r(81433),
                d = r.n(u),
                _ = r(177),
                y = r.n(_),
                v = r(70437),
                f = r.n(v),
                m = function() {
                    var e = (0, c.b)().ua.isPc;
                    return (0, n.jsx)(d(), {
                        mb: 12,
                        children: (0, n.jsx)(y(), {
                            children: (0, n.jsx)(d(), {
                                display: "flex",
                                gap: 12,
                                children: (0, l.range)(e ? 10 : 4).map(function(e, t) {
                                    return (0, n.jsx)(f(), {
                                        width: 100,
                                        height: 36,
                                        waveColor: "var(--gray-200)",
                                        backgroundColor: "var(--gray-100)"
                                    }, t)
                                })
                            })
                        })
                    })
                },
                g = r(40877),
                p = r(24610),
                h = r.n(p),
                b = r(65074),
                j = r.n(b),
                x = r(59318),
                C = r.n(x),
                k = r(81174),
                w = r.n(k),
                O = r(92034),
                S = r.n(O),
                N = r(90729),
                I = r.n(N),
                P = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = new Map;
                    return e.forEach(function(e) {
                        (null == e ? void 0 : e.id) && t.set(e.id, e)
                    }), t
                },
                F = function(e) {
                    var t = e.show,
                        r = e.onClose,
                        o = e.onApply,
                        s = e.categories,
                        a = void 0 === s ? [] : s,
                        l = e.defaultSelectedCategories,
                        u = void 0 === l ? [] : l,
                        _ = (0, c.b)().ua,
                        y = _sliced_to_array((0, i.useState)(""), 2),
                        v = y[0],
                        f = y[1],
                        m = _sliced_to_array((0, i.useState)([]), 2),
                        p = m[0],
                        b = m[1],
                        x = _sliced_to_array((0, i.useState)(function() {
                            return P(u)
                        }), 2),
                        k = x[0],
                        O = x[1];
                    (0, i.useEffect)(function() {
                        t || (f(""), b([]), O(P(u)))
                    }, [u, t]);
                    var N = (0, i.useMemo)(function() {
                            return v.trim() ? function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "").trim().toLowerCase();
                                if (!t) return [];
                                var r = [],
                                    n = new Set,
                                    o = function() {
                                        (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(e) {
                                            var s;
                                            e && !n.has(e.id) && (e.title.toLowerCase().includes(t) && (r.push(e), n.add(e.id)), (null === (s = e.children) || void 0 === s ? void 0 : s.length) && o(e.children))
                                        })
                                    };
                                return o(e), r
                            }(a, v) : null
                        }, [a, v]),
                        F = (0, i.useMemo)(function() {
                            var e;
                            return Array.isArray(N) ? N : 0 === p.length ? a : null === (e = p.at(-1)) || void 0 === e ? void 0 : e.children
                        }, [a, p, N]),
                        M = (0, i.useMemo)(function() {
                            return p.map(function(e) {
                                return e.title
                            }).filter(Boolean)
                        }, [p]),
                        E = (0, i.useMemo)(function() {
                            return Array.from(k.values())
                        }, [k]),
                        Z = (0, i.useCallback)(function(e) {
                            return k.has(e)
                        }, [k]),
                        D = (0, i.useCallback)(function(e) {
                            (null == e ? void 0 : e.id) && O(function(t) {
                                var r = new Map(t);
                                return r.has(e.id) ? r.delete(e.id) : r.set(e.id, e), r
                            })
                        }, []),
                        z = (0, i.useCallback)(function(e) {
                            O(function(t) {
                                if (!t.has(e)) return t;
                                var r = new Map(t);
                                return r.delete(e), r
                            })
                        }, []),
                        A = (0, i.useCallback)(function(e) {
                            var t;
                            (null == e || null === (t = e.children) || void 0 === t ? void 0 : t.length) && b(function(t) {
                                return _to_consumable_array(t).concat([e])
                            })
                        }, []),
                        R = (0, i.useCallback)(function() {
                            b(function(e) {
                                return e.slice(0, -1)
                            })
                        }, []),
                        L = (0, i.useCallback)(function(e) {
                            f(e.target.value)
                        }, []),
                        K = (0, i.useCallback)(function() {
                            0 !== k.size && (null == o || o(E), null == r || r())
                        }, [o, r, k, E]),
                        U = !!v.trim(),
                        G = Array.isArray(N) && N.length > 0,
                        T = !U && F.length > 0;
                    return (0, n.jsx)("div", {
                        children: (0, n.jsxs)(S(), {
                            title: "دسته‌بندی دقیق‌تر",
                            show: t,
                            size: "sm",
                            showClose: !0,
                            isFullScreen: !_.isPc,
                            isInternalScroll: !0,
                            isFullScreenBordered: !_.isPc,
                            onClose: r,
                            footerComponent: (0, n.jsxs)(d(), {
                                display: "flex",
                                children: [(0, n.jsx)(j(), {
                                    className: h()["select-category-modal__bs-button"],
                                    size: "sm",
                                    label: "انصراف",
                                    color: "secondary",
                                    variant: "outline",
                                    onClick: r
                                }), (0, n.jsx)(j(), {
                                    className: h()["select-category-modal__bs-button"],
                                    size: "sm",
                                    variant: "fill",
                                    disabled: 0 === k.size,
                                    color: "primary",
                                    label: "اعمال فیلتر",
                                    onClick: K
                                })]
                            }),
                            children: [(0, n.jsx)("div", {
                                className: h()["select-category-modal__subheader"],
                                children: 0 === E.length ? (0, n.jsx)("span", {
                                    className: h()["select-category-modal__subheader-hint"],
                                    children: "حداقل یک دسته‌بندی انتخاب کن"
                                }) : (0, n.jsx)("div", {
                                    className: h()["select-category-modal__subheader-selected-items"],
                                    children: E.map(function(e) {
                                        return (0, n.jsx)(I(), {
                                            size: "lg",
                                            label: e.title,
                                            onClose: function() {
                                                return z(e.id)
                                            }
                                        }, e.id)
                                    })
                                })
                            }), (0, n.jsx)("div", {
                                className: h()["select-category-modal__search-input"],
                                children: (0, n.jsx)(w(), {
                                    value: v,
                                    onChange: L,
                                    placeholder: "جست‌وجو",
                                    suffixIcon: "bi-search"
                                })
                            }), !U && p.length > 0 && (0, n.jsx)(j(), {
                                className: h()["select-category-modal__back-cat-btn"],
                                label: "برگشت",
                                variant: "text",
                                size: "md",
                                icon: "bi-right",
                                onClick: R
                            }), !U && M.length > 0 && (0, n.jsx)(d(), {
                                display: "flex",
                                alignItems: "center",
                                children: M.map(function(e, t) {
                                    return (0, n.jsxs)("div", {
                                        className: h()["select-category-modal__selected-category-item"],
                                        children: [(0, n.jsx)("span", {
                                            children: e
                                        }), t !== M.length - 1 && (0, n.jsx)("i", {
                                            className: "bi-angle-left"
                                        })]
                                    }, e)
                                })
                            }), (U && G || T) && (0, n.jsx)("div", {
                                className: (0, g.Z)(h()["select-category-modal__list"], h()["select-category-modal__list--main"]),
                                children: F.map(function(e) {
                                    var t;
                                    return (0, n.jsxs)("div", {
                                        className: h()["select-category-modal__category-item"],
                                        children: [(0, n.jsx)(C(), {
                                            className: h()["select-category-modal__category-checkbox"],
                                            checked: Z(e.id),
                                            label: e.title,
                                            onChange: function() {
                                                return D(e)
                                            }
                                        }), T && (null === (t = e.children) || void 0 === t ? void 0 : t.length) > 0 && (0, n.jsx)(j(), {
                                            className: h()["select-category-modal__sub-cat-btn"],
                                            icon: "bi-angle-left",
                                            size: "xs",
                                            variant: "text",
                                            color: "secondary",
                                            onClick: function(t) {
                                                t.stopPropagation(), A(e)
                                            }
                                        })]
                                    }, e.id)
                                })
                            })]
                        })
                    })
                },
                M = r(60802),
                E = r(53862),
                Z = r.n(E),
                D = r(93222),
                z = r.n(D);

            function A(e) {
                var t = e.isError,
                    r = e.categories,
                    o = e.isFetching,
                    l = e.selectedIds,
                    u = e.removeCategory,
                    d = e.selectCategory,
                    _ = e.selectedCategories,
                    y = e.applySelectedCategories,
                    v = (0, c.b)().ua,
                    f = (0, M.l)().getFeatureValue,
                    g = (0, i.useRef)(),
                    p = _sliced_to_array((0, a.useDisclosure)(!1), 2),
                    h = p[0],
                    b = p[1],
                    x = b.open,
                    C = b.close,
                    k = (0, i.useMemo)(function() {
                        return f("discovery_categories_tab_view")
                    }, [f]),
                    w = (0, i.useMemo)(function() {
                        return v.isPc ? z() : "div"
                    }, [v.isPc]),
                    O = (0, i.useMemo)(function() {
                        return v.isPc ? z().Item : "div"
                    }, [v.isPc]),
                    S = (0, i.useMemo)(function() {
                        return new Set(l)
                    }, [l]),
                    N = (0, i.useCallback)(function(e) {
                        null == y || y(e), C()
                    }, [y, C]);
                return o ? (0, n.jsx)(m, {}) : !k || t || 0 === (null == r ? void 0 : r.length) ? null : (0, n.jsxs)("div", {
                    className: s().discovery__slider,
                    children: [h && (0, n.jsx)(F, {
                        show: h,
                        onClose: C,
                        defaultSelectedCategories: _,
                        categories: r,
                        onApply: N
                    }), (0, n.jsxs)(w, {
                        ref: g,
                        navigation: {
                            className: s().discovery__carousel__navigation
                        },
                        className: s().discovery__carousel,
                        children: [null == _ ? void 0 : _.map(function(e) {
                            return (0, n.jsx)(O, {
                                className: s()["discovery__carousel-item"],
                                children: e.parentId > 0 && (0, n.jsx)(Z(), {
                                    className: s()["discovery__selected-category-tag"],
                                    size: "sm",
                                    icon: "bi-close",
                                    onIconClick: function() {
                                        return u(e)
                                    },
                                    label: e.title
                                }, e.id)
                            }, e.id)
                        }), null == r ? void 0 : r.map(function(e) {
                            return (0, n.jsx)(O, {
                                className: s()["discovery__carousel-item"],
                                children: S.has(e.id) ? (0, n.jsx)(Z(), {
                                    className: s()["discovery__selected-category-tag"],
                                    size: "sm",
                                    icon: "bi-close",
                                    onIconClick: function() {
                                        return u(e)
                                    },
                                    label: e.title
                                }, e.id) : (0, n.jsx)("button", {
                                    className: s()["discovery__category-tag"],
                                    onClick: function() {
                                        return d(e)
                                    },
                                    children: (0, n.jsx)("span", {
                                        className: s()["discovery__category-tag-label"],
                                        children: e.title
                                    })
                                })
                            }, e.id)
                        }), (0, n.jsx)(j(), {
                            className: s()["discovery__more-filter-btn"],
                            label: "فیلتر دقیق‌تر",
                            icon: "bi-angle-left",
                            iconPosition: "end",
                            size: "xs",
                            color: "primary",
                            variant: "text",
                            onClick: x
                        })]
                    })]
                })
            }
        },
        83642: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            var n = r(32930),
                o = r(65074),
                s = r.n(o),
                a = r(81433),
                i = r.n(a);

            function l(e) {
                var t = e.fetch;
                return (0, n.jsx)(i(), {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0, n.jsx)(s(), {
                        onClick: function() {
                            return null == t ? void 0 : t()
                        },
                        children: "تلاش مجدد "
                    })
                })
            }
        },
        65817: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return m
                }
            });
            var n = r(32930),
                o = r(40877),
                s = r(27434),
                a = r(5164),
                i = r(82549),
                l = r.n(i),
                c = r(45835),
                u = r(81433),
                d = r.n(u),
                _ = r(177),
                y = r.n(_),
                v = r(70437),
                f = r.n(v);

            function m(e) {
                var t = e.hasReels,
                    r = e.className,
                    i = (0, c.b)().ua;
                return (0, n.jsxs)(y(), {
                    className: (0, o.Z)(l().discovery__skeleton, r),
                    children: [t && (0, n.jsxs)(d(), {
                        className: l()["discovery__skeleton-reals"],
                        children: [(0, n.jsx)(d(), {
                            mb: 14,
                            children: (0, n.jsx)(f(), {
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)",
                                width: 150,
                                height: 36
                            })
                        }), (0, n.jsx)(d(), {
                            display: "flex",
                            className: l()["discovery__skeleton-reals-items"],
                            children: (0, a.range)(i.isPc ? 4 : 3).map(function(e, t) {
                                return (0, n.jsx)("div", {
                                    className: l()["discovery__skeleton-reals-item"],
                                    children: (0, n.jsx)(f(), {
                                        className: l()["discovery__skeleton-reals-item-img"],
                                        waveColor: "var(--gray-200)",
                                        backgroundColor: "var(--gray-100)"
                                    })
                                }, t)
                            })
                        })]
                    }), (0, a.range)(6).map(function(e, t) {
                        return (0, n.jsx)(s.Fragment, {
                            children: (0, n.jsx)(f(), {
                                className: l()["discovery__skeleton-item"],
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)"
                            })
                        }, t)
                    })]
                })
            }
        },
        70157: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return v
                }
            });
            var n = r(32930),
                o = r(2389),
                s = r.n(o),
                a = s()(function() {
                    return r.e(4164).then(r.bind(r, 14164))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [14164]
                        }
                    },
                    ssr: !1
                }),
                i = s()(function() {
                    return r.e(5627).then(r.bind(r, 75627))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [75627]
                        }
                    },
                    ssr: !1
                }),
                l = s()(function() {
                    return r.e(9745).then(r.bind(r, 69745))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [69745]
                        }
                    },
                    ssr: !1
                }),
                c = s()(function() {
                    return Promise.all([r.e(3620), r.e(2776)]).then(r.bind(r, 12776))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [12776]
                        }
                    },
                    ssr: !1
                }),
                u = s()(function() {
                    return Promise.all([r.e(3620), r.e(9928)]).then(r.bind(r, 59928))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [59928]
                        }
                    },
                    ssr: !1
                }),
                d = s()(function() {
                    return Promise.all([r.e(3620), r.e(8978)]).then(r.bind(r, 48978))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [48978]
                        }
                    },
                    ssr: !1
                }),
                _ = s()(function() {
                    return r.e(9217).then(r.bind(r, 59217))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [59217]
                        }
                    },
                    ssr: !1
                }),
                y = new Set(["product", "story", "hashtags", "tag", "stories", "vendor", "reel"]);

            function v(e) {
                var t = e.sections,
                    r = e.selectedCategoryIds,
                    o = e.onClick;
                return t.filter(function(e) {
                    return y.has(null == e ? void 0 : e.type)
                }).map(function(e, t) {
                    var s, y, v, f, m;
                    switch (e.type) {
                        case "product":
                            return (0, n.jsx)(a, {
                                product: e.product,
                                onClick: o
                            }, e.product.id);
                        case "story":
                            return (0, n.jsx)(i, {
                                story: e.story,
                                onClick: o,
                                selectedCategoryIds: r
                            }, e.story.id);
                        case "hashtags":
                            return e.hashtags.length > 0 ? (0, n.jsx)(l, {
                                hashtags: e.hashtags,
                                onClick: o
                            }, (null === (s = e.hashtags[0]) || void 0 === s ? void 0 : s.id) || t) : null;
                        case "tag":
                            return (0, n.jsx)(c, {
                                tag: e,
                                onClick: o
                            }, (null === (y = e.meta) || void 0 === y ? void 0 : y.tagId) || t);
                        case "stories":
                            return (0, n.jsx)(u, {
                                stories: e,
                                onClick: o,
                                selectedCategoryIds: r
                            }, (null === (v = e.meta) || void 0 === v ? void 0 : v.id) || t);
                        case "reel":
                            return (0, n.jsx)(_, {
                                reel: e.reel,
                                onClick: o,
                                selectedCategoryIds: r,
                                source: "discovery"
                            }, (null === (f = e.reel.vendor) || void 0 === f ? void 0 : f.id) || t);
                        case "vendor":
                            return (0, n.jsx)(d, {
                                vendor: e,
                                onClick: o
                            }, (null === (m = e.vendor) || void 0 === m ? void 0 : m.id) || t);
                        default:
                            return null
                    }
                })
            }
        },
        26162: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return m
                }
            });
            var n = r(32930),
                o = r(54810),
                s = r.n(o),
                a = r(81433),
                i = r.n(a),
                l = r(177),
                c = r.n(l),
                u = r(40228),
                d = r.n(u),
                _ = r(53278),
                y = r.n(_),
                v = r(65074),
                f = r.n(v);

            function m(e) {
                var t = e.onRemoveFilters;
                return (0, n.jsx)(c(), {
                    children: (0, n.jsxs)(d(), {
                        className: s()["no-result"],
                        children: [(0, n.jsx)(d().Col, {
                            lg: {
                                size: 5,
                                order: 2
                            },
                            children: (0, n.jsx)(i(), {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                children: (0, n.jsx)(y(), {
                                    src: "https://statics.basalam.com/public/admin/xjjKDJ/01-22/uUKKWdJz2iGrYKFQIjVrsWLkOOgH20GALQUiyRYnpMOeiXuRFo.svg",
                                    imageClass: s()["no-result__image"]
                                })
                            })
                        }), (0, n.jsxs)(d().Col, {
                            className: s()["no-result__withfilter"],
                            lg: 7,
                            children: [(0, n.jsx)("span", {
                                className: s()["no-result__main-title"],
                                children: "با این فیلترها نتیجه ای باقی نموند!"
                            }), (0, n.jsx)("span", {
                                className: s()["no-result__sub-title"],
                                children: "می‌خوای بعضی از فیلترها رو حذف کن یا اضافه کن!"
                            }), (0, n.jsx)(f(), {
                                variant: "text",
                                label: "پاک کردن همه فیلترها",
                                icon: "bi-angle-left",
                                iconPosition: "center-end",
                                className: s()["no-result__cta"],
                                onClick: t
                            })]
                        })]
                    })
                })
            }
        },
        36858: function(e, t, r) {
            "use strict";
            r.d(t, {
                L: function() {
                    return s
                }
            });
            var n = r(21318),
                o = r(27434);

            function s() {
                var e = _sliced_to_array((0, o.useState)([]), 2),
                    t = e[0],
                    r = e[1],
                    s = (0, n.Py)(),
                    a = s.data,
                    i = s.isFetching,
                    l = s.isError,
                    c = (0, o.useMemo)(function() {
                        return t.map(function(e) {
                            return e.id
                        })
                    }, [t]),
                    u = (0, o.useCallback)(function(e) {
                        r(function(t) {
                            return t.some(function(t) {
                                return t.id === e.id
                            }) ? t : _to_consumable_array(t).concat([e])
                        })
                    }, []),
                    d = (0, o.useCallback)(function(e) {
                        return r(function(t) {
                            return t.filter(function(t) {
                                return t.id !== e.id
                            })
                        })
                    }, []),
                    _ = (0, o.useCallback)(function() {
                        r(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [])
                    }, []),
                    y = (0, o.useCallback)(function() {
                        return r([])
                    }, []);
                return {
                    categories: a,
                    selectedIds: c,
                    selectCategory: u,
                    removeCategory: d,
                    categoriesIsError: l,
                    selectedCategories: t,
                    categoriesIsFetching: i,
                    applySelectedCategories: _,
                    resetSelectedCategories: y
                }
            }
        },
        73853: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return N
                }
            });
            var n = r(32930),
                o = r(52233),
                s = r.n(o),
                a = r(31748),
                i = r.n(a),
                l = r(92369),
                c = r(21318),
                u = r(5164),
                d = r(25977),
                _ = r(27434),
                y = r(45835),
                v = r(36858),
                f = r(83642),
                m = r(65817),
                g = r(177),
                p = r.n(g),
                h = r(55701),
                b = r.n(h),
                j = r(65053),
                x = r(26162),
                C = r(94287),
                k = r(37314),
                w = r(23489),
                O = r(70157),
                S = (0, _.forwardRef)(function(e, t) {
                    var r = e.children,
                        o = e.style;
                    return (0, n.jsx)("div", {
                        ref: t,
                        style: o,
                        children: r
                    })
                });

            function N() {
                var e, t = (0, d.O)().showReelsInDiscovery,
                    r = (0, v.L)(),
                    o = r.selectCategory,
                    a = r.removeCategory,
                    g = r.selectedIds,
                    h = r.categories,
                    N = r.categoriesIsFetching,
                    I = r.categoriesIsError,
                    P = r.resetSelectedCategories,
                    F = r.selectedCategories,
                    M = r.applySelectedCategories,
                    E = (0, y.b)().ua.isPc,
                    Z = (0, c.wl)({
                        isDesktop: E,
                        categoryIds: g,
                        hasReels: t
                    }),
                    D = Z.data,
                    z = Z.isError,
                    A = Z.refetch,
                    R = Z.hasNextPage,
                    L = Z.fetchNextPage,
                    K = Z.isFetching,
                    U = Z.isFetched;
                (0, _.useEffect)(function() {
                    var e = u.bsSessionStorage.getItem("discoveryPosition");
                    e && (setTimeout(function() {
                        window.scrollTo({
                            top: Number(e),
                            behavior: "smooth"
                        })
                    }, 600), u.bsSessionStorage.removeItem("discoveryPosition"))
                }, []);
                var G = E ? 1500 : 500,
                    T = (0, _.useMemo)(function() {
                        var e;
                        return null == D || null === (e = D.pages) || void 0 === e ? void 0 : e.reduce(function(e, t) {
                            return _to_consumable_array(e).concat(_to_consumable_array(t.components || []))
                        }, [])
                    }, [null == D ? void 0 : D.pages]),
                    q = function() {
                        var e = window.scrollY;
                        u.bsSessionStorage.setItem("discoveryPosition", e)
                    };
                return (0, _.useEffect)(function() {
                    if ((null == D ? void 0 : D.pages) && 0 !== (null == T ? void 0 : T.length) && !(null == T ? void 0 : T.some(function(e) {
                            return null === e
                        }))) {
                        var e = D.pages.length,
                            t = D.pages[e - 1].components.map(function(e) {
                                var t, r, n, o = null == e ? void 0 : e.type,
                                    s = [];
                                return "story" === o || "product" === o || "vendor" === o || "reel" === o ? s = [{
                                    id: (null === (t = e[o]) || void 0 === t ? void 0 : t.id) || (null === (r = e[o]) || void 0 === r ? void 0 : r.vendorId)
                                }] : o && (s = null == e || null === (n = e[o]) || void 0 === n ? void 0 : n.map(function(e) {
                                    return {
                                        id: null == e ? void 0 : e.id
                                    }
                                })), {
                                    name: o,
                                    content: s
                                }
                            });
                        (0, l.publishEvent)("discoveryMixedView", {
                            page: e,
                            components: t
                        })
                    }
                }, [null == D ? void 0 : D.pages, T]), (0, n.jsxs)("main", {
                    children: [(0, n.jsxs)(s(), {
                        children: [(0, n.jsx)("title", {
                            children: "بازارگردی | باسلام"
                        }), (0, n.jsx)("meta", {
                            name: "robots",
                            content: "noindex"
                        })]
                    }), E ? (0, n.jsx)(C.default, {}) : (0, n.jsx)(k.default, {
                        isShowSearch: !0
                    }), (0, n.jsxs)(p(), {
                        className: i().discovery__wrapper,
                        children: [(0, n.jsx)(j.Z, {
                            categories: h,
                            selectCategory: o,
                            removeCategory: a,
                            isFetching: N,
                            isError: I,
                            selectedIds: g,
                            selectedCategories: F,
                            applySelectedCategories: M
                        }), (null == T ? void 0 : T.length) > 0 && (0, n.jsx)(b(), {
                            useWindowScroll: !0,
                            totalCount: null == D || null === (e = D.pages) || void 0 === e ? void 0 : e.length,
                            data: D.pages,
                            itemContent: function(e, t) {
                                var r;
                                return (null == t ? void 0 : t.components) && 0 !== t.components.length ? (0, n.jsx)("div", {
                                    className: i().discovery__grid,
                                    "data-page": null == t ? void 0 : t.nextComponentIndex,
                                    children: null == t || null === (r = t.components) || void 0 === r ? void 0 : r.map(function(t, r) {
                                        return (0, n.jsx)(O.Z, {
                                            sections: [t],
                                            selectedCategoryIds: g,
                                            onClick: q
                                        }, "".concat(r, "-").concat(e))
                                    })
                                }) : null
                            },
                            endReached: R && L,
                            components: {
                                List: S,
                                Footer: function() {
                                    return (0, n.jsxs)(n.Fragment, {
                                        children: [K && (0, n.jsx)(m.Z, {}), z && (0, n.jsx)(f.Z, {
                                            fetch: A
                                        })]
                                    })
                                }
                            },
                            atBottomThreshold: 500,
                            overscan: {
                                main: G,
                                reverse: G
                            }
                        }), K && !(null == T ? void 0 : T.length) && (0, n.jsx)(m.Z, {}), U && 0 === (null == T ? void 0 : T.length) && (0, n.jsx)(x.Z, {
                            onRemoveFilters: P
                        })]
                    }), (0, n.jsx)(w.Z, {})]
                })
            }
        },
        67583: function(e) {
            e.exports = {
                "discovery__selected-category-tag": "WNQPDB",
                discovery__carousel: "D1MCCj",
                discovery__carousel__navigation: "M4x4jC",
                "discovery__carousel-item": "y4FTHS",
                "discovery__category-tag": "ZnYFQL",
                "discovery__category-tag-label": "J9Ug7L",
                "discovery__more-filter-btn": "Eqgwx2",
                discovery__slider: "sLS_Kc"
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
        54810: function(e) {
            e.exports = {
                "no-result": "_Sde01",
                "no-result__image": "VcSswx",
                "no-result__main-title": "T1OM9H",
                "no-result__sub-title": "ZOfOmk",
                "no-result__cta": "_0US7R_",
                "no-result__withfilter": "OBai7p"
            }
        },
        24610: function(e) {
            e.exports = {
                "select-category-modal__list": "_0_WaDi",
                "select-category-modal__list--main": "OY9VU_",
                "select-category-modal__list--sub": "sgO2fY",
                "select-category-modal__selected-category-item": "MADDTg",
                "select-category-modal__bs-button": "OAg3yX",
                "select-category-modal__category-checkbox": "_4bL7C3",
                "select-category-modal__subheader": "UzXJlv",
                "select-category-modal__subheader-hint": "cvW4hH",
                "select-category-modal__subheader-selected-items": "_9452sW",
                "select-category-modal__search-input": "Q0wQUU",
                "select-category-modal__category-item": "R_xOur",
                "select-category-modal__sub-cat-btn": "nB_ihq",
                "select-category-modal__back-cat-btn": "rzvDS_"
            }
        },
        31748: function(e) {
            e.exports = {
                "jump-to-top": "FxfL_C",
                "jump-to-top--show": "Km5hyq",
                discovery__grid: "VgeJi6",
                discovery__wrapper: "vOq4_L",
                "discovery__category-tab": "jbM60h"
            }
        }
    }
]);