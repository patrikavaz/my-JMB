function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var n = 0, o = new Array(r); n < r; n++) o[n] = e[n];
    return o
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _define_property(e, r, n) {
    return r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = n, e
}

function _iterable_to_array_limit(e, r) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var o, i, t = [],
            a = !0,
            l = !1;
        try {
            for (n = n.call(e); !(a = (o = n.next()).done) && (t.push(o.value), !r || t.length !== r); a = !0);
        } catch (e) {
            l = !0, i = e
        } finally {
            try {
                a || null == n.return || n.return()
            } finally {
                if (l) throw i
            }
        }
        return t
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _object_spread(e) {
    for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {},
            o = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), o.forEach(function(r) {
            _define_property(e, r, n[r])
        })
    }
    return e
}

function ownKeys(e, r) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), n.push.apply(n, o)
    }
    return n
}

function _object_spread_props(e, r) {
    return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
    }), e
}

function _sliced_to_array(e, r) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, r) || _unsupported_iterable_to_array(e, r) || _non_iterable_rest()
}

function _type_of(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _array_like_to_array(e, r) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8020], {
        83719: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return d
                }
            });
            var o = n(32930),
                i = n(40877),
                t = n(24993),
                a = n.n(t),
                l = n(70437),
                s = n.n(l);

            function d(e) {
                var r = e.ratio;
                return (0, o.jsxs)("div", {
                    className: (0, i.Z)([a()["billboard-image-skeleton"]]),
                    children: [(0, o.jsx)("div", {
                        style: {
                            paddingBottom: r ? "".concat((100 * r).toFixed(3), "%") : "80%"
                        }
                    }), (0, o.jsx)(s(), {
                        width: "100%",
                        height: "100%",
                        className: a()["billboard-image-skeleton__item"],
                        backgroundColor: "var(--gray-100)",
                        waveColor: "var(--gray-200)"
                    })]
                })
            }
        },
        46196: function(e, r, n) {
            "use strict";
            var o = n(32930),
                i = n(27434),
                t = n(50874),
                a = n.n(t),
                l = n(94002),
                s = n(58271);

            function d(e) {
                var r = e.children,
                    n = e.fallback,
                    i = void 0 === n ? (0, o.jsx)("div", {}) : n;
                return (0, o.jsx)(l.ErrorBoundary, {
                    fallback: i,
                    onError: s.wJ,
                    children: r
                })
            }
            d.propTypes = {
                children: a().node,
                fallback: a().node
            }, r.Z = (0, i.memo)(d)
        },
        26460: function(e, r, n) {
            "use strict";
            n.d(r, {
                $t: function() {
                    return c
                },
                Iu: function() {
                    return m
                },
                aK: function() {
                    return _
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
                    return v
                }
            });
            var o = n(32930),
                i = n(59785),
                t = n.n(i),
                a = n(81433),
                l = n.n(a),
                s = n(70437),
                d = n.n(s);

            function c() {
                return (0, o.jsxs)(l(), {
                    className: t()["skeleton-horizontal-video-slider"],
                    mb: 32,
                    children: [(0, o.jsx)(l(), {
                        mb: 16,
                        children: (0, o.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100,
                            height: 24
                        })
                    }), (0, o.jsxs)("div", {
                        className: t()["skeleton-horizontal-video-slider__items"],
                        children: [(0, o.jsx)("div", {
                            className: t()["skeleton-horizontal-video-slider__item"],
                            children: (0, o.jsx)(d(), {
                                className: t()["skeleton-horizontal-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, o.jsx)("div", {
                            className: t()["skeleton-horizontal-video-slider__item"],
                            children: (0, o.jsx)(d(), {
                                className: t()["skeleton-horizontal-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, o.jsx)("div", {
                            className: t()["skeleton-horizontal-video-slider__item"],
                            children: (0, o.jsx)(d(), {
                                className: t()["skeleton-horizontal-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        })]
                    })]
                })
            }

            function u() {
                return (0, o.jsxs)(l(), {
                    className: t()["skeleton-vertical-video-slider"],
                    mb: 32,
                    children: [(0, o.jsx)(l(), {
                        mb: 16,
                        children: (0, o.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100,
                            height: 24
                        })
                    }), (0, o.jsxs)("div", {
                        className: t()["skeleton-vertical-video-slider__items"],
                        children: [(0, o.jsx)("div", {
                            className: t()["skeleton-vertical-video-slider__item"],
                            children: (0, o.jsx)(d(), {
                                className: t()["skeleton-vertical-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, o.jsx)("div", {
                            className: t()["skeleton-vertical-video-slider__item"],
                            children: (0, o.jsx)(d(), {
                                className: t()["skeleton-vertical-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, o.jsx)("div", {
                            className: t()["skeleton-vertical-video-slider__item"],
                            children: (0, o.jsx)(d(), {
                                className: t()["skeleton-vertical-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        })]
                    })]
                })
            }

            function v() {
                return (0, o.jsxs)(l(), {
                    className: t()["skeleton-blog"],
                    children: [(0, o.jsx)(l(), {
                        mb: 16,
                        children: (0, o.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100,
                            height: 24
                        })
                    }), (0, o.jsxs)("div", {
                        className: t()["skeleton-blog__posts"],
                        children: [(0, o.jsx)("div", {
                            className: t()["skeleton-blog__post"],
                            children: (0, o.jsx)(d(), {
                                className: t()["skeleton-blog__post-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, o.jsx)("div", {
                            className: t()["skeleton-blog__post"],
                            children: (0, o.jsx)(d(), {
                                className: t()["skeleton-blog__post-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        })]
                    })]
                })
            }

            function _() {
                return (0, o.jsx)(l(), {
                    className: t()["skeleton-billboard-image-ads"],
                    children: (0, o.jsx)("div", {
                        className: t()["skeleton-billboard-image-ads__item"],
                        children: (0, o.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })
                    })
                })
            }

            function p() {
                return (0, o.jsx)(l(), {
                    className: t()["skeleton-billboard-image"],
                    children: (0, o.jsx)("div", {
                        className: t()["skeleton-billboard-image__item"],
                        children: (0, o.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })
                    })
                })
            }

            function m() {
                return (0, o.jsxs)(l(), {
                    className: t()["skeleton-horizontal-vendor-with-chat"],
                    children: [(0, o.jsx)(l(), {
                        pl: 24,
                        pr: 24,
                        mb: 16,
                        children: (0, o.jsx)(d(), {
                            className: t()["skeleton-horizontal-vendor-with-chat__header"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })
                    }), (0, o.jsxs)("div", {
                        className: t()["skeleton-horizontal-vendor-with-chat__items"],
                        children: [(0, o.jsx)(d(), {
                            className: t()["skeleton-horizontal-vendor-with-chat__item"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        }), (0, o.jsx)(d(), {
                            className: t()["skeleton-horizontal-vendor-with-chat__item"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })]
                    })]
                })
            }

            function h() {
                return (0, o.jsxs)(l(), {
                    className: t()["skeleton-horizontal-vendor-coupons"],
                    children: [(0, o.jsxs)(l(), {
                        pl: 24,
                        pr: 24,
                        mb: 16,
                        children: [(0, o.jsx)(d(), {
                            className: t()["skeleton-horizontal-vendor-coupons__title"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        }), (0, o.jsx)(d(), {
                            className: t()["skeleton-horizontal-vendor-coupons__subtitle"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            height: 22,
                            width: 100
                        })]
                    }), (0, o.jsxs)("div", {
                        className: t()["skeleton-horizontal-vendor-coupons__items"],
                        children: [(0, o.jsx)(d(), {
                            className: t()["skeleton-horizontal-vendor-coupons__item"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        }), (0, o.jsx)(d(), {
                            className: t()["skeleton-horizontal-vendor-coupons__item"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })]
                    })]
                })
            }
        },
        18020: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return be
                }
            });
            var o = n(32930),
                i = n(2389),
                t = n.n(i),
                a = n(51491),
                l = n.n(a),
                s = n(40877),
                d = n(2347),
                c = n(16911),
                u = n.n(c),
                v = n(27434),
                _ = n(53278),
                p = n.n(_),
                m = n(92369),
                h = n(56345),
                g = n(45835);

            function b(e) {
                var r = e.banner,
                    n = e.metadata,
                    i = e.lazy,
                    t = void 0 === i || i,
                    a = e.sectionName,
                    l = e.itemName,
                    s = (0, g.b)().ua,
                    c = (0, v.useMemo)(function() {
                        return (null == n ? void 0 : n.size) ? s.isPc ? n.size.desktop.height / n.size.desktop.width : n.size.mobile.height / n.size.mobile.width : null
                    }, [n, s.isPc]),
                    _ = (0, v.useCallback)(function() {
                        (0, m.publishEvent)("homeClick", {
                            item: l,
                            componentName: a
                        })
                    }, [l, a]),
                    b = (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(p(), {
                            lazy: t,
                            ratio: c,
                            alt: (null == n ? void 0 : n.title) || "",
                            className: u()["banner-discovery__image"],
                            src: (s.isPc ? r.src.pc : r.src.mobile) || h.F.src
                        }), n.title && (0, o.jsx)("div", {
                            className: u()["banner-discovery__content"],
                            children: (0, o.jsx)("span", {
                                className: u()["banner-discovery__content-title"],
                                children: n.title
                            })
                        })]
                    });
                return r.link ? (0, o.jsx)(d.Z, {
                    "data-from": "home",
                    prefetch: !1,
                    href: r.link,
                    className: u()["banner-discovery"],
                    onClick: _,
                    children: b
                }) : (0, o.jsx)("div", {
                    className: u()["banner-discovery"],
                    children: b
                })
            }
            var y = n(87930),
                x = n.n(y),
                f = n(83719),
                k = n(65074),
                j = n.n(k),
                w = n(93222),
                z = n.n(w),
                N = n(5164),
                C = (0, v.memo)(function(e) {
                    var r = e.name,
                        n = e.banners,
                        i = e.metadata,
                        t = e.className,
                        a = e.speed,
                        l = void 0 === a ? 30 : a,
                        d = e.loop,
                        c = void 0 !== d && d,
                        u = e.delay,
                        _ = void 0 === u ? 6e3 : u,
                        p = e.isLazy,
                        m = void 0 !== p && p,
                        h = e.noSkeleton,
                        y = void 0 !== h && h,
                        k = (0, g.b)().ua,
                        w = (0, v.useRef)(),
                        C = _sliced_to_array((0, v.useState)(0), 2),
                        P = C[0],
                        Z = C[1],
                        S = _sliced_to_array((0, v.useState)(!0), 2),
                        L = S[0],
                        M = S[1],
                        O = _sliced_to_array((0, v.useState)(!1), 2),
                        D = O[0],
                        A = O[1],
                        I = _sliced_to_array((0, v.useState)(!1), 2),
                        T = I[0],
                        E = I[1],
                        B = (0, v.useMemo)(function() {
                            return "true" === i.autoplay ? [(0, N.BsLightCarouselAutoplayPlugin)({
                                delay: _
                            })] : void 0
                        }, [i, _]),
                        G = (null == n ? void 0 : n.length) > 1,
                        W = k.isPc && (null == n ? void 0 : n.length) > 1,
                        F = (0, v.useCallback)(function(e) {
                            !y && (E(!0), G && Z(e.selectedScrollSnap()), W && (M(function() {
                                return e.canScrollNext()
                            }), A(function() {
                                return e.canScrollPrev()
                            })))
                        }, [y, W, G]),
                        H = (0, v.useCallback)(function(e) {
                            G && Z(e.selectedScrollSnap()), W && (M(function() {
                                return e.canScrollNext()
                            }), A(function() {
                                return e.canScrollPrev()
                            }))
                        }, [W, G]),
                        K = (0, v.useCallback)(function() {
                            var e, r, n, o, i, t;
                            null === (r = w.current) || void 0 === r || null === (e = r.api) || void 0 === e || e.scrollNext(), null === (t = w.current) || void 0 === t || null === (i = t.api) || void 0 === i || null === (o = i.plugins()) || void 0 === o || null === (n = o.autoplay) || void 0 === n || n.reset()
                        }, []),
                        q = (0, v.useCallback)(function() {
                            var e, r, n, o, i, t;
                            null === (r = w.current) || void 0 === r || null === (e = r.api) || void 0 === e || e.scrollPrev(), null === (t = w.current) || void 0 === t || null === (i = t.api) || void 0 === i || null === (o = i.plugins()) || void 0 === o || null === (n = o.autoplay) || void 0 === n || n.reset()
                        }, []),
                        R = (0, v.useCallback)(function(e) {
                            var r, n, o, i, t, a;
                            null === (n = w.current) || void 0 === n || null === (r = n.api) || void 0 === r || r.scrollTo(e), null === (a = w.current) || void 0 === a || null === (t = a.api) || void 0 === t || null === (i = t.plugins()) || void 0 === i || null === (o = i.autoplay) || void 0 === o || o.reset()
                        }, []),
                        X = (0, v.useCallback)(function(e) {
                            w.current = e, w.current && (0, N.isClientSide)() && (window.stopMainCarouselAutoplay = function() {
                                var e, r, n, o;
                                null === (o = w.current) || void 0 === o || null === (n = o.api) || void 0 === n || null === (r = n.plugins()) || void 0 === r || null === (e = r.autoplay) || void 0 === e || e.stop()
                            }, window.startMainCarouselAutoplay = function() {
                                var e, r, n, o;
                                null === (o = w.current) || void 0 === o || null === (n = o.api) || void 0 === n || null === (r = n.plugins()) || void 0 === r || null === (e = r.autoplay) || void 0 === e || e.play()
                            })
                        }, []);
                    (0, v.useEffect)(function() {
                        y || 1 !== (null == n ? void 0 : n.length) || E(!0)
                    }, [null == n ? void 0 : n.length, y]);
                    var Q = (0, v.useMemo)(function() {
                        var e, r, o, t, a, l, s, d;
                        return (null == i ? void 0 : i.size) && (null == n ? void 0 : n[0]) ? k.isPc ? ((null == i || null === (r = i.size) || void 0 === r || null === (e = r.desktop) || void 0 === e ? void 0 : e.height) || 0) / ((null == i || null === (t = i.size) || void 0 === t || null === (o = t.desktop) || void 0 === o ? void 0 : o.width) || 0) : ((null == i || null === (l = i.size) || void 0 === l || null === (a = l.mobile) || void 0 === a ? void 0 : a.height) || 0) / ((null == i || null === (d = i.size) || void 0 === d || null === (s = d.mobile) || void 0 === s ? void 0 : s.width) || 0) : null
                    }, [n, null == i ? void 0 : i.size, k.isPc]);
                    return (0, o.jsxs)("div", {
                        className: (0, s.Z)([x()["banner-slider-discovery"], t]),
                        children: [!T && !y && (0, o.jsx)(f.Z, {
                            ratio: Q
                        }), (0, o.jsxs)("div", {
                            className: (0, s.Z)(x()["banner-slider-discovery__content"], _define_property({}, x()["banner-slider-discovery__content--hidden"], !T && !y)),
                            children: [W && (0, o.jsxs)(o.Fragment, {
                                children: [(0, o.jsx)(j(), {
                                    className: (0, s.Z)(x()["banner-slider-discovery__next"], _define_property({}, x()["banner-slider-discovery__next--active"], L)),
                                    color: "secondary",
                                    variant: "outline",
                                    icon: "bi-angle-left",
                                    size: "md",
                                    square: !0,
                                    onClick: K
                                }), (0, o.jsx)(j(), {
                                    className: (0, s.Z)(x()["banner-slider-discovery__prev"], _define_property({}, x()["banner-slider-discovery__prev--active"], D)),
                                    color: "secondary",
                                    variant: "outline",
                                    icon: "bi-angle-right",
                                    size: "md",
                                    square: !0,
                                    onClick: q
                                })]
                            }), 1 === (null == n ? void 0 : n.length) && (0, o.jsx)(b, {
                                lazy: m,
                                sectionName: r,
                                banner: n[0],
                                metadata: i,
                                itemName: "".concat(r, "-", 0)
                            }), (null == n ? void 0 : n.length) > 1 && (0, o.jsx)(z(), {
                                loop: c,
                                duration: l,
                                ref: X,
                                plugins: B,
                                onInit: F,
                                onSelect: H,
                                children: null == n ? void 0 : n.map(function(e, n) {
                                    return (0, o.jsx)(z().Item, {
                                        className: x()["banner-slider-discovery__slider-item"],
                                        children: (0, o.jsx)(b, {
                                            banner: e,
                                            sectionName: r,
                                            lazy: 0 !== n || m,
                                            metadata: i,
                                            itemName: "".concat(r, "-", 0)
                                        })
                                    }, n)
                                })
                            }), G && (0, o.jsx)("div", {
                                className: x()["banner-slider-discovery__pagination"],
                                children: n.map(function(e, r) {
                                    return (0, o.jsx)("button", {
                                        "aria-label": "اسلاید بعدی",
                                        className: (0, s.Z)(x()["banner-slider-discovery__pagination-btn"], _define_property({}, x()["banner-slider-discovery__pagination-btn--active"], r === P)),
                                        onClick: function() {
                                            return R(r)
                                        }
                                    }, r)
                                })
                            })]
                        })]
                    })
                }),
                P = n(177),
                Z = n.n(P),
                S = n(26491),
                L = n(24311);

            function M(e) {
                var r = e.isPc,
                    n = e.children,
                    i = e.isServer,
                    t = e.index,
                    a = void 0 === t ? 0 : t,
                    l = e.skeleton,
                    s = void 0 === l ? null : l,
                    d = e.rootMargin,
                    c = void 0 === d ? "400px" : d,
                    u = e.immediateRenderCount,
                    _ = void 0 === u ? 2 : u,
                    p = _sliced_to_array((0, v.useState)(a < _ || i), 2),
                    m = p[0],
                    h = p[1],
                    g = (0, v.useRef)(null);
                return (0, v.useEffect)(function() {
                    if (!m) {
                        var e = new IntersectionObserver(function(r) {
                            _sliced_to_array(r, 1)[0].isIntersecting && (h(!0), e.disconnect())
                        }, {
                            rootMargin: c,
                            threshold: 0
                        });
                        return g.current && e.observe(g.current),
                            function() {
                                return e.disconnect()
                            }
                    }
                }, [m, c]), (0, o.jsx)("div", {
                    ref: g,
                    children: r ? m ? n : (0, o.jsx)(Z(), {
                        children: s
                    }) : m ? n : s
                })
            }
            var O = n(46196),
                D = n(56637),
                A = n(88107),
                I = n(88423);

            function T(e) {
                var r;
                return {
                    ui: e.ui,
                    name: e.name,
                    title: e.title,
                    description: e.description,
                    metadata: e.metaData || {},
                    moreLink: null === (r = e.moreLink) || void 0 === r ? void 0 : r.replace("https://basalam.com", "")
                }
            }

            function E(e) {
                var r = e.result[0].metadata;
                return _object_spread_props(_object_spread({}, T(e)), {
                    metadata: _object_spread_props(_object_spread({}, e.metaData), {
                        size: r.size,
                        autoplay: r.autoSlide || r.autoPlay
                    }),
                    items: r.images.map(function(e) {
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

            function B(e) {
                var r = e.result[0].metadata;
                return _object_spread_props(_object_spread({}, T(e)), {
                    items: r.videos.slice(0, 20),
                    metadata: _object_spread_props(_object_spread({}, e.metaData), {
                        title: r.title,
                        size: r.size
                    })
                })
            }
            n(19361);
            var G = function(e) {
                    return e.every(function(e) {
                        var r, n = null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.videos;
                        if (!(null == n ? void 0 : n.length)) return !1;
                        var o = !0,
                            i = !1,
                            t = void 0;
                        try {
                            for (var a, l = n[Symbol.iterator](); !(o = (a = l.next()).done); o = !0) {
                                var s = a.value,
                                    d = (null == s ? void 0 : s.thumbnail) && ("string" == typeof s.thumbnail || "object" == _type_of(s.thumbnail) && null !== s.thumbnail);
                                if (!(null == s ? void 0 : s.url) || !d) return !1
                            }
                        } catch (e) {
                            i = !0, t = e
                        } finally {
                            try {
                                o || null == l.return || l.return()
                            } finally {
                                if (i) throw t
                            }
                        }
                        return !0
                    })
                },
                W = function(e) {
                    return e.every(function(e) {
                        var r = null == e ? void 0 : e.metadata;
                        return (null == r ? void 0 : r.types) && (null == r ? void 0 : r.title) && (null == r ? void 0 : r.infoTitle) && (null == r ? void 0 : r.vendorDescription) && (null == r ? void 0 : r.userDescription)
                    })
                },
                F = new Set(["blog_post", "ads_slider", "product_card", "billboard_image", "horizontal_category", "vertical_video_list", "horizontal_video_list", "horizontal_pgp_popular", "horizontal_product_popular", "horizontal_vendor_with_chat", "top_reels_review_slider", "top_reels_business_slider", "horizontal_vendor_coupons"]),
                H = {
                    blog_post: function(e) {
                        return e.every(function(e) {
                            var r, n = null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.posts;
                            return (null == n ? void 0 : n.length) > 0 && n.every(function(e) {
                                return null == e ? void 0 : e.imageUrl
                            })
                        })
                    },
                    ads_slider: function(e) {
                        return e.every(function(e) {
                            var r, n = null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.banners;
                            return (null == n ? void 0 : n.length) > 0 && n.every(function(e) {
                                return (null == e ? void 0 : e.url) || (null == e ? void 0 : e.image)
                            })
                        })
                    },
                    vertical_video_list: G,
                    billboard_image: function(e) {
                        return e.every(function(e) {
                            var r, n = null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.images;
                            return (null == n ? void 0 : n.length) > 0 && n.every(function(e) {
                                return (null == e ? void 0 : e.url) && (null == e ? void 0 : e.link)
                            })
                        })
                    },
                    billboard_video: function(e) {
                        return e.every(function(e) {
                            return (null == e ? void 0 : e.title) && (null == e ? void 0 : e.poster) && (null == e ? void 0 : e.videoUrl)
                        })
                    },
                    horizontal_video_list: G,
                    horizontal_category: function(e) {
                        return e.every(function(e) {
                            var r, n = null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.categories;
                            return (null == n ? void 0 : n.length) > 0 && n.every(function(e) {
                                return (null == e ? void 0 : e.icon) && (null == e ? void 0 : e.link) && (null == e ? void 0 : e.title)
                            })
                        })
                    },
                    top_reels_review_slider: W,
                    top_reels_business_slider: W,
                    horizontal_pgp_popular: function(e) {
                        return e.every(function(e) {
                            var r;
                            return (null == e ? void 0 : e.uuid) && (null == e ? void 0 : e.title) && "number" == typeof(null == e ? void 0 : e.minPrice) && (null == e || null === (r = e.images) || void 0 === r ? void 0 : r.length) > 0
                        })
                    },
                    horizontal_vendor_coupons: function(e) {
                        return e.every(function(e) {
                            var r, n;
                            return (null == e ? void 0 : e.id) || (null == e || null === (r = e.vendor) || void 0 === r ? void 0 : r.name) || (null == e || null === (n = e.vendor) || void 0 === n ? void 0 : n.identifier)
                        })
                    },
                    horizontal_product_popular: function(e) {
                        return e.every(function(e) {
                            var r, n, o;
                            return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && "number" == typeof(null == e ? void 0 : e.price) && (null == e || null === (r = e.photo) || void 0 === r ? void 0 : r.small) && (null == e || null === (n = e.vendor) || void 0 === n ? void 0 : n.name) && (null == e || null === (o = e.vendor) || void 0 === o ? void 0 : o.identifier)
                        })
                    }
                },
                K = {
                    blog_post: function(e) {
                        var r = e.result[0].metadata;
                        return _object_spread_props(_object_spread({}, T(e)), {
                            items: r.posts.slice(0, 20),
                            metadata: _object_spread_props(_object_spread({}, e.metaData), {
                                title: r.title,
                                size: r.size
                            })
                        })
                    },
                    ads_slider: function(e) {
                        var r = e.result[0].metadata;
                        return _object_spread_props(_object_spread({}, T(e)), {
                            metadata: _object_spread_props(_object_spread({}, e.metaData), {
                                size: r.size,
                                autoplay: r.autoSlide || r.autoPlay
                            }),
                            items: r.banners.map(function(e) {
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
                    billboard_video: E,
                    billboard_image: E,
                    vertical_video_list: B,
                    horizontal_category: function(e) {
                        return _object_spread_props(_object_spread({}, T(e)), {
                            items: e.result[0].metadata.categories.slice(0, 20)
                        })
                    },
                    horizontal_video_list: B,
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
                    horizontal_product_popular: function(e, r) {
                        var n, o = r.hasSection || (null === (n = e.metadata) || void 0 === n ? void 0 : n.showAllProduct);
                        return _object_spread_props(_object_spread({}, T(e)), {
                            items: e.result.map(function(r, n) {
                                var i, t, a, l, s, d, c, u = null;
                                return ((null === (i = r.metadata) || void 0 === i ? void 0 : i.primaryPrice) || (null === (t = r.metadata) || void 0 === t ? void 0 : t.remainingStock) || (null === (a = r.metadata) || void 0 === a ? void 0 : a.expireTime)) && (u = {
                                    backgroundNone: !0,
                                    expireTime: r.metadata.expireTime,
                                    inventory: r.metadata.remainingStock,
                                    primaryPrice: r.metadata.primaryPrice
                                }), {
                                    realDiscount: u,
                                    id: r.id,
                                    showLabel: !0,
                                    isLazyLoad: !0,
                                    conversationBtn: !1,
                                    showMoreOptionBtn: !1,
                                    isShowAppDiscountBadge: !1,
                                    canShowGoodPriceExperiment: !0,
                                    isSelectedVendor: !!(null === (l = r.vendor) || void 0 === l ? void 0 : l.score),
                                    isSpecialSale: !!(null === (s = r.metadata) || void 0 === s ? void 0 : s.badgeTitle),
                                    queryParams: (0, I.Z)(e.item, !1),
                                    badgeTitle: (null == r || null === (d = r.currentPromotion) || void 0 === d ? void 0 : d.cardBadgeTitle) || (null == r || null === (c = r.metadata) || void 0 === c ? void 0 : c.badgeTitle) || !1,
                                    onClick: function() {
                                        requestIdleCallback(function() {
                                            (0, m.publishEvent)("homeClick", {
                                                item: "".concat(n + 1),
                                                componentName: "horizontal_product_popular"
                                            })
                                        })
                                    },
                                    product: {
                                        id: r.id,
                                        name: r.name,
                                        stock: r.stock,
                                        price: r.price,
                                        rating: r.rating,
                                        vendor: r.vendor,
                                        metadata: r.metadata,
                                        photo: r.photo.small,
                                        ads: r.metadata.offerId,
                                        listingIds: r.listingIds,
                                        hasVariation: r.hasVariation,
                                        primaryPrice: r.primaryPrice,
                                        isFreeShipping: r.isFreeShipping,
                                        currentPromotion: r.currentPromotion,
                                        canAddToCart: !!o && r.canAddToCart
                                    }
                                }
                            }).slice(0, 20)
                        })
                    }
                },
                q = n(1692),
                R = n(69064),
                X = n(26460),
                Q = t()(function() {
                    return n.e(5536).then(n.bind(n, 55536))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [55536]
                        }
                    },
                    ssr: !1
                }),
                V = t()(function() {
                    return n.e(823).then(n.bind(n, 40823))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [40823]
                        }
                    },
                    ssr: !1,
                    loading: X.yQ
                }),
                Y = t()(function() {
                    return n.e(5399).then(n.bind(n, 95399))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [95399]
                        }
                    },
                    ssr: !1,
                    loading: X.ls
                }),
                U = t()(function() {
                    return n.e(5399).then(n.bind(n, 95399))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [95399]
                        }
                    },
                    ssr: !1,
                    loading: X.$t
                }),
                J = t()(function() {
                    return n.e(7999).then(n.bind(n, 87999))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [87999]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, o.jsx)(L.Xp, {})
                    }
                }),
                $ = t()(function() {
                    return Promise.resolve().then(n.bind(n, 30162))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [30162]
                        }
                    },
                    ssr: !0,
                    loading: D.Z
                }),
                ee = t()(function() {
                    return Promise.all([n.e(8231), n.e(7339), n.e(4935)]).then(n.bind(n, 85156))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [85156]
                        }
                    },
                    ssr: !0,
                    loading: function() {
                        return (0, o.jsx)(R.Z, {
                            hasBackground: !0,
                            discountModeWithTimer: !0,
                            hasLabels: !0
                        })
                    }
                }),
                re = t()(function() {
                    return Promise.all([n.e(8231), n.e(7339), n.e(4935)]).then(n.bind(n, 85156))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [85156]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, o.jsx)(R.Z, {
                            multipleLabels: !0,
                            discountMode: !0
                        })
                    }
                }),
                ne = t()(function() {
                    return n.e(8139).then(n.bind(n, 8139))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8139]
                        }
                    },
                    ssr: !1,
                    loading: X.Iu
                }),
                oe = t()(function() {
                    return n.e(8399).then(n.bind(n, 8399))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8399]
                        }
                    },
                    ssr: !1,
                    loading: X.xG
                }),
                ie = t()(function() {
                    return n.e(92).then(n.bind(n, 80092))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [80092]
                        }
                    },
                    ssr: !1,
                    loading: q.Z
                }),
                te = (0, S.Z)({
                    on: ["visible"]
                })(Q),
                ae = (0, S.Z)({
                    on: ["visible"]
                })(C),
                le = (0, S.Z)({
                    on: ["visible"]
                })(V),
                se = (0, S.Z)({
                    on: ["visible"]
                })($),
                de = (0, S.Z)({
                    on: ["visible"]
                })(Y),
                ce = (0, S.Z)({
                    on: ["visible"]
                })(U),
                ue = (0, S.Z)({
                    on: ["visible"]
                })(J),
                ve = (0, S.Z)({
                    on: ["visible"]
                })(ne),
                _e = (0, S.Z)({
                    on: ["visible"]
                })(oe),
                pe = (0, S.Z)({
                    on: ["visible"]
                })(ie),
                me = (0, S.Z)({
                    on: ["visible"]
                })(re),
                he = (0, S.Z)({
                    on: ["visible"]
                })(ee),
                ge = function(e, r) {
                    switch (e.ui) {
                        case "ads_slider":
                            return (0, o.jsx)(X.aK, {});
                        case "horizontal_category":
                            return (0, o.jsx)(D.Z, {});
                        case "horizontal_product_popular":
                            var n, i, t, a, l, s;
                            return (0, o.jsx)(R.Z, {
                                hasBackground: null === (n = e.metaData) || void 0 === n ? void 0 : n.hasBackground,
                                hasLogo: null === (i = e.metaData) || void 0 === i ? void 0 : i.hasLogo,
                                discountModeWithTimer: null === (t = e.metaData) || void 0 === t ? void 0 : t.hasBackground,
                                discountMode: !(null === (a = e.metaData) || void 0 === a ? void 0 : a.hasBackground),
                                hasLabels: (null === (l = e.metaData) || void 0 === l ? void 0 : l.hasBackground) || r,
                                multipleLabels: !(null === (s = e.metaData) || void 0 === s ? void 0 : s.hasBackground) && !r
                            });
                        case "horizontal_pgp_popular":
                            return (0, o.jsx)(q.Z, {});
                        case "horizontal_vendor_with_chat":
                            return (0, o.jsx)(X.Iu, {});
                        case "blog_post":
                            return (0, o.jsx)(X.yQ, {});
                        case "top_reels_review_slider":
                        case "top_reels_business_slider":
                            return (0, o.jsx)(L.Xp, {});
                        case "horizontal_video_list":
                            return (0, o.jsx)(X.$t, {});
                        case "vertical_video_list":
                            return (0, o.jsx)(X.ls, {});
                        case "horizontal_vendor_coupons":
                            return (0, o.jsx)(X.xG, {});
                        default:
                            return null
                    }
                };

            function be(e) {
                var r = e.sections,
                    n = e.isServer,
                    i = e.isHiddenCsrComponentsSkeleton,
                    t = void 0 === i || i,
                    a = (0, g.b)().ua,
                    s = function(e) {
                        var r, n = (0, v.useRef)({}),
                            o = (0, A.Z)(),
                            i = (0, v.useMemo)(function() {
                                var r = [];
                                return e.forEach(function(e) {
                                    var i, t, a = "name:".concat(e.name, "-ui:").concat(e.ui, "-items:").concat((null === (i = e.result) || void 0 === i ? void 0 : i.length) || 0);
                                    if (n[a]) r.push(n[a]);
                                    else if (F.has(e.ui)) {
                                        if (H[e.ui])
                                            if (!H[e.ui](e.result)) return;
                                        K[e.ui] ? r.push(K[e.ui](e, {
                                            hasSection: !!(null === (t = o.query) || void 0 === t ? void 0 : t.section)
                                        })) : r.push(e), n.current[a] = r
                                    }
                                }), r
                            }, [e, null === (r = o.query) || void 0 === r ? void 0 : r.section]);
                        return i
                    }(r);
                return (0, o.jsx)("div", {
                    className: l()["discovery-wrapper"],
                    children: s.map(function(e, i) {
                        var s, d;
                        return (0, o.jsx)(O.Z, {
                            children: (0, o.jsxs)(M, {
                                index: i,
                                immediateRenderCount: 3,
                                rootMargin: "400px",
                                skeleton: ge(e, a.isPc),
                                isServer: n,
                                isPc: a.isPc,
                                children: ["horizontal_category" === e.ui && (0, o.jsx)(Z(), {
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: (null == r || null === (s = r[i]) || void 0 === s ? void 0 : s.fromCache) || t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(se, {
                                            items: e.items,
                                            isLazy: !0
                                        })
                                    })
                                }), "horizontal_product_popular" === e.ui && e.metadata.uiRealDiscount && (0, o.jsx)(Z(), {
                                    fluid: !a.isPc,
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: (null == r || null === (d = r[i]) || void 0 === d ? void 0 : d.fromCache) || t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(he, {
                                            items: e.items,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            metadata: e.metadata,
                                            description: e.description,
                                            showAllProduct: e.metadata.showAllProduct,
                                            isLazyProduct: !0
                                        })
                                    })
                                }), "horizontal_product_popular" === e.ui && !e.metadata.uiRealDiscount && (0, o.jsx)(Z(), {
                                    fluid: !a.isPc,
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(me, {
                                            items: e.items,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            metadata: e.metadata,
                                            description: e.description,
                                            showAllProduct: e.metadata.showAllProduct,
                                            isLazyProduct: !0
                                        })
                                    })
                                }), "ads_slider" === e.ui && (0, o.jsx)(Z(), {
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(ae, {
                                            name: e.name,
                                            banners: e.items,
                                            metadata: e.metadata,
                                            className: l().discovery__ads_slider,
                                            isLazy: !0
                                        })
                                    })
                                }), "billboard_image" === e.ui && (0, o.jsx)(C, {
                                    name: e.name,
                                    banners: e.items,
                                    metadata: e.metadata,
                                    noSkeleton: n
                                }), "billboard_video" === e.ui && (0, o.jsx)(Z(), {
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(te, {
                                            video: e.items[0],
                                            name: "billboard_video"
                                        })
                                    })
                                }), "blog_post" === e.ui && (0, o.jsx)(Z(), {
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(le, {
                                            name: "blog_post",
                                            posts: e.items,
                                            title: e.title,
                                            metadata: e.metadata
                                        })
                                    })
                                }), "horizontal_video_list" === e.ui && (0, o.jsx)(Z(), {
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(ce, {
                                            videos: e.items,
                                            metadata: e.metadata,
                                            name: "horizontal_video_list"
                                        })
                                    })
                                }), "vertical_video_list" === e.ui && (0, o.jsx)(Z(), {
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(de, {
                                            verticalModeVideo: !0,
                                            videos: e.items,
                                            name: "vertical_video_list",
                                            metadata: e.metadata
                                        })
                                    })
                                }), "top_reels_review_slider" === e.ui && (0, o.jsx)(Z(), {
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(ue, {
                                            metadata: e.result.at(0).metadata
                                        })
                                    })
                                }), "top_reels_business_slider" === e.ui && (0, o.jsx)(Z(), {
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(ue, {
                                            metadata: e.result.at(0).metadata
                                        })
                                    })
                                }), "horizontal_vendor_with_chat" === e.ui && (0, o.jsx)(Z(), {
                                    fluid: !0,
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(ve, {
                                            items: e.result,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            description: e.description
                                        })
                                    })
                                }), "horizontal_pgp_popular" === e.ui && (0, o.jsx)(Z(), {
                                    fluid: !a.isPc,
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(pe, {
                                            items: e.items,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            description: e.description,
                                            isLazyProduct: !0
                                        })
                                    })
                                }), "horizontal_vendor_coupons" === e.ui && (0, o.jsx)(Z(), {
                                    fluid: !a.isPc,
                                    children: (0, o.jsx)("div", {
                                        style: {
                                            display: t ? "block" : "none"
                                        },
                                        children: (0, o.jsx)(_e, {
                                            items: e,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            description: e.description
                                        })
                                    })
                                })]
                            })
                        }, "".concat(i, "-").concat(e.ui))
                    })
                })
            }
        },
        56637: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return u
                }
            });
            var o = n(32930),
                i = n(126),
                t = n.n(i),
                a = n(5164),
                l = n(81433),
                s = n.n(l),
                d = n(70437),
                c = n.n(d);

            function u() {
                return (0, o.jsx)(s(), {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    className: t()["horizontal-category-skeleton"],
                    children: (0, o.jsx)("div", {
                        className: t()["horizontal-category-skeleton__items"],
                        children: (0, a.generateArray)(10).map(function(e) {
                            return (0, o.jsxs)("div", {
                                className: t()["horizontal-category-skeleton__item"],
                                children: [(0, o.jsx)(c(), {
                                    height: 32,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)",
                                    className: t()["horizontal-category-skeleton__item-icon"]
                                }), (0, o.jsx)(c(), {
                                    width: 0 === e ? 67 : 1 === e ? 54 : 96,
                                    height: 21,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)",
                                    className: t()["horizontal-category-skeleton__item-text"]
                                })]
                            }, e)
                        })
                    })
                })
            }
        },
        30162: function(e, r, n) {
            "use strict";
            n.r(r);
            var o = n(32930),
                i = n(40877),
                t = n(27434),
                a = n(2347),
                l = n(126),
                s = n.n(l),
                d = n(92369),
                c = n(45835),
                u = n(53278),
                v = n.n(u),
                _ = n(93222),
                p = n.n(_),
                m = function(e) {
                    requestIdleCallback(function() {
                        (0, d.publishEvent)("homeClick", {
                            item: "".concat(e),
                            componentName: "horizontal_category"
                        })
                    })
                };
            r.default = (0, t.memo)(function(e) {
                var r = e.items,
                    n = e.className,
                    t = e.isLazy,
                    l = void 0 !== t && t,
                    d = (0, c.b)().ua,
                    u = d.isPc ? p() : "div",
                    _ = d.isPc ? p().Item : "div";
                return (0, o.jsx)("div", {
                    className: (0, i.Z)(s()["navigation-discovery"], n),
                    children: (0, o.jsx)(u, {
                        navigation: !0,
                        className: s()["navigation-discovery__slider"],
                        children: r.map(function(e, r) {
                            return (0, o.jsx)(_, {
                                className: s()["navigation-discovery__slider-item"],
                                children: (0, o.jsxs)(a.Z, {
                                    href: e.link,
                                    prefetch: !1,
                                    onClick: function() {
                                        return m(r + 1)
                                    },
                                    className: s()["navigation-discovery__slider-content"],
                                    children: [(0, o.jsx)(v(), {
                                        src: e.icon,
                                        ratio: 1,
                                        lazy: l,
                                        className: s()["navigation-discovery__slider-item-icon"]
                                    }), (0, o.jsx)("span", {
                                        className: (0, i.Z)(s()["navigation-discovery__slider-item-title"]),
                                        children: e.title
                                    })]
                                })
                            }, r)
                        })
                    })
                })
            })
        },
        1692: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return y
                }
            });
            var o = n(32930),
                i = n(40877),
                t = n(50874),
                a = n.n(t),
                l = n(6259),
                s = n.n(l),
                d = n(81433),
                c = n.n(d),
                u = n(70437),
                v = n.n(u);

            function _(e) {
                var r = e.className,
                    n = e.isHorizontal,
                    t = void 0 !== n && n,
                    a = e.gridMode,
                    l = void 0 !== a && a;
                return (0, o.jsx)("div", {
                    className: (0, i.Z)(r, s()["group-card-skeleton"], s()["group-card-skeleton--".concat(t ? "horizontal" : "vertical")], _define_property({}, s()["group-card-skeleton--grid-mode"], l)),
                    children: (0, o.jsxs)(c(), {
                        display: "flex",
                        flexDirection: t ? "row" : "column",
                        children: [(0, o.jsx)(v(), {
                            className: s()["group-card-skeleton__image"]
                        }), (0, o.jsxs)("div", {
                            className: s()["group-card-skeleton__content"],
                            children: [(0, o.jsx)(v(), {
                                height: "44px",
                                width: "100%",
                                radius: "2px",
                                className: s()["group-card-skeleton__title"]
                            }), (0, o.jsxs)("div", {
                                className: s()["group-card-skeleton__vendor"],
                                children: [(0, o.jsx)(v(), {
                                    height: t ? "16px" : "24px",
                                    width: "24px"
                                }), (0, o.jsx)(v(), {
                                    height: t ? "16px" : "24px",
                                    width: "60%"
                                })]
                            }), (0, o.jsxs)("div", {
                                className: s()["group-card-skeleton__vendor"],
                                children: [(0, o.jsx)(v(), {
                                    height: t ? "16px" : "20px",
                                    width: "20px"
                                }), (0, o.jsx)(v(), {
                                    height: t ? "16px" : "20px",
                                    width: "70%"
                                })]
                            }), (0, o.jsx)(c(), {
                                display: "flex",
                                justifyContent: "flex-end",
                                mt: 12,
                                children: (0, o.jsx)(v(), {
                                    height: "29px",
                                    width: "70px",
                                    radius: "2px"
                                })
                            })]
                        })]
                    })
                })
            }
            _.propType = {
                className: a().string,
                isHorizontal: a().bool
            };
            var p = n(45835),
                m = n(80966),
                h = n.n(m),
                g = n(93222),
                b = n.n(g),
                y = function() {
                    var e = (0, p.b)().ua,
                        r = e.isPc ? b() : "div",
                        n = e.isPc ? b().Item : "div";
                    return (0, o.jsxs)("section", {
                        className: h().hpp,
                        children: [(0, o.jsx)("div", {
                            className: h().header,
                            children: (0, o.jsx)("div", {
                                className: h().header__content,
                                children: (0, o.jsx)(v(), {
                                    className: (0, i.Z)(h().header__title),
                                    width: "20%",
                                    height: 27
                                })
                            })
                        }), (0, o.jsx)(c(), {
                            children: (0, o.jsx)(r, {
                                className: h().hpp__carousel,
                                children: Array.from({
                                    length: 5
                                }).map(function(e, r) {
                                    return (0, o.jsx)(n, {
                                        className: h()["hpp__carousel-item"],
                                        children: (0, o.jsx)(_, {})
                                    }, r)
                                })
                            })
                        })]
                    })
                }
        },
        69064: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return v
                }
            });
            var o = n(32930),
                i = n(40877),
                t = n(92303),
                a = n.n(t),
                l = n(81433),
                s = n.n(l),
                d = n(70437),
                c = n.n(d),
                u = n(19616);

            function v(e) {
                var r = e.hasLogo,
                    n = void 0 !== r && r,
                    t = e.hasLabels,
                    l = void 0 !== t && t,
                    d = e.discountMode,
                    v = void 0 !== d && d,
                    _ = e.hasBackground,
                    p = void 0 !== _ && _,
                    m = e.multipleLabels,
                    h = void 0 !== m && m,
                    g = e.discountModeWithTimer,
                    b = void 0 !== g && g;
                return (0, o.jsxs)(s(), {
                    className: (0, i.Z)(a()["horizontal-product-popular-skeleton"]),
                    children: [n && (0, o.jsx)(s(), {
                        className: a()["horizontal-product-popular-skeleton__circle"]
                    }), (0, o.jsxs)(s(), {
                        className: (0, i.Z)(a()["horizontal-product-popular-skeleton__content"], _define_property({}, a()["horizontal-product-popular-skeleton__content--has-bg"], p)),
                        children: [(0, o.jsx)(s(), {
                            mb: 22,
                            pr: 24,
                            pl: 24,
                            children: (0, o.jsx)(c(), {
                                className: (0, i.Z)(a()["horizontal-product-popular-skeleton__title"]),
                                width: 150,
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)"
                            })
                        }), (0, o.jsxs)("div", {
                            className: a()["horizontal-product-popular-skeleton__items"],
                            children: [(0, o.jsx)(u.Z, {
                                className: a()["horizontal-product-popular-skeleton__item"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)",
                                gridMode: !0,
                                discountMode: v,
                                hasLabels: l,
                                multipleLabels: h,
                                discountModeWithTimer: b
                            }), (0, o.jsx)(u.Z, {
                                className: a()["horizontal-product-popular-skeleton__item"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)",
                                gridMode: !0,
                                discountMode: v,
                                hasLabels: l,
                                multipleLabels: h,
                                discountModeWithTimer: b
                            })]
                        })]
                    })]
                })
            }
        },
        88423: function(e, r, n) {
            "use strict";

            function o(e, r) {
                var n = {
                    from: "explore",
                    page: (null == e ? void 0 : e.tabName) || null,
                    component: null == e ? void 0 : e.name
                };
                return r && (n.more = !0), n
            }
            n.d(r, {
                Z: function() {
                    return o
                }
            })
        },
        19616: function(e, r, n) {
            "use strict";
            var o = n(32930),
                i = n(40877),
                t = n(50874),
                a = n.n(t),
                l = n(36379),
                s = n.n(l),
                d = n(81433),
                c = n.n(d),
                u = n(70437),
                v = n.n(u),
                _ = n(45835);

            function p(e) {
                var r = e.className,
                    n = e.gridMode,
                    t = void 0 !== n && n,
                    a = e.hasLabels,
                    l = void 0 !== a && a,
                    d = e.isHorizontal,
                    u = void 0 !== d && d,
                    p = e.discountMode,
                    m = void 0 !== p && p,
                    h = e.multipleLabels,
                    g = void 0 !== h && h,
                    b = e.discountModeWithTimer,
                    y = void 0 !== b && b,
                    x = (0, _.b)().ua;
                return (0, o.jsx)("div", {
                    className: (0, i.Z)(r, s()["product-card-skeleton"], s()["product-card-skeleton--".concat(u ? "horizontal" : "vertical")], _define_property({}, s()["product-card-skeleton--grid-mode"], t)),
                    children: (0, o.jsxs)(c(), {
                        display: "flex",
                        flexDirection: u ? "row" : "column",
                        children: [(0, o.jsx)(v(), {
                            className: s()["product-card-skeleton__image"]
                        }), (0, o.jsxs)("div", {
                            className: s()["product-card-skeleton__content"],
                            children: [(0, o.jsx)(v(), {
                                height: x.isPc ? "50px" : "44px",
                                width: "100%",
                                radius: "2px",
                                className: s()["product-card-skeleton__title"]
                            }), (0, o.jsxs)("div", {
                                className: s()["product-card-skeleton__vendor"],
                                children: [(0, o.jsx)(v(), {
                                    height: u ? "20px" : "24px",
                                    width: "24px"
                                }), (0, o.jsx)(v(), {
                                    height: u ? "20px" : "24px",
                                    width: "60%"
                                })]
                            }), (0, o.jsxs)("div", {
                                className: s()["product-card-skeleton__vendor"],
                                children: [(0, o.jsx)(v(), {
                                    height: "20px",
                                    width: "20px"
                                }), (0, o.jsx)(v(), {
                                    height: "20px",
                                    width: "70%"
                                })]
                            }), y ? (0, o.jsx)(c(), {
                                className: s()["product-card-skeleton__discount"],
                                children: (0, o.jsx)(v(), {
                                    height: "107px",
                                    width: "100%"
                                })
                            }) : m ? (0, o.jsx)(c(), {
                                className: s()["product-card-skeleton__discount"],
                                children: (0, o.jsx)(v(), {
                                    height: "43px",
                                    width: "100%"
                                })
                            }) : (0, o.jsx)(c(), {
                                display: "flex",
                                justifyContent: "flex-end",
                                mt: 12,
                                children: (0, o.jsx)(v(), {
                                    height: "29px",
                                    width: "70px",
                                    radius: "2px"
                                })
                            }), g ? (0, o.jsxs)(c(), {
                                className: s()["product-card-skeleton__labels"],
                                children: [(0, o.jsx)(v(), {
                                    height: "22px",
                                    width: "99px",
                                    radius: "3px"
                                }), (0, o.jsx)(v(), {
                                    height: "22px",
                                    width: "99px",
                                    radius: "3px"
                                })]
                            }) : l ? (0, o.jsx)(c(), {
                                className: s()["product-card-skeleton__labels"],
                                children: (0, o.jsx)(v(), {
                                    height: "22px",
                                    width: "99px",
                                    radius: "3px"
                                })
                            }) : (0, o.jsxs)("div", {
                                className: s()["product-card-skeleton__footer"],
                                children: [(0, o.jsx)(v(), {
                                    height: "20px",
                                    width: "40%",
                                    radius: "3px"
                                }), (0, o.jsx)(v(), {
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
                className: a().string,
                isHorizontal: a().bool
            }, r.Z = p
        },
        24311: function(e, r, n) {
            "use strict";
            n.d(r, {
                Xp: function() {
                    return p
                },
                xP: function() {
                    return _
                }
            });
            var o = n(32930),
                i = n(5164),
                t = n(33635),
                a = n.n(t),
                l = n(81433),
                s = n.n(l),
                d = n(70437),
                c = n.n(d),
                u = n(45835);

            function v() {
                return (0, o.jsx)("div", {
                    className: a()["reel-skeleton"],
                    children: (0, o.jsx)(c(), {
                        backgroundColor: "var(--gray-100)",
                        waveColor: "var(--gray-200)",
                        className: a()["reel-skeleton__item"]
                    })
                })
            }

            function _(e) {
                var r = e.count;
                return (0, i.range)(Number(r) || 6).map(function(e, r) {
                    return (0, o.jsx)(v, {}, r)
                })
            }

            function p() {
                var e = (0, u.b)().ua.isPc;
                return (0, o.jsxs)(s(), {
                    mb: 56,
                    children: [(0, o.jsx)(s(), {
                        mb: 14,
                        children: (0, o.jsx)(c(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100,
                            height: 24
                        })
                    }), (0, o.jsx)("div", {
                        className: a()["reels-slider-skeleton"],
                        children: (0, i.range)(e ? 7 : 3).map(function(e, r) {
                            return (0, o.jsx)(v, {}, r)
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
                "skeleton-horizontal-vendor-coupons__items": "_4iHHxN",
                "skeleton-horizontal-vendor-coupons__item": "_5FPWsV"
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
                "horizontal-product-popular-skeleton__items": "xMuQPk",
                "horizontal-product-popular-skeleton__item": "wjxRMA",
                "horizontal-product-popular-skeleton__title": "grhYcI"
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
                "reels-slider-skeleton": "h2nH_k"
            }
        }
    }
]);