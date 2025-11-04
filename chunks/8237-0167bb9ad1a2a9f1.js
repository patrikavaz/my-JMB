function _array_like_to_array(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function asyncGeneratorStep(e, t, r, n, o, i, a) {
    try {
        var s = e[i](a),
            u = s.value
    } catch (e) {
        return void r(e)
    }
    s.done ? t(u) : Promise.resolve(u).then(n, o)
}

function _async_to_generator(e) {
    return function() {
        var t = this,
            r = arguments;
        return new Promise(function(n, o) {
            var i = e.apply(t, r);

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

function _define_property(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function _iterable_to_array_limit(e, t) {
    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != r) {
        var n, o, i = [],
            a = !0,
            s = !1;
        try {
            for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
        } catch (e) {
            s = !0, o = e
        } finally {
            try {
                a || null == r.return || r.return()
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

function _object_spread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            _define_property(e, t, r[t])
        })
    }
    return e
}

function ownKeys(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function _object_spread_props(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
}

function _object_without_properties(e, t) {
    if (null == e) return {};
    var r, n, o = _object_without_properties_loose(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
    }
    return o
}

function _object_without_properties_loose(e, t) {
    if (null == e) return {};
    var r, n, o = {},
        i = Object.keys(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
    return o
}

function _sliced_to_array(e, t) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, t) || _unsupported_iterable_to_array(e, t) || _non_iterable_rest()
}

function _type_of(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}

function _unsupported_iterable_to_array(e, t) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _array_like_to_array(e, t) : void 0
    }
}

function _ts_generator(e, t) {
    var r, n, o, i = {
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
        return function(u) {
            return function(s) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a && (a = 0, s[0] && (i = 0)), i;) try {
                    if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
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
                    s = t.call(e, i)
                } catch (e) {
                    s = [6, e], n = 0
                } finally {
                    r = o = 0
                }
                if (5 & s[0]) throw s[1];
                return {
                    value: s[0] ? s[1] : void 0,
                    done: !0
                }
            }([s, u])
        }
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8237], {
        51889: function(e, t, r) {
            "use strict";
            var n = r(27434),
                o = r(50874),
                i = r(5164),
                a = {
                    children: o.func.isRequired,
                    value: o.oneOfType([o.string, o.number]).isRequired
                },
                s = function(e) {
                    var t = e.children,
                        r = e.value,
                        o = _sliced_to_array(n.useState(!1), 2),
                        a = o[0],
                        s = o[1];
                    return n.useEffect(function() {
                        var e;
                        return a && (e = setTimeout(function() {
                                return s(!1)
                            }, 2e3)),
                            function() {
                                clearTimeout(e)
                            }
                    }), t({
                        copy: function(e) {
                            i.copy("string" == typeof e ? e : null != r ? r : ""), s(!0)
                        },
                        copied: a
                    })
                };
            s.propTypes = a, s.displayName = "BsCopy", e.exports = s
        },
        40228: function(e, t, r) {
            "use strict";
            var n = r(32930),
                o = r(69389),
                i = r(50874),
                a = {
                    children: i.node,
                    className: i.string,
                    sm: i.oneOfType([i.number, i.object]),
                    xs: i.oneOfType([i.number, i.object]),
                    md: i.oneOfType([i.number, i.object]),
                    lg: i.oneOfType([i.number, i.object]),
                    xl: i.oneOfType([i.number, i.object]),
                    xx: i.oneOfType([i.number, i.object])
                },
                s = function(e) {
                    var t = e.className,
                        r = e.children,
                        i = e.xs,
                        a = e.sm,
                        s = e.md,
                        u = e.lg,
                        l = e.xl,
                        c = e.xx;
                    return n.jsx("div", {
                        className: o.clsx(t, function() {
                            var e = {
                                    xs: i,
                                    sm: a,
                                    md: s,
                                    lg: u,
                                    xl: l,
                                    xx: c
                                },
                                t = [];
                            for (var r in e) {
                                var n = e[r],
                                    o = "xs" === r ? "" : "-".concat(r),
                                    d = {};
                                "number" == typeof n ? d.size = Number(n) : "object" == (void 0 === n ? "undefined" : _type_of(n)) && (d = _object_spread({}, d, n)), 0 === d.size ? t.push("d-".concat(r, "-none")) : void 0 !== d.size && d.size > 0 && t.push("bs-col".concat(o, "-").concat(d.size)), d.order && t.push("bs-order".concat(o, "-").concat(d.order)), d.offset && t.push("bs-offset".concat(o, "-").concat(d.offset))
                            }
                            return t.length > 0 ? t : ["bs-col"]
                        }()),
                        children: r
                    })
                };
            s.propTypes = a, s.displayName = "BsCol";
            var u = {
                    noGutter: i.bool,
                    children: i.node,
                    className: i.string
                },
                l = function(e) {
                    var t = e.noGutter,
                        r = e.children,
                        i = e.className;
                    return n.jsx("div", {
                        className: o.clsx("bs-row", {
                            "bs-row--no-gutter": t
                        }, i),
                        children: r
                    })
                };
            l.propTypes = u, l.displayName = "BsGrid", l.Col = s, e.exports = l
        },
        77417: function(e, t, r) {
            "use strict";
            var n = r(32930),
                o = r(69389),
                i = r(36350),
                a = r(7095),
                s = r(99249),
                u = r(5164),
                l = r(27434),
                c = r(50874);
            r(11966);
            var d = function(e) {
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, u.sleep(10)];
                                case 1:
                                    return t.sent(), e(), [2]
                            }
                        })
                    })()
                },
                f = function(e) {
                    var t = e.show,
                        r = e.coords,
                        c = e.onClose,
                        f = e.children,
                        p = e.anchorEl,
                        b = e.className,
                        v = void 0 === b ? "" : b,
                        y = e.transition,
                        m = void 0 === y ? "fade" : y,
                        _ = e.getAwayThreshold,
                        h = void 0 === _ ? 100 : _,
                        g = e.animationDuration,
                        x = void 0 === g ? 250 : g,
                        w = e.position,
                        j = void 0 === w ? "bottom-right" : w,
                        O = l.useId(),
                        N = l.useRef({
                            uid: O
                        }),
                        T = l.useRef(null),
                        C = l.useRef(null),
                        k = _sliced_to_array(l.useState(!1), 2),
                        E = k[0],
                        S = k[1],
                        I = l.useCallback(function(e) {
                            var t, n;
                            if ("number" == typeof(null == r ? void 0 : r.top) && "number" == typeof(null == r ? void 0 : r.left) && c) {
                                var o = h + ((null === (t = C.current) || void 0 === t ? void 0 : t.clientHeight) || 0),
                                    i = h + ((null === (n = C.current) || void 0 === n ? void 0 : n.clientWidth) || 0),
                                    a = e.pageY - r.top,
                                    s = e.pageX - r.left;
                                (a > o || a < -1 * o) && c(), (s > i || s < -1 * i) && c()
                            }
                        }, [null == r ? void 0 : r.top, null == r ? void 0 : r.left, h, c]);
                    return i.useIsomorphicEffect(function() {
                        return t ? (u.popupManager.setIsOpen(N.current), d(function() {
                                "number" == typeof(null == r ? void 0 : r.top) && "number" == typeof(null == r ? void 0 : r.left) && document.addEventListener("mousemove", I), T.current && (T.current.style.zIndex = "".concat(u.popupManager.getNewZIndex()))
                            })) : u.popupManager.setIsClosed(N.current, x),
                            function() {
                                document.removeEventListener("mousemove", I), u.popupManager.setIsClosed(N.current, x)
                            }
                    }, [t]), l.useEffect(function() {
                        t ? d(function() {
                            return S(!0)
                        }) : S(!1)
                    }, [t]), l.useEffect(function() {
                        var e = function(e) {
                            var t;
                            "Escape" === e.key && (null === (t = u.popupManager.topElements[0]) || void 0 === t ? void 0 : t.uid) === O && (null == c || c())
                        };
                        document.addEventListener("keydown", e);
                        var t = N.current;
                        return function() {
                            document.removeEventListener("keydown", e), u.popupManager.setIsClosed(t, x)
                        }
                    }, []), n.jsx(a, {
                        children: n.jsx(s.BsTransition, {
                            keepMounted: !0,
                            mounted: E,
                            transition: m,
                            duration: x,
                            onEnter: function() {
                                var e = C.current;
                                if (r) {
                                    if ("number" == typeof(null == r ? void 0 : r.top) && "number" == typeof(null == r ? void 0 : r.left) && e) {
                                        var t = e.offsetWidth,
                                            n = e.offsetHeight;
                                        r.left - t < 0 ? e.style.right = window.innerWidth - r.left - t + "px" : e.style.left = r.left - t + "px", r.top + n > window.innerHeight ? e.style.bottom = window.innerHeight - r.top + "px" : e.style.top = "".concat(r.top, "px")
                                    }
                                } else {
                                    var o = null == p ? void 0 : p.getBoundingClientRect(),
                                        i = _sliced_to_array(j.split("-"), 2),
                                        a = i[0],
                                        s = i[1],
                                        u = (null == o ? void 0 : o.bottom) || 0,
                                        l = window.innerWidth - ((null == o ? void 0 : o.right) || 0),
                                        c = (null == o ? void 0 : o.x) || 0,
                                        d = (null == o ? void 0 : o.y) || 0;
                                    if (!(null == e ? void 0 : e.style)) return;
                                    var f = e.clientWidth,
                                        b = e.clientHeight;
                                    "right" === s && l + f < window.innerWidth || ((null == o ? void 0 : o.right) || 0) + f > window.innerWidth ? e.style.right = "".concat(l, "px") : e.style.left = "".concat(c, "px"), "bottom" === a && u + b < window.innerHeight || d < b ? e.style.top = "".concat(u, "px") : e.style.bottom = window.innerHeight - d + "px"
                                }
                            },
                            children: function(e) {
                                return n.jsxs("div", {
                                    className: o.clsx("bs-popover", {
                                        "bs-popover--visible": E
                                    }),
                                    ref: T,
                                    children: [n.jsx("div", {
                                        onClick: c,
                                        className: "bs-popover__wrapper"
                                    }), n.jsx("div", {
                                        style: e,
                                        ref: C,
                                        className: o.clsx(["bs-popover__content", _define_property({}, v, !!v)]),
                                        children: f
                                    })]
                                })
                            }
                        })
                    })
                },
                p = {
                    onClose: c.func,
                    children: c.node,
                    className: c.string,
                    transition: s.TransitionPropType,
                    show: c.bool.isRequired,
                    getAwayThreshold: c.number,
                    animationDuration: c.number,
                    position: c.oneOf(["top-left", "top-right", "bottom-left", "bottom-right"]),
                    anchorEl: c.oneOfType([c.element, c.object, c.func]),
                    coords: c.shape({
                        top: c.number.isRequired,
                        left: c.number.isRequired
                    })
                },
                b = function(e) {
                    var t = e.show,
                        r = e.keepMounted,
                        o = void 0 !== r && r,
                        i = e.onClose,
                        a = _object_without_properties(e, ["show", "keepMounted", "onClose"]),
                        s = _sliced_to_array(l.useState(!1), 2),
                        u = s[0],
                        c = s[1],
                        d = _sliced_to_array(l.useState(!1), 2),
                        p = d[0],
                        b = d[1],
                        v = l.useCallback(function() {
                            o || c(!1), b(!1), null == i || i()
                        }, [o, i]);
                    return l.useEffect(function() {
                        t !== p && (t ? (c(!0), b(!0)) : (b(!1), v()))
                    }, [t]), u ? n.jsx(f, _object_spread_props(_object_spread({}, a), {
                        show: p,
                        keepMounted: o,
                        onClose: v
                    })) : null
                };
            b.propTypes = p, b.displayName = "BsPopover", e.exports = b
        },
        34087: function(e, t, r) {
            "use strict";
            var n = r(32930),
                o = r(69389),
                i = r(36350),
                a = r(27434),
                s = r(50874),
                u = {
                    label: s.node,
                    name: s.string,
                    onBlur: s.func,
                    checked: s.bool,
                    disabled: s.bool,
                    onChange: s.func,
                    className: s.string,
                    defaultChecked: s.bool,
                    size: s.oneOf(["md", "lg"]),
                    value: s.oneOfType([s.string, s.number]).isRequired
                },
                l = {
                    onChange: s.func,
                    children: s.node,
                    value: s.oneOfType([s.string, s.number]).isRequired
                },
                c = a.createContext({
                    isInGroup: !1
                }),
                d = c.Provider,
                f = a.forwardRef(function(e, t) {
                    var r = e.value,
                        s = e.label,
                        u = e.onChange,
                        l = e.className,
                        d = e.size,
                        f = void 0 === d ? "md" : d,
                        p = e.defaultChecked,
                        b = e.checked,
                        v = e.disabled,
                        y = a.useId(),
                        m = i.useFallbackRef(t),
                        _ = a.useContext(c),
                        h = void 0 === b ? _.isInGroup && r ? _.value === r : void 0 : b;
                    return a.useEffect(function() {
                        p && void 0 === b && m.current && (m.current.checked = !0)
                    }, []), n.jsxs("label", {
                        htmlFor: y,
                        className: o.clsx("bs-radio", "bs-radio--".concat(f), "bs-radio--" + (v ? "disabled" : "enabled"), l),
                        children: [n.jsx("input", {
                            id: y,
                            ref: m,
                            type: "radio",
                            value: r,
                            disabled: v,
                            checked: h,
                            className: "bs-radio__input",
                            onChange: function(e) {
                                u && u(e), _.onChange && _.onChange("number" == typeof r ? Number(e.target.value) : e.target.value)
                            }
                        }), n.jsx("span", {
                            className: "bs-radio__el"
                        }), s]
                    })
                }),
                p = function(e) {
                    var t = e.children,
                        r = e.value,
                        o = e.onChange;
                    return n.jsx(d, {
                        value: {
                            isInGroup: !0,
                            value: r,
                            onChange: o
                        },
                        children: t
                    })
                };
            f.propTypes = u, f.displayName = "BsRadio", p.propTypes = l, p.displayName = "BsRadioGroup", f.Group = p, e.exports = f
        },
        21937: function(e, t, r) {
            "use strict";
            var n = r(32930),
                o = r(69389),
                i = r(36350),
                a = r(50874),
                s = a.oneOfType([a.string, a.number]),
                u = a.shape({
                    icon: a.string,
                    hasDot: a.bool,
                    count: a.number,
                    value: s.isRequired,
                    title: a.oneOfType([a.string, a.number, a.node]).isRequired
                }),
                l = {
                    value: s,
                    defaultValue: s,
                    onChange: a.func,
                    fullWidth: a.bool,
                    className: a.string,
                    tabs: a.arrayOf(u).isRequired,
                    color: a.oneOf(["primary", "success", "danger"])
                },
                c = function(e) {
                    var t = e.tabs,
                        r = e.value,
                        a = e.onChange,
                        s = e.className,
                        u = e.defaultValue,
                        l = e.fullWidth,
                        c = void 0 === l || l,
                        d = e.color,
                        f = void 0 === d ? "primary" : d,
                        p = _sliced_to_array(i.useUncontrolled({
                            value: r,
                            onChange: a,
                            defaultValue: u,
                            finalValue: t[0].value
                        }), 2),
                        b = p[0],
                        v = p[1];
                    return n.jsx("div", {
                        className: o.clsx(s, "bs-tabs", "bs-tabs--".concat(f), {
                            "bs-tabs--full-width": c
                        }),
                        children: n.jsx("div", {
                            className: "bs-tabs__container",
                            children: t.map(function(e) {
                                return n.jsxs("div", {
                                    role: "button",
                                    tabIndex: 0,
                                    className: o.clsx("bs-tabs__tab", {
                                        "bs-tabs__tab--has-dot": e.hasDot,
                                        "bs-tabs__tab--active": b === e.value
                                    }),
                                    onClick: function() {
                                        return v(e.value)
                                    },
                                    onKeyDown: function() {
                                        return v(e.value)
                                    },
                                    children: [!!e.icon && n.jsx("i", {
                                        className: o.clsx("bs-tabs__tab-icon", e.icon)
                                    }), n.jsx("span", {
                                        className: "bs-tabs__tab-title",
                                        children: e.title
                                    }), e.count && n.jsx("span", {
                                        className: "bs-tabs__tab-count",
                                        children: e.count
                                    }), !!e.hasDot && n.jsx("span", {
                                        className: "bs-tabs__tab-dot"
                                    })]
                                }, e.value)
                            })
                        })
                    })
                };
            c.propTypes = l, c.displayName = "BsTabs", e.exports = c
        },
        1103: function(e, t, r) {
            "use strict";
            r(32930);
            var n = r(99249);
            r(36350), r(27434), r(50874), e.exports = n.BsTransition
        },
        4260: function(e, t, r) {
            "use strict";
            var n = r(32930),
                o = r(69389),
                i = r(5164),
                a = r(36350),
                s = r(50874),
                u = r(99249),
                l = r(27434),
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
                f = l.forwardRef(function(e, t) {
                    var s = e.id,
                        c = e.src,
                        f = e.loop,
                        p = e.muted,
                        b = e.poster,
                        v = e.preload,
                        y = e.autoplay,
                        m = e.children,
                        _ = e.className,
                        h = e.playsInline,
                        g = e.controls,
                        x = void 0 === g || g,
                        w = e.observer,
                        j = void 0 !== w && w,
                        O = a.useFallbackRef(t),
                        N = l.useRef(),
                        T = _sliced_to_array(l.useState(!1), 2),
                        C = T[0],
                        k = T[1],
                        E = _sliced_to_array(l.useState(!1), 2),
                        S = E[0],
                        I = E[1];
                    l.useEffect(function() {
                        I(!1)
                    }, [c]);
                    var R = l.useMemo(function() {
                            return i.isClientSide() && "IntersectionObserver" in window ? new IntersectionObserver(function(e) {
                                var t;
                                e[0].isIntersecting || null === (t = O.current) || void 0 === t || t.pause()
                            }) : null
                        }, [O]),
                        P = l.useCallback(function() {
                            return _async_to_generator(function() {
                                var e, t;
                                return _ts_generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 3, , 4]), !(e = d) ? [4, r.e(6865).then(r.bind(r, 5120))] : [3, 2];
                                        case 1:
                                            e = n.sent().default, d || (d = e), n.label = 2;
                                        case 2:
                                            return e && e.isSupported() && O.current ? (N.current = new e({
                                                startLevel: 3
                                            }), N.current.loadSource(c), N.current.attachMedia(O.current)) : O.current && O.current.canPlayType("application/vnd.apple.mpegurl") && (O.current.src = c), [3, 4];
                                        case 3:
                                            return t = n.sent(), console.error(t), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })()
                        }, [c, O]),
                        G = l.useCallback(function() {
                            try {
                                O.current && (O.current.src = c)
                            } catch (e) {
                                console.error(e)
                            }
                        }, [c, O]),
                        B = l.useCallback(function() {
                            k(!0)
                        }, []),
                        M = l.useCallback(function() {
                            k(!1)
                        }, []),
                        L = l.useCallback(function() {
                            I(!0)
                        }, []);
                    return l.useEffect(function() {
                        var e = O.current;
                        return j && e && R && R.observe(e),
                            function() {
                                j && e && R && R.unobserve(e)
                            }
                    }, [j, R, O]), l.useEffect(function() {
                        return c.endsWith(".m3u8") ? P() : G(),
                            function() {
                                var e;
                                null === (e = N.current) || void 0 === e || e.destroy()
                            }
                    }, [c, P, G]), l.useEffect(function() {
                        O.current && (O.current.addEventListener("play", B), O.current.addEventListener("pause", M), O.current.addEventListener("ended", M), O.current.addEventListener("canplay", L));
                        var e = O.current;
                        return function() {
                            var t;
                            null === (t = N.current) || void 0 === t || t.destroy(), null == e || e.removeEventListener("play", B), null == e || e.removeEventListener("pause", M), null == e || e.removeEventListener("ended", M), null == e || e.removeEventListener("canplay", L)
                        }
                    }, [y, L, M, B, O]), n.jsxs("div", {
                        className: o.clsx("bs-video", _),
                        children: [n.jsxs("video", {
                            id: s,
                            loop: f,
                            muted: p,
                            ref: O,
                            poster: b,
                            preload: v,
                            controls: x,
                            autoPlay: y,
                            playsInline: h,
                            className: "bs-video__player",
                            children: [m, "مرورگر شما از ویدیو پشتیبانی نمی‌کند."]
                        }), n.jsx(u.BsTransition, {
                            mounted: !C && S,
                            transition: "fade",
                            duration: 400,
                            children: function(e) {
                                return n.jsx("button", {
                                    "aria-label": "play",
                                    className: "bs-video__play",
                                    style: e,
                                    onClick: function() {
                                        var e;
                                        return null === (e = O.current) || void 0 === e ? void 0 : e.play()
                                    },
                                    children: n.jsx("i", {
                                        className: "bi-play"
                                    })
                                })
                            }
                        })]
                    })
                });
            f.propTypes = c, f.displayName = "BsVideo", e.exports = f
        },
        55701: function(e, t, r) {
            "use strict";
            var n = r(32930),
                o = r(27434),
                i = r(35382),
                a = o.forwardRef(function(e, t) {
                    return n.jsx(i.Virtuoso, _object_spread({
                        ref: t
                    }, e))
                }),
                s = o.forwardRef(function(e, t) {
                    return n.jsx(i.GroupedVirtuoso, _object_spread({
                        ref: t
                    }, e))
                }),
                u = o.forwardRef(function(e, t) {
                    return n.jsx(i.TableVirtuoso, _object_spread({
                        ref: t
                    }, e))
                }),
                l = o.forwardRef(function(e, t) {
                    return n.jsx(i.VirtuosoGrid, _object_spread({
                        ref: t
                    }, e))
                });
            a.displayName = "BsVirtualScroll", s.displayName = "BsVirtualScrollGrouped", u.displayName = "BsVirtualScrollTable", l.displayName = "BsVirtualScrollGrid";
            var c = Object.assign(a, {
                Grid: l,
                Table: u,
                Grouped: s
            });
            e.exports = c
        },
        77642: function(e, t, r) {
            var n = r(26290),
                o = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, n(e) + 1).replace(o, "") : e
            }
        },
        26290: function(e) {
            var t = /\s/;
            e.exports = function(e) {
                for (var r = e.length; r-- && t.test(e.charAt(r)););
                return r
            }
        },
        39377: function(e, t, r) {
            var n = r(97598),
                o = r(8080),
                i = r(67951),
                a = Math.max,
                s = Math.min;
            e.exports = function(e, t, r) {
                var u, l, c, d, f, p, b = 0,
                    v = !1,
                    y = !1,
                    m = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function _(t) {
                    var r = u,
                        n = l;
                    return u = l = void 0, b = t, d = e.apply(n, r)
                }

                function h(e) {
                    var r = e - p;
                    return void 0 === p || r >= t || r < 0 || y && e - b >= c
                }

                function g() {
                    var e, r = o();
                    if (h(r)) return x(r);
                    f = setTimeout(g, (e = t - (r - p), y ? s(e, c - (r - b)) : e))
                }

                function x(e) {
                    return f = void 0, m && u ? _(e) : (u = l = void 0, d)
                }

                function w() {
                    var e, r = o(),
                        n = h(r);
                    if (u = arguments, l = this, p = r, n) {
                        if (void 0 === f) return b = e = p, f = setTimeout(g, t), v ? _(e) : d;
                        if (y) return clearTimeout(f), f = setTimeout(g, t), _(p)
                    }
                    return void 0 === f && (f = setTimeout(g, t)), d
                }
                return t = i(t) || 0, n(r) && (v = !!r.leading, c = (y = "maxWait" in r) ? a(i(r.maxWait) || 0, t) : c, m = "trailing" in r ? !!r.trailing : m), w.cancel = function() {
                    void 0 !== f && clearTimeout(f), b = 0, u = p = l = f = void 0
                }, w.flush = function() {
                    return void 0 === f ? d : x(o())
                }, w
            }
        },
        8080: function(e, t, r) {
            var n = r(8986);
            e.exports = function() {
                return n.Date.now()
            }
        },
        67951: function(e, t, r) {
            var n = r(77642),
                o = r(97598),
                i = r(34524),
                a = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                l = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return NaN;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = n(e);
                var r = s.test(e);
                return r || u.test(e) ? l(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
            }
        }
    }
]);