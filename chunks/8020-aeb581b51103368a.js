function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
    return i
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
        var i, n, o = [],
            a = !0,
            l = !1;
        try {
            for (t = t.call(e); !(a = (i = t.next()).done) && (o.push(i.value), !r || o.length !== r); a = !0);
        } catch (e) {
            l = !0, n = e
        } finally {
            try {
                a || null == t.return || t.return()
            } finally {
                if (l) throw n
            }
        }
        return o
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _object_spread(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.forEach(function(r) {
            _define_property(e, r, t[r])
        })
    }
    return e
}

function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        r && (i = i.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), t.push.apply(t, i)
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

function _type_of(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _array_like_to_array(e, r) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8020], {
        56345: function(e, r, t) {
            "use strict";
            t.d(r, {
                c: function() {
                    return n
                },
                F: function() {
                    return i
                }
            });
            var i = {
                    src: "https://statics.basalam.com/charsou/_next/static/media/default-image.aa5c295a.webp",
                    height: 500,
                    width: 500,
                    blurDataURL: "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoIAAgAAkA4JaQAA3AA/vpUDm/IJayGCiAAAA==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                n = {
                    src: "https://statics.basalam.com/charsou/_next/static/media/default-avatar.6647bbbb.webp",
                    height: 100,
                    width: 100,
                    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBIAAAABD3Dk/4iIIBBIVs99iIj+hwZWUDggNgAAAPABAJ0BKggACAACQDglpAAPgBCR9DNVAAD+/Pcih+6N6tuNTHR1rB+Mul7iZyljFb5laUAAAA==",
                    blurWidth: 8,
                    blurHeight: 8
                }
        },
        83719: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return d
                }
            });
            var i = t(32930),
                n = t(40877),
                o = t(24993),
                a = t.n(o),
                l = t(70437),
                s = t.n(l);

            function d(e) {
                var r = e.ratio;
                return (0, i.jsxs)("div", {
                    className: (0, n.Z)([a()["billboard-image-skeleton"]]),
                    children: [(0, i.jsx)("div", {
                        style: {
                            paddingBottom: r ? "".concat((100 * r).toFixed(3), "%") : "80%"
                        }
                    }), (0, i.jsx)(s(), {
                        width: "100%",
                        height: "100%",
                        className: a()["billboard-image-skeleton__item"],
                        backgroundColor: "var(--gray-100)",
                        waveColor: "var(--gray-200)"
                    })]
                })
            }
        },
        46196: function(e, r, t) {
            "use strict";
            var i = t(32930),
                n = t(27434),
                o = t(50874),
                a = t.n(o),
                l = t(94002),
                s = t(58271);

            function d(e) {
                var r = e.children,
                    t = e.fallback,
                    n = void 0 === t ? (0, i.jsx)("div", {}) : t;
                return (0, i.jsx)(l.ErrorBoundary, {
                    fallback: n,
                    onError: s.wJ,
                    children: r
                })
            }
            d.propTypes = {
                children: a().node,
                fallback: a().node
            }, r.Z = (0, n.memo)(d)
        },
        26460: function(e, r, t) {
            "use strict";
            t.d(r, {
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
                yQ: function() {
                    return v
                }
            });
            var i = t(32930),
                n = t(59785),
                o = t.n(n),
                a = t(81433),
                l = t.n(a),
                s = t(70437),
                d = t.n(s);

            function c() {
                return (0, i.jsxs)(l(), {
                    className: o()["skeleton-horizontal-video-slider"],
                    mb: 32,
                    children: [(0, i.jsx)(l(), {
                        mb: 16,
                        children: (0, i.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100,
                            height: 24
                        })
                    }), (0, i.jsxs)("div", {
                        className: o()["skeleton-horizontal-video-slider__items"],
                        children: [(0, i.jsx)("div", {
                            className: o()["skeleton-horizontal-video-slider__item"],
                            children: (0, i.jsx)(d(), {
                                className: o()["skeleton-horizontal-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, i.jsx)("div", {
                            className: o()["skeleton-horizontal-video-slider__item"],
                            children: (0, i.jsx)(d(), {
                                className: o()["skeleton-horizontal-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, i.jsx)("div", {
                            className: o()["skeleton-horizontal-video-slider__item"],
                            children: (0, i.jsx)(d(), {
                                className: o()["skeleton-horizontal-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        })]
                    })]
                })
            }

            function u() {
                return (0, i.jsxs)(l(), {
                    className: o()["skeleton-vertical-video-slider"],
                    mb: 32,
                    children: [(0, i.jsx)(l(), {
                        mb: 16,
                        children: (0, i.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100,
                            height: 24
                        })
                    }), (0, i.jsxs)("div", {
                        className: o()["skeleton-vertical-video-slider__items"],
                        children: [(0, i.jsx)("div", {
                            className: o()["skeleton-vertical-video-slider__item"],
                            children: (0, i.jsx)(d(), {
                                className: o()["skeleton-vertical-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, i.jsx)("div", {
                            className: o()["skeleton-vertical-video-slider__item"],
                            children: (0, i.jsx)(d(), {
                                className: o()["skeleton-vertical-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, i.jsx)("div", {
                            className: o()["skeleton-vertical-video-slider__item"],
                            children: (0, i.jsx)(d(), {
                                className: o()["skeleton-vertical-video-slider__item-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        })]
                    })]
                })
            }

            function v() {
                return (0, i.jsxs)(l(), {
                    className: o()["skeleton-blog"],
                    children: [(0, i.jsx)(l(), {
                        mb: 16,
                        children: (0, i.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100,
                            height: 24
                        })
                    }), (0, i.jsxs)("div", {
                        className: o()["skeleton-blog__posts"],
                        children: [(0, i.jsx)("div", {
                            className: o()["skeleton-blog__post"],
                            children: (0, i.jsx)(d(), {
                                className: o()["skeleton-blog__post-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        }), (0, i.jsx)("div", {
                            className: o()["skeleton-blog__post"],
                            children: (0, i.jsx)(d(), {
                                className: o()["skeleton-blog__post-img"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)"
                            })
                        })]
                    })]
                })
            }

            function _() {
                return (0, i.jsx)(l(), {
                    className: o()["skeleton-billboard-image-ads"],
                    children: (0, i.jsx)("div", {
                        className: o()["skeleton-billboard-image-ads__item"],
                        children: (0, i.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })
                    })
                })
            }

            function p() {
                return (0, i.jsx)(l(), {
                    className: o()["skeleton-billboard-image"],
                    children: (0, i.jsx)("div", {
                        className: o()["skeleton-billboard-image__item"],
                        children: (0, i.jsx)(d(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })
                    })
                })
            }

            function m() {
                return (0, i.jsxs)(l(), {
                    className: o()["skeleton-horizontal-vendor-with-chat"],
                    children: [(0, i.jsx)(l(), {
                        pl: 24,
                        pr: 24,
                        mb: 16,
                        children: (0, i.jsx)(d(), {
                            className: o()["skeleton-horizontal-vendor-with-chat__header"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })
                    }), (0, i.jsxs)("div", {
                        className: o()["skeleton-horizontal-vendor-with-chat__items"],
                        children: [(0, i.jsx)(d(), {
                            className: o()["skeleton-horizontal-vendor-with-chat__item"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        }), (0, i.jsx)(d(), {
                            className: o()["skeleton-horizontal-vendor-with-chat__item"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        })]
                    })]
                })
            }
        },
        18020: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return ge
                }
            });
            var i = t(32930),
                n = t(2389),
                o = t.n(n),
                a = t(51491),
                l = t.n(a),
                s = t(40877),
                d = t(2347),
                c = t(16911),
                u = t.n(c),
                v = t(27434),
                _ = t(53278),
                p = t.n(_),
                m = t(84581),
                h = t(56345),
                g = t(45835);

            function b(e) {
                var r = e.banner,
                    t = e.metadata,
                    n = e.lazy,
                    o = void 0 === n || n,
                    a = e.sectionName,
                    l = e.itemName,
                    s = (0, g.b)().ua,
                    c = (0, v.useMemo)(function() {
                        return (null == t ? void 0 : t.size) ? s.isPc ? t.size.desktop.height / t.size.desktop.width : t.size.mobile.height / t.size.mobile.width : null
                    }, [t, s.isPc]),
                    _ = (0, v.useCallback)(function() {
                        (0, m.s)("homeClick", {
                            item: l,
                            componentName: a
                        })
                    }, [l, a]),
                    b = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(p(), {
                            lazy: o,
                            ratio: c,
                            alt: (null == t ? void 0 : t.title) || "",
                            className: u()["banner-discovery__image"],
                            src: (s.isPc ? r.src.pc : r.src.mobile) || h.F.src
                        }), t.title && (0, i.jsx)("div", {
                            className: u()["banner-discovery__content"],
                            children: (0, i.jsx)("span", {
                                className: u()["banner-discovery__content-title"],
                                children: t.title
                            })
                        })]
                    });
                return r.link ? (0, i.jsx)(d.Z, {
                    "data-from": "home",
                    href: r.link,
                    className: u()["banner-discovery"],
                    onClick: _,
                    children: b
                }) : (0, i.jsx)("div", {
                    className: u()["banner-discovery"],
                    children: b
                })
            }
            var y = t(87930),
                f = t.n(y),
                x = t(83719),
                k = t(65074),
                j = t.n(k),
                w = t(93222),
                N = t.n(w),
                z = t(5164),
                C = (0, v.memo)(function(e) {
                    var r = e.name,
                        t = e.banners,
                        n = e.metadata,
                        o = e.className,
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
                        A = C[0],
                        P = C[1],
                        Z = _sliced_to_array((0, v.useState)(!0), 2),
                        S = Z[0],
                        L = Z[1],
                        I = _sliced_to_array((0, v.useState)(!1), 2),
                        O = I[0],
                        D = I[1],
                        M = _sliced_to_array((0, v.useState)(!1), 2),
                        B = M[0],
                        T = M[1],
                        E = (0, v.useMemo)(function() {
                            return "true" === n.autoplay ? [(0, z.BsLightCarouselAutoplayPlugin)({
                                delay: _
                            })] : void 0
                        }, [n, _]),
                        G = (null == t ? void 0 : t.length) > 1,
                        R = k.isPc && (null == t ? void 0 : t.length) > 1,
                        Q = (0, v.useCallback)(function(e) {
                            !y && (T(!0), G && P(e.selectedScrollSnap()), R && (L(function() {
                                return e.canScrollNext()
                            }), D(function() {
                                return e.canScrollPrev()
                            })))
                        }, [y, R, G]),
                        U = (0, v.useCallback)(function(e) {
                            G && P(e.selectedScrollSnap()), R && (L(function() {
                                return e.canScrollNext()
                            }), D(function() {
                                return e.canScrollPrev()
                            }))
                        }, [R, G]),
                        K = (0, v.useCallback)(function() {
                            var e, r, t, i, n, o;
                            null === (r = w.current) || void 0 === r || null === (e = r.api) || void 0 === e || e.scrollNext(), null === (o = w.current) || void 0 === o || null === (n = o.api) || void 0 === n || null === (i = n.plugins()) || void 0 === i || null === (t = i.autoplay) || void 0 === t || t.reset()
                        }, []),
                        F = (0, v.useCallback)(function() {
                            var e, r, t, i, n, o;
                            null === (r = w.current) || void 0 === r || null === (e = r.api) || void 0 === e || e.scrollPrev(), null === (o = w.current) || void 0 === o || null === (n = o.api) || void 0 === n || null === (i = n.plugins()) || void 0 === i || null === (t = i.autoplay) || void 0 === t || t.reset()
                        }, []),
                        H = (0, v.useCallback)(function(e) {
                            var r, t, i, n, o, a;
                            null === (t = w.current) || void 0 === t || null === (r = t.api) || void 0 === r || r.scrollTo(e), null === (a = w.current) || void 0 === a || null === (o = a.api) || void 0 === o || null === (n = o.plugins()) || void 0 === n || null === (i = n.autoplay) || void 0 === i || i.reset()
                        }, []),
                        q = (0, v.useCallback)(function(e) {
                            w.current = e, w.current && (0, z.isClientSide)() && (window.stopMainCarouselAutoplay = function() {
                                var e, r, t, i;
                                null === (i = w.current) || void 0 === i || null === (t = i.api) || void 0 === t || null === (r = t.plugins()) || void 0 === r || null === (e = r.autoplay) || void 0 === e || e.stop()
                            }, window.startMainCarouselAutoplay = function() {
                                var e, r, t, i;
                                null === (i = w.current) || void 0 === i || null === (t = i.api) || void 0 === t || null === (r = t.plugins()) || void 0 === r || null === (e = r.autoplay) || void 0 === e || e.play()
                            })
                        }, []);
                    (0, v.useEffect)(function() {
                        y || 1 !== (null == t ? void 0 : t.length) || T(!0)
                    }, [null == t ? void 0 : t.length, y]);
                    var W = (0, v.useMemo)(function() {
                        var e, r, i, o, a, l, s, d;
                        return (null == n ? void 0 : n.size) && (null == t ? void 0 : t[0]) ? k.isPc ? ((null == n || null === (r = n.size) || void 0 === r || null === (e = r.desktop) || void 0 === e ? void 0 : e.height) || 0) / ((null == n || null === (o = n.size) || void 0 === o || null === (i = o.desktop) || void 0 === i ? void 0 : i.width) || 0) : ((null == n || null === (l = n.size) || void 0 === l || null === (a = l.mobile) || void 0 === a ? void 0 : a.height) || 0) / ((null == n || null === (d = n.size) || void 0 === d || null === (s = d.mobile) || void 0 === s ? void 0 : s.width) || 0) : null
                    }, [t, null == n ? void 0 : n.size, k.isPc]);
                    return (0, i.jsxs)("div", {
                        className: (0, s.Z)([f()["banner-slider-discovery"], o]),
                        children: [!B && !y && (0, i.jsx)(x.Z, {
                            ratio: W
                        }), (0, i.jsxs)("div", {
                            className: (0, s.Z)(f()["banner-slider-discovery__content"], _define_property({}, f()["banner-slider-discovery__content--hidden"], !B && !y)),
                            children: [R && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(j(), {
                                    className: (0, s.Z)(f()["banner-slider-discovery__next"], _define_property({}, f()["banner-slider-discovery__next--active"], S)),
                                    color: "secondary",
                                    variant: "outline",
                                    icon: "bi-angle-left",
                                    size: "md",
                                    square: !0,
                                    onClick: K
                                }), (0, i.jsx)(j(), {
                                    className: (0, s.Z)(f()["banner-slider-discovery__prev"], _define_property({}, f()["banner-slider-discovery__prev--active"], O)),
                                    color: "secondary",
                                    variant: "outline",
                                    icon: "bi-angle-right",
                                    size: "md",
                                    square: !0,
                                    onClick: F
                                })]
                            }), 1 === (null == t ? void 0 : t.length) && (0, i.jsx)(b, {
                                lazy: m,
                                sectionName: r,
                                banner: t[0],
                                metadata: n,
                                itemName: "".concat(r, "-", 0)
                            }), (null == t ? void 0 : t.length) > 1 && (0, i.jsx)(N(), {
                                loop: c,
                                duration: l,
                                ref: q,
                                plugins: E,
                                onInit: Q,
                                onSelect: U,
                                children: null == t ? void 0 : t.map(function(e, t) {
                                    return (0, i.jsx)(N().Item, {
                                        className: f()["banner-slider-discovery__slider-item"],
                                        children: (0, i.jsx)(b, {
                                            banner: e,
                                            sectionName: r,
                                            lazy: 0 !== t || m,
                                            metadata: n,
                                            itemName: "".concat(r, "-", 0)
                                        })
                                    }, t)
                                })
                            }), G && (0, i.jsx)("div", {
                                className: f()["banner-slider-discovery__pagination"],
                                children: t.map(function(e, r) {
                                    return (0, i.jsx)("button", {
                                        "aria-label": "اسلاید بعدی",
                                        className: (0, s.Z)(f()["banner-slider-discovery__pagination-btn"], _define_property({}, f()["banner-slider-discovery__pagination-btn--active"], r === A)),
                                        onClick: function() {
                                            return H(r)
                                        }
                                    }, r)
                                })
                            })]
                        })]
                    })
                }),
                A = t(177),
                P = t.n(A),
                Z = t(26491),
                S = t(69691),
                L = t(24311);

            function I(e) {
                var r = e.isPc,
                    t = e.children,
                    n = e.isServer,
                    o = e.index,
                    a = void 0 === o ? 0 : o,
                    l = e.skeleton,
                    s = void 0 === l ? null : l,
                    d = e.rootMargin,
                    c = void 0 === d ? "400px" : d,
                    u = e.immediateRenderCount,
                    _ = void 0 === u ? 2 : u,
                    p = _sliced_to_array((0, v.useState)(a < _ || n), 2),
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
                }, [m, c]), (0, i.jsx)("div", {
                    ref: g,
                    children: r ? m ? t : (0, i.jsx)(P(), {
                        children: s
                    }) : m ? t : s
                })
            }
            var O = t(46196),
                D = t(56637),
                M = t(88107),
                B = t(88423);

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

            function G(e) {
                var r = e.result[0].metadata;
                return _object_spread_props(_object_spread({}, T(e)), {
                    items: r.videos.slice(0, 20),
                    metadata: _object_spread_props(_object_spread({}, e.metaData), {
                        title: r.title,
                        size: r.size
                    })
                })
            }
            t(19361);
            var R = function(e) {
                    return e.every(function(e) {
                        var r, t = null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.videos;
                        if (!(null == t ? void 0 : t.length)) return !1;
                        var i = !0,
                            n = !1,
                            o = void 0;
                        try {
                            for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done); i = !0) {
                                var s = a.value,
                                    d = (null == s ? void 0 : s.thumbnail) && ("string" == typeof s.thumbnail || "object" == _type_of(s.thumbnail) && null !== s.thumbnail);
                                if (!(null == s ? void 0 : s.url) || !d) return !1
                            }
                        } catch (e) {
                            n = !0, o = e
                        } finally {
                            try {
                                i || null == l.return || l.return()
                            } finally {
                                if (n) throw o
                            }
                        }
                        return !0
                    })
                },
                Q = function(e) {
                    return e.every(function(e) {
                        var r = null == e ? void 0 : e.metadata;
                        return (null == r ? void 0 : r.types) && (null == r ? void 0 : r.title) && (null == r ? void 0 : r.infoTitle) && (null == r ? void 0 : r.vendorDescription) && (null == r ? void 0 : r.userDescription)
                    })
                },
                U = new Set(["blog_post", "ads_slider", "product_card", "billboard_image", "horizontal_category", "vertical_video_list", "horizontal_video_list", "horizontal_pgp_popular", "horizontal_product_popular", "horizontal_vendor_with_chat", "top_reels_review_slider", "top_reels_business_slider"]),
                K = {
                    blog_post: function(e) {
                        return e.every(function(e) {
                            var r, t = null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.posts;
                            return (null == t ? void 0 : t.length) > 0 && t.every(function(e) {
                                return null == e ? void 0 : e.imageUrl
                            })
                        })
                    },
                    ads_slider: function(e) {
                        return e.every(function(e) {
                            var r, t = null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.banners;
                            return (null == t ? void 0 : t.length) > 0 && t.every(function(e) {
                                return (null == e ? void 0 : e.url) || (null == e ? void 0 : e.image)
                            })
                        })
                    },
                    vertical_video_list: R,
                    billboard_image: function(e) {
                        return e.every(function(e) {
                            var r, t = null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.images;
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
                    horizontal_video_list: R,
                    horizontal_category: function(e) {
                        return e.every(function(e) {
                            var r, t = null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.categories;
                            return (null == t ? void 0 : t.length) > 0 && t.every(function(e) {
                                return (null == e ? void 0 : e.icon) && (null == e ? void 0 : e.link) && (null == e ? void 0 : e.title)
                            })
                        })
                    },
                    top_reels_review_slider: Q,
                    top_reels_business_slider: Q,
                    horizontal_pgp_popular: function(e) {
                        return e.every(function(e) {
                            var r;
                            return (null == e ? void 0 : e.uuid) && (null == e ? void 0 : e.title) && "number" == typeof(null == e ? void 0 : e.minPrice) && (null == e || null === (r = e.images) || void 0 === r ? void 0 : r.length) > 0
                        })
                    },
                    horizontal_product_popular: function(e) {
                        return e.every(function(e) {
                            var r, t, i;
                            return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && "number" == typeof(null == e ? void 0 : e.price) && (null == e || null === (r = e.photo) || void 0 === r ? void 0 : r.small) && (null == e || null === (t = e.vendor) || void 0 === t ? void 0 : t.name) && (null == e || null === (i = e.vendor) || void 0 === i ? void 0 : i.identifier)
                        })
                    }
                },
                F = {
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
                    horizontal_product_popular: function(e, r) {
                        var t, i = r.hasSection || (null === (t = e.metadata) || void 0 === t ? void 0 : t.showAllProduct);
                        return _object_spread_props(_object_spread({}, T(e)), {
                            items: e.result.map(function(r, t) {
                                var n, o, a, l, s, d, c, u = null;
                                return ((null === (n = r.metadata) || void 0 === n ? void 0 : n.primaryPrice) || (null === (o = r.metadata) || void 0 === o ? void 0 : o.remainingStock) || (null === (a = r.metadata) || void 0 === a ? void 0 : a.expireTime)) && (u = {
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
                                    queryParams: (0, B.Z)(e.item, !1),
                                    badgeTitle: (null == r || null === (d = r.currentPromotion) || void 0 === d ? void 0 : d.cardBadgeTitle) || (null == r || null === (c = r.metadata) || void 0 === c ? void 0 : c.badgeTitle) || !1,
                                    onClick: function() {
                                        requestIdleCallback(function() {
                                            (0, z.publishEvent)("homeClick", {
                                                item: "".concat(t + 1),
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
                                        canAddToCart: !!i && r.canAddToCart
                                    }
                                }
                            }).slice(0, 20)
                        })
                    }
                },
                H = t(1692),
                q = t(69064),
                W = t(26460),
                X = o()(function() {
                    return t.e(5536).then(t.bind(t, 55536))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [55536]
                        }
                    },
                    ssr: !1
                }),
                V = o()(function() {
                    return t.e(823).then(t.bind(t, 40823))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [40823]
                        }
                    },
                    ssr: !1,
                    loading: W.yQ
                }),
                J = o()(function() {
                    return t.e(5399).then(t.bind(t, 95399))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [95399]
                        }
                    },
                    ssr: !1,
                    loading: W.ls
                }),
                Y = o()(function() {
                    return t.e(5399).then(t.bind(t, 95399))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [95399]
                        }
                    },
                    ssr: !1,
                    loading: W.$t
                }),
                $ = o()(function() {
                    return t.e(7999).then(t.bind(t, 87999))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [87999]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, i.jsx)(L.Xp, {})
                    }
                }),
                ee = o()(function() {
                    return Promise.resolve().then(t.bind(t, 30162))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [30162]
                        }
                    },
                    ssr: !0,
                    loading: D.Z
                }),
                re = o()(function() {
                    return Promise.all([t.e(8231), t.e(7339), t.e(4935)]).then(t.bind(t, 85156))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [85156]
                        }
                    },
                    ssr: !0,
                    loading: function() {
                        return (0, i.jsx)(q.Z, {
                            hasBackground: !0,
                            discountMode: !0,
                            hasLabels: !0
                        })
                    }
                }),
                te = o()(function() {
                    return Promise.all([t.e(8231), t.e(7339), t.e(4935)]).then(t.bind(t, 85156))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [85156]
                        }
                    },
                    ssr: !1,
                    loading: q.Z
                }),
                ie = o()(function() {
                    return t.e(8139).then(t.bind(t, 8139))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8139]
                        }
                    },
                    ssr: !1,
                    loading: W.Iu
                }),
                ne = o()(function() {
                    return t.e(92).then(t.bind(t, 80092))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [80092]
                        }
                    },
                    ssr: !1,
                    loading: H.Z
                }),
                oe = (0, Z.Z)({
                    on: ["visible"]
                })(X),
                ae = (0, Z.Z)({
                    on: ["visible"]
                })(C),
                le = (0, Z.Z)({
                    on: ["visible"]
                })(V),
                se = (0, Z.Z)({
                    on: ["visible"]
                })(ee),
                de = (0, Z.Z)({
                    on: ["visible"]
                })(J),
                ce = (0, Z.Z)({
                    on: ["visible"]
                })(Y),
                ue = (0, Z.Z)({
                    on: ["visible"]
                })($),
                ve = (0, Z.Z)({
                    on: ["visible"]
                })(ie),
                _e = (0, Z.Z)({
                    on: ["visible"]
                })(ne),
                pe = (0, Z.Z)({
                    on: ["visible"]
                })(te),
                me = (0, Z.Z)({
                    on: ["visible"]
                })(re),
                he = function(e) {
                    switch (e.ui) {
                        case "ads_slider":
                            return (0, i.jsx)(W.aK, {});
                        case "horizontal_category":
                            return (0, i.jsx)(D.Z, {});
                        case "horizontal_product_popular":
                            var r, t, n;
                            return (0, i.jsx)(q.Z, {
                                hasBackground: null === (r = e.metaData) || void 0 === r ? void 0 : r.hasBackground,
                                hasLogo: null === (t = e.metaData) || void 0 === t ? void 0 : t.hasLogo,
                                discountMode: null === (n = e.metaData) || void 0 === n ? void 0 : n.hasBackground,
                                hasLabels: !0
                            });
                        case "horizontal_pgp_popular":
                            return (0, i.jsx)(H.Z, {});
                        case "horizontal_vendor_with_chat":
                            return (0, i.jsx)(W.Iu, {});
                        case "blog_post":
                            return (0, i.jsx)(W.yQ, {});
                        case "top_reels_review_slider":
                        case "top_reels_business_slider":
                            return (0, i.jsx)(L.Xp, {});
                        case "horizontal_video_list":
                            return (0, i.jsx)(W.$t, {});
                        case "vertical_video_list":
                            return (0, i.jsx)(W.ls, {});
                        default:
                            return null
                    }
                };

            function ge(e) {
                var r = e.sections,
                    t = e.isServer,
                    n = e.isHiddenCsrComponentsSkeleton,
                    o = void 0 === n || n,
                    a = (0, g.b)().ua,
                    s = function(e) {
                        var r, t = (0, v.useRef)({}),
                            i = (0, M.Z)(),
                            n = (0, v.useMemo)(function() {
                                var r = [];
                                return e.forEach(function(e) {
                                    var n, o, a = "name:".concat(e.name, "-ui:").concat(e.ui, "-items:").concat((null === (n = e.result) || void 0 === n ? void 0 : n.length) || 0);
                                    if (t[a]) r.push(t[a]);
                                    else if (U.has(e.ui)) {
                                        if (K[e.ui])
                                            if (!K[e.ui](e.result)) return;
                                        F[e.ui] ? r.push(F[e.ui](e, {
                                            hasSection: !!(null === (o = i.query) || void 0 === o ? void 0 : o.section)
                                        })) : r.push(e), t.current[a] = r
                                    }
                                }), r
                            }, [e, null === (r = i.query) || void 0 === r ? void 0 : r.section]);
                        return n
                    }(r);
                return (0, i.jsx)("div", {
                    className: l()["discovery-wrapper"],
                    children: s.map(function(e, n) {
                        var s, d;
                        return (0, i.jsx)(O.Z, {
                            children: (0, i.jsxs)(I, {
                                index: n,
                                immediateRenderCount: 2,
                                rootMargin: "400px",
                                skeleton: he(e),
                                isServer: t,
                                isPc: a.isPc,
                                children: ["horizontal_category" === e.ui && (0, i.jsx)(P(), {
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: (null == r || null === (s = r[n]) || void 0 === s ? void 0 : s.fromCache) || o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(se, {
                                            items: e.items,
                                            isLazy: !0
                                        })
                                    })
                                }), "quickaccess" === e.name && !a.isPc && (0, i.jsx)(S.Z, {}), "horizontal_product_popular" === e.ui && e.metadata.uiRealDiscount && (0, i.jsx)(P(), {
                                    fluid: !a.isPc,
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: (null == r || null === (d = r[n]) || void 0 === d ? void 0 : d.fromCache) || o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(me, {
                                            items: e.items,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            metadata: e.metadata,
                                            description: e.description,
                                            showAllProduct: e.metadata.showAllProduct,
                                            isLazyProduct: !0
                                        })
                                    })
                                }), "horizontal_product_popular" === e.ui && !e.metadata.uiRealDiscount && (0, i.jsx)(P(), {
                                    fluid: !a.isPc,
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(pe, {
                                            items: e.items,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            metadata: e.metadata,
                                            description: e.description,
                                            showAllProduct: e.metadata.showAllProduct,
                                            isLazyProduct: !0
                                        })
                                    })
                                }), "ads_slider" === e.ui && (0, i.jsx)(P(), {
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(ae, {
                                            name: e.name,
                                            banners: e.items,
                                            metadata: e.metadata,
                                            className: l().discovery__ads_slider,
                                            isLazy: !0
                                        })
                                    })
                                }), "billboard_image" === e.ui && (0, i.jsx)(C, {
                                    name: e.name,
                                    banners: e.items,
                                    metadata: e.metadata,
                                    noSkeleton: t
                                }), "billboard_video" === e.ui && (0, i.jsx)(P(), {
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(oe, {
                                            video: e.items[0],
                                            name: "billboard_video"
                                        })
                                    })
                                }), "blog_post" === e.ui && (0, i.jsx)(P(), {
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(le, {
                                            name: "blog_post",
                                            posts: e.items,
                                            title: e.title,
                                            metadata: e.metadata
                                        })
                                    })
                                }), "horizontal_video_list" === e.ui && (0, i.jsx)(P(), {
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(ce, {
                                            videos: e.items,
                                            metadata: e.metadata,
                                            name: "horizontal_video_list"
                                        })
                                    })
                                }), "vertical_video_list" === e.ui && (0, i.jsx)(P(), {
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(de, {
                                            verticalModeVideo: !0,
                                            videos: e.items,
                                            name: "vertical_video_list",
                                            metadata: e.metadata
                                        })
                                    })
                                }), "top_reels_review_slider" === e.ui && (0, i.jsx)(P(), {
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(ue, {
                                            metadata: e.result.at(0).metadata
                                        })
                                    })
                                }), "top_reels_business_slider" === e.ui && (0, i.jsx)(P(), {
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(ue, {
                                            metadata: e.result.at(0).metadata
                                        })
                                    })
                                }), "horizontal_vendor_with_chat" === e.ui && (0, i.jsx)(P(), {
                                    fluid: !0,
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(ve, {
                                            items: e.result,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            description: e.description
                                        })
                                    })
                                }), "horizontal_pgp_popular" === e.ui && (0, i.jsx)(P(), {
                                    fluid: !a.isPc,
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(_e, {
                                            items: e.items,
                                            title: e.title,
                                            moreLink: e.moreLink,
                                            description: e.description,
                                            isLazyProduct: !0
                                        })
                                    })
                                })]
                            })
                        }, "".concat(n, "-").concat(e.ui))
                    })
                })
            }
        },
        56637: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return u
                }
            });
            var i = t(32930),
                n = t(126),
                o = t.n(n),
                a = t(5164),
                l = t(81433),
                s = t.n(l),
                d = t(70437),
                c = t.n(d);

            function u() {
                return (0, i.jsx)(s(), {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    className: o()["horizontal-category-skeleton"],
                    children: (0, i.jsx)("div", {
                        className: o()["horizontal-category-skeleton__items"],
                        children: (0, a.generateArray)(10).map(function(e) {
                            return (0, i.jsxs)("div", {
                                className: o()["horizontal-category-skeleton__item"],
                                children: [(0, i.jsx)(c(), {
                                    height: 32,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)",
                                    className: o()["horizontal-category-skeleton__item-icon"]
                                }), (0, i.jsx)(c(), {
                                    width: 0 === e ? 67 : 1 === e ? 54 : 96,
                                    height: 21,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)",
                                    className: o()["horizontal-category-skeleton__item-text"]
                                })]
                            }, e)
                        })
                    })
                })
            }
        },
        30162: function(e, r, t) {
            "use strict";
            t.r(r);
            var i = t(32930),
                n = t(40877),
                o = t(27434),
                a = t(2347),
                l = t(126),
                s = t.n(l),
                d = t(84581),
                c = t(45835),
                u = t(53278),
                v = t.n(u),
                _ = t(93222),
                p = t.n(_),
                m = function(e) {
                    requestIdleCallback(function() {
                        (0, d.s)("homeClick", {
                            item: "".concat(e),
                            componentName: "horizontal_category"
                        })
                    })
                };
            r.default = (0, o.memo)(function(e) {
                var r = e.items,
                    t = e.className,
                    o = e.isLazy,
                    l = void 0 !== o && o,
                    d = (0, c.b)().ua,
                    u = d.isPc ? p() : "div",
                    _ = d.isPc ? p().Item : "div";
                return (0, i.jsx)("div", {
                    className: (0, n.Z)(s()["navigation-discovery"], t),
                    children: (0, i.jsx)(u, {
                        navigation: !0,
                        className: s()["navigation-discovery__slider"],
                        children: r.map(function(e, r) {
                            return (0, i.jsx)(_, {
                                className: s()["navigation-discovery__slider-item"],
                                children: (0, i.jsxs)(a.Z, {
                                    href: e.link,
                                    onClick: function() {
                                        return m(r + 1)
                                    },
                                    className: s()["navigation-discovery__slider-content"],
                                    children: [(0, i.jsx)(v(), {
                                        src: e.icon,
                                        ratio: 1,
                                        lazy: l,
                                        className: s()["navigation-discovery__slider-item-icon"]
                                    }), (0, i.jsx)("span", {
                                        className: (0, n.Z)(s()["navigation-discovery__slider-item-title"]),
                                        children: e.title
                                    })]
                                })
                            }, r)
                        })
                    })
                })
            })
        },
        1692: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return y
                }
            });
            var i = t(32930),
                n = t(40877),
                o = t(50874),
                a = t.n(o),
                l = t(6259),
                s = t.n(l),
                d = t(81433),
                c = t.n(d),
                u = t(70437),
                v = t.n(u);

            function _(e) {
                var r = e.className,
                    t = e.isHorizontal,
                    o = void 0 !== t && t,
                    a = e.gridMode,
                    l = void 0 !== a && a;
                return (0, i.jsx)("div", {
                    className: (0, n.Z)(r, s()["group-card-skeleton"], s()["group-card-skeleton--".concat(o ? "horizontal" : "vertical")], _define_property({}, s()["group-card-skeleton--grid-mode"], l)),
                    children: (0, i.jsxs)(c(), {
                        display: "flex",
                        flexDirection: o ? "row" : "column",
                        children: [(0, i.jsx)(v(), {
                            className: s()["group-card-skeleton__image"]
                        }), (0, i.jsxs)("div", {
                            className: s()["group-card-skeleton__content"],
                            children: [(0, i.jsx)(v(), {
                                height: "44px",
                                width: "100%",
                                radius: "2px",
                                className: s()["group-card-skeleton__title"]
                            }), (0, i.jsxs)("div", {
                                className: s()["group-card-skeleton__vendor"],
                                children: [(0, i.jsx)(v(), {
                                    height: o ? "16px" : "24px",
                                    width: "24px"
                                }), (0, i.jsx)(v(), {
                                    height: o ? "16px" : "24px",
                                    width: "60%"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: s()["group-card-skeleton__vendor"],
                                children: [(0, i.jsx)(v(), {
                                    height: o ? "16px" : "20px",
                                    width: "20px"
                                }), (0, i.jsx)(v(), {
                                    height: o ? "16px" : "20px",
                                    width: "70%"
                                })]
                            }), (0, i.jsx)(c(), {
                                display: "flex",
                                justifyContent: "flex-end",
                                mt: 12,
                                children: (0, i.jsx)(v(), {
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
            var p = t(45835),
                m = t(80966),
                h = t.n(m),
                g = t(93222),
                b = t.n(g),
                y = function() {
                    var e = (0, p.b)().ua,
                        r = e.isPc ? b() : "div",
                        t = e.isPc ? b().Item : "div";
                    return (0, i.jsxs)("section", {
                        className: h().hpp,
                        children: [(0, i.jsx)("div", {
                            className: h().header,
                            children: (0, i.jsx)("div", {
                                className: h().header__content,
                                children: (0, i.jsx)(v(), {
                                    className: (0, n.Z)(h().header__title),
                                    width: "20%",
                                    height: 27
                                })
                            })
                        }), (0, i.jsx)(c(), {
                            children: (0, i.jsx)(r, {
                                className: h().hpp__carousel,
                                children: Array.from({
                                    length: 5
                                }).map(function(e, r) {
                                    return (0, i.jsx)(t, {
                                        className: h()["hpp__carousel-item"],
                                        children: (0, i.jsx)(_, {})
                                    }, r)
                                })
                            })
                        })]
                    })
                }
        },
        69064: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return v
                }
            });
            var i = t(32930),
                n = t(40877),
                o = t(92303),
                a = t.n(o),
                l = t(81433),
                s = t.n(l),
                d = t(70437),
                c = t.n(d),
                u = t(19616);

            function v(e) {
                var r = e.hasLogo,
                    t = void 0 !== r && r,
                    o = e.hasLabels,
                    l = void 0 !== o && o,
                    d = e.discountMode,
                    v = void 0 !== d && d,
                    _ = e.hasBackground,
                    p = void 0 !== _ && _;
                return (0, i.jsxs)(s(), {
                    className: (0, n.Z)(a()["horizontal-product-popular-skeleton"]),
                    children: [t && (0, i.jsx)(s(), {
                        className: a()["horizontal-product-popular-skeleton__circle"]
                    }), (0, i.jsxs)(s(), {
                        className: (0, n.Z)(a()["horizontal-product-popular-skeleton__content"], _define_property({}, a()["horizontal-product-popular-skeleton__content--has-bg"], p)),
                        children: [(0, i.jsx)(s(), {
                            mb: 22,
                            pr: 24,
                            pl: 24,
                            children: (0, i.jsx)(c(), {
                                className: (0, n.Z)(a()["horizontal-product-popular-skeleton__title"]),
                                width: 150,
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)"
                            })
                        }), (0, i.jsxs)("div", {
                            className: a()["horizontal-product-popular-skeleton__items"],
                            children: [(0, i.jsx)(u.Z, {
                                className: a()["horizontal-product-popular-skeleton__item"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)",
                                gridMode: !0,
                                discountMode: v,
                                hasLabels: l
                            }), (0, i.jsx)(u.Z, {
                                className: a()["horizontal-product-popular-skeleton__item"],
                                backgroundColor: "var(--gray-100)",
                                waveColor: "var(--gray-200)",
                                gridMode: !0,
                                discountMode: v,
                                hasLabels: l
                            })]
                        })]
                    })]
                })
            }
        },
        88423: function(e, r, t) {
            "use strict";

            function i(e, r) {
                var t = {
                    from: "explore",
                    page: (null == e ? void 0 : e.tabName) || null,
                    component: null == e ? void 0 : e.name
                };
                return r && (t.more = !0), t
            }
            t.d(r, {
                Z: function() {
                    return i
                }
            })
        },
        19616: function(e, r, t) {
            "use strict";
            var i = t(32930),
                n = t(40877),
                o = t(50874),
                a = t.n(o),
                l = t(36379),
                s = t.n(l),
                d = t(81433),
                c = t.n(d),
                u = t(70437),
                v = t.n(u);

            function _(e) {
                var r = e.className,
                    t = e.gridMode,
                    o = void 0 !== t && t,
                    a = e.hasLabels,
                    l = void 0 !== a && a,
                    d = e.isHorizontal,
                    u = void 0 !== d && d,
                    _ = e.discountMode,
                    p = void 0 !== _ && _;
                return (0, i.jsx)("div", {
                    className: (0, n.Z)(r, s()["product-card-skeleton"], s()["product-card-skeleton--".concat(u ? "horizontal" : "vertical")], _define_property({}, s()["product-card-skeleton--grid-mode"], o)),
                    children: (0, i.jsxs)(c(), {
                        display: "flex",
                        flexDirection: u ? "row" : "column",
                        children: [(0, i.jsx)(v(), {
                            className: s()["product-card-skeleton__image"]
                        }), (0, i.jsxs)("div", {
                            className: s()["product-card-skeleton__content"],
                            children: [(0, i.jsx)(v(), {
                                height: "44px",
                                width: "100%",
                                radius: "2px",
                                className: s()["product-card-skeleton__title"]
                            }), (0, i.jsxs)("div", {
                                className: s()["product-card-skeleton__vendor"],
                                children: [(0, i.jsx)(v(), {
                                    height: u ? "20px" : "24px",
                                    width: "24px"
                                }), (0, i.jsx)(v(), {
                                    height: u ? "20px" : "24px",
                                    width: "60%"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: s()["product-card-skeleton__vendor"],
                                children: [(0, i.jsx)(v(), {
                                    height: "20px",
                                    width: "20px"
                                }), (0, i.jsx)(v(), {
                                    height: "20px",
                                    width: "70%"
                                })]
                            }), p ? (0, i.jsx)(c(), {
                                className: s()["product-card-skeleton__discount"],
                                children: (0, i.jsx)(v(), {
                                    height: "107px",
                                    width: "100%"
                                })
                            }) : (0, i.jsx)(c(), {
                                display: "flex",
                                justifyContent: "flex-end",
                                mt: 12,
                                children: (0, i.jsx)(v(), {
                                    height: "29px",
                                    width: "70px",
                                    radius: "2px"
                                })
                            }), l ? (0, i.jsxs)(c(), {
                                className: s()["product-card-skeleton__labels"],
                                children: [(0, i.jsx)(v(), {
                                    height: "22px",
                                    width: "99px",
                                    radius: "3px"
                                }), !p && (0, i.jsx)(v(), {
                                    height: "22px",
                                    width: "99px",
                                    radius: "3px"
                                })]
                            }) : (0, i.jsxs)("div", {
                                className: s()["product-card-skeleton__footer"],
                                children: [(0, i.jsx)(v(), {
                                    height: "20px",
                                    width: "40%",
                                    radius: "3px"
                                }), (0, i.jsx)(v(), {
                                    height: "20px",
                                    width: "30%",
                                    radius: "3px"
                                })]
                            })]
                        })]
                    })
                })
            }
            _.propType = {
                className: a().string,
                isHorizontal: a().bool
            }, r.Z = _
        },
        24311: function(e, r, t) {
            "use strict";
            t.d(r, {
                Xp: function() {
                    return p
                },
                xP: function() {
                    return _
                }
            });
            var i = t(32930),
                n = t(5164),
                o = t(33635),
                a = t.n(o),
                l = t(81433),
                s = t.n(l),
                d = t(70437),
                c = t.n(d),
                u = t(45835);

            function v() {
                return (0, i.jsx)("div", {
                    className: a()["reel-skeleton"],
                    children: (0, i.jsx)(c(), {
                        backgroundColor: "var(--gray-100)",
                        waveColor: "var(--gray-200)",
                        className: a()["reel-skeleton__item"]
                    })
                })
            }

            function _(e) {
                var r = e.count;
                return (0, n.range)(Number(r) || 6).map(function(e, r) {
                    return (0, i.jsx)(v, {}, r)
                })
            }

            function p() {
                var e = (0, u.b)().ua.isPc;
                return (0, i.jsxs)(s(), {
                    mb: 56,
                    children: [(0, i.jsx)(s(), {
                        mb: 14,
                        children: (0, i.jsx)(c(), {
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100,
                            height: 24
                        })
                    }), (0, i.jsx)("div", {
                        className: a()["reels-slider-skeleton"],
                        children: (0, n.range)(e ? 7 : 3).map(function(e, r) {
                            return (0, i.jsx)(v, {}, r)
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
                "skeleton-horizontal-vendor-with-chat__item": "_8BYBYc"
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