function _array_like_to_array(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
    return t
}

function _array_with_holes(e) {
    if (Array.isArray(e)) return e
}

function asyncGeneratorStep(e, n, r, t, i, o, s) {
    try {
        var a = e[o](s),
            l = a.value
    } catch (e) {
        return void r(e)
    }
    a.done ? n(l) : Promise.resolve(l).then(t, i)
}

function _async_to_generator(e) {
    return function() {
        var n = this,
            r = arguments;
        return new Promise(function(t, i) {
            var o = e.apply(n, r);

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

function _define_property(e, n, r) {
    return n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = r, e
}

function _iterable_to_array_limit(e, n) {
    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != r) {
        var t, i, o = [],
            s = !0,
            a = !1;
        try {
            for (r = r.call(e); !(s = (t = r.next()).done) && (o.push(t.value), !n || o.length !== n); s = !0);
        } catch (e) {
            a = !0, i = e
        } finally {
            try {
                s || null == r.return || r.return()
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
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), t.forEach(function(n) {
            _define_property(e, n, r[n])
        })
    }
    return e
}

function ownKeys(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        n && (t = t.filter(function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
        })), r.push.apply(r, t)
    }
    return r
}

function _object_spread_props(e, n) {
    return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
    }), e
}

function _sliced_to_array(e, n) {
    return _array_with_holes(e) || _iterable_to_array_limit(e, n) || _unsupported_iterable_to_array(e, n) || _non_iterable_rest()
}

function _unsupported_iterable_to_array(e, n) {
    if (e) {
        if ("string" == typeof e) return _array_like_to_array(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _array_like_to_array(e, n) : void 0
    }
}

function _ts_generator(e, n) {
    var r, t, i, o = {
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
                if (r) throw new TypeError("Generator is already executing.");
                for (; s && (s = 0, a[0] && (o = 0)), o;) try {
                    if (r = 1, t && (i = 2 & a[0] ? t.return : a[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, a[1])).done) return i;
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
                    a = n.call(e, o)
                } catch (e) {
                    a = [6, e], t = 0
                } finally {
                    r = i = 0
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
        20472: function(e, n, r) {
            "use strict";
            r.d(n, {
                FW: function() {
                    return o
                },
                Oe: function() {
                    return i
                },
                XR: function() {
                    return a
                },
                lH: function() {
                    return c
                },
                lo: function() {
                    return l
                },
                pQ: function() {
                    return d
                },
                px: function() {
                    return u
                },
                sJ: function() {
                    return s
                }
            });
            var t = r(79614);

            function i(e) {
                var n = e.id,
                    r = e.deviceId;
                return t.DZ.post("/web/v1/live/room/join", {
                    room_id: n,
                    device_id: r
                })
            }

            function o(e) {
                var n = e.liveId;
                return t.DZ.get("/web/v1/live/room/".concat(n))
            }

            function s(e) {
                var n = e.id,
                    r = e.metadata;
                return t.DZ.put("/web/v1/live/room/".concat(n), {
                    metadata: r,
                    room_id: n
                })
            }

            function a(e) {
                var n = e.liveId,
                    r = e.participantId,
                    i = e.banType;
                return t.DZ.post("/web/v1/live/room/participant/ban", {
                    room_id: n,
                    ban_type: i,
                    identity: r
                })
            }

            function l(e) {
                var n = e.liveId;
                return t.DZ.delete("/web/v1/live/room/".concat(n))
            }

            function u(e) {
                var n = e.pageParam,
                    r = void 0 === n ? {
                        limit: 12,
                        offset: 0
                    } : n;
                return t.DZ.get("/web/v1/live/rooms?limit=".concat(r.limit, "&offset=").concat(r.offset))
            }

            function c(e) {
                var n = e.liveId,
                    r = e.comment,
                    i = e.deviceId;
                return t.DZ.post("/web/v1/live/comment", {
                    comment: r,
                    room_id: n,
                    device_id: i
                })
            }

            function d(e) {
                var n = e.liveId;
                return t.DZ.get("/web/v1/live/room/".concat(n, "/comments?limit=100&offset=0"))
            }
        },
        46930: function(e, n, r) {
            "use strict";
            r.d(n, {
                H$: function() {
                    return a
                },
                OX: function() {
                    return l
                },
                R9: function() {
                    return u
                },
                Sn: function() {
                    return c
                },
                Vn: function() {
                    return o
                },
                e9: function() {
                    return f
                },
                kl: function() {
                    return s
                },
                vu: function() {
                    return d
                }
            });
            var t = r(67938),
                i = r(20472),
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, t.Db)(i.Oe, e)
                },
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, t.aM)(["live-".concat(e.liveId)], function() {
                        return (0, i.FW)({
                            liveId: e.liveId
                        })
                    }, e)
                },
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, t.Db)(i.sJ, e)
                },
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, t.Db)(i.XR, e)
                },
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, t.Db)(i.lo, e)
                },
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, t.Db)(i.lH, e)
                },
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, t.aM)(["lives-explore"], i.px, e)
                },
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, t.aM)(["live-".concat(e.liveId, "-comments")], function() {
                        return (0, i.pQ)({
                            liveId: e.liveId
                        })
                    }, e)
                }
        },
        65955: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return j
                }
            });
            var t = r(32930),
                i = r(2389),
                o = r.n(i),
                s = r(66120),
                a = r.n(s),
                l = r(5164),
                u = r(36350),
                c = r(55253),
                d = r.n(c),
                f = r(88592),
                _ = new Set(["image/jpeg", "image/png"]),
                v = new Set(["video/mp4", "video/quicktime"]),
                y = function(e) {
                    return new Promise(function(n) {
                        var r = _.has(e.type),
                            t = v.has(e.type),
                            i = e.size / 1024 / 1024;
                        if (r) n(i > 4 ? {
                            isValid: !1,
                            fileType: "image",
                            errorMessage: "سایز فایل تصویر باید کمتر از ".concat(4, " مگابایت باشد.")
                        } : {
                            isValid: !0,
                            fileType: "image"
                        });
                        else if (t)
                            if (i > 60) n({
                                isValid: !1,
                                fileType: "video",
                                errorMessage: "سایز فایل ویدیو باید کمتر از ".concat(60, " مگابایت باشد.")
                            });
                            else {
                                var o = document.createElement("video");
                                o.preload = "metadata", o.addEventListener("loadedmetadata", function() {
                                    window.URL.revokeObjectURL(o.src);
                                    var e = o.duration;
                                    n(e > 16 ? {
                                        isValid: !1,
                                        errorMessage: "مدت زمان ویدیو باید کمتر از ".concat(16, " ثانیه باشد.")
                                    } : {
                                        isValid: !0,
                                        fileType: "video"
                                    })
                                }), o.src = URL.createObjectURL(e)
                            }
                        else n({
                            isValid: !1,
                            errorMessage: "فقط فایل‌های JPEG، PNG و ویدیوهای MP4 و MOV قابل قبول هستند."
                        })
                    })
                },
                b = r(85945),
                p = r(45835),
                h = r(27434),
                m = r(89504),
                g = r(87694),
                w = o()(function() {
                    return Promise.all([r.e(3620), r.e(2998), r.e(6740)]).then(r.bind(r, 66740))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [66740]
                        }
                    },
                    ssr: !1
                }),
                x = o()(function() {
                    return Promise.all([r.e(3620), r.e(4563), r.e(6182)]).then(r.bind(r, 4563))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [4563]
                        }
                    },
                    ssr: !1
                }),
                j = function(e) {
                    var n, r = e.isLazy,
                        i = void 0 !== r && r,
                        o = (0, f.M_)(["currentUser"]).currentUser,
                        s = _sliced_to_array((0, h.useState)(null), 2),
                        c = s[0],
                        _ = s[1],
                        v = (0, p.b)(),
                        j = v.ua,
                        S = v.isWebview,
                        k = (0, h.useRef)(null),
                        I = (0, u.useSnackbar)(),
                        C = I.showErrorSnackbar,
                        O = I.showWarningSnackbar,
                        P = I.hideSnackbar,
                        N = _sliced_to_array((0, h.useState)(!1), 2),
                        L = N[0],
                        M = N[1],
                        E = _sliced_to_array((0, h.useState)(!1), 2),
                        Z = E[0],
                        z = E[1],
                        D = _sliced_to_array((0, h.useState)(), 2),
                        R = D[0],
                        V = D[1],
                        T = (0, b.NL)(),
                        U = (0, g.EU)(),
                        Y = U.data,
                        W = U.refetch,
                        A = U.isLoading;
                    (0, h.useEffect)(function() {
                        S && window.WebviewInterfaceVersion === m.gO.MOSTLY_WEBVIEW && (window.updateStories = function() {
                            T.refetchQueries({
                                queryKey: ["my-stories"]
                            }), (null == o ? void 0 : o.id) && T.resetQueries({
                                queryKey: [g.HL, null == o ? void 0 : o.id]
                            }), (null == o ? void 0 : o.identifier) && T.resetQueries({
                                queryKey: ["story", g.sY, null == o ? void 0 : o.identifier]
                            })
                        })
                    }, [o, T, S]);
                    var B = (0, h.useMemo)(function() {
                            var e;
                            return {
                                user: o,
                                stories: (null == Y || null === (e = Y.stories) || void 0 === e ? void 0 : e.flatMap(function(e) {
                                    return e.stories
                                }).reverse()) || []
                            }
                        }, [Y, o]),
                        F = (0, g.NS)(),
                        G = function() {
                            return _async_to_generator(function() {
                                var e, n, r;
                                return _ts_generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, window.scheduler.yield()];
                                        case 1:
                                            return t.sent(), (null == Y ? void 0 : Y.isBlocked) ? C("به علت نقض قوانین باسلام، دسترسی شما به استوری بسته شده. پیگیری بیشتر، با ثبت تیکت پشتیبانی.") : S ? (r = (0, m.Cw)(), null === (e = r.onCreateStoryClick) || void 0 === e || e.call(r, !0)) : null === (n = k.current) || void 0 === n || n.click(), [2]
                                    }
                                })
                            })()
                        };
                    return (0, t.jsxs)(t.Fragment, {
                        children: [L && (0, t.jsx)(w, {
                            onStoryUpload: function() {
                                return W()
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
                                    return _ts_generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return [4, window.scheduler.yield()];
                                            case 1:
                                                return n.sent(), e && z(!1), W(), [2]
                                        }
                                    })
                                })()
                            },
                            show: !0,
                            data: B,
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
                            onStoryMutation: F,
                            isLoading: A,
                            preferredIndex: "first"
                        }), (0, t.jsxs)("div", {
                            className: a()["my-story__user"],
                            children: [(0, t.jsx)(d(), {
                                hasAddStoryButton: !0,
                                onAddStoryButtonClick: G,
                                onClick: function() {
                                    return _async_to_generator(function() {
                                        var e, n;
                                        return _ts_generator(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, window.scheduler.yield()];
                                                case 1:
                                                    return r.sent(), B.stories.length > 0 ? A || (S && window.WebviewInterfaceVersion === m.gO.MOSTLY_WEBVIEW ? (n = (0, m.Cw)(), null === (e = n.onVendorStoryClick) || void 0 === e || e.call(n, JSON.stringify([(0, l.snakize)(_object_spread_props(_object_spread({}, B), {
                                                        is_followed: !0
                                                    }))]))) : z(!0)) : G(), [2]
                                            }
                                        })
                                    })()
                                },
                                src: null == o || null === (n = o.avatar) || void 0 === n ? void 0 : n.medium,
                                size: j.isPc ? "96" : "72",
                                storyStatus: B.stories.length > 0 ? "seen" : "none",
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
                                    var n, r, t, i, o, s, a, l;
                                    return _ts_generator(this, function(u) {
                                        switch (u.label) {
                                            case 0:
                                                if (n = e.target, r = n.files, !(t = r[0])) return [3, 4];
                                                u.label = 1;
                                            case 1:
                                                return u.trys.push([1, 3, , 4]), i = O("در حال بررسی فایل"), [4, y(t)];
                                            case 2:
                                                return o = u.sent(), s = o.isValid, a = o.errorMessage, l = o.fileType, P(i), V(l), s ? (_(t), M(!0)) : C(a), [3, 4];
                                            case 3:
                                                return u.sent(), C("مشکلی در پردازش فایل پیش آمده است."), [3, 4];
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
        3660: function(e, n, r) {
            "use strict";
            var t = r(32930),
                i = r(40877),
                o = r(27434),
                s = r(55253),
                a = r.n(s),
                l = r(39305),
                u = r.n(l),
                c = r(45835);
            n.Z = (0, o.memo)(function(e) {
                var n, r, o, s = e.user,
                    l = e.onClick,
                    d = e.newUi,
                    f = e.isLazy,
                    _ = void 0 !== f && f,
                    v = (0, c.b)().ua;
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
                    children: [(0, t.jsx)(a(), {
                        size: v.isPc ? "96" : "72",
                        src: null === (n = s.user.avatar) || void 0 === n ? void 0 : n.medium,
                        storyStatus: s.hasUnseen ? "unseen" : "seen",
                        storyRingColor: "suggested" === (null == s ? void 0 : s.suggestLabel) ? "secondary" : "primary",
                        className: u()["story-bar-user__avatar"],
                        lazy: _
                    }), (0, t.jsx)("div", {
                        className: u()["story-bar-user__title"],
                        children: (null === (r = s.user.vendor) || void 0 === r ? void 0 : r.title) || (null === (o = s.user) || void 0 === o ? void 0 : o.name)
                    })]
                })
            })
        },
        56794: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return x
                }
            });
            var t = r(32930),
                i = r(40877),
                o = r(65955),
                s = r(2389),
                a = r.n(s),
                l = r(45840),
                u = r.n(l),
                c = r(3660),
                d = r(58633),
                f = r(5164),
                _ = r(45835),
                v = r(88107),
                y = r(50607),
                b = r(64683),
                p = r(22455),
                h = r(27434),
                m = r(89504),
                g = a()(function() {
                    return Promise.all([r.e(3620), r.e(4563), r.e(6182)]).then(r.bind(r, 4563))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [4563]
                        }
                    },
                    ssr: !1
                }),
                w = a()(function() {
                    return Promise.all([r.e(3620), r.e(690)]).then(r.bind(r, 690))
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
                var n = e.newUi,
                    r = e.usersList,
                    s = e.isLoading,
                    a = e.isLazy,
                    l = void 0 !== a && a,
                    x = e.onStoryMutation,
                    j = e.onVisibleIndexChange,
                    S = e.fetchNextPageStories,
                    k = (0, v.Z)(),
                    I = _sliced_to_array((0, h.useState)(!1), 2),
                    C = I[0],
                    O = I[1],
                    P = _sliced_to_array((0, h.useState)(null), 2),
                    N = P[0],
                    L = P[1],
                    M = _sliced_to_array((0, h.useState)(null), 2),
                    E = M[0],
                    Z = M[1],
                    z = _sliced_to_array((0, h.useState)(null), 2),
                    D = z[0],
                    R = z[1],
                    V = _sliced_to_array((0, h.useState)(null), 2),
                    T = V[0],
                    U = V[1],
                    Y = (0, h.useRef)(),
                    W = (0, h.useRef)(null),
                    A = (0, _.b)(),
                    B = A.ua,
                    F = A.isWebview,
                    G = (0, h.useMemo)(function() {
                        return null == r ? void 0 : r.find(function(e) {
                            return e.user.id === N
                        })
                    }, [N, null == r ? void 0 : r.length]),
                    q = (0, h.useCallback)(function(e) {
                        L(e);
                        var n = null == r ? void 0 : r.findIndex(function(n) {
                                return n.user.id === e
                            }),
                            t = null == r ? void 0 : r.findIndex(function(e, r) {
                                return r > n && !0 !== e.excludeFromNavigation
                            }),
                            i = null == r ? void 0 : r.map(function(e, r) {
                                return r < n && !0 !== e.excludeFromNavigation
                            }).lastIndexOf(!0);
                        Z(-1 === t ? null : r[t].user.id), R(-1 === i ? null : r[i].user.id), null == j || j(t)
                    }, [null == r ? void 0 : r.length, j]),
                    Q = (0, h.useCallback)(function(e) {
                        return _async_to_generator(function() {
                            var n, t, i;
                            return _ts_generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return o.sent(), F && window.WebviewInterfaceVersion === m.gO.MOSTLY_WEBVIEW ? (t = (0, m.Cw)(), i = [], null == r || r.forEach(function(e) {
                                            var n = _object_spread({}, e, e.user);
                                            Number.isNaN(Number(n.id)) || i.push(n)
                                        }), null === (n = t.onStoryClick) || void 0 === n || n.call(t, JSON.stringify((0, f.snakize)(i)), e)) : (q(e), O(!0), U(null)), [2]
                                }
                            })
                        })()
                    }, [q, null == r ? void 0 : r.length, F]),
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
                                        return e.sent(), null === E ? J() : (q(E), U("first")), [2]
                                }
                            })
                        })()
                    }, [J, E, q]),
                    H = (0, h.useCallback)(function() {
                        return _async_to_generator(function() {
                            return _ts_generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.scheduler.yield()];
                                    case 1:
                                        return e.sent(), null !== D && (q(D), U(null)), [2]
                                }
                            })
                        })()
                    }, [D, q]),
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
                                        return e.sent(), (0, f.publishEvent)("discoveryMoreButtonClick", {
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
                                        return e.sent(), (0, f.publishEvent)("liveButtonClick", {
                                            location: "home-top-bar-avatar"
                                        }), k.push("/live"), [2]
                                }
                            })
                        })()
                    }, []);
                return (0, h.useEffect)(function() {
                    var e, n = null === (e = Y.current) || void 0 === e ? void 0 : e.swiper;
                    n && (null == j || j(n.activeIndex + n.slidesPerViewDynamic()))
                }, [j]), (0, h.useEffect)(function() {
                    var e = W.current;
                    if (e) {
                        var n = new IntersectionObserver(function(e) {
                            e.forEach(function(e) {
                                e.isIntersecting && S()
                            })
                        }, {
                            root: null,
                            threshold: .5,
                            rootMargin: "0px"
                        });
                        return n.observe(e),
                            function() {
                                n.unobserve(e)
                            }
                    }
                }, [null == r ? void 0 : r.length]), (0, t.jsx)("div", {
                    className: (0, i.Z)(u()["story-bar"], _define_property({}, u()["story-bar--new-ui"], n)),
                    children: s ? (0, t.jsx)(d.Z, {
                        count: B.isPc ? 10 : 4,
                        newUi: n
                    }) : r && r.length > 0 ? (0, t.jsxs)(t.Fragment, {
                        children: [B.isPc && (0, t.jsx)(w, {
                            isLazy: l,
                            newUi: n,
                            onClick: Q,
                            usersList: r,
                            carouselRef: Y,
                            goToLivePage: ee,
                            onActiveIndexChange: X,
                            goToDiscoveryPage: $
                        }), !B.isPc && (0, t.jsx)("div", {
                            className: u()["story-bar__carousel"],
                            children: r.map(function(e, s) {
                                var a, f = s === r.length - 2;
                                return (0, t.jsxs)("div", {
                                    ref: f ? W : null,
                                    style: {
                                        width: e.size
                                    },
                                    className: (0, i.Z)(u()["story-bar__carousel-item"], u()["story-bar__carousel-item--isMobile"]),
                                    children: ["STORY_SKELETON" === e.component && (0, t.jsx)(d.Z, {
                                        count: 1,
                                        newUi: n
                                    }), "PUBLIC_STORY" === e.component && (0, t.jsx)(c.Z, {
                                        isLazy: l,
                                        onClick: null !== (a = e.onClick) && void 0 !== a ? a : Q,
                                        user: e,
                                        newUi: n
                                    }), "MY_STORY" === e.component && e.show && (0, t.jsx)(o.Z, {
                                        isLazy: l
                                    }), "DISCOVERY" === e.component && e.show && (0, t.jsx)(p.Z, {
                                        onClick: $
                                    }), "LIVE" === e.component && (0, t.jsx)(y.Z, {
                                        onClick: ee,
                                        isLazy: l
                                    }), "REELS" === e.component && (0, t.jsx)(b.Z, {
                                        isLazy: l
                                    })]
                                }, e.user.id)
                            })
                        }), C && (0, t.jsx)(g, {
                            show: !0,
                            data: G,
                            preferredIndex: T,
                            onNext: K,
                            onClose: J,
                            onPrevious: H,
                            onStoryMutation: x
                        })]
                    }) : null
                })
            }
        },
        22455: function(e, n, r) {
            "use strict";
            var t = r(32930),
                i = r(40877),
                o = r(65074),
                s = r.n(o),
                a = r(99783),
                l = r.n(a),
                u = r(45835);
            n.Z = function(e) {
                var n, r = e.onClick,
                    o = (0, u.b)().ua;
                return (0, t.jsxs)("div", {
                    className: (0, i.Z)(l()["story-bar-discovery"], (n = {}, _define_property(n, l()["story-bar-discovery--isPc"], o.isPc), _define_property(n, l()["story-bar-discovery--isMobile"], !o.isPc), n)),
                    onClick: r,
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
        50607: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return f
                }
            });
            var t = r(32930),
                i = r(40877),
                o = r(27583),
                s = r.n(o),
                a = r(45835),
                l = r(55253),
                u = r.n(l),
                c = r(56855),
                d = r.n(c);

            function f(e) {
                var n = e.onClick,
                    r = e.isLazy,
                    o = void 0 !== r && r,
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
                                        return e.sent(), null == n || n(), [2]
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
        64683: function(e, n, r) {
            "use strict";
            r.d(n, {
                Z: function() {
                    return g
                }
            });
            var t = r(32930),
                i = r(40877),
                o = r(27434),
                s = r(2389),
                a = r.n(s),
                l = r(36350),
                u = r(69511),
                c = r.n(u),
                d = r(95433),
                f = r(45835),
                _ = r(55253),
                v = r.n(_),
                y = r(76303),
                b = r.n(y),
                p = r(56855),
                h = r.n(p),
                m = a()(function() {
                    return Promise.all([r.e(3620), r.e(7028), r.e(2584), r.e(4230)]).then(r.bind(r, 82584))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [82584]
                        }
                    },
                    ssr: !1
                });

            function g(e) {
                var n, r, s = e.isLazy,
                    a = void 0 !== s && s,
                    u = (0, f.b)().ua,
                    _ = _sliced_to_array((0, l.useDisclosure)(), 2),
                    y = _[0],
                    p = _[1],
                    g = p.open,
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
                                        return e.sent(), g(), [2]
                                }
                            })
                        })()
                    },
                    children: [(0, t.jsxs)("div", {
                        className: c()["story-bar-reels__avatar"],
                        children: [(0, t.jsx)(v(), {
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
                    }), y && (0, t.jsx)(m, {
                        show: !0,
                        reels: S,
                        onClose: function(e) {
                            return _async_to_generator(function() {
                                return _ts_generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return null == e || e.stopPropagation(), [4, window.scheduler.yield()];
                                        case 1:
                                            return n.sent(), w(), [2]
                                    }
                                })
                            })()
                        },
                        isLoading: k,
                        currentContentIdOnClicked: (null == S || null === (n = S[null == x ? void 0 : x.current]) || void 0 === n ? void 0 : n.id) || (null == S || null === (r = S.at(0)) || void 0 === r ? void 0 : r.id),
                        setCheckPoint: function(e) {
                            x.current = e
                        }
                    })]
                })
            }
        },
        91740: function(e, n, r) {
            "use strict";
            var t = r(32930),
                i = r(56794),
                o = r(88592),
                s = r(95433),
                a = r(177),
                l = r.n(a),
                u = r(46930),
                c = r(45835),
                d = r(40276),
                f = r(5164),
                _ = r(87694),
                v = r(27434);
            n.Z = (0, v.memo)(function() {
                var e, n, r, a, y = (0, c.b)().ua,
                    b = y.isPc,
                    p = y.isWebview,
                    h = (0, _.ml)(b || p ? 25 : 10),
                    m = h.hasNextPage,
                    g = h.fetchNextPage,
                    w = h.data,
                    x = h.isFetchingNextPage,
                    j = h.isLoading,
                    S = (0, s.rv)().data,
                    k = (0, u.vu)().data,
                    I = (0, o.M_)(["isLoggedIn", "currentUser"]),
                    C = I.isLoggedIn,
                    O = I.currentUser,
                    P = _sliced_to_array((0, v.useState)(!1), 2),
                    N = P[0],
                    L = P[1],
                    M = (0, v.useRef)((0, f.isClientSide)() ? f.bsLocalStorage.getItem(d.S) : void 0),
                    E = w || M.current,
                    Z = !N || !M.current && j,
                    z = (0, v.useMemo)(function() {
                        var e, n, r, t = null == E || null === (e = E.pages) || void 0 === e ? void 0 : e.flatMap(function(e) {
                                return e.openapiRawData
                            }).map(function(e) {
                                return _object_spread_props(_object_spread({}, e), {
                                    component: "PUBLIC_STORY",
                                    hasUnseen: e.stories.some(function(e) {
                                        return !1 === e.isSeen
                                    })
                                })
                            }),
                            i = function() {
                                var e, n = null == t ? void 0 : t.findIndex(function(e) {
                                    var n;
                                    return 68565 === (null == e || null === (n = e.user) || void 0 === n ? void 0 : n.id)
                                });
                                return n >= 0 ? n + 1 : C && (null == O || null === (e = O.vendor) || void 0 === e ? void 0 : e.isActive) ? 1 : 0
                            },
                            o = null == t ? void 0 : t.length;
                        return o > 0 && t.push({
                            size: "170px",
                            show: !Z,
                            component: "DISCOVERY",
                            excludeFromNavigation: !0,
                            user: {
                                id: "discovery"
                            }
                        }), C && (null == O || null === (n = O.vendor) || void 0 === n ? void 0 : n.isActive) && (null == t || t.splice(0, 0, {
                            show: !0,
                            component: "MY_STORY",
                            excludeFromNavigation: !0,
                            user: {
                                id: "my-stories"
                            }
                        })), (null == k || null === (r = k.rooms) || void 0 === r ? void 0 : r.length) > 0 && (null == t || t.splice(i(), 0, {
                            show: !0,
                            component: "LIVE",
                            excludeFromNavigation: !0,
                            user: {
                                id: "live"
                            }
                        })), (null == S ? void 0 : S.length) > 0 && (null == t || t.splice(i(), 0, {
                            show: !0,
                            component: "REELS",
                            excludeFromNavigation: !0,
                            user: {
                                id: "reel"
                            }
                        })), m && !b && !p && o > 0 && (null == t || t.splice(-1, 0, {
                            show: !0,
                            component: "STORY_SKELETON",
                            excludeFromNavigation: !0,
                            user: {
                                id: "story-skeleton"
                            }
                        })), t
                    }, [Z, C, null == E || null === (e = E.pages) || void 0 === e ? void 0 : e.length, null == k || null === (n = k.rooms) || void 0 === n ? void 0 : n.length, null == O || null === (r = O.vendor) || void 0 === r ? void 0 : r.isActive, null == S ? void 0 : S.length]),
                    D = (0, _.NS)(),
                    R = (0, v.useCallback)(function(e) {
                        var n;
                        e > (null !== (n = null == z ? void 0 : z.length) && void 0 !== n ? n : 0) - 4 - 1 && m && !x && !Z && g()
                    }, [null == z ? void 0 : z.length, m, g, x, Z]);
                (0, v.useEffect)(function() {
                    if (E && !(null == E ? void 0 : E.cached) && !(0, f.isServerSide)()) {
                        var e = function() {
                            f.bsLocalStorage.setItem(d.S, _object_spread_props(_object_spread({}, E), {
                                cached: !0
                            }), 1440)
                        };
                        if ("requestIdleCallback" in window) {
                            var n = requestIdleCallback(e);
                            return function() {
                                cancelIdleCallback(n)
                            }
                        }
                        e()
                    }
                }, [E]), (0, v.useEffect)(function() {
                    L(!0)
                }, []);
                var V = (0, v.useCallback)(function() {
                    b || p || x || g()
                }, [b, p, g, x]);
                if (Z || void 0 !== z && 0 !== z.length || (null == O || null === (a = O.vendor) || void 0 === a ? void 0 : a.isActive)) return (0, t.jsx)(l(), {
                    children: (0, t.jsx)("div", {
                        "data-from": "home",
                        children: (0, t.jsx)(i.Z, {
                            usersList: z,
                            isLoading: Z,
                            onStoryMutation: D,
                            onVisibleIndexChange: R,
                            fetchNextPageStories: V
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
                "story-bar-user__avatar": "_clH8t"
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