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
    [5405, 5399], {
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
                u = n(5164),
                d = n(29723),
                _ = n(55253),
                v = n.n(_),
                p = n(76303),
                f = n.n(p),
                y = n(53278),
                m = n.n(y),
                b = n(4260),
                h = n.n(b),
                j = s()(function() {
                    return Promise.all([n.e(3620), n.e(7028), n.e(2584), n.e(6635), n.e(8032)]).then(n.bind(n, 62717))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [62717]
                        }
                    },
                    ssr: !1
                }),
                x = s()(function() {
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
                var r, n, i, s, a, _, p, y, b = e.story,
                    g = e.onClick,
                    w = e.reelsShowing,
                    k = void 0 === w || w,
                    N = e.sliderAvatar,
                    P = _sliced_to_array((0, c.useState)(!1), 2),
                    C = P[0],
                    S = P[1],
                    M = (0, d.Kp)(["isIosApp"]).isIosApp,
                    I = (null === (r = b.photo) || void 0 === r ? void 0 : r.url) || (null === (n = b.video) || void 0 === n ? void 0 : n.thumbnail),
                    O = (0, c.useMemo)(function() {
                        return {
                            data: {
                                user: b.user || {},
                                stories: [_object_spread_props(_object_spread({}, b), {
                                    isFollowed: !0
                                })]
                            }
                        }
                    }, [b]),
                    D = function() {
                        S(!1)
                    };
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("div", {
                        className: (0, o.Z)([l().discovery__story, _define_property({}, l()["discovery__story--with-bg"], !!b.video)]),
                        onClick: function() {
                            S(!0), null == g || g()
                        },
                        "data-from": "discovery",
                        children: [b.video ? (0, t.jsx)(h(), {
                            poster: M ? null === (i = b.video) || void 0 === i ? void 0 : i.thumbnail : void 0,
                            playsInline: !0,
                            className: l()["discovery__story-video"],
                            autoplay: !M,
                            loop: !0,
                            muted: !0,
                            src: (null === (s = b.videoUrls) || void 0 === s ? void 0 : s.HLS) || b.video.url,
                            controls: !1
                        }) : (0, t.jsx)(m(), {
                            className: l()["discovery__story-img"],
                            src: I,
                            withPlaceHolder: !0,
                            ratio: 1.7
                        }), b.seen >= 5 && (0, t.jsxs)("div", {
                            className: l()["discovery__story-seen"],
                            children: [(0, t.jsx)("i", {
                                className: "bi-eye-fill"
                            }), "".concat((0, u.roundBigNumber)(b.seen, 1e3)).replace(/^\+/, "")]
                        }), (0, t.jsx)("div", {
                            className: l()["discovery__story-icon"],
                            children: (0, t.jsx)(f(), {
                                name: "bi-story",
                                color: "var(--white)"
                            })
                        }), N && (0, t.jsxs)("div", {
                            className: l()["discovery__story-info"],
                            children: [(0, t.jsx)(v(), {
                                className: l()["discovery__story-info__avatar"],
                                src: null == b || null === (_ = b.user) || void 0 === _ || null === (a = _.avatar) || void 0 === a ? void 0 : a.small
                            }), (0, t.jsx)("p", {
                                className: l()["discovery__story-info__title"],
                                children: null == b || null === (y = b.user) || void 0 === y || null === (p = y.vendor) || void 0 === p ? void 0 : p.title
                            })]
                        })]
                    }), !!C && (k ? (0, t.jsx)(j, {
                        currentContentIdOnClicked: b.id,
                        onClose: D,
                        show: !0
                    }) : (0, t.jsx)(x, {
                        initialData: O,
                        storyId: b.id,
                        onClose: D
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
                s = n(70968),
                a = n.n(s),
                l = n(45835),
                c = n(29723),
                u = n(81433),
                d = n.n(u),
                _ = n(1103),
                v = n.n(_),
                p = n(27434);

            function f(e) {
                var r = e.name,
                    n = e.video,
                    s = e.index,
                    u = e.onPlay,
                    _ = e.onPause,
                    f = e.metadata,
                    y = e.autoPlay,
                    m = void 0 !== y && y,
                    b = e.showInModal,
                    h = void 0 === b || b,
                    j = e.verticalModeVideo,
                    x = void 0 !== j && j,
                    g = (0, l.b)().ua,
                    w = _sliced_to_array((0, p.useState)(!1), 2),
                    k = w[0],
                    N = w[1],
                    P = _sliced_to_array((0, p.useState)(!1), 2),
                    C = P[0],
                    S = P[1],
                    M = _sliced_to_array((0, p.useState)(!1), 2),
                    I = M[0],
                    O = M[1],
                    D = (0, c.Kp)(["isIosApp"]).isIosApp,
                    Z = (0, p.useRef)(null),
                    q = (0, p.useMemo)(function() {
                        var e, r, t = n.thumbnail,
                            o = (null === (e = n.thumbnail) || void 0 === e ? void 0 : e.mobile) || t,
                            i = (null === (r = n.thumbnail) || void 0 === r ? void 0 : r.desktop) || t;
                        return g.isMobile ? o : i
                    }, [n, g]),
                    E = (0, p.useMemo)(function() {
                        var e, r, t = n.url,
                            o = (null === (e = n.url) || void 0 === e ? void 0 : e.mobile) || t,
                            i = (null === (r = n.url) || void 0 === r ? void 0 : r.desktop) || t;
                        return g.isMobile ? o : i
                    }, [n, g]),
                    K = function(e) {
                        e.preventDefault(), h && O(!0)
                    },
                    A = (0, p.useCallback)(function(e) {
                        g.isMobile && (e.stopPropagation(), S(function(e) {
                            return !e
                        }))
                    }, [C]);
                (0, p.useEffect)(function() {
                    var e;
                    m && (N(!0), null == Z || null === (e = Z.current) || void 0 === e || e.play())
                }, [m]);
                var R = (0, p.useMemo)(function() {
                    return (null == f ? void 0 : f.size) ? g.isMobile ? f.size.mobile.height / f.size.mobile.width : f.size.desktop.height / f.size.desktop.width : null
                }, [f, g]);
                return (0, t.jsxs)("div", {
                    className: a()["video-discovery"],
                    children: [(0, t.jsx)(v(), {
                        mounted: !k,
                        transition: "fade",
                        duration: 200,
                        children: function(e) {
                            return (0, t.jsx)("div", {
                                style: e,
                                children: (0, t.jsx)("img", {
                                    src: q,
                                    alt: " ",
                                    loading: "lazy",
                                    className: a()["video-discovery__image"],
                                    onClick: function(e) {
                                        return K(e)
                                    },
                                    "aria-hidden": "true"
                                })
                            })
                        }
                    }), (0, t.jsxs)("video", {
                        muted: m,
                        ref: Z,
                        onPause: function(e) {
                            return null == Z || null === (r = Z.current) || void 0 === r || r.pause(), N(!1), void(_ && _());
                            var r
                        },
                        className: a()["video-discovery__video"],
                        onPlay: function() {
                            return u && u()
                        },
                        controls: k && !m,
                        playsInline: !0,
                        autoPlay: !D && m,
                        loop: m,
                        preload: "none",
                        onClick: function(e) {
                            return K(e)
                        },
                        children: [(0, t.jsx)("track", {
                            kind: "captions",
                            src: null
                        }), (0, t.jsx)("source", {
                            src: E
                        })]
                    }), (0, t.jsx)("div", {
                        style: {
                            paddingBottom: "".concat(100 * R, "%")
                        }
                    }), !!n.description && !k && (0, t.jsx)("div", {
                        className: a()["video-discovery__content"],
                        onClick: function(e) {
                            return A(e)
                        },
                        "aria-hidden": "true",
                        children: (0, t.jsxs)("div", {
                            className: a()["video-discovery__content-texts"],
                            children: [(0, t.jsxs)(d(), {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                children: [(0, t.jsx)("span", {
                                    className: a()["video-discovery__content-texts-title"],
                                    children: n.description
                                }), !!g.isMobile && (0, t.jsx)("i", {
                                    className: (0, o.Z)("bi-angle-up", a()["video-discovery__content-texts-toggle"], {
                                        "video-discovery__content-texts-toggle--expanded": C
                                    })
                                })]
                            }), (0, t.jsx)("span", {
                                className: (0, o.Z)(a()["video-discovery__content-texts-subtitle"], {
                                    "video-discovery__content-texts-subtitle--expanded": C
                                }),
                                children: n.subtitle
                            })]
                        })
                    }), !k && (0, t.jsx)("button", {
                        className: a()["video-discovery__play"],
                        onClick: function(e) {
                            return K(e)
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
                            return O(!1)
                        },
                        verticalModeVideo: x
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
                c = n(84581),
                u = n(65074),
                d = n.n(u),
                _ = n(92034),
                v = n.n(_),
                p = n(45835),
                f = n(29723),
                y = n(88107);

            function m(e) {
                var r = e.show,
                    n = e.video,
                    a = e.close,
                    u = e.name,
                    _ = e.index,
                    m = e.verticalModeVideo,
                    b = void 0 !== m && m,
                    h = (0, p.b)().ua,
                    j = (0, y.Z)(),
                    x = (0, f.Kp)(["isIosApp"]).isIosApp,
                    g = (0, i.useMemo)(function() {
                        var e, r, t = n.thumbnail,
                            o = (null === (e = n.thumbnail) || void 0 === e ? void 0 : e.mobile) || t,
                            i = (null === (r = n.thumbnail) || void 0 === r ? void 0 : r.desktop) || t;
                        return h.isMobile ? o : i
                    }, [n, h]),
                    w = (0, i.useMemo)(function() {
                        var e, r, t = n.url,
                            o = (null === (e = n.url) || void 0 === e ? void 0 : e.mobile) || t,
                            i = (null === (r = n.url) || void 0 === r ? void 0 : r.desktop) || t;
                        return h.isMobile ? o : i
                    }, [n, h]);
                return (0, t.jsx)(v(), {
                    show: r,
                    onClose: function() {
                        return a()
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
                                                return null == a || a(), (0, c.s)("homeClick", {
                                                    item: _,
                                                    componentName: u
                                                }), [4, (0, s.sleep)(350)];
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
                            onClick: a
                        })]
                    }),
                    children: (0, t.jsxs)("div", {
                        className: l()["video-modal__body"],
                        children: [(0, t.jsxs)("video", {
                            controls: !0,
                            preload: "none",
                            poster: g,
                            className: (0, o.Z)(l()["video-modal__body-video"], _define_property({}, l()["video-modal__body-video--vertical-mode"], b)),
                            playsInline: !0,
                            autoPlay: !x,
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
                l = n(84581),
                c = n(27434),
                u = n(93222),
                d = n.n(u),
                _ = n(45835),
                v = n(5164);
            r.default = (0, c.memo)(function(e) {
                var r = e.name,
                    n = e.videos,
                    s = e.metadata,
                    u = e.verticalModeVideo,
                    p = void 0 !== u && u,
                    f = (0, _.b)().ua,
                    y = (0, c.useMemo)(function() {
                        return s.autoplay && [(0, v.BsLightCarouselAutoplayPlugin)({
                            delay: s.autoplay
                        })]
                    }, [s.autoplay]),
                    m = (0, c.useCallback)(function(e) {
                        requestIdleCallback(function() {
                            (0, l.s)("homeClick", {
                                name: r,
                                item: "".concat(e)
                            })
                        })
                    }, []),
                    b = f.isPc ? d() : "div",
                    h = f.isPc ? d().Item : "div";
                return (0, t.jsxs)("div", {
                    className: a()["video-slider-discovery"],
                    children: [!!(null == s ? void 0 : s.title) && (0, t.jsx)("div", {
                        className: a()["video-slider-discovery__header"],
                        children: s.title
                    }), (0, t.jsx)(b, {
                        navigation: !0,
                        plugins: y,
                        className: a()["video-slider-discovery__carousel"],
                        children: n.map(function(e, n) {
                            return (0, t.jsx)(h, {
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
        87694: function(e, r, n) {
            "use strict";
            n.d(r, {
                sY: function() {
                    return l
                },
                HL: function() {
                    return c
                },
                X2: function() {
                    return p
                },
                xT: function() {
                    return I
                },
                lj: function() {
                    return D
                },
                dU: function() {
                    return j
                },
                VK: function() {
                    return h
                },
                EU: function() {
                    return f
                },
                nU: function() {
                    return b
                },
                Bp: function() {
                    return x
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
                    return P
                },
                $B: function() {
                    return C
                },
                ml: function() {
                    return w
                },
                I1: function() {
                    return M
                },
                TA: function() {
                    return O
                },
                fK: function() {
                    return N
                },
                NS: function() {
                    return k
                },
                br: function() {
                    return g
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
                s = n(59403),
                a = n(32066),
                l = "user-highlights",
                c = "user-stories",
                u = "story-feed",
                d = "users-stories",
                _ = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, o.aM)(_object_spread_props(_object_spread({}, r), {
                        queryKey: [c, e],
                        queryFn: function() {
                            return (0, a.mu)(e)
                        }
                    }))
                },
                v = function(e) {
                    var r = (0, o.NL)();
                    return (0, t.useCallback)(function(n, t) {
                        r.setQueryData([c, e], function(e) {
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
                    return (0, i.D)(["add-story"], a.Z6)
                },
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, o.aM)(_object_spread({
                        queryKey: ["my-stories"],
                        queryFn: function() {
                            return (0, a.TB)({
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
                            return (0, a.$f)(e)
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
                b = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, o.aM)(_object_spread({
                        queryKey: ["single-story", e],
                        queryFn: function() {
                            return (0, a.vu)(e)
                        },
                        select: function(e) {
                            return e.data
                        }
                    }, r))
                },
                h = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, s.N)(_object_spread({
                        queryKey: ["hashtag", e],
                        queryFn: function(r) {
                            var n = r.pageParam,
                                t = void 0 === n ? 0 : n;
                            return (0, a.yq)({
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
                            return (0, a.A1)(e, 5, {
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
                x = function(e) {
                    return (0, s.N)({
                        queryKey: ["story", l, e],
                        queryFn: function(r) {
                            var n = r.pageParam,
                                t = void 0 === n ? 0 : n;
                            return (0, a.wJ)({
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
                g = function(e) {
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
                    return (0, s.N)({
                        queryKey: [u],
                        queryFn: function(r) {
                            var n = r.pageParam,
                                t = void 0 === n ? [] : n;
                            return (0, a.tz)({
                                vendors: t,
                                count: e
                            })
                        },
                        getNextPageParam: function(e, r) {
                            var n, t;
                            if (0 !== (null == e || null === (n = e.openapiRawData) || void 0 === n ? void 0 : n.length)) {
                                var o = [],
                                    i = !0,
                                    s = !1,
                                    a = void 0,
                                    l = !0,
                                    c = !1,
                                    u = void 0;
                                try {
                                    for (var d, _ = r[Symbol.iterator](); !(l = (d = _.next()).done); l = !0) {
                                        var v = d.value;
                                        try {
                                            for (var p, f = v.openapiRawData[Symbol.iterator](); !(i = (p = f.next()).done); i = !0) {
                                                var y = p.value;
                                                o.push(null == y || null === (t = y.user) || void 0 === t ? void 0 : t.id)
                                            }
                                        } catch (e) {
                                            s = !0, a = e
                                        } finally {
                                            try {
                                                i || null == f.return || f.return()
                                            } finally {
                                                if (s) throw a
                                            }
                                        }
                                    }
                                } catch (e) {
                                    c = !0, u = e
                                } finally {
                                    try {
                                        l || null == _.return || _.return()
                                    } finally {
                                        if (c) throw u
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
                        e.setQueryData([u], function(e) {
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
                N = function() {
                    var e = (0, o.NL)();
                    return (0, t.useCallback)(function(r, n) {
                        e.setQueryData(["mixed-page-discovery"], function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                pages: e.pages.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        components: e.components.map(function(e) {
                                            var t;
                                            return "story" === (null == e ? void 0 : e.type) && (null == e || null === (t = e.story) || void 0 === t ? void 0 : t.id) === r ? _object_spread_props(_object_spread({}, e), {
                                                story: _object_spread({}, e.story, n)
                                            }) : "stories" === (null == e ? void 0 : e.type) ? _object_spread_props(_object_spread({}, e), {
                                                stories: e.stories.map(function(e) {
                                                    return (null == e ? void 0 : e.id) === r ? _object_spread({}, e, n) : e
                                                })
                                            }) : e
                                        })
                                    })
                                })
                            })
                        })
                    }, [e])
                },
                P = function() {
                    var e = (0, o.NL)();
                    return (0, t.useCallback)(function(r) {
                        e.setQueryData([u], function(e) {
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
                C = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(a.N5, e)
                },
                S = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(a.kT, e)
                },
                M = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(a.Vw, e)
                },
                I = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(a.qM, e)
                },
                O = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(a.ie, e)
                },
                D = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(a.$J, e)
                }
        },
        38251: function(e, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return se
                }
            });
            var t = n(58271),
                o = n(21306),
                i = n(5164),
                s = n(32930),
                a = n(2389),
                l = n.n(a),
                c = n(74123),
                u = n.n(c),
                d = n(67938),
                _ = n(88592),
                v = n(52233),
                p = n.n(v),
                f = n(27434),
                y = n(50874),
                m = n.n(y),
                b = n(2134),
                h = n.n(b),
                j = n(88107);

            function x(e) {
                var r = e.preloadImage,
                    n = (0, j.Z)(),
                    t = h()().publicRuntimeConfig,
                    o = "باسلام؛ بازار بی‌مرز",
                    i = (0, f.useMemo)(function() {
                        var e, r, t, o;
                        return null === (o = n.asPath) || void 0 === o || null === (t = o.split("?")) || void 0 === t || null === (r = t[0]) || void 0 === r || null === (e = r.split("#")) || void 0 === e ? void 0 : e[0]
                    }, [n.asPath]),
                    a = t.baseUrl + i,
                    l = "«باسلام» یک بازار بی‌مرز برای خرید و فروش است. در باسلام می‌توانید هر چیزی را که به دنبالش می‌گردید در میان دریای متنوعی از محصولات پیدا کنید.";
                return (0, s.jsxs)(p(), {
                    children: [(0, s.jsx)("title", {
                        children: o
                    }), (0, s.jsx)("meta", {
                        property: "og:title",
                        content: o
                    }), (0, s.jsx)("meta", {
                        property: "og:url",
                        content: a
                    }), (0, s.jsx)("meta", {
                        name: "description",
                        content: "«باسلام» یک بازار بی‌مرز برای خرید و فروش محصولات مختلف با کیفیت و قیمت‌های متفاوت است. در باسلام می‌توانید هر چیزی را که به دنبالش می‌گردید در میان دریای متنوعی از محصولات پیدا کنید. محصولات خاصی که در فروشگاه‌های اینترنتی کمتر پیدا می‌شود. این محصولات را می‌توانید مستقیما از خود تولیدکننده‌ها یا واسطه‌ها بخرید. همچنین، می‌توانید غرفه خود را راه بیاندازید و محصولاتتان را بفروشید. به باسلام بیایید، بین هزاران غرفه‌ی آنلاین بچرخید و درباره‌ی تجربه‌های متنوع خریدوفروش گپ بزنید."
                    }), (0, s.jsx)("meta", {
                        property: "og:description",
                        content: l
                    }), (0, s.jsx)("meta", {
                        property: "og:site_name",
                        content: "باسلام؛ بازار بی‌مرز"
                    }), (0, s.jsx)("link", {
                        rel: "canonical",
                        href: a
                    }), r && (0, s.jsx)("link", {
                        rel: "preload",
                        as: "image",
                        href: r,
                        fetchpriority: "high"
                    }), "/" === i && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary"
                        }), (0, s.jsx)("meta", {
                            name: "twitter:site",
                            content: "@basalam_bazaar"
                        }), (0, s.jsx)("meta", {
                            name: "twitter:title",
                            content: o
                        }), (0, s.jsx)("meta", {
                            name: "twitter:description",
                            content: l
                        })]
                    })]
                })
            }
            x.propTypes = {
                preloadImage: m().string
            };
            var g = n(37314),
                w = n(26491),
                k = n(91740),
                N = n(39145),
                P = n.n(N),
                C = n(45835),
                S = n(81433),
                M = n.n(S),
                I = n(177),
                O = n.n(I),
                D = n(70437),
                Z = n.n(D);
            n(73853), n(52655), n(75627), n(95399), n(46196);
            var q = n(68483);
            n(30162), n(58507), n(34980);
            var E = n(65817);

            function K() {
                return (0, s.jsxs)(M(), {
                    children: [(0, s.jsx)(M(), {
                        mb: 16,
                        children: (0, s.jsx)(O(), {
                            children: (0, s.jsx)(Z(), {
                                width: 150,
                                height: 24,
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)"
                            })
                        })
                    }), (0, s.jsx)(E.Z, {}), (0, s.jsx)(M(), {
                        mt: 12,
                        children: (0, s.jsx)(E.Z, {})
                    }), (0, s.jsx)(M(), {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 40,
                        mb: 96,
                        children: (0, s.jsx)(Z(), {
                            width: 125,
                            height: 48,
                            waveColor: "var(--gray-200)",
                            backgroundColor: "var(--gray-100)"
                        })
                    })]
                })
            }
            var A = n(3087),
                R = n(60802),
                T = n(83642),
                F = n(88158),
                U = n(56637),
                z = n(26460),
                G = n(69064),
                L = n(34198),
                V = n.n(L),
                Q = n(24311),
                H = n(1692);

            function X() {
                return (0, s.jsxs)(M(), {
                    className: V()["csr-components-skeleton"],
                    children: [(0, s.jsx)(M(), {
                        className: V()["csr-components-skeleton__ads"],
                        children: (0, s.jsx)(O(), {
                            children: (0, s.jsx)(z.aK, {})
                        })
                    }), (0, s.jsx)(M(), {
                        className: V()["csr-components-skeleton__reels"],
                        children: (0, s.jsx)(O(), {
                            children: (0, s.jsx)(Q.X, {})
                        })
                    }), (0, s.jsx)(M(), {
                        className: V()["csr-components-skeleton__ads"],
                        children: (0, s.jsx)(O(), {
                            children: (0, s.jsx)(z.aK, {})
                        })
                    }), (0, s.jsx)(M(), {
                        className: V()["csr-components-skeleton__reels"],
                        children: (0, s.jsx)(O(), {
                            children: (0, s.jsx)(Q.X, {})
                        })
                    }), (0, s.jsx)(M(), {
                        className: V()["csr-components-skeleton__vendor"],
                        children: (0, s.jsx)(O(), {
                            children: (0, s.jsx)(z.Iu, {})
                        })
                    }), (0, s.jsx)(M(), {
                        className: V()["csr-components-skeleton__pgp"],
                        children: (0, s.jsx)(O(), {
                            children: (0, s.jsx)(H.Z, {})
                        })
                    })]
                })
            }

            function B(e) {
                var r = e.hasCoupon;
                return (0, s.jsxs)(M(), {
                    children: [(0, s.jsx)(M(), {
                        mb: 32,
                        children: (0, s.jsx)(z.kf, {})
                    }), (0, s.jsx)(M(), {
                        pr: 8,
                        pl: 8,
                        children: (0, s.jsx)(O(), {
                            children: (0, s.jsx)(U.Z, {})
                        })
                    }), r && (0, s.jsx)(M(), {
                        pt: 8,
                        pb: 24,
                        children: (0, s.jsxs)(O(), {
                            children: [(0, s.jsx)(M(), {
                                mb: 16,
                                children: (0, s.jsx)(Z(), {
                                    height: 25,
                                    width: 150,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)"
                                })
                            }), (0, s.jsx)(F.Z, {})]
                        })
                    }), (0, s.jsx)(M(), {
                        children: (0, s.jsx)(O(), {
                            children: (0, s.jsx)(G.Z, {})
                        })
                    }), (0, s.jsx)(X, {})]
                })
            }
            var W = l()(function() {
                    return n.e(9666).then(n.bind(n, 99666))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [99666]
                        }
                    },
                    ssr: !1,
                    loading: K
                }),
                Y = l()(function() {
                    return Promise.resolve().then(n.bind(n, 94287))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [94287]
                        }
                    },
                    ssr: !0
                }),
                J = l()(function() {
                    return n.e(6660).then(n.bind(n, 16660))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [16660]
                        }
                    },
                    ssr: !0
                }),
                $ = l()(function() {
                    return Promise.all([n.e(9836), n.e(5807)]).then(n.bind(n, 49836))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [49836]
                        }
                    },
                    ssr: !0
                }),
                ee = (0, w.Z)({
                    on: ["visible"]
                })($),
                re = (0, w.Z)({
                    on: ["visible"]
                })(W);

            function ne(e) {
                var r = e.enabled,
                    n = _sliced_to_array((0, f.useState)(!1), 2),
                    t = n[0],
                    o = n[1],
                    i = (0, f.useRef)(null);
                return (0, f.useEffect)(function() {
                    var e = new IntersectionObserver(function(r) {
                        _sliced_to_array(r, 1)[0].isIntersecting && (o(!0), e.disconnect())
                    }, {
                        rootMargin: "300px"
                    });
                    return i.current && e.observe(i.current),
                        function() {
                            return e.disconnect()
                        }
                }, []), (0, s.jsx)("div", {
                    ref: i,
                    children: t ? (0, s.jsx)(W, {
                        enabled: r
                    }) : (0, s.jsx)(K, {})
                })
            }

            function te(e) {
                var r = e.isServer,
                    n = (0, C.b)(),
                    t = n.ua,
                    o = n.isWebview,
                    i = (0, R.l)().getFeatureValue,
                    a = (0, _.M_)(["currentUser"]).currentUser,
                    l = _sliced_to_array((0, f.useState)(!0), 2),
                    c = l[0],
                    v = l[1],
                    p = (0, f.useMemo)(function() {
                        return i("home_page", {})
                    }, [i]),
                    y = p.explore,
                    m = void 0 === y || y,
                    b = p.discovery,
                    h = void 0 === b || b,
                    j = (0, d.NS)({
                        enabled: m,
                        queryKey: ["first-page-discovery"],
                        getNextPageParam: function(e, r) {
                            var n;
                            return 12 === e.items.length || 1 === r.length ? null === (n = e.meta) || void 0 === n ? void 0 : n.lastRank : void 0
                        },
                        queryFn: function(e) {
                            var r = e.pageParam,
                                n = void 0 === r ? 0 : r;
                            return (0, A._I)({
                                userId: null == a ? void 0 : a.id,
                                config: {
                                    params: {
                                        size: 12,
                                        item_size: 12,
                                        lastRank: n,
                                        tab: "home_discovery"
                                    }
                                }
                            })
                        }
                    }),
                    w = j.data,
                    N = j.isError,
                    S = j.isLoading,
                    M = j.refetch,
                    I = j.hasNextPage,
                    O = j.fetchNextPage,
                    D = j.isFetchingNextPage,
                    Z = (null == w ? void 0 : w.pages.length) > 0 && !I && h,
                    E = (0, f.useMemo)(function() {
                        var e;
                        return null == w || null === (e = w.pages) || void 0 === e ? void 0 : e.reduce(function(e, r) {
                            return _to_consumable_array(e).concat(_to_consumable_array(r.items || []))
                        }, [])
                    }, [null == w ? void 0 : w.pages]),
                    K = (0, f.useMemo)(function() {
                        var e, r, n, o, i, s;
                        return "billboard_image" === (null == E || null === (e = E[0]) || void 0 === e ? void 0 : e.ui) ? null === (s = E[0].result) || void 0 === s || null === (i = s[0]) || void 0 === i || null === (o = i.metadata) || void 0 === o || null === (n = o.images) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r[t.isPc ? "desktopUrl" : "url"] : null
                    }, [E, t.isPc]);
                (0, f.useEffect)(function() {
                    (!S && !D && (null == E ? void 0 : E.length) > 3 || N) && v(!1)
                }, [S, D, null == E ? void 0 : E.length, N]);
                var F = (0, f.useMemo)(function() {
                        return c && r
                    }, [c, r]),
                    U = (0, f.useCallback)(function() {
                        S || D || O()
                    }, [S, D, O]);
                return (0, s.jsxs)("div", {
                    className: u()["home-page"],
                    children: [(0, s.jsx)(x, {
                        preloadImage: K
                    }), t.isPc ? (0, s.jsx)(Y, {}) : (0, s.jsx)(g.default, {
                        isShowSearch: !0
                    }), !t.isPc && !o && (0, s.jsx)(J, {
                        active: "HOME"
                    }), (0, s.jsx)(k.Z, {}), (0, s.jsxs)(P(), {
                        loadingComponent: null,
                        fetchMore: U,
                        hasMore: !(D || N || S || !I),
                        hasError: !(!I || !N),
                        threshold: r ? t.isPc ? 2850 : o ? 1900 : 2400 : t.isPc ? 400 : 10,
                        children: [!!(null == E ? void 0 : E.length) && (0, s.jsx)(q.Z, {
                            isHiddenCsrComponentsSkeleton: !F,
                            isServer: r,
                            sections: E
                        }), !I && N && (0, s.jsx)(T.Z, {
                            fetch: M
                        }), S && !r && (0, s.jsx)(B, {
                            hasCoupon: !t.isPc
                        }), (0, s.jsx)("div", {
                            style: {
                                display: F ? "block" : "none"
                            },
                            children: (0, s.jsx)(X, {})
                        })]
                    }), r ? (0, s.jsx)(re, {
                        enabled: Z
                    }) : (0, s.jsx)(ne, {
                        enabled: Z
                    }), !o && (0, s.jsx)(ee, {})]
                })
            }
            var oe = n(94945),
                ie = (0, i.isClientSide)();
            te.getInitialProps = function(e) {
                return _async_to_generator(function() {
                    var r, n, i, s, a, l, c, u, d, _, v, p, f;
                    return _ts_generator(this, function(y) {
                        switch (y.label) {
                            case 0:
                                if (r = e.req, n = e.res, i = e.userId, s = e.queryClient, a = e.isCachedPage, !r) return [2, {}];
                                l = (0, o.isIosApp)({
                                    req: r,
                                    res: n
                                }), y.label = 1;
                            case 1:
                                return y.trys.push([1, 3, , 4]), [4, s.fetchInfiniteQuery(["first-page-discovery"], function() {
                                    return (0, A._I)({
                                        userId: i || 0,
                                        config: {
                                            req: r,
                                            res: n,
                                            params: {
                                                lastRank: 0,
                                                itemSize: 12,
                                                tab: "home_discovery",
                                                size: a && !l ? 3 : 12
                                            }
                                        }
                                    })
                                })];
                            case 2:
                                return _ = y.sent(), !((null == _ || null === (d = _.pages) || void 0 === d || null === (u = d[0]) || void 0 === u || null === (c = u.items) || void 0 === c ? void 0 : c.length) > 0) && n && (r.app.noCache = !0), [3, 4];
                            case 3:
                                return v = y.sent(), p = (0, t.Pt)(v), f = 422 === (null == p ? void 0 : p.statusCode) ? 404 : p.statusCode || 500, [2, (!ie && n && (n.statusCode = f), {
                                    error: {
                                        statusCode: f
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
            var se = (0, oe.Z)(te)
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
        74123: function(e) {
            e.exports = {
                "home-page": "F2y4l4"
            }
        }
    },
    function(e) {
        e.O(0, [973, 9922, 246, 8293, 5382, 8237, 8214, 4945, 7314, 2026, 4287, 3656, 4859, 9691, 8483, 1740, 3853, 9774, 2888, 179], function() {
            return e(e.s = 45728)
        }), _N_E = e.O()
    }
]);