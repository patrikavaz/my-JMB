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
        var n, o, s = [],
            i = !0,
            a = !1;
        try {
            for (t = t.call(e); !(i = (n = t.next()).done) && (s.push(n.value), !r || s.length !== r); i = !0);
        } catch (e) {
            a = !0, o = e
        } finally {
            try {
                i || null == t.return || t.return()
            } finally {
                if (a) throw o
            }
        }
        return s
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
                s = t(50874),
                i = t(69337),
                a = t(27434),
                c = t(77417),
                l = t(36350);
            t(81433), t(76303), t(7095), t(11966), t(5164), t(99249);
            var p = {
                    show: s.bool,
                    icon: s.string,
                    onClose: s.func,
                    label: s.string,
                    disabled: s.bool,
                    className: s.string,
                    buttonProps: s.object,
                    optionsProps: s.object,
                    popoverClassName: s.string,
                    modalProps: s.shape(i.BsModalPropTypes),
                    labelPosition: s.oneOf(["start", "end"]),
                    position: s.oneOf(["top-left", "top-right", "bottom-left", "bottom-right"])
                },
                d = {
                    onClick: s.func,
                    children: s.node,
                    className: s.string
                },
                _ = function(e) {
                    var r = e.children,
                        t = e.onClick,
                        s = e.className,
                        i = void 0 === s ? "" : s,
                        a = function(e) {
                            null == t || t(e)
                        };
                    return n.jsx("li", {
                        tabIndex: 0,
                        role: "menuitem",
                        onClick: a,
                        onKeyDown: a,
                        className: o.clsx(["bs-dropdown--item", _define_property({}, i, i)]),
                        children: r
                    })
                };
            _.propTypes = d, _.displayName = "BsDropdownItem";
            var u = function(e) {
                var r = e.show,
                    t = e.onChange,
                    s = e.children,
                    p = e.className,
                    d = e.label,
                    _ = void 0 === d ? "" : d,
                    u = e.modalProps,
                    h = void 0 === u ? {} : u,
                    m = e.buttonComponent,
                    b = e.buttonProps,
                    f = void 0 === b ? {} : b,
                    j = e.disabled,
                    v = void 0 !== j && j,
                    y = e.optionsProps,
                    g = void 0 === y ? {} : y,
                    x = e.icon,
                    w = void 0 === x ? "bi-more-v" : x,
                    N = e.popoverClassName,
                    O = void 0 === N ? "" : N,
                    P = e.labelPosition,
                    k = void 0 === P ? "end" : P,
                    C = e.position,
                    S = void 0 === C ? "bottom-right" : C,
                    L = a.useId(),
                    E = l.useWindowSize().isPhone,
                    I = _sliced_to_array(l.useUncontrolled({
                        onChange: t,
                        value: r,
                        defaultValue: !1
                    }), 2),
                    z = I[0],
                    A = I[1],
                    Z = a.useRef(null),
                    D = function() {
                        A(!1)
                    },
                    M = function() {
                        D()
                    },
                    B = a.useMemo(function() {
                        return _object_spread({
                            showClose: !1,
                            hasPopstate: !1
                        }, h)
                    }, [h]);
                return n.jsxs("div", {
                    id: L,
                    className: o.clsx(["bs-dropdown", {
                        "bs-dropdown--open": z
                    }, p]),
                    children: [n.jsx("button", _object_spread_props(_object_spread({
                        type: "button",
                        className: "bs-dropdown__btn",
                        disabled: v,
                        onClick: function() {
                            z ? D() : A(!0)
                        }
                    }, f), {
                        ref: Z,
                        children: m || n.jsxs(n.Fragment, {
                            children: [!!_ && "start" === k && n.jsx("span", {
                                className: "bs-dropdown__label",
                                children: _
                            }), n.jsx("i", {
                                className: o.clsx(["bs-dropdown__icon", _define_property({}, w, !!w)])
                            }), !!_ && "end" === k && n.jsx("span", {
                                className: "bs-dropdown__label",
                                children: _
                            })]
                        })
                    })), E ? n.jsx(i.BsModal, _object_spread_props(_object_spread({
                        show: z,
                        onClose: D
                    }, B), {
                        children: n.jsx("ul", _object_spread_props(_object_spread({
                            className: "bs-dropdown__options bs-dropdown__options--modal",
                            role: "menu"
                        }, g), {
                            onClick: M,
                            onKeyDown: M,
                            children: s
                        }))
                    })) : n.jsx(c, {
                        anchorEl: Z.current,
                        position: S,
                        show: z,
                        onClose: D,
                        transition: "fade",
                        className: o.clsx(["bs-dropdown__options bs-dropdown__options--popover", O]),
                        children: n.jsx("ul", _object_spread_props(_object_spread({}, g), {
                            role: "menu",
                            onClick: M,
                            onKeyDown: M,
                            children: s
                        }))
                    })]
                })
            };
            u.propTypes = p, u.displayName = "BsDropdown", u.Item = _, e.exports = u
        },
        85156: function(e, r, t) {
            "use strict";
            t.r(r);
            var n = t(32930),
                o = t(40877),
                s = t(50874),
                i = t.n(s),
                a = t(2347),
                c = t(84581),
                l = t(88107),
                p = t(45835),
                d = t(28231),
                _ = t(44219),
                u = t.n(_),
                h = t(57339),
                m = t(87540),
                b = t(93222),
                f = t.n(b),
                j = t(81433),
                v = t.n(j),
                y = t(5164),
                g = t(27434),
                x = function() {
                    return requestIdleCallback(function() {
                        (0, c.s)("homeClick", {
                            item: 0,
                            componentName: "horizontal_product_popular"
                        })
                    })
                };

            function w(e) {
                var r = e.items,
                    t = e.title,
                    s = e.moreLink,
                    i = e.metadata,
                    c = e.description,
                    _ = e.showAllProduct,
                    b = e.isLazyProduct,
                    j = void 0 !== b && b,
                    w = (0, p.b)(),
                    N = w.ua,
                    O = w.isWebview,
                    P = (0, l.Z)(),
                    k = _sliced_to_array((0, g.useState)(250), 2),
                    C = k[0],
                    S = k[1],
                    L = _sliced_to_array((0, g.useState)(560), 2),
                    E = L[0],
                    I = L[1],
                    z = !!P.query.section || _,
                    A = !0 === (null == i ? void 0 : i.hasBackground),
                    Z = !0 === (null == i ? void 0 : i.hasLogo),
                    D = (0, g.useMemo)(function() {
                        return [(0, y.BsLightCarouselAutoplayPlugin)({
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
                        S(e), I(function(e) {
                            return e + 276
                        }(e))
                    };
                    return e(), window.addEventListener("resize", e),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }, []);
                var M = (0, g.useRef)(null),
                    B = (0, d.MG)({
                        isRtl: !0,
                        overscan: 1,
                        horizontal: !0,
                        count: r.length + 1,
                        estimateSize: function() {
                            return C
                        },
                        getScrollElement: function() {
                            return M.current
                        }
                    });
                return (0, g.useEffect)(function() {
                    C > 0 && B.measure()
                }, [C, B]), (0, n.jsxs)(n.Fragment, {
                    children: [!z && Z && (0, n.jsx)("div", {
                        className: u()["hpp__logo-bg"],
                        children: (0, n.jsx)("img", {
                            className: u().hpp__logo,
                            src: "https://statics.basalam.com/public-74/admin/yDBE2/04-15/JcFhIHAEOTEWXZ7zVZOI6BVUNkstx3idN5wi6WPEgB4fp23DYw.SVG",
                            alt: " "
                        })
                    }), (0, n.jsxs)("section", {
                        className: (0, o.Z)(u().hpp, _define_property({}, u()["hpp--bg"], !z && A)),
                        children: [(0, n.jsxs)("div", {
                            className: u().header,
                            children: [(0, n.jsxs)("div", {
                                className: u().header__content,
                                children: [(0, n.jsx)("h2", {
                                    className: u().header__title,
                                    children: t
                                }), (0, n.jsx)("span", {
                                    className: u().header__description,
                                    children: c
                                })]
                            }), !!(null == i ? void 0 : i.expireTime) && (0, n.jsx)(m.Z, {
                                className: u()["header__count-down"],
                                itemClass: u().hpp__timer,
                                showHours: !0,
                                endTime: i.expireTime
                            }), s && !z && (0, n.jsxs)(a.Z, {
                                href: s,
                                className: u().header__link,
                                onClick: x,
                                children: [(0, n.jsx)("span", {
                                    children: "مشاهده همه"
                                }), (0, n.jsx)("span", {
                                    className: (0, o.Z)("bi-angle-left", u().header__icon)
                                })]
                            })]
                        }), z ? (0, n.jsx)("div", {
                            className: u().hpp__section,
                            children: r.map(function(e) {
                                return (0, n.jsx)(h.Z, _object_spread_props(_object_spread({}, e), {
                                    isLazyLoad: j
                                }), e.id)
                            })
                        }) : N.isPc ? (0, n.jsx)(v(), {
                            children: (0, n.jsxs)(f(), {
                                className: u().hpp__carousel,
                                plugins: D,
                                skipSnaps: !0,
                                children: [r.map(function(e) {
                                    return (0, n.jsx)(f().Item, {
                                        className: u()["hpp__carousel-item"],
                                        children: (0, n.jsx)(h.Z, _object_spread_props(_object_spread({
                                            className: u().hpp__product
                                        }, e), {
                                            gridMode: !0,
                                            isLazyLoad: j
                                        }))
                                    }, e.id)
                                }), (0, n.jsx)(f().Item, {
                                    className: u()["hpp__carousel-item"],
                                    children: (0, n.jsx)(a.Z, {
                                        href: s,
                                        onClick: x,
                                        children: (0, n.jsx)("div", {
                                            className: u()["hpp__more-card"],
                                            children: "مشاهده همه"
                                        })
                                    })
                                }, "MORE_LINK")]
                            })
                        }) : O ? (0, n.jsx)("div", {
                            children: (0, n.jsx)("div", {
                                ref: M,
                                className: u()["hpp__virtual-container"],
                                style: {
                                    height: "".concat(E, "px")
                                },
                                children: (0, n.jsx)("div", {
                                    className: u()["hpp__virtual-content"],
                                    style: {
                                        width: "".concat(B.getTotalSize(), "px")
                                    },
                                    children: B.getVirtualItems().map(function(e) {
                                        var t = r[e.index],
                                            o = window.innerWidth >= 992 ? 24 : 12;
                                        return (0, n.jsx)("div", {
                                            className: u()["hpp__virtual-item"],
                                            style: {
                                                paddingLeft: "".concat(o, "px"),
                                                width: "".concat(e.size, "px"),
                                                transform: "translateX(-".concat(e.start, "px)")
                                            },
                                            children: e.index < r.length ? (0, n.jsx)("div", {
                                                className: u()["hpp__virtual-item-content"],
                                                children: (0, n.jsx)(h.Z, _object_spread_props(_object_spread({
                                                    className: u().hpp__product
                                                }, t), {
                                                    gridMode: !0,
                                                    isLazyLoad: j
                                                }))
                                            }) : (0, n.jsx)("div", {
                                                className: u()["hpp__show-all-virtual"],
                                                children: (0, n.jsx)(a.Z, {
                                                    href: s,
                                                    onClick: x,
                                                    children: (0, n.jsx)("div", {
                                                        className: u()["hpp__more-card"],
                                                        children: "مشاهده همه"
                                                    })
                                                })
                                            }, "MORE_LINK")
                                        }, e.index)
                                    })
                                })
                            })
                        }) : (0, n.jsx)(v(), {
                            children: (0, n.jsxs)("div", {
                                className: u().hpp__carousel,
                                plugins: D,
                                children: [r.map(function(e) {
                                    return (0, n.jsx)("div", {
                                        className: u()["hpp__carousel-item"],
                                        children: (0, n.jsx)(h.Z, _object_spread_props(_object_spread({
                                            className: u().hpp__product
                                        }, e), {
                                            gridMode: !0,
                                            isLazyLoad: j
                                        }))
                                    }, e.id)
                                }), (0, n.jsx)("div", {
                                    className: u()["hpp__carousel-item"],
                                    children: (0, n.jsx)(a.Z, {
                                        href: s,
                                        onClick: x,
                                        children: (0, n.jsx)("div", {
                                            className: u()["hpp__more-card"],
                                            children: "مشاهده همه"
                                        })
                                    })
                                }, "MORE_LINK")]
                            })
                        })]
                    })]
                })
            }
            w.propTypes = {
                title: i().string,
                moreLink: i().string,
                metadata: i().object,
                description: i().string,
                showAllProduct: i().bool,
                items: i().arrayOf(i().shape({
                    id: i().number,
                    name: i().string,
                    stock: i().number,
                    price: i().number,
                    metadata: i().object,
                    canAddToCart: i().bool,
                    shippingCost: i().number,
                    primaryPrice: i().number,
                    mainAttribute: i().string,
                    ads: i().shape({
                        offerId: i().number
                    }),
                    status: i().shape({
                        id: i().number,
                        title: i().string
                    })
                }))
            }, r.default = (0, g.memo)(w)
        },
        22480: function(e, r, t) {
            "use strict";
            t.d(r, {
                f: function() {
                    return s
                }
            });
            var n = t(48679),
                o = t(87580);

            function s(e, r) {
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
                    return s
                }
            });
            var n = t(5164),
                o = t(27434);

            function s(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    i = _sliced_to_array((0, o.useState)(s), 2),
                    a = i[0],
                    c = i[1],
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
                header__description: "ZBSiuo",
                header__icon: "TWxzHp",
                header__link: "oMUAi4",
                "header__count-down": "oBDgxP"
            }
        }
    }
]);