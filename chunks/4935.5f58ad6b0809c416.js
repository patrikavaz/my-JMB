function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var o = 0, n = new Array(r); o < r; o++) n[o] = e[o];
    return n
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _define_property(e, r, o) {
    return r in e ? Object.defineProperty(e, r, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = o, e
}

function _iterable_to_array_limit(e, r) {
    var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != o) {
        var n, t, s = [],
            i = !0,
            a = !1;
        try {
            for (o = o.call(e); !(i = (n = o.next()).done) && (s.push(n.value), !r || s.length !== r); i = !0);
        } catch (e) {
            a = !0, t = e
        } finally {
            try {
                i || null == o.return || o.return()
            } finally {
                if (a) throw t
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
        var o = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable
        }))), n.forEach(function(r) {
            _define_property(e, r, o[r])
        })
    }
    return e
}

function ownKeys(e, r) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), o.push.apply(o, n)
    }
    return o
}

function _object_spread_props(e, r) {
    return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(o) {
        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o))
    }), e
}

function _sliced_to_array(e, r) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, r) || _unsupported_iterable_to_array(e, r) || _non_iterable_rest()
}

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(o) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _array_like_to_array(e, r) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4935], {
        94377: function(e, r, o) {
            "use strict";
            var n = o(32930),
                t = o(69389),
                s = o(50874),
                i = o(69337),
                a = o(27434),
                c = o(77417),
                l = o(36350);
            o(81433), o(76303), o(7095), o(11966), o(5164), o(99249);
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
                u = function(e) {
                    var r = e.children,
                        o = e.onClick,
                        s = e.className,
                        i = void 0 === s ? "" : s,
                        a = function(e) {
                            null == o || o(e)
                        };
                    return n.jsx("li", {
                        tabIndex: 0,
                        role: "menuitem",
                        onClick: a,
                        onKeyDown: a,
                        className: t.clsx(["bs-dropdown--item", _define_property({}, i, i)]),
                        children: r
                    })
                };
            u.propTypes = d, u.displayName = "BsDropdownItem";
            var _ = function(e) {
                var r = e.show,
                    o = e.onChange,
                    s = e.children,
                    p = e.className,
                    d = e.label,
                    u = void 0 === d ? "" : d,
                    _ = e.modalProps,
                    h = void 0 === _ ? {} : _,
                    b = e.buttonComponent,
                    m = e.buttonProps,
                    f = void 0 === m ? {} : m,
                    y = e.disabled,
                    j = void 0 !== y && y,
                    g = e.optionsProps,
                    v = void 0 === g ? {} : g,
                    w = e.icon,
                    x = void 0 === w ? "bi-more-v" : w,
                    N = e.popoverClassName,
                    O = void 0 === N ? "" : N,
                    P = e.labelPosition,
                    C = void 0 === P ? "end" : P,
                    k = e.position,
                    S = void 0 === k ? "bottom-right" : k,
                    I = a.useId(),
                    A = l.useWindowSize().isPhone,
                    D = _sliced_to_array(l.useUncontrolled({
                        onChange: o,
                        value: r,
                        defaultValue: !1
                    }), 2),
                    B = D[0],
                    E = D[1],
                    L = a.useRef(null),
                    T = function() {
                        E(!1)
                    },
                    Z = function() {
                        T()
                    },
                    M = a.useMemo(function() {
                        return _object_spread({
                            showClose: !1,
                            hasPopstate: !1
                        }, h)
                    }, [h]);
                return n.jsxs("div", {
                    id: I,
                    className: t.clsx(["bs-dropdown", {
                        "bs-dropdown--open": B
                    }, p]),
                    children: [n.jsx("button", _object_spread_props(_object_spread({
                        type: "button",
                        className: "bs-dropdown__btn",
                        disabled: j,
                        onClick: function() {
                            B ? T() : E(!0)
                        }
                    }, f), {
                        ref: L,
                        children: b || n.jsxs(n.Fragment, {
                            children: [!!u && "start" === C && n.jsx("span", {
                                className: "bs-dropdown__label",
                                children: u
                            }), n.jsx("i", {
                                className: t.clsx(["bs-dropdown__icon", _define_property({}, x, !!x)])
                            }), !!u && "end" === C && n.jsx("span", {
                                className: "bs-dropdown__label",
                                children: u
                            })]
                        })
                    })), A ? n.jsx(i.BsModal, _object_spread_props(_object_spread({
                        show: B,
                        onClose: T
                    }, M), {
                        children: n.jsx("ul", _object_spread_props(_object_spread({
                            className: "bs-dropdown__options bs-dropdown__options--modal",
                            role: "menu"
                        }, v), {
                            onClick: Z,
                            onKeyDown: Z,
                            children: s
                        }))
                    })) : n.jsx(c, {
                        anchorEl: L.current,
                        position: S,
                        show: B,
                        onClose: T,
                        transition: "fade",
                        className: t.clsx(["bs-dropdown__options bs-dropdown__options--popover", O]),
                        children: n.jsx("ul", _object_spread_props(_object_spread({}, v), {
                            role: "menu",
                            onClick: Z,
                            onKeyDown: Z,
                            children: s
                        }))
                    })]
                })
            };
            _.propTypes = p, _.displayName = "BsDropdown", _.Item = u, e.exports = _
        },
        85156: function(e, r, o) {
            "use strict";
            o.r(r);
            var n = o(32930),
                t = o(40877),
                s = o(50874),
                i = o.n(s),
                a = o(2347),
                c = o(27434),
                l = o(84581),
                p = o(88107),
                d = o(45835),
                u = o(44219),
                _ = o.n(u),
                h = o(57339),
                b = o(87540),
                m = o(93222),
                f = o.n(m),
                y = o(81433),
                j = o.n(y),
                g = o(5164),
                v = function() {
                    return requestIdleCallback(function() {
                        (0, l.s)("homeClick", {
                            item: 0,
                            componentName: "horizontal_product_popular"
                        })
                    })
                };

            function w(e) {
                var r = e.items,
                    o = e.title,
                    s = e.moreLink,
                    i = e.metadata,
                    l = e.description,
                    u = e.showAllProduct,
                    m = e.isLazyProduct,
                    y = void 0 !== m && m,
                    w = (0, d.b)().ua,
                    x = !!(0, p.Z)().query.section || u,
                    N = !0 === (null == i ? void 0 : i.hasBackground),
                    O = !0 === (null == i ? void 0 : i.hasLogo),
                    P = (0, c.useMemo)(function() {
                        return [(0, g.BsLightCarouselAutoplayPlugin)({
                            delay: 3e3,
                            stopOnInteraction: !0
                        })]
                    }, []),
                    C = w.isPc ? f() : "div",
                    k = w.isPc ? f().Item : "div";
                return (0, n.jsxs)(n.Fragment, {
                    children: [!x && O && (0, n.jsx)("div", {
                        className: _()["hpp__logo-bg"],
                        children: (0, n.jsx)("img", {
                            className: _().hpp__logo,
                            src: "https://statics.basalam.com/public-74/admin/yDBE2/04-15/JcFhIHAEOTEWXZ7zVZOI6BVUNkstx3idN5wi6WPEgB4fp23DYw.SVG",
                            alt: " "
                        })
                    }), (0, n.jsxs)("section", {
                        className: (0, t.Z)(_().hpp, _define_property({}, _()["hpp--bg"], !x && N)),
                        children: [(0, n.jsxs)("div", {
                            className: _().header,
                            children: [(0, n.jsxs)("div", {
                                className: _().header__content,
                                children: [(0, n.jsx)("h2", {
                                    className: _().header__title,
                                    children: o
                                }), (0, n.jsx)("span", {
                                    className: _().header__description,
                                    children: l
                                })]
                            }), !!(null == i ? void 0 : i.expireTime) && (0, n.jsx)(b.Z, {
                                className: _()["header__count-down"],
                                itemClass: _().hpp__timer,
                                showHours: !0,
                                endTime: i.expireTime
                            }), s && !x && (0, n.jsxs)(a.Z, {
                                href: s,
                                className: _().header__link,
                                onClick: v,
                                children: [(0, n.jsx)("span", {
                                    children: "مشاهده همه"
                                }), (0, n.jsx)("span", {
                                    className: (0, t.Z)("bi-angle-left", _().header__icon)
                                })]
                            })]
                        }), x ? (0, n.jsx)("div", {
                            className: _().hpp__section,
                            children: r.map(function(e) {
                                return (0, n.jsx)(h.Z, _object_spread_props(_object_spread({}, e), {
                                    isLazyLoad: y
                                }), e.id)
                            })
                        }) : (0, n.jsx)(j(), {
                            children: (0, n.jsxs)(C, {
                                className: _().hpp__carousel,
                                plugins: P,
                                skipSnaps: !0,
                                children: [r.map(function(e) {
                                    return (0, n.jsx)(k, {
                                        className: _()["hpp__carousel-item"],
                                        children: (0, n.jsx)(h.Z, _object_spread_props(_object_spread({
                                            className: _().hpp__product
                                        }, e), {
                                            gridMode: !0,
                                            isLazyLoad: y
                                        }))
                                    }, e.id)
                                }), (0, n.jsx)(k, {
                                    className: _()["hpp__carousel-item"],
                                    children: (0, n.jsx)(a.Z, {
                                        href: s,
                                        onClick: v,
                                        children: (0, n.jsx)("div", {
                                            className: _()["hpp__more-card"],
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
            }, r.default = (0, c.memo)(w)
        },
        22480: function(e, r, o) {
            "use strict";
            o.d(r, {
                f: function() {
                    return s
                }
            });
            var n = o(48679),
                t = o(87580);

            function s(e, r) {
                var o;
                return "".concat((0, t.L)(null === (o = e.vendor) || void 0 === o ? void 0 : o.identifier), "/product/").concat(e.id).concat((0, n.stringifyQuery)(r))
            }
        },
        87580: function(e, r, o) {
            "use strict";
            o.d(r, {
                L: function() {
                    return t
                }
            });
            var n = o(48679);

            function t(e, r) {
                return "/".concat(e).concat((0, n.stringifyQuery)(r))
            }
        },
        94701: function(e, r, o) {
            "use strict";
            o.d(r, {
                S: function() {
                    return s
                }
            });
            var n = o(5164),
                t = o(27434);

            function s(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    i = _sliced_to_array((0, t.useState)(s), 2),
                    a = i[0],
                    c = i[1],
                    l = (0, t.useMemo)(function() {
                        return (0, n.isClientSide)() && !r ? new IntersectionObserver(function(e) {
                            e[0].isIntersecting ? c(!0) : c(!1)
                        }, o) : null
                    }, [r, o]);
                return (0, t.useEffect)(function() {
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