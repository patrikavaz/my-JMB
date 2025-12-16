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
        var n, o, s = [],
            a = !0,
            i = !1;
        try {
            for (t = t.call(e); !(a = (n = t.next()).done) && (s.push(n.value), !r || s.length !== r); a = !0);
        } catch (e) {
            i = !0, o = e
        } finally {
            try {
                a || null == t.return || t.return()
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

function _object_without_properties(e, r) {
    if (null == e) return {};
    var t, n, o = _object_without_properties_loose(e, r);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++) t = s[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
    }
    return o
}

function _object_without_properties_loose(e, r) {
    if (null == e) return {};
    var t, n, o = {},
        s = Object.keys(e);
    for (n = 0; n < s.length; n++) t = s[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
    return o
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
    [4247], {
        21318: function(e, r, t) {
            "use strict";
            t.d(r, {
                Py: function() {
                    return _
                },
                wl: function() {
                    return d
                }
            });
            var n = t(67938);
            t(3087);
            var o = t(34e3),
                s = t(59403),
                a = t(246),
                i = t.n(a),
                l = t(5164),
                c = t(79614),
                u = function(e) {
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

            function d(e) {
                var r = e.hasReels,
                    t = e.isDesktop,
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
                                r = e.params,
                                t = void 0 === r ? {} : r,
                                n = _object_without_properties(e, ["params"]);
                            return c.DZ.get("/web/v1/discovery/mixed_discovery_handler", _object_spread_props(_object_spread({}, n), {
                                params: (0, l.snakize)(t),
                                paramsSerializer: function(e) {
                                    return i().stringify(e, {
                                        arrayFormat: "repeat"
                                    })
                                }
                            }))
                        }({
                            params: {
                                hasReels: r,
                                isDesktop: t,
                                categoryIds: n,
                                nextCompIdx: null != o ? o : 0,
                                refresh: void 0 === o && (null == n ? void 0 : n.length) > 0
                            }
                        })
                    },
                    getNextPageParam: function(e) {
                        var r, t = !(null == e ? void 0 : e.components) || 0 === e.components.length;
                        return _ ? e.nextComponentIndex <= 1 ? e.nextComponentIndex : void 0 : t ? void 0 : null !== (r = e.nextComponentIndex) && void 0 !== r ? r : void 0
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
                        var r;
                        return null !== (r = null == e ? void 0 : e.openapiRawData) && void 0 !== r ? r : []
                    }
                })
            }
        },
        65053: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return A
                }
            });
            var n = t(32930),
                o = t(67583),
                s = t.n(o),
                a = t(36350),
                i = t(27434),
                l = t(5164),
                c = t(45835),
                u = t(81433),
                d = t.n(u),
                _ = t(177),
                y = t.n(_),
                v = t(70437),
                m = t.n(v),
                f = function() {
                    var e = (0, c.b)().ua.isPc;
                    return (0, n.jsx)(d(), {
                        mb: 12,
                        children: (0, n.jsx)(y(), {
                            children: (0, n.jsx)(d(), {
                                display: "flex",
                                gap: 12,
                                children: (0, l.range)(e ? 10 : 4).map(function(e, r) {
                                    return (0, n.jsx)(m(), {
                                        width: 100,
                                        height: 36,
                                        waveColor: "var(--gray-200)",
                                        backgroundColor: "var(--gray-100)"
                                    }, r)
                                })
                            })
                        })
                    })
                },
                g = t(40877),
                p = t(24610),
                h = t.n(p),
                b = t(65074),
                j = t.n(b),
                x = t(59318),
                C = t.n(x),
                k = t(81174),
                w = t.n(k),
                O = t(92034),
                S = t.n(O),
                N = t(90729),
                I = t.n(N),
                P = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        r = new Map;
                    return e.forEach(function(e) {
                        (null == e ? void 0 : e.id) && r.set(e.id, e)
                    }), r
                },
                F = function(e) {
                    var r = e.show,
                        t = e.onClose,
                        o = e.onApply,
                        s = e.categories,
                        a = void 0 === s ? [] : s,
                        l = e.defaultSelectedCategories,
                        u = void 0 === l ? [] : l,
                        _ = (0, c.b)().ua,
                        y = _sliced_to_array((0, i.useState)(""), 2),
                        v = y[0],
                        m = y[1],
                        f = _sliced_to_array((0, i.useState)([]), 2),
                        p = f[0],
                        b = f[1],
                        x = _sliced_to_array((0, i.useState)(function() {
                            return P(u)
                        }), 2),
                        k = x[0],
                        O = x[1];
                    (0, i.useEffect)(function() {
                        r || (m(""), b([]), O(P(u)))
                    }, [u, r]);
                    var N = (0, i.useMemo)(function() {
                            return v.trim() ? function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    r = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "").trim().toLowerCase();
                                if (!r) return [];
                                var t = [],
                                    n = new Set,
                                    o = function() {
                                        (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(e) {
                                            var s;
                                            e && !n.has(e.id) && (e.title.toLowerCase().includes(r) && (t.push(e), n.add(e.id)), (null === (s = e.children) || void 0 === s ? void 0 : s.length) && o(e.children))
                                        })
                                    };
                                return o(e), t
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
                            (null == e ? void 0 : e.id) && O(function(r) {
                                var t = new Map(r);
                                return t.has(e.id) ? t.delete(e.id) : t.set(e.id, e), t
                            })
                        }, []),
                        z = (0, i.useCallback)(function(e) {
                            O(function(r) {
                                if (!r.has(e)) return r;
                                var t = new Map(r);
                                return t.delete(e), t
                            })
                        }, []),
                        A = (0, i.useCallback)(function(e) {
                            var r;
                            (null == e || null === (r = e.children) || void 0 === r ? void 0 : r.length) && b(function(r) {
                                return _to_consumable_array(r).concat([e])
                            })
                        }, []),
                        R = (0, i.useCallback)(function() {
                            b(function(e) {
                                return e.slice(0, -1)
                            })
                        }, []),
                        L = (0, i.useCallback)(function(e) {
                            m(e.target.value)
                        }, []),
                        K = (0, i.useCallback)(function() {
                            0 !== k.size && (null == o || o(E), null == t || t())
                        }, [o, t, k, E]),
                        U = !!v.trim(),
                        G = Array.isArray(N) && N.length > 0,
                        T = !U && F.length > 0;
                    return (0, n.jsx)("div", {
                        children: (0, n.jsxs)(S(), {
                            title: "دسته‌بندی دقیق‌تر",
                            show: r,
                            size: "sm",
                            showClose: !0,
                            isFullScreen: !_.isPc,
                            isInternalScroll: !0,
                            isFullScreenBordered: !_.isPc,
                            onClose: t,
                            footerComponent: (0, n.jsxs)(d(), {
                                display: "flex",
                                children: [(0, n.jsx)(j(), {
                                    className: h()["select-category-modal__bs-button"],
                                    size: "sm",
                                    label: "انصراف",
                                    color: "secondary",
                                    variant: "outline",
                                    onClick: t
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
                                children: M.map(function(e, r) {
                                    return (0, n.jsxs)("div", {
                                        className: h()["select-category-modal__selected-category-item"],
                                        children: [(0, n.jsx)("span", {
                                            children: e
                                        }), r !== M.length - 1 && (0, n.jsx)("i", {
                                            className: "bi-angle-left"
                                        })]
                                    }, e)
                                })
                            }), (U && G || T) && (0, n.jsx)("div", {
                                className: (0, g.Z)(h()["select-category-modal__list"], h()["select-category-modal__list--main"]),
                                children: F.map(function(e) {
                                    var r;
                                    return (0, n.jsxs)("div", {
                                        className: h()["select-category-modal__category-item"],
                                        children: [(0, n.jsx)(C(), {
                                            className: h()["select-category-modal__category-checkbox"],
                                            checked: Z(e.id),
                                            label: e.title,
                                            onChange: function() {
                                                return D(e)
                                            }
                                        }), T && (null === (r = e.children) || void 0 === r ? void 0 : r.length) > 0 && (0, n.jsx)(j(), {
                                            className: h()["select-category-modal__sub-cat-btn"],
                                            icon: "bi-angle-left",
                                            size: "xs",
                                            variant: "text",
                                            color: "secondary",
                                            onClick: function(r) {
                                                r.stopPropagation(), A(e)
                                            }
                                        })]
                                    }, e.id)
                                })
                            })]
                        })
                    })
                },
                M = t(60802),
                E = t(53862),
                Z = t.n(E),
                D = t(93222),
                z = t.n(D);

            function A(e) {
                var r = e.isError,
                    t = e.categories,
                    o = e.isFetching,
                    l = e.selectedIds,
                    u = e.removeCategory,
                    d = e.selectCategory,
                    _ = e.selectedCategories,
                    y = e.applySelectedCategories,
                    v = (0, c.b)().ua,
                    m = (0, M.l)().getFeatureValue,
                    g = (0, i.useRef)(),
                    p = _sliced_to_array((0, a.useDisclosure)(!1), 2),
                    h = p[0],
                    b = p[1],
                    x = b.open,
                    C = b.close,
                    k = (0, i.useMemo)(function() {
                        return m("discovery_categories_tab_view")
                    }, [m]),
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
                return o ? (0, n.jsx)(f, {}) : !k || r || 0 === (null == t ? void 0 : t.length) ? null : (0, n.jsxs)("div", {
                    className: s().discovery__slider,
                    children: [h && (0, n.jsx)(F, {
                        show: h,
                        onClose: C,
                        defaultSelectedCategories: _,
                        categories: t,
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
                        }), null == t ? void 0 : t.map(function(e) {
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
        83642: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return l
                }
            });
            var n = t(32930),
                o = t(65074),
                s = t.n(o),
                a = t(81433),
                i = t.n(a);

            function l(e) {
                var r = e.fetch;
                return (0, n.jsx)(i(), {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0, n.jsx)(s(), {
                        onClick: function() {
                            return null == r ? void 0 : r()
                        },
                        children: "تلاش مجدد "
                    })
                })
            }
        },
        65817: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return f
                }
            });
            var n = t(32930),
                o = t(40877),
                s = t(27434),
                a = t(5164),
                i = t(82549),
                l = t.n(i),
                c = t(45835),
                u = t(81433),
                d = t.n(u),
                _ = t(177),
                y = t.n(_),
                v = t(70437),
                m = t.n(v);

            function f(e) {
                var r = e.type,
                    t = e.hasReels,
                    i = e.className,
                    u = (0, c.b)().ua;
                return (0, n.jsxs)(y(), {
                    className: (0, o.Z)(l().discovery__skeleton, i),
                    children: [t && (0, n.jsxs)(d(), {
                        className: l()["discovery__skeleton-reals"],
                        children: [(0, n.jsx)(d(), {
                            mb: 14,
                            children: (0, n.jsx)(m(), {
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)",
                                width: 150,
                                height: 36
                            })
                        }), (0, n.jsx)(d(), {
                            display: "flex",
                            className: l()["discovery__skeleton-reals-items"],
                            children: (0, a.range)(u.isPc ? 4 : 3).map(function(e, r) {
                                return (0, n.jsx)("div", {
                                    className: l()["discovery__skeleton-reals-item"],
                                    children: (0, n.jsx)(m(), {
                                        className: l()["discovery__skeleton-reals-item-img"],
                                        waveColor: "var(--gray-200)",
                                        backgroundColor: "var(--gray-100)"
                                    })
                                }, r)
                            })
                        })]
                    }), (0, a.range)(6).map(function(e, t) {
                        return (0, n.jsx)(s.Fragment, {
                            children: (0, n.jsx)(m(), {
                                className: (0, o.Z)(l()["discovery__skeleton-item"], l()["discovery__skeleton-item--".concat(r)]),
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)"
                            })
                        }, t)
                    })]
                })
            }
        },
        70157: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return v
                }
            });
            var n = t(32930),
                o = t(2389),
                s = t.n(o),
                a = s()(function() {
                    return t.e(4164).then(t.bind(t, 14164))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [14164]
                        }
                    },
                    ssr: !1
                }),
                i = s()(function() {
                    return t.e(5627).then(t.bind(t, 75627))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [75627]
                        }
                    },
                    ssr: !1
                }),
                l = s()(function() {
                    return t.e(9745).then(t.bind(t, 69745))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [69745]
                        }
                    },
                    ssr: !1
                }),
                c = s()(function() {
                    return Promise.all([t.e(3620), t.e(2776)]).then(t.bind(t, 12776))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [12776]
                        }
                    },
                    ssr: !1
                }),
                u = s()(function() {
                    return Promise.all([t.e(3620), t.e(9928)]).then(t.bind(t, 59928))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [59928]
                        }
                    },
                    ssr: !1
                }),
                d = s()(function() {
                    return Promise.all([t.e(3620), t.e(8978)]).then(t.bind(t, 48978))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [48978]
                        }
                    },
                    ssr: !1
                }),
                _ = s()(function() {
                    return t.e(9217).then(t.bind(t, 59217))
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
                var r = e.sections,
                    t = e.selectedCategoryIds,
                    o = e.onClick;
                return r.filter(function(e) {
                    return y.has(null == e ? void 0 : e.type)
                }).map(function(e, r) {
                    var s, y, v, m, f;
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
                                selectedCategoryIds: t
                            }, e.story.id);
                        case "hashtags":
                            return e.hashtags.length > 0 ? (0, n.jsx)(l, {
                                hashtags: e.hashtags,
                                onClick: o
                            }, (null === (s = e.hashtags[0]) || void 0 === s ? void 0 : s.id) || r) : null;
                        case "tag":
                            return (0, n.jsx)(c, {
                                tag: e,
                                onClick: o
                            }, (null === (y = e.meta) || void 0 === y ? void 0 : y.tagId) || r);
                        case "stories":
                            return (0, n.jsx)(u, {
                                stories: e,
                                onClick: o,
                                selectedCategoryIds: t
                            }, (null === (v = e.meta) || void 0 === v ? void 0 : v.id) || r);
                        case "reel":
                            return (0, n.jsx)(_, {
                                reel: e.reel,
                                onClick: o,
                                selectedCategoryIds: t,
                                source: "discovery"
                            }, (null === (m = e.reel.vendor) || void 0 === m ? void 0 : m.id) || r);
                        case "vendor":
                            return (0, n.jsx)(d, {
                                vendor: e,
                                onClick: o
                            }, (null === (f = e.vendor) || void 0 === f ? void 0 : f.id) || r);
                        default:
                            return null
                    }
                })
            }
        },
        26162: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return f
                }
            });
            var n = t(32930),
                o = t(54810),
                s = t.n(o),
                a = t(81433),
                i = t.n(a),
                l = t(177),
                c = t.n(l),
                u = t(40228),
                d = t.n(u),
                _ = t(53278),
                y = t.n(_),
                v = t(65074),
                m = t.n(v);

            function f(e) {
                var r = e.onRemoveFilters;
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
                            }), (0, n.jsx)(m(), {
                                variant: "text",
                                label: "پاک کردن همه فیلترها",
                                icon: "bi-angle-left",
                                iconPosition: "center-end",
                                className: s()["no-result__cta"],
                                onClick: r
                            })]
                        })]
                    })
                })
            }
        },
        36858: function(e, r, t) {
            "use strict";
            t.d(r, {
                L: function() {
                    return s
                }
            });
            var n = t(21318),
                o = t(27434);

            function s() {
                var e = _sliced_to_array((0, o.useState)([]), 2),
                    r = e[0],
                    t = e[1],
                    s = (0, n.Py)(),
                    a = s.data,
                    i = s.isFetching,
                    l = s.isError,
                    c = (0, o.useMemo)(function() {
                        return r.map(function(e) {
                            return e.id
                        })
                    }, [r]),
                    u = (0, o.useCallback)(function(e) {
                        t(function(r) {
                            return r.some(function(r) {
                                return r.id === e.id
                            }) ? r : _to_consumable_array(r).concat([e])
                        })
                    }, []),
                    d = (0, o.useCallback)(function(e) {
                        return t(function(r) {
                            return r.filter(function(r) {
                                return r.id !== e.id
                            })
                        })
                    }, []),
                    _ = (0, o.useCallback)(function() {
                        t(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [])
                    }, []),
                    y = (0, o.useCallback)(function() {
                        return t([])
                    }, []);
                return {
                    categories: a,
                    selectedIds: c,
                    selectCategory: u,
                    removeCategory: d,
                    categoriesIsError: l,
                    selectedCategories: r,
                    categoriesIsFetching: i,
                    applySelectedCategories: _,
                    resetSelectedCategories: y
                }
            }
        },
        73853: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return N
                }
            });
            var n = t(32930),
                o = t(52233),
                s = t.n(o),
                a = t(31748),
                i = t.n(a),
                l = t(92369),
                c = t(21318),
                u = t(5164),
                d = t(25977),
                _ = t(27434),
                y = t(45835),
                v = t(36858),
                m = t(83642),
                f = t(65817),
                g = t(177),
                p = t.n(g),
                h = t(55701),
                b = t.n(h),
                j = t(65053),
                x = t(26162),
                C = t(94287),
                k = t(37314),
                w = t(23489),
                O = t(70157),
                S = (0, _.forwardRef)(function(e, r) {
                    var t = e.children,
                        o = e.style;
                    return (0, n.jsx)("div", {
                        ref: r,
                        style: o,
                        children: t
                    })
                });

            function N() {
                var e, r = (0, d.O)().showReelsInDiscovery,
                    t = (0, v.L)(),
                    o = t.selectCategory,
                    a = t.removeCategory,
                    g = t.selectedIds,
                    h = t.categories,
                    N = t.categoriesIsFetching,
                    I = t.categoriesIsError,
                    P = t.resetSelectedCategories,
                    F = t.selectedCategories,
                    M = t.applySelectedCategories,
                    E = (0, y.b)().ua.isPc,
                    Z = (0, c.wl)({
                        isDesktop: E,
                        categoryIds: g,
                        hasReels: r
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
                        return null == D || null === (e = D.pages) || void 0 === e ? void 0 : e.reduce(function(e, r) {
                            return _to_consumable_array(e).concat(_to_consumable_array(r.components || []))
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
                            r = D.pages[e - 1].components.map(function(e) {
                                var r, t, n, o = null == e ? void 0 : e.type,
                                    s = [];
                                return "story" === o || "product" === o || "vendor" === o || "reel" === o ? s = [{
                                    id: (null === (r = e[o]) || void 0 === r ? void 0 : r.id) || (null === (t = e[o]) || void 0 === t ? void 0 : t.vendorId)
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
                            components: r
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
                            itemContent: function(e, r) {
                                var t;
                                return (null == r ? void 0 : r.components) && 0 !== r.components.length ? (0, n.jsx)("div", {
                                    className: i().discovery__grid,
                                    "data-page": null == r ? void 0 : r.nextComponentIndex,
                                    children: null == r || null === (t = r.components) || void 0 === t ? void 0 : t.map(function(r, t) {
                                        return (0, n.jsx)(O.Z, {
                                            sections: [r],
                                            selectedCategoryIds: g,
                                            onClick: q
                                        }, "".concat(t, "-").concat(e))
                                    })
                                }) : null
                            },
                            endReached: R && L,
                            components: {
                                List: S,
                                Footer: function() {
                                    return (0, n.jsxs)(n.Fragment, {
                                        children: [K && (0, n.jsx)(f.Z, {}), z && (0, n.jsx)(m.Z, {
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
                        }), K && !(null == T ? void 0 : T.length) && (0, n.jsx)(f.Z, {}), U && 0 === (null == T ? void 0 : T.length) && (0, n.jsx)(x.Z, {
                            onRemoveFilters: P
                        })]
                    }), (0, n.jsx)(w.Z, {})]
                })
            }
        },
        13014: function(e, r, t) {
            "use strict";
            t.d(r, {
                d: function() {
                    return o
                },
                t: function() {
                    return n
                }
            });
            var n = {
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
                "discovery__skeleton-item--reel": "eNE4je",
                "discovery__skeleton-item--story": "mQfpBu",
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