function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
    return t
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function asyncGeneratorStep(e, r, n, t, o, i, s) {
    try {
        var a = e[i](s),
            l = a.value
    } catch (e) {
        return void n(e)
    }
    a.done ? r(l) : Promise.resolve(l).then(t, o)
}

function _async_to_generator(e) {
    return function() {
        var r = this,
            n = arguments;
        return new Promise(function(t, o) {
            var i = e.apply(r, n);

            function s(e) {
                asyncGeneratorStep(i, t, o, s, a, "next", e)
            }

            function a(e) {
                asyncGeneratorStep(i, t, o, s, a, "throw", e)
            }
            s(void 0)
        })
    }
}

function _define_property(e, r, n) {
    return r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = n, e
}

function _iterable_to_array(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _iterable_to_array_limit(e, r) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var t, o, i = [],
            s = !0,
            a = !1;
        try {
            for (n = n.call(e); !(s = (t = n.next()).done) && (i.push(t.value), !r || i.length !== r); s = !0);
        } catch (e) {
            a = !0, o = e
        } finally {
            try {
                s || null == n.return || n.return()
            } finally {
                if (a) throw o
            }
        }
        return i
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
        var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), t.forEach(function(r) {
            _define_property(e, r, n[r])
        })
    }
    return e
}

function ownKeys(e, r) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        r && (t = t.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), n.push.apply(n, t)
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

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
}

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _array_like_to_array(e, r) : void 0
    }
}

