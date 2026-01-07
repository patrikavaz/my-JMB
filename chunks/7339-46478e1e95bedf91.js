function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, o = new Array(r); t < r; t++) o[t] = e[t];
    return o
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function _define_property(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e
}

function _iterable_to_array(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _iterable_to_array_limit(e, r) {
    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != t) {
        var o, i, a = [],
            c = !0,
            n = !1;
        try {
            for (t = t.call(e); !(c = (o = t.next()).done) && (a.push(o.value), !r || a.length !== r); c = !0);
        } catch (e) {
            n = !0, i = e
        } finally {
            try {
                c || null == t.return || t.return()
            } finally {
                if (n) throw i
            }
        }
        return a
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

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
}

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _array_like_to_array(e, r) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7339], {
        93143: function(e, r, t) {
            "use strict";
            t.d(r, {
                $: function() {
                    return s
                }
            });
            var o = t(5164),
                i = t(88592),
                a = t(33918),
                c = t(27434),
                n = t(60802),
                d = "test_satisfaction_guarantee",
                s = function(e) {
                    var r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        s = (0, i.M_)(["currentUser", "isLoadingCurrentUser"]),
                        l = s.currentUser,
                        u = s.isLoadingCurrentUser,
                        p = _sliced_to_array((0, c.useState)(!1), 2),
                        _ = p[0],
                        m = p[1],
                        v = (0, n.l)(),
                        b = v.runGBTest,
                        f = v.evaluateGBTest;
                    (0, c.useEffect)(function() {
                        t && m(!0)
                    }, []);
                    var h = (0, c.useMemo)(function() {
                            var e;
                            return _ ? null === (e = b(d, !1)) || void 0 === e ? void 0 : e.value : null
                        }, [b, _]),
                        x = e === a.ek.TOP_VENDOR;
                    return (0, c.useEffect)(function() {
                        var e;
                        x && !u && r && _ && f(d, {
                            userCityId: null == l || null === (e = l.city) || void 0 === e ? void 0 : e.id
                        })
                    }, [x, r, u, _]), (0, c.useMemo)(function() {
                        return _object_spread_props(_object_spread({}, (0, o.camelize)(h)), {
                            isShow: (null == h ? void 0 : h.enabled) && x
                        })
                    }, [h, x])
                }
        },
        87540: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return u
                }
            });
            var o = t(32930),
                i = t(40877),
                a = t(48531),
                c = t.n(a),
                n = t(5164),
                d = t(36350),
                s = t(27434),
                l = function(e) {
                    var r = e % 60,
                        t = Math.floor(e / 86400),
                        o = Math.floor(e % 86400 / 3600),
                        i = Math.floor(e % 3600 / 60);
                    return {
                        days: t,
                        total: e,
                        hours: o,
                        seconds: r,
                        minutes: i,
                        formattedDays: "0".concat(t).slice(-2),
                        formattedHours: "0".concat(o).slice(-2),
                        formattedSeconds: "0".concat(r).slice(-2),
                        formattedMinutes: "0".concat(i).slice(-2)
                    }
                },
                u = function(e) {
                    var r = e.endTime,
                        t = e.onTimesUp,
                        a = e.className,
                        u = e.itemClass,
                        p = e.showDays,
                        _ = void 0 !== p && p,
                        m = e.showColon,
                        v = void 0 === m || m,
                        b = e.showHours,
                        f = void 0 !== b && b,
                        h = (0, s.useRef)(),
                        x = _sliced_to_array((0, s.useState)(!1), 2),
                        y = x[0],
                        g = x[1],
                        j = (0, s.useMemo)(function() {
                            return (0, n.gregoryDate)()
                        }, []),
                        w = (0, s.useMemo)(function() {
                            return (0, n.gregoryDate)(r)
                        }, [r]),
                        N = (0, d.useIntersectionObserver)(),
                        k = N.isInViewport,
                        C = N.observe,
                        S = N.unobserve,
                        P = function(e) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                t = r.onTimesUp,
                                o = r.startOnMount,
                                i = void 0 === o || o,
                                a = r.shouldRender,
                                c = void 0 === a || a,
                                n = (0, s.useRef)(null),
                                d = (0, s.useRef)(e),
                                u = (0, s.useRef)(c),
                                p = _sliced_to_array((0, s.useState)(l(e)), 2),
                                _ = p[0],
                                m = p[1],
                                v = (0, s.useCallback)(function() {
                                    m(l(d.current))
                                }, []),
                                b = (0, s.useCallback)(function() {
                                    d.current > 0 ? (d.current -= 1, u.current && m(l(d.current)), n.current = setTimeout(b, 1e3)) : 0 === d.current && (null == t || t())
                                }, [t]),
                                f = (0, s.useCallback)(function() {
                                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
                                    clearTimeout(n.current), d.current = r, u.current && v(), n.current = setTimeout(b, 1e3)
                                }, [e, b, v]),
                                h = (0, s.useCallback)(function() {
                                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
                                    clearTimeout(n.current), d.current = r, u.current && v(), f(r)
                                }, [e, f, v]);
                            return (0, s.useEffect)(function() {
                                var e = u.current;
                                u.current = c, !e && c && v()
                            }, [c, v]), (0, s.useEffect)(function() {
                                return i && f(e),
                                    function() {
                                        return clearTimeout(n.current)
                                    }
                            }, []), {
                                start: f,
                                reset: h,
                                timeLeft: _
                            }
                        }(w.diff(j, "s"), {
                            onTimesUp: t,
                            shouldRender: k
                        }),
                        T = (0, s.useMemo)(function() {
                            return y ? _to_consumable_array(_ ? [P.timeLeft.formattedDays] : []).concat(_to_consumable_array(f ? [Number(P.timeLeft.formattedHours) + Number(_ ? 0 : 24 * P.timeLeft.formattedDays)] : []), [P.timeLeft.formattedMinutes, P.timeLeft.formattedSeconds]) : []
                        }, [y, _, f, P.timeLeft.formattedDays, P.timeLeft.formattedHours, P.timeLeft.formattedMinutes, P.timeLeft.formattedSeconds]);
                    return (0, s.useEffect)(function() {
                        g(!0);
                        var e = h.current;
                        return C(e),
                            function() {
                                S(e)
                            }
                    }, []), (0, o.jsx)("div", {
                        ref: h,
                        className: (0, i.Z)([a, c().countdown, _define_property({}, c().colon, v)]),
                        children: T.map(function(e, r) {
                            return (0, o.jsx)("div", {
                                className: (0, i.Z)([c().countdown__item, u]),
                                children: e
                            }, r)
                        })
                    })
                }
        },
        51091: function(e, r, t) {
            "use strict";
            var o = t(32930),
                i = t(40877),
                a = t(2389),
                c = t.n(a),
                n = t(72605),
                d = t.n(n),
                s = t(36350),
                l = t(5164),
                u = t(52545),
                p = t.n(u),
                _ = t(27434),
                m = t(45835),
                v = c()(function() {
                    return Promise.all([t.e(5382), t.e(2593)]).then(t.bind(t, 12593)).then(function(e) {
                        return e.BsTour
                    })
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [null]
                        }
                    },
                    ssr: !1
                });
            r.Z = function(e) {
                var r = e.product,
                    t = e.queryParams,
                    a = e.canShowMltToolTip,
                    c = (0, s.useEmitter)().emitEvent,
                    n = (0, m.b)().ua,
                    u = _sliced_to_array((0, _.useState)(!1), 2),
                    b = u[0],
                    f = u[1],
                    h = (0, _.useMemo)(function() {
                        var e = l.bsLocalStorage.getItem("mlt-badge-tour-shown");
                        return b && a && !e
                    }, [b, a]);
                return (0, _.useEffect)(function() {
                    var e = l.bsLocalStorage.getItem("mlt-badge-tour-shown");
                    a && !e && setTimeout(function() {
                        f(!0), setTimeout(function() {
                            f(!1), l.bsLocalStorage.setItem("mlt-badge-tour-shown", !0)
                        }, 1e4)
                    }, 2e3)
                }, [a]), (0, o.jsxs)("div", {
                    onClick: function(e) {
                        return e.stopPropagation()
                    },
                    children: [(0, o.jsx)("div", {
                        className: (0, i.Z)(d()["mlt-badge"]),
                        onClick: function(e) {
                            e.preventDefault(), e.stopPropagation(), c("show-more-like-this-modal", {
                                product: r,
                                params: {
                                    fromCard: !0
                                }
                            }), f(!1)
                        },
                        "data-from": t.from,
                        "data-component": "mlt-image",
                        children: h || !h && !n.isPc ? (0, o.jsx)("span", {
                            id: "similar-product",
                            className: "bi-similar-products"
                        }) : (0, o.jsx)(p(), {
                            size: "md",
                            label: "نمایش محصولات مشابه",
                            className: d()["mlt-badge__tooltip"],
                            children: (0, o.jsx)("span", {
                                className: "bi-similar-products"
                            })
                        })
                    }), h && (0, o.jsx)(v, {
                        run: h,
                        hideActions: !0,
                        disableOverlay: !0,
                        disableScrolling: !0,
                        tooltipClassName: d()["mlt-badge__tour-tooltip"],
                        steps: [{
                            placement: "bottom",
                            disableBeacon: !0,
                            target: "#similar-product",
                            title: "نمایش محصولات مشابه",
                            content: "با زدن روی این دکمه، محصولاتی که تصویرشون شبیه تصویر این محصوله نمایش داده میشه"
                        }]
                    })]
                })
            }
        },
        94020: function(e, r, t) {
            "use strict";
            var o = t(32930),
                i = t(40877),
                a = t(87540),
                c = t(96479),
                n = t.n(c),
                d = t(27434),
                s = t(76303),
                l = t.n(s),
                u = t(70437),
                p = t.n(u),
                _ = t(5164);
            r.Z = function(e) {
                var r = e.price,
                    t = e.inventory,
                    c = e.expireTime,
                    s = e.size,
                    u = void 0 === s ? "sm" : s,
                    m = e.primaryPrice,
                    v = void 0 === m ? 0 : m,
                    b = e.pricePerKilo,
                    f = void 0 === b ? 0 : b,
                    h = e.hasCountdown,
                    x = void 0 === h || h,
                    y = e.hideRealDiscountIcon,
                    g = void 0 !== y && y,
                    j = (0, _.getDiscountPercent)(v, r),
                    w = (0, _.numberSeparator)((0, _.rialToToman)(r)),
                    N = (0, _.numberSeparator)((0, _.rialToToman)(v)),
                    k = (0, _.numberSeparator)((0, _.rialToToman)(f)),
                    C = _sliced_to_array((0, d.useState)(x), 2),
                    S = C[0],
                    P = C[1],
                    T = _sliced_to_array((0, d.useState)(!1), 2),
                    I = T[0],
                    Z = T[1];
                return (0, d.useEffect)(function() {
                    Z(!0)
                }, []), (0, o.jsxs)("div", {
                    className: (0, i.Z)([n()["pc-real-discount"], n()["pc-real-discount--".concat(u)]]),
                    children: [(0, o.jsxs)("div", {
                        className: n()["pc-real-discount__prices"],
                        children: [!!v && v > r && (0, o.jsxs)("div", {
                            className: n()["pc-real-discount__primary-price-wrapper"],
                            children: [(0, o.jsx)("span", {
                                className: n()["pc-real-discount__primary-price"],
                                children: (0, o.jsx)("span", {
                                    className: n()["pc-real-discount__primary-price-value"],
                                    children: N
                                })
                            }), (0, o.jsxs)("span", {
                                className: n()["pc-real-discount__price-off"],
                                children: [(0, o.jsx)("small", {
                                    children: "%"
                                }), (0, o.jsx)("span", {
                                    children: j
                                }), !g && (0, o.jsx)(l(), {
                                    name: "bi-flame-fill",
                                    size: "16",
                                    color: "inherit"
                                })]
                            })]
                        }), (0, o.jsxs)("span", {
                            className: n()["pc-real-discount__price-value"],
                            children: [w, (0, o.jsx)(l(), {
                                name: "bi-toman",
                                size: "20",
                                className: n()["pc-real-discount__toman-icon"]
                            })]
                        }), !!f && (0, o.jsxs)("span", {
                            className: n()["pc-real-discount__price-per-kilo"],
                            children: [(0, o.jsx)("span", {
                                children: "کیلویی"
                            }), (0, o.jsx)("span", {
                                className: n()["pc-real-discount__price-per-kilo-value"],
                                children: k
                            }), (0, o.jsx)(l(), {
                                name: "bi-toman",
                                size: "20",
                                className: n()["pc-real-discount__toman-icon"]
                            })]
                        })]
                    }), (0, o.jsxs)("div", {
                        className: n()["pc-real-discount__inventory-wrapper"],
                        children: [I ? S && (0, o.jsx)(a.Z, {
                            endTime: c,
                            onTimesUp: function() {
                                P(!1)
                            },
                            showHours: !0,
                            itemClass: n()["pc-real-discount__countdown-item"]
                        }) : (0, o.jsxs)("div", {
                            className: n()["pc-real-discount__skeleton"],
                            children: [(0, o.jsx)(p(), {
                                width: 20,
                                height: 20
                            }), ":", (0, o.jsx)(p(), {
                                width: 20,
                                height: 20
                            })]
                        }), (0, o.jsx)("div", {
                            className: n()["pc-real-discount__inventory"],
                            children: 1 === t ? (0, o.jsx)("span", {
                                children: "1 عدد مونده"
                            }) : (0, o.jsxs)("span", {
                                children: [t, " تا مونده"]
                            })
                        })]
                    })]
                })
            }
        },
        57339: function(e, r, t) {
            "use strict";
            var o = t(32930),
                i = t(40877),
                a = t(2389),
                c = t.n(a),
                n = t(2134),
                d = t.n(n),
                s = t(2347),
                l = t(36350),
                u = t(51885),
                p = t.n(u),
                _ = t(88592),
                m = t(11219),
                v = t(21468),
                b = t(89504),
                f = t(33918),
                h = t(27434),
                x = t(51091),
                y = t(61262),
                g = t(45835),
                j = t(88107),
                w = t(93143),
                N = t(94020),
                k = t(87580),
                C = t(22480),
                S = t(94701),
                P = t(81433),
                T = t.n(P),
                I = t(65074),
                Z = t.n(I),
                O = t(94377),
                L = t.n(O),
                z = t(53278),
                A = t.n(z),
                D = t(56855),
                M = t.n(D),
                E = t(5164),
                U = c()(function() {
                    return t.e(4306).then(t.bind(t, 4306))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [4306]
                        }
                    },
                    ssr: !1
                }),
                R = {
                    className: "dataset-inp-ProductCard"
                };
            r.Z = function(e) {
                var r, t, a, c, n, u, P, I, O, z, D, B, F, K, q, G, H, V = e.footer,
                    J = e.product,
                    W = e.onClick,
                    Q = e.onGoPdp,
                    Y = e.customUrl,
                    X = e.className,
                    $ = e.onMouseUp,
                    ee = e.linkTarget,
                    re = e.size,
                    te = void 0 === re ? "md" : re,
                    oe = e.realDiscount,
                    ie = e.badgeIcon,
                    ae = void 0 === ie ? "" : ie,
                    ce = e.queryParams,
                    ne = void 0 === ce ? {} : ce,
                    de = e.gridMode,
                    se = void 0 !== de && de,
                    le = e.hasReels,
                    ue = void 0 !== le && le,
                    pe = e.showVendor,
                    _e = void 0 === pe || pe,
                    me = e.showLabel,
                    ve = void 0 !== me && me,
                    be = e.isLazyLoad,
                    fe = void 0 !== be && be,
                    he = e.isHorizontal,
                    xe = void 0 !== he && he,
                    ye = e.isReadyToSend,
                    ge = void 0 !== ye && ye,
                    je = e.isSpecialSale,
                    we = void 0 !== je && je,
                    Ne = e.additionalOptions,
                    ke = void 0 === Ne ? [] : Ne,
                    Ce = e.isVendorOnline,
                    Se = void 0 !== Ce && Ce,
                    Pe = e.squareAddToCart,
                    Te = void 0 === Pe || Pe,
                    Ie = e.conversationBtn,
                    Ze = void 0 !== Ie && Ie,
                    Oe = e.moreLikeThisBtn,
                    Le = void 0 !== Oe && Oe,
                    ze = e.onAfterAddToCart,
                    Ae = void 0 === ze ? null : ze,
                    De = e.containerClassName,
                    Me = void 0 === De ? "" : De,
                    Ee = e.showMoreOptionBtn,
                    Ue = void 0 === Ee || Ee,
                    Re = e.isSelectedVendor,
                    Be = void 0 !== Re && Re,
                    Fe = e.canShowMltToolTip,
                    Ke = void 0 !== Fe && Fe,
                    qe = e.isShowSuccessToast,
                    Ge = void 0 !== qe && qe,
                    He = e.badgeTitle,
                    Ve = void 0 === He ? "تخفیف کم‌یاب" : He,
                    Je = e.onClickFirstPriority,
                    We = void 0 !== Je && Je,
                    Qe = e.hideDiscountPercentSection,
                    Ye = void 0 !== Qe && Qe,
                    Xe = e.canShowGoodPriceExperiment,
                    $e = void 0 !== Xe && Xe,
                    er = e.wrapLargePriceInExceptionSize,
                    rr = void 0 !== er && er,
                    tr = (0, g.b)().ua.isPc,
                    or = "sm" === te && !tr && !xe,
                    ir = (0, l.useEmitter)().emitEvent,
                    ar = (0, j.Z)(),
                    cr = (0, g.b)().isWebview,
                    nr = (0, _.M_)(["isLoggedIn"]).isLoggedIn,
                    dr = d()().publicRuntimeConfig,
                    sr = (0, y.B)().dalan.openChatModal,
                    lr = (0, y.B)().authForm.toggleModal,
                    ur = 0 === J.stock && (!J.status || (null === (r = J.status) || void 0 === r ? void 0 : r.id) === f.PB.AVAILABLE),
                    pr = (0, h.useMemo)(function() {
                        return (0, k.L)(J.vendor.identifier, cr ? {
                            comesFrom: ne.from
                        } : {})
                    }, [cr, J.vendor.identifier, null == ne ? void 0 : ne.from]),
                    _r = "next" === J.type,
                    mr = "depricated" === J.type,
                    vr = (0, h.useMemo)(function() {
                        return _r || mr ? "" : Y || (0, C.f)({
                            id: J.id,
                            vendor: J.vendor
                        }, cr ? {
                            comesFrom: ne.from
                        } : {})
                    }, [Y, mr, _r, cr, J.id, J.vendor, ne.from]),
                    br = (0, E.rialToToman)(J.price),
                    fr = (0, E.rialToToman)(0 === J.primaryPrice ? J.price : J.primaryPrice),
                    hr = (0, E.getDiscountPercent)(fr, br),
                    xr = _sliced_to_array((0, h.useState)(!1), 2),
                    yr = xr[0],
                    gr = xr[1],
                    jr = oe && Object.keys(oe).length > 0,
                    wr = J.canAddToCart && J.stock > 0,
                    Nr = "string" == typeof(null === (t = J.vendor) || void 0 === t ? void 0 : t.city) ? null === (a = J.vendor) || void 0 === a ? void 0 : a.city : (null === (n = J.vendor) || void 0 === n || null === (c = n.city) || void 0 === c ? void 0 : c.title) || (null === (P = J.vendor) || void 0 === P || null === (u = P.owner) || void 0 === u ? void 0 : u.city),
                    kr = !!ve && (Be || J.isFreeShipping || 0 === J.shippingCost || J.shippingCost || J.stock || ge || J.mainAttribute || $e && J.isGoodPriced),
                    Cr = (0, h.useCallback)(function(e) {
                        if (e.preventDefault(), e.stopPropagation(), cr) {
                            var r, t = (0, b.Cw)();
                            null === (r = t.openShareBottomSheet) || void 0 === r || r.call(t, "product", JSON.stringify({
                                id: J.id,
                                title: J.name
                            }))
                        } else gr(!0)
                    }, [J.id, J.name, cr]),
                    Sr = (0, h.useCallback)(function() {
                        gr(!1)
                    }, []),
                    Pr = (0, h.useCallback)(function(e) {
                        var r, t, o, i, a, c, n, d, s, l, u, p, _, m, v;
                        (e.preventDefault(), e.stopPropagation(), nr) ? sr(null === (t = J.vendor) || void 0 === t || null === (r = t.owner) || void 0 === r ? void 0 : r.hashId, {
                            attachedProductId: J.id,
                            hasProductForWebview: {
                                id: J.id,
                                price: J.price,
                                rating: J.rating,
                                vendorId: null === (o = J.vendor) || void 0 === o ? void 0 : o.id,
                                inventory: J.inventory,
                                status: null === (i = J.status) || void 0 === i ? void 0 : i.value,
                                reviewCount: J.reviewCount,
                                primaryPrice: J.primaryPrice,
                                vendorTitle: null === (a = J.vendor) || void 0 === a ? void 0 : a.title,
                                canAddToCart: J.canAddToCart,
                                hasVariation: J.hasVariation,
                                title: J.title || J.name,
                                vendorCityName: null === (n = J.vendor) || void 0 === n || null === (c = n.city) || void 0 === c ? void 0 : c.name,
                                vendorIdentifier: null === (d = J.vendor) || void 0 === d ? void 0 : d.identifier,
                                userId: (null === (l = J.vendor) || void 0 === l || null === (s = l.user) || void 0 === s ? void 0 : s.id) || (null === (p = J.vendor) || void 0 === p || null === (u = p.owner) || void 0 === u ? void 0 : u.id),
                                picture: (null === (_ = J.photo) || void 0 === _ ? void 0 : _.md) || (null === (m = J.photo) || void 0 === m ? void 0 : m.original) || (null === (v = J.photo) || void 0 === v ? void 0 : v.url)
                            }
                        }): setTimeout(function() {
                            lr()
                        }, 0)
                    }, [J, nr]),
                    Tr = (0, h.useCallback)(function(e) {
                        e.preventDefault(), e.stopPropagation(), nr ? ir("open-wishlist-modal", {
                            product: J,
                            keepData: !0,
                            listIds: J.listingIds
                        }) : setTimeout(function() {
                            lr()
                        }, 0)
                    }, [nr, J]),
                    Ir = (0, h.useCallback)(function(e) {
                        var r, t, o;
                        J.id && (null === (r = J.vendor) || void 0 === r ? void 0 : r.identifier) && (0, v.T)("".concat(dr.gatewayUrl, "/web/v1/pdp/").concat(J.id, "?vendor_identifier=").concat(J.vendor.identifier));
                        var i = (null === (t = J.ads) || void 0 === t ? void 0 : t.offerId) || (null === (o = J.metadata) || void 0 === o ? void 0 : o.offerId);
                        i && E.bsLocalStorage.setItem("ads-".concat(J.id), i, 60), null == Q || Q(), null == W || W(e)
                    }, [W, Q, J.id, null === (I = J.ads) || void 0 === I ? void 0 : I.offerId, null === (O = J.metadata) || void 0 === O ? void 0 : O.offerId, J.vendor.identifier]),
                    Zr = !!(null === (z = J.vendor) || void 0 === z ? void 0 : z.score),
                    Or = (0, S.S)("#pc-".concat(J.id), !Zr, {}, !1).isShow,
                    Lr = (0, w.$)(null === (D = J.vendor) || void 0 === D ? void 0 : D.score, Or, Zr),
                    zr = Lr.isShow,
                    Ar = Lr.productCardLabel,
                    Dr = (0, h.useCallback)(function(e) {
                        e.preventDefault(), e.stopPropagation()
                    }, []);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(s.Z, {
                        href: vr,
                        onClick: Ir,
                        target: ee,
                        onClickFirstPriority: We,
                        className: (0, i.Z)([X, p()["product-card"], (H = {}, _define_property(H, p()["product-card--next"], _r), _define_property(H, p()["product-card--small"], or), _define_property(H, p()["product-card--grid-mode"], se), _define_property(H, p()["product-card--no-stock"], !J.stock), _define_property(H, p()["product-card--deprecated"], mr), _define_property(H, p()["product-card--real-discount"], jr), _define_property(H, p()["product-card--exception-size"], rr && !xe), H), p()["product-card--".concat(xe ? "horizontal" : "vertical")]]),
                        onMouseUp: $,
                        "aria-hidden": "true",
                        "data-from": ne.from,
                        "data-component": ne.component,
                        "data-meta": ne.page,
                        children: (0, o.jsxs)("div", {
                            id: "pc-".concat(J.id),
                            className: (0, i.Z)(p()["product-card__container"], Me),
                            children: [(0, o.jsxs)("div", {
                                className: (0, i.Z)(p()["product-card__container-inner"], "pc__container-inner"),
                                children: [(0, o.jsxs)("div", {
                                    className: (0, i.Z)(p()["product-card__image-box"], "pc__image-box"),
                                    children: [(0, o.jsxs)("div", {
                                        className: p()["product-card__badge-section"],
                                        children: [!!Ve && !ur && (we || jr) && (0, o.jsx)("div", {
                                            className: p()["product-card__badge"],
                                            children: (0, o.jsx)(M(), {
                                                color: "primary",
                                                variant: "fill",
                                                size: "md",
                                                label: Ve,
                                                icon: ae || ""
                                            })
                                        }), !!ur && (0, o.jsx)("div", {
                                            className: p()["product-card__badge"],
                                            children: (0, o.jsx)(M(), {
                                                color: "black",
                                                variant: "fill",
                                                size: "md",
                                                label: "تمام شد"
                                            })
                                        }), Ue && (0, o.jsx)("div", {
                                            onClick: Dr,
                                            children: (0, o.jsxs)(L(), {
                                                icon: "bi-more-v",
                                                position: "bottom-left",
                                                modalProps: R,
                                                popoverClassName: "dataset-inp-ProductCard",
                                                className: p()["product-card__dropdown"],
                                                children: [(0, o.jsxs)(L().Item, {
                                                    onClick: Tr,
                                                    children: [(0, o.jsx)("i", {
                                                        className: "bi-bookmark"
                                                    }), (0, o.jsx)("span", {
                                                        children: "افزودن به لیست"
                                                    })]
                                                }), (0, o.jsxs)(L().Item, {
                                                    onClick: Cr,
                                                    children: [(0, o.jsx)("i", {
                                                        className: "bi-share"
                                                    }), (0, o.jsx)("span", {
                                                        children: "اشتراک‌گذاری"
                                                    })]
                                                }), ke && ke.map(function(e, r) {
                                                    return (0, o.jsxs)(L().Item, {
                                                        onClick: e.onClick,
                                                        children: [(0, o.jsx)("i", {
                                                            className: e.icon
                                                        }), (0, o.jsx)("span", {
                                                            children: e.label
                                                        })]
                                                    }, r)
                                                })]
                                            })
                                        }), !!J.salampayTag && !ur && (0, o.jsx)("div", {
                                            className: (0, i.Z)(p()["product-card__image-box-salampay-badge"], p()["product-card__badge"]),
                                            title: "خرید قسطی",
                                            children: (0, o.jsx)(M(), {
                                                color: "black",
                                                variant: "text",
                                                size: "md",
                                                label: "خرید قسطی",
                                                icon: "bi-salampay"
                                            })
                                        }), !!(null === (B = J.ads) || void 0 === B ? void 0 : B.offerId) && !ur && !Ve && (0, o.jsx)("div", {
                                            className: p()["product-card__badge"],
                                            title: "آگهی",
                                            children: (0, o.jsx)(M(), {
                                                color: "black",
                                                variant: "text",
                                                size: "md",
                                                label: "آگهی",
                                                icon: "bi-megaphone-fill"
                                            })
                                        }), Le && (0, o.jsx)("div", {
                                            className: (0, i.Z)(p()["product-card__image-box-mlt-badge"]),
                                            children: (0, o.jsx)(x.Z, {
                                                product: J,
                                                queryParams: ne,
                                                canShowMltToolTip: Ke
                                            })
                                        }), ue && (0, o.jsx)("div", {
                                            className: (0, i.Z)(p()["product-card__image-box-video-badge"]),
                                            title: "دارای ویدئوی مرتبط",
                                            children: (0, o.jsx)("span", {
                                                className: "bi-vendor-video"
                                            })
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        title: J.name,
                                        className: p()["product-card__image-box-link"],
                                        children: [(0, o.jsx)(A(), {
                                            src: J.photo,
                                            alt: J.name,
                                            className: p()["product-card__image-box-image"],
                                            lazy: fe
                                        }), mr && (0, o.jsx)("div", {
                                            className: p()["product-card__image-box-deprecated"],
                                            children: (0, o.jsx)("img", {
                                                alt: "محصول منقضی شده",
                                                src: "https://statics.basalam.com/public-90/admin/n28lY/06-08/o5qf3dtHC9OGqRohjt7JxwRrZzpCb39ynLQN1bP6JA8VJ5tk5c.png",
                                                loading: fe ? "lazy" : void 0
                                            })
                                        })]
                                    })]
                                }), (0, o.jsxs)("div", {
                                    title: J.name,
                                    className: p()["product-card__content-box"],
                                    children: [(0, o.jsx)("h2", {
                                        className: (0, i.Z)(p()["product-card__title"], p()["product-card__title--multiple-line"]),
                                        children: J.name
                                    }), (0, o.jsxs)(T(), {
                                        display: "flex",
                                        flexDirection: "column",
                                        children: [!(!_e || !J.vendor) && (0, o.jsxs)("div", {
                                            className: (0, i.Z)(p()["product-card__vendor-details"], p()["product-card__content-box-vendor-details"]),
                                            children: [(0, o.jsx)("span", {
                                                className: (0, i.Z)("bi-vendor", p()["product-card__vendor-details-icon"], _define_property({}, p()["product-card__vendor-details-icon--online"], Se))
                                            }), Se && (0, o.jsx)("div", {
                                                className: (0, i.Z)(p()["product-card__popover"], p()["product-card__vendor-details-popover"]),
                                                children: (0, o.jsx)("span", {
                                                    className: p()["product-card__popover-content"],
                                                    children: "غرفه‌دار آنلاینه"
                                                })
                                            }), (0, o.jsxs)("span", {
                                                className: p()["product-card__vendor-details-city-name"],
                                                children: [!!Nr && (0, o.jsxs)(o.Fragment, {
                                                    children: [Nr, (0, o.jsx)("span", {
                                                        className: p()["product-card__vendor-details-divider"],
                                                        children: "|"
                                                    })]
                                                }), (0, o.jsx)("div", {
                                                    title: J.vendor.name,
                                                    className: p()["product-card__vendor-details-name"],
                                                    onClick: function(e) {
                                                        e.preventDefault(), e.stopPropagation(), ar.push(pr)
                                                    },
                                                    children: J.vendor.name
                                                })]
                                            })]
                                        }), (0, o.jsx)("div", {
                                            className: (0, i.Z)(p()["product-card__reviews"], p()["product-card__content-box-reviews"]),
                                            children: !!J.rating && (J.rating.average || J.rating.rating) && (0, o.jsxs)(o.Fragment, {
                                                children: [(0, o.jsx)("span", {
                                                    className: (0, i.Z)("bi-star-fill", p()["product-card__reviews-icon"])
                                                }), (0, o.jsx)("span", {
                                                    className: p()["product-card__reviews-star-count"],
                                                    children: J.rating.average || J.rating.rating
                                                }), (0, o.jsxs)("span", {
                                                    className: p()["product-card__reviews-reviews-count"],
                                                    children: ["(", J.rating.count || J.rating.signals, " تجربه)"]
                                                })]
                                            })
                                        })]
                                    }), !xe && (V || !jr && (0, o.jsxs)("div", {
                                        className: p()["product-card__footer-wrapper"],
                                        children: [(0, o.jsx)("div", {
                                            className: (0, i.Z)(p()["product-card__footer"], Ye && p()["product-card__footer--without-discount"]),
                                            children: (0, o.jsx)("div", {
                                                className: p()["product-card__price-box"],
                                                children: !!J.stock && (0, o.jsxs)(o.Fragment, {
                                                    children: [!Ye && (0, o.jsxs)("div", {
                                                        children: [!!fr && fr !== br && (0, o.jsx)("span", {
                                                            className: p()["product-card__price-box-primary-price"],
                                                            children: (0, E.numberSeparator)(fr || br)
                                                        }), !!fr && fr !== br && (0, o.jsxs)("span", {
                                                            className: p()["product-card__price-box-discount-percent"],
                                                            children: ["٪", hr]
                                                        })]
                                                    }), (0, o.jsxs)("span", {
                                                        className: p()["product-card__price-box-price"],
                                                        children: [(0, E.numberSeparator)(br), (0, o.jsx)("span", {
                                                            className: (0, i.Z)("bi-toman", p()["product-card__price-box-price-icon"])
                                                        })]
                                                    }), !!J.pricePerKilo && (0, o.jsxs)("span", {
                                                        className: p()["product-card__price-box-per-kilo"],
                                                        children: ["کیلویی ", (0, o.jsx)("b", {
                                                            children: (0, E.numberSeparator)(J.pricePerKilo)
                                                        }), (0, o.jsx)("i", {
                                                            className: "bi-toman"
                                                        })]
                                                    })]
                                                })
                                            })
                                        }), !J.stock && (0, o.jsx)("div", {
                                            className: (0, i.Z)(p()["product-card__price-box-no-stock"]),
                                            children: J.status && (null === (F = J.status) || void 0 === F ? void 0 : F.title) && (null === (K = J.status) || void 0 === K ? void 0 : K.id) !== f.PB.AVAILABLE ? J.status.title : "ناموجود"
                                        })]
                                    })), jr && (0, o.jsx)(N.Z, {
                                        price: J.price,
                                        inventory: oe.inventory,
                                        expireTime: oe.expireTime,
                                        primaryPrice: oe.primaryPrice,
                                        hideRealDiscountIcon: oe.hideRealDiscountIcon,
                                        hasCountdown: oe.hasCountdown,
                                        pricePerKilo: J.pricePerKilo,
                                        size: or ? "sm" : "lg"
                                    }), kr && (0, o.jsxs)("div", {
                                        className: p()["product-card__labels"],
                                        children: [!!Be && (0, o.jsx)(M(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: xe ? "sm" : "md",
                                            label: "غرفه برتر",
                                            icon: (0, i.Z)(["bi-award", p()["product-card__labels-vendor-score"]])
                                        }), (J.isFreeShipping || 0 === J.shippingCost) && J.stock ? (0, o.jsx)(M(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: xe ? "sm" : "md",
                                            label: "ارسال رایگان",
                                            icon: "bi-free-delivery"
                                        }) : J.shippingCost && J.stock ? (0, o.jsx)(M(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: xe ? "sm" : "md",
                                            label: "ارسال: ".concat((0, E.rialToToman)(J.shippingCost, {
                                                currency: !0,
                                                separator: !0
                                            }), " تومان")
                                        }) : null, ge && (0, o.jsx)(M(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: xe ? "sm" : "md",
                                            label: "آماده ارسال"
                                        }), J.mainAttribute && (0, o.jsx)(M(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: xe ? "sm" : "md",
                                            label: (0, E.numberSeparator)(J.mainAttribute)
                                        }), $e && J.isGoodPriced && (0, o.jsx)(M(), {
                                            disabled: !J.stock,
                                            color: "primary",
                                            variant: "fill",
                                            size: xe ? "sm" : "md",
                                            label: "خوش قیمت"
                                        }), zr && (0, o.jsx)(M(), {
                                            color: "black",
                                            icon: "bi-privacy",
                                            label: Ar,
                                            disabled: !J.stock,
                                            size: xe ? "sm" : "md",
                                            className: p()["product-card__guarantee-badge"]
                                        })]
                                    }), wr && !xe ? (0, o.jsx)(T(), {
                                        display: "flex",
                                        alignItems: "center",
                                        children: (0, o.jsxs)(m.Z, {
                                            size: or ? "xxs" : "xs",
                                            product: J,
                                            productId: J.id,
                                            className: p()["product-card__action-button"],
                                            onAfterAddToCart: Ae,
                                            buttonProps: {
                                                variant: "text"
                                            },
                                            isShowSuccessToast: Ge,
                                            children: [(0, o.jsx)("i", {
                                                className: (0, i.Z)([p()["product-card__action-button-icon"], "bi-plus"])
                                            }), (0, o.jsx)("div", {
                                                children: "افزودن به سبد"
                                            })]
                                        })
                                    }) : Ze && (null === (G = J.vendor) || void 0 === G || null === (q = G.owner) || void 0 === q ? void 0 : q.hashId) ? (0, o.jsx)(Z(), {
                                        className: p()["product-card__action-button"],
                                        icon: "bi-chats",
                                        size: "xs",
                                        variant: "outline",
                                        square: Te,
                                        onClick: Pr
                                    }) : null]
                                })]
                            }), xe && (0, o.jsx)("div", {
                                className: (0, i.Z)([p()["product-card__price-box"], _define_property({}, p()["product-card__price-box--with-discount"], !Ye)]),
                                children: !!J.stock && (0, o.jsxs)(o.Fragment, {
                                    children: [!Ye && (0, o.jsxs)("div", {
                                        children: [!!fr && fr !== br && (0, o.jsx)("span", {
                                            className: p()["product-card__price-box-primary-price"],
                                            children: (0, E.numberSeparator)(fr || br)
                                        }), !!fr && fr !== br && (0, o.jsxs)("span", {
                                            className: p()["product-card__price-box-discount-percent"],
                                            children: ["٪", hr]
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        className: p()["product-card__price-box-price-container"],
                                        children: [wr && Te && (0, o.jsx)("div", {
                                            className: p()["product-card__price-box-price-container-atc"],
                                            children: (0, o.jsx)(m.Z, {
                                                square: Te,
                                                size: "xxs",
                                                product: J,
                                                productId: J.id,
                                                className: p()["product-card__action-button"],
                                                onAfterAddToCart: Ae,
                                                buttonProps: {
                                                    variant: "outline"
                                                },
                                                isShowSuccessToast: Ge
                                            })
                                        }), !!J.pricePerKilo && (0, o.jsxs)("span", {
                                            className: p()["product-card__price-box-per-kilo"],
                                            children: ["کیلویی ", (0, o.jsx)("b", {
                                                children: (0, E.numberSeparator)(J.pricePerKilo)
                                            }), (0, o.jsx)("i", {
                                                className: "bi-toman"
                                            })]
                                        }), (0, o.jsxs)("span", {
                                            className: p()["product-card__price-box-price"],
                                            children: [(0, E.numberSeparator)(br), (0, o.jsx)("span", {
                                                className: (0, i.Z)("bi-toman", p()["product-card__price-box-price-icon"])
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    }), yr && (0, o.jsx)(U, {
                        show: !0,
                        type: "PRODUCT",
                        entity: J,
                        onClose: Sr
                    })]
                })
            }
        },
        21468: function(e, r, t) {
            "use strict";

            function o(e) {
                "serviceWorker" in navigator && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
                    type: "PREFETCH",
                    url: e
                })
            }
            t.d(r, {
                T: function() {
                    return o
                }
            })
        },
        48531: function(e) {
            e.exports = {
                countdown: "NtsFIb",
                countdown__item: "DoVINr",
                colon: "Cw_11G"
            }
        },
        72605: function(e) {
            e.exports = {
                "mlt-badge": "RarWV_",
                "mlt-badge__tooltip": "LWQ3le",
                "mlt-badge__tour-tooltip": "zlssnJ"
            }
        },
        51885: function(e) {
            e.exports = {
                "product-card": "_0UvDlh",
                "product-card__container": "_9zKUpb",
                "product-card__container-inner": "_5P_Q3P",
                "product-card__title": "_5PwYIn",
                "product-card__title--multiple-line": "Sh2LgL",
                "product-card__badge": "UCPZ_d",
                "product-card__footer-wrapper": "aD4d0J",
                "product-card__footer": "rAaJdc",
                "product-card__labels": "IIJGWE",
                "product-card__labels-vendor-score": "jIOVqS",
                "product-card__image-box": "CUUAWz",
                "product-card__image-box-link": "LZfbBd",
                "product-card__image-box-image": "ScJLCt",
                "product-card__image-box-salampay-badge": "raQZhY",
                "product-card__image-box-mlt-badge": "_7pwR_a",
                "product-card__image-box-video-badge": "H4EIKX",
                "product-card__image-box-deprecated": "enfH0W",
                "product-card__dropdown": "wQ9P5e",
                "product-card__content-box": "YlniTl",
                "product-card__content-box-vendor-details": "_7iauFD",
                "product-card__content-box-reviews": "oDxJae",
                "product-card__vendor-details": "iURU_H",
                "product-card__vendor-details-popover": "ISNF_q",
                "product-card__vendor-details-icon": "gGrO0t",
                "product-card__vendor-details-icon--online": "_3SJ53o",
                "product-card__vendor-details-city-name": "S5l8cw",
                "product-card__vendor-details-name": "WylIhj",
                "product-card__vendor-details-divider": "bRIR33",
                "product-card__price-box": "Lfd8zD",
                "product-card__price-box-discount-percent": "ZatMtZ",
                "product-card__price-box-primary-price": "_4eA3pD",
                "product-card__price-box-price": "TQCqjN",
                "product-card__price-box-price-icon": "jSaTcO",
                "product-card__price-box-per-kilo": "_1ZAZkp",
                "product-card__price-box-no-stock": "qf_4yr",
                "product-card__price-box-price-atc-container": "RnGSqC",
                "product-card--no-stock": "A_z8T1",
                "product-card__image-box-ads-badge": "NG0KXZ",
                "product-card__badge--primary": "a_hM5_",
                "product-card--vertical": "_1n_6H7",
                "product-card__action-button": "iAA2Bs",
                "product-card__action-button-icon": "_wgpyU",
                "product-card--small": "ntq6nW",
                "product-card--horizontal": "lCyXJD",
                "product-card__price-box--with-discount": "_0y_0t",
                "product-card__price-box-price-container": "ZyTbY3",
                "product-card__price-box-price-container-atc": "__auqQ",
                "product-card--exception-size": "kY_6Ba",
                "product-card__price-box__price": "_5E3ZYL",
                "product-card__price-box__price-icon": "_lyQpX",
                "product-card--grid-mode": "qHeE6j",
                "product-card__badge-section": "Ho2TKP",
                "product-card__guarantee-badge": "dnNTvk",
                "product-card__reviews": "ZXksq4",
                "product-card__reviews-icon": "GM5_Tf",
                "product-card__reviews-star-count": "nt57NU",
                "product-card__reviews-reviews-count": "iCUNdI",
                "product-card__popover": "_0ctQZi",
                "product-card--next": "S_YXHK",
                "product-card--deprecated": "XN91r4"
            }
        },
        96479: function(e) {
            e.exports = {
                "pc-real-discount": "LxtGdH",
                "pc-real-discount__prices": "rNk_Q_",
                "pc-real-discount__primary-price-wrapper": "KpS2LO",
                "pc-real-discount__price-off": "Sos_4r",
                "pc-real-discount__price-value": "dwe8x1",
                "pc-real-discount__primary-price": "vQVo2p",
                "pc-real-discount__primary-price-value": "_8uLBB0",
                "pc-real-discount__price-per-kilo": "uKPL6o",
                "pc-real-discount__price-per-kilo-value": "_4ZIVP9",
                "pc-real-discount__inventory-wrapper": "__KmhZ",
                "pc-real-discount__inventory": "f3UBJl",
                "pc-real-discount__skeleton": "UZyFlP",
                "pc-real-discount__countdown-item": "dmsVnr",
                "pc-real-discount__toman-icon": "n0KaxI",
                "pc-real-discount--lg": "RYR3zo"
            }
        }
    }
]);