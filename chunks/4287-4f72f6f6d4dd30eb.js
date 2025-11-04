function _array_like_to_array(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
    return r
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _define_property(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e
}

function _iterable_to_array_limit(e, n) {
    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != t) {
        var r, a, i = [],
            o = !0,
            s = !1;
        try {
            for (t = t.call(e); !(o = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); o = !0);
        } catch (e) {
            s = !0, a = e
        } finally {
            try {
                o || null == t.return || t.return()
            } finally {
                if (s) throw a
            }
        }
        return i
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _sliced_to_array(e, n) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, n) || _unsupported_iterable_to_array(e, n) || _non_iterable_rest()
}

function _unsupported_iterable_to_array(e, n) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, n);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _array_like_to_array(e, n) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4287], {
        94287: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return be
                }
            });
            var r = t(32930),
                a = t(40877),
                i = t(2347),
                o = t(99321),
                s = t.n(o),
                c = t(56345),
                l = t(30082),
                u = t(27434),
                d = t(177),
                _ = t.n(d),
                m = t(40228),
                h = t.n(m),
                f = t(1103),
                p = t.n(f),
                g = t(26050),
                v = t.n(g),
                x = t(81433),
                b = t.n(x),
                j = t(53278),
                y = t.n(j),
                N = {
                    out: {
                        height: 0
                    },
                    transitionProperty: "height",
                    in: {
                        height: "calc(99vh - var(--header-desktop-height) - var(--top-banner-height))"
                    }
                },
                w = (0, u.memo)(function(e) {
                    var n = e.category,
                        t = e.isActive,
                        o = e.onMouseOver,
                        l = e.onMouseLeave,
                        u = e.onClick,
                        d = e.href;
                    return (0, r.jsxs)(i.Z, {
                        className: (0, a.Z)(s()["megamenu__content-categories-item"], _define_property({}, s()["megamenu__content-categories-item--active"], t)),
                        href: d,
                        onClick: u,
                        onMouseOver: o,
                        onMouseLeave: l,
                        children: [(0, r.jsx)("img", {
                            className: s()["megamenu__content-categories-item-icon"],
                            src: n.imageUrl || c.F.src,
                            alt: n.title
                        }), (0, r.jsx)("span", {
                            className: s()["megamenu__content-categories-item-title"],
                            children: n.title
                        }), (0, r.jsx)("i", {
                            className: (0, a.Z)("bi-angle-left", s()["megamenu__content-categories-item-angle"])
                        })]
                    })
                });
            w.displayName = "CategoryItem";
            var C = (0, u.memo)(function(e) {
                var n = e.category,
                    t = e.isActive,
                    o = e.onMouseOver,
                    c = e.onMouseLeave,
                    l = e.onClick,
                    u = e.href;
                return (0, r.jsxs)(i.Z, {
                    className: (0, a.Z)(s()["megamenu__content-categories-item"], _define_property({}, s()["megamenu__content-categories-item--active"], t)),
                    href: u,
                    onClick: l,
                    onMouseOver: o,
                    onMouseLeave: c,
                    children: [(0, r.jsx)("span", {
                        className: s()["megamenu__content-categories-item-title"],
                        children: n.title
                    }), (0, r.jsx)("i", {
                        className: (0, a.Z)("bi-angle-left", s()["megamenu__content-categories-item-angle"])
                    })]
                })
            });
            C.displayName = "SubCategoryItem";
            var k = (0, u.memo)(function(e) {
                var n = e.childCategory,
                    t = e.href;
                return (0, r.jsx)(h().Col, {
                    xs: 3,
                    children: (0, r.jsx)(i.Z, {
                        className: s()["megamenu__content-subcategories-item-children"],
                        href: t,
                        title: n.title,
                        children: (0, r.jsxs)(b(), {
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            children: [(0, r.jsx)(y(), {
                                className: s()["megamenu__content-subcategories-item-children-image"],
                                src: n.imageUrl || c.F.src,
                                alt: n.title
                            }), (0, r.jsx)("span", {
                                className: s()["megamenu__content-subcategories-item-children-title"],
                                children: n.title
                            })]
                        })
                    })
                })
            });

            function Z(e) {
                var n = e.isShow,
                    t = e.showMegamenu,
                    a = e.hideMegamenu,
                    o = (0, u.useRef)(),
                    c = (0, l.Z)({
                        enabled: n,
                        staleTime: 1 / 0
                    }).data,
                    d = (0, l.Kn)({
                        enabled: !c,
                        placeholderData: c
                    }).data,
                    m = (0, u.useMemo)(function() {
                        return (null == c ? void 0 : c[0]) || (null == d ? void 0 : d[0])
                    }, [c, d]),
                    f = _sliced_to_array((0, u.useState)(null == m ? void 0 : m.id), 2),
                    g = f[0],
                    x = f[1],
                    j = _sliced_to_array((0, u.useState)(null), 2),
                    y = j[0],
                    Z = j[1],
                    M = (0, u.useRef)(),
                    S = (0, u.useMemo)(function() {
                        return (null == c ? void 0 : c.find(function(e) {
                            return e.id === g
                        })) || (null == d ? void 0 : d.find(function(e) {
                            return e.id === g
                        }))
                    }, [c, d, g]),
                    T = (0, u.useMemo)(function() {
                        var e;
                        return null == S || null === (e = S.children) || void 0 === e ? void 0 : e.find(function(e) {
                            return e.id === y
                        })
                    }, [S, y]),
                    F = (0, u.useCallback)(function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        clearTimeout(o.current), n ? Z(e) : o.current = setTimeout(function() {
                            Z(e)
                        }, 200)
                    }, []);
                (0, u.useEffect)(function() {
                    var e;
                    if (c && g) {
                        var n = c.find(function(e) {
                            return e.id === g
                        });
                        (null == n || null === (e = n.children) || void 0 === e ? void 0 : e[0]) && Z(n.children[0].id)
                    }
                }, [c, g]);
                var L = (0, u.useCallback)(function(e) {
                        clearTimeout(o.current), o.current = setTimeout(function() {
                            var n, t;
                            x(e);
                            var r = null == c ? void 0 : c.find(function(n) {
                                return n.id === e
                            });
                            F(null == r || null === (t = r.children) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.id, !0), M.current && (M.current.scrollTop = 0)
                        }, 200)
                    }, [c, F]),
                    O = (0, u.useCallback)(function() {
                        clearTimeout(o.current)
                    }, []),
                    E = (0, u.useCallback)(function(e) {
                        return function() {
                            return L(e)
                        }
                    }, [L]),
                    U = (0, u.useCallback)(function(e) {
                        return function() {
                            return F(e)
                        }
                    }, [F]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p(), {
                        mounted: n,
                        transition: N,
                        duration: 400,
                        children: function(e) {
                            var n, o;
                            return (0, r.jsx)("div", {
                                className: s().megamenu,
                                style: e,
                                children: (0, r.jsx)(_(), {
                                    children: (0, r.jsx)("div", {
                                        className: s().megamenu__content,
                                        onFocus: t,
                                        onBlur: a,
                                        onMouseOver: t,
                                        onMouseLeave: a,
                                        children: (0, r.jsxs)(h(), {
                                            children: [(0, r.jsx)(h().Col, {
                                                xs: 3,
                                                xl: 3,
                                                className: s()["megamenu__content-categories"],
                                                children: (0, r.jsx)("aside", {
                                                    children: null == d ? void 0 : d.map(function(e) {
                                                        return (0, r.jsx)(w, {
                                                            category: e,
                                                            isActive: g === e.id,
                                                            href: "/cat/".concat(e.slug),
                                                            onClick: a,
                                                            onMouseOver: E(e.id),
                                                            onMouseLeave: O
                                                        }, e.id)
                                                    })
                                                })
                                            }), (0, r.jsx)(h().Col, {
                                                xs: 3,
                                                xl: 3,
                                                className: s()["megamenu__content-categories"],
                                                children: (0, r.jsx)("aside", {
                                                    children: null == S || null === (n = S.children) || void 0 === n ? void 0 : n.map(function(e) {
                                                        return (0, r.jsx)(C, {
                                                            category: e,
                                                            isActive: y === e.id,
                                                            href: "/cat/".concat(S.slug, "/").concat(e.slug),
                                                            onClick: a,
                                                            onMouseOver: U(e.id),
                                                            onMouseLeave: O
                                                        }, e.id)
                                                    })
                                                })
                                            }), (0, r.jsxs)(h().Col, {
                                                xs: 6,
                                                xl: 6,
                                                children: [0 === (null == S || null === (o = S.children) || void 0 === o ? void 0 : o.length) && (0, r.jsx)(b(), {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    className: s()["megamenu__content-box"],
                                                    children: (0, r.jsx)(v(), {})
                                                }), (null == T ? void 0 : T.children) && (0, r.jsx)("div", {
                                                    ref: M,
                                                    children: (0, r.jsxs)("div", {
                                                        className: s()["megamenu__content-subcategories"],
                                                        children: [(0, r.jsxs)(i.Z, {
                                                            href: "/cat/".concat(S.slug, "/").concat(T.slug),
                                                            className: s()["megamenu__content-subcategories-title"],
                                                            children: [(0, r.jsxs)("span", {
                                                                children: ["مشاهده دسته ", T.title]
                                                            }), (0, r.jsx)("i", {
                                                                className: "bi-angle-left"
                                                            })]
                                                        }), (0, r.jsx)(h(), {
                                                            className: s()["megamenu__content-subcategories-item-container"],
                                                            children: T.children.map(function(e) {
                                                                return (0, r.jsx)(k, {
                                                                    childCategory: e,
                                                                    href: "/cat/".concat(S.slug, "/").concat(e.slug)
                                                                }, e.id)
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        }
                    }), (0, r.jsx)(p(), {
                        mounted: n,
                        transition: "fade",
                        duration: 300,
                        children: function(e) {
                            return (0, r.jsx)("div", {
                                className: s()["megamenu-backdrop"],
                                style: e
                            })
                        }
                    })]
                })
            }
            k.displayName = "ChildCategoryItem";
            var M = t(2389),
                S = t.n(M),
                T = t(5670),
                F = t.n(T),
                L = t(36350),
                O = t(88107),
                E = t(76303),
                U = t.n(E),
                A = t(60802),
                I = t(40402),
                R = S()(function() {
                    return t.e(20).then(t.bind(t, 99e3))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [99e3]
                        }
                    },
                    ssr: !1
                }),
                B = S()(function() {
                    return Promise.all([t.e(5625), t.e(6073)]).then(t.bind(t, 15625))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [15625]
                        }
                    },
                    ssr: !1
                });

            function q() {
                var e = (0, u.useRef)(null),
                    n = (0, O.Z)(),
                    t = (0, L.useEmitter)().subEvent,
                    i = _sliced_to_array((0, u.useState)(""), 2),
                    o = i[0],
                    s = i[1],
                    c = _sliced_to_array((0, u.useState)(""), 2),
                    l = c[0],
                    d = c[1],
                    _ = _sliced_to_array((0, u.useState)(!1), 2),
                    m = _[0],
                    h = _[1],
                    f = (0, A.l)(),
                    g = f.getFeatureValue,
                    v = f.runGBTest,
                    x = _sliced_to_array((0, u.useState)(!1), 2),
                    b = x[0],
                    j = x[1],
                    y = _sliced_to_array((0, u.useState)(null), 2),
                    N = y[0],
                    w = y[1],
                    C = (0, u.useCallback)(function(e) {
                        s(e)
                    }, []),
                    k = (0, I.F)(C, 0),
                    Z = k.debouncedHandler,
                    M = k.isLoading,
                    S = function(e) {
                        d(e), Z(e)
                    };
                (0, u.useEffect)(function() {
                    var e, t = (null === (e = n.query) || void 0 === e ? void 0 : e.q) || "";
                    l !== t && S(t)
                }, [n.query]);
                var T = function() {
                    j(!1)
                };
                return t("search-focus", function() {
                    var n, t;
                    null === (n = e.current) || void 0 === n || n.focus(), null === (t = e.current) || void 0 === t || t.select()
                }), (0, u.useEffect)(function() {
                    var e = "yes" === g("image_search");
                    h(e)
                }, [g]), (0, u.useEffect)(function() {
                    var e;
                    if (b && !N) {
                        var n = null === (e = v("test_autocomplete_service")) || void 0 === e ? void 0 : e.value;
                        w(n)
                    }
                }, [N, b, v]), (0, r.jsxs)("div", {
                    className: (0, a.Z)(F()["search-box"], _define_property({}, F()["search-box--active"], b)),
                    children: [(0, r.jsx)(p(), {
                        mounted: b,
                        transition: "fade",
                        duration: 200,
                        children: function(e) {
                            return (0, r.jsx)("div", {
                                onClick: T,
                                className: F()["search-box__backdrop"],
                                style: e
                            })
                        }
                    }), (0, r.jsxs)("div", {
                        className: (0, a.Z)(F()["search-box__content"], _define_property({}, F()["search-box__content--active"], b)),
                        children: [(0, r.jsxs)("form", {
                            className: F()["search-box__content-type-wrapper"],
                            action: "/s",
                            onSubmit: function(t) {
                                t.preventDefault(), e.current.blur(), T(), setTimeout(function() {
                                    n.push({
                                        pathname: "/s",
                                        query: {
                                            q: l
                                        }
                                    })
                                }, 100)
                            },
                            children: [(0, r.jsxs)("div", {
                                className: F()["search-box__content-type"],
                                children: [(0, r.jsx)("i", {
                                    className: (0, a.Z)("bi-search", F()["search-box__content-type-icon"])
                                }), (0, r.jsx)("input", {
                                    name: "q",
                                    ref: e,
                                    autoComplete: "off",
                                    className: F()["search-box__content-type-input"],
                                    type: "text",
                                    placeholder: "جست‌وجو در بازار",
                                    value: l,
                                    onChange: function(e) {
                                        return S(e.target.value)
                                    },
                                    onFocus: function() {
                                        return j(!0)
                                    }
                                })]
                            }), m && (0, r.jsx)("div", {
                                className: F()["search-box__content-type-img-search"],
                                onClick: function() {
                                    n.push("/s/image")
                                },
                                children: (0, r.jsx)(U(), {
                                    name: "bi-image-search",
                                    size: "24"
                                })
                            })]
                        }), (0, r.jsx)(p(), {
                            mounted: b,
                            transition: "fade",
                            duration: 200,
                            children: function(e) {
                                return (0, r.jsxs)("div", {
                                    className: F()["search-box__content-suggestions"],
                                    style: e,
                                    children: [(0, r.jsx)(B, {
                                        isLoading: M,
                                        query: o,
                                        onClose: T,
                                        searchSuggestionsVariant: N
                                    }), (0, r.jsx)(R, {
                                        onClose: T
                                    })]
                                })
                            }
                        })]
                    })]
                })
            }
            var P = t(22769),
                z = t.n(P),
                G = t(2134),
                H = t.n(G),
                V = t(53815),
                D = t.n(V),
                Q = t(5164),
                W = t(84581),
                X = t(32397),
                K = t(32502),
                Y = t.n(K),
                J = t(55253),
                $ = t.n(J),
                ee = t(70437),
                ne = t.n(ee);

            function te() {
                return (0, r.jsxs)("div", {
                    className: Y().hli,
                    children: [(0, r.jsx)($(), {
                        size: "28"
                    }), (0, r.jsx)(ne(), {
                        width: 65,
                        height: 23,
                        className: Y()["hli__label-skeleton"]
                    })]
                })
            }
            var re = t(34641),
                ae = t(55633),
                ie = t(88592),
                oe = t(22434),
                se = t(77417),
                ce = t.n(se),
                le = t(56855),
                ue = t.n(le);

            function de() {
                var e, n, t = (0, O.Z)(),
                    o = (0, ie.M_)(["isVendor", "isLoadingCurrentUser", "currentUser", "bnpl", "credit", "authMode"]),
                    s = o.isVendor,
                    c = o.isLoadingCurrentUser,
                    l = o.currentUser,
                    d = o.bnpl,
                    _ = o.credit,
                    m = o.authMode,
                    h = (null == d ? void 0 : d.activated) || (null == d ? void 0 : d.isActivationAvailable),
                    f = (0, u.useRef)(),
                    p = (0, u.useRef)(),
                    g = (0, u.useRef)(null),
                    x = _sliced_to_array((0, u.useState)(!1), 2),
                    b = x[0],
                    j = x[1],
                    y = H()().publicRuntimeConfig,
                    N = (0, oe.Z)(m, t.pathname),
                    w = (0, ae.Z)().handleCreateVendorClickBtn,
                    C = (0, u.useMemo)(function() {
                        return [{
                            title: "سفارش‌ها",
                            icon: "bi-orders",
                            href: "/account/orders"
                        }, {
                            icon: "bi-star",
                            title: "تجربه‌های خرید",
                            href: "/account/unrevieweds"
                        }, {
                            title: "لیست‌ها",
                            icon: "bi-bookmark",
                            href: "/account/bookmarks"
                        }, {
                            icon: "bi-vendor",
                            onClick: w,
                            title: s ? "رفتن به مدیریت غرفه" : "ایجاد غرفه"
                        }, {
                            title: "آدرس‌ها",
                            icon: "bi-guide-board",
                            href: "/account/addresses"
                        }, {
                            title: "تنظیمات",
                            icon: "bi-settings",
                            href: "/account/edit"
                        }]
                    }, [w, s]);
                return (0, u.useEffect)(function() {
                    return b && (f.current = setTimeout(function() {
                            if (p.current) {
                                var e = p.current.getBoundingClientRect();
                                p.current.style.maxHeight = "".concat(window.innerHeight - e.top, "px")
                            }
                        }, 300)),
                        function() {
                            clearTimeout(f.current)
                        }
                }, [b]), (0, r.jsxs)("div", {
                    children: [c && (0, r.jsx)(te, {}), !c && l && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("button", {
                            ref: g,
                            className: D()["user-anchor"],
                            onClick: function() {
                                return j(!0)
                            },
                            children: [(0, r.jsx)($(), {
                                src: null === (e = l.avatar) || void 0 === e ? void 0 : e.extraSmall,
                                size: "28"
                            }), (0, r.jsxs)("span", {
                                className: D()["user-anchor__label"],
                                children: ["حساب کاربری ", (0, r.jsx)("i", {
                                    className: (0, a.Z)("bi-angle-down", D()["user-anchor__label-icon"])
                                })]
                            })]
                        }), (0, r.jsx)(ce(), {
                            anchorEl: null == g ? void 0 : g.current,
                            show: b,
                            transition: {
                                common: {
                                    transformOrigin: "center"
                                },
                                transitionProperty: "transform, opacity",
                                in: {
                                    opacity: 1,
                                    transform: "translateY(10px)"
                                },
                                out: {
                                    opacity: 0,
                                    transform: "translateY(-10px)"
                                }
                            },
                            position: "bottom-left",
                            onClose: function() {
                                return j(!1)
                            },
                            children: (0, r.jsxs)("div", {
                                ref: p,
                                className: D()["user-dropdown"],
                                children: [(0, r.jsxs)("div", {
                                    className: D()["user-dropdown__profile"],
                                    children: [(0, r.jsx)(i.Z, {
                                        href: (null == l ? void 0 : l.vendor) ? "/".concat(l.vendor.identifier) : (0, re.j)(l),
                                        children: (0, r.jsx)($(), {
                                            src: null === (n = l.avatar) || void 0 === n ? void 0 : n.extraSmall,
                                            size: "56"
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: D()["user-dropdown__profile-info"],
                                        children: [(0, r.jsx)(i.Z, {
                                            href: (null == l ? void 0 : l.vendor) ? "/".concat(l.vendor.identifier) : (0, re.j)(l),
                                            className: D()["user-dropdown__profile-name"],
                                            children: l.name
                                        }), (0, r.jsx)(X.Z, {
                                            user: l,
                                            showFollowers: null == l ? void 0 : l.vendor
                                        })]
                                    })]
                                }), h && (0, r.jsxs)(i.Z, {
                                    href: d.activated ? "".concat(y.salampayUrl, "/home?prev=").concat(t.asPath) : "".concat(y.salampayUrl, "/credit-request/new?prev=").concat(t.asPath),
                                    className: D()["user-dropdown__item"],
                                    target: "_blank",
                                    onClick: function() {
                                        (0, W.s)("profileBnplActivationTouchpoint", {
                                            bnplIsActivated: null == d ? void 0 : d.activated
                                        })
                                    },
                                    children: [(0, r.jsx)("i", {
                                        className: (0, a.Z)("bi-salampay", D()["user-dropdown__item-icon"])
                                    }), (0, r.jsx)("span", {
                                        className: D()["user-dropdown__item-title"],
                                        children: "سرویس اعتباری"
                                    }), !d.activated && (0, r.jsx)(ue(), {
                                        color: "green",
                                        variant: "text",
                                        size: "md",
                                        label: "جدید",
                                        className: D()["user-dropdown__item-label"]
                                    }), (0, r.jsxs)("div", {
                                        className: D()["user-dropdown__item-left"],
                                        children: [d.activated && (0, r.jsxs)("div", {
                                            className: D()["user-dropdown__item-left-credit"],
                                            children: [(0, r.jsx)("span", {
                                                className: D()["user-dropdown__item-left-credit-value"],
                                                children: (0, Q.priceFormat)(d.totalBalance)
                                            }), (0, r.jsx)("i", {
                                                className: (0, a.Z)("bi-toman", D()["user-dropdown__item-left-credit-icon"])
                                            })]
                                        }), (0, r.jsx)("i", {
                                            className: (0, a.Z)("bi-angle-left", D()["user-dropdown__item-left-angle"])
                                        })]
                                    })]
                                }), (0, r.jsxs)(i.Z, {
                                    href: "".concat(y.walletUrl, "?from=customer"),
                                    className: D()["user-dropdown__item"],
                                    target: "_blank",
                                    children: [(0, r.jsx)("i", {
                                        className: (0, a.Z)("bi-wallet", D()["user-dropdown__item-icon"])
                                    }), (0, r.jsx)("span", {
                                        className: D()["user-dropdown__item-title"],
                                        children: "کیف پول"
                                    }), (0, r.jsxs)("div", {
                                        className: D()["user-dropdown__item-left"],
                                        children: [(0, r.jsxs)("div", {
                                            className: D()["user-dropdown__item-left-credit"],
                                            children: [_ ? (0, r.jsx)("span", {
                                                className: D()["user-dropdown__item-left-credit-value"],
                                                children: (0, Q.priceFormat)(_.total)
                                            }) : (0, r.jsx)(v(), {
                                                variant: "ellipsis",
                                                size: "sm",
                                                color: "black"
                                            }), (0, r.jsx)("i", {
                                                className: (0, a.Z)("bi-toman", D()["user-dropdown__item-left-credit-icon"])
                                            })]
                                        }), (0, r.jsx)("i", {
                                            className: (0, a.Z)("bi-angle-left", D()["user-dropdown__item-left-angle"])
                                        })]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: D()["user-dropdown__divider"]
                                }), C.map(function(e, n) {
                                    var t = e.href ? i.Z : "div";
                                    return (0, r.jsxs)(t, {
                                        href: e.href,
                                        className: D()["user-dropdown__item"],
                                        onClick: e.onClick,
                                        children: [(0, r.jsx)("i", {
                                            className: (0, a.Z)(e.icon, D()["user-dropdown__item-icon"])
                                        }), (0, r.jsx)("span", {
                                            className: D()["user-dropdown__item-title"],
                                            children: e.title
                                        }), (0, r.jsx)("div", {
                                            className: D()["user-dropdown__item-left"],
                                            children: (0, r.jsx)("i", {
                                                className: (0, a.Z)("bi-angle-left", D()["user-dropdown__item-left-angle"])
                                            })
                                        })]
                                    }, n)
                                }), (0, r.jsx)("div", {
                                    className: D()["user-dropdown__divider"]
                                }), (0, r.jsxs)("button", {
                                    className: D()["user-dropdown__item"],
                                    onClick: function() {
                                        (0, W.s)("logout"), N.mutate()
                                    },
                                    children: [(0, r.jsx)("i", {
                                        className: (0, a.Z)("bi-logout", D()["user-dropdown__item-icon"])
                                    }), (0, r.jsx)("span", {
                                        className: D()["user-dropdown__item-title"],
                                        children: "خروج"
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }
            var _e = t(81918),
                me = t(61033),
                he = t(45835),
                fe = t(61262),
                pe = t(36839),
                ge = t(65074),
                ve = t.n(ge),
                xe = {
                    src: "https://basalam.com/_next/static/media/black-logotype.51623141.svg"
                };

            function be(e) {
                var n, t, o, s = e.scrollMode,
                    c = void 0 === s ? "dynamic" : s,
                    l = e.slotAppend,
                    d = e.className,
                    m = (0, O.Z)(),
                    h = (0, _e.E)(),
                    f = (0, he.b)().isCachedPage,
                    p = (0, fe.B)().authForm.toggleModal,
                    g = (0, A.l)().getFeatureValue,
                    v = _sliced_to_array((0, u.useState)(!1), 2),
                    x = v[0],
                    b = v[1],
                    j = _sliced_to_array((0, u.useState)(!1), 2),
                    y = j[0],
                    N = j[1],
                    w = (0, pe.dalanMapGetters)(["unseenMessages"]).unseenMessages,
                    C = (0, u.useMemo)(function() {
                        var e, n;
                        return (null !== (e = null == w ? void 0 : w.chat) && void 0 !== e ? e : 0) + (null !== (n = null == w ? void 0 : w.notification) && void 0 !== n ? n : 0)
                    }, [null == w ? void 0 : w.chat, null == w ? void 0 : w.notification]),
                    k = (0, ie.M_)(["typeOfUser", "isLoadingCurrentUser", "orderCount", "isLoggedIn", "currentUser"]),
                    M = k.typeOfUser,
                    S = k.orderCount,
                    T = k.isLoggedIn,
                    F = k.isLoadingCurrentUser,
                    L = k.currentUser,
                    E = (0, u.useRef)(null),
                    U = (0, u.useRef)(null),
                    I = (0, u.useRef)(null),
                    R = (0, u.useRef)(!1),
                    B = (null === (n = g("theme")) || void 0 === n ? void 0 : n.logo) || xe.src,
                    P = null === (t = g("chat_config")) || void 0 === t ? void 0 : t.allow_not_login;
                (0, u.useEffect)(function() {
                    return me.Z.init(z(), c), b(!0),
                        function() {
                            clearTimeout(E.current)
                        }
                }, []);
                var G = (0, u.useCallback)(function() {
                        R.current = !0, clearTimeout(U.current), U.current = setTimeout(function() {
                            R.current = !1
                        }, 1e3)
                    }, []),
                    H = (0, u.useCallback)(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400;
                        clearTimeout(E.current), E.current = setTimeout(function() {
                            N(!0), (0, Q.lockBodyScroll)()
                        }, e)
                    }, []),
                    V = (0, u.useCallback)(function(e) {
                        R.current || H(e)
                    }, [H]),
                    D = (0, u.useCallback)(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400;
                        clearTimeout(E.current), E.current = setTimeout(function() {
                            N(!1), G(), (0, Q.unlockBodyScroll)()
                        }, e)
                    }, [G]);
                (0, u.useEffect)(function() {
                    G(), D(0)
                }, [m.asPath]), (0, u.useEffect)(function() {
                    m.prefetch("/cart")
                }, [m]);
                var X = (0, ae.Z)().handleCreateVendorClickBtn,
                    K = (!T || L && !(null == L || null === (o = L.vendor) || void 0 === o ? void 0 : o.id)) && (!f || f && x) && !F;
                return (0, r.jsxs)("div", {
                    className: d,
                    children: [(0, r.jsx)("div", {
                        className: z()["header-placeholder"],
                        id: "header-placeholder"
                    }), (0, r.jsxs)("header", {
                        className: z().header,
                        id: "header",
                        children: [(0, r.jsx)(_(), {
                            children: (0, r.jsxs)("div", {
                                className: z().header__top,
                                children: [(0, r.jsxs)("div", {
                                    className: z()["header__top-right"],
                                    children: [(0, r.jsx)(i.Z, {
                                        href: "/",
                                        className: z()["header__top-right-logo-link"],
                                        children: (0, r.jsx)("img", {
                                            className: z()["header__top-right-logo"],
                                            src: B,
                                            alt: "باسلام"
                                        })
                                    }), (0, r.jsxs)("button", {
                                        className: (0, a.Z)(z()["header__top-right-category"], _define_property({}, z()["header__top-right-category--show"], y)),
                                        onBlur: function() {
                                            return D(0)
                                        },
                                        onFocus: function() {
                                            return H(0)
                                        },
                                        onMouseOver: function() {
                                            return H()
                                        },
                                        onMouseLeave: function() {
                                            return D()
                                        },
                                        children: [(0, r.jsx)("i", {
                                            className: (0, a.Z)("bi-menu", z()["header__top-right-category-icon"])
                                        }), (0, r.jsx)("span", {
                                            children: "دسته‌بندی‌ها"
                                        })]
                                    }), (0, r.jsx)(q, {})]
                                }), (0, r.jsxs)("div", {
                                    className: z()["header__top-left"],
                                    children: [!f || x && !F ? (0, r.jsxs)(r.Fragment, {
                                        children: [(T || P) && (0, r.jsxs)(i.Z, {
                                            className: z()["header__top-left-btn"],
                                            href: "/account/chats",
                                            onClick: function() {
                                                (0, W.s)("chatListView", {
                                                    typeOfUser: M,
                                                    orderCount: S,
                                                    unreadChatListItemCount: C
                                                })
                                            },
                                            children: [(0, r.jsx)("i", {
                                                className: (0, a.Z)("bi-chats", z()["header__top-left-btn-icon"]),
                                                "data-badge": C
                                            }), (0, r.jsx)("span", {
                                                className: z()["header__top-left-btn-label"],
                                                children: "گفت‌وگو‌ها"
                                            })]
                                        }), T ? (0, r.jsx)(de, {}) : (0, r.jsxs)("button", {
                                            className: z()["header__top-left-btn"],
                                            onClick: function() {
                                                return p()
                                            },
                                            children: [(0, r.jsx)("i", {
                                                className: (0, a.Z)("bi-user", z()["header__top-left-btn-icon"])
                                            }), (0, r.jsxs)("span", {
                                                className: z()["header__top-left-btn-label"],
                                                children: ["عضویت ", (0, r.jsx)("span", {
                                                    className: z().header__divider
                                                }), " ورود"]
                                            })]
                                        })]
                                    }) : (0, r.jsx)(te, {}), (0, r.jsxs)("div", {
                                        className: z()["header__top-left-btn"],
                                        onClick: function() {
                                            return m.push("/cart")
                                        },
                                        children: [(0, r.jsx)("i", {
                                            className: (0, a.Z)("bi-shopping-cart", z()["header__top-left-btn-icon"]),
                                            "data-badge": h.itemCount
                                        }), (0, r.jsx)("span", {
                                            className: z()["header__top-left-btn-label"],
                                            children: "سبد خرید"
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: (0, a.Z)(z()["header__top-left-btn"], z()["header__top-left-btn-create-vendor-landing"]),
                                        children: K && (0, r.jsx)(ve(), {
                                            label: "ایجاد غرفه",
                                            size: "lg",
                                            variant: "outline",
                                            icon: "bi-vendor",
                                            onClick: X
                                        })
                                    })]
                                })]
                            })
                        }), (0, r.jsx)(Z, {
                            element: I,
                            isShow: y,
                            hideMegamenu: function() {
                                return D()
                            },
                            showMegamenu: function() {
                                return V()
                            }
                        }), l]
                    })]
                })
            }
        },
        40402: function(e, n, t) {
            "use strict";
            t.d(n, {
                F: function() {
                    return o
                }
            });
            var r = t(39377),
                a = t.n(r),
                i = t(27434);

            function o(e, n, t) {
                var r = _sliced_to_array((0, i.useState)(!1), 2),
                    o = r[0],
                    s = r[1],
                    c = (0, i.useCallback)(function(n) {
                        e(n), s(!1)
                    }, [e]),
                    l = (0, i.useCallback)(a()(c, n), [c]);
                return {
                    isLoading: o,
                    debouncedHandler: function(e) {
                        l(e), o || ("postpone" === t ? setTimeout(function() {
                            s(!0)
                        }, 50) : s(!0))
                    }
                }
            }
        },
        32502: function(e) {
            e.exports = {
                hli: "sXFv_R",
                "hli__label-skeleton": "_7w08Cy"
            }
        },
        99321: function(e) {
            e.exports = {
                "megamenu-backdrop": "xsw264",
                megamenu: "GvK_gi",
                megamenu__content: "W6eDXO",
                "megamenu__content-box": "CMFB4o",
                "megamenu__content-area": "czoNs6",
                "megamenu__content-categories": "aPoeoP",
                "megamenu__content-sidebar": "VkZHIK",
                "megamenu__content-categories-item": "_QzptL",
                "megamenu__content-categories-item--active": "p_mH6N",
                "megamenu__content-categories-item-icon": "ucIGmZ",
                "megamenu__content-categories-item-title": "qtEO33",
                "megamenu__content-categories-item-angle": "KLwtWq",
                "megamenu__content-subcategories": "BAQWVP",
                "megamenu__content-subcategories-title": "FtwLks",
                "megamenu__content-subcategories-item": "dpjjW8",
                "megamenu__content-subcategories-item-title": "cToqP8",
                "megamenu__content-subcategories-item-container": "i1Eddr",
                "megamenu__content-subcategories-item-children": "i34Eu3",
                "megamenu__content-subcategories-item-children-title": "XOml71",
                "megamenu__content-subcategories-item-children-image": "ztI4S1"
            }
        },
        5670: function(e) {
            e.exports = {
                "search-box": "bO4QFh",
                "search-box__backdrop": "lXqyMo",
                "search-box__content": "s7ZkmO",
                "search-box__content-type-wrapper": "mnVDyn",
                "search-box__content--active": "Vzk5av",
                "search-box__content-type": "cfsJ9Q",
                "search-box__content-type-img-search": "D3hkP0",
                "search-box__content-type-icon": "RqZ0W3",
                "search-box__content-type-input": "_bZIGc",
                "search-box__content-suggestions": "KXt5_k"
            }
        },
        53815: function(e) {
            e.exports = {
                "user-anchor": "lm_qq4",
                "user-anchor__label": "aGM4re",
                "user-anchor__label-icon": "uOpo7g",
                "user-dropdown": "ybQIB3",
                "user-dropdown__profile": "CXSUzF",
                "user-dropdown__profile-info": "_14sELv",
                "user-dropdown__profile-name": "EHffbF",
                "user-dropdown__item": "QYvvtu",
                "user-dropdown__item-icon": "GrLkBS",
                "user-dropdown__item-title": "sAapUM",
                "user-dropdown__item-left-angle": "_k19cL",
                "user-dropdown__item-label": "fq_kg3",
                "user-dropdown__item-left": "UlyDhT",
                "user-dropdown__item-left-credit": "FrHR06",
                "user-dropdown__item-left-credit-value": "JJlTm1",
                "user-dropdown__item-left-credit-icon": "SRmvHm",
                "user-dropdown__divider": "tO_mfy"
            }
        },
        22769: function(e) {
            e.exports = {
                "header-placeholder": "s5EJnb",
                "header-placeholder--fixed": "_311eaK",
                header: "GBBt04",
                "header--fixed": "AcyGa8",
                "header--fixed-show": "cYWWH8",
                header__top: "aAbPCa",
                "header__top-right": "oOteWE",
                "header__top-right-logo-link": "hgCsRc",
                "header__top-right-logo": "oI3ssn",
                "header__top-left": "IlRPHA",
                "header__top-left-btn": "_90lPG_",
                "header__top-left-btn-icon": "TH_Q_b",
                "header__top-left-btn-label": "t_BQxS",
                "header__top-right-category": "puz3RS",
                "header__top-right-category--show": "Z0jDYT",
                "header__top-right-category-icon": "MNFcFU",
                header__divider: "gX3mSj"
            }
        }
    }
]);