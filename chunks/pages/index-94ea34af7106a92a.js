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

function asyncGeneratorStep(e, r, n, t, o, i, a) {
    try {
        var s = e[i](a),
            l = s.value
    } catch (e) {
        return void n(e)
    }
    s.done ? r(l) : Promise.resolve(l).then(t, o)
}

function _async_to_generator(e) {
    return function() {
        var r = this,
            n = arguments;
        return new Promise(function(t, o) {
            var i = e.apply(r, n);

            function a(e) {
                asyncGeneratorStep(i, t, o, a, s, "next", e)
            }

            function s(e) {
                asyncGeneratorStep(i, t, o, a, s, "throw", e)
            }
            a(void 0)
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
            a = !0,
            s = !1;
        try {
            for (n = n.call(e); !(a = (t = n.next()).done) && (i.push(t.value), !r || i.length !== r); a = !0);
        } catch (e) {
            s = !0, o = e
        } finally {
            try {
                a || null == n.return || n.return()
            } finally {
                if (s) throw o
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
        a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }), a;

    function s(s) {
        return function(l) {
            return function(s) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a && (a = 0, s[0] && (i = 0)), i;) try {
                    if (n = 1, t && (o = 2 & s[0] ? t.return : s[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, s[1])).done) return o;
                    switch (t = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                        case 0:
                        case 1:
                            o = s;
                            break;
                        case 4:
                            return i.label++, {
                                value: s[1],
                                done: !1
                            };
                        case 5:
                            i.label++, t = s[1], s = [0];
                            continue;
                        case 7:
                            s = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                i.label = s[1];
                                break
                            }
                            if (6 === s[0] && i.label < o[1]) {
                                i.label = o[1], o = s;
                                break
                            }
                            if (o && i.label < o[2]) {
                                i.label = o[2], i.ops.push(s);
                                break
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    s = r.call(e, i)
                } catch (e) {
                    s = [6, e], t = 0
                } finally {
                    n = o = 0
                }
                if (5 & s[0]) throw s[1];
                return {
                    value: s[0] ? s[1] : void 0,
                    done: !0
                }
            }([s, l])
        }
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405, 5399, 5627], {
        4260: function(e, r, n) {
            "use strict";
            var t = n(32930),
                o = n(69389),
                i = n(5164),
                a = n(36350),
                s = n(50874),
                l = n(99249),
                u = n(27434),
                c = {
                    id: s.string,
                    loop: s.bool,
                    muted: s.bool,
                    poster: s.string,
                    autoplay: s.bool,
                    children: s.node,
                    controls: s.bool,
                    observer: s.bool,
                    preload: s.string,
                    className: s.string,
                    playsInline: s.bool,
                    src: s.string.isRequired
                },
                d = null,
                _ = u.forwardRef(function(e, r) {
                    var s = e.id,
                        c = e.src,
                        _ = e.loop,
                        v = e.muted,
                        p = e.poster,
                        f = e.preload,
                        y = e.autoplay,
                        m = e.children,
                        h = e.className,
                        b = e.playsInline,
                        j = e.controls,
                        g = void 0 === j || j,
                        x = e.observer,
                        w = void 0 !== x && x,
                        k = a.useFallbackRef(r),
                        C = u.useRef(),
                        N = _sliced_to_array(u.useState(!1), 2),
                        P = N[0],
                        S = N[1],
                        I = _sliced_to_array(u.useState(!1), 2),
                        M = I[0],
                        D = I[1];
                    u.useEffect(function() {
                        D(!1)
                    }, [c]);
                    var O = u.useMemo(function() {
                            return i.isClientSide() && "IntersectionObserver" in window ? new IntersectionObserver(function(e) {
                                var r;
                                e[0].isIntersecting || null === (r = k.current) || void 0 === r || r.pause()
                            }) : null
                        }, [k]),
                        Z = u.useCallback(function() {
                            return _async_to_generator(function() {
                                var e, r;
                                return _ts_generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 3, , 4]), !(e = d) ? [4, n.e(6865).then(n.bind(n, 5120))] : [3, 2];
                                        case 1:
                                            e = t.sent().default, d || (d = e), t.label = 2;
                                        case 2:
                                            return e && e.isSupported() && k.current ? (C.current = new e({
                                                startLevel: 3
                                            }), C.current.loadSource(c), C.current.attachMedia(k.current)) : k.current && k.current.canPlayType("application/vnd.apple.mpegurl") && (k.current.src = c), [3, 4];
                                        case 3:
                                            return r = t.sent(), console.error(r), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })()
                        }, [c, k]),
                        E = u.useCallback(function() {
                            try {
                                k.current && (k.current.src = c)
                            } catch (e) {
                                console.error(e)
                            }
                        }, [c, k]),
                        q = u.useCallback(function() {
                            S(!0)
                        }, []),
                        L = u.useCallback(function() {
                            S(!1)
                        }, []),
                        R = u.useCallback(function() {
                            D(!0)
                        }, []);
                    return u.useEffect(function() {
                        var e = k.current;
                        return w && e && O && O.observe(e),
                            function() {
                                w && e && O && O.unobserve(e)
                            }
                    }, [w, O, k]), u.useEffect(function() {
                        return c.endsWith(".m3u8") ? Z() : E(),
                            function() {
                                var e;
                                null === (e = C.current) || void 0 === e || e.destroy()
                            }
                    }, [c, Z, E]), u.useEffect(function() {
                        k.current && (k.current.addEventListener("play", q), k.current.addEventListener("pause", L), k.current.addEventListener("ended", L), k.current.addEventListener("canplay", R));
                        var e = k.current;
                        return function() {
                            var r;
                            null === (r = C.current) || void 0 === r || r.destroy(), null == e || e.removeEventListener("play", q), null == e || e.removeEventListener("pause", L), null == e || e.removeEventListener("ended", L), null == e || e.removeEventListener("canplay", R)
                        }
                    }, [y, R, L, q, k]), t.jsxs("div", {
                        className: o.clsx("bs-video", h),
                        children: [t.jsxs("video", {
                            id: s,
                            loop: _,
                            muted: v,
                            ref: k,
                            poster: p,
                            preload: f,
                            controls: g,
                            autoPlay: y,
                            playsInline: b,
                            className: "bs-video__player",
                            children: [m, "مرورگر شما از ویدیو پشتیبانی نمی‌کند."]
                        }), t.jsx(l.BsTransition, {
                            mounted: !P && M,
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
            _.propTypes = c, _.displayName = "BsVideo", e.exports = _
        },
        75627: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return x
                }
            });
            var t = n(32930),
                o = n(40877),
                i = n(2389),
                a = n.n(i),
                s = n(7867),
                l = n.n(s),
                u = n(27434),
                c = n(5164),
                d = n(29723),
                _ = n(55253),
                v = n.n(_),
                p = n(76303),
                f = n.n(p),
                y = n(53278),
                m = n.n(y),
                h = n(4260),
                b = n.n(h),
                j = a()(function() {
                    return Promise.all([n.e(3620), n.e(7028), n.e(9994), n.e(9724), n.e(8032)]).then(n.bind(n, 62717))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [62717]
                        }
                    },
                    ssr: !1
                }),
                g = a()(function() {
                    return Promise.all([n.e(3620), n.e(4563), n.e(6175)]).then(n.bind(n, 93347))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [93347]
                        }
                    },
                    ssr: !1
                });

            function x(e) {
                var r, n, i, a, s, _, p, y, h = e.story,
                    x = e.onClick,
                    w = e.sliderAvatar,
                    k = e.reelsShowing,
                    C = void 0 === k || k,
                    N = e.selectedCategoryIds,
                    P = _sliced_to_array((0, u.useState)(!1), 2),
                    S = P[0],
                    I = P[1],
                    M = (0, d.Kp)(["isIosApp"]).isIosApp,
                    D = (null === (r = h.photo) || void 0 === r ? void 0 : r.url) || (null === (n = h.video) || void 0 === n ? void 0 : n.thumbnail),
                    O = (0, u.useMemo)(function() {
                        return {
                            data: {
                                user: h.user || {},
                                stories: [_object_spread_props(_object_spread({}, h), {
                                    isFollowed: !0
                                })]
                            }
                        }
                    }, [h]),
                    Z = function() {
                        I(!1)
                    };
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("div", {
                        className: (0, o.Z)([l().discovery__story, _define_property({}, l()["discovery__story--with-bg"], !!h.video)]),
                        onClick: function() {
                            I(!0), null == x || x()
                        },
                        "data-from": "discovery",
                        children: [h.video ? (0, t.jsx)(b(), {
                            poster: M ? null === (i = h.video) || void 0 === i ? void 0 : i.thumbnail : void 0,
                            playsInline: !0,
                            className: l()["discovery__story-video"],
                            autoplay: !M,
                            loop: !0,
                            muted: !0,
                            src: (null === (a = h.videoUrls) || void 0 === a ? void 0 : a.HLS) || h.video.url,
                            controls: !1
                        }) : (0, t.jsx)(m(), {
                            className: l()["discovery__story-img"],
                            src: D,
                            withPlaceHolder: !0,
                            ratio: 1.7
                        }), h.seen >= 5 && (0, t.jsxs)("div", {
                            className: l()["discovery__story-seen"],
                            children: [(0, t.jsx)("i", {
                                className: "bi-eye-fill"
                            }), "".concat((0, c.roundBigNumber)(h.seen, 1e3)).replace(/^\+/, "")]
                        }), (0, t.jsx)("div", {
                            className: l()["discovery__story-icon"],
                            children: (0, t.jsx)(f(), {
                                name: "bi-story",
                                color: "var(--white)"
                            })
                        }), w && (0, t.jsxs)("div", {
                            className: l()["discovery__story-info"],
                            children: [(0, t.jsx)(v(), {
                                className: l()["discovery__story-info__avatar"],
                                src: null == h || null === (_ = h.user) || void 0 === _ || null === (s = _.avatar) || void 0 === s ? void 0 : s.small
                            }), (0, t.jsx)("p", {
                                className: l()["discovery__story-info__title"],
                                children: null == h || null === (y = h.user) || void 0 === y || null === (p = y.vendor) || void 0 === p ? void 0 : p.title
                            })]
                        })]
                    }), !!S && (C ? (0, t.jsx)(j, {
                        currentContentIdOnClicked: h.id,
                        selectedCategoryIds: N,
                        onClose: Z,
                        show: !0
                    }) : (0, t.jsx)(g, {
                        initialData: O,
                        storyId: h.id,
                        onClose: Z
                    }))]
                })
            }
        },
        32888: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return f
                }
            });
            var t = n(32930),
                o = n(40877),
                i = n(34980),
                a = n(70968),
                s = n.n(a),
                l = n(45835),
                u = n(29723),
                c = n(81433),
                d = n.n(c),
                _ = n(1103),
                v = n.n(_),
                p = n(27434);

            function f(e) {
                var r = e.name,
                    n = e.video,
                    a = e.index,
                    c = e.onPlay,
                    _ = e.onPause,
                    f = e.metadata,
                    y = e.autoPlay,
                    m = void 0 !== y && y,
                    h = e.showInModal,
                    b = void 0 === h || h,
                    j = e.verticalModeVideo,
                    g = void 0 !== j && j,
                    x = (0, l.b)().ua,
                    w = _sliced_to_array((0, p.useState)(!1), 2),
                    k = w[0],
                    C = w[1],
                    N = _sliced_to_array((0, p.useState)(!1), 2),
                    P = N[0],
                    S = N[1],
                    I = _sliced_to_array((0, p.useState)(!1), 2),
                    M = I[0],
                    D = I[1],
                    O = (0, u.Kp)(["isIosApp"]).isIosApp,
                    Z = (0, p.useRef)(null),
                    E = (0, p.useMemo)(function() {
                        var e, r, t = n.thumbnail,
                            o = (null === (e = n.thumbnail) || void 0 === e ? void 0 : e.mobile) || t,
                            i = (null === (r = n.thumbnail) || void 0 === r ? void 0 : r.desktop) || t;
                        return x.isMobile ? o : i
                    }, [n, x]),
                    q = (0, p.useMemo)(function() {
                        var e, r, t = n.url,
                            o = (null === (e = n.url) || void 0 === e ? void 0 : e.mobile) || t,
                            i = (null === (r = n.url) || void 0 === r ? void 0 : r.desktop) || t;
                        return x.isMobile ? o : i
                    }, [n, x]),
                    L = function(e) {
                        e.preventDefault(), b && D(!0)
                    },
                    R = (0, p.useCallback)(function(e) {
                        x.isMobile && (e.stopPropagation(), S(function(e) {
                            return !e
                        }))
                    }, [P]);
                (0, p.useEffect)(function() {
                    var e;
                    m && (C(!0), null == Z || null === (e = Z.current) || void 0 === e || e.play())
                }, [m]);
                var K = (0, p.useMemo)(function() {
                    return (null == f ? void 0 : f.size) ? x.isMobile ? f.size.mobile.height / f.size.mobile.width : f.size.desktop.height / f.size.desktop.width : null
                }, [f, x]);
                return (0, t.jsxs)("div", {
                    className: s()["video-discovery"],
                    children: [(0, t.jsx)(v(), {
                        mounted: !k,
                        transition: "fade",
                        duration: 200,
                        children: function(e) {
                            return (0, t.jsx)("div", {
                                style: e,
                                children: (0, t.jsx)("img", {
                                    src: E,
                                    alt: " ",
                                    loading: "lazy",
                                    className: s()["video-discovery__image"],
                                    onClick: function(e) {
                                        return L(e)
                                    },
                                    "aria-hidden": "true"
                                })
                            })
                        }
                    }), (0, t.jsxs)("video", {
                        muted: m,
                        ref: Z,
                        onPause: function(e) {
                            return null == Z || null === (r = Z.current) || void 0 === r || r.pause(), C(!1), void(_ && _());
                            var r
                        },
                        className: s()["video-discovery__video"],
                        onPlay: function() {
                            return c && c()
                        },
                        controls: k && !m,
                        playsInline: !0,
                        autoPlay: !O && m,
                        loop: m,
                        preload: "none",
                        onClick: function(e) {
                            return L(e)
                        },
                        children: [(0, t.jsx)("track", {
                            kind: "captions",
                            src: null
                        }), (0, t.jsx)("source", {
                            src: q
                        })]
                    }), (0, t.jsx)("div", {
                        style: {
                            paddingBottom: "".concat(100 * K, "%")
                        }
                    }), !!n.description && !k && (0, t.jsx)("div", {
                        className: s()["video-discovery__content"],
                        onClick: function(e) {
                            return R(e)
                        },
                        "aria-hidden": "true",
                        children: (0, t.jsxs)("div", {
                            className: s()["video-discovery__content-texts"],
                            children: [(0, t.jsxs)(d(), {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                children: [(0, t.jsx)("span", {
                                    className: s()["video-discovery__content-texts-title"],
                                    children: n.description
                                }), !!x.isMobile && (0, t.jsx)("i", {
                                    className: (0, o.Z)("bi-angle-up", s()["video-discovery__content-texts-toggle"], {
                                        "video-discovery__content-texts-toggle--expanded": P
                                    })
                                })]
                            }), (0, t.jsx)("span", {
                                className: (0, o.Z)(s()["video-discovery__content-texts-subtitle"], {
                                    "video-discovery__content-texts-subtitle--expanded": P
                                }),
                                children: n.subtitle
                            })]
                        })
                    }), !k && (0, t.jsx)("button", {
                        className: s()["video-discovery__play"],
                        onClick: function(e) {
                            return L(e)
                        },
                        "aria-label": "پخش ویدیو",
                        children: (0, t.jsx)("i", {
                            className: (0, o.Z)("bi-play", s()["video-discovery__play-icon"])
                        })
                    }), M && (0, t.jsx)(i.Z, {
                        show: !0,
                        name: r,
                        index: a,
                        video: n,
                        close: function() {
                            return D(!1)
                        },
                        verticalModeVideo: g
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
                a = n(5164),
                s = n(87446),
                l = n.n(s),
                u = n(84581),
                c = n(65074),
                d = n.n(c),
                _ = n(92034),
                v = n.n(_),
                p = n(45835),
                f = n(29723),
                y = n(88107);

            function m(e) {
                var r = e.show,
                    n = e.video,
                    s = e.close,
                    c = e.name,
                    _ = e.index,
                    m = e.verticalModeVideo,
                    h = void 0 !== m && m,
                    b = (0, p.b)().ua,
                    j = (0, y.Z)(),
                    g = (0, f.Kp)(["isIosApp"]).isIosApp,
                    x = (0, i.useMemo)(function() {
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
                return (0, t.jsx)(v(), {
                    show: r,
                    onClose: function() {
                        return s()
                    },
                    size: "sm",
                    footerComponent: (0, t.jsxs)("div", {
                        className: l()["video-modal__footer"],
                        children: [!!n.link && (0, t.jsx)(d(), {
                            className: l()["video-modal__footer-btn"],
                            label: n.bottomTitle,
                            variant: "outline",
                            onClick: function() {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return null == s || s(), (0, u.s)("homeClick", {
                                                    item: _,
                                                    componentName: c
                                                }), [4, (0, a.sleep)(350)];
                                            case 1:
                                                return e.sent(), j.push(n.link), [2]
                                        }
                                    })
                                })()
                            }
                        }), (0, t.jsx)(d(), {
                            className: l()["video-modal__footer-btn"],
                            label: "بستن",
                            variant: "outline",
                            color: "secondary",
                            onClick: s
                        })]
                    }),
                    children: (0, t.jsxs)("div", {
                        className: l()["video-modal__body"],
                        children: [(0, t.jsxs)("video", {
                            controls: !0,
                            preload: "none",
                            poster: x,
                            className: (0, o.Z)(l()["video-modal__body-video"], _define_property({}, l()["video-modal__body-video--vertical-mode"], h)),
                            playsInline: !0,
                            autoPlay: !g,
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
                a = n(78153),
                s = n.n(a),
                l = n(84581),
                u = n(27434),
                c = n(93222),
                d = n.n(c),
                _ = n(45835),
                v = n(5164);
            r.default = (0, u.memo)(function(e) {
                var r = e.name,
                    n = e.videos,
                    a = e.metadata,
                    c = e.verticalModeVideo,
                    p = void 0 !== c && c,
                    f = (0, _.b)().ua,
                    y = (0, u.useMemo)(function() {
                        return a.autoplay && [(0, v.BsLightCarouselAutoplayPlugin)({
                            delay: a.autoplay
                        })]
                    }, [a.autoplay]),
                    m = (0, u.useCallback)(function(e) {
                        requestIdleCallback(function() {
                            (0, l.s)("homeClick", {
                                name: r,
                                item: "".concat(e)
                            })
                        })
                    }, []),
                    h = f.isPc ? d() : "div",
                    b = f.isPc ? d().Item : "div";
                return (0, t.jsxs)("div", {
                    className: s()["video-slider-discovery"],
                    children: [!!(null == a ? void 0 : a.title) && (0, t.jsx)("div", {
                        className: s()["video-slider-discovery__header"],
                        children: a.title
                    }), (0, t.jsx)(h, {
                        navigation: !0,
                        plugins: y,
                        className: s()["video-slider-discovery__carousel"],
                        children: n.map(function(e, n) {
                            return (0, t.jsx)(b, {
                                className: (0, o.Z)(s()["video-slider-discovery__carousel-item"], _define_property({}, s()["video-slider-discovery__carousel-item--vertical"], p)),
                                onClick: function() {
                                    return m(n + 1)
                                },
                                children: (0, t.jsx)(i.Z, {
                                    playable: !0,
                                    name: r,
                                    video: e,
                                    index: n,
                                    metadata: a,
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
                a = n(34198),
                s = n.n(a),
                l = n(58633),
                u = n(11516),
                c = n(88158),
                d = n(81433),
                _ = n.n(d),
                v = n(177),
                p = n.n(v),
                f = n(70437),
                y = n.n(f),
                m = n(83719),
                h = n(56637),
                b = n(69064);
            r.default = (0, i.memo)(function(e) {
                var r = e.className,
                    n = e.hasCoupon;
                return (0, t.jsxs)("div", {
                    className: (0, o.Z)(r, s()["home-page-skeleton"]),
                    children: [(0, t.jsx)(u.Z, {
                        isShowSearch: !0
                    }), (0, t.jsx)(_(), {
                        pt: 16,
                        pb: 16,
                        children: (0, t.jsx)(p(), {
                            children: (0, t.jsx)(l.Z, {})
                        })
                    }), (0, t.jsx)(_(), {
                        mb: 32,
                        children: (0, t.jsx)(m.Z, {})
                    }), (0, t.jsx)(_(), {
                        pr: 8,
                        pl: 8,
                        pb: 4,
                        mb: 20,
                        children: (0, t.jsx)(p(), {
                            children: (0, t.jsx)(h.Z, {})
                        })
                    }), n && (0, t.jsx)(_(), {
                        pt: 8,
                        children: (0, t.jsxs)(p(), {
                            children: [(0, t.jsx)(_(), {
                                mb: 16,
                                children: (0, t.jsx)(y(), {
                                    height: 25,
                                    width: 150,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)"
                                })
                            }), (0, t.jsx)(c.Z, {})]
                        })
                    }), (0, t.jsx)(_(), {
                        pt: 8,
                        children: (0, t.jsx)(p(), {
                            children: (0, t.jsx)(b.Z, {
                                discountMode: !0,
                                hasBackground: !0,
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
                a = n(70437),
                s = n.n(a);

            function l(e) {
                var r = e.isShowSearch;
                return (0, t.jsx)("div", {
                    className: i()["header-body"],
                    children: r ? (0, t.jsx)(s(), {
                        width: "100%",
                        height: "100%"
                    }) : (0, t.jsx)(s(), {
                        width: 120,
                        height: 21
                    })
                })
            }
        },
        87694: function(e, r, n) {
            "use strict";
            n.d(r, {
                sY: function() {
                    return l
                },
                HL: function() {
                    return u
                },
                X2: function() {
                    return p
                },
                xT: function() {
                    return M
                },
                lj: function() {
                    return O
                },
                dU: function() {
                    return j
                },
                VK: function() {
                    return b
                },
                EU: function() {
                    return f
                },
                nU: function() {
                    return h
                },
                Bp: function() {
                    return g
                },
                Nm: function() {
                    return _
                },
                EY: function() {
                    return y
                },
                oE: function() {
                    return S
                },
                kZ: function() {
                    return N
                },
                $B: function() {
                    return P
                },
                ml: function() {
                    return w
                },
                I1: function() {
                    return I
                },
                TA: function() {
                    return D
                },
                fK: function() {
                    return C
                },
                NS: function() {
                    return k
                },
                br: function() {
                    return x
                },
                uX: function() {
                    return v
                },
                eH: function() {
                    return m
                }
            });
            var t = n(27434),
                o = n(67938),
                i = n(48228),
                a = n(59403),
                s = n(32066),
                l = "user-highlights",
                u = "user-stories",
                c = "story-feed",
                d = "users-stories",
                _ = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, o.aM)(_object_spread_props(_object_spread({}, r), {
                        queryKey: [u, e],
                        queryFn: function() {
                            return (0, s.mu)(e)
                        }
                    }))
                },
                v = function(e) {
                    var r = (0, o.NL)();
                    return (0, t.useCallback)(function(n, t) {
                        r.setQueryData([u, e], function(e) {
                            return function(e, r, n) {
                                return _object_spread_props(_object_spread({}, e), {
                                    stories: e.stories.map(function(e) {
                                        return e.id === r ? _object_spread({}, e, n) : e
                                    })
                                })
                            }(e, n, t)
                        })
                    }, [e, r])
                },
                p = function() {
                    return (0, i.D)(["add-story"], s.Z6)
                },
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, o.aM)(_object_spread({
                        queryKey: ["my-stories"],
                        queryFn: function() {
                            return (0, s.TB)({
                                params: {
                                    active_only: !0,
                                    last_id: 0,
                                    old_reponse_mode: !1
                                }
                            })
                        }
                    }, e))
                },
                y = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, o.aM)(_object_spread({
                        queryKey: [d, e],
                        queryFn: function() {
                            return (0, s.$f)(e)
                        }
                    }, r))
                },
                m = function(e) {
                    var r = (0, o.NL)();
                    return (0, t.useCallback)(function(n, t) {
                        r.setQueryData([d, e], function(e) {
                            return function(e, r, n) {
                                var t = e.openapiRawData.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        stories: e.stories.map(function(e) {
                                            return e.id === r ? _object_spread({}, e, n) : e
                                        })
                                    })
                                });
                                return _object_spread_props(_object_spread({}, e), {
                                    openapiRawData: t
                                })
                            }(e, n, t)
                        })
                    }, [e, r])
                },
                h = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, o.aM)(_object_spread({
                        queryKey: ["single-story", e],
                        queryFn: function() {
                            return (0, s.vu)(e)
                        },
                        select: function(e) {
                            return e.data
                        }
                    }, r))
                },
                b = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, a.N)(_object_spread({
                        queryKey: ["hashtag", e],
                        queryFn: function(r) {
                            var n = r.pageParam,
                                t = void 0 === n ? 0 : n;
                            return (0, s.yq)({
                                params: {
                                    hashtag: e,
                                    last_id: t
                                }
                            })
                        },
                        getNextPageParam: function(e) {
                            if (e.lastId > 0) return e.lastId
                        }
                    }, r))
                },
                j = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e && e.length >= 2;
                    return (0, o.aM)(_object_spread({
                        enabled: n,
                        queryKey: n ? ["autocomplete-hashtag", e] : null,
                        queryFn: function(r) {
                            var n = r.signal;
                            return (0, s.A1)(e, 5, {
                                signal: n
                            })
                        },
                        select: function(e) {
                            var r, n;
                            return null !== (n = null == e || null === (r = e.result) || void 0 === r ? void 0 : r.map(function(e) {
                                return e.title
                            })) && void 0 !== n ? n : []
                        }
                    }, r))
                },
                g = function(e) {
                    return (0, a.N)({
                        queryKey: ["story", l, e],
                        queryFn: function(r) {
                            var n = r.pageParam,
                                t = void 0 === n ? 0 : n;
                            return (0, s.wJ)({
                                identifier: e,
                                lastRank: t,
                                count: 10
                            })
                        },
                        getNextPageParam: function(e) {
                            if (e.lastRank > 0) return e.lastRank
                        }
                    })
                },
                x = function(e) {
                    var r = (0, o.NL)();
                    return (0, t.useCallback)(function(n, t) {
                        r.setQueryData(["story", l, e], function(e) {
                            return function(e, r, n) {
                                var t = e.pages.map(function(e) {
                                    var t = e.highlights.map(function(e) {
                                        var t = e.stories.map(function(e) {
                                            return e.id === r ? _object_spread({}, e, n) : e
                                        });
                                        return _object_spread_props(_object_spread({}, e), {
                                            stories: t
                                        })
                                    });
                                    return _object_spread_props(_object_spread({}, e), {
                                        highlights: t
                                    })
                                });
                                return _object_spread_props(_object_spread({}, e), {
                                    pages: t
                                })
                            }(e, n, t)
                        })
                    }, [e, r])
                },
                w = function(e) {
                    return (0, a.N)({
                        queryKey: [c],
                        queryFn: function(r) {
                            var n = r.pageParam,
                                t = void 0 === n ? [] : n;
                            return (0, s.tz)({
                                vendors: t,
                                count: e
                            })
                        },
                        getNextPageParam: function(e, r) {
                            var n, t;
                            if (0 !== (null == e || null === (n = e.openapiRawData) || void 0 === n ? void 0 : n.length)) {
                                var o = [],
                                    i = !0,
                                    a = !1,
                                    s = void 0,
                                    l = !0,
                                    u = !1,
                                    c = void 0;
                                try {
                                    for (var d, _ = r[Symbol.iterator](); !(l = (d = _.next()).done); l = !0) {
                                        var v = d.value;
                                        try {
                                            for (var p, f = v.openapiRawData[Symbol.iterator](); !(i = (p = f.next()).done); i = !0) {
                                                var y = p.value;
                                                o.push(null == y || null === (t = y.user) || void 0 === t ? void 0 : t.id)
                                            }
                                        } catch (e) {
                                            a = !0, s = e
                                        } finally {
                                            try {
                                                i || null == f.return || f.return()
                                            } finally {
                                                if (a) throw s
                                            }
                                        }
                                    }
                                } catch (e) {
                                    u = !0, c = e
                                } finally {
                                    try {
                                        l || null == _.return || _.return()
                                    } finally {
                                        if (u) throw c
                                    }
                                }
                                return o
                            }
                        }
                    })
                },
                k = function() {
                    var e = (0, o.NL)();
                    return (0, t.useCallback)(function(r, n) {
                        e.setQueryData([c], function(e) {
                            return function(e, r, n) {
                                var t = e.pages.map(function(e) {
                                    var t = e.openapiRawData.map(function(e) {
                                        var t = e.stories.map(function(e) {
                                            return e.id === r ? _object_spread({}, e, n) : e
                                        });
                                        return _object_spread_props(_object_spread({}, e), {
                                            stories: t
                                        })
                                    });
                                    return _object_spread_props(_object_spread({}, e), {
                                        openapiRawData: t
                                    })
                                });
                                return _object_spread_props(_object_spread({}, e), {
                                    pages: t
                                })
                            }(e, r, n)
                        })
                    }, [e])
                },
                C = function() {
                    var e = (0, o.NL)(),
                        r = (0, t.useMemo)(function() {
                            return e.getQueryCache().find({
                                queryKey: ["mixed-page-discovery"],
                                exact: !1
                            })
                        }, [e]);
                    return (0, t.useCallback)(function(n, t) {
                        e.setQueryData(null == r ? void 0 : r.queryKey, function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                pages: e.pages.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        components: e.components.map(function(e) {
                                            var r;
                                            return "story" === (null == e ? void 0 : e.type) && (null == e || null === (r = e.story) || void 0 === r ? void 0 : r.id) === n ? _object_spread_props(_object_spread({}, e), {
                                                story: _object_spread({}, e.story, t)
                                            }) : "stories" === (null == e ? void 0 : e.type) ? _object_spread_props(_object_spread({}, e), {
                                                stories: e.stories.map(function(e) {
                                                    return (null == e ? void 0 : e.id) === n ? _object_spread({}, e, t) : e
                                                })
                                            }) : e
                                        })
                                    })
                                })
                            })
                        })
                    }, [null == r ? void 0 : r.queryKey, e])
                },
                N = function() {
                    var e = (0, o.NL)();
                    return (0, t.useCallback)(function(r) {
                        e.setQueryData([c], function(e) {
                            return function(e, r) {
                                var n = e.pages.map(function(e) {
                                    var n = e.openapiRawData.filter(function(e) {
                                        return e.user.id !== r
                                    });
                                    return _object_spread_props(_object_spread({}, e), {
                                        openapiRawData: n
                                    })
                                });
                                return _object_spread_props(_object_spread({}, e), {
                                    pages: n
                                })
                            }(e, r)
                        })
                    }, [e])
                },
                P = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(s.N5, e)
                },
                S = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(s.kT, e)
                },
                I = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(s.Vw, e)
                },
                M = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(s.qM, e)
                },
                D = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(s.ie, e)
                },
                O = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(s.$J, e)
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
                a = n(2389),
                s = n.n(a),
                l = n(74123),
                u = n.n(l),
                c = n(67938),
                d = n(88592),
                _ = n(52233),
                v = n.n(_),
                p = n(27434),
                f = n(50874),
                y = n.n(f),
                m = n(2134),
                h = n.n(m),
                b = n(88107);

            function j(e) {
                var r = e.preloadImage,
                    n = e.isWebview,
                    t = void 0 !== n && n,
                    o = (0, b.Z)(),
                    a = h()().publicRuntimeConfig,
                    s = "باسلام؛ بازار بی‌مرز",
                    l = (0, p.useMemo)(function() {
                        var e, r, n, t;
                        return null === (t = o.asPath) || void 0 === t || null === (n = t.split("?")) || void 0 === n || null === (r = n[0]) || void 0 === r || null === (e = r.split("#")) || void 0 === e ? void 0 : e[0]
                    }, [o.asPath]),
                    u = a.baseUrl + l,
                    c = "«باسلام» یک بازار بی‌مرز برای خرید و فروش است. در باسلام می‌توانید هر چیزی را که به دنبالش می‌گردید در میان دریای متنوعی از محصولات پیدا کنید.";
                return (0, i.jsxs)(v(), {
                    children: [(0, i.jsx)("title", {
                        children: s
                    }), !t && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("meta", {
                            property: "og:title",
                            content: s
                        }), (0, i.jsx)("meta", {
                            property: "og:url",
                            content: u
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "«باسلام» یک بازار بی‌مرز برای خرید و فروش محصولات مختلف با کیفیت و قیمت‌های متفاوت است. در باسلام می‌توانید هر چیزی را که به دنبالش می‌گردید در میان دریای متنوعی از محصولات پیدا کنید. محصولات خاصی که در فروشگاه‌های اینترنتی کمتر پیدا می‌شود. این محصولات را می‌توانید مستقیما از خود تولیدکننده‌ها یا واسطه‌ها بخرید. همچنین، می‌توانید غرفه خود را راه بیاندازید و محصولاتتان را بفروشید. به باسلام بیایید، بین هزاران غرفه‌ی آنلاین بچرخید و درباره‌ی تجربه‌های متنوع خریدوفروش گپ بزنید."
                        }), (0, i.jsx)("meta", {
                            property: "og:description",
                            content: c
                        }), (0, i.jsx)("meta", {
                            property: "og:site_name",
                            content: "باسلام؛ بازار بی‌مرز"
                        }), (0, i.jsx)("link", {
                            rel: "canonical",
                            href: u
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
                            content: s
                        }), (0, i.jsx)("meta", {
                            name: "twitter:description",
                            content: c
                        })]
                    })]
                })
            }
            j.propTypes = {
                preloadImage: y().string
            };
            var g = n(37314),
                x = n(26491),
                w = n(91740),
                k = n(39145),
                C = n.n(k),
                N = n(45835),
                P = n(81433),
                S = n.n(P),
                I = n(177),
                M = n.n(I),
                D = n(70437),
                O = n.n(D);
            n(73853), n(52655), n(75627), n(95399), n(46196);
            var Z = n(18020);
            n(30162), n(58507), n(34980);
            var E = n(65817);

            function q() {
                var e = (0, N.b)().ua.isPc;
                return (0, i.jsxs)(S(), {
                    children: [(0, i.jsx)(S(), {
                        mb: 16,
                        children: (0, i.jsx)(M(), {
                            children: (0, i.jsx)(O(), {
                                width: 150,
                                height: 24,
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)"
                            })
                        })
                    }), (0, i.jsx)(S(), {
                        mb: 12,
                        children: (0, i.jsx)(M(), {
                            children: (0, i.jsx)(S(), {
                                display: "flex",
                                gap: 12,
                                children: (0, o.range)(e ? 10 : 4).map(function(e, r) {
                                    return (0, i.jsx)(O(), {
                                        width: 100,
                                        height: 36,
                                        waveColor: "var(--gray-200)",
                                        backgroundColor: "var(--gray-100)"
                                    }, r)
                                })
                            })
                        })
                    }), (0, i.jsx)(E.Z, {}), (0, i.jsx)(S(), {
                        mt: 12,
                        children: (0, i.jsx)(E.Z, {})
                    }), (0, i.jsx)(S(), {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 40,
                        mb: 96,
                        children: (0, i.jsx)(O(), {
                            width: 125,
                            height: 48,
                            waveColor: "var(--gray-200)",
                            backgroundColor: "var(--gray-100)"
                        })
                    })]
                })
            }
            var L = n(3087),
                R = n(60802),
                K = n(83642),
                z = n(88158),
                A = n(56637),
                F = n(26460),
                T = n(69064),
                B = n(34198),
                G = n.n(B),
                U = n(24311),
                Q = n(1692),
                H = function(e, r) {
                    switch (e.ui) {
                        case "ads_slider":
                            return (0, i.jsx)(M(), {
                                children: (0, i.jsx)(F.aK, {})
                            }, "ads_slider");
                        case "horizontal_category":
                            return (0, i.jsx)(M(), {
                                children: (0, i.jsx)(A.Z, {})
                            }, "horizontal_category");
                        case "horizontal_product_popular":
                            var n, t, o, a, s, l;
                            return r ? (0, i.jsx)(M(), {
                                children: (0, i.jsx)(T.Z, {
                                    hasBackground: null === (a = e.metaData) || void 0 === a ? void 0 : a.hasBackground,
                                    hasLogo: null === (s = e.metaData) || void 0 === s ? void 0 : s.hasLogo,
                                    discountMode: null === (l = e.metaData) || void 0 === l ? void 0 : l.hasBackground,
                                    hasLabels: !0
                                })
                            }) : (0, i.jsx)(T.Z, {
                                hasBackground: null === (n = e.metaData) || void 0 === n ? void 0 : n.hasBackground,
                                hasLogo: null === (t = e.metaData) || void 0 === t ? void 0 : t.hasLogo,
                                discountMode: null === (o = e.metaData) || void 0 === o ? void 0 : o.hasBackground,
                                hasLabels: !0
                            });
                        case "horizontal_pgp_popular":
                            return (0, i.jsx)(Q.Z, {});
                        case "horizontal_vendor_with_chat":
                            return r ? (0, i.jsx)(M(), {
                                children: (0, i.jsx)(F.Iu, {})
                            }) : (0, i.jsx)(F.Iu, {});
                        case "blog_post":
                            return (0, i.jsx)(F.yQ, {});
                        case "top_reels_review_slider":
                            return (0, i.jsx)(M(), {
                                children: (0, i.jsx)(U.Xp, {})
                            }, "top_reels_review_slider");
                        case "top_reels_business_slider":
                            return (0, i.jsx)(M(), {
                                children: (0, i.jsx)(U.Xp, {})
                            }, "top_reels_business_slider");
                        case "horizontal_video_list":
                            return (0, i.jsx)(F.$t, {});
                        case "vertical_video_list":
                            return (0, i.jsx)(F.ls, {});
                        default:
                            return null
                    }
                };

            function V(e) {
                var r = e.items,
                    n = void 0 === r ? [] : r,
                    t = (0, N.b)().ua.isPc;
                return (0, i.jsx)(S(), {
                    className: G()["csr-components-skeleton"],
                    children: n.map(function(e) {
                        return (0, i.jsx)(p.Fragment, {
                            children: (0, i.jsx)(S(), {
                                className: "styles['csr-components-skeleton__".concat(e.ui, "']"),
                                children: H(e, t)
                            })
                        }, "".concat(e.name, "-").concat(e.ui))
                    })
                })
            }

            function W(e) {
                var r = e.hasCoupon;
                return (0, i.jsxs)(S(), {
                    children: [(0, i.jsx)(S(), {
                        mb: 32,
                        children: (0, i.jsx)(F.kf, {})
                    }), (0, i.jsx)(S(), {
                        pr: 8,
                        pl: 8,
                        children: (0, i.jsx)(M(), {
                            children: (0, i.jsx)(A.Z, {})
                        })
                    }), r && (0, i.jsx)(S(), {
                        pt: 8,
                        pb: 24,
                        children: (0, i.jsxs)(M(), {
                            children: [(0, i.jsx)(S(), {
                                mb: 16,
                                children: (0, i.jsx)(O(), {
                                    height: 25,
                                    width: 150,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)"
                                })
                            }), (0, i.jsx)(z.Z, {})]
                        })
                    }), (0, i.jsx)(S(), {
                        children: (0, i.jsx)(M(), {
                            children: (0, i.jsx)(T.Z, {})
                        })
                    }), (0, i.jsx)(V, {})]
                })
            }
            var X = s()(function() {
                    return n.e(9666).then(n.bind(n, 99666))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [99666]
                        }
                    },
                    ssr: !1,
                    loading: q
                }),
                Y = s()(function() {
                    return Promise.resolve().then(n.bind(n, 94287))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [94287]
                        }
                    },
                    ssr: !0
                }),
                J = s()(function() {
                    return n.e(6660).then(n.bind(n, 16660))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [16660]
                        }
                    },
                    ssr: !0
                }),
                $ = s()(function() {
                    return Promise.all([n.e(9836), n.e(8739)]).then(n.bind(n, 49836))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [49836]
                        }
                    },
                    ssr: !0
                }),
                ee = (0, x.Z)({
                    on: ["visible"]
                })($),
                re = (0, x.Z)({
                    on: ["visible"]
                })(X);

            function ne(e) {
                var r = e.enabled,
                    n = _sliced_to_array((0, p.useState)(!1), 2),
                    t = n[0],
                    o = n[1],
                    a = (0, p.useRef)(null);
                return (0, p.useEffect)(function() {
                    var e = new IntersectionObserver(function(r) {
                        _sliced_to_array(r, 1)[0].isIntersecting && (o(!0), e.disconnect())
                    }, {
                        rootMargin: "300px"
                    });
                    return a.current && e.observe(a.current),
                        function() {
                            return e.disconnect()
                        }
                }, []), (0, i.jsx)("div", {
                    ref: a,
                    children: t ? (0, i.jsx)(X, {
                        enabled: r
                    }) : (0, i.jsx)(q, {})
                })
            }

            function te(e) {
                var r, n, t, o, a = e.isServer,
                    s = (0, N.b)(),
                    l = s.ua,
                    _ = s.isWebview,
                    v = (0, R.l)().getFeatureValue,
                    f = (0, d.M_)(["currentUser"]).currentUser,
                    y = _sliced_to_array((0, p.useState)(!0), 2),
                    m = y[0],
                    h = y[1],
                    b = (0, p.useRef)(),
                    x = (0, p.useMemo)(function() {
                        return v("home_page", {})
                    }, [v]),
                    k = x.explore,
                    P = void 0 === k || k,
                    S = x.discovery,
                    I = void 0 === S || S,
                    M = (0, c.NS)({
                        enabled: P,
                        queryKey: ["first-page-discovery"],
                        queryFn: function(e) {
                            var r = e.pageParam,
                                n = void 0 === r ? 0 : r;
                            return (0, L._I)({
                                userId: null == f ? void 0 : f.id,
                                config: {
                                    params: {
                                        size: 12,
                                        item_size: 12,
                                        lastRank: n,
                                        tab: "home_discovery"
                                    }
                                }
                            })
                        },
                        getNextPageParam: function(e, r) {
                            var n, t;
                            return ((null === (n = e.meta) || void 0 === n ? void 0 : n._hasPartialData) && e.items.length < 12 || 12 === e.items.length || 1 === r.length) && void 0 !== (null === (t = e.meta) || void 0 === t ? void 0 : t.lastRank) ? e.meta.lastRank : void 0
                        }
                    }),
                    D = M.data,
                    O = M.isError,
                    E = M.isLoading,
                    q = M.refetch,
                    z = M.hasNextPage,
                    A = M.fetchNextPage,
                    F = M.isFetchingNextPage,
                    T = (null == D ? void 0 : D.pages.length) > 0 && !z && I,
                    B = (0, p.useMemo)(function() {
                        var e;
                        return null == D || null === (e = D.pages) || void 0 === e ? void 0 : e.reduce(function(e, r) {
                            return _to_consumable_array(e).concat(_to_consumable_array(r.items || []))
                        }, [])
                    }, [null == D ? void 0 : D.pages]),
                    G = (0, p.useMemo)(function() {
                        var e, r, n, t, o, i;
                        return "billboard_image" === (null == B || null === (e = B[0]) || void 0 === e ? void 0 : e.ui) ? null === (i = B[0].result) || void 0 === i || null === (o = i[0]) || void 0 === o || null === (t = o.metadata) || void 0 === t || null === (n = t.images) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r[l.isPc ? "desktopUrl" : "url"] : null
                    }, [B, l.isPc]);
                (0, p.useEffect)(function() {
                    (!E && !F && (null == B ? void 0 : B.length) > 4 || O) && h(!1)
                }, [E, F, null == B ? void 0 : B.length, O]);
                var U = (0, p.useMemo)(function() {
                        return m && a
                    }, [m, a]),
                    Q = (0, p.useCallback)(function() {
                        E || F || A()
                    }, [E, F, A]),
                    H = null === (r = b.current) || void 0 === r ? void 0 : r.offsetHeight;
                return (0, i.jsxs)("div", {
                    className: u()["home-page"],
                    children: [(0, i.jsx)(j, {
                        preloadImage: G,
                        isWebview: _
                    }), l.isPc ? (0, i.jsx)(Y, {}) : (0, i.jsx)(g.default, {
                        isShowSearch: !0
                    }), !l.isPc && !_ && (0, i.jsx)(J, {
                        active: "HOME"
                    }), (0, i.jsx)(w.Z, {}), (0, i.jsxs)(C(), {
                        loadingComponent: null,
                        fetchMore: Q,
                        hasMore: !(F || O || E || !z),
                        hasError: !(!z || !O),
                        threshold: a ? H : l.isPc ? 400 : 10,
                        children: [!!(null == B ? void 0 : B.length) && (0, i.jsx)(Z.Z, {
                            isHiddenCsrComponentsSkeleton: !U,
                            isServer: a,
                            sections: B
                        }), !z && O && (0, i.jsx)(K.Z, {
                            fetch: q
                        }), E && !a && (0, i.jsx)(W, {
                            hasCoupon: !l.isPc
                        }), (0, i.jsx)("div", {
                            ref: b,
                            style: {
                                display: U ? "block" : "none"
                            },
                            children: (0, i.jsx)(V, {
                                items: (null == D || null === (o = D.pages) || void 0 === o || null === (t = o[0]) || void 0 === t || null === (n = t.meta) || void 0 === n ? void 0 : n._remainingItemsMetadata) || []
                            })
                        })]
                    }), a ? (0, i.jsx)(re, {
                        enabled: T
                    }) : (0, i.jsx)(ne, {
                        enabled: T
                    }), !_ && (0, i.jsx)(ee, {})]
                })
            }
            var oe = n(39437),
                ie = (0, o.isClientSide)();
            te.getInitialProps = function(e) {
                return _async_to_generator(function() {
                    var r, n, o, i, a, s, l, u, c, d, _, v, p, f, y, m, h, b, j, g;
                    return _ts_generator(this, function(x) {
                        switch (x.label) {
                            case 0:
                                if (r = e.req, n = e.res, o = e.userId, i = e.isWebview, a = e.queryClient, s = e.isCachedPage, !r) return [2, {}];
                                x.label = 1;
                            case 1:
                                return x.trys.push([1, 3, , 4]), p = i ? 2 : 4, [4, a.fetchInfiniteQuery(["first-page-discovery"], function() {
                                    return (0, L._I)({
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
                                return f = x.sent(), !((null == f || null === (c = f.pages) || void 0 === c || null === (u = c[0]) || void 0 === u || null === (l = u.items) || void 0 === l ? void 0 : l.length) > 0) && n && (r.app.noCache = !0), (y = null == f || null === (d = f.pages) || void 0 === d ? void 0 : d[0]) && y.items.length > p && s && (m = y.items.slice(0, p).map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        fromCache: !0
                                    })
                                }), h = y.items.slice(p), a.setQueryData(["first-page-discovery"], _object_spread_props(_object_spread({}, f), {
                                    pages: [_object_spread_props(_object_spread({}, y), {
                                        items: m,
                                        meta: _object_spread_props(_object_spread({}, y.meta), {
                                            _hasPartialData: !0,
                                            lastRank: (null === (v = y.items) || void 0 === v || null === (_ = v[p - 1]) || void 0 === _ ? void 0 : _.rank) || 0,
                                            _remainingItemsMetadata: h.map(function(e) {
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
                                return b = x.sent(), j = (0, t.Pt)(b), g = 422 === (null == j ? void 0 : j.statusCode) ? 404 : j.statusCode || 500, [2, (!ie && n && (n.statusCode = g), {
                                    error: {
                                        statusCode: g
                                    }
                                })];
                            case 4:
                                return [2, {
                                    isServer: !0
                                }]
                        }
                    })
                })()
            };
            var ae = (0, oe.Z)(te)
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
        e.O(0, [973, 2079, 3650, 246, 3449, 5382, 5250, 8738, 1198, 9437, 7314, 6208, 4287, 6122, 9691, 8020, 3853, 1740, 9774, 2888, 179], function() {
            return e(e.s = 45728)
        }), _N_E = e.O()
    }
]);