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
                    return d
                }
            });
            var t = o(5164),
                i = o(88592),
                a = o(33918),
                n = o(27434),
                c = o(60802),
                s = "test_satisfaction_guarantee",
                d = function(e) {
                    var r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        d = (0, i.M_)(["currentUser", "isLoadingCurrentUser"]),
                        l = d.currentUser,
                        u = d.isLoadingCurrentUser,
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
                            return _ ? null === (e = b(s, !1)) || void 0 === e ? void 0 : e.value : null
                        }, [b, _]),
                        x = e === a.ek.TOP_VENDOR;
                    return (0, n.useEffect)(function() {
                        var e;
                        x && !u && r && _ && f(s, {
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
                s = o.n(c),
                d = o(5164),
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
                        return (0, d.gregoryDate)()
                    }, []),
                    w = (0, u.useMemo)(function() {
                        return (0, d.gregoryDate)(r)
                    }, [r]),
                    N = (0, l.useIntersectionObserver)(),
                    k = N.isInViewport,
                    T = N.observe,
                    S = N.unobserve,
                    C = function(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = r.onTimesUp,
                            t = r.startOnMount,
                            i = void 0 === t || t,
                            a = r.shouldRender,
                            n = void 0 === a || a,
                            c = (0, u.useRef)(null),
                            s = (0, u.useRef)(e),
                            d = (0, u.useRef)(n),
                            l = _sliced_to_array((0, u.useState)(p(e)), 2),
                            _ = l[0],
                            m = l[1],
                            v = (0, u.useCallback)(function() {
                                m(p(s.current))
                            }, []),
                            b = (0, u.useCallback)(function() {
                                s.current > 0 ? (s.current -= 1, d.current && m(p(s.current)), c.current = setTimeout(b, 1e3)) : 0 === s.current && (null == o || o())
                            }, [o]),
                            f = (0, u.useCallback)(function() {
                                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
                                clearTimeout(c.current), s.current = r, d.current && v(), c.current = setTimeout(b, 1e3)
                            }, [e, b, v]),
                            h = (0, u.useCallback)(function() {
                                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
                                clearTimeout(c.current), s.current = r, d.current && v(), f(r)
                            }, [e, f, v]);
                        return (0, u.useEffect)(function() {
                            var e = d.current;
                            d.current = n, !e && n && v()
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
                    P = (0, u.useMemo)(function() {
                        return y ? _to_consumable_array(_ ? [C.timeLeft.formattedDays] : []).concat(_to_consumable_array(f ? [Number(C.timeLeft.formattedHours) + Number(_ ? 0 : 24 * C.timeLeft.formattedDays)] : []), [C.timeLeft.formattedMinutes, C.timeLeft.formattedSeconds]) : []
                    }, [y, _, f, C.timeLeft.formattedDays, C.timeLeft.formattedHours, C.timeLeft.formattedMinutes, C.timeLeft.formattedSeconds]);
                return (0, u.useEffect)(function() {
                    g(!0);
                    var e = h.current;
                    return T(e),
                        function() {
                            S(e)
                        }
                }, []), (0, t.jsx)("div", {
                    ref: h,
                    className: (0, i.Z)([a, s().countdown, _define_property({}, s().colon, v)]),
                    children: P.map(function(e, r) {
                        return (0, t.jsx)("div", {
                            className: (0, i.Z)([s().countdown__item, n]),
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
                s = o.n(c),
                d = o(72605),
                l = o.n(d),
                u = o(36350),
                p = o(5164),
                _ = o(52545),
                m = o.n(_),
                v = o(27434),
                b = o(45835),
                f = s()(function() {
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
                    s = _sliced_to_array((0, v.useState)(!1), 2),
                    d = s[0],
                    _ = s[1],
                    h = (0, v.useMemo)(function() {
                        var e = p.bsLocalStorage.getItem("mlt-badge-tour-shown");
                        return d && a && !e
                    }, [d, a]);
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
                s = o(27434),
                d = o(76303),
                l = o.n(d),
                u = o(70437),
                p = o.n(u),
                _ = o(5164);
            r.Z = function(e) {
                var r = e.price,
                    o = e.inventory,
                    n = e.expireTime,
                    d = e.size,
                    u = void 0 === d ? "sm" : d,
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
                    T = _sliced_to_array((0, s.useState)(x), 2),
                    S = T[0],
                    C = T[1],
                    P = _sliced_to_array((0, s.useState)(!1), 2),
                    I = P[0],
                    Z = P[1];
                return (0, s.useEffect)(function() {
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
                        children: [I ? S && (0, t.jsx)(a.Z, {
                            endTime: n,
                            onTimesUp: function() {
                                C(!1)
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
                s = o.n(c),
                d = o(2134),
                l = o.n(d),
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
                T = o(94020),
                S = o(87580),
                C = o(22480),
                P = o(94701),
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
                q = s()(function() {
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

            function F(e) {
                var r, o, a, n, c, s, d, _, I, O, z, D, R, F, V, K, H, G = e.footer,
                    J = e.product,
                    W = e.onClick,
                    Q = e.onGoPdp,
                    Y = e.customUrl,
                    X = e.className,
                    $ = e.onMouseUp,
                    ee = e.linkTarget,
                    re = e.size,
                    oe = void 0 === re ? "md" : re,
                    te = e.realDiscount,
                    ie = e.badgeIcon,
                    ae = void 0 === ie ? "" : ie,
                    ne = e.queryParams,
                    ce = void 0 === ne ? {} : ne,
                    se = e.gridMode,
                    de = void 0 !== se && se,
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
                    Te = e.isVendorOnline,
                    Se = void 0 !== Te && Te,
                    Ce = e.squareAddToCart,
                    Pe = void 0 === Ce || Ce,
                    Ie = e.conversationBtn,
                    Ze = void 0 !== Ie && Ie,
                    Oe = e.moreLikeThisBtn,
                    Le = void 0 !== Oe && Oe,
                    ze = e.onAfterAddToCart,
                    Ae = void 0 === ze ? null : ze,
                    De = e.containerClassName,
                    Me = void 0 === De ? "" : De,
                    Re = e.showMoreOptionBtn,
                    Ue = void 0 === Re || Re,
                    Ee = e.isSelectedVendor,
                    qe = void 0 !== Ee && Ee,
                    Be = e.canShowMltToolTip,
                    Fe = void 0 !== Be && Be,
                    Ve = e.isShowSuccessToast,
                    Ke = void 0 !== Ve && Ve,
                    He = e.badgeTitle,
                    Ge = void 0 === He ? "تخفیف کم‌یاب" : He,
                    Je = e.onClickFirstPriority,
                    We = void 0 !== Je && Je,
                    Qe = e.hideDiscountPercentSection,
                    Ye = void 0 !== Qe && Qe,
                    Xe = e.canShowGoodPriceExperiment,
                    $e = void 0 !== Xe && Xe,
                    er = e.wrapLargePriceInExceptionSize,
                    rr = void 0 !== er && er,
                    or = (0, w.b)().ua.isPc,
                    tr = "sm" === oe && !or && !xe,
                    ir = (0, p.useEmitter)().emitEvent,
                    ar = (0, N.Z)(),
                    nr = (0, w.b)().isWebview,
                    cr = (0, v.M_)(["isLoggedIn"]).isLoggedIn,
                    sr = l()().publicRuntimeConfig,
                    dr = (0, j.B)().dalan.openChatModal,
                    lr = (0, j.B)().authForm.toggleModal,
                    ur = 0 === J.stock && (!J.status || (null === (r = J.status) || void 0 === r ? void 0 : r.id) === x.PB.AVAILABLE),
                    pr = (0, y.useMemo)(function() {
                        return (0, S.L)(J.vendor.identifier, nr ? {
                            comesFrom: ce.from
                        } : {})
                    }, [nr, J.vendor.identifier, null == ce ? void 0 : ce.from]),
                    _r = "next" === J.type,
                    mr = "depricated" === J.type,
                    vr = (0, y.useMemo)(function() {
                        return _r || mr ? "" : Y || (0, C.f)({
                            id: J.id,
                            vendor: J.vendor
                        }, nr ? {
                            comesFrom: ce.from
                        } : {})
                    }, [Y, mr, _r, nr, J.id, J.vendor, ce.from]),
                    br = (0, E.rialToToman)(J.price),
                    fr = (0, E.rialToToman)(0 === J.primaryPrice ? J.price : J.primaryPrice),
                    hr = (0, E.getDiscountPercent)(fr, br),
                    xr = _sliced_to_array((0, y.useState)(!1), 2),
                    yr = xr[0],
                    gr = xr[1],
                    jr = te && Object.keys(te).length > 0,
                    wr = J.canAddToCart && J.stock > 0,
                    Nr = "string" == typeof(null === (o = J.vendor) || void 0 === o ? void 0 : o.city) ? null === (a = J.vendor) || void 0 === a ? void 0 : a.city : (null === (c = J.vendor) || void 0 === c || null === (n = c.city) || void 0 === n ? void 0 : n.title) || (null === (d = J.vendor) || void 0 === d || null === (s = d.owner) || void 0 === s ? void 0 : s.city),
                    kr = !!ve && (qe || J.isFreeShipping || 0 === J.shippingCost || J.shippingCost || J.stock || ge || J.mainAttribute || $e && J.isGoodPriced),
                    Tr = (0, y.useCallback)(function(e) {
                        if (e.preventDefault(), e.stopPropagation(), nr) {
                            var r, o = (0, h.Cw)();
                            null === (r = o.openShareBottomSheet) || void 0 === r || r.call(o, "product", JSON.stringify({
                                id: J.id,
                                title: J.name
                            }))
                        } else gr(!0)
                    }, [J.id, J.name, nr]),
                    Sr = (0, y.useCallback)(function() {
                        gr(!1)
                    }, []),
                    Cr = (0, y.useCallback)(function(e) {
                        var r, o, t, i, a, n, c, s, d, l, u, p, _, m, v;
                        (e.preventDefault(), e.stopPropagation(), cr) ? dr(null === (o = J.vendor) || void 0 === o || null === (r = o.owner) || void 0 === r ? void 0 : r.hashId, {
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
                                vendorIdentifier: null === (s = J.vendor) || void 0 === s ? void 0 : s.identifier,
                                userId: (null === (l = J.vendor) || void 0 === l || null === (d = l.user) || void 0 === d ? void 0 : d.id) || (null === (p = J.vendor) || void 0 === p || null === (u = p.owner) || void 0 === u ? void 0 : u.id),
                                picture: (null === (_ = J.photo) || void 0 === _ ? void 0 : _.md) || (null === (m = J.photo) || void 0 === m ? void 0 : m.original) || (null === (v = J.photo) || void 0 === v ? void 0 : v.url)
                            }
                        }): setTimeout(function() {
                            lr()
                        }, 0)
                    }, [J, cr]),
                    Pr = (0, y.useCallback)(function(e) {
                        e.preventDefault(), e.stopPropagation(), cr ? ir("open-wishlist-modal", {
                            product: J,
                            keepData: !0,
                            listIds: J.listingIds
                        }) : setTimeout(function() {
                            lr()
                        }, 0)
                    }, [cr, J]),
                    Ir = (0, y.useCallback)(function(e) {
                        var r, o, t;
                        J.id && (null === (r = J.vendor) || void 0 === r ? void 0 : r.identifier) && (0, f.T)("".concat(sr.gatewayUrl, "/web/v1/pdp/").concat(J.id, "?vendor_identifier=").concat(J.vendor.identifier));
                        var i = (null === (o = J.ads) || void 0 === o ? void 0 : o.offerId) || (null === (t = J.metadata) || void 0 === t ? void 0 : t.offerId);
                        i && E.bsLocalStorage.setItem("ads-".concat(J.id), i, 60), null == Q || Q(), null == W || W(e)
                    }, [W, Q, J.id, null === (_ = J.ads) || void 0 === _ ? void 0 : _.offerId, null === (I = J.metadata) || void 0 === I ? void 0 : I.offerId, J.vendor.identifier]),
                    Zr = !!(null === (O = J.vendor) || void 0 === O ? void 0 : O.score),
                    Or = (0, P.S)("#pc-".concat(J.id), !Zr, {}, !1).isShow,
                    Lr = (0, k.$)(null === (z = J.vendor) || void 0 === z ? void 0 : z.score, Or, Zr),
                    zr = Lr.isShow,
                    Ar = Lr.productCardLabel,
                    Dr = (0, y.useCallback)(function(e) {
                        e.preventDefault(), e.stopPropagation()
                    }, []);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(u.Z, {
                        href: vr,
                        onClick: Ir,
                        target: ee,
                        onClickFirstPriority: We,
                        className: (0, i.Z)([X, m()["product-card"], (H = {}, _define_property(H, m()["product-card--next"], _r), _define_property(H, m()["product-card--small"], tr), _define_property(H, m()["product-card--grid-mode"], de), _define_property(H, m()["product-card--no-stock"], !J.stock), _define_property(H, m()["product-card--deprecated"], mr), _define_property(H, m()["product-card--real-discount"], jr), _define_property(H, m()["product-card--exception-size"], rr && !xe), H), m()["product-card--".concat(xe ? "horizontal" : "vertical")]]),
                        onMouseUp: $,
                        "aria-hidden": "true",
                        "data-from": ce.from,
                        "data-component": ce.component,
                        "data-meta": ce.page,
                        children: (0, t.jsxs)("div", {
                            id: "pc-".concat(J.id),
                            className: (0, i.Z)(m()["product-card__container"], Me),
                            children: [(0, t.jsxs)("div", {
                                className: (0, i.Z)(m()["product-card__container-inner"], "pc__container-inner"),
                                children: [(0, t.jsxs)("div", {
                                    className: (0, i.Z)(m()["product-card__image-box"], "pc__image-box"),
                                    children: [(0, t.jsxs)("div", {
                                        className: m()["product-card__badge-section"],
                                        children: [!!Ge && !ur && (we || jr) && (0, t.jsx)("div", {
                                            className: m()["product-card__badge"],
                                            children: (0, t.jsx)(U(), {
                                                color: "primary",
                                                variant: "fill",
                                                size: "md",
                                                label: Ge,
                                                icon: ae || ""
                                            })
                                        }), !!ur && (0, t.jsx)("div", {
                                            className: m()["product-card__badge"],
                                            children: (0, t.jsx)(U(), {
                                                color: "black",
                                                variant: "fill",
                                                size: "md",
                                                label: "تمام شد"
                                            })
                                        }), Ue && (0, t.jsx)("div", {
                                            onClick: Dr,
                                            children: (0, t.jsxs)(A(), {
                                                icon: "bi-more-v",
                                                position: "bottom-left",
                                                modalProps: B,
                                                popoverClassName: "dataset-inp-ProductCard",
                                                className: m()["product-card__dropdown"],
                                                children: [(0, t.jsxs)(A().Item, {
                                                    onClick: Pr,
                                                    children: [(0, t.jsx)("i", {
                                                        className: "bi-bookmark"
                                                    }), (0, t.jsx)("span", {
                                                        children: "افزودن به لیست"
                                                    })]
                                                }), (0, t.jsxs)(A().Item, {
                                                    onClick: Tr,
                                                    children: [(0, t.jsx)("i", {
                                                        className: "bi-share"
                                                    }), (0, t.jsx)("span", {
                                                        children: "اشتراک‌گذاری"
                                                    })]
                                                }), ke && ke.map(function(e, r) {
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
                                        }), !!J.salampayTag && !ur && (0, t.jsx)("div", {
                                            className: (0, i.Z)(m()["product-card__image-box-salampay-badge"], m()["product-card__badge"]),
                                            title: "خرید قسطی",
                                            children: (0, t.jsx)(U(), {
                                                color: "black",
                                                variant: "text",
                                                size: "md",
                                                label: "خرید قسطی",
                                                icon: "bi-salampay"
                                            })
                                        }), !!(null === (D = J.ads) || void 0 === D ? void 0 : D.offerId) && !ur && !Ge && (0, t.jsx)("div", {
                                            className: m()["product-card__badge"],
                                            title: "آگهی",
                                            children: (0, t.jsx)(U(), {
                                                color: "black",
                                                variant: "text",
                                                size: "md",
                                                label: "آگهی",
                                                icon: "bi-megaphone-fill"
                                            })
                                        }), Le && (0, t.jsx)("div", {
                                            className: (0, i.Z)(m()["product-card__image-box-mlt-badge"]),
                                            children: (0, t.jsx)(g.Z, {
                                                product: J,
                                                queryParams: ce,
                                                canShowMltToolTip: Fe
                                            })
                                        }), ue && (0, t.jsx)("div", {
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
                                            lazy: fe
                                        }), mr && (0, t.jsx)("div", {
                                            className: m()["product-card__image-box-deprecated"],
                                            children: (0, t.jsx)("img", {
                                                alt: "محصول منقضی شده",
                                                src: "https://statics.basalam.com/public-90/admin/n28lY/06-08/o5qf3dtHC9OGqRohjt7JxwRrZzpCb39ynLQN1bP6JA8VJ5tk5c.png",
                                                loading: fe ? "lazy" : void 0
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
                                        children: [!(!_e || !J.vendor) && (0, t.jsxs)("div", {
                                            className: (0, i.Z)(m()["product-card__vendor-details"], m()["product-card__content-box-vendor-details"]),
                                            children: [(0, t.jsx)("span", {
                                                className: (0, i.Z)("bi-vendor", m()["product-card__vendor-details-icon"], _define_property({}, m()["product-card__vendor-details-icon--online"], Se))
                                            }), Se && (0, t.jsx)("div", {
                                                className: (0, i.Z)(m()["product-card__popover"], m()["product-card__vendor-details-popover"]),
                                                children: (0, t.jsx)("span", {
                                                    className: m()["product-card__popover-content"],
                                                    children: "غرفه‌دار آنلاینه"
                                                })
                                            }), (0, t.jsxs)("span", {
                                                className: m()["product-card__vendor-details-city-name"],
                                                children: [!!Nr && (0, t.jsxs)(t.Fragment, {
                                                    children: [Nr, (0, t.jsx)("span", {
                                                        className: m()["product-card__vendor-details-divider"],
                                                        children: "|"
                                                    })]
                                                }), (0, t.jsx)("div", {
                                                    title: J.vendor.name,
                                                    className: m()["product-card__vendor-details-name"],
                                                    onClick: function(e) {
                                                        e.preventDefault(), e.stopPropagation(), ar.push(pr)
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
                                    }), !xe && (G || !jr && (0, t.jsxs)("div", {
                                        className: m()["product-card__footer-wrapper"],
                                        children: [(0, t.jsx)("div", {
                                            className: (0, i.Z)(m()["product-card__footer"], Ye && m()["product-card__footer--without-discount"]),
                                            children: (0, t.jsx)("div", {
                                                className: m()["product-card__price-box"],
                                                children: !!J.stock && (0, t.jsxs)(t.Fragment, {
                                                    children: [!Ye && (0, t.jsxs)("div", {
                                                        children: [!!fr && fr !== br && (0, t.jsx)("span", {
                                                            className: m()["product-card__price-box-primary-price"],
                                                            children: (0, E.numberSeparator)(fr || br)
                                                        }), !!fr && fr !== br && (0, t.jsxs)("span", {
                                                            className: m()["product-card__price-box-discount-percent"],
                                                            children: ["٪", hr]
                                                        })]
                                                    }), (0, t.jsxs)("span", {
                                                        className: m()["product-card__price-box-price"],
                                                        children: [(0, E.numberSeparator)(br), (0, t.jsx)("span", {
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
                                            children: J.status && (null === (R = J.status) || void 0 === R ? void 0 : R.title) && (null === (F = J.status) || void 0 === F ? void 0 : F.id) !== x.PB.AVAILABLE ? J.status.title : "ناموجود"
                                        })]
                                    })), jr && (0, t.jsx)(T.Z, {
                                        price: J.price,
                                        inventory: te.inventory,
                                        expireTime: te.expireTime,
                                        primaryPrice: te.primaryPrice,
                                        hideRealDiscountIcon: te.hideRealDiscountIcon,
                                        hasCountdown: te.hasCountdown,
                                        pricePerKilo: J.pricePerKilo,
                                        size: tr ? "sm" : "lg"
                                    }), kr && (0, t.jsxs)("div", {
                                        className: m()["product-card__labels"],
                                        children: [!!qe && (0, t.jsx)(U(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: xe ? "sm" : "md",
                                            label: "غرفه برتر",
                                            icon: (0, i.Z)(["bi-award", m()["product-card__labels-vendor-score"]])
                                        }), (J.isFreeShipping || 0 === J.shippingCost) && J.stock ? (0, t.jsx)(U(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: xe ? "sm" : "md",
                                            label: "ارسال رایگان",
                                            icon: "bi-free-delivery"
                                        }) : J.shippingCost && J.stock ? (0, t.jsx)(U(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: xe ? "sm" : "md",
                                            label: "ارسال: ".concat((0, E.rialToToman)(J.shippingCost, {
                                                currency: !0,
                                                separator: !0
                                            }), " تومان")
                                        }) : null, ge && (0, t.jsx)(U(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: xe ? "sm" : "md",
                                            label: "آماده ارسال"
                                        }), J.mainAttribute && (0, t.jsx)(U(), {
                                            disabled: !J.stock,
                                            color: "black",
                                            variant: "text",
                                            size: xe ? "sm" : "md",
                                            label: (0, E.numberSeparator)(J.mainAttribute)
                                        }), $e && J.isGoodPriced && (0, t.jsx)(U(), {
                                            disabled: !J.stock,
                                            color: "primary",
                                            variant: "fill",
                                            size: xe ? "sm" : "md",
                                            label: "خوش قیمت"
                                        }), zr && (0, t.jsx)(U(), {
                                            color: "black",
                                            icon: "bi-privacy",
                                            label: Ar,
                                            disabled: !J.stock,
                                            size: xe ? "sm" : "md",
                                            className: m()["product-card__guarantee-badge"]
                                        })]
                                    }), wr && !xe ? (0, t.jsx)(Z(), {
                                        display: "flex",
                                        alignItems: "center",
                                        children: (0, t.jsxs)(b.Z, {
                                            size: tr ? "xxs" : "xs",
                                            product: J,
                                            productId: J.id,
                                            className: m()["product-card__action-button"],
                                            onAfterAddToCart: Ae,
                                            buttonProps: {
                                                variant: "text"
                                            },
                                            isShowSuccessToast: Ke,
                                            children: [(0, t.jsx)("i", {
                                                className: (0, i.Z)([m()["product-card__action-button-icon"], "bi-plus"])
                                            }), (0, t.jsx)("div", {
                                                children: "افزودن به سبد"
                                            })]
                                        })
                                    }) : Ze && (null === (K = J.vendor) || void 0 === K || null === (V = K.owner) || void 0 === V ? void 0 : V.hashId) ? (0, t.jsx)(L(), {
                                        className: m()["product-card__action-button"],
                                        icon: "bi-chats",
                                        size: "xs",
                                        variant: "outline",
                                        square: Pe,
                                        onClick: Cr
                                    }) : null]
                                })]
                            }), xe && (0, t.jsx)("div", {
                                className: (0, i.Z)([m()["product-card__price-box"], _define_property({}, m()["product-card__price-box--with-discount"], !Ye)]),
                                children: !!J.stock && (0, t.jsxs)(t.Fragment, {
                                    children: [!Ye && (0, t.jsxs)("div", {
                                        children: [!!fr && fr !== br && (0, t.jsx)("span", {
                                            className: m()["product-card__price-box-primary-price"],
                                            children: (0, E.numberSeparator)(fr || br)
                                        }), !!fr && fr !== br && (0, t.jsxs)("span", {
                                            className: m()["product-card__price-box-discount-percent"],
                                            children: ["٪", hr]
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: m()["product-card__price-box-price-container"],
                                        children: [wr && Pe && (0, t.jsx)("div", {
                                            className: m()["product-card__price-box-price-container-atc"],
                                            children: (0, t.jsx)(b.Z, {
                                                square: Pe,
                                                size: "xxs",
                                                product: J,
                                                productId: J.id,
                                                className: m()["product-card__action-button"],
                                                onAfterAddToCart: Ae,
                                                buttonProps: {
                                                    variant: "outline"
                                                },
                                                isShowSuccessToast: Ke
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
                                            children: [(0, E.numberSeparator)(br), (0, t.jsx)("span", {
                                                className: (0, i.Z)("bi-toman", m()["product-card__price-box-price-icon"])
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    }), yr && (0, t.jsx)(q, {
                        show: !0,
                        type: "PRODUCT",
                        entity: J,
                        onClose: Sr
                    })]
                })
            }
            F.propTypes = {
                footer: n().node,
                onClick: n().func,
                onMouseUp: n().func,
                showLabel: n().bool,
                isLazyLoad: n().bool,
                showVendor: n().bool,
                customUrl: n().string,
                className: n().string,
                linkTarget: n().string,
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
                isShowSuccessToast: n().bool,
                size: n().oneOf(["sm", "md"]),
                onClickFirstPriority: n().bool,
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
            }, r.Z = F
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