function _ts_generator(e, r) {
    var n, t, o, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return s.next = a(0), s.throw = a(1), s.return = a(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function a(a) {
        return function(l) {
            return function(a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s && (s = 0, a[0] && (i = 0)), i;) try {
                    if (n = 1, t && (o = 2 & a[0] ? t.return : a[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, a[1])).done) return o;
                    switch (t = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                        case 0:
                        case 1:
                            o = a;
                            break;
                        case 4:
                            return i.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            i.label++, t = a[1], a = [0];
                            continue;
                        case 7:
                            a = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                i.label = a[1];
                                break
                            }
                            if (6 === a[0] && i.label < o[1]) {
                                i.label = o[1], o = a;
                                break
                            }
                            if (o && i.label < o[2]) {
                                i.label = o[2], i.ops.push(a);
                                break
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    a = r.call(e, i)
                } catch (e) {
                    a = [6, e], t = 0
                } finally {
                    n = o = 0
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }([a, l])
        }
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405, 5399, 5627], {
        4260: function(e, r, n) {
            "use strict";
            var t = n(32930),
                o = n(69389),
                i = n(5164),
                s = n(36350),
                a = n(50874),
                l = n(99249),
                c = n(27434),
                d = {
                    id: a.string,
                    loop: a.bool,
                    muted: a.bool,
                    poster: a.string,
                    autoplay: a.bool,
                    children: a.node,
                    controls: a.bool,
                    observer: a.bool,
                    preload: a.string,
                    className: a.string,
                    playsInline: a.bool,
                    src: a.string.isRequired
                },
                u = null,
                v = c.forwardRef(function(e, r) {
                    var a = e.id,
                        d = e.src,
                        v = e.loop,
                        _ = e.muted,
                        p = e.poster,
                        h = e.preload,
                        f = e.autoplay,
                        m = e.children,
                        y = e.className,
                        b = e.playsInline,
                        x = e.controls,
                        j = void 0 === x || x,
                        g = e.observer,
                        w = void 0 !== g && g,
                        k = s.useFallbackRef(r),
                        P = c.useRef(),
                        C = _sliced_to_array(c.useState(!1), 2),
                        N = C[0],
                        M = C[1],
                        S = _sliced_to_array(c.useState(!1), 2),
                        I = S[0],
                        Z = S[1];
                    c.useEffect(function() {
                        Z(!1)
                    }, [d]);
                    var O = c.useMemo(function() {
                            return i.isClientSide() && "IntersectionObserver" in window ? new IntersectionObserver(function(e) {
                                var r;
                                e[0].isIntersecting || null === (r = k.current) || void 0 === r || r.pause()
                            }) : null
                        }, [k]),
                        L = c.useCallback(function() {
                            return _async_to_generator(function() {
                                var e, r;
                                return _ts_generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 3, , 4]), !(e = u) ? [4, n.e(6865).then(n.bind(n, 5120))] : [3, 2];
                                        case 1:
                                            e = t.sent().default, u || (u = e), t.label = 2;
                                        case 2:
                                            return e && e.isSupported() && k.current ? (P.current = new e({
                                                startLevel: 3
                                            }), P.current.loadSource(d), P.current.attachMedia(k.current)) : k.current && k.current.canPlayType("application/vnd.apple.mpegurl") && (k.current.src = d), [3, 4];
                                        case 3:
                                            return r = t.sent(), console.error(r), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })()
                        }, [d, k]),
                        E = c.useCallback(function() {
                            try {
                                k.current && (k.current.src = d)
                            } catch (e) {
                                console.error(e)
                            }
                        }, [d, k]),
                        z = c.useCallback(function() {
                            M(!0)
                        }, []),
                        A = c.useCallback(function() {
                            M(!1)
                        }, []),
                        D = c.useCallback(function() {
                            Z(!0)
                        }, []);
                    return c.useEffect(function() {
                        var e = k.current;
                        return w && e && O && O.observe(e),
                            function() {
                                w && e && O && O.unobserve(e)
                            }
                    }, [w, O, k]), c.useEffect(function() {
                        return d.endsWith(".m3u8") ? L() : E(),
                            function() {
                                var e;
                                null === (e = P.current) || void 0 === e || e.destroy()
                            }
                    }, [d, L, E]), c.useEffect(function() {
                        k.current && (k.current.addEventListener("play", z), k.current.addEventListener("pause", A), k.current.addEventListener("ended", A), k.current.addEventListener("canplay", D));
                        var e = k.current;
                        return function() {
                            var r;
                            null === (r = P.current) || void 0 === r || r.destroy(), null == e || e.removeEventListener("play", z), null == e || e.removeEventListener("pause", A), null == e || e.removeEventListener("ended", A), null == e || e.removeEventListener("canplay", D)
                        }
                    }, [f, D, A, z, k]), t.jsxs("div", {
                        className: o.clsx("bs-video", y),
                        children: [t.jsxs("video", {
                            id: a,
                            loop: v,
                            muted: _,
                            ref: k,
                            poster: p,
                            preload: h,
                            controls: j,
                            autoPlay: f,
                            playsInline: b,
                            className: "bs-video__player",
                            children: [m, "مرورگر شما از ویدیو پشتیبانی نمی‌کند."]
                        }), t.jsx(l.BsTransition, {
                            mounted: !N && I,
                            transition: "fade",
                            duration: 400,
                            children: function(e) {
                                return t.jsx("button", {
                                    "aria-label": "play",
                                    className: "bs-video__play",
                                    style: e,
                                    onClick: function() {
                                        var e;
                                        return null === (e = k.current) || void 0 === e ? void 0 : e.play()
                                    },
                                    children: t.jsx("i", {
                                        className: "bi-play"
                                    })
                                })
                            }
                        })]
                    })
                });
            v.propTypes = d, v.displayName = "BsVideo", e.exports = v
        },
        75627: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return g
                }
            });
            var t = n(32930),
                o = n(40877),
                i = n(2389),
                s = n.n(i),
                a = n(7867),
                l = n.n(a),
                c = n(27434),
                d = n(5164),
                u = n(29723),
                v = n(55253),
                _ = n.n(v),
                p = n(76303),
                h = n.n(p),
                f = n(53278),
                m = n.n(f),
                y = n(4260),
                b = n.n(y),
                x = s()(function() {
                    return Promise.all([n.e(3620), n.e(7028), n.e(9994), n.e(9724), n.e(8032)]).then(n.bind(n, 62717))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [62717]
                        }
                    },
                    ssr: !1
                }),
                j = s()(function() {
                    return Promise.all([n.e(3620), n.e(4563), n.e(6175)]).then(n.bind(n, 93347))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [93347]
                        }
                    },
                    ssr: !1
                });

            function g(e) {
                var r, n, i, s, a, v, p, f, y = e.story,
                    g = e.onClick,
                    w = e.sliderAvatar,
                    k = e.reelsShowing,
                    P = void 0 === k || k,
                    C = e.selectedCategoryIds,
                    N = _sliced_to_array((0, c.useState)(!1), 2),
                    M = N[0],
                    S = N[1],
                    I = (0, u.Kp)(["isIosApp"]).isIosApp,
                    Z = (null === (r = y.photo) || void 0 === r ? void 0 : r.url) || (null === (n = y.video) || void 0 === n ? void 0 : n.thumbnail),
                    O = (0, c.useMemo)(function() {
                        return {
                            data: {
                                user: y.user || {},
                                stories: [_object_spread_props(_object_spread({}, y), {
                                    isFollowed: !0
                                })]
                            }
                        }
                    }, [y]),
                    L = function() {
                        S(!1)
                    };
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("div", {
                        className: (0, o.Z)([l().discovery__story, _define_property({}, l()["discovery__story--with-bg"], !!y.video)]),
                        onClick: function() {
                            S(!0), null == g || g()
                        },
                        "data-from": "discovery",
                        children: [y.video ? (0, t.jsx)(b(), {
                            poster: I ? null === (i = y.video) || void 0 === i ? void 0 : i.thumbnail : void 0,
                            playsInline: !0,
                            className: l()["discovery__story-video"],
                            autoplay: !I,
                            loop: !0,
                            muted: !0,
                            src: (null === (s = y.videoUrls) || void 0 === s ? void 0 : s.HLS) || y.video.url,
                            controls: !1
                        }) : (0, t.jsx)(m(), {
                            className: l()["discovery__story-img"],
                            src: Z,
                            withPlaceHolder: !0,
                            ratio: 1.7
                        }), y.seen >= 5 && (0, t.jsxs)("div", {
                            className: l()["discovery__story-seen"],
                            children: [(0, t.jsx)("i", {
                                className: "bi-eye-fill"
                            }), "".concat((0, d.roundBigNumber)(y.seen, 1e3)).replace(/^\+/, "")]
                        }), (0, t.jsx)("div", {
                            className: l()["discovery__story-icon"],
                            children: (0, t.jsx)(h(), {
                                name: "bi-story",
                                color: "var(--white)"
                            })
                        }), w && (0, t.jsxs)("div", {
                            className: l()["discovery__story-info"],
                            children: [(0, t.jsx)(_(), {
                                className: l()["discovery__story-info__avatar"],
                                src: null == y || null === (v = y.user) || void 0 === v || null === (a = v.avatar) || void 0 === a ? void 0 : a.small
                            }), (0, t.jsx)("p", {
                                className: l()["discovery__story-info__title"],
                                children: null == y || null === (f = y.user) || void 0 === f || null === (p = f.vendor) || void 0 === p ? void 0 : p.title
                            })]
                        })]
                    }), !!M && (P ? (0, t.jsx)(x, {
                        currentContentIdOnClicked: y.id,
                        selectedCategoryIds: C,
                        onClose: L,
                        show: !0
                    }) : (0, t.jsx)(j, {
                        initialData: O,
                        storyId: y.id,
                        onClose: L
                    }))]
                })
            }
        },
        32888: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return h
                }
            });
            var t = n(32930),
                o = n(40877),
                i = n(34980),
                s = n(70968),
                a = n.n(s),
                l = n(45835),
                c = n(29723),
                d = n(81433),
                u = n.n(d),
                v = n(1103),
                _ = n.n(v),
                p = n(27434);

            function h(e) {
                var r = e.name,
                    n = e.video,
                    s = e.index,
                    d = e.onPlay,
                    v = e.onPause,
                    h = e.metadata,
                    f = e.autoPlay,
                    m = void 0 !== f && f,
                    y = e.showInModal,
                    b = void 0 === y || y,
                    x = e.verticalModeVideo,
                    j = void 0 !== x && x,
                    g = (0, l.b)().ua,
                    w = _sliced_to_array((0, p.useState)(!1), 2),
                    k = w[0],
                    P = w[1],
                    C = _sliced_to_array((0, p.useState)(!1), 2),
                    N = C[0],
                    M = C[1],
                    S = _sliced_to_array((0, p.useState)(!1), 2),
                    I = S[0],
                    Z = S[1],
                    O = (0, c.Kp)(["isIosApp"]).isIosApp,
                    L = (0, p.useRef)(null),
                    E = (0, p.useRef)(),
                    z = (0, p.useMemo)(function() {
                        var e, r, t = n.thumbnail,
                            o = (null === (e = n.thumbnail) || void 0 === e ? void 0 : e.mobile) || t,
                            i = (null === (r = n.thumbnail) || void 0 === r ? void 0 : r.desktop) || t;
                        return g.isMobile ? o : i
                    }, [n, g]),
                    A = (0, p.useMemo)(function() {
                        var e, r, t = n.url,
                            o = (null === (e = n.url) || void 0 === e ? void 0 : e.mobile) || t,
                            i = (null === (r = n.url) || void 0 === r ? void 0 : r.desktop) || t;
                        return g.isMobile ? o : i
                    }, [n, g]),
                    D = function(e) {
                        e.preventDefault(), b && Z(!0)
                    },
                    R = (0, p.useCallback)(function(e) {
                        g.isMobile && (e.stopPropagation(), M(function(e) {
                            return !e
                        }))
                    }, [N]);
                (0, p.useEffect)(function() {
                    m && L.current && (P(!0), E.current = L.current.play(), void 0 !== E.current && E.current.then(function() {
                        E.current = void 0
                    }).catch(function() {
                        P(!1), E.current = void 0
                    }))
                }, [m]);
                var T = (0, p.useMemo)(function() {
                    return (null == h ? void 0 : h.size) ? g.isMobile ? h.size.mobile.height / h.size.mobile.width : h.size.desktop.height / h.size.desktop.width : null
                }, [h, g]);
                return (0, t.jsxs)("div", {
                    className: a()["video-discovery"],
                    children: [(0, t.jsx)(_(), {
                        mounted: !k,
                        transition: "fade",
                        duration: 200,
                        children: function(e) {
                            return (0, t.jsx)("div", {
                                style: e,
                                children: (0, t.jsx)("img", {
                                    src: z,
                                    alt: " ",
                                    loading: "lazy",
                                    className: a()["video-discovery__image"],
                                    onClick: function(e) {
                                        return D(e)
                                    },
                                    "aria-hidden": "true"
                                })
                            })
                        }
                    }), (0, t.jsxs)("video", {
                        muted: m,
                        ref: L,
                        onPause: function(e) {
                            return function() {
                                var e;
                                if (void 0 === E.current) return null == L || null === (e = L.current) || void 0 === e || e.pause(), P(!1), void(v && v());
                                E.current.then(function() {
                                    var e;
                                    null == L || null === (e = L.current) || void 0 === e || e.pause(), P(!1), v && v()
                                }).catch(function() {
                                    P(!1)
                                })
                            }()
                        },
                        className: a()["video-discovery__video"],
                        onPlay: function() {
                            return d && d()
                        },
                        controls: k && !m,
                        playsInline: !0,
                        autoPlay: !O && m,
                        loop: m,
                        preload: "none",
                        onClick: function(e) {
                            return D(e)
                        },
                        children: [(0, t.jsx)("track", {
                            kind: "captions",
                            src: null
                        }), (0, t.jsx)("source", {
                            src: A
                        })]
                    }), (0, t.jsx)("div", {
                        style: {
                            paddingBottom: "".concat(100 * T, "%")
                        }
                    }), !!n.description && !k && (0, t.jsx)("div", {
                        className: a()["video-discovery__content"],
                        onClick: function(e) {
                            return R(e)
                        },
                        "aria-hidden": "true",
                        children: (0, t.jsxs)("div", {
                            className: a()["video-discovery__content-texts"],
                            children: [(0, t.jsxs)(u(), {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                children: [(0, t.jsx)("span", {
                                    className: a()["video-discovery__content-texts-title"],
                                    children: n.description
                                }), !!g.isMobile && (0, t.jsx)("i", {
                                    className: (0, o.Z)("bi-angle-up", a()["video-discovery__content-texts-toggle"], {
                                        "video-discovery__content-texts-toggle--expanded": N
                                    })
                                })]
                            }), (0, t.jsx)("span", {
                                className: (0, o.Z)(a()["video-discovery__content-texts-subtitle"], {
                                    "video-discovery__content-texts-subtitle--expanded": N
                                }),
                                children: n.subtitle
                            })]
                        })
                    }), !k && (0, t.jsx)("button", {
                        className: a()["video-discovery__play"],
                        onClick: function(e) {
                            return D(e)
                        },
                        "aria-label": "پخش ویدیو",
                        children: (0, t.jsx)("i", {
                            className: (0, o.Z)("bi-play", a()["video-discovery__play-icon"])
                        })
                    }), I && (0, t.jsx)(i.Z, {
                        show: !0,
                        name: r,
                        index: s,
                        video: n,
                        close: function() {
                            return Z(!1)
                        },
                        verticalModeVideo: j
                    })]
                })
            }
        },
        34980: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return m
                }
            });
            var t = n(32930),
                o = n(40877),
                i = n(27434),
                s = n(5164),
                a = n(87446),
                l = n.n(a),
                c = n(92369),
                d = n(65074),
                u = n.n(d),
                v = n(92034),
                _ = n.n(v),
                p = n(45835),
                h = n(29723),
                f = n(88107);

            function m(e) {
                var r = e.show,
                    n = e.video,
                    a = e.close,
                    d = e.name,
                    v = e.index,
                    m = e.verticalModeVideo,
                    y = void 0 !== m && m,
                    b = (0, p.b)().ua,
                    x = (0, f.Z)(),
                    j = (0, h.Kp)(["isIosApp"]).isIosApp,
                    g = (0, i.useMemo)(function() {
                        var e, r, t = n.thumbnail,
                            o = (null === (e = n.thumbnail) || void 0 === e ? void 0 : e.mobile) || t,
                            i = (null === (r = n.thumbnail) || void 0 === r ? void 0 : r.desktop) || t;
                        return b.isMobile ? o : i
                    }, [n, b]),
                    w = (0, i.useMemo)(function() {
                        var e, r, t = n.url,
                            o = (null === (e = n.url) || void 0 === e ? void 0 : e.mobile) || t,
                            i = (null === (r = n.url) || void 0 === r ? void 0 : r.desktop) || t;
                        return b.isMobile ? o : i
                    }, [n, b]);
                return (0, t.jsx)(_(), {
                    show: r,
                    onClose: function() {
                        return a()
                    },
                    size: "sm",
                    footerComponent: (0, t.jsxs)("div", {
                        className: l()["video-modal__footer"],
                        children: [!!n.link && (0, t.jsx)(u(), {
                            className: l()["video-modal__footer-btn"],
                            label: n.bottomTitle,
                            variant: "outline",
                            onClick: function() {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return null == a || a(), (0, c.publishEvent)("homeClick", {
                                                    item: v,
                                                    componentName: d
                                                }), [4, (0, s.sleep)(350)];
                                            case 1:
                                                return e.sent(), x.push(n.link), [2]
                                        }
                                    })
                                })()
                            }
                        }), (0, t.jsx)(u(), {
                            className: l()["video-modal__footer-btn"],
                            label: "بستن",
                            variant: "outline",
                            color: "secondary",
                            onClick: a
                        })]
                    }),
                    children: (0, t.jsxs)("div", {
                        className: l()["video-modal__body"],
                        children: [(0, t.jsxs)("video", {
                            controls: !0,
                            preload: "none",
                            poster: g,
                            className: (0, o.Z)(l()["video-modal__body-video"], _define_property({}, l()["video-modal__body-video--vertical-mode"], y)),
                            playsInline: !0,
                            autoPlay: !j,
                            children: [(0, t.jsx)("track", {
                                kind: "captions",
                                src: null
                            }), (0, t.jsx)("source", {
                                src: w
                            })]
                        }), (0, t.jsx)("span", {
                            className: l()["video-modal__body-title"],
                            children: n.title
                        }), (0, t.jsx)("div", {
                            className: l()["video-modal__body-description"],
                            children: (0, t.jsx)("p", {
                                className: l()["video-modal__body-description-text"],
                                children: n.description
                            })
                        })]
                    })
                })
            }
        },
        95399: function(e, r, n) {
            "use strict";
            n.r(r);
            var t = n(32930),
                o = n(40877),
                i = n(32888),
                s = n(78153),
                a = n.n(s),
                l = n(92369),
                c = n(27434),
                d = n(93222),
                u = n.n(d),
                v = n(45835),
                _ = n(5164);
            r.default = (0, c.memo)(function(e) {
                var r = e.name,
                    n = e.videos,
                    s = e.metadata,
                    d = e.verticalModeVideo,
                    p = void 0 !== d && d,
                    h = (0, v.b)().ua,
                    f = (0, c.useMemo)(function() {
                        return s.autoplay && [(0, _.BsLightCarouselAutoplayPlugin)({
                            delay: s.autoplay
                        })]
                    }, [s.autoplay]),
                    m = (0, c.useCallback)(function(e) {
                        requestIdleCallback(function() {
                            (0, l.publishEvent)("homeClick", {
                                name: r,
                                item: "".concat(e)
                            })
                        })
                    }, []),
                    y = h.isPc ? u() : "div",
                    b = h.isPc ? u().Item : "div";
                return (0, t.jsxs)("div", {
                    className: a()["video-slider-discovery"],
                    children: [!!(null == s ? void 0 : s.title) && (0, t.jsx)("div", {
                        className: a()["video-slider-discovery__header"],
                        children: s.title
                    }), (0, t.jsx)(y, {
                        navigation: !0,
                        plugins: f,
                        className: a()["video-slider-discovery__carousel"],
                        children: n.map(function(e, n) {
                            return (0, t.jsx)(b, {
                                className: (0, o.Z)(a()["video-slider-discovery__carousel-item"], _define_property({}, a()["video-slider-discovery__carousel-item--vertical"], p)),
                                onClick: function() {
                                    return m(n + 1)
                                },
                                children: (0, t.jsx)(i.Z, {
                                    playable: !0,
                                    name: r,
                                    video: e,
                                    index: n,
                                    metadata: s,
                                    verticalModeVideo: p
                                })
                            }, n)
                        })
                    })]
                })
            })
        },
        52655: function(e, r, n) {
            "use strict";
            n.r(r);
            var t = n(32930),
                o = n(40877),
                i = n(27434),
                s = n(34198),
                a = n.n(s),
                l = n(58633),
                c = n(45835),
                d = n(11516),
                u = n(88158),
                v = n(81433),
                _ = n.n(v),
                p = n(177),
                h = n.n(p),
                f = n(70437),
                m = n.n(f),
                y = n(83719),
                b = n(56637),
                x = n(69064);
            r.default = (0, i.memo)(function(e) {
                var r = e.className,
                    n = e.hasCoupon,
                    i = (0, c.b)().ua;
                return (0, t.jsxs)("div", {
                    className: (0, o.Z)(r, a()["home-page-skeleton"]),
                    children: [(0, t.jsx)(d.Z, {
                        isShowSearch: !0
                    }), (0, t.jsx)(_(), {
                        pt: 16,
                        pb: 16,
                        children: (0, t.jsx)(h(), {
                            children: (0, t.jsx)(l.Z, {})
                        })
                    }), (0, t.jsx)(_(), {
                        mb: 32,
                        children: (0, t.jsx)(y.Z, {})
                    }), (0, t.jsx)(_(), {
                        children: (0, t.jsx)(h(), {
                            fluid: !i.isPc,
                            children: (0, t.jsx)(b.Z, {})
                        })
                    }), n && (0, t.jsx)(_(), {
                        pt: 8,
                        children: (0, t.jsxs)(h(), {
                            children: [(0, t.jsx)(_(), {
                                mb: 16,
                                children: (0, t.jsx)(m(), {
                                    height: 25,
                                    width: 150,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)"
                                })
                            }), (0, t.jsx)(u.Z, {})]
                        })
                    }), (0, t.jsx)(_(), {
                        children: (0, t.jsx)(h(), {
                            fluid: !i.isPc,
                            children: (0, t.jsx)(x.Z, {
                                hasBackground: !0,
                                discountModeWithTimer: !0,
                                hasLabels: !0
                            })
                        })
                    })]
                })
            })
        },
        11516: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return l
                }
            });
            var t = n(32930),
                o = n(53175),
                i = n.n(o),
                s = n(70437),
                a = n.n(s);

            function l(e) {
                var r = e.isShowSearch;
                return (0, t.jsx)("div", {
                    className: i()["header-body"],
                    children: r ? (0, t.jsx)(a(), {
                        width: "100%",
                        height: "100%"
                    }) : (0, t.jsx)(a(), {
                        width: 120,
                        height: 21
                    })
                })
            }
        },
        38251: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return ae
                }
            });
            var t = n(58271),
                o = n(5164),
                i = n(32930),
                s = n(2389),
                a = n.n(s),
                l = n(74123),
                c = n.n(l),
                d = n(67938),
                u = n(88592),
                v = n(52233),
                _ = n.n(v),
                p = n(27434),
                h = n(50874),
                f = n.n(h),
                m = n(2134),
                y = n.n(m),
                b = n(88107);

            function x(e) {
                var r = e.preloadImage,
                    n = e.isWebview,
                    t = void 0 !== n && n,
                    o = (0, b.Z)(),
                    s = y()().publicRuntimeConfig,
                    a = "باسلام؛ بازار بی‌مرز",
                    l = (0, p.useMemo)(function() {
                        var e, r, n, t;
                        return null === (t = o.asPath) || void 0 === t || null === (n = t.split("?")) || void 0 === n || null === (r = n[0]) || void 0 === r || null === (e = r.split("#")) || void 0 === e ? void 0 : e[0]
                    }, [o.asPath]),
                    c = s.baseUrl + l,
                    d = "«باسلام» یک بازار بی‌مرز برای خرید و فروش است. در باسلام می‌توانید هر چیزی را که به دنبالش می‌گردید در میان دریای متنوعی از محصولات پیدا کنید.";
                return (0, i.jsxs)(_(), {
                    children: [(0, i.jsx)("title", {
                        children: a
                    }), !t && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("meta", {
                            property: "og:title",
                            content: a
                        }), (0, i.jsx)("meta", {
                            property: "og:url",
                            content: c
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "«باسلام» یک بازار بی‌مرز برای خرید و فروش محصولات مختلف با کیفیت و قیمت‌های متفاوت است. در باسلام می‌توانید هر چیزی را که به دنبالش می‌گردید در میان دریای متنوعی از محصولات پیدا کنید. محصولات خاصی که در فروشگاه‌های اینترنتی کمتر پیدا می‌شود. این محصولات را می‌توانید مستقیما از خود تولیدکننده‌ها یا واسطه‌ها بخرید. همچنین، می‌توانید غرفه خود را راه بیاندازید و محصولاتتان را بفروشید. به باسلام بیایید، بین هزاران غرفه‌ی آنلاین بچرخید و درباره‌ی تجربه‌های متنوع خریدوفروش گپ بزنید."
                        }), (0, i.jsx)("meta", {
                            property: "og:description",
                            content: d
                        }), (0, i.jsx)("meta", {
                            property: "og:site_name",
                            content: "باسلام؛ بازار بی‌مرز"
                        }), (0, i.jsx)("link", {
                            rel: "canonical",
                            href: c
                        })]
                    }), r && (0, i.jsx)("link", {
                        rel: "preload",
                        as: "image",
                        href: r,
                        fetchpriority: "high"
                    }), "/" === l && !t && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:site",
                            content: "@basalam_bazaar"
                        }), (0, i.jsx)("meta", {
                            name: "twitter:title",
                            content: a
                        }), (0, i.jsx)("meta", {
                            name: "twitter:description",
                            content: d
                        })]
                    })]
                })
            }
            x.propTypes = {
                preloadImage: f().string
            };
            var j = n(37314),
                g = n(26491),
                w = n(58633),
                k = n(45835),
                P = n(81433),
                C = n.n(P),
                N = n(177),
                M = n.n(N),
                S = n(70437),
                I = n.n(S);
            n(73853), n(52655), n(75627), n(95399), n(46196);
            var Z = n(96803);
            n(30162), n(58507), n(34980);
            var O = n(65817);

            function L() {
                var e = (0, k.b)().ua.isPc;
                return (0, i.jsxs)(C(), {
                    children: [(0, i.jsx)(C(), {
                        mb: 16,
                        children: (0, i.jsx)(M(), {
                            children: (0, i.jsx)(I(), {
                                width: 150,
                                height: 24,
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)"
                            })
                        })
                    }), (0, i.jsx)(C(), {
                        mb: 12,
                        children: (0, i.jsx)(M(), {
                            children: (0, i.jsx)(C(), {
                                display: "flex",
                                gap: 12,
                                children: (0, o.range)(e ? 10 : 4).map(function(e, r) {
                                    return (0, i.jsx)(I(), {
                                        width: 100,
                                        height: 36,
                                        waveColor: "var(--gray-200)",
                                        backgroundColor: "var(--gray-100)"
                                    }, r)
                                })
                            })
                        })
                    }), (0, i.jsx)(O.Z, {
                        type: "reel"
                    }), (0, i.jsx)(C(), {
                        mt: 12,
                        children: (0, i.jsx)(O.Z, {
                            type: "story"
                        })
                    }), (0, i.jsx)(C(), {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 40,
                        mb: 96,
                        children: (0, i.jsx)(I(), {
                            width: 125,
                            height: 48,
                            waveColor: "var(--gray-200)",
                            backgroundColor: "var(--gray-100)"
                        })
                    })]
                })
            }
            var E = n(3087),
                z = n(60802),
                A = n(83642),
                D = n(39145),
                R = n.n(D),
                T = n(24311),
                G = n(88158),
                B = n(56637),
                K = n(69064),
                F = n(26460);

            function W(e) {
                var r = e.hasCoupon,
                    n = (0, k.b)().ua;
                return (0, i.jsxs)(C(), {
                    children: [(0, i.jsx)(C(), {
                        mb: 32,
                        children: (0, i.jsx)(F.kf, {})
                    }), (0, i.jsx)(M(), {
                        children: (0, i.jsx)(B.Z, {})
                    }), r && (0, i.jsx)(C(), {
                        pt: 8,
                        pb: 24,
                        children: (0, i.jsxs)(M(), {
                            children: [(0, i.jsx)(C(), {
                                mb: 16,
                                children: (0, i.jsx)(I(), {
                                    height: 25,
                                    width: 150,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)"
                                })
                            }), (0, i.jsx)(G.Z, {})]
                        })
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(K.Z, {
                            hasLabels: !0,
                            hasBackground: !0,
                            discountModeWithTimer: !0
                        })
                    }), (0, i.jsx)(M(), {
                        children: (0, i.jsx)(B.Z, {})
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(F.aK, {})
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(F.xG, {})
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(F.aK, {})
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(K.Z, {
                            hasLabels: n.isPc,
                            multipleLabels: !n.isPc,
                            discountMode: !0
                        })
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(K.Z, {
                            hasLabels: n.isPc,
                            multipleLabels: !n.isPc,
                            discountMode: !0
                        })
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(F.xG, {})
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(K.Z, {
                            hasLabels: n.isPc,
                            multipleLabels: !n.isPc,
                            discountMode: !0
                        })
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(K.Z, {
                            hasLabels: n.isPc,
                            multipleLabels: !n.isPc,
                            discountMode: !0
                        })
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(K.Z, {
                            hasLabels: n.isPc,
                            multipleLabels: !n.isPc,
                            discountMode: !0
                        })
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(K.Z, {
                            hasLabels: n.isPc,
                            multipleLabels: !n.isPc,
                            discountMode: !0
                        })
                    }), (0, i.jsx)(M(), {
                        children: (0, i.jsx)(T.Xp, {})
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(K.Z, {
                            hasLabels: n.isPc,
                            multipleLabels: !n.isPc,
                            discountMode: !0
                        })
                    }), (0, i.jsx)(M(), {
                        fluid: !n.isPc,
                        children: (0, i.jsx)(K.Z, {
                            hasLabels: n.isPc,
                            multipleLabels: !n.isPc,
                            discountMode: !0
                        })
                    }), (0, i.jsx)(M(), {
                        children: (0, i.jsx)(F.Iu, {})
                    }), (0, i.jsx)(M(), {
                        children: (0, i.jsx)(T.Xp, {})
                    })]
                })
            }
            var U = n(34198),
                H = n.n(U),
                V = n(1692),
                q = function(e, r) {
                    switch (e.ui) {
                        case "ads_slider":
                            return (0, i.jsx)(M(), {
                                children: (0, i.jsx)(F.aK, {})
                            }, "ads_slider");
                        case "horizontal_category":
                            return (0, i.jsx)(M(), {
                                children: (0, i.jsx)(B.Z, {})
                            }, "horizontal_category");
                        case "horizontal_product_popular":
                            var n, t, o, s, a, l;
                            return (0, i.jsx)(M(), {
                                fluid: !r,
                                children: (0, i.jsx)(K.Z, {
                                    hasBackground: null === (n = e.metaData) || void 0 === n ? void 0 : n.hasBackground,
                                    hasLogo: null === (t = e.metaData) || void 0 === t ? void 0 : t.hasLogo,
                                    discountModeWithTimer: null === (o = e.metaData) || void 0 === o ? void 0 : o.hasBackground,
                                    discountMode: !(null === (s = e.metaData) || void 0 === s ? void 0 : s.hasBackground),
                                    hasLabels: (null === (a = e.metaData) || void 0 === a ? void 0 : a.hasBackground) || r,
                                    multipleLabels: !(null === (l = e.metaData) || void 0 === l ? void 0 : l.hasBackground) && !r
                                })
                            });
                        case "horizontal_pgp_popular":
                            return (0, i.jsx)(V.Z, {});
                        case "horizontal_vendor_with_chat":
                            return r ? (0, i.jsx)(M(), {
                                children: (0, i.jsx)(F.Iu, {})
                            }) : (0, i.jsx)(F.Iu, {});
                        case "blog_post":
                            return (0, i.jsx)(F.yQ, {});
                        case "top_reels_review_slider":
                            return (0, i.jsx)(M(), {
                                children: (0, i.jsx)(T.Xp, {})
                            }, "top_reels_review_slider");
                        case "top_reels_business_slider":
                            return (0, i.jsx)(M(), {
                                children: (0, i.jsx)(T.Xp, {})
                            }, "top_reels_business_slider");
                        case "horizontal_video_list":
                            return (0, i.jsx)(F.$t, {});
                        case "vertical_video_list":
                            return (0, i.jsx)(F.ls, {});
                        case "horizontal_vendor_coupons":
                            return (0, i.jsx)(M(), {
                                children: (0, i.jsx)(F.xG, {})
                            });
                        default:
                            return null
                    }
                };

            function X(e) {
                var r = e.items,
                    n = void 0 === r ? [] : r,
                    t = (0, k.b)().ua.isPc;
                return (0, i.jsx)(C(), {
                    className: H()["csr-components-skeleton"],
                    children: n.map(function(e) {
                        return (0, i.jsx)(p.Fragment, {
                            children: (0, i.jsx)(C(), {
                                className: "styles['csr-components-skeleton__".concat(e.ui, "']"),
                                children: q(e, t)
                            })
                        }, "".concat(e.name, "-").concat(e.ui))
                    })
                })
            }
            var Q = a()(function() {
                    return Promise.all([n.e(8231), n.e(1740), n.e(2156)]).then(n.bind(n, 91740))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [91740]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, i.jsx)(C(), {
                            my: 16,
                            children: (0, i.jsx)(w.Z, {})
                        })
                    }
                }),
                Y = a()(function() {
                    return n.e(9666).then(n.bind(n, 99666))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [99666]
                        }
                    },
                    ssr: !1,
                    loading: L
                }),
                J = a()(function() {
                    return Promise.resolve().then(n.bind(n, 94287))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [94287]
                        }
                    },
                    ssr: !0
                }),
                $ = a()(function() {
                    return n.e(6660).then(n.bind(n, 16660))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [16660]
                        }
                    },
                    ssr: !1
                }),
                ee = a()(function() {
                    return Promise.all([n.e(9836), n.e(8739)]).then(n.bind(n, 49836))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [49836]
                        }
                    },
                    ssr: !0
                }),
                re = (0, g.Z)({
                    on: ["visible"]
                })(ee),
                ne = (0, g.Z)({
                    on: ["visible"]
                })(Y);

            function te(e) {
                var r = e.enabled,
                    n = _sliced_to_array((0, p.useState)(!1), 2),
                    t = n[0],
                    o = n[1],
                    s = (0, p.useRef)(null);
                return (0, p.useEffect)(function() {
                    var e = new IntersectionObserver(function(r) {
                        _sliced_to_array(r, 1)[0].isIntersecting && (o(!0), e.disconnect())
                    }, {
                        rootMargin: "300px"
                    });
                    return s.current && e.observe(s.current),
                        function() {
                            return e.disconnect()
                        }
                }, []), (0, i.jsx)("div", {
                    ref: s,
                    children: t ? (0, i.jsx)(Y, {
                        enabled: r
                    }) : (0, i.jsx)(L, {})
                })
            }

            function oe(e) {
                var r, n, t, o, s = e.isServer,
                    a = (0, k.b)(),
                    l = a.ua,
                    v = a.isWebview,
                    _ = a.isCachedPage,
                    h = (0, z.l)().getFeatureValue,
                    f = (0, u.M_)(["currentUser"]).currentUser,
                    m = _sliced_to_array((0, p.useState)(!0), 2),
                    y = m[0],
                    b = m[1],
                    g = (0, p.useRef)(),
                    w = (0, p.useMemo)(function() {
                        return h("home_page", {})
                    }, [h]),
                    P = w.explore,
                    C = void 0 === P || P,
                    N = w.discovery,
                    M = void 0 === N || N,
                    S = (0, d.NS)({
                        enabled: C,
                        queryKey: ["first-page-discovery"],
                        queryFn: function(e) {
                            var r = e.pageParam,
                                n = void 0 === r ? 0 : r;
                            return (0, E._I)({
                                userId: null == f ? void 0 : f.id,
                                config: {
                                    params: {
                                        lastRank: n,
                                        tab: "home_discovery",
                                        size: s ? 12 : 30,
                                        item_size: s ? 12 : 30
                                    }
                                }
                            })
                        },
                        getNextPageParam: function(e, r) {
                            var n, t;
                            return ((null === (n = e.meta) || void 0 === n ? void 0 : n._hasPartialData) && e.items.length < 12 || 12 === e.items.length || 1 === r.length) && void 0 !== (null === (t = e.meta) || void 0 === t ? void 0 : t.lastRank) ? e.meta.lastRank : void 0
                        }
                    }),
                    I = S.data,
                    O = S.isError,
                    L = S.isLoading,
                    D = S.refetch,
                    T = S.hasNextPage,
                    G = S.fetchNextPage,
                    B = S.isFetchingNextPage,
                    K = (null == I ? void 0 : I.pages.length) > 0 && M,
                    F = (0, p.useMemo)(function() {
                        var e;
                        return null == I || null === (e = I.pages) || void 0 === e ? void 0 : e.reduce(function(e, r) {
                            return _to_consumable_array(e).concat(_to_consumable_array(r.items || []))
                        }, [])
                    }, [null == I ? void 0 : I.pages]),
                    U = (0, p.useMemo)(function() {
                        var e, r, n, t, o, i;
                        return "billboard_image" === (null == F || null === (e = F[0]) || void 0 === e ? void 0 : e.ui) ? null === (i = F[0].result) || void 0 === i || null === (o = i[0]) || void 0 === o || null === (t = o.metadata) || void 0 === t || null === (n = t.images) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r[l.isPc ? "desktopUrl" : "url"] : null
                    }, [F, l.isPc]);
                (0, p.useEffect)(function() {
                    (!L && !B && (null == F ? void 0 : F.length) > 4 || O) && b(!1)
                }, [L, B, null == F ? void 0 : F.length, O]);
                var H = (0, p.useMemo)(function() {
                        return y && s
                    }, [y, s]),
                    V = (0, p.useCallback)(function() {
                        L || B || G()
                    }, [L, B, G]),
                    q = null === (r = g.current) || void 0 === r ? void 0 : r.offsetHeight,
                    Y = !_ && s;
                return (0, i.jsxs)("div", {
                    className: c()["home-page"],
                    children: [(0, i.jsx)(x, {
                        preloadImage: U,
                        isWebview: v
                    }), l.isPc ? (0, i.jsx)(J, {}) : (0, i.jsx)(j.default, {
                        isShowSearch: !0
                    }), !l.isPc && !v && (0, i.jsx)($, {
                        active: "HOME"
                    }), (0, i.jsx)(Q, {
                        comeFromHomePage: !0
                    }), (0, i.jsxs)(R(), {
                        loadingComponent: null,
                        fetchMore: V,
                        hasMore: !(B || O || L || !T),
                        hasError: !(!T || !O),
                        threshold: s ? q : l.isPc ? 400 : 10,
                        children: [!!(null == F ? void 0 : F.length) && (0, i.jsx)(Z.Z, {
                            isHiddenCsrComponentsSkeleton: !H || Y,
                            isServer: s,
                            sections: F
                        }), !T && O && (0, i.jsx)(A.Z, {
                            fetch: D
                        }), L && !s && (0, i.jsx)(W, {}), (0, i.jsx)("div", {
                            ref: g,
                            style: {
                                display: H ? "block" : "none"
                            },
                            children: (0, i.jsx)(X, {
                                items: (null == I || null === (o = I.pages) || void 0 === o || null === (t = o[0]) || void 0 === t || null === (n = t.meta) || void 0 === n ? void 0 : n._remainingItemsMetadata) || []
                            })
                        })]
                    }), s ? (0, i.jsx)(ne, {
                        enabled: K
                    }) : (0, i.jsx)(te, {
                        enabled: K
                    }), !v && (0, i.jsx)(re, {})]
                })
            }
            var ie = n(21234),
                se = (0, o.isClientSide)();
            oe.getInitialProps = function(e) {
                return _async_to_generator(function() {
                    var r, n, o, i, s, a, l, c, d, u, v, _, p, h, f, m, y, b, x, j, g;
                    return _ts_generator(this, function(w) {
                        switch (w.label) {
                            case 0:
                                if (r = e.req, n = e.res, o = e.userId, i = e.isWebview, s = e.queryClient, a = e.isCachedPage, !(l = !!r)) return [2, {
                                    isServer: l
                                }];
                                c = i ? 3 : 4, w.label = 1;
                            case 1:
                                return w.trys.push([1, 3, , 4]), [4, s.fetchInfiniteQuery(["first-page-discovery"], function() {
                                    return (0, E._I)({
                                        userId: o || 0,
                                        config: {
                                            req: r,
                                            res: n,
                                            params: {
                                                size: 12,
                                                lastRank: 0,
                                                itemSize: 12,
                                                tab: "home_discovery"
                                            }
                                        }
                                    })
                                })];
                            case 2:
                                return f = w.sent(), !((null == f || null === (v = f.pages) || void 0 === v || null === (u = v[0]) || void 0 === u || null === (d = u.items) || void 0 === d ? void 0 : d.length) > 0) && n && (r.app.noCache = !0), (m = null == f || null === (_ = f.pages) || void 0 === _ ? void 0 : _[0]) && m.items.length > c && a && (y = m.items.slice(0, c).map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        fromCache: !0
                                    })
                                }), b = m.items.slice(c), s.setQueryData(["first-page-discovery"], _object_spread_props(_object_spread({}, f), {
                                    pages: [_object_spread_props(_object_spread({}, m), {
                                        items: y,
                                        meta: _object_spread_props(_object_spread({}, m.meta), {
                                            _hasPartialData: !0,
                                            lastRank: (null === (h = m.items) || void 0 === h || null === (p = h[c - 1]) || void 0 === p ? void 0 : p.rank) || 0,
                                            _remainingItemsMetadata: b.map(function(e) {
                                                return {
                                                    ui: e.ui,
                                                    name: e.name,
                                                    metaData: e.metaData
                                                }
                                            })
                                        })
                                    })]
                                }))), [3, 4];
                            case 3:
                                return x = w.sent(), j = (0, t.Pt)(x), g = 422 === (null == j ? void 0 : j.statusCode) ? 404 : j.statusCode || 500, [2, (!se && n && (n.statusCode = g), {
                                    error: {
                                        statusCode: g
                                    }
                                })];
                            case 4:
                                return [2, {
                                    isServer: l
                                }]
                        }
                    })
                })()
            };
            var ae = (0, ie.Z)(oe)
        },
        45728: function(e, r, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(38251)
            }])
        },
        7867: function(e) {
            e.exports = {
                discovery__story: "_0fD8P8",
                "discovery__story--with-bg": "_6m8O8E",
                "discovery__story-icon": "CJZ_oH",
                "discovery__story-seen": "QvjrRH",
                "discovery__story-img": "o6t_UA",
                "discovery__story-video": "_9K0RnE",
                "discovery__story-info": "wOsVWe",
                "discovery__story-info__title": "_7ZYdAE",
                "discovery__story-info__avatar": "ddG466"
            }
        },
        70968: function(e) {
            e.exports = {
                "video-discovery": "WGS_h2",
                "video-discovery__image": "_KwTjF",
                "video-discovery__content-texts-subtitle": "G4IpXK",
                "video-discovery__video": "QU1rh9",
                "video-discovery__content": "nWe7vM",
                "video-discovery__content-texts": "O5RC2P",
                "video-discovery__content-texts-title": "re4cTr",
                "video-discovery__content-texts-toggle": "_4UNSNC",
                "video-discovery__content-texts-toggle--expanded": "sMXsJg",
                "video-discovery__content-texts-subtitle--expanded": "_3Dfbx3",
                "video-discovery__content-time": "Sq66Tv",
                "video-discovery__play": "PRTh7a",
                "video-discovery__play-icon": "i6oF7M"
            }
        },
        87446: function(e) {
            e.exports = {
                "video-modal__body": "mase84",
                "video-modal__body-video": "QLCMLP",
                "video-modal__body-video--vertical-mode": "gbtBmf",
                "video-modal__body-title": "WJ6jVT",
                "video-modal__body-description": "kmkOCK",
                "video-modal__body-description-text": "ux0GVs",
                "video-modal__footer": "YDyTA4",
                "video-modal__footer-btn": "XWWL1N"
            }
        },
        78153: function(e) {
            e.exports = {
                "video-slider-discovery": "_UW3px",
                "video-slider-discovery__header": "TMe4Ke",
                "video-slider-discovery__carousel": "ppBo_t",
                "video-slider-discovery__carousel-item": "YUzSyr",
                "video-slider-discovery__carousel-item--vertical": "dtnSts",
                "video-slider-discovery__next": "qgSwkH",
                "video-slider-discovery__prev": "Y0UClE",
                skeleton: "L8YKwE",
                skeleton__items: "_9adcy7",
                skeleton__item: "v7sCaP"
            }
        },
        34198: function(e) {
            e.exports = {
                "home-page-skeleton": "hCA3O6",
                "csr-components-skeleton__horizontal_product_popular": "ghR_ie",
                "csr-components-skeleton__ads_slider": "HF_7fZ",
                "csr-components-skeleton__top_reels_review_slider": "iKY0BG",
                "csr-components-skeleton__horizontal_vendor_with_chat": "J5_EFJ",
                "csr-components-skeleton__horizontal_pgp_popular": "CRHb2_"
            }
        },
        74123: function(e) {
            e.exports = {
                "home-page": "F2y4l4"
            }
        }
    },
    function(e) {
        e.O(0, [973, 2079, 3650, 246, 8293, 5382, 5250, 8738, 1198, 1234, 7314, 8990, 2746, 4287, 9857, 6803, 3853, 9774, 2888, 179], function() {
            return e(e.s = 45728)
        }), _N_E = e.O()
    }
]);