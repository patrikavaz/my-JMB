function _array_like_to_array(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
    return t
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function asyncGeneratorStep(e, r, n, t, i, o, s) {
    try {
        var a = e[o](s),
            l = a.value
    } catch (e) {
        return void n(e)
    }
    a.done ? r(l) : Promise.resolve(l).then(t, i)
}

function _async_to_generator(e) {
    return function() {
        var r = this,
            n = arguments;
        return new Promise(function(t, i) {
            var o = e.apply(r, n);

            function s(e) {
                asyncGeneratorStep(o, t, i, s, a, "next", e)
            }

            function a(e) {
                asyncGeneratorStep(o, t, i, s, a, "throw", e)
            }
            s(void 0)
        })
    }
}

function _define_property(e, r, n) {
    return r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = n, e
}

function _iterable_to_array_limit(e, r) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != n) {
        var t, i, o = [],
            s = !0,
            a = !1;
        try {
            for (n = n.call(e); !(s = (t = n.next()).done) && (o.push(t.value), !r || o.length !== r); s = !0);
        } catch (e) {
            a = !0, i = e
        } finally {
            try {
                s || null == n.return || n.return()
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
        var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), t.forEach(function(r) {
            _define_property(e, r, n[r])
        })
    }
    return e
}

function ownKeys(e, r) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        r && (t = t.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), n.push.apply(n, t)
    }
    return n
}

function _object_spread_props(e, r) {
    return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
    }), e
}

function _sliced_to_array(e, r) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, r) || _unsupported_iterable_to_array(e, r) || _non_iterable_rest()
}

function _unsupported_iterable_to_array(e, r) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, r);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _array_like_to_array(e, r) : void 0
    }
}

