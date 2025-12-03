function _array_like_to_array(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _define_property(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function _iterable_to_array_limit(e, t) {
    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != r) {
        var n, o, i = [],
            s = !0,
            a = !1;
        try {
            for (r = r.call(e); !(s = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); s = !0);
        } catch (e) {
            a = !0, o = e
        } finally {
            try {
                s || null == r.return || r.return()
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

function _sliced_to_array(e, t) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, t) || _unsupported_iterable_to_array(e, t) || _non_iterable_rest()
}

function _unsupported_iterable_to_array(e, t) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _array_like_to_array(e, t) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4935], {
        94377: function(e, t, r) {
            "use strict";
            var n = r(32930),
                o = r(69389),
                i = r(50874),
                s = r(69337),
                a = r(27434),
                c = r(77417),
                l = r(36350);
            r(81433), r(76303), r(7095), r(11966), r(5164), r(99249);
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
                    var t = e.children,
                        r = e.onClick,
                        i = e.className,
                        s = void 0 === i ? "" : i,
                        a = function(e) {
                            null == r || r(e)
                        };
                    return n.jsx("li", {
                        tabIndex: 0,
                        role: "menuitem",
                        onClick: a,
                        onKeyDown: a,
                        className: o.clsx(["bs-dropdown--item", _define_property({}, s, s)]),
                        children: t
                    })
                };
            u.propTypes = d, u.displayName = "BsDropdownItem";
            var _ = function(e) {
                var t = e.show,
                    r = e.onChange,
                    i = e.children,
                    p = e.className,
                    d = e.label,
                    u = void 0 === d ? "" : d,
                    _ = e.modalProps,
                    h = void 0 === _ ? {} : _,
                    m = e.buttonComponent,
                    b = e.buttonProps,
                    f = void 0 === b ? {} : b,
                    v = e.disabled,
                    y = void 0 !== v && v,
                    j = e.optionsProps,
                    g = void 0 === j ? {} : j,
                    w = e.icon,
                    x = void 0 === w ? "bi-more-v" : w,
                    N = e.popoverClassName,
                    O = void 0 === N ? "" : N,
                    P = e.labelPosition,
                    k = void 0 === P ? "end" : P,
                    C = e.position,
                    S = void 0 === C ? "bottom-right" : C,
                    E = a.useId(),
                    L = l.useWindowSize().isPhone,
                    z = _sliced_to_array(l.useUncontrolled({
                        onChange: r,
                        value: t,
                        defaultValue: !1
                    }), 2),
                    A = z[0],
                    I = z[1],
                    M = a.useRef(null),
                    T = function() {
                        I(!1)
                    },
                    X = function() {
                        T()
                    },
                    B = a.useMemo(function() {
                        return _object_spread({
                            showClose: !1,
                            hasPopstate: !1
                        }, h)
                    }, [h]);
                return n.jsxs("div", {
                    id: E,
                    className: o.clsx(["bs-dropdown", {
                        "bs-dropdown--open": A
                    }, p]),
                    children: [n.jsx("button", _object_spread_props(_object_spread({
                        type: "button",
                        className: "bs-dropdown__btn",
                        disabled: y,
                        onClick: function() {
                            A ? T() : I(!0)
                        }
                    }, f), {
                        ref: M,
                        children: m || n.jsxs(n.Fragment, {
                            children: [!!u && "start" === k && n.jsx("span", {
                                className: "bs-dropdown__label",
                                children: u
                            }), n.jsx("i", {
                                className: o.clsx(["bs-dropdown__icon", _define_property({}, x, !!x)])
                            }), !!u && "end" === k && n.jsx("span", {
                                className: "bs-dropdown__label",
                                children: u
                            })]
                        })
                    })), L ? n.jsx(s.BsModal, _object_spread_props(_object_spread({
                        show: A,
                        onClose: T
                    }, B), {
                        children: n.jsx("ul", _object_spread_props(_object_spread({
                            className: "bs-dropdown__options bs-dropdown__options--modal",
                            role: "menu"
                        }, g), {
                            onClick: X,
                            onKeyDown: X,
                            children: i
                        }))
                    })) : n.jsx(c, {
                        anchorEl: M.current,
                        position: S,
                        show: A,
                        onClose: T,
                        transition: "fade",
                        className: o.clsx(["bs-dropdown__options bs-dropdown__options--popover", O]),
                        children: n.jsx("ul", _object_spread_props(_object_spread({}, g), {
                            role: "menu",
                            onClick: X,
                            onKeyDown: X,
                            children: i
                        }))
                    })]
                })
            };
            _.propTypes = p, _.displayName = "BsDropdown", _.Item = u, e.exports = _
        },
        85156: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(32930),
                o = r(40877),
                i = r(50874),
                s = r.n(i),
                a = r(2347),
                c = r(92369),
                l = r(88107),
                p = r(45835),
                d = r(28231),
                u = r(44219),
                _ = r.n(u),
                h = r(57339),
                m = r(87540),
                b = r(93222),
                f = r.n(b),
                v = r(81433),
                y = r.n(v),
                j = r(5164),
                g = r(27434),
                w = function() {
                    return requestIdleCallback(function() {
                        (0, c.publishEvent)("homeClick", {
                            item: 0,
                            componentName: "horizontal_product_popular"
                        })
                    })
                };

            function x(e) {
                var t = e.items,
                    r = e.title,
                    i = e.moreLink,
                    s = e.metadata,
                    c = e.description,
                    u = e.showAllProduct,
                    b = e.isLazyProduct,
                    v = void 0 !== b && b,
                    x = (0, p.b)().ua,
                    N = (0, l.Z)(),
                    O = _sliced_to_array((0, g.useState)(250), 2),
                    P = O[0],
                    k = O[1],
                    C = _sliced_to_array((0, g.useState)(560), 2),
                    S = C[0],
                    E = C[1],
                    L = !!N.query.section || u,
                    z = !0 === (null == s ? void 0 : s.hasBackground),
                    A = !0 === (null == s ? void 0 : s.hasLogo),
                    I = !0 === (null == s ? void 0 : s.showPercentIcon),
                    M = (0, g.useMemo)(function() {
                        return [(0, j.BsLightCarouselAutoplayPlugin)({
                            delay: 3e3,
                            stopOnInteraction: !0
                        })]
                    }, []);
                (0, g.useLayoutEffect)(function() {
                    var e = function() {
                        var e = function() {
                            var e = window.innerWidth,
                                t = .54;
                            return e >= 1200 ? t = .18 : e >= 992 ? t = .22 : e >= 768 ? t = .28 : e >= 576 && (t = .45), e * t - 12
                        }();
                        k(e), E(function(e) {
                            return e + 276
                        }(e))
                    };
                    return e(), window.addEventListener("resize", e),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }, []);
                var T, X = (0, g.useRef)(null),
                    B = (0, d.MG)({
                        isRtl: !0,
                        overscan: 1,
                        horizontal: !0,
                        count: t.length,
                        estimateSize: function() {
                            return P
                        },
                        getScrollElement: function() {
                            return X.current
                        }
                    });
                return (0, g.useEffect)(function() {
                    P > 0 && B.measure()
                }, [P, B]), (0, n.jsxs)(n.Fragment, {
                    children: [!L && A && (0, n.jsx)("div", {
                        className: _()["hpp__logo-bg"],
                        children: (0, n.jsx)("img", {
                            className: _().hpp__logo,
                            src: "https://statics.basalam.com/public-151/admin/X7XzJW/11-26/VXyEVyWImBrAfkk4LpkvG1qwAvwdqU6fn2tlijvtEalVNs5aa4.SVG",
                            alt: " "
                        })
                    }), (0, n.jsxs)("section", {
                        className: (0, o.Z)(_().hpp, (T = {}, _define_property(T, _()["hpp--bg"], !L && z), _define_property(T, _()["hpp--with-percent-icon"], I), T)),
                        children: [" ", (0, n.jsxs)("div", {
                            className: _().header,
                            children: [(0, n.jsxs)("div", {
                                className: _().header__content,
                                children: [(0, n.jsxs)("h2", {
                                    className: _().header__title,
                                    children: [I && (0, n.jsx)("img", {
                                        className: _()["header__percent-icon"],
                                        src: z ? "https://statics.basalam.com/public-151/admin/X7XzJW/11-26/4zWyipbkaG2pv83iMXrdczUttPvEhOkUsXv0rvZnr67gps5aLO.SVG" : "https://statics.basalam.com/public-151/admin/X7XzJW/11-26/VXyEVyWImBrAfkk4LpkvG1qwAvwdqU6fn2tlijvtEalVNs5aa4.SVG",
                                        alt: ""
                                    }), r]
                                }), (0, n.jsx)("span", {
                                    className: _().header__description,
                                    children: c
                                })]
                            }), !!(null == s ? void 0 : s.expireTime) && (0, n.jsx)(m.Z, {
                                className: _()["header__count-down"],
                                itemClass: _().hpp__timer,
                                showHours: !0,
                                endTime: s.expireTime
                            }), i && !L && (0, n.jsxs)(a.Z, {
                                href: i,
                                className: _().header__link,
                                onClick: w,
                                children: [(0, n.jsx)("span", {
                                    children: "مشاهده همه"
                                }), (0, n.jsx)("span", {
                                    className: (0, o.Z)("bi-angle-left", _().header__icon)
                                })]
                            })]
                        }), L ? (0, n.jsx)("div", {
                            className: _().hpp__section,
                            children: t.map(function(e) {
                                return (0, n.jsx)(h.Z, _object_spread_props(_object_spread({}, e), {
                                    isLazyLoad: v
                                }), e.id)
                            })
                        }) : x.isPc ? (0, n.jsx)(y(), {
                            children: (0, n.jsx)(f(), {
                                className: _().hpp__carousel,
                                plugins: M,
                                skipSnaps: !0,
                                children: t.map(function(e) {
                                    return (0, n.jsx)(f().Item, {
                                        className: _()["hpp__carousel-item"],
                                        children: (0, n.jsx)(h.Z, _object_spread_props(_object_spread({
                                            className: _().hpp__product
                                        }, e), {
                                            gridMode: !0,
                                            isLazyLoad: v
                                        }))
                                    }, e.id)
                                })
                            })
                        }) : (0, n.jsx)("div", {
                            children: (0, n.jsx)("div", {
                                ref: X,
                                className: _()["hpp__virtual-container"],
                                style: {
                                    height: "".concat(S, "px")
                                },
                                children: (0, n.jsx)("div", {
                                    className: _()["hpp__virtual-content"],
                                    style: {
                                        width: "".concat(B.getTotalSize(), "px")
                                    },
                                    children: B.getVirtualItems().map(function(e) {
                                        var r = t[e.index],
                                            o = x.isPc ? 24 : 12;
                                        return (0, n.jsx)("div", {
                                            className: _()["hpp__virtual-item"],
                                            style: {
                                                paddingLeft: "".concat(o, "px"),
                                                width: "".concat(e.size, "px"),
                                                transform: "translateX(-".concat(e.start, "px)")
                                            },
                                            children: e.index < t.length ? (0, n.jsx)("div", {
                                                className: _()["hpp__virtual-item-content"],
                                                children: (0, n.jsx)(h.Z, _object_spread_props(_object_spread({
                                                    className: _().hpp__product
                                                }, r), {
                                                    gridMode: !0,
                                                    isLazyLoad: v
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
            }, t.default = (0, g.memo)(x)
        },
        22480: function(e, t, r) {
            "use strict";
            r.d(t, {
                f: function() {
                    return i
                }
            });
            var n = r(48679),
                o = r(87580);

            function i(e, t) {
                var r;
                return "".concat((0, o.L)(null === (r = e.vendor) || void 0 === r ? void 0 : r.identifier), "/product/").concat(e.id).concat((0, n.stringifyQuery)(t))
            }
        },
        87580: function(e, t, r) {
            "use strict";
            r.d(t, {
                L: function() {
                    return o
                }
            });
            var n = r(48679);

            function o(e, t) {
                return "/".concat(e).concat((0, n.stringifyQuery)(t))
            }
        },
        94701: function(e, t, r) {
            "use strict";
            r.d(t, {
                S: function() {
                    return i
                }
            });
            var n = r(5164),
                o = r(27434);

            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    s = _sliced_to_array((0, o.useState)(i), 2),
                    a = s[0],
                    c = s[1],
                    l = (0, o.useMemo)(function() {
                        return (0, n.isClientSide)() && !t ? new IntersectionObserver(function(e) {
                            e[0].isIntersecting ? c(!0) : c(!1)
                        }, r) : null
                    }, [t, r]);
                return (0, o.useEffect)(function() {
                    var t = document.querySelector(e);
                    return t && l && l.observe(t),
                        function() {
                            l && t && l.unobserve(t)
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