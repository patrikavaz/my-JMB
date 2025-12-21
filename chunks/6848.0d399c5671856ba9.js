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
        var n, o, a = [],
            i = !0,
            u = !1;
        try {
            for (t = t.call(e); !(i = (n = t.next()).done) && (a.push(n.value), !r || a.length !== r); i = !0);
        } catch (e) {
            u = !0, o = e
        } finally {
            try {
                i || null == t.return || t.return()
            } finally {
                if (u) throw o
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
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6848], {
        16848: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return M
                }
            });
            var n = t(32930),
                o = t(40877),
                a = t(2347),
                i = t(51446),
                u = t.n(i),
                s = t(87540),
                l = t(60214),
                c = t(27434),
                _ = t(85185),
                d = t(45835),
                f = t(88107),
                m = t(177),
                b = t.n(m),
                y = t(76303),
                h = t.n(y),
                p = t(53278),
                v = t.n(p),
                g = t(5164),
                w = t(60802),
                T = {
                    hint: {
                        color: "blue",
                        icon: "bi-lamp-shine-fill"
                    },
                    neutral: {
                        color: "primary",
                        icon: "bi-info-fill"
                    },
                    warning: {
                        color: "warning",
                        icon: "bi-warning-fill"
                    },
                    error: {
                        color: "danger",
                        icon: "bi-close-circle-fill"
                    }
                };

            function M() {
                var e, r, t, i = (0, d.b)().ua,
                    m = (0, f.Z)(),
                    y = _sliced_to_array((0, c.useState)(!1), 2),
                    p = y[0],
                    M = y[1],
                    k = _sliced_to_array((0, c.useState)(!0), 2),
                    x = k[0],
                    N = k[1],
                    S = _sliced_to_array((0, c.useState)(!1), 2),
                    j = S[0],
                    C = S[1],
                    D = function() {
                        var e = (0, w.l)().getFeatureValue,
                            r = (0, c.useMemo)(function() {
                                return (0, g.camelize)(e("sticky_banner"))
                            }, [e]),
                            t = (0, c.useMemo)(function() {
                                return (0, g.camelize)(e("urgent_sticky_note"))
                            }, [e]),
                            n = (0, c.useMemo)(function() {
                                if (!(null == r ? void 0 : r.endTime) || !(null == r ? void 0 : r.startTime)) return !1;
                                var e = (0, g.gregoryDate)().isBefore((0, g.gregoryDate)(r.endTime));
                                return (0, g.gregoryDate)().isAfter((0, g.gregoryDate)(r.startTime)) && e
                            }, [null == r ? void 0 : r.startTime, null == r ? void 0 : r.endTime]),
                            o = (null == r ? void 0 : r.show) && n;
                        return {
                            banner: r,
                            isShowBanner: o,
                            urgentBanner: t
                        }
                    }(),
                    L = D.banner,
                    A = D.isShowBanner,
                    E = D.urgentBanner,
                    I = (null == L ? void 0 : L.moreLink) ? a.Z : "div",
                    R = null == E || null === (e = E.variant) || void 0 === e ? void 0 : e.toLowerCase();
                (0, c.useEffect)(function() {
                    M(!0), A ? ((0, l.addClass)(document.body, "wb"), document.documentElement.style.setProperty("--top-banner-height", i.isMobile ? "48px" : "56px")) : document.documentElement.style.setProperty("--top-banner-height", "0px")
                }, [A, i.isMobile]);
                var Z = (0, c.useMemo)(function() {
                    return _.X.has(m.pathname)
                }, [m.pathname]);
                return (null == E ? void 0 : E.show) && !Z ? (0, n.jsx)("div", {
                    id: "urgent-sticky-note",
                    className: (0, o.Z)(u()["urgent-banner"], u()["urgent-banner--".concat(R)], _define_property({}, u()["urgent-banner--hidden"], j)),
                    children: (0, n.jsxs)(b(), {
                        fluid: i.isMobile,
                        className: u()["urgent-banner__text"],
                        children: [(0, n.jsx)(h(), {
                            className: u()["urgent-banner__icon"],
                            name: null === (r = T[R]) || void 0 === r ? void 0 : r.icon,
                            color: "var(--".concat(null === (t = T[R]) || void 0 === t ? void 0 : t.color, ")")
                        }), null == E ? void 0 : E.text, (0, n.jsx)("div", {
                            className: u()["urgent-banner__close"],
                            onClick: function() {
                                C(!0)
                            },
                            children: (0, n.jsx)(h(), {
                                name: "bi-close",
                                size: i.isMobile ? "16" : "24"
                            })
                        })]
                    })
                }) : A && !Z ? (0, n.jsxs)(I, {
                    id: "top-banner",
                    target: "_blank",
                    href: L.moreLink,
                    rel: "noopener noreferrer",
                    className: u()["top-banner"],
                    children: [(0, n.jsx)(v(), {
                        alt: "top banner",
                        className: u()["top-banner__image"],
                        src: i.isPc ? L.image.desktop : L.image.mobile,
                        ratio: i.isMobile ? .095 : .03
                    }), p && x && L.endTime && (i.isPc || i.isMobile && L.showTimerInMobile ? (0, n.jsx)("section", {
                        className: u()["top-banner__countdown-box"],
                        children: (0, n.jsx)(s.Z, {
                            showDays: !0,
                            showHours: !0,
                            onTimesUp: function() {
                                return N(!1)
                            },
                            endTime: L.endTime,
                            itemClass: u()["top-banner__countdown-item"],
                            className: u()["top-banner__countdown"]
                        })
                    }) : null)]
                }) : null
            }
        },
        87540: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return m
                }
            });
            var n = t(32930),
                o = t(40877),
                a = t(50874),
                i = t.n(a),
                u = t(48531),
                s = t.n(u),
                l = t(5164),
                c = t(36350),
                _ = t(27434),
                d = function(e) {
                    var r = e % 60,
                        t = Math.floor(e / 86400),
                        n = Math.floor(e % 86400 / 3600),
                        o = Math.floor(e % 3600 / 60);
                    return {
                        days: t,
                        total: e,
                        hours: n,
                        seconds: r,
                        minutes: o,
                        formattedDays: "0".concat(t).slice(-2),
                        formattedHours: "0".concat(n).slice(-2),
                        formattedSeconds: "0".concat(r).slice(-2),
                        formattedMinutes: "0".concat(o).slice(-2)
                    }
                };

            function f(e) {
                var r = e.endTime,
                    t = e.onTimesUp,
                    a = e.className,
                    i = e.itemClass,
                    u = e.showDays,
                    f = void 0 !== u && u,
                    m = e.showColon,
                    b = void 0 === m || m,
                    y = e.showHours,
                    h = void 0 !== y && y,
                    p = (0, _.useRef)(),
                    v = _sliced_to_array((0, _.useState)(!1), 2),
                    g = v[0],
                    w = v[1],
                    T = (0, _.useMemo)(function() {
                        return (0, l.gregoryDate)()
                    }, []),
                    M = (0, _.useMemo)(function() {
                        return (0, l.gregoryDate)(r)
                    }, [r]),
                    k = (0, c.useIntersectionObserver)(),
                    x = k.isInViewport,
                    N = k.observe,
                    S = k.unobserve,
                    j = function(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = r.onTimesUp,
                            n = r.startOnMount,
                            o = void 0 === n || n,
                            a = r.shouldRender,
                            i = void 0 === a || a,
                            u = (0, _.useRef)(null),
                            s = (0, _.useRef)(e),
                            l = (0, _.useRef)(i),
                            c = _sliced_to_array((0, _.useState)(d(e)), 2),
                            f = c[0],
                            m = c[1],
                            b = (0, _.useCallback)(function() {
                                m(d(s.current))
                            }, []),
                            y = (0, _.useCallback)(function() {
                                s.current > 0 ? (s.current -= 1, l.current && m(d(s.current)), u.current = setTimeout(y, 1e3)) : 0 === s.current && (null == t || t())
                            }, [t]),
                            h = (0, _.useCallback)(function() {
                                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
                                clearTimeout(u.current), s.current = r, l.current && b(), u.current = setTimeout(y, 1e3)
                            }, [e, y, b]),
                            p = (0, _.useCallback)(function() {
                                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e;
                                clearTimeout(u.current), s.current = r, l.current && b(), h(r)
                            }, [e, h, b]);
                        return (0, _.useEffect)(function() {
                            var e = l.current;
                            l.current = i, !e && i && b()
                        }, [i, b]), (0, _.useEffect)(function() {
                            return o && h(e),
                                function() {
                                    return clearTimeout(u.current)
                                }
                        }, []), {
                            start: h,
                            reset: p,
                            timeLeft: f
                        }
                    }(M.diff(T, "s"), {
                        onTimesUp: t,
                        shouldRender: x
                    }),
                    C = (0, _.useMemo)(function() {
                        return g ? _to_consumable_array(f ? [j.timeLeft.formattedDays] : []).concat(_to_consumable_array(h ? [Number(j.timeLeft.formattedHours) + Number(f ? 0 : 24 * j.timeLeft.formattedDays)] : []), [j.timeLeft.formattedMinutes, j.timeLeft.formattedSeconds]) : []
                    }, [g, f, h, j.timeLeft.formattedDays, j.timeLeft.formattedHours, j.timeLeft.formattedMinutes, j.timeLeft.formattedSeconds]);
                return (0, _.useEffect)(function() {
                    w(!0);
                    var e = p.current;
                    return N(e),
                        function() {
                            S(e)
                        }
                }, []), (0, n.jsx)("div", {
                    ref: p,
                    className: (0, o.Z)([a, s().countdown, _define_property({}, s().colon, b)]),
                    children: C.map(function(e, r) {
                        return (0, n.jsx)("div", {
                            className: (0, o.Z)([s().countdown__item, i]),
                            children: e
                        }, r)
                    })
                })
            }
            f.propTypes = {
                showDays: i().bool,
                showColon: i().bool,
                onTimesUp: i().func,
                showHours: i().bool,
                className: i().string,
                endTime: i().string.isRequired
            };
            var m = f
        },
        48531: function(e) {
            e.exports = {
                countdown: "NtsFIb",
                countdown__item: "DoVINr",
                colon: "Cw_11G"
            }
        }
    }
]);