function _ts_generator(e, r) {
    var n, t, i, o = {
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
                if (n) throw new TypeError("Generator is already executing.");
                for (; s && (s = 0, a[0] && (o = 0)), o;) try {
                    if (n = 1, t && (i = 2 & a[0] ? t.return : a[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, a[1])).done) return i;
                    switch (t = 0, i && (a = [2 & a[0], i.value]), a[0]) {
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
                            o.label++, t = a[1], a = [0];
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
                    a = [6, e], t = 0
                } finally {
                    n = i = 0
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
        65955: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return j
                }
            });
            var t = n(32930),
                i = n(2389),
                o = n.n(i),
                s = n(66120),
                a = n.n(s),
                l = n(5164),
                u = n(36350),
                c = n(55253),
                d = n.n(c),
                _ = n(88592),
                y = new Set(["image/jpeg", "image/png"]),
                f = new Set(["video/mp4", "video/quicktime"]),
                v = function(e) {
                    return new Promise(function(r) {
                        var n = y.has(e.type),
                            t = f.has(e.type),
                            i = e.size / 1024 / 1024;
                        if (n) r(i > 4 ? {
                            isValid: !1,
                            fileType: "image",
                            errorMessage: "سایز فایل تصویر باید کمتر از ".concat(4, " مگابایت باشد.")
                        } : {
                            isValid: !0,
                            fileType: "image"
                        });
                        else if (t)
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
                b = n(85945),
                p = n(45835),
                h = n(27434),
                g = n(89504),
                m = n(87694),
                w = o()(function() {
                    return Promise.all([n.e(3620), n.e(2998), n.e(6740)]).then(n.bind(n, 66740))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [66740]
                        }
                    },
                    ssr: !1
                }),
                x = o()(function() {
                    return Promise.all([n.e(3620), n.e(4563), n.e(6182)]).then(n.bind(n, 4563))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [4563]
                        }
                    },
                    ssr: !1
                }),
                j = function(e) {
                    var r, n = e.isLazy,
                        i = void 0 !== n && n,
                        o = (0, _.M_)(["currentUser"]).currentUser,
                        s = _sliced_to_array((0, h.useState)(null), 2),
                        c = s[0],
                        y = s[1],
                        f = (0, p.b)(),
                        j = f.ua,
                        S = f.isWebview,
                        k = (0, h.useRef)(null),
                        C = (0, u.useSnackbar)(),
                        P = C.showErrorSnackbar,
                        O = C.showWarningSnackbar,
                        N = C.hideSnackbar,
                        I = _sliced_to_array((0, h.useState)(!1), 2),
                        L = I[0],
                        M = I[1],
                        E = _sliced_to_array((0, h.useState)(!1), 2),
                        Z = E[0],
                        z = E[1],
                        U = _sliced_to_array((0, h.useState)(), 2),
                        R = U[0],
                        T = U[1],
                        V = (0, b.NL)(),
                        Y = (0, m.EU)(),
                        A = Y.data,
                        B = Y.refetch,
                        D = Y.isLoading;
                    (0, h.useEffect)(function() {
                        S && window.WebviewInterfaceVersion === g.gO.MOSTLY_WEBVIEW && (window.updateStories = function() {
                            V.refetchQueries({
                                queryKey: ["my-stories"]
                            }), (null == o ? void 0 : o.id) && V.resetQueries({
                                queryKey: [m.HL, null == o ? void 0 : o.id]
                            }), (null == o ? void 0 : o.identifier) && V.resetQueries({
                                queryKey: ["story", m.sY, null == o ? void 0 : o.identifier]
                            })
                        })
                    }, [o, V, S]);
                    var W = (0, h.useMemo)(function() {
                            var e;
                            return {
                                user: o,
                                stories: (null == A || null === (e = A.stories) || void 0 === e ? void 0 : e.flatMap(function(e) {
                                    return e.stories
                                }).reverse()) || []
                            }
                        }, [A, o]),
                        G = (0, m.NS)(),
                        q = function() {
                            return _async_to_generator(function() {
                                var e, r, n;
                                return _ts_generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, window.scheduler.yield()];
                                        case 1:
                                            return t.sent(), (null == A ? void 0 : A.isBlocked) ? P("به علت نقض قوانین باسلام، دسترسی شما به استوری بسته شده. پیگیری بیشتر، با ثبت تیکت پشتیبانی.") : S ? (n = (0, g.Cw)(), null === (e = n.onCreateStoryClick) || void 0 === e || e.call(n, !0)) : null === (r = k.current) || void 0 === r || r.click(), [2]
                                    }
                                })
                            })()
                        };
                    return (0, t.jsxs)(t.Fragment, {
                        children: [L && (0, t.jsx)(w, {
                            onStoryUpload: function() {
                                return B()
                            },
                            selectedStory: c,
                            storyType: R,
                            isShow: L,
                            closeModal: function() {
                                return M(!1)
                            }
                        }), Z && (0, t.jsx)(x, {
                            isMyStory: !0,
                            onDelete: function(e) {
                                return _async_to_generator(function() {
                                    return _ts_generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, window.scheduler.yield()];
                                            case 1:
                                                return r.sent(), e && z(!1), B(), [2]
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
                                                return e.sent(), z(!1), [2]
                                        }
                                    })
                                })()
                            },
                            onStoryMutation: G,
                            isLoading: D,
                            preferredIndex: "first"
                        }), (0, t.jsxs)("div", {
                            className: a()["my-story__user"],
                            children: [(0, t.jsx)(d(), {
                                hasAddStoryButton: !0,
                                onAddStoryButtonClick: q,
                                onClick: function() {
                                    return _async_to_generator(function() {
                                        var e, r;
                                        return _ts_generator(this, function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return [4, window.scheduler.yield()];
                                                case 1:
                                                    return n.sent(), W.stories.length > 0 ? D || (S && window.WebviewInterfaceVersion === g.gO.MOSTLY_WEBVIEW ? (r = (0, g.Cw)(), null === (e = r.onVendorStoryClick) || void 0 === e || e.call(r, JSON.stringify([(0, l.snakize)(_object_spread_props(_object_spread({}, W), {
                                                        is_followed: !0
                                                    }))]))) : z(!0)) : q(), [2]
                                            }
                                        })
                                    })()
                                },
                                src: null == o || null === (r = o.avatar) || void 0 === r ? void 0 : r.medium,
                                size: j.isPc ? "96" : "72",
                                storyStatus: W.stories.length > 0 ? "seen" : "none",
                                lazy: i
                            }), (0, t.jsx)("div", {
                                className: a()["my-story__title"],
                                children: "استوری جدید"
                            })]
                        }), (0, t.jsx)("input", {
                            ref: k,
                            type: "file",
                            accept: "image/png,image/jpeg,video/mp4,video/quicktime",
                            className: a()["my-story__story-upload-input"],
                            onChange: function(e) {
                                return _async_to_generator(function() {
                                    var r, n, t, i, o, s, a, l;
                                    return _ts_generator(this, function(u) {
                                        switch (u.label) {
                                            case 0:
                                                if (r = e.target, n = r.files, !(t = n[0])) return [3, 4];
                                                u.label = 1;
                                            case 1:
                                                return u.trys.push([1, 3, , 4]), i = O("در حال بررسی فایل"), [4, v(t)];
                                            case 2:
                                                return o = u.sent(), s = o.isValid, a = o.errorMessage, l = o.fileType, N(i), T(l), s ? (y(t), M(!0)) : P(a), [3, 4];
                                            case 3:
                                                return u.sent(), P("مشکلی در پردازش فایل پیش آمده است."), [3, 4];
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
        3660: function(e, r, n) {
            "use strict";
            var t = n(32930),
                i = n(40877),
                o = n(27434),
                s = n(55253),
                a = n.n(s),
                l = n(39305),
                u = n.n(l),
                c = n(45835);
            r.Z = (0, o.memo)(function(e) {
                var r, n, o, s = e.user,
                    l = e.onClick,
                    d = e.newUi,
                    _ = e.isLazy,
                    y = void 0 !== _ && _,
                    f = (0, c.b)().ua;
                return (0, t.jsxs)("div", {
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
                    children: [(0, t.jsxs)("div", {
                        className: u()["story-bar-user__wrapper"],
                        children: [(0, t.jsx)(a(), {
                            size: f.isPc ? "96" : "72",
                            src: null === (r = s.user.avatar) || void 0 === r ? void 0 : r.medium,
                            storyStatus: s.hasUnseen ? "unseen" : "seen",
                            storyRingColor: "suggested" === (null == s ? void 0 : s.suggestLabel) ? "secondary" : "primary",
                            className: u()["story-bar-user__main-avatar"],
                            lazy: y
                        }), (null == s ? void 0 : s.hasAddStory) && (0, t.jsx)(a(), {
                            src: "https://statics.basalam.com/public-132/admin/7PQmB8/09-25/46CI8sY9xYZ0dJrMBlDZBTC7rcZU83FQMIdCTZa8IMQo5FfpIU.png",
                            storyStatus: s.hasUnseen ? "unseen" : "seen",
                            storyRingColor: "suggested" === (null == s ? void 0 : s.suggestLabel) ? "secondary" : "primary",
                            className: u()["story-bar-user__reels-avatar"],
                            lazy: y
                        })]
                    }), (0, t.jsx)("div", {
                        className: u()["story-bar-user__title"],
                        children: (null === (n = s.user.vendor) || void 0 === n ? void 0 : n.title) || (null === (o = s.user) || void 0 === o ? void 0 : o.name)
                    })]
                })
            })
        },
        56794: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return x
                }
            });
            var t = n(32930),
                i = n(40877),
                o = n(65955),
                s = n(2389),
                a = n.n(s),
                l = n(45840),
                u = n.n(l),
                c = n(3660),
                d = n(58633),
                _ = n(5164),
                y = n(45835),
                f = n(88107),
                v = n(50607),
                b = n(64683),
                p = n(22455),
                h = n(27434),
                g = n(89504),
                m = a()(function() {
                    return Promise.all([n.e(3620), n.e(4563), n.e(6182)]).then(n.bind(n, 4563))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [4563]
                        }
                    },
                    ssr: !1
                }),
                w = a()(function() {
                    return Promise.all([n.e(3620), n.e(690)]).then(n.bind(n, 690))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [690]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, t.jsx)(d.Z, {
                            count: 10
                        })
                    }
                });

            function x(e) {
                var r = e.newUi,
                    n = e.usersList,
                    s = e.isLoading,
                    a = e.isLazy,
                    l = void 0 !== a && a,
                    x = e.onStoryMutation,
                    j = e.onVisibleIndexChange,
                    S = e.fetchNextPageStories,
                    k = (0, f.Z)(),
                    C = _sliced_to_array((0, h.useState)(!1), 2),
                    P = C[0],
                    O = C[1],
                    N = _sliced_to_array((0, h.useState)(null), 2),
                    I = N[0],
                    L = N[1],
                    M = _sliced_to_array((0, h.useState)(null), 2),
                    E = M[0],
                    Z = M[1],
                    z = _sliced_to_array((0, h.useState)(null), 2),
                    U = z[0],
                    R = z[1],
                    T = _sliced_to_array((0, h.useState)(null), 2),
                    V = T[0],
                    Y = T[1],
                    A = (0, h.useRef)(),
                    B = (0, h.useRef)(null),
                    D = (0, y.b)(),
                    W = D.ua,
                    G = D.isWebview,
                    q = (0, h.useMemo)(function() {
                        return null == n ? void 0 : n.find(function(e) {
                            return e.user.id === I
                        })
                    }, [I, null == n ? void 0 : n.length]),
                    F = (0, h.useCallback)(function(e) {
                        L(e);
                        var r = null == n ? void 0 : n.findIndex(function(r) {
                                return r.user.id === e
                            }),
                            t = null == n ? void 0 : n.findIndex(function(e, n) {
                                return n > r && !0 !== e.excludeFromNavigation
                            }),
                            i = null == n ? void 0 : n.map(function(e, n) {
                                return n < r && !0 !== e.excludeFromNavigation
                            }).lastIndexOf(!0);
                        Z(-1 === t ? null : n[t].user.id), R(-1 === i ? null : n[i].user.id), null == j || j(t)
                    }, [null == n ? void 0 : n.length, j]),
                    Q = (0, h.useCallback)(function(e) {
                        return _async_to_generator(function() {
                            var r, t, i;
                            return _ts_generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return o.sent(), G && window.WebviewInterfaceVersion === g.gO.MOSTLY_WEBVIEW ? (t = (0, g.Cw)(), i = [], null == n || n.forEach(function(e) {
                                            var r = _object_spread({}, e, e.user);
                                            Number.isNaN(Number(r.id)) || i.push(r)
                                        }), null === (r = t.onStoryClick) || void 0 === r || r.call(t, JSON.stringify((0, _.snakize)(i)), e)) : (F(e), O(!0), Y(null)), [2]
                                }
                            })
                        })()
                    }, [F, null == n ? void 0 : n.length, G]),
                    J = (0, h.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), O(!1), [2]
                                }
                            })
                        })()
                    }, []),
                    K = (0, h.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), null === E ? J() : (F(E), Y("first")), [2]
                                }
                            })
                        })()
                    }, [J, E, F]),
                    H = (0, h.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), null !== U && (F(U), Y(null)), [2]
                                }
                            })
                        })()
                    }, [U, F]),
                    X = (0, h.useCallback)(function(e) {
                        null == j || j(e.activeIndex + e.slidesPerViewDynamic())
                    }, [j]),
                    $ = (0, h.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), (0, _.publishEvent)("discoveryMoreButtonClick", {
                                            location: "home-top-bar-avatar"
                                        }), k.push("/discovery"), [2]
                                }
                            })
                        })()
                    }, []),
                    ee = (0, h.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), (0, _.publishEvent)("liveButtonClick", {
                                            location: "home-top-bar-avatar"
                                        }), k.push("/live"), [2]
                                }
                            })
                        })()
                    }, []);
                return (0, h.useEffect)(function() {
                    var e, r = null === (e = A.current) || void 0 === e ? void 0 : e.swiper;
                    r && (null == j || j(r.activeIndex + r.slidesPerViewDynamic()))
                }, [j]), (0, h.useEffect)(function() {
                    var e = B.current;
                    if (e) {
                        var r = new IntersectionObserver(function(e) {
                            e.forEach(function(e) {
                                e.isIntersecting && S()
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
                }, [null == n ? void 0 : n.length]), (0, t.jsx)("div", {
                    className: (0, i.Z)(u()["story-bar"], _define_property({}, u()["story-bar--new-ui"], r)),
                    children: s ? (0, t.jsx)(d.Z, {
                        count: W.isPc ? 10 : 4,
                        newUi: r
                    }) : n && n.length > 0 ? (0, t.jsxs)(t.Fragment, {
                        children: [W.isPc && (0, t.jsx)(w, {
                            isLazy: l,
                            newUi: r,
                            onClick: Q,
                            usersList: n,
                            carouselRef: A,
                            goToLivePage: ee,
                            onActiveIndexChange: X,
                            goToDiscoveryPage: $
                        }), !W.isPc && (0, t.jsx)("div", {
                            className: u()["story-bar__carousel"],
                            children: n.map(function(e, s) {
                                var a, _ = s === n.length - 2;
                                return (0, t.jsxs)("div", {
                                    ref: _ ? B : null,
                                    style: {
                                        width: e.size
                                    },
                                    className: (0, i.Z)(u()["story-bar__carousel-item"], u()["story-bar__carousel-item--isMobile"]),
                                    children: ["STORY_SKELETON" === e.component && (0, t.jsx)(d.Z, {
                                        count: 1,
                                        newUi: r
                                    }), "PUBLIC_STORY" === e.component && (0, t.jsx)(c.Z, {
                                        isLazy: l,
                                        onClick: null !== (a = e.onClick) && void 0 !== a ? a : Q,
                                        user: e,
                                        newUi: r
                                    }), "MY_STORY" === e.component && e.show && (0, t.jsx)(o.Z, {
                                        isLazy: l
                                    }), "DISCOVERY" === e.component && e.show && (0, t.jsx)(p.Z, {
                                        onClick: $
                                    }), "LIVE" === e.component && (0, t.jsx)(v.Z, {
                                        onClick: ee,
                                        isLazy: l
                                    }), "REELS" === e.component && (0, t.jsx)(b.Z, {
                                        isLazy: l
                                    })]
                                }, e.user.id)
                            })
                        }), P && (0, t.jsx)(m, {
                            show: !0,
                            data: q,
                            preferredIndex: V,
                            onNext: K,
                            onClose: J,
                            onPrevious: H,
                            onStoryMutation: x
                        })]
                    }) : null
                })
            }
        },
        22455: function(e, r, n) {
            "use strict";
            var t = n(32930),
                i = n(40877),
                o = n(65074),
                s = n.n(o),
                a = n(99783),
                l = n.n(a),
                u = n(45835);
            r.Z = function(e) {
                var r, n = e.onClick,
                    o = (0, u.b)().ua;
                return (0, t.jsxs)("div", {
                    className: (0, i.Z)(l()["story-bar-discovery"], (r = {}, _define_property(r, l()["story-bar-discovery--isPc"], o.isPc), _define_property(r, l()["story-bar-discovery--isMobile"], !o.isPc), r)),
                    onClick: n,
                    children: [(0, t.jsx)("div", {
                        children: "برای استوری‌های بیشتر"
                    }), (0, t.jsx)(s(), {
                        icon: "bi-angle-left",
                        iconPosition: "center-end",
                        variant: "text",
                        label: "برو بازارگردی",
                        className: l()["story-bar-discovery__button"]
                    })]
                })
            }
        },
        50607: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return _
                }
            });
            var t = n(32930),
                i = n(40877),
                o = n(27583),
                s = n.n(o),
                a = n(45835),
                l = n(55253),
                u = n.n(l),
                c = n(56855),
                d = n.n(c);

            function _(e) {
                var r = e.onClick,
                    n = e.isLazy,
                    o = void 0 !== n && n,
                    l = (0, a.b)().ua;
                return (0, t.jsxs)("div", {
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
                    children: [(0, t.jsxs)("div", {
                        className: s()["story-bar-live__avatar"],
                        children: [(0, t.jsx)(u(), {
                            size: l.isPc ? "96" : "72",
                            src: "https://statics.basalam.com/public-82/admin/58WaP/05-13/zzpGxCL2q1QNNuEibbtgnOsfznfnHHjgGZIjpul9syjd9D9xkx.png",
                            storyStatus: "unseen",
                            lazy: o
                        }), (0, t.jsx)(d(), {
                            label: "زنده",
                            variant: "fill",
                            className: s()["story-bar-live__label"]
                        })]
                    }), (0, t.jsx)("div", {
                        className: (0, i.Z)(s()["story-bar-live__title"], _define_property({}, s()["story-bar-live__title--isMobile"], l.isMobile)),
                        children: (0, t.jsx)("span", {
                            children: "مشاهده"
                        })
                    })]
                })
            }
        },
        64683: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return m
                }
            });
            var t = n(32930),
                i = n(40877),
                o = n(27434),
                s = n(2389),
                a = n.n(s),
                l = n(36350),
                u = n(69511),
                c = n.n(u),
                d = n(30257),
                _ = n(45835),
                y = n(55253),
                f = n.n(y),
                v = n(76303),
                b = n.n(v),
                p = n(56855),
                h = n.n(p),
                g = a()(function() {
                    return Promise.all([n.e(3620), n.e(7028), n.e(9994), n.e(5428)]).then(n.bind(n, 49994))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [49994]
                        }
                    },
                    ssr: !1
                });

            function m(e) {
                var r, n, s = e.isLazy,
                    a = void 0 !== s && s,
                    u = (0, _.b)().ua,
                    y = _sliced_to_array((0, l.useDisclosure)(), 2),
                    v = y[0],
                    p = y[1],
                    m = p.open,
                    w = p.close,
                    x = (0, o.useRef)(null),
                    j = (0, d.rv)(),
                    S = j.data,
                    k = j.isLoading;
                return (0, t.jsxs)("div", {
                    className: c()["story-bar-reels"],
                    onClick: function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), m(), [2]
                                }
                            })
                        })()
                    },
                    children: [(0, t.jsxs)("div", {
                        className: c()["story-bar-reels__avatar"],
                        children: [(0, t.jsx)(f(), {
                            size: (null == u ? void 0 : u.isPc) ? "96" : "72",
                            src: "https://statics.basalam.com/public-132/admin/7PQmB8/09-25/46CI8sY9xYZ0dJrMBlDZBTC7rcZU83FQMIdCTZa8IMQo5FfpIU.png",
                            storyStatus: "unseen",
                            lazy: a
                        }), (0, t.jsx)(h(), {
                            label: "جدید",
                            size: (null == u ? void 0 : u.isPc) ? "md" : "sm",
                            variant: "fill",
                            className: c()["story-bar-reels__label"]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: (0, i.Z)(c()["story-bar-reels__title"], _define_property({}, c()["story-bar-reels__title--isMobile"], !(null == u ? void 0 : u.isPc))),
                        children: [(0, t.jsx)("span", {
                            children: "ویدئوها"
                        }), (0, t.jsx)(b(), {
                            name: "bi-angle-left",
                            color: "var(--gray-800)"
                        })]
                    }), v && (0, t.jsx)(g, {
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
                        currentContentIdOnClicked: (null == S || null === (r = S[null == x ? void 0 : x.current]) || void 0 === r ? void 0 : r.id) || (null == S || null === (n = S.at(0)) || void 0 === n ? void 0 : n.id),
                        setCheckPoint: function(e) {
                            x.current = e
                        }
                    })]
                })
            }
        },
        91740: function(e, r, n) {
            "use strict";
            var t = n(32930),
                i = n(56794),
                o = n(88592),
                s = n(30257),
                a = n(177),
                l = n.n(a),
                u = n(45835),
                c = n(40276),
                d = n(5164),
                _ = n(87694),
                y = n(27434);
            r.Z = (0, y.memo)(function() {
                var e, r, n, a = (0, u.b)().ua,
                    f = a.isPc,
                    v = a.isWebview,
                    b = (0, _.ml)(f || v ? 25 : 10),
                    p = b.hasNextPage,
                    h = b.fetchNextPage,
                    g = b.data,
                    m = b.isFetchingNextPage,
                    w = b.isLoading,
                    x = (0, s.rv)().data,
                    j = (0, o.M_)(["isLoggedIn", "currentUser"]),
                    S = j.isLoggedIn,
                    k = j.currentUser,
                    C = _sliced_to_array((0, y.useState)(!1), 2),
                    P = C[0],
                    O = C[1],
                    N = (0, y.useRef)((0, d.isClientSide)() ? d.bsLocalStorage.getItem(c.S) : void 0),
                    I = g || N.current,
                    L = !P || !N.current && w,
                    M = (0, y.useMemo)(function() {
                        var e, r, n = null == I || null === (e = I.pages) || void 0 === e ? void 0 : e.flatMap(function(e) {
                                return e.openapiRawData
                            }).map(function(e) {
                                return _object_spread_props(_object_spread({}, e), {
                                    component: "PUBLIC_STORY",
                                    hasUnseen: e.stories.some(function(e) {
                                        return !1 === e.isSeen
                                    })
                                })
                            }),
                            t = null == n ? void 0 : n.length;
                        return t > 0 && n.push({
                            size: "170px",
                            show: !L,
                            component: "DISCOVERY",
                            excludeFromNavigation: !0,
                            user: {
                                id: "discovery"
                            }
                        }), S && (null == k || null === (r = k.vendor) || void 0 === r ? void 0 : r.isActive) && (null == n || n.splice(0, 0, {
                            show: !0,
                            component: "MY_STORY",
                            excludeFromNavigation: !0,
                            user: {
                                id: "my-stories"
                            }
                        })), (null == x ? void 0 : x.length) > 0 && (null == n || n.splice(function() {
                            var e, r = null == n ? void 0 : n.findIndex(function(e) {
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
                        })), p && !f && !v && t > 0 && (null == n || n.splice(-1, 0, {
                            show: !0,
                            component: "STORY_SKELETON",
                            excludeFromNavigation: !0,
                            user: {
                                id: "story-skeleton"
                            }
                        })), n
                    }, [L, S, null == I || null === (e = I.pages) || void 0 === e ? void 0 : e.length, null == k || null === (r = k.vendor) || void 0 === r ? void 0 : r.isActive, null == x ? void 0 : x.length]),
                    E = (0, _.NS)(),
                    Z = (0, y.useCallback)(function(e) {
                        var r;
                        e > (null !== (r = null == M ? void 0 : M.length) && void 0 !== r ? r : 0) - 4 - 1 && p && !m && !L && h()
                    }, [null == M ? void 0 : M.length, p, h, m, L]);
                (0, y.useEffect)(function() {
                    if (I && !(null == I ? void 0 : I.cached) && !(0, d.isServerSide)()) {
                        var e = function() {
                            d.bsLocalStorage.setItem(c.S, _object_spread_props(_object_spread({}, I), {
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
                }, [I]), (0, y.useEffect)(function() {
                    O(!0)
                }, []);
                var z = (0, y.useCallback)(function() {
                    f || v || m || h()
                }, [f, v, h, m]);
                if (L || void 0 !== M && 0 !== M.length || (null == k || null === (n = k.vendor) || void 0 === n ? void 0 : n.isActive)) return (0, t.jsx)(l(), {
                    children: (0, t.jsx)("div", {
                        "data-from": "home",
                        children: (0, t.jsx)(i.Z, {
                            usersList: M,
                            isLoading: L,
                            onStoryMutation: E,
                            onVisibleIndexChange: Z,
                            fetchNextPageStories: z
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
                "story-bar--new-ui": "gZNARZ"
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