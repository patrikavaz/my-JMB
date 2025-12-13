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
            s = !0,
            i = !1;
        try {
            for (t = t.call(e); !(s = (n = t.next()).done) && (a.push(n.value), !r || a.length !== r); s = !0);
        } catch (e) {
            i = !0, o = e
        } finally {
            try {
                s || null == t.return || t.return()
            } finally {
                if (i) throw o
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

function _object_without_properties(e, r) {
    if (null == e) return {};
    var t, n, o = _object_without_properties_loose(e, r);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) t = a[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
    }
    return o
}

function _object_without_properties_loose(e, r) {
    if (null == e) return {};
    var t, n, o = {},
        a = Object.keys(e);
    for (n = 0; n < a.length; n++) t = a[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
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
    [3853], {
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
                a = t(59403),
                s = t(246),
                i = t.n(s),
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
                    s = void 0 === o || o,
                    d = e.limited,
                    _ = void 0 !== d && d;
                return (0, a.N)({
                    enabled: s,
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
                a = t.n(o),
                s = t(36350),
                i = t(27434),
                l = t(5164),
                c = t(45835),
                u = t(81433),
                d = t.n(u),
                _ = t(177),
                p = t.n(_),
                v = t(70437),
                f = t.n(v),
                m = function() {
                    var e = (0, c.b)().ua.isPc;
                    return (0, n.jsx)(d(), {
                        mb: 12,
                        children: (0, n.jsx)(p(), {
                            children: (0, n.jsx)(d(), {
                                display: "flex",
                                gap: 12,
                                children: (0, l.range)(e ? 10 : 4).map(function(e, r) {
                                    return (0, n.jsx)(f(), {
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
                y = t(24610),
                h = t.n(y),
                b = t(65074),
                j = t.n(b),
                x = t(59318),
                C = t.n(x),
                k = t(81174),
                w = t.n(k),
                I = t(92034),
                P = t.n(I),
                N = t(90729),
                O = t.n(N),
                S = function() {
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
                        a = e.categories,
                        s = void 0 === a ? [] : a,
                        l = e.defaultSelectedCategories,
                        u = void 0 === l ? [] : l,
                        _ = (0, c.b)().ua,
                        p = _sliced_to_array((0, i.useState)(""), 2),
                        v = p[0],
                        f = p[1],
                        m = _sliced_to_array((0, i.useState)([]), 2),
                        y = m[0],
                        b = m[1],
                        x = _sliced_to_array((0, i.useState)(function() {
                            return S(u)
                        }), 2),
                        k = x[0],
                        I = x[1];
                    (0, i.useEffect)(function() {
                        r || (f(""), b([]), I(S(u)))
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
                                            var a;
                                            e && !n.has(e.id) && (e.title.toLowerCase().includes(r) && (t.push(e), n.add(e.id)), (null === (a = e.children) || void 0 === a ? void 0 : a.length) && o(e.children))
                                        })
                                    };
                                return o(e), t
                            }(s, v) : null
                        }, [s, v]),
                        F = (0, i.useMemo)(function() {
                            var e;
                            return Array.isArray(N) ? N : 0 === y.length ? s : null === (e = y.at(-1)) || void 0 === e ? void 0 : e.children
                        }, [s, y, N]),
                        D = (0, i.useMemo)(function() {
                            return y.map(function(e) {
                                return e.title
                            }).filter(Boolean)
                        }, [y]),
                        q = (0, i.useMemo)(function() {
                            return Array.from(k.values())
                        }, [k]),
                        M = (0, i.useCallback)(function(e) {
                            return k.has(e)
                        }, [k]),
                        R = (0, i.useCallback)(function(e) {
                            (null == e ? void 0 : e.id) && I(function(r) {
                                var t = new Map(r);
                                return t.has(e.id) ? t.delete(e.id) : t.set(e.id, e), t
                            })
                        }, []),
                        Z = (0, i.useCallback)(function(e) {
                            I(function(r) {
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
                        E = (0, i.useCallback)(function() {
                            b(function(e) {
                                return e.slice(0, -1)
                            })
                        }, []),
                        z = (0, i.useCallback)(function(e) {
                            f(e.target.value)
                        }, []),
                        L = (0, i.useCallback)(function() {
                            0 !== k.size && (null == o || o(q), null == t || t())
                        }, [o, t, k, q]),
                        K = !!v.trim(),
                        T = Array.isArray(N) && N.length > 0,
                        U = !K && F.length > 0;
                    return (0, n.jsx)("div", {
                        children: (0, n.jsxs)(P(), {
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
                                    onClick: L
                                })]
                            }),
                            children: [(0, n.jsx)("div", {
                                className: h()["select-category-modal__subheader"],
                                children: 0 === q.length ? (0, n.jsx)("span", {
                                    className: h()["select-category-modal__subheader-hint"],
                                    children: "حداقل یک دسته‌بندی انتخاب کن"
                                }) : (0, n.jsx)("div", {
                                    className: h()["select-category-modal__subheader-selected-items"],
                                    children: q.map(function(e) {
                                        return (0, n.jsx)(O(), {
                                            size: "lg",
                                            label: e.title,
                                            onClose: function() {
                                                return Z(e.id)
                                            }
                                        }, e.id)
                                    })
                                })
                            }), (0, n.jsx)("div", {
                                className: h()["select-category-modal__search-input"],
                                children: (0, n.jsx)(w(), {
                                    value: v,
                                    onChange: z,
                                    placeholder: "جست‌وجو",
                                    suffixIcon: "bi-search"
                                })
                            }), !K && y.length > 0 && (0, n.jsx)(j(), {
                                className: h()["select-category-modal__back-cat-btn"],
                                label: "برگشت",
                                variant: "text",
                                size: "md",
                                icon: "bi-right",
                                onClick: E
                            }), !K && D.length > 0 && (0, n.jsx)(d(), {
                                display: "flex",
                                alignItems: "center",
                                children: D.map(function(e, r) {
                                    return (0, n.jsxs)("div", {
                                        className: h()["select-category-modal__selected-category-item"],
                                        children: [(0, n.jsx)("span", {
                                            children: e
                                        }), r !== D.length - 1 && (0, n.jsx)("i", {
                                            className: "bi-angle-left"
                                        })]
                                    }, e)
                                })
                            }), (K && T || U) && (0, n.jsx)("div", {
                                className: (0, g.Z)(h()["select-category-modal__list"], h()["select-category-modal__list--main"]),
                                children: F.map(function(e) {
                                    var r;
                                    return (0, n.jsxs)("div", {
                                        className: h()["select-category-modal__category-item"],
                                        children: [(0, n.jsx)(C(), {
                                            className: h()["select-category-modal__category-checkbox"],
                                            checked: M(e.id),
                                            label: e.title,
                                            onChange: function() {
                                                return R(e)
                                            }
                                        }), U && (null === (r = e.children) || void 0 === r ? void 0 : r.length) > 0 && (0, n.jsx)(j(), {
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
                D = t(60802),
                q = t(53862),
                M = t.n(q),
                R = t(93222),
                Z = t.n(R);

            function A(e) {
                var r = e.isError,
                    t = e.categories,
                    o = e.isFetching,
                    l = e.selectedIds,
                    u = e.removeCategory,
                    d = e.selectCategory,
                    _ = e.selectedCategories,
                    p = e.applySelectedCategories,
                    v = (0, c.b)().ua,
                    f = (0, D.l)().getFeatureValue,
                    g = (0, i.useRef)(),
                    y = _sliced_to_array((0, s.useDisclosure)(!1), 2),
                    h = y[0],
                    b = y[1],
                    x = b.open,
                    C = b.close,
                    k = (0, i.useMemo)(function() {
                        return f("discovery_categories_tab_view")
                    }, [f]),
                    w = (0, i.useMemo)(function() {
                        return v.isPc ? Z() : "div"
                    }, [v.isPc]),
                    I = (0, i.useMemo)(function() {
                        return v.isPc ? Z().Item : "div"
                    }, [v.isPc]),
                    P = (0, i.useMemo)(function() {
                        return new Set(l)
                    }, [l]),
                    N = (0, i.useCallback)(function(e) {
                        null == p || p(e), C()
                    }, [p, C]);
                return o ? (0, n.jsx)(m, {}) : !k || r || 0 === (null == t ? void 0 : t.length) ? null : (0, n.jsxs)("div", {
                    className: a().discovery__slider,
                    children: [h && (0, n.jsx)(F, {
                        show: h,
                        onClose: C,
                        defaultSelectedCategories: _,
                        categories: t,
                        onApply: N
                    }), (0, n.jsxs)(w, {
                        ref: g,
                        navigation: {
                            className: a().discovery__carousel__navigation
                        },
                        className: a().discovery__carousel,
                        children: [null == _ ? void 0 : _.map(function(e) {
                            return (0, n.jsx)(I, {
                                className: a()["discovery__carousel-item"],
                                children: e.parentId > 0 && (0, n.jsx)(M(), {
                                    className: a()["discovery__selected-category-tag"],
                                    size: "sm",
                                    icon: "bi-close",
                                    onIconClick: function() {
                                        return u(e)
                                    },
                                    label: e.title
                                }, e.id)
                            }, e.id)
                        }), null == t ? void 0 : t.map(function(e) {
                            return (0, n.jsx)(I, {
                                className: a()["discovery__carousel-item"],
                                children: P.has(e.id) ? (0, n.jsx)(M(), {
                                    className: a()["discovery__selected-category-tag"],
                                    size: "sm",
                                    icon: "bi-close",
                                    onIconClick: function() {
                                        return u(e)
                                    },
                                    label: e.title
                                }, e.id) : (0, n.jsx)("button", {
                                    className: a()["discovery__category-tag"],
                                    onClick: function() {
                                        return d(e)
                                    },
                                    children: (0, n.jsx)("span", {
                                        className: a()["discovery__category-tag-label"],
                                        children: e.title
                                    })
                                })
                            }, e.id)
                        }), (0, n.jsx)(j(), {
                            className: a()["discovery__more-filter-btn"],
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
                a = t.n(o),
                s = t(81433),
                i = t.n(s);

            function l(e) {
                var r = e.fetch;
                return (0, n.jsx)(i(), {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0, n.jsx)(a(), {
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
                    return m
                }
            });
            var n = t(32930),
                o = t(40877),
                a = t(27434),
                s = t(5164),
                i = t(82549),
                l = t.n(i),
                c = t(45835),
                u = t(81433),
                d = t.n(u),
                _ = t(177),
                p = t.n(_),
                v = t(70437),
                f = t.n(v);

            function m(e) {
                var r = e.type,
                    t = e.hasReels,
                    i = e.className,
                    u = (0, c.b)().ua;
                return (0, n.jsxs)(p(), {
                    className: (0, o.Z)(l().discovery__skeleton, i),
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
                            children: (0, s.range)(u.isPc ? 4 : 3).map(function(e, r) {
                                return (0, n.jsx)("div", {
                                    className: l()["discovery__skeleton-reals-item"],
                                    children: (0, n.jsx)(f(), {
                                        className: l()["discovery__skeleton-reals-item-img"],
                                        waveColor: "var(--gray-200)",
                                        backgroundColor: "var(--gray-100)"
                                    })
                                }, r)
                            })
                        })]
                    }), (0, s.range)(6).map(function(e, t) {
                        return (0, n.jsx)(a.Fragment, {
                            children: (0, n.jsx)(f(), {
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
                a = t.n(o),
                s = a()(function() {
                    return t.e(4164).then(t.bind(t, 14164))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [14164]
                        }
                    },
                    ssr: !1
                }),
                i = a()(function() {
                    return t.e(5627).then(t.bind(t, 75627))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [75627]
                        }
                    },
                    ssr: !1
                }),
                l = a()(function() {
                    return t.e(9745).then(t.bind(t, 69745))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [69745]
                        }
                    },
                    ssr: !1
                }),
                c = a()(function() {
                    return Promise.all([t.e(3620), t.e(2776)]).then(t.bind(t, 12776))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [12776]
                        }
                    },
                    ssr: !1
                }),
                u = a()(function() {
                    return Promise.all([t.e(3620), t.e(9928)]).then(t.bind(t, 59928))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [59928]
                        }
                    },
                    ssr: !1
                }),
                d = a()(function() {
                    return Promise.all([t.e(3620), t.e(8978)]).then(t.bind(t, 48978))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [48978]
                        }
                    },
                    ssr: !1
                }),
                _ = a()(function() {
                    return t.e(9217).then(t.bind(t, 59217))
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
                    t = e.selectedCategoryIds,
                    o = e.onClick;
                return r.filter(function(e) {
                    return p.has(null == e ? void 0 : e.type)
                }).map(function(e, r) {
                    var a, p, v, f, m;
                    switch (e.type) {
                        case "product":
                            return (0, n.jsx)(s, {
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
                            }, (null === (a = e.hashtags[0]) || void 0 === a ? void 0 : a.id) || r) : null;
                        case "tag":
                            return (0, n.jsx)(c, {
                                tag: e,
                                onClick: o
                            }, (null === (p = e.meta) || void 0 === p ? void 0 : p.tagId) || r);
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
                            }, (null === (f = e.reel.vendor) || void 0 === f ? void 0 : f.id) || r);
                        case "vendor":
                            return (0, n.jsx)(d, {
                                vendor: e,
                                onClick: o
                            }, (null === (m = e.vendor) || void 0 === m ? void 0 : m.id) || r);
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
                    return m
                }
            });
            var n = t(32930),
                o = t(54810),
                a = t.n(o),
                s = t(81433),
                i = t.n(s),
                l = t(177),
                c = t.n(l),
                u = t(40228),
                d = t.n(u),
                _ = t(53278),
                p = t.n(_),
                v = t(65074),
                f = t.n(v);

            function m(e) {
                var r = e.onRemoveFilters;
                return (0, n.jsx)(c(), {
                    children: (0, n.jsxs)(d(), {
                        className: a()["no-result"],
                        children: [(0, n.jsx)(d().Col, {
                            lg: {
                                size: 5,
                                order: 2
                            },
                            children: (0, n.jsx)(i(), {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                children: (0, n.jsx)(p(), {
                                    src: "https://statics.basalam.com/public/admin/xjjKDJ/01-22/uUKKWdJz2iGrYKFQIjVrsWLkOOgH20GALQUiyRYnpMOeiXuRFo.svg",
                                    imageClass: a()["no-result__image"]
                                })
                            })
                        }), (0, n.jsxs)(d().Col, {
                            className: a()["no-result__withfilter"],
                            lg: 7,
                            children: [(0, n.jsx)("span", {
                                className: a()["no-result__main-title"],
                                children: "با این فیلترها نتیجه ای باقی نموند!"
                            }), (0, n.jsx)("span", {
                                className: a()["no-result__sub-title"],
                                children: "می‌خوای بعضی از فیلترها رو حذف کن یا اضافه کن!"
                            }), (0, n.jsx)(f(), {
                                variant: "text",
                                label: "پاک کردن همه فیلترها",
                                icon: "bi-angle-left",
                                iconPosition: "center-end",
                                className: a()["no-result__cta"],
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
                    return a
                }
            });
            var n = t(21318),
                o = t(27434);

            function a() {
                var e = _sliced_to_array((0, o.useState)([]), 2),
                    r = e[0],
                    t = e[1],
                    a = (0, n.Py)(),
                    s = a.data,
                    i = a.isFetching,
                    l = a.isError,
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
                    p = (0, o.useCallback)(function() {
                        return t([])
                    }, []);
                return {
                    categories: s,
                    selectedIds: c,
                    selectCategory: u,
                    removeCategory: d,
                    categoriesIsError: l,
                    selectedCategories: r,
                    categoriesIsFetching: i,
                    applySelectedCategories: _,
                    resetSelectedCategories: p
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
                a = t.n(o),
                s = t(31748),
                i = t.n(s),
                l = t(92369),
                c = t(21318),
                u = t(5164),
                d = t(25977),
                _ = t(27434),
                p = t(45835),
                v = t(36858),
                f = t(83642),
                m = t(65817),
                g = t(177),
                y = t.n(g),
                h = t(55701),
                b = t.n(h),
                j = t(65053),
                x = t(26162),
                C = t(94287),
                k = t(37314),
                w = t(23489),
                I = t(70157),
                P = (0, _.forwardRef)(function(e, r) {
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
                    s = t.removeCategory,
                    g = t.selectedIds,
                    h = t.categories,
                    N = t.categoriesIsFetching,
                    O = t.categoriesIsError,
                    S = t.resetSelectedCategories,
                    F = t.selectedCategories,
                    D = t.applySelectedCategories,
                    q = (0, p.b)().ua.isPc,
                    M = (0, c.wl)({
                        isDesktop: q,
                        categoryIds: g,
                        hasReels: r
                    }),
                    R = M.data,
                    Z = M.isError,
                    A = M.refetch,
                    E = M.hasNextPage,
                    z = M.fetchNextPage,
                    L = M.isFetching,
                    K = M.isFetched;
                (0, _.useEffect)(function() {
                    var e = u.bsSessionStorage.getItem("discoveryPosition");
                    e && (setTimeout(function() {
                        window.scrollTo({
                            top: Number(e),
                            behavior: "smooth"
                        })
                    }, 600), u.bsSessionStorage.removeItem("discoveryPosition"))
                }, []);
                var T = q ? 1500 : 500,
                    U = (0, _.useMemo)(function() {
                        var e;
                        return null == R || null === (e = R.pages) || void 0 === e ? void 0 : e.reduce(function(e, r) {
                            return _to_consumable_array(e).concat(_to_consumable_array(r.components || []))
                        }, [])
                    }, [null == R ? void 0 : R.pages]),
                    W = function() {
                        var e = window.scrollY;
                        u.bsSessionStorage.setItem("discoveryPosition", e)
                    };
                return (0, _.useEffect)(function() {
                    if ((null == R ? void 0 : R.pages) && 0 !== (null == U ? void 0 : U.length) && !(null == U ? void 0 : U.some(function(e) {
                            return null === e
                        }))) {
                        var e = R.pages.length,
                            r = R.pages[e - 1].components.map(function(e) {
                                var r, t, n, o = null == e ? void 0 : e.type,
                                    a = [];
                                return "story" === o || "product" === o || "vendor" === o || "reel" === o ? a = [{
                                    id: (null === (r = e[o]) || void 0 === r ? void 0 : r.id) || (null === (t = e[o]) || void 0 === t ? void 0 : t.vendorId)
                                }] : o && (a = null == e || null === (n = e[o]) || void 0 === n ? void 0 : n.map(function(e) {
                                    return {
                                        id: null == e ? void 0 : e.id
                                    }
                                })), {
                                    name: o,
                                    content: a
                                }
                            });
                        (0, l.publishEvent)("discoveryMixedView", {
                            page: e,
                            components: r
                        })
                    }
                }, [null == R ? void 0 : R.pages, U]), (0, n.jsxs)("main", {
                    children: [(0, n.jsxs)(a(), {
                        children: [(0, n.jsx)("title", {
                            children: "بازارگردی | باسلام"
                        }), (0, n.jsx)("meta", {
                            name: "robots",
                            content: "noindex"
                        })]
                    }), q ? (0, n.jsx)(C.default, {}) : (0, n.jsx)(k.default, {
                        isShowSearch: !0
                    }), (0, n.jsxs)(y(), {
                        className: i().discovery__wrapper,
                        children: [(0, n.jsx)(j.Z, {
                            categories: h,
                            selectCategory: o,
                            removeCategory: s,
                            isFetching: N,
                            isError: O,
                            selectedIds: g,
                            selectedCategories: F,
                            applySelectedCategories: D
                        }), (null == U ? void 0 : U.length) > 0 && (0, n.jsx)(b(), {
                            useWindowScroll: !0,
                            totalCount: null == R || null === (e = R.pages) || void 0 === e ? void 0 : e.length,
                            data: R.pages,
                            itemContent: function(e, r) {
                                var t;
                                return (null == r ? void 0 : r.components) && 0 !== r.components.length ? (0, n.jsx)("div", {
                                    className: i().discovery__grid,
                                    "data-page": null == r ? void 0 : r.nextComponentIndex,
                                    children: null == r || null === (t = r.components) || void 0 === t ? void 0 : t.map(function(r, t) {
                                        return (0, n.jsx)(I.Z, {
                                            sections: [r],
                                            selectedCategoryIds: g,
                                            onClick: W
                                        }, "".concat(t, "-").concat(e))
                                    })
                                }) : null
                            },
                            endReached: E && z,
                            components: {
                                List: P,
                                Footer: function() {
                                    return (0, n.jsxs)(n.Fragment, {
                                        children: [L && (0, n.jsx)(m.Z, {}), Z && (0, n.jsx)(f.Z, {
                                            fetch: A
                                        })]
                                    })
                                }
                            },
                            atBottomThreshold: 500,
                            overscan: {
                                main: T,
                                reverse: T
                            }
                        }), L && !(null == U ? void 0 : U.length) && (0, n.jsx)(m.Z, {}), K && 0 === (null == U ? void 0 : U.length) && (0, n.jsx)(x.Z, {
                            onRemoveFilters: S
                        })]
                    }), (0, n.jsx)(w.Z, {})]
                })
            }
        },
        23489: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return u
                }
            });
            var n = t(32930),
                o = t(40877),
                a = t(97271),
                s = t.n(a),
                i = t(65074),
                l = t.n(i),
                c = t(45835);

            function u() {
                var e = (0, c.b)().ua;
                return (0, n.jsx)(l(), {
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
        30257: function(e, r, t) {
            "use strict";
            t.d(r, {
                OW: function() {
                    return u
                },
                jB: function() {
                    return b
                },
                xL: function() {
                    return C
                },
                oR: function() {
                    return v
                },
                y0: function() {
                    return f
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
                    return h
                },
                rv: function() {
                    return m
                },
                pW: function() {
                    return x
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
            var n = t(13014),
                o = t(39953),
                a = t(67938),
                s = t(88107),
                i = t(59403),
                l = t(36492),
                c = t(32066),
                u = function() {
                    return (0, a.Db)(["add-reel"], c.f5)
                },
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Db)(function(e) {
                        var r = e.data,
                            t = e.controller,
                            n = e.onProgress;
                        return (0, o.z)(r, t, n)
                    }, e)
                },
                _ = function(e) {
                    var r = e.limit,
                        t = void 0 === r ? 6 : r,
                        o = e.options,
                        a = void 0 === o ? {} : o,
                        s = e.userId,
                        l = void 0 === s ? null : s,
                        u = e.enabled,
                        d = void 0 !== u && u,
                        _ = e.isConfirmed,
                        p = void 0 === _ || _;
                    return (0, i.N)(_object_spread({
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
                        queryKey: ["reels"].concat(_to_consumable_array(l ? [n.d.user_reels, l] : [n.d.owner_reels, p])),
                        queryFn: function(e) {
                            var r = e.pageParam,
                                n = void 0 === r ? 0 : r;
                            return (0, c.MB)({
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
                            return (0, c.Q1)(e)
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
                        queryKey: ["reels", n.d.single_reels, e]
                    }, r))
                },
                v = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, i.N)(_object_spread({
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
                        queryKey: ["reels", n.d.hashtag_reels, e],
                        queryFn: function(r) {
                            var t = r.pageParam,
                                n = void 0 === t ? 0 : t;
                            return (0, c.AA)({
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
                f = function(e) {
                    var r = e.productId,
                        t = e.limit,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, i.N)(_object_spread({
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
                        queryKey: ["reels", n.d.product_reels, r],
                        getNextPageParam: function(e) {
                            return e.lastIdx > 0 ? e.lastIdx : void 0
                        },
                        queryFn: function(e) {
                            var n = e.pageParam,
                                o = void 0 === n ? 0 : n;
                            return (0, c.rH)({
                                productId: r,
                                params: {
                                    last_idx: o,
                                    limit: t
                                }
                            })
                        }
                    }, o))
                },
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = e.types,
                        t = e.isFrom,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = r ? Array.isArray(r) ? r : [r] : ["review", "business"],
                        i = (0, a.hu)({
                            queries: s.map(function(e) {
                                return _object_spread({
                                    queryFn: function() {
                                        return (0, c.P6)({
                                            params: {
                                                type: e
                                            }
                                        })
                                    },
                                    queryKey: ["reels", n.d.top_reels, e],
                                    select: function(e) {
                                        return function(e, r) {
                                            var t;
                                            return _object_spread_props(_object_spread({}, e), {
                                                openapiRawData: null === (t = e.openapiRawData) || void 0 === t ? void 0 : t.map(function(e) {
                                                    var t, n;
                                                    return _object_spread_props(_object_spread({}, e), {
                                                        isFrom: r,
                                                        instance: "reel",
                                                        seen: e.seenCount,
                                                        like: e.likeCount,
                                                        link: null !== (n = null === (t = e.metadata) || void 0 === t ? void 0 : t.link) && void 0 !== n ? n : null
                                                    })
                                                })
                                            })
                                        }(e, t)
                                    }
                                }, o)
                            })
                        }),
                        l = i.reduce(function(e, r) {
                            var t;
                            return _to_consumable_array(e).concat(_to_consumable_array((null == r || null === (t = r.data) || void 0 === t ? void 0 : t.openapiRawData) || []))
                        }, []),
                        u = i.some(function(e) {
                            return e.isLoading
                        }),
                        d = i.some(function(e) {
                            return e.isError
                        });
                    return {
                        data: l,
                        isError: d,
                        isLoading: u
                    }
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = (0, s.Z)();
                    return (0, l.a)(_object_spread({
                        enabled: !1,
                        initialData: [],
                        queryFn: function() {
                            return []
                        },
                        queryKey: ["reels", n.d.products_has_reels, null == r ? void 0 : r.asPath]
                    }, e))
                },
                y = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return (0, i.N)(_object_spread({
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
                        queryKey: ["reels", n.d.search_reels, e],
                        getNextPageParam: function(e, t) {
                            return e.reels.length === r ? t.length + 1 : void 0
                        },
                        queryFn: function(t) {
                            var n = t.pageParam,
                                o = void 0 === n ? 1 : n;
                            return (0, c.aV)({
                                query: e,
                                limit: r,
                                offset: (o - 1) * r
                            })
                        }
                    }, t))
                },
                h = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, l.a)(_object_spread({
                        queryFn: function() {
                            return (0, c.xJ)({
                                params: {
                                    query: e
                                }
                            })
                        },
                        queryKey: ["reels", n.d.search_score_reels, e]
                    }, r))
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Db)(c.Y8, e)
                },
                j = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Db)(c.Hi, e)
                },
                x = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Db)(c.Q2, e)
                },
                C = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, a.Db)(c.H4, e)
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
        25977: function(e, r, t) {
            "use strict";
            t.d(r, {
                O: function() {
                    return c
                }
            });
            var n = t(27434),
                o = t(30257),
                a = t(88592),
                s = t(39029),
                i = t(88107),
                l = t(60802);

            function c(e) {
                var r, t, c, u, d = (0, i.Z)(),
                    _ = (0, a.M_)(["userId", "currentUser"]),
                    p = _.userId,
                    v = _.currentUser,
                    f = null == d || null === (r = d.query) || void 0 === r ? void 0 : r.vendorIdentifier,
                    m = (0, s.b)(f),
                    g = m.data,
                    y = m.isLoading,
                    h = p === (null == g || null === (t = g.user) || void 0 === t ? void 0 : t.id) || !f && "reels" === d.query.tab,
                    b = (0, o.XT)({
                        enabled: !(y || !e),
                        userId: h ? null : null == g || null === (c = g.user) || void 0 === c ? void 0 : c.id
                    }),
                    j = b.data,
                    x = b.isLoading,
                    C = _sliced_to_array(function(e) {
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
                    k = C[0],
                    w = C[1],
                    I = C[2],
                    P = C[3],
                    N = C[4],
                    O = C[5],
                    S = C[6],
                    F = (0, n.useMemo)(function() {
                        var r, t, n = null == j || null === (t = j.pages) || void 0 === t || null === (r = t[0]) || void 0 === r ? void 0 : r.metadata;
                        if (!e || !n) return {
                            reelsCheckingCount: 0,
                            reelsConfirmedCount: 0
                        };
                        var o = n.countConfirmed;
                        return {
                            reelsCheckingCount: n.countChecking,
                            reelsConfirmedCount: o
                        }
                    }, [e, null == j ? void 0 : j.pages]),
                    D = F.reelsConfirmedCount,
                    q = F.reelsCheckingCount,
                    M = (null == v || null === (u = v.vendor) || void 0 === u ? void 0 : u.isActive) && w;
                return {
                    isLoading: y || x,
                    isReelsOwner: h,
                    isReelsCreator: M,
                    reelsCheckingCount: q,
                    canWatchReelsInPdp: N,
                    maxUploadReelsCount: O,
                    reelsConfirmedCount: D,
                    showReelsInDiscovery: M || P,
                    canImportFromInstagram: I,
                    canWatchReelsInDiscovery: P,
                    canWatchReelsInSearchItem: S,
                    canWatchReelsTutorialInTab: k
                }
            }
        },
        39029: function(e, r, t) {
            "use strict";
            t.d(r, {
                b: function() {
                    return s
                }
            });
            var n = t(67938),
                o = t(5164),
                a = t(34e3),
                s = function(e) {
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
        },
        97271: function(e) {
            e.exports = {
                "jump-to-top-button": "D1qB_U"
            }
        }
    }
]);