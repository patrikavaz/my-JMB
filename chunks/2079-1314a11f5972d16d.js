"use strict";

function _array_like_to_array(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function asyncGeneratorStep(e, t, r, n, i, a, u) {
    try {
        var s = e[a](u),
            o = s.value
    } catch (e) {
        return void r(e)
    }
    s.done ? t(o) : Promise.resolve(o).then(n, i)
}

function _async_to_generator(e) {
    return function() {
        var t = this,
            r = arguments;
        return new Promise(function(n, i) {
            var a = e.apply(t, r);

            function u(e) {
                asyncGeneratorStep(a, n, i, u, s, "next", e)
            }

            function s(e) {
                asyncGeneratorStep(a, n, i, u, s, "throw", e)
            }
            u(void 0)
        })
    }
}

function _class_call_check(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _create_class(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
}

function _define_property(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function _iterable_to_array(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _iterable_to_array_limit(e, t) {
    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != r) {
        var n, i, a = [],
            u = !0,
            s = !1;
        try {
            for (r = r.call(e); !(u = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); u = !0);
        } catch (e) {
            s = !0, i = e
        } finally {
            try {
                u || null == r.return || r.return()
            } finally {
                if (s) throw i
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
    var r, n, i = _object_without_properties_loose(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
}

function _object_without_properties_loose(e, t) {
    if (null == e) return {};
    var r, n, i = {},
        a = Object.keys(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
    return i
}

function _sliced_to_array(e, t) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, t) || _unsupported_iterable_to_array(e, t) || _non_iterable_rest()
}

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
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
    var r, n, i, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        },
        u = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return u.next = s(0), u.throw = s(1), u.return = s(2), "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }), u;

    function s(s) {
        return function(o) {
            return function(s) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; u && (u = 0, s[0] && (a = 0)), a;) try {
                    if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                    switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                        case 0:
                        case 1:
                            i = s;
                            break;
                        case 4:
                            return a.label++, {
                                value: s[1],
                                done: !1
                            };
                        case 5:
                            a.label++, n = s[1], s = [0];
                            continue;
                        case 7:
                            s = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                a.label = s[1];
                                break
                            }
                            if (6 === s[0] && a.label < i[1]) {
                                a.label = i[1], i = s;
                                break
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2], a.ops.push(s);
                                break
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    s = t.call(e, a)
                } catch (e) {
                    s = [6, e], n = 0
                } finally {
                    r = i = 0
                }
                if (5 & s[0]) throw s[1];
                return {
                    value: s[0] ? s[1] : void 0,
                    done: !0
                }
            }([s, o])
        }
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2079], {
        86695: function(e, t, r) {
            r.d(t, {
                G: function() {
                    return me
                }
            });
            var n, i, a = /^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/,
                u = {
                    revert: function() {}
                },
                s = new Map,
                o = new Set;

            function c(e) {
                var t = s.get(e);
                return t || (t = {
                    element: e,
                    attributes: {}
                }, s.set(e, t)), t
            }

            function l(e, t, r, n, i) {
                var a = r(e),
                    u = {
                        isDirty: !1,
                        originalValue: a,
                        virtualValue: a,
                        mutations: [],
                        el: e,
                        observer: new MutationObserver(function() {
                            var t = r(e);
                            t !== u.virtualValue && (u.originalValue = t, i(u))
                        }),
                        mutationRunner: i,
                        setValue: n,
                        getCurrentValue: r
                    };
                return u.observer.observe(e, "html" === t ? {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    characterData: !0
                } : {
                    childList: !1,
                    subtree: !1,
                    attributes: !0,
                    attributeFilter: [t]
                }), u
            }

            function f(e, t) {
                var r = t.getCurrentValue(t.el);
                t.virtualValue = e, e && "string" != typeof e ? r && e.parentNode === r.parentNode && e.insertBeforeNode === r.insertBeforeNode || (t.isDirty = !0, V()) : e !== r && (t.isDirty = !0, V())
            }

            function h(e) {
                var t, r = e.originalValue;
                e.mutations.forEach(function(e) {
                    return r = e.mutate(r)
                }), f((t = r, n || (n = document.createElement("div")), n.innerHTML = t, n.innerHTML), e)
            }

            function _(e) {
                var t = new Set(e.originalValue.split(/\s+/).filter(Boolean));
                e.mutations.forEach(function(e) {
                    return e.mutate(t)
                }), f(Array.from(t).filter(Boolean).join(" "), e)
            }

            function p(e) {
                var t = e.originalValue;
                e.mutations.forEach(function(e) {
                    return t = e.mutate(t)
                }), f(t, e)
            }

            function d(e) {
                var t = e.originalValue;
                e.mutations.forEach(function(e) {
                    t = function(e) {
                        var t = e.parentSelector,
                            r = e.insertBeforeSelector,
                            n = document.querySelector(t);
                        if (!n) return null;
                        var i = r ? document.querySelector(r) : null;
                        return r && !i ? null : {
                            parentNode: n,
                            insertBeforeNode: i
                        }
                    }(e.mutate()) || t
                }), f(t, e)
            }
            var v = function(e) {
                    return e.innerHTML
                },
                y = function(e, t) {
                    return e.innerHTML = t
                };

            function b(e) {
                var t = c(e);
                return t.html || (t.html = l(e, "html", v, y, h)), t.html
            }
            var m = function(e) {
                    return {
                        parentNode: e.parentElement,
                        insertBeforeNode: e.nextElementSibling
                    }
                },
                g = function(e, t) {
                    t.parentNode.insertBefore(e, t.insertBeforeNode)
                };

            function x(e) {
                var t = c(e);
                return t.position || (t.position = l(e, "position", m, g, d)), t.position
            }
            var w = function(e, t) {
                    return t ? e.className = t : e.removeAttribute("class")
                },
                k = function(e) {
                    return e.className
                };

            function A(e) {
                var t = c(e);
                return t.classes || (t.classes = l(e, "class", k, w, _)), t.classes
            }

            function E(e, t) {
                var r = c(e);
                return r.attributes[t] || (r.attributes[t] = l(e, t, function(e) {
                    var r;
                    return null != (r = e.getAttribute(t)) ? r : null
                }, function(e, r) {
                    return null !== r ? e.setAttribute(t, r) : e.removeAttribute(t)
                }, p)), r.attributes[t]
            }

            function S(e, t, r) {
                if (r.isDirty) {
                    r.isDirty = !1;
                    var n, i, a, u, o, c, l, f, h, _, p = r.virtualValue;
                    !r.mutations.length && (_ = s.get(e)) && ("html" === t ? (null == (n = _.html) || null == (i = n.observer) || i.disconnect(), delete _.html) : "class" === t ? (null == (a = _.classes) || null == (u = a.observer) || u.disconnect(), delete _.classes) : "position" === t ? (null == (o = _.position) || null == (c = o.observer) || c.disconnect(), delete _.position) : (null == (l = _.attributes) || null == (f = l[t]) || null == (h = f.observer) || h.disconnect(), delete _.attributes[t])), r.setValue(e, p)
                }
            }
            var O = !1;

            function j(e, t) {
                e.html && S(t, "html", e.html), e.classes && S(t, "class", e.classes), e.position && S(t, "position", e.position), Object.keys(e.attributes).forEach(function(r) {
                    S(t, r, e.attributes[r])
                })
            }

            function F() {
                O = !1, s.forEach(j)
            }

            function V() {
                O || (O = !0, requestAnimationFrame(F))
            }

            function $(e, t) {
                var r = null;
                if ("html" === e.kind ? r = b(t) : "class" === e.kind ? r = A(t) : "attribute" === e.kind ? r = E(t, e.attribute) : "position" === e.kind && (r = x(t)), r) {
                    var n = r.mutations.indexOf(e); - 1 !== n && r.mutations.splice(n, 1), r.mutationRunner(r)
                }
            }

            function R(e) {
                var t = new Set(e.elements),
                    r = new Set;
                document.querySelectorAll(e.selector).forEach(function(n) {
                    var i;
                    (r.add(n), t.has(n)) || (e.elements.add(n), i = null, "html" === e.kind ? i = b(n) : "class" === e.kind ? i = A(n) : "attribute" === e.kind ? i = E(n, e.attribute) : "position" === e.kind && (i = x(n)), i && (i.mutations.push(e), i.mutationRunner(i)))
                }), t.forEach(function(t) {
                    r.has(t) || (e.elements.delete(t), $(e, t))
                })
            }

            function T() {
                o.forEach(R)
            }

            function C(e) {
                return "undefined" == typeof document ? u : (o.add(e), R(e), {
                    revert: function() {
                        e.elements.forEach(function(t) {
                            return $(e, t)
                        }), e.elements.clear(), o.delete(e)
                    }
                })
            }

            function M(e, t) {
                return C({
                    kind: "html",
                    elements: new Set,
                    mutate: t,
                    selector: e
                })
            }

            function N(e, t) {
                return C({
                    kind: "position",
                    elements: new Set,
                    mutate: t,
                    selector: e
                })
            }

            function I(e, t) {
                return C({
                    kind: "class",
                    elements: new Set,
                    mutate: t,
                    selector: e
                })
            }

            function P(e, t, r) {
                return a.test(t) ? "class" === t || "className" === t ? I(e, function(e) {
                    var t = r(Array.from(e).join(" "));
                    e.clear(), t && t.split(/\s+/g).filter(Boolean).forEach(function(t) {
                        return e.add(t)
                    })
                }) : C({
                    kind: "attribute",
                    attribute: t,
                    elements: new Set,
                    mutate: r,
                    selector: e
                }) : u
            }
            "undefined" != typeof document && (i || (i = new MutationObserver(function() {
                T()
            })), T(), i.observe(document.documentElement, {
                childList: !0,
                subtree: !0,
                attributes: !1,
                characterData: !1
            }));
            var D = function(e) {
                var t = e.selector,
                    r = e.action,
                    n = e.value,
                    i = e.attribute,
                    a = e.parentSelector,
                    s = e.insertBeforeSelector;
                if ("html" === i) {
                    if ("append" === r) return M(t, function(e) {
                        return e + (null != n ? n : "")
                    });
                    if ("set" === r) return M(t, function() {
                        return null != n ? n : ""
                    })
                } else if ("class" === i) {
                    if ("append" === r) return I(t, function(e) {
                        n && e.add(n)
                    });
                    if ("remove" === r) return I(t, function(e) {
                        n && e.delete(n)
                    });
                    if ("set" === r) return I(t, function(e) {
                        e.clear(), n && e.add(n)
                    })
                } else if ("position" === i) {
                    if ("set" === r && a) return N(t, function() {
                        return {
                            insertBeforeSelector: s,
                            parentSelector: a
                        }
                    })
                } else {
                    if ("append" === r) return P(t, i, function(e) {
                        return null !== e ? e + (null != n ? n : "") : null != n ? n : ""
                    });
                    if ("set" === r) return P(t, i, function() {
                        return null != n ? n : ""
                    });
                    if ("remove" === r) return P(t, i, function() {
                        return null
                    })
                }
                return u
            };

            function U(e) {
                for (var t = 2166136261, r = e.length, n = 0; n < r; n++) t ^= e.charCodeAt(n), t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
                return t >>> 0
            }

            function B(e, t, r) {
                return 2 === r ? U(U(e + t) + "") % 1e4 / 1e4 : 1 === r ? U(t + e) % 1e3 / 1e3 : null
            }

            function H(e, t) {
                return e >= t[0] && e < t[1]
            }

            function L(e) {
                try {
                    var t = e.replace(/([^\\])\//g, "$1\\/");
                    return new RegExp(t)
                } catch (e) {
                    return void console.error(e)
                }
            }
            var K = function(e) {
                return Uint8Array.from(atob(e), function(e) {
                    return e.charCodeAt(0)
                })
            };

            function J(e, t, r) {
                return _async_to_generator(function() {
                    var n, i, a, u, s;
                    return _ts_generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (t = t || "", !(r = r || globalThis.crypto && globalThis.crypto.subtle)) throw Error("No SubtleCrypto implementation found");
                                o.label = 1;
                            case 1:
                                return o.trys.push([1, 4, , 5]), [4, r.importKey("raw", K(t), {
                                    name: "AES-CBC",
                                    length: 128
                                }, !0, ["encrypt", "decrypt"])];
                            case 2:
                                return n = o.sent(), i = _sliced_to_array(e.split("."), 2), a = i[0], u = i[1], [4, r.decrypt({
                                    name: "AES-CBC",
                                    iv: K(a)
                                }, n, K(u))];
                            case 3:
                                return s = o.sent(), [2, (new TextDecoder).decode(s)];
                            case 4:
                                throw o.sent(), Error("Failed to decrypt");
                            case 5:
                                return [2]
                        }
                    })
                })()
            }

            function q(e) {
                var t = e.replace(/(^v|\+.*$)/g, "").split(/[-.]/);
                return 3 === t.length && t.push("~"), t.map(function(e) {
                    return e.match(/^[0-9]+$/) ? e.padStart(5, " ") : e
                }).join("-")
            }
            var G = {};

            function Q(e, t) {
                if ("$or" in t) return W(e, t.$or);
                if ("$nor" in t) return !W(e, t.$nor);
                if ("$and" in t) return function(e, t) {
                    for (var r = 0; r < t.length; r++)
                        if (!Q(e, t[r])) return !1;
                    return !0
                }(e, t.$and);
                if ("$not" in t) return !Q(e, t.$not);
                var r = !0,
                    n = !1,
                    i = void 0;
                try {
                    for (var a, u = Object.entries(t)[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                        var s = _sliced_to_array(a.value, 2),
                            o = s[0];
                        if (! function e(t, r) {
                                if ("string" == typeof t) return r + "" === t;
                                if ("number" == typeof t) return 1 * r === t;
                                if ("boolean" == typeof t) return !!r === t;
                                if (null === t) return null === r;
                                if (Array.isArray(t) || !z(t)) return JSON.stringify(r) === JSON.stringify(t);
                                for (var n in t)
                                    if (! function(t, r, n) {
                                            switch (t) {
                                                case "$veq":
                                                    return q(r) === q(n);
                                                case "$vne":
                                                    return q(r) !== q(n);
                                                case "$vgt":
                                                    return q(r) > q(n);
                                                case "$vgte":
                                                    return q(r) >= q(n);
                                                case "$vlt":
                                                    return q(r) < q(n);
                                                case "$vlte":
                                                    return q(r) <= q(n);
                                                case "$eq":
                                                    return r === n;
                                                case "$ne":
                                                    return r !== n;
                                                case "$lt":
                                                    return r < n;
                                                case "$lte":
                                                    return r <= n;
                                                case "$gt":
                                                    return r > n;
                                                case "$gte":
                                                    return r >= n;
                                                case "$exists":
                                                    return n ? null !== r : null === r;
                                                case "$in":
                                                    return !!Array.isArray(n) && Z(r, n);
                                                case "$nin":
                                                    return !!Array.isArray(n) && !Z(r, n);
                                                case "$not":
                                                    return !e(n, r);
                                                case "$size":
                                                    return !!Array.isArray(r) && e(n, r.length);
                                                case "$elemMatch":
                                                    return function(t, r) {
                                                        if (!Array.isArray(t)) return !1;
                                                        for (var n = z(r) ? function(t) {
                                                                return e(r, t)
                                                            } : function(e) {
                                                                return Q(e, r)
                                                            }, i = 0; i < t.length; i++)
                                                            if (t[i] && n(t[i])) return !0;
                                                        return !1
                                                    }(r, n);
                                                case "$all":
                                                    if (!Array.isArray(r)) return !1;
                                                    for (var i = 0; i < n.length; i++) {
                                                        for (var a = !1, u = 0; u < r.length; u++)
                                                            if (e(n[i], r[u])) {
                                                                a = !0;
                                                                break
                                                            } if (!a) return !1
                                                    }
                                                    return !0;
                                                case "$regex":
                                                    try {
                                                        return (G[n] || (G[n] = new RegExp(n.replace(/([^\\])\//g, "$1\\/"))), G[n]).test(r)
                                                    } catch (t) {
                                                        return !1
                                                    }
                                                case "$type":
                                                    return function(e) {
                                                        if (null === e) return "null";
                                                        if (Array.isArray(e)) return "array";
                                                        var t = void 0 === e ? "undefined" : _type_of(e);
                                                        return ["string", "number", "boolean", "object", "undefined"].includes(t) ? t : "unknown"
                                                    }(r) === n;
                                                default:
                                                    return console.error("Unknown operator: " + t), !1
                                            }
                                        }(n, r, t[n])) return !1;
                                return !0
                            }(s[1], function(e, t) {
                                for (var r = t.split("."), n = e, i = 0; i < r.length; i++) {
                                    if (!n || "object" != (void 0 === n ? "undefined" : _type_of(n)) || !(r[i] in n)) return null;
                                    n = n[r[i]]
                                }
                                return n
                            }(e, o))) return !1
                    }
                } catch (e) {
                    n = !0, i = e
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (n) throw i
                    }
                }
                return !0
            }

            function z(e) {
                var t = Object.keys(e);
                return t.length > 0 && t.filter(function(e) {
                    return "$" === e[0]
                }).length === t.length
            }

            function Z(e, t) {
                return Array.isArray(e) ? e.some(function(e) {
                    return t.includes(e)
                }) : t.includes(e)
            }

            function W(e, t) {
                if (!t.length) return !0;
                for (var r = 0; r < t.length; r++)
                    if (Q(e, t[r])) return !0;
                return !1
            }
            var X = 6e4,
                Y = "gbFeaturesCache",
                ee = !0,
                te = {
                    fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0,
                    SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : void 0,
                    EventSource: globalThis.EventSource
                };
            try {
                globalThis.localStorage && (te.localStorage = globalThis.localStorage)
            } catch (e) {}
            var re = new Map,
                ne = !1,
                ie = new Map,
                ae = new Map,
                ue = new Map,
                se = new Set;

            function oe(e, t, r, n, i) {
                return _async_to_generator(function() {
                    var a;
                    return _ts_generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, le(e, n, t, r)];
                            case 1:
                                return a = u.sent(), i && a ? [4, _e(e, a)] : [3, 3];
                            case 2:
                                u.sent(), u.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })()
            }

            function ce() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]), te.localStorage ? [4, te.localStorage.setItem(Y, JSON.stringify(Array.from(ie.entries())))] : [2];
                            case 1:
                                return e.sent(), [3, 3];
                            case 2:
                                return e.sent(), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })()
            }

            function le(e, t, r, n) {
                return _async_to_generator(function() {
                    var i, a, u, s, o;
                    return _ts_generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return i = _sliced_to_array(fe(e), 1), a = i[0], u = new Date, [4, _async_to_generator(function() {
                                    var e, t;
                                    return _ts_generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                if (ne) return [3, 5];
                                                ne = !0, r.label = 1;
                                            case 1:
                                                return r.trys.push([1, 4, , 5]), te.localStorage ? [4, te.localStorage.getItem(Y)] : [3, 3];
                                            case 2:
                                                (e = r.sent()) && (t = JSON.parse(e)) && Array.isArray(t) && t.forEach(function(e) {
                                                    var t = _sliced_to_array(e, 2),
                                                        r = t[0],
                                                        n = t[1];
                                                    ie.set(r, _object_spread_props(_object_spread({}, n), {
                                                        staleAt: new Date(n.staleAt)
                                                    }))
                                                }), r.label = 3;
                                            case 3:
                                                return [3, 5];
                                            case 4:
                                                return r.sent(), [3, 5];
                                            case 5:
                                                return [2]
                                        }
                                    })
                                })()];
                            case 1:
                                return c.sent(), (s = ie.get(a)) && !n && (t || s.staleAt > u) ? [2, (s.staleAt < u ? pe(e) : de(e), s.data)] : [4, (o = pe(e), new Promise(function(e) {
                                    var t, n = !1,
                                        i = function(r) {
                                            n || (n = !0, t && clearTimeout(t), e(r || null))
                                        };
                                    r && (t = setTimeout(function() {
                                        return i()
                                    }, r)), o.then(function(e) {
                                        return i(e)
                                    }).catch(function() {
                                        return i()
                                    })
                                }))];
                            case 2:
                                return [2, c.sent()]
                        }
                    })
                })()
            }

            function fe(e) {
                var t = _sliced_to_array(e.getApiInfo(), 2),
                    r = t[0],
                    n = t[1];
                return ["".concat(r, "||").concat(n), r, n]
            }

            function he(e, t) {
                var r = t.dateUpdated || "",
                    n = new Date(Date.now() + X),
                    i = ie.get(e);
                if (i && r && i.version === r) return i.staleAt = n, void ce();
                ie.set(e, {
                    data: t,
                    version: r,
                    staleAt: n
                }), ce();
                var a = re.get(e);
                a && a.forEach(function(e) {
                    return _e(e, t)
                })
            }

            function _e(e, t) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, t.encryptedExperiments ? e.setEncryptedExperiments(t.encryptedExperiments, void 0, te.SubtleCrypto) : e.setExperiments(t.experiments || e.getExperiments())];
                            case 1:
                                return r.sent(), [4, t.encryptedFeatures ? e.setEncryptedFeatures(t.encryptedFeatures, void 0, te.SubtleCrypto) : e.setFeatures(t.features || e.getFeatures())];
                            case 2:
                                return r.sent(), [2]
                        }
                    })
                })()
            }

            function pe(e) {
                return _async_to_generator(function() {
                    var t, r, n, i, a;
                    return _ts_generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return t = _sliced_to_array(fe(e), 3), r = t[0], n = t[1], i = t[2], (a = ae.get(r)) || (a = te.fetch(n + "/api/features/" + i).then(function(e) {
                                    return "enabled" === e.headers.get("x-sse-support") && se.add(r), e.json()
                                }).then(function(t) {
                                    return he(r, t), de(e), ae.delete(r), t
                                }).catch(function(e) {
                                    return ae.delete(r), Promise.resolve({})
                                }), ae.set(r, a)), [4, a];
                            case 1:
                                return [2, u.sent()]
                        }
                    })
                })()
            }

            function de(e) {
                var t = _sliced_to_array(fe(e), 3),
                    r = t[0],
                    n = t[1],
                    i = t[2];
                if (ee && se.has(r) && te.EventSource) {
                    if (ue.has(r)) return;
                    var a = {
                        src: null,
                        cb: function(e) {
                            try {
                                var t = JSON.parse(e.data);
                                he(r, t), a.errors = 0
                            } catch (e) {
                                ve(a, n, i)
                            }
                        },
                        errors: 0
                    };
                    ue.set(r, a), ye(a, n, i)
                }
            }

            function ve(e, t, r) {
                if (e.errors++, e.errors > 3 || e.src && 2 === e.src.readyState) {
                    var n = Math.pow(3, e.errors - 3) * (1e3 + 1e3 * Math.random());
                    e.src && (e.src.onopen = null, e.src.onerror = null, e.src.close(), e.src = null), setTimeout(function() {
                        ye(e, t, r)
                    }, Math.min(n, 3e5))
                }
            }

            function ye(e, t, r) {
                e.src = new te.EventSource("".concat(t, "/sub/").concat(r)), e.src.addEventListener("features", e.cb), e.src.onerror = function() {
                    ve(e, t, r)
                }, e.src.onopen = function() {
                    e.errors = 0
                }
            }
            var be = "undefined" != typeof window && "undefined" != typeof document,
                me = function() {
                    function e(t) {
                        _class_call_check(this, e), t = t || {}, this._ctx = this.context = t, this._renderer = null, this._trackedExperiments = new Set, this._trackedFeatures = {}, this.debug = !1, this._subscriptions = new Set, this._rtQueue = [], this._rtTimer = 0, this.ready = !1, this._assigned = new Map, this._forcedFeatureValues = new Map, this._attributeOverrides = {}, this._activeAutoExperiments = new Map, t.features && (this.ready = !0), be && t.enableDevMode && (window._growthbook = this, document.dispatchEvent(new Event("gbloaded"))), t.experiments && (this.ready = !0, this._updateAllAutoExperiments()), t.clientKey && this._refresh({}, !0, !1)
                    }
                    return _create_class(e, [{
                        key: "loadFeatures",
                        value: function(e) {
                            return _async_to_generator(function() {
                                return _ts_generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this._refresh(e, !0, !0)];
                                        case 1:
                                            return t.sent(), e && e.autoRefresh && function(e) {
                                                var t = _sliced_to_array(fe(e), 1)[0],
                                                    r = re.get(t) || new Set;
                                                r.add(e), re.set(t, r)
                                            }(this), [2]
                                    }
                                })
                            }).call(this)
                        }
                    }, {
                        key: "refreshFeatures",
                        value: function(e) {
                            return _async_to_generator(function() {
                                return _ts_generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this._refresh(e, !1, !0)];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            }).call(this)
                        }
                    }, {
                        key: "getApiInfo",
                        value: function() {
                            return [(this._ctx.apiHost || "https://cdn.growthbook.io").replace(/\/*$/, ""), this._ctx.clientKey || ""]
                        }
                    }, {
                        key: "_refresh",
                        value: function(e, t, r) {
                            return _async_to_generator(function() {
                                return _ts_generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (e = e || {}, !this._ctx.clientKey) throw Error("Missing clientKey");
                                            return [4, oe(this, e.timeout, e.skipCache || this._ctx.enableDevMode, t, r)];
                                        case 1:
                                            return n.sent(), [2]
                                    }
                                })
                            }).call(this)
                        }
                    }, {
                        key: "_render",
                        value: function() {
                            this._renderer && this._renderer()
                        }
                    }, {
                        key: "setFeatures",
                        value: function(e) {
                            this._ctx.features = e, this.ready = !0, this._render()
                        }
                    }, {
                        key: "setEncryptedFeatures",
                        value: function(e, t, r) {
                            return _async_to_generator(function() {
                                var n;
                                return _ts_generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, J(e, t || this._ctx.decryptionKey, r)];
                                        case 1:
                                            return n = i.sent(), this.setFeatures(JSON.parse(n)), [2]
                                    }
                                })
                            }).call(this)
                        }
                    }, {
                        key: "setExperiments",
                        value: function(e) {
                            this._ctx.experiments = e, this.ready = !0, this._updateAllAutoExperiments()
                        }
                    }, {
                        key: "setEncryptedExperiments",
                        value: function(e, t, r) {
                            return _async_to_generator(function() {
                                var n;
                                return _ts_generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, J(e, t || this._ctx.decryptionKey, r)];
                                        case 1:
                                            return n = i.sent(), this.setExperiments(JSON.parse(n)), [2]
                                    }
                                })
                            }).call(this)
                        }
                    }, {
                        key: "setAttributes",
                        value: function(e) {
                            this._ctx.attributes = e, this._render(), this._updateAllAutoExperiments()
                        }
                    }, {
                        key: "setAttributeOverrides",
                        value: function(e) {
                            this._attributeOverrides = e, this._render(), this._updateAllAutoExperiments()
                        }
                    }, {
                        key: "setForcedVariations",
                        value: function(e) {
                            this._ctx.forcedVariations = e || {}, this._render(), this._updateAllAutoExperiments()
                        }
                    }, {
                        key: "setForcedFeatures",
                        value: function(e) {
                            this._forcedFeatureValues = e, this._render()
                        }
                    }, {
                        key: "setURL",
                        value: function(e) {
                            this._ctx.url = e, this._updateAllAutoExperiments(!0)
                        }
                    }, {
                        key: "getAttributes",
                        value: function() {
                            return _object_spread({}, this._ctx.attributes, this._attributeOverrides)
                        }
                    }, {
                        key: "getFeatures",
                        value: function() {
                            return this._ctx.features || {}
                        }
                    }, {
                        key: "getExperiments",
                        value: function() {
                            return this._ctx.experiments || []
                        }
                    }, {
                        key: "subscribe",
                        value: function(e) {
                            var t = this;
                            return this._subscriptions.add(e),
                                function() {
                                    t._subscriptions.delete(e)
                                }
                        }
                    }, {
                        key: "getAllResults",
                        value: function() {
                            return new Map(this._assigned)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e;
                            this._subscriptions.clear(), this._assigned.clear(), this._trackedExperiments.clear(), this._trackedFeatures = {}, this._rtQueue = [], this._rtTimer && clearTimeout(this._rtTimer), e = this, re.forEach(function(t) {
                                return t.delete(e)
                            }), be && window._growthbook === this && delete window._growthbook, this._activeAutoExperiments.forEach(function(e) {
                                e.undo()
                            }), this._activeAutoExperiments.clear()
                        }
                    }, {
                        key: "setRenderer",
                        value: function(e) {
                            this._renderer = e
                        }
                    }, {
                        key: "forceVariation",
                        value: function(e, t) {
                            this._ctx.forcedVariations = this._ctx.forcedVariations || {}, this._ctx.forcedVariations[e] = t, this._render()
                        }
                    }, {
                        key: "run",
                        value: function(e) {
                            var t = this._run(e, null);
                            return this._fireSubscriptions(e, t), t
                        }
                    }, {
                        key: "triggerExperiment",
                        value: function(e) {
                            if (!this._ctx.experiments) return null;
                            var t = this._ctx.experiments.find(function(t) {
                                return t.key === e
                            });
                            return t && t.manual ? this._runAutoExperiment(t, !0) : null
                        }
                    }, {
                        key: "_runAutoExperiment",
                        value: function(e, t, r) {
                            var n = e.key,
                                i = this._activeAutoExperiments.get(n);
                            if (e.manual && !t && !i) return null;
                            var a = this.run(e),
                                u = JSON.stringify(a.value);
                            if (!r && a.inExperiment && i && i.valueHash === u) return a;
                            if (i && this._undoActiveAutoExperiment(n), a.inExperiment) {
                                var s = this._applyDOMChanges(a.value);
                                s && this._activeAutoExperiments.set(e.key, {
                                    undo: s,
                                    valueHash: u
                                })
                            }
                            return a
                        }
                    }, {
                        key: "_undoActiveAutoExperiment",
                        value: function(e) {
                            var t = this._activeAutoExperiments.get(e);
                            t && (t.undo(), this._activeAutoExperiments.delete(e))
                        }
                    }, {
                        key: "_updateAllAutoExperiments",
                        value: function(e) {
                            var t = this,
                                r = this._ctx.experiments || [],
                                n = new Set(r.map(function(e) {
                                    return e.key
                                }));
                            this._activeAutoExperiments.forEach(function(e, r) {
                                n.has(r) || (e.undo(), t._activeAutoExperiments.delete(r))
                            }), r.forEach(function(r) {
                                t._runAutoExperiment(r, !1, e)
                            })
                        }
                    }, {
                        key: "_fireSubscriptions",
                        value: function(e, t) {
                            var r = e.key,
                                n = this._assigned.get(r);
                            n && n.result.inExperiment === t.inExperiment && n.result.variationId === t.variationId || (this._assigned.set(r, {
                                experiment: e,
                                result: t
                            }), this._subscriptions.forEach(function(r) {
                                try {
                                    r(e, t)
                                } catch (e) {
                                    console.error(e)
                                }
                            }))
                        }
                    }, {
                        key: "_trackFeatureUsage",
                        value: function(e, t) {
                            var r = this;
                            if ("override" !== t.source) {
                                var n = JSON.stringify(t.value);
                                if (this._trackedFeatures[e] !== n) {
                                    if (this._trackedFeatures[e] = n, this._ctx.onFeatureUsage) try {
                                        this._ctx.onFeatureUsage(e, t)
                                    } catch (e) {}
                                    be && window.fetch && (this._rtQueue.push({
                                        key: e,
                                        on: t.on
                                    }), this._rtTimer || (this._rtTimer = window.setTimeout(function() {
                                        r._rtTimer = 0;
                                        var e = _to_consumable_array(r._rtQueue);
                                        r._rtQueue = [], r._ctx.realtimeKey && window.fetch("https://rt.growthbook.io/?key=".concat(r._ctx.realtimeKey, "&events=").concat(encodeURIComponent(JSON.stringify(e))), {
                                            cache: "no-cache",
                                            mode: "no-cors"
                                        }).catch(function() {})
                                    }, this._ctx.realtimeInterval || 2e3)))
                                }
                            }
                        }
                    }, {
                        key: "_getFeatureResult",
                        value: function(e, t, r, n, i, a) {
                            var u = {
                                value: t,
                                on: !!t,
                                off: !t,
                                source: r,
                                ruleId: n || ""
                            };
                            return i && (u.experiment = i), a && (u.experimentResult = a), this._trackFeatureUsage(e, u), u
                        }
                    }, {
                        key: "isOn",
                        value: function(e) {
                            return this.evalFeature(e).on
                        }
                    }, {
                        key: "isOff",
                        value: function(e) {
                            return this.evalFeature(e).off
                        }
                    }, {
                        key: "getFeatureValue",
                        value: function(e, t) {
                            var r = this.evalFeature(e).value;
                            return null === r ? t : r
                        }
                    }, {
                        key: "feature",
                        value: function(e) {
                            return this.evalFeature(e)
                        }
                    }, {
                        key: "evalFeature",
                        value: function(e) {
                            var t = this;
                            if (this._forcedFeatureValues.has(e)) return this._getFeatureResult(e, this._forcedFeatureValues.get(e), "override");
                            if (!this._ctx.features || !this._ctx.features[e]) return this._getFeatureResult(e, null, "unknownFeature");
                            var r = this._ctx.features[e],
                                n = !0,
                                i = !1,
                                a = void 0;
                            if (r.rules) try {
                                for (var u, s = r.rules[Symbol.iterator](); !(n = (u = s.next()).done); n = !0) {
                                    var o = u.value;
                                    if (!(o.condition && !this._conditionPasses(o.condition) || o.filters && this._isFilteredOut(o.filters))) {
                                        if ("force" in o) {
                                            if (!this._isIncludedInRollout(o.seed || e, o.hashAttribute, o.range, o.coverage, o.hashVersion)) continue;
                                            return o.tracks && o.tracks.forEach(function(e) {
                                                t._track(e.experiment, e.result)
                                            }), this._getFeatureResult(e, o.force, "force", o.id)
                                        }
                                        if (o.variations) {
                                            var c = {
                                                variations: o.variations,
                                                key: o.key || e
                                            };
                                            "coverage" in o && (c.coverage = o.coverage), o.weights && (c.weights = o.weights), o.hashAttribute && (c.hashAttribute = o.hashAttribute), o.namespace && (c.namespace = o.namespace), o.meta && (c.meta = o.meta), o.ranges && (c.ranges = o.ranges), o.name && (c.name = o.name), o.phase && (c.phase = o.phase), o.seed && (c.seed = o.seed), o.hashVersion && (c.hashVersion = o.hashVersion), o.filters && (c.filters = o.filters);
                                            var l = this._run(c, e);
                                            if (this._fireSubscriptions(c, l), l.inExperiment && !l.passthrough) return this._getFeatureResult(e, l.value, "experiment", o.id, c, l)
                                        }
                                    }
                                }
                            } catch (e) {
                                i = !0, a = e
                            } finally {
                                try {
                                    n || null == s.return || s.return()
                                } finally {
                                    if (i) throw a
                                }
                            }
                            return this._getFeatureResult(e, void 0 === r.defaultValue ? null : r.defaultValue, "defaultValue")
                        }
                    }, {
                        key: "_isIncludedInRollout",
                        value: function(e, t, r, n, i) {
                            if (!r && void 0 === n) return !0;
                            var a = this._getHashAttribute(t).hashValue;
                            if (!a) return !1;
                            var u = B(e, a, i || 1);
                            return null !== u && (r ? H(u, r) : void 0 === n || u <= n)
                        }
                    }, {
                        key: "_conditionPasses",
                        value: function(e) {
                            return Q(this.getAttributes(), e)
                        }
                    }, {
                        key: "_isFilteredOut",
                        value: function(e) {
                            var t = this;
                            return e.some(function(e) {
                                var r = t._getHashAttribute(e.attribute).hashValue;
                                if (!r) return !0;
                                var n = B(e.seed, r, e.hashVersion || 2);
                                return null === n || !e.ranges.some(function(e) {
                                    return H(n, e)
                                })
                            })
                        }
                    }, {
                        key: "_run",
                        value: function(e, t) {
                            var r = e.key,
                                n = e.variations.length;
                            if (n < 2 || !1 === this._ctx.enabled) return this._getResult(e, -1, !1, t);
                            e = this._mergeOverrides(e);
                            var i = function(e, t, r) {
                                if (!t) return null;
                                var n = t.split("?")[1];
                                if (!n) return null;
                                var i = n.replace(/#.*/, "").split("&").map(function(e) {
                                    return e.split("=", 2)
                                }).filter(function(t) {
                                    return _sliced_to_array(t, 1)[0] === e
                                }).map(function(e) {
                                    var t = _sliced_to_array(e, 2)[1];
                                    return parseInt(t)
                                });
                                return i.length > 0 && i[0] >= 0 && i[0] < r ? i[0] : null
                            }(r, this._getContextUrl(), n);
                            if (null !== i) return this._getResult(e, i, !1, t);
                            if (this._ctx.forcedVariations && r in this._ctx.forcedVariations) {
                                var a = this._ctx.forcedVariations[r];
                                return this._getResult(e, a, !1, t)
                            }
                            if ("draft" === e.status || !1 === e.active) return this._getResult(e, -1, !1, t);
                            var u = this._getHashAttribute(e.hashAttribute).hashValue;
                            if (!u) return this._getResult(e, -1, !1, t);
                            if (e.filters) {
                                if (this._isFilteredOut(e.filters)) return this._getResult(e, -1, !1, t)
                            } else if (e.namespace && ! function(e, t) {
                                    var r = B("__" + t[0], e, 1);
                                    return null !== r && r >= t[1] && r < t[2]
                                }(u, e.namespace)) return this._getResult(e, -1, !1, t);
                            if (e.include && ! function(e) {
                                    try {
                                        return e()
                                    } catch (e) {
                                        return console.error(e), !1
                                    }
                                }(e.include) || e.condition && !this._conditionPasses(e.condition) || e.groups && !this._hasGroupOverlap(e.groups) || e.url && !this._urlIsValid(e.url) || e.urlPatterns && ! function(e, t) {
                                    if (!t.length) return !1;
                                    for (var r = !1, n = !1, i = 0; i < t.length; i++) {
                                        var a = function(e, t, r) {
                                            try {
                                                var n = new URL(e, "https://_");
                                                if ("regex" === t) {
                                                    var i = L(r);
                                                    return !!i && (i.test(n.href) || i.test(n.href.substring(n.origin.length)))
                                                }
                                                return "simple" === t && function(e, t) {
                                                    try {
                                                        var r = new URL(t.replace(/^([^:/?]*)\./i, "https://$1.").replace(/\*/g, "_____"), "https://_____"),
                                                            n = [
                                                                [e.host, r.host, !1],
                                                                [e.pathname, r.pathname, !0]
                                                            ];
                                                        return r.hash && n.push([e.hash, r.hash, !1]), r.searchParams.forEach(function(t, r) {
                                                            n.push([e.searchParams.get(r) || "", t, !1])
                                                        }), !n.some(function(e) {
                                                            return ! function(e, t, r) {
                                                                try {
                                                                    var n = t.replace(/[*.+?^${}()|[\]\\]/g, "\\$&").replace(/_____/g, ".*");
                                                                    return r && (n = "\\/?" + n.replace(/(^\/|\/$)/g, "") + "\\/?"), RegExp("^" + n + "$", "i").test(e)
                                                                } catch (e) {
                                                                    return !1
                                                                }
                                                            }(e[0], e[1], e[2])
                                                        })
                                                    } catch (e) {
                                                        return !1
                                                    }
                                                }(n, r)
                                            } catch (e) {
                                                return !1
                                            }
                                        }(e, t[i].type, t[i].pattern);
                                        if (!1 === t[i].include) {
                                            if (a) return !1
                                        } else r = !0, a && (n = !0)
                                    }
                                    return n || !r
                                }(this._getContextUrl(), e.urlPatterns)) return this._getResult(e, -1, !1, t);
                            var s = B(e.seed || r, u, e.hashVersion || 1);
                            if (null === s) return this._getResult(e, -1, !1, t);
                            var o = e.ranges || function(e, t, r) {
                                    (t = void 0 === t ? 1 : t) < 0 ? t = 0 : t > 1 && (t = 1);
                                    var n = e <= 0 ? [] : Array(e).fill(1 / e);
                                    (r = r || n).length !== e && (r = n);
                                    var i = r.reduce(function(e, t) {
                                        return t + e
                                    }, 0);
                                    (i < .99 || i > 1.01) && (r = n);
                                    var a = 0;
                                    return r.map(function(e) {
                                        var r = a;
                                        return a += e, [r, r + t * e]
                                    })
                                }(n, void 0 === e.coverage ? 1 : e.coverage, e.weights),
                                c = function(e, t) {
                                    for (var r = 0; r < t.length; r++)
                                        if (H(e, t[r])) return r;
                                    return -1
                                }(s, o);
                            if (c < 0) return this._getResult(e, -1, !1, t);
                            if ("force" in e) return this._getResult(e, void 0 === e.force ? -1 : e.force, !1, t);
                            if (this._ctx.qaMode || "stopped" === e.status) return this._getResult(e, -1, !1, t);
                            var l = this._getResult(e, c, !0, t, s);
                            return this._track(e, l), l
                        }
                    }, {
                        key: "log",
                        value: function(e, t) {
                            this.debug && (this._ctx.log ? this._ctx.log(e, t) : console.log(e, t))
                        }
                    }, {
                        key: "_track",
                        value: function(e, t) {
                            if (this._ctx.trackingCallback) {
                                var r = e.key,
                                    n = t.hashAttribute + t.hashValue + r + t.variationId;
                                if (!this._trackedExperiments.has(n)) {
                                    this._trackedExperiments.add(n);
                                    try {
                                        this._ctx.trackingCallback(e, t)
                                    } catch (e) {
                                        console.error(e)
                                    }
                                }
                            }
                        }
                    }, {
                        key: "_mergeOverrides",
                        value: function(e) {
                            var t = e.key,
                                r = this._ctx.overrides;
                            return r && r[t] && "string" == typeof(e = Object.assign({}, e, r[t])).url && (e.url = L(e.url)), e
                        }
                    }, {
                        key: "_getHashAttribute",
                        value: function(e) {
                            var t = e || "id",
                                r = "";
                            return this._attributeOverrides[t] ? r = this._attributeOverrides[t] : this._ctx.attributes ? r = this._ctx.attributes[t] || "" : this._ctx.user && (r = this._ctx.user[t] || ""), {
                                hashAttribute: t,
                                hashValue: r
                            }
                        }
                    }, {
                        key: "_getResult",
                        value: function(e, t, r, n, i) {
                            var a = !0;
                            (t < 0 || t >= e.variations.length) && (t = 0, a = !1);
                            var u = this._getHashAttribute(e.hashAttribute),
                                s = u.hashAttribute,
                                o = u.hashValue,
                                c = e.meta ? e.meta[t] : {},
                                l = {
                                    key: c.key || "" + t,
                                    featureId: n,
                                    inExperiment: a,
                                    hashUsed: r,
                                    variationId: t,
                                    value: e.variations[t],
                                    hashAttribute: s,
                                    hashValue: o
                                };
                            return c.name && (l.name = c.name), void 0 !== i && (l.bucket = i), c.passthrough && (l.passthrough = c.passthrough), l
                        }
                    }, {
                        key: "_getContextUrl",
                        value: function() {
                            return this._ctx.url || (be ? window.location.href : "")
                        }
                    }, {
                        key: "_urlIsValid",
                        value: function(e) {
                            var t = this._getContextUrl();
                            if (!t) return !1;
                            var r = t.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
                            return !(!e.test(t) && !e.test(r))
                        }
                    }, {
                        key: "_hasGroupOverlap",
                        value: function(e) {
                            for (var t = this._ctx.groups || {}, r = 0; r < e.length; r++)
                                if (t[e[r]]) return !0;
                            return !1
                        }
                    }, {
                        key: "_applyDOMChanges",
                        value: function(e) {
                            if (be) {
                                var t = [];
                                if (e.css) {
                                    var r = document.createElement("style");
                                    r.innerHTML = e.css, document.head.appendChild(r), t.push(function() {
                                        return r.remove()
                                    })
                                }
                                if (e.js) {
                                    var n = document.createElement("script");
                                    n.innerHTML = e.js, document.body.appendChild(n), t.push(function() {
                                        return n.remove()
                                    })
                                }
                                return e.domMutations && e.domMutations.forEach(function(e) {
                                        t.push(D(e).revert)
                                    }),
                                    function() {
                                        t.forEach(function(e) {
                                            return e()
                                        })
                                    }
                            }
                        }
                    }]), e
                }()
        },
        81433: function(e, t, r) {
            var n = r(32930),
                i = r(69389),
                a = r(27434),
                u = r(50874),
                s = {
                    m: u.number,
                    p: u.number,
                    my: u.number,
                    mx: u.number,
                    mt: u.number,
                    mb: u.number,
                    mr: u.number,
                    ml: u.number,
                    py: u.number,
                    px: u.number,
                    pt: u.number,
                    pb: u.number,
                    pr: u.number,
                    pl: u.number,
                    gap: u.number,
                    className: u.string,
                    alignItems: u.oneOf(["center", "flex-start", "flex-end"]),
                    flexDirection: u.oneOf(["row", "column", "row-reverse", "column-reverse"]),
                    display: u.oneOf(["block", "flex", "grid", "inline", "inline-block", "inline-flex", "inline-grid"]),
                    justifyContent: u.oneOf(["center", "flex-start", "flex-end", "space-between", "space-around", "space-evenly"])
                },
                o = {
                    m: "bs-box--m-",
                    p: "bs-box--p-",
                    my: "bs-box--my-",
                    mx: "bs-box--mx-",
                    mt: "bs-box--mt-",
                    mb: "bs-box--mb-",
                    mr: "bs-box--mr-",
                    ml: "bs-box--ml-",
                    py: "bs-box--py-",
                    px: "bs-box--px-",
                    pt: "bs-box--pt-",
                    pb: "bs-box--pb-",
                    pr: "bs-box--pr-",
                    pl: "bs-box--pl-",
                    gap: "bs-box--gap-",
                    display: "bs-box--",
                    alignItems: "bs-box--ai-",
                    flexDirection: "bs-box--fd-",
                    justifyContent: "bs-box--jc-"
                },
                c = function(e) {
                    var t = e.style,
                        r = e.className,
                        u = e.children,
                        s = _object_without_properties(e, ["style", "className", "children"]),
                        c = a.useMemo(function() {
                            var e = ["bs-box"];
                            for (var t in o) {
                                var r = s[t];
                                null != r && e.push(o[t] + r)
                            }
                            return e
                        }, [s.m, s.p, s.gap, s.my, s.mx, s.mt, s.mb, s.mr, s.ml, s.py, s.px, s.pt, s.pb, s.pr, s.pl, s.display, s.alignItems, s.flexDirection, s.justifyContent]);
                    return n.jsx("div", {
                        style: t,
                        className: i.clsx(c, r),
                        children: u
                    })
                };
            c.propTypes = s, c.defaultProps = {}, c.displayName = "BsBox", e.exports = c
        }
    }
]);