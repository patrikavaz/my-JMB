function _array_like_to_array(e, o) {
    (null == o || o > e.length) && (o = e.length);
    for (var t = 0, r = new Array(o); t < o; t++) r[t] = e[t];
    return r
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _define_property(e, o, t) {
    return o in e ? Object.defineProperty(e, o, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = t, e
}

function _iterable_to_array_limit(e, o) {
    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != t) {
        var r, n, i = [],
            l = !0,
            a = !1;
        try {
            for (t = t.call(e); !(l = (r = t.next()).done) && (i.push(r.value), !o || i.length !== o); l = !0);
        } catch (e) {
            a = !0, n = e
        } finally {
            try {
                l || null == t.return || t.return()
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
    for (var o = 1; o < arguments.length; o++) {
        var t = null != arguments[o] ? arguments[o] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(o) {
            _define_property(e, o, t[o])
        })
    }
    return e
}

function ownKeys(e, o) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        o && (r = r.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), t.push.apply(t, r)
    }
    return t
}

function _object_spread_props(e, o) {
    return o = null != o ? o : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ownKeys(Object(o)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
    }), e
}

function _sliced_to_array(e, o) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, o) || _unsupported_iterable_to_array(e, o) || _non_iterable_rest()
}

function _type_of(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}

function _unsupported_iterable_to_array(e, o) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, o);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _array_like_to_array(e, o) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6803], {
        83719: function(e, o, t) {
            "use strict";
            t.d(o, {
                Z: function() {
                    return d
                }
            });
            var r = t(32930),
                n = t(40877),
                i = t(24993),
                l = t.n(i),
                a = t(70437),
                s = t.n(a);

            function d(e) {
                var o = e.ratio;
                return (0, r.jsxs)("div", {
                    className: (0, n.Z)([l()["billboard-image-skeleton"]]),
                    children: [(0, r.jsx)("div", {
                        style: {
                            paddingBottom: o ? "".concat((100 * o).toFixed(3), "%") : "80%"
                        }
                    }), (0, r.jsx)(s(), {
                        width: "100%",
                        height: "100%",
                        className: l()["billboard-image-skeleton__item"],
                        backgroundColor: "var(--gray-100)",
                        waveColor: "var(--gray-200)"
                    })]
                })
            }
        },
        46196: function(e, o, t) {
            "use strict";
            var r = t(32930),
                n = t(27434),
                i = t(50874),
                l = t.n(i),
                a = t(94002),
                s = t(58271);

            function d(e) {
                var o = e.children,
                    t = e.fallback,
                    n = void 0 === t ? (0, r.jsx)("div", {}) : t;
                return (0, r.jsx)(a.ErrorBoundary, {
                    fallback: n,
                    onError: s.wJ,
                    children: o
                })
            }
            d.propTypes = {
                children: l().node,
                fallback: l().node
            }, o.Z = (0, n.memo)(d)
        },
        26460: function(e, o, t) {
            "use strict";
            t.d(o, {
                $t: function() {
                    return c
                },
                Iu: function() {
                    return m
                },
                aK: function() {
                    return v
                },
                kf: function() {
                    return p
                },
                ls: function() {
                    return u
                },
                xG: function() {
                    return h
                },
                yQ: function() {
                    return _
                }
            });
            var r = t(32930),
                n = t(59785),
                i = t.n(n),
                l = t(81433),
                a = t.n(l),
                s = t(70437),
                d = t.n(s);

            function c() {
                return (0, r.jsxs)(a(), {
                    className: i()["skeleton-horizontal-video-slider"],
                    mb: 32,
                    children: [(0, r.jsx)(a(), {
                        mb: 16,
                        children: (0, r.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100,
                            height: 24
                        })
                    }), (0, r.jsxs)("div", {
                        className: i()["skeleton-horizontal-video-slider__items"],
                        children: [(0, r.jsx)("div", {
                            className: i()["skeleton-horizontal-video-slider__item"],
                            children: (0, r.jsx)(d(), {
                                className: i()["skeleton-horizontal-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, r.jsx)("div", {
                            className: i()["skeleton-horizontal-video-slider__item"],
                            children: (0, r.jsx)(d(), {
                                className: i()["skeleton-horizontal-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, r.jsx)("div", {
                            className: i()["skeleton-horizontal-video-slider__item"],
                            children: (0, r.jsx)(d(), {
                                className: i()["skeleton-horizontal-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        })]
                    })]
                })
            }

            function u() {
                return (0, r.jsxs)(a(), {
                    className: i()["skeleton-vertical-video-slider"],
                    mb: 32,
                    children: [(0, r.jsx)(a(), {
                        mb: 16,
                        children: (0, r.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100,
                            height: 24
                        })
                    }), (0, r.jsxs)("div", {
                        className: i()["skeleton-vertical-video-slider__items"],
                        children: [(0, r.jsx)("div", {
                            className: i()["skeleton-vertical-video-slider__item"],
                            children: (0, r.jsx)(d(), {
                                className: i()["skeleton-vertical-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, r.jsx)("div", {
                            className: i()["skeleton-vertical-video-slider__item"],
                            children: (0, r.jsx)(d(), {
                                className: i()["skeleton-vertical-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, r.jsx)("div", {
                            className: i()["skeleton-vertical-video-slider__item"],
                            children: (0, r.jsx)(d(), {
                                className: i()["skeleton-vertical-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        })]
                    })]
                })
            }

            function _() {
                return (0, r.jsxs)(a(), {
                    className: i()["skeleton-blog"],
                    children: [(0, r.jsx)(a(), {
                        mb: 16,
                        children: (0, r.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100,
                            height: 24
                        })
                    }), (0, r.jsxs)("div", {
                        className: i()["skeleton-blog__posts"],
                        children: [(0, r.jsx)("div", {
                            className: i()["skeleton-blog__post"],
                            children: (0, r.jsx)(d(), {
                                className: i()["skeleton-blog__post-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, r.jsx)("div", {
                            className: i()["skeleton-blog__post"],
                            children: (0, r.jsx)(d(), {
                                className: i()["skeleton-blog__post-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        })]
                    })]
                })
            }

            function v() {
                return (0, r.jsx)(a(), {
                    className: i()["skeleton-billboard-image-ads"],
                    children: (0, r.jsx)("div", {
                        className: i()["skeleton-billboard-image-ads__item"],
                        children: (0, r.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })
                    })
                })
            }

            function p() {
                return (0, r.jsx)(a(), {
                    className: i()["skeleton-billboard-image"],
                    children: (0, r.jsx)("div", {
                        className: i()["skeleton-billboard-image__item"],
                        children: (0, r.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })
                    })
                })
            }

            function m() {
                return (0, r.jsxs)(a(), {
                    className: i()["skeleton-horizontal-vendor-with-chat"],
                    children: [(0, r.jsx)(a(), {
                        pl: 24,
                        pr: 24,
                        mb: 16,
                        children: (0, r.jsx)(d(), {
                            className: i()["skeleton-horizontal-vendor-with-chat__header"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })
                    }), (0, r.jsxs)("div", {
                        className: i()["skeleton-horizontal-vendor-with-chat__items"],
                        children: [(0, r.jsx)(d(), {
                            className: i()["skeleton-horizontal-vendor-with-chat__item"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        }), (0, r.jsx)(d(), {
                            className: i()["skeleton-horizontal-vendor-with-chat__item"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })]
                    })]
                })
            }

            function h() {
                return (0, r.jsxs)(a(), {
                    className: i()["skeleton-horizontal-vendor-coupons"],
                    children: [(0, r.jsxs)(a(), {
                        pl: 24,
                        pr: 24,
                        mb: 16,
                        children: [(0, r.jsx)(d(), {
                            className: i()["skeleton-horizontal-vendor-coupons__title"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        }), (0, r.jsx)(d(), {
                            className: i()["skeleton-horizontal-vendor-coupons__subtitle"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100
                        })]
                    }), (0, r.jsx)("div", {
                        className: i()["skeleton-horizontal-vendor-coupons__items"],
                        children: (0, r.jsxs)("div", {
                            className: i()["skeleton-horizontal-vendor-coupons__item"],
                            children: [(0, r.jsxs)("div", {
                                className: i()["skeleton-horizontal-vendor-coupons__item-header"],
                                children: [(0, r.jsx)("div", {
                                    className: "skeleton-horizontal-vendor-coupons__item-header-icon-container",
                                    children: (0, r.jsx)(d(), {
                                        className: i()["skeleton-horizontal-vendor-coupons__item-header-icon"],
                                        backgroundColor: "var(--gray-100)",
                                        waveColor: "var(--gray-200)"
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: i()["skeleton-horizontal-vendor-coupons__item-header-title-container"],
                                    children: [(0, r.jsx)(d(), {
                                        className: i()["skeleton-horizontal-vendor-coupons__item-header-title"],
                                        backgroundColor: "var(--gray-100)",
                                        waveColor: "var(--gray-200)"
                                    }), (0, r.jsx)(d(), {
                                        className: i()["skeleton-horizontal-vendor-coupons__item-header-subtitle"],
                                        backgroundColor: "var(--gray-100)",
                                        waveColor: "var(--gray-200)"
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: i()["skeleton-horizontal-vendor-coupons__divider"]
                            }), (0, r.jsxs)("div", {
                                className: i()["skeleton-horizontal-vendor-coupons__item-images-container"],
                                children: [(0, r.jsx)(d(), {
                                    className: i()["skeleton-horizontal-vendor-coupons__item-images-vendor"],
                                    backgroundColor: "var(--gray-100)",
                                    waveColor: "var(--gray-200)"
                                }), (0, r.jsxs)("div", {
                                    className: i()["skeleton-horizontal-vendor-coupons__item-images"],
                                    children: [(0, r.jsx)("div", {
                                        className: i()["skeleton-horizontal-vendor-coupons__item-image"],
                                        children: (0, r.jsx)(d(), {
                                            className: i()["skeleton-horizontal-vendor-coupons__item-image-img"]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: i()["skeleton-horizontal-vendor-coupons__item-image"],
                                        children: (0, r.jsx)(d(), {
                                            className: i()["skeleton-horizontal-vendor-coupons__item-image-img"]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: i()["skeleton-horizontal-vendor-coupons__item-image"],
                                        children: (0, r.jsx)(d(), {
                                            className: i()["skeleton-horizontal-vendor-coupons__item-image-img"]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: i()["skeleton-horizontal-vendor-coupons__item-image"],
                                        children: (0, r.jsx)(d(), {
                                            className: i()["skeleton-horizontal-vendor-coupons__item-image-img"]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        96803: function(e, o, t) {
            "use strict";
            t.d(o, {
                Z: function() {
                    return Se
                }
            });
            var r = t(32930),
                n = t(2389),
                i = t.n(n),
                l = t(51491),
                a = t.n(l),
                s = t(40877),
                d = t(2347),
                c = t(16911),
                u = t.n(c),
                _ = t(27434),
                v = t(53278),
                p = t.n(v),
                m = t(92369),
                h = t(56345),
                g = t(45835);

            function k(e) {
                var o = e.banner,
                    t = e.metadata,
                    n = e.lazy,
                    i = void 0 === n || n,
                    l = e.sectionName,
                    a = e.itemName,
                    s = (0, g.b)().ua,
                    c = (0, _.useMemo)(function() {
                        return (null == t ? void 0 : t.size) ? s.isPc ? t.size.desktop.height / t.size.desktop.width : t.size.mobile.height / t.size.mobile.width : null
                    }, [t, s.isPc]),
                    v = (0, _.useCallback)(function() {
                        (0, m.publishEvent)("homeClick", {
                            item: a,
                            componentName: l
                        })
                    }, [a, l]),
                    k = (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(p(), {
                            lazy: i,
                            ratio: c,
                            alt: (null == t ? void 0 : t.title) || "",
                            className: u()["banner-discovery__image"],
                            src: (s.isPc ? o.src.pc : o.src.mobile) || h.F.src
                        }), t.title && (0, r.jsx)("div", {
                            className: u()["banner-discovery__content"],
                            children: (0, r.jsx)("span", {
                                className: u()["banner-discovery__content-title"],
                                children: t.title
                            })
                        })]
                    });
                return o.link ? (0, r.jsx)(d.Z, {
                    "data-from": "home",
                    prefetch: !1,
                    href: o.link,
                    className: u()["banner-discovery"],
                    onClick: v,
                    children: k
                }) : (0, r.jsx)("div", {
                    className: u()["banner-discovery"],
                    children: k
                })
            }
            var b = t(87930),
                y = t.n(b),
                x = t(83719),
                f = t(65074),
                j = t.n(f),
                z = t(93222),
                w = t.n(z),
                N = t(5164),
                C = (0, _.memo)(function(e) {
                    var o = e.name,
                        t = e.banners,
                        n = e.metadata,
                        i = e.className,
                        l = e.speed,
                        a = void 0 === l ? 30 : l,
                        d = e.loop,
                        c = void 0 !== d && d,
                        u = e.delay,
                        v = void 0 === u ? 6e3 : u,
                        p = e.isLazy,
                        m = void 0 !== p && p,
                        h = e.noSkeleton,
                        b = void 0 !== h && h,
                        f = (0, g.b)().ua,
                        z = (0, _.useRef)(),
                        C = _sliced_to_array((0, _.useState)(0), 2),
                        P = C[0],
                        Z = C[1],
                        L = _sliced_to_array((0, _.useState)(!0), 2),
                        S = L[0],
                        M = L[1],
                        O = _sliced_to_array((0, _.useState)(!1), 2),
                        I = O[0],
                        A = O[1],
                        D = _sliced_to_array((0, _.useState)(!1), 2),
                        T = D[0],
                        B = D[1],
                        G = (0, _.useMemo)(function() {
                            return "true" === n.autoplay ? [(0, N.BsLightCarouselAutoplayPlugin)({
                                delay: v
                            })] : void 0
                        }, [n, v]),
                        E = (null == t ? void 0 : t.length) > 1,
                        W = f.isPc && (null == t ? void 0 : t.length) > 1,
                        q = (0, _.useCallback)(function(e) {
                            !b && (B(!0), E && Z(e.selectedScrollSnap()), W && (M(function() {
                                return e.canScrollNext()
                            }), A(function() {
                                return e.canScrollPrev()
                            })))
                        }, [b, W, E]),
                        X = (0, _.useCallback)(function(e) {
                            E && Z(e.selectedScrollSnap()), W && (M(function() {
                                return e.canScrollNext()
                            }), A(function() {
                                return e.canScrollPrev()
                            }))
                        }, [W, E]),
                        F = (0, _.useCallback)(function() {
                            var e, o, t, r, n, i;
                            null === (o = z.current) || void 0 === o || null === (e = o.api) || void 0 === e || e.scrollNext(), null === (i = z.current) || void 0 === i || null === (n = i.api) || void 0 === n || null === (r = n.plugins()) || void 0 === r || null === (t = r.autoplay) || void 0 === t || t.reset()
                        }, []),
                        H = (0, _.useCallback)(function() {
                            var e, o, t, r, n, i;
                            null === (o = z.current) || void 0 === o || null === (e = o.api) || void 0 === e || e.scrollPrev(), null === (i = z.current) || void 0 === i || null === (n = i.api) || void 0 === n || null === (r = n.plugins()) || void 0 === r || null === (t = r.autoplay) || void 0 === t || t.reset()
                        }, []),
                        K = (0, _.useCallback)(function(e) {
                            var o, t, r, n, i, l;
                            null === (t = z.current) || void 0 === t || null === (o = t.api) || void 0 === o || o.scrollTo(e), null === (l = z.current) || void 0 === l || null === (i = l.api) || void 0 === i || null === (n = i.plugins()) || void 0 === n || null === (r = n.autoplay) || void 0 === r || r.reset()
                        }, []),
                        R = (0, _.useCallback)(function(e) {
                            z.current = e, z.current && (0, N.isClientSide)() && (window.stopMainCarouselAutoplay = function() {
                                var e, o, t, r;
                                null === (r = z.current) || void 0 === r || null === (t = r.api) || void 0 === t || null === (o = t.plugins()) || void 0 === o || null === (e = o.autoplay) || void 0 === e || e.stop()
                            }, window.startMainCarouselAutoplay = function() {
                                var e, o, t, r;
                                null === (r = z.current) || void 0 === r || null === (t = r.api) || void 0 === t || null === (o = t.plugins()) || void 0 === o || null === (e = o.autoplay) || void 0 === e || e.play()
                            })
                        }, []);
                    (0, _.useEffect)(function() {
                        b || 1 !== (null == t ? void 0 : t.length) || B(!0)
                    }, [null == t ? void 0 : t.length, b]);
                    var V = (0, _.useMemo)(function() {
                        var e, o, r, i, l, a, s, d;
                        return (null == n ? void 0 : n.size) && (null == t ? void 0 : t[0]) ? f.isPc ? ((null == n || null === (o = n.size) || void 0 === o || null === (e = o.desktop) || void 0 === e ? void 0 : e.height) || 0) / ((null == n || null === (i = n.size) || void 0 === i || null === (r = i.desktop) || void 0 === r ? void 0 : r.width) || 0) : ((null == n || null === (a = n.size) || void 0 === a || null === (l = a.mobile) || void 0 === l ? void 0 : l.height) || 0) / ((null == n || null === (d = n.size) || void 0 === d || null === (s = d.mobile) || void 0 === s ? void 0 : s.width) || 0) : null
                    }, [t, null == n ? void 0 : n.size, f.isPc]);
                    return (0, r.jsxs)("div", {
                        className: (0, s.Z)([y()["banner-slider-discovery"], i]),
                        children: [!T && !b && (0, r.jsx)(x.Z, {
                            ratio: V
                        }), (0, r.jsxs)("div", {
                            className: (0, s.Z)(y()["banner-slider-discovery__content"], _define_property({}, y()["banner-slider-discovery__content--hidden"], !T && !b)),
                            children: [W && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(j(), {
                                    className: (0, s.Z)(y()["banner-slider-discovery__next"], _define_property({}, y()["banner-slider-discovery__next--active"], S)),
                                    color: "secondary",
                                    variant: "outline",
                                    icon: "bi-angle-left",
                                    size: "md",
                                    square: !0,
                                    onClick: F
                                }), (0, r.jsx)(j(), {
                                    className: (0, s.Z)(y()["banner-slider-discovery__prev"], _define_property({}, y()["banner-slider-discovery__prev--active"], I)),
                                    color: "secondary",
                                    variant: "outline",
                                    icon: "bi-angle-right",
                                    size: "md",
                                    square: !0,
                                    onClick: H
                                })]
                            }), 1 === (null == t ? void 0 : t.length) && (0, r.jsx)(k, {
                                lazy: m,
                                sectionName: o,
                                banner: t[0],
                                metadata: n,
                                itemName: "".concat(o, "-", 0)
                            }), (null == t ? void 0 : t.length) > 1 && (0, r.jsx)(w(), {
                                loop: c,
                                duration: a,
                                ref: R,
                                plugins: G,
                                onInit: q,
                                onSelect: X,
                                children: null == t ? void 0 : t.map(function(e, t) {
                                    return (0, r.jsx)(w().Item, {
                                        className: y()["banner-slider-discovery__slider-item"],
                                        children: (0, r.jsx)(k, {
                                            banner: e,
                                            sectionName: o,
                                            lazy: 0 !== t || m,
                                            metadata: n,
                                            itemName: "".concat(o, "-", 0)
                                        })
                                    }, t)
                                })
                            }), E && (0, r.jsx)("div", {
                                className: y()["banner-slider-discovery__pagination"],
                                children: t.map(function(e, o) {
                                    return (0, r.jsx)("button", {
                                        "aria-label": "اسلاید بعدی",
                                        className: (0, s.Z)(y()["banner-slider-discovery__pagination-btn"], _define_property({}, y()["banner-slider-discovery__pagination-btn--active"], o === P)),
                                        onClick: function() {
                                            return K(o)
                                        }
                                    }, o)
                                })
                            })]
                        })]
                    })
                }),
                P = t(177),
                Z = t.n(P),
                L = t(26491),
                S = t(24311);

            function M(e) {
                var o = e.isPc,
                    t = e.children,
                    n = e.isServer,
                    i = e.index,
                    l = void 0 === i ? 0 : i,
                    a = e.skeleton,
                    s = void 0 === a ? null : a,
                    d = e.rootMargin,
                    c = void 0 === d ? "400px" : d,
                    u = e.immediateRenderCount,
                    v = void 0 === u ? 2 : u,
                    p = (0, g.b)().isWebview,
                    m = _sliced_to_array((0, _.useState)(l < v || n && !p), 2),
                    h = m[0],
                    k = m[1],
                    b = (0, _.useRef)(null);
                return (0, _.useEffect)(function() {
                    if (!h) {
                        var e = new IntersectionObserver(function(o) {
                            _sliced_to_array(o, 1)[0].isIntersecting && (k(!0), e.disconnect())
                        }, {
                            rootMargin: c,
                            threshold: 0
                        });
                        return b.current && e.observe(b.current),
                            function() {
                                return e.disconnect()
                            }
                    }
                }, [h, c]), (0, r.jsx)("div", {
                    ref: b,
                    children: o ? h ? t : (0, r.jsx)(Z(), {
                        children: s
                    }) : h ? t : s
                })
            }
            var O = t(46196),
                I = t(56637),
                A = t(88107),
                D = t(88423);

            function T(e) {
                var o;
                return {
                    ui: e.ui,
                    name: e.name,
                    title: e.title,
                    description: e.description,
                    metadata: e.metaData || {},
                    moreLink: null === (o = e.moreLink) || void 0 === o ? void 0 : o.replace("https://basalam.com", "")
                }
            }

            function B(e) {
                var o = e.result[0].metadata;
                return _object_spread_props(_object_spread({}, T(e)), {
                    metadata: _object_spread_props(_object_spread({}, e.metaData), {
                        size: o.size,
                        autoplay: o.autoSlide || o.autoPlay
                    }),
                    items: o.images.map(function(e) {
                        return {
                            link: e.link,
                            src: {
                                pc: e.desktopUrl || e.url || e.image,
                                mobile: e.mobile || e.url || e.image
                            }
                        }
                    }).slice(0, 20)
                })
            }

            function G(e) {
                var o = e.result[0].metadata;
                return _object_spread_props(_object_spread({}, T(e)), {
                    items: o.videos.slice(0, 20),
                    metadata: _object_spread_props(_object_spread({}, e.metaData), {
                        title: o.title,
                        size: o.size
                    })
                })
            }

            function E(e, o) {
                var t, r = o.hasSection || (null === (t = e.metadata) || void 0 === t ? void 0 : t.showAllProduct);
                return _object_spread_props(_object_spread({}, T(e)), {
                    items: e.result.map(function(o, t) {
                        var n, i, l, a, s, d, c, u = null;
                        return ((null === (n = o.metadata) || void 0 === n ? void 0 : n.primaryPrice) || (null === (i = o.metadata) || void 0 === i ? void 0 : i.remainingStock) || (null === (l = o.metadata) || void 0 === l ? void 0 : l.expireTime)) && (u = {
                            backgroundNone: !0,
                            expireTime: o.metadata.expireTime,
                            inventory: o.metadata.remainingStock,
                            primaryPrice: o.metadata.primaryPrice
                        }), {
                            realDiscount: u,
                            id: o.id,
                            showLabel: !0,
                            isLazyLoad: !0,
                            conversationBtn: !1,
                            showMoreOptionBtn: !1,
                            isShowAppDiscountBadge: !1,
                            canShowGoodPriceExperiment: !0,
                            isSelectedVendor: !!(null === (a = o.vendor) || void 0 === a ? void 0 : a.score),
                            isSpecialSale: !!(null === (s = o.metadata) || void 0 === s ? void 0 : s.badgeTitle),
                            queryParams: (0, D.Z)(e.item, !1),
                            badgeTitle: (null == o || null === (d = o.currentPromotion) || void 0 === d ? void 0 : d.cardBadgeTitle) || (null == o || null === (c = o.metadata) || void 0 === c ? void 0 : c.badgeTitle) || !1,
                            onClick: function() {
                                requestIdleCallback(function() {
                                    (0, m.publishEvent)("homeClick", {
                                        item: "".concat(t + 1),
                                        componentName: "horizontal_product_popular"
                                    })
                                })
                            },
                            product: {
                                id: o.id,
                                name: o.name,
                                stock: o.stock,
                                price: o.price,
                                rating: o.rating,
                                vendor: o.vendor,
                                metadata: o.metadata,
                                photo: o.photo.small,
                                ads: o.metadata.offerId,
                                listingIds: o.listingIds,
                                hasVariation: o.hasVariation,
                                primaryPrice: o.primaryPrice,
                                isFreeShipping: o.isFreeShipping,
                                currentPromotion: o.currentPromotion,
                                canAddToCart: !!r && o.canAddToCart
                            }
                        }
                    }).slice(0, 20)
                })
            }
            t(19361);
            var W = function(e) {
                    return e.every(function(e) {
                        var o, t = null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.videos;
                        if (!(null == t ? void 0 : t.length)) return !1;
                        var r = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done); r = !0) {
                                var s = l.value,
                                    d = (null == s ? void 0 : s.thumbnail) && ("string" == typeof s.thumbnail || "object" == _type_of(s.thumbnail) && null !== s.thumbnail);
                                if (!(null == s ? void 0 : s.url) || !d) return !1
                            }
                        } catch (e) {
                            n = !0, i = e
                        } finally {
                            try {
                                r || null == a.return || a.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                        return !0
                    })
                },
                q = function(e) {
                    return e.every(function(e) {
                        var o = null == e ? void 0 : e.metadata;
                        return (null == o ? void 0 : o.types) && (null == o ? void 0 : o.title) && (null == o ? void 0 : o.infoTitle) && (null == o ? void 0 : o.vendorDescription) && (null == o ? void 0 : o.userDescription)
                    })
                },
                X = new Set(["blog_post", "ads_slider", "product_card", "billboard_image", "horizontal_category", "vertical_video_list", "horizontal_video_list", "horizontal_pgp_popular", "horizontal_product_popular", "horizontal_vendor_with_chat", "top_reels_review_slider", "top_reels_business_slider", "horizontal_product_timely", "horizontal_product_timely_basalam", "horizontal_vendor_coupons"]),
                F = {
                    blog_post: function(e) {
                        return e.every(function(e) {
                            var o, t = null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.posts;
                            return (null == t ? void 0 : t.length) > 0 && t.every(function(e) {
                                return null == e ? void 0 : e.imageUrl
                            })
                        })
                    },
                    ads_slider: function(e) {
                        return e.every(function(e) {
                            var o, t = null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.banners;
                            return (null == t ? void 0 : t.length) > 0 && t.every(function(e) {
                                return (null == e ? void 0 : e.url) || (null == e ? void 0 : e.image)
                            })
                        })
                    },
                    vertical_video_list: W,
                    billboard_image: function(e) {
                        return e.every(function(e) {
                            var o, t = null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.images;
                            return (null == t ? void 0 : t.length) > 0 && t.every(function(e) {
                                return (null == e ? void 0 : e.url) && (null == e ? void 0 : e.link)
                            })
                        })
                    },
                    billboard_video: function(e) {
                        return e.every(function(e) {
                            return (null == e ? void 0 : e.title) && (null == e ? void 0 : e.poster) && (null == e ? void 0 : e.videoUrl)
                        })
                    },
                    horizontal_video_list: W,
                    horizontal_category: function(e) {
                        return e.every(function(e) {
                            var o, t = null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.categories;
                            return (null == t ? void 0 : t.length) > 0 && t.every(function(e) {
                                return (null == e ? void 0 : e.icon) && (null == e ? void 0 : e.link) && (null == e ? void 0 : e.title)
                            })
                        })
                    },
                    top_reels_review_slider: q,
                    top_reels_business_slider: q,
                    horizontal_pgp_popular: function(e) {
                        return e.every(function(e) {
                            var o;
                            return (null == e ? void 0 : e.uuid) && (null == e ? void 0 : e.title) && "number" == typeof(null == e ? void 0 : e.minPrice) && (null == e || null === (o = e.images) || void 0 === o ? void 0 : o.length) > 0
                        })
                    },
                    horizontal_vendor_coupons: function(e) {
                        return e.every(function(e) {
                            var o, t;
                            return (null == e ? void 0 : e.id) || (null == e || null === (o = e.vendor) || void 0 === o ? void 0 : o.name) || (null == e || null === (t = e.vendor) || void 0 === t ? void 0 : t.identifier)
                        })
                    },
                    horizontal_product_timely: function(e) {
                        return e.every(function(e) {
                            var o, t, r;
                            return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && "number" == typeof(null == e ? void 0 : e.price) && (null == e || null === (o = e.photo) || void 0 === o ? void 0 : o.small) && (null == e || null === (t = e.vendor) || void 0 === t ? void 0 : t.name) && (null == e || null === (r = e.vendor) || void 0 === r ? void 0 : r.identifier)
                        })
                    },
                    horizontal_product_popular: function(e) {
                        return e.every(function(e) {
                            var o, t, r;
                            return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && "number" == typeof(null == e ? void 0 : e.price) && (null == e || null === (o = e.photo) || void 0 === o ? void 0 : o.small) && (null == e || null === (t = e.vendor) || void 0 === t ? void 0 : t.name) && (null == e || null === (r = e.vendor) || void 0 === r ? void 0 : r.identifier)
                        })
                    },
                    horizontal_product_timely_basalam: function(e) {
                        return e.every(function(e) {
                            var o, t, r;
                            return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && "number" == typeof(null == e ? void 0 : e.price) && (null == e || null === (o = e.photo) || void 0 === o ? void 0 : o.small) && (null == e || null === (t = e.vendor) || void 0 === t ? void 0 : t.name) && (null == e || null === (r = e.vendor) || void 0 === r ? void 0 : r.identifier)
                        })
                    }
                },
                H = {
                    blog_post: function(e) {
                        var o = e.result[0].metadata;
                        return _object_spread_props(_object_spread({}, T(e)), {
                            items: o.posts.slice(0, 20),
                            metadata: _object_spread_props(_object_spread({}, e.metaData), {
                                title: o.title,
                                size: o.size
                            })
                        })
                    },
                    ads_slider: function(e) {
                        var o = e.result[0].metadata;
                        return _object_spread_props(_object_spread({}, T(e)), {
                            metadata: _object_spread_props(_object_spread({}, e.metaData), {
                                size: o.size,
                                autoplay: o.autoSlide || o.autoPlay
                            }),
                            items: o.banners.map(function(e) {
                                return {
                                    link: e.link,
                                    src: {
                                        pc: e.desktopUrl || e.url || e.image,
                                        mobile: e.mobile || e.url || e.image
                                    }
                                }
                            }).slice(0, 20)
                        })
                    },
                    billboard_video: B,
                    billboard_image: B,
                    vertical_video_list: G,
                    horizontal_category: function(e) {
                        return _object_spread_props(_object_spread({}, T(e)), {
                            items: e.result[0].metadata.categories.slice(0, 20)
                        })
                    },
                    horizontal_video_list: G,
                    horizontal_pgp_popular: function(e) {
                        return _object_spread_props(_object_spread({}, T(e)), {
                            items: e.result.map(function(e) {
                                return {
                                    id: e.id,
                                    name: e.title,
                                    metadata: e.metadata || {},
                                    group: {
                                        uuid: e.uuid,
                                        title: e.title || "",
                                        images: e.images || [],
                                        minPrice: e.minPrice || 0,
                                        vendorsCount: e.vendorsCount,
                                        rating: {
                                            rating: e.starsAverage,
                                            average: e.starsAverage,
                                            count: e.starsTotalCount,
                                            signals: e.starsTotalCount
                                        }
                                    }
                                }
                            }).slice(0, 20)
                        })
                    },
                    horizontal_product_timely: E,
                    horizontal_product_popular: E,
                    horizontal_product_timely_basalam: E
                },
                K = t(1692),
                R = t(69064),
                V = t(1822),
                J = t.n(V),
                Q = t(81433),
                U = t.n(Q),
                Y = t(70437),
                $ = t.n(Y),
                ee = t(19616);

            function oe() {
                return (0, r.jsxs)(U(), {
                    className: J()["horizontal-product-timely-skeleton"],
                    children: [(0, r.jsxs)("div", {
                        className: J()["horizontal-product-timely-skeleton__header"],
                        children: [(0, r.jsx)("div", {
                            className: J()["horizontal-product-timely-skeleton__header-icon"],
                            children: (0, r.jsx)($(), {
                                className: J()["horizontal-product-timely-skeleton__icon"]
                            })
                        }), (0, r.jsxs)("div", {
                            className: J()["horizontal-product-timely-skeleton__header-content"],
                            children: [(0, r.jsx)($(), {
                                className: J()["horizontal-product-timely-skeleton__header-title"]
                            }), (0, r.jsx)($(), {
                                className: J()["horizontal-product-timely-skeleton__header-show-all"]
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: J()["horizontal-product-timely-skeleton__items"],
                        children: [(0, r.jsx)(ee.Z, {
                            className: J()["horizontal-product-timely-skeleton__item"],
                            discountMode: !0
                        }), (0, r.jsx)(ee.Z, {
                            className: J()["horizontal-product-timely-skeleton__item"],
                            discountMode: !0
                        })]
                    })]
                })
            }
            var te = t(26460),
                re = i()(function() {
                    return t.e(5536).then(t.bind(t, 55536))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [55536]
                        }
                    },
                    ssr: !1
                }),
                ne = i()(function() {
                    return t.e(823).then(t.bind(t, 40823))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [40823]
                        }
                    },
                    ssr: !1,
                    loading: te.yQ
                }),
                ie = i()(function() {
                    return t.e(5399).then(t.bind(t, 95399))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [95399]
                        }
                    },
                    ssr: !1,
                    loading: te.ls
                }),
                le = i()(function() {
                    return t.e(5399).then(t.bind(t, 95399))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [95399]
                        }
                    },
                    ssr: !1,
                    loading: te.$t
                }),
                ae = i()(function() {
                    return Promise.all([t.e(8231), t.e(7999)]).then(t.bind(t, 87999))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [87999]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, r.jsx)(S.Xp, {})
                    }
                }),
                se = i()(function() {
                    return Promise.resolve().then(t.bind(t, 30162))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [30162]
                        }
                    },
                    ssr: !0,
                    loading: I.Z
                }),
                de = i()(function() {
                    return Promise.all([t.e(8231), t.e(7339), t.e(6961)]).then(t.bind(t, 85156))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [85156]
                        }
                    },
                    ssr: !0,
                    loading: function() {
                        return (0, r.jsx)(R.Z, {
                            hasBackground: !0,
                            discountModeWithTimer: !0,
                            hasLabels: !0
                        })
                    }
                }),
                ce = i()(function() {
                    return Promise.all([t.e(8231), t.e(7339), t.e(6961)]).then(t.bind(t, 85156))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [85156]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, r.jsx)(R.Z, {
                            multipleLabels: !0,
                            discountMode: !0
                        })
                    }
                }),
                ue = i()(function() {
                    return Promise.all([t.e(296), t.e(7339), t.e(1558), t.e(1555)]).then(t.bind(t, 91163))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [91163]
                        }
                    },
                    ssr: !1,
                    loading: R.Z
                }),
                _e = i()(function() {
                    return Promise.all([t.e(296), t.e(3620), t.e(7339), t.e(6160), t.e(940)]).then(t.bind(t, 37572))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [37572]
                        }
                    },
                    ssr: !1,
                    loading: oe
                }),
                ve = i()(function() {
                    return Promise.all([t.e(8231), t.e(8139)]).then(t.bind(t, 8139))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8139]
                        }
                    },
                    ssr: !1,
                    loading: te.Iu
                }),
                pe = i()(function() {
                    return Promise.all([t.e(8231), t.e(8399)]).then(t.bind(t, 8399))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8399]
                        }
                    },
                    ssr: !1,
                    loading: te.xG
                }),
                me = i()(function() {
                    return t.e(92).then(t.bind(t, 80092))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [80092]
                        }
                    },
                    ssr: !1,
                    loading: K.Z
                }),
                he = (0, L.Z)({
                    on: ["visible"]
                })(re),
                ge = (0, L.Z)({
                    on: ["visible"]
                })(C),
                ke = (0, L.Z)({
                    on: ["visible"]
                })(ne),
                be = (0, L.Z)({
                    on: ["visible"]
                })(se),
                ye = (0, L.Z)({
                    on: ["visible"]
                })(ie),
                xe = (0, L.Z)({
                    on: ["visible"]
                })(le),
                fe = (0, L.Z)({
                    on: ["visible"]
                })(ae),
                je = (0, L.Z)({
                    on: ["visible"]
                })(ve),
                ze = (0, L.Z)({
                    on: ["visible"]
                })(pe),
                we = (0, L.Z)({
                    on: ["visible"]
                })(me),
                Ne = (0, L.Z)({
                    on: ["visible"]
                })(ce),
                Ce = (0, L.Z)({
                    on: ["visible"]
                })(ue),
                Pe = (0, L.Z)({
                    on: ["visible"]
                })(_e),
                Ze = (0, L.Z)({
                    on: ["visible"]
                })(de),
                Le = function(e, o) {
                    switch (e.ui) {
                        case "ads_slider":
                            return (0, r.jsx)(te.aK, {});
                        case "horizontal_category":
                            return (0, r.jsx)(I.Z, {});
                        case "horizontal_product_popular":
                            var t, n, i, l, a, s;
                            return (0, r.jsx)(R.Z, {
                                hasBackground: null === (t = e.metaData) || void 0 === t ? void 0 : t.hasBackground,
                                hasLogo: null === (n = e.metaData) || void 0 === n ? void 0 : n.hasLogo,
                                discountModeWithTimer: null === (i = e.metaData) || void 0 === i ? void 0 : i.hasBackground,
                                discountMode: !(null === (l = e.metaData) || void 0 === l ? void 0 : l.hasBackground),
                                hasLabels: (null === (a = e.metaData) || void 0 === a ? void 0 : a.hasBackground) || o,
                                multipleLabels: !(null === (s = e.metaData) || void 0 === s ? void 0 : s.hasBackground) && !o
                            });
                        case "horizontal_product_timely":
                        case "horizontal_product_timely_basalam":
                            return (0, r.jsx)(oe, {});
                        case "horizontal_pgp_popular":
                            return (0, r.jsx)(K.Z, {});
                        case "horizontal_vendor_with_chat":
                            return (0, r.jsx)(te.Iu, {});
                        case "blog_post":
                            return (0, r.jsx)(te.yQ, {});
                        case "top_reels_review_slider":
                        case "top_reels_business_slider":
                            return (0, r.jsx)(S.Xp, {});
                        case "horizontal_video_list":
                            return (0, r.jsx)(te.$t, {});
                        case "vertical_video_list":
                            return (0, r.jsx)(te.ls, {});
                        case "horizontal_vendor_coupons":
                            return (0, r.jsx)(te.xG, {});
                        default:
                            return null
                    }
                };

            function Se(e) {
                var o = e.sections,
                    t = e.isServer,
                    n = e.isHiddenCsrComponentsSkeleton,
                    i = void 0 === n || n,
                    l = (0, g.b)().ua,
                    s = function(e) {
                        var o, t = (0, _.useRef)({}),
                            r = (0, A.Z)(),
                            n = (0, _.useMemo)(function() {
                                var o = [];
                                return e.forEach(function(e) {
                                    var n, i, l = "name:".concat(e.name, "-ui:").concat(e.ui, "-items:").concat((null === (n = e.result) || void 0 === n ? void 0 : n.length) || 0);
                                    if (t[l]) o.push(t[l]);
                                    else if (X.has(e.ui)) {
                                        if (F[e.ui])
                                            if (!F[e.ui](e.result)) return;
                                        H[e.ui] ? o.push(H[e.ui](e, {
                                            hasSection: !!(null === (i = r.query) || void 0 === i ? void 0 : i.section)
                                        })) : o.push(e), t.current[l] = o
                                    }
                                }), o
                            }, [e, null === (o = r.query) || void 0 === o ? void 0 : o.section]);
                        return n
                    }(o);
                return (0, r.jsx)("div", {
                    className: a()["discovery-wrapper"],
                    children: s.map(function(e, n) {
                        var s, d, c;
                        return (0, r.jsx)(O.Z, {
                            children: (0, r.jsxs)(M, {
                                index: n,
                                immediateRenderCount: 3,
                                rootMargin: "400px",
                                skeleton: Le(e, l.isPc),
                                isServer: t,
                                isPc: l.isPc,
                                children: ["horizontal_category" === e.ui && (0, r.jsx)(Z(), {
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: (null == o || null === (s = o[n]) || void 0 === s ? void 0 : s.fromCache) || i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(be, {
                                            items: e.items,
                                            isLazy: !0
                                        })
                                    })
                                }), "horizontal_product_popular" === e.ui && e.metadata.uiRealDiscount && (0, r.jsx)(Z(), {
                                    fluid: !l.isPc,
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: (null == o || null === (d = o[n]) || void 0 === d ? void 0 : d.fromCache) || i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(Ze, {
                                            items: e.items,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            metadata: e.metadata,
                                            description: e.description,
                                            showAllProduct: e.metadata.showAllProduct,
                                            isLazyProduct: !0
                                        })
                                    })
                                }), "horizontal_product_popular" === e.ui && !e.metadata.uiRealDiscount && (0, r.jsx)(Z(), {
                                    fluid: !l.isPc,
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(Ne, {
                                            items: e.items,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            metadata: e.metadata,
                                            description: e.description,
                                            showAllProduct: e.metadata.showAllProduct,
                                            isLazyProduct: !0
                                        })
                                    })
                                }), "horizontal_product_timely" === e.ui && !e.metadata.uiRealDiscount && (0, r.jsx)(Z(), {
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(Ce, {
                                            items: e.items,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            metadata: e.metadata,
                                            description: e.description,
                                            showAllProduct: e.metadata.showAllProduct,
                                            isLazyProduct: !0
                                        })
                                    })
                                }), "horizontal_product_timely_basalam" === e.ui && (0, r.jsx)(Z(), {
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(Pe, {
                                            items: e.items,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            description: e.description,
                                            showAllProduct: null === (c = e.metadata) || void 0 === c ? void 0 : c.showAllProduct
                                        })
                                    })
                                }), "ads_slider" === e.ui && (0, r.jsx)(Z(), {
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(ge, {
                                            name: e.name,
                                            banners: e.items,
                                            metadata: e.metadata,
                                            className: a().discovery__ads_slider,
                                            isLazy: !0
                                        })
                                    })
                                }), "billboard_image" === e.ui && (0, r.jsx)(C, {
                                    name: e.name,
                                    banners: e.items,
                                    metadata: e.metadata,
                                    noSkeleton: t
                                }), "billboard_video" === e.ui && (0, r.jsx)(Z(), {
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(he, {
                                            video: e.items[0],
                                            name: "billboard_video"
                                        })
                                    })
                                }), "blog_post" === e.ui && (0, r.jsx)(Z(), {
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(ke, {
                                            name: "blog_post",
                                            posts: e.items,
                                            title: e.title,
                                            metadata: e.metadata
                                        })
                                    })
                                }), "horizontal_video_list" === e.ui && (0, r.jsx)(Z(), {
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(xe, {
                                            videos: e.items,
                                            metadata: e.metadata,
                                            name: "horizontal_video_list"
                                        })
                                    })
                                }), "vertical_video_list" === e.ui && (0, r.jsx)(Z(), {
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(ye, {
                                            verticalModeVideo: !0,
                                            videos: e.items,
                                            name: "vertical_video_list",
                                            metadata: e.metadata
                                        })
                                    })
                                }), "top_reels_review_slider" === e.ui && (0, r.jsx)(Z(), {
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(fe, {
                                            metadata: e.result.at(0).metadata
                                        })
                                    })
                                }), "top_reels_business_slider" === e.ui && (0, r.jsx)(Z(), {
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(fe, {
                                            metadata: e.result.at(0).metadata
                                        })
                                    })
                                }), "horizontal_vendor_with_chat" === e.ui && (0, r.jsx)(Z(), {
                                    fluid: !0,
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(je, {
                                            items: e.result,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            description: e.description
                                        })
                                    })
                                }), "horizontal_pgp_popular" === e.ui && (0, r.jsx)(Z(), {
                                    fluid: !l.isPc,
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(we, {
                                            items: e.items,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            description: e.description,
                                            isLazyProduct: !0
                                        })
                                    })
                                }), "horizontal_vendor_coupons" === e.ui && (0, r.jsx)(Z(), {
                                    fluid: !l.isPc,
                                    children: (0, r.jsx)("div", {
                                        style: {
                                            display: i ? "block" : "none"
                                        },
                                        children: (0, r.jsx)(ze, {
                                            items: e,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            description: e.description
                                        })
                                    })
                                })]
                            })
                        }, "".concat(n, "-").concat(e.ui))
                    })
                })
            }
        },
        56637: function(e, o, t) {
            "use strict";
            t.d(o, {
                Z: function() {
                    return u
                }
            });
            var r = t(32930),
                n = t(126),
                i = t.n(n),
                l = t(5164),
                a = t(81433),
                s = t.n(a),
                d = t(70437),
                c = t.n(d);

            function u() {
                return (0, r.jsx)(s(), {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    className: i()["horizontal-category-skeleton"],
                    children: (0, r.jsx)("div", {
                        className: i()["horizontal-category-skeleton__items"],
                        children: (0, l.generateArray)(10).map(function(e) {
                            return (0, r.jsxs)("div", {
                                className: i()["horizontal-category-skeleton__item"],
                                children: [(0, r.jsx)(c(), {
                                    height: 32,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)",
                                    className: i()["horizontal-category-skeleton__item-icon"]
                                }), (0, r.jsx)(c(), {
                                    width: 0 === e ? 67 : 1 === e ? 54 : 96,
                                    height: 21,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)",
                                    className: i()["horizontal-category-skeleton__item-text"]
                                })]
                            }, e)
                        })
                    })
                })
            }
        },
        30162: function(e, o, t) {
            "use strict";
            t.r(o);
            var r = t(32930),
                n = t(40877),
                i = t(27434),
                l = t(2347),
                a = t(126),
                s = t.n(a),
                d = t(92369),
                c = t(45835),
                u = t(53278),
                _ = t.n(u),
                v = t(93222),
                p = t.n(v),
                m = function(e) {
                    requestIdleCallback(function() {
                        (0, d.publishEvent)("homeClick", {
                            item: "".concat(e),
                            componentName: "horizontal_category"
                        })
                    })
                };
            o.default = (0, i.memo)(function(e) {
                var o = e.items,
                    t = e.className,
                    i = e.isLazy,
                    a = void 0 !== i && i,
                    d = (0, c.b)().ua,
                    u = d.isPc ? p() : "div",
                    v = d.isPc ? p().Item : "div";
                return (0, r.jsx)("div", {
                    className: (0, n.Z)(s()["navigation-discovery"], t),
                    children: (0, r.jsx)(u, {
                        navigation: !0,
                        className: s()["navigation-discovery__slider"],
                        children: o.map(function(e, o) {
                            return (0, r.jsx)(v, {
                                className: s()["navigation-discovery__slider-item"],
                                children: (0, r.jsxs)(l.Z, {
                                    href: e.link,
                                    prefetch: !1,
                                    onClick: function() {
                                        return m(o + 1)
                                    },
                                    className: s()["navigation-discovery__slider-content"],
                                    children: [(0, r.jsx)(_(), {
                                        src: e.icon,
                                        ratio: 1,
                                        lazy: a,
                                        className: s()["navigation-discovery__slider-item-icon"]
                                    }), (0, r.jsx)("span", {
                                        className: (0, n.Z)(s()["navigation-discovery__slider-item-title"]),
                                        children: e.title
                                    })]
                                })
                            }, o)
                        })
                    })
                })
            })
        },
        1692: function(e, o, t) {
            "use strict";
            t.d(o, {
                Z: function() {
                    return b
                }
            });
            var r = t(32930),
                n = t(40877),
                i = t(50874),
                l = t.n(i),
                a = t(6259),
                s = t.n(a),
                d = t(81433),
                c = t.n(d),
                u = t(70437),
                _ = t.n(u);

            function v(e) {
                var o = e.className,
                    t = e.isHorizontal,
                    i = void 0 !== t && t,
                    l = e.gridMode,
                    a = void 0 !== l && l;
                return (0, r.jsx)("div", {
                    className: (0, n.Z)(o, s()["group-card-skeleton"], s()["group-card-skeleton--".concat(i ? "horizontal" : "vertical")], _define_property({}, s()["group-card-skeleton--grid-mode"], a)),
                    children: (0, r.jsxs)(c(), {
                        display: "flex",
                        flexDirection: i ? "row" : "column",
                        children: [(0, r.jsx)(_(), {
                            className: s()["group-card-skeleton__image"]
                        }), (0, r.jsxs)("div", {
                            className: s()["group-card-skeleton__content"],
                            children: [(0, r.jsx)(_(), {
                                height: "44px",
                                width: "100%",
                                radius: "2px",
                                className: s()["group-card-skeleton__title"]
                            }), (0, r.jsxs)("div", {
                                className: s()["group-card-skeleton__vendor"],
                                children: [(0, r.jsx)(_(), {
                                    height: i ? "16px" : "24px",
                                    width: "24px"
                                }), (0, r.jsx)(_(), {
                                    height: i ? "16px" : "24px",
                                    width: "60%"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: s()["group-card-skeleton__vendor"],
                                children: [(0, r.jsx)(_(), {
                                    height: i ? "16px" : "20px",
                                    width: "20px"
                                }), (0, r.jsx)(_(), {
                                    height: i ? "16px" : "20px",
                                    width: "70%"
                                })]
                            }), (0, r.jsx)(c(), {
                                display: "flex",
                                justifyContent: "flex-end",
                                mt: 12,
                                children: (0, r.jsx)(_(), {
                                    height: "29px",
                                    width: "70px",
                                    radius: "2px"
                                })
                            })]
                        })]
                    })
                })
            }
            v.propType = {
                className: l().string,
                isHorizontal: l().bool
            };
            var p = t(45835),
                m = t(80966),
                h = t.n(m),
                g = t(93222),
                k = t.n(g),
                b = function() {
                    var e = (0, p.b)().ua,
                        o = e.isPc ? k() : "div",
                        t = e.isPc ? k().Item : "div";
                    return (0, r.jsxs)("section", {
                        className: h().hpp,
                        children: [(0, r.jsx)("div", {
                            className: h().header,
                            children: (0, r.jsx)("div", {
                                className: h().header__content,
                                children: (0, r.jsx)(_(), {
                                    className: (0, n.Z)(h().header__title),
                                    width: "20%",
                                    height: 27
                                })
                            })
                        }), (0, r.jsx)(c(), {
                            children: (0, r.jsx)(o, {
                                className: h().hpp__carousel,
                                children: Array.from({
                                    length: 5
                                }).map(function(e, o) {
                                    return (0, r.jsx)(t, {
                                        className: h()["hpp__carousel-item"],
                                        children: (0, r.jsx)(v, {})
                                    }, o)
                                })
                            })
                        })]
                    })
                }
        },
        69064: function(e, o, t) {
            "use strict";
            t.d(o, {
                Z: function() {
                    return _
                }
            });
            var r = t(32930),
                n = t(40877),
                i = t(92303),
                l = t.n(i),
                a = t(81433),
                s = t.n(a),
                d = t(70437),
                c = t.n(d),
                u = t(19616);

            function _(e) {
                var o = e.hasLogo,
                    t = void 0 !== o && o,
                    i = e.hasLabels,
                    a = void 0 !== i && i,
                    d = e.discountMode,
                    _ = void 0 !== d && d,
                    v = e.hasBackground,
                    p = void 0 !== v && v,
                    m = e.multipleLabels,
                    h = void 0 !== m && m,
                    g = e.showPercentIcon,
                    k = void 0 !== g && g,
                    b = e.discountModeWithTimer,
                    y = void 0 !== b && b;
                return (0, r.jsxs)(s(), {
                    className: (0, n.Z)(l()["horizontal-product-popular-skeleton"], _define_property({}, l()["horizontal-product-popular-skeleton--with-percent-icon"], k)),
                    children: [t && (0, r.jsx)(s(), {
                        className: l()["horizontal-product-popular-skeleton__circle"]
                    }), (0, r.jsxs)(s(), {
                        className: (0, n.Z)(l()["horizontal-product-popular-skeleton__content"], _define_property({}, l()["horizontal-product-popular-skeleton__content--has-bg"], p)),
                        children: [(0, r.jsx)(s(), {
                            mb: 22,
                            pr: 24,
                            pl: 24,
                            children: (0, r.jsxs)("div", {
                                className: l()["horizontal-product-popular-skeleton__title-wrapper"],
                                children: [k && (0, r.jsx)(c(), {
                                    className: l()["horizontal-product-popular-skeleton__percent-icon"],
                                    width: 32,
                                    height: 32,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)"
                                }), (0, r.jsx)(c(), {
                                    className: (0, n.Z)(l()["horizontal-product-popular-skeleton__title"]),
                                    width: 150,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)"
                                })]
                            })
                        }), (0, r.jsxs)("div", {
                            className: l()["horizontal-product-popular-skeleton__items"],
                            children: [(0, r.jsx)(u.Z, {
                                className: l()["horizontal-product-popular-skeleton__item"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)",
                                gridMode: !0,
                                discountMode: _,
                                hasLabels: a,
                                multipleLabels: h,
                                discountModeWithTimer: y
                            }), (0, r.jsx)(u.Z, {
                                className: l()["horizontal-product-popular-skeleton__item"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)",
                                gridMode: !0,
                                discountMode: _,
                                hasLabels: a,
                                multipleLabels: h,
                                discountModeWithTimer: y
                            })]
                        })]
                    })]
                })
            }
        },
        88423: function(e, o, t) {
            "use strict";

            function r(e, o) {
                var t = {
                    from: "explore",
                    page: (null == e ? void 0 : e.tabName) || null,
                    component: null == e ? void 0 : e.name
                };
                return o && (t.more = !0), t
            }
            t.d(o, {
                Z: function() {
                    return r
                }
            })
        },
        19616: function(e, o, t) {
            "use strict";
            var r = t(32930),
                n = t(40877),
                i = t(50874),
                l = t.n(i),
                a = t(36379),
                s = t.n(a),
                d = t(81433),
                c = t.n(d),
                u = t(70437),
                _ = t.n(u),
                v = t(45835);

            function p(e) {
                var o = e.className,
                    t = e.gridMode,
                    i = void 0 !== t && t,
                    l = e.hasLabels,
                    a = void 0 !== l && l,
                    d = e.isHorizontal,
                    u = void 0 !== d && d,
                    p = e.discountMode,
                    m = void 0 !== p && p,
                    h = e.multipleLabels,
                    g = void 0 !== h && h,
                    k = e.discountModeWithTimer,
                    b = void 0 !== k && k,
                    y = (0, v.b)().ua;
                return (0, r.jsx)("div", {
                    className: (0, n.Z)(o, s()["product-card-skeleton"], s()["product-card-skeleton--".concat(u ? "horizontal" : "vertical")], _define_property({}, s()["product-card-skeleton--grid-mode"], i)),
                    children: (0, r.jsxs)(c(), {
                        display: "flex",
                        flexDirection: u ? "row" : "column",
                        children: [(0, r.jsx)(_(), {
                            className: s()["product-card-skeleton__image"]
                        }), (0, r.jsxs)("div", {
                            className: s()["product-card-skeleton__content"],
                            children: [(0, r.jsx)(_(), {
                                height: y.isPc ? "50px" : "44px",
                                width: "100%",
                                radius: "2px",
                                className: s()["product-card-skeleton__title"]
                            }), (0, r.jsxs)("div", {
                                className: s()["product-card-skeleton__vendor"],
                                children: [(0, r.jsx)(_(), {
                                    height: u ? "20px" : "24px",
                                    width: "24px"
                                }), (0, r.jsx)(_(), {
                                    height: u ? "20px" : "24px",
                                    width: "60%"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: s()["product-card-skeleton__vendor"],
                                children: [(0, r.jsx)(_(), {
                                    height: "20px",
                                    width: "20px"
                                }), (0, r.jsx)(_(), {
                                    height: "20px",
                                    width: "70%"
                                })]
                            }), b ? (0, r.jsx)(c(), {
                                className: s()["product-card-skeleton__discount"],
                                children: (0, r.jsx)(_(), {
                                    height: "107px",
                                    width: "100%"
                                })
                            }) : m ? (0, r.jsx)(c(), {
                                className: s()["product-card-skeleton__discount"],
                                children: (0, r.jsx)(_(), {
                                    height: "77px",
                                    width: "100%"
                                })
                            }) : (0, r.jsx)(c(), {
                                display: "flex",
                                justifyContent: "flex-end",
                                mt: 12,
                                children: (0, r.jsx)(_(), {
                                    height: "29px",
                                    width: "70px",
                                    radius: "2px"
                                })
                            }), g ? (0, r.jsxs)(c(), {
                                className: s()["product-card-skeleton__labels"],
                                children: [(0, r.jsx)(_(), {
                                    height: "22px",
                                    width: "99px",
                                    radius: "3px"
                                }), (0, r.jsx)(_(), {
                                    height: "22px",
                                    width: "99px",
                                    radius: "3px"
                                })]
                            }) : a ? (0, r.jsx)(c(), {
                                className: s()["product-card-skeleton__labels"],
                                children: (0, r.jsx)(_(), {
                                    height: "22px",
                                    width: "99px",
                                    radius: "3px"
                                })
                            }) : (0, r.jsxs)("div", {
                                className: s()["product-card-skeleton__footer"],
                                children: [(0, r.jsx)(_(), {
                                    height: "20px",
                                    width: "40%",
                                    radius: "3px"
                                }), (0, r.jsx)(_(), {
                                    height: "20px",
                                    width: "30%",
                                    radius: "3px"
                                })]
                            })]
                        })]
                    })
                })
            }
            p.propType = {
                className: l().string,
                isHorizontal: l().bool
            }, o.Z = p
        },
        24311: function(e, o, t) {
            "use strict";
            t.d(o, {
                Xp: function() {
                    return p
                },
                xP: function() {
                    return v
                }
            });
            var r = t(32930),
                n = t(5164),
                i = t(33635),
                l = t.n(i),
                a = t(81433),
                s = t.n(a),
                d = t(70437),
                c = t.n(d),
                u = t(45835);

            function _() {
                return (0, r.jsx)("div", {
                    className: l()["reel-skeleton"],
                    children: (0, r.jsx)(c(), {
                        backgroundColor: "var(--gray-100)",
                        waveColor: "var(--gray-200)",
                        className: l()["reel-skeleton__item"]
                    })
                })
            }

            function v(e) {
                var o = e.count;
                return (0, n.range)(Number(o) || 6).map(function(e, o) {
                    return (0, r.jsx)(_, {}, o)
                })
            }

            function p() {
                var e = (0, u.b)().ua.isPc;
                return (0, r.jsxs)(s(), {
                    mb: 56,
                    className: l()["reels-slider-skeleton-container"],
                    children: [(0, r.jsx)(s(), {
                        mb: 14,
                        children: (0, r.jsx)(c(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100,
                            height: 32
                        })
                    }), (0, r.jsx)("div", {
                        className: l()["reels-slider-skeleton"],
                        children: (0, n.range)(e ? 7 : 3).map(function(e, o) {
                            return (0, r.jsx)(_, {}, o)
                        })
                    })]
                })
            }
        },
        16911: function(e) {
            e.exports = {
                "banner-discovery": "KM83UW",
                "banner-discovery__image": "AWku7S",
                "banner-discovery__content": "FqkOsQ",
                "banner-discovery__content-title": "Exs15h"
            }
        },
        24993: function(e) {
            e.exports = {
                "billboard-image-skeleton": "oXabiQ",
                "billboard-image-skeleton__item": "KsK8ZA"
            }
        },
        87930: function(e) {
            e.exports = {
                "banner-slider-discovery": "Bdc6_o",
                "banner-slider-discovery__content": "w3DqPB",
                "banner-slider-discovery__content--hidden": "JwnmIG",
                "banner-slider-discovery__slider": "NpZdY8",
                "banner-slider-discovery__slider-item": "LISgcL",
                "banner-slider-discovery__next": "InXMPK",
                "banner-slider-discovery__prev": "LQ45iB",
                "banner-slider-discovery__next--active": "GuTbQj",
                "banner-slider-discovery__prev--active": "YsBt__",
                "banner-slider-discovery__pagination": "zifMtn",
                "banner-slider-discovery__pagination-btn": "dmkX4_",
                "banner-slider-discovery__pagination-btn--active": "jOQmv_"
            }
        },
        51491: function(e) {
            e.exports = {
                discovery__ads_slider: "L4Lxcp",
                "discovery-wrapper": "ZM9CdW",
                "banner-slider-discovery--low-space": "dJGagd"
            }
        },
        59785: function(e) {
            e.exports = {
                "skeleton-overflow-hidden": "oqCLhd",
                "skeleton-blog": "Egc9Z5",
                "skeleton-blog__posts": "_0vX7TG",
                "skeleton-blog__post": "YHMCVt",
                "skeleton-blog__post-img": "hWFzEq",
                "skeleton-horizontal-video-slider__items": "_7GHrXe",
                "skeleton-horizontal-video-slider__item": "_6pTKXs",
                "skeleton-horizontal-video-slider__item-img": "rcl5F_",
                "skeleton-vertical-video-slider__items": "cR0eIy",
                "skeleton-vertical-video-slider__item": "yGzcvS",
                "skeleton-vertical-video-slider__item-img": "lZvE_8",
                "skeleton-billboard-image": "fOe_FJ",
                "skeleton-billboard-image__item": "wFuWal",
                "skeleton-billboard-image-ads": "I_Xyh4",
                "skeleton-billboard-image-ads__item": "fcgreh",
                "skeleton-horizontal-vendor-with-chat": "KL2CJq",
                "skeleton-horizontal-vendor-with-chat__header": "C6LTen",
                "skeleton-horizontal-vendor-with-chat__items": "_8x6Nbj",
                "skeleton-horizontal-vendor-with-chat__item": "_8BYBYc",
                "skeleton-horizontal-vendor-coupons": "gYXMFp",
                "skeleton-horizontal-vendor-coupons__title": "HkswR6",
                "skeleton-horizontal-vendor-coupons__subtitle": "i_AFB4",
                "skeleton-horizontal-vendor-coupons__divider": "TXlN0K",
                "skeleton-horizontal-vendor-coupons__items": "_4iHHxN",
                "skeleton-horizontal-vendor-coupons__item": "_5FPWsV",
                "skeleton-horizontal-vendor-coupons__item-header": "M4gDV7",
                "skeleton-horizontal-vendor-coupons__item-header-icon": "ohnuQs",
                "skeleton-horizontal-vendor-coupons__item-header-title": "It7HZI",
                "skeleton-horizontal-vendor-coupons__item-header-subtitle": "ChIID0",
                "skeleton-horizontal-vendor-coupons__item-images-container": "_54mmwX",
                "skeleton-horizontal-vendor-coupons__item-images-vendor": "wQvJTT",
                "skeleton-horizontal-vendor-coupons__item-images": "fI92L6",
                "skeleton-horizontal-vendor-coupons__item-image": "yoP7J_",
                "skeleton-horizontal-vendor-coupons__item-image-img": "ldEw2s"
            }
        },
        126: function(e) {
            e.exports = {
                "navigation-discovery": "LpqyEl",
                "navigation-discovery__next": "_7TSvYz",
                "navigation-discovery__prev": "V9EIwX",
                "navigation-discovery__slider": "Qv8qa8",
                "navigation-discovery__slider-item": "RtLXtV",
                "navigation-discovery__slider-content": "XH7tx3",
                "navigation-discovery__slider-item-icon": "VD520w",
                "navigation-discovery__slider-item-title": "_kg8zP",
                "navigation-discovery__slider-item-title--white": "_7ldZd6",
                "horizontal-category-skeleton": "B6NeII",
                "horizontal-category-skeleton__items": "yJUVn6",
                "horizontal-category-skeleton__item": "_5sA0SR",
                "horizontal-category-skeleton__item-icon": "XMpudK",
                "horizontal-category-skeleton__item-text": "AeDl1k"
            }
        },
        80966: function(e) {
            e.exports = {
                hpp: "coSH33",
                header: "mvU80b",
                header__content: "_FZYHl",
                header__title: "EtR43l",
                header__description: "WtHpEr",
                header__link: "__WxWl",
                header__icon: "_0HDiui",
                hpp__section: "KCbLbw",
                hpp__carousel: "_3c0M_M",
                "hpp__carousel-item": "PAtBIr",
                hpp__product: "ONfKcx",
                "hpp__more-card": "_6cIlfi"
            }
        },
        92303: function(e) {
            e.exports = {
                "horizontal-product-popular-skeleton__circle": "bouhd2",
                "horizontal-product-popular-skeleton__content": "fk_J5_",
                "horizontal-product-popular-skeleton__content--has-bg": "_h_ARO",
                "horizontal-product-popular-skeleton__title-wrapper": "V_Pfnv",
                "horizontal-product-popular-skeleton__percent-icon": "IOdsoG",
                "horizontal-product-popular-skeleton__items": "xMuQPk",
                "horizontal-product-popular-skeleton__item": "wjxRMA",
                "horizontal-product-popular-skeleton__title": "grhYcI",
                "horizontal-product-popular-skeleton--with-percent-icon": "mWBnWl"
            }
        },
        1822: function(e) {
            e.exports = {
                "single-slider-skeleton": "IoI96p",
                "single-slider-skeleton__items": "OA33Nf",
                "single-slider-skeleton__item": "BCc29X",
                "horizontal-quick-access-skeleton": "Fxp6ZS",
                "horizontal-quick-access-skeleton__items": "RROmZM",
                "horizontal-quick-access-skeleton__item": "GM6WZh",
                "horizontal-quick-access-skeleton__item-image": "GCVWkX",
                "horizontal-quick-access-skeleton__item-text": "hM1oSY",
                "horizontal-product-popular-skeleton": "eiOtdI",
                "horizontal-product-popular-skeleton__title": "H933XO",
                "horizontal-product-popular-skeleton__items": "_55To3L",
                "horizontal-product-popular-skeleton__item": "u_pa5m",
                "horizontal-product-popular-skeleton__item-image-sk": "P4_0qf",
                "horizontal-product-popular-skeleton__item-body": "iC_xob",
                "horizontal-product-popular-skeleton__item-product-title-sk": "UkdM0a",
                "horizontal-product-popular-skeleton__item-product-vendor-rate": "_7CvSxf",
                "horizontal-product-popular-skeleton__item-product-vendor-sk": "COMlJz",
                "horizontal-product-popular-skeleton__item-product-rate-sk": "LveBe3",
                "horizontal-product-popular-skeleton__item-product-price-tag": "_0JcXss",
                "horizontal-product-popular-skeleton__item-product-price-sk": "GekJxo",
                "horizontal-product-popular-skeleton__item-product-tag-sk": "pLTrps",
                "horizontal-product-popular-skeleton__item-product-add-sk": "Vt5Ws9",
                "horizontal-product-timely-skeleton": "gPDk1Y",
                "horizontal-product-timely-skeleton__header": "pyPUzO",
                "horizontal-product-timely-skeleton__header-icon": "_7kNaG9",
                "horizontal-product-timely-skeleton__icon": "_58F0gp",
                "horizontal-product-timely-skeleton__header-content": "mE0bqm",
                "horizontal-product-timely-skeleton__header-title": "AJLB3b",
                "horizontal-product-timely-skeleton__header-show-all": "ejCUr9",
                "horizontal-product-timely-skeleton__items": "_4slDEB",
                "horizontal-product-timely-skeleton__item": "_7wZome"
            }
        },
        6259: function(e) {
            e.exports = {
                "group-card-skeleton": "Aj6uly",
                "group-card-skeleton--grid-mode": "bcOZ4W",
                "group-card-skeleton__footer": "_5BfRzc",
                "group-card-skeleton__content": "Th5Exv",
                "group-card-skeleton__image": "Vg6_mF",
                "group-card-skeleton__vendor": "mEwnsL",
                "group-card-skeleton--vertical": "_3CNG7i",
                "group-card-skeleton__title": "vFCw7p",
                "group-card-skeleton--horizontal": "xWQ47H"
            }
        },
        36379: function(e) {
            e.exports = {
                "product-card-skeleton": "wj3kuD",
                "product-card-skeleton__content": "vMMWQ3",
                "product-card-skeleton--grid-mode": "NodE4C",
                "product-card-skeleton__footer": "d08g_k",
                "product-card-skeleton__image": "WeDPS6",
                "product-card-skeleton__vendor": "_8paCSB",
                "product-card-skeleton__labels": "mAP5xK",
                "product-card-skeleton__discount": "sUCTUO",
                "product-card-skeleton--vertical": "KmDp__",
                "product-card-skeleton--horizontal": "Yq9jOO",
                "product-card-skeleton__title": "MFoGVP"
            }
        },
        33635: function(e) {
            e.exports = {
                "reel-skeleton": "EKh4w3",
                "reel-skeleton__item": "_KIpeY",
                "reels-skeleton": "JnO1t3",
                "reels-slider-skeleton": "h2nH_k",
                "reels-slider-skeleton-container": "u2_WDz"
            }
        }
    }
]);