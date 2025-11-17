"use strict";

function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var a = 0, t = new Array(r); a < r; a++) t[a] = e[a];
    return t
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _iterable_to_array_limit(e, r) {
    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != a) {
        var t, n, l = [],
            o = !0,
            s = !1;
        try {
            for (a = a.call(e); !(o = (t = a.next()).done) && (l.push(t.value), !r || l.length !== r); o = !0);
        } catch (e) {
            s = !0, n = e
        } finally {
            try {
                o || null == a.return || a.return()
            } finally {
                if (s) throw n
            }
        }
        return l
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _sliced_to_array(e, r) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, r) || _unsupported_iterable_to_array(e, r) || _non_iterable_rest()
}

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(a) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _array_like_to_array(e, r) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8739], {
        2054: function(e, r, a) {
            var t = a(32930),
                n = a(69389),
                l = a(27434),
                o = a(36350),
                s = a(50874),
                i = {
                    show: s.bool,
                    header: s.node,
                    onChange: s.func,
                    disabled: s.bool,
                    children: s.node,
                    className: s.string,
                    maxHeight: s.number,
                    defaultValue: s.bool,
                    headerClass: s.string,
                    contentClass: s.string
                },
                c = function(e) {
                    var r = e.show,
                        a = e.header,
                        s = e.children,
                        i = e.disabled,
                        c = e.onChange,
                        _ = e.className,
                        u = e.headerClass,
                        d = e.contentClass,
                        h = e.defaultValue,
                        y = e.maxHeight,
                        b = void 0 === y ? 1e3 : y,
                        p = l.useRef(null),
                        f = _sliced_to_array(o.useUncontrolled({
                            onChange: c,
                            value: r,
                            defaultValue: h
                        }), 2),
                        m = f[0],
                        x = f[1],
                        g = function() {
                            i || x(!m)
                        };
                    return t.jsxs("div", {
                        className: n.clsx("bs-collapse", {
                            "bs-collapse--disabled": i
                        }, _),
                        children: [t.jsxs("div", {
                            role: "button",
                            tabIndex: 0,
                            onClick: g,
                            onKeyDown: g,
                            className: n.clsx("bs-collapse__header", u),
                            children: [t.jsx("div", {
                                children: a
                            }), t.jsx("i", {
                                className: n.clsx("bi-angle-down bs-collapse__icon", {
                                    rotated: m
                                })
                            })]
                        }), t.jsx("div", {
                            ref: p,
                            className: "bs-collapse__content-wrapper",
                            style: m ? {
                                maxHeight: "".concat(b, "px")
                            } : {
                                maxHeight: "0px",
                                transition: "max-height 0.5s ease-out"
                            },
                            children: t.jsx("div", {
                                className: n.clsx("bs-collapse__content", d),
                                children: s
                            })
                        })]
                    })
                };
            c.propTypes = i, c.displayName = "BsCollapse", e.exports = c
        }
    }
]);