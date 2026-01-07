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
        var n, t, i = [],
            s = !0,
            a = !1;
        try {
            for (o = o.call(e); !(s = (n = o.next()).done) && (i.push(n.value), !r || i.length !== r); s = !0);
        } catch (e) {
            a = !0, t = e
        } finally {
            try {
                s || null == o.return || o.return()
            } finally {
                if (a) throw t
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
    [6961], {
        94377: function(e, r, o) {
            "use strict";
            var n = o(32930),
                t = o(69389),
                i = o(50874),
                s = o(69337),
                a = o(27434),
                c = o(77417),
                l = o(36350);
            o(81433), o(76303), o(7095), o(11966), o(5164), o(99249);
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
                _ = {
                    onClick: i.func,
                    children: i.node,
                    className: i.string
                },
                d = function(e) {
                    var r = e.children,
                        o = e.onClick,
                        i = e.className,
                        s = void 0 === i ? "" : i,
                        a = function(e) {
                            null == o || o(e)
                        };
                    return n.jsx("li", {
                        tabIndex: 0,
                        role: "menuitem",
                        onClick: a,
                        onKeyDown: a,
                        className: t.clsx(["bs-dropdown--item", _define_property({}, s, s)]),
                        children: r
                    })
                };
            d.propTypes = _, d.displayName = "BsDropdownItem";
            var u = function(e) {
                var r = e.show,
                    o = e.onChange,
                    i = e.children,
                    p = e.className,
                    _ = e.label,
                    d = void 0 === _ ? "" : _,
                    u = e.modalProps,
                    h = void 0 === u ? {} : u,
                    b = e.buttonComponent,
                    m = e.buttonProps,
                    f = void 0 === m ? {} : m,
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
                    A = a.useId(),
                    I = l.useWindowSize().isPhone,
                    D = _sliced_to_array(l.useUncontrolled({
                        onChange: o,
                        value: r,
                        defaultValue: !1
                    }), 2),
                    z = D[0],
                    B = D[1],
                    W = a.useRef(null),
                    F = function() {
                        B(!1)
                    },
                    M = function() {
                        F()
                    },
                    E = a.useMemo(function() {
                        return _object_spread({
                            showClose: !1,
                            hasPopstate: !1
                        }, h)
                    }, [h]);
                return n.jsxs("div", {
                    id: A,
                    className: t.clsx(["bs-dropdown", {
                        "bs-dropdown--open": z
                    }, p]),
                    children: [n.jsx("button", _object_spread_props(_object_spread({
                        type: "button",
                        className: "bs-dropdown__btn",
                        disabled: v,
                        onClick: function() {
                            z ? F() : B(!0)
                        }
                    }, f), {
                        ref: W,
                        children: b || n.jsxs(n.Fragment, {
                            children: [!!d && "start" === C && n.jsx("span", {
                                className: "bs-dropdown__label",
                                children: d
                            }), n.jsx("i", {
                                className: t.clsx(["bs-dropdown__icon", _define_property({}, x, !!x)])
                            }), !!d && "end" === C && n.jsx("span", {
                                className: "bs-dropdown__label",
                                children: d
                            })]
                        })
                    })), I ? n.jsx(s.BsModal, _object_spread_props(_object_spread({
                        show: z,
                        onClose: F
                    }, E), {
                        children: n.jsx("ul", _object_spread_props(_object_spread({
                            className: "bs-dropdown__options bs-dropdown__options--modal",
                            role: "menu"
                        }, g), {
                            onClick: M,
                            onKeyDown: M,
                            children: i
                        }))
                    })) : n.jsx(c, {
                        anchorEl: W.current,
                        position: S,
                        show: z,
                        onClose: F,
                        transition: "fade",
                        className: t.clsx(["bs-dropdown__options bs-dropdown__options--popover", O]),
                        children: n.jsx("ul", _object_spread_props(_object_spread({}, g), {
                            role: "menu",
                            onClick: M,
                            onKeyDown: M,
                            children: i
                        }))
                    })]
                })
            };
            u.propTypes = p, u.displayName = "BsDropdown", u.Item = d, e.exports = u
        },
        85156: function(e, r, o) {
            "use strict";
            o.r(r);
            var n = o(32930),
                t = o(40877),
                i = o(2347),
                s = o(27434),
                a = o(92369),
                c = o(88107),
                l = o(45835),
                p = o(44219),
                _ = o.n(p),
                d = o(57339),
                u = o(87540),
                h = o(93222),
                b = o.n(h),
                m = o(81433),
                f = o.n(m),
                y = o(5164),
                v = function() {
                    return requestIdleCallback(function() {
                        (0, a.publishEvent)("homeClick", {
                            item: 0,
                            componentName: "horizontal_product_popular"
                        })
                    })
                };
            r.default = (0, s.memo)(function(e) {
                var r, o = e.items,
                    a = e.title,
                    p = e.moreLink,
                    h = e.metadata,
                    m = e.description,
                    j = e.showAllProduct,
                    g = e.isLazyProduct,
                    w = void 0 !== g && g,
                    x = (0, l.b)().ua,
                    N = !!(0, c.Z)().query.section || j,
                    O = !0 === (null == h ? void 0 : h.hasBackground),
                    P = !0 === (null == h ? void 0 : h.hasLogo),
                    C = !0 === (null == h ? void 0 : h.showPercentIcon),
                    k = (0, s.useMemo)(function() {
                        return [(0, y.BsLightCarouselAutoplayPlugin)({
                            delay: 3e3,
                            stopOnInteraction: !0
                        })]
                    }, []),
                    S = x.isPc ? b() : "div",
                    A = x.isPc ? b().Item : "div";
                return (0, n.jsxs)(n.Fragment, {
                    children: [!N && P && (0, n.jsx)("div", {
                        className: _()["hpp__logo-bg"],
                        children: (0, n.jsx)("img", {
                            className: _().hpp__logo,
                            src: "https://statics.basalam.com/public-153/admin/X7XzJW/12-06/Wf4ai41eFrgXF39WCbpIh8WBHimF9AADGf9binmN2bJY3MANzF.SVG",
                            alt: " "
                        })
                    }), (0, n.jsxs)("section", {
                        className: (0, t.Z)(_().hpp, (r = {}, _define_property(r, _()["hpp--bg"], !N && O), _define_property(r, _()["hpp--with-percent-icon"], C), r)),
                        children: [" ", (0, n.jsxs)("div", {
                            className: _().header,
                            children: [(0, n.jsxs)("div", {
                                className: _().header__content,
                                children: [(0, n.jsxs)("h2", {
                                    className: _().header__title,
                                    children: [C && (0, n.jsx)("img", {
                                        className: _()["header__percent-icon"],
                                        src: "https://statics.basalam.com/public-153/admin/X7XzJW/12-06/Wf4ai41eFrgXF39WCbpIh8WBHimF9AADGf9binmN2bJY3MANzF.SVG",
                                        alt: ""
                                    }), a]
                                }), (0, n.jsx)("span", {
                                    className: _().header__description,
                                    children: m
                                })]
                            }), !!(null == h ? void 0 : h.expireTime) && (0, n.jsx)(u.Z, {
                                className: _()["header__count-down"],
                                itemClass: _().hpp__timer,
                                showHours: !0,
                                endTime: h.expireTime
                            }), p && !N && (0, n.jsxs)(i.Z, {
                                href: p,
                                className: _().header__link,
                                onClick: v,
                                children: [(0, n.jsx)("span", {
                                    children: "مشاهده همه"
                                }), (0, n.jsx)("span", {
                                    className: (0, t.Z)("bi-angle-left", _().header__icon)
                                })]
                            })]
                        }), N ? (0, n.jsx)("div", {
                            className: _().hpp__section,
                            children: o.map(function(e) {
                                return (0, n.jsx)(d.Z, _object_spread_props(_object_spread({}, e), {
                                    isLazyLoad: w
                                }), e.id)
                            })
                        }) : (0, n.jsx)(f(), {
                            children: (0, n.jsx)(S, {
                                className: _().hpp__carousel,
                                plugins: k,
                                skipSnaps: !0,
                                children: o.map(function(e) {
                                    return (0, n.jsx)(A, {
                                        className: _()["hpp__carousel-item"],
                                        children: (0, n.jsx)(d.Z, _object_spread_props(_object_spread({
                                            className: _().hpp__product
                                        }, e), {
                                            gridMode: !0,
                                            isLazyLoad: w
                                        }))
                                    }, e.id)
                                })
                            })
                        })]
                    })]
                })
            })
        },
        22480: function(e, r, o) {
            "use strict";
            o.d(r, {
                f: function() {
                    return i
                }
            });
            var n = o(48679),
                t = o(87580);

            function i(e, r) {
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
                    return i
                }
            });
            var n = o(5164),
                t = o(27434);

            function i(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    s = _sliced_to_array((0, t.useState)(i), 2),
                    a = s[0],
                    c = s[1],
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