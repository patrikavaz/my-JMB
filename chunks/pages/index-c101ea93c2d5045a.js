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
    [5405, 5399], {
        75627: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return x
                }
            });
            var n = t(32930),
                o = t(40877),
                i = t(2389),
                a = t.n(i),
                s = t(7867),
                l = t.n(s),
                u = t(27434),
                c = t(5164),
                d = t(29723),
                _ = t(55253),
                v = t.n(_),
                p = t(76303),
                f = t.n(p),
                y = t(53278),
                m = t.n(y),
                b = t(4260),
                h = t.n(b),
                j = a()(function() {
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

            function x(e) {
                var r, t, i, a, s, _, p, y, b = e.story,
                    x = e.onClick,
                    w = e.reelsShowing,
                    k = void 0 === w || w,
                    P = e.sliderAvatar,
                    N = _sliced_to_array((0, u.useState)(!1), 2),
                    C = N[0],
                    M = N[1],
                    I = (0, d.Kp)(["isIosApp"]).isIosApp,
                    S = (null === (r = b.photo) || void 0 === r ? void 0 : r.url) || (null === (t = b.video) || void 0 === t ? void 0 : t.thumbnail),
                    D = (0, u.useMemo)(function() {
                        return {
                            data: {
                                user: b.user || {},
                                stories: [_object_spread_props(_object_spread({}, b), {
                                    isFollowed: !0
                                })]
                            }
                        }
                    }, [b]),
                    O = function() {
                        M(!1)
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: (0, o.Z)([l().discovery__story, _define_property({}, l()["discovery__story--with-bg"], !!b.video)]),
                        onClick: function() {
                            M(!0), null == x || x()
                        },
                        "data-from": "discovery",
                        children: [b.video ? (0, n.jsx)(h(), {
                            poster: I ? null === (i = b.video) || void 0 === i ? void 0 : i.thumbnail : void 0,
                            playsInline: !0,
                            className: l()["discovery__story-video"],
                            autoplay: !I,
                            loop: !0,
                            muted: !0,
                            src: (null === (a = b.videoUrls) || void 0 === a ? void 0 : a.HLS) || b.video.url,
                            controls: !1
                        }) : (0, n.jsx)(m(), {
                            className: l()["discovery__story-img"],
                            src: S,
                            withPlaceHolder: !0,
                            ratio: 1.7
                        }), b.seen >= 5 && (0, n.jsxs)("div", {
                            className: l()["discovery__story-seen"],
                            children: [(0, n.jsx)("i", {
                                className: "bi-eye-fill"
                            }), "".concat((0, c.roundBigNumber)(b.seen, 1e3)).replace(/^\+/, "")]
                        }), (0, n.jsx)("div", {
                            className: l()["discovery__story-icon"],
                            children: (0, n.jsx)(f(), {
                                name: "bi-story",
                                color: "var(--white)"
                            })
                        }), P && (0, n.jsxs)("div", {
                            className: l()["discovery__story-info"],
                            children: [(0, n.jsx)(v(), {
                                className: l()["discovery__story-info__avatar"],
                                src: null == b || null === (_ = b.user) || void 0 === _ || null === (s = _.avatar) || void 0 === s ? void 0 : s.small
                            }), (0, n.jsx)("p", {
                                className: l()["discovery__story-info__title"],
                                children: null == b || null === (y = b.user) || void 0 === y || null === (p = y.vendor) || void 0 === p ? void 0 : p.title
                            })]
                        })]
                    }), !!C && (k ? (0, n.jsx)(j, {
                        currentContentIdOnClicked: b.id,
                        onClose: O,
                        show: !0
                    }) : (0, n.jsx)(g, {
                        initialData: D,
                        storyId: b.id,
                        onClose: O
                    }))]
                })
            }
        },
        32888: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return f
                }
            });
            var n = t(32930),
                o = t(40877),
                i = t(34980),
                a = t(70968),
                s = t.n(a),
                l = t(45835),
                u = t(29723),
                c = t(81433),
                d = t.n(c),
                _ = t(1103),
                v = t.n(_),
                p = t(27434);

            function f(e) {
                var r = e.name,
                    t = e.video,
                    a = e.index,
                    c = e.onPlay,
                    _ = e.onPause,
                    f = e.metadata,
                    y = e.autoPlay,
                    m = void 0 !== y && y,
                    b = e.showInModal,
                    h = void 0 === b || b,
                    j = e.verticalModeVideo,
                    g = void 0 !== j && j,
                    x = (0, l.b)().ua,
                    w = _sliced_to_array((0, p.useState)(!1), 2),
                    k = w[0],
                    P = w[1],
                    N = _sliced_to_array((0, p.useState)(!1), 2),
                    C = N[0],
                    M = N[1],
                    I = _sliced_to_array((0, p.useState)(!1), 2),
                    S = I[0],
                    D = I[1],
                    O = (0, u.Kp)(["isIosApp"]).isIosApp,
                    Z = (0, p.useRef)(null),
                    q = (0, p.useMemo)(function() {
                        var e, r, n = t.thumbnail,
                            o = (null === (e = t.thumbnail) || void 0 === e ? void 0 : e.mobile) || n,
                            i = (null === (r = t.thumbnail) || void 0 === r ? void 0 : r.desktop) || n;
                        return x.isMobile ? o : i
                    }, [t, x]),
                    E = (0, p.useMemo)(function() {
                        var e, r, n = t.url,
                            o = (null === (e = t.url) || void 0 === e ? void 0 : e.mobile) || n,
                            i = (null === (r = t.url) || void 0 === r ? void 0 : r.desktop) || n;
                        return x.isMobile ? o : i
                    }, [t, x]),
                    R = function(e) {
                        e.preventDefault(), h && D(!0)
                    },
                    A = (0, p.useCallback)(function(e) {
                        x.isMobile && (e.stopPropagation(), M(function(e) {
                            return !e
                        }))
                    }, [C]);
                (0, p.useEffect)(function() {
                    var e;
                    m && (P(!0), null == Z || null === (e = Z.current) || void 0 === e || e.play())
                }, [m]);
                var K = (0, p.useMemo)(function() {
                    return (null == f ? void 0 : f.size) ? x.isMobile ? f.size.mobile.height / f.size.mobile.width : f.size.desktop.height / f.size.desktop.width : null
                }, [f, x]);
                return (0, n.jsxs)("div", {
                    className: s()["video-discovery"],
                    children: [(0, n.jsx)(v(), {
                        mounted: !k,
                        transition: "fade",
                        duration: 200,
                        children: function(e) {
                            return (0, n.jsx)("div", {
                                style: e,
                                children: (0, n.jsx)("img", {
                                    src: q,
                                    alt: " ",
                                    loading: "lazy",
                                    className: s()["video-discovery__image"],
                                    onClick: function(e) {
                                        return R(e)
                                    },
                                    "aria-hidden": "true"
                                })
                            })
                        }
                    }), (0, n.jsxs)("video", {
                        muted: m,
                        ref: Z,
                        onPause: function(e) {
                            return null == Z || null === (r = Z.current) || void 0 === r || r.pause(), P(!1), void(_ && _());
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
                            return R(e)
                        },
                        children: [(0, n.jsx)("track", {
                            kind: "captions",
                            src: null
                        }), (0, n.jsx)("source", {
                            src: E
                        })]
                    }), (0, n.jsx)("div", {
                        style: {
                            paddingBottom: "".concat(100 * K, "%")
                        }
                    }), !!t.description && !k && (0, n.jsx)("div", {
                        className: s()["video-discovery__content"],
                        onClick: function(e) {
                            return A(e)
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
                                }), !!x.isMobile && (0, n.jsx)("i", {
                                    className: (0, o.Z)("bi-angle-up", s()["video-discovery__content-texts-toggle"], {
                                        "video-discovery__content-texts-toggle--expanded": C
                                    })
                                })]
                            }), (0, n.jsx)("span", {
                                className: (0, o.Z)(s()["video-discovery__content-texts-subtitle"], {
                                    "video-discovery__content-texts-subtitle--expanded": C
                                }),
                                children: t.subtitle
                            })]
                        })
                    }), !k && (0, n.jsx)("button", {
                        className: s()["video-discovery__play"],
                        onClick: function(e) {
                            return R(e)
                        },
                        "aria-label": "پخش ویدیو",
                        children: (0, n.jsx)("i", {
                            className: (0, o.Z)("bi-play", s()["video-discovery__play-icon"])
                        })
                    }), S && (0, n.jsx)(i.Z, {
                        show: !0,
                        name: r,
                        index: a,
                        video: t,
                        close: function() {
                            return D(!1)
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
                    return m
                }
            });
            var n = t(32930),
                o = t(40877),
                i = t(27434),
                a = t(5164),
                s = t(87446),
                l = t.n(s),
                u = t(84581),
                c = t(65074),
                d = t.n(c),
                _ = t(92034),
                v = t.n(_),
                p = t(45835),
                f = t(29723),
                y = t(88107);

            function m(e) {
                var r = e.show,
                    t = e.video,
                    s = e.close,
                    c = e.name,
                    _ = e.index,
                    m = e.verticalModeVideo,
                    b = void 0 !== m && m,
                    h = (0, p.b)().ua,
                    j = (0, y.Z)(),
                    g = (0, f.Kp)(["isIosApp"]).isIosApp,
                    x = (0, i.useMemo)(function() {
                        var e, r, n = t.thumbnail,
                            o = (null === (e = t.thumbnail) || void 0 === e ? void 0 : e.mobile) || n,
                            i = (null === (r = t.thumbnail) || void 0 === r ? void 0 : r.desktop) || n;
                        return h.isMobile ? o : i
                    }, [t, h]),
                    w = (0, i.useMemo)(function() {
                        var e, r, n = t.url,
                            o = (null === (e = t.url) || void 0 === e ? void 0 : e.mobile) || n,
                            i = (null === (r = t.url) || void 0 === r ? void 0 : r.desktop) || n;
                        return h.isMobile ? o : i
                    }, [t, h]);
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
                                                return null == s || s(), (0, u.s)("homeClick", {
                                                    item: _,
                                                    componentName: c
                                                }), [4, (0, a.sleep)(350)];
                                            case 1:
                                                return e.sent(), j.push(t.link), [2]
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
                            poster: x,
                            className: (0, o.Z)(l()["video-modal__body-video"], _define_property({}, l()["video-modal__body-video--vertical-mode"], b)),
                            playsInline: !0,
                            autoPlay: !g,
                            children: [(0, n.jsx)("track", {
                                kind: "captions",
                                src: null
                            }), (0, n.jsx)("source", {
                                src: w
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
                l = t(84581),
                u = t(27434),
                c = t(93222),
                d = t.n(c),
                _ = t(45835),
                v = t(5164);
            r.default = (0, u.memo)(function(e) {
                var r = e.name,
                    t = e.videos,
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
                    b = f.isPc ? d() : "div",
                    h = f.isPc ? d().Item : "div";
                return (0, n.jsxs)("div", {
                    className: s()["video-slider-discovery"],
                    children: [!!(null == a ? void 0 : a.title) && (0, n.jsx)("div", {
                        className: s()["video-slider-discovery__header"],
                        children: a.title
                    }), (0, n.jsx)(b, {
                        navigation: !0,
                        plugins: y,
                        className: s()["video-slider-discovery__carousel"],
                        children: t.map(function(e, t) {
                            return (0, n.jsx)(h, {
                                className: (0, o.Z)(s()["video-slider-discovery__carousel-item"], _define_property({}, s()["video-slider-discovery__carousel-item--vertical"], p)),
                                onClick: function() {
                                    return m(t + 1)
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
        87694: function(e, r, t) {
            "use strict";
            t.d(r, {
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
                    return S
                },
                lj: function() {
                    return O
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
                    return g
                },
                Nm: function() {
                    return _
                },
                EY: function() {
                    return y
                },
                oE: function() {
                    return M
                },
                kZ: function() {
                    return N
                },
                $B: function() {
                    return C
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
                    return P
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
            var n = t(27434),
                o = t(67938),
                i = t(48228),
                a = t(59403),
                s = t(32066),
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
                    return (0, n.useCallback)(function(t, n) {
                        r.setQueryData([u, e], function(e) {
                            return function(e, r, t) {
                                return _object_spread_props(_object_spread({}, e), {
                                    stories: e.stories.map(function(e) {
                                        return e.id === r ? _object_spread({}, e, t) : e
                                    })
                                })
                            }(e, t, n)
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
                    return (0, n.useCallback)(function(t, n) {
                        r.setQueryData([d, e], function(e) {
                            return function(e, r, t) {
                                var n = e.openapiRawData.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        stories: e.stories.map(function(e) {
                                            return e.id === r ? _object_spread({}, e, t) : e
                                        })
                                    })
                                });
                                return _object_spread_props(_object_spread({}, e), {
                                    openapiRawData: n
                                })
                            }(e, t, n)
                        })
                    }, [e, r])
                },
                b = function(e) {
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
                h = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, a.N)(_object_spread({
                        queryKey: ["hashtag", e],
                        queryFn: function(r) {
                            var t = r.pageParam,
                                n = void 0 === t ? 0 : t;
                            return (0, s.yq)({
                                params: {
                                    hashtag: e,
                                    last_id: n
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
                        t = e && e.length >= 2;
                    return (0, o.aM)(_object_spread({
                        enabled: t,
                        queryKey: t ? ["autocomplete-hashtag", e] : null,
                        queryFn: function(r) {
                            var t = r.signal;
                            return (0, s.A1)(e, 5, {
                                signal: t
                            })
                        },
                        select: function(e) {
                            var r, t;
                            return null !== (t = null == e || null === (r = e.result) || void 0 === r ? void 0 : r.map(function(e) {
                                return e.title
                            })) && void 0 !== t ? t : []
                        }
                    }, r))
                },
                g = function(e) {
                    return (0, a.N)({
                        queryKey: ["story", l, e],
                        queryFn: function(r) {
                            var t = r.pageParam,
                                n = void 0 === t ? 0 : t;
                            return (0, s.wJ)({
                                identifier: e,
                                lastRank: n,
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
                    return (0, n.useCallback)(function(t, n) {
                        r.setQueryData(["story", l, e], function(e) {
                            return function(e, r, t) {
                                var n = e.pages.map(function(e) {
                                    var n = e.highlights.map(function(e) {
                                        var n = e.stories.map(function(e) {
                                            return e.id === r ? _object_spread({}, e, t) : e
                                        });
                                        return _object_spread_props(_object_spread({}, e), {
                                            stories: n
                                        })
                                    });
                                    return _object_spread_props(_object_spread({}, e), {
                                        highlights: n
                                    })
                                });
                                return _object_spread_props(_object_spread({}, e), {
                                    pages: n
                                })
                            }(e, t, n)
                        })
                    }, [e, r])
                },
                w = function(e) {
                    return (0, a.N)({
                        queryKey: [c],
                        queryFn: function(r) {
                            var t = r.pageParam,
                                n = void 0 === t ? [] : t;
                            return (0, s.tz)({
                                vendors: n,
                                count: e
                            })
                        },
                        getNextPageParam: function(e, r) {
                            var t, n;
                            if (0 !== (null == e || null === (t = e.openapiRawData) || void 0 === t ? void 0 : t.length)) {
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
                                                o.push(null == y || null === (n = y.user) || void 0 === n ? void 0 : n.id)
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
                    return (0, n.useCallback)(function(r, t) {
                        e.setQueryData([c], function(e) {
                            return function(e, r, t) {
                                var n = e.pages.map(function(e) {
                                    var n = e.openapiRawData.map(function(e) {
                                        var n = e.stories.map(function(e) {
                                            return e.id === r ? _object_spread({}, e, t) : e
                                        });
                                        return _object_spread_props(_object_spread({}, e), {
                                            stories: n
                                        })
                                    });
                                    return _object_spread_props(_object_spread({}, e), {
                                        openapiRawData: n
                                    })
                                });
                                return _object_spread_props(_object_spread({}, e), {
                                    pages: n
                                })
                            }(e, r, t)
                        })
                    }, [e])
                },
                P = function() {
                    var e = (0, o.NL)();
                    return (0, n.useCallback)(function(r, t) {
                        e.setQueryData(["mixed-page-discovery"], function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                pages: e.pages.map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        components: e.components.map(function(e) {
                                            var n;
                                            return "story" === (null == e ? void 0 : e.type) && (null == e || null === (n = e.story) || void 0 === n ? void 0 : n.id) === r ? _object_spread_props(_object_spread({}, e), {
                                                story: _object_spread({}, e.story, t)
                                            }) : "stories" === (null == e ? void 0 : e.type) ? _object_spread_props(_object_spread({}, e), {
                                                stories: e.stories.map(function(e) {
                                                    return (null == e ? void 0 : e.id) === r ? _object_spread({}, e, t) : e
                                                })
                                            }) : e
                                        })
                                    })
                                })
                            })
                        })
                    }, [e])
                },
                N = function() {
                    var e = (0, o.NL)();
                    return (0, n.useCallback)(function(r) {
                        e.setQueryData([c], function(e) {
                            return function(e, r) {
                                var t = e.pages.map(function(e) {
                                    var t = e.openapiRawData.filter(function(e) {
                                        return e.user.id !== r
                                    });
                                    return _object_spread_props(_object_spread({}, e), {
                                        openapiRawData: t
                                    })
                                });
                                return _object_spread_props(_object_spread({}, e), {
                                    pages: t
                                })
                            }(e, r)
                        })
                    }, [e])
                },
                C = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(s.N5, e)
                },
                M = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(s.kT, e)
                },
                I = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.D)(s.Vw, e)
                },
                S = function() {
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
        38251: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return le
                }
            });
            var n = t(12254),
                o = t.n(n),
                i = t(58271),
                a = t(5164),
                s = t(32930),
                l = t(2389),
                u = t.n(l),
                c = t(74123),
                d = t.n(c),
                _ = t(67938),
                v = t(88592),
                p = t(52233),
                f = t.n(p),
                y = t(27434),
                m = t(50874),
                b = t.n(m),
                h = t(2134),
                j = t.n(h),
                g = t(88107);

            function x(e) {
                var r = e.preloadImage,
                    t = (0, g.Z)(),
                    n = j()().publicRuntimeConfig,
                    o = "باسلام؛ بازار بی‌مرز",
                    i = (0, y.useMemo)(function() {
                        var e, r, n, o;
                        return null === (o = t.asPath) || void 0 === o || null === (n = o.split("?")) || void 0 === n || null === (r = n[0]) || void 0 === r || null === (e = r.split("#")) || void 0 === e ? void 0 : e[0]
                    }, [t.asPath]),
                    a = n.baseUrl + i,
                    l = "«باسلام» یک بازار بی‌مرز برای خرید و فروش است. در باسلام می‌توانید هر چیزی را که به دنبالش می‌گردید در میان دریای متنوعی از محصولات پیدا کنید.";
                return (0, s.jsxs)(f(), {
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
                preloadImage: b().string
            };
            var w = t(37314),
                k = t(26491),
                P = t(91740),
                N = t(39145),
                C = t.n(N),
                M = t(45835),
                I = t(81433),
                S = t.n(I),
                D = t(177),
                O = t.n(D),
                Z = t(70437),
                q = t.n(Z);
            t(73853), t(52655), t(75627), t(95399), t(46196);
            var E = t(18020);
            t(30162), t(58507), t(34980);
            var R = t(65817);

            function A() {
                return (0, s.jsxs)(S(), {
                    children: [(0, s.jsx)(S(), {
                        mb: 16,
                        children: (0, s.jsx)(O(), {
                            children: (0, s.jsx)(q(), {
                                width: 150,
                                height: 24,
                                waveColor: "var(--gray-200)",
                                backgroundColor: "var(--gray-100)"
                            })
                        })
                    }), (0, s.jsx)(R.Z, {}), (0, s.jsx)(S(), {
                        mt: 12,
                        children: (0, s.jsx)(R.Z, {})
                    }), (0, s.jsx)(S(), {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 40,
                        mb: 96,
                        children: (0, s.jsx)(q(), {
                            width: 125,
                            height: 48,
                            waveColor: "var(--gray-200)",
                            backgroundColor: "var(--gray-100)"
                        })
                    })]
                })
            }
            var K = t(3087),
                z = t(60802),
                L = t(83642),
                F = t(88158),
                T = t(56637),
                U = t(26460),
                B = t(69064),
                G = t(34198),
                Q = t.n(G),
                V = t(24311),
                H = t(1692),
                W = function(e, r) {
                    switch (e.ui) {
                        case "ads_slider":
                            return (0, s.jsx)(O(), {
                                children: (0, s.jsx)(U.aK, {})
                            }, "ads_slider");
                        case "horizontal_category":
                            return (0, s.jsx)(O(), {
                                children: (0, s.jsx)(T.Z, {})
                            }, "horizontal_category");
                        case "horizontal_product_popular":
                            var t, n, o, i, a, l;
                            return r ? (0, s.jsx)(O(), {
                                children: (0, s.jsx)(B.Z, {
                                    hasBackground: null === (i = e.metaData) || void 0 === i ? void 0 : i.hasBackground,
                                    hasLogo: null === (a = e.metaData) || void 0 === a ? void 0 : a.hasLogo,
                                    discountMode: null === (l = e.metaData) || void 0 === l ? void 0 : l.hasBackground,
                                    hasLabels: !0
                                })
                            }) : (0, s.jsx)(B.Z, {
                                hasBackground: null === (t = e.metaData) || void 0 === t ? void 0 : t.hasBackground,
                                hasLogo: null === (n = e.metaData) || void 0 === n ? void 0 : n.hasLogo,
                                discountMode: null === (o = e.metaData) || void 0 === o ? void 0 : o.hasBackground,
                                hasLabels: !0
                            });
                        case "horizontal_pgp_popular":
                            return (0, s.jsx)(H.Z, {});
                        case "horizontal_vendor_with_chat":
                            return r ? (0, s.jsx)(O(), {
                                children: (0, s.jsx)(U.Iu, {})
                            }) : (0, s.jsx)(U.Iu, {});
                        case "blog_post":
                            return (0, s.jsx)(U.yQ, {});
                        case "top_reels_review_slider":
                            return (0, s.jsx)(O(), {
                                children: (0, s.jsx)(V.Xp, {})
                            }, "top_reels_review_slider");
                        case "top_reels_business_slider":
                            return (0, s.jsx)(O(), {
                                children: (0, s.jsx)(V.Xp, {})
                            }, "top_reels_business_slider");
                        case "horizontal_video_list":
                            return (0, s.jsx)(U.$t, {});
                        case "vertical_video_list":
                            return (0, s.jsx)(U.ls, {});
                        default:
                            return null
                    }
                };

            function X(e) {
                var r = e.items,
                    t = void 0 === r ? [] : r,
                    n = (0, M.b)().ua.isPc;
                return (0, s.jsx)(S(), {
                    className: Q()["csr-components-skeleton"],
                    children: t.map(function(e) {
                        return (0, s.jsx)(y.Fragment, {
                            children: (0, s.jsx)(S(), {
                                className: "styles['csr-components-skeleton__".concat(e.ui, "']"),
                                children: W(e, n)
                            })
                        }, "".concat(e.name, "-").concat(e.ui))
                    })
                })
            }

            function Y(e) {
                var r = e.hasCoupon;
                return (0, s.jsxs)(S(), {
                    children: [(0, s.jsx)(S(), {
                        mb: 32,
                        children: (0, s.jsx)(U.kf, {})
                    }), (0, s.jsx)(S(), {
                        pr: 8,
                        pl: 8,
                        children: (0, s.jsx)(O(), {
                            children: (0, s.jsx)(T.Z, {})
                        })
                    }), r && (0, s.jsx)(S(), {
                        pt: 8,
                        pb: 24,
                        children: (0, s.jsxs)(O(), {
                            children: [(0, s.jsx)(S(), {
                                mb: 16,
                                children: (0, s.jsx)(q(), {
                                    height: 25,
                                    width: 150,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)"
                                })
                            }), (0, s.jsx)(F.Z, {})]
                        })
                    }), (0, s.jsx)(S(), {
                        children: (0, s.jsx)(O(), {
                            children: (0, s.jsx)(B.Z, {})
                        })
                    }), (0, s.jsx)(X, {})]
                })
            }
            var J = u()(function() {
                    return t.e(9666).then(t.bind(t, 99666))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [99666]
                        }
                    },
                    ssr: !1,
                    loading: A
                }),
                $ = u()(function() {
                    return Promise.resolve().then(t.bind(t, 94287))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [94287]
                        }
                    },
                    ssr: !0
                }),
                ee = u()(function() {
                    return t.e(6660).then(t.bind(t, 16660))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [16660]
                        }
                    },
                    ssr: !0
                }),
                re = u()(function() {
                    return Promise.all([t.e(9836), t.e(5807)]).then(t.bind(t, 49836))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [49836]
                        }
                    },
                    ssr: !0
                }),
                te = (0, k.Z)({
                    on: ["visible"]
                })(re),
                ne = (0, k.Z)({
                    on: ["visible"]
                })(J);

            function oe(e) {
                var r = e.enabled,
                    t = _sliced_to_array((0, y.useState)(!1), 2),
                    n = t[0],
                    o = t[1],
                    i = (0, y.useRef)(null);
                return (0, y.useEffect)(function() {
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
                    children: n ? (0, s.jsx)(J, {
                        enabled: r
                    }) : (0, s.jsx)(A, {})
                })
            }

            function ie(e) {
                var r, t, n, o, i = e.isServer,
                    a = (0, M.b)(),
                    l = a.ua,
                    u = a.isWebview,
                    c = (0, z.l)().getFeatureValue,
                    p = (0, v.M_)(["currentUser"]).currentUser,
                    f = _sliced_to_array((0, y.useState)(!0), 2),
                    m = f[0],
                    b = f[1],
                    h = (0, y.useRef)(),
                    j = (0, y.useMemo)(function() {
                        return c("home_page", {})
                    }, [c]),
                    g = j.explore,
                    k = void 0 === g || g,
                    N = j.discovery,
                    I = void 0 === N || N,
                    S = (0, _.NS)({
                        enabled: k,
                        queryKey: ["first-page-discovery"],
                        queryFn: function(e) {
                            var r = e.pageParam,
                                t = void 0 === r ? 0 : r;
                            return (0, K._I)({
                                userId: null == p ? void 0 : p.id,
                                config: {
                                    params: {
                                        size: 12,
                                        item_size: 12,
                                        lastRank: t,
                                        tab: "home_discovery"
                                    }
                                }
                            })
                        },
                        getNextPageParam: function(e, r) {
                            var t, n;
                            return ((null === (t = e.meta) || void 0 === t ? void 0 : t._hasPartialData) && e.items.length < 12 || 12 === e.items.length || 1 === r.length) && void 0 !== (null === (n = e.meta) || void 0 === n ? void 0 : n.lastRank) ? e.meta.lastRank : void 0
                        }
                    }),
                    D = S.data,
                    O = S.isError,
                    Z = S.isLoading,
                    q = S.refetch,
                    R = S.hasNextPage,
                    A = S.fetchNextPage,
                    F = S.isFetchingNextPage,
                    T = (null == D ? void 0 : D.pages.length) > 0 && !R && I,
                    U = (0, y.useMemo)(function() {
                        var e;
                        return null == D || null === (e = D.pages) || void 0 === e ? void 0 : e.reduce(function(e, r) {
                            return _to_consumable_array(e).concat(_to_consumable_array(r.items || []))
                        }, [])
                    }, [null == D ? void 0 : D.pages]),
                    B = (0, y.useMemo)(function() {
                        var e, r, t, n, o, i;
                        return "billboard_image" === (null == U || null === (e = U[0]) || void 0 === e ? void 0 : e.ui) ? null === (i = U[0].result) || void 0 === i || null === (o = i[0]) || void 0 === o || null === (n = o.metadata) || void 0 === n || null === (t = n.images) || void 0 === t || null === (r = t[0]) || void 0 === r ? void 0 : r[l.isPc ? "desktopUrl" : "url"] : null
                    }, [U, l.isPc]);
                (0, y.useEffect)(function() {
                    (!Z && !F && (null == U ? void 0 : U.length) > 3 || O) && b(!1)
                }, [Z, F, null == U ? void 0 : U.length, O]);
                var G = (0, y.useMemo)(function() {
                        return m && i
                    }, [m, i]),
                    Q = (0, y.useCallback)(function() {
                        Z || F || A()
                    }, [Z, F, A]),
                    V = null === (r = h.current) || void 0 === r ? void 0 : r.offsetHeight;
                return (0, s.jsxs)("div", {
                    className: d()["home-page"],
                    children: [(0, s.jsx)(x, {
                        preloadImage: B
                    }), l.isPc ? (0, s.jsx)($, {}) : (0, s.jsx)(w.default, {
                        isShowSearch: !0
                    }), !l.isPc && !u && (0, s.jsx)(ee, {
                        active: "HOME"
                    }), (0, s.jsx)(P.Z, {}), (0, s.jsxs)(C(), {
                        loadingComponent: null,
                        fetchMore: Q,
                        hasMore: !(F || O || Z || !R),
                        hasError: !(!R || !O),
                        threshold: i ? V : l.isPc ? 400 : 10,
                        children: [!!(null == U ? void 0 : U.length) && (0, s.jsx)(E.Z, {
                            isHiddenCsrComponentsSkeleton: !G,
                            isServer: i,
                            sections: U
                        }), !R && O && (0, s.jsx)(L.Z, {
                            fetch: q
                        }), Z && !i && (0, s.jsx)(Y, {
                            hasCoupon: !l.isPc
                        }), (0, s.jsx)("div", {
                            ref: h,
                            style: {
                                display: G ? "block" : "none"
                            },
                            children: (0, s.jsx)(X, {
                                items: (null == D || null === (o = D.pages) || void 0 === o || null === (n = o[0]) || void 0 === n || null === (t = n.meta) || void 0 === t ? void 0 : t._remainingItemsMetadata) || []
                            })
                        })]
                    }), i ? (0, s.jsx)(ne, {
                        enabled: T
                    }) : (0, s.jsx)(oe, {
                        enabled: T
                    }), !u && (0, s.jsx)(te, {})]
                })
            }
            var ae = t(94945),
                se = (0, a.isClientSide)();
            ie.getInitialProps = function(e) {
                return _async_to_generator(function() {
                    var r, t, n, a, s, l, u, c, d, _, v, p, f, y, m, b, h, j, g, x, w, k;
                    return _ts_generator(this, function(P) {
                        switch (P.label) {
                            case 0:
                                if (r = e.req, t = e.res, n = e.userId, a = e.userAgent, s = e.isWebview, l = e.queryClient, u = e.isCachedPage, !r) return [2, {}];
                                P.label = 1;
                            case 1:
                                return P.trys.push([1, 3, , 4]), y = o()(a), m = y.isMobile || s ? 2 : 3, [4, l.fetchInfiniteQuery(["first-page-discovery"], function() {
                                    return (0, K._I)({
                                        userId: n || 0,
                                        config: {
                                            req: r,
                                            res: t,
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
                                return b = P.sent(), !((null == b || null === (_ = b.pages) || void 0 === _ || null === (d = _[0]) || void 0 === d || null === (c = d.items) || void 0 === c ? void 0 : c.length) > 0) && t && (r.app.noCache = !0), (h = null == b || null === (v = b.pages) || void 0 === v ? void 0 : v[0]) && h.items.length > m && u && (j = h.items.slice(0, m).map(function(e) {
                                    return _object_spread_props(_object_spread({}, e), {
                                        fromCache: !0
                                    })
                                }), g = h.items.slice(m), l.setQueryData(["first-page-discovery"], _object_spread_props(_object_spread({}, b), {
                                    pages: [_object_spread_props(_object_spread({}, h), {
                                        items: j,
                                        meta: _object_spread_props(_object_spread({}, h.meta), {
                                            _hasPartialData: !0,
                                            lastRank: (null === (f = h.items) || void 0 === f || null === (p = f[m - 1]) || void 0 === p ? void 0 : p.rank) || 0,
                                            _remainingItemsMetadata: g.map(function(e) {
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
                                return x = P.sent(), w = (0, i.Pt)(x), k = 422 === (null == w ? void 0 : w.statusCode) ? 404 : w.statusCode || 500, [2, (!se && t && (t.statusCode = k), {
                                    error: {
                                        statusCode: k
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
            var le = (0, ae.Z)(ie)
        },
        45728: function(e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(38251)
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
        e.O(0, [973, 9922, 246, 8293, 5382, 8237, 8214, 4945, 7314, 2026, 4287, 4859, 9691, 8020, 1740, 3853, 9774, 2888, 179], function() {
            return e(e.s = 45728)
        }), _N_E = e.O()
    }
]);