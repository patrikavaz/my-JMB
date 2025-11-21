function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
    return t
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
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

function _iterable_to_array_limit(e, r) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var t, o, s = [],
            a = !0,
            i = !1;
        try {
            for (n = n.call(e); !(a = (t = n.next()).done) && (s.push(t.value), !r || s.length !== r); a = !0);
        } catch (e) {
            i = !0, o = e
        } finally {
            try {
                a || null == n.return || n.return()
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

function _sliced_to_array(e, r) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, r) || _unsupported_iterable_to_array(e, r) || _non_iterable_rest()
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
                Py: function() {
                    return _
                },
                wl: function() {
                    return d
                }
            });
            var t = n(67938);
            n(3087);
            var o = n(34e3),
                s = n(59403),
                a = n(246),
                i = n.n(a),
                l = n(5164),
                c = n(79614),
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
                    n = e.isDesktop,
                    t = e.categoryIds,
                    o = e.enabled,
                    a = void 0 === o || o,
                    d = e.limited,
                    _ = void 0 !== d && d;
                return (0, s.N)({
                    enabled: a,
                    cacheTime: 0,
                    initialPageParam: void 0,
                    queryKey: ["mixed-page-discovery", {
                        categoryIds: t
                    }],
                    select: function(e) {
                        return u(e)
                    },
                    queryFn: function(e) {
                        var o = e.pageParam;
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = e.params,
                                n = void 0 === r ? {} : r,
                                t = _object_without_properties(e, ["params"]);
                            return c.DZ.get("/web/v1/discovery/mixed_discovery_handler", _object_spread_props(_object_spread({}, t), {
                                params: (0, l.snakize)(n),
                                paramsSerializer: function(e) {
                                    return i().stringify(e, {
                                        arrayFormat: "repeat"
                                    })
                                }
                            }))
                        }({
                            params: {
                                hasReels: r,
                                isDesktop: n,
                                categoryIds: t,
                                nextCompIdx: null != o ? o : 0,
                                refresh: void 0 === o && t.length > 0
                            }
                        })
                    },
                    getNextPageParam: function(e) {
                        var r, n = !(null == e ? void 0 : e.components) || 0 === e.components.length;
                        return _ ? e.nextComponentIndex <= 1 ? e.nextComponentIndex : void 0 : n ? void 0 : null !== (r = e.nextComponentIndex) && void 0 !== r ? r : void 0
                    }
                })
            }
            var _ = function() {
                return (0, t.aM)({
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
        65053: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return Z
                }
            });
            var t = n(32930),
                o = n(67583),
                s = n.n(o),
                a = n(36350),
                i = n(27434),
                l = n(5164),
                c = n(45835),
                u = n(81433),
                d = n.n(u),
                _ = n(177),
                p = n.n(_),
                v = n(70437),
                f = n.n(v),
                m = function() {
                    var e = (0, c.b)().ua.isPc;
                    return (0, t.jsx)(d(), {
                        mb: 12,
                        children: (0, t.jsx)(p(), {
                            children: (0, t.jsx)(d(), {
                                display: "flex",
                                gap: 12,
                                children: (0, l.range)(e ? 10 : 4).map(function(e, r) {
                                    return (0, t.jsx)(f(), {
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
                g = n(40877),
                y = n(24610),
                h = n.n(y),
                b = n(65074),
                j = n.n(b),
                x = n(59318),
                C = n.n(x),
                k = n(81174),
                w = n.n(k),
                I = n(92034),
                P = n.n(I),
                N = n(90729),
                O = n.n(N),
                S = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        r = new Map;
                    return e.forEach(function(e) {
                        (null == e ? void 0 : e.id) && r.set(e.id, e)
                    }), r
                },
                F = function(e) {
                    var r = e.show,
                        n = e.onClose,
                        o = e.onApply,
                        s = e.categories,
                        a = void 0 === s ? [] : s,
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
                                var n = [],
                                    t = new Set,
                                    o = function() {
                                        (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(e) {
                                            var s;
                                            e && !t.has(e.id) && (e.title.toLowerCase().includes(r) && (n.push(e), t.add(e.id)), (null === (s = e.children) || void 0 === s ? void 0 : s.length) && o(e.children))
                                        })
                                    };
                                return o(e), n
                            }(a, v) : null
                        }, [a, v]),
                        F = (0, i.useMemo)(function() {
                            var e;
                            return Array.isArray(N) ? N : 0 === y.length ? a : null === (e = y.at(-1)) || void 0 === e ? void 0 : e.children
                        }, [a, y, N]),
                        M = (0, i.useMemo)(function() {
                            return y.map(function(e) {
                                return e.title
                            }).filter(Boolean)
                        }, [y]),
                        D = (0, i.useMemo)(function() {
                            return Array.from(k.values())
                        }, [k]),
                        q = (0, i.useCallback)(function(e) {
                            return k.has(e)
                        }, [k]),
                        R = (0, i.useCallback)(function(e) {
                            (null == e ? void 0 : e.id) && I(function(r) {
                                var n = new Map(r);
                                return n.has(e.id) ? n.delete(e.id) : n.set(e.id, e), n
                            })
                        }, []),
                        A = (0, i.useCallback)(function(e) {
                            I(function(r) {
                                if (!r.has(e)) return r;
                                var n = new Map(r);
                                return n.delete(e), n
                            })
                        }, []),
                        Z = (0, i.useCallback)(function(e) {
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
                            0 !== k.size && (null == o || o(D), null == n || n())
                        }, [o, n, k, D]),
                        K = !!v.trim(),
                        T = Array.isArray(N) && N.length > 0,
                        U = !K && F.length > 0;
                    return (0, t.jsx)("div", {
                        children: (0, t.jsxs)(P(), {
                            title: "دسته‌بندی دقیق‌تر",
                            show: r,
                            size: "sm",
                            showClose: !0,
                            isFullScreen: !_.isPc,
                            isInternalScroll: !0,
                            isFullScreenBordered: !_.isPc,
                            onClose: n,
                            footerComponent: (0, t.jsxs)(d(), {
                                display: "flex",
                                children: [(0, t.jsx)(j(), {
                                    className: h()["select-category-modal__bs-button"],
                                    size: "sm",
                                    label: "انصراف",
                                    color: "secondary",
                                    variant: "outline",
                                    onClick: n
                                }), (0, t.jsx)(j(), {
                                    className: h()["select-category-modal__bs-button"],
                                    size: "sm",
                                    variant: "fill",
                                    disabled: 0 === k.size,
                                    color: "primary",
                                    label: "اعمال فیلتر",
                                    onClick: L
                                })]
                            }),
                            children: [(0, t.jsx)("div", {
                                className: h()["select-category-modal__subheader"],
                                children: 0 === D.length ? (0, t.jsx)("span", {
                                    className: h()["select-category-modal__subheader-hint"],
                                    children: "حداقل یک دسته‌بندی انتخاب کن"
                                }) : (0, t.jsx)("div", {
                                    className: h()["select-category-modal__subheader-selected-items"],
                                    children: D.map(function(e) {
                                        return (0, t.jsx)(O(), {
                                            size: "lg",
                                            label: e.title,
                                            onClose: function() {
                                                return A(e.id)
                                            }
                                        }, e.id)
                                    })
                                })
                            }), (0, t.jsx)("div", {
                                className: h()["select-category-modal__search-input"],
                                children: (0, t.jsx)(w(), {
                                    value: v,
                                    onChange: z,
                                    placeholder: "جست‌وجو",
                                    suffixIcon: "bi-search"
                                })
                            }), !K && y.length > 0 && (0, t.jsx)(j(), {
                                className: h()["select-category-modal__back-cat-btn"],
                                label: "برگشت",
                                variant: "text",
                                size: "md",
                                icon: "bi-right",
                                onClick: E
                            }), !K && M.length > 0 && (0, t.jsx)(d(), {
                                display: "flex",
                                alignItems: "center",
                                children: M.map(function(e, r) {
                                    return (0, t.jsxs)("div", {
                                        className: h()["select-category-modal__selected-category-item"],
                                        children: [(0, t.jsx)("span", {
                                            children: e
                                        }), r !== M.length - 1 && (0, t.jsx)("i", {
                                            className: "bi-angle-left"
                                        })]
                                    }, e)
                                })
                            }), (K && T || U) && (0, t.jsx)("div", {
                                className: (0, g.Z)(h()["select-category-modal__list"], h()["select-category-modal__list--main"]),
                                children: F.map(function(e) {
                                    var r;
                                    return (0, t.jsxs)("div", {
                                        className: h()["select-category-modal__category-item"],
                                        children: [(0, t.jsx)(C(), {
                                            className: h()["select-category-modal__category-checkbox"],
                                            checked: q(e.id),
                                            label: e.title,
                                            onChange: function() {
                                                return R(e)
                                            }
                                        }), U && (null === (r = e.children) || void 0 === r ? void 0 : r.length) > 0 && (0, t.jsx)(j(), {
                                            className: h()["select-category-modal__sub-cat-btn"],
                                            icon: "bi-angle-left",
                                            size: "xs",
                                            variant: "text",
                                            color: "secondary",
                                            onClick: function(r) {
                                                r.stopPropagation(), Z(e)
                                            }
                                        })]
                                    }, e.id)
                                })
                            })]
                        })
                    })
                },
                M = n(60802),
                D = n(53862),
                q = n.n(D),
                R = n(93222),
                A = n.n(R);

            function Z(e) {
                var r = e.isError,
                    n = e.categories,
                    o = e.isFetching,
                    l = e.selectedIds,
                    u = e.removeCategory,
                    d = e.selectCategory,
                    _ = e.selectedCategories,
                    p = e.applySelectedCategories,
                    v = (0, c.b)().ua,
                    f = (0, M.l)().getFeatureValue,
                    g = (0, i.useRef)(),
                    y = _sliced_to_array((0, a.useDisclosure)(!1), 2),
                    h = y[0],
                    b = y[1],
                    x = b.open,
                    C = b.close,
                    k = (0, i.useMemo)(function() {
                        return f("discovery_categories_tab_view")
                    }, [f]),
                    w = (0, i.useMemo)(function() {
                        return v.isPc ? A() : "div"
                    }, [v.isPc]),
                    I = (0, i.useMemo)(function() {
                        return v.isPc ? A().Item : "div"
                    }, [v.isPc]),
                    P = (0, i.useMemo)(function() {
                        return new Set(l)
                    }, [l]),
                    N = (0, i.useCallback)(function(e) {
                        null == p || p(e), C()
                    }, [p, C]);
                return o ? (0, t.jsx)(m, {}) : !k || r || 0 === (null == n ? void 0 : n.length) ? null : (0, t.jsxs)("div", {
                    className: s().discovery__slider,
                    children: [h && (0, t.jsx)(F, {
                        show: h,
                        onClose: C,
                        defaultSelectedCategories: _,
                        categories: n,
                        onApply: N
                    }), (0, t.jsxs)(w, {
                        ref: g,
                        navigation: {
                            className: s().discovery__carousel__navigation
                        },
                        className: s().discovery__carousel,
                        children: [null == _ ? void 0 : _.map(function(e) {
                            return (0, t.jsx)(I, {
                                className: s()["discovery__carousel-item"],
                                children: e.parentId > 0 && (0, t.jsx)(q(), {
                                    className: s()["discovery__selected-category-tag"],
                                    size: "sm",
                                    icon: "bi-close",
                                    onIconClick: function() {
                                        return u(e)
                                    },
                                    label: e.title
                                }, e.id)
                            }, e.id)
                        }), null == n ? void 0 : n.map(function(e) {
                            return (0, t.jsx)(I, {
                                className: s()["discovery__carousel-item"],
                                children: P.has(e.id) ? (0, t.jsx)(q(), {
                                    className: s()["discovery__selected-category-tag"],
                                    size: "sm",
                                    icon: "bi-close",
                                    onIconClick: function() {
                                        return u(e)
                                    },
                                    label: e.title
                                }, e.id) : (0, t.jsx)("button", {
                                    className: s()["discovery__category-tag"],
                                    onClick: function() {
                                        return d(e)
                                    },
                                    children: (0, t.jsx)("span", {
                                        className: s()["discovery__category-tag-label"],
                                        children: e.title
                                    })
                                })
                            }, e.id)
                        }), (0, t.jsx)(j(), {
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
        83642: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return l
                }
            });
            var t = n(32930),
                o = n(65074),
                s = n.n(o),
                a = n(81433),
                i = n.n(a);

            function l(e) {
                var r = e.fetch;
                return (0, t.jsx)(i(), {
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
                a = n(5164),
                i = n(82549),
                l = n.n(i),
                c = n(45835),
                u = n(81433),
                d = n.n(u),
                _ = n(177),
                p = n.n(_),
                v = n(70437),
                f = n.n(v);

            function m(e) {
                var r = e.hasReels,
                    n = e.className,
                    i = (0, c.b)().ua;
                return (0, t.jsxs)(p(), {
                    className: (0, o.Z)(l().discovery__skeleton, n),
                    children: [r && (0, t.jsxs)(d(), {
                        className: l()["discovery__skeleton-reals"],
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
                            className: l()["discovery__skeleton-reals-items"],
                            children: (0, a.range)(i.isPc ? 4 : 3).map(function(e, r) {
                                return (0, t.jsx)("div", {
                                    className: l()["discovery__skeleton-reals-item"],
                                    children: (0, t.jsx)(f(), {
                                        className: l()["discovery__skeleton-reals-item-img"],
                                        waveColor: "var(--gray-200)",
                                        backgroundColor: "var(--gray-100)"
                                    })
                                }, r)
                            })
                        })]
                    }), (0, a.range)(6).map(function(e, r) {
                        return (0, t.jsx)(s.Fragment, {
                            children: (0, t.jsx)(f(), {
                                className: l()["discovery__skeleton-item"],
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
                a = s()(function() {
                    return n.e(4164).then(n.bind(n, 14164))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [14164]
                        }
                    },
                    ssr: !1
                }),
                i = s()(function() {
                    return n.e(5627).then(n.bind(n, 75627))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [75627]
                        }
                    },
                    ssr: !1
                }),
                l = s()(function() {
                    return n.e(9745).then(n.bind(n, 69745))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [69745]
                        }
                    },
                    ssr: !1
                }),
                c = s()(function() {
                    return Promise.all([n.e(3620), n.e(2776)]).then(n.bind(n, 12776))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [12776]
                        }
                    },
                    ssr: !1
                }),
                u = s()(function() {
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
                    n = e.selectedCategoryIds,
                    o = e.onClick;
                return r.filter(function(e) {
                    return p.has(null == e ? void 0 : e.type)
                }).map(function(e, r) {
                    var s, p, v, f, m;
                    switch (e.type) {
                        case "product":
                            return (0, t.jsx)(a, {
                                product: e.product,
                                onClick: o
                            }, e.product.id);
                        case "story":
                            return (0, t.jsx)(i, {
                                story: e.story,
                                onClick: o,
                                selectedCategoryIds: n
                            }, e.story.id);
                        case "hashtags":
                            return e.hashtags.length > 0 ? (0, t.jsx)(l, {
                                hashtags: e.hashtags,
                                onClick: o
                            }, (null === (s = e.hashtags[0]) || void 0 === s ? void 0 : s.id) || r) : null;
                        case "tag":
                            return (0, t.jsx)(c, {
                                tag: e,
                                onClick: o
                            }, (null === (p = e.meta) || void 0 === p ? void 0 : p.tagId) || r);
                        case "stories":
                            return (0, t.jsx)(u, {
                                stories: e,
                                onClick: o,
                                selectedCategoryIds: n
                            }, (null === (v = e.meta) || void 0 === v ? void 0 : v.id) || r);
                        case "reel":
                            return (0, t.jsx)(_, {
                                reel: e.reel,
                                onClick: o,
                                selectedCategoryIds: n,
                                source: "discovery"
                            }, (null === (f = e.reel.vendor) || void 0 === f ? void 0 : f.id) || r);
                        case "vendor":
                            return (0, t.jsx)(d, {
                                vendor: e,
                                onClick: o
                            }, (null === (m = e.vendor) || void 0 === m ? void 0 : m.id) || r);
                        default:
                            return null
                    }
                })
            }
        },
        26162: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return m
                }
            });
            var t = n(32930),
                o = n(54810),
                s = n.n(o),
                a = n(81433),
                i = n.n(a),
                l = n(177),
                c = n.n(l),
                u = n(40228),
                d = n.n(u),
                _ = n(53278),
                p = n.n(_),
                v = n(65074),
                f = n.n(v);

            function m(e) {
                var r = e.onRemoveFilters;
                return (0, t.jsx)(c(), {
                    children: (0, t.jsxs)(d(), {
                        className: s()["no-result"],
                        children: [(0, t.jsx)(d().Col, {
                            lg: {
                                size: 5,
                                order: 2
                            },
                            children: (0, t.jsx)(i(), {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                children: (0, t.jsx)(p(), {
                                    src: "https://statics.basalam.com/public/admin/xjjKDJ/01-22/uUKKWdJz2iGrYKFQIjVrsWLkOOgH20GALQUiyRYnpMOeiXuRFo.svg",
                                    imageClass: s()["no-result__image"]
                                })
                            })
                        }), (0, t.jsxs)(d().Col, {
                            className: s()["no-result__withfilter"],
                            lg: 7,
                            children: [(0, t.jsx)("span", {
                                className: s()["no-result__main-title"],
                                children: "با این فیلترها نتیجه ای باقی نموند!"
                            }), (0, t.jsx)("span", {
                                className: s()["no-result__sub-title"],
                                children: "می‌خوای بعضی از فیلترها رو حذف کن یا اضافه کن!"
                            }), (0, t.jsx)(f(), {
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
        36858: function(e, r, n) {
            "use strict";
            n.d(r, {
                L: function() {
                    return s
                }
            });
            var t = n(21318),
                o = n(27434);

            function s() {
                var e = _sliced_to_array((0, o.useState)([]), 2),
                    r = e[0],
                    n = e[1],
                    s = (0, t.Py)(),
                    a = s.data,
                    i = s.isFetching,
                    l = s.isError,
                    c = (0, o.useMemo)(function() {
                        return r.map(function(e) {
                            return e.id
                        })
                    }, [r]),
                    u = (0, o.useCallback)(function(e) {
                        n(function(r) {
                            return r.some(function(r) {
                                return r.id === e.id
                            }) ? r : _to_consumable_array(r).concat([e])
                        })
                    }, []),
                    d = (0, o.useCallback)(function(e) {
                        return n(function(r) {
                            return r.filter(function(r) {
                                return r.id !== e.id
                            })
                        })
                    }, []),
                    _ = (0, o.useCallback)(function() {
                        n(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [])
                    }, []),
                    p = (0, o.useCallback)(function() {
                        return n([])
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
                    resetSelectedCategories: p
                }
            }
        },
        73853: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return N
                }
            });
            var t = n(32930),
                o = n(52233),
                s = n.n(o),
                a = n(31748),
                i = n.n(a),
                l = n(92369),
                c = n(21318),
                u = n(5164),
                d = n(33656),
                _ = n(27434),
                p = n(45835),
                v = n(36858),
                f = n(83642),
                m = n(65817),
                g = n(177),
                y = n.n(g),
                h = n(55701),
                b = n.n(h),
                j = n(65053),
                x = n(26162),
                C = n(94287),
                k = n(37314),
                w = n(23489),
                I = n(70157),
                P = (0, _.forwardRef)(function(e, r) {
                    var n = e.children,
                        o = e.style;
                    return (0, t.jsx)("div", {
                        ref: r,
                        style: o,
                        children: n
                    })
                });

            function N() {
                var e, r = (0, d.O)().showReelsInDiscovery,
                    n = (0, v.L)(),
                    o = n.selectCategory,
                    a = n.removeCategory,
                    g = n.selectedIds,
                    h = n.categories,
                    N = n.categoriesIsFetching,
                    O = n.categoriesIsError,
                    S = n.resetSelectedCategories,
                    F = n.selectedCategories,
                    M = n.applySelectedCategories,
                    D = (0, p.b)().ua.isPc,
                    q = (0, c.wl)({
                        isDesktop: D,
                        categoryIds: g,
                        hasReels: r
                    }),
                    R = q.data,
                    A = q.isError,
                    Z = q.refetch,
                    E = q.hasNextPage,
                    z = q.fetchNextPage,
                    L = q.isFetching,
                    K = q.isFetched;
                (0, _.useEffect)(function() {
                    var e = u.bsSessionStorage.getItem("discoveryPosition");
                    e && (setTimeout(function() {
                        window.scrollTo({
                            top: Number(e),
                            behavior: "smooth"
                        })
                    }, 600), u.bsSessionStorage.removeItem("discoveryPosition"))
                }, []);
                var T = D ? 1500 : 500,
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
                        (0, l.publishEvent)("discoveryMixedView", {
                            page: e,
                            components: r
                        })
                    }
                }, [null == R ? void 0 : R.pages, U]), (0, t.jsxs)("main", {
                    children: [(0, t.jsxs)(s(), {
                        children: [(0, t.jsx)("title", {
                            children: "بازارگردی | باسلام"
                        }), (0, t.jsx)("meta", {
                            name: "robots",
                            content: "noindex"
                        })]
                    }), D ? (0, t.jsx)(C.default, {}) : (0, t.jsx)(k.default, {
                        isShowSearch: !0
                    }), (0, t.jsxs)(y(), {
                        className: i().discovery__wrapper,
                        children: [(0, t.jsx)(j.Z, {
                            categories: h,
                            selectCategory: o,
                            removeCategory: a,
                            isFetching: N,
                            isError: O,
                            selectedIds: g,
                            selectedCategories: F,
                            applySelectedCategories: M
                        }), (null == U ? void 0 : U.length) > 0 && (0, t.jsx)(b(), {
                            useWindowScroll: !0,
                            totalCount: null == R || null === (e = R.pages) || void 0 === e ? void 0 : e.length,
                            data: R.pages,
                            itemContent: function(e, r) {
                                var n;
                                return (null == r ? void 0 : r.components) && 0 !== r.components.length ? (0, t.jsx)("div", {
                                    className: i().discovery__grid,
                                    "data-page": null == r ? void 0 : r.nextComponentIndex,
                                    children: null == r || null === (n = r.components) || void 0 === n ? void 0 : n.map(function(r, n) {
                                        return (0, t.jsx)(I.Z, {
                                            sections: [r],
                                            selectedCategoryIds: g,
                                            onClick: W
                                        }, "".concat(n, "-").concat(e))
                                    })
                                }) : null
                            },
                            endReached: E && z,
                            components: {
                                List: P,
                                Footer: function() {
                                    return (0, t.jsxs)(t.Fragment, {
                                        children: [L && (0, t.jsx)(m.Z, {}), A && (0, t.jsx)(f.Z, {
                                            fetch: Z
                                        })]
                                    })
                                }
                            },
                            atBottomThreshold: 500,
                            overscan: {
                                main: T,
                                reverse: T
                            }
                        }), L && !(null == U ? void 0 : U.length) && (0, t.jsx)(m.Z, {}), K && 0 === (null == U ? void 0 : U.length) && (0, t.jsx)(x.Z, {
                            onRemoveFilters: S
                        })]
                    }), (0, t.jsx)(w.Z, {})]
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
                s = n(97271),
                a = n.n(s),
                i = n(65074),
                l = n.n(i),
                c = n(45835);

            function u() {
                var e = (0, c.b)().ua;
                return (0, t.jsx)(l(), {
                    square: !0,
                    icon: "bi-angle-up",
                    size: e.isPc ? "lg" : "md",
                    className: (0, o.Z)("jump-to-top-button", a()["jump-to-top-button"]),
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
            var t = n(13014),
                o = n(39953),
                s = n(67938),
                a = n(88107),
                i = n(59403),
                l = n(36492),
                c = n(32066),
                u = function() {
                    return (0, s.Db)(["add-reel"], c.f5)
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
                        a = e.userId,
                        l = void 0 === a ? null : a,
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
                        queryKey: ["reels"].concat(_to_consumable_array(l ? [t.d.user_reels, l] : [t.d.owner_reels, p])),
                        queryFn: function(e) {
                            var r = e.pageParam,
                                t = void 0 === r ? 0 : r;
                            return (0, c.MB)({
                                params: {
                                    limit: n,
                                    isConfirmed: p,
                                    lastIdx: t
                                }
                            }, l)
                        }
                    }, s))
                },
                p = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, l.a)(_object_spread({
                        queryFn: function() {
                            return (0, c.Q1)(e)
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
                        queryKey: ["reels", t.d.hashtag_reels, e],
                        queryFn: function(r) {
                            var n = r.pageParam,
                                t = void 0 === n ? 0 : n;
                            return (0, c.AA)({
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
                        queryKey: ["reels", t.d.product_reels, r],
                        getNextPageParam: function(e) {
                            return e.lastIdx > 0 ? e.lastIdx : void 0
                        },
                        queryFn: function(e) {
                            var t = e.pageParam,
                                o = void 0 === t ? 0 : t;
                            return (0, c.rH)({
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
                                        return (0, c.P6)({
                                            params: {
                                                type: e
                                            }
                                        })
                                    },
                                    queryKey: ["reels", t.d.top_reels, e]
                                }, r)
                            })
                        }),
                        a = o.reduce(function(e, r) {
                            var n;
                            return _to_consumable_array(e).concat(_to_consumable_array((null == r || null === (n = r.data) || void 0 === n ? void 0 : n.openapiRawData) || []))
                        }, []),
                        i = o.some(function(e) {
                            return e.isLoading
                        }),
                        l = o.some(function(e) {
                            return e.isError
                        });
                    return {
                        data: a,
                        isError: l,
                        isLoading: i
                    }
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = (0, a.Z)();
                    return (0, l.a)(_object_spread({
                        queryFn: function() {
                            return []
                        },
                        queryKey: ["reels", t.d.products_has_reels, null == r ? void 0 : r.asPath]
                    }, e))
                },
                y = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return (0, i.N)(_object_spread({
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
                            return (0, c.aV)({
                                query: e,
                                limit: r,
                                offset: (o - 1) * r
                            })
                        }
                    }, n))
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
                        queryKey: ["reels", t.d.search_score_reels, e]
                    }, r))
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.Db)(c.Y8, e)
                },
                j = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.Db)(c.Hi, e)
                },
                x = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.Db)(c.Q2, e)
                },
                C = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, s.Db)(c.H4, e)
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
                    return c
                }
            });
            var t = n(27434),
                o = n(30257),
                s = n(88592),
                a = n(39029),
                i = n(88107),
                l = n(60802);

            function c(e) {
                var r, n, c, u, d = (0, i.Z)(),
                    _ = (0, s.M_)(["userId", "currentUser"]),
                    p = _.userId,
                    v = _.currentUser,
                    f = (0, l.l)().getFeatureValue,
                    m = null == d || null === (r = d.query) || void 0 === r ? void 0 : r.vendorIdentifier,
                    g = (0, a.b)(m),
                    y = g.data,
                    h = g.isLoading,
                    b = p === (null == y || null === (n = y.user) || void 0 === n ? void 0 : n.id) || !m && "reels" === d.query.tab,
                    j = (0, o.XT)({
                        enabled: !(h || !e),
                        userId: b ? null : null == y || null === (c = y.user) || void 0 === c ? void 0 : c.id
                    }),
                    x = j.data,
                    C = j.isLoading,
                    k = (0, t.useMemo)(function() {
                        return f("reels_is_visible_in_vendor_home")
                    }, [f]),
                    w = (0, t.useMemo)(function() {
                        return f("reels_tutorial_is_visible_in_vendor_home")
                    }, [f]),
                    I = (0, t.useMemo)(function() {
                        return f("reels_can_create")
                    }, [f]),
                    P = (0, t.useMemo)(function() {
                        return f("reels_can_import_from_instagram")
                    }, [f]),
                    N = (0, t.useMemo)(function() {
                        return f("reels_is_visible_in_discovery")
                    }, [f]),
                    O = (0, t.useMemo)(function() {
                        return f("reels_is_visible_in_search")
                    }, [f]),
                    S = (0, t.useMemo)(function() {
                        return f("reels_is_visible_in_pdp")
                    }, [f]),
                    F = (0, t.useMemo)(function() {
                        return f("reels_create_max_upload_number")
                    }, [f]),
                    M = (0, t.useMemo)(function() {
                        var r, n, t = null == x || null === (n = x.pages) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r.metadata;
                        if (!e || !t) return {
                            reelsCheckingCount: 0,
                            reelsConfirmedCount: 0
                        };
                        var o = t.countConfirmed;
                        return {
                            reelsCheckingCount: t.countChecking,
                            reelsConfirmedCount: o
                        }
                    }, [e, null == x ? void 0 : x.pages]),
                    D = M.reelsConfirmedCount,
                    q = M.reelsCheckingCount,
                    R = (null == v || null === (u = v.vendor) || void 0 === u ? void 0 : u.isActive) && I;
                return {
                    isLoading: h || C,
                    isReelsOwner: b,
                    isReelsCreator: R,
                    showReelsInSearch: R || O,
                    reelsCheckingCount: q,
                    canWatchReelsInTab: k,
                    canWatchReelsInPdp: S,
                    maxUploadReelsCount: F,
                    reelsConfirmedCount: D,
                    showReelsInDiscovery: R || N,
                    canWatchReelsInSearch: O,
                    canImportFromInstagram: P,
                    canWatchReelsInDiscovery: N,
                    canWatchReelsTutorialInTab: w
                }
            }
        },
        39029: function(e, r, n) {
            "use strict";
            n.d(r, {
                b: function() {
                    return a
                }
            });
            var t = n(67938),
                o = n(5164),
                s = n(34e3),
                a = function(e) {
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
        },
        97271: function(e) {
            e.exports = {
                "jump-to-top-button": "D1qB_U"
            }
        }
    }
]);