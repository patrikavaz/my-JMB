function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
    return n
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function asyncGeneratorStep(e, r, t, n, o, i, a) {
    try {
        var s = e[i](a),
            l = s.value
    } catch (e) {
        return void t(e)
    }
    s.done ? r(l) : Promise.resolve(l).then(n, o)
}

function _async_to_generator(e) {
    return function() {
        var r = this,
            t = arguments;
        return new Promise(function(n, o) {
            var i = e.apply(r, t);

            function a(e) {
                asyncGeneratorStep(i, n, o, a, s, "next", e)
            }

            function s(e) {
                asyncGeneratorStep(i, n, o, a, s, "throw", e)
            }
            a(void 0)
        })
    }
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
        var n, o, i = [],
            a = !0,
            s = !1;
        try {
            for (t = t.call(e); !(a = (n = t.next()).done) && (i.push(n.value), !r || i.length !== r); a = !0);
        } catch (e) {
            s = !0, o = e
        } finally {
            try {
                a || null == t.return || t.return()
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
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.forEach(function(r) {
            _define_property(e, r, t[r])
        })
    }
    return e
}

function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), t.push.apply(t, n)
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
}

function _ts_generator(e, r) {
    var t, n, o, i = {
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
                if (t) throw new TypeError("Generator is already executing.");
                for (; a && (a = 0, s[0] && (i = 0)), i;) try {
                    if (t = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
                    switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
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
                            i.label++, n = s[1], s = [0];
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
                    s = [6, e], n = 0
                } finally {
                    t = o = 0
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
        4260: function(e, r, t) {
            "use strict";
            var n = t(32930),
                o = t(69389),
                i = t(5164),
                a = t(36350),
                s = t(50874),
                l = t(99249),
                c = t(27434),
                u = {
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
                _ = c.forwardRef(function(e, r) {
                    var s = e.id,
                        u = e.src,
                        _ = e.loop,
                        v = e.muted,
                        p = e.poster,
                        h = e.preload,
                        m = e.autoplay,
                        f = e.children,
                        y = e.className,
                        b = e.playsInline,
                        x = e.controls,
                        g = void 0 === x || x,
                        j = e.observer,
                        k = void 0 !== j && j,
                        w = a.useFallbackRef(r),
                        C = c.useRef(),
                        S = _sliced_to_array(c.useState(!1), 2),
                        P = S[0],
                        N = S[1],
                        I = _sliced_to_array(c.useState(!1), 2),
                        M = I[0],
                        z = I[1];
                    c.useEffect(function() {
                        z(!1)
                    }, [u]);
                    var O = c.useMemo(function() {
                            return i.isClientSide() && "IntersectionObserver" in window ? new IntersectionObserver(function(e) {
                                var r;
                                e[0].isIntersecting || null === (r = w.current) || void 0 === r || r.pause()
                            }) : null
                        }, [w]),
                        E = c.useCallback(function() {
                            return _async_to_generator(function() {
                                var e, r;
                                return _ts_generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 3, , 4]), !(e = d) ? [4, t.e(6865).then(t.bind(t, 5120))] : [3, 2];
                                        case 1:
                                            e = n.sent().default, d || (d = e), n.label = 2;
                                        case 2:
                                            return e && e.isSupported() && w.current ? (C.current = new e({
                                                startLevel: 3
                                            }), C.current.loadSource(u), C.current.attachMedia(w.current)) : w.current && w.current.canPlayType("application/vnd.apple.mpegurl") && (w.current.src = u), [3, 4];
                                        case 3:
                                            return r = n.sent(), console.error(r), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })()
                        }, [u, w]),
                        D = c.useCallback(function() {
                            try {
                                w.current && (w.current.src = u)
                            } catch (e) {
                                console.error(e)
                            }
                        }, [u, w]),
                        Z = c.useCallback(function() {
                            N(!0)
                        }, []),
                        A = c.useCallback(function() {
                            N(!1)
                        }, []),
                        L = c.useCallback(function() {
                            z(!0)
                        }, []);
                    return c.useEffect(function() {
                        var e = w.current;
                        return k && e && O && O.observe(e),
                            function() {
                                k && e && O && O.unobserve(e)
                            }
                    }, [k, O, w]), c.useEffect(function() {
                        return u.endsWith(".m3u8") ? E() : D(),
                            function() {
                                var e;
                                null === (e = C.current) || void 0 === e || e.destroy()
                            }
                    }, [u, E, D]), c.useEffect(function() {
                        w.current && (w.current.addEventListener("play", Z), w.current.addEventListener("pause", A), w.current.addEventListener("ended", A), w.current.addEventListener("canplay", L));
                        var e = w.current;
                        return function() {
                            var r;
                            null === (r = C.current) || void 0 === r || r.destroy(), null == e || e.removeEventListener("play", Z), null == e || e.removeEventListener("pause", A), null == e || e.removeEventListener("ended", A), null == e || e.removeEventListener("canplay", L)
                        }
                    }, [m, L, A, Z, w]), n.jsxs("div", {
                        className: o.clsx("bs-video", y),
                        children: [n.jsxs("video", {
                            id: s,
                            loop: _,
                            muted: v,
                            ref: w,
                            poster: p,
                            preload: h,
                            controls: g,
                            autoPlay: m,
                            playsInline: b,
                            className: "bs-video__player",
                            children: [f, "مرورگر شما از ویدیو پشتیبانی نمی‌کند."]
                        }), n.jsx(l.BsTransition, {
                            mounted: !P && M,
                            transition: "fade",
                            duration: 400,
                            children: function(e) {
                                return n.jsx("button", {
                                    "aria-label": "play",
                                    className: "bs-video__play",
                                    style: e,
                                    onClick: function() {
                                        var e;
                                        return null === (e = w.current) || void 0 === e ? void 0 : e.play()
                                    },
                                    children: n.jsx("i", {
                                        className: "bi-play"
                                    })
                                })
                            }
                        })]
                    })
                });
            _.propTypes = u, _.displayName = "BsVideo", e.exports = _
        },
        75627: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return j
                }
            });
            var n = t(32930),
                o = t(40877),
                i = t(2389),
                a = t.n(i),
                s = t(7867),
                l = t.n(s),
                c = t(27434),
                u = t(5164),
                d = t(29723),
                _ = t(55253),
                v = t.n(_),
                p = t(76303),
                h = t.n(p),
                m = t(53278),
                f = t.n(m),
                y = t(4260),
                b = t.n(y),
                x = a()(function() {
                    return Promise.all([t.e(3620), t.e(7028), t.e(9994), t.e(9724), t.e(8032)]).then(t.bind(t, 62717))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [62717]
                        }
                    },
                    ssr: !1
                }),
                g = a()(function() {
                    return Promise.all([t.e(3620), t.e(4563), t.e(6175)]).then(t.bind(t, 93347))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [93347]
                        }
                    },
                    ssr: !1
                });

            function j(e) {
                var r, t, i, a, s, _, p, m, y = e.story,
                    j = e.onClick,
                    k = e.sliderAvatar,
                    w = e.reelsShowing,
                    C = void 0 === w || w,
                    S = e.selectedCategoryIds,
                    P = _sliced_to_array((0, c.useState)(!1), 2),
                    N = P[0],
                    I = P[1],
                    M = (0, d.Kp)(["isIosApp"]).isIosApp,
                    z = (null === (r = y.photo) || void 0 === r ? void 0 : r.url) || (null === (t = y.video) || void 0 === t ? void 0 : t.thumbnail),
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
                    E = function() {
                        I(!1)
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: (0, o.Z)([l().discovery__story, _define_property({}, l()["discovery__story--with-bg"], !!y.video)]),
                        onClick: function() {
                            I(!0), null == j || j()
                        },
                        "data-from": "discovery",
                        children: [y.video ? (0, n.jsx)(b(), {
                            poster: M ? null === (i = y.video) || void 0 === i ? void 0 : i.thumbnail : void 0,
                            playsInline: !0,
                            className: l()["discovery__story-video"],
                            autoplay: !M,
                            loop: !0,
                            muted: !0,
                            src: (null === (a = y.videoUrls) || void 0 === a ? void 0 : a.HLS) || y.video.url,
                            controls: !1
                        }) : (0, n.jsx)(f(), {
                            className: l()["discovery__story-img"],
                            src: z,
                            withPlaceHolder: !0,
                            ratio: 1.7
                        }), y.seen >= 5 && (0, n.jsxs)("div", {
                            className: l()["discovery__story-seen"],
                            children: [(0, n.jsx)("i", {
                                className: "bi-eye-fill"
                            }), "".concat((0, u.roundBigNumber)(y.seen, 1e3)).replace(/^\+/, "")]
                        }), (0, n.jsx)("div", {
                            className: l()["discovery__story-icon"],
                            children: (0, n.jsx)(h(), {
                                name: "bi-story",
                                color: "var(--white)"
                            })
                        }), k && (0, n.jsxs)("div", {
                            className: l()["discovery__story-info"],
                            children: [(0, n.jsx)(v(), {
                                className: l()["discovery__story-info__avatar"],
                                src: null == y || null === (_ = y.user) || void 0 === _ || null === (s = _.avatar) || void 0 === s ? void 0 : s.small
                            }), (0, n.jsx)("p", {
                                className: l()["discovery__story-info__title"],
                                children: null == y || null === (m = y.user) || void 0 === m || null === (p = m.vendor) || void 0 === p ? void 0 : p.title
                            })]
                        })]
                    }), !!N && (C ? (0, n.jsx)(x, {
                        currentContentIdOnClicked: y.id,
                        selectedCategoryIds: S,
                        onClose: E,
                        show: !0
                    }) : (0, n.jsx)(g, {
                        initialData: O,
                        storyId: y.id,
                        onClose: E
                    }))]
                })
            }
        },
        32888: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return h
                }
            });
            var n = t(32930),
                o = t(40877),
                i = t(34980),
                a = t(70968),
                s = t.n(a),
                l = t(45835),
                c = t(29723),
                u = t(81433),
                d = t.n(u),
                _ = t(1103),
                v = t.n(_),
                p = t(27434);

            function h(e) {
                var r = e.name,
                    t = e.video,
                    a = e.index,
                    u = e.onPlay,
                    _ = e.onPause,
                    h = e.metadata,
                    m = e.autoPlay,
                    f = void 0 !== m && m,
                    y = e.showInModal,
                    b = void 0 === y || y,
                    x = e.verticalModeVideo,
                    g = void 0 !== x && x,
                    j = (0, l.b)().ua,
                    k = _sliced_to_array((0, p.useState)(!1), 2),
                    w = k[0],
                    C = k[1],
                    S = _sliced_to_array((0, p.useState)(!1), 2),
                    P = S[0],
                    N = S[1],
                    I = _sliced_to_array((0, p.useState)(!1), 2),
                    M = I[0],
                    z = I[1],
                    O = (0, c.Kp)(["isIosApp"]).isIosApp,
                    E = (0, p.useRef)(null),
                    D = (0, p.useRef)(),
                    Z = (0, p.useMemo)(function() {
                        var e, r, n = t.thumbnail,
                            o = (null === (e = t.thumbnail) || void 0 === e ? void 0 : e.mobile) || n,
                            i = (null === (r = t.thumbnail) || void 0 === r ? void 0 : r.desktop) || n;
                        return j.isMobile ? o : i
                    }, [t, j]),
                    A = (0, p.useMemo)(function() {
                        var e, r, n = t.url,
                            o = (null === (e = t.url) || void 0 === e ? void 0 : e.mobile) || n,
                            i = (null === (r = t.url) || void 0 === r ? void 0 : r.desktop) || n;
                        return j.isMobile ? o : i
                    }, [t, j]),
                    L = function(e) {
                        e.preventDefault(), b && z(!0)
                    },
                    B = (0, p.useCallback)(function(e) {
                        j.isMobile && (e.stopPropagation(), N(function(e) {
                            return !e
                        }))
                    }, [P]);
                (0, p.useEffect)(function() {
                    f && E.current && (C(!0), D.current = E.current.play(), void 0 !== D.current && D.current.then(function() {
                        D.current = void 0
                    }).catch(function() {
                        C(!1), D.current = void 0
                    }))
                }, [f]);
                var R = (0, p.useMemo)(function() {
                    return (null == h ? void 0 : h.size) ? j.isMobile ? h.size.mobile.height / h.size.mobile.width : h.size.desktop.height / h.size.desktop.width : null
                }, [h, j]);
                return (0, n.jsxs)("div", {
                    className: s()["video-discovery"],
                    children: [(0, n.jsx)(v(), {
                        mounted: !w,
                        transition: "fade",
                        duration: 200,
                        children: function(e) {
                            return (0, n.jsx)("div", {
                                style: e,
                                children: (0, n.jsx)("img", {
                                    src: Z,
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
                    }), (0, n.jsxs)("video", {
                        muted: f,
                        ref: E,
                        onPause: function(e) {
                            return function() {
                                var e;
                                if (void 0 === D.current) return null == E || null === (e = E.current) || void 0 === e || e.pause(), C(!1), void(_ && _());
                                D.current.then(function() {
                                    var e;
                                    null == E || null === (e = E.current) || void 0 === e || e.pause(), C(!1), _ && _()
                                }).catch(function() {
                                    C(!1)
                                })
                            }()
                        },
                        className: s()["video-discovery__video"],
                        onPlay: function() {
                            return u && u()
                        },
                        controls: w && !f,
                        playsInline: !0,
                        autoPlay: !O && f,
                        loop: f,
                        preload: "none",
                        onClick: function(e) {
                            return L(e)
                        },
                        children: [(0, n.jsx)("track", {
                            kind: "captions",
                            src: null
                        }), (0, n.jsx)("source", {
                            src: A
                        })]
                    }), (0, n.jsx)("div", {
                        style: {
                            paddingBottom: "".concat(100 * R, "%")
                        }
                    }), !!t.description && !w && (0, n.jsx)("div", {
                        className: s()["video-discovery__content"],
                        onClick: function(e) {
                            return B(e)
                        },
                        "aria-hidden": "true",
                        children: (0, n.jsxs)("div", {
                            className: s()["video-discovery__content-texts"],
                            children: [(0, n.jsxs)(d(), {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                children: [(0, n.jsx)("span", {
                                    className: s()["video-discovery__content-texts-title"],
                                    children: t.description
                                }), !!j.isMobile && (0, n.jsx)("i", {
                                    className: (0, o.Z)("bi-angle-up", s()["video-discovery__content-texts-toggle"], {
                                        "video-discovery__content-texts-toggle--expanded": P
                                    })
                                })]
                            }), (0, n.jsx)("span", {
                                className: (0, o.Z)(s()["video-discovery__content-texts-subtitle"], {
                                    "video-discovery__content-texts-subtitle--expanded": P
                                }),
                                children: t.subtitle
                            })]
                        })
                    }), !w && (0, n.jsx)("button", {
                        className: s()["video-discovery__play"],
                        onClick: function(e) {
                            return L(e)
                        },
                        "aria-label": "پخش ویدیو",
                        children: (0, n.jsx)("i", {
                            className: (0, o.Z)("bi-play", s()["video-discovery__play-icon"])
                        })
                    }), M && (0, n.jsx)(i.Z, {
                        show: !0,
                        name: r,
                        index: a,
                        video: t,
                        close: function() {
                            return z(!1)
                        },
                        verticalModeVideo: g
                    })]
                })
            }
        },
        34980: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return f
                }
            });
            var n = t(32930),
                o = t(40877),
                i = t(27434),
                a = t(5164),
                s = t(87446),
                l = t.n(s),
                c = t(92369),
                u = t(65074),
                d = t.n(u),
                _ = t(92034),
                v = t.n(_),
                p = t(45835),
                h = t(29723),
                m = t(88107);

            function f(e) {
                var r = e.show,
                    t = e.video,
                    s = e.close,
                    u = e.name,
                    _ = e.index,
                    f = e.verticalModeVideo,
                    y = void 0 !== f && f,
                    b = (0, p.b)().ua,
                    x = (0, m.Z)(),
                    g = (0, h.Kp)(["isIosApp"]).isIosApp,
                    j = (0, i.useMemo)(function() {
                        var e, r, n = t.thumbnail,
                            o = (null === (e = t.thumbnail) || void 0 === e ? void 0 : e.mobile) || n,
                            i = (null === (r = t.thumbnail) || void 0 === r ? void 0 : r.desktop) || n;
                        return b.isMobile ? o : i
                    }, [t, b]),
                    k = (0, i.useMemo)(function() {
                        var e, r, n = t.url,
                            o = (null === (e = t.url) || void 0 === e ? void 0 : e.mobile) || n,
                            i = (null === (r = t.url) || void 0 === r ? void 0 : r.desktop) || n;
                        return b.isMobile ? o : i
                    }, [t, b]);
                return (0, n.jsx)(v(), {
                    show: r,
                    onClose: function() {
                        return s()
                    },
                    size: "sm",
                    footerComponent: (0, n.jsxs)("div", {
                        className: l()["video-modal__footer"],
                        children: [!!t.link && (0, n.jsx)(d(), {
                            className: l()["video-modal__footer-btn"],
                            label: t.bottomTitle,
                            variant: "outline",
                            onClick: function() {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return null == s || s(), (0, c.publishEvent)("homeClick", {
                                                    item: _,
                                                    componentName: u
                                                }), [4, (0, a.sleep)(350)];
                                            case 1:
                                                return e.sent(), x.push(t.link), [2]
                                        }
                                    })
                                })()
                            }
                        }), (0, n.jsx)(d(), {
                            className: l()["video-modal__footer-btn"],
                            label: "بستن",
                            variant: "outline",
                            color: "secondary",
                            onClick: s
                        })]
                    }),
                    children: (0, n.jsxs)("div", {
                        className: l()["video-modal__body"],
                        children: [(0, n.jsxs)("video", {
                            controls: !0,
                            preload: "none",
                            poster: j,
                            className: (0, o.Z)(l()["video-modal__body-video"], _define_property({}, l()["video-modal__body-video--vertical-mode"], y)),
                            playsInline: !0,
                            autoPlay: !g,
                            children: [(0, n.jsx)("track", {
                                kind: "captions",
                                src: null
                            }), (0, n.jsx)("source", {
                                src: k
                            })]
                        }), (0, n.jsx)("span", {
                            className: l()["video-modal__body-title"],
                            children: t.title
                        }), (0, n.jsx)("div", {
                            className: l()["video-modal__body-description"],
                            children: (0, n.jsx)("p", {
                                className: l()["video-modal__body-description-text"],
                                children: t.description
                            })
                        })]
                    })
                })
            }
        },
        95399: function(e, r, t) {
            "use strict";
            t.r(r);
            var n = t(32930),
                o = t(40877),
                i = t(32888),
                a = t(78153),
                s = t.n(a),
                l = t(92369),
                c = t(27434),
                u = t(93222),
                d = t.n(u),
                _ = t(45835),
                v = t(5164);
            r.default = (0, c.memo)(function(e) {
                var r = e.name,
                    t = e.videos,
                    a = e.metadata,
                    u = e.verticalModeVideo,
                    p = void 0 !== u && u,
                    h = (0, _.b)().ua,
                    m = (0, c.useMemo)(function() {
                        return a.autoplay && [(0, v.BsLightCarouselAutoplayPlugin)({
                            delay: a.autoplay
                        })]
                    }, [a.autoplay]),
                    f = (0, c.useCallback)(function(e) {
                        requestIdleCallback(function() {
                            (0, l.publishEvent)("homeClick", {
                                name: r,
                                item: "".concat(e)
                            })
                        })
                    }, []),
                    y = h.isPc ? d() : "div",
                    b = h.isPc ? d().Item : "div";
                return (0, n.jsxs)("div", {
                    className: s()["video-slider-discovery"],
                    children: [!!(null == a ? void 0 : a.title) && (0, n.jsx)("div", {
                        className: s()["video-slider-discovery__header"],
                        children: a.title
                    }), (0, n.jsx)(y, {
                        navigation: !0,
                        plugins: m,
                        className: s()["video-slider-discovery__carousel"],
                        children: t.map(function(e, t) {
                            return (0, n.jsx)(b, {
                                className: (0, o.Z)(s()["video-slider-discovery__carousel-item"], _define_property({}, s()["video-slider-discovery__carousel-item--vertical"], p)),
                                onClick: function() {
                                    return f(t + 1)
                                },
                                children: (0, n.jsx)(i.Z, {
                                    playable: !0,
                                    name: r,
                                    video: e,
                                    index: t,
                                    metadata: a,
                                    verticalModeVideo: p
                                })
                            }, t)
                        })
                    })]
                })
            })
        },
        52655: function(e, r, t) {
            "use strict";
            t.r(r);
            var n = t(32930),
                o = t(40877),
                i = t(27434),
                a = t(34198),
                s = t.n(a),
                l = t(58633),
                c = t(45835),
                u = t(11516),
                d = t(88158),
                _ = t(81433),
                v = t.n(_),
                p = t(177),
                h = t.n(p),
                m = t(70437),
                f = t.n(m),
                y = t(83719),
                b = t(56637),
                x = t(69064);
            r.default = (0, i.memo)(function(e) {
                var r = e.className,
                    t = e.hasCoupon,
                    i = (0, c.b)().ua;
                return (0, n.jsxs)("div", {
                    className: (0, o.Z)(r, s()["home-page-skeleton"]),
                    children: [(0, n.jsx)(u.Z, {
                        isShowSearch: !0
                    }), (0, n.jsx)(v(), {
                        pt: 16,
                        pb: 16,
                        children: (0, n.jsx)(h(), {
                            children: (0, n.jsx)(l.Z, {})
                        })
                    }), (0, n.jsx)(v(), {
                        mb: 32,
                        children: (0, n.jsx)(y.Z, {})
                    }), (0, n.jsx)(v(), {
                        children: (0, n.jsx)(h(), {
                            fluid: !i.isPc,
                            children: (0, n.jsx)(b.Z, {})
                        })
                    }), t && (0, n.jsx)(v(), {
                        pt: 8,
                        children: (0, n.jsxs)(h(), {
                            children: [(0, n.jsx)(v(), {
                                mb: 16,
                                children: (0, n.jsx)(f(), {
                                    height: 25,
                                    width: 150,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)"
                                })
                            }), (0, n.jsx)(d.Z, {})]
                        })
                    }), (0, n.jsx)(v(), {
                        children: (0, n.jsx)(h(), {
                            fluid: !i.isPc,
                            children: (0, n.jsx)(x.Z, {
                                hasBackground: !0,
                                discountModeWithTimer: !0,
                                hasLabels: !0
                            })
                        })
                    })]
                })
            })
        },
        11516: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return l
                }
            });
            var n = t(32930),
                o = t(53175),
                i = t.n(o),
                a = t(70437),
                s = t.n(a);

            function l(e) {
                var r = e.isShowSearch;
                return (0, n.jsx)("div", {
                    className: i()["header-body"],
                    children: r ? (0, n.jsx)(s(), {
                        width: "100%",
                        height: "100%"
                    }) : (0, n.jsx)(s(), {
                        width: 120,
                        height: 21
                    })
                })
            }
        },
        15823: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return ve
                }
            });
            var n = t(58271),
                o = t(5164),
                i = t(32930),
                a = t(2389),
                s = t.n(a),
                l = t(74123),
                c = t.n(l),
                u = t(67938),
                d = t(88592),
                _ = t(52233),
                v = t.n(_),
                p = t(27434),
                h = t(50874),
                m = t.n(h),
                f = t(2134),
                y = t.n(f),
                b = t(88107);

            function x(e) {
                var r = e.preloadImage,
                    t = e.isWebview,
                    n = void 0 !== t && t,
                    o = (0, b.Z)(),
                    a = y()().publicRuntimeConfig,
                    s = "باسلام؛ بازار بی‌مرز",
                    l = (0, p.useMemo)(function() {
                        var e, r, t, n;
                        return null === (n = o.asPath) || void 0 === n || null === (t = n.split("?")) || void 0 === t || null === (r = t[0]) || void 0 === r || null === (e = r.split("#")) || void 0 === e ? void 0 : e[0]
                    }, [o.asPath]),
                    c = a.baseUrl + l,
                    u = "«باسلام» یک بازار بی‌مرز برای خرید و فروش است. در باسلام می‌توانید هر چیزی را که به دنبالش می‌گردید در میان دریای متنوعی از محصولات پیدا کنید.";
                return (0, i.jsxs)(v(), {
                    children: [(0, i.jsx)("title", {
                        children: s
                    }), !n && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("meta", {
                            property: "og:title",
                            content: s
                        }), (0, i.jsx)("meta", {
                            property: "og:url",
                            content: c
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "«باسلام» یک بازار بی‌مرز برای خرید و فروش محصولات مختلف با کیفیت و قیمت‌های متفاوت است. در باسلام می‌توانید هر چیزی را که به دنبالش می‌گردید در میان دریای متنوعی از محصولات پیدا کنید. محصولات خاصی که در فروشگاه‌های اینترنتی کمتر پیدا می‌شود. این محصولات را می‌توانید مستقیما از خود تولیدکننده‌ها یا واسطه‌ها بخرید. همچنین، می‌توانید غرفه خود را راه بیاندازید و محصولاتتان را بفروشید. به باسلام بیایید، بین هزاران غرفه‌ی آنلاین بچرخید و درباره‌ی تجربه‌های متنوع خریدوفروش گپ بزنید."
                        }), (0, i.jsx)("meta", {
                            property: "og:description",
                            content: u
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
                    }), "/" === l && !n && (0, i.jsxs)(i.Fragment, {
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
                            content: u
                        })]
                    })]
                })
            }
            x.propTypes = {
                preloadImage: m().string
            };
            var g = t(37314),
                j = t(26491),
                k = t(58633),
                w = t(45835),
                C = t(81433),
                S = t.n(C),
                P = t(177),
                N = t.n(P),
                I = t(70437),
                M = t.n(I);
            t(73853), t(52655), t(75627), t(95399), t(46196);
            var z = t(18020);
            t(30162), t(58507), t(34980);
            var O = t(65817);

            function E() {
                var e = (0, w.b)().ua.isPc;
                return (0, i.jsxs)(S(), {
                    children: [(0, i.jsx)(S(), {
                        mb: 16,
                        children: (0, i.jsx)(N(), {
                            children: (0, i.jsx)(M(), {
                                width: 150,
                                height: 24,
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)"
                            })
                        })
                    }), (0, i.jsx)(S(), {
                        mb: 12,
                        children: (0, i.jsx)(N(), {
                            children: (0, i.jsx)(S(), {
                                display: "flex",
                                gap: 12,
                                children: (0, o.range)(e ? 10 : 4).map(function(e, r) {
                                    return (0, i.jsx)(M(), {
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
                    }), (0, i.jsx)(S(), {
                        mt: 12,
                        children: (0, i.jsx)(O.Z, {
                            type: "story"
                        })
                    }), (0, i.jsx)(S(), {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 40,
                        mb: 96,
                        children: (0, i.jsx)(M(), {
                            width: 125,
                            height: 48,
                            waveColor: "var(--gray-200)",
                            backgroundColor: "var(--gray-100)"
                        })
                    })]
                })
            }
            var D = t(3087),
                Z = t(60802),
                A = t(83642),
                L = t(39145),
                B = t.n(L),
                R = t(24311),
                T = t(2018),
                G = "charsou_home_skeleton_config",
                F = "charsou_home_skeleton_version",
                K = "1.0.0";

            function W() {
                return !(0, o.isServerSide)() && (0, T.$)()
            }
            var U = t(56637),
                H = t(1692),
                V = t(69064),
                q = t(23217),
                X = t(26460),
                J = [{
                    ui: "billboard_image"
                }, {
                    ui: "horizontal_category"
                }, {
                    ui: "horizontal_product_popular",
                    metaData: {
                        hasBackground: !0
                    }
                }, {
                    ui: "horizontal_category"
                }, {
                    ui: "ads_slider"
                }, {
                    ui: "horizontal_product_popular",
                    metaData: {}
                }, {
                    ui: "horizontal_product_popular",
                    metaData: {}
                }, {
                    ui: "ads_slider"
                }, {
                    ui: "horizontal_vendor_coupons"
                }, {
                    ui: "horizontal_product_popular",
                    metaData: {}
                }, {
                    ui: "horizontal_product_popular",
                    metaData: {}
                }, {
                    ui: "horizontal_product_popular",
                    metaData: {}
                }, {
                    ui: "horizontal_product_popular",
                    metaData: {}
                }, {
                    ui: "horizontal_product_popular",
                    metaData: {}
                }, {
                    ui: "horizontal_product_popular",
                    metaData: {}
                }, {
                    ui: "top_reels_review_slider"
                }, {
                    ui: "horizontal_product_popular",
                    metaData: {}
                }, {
                    ui: "horizontal_vendor_with_chat"
                }, {
                    ui: "top_reels_business_slider"
                }, {
                    ui: "ads_slider"
                }];

            function Q() {
                var e = (0, w.b)().ua,
                    r = function() {
                        var e = _sliced_to_array((0, p.useState)(null), 2),
                            r = e[0],
                            t = e[1],
                            n = _sliced_to_array((0, p.useState)(!0), 2),
                            o = n[0],
                            i = n[1];
                        return (0, p.useEffect)(function() {
                            var e = W();
                            if (i(e), e) {
                                var r = function() {
                                    try {
                                        if (!W()) return null;
                                        var e = localStorage.getItem(F),
                                            r = localStorage.getItem(G);
                                        if (!r || e !== K) return null;
                                        var t = JSON.parse(r);
                                        return Array.isArray(t) ? t : null
                                    } catch (e) {
                                        return console.warn("[SkeletonStorage] Failed to get skeleton config:", e), null
                                    }
                                }();
                                r && r.length > 0 && t(r)
                            }
                        }, []), {
                            skeletonConfig: r,
                            hasStorageAccess: o
                        }
                    }(),
                    t = r.skeletonConfig,
                    n = t && t.length > 0 ? t : J;
                return (0, i.jsx)(S(), {
                    children: n.map(function(r, t) {
                        return function(e, r, t) {
                            var n = e.ui,
                                o = e.metaData,
                                a = void 0 === o ? {} : o;
                            switch (n) {
                                case "billboard_image":
                                    return (0, i.jsx)(S(), {
                                        mb: 32,
                                        children: (0, i.jsx)(X.kf, {})
                                    }, "".concat(n, "-").concat(t));
                                case "ads_slider":
                                    return (0, i.jsx)(N(), {
                                        fluid: !r,
                                        children: (0, i.jsx)(X.aK, {})
                                    }, "".concat(n, "-").concat(t));
                                case "horizontal_category":
                                    return (0, i.jsx)(N(), {
                                        children: (0, i.jsx)(U.Z, {})
                                    }, "".concat(n, "-").concat(t));
                                case "horizontal_product_popular":
                                    return (0, i.jsx)(N(), {
                                        fluid: !r,
                                        children: (0, i.jsx)(V.Z, {
                                            hasBackground: a.hasBackground,
                                            hasLogo: a.hasLogo,
                                            discountModeWithTimer: a.hasBackground,
                                            discountMode: !a.hasBackground,
                                            hasLabels: a.hasBackground || r,
                                            multipleLabels: !a.hasBackground && !r
                                        })
                                    }, "".concat(n, "-").concat(t));
                                case "horizontal_product_timely":
                                case "horizontal_product_timely_basalam":
                                    return (0, i.jsx)(N(), {
                                        fluid: !r,
                                        children: (0, i.jsx)(q.u, {})
                                    }, "".concat(n, "-").concat(t));
                                case "horizontal_pgp_popular":
                                    return (0, i.jsx)(N(), {
                                        fluid: !r,
                                        children: (0, i.jsx)(H.Z, {})
                                    }, "".concat(n, "-").concat(t));
                                case "horizontal_vendor_with_chat":
                                    return (0, i.jsx)(N(), {
                                        children: (0, i.jsx)(X.Iu, {})
                                    }, "".concat(n, "-").concat(t));
                                case "blog_post":
                                    return (0, i.jsx)(N(), {
                                        children: (0, i.jsx)(X.yQ, {})
                                    }, "".concat(n, "-").concat(t));
                                case "top_reels_review_slider":
                                case "top_reels_business_slider":
                                    return (0, i.jsx)(N(), {
                                        children: (0, i.jsx)(R.Xp, {})
                                    }, "".concat(n, "-").concat(t));
                                case "horizontal_video_list":
                                    return (0, i.jsx)(N(), {
                                        children: (0, i.jsx)(X.$t, {})
                                    }, "".concat(n, "-").concat(t));
                                case "vertical_video_list":
                                    return (0, i.jsx)(N(), {
                                        children: (0, i.jsx)(X.ls, {})
                                    }, "".concat(n, "-").concat(t));
                                case "horizontal_vendor_coupons":
                                    return (0, i.jsx)(N(), {
                                        fluid: !r,
                                        children: (0, i.jsx)(X.xG, {})
                                    }, "".concat(n, "-").concat(t));
                                default:
                                    return null
                            }
                        }(r, e.isPc, t)
                    })
                })
            }
            var Y = t(34198),
                $ = t.n(Y),
                ee = function(e, r) {
                    switch (e.ui) {
                        case "ads_slider":
                            return (0, i.jsx)(N(), {
                                children: (0, i.jsx)(X.aK, {})
                            }, "ads_slider");
                        case "horizontal_category":
                            return (0, i.jsx)(N(), {
                                children: (0, i.jsx)(U.Z, {})
                            }, "horizontal_category");
                        case "horizontal_product_popular":
                            var t, n, o, a, s, l;
                            return (0, i.jsx)(N(), {
                                fluid: !r,
                                children: (0, i.jsx)(V.Z, {
                                    hasBackground: null === (t = e.metaData) || void 0 === t ? void 0 : t.hasBackground,
                                    hasLogo: null === (n = e.metaData) || void 0 === n ? void 0 : n.hasLogo,
                                    discountModeWithTimer: null === (o = e.metaData) || void 0 === o ? void 0 : o.hasBackground,
                                    discountMode: !(null === (a = e.metaData) || void 0 === a ? void 0 : a.hasBackground),
                                    hasLabels: (null === (s = e.metaData) || void 0 === s ? void 0 : s.hasBackground) || r,
                                    multipleLabels: !(null === (l = e.metaData) || void 0 === l ? void 0 : l.hasBackground) && !r
                                })
                            });
                        case "horizontal_pgp_popular":
                            return (0, i.jsx)(H.Z, {});
                        case "horizontal_vendor_with_chat":
                            return r ? (0, i.jsx)(N(), {
                                children: (0, i.jsx)(X.Iu, {})
                            }) : (0, i.jsx)(X.Iu, {});
                        case "blog_post":
                            return (0, i.jsx)(X.yQ, {});
                        case "top_reels_review_slider":
                            return (0, i.jsx)(N(), {
                                children: (0, i.jsx)(R.Xp, {})
                            }, "top_reels_review_slider");
                        case "top_reels_business_slider":
                            return (0, i.jsx)(N(), {
                                children: (0, i.jsx)(R.Xp, {})
                            }, "top_reels_business_slider");
                        case "horizontal_video_list":
                            return (0, i.jsx)(X.$t, {});
                        case "vertical_video_list":
                            return (0, i.jsx)(X.ls, {});
                        case "horizontal_vendor_coupons":
                            return (0, i.jsx)(N(), {
                                fluid: !r,
                                children: (0, i.jsx)(X.xG, {})
                            });
                        default:
                            return null
                    }
                };

            function re(e) {
                var r = e.items,
                    t = void 0 === r ? [] : r,
                    n = (0, w.b)().ua.isPc;
                return (0, i.jsx)(S(), {
                    className: $()["csr-components-skeleton"],
                    children: t.map(function(e) {
                        return (0, i.jsx)(p.Fragment, {
                            children: (0, i.jsx)(S(), {
                                className: "styles['csr-components-skeleton__".concat(e.ui, "']"),
                                children: ee(e, n)
                            })
                        }, "".concat(e.name, "-").concat(e.ui))
                    })
                })
            }
            var te = s()(function() {
                    return Promise.all([t.e(8231), t.e(1740), t.e(2156)]).then(t.bind(t, 91740))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [91740]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, i.jsx)(S(), {
                            my: 16,
                            children: (0, i.jsx)(k.Z, {})
                        })
                    }
                }),
                ne = s()(function() {
                    return t.e(9666).then(t.bind(t, 99666))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [99666]
                        }
                    },
                    ssr: !1,
                    loading: E
                }),
                oe = s()(function() {
                    return Promise.resolve().then(t.bind(t, 94287))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [94287]
                        }
                    },
                    ssr: !0
                }),
                ie = s()(function() {
                    return t.e(6660).then(t.bind(t, 16660))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [16660]
                        }
                    },
                    ssr: !1
                }),
                ae = s()(function() {
                    return Promise.all([t.e(9836), t.e(8739)]).then(t.bind(t, 49836))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [49836]
                        }
                    },
                    ssr: !0
                }),
                se = (0, j.Z)({
                    on: ["visible"]
                })(ae),
                le = (0, j.Z)({
                    on: ["visible"]
                })(ne);

            function ce(e) {
                var r = e.enabled,
                    t = _sliced_to_array((0, p.useState)(!1), 2),
                    n = t[0],
                    o = t[1],
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
                    children: n ? (0, i.jsx)(ne, {
                        enabled: r
                    }) : (0, i.jsx)(E, {})
                })
            }

            function ue(e) {
                var r, t, n, o, a = e.isServer,
                    s = (0, w.b)(),
                    l = s.ua,
                    _ = s.isWebview,
                    v = s.isCachedPage,
                    h = (0, Z.l)().getFeatureValue,
                    m = (0, d.M_)(["currentUser"]).currentUser,
                    f = _sliced_to_array((0, p.useState)(!0), 2),
                    y = f[0],
                    b = f[1],
                    j = (0, p.useRef)(),
                    k = (0, p.useMemo)(function() {
                        return h("home_page", {})
                    }, [h]),
                    C = k.explore,
                    S = void 0 === C || C,
                    P = k.discovery,
                    N = void 0 === P || P,
                    I = _ && a ? 12 : 30,
                    M = (0, u.NS)({
                        enabled: S,
                        queryKey: ["first-page-discovery"],
                        queryFn: function(e) {
                            var r = e.pageParam,
                                t = void 0 === r ? 0 : r;
                            return (0, D._I)({
                                userId: null == m ? void 0 : m.id,
                                config: {
                                    params: {
                                        size: I,
                                        item_size: 12,
                                        lastRank: t,
                                        tab: "home_discovery"
                                    }
                                }
                            })
                        },
                        getNextPageParam: function(e, r) {
                            var t, n;
                            return ((null === (t = e.meta) || void 0 === t ? void 0 : t._hasPartialData) && e.items.length < I || e.items.length === I || 1 === r.length) && void 0 !== (null === (n = e.meta) || void 0 === n ? void 0 : n.lastRank) ? e.meta.lastRank : void 0
                        }
                    }),
                    O = M.data,
                    E = M.isError,
                    L = M.isLoading,
                    R = M.refetch,
                    T = M.hasNextPage,
                    U = M.fetchNextPage,
                    H = M.isFetchingNextPage,
                    V = (null == O ? void 0 : O.pages.length) > 0 && N,
                    q = (0, p.useMemo)(function() {
                        var e;
                        return null == O || null === (e = O.pages) || void 0 === e ? void 0 : e.reduce(function(e, r) {
                            return _to_consumable_array(e).concat(_to_consumable_array(r.items || []))
                        }, [])
                    }, [null == O ? void 0 : O.pages]),
                    X = (0, p.useMemo)(function() {
                        var e, r, t, n, o, i;
                        return "billboard_image" === (null == q || null === (e = q[0]) || void 0 === e ? void 0 : e.ui) ? null === (i = q[0].result) || void 0 === i || null === (o = i[0]) || void 0 === o || null === (n = o.metadata) || void 0 === n || null === (t = n.images) || void 0 === t || null === (r = t[0]) || void 0 === r ? void 0 : r[l.isPc ? "desktopUrl" : "url"] : null
                    }, [q, l.isPc]);
                (0, p.useEffect)(function() {
                    (!L && !H && (null == q ? void 0 : q.length) > 4 || E) && b(!1)
                }, [L, H, null == q ? void 0 : q.length, E]), (0, p.useEffect)(function() {
                    var e, r, t, n, o, i, s, l, c, u;
                    if (a && (null == O || null === (t = O.pages) || void 0 === t || null === (r = t[0]) || void 0 === r || null === (e = r.meta) || void 0 === e ? void 0 : e._remainingItemsMetadata) && 0 !== (null == O || null === (i = O.pages) || void 0 === i || null === (o = i[0]) || void 0 === o || null === (n = o.meta) || void 0 === n ? void 0 : n._remainingItemsMetadata.length) && q && 0 !== (null == q ? void 0 : q.length)) {
                        var d = Array.isArray(u = _to_consumable_array(q).concat(_to_consumable_array((null == O || null === (c = O.pages) || void 0 === c || null === (l = c[0]) || void 0 === l || null === (s = l.meta) || void 0 === s ? void 0 : s._remainingItemsMetadata) || []))) ? u.filter(function(e) {
                            return null == e ? void 0 : e.ui
                        }).map(function(e) {
                            var r = {
                                ui: e.ui
                            };
                            if (e.metadata || e.metaData) {
                                var t = e.metadata || e.metaData;
                                r.metaData = {
                                    hasLogo: t.hasLogo,
                                    hasBackground: t.hasBackground,
                                    uiRealDiscount: t.uiRealDiscount
                                }
                            }
                            return r
                        }) : [];
                        ! function(e) {
                            try {
                                if (!W()) return !1;
                                if (!Array.isArray(e)) return console.warn("[SkeletonStorage] Invalid config: expected array"), !1;
                                localStorage.setItem(G, JSON.stringify(e)), localStorage.setItem(F, K)
                            } catch (e) {
                                return console.warn("[SkeletonStorage] Failed to set skeleton config:", e), !1
                            }
                        }(d)
                    }
                }, [a, null == O ? void 0 : O.pages, q, O]);
                var J = (0, p.useMemo)(function() {
                        return y && a
                    }, [y, a]),
                    Y = (0, p.useCallback)(function() {
                        L || H || U()
                    }, [L, H, U]),
                    $ = null === (r = j.current) || void 0 === r ? void 0 : r.offsetHeight,
                    ee = !v && a;
                return (0, i.jsxs)("div", {
                    className: c()["home-page"],
                    children: [(0, i.jsx)(x, {
                        preloadImage: X,
                        isWebview: _
                    }), l.isPc ? (0, i.jsx)(oe, {}) : (0, i.jsx)(g.default, {
                        isShowSearch: !0
                    }), !l.isPc && !_ && (0, i.jsx)(ie, {
                        active: "HOME"
                    }), (0, i.jsx)(te, {
                        comeFromHomePage: !0
                    }), (0, i.jsxs)(B(), {
                        loadingComponent: null,
                        fetchMore: Y,
                        hasMore: !(H || E || L || !T),
                        hasError: !(!T || !E),
                        threshold: a ? $ : l.isPc ? 400 : 10,
                        children: [!!(null == q ? void 0 : q.length) && (0, i.jsx)(z.Z, {
                            isHiddenCsrComponentsSkeleton: !J || ee,
                            isServer: a,
                            sections: q
                        }), !T && E && (0, i.jsx)(A.Z, {
                            fetch: R
                        }), L && !a && (0, i.jsx)(Q, {}), (0, i.jsx)("div", {
                            ref: j,
                            style: {
                                display: J ? "block" : "none"
                            },
                            children: (0, i.jsx)(re, {
                                items: (null == O || null === (o = O.pages) || void 0 === o || null === (n = o[0]) || void 0 === n || null === (t = n.meta) || void 0 === t ? void 0 : t._remainingItemsMetadata) || []
                            })
                        })]
                    }), a ? (0, i.jsx)(le, {
                        enabled: V
                    }) : (0, i.jsx)(ce, {
                        enabled: V
                    }), !_ && (0, i.jsx)(se, {})]
                })
            }
            var de = t(39303),
                _e = (0, o.isClientSide)();
            ue.getInitialProps = function(e) {
                return _async_to_generator(function() {
                    var r, t, o, i, a, s, l, c, u, d, _, v, p, h, m, f, y, b, x, g, j;
                    return _ts_generator(this, function(k) {
                        switch (k.label) {
                            case 0:
                                if (r = e.req, t = e.res, o = e.userId, i = e.isWebview, a = e.queryClient, s = e.isCachedPage, !(l = !!r)) return [2, {
                                    isServer: l
                                }];
                                c = i ? 3 : 4, k.label = 1;
                            case 1:
                                return k.trys.push([1, 3, , 4]), [4, a.fetchInfiniteQuery(["first-page-discovery"], function() {
                                    return (0, D._I)({
                                        userId: o || 0,
                                        config: {
                                            req: r,
                                            res: t,
                                            params: {
                                                lastRank: 0,
                                                itemSize: 12,
                                                tab: "home_discovery",
                                                size: i ? 12 : 30
                                            }
                                        }
                                    })
                                })];
                            case 2:
                                return m = k.sent(), !((null == m || null === (_ = m.pages) || void 0 === _ || null === (d = _[0]) || void 0 === d || null === (u = d.items) || void 0 === u ? void 0 : u.length) > 0) && t && (r.app.noCache = !0), (f = null == m || null === (v = m.pages) || void 0 === v ? void 0 : v[0]) && f.items.length > c && s && (y = f.items.slice(0, c).map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        fromCache: !0
                                    })
                                }), b = f.items.slice(c), a.setQueryData(["first-page-discovery"], _object_spread_props(_object_spread({}, m), {
                                    pages: [_object_spread_props(_object_spread({}, f), {
                                        items: y,
                                        meta: _object_spread_props(_object_spread({}, f.meta), {
                                            _hasPartialData: !0,
                                            lastRank: (null === (h = f.items) || void 0 === h || null === (p = h[c - 1]) || void 0 === p ? void 0 : p.rank) || 0,
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
                                return x = k.sent(), g = (0, n.Pt)(x), j = 422 === (null == g ? void 0 : g.statusCode) ? 404 : g.statusCode || 500, [2, (!_e && t && (t.statusCode = j), {
                                    error: {
                                        statusCode: j
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
            var ve = (0, de.Z)(ue)
        },
        45728: function(e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(15823)
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
        e.O(0, [973, 2079, 3650, 246, 8293, 5382, 5250, 8738, 1198, 9303, 7314, 8990, 2746, 4287, 6734, 2353, 8020, 4247, 9774, 2888, 179], function() {
            return e(e.s = 45728)
        }), _N_E = e.O()
    }
]);