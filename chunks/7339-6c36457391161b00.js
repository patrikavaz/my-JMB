function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var o = 0, t = new Array(r); o < r; o++) t[o] = e[o];
    return t
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function _define_property(e, r, o) {
    return r in e ? Object.defineProperty(e, r, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = o, e
}

function _iterable_to_array(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _iterable_to_array_limit(e, r) {
    var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != o) {
        var t, i, a = [],
            n = !0,
            c = !1;
        try {
            for (o = o.call(e); !(n = (t = o.next()).done) && (a.push(t.value), !r || a.length !== r); n = !0);
        } catch (e) {
            c = !0, i = e
        } finally {
            try {
                n || null == o.return || o.return()
            } finally {
                if (c) throw i
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
        var o = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable
        }))), t.forEach(function(r) {
            _define_property(e, r, o[r])
        })
    }
    return e
}

function ownKeys(e, r) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        r && (t = t.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), o.push.apply(o, t)
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

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
}

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(o) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _array_like_to_array(e, r) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7339], {
        93143: function(e, r, o) {
            "use strict";
            o.d(r, {
                $: function() {
                    return s
                }
            });
            var t = o(5164),
                i = o(88592),
                a = o(33918),
                n = o(27434),
                c = o(60802),
                d = "test_satisfaction_guarantee",
                s = function(e) {
                    var r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        s = (0, i.M_)(["currentUser", "isLoadingCurrentUser"]),
                        l = s.currentUser,
                        u = s.isLoadingCurrentUser,
                        p = _sliced_to_array((0, n.useState)(!1), 2),
                        _ = p[0],
                        m = p[1],
                        v = (0, c.l)(),
                        b = v.runGBTest,
                        f = v.evaluateGBTest;
                    (0, n.useEffect)(function() {
                        o && m(!0)
                    }, []);
                    var h = (0, n.useMemo)(function() {
                            var e;
                            return _ ? null === (e = b(d, !1)) || void 0 === e ? void 0 : e.value : null
                        }, [b, _]),
                        x = e === a.ek.TOP_VENDOR;
                    return (0, n.useEffect)(function() {
                        var e;
                        x && !u && r && _ && f(d, {
                            userCityId: null == l || null === (e = l.city) || void 0 === e ? void 0 : e.id
                        })
                    }, [x, r, u, _]), (0, n.useMemo)(function() {
                        return _object_spread_props(_object_spread({}, (0, t.camelize)(h)), {
                            isShow: (null == h ? void 0 : h.enabled) && x
                        })
                    }, [h, x])
                }
        },
        87540: function(e, r, o) {
            "use strict";
            o.d(r, {
                Z: function() {
                    return m
                }
            });
            var t = o(32930),
                i = o(40877),
                a = o(50874),
                n = o.n(a),
                c = o(48531),
                d = o.n(c),
                s = o(5164),
                l = o(36350),
                u = o(27434),
                p = function(e) {
                    var r = e % 60,
                        o = Math.floor(e / 86400),
                        t = Math.floor(e % 86400 / 3600),
                        i = Math.floor(e % 3600 / 60);
                    return {
                        days: o,
                        total: e,
                        hours: t,
                        seconds: r,
                        minutes: i,
                        formattedDays: "0".concat(o).slice(-2),
                        formattedHours: "0".concat(t).slice(-2),
                        formattedSeconds: "0".concat(r).slice(-2),
                        formattedMinutes: "0".concat(i).slice(-2)
                    }
                };

            function _(e) {
                var r = e.endTime,
                    o = e.onTimesUp,
                    a = e.className,
                    n = e.itemClass,
                    c = e.showDays,
                    _ = void 0 !== c && c,
                    m = e.showColon,
                    v = void 0 === m || m,
                    b = e.showHours,
                    f = void 0 !== b && b,
                    h = (0, u.useRef)(),
                    x = _sliced_to_array((0, u.useState)(!1), 2),
                    y = x[0],
                    g = x[1],
                    j = (0, u.useMemo)(function() {
                        return (0, s.gregoryDate)()
                    }, []),
                    w = (0, u.useMemo)(function() {
                        return (0, s.gregoryDate)(r)
                    }, [r]),
                    N = (0, l.useIntersectionObserver)(),
                    k = N.isInViewport,
                    C = N.observe,
                    T = N.unobserve,
                    P = function(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = r.onTimesUp,
                            t = r.startOnMount,
                            i = void 0 === t || t,
                            a = r.shouldRender,
                            n = void 0 === a || a,
                            c = (0, u.useRef)(null),
                            d = (0, u.useRef)(e),
                            s = (0, u.useRef)(n),
                            l = _sliced_to_array((0, u.useState)(p(e)), 2),
                            _ = l[0],
                            m = l[1],
                            v = (0, u.useCallback)(function() {
                                m(p(d.current))
                            }, []),
                            b = (0, u.useCallback)(function() {
                                d.current > 0 ? (d.current -= 1, s.current && m(p(d.current)), c.current = setTimeout(b, 1e3)) : 0 === d.current && (null == o || o())
                            }, [o]),
                            f = (0, u.useCallback)(function() {
                                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
                                clearTimeout(c.current), d.current = r, s.current && v(), c.current = setTimeout(b, 1e3)
                            }, [e, b, v]),
                            h = (0, u.useCallback)(function() {
                                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
                                clearTimeout(c.current), d.current = r, s.current && v(), f(r)
                            }, [e, f, v]);
                        return (0, u.useEffect)(function() {
                            var e = s.current;
                            s.current = n, !e && n && v()
                        }, [n, v]), (0, u.useEffect)(function() {
                            return i && f(e),
                                function() {
                                    return clearTimeout(c.current)
                                }
                        }, []), {
                            start: f,
                            reset: h,
                            timeLeft: _
                        }
                    }(w.diff(j, "s"), {
                        onTimesUp: o,
                        shouldRender: k
                    }),
                    S = (0, u.useMemo)(function() {
                        return y ? _to_consumable_array(_ ? [P.timeLeft.formattedDays] : []).concat(_to_consumable_array(f ? [Number(P.timeLeft.formattedHours) + Number(_ ? 0 : 24 * P.timeLeft.formattedDays)] : []), [P.timeLeft.formattedMinutes, P.timeLeft.formattedSeconds]) : []
                    }, [y, _, f, P.timeLeft.formattedDays, P.timeLeft.formattedHours, P.timeLeft.formattedMinutes, P.timeLeft.formattedSeconds]);
                return (0, u.useEffect)(function() {
                    g(!0);
                    var e = h.current;
                    return C(e),
                        function() {
                            T(e)
                        }
                }, []), (0, t.jsx)("div", {
                    ref: h,
                    className: (0, i.Z)([a, d().countdown, _define_property({}, d().colon, v)]),
                    children: S.map(function(e, r) {
                        return (0, t.jsx)("div", {
                            className: (0, i.Z)([d().countdown__item, n]),
                            children: e
                        }, r)
                    })
                })
            }
            _.propTypes = {
                showDays: n().bool,
                showColon: n().bool,
                onTimesUp: n().func,
                showHours: n().bool,
                className: n().string,
                endTime: n().string.isRequired
            };
            var m = _
        },
        51091: function(e, r, o) {
            "use strict";
            var t = o(32930),
                i = o(40877),
                a = o(50874),
                n = o.n(a),
                c = o(2389),
                d = o.n(c),
                s = o(72605),
                l = o.n(s),
                u = o(36350),
                p = o(5164),
                _ = o(52545),
                m = o.n(_),
                v = o(27434),
                b = o(45835),
                f = d()(function() {
                    return Promise.all([o.e(5382), o.e(2593)]).then(o.bind(o, 12593)).then(function(e) {
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

            function h(e) {
                var r = e.product,
                    o = e.queryParams,
                    a = e.canShowMltToolTip,
                    n = (0, u.useEmitter)().emitEvent,
                    c = (0, b.b)().ua,
                    d = _sliced_to_array((0, v.useState)(!1), 2),
                    s = d[0],
                    _ = d[1],
                    h = (0, v.useMemo)(function() {
                        var e = p.bsLocalStorage.getItem("mlt-badge-tour-shown");
                        return s && a && !e
                    }, [s, a]);
                return (0, v.useEffect)(function() {
                    var e = p.bsLocalStorage.getItem("mlt-badge-tour-shown");
                    a && !e && setTimeout(function() {
                        _(!0), setTimeout(function() {
                            _(!1), p.bsLocalStorage.setItem("mlt-badge-tour-shown", !0)
                        }, 1e4)
                    }, 2e3)
                }, [a]), (0, t.jsxs)("div", {
                    onClick: function(e) {
                        return e.stopPropagation()
                    },
                    children: [(0, t.jsx)("div", {
                        className: (0, i.Z)(l()["mlt-badge"]),
                        onClick: function(e) {
                            e.preventDefault(), e.stopPropagation(), n("show-more-like-this-modal", {
                                product: r,
                                params: {
                                    fromCard: !0
                                }
                            }), _(!1)
                        },
                        "data-from": o.from,
                        "data-component": "mlt-image",
                        children: h || !h && !c.isPc ? (0, t.jsx)("span", {
                            id: "similar-product",
                            className: "bi-similar-products"
                        }) : (0, t.jsx)(m(), {
                            size: "md",
                            label: "نمایش محصولات مشابه",
                            className: l()["mlt-badge__tooltip"],
                            children: (0, t.jsx)("span", {
                                className: "bi-similar-products"
                            })
                        })
                    }), h && (0, t.jsx)(f, {
                        run: h,
                        hideActions: !0,
                        disableOverlay: !0,
                        disableScrolling: !0,
                        tooltipClassName: l()["mlt-badge__tour-tooltip"],
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
            h.propTypes = {
                queryParams: n().object,
                canShowMltToolTip: n().bool,
                product: n().object.isRequired
            }, r.Z = h
        },
        94020: function(e, r, o) {
            "use strict";
            var t = o(32930),
                i = o(40877),
                a = o(87540),
                n = o(96479),
                c = o.n(n),
                d = o(27434),
                s = o(76303),
                l = o.n(s),
                u = o(70437),
                p = o.n(u),
                _ = o(5164);
            r.Z = function(e) {
                var r = e.price,
                    o = e.inventory,
                    n = e.expireTime,
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
                    T = C[0],
                    P = C[1],
                    S = _sliced_to_array((0, d.useState)(!1), 2),
                    I = S[0],
                    Z = S[1];
                return (0, d.useEffect)(function() {
                    Z(!0)
                }, []), (0, t.jsxs)("div", {
                    className: (0, i.Z)([c()["pc-real-discount"], c()["pc-real-discount--".concat(u)]]),
                    children: [(0, t.jsxs)("div", {
                        className: c()["pc-real-discount__prices"],
                        children: [!!v && v > r && (0, t.jsxs)("div", {
                            className: c()["pc-real-discount__primary-price-wrapper"],
                            children: [(0, t.jsx)("span", {
                                className: c()["pc-real-discount__primary-price"],
                                children: (0, t.jsx)("span", {
                                    className: c()["pc-real-discount__primary-price-value"],
                                    children: N
                                })
                            }), (0, t.jsxs)("span", {
                                className: c()["pc-real-discount__price-off"],
                                children: [(0, t.jsx)("small", {
                                    children: "%"
                                }), (0, t.jsx)("span", {
                                    children: j
                                }), !g && (0, t.jsx)(l(), {
                                    name: "bi-flame-fill",
                                    size: "16",
                                    color: "inherit"
                                })]
                            })]
                        }), (0, t.jsxs)("span", {
                            className: c()["pc-real-discount__price-value"],
                            children: [w, (0, t.jsx)(l(), {
                                name: "bi-toman",
                                size: "20",
                                className: c()["pc-real-discount__toman-icon"]
                            })]
                        }), !!f && (0, t.jsxs)("span", {
                            className: c()["pc-real-discount__price-per-kilo"],
                            children: [(0, t.jsx)("span", {
                                children: "کیلویی"
                            }), (0, t.jsx)("span", {
                                className: c()["pc-real-discount__price-per-kilo-value"],
                                children: k
                            }), (0, t.jsx)(l(), {
                                name: "bi-toman",
                                size: "20",
                                className: c()["pc-real-discount__toman-icon"]
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: c()["pc-real-discount__inventory-wrapper"],
                        children: [I ? T && (0, t.jsx)(a.Z, {
                            endTime: n,
                            onTimesUp: function() {
                                P(!1)
                            },
                            showHours: !0,
                            itemClass: c()["pc-real-discount__countdown-item"]
                        }) : (0, t.jsxs)("div", {
                            className: c()["pc-real-discount__skeleton"],
                            children: [(0, t.jsx)(p(), {
                                width: 20,
                                height: 20
                            }), ":", (0, t.jsx)(p(), {
                                width: 20,
                                height: 20
                            })]
                        }), (0, t.jsx)("div", {
                            className: c()["pc-real-discount__inventory"],
                            children: 1 === o ? (0, t.jsx)("span", {
                                children: "1 عدد مونده"
                            }) : (0, t.jsxs)("span", {
                                children: [o, " تا مونده"]
                            })
                        })]
                    })]
                })
            }
        },
        57339: function(e, r, o) {
            "use strict";
            var t = o(32930),
                i = o(40877),
                a = o(50874),
                n = o.n(a),
                c = o(2389),
                d = o.n(c),
                s = o(2134),
                l = o.n(s),
                u = o(2347),
                p = o(36350),
                _ = o(51885),
                m = o.n(_),
                v = o(88592),
                b = o(11219),
                f = o(21468),
                h = o(89504),
                x = o(33918),
                y = o(27434),
                g = o(51091),
                j = o(61262),
                w = o(45835),
                N = o(88107),
                k = o(93143),
                C = o(94020),
                T = o(87580),
                P = o(22480),
                S = o(94701),
                I = o(81433),
                Z = o.n(I),
                O = o(65074),
                L = o.n(O),
                z = o(94377),
                A = o.n(z),
                D = o(53278),
                M = o.n(D),
                R = o(56855),
                U = o.n(R),
                E = o(5164),
                q = d()(function() {
                    return o.e(4306).then(o.bind(o, 4306))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [4306]
                        }
                    },
                    ssr: !1
                }),
                B = {
                    className: "dataset-inp-ProductCard"
                };

            function V(e) {
                var r, o, a, n, c, d, s, _, I, O, z, D, R, V, K, H, F, G = e.footer,
                    J = e.product,
                    W = e.onClick,
                    Q = e.onGoPdp,
                    Y = e.customUrl,
                    X = e.className,
                    $ = e.onMouseUp,
                    ee = e.size,
                    re = void 0 === ee ? "md" : ee,
                    oe = e.realDiscount,
                    te = e.badgeIcon,
                    ie = void 0 === te ? "" : te,
                    ae = e.queryParams,
                    ne = void 0 === ae ? {} : ae,
                    ce = e.gridMode,
                    de = void 0 !== ce && ce,
                    se = e.hasReels,
                    le = void 0 !== se && se,
                    ue = e.showVendor,
                    pe = void 0 === ue || ue,
                    _e = e.showLabel,
                    me = void 0 !== _e && _e,
                    ve = e.isLazyLoad,
                    be = void 0 !== ve && ve,
                    fe = e.isHorizontal,
                    he = void 0 !== fe && fe,
                    xe = e.isReadyToSend,
                    ye = void 0 !== xe && xe,
                    ge = e.isSpecialSale,
                    je = void 0 !== ge && ge,
                    we = e.additionalOptions,
                    Ne = void 0 === we ? [] : we,
                    ke = e.isVendorOnline,
                    Ce = void 0 !== ke && ke,
                    Te = e.squareAddToCart,
                    Pe = void 0 === Te || Te,
                    Se = e.conversationBtn,
                    Ie = void 0 !== Se && Se,
                    Ze = e.moreLikeThisBtn,
                    Oe = void 0 !== Ze && Ze,
                    Le = e.onAfterAddToCart,
                    ze = void 0 === Le ? null : Le,
                    Ae = e.containerClassName,
                    De = void 0 === Ae ? "" : Ae,
                    Me = e.showMoreOptionBtn,
                    Re = void 0 === Me || Me,
                    Ue = e.isSelectedVendor,
                    Ee = void 0 !== Ue && Ue,
                    qe = e.canShowMltToolTip,
                    Be = void 0 !== qe && qe,
                    Ve = e.badgeTitle,
                    Ke = void 0 === Ve ? "تخفیف کم‌یاب" : Ve,
                    He = e.hideDiscountPercentSection,
                    Fe = void 0 !== He && He,
                    Ge = e.canShowGoodPriceExperiment,
                    Je = void 0 !== Ge && Ge,
                    We = e.wrapLargePriceInExceptionSize,
                    Qe = void 0 !== We && We,
                    Ye = (0, w.b)().ua.isPc,
                    Xe = "sm" === re && !Ye && !he,
                    $e = (0, p.useEmitter)().emitEvent,
                    er = (0, N.Z)(),
                    rr = (0, w.b)().isWebview,
                    or = (0, v.M_)(["isLoggedIn"]).isLoggedIn,
                    tr = l()().publicRuntimeConfig,
                    ir = (0, j.B)().dalan.openChatModal,
                    ar = (0, j.B)().authForm.toggleModal,
                    nr = 0 === J.stock && (!J.status || (null === (r = J.status) || void 0 === r ? void 0 : r.id) === x.PB.AVAILABLE),
                    cr = (0, y.useMemo)(function() {
                        return (0, T.L)(J.vendor.identifier, rr ? {
                            comesFrom: ne.from
                        } : {})
                    }, [rr, J.vendor.identifier, null == ne ? void 0 : ne.from]),
                    dr = "next" === J.type,
                    sr = "depricated" === J.type,
                    lr = (0, y.useMemo)(function() {
                        return dr || sr ? "" : Y || (0, P.f)({
                            id: J.id,
                            vendor: J.vendor
                        }, rr ? {
                            comesFrom: ne.from
                        } : {})
                    }, [Y, sr, dr, rr, J.id, J.vendor, ne.from]),
                    ur = (0, E.rialToToman)(J.price),
                    pr = (0, E.rialToToman)(0 === J.primaryPrice ? J.price : J.primaryPrice),
                    _r = (0, E.getDiscountPercent)(pr, ur),
                    mr = _sliced_to_array((0, y.useState)(!1), 2),
                    vr = mr[0],
                    br = mr[1],
                    fr = oe && Object.keys(oe).length > 0,
                    hr = J.canAddToCart && J.stock > 0,
                    xr = "string" == typeof(null === (o = J.vendor) || void 0 === o ? void 0 : o.city) ? null === (a = J.vendor) || void 0 === a ? void 0 : a.city : (null === (c = J.vendor) || void 0 === c || null === (n = c.city) || void 0 === n ? void 0 : n.title) || (null === (s = J.vendor) || void 0 === s || null === (d = s.owner) || void 0 === d ? void 0 : d.city),
                    yr = !!me && (Ee || J.isFreeShipping || 0 === J.shippingCost || J.shippingCost || J.stock || ye || J.mainAttribute || Je && J.isGoodPriced),
                    gr = (0, y.useCallback)(function(e) {
                        if (e.preventDefault(), e.stopPropagation(), rr) {
                            var r, o = (0, h.Cw)();
                            null === (r = o.openShareBottomSheet) || void 0 === r || r.call(o, "product", JSON.stringify({
                                id: J.id,
                                title: J.name
                            }))
                        } else br(!0)
                    }, [J.id, J.name, rr]),
                    jr = (0, y.useCallback)(function() {
                        br(!1)
                    }, []),
                    wr = (0, y.useCallback)(function(e) {
                        var r, o, t, i, a, n, c, d, s, l, u, p, _, m, v;
                        (e.preventDefault(), e.stopPropagation(), or) ? ir(null === (o = J.vendor) || void 0 === o || null === (r = o.owner) || void 0 === r ? void 0 : r.hashId, {
                            attachedProductId: J.id,
                            hasProductForWebview: {
                                id: J.id,
                                price: J.price,
                                rating: J.rating,
                                vendorId: null === (t = J.vendor) || void 0 === t ? void 0 : t.id,
                                inventory: J.inventory,
                                status: null === (i = J.status) || void 0 === i ? void 0 : i.value,
                                reviewCount: J.reviewCount,
                                primaryPrice: J.primaryPrice,
                                vendorTitle: null === (a = J.vendor) || void 0 === a ? void 0 : a.title,
                                canAddToCart: J.canAddToCart,
                                hasVariation: J.hasVariation,
                                title: J.title || J.name,
                                vendorCityName: null === (c = J.vendor) || void 0 === c || null === (n = c.city) || void 0 === n ? void 0 : n.name,
                                vendorIdentifier: null === (d = J.vendor) || void 0 === d ? void 0 : d.identifier,
                                userId: (null === (l = J.vendor) || void 0 === l || null === (s = l.user) || void 0 === s ? void 0 : s.id) || (null === (p = J.vendor) || void 0 === p || null === (u = p.owner) || void 0 === u ? void 0 : u.id),
                                picture: (null === (_ = J.photo) || void 0 === _ ? void 0 : _.md) || (null === (m = J.photo) || void 0 === m ? void 0 : m.original) || (null === (v = J.photo) || void 0 === v ? void 0 : v.url)
                            }
                        }): setTimeout(function() {
                            ar()
                        }, 0)
                    }, [J, or]),
                    Nr = (0, y.useCallback)(function(e) {
                        e.preventDefault(), e.stopPropagation(), or ? $e("open-wishlist-modal", {
                            product: J,
                            keepData: !0,
                            listIds: J.listingIds
                        }) : setTimeout(function() {
                            ar()
                        }, 0)
                    }, [or, J]),
                    kr = (0, y.useCallback)(function(e) {
                        var r, o, t;
                        J.id && (null === (r = J.vendor) || void 0 === r ? void 0 : r.identifier) && (0, f.T)("".concat(tr.gatewayUrl, "/web/v1/pdp/").concat(J.id, "?vendor_identifier=").concat(J.vendor.identifier));
                        var i = (null === (o = J.ads) || void 0 === o ? void 0 : o.offerId) || (null === (t = J.metadata) || void 0 === t ? void 0 : t.offerId);
                        i && E.bsLocalStorage.setItem("ads-".concat(J.id), i, 60), null == Q || Q(), null == W || W(e)
                    }, [W, Q, J.id, null === (_ = J.ads) || void 0 === _ ? void 0 : _.offerId, null === (I = J.metadata) || void 0 === I ? void 0 : I.offerId, J.vendor.identifier]),
                    Cr = !!(null === (O = J.vendor) || void 0 === O ? void 0 : O.score),
                    Tr = (0, S.S)("#pc-".concat(J.id), !Cr, {}, !1).isShow,
                    Pr = (0, k.$)(null === (z = J.vendor) || void 0 === z ? void 0 : z.score, Tr, Cr),
                    Sr = Pr.isShow,
                    Ir = Pr.productCardLabel,
                    Zr = (0, y.useCallback)(function(e) {
                        e.preventDefault(), e.stopPropagation()
                    }, []);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(u.Z, {
                        href: lr,
                        onClick: kr,
                        className: (0, i.Z)([X, m()["product-card"], (F = {}, _define_property(F, m()["product-card--next"], dr), _define_property(F, m()["product-card--small"], Xe), _define_property(F, m()["product-card--grid-mode"], de), _define_property(F, m()["product-card--no-stock"], !J.stock), _define_property(F, m()["product-card--deprecated"], sr), _define_property(F, m()["product-card--real-discount"], fr), _define_property(F, m()["product-card--exception-size"], Qe && !he), F), m()["product-card--".concat(he ? "horizontal" : "vertical")]]),
                        onMouseUp: $,
                        "aria-hidden": "true",
                        "data-from": ne.from,
                        "data-component": ne.component,
                        "data-meta": ne.page,
                        children: (0, t.jsxs)("div", {
                            id: "pc-".concat(J.id),
                            className: (0, i.Z)(m()["product-card__container"], De),
                            children: [(0, t.jsxs)("div", {
                                className: (0, i.Z)(m()["product-card__container-inner"], "pc__container-inner"),
                                children: [(0, t.jsxs)("div", {
                                    className: (0, i.Z)(m()["product-card__image-box"], "pc__image-box"),
                                    children: [(0, t.jsxs)("div", {
                                        className: m()["product-card__badge-section"],
                                        children: [!!Ke && !nr && (je || fr) && (0, t.jsx)("div", {
                                            className: m()["product-card__badge"],
                                            children: (0, t.jsx)(U(), {
                                                color: "primary",
                                                variant: "fill",
                                                size: "md",
                                                label: Ke,
                                                icon: ie || ""
                                            })
                                        }), !!nr && (0, t.jsx)("div", {
                                            className: m()["product-card__badge"],
                                            children: (0, t.jsx)(U(), {
                                                color: "black",
                                                variant: "fill",
                                                size: "md",
                                                label: "تمام شد"
                                            })
                                        }), Re && (0, t.jsx)("div", {
                                            onClick: Zr,
                                            children: (0, t.jsxs)(A(), {
                                                icon: "bi-more-v",
                                                position: "bottom-left",
                                                modalProps: B,
                                                popoverClassName: "dataset-inp-ProductCard",
                                                className: m()["product-card__dropdown"],
                                                children: [(0, t.jsxs)(A().Item, {
                                                    onClick: Nr,
                                                    children: [(0, t.jsx)("i", {
                                                        className: "bi-bookmark"
                                                    }), (0, t.jsx)("span", {
                                                        children: "افزودن به لیست"
                                                    })]
                                                }), (0, t.jsxs)(A().Item, {
                                                    onClick: gr,
                                                    children: [(0, t.jsx)("i", {
                                                        className: "bi-share"
                                                    }), (0, t.jsx)("span", {
                                                        children: "اشتراک‌گذاری"
                                                    })]
                                                }), Ne && Ne.map(function(e, r) {
                                                    return (0, t.jsxs)(A().Item, {
                                                        onClick: e.onClick,
                                                        children: [(0, t.jsx)("i", {
                                                            className: e.icon
                                                        }), (0, t.jsx)("span", {
                                                            children: e.label
                                                        })]
                                                    }, r)
                                                })]
                                            })
                                        }), !!J.salampayTag && !nr && (0, t.jsx)("div", {
                                            className: (0, i.Z)(m()["product-card__image-box-salampay-badge"], m()["product-card__badge"]),
                                            title: "خرید قسطی",
                                            children: (0, t.jsx)(U(), {
                                                color: "black",
                                                variant: "text",
                                                size: "md",
                                                label: "خرید قسطی",
                                                icon: "bi-salampay"
                                            })
                                        }), !!(null === (D = J.ads) || void 0 === D ? void 0 : D.offerId) && !nr && !Ke && (0, t.jsx)("div", {
                                            className: m()["product-card__badge"],
                                            title: "آگهی",
                                            children: (0, t.jsx)(U(), {
                                                color: "black",
                                                variant: "text",
                                                size: "md",
                                                label: "آگهی",
                                                icon: "bi-megaphone-fill"
                                            })
                                        }), Oe && (0, t.jsx)("div", {
                                            className: (0, i.Z)(m()["product-card__image-box-mlt-badge"]),
                                            children: (0, t.jsx)(g.Z, {
                                                product: J,
                                                queryParams: ne,
                                                canShowMltToolTip: Be
                                            })
                                        }), le && (0, t.jsx)("div", {
                                            className: (0, i.Z)(m()["product-card__image-box-video-badge"]),
                                            title: "دارای ویدئوی مرتبط",
                                            children: (0, t.jsx)("span", {
                                                className: "bi-vendor-video"
                                            })
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        title: J.name,
                                        className: m()["product-card__image-box-link"],
                                        children: [(0, t.jsx)(M(), {
                                            src: J.photo,
                                            alt: J.name,
                                            className: m()["product-card__image-box-image"],
                                            lazy: be
                                        }), sr && (0, t.jsx)("div", {
                                            className: m()["product-card__image-box-deprecated"],
                                            children: (0, t.jsx)("img", {
                                                alt: "محصول منقضی شده",
                                                src: "https://statics.basalam.com/public-90/admin/n28lY/06-08/o5qf3dtHC9OGqRohjt7JxwRrZzpCb39ynLQN1bP6JA8VJ5tk5c.png",
                                                loading: be ? "lazy" : void 0
                                            })
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    title: J.name,
                                    className: m()["product-card__content-box"],
                                    children: [(0, t.jsx)("h2", {
                                        className: (0, i.Z)(m()["product-card__title"], m()["product-card__title--multiple-line"]),
                                        children: J.name
                                    }), (0, t.jsxs)(Z(), {
                                        display: "flex",
                                        flexDirection: "column",
                                        children: [!(!pe || !J.vendor) && (0, t.jsxs)("div", {
                                            className: (0, i.Z)(m()["product-card__vendor-details"], m()["product-card__content-box-vendor-details"]),
                                            children: [(0, t.jsx)("span", {
                                                className: (0, i.Z)("bi-vendor", m()["product-card__vendor-details-icon"], _define_property({}, m()["product-card__vendor-details-icon--online"], Ce))
                                            }), Ce && (0, t.jsx)("div", {
                                                className: (0, i.Z)(m()["product-card__popover"], m()["product-card__vendor-details-popover"]),
                                                children: (0, t.jsx)("span", {
                                                    className: m()["product-card__popover-content"],
                                                    children: "غرفه‌دار آنلاینه"
                                                })
                                            }), (0, t.jsxs)("span", {
                                                className: m()["product-card__vendor-details-city-name"],
                                                children: [!!xr && (0, t.jsxs)(t.Fragment, {
                                                    children: [xr, (0, t.jsx)("span", {
                                                        className: m()["product-card__vendor-details-divider"],
                                                        children: "|"
                                                    })]
                                                }), (0, t.jsx)("div", {
                                                    title: J.vendor.name,
                                                    className: m()["product-card__vendor-details-name"],
                                                    onClick: function(e) {
                                                        e.preventDefault(), e.stopPropagation(), er.push(cr)
                                                    },
                                                    children: J.vendor.name
                                                })]
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: (0, i.Z)(m()["product-card__reviews"], m()["product-card__content-box-reviews"]),
                                            children: !!J.rating && (J.rating.average || J.rating.rating) && (0, t.jsxs)(t.Fragment, {
                                                children: [(0, t.jsx)("span", {
                                                    className: (0, i.Z)("bi-star-fill", m()["product-card__reviews-icon"])
                                                }), (0, t.jsx)("span", {
                                                    className: m()["product-card__reviews-star-count"],
                                                    children: J.rating.average || J.rating.rating
                                                }), (0, t.jsxs)("span", {
                                                    className: m()["product-card__reviews-reviews-count"],
                                                    children: ["(", J.rating.count || J.rating.signals, " تجربه)"]
                                                })]
                                            })
                                        })]
                                    }), !he && (G || !fr && (0, t.jsxs)("div", {
                                        className: m()["product-card__footer-wrapper"],
                                        children: [(0, t.jsx)("div", {
                                            className: (0, i.Z)(m()["product-card__footer"], Fe && m()["product-card__footer--without-discount"]),
                                            children: (0, t.jsx)("div", {
                                                className: m()["product-card__price-box"],
                                                children: !!J.stock && (0, t.jsxs)(t.Fragment, {
                                                    children: [!Fe && (0, t.jsxs)("div", {
                                                        children: [!!pr && pr !== ur && (0, t.jsx)("span", {
                                                            className: m()["product-card__price-box-primary-price"],
                                                            children: (0, E.numberSeparator)(pr || ur)
                                                        }), !!pr && pr !== ur && (0, t.jsxs)("span", {
                                                            className: m()["product-card__price-box-discount-percent"],
                                                            children: ["٪", _r]
                                                        })]
                                                    }), (0, t.jsxs)("span", {
                                                        className: m()["product-card__price-box-price"],
                                                        children: [(0, E.numberSeparator)(ur), (0, t.jsx)("span", {
                                                            className: (0, i.Z)("bi-toman", m()["product-card__price-box-price-icon"])
                                                        })]
                                                    }), !!J.pricePerKilo && (0, t.jsxs)("span", {
                                                        className: m()["product-card__price-box-per-kilo"],
                                                        children: ["کیلویی ", (0, t.jsx)("b", {
                                                            children: (0, E.numberSeparator)(J.pricePerKilo)
                                                        }), (0, t.jsx)("i", {
                                                            className: "bi-toman"
                                                        })]
                                                    })]
                                                })
                                            })
                                        }), !J.stock && (0, t.jsx)("div", {
                                            className: (0, i.Z)(m()["product-card__price-box-no-stock"]),
                                            children: J.status && (null === (R = J.status) || void 0 === R ? void 0 : R.title) && (null === (V = J.status) || void 0 === V ? void 0 : V.id) !== x.PB.AVAILABLE ? J.status.title : "ناموجود"
                                        })]
                                    })), fr && (0, t.jsx)(C.Z, {
                                        price: J.price,
                                        inventory: oe.inventory,
                                        expireTime: oe.expireTime,
                                        primaryPrice: oe.primaryPrice,
                                        hideRealDiscountIcon: oe.hideRealDiscountIcon,
                                        hasCountdown: oe.hasCountdown,
                                        pricePerKilo: J.pricePerKilo,
                                        size: Xe ? "sm" : "lg"
                                    }), yr && (0, t.jsxs)("div", {
                                        className: m()["product-card__labels"],
                                        children: [!!Ee && (0, t.jsx)(U(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: he ? "sm" : "md",
                                            label: "غرفه برتر",
                                            icon: (0, i.Z)(["bi-award", m()["product-card__labels-vendor-score"]])
                                        }), (J.isFreeShipping || 0 === J.shippingCost) && J.stock ? (0, t.jsx)(U(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: he ? "sm" : "md",
                                            label: "ارسال رایگان",
                                            icon: "bi-free-delivery"
                                        }) : J.shippingCost && J.stock ? (0, t.jsx)(U(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: he ? "sm" : "md",
                                            label: "ارسال: ".concat((0, E.rialToToman)(J.shippingCost, {
                                                currency: !0,
                                                separator: !0
                                            }), " تومان")
                                        }) : null, ye && (0, t.jsx)(U(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: he ? "sm" : "md",
                                            label: "آماده ارسال"
                                        }), J.mainAttribute && (0, t.jsx)(U(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: he ? "sm" : "md",
                                            label: (0, E.numberSeparator)(J.mainAttribute)
                                        }), Je && J.isGoodPriced && (0, t.jsx)(U(), {
                                            disabled: !J.stock,
                                            color: "primary",
                                            variant: "fill",
                                            size: he ? "sm" : "md",
                                            label: "خوش قیمت"
                                        }), Sr && (0, t.jsx)(U(), {
                                            color: "black",
                                            icon: "bi-privacy",
                                            label: Ir,
                                            disabled: !J.stock,
                                            size: he ? "sm" : "md",
                                            className: m()["product-card__guarantee-badge"]
                                        })]
                                    }), hr && !he ? (0, t.jsx)(Z(), {
                                        display: "flex",
                                        alignItems: "center",
                                        children: (0, t.jsxs)(b.Z, {
                                            size: Xe ? "xxs" : "xs",
                                            product: J,
                                            productId: J.id,
                                            className: m()["product-card__action-button"],
                                            onAfterAddToCart: ze,
                                            buttonProps: {
                                                variant: "text"
                                            },
                                            children: [(0, t.jsx)("i", {
                                                className: (0, i.Z)([m()["product-card__action-button-icon"], "bi-plus"])
                                            }), (0, t.jsx)("div", {
                                                children: "افزودن به سبد"
                                            })]
                                        })
                                    }) : Ie && (null === (H = J.vendor) || void 0 === H || null === (K = H.owner) || void 0 === K ? void 0 : K.hashId) ? (0, t.jsx)(L(), {
                                        className: m()["product-card__action-button"],
                                        icon: "bi-chats",
                                        size: "xs",
                                        variant: "outline",
                                        square: Pe,
                                        onClick: wr
                                    }) : null]
                                })]
                            }), he && (0, t.jsx)("div", {
                                className: (0, i.Z)([m()["product-card__price-box"], _define_property({}, m()["product-card__price-box--with-discount"], !Fe)]),
                                children: !!J.stock && (0, t.jsxs)(t.Fragment, {
                                    children: [!Fe && (0, t.jsxs)("div", {
                                        children: [!!pr && pr !== ur && (0, t.jsx)("span", {
                                            className: m()["product-card__price-box-primary-price"],
                                            children: (0, E.numberSeparator)(pr || ur)
                                        }), !!pr && pr !== ur && (0, t.jsxs)("span", {
                                            className: m()["product-card__price-box-discount-percent"],
                                            children: ["٪", _r]
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: m()["product-card__price-box-price-container"],
                                        children: [hr && Pe && (0, t.jsx)("div", {
                                            className: m()["product-card__price-box-price-container-atc"],
                                            children: (0, t.jsx)(b.Z, {
                                                square: Pe,
                                                size: "xxs",
                                                product: J,
                                                productId: J.id,
                                                className: m()["product-card__action-button"],
                                                onAfterAddToCart: ze,
                                                buttonProps: {
                                                    variant: "outline"
                                                }
                                            })
                                        }), !!J.pricePerKilo && (0, t.jsxs)("span", {
                                            className: m()["product-card__price-box-per-kilo"],
                                            children: ["کیلویی ", (0, t.jsx)("b", {
                                                children: (0, E.numberSeparator)(J.pricePerKilo)
                                            }), (0, t.jsx)("i", {
                                                className: "bi-toman"
                                            })]
                                        }), (0, t.jsxs)("span", {
                                            className: m()["product-card__price-box-price"],
                                            children: [(0, E.numberSeparator)(ur), (0, t.jsx)("span", {
                                                className: (0, i.Z)("bi-toman", m()["product-card__price-box-price-icon"])
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    }), vr && (0, t.jsx)(q, {
                        show: !0,
                        type: "PRODUCT",
                        entity: J,
                        onClose: jr
                    })]
                })
            }
            V.propTypes = {
                footer: n().node,
                onClick: n().func,
                onMouseUp: n().func,
                showLabel: n().bool,
                isLazyLoad: n().bool,
                showVendor: n().bool,
                customUrl: n().string,
                className: n().string,
                isHorizontal: n().bool,
                isReadyToSend: n().bool,
                isSpecialSale: n().bool,
                queryParams: n().object,
                isVendorOnline: n().bool,
                conversationBtn: n().bool,
                moreLikeThisBtn: n().bool,
                onAfterAddToCart: n().func,
                isSelectedVendor: n().bool,
                showMoreOptionBtn: n().bool,
                size: n().oneOf(["sm", "md"]),
                hideDiscountPercentSection: n().bool,
                additionalOptions: n().arrayOf(n().shape({
                    icon: n().string.isRequired,
                    label: n().string.isRequired,
                    onClick: n().func.isRequired
                })),
                product: n().shape({
                    id: n().number,
                    name: n().string,
                    photo: n().string,
                    stock: n().number,
                    price: n().number,
                    hasVideo: n().bool,
                    metadata: n().object,
                    canAddToCart: n().bool,
                    pricePerKilo: n().number,
                    realDiscount: n().object,
                    shippingCost: n().number,
                    primaryPrice: n().number,
                    isFreeShipping: n().bool,
                    mainAttribute: n().string,
                    ads: n().shape({
                        offerId: n().number
                    }),
                    status: n().shape({
                        id: n().number,
                        title: n().string
                    }),
                    rating: n().shape({
                        count: n().number,
                        average: n().number,
                        signals: n().number
                    }),
                    vendor: n().shape({
                        name: n().string,
                        identifier: n().string,
                        owner: n().shape({
                            city: n().string,
                            hashId: n().string
                        })
                    })
                })
            }, r.Z = V
        },
        21468: function(e, r, o) {
            "use strict";

            function t(e) {
                "serviceWorker" in navigator && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
                    type: "PREFETCH",
                    url: e
                })
            }
            o.d(r, {
                T: function() {
                    return t
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