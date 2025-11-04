function _array_like_to_array(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _define_property(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _iterable_to_array_limit(e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var i, r, o = [],
            c = !0,
            l = !1;
        try {
            for (n = n.call(e); !(c = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t); c = !0);
        } catch (e) {
            l = !0, r = e
        } finally {
            try {
                c || null == n.return || n.return()
            } finally {
                if (l) throw r
            }
        }
        return o
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _object_spread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            _define_property(e, t, n[t])
        })
    }
    return e
}

function ownKeys(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, i)
    }
    return n
}

function _object_spread_props(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function _sliced_to_array(e, t) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, t) || _unsupported_iterable_to_array(e, t) || _non_iterable_rest()
}

function _unsupported_iterable_to_array(e, t) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _array_like_to_array(e, t) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9691], {
        80162: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var i = n(67938),
                r = n(3087);

            function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (0, i.aM)(_object_spread({
                    queryKey: ["discovery", "home-coupon-list", e],
                    queryFn: function() {
                        return (0, r.wm)({
                            userId: e,
                            section: "home-coupon-list"
                        })
                    },
                    select: function(e) {
                        var t, n;
                        if (e.cached) return e;
                        var i = (null == e || null === (t = e.items) || void 0 === t ? void 0 : t[0]) || {};
                        return {
                            title: null == i ? void 0 : i.title,
                            items: null == i || null === (n = i.result) || void 0 === n ? void 0 : n.map(function(e) {
                                return _object_spread({
                                    id: e.id
                                }, e.metadata)
                            })
                        }
                    }
                }, t))
            }
        },
        22341: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return x
                }
            });
            var i = n(32930),
                r = n(27434),
                o = n(52375),
                c = n.n(o),
                l = n(5164),
                a = n(45835),
                s = n(81433),
                u = n.n(s),
                d = n(65074),
                _ = n.n(d),
                m = n(51889),
                p = n.n(m),
                h = n(76303),
                f = n.n(h),
                v = n(92034),
                b = n.n(v),
                y = n(67557),
                j = n.n(y);

            function x(e) {
                var t = e.title,
                    n = e.onCopy,
                    o = e.subtitle,
                    s = e.minPrice,
                    d = e.isLoading,
                    m = e.closeModal,
                    h = e.couponCode,
                    v = e.maxDiscount,
                    y = e.discountAmount,
                    x = e.discountPercent,
                    g = (0, a.b)().ua,
                    w = (0, r.useMemo)(function() {
                        return [{
                            title: "حداقل میزان خرید",
                            value: s ? "".concat((0, l.rialToHumanizeToman)(s), " ") : "ندارد"
                        }, {
                            title: "سقف اعمال تخفیف",
                            value: v ? "".concat((0, l.rialToHumanizeToman)(v), " ") : "ندارد"
                        }, !!y && {
                            title: "مبلغ تخفیف",
                            value: "".concat((0, l.rialToHumanizeToman)(y), " ")
                        }, !!x && {
                            title: "درصد تخفیف",
                            value: "".concat(x, " ٪")
                        }].filter(Boolean)
                    }, [s, v, y, x]);
                return (0, i.jsx)(b(), {
                    show: !0,
                    size: "sm",
                    className: c().clc__modal,
                    primaryButton: (0, i.jsx)(p(), {
                        value: h || "",
                        children: function(e) {
                            var t = e.copy,
                                r = e.copied;
                            return (0, i.jsx)(_(), {
                                icon: r ? "bi-tick-single" : "bi-copy",
                                color: "primary",
                                variant: "outline",
                                size: "md",
                                fullWidth: !0,
                                disabled: d,
                                label: r ? "کپی شد" : "کپی کد",
                                onClick: function() {
                                    t(), n()
                                }
                            })
                        }
                    }),
                    onClose: m,
                    title: "شرایط استفاده",
                    children: (0, i.jsxs)("div", {
                        children: [(0, i.jsx)("div", {
                            className: c()["clc__modal-title"],
                            children: (0, i.jsx)(j(), {
                                variant: "heading-4",
                                children: t || ""
                            })
                        }), w && w.length > 0 && (0, i.jsx)("div", {
                            className: c().clc__conditions,
                            children: w.map(function(e, t) {
                                return (0, i.jsxs)(u(), {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    className: c().clc__condition,
                                    children: [(0, i.jsx)(j(), {
                                        variant: "body-lg",
                                        tag: "p",
                                        children: e.title || ""
                                    }), (0, i.jsx)(j(), {
                                        variant: "body-lg",
                                        weight: "medium",
                                        tag: "p",
                                        children: e.value || ""
                                    })]
                                }, t)
                            })
                        }), (0, i.jsxs)("div", {
                            className: c()["clc__modal-subtitle"],
                            children: [(0, i.jsx)(j(), {
                                variant: "caption-lg",
                                weight: "medium",
                                tag: "p",
                                children: o || ""
                            }), (0, i.jsxs)(u(), {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                children: [(0, i.jsx)("p", {
                                    className: c()["clc__modal-coupon-value"],
                                    children: h
                                }), (0, i.jsx)(f(), {
                                    name: "bi-discount",
                                    size: g.isPc ? "20" : "16",
                                    className: c()["clc__coupon-modal-icon"]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        91963: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return N
                }
            });
            var i = n(32930),
                r = n(40877),
                o = n(27434),
                c = n(52375),
                l = n.n(c),
                a = n(36350),
                s = n(84581),
                u = n(22341),
                d = n(45835),
                _ = n(5164),
                m = n(81433),
                p = n.n(m),
                h = n(65074),
                f = n.n(h),
                v = n(51889),
                b = n.n(v),
                y = n(76303),
                j = n.n(y),
                x = n(70437),
                g = n.n(x),
                w = n(67557),
                C = n.n(w);

            function N(e) {
                var t = e.className,
                    n = e.item,
                    c = void 0 === n ? {} : n,
                    m = e.isLoading,
                    h = (0, d.b)().ua,
                    v = _sliced_to_array((0, a.useDisclosure)(), 2),
                    y = v[0],
                    x = v[1],
                    w = x.open,
                    N = x.close,
                    O = (0, o.useMemo)(function() {
                        return !c.expiredAt || (0, _.gregoryDate)().isAfter((0, _.gregoryDate)(null == c ? void 0 : c.expiredAt))
                    }, [c.expiredAt]),
                    k = (0, o.useMemo)(function() {
                        return "".concat(c.usingCount ? "".concat(c.usingCount, " بار قابل استفاده ") : "", " ").concat(O ? "" : "".concat((0, _.jalaliDate)(c.expiredAt).fromNow().replace("در", "تا"), " دیگر"))
                    }, [O, c.expiredAt, c.usingCount]),
                    P = function() {
                        (0, s.s)("couponCodeCopied", {
                            couponTitle: null == c ? void 0 : c.title,
                            couponCode: null == c ? void 0 : c.couponCode
                        })
                    };
                return (0, i.jsxs)("div", {
                    className: (0, r.Z)(l().clc, t),
                    children: [(0, i.jsx)("div", {
                        className: l().clc__title,
                        children: m ? (0, i.jsx)(g(), {
                            width: 150,
                            height: 22,
                            className: l().clc__skeleton
                        }) : (0, i.jsx)(C(), {
                            variant: "heading-4",
                            children: c.title
                        })
                    }), (0, i.jsx)("div", {
                        className: l().clc__subtitle,
                        children: m ? (0, i.jsx)(g(), {
                            width: 100,
                            height: 20,
                            className: l().clc__skeleton
                        }) : (0, i.jsx)(C(), {
                            variant: "caption-lg",
                            children: k
                        })
                    }), (0, i.jsxs)(p(), {
                        display: "flex",
                        alignItems: "center",
                        className: l().clc__coupon,
                        children: [(0, i.jsx)(j(), {
                            name: "bi-discount",
                            size: h.isPc ? "20" : "16",
                            className: l()["clc__coupon-icon"]
                        }), m ? (0, i.jsx)(g(), {
                            width: 120,
                            height: 24,
                            className: l().clc__skeleton
                        }) : (0, i.jsx)(C(), {
                            variant: "body-lg",
                            tag: "p",
                            children: null == c ? void 0 : c.couponCode
                        })]
                    }), (0, i.jsxs)(p(), {
                        display: "flex",
                        gap: 16,
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [(0, i.jsx)(b(), {
                            value: (null == c ? void 0 : c.couponCode) || "",
                            children: function(e) {
                                var t = e.copy,
                                    n = e.copied;
                                return (0, i.jsx)(f(), {
                                    icon: n ? "bi-tick-single" : "bi-copy",
                                    color: "primary",
                                    variant: "outline",
                                    size: "xs",
                                    fullWidth: !0,
                                    disabled: m,
                                    label: n ? "کپی شد" : "کپی کد",
                                    onClick: function() {
                                        t(), P()
                                    }
                                })
                            }
                        }), (0, i.jsx)(f(), {
                            onClick: w,
                            disabled: m,
                            size: "xs",
                            color: "secondary",
                            label: "شرایط استفاده",
                            fullWidth: !0
                        })]
                    }), y && (0, i.jsx)(u.Z, {
                        subtitle: k,
                        onCopy: P,
                        closeModal: N,
                        title: c.title,
                        couponCode: c.couponCode,
                        minPrice: c.minPrice,
                        maxDiscount: c.maxDiscount,
                        discountAmount: c.discountAmount,
                        discountPercent: c.discountPercent,
                        isLoading: m
                    })]
                })
            }
        },
        69691: function(e, t, n) {
            "use strict";
            var i = n(32930),
                r = n(74802),
                o = n.n(r),
                c = n(80162),
                l = n(91963),
                a = n(88592),
                s = n(45835),
                u = n(60802),
                d = n(88158),
                _ = n(27434),
                m = n(27203),
                p = n(5164),
                h = n(81433),
                f = n.n(h),
                v = n(177),
                b = n.n(v),
                y = n(70437),
                j = n.n(y),
                x = n(67557),
                g = n.n(x),
                w = [{
                    id: "LOGIN",
                    expireAt: "",
                    usingCount: 1,
                    minPrice: 2e7,
                    maxDiscount: 6e5,
                    couponCode: "basalam360",
                    title: "60 هزار تومن تخفیف"
                }],
                C = [{
                    expireAt: "",
                    usingCount: 1,
                    id: "NOT_LOGIN",
                    discountPercent: 10,
                    maxDiscount: 2e6,
                    couponCode: "basalamnew",
                    title: "ده درصد تخفیف برای خرید اول"
                }];
            t.Z = (0, _.memo)(function(e) {
                var t, n, r = e.items,
                    h = (0, s.b)().ua,
                    v = (0, u.l)(),
                    y = v.runGBTest,
                    x = v.evaluateGBTest,
                    N = (0, a.M_)(["userId", "isLoadingCurrentUser"]),
                    O = N.userId,
                    k = N.isLoadingCurrentUser,
                    P = _sliced_to_array((0, _.useState)(!1), 2),
                    A = P[0],
                    D = P[1],
                    I = (0, _.useMemo)(function() {
                        var e;
                        return "show" === (null === (e = y("test_hpc_coupon", !1)) || void 0 === e ? void 0 : e.value)
                    }, [y]),
                    S = (0, _.useRef)((0, p.isClientSide)() ? p.bsLocalStorage.getItem(m.D) : void 0),
                    T = (0, _.useMemo)(function() {
                        var e;
                        return r ? {
                            title: null == r ? void 0 : r.title,
                            items: null == r || null === (e = r.result) || void 0 === e ? void 0 : e.map(function(e) {
                                return _object_spread({
                                    id: e.id
                                }, e.metadata)
                            })
                        } : void 0
                    }, [r]),
                    z = (0, c.Z)(O, {
                        enabled: !k && !!O && !r && I
                    }).data,
                    L = T || z || S.current,
                    M = !!(null == L || null === (n = L.items) || void 0 === n || null === (t = n[0]) || void 0 === t ? void 0 : t.couponCode),
                    Z = (0, _.useMemo)(function() {
                        return I && M ? L.items : O ? w : C
                    }, [I, L, O, M]),
                    E = (0, _.useMemo)(function() {
                        return !A || !!I && !(null == L ? void 0 : L.items)
                    }, [A, null == L ? void 0 : L.items, I]);
                return (0, _.useEffect)(function() {
                    if (!L || (null == L ? void 0 : L.cached) || (0, p.isServerSide)()) return function() {};
                    var e = function() {
                        p.bsLocalStorage.setItem(m.D, _object_spread_props(_object_spread({}, L), {
                            cached: !0
                        }), 1440)
                    };
                    if (!("requestIdleCallback" in window)) return e(),
                        function() {};
                    var t = requestIdleCallback(e);
                    return function() {
                        cancelIdleCallback(t)
                    }
                }, [L]), (0, _.useEffect)(function() {
                    !k && O && !r && A && x("test_hpc_coupon")
                }, [x, k, A, r, I, O]), (0, _.useEffect)(function() {
                    D(!0)
                }, []), (0, i.jsx)("div", {
                    className: o().hcl,
                    children: (0, i.jsxs)(b(), {
                        children: [(0, i.jsx)("div", {
                            className: o().hcl__header,
                            children: (0, i.jsxs)(f(), {
                                display: "flex",
                                alignItems: "center",
                                className: o()["hcl__header-title"],
                                children: [h.isPc && (0, i.jsx)("img", {
                                    alt: "icon",
                                    width: "26",
                                    className: o()["hcl__header-icon"],
                                    src: "https://statics.basalam.com/public-83/photo/explore/aN/05-18/Fsi6TGDvTDwZNB6eCyx1W2mrwRzSCqNX8o4s3hjaWHVpWxL7Gz.SVG"
                                }), E ? (0, i.jsx)(j(), {
                                    width: 150,
                                    height: 24,
                                    className: o().hcl__skeleton
                                }) : (0, i.jsx)(g(), {
                                    variant: "heading-3",
                                    tag: "h3",
                                    children: (null == L ? void 0 : L.title) || "کد‌های تخفیف مخصوص شما"
                                })]
                            })
                        }), E ? (0, i.jsx)("div", {
                            className: o().hcl__carousel,
                            children: (0, i.jsx)(d.Z, {
                                className: o()["hcl__carousel-item"]
                            })
                        }) : (0, i.jsx)("div", {
                            className: o().hcl__carousel,
                            children: Z.map(function(e) {
                                return (0, i.jsx)(l.Z, {
                                    className: o()["hcl__carousel-item"],
                                    item: e
                                }, e.id)
                            })
                        })]
                    })
                })
            })
        },
        74802: function(e) {
            e.exports = {
                hcl: "ecJYLe",
                "hcl__header-title": "TLUmkZ",
                hcl__skeleton: "wKhPAn",
                "hcl__header-icon": "_0baz9W",
                hcl__carousel: "rnBrC7",
                "hcl__carousel-item": "_kCVR9"
            }
        }
    }
]);