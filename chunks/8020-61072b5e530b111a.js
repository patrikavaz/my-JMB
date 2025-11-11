function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var n = 0, i = new Array(r); n < r; n++) i[n] = e[n];
    return i
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
        var i, t, o = [],
            a = !0,
            l = !1;
        try {
            for (n = n.call(e); !(a = (i = n.next()).done) && (o.push(i.value), !r || o.length !== r); a = !0);
        } catch (e) {
            l = !0, t = e
        } finally {
            try {
                a || null == n.return || n.return()
            } finally {
                if (l) throw t
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
        var n = null != arguments[r] ? arguments[r] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(r) {
            _define_property(e, r, n[r])
        })
    }
    return e
}

function ownKeys(e, r) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        r && (i = i.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), n.push.apply(n, i)
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
        56345: function(e, r, n) {
            "use strict";
            n.d(r, {
                c: function() {
                    return t
                },
                F: function() {
                    return i
                }
            });
            var i = {
                    src: "https://basalam.com/_next/static/media/default-image.aa5c295a.webp",
                    height: 500,
                    width: 500,
                    blurDataURL: "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoIAAgAAkA4JaQAA3AA/vpUDm/IJayGCiAAAA==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                t = {
                    src: "https://basalam.com/_next/static/media/default-avatar.6647bbbb.webp",
                    height: 100,
                    width: 100,
                    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBIAAAABD3Dk/4iIIBBIVs99iIj+hwZWUDggNgAAAPABAJ0BKggACAACQDglpAAPgBCR9DNVAAD+/Pcih+6N6tuNTHR1rB+Mul7iZyljFb5laUAAAA==",
                    blurWidth: 8,
                    blurHeight: 8
                }
        },
        46196: function(e, r, n) {
            "use strict";
            var i = n(32930),
                t = n(27434),
                o = n(50874),
                a = n.n(o),
                l = n(94002),
                s = n(58271);

            function d(e) {
                var r = e.children,
                    n = e.fallback,
                    t = void 0 === n ? (0, i.jsx)("div", {}) : n;
                return (0, i.jsx)(l.ErrorBoundary, {
                    fallback: t,
                    onError: s.wJ,
                    children: r
                })
            }
            d.propTypes = {
                children: a().node,
                fallback: a().node
            }, r.Z = (0, t.memo)(d)
        },
        26460: function(e, r, n) {
            "use strict";
            n.d(r, {
                $t: function() {
                    return c
                },
                Iu: function() {
                    return p
                },
                aK: function() {
                    return _
                },
                kf: function() {
                    return m
                },
                ls: function() {
                    return u
                },
                yQ: function() {
                    return v
                }
            });
            var i = n(32930),
                t = n(59785),
                o = n.n(t),
                a = n(81433),
                l = n.n(a),
                s = n(70437),
                d = n.n(s);

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

            function m() {
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

            function p() {
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
        18020: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return be
                }
            });
            var i = n(32930),
                t = n(2389),
                o = n.n(t),
                a = n(51491),
                l = n.n(a),
                s = n(40877),
                d = n(2347),
                c = n(16911),
                u = n.n(c),
                v = n(27434),
                _ = n(53278),
                m = n.n(_),
                p = n(84581),
                h = n(56345),
                b = n(45835);

            function g(e) {
                var r = e.banner,
                    n = e.metadata,
                    t = e.lazy,
                    o = void 0 === t || t,
                    a = e.sectionName,
                    l = e.itemName,
                    s = (0, b.b)().ua,
                    c = (0, v.useMemo)(function() {
                        return (null == n ? void 0 : n.size) ? s.isPc ? n.size.desktop.height / n.size.desktop.width : n.size.mobile.height / n.size.mobile.width : null
                    }, [n, s.isPc]),
                    _ = (0, v.useCallback)(function() {
                        (0, p.s)("homeClick", {
                            item: l,
                            componentName: a
                        })
                    }, [l, a]),
                    g = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(m(), {
                            lazy: o,
                            ratio: c,
                            alt: (null == n ? void 0 : n.title) || "",
                            className: u()["banner-discovery__image"],
                            src: (s.isPc ? r.src.pc : r.src.mobile) || h.F.src
                        }), n.title && (0, i.jsx)("div", {
                            className: u()["banner-discovery__content"],
                            children: (0, i.jsx)("span", {
                                className: u()["banner-discovery__content-title"],
                                children: n.title
                            })
                        })]
                    });
                return r.link ? (0, i.jsx)(d.Z, {
                    "data-from": "home",
                    href: r.link,
                    className: u()["banner-discovery"],
                    onClick: _,
                    children: g
                }) : (0, i.jsx)("div", {
                    className: u()["banner-discovery"],
                    children: g
                })
            }
            var y = n(87930),
                f = n.n(y),
                x = n(83719),
                j = n(65074),
                k = n.n(j),
                w = n(93222),
                N = n.n(w),
                z = n(5164),
                C = (0, v.memo)(function(e) {
                    var r = e.name,
                        n = e.banners,
                        t = e.metadata,
                        o = e.className,
                        a = e.speed,
                        l = void 0 === a ? 30 : a,
                        d = e.loop,
                        c = void 0 !== d && d,
                        u = e.delay,
                        _ = void 0 === u ? 6e3 : u,
                        m = e.isLazy,
                        p = void 0 !== m && m,
                        h = e.noSkeleton,
                        y = void 0 !== h && h,
                        j = (0, b.b)().ua,
                        w = (0, v.useRef)(),
                        C = _sliced_to_array((0, v.useState)(0), 2),
                        A = C[0],
                        P = C[1],
                        S = _sliced_to_array((0, v.useState)(!0), 2),
                        Z = S[0],
                        L = S[1],
                        O = _sliced_to_array((0, v.useState)(!1), 2),
                        I = O[0],
                        D = O[1],
                        B = _sliced_to_array((0, v.useState)(!1), 2),
                        M = B[0],
                        T = B[1],
                        E = (0, v.useMemo)(function() {
                            return "true" === t.autoplay ? [(0, z.BsLightCarouselAutoplayPlugin)({
                                delay: _
                            })] : void 0
                        }, [t, _]),
                        G = (null == n ? void 0 : n.length) > 1,
                        R = j.isPc && (null == n ? void 0 : n.length) > 1,
                        U = (0, v.useCallback)(function(e) {
                            !y && (T(!0), G && P(e.selectedScrollSnap()), R && (L(function() {
                                return e.canScrollNext()
                            }), D(function() {
                                return e.canScrollPrev()
                            })))
                        }, [y, R, G]),
                        Q = (0, v.useCallback)(function(e) {
                            G && P(e.selectedScrollSnap()), R && (L(function() {
                                return e.canScrollNext()
                            }), D(function() {
                                return e.canScrollPrev()
                            }))
                        }, [R, G]),
                        F = (0, v.useCallback)(function() {
                            var e, r, n, i, t, o;
                            null === (r = w.current) || void 0 === r || null === (e = r.api) || void 0 === e || e.scrollNext(), null === (o = w.current) || void 0 === o || null === (t = o.api) || void 0 === t || null === (i = t.plugins()) || void 0 === i || null === (n = i.autoplay) || void 0 === n || n.reset()
                        }, []),
                        H = (0, v.useCallback)(function() {
                            var e, r, n, i, t, o;
                            null === (r = w.current) || void 0 === r || null === (e = r.api) || void 0 === e || e.scrollPrev(), null === (o = w.current) || void 0 === o || null === (t = o.api) || void 0 === t || null === (i = t.plugins()) || void 0 === i || null === (n = i.autoplay) || void 0 === n || n.reset()
                        }, []),
                        W = (0, v.useCallback)(function(e) {
                            var r, n, i, t, o, a;
                            null === (n = w.current) || void 0 === n || null === (r = n.api) || void 0 === r || r.scrollTo(e), null === (a = w.current) || void 0 === a || null === (o = a.api) || void 0 === o || null === (t = o.plugins()) || void 0 === t || null === (i = t.autoplay) || void 0 === i || i.reset()
                        }, []),
                        q = (0, v.useCallback)(function(e) {
                            w.current = e, w.current && (0, z.isClientSide)() && (window.stopMainCarouselAutoplay = function() {
                                var e, r, n, i;
                                null === (i = w.current) || void 0 === i || null === (n = i.api) || void 0 === n || null === (r = n.plugins()) || void 0 === r || null === (e = r.autoplay) || void 0 === e || e.stop()
                            }, window.startMainCarouselAutoplay = function() {
                                var e, r, n, i;
                                null === (i = w.current) || void 0 === i || null === (n = i.api) || void 0 === n || null === (r = n.plugins()) || void 0 === r || null === (e = r.autoplay) || void 0 === e || e.play()
                            })
                        }, []);
                    (0, v.useEffect)(function() {
                        y || 1 !== (null == n ? void 0 : n.length) || T(!0)
                    }, [null == n ? void 0 : n.length, y]);
                    var K = (0, v.useMemo)(function() {
                        var e, r, i, o, a, l, s, d;
                        return (null == t ? void 0 : t.size) && (null == n ? void 0 : n[0]) ? j.isPc ? ((null == t || null === (r = t.size) || void 0 === r || null === (e = r.desktop) || void 0 === e ? void 0 : e.height) || 0) / ((null == t || null === (o = t.size) || void 0 === o || null === (i = o.desktop) || void 0 === i ? void 0 : i.width) || 0) : ((null == t || null === (l = t.size) || void 0 === l || null === (a = l.mobile) || void 0 === a ? void 0 : a.height) || 0) / ((null == t || null === (d = t.size) || void 0 === d || null === (s = d.mobile) || void 0 === s ? void 0 : s.width) || 0) : null
                    }, [n, null == t ? void 0 : t.size, j.isPc]);
                    return (0, i.jsxs)("div", {
                        className: (0, s.Z)([f()["banner-slider-discovery"], o]),
                        children: [!M && !y && (0, i.jsx)(x.Z, {
                            ratio: K
                        }), (0, i.jsxs)("div", {
                            className: (0, s.Z)(f()["banner-slider-discovery__content"], _define_property({}, f()["banner-slider-discovery__content--hidden"], !M && !y)),
                            children: [R && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(k(), {
                                    className: (0, s.Z)(f()["banner-slider-discovery__next"], _define_property({}, f()["banner-slider-discovery__next--active"], Z)),
                                    color: "secondary",
                                    variant: "outline",
                                    icon: "bi-angle-left",
                                    size: "md",
                                    square: !0,
                                    onClick: F
                                }), (0, i.jsx)(k(), {
                                    className: (0, s.Z)(f()["banner-slider-discovery__prev"], _define_property({}, f()["banner-slider-discovery__prev--active"], I)),
                                    color: "secondary",
                                    variant: "outline",
                                    icon: "bi-angle-right",
                                    size: "md",
                                    square: !0,
                                    onClick: H
                                })]
                            }), 1 === (null == n ? void 0 : n.length) && (0, i.jsx)(g, {
                                lazy: p,
                                sectionName: r,
                                banner: n[0],
                                metadata: t,
                                itemName: "".concat(r, "-", 0)
                            }), (null == n ? void 0 : n.length) > 1 && (0, i.jsx)(N(), {
                                loop: c,
                                duration: l,
                                ref: q,
                                plugins: E,
                                onInit: U,
                                onSelect: Q,
                                children: null == n ? void 0 : n.map(function(e, n) {
                                    return (0, i.jsx)(N().Item, {
                                        className: f()["banner-slider-discovery__slider-item"],
                                        children: (0, i.jsx)(g, {
                                            banner: e,
                                            sectionName: r,
                                            lazy: 0 !== n || p,
                                            metadata: t,
                                            itemName: "".concat(r, "-", 0)
                                        })
                                    }, n)
                                })
                            }), G && (0, i.jsx)("div", {
                                className: f()["banner-slider-discovery__pagination"],
                                children: n.map(function(e, r) {
                                    return (0, i.jsx)("button", {
                                        "aria-label": "اسلاید بعدی",
                                        className: (0, s.Z)(f()["banner-slider-discovery__pagination-btn"], _define_property({}, f()["banner-slider-discovery__pagination-btn--active"], r === A)),
                                        onClick: function() {
                                            return W(r)
                                        }
                                    }, r)
                                })
                            })]
                        })]
                    })
                }),
                A = n(177),
                P = n.n(A),
                S = n(26491),
                Z = n(69691),
                L = n(24311);

            function O(e) {
                var r = e.isPc,
                    n = e.children,
                    t = e.isServer,
                    o = e.index,
                    a = void 0 === o ? 0 : o,
                    l = e.skeleton,
                    s = void 0 === l ? null : l,
                    d = e.rootMargin,
                    c = void 0 === d ? "400px" : d,
                    u = e.immediateRenderCount,
                    _ = void 0 === u ? 2 : u,
                    m = _sliced_to_array((0, v.useState)(a < _ || t), 2),
                    p = m[0],
                    h = m[1],
                    b = (0, v.useRef)(null);
                return (0, v.useEffect)(function() {
                    if (!p) {
                        var e = new IntersectionObserver(function(r) {
                            _sliced_to_array(r, 1)[0].isIntersecting && (h(!0), e.disconnect())
                        }, {
                            rootMargin: c,
                            threshold: 0
                        });
                        return b.current && e.observe(b.current),
                            function() {
                                return e.disconnect()
                            }
                    }
                }, [p, c]), (0, i.jsx)("div", {
                    ref: b,
                    children: r ? p ? n : (0, i.jsx)(P(), {
                        children: s
                    }) : p ? n : s
                })
            }
            var I = n(46196),
                D = n(56637),
                B = n(88107),
                M = n(88423);

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
            n(19361);
            var R = function(e) {
                    return e.every(function(e) {
                        var r, n = null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.videos;
                        if (!(null == n ? void 0 : n.length)) return !1;
                        var i = !0,
                            t = !1,
                            o = void 0;
                        try {
                            for (var a, l = n[Symbol.iterator](); !(i = (a = l.next()).done); i = !0) {
                                var s = a.value,
                                    d = (null == s ? void 0 : s.thumbnail) && ("string" == typeof s.thumbnail || "object" == _type_of(s.thumbnail) && null !== s.thumbnail);
                                if (!(null == s ? void 0 : s.url) || !d) return !1
                            }
                        } catch (e) {
                            t = !0, o = e
                        } finally {
                            try {
                                i || null == l.return || l.return()
                            } finally {
                                if (t) throw o
                            }
                        }
                        return !0
                    })
                },
                U = function(e) {
                    return e.every(function(e) {
                        var r = null == e ? void 0 : e.metadata;
                        return (null == r ? void 0 : r.types) && (null == r ? void 0 : r.title) && (null == r ? void 0 : r.infoTitle) && (null == r ? void 0 : r.vendorDescription) && (null == r ? void 0 : r.userDescription)
                    })
                },
                Q = new Set(["blog_post", "ads_slider", "product_card", "billboard_image", "horizontal_category", "vertical_video_list", "horizontal_video_list", "horizontal_pgp_popular", "horizontal_product_popular", "horizontal_vendor_with_chat", "top_reels_review_slider", "top_reels_business_slider"]),
                F = {
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
                    vertical_video_list: R,
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
                    horizontal_video_list: R,
                    horizontal_category: function(e) {
                        return e.every(function(e) {
                            var r, n = null == e || null === (r = e.metadata) || void 0 === r ? void 0 : r.categories;
                            return (null == n ? void 0 : n.length) > 0 && n.every(function(e) {
                                return (null == e ? void 0 : e.icon) && (null == e ? void 0 : e.link) && (null == e ? void 0 : e.title)
                            })
                        })
                    },
                    top_reels_review_slider: U,
                    top_reels_business_slider: U,
                    horizontal_pgp_popular: function(e) {
                        return e.every(function(e) {
                            var r;
                            return (null == e ? void 0 : e.uuid) && (null == e ? void 0 : e.title) && "number" == typeof(null == e ? void 0 : e.minPrice) && (null == e || null === (r = e.images) || void 0 === r ? void 0 : r.length) > 0
                        })
                    },
                    horizontal_product_popular: function(e) {
                        return e.every(function(e) {
                            var r, n, i;
                            return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && "number" == typeof(null == e ? void 0 : e.price) && (null == e || null === (r = e.photo) || void 0 === r ? void 0 : r.small) && (null == e || null === (n = e.vendor) || void 0 === n ? void 0 : n.name) && (null == e || null === (i = e.vendor) || void 0 === i ? void 0 : i.identifier)
                        })
                    }
                },
                H = {
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
                        var n, i = r.hasSection || (null === (n = e.metadata) || void 0 === n ? void 0 : n.showAllProduct);
                        return _object_spread_props(_object_spread({}, T(e)), {
                            items: e.result.map(function(r, n) {
                                var t, o, a, l, s, d, c, u = null;
                                return ((null === (t = r.metadata) || void 0 === t ? void 0 : t.primaryPrice) || (null === (o = r.metadata) || void 0 === o ? void 0 : o.remainingStock) || (null === (a = r.metadata) || void 0 === a ? void 0 : a.expireTime)) && (u = {
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
                                    queryParams: (0, M.Z)(e.item, !1),
                                    badgeTitle: (null == r || null === (d = r.currentPromotion) || void 0 === d ? void 0 : d.cardBadgeTitle) || (null == r || null === (c = r.metadata) || void 0 === c ? void 0 : c.badgeTitle) || !1,
                                    onClick: function() {
                                        requestIdleCallback(function() {
                                            (0, z.publishEvent)("homeClick", {
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
                                        canAddToCart: !!i && r.canAddToCart
                                    }
                                }
                            }).slice(0, 20)
                        })
                    }
                },
                W = n(1692),
                q = n(69064),
                K = n(26460),
                J = o()(function() {
                    return n.e(5536).then(n.bind(n, 55536))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [55536]
                        }
                    },
                    ssr: !1
                }),
                X = o()(function() {
                    return n.e(823).then(n.bind(n, 40823))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [40823]
                        }
                    },
                    ssr: !1,
                    loading: K.yQ
                }),
                V = o()(function() {
                    return n.e(5399).then(n.bind(n, 95399))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [95399]
                        }
                    },
                    ssr: !1,
                    loading: K.ls
                }),
                Y = o()(function() {
                    return n.e(5399).then(n.bind(n, 95399))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [95399]
                        }
                    },
                    ssr: !1,
                    loading: K.$t
                }),
                $ = o()(function() {
                    return n.e(7999).then(n.bind(n, 87999))
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
                re = o()(function() {
                    return Promise.all([n.e(7339), n.e(4935)]).then(n.bind(n, 85156))
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
                ne = o()(function() {
                    return Promise.all([n.e(7339), n.e(4935)]).then(n.bind(n, 85156))
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
                    return n.e(8139).then(n.bind(n, 8139))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8139]
                        }
                    },
                    ssr: !1,
                    loading: K.Iu
                }),
                te = o()(function() {
                    return n.e(92).then(n.bind(n, 80092))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [80092]
                        }
                    },
                    ssr: !1,
                    loading: W.Z
                }),
                oe = (0, S.Z)({
                    on: ["visible"]
                })(J),
                ae = (0, S.Z)({
                    on: ["visible"]
                })(C),
                le = (0, S.Z)({
                    on: ["visible"]
                })(X),
                se = (0, S.Z)({
                    on: ["visible"]
                })(ee),
                de = (0, S.Z)({
                    on: ["visible"]
                })(V),
                ce = (0, S.Z)({
                    on: ["visible"]
                })(Y),
                ue = (0, S.Z)({
                    on: ["visible"]
                })($),
                ve = (0, S.Z)({
                    on: ["visible"]
                })(ie),
                _e = (0, S.Z)({
                    on: ["visible"]
                })(te),
                me = (0, S.Z)({
                    on: ["visible"]
                })(ne),
                pe = (0, S.Z)({
                    on: ["visible"]
                })(re),
                he = function(e) {
                    switch (e.ui) {
                        case "ads_slider":
                            return (0, i.jsx)(K.aK, {});
                        case "horizontal_category":
                            return (0, i.jsx)(D.Z, {});
                        case "horizontal_product_popular":
                            var r, n, t;
                            return (0, i.jsx)(q.Z, {
                                hasBackground: null === (r = e.metaData) || void 0 === r ? void 0 : r.hasBackground,
                                hasLogo: null === (n = e.metaData) || void 0 === n ? void 0 : n.hasLogo,
                                discountMode: null === (t = e.metaData) || void 0 === t ? void 0 : t.hasBackground,
                                hasLabels: !0
                            });
                        case "horizontal_pgp_popular":
                            return (0, i.jsx)(W.Z, {});
                        case "horizontal_vendor_with_chat":
                            return (0, i.jsx)(K.Iu, {});
                        case "blog_post":
                            return (0, i.jsx)(K.yQ, {});
                        case "top_reels_review_slider":
                        case "top_reels_business_slider":
                            return (0, i.jsx)(L.Xp, {});
                        case "horizontal_video_list":
                            return (0, i.jsx)(K.$t, {});
                        case "vertical_video_list":
                            return (0, i.jsx)(K.ls, {});
                        default:
                            return null
                    }
                };

            function be(e) {
                var r = e.sections,
                    n = e.isServer,
                    t = e.isHiddenCsrComponentsSkeleton,
                    o = void 0 === t || t,
                    a = (0, b.b)().ua,
                    s = function(e) {
                        var r, n = (0, v.useRef)({}),
                            i = (0, B.Z)(),
                            t = (0, v.useMemo)(function() {
                                var r = [];
                                return e.forEach(function(e) {
                                    var t, o, a = "name:".concat(e.name, "-ui:").concat(e.ui, "-items:").concat((null === (t = e.result) || void 0 === t ? void 0 : t.length) || 0);
                                    if (n[a]) r.push(n[a]);
                                    else if (Q.has(e.ui)) {
                                        if (F[e.ui])
                                            if (!F[e.ui](e.result)) return;
                                        H[e.ui] ? r.push(H[e.ui](e, {
                                            hasSection: !!(null === (o = i.query) || void 0 === o ? void 0 : o.section)
                                        })) : r.push(e), n.current[a] = r
                                    }
                                }), r
                            }, [e, null === (r = i.query) || void 0 === r ? void 0 : r.section]);
                        return t
                    }(r);
                return (0, i.jsx)("div", {
                    className: l()["discovery-wrapper"],
                    children: s.map(function(e, t) {
                        var s, d;
                        return (0, i.jsx)(I.Z, {
                            children: (0, i.jsxs)(O, {
                                index: t,
                                immediateRenderCount: 2,
                                rootMargin: "400px",
                                skeleton: he(e),
                                isServer: n,
                                isPc: a.isPc,
                                children: ["horizontal_category" === e.ui && (0, i.jsx)(P(), {
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: (null == r || null === (s = r[t]) || void 0 === s ? void 0 : s.fromCache) || o ? "block" : "none"
                                        },
                                        children: (0, i.jsx)(se, {
                                            items: e.items,
                                            isLazy: !0
                                        })
                                    })
                                }), "quickaccess" === e.name && !a.isPc && (0, i.jsx)(Z.Z, {}), "horizontal_product_popular" === e.ui && e.metadata.uiRealDiscount && (0, i.jsx)(P(), {
                                    fluid: !a.isPc,
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: (null == r || null === (d = r[t]) || void 0 === d ? void 0 : d.fromCache) || o ? "block" : "none"
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
                                }), "horizontal_product_popular" === e.ui && !e.metadata.uiRealDiscount && (0, i.jsx)(P(), {
                                    fluid: !a.isPc,
                                    children: (0, i.jsx)("div", {
                                        style: {
                                            display: o ? "block" : "none"
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
                                    noSkeleton: n
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
                        }, "".concat(t, "-").concat(e.ui))
                    })
                })
            }
        },
        30162: function(e, r, n) {
            "use strict";
            n.r(r);
            var i = n(32930),
                t = n(40877),
                o = n(27434),
                a = n(2347),
                l = n(126),
                s = n.n(l),
                d = n(84581),
                c = n(45835),
                u = n(53278),
                v = n.n(u),
                _ = n(93222),
                m = n.n(_),
                p = function(e) {
                    requestIdleCallback(function() {
                        (0, d.s)("homeClick", {
                            item: "".concat(e),
                            componentName: "horizontal_category"
                        })
                    })
                };
            r.default = (0, o.memo)(function(e) {
                var r = e.items,
                    n = e.className,
                    o = e.isLazy,
                    l = void 0 !== o && o,
                    d = (0, c.b)().ua,
                    u = d.isPc ? m() : "div",
                    _ = d.isPc ? m().Item : "div";
                return (0, i.jsx)("div", {
                    className: (0, t.Z)(s()["navigation-discovery"], n),
                    children: (0, i.jsx)(u, {
                        navigation: !0,
                        className: s()["navigation-discovery__slider"],
                        children: r.map(function(e, r) {
                            return (0, i.jsx)(_, {
                                className: s()["navigation-discovery__slider-item"],
                                children: (0, i.jsxs)(a.Z, {
                                    href: e.link,
                                    onClick: function() {
                                        return p(r + 1)
                                    },
                                    className: s()["navigation-discovery__slider-content"],
                                    children: [(0, i.jsx)(v(), {
                                        src: e.icon,
                                        ratio: 1,
                                        lazy: l,
                                        className: s()["navigation-discovery__slider-item-icon"]
                                    }), (0, i.jsx)("span", {
                                        className: (0, t.Z)(s()["navigation-discovery__slider-item-title"]),
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
            var i = n(32930),
                t = n(40877),
                o = n(50874),
                a = n.n(o),
                l = n(6259),
                s = n.n(l),
                d = n(81433),
                c = n.n(d),
                u = n(70437),
                v = n.n(u);

            function _(e) {
                var r = e.className,
                    n = e.isHorizontal,
                    o = void 0 !== n && n,
                    a = e.gridMode,
                    l = void 0 !== a && a;
                return (0, i.jsx)("div", {
                    className: (0, t.Z)(r, s()["group-card-skeleton"], s()["group-card-skeleton--".concat(o ? "horizontal" : "vertical")], _define_property({}, s()["group-card-skeleton--grid-mode"], l)),
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
            var m = n(45835),
                p = n(80966),
                h = n.n(p),
                b = n(93222),
                g = n.n(b),
                y = function() {
                    var e = (0, m.b)().ua,
                        r = e.isPc ? g() : "div",
                        n = e.isPc ? g().Item : "div";
                    return (0, i.jsxs)("section", {
                        className: h().hpp,
                        children: [(0, i.jsx)("div", {
                            className: h().header,
                            children: (0, i.jsx)("div", {
                                className: h().header__content,
                                children: (0, i.jsx)(v(), {
                                    className: (0, t.Z)(h().header__title),
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
                                    return (0, i.jsx)(n, {
                                        className: h()["hpp__carousel-item"],
                                        children: (0, i.jsx)(_, {})
                                    }, r)
                                })
                            })
                        })]
                    })
                }
        },
        88423: function(e, r, n) {
            "use strict";

            function i(e, r) {
                var n = {
                    from: "explore",
                    page: (null == e ? void 0 : e.tabName) || null,
                    component: null == e ? void 0 : e.name
                };
                return r && (n.more = !0), n
            }
            n.d(r, {
                Z: function() {
                    return i
                }
            })
        },
        24311: function(e, r, n) {
            "use strict";
            n.d(r, {
                Xp: function() {
                    return m
                },
                xP: function() {
                    return _
                }
            });
            var i = n(32930),
                t = n(5164),
                o = n(33635),
                a = n.n(o),
                l = n(81433),
                s = n.n(l),
                d = n(70437),
                c = n.n(d),
                u = n(45835);

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
                return (0, t.range)(Number(r) || 6).map(function(e, r) {
                    return (0, i.jsx)(v, {}, r)
                })
            }

            function m() {
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
                        children: (0, t.range)(e ? 7 : 3).map(function(e, r) {
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