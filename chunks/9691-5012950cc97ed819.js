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
        var i, c, o = [],
            r = !0,
            l = !1;
        try {
            for (n = n.call(e); !(r = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t); r = !0);
        } catch (e) {
            l = !0, c = e
        } finally {
            try {
                r || null == n.return || n.return()
            } finally {
                if (l) throw c
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
        51889: function(e, t, n) {
            "use strict";
            var i = n(27434),
                c = n(50874),
                o = n(5164),
                r = {
                    children: c.func.isRequired,
                    value: c.oneOfType([c.string, c.number]).isRequired
                },
                l = function(e) {
                    var t = e.children,
                        n = e.value,
                        c = _sliced_to_array(i.useState(!1), 2),
                        r = c[0],
                        l = c[1];
                    return i.useEffect(function() {
                        var e;
                        return r && (e = setTimeout(function() {
                                return l(!1)
                            }, 2e3)),
                            function() {
                                clearTimeout(e)
                            }
                    }), t({
                        copy: function(e) {
                            o.copy("string" == typeof e ? e : null != n ? n : ""), l(!0)
                        },
                        copied: r
                    })
                };
            l.propTypes = r, l.displayName = "BsCopy", e.exports = l
        },
        80162: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var i = n(67938),
                c = n(3087);

            function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (0, i.aM)(_object_spread({
                    queryKey: ["discovery", "home-coupon-list", e],
                    queryFn: function() {
                        return (0, c.wm)({
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
                c = n(27434),
                o = n(52375),
                r = n.n(o),
                l = n(5164),
                a = n(45835),
                s = n(81433),
                u = n.n(s),
                d = n(65074),
                _ = n.n(d),
                p = n(51889),
                m = n.n(p),
                f = n(76303),
                h = n.n(f),
                v = n(92034),
                y = n.n(v),
                b = n(67557),
                j = n.n(b);

            function x(e) {
                var t = e.title,
                    n = e.onCopy,
                    o = e.subtitle,
                    s = e.minPrice,
                    d = e.isLoading,
                    p = e.closeModal,
                    f = e.couponCode,
                    v = e.maxDiscount,
                    b = e.discountAmount,
                    x = e.discountPercent,
                    g = (0, a.b)().ua,
                    N = (0, c.useMemo)(function() {
                        return [{
                            title: "حداقل میزان خرید",
                            value: s ? "".concat((0, l.rialToHumanizeToman)(s), " ") : "ندارد"
                        }, {
                            title: "سقف اعمال تخفیف",
                            value: v ? "".concat((0, l.rialToHumanizeToman)(v), " ") : "ندارد"
                        }, !!b && {
                            title: "مبلغ تخفیف",
                            value: "".concat((0, l.rialToHumanizeToman)(b), " ")
                        }, !!x && {
                            title: "درصد تخفیف",
                            value: "".concat(x, " ٪")
                        }].filter(Boolean)
                    }, [s, v, b, x]);
                return (0, i.jsx)(y(), {
                    show: !0,
                    size: "sm",
                    className: r().clc__modal,
                    primaryButton: (0, i.jsx)(m(), {
                        value: f || "",
                        children: function(e) {
                            var t = e.copy,
                                c = e.copied;
                            return (0, i.jsx)(_(), {
                                icon: c ? "bi-tick-single" : "bi-copy",
                                color: "primary",
                                variant: "outline",
                                size: "md",
                                fullWidth: !0,
                                disabled: d,
                                label: c ? "کپی شد" : "کپی کد",
                                onClick: function() {
                                    t(), n()
                                }
                            })
                        }
                    }),
                    onClose: p,
                    title: "شرایط استفاده",
                    children: (0, i.jsxs)("div", {
                        children: [(0, i.jsx)("div", {
                            className: r()["clc__modal-title"],
                            children: (0, i.jsx)(j(), {
                                variant: "heading-4",
                                children: t || ""
                            })
                        }), N && N.length > 0 && (0, i.jsx)("div", {
                            className: r().clc__conditions,
                            children: N.map(function(e, t) {
                                return (0, i.jsxs)(u(), {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    className: r().clc__condition,
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
                            className: r()["clc__modal-subtitle"],
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
                                    className: r()["clc__modal-coupon-value"],
                                    children: f
                                }), (0, i.jsx)(h(), {
                                    name: "bi-discount",
                                    size: g.isPc ? "20" : "16",
                                    className: r()["clc__coupon-modal-icon"]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        88158: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var i = n(32930),
                c = n(40877),
                o = n(52375),
                r = n.n(o),
                l = n(45835),
                a = n(81433),
                s = n.n(a),
                u = n(65074),
                d = n.n(u),
                _ = n(76303),
                p = n.n(_),
                m = n(70437),
                f = n.n(m);

            function h(e) {
                var t = e.className,
                    n = (0, l.b)().ua;
                return (0, i.jsxs)("div", {
                    className: (0, c.Z)(r().clc, t),
                    children: [(0, i.jsx)("div", {
                        className: r().clc__title,
                        children: (0, i.jsx)(f(), {
                            width: 150,
                            height: 22,
                            className: r().clc__skeleton
                        })
                    }), (0, i.jsx)("div", {
                        className: r().clc__subtitle,
                        children: (0, i.jsx)(f(), {
                            width: 100,
                            height: 20,
                            className: r().clc__skeleton
                        })
                    }), (0, i.jsxs)(s(), {
                        display: "flex",
                        alignItems: "center",
                        className: r().clc__coupon,
                        children: [(0, i.jsx)(p(), {
                            name: "bi-discount",
                            size: n.isPc ? "20" : "16",
                            className: r()["clc__coupon-icon"]
                        }), (0, i.jsx)(f(), {
                            width: 120,
                            height: 24,
                            className: r().clc__skeleton
                        })]
                    }), (0, i.jsxs)(s(), {
                        display: "flex",
                        gap: 16,
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [(0, i.jsx)(d(), {
                            icon: "bi-copy",
                            color: "primary",
                            variant: "outline",
                            size: "xs",
                            fullWidth: !0,
                            disabled: !0,
                            label: "کپی کد"
                        }), (0, i.jsx)(d(), {
                            disabled: !0,
                            size: "xs",
                            color: "secondary",
                            label: "شرایط استفاده",
                            fullWidth: !0
                        })]
                    })]
                })
            }
        },
        91963: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return C
                }
            });
            var i = n(32930),
                c = n(40877),
                o = n(27434),
                r = n(52375),
                l = n.n(r),
                a = n(92369),
                s = n(36350),
                u = n(22341),
                d = n(45835),
                _ = n(5164),
                p = n(81433),
                m = n.n(p),
                f = n(65074),
                h = n.n(f),
                v = n(51889),
                y = n.n(v),
                b = n(76303),
                j = n.n(b),
                x = n(70437),
                g = n.n(x),
                N = n(67557),
                w = n.n(N);

            function C(e) {
                var t = e.className,
                    n = e.item,
                    r = void 0 === n ? {} : n,
                    p = e.isLoading,
                    f = (0, d.b)().ua,
                    v = _sliced_to_array((0, s.useDisclosure)(), 2),
                    b = v[0],
                    x = v[1],
                    N = x.open,
                    C = x.close,
                    O = (0, o.useMemo)(function() {
                        return !r.expiredAt || (0, _.gregoryDate)().isAfter((0, _.gregoryDate)(null == r ? void 0 : r.expiredAt))
                    }, [r.expiredAt]),
                    k = (0, o.useMemo)(function() {
                        return "".concat(r.usingCount ? "".concat(r.usingCount, " بار قابل استفاده ") : "", " ").concat(O ? "" : "".concat((0, _.jalaliDate)(r.expiredAt).fromNow().replace("در", "تا"), " دیگر"))
                    }, [O, r.expiredAt, r.usingCount]),
                    P = function() {
                        (0, a.publishEvent)("couponCodeCopied", {
                            couponTitle: null == r ? void 0 : r.title,
                            couponCode: null == r ? void 0 : r.couponCode
                        })
                    };
                return (0, i.jsxs)("div", {
                    className: (0, c.Z)(l().clc, t),
                    children: [(0, i.jsx)("div", {
                        className: l().clc__title,
                        children: p ? (0, i.jsx)(g(), {
                            width: 150,
                            height: 22,
                            className: l().clc__skeleton
                        }) : (0, i.jsx)(w(), {
                            variant: "heading-4",
                            children: r.title
                        })
                    }), (0, i.jsx)("div", {
                        className: l().clc__subtitle,
                        children: p ? (0, i.jsx)(g(), {
                            width: 100,
                            height: 20,
                            className: l().clc__skeleton
                        }) : (0, i.jsx)(w(), {
                            variant: "caption-lg",
                            children: k
                        })
                    }), (0, i.jsxs)(m(), {
                        display: "flex",
                        alignItems: "center",
                        className: l().clc__coupon,
                        children: [(0, i.jsx)(j(), {
                            name: "bi-discount",
                            size: f.isPc ? "20" : "16",
                            className: l()["clc__coupon-icon"]
                        }), p ? (0, i.jsx)(g(), {
                            width: 120,
                            height: 24,
                            className: l().clc__skeleton
                        }) : (0, i.jsx)(w(), {
                            variant: "body-lg",
                            tag: "p",
                            children: null == r ? void 0 : r.couponCode
                        })]
                    }), (0, i.jsxs)(m(), {
                        display: "flex",
                        gap: 16,
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [(0, i.jsx)(y(), {
                            value: (null == r ? void 0 : r.couponCode) || "",
                            children: function(e) {
                                var t = e.copy,
                                    n = e.copied;
                                return (0, i.jsx)(h(), {
                                    icon: n ? "bi-tick-single" : "bi-copy",
                                    color: "primary",
                                    variant: "outline",
                                    size: "xs",
                                    fullWidth: !0,
                                    disabled: p,
                                    label: n ? "کپی شد" : "کپی کد",
                                    onClick: function() {
                                        t(), P()
                                    }
                                })
                            }
                        }), (0, i.jsx)(h(), {
                            onClick: N,
                            disabled: p,
                            size: "xs",
                            color: "secondary",
                            label: "شرایط استفاده",
                            fullWidth: !0
                        })]
                    }), b && (0, i.jsx)(u.Z, {
                        subtitle: k,
                        onCopy: P,
                        closeModal: C,
                        title: r.title,
                        couponCode: r.couponCode,
                        minPrice: r.minPrice,
                        maxDiscount: r.maxDiscount,
                        discountAmount: r.discountAmount,
                        discountPercent: r.discountPercent,
                        isLoading: p
                    })]
                })
            }
        },
        69691: function(e, t, n) {
            "use strict";
            var i = n(32930),
                c = n(74802),
                o = n.n(c),
                r = n(80162),
                l = n(91963),
                a = n(88592),
                s = n(45835),
                u = n(60802),
                d = n(88158),
                _ = n(27434),
                p = n(27203),
                m = n(5164),
                f = n(81433),
                h = n.n(f),
                v = n(177),
                y = n.n(v),
                b = n(70437),
                j = n.n(b),
                x = n(67557),
                g = n.n(x),
                N = [{
                    id: "LOGIN",
                    expireAt: "",
                    usingCount: 1,
                    minPrice: 2e7,
                    maxDiscount: 6e5,
                    couponCode: "basalam360",
                    title: "60 هزار تومن تخفیف"
                }],
                w = [{
                    expireAt: "",
                    usingCount: 1,
                    id: "NOT_LOGIN",
                    discountPercent: 10,
                    maxDiscount: 2e6,
                    couponCode: "basalamnew",
                    title: "ده درصد تخفیف برای خرید اول"
                }];
            t.Z = (0, _.memo)(function(e) {
                var t, n, c = e.items,
                    f = (0, s.b)().ua,
                    v = (0, u.l)(),
                    b = v.runGBTest,
                    x = v.evaluateGBTest,
                    C = (0, a.M_)(["userId", "isLoadingCurrentUser"]),
                    O = C.userId,
                    k = C.isLoadingCurrentUser,
                    P = _sliced_to_array((0, _.useState)(!1), 2),
                    D = P[0],
                    I = P[1],
                    A = (0, _.useMemo)(function() {
                        var e;
                        return "show" === (null === (e = b("test_hpc_coupon", !1)) || void 0 === e ? void 0 : e.value)
                    }, [b]),
                    T = (0, _.useRef)((0, m.isClientSide)() ? m.bsLocalStorage.getItem(p.D) : void 0),
                    S = (0, _.useMemo)(function() {
                        var e;
                        return c ? {
                            title: null == c ? void 0 : c.title,
                            items: null == c || null === (e = c.result) || void 0 === e ? void 0 : e.map(function(e) {
                                return _object_spread({
                                    id: e.id
                                }, e.metadata)
                            })
                        } : void 0
                    }, [c]),
                    z = (0, r.Z)(O, {
                        enabled: !k && !!O && !c && A
                    }).data,
                    L = S || z || T.current,
                    Z = !!(null == L || null === (n = L.items) || void 0 === n || null === (t = n[0]) || void 0 === t ? void 0 : t.couponCode),
                    M = (0, _.useMemo)(function() {
                        return A && Z ? L.items : O ? N : w
                    }, [A, L, O, Z]),
                    E = (0, _.useMemo)(function() {
                        return !D || !!A && !(null == L ? void 0 : L.items)
                    }, [D, null == L ? void 0 : L.items, A]);
                return (0, _.useEffect)(function() {
                    if (!L || (null == L ? void 0 : L.cached) || (0, m.isServerSide)()) return function() {};
                    var e = function() {
                        m.bsLocalStorage.setItem(p.D, _object_spread_props(_object_spread({}, L), {
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
                    !k && O && !c && D && x("test_hpc_coupon")
                }, [x, k, D, c, A, O]), (0, _.useEffect)(function() {
                    I(!0)
                }, []), (0, i.jsx)("div", {
                    className: o().hcl,
                    children: (0, i.jsxs)(y(), {
                        children: [(0, i.jsx)("div", {
                            className: o().hcl__header,
                            children: (0, i.jsxs)(h(), {
                                display: "flex",
                                alignItems: "center",
                                className: o()["hcl__header-title"],
                                children: [f.isPc && (0, i.jsx)("img", {
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
                            children: M.map(function(e) {
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
        52375: function(e) {
            e.exports = {
                clc: "OLx65C",
                clc__coupon: "_70lPjZ",
                "clc__coupon-icon": "_9_pXrv",
                clc__divider: "t5A5f3",
                "clc__coupon-link": "T676QP",
                clc__title: "xDNvST",
                clc__subtitle: "APCX4I",
                clc__conditions: "XnjNDR",
                clc__condition: "cUDpI8",
                "clc__modal-title": "aypLAX",
                "clc__modal-subtitle": "Hg1sxE",
                "clc__modal-coupon-value": "dRDNqX",
                "clc__coupon-modal-icon": "VKwJ3q"
            }
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