function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
    return n
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _define_property(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e
}

function _iterable_to_array_limit(e, r) {
    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != t) {
        var n, o, i = [],
            s = !0,
            a = !1;
        try {
            for (t = t.call(e); !(s = (n = t.next()).done) && (i.push(n.value), !r || i.length !== r); s = !0);
        } catch (e) {
            a = !0, o = e
        } finally {
            try {
                s || null == t.return || t.return()
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

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _array_like_to_array(e, r) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4935], {
        94377: function(e, r, t) {
            "use strict";
            var n = t(32930),
                o = t(69389),
                i = t(50874),
                s = t(69337),
                a = t(27434),
                c = t(77417),
                l = t(36350);
            t(81433), t(76303), t(7095), t(11966), t(5164), t(99249);
            var p = {
                    show: i.bool,
                    icon: i.string,
                    onClose: i.func,
                    label: i.string,
                    disabled: i.bool,
                    className: i.string,
                    buttonProps: i.object,
                    optionsProps: i.object,
                    popoverClassName: i.string,
                    modalProps: i.shape(s.BsModalPropTypes),
                    labelPosition: i.oneOf(["start", "end"]),
                    position: i.oneOf(["top-left", "top-right", "bottom-left", "bottom-right"])
                },
                d = {
                    onClick: i.func,
                    children: i.node,
                    className: i.string
                },
                u = function(e) {
                    var r = e.children,
                        t = e.onClick,
                        i = e.className,
                        s = void 0 === i ? "" : i,
                        a = function(e) {
                            null == t || t(e)
                        };
                    return n.jsx("li", {
                        tabIndex: 0,
                        role: "menuitem",
                        onClick: a,
                        onKeyDown: a,
                        className: o.clsx(["bs-dropdown--item", _define_property({}, s, s)]),
                        children: r
                    })
                };
            u.propTypes = d, u.displayName = "BsDropdownItem";
            var _ = function(e) {
                var r = e.show,
                    t = e.onChange,
                    i = e.children,
                    p = e.className,
                    d = e.label,
                    u = void 0 === d ? "" : d,
                    _ = e.modalProps,
                    h = void 0 === _ ? {} : _,
                    m = e.buttonComponent,
                    b = e.buttonProps,
                    f = void 0 === b ? {} : b,
                    y = e.disabled,
                    v = void 0 !== y && y,
                    j = e.optionsProps,
                    g = void 0 === j ? {} : j,
                    w = e.icon,
                    x = void 0 === w ? "bi-more-v" : w,
                    N = e.popoverClassName,
                    O = void 0 === N ? "" : N,
                    P = e.labelPosition,
                    C = void 0 === P ? "end" : P,
                    k = e.position,
                    S = void 0 === k ? "bottom-right" : k,
                    I = a.useId(),
                    E = l.useWindowSize().isPhone,
                    z = _sliced_to_array(l.useUncontrolled({
                        onChange: t,
                        value: r,
                        defaultValue: !1
                    }), 2),
                    L = z[0],
                    A = z[1],
                    T = a.useRef(null),
                    B = function() {
                        A(!1)
                    },
                    D = function() {
                        B()
                    },
                    M = a.useMemo(function() {
                        return _object_spread({
                            showClose: !1,
                            hasPopstate: !1
                        }, h)
                    }, [h]);
                return n.jsxs("div", {
                    id: I,
                    className: o.clsx(["bs-dropdown", {
                        "bs-dropdown--open": L
                    }, p]),
                    children: [n.jsx("button", _object_spread_props(_object_spread({
                        type: "button",
                        className: "bs-dropdown__btn",
                        disabled: v,
                        onClick: function() {
                            L ? B() : A(!0)
                        }
                    }, f), {
                        ref: T,
                        children: m || n.jsxs(n.Fragment, {
                            children: [!!u && "start" === C && n.jsx("span", {
                                className: "bs-dropdown__label",
                                children: u
                            }), n.jsx("i", {
                                className: o.clsx(["bs-dropdown__icon", _define_property({}, x, !!x)])
                            }), !!u && "end" === C && n.jsx("span", {
                                className: "bs-dropdown__label",
                                children: u
                            })]
                        })
                    })), E ? n.jsx(s.BsModal, _object_spread_props(_object_spread({
                        show: L,
                        onClose: B
                    }, M), {
                        children: n.jsx("ul", _object_spread_props(_object_spread({
                            className: "bs-dropdown__options bs-dropdown__options--modal",
                            role: "menu"
                        }, g), {
                            onClick: D,
                            onKeyDown: D,
                            children: i
                        }))
                    })) : n.jsx(c, {
                        anchorEl: T.current,
                        position: S,
                        show: L,
                        onClose: B,
                        transition: "fade",
                        className: o.clsx(["bs-dropdown__options bs-dropdown__options--popover", O]),
                        children: n.jsx("ul", _object_spread_props(_object_spread({}, g), {
                            role: "menu",
                            onClick: D,
                            onKeyDown: D,
                            children: i
                        }))
                    })]
                })
            };
            _.propTypes = p, _.displayName = "BsDropdown", _.Item = u, e.exports = _
        },
        85156: function(e, r, t) {
            "use strict";
            t.r(r);
            var n = t(32930),
                o = t(40877),
                i = t(50874),
                s = t.n(i),
                a = t(2347),
                c = t(92369),
                l = t(88107),
                p = t(45835),
                d = t(28231),
                u = t(44219),
                _ = t.n(u),
                h = t(57339),
                m = t(87540),
                b = t(93222),
                f = t.n(b),
                y = t(81433),
                v = t.n(y),
                j = t(5164),
                g = t(27434),
                w = function() {
                    return requestIdleCallback(function() {
                        (0, c.publishEvent)("homeClick", {
                            item: 0,
                            componentName: "horizontal_product_popular"
                        })
                    })
                };

            function x(e) {
                var r = e.items,
                    t = e.title,
                    i = e.moreLink,
                    s = e.metadata,
                    c = e.description,
                    u = e.showAllProduct,
                    b = e.isLazyProduct,
                    y = void 0 !== b && b,
                    x = (0, p.b)().ua,
                    N = (0, l.Z)(),
                    O = _sliced_to_array((0, g.useState)(250), 2),
                    P = O[0],
                    C = O[1],
                    k = _sliced_to_array((0, g.useState)(560), 2),
                    S = k[0],
                    I = k[1],
                    E = !!N.query.section || u,
                    z = !0 === (null == s ? void 0 : s.hasBackground),
                    L = !0 === (null == s ? void 0 : s.hasLogo),
                    A = !0 === (null == s ? void 0 : s.showPercentIcon),
                    T = (0, g.useMemo)(function() {
                        return [(0, j.BsLightCarouselAutoplayPlugin)({
                            delay: 3e3,
                            stopOnInteraction: !0
                        })]
                    }, []);
                (0, g.useLayoutEffect)(function() {
                    var e = function() {
                        var e = function() {
                            var e = window.innerWidth,
                                r = .54;
                            return e >= 1200 ? r = .18 : e >= 992 ? r = .22 : e >= 768 ? r = .28 : e >= 576 && (r = .45), e * r - 12
                        }();
                        C(e), I(function(e) {
                            return e + 276
                        }(e))
                    };
                    return e(), window.addEventListener("resize", e),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }, []);
                var B, D = (0, g.useRef)(null),
                    M = (0, d.MG)({
                        isRtl: !0,
                        overscan: 1,
                        horizontal: !0,
                        count: r.length,
                        estimateSize: function() {
                            return P
                        },
                        getScrollElement: function() {
                            return D.current
                        }
                    });
                return (0, g.useEffect)(function() {
                    P > 0 && M.measure()
                }, [P, M]), (0, n.jsxs)(n.Fragment, {
                    children: [!E && L && (0, n.jsx)("div", {
                        className: _()["hpp__logo-bg"],
                        children: (0, n.jsx)("img", {
                            className: _().hpp__logo,
                            src: "https://statics.basalam.com/public-74/admin/yDBE2/04-15/JcFhIHAEOTEWXZ7zVZOI6BVUNkstx3idN5wi6WPEgB4fp23DYw.SVG",
                            alt: " "
                        })
                    }), (0, n.jsxs)("section", {
                        className: (0, o.Z)(_().hpp, (B = {}, _define_property(B, _()["hpp--bg"], !E && z), _define_property(B, _()["hpp--with-percent-icon"], A), B)),
                        children: [" ", (0, n.jsxs)("div", {
                            className: _().header,
                            children: [(0, n.jsxs)("div", {
                                className: _().header__content,
                                children: [(0, n.jsxs)("h2", {
                                    className: _().header__title,
                                    children: [A && (0, n.jsx)("img", {
                                        className: _()["header__percent-icon"],
                                        src: "https://statics.basalam.com/public-151/admin/X7XzJW/11-26/iIwQp4IBjRm2PNKeXNYaWUarAxjhjPigEzIn0cF89Tle3hI9sl.SVG",
                                        alt: ""
                                    }), t]
                                }), " ", (0, n.jsx)("span", {
                                    className: _().header__description,
                                    children: c
                                })]
                            }), !!(null == s ? void 0 : s.expireTime) && (0, n.jsx)(m.Z, {
                                className: _()["header__count-down"],
                                itemClass: _().hpp__timer,
                                showHours: !0,
                                endTime: s.expireTime
                            }), i && !E && (0, n.jsxs)(a.Z, {
                                href: i,
                                className: _().header__link,
                                onClick: w,
                                children: [(0, n.jsx)("span", {
                                    children: "مشاهده همه"
                                }), (0, n.jsx)("span", {
                                    className: (0, o.Z)("bi-angle-left", _().header__icon)
                                })]
                            })]
                        }), E ? (0, n.jsx)("div", {
                            className: _().hpp__section,
                            children: r.map(function(e) {
                                return (0, n.jsx)(h.Z, _object_spread_props(_object_spread({}, e), {
                                    isLazyLoad: y
                                }), e.id)
                            })
                        }) : x.isPc ? (0, n.jsx)(v(), {
                            children: (0, n.jsx)(f(), {
                                className: _().hpp__carousel,
                                plugins: T,
                                skipSnaps: !0,
                                children: r.map(function(e) {
                                    return (0, n.jsx)(f().Item, {
                                        className: _()["hpp__carousel-item"],
                                        children: (0, n.jsx)(h.Z, _object_spread_props(_object_spread({
                                            className: _().hpp__product
                                        }, e), {
                                            gridMode: !0,
                                            isLazyLoad: y
                                        }))
                                    }, e.id)
                                })
                            })
                        }) : (0, n.jsx)("div", {
                            children: (0, n.jsx)("div", {
                                ref: D,
                                className: _()["hpp__virtual-container"],
                                style: {
                                    height: "".concat(S, "px")
                                },
                                children: (0, n.jsx)("div", {
                                    className: _()["hpp__virtual-content"],
                                    style: {
                                        width: "".concat(M.getTotalSize(), "px")
                                    },
                                    children: M.getVirtualItems().map(function(e) {
                                        var t = r[e.index],
                                            o = window.innerWidth >= 992 ? 24 : 12;
                                        return (0, n.jsx)("div", {
                                            className: _()["hpp__virtual-item"],
                                            style: {
                                                paddingLeft: "".concat(o, "px"),
                                                width: "".concat(e.size, "px"),
                                                transform: "translateX(-".concat(e.start, "px)")
                                            },
                                            children: e.index < r.length ? (0, n.jsx)("div", {
                                                className: _()["hpp__virtual-item-content"],
                                                children: (0, n.jsx)(h.Z, _object_spread_props(_object_spread({
                                                    className: _().hpp__product
                                                }, t), {
                                                    gridMode: !0,
                                                    isLazyLoad: y
                                                }))
                                            }) : (0, n.jsx)("div", {
                                                className: _()["hpp__show-all-virtual"],
                                                children: (0, n.jsx)(a.Z, {
                                                    href: i,
                                                    onClick: w,
                                                    children: (0, n.jsx)("div", {
                                                        className: _()["hpp__more-card"],
                                                        children: "مشاهده همه"
                                                    })
                                                })
                                            }, "MORE_LINK")
                                        }, e.index)
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
            x.propTypes = {
                title: s().string,
                moreLink: s().string,
                metadata: s().object,
                description: s().string,
                showAllProduct: s().bool,
                items: s().arrayOf(s().shape({
                    id: s().number,
                    name: s().string,
                    stock: s().number,
                    price: s().number,
                    metadata: s().object,
                    canAddToCart: s().bool,
                    shippingCost: s().number,
                    primaryPrice: s().number,
                    mainAttribute: s().string,
                    ads: s().shape({
                        offerId: s().number
                    }),
                    status: s().shape({
                        id: s().number,
                        title: s().string
                    })
                }))
            }, r.default = (0, g.memo)(x)
        },
        22480: function(e, r, t) {
            "use strict";
            t.d(r, {
                f: function() {
                    return i
                }
            });
            var n = t(48679),
                o = t(87580);

            function i(e, r) {
                var t;
                return "".concat((0, o.L)(null === (t = e.vendor) || void 0 === t ? void 0 : t.identifier), "/product/").concat(e.id).concat((0, n.stringifyQuery)(r))
            }
        },
        87580: function(e, r, t) {
            "use strict";
            t.d(r, {
                L: function() {
                    return o
                }
            });
            var n = t(48679);

            function o(e, r) {
                return "/".concat(e).concat((0, n.stringifyQuery)(r))
            }
        },
        94701: function(e, r, t) {
            "use strict";
            t.d(r, {
                S: function() {
                    return i
                }
            });
            var n = t(5164),
                o = t(27434);

            function i(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    s = _sliced_to_array((0, o.useState)(i), 2),
                    a = s[0],
                    c = s[1],
                    l = (0, o.useMemo)(function() {
                        return (0, n.isClientSide)() && !r ? new IntersectionObserver(function(e) {
                            e[0].isIntersecting ? c(!0) : c(!1)
                        }, t) : null
                    }, [r, t]);
                return (0, o.useEffect)(function() {
                    var r = document.querySelector(e);
                    return r && l && l.observe(r),
                        function() {
                            l && r && l.unobserve(r)
                        }
                }, [l, e]), {
                    isShow: a
                }
            }
        },
        44219: function(e) {
            e.exports = {
                hpp: "_3CNOzj",
                "hpp--bg": "W0qf8b",
                "hpp--with-percent-icon": "Cf5TMv",
                "hpp__logo-bg": "g9G3_Q",
                hpp__logo: "Jo9BUe",
                hpp__section: "x1fyHm",
                hpp__carousel: "D_piX_",
                "hpp__carousel-item": "_8qgcx4",
                hpp__timer: "_17UAc6",
                hpp__product: "AKNHwW",
                "hpp__more-card": "fgu6PK",
                "hpp__virtual-container": "cxFGzr",
                "hpp__virtual-content": "PsBOEK",
                "hpp__virtual-item": "c5objI",
                "hpp__virtual-item-content": "EKTuR4",
                "hpp__show-all-virtual": "d7RUAk",
                header: "pHhmRX",
                header__title: "_3wOhqc",
                "header__percent-icon": "Pr1glh",
                header__description: "ZBSiuo",
                header__icon: "TWxzHp",
                header__link: "oMUAi4",
                "header__count-down": "oBDgxP"
            }
        }
    }
]);