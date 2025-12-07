function _array_like_to_array(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var o = 0, t = new Array(n); o < n; o++) t[o] = e[o];
    return t
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function _array_without_holes(e) {
    if (Array.isArray(e)) return _array_like_to_array(e)
}

function asyncGeneratorStep(e, n, o, t, r, l, i) {
    try {
        var a = e[l](i),
            s = a.value
    } catch (e) {
        return void o(e)
    }
    a.done ? n(s) : Promise.resolve(s).then(t, r)
}

function _async_to_generator(e) {
    return function() {
        var n = this,
            o = arguments;
        return new Promise(function(t, r) {
            var l = e.apply(n, o);

            function i(e) {
                asyncGeneratorStep(l, t, r, i, a, "next", e)
            }

            function a(e) {
                asyncGeneratorStep(l, t, r, i, a, "throw", e)
            }
            i(void 0)
        })
    }
}

function _define_property(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e
}

function _iterable_to_array(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _iterable_to_array_limit(e, n) {
    var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != o) {
        var t, r, l = [],
            i = !0,
            a = !1;
        try {
            for (o = o.call(e); !(i = (t = o.next()).done) && (l.push(t.value), !n || l.length !== n); i = !0);
        } catch (e) {
            a = !0, r = e
        } finally {
            try {
                i || null == o.return || o.return()
            } finally {
                if (a) throw r
            }
        }
        return l
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _object_spread(e) {
    for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable
        }))), t.forEach(function(n) {
            _define_property(e, n, o[n])
        })
    }
    return e
}

function ownKeys(e, n) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        n && (t = t.filter(function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
        })), o.push.apply(o, t)
    }
    return o
}

function _object_spread_props(e, n) {
    return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(o) {
        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
    }), e
}

function _object_without_properties(e, n) {
    if (null == e) return {};
    var o, t, r = _object_without_properties_loose(e, n);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (t = 0; t < l.length; t++) o = l[t], n.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o])
    }
    return r
}

function _object_without_properties_loose(e, n) {
    if (null == e) return {};
    var o, t, r = {},
        l = Object.keys(e);
    for (t = 0; t < l.length; t++) o = l[t], n.indexOf(o) >= 0 || (r[o] = e[o]);
    return r
}

function _sliced_to_array(e, n) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, n) || _unsupported_iterable_to_array(e, n) || _non_iterable_rest()
}

function _to_consumable_array(e) {
    return _array_without_holes(e) || _iterable_to_array(e) || _unsupported_iterable_to_array(e) || _non_iterable_spread()
}

function _unsupported_iterable_to_array(e, n) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, n);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(o) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _array_like_to_array(e, n) : void 0
    }
}

