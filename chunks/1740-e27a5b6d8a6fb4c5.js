function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
    return n
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function asyncGeneratorStep(e, r, t, n, i, o, s) {
    try {
        var a = e[o](s),
            l = a.value
    } catch (e) {
        return void t(e)
    }
    a.done ? r(l) : Promise.resolve(l).then(n, i)
}

function _async_to_generator(e) {
    return function() {
        var r = this,
            t = arguments;
        return new Promise(function(n, i) {
            var o = e.apply(r, t);

            function s(e) {
                asyncGeneratorStep(o, n, i, s, a, "next", e)
            }

            function a(e) {
                asyncGeneratorStep(o, n, i, s, a, "throw", e)
            }
            s(void 0)
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

function _iterable_to_array_limit(e, r) {
    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != t) {
        var n, i, o = [],
            s = !0,
            a = !1;
        try {
            for (t = t.call(e); !(s = (n = t.next()).done) && (o.push(n.value), !r || o.length !== r); s = !0);
        } catch (e) {
            a = !0, i = e
        } finally {
            try {
                s || null == t.return || t.return()
            } finally {
                if (a) throw i
            }
        }
        return o
    }
}

function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
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

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _array_like_to_array(e, r) : void 0
    }
}

function _ts_generator(e, r) {
    var t, n, i, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
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
                if (t) throw new TypeError("Generator is already executing.");
                for (; s && (s = 0, a[0] && (o = 0)), o;) try {
                    if (t = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                    switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                        case 0:
                        case 1:
                            i = a;
                            break;
                        case 4:
                            return o.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            o.label++, n = a[1], a = [0];
                            continue;
                        case 7:
                            a = o.ops.pop(), o.trys.pop();
                            continue;
                        default:
                            if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                o = 0;
                                continue
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                o.label = a[1];
                                break
                            }
                            if (6 === a[0] && o.label < i[1]) {
                                o.label = i[1], i = a;
                                break
                            }
                            if (i && o.label < i[2]) {
                                o.label = i[2], o.ops.push(a);
                                break
                            }
                            i[2] && o.ops.pop(), o.trys.pop();
                            continue
                    }
                    a = r.call(e, o)
                } catch (e) {
                    a = [6, e], n = 0
                } finally {
                    t = i = 0
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
    [1740], {
        65955: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return j
                }
            });
            var n = t(32930),
                i = t(2389),
                o = t.n(i),
                s = t(66120),
                a = t.n(s),
                l = t(5164),
                u = t(36350),
                c = t(55253),
                d = t.n(c),
                _ = t(88592),
                y = new Set(["image/jpeg", "image/png"]),
                f = new Set(["video/mp4", "video/quicktime"]),
                v = function(e) {
                    return new Promise(function(r) {
                        var t = y.has(e.type),
                            n = f.has(e.type),
                            i = e.size / 1024 / 1024;
                        if (t) r(i > 4 ? {
                            isValid: !1,
                            fileType: "image",
                            errorMessage: "سایز فایل تصویر باید کمتر از ".concat(4, " مگابایت باشد.")
                        } : {
                            isValid: !0,
                            fileType: "image"
                        });
                        else if (n)
                            if (i > 60) r({
                                isValid: !1,
                                fileType: "video",
                                errorMessage: "سایز فایل ویدیو باید کمتر از ".concat(60, " مگابایت باشد.")
                            });
                            else {
                                var o = document.createElement("video");
                                o.preload = "metadata", o.addEventListener("loadedmetadata", function() {
                                    window.URL.revokeObjectURL(o.src);
                                    var e = o.duration;
                                    r(e > 16 ? {
                                        isValid: !1,
                                        errorMessage: "مدت زمان ویدیو باید کمتر از ".concat(16, " ثانیه باشد.")
                                    } : {
                                        isValid: !0,
                                        fileType: "video"
                                    })
                                }), o.src = URL.createObjectURL(e)
                            }
                        else r({
                            isValid: !1,
                            errorMessage: "فقط فایل‌های JPEG، PNG و ویدیوهای MP4 و MOV قابل قبول هستند."
                        })
                    })
                },
                b = t(85945),
                p = t(45835),
                h = t(27434),
                m = t(89504),
                g = t(87694),
                w = o()(function() {
                    return Promise.all([t.e(3620), t.e(2998), t.e(6740)]).then(t.bind(t, 66740))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [66740]
                        }
                    },
                    ssr: !1
                }),
                x = o()(function() {
                    return Promise.all([t.e(3620), t.e(4563), t.e(6182)]).then(t.bind(t, 4563))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [4563]
                        }
                    },
                    ssr: !1
                }),
                j = function(e) {
                    var r, t = e.isLazy,
                        i = void 0 !== t && t,
                        o = (0, _.M_)(["currentUser"]).currentUser,
                        s = _sliced_to_array((0, h.useState)(null), 2),
                        c = s[0],
                        y = s[1],
                        f = (0, p.b)(),
                        j = f.ua,
                        S = f.isWebview,
                        k = (0, h.useRef)(null),
                        C = (0, u.useSnackbar)(),
                        N = C.showErrorSnackbar,
                        O = C.showWarningSnackbar,
                        P = C.hideSnackbar,
                        L = _sliced_to_array((0, h.useState)(!1), 2),
                        I = L[0],
                        E = L[1],
                        M = _sliced_to_array((0, h.useState)(!1), 2),
                        z = M[0],
                        Z = M[1],
                        R = _sliced_to_array((0, h.useState)(), 2),
                        U = R[0],
                        T = R[1],
                        V = (0, b.NL)(),
                        Y = (0, g.EU)(),
                        B = Y.data,
                        A = Y.refetch,
                        D = Y.isLoading;
                    (0, h.useEffect)(function() {
                        S && window.WebviewInterfaceVersion === m.gO.MOSTLY_WEBVIEW && (window.updateStories = function() {
                            V.refetchQueries({
                                queryKey: ["my-stories"]
                            }), (null == o ? void 0 : o.id) && V.resetQueries({
                                queryKey: [g.HL, null == o ? void 0 : o.id]
                            }), (null == o ? void 0 : o.identifier) && V.resetQueries({
                                queryKey: ["story", g.sY, null == o ? void 0 : o.identifier]
                            })
                        })
                    }, [o, V, S]);
                    var W = (0, h.useMemo)(function() {
                            var e;
                            return {
                                user: o,
                                stories: (null == B || null === (e = B.stories) || void 0 === e ? void 0 : e.flatMap(function(e) {
                                    return e.stories
                                }).reverse()) || []
                            }
                        }, [B, o]),
                        F = (0, g.NS)(),
                        G = function() {
                            return _async_to_generator(function() {
                                var e, r, t;
                                return _ts_generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, window.scheduler.yield()];
                                        case 1:
                                            return n.sent(), (null == B ? void 0 : B.isBlocked) ? N("به علت نقض قوانین باسلام، دسترسی شما به استوری بسته شده. پیگیری بیشتر، با ثبت تیکت پشتیبانی.") : S ? (t = (0, m.Cw)(), null === (e = t.onCreateStoryClick) || void 0 === e || e.call(t, !0)) : null === (r = k.current) || void 0 === r || r.click(), [2]
                                    }
                                })
                            })()
                        };
                    return (0, n.jsxs)(n.Fragment, {
                        children: [I && (0, n.jsx)(w, {
                            onStoryUpload: function() {
                                return A()
                            },
                            selectedStory: c,
                            storyType: U,
                            isShow: I,
                            closeModal: function() {
                                return E(!1)
                            }
                        }), z && (0, n.jsx)(x, {
                            isMyStory: !0,
                            onDelete: function(e) {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, window.scheduler.yield()];
                                            case 1:
                                                return r.sent(), e && Z(!1), A(), [2]
                                        }
                                    })
                                })()
                            },
                            show: !0,
                            data: W,
                            onClose: function() {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, window.scheduler.yield()];
                                            case 1:
                                                return e.sent(), Z(!1), [2]
                                        }
                                    })
                                })()
                            },
                            onStoryMutation: F,
                            isLoading: D,
                            preferredIndex: "first"
                        }), (0, n.jsxs)("div", {
                            className: a()["my-story__user"],
                            children: [(0, n.jsx)(d(), {
                                hasAddStoryButton: !0,
                                onAddStoryButtonClick: G,
                                onClick: function() {
                                    return _async_to_generator(function() {
                                        var e, r;
                                        return _ts_generator(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, window.scheduler.yield()];
                                                case 1:
                                                    return t.sent(), W.stories.length > 0 ? D || (S && window.WebviewInterfaceVersion === m.gO.MOSTLY_WEBVIEW ? (r = (0, m.Cw)(), null === (e = r.onVendorStoryClick) || void 0 === e || e.call(r, JSON.stringify([(0, l.snakize)(_object_spread_props(_object_spread({}, W), {
                                                        is_followed: !0
                                                    }))]))) : Z(!0)) : G(), [2]
                                            }
                                        })
                                    })()
                                },
                                src: null == o || null === (r = o.avatar) || void 0 === r ? void 0 : r.medium,
                                size: j.isPc ? "96" : "72",
                                storyStatus: W.stories.length > 0 ? "seen" : "none",
                                lazy: i
                            }), (0, n.jsx)("div", {
                                className: a()["my-story__title"],
                                children: "استوری جدید"
                            })]
                        }), (0, n.jsx)("input", {
                            ref: k,
                            type: "file",
                            accept: "image/png,image/jpeg,video/mp4,video/quicktime",
                            className: a()["my-story__story-upload-input"],
                            onChange: function(e) {
                                return _async_to_generator(function() {
                                    var r, t, n, i, o, s, a, l;
                                    return _ts_generator(this, function(u) {
                                        switch (u.label) {
                                            case 0:
                                                if (r = e.target, t = r.files, !(n = t[0])) return [3, 4];
                                                u.label = 1;
                                            case 1:
                                                return u.trys.push([1, 3, , 4]), i = O("در حال بررسی فایل"), [4, v(n)];
                                            case 2:
                                                return o = u.sent(), s = o.isValid, a = o.errorMessage, l = o.fileType, P(i), T(l), s ? (y(n), E(!0)) : N(a), [3, 4];
                                            case 3:
                                                return u.sent(), N("مشکلی در پردازش فایل پیش آمده است."), [3, 4];
                                            case 4:
                                                return k.current.value = null, [2]
                                        }
                                    })
                                })()
                            }
                        })]
                    })
                }
        },
        58633: function(e, r, t) {
            "use strict";
            var n = t(32930),
                i = t(40877),
                o = t(27434),
                s = t(5164),
                a = t(70437),
                l = t.n(a),
                u = t(47037),
                c = t.n(u),
                d = t(45835);
            r.Z = (0, o.memo)(function(e) {
                var r = e.count,
                    t = e.newUi,
                    o = (0, d.b)().ua;
                return (0, n.jsx)("div", {
                    className: (0, i.Z)(c()["story-bar-skeleton"], _define_property({}, c()["story-bar-skeleton--new-ui"], t)),
                    children: (0, s.range)(null != r ? r : 4).map(function(e, r) {
                        return (0, n.jsx)("div", {
                            className: c()["story-bar-skeleton__item"],
                            children: t ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("div", {
                                    className: c()["story-bar-skeleton__avatar"],
                                    children: (0, n.jsx)(l(), {
                                        width: 72,
                                        height: 72,
                                        radius: "50%",
                                        waveColor: "var(--gray-050)",
                                        backgroundColor: "var(--gray-025)"
                                    })
                                }), (0, n.jsx)("div", {
                                    className: c()["story-bar-skeleton__item-title"],
                                    children: (0, n.jsx)(l(), {
                                        width: 54,
                                        height: 19,
                                        waveColor: "var(--gray-050)",
                                        backgroundColor: "var(--gray-025)",
                                        radius: "0"
                                    })
                                })]
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(l(), {
                                    radius: "50%",
                                    width: o.isPc ? 96 : 72,
                                    height: o.isPc ? 96 : 72,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)"
                                }), (0, n.jsx)(l(), {
                                    width: 64,
                                    height: o.isPc ? 24 : 21,
                                    waveColor: "var(--gray-200)",
                                    backgroundColor: "var(--gray-100)",
                                    className: c()["story-bar-skeleton__item-title"]
                                })]
                            })
                        }, r)
                    })
                })
            })
        },
        3660: function(e, r, t) {
            "use strict";
            var n = t(32930),
                i = t(40877),
                o = t(27434),
                s = t(55253),
                a = t.n(s),
                l = t(39305),
                u = t.n(l),
                c = t(45835);
            r.Z = (0, o.memo)(function(e) {
                var r, t, o, s = e.user,
                    l = e.onClick,
                    d = e.newUi,
                    _ = e.isLazy,
                    y = void 0 !== _ && _,
                    f = (0, c.b)().ua;
                return (0, n.jsxs)("div", {
                    className: (0, i.Z)(u()["story-bar-user"], _define_property({}, u()["story-bar-user--new-ui"], d)),
                    onClick: function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), null == l || l(s.user.id), [2]
                                }
                            })
                        })()
                    },
                    children: [(0, n.jsxs)("div", {
                        className: u()["story-bar-user__wrapper"],
                        children: [(0, n.jsx)(a(), {
                            size: f.isPc ? "96" : "72",
                            src: null === (r = s.user.avatar) || void 0 === r ? void 0 : r.medium,
                            storyStatus: s.hasUnseen ? "unseen" : "seen",
                            storyRingColor: "suggested" === (null == s ? void 0 : s.suggestLabel) ? "secondary" : "primary",
                            className: u()["story-bar-user__main-avatar"],
                            lazy: y
                        }), (null == s ? void 0 : s.hasAddStory) && (0, n.jsx)(a(), {
                            src: "https://statics.basalam.com/public-132/admin/7PQmB8/09-25/46CI8sY9xYZ0dJrMBlDZBTC7rcZU83FQMIdCTZa8IMQo5FfpIU.png",
                            storyStatus: s.hasUnseen ? "unseen" : "seen",
                            storyRingColor: "suggested" === (null == s ? void 0 : s.suggestLabel) ? "secondary" : "primary",
                            className: u()["story-bar-user__reels-avatar"],
                            lazy: y
                        })]
                    }), (0, n.jsx)("div", {
                        className: u()["story-bar-user__title"],
                        children: (null === (t = s.user.vendor) || void 0 === t ? void 0 : t.title) || (null === (o = s.user) || void 0 === o ? void 0 : o.name)
                    })]
                })
            })
        },
        56794: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return S
                }
            });
            var n = t(32930),
                i = t(40877),
                o = t(65955),
                s = t(2389),
                a = t.n(s),
                l = t(45840),
                u = t.n(l),
                c = t(5164),
                d = t(3660),
                _ = t(92369),
                y = t(58633),
                f = t(45835),
                v = t(88107),
                b = t(28231),
                p = t(50607),
                h = t(64683),
                m = t(22455),
                g = t(89504),
                w = t(27434),
                x = a()(function() {
                    return Promise.all([t.e(3620), t.e(4563), t.e(6182)]).then(t.bind(t, 4563))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [4563]
                        }
                    },
                    ssr: !1
                }),
                j = a()(function() {
                    return Promise.all([t.e(3620), t.e(690)]).then(t.bind(t, 690))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [690]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, n.jsx)(y.Z, {
                            count: 10
                        })
                    }
                });

            function S(e) {
                var r = e.newUi,
                    t = e.usersList,
                    s = e.isLoading,
                    a = e.isLazy,
                    l = void 0 !== a && a,
                    S = e.onStoryMutation,
                    k = e.onVisibleIndexChange,
                    C = e.fetchNextPageStories,
                    N = (0, v.Z)(),
                    O = _sliced_to_array((0, w.useState)(!1), 2),
                    P = O[0],
                    L = O[1],
                    I = _sliced_to_array((0, w.useState)(null), 2),
                    E = I[0],
                    M = I[1],
                    z = _sliced_to_array((0, w.useState)(r ? 96 : 80), 2),
                    Z = z[0],
                    R = z[1],
                    U = _sliced_to_array((0, w.useState)(r ? 126 : 97), 2),
                    T = U[0],
                    V = U[1],
                    Y = _sliced_to_array((0, w.useState)(null), 2),
                    B = Y[0],
                    A = Y[1],
                    D = _sliced_to_array((0, w.useState)(null), 2),
                    W = D[0],
                    F = D[1],
                    G = _sliced_to_array((0, w.useState)(null), 2),
                    K = G[0],
                    Q = G[1],
                    q = (0, w.useRef)(),
                    J = (0, w.useRef)(null),
                    H = (0, f.b)(),
                    X = H.ua,
                    $ = H.isWebview,
                    ee = (0, w.useMemo)(function() {
                        return null == t ? void 0 : t.find(function(e) {
                            return e.user.id === E
                        })
                    }, [E, null == t ? void 0 : t.length]),
                    re = (0, w.useCallback)(function(e) {
                        M(e);
                        var r = null == t ? void 0 : t.findIndex(function(r) {
                                return r.user.id === e
                            }),
                            n = null == t ? void 0 : t.findIndex(function(e, t) {
                                return t > r && !0 !== e.excludeFromNavigation
                            }),
                            i = null == t ? void 0 : t.map(function(e, t) {
                                return t < r && !0 !== e.excludeFromNavigation
                            }).lastIndexOf(!0);
                        A(-1 === n ? null : t[n].user.id), F(-1 === i ? null : t[i].user.id), null == k || k(n)
                    }, [null == t ? void 0 : t.length, k]),
                    te = (0, w.useCallback)(function(e) {
                        return _async_to_generator(function() {
                            var r, n, i;
                            return _ts_generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return o.sent(), $ && window.WebviewInterfaceVersion === g.gO.MOSTLY_WEBVIEW ? (n = (0, g.Cw)(), i = [], null == t || t.forEach(function(e) {
                                            var r = _object_spread({}, e, e.user);
                                            Number.isNaN(Number(r.id)) || i.push(r)
                                        }), null === (r = n.onStoryClick) || void 0 === r || r.call(n, JSON.stringify((0, c.snakize)(i)), e)) : (re(e), L(!0), Q(null)), [2]
                                }
                            })
                        })()
                    }, [re, null == t ? void 0 : t.length, $]),
                    ne = (0, w.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), L(!1), [2]
                                }
                            })
                        })()
                    }, []),
                    ie = (0, w.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), null === B ? ne() : (re(B), Q("first")), [2]
                                }
                            })
                        })()
                    }, [ne, B, re]),
                    oe = (0, w.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), null !== W && (re(W), Q(null)), [2]
                                }
                            })
                        })()
                    }, [W, re]),
                    se = (0, w.useCallback)(function(e) {
                        null == k || k(e.activeIndex + e.slidesPerViewDynamic())
                    }, [k]),
                    ae = (0, w.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), (0, _.publishEvent)("discoveryMoreButtonClick", {
                                            location: "home-top-bar-avatar"
                                        }), N.push("/discovery"), [2]
                                }
                            })
                        })()
                    }, []),
                    le = (0, w.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), (0, _.publishEvent)("liveButtonClick", {
                                            location: "home-top-bar-avatar"
                                        }), N.push("/live"), [2]
                                }
                            })
                        })()
                    }, []);
                (0, w.useEffect)(function() {
                    var e, r = null === (e = q.current) || void 0 === e ? void 0 : e.swiper;
                    r && (null == k || k(r.activeIndex + r.slidesPerViewDynamic()))
                }, [k]), (0, w.useEffect)(function() {
                    var e = J.current;
                    if (e) {
                        var r = new IntersectionObserver(function(e) {
                            e.forEach(function(e) {
                                e.isIntersecting && C()
                            })
                        }, {
                            root: null,
                            threshold: .5,
                            rootMargin: "0px"
                        });
                        return r.observe(e),
                            function() {
                                r.unobserve(e)
                            }
                    }
                }, [null == t ? void 0 : t.length]);
                var ue = (0, w.useRef)(null),
                    ce = (0, b.MG)({
                        isRtl: !0,
                        overscan: 1,
                        horizontal: !0,
                        count: null == t ? void 0 : t.length,
                        estimateSize: function() {
                            return Z
                        },
                        getScrollElement: function() {
                            return ue.current
                        }
                    });
                return (0, w.useEffect)(function() {
                    Z > 0 && ce.measure()
                }, [Z, ce]), (0, w.useLayoutEffect)(function() {
                    var e = function() {
                        R(r ? 96 : 80), V(r ? 126 : 97)
                    };
                    return e(), window.addEventListener("resize", e),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }, []), (0, n.jsx)("div", {
                    className: (0, i.Z)(u()["story-bar"], _define_property({}, u()["story-bar--new-ui"], r)),
                    children: s ? (0, n.jsx)(y.Z, {
                        count: X.isPc ? 10 : 4,
                        newUi: r
                    }) : t && t.length > 0 ? (0, n.jsxs)(n.Fragment, {
                        children: [X.isPc ? (0, n.jsx)(j, {
                            isLazy: l,
                            newUi: r,
                            onClick: te,
                            usersList: t,
                            carouselRef: q,
                            goToLivePage: le,
                            onActiveIndexChange: se,
                            goToDiscoveryPage: ae
                        }) : $ ? (0, n.jsx)("div", {
                            ref: ue,
                            className: u()["story-bar__virtual-container"],
                            style: {
                                height: "".concat(T, "px")
                            },
                            children: (0, n.jsx)("div", {
                                className: u()["story-bar__virtual-content"],
                                style: {
                                    width: "".concat(ce.getTotalSize(), "px")
                                },
                                children: ce.getVirtualItems().map(function(e) {
                                    var s, a = window.innerWidth >= 992 ? 16 : 8,
                                        c = null == t ? void 0 : t[e.index],
                                        _ = e.index === ((null == t ? void 0 : t.length) || 0) - 2;
                                    return (0, n.jsx)("div", {
                                        className: u()["story-bar__virtual-item"],
                                        style: {
                                            paddingLeft: "".concat(a, "px"),
                                            width: "".concat(e.size, "px"),
                                            transform: "translateX(-".concat(e.start, "px)")
                                        },
                                        children: (0, n.jsx)("div", {
                                            className: u()["story-bar__virtual-item-content"],
                                            children: (0, n.jsxs)("div", {
                                                ref: _ ? J : null,
                                                style: {
                                                    width: c.size
                                                },
                                                className: (0, i.Z)(u()["story-bar__carousel-item"], u()["story-bar__carousel-item--isMobile"]),
                                                children: ["STORY_SKELETON" === c.component && (0, n.jsx)(y.Z, {
                                                    count: 1,
                                                    newUi: r
                                                }), "PUBLIC_STORY" === c.component && (0, n.jsx)(d.Z, {
                                                    isLazy: l,
                                                    onClick: null !== (s = c.onClick) && void 0 !== s ? s : te,
                                                    user: c,
                                                    newUi: r
                                                }), "MY_STORY" === c.component && c.show && (0, n.jsx)(o.Z, {
                                                    isLazy: l
                                                }), "DISCOVERY" === c.component && c.show && (0, n.jsx)(m.Z, {
                                                    onClick: ae
                                                }), "LIVE" === c.component && (0, n.jsx)(p.Z, {
                                                    onClick: le,
                                                    isLazy: l
                                                }), "REELS" === c.component && (0, n.jsx)(h.Z, {
                                                    isLazy: l
                                                })]
                                            }, c.user.id)
                                        })
                                    }, e.index)
                                })
                            })
                        }) : (0, n.jsx)("div", {
                            className: u()["story-bar__carousel"],
                            children: t.map(function(e, s) {
                                var a, c = s === t.length - 2;
                                return (0, n.jsxs)("div", {
                                    ref: c ? J : null,
                                    style: {
                                        width: e.size
                                    },
                                    className: (0, i.Z)(u()["story-bar__carousel-item"], u()["story-bar__carousel-item--isMobile"]),
                                    children: ["STORY_SKELETON" === e.component && (0, n.jsx)(y.Z, {
                                        count: 1,
                                        newUi: r
                                    }), "PUBLIC_STORY" === e.component && (0, n.jsx)(d.Z, {
                                        isLazy: l,
                                        onClick: null !== (a = e.onClick) && void 0 !== a ? a : te,
                                        user: e,
                                        newUi: r
                                    }), "MY_STORY" === e.component && e.show && (0, n.jsx)(o.Z, {
                                        isLazy: l
                                    }), "DISCOVERY" === e.component && e.show && (0, n.jsx)(m.Z, {
                                        onClick: ae
                                    }), "LIVE" === e.component && (0, n.jsx)(p.Z, {
                                        onClick: le,
                                        isLazy: l
                                    }), "REELS" === e.component && (0, n.jsx)(h.Z, {
                                        isLazy: l
                                    })]
                                }, e.user.id)
                            })
                        }), P && (0, n.jsx)(x, {
                            show: !0,
                            data: ee,
                            preferredIndex: K,
                            onNext: ie,
                            onClose: ne,
                            onPrevious: oe,
                            onStoryMutation: S
                        })]
                    }) : null
                })
            }
        },
        22455: function(e, r, t) {
            "use strict";
            var n = t(32930),
                i = t(40877),
                o = t(65074),
                s = t.n(o),
                a = t(99783),
                l = t.n(a),
                u = t(45835);
            r.Z = function(e) {
                var r, t = e.onClick,
                    o = (0, u.b)().ua;
                return (0, n.jsxs)("div", {
                    className: (0, i.Z)(l()["story-bar-discovery"], (r = {}, _define_property(r, l()["story-bar-discovery--isPc"], o.isPc), _define_property(r, l()["story-bar-discovery--isMobile"], !o.isPc), r)),
                    onClick: t,
                    children: [(0, n.jsx)("div", {
                        children: "برای استوری‌های بیشتر"
                    }), (0, n.jsx)(s(), {
                        icon: "bi-angle-left",
                        iconPosition: "center-end",
                        variant: "text",
                        label: "برو بازارگردی",
                        className: l()["story-bar-discovery__button"]
                    })]
                })
            }
        },
        50607: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return _
                }
            });
            var n = t(32930),
                i = t(40877),
                o = t(27583),
                s = t.n(o),
                a = t(45835),
                l = t(55253),
                u = t.n(l),
                c = t(56855),
                d = t.n(c);

            function _(e) {
                var r = e.onClick,
                    t = e.isLazy,
                    o = void 0 !== t && t,
                    l = (0, a.b)().ua;
                return (0, n.jsxs)("div", {
                    className: s()["story-bar-live"],
                    onClick: function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), null == r || r(), [2]
                                }
                            })
                        })()
                    },
                    children: [(0, n.jsxs)("div", {
                        className: s()["story-bar-live__avatar"],
                        children: [(0, n.jsx)(u(), {
                            size: l.isPc ? "96" : "72",
                            src: "https://statics.basalam.com/public-82/admin/58WaP/05-13/zzpGxCL2q1QNNuEibbtgnOsfznfnHHjgGZIjpul9syjd9D9xkx.png",
                            storyStatus: "unseen",
                            lazy: o
                        }), (0, n.jsx)(d(), {
                            label: "زنده",
                            variant: "fill",
                            className: s()["story-bar-live__label"]
                        })]
                    }), (0, n.jsx)("div", {
                        className: (0, i.Z)(s()["story-bar-live__title"], _define_property({}, s()["story-bar-live__title--isMobile"], l.isMobile)),
                        children: (0, n.jsx)("span", {
                            children: "مشاهده"
                        })
                    })]
                })
            }
        },
        64683: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return g
                }
            });
            var n = t(32930),
                i = t(40877),
                o = t(27434),
                s = t(2389),
                a = t.n(s),
                l = t(36350),
                u = t(69511),
                c = t.n(u),
                d = t(30257),
                _ = t(45835),
                y = t(55253),
                f = t.n(y),
                v = t(76303),
                b = t.n(v),
                p = t(56855),
                h = t.n(p),
                m = a()(function() {
                    return Promise.all([t.e(3620), t.e(7028), t.e(9994), t.e(5428)]).then(t.bind(t, 49994))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [49994]
                        }
                    },
                    ssr: !1
                });

            function g(e) {
                var r, t, s = e.isLazy,
                    a = void 0 !== s && s,
                    u = (0, _.b)().ua,
                    y = _sliced_to_array((0, l.useDisclosure)(), 2),
                    v = y[0],
                    p = y[1],
                    g = p.open,
                    w = p.close,
                    x = (0, o.useRef)(null),
                    j = (0, d.rv)({
                        isFrom: "top-touchpoint"
                    }),
                    S = j.data,
                    k = j.isLoading;
                return (0, n.jsxs)("div", {
                    className: c()["story-bar-reels"],
                    onClick: function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), g(), [2]
                                }
                            })
                        })()
                    },
                    children: [(0, n.jsxs)("div", {
                        className: c()["story-bar-reels__avatar"],
                        children: [(0, n.jsx)(f(), {
                            size: (null == u ? void 0 : u.isPc) ? "96" : "72",
                            src: "https://statics.basalam.com/public-132/admin/7PQmB8/09-25/46CI8sY9xYZ0dJrMBlDZBTC7rcZU83FQMIdCTZa8IMQo5FfpIU.png",
                            storyStatus: "unseen",
                            lazy: a
                        }), (0, n.jsx)(h(), {
                            label: "جدید",
                            size: (null == u ? void 0 : u.isPc) ? "md" : "sm",
                            variant: "fill",
                            className: c()["story-bar-reels__label"]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: (0, i.Z)(c()["story-bar-reels__title"], _define_property({}, c()["story-bar-reels__title--isMobile"], !(null == u ? void 0 : u.isPc))),
                        children: [(0, n.jsx)("span", {
                            children: "ویدئوها"
                        }), (0, n.jsx)(b(), {
                            name: "bi-angle-left",
                            color: "var(--gray-800)"
                        })]
                    }), v && (0, n.jsx)(m, {
                        show: !0,
                        reels: S,
                        onClose: function(e) {
                            return _async_to_generator(function() {
                                return _ts_generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return null == e || e.stopPropagation(), [4, window.scheduler.yield()];
                                        case 1:
                                            return r.sent(), w(), [2]
                                    }
                                })
                            })()
                        },
                        isLoading: k,
                        currentContentIdOnClicked: (null == S || null === (r = S[null == x ? void 0 : x.current]) || void 0 === r ? void 0 : r.id) || (null == S || null === (t = S.at(0)) || void 0 === t ? void 0 : t.id),
                        setCheckPoint: function(e) {
                            x.current = e
                        }
                    })]
                })
            }
        },
        91740: function(e, r, t) {
            "use strict";
            var n = t(32930),
                i = t(56794),
                o = t(88592),
                s = t(30257),
                a = t(177),
                l = t.n(a),
                u = t(45835),
                c = t(40276),
                d = t(5164),
                _ = t(87694),
                y = t(27434);
            r.Z = (0, y.memo)(function() {
                var e, r, t, a = (0, u.b)(),
                    f = a.ua.isPc,
                    v = a.isWebview,
                    b = (0, _.ml)(f || v ? 25 : 10),
                    p = b.hasNextPage,
                    h = b.fetchNextPage,
                    m = b.data,
                    g = b.isFetchingNextPage,
                    w = b.isLoading,
                    x = (0, s.rv)().data,
                    j = (0, o.M_)(["isLoggedIn", "currentUser"]),
                    S = j.isLoggedIn,
                    k = j.currentUser,
                    C = _sliced_to_array((0, y.useState)(!1), 2),
                    N = C[0],
                    O = C[1],
                    P = (0, y.useRef)((0, d.isClientSide)() ? d.bsLocalStorage.getItem(c.S) : void 0),
                    L = m || P.current,
                    I = !N || !P.current && w,
                    E = (0, y.useMemo)(function() {
                        var e, r, t = null == L || null === (e = L.pages) || void 0 === e ? void 0 : e.flatMap(function(e) {
                                return e.openapiRawData
                            }).map(function(e) {
                                return _object_spread_props(_object_spread({}, e), {
                                    component: "PUBLIC_STORY",
                                    hasUnseen: e.stories.some(function(e) {
                                        return !1 === e.isSeen
                                    })
                                })
                            }),
                            n = null == t ? void 0 : t.length;
                        return n > 0 && t.push({
                            size: "170px",
                            show: !I,
                            component: "DISCOVERY",
                            excludeFromNavigation: !0,
                            user: {
                                id: "discovery"
                            }
                        }), S && (null == k || null === (r = k.vendor) || void 0 === r ? void 0 : r.isActive) && (null == t || t.splice(0, 0, {
                            show: !0,
                            component: "MY_STORY",
                            excludeFromNavigation: !0,
                            user: {
                                id: "my-stories"
                            }
                        })), (null == x ? void 0 : x.length) > 0 && (null == t || t.splice(function() {
                            var e, r = null == t ? void 0 : t.findIndex(function(e) {
                                var r;
                                return 68565 === (null == e || null === (r = e.user) || void 0 === r ? void 0 : r.id)
                            });
                            return r >= 0 ? r + 1 : S && (null == k || null === (e = k.vendor) || void 0 === e ? void 0 : e.isActive) ? 1 : 0
                        }(), 0, {
                            show: !0,
                            component: "REELS",
                            excludeFromNavigation: !0,
                            user: {
                                id: "reel"
                            }
                        })), p && !f && !v && n > 0 && (null == t || t.splice(-1, 0, {
                            show: !0,
                            component: "STORY_SKELETON",
                            excludeFromNavigation: !0,
                            user: {
                                id: "story-skeleton"
                            }
                        })), t
                    }, [I, S, null == L || null === (e = L.pages) || void 0 === e ? void 0 : e.length, null == k || null === (r = k.vendor) || void 0 === r ? void 0 : r.isActive, null == x ? void 0 : x.length]),
                    M = (0, _.NS)(),
                    z = (0, y.useCallback)(function(e) {
                        var r;
                        e > (null !== (r = null == E ? void 0 : E.length) && void 0 !== r ? r : 0) - 4 - 1 && p && !g && !I && h()
                    }, [null == E ? void 0 : E.length, p, h, g, I]);
                (0, y.useEffect)(function() {
                    if (L && !(null == L ? void 0 : L.cached) && !(0, d.isServerSide)()) {
                        var e = function() {
                            d.bsLocalStorage.setItem(c.S, _object_spread_props(_object_spread({}, L), {
                                cached: !0
                            }), 1440)
                        };
                        if ("requestIdleCallback" in window) {
                            var r = requestIdleCallback(e);
                            return function() {
                                cancelIdleCallback(r)
                            }
                        }
                        e()
                    }
                }, [L]), (0, y.useEffect)(function() {
                    O(!0)
                }, []);
                var Z = (0, y.useCallback)(function() {
                    f || v || g || h()
                }, [f, v, h, g]);
                if (I || void 0 !== E && 0 !== E.length || (null == k || null === (t = k.vendor) || void 0 === t ? void 0 : t.isActive)) return (0, n.jsx)(l(), {
                    children: (0, n.jsx)("div", {
                        "data-from": "home",
                        children: (0, n.jsx)(i.Z, {
                            usersList: E,
                            isLoading: I,
                            onStoryMutation: M,
                            onVisibleIndexChange: z,
                            fetchNextPageStories: Z
                        })
                    })
                })
            })
        },
        66120: function(e) {
            e.exports = {
                "my-story__story-upload-input": "nGP1Qz",
                "my-story__user": "dVVPIW",
                "my-story__title": "xi7zPj"
            }
        },
        47037: function(e) {
            e.exports = {
                "story-bar-skeleton": "zrNDt6",
                "story-bar-skeleton__item": "fAeoKB",
                "story-bar-skeleton__item-title": "iAg3pf",
                "story-bar-skeleton--new-ui": "fnkBot",
                "story-bar-skeleton__avatar": "HKJiV8"
            }
        },
        39305: function(e) {
            e.exports = {
                "story-bar-user": "TJcneE",
                "story-bar-user__title": "NNKE5c",
                "story-bar-user--new-ui": "dIcVyt",
                "story-bar-user__main-avatar": "_0WDgAt",
                "story-bar-user__wrapper": "AviywN",
                "story-bar-user__reels-avatar": "RSfUBT"
            }
        },
        45840: function(e) {
            e.exports = {
                "story-bar": "q4iqp3",
                "story-bar__next": "aueviW",
                "story-bar__prev": "kR8Dpo",
                "story-bar__next-button": "lxXLO_",
                "story-bar__prev-button": "KH_7Hk",
                "story-bar__carousel": "M_ks2o",
                "story-bar__carousel-item": "g68f1b",
                "story-bar__carousel-item--isPc": "mmiVw8",
                "story-bar__carousel-item--isMobile": "_70ltI9",
                "story-bar--new-ui": "gZNARZ",
                "story-bar__virtual-container": "B6dGBJ",
                "story-bar__virtual-content": "W1KJLK",
                "story-bar__virtual-item": "pv9T1Q",
                "story-bar__virtual-item-content": "UZOb_x"
            }
        },
        99783: function(e) {
            e.exports = {
                "story-bar-discovery": "c_iYJc",
                "story-bar-discovery--isPc": "dsOBY5",
                "story-bar-discovery--isMobile": "j6a5st",
                "story-bar-discovery__button": "ms6p1q"
            }
        },
        27583: function(e) {
            e.exports = {
                "story-bar-live": "iQS836",
                "story-bar-live__avatar": "emUO4J",
                "story-bar-live__label": "s2wi_z",
                "story-bar-live__title": "KvYfA0",
                "story-bar-live__title--isMobile": "_1591rA"
            }
        },
        69511: function(e) {
            e.exports = {
                "story-bar-reels": "_1SwR3u",
                "story-bar-reels__avatar": "RqJMXo",
                "story-bar-reels__label": "dvvqUz",
                "story-bar-reels__title": "TJ8QaM",
                "story-bar-reels__title--isMobile": "sUVSaX"
            }
        }
    }
]);