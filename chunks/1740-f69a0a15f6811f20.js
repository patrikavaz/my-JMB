function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
    return n
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function asyncGeneratorStep(e, r, t, n, i, s, o) {
    try {
        var a = e[s](o),
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
            var s = e.apply(r, t);

            function o(e) {
                asyncGeneratorStep(s, n, i, o, a, "next", e)
            }

            function a(e) {
                asyncGeneratorStep(s, n, i, o, a, "throw", e)
            }
            o(void 0)
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
        var n, i, s = [],
            o = !0,
            a = !1;
        try {
            for (t = t.call(e); !(o = (n = t.next()).done) && (s.push(n.value), !r || s.length !== r); o = !0);
        } catch (e) {
            a = !0, i = e
        } finally {
            try {
                o || null == t.return || t.return()
            } finally {
                if (a) throw i
            }
        }
        return s
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
    var t, n, i, s = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        },
        o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return o.next = a(0), o.throw = a(1), o.return = a(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }), o;

    function a(a) {
        return function(l) {
            return function(a) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                    if (t = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                    switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                        case 0:
                        case 1:
                            i = a;
                            break;
                        case 4:
                            return s.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            s.label++, n = a[1], a = [0];
                            continue;
                        case 7:
                            a = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                s = 0;
                                continue
                            }
                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                s.label = a[1];
                                break
                            }
                            if (6 === a[0] && s.label < i[1]) {
                                s.label = i[1], i = a;
                                break
                            }
                            if (i && s.label < i[2]) {
                                s.label = i[2], s.ops.push(a);
                                break
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue
                    }
                    a = r.call(e, s)
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
                s = t.n(i),
                o = t(66120),
                a = t.n(o),
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
                                var s = document.createElement("video");
                                s.preload = "metadata", s.addEventListener("loadedmetadata", function() {
                                    window.URL.revokeObjectURL(s.src);
                                    var e = s.duration;
                                    r(e > 16 ? {
                                        isValid: !1,
                                        errorMessage: "مدت زمان ویدیو باید کمتر از ".concat(16, " ثانیه باشد.")
                                    } : {
                                        isValid: !0,
                                        fileType: "video"
                                    })
                                }), s.src = URL.createObjectURL(e)
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
                w = s()(function() {
                    return Promise.all([t.e(3620), t.e(2998), t.e(6740)]).then(t.bind(t, 66740))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [66740]
                        }
                    },
                    ssr: !1
                }),
                x = s()(function() {
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
                        s = (0, _.M_)(["currentUser"]).currentUser,
                        o = _sliced_to_array((0, h.useState)(null), 2),
                        c = o[0],
                        y = o[1],
                        f = (0, p.b)(),
                        j = f.ua,
                        S = f.isWebview,
                        k = (0, h.useRef)(null),
                        C = (0, u.useSnackbar)(),
                        L = C.showErrorSnackbar,
                        O = C.showWarningSnackbar,
                        P = C.hideSnackbar,
                        N = _sliced_to_array((0, h.useState)(!1), 2),
                        I = N[0],
                        M = N[1],
                        E = _sliced_to_array((0, h.useState)(!1), 2),
                        z = E[0],
                        Z = E[1],
                        U = _sliced_to_array((0, h.useState)(), 2),
                        R = U[0],
                        T = U[1],
                        V = (0, b.NL)(),
                        Y = (0, g.EU)(),
                        B = Y.data,
                        A = Y.refetch,
                        D = Y.isLoading;
                    (0, h.useEffect)(function() {
                        S && window.WebviewInterfaceVersion === m.gO.MOSTLY_WEBVIEW && (window.updateStories = function() {
                            V.refetchQueries({
                                queryKey: ["my-stories"]
                            }), (null == s ? void 0 : s.id) && V.resetQueries({
                                queryKey: [g.HL, null == s ? void 0 : s.id]
                            }), (null == s ? void 0 : s.identifier) && V.resetQueries({
                                queryKey: ["story", g.sY, null == s ? void 0 : s.identifier]
                            })
                        })
                    }, [s, V, S]);
                    var W = (0, h.useMemo)(function() {
                            var e;
                            return {
                                user: s,
                                stories: (null == B || null === (e = B.stories) || void 0 === e ? void 0 : e.flatMap(function(e) {
                                    return e.stories
                                }).reverse()) || []
                            }
                        }, [B, s]),
                        G = (0, g.NS)(),
                        Q = function() {
                            return _async_to_generator(function() {
                                var e, r, t;
                                return _ts_generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, window.scheduler.yield()];
                                        case 1:
                                            return n.sent(), (null == B ? void 0 : B.isBlocked) ? L("به علت نقض قوانین باسلام، دسترسی شما به استوری بسته شده. پیگیری بیشتر، با ثبت تیکت پشتیبانی.") : S ? (t = (0, m.Cw)(), null === (e = t.onCreateStoryClick) || void 0 === e || e.call(t, !0)) : null === (r = k.current) || void 0 === r || r.click(), [2]
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
                            storyType: R,
                            isShow: I,
                            closeModal: function() {
                                return M(!1)
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
                            onStoryMutation: G,
                            isLoading: D,
                            preferredIndex: "first"
                        }), (0, n.jsxs)("div", {
                            className: a()["my-story__user"],
                            children: [(0, n.jsx)(d(), {
                                hasAddStoryButton: !0,
                                onAddStoryButtonClick: Q,
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
                                                    }))]))) : Z(!0)) : Q(), [2]
                                            }
                                        })
                                    })()
                                },
                                src: null == s || null === (r = s.avatar) || void 0 === r ? void 0 : r.medium,
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
                                    var r, t, n, i, s, o, a, l;
                                    return _ts_generator(this, function(u) {
                                        switch (u.label) {
                                            case 0:
                                                if (r = e.target, t = r.files, !(n = t[0])) return [3, 4];
                                                u.label = 1;
                                            case 1:
                                                return u.trys.push([1, 3, , 4]), i = O("در حال بررسی فایل"), [4, v(n)];
                                            case 2:
                                                return s = u.sent(), o = s.isValid, a = s.errorMessage, l = s.fileType, P(i), T(l), o ? (y(n), M(!0)) : L(a), [3, 4];
                                            case 3:
                                                return u.sent(), L("مشکلی در پردازش فایل پیش آمده است."), [3, 4];
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
        3660: function(e, r, t) {
            "use strict";
            var n = t(32930),
                i = t(40877),
                s = t(27434),
                o = t(55253),
                a = t.n(o),
                l = t(39305),
                u = t.n(l),
                c = t(45835);
            r.Z = (0, s.memo)(function(e) {
                var r, t, s, o = e.user,
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
                                        return e.sent(), null == l || l(o.user.id), [2]
                                }
                            })
                        })()
                    },
                    children: [(0, n.jsxs)("div", {
                        className: u()["story-bar-user__wrapper"],
                        children: [(0, n.jsx)(a(), {
                            size: f.isPc ? "96" : "72",
                            src: null === (r = o.user.avatar) || void 0 === r ? void 0 : r.medium,
                            storyStatus: o.hasUnseen ? "unseen" : "seen",
                            storyRingColor: "suggested" === (null == o ? void 0 : o.suggestLabel) ? "secondary" : "primary",
                            className: u()["story-bar-user__main-avatar"],
                            lazy: y
                        }), (null == o ? void 0 : o.hasAddStory) && (0, n.jsx)(a(), {
                            src: "https://statics.basalam.com/public-132/admin/7PQmB8/09-25/46CI8sY9xYZ0dJrMBlDZBTC7rcZU83FQMIdCTZa8IMQo5FfpIU.png",
                            storyStatus: o.hasUnseen ? "unseen" : "seen",
                            storyRingColor: "suggested" === (null == o ? void 0 : o.suggestLabel) ? "secondary" : "primary",
                            className: u()["story-bar-user__reels-avatar"],
                            lazy: y
                        })]
                    }), (0, n.jsx)("div", {
                        className: u()["story-bar-user__title"],
                        children: (null === (t = o.user.vendor) || void 0 === t ? void 0 : t.title) || (null === (s = o.user) || void 0 === s ? void 0 : s.name)
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
                s = t(65955),
                o = t(2389),
                a = t.n(o),
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
                    o = e.isLoading,
                    a = e.isLazy,
                    l = void 0 !== a && a,
                    S = e.onStoryMutation,
                    k = e.onVisibleIndexChange,
                    C = (0, v.Z)(),
                    L = _sliced_to_array((0, w.useState)(!1), 2),
                    O = L[0],
                    P = L[1],
                    N = _sliced_to_array((0, w.useState)(null), 2),
                    I = N[0],
                    M = N[1],
                    E = _sliced_to_array((0, w.useState)(r ? 96 : 80), 2),
                    z = E[0],
                    Z = E[1],
                    U = _sliced_to_array((0, w.useState)(r ? 126 : 97), 2),
                    R = U[0],
                    T = U[1],
                    V = _sliced_to_array((0, w.useState)(null), 2),
                    Y = V[0],
                    B = V[1],
                    A = _sliced_to_array((0, w.useState)(null), 2),
                    D = A[0],
                    W = A[1],
                    G = _sliced_to_array((0, w.useState)(null), 2),
                    Q = G[0],
                    q = G[1],
                    F = (0, w.useRef)(),
                    J = (0, f.b)(),
                    K = J.ua,
                    H = J.isWebview,
                    X = (0, w.useMemo)(function() {
                        return null == t ? void 0 : t.find(function(e) {
                            return e.user.id === I
                        })
                    }, [I, null == t ? void 0 : t.length]),
                    $ = (0, w.useCallback)(function(e) {
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
                        B(-1 === n ? null : t[n].user.id), W(-1 === i ? null : t[i].user.id), null == k || k(n)
                    }, [null == t ? void 0 : t.length, k]),
                    ee = (0, w.useCallback)(function(e) {
                        return _async_to_generator(function() {
                            var r, n, i;
                            return _ts_generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return s.sent(), H && window.WebviewInterfaceVersion === g.gO.MOSTLY_WEBVIEW ? (n = (0, g.Cw)(), i = [], null == t || t.forEach(function(e) {
                                            var r = _object_spread({}, e, e.user);
                                            Number.isNaN(Number(r.id)) || i.push(r)
                                        }), null === (r = n.onStoryClick) || void 0 === r || r.call(n, JSON.stringify((0, c.snakize)(i)), e)) : ($(e), P(!0), q(null)), [2]
                                }
                            })
                        })()
                    }, [$, null == t ? void 0 : t.length, H]),
                    re = (0, w.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), P(!1), [2]
                                }
                            })
                        })()
                    }, []),
                    te = (0, w.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), null === Y ? re() : ($(Y), q("first")), [2]
                                }
                            })
                        })()
                    }, [re, Y, $]),
                    ne = (0, w.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), null !== D && ($(D), q(null)), [2]
                                }
                            })
                        })()
                    }, [D, $]),
                    ie = (0, w.useCallback)(function(e) {
                        null == k || k(e.activeIndex + e.slidesPerViewDynamic())
                    }, [k]),
                    se = (0, w.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), (0, _.publishEvent)("discoveryMoreButtonClick", {
                                            location: "home-top-bar-avatar"
                                        }), C.push("/discovery"), [2]
                                }
                            })
                        })()
                    }, []),
                    oe = (0, w.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), (0, _.publishEvent)("liveButtonClick", {
                                            location: "home-top-bar-avatar"
                                        }), C.push("/live"), [2]
                                }
                            })
                        })()
                    }, []);
                (0, w.useEffect)(function() {
                    var e, r = null === (e = F.current) || void 0 === e ? void 0 : e.swiper;
                    r && (null == k || k(r.activeIndex + r.slidesPerViewDynamic()))
                }, [k]);
                var ae = (0, w.useRef)(null),
                    le = (0, b.MG)({
                        isRtl: !0,
                        overscan: 1,
                        horizontal: !0,
                        count: null == t ? void 0 : t.length,
                        estimateSize: function() {
                            return z
                        },
                        getScrollElement: function() {
                            return ae.current
                        }
                    });
                return (0, w.useEffect)(function() {
                    z > 0 && le.measure()
                }, [z, le]), (0, w.useLayoutEffect)(function() {
                    var e = function() {
                        Z(r ? 96 : 80), T(r ? 126 : 97)
                    };
                    return e(), window.addEventListener("resize", e),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }, []), (0, n.jsx)("div", {
                    className: (0, i.Z)(u()["story-bar"], _define_property({}, u()["story-bar--new-ui"], r)),
                    children: o ? (0, n.jsx)(y.Z, {
                        count: K.isPc ? 10 : 4,
                        newUi: r
                    }) : t && t.length > 0 ? (0, n.jsxs)(n.Fragment, {
                        children: [K.isPc ? (0, n.jsx)(j, {
                            isLazy: l,
                            newUi: r,
                            onClick: ee,
                            usersList: t,
                            carouselRef: F,
                            goToLivePage: oe,
                            onActiveIndexChange: ie,
                            goToDiscoveryPage: se
                        }) : H ? (0, n.jsx)("div", {
                            ref: ae,
                            className: u()["story-bar__virtual-container"],
                            style: {
                                height: "".concat(R, "px")
                            },
                            children: (0, n.jsx)("div", {
                                className: u()["story-bar__virtual-content"],
                                style: {
                                    width: "".concat(le.getTotalSize(), "px")
                                },
                                children: le.getVirtualItems().map(function(e) {
                                    var o, a = window.innerWidth >= 992 ? 16 : 8,
                                        c = null == t ? void 0 : t[e.index];
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
                                                style: {
                                                    width: c.size
                                                },
                                                className: (0, i.Z)(u()["story-bar__carousel-item"], u()["story-bar__carousel-item--isMobile"]),
                                                children: ["PUBLIC_STORY" === c.component && (0, n.jsx)(d.Z, {
                                                    isLazy: l,
                                                    onClick: null !== (o = c.onClick) && void 0 !== o ? o : ee,
                                                    user: c,
                                                    newUi: r
                                                }), "MY_STORY" === c.component && c.show && (0, n.jsx)(s.Z, {
                                                    isLazy: l
                                                }), "DISCOVERY" === c.component && c.show && (0, n.jsx)(m.Z, {
                                                    onClick: se
                                                }), "LIVE" === c.component && (0, n.jsx)(p.Z, {
                                                    onClick: oe,
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
                            children: t.map(function(e) {
                                var t;
                                return (0, n.jsxs)("div", {
                                    style: {
                                        width: e.size
                                    },
                                    className: (0, i.Z)(u()["story-bar__carousel-item"], u()["story-bar__carousel-item--isMobile"]),
                                    children: ["STORY_SKELETON" === e.component && (0, n.jsx)(y.Z, {
                                        count: 1,
                                        newUi: r
                                    }), "PUBLIC_STORY" === e.component && (0, n.jsx)(d.Z, {
                                        isLazy: l,
                                        onClick: null !== (t = e.onClick) && void 0 !== t ? t : ee,
                                        user: e,
                                        newUi: r
                                    }), "MY_STORY" === e.component && e.show && (0, n.jsx)(s.Z, {
                                        isLazy: l
                                    }), "DISCOVERY" === e.component && e.show && (0, n.jsx)(m.Z, {
                                        onClick: se
                                    }), "LIVE" === e.component && (0, n.jsx)(p.Z, {
                                        onClick: oe,
                                        isLazy: l
                                    }), "REELS" === e.component && (0, n.jsx)(h.Z, {
                                        isLazy: l,
                                        newUi: r
                                    })]
                                }, e.user.id)
                            })
                        }), O && (0, n.jsx)(x, {
                            show: !0,
                            data: X,
                            preferredIndex: Q,
                            onNext: te,
                            onClose: re,
                            onPrevious: ne,
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
                s = t(65074),
                o = t.n(s),
                a = t(99783),
                l = t.n(a),
                u = t(45835);
            r.Z = function(e) {
                var r, t = e.onClick,
                    s = (0, u.b)().ua;
                return (0, n.jsxs)("div", {
                    className: (0, i.Z)(l()["story-bar-discovery"], (r = {}, _define_property(r, l()["story-bar-discovery--isPc"], s.isPc), _define_property(r, l()["story-bar-discovery--isMobile"], !s.isPc), r)),
                    onClick: t,
                    children: [(0, n.jsx)("div", {
                        children: "برای استوری‌های بیشتر"
                    }), (0, n.jsx)(o(), {
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
                s = t(27583),
                o = t.n(s),
                a = t(45835),
                l = t(55253),
                u = t.n(l),
                c = t(56855),
                d = t.n(c);

            function _(e) {
                var r = e.onClick,
                    t = e.isLazy,
                    s = void 0 !== t && t,
                    l = (0, a.b)().ua;
                return (0, n.jsxs)("div", {
                    className: o()["story-bar-live"],
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
                        className: o()["story-bar-live__avatar"],
                        children: [(0, n.jsx)(u(), {
                            size: l.isPc ? "96" : "72",
                            src: "https://statics.basalam.com/public-82/admin/58WaP/05-13/zzpGxCL2q1QNNuEibbtgnOsfznfnHHjgGZIjpul9syjd9D9xkx.png",
                            storyStatus: "unseen",
                            lazy: s
                        }), (0, n.jsx)(d(), {
                            label: "زنده",
                            variant: "fill",
                            className: o()["story-bar-live__label"]
                        })]
                    }), (0, n.jsx)("div", {
                        className: (0, i.Z)(o()["story-bar-live__title"], _define_property({}, o()["story-bar-live__title--isMobile"], l.isMobile)),
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
                s = t(27434),
                o = t(2389),
                a = t.n(o),
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
                var r, t, o = e.isLazy,
                    a = void 0 !== o && o,
                    u = (0, _.b)().ua,
                    y = _sliced_to_array((0, l.useDisclosure)(), 2),
                    v = y[0],
                    p = y[1],
                    g = p.open,
                    w = p.close,
                    x = (0, s.useRef)(null),
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
                            lazy: a,
                            className: c()["story-bar-reels__main-avatar"]
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
                s = t(88592),
                o = t(30257),
                a = t(177),
                l = t.n(a),
                u = t(40276),
                c = t(5164),
                d = t(87694),
                _ = t(27434);
            r.Z = (0, _.memo)(function() {
                var e, r, t, a = (0, d.ml)(25),
                    y = a.hasNextPage,
                    f = a.fetchNextPage,
                    v = a.data,
                    b = a.isFetchingNextPage,
                    p = a.isLoading,
                    h = (0, o.rv)().data,
                    m = (0, s.M_)(["isLoggedIn", "currentUser"]),
                    g = m.isLoggedIn,
                    w = m.currentUser,
                    x = _sliced_to_array((0, _.useState)(!1), 2),
                    j = x[0],
                    S = x[1],
                    k = (0, _.useRef)((0, c.isClientSide)() ? c.bsLocalStorage.getItem(u.S) : void 0),
                    C = v || k.current,
                    L = !j || !k.current && p,
                    O = (0, _.useMemo)(function() {
                        var e, r, t = null == C || null === (e = C.pages) || void 0 === e ? void 0 : e.flatMap(function(e) {
                            return e.openapiRawData
                        }).map(function(e) {
                            return _object_spread_props(_object_spread({}, e), {
                                component: "PUBLIC_STORY",
                                hasUnseen: e.stories.some(function(e) {
                                    return !1 === e.isSeen
                                })
                            })
                        });
                        return (null == t ? void 0 : t.length) > 0 && t.push({
                            size: "170px",
                            show: !L,
                            component: "DISCOVERY",
                            excludeFromNavigation: !0,
                            user: {
                                id: "discovery"
                            }
                        }), g && (null == w || null === (r = w.vendor) || void 0 === r ? void 0 : r.isActive) && (null == t || t.splice(0, 0, {
                            show: !0,
                            component: "MY_STORY",
                            excludeFromNavigation: !0,
                            user: {
                                id: "my-stories"
                            }
                        })), (null == h ? void 0 : h.length) > 0 && (null == t || t.splice(function() {
                            var e, r = null == t ? void 0 : t.findIndex(function(e) {
                                var r;
                                return 68565 === (null == e || null === (r = e.user) || void 0 === r ? void 0 : r.id)
                            });
                            return r >= 0 ? r + 1 : g && (null == w || null === (e = w.vendor) || void 0 === e ? void 0 : e.isActive) ? 1 : 0
                        }(), 0, {
                            show: !0,
                            component: "REELS",
                            excludeFromNavigation: !0,
                            user: {
                                id: "reel"
                            }
                        })), t
                    }, [L, g, null == C || null === (e = C.pages) || void 0 === e ? void 0 : e.length, null == w || null === (r = w.vendor) || void 0 === r ? void 0 : r.isActive, null == h ? void 0 : h.length]),
                    P = (0, d.NS)(),
                    N = (0, _.useCallback)(function(e) {
                        var r;
                        e > (null !== (r = null == O ? void 0 : O.length) && void 0 !== r ? r : 0) - 4 - 1 && y && !b && !L && f()
                    }, [null == O ? void 0 : O.length, y, f, b, L]);
                if ((0, _.useEffect)(function() {
                        if (C && !(null == C ? void 0 : C.cached) && !(0, c.isServerSide)()) {
                            var e = function() {
                                c.bsLocalStorage.setItem(u.S, _object_spread_props(_object_spread({}, C), {
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
                    }, [C]), (0, _.useEffect)(function() {
                        S(!0)
                    }, []), L || void 0 !== O && 0 !== O.length || (null == w || null === (t = w.vendor) || void 0 === t ? void 0 : t.isActive)) return (0, n.jsx)(l(), {
                    children: (0, n.jsx)("div", {
                        "data-from": "home",
                        children: (0, n.jsx)(i.Z, {
                            usersList: O,
                            isLoading: L,
                            onStoryMutation: P,
                            onVisibleIndexChange: N
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
                "story-bar-reels--isMobile": "CrdEPv"
            }
        }
    }
]);