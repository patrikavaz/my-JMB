function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, o = new Array(r); t < r; t++) o[t] = e[t];
    return o
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
        var o, n, i = [],
            s = !0,
            a = !1;
        try {
            for (t = t.call(e); !(s = (o = t.next()).done) && (i.push(o.value), !r || i.length !== r); s = !0);
        } catch (e) {
            a = !0, n = e
        } finally {
            try {
                s || null == t.return || t.return()
            } finally {
                if (a) throw n
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
            o = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), o.forEach(function(r) {
            _define_property(e, r, t[r])
        })
    }
    return e
}

function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), t.push.apply(t, o)
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
    [6961], {
        94377: function(e, r, t) {
            "use strict";
            var o = t(32930),
                n = t(69389),
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
                _ = function(e) {
                    var r = e.children,
                        t = e.onClick,
                        i = e.className,
                        s = void 0 === i ? "" : i,
                        a = function(e) {
                            null == t || t(e)
                        };
                    return o.jsx("li", {
                        tabIndex: 0,
                        role: "menuitem",
                        onClick: a,
                        onKeyDown: a,
                        className: n.clsx(["bs-dropdown--item", _define_property({}, s, s)]),
                        children: r
                    })
                };
            _.propTypes = d, _.displayName = "BsDropdownItem";
            var u = function(e) {
                var r = e.show,
                    t = e.onChange,
                    i = e.children,
                    p = e.className,
                    d = e.label,
                    _ = void 0 === d ? "" : d,
                    u = e.modalProps,
                    h = void 0 === u ? {} : u,
                    b = e.buttonComponent,
                    m = e.buttonProps,
                    f = void 0 === m ? {} : m,
                    y = e.disabled,
                    j = void 0 !== y && y,
                    v = e.optionsProps,
                    g = void 0 === v ? {} : v,
                    w = e.icon,
                    x = void 0 === w ? "bi-more-v" : w,
                    N = e.popoverClassName,
                    P = void 0 === N ? "" : N,
                    O = e.labelPosition,
                    C = void 0 === O ? "end" : O,
                    k = e.position,
                    A = void 0 === k ? "bottom-right" : k,
                    S = a.useId(),
                    I = l.useWindowSize().isPhone,
                    D = _sliced_to_array(l.useUncontrolled({
                        onChange: t,
                        value: r,
                        defaultValue: !1
                    }), 2),
                    z = D[0],
                    B = D[1],
                    T = a.useRef(null),
                    W = function() {
                        B(!1)
                    },
                    F = function() {
                        W()
                    },
                    L = a.useMemo(function() {
                        return _object_spread({
                            showClose: !1,
                            hasPopstate: !1
                        }, h)
                    }, [h]);
                return o.jsxs("div", {
                    id: S,
                    className: n.clsx(["bs-dropdown", {
                        "bs-dropdown--open": z
                    }, p]),
                    children: [o.jsx("button", _object_spread_props(_object_spread({
                        type: "button",
                        className: "bs-dropdown__btn",
                        disabled: j,
                        onClick: function() {
                            z ? W() : B(!0)
                        }
                    }, f), {
                        ref: T,
                        children: b || o.jsxs(o.Fragment, {
                            children: [!!_ && "start" === C && o.jsx("span", {
                                className: "bs-dropdown__label",
                                children: _
                            }), o.jsx("i", {
                                className: n.clsx(["bs-dropdown__icon", _define_property({}, x, !!x)])
                            }), !!_ && "end" === C && o.jsx("span", {
                                className: "bs-dropdown__label",
                                children: _
                            })]
                        })
                    })), I ? o.jsx(s.BsModal, _object_spread_props(_object_spread({
                        show: z,
                        onClose: W
                    }, L), {
                        children: o.jsx("ul", _object_spread_props(_object_spread({
                            className: "bs-dropdown__options bs-dropdown__options--modal",
                            role: "menu"
                        }, g), {
                            onClick: F,
                            onKeyDown: F,
                            children: i
                        }))
                    })) : o.jsx(c, {
                        anchorEl: T.current,
                        position: A,
                        show: z,
                        onClose: W,
                        transition: "fade",
                        className: n.clsx(["bs-dropdown__options bs-dropdown__options--popover", P]),
                        children: o.jsx("ul", _object_spread_props(_object_spread({}, g), {
                            role: "menu",
                            onClick: F,
                            onKeyDown: F,
                            children: i
                        }))
                    })]
                })
            };
            u.propTypes = p, u.displayName = "BsDropdown", u.Item = _, e.exports = u
        },
        85156: function(e, r, t) {
            "use strict";
            t.r(r);
            var o = t(32930),
                n = t(40877),
                i = t(50874),
                s = t.n(i),
                a = t(2347),
                c = t(27434),
                l = t(92369),
                p = t(88107),
                d = t(45835),
                _ = t(44219),
                u = t.n(_),
                h = t(57339),
                b = t(87540),
                m = t(93222),
                f = t.n(m),
                y = t(81433),
                j = t.n(y),
                v = t(5164),
                g = function() {
                    return requestIdleCallback(function() {
                        (0, l.publishEvent)("homeClick", {
                            item: 0,
                            componentName: "horizontal_product_popular"
                        })
                    })
                };

            function w(e) {
                var r, t = e.items,
                    i = e.title,
                    s = e.moreLink,
                    l = e.metadata,
                    _ = e.description,
                    m = e.showAllProduct,
                    y = e.isLazyProduct,
                    w = void 0 !== y && y,
                    x = (0, d.b)().ua,
                    N = !!(0, p.Z)().query.section || m,
                    P = !0 === (null == l ? void 0 : l.hasBackground),
                    O = !0 === (null == l ? void 0 : l.hasLogo),
                    C = !0 === (null == l ? void 0 : l.showPercentIcon),
                    k = (0, c.useMemo)(function() {
                        return [(0, v.BsLightCarouselAutoplayPlugin)({
                            delay: 3e3,
                            stopOnInteraction: !0
                        })]
                    }, []),
                    A = x.isPc ? f() : "div",
                    S = x.isPc ? f().Item : "div";
                return (0, o.jsxs)(o.Fragment, {
                    children: [!N && O && (0, o.jsx)("div", {
                        className: u()["hpp__logo-bg"],
                        children: (0, o.jsx)("img", {
                            className: u().hpp__logo,
                            src: "https://statics.basalam.com/public-153/admin/X7XzJW/12-06/Wf4ai41eFrgXF39WCbpIh8WBHimF9AADGf9binmN2bJY3MANzF.SVG",
                            alt: " "
                        })
                    }), (0, o.jsxs)("section", {
                        className: (0, n.Z)(u().hpp, (r = {}, _define_property(r, u()["hpp--bg"], !N && P), _define_property(r, u()["hpp--with-percent-icon"], C), r)),
                        children: [" ", (0, o.jsxs)("div", {
                            className: u().header,
                            children: [(0, o.jsxs)("div", {
                                className: u().header__content,
                                children: [(0, o.jsxs)("h2", {
                                    className: u().header__title,
                                    children: [C && (0, o.jsx)("img", {
                                        className: u()["header__percent-icon"],
                                        src: "https://statics.basalam.com/public-153/admin/X7XzJW/12-06/Wf4ai41eFrgXF39WCbpIh8WBHimF9AADGf9binmN2bJY3MANzF.SVG",
                                        alt: ""
                                    }), i]
                                }), (0, o.jsx)("span", {
                                    className: u().header__description,
                                    children: _
                                })]
                            }), !!(null == l ? void 0 : l.expireTime) && (0, o.jsx)(b.Z, {
                                className: u()["header__count-down"],
                                itemClass: u().hpp__timer,
                                showHours: !0,
                                endTime: l.expireTime
                            }), s && !N && (0, o.jsxs)(a.Z, {
                                href: s,
                                className: u().header__link,
                                onClick: g,
                                children: [(0, o.jsx)("span", {
                                    children: "مشاهده همه"
                                }), (0, o.jsx)("span", {
                                    className: (0, n.Z)("bi-angle-left", u().header__icon)
                                })]
                            })]
                        }), N ? (0, o.jsx)("div", {
                            className: u().hpp__section,
                            children: t.map(function(e) {
                                return (0, o.jsx)(h.Z, _object_spread_props(_object_spread({}, e), {
                                    isLazyLoad: w
                                }), e.id)
                            })
                        }) : (0, o.jsx)(j(), {
                            children: (0, o.jsx)(A, {
                                className: u().hpp__carousel,
                                plugins: k,
                                skipSnaps: !0,
                                children: t.map(function(e) {
                                    return (0, o.jsx)(S, {
                                        className: u()["hpp__carousel-item"],
                                        children: (0, o.jsx)(h.Z, _object_spread_props(_object_spread({
                                            className: u().hpp__product
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
            }
            w.propTypes = {
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
            }, r.default = (0, c.memo)(w)
        },
        22480: function(e, r, t) {
            "use strict";
            t.d(r, {
                f: function() {
                    return i
                }
            });
            var o = t(48679),
                n = t(87580);

            function i(e, r) {
                var t;
                return "".concat((0, n.L)(null === (t = e.vendor) || void 0 === t ? void 0 : t.identifier), "/product/").concat(e.id).concat((0, o.stringifyQuery)(r))
            }
        },
        87580: function(e, r, t) {
            "use strict";
            t.d(r, {
                L: function() {
                    return n
                }
            });
            var o = t(48679);

            function n(e, r) {
                return "/".concat(e).concat((0, o.stringifyQuery)(r))
            }
        },
        94701: function(e, r, t) {
            "use strict";
            t.d(r, {
                S: function() {
                    return i
                }
            });
            var o = t(5164),
                n = t(27434);

            function i(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    s = _sliced_to_array((0, n.useState)(i), 2),
                    a = s[0],
                    c = s[1],
                    l = (0, n.useMemo)(function() {
                        return (0, o.isClientSide)() && !r ? new IntersectionObserver(function(e) {
                            e[0].isIntersecting ? c(!0) : c(!1)
                        }, t) : null
                    }, [r, t]);
                return (0, n.useEffect)(function() {
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