"use strict";

function _array_like_to_array(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function _class_call_check(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _define_property(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _iterable_to_array(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _iterable_to_array_limit(e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var r, o, i = [],
            a = !0,
            s = !1;
        try {
            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
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
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            _define_property(e, t, n[t])
        })
    }
    return e
}

function ownKeys(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function _object_spread_props(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function _sliced_to_array(e, t) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, t) || _unsupported_iterable_to_array(e, t) || _non_iterable_rest()
}

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
}

function _unsupported_iterable_to_array(e, t) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _array_like_to_array(e, t) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8231], {
        28231: function(e, t, n) {
            n.d(t, {
                MG: function() {
                    return y
                }
            });
            var r = n(27434),
                o = n(11966);

            function i(e, t, n) {
                var r, o, i = null !== (r = n.initialDeps) && void 0 !== r ? r : [];

                function a() {
                    var r, a, s, l, u, c;
                    n.key && (null == (r = n.debug) ? void 0 : r.call(n)) && (u = Date.now());
                    var f = e(),
                        d = f.length !== i.length || f.some(function(e, t) {
                            return i[t] !== e
                        });
                    if (!d) return o;
                    if (i = f, n.key && (null == (a = n.debug) ? void 0 : a.call(n)) && (c = Date.now()), o = t.apply(void 0, _to_consumable_array(f)), n.key && (null == (s = n.debug) ? void 0 : s.call(n))) {
                        var h = Math.round(100 * (Date.now() - u)) / 100,
                            m = Math.round(100 * (Date.now() - c)) / 100,
                            v = m / 16,
                            p = function(e, t) {
                                for (e = String(e); e.length < t;) e = " " + e;
                                return e
                            };
                        console.info("%c⏱ ".concat(p(m, 5), " /").concat(p(h, 5), " ms"), "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(".concat(Math.max(0, Math.min(120 - 120 * v, 120)), "deg 100% 31%);"), null == n ? void 0 : n.key)
                    }
                    return null == (l = null == n ? void 0 : n.onChange) || l.call(n, o), o
                }
                return a.updateDeps = function(e) {
                    i = e
                }, a
            }

            function a(e, t) {
                if (void 0 !== e) return e;
                throw Error("Unexpected undefined".concat(t ? ": ".concat(t) : ""))
            }
            var s = function(e) {
                    return {
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    }
                },
                l = function(e) {
                    return e
                },
                u = function(e) {
                    for (var t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [], o = t; o <= n; o++) r.push(o);
                    return r
                },
                c = function(e, t) {
                    var n = e.scrollElement;
                    if (n) {
                        var r = e.targetWindow;
                        if (r) {
                            var o = function(e) {
                                var n = e.width,
                                    r = e.height;
                                t({
                                    width: Math.round(n),
                                    height: Math.round(r)
                                })
                            };
                            if (o(s(n)), !r.ResizeObserver) return function() {};
                            var i = new r.ResizeObserver(function(t) {
                                var r = function() {
                                    var e = t[0];
                                    if (null == e ? void 0 : e.borderBoxSize) {
                                        var r = e.borderBoxSize[0];
                                        if (r) return void o({
                                            width: r.inlineSize,
                                            height: r.blockSize
                                        })
                                    }
                                    o(s(n))
                                };
                                e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r) : r()
                            });
                            return i.observe(n, {
                                    box: "border-box"
                                }),
                                function() {
                                    i.unobserve(n)
                                }
                        }
                    }
                },
                f = {
                    passive: !0
                },
                d = "undefined" == typeof window || "onscrollend" in window,
                h = function(e, t) {
                    var n = e.scrollElement;
                    if (n) {
                        var r = e.targetWindow;
                        if (r) {
                            var o = 0,
                                i = e.options.useScrollendEvent && d ? function() {} : function(e, t, n) {
                                    var r;
                                    return function() {
                                        for (var o = this, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                                        e.clearTimeout(r), r = e.setTimeout(function() {
                                            return t.apply(o, a)
                                        }, n)
                                    }
                                }(r, function() {
                                    t(o, !1)
                                }, e.options.isScrollingResetDelay),
                                a = function(r) {
                                    return function() {
                                        var a = e.options,
                                            s = a.horizontal,
                                            l = a.isRtl;
                                        o = s ? n.scrollLeft * (l ? -1 : 1) : n.scrollTop, i(), t(o, r)
                                    }
                                },
                                s = a(!0),
                                l = a(!1);
                            l(), n.addEventListener("scroll", s, f);
                            var u = e.options.useScrollendEvent && d;
                            return u && n.addEventListener("scrollend", l, f),
                                function() {
                                    n.removeEventListener("scroll", s), u && n.removeEventListener("scrollend", l)
                                }
                        }
                    }
                },
                m = function(e, t, n) {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        var r = t.borderBoxSize[0];
                        if (r) return Math.round(r[n.options.horizontal ? "inlineSize" : "blockSize"])
                    }
                    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"]
                },
                v = function(e, t, n) {
                    var r, o, i, a = t.adjustments,
                        s = void 0 === a ? 0 : a,
                        l = t.behavior;
                    null == (o = null == (r = n.scrollElement) ? void 0 : r.scrollTo) || o.call(r, (_define_property(i = {}, n.options.horizontal ? "left" : "top", e + s), _define_property(i, "behavior", l), i))
                },
                p = function e(t) {
                    var n, r, o = this,
                        s = this;
                    _class_call_check(this, e), this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = new Map, this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = new Map, this.observer = (n = null, r = function() {
                        return n || (o.targetWindow && o.targetWindow.ResizeObserver ? n = new o.targetWindow.ResizeObserver(function(e) {
                            e.forEach(function(e) {
                                var t = function() {
                                    o._measureElement(e.target, e)
                                };
                                o.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t()
                            })
                        }) : null)
                    }, {
                        disconnect: function() {
                            var e;
                            null == (e = r()) || e.disconnect(), n = null
                        },
                        observe: function(e) {
                            var t;
                            return null == (t = r()) ? void 0 : t.observe(e, {
                                box: "border-box"
                            })
                        },
                        unobserve: function(e) {
                            var t;
                            return null == (t = r()) ? void 0 : t.unobserve(e)
                        }
                    }), this.range = null, this.setOptions = function(e) {
                        Object.entries(e).forEach(function(t) {
                            var n = _sliced_to_array(t, 2),
                                r = n[0];
                            void 0 === n[1] && delete e[r]
                        }), o.options = _object_spread({
                            debug: !1,
                            initialOffset: 0,
                            overscan: 1,
                            paddingStart: 0,
                            paddingEnd: 0,
                            scrollPaddingStart: 0,
                            scrollPaddingEnd: 0,
                            horizontal: !1,
                            getItemKey: l,
                            rangeExtractor: u,
                            onChange: function() {},
                            measureElement: m,
                            initialRect: {
                                width: 0,
                                height: 0
                            },
                            scrollMargin: 0,
                            gap: 0,
                            indexAttribute: "data-index",
                            initialMeasurementsCache: [],
                            lanes: 1,
                            isScrollingResetDelay: 150,
                            enabled: !0,
                            isRtl: !1,
                            useScrollendEvent: !1,
                            useAnimationFrameWithResizeObserver: !1
                        }, e)
                    }, this.notify = function(e) {
                        var t, n;
                        null == (n = (t = o.options).onChange) || n.call(t, o, e)
                    }, this.maybeNotify = i(function() {
                        return o.calculateRange(), [o.isScrolling, o.range ? o.range.startIndex : null, o.range ? o.range.endIndex : null]
                    }, function(e) {
                        o.notify(e)
                    }, {
                        key: !1,
                        debug: function() {
                            return o.options.debug
                        },
                        initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
                    }), this.cleanup = function() {
                        o.unsubs.filter(Boolean).forEach(function(e) {
                            return e()
                        }), o.unsubs = [], o.observer.disconnect(), o.scrollElement = null, o.targetWindow = null
                    }, this._didMount = function() {
                        return function() {
                            o.cleanup()
                        }
                    }, this._willUpdate = function() {
                        var e, t = o.options.enabled ? o.options.getScrollElement() : null;
                        if (o.scrollElement !== t) {
                            if (o.cleanup(), !t) return void o.maybeNotify();
                            var n;
                            o.scrollElement = t, o.scrollElement && "ownerDocument" in o.scrollElement ? o.targetWindow = o.scrollElement.ownerDocument.defaultView : o.targetWindow = null !== (n = null == (e = o.scrollElement) ? void 0 : e.window) && void 0 !== n ? n : null, o.elementsCache.forEach(function(e) {
                                o.observer.observe(e)
                            }), o._scrollToOffset(o.getScrollOffset(), {
                                adjustments: void 0,
                                behavior: void 0
                            }), o.unsubs.push(o.options.observeElementRect(o, function(e) {
                                o.scrollRect = e, o.maybeNotify()
                            })), o.unsubs.push(o.options.observeElementOffset(o, function(e, t) {
                                o.scrollAdjustments = 0, o.scrollDirection = t ? o.getScrollOffset() < e ? "forward" : "backward" : null, o.scrollOffset = e, o.isScrolling = t, o.maybeNotify()
                            }))
                        }
                    }, this.getSize = function() {
                        var e;
                        return o.options.enabled ? (o.scrollRect = null !== (e = o.scrollRect) && void 0 !== e ? e : o.options.initialRect, o.scrollRect[o.options.horizontal ? "width" : "height"]) : (o.scrollRect = null, 0)
                    }, this.getScrollOffset = function() {
                        var e;
                        return o.options.enabled ? (o.scrollOffset = null !== (e = o.scrollOffset) && void 0 !== e ? e : "function" == typeof o.options.initialOffset ? o.options.initialOffset() : o.options.initialOffset, o.scrollOffset) : (o.scrollOffset = null, 0)
                    }, this.getFurthestMeasurement = function(e, t) {
                        for (var n = new Map, r = new Map, i = t - 1; i >= 0; i--) {
                            var a = e[i];
                            if (!n.has(a.lane)) {
                                var s = r.get(a.lane);
                                if (null == s || a.end > s.end ? r.set(a.lane, a) : a.end < s.end && n.set(a.lane, !0), n.size === o.options.lanes) break
                            }
                        }
                        return r.size === o.options.lanes ? Array.from(r.values()).sort(function(e, t) {
                            return e.end === t.end ? e.index - t.index : e.end - t.end
                        })[0] : void 0
                    }, this.getMeasurementOptions = i(function() {
                        return [o.options.count, o.options.paddingStart, o.options.scrollMargin, o.options.getItemKey, o.options.enabled]
                    }, function(e, t, n, r, i) {
                        return o.pendingMeasuredCacheIndexes = [], {
                            count: e,
                            paddingStart: t,
                            scrollMargin: n,
                            getItemKey: r,
                            enabled: i
                        }
                    }, {
                        key: !1
                    }), this.getMeasurements = i(function() {
                        return [o.getMeasurementOptions(), o.itemSizeCache]
                    }, function(e, t) {
                        var n, r = e.count,
                            i = e.paddingStart,
                            a = e.scrollMargin,
                            s = e.getItemKey;
                        if (!e.enabled) return o.measurementsCache = [], o.itemSizeCache.clear(), [];
                        0 === o.measurementsCache.length && (o.measurementsCache = o.options.initialMeasurementsCache, o.measurementsCache.forEach(function(e) {
                            o.itemSizeCache.set(e.key, e.size)
                        }));
                        var l = o.pendingMeasuredCacheIndexes.length > 0 ? (n = Math).min.apply(n, _to_consumable_array(o.pendingMeasuredCacheIndexes)) : 0;
                        o.pendingMeasuredCacheIndexes = [];
                        for (var u = o.measurementsCache.slice(0, l), c = l; c < r; c++) {
                            var f = s(c),
                                d = 1 === o.options.lanes ? u[c - 1] : o.getFurthestMeasurement(u, c),
                                h = d ? d.end + o.options.gap : i + a,
                                m = t.get(f),
                                v = "number" == typeof m ? m : o.options.estimateSize(c),
                                p = h + v,
                                g = d ? d.lane : c % o.options.lanes;
                            u[c] = {
                                index: c,
                                start: h,
                                size: v,
                                end: p,
                                key: f,
                                lane: g
                            }
                        }
                        return o.measurementsCache = u, u
                    }, {
                        key: !1,
                        debug: function() {
                            return o.options.debug
                        }
                    }), this.calculateRange = i(function() {
                        return [o.getMeasurements(), o.getSize(), o.getScrollOffset(), o.options.lanes]
                    }, function(e, t, n, r) {
                        return o.range = e.length > 0 && t > 0 ? function(e) {
                            var t = e.measurements,
                                n = e.outerSize,
                                r = e.scrollOffset,
                                o = e.lanes,
                                i = t.length - 1;
                            if (t.length <= o) return {
                                startIndex: 0,
                                endIndex: i
                            };
                            var a = g(0, i, function(e) {
                                    return t[e].start
                                }, r),
                                s = a;
                            if (1 === o)
                                for (; s < i && t[s].end < r + n;) s++;
                            else if (o > 1) {
                                for (var l = Array(o).fill(0); s < i && l.some(function(e) {
                                        return e < r + n
                                    });) {
                                    var u = t[s];
                                    l[u.lane] = u.end, s++
                                }
                                for (var c = Array(o).fill(r + n); a >= 0 && c.some(function(e) {
                                        return e >= r
                                    });) {
                                    var f = t[a];
                                    c[f.lane] = f.start, a--
                                }
                                a = Math.max(0, a - a % o), s = Math.min(i, s + (o - 1 - s % o))
                            }
                            return {
                                startIndex: a,
                                endIndex: s
                            }
                        }({
                            measurements: e,
                            outerSize: t,
                            scrollOffset: n,
                            lanes: r
                        }) : null
                    }, {
                        key: !1,
                        debug: function() {
                            return o.options.debug
                        }
                    }), this.getVirtualIndexes = i(function() {
                        var e = null,
                            t = null,
                            n = o.calculateRange();
                        return n && (e = n.startIndex, t = n.endIndex), o.maybeNotify.updateDeps([o.isScrolling, e, t]), [o.options.rangeExtractor, o.options.overscan, o.options.count, e, t]
                    }, function(e, t, n, r, o) {
                        return null === r || null === o ? [] : e({
                            startIndex: r,
                            endIndex: o,
                            overscan: t,
                            count: n
                        })
                    }, {
                        key: !1,
                        debug: function() {
                            return o.options.debug
                        }
                    }), this.indexFromElement = function(e) {
                        var t = o.options.indexAttribute,
                            n = e.getAttribute(t);
                        return n ? parseInt(n, 10) : (console.warn("Missing attribute name '".concat(t, "={index}' on measured element.")), -1)
                    }, this._measureElement = function(e, t) {
                        var n = o.indexFromElement(e),
                            r = o.measurementsCache[n];
                        if (r) {
                            var i = r.key,
                                a = o.elementsCache.get(i);
                            a !== e && (a && o.observer.unobserve(a), o.observer.observe(e), o.elementsCache.set(i, e)), e.isConnected && o.resizeItem(n, o.options.measureElement(e, t, o))
                        }
                    }, this.resizeItem = function(e, t) {
                        var n = o.measurementsCache[e];
                        if (n) {
                            var r, i = t - (null !== (r = o.itemSizeCache.get(n.key)) && void 0 !== r ? r : n.size);
                            0 !== i && ((void 0 !== o.shouldAdjustScrollPositionOnItemSizeChange ? o.shouldAdjustScrollPositionOnItemSizeChange(n, i, o) : n.start < o.getScrollOffset() + o.scrollAdjustments) && o._scrollToOffset(o.getScrollOffset(), {
                                adjustments: o.scrollAdjustments += i,
                                behavior: void 0
                            }), o.pendingMeasuredCacheIndexes.push(n.index), o.itemSizeCache = new Map(o.itemSizeCache.set(n.key, t)), o.notify(!1))
                        }
                    }, this.measureElement = function(e) {
                        e ? o._measureElement(e, void 0) : o.elementsCache.forEach(function(e, t) {
                            e.isConnected || (o.observer.unobserve(e), o.elementsCache.delete(t))
                        })
                    }, this.getVirtualItems = i(function() {
                        return [o.getVirtualIndexes(), o.getMeasurements()]
                    }, function(e, t) {
                        for (var n = [], r = 0, o = e.length; r < o; r++) {
                            var i = t[e[r]];
                            n.push(i)
                        }
                        return n
                    }, {
                        key: !1,
                        debug: function() {
                            return o.options.debug
                        }
                    }), this.getVirtualItemForOffset = function(e) {
                        var t = o.getMeasurements();
                        if (0 !== t.length) return a(t[g(0, t.length - 1, function(e) {
                            return a(t[e]).start
                        }, e)])
                    }, this.getOffsetForAlignment = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            r = s.getSize(),
                            o = s.getScrollOffset();
                        "auto" === t && (t = e >= o + r ? "end" : "start"), "center" === t ? e += (n - r) / 2 : "end" === t && (e -= r);
                        var i = s.getTotalSize() + s.options.scrollMargin - r;
                        return Math.max(Math.min(i, e), 0)
                    }, this.getOffsetForIndex = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "auto";
                        e = Math.max(0, Math.min(e, s.options.count - 1));
                        var n = s.measurementsCache[e];
                        if (n) {
                            var r = s.getSize(),
                                o = s.getScrollOffset();
                            if ("auto" === t)
                                if (n.end >= o + r - s.options.scrollPaddingEnd) t = "end";
                                else {
                                    if (!(n.start <= o + s.options.scrollPaddingStart)) return [o, t];
                                    t = "start"
                                } var i = "end" === t ? n.end + s.options.scrollPaddingEnd : n.start - s.options.scrollPaddingStart;
                            return [s.getOffsetForAlignment(i, t, n.size), t]
                        }
                    }, this.isDynamicMode = function() {
                        return o.elementsCache.size > 0
                    }, this.scrollToOffset = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.align,
                            r = void 0 === n ? "start" : n,
                            o = t.behavior;
                        "smooth" === o && s.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), s._scrollToOffset(s.getOffsetForAlignment(e, r), {
                            adjustments: void 0,
                            behavior: o
                        })
                    }, this.scrollToIndex = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.align,
                            r = void 0 === n ? "auto" : n,
                            o = t.behavior;
                        "smooth" === o && s.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), e = Math.max(0, Math.min(e, s.options.count - 1));
                        var i = 0,
                            a = function(t) {
                                if (s.targetWindow) {
                                    var n = s.getOffsetForIndex(e, t);
                                    if (n) {
                                        var r = _sliced_to_array(n, 2),
                                            i = r[0],
                                            a = r[1];
                                        s._scrollToOffset(i, {
                                            adjustments: void 0,
                                            behavior: o
                                        }), s.targetWindow.requestAnimationFrame(function() {
                                            var t = s.getScrollOffset(),
                                                n = s.getOffsetForIndex(e, a);
                                            n ? function(e, t) {
                                                return 1.01 > Math.abs(e - t)
                                            }(n[0], t) || l(a) : console.warn("Failed to get offset for index:", e)
                                        })
                                    } else console.warn("Failed to get offset for index:", e)
                                }
                            },
                            l = function(t) {
                                s.targetWindow && (++i < 10 ? s.targetWindow.requestAnimationFrame(function() {
                                    return a(t)
                                }) : console.warn("Failed to scroll to index ".concat(e, " after 10 attempts.")))
                            };
                        a(r)
                    }, this.scrollBy = function(e) {
                        var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).behavior;
                        "smooth" === t && s.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), s._scrollToOffset(s.getScrollOffset() + e, {
                            adjustments: void 0,
                            behavior: t
                        })
                    }, this.getTotalSize = function() {
                        var e, t, n, r = o.getMeasurements();
                        if (0 === r.length) t = o.options.paddingStart;
                        else if (1 === o.options.lanes) t = null !== (n = null == (e = r[r.length - 1]) ? void 0 : e.end) && void 0 !== n ? n : 0;
                        else {
                            for (var i, a = Array(o.options.lanes).fill(null), s = r.length - 1; s >= 0 && a.some(function(e) {
                                    return null === e
                                });) {
                                var l = r[s];
                                null === a[l.lane] && (a[l.lane] = l.end), s--
                            }
                            t = (i = Math).max.apply(i, _to_consumable_array(a.filter(function(e) {
                                return null !== e
                            })))
                        }
                        return Math.max(t - o.options.scrollMargin + o.options.paddingEnd, 0)
                    }, this._scrollToOffset = function(e, t) {
                        var n = t.adjustments,
                            r = t.behavior;
                        o.options.scrollToFn(e, {
                            behavior: r,
                            adjustments: n
                        }, o)
                    }, this.measure = function() {
                        o.itemSizeCache = new Map, o.notify(!1)
                    }, this.setOptions(t)
                },
                g = function(e, t, n, r) {
                    for (; e <= t;) {
                        var o = (e + t) / 2 | 0,
                            i = n(o);
                        if (i < r) e = o + 1;
                        else {
                            if (!(i > r)) return o;
                            t = o - 1
                        }
                    }
                    return e > 0 ? e - 1 : 0
                },
                b = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;

            function y(e) {
                return function(e) {
                    var t = r.useReducer(function() {
                            return {}
                        }, {})[1],
                        n = _object_spread_props(_object_spread({}, e), {
                            onChange: function(n, r) {
                                var i;
                                r ? (0, o.flushSync)(t) : t(), null == (i = e.onChange) || i.call(e, n, r)
                            }
                        }),
                        i = _sliced_to_array(r.useState(function() {
                            return new p(n)
                        }), 1)[0];
                    return i.setOptions(n), b(function() {
                        return i._didMount()
                    }, []), b(function() {
                        return i._willUpdate()
                    }), i
                }(_object_spread({
                    observeElementRect: c,
                    observeElementOffset: h,
                    scrollToFn: v
                }, e))
            }
        }
    }
]);