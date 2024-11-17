"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3074], {
        92603: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return g
                }
            });
            var o = i(7896),
                n = i(2784),
                r = i(86894),
                a = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                l = (0, r.Z)(function(e) {
                    return a.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
                }),
                s = i(58586),
                d = i(82792),
                c = i(83373),
                u = i(82668),
                p = function(e) {
                    return "theme" !== e
                },
                m = function(e) {
                    return "string" == typeof e && e.charCodeAt(0) > 96 ? l : p
                },
                v = function(e, t, i) {
                    var o;
                    if (t) {
                        var n = t.shouldForwardProp;
                        o = e.__emotion_forwardProp && n ? function(t) {
                            return e.__emotion_forwardProp(t) && n(t)
                        } : n
                    }
                    return "function" != typeof o && i && (o = e.__emotion_forwardProp), o
                },
                h = function(e) {
                    var t = e.cache,
                        i = e.serialized,
                        o = e.isStringTag;
                    return (0, d.hC)(t, i, o), (0, u.L)(function() {
                        return (0, d.My)(t, i, o)
                    }), null
                },
                g = (function e(t, i) {
                    var r, a, l = t.__emotion_real === t,
                        u = l && t.__emotion_base || t;
                    void 0 !== i && (r = i.label, a = i.target);
                    var p = v(t, i, l),
                        g = p || m(u),
                        f = !g("as");
                    return function() {
                        var y = arguments,
                            b = l && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
                        if (void 0 !== r && b.push("label:" + r + ";"), null == y[0] || void 0 === y[0].raw) b.push.apply(b, y);
                        else {
                            b.push(y[0][0]);
                            for (var k = y.length, x = 1; x < k; x++) b.push(y[x], y[0][x])
                        }
                        var w = (0, s.w)(function(e, t, i) {
                            var o = f && e.as || u,
                                r = "",
                                l = [],
                                v = e;
                            if (null == e.theme) {
                                for (var y in v = {}, e) v[y] = e[y];
                                v.theme = n.useContext(s.T)
                            }
                            "string" == typeof e.className ? r = (0, d.fp)(t.registered, l, e.className) : null != e.className && (r = e.className + " ");
                            var k = (0, c.O)(b.concat(l), t.registered, v);
                            r += t.key + "-" + k.name, void 0 !== a && (r += " " + a);
                            var x = f && void 0 === p ? m(o) : g,
                                w = {};
                            for (var P in e)(!f || "as" !== P) && x(P) && (w[P] = e[P]);
                            return w.className = r, w.ref = i, n.createElement(n.Fragment, null, n.createElement(h, {
                                cache: t,
                                serialized: k,
                                isStringTag: "string" == typeof o
                            }), n.createElement(o, w))
                        });
                        return w.displayName = void 0 !== r ? r : "Styled(" + ("string" == typeof u ? u : u.displayName || u.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = u, w.__emotion_styles = b, w.__emotion_forwardProp = p, Object.defineProperty(w, "toString", {
                            value: function() {
                                return "." + a
                            }
                        }), w.withComponent = function(t, n) {
                            return e(t, (0, o.Z)({}, i, n, {
                                shouldForwardProp: v(w, n, !0)
                            })).apply(void 0, b)
                        }, w
                    }
                }).bind();
            ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function(e) {
                g[e] = g(e)
            })
        },
        60139: function(e, t, i) {
            i.r(t);
            var o = i(52903),
                n = i(33429),
                r = i(23116),
                a = i(78303),
                l = i(85866),
                s = i(54973),
                d = i(3534);
            t.default = e => {
                var t, i;
                let {
                    slider: c,
                    side: u,
                    background: p,
                    lcpr: m,
                    secondSide: v
                } = e, h = (0, n.b)();
                return (0, o.BX)("div", {
                    "data-lcpr": m,
                    className: "relative from-[#F6F7FB] to-[#F8FBFF] pb-[21px] md:pb-0",
                    children: [(0, o.tZ)(l.Z, {
                        mobile: {
                            src: null == p ? void 0 : null === (t = p.mobile) || void 0 === t ? void 0 : t.url
                        },
                        desktop: {
                            src: null == p ? void 0 : null === (i = p.web) || void 0 === i ? void 0 : i.url
                        }
                    }), (0, o.BX)("div", {
                        className: "omd:container-lite relative md:flex md:flex-row md:gap-3 md:py-4",
                        children: [(0, o.tZ)("div", {
                            className: "h-auto shrink-0 md:max-w-[805px] md:basis-[805px]",
                            children: (0, o.tZ)(a.v, {
                                swiper: {
                                    indicators: {
                                        activecolor: "var(--gray-600)",
                                        defaultcolor: "var(--gray-400)",
                                        className: "w-100 left-0 !bottom-[-23px] md:!bottom-0"
                                    },
                                    lazy: !0,
                                    slidesPerView: 1,
                                    direction: "horizontal",
                                    speed: 1e3,
                                    loop: c.length > 1,
                                    autoplay: {
                                        delay: 5e3
                                    },
                                    key: "banner-carousel",
                                    navigation: {
                                        prevEl: ".navigation-prev-banner-carousel",
                                        nextEl: ".navigation-next-banner-carousel"
                                    }
                                },
                                slide: {
                                    data: c.map((e, t) => {
                                        var i, n, a, l, c, u, p, m;
                                        return (0, o.BX)(d.r, {
                                            href: e.redirectUrl || "/",
                                            children: [(0, o.tZ)(s.Z, {
                                                fetchPriority: 0 === t ? "high" : "auto",
                                                onLoad: () => (0, r.UW)({
                                                    id: e.redirectUrl || ""
                                                }),
                                                onClick: () => {
                                                    (0, r.Ig)({
                                                        id: e.redirectUrl || ""
                                                    }), h.onViewPromotionBanner(e.redirectUrl)
                                                },
                                                src: (null === (n = e.image) || void 0 === n ? void 0 : null === (i = n.mobile) || void 0 === i ? void 0 : i.url) || "",
                                                alt: (null === (l = e.image) || void 0 === l ? void 0 : null === (a = l.mobile) || void 0 === a ? void 0 : a.alt) || "",
                                                width: 375,
                                                height: 188,
                                                sizes: "100vw",
                                                className: "omd:hidden h-[calc(100vw_*_188_/_375)] w-full object-cover"
                                            }), (0, o.tZ)(s.Z, {
                                                fetchPriority: 0 === t ? "high" : "auto",
                                                onLoad: () => (0, r.UW)({
                                                    id: e.redirectUrl || ""
                                                }),
                                                onClick: () => {
                                                    (0, r.Ig)({
                                                        id: e.redirectUrl || ""
                                                    }), h.onViewPromotionBanner(e.redirectUrl)
                                                },
                                                src: (null === (u = e.image) || void 0 === u ? void 0 : null === (c = u.web) || void 0 === c ? void 0 : c.url) || "",
                                                alt: (null === (m = e.image) || void 0 === m ? void 0 : null === (p = m.web) || void 0 === p ? void 0 : p.alt) || "",
                                                width: 805,
                                                height: 246,
                                                className: "umd:hidden h-[246px] w-[805px] object-cover rounded-xl"
                                            })]
                                        }, t)
                                    })
                                },
                                className: "md:overflow-hidden md:rounded-xl",
                                onNavigationButton: {
                                    onNext: () => h.onClickSlideNext("banner"),
                                    onPrev: () => h.onClickSlideBack("banner")
                                }
                            })
                        }), (0, o.tZ)("div", {
                            className: "flex w-full flex-col gap-3 md:px-0",
                            children: [u, v].map((e, t) => {
                                var i, n;
                                return (0, o.tZ)(d.r, {
                                    href: (null == e ? void 0 : e.url) || "",
                                    className: "hidden max-w-[399px] md:block",
                                    children: (0, o.tZ)(s.Z, {
                                        fetchPriority: "high",
                                        onLoad: () => (0, r.UW)({
                                            id: (null == e ? void 0 : e.url) || ""
                                        }),
                                        onClick: () => {
                                            (0, r.Ig)({
                                                id: (null == e ? void 0 : e.url) || ""
                                            }), h.onViewPromotionBanner(e.url)
                                        },
                                        src: (null === (i = e.image) || void 0 === i ? void 0 : i.url) || "",
                                        alt: (null === (n = e.image) || void 0 === n ? void 0 : n.alt) || "",
                                        width: 399,
                                        height: 117,
                                        quality: 90,
                                        className: "rounded-xl h-[117px] w-[399px] object-cover"
                                    })
                                }, "side-".concat(t))
                            })
                        })]
                    })]
                })
            }
        },
        78303: function(e, t, i) {
            i.d(t, {
                v: function() {
                    return p
                }
            });
            var o = i(52903),
                n = i(57506),
                r = i(74899),
                a = i(37193),
                l = i(25237),
                s = i.n(l),
                d = i(2784);
            let c = s()(() => Promise.resolve().then(i.bind(i, 74573)), {
                    loadableGenerated: {
                        webpack: () => [74573]
                    },
                    ssr: !1
                }),
                u = s()(() => Promise.resolve().then(i.bind(i, 25028)), {
                    loadableGenerated: {
                        webpack: () => [25028]
                    },
                    ssr: !1
                }),
                p = e => {
                    var t, i, l, s, p, m, v, h, g, f, y, b, k, x, w, P, _;
                    let {
                        slide: C,
                        onNavigationButton: N,
                        ...S
                    } = e, T = (0, d.useId)(), {
                        swiper: A = {
                            key: T
                        }
                    } = S, {
                        key: Z,
                        ...U
                    } = A;
                    return (0, o.BX)(a.YX, {
                        ...S,
                        children: [(0, o.tZ)(n.tq, {
                            ...U,
                            pagination: !1 !== A.pagination && {
                                clickable: !0,
                                el: ".swiper-pagination-".concat(Z)
                            },
                            modules: [r.tl, r.pt, r.rj, r.W_, r.oM],
                            children: null == C ? void 0 : null === (t = C.data) || void 0 === t ? void 0 : t.map((e, t) => (0, o.tZ)(n.o5, {
                                ...C,
                                children: e
                            }, t))
                        }, Z), !1 === A.pagination ? null : (0, o.tZ)("div", {
                            slot: "pagination",
                            ...A.indicators,
                            className: "".concat((null === (i = A.indicators) || void 0 === i ? void 0 : i.type) === "line" && "swiper-pagination-line", " swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-").concat(Z, " text-center ").concat((null === (l = A.indicators) || void 0 === l ? void 0 : l.className) ? " ".concat(null === (s = A.indicators) || void 0 === s ? void 0 : s.className) : "")
                        }), !1 === A.navigation || (null == C ? void 0 : null === (p = C.data) || void 0 === p ? void 0 : p.length) === 1 ? null : (0, o.BX)(o.HY, {
                            children: [(0, o.tZ)("div", {
                                style: null === (v = A.buttonControl) || void 0 === v ? void 0 : null === (m = v.buttonPrev) || void 0 === m ? void 0 : m.style,
                                className: "absolute top-[50%] left-[10px] z-[2] hidden h-8 w-8 -translate-y-[50%] items-center justify-center rounded-full bg-overlay-secondary hover:cursor-pointer hover:bg-overlay-primary md:flex navigation-prev-".concat(Z, " ").concat((null === (g = A.buttonControl) || void 0 === g ? void 0 : null === (h = g.buttonPrev) || void 0 === h ? void 0 : h.className) ? "".concat(null === (y = A.buttonControl) || void 0 === y ? void 0 : null === (f = y.buttonPrev) || void 0 === f ? void 0 : f.className) : ""),
                                onClick: null == N ? void 0 : N.onPrev,
                                children: (0, o.tZ)(c, {
                                    className: "h-6 w-6 text-text-white"
                                })
                            }), (0, o.tZ)("div", {
                                style: null === (k = A.buttonControl) || void 0 === k ? void 0 : null === (b = k.buttonNext) || void 0 === b ? void 0 : b.style,
                                className: "absolute top-[50%] right-[10px] z-[2] hidden h-8 w-8 -translate-y-[50%] items-center justify-center rounded-full bg-overlay-secondary hover:cursor-pointer hover:bg-overlay-primary md:flex navigation-next-".concat(Z, " ").concat((null === (w = A.buttonControl) || void 0 === w ? void 0 : null === (x = w.buttonNext) || void 0 === x ? void 0 : x.className) ? "".concat(null === (_ = A.buttonControl) || void 0 === _ ? void 0 : null === (P = _.buttonNext) || void 0 === P ? void 0 : P.className) : ""),
                                onClick: null == N ? void 0 : N.onNext,
                                children: (0, o.tZ)(u, {
                                    className: "h-6 w-6 text-text-white"
                                })
                            })]
                        })]
                    })
                }
        }
    }
]);