function _ts_generator(e, n) {
    var o, t, r, l = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        },
        i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return i.next = a(0), i.throw = a(1), i.return = a(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
        return this
    }), i;

    function a(a) {
        return function(s) {
            return function(a) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; i && (i = 0, a[0] && (l = 0)), l;) try {
                    if (o = 1, t && (r = 2 & a[0] ? t.return : a[0] ? t.throw || ((r = t.return) && r.call(t), 0) : t.next) && !(r = r.call(t, a[1])).done) return r;
                    switch (t = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                        case 0:
                        case 1:
                            r = a;
                            break;
                        case 4:
                            return l.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            l.label++, t = a[1], a = [0];
                            continue;
                        case 7:
                            a = l.ops.pop(), l.trys.pop();
                            continue;
                        default:
                            if (!(r = l.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                l = 0;
                                continue
                            }
                            if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                l.label = a[1];
                                break
                            }
                            if (6 === a[0] && l.label < r[1]) {
                                l.label = r[1], r = a;
                                break
                            }
                            if (r && l.label < r[2]) {
                                l.label = r[2], l.ops.push(a);
                                break
                            }
                            r[2] && l.ops.pop(), l.trys.pop();
                            continue
                    }
                    a = n.call(e, l)
                } catch (e) {
                    a = [6, e], t = 0
                } finally {
                    o = r = 0
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }([a, s])
        }
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5113, 5306], {
        66456: function(e, n, o) {
            "use strict";
            o.d(n, {
                ON: function() {
                    return O
                },
                Db: function() {
                    return x
                },
                RP: function() {
                    return f
                },
                go: function() {
                    return C
                },
                C_: function() {
                    return N
                },
                G4: function() {
                    return w
                },
                u7: function() {
                    return P
                },
                BZ: function() {
                    return j
                },
                xG: function() {
                    return G
                },
                eX: function() {
                    return z
                }
            });
            var t = o(32930),
                r = o(40877),
                l = o(5164),
                i = o(78888),
                a = o.n(i),
                s = o(45835),
                c = o(19616),
                u = o(81433),
                d = o.n(u),
                p = o(177),
                _ = o.n(p),
                h = o(70437),
                m = o.n(h),
                v = o(13397),
                b = o.n(v);

            function f() {
                return (0, t.jsx)("div", {
                    className: b()["clickable-coupon"],
                    children: (0, t.jsx)(_(), {
                        children: (0, t.jsx)("div", {
                            className: b()["clickable-coupon__container"],
                            children: (0, t.jsxs)("div", {
                                className: b()["clickable-coupon__skeleton"],
                                children: [(0, t.jsx)(m(), {
                                    width: "200px",
                                    height: "32px",
                                    radius: "8px",
                                    mb: "40px"
                                }), (0, t.jsxs)("div", {
                                    className: b()["clickable-coupon__skeleton-decorations"],
                                    children: [(0, t.jsx)("div", {
                                        className: b()["clickable-coupon__skeleton-decoration--left"],
                                        children: (0, t.jsx)(m(), {
                                            width: "80px",
                                            height: "80px",
                                            radius: "50%"
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: b()["clickable-coupon__skeleton-decoration--right"],
                                        children: (0, t.jsx)(m(), {
                                            width: "90px",
                                            height: "90px",
                                            radius: "50%"
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: b()["clickable-coupon__skeleton-decoration--top-right"],
                                        children: (0, t.jsx)(m(), {
                                            width: "40px",
                                            height: "40px",
                                            radius: "50%"
                                        })
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: b()["clickable-coupon__skeleton-main"],
                                    children: (0, t.jsx)(m(), {
                                        width: "180px",
                                        height: "180px",
                                        radius: "50%"
                                    })
                                }), (0, t.jsx)("div", {
                                    className: b()["clickable-coupon__skeleton-hint"],
                                    children: (0, t.jsx)(m(), {
                                        width: "250px",
                                        height: "20px",
                                        radius: "4px"
                                    })
                                })]
                            })
                        })
                    })
                })
            }
            var k = o(52391),
                y = o.n(k);

            function g(e) {
                var n = e.isPc;
                return (0, t.jsxs)("div", {
                    className: y().bhdp__product,
                    children: [(0, t.jsx)(m(), {
                        width: "100%",
                        height: n ? "180px" : "150px",
                        radius: "12px 12px 0 0"
                    }), (0, t.jsxs)("div", {
                        style: {
                            padding: "16px",
                            backgroundColor: "var(--white)",
                            borderRadius: "0 0 12px 12px"
                        },
                        children: [(0, t.jsx)(m(), {
                            width: "100%",
                            height: "16px",
                            radius: "4px"
                        }), (0, t.jsx)(m(), {
                            width: "80%",
                            height: "14px",
                            radius: "4px",
                            mt: "8px"
                        }), (0, t.jsx)(m(), {
                            width: "60%",
                            height: "14px",
                            radius: "4px",
                            mt: "8px"
                        }), (0, t.jsx)(m(), {
                            width: "70%",
                            height: "20px",
                            radius: "4px",
                            mt: "12px"
                        })]
                    })]
                })
            }

            function x() {
                var e = (0, s.b)().ua.isPc;
                return (0, t.jsx)(_(), {
                    fluid: !0,
                    children: (0, t.jsx)("section", {
                        className: "".concat(y().bhdp, " ").concat(y()["bhdp--skeleton"]),
                        children: (0, t.jsxs)("div", {
                            className: y().bhdp__content,
                            children: [(0, t.jsxs)("div", {
                                className: y()["bhdp__left-section"],
                                children: [(0, t.jsx)("div", {
                                    className: "".concat(y()["bhdp__symbols-percent"], " ").concat(y()["bhdp__symbols-percent--mobile"]),
                                    children: (0, t.jsx)(m(), {
                                        width: "100%",
                                        height: "250px",
                                        radius: "8px"
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: y().bhdp__promotion,
                                    children: [(0, t.jsx)(m(), {
                                        width: e ? "200px" : "180px",
                                        height: e ? "30px" : "24px",
                                        radius: "8px"
                                    }), (0, t.jsx)("div", {
                                        className: y()["bhdp__promotion-countdown"],
                                        children: Array.from({
                                            length: 4
                                        }).map(function(n, o) {
                                            return (0, t.jsx)(m(), {
                                                width: e ? "43px" : "32px",
                                                height: e ? "43px" : "32px",
                                                radius: "4px"
                                            }, o)
                                        })
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: y().bhdp__products,
                                    children: [(0, t.jsx)("div", {
                                        className: y()["bhdp__products--next"],
                                        children: (0, t.jsx)(g, {
                                            isPc: e
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: y()["bhdp__products--deprecated"],
                                        children: (0, t.jsx)(g, {
                                            isPc: e
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: y()["bhdp__products--original"],
                                        children: (0, t.jsx)(g, {
                                            isPc: e
                                        })
                                    })]
                                })]
                            }), (0, t.jsx)("div", {
                                className: y()["bhdp__right-section"],
                                children: (0, t.jsx)(m(), {
                                    width: "100%",
                                    height: "350px",
                                    radius: "8px",
                                    maxWidth: "450px"
                                })
                            })]
                        })
                    })
                })
            }

            function z(e) {
                var n = e.ratio,
                    o = e.className;
                return (0, t.jsx)(d(), {
                    className: (0, r.Z)(a()["single-slider-skeleton"], o),
                    children: (0, t.jsx)("div", {
                        className: a()["single-slider-skeleton__items"],
                        style: {
                            paddingBottom: n ? "".concat((100 * n).toFixed(3), "%") : "60%"
                        },
                        children: (0, t.jsx)(m(), {
                            width: "100%",
                            height: "100%",
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            className: a()["single-slider-skeleton__item"]
                        })
                    })
                })
            }

            function j() {
                return (0, t.jsx)(d(), {
                    className: a()["horizontal-quick-access-skeleton"],
                    children: (0, t.jsx)(d(), {
                        className: a()["horizontal-quick-access-skeleton__items"],
                        children: (0, l.range)(4).map(function(e, n) {
                            return (0, t.jsxs)(d(), {
                                className: a()["horizontal-quick-access-skeleton__item"],
                                children: [(0, t.jsx)(m(), {
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)",
                                    width: "100%",
                                    radius: "50%",
                                    className: a()["horizontal-quick-access-skeleton__item-image"]
                                }), (0, t.jsx)(m(), {
                                    className: a()["horizontal-quick-access-skeleton__item-text"]
                                })]
                            }, n)
                        })
                    })
                })
            }

            function w() {
                return (0, t.jsxs)(d(), {
                    className: a()["horizontal-product-popular-skeleton"],
                    children: [(0, t.jsx)(m(), {
                        className: a()["horizontal-product-popular-skeleton__title"]
                    }), (0, t.jsx)(d(), {
                        className: a()["horizontal-product-popular-skeleton__items"],
                        children: (0, l.range)(2).map(function(e, n) {
                            return (0, t.jsxs)(d(), {
                                className: a()["horizontal-product-popular-skeleton__item"],
                                children: [(0, t.jsx)(d(), {
                                    className: a()["horizontal-product-popular-skeleton__item-image"],
                                    children: (0, t.jsx)(m(), {
                                        className: a()["horizontal-product-popular-skeleton__item-image-sk"]
                                    })
                                }), (0, t.jsxs)(d(), {
                                    className: a()["horizontal-product-popular-skeleton__item-body"],
                                    children: [(0, t.jsx)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-title"],
                                        children: (0, t.jsx)(m(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-title-sk"]
                                        })
                                    }), (0, t.jsxs)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-vendor-rate"],
                                        children: [(0, t.jsx)(m(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-vendor-sk"]
                                        }), (0, t.jsx)(m(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-rate-sk"]
                                        })]
                                    }), (0, t.jsxs)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-price-tag"],
                                        children: [(0, t.jsx)(m(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-price-sk"]
                                        }), (0, t.jsx)(m(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-tag-sk"]
                                        })]
                                    }), (0, t.jsx)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-add"],
                                        children: (0, t.jsx)(m(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-add-sk"]
                                        })
                                    })]
                                })]
                            }, n)
                        })
                    })]
                })
            }

            function N() {
                return (0, t.jsxs)(d(), {
                    className: a()["horizontal-product-popular-skeleton"],
                    children: [(0, t.jsx)(m(), {
                        className: a()["horizontal-product-popular-skeleton__title"]
                    }), (0, t.jsx)(d(), {
                        className: a()["horizontal-product-popular-skeleton__items"],
                        children: (0, l.range)(2).map(function(e, n) {
                            return (0, t.jsxs)(d(), {
                                className: a()["horizontal-product-popular-skeleton__item"],
                                children: [(0, t.jsx)(d(), {
                                    className: a()["horizontal-product-popular-skeleton__item-image"],
                                    children: (0, t.jsx)(m(), {
                                        className: a()["horizontal-product-popular-skeleton__item-image-sk"]
                                    })
                                }), (0, t.jsxs)(d(), {
                                    className: a()["horizontal-product-popular-skeleton__item-body"],
                                    children: [(0, t.jsx)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-title"],
                                        children: (0, t.jsx)(m(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-title-sk"]
                                        })
                                    }), (0, t.jsxs)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-vendor-rate"],
                                        children: [(0, t.jsx)(m(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-vendor-sk"]
                                        }), (0, t.jsx)(m(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-rate-sk"]
                                        })]
                                    }), (0, t.jsx)(d(), {
                                        className: a()["horizontal-product-popular-skeleton__item-product-price-tag"],
                                        children: (0, t.jsx)(m(), {
                                            className: a()["horizontal-product-popular-skeleton__item-product-price-sk"]
                                        })
                                    })]
                                })]
                            }, n)
                        })
                    })]
                })
            }

            function P() {
                var e = (0, s.b)().ua;
                return (0, t.jsxs)(d(), {
                    className: a()["horizontal-product-timely-skeleton"],
                    children: [(0, t.jsxs)("div", {
                        className: a()["horizontal-product-timely-skeleton__header"],
                        children: [(0, t.jsx)("div", {
                            className: a()["horizontal-product-timely-skeleton__header-icon"],
                            children: (0, t.jsx)(m(), {
                                className: a()["horizontal-product-timely-skeleton__icon"]
                            })
                        }), (0, t.jsxs)("div", {
                            className: a()["horizontal-product-timely-skeleton__header-content"],
                            children: [(0, t.jsx)(m(), {
                                className: a()["horizontal-product-timely-skeleton__header-title"]
                            }), (0, t.jsx)(m(), {
                                className: a()["horizontal-product-timely-skeleton__header-show-all"]
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: a()["horizontal-product-timely-skeleton__items"],
                        children: [(0, t.jsx)(c.Z, {
                            className: a()["horizontal-product-timely-skeleton__item"],
                            discountMode: !0,
                            multipleLabels: !!e.isPc || void 0
                        }), (0, t.jsx)(c.Z, {
                            className: a()["horizontal-product-timely-skeleton__item"],
                            multipleLabels: !!e.isPc || void 0,
                            discountMode: !0
                        })]
                    })]
                })
            }

            function C() {
                var e = (0, s.b)().ua;
                return (0, t.jsxs)("div", {
                    className: a()["daily-off-category-products-skeleton"],
                    children: [(0, t.jsx)("div", {
                        className: a()["daily-off-category-products-skeleton__header"],
                        children: (0, t.jsx)(m(), {
                            className: a()["daily-off-category-products-skeleton__header-title"]
                        })
                    }), (0, t.jsxs)("div", {
                        className: a()["daily-off-category-products-skeleton__inner"],
                        children: [(0, t.jsx)("div", {
                            className: a()["daily-off-category-products-skeleton__content"],
                            children: (0, t.jsx)(c.Z, {
                                isHorizontal: !0
                            })
                        }), (0, t.jsx)("div", {
                            className: a()["daily-off-category-products-skeleton__carousel"],
                            children: (0, l.range)(5).map(function(n, o) {
                                return (0, t.jsxs)("div", {
                                    className: (0, r.Z)([a()["daily-off-category-products-skeleton__slide"]]),
                                    children: [(0, t.jsx)(m(), {
                                        className: a()["daily-off-category-products-skeleton__products-img"]
                                    }), (0, t.jsx)("p", {
                                        className: a()["daily-off-category-products-skeleton__products-title"],
                                        style: {
                                            display: e.isMobile ? "none" : "block"
                                        },
                                        children: (0, t.jsx)(m(), {
                                            width: "100px",
                                            height: "20px"
                                        })
                                    })]
                                }, o)
                            })
                        })]
                    })]
                })
            }

            function O() {
                var e = (0, s.b)().ua;
                return (0, t.jsx)(_(), {
                    fluid: !0,
                    children: (0, t.jsxs)("div", {
                        className: a()["bbt-skeleton"],
                        children: [(0, t.jsx)(m(), {
                            className: a()["bbt-skeleton__item"],
                            width: "100%",
                            height: "100%"
                        }), !e.isPc && (0, t.jsx)(m(), {
                            className: a()["bbt-skeleton__item"],
                            width: "100%",
                            height: "100%"
                        })]
                    })
                })
            }

            function G() {
                return (0, t.jsxs)(d(), {
                    className: a()["skeleton-horizontal-vendor-coupons"],
                    children: [(0, t.jsxs)(d(), {
                        pl: 24,
                        pr: 24,
                        mb: 16,
                        children: [(0, t.jsx)(m(), {
                            className: a()["skeleton-horizontal-vendor-coupons__title"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)"
                        }), (0, t.jsx)(m(), {
                            className: a()["skeleton-horizontal-vendor-coupons__subtitle"],
                            backgroundColor: "var(--gray-100)",
                            waveColor: "var(--gray-200)",
                            width: 100
                        })]
                    }), (0, t.jsx)("div", {
                        className: a()["skeleton-horizontal-vendor-coupons__items"],
                        children: (0, t.jsxs)("div", {
                            className: a()["skeleton-horizontal-vendor-coupons__item"],
                            children: [(0, t.jsxs)("div", {
                                className: a()["skeleton-horizontal-vendor-coupons__item-header"],
                                children: [(0, t.jsx)("div", {
                                    className: "skeleton-horizontal-vendor-coupons__item-header-icon-container",
                                    children: (0, t.jsx)(m(), {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-header-icon"],
                                        backgroundColor: "var(--gray-100)",
                                        waveColor: "var(--gray-200)"
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: a()["skeleton-horizontal-vendor-coupons__item-header-title-container"],
                                    children: [(0, t.jsx)(m(), {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-header-title"],
                                        backgroundColor: "var(--gray-100)",
                                        waveColor: "var(--gray-200)"
                                    }), (0, t.jsx)(m(), {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-header-subtitle"],
                                        backgroundColor: "var(--gray-100)",
                                        waveColor: "var(--gray-200)"
                                    })]
                                })]
                            }), (0, t.jsx)("div", {
                                className: a()["skeleton-horizontal-vendor-coupons__divider"]
                            }), (0, t.jsxs)("div", {
                                className: a()["skeleton-horizontal-vendor-coupons__item-images-container"],
                                children: [(0, t.jsx)(m(), {
                                    className: a()["skeleton-horizontal-vendor-coupons__item-images-vendor"],
                                    backgroundColor: "var(--gray-100)",
                                    waveColor: "var(--gray-200)"
                                }), (0, t.jsxs)("div", {
                                    className: a()["skeleton-horizontal-vendor-coupons__item-images"],
                                    children: [(0, t.jsx)("div", {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-image"],
                                        children: (0, t.jsx)(m(), {
                                            className: a()["skeleton-horizontal-vendor-coupons__item-image-img"]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-image"],
                                        children: (0, t.jsx)(m(), {
                                            className: a()["skeleton-horizontal-vendor-coupons__item-image-img"]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-image"],
                                        children: (0, t.jsx)(m(), {
                                            className: a()["skeleton-horizontal-vendor-coupons__item-image-img"]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: a()["skeleton-horizontal-vendor-coupons__item-image"],
                                        children: (0, t.jsx)(m(), {
                                            className: a()["skeleton-horizontal-vendor-coupons__item-image-img"]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        71963: function(e, n, o) {
            "use strict";
            o.d(n, {
                c: function() {
                    return ye
                },
                w: function() {
                    return ke
                }
            });
            var t = o(2389),
                r = o.n(t),
                l = o(26491),
                i = o(66456),
                a = r()(function() {
                    return Promise.all([o.e(6999), o.e(7957)]).then(o.bind(o, 57957))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [57957]
                        }
                    },
                    ssr: !0
                }),
                s = r()(function() {
                    return o.e(6447).then(o.bind(o, 46447))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [46447]
                        }
                    },
                    ssr: !0
                }),
                c = r()(function() {
                    return Promise.all([o.e(3620), o.e(8231), o.e(2639), o.e(1740), o.e(3063)]).then(o.bind(o, 69664))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [69664]
                        }
                    },
                    ssr: !0
                }),
                u = r()(function() {
                    return Promise.all([o.e(5434), o.e(7978)]).then(o.bind(o, 57978))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [57978]
                        }
                    },
                    ssr: !0
                }),
                d = r()(function() {
                    return o.e(5467).then(o.bind(o, 85467))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [85467]
                        }
                    },
                    ssr: !0
                }),
                p = r()(function() {
                    return o.e(921).then(o.bind(o, 10921))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [10921]
                        }
                    },
                    ssr: !0
                }),
                _ = r()(function() {
                    return o.e(1100).then(o.bind(o, 51100))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [51100]
                        }
                    },
                    ssr: !0
                }),
                h = r()(function() {
                    return Promise.all([o.e(5434), o.e(5135)]).then(o.bind(o, 65135))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [65135]
                        }
                    },
                    ssr: !0
                }),
                m = r()(function() {
                    return Promise.all([o.e(3620), o.e(3941), o.e(928), o.e(6974)]).then(o.bind(o, 81313))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [81313]
                        }
                    },
                    ssr: !0
                }),
                v = r()(function() {
                    return Promise.all([o.e(296), o.e(3620), o.e(7339), o.e(1558), o.e(1150)]).then(o.bind(o, 26964))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [26964]
                        }
                    },
                    ssr: !0
                }),
                b = r()(function() {
                    return o.e(3217).then(o.bind(o, 33217))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [33217]
                        }
                    },
                    ssr: !0,
                    loading: i.ON
                }),
                f = r()(function() {
                    return Promise.all([o.e(3620), o.e(9606)]).then(o.bind(o, 9606))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [9606]
                        }
                    },
                    ssr: !0
                }),
                k = r()(function() {
                    return Promise.all([o.e(8231), o.e(5798)]).then(o.bind(o, 35798))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [35798]
                        }
                    },
                    ssr: !0,
                    loading: i.BZ
                }),
                y = r()(function() {
                    return Promise.all([o.e(7339), o.e(377)]).then(o.bind(o, 84419))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [84419]
                        }
                    },
                    ssr: !0
                }),
                g = r()(function() {
                    return Promise.all([o.e(3620), o.e(7586)]).then(o.bind(o, 67586))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [67586]
                        }
                    },
                    ssr: !0
                }),
                x = r()(function() {
                    return Promise.all([o.e(296), o.e(8231), o.e(7339), o.e(1558), o.e(4086)]).then(o.bind(o, 21861))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [21861]
                        }
                    },
                    ssr: !0,
                    loading: i.u7
                }),
                z = r()(function() {
                    return Promise.all([o.e(3620), o.e(5939)]).then(o.bind(o, 15939))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [15939]
                        }
                    },
                    ssr: !0
                }),
                j = r()(function() {
                    return Promise.all([o.e(8231), o.e(7339), o.e(717), o.e(4813)]).then(o.bind(o, 27410))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [27410]
                        }
                    },
                    ssr: !0,
                    loading: i.G4
                }),
                w = r()(function() {
                    return o.e(8529).then(o.bind(o, 98529))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [98529]
                        }
                    },
                    ssr: !0,
                    loading: i.C_
                }),
                N = r()(function() {
                    return Promise.all([o.e(3620), o.e(7339), o.e(5632)]).then(o.bind(o, 27900))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [27900]
                        }
                    },
                    ssr: !0,
                    loading: i.go
                }),
                P = r()(function() {
                    return Promise.all([o.e(3620), o.e(1122)]).then(o.bind(o, 1122))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [1122]
                        }
                    },
                    ssr: !0
                }),
                C = r()(function() {
                    return o.e(6214).then(o.bind(o, 46214))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [46214]
                        }
                    },
                    ssr: !0,
                    loading: i.xG
                }),
                O = r()(function() {
                    return Promise.all([o.e(296), o.e(3620), o.e(7339), o.e(6160), o.e(5347)]).then(o.bind(o, 30878))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [30878]
                        }
                    },
                    ssr: !0
                }),
                G = r()(function() {
                    return o.e(959).then(o.bind(o, 10959))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [10959]
                        }
                    },
                    ssr: !0
                }),
                H = r()(function() {
                    return Promise.all([o.e(3620), o.e(7339), o.e(8920)]).then(o.bind(o, 10829))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [10829]
                        }
                    },
                    ssr: !0
                }),
                Z = r()(function() {
                    return Promise.all([o.e(3620), o.e(9836), o.e(4266), o.e(8454), o.e(7726)]).then(o.bind(o, 8634))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8634]
                        }
                    },
                    ssr: !0
                }),
                S = r()(function() {
                    return Promise.all([o.e(7339), o.e(3907)]).then(o.bind(o, 74754))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [74754]
                        }
                    },
                    ssr: !0
                }),
                B = r()(function() {
                    return Promise.all([o.e(7339), o.e(3222)]).then(o.bind(o, 21653))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [21653]
                        }
                    },
                    ssr: !0,
                    loading: i.Db
                }),
                E = r()(function() {
                    return o.e(9811).then(o.bind(o, 59811))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [59811]
                        }
                    },
                    ssr: !0,
                    loading: i.RP
                }),
                A = r()(function() {
                    return Promise.all([o.e(296), o.e(3620), o.e(5382), o.e(7339), o.e(3598), o.e(6160), o.e(8712)]).then(o.bind(o, 13160))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [13160]
                        }
                    },
                    ssr: !0
                }),
                I = r()(function() {
                    return Promise.all([o.e(3620), o.e(2438)]).then(o.bind(o, 22438))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [22438]
                        }
                    },
                    ssr: !0
                }),
                V = r()(function() {
                    return o.e(680).then(o.bind(o, 90680))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [90680]
                        }
                    },
                    ssr: !0,
                    loading: i.eX
                }),
                L = r()(function() {
                    return o.e(662).then(o.bind(o, 662))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [662]
                        }
                    },
                    ssr: !0
                }),
                D = r()(function() {
                    return o.e(5512).then(o.bind(o, 5512))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [5512]
                        }
                    },
                    ssr: !0
                }),
                T = (0, l.Z)({
                    on: ["visible"]
                })(V),
                q = (0, l.Z)({
                    on: ["visible"]
                })(a),
                F = (0, l.Z)({
                    on: ["visible"]
                })(s),
                R = (0, l.Z)({
                    on: ["visible"]
                })(c),
                W = (0, l.Z)({
                    on: ["visible"]
                })(A),
                M = (0, l.Z)({
                    on: ["visible"]
                })(Z),
                Q = (0, l.Z)({
                    on: ["visible"]
                })(u),
                X = (0, l.Z)({
                    on: ["visible"]
                })(d),
                Y = (0, l.Z)({
                    on: ["visible"]
                })(p),
                K = (0, l.Z)({
                    on: ["visible"]
                })(_),
                U = (0, l.Z)({
                    on: ["visible"]
                })(h),
                J = (0, l.Z)({
                    on: ["visible"]
                })(m),
                $ = (0, l.Z)({
                    on: ["visible"]
                })(H),
                ee = (0, l.Z)({
                    on: ["visible"]
                })(v),
                ne = (0, l.Z)({
                    on: ["visible"]
                })(b),
                oe = (0, l.Z)({
                    on: ["visible"]
                })(f),
                te = (0, l.Z)({
                    on: ["visible"]
                })(w),
                re = (0, l.Z)({
                    on: ["visible"]
                })(k),
                le = (0, l.Z)({
                    on: ["visible"]
                })(y),
                ie = (0, l.Z)({
                    on: ["visible"]
                })(g),
                ae = (0, l.Z)({
                    on: ["visible"]
                })(I),
                se = (0, l.Z)({
                    on: ["visible"]
                })(x),
                ce = (0, l.Z)({
                    on: ["visible"]
                })(z),
                ue = (0, l.Z)({
                    on: ["visible"]
                })(j),
                de = (0, l.Z)({
                    on: ["visible"]
                })(P),
                pe = (0, l.Z)({
                    on: ["visible"]
                })(N),
                _e = (0, l.Z)({
                    on: ["visible"]
                })(L),
                he = (0, l.Z)({
                    on: ["visible"]
                })(D),
                me = (0, l.Z)({
                    on: ["visible"]
                })(C),
                ve = (0, l.Z)({
                    on: ["visible"]
                })(G),
                be = (0, l.Z)({
                    on: ["visible"]
                })(S),
                fe = (0, l.Z)({
                    on: ["visible"]
                })(B),
                ke = {
                    IranMap: q,
                    TextBox: F,
                    StoryBar: R,
                    SingleSlider: T,
                    ExploreSearch: W,
                    HomeCouponList: M,
                    ExploreMarkdown: Q,
                    ExpandableVideo: X,
                    VideoViewSingle: Y,
                    CouponCardsList: K,
                    ExploreBnplDebt: he,
                    ClickableCoupon: (0, l.Z)({
                        on: ["visible"]
                    })(E),
                    CollapseMarkdown: U,
                    HorizontalReview: J,
                    TimeLimitedOffer: $,
                    CouponProductLine: ee,
                    ExploreBnplCredit: _e,
                    BannerBannerTriple: ne,
                    HorizontalVideoSlide: oe,
                    HorizontalPGPPopular: te,
                    HorizontalQuickAccess: re,
                    VerticalProductTimely: le,
                    HorizontalCategoryView: ie,
                    HorizontalBrandPopular: ae,
                    HorizontalProductTimely: se,
                    HorizontalProductVideos: ce,
                    HorizontalVendorCoupons: me,
                    HorizontalProductPopular: ue,
                    HorizontalVendorWithChat: de,
                    DailyOffCategoryProducts: pe,
                    HorizontalCategoryViewHome: ve,
                    HorizontalDiscountedProducts: be,
                    HorizontalProductTimelyBasalam: (0, l.Z)({
                        on: ["visible"]
                    })(O),
                    BigHorizontalDiscountedProducts: fe
                },
                ye = {
                    iran_map: "IranMap",
                    text_box: "TextBox",
                    story_bar: "StoryBar",
                    markdown: "ExploreMarkdown",
                    single_slider: "SingleSlider",
                    explore_search: "ExploreSearch",
                    home_coupon_list: "HomeCouponList",
                    expandable_video: "ExpandableVideo",
                    clickable_coupon: "ClickableCoupon",
                    video_view_single: "VideoViewSingle",
                    coupon_cards_list: "CouponCardsList",
                    explore_bnpl_debt: "ExploreBnplDebt",
                    collapse_markdown: "CollapseMarkdown",
                    horizontal_review: "HorizontalReview",
                    time_limited_offer: "TimeLimitedOffer",
                    coupon_product_line: "CouponProductLine",
                    explore_bnpl_credit: "ExploreBnplCredit",
                    banner_banner_tripple: "BannerBannerTriple",
                    horizontal_video_slide: "HorizontalVideoSlide",
                    horizontal_pgp_popular: "HorizontalPGPPopular",
                    horizontal_quick_access: "HorizontalQuickAccess",
                    vertical_product_timely: "VerticalProductTimely",
                    horizontal_category_view: "HorizontalCategoryView",
                    horizontal_brand_popular: "HorizontalBrandPopular",
                    horizontal_product_timely: "HorizontalProductTimely",
                    horizontal_product_videos: "HorizontalProductVideos",
                    horizontal_vendor_coupons: "HorizontalVendorCoupons",
                    horizontal_product_popular: "HorizontalProductPopular",
                    horizontal_vendor_with_chat: "HorizontalVendorWithChat",
                    daily_off_category_products: "DailyOffCategoryProducts",
                    horizontal_category_view_home: "HorizontalCategoryViewHome",
                    horizontal_discounted_products: "HorizontalDiscountedProducts",
                    horizontal_product_timely_basalam: "HorizontalProductTimelyBasalam",
                    big_horizontal_discounted_products: "BigHorizontalDiscountedProducts"
                }
        },
        19361: function(e, n, o) {
            "use strict";
            o.d(n, {
                XA: function() {
                    return l
                },
                ow: function() {
                    return i
                },
                wz: function() {
                    return a
                }
            });
            var t = o(71963),
                r = function(e) {
                    var n, o, t;
                    return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && "number" == typeof(null == e ? void 0 : e.price) && (null == e || null === (n = e.photo) || void 0 === n ? void 0 : n.small) && (null == e || null === (o = e.vendor) || void 0 === o ? void 0 : o.name) && (null == e || null === (t = e.vendor) || void 0 === t ? void 0 : t.identifier)
                },
                l = function(e) {
                    var n = e || {},
                        o = n.ui,
                        t = n.name,
                        l = n.result;
                    if (!o || !t) return !1;
                    var i = !0;
                    switch (o) {
                        case "iran_map":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    if ("number" != typeof(null == e ? void 0 : e.id)) return !1;
                                    var o = null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.provinces;
                                    return (null == o ? void 0 : o.length) > 0 && o.every(function(e) {
                                        return (null == e ? void 0 : e.url) && (null == e ? void 0 : e.name) && (null == e ? void 0 : e.title)
                                    })
                                })
                            }(l);
                            break;
                        case "text_box":
                            i = function(e) {
                                var n, o, t, r, l, i, a, s, c, u, d, p, _ = null == e ? void 0 : e.metaData,
                                    h = (null == _ || null === (n = _.body) || void 0 === n ? void 0 : n.text) && (null == _ || null === (o = _.body) || void 0 === o ? void 0 : o.color) && (null == _ || null === (r = _.body) || void 0 === r || null === (t = r.size) || void 0 === t ? void 0 : t.desktop) && (null == _ || null === (i = _.body) || void 0 === i || null === (l = i.size) || void 0 === l ? void 0 : l.mobile),
                                    m = (null == _ || null === (a = _.title) || void 0 === a ? void 0 : a.text) && (null == _ || null === (s = _.title) || void 0 === s ? void 0 : s.color) && (null == _ || null === (u = _.title) || void 0 === u || null === (c = u.size) || void 0 === c ? void 0 : c.desktop) && (null == _ || null === (p = _.title) || void 0 === p || null === (d = p.size) || void 0 === d ? void 0 : d.mobile);
                                return h || m
                            }(e);
                            break;
                        case "story_bar":
                            i = function(e) {
                                var n, o = null == e ? void 0 : e.metaData;
                                return (null == o || null === (n = o.userIds) || void 0 === n ? void 0 : n.length) > 0
                            }(e);
                            break;
                        case "breadcrumbs":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, o, t;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.slug) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.title) && "number" == typeof(null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.parentId)
                                })
                            }(l);
                            break;
                        case "single_slider":
                        case "banner_banner_slider":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, o, t, r;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (o = e.metadata) || void 0 === o || null === (n = o.image) || void 0 === n ? void 0 : n.large) && (null == e || null === (r = e.metadata) || void 0 === r || null === (t = r.image) || void 0 === t ? void 0 : t.small)
                                })
                            }(l);
                            break;
                        case "product_target":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return null == e ? void 0 : e.metadata
                                })
                            }(l);
                            break;
                        case "sales_targeting":
                            i = function(e, n) {
                                var o = null == e ? void 0 : e.metaData;
                                return !!((null == o ? void 0 : o.endDate) && (null == n ? void 0 : n.length) && (null == o || !o.reward || Array.isArray(o.reward) && o.reward.every(function(e) {
                                    return "number" == typeof(null == e ? void 0 : e.id) && (null == e ? void 0 : e.label) && (null == e ? void 0 : e.description)
                                }))) && n.every(function(e) {
                                    var n;
                                    return "number" == typeof(null == e ? void 0 : e.id) && (null == e ? void 0 : e.metadata) && "number" == typeof(null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.vendorId)
                                })
                            }(e, l);
                            break;
                        case "comments_slider":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, o, t, r, l;
                                    return !!((null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.name) && (null == e || null === (o = e.metadata) || void 0 === o || !o.vendor || (null == e || null === (r = e.metadata) || void 0 === r || null === (t = r.vendor) || void 0 === t ? void 0 : t.name)) && (null == e || null === (l = e.metadata) || void 0 === l ? void 0 : l.comments) && Array.isArray(e.metadata.comments) && e.metadata.comments.every(function(e) {
                                        return (null == e ? void 0 : e.user) && (null == e ? void 0 : e.text)
                                    }))
                                })
                            }(l);
                            break;
                        case "markdown":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    return "number" == typeof(null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.text)
                                })
                            }(l);
                            break;
                        case "expandable_video":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, o;
                                    return (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.url) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.thumbnail)
                                })
                            }(l);
                            break;
                        case "video_view_single":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    return null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.url
                                })
                            }(l);
                            break;
                        case "coupon_cards_list":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.couponCode)
                                })
                            }(l);
                            break;
                        case "collapse_markdown":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, o;
                                    return (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.title) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.text)
                                })
                            }(l);
                            break;
                        case "horizontal_review":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return !("number" != typeof(null == e ? void 0 : e.id) || "number" != typeof(null == e ? void 0 : e.userId) || !(null == e ? void 0 : e.description) || !r(null == e ? void 0 : e.product))
                                })
                            }(l);
                            break;
                        case "coupon_product_line":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return !!r(e)
                                })
                            }(l);
                            break;
                        case "wishlist_horizontal":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, o, t;
                                    return !(!(null == e ? void 0 : e.listId) || !(null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.id) || "number" != typeof(null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.itemsCount) || (null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.products) && Array.isArray(e.metadata.products) && !e.metadata.products.every(function(e) {
                                        return r(e)
                                    }))
                                })
                            }(l);
                            break;
                        case "horizontal_category_view_home":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, o;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.link) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.title)
                                })
                            }(l);
                            break;
                        case "horizontal_product_popular":
                        case "vertical_product_timely":
                        case "horizontal_product_timely":
                        case "horizontal_product_highlight":
                        case "horizontal_product_app_timely":
                        case "time_limited_offer":
                        case "special_category_products":
                        case "horizontal_discounted_products":
                        case "big_horizontal_discounted_products":
                        case "daily_off_category_products":
                        case "horizontal_product_timely_basalam":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return r(e)
                                })
                            }(l);
                            break;
                        case "horizontal_pgp_popular":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return null == e ? void 0 : e.uuid
                                })
                            }(l);
                            break;
                        case "banner_banner_tripple":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    if (!(null == e ? void 0 : e.id)) return !1;
                                    var o = null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.banners;
                                    return (null == o ? void 0 : o.length) > 0 && o.every(function(e) {
                                        return null == e ? void 0 : e.image
                                    })
                                })
                            }(l);
                            break;
                        case "banner_triple_slider":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, o = null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.banners;
                                    return (null == o ? void 0 : o.length) > 0 && o.every(function(e) {
                                        var n, o;
                                        return (null == e || null === (n = e.image) || void 0 === n ? void 0 : n.large) && (null == e || null === (o = e.image) || void 0 === o ? void 0 : o.small)
                                    })
                                })
                            }(l);
                            break;
                        case "vertical_video_slide":
                        case "horizontal_video_slide":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, o, t, r, l;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.length) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.thumbnail) && (null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.video) && (null == e || null === (l = e.metadata) || void 0 === l || null === (r = l.video) || void 0 === r ? void 0 : r.medium)
                                })
                            }(l);
                            break;
                        case "horizontal_quick_access":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, o, t;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.link) && (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.image) && (null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.title)
                                })
                            }(l);
                            break;
                        case "horizontal_category_view":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    return (null == e ? void 0 : e.id) && (null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.title)
                                })
                            }(l);
                            break;
                        case "horizontal_product_videos":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n;
                                    return r(e) && (null == e || null === (n = e.video) || void 0 === n ? void 0 : n.small)
                                })
                            }(l);
                            break;
                        case "horizontal_vendor_with_chat":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return function(e) {
                                        var n;
                                        return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && (null == e ? void 0 : e.identifier) && (null == e || null === (n = e.user) || void 0 === n ? void 0 : n.name)
                                    }(e)
                                })
                            }(l);
                            break;
                        case "home_coupon_list":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return null == e ? void 0 : e.id
                                })
                            }(l);
                            break;
                        case "explore_search":
                        case "explore_bnpl_credit":
                        case "explore_bnpl_debt":
                        case "clickable_coupon":
                            i = !0;
                            break;
                        case "horizontal_brand_popular":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    return e.metadata && e.metadata.title && e.metadata.image && e.metadata.link
                                })
                            }(l);
                            break;
                        case "horizontal_vendor_coupons":
                            i = function(e) {
                                return null != e && !!e.length && e.every(function(e) {
                                    var n, o, t, r;
                                    return !!(null != e && e.id && null != e && null !== (n = e.vendor) && void 0 !== n && n.name && null != e && null !== (o = e.vendor) && void 0 !== o && o.identifier && Array.isArray(null == e || null === (t = e.vendor) || void 0 === t ? void 0 : t.products) && (null == e || null === (r = e.vendor) || void 0 === r ? void 0 : r.products.every(function(e) {
                                        var n;
                                        return "number" == typeof(null == e ? void 0 : e.id) && (null == e ? void 0 : e.name) && (null == e || null === (n = e.photo) || void 0 === n ? void 0 : n.small)
                                    })))
                                })
                            }(l);
                            break;
                        default:
                            i = !1
                    }
                    return i
                },
                i = function(e) {
                    var n = t.c[e.ui],
                        o = t.w[n];
                    return o && void 0 !== o ? {
                        items: e,
                        name: e.ui,
                        component: o
                    } : null
                },
                a = function(e, n) {
                    for (var o = [], t = e.length, r = 0; r < t; r += 1) {
                        var a = e[r];
                        if (n ? n(a) : l(a)) {
                            var s = i(a);
                            s && o.push(s)
                        }
                    }
                    return o
                }
        },
        26491: function(e, n, o) {
            "use strict";
            var t = o(32930),
                r = o(43828),
                l = o(5164),
                i = o(27434),
                a = (0, l.isClientSide)(),
                s = {
                    once: !0,
                    capture: !0,
                    passive: !0
                },
                c = function(e) {
                    return function(n) {
                        var o = n.wrapperProps,
                            r = _object_without_properties(n, ["wrapperProps"]);
                        return (0, t.jsx)("section", _object_spread_props(_object_spread({
                            "data-hydration-on-demand": !0
                        }, o), {
                            children: (0, t.jsx)(e, _object_spread({}, r))
                        }))
                    }
                },
                u = function(e) {
                    var n = e.on,
                        o = void 0 === n ? [] : n,
                        l = e.onBefore,
                        a = e.disableFallback,
                        c = void 0 !== a && a,
                        u = e.whenInputPending,
                        d = void 0 !== u && u,
                        p = e.isInputPendingFallbackValue,
                        _ = void 0 === p || p;
                    return function(e) {
                        var n = function(n) {
                            var a = n.wrapperProps,
                                u = n.forceHydration,
                                p = void 0 !== u && u,
                                h = n.isServerRendered,
                                m = void 0 === h || h,
                                v = _object_without_properties(n, ["wrapperProps", "forceHydration", "isServerRendered"]),
                                b = (0, i.useRef)(null),
                                f = (0, i.useRef)([]),
                                k = (0, r.useRouter)(),
                                y = function() {
                                    var e = d && ! function() {
                                        var e, n, o, t = null === (o = navigator) || void 0 === o || null === (n = o.scheduling) || void 0 === n || null === (e = n.isInputPending) || void 0 === e ? void 0 : e.call(n);
                                        return null != t ? t : _
                                    }();
                                    return (e || p || !m) && !l
                                },
                                g = _sliced_to_array((0, i.useState)(function() {
                                    return y()
                                }), 2),
                                x = g[0],
                                z = g[1],
                                j = _sliced_to_array((0, i.useState)(!0), 2),
                                w = j[0],
                                N = j[1],
                                P = function() {
                                    f.current.forEach(function(e) {
                                        return e()
                                    }), f.current = []
                                },
                                C = function() {
                                    return _async_to_generator(function() {
                                        var e, n = arguments;
                                        return _ts_generator(this, function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return e = !(n.length > 0) || void 0 === n[0] || n[0], P(), x ? [3, 3] : l ? [4, l()] : [3, 2];
                                                case 1:
                                                    o.sent(), o.label = 2;
                                                case 2:
                                                    z(!0), o.label = 3;
                                                case 3:
                                                    return N(e), [2]
                                            }
                                        })
                                    }).apply(this, arguments)
                                },
                                O = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3;
                                    if (!(e <= 0)) {
                                        var n = setTimeout(function() {
                                            return C(!1)
                                        }, e);
                                        f.current.push(function() {
                                            return clearTimeout(n)
                                        })
                                    }
                                },
                                G = function(e, n) {
                                    switch (e) {
                                        case "delay":
                                            O(n);
                                            break;
                                        case "visible":
                                            ! function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Function.prototype;
                                                if ("IntersectionObserver" in window) {
                                                    var n = e(),
                                                        o = new IntersectionObserver(function(e) {
                                                            var n = _sliced_to_array(e, 1)[0];
                                                            n.isIntersecting && n.intersectionRatio > 0 && C(!1)
                                                        }, n);
                                                    f.current.push(function() {
                                                        o && o.disconnect()
                                                    }), o.observe(b.current)
                                                } else C(!1)
                                            }(n);
                                            break;
                                        case "idle":
                                            ! function() {
                                                if ("requestIdleCallback" in window) {
                                                    var e = requestIdleCallback(function() {
                                                        return requestAnimationFrame(function() {
                                                            return C(!1)
                                                        })
                                                    }, {
                                                        timeout: 500
                                                    });
                                                    "cancelIdleCallback" in window && f.current.push(function() {
                                                        cancelIdleCallback(e)
                                                    })
                                                } else O()
                                            }();
                                            break;
                                        default:
                                            ! function(e) {
                                                var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                                                    return b.current
                                                })();
                                                n.addEventListener(e, function() {
                                                    return C(!1)
                                                }, s), f.current.push(function() {
                                                    n && n.removeEventListener(e, function() {
                                                        return C(!1)
                                                    }, s)
                                                })
                                            }(e, n)
                                    }
                                };
                            return (0, i.useLayoutEffect)(function() {
                                x || (!p && m && (!!b.current.dataset.hydrationOnDemand || c) || C())
                            }, [p, m]), (0, i.useEffect)(function() {
                                return o.forEach(function(e) {
                                        return Array.isArray(e) ? G.apply(void 0, _to_consumable_array(e)) : G(e)
                                    }),
                                    function() {
                                        return P()
                                    }
                            }, [k.asPath]), (0, i.useEffect)(function() {
                                N(!0)
                            }, [k.asPath]), x ? (0, t.jsx)("section", _object_spread_props(_object_spread({
                                ref: b
                            }, a), {
                                children: (0, t.jsx)(e, _object_spread_props(_object_spread({}, v), {
                                    isQueuedEvent: w
                                }))
                            })) : (0, t.jsx)("section", _object_spread({
                                ref: b,
                                dangerouslySetInnerHTML: {
                                    __html: ""
                                },
                                suppressHydrationWarning: !0
                            }, a))
                        };
                        return n.displayName = "withHydrationOnDemand(".concat(function(e) {
                            return e.displayName || e.name || "Component"
                        }(e), ")"), n
                    }
                };
            n.Z = function(e) {
                return a ? u(e) : c
            }
        },
        52391: function(e) {
            e.exports = {
                bhdp: "xugE0C",
                "bhdp--skeleton": "ydBEnY",
                bhdp__background: "a11v47",
                "bhdp__background-image": "_2x9B4c",
                bhdp__symbols: "lUux5e",
                "bhdp__symbols-percent": "fcLFSw",
                "bhdp__symbols-percent--mobile": "Bk8yAT",
                "bhdp__symbols-percent--desktop": "KbWdHe",
                "bhdp__symbols-balloons": "y_fLW5",
                "bhdp__symbols-balloons--left": "AGmYKB",
                "bhdp__symbols-balloons--right": "RvSnj7",
                bhdp__content: "oRahxo",
                "bhdp__left-section": "pa3is7",
                "bhdp__right-section": "I2TCAh",
                bhdp__promotion: "_6Kxp_C",
                "bhdp__promotion-title": "bBDi9N",
                "bhdp__promotion-countdown": "L1Go73",
                "bhdp__promotion-countdown-item": "wjRNrh",
                "bhdp__countdown-separator": "ofK3Cc",
                bhdp__product: "Zn3WiS",
                "bhdp__product-wrapper": "KAnnam",
                bhdp__products: "_6hsqJJ",
                "bhdp__products--deprecated": "_6umLgF",
                "bhdp__products--next": "YewyIr",
                "bhdp__products--original": "YsiCX0"
            }
        },
        13397: function(e) {
            e.exports = {
                "clickable-coupon": "GkNw0G",
                "clickable-coupon__container": "fmDyN1",
                "clickable-coupon__heading": "ZYsQ12",
                "clickable-coupon__initial": "_600fxt",
                "clickable-coupon__decoration-top-right": "vXyrno",
                "clickable-coupon__pomegranate-small": "_3Kgt4s",
                "clickable-coupon__star-main": "dBgX8y",
                "clickable-coupon__star": "aPECXd",
                "clickable-coupon__decoration-left": "Nw9voY",
                float: "_6KThuZ",
                "clickable-coupon__pomegranate-left": "W6FM6z",
                "clickable-coupon__decoration-right": "wyNeBP",
                "clickable-coupon__pomegranate-right": "HuO7xt",
                "clickable-coupon__clickable": "cpPjHO",
                "clickable-coupon__main-pomegranate": "CE3D_k",
                "clickable-coupon__hint": "z6Scuk",
                "clickable-coupon__revealed": "_0OTF_3",
                "clickable-coupon__loading": "_2mn2iE",
                "clickable-coupon__revealed-image": "_5CkQEG",
                "clickable-coupon__image": "BcM69i",
                "clickable-coupon__code-container": "SbgoWG",
                "clickable-coupon__copy-button": "LkV0yW",
                "clickable-coupon__code": "Tu0RLY",
                "clickable-coupon__copy-icon": "NybaaT",
                "clickable-coupon__copy-text": "_9YPd0S",
                "clickable-coupon__title": "sbDw41",
                "clickable-coupon__skeleton": "hwmsY9",
                "clickable-coupon__skeleton-decorations": "HPm8Od",
                "clickable-coupon__skeleton-decoration--left": "yKz0IO",
                "clickable-coupon__skeleton-decoration--right": "SjReLO",
                "clickable-coupon__skeleton-decoration--top-right": "ICnGOQ",
                "clickable-coupon__skeleton-main": "ZYfQ9B",
                "clickable-coupon__skeleton-hint": "TZetwx",
                "float-gentle": "TXmrSS"
            }
        },
        78888: function(e) {
            e.exports = {
                "single-slider-skeleton": "Nk44O2",
                "single-slider-skeleton__items": "QwWi_e",
                "single-slider-skeleton__item": "Pib8Nd",
                "horizontal-quick-access-skeleton": "_7csyUu",
                "horizontal-quick-access-skeleton__items": "_mniou",
                "horizontal-quick-access-skeleton__item": "_CBW8X",
                "horizontal-quick-access-skeleton__item-image": "PC_uQ9",
                "horizontal-quick-access-skeleton__item-text": "_aXgLy",
                "horizontal-product-popular-skeleton": "UbajiH",
                "horizontal-product-popular-skeleton__title": "Giy_jE",
                "horizontal-product-popular-skeleton__items": "_7Xz_Bs",
                "horizontal-product-popular-skeleton__item": "oF91Ke",
                "horizontal-product-popular-skeleton__item-image-sk": "LZ_VVS",
                "horizontal-product-popular-skeleton__item-body": "F_NjP8",
                "horizontal-product-popular-skeleton__item-product-title-sk": "CxF6da",
                "horizontal-product-popular-skeleton__item-product-vendor-rate": "_19myKs",
                "horizontal-product-popular-skeleton__item-product-vendor-sk": "FoGL3Q",
                "horizontal-product-popular-skeleton__item-product-rate-sk": "am_8xe",
                "horizontal-product-popular-skeleton__item-product-price-tag": "uTkuHL",
                "horizontal-product-popular-skeleton__item-product-price-sk": "qHMPt8",
                "horizontal-product-popular-skeleton__item-product-tag-sk": "s_NhzP",
                "horizontal-product-popular-skeleton__item-product-add-sk": "DC0Sgx",
                "horizontal-product-timely-skeleton": "sYKB6F",
                "horizontal-product-timely-skeleton__header": "_0Hapik",
                "horizontal-product-timely-skeleton__header-icon": "_75qJQa",
                "horizontal-product-timely-skeleton__icon": "MU_Hdd",
                "horizontal-product-timely-skeleton__header-content": "JBAWLG",
                "horizontal-product-timely-skeleton__header-title": "PWSZQ_",
                "horizontal-product-timely-skeleton__header-show-all": "_3bvzaA",
                "horizontal-product-timely-skeleton__items": "bZN_0i",
                "horizontal-product-timely-skeleton__item": "_6eyvhW",
                "daily-off-category-products-skeleton": "_9MyX3B",
                "daily-off-category-products-skeleton__header": "OU_150",
                "daily-off-category-products-skeleton__header-title": "RuJqQh",
                "daily-off-category-products-skeleton__inner": "U84UYL",
                "daily-off-category-products-skeleton__content": "dFF_Lp",
                "daily-off-category-products-skeleton__carousel": "_4_JjdU",
                "daily-off-category-products-skeleton__product-card": "VoyH_s",
                "daily-off-category-products-skeleton__product-card-container": "mMD2ON",
                "daily-off-category-products-skeleton__products-title": "Y_92G1",
                "daily-off-category-products-skeleton__slide": "VB5hOb",
                "daily-off-category-products-skeleton__products-img": "I3xcoL",
                "daily-off-category-products-skeleton__section": "_6g82rQ",
                "daily-off-category-products-skeleton__section-product": "ny67Fy",
                "bbt-skeleton": "BgHbx3",
                "bbt-skeleton__item": "_3bjlNA",
                "skeleton-horizontal-vendor-coupons": "_SzvNm",
                "skeleton-horizontal-vendor-coupons__title": "Ai2qVh",
                "skeleton-horizontal-vendor-coupons__subtitle": "_4yDqEd",
                "skeleton-horizontal-vendor-coupons__divider": "LVexyf",
                "skeleton-horizontal-vendor-coupons__items": "c0VP0V",
                "skeleton-horizontal-vendor-coupons__item": "mXim0j",
                "skeleton-horizontal-vendor-coupons__item-header": "dNcbF_",
                "skeleton-horizontal-vendor-coupons__item-header-icon": "y3pNkc",
                "skeleton-horizontal-vendor-coupons__item-header-title": "Ctgef_",
                "skeleton-horizontal-vendor-coupons__item-header-subtitle": "_5OJW_y",
                "skeleton-horizontal-vendor-coupons__item-images-container": "_9Xt_VH",
                "skeleton-horizontal-vendor-coupons__item-images-vendor": "YRFAgy",
                "skeleton-horizontal-vendor-coupons__item-images": "v_Whsx",
                "skeleton-horizontal-vendor-coupons__item-image": "rnEmZs",
                "skeleton-horizontal-vendor-coupons__item-image-img": "WZf3t6"
            }
        }
    }
]);