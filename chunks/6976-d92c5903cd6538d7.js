function _array_like_to_array(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
    return a
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
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
        var a, i, n = [],
            s = !0,
            o = !1;
        try {
            for (r = r.call(e); !(s = (a = r.next()).done) && (n.push(a.value), !t || n.length !== t); s = !0);
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                s || null == r.return || r.return()
            } finally {
                if (o) throw i
            }
        }
        return n
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _sliced_to_array(e, t) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, t) || _unsupported_iterable_to_array(e, t) || _non_iterable_rest()
}

function _unsupported_iterable_to_array(e, t) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _array_like_to_array(e, t) : void 0
    }
}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6976], {
        48848: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return h
                }
            });
            var a = r(32930),
                i = r(32502),
                n = r.n(i),
                s = r(55253),
                o = r.n(s),
                l = r(70437),
                d = r.n(l);

            function h() {
                return (0, a.jsxs)("div", {
                    className: n().hli,
                    children: [(0, a.jsx)(o(), {
                        size: "28"
                    }), (0, a.jsx)(d(), {
                        width: 65,
                        height: 23,
                        className: n()["hli__label-skeleton"]
                    })]
                })
            }
        },
        6976: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return B
                }
            });
            var a = r(32930),
                i = r(40877),
                n = r(2389),
                s = r.n(n),
                o = r(2347),
                l = r(22769),
                d = r.n(l),
                h = r(81918),
                c = r(88592),
                u = r(48848),
                _ = r(61033),
                f = r(45835),
                b = r(61262),
                p = r(88107),
                g = r(65074),
                v = r.n(g),
                y = r(177),
                m = r.n(y),
                x = r(60802),
                C = {
                    src: "https://basalam.com/_next/static/media/black-logotype.51623141.svg"
                },
                w = r(27434),
                j = r(5164),
                k = r(55633),
                N = s()(function() {
                    return r.e(8648).then(r.bind(r, 58648))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [58648]
                        }
                    },
                    ssr: !0
                }),
                S = s()(function() {
                    return r.e(1334).then(r.bind(r, 1334))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [1334]
                        }
                    },
                    ssr: !0
                }),
                P = s()(function() {
                    return Promise.all([r.e(246), r.e(6609), r.e(1585)]).then(r.bind(r, 69845))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [69845]
                        }
                    },
                    ssr: !0
                }),
                V = s()(function() {
                    return r.e(9400).then(r.bind(r, 39400))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [39400]
                        }
                    },
                    ssr: !0
                });

            function B(e) {
                var t, r, n, s = e.scrollMode,
                    l = void 0 === s ? "dynamic" : s,
                    g = e.slotAppend,
                    y = e.className,
                    B = (0, p.Z)(),
                    E = (0, h.E)(),
                    Z = (0, f.b)().isCachedPage,
                    F = (0, b.B)().authForm.toggleModal,
                    T = (0, x.l)().getFeatureValue,
                    H = _sliced_to_array((0, w.useState)(!1), 2),
                    R = H[0],
                    M = H[1],
                    U = _sliced_to_array((0, w.useState)(!1), 2),
                    A = U[0],
                    G = U[1],
                    I = (0, c.M_)(["isLoadingCurrentUser", "isLoggedIn", "currentUser"]),
                    L = I.isLoggedIn,
                    O = I.isLoadingCurrentUser,
                    D = I.currentUser,
                    z = (0, w.useRef)(null),
                    W = (0, w.useRef)(null),
                    q = (0, w.useRef)(null),
                    Y = (0, w.useRef)(!1),
                    Q = (null === (t = T("theme")) || void 0 === t ? void 0 : t.logo) || C.src,
                    X = null === (r = T("chat_config")) || void 0 === r ? void 0 : r.allow_not_login;
                (0, w.useEffect)(function() {
                    return _.Z.init(d(), l), M(!0),
                        function() {
                            clearTimeout(z.current)
                        }
                }, []);
                var J = (0, w.useCallback)(function() {
                        Y.current = !0, clearTimeout(W.current), W.current = setTimeout(function() {
                            Y.current = !1
                        }, 1e3)
                    }, []),
                    K = (0, w.useCallback)(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400;
                        clearTimeout(z.current), z.current = setTimeout(function() {
                            G(!0), (0, j.lockBodyScroll)()
                        }, e)
                    }, []),
                    $ = (0, w.useCallback)(function(e) {
                        Y.current || K(e)
                    }, [K]),
                    ee = (0, w.useCallback)(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400;
                        clearTimeout(z.current), z.current = setTimeout(function() {
                            G(!1), J(), (0, j.unlockBodyScroll)()
                        }, e)
                    }, [J]);
                (0, w.useEffect)(function() {
                    J(), ee(0)
                }, [B.asPath]), (0, w.useEffect)(function() {
                    B.prefetch("/cart")
                }, [B]);
                var te = (0, k.Z)().handleCreateVendorClickBtn,
                    re = (!L || D && !(null == D || null === (n = D.vendor) || void 0 === n ? void 0 : n.id)) && (!Z || Z && R) && !O;
                return (0, a.jsxs)("div", {
                    className: y,
                    children: [(0, a.jsx)("div", {
                        className: d()["header-placeholder"],
                        id: "header-placeholder"
                    }), (0, a.jsxs)("header", {
                        className: d().header,
                        id: "header",
                        children: [(0, a.jsx)(m(), {
                            children: (0, a.jsxs)("div", {
                                className: d().header__top,
                                children: [(0, a.jsxs)("div", {
                                    className: d()["header__top-right"],
                                    children: [(0, a.jsx)(o.Z, {
                                        href: "/",
                                        className: d()["header__top-right-logo-link"],
                                        children: (0, a.jsx)("img", {
                                            className: d()["header__top-right-logo"],
                                            src: Q,
                                            alt: "باسلام"
                                        })
                                    }), (0, a.jsxs)("button", {
                                        className: (0, i.Z)(d()["header__top-right-category"], _define_property({}, d()["header__top-right-category--show"], A)),
                                        onBlur: function() {
                                            return ee(0)
                                        },
                                        onFocus: function() {
                                            return K(0)
                                        },
                                        onMouseOver: function() {
                                            return K()
                                        },
                                        onMouseLeave: function() {
                                            return ee()
                                        },
                                        children: [(0, a.jsx)("i", {
                                            className: (0, i.Z)("bi-menu", d()["header__top-right-category-icon"])
                                        }), (0, a.jsx)("span", {
                                            children: "دسته‌بندی‌ها"
                                        })]
                                    }), (0, a.jsx)(S, {})]
                                }), (0, a.jsxs)("div", {
                                    className: d()["header__top-left"],
                                    children: [!Z || R && !O ? (0, a.jsxs)(a.Fragment, {
                                        children: [(L || X) && (0, a.jsx)(V, {}), L ? (0, a.jsx)(P, {}) : (0, a.jsxs)("button", {
                                            className: d()["header__top-left-btn"],
                                            onClick: function() {
                                                return F()
                                            },
                                            children: [(0, a.jsx)("i", {
                                                className: (0, i.Z)("bi-user", d()["header__top-left-btn-icon"])
                                            }), (0, a.jsxs)("span", {
                                                className: d()["header__top-left-btn-label"],
                                                children: ["عضویت ", (0, a.jsx)("span", {
                                                    className: d().header__divider
                                                }), " ورود"]
                                            })]
                                        })]
                                    }) : (0, a.jsx)(u.Z, {}), (0, a.jsxs)("div", {
                                        className: d()["header__top-left-btn"],
                                        onClick: function() {
                                            return B.push("/cart")
                                        },
                                        children: [(0, a.jsx)("i", {
                                            className: (0, i.Z)("bi-shopping-cart", d()["header__top-left-btn-icon"]),
                                            "data-badge": E.itemCount
                                        }), (0, a.jsx)("span", {
                                            className: d()["header__top-left-btn-label"],
                                            children: "سبد خرید"
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: (0, i.Z)(d()["header__top-left-btn"], d()["header__top-left-btn-create-vendor-landing"]),
                                        children: re && (0, a.jsx)(v(), {
                                            label: "ایجاد غرفه",
                                            size: "lg",
                                            variant: "outline",
                                            icon: "bi-vendor",
                                            onClick: te
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)(N, {
                            element: q,
                            isShow: A,
                            hideMegamenu: function() {
                                return ee()
                            },
                            showMegamenu: function() {
                                return $()
                            }
                        }), g]
                    })]
                })
            }
        },
        55633: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return b
                }
            });
            var a = r(2134),
                i = r.n(a),
                n = r(5164),
                s = r(36350),
                o = r(84581),
                l = r(88592),
                d = r(61262),
                h = r(88107),
                c = r(45835),
                u = r(89504),
                _ = r(60802),
                f = r(27434);

            function b() {
                var e, t = (0, h.Z)(),
                    r = (0, f.useRef)(!1),
                    a = (0, c.b)().isWebview,
                    b = (0, _.l)(),
                    p = b.runGBTest,
                    g = b.getFeatureValue,
                    v = b.evaluateGBTest,
                    y = i()().publicRuntimeConfig,
                    m = (0, d.B)().authForm.toggleModal,
                    x = (0, s.useSnackbar)().showSuccessSnackbar,
                    C = (0, l.M_)(["isLoggedIn", "currentUser", "isVendor"]),
                    w = C.isLoggedIn,
                    j = C.currentUser,
                    k = C.isVendor,
                    N = null === (e = p("test_header_direct_login_to_vendor", !1)) || void 0 === e ? void 0 : e.value,
                    S = (0, f.useMemo)(function() {
                        var e;
                        return null === (e = (0, n.camelize)(g("vendor_creation_flags"))) || void 0 === e ? void 0 : e.vendorCreate
                    }, [g]),
                    P = (0, f.useCallback)(function() {
                        if ((0, o.s)("createVendorClick", {
                                location: "header"
                            }), r.current = !0, j) {
                            var e = "".concat(y.vendorDashboardUrl).concat((null == j ? void 0 : j.vendor) ? "/dashboard" : "/create-vendor");
                            a ? null === u.Hr || void 0 === u.Hr || (0, u.Hr)(e) : window.location.href = e
                        }
                    }, [j, y.vendorDashboardUrl, a]);
                (0, f.useEffect)(function() {
                    j && r.current && P()
                }, [j, P]);
                return {
                    handleCreateVendorClickBtn: function() {
                        k ? a ? (0, u.Hr)(y.vendorDashboardUrl) : window.location.href = y.vendorDashboardUrl : (v("test_header_direct_login_to_vendor"), "indirect" === N ? ((0, o.s)("createVendorClick", {
                            location: "header"
                        }), t.push("/landings/create-vendor")) : "direct" === N && (S ? x("در حال حاضر امکان ساخت غرفه وجود ندارد.") : w ? P() : m({
                            callback: function() {
                                return P()
                            }
                        })))
                    }
                }
            }
        },
        61033: function(e, t, r) {
            "use strict";
            var a = r(5164),
                i = 0;
            t.Z = {
                bindEvents: function() {
                    this.header && window.addEventListener("scroll", this.pageScroll.bind(this))
                },
                init: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dynamic";
                    if (!(0, a.elementHasClass)(document.body, "purepage") && (this.mode = t, this.body = document.querySelector("body"), this.header = document.querySelector("#header"), this.headerPlaceholder = document.querySelector("#header-placeholder"), this.header && this.headerPlaceholder))
                        if (this.styles = e, this.headerPlaceholder.style.height = "".concat((0, a.getElementOuterHeight)(this.header), "px"), "dynamic" === t) this.isFixed = !1, this.isVisible = !1, this.bindEvents(), this.pageScroll();
                        else if ("static" === t) {
                        var r = this.header.getBoundingClientRect().top;
                        this.isFixed = !0, this.isVisible = !0, this.header.style.top = "0", this.header.style.left = "0", (0, a.addClass)(this.body, "header-show"), (0, a.addClass)(this.header, "header-static"), 0 === r ? (this.headerPlaceholder.style.display = "block", this.header.style.position = "fixed") : (this.headerPlaceholder.style.display = "inline", this.bindEvents())
                    }
                },
                pageScroll: function() {
                    var e = window.pageYOffset;
                    if ("static" !== this.mode) e > Number(this.header.offsetHeight) ? ((0, a.addClass)(this.body, "header-fixed"), (0, a.addClass)(this.header, this.styles["header--fixed"]), (0, a.addClass)(this.headerPlaceholder, this.styles["header-placeholder--fixed"]), this.isFixed = !0, e < i - 120 ? (i = e, this.isVisible = !0, window.isHeaderVisible = !0, (0, a.addClass)(this.body, "header-show"), (0, a.addClass)(this.header, this.styles["header--fixed-show"])) : e > i + 100 && ((0, a.removeClass)(this.header, this.styles["header--fixed-show"]), (0, a.removeClass)(this.body, "header-show"), i = e, this.isVisible = !1, window.isHeaderVisible = !1)) : (e <= this.headerPlaceholder.offsetTop || this.isFixed && !this.isVisible && e <= this.headerPlaceholder.offsetTop + this.headerPlaceholder.offsetHeight) && ((0, a.removeClass)(this.body, "header-fixed"), (0, a.removeClass)(this.header, this.styles["header--fixed"]), (0, a.removeClass)(this.headerPlaceholder, this.styles["header-placeholder--fixed"]), (0, a.removeClass)(this.header, this.styles["header--fixed-show"]), (0, a.addClass)(this.body, "header-show"), this.isFixed = !1, this.isVisible = !1, i = e);
                    else {
                        var t = this.header.getBoundingClientRect().top;
                        this.headerPlaceholder.getBoundingClientRect().top >= 0 ? (this.headerPlaceholder.style.display = "inline", this.header.style.position = "relative") : t <= 0 && (this.headerPlaceholder.style.display = "block", this.header.style.position = "fixed")
                    }
                }
            }
        },
        32502: function(e) {
            e.exports = {
                hli: "sXFv_R",
                "hli__label-skeleton": "_7w08Cy"
            }
        },
        22769: function(e) {
            e.exports = {
                "header-placeholder": "s5EJnb",
                "header-placeholder--fixed": "_311eaK",
                header: "GBBt04",
                "header--fixed": "AcyGa8",
                "header--fixed-show": "cYWWH8",
                header__top: "aAbPCa",
                "header__top-right": "oOteWE",
                "header__top-right-logo-link": "hgCsRc",
                "header__top-right-logo": "oI3ssn",
                "header__top-left": "IlRPHA",
                "header__top-left-btn": "_90lPG_",
                "header__top-left-btn-icon": "TH_Q_b",
                "header__top-left-btn-label": "t_BQxS",
                "header__top-right-category": "puz3RS",
                "header__top-right-category--show": "Z0jDYT",
                "header__top-right-category-icon": "MNFcFU",
                header__divider: "gX3mSj"
            }
        }
    }
]);