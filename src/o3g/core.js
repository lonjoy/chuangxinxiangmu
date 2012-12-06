(function (a, c) {
    function e(a) {
        return j.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    function f(a) {
        if (!bb[a]) {
            var c = u.body,
            e = j("<" + a + ">").appendTo(c),
            f = e.css("display");
            e.remove();
            if (f === "none" || f === "") {
                ua || (ua = u.createElement("iframe"), ua.frameBorder = ua.width = ua.height = 0);
                c.appendChild(ua);
                if (!Ka || !ua.createElement)
                    Ka = (ua.contentWindow || ua.contentDocument).document, Ka.write((u.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), Ka.close();
                e = Ka.createElement(a);
                Ka.body.appendChild(e);
                f = j.css(e, "display");
                c.removeChild(ua)
            }
            bb[a] = f
        }
        return bb[a]
    }
    function g(a, c) {
        var e = {};
        j.each(gb.concat.apply([], gb.slice(0, c)), function () {
            e[this] = a
        });
        return e
    }
    function h() {
        Va = c
    }
    function i() {
        setTimeout(h, 0);
        return Va = j.now()
    }
    function k() {
        try {
            return new a.XMLHttpRequest
        } catch (c) {}
        
    }
    function m(a, c, e, f) {
        if (j.isArray(c))
            j.each(c, function (c, g) {
                e || rb.test(a) ? f(a, g) : m(a + "[" + (typeof g == "object" || j.isArray(g) ? c : "") + "]", g, e, f)
            });
        else if (!e && c != null && typeof c == "object")
            for (var g in c)
                m(a + "[" + g + "]", c[g], e, f);
        else
            f(a,
                c)
    }
    function n(a, e) {
        var f,
        g,
        h = j.ajaxSettings.flatOptions || {};
        for (f in e)
            e[f] !== c && ((h[f] ? a : g || (g = {}))[f] = e[f]);
        g && j.extend(!0, a, g)
    }
    function p(a, e, f, g, h, j) {
        h = h || e.dataTypes[0];
        j = j || {};
        j[h] = !0;
        for (var h = a[h], i = 0, k = h ? h.length : 0, m = a === cb, n; i < k && (m || !n); i++)
            n = h[i](e, f, g), typeof n == "string" && (!m || j[n] ? n = c : (e.dataTypes.unshift(n), n = p(a, e, f, g, n, j)));
        (m || !n) && !j["*"] && (n = p(a, e, f, g, "*", j));
        return n
    }
    function s(a) {
        return function (c, e) {
            typeof c != "string" && (e = c, c = "*");
            if (j.isFunction(e))
                for (var f = c.toLowerCase().split(hb),
                    g = 0, h = f.length, i, k, m; g < h; g++)
                    i = f[g], m = /^\+/.test(i), m && (i = i.substr(1) || "*"), k = a[i] = a[i] || [], k[m ? "unshift" : "push"](e)
        }
    }
    function q(a, c, e) {
        var f = c === "width" ? a.offsetWidth : a.offsetHeight,
        g = c === "width" ? sb : tb;
        if (f > 0)
            return e !== "border" && j.each(g, function () {
                e || (f -= parseFloat(j.css(a, "padding" + this)) || 0);
                e === "margin" ? f += parseFloat(j.css(a, e + this)) || 0 : f -= parseFloat(j.css(a, "border" + this + "Width")) || 0
            }), f + "px";
        f = La(a, c, c);
        if (f < 0 || f == null)
            f = a.style[c] || 0;
        f = parseFloat(f) || 0;
        e && j.each(g, function () {
            f += parseFloat(j.css(a,
                    "padding" + this)) || 0;
            e !== "padding" && (f += parseFloat(j.css(a, "border" + this + "Width")) || 0);
            e === "margin" && (f += parseFloat(j.css(a, e + this)) || 0)
        });
        return f + "px"
    }
    function w(a, c) {
        c.src ? j.ajax({
            url : c.src,
            async : !1,
            dataType : "script"
        }) : j.globalEval((c.text || c.textContent || c.innerHTML || "").replace(Ma, "/*$0*/"));
        c.parentNode && c.parentNode.removeChild(c)
    }
    function y(a) {
        var c = (a.nodeName || "").toLowerCase();
        c === "input" ? E(a) : c !== "script" && typeof a.getElementsByTagName != "undefined" && j.grep(a.getElementsByTagName("input"),
            E)
    }
    function E(a) {
        if (a.type === "checkbox" || a.type === "radio")
            a.defaultChecked = a.checked
    }
    function G(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function O(a, c) {
        var e;
        if (c.nodeType === 1) {
            c.clearAttributes && c.clearAttributes();
            c.mergeAttributes && c.mergeAttributes(a);
            e = c.nodeName.toLowerCase();
            if (e === "object")
                c.outerHTML = a.outerHTML;
            else if (e !== "input" || a.type !== "checkbox" && a.type !== "radio")
                if (e === "option")
                    c.selected =
                        a.defaultSelected;
                else {
                    if (e === "input" || e === "textarea")
                        c.defaultValue = a.defaultValue
                }
            else
                a.checked && (c.defaultChecked = c.checked = a.checked), c.value !== a.value && (c.value = a.value);
            c.removeAttribute(j.expando)
        }
    }
    function F(a, c) {
        if (c.nodeType === 1 && j.hasData(a)) {
            var e,
            f,
            g;
            f = j._data(a);
            var h = j._data(c, f),
            i = f.events;
            if (i)
                for (e in delete h.handle, h.events = {}, i)
                    for (f = 0, g = i[e].length; f < g; f++)
                        j.event.add(c, e + (i[e][f].namespace ? "." : "") + i[e][f].namespace, i[e][f], i[e][f].data);
            h.data && (h.data = j.extend({}, h.data))
        }
    }
    function R(a) {
        var c = Ba.split(" "),
        a = a.createDocumentFragment();
        if (a.createElement)
            for (; c.length; )
                a.createElement(c.pop());
        return a
    }
    function I(a, c, e) {
        c = c || 0;
        if (j.isFunction(c))
            return j.grep(a, function (a, f) {
                return !!c.call(a, f, a) === e
            });
        if (c.nodeType)
            return j.grep(a, function (a) {
                return a === c === e
            });
        if (typeof c == "string") {
            var f = j.grep(a, function (a) {
                    return a.nodeType === 1
                });
            if (sa.test(c))
                return j.filter(c, f, !e);
            c = j.filter(c, f)
        }
        return j.grep(a, function (a) {
            return j.inArray(a, c) >= 0 === e
        })
    }
    function N() {
        return !0
    }
    function A() {
        return !1
    }
    function M(a, c, e) {
        var f = c + "defer",
        g = c + "queue",
        h = c + "mark",
        i = j._data(a, f);
        i && (e === "queue" || !j._data(a, g)) && (e === "mark" || !j._data(a, h)) && setTimeout(function () {
            !j._data(a, g) && !j._data(a, h) && (j.removeData(a, f, !0), i.fire())
        }, 0)
    }
    function J(a) {
        for (var c in a)
            if (!(c === "data" && j.isEmptyObject(a[c])) && c !== "toJSON")
                return !1;
        return !0
    }
    function K(a, e, f) {
        if (f === c && a.nodeType === 1)
            if (f = "data-" + e.replace(fa, "-$1").toLowerCase(), f = a.getAttribute(f), typeof f == "string") {
                try {
                    f = f === "true" ? !0 : f === "false" ?
                        !1 : f === "null" ? null : j.isNumeric(f) ? parseFloat(f) : U.test(f) ? j.parseJSON(f) : f
                } catch (g) {}
                
                j.data(a, e, f)
            } else
                f = c;
        return f
    }
    function D(a) {
        var c = v[a] = {},
        e,
        f,
        a = a.split(/\s+/);
        for (e = 0, f = a.length; e < f; e++)
            c[a[e]] = !0;
        return c
    }
    var u = a.document,
    S = a.navigator,
    L = a.location,
    j = function () {
        function e() {
            if (!f.isReady) {
                try {
                    u.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(e, 1);
                    return
                }
                f.ready()
            }
        }
        var f = function (a, c) {
            return new f.fn.init(a, c, j)
        },
        g = a.jQuery,
        h = a.$,
        j,
        i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        k = /\S/,
        m =
            /^\s+/,
        n = /\s+$/,
        p = /\d/,
        s = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        q = /^[\],:{}\s]*$/,
        w = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        z = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        y = /(?:^|:|,)(?:\s*\[)+/g,
        A = /(webkit)[ \/]([\w.]+)/,
        W = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        T = /(msie) ([\w.]+)/,
        E = /(mozilla)(?:.*? rv:([\w.]+))?/,
        aa = /-([a-z]|[0-9])/ig,
        v = /^-ms-/,
        G = function (a, c) {
            return (c + "").toUpperCase()
        },
        ub = S.userAgent,
        Wa,
        Xa,
        Na,
        vb = Object.prototype.toString,
        db = Object.prototype.hasOwnProperty,
        M = Array.prototype.push,
        J = Array.prototype.slice,
        F = String.prototype.trim,
        Ea = Array.prototype.indexOf,
        ga = {};
        f.fn = f.prototype = {
            constructor : f,
            init : function (a, e, g) {
                var C,
                h,
                j;
                if (!a)
                    return this;
                if (a.nodeType)
                    return this.context = this[0] = a, this.length = 1, this;
                if (a === "body" && !e && u.body)
                    return this.context = u, this[0] = u.body, this.selector = a, this.length = 1, this;
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? C = i.exec(a) : C = [null, a, null];
                    if (C && (C[1] || !e)) {
                        if (C[1])
                            return e = e instanceof f ? e[0] : e, j = e ? e.ownerDocument ||
                                e : u, h = s.exec(a), h ? f.isPlainObject(e) ? (a = [u.createElement(h[1])], f.fn.attr.call(a, e, !0)) : a = [j.createElement(h[1])] : (h = f.buildFragment([C[1]], [j]), a = (h.cacheable ? f.clone(h.fragment) : h.fragment).childNodes), f.merge(this, a);
                        if ((e = u.getElementById(C[2])) && e.parentNode) {
                            if (e.id !== C[2])
                                return g.find(a);
                            this.length = 1;
                            this[0] = e
                        }
                        this.context = u;
                        this.selector = a;
                        return this
                    }
                    return !e || e.jquery ? (e || g).find(a) : this.constructor(e).find(a)
                }
                if (f.isFunction(a))
                    return g.ready(a);
                a.selector !== c && (this.selector = a.selector,
                    this.context = a.context);
                return f.makeArray(a, this)
            },
            selector : "",
            jquery : "1.7",
            length : 0,
            size : function () {
                return this.length
            },
            toArray : function () {
                return J.call(this, 0)
            },
            get : function (a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            },
            pushStack : function (a, c, e) {
                var g = this.constructor();
                f.isArray(a) ? M.apply(g, a) : f.merge(g, a);
                g.prevObject = this;
                g.context = this.context;
                c === "find" ? g.selector = this.selector + (this.selector ? " " : "") + e : c && (g.selector = this.selector + "." + c + "(" + e + ")");
                return g
            },
            each : function (a,
                c) {
                return f.each(this, a, c)
            },
            ready : function (a) {
                f.bindReady();
                Xa.add(a);
                return this
            },
            eq : function (a) {
                return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
            },
            first : function () {
                return this.eq(0)
            },
            last : function () {
                return this.eq(-1)
            },
            slice : function () {
                return this.pushStack(J.apply(this, arguments), "slice", J.call(arguments).join(","))
            },
            map : function (a) {
                return this.pushStack(f.map(this, function (c, e) {
                        return a.call(c, e, c)
                    }))
            },
            end : function () {
                return this.prevObject || this.constructor(null)
            },
            push : M,
            sort : [].sort,
            splice : [].splice
        };
        f.fn.init.prototype = f.fn;
        f.extend = f.fn.extend = function () {
            var a,
            e,
            g,
            C,
            h,
            j,
            i = arguments[0] || {},
            k = 1,
            m = arguments.length,
            da = !1;
            for (typeof i == "boolean" && (da = i, i = arguments[1] || {}, k = 2), typeof i != "object" && !f.isFunction(i) && (i = {}), m === k && (i = this, --k); k < m; k++)
                if ((a = arguments[k]) != null)
                    for (e in a)
                        g = i[e], C = a[e], i !== C && (da && C && (f.isPlainObject(C) || (h = f.isArray(C))) ? (h ? (h = !1, j = g && f.isArray(g) ? g : []) : j = g && f.isPlainObject(g) ? g : {}, i[e] = f.extend(da, j, C)) : C !== c && (i[e] = C));
            return i
        };
        f.extend({
            noConflict : function (c) {
                a.$ ===
                f && (a.$ = h);
                c && a.jQuery === f && (a.jQuery = g);
                return f
            },
            isReady : !1,
            readyWait : 1,
            holdReady : function (a) {
                a ? f.readyWait++ : f.ready(!0)
            },
            ready : function (a) {
                if (a === !0 && !--f.readyWait || a !== !0 && !f.isReady) {
                    if (!u.body)
                        return setTimeout(f.ready, 1);
                    f.isReady = !0;
                    a !== !0 && --f.readyWait > 0 || (Xa.fireWith(u, [f]), f.fn.trigger && f(u).trigger("ready").unbind("ready"))
                }
            },
            bindReady : function () {
                if (!Xa) {
                    Xa = f.Callbacks("once memory");
                    if (u.readyState === "complete")
                        return setTimeout(f.ready, 1);
                    if (u.addEventListener)
                        u.addEventListener("DOMContentLoaded",
                            Na, !1), a.addEventListener("load", f.ready, !1);
                    else if (u.attachEvent) {
                        u.attachEvent("onreadystatechange", Na);
                        a.attachEvent("onload", f.ready);
                        var c = !1;
                        try {
                            c = a.frameElement == null
                        } catch (g) {}
                        
                        u.documentElement.doScroll && c && e()
                    }
                }
            },
            isFunction : function (a) {
                return f.type(a) === "function"
            },
            isArray : Array.isArray || function (a) {
                return f.type(a) === "array"
            },
            isWindow : function (a) {
                return a && typeof a == "object" && "setInterval" in a
            },
            isNumeric : function (a) {
                return a != null && p.test(a) && !isNaN(a)
            },
            type : function (a) {
                return a == null ?
                String(a) : ga[vb.call(a)] || "object"
            },
            isPlainObject : function (a) {
                if (!a || f.type(a) !== "object" || a.nodeType || f.isWindow(a))
                    return !1;
                try {
                    if (a.constructor && !db.call(a, "constructor") && !db.call(a.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (e) {
                    return !1
                }
                for (var g in a);
                return g === c || db.call(a, g)
            },
            isEmptyObject : function (a) {
                for (var c in a)
                    return !1;
                return !0
            },
            error : function (a) {
                throw a;
            },
            parseJSON : function (c) {
                if (typeof c != "string" || !c)
                    return null;
                c = f.trim(c);
                if (a.JSON && a.JSON.parse)
                    return a.JSON.parse(c);
                if (q.test(c.replace(w, "@").replace(z, "]").replace(y, "")))
                    return (new Function("return " + c))();
                f.error("Invalid JSON: " + c)
            },
            parseXML : function (e) {
                var g,
                C;
                try {
                    a.DOMParser ? (C = new DOMParser, g = C.parseFromString(e, "text/xml")) : (g = new ActiveXObject("Microsoft.XMLDOM"), g.async = "false", g.loadXML(e))
                } catch (h) {
                    g = c
                }
                (!g || !g.documentElement || g.getElementsByTagName("parsererror").length) && f.error("Invalid XML: " + e);
                return g
            },
            noop : function () {},
            globalEval : function (c) {
                c && k.test(c) && (a.execScript || function (c) {
                    a.eval.call(a,
                        c)
                })(c)
            },
            camelCase : function (a) {
                return a.replace(v, "ms-").replace(aa, G)
            },
            nodeName : function (a, c) {
                return a.nodeName && a.nodeName.toUpperCase() === c.toUpperCase()
            },
            each : function (a, e, g) {
                var C,
                h = 0,
                j = a.length,
                i = j === c || f.isFunction(a);
                if (g)
                    if (i)
                        for (C in a) {
                            if (e.apply(a[C], g) === !1)
                                break
                        }
                    else
                        for (; h < j; ) {
                            if (e.apply(a[h++], g) === !1)
                                break
                        }
                else if (i)
                    for (C in a) {
                        if (e.call(a[C], C, a[C]) === !1)
                            break
                    }
                else
                    for (; h < j; )
                        if (e.call(a[h], h, a[h++]) === !1)
                            break;
                return a
            },
            trim : F ? function (a) {
                return a == null ? "" : F.call(a)
            }
             : function (a) {
                return a ==
                null ? "" : (a + "").replace(m, "").replace(n, "")
            },
            makeArray : function (a, c) {
                var e = c || [];
                if (a != null) {
                    var g = f.type(a);
                    a.length == null || g === "string" || g === "function" || g === "regexp" || f.isWindow(a) ? M.call(e, a) : f.merge(e, a)
                }
                return e
            },
            inArray : function (a, c, e) {
                var f;
                if (c) {
                    if (Ea)
                        return Ea.call(c, a, e);
                    for (f = c.length, e = e ? e < 0 ? Math.max(0, f + e) : e : 0; e < f; e++)
                        if (e in c && c[e] === a)
                            return e
                }
                return -1
            },
            merge : function (a, e) {
                var f = a.length,
                g = 0;
                if (typeof e.length == "number")
                    for (var C = e.length; g < C; g++)
                        a[f++] = e[g];
                else
                    for (; e[g] !== c; )
                        a[f++] =
                            e[g++];
                a.length = f;
                return a
            },
            grep : function (a, c, e) {
                for (var f = [], g, e = !!e, C = 0, h = a.length; C < h; C++)
                    g = !!c(a[C], C), e !== g && f.push(a[C]);
                return f
            },
            map : function (a, e, g) {
                var C,
                h,
                j = [],
                i = 0,
                k = a.length;
                if (a instanceof f || k !== c && typeof k == "number" && (k > 0 && a[0] && a[k - 1] || k === 0 || f.isArray(a)))
                    for (; i < k; i++)
                        C = e(a[i], i, g), C != null && (j[j.length] = C);
                else
                    for (h in a)
                        C = e(a[h], h, g), C != null && (j[j.length] = C);
                return j.concat.apply([], j)
            },
            guid : 1,
            proxy : function (a, e) {
                if (typeof e == "string") {
                    var g = a[e];
                    e = a;
                    a = g
                }
                if (!f.isFunction(a))
                    return c;
                var C = J.call(arguments, 2),
                g = function () {
                    return a.apply(e, C.concat(J.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || f.guid++;
                return g
            },
            access : function (a, e, g, C, h, j) {
                var i = a.length;
                if (typeof e == "object") {
                    for (var k in e)
                        f.access(a, k, e[k], C, h, g);
                    return a
                }
                if (g !== c) {
                    C = !j && C && f.isFunction(g);
                    for (k = 0; k < i; k++)
                        h(a[k], e, C ? g.call(a[k], k, h(a[k], e)) : g, j);
                    return a
                }
                return i ? h(a[0], e) : c
            },
            now : function () {
                return (new Date).getTime()
            },
            uaMatch : function (a) {
                a = a.toLowerCase();
                a = A.exec(a) || W.exec(a) || T.exec(a) || a.indexOf("compatible") <
                    0 && E.exec(a) || [];
                return {
                    browser : a[1] || "",
                    version : a[2] || "0"
                }
            },
            sub : function () {
                function a(c, e) {
                    return new a.fn.init(c, e)
                }
                f.extend(!0, a, this);
                a.superclass = this;
                a.fn = a.prototype = this();
                a.fn.constructor = a;
                a.sub = this.sub;
                a.fn.init = function (e, g) {
                    g && g instanceof f && !(g instanceof a) && (g = a(g));
                    return f.fn.init.call(this, e, g, c)
                };
                a.fn.init.prototype = a.fn;
                var c = a(u);
                return a
            },
            browser : {}
            
        });
        f.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, c) {
            ga["[object " + c + "]"] = c.toLowerCase()
        });
        Wa = f.uaMatch(ub);
        Wa.browser && (f.browser[Wa.browser] = !0, f.browser.version = Wa.version);
        f.browser.webkit && (f.browser.safari = !0);
        k.test(" ") && (m = /^[\s\xA0]+/, n = /[\s\xA0]+$/);
        j = f(u);
        u.addEventListener ? Na = function () {
            u.removeEventListener("DOMContentLoaded", Na, !1);
            f.ready()
        }
         : u.attachEvent && (Na = function () {
            u.readyState === "complete" && (u.detachEvent("onreadystatechange", Na), f.ready())
        });
        typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
            return f
        });
        return f
    }
    (),
    v = {};
    j.Callbacks =
    function (a) {
        var a = a ? v[a] || D(a) : {},
        e = [],
        f = [],
        g,
        h,
        i,
        k,
        m,
        n = function (c) {
            var f,
            g,
            h,
            i;
            for (f = 0, g = c.length; f < g; f++)
                h = c[f], i = j.type(h), i === "array" ? n(h) : i === "function" && (!a.unique || !s.has(h)) && e.push(h)
        },
        p = function (c, j) {
            for (j = j || [], g = !a.memory || [c, j], h = !0, m = i || 0, i = 0, k = e.length; e && m < k; m++)
                if (e[m].apply(c, j) === !1 && a.stopOnFalse) {
                    g = !0;
                    break
                }
            h = !1;
            e && (a.once ? g === !0 ? s.disable() : e = [] : f && f.length && (g = f.shift(), s.fireWith(g[0], g[1])))
        },
        s = {
            add : function () {
                if (e) {
                    var a = e.length;
                    n(arguments);
                    h ? k = e.length : g && g !== !0 && (i = a,
                            p(g[0], g[1]))
                }
                return this
            },
            remove : function () {
                if (e)
                    for (var c = arguments, f = 0, g = c.length; f < g; f++)
                        for (var j = 0; j < e.length; j++)
                            if (c[f] === e[j] && (h && j <= k && (k--, j <= m && m--), e.splice(j--, 1), a.unique))
                                break;
                return this
            },
            has : function (a) {
                if (e)
                    for (var c = 0, f = e.length; c < f; c++)
                        if (a === e[c])
                            return !0;
                return !1
            },
            empty : function () {
                e = [];
                return this
            },
            disable : function () {
                e = f = g = c;
                return this
            },
            disabled : function () {
                return !e
            },
            lock : function () {
                f = c;
                (!g || g === !0) && s.disable();
                return this
            },
            locked : function () {
                return !f
            },
            fireWith : function (c,
                e) {
                f && (h ? a.once || f.push([c, e]) : (!a.once || !g) && p(c, e));
                return this
            },
            fire : function () {
                s.fireWith(this, arguments);
                return this
            },
            fired : function () {
                return !!g
            }
        };
        return s
    };
    var B = [].slice;
    j.extend({
        Deferred : function (a) {
            var c = j.Callbacks("once memory"),
            e = j.Callbacks("once memory"),
            f = j.Callbacks("memory"),
            g = "pending",
            h = {
                resolve : c,
                reject : e,
                notify : f
            },
            i = {
                done : c.add,
                fail : e.add,
                progress : f.add,
                state : function () {
                    return g
                },
                isResolved : c.fired,
                isRejected : e.fired,
                then : function (a, c, e) {
                    k.done(a).fail(c).progress(e);
                    return this
                },
                always : function () {
                    return k.done.apply(k, arguments).fail.apply(k, arguments)
                },
                pipe : function (a, c, e) {
                    return j.Deferred(function (f) {
                        j.each({
                            done : [a, "resolve"],
                            fail : [c, "reject"],
                            progress : [e, "notify"]
                        }, function (a, c) {
                            var e = c[0],
                            g = c[1],
                            C;
                            j.isFunction(e) ? k[a](function () {
                                C = e.apply(this, arguments);
                                C && j.isFunction(C.promise) ? C.promise().then(f.resolve, f.reject, f.notify) : f[g + "With"](this === k ? f : this, [C])
                            }) : k[a](f[g])
                        })
                    }).promise()
                },
                promise : function (a) {
                    if (a == null)
                        a = i;
                    else
                        for (var c in i)
                            a[c] = i[c];
                    return a
                }
            },
            k = i.promise({}),
            m;
            for (m in h)
                k[m] = h[m].fire, k[m + "With"] = h[m].fireWith;
            k.done(function () {
                g = "resolved"
            }, e.disable, f.lock).fail(function () {
                g = "rejected"
            }, c.disable, f.lock);
            a && a.call(k, k);
            return k
        },
        when : function (a) {
            function c(a) {
                return function (c) {
                    i[a] = arguments.length > 1 ? B.call(arguments, 0) : c;
                    m.notifyWith(n, i)
                }
            }
            function e(a) {
                return function (c) {
                    f[a] = arguments.length > 1 ? B.call(arguments, 0) : c;
                    --k || m.resolveWith(m, f)
                }
            }
            var f = B.call(arguments, 0),
            g = 0,
            h = f.length,
            i = Array(h),
            k = h,
            m = h <= 1 && a && j.isFunction(a.promise) ? a : j.Deferred(),
            n = m.promise();
            if (h > 1) {
                for (; g < h; g++)
                    f[g] && f[g].promise && j.isFunction(f[g].promise) ? f[g].promise().then(e(g), m.reject, c(g)) : --k;
                k || m.resolveWith(m, f)
            } else
                m !== a && m.resolveWith(m, h ? [a] : []);
            return n
        }
    });
    j.support = function () {
        var a = u.createElement("div"),
        c = u.documentElement,
        e,
        f,
        g,
        h,
        i,
        k,
        m,
        n,
        p,
        s,
        q,
        w,
        z,
        y,
        A,
        W;
        a.setAttribute("className", "t");
        a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>";
        e = a.getElementsByTagName("*");
        f = a.getElementsByTagName("a")[0];
        if (!e || !e.length || !f)
            return {};
        g = u.createElement("select");
        h = g.appendChild(u.createElement("option"));
        i = a.getElementsByTagName("input")[0];
        m = {
            leadingWhitespace : a.firstChild.nodeType === 3,
            tbody : !a.getElementsByTagName("tbody").length,
            htmlSerialize : !!a.getElementsByTagName("link").length,
            style : /top/.test(f.getAttribute("style")),
            hrefNormalized : f.getAttribute("href") === "/a",
            opacity : /^0.55/.test(f.style.opacity),
            cssFloat : !!f.style.cssFloat,
            unknownElems : !!a.getElementsByTagName("nav").length,
            checkOn : i.value ===
            "on",
            optSelected : h.selected,
            getSetAttribute : a.className !== "t",
            enctype : !!u.createElement("form").enctype,
            submitBubbles : !0,
            changeBubbles : !0,
            focusinBubbles : !1,
            deleteExpando : !0,
            noCloneEvent : !0,
            inlineBlockNeedsLayout : !1,
            shrinkWrapBlocks : !1,
            reliableMarginRight : !0
        };
        i.checked = !0;
        m.noCloneChecked = i.cloneNode(!0).checked;
        g.disabled = !0;
        m.optDisabled = !h.disabled;
        try {
            delete a.test
        } catch (T) {
            m.deleteExpando = !1
        }
        !a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function () {
                m.noCloneEvent = !1
            }),
            a.cloneNode(!0).fireEvent("onclick"));
        i = u.createElement("input");
        i.value = "t";
        i.setAttribute("type", "radio");
        m.radioValue = i.value === "t";
        i.setAttribute("checked", "checked");
        a.appendChild(i);
        n = u.createDocumentFragment();
        n.appendChild(a.lastChild);
        m.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "";
        a.style.width = a.style.paddingLeft = "1px";
        p = u.getElementsByTagName("body")[0];
        q = u.createElement(p ? "div" : "body");
        w = {
            visibility : "hidden",
            width : 0,
            height : 0,
            border : 0,
            margin : 0,
            background : "none"
        };
        p && j.extend(w, {
            position : "absolute",
            left : "-999px",
            top : "-999px"
        });
        for (A in w)
            q.style[A] = w[A];
        q.appendChild(a);
        s = p || c;
        s.insertBefore(q, s.firstChild);
        m.appendChecked = i.checked;
        m.boxModel = a.offsetWidth === 2;
        "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, m.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", m.shrinkWrapBlocks = a.offsetWidth !== 2);
        a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
        z = a.getElementsByTagName("td");
        W = z[0].offsetHeight === 0;
        z[0].style.display = "";
        z[1].style.display = "none";
        m.reliableHiddenOffsets = W && z[0].offsetHeight === 0;
        a.innerHTML = "";
        u.defaultView && u.defaultView.getComputedStyle && (k = u.createElement("div"), k.style.width = "0", k.style.marginRight = "0", a.appendChild(k), m.reliableMarginRight = (parseInt((u.defaultView.getComputedStyle(k, null) || {
                        marginRight : 0
                    }).marginRight, 10) || 0) === 0);
        if (a.attachEvent)
            for (A in {
                submit : 1,
                change : 1,
                focusin : 1
            })
                y = "on" + A, W = y in a, W || (a.setAttribute(y,
                        "return;"), W = typeof a[y] == "function"), m[A + "Bubbles"] = W;
        j(function () {
            var a,
            c,
            e,
            f,
            g;
            p = u.getElementsByTagName("body")[0];
            !p || (a = u.createElement("div"), a.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", p.insertBefore(a, p.firstChild), q = u.createElement("div"), q.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;", q.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",
                a.appendChild(q), c = q.firstChild, e = c.firstChild, f = c.nextSibling.firstChild.firstChild, g = {
                    doesNotAddBorder : e.offsetTop !== 5,
                    doesAddBorderForTableAndCells : f.offsetTop === 5
                }, e.style.position = "fixed", e.style.top = "20px", g.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", c.style.overflow = "hidden", c.style.position = "relative", g.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, g.doesNotIncludeMarginInBodyOffset = p.offsetTop !== 1, p.removeChild(a), q = null, j.extend(m, g))
        });
        q.innerHTML =
            "";
        s.removeChild(q);
        q = n = g = h = p = k = a = i = null;
        return m
    }
    ();
    j.boxModel = j.support.boxModel;
    var U = /^(?:\{.*\}|\[.*\])$/,
    fa = /([A-Z])/g;
    j.extend({
        cache : {},
        uuid : 0,
        expando : "jQuery" + (j.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData : {
            embed : !0,
            object : "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet : !0
        },
        hasData : function (a) {
            a = a.nodeType ? j.cache[a[j.expando]] : a[j.expando];
            return !!a && !J(a)
        },
        data : function (a, e, f, g) {
            if (j.acceptData(a)) {
                var h,
                i,
                k = typeof e == "string",
                m = a.nodeType,
                n = m ? j.cache : a,
                p = m ? a[j.expando] : a[j.expando] &&
                    j.expando,
                s = e === "events";
                if (p && n[p] && (s || g || n[p].data) || !(k && f === c)) {
                    p || (m ? a[j.expando] = p = ++j.uuid : p = j.expando);
                    n[p] || (n[p] = {}, m || (n[p].toJSON = j.noop));
                    if (typeof e == "object" || typeof e == "function")
                        g ? n[p] = j.extend(n[p], e) : n[p].data = j.extend(n[p].data, e);
                    a = h = n[p];
                    g || (h.data || (h.data = {}), h = h.data);
                    f !== c && (h[j.camelCase(e)] = f);
                    if (s && !h[e])
                        return a.events;
                    k ? (i = h[e], i == null && (i = h[j.camelCase(e)])) : i = h;
                    return i
                }
            }
        },
        removeData : function (a, c, e) {
            if (j.acceptData(a)) {
                var f,
                g,
                h,
                i = a.nodeType,
                k = i ? j.cache : a,
                m = i ? a[j.expando] :
                    j.expando;
                if (k[m]) {
                    if (c && (f = e ? k[m] : k[m].data)) {
                        j.isArray(c) || (c in f ? c = [c] : (c = j.camelCase(c), c in f ? c = [c] : c = c.split(" ")));
                        for (g = 0, h = c.length; g < h; g++)
                            delete f[c[g]];
                        if (!(e ? J : j.isEmptyObject)(f))
                            return
                    }
                    if (!e && (delete k[m].data, !J(k[m])))
                        return;
                    j.support.deleteExpando || !k.setInterval ? delete k[m] : k[m] = null;
                    i && (j.support.deleteExpando ? delete a[j.expando] : a.removeAttribute ? a.removeAttribute(j.expando) : a[j.expando] = null)
                }
            }
        },
        _data : function (a, c, e) {
            return j.data(a, c, e, !0)
        },
        acceptData : function (a) {
            if (a.nodeName) {
                var c =
                    j.noData[a.nodeName.toLowerCase()];
                if (c)
                    return c !== !0 && a.getAttribute("classid") === c
            }
            return !0
        }
    });
    j.fn.extend({
        data : function (a, e) {
            var f,
            g,
            h,
            i = null;
            if (typeof a == "undefined") {
                if (this.length && (i = j.data(this[0]), this[0].nodeType === 1 && !j._data(this[0], "parsedAttrs"))) {
                    g = this[0].attributes;
                    for (var k = 0, m = g.length; k < m; k++)
                        h = g[k].name, h.indexOf("data-") === 0 && (h = j.camelCase(h.substring(5)), K(this[0], h, i[h]));
                    j._data(this[0], "parsedAttrs", !0)
                }
                return i
            }
            if (typeof a == "object")
                return this.each(function () {
                    j.data(this,
                        a)
                });
            f = a.split(".");
            f[1] = f[1] ? "." + f[1] : "";
            return e === c ? (i = this.triggerHandler("getData" + f[1] + "!", [f[0]]), i === c && this.length && (i = j.data(this[0], a), i = K(this[0], a, i)), i === c && f[1] ? this.data(f[0]) : i) : this.each(function () {
                var c = j(this),
                g = [f[0], e];
                c.triggerHandler("setData" + f[1] + "!", g);
                j.data(this, a, e);
                c.triggerHandler("changeData" + f[1] + "!", g)
            })
        },
        removeData : function (a) {
            return this.each(function () {
                j.removeData(this, a)
            })
        }
    });
    j.extend({
        _mark : function (a, c) {
            a && (c = (c || "fx") + "mark", j._data(a, c, (j._data(a, c) || 0) +
                    1))
        },
        _unmark : function (a, c, e) {
            a !== !0 && (e = c, c = a, a = !1);
            if (c) {
                var e = e || "fx",
                f = e + "mark";
                (a = a ? 0 : (j._data(c, f) || 1) - 1) ? j._data(c, f, a) : (j.removeData(c, f, !0), M(c, e, "mark"))
            }
        },
        queue : function (a, c, e) {
            var f;
            if (a)
                return c = (c || "fx") + "queue", f = j._data(a, c), e && (!f || j.isArray(e) ? f = j._data(a, c, j.makeArray(e)) : f.push(e)), f || []
        },
        dequeue : function (a, c) {
            var c = c || "fx",
            e = j.queue(a, c),
            f = e.shift(),
            g = {};
            f === "inprogress" && (f = e.shift());
            f && (c === "fx" && e.unshift("inprogress"), j._data(a, c + ".run", g), f.call(a, function () {
                    j.dequeue(a,
                        c)
                }, g));
            e.length || (j.removeData(a, c + "queue " + c + ".run", !0), M(a, c, "queue"))
        }
    });
    j.fn.extend({
        queue : function (a, e) {
            typeof a != "string" && (e = a, a = "fx");
            return e === c ? j.queue(this[0], a) : this.each(function () {
                var c = j.queue(this, a, e);
                a === "fx" && c[0] !== "inprogress" && j.dequeue(this, a)
            })
        },
        dequeue : function (a) {
            return this.each(function () {
                j.dequeue(this, a)
            })
        },
        delay : function (a, c) {
            a = j.fx ? j.fx.speeds[a] || a : a;
            c = c || "fx";
            return this.queue(c, function (c, e) {
                var f = setTimeout(c, a);
                e.stop = function () {
                    clearTimeout(f)
                }
            })
        },
        clearQueue : function (a) {
            return this.queue(a ||
                "fx", [])
        },
        promise : function (a) {
            function e() {
                --i || f.resolveWith(g, [g])
            }
            typeof a != "string" && (a = c);
            a = a || "fx";
            var f = j.Deferred(),
            g = this,
            h = g.length,
            i = 1,
            k = a + "defer",
            m = a + "queue";
            a += "mark";
            for (var n; h--; )
                if (n = j.data(g[h], k, c, !0) || (j.data(g[h], m, c, !0) || j.data(g[h], a, c, !0)) && j.data(g[h], k, j.Callbacks("once memory"), !0))
                    i++, n.add(e);
            e();
            return f.promise()
        }
    });
    var la = /[\n\t\r]/g,
    ba = /\s+/,
    pa = /\r/g,
    H = /^(?:button|input)$/i,
    ca = /^(?:button|input|object|select|textarea)$/i,
    V = /^a(?:rea)?$/i,
    X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    Y = j.support.getSetAttribute,
    P,
    ea,
    z;
    j.fn.extend({
        attr : function (a, c) {
            return j.access(this, a, c, !0, j.attr)
        },
        removeAttr : function (a) {
            return this.each(function () {
                j.removeAttr(this, a)
            })
        },
        prop : function (a, c) {
            return j.access(this, a, c, !0, j.prop)
        },
        removeProp : function (a) {
            a = j.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = c,
                    delete this[a]
                } catch (e) {}
                
            })
        },
        addClass : function (a) {
            var c,
            e,
            f,
            g,
            h,
            i,
            k;
            if (j.isFunction(a))
                return this.each(function (c) {
                    j(this).addClass(a.call(this, c, this.className))
                });
            if (a && typeof a == "string") {
                c =
                    a.split(ba);
                for (e = 0, f = this.length; e < f; e++)
                    if (g = this[e], g.nodeType === 1)
                        if (!g.className && c.length === 1)
                            g.className = a;
                        else {
                            h = " " + g.className + " ";
                            for (i = 0, k = c.length; i < k; i++)
                                ~h.indexOf(" " + c[i] + " ") || (h += c[i] + " ");
                            g.className = j.trim(h)
                        }
            }
            return this
        },
        removeClass : function (a) {
            var e,
            f,
            g,
            h,
            i,
            k,
            m;
            if (j.isFunction(a))
                return this.each(function (c) {
                    j(this).removeClass(a.call(this, c, this.className))
                });
            if (a && typeof a == "string" || a === c) {
                e = (a || "").split(ba);
                for (f = 0, g = this.length; f < g; f++)
                    if (h = this[f], h.nodeType === 1 && h.className)
                        if (a) {
                            i =
                                (" " + h.className + " ").replace(la, " ");
                            for (k = 0, m = e.length; k < m; k++)
                                i = i.replace(" " + e[k] + " ", " ");
                            h.className = j.trim(i)
                        } else
                            h.className = ""
            }
            return this
        },
        toggleClass : function (a, c) {
            var e = typeof a,
            f = typeof c == "boolean";
            return j.isFunction(a) ? this.each(function (e) {
                j(this).toggleClass(a.call(this, e, this.className, c), c)
            }) : this.each(function () {
                if (e === "string")
                    for (var g, h = 0, i = j(this), k = c, m = a.split(ba); g = m[h++]; )
                        k = f ? k : !i.hasClass(g), i[k ? "addClass" : "removeClass"](g);
                else if (e === "undefined" || e === "boolean")
                    this.className &&
                    j._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : j._data(this, "__className__") || ""
            })
        },
        hasClass : function (a) {
            for (var a = " " + a + " ", c = 0, e = this.length; c < e; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(la, " ").indexOf(a) > -1)
                    return !0;
            return !1
        },
        val : function (a) {
            var e,
            f,
            g,
            h = this[0];
            if (!arguments.length) {
                if (h) {
                    if ((e = j.valHooks[h.nodeName.toLowerCase()] || j.valHooks[h.type]) && "get" in e && (f = e.get(h, "value")) !== c)
                        return f;
                    f = h.value;
                    return typeof f == "string" ?
                    f.replace(pa, "") : f == null ? "" : f
                }
                return c
            }
            g = j.isFunction(a);
            return this.each(function (f) {
                var h = j(this),
                i;
                if (this.nodeType === 1 && (g ? i = a.call(this, f, h.val()) : i = a, i == null ? i = "" : typeof i == "number" ? i += "" : j.isArray(i) && (i = j.map(i, function (a) {
                                        return a == null ? "" : a + ""
                                    })), e = j.valHooks[this.nodeName.toLowerCase()] || j.valHooks[this.type], !e || !("set" in e) || e.set(this, i, "value") === c))
                    this.value = i
            })
        }
    });
    j.extend({
        valHooks : {
            option : {
                get : function (a) {
                    var c = a.attributes.value;
                    return !c || c.specified ? a.value : a.text
                }
            },
            select : {
                get : function (a) {
                    var c,
                    e,
                    f = a.selectedIndex,
                    g = [],
                    h = a.options,
                    i = a.type === "select-one";
                    if (f < 0)
                        return null;
                    for (a = i ? f : 0, e = i ? f + 1 : h.length; a < e; a++)
                        if (c = h[a], c.selected && (j.support.optDisabled ? !c.disabled : c.getAttribute("disabled") === null) && (!c.parentNode.disabled || !j.nodeName(c.parentNode, "optgroup"))) {
                            c = j(c).val();
                            if (i)
                                return c;
                            g.push(c)
                        }
                    return i && !g.length && h.length ? j(h[f]).val() : g
                },
                set : function (a, c) {
                    var e = j.makeArray(c);
                    j(a).find("option").each(function () {
                        this.selected = j.inArray(j(this).val(), e) >= 0
                    });
                    e.length || (a.selectedIndex =
                            -1);
                    return e
                }
            }
        },
        attrFn : {
            val : !0,
            css : !0,
            html : !0,
            text : !0,
            data : !0,
            width : !0,
            height : !0,
            offset : !0
        },
        attr : function (a, e, f, g) {
            var h,
            i,
            k,
            m = a.nodeType;
            if (!a || m === 3 || m === 8 || m === 2)
                return c;
            if (g && e in j.attrFn)
                return j(a)[e](f);
            if (!("getAttribute" in a))
                return j.prop(a, e, f);
            k = m !== 1 || !j.isXMLDoc(a);
            k && (e = e.toLowerCase(), i = j.attrHooks[e] || (X.test(e) ? ea : P));
            if (f !== c) {
                if (f === null)
                    return j.removeAttr(a, e), c;
                if (i && "set" in i && k && (h = i.set(a, f, e)) !== c)
                    return h;
                a.setAttribute(e, "" + f);
                return f
            }
            if (i && "get" in i && k && (h = i.get(a,
                            e)) !== null)
                return h;
            h = a.getAttribute(e);
            return h === null ? c : h
        },
        removeAttr : function (a, c) {
            var e,
            f,
            g,
            h,
            i = 0;
            if (a.nodeType === 1)
                for (f = (c || "").split(ba), h = f.length; i < h; i++)
                    g = f[i].toLowerCase(), e = j.propFix[g] || g, j.attr(a, g, ""), a.removeAttribute(Y ? g : e), X.test(g) && e in a && (a[e] = !1)
        },
        attrHooks : {
            type : {
                set : function (a, c) {
                    if (H.test(a.nodeName) && a.parentNode)
                        j.error("type property can't be changed");
                    else if (!j.support.radioValue && c === "radio" && j.nodeName(a, "input")) {
                        var e = a.value;
                        a.setAttribute("type", c);
                        e && (a.value =
                                e);
                        return c
                    }
                }
            },
            value : {
                get : function (a, c) {
                    return P && j.nodeName(a, "button") ? P.get(a, c) : c in a ? a.value : null
                },
                set : function (a, c, e) {
                    if (P && j.nodeName(a, "button"))
                        return P.set(a, c, e);
                    a.value = c
                }
            }
        },
        propFix : {
            tabindex : "tabIndex",
            readonly : "readOnly",
            "for" : "htmlFor",
            "class" : "className",
            maxlength : "maxLength",
            cellspacing : "cellSpacing",
            cellpadding : "cellPadding",
            rowspan : "rowSpan",
            colspan : "colSpan",
            usemap : "useMap",
            frameborder : "frameBorder",
            contenteditable : "contentEditable"
        },
        prop : function (a, e, f) {
            var g,
            h,
            i,
            k = a.nodeType;
            if (!a || k === 3 || k === 8 || k === 2)
                return c;
            i = k !== 1 || !j.isXMLDoc(a);
            i && (e = j.propFix[e] || e, h = j.propHooks[e]);
            return f !== c ? h && "set" in h && (g = h.set(a, f, e)) !== c ? g : a[e] = f : h && "get" in h && (g = h.get(a, e)) !== null ? g : a[e]
        },
        propHooks : {
            tabIndex : {
                get : function (a) {
                    var e = a.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : ca.test(a.nodeName) || V.test(a.nodeName) && a.href ? 0 : c
                }
            }
        }
    });
    j.attrHooks.tabindex = j.propHooks.tabIndex;
    ea = {
        get : function (a, e) {
            var f,
            g = j.prop(a, e);
            return g === !0 || typeof g != "boolean" && (f = a.getAttributeNode(e)) &&
            f.nodeValue !== !1 ? e.toLowerCase() : c
        },
        set : function (a, c, e) {
            var f;
            c === !1 ? j.removeAttr(a, e) : (f = j.propFix[e] || e, f in a && (a[f] = !0), a.setAttribute(e, e.toLowerCase()));
            return e
        }
    };
    Y || (z = {
            name : !0,
            id : !0
        }, P = j.valHooks.button = {
            get : function (a, e) {
                var f;
                return (f = a.getAttributeNode(e)) && (z[e] ? f.nodeValue !== "" : f.specified) ? f.nodeValue : c
            },
            set : function (a, c, e) {
                var f = a.getAttributeNode(e);
                f || (f = u.createAttribute(e), a.setAttributeNode(f));
                return f.nodeValue = c + ""
            }
        }, j.attrHooks.tabindex.set = P.set, j.each(["width", "height"],
            function (a, c) {
            j.attrHooks[c] = j.extend(j.attrHooks[c], {
                    set : function (a, e) {
                        if (e === "")
                            return a.setAttribute(c, "auto"), e
                    }
                })
        }), j.attrHooks.contenteditable = {
            get : P.get,
            set : function (a, c, e) {
                c === "" && (c = "false");
                P.set(a, c, e)
            }
        });
    j.support.hrefNormalized || j.each(["href", "src", "width", "height"], function (a, e) {
        j.attrHooks[e] = j.extend(j.attrHooks[e], {
                get : function (a) {
                    a = a.getAttribute(e, 2);
                    return a === null ? c : a
                }
            })
    });
    j.support.style || (j.attrHooks.style = {
            get : function (a) {
                return a.style.cssText.toLowerCase() || c
            },
            set : function (a,
                c) {
                return a.style.cssText = "" + c
            }
        });
    j.support.optSelected || (j.propHooks.selected = j.extend(j.propHooks.selected, {
                get : function () {
                    return null
                }
            }));
    j.support.enctype || (j.propFix.enctype = "encoding");
    j.support.checkOn || j.each(["radio", "checkbox"], function () {
        j.valHooks[this] = {
            get : function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    });
    j.each(["radio", "checkbox"], function () {
        j.valHooks[this] = j.extend(j.valHooks[this], {
                set : function (a, c) {
                    if (j.isArray(c))
                        return a.checked = j.inArray(j(a).val(), c) >= 0
                }
            })
    });
    var T = /^(?:textarea|input|select)$/i,
    aa = /^([^\.]*)?(?:\.(.+))?$/,
    ga = /\bhover(\.\S+)?/,
    ja = /^key/,
    oa = /^(?:mouse|contextmenu)|click/,
    ta = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    ha = function (a) {
        (a = ta.exec(a)) && (a[1] = (a[1] || "").toLowerCase(), a[3] = a[3] && RegExp("(?:^|\\s)" + a[3] + "(?:\\s|$)"));
        return a
    },
    ma = function (a) {
        return j.event.special.hover ? a : a.replace(ga, "mouseenter$1 mouseleave$1")
    };
    j.event = {
        add : function (a, e, f, g, h) {
            var i,
            k,
            m,
            n,
            p,
            s,
            q,
            w,
            z,
            u;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !e || !f || !(i = j._data(a)))) {
                f.handler &&
                (w = f, f = w.handler);
                f.guid || (f.guid = j.guid++);
                m = i.events;
                m || (i.events = m = {});
                k = i.handle;
                k || (i.handle = k = function (a) {
                    return typeof j != "undefined" && (!a || j.event.triggered !== a.type) ? j.event.dispatch.apply(k.elem, arguments) : c
                }, k.elem = a);
                e = ma(e).split(" ");
                for (i = 0; i < e.length; i++) {
                    n = aa.exec(e[i]) || [];
                    p = n[1];
                    s = (n[2] || "").split(".").sort();
                    u = j.event.special[p] || {};
                    p = (h ? u.delegateType : u.bindType) || p;
                    u = j.event.special[p] || {};
                    q = j.extend({
                            type : p,
                            origType : n[1],
                            data : g,
                            handler : f,
                            guid : f.guid,
                            selector : h,
                            namespace : s.join(".")
                        },
                            w);
                    h && (q.quick = ha(h), !q.quick && j.expr.match.POS.test(h) && (q.isPositional = !0));
                    z = m[p];
                    if (!z && (z = m[p] = [], z.delegateCount = 0, !u.setup || u.setup.call(a, g, s, k) === !1))
                        a.addEventListener ? a.addEventListener(p, k, !1) : a.attachEvent && a.attachEvent("on" + p, k);
                    u.add && (u.add.call(a, q), q.handler.guid || (q.handler.guid = f.guid));
                    h ? z.splice(z.delegateCount++, 0, q) : z.push(q);
                    j.event.global[p] = !0
                }
                a = null
            }
        },
        global : {},
        remove : function (a, c, e, f) {
            var g = j.hasData(a) && j._data(a),
            h,
            i,
            k,
            m,
            n,
            p,
            s,
            q,
            w,
            z,
            u;
            if (g && (s = g.events)) {
                c = ma(c || "").split(" ");
                for (h = 0; h < c.length; h++) {
                    i = aa.exec(c[h]) || [];
                    k = i[1];
                    m = i[2];
                    if (!k) {
                        m = m ? "." + m : "";
                        for (p in s)
                            j.event.remove(a, p + m, e, f);
                        return
                    }
                    q = j.event.special[k] || {};
                    k = (f ? q.delegateType : q.bindType) || k;
                    z = s[k] || [];
                    n = z.length;
                    m = m ? RegExp("(^|\\.)" + m.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    if (e || m || f || q.remove)
                        for (p = 0; p < z.length; p++) {
                            if (u = z[p], !e || e.guid === u.guid)
                                if (!m || m.test(u.namespace))
                                    if (!f || f === u.selector || f === "**" && u.selector)
                                        z.splice(p--, 1), u.selector && z.delegateCount--, q.remove && q.remove.call(a,
                                            u)
                        }
                    else
                        z.length = 0;
                    z.length === 0 && n !== z.length && ((!q.teardown || q.teardown.call(a, m) === !1) && j.removeEvent(a, k, g.handle), delete s[k])
                }
                j.isEmptyObject(s) && (w = g.handle, w && (w.elem = null), j.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent : {
            getData : !0,
            setData : !0,
            changeData : !0
        },
        trigger : function (e, f, g, h) {
            if (!g || g.nodeType !== 3 && g.nodeType !== 8) {
                var i = e.type || e,
                k = [],
                m,
                n,
                p,
                s,
                q,
                w;
                i.indexOf("!") >= 0 && (i = i.slice(0, -1), m = !0);
                i.indexOf(".") >= 0 && (k = i.split("."), i = k.shift(), k.sort());
                if (g && !j.event.customEvent[i] || j.event.global[i])
                    if (e =
                            typeof e == "object" ? e[j.expando] ? e : new j.Event(i, e) : new j.Event(i), e.type = i, e.isTrigger = !0, e.exclusive = m, e.namespace = k.join("."), e.namespace_re = e.namespace ? RegExp("(^|\\.)" + k.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, k = i.indexOf(":") < 0 ? "on" + i : "", (h || !g) && e.preventDefault(), g) {
                        if (e.result = c, e.target || (e.target = g), f = f != null ? j.makeArray(f) : [], f.unshift(e), m = j.event.special[i] || {}, !(m.trigger && m.trigger.apply(g, f) === !1)) {
                            w = [[g, m.bindType || i]];
                            if (!h && !m.noBubble && !j.isWindow(g)) {
                                n = m.delegateType || i;
                                s = null;
                                for (p = g.parentNode; p; p = p.parentNode)
                                    w.push([p, n]), s = p;
                                s && s === g.ownerDocument && w.push([s.defaultView || s.parentWindow || a, n])
                            }
                            for (n = 0; n < w.length; n++)
                                if (p = w[n][0], e.type = w[n][1], q = (j._data(p, "events") || {})[e.type] && j._data(p, "handle"), q && q.apply(p, f), q = k && p[k], q && j.acceptData(p) && q.apply(p, f), e.isPropagationStopped())
                                    break;
                            e.type = i;
                            e.isDefaultPrevented() || (!m._default || m._default.apply(g.ownerDocument, f) === !1) && (i !== "click" || !j.nodeName(g, "a")) && j.acceptData(g) && k && g[i] && (i !== "focus" && i !== "blur" || e.target.offsetWidth !==
                                0) && !j.isWindow(g) && (s = g[k], s && (g[k] = null), j.event.triggered = i, g[i](), j.event.triggered = c, s && (g[k] = s));
                            return e.result
                        }
                    } else
                        for (n in g = j.cache, g)
                            g[n].events && g[n].events[i] && j.event.trigger(e, f, g[n].handle.elem, !0)
            }
        },
        dispatch : function (e) {
            var e = j.event.fix(e || a.event),
            f = (j._data(this, "events") || {})[e.type] || [],
            g = f.delegateCount,
            h = [].slice.call(arguments, 0),
            i = !e.exclusive && !e.namespace,
            k = (j.event.special[e.type] || {}).handle,
            m = [],
            n,
            p,
            s,
            q,
            w,
            z,
            u,
            y,
            A;
            h[0] = e;
            e.delegateTarget = this;
            if (g && !e.target.disabled &&
                (!e.button || e.type !== "click"))
                for (p = e.target; p != this; p = p.parentNode || this) {
                    q = {};
                    z = [];
                    for (n = 0; n < g; n++)
                        u = f[n], y = u.selector, A = q[y], u.isPositional ? A = (A || (q[y] = j(y))).index(p) >= 0 : A === c && (A = q[y] = u.quick ? (!u.quick[1] || p.nodeName.toLowerCase() === u.quick[1]) && (!u.quick[2] || p.id === u.quick[2]) && (!u.quick[3] || u.quick[3].test(p.className)) : j(p).is(y)), A && z.push(u);
                    z.length && m.push({
                        elem : p,
                        matches : z
                    })
                }
            f.length > g && m.push({
                elem : this,
                matches : f.slice(g)
            });
            for (n = 0; n < m.length && !e.isPropagationStopped(); n++) {
                w = m[n];
                e.currentTarget =
                    w.elem;
                for (f = 0; f < w.matches.length && !e.isImmediatePropagationStopped(); f++)
                    if (u = w.matches[f], i || !e.namespace && !u.namespace || e.namespace_re && e.namespace_re.test(u.namespace))
                        e.data = u.data, e.handleObj = u, s = (k || u.handler).apply(w.elem, h), s !== c && (e.result = s, s === !1 && (e.preventDefault(), e.stopPropagation()))
            }
            return e.result
        },
        props : "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks : {},
        keyHooks : {
            props : "char charCode key keyCode".split(" "),
            filter : function (a, c) {
                a.which == null && (a.which = c.charCode != null ? c.charCode : c.keyCode);
                return a
            }
        },
        mouseHooks : {
            props : "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),
            filter : function (a, e) {
                var f,
                g,
                h,
                j = e.button,
                i = e.fromElement;
                a.pageX == null && e.clientX != null && (f = a.target.ownerDocument || u, g = f.documentElement, h = f.body, a.pageX = e.clientX + (g && g.scrollLeft || h && h.scrollLeft || 0) - (g && g.clientLeft ||
                            h && h.clientLeft || 0), a.pageY = e.clientY + (g && g.scrollTop || h && h.scrollTop || 0) - (g && g.clientTop || h && h.clientTop || 0));
                !a.relatedTarget && i && (a.relatedTarget = i === a.target ? e.toElement : i);
                !a.which && j !== c && (a.which = j & 1 ? 1 : j & 2 ? 3 : j & 4 ? 2 : 0);
                return a
            }
        },
        fix : function (a) {
            if (a[j.expando])
                return a;
            var e,
            f,
            g = a,
            h = j.event.fixHooks[a.type] || {},
            i = h.props ? this.props.concat(h.props) : this.props,
            a = j.Event(g);
            for (e = i.length; e; )
                f = i[--e], a[f] = g[f];
            a.target || (a.target = g.srcElement || u);
            a.target.nodeType === 3 && (a.target = a.target.parentNode);
            a.metaKey === c && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special : {
            ready : {
                setup : j.bindReady
            },
            focus : {
                delegateType : "focusin",
                noBubble : !0
            },
            blur : {
                delegateType : "focusout",
                noBubble : !0
            },
            beforeunload : {
                setup : function (a, c, e) {
                    j.isWindow(this) && (this.onbeforeunload = e)
                },
                teardown : function (a, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate : function (a, c, e, f) {
            a = j.extend(new j.Event, e, {
                    type : a,
                    isSimulated : !0,
                    originalEvent : {}
                    
                });
            f ? j.event.trigger(a, null, c) : j.event.dispatch.call(c, a);
            a.isDefaultPrevented() &&
            e.preventDefault()
        }
    };
    j.event.handle = j.event.dispatch;
    j.removeEvent = u.removeEventListener ? function (a, c, e) {
        a.removeEventListener && a.removeEventListener(c, e, !1)
    }
     : function (a, c, e) {
        a.detachEvent && a.detachEvent("on" + c, e)
    };
    j.Event = function (a, c) {
        if (!(this instanceof j.Event))
            return new j.Event(a, c);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? N : A) : this.type = a;
        c && j.extend(this, c);
        this.timeStamp = a &&
            a.timeStamp || j.now();
        this[j.expando] = !0
    };
    j.Event.prototype = {
        preventDefault : function () {
            this.isDefaultPrevented = N;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation : function () {
            this.isPropagationStopped = N;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation : function () {
            this.isImmediatePropagationStopped = N;
            this.stopPropagation()
        },
        isDefaultPrevented : A,
        isPropagationStopped : A,
        isImmediatePropagationStopped : A
    };
    j.each({
        mouseenter : "mouseover",
        mouseleave : "mouseout"
    }, function (a, c) {
        j.event.special[a] = j.event.special[c] = {
            delegateType : c,
            bindType : c,
            handle : function (a) {
                var c = a.relatedTarget,
                e = a.handleObj,
                f,
                g;
                if (!c || e.origType === a.type || c !== this && !j.contains(this, c))
                    f = a.type, a.type = e.origType, g = e.handler.apply(this, arguments), a.type = f;
                return g
            }
        }
    });
    j.support.submitBubbles || (j.event.special.submit = {
            setup : function () {
                if (j.nodeName(this, "form"))
                    return !1;
                j.event.add(this, "click._submit keypress._submit", function (a) {
                    a = a.target;
                    (a = j.nodeName(a, "input") || j.nodeName(a, "button") ? a.form : c) && !a._submit_attached && (j.event.add(a, "submit._submit", function (a) {
                            this.parentNode && j.event.simulate("submit", this.parentNode, a, !0)
                        }), a._submit_attached = !0)
                })
            },
            teardown : function () {
                if (j.nodeName(this, "form"))
                    return !1;
                j.event.remove(this, "._submit")
            }
        });
    j.support.changeBubbles || (j.event.special.change = {
            setup : function () {
                if (T.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio")
                        j.event.add(this, "propertychange._change", function (a) {
                            a.originalEvent.propertyName ===
                            "checked" && (this._just_changed = !0)
                        }), j.event.add(this, "click._change", function (a) {
                            this._just_changed && (this._just_changed = !1, j.event.simulate("change", this, a, !0))
                        });
                    return !1
                }
                j.event.add(this, "beforeactivate._change", function (a) {
                    a = a.target;
                    T.test(a.nodeName) && !a._change_attached && (j.event.add(a, "change._change", function (a) {
                            this.parentNode && !a.isSimulated && j.event.simulate("change", this.parentNode, a, !0)
                        }), a._change_attached = !0)
                })
            },
            handle : function (a) {
                var c = a.target;
                if (this !== c || a.isSimulated || a.isTrigger ||
                    c.type !== "radio" && c.type !== "checkbox")
                    return a.handleObj.handler.apply(this, arguments)
            },
            teardown : function () {
                j.event.remove(this, "._change");
                return T.test(this.nodeName)
            }
        });
    j.support.focusinBubbles || j.each({
        focus : "focusin",
        blur : "focusout"
    }, function (a, c) {
        var e = 0,
        f = function (a) {
            j.event.simulate(c, a.target, j.event.fix(a), !0)
        };
        j.event.special[c] = {
            setup : function () {
                e++ === 0 && u.addEventListener(a, f, !0)
            },
            teardown : function () {
                --e === 0 && u.removeEventListener(a, f, !0)
            }
        }
    });
    j.fn.extend({
        on : function (a, e, f, g, h) {
            var i,
            k;
            if (typeof a == "object") {
                typeof e != "string" && (f = e, e = c);
                for (k in a)
                    this.on(k, e, f, a[k], h);
                return this
            }
            f == null && g == null ? (g = e, f = e = c) : g == null && (typeof e == "string" ? (g = f, f = c) : (g = f, f = e, e = c));
            if (g === !1)
                g = A;
            else if (!g)
                return this;
            h === 1 && (i = g, g = function (a) {
                j().off(a);
                return i.apply(this, arguments)
            }, g.guid = i.guid || (i.guid = j.guid++));
            return this.each(function () {
                j.event.add(this, a, g, f, e)
            })
        },
        one : function (a, c, e, f) {
            return this.on.call(this, a, c, e, f, 1)
        },
        off : function (a, e, f) {
            if (a && a.preventDefault && a.handleObj) {
                var g =
                    a.handleObj;
                j(a.delegateTarget).off(g.namespace ? g.type + "." + g.namespace : g.type, g.selector, g.handler);
                return this
            }
            if (typeof a == "object") {
                for (g in a)
                    this.off(g, e, a[g]);
                return this
            }
            if (e === !1 || typeof e == "function")
                f = e, e = c;
            f === !1 && (f = A);
            return this.each(function () {
                j.event.remove(this, a, f, e)
            })
        },
        bind : function (a, c, e) {
            return this.on(a, null, c, e)
        },
        unbind : function (a, c) {
            return this.off(a, null, c)
        },
        live : function (a, c, e) {
            j(this.context).on(a, this.selector, c, e);
            return this
        },
        die : function (a, c) {
            j(this.context).off(a, this.selector ||
                "**", c);
            return this
        },
        delegate : function (a, c, e, f) {
            return this.on(c, a, e, f)
        },
        undelegate : function (a, c, e) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(c, a, e)
        },
        trigger : function (a, c) {
            return this.each(function () {
                j.event.trigger(a, c, this)
            })
        },
        triggerHandler : function (a, c) {
            if (this[0])
                return j.event.trigger(a, c, this[0], !0)
        },
        toggle : function (a) {
            var c = arguments,
            e = a.guid || j.guid++,
            f = 0,
            g = function (e) {
                var g = (j._data(this, "lastToggle" + a.guid) || 0) % f;
                j._data(this, "lastToggle" + a.guid, g + 1);
                e.preventDefault();
                return c[g].apply(this,
                    arguments) || !1
            };
            for (g.guid = e; f < c.length; )
                c[f++].guid = e;
            return this.click(g)
        },
        hover : function (a, c) {
            return this.mouseenter(a).mouseleave(c || a)
        }
    });
    j.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, c) {
        j.fn[c] = function (a, e) {
            e == null && (e = a, a = null);
            return arguments.length > 0 ? this.bind(c, a, e) : this.trigger(c)
        };
        j.attrFn && (j.attrFn[c] =
                !0);
        ja.test(c) && (j.event.fixHooks[c] = j.event.keyHooks);
        oa.test(c) && (j.event.fixHooks[c] = j.event.mouseHooks)
    });
    (function () {
        function a(c, e, f, h, i, j) {
            for (var i = 0, k = h.length; i < k; i++) {
                var m = h[i];
                if (m) {
                    for (var C = !1, m = m[c]; m; ) {
                        if (m[g] === f) {
                            C = h[m.sizset];
                            break
                        }
                        if (m.nodeType === 1)
                            if (j || (m[g] = f, m.sizset = i), typeof e != "string") {
                                if (m === e) {
                                    C = !0;
                                    break
                                }
                            } else if (q.filter(e, [m]).length > 0) {
                                C = m;
                                break
                            }
                        m = m[c]
                    }
                    h[i] = C
                }
            }
        }
        function e(a, c, f, h, i, j) {
            for (var i = 0, k = h.length; i < k; i++) {
                var m = h[i];
                if (m) {
                    for (var C = !1, m = m[a]; m; ) {
                        if (m[g] ===
                            f) {
                            C = h[m.sizset];
                            break
                        }
                        m.nodeType === 1 && !j && (m[g] = f, m.sizset = i);
                        if (m.nodeName.toLowerCase() === c) {
                            C = m;
                            break
                        }
                        m = m[a]
                    }
                    h[i] = C
                }
            }
        }
        var f = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        g = "sizcache" + (Math.random() + "").replace(".", ""),
        h = 0,
        i = Object.prototype.toString,
        k = !1,
        m = !0,
        n = /\\/g,
        p = /\r\n/g,
        s = /\W/;
        [0, 0].sort(function () {
            m = !1;
            return 0
        });
        var q = function (a, c, e, g) {
            e = e || [];
            c = c || u;
            var h = c;
            if (c.nodeType !== 1 && c.nodeType !== 9)
                return [];
            if (!a || typeof a != "string")
                return e;
            var j,
            k,
            m,
            C,
            n,
            p,
            na,
            s = !0,
            qa = q.isXML(c),
            Z = [],
            w = a;
            do
                if (f.exec(""), j = f.exec(w), j && (w = j[3], Z.push(j[1]), j[2])) {
                    C = j[3];
                    break
                }
            while (j);
            if (Z.length > 1 && y.exec(a))
                if (Z.length === 2 && z.relative[Z[0]])
                    k = G(Z[0] + Z[1], c, g);
                else
                    for (k = z.relative[Z[0]] ? [c] : q(Z.shift(), c); Z.length; )
                        a = Z.shift(), z.relative[a] && (a += Z.shift()), k = G(a, k, g);
            else if (!g && Z.length > 1 && c.nodeType === 9 && !qa && z.match.ID.test(Z[0]) && !z.match.ID.test(Z[Z.length - 1]) && (n = q.find(Z.shift(), c, qa), c = n.expr ? q.filter(n.expr,
                            n.set)[0] : n.set[0]), c)
                for (n = g ? {
                        expr : Z.pop(),
                        set : T(g)
                    }
                     : q.find(Z.pop(), Z.length === 1 && (Z[0] === "~" || Z[0] === "+") && c.parentNode ? c.parentNode : c, qa), k = n.expr ? q.filter(n.expr, n.set) : n.set, Z.length > 0 ? m = T(k) : s = !1; Z.length; )
                    p = Z.pop(), na = p, z.relative[p] ? na = Z.pop() : p = "", na == null && (na = c), z.relative[p](m, na, qa);
            else
                m = [];
            m || (m = k);
            m || q.error(p || a);
            if (i.call(m) === "[object Array]")
                if (s)
                    if (c && c.nodeType === 1)
                        for (a = 0; m[a] != null; a++)
                            m[a] && (m[a] === !0 || m[a].nodeType === 1 && q.contains(c, m[a])) && e.push(k[a]);
                    else
                        for (a = 0; m[a] !=
                            null; a++)
                            m[a] && m[a].nodeType === 1 && e.push(k[a]);
                else
                    e.push.apply(e, m);
            else
                T(m, e);
            C && (q(C, h, e, g), q.uniqueSort(e));
            return e
        };
        q.uniqueSort = function (a) {
            if (aa && (k = m, a.sort(aa), k))
                for (var c = 1; c < a.length; c++)
                    a[c] === a[c - 1] && a.splice(c--, 1);
            return a
        };
        q.matches = function (a, c) {
            return q(a, null, null, c)
        };
        q.matchesSelector = function (a, c) {
            return q(c, null, null, [a]).length > 0
        };
        q.find = function (a, c, e) {
            var f,
            g,
            h,
            i,
            j,
            k;
            if (!a)
                return [];
            for (g = 0, h = z.order.length; g < h; g++)
                if (j = z.order[g], i = z.leftMatch[j].exec(a))
                    if (k = i[1], i.splice(1,
                            1), k.substr(k.length - 1) !== "\\" && (i[1] = (i[1] || "").replace(n, ""), f = z.find[j](i, c, e), f != null)) {
                        a = a.replace(z.match[j], "");
                        break
                    }
            f || (f = typeof c.getElementsByTagName != "undefined" ? c.getElementsByTagName("*") : []);
            return {
                set : f,
                expr : a
            }
        };
        q.filter = function (a, e, f, g) {
            for (var h, i, j, k, m, C, n, p, na = a, s = [], qa = e, Z = e && e[0] && q.isXML(e[0]); a && e.length; ) {
                for (j in z.filter)
                    if ((h = z.leftMatch[j].exec(a)) != null && h[2])
                        if (C = z.filter[j], m = h[1], i = !1, h.splice(1, 1), m.substr(m.length - 1) !== "\\") {
                            qa === s && (s = []);
                            if (z.preFilter[j])
                                if (h =
                                        z.preFilter[j](h, qa, f, s, g, Z)) {
                                    if (h === !0)
                                        continue
                                } else
                                    i = k = !0;
                            if (h)
                                for (n = 0; (m = qa[n]) != null; n++)
                                    m && (k = C(m, h, n, qa), p = g^k, f && k != null ? p ? i = !0 : qa[n] = !1 : p && (s.push(m), i = !0));
                            if (k !== c) {
                                f || (qa = s);
                                a = a.replace(z.match[j], "");
                                if (!i)
                                    return [];
                                break
                            }
                        }
                if (a === na)
                    if (i == null)
                        q.error(a);
                    else
                        break;
                na = a
            }
            return qa
        };
        q.error = function (a) {
            throw "Syntax error, unrecognized expression: " + a;
        };
        var w = q.getText = function (a) {
            var c,
            e;
            c = a.nodeType;
            var f = "";
            if (c)
                if (c === 1) {
                    if (typeof a.textContent == "string")
                        return a.textContent;
                    if (typeof a.innerText ==
                        "string")
                        return a.innerText.replace(p, "");
                    for (a = a.firstChild; a; a = a.nextSibling)
                        f += w(a)
                } else {
                    if (c === 3 || c === 4)
                        return a.nodeValue
                }
            else
                for (c = 0; e = a[c]; c++)
                    e.nodeType !== 8 && (f += w(e));
            return f
        },
        z = q.selectors = {
            order : ["ID", "NAME", "TAG"],
            match : {
                ID : /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS : /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME : /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR : /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG : /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD : /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS : /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO : /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch : {},
            attrMap : {
                "class" : "className",
                "for" : "htmlFor"
            },
            attrHandle : {
                href : function (a) {
                    return a.getAttribute("href")
                },
                type : function (a) {
                    return a.getAttribute("type")
                }
            },
            relative : {
                "+" : function (a, c) {
                    var e = typeof c == "string",
                    f = e && !s.test(c),
                    e = e && !f;
                    f && (c = c.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++)
                        if (h = a[f]) {
                            for (; (h = h.previousSibling) && h.nodeType !== 1; );
                            a[f] = e || h && h.nodeName.toLowerCase() === c ? h || !1 : h === c
                        }
                    e && q.filter(c, a, !0)
                },
                ">" : function (a, c) {
                    var e,
                    f = typeof c == "string",
                    g = 0,
                    h = a.length;
                    if (f && !s.test(c))
                        for (c = c.toLowerCase(); g < h; g++) {
                            if (e = a[g])
                                e = e.parentNode, a[g] = e.nodeName.toLowerCase() === c ? e : !1
                        }
                    else {
                        for (; g < h; g++)
                            e = a[g], e && (a[g] = f ? e.parentNode : e.parentNode === c);
                        f && q.filter(c, a, !0)
                    }
                },
                "" : function (c, f, g) {
                    var i,
                    j = h++,
                    k = a;
                    typeof f == "string" &&
                    !s.test(f) && (f = f.toLowerCase(), i = f, k = e);
                    k("parentNode", f, j, c, i, g)
                },
                "~" : function (c, f, g) {
                    var i,
                    j = h++,
                    k = a;
                    typeof f == "string" && !s.test(f) && (f = f.toLowerCase(), i = f, k = e);
                    k("previousSibling", f, j, c, i, g)
                }
            },
            find : {
                ID : function (a, c, e) {
                    if (typeof c.getElementById != "undefined" && !e)
                        return (a = c.getElementById(a[1])) && a.parentNode ? [a] : []
                },
                NAME : function (a, c) {
                    if (typeof c.getElementsByName != "undefined") {
                        for (var e = [], f = c.getElementsByName(a[1]), g = 0, h = f.length; g < h; g++)
                            f[g].getAttribute("name") === a[1] && e.push(f[g]);
                        return e.length ===
                        0 ? null : e
                    }
                },
                TAG : function (a, c) {
                    if (typeof c.getElementsByTagName != "undefined")
                        return c.getElementsByTagName(a[1])
                }
            },
            preFilter : {
                CLASS : function (a, c, e, f, g, h) {
                    a = " " + a[1].replace(n, "") + " ";
                    if (h)
                        return a;
                    for (var h = 0, i; (i = c[h]) != null; h++)
                        i && (g^(i.className && (" " + i.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? e || f.push(i) : e && (c[h] = !1));
                    return !1
                },
                ID : function (a) {
                    return a[1].replace(n, "")
                },
                TAG : function (a) {
                    return a[1].replace(n, "").toLowerCase()
                },
                CHILD : function (a) {
                    if (a[1] === "nth") {
                        a[2] || q.error(a[0]);
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var c = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = c[1] + (c[2] || 1) - 0;
                        a[3] = c[3] - 0
                    } else
                        a[2] && q.error(a[0]);
                    a[0] = h++;
                    return a
                },
                ATTR : function (a, c, e, f, g, h) {
                    c = a[1] = a[1].replace(n, "");
                    !h && z.attrMap[c] && (a[1] = z.attrMap[c]);
                    a[4] = (a[4] || a[5] || "").replace(n, "");
                    a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO : function (a, c, e, g, h) {
                    if (a[1] === "not")
                        if ((f.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))
                            a[3] = q(a[3],
                                    null, null, c);
                        else
                            return a = q.filter(a[3], c, e, 1^h), e || g.push.apply(g, a), !1;
                    else if (z.match.POS.test(a[0]) || z.match.CHILD.test(a[0]))
                        return !0;
                    return a
                },
                POS : function (a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters : {
                enabled : function (a) {
                    return a.disabled === !1 && a.type !== "hidden"
                },
                disabled : function (a) {
                    return a.disabled === !0
                },
                checked : function (a) {
                    return a.checked === !0
                },
                selected : function (a) {
                    return a.selected === !0
                },
                parent : function (a) {
                    return !!a.firstChild
                },
                empty : function (a) {
                    return !a.firstChild
                },
                has : function (a, c, e) {
                    return !!q(e[3],
                        a).length
                },
                header : function (a) {
                    return /h\d/i.test(a.nodeName)
                },
                text : function (a) {
                    var c = a.getAttribute("type"),
                    e = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === e && (c === e || c === null)
                },
                radio : function (a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                },
                checkbox : function (a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                },
                file : function (a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                },
                password : function (a) {
                    return a.nodeName.toLowerCase() === "input" && "password" ===
                    a.type
                },
                submit : function (a) {
                    var c = a.nodeName.toLowerCase();
                    return (c === "input" || c === "button") && "submit" === a.type
                },
                image : function (a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                },
                reset : function (a) {
                    var c = a.nodeName.toLowerCase();
                    return (c === "input" || c === "button") && "reset" === a.type
                },
                button : function (a) {
                    var c = a.nodeName.toLowerCase();
                    return c === "input" && "button" === a.type || c === "button"
                },
                input : function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus : function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters : {
                first : function (a, c) {
                    return c === 0
                },
                last : function (a, c, e, f) {
                    return c === f.length - 1
                },
                even : function (a, c) {
                    return c % 2 === 0
                },
                odd : function (a, c) {
                    return c % 2 === 1
                },
                lt : function (a, c, e) {
                    return c < e[3] - 0
                },
                gt : function (a, c, e) {
                    return c > e[3] - 0
                },
                nth : function (a, c, e) {
                    return e[3] - 0 === c
                },
                eq : function (a, c, e) {
                    return e[3] - 0 === c
                }
            },
            filter : {
                PSEUDO : function (a, c, e, f) {
                    var g = c[1],
                    h = z.filters[g];
                    if (h)
                        return h(a, e, c, f);
                    if (g === "contains")
                        return (a.textContent || a.innerText || w([a]) || "").indexOf(c[3]) >= 0;
                    if (g === "not") {
                        c = c[3];
                        e = 0;
                        for (f =
                                c.length; e < f; e++)
                            if (c[e] === a)
                                return !1;
                        return !0
                    }
                    q.error(g)
                },
                CHILD : function (a, c) {
                    var e,
                    f,
                    h,
                    i,
                    j,
                    k;
                    e = c[1];
                    k = a;
                    switch (e) {
                    case "only":
                    case "first":
                        for (; k = k.previousSibling; )
                            if (k.nodeType === 1)
                                return !1;
                        if (e === "first")
                            return !0;
                        k = a;
                    case "last":
                        for (; k = k.nextSibling; )
                            if (k.nodeType === 1)
                                return !1;
                        return !0;
                    case "nth":
                        e = c[2];
                        f = c[3];
                        if (e === 1 && f === 0)
                            return !0;
                        h = c[0];
                        i = a.parentNode;
                        if (i && (i[g] !== h || !a.nodeIndex)) {
                            j = 0;
                            for (k = i.firstChild; k; k = k.nextSibling)
                                k.nodeType === 1 && (k.nodeIndex = ++j);
                            i[g] = h
                        }
                        k = a.nodeIndex - f;
                        return e ===
                        0 ? k === 0 : k % e === 0 && k / e >= 0
                    }
                },
                ID : function (a, c) {
                    return a.nodeType === 1 && a.getAttribute("id") === c
                },
                TAG : function (a, c) {
                    return c === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === c
                },
                CLASS : function (a, c) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(c) > -1
                },
                ATTR : function (a, c) {
                    var e = c[1],
                    e = q.attr ? q.attr(a, e) : z.attrHandle[e] ? z.attrHandle[e](a) : a[e] != null ? a[e] : a.getAttribute(e),
                    f = e + "",
                    g = c[2],
                    h = c[4];
                    return e == null ? g === "!=" : !g && q.attr ? e != null : g === "=" ? f === h : g === "*=" ? f.indexOf(h) >= 0 : g ===
                    "~=" ? (" " + f + " ").indexOf(h) >= 0 : h ? g === "!=" ? f !== h : g === "^=" ? f.indexOf(h) === 0 : g === "$=" ? f.substr(f.length - h.length) === h : g === "|=" ? f === h || f.substr(0, h.length + 1) === h + "-" : !1 : f && e !== !1
                },
                POS : function (a, c, e, f) {
                    var g = z.setFilters[c[2]];
                    if (g)
                        return g(a, e, c, f)
                }
            }
        },
        y = z.match.POS,
        A = function (a, c) {
            return "\\" + (c - 0 + 1)
        },
        W;
        for (W in z.match)
            z.match[W] = RegExp(z.match[W].source + /(?![^\[]*\])(?![^\(]*\))/.source), z.leftMatch[W] = RegExp(/(^(?:.|\r|\n)*?)/.source + z.match[W].source.replace(/\\(\d+)/g, A));
        var T = function (a, c) {
            a = Array.prototype.slice.call(a,
                    0);
            return c ? (c.push.apply(c, a), c) : a
        };
        try {
            Array.prototype.slice.call(u.documentElement.childNodes, 0)
        } catch (E) {
            T = function (a, c) {
                var e = 0,
                f = c || [];
                if (i.call(a) === "[object Array]")
                    Array.prototype.push.apply(f, a);
                else if (typeof a.length == "number")
                    for (var g = a.length; e < g; e++)
                        f.push(a[e]);
                else
                    for (; a[e]; e++)
                        f.push(a[e]);
                return f
            }
        }
        var aa,
        v;
        u.documentElement.compareDocumentPosition ? aa = function (a, c) {
            return a === c ? (k = !0, 0) : !a.compareDocumentPosition || !c.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(c) &
            4 ? -1 : 1
        }
         : (aa = function (a, c) {
            if (a === c)
                return k = !0, 0;
            if (a.sourceIndex && c.sourceIndex)
                return a.sourceIndex - c.sourceIndex;
            var e,
            f,
            g = [],
            h = [];
            e = a.parentNode;
            f = c.parentNode;
            var i = e;
            if (e === f)
                return v(a, c);
            if (!e)
                return -1;
            if (!f)
                return 1;
            for (; i; )
                g.unshift(i), i = i.parentNode;
            for (i = f; i; )
                h.unshift(i), i = i.parentNode;
            e = g.length;
            f = h.length;
            for (i = 0; i < e && i < f; i++)
                if (g[i] !== h[i])
                    return v(g[i], h[i]);
            return i === e ? v(a, h[i], -1) : v(g[i], c, 1)
        }, v = function (a, c, e) {
            if (a === c)
                return e;
            for (a = a.nextSibling; a; ) {
                if (a === c)
                    return -1;
                a = a.nextSibling
            }
            return 1
        });
        (function () {
            var a = u.createElement("div"),
            e = "script" + (new Date).getTime(),
            f = u.documentElement;
            a.innerHTML = "<a name='" + e + "'/>";
            f.insertBefore(a, f.firstChild);
            u.getElementById(e) && (z.find.ID = function (a, e, f) {
                if (typeof e.getElementById != "undefined" && !f)
                    return (e = e.getElementById(a[1])) ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : c : []
            }, z.filter.ID = function (a, c) {
                var e = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType ===
                1 && e && e.nodeValue === c
            });
            f.removeChild(a);
            f = a = null
        })();
        (function () {
            var a = u.createElement("div");
            a.appendChild(u.createComment(""));
            a.getElementsByTagName("*").length > 0 && (z.find.TAG = function (a, c) {
                var e = c.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    for (var f = [], g = 0; e[g]; g++)
                        e[g].nodeType === 1 && f.push(e[g]);
                    e = f
                }
                return e
            });
            a.innerHTML = "<a href='#'></a>";
            a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (z.attrHandle.href = function (a) {
                return a.getAttribute("href",
                    2)
            });
            a = null
        })();
        u.querySelectorAll && function () {
            var a = q,
            c = u.createElement("div");
            c.innerHTML = "<p class='TEST'></p>";
            if (!c.querySelectorAll || c.querySelectorAll(".TEST").length !== 0) {
                q = function (c, e, f, g) {
                    e = e || u;
                    if (!g && !q.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(c);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1])
                                return T(e.getElementsByTagName(c), f);
                            if (h[2] && z.find.CLASS && e.getElementsByClassName)
                                return T(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (c === "body" && e.body)
                                return T([e.body],
                                    f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode)
                                    return T([], f);
                                if (i.id === h[3])
                                    return T([i], f)
                            }
                            try {
                                return T(e.querySelectorAll(c), f)
                            } catch (j) {}
                            
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var h = e,
                            k = (i = e.getAttribute("id")) || "__sizzle__",
                            m = e.parentNode,
                            C = /^\s*[+~]/.test(c);
                            i ? k = k.replace(/'/g, "\\$&") : e.setAttribute("id", k);
                            C && m && (e = e.parentNode);
                            try {
                                if (!C || m)
                                    return T(e.querySelectorAll("[id='" + k + "'] " + c), f)
                            } catch (n) {}
                            
                            finally {
                                i || h.removeAttribute("id")
                            }
                        }
                    }
                    return a(c, e,
                        f, g)
                };
                for (var e in a)
                    q[e] = a[e];
                c = null
            }
        }
        ();
        (function () {
            var a = u.documentElement,
            c = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (c) {
                var e = !c.call(u.createElement("div"), "div"),
                f = !1;
                try {
                    c.call(u.documentElement, "[test!='']:sizzle")
                } catch (g) {
                    f = !0
                }
                q.matchesSelector = function (a, g) {
                    g = g.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!q.isXML(a))
                        try {
                            if (f || !z.match.PSEUDO.test(g) && !/!=/.test(g)) {
                                var h = c.call(a, g);
                                if (h || !e || a.document && a.document.nodeType !== 11)
                                    return h
                            }
                        } catch (i) {}
                        
                    return q(g,
                        null, null, [a]).length > 0
                }
            }
        })();
        (function () {
            var a = u.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (a.getElementsByClassName && a.getElementsByClassName("e").length !== 0 && (a.lastChild.className = "e", a.getElementsByClassName("e").length !== 1))
                z.order.splice(1, 0, "CLASS"), z.find.CLASS = function (a, c, e) {
                    if (typeof c.getElementsByClassName != "undefined" && !e)
                        return c.getElementsByClassName(a[1])
                },
            a = null
        })();
        u.documentElement.contains ? q.contains = function (a, c) {
            return a !== c &&
            (a.contains ? a.contains(c) : !0)
        }
         : u.documentElement.compareDocumentPosition ? q.contains = function (a, c) {
            return !!(a.compareDocumentPosition(c) & 16)
        }
         : q.contains = function () {
            return !1
        };
        q.isXML = function (a) {
            return (a = (a ? a.ownerDocument || a : 0).documentElement) ? a.nodeName !== "HTML" : !1
        };
        var G = function (a, c, e) {
            for (var f, g = [], h = "", c = c.nodeType ? [c] : c; f = z.match.PSEUDO.exec(a); )
                h += f[0], a = a.replace(z.match.PSEUDO, "");
            a = z.relative[a] ? a + "*" : a;
            f = 0;
            for (var i = c.length; f < i; f++)
                q(a, c[f], g, e);
            return q.filter(h, g)
        };
        q.attr = j.attr;
        q.selectors.attrMap = {};
        j.find = q;
        j.expr = q.selectors;
        j.expr[":"] = j.expr.filters;
        j.unique = q.uniqueSort;
        j.text = q.getText;
        j.isXMLDoc = q.isXML;
        j.contains = q.contains
    })();
    var va = /Until$/,
    ia = /^(?:parents|prevUntil|prevAll)/,
    Oa = /,/,
    sa = /^.[^:#\[\.,]*$/,
    Sa = Array.prototype.slice,
    Aa = j.expr.match.POS,
    wa = {
        children : !0,
        contents : !0,
        next : !0,
        prev : !0
    };
    j.fn.extend({
        find : function (a) {
            var c = this,
            e,
            f;
            if (typeof a != "string")
                return j(a).filter(function () {
                    for (e = 0, f = c.length; e < f; e++)
                        if (j.contains(c[e], this))
                            return !0
                });
            var g = this.pushStack("", "find",
                    a),
            h,
            i,
            k;
            for (e = 0, f = this.length; e < f; e++)
                if (h = g.length, j.find(a, this[e], g), e > 0)
                    for (i = h; i < g.length; i++)
                        for (k = 0; k < h; k++)
                            if (g[k] === g[i]) {
                                g.splice(i--, 1);
                                break
                            }
            return g
        },
        has : function (a) {
            var c = j(a);
            return this.filter(function () {
                for (var a = 0, e = c.length; a < e; a++)
                    if (j.contains(this, c[a]))
                        return !0
            })
        },
        not : function (a) {
            return this.pushStack(I(this, a, !1), "not", a)
        },
        filter : function (a) {
            return this.pushStack(I(this, a, !0), "filter", a)
        },
        is : function (a) {
            return !!a && (typeof a == "string" ? Aa.test(a) ? j(a, this.context).index(this[0]) >=
                0 : j.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest : function (a, c) {
            var e = [],
            f,
            g,
            h = this[0];
            if (j.isArray(a)) {
                for (g = 1; h && h.ownerDocument && h !== c; ) {
                    for (f = 0; f < a.length; f++)
                        j(h).is(a[f]) && e.push({
                            selector : a[f],
                            elem : h,
                            level : g
                        });
                    h = h.parentNode;
                    g++
                }
                return e
            }
            var i = Aa.test(a) || typeof a != "string" ? j(a, c || this.context) : 0;
            for (f = 0, g = this.length; f < g; f++)
                for (h = this[f]; h; ) {
                    if (i ? i.index(h) > -1 : j.find.matchesSelector(h, a)) {
                        e.push(h);
                        break
                    }
                    h = h.parentNode;
                    if (!h || !h.ownerDocument || h === c || h.nodeType === 11)
                        break
                }
            e = e.length >
                1 ? j.unique(e) : e;
            return this.pushStack(e, "closest", a)
        },
        index : function (a) {
            return !a ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : typeof a == "string" ? j.inArray(this[0], j(a)) : j.inArray(a.jquery ? a[0] : a, this)
        },
        add : function (a, c) {
            var e = typeof a == "string" ? j(a, c) : j.makeArray(a && a.nodeType ? [a] : a),
            f = j.merge(this.get(), e);
            return this.pushStack(!e[0] || !e[0].parentNode || e[0].parentNode.nodeType === 11 || !f[0] || !f[0].parentNode || f[0].parentNode.nodeType === 11 ? f : j.unique(f))
        },
        andSelf : function () {
            return this.add(this.prevObject)
        }
    });
    j.each({
        parent : function (a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a : null
        },
        parents : function (a) {
            return j.dir(a, "parentNode")
        },
        parentsUntil : function (a, c, e) {
            return j.dir(a, "parentNode", e)
        },
        next : function (a) {
            return j.nth(a, 2, "nextSibling")
        },
        prev : function (a) {
            return j.nth(a, 2, "previousSibling")
        },
        nextAll : function (a) {
            return j.dir(a, "nextSibling")
        },
        prevAll : function (a) {
            return j.dir(a, "previousSibling")
        },
        nextUntil : function (a, c, e) {
            return j.dir(a, "nextSibling", e)
        },
        prevUntil : function (a, c, e) {
            return j.dir(a, "previousSibling",
                e)
        },
        siblings : function (a) {
            return j.sibling(a.parentNode.firstChild, a)
        },
        children : function (a) {
            return j.sibling(a.firstChild)
        },
        contents : function (a) {
            return j.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : j.makeArray(a.childNodes)
        }
    }, function (a, c) {
        j.fn[a] = function (e, f) {
            var g = j.map(this, c, e),
            h = Sa.call(arguments);
            va.test(a) || (f = e);
            f && typeof f == "string" && (g = j.filter(f, g));
            g = this.length > 1 && !wa[a] ? j.unique(g) : g;
            (this.length > 1 || Oa.test(f)) && ia.test(a) && (g = g.reverse());
            return this.pushStack(g,
                a, h.join(","))
        }
    });
    j.extend({
        filter : function (a, c, e) {
            e && (a = ":not(" + a + ")");
            return c.length === 1 ? j.find.matchesSelector(c[0], a) ? [c[0]] : [] : j.find.matches(a, c)
        },
        dir : function (a, e, f) {
            for (var g = [], a = a[e]; a && a.nodeType !== 9 && (f === c || a.nodeType !== 1 || !j(a).is(f)); )
                a.nodeType === 1 && g.push(a), a = a[e];
            return g
        },
        nth : function (a, c, e) {
            for (var c = c || 1, f = 0; a; a = a[e])
                if (a.nodeType === 1 && ++f === c)
                    break;
            return a
        },
        sibling : function (a, c) {
            for (var e = []; a; a = a.nextSibling)
                a.nodeType === 1 && a !== c && e.push(a);
            return e
        }
    });
    var Ba = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
    Fa = / jQuery\d+="(?:\d+|null)"/g,
    Ca = /^\s+/,
    ra = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    xa = /<([\w:]+)/,
    ya = /<tbody/i,
    Ga = /<|&#?\w+;/,
    Ha = /<(?:script|style)/i,
    Pa = /<(?:script|object|embed|option|style)/i,
    Ya = RegExp("<(?:" + Ba.replace(" ", "|") + ")", "i"),
    za = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Za = /\/(java|ecma)script/i,
    Ma = /^\s*<!(?:\[CDATA\[|\-\-)/,
    ka = {
        option : [1, "<select multiple='multiple'>", "</select>"],
        legend : [1, "<fieldset>", "</fieldset>"],
        thead : [1, "<table>", "</table>"],
        tr : [2,
            "<table><tbody>", "</tbody></table>"],
        td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col : [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area : [1, "<map>", "</map>"],
        _default : [0, "", ""]
    },
    Qa = R(u);
    ka.optgroup = ka.option;
    ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead;
    ka.th = ka.td;
    j.support.htmlSerialize || (ka._default = [1, "div<div>", "</div>"]);
    j.fn.extend({
        text : function (a) {
            return j.isFunction(a) ? this.each(function (c) {
                var e = j(this);
                e.text(a.call(this, c, e.text()))
            }) : typeof a != "object" && a !==
            c ? this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(a)) : j.text(this)
        },
        wrapAll : function (a) {
            if (j.isFunction(a))
                return this.each(function (c) {
                    j(this).wrapAll(a.call(this, c))
                });
            if (this[0]) {
                var c = j(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function () {
                    for (var a = this; a.firstChild && a.firstChild.nodeType === 1; )
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner : function (a) {
            return j.isFunction(a) ? this.each(function (c) {
                j(this).wrapInner(a.call(this,
                        c))
            }) : this.each(function () {
                var c = j(this),
                e = c.contents();
                e.length ? e.wrapAll(a) : c.append(a)
            })
        },
        wrap : function (a) {
            return this.each(function () {
                j(this).wrapAll(a)
            })
        },
        unwrap : function () {
            return this.parent().each(function () {
                j.nodeName(this, "body") || j(this).replaceWith(this.childNodes)
            }).end()
        },
        append : function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend : function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before : function () {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this)
                });
            if (arguments.length) {
                var a = j(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after : function () {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, j(arguments[0]).toArray());
                return a
            }
        },
        remove : function (a, c) {
            for (var e = 0, f; (f = this[e]) != null; e++)
                if (!a || j.filter(a, [f]).length)
                    !c && f.nodeType === 1 && (j.cleanData(f.getElementsByTagName("*")), j.cleanData([f])), f.parentNode && f.parentNode.removeChild(f);
            return this
        },
        empty : function () {
            for (var a = 0, c; (c = this[a]) != null; a++)
                for (c.nodeType === 1 && j.cleanData(c.getElementsByTagName("*")); c.firstChild; )
                    c.removeChild(c.firstChild);
            return this
        },
        clone : function (a, c) {
            a = a == null ? !1 : a;
            c = c == null ? a : c;
            return this.map(function () {
                return j.clone(this, a, c)
            })
        },
        html : function (a) {
            if (a === c)
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Fa, "") : null;
            if (typeof a == "string" && !Ha.test(a) && (j.support.leadingWhitespace || !Ca.test(a)) && !ka[(xa.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(ra, "<$1></$2>");
                try {
                    for (var e = 0, f = this.length; e < f; e++)
                        this[e].nodeType === 1 && (j.cleanData(this[e].getElementsByTagName("*")), this[e].innerHTML = a)
                } catch (g) {
                    this.empty().append(a)
                }
            } else
                j.isFunction(a) ? this.each(function (c) {
                    var e = j(this);
                    e.html(a.call(this, c, e.html()))
                }) :
                this.empty().append(a);
            return this
        },
        replaceWith : function (a) {
            if (this[0] && this[0].parentNode) {
                if (j.isFunction(a))
                    return this.each(function (c) {
                        var e = j(this),
                        f = e.html();
                        e.replaceWith(a.call(this, c, f))
                    });
                typeof a != "string" && (a = j(a).detach());
                return this.each(function () {
                    var c = this.nextSibling,
                    e = this.parentNode;
                    j(this).remove();
                    c ? j(c).before(a) : j(e).append(a)
                })
            }
            return this.length ? this.pushStack(j(j.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach : function (a) {
            return this.remove(a, !0)
        },
        domManip : function (a,
            e, f) {
            var g,
            h,
            i,
            k,
            m = a[0],
            n = [];
            if (!j.support.checkClone && arguments.length === 3 && typeof m == "string" && za.test(m))
                return this.each(function () {
                    j(this).domManip(a, e, f, !0)
                });
            if (j.isFunction(m))
                return this.each(function (g) {
                    var h = j(this);
                    a[0] = m.call(this, g, e ? h.html() : c);
                    h.domManip(a, e, f)
                });
            if (this[0]) {
                k = m && m.parentNode;
                j.support.parentNode && k && k.nodeType === 11 && k.childNodes.length === this.length ? g = {
                    fragment : k
                }
                 : g = j.buildFragment(a, this, n);
                i = g.fragment;
                i.childNodes.length === 1 ? h = i = i.firstChild : h = i.firstChild;
                if (h) {
                    e =
                        e && j.nodeName(h, "tr");
                    h = 0;
                    k = this.length;
                    for (var p = k - 1; h < k; h++)
                        f.call(e ? j.nodeName(this[h], "table") ? this[h].getElementsByTagName("tbody")[0] || this[h].appendChild(this[h].ownerDocument.createElement("tbody")) : this[h] : this[h], g.cacheable || k > 1 && h < p ? j.clone(i, !0, !0) : i)
                }
                n.length && j.each(n, w)
            }
            return this
        }
    });
    j.buildFragment = function (a, c, e) {
        var f,
        g,
        h,
        i,
        k = a[0];
        c && c[0] && (i = c[0].ownerDocument || c[0]);
        i.createDocumentFragment || (i = u);
        a.length === 1 && typeof k == "string" && k.length < 512 && i === u && k.charAt(0) === "<" && !Pa.test(k) &&
        (j.support.checkClone || !za.test(k)) && !j.support.unknownElems && Ya.test(k) && (g = !0, h = j.fragments[k], h && h !== 1 && (f = h));
        f || (f = i.createDocumentFragment(), j.clean(a, i, f, e));
        g && (j.fragments[k] = h ? f : 1);
        return {
            fragment : f,
            cacheable : g
        }
    };
    j.fragments = {};
    j.each({
        appendTo : "append",
        prependTo : "prepend",
        insertBefore : "before",
        insertAfter : "after",
        replaceAll : "replaceWith"
    }, function (a, c) {
        j.fn[a] = function (e) {
            var f = [],
            e = j(e),
            g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1)
                return e[c](this[0]),
                this;
            for (var g = 0, h = e.length; g < h; g++) {
                var i = (g > 0 ? this.clone(!0) : this).get();
                j(e[g])[c](i);
                f = f.concat(i)
            }
            return this.pushStack(f, a, e.selector)
        }
    });
    j.extend({
        clone : function (a, c, e) {
            var f = a.cloneNode(!0),
            g,
            h,
            i;
            if ((!j.support.noCloneEvent || !j.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !j.isXMLDoc(a)) {
                O(a, f);
                g = G(a);
                h = G(f);
                for (i = 0; g[i]; ++i)
                    h[i] && O(g[i], h[i])
            }
            if (c && (F(a, f), e)) {
                g = G(a);
                h = G(f);
                for (i = 0; g[i]; ++i)
                    F(g[i], h[i])
            }
            return f
        },
        clean : function (a, c, e, f) {
            c = c || u;
            typeof c.createElement == "undefined" &&
            (c = c.ownerDocument || c[0] && c[0].ownerDocument || u);
            for (var g = [], h, i = 0, k; (k = a[i]) != null; i++)
                if (typeof k == "number" && (k += ""), k) {
                    if (typeof k == "string")
                        if (Ga.test(k)) {
                            k = k.replace(ra, "<$1></$2>");
                            h = (xa.exec(k) || ["", ""])[1].toLowerCase();
                            var m = ka[h] || ka._default,
                            n = m[0],
                            p = c.createElement("div");
                            for (c === u ? Qa.appendChild(p) : R(c).appendChild(p), p.innerHTML = m[1] + k + m[2]; n--; )
                                p = p.lastChild;
                            if (!j.support.tbody) {
                                n = ya.test(k);
                                m = h === "table" && !n ? p.firstChild && p.firstChild.childNodes : m[1] === "<table>" && !n ? p.childNodes :
                                    [];
                                for (h = m.length - 1; h >= 0; --h)
                                    j.nodeName(m[h], "tbody") && !m[h].childNodes.length && m[h].parentNode.removeChild(m[h])
                            }
                            !j.support.leadingWhitespace && Ca.test(k) && p.insertBefore(c.createTextNode(Ca.exec(k)[0]), p.firstChild);
                            k = p.childNodes
                        } else
                            k = c.createTextNode(k);
                    var s;
                    if (!j.support.appendChecked)
                        if (k[0] && typeof(s = k.length) == "number")
                            for (h = 0; h < s; h++)
                                y(k[h]);
                        else
                            y(k);
                    k.nodeType ? g.push(k) : g = j.merge(g, k)
                }
            if (e) {
                a = function (a) {
                    return !a.type || Za.test(a.type)
                };
                for (i = 0; g[i]; i++)
                    f && j.nodeName(g[i], "script") && (!g[i].type ||
                        g[i].type.toLowerCase() === "text/javascript") ? f.push(g[i].parentNode ? g[i].parentNode.removeChild(g[i]) : g[i]) : (g[i].nodeType === 1 && (c = j.grep(g[i].getElementsByTagName("script"), a), g.splice.apply(g, [i + 1, 0].concat(c))), e.appendChild(g[i]))
            }
            return g
        },
        cleanData : function (a) {
            for (var c, e, f = j.cache, g = j.event.special, h = j.support.deleteExpando, i = 0, k; (k = a[i]) != null; i++)
                if (!k.nodeName || !j.noData[k.nodeName.toLowerCase()])
                    if (e = k[j.expando]) {
                        if ((c = f[e]) && c.events) {
                            for (var m in c.events)
                                g[m] ? j.event.remove(k, m) : j.removeEvent(k,
                                    m, c.handle);
                            c.handle && (c.handle.elem = null)
                        }
                        h ? delete k[j.expando] : k.removeAttribute && k.removeAttribute(j.expando);
                        delete f[e]
                    }
        }
    });
    var Da = /alpha\([^)]*\)/i,
    Ta = /opacity=([^)]*)/,
    Ua = /([A-Z]|^ms)/g,
    W = /^-?\d+(?:px)?$/i,
    Ea = /^-?\d/,
    eb = /^([\-+])=([\-+.\de]+)/,
    wb = {
        position : "absolute",
        visibility : "hidden",
        display : "block"
    },
    sb = ["Left", "Right"],
    tb = ["Top", "Bottom"],
    La,
    ib,
    jb;
    j.fn.css = function (a, e) {
        return arguments.length === 2 && e === c ? this : j.access(this, a, e, !0, function (a, e, f) {
            return f !== c ? j.style(a, e, f) : j.css(a, e)
        })
    };
    j.extend({
        cssHooks : {
            opacity : {
                get : function (a, c) {
                    if (c) {
                        var e = La(a, "opacity", "opacity");
                        return e === "" ? "1" : e
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber : {
            fillOpacity : !0,
            fontWeight : !0,
            lineHeight : !0,
            opacity : !0,
            orphans : !0,
            widows : !0,
            zIndex : !0,
            zoom : !0
        },
        cssProps : {
            "float" : j.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style : function (a, e, f, g) {
            if (a && a.nodeType !== 3 && a.nodeType !== 8 && a.style) {
                var h,
                i,
                k = j.camelCase(e),
                m = a.style,
                n = j.cssHooks[k],
                e = j.cssProps[k] || k;
                if (f === c)
                    return n && "get" in n && (h = n.get(a, !1, g)) !== c ? h : m[e];
                i = typeof f;
                i === "string" && (h = eb.exec(f)) && (f =  + (h[1] + 1) * +h[2] + parseFloat(j.css(a, e)), i = "number");
                if (!(f == null || i === "number" && isNaN(f)))
                    if (i === "number" && !j.cssNumber[k] && (f += "px"), !n || !("set" in n) || (f = n.set(a, f)) !== c)
                        try {
                            m[e] = f
                        } catch (p) {}
                        
            }
        },
        css : function (a, e, f) {
            var g,
            h;
            e = j.camelCase(e);
            h = j.cssHooks[e];
            e = j.cssProps[e] || e;
            e === "cssFloat" && (e = "float");
            if (h && "get" in h && (g = h.get(a, !0, f)) !== c)
                return g;
            if (La)
                return La(a, e)
        },
        swap : function (a, c, e) {
            var f = {},
            g;
            for (g in c)
                f[g] = a.style[g], a.style[g] = c[g];
            e.call(a);
            for (g in c)
                a.style[g] =
                    f[g]
        }
    });
    j.curCSS = j.css;
    j.each(["height", "width"], function (a, c) {
        j.cssHooks[c] = {
            get : function (a, e, f) {
                var g;
                if (e) {
                    if (a.offsetWidth !== 0)
                        return q(a, c, f);
                    j.swap(a, wb, function () {
                        g = q(a, c, f)
                    });
                    return g
                }
            },
            set : function (a, c) {
                if (!W.test(c))
                    return c;
                c = parseFloat(c);
                if (c >= 0)
                    return c + "px"
            }
        }
    });
    j.support.opacity || (j.cssHooks.opacity = {
            get : function (a, c) {
                return Ta.test((c && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : c ? "1" : ""
            },
            set : function (a, c) {
                var e = a.style,
                f = a.currentStyle,
                g =
                    j.isNumeric(c) ? "alpha(opacity=" + c * 100 + ")" : "",
                h = f && f.filter || e.filter || "";
                e.zoom = 1;
                if (c >= 1 && j.trim(h.replace(Da, "")) === "" && (e.removeAttribute("filter"), f && !f.filter))
                    return;
                e.filter = Da.test(h) ? h.replace(Da, g) : h + " " + g
            }
        });
    j(function () {
        j.support.reliableMarginRight || (j.cssHooks.marginRight = {
                get : function (a, c) {
                    var e;
                    j.swap(a, {
                        display : "inline-block"
                    }, function () {
                        c ? e = La(a, "margin-right", "marginRight") : e = a.style.marginRight
                    });
                    return e
                }
            })
    });
    u.defaultView && u.defaultView.getComputedStyle && (ib = function (a, e) {
        var f,
        g,
        e = e.replace(Ua, "-$1").toLowerCase();
        if (!(g = a.ownerDocument.defaultView))
            return c;
        if (g = g.getComputedStyle(a, null))
            f = g.getPropertyValue(e), f === "" && !j.contains(a.ownerDocument.documentElement, a) && (f = j.style(a, e));
        return f
    });
    u.documentElement.currentStyle && (jb = function (a, c) {
        var e,
        f,
        g,
        h = a.currentStyle && a.currentStyle[c],
        i = a.style;
        h === null && i && (g = i[c]) && (h = g);
        !W.test(h) && Ea.test(h) && (e = i.left, f = a.runtimeStyle && a.runtimeStyle.left, f && (a.runtimeStyle.left = a.currentStyle.left), i.left = c === "fontSize" ? "1em" :
                h || 0, h = i.pixelLeft + "px", i.left = e, f && (a.runtimeStyle.left = f));
        return h === "" ? "auto" : h
    });
    La = ib || jb;
    j.expr && j.expr.filters && (j.expr.filters.hidden = function (a) {
        var c = a.offsetHeight;
        return a.offsetWidth === 0 && c === 0 || !j.support.reliableHiddenOffsets && (a.style && a.style.display || j.css(a, "display")) === "none"
    }, j.expr.filters.visible = function (a) {
        return !j.expr.filters.hidden(a)
    });
    var xb = /%20/g,
    rb = /\[\]$/,
    kb = /\r?\n/g,
    yb = /#.*$/,
    zb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    Ab = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Bb = /^(?:GET|HEAD)$/,
    Cb = /^\/\//,
    lb = /\?/,
    Db = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    Eb = /^(?:select|textarea)/i,
    hb = /\s+/,
    Fb = /([?&])_=[^&]*/,
    mb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    nb = j.fn.load,
    cb = {},
    ob = {},
    Ia,
    Ja,
    pb = ["*/"] + ["*"];
    try {
        Ia = L.href
    } catch (Lb) {
        Ia = u.createElement("a"),
        Ia.href = "",
        Ia = Ia.href
    }
    Ja = mb.exec(Ia.toLowerCase()) || [];
    j.fn.extend({
        load : function (a, e, f) {
            if (typeof a != "string" && nb)
                return nb.apply(this, arguments);
            if (!this.length)
                return this;
            var g = a.indexOf(" ");
            if (g >= 0)
                var h =
                    a.slice(g, a.length), a = a.slice(0, g);
            g = "GET";
            e && (j.isFunction(e) ? (f = e, e = c) : typeof e == "object" && (e = j.param(e, j.ajaxSettings.traditional), g = "POST"));
            var i = this;
            j.ajax({
                url : a,
                type : g,
                dataType : "html",
                data : e,
                complete : function (a, c, e) {
                    e = a.responseText;
                    a.isResolved() && (a.done(function (a) {
                            e = a
                        }), i.html(h ? j("<div>").append(e.replace(Db, "")).find(h) : e));
                    f && i.each(f, [e, c, a])
                }
            });
            return this
        },
        serialize : function () {
            return j.param(this.serializeArray())
        },
        serializeArray : function () {
            return this.map(function () {
                return this.elements ?
                j.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Eb.test(this.nodeName) || Ab.test(this.type))
            }).map(function (a, c) {
                var e = j(this).val();
                return e == null ? null : j.isArray(e) ? j.map(e, function (a) {
                    return {
                        name : c.name,
                        value : a.replace(kb, "\r\n")
                    }
                }) : {
                    name : c.name,
                    value : e.replace(kb, "\r\n")
                }
            }).get()
        }
    });
    j.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, c) {
        j.fn[c] = function (a) {
            return this.bind(c, a)
        }
    });
    j.each(["get", "post"],
        function (a, e) {
        j[e] = function (a, f, g, h) {
            j.isFunction(f) && (h = h || g, g = f, f = c);
            return j.ajax({
                type : e,
                url : a,
                data : f,
                success : g,
                dataType : h
            })
        }
    });
    j.extend({
        getScript : function (a, e) {
            return j.get(a, c, e, "script")
        },
        getJSON : function (a, c, e) {
            return j.get(a, c, e, "json")
        },
        ajaxSetup : function (a, c) {
            c ? n(a, j.ajaxSettings) : (c = a, a = j.ajaxSettings);
            n(a, c);
            return a
        },
        ajaxSettings : {
            url : Ia,
            isLocal : /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(Ja[1]),
            global : !0,
            type : "GET",
            contentType : "application/x-www-form-urlencoded",
            processData : !0,
            async : !0,
            accepts : {
                xml : "application/xml, text/xml",
                html : "text/html",
                text : "text/plain",
                json : "application/json, text/javascript",
                "*" : pb
            },
            contents : {
                xml : /xml/,
                html : /html/,
                json : /json/
            },
            responseFields : {
                xml : "responseXML",
                text : "responseText"
            },
            converters : {
                "* text" : a.String,
                "text html" : !0,
                "text json" : j.parseJSON,
                "text xml" : j.parseXML
            },
            flatOptions : {
                context : !0,
                url : !0
            }
        },
        ajaxPrefilter : s(cb),
        ajaxTransport : s(ob),
        ajax : function (a, e) {
            function f(a, e, p, q) {
                if (T !== 2) {
                    T = 2;
                    A && clearTimeout(A);
                    y = c;
                    w = q || "";
                    v.readyState =
                        a > 0 ? 4 : 0;
                    var C,
                    z,
                    u,
                    q = e;
                    if (p) {
                        var na = g,
                        W = v,
                        aa = na.contents,
                        G = na.dataTypes,
                        M = na.responseFields,
                        J,
                        da,
                        F,
                        Ea;
                        for (da in M)
                            da in p && (W[M[da]] = p[da]);
                        for (; G[0] === "*"; )
                            G.shift(), J === c && (J = na.mimeType || W.getResponseHeader("content-type"));
                        if (J)
                            for (da in aa)
                                if (aa[da] && aa[da].test(J)) {
                                    G.unshift(da);
                                    break
                                }
                        if (G[0]in p)
                            F = G[0];
                        else {
                            for (da in p) {
                                if (!G[0] || na.converters[da + " " + G[0]]) {
                                    F = da;
                                    break
                                }
                                Ea || (Ea = da)
                            }
                            F = F || Ea
                        }
                        F ? (F !== G[0] && G.unshift(F), p = p[F]) : p = void 0
                    } else
                        p = c;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (g.ifModified) {
                            if (J = v.getResponseHeader("Last-Modified"))
                                j.lastModified[s] =
                                    J;
                            if (J = v.getResponseHeader("Etag"))
                                j.etag[s] = J
                        }
                        if (a === 304)
                            q = "notmodified", C = !0;
                        else
                            try {
                                J = g;
                                J.dataFilter && (p = J.dataFilter(p, J.dataType));
                                var ga = J.dataTypes;
                                da = {};
                                var D,
                                S,
                                O = ga.length,
                                ja,
                                B = ga[0],
                                I,
                                L,
                                K,
                                H,
                                N;
                                for (D = 1; D < O; D++) {
                                    if (D === 1)
                                        for (S in J.converters)
                                            typeof S == "string" && (da[S.toLowerCase()] = J.converters[S]);
                                    I = B;
                                    B = ga[D];
                                    if (B === "*")
                                        B = I;
                                    else if (I !== "*" && I !== B) {
                                        L = I + " " + B;
                                        K = da[L] || da["* " + B];
                                        if (!K)
                                            for (H in N = c, da)
                                                if (ja = H.split(" "), ja[0] === I || ja[0] === "*")
                                                    if (N = da[ja[1] + " " + B]) {
                                                        H = da[H];
                                                        H === !0 ? K = N : N === !0 &&
                                                            (K = H);
                                                        break
                                                    }
                                        !K && !N && j.error("No conversion from " + L.replace(" ", " to "));
                                        K !== !0 && (p = K ? K(p) : N(H(p)))
                                    }
                                }
                                z = p;
                                q = "success";
                                C = !0
                            } catch (eb) {
                                q = "parsererror",
                                u = eb
                            }
                    } else if (u = q, !q || a)
                        q = "error", a < 0 && (a = 0);
                    v.status = a;
                    v.statusText = "" + (e || q);
                    C ? k.resolveWith(h, [z, q, v]) : k.rejectWith(h, [v, q, u]);
                    v.statusCode(n);
                    n = c;
                    E && i.trigger("ajax" + (C ? "Success" : "Error"), [v, g, C ? z : u]);
                    m.fireWith(h, [v, q]);
                    E && (i.trigger("ajaxComplete", [v, g]), --j.active || j.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (e = a, a = c);
            e = e || {};
            var g = j.ajaxSetup({},
                    e),
            h = g.context || g,
            i = h !== g && (h.nodeType || h instanceof j) ? j(h) : j.event,
            k = j.Deferred(),
            m = j.Callbacks("once memory"),
            n = g.statusCode || {},
            s,
            q = {},
            z = {},
            w,
            u,
            y,
            A,
            W,
            T = 0,
            E,
            aa,
            v = {
                readyState : 0,
                setRequestHeader : function (a, c) {
                    if (!T) {
                        var e = a.toLowerCase();
                        a = z[e] = z[e] || a;
                        q[a] = c
                    }
                    return this
                },
                getAllResponseHeaders : function () {
                    return T === 2 ? w : null
                },
                getResponseHeader : function (a) {
                    var e;
                    if (T === 2) {
                        if (!u)
                            for (u = {}; e = zb.exec(w); )
                                u[e[1].toLowerCase()] = e[2];
                        e = u[a.toLowerCase()]
                    }
                    return e === c ? null : e
                },
                overrideMimeType : function (a) {
                    T ||
                    (g.mimeType = a);
                    return this
                },
                abort : function (a) {
                    a = a || "abort";
                    y && y.abort(a);
                    f(0, a);
                    return this
                }
            };
            k.promise(v);
            v.success = v.done;
            v.error = v.fail;
            v.complete = m.add;
            v.statusCode = function (a) {
                if (a) {
                    var c;
                    if (T < 2)
                        for (c in a)
                            n[c] = [n[c], a[c]];
                    else
                        c = a[v.status], v.then(c, c)
                }
                return this
            };
            g.url = ((a || g.url) + "").replace(yb, "").replace(Cb, Ja[1] + "//");
            g.dataTypes = j.trim(g.dataType || "*").toLowerCase().split(hb);
            g.crossDomain == null && (W = mb.exec(g.url.toLowerCase()), g.crossDomain = !(!W || W[1] == Ja[1] && W[2] == Ja[2] && (W[3] || (W[1] ===
                            "http:" ? 80 : 443)) == (Ja[3] || (Ja[1] === "http:" ? 80 : 443))));
            g.data && g.processData && typeof g.data != "string" && (g.data = j.param(g.data, g.traditional));
            p(cb, g, e, v);
            if (T === 2)
                return !1;
            E = g.global;
            g.type = g.type.toUpperCase();
            g.hasContent = !Bb.test(g.type);
            E && j.active++ === 0 && j.event.trigger("ajaxStart");
            if (!g.hasContent && (g.data && (g.url += (lb.test(g.url) ? "&" : "?") + g.data, delete g.data), s = g.url, g.cache === !1)) {
                W = j.now();
                var G = g.url.replace(Fb, "$1_=" + W);
                g.url = G + (G === g.url ? (lb.test(g.url) ? "&" : "?") + "_=" + W : "")
            }
            (g.data && g.hasContent &&
                g.contentType !== !1 || e.contentType) && v.setRequestHeader("Content-Type", g.contentType);
            g.ifModified && (s = s || g.url, j.lastModified[s] && v.setRequestHeader("If-Modified-Since", j.lastModified[s]), j.etag[s] && v.setRequestHeader("If-None-Match", j.etag[s]));
            v.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== "*" ? ", " + pb + "; q=0.01" : "") : g.accepts["*"]);
            for (aa in g.headers)
                v.setRequestHeader(aa, g.headers[aa]);
            if (g.beforeSend && (g.beforeSend.call(h, v, g) ===
                    !1 || T === 2))
                return v.abort(), !1;
            for (aa in {
                success : 1,
                error : 1,
                complete : 1
            })
                v[aa](g[aa]);
            if (y = p(ob, g, e, v)) {
                v.readyState = 1;
                E && i.trigger("ajaxSend", [v, g]);
                g.async && g.timeout > 0 && (A = setTimeout(function () {
                            v.abort("timeout")
                        }, g.timeout));
                try {
                    T = 1,
                    y.send(q, f)
                } catch (M) {
                    T < 2 ? f(-1, M) : j.error(M)
                }
            } else
                f(-1, "No Transport");
            return v
        },
        param : function (a, e) {
            var f = [],
            g = function (a, c) {
                c = j.isFunction(c) ? c() : c;
                f[f.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
            };
            e === c && (e = j.ajaxSettings.traditional);
            if (j.isArray(a) ||
                a.jquery && !j.isPlainObject(a))
                j.each(a, function () {
                    g(this.name, this.value)
                });
            else
                for (var h in a)
                    m(h, a[h], e, g);
            return f.join("&").replace(xb, "+")
        }
    });
    j.extend({
        active : 0,
        lastModified : {},
        etag : {}
        
    });
    var Gb = j.now(),
    $a = /(\=)\?(&|$)|\?\?/i;
    j.ajaxSetup({
        jsonp : "callback",
        jsonpCallback : function () {
            return j.expando + "_" + Gb++
        }
    });
    j.ajaxPrefilter("json jsonp", function (c, e, f) {
        e = c.contentType === "application/x-www-form-urlencoded" && typeof c.data == "string";
        if (c.dataTypes[0] === "jsonp" || c.jsonp !== !1 && ($a.test(c.url) || e &&
                $a.test(c.data))) {
            var g,
            h = c.jsonpCallback = j.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback,
            i = a[h],
            k = c.url,
            m = c.data,
            n = "$1" + h + "$2";
            c.jsonp !== !1 && (k = k.replace($a, n), c.url === k && (e && (m = m.replace($a, n)), c.data === m && (k += (/\?/.test(k) ? "&" : "?") + c.jsonp + "=" + h)));
            c.url = k;
            c.data = m;
            a[h] = function (a) {
                g = [a]
            };
            f.always(function () {
                a[h] = i;
                g && j.isFunction(i) && a[h](g[0])
            });
            c.converters["script json"] = function () {
                g || j.error(h + " was not called");
                return g[0]
            };
            c.dataTypes[0] = "json";
            return "script"
        }
    });
    j.ajaxSetup({
        accepts : {
            script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents : {
            script : /javascript|ecmascript/
        },
        converters : {
            "text script" : function (a) {
                j.globalEval(a);
                return a
            }
        }
    });
    j.ajaxPrefilter("script", function (a) {
        a.cache === c && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    j.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var e,
            f = u.head || u.getElementsByTagName("head")[0] || u.documentElement;
            return {
                send : function (g, h) {
                    e = u.createElement("script");
                    e.async = "async";
                    a.scriptCharset && (e.charset = a.scriptCharset);
                    e.src = a.url;
                    e.onload = e.onreadystatechange = function (a,
                        g) {
                        if (g || !e.readyState || /loaded|complete/.test(e.readyState))
                            e.onload = e.onreadystatechange = null, f && e.parentNode && f.removeChild(e), e = c, g || h(200, "success")
                    };
                    f.insertBefore(e, f.firstChild)
                },
                abort : function () {
                    e && e.onload(0, 1)
                }
            }
        }
    });
    var fb = a.ActiveXObject ? function () {
        for (var a in Ra)
            Ra[a](0, 1)
    }
     : !1,
    Hb = 0,
    Ra;
    j.ajaxSettings.xhr = a.ActiveXObject ? function () {
        var c;
        if (!(c = !this.isLocal && k()))
            a : {
                try {
                    c = new a.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (e) {}
                
                c = void 0
            }
        return c
    }
     : k;
    (function (a) {
        j.extend(j.support, {
            ajax : !!a,
            cors : !!a && "withCredentials" in a
        })
    })(j.ajaxSettings.xhr());
    j.support.ajax && j.ajaxTransport(function (e) {
        if (!e.crossDomain || j.support.cors) {
            var f;
            return {
                send : function (g, h) {
                    var i = e.xhr(),
                    k,
                    m;
                    e.username ? i.open(e.type, e.url, e.async, e.username, e.password) : i.open(e.type, e.url, e.async);
                    if (e.xhrFields)
                        for (m in e.xhrFields)
                            i[m] = e.xhrFields[m];
                    e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType);
                    !e.crossDomain && !g["X-Requested-With"] && (g["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (m in g)
                            i.setRequestHeader(m,
                                g[m])
                    } catch (n) {}
                    
                    i.send(e.hasContent && e.data || null);
                    f = function (a, g) {
                        var m,
                        n,
                        p,
                        s,
                        q;
                        try {
                            if (f && (g || i.readyState === 4))
                                if (f = c, k && (i.onreadystatechange = j.noop, fb && delete Ra[k]), g)
                                    i.readyState !== 4 && i.abort();
                                else {
                                    m = i.status;
                                    p = i.getAllResponseHeaders();
                                    s = {};
                                    q = i.responseXML;
                                    q && q.documentElement && (s.xml = q);
                                    s.text = i.responseText;
                                    try {
                                        n = i.statusText
                                    } catch (z) {
                                        n = ""
                                    }
                                    !m && e.isLocal && !e.crossDomain ? m = s.text ? 200 : 404 : m === 1223 && (m = 204)
                                }
                        } catch (w) {
                            g || h(-1, w)
                        }
                        s && h(m, n, s, p)
                    };
                    !e.async || i.readyState === 4 ? f() : (k = ++Hb, fb && (Ra ||
                            (Ra = {}, j(a).unload(fb)), Ra[k] = f), i.onreadystatechange = f)
                },
                abort : function () {
                    f && f(0, 1)
                }
            }
        }
    });
    var bb = {},
    ua,
    Ka,
    Ib = /^(?:toggle|show|hide)$/,
    Jb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    ab,
    gb = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
    Va;
    j.fn.extend({
        show : function (a, c, e) {
            var h,
            i;
            if (a || a === 0)
                return this.animate(g("show", 3), a, c, e);
            a = 0;
            for (c = this.length; a < c; a++)
                h = this[a], h.style && (i = h.style.display, !j._data(h, "olddisplay") &&
                    i === "none" && (i = h.style.display = ""), i === "" && j.css(h, "display") === "none" && j._data(h, "olddisplay", f(h.nodeName)));
            for (a = 0; a < c; a++)
                if (h = this[a], h.style && (i = h.style.display, i === "" || i === "none"))
                    h.style.display = j._data(h, "olddisplay") || "";
            return this
        },
        hide : function (a, c, e) {
            if (a || a === 0)
                return this.animate(g("hide", 3), a, c, e);
            for (var f, h, a = 0, c = this.length; a < c; a++)
                f = this[a], f.style && (h = j.css(f, "display"), h !== "none" && !j._data(f, "olddisplay") && j._data(f, "olddisplay", h));
            for (a = 0; a < c; a++)
                this[a].style && (this[a].style.display =
                        "none");
            return this
        },
        _toggle : j.fn.toggle,
        toggle : function (a, c, e) {
            var f = typeof a == "boolean";
            j.isFunction(a) && j.isFunction(c) ? this._toggle.apply(this, arguments) : a == null || f ? this.each(function () {
                var c = f ? a : j(this).is(":hidden");
                j(this)[c ? "show" : "hide"]()
            }) : this.animate(g("toggle", 3), a, c, e);
            return this
        },
        fadeTo : function (a, c, e, f) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity : c
            }, a, e, f)
        },
        animate : function (a, c, e, g) {
            function h() {
                var C;
                i.queue === !1 && j._mark(this);
                var c = j.extend({},
                        i),
                e = this.nodeType === 1,
                g = e && j(this).is(":hidden"),
                k,
                m,
                n,
                p,
                s,
                q,
                z,
                w,
                u;
                c.animatedProperties = {};
                for (n in a) {
                    k = j.camelCase(n);
                    n !== k && (a[k] = a[n], delete a[n]);
                    m = a[k];
                    j.isArray(m) ? (c.animatedProperties[k] = m[1], C = a[k] = m[0], m = C) : c.animatedProperties[k] = c.specialEasing && c.specialEasing[k] || c.easing || "swing";
                    if (m === "hide" && g || m === "show" && !g)
                        return c.complete.call(this);
                    e && (k === "height" || k === "width") && (c.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], j.css(this, "display") === "inline" &&
                        j.css(this, "float") === "none" && (!j.support.inlineBlockNeedsLayout || f(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                c.overflow != null && (this.style.overflow = "hidden");
                for (n in a)
                    p = new j.fx(this, c, n), m = a[n], Ib.test(m) ? (u = j._data(this, "toggle" + n) || (m === "toggle" ? g ? "show" : "hide" : 0), u ? (j._data(this, "toggle" + n, u === "show" ? "hide" : "show"), p[u]()) : p[m]()) : (s = Jb.exec(m), q = p.cur(), s ? (z = parseFloat(s[2]), w = s[3] || (j.cssNumber[n] ? "" : "px"), w !== "px" && (j.style(this, n, (z || 1) + w), q *= (z || 1) /
                                p.cur(), j.style(this, n, q + w)), s[1] && (z = (s[1] === "-=" ? -1 : 1) * z + q), p.custom(q, z, w)) : p.custom(q, m, ""));
                return !0
            }
            var i = j.speed(c, e, g);
            if (j.isEmptyObject(a))
                return this.each(i.complete, [!1]);
            a = j.extend({}, a);
            return i.queue === !1 ? this.each(h) : this.queue(i.queue, h)
        },
        stop : function (a, e, f) {
            typeof a != "string" && (f = e, e = a, a = c);
            e && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function c(a, e, g) {
                    e = e[g];
                    j.removeData(a, g, !0);
                    e.stop(f)
                }
                var e,
                g = !1,
                h = j.timers,
                i = j._data(this);
                f || j._unmark(!0, this);
                if (a == null)
                    for (e in i)
                        i[e].stop &&
                        e.indexOf(".run") === e.length - 4 && c(this, i, e);
                else
                    i[e = a + ".run"] && i[e].stop && c(this, i, e);
                for (e = h.length; e--; )
                    h[e].elem === this && (a == null || h[e].queue === a) && (f ? h[e](!0) : h[e].saveState(), g = !0, h.splice(e, 1));
                (!f || !g) && j.dequeue(this, a)
            })
        }
    });
    j.each({
        slideDown : g("show", 1),
        slideUp : g("hide", 1),
        slideToggle : g("toggle", 1),
        fadeIn : {
            opacity : "show"
        },
        fadeOut : {
            opacity : "hide"
        },
        fadeToggle : {
            opacity : "toggle"
        }
    }, function (a, c) {
        j.fn[a] = function (a, e, f) {
            return this.animate(c, a, e, f)
        }
    });
    j.extend({
        speed : function (a, c, e) {
            var f = a &&
                typeof a == "object" ? j.extend({}, a) : {
                complete : e || !e && c || j.isFunction(a) && a,
                duration : a,
                easing : e && c || c && !j.isFunction(c) && c
            };
            f.duration = j.fx.off ? 0 : typeof f.duration == "number" ? f.duration : f.duration in j.fx.speeds ? j.fx.speeds[f.duration] : j.fx.speeds._default;
            if (f.queue == null || f.queue === !0)
                f.queue = "fx";
            f.old = f.complete;
            f.complete = function (a) {
                j.isFunction(f.old) && f.old.call(this);
                f.queue ? j.dequeue(this, f.queue) : a !== !1 && j._unmark(this)
            };
            return f
        },
        easing : {
            linear : function (a, c, e, f) {
                return e + f * a
            },
            swing : function (a,
                c, e, f) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * f + e
            }
        },
        timers : [],
        fx : function (a, c, e) {
            this.options = c;
            this.elem = a;
            this.prop = e;
            c.orig = c.orig || {}
            
        }
    });
    j.fx.prototype = {
        update : function () {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (j.fx.step[this.prop] || j.fx.step._default)(this)
        },
        cur : function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                return this.elem[this.prop];
            var a,
            c = j.css(this.elem, this.prop);
            return isNaN(a = parseFloat(c)) ? !c || c === "auto" ? 0 : c : a
        },
        custom : function (a, e, f) {
            function g(a) {
                return h.step(a)
            }
            var h = this,
            k = j.fx;
            this.startTime = Va || i();
            this.end = e;
            this.now = this.start = a;
            this.pos = this.state = 0;
            this.unit = f || this.unit || (j.cssNumber[this.prop] ? "" : "px");
            g.queue = this.options.queue;
            g.elem = this.elem;
            g.saveState = function () {
                h.options.hide && j._data(h.elem, "fxshow" + h.prop) === c && j._data(h.elem, "fxshow" + h.prop, h.start)
            };
            g() && j.timers.push(g) && !ab && (ab = setInterval(k.tick, k.interval))
        },
        show : function () {
            var a = j._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] =
                a || j.style(this.elem, this.prop);
            this.options.show = !0;
            a !== c ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            j(this.elem).show()
        },
        hide : function () {
            this.options.orig[this.prop] = j._data(this.elem, "fxshow" + this.prop) || j.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step : function (a) {
            var c,
            e,
            f,
            g = Va || i(),
            h = !0,
            k = this.elem,
            m = this.options;
            if (a || g >= m.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                m.animatedProperties[this.prop] =
                    !0;
                for (c in m.animatedProperties)
                    m.animatedProperties[c] !== !0 && (h = !1);
                if (h) {
                    m.overflow != null && !j.support.shrinkWrapBlocks && j.each(["", "X", "Y"], function (a, c) {
                        k.style["overflow" + c] = m.overflow[a]
                    });
                    m.hide && j(k).hide();
                    if (m.hide || m.show)
                        for (c in m.animatedProperties)
                            j.style(k, c, m.orig[c]), j.removeData(k, "fxshow" + c, !0), j.removeData(k, "toggle" + c, !0);
                    f = m.complete;
                    f && (m.complete = !1, f.call(k))
                }
                return !1
            }
            m.duration == Infinity ? this.now = g : (e = g - this.startTime, this.state = e / m.duration, this.pos = j.easing[m.animatedProperties[this.prop]](this.state,
                            e, 0, 1, m.duration), this.now = this.start + (this.end - this.start) * this.pos);
            this.update();
            return !0
        }
    };
    j.extend(j.fx, {
        tick : function () {
            for (var a, c = j.timers, e = 0; e < c.length; e++)
                a = c[e], !a() && c[e] === a && c.splice(e--, 1);
            c.length || j.fx.stop()
        },
        interval : 13,
        stop : function () {
            clearInterval(ab);
            ab = null
        },
        speeds : {
            slow : 600,
            fast : 200,
            _default : 400
        },
        step : {
            opacity : function (a) {
                j.style(a.elem, "opacity", a.now)
            },
            _default : function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    });
    j.each(["width", "height"], function (a, c) {
        j.fx.step[c] = function (a) {
            j.style(a.elem, c, Math.max(0, a.now))
        }
    });
    j.expr && j.expr.filters && (j.expr.filters.animated = function (a) {
        return j.grep(j.timers, function (c) {
            return a === c.elem
        }).length
    });
    var Kb = /^t(?:able|d|h)$/i,
    qb = /^(?:body|html)$/i;
    "getBoundingClientRect" in u.documentElement ? j.fn.offset = function (a) {
        var c = this[0],
        f;
        if (a)
            return this.each(function (c) {
                j.offset.setOffset(this, a, c)
            });
        if (!c || !c.ownerDocument)
            return null;
        if (c === c.ownerDocument.body)
            return j.offset.bodyOffset(c);
        try {
            f = c.getBoundingClientRect()
        } catch (g) {}
        
        var h = c.ownerDocument,
        i = h.documentElement;
        if (!f || !j.contains(i, c))
            return f ? {
                top : f.top,
                left : f.left
            }
         : {
            top : 0,
            left : 0
        };
        c = h.body;
        h = e(h);
        return {
            top : f.top + (h.pageYOffset || j.support.boxModel && i.scrollTop || c.scrollTop) - (i.clientTop || c.clientTop || 0),
            left : f.left + (h.pageXOffset || j.support.boxModel && i.scrollLeft || c.scrollLeft) - (i.clientLeft || c.clientLeft || 0)
        }
    }
     : j.fn.offset = function (a) {
        var c = this[0];
        if (a)
            return this.each(function (c) {
                j.offset.setOffset(this, a, c)
            });
        if (!c ||
            !c.ownerDocument)
            return null;
        if (c === c.ownerDocument.body)
            return j.offset.bodyOffset(c);
        for (var e, f = c.offsetParent, g = c.ownerDocument, h = g.documentElement, i = g.body, k = (g = g.defaultView) ? g.getComputedStyle(c, null) : c.currentStyle, m = c.offsetTop, n = c.offsetLeft; (c = c.parentNode) && c !== i && c !== h; ) {
            if (j.support.fixedPosition && k.position === "fixed")
                break;
            e = g ? g.getComputedStyle(c, null) : c.currentStyle;
            m -= c.scrollTop;
            n -= c.scrollLeft;
            c === f && (m += c.offsetTop, n += c.offsetLeft, j.support.doesNotAddBorder && (!j.support.doesAddBorderForTableAndCells ||
                    !Kb.test(c.nodeName)) && (m += parseFloat(e.borderTopWidth) || 0, n += parseFloat(e.borderLeftWidth) || 0), f = c.offsetParent);
            j.support.subtractsBorderForOverflowNotVisible && e.overflow !== "visible" && (m += parseFloat(e.borderTopWidth) || 0, n += parseFloat(e.borderLeftWidth) || 0);
            k = e
        }
        if (k.position === "relative" || k.position === "static")
            m += i.offsetTop, n += i.offsetLeft;
        j.support.fixedPosition && k.position === "fixed" && (m += Math.max(h.scrollTop, i.scrollTop), n += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top : m,
            left : n
        }
    };
    j.offset = {
        bodyOffset : function (a) {
            var c =
                a.offsetTop,
            e = a.offsetLeft;
            j.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(j.css(a, "marginTop")) || 0, e += parseFloat(j.css(a, "marginLeft")) || 0);
            return {
                top : c,
                left : e
            }
        },
        setOffset : function (a, c, e) {
            var f = j.css(a, "position");
            f === "static" && (a.style.position = "relative");
            var g = j(a),
            h = g.offset(),
            i = j.css(a, "top"),
            k = j.css(a, "left"),
            m = {},
            n = {},
            p,
            s;
            (f === "absolute" || f === "fixed") && j.inArray("auto", [i, k]) > -1 ? (n = g.position(), p = n.top, s = n.left) : (p = parseFloat(i) || 0, s = parseFloat(k) || 0);
            j.isFunction(c) && (c = c.call(a,
                        e, h));
            c.top != null && (m.top = c.top - h.top + p);
            c.left != null && (m.left = c.left - h.left + s);
            "using" in c ? c.using.call(a, m) : g.css(m)
        }
    };
    j.fn.extend({
        position : function () {
            if (!this[0])
                return null;
            var a = this[0],
            c = this.offsetParent(),
            e = this.offset(),
            f = qb.test(c[0].nodeName) ? {
                top : 0,
                left : 0
            }
             : c.offset();
            e.top -= parseFloat(j.css(a, "marginTop")) || 0;
            e.left -= parseFloat(j.css(a, "marginLeft")) || 0;
            f.top += parseFloat(j.css(c[0], "borderTopWidth")) || 0;
            f.left += parseFloat(j.css(c[0], "borderLeftWidth")) || 0;
            return {
                top : e.top - f.top,
                left : e.left -
                f.left
            }
        },
        offsetParent : function () {
            return this.map(function () {
                for (var a = this.offsetParent || u.body; a && !qb.test(a.nodeName) && j.css(a, "position") === "static"; )
                    a = a.offsetParent;
                return a
            })
        }
    });
    j.each(["Left", "Top"], function (a, f) {
        var g = "scroll" + f;
        j.fn[g] = function (f) {
            var h,
            i;
            if (f === c) {
                h = this[0];
                return !h ? null : (i = e(h)) ? "pageXOffset" in i ? i[a ? "pageYOffset" : "pageXOffset"] : j.support.boxModel && i.document.documentElement[g] || i.document.body[g] : h[g]
            }
            return this.each(function () {
                i = e(this);
                i ? i.scrollTo(a ? j(i).scrollLeft() :
                    f, a ? f : j(i).scrollTop()) : this[g] = f
            })
        }
    });
    j.each(["Height", "Width"], function (a, e) {
        var f = e.toLowerCase();
        j.fn["inner" + e] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(j.css(a, f, "padding")) : this[f]() : null
        };
        j.fn["outer" + e] = function (a) {
            var c = this[0];
            return c ? c.style ? parseFloat(j.css(c, f, a ? "margin" : "border")) : this[f]() : null
        };
        j.fn[f] = function (a) {
            var g = this[0];
            if (!g)
                return a == null ? null : this;
            if (j.isFunction(a))
                return this.each(function (c) {
                    var e = j(this);
                    e[f](a.call(this, c, e[f]()))
                });
            if (j.isWindow(g)) {
                var h =
                    g.document.documentElement["client" + e],
                i = g.document.body;
                return g.document.compatMode === "CSS1Compat" && h || i && i["client" + e] || h
            }
            if (g.nodeType === 9)
                return Math.max(g.documentElement["client" + e], g.body["scroll" + e], g.documentElement["scroll" + e], g.body["offset" + e], g.documentElement["offset" + e]);
            return a === c ? (g = j.css(g, f), h = parseFloat(g), j.isNumeric(h) ? h : g) : this.css(f, typeof a == "string" ? a : a + "px")
        }
    });
    a.jQuery = a.$ = j
})(window);
(function (a, c, e) {
    a.fn.jScrollPane = function (c) {
        function g(c, f) {
            function g(f) {
                var i,
                n,
                s,
                w,
                y,
                v = !1,
                A = !1;
                H = f;
                if (V === e)
                    w = c.scrollTop(), y = c.scrollLeft(), c.css({
                        overflow : "hidden",
                        padding : 0
                    }), X = c.innerWidth() + za, Y = c.innerHeight(), c.width(X), V = a('<div class="jspPane" />').css("padding", Ya).append(c.children()), P = a('<div class="jspContainer" />').css({
                            width : X + "px",
                            height : Y + "px"
                        }).append(V).appendTo(c);
                else {
                    c.css("width", "");
                    v = H.stickToBottom && S();
                    A = H.stickToRight && L();
                    if (s = c.innerWidth() + za != X || c.outerHeight() !=
                            Y)
                        X = c.innerWidth() + za, Y = c.innerHeight(), P.css({
                            width : X + "px",
                            height : Y + "px"
                        });
                    if (!s && Za == ea && V.outerHeight() == z) {
                        c.width(X);
                        return
                    }
                    Za = ea;
                    V.css("width", "");
                    c.width(X);
                    P.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                V.css("overflow", "auto");
                ea = f.contentWidth ? f.contentWidth : V[0].scrollWidth;
                z = V[0].scrollHeight;
                V.css("overflow", "");
                T = ea / X;
                aa = z / Y;
                ga = aa > 1;
                ja = T > 1;
                if (!ja && !ga)
                    c.removeClass("jspScrollable"), V.css({
                        top : 0,
                        width : P.width() - za
                    }), P.unbind(Ua), V.find(":input,a").unbind("focus.jsp"), c.attr("tabindex",
                        "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), O(), la();
                else {
                    c.addClass("jspScrollable");
                    if (f = H.maintainPosition && (ha || ia))
                        i = D(), n = u();
                    m();
                    p();
                    q();
                    f && (J(A ? ea - X : i, !1), M(v ? z - Y : n, !1));
                    B();
                    j();
                    pa();
                    H.enableKeyboardNavigation && U();
                    H.clickOnTrack && G();
                    fa();
                    H.hijackInternalLinks && ba()
                }
                H.autoReinitialise && !Pa ? Pa = setInterval(function () {
                        g(H)
                    }, H.autoReinitialiseDelay) : !H.autoReinitialise && Pa && clearInterval(Pa);
                w && c.scrollTop(0) && M(w, !1);
                y && c.scrollLeft(0) && J(y, !1);
                c.trigger("jsp-initialised",
                    [ja || ga])
            }
            function m() {
                ga && (P.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), Oa = P.find(">.jspVerticalBar"), sa = Oa.find(">.jspTrack"), oa = sa.find(">.jspDrag"), H.showArrows && (Ba = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", y(0, -1)).bind("click.jsp", v), Fa = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",
                                y(0, 1)).bind("click.jsp", v), H.arrowScrollOnHover && (Ba.bind("mouseover.jsp", y(0, -1, Ba)), Fa.bind("mouseover.jsp", y(0, 1, Fa))), w(sa, H.verticalArrowPositions, Ba, Fa)), Aa = Y, P.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                        Aa -= a(this).outerHeight()
                    }), oa.hover(function () {
                        oa.addClass("jspHover")
                    }, function () {
                        oa.removeClass("jspHover")
                    }).bind("mousedown.jsp", function (c) {
                        a("html").bind("dragstart.jsp selectstart.jsp", v);
                        oa.addClass("jspActive");
                        var e = c.pageY - oa.position().top;
                        a("html").bind("mousemove.jsp", function (a) {
                            R(a.pageY - e, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", F);
                        return !1
                    }), n())
            }
            function n() {
                sa.height(Aa + "px");
                ha = 0;
                Sa = H.verticalGutter + sa.outerWidth();
                V.width(X - Sa - za);
                try {
                    Oa.position().left === 0 && V.css("margin-left", Sa + "px")
                } catch (a) {}
                
            }
            function p() {
                ja && (P.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))),
                            a('<div class="jspCap jspCapRight" />'))), Ca = P.find(">.jspHorizontalBar"), ra = Ca.find(">.jspTrack"), ma = ra.find(">.jspDrag"), H.showArrows && (Ga = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", y(-1, 0)).bind("click.jsp", v), Ha = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", y(1, 0)).bind("click.jsp", v), H.arrowScrollOnHover && (Ga.bind("mouseover.jsp", y(-1, 0, Ga)), Ha.bind("mouseover.jsp", y(1, 0, Ha))), w(ra, H.horizontalArrowPositions, Ga, Ha)), ma.hover(function () {
                        ma.addClass("jspHover")
                    },
                        function () {
                        ma.removeClass("jspHover")
                    }).bind("mousedown.jsp", function (c) {
                        a("html").bind("dragstart.jsp selectstart.jsp", v);
                        ma.addClass("jspActive");
                        var e = c.pageX - ma.position().left;
                        a("html").bind("mousemove.jsp", function (a) {
                            N(a.pageX - e, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", F);
                        return !1
                    }), xa = P.innerWidth(), s())
            }
            function s() {
                P.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    xa -= a(this).outerWidth()
                });
                ra.width(xa + "px");
                ia = 0
            }
            function q() {
                if (ja && ga) {
                    var c = ra.outerHeight(),
                    e = sa.outerWidth();
                    Aa -= c;
                    a(Ca).find(">.jspCap:visible,>.jspArrow").each(function () {
                        xa += a(this).outerWidth()
                    });
                    xa -= e;
                    Y -= e;
                    X -= c;
                    ra.parent().append(a('<div class="jspCorner" />').css("width", c + "px"));
                    n();
                    s()
                }
                ja && V.width(P.outerWidth() - za + "px");
                z = V.outerHeight();
                aa = z / Y;
                if (ja) {
                    ya = Math.ceil(1 / T * xa);
                    if (ya > H.horizontalDragMaxWidth)
                        ya = H.horizontalDragMaxWidth;
                    else if (ya < H.horizontalDragMinWidth)
                        ya = H.horizontalDragMinWidth;
                    ma.width(ya + "px");
                    va = xa - ya;
                    A(ia)
                }
                if (ga) {
                    wa = Math.ceil(1 / aa * Aa);
                    if (wa > H.verticalDragMaxHeight)
                        wa =
                            H.verticalDragMaxHeight;
                    else if (wa < H.verticalDragMinHeight)
                        wa = H.verticalDragMinHeight;
                    oa.height(wa + "px");
                    ta = Aa - wa;
                    I(ha)
                }
            }
            function w(a, c, e, f) {
                var g = "before",
                h = "after";
                c == "os" && (c = /Mac/.test(navigator.platform) ? "after" : "split");
                c == g ? h = c : c == h && (g = c, c = e, e = f, f = c);
                a[g](e)[h](f)
            }
            function y(a, c, e) {
                return function () {
                    E(a, c, this, e);
                    this.blur();
                    return !1
                }
            }
            function E(c, e, f, g) {
                var f = a(f).addClass("jspActive"),
                h,
                i,
                k = !0,
                j = function () {
                    c !== 0 && ca.scrollByX(c * H.arrowButtonSpeed);
                    e !== 0 && ca.scrollByY(e * H.arrowButtonSpeed);
                    i = setTimeout(j, k ? H.initialDelay : H.arrowRepeatFreq);
                    k = !1
                };
                j();
                h = g ? "mouseout.jsp" : "mouseup.jsp";
                g = g || a("html");
                g.bind(h, function () {
                    f.removeClass("jspActive");
                    i && clearTimeout(i);
                    i = null;
                    g.unbind(h)
                })
            }
            function G() {
                O();
                ga && sa.bind("mousedown.jsp", function (c) {
                    if (c.originalTarget === e || c.originalTarget == c.currentTarget) {
                        var f = a(this),
                        g = f.offset(),
                        h = c.pageY - g.top - ha,
                        i,
                        k = !0,
                        j = function () {
                            var a = f.offset(),
                            a = c.pageY - a.top - wa / 2,
                            e = Y * H.scrollPagePercent,
                            g = ta * e / (z - Y);
                            if (h < 0)
                                ha - g > a ? ca.scrollByY(-e) : R(a);
                            else if (h > 0)
                                ha +
                                g < a ? ca.scrollByY(e) : R(a);
                            else {
                                m();
                                return
                            }
                            i = setTimeout(j, k ? H.initialDelay : H.trackClickRepeatFreq);
                            k = !1
                        },
                        m = function () {
                            i && clearTimeout(i);
                            i = null;
                            a(document).unbind("mouseup.jsp", m)
                        };
                        j();
                        a(document).bind("mouseup.jsp", m);
                        return !1
                    }
                });
                ja && ra.bind("mousedown.jsp", function (c) {
                    if (c.originalTarget === e || c.originalTarget == c.currentTarget) {
                        var f = a(this),
                        g = f.offset(),
                        h = c.pageX - g.left - ia,
                        i,
                        k = !0,
                        j = function () {
                            var a = f.offset(),
                            a = c.pageX - a.left - ya / 2,
                            e = X * H.scrollPagePercent,
                            g = va * e / (ea - X);
                            if (h < 0)
                                ia - g > a ? ca.scrollByX(-e) :
                                N(a);
                            else if (h > 0)
                                ia + g < a ? ca.scrollByX(e) : N(a);
                            else {
                                m();
                                return
                            }
                            i = setTimeout(j, k ? H.initialDelay : H.trackClickRepeatFreq);
                            k = !1
                        },
                        m = function () {
                            i && clearTimeout(i);
                            i = null;
                            a(document).unbind("mouseup.jsp", m)
                        };
                        j();
                        a(document).bind("mouseup.jsp", m);
                        return !1
                    }
                })
            }
            function O() {
                ra && ra.unbind("mousedown.jsp");
                sa && sa.unbind("mousedown.jsp")
            }
            function F() {
                a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                oa && oa.removeClass("jspActive");
                ma && ma.removeClass("jspActive")
            }
            function R(a,
                c) {
                if (ga) {
                    a < 0 ? a = 0 : a > ta && (a = ta);
                    if (c === e)
                        c = H.animateScroll;
                    c ? ca.animate(oa, "top", a, I) : (oa.css("top", a), I(a))
                }
            }
            function I(a) {
                if (a === e)
                    a = oa.position().top;
                P.scrollTop(0);
                ha = a;
                var f = ha === 0,
                g = ha == ta,
                a =  - (a / ta) * (z - Y);
                if (Ma != f || Qa != g)
                    Ma = f, Qa = g, c.trigger("jsp-arrow-change", [Ma, Qa, ka, Da]);
                H.showArrows && (Ba[f ? "addClass" : "removeClass"]("jspDisabled"), Fa[g ? "addClass" : "removeClass"]("jspDisabled"));
                V.css("top", a);
                c.trigger("jsp-scroll-y", [-a, f, g]).trigger("scroll")
            }
            function N(a, c) {
                if (ja) {
                    a < 0 ? a = 0 : a > va && (a = va);
                    if (c ===
                        e)
                        c = H.animateScroll;
                    c ? ca.animate(ma, "left", a, A) : (ma.css("left", a), A(a))
                }
            }
            function A(a) {
                if (a === e)
                    a = ma.position().left;
                P.scrollTop(0);
                ia = a;
                var f = ia === 0,
                g = ia == va,
                a =  - (a / va) * (ea - X);
                if (ka != f || Da != g)
                    ka = f, Da = g, c.trigger("jsp-arrow-change", [Ma, Qa, ka, Da]);
                H.showArrows && (Ga[f ? "addClass" : "removeClass"]("jspDisabled"), Ha[g ? "addClass" : "removeClass"]("jspDisabled"));
                V.css("left", a);
                c.trigger("jsp-scroll-x", [-a, f, g]).trigger("scroll")
            }
            function M(a, c) {
                R(a / (z - Y) * ta, c)
            }
            function J(a, c) {
                N(a / (ea - X) * va, c)
            }
            function K(c,
                e, f) {
                var g,
                h,
                i = 0,
                k = 0,
                j,
                m,
                n;
                try {
                    g = a(c)
                } catch (p) {
                    return
                }
                h = g.outerHeight();
                c = g.outerWidth();
                P.scrollTop(0);
                for (P.scrollLeft(0); !g.is(".jspPane"); )
                    if (i += g.position().top, k += g.position().left, g = g.offsetParent(), /^body|html$/i.test(g[0].nodeName))
                        return;
                g = u();
                j = g + Y;
                i < g || e ? m = i - H.verticalGutter : i + h > j && (m = i - Y + h + H.verticalGutter);
                m && M(m, f);
                i = D();
                m = i + X;
                k < i || e ? n = k - H.horizontalGutter : k + c > m && (n = k - X + c + H.horizontalGutter);
                n && J(n, f)
            }
            function D() {
                return -V.position().left
            }
            function u() {
                return -V.position().top
            }
            function S() {
                var a =
                    z - Y;
                return a > 20 && a - u() < 10
            }
            function L() {
                var a = ea - X;
                return a > 20 && a - D() < 10
            }
            function j() {
                P.unbind(Ua).bind(Ua, function (a, c, e, f) {
                    a = ia;
                    c = ha;
                    ca.scrollBy(e * H.mouseWheelSpeed, -f * H.mouseWheelSpeed, !1);
                    return a == ia && c == ha
                })
            }
            function v() {
                return !1
            }
            function B() {
                V.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (a) {
                    K(a.target, !1)
                })
            }
            function U() {
                function e() {
                    var a = ia,
                    c = ha;
                    switch (f) {
                    case 40:
                        ca.scrollByY(H.keyboardSpeed, !1);
                        break;
                    case 38:
                        ca.scrollByY(-H.keyboardSpeed, !1);
                        break;
                    case 34:
                    case 32:
                        ca.scrollByY(Y *
                            H.scrollPagePercent, !1);
                        break;
                    case 33:
                        ca.scrollByY(-Y * H.scrollPagePercent, !1);
                        break;
                    case 39:
                        ca.scrollByX(H.keyboardSpeed, !1);
                        break;
                    case 37:
                        ca.scrollByX(-H.keyboardSpeed, !1)
                    }
                    return g = a != ia || c != ha
                }
                var f,
                g,
                i = [];
                ja && i.push(Ca[0]);
                ga && i.push(Oa[0]);
                V.focus(function () {
                    c.focus()
                });
                c.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (c) {
                    if (!(c.target !== this && (!i.length || !a(c.target).closest(i).length))) {
                        var h = ia,
                        k = ha;
                        switch (c.keyCode) {
                        case 40:
                        case 38:
                        case 34:
                        case 32:
                        case 33:
                        case 39:
                        case 37:
                            f =
                                c.keyCode;
                            e();
                            break;
                        case 35:
                            M(z - Y);
                            f = null;
                            break;
                        case 36:
                            M(0),
                            f = null
                        }
                        g = c.keyCode == f && h != ia || k != ha;
                        return !g
                    }
                }).bind("keypress.jsp", function (a) {
                    a.keyCode == f && e();
                    return !g
                });
                H.hideFocus ? (c.css("outline", "none"), "hideFocus" in P[0] && c.attr("hideFocus", !0)) : (c.css("outline", ""), "hideFocus" in P[0] && c.attr("hideFocus", !1))
            }
            function fa() {
                if (location.hash && location.hash.length > 1) {
                    var c,
                    e,
                    f = escape(location.hash);
                    try {
                        c = a(f)
                    } catch (g) {
                        return
                    }
                    c.length && V.find(f) && (P.scrollTop() === 0 ? e = setInterval(function () {
                                P.scrollTop() >
                                0 && (K(f, !0), a(document).scrollTop(P.position().top), clearInterval(e))
                            }, 50) : (K(f, !0), a(document).scrollTop(P.position().top)))
                }
            }
            function la() {
                a("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")
            }
            function ba() {
                la();
                a("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack", function () {
                    var a = this.href.split("#");
                    if (a.length > 1 && (a = a[1], a.length > 0 && V.find("#" + a).length > 0))
                        return K("#" + a, !0), !1
                })
            }
            function pa() {
                var a,
                c,
                e,
                f,
                g,
                h = !1;
                P.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",
                    function (i) {
                    i = i.originalEvent.touches[0];
                    a = D();
                    c = u();
                    e = i.pageX;
                    f = i.pageY;
                    g = !1;
                    h = !0
                }).bind("touchmove.jsp", function (i) {
                    if (h) {
                        var i = i.originalEvent.touches[0],
                        k = ia,
                        j = ha;
                        ca.scrollTo(a + e - i.pageX, c + f - i.pageY);
                        g = g || Math.abs(e - i.pageX) > 5 || Math.abs(f - i.pageY) > 5;
                        return k == ia && j == ha
                    }
                }).bind("touchend.jsp", function () {
                    h = !1
                }).bind("click.jsp-touchclick", function () {
                    if (g)
                        return g = !1
                })
            }
            var H,
            ca = this,
            V,
            X,
            Y,
            P,
            ea,
            z,
            T,
            aa,
            ga,
            ja,
            oa,
            ta,
            ha,
            ma,
            va,
            ia,
            Oa,
            sa,
            Sa,
            Aa,
            wa,
            Ba,
            Fa,
            Ca,
            ra,
            xa,
            ya,
            Ga,
            Ha,
            Pa,
            Ya,
            za,
            Za,
            Ma = !0,
            ka = !0,
            Qa = !1,
            Da =
                !1,
            Ta = c.clone(!1, !1).empty(),
            Ua = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            Ya = c.css("paddingTop") + " " + c.css("paddingRight") + " " + c.css("paddingBottom") + " " + c.css("paddingLeft");
            za = (parseInt(c.css("paddingLeft"), 10) || 0) + (parseInt(c.css("paddingRight"), 10) || 0);
            a.extend(ca, {
                reinitialise : function (c) {
                    c = a.extend({}, H, c);
                    g(c)
                },
                scrollToElement : function (a, c, e) {
                    K(a, c, e)
                },
                scrollTo : function (a, c, e) {
                    J(a, e);
                    M(c, e)
                },
                scrollToX : function (a, c) {
                    J(a, c)
                },
                scrollToY : function (a, c) {
                    M(a, c)
                },
                scrollToPercentX : function (a,
                    c) {
                    J(a * (ea - X), c)
                },
                scrollToPercentY : function (a, c) {
                    M(a * (z - Y), c)
                },
                scrollBy : function (a, c, e) {
                    ca.scrollByX(a, e);
                    ca.scrollByY(c, e)
                },
                scrollByX : function (a, c) {
                    var e = (D() + Math[a < 0 ? "floor" : "ceil"](a)) / (ea - X);
                    N(e * va, c)
                },
                scrollByY : function (a, c) {
                    var e = (u() + Math[a < 0 ? "floor" : "ceil"](a)) / (z - Y);
                    R(e * ta, c)
                },
                positionDragX : function (a, c) {
                    N(a, c)
                },
                positionDragY : function (a, c) {
                    R(a, c)
                },
                animate : function (a, c, e, f) {
                    var g = {};
                    g[c] = e;
                    a.animate(g, {
                        duration : H.animateDuration,
                        easing : H.animateEase,
                        queue : !1,
                        step : f
                    })
                },
                getContentPositionX : function () {
                    return D()
                },
                getContentPositionY : function () {
                    return u()
                },
                getContentWidth : function () {
                    return ea
                },
                getContentHeight : function () {
                    return z
                },
                getPercentScrolledX : function () {
                    return D() / (ea - X)
                },
                getPercentScrolledY : function () {
                    return u() / (z - Y)
                },
                getIsScrollableH : function () {
                    return ja
                },
                getIsScrollableV : function () {
                    return ga
                },
                getContentPane : function () {
                    return V
                },
                scrollToBottom : function (a) {
                    R(ta, a)
                },
                hijackInternalLinks : function () {
                    ba()
                },
                destroy : function () {
                    var a = u(),
                    e = D();
                    c.removeClass("jspScrollable").unbind(".jsp");
                    c.replaceWith(Ta.append(V.children()));
                    Ta.scrollTop(a);
                    Ta.scrollLeft(e)
                }
            });
            g(f)
        }
        c = a.extend({}, a.fn.jScrollPane.defaults, c);
        a.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
            c[this] = c[this] || c.speed
        });
        return this.each(function () {
            var e = a(this),
            i = e.data("jsp");
            i ? i.reinitialise(c) : (i = new g(e, c), e.data("jsp", i))
        })
    };
    a.fn.jScrollPane.defaults = {
        showArrows : !1,
        maintainPosition : !0,
        stickToBottom : !1,
        stickToRight : !1,
        clickOnTrack : !0,
        autoReinitialise : !1,
        autoReinitialiseDelay : 500,
        verticalDragMinHeight : 0,
        verticalDragMaxHeight : 99999,
        horizontalDragMinWidth : 0,
        horizontalDragMaxWidth : 99999,
        contentWidth : e,
        animateScroll : !1,
        animateDuration : 300,
        animateEase : "linear",
        hijackInternalLinks : !1,
        verticalGutter : 4,
        horizontalGutter : 4,
        mouseWheelSpeed : 0,
        arrowButtonSpeed : 0,
        arrowRepeatFreq : 50,
        arrowScrollOnHover : !1,
        trackClickSpeed : 0,
        trackClickRepeatFreq : 70,
        verticalArrowPositions : "split",
        horizontalArrowPositions : "split",
        enableKeyboardNavigation : !0,
        hideFocus : !1,
        keyboardSpeed : 0,
        initialDelay : 300,
        speed : 30,
        scrollPagePercent : 0.8
    }
})(jQuery, this);
(function (a) {
    function c(c) {
        var e = c || window.event,
        f = [].slice.call(arguments, 1),
        k = 0,
        m = 0,
        n = 0,
        c = a.event.fix(e);
        c.type = "mousewheel";
        e.wheelDelta && (k = e.wheelDelta / 120);
        e.detail && (k = -e.detail / 3);
        n = k;
        e.axis !== void 0 && e.axis === e.HORIZONTAL_AXIS && (n = 0, m = -1 * k);
        e.wheelDeltaY !== void 0 && (n = e.wheelDeltaY / 120);
        e.wheelDeltaX !== void 0 && (m = -1 * e.wheelDeltaX / 120);
        f.unshift(c, k, m, n);
        return (a.event.dispatch || a.event.handle).apply(this, f)
    }
    var e = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks)
        for (var f = e.length; f; )
            a.event.fixHooks[e[--f]] =
                a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup : function () {
            if (this.addEventListener)
                for (var a = e.length; a; )
                    this.addEventListener(e[--a], c, !1);
            else
                this.onmousewheel = c
        },
        teardown : function () {
            if (this.removeEventListener)
                for (var a = e.length; a; )
                    this.removeEventListener(e[--a], c, !1);
            else
                this.onmousewheel = null
        }
    };
    a.fn.extend({
        mousewheel : function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel : function (a) {
            return this.unbind("mousewheel", a)
        }
    })
})(jQuery);
(function (a) {
    function c(a) {
        var c = a.changedTouches[0],
        g = "";
        switch (a.type) {
        case "touchstart":
            g = "mousedown";
            break;
        case "touchmove":
            g = "mousemove";
            break;
        case "touchend":
            g = "mouseup";
            break;
        default:
            return
        }
        var h = document.createEvent("MouseEvent");
        h.initMouseEvent(g, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null);
        c.target.dispatchEvent(h);
        a.preventDefault()
    }
    a.fn.left = function () {
        return parseInt(this.css("left"))
    };
    a.fn.noUiSlider = function (e, f) {
        function g(a) {
            var c = a.data("settings"),
            e = a.children(".noUi-lowerHandle"),
            f = a.children(".noUi-upperHandle"),
            g = a.children(".noUi-midBar");
            c.connect !== !1 && (e && (f ? g.css("left", e.left()) : c.connect == "lower" ? g.css("right", a.innerWidth() - e.left()) : g.css({
                        left : e.left(),
                        right : 0
                    })), f && (e ? g.css("right", a.innerWidth() - f.left()) : c.connect == "lower" ? g.css("right", a.innerWidth() - f.left()) : g.css({
                        left : f.left(),
                        right : 0
                    })));
            g = [];
            g[0] = e ? i(c.scale[0], c.scale[1], e.left(), a.innerWidth()) : !1;
            g[1] = f ? i(c.scale[0], c.scale[1], f.left(), a.innerWidth()) : !1;
            a.data("values",
                g)
        }
        function h(a, c, e, f) {
            a < 0 ? (e += a * -1, c += a * -1) : (e -= a, c -= a);
            return e * f / c
        }
        function i(a, c, e, f) {
            a < 0 ? c += a * -1 : c -= a;
            return e * c / f + a
        }
        var k = {
            knobs : 2,
            connect : !0,
            scale : [0, 100],
            start : [25, 75],
            to : 0,
            knob : 0,
            change : "",
            end : "",
            step : !1,
            save : !1
        },
        m = {
            init : function () {
                return this.each(function () {
                    var e = a(this),
                    f = k;
                    e.data("settings", f);
                    var i = a('<div class="noUi-handle noUi-lowerHandle"><div></div></div>'),
                    m = a('<div class="noUi-handle noUi-upperHandle"><div></div></div>'),
                    n = a('<div class="noUi-midBar"></div>'),
                    E = !1;
                    f.knobs === 1 ?
                    f.connect === !0 || f.connect === "lower" ? (i = !1, m = m.appendTo(e), n = n.insertBefore(m), E = m) : (f.connect === "upper" ? (i = i.appendTo(e), n = n.insertAfter(i)) : (i = i.appendTo(e), n = !1), m = !1, E = i) : (E = i.add(m).appendTo(e), i = E.filter(".noUi-lowerHandle"), m = E.filter(".noUi-upperHandle"), n = f.connect === !0 ? n.insertAfter(i) : !1);
                    e.data("knobs", E).css("position", "relative").children().css("position", "absolute");
                    n && n.css({
                        left : 0,
                        right : 0
                    });
                    E.each(function (g) {
                        a(this).css({
                            left : h(f.scale[0], f.scale[1], f.start[g], e.innerWidth()),
                            zIndex : g +
                            1
                        });
                        document.addEventListener && (this.addEventListener("touchstart", c, !0), this.addEventListener("touchmove", c, !0), this.addEventListener("touchend", c, !0), this.addEventListener("touchcancel", c, !0))
                    });
                    g(e);
                    E.children().bind("mousedown.noUiSlider", function (c) {
                        var k = a(this).parent();
                        a(this).addClass("noUi-activeHandle");
                        c.preventDefault();
                        a("body").bind("selectstart.noUiSlider", function () {
                            return !1
                        });
                        a(document).bind("mousemove.noUiSlider", function (a) {
                            var a = a.pageX - Math.round(e.offset().left),
                            c = k.left(),
                            n = !1;
                            k.hasClass("noUi-upperHandle") && i && a < i.left() && (a = i.left(), n = !0);
                            k.hasClass("noUi-lowerHandle") && m && a > m.left() && (a = m.left(), n = !0);
                            a > e.innerWidth() ? (a = e.innerWidth(), n = !0) : a < 0 && (a = 0, n = !0);
                            f.step && !n ? Math.abs(c - a) >= h(f.scale[0], f.scale[1], f.step, e.innerWidth()) && (n = !0) : n = !0;
                            c == a && (n = !1);
                            n && (k.css("left", a), (k.hasClass("noUi-upperHandle") && k.left() == 0 || k.hasClass("noUi-lowerHandle") && k.left() == e.innerWidth()) && k.css("zIndex", parseInt(k.css("zIndex")) + 2), g(e), typeof f.change == "function" && f.change.call(e,
                                    "slide"))
                        });
                        a(document).bind("mouseup.noUiSlider", function () {
                            a(".noUi-activeHandle").removeClass("noUi-activeHandle");
                            a(document).unbind("mousemove.noUiSlider").unbind("mouseup.noUiSlider");
                            a("body").unbind("selectstart.noUiSlider");
                            typeof f.end == "function" && f.end.call(e, "slide")
                        })
                    });
                    e.click(function (a) {
                        i && m ? (a = a.pageX - e.offset().left, a < (i.left() + m.left()) / 2 ? i.css("left", a) : m.css("left", a)) : E.css("left", a.pageX - e.offset().left);
                        g(e);
                        typeof f.change == "function" && f.change.call(e, "click");
                        typeof f.end ==
                        "function" && f.end.call(e, "click")
                    }).find("*:not(.noUi-midBar)").click(function () {
                        return !1
                    })
                })
            },
            move : function () {
                var c = a(this),
                e = c.data("settings"),
                f = c.data("knobs"),
                i = f.filter(".noUi-lowerHandle"),
                f = f.filter(".noUi-upperHandle"),
                m = k;
                if (m.scale)
                    e.scale = m.scale, m.save && c.data("settings", e);
                var n = h(e.scale[0], e.scale[1], m.to, c.innerWidth()),
                G;
                if (m.knob === "upper" || m.knob == 1)
                    i && n < i.left() && (n = i.left()), G = f;
                else if (m.knob === "lower" || m.knob == 0)
                    f && n > f.left() && (n = f.left()), G = i;
                n > c.innerWidth() ? n = c.innerWidth() :
                    n < 0 && (n = 0);
                G.css("left", n);
                (G.hasClass("noUi-upperHandle") && G.left() == 0 || G.hasClass("noUi-lowerHandle") && G.left() == c.innerWidth()) && G.css("zIndex", parseInt(G.css("zIndex")) + 2);
                g(c);
                typeof e.change == "function" && e.change.call(c, "move");
                typeof e.end == "function" && e.end.call(c, "move")
            },
            value : function () {
                var c = a(this),
                e = c.data("settings"),
                f = n,
                g = c.data("values");
                if (typeof f != "undefined" && typeof f.scale != "undefined" && !(f.scale[0] == e.scale[0] && f.scale[1] == e.scale[1]) && (g[0] && (g[0] = h(f.scale[0], f.scale[1], i(e.scale[0],
                                        e.scale[1], g[0], c.innerWidth()), c.innerWidth())), g[1] && (g[1] = h(f.scale[0], f.scale[1], i(e.scale[0], e.scale[1], g[1], c.innerWidth()), c.innerWidth())), f.save))
                    e.scale = f.scale, c.data("settings", e), a(this).data("values", g);
                c = e.scale[1] - e.scale[0];
                f = function (a, c) {
                    var f = a - e.scale[0],
                    f = Math.round(f / c);
                    f *= c;
                    f += e.scale[0];
                    return f
                };
                g[0] && (g[0] = f(g[0], e.step, c));
                g[1] && (g[1] = f(g[1], e.step, c));
                return g
            }
        },
        n = f,
        f = a.extend(k, f);
        if (m[e])
            return m[e].apply(this, Array.prototype.slice.call(arguments, 1));
        else if (typeof e ===
            "object" || !e)
            return m.init.apply(this, arguments);
        else
            a.error("No such method: " + e)
    }
})(jQuery);
var selectText = function (a) {
    var c = document,
    a = $(a)[0];
    if (c.body.createTextRange)
        c = c.body.createTextRange(), c.moveToElementText(a), c.select();
    else if (window.getSelection) {
        var e = window.getSelection(),
        c = c.createRange();
        c.selectNodeContents(a);
        e.removeAllRanges();
        e.addRange(c)
    }
}, setupSearchBar = function () {
    $("#home-search").keypress(function (a) {
        if (a.which === 13 && this.value.length > 0)
            window.location.pathname = "/search/" + this.value, a.preventDefault()
    });
    $("#main-header").find("input").keypress(function (a) {
        if (a.which ===
            13 && this.value.length > 0)
            window.location.pathname = "/search/" + this.value
    });
    window.location.pathname.search("/search/") !== -1 && $(".js-search-bar").val(window.location.pathname.split("/").pop())
}, initSearchBar = setupSearchBar, showViewer = function () {
    $("html").removeClass("main").addClass("viewer");
    $("body").removeClass("upload main");
    $("#viewport").show();
    $("#view-frame").hide();
    $("#content").fadeOut(400);
    setTimeout(function () {
        var a = $("#edit-scroll");
        a.length && (settings = {
                autoReinitialise : !0
            }, a.jScrollPane(settings))
    },
        1E3);
    initViewerHUDControls()
}, removeLoading = function () {
    setTimeout(function () {
        $("#view-frame").fadeIn(500)
    }, 500);
    $("body").removeClass("loading")
}, getHostname = function () {
    var a = document.URL.split("/");
    return a[0] + "//" + a[2]
}, getThumbnail = function () {
    var a = document.URL,
    a = a.replace(/\/iframe\//g, "/v1/models/"),
    a = a.replace(/\/embed\//g, "/v1/models/"),
    a = a.replace(/\/show\//g, "/v1/models/");
    $.ajax({
        url : a,
        success : function (a) {
            var e = a.result.thumbnail,
            a = a.result.thumbnails;
            console.log(a);
            var f = [448, 640, 854, 1024],
            g = window.innerWidth,
            h = window.innerHeight;
            if (g / h >= 1.6)
                for (h = 0; h < f.length; h++) {
                    var i = f[h].toString(),
                    i = a[i];
                    i !== void 0 && (e = i);
                    if (g < f[h])
                        break
                }
            else
                for (var g = [280, 400, 533.75, 640], k = 0; k < f.length; k++)
                    if (i = f[k].toString(), i = a[i], i !== void 0 && (e = i), h < g[k])
                        break;
            return thumbnail = e
        },
        async : !1
    });
    return thumbnail
}, checkWebGL = function () {
    var a = 0;
    if (window.WebGLRenderingContext) {
        var c = document.createElement("canvas");
        try {
            var e = c.getContext("webgl") || c.getContext("experimental-webgl")
        } catch (f) {
            console.log("Your browser seems to support WebGL but sadly your graphic card is not powerfull enough."),
            console.log("Error: " + f)
        }
        e == void 0 && (a = 2)
    } else
        a = 1;
    return a
}, errorNoWebGL = function (a) {
    $("body").append('<div id="errorNoWebGL"><div class="help"><a class="logo" href="http://sketchfab.com" title="Sketchfab"></a><div class="help-info"><h2>It\'s time to upgrade!</h2><p class="help-desc">You are trying to see a 3D model from <a href="http://sketchfab.com" title="Sketchfab">sketchfab.com</a> but your browser doesn\'t appear to support WebGL :( <br />Download the last version of <a href="http://www.mozilla.org/firefox" title="Get Firefox">Firefox</a>, <a href="https://www.google.com/chrome" title="Get Chrome">Chrome</a> or <a href="http://www.google.com/chromeframe" title="Get Google Chrome Frame">Google Chrome Frame for IE</a>.<br />If you are already using one of these browsers, the problem may come from your graphic card.</p><p id="help-icons"><a href="http://www.mozilla.org/firefox" title="Get Firefox"><img src="/img/firefox.png" alt="Get Firefox"></a><a href="https://www.google.com/chrome" title="Get Chrome"><img src="/img/chrome.png" alt="Get Chrome" /></a><a href="https://www.google.com/chromeframe" title="Get Google Chrome Frame"><img src="/img/chromeframe.png" alt="Get Google Chrome Frame" /></a></div><div class="help-info-graphics"><h2>That\'s too bad :(</h2><p class="help-desc">While your browser seems to support WebGL, it is disabled or unavailable.<br />If possible, please ensure that you are running the latest drivers for your video card.</p></div></div></div>');
    a == 2 && ($("#errorNoWebGL .help-info").hide(), $("#errorNoWebGL .help-info-graphics").show());
    $("#errorNoWebGL").show().css({
        background : "url(" + getThumbnail() + ") no-repeat center, rgba(0,0,0,0.8)",
        "background-size" : "cover"
    });
    $("#loading, #viewport").hide();
    $("body").css({
        margin : "0",
        padding : "0",
        width : "100%",
        height : window.innerHeight + "px"
    })
}, setControlDim = function () {
    var a = 28,
    c = 290;
    $(".viewer-hud-controls.viewer-hud-embed").length !== 0 && (a = 35, c = 360);
    window.innerWidth < 460 ? (window.innerWidth > c && (a = window.innerWidth /
                10.22, top = "-" + window.innerWidth / 10.22), $(".js-viewer-hud-controls").css({
            height : a + "px",
            top : "-" + a + "px"
        }), $(".viewer-hud-controls li").css({
            height : a + "px"
        })) : ($(".js-viewer-hud-controls").css({
            height : "44px",
            top : "-44px"
        }), $(".viewer-hud-controls li").css({
            height : "44px"
        }))
};
$(function () {
    var a,
    c = (new Date).getTime();
    $("#3DView").bind({
        mousedown : function (e) {
            (new Date).getTime() - c < 3E3 && e.preventDefault();
            clearTimeout(a);
            toggleAutospin("stop")
        },
        mouseup : function () {
            a = setTimeout(function () {
                    toggleAutospin("start")
                }, 3E3)
        }
    });
    setControlDim();
    $(window).resize(function () {
        setControlDim()
    })
});
var initHud = function () {
    var a;
    $("body");
    var c = function () {
        var c = $(".js-edit"),
        f = $("#viewport").height();
        c.css("height", f - 50);
        a && $("#edit-scroll").data("jsp").reinitialise()
    };
    $(window).resize(function () {
        c()
    });
    $(".pretty-date").text(humane_date($(".pretty-date").text().split(/\./)[0]));
    $("#model-name").keyup(function () {
        var a = $(this).val();
        $(".js-hud-model-name").html(a)
    });
    $("#model-desc").keyup(function () {
        var a = $(this).val();
        $(".js-hud-description").html(a)
    });
    c();
    $("#edit-scroll").length > 0 && setTimeout(function () {
        settings = {
            autoReinitialise : !0
        };
        a = $("#edit-scroll").jScrollPane(settings)
    }, 1E3);
    $(".js-hud-toggleDescription").click(function () {
        $(".js-hud-description").toggleClass("visible")
    });
    $("#calibration div.axis").click(function () {
        var a = $(this),
        c = $("#calibration div.axis").not(a);
        a.hasClass("selected") ? (a.removeClass("selected"), $("#calibration div.axis").last().addClass("selected"), a.hasClass("rotate0") ? a.removeClass().addClass("axis selected rotate1") : a.hasClass("rotate1") ? a.removeClass().addClass("axis selected rotate2") :
            a.hasClass("rotate2") && a.removeClass().addClass("axis"), $("#calibration div.axis").last().addClass("selected")) : (c.removeClass().addClass("axis"), a.addClass("selected rotate0"))
    })
}, initViewerHUDControls = function () {
    var a;
    $(".viewer-hud-popup-wrapper").click(function (a) {
        $(a.target).hasClass("viewer-hud-popup-wrapper") && ($(this).fadeOut("fast"), $(".js-viewer-hud-help-button").removeClass("viewer-hud-active"))
    });
    $(".js-viewer-hud-first-person-button").click(function () {
        $(this).toggleClass("viewer-hud-active");
        editToogleNavigation();
        $("#3DView").focus()
    });
    $(".js-viewer-hud-fullscreen-button").click(function () {
        $(".js-viewer-hud-fullscreen-button").toggleClass("viewer-hud-active")
    });
    $(".js-viewer-hud-share-button").mouseenter(function () {
        $(".js-viewer-hud-sharing").addClass("viewer-hud-active");
        a && clearInterval(a)
    });
    $(".js-viewer-hud-comment-button").click(function () {
        $("#disqus_thread, .disqus-thread-arrow").toggleClass("viewer-hud-active");
        $(this).toggleClass("viewer-hud-active");
        $(this).find(".viewer-hud-tooltip").toggle()
    });
    $(function () {
        window.setTimeout(function () {
            document.URL.search("#comment") !== -1 && ($("#disqus_thread, .disqus-thread-arrow").addClass("viewer-hud-active"), $(".js-viewer-hud-comment-button").find(".viewer-hud-tooltip").toggle())
        }, 1400)
    });
    $(".js-viewer-hud-controls").find("li").not(".js-viewer-hud-share-button").mouseenter(function () {
        $(".js-viewer-hud-sharing").removeClass("viewer-hud-active")
    });
    $(".js-viewer-hud-share-button").mouseleave(function () {
        a = setTimeout(function () {
                $(".js-viewer-hud-sharing").removeClass("viewer-hud-active")
            },
                500)
    });
    $(".js-viewer-hud-embed-button").click(function () {
        $(".viewer-hud-active").removeClass("viewer-hud-active");
        $(".js-viewer-hud-embed").fadeIn("fast");
        selectText($(".js-viewer-hud-embed-snippet"))
    });
    $(".js-viewer-hud-embed-popup code").click(function () {
        selectText($(this))
    });
    $(".js-viewer-hud-infos-button").mouseenter(function () {
        $(".js-viewer-hud-infos").addClass("viewer-hud-active")
    });
    $(".js-viewer-hud-infos").mouseleave(function () {
        $(this).removeClass("viewer-hud-active")
    });
    $(".js-viewer-hud-model-url").click(function () {
        $(this).select()
    });
    $(".js-viewer-hud-embed-snippet").click(function () {
        $(this).select()
    });
    $(".js-viewer-hud-help-button").click(function () {
        $(this).toggleClass("viewer-hud-active");
        $(".viewer-hud-active").removeClass("viewer-hud-active");
        $(".js-viewer-hud-help").is(":visible") ? $(".js-viewer-hud-help").fadeOut("fast") : $(".js-viewer-hud-help").fadeIn("fast");
        $(".viewer-hud-active").removeClass("viewer-hud-active")
    });
    $(".js-viewer-hud-like-button").click(function () {
        $likeButton = $(this);
        var a = $("#view-frame").attr("data-model"),
        e,
        f = "",
        g,
        h;
        $likeButton.hasClass("model-liked") ? (g = !0, h = "unlike") : (g = !1, h = "like");
        $.ajax({
            url : "/v1/models/" + a + "/" + h,
            type : "POST",
            success : function (a) {
                g === !0 ? $likeButton.removeClass("model-liked") : $likeButton.addClass("model-liked");
                e = a.result;
                e === "0" ? f = "Be the first to like!" : (f = e + " like", e > 1 && (f += "s"))
            },
            async : !1
        });
        $(".viewer-hud-like-button .viewer-hud-tooltip").text(f)
    });
    $(".js-viewer-hud-like-noauth-button").click(function () {
        var a = $("#view-frame").attr("data-model");
        window.open("/login?next=/show/" +
            a)
    });
    $(".js-viewer-hud-twitter").click(function () {
        var a = $(this).attr("href");
        tweetPopup(a);
        return !1
    });
    $(".js-viewer-hud-facebook").click(function () {
        var a = $(this).attr("href");
        fbPopup(a);
        return !1
    });
    fullscreen.install()
};
$("#file-input").hover(function () {
    $(this).parent("form").addClass("hover")
}, function () {
    $(this).parent("form").removeClass("hover")
});
$("#upload form .button").click(function () {
    $("#file-input").click()
});
$("#upload-trigger").click(function () {
    $("#file-input").click()
});
$("#file-input").change(function () {
    var a = $(this).val();
    $(this).prev("input").val(a)
});
$("input").focus(function () {
    if ($(this).parent("section").hasClass("awayRight") || $(this).parent("section").hasClass("awayLeft"))
        return !1
});
$("#main input").focus(function () {
    $(window)
});
$("#main input").keypress(function (a) {
    a.keyCode == "9" && a.preventDefault()
});
$(".confirm").keypress(function (a) {
    a.keyCode == "9" && a.preventDefault()
});
initSlides = function () {
    var a,
    c,
    e;
    $(".nextSlide").click(function () {
        a = $(this).parents("section");
        c = a.next("section");
        a.addClass("awayLeft");
        c.removeClass("awayRight")
    });
    $(".prevSlide").click(function () {
        a = $(this).parents("section");
        e = a.prev("section");
        a.addClass("awayRight");
        e.removeClass("awayLeft")
    });
    $(".resetSlides").click(function () {
        $("#container section").not("#main").removeClass("awayLeft").addClass("awayRight");
        $("#main").removeClass("awayLeft")
    });
    $("#upload-2 .button").click(function () {
        $("#container section").addClass("awayLeft");
        $("#tagline").fadeOut(500);
        $("#container").fadeOut(500);
        $("body").removeClass("home").addClass("loading")
    })
};
$(document).ready(function () {
    (x = checkWebGL()) !== 0 ? errorNoWebGL(x) : (initHud(), initSlides(), setupSearchBar(), main())
});
function humane_date(a) {
    var c = [[60, "just now"], [90, "1 minute"], [3600, "minutes", 60], [5400, "1 hour"], [86400, "hours", 3600], [129600, "1 day"], [604800, "days", 86400], [907200, "1 week"], [2628E3, "weeks", 604800], [3942E3, "1 month"], [31536E3, "months", 2628E3], [47304E3, "1 year"], [31536E5, "years", 31536E3], [47304E5, "1 century"]],
    e = ("" + a).replace(/-/g, "/").replace(/[TZ]/g, " "),
    f = new Date,
    e = (f - new Date(e) + f.getTimezoneOffset() * 6E4) / 1E3,
    f = " ago",
    g = 0,
    h;
    e < 0 && (e = Math.abs(e), f = "");
    for (; h = c[g++]; )
        if (e < h[0])
            return h.length ==
            2 ? h[1] + (g > 1 ? f : "") : Math.round(e / h[2]) + " " + h[1] + (g > 1 ? f : "");
    return e > 47304E5 ? Math.round(e / 47304E5) + " Centuries" + f : a
}
if (typeof jQuery != "undefined")
    jQuery.fn.humane_dates = function () {
        return this.each(function () {
            var a = humane_date(this.title);
            a && jQuery(this).text() != a && jQuery(this).text(a)
        })
    };
function tweetPopup(a) {
    var c = $(window).height(),
    e = $(window).width();
    newwindow = window.open(a, "name", "height=450,width=550,top=" + (c / 2 - 225) + ",left=" + (e / 2 - 275));
    window.focus && newwindow.focus()
}
function fbPopup(a) {
    var c = $(window).height(),
    e = $(window).width();
    newwindow = window.open(a, "name", "height=400,width=580,top=" + (c / 2 - 200) + ",left=" + (e / 2 - 290));
    window.focus && newwindow.focus()
}
(function (a) {
    typeof define === "function" ? define(a) : typeof exports === "object" ? a(void 0, exports) : a(void 0, fullscreen = {})
})(function (a, c) {
    c.install = function () {
        var a = $("body"),
        c = function () {
            a.addClass("viewer-hud-fullscreen");
            $("header").hide();
            $(".js-edit-button").hide();
            $(".js-viewer-hud-fullscreen-button").addClass("viewer-hud-active");
            a[0].webkitRequestFullScreen ? a[0].webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : a[0].mozRequestFullScreen && a[0].mozRequestFullScreen()
        },
        g = function () {
            document.webkitCancelFullScreen ?
            document.webkitCancelFullScreen() : document.mozCancelFullScreen && document.mozCancelFullScreen();
            a.removeClass("viewer-hud-fullscreen");
            $("header").show();
            $(".js-edit-button").show();
            $(".js-viewer-hud-fullscreen-button").removeClass("viewer-hud-active")
        };
        $(document).keyup(function (h) {
            a.hasClass("viewer") && !$(".edit input").is(":focus") && !$(".edit textarea").is(":focus") && !$("#main-header input").is(":focus") && (h.keyCode == 70 ? a.hasClass("viewer-hud-fullscreen") ? g() : c() : h.keyCode == 70 && g())
        });
        $(".js-viewer-hud-fullscreen-button").click(function () {
            a.hasClass("viewer-hud-fullscreen") ?
            g() : c()
        });
        document.addEventListener("fullscreenchange", function () {
            document.fullscreen || g();
            console.log("fullscreenchange " + document.fullscreen)
        }, !1);
        document.addEventListener("mozfullscreenchange", function () {
            document.mozFullScreen || g();
            console.log("mozfullscreenchange " + document.mozFullScreen)
        }, !1);
        document.addEventListener("webkitfullscreenchange", function (a) {
            console.log("webkitfullscreenchange " + document.webkitIsFullScreen);
            if (!document.webkitIsFullScreen)
                return g(), a.preventDefault(), !1
        }, !1);
        var h =
        function () {
            g()
        };
        document.addEventListener("fullscreenerror", h, !1);
        document.addEventListener("mozfullscreenerror", h, !1);
        document.addEventListener("webkitfullscreenerror", h, !1)
    }
});
var osg = {
    version : "0.1.0",
    copyright : "Cedric Pinson - cedric.pinson@plopbyte.com",
    log : function (a) {
        window.console !== void 0 && window.console.log(a)
    },
    info : function (a) {
        window.console !== void 0 && window.console.info(a)
    },
    warn : function (a) {
        window.console !== void 0 && window.console.warn(a)
    },
    debug : function (a) {
        window.console !== void 0 && window.console.debug(a)
    },
    DEBUG : 0,
    INFO : 1,
    NOTICE : 2,
    WARN : 3
};
osg.setNotifyLevel = function (a) {
    var c = function () {};
    osg.debug = c;
    osg.info = c;
    osg.log = c;
    osg.warn = c;
    if (a <= osg.DEBUG)
        osg.debug = function (a) {
            window.console !== void 0 && window.console.debug(a)
        };
    if (a <= osg.INFO)
        osg.info = function (a) {
            window.console !== void 0 && window.console.info(a)
        };
    if (a <= osg.NOTICE)
        osg.log = function (a) {
            window.console !== void 0 && window.console.log(a)
        };
    if (a <= osg.WARN)
        osg.warn = function (a) {
            window.console !== void 0 && window.console.warn(a)
        }
};
osg.reportWebGLError = !1;
osg.init = function () {
    osg.setNotifyLevel(osg.NOTICE)
};
osg.isArray = function (a) {
    return toString.call(a) === "[object Array]"
};
osg.extend = function () {
    var a = Object.prototype.toString,
    c = Object.prototype.hasOwnProperty,
    e = osg.isArray,
    f = function (e) {
        if (!e || a.call(e) !== "[object Object]" || e.nodeType || e.setInterval)
            return !1;
        if (e.constructor && !c.call(e, "constructor") && !c.call(e.constructor.prototype, "isPrototypeOf"))
            return !1;
        for (var f in e);
        return f === void 0 || c.call(e, f)
    },
    g = arguments[0] || {},
    h = 1,
    i = arguments.length,
    k = !1,
    m,
    n,
    p,
    s;
    typeof g === "boolean" && (k = g, g = arguments[1] || {}, h = 2);
    typeof g !== "object" && a.call(g) !== "[object Function]" && (g = {});
    i === h && (g = this, --h);
    for (; h < i; h++)
        if ((m = arguments[h]) !== null)
            for (n in m)
                p = g[n], s = m[n], g !== s && (k && s && (f(s) || e(s)) ? (p = p && (f(p) || e(p)) ? p : e(s) ? [] : {}, g[n] = osg.extend(k, p, s)) : s !== void 0 && (g[n] = s));
    return g
};
osg.objectInehrit = function (a, c) {
    function e() {}
    
    e.prototype = a;
    var f = new e;
    c && osg.objectMix(f, c, !1);
    return f
};
osg.objectMix = function (a, c, e) {
    for (var f in c)
        if (!e || !a[f])
            a[f] = c[f];
    return a
};
osg.objectType = {};
osg.objectType.type = 0;
osg.objectType.generate = function (a) {
    var c = osg.objectType.type;
    osg.objectType[c] = a;
    osg.objectType[a] = c;
    osg.objectType.type += 1;
    return c
};
osg.Float32Array = Float32Array;
osg.Int32Array = Int32Array;
osg.Uint16Array = Uint16Array;
osg.Vec2 = {
    copy : function (a, c) {
        c[0] = a[0];
        c[1] = a[1];
        return c
    },
    valid : function (a) {
        return isNaN(a[0]) ? !1 : isNaN(a[1]) ? !1 : !0
    },
    mult : function (a, c, e) {
        e[0] = a[0] * c;
        e[1] = a[1] * c;
        return e
    },
    length2 : function (a) {
        return a[0] * a[0] + a[1] * a[1]
    },
    length : function (a) {
        return Math.sqrt(a[0] * a[0] + a[1] * a[1])
    },
    distance : function (a, c) {
        var e = a[0] - c[0],
        f = a[1] - c[1];
        return Math.sqrt(e * e + f * f)
    },
    normalize : function (a, c) {
        var e = this.length2(a);
        e > 0 ? (e = 1 / Math.sqrt(e), c[0] = a[0] * e, c[1] = a[1] * e) : (c[0] = a[0], c[1] = a[1]);
        return c
    },
    dot : function (a, c) {
        return a[0] *
        c[0] + a[1] * c[1]
    },
    sub : function (a, c, e) {
        e[0] = a[0] - c[0];
        e[1] = a[1] - c[1];
        return e
    },
    add : function (a, c, e) {
        e[0] = a[0] + c[0];
        e[1] = a[1] + c[1];
        return e
    },
    neg : function (a, c) {
        c[0] = -a[0];
        c[1] = -a[1];
        return c
    },
    lerp : function (a, c, e, f) {
        var g = 1 - a;
        f[0] = c[0] * g + a * e[0];
        f[1] = c[1] * g + a * e[1];
        return f
    }
};
osg.Vec3 = {
    init : function (a) {
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        return a
    },
    copy : function (a, c) {
        c[0] = a[0];
        c[1] = a[1];
        c[2] = a[2];
        return c
    },
    cross : function (a, c, e) {
        var f = a[2] * c[0] - a[0] * c[2],
        g = a[0] * c[1] - a[1] * c[0];
        e[0] = a[1] * c[2] - a[2] * c[1];
        e[1] = f;
        e[2] = g;
        return e
    },
    valid : function (a) {
        return isNaN(a[0]) ? !1 : isNaN(a[1]) ? !1 : isNaN(a[2]) ? !1 : !0
    },
    mult : function (a, c, e) {
        e[0] = a[0] * c;
        e[1] = a[1] * c;
        e[2] = a[2] * c;
        return e
    },
    length2 : function (a) {
        return a[0] * a[0] + a[1] * a[1] + a[2] * a[2]
    },
    length : function (a) {
        return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2])
    },
    distance : function (a, c) {
        var e = a[0] - c[0],
        f = a[1] - c[1],
        g = a[2] - c[2];
        return Math.sqrt(e * e + f * f + g * g)
    },
    normalize : function (a, c) {
        var e = this.length2(a);
        e > 0 ? (e = 1 / Math.sqrt(e), c[0] = a[0] * e, c[1] = a[1] * e, c[2] = a[2] * e) : (c[0] = a[0], c[1] = a[1], c[2] = a[2]);
        return c
    },
    dot : function (a, c) {
        return a[0] * c[0] + a[1] * c[1] + a[2] * c[2]
    },
    sub : function (a, c, e) {
        e[0] = a[0] - c[0];
        e[1] = a[1] - c[1];
        e[2] = a[2] - c[2];
        return e
    },
    add : function (a, c, e) {
        e[0] = a[0] + c[0];
        e[1] = a[1] + c[1];
        e[2] = a[2] + c[2];
        return e
    },
    neg : function (a, c) {
        c[0] = -a[0];
        c[1] = -a[1];
        c[2] = -a[2];
        return c
    },
    lerp : function (a, c, e, f) {
        f[0] = c[0] + (e[0] - c[0]) * a;
        f[1] = c[1] + (e[1] - c[1]) * a;
        f[2] = c[2] + (e[2] - c[2]) * a;
        return f
    }
};
osg.Vec4 = {
    dot : function (a, c) {
        return a[0] * c[0] + a[1] * c[1] + a[2] * c[2] + a[3] * c[3]
    },
    copy : function (a, c) {
        c[0] = a[0];
        c[1] = a[1];
        c[2] = a[2];
        c[3] = a[3];
        return c
    },
    sub : function (a, c, e) {
        e[0] = a[0] - c[0];
        e[1] = a[1] - c[1];
        e[2] = a[2] - c[2];
        e[3] = a[3] - c[3];
        return e
    },
    mult : function (a, c) {
        r[0] = a[0] * c;
        r[1] = a[1] * c;
        r[2] = a[2] * c;
        r[3] = a[3] * c;
        return r
    },
    add : function (a, c, e) {
        e[0] = a[0] + c[0];
        e[1] = a[1] + c[1];
        e[2] = a[2] + c[2];
        e[3] = a[3] + c[3];
        return e
    },
    neg : function (a, c) {
        c[0] = -a[0];
        c[1] = -a[1];
        c[2] = -a[2];
        c[3] = -a[3];
        return c
    },
    lerp : function (a, c, e, f) {
        var g =
            1 - a;
        f[0] = c[0] * g + a * e[0];
        f[1] = c[1] * g + a * e[1];
        f[2] = c[2] * g + a * e[2];
        f[3] = c[3] * g + a * e[3];
        return f
    }
};
osg.Object = function () {
    this._userdata = this._name = void 0
};
osg.Object.prototype = {
    className : function () {
        return this._className
    },
    setName : function (a) {
        this._name = a
    },
    getName : function () {
        return this._name
    },
    setUserData : function (a) {
        this._userdata = a
    },
    getUserData : function () {
        return this._userdata
    }
};
osg.Matrix = {
    _tmp0 : [],
    _tmp1 : [],
    valid : function (a) {
        for (var c = 0; c < 16; c++)
            if (isNaN(a[c]))
                return !1;
        return !0
    },
    setRow : function (a, c, e, f, g, h) {
        c *= 4;
        a[c + 0] = e;
        a[c + 1] = f;
        a[c + 2] = g;
        a[c + 3] = h
    },
    innerProduct : function (a, c, e, f) {
        e *= 4;
        return a[e + 0] * c[0 + f] + a[e + 1] * c[4 + f] + a[e + 2] * c[8 + f] + a[e + 3] * c[12 + f]
    },
    set : function (a, c, e, f) {
        return a[c * 4 + e] = f
    },
    get : function (a, c, e) {
        return a[c * 4 + e]
    },
    makeIdentity : function (a) {
        a === void 0 && (a = [], osg.log("osg.Matrix.makeIdentity without matrix destination is deprecated"));
        osg.Matrix.setRow(a, 0, 1, 0, 0,
            0);
        osg.Matrix.setRow(a, 1, 0, 1, 0, 0);
        osg.Matrix.setRow(a, 2, 0, 0, 1, 0);
        osg.Matrix.setRow(a, 3, 0, 0, 0, 1);
        return a
    },
    makeTranslate : function (a, c, e, f) {
        f === void 0 && (f = []);
        osg.Matrix.setRow(f, 0, 1, 0, 0, 0);
        osg.Matrix.setRow(f, 1, 0, 1, 0, 0);
        osg.Matrix.setRow(f, 2, 0, 0, 1, 0);
        osg.Matrix.setRow(f, 3, a, c, e, 1);
        return f
    },
    setTrans : function (a, c, e, f) {
        a[12] = c;
        a[13] = e;
        a[14] = f;
        return a
    },
    getTrans : function (a, c) {
        c[0] = a[12];
        c[1] = a[13];
        c[2] = a[14];
        return c
    },
    preMult : function (a, c) {
        var e,
        f,
        g,
        h;
        e = c[0] * a[0] + c[1] * a[4] + c[2] * a[8] + c[3] * a[12];
        f = c[4] *
            a[0] + c[5] * a[4] + c[6] * a[8] + c[7] * a[12];
        g = c[8] * a[0] + c[9] * a[4] + c[10] * a[8] + c[11] * a[12];
        h = c[12] * a[0] + c[13] * a[4] + c[14] * a[8] + c[15] * a[12];
        a[0] = e;
        a[4] = f;
        a[8] = g;
        a[12] = h;
        e = c[0] * a[1] + c[1] * a[5] + c[2] * a[9] + c[3] * a[13];
        f = c[4] * a[1] + c[5] * a[5] + c[6] * a[9] + c[7] * a[13];
        g = c[8] * a[1] + c[9] * a[5] + c[10] * a[9] + c[11] * a[13];
        h = c[12] * a[1] + c[13] * a[5] + c[14] * a[9] + c[15] * a[13];
        a[1] = e;
        a[5] = f;
        a[9] = g;
        a[13] = h;
        e = c[0] * a[2] + c[1] * a[6] + c[2] * a[10] + c[3] * a[14];
        f = c[4] * a[2] + c[5] * a[6] + c[6] * a[10] + c[7] * a[14];
        g = c[8] * a[2] + c[9] * a[6] + c[10] * a[10] + c[11] * a[14];
        h = c[12] *
            a[2] + c[13] * a[6] + c[14] * a[10] + c[15] * a[14];
        a[2] = e;
        a[6] = f;
        a[10] = g;
        a[14] = h;
        e = c[0] * a[3] + c[1] * a[7] + c[2] * a[11] + c[3] * a[15];
        f = c[4] * a[3] + c[5] * a[7] + c[6] * a[11] + c[7] * a[15];
        g = c[8] * a[3] + c[9] * a[7] + c[10] * a[11] + c[11] * a[15];
        h = c[12] * a[3] + c[13] * a[7] + c[14] * a[11] + c[15] * a[15];
        a[3] = e;
        a[7] = f;
        a[11] = g;
        a[15] = h;
        return a
    },
    postMult : function (a, c) {
        btmp0 = c[0] * a[0] + c[1] * a[4] + c[2] * a[8] + c[3] * a[12];
        btmp1 = c[0] * a[1] + c[1] * a[5] + c[2] * a[9] + c[3] * a[13];
        btmp2 = c[0] * a[2] + c[1] * a[6] + c[2] * a[10] + c[3] * a[14];
        btmp3 = c[0] * a[3] + c[1] * a[7] + c[2] * a[11] + c[3] * a[15];
        c[0] = btmp0;
        c[1] = btmp1;
        c[2] = btmp2;
        c[3] = btmp3;
        btmp0 = c[4] * a[0] + c[5] * a[4] + c[6] * a[8] + c[7] * a[12];
        btmp1 = c[4] * a[1] + c[5] * a[5] + c[6] * a[9] + c[7] * a[13];
        btmp2 = c[4] * a[2] + c[5] * a[6] + c[6] * a[10] + c[7] * a[14];
        btmp3 = c[4] * a[3] + c[5] * a[7] + c[6] * a[11] + c[7] * a[15];
        c[4] = btmp0;
        c[5] = btmp1;
        c[6] = btmp2;
        c[7] = btmp3;
        btmp0 = c[8] * a[0] + c[9] * a[4] + c[10] * a[8] + c[11] * a[12];
        btmp1 = c[8] * a[1] + c[9] * a[5] + c[10] * a[9] + c[11] * a[13];
        btmp2 = c[8] * a[2] + c[9] * a[6] + c[10] * a[10] + c[11] * a[14];
        btmp3 = c[8] * a[3] + c[9] * a[7] + c[10] * a[11] + c[11] * a[15];
        c[8] = btmp0;
        c[9] = btmp1;
        c[10] =
            btmp2;
        c[11] = btmp3;
        btmp0 = c[12] * a[0] + c[13] * a[4] + c[14] * a[8] + c[15] * a[12];
        btmp1 = c[12] * a[1] + c[13] * a[5] + c[14] * a[9] + c[15] * a[13];
        btmp2 = c[12] * a[2] + c[13] * a[6] + c[14] * a[10] + c[15] * a[14];
        btmp3 = c[12] * a[3] + c[13] * a[7] + c[14] * a[11] + c[15] * a[15];
        c[12] = btmp0;
        c[13] = btmp1;
        c[14] = btmp2;
        c[15] = btmp3;
        return c
    },
    multa : function (a, c, e) {
        return e === a ? this.preMult(a, c) : e === c ? this.postMult(a, c) : (e === void 0 && (e = []), e[0] = c[0] * a[0] + c[1] * a[4] + c[2] * a[8] + c[3] * a[12], e[1] = c[0] * a[1] + c[1] * a[5] + c[2] * a[9] + c[3] * a[13], e[2] = c[0] * a[2] + c[1] * a[6] + c[2] *
                a[10] + c[3] * a[14], e[3] = c[0] * a[3] + c[1] * a[7] + c[2] * a[11] + c[3] * a[15], e[4] = c[4] * a[0] + c[5] * a[4] + c[6] * a[8] + c[7] * a[12], e[5] = c[4] * a[1] + c[5] * a[5] + c[6] * a[9] + c[7] * a[13], e[6] = c[4] * a[2] + c[5] * a[6] + c[6] * a[10] + c[7] * a[14], e[7] = c[4] * a[3] + c[5] * a[7] + c[6] * a[11] + c[7] * a[15], e[8] = c[8] * a[0] + c[9] * a[4] + c[10] * a[8] + c[11] * a[12], e[9] = c[8] * a[1] + c[9] * a[5] + c[10] * a[9] + c[11] * a[13], e[10] = c[8] * a[2] + c[9] * a[6] + c[10] * a[10] + c[11] * a[14], e[11] = c[8] * a[3] + c[9] * a[7] + c[10] * a[11] + c[11] * a[15], e[12] = c[12] * a[0] + c[13] * a[4] + c[14] * a[8] + c[15] * a[12], e[13] =
                c[12] * a[1] + c[13] * a[5] + c[14] * a[9] + c[15] * a[13], e[14] = c[12] * a[2] + c[13] * a[6] + c[14] * a[10] + c[15] * a[14], e[15] = c[12] * a[3] + c[13] * a[7] + c[14] * a[11] + c[15] * a[15], e)
    },
    mult : function (a, c, e) {
        var f = c[0],
        g = c[1],
        h = c[2],
        i = c[3],
        k = c[4],
        m = c[5],
        n = c[6],
        p = c[7],
        s = c[8],
        q = c[9],
        w = c[10],
        y = c[11],
        E = c[12],
        G = c[13],
        O = c[14],
        c = c[15],
        F = a[0],
        R = a[1],
        I = a[2],
        N = a[3],
        A = a[4],
        M = a[5],
        J = a[6],
        K = a[7],
        D = a[8],
        u = a[9],
        S = a[10],
        L = a[11],
        j = a[12],
        v = a[13],
        B = a[14],
        a = a[15];
        e[0] = f * F + g * A + h * D + i * j;
        e[1] = f * R + g * M + h * u + i * v;
        e[2] = f * I + g * J + h * S + i * B;
        e[3] = f * N + g * K + h * L + i * a;
        e[4] =
            k * F + m * A + n * D + p * j;
        e[5] = k * R + m * M + n * u + p * v;
        e[6] = k * I + m * J + n * S + p * B;
        e[7] = k * N + m * K + n * L + p * a;
        e[8] = s * F + q * A + w * D + y * j;
        e[9] = s * R + q * M + w * u + y * v;
        e[10] = s * I + q * J + w * S + y * B;
        e[11] = s * N + q * K + w * L + y * a;
        e[12] = E * F + G * A + O * D + c * j;
        e[13] = E * R + G * M + O * u + c * v;
        e[14] = E * I + G * J + O * S + c * B;
        e[15] = E * N + G * K + O * L + c * a;
        return e
    },
    multOrig : function (a, c, e) {
        if (e === a) {
            for (var e = [], f = 0; f < 4; f++)
                e[0] = osg.Matrix.innerProduct(c, a, 0, f), e[1] = osg.Matrix.innerProduct(c, a, 1, f), e[2] = osg.Matrix.innerProduct(c, a, 2, f), e[3] = osg.Matrix.innerProduct(c, a, 3, f), a[0 + f] = e[0], a[4 + f] = e[1], a[8 +
                    f] = e[2], a[12 + f] = e[3];
            return a
        } else if (e === c) {
            e = [];
            for (f = 0; f < 4; f++)
                e[0] = osg.Matrix.innerProduct(c, a, f, 0), e[1] = osg.Matrix.innerProduct(c, a, f, 1), e[2] = osg.Matrix.innerProduct(c, a, f, 2), e[3] = osg.Matrix.innerProduct(c, a, f, 3), this.setRow(c, f, e[0], e[1], e[2], e[3]);
            return c
        }
        e === void 0 && (e = []);
        var f = c[0],
        g = c[1],
        h = c[2],
        i = c[3],
        k = c[4],
        m = c[5],
        n = c[6],
        p = c[7],
        s = c[8],
        q = c[9],
        w = c[10],
        y = c[11],
        E = c[12],
        G = c[13],
        O = c[14],
        c = c[15],
        F = a[0],
        R = a[1],
        I = a[2],
        N = a[3],
        A = a[4],
        M = a[5],
        J = a[6],
        K = a[7],
        D = a[8],
        u = a[9],
        S = a[10],
        L = a[11],
        j = a[12],
        v =
            a[13],
        B = a[14],
        a = a[15];
        e[0] = f * F + g * A + h * D + i * j;
        e[1] = f * R + g * M + h * u + i * v;
        e[2] = f * I + g * J + h * S + i * B;
        e[3] = f * N + g * K + h * L + i * a;
        e[4] = k * F + m * A + n * D + p * j;
        e[5] = k * R + m * M + n * u + p * v;
        e[6] = k * I + m * J + n * S + p * B;
        e[7] = k * N + m * K + n * L + p * a;
        e[8] = s * F + q * A + w * D + y * j;
        e[9] = s * R + q * M + w * u + y * v;
        e[10] = s * I + q * J + w * S + y * B;
        e[11] = s * N + q * K + w * L + y * a;
        e[12] = E * F + G * A + O * D + c * j;
        e[13] = E * R + G * M + O * u + c * v;
        e[14] = E * I + G * J + O * S + c * B;
        e[15] = E * N + G * K + O * L + c * a;
        return e
    },
    makeLookAt : function (a, c, e, f) {
        f === void 0 && (f = []);
        c = osg.Vec3.sub(c, a, []);
        osg.Vec3.normalize(c, c);
        e = osg.Vec3.cross(c, e, []);
        osg.Vec3.normalize(e,
            e);
        var g = osg.Vec3.cross(e, c, []);
        osg.Vec3.normalize(g, g);
        f[0] = e[0];
        f[1] = g[0];
        f[2] = -c[0];
        f[3] = 0;
        f[4] = e[1];
        f[5] = g[1];
        f[6] = -c[1];
        f[7] = 0;
        f[8] = e[2];
        f[9] = g[2];
        f[10] = -c[2];
        f[11] = 0;
        f[12] = 0;
        f[13] = 0;
        f[14] = 0;
        f[15] = 1;
        osg.Matrix.multTranslate(f, osg.Vec3.neg(a, []), f);
        return f
    },
    makeOrtho : function (a, c, e, f, g, h, i) {
        i === void 0 && (i = []);
        var k =  - (c + a) / (c - a),
        m =  - (f + e) / (f - e),
        n =  - (h + g) / (h - g),
        p = osg.Matrix.setRow;
        p(i, 0, 2 / (c - a), 0, 0, 0);
        p(i, 1, 0, 2 / (f - e), 0, 0);
        p(i, 2, 0, 0, -2 / (h - g), 0);
        p(i, 3, k, m, n, 1);
        return i
    },
    getLookAt : function (a, c, e, f,
        g) {
        g === void 0 && (g = 1);
        var h = [];
        osg.Matrix.inverse(a, h) || osg.Matrix.makeIdentity(h);
        osg.Matrix.transformVec3(h, [0, 0, 0], c);
        osg.Matrix.transform3x3(a, [0, 1, 0], f);
        osg.Matrix.transform3x3(a, [0, 0, -1], e);
        osg.Vec3.normalize(e, e);
        osg.Vec3.add(osg.Vec3.mult(e, g, []), c, e)
    },
    getRotate : function (a, c) {
        c === void 0 && (c = []);
        var e;
        e = [];
        var f,
        g;
        f = a[0];
        g = a[5];
        var h = a[10];
        e[0] = 1 + f + g + h;
        e[1] = 1 + f - g - h;
        e[2] = 1 - f + g - h;
        e[3] = 1 - f - g + h;
        g = 0;
        for (f = 1; f < 4; f++)
            e[f] > e[g] && (g = f);
        g === 0 ? (c[3] = e[0], c[0] = a[6] - a[9], c[1] = a[8] - a[2], c[2] = a[1] - a[4]) : g ==
        1 ? (c[3] = a[6] - a[9], c[0] = e[1], c[1] = a[1] + a[4], c[2] = a[8] + a[2]) : g == 2 ? (c[3] = a[8] - a[2], c[0] = a[1] + a[4], c[1] = e[2], c[2] = a[6] + a[9]) : (c[3] = a[1] - a[4], c[0] = a[8] + a[2], c[1] = a[6] + a[9], c[2] = e[3]);
        e = Math.sqrt(0.25 / e[g]);
        c[3] *= e;
        c[0] *= e;
        c[1] *= e;
        c[2] *= e;
        return c
    },
    preMultTranslate : function (a, c) {
        c[0] !== 0 && (val = c[0], a[12] += val * a[0], a[13] += val * a[1], a[14] += val * a[2], a[15] += val * a[3]);
        c[1] !== 0 && (val = c[1], a[12] += val * a[4], a[13] += val * a[5], a[14] += val * a[6], a[15] += val * a[7]);
        c[2] !== 0 && (val = c[2], a[12] += val * a[8], a[13] += val * a[9], a[14] +=
            val * a[10], a[15] += val * a[11]);
        return a
    },
    multTranslate : function (a, c, e) {
        e === void 0 && (e = []);
        e !== a && osg.Matrix.copy(a, e);
        var f;
        c[0] !== 0 && (f = c[0], e[12] += f * a[0], e[13] += f * a[1], e[14] += f * a[2], e[15] += f * a[3]);
        c[1] !== 0 && (f = c[1], e[12] += f * a[4], e[13] += f * a[5], e[14] += f * a[6], e[15] += f * a[7]);
        c[2] !== 0 && (f = c[2], e[12] += f * a[8], e[13] += f * a[9], e[14] += f * a[10], e[15] += f * a[11]);
        return e
    },
    makeRotate : function (a, c, e, f, g) {
        g === void 0 && (osg.log("osg.makeRotate without given matrix destination is deprecated"), g = []);
        var h = Math.sqrt(c * c +
                e * e + f * f),
        i = Math.sin(a),
        a = Math.cos(a);
        if (h > 0) {
            var k,
            m,
            n,
            p,
            s,
            h = 1 / h;
            c *= h;
            e *= h;
            f *= h;
            h = c * e;
            k = e * f;
            m = f * c;
            n = c * i;
            p = e * i;
            i *= f;
            s = 1 - a;
            g[0] = s * c * c + a;
            g[1] = s * h - i;
            g[2] = s * m + p;
            g[3] = 0;
            g[4] = s * h + i;
            g[5] = s * e * e + a;
            g[6] = s * k - n;
            g[7] = 0;
            g[8] = s * m - p;
            g[9] = s * k + n;
            g[10] = s * f * f + a;
            g[11] = 0;
            g[12] = 0;
            g[13] = 0;
            g[14] = 0;
            g[15] = 1
        } else
            return osg.Matrix.makeIdentity(g);
        return g
    },
    transform3x3 : function (a, c, e) {
        e === void 0 && (e = []);
        e[0] = a[0] * c[0] + a[1] * c[1] + a[2] * c[2];
        e[1] = a[4] * c[0] + a[5] * c[1] + a[6] * c[2];
        e[2] = a[8] * c[0] + a[9] * c[1] + a[10] * c[2];
        return e
    },
    transformVec3 : function (a,
        c, e) {
        var f = 1 / (a[3] * c[0] + a[7] * c[1] + a[11] * c[2] + a[15]);
        e === void 0 && (osg.warn("deprecated, osg.Matrix.transformVec3 needs a third parameter as result"), e = []);
        var g;
        g = e === c ? [] : e;
        g[0] = (a[0] * c[0] + a[4] * c[1] + a[8] * c[2] + a[12]) * f;
        g[1] = (a[1] * c[0] + a[5] * c[1] + a[9] * c[2] + a[13]) * f;
        g[2] = (a[2] * c[0] + a[6] * c[1] + a[10] * c[2] + a[14]) * f;
        e === c && osg.Vec3.copy(g, e);
        return e
    },
    transformVec4 : function (a, c, e) {
        e === void 0 && (e = []);
        var f;
        f = e === c ? [] : e;
        f[0] = a[0] * c[0] + a[1] * c[1] + a[2] * c[2] + a[3] * c[3];
        f[1] = a[4] * c[0] + a[5] * c[1] + a[6] * c[2] + a[7] * c[3];
        f[2] = a[8] * c[0] + a[9] * c[1] + a[10] * c[2] + a[11] * c[3];
        f[3] = a[12] * c[0] + a[13] * c[1] + a[14] * c[2] + a[15] * c[3];
        e === c && osg.Vec4.copy(f, e);
        return e
    },
    copy : function (a, c) {
        c === void 0 && (c = []);
        c[0] = a[0];
        c[1] = a[1];
        c[2] = a[2];
        c[3] = a[3];
        c[4] = a[4];
        c[5] = a[5];
        c[6] = a[6];
        c[7] = a[7];
        c[8] = a[8];
        c[9] = a[9];
        c[10] = a[10];
        c[11] = a[11];
        c[12] = a[12];
        c[13] = a[13];
        c[14] = a[14];
        c[15] = a[15];
        return c
    },
    inverse : function (a, c) {
        if (c === a)
            osg.Matrix.copy(a, osg.Matrix._tmp1), a = osg.Matrix._tmp1;
        return a[3] === 0 && a[7] === 0 && a[11] === 0 && a[15] === 1 ? this.inverse4x3(a,
            c) : this.inverse4x4(a, c)
    },
    inverse4x4 : function (a, c) {
        var e = a[10] * a[15],
        f = a[14] * a[11],
        g = a[6] * a[15],
        h = a[14] * a[7],
        i = a[6] * a[11],
        k = a[10] * a[7],
        m = a[2] * a[15],
        n = a[14] * a[3],
        p = a[2] * a[11],
        s = a[10] * a[3],
        q = a[2] * a[7],
        w = a[6] * a[3],
        y = a[8] * a[13],
        E = a[12] * a[9],
        G = a[4] * a[13],
        O = a[12] * a[5],
        F = a[4] * a[9],
        R = a[8] * a[5],
        I = a[0] * a[13],
        N = a[12] * a[1],
        A = a[0] * a[9],
        M = a[8] * a[1],
        J = a[0] * a[5],
        K = a[4] * a[1],
        D = e * a[5] + h * a[9] + i * a[13] - (f * a[5] + g * a[9] + k * a[13]),
        u = f * a[1] + m * a[9] + s * a[13] - (e * a[1] + n * a[9] + p * a[13]),
        S = g * a[1] + n * a[5] + q * a[13] - (h * a[1] + m * a[5] + w * a[13]),
        L = k * a[1] + p * a[5] + w * a[9] - (i * a[1] + s * a[5] + q * a[9]),
        j = a[0] * D + a[4] * u + a[8] * S + a[12] * L;
        if (Math.abs(j) < 1.0E-5)
            return osg.log("Warning can't inverse matrix " + a), !1;
        var j = 1 / j,
        v = j * (f * a[4] + g * a[8] + k * a[12] - (e * a[4] + h * a[8] + i * a[12])),
        e = j * (e * a[0] + n * a[8] + p * a[12] - (f * a[0] + m * a[8] + s * a[12])),
        g = j * (h * a[0] + m * a[4] + w * a[12] - (g * a[0] + n * a[4] + q * a[12])),
        i = j * (i * a[0] + s * a[4] + q * a[8] - (k * a[0] + p * a[4] + w * a[8])),
        k = j * (y * a[7] + O * a[11] + F * a[15] - (E * a[7] + G * a[11] + R * a[15])),
        p = j * (E * a[3] + I * a[11] + M * a[15] - (y * a[3] + N * a[11] + A * a[15])),
        s = j * (G * a[3] + N * a[7] + J * a[15] -
                (O * a[3] + I * a[7] + K * a[15])),
        q = j * (R * a[3] + A * a[7] + K * a[11] - (F * a[3] + M * a[7] + J * a[11])),
        w = j * (G * a[10] + R * a[14] + E * a[6] - (F * a[14] + y * a[6] + O * a[10])),
        y = j * (A * a[14] + y * a[2] + N * a[10] - (I * a[10] + M * a[14] + E * a[2])),
        G = j * (I * a[6] + K * a[14] + O * a[2] - (J * a[14] + G * a[2] + N * a[6])),
        F = j * (J * a[10] + F * a[2] + M * a[6] - (A * a[6] + K * a[10] + R * a[2]));
        c[0] = j * D;
        c[1] = j * u;
        c[2] = j * S;
        c[3] = j * L;
        c[4] = v;
        c[5] = e;
        c[6] = g;
        c[7] = i;
        c[8] = k;
        c[9] = p;
        c[10] = s;
        c[11] = q;
        c[12] = w;
        c[13] = y;
        c[14] = G;
        c[15] = F;
        return !0
    },
    inverse4x3 : function (a, c) {
        var e = a[0],
        f = a[1],
        g = a[2],
        h = a[4],
        i = a[5],
        k = a[6],
        m = a[8],
        n = a[9],
        p = a[10];
        c[0] = i * p - k * n;
        c[1] = g * n - f * p;
        c[2] = f * k - g * i;
        var s = 1 / (e * c[0] + h * c[1] + m * c[2]);
        e *= s;
        h *= s;
        m *= s;
        c[0] *= s;
        c[1] *= s;
        c[2] *= s;
        c[3] = 0;
        c[4] = k * m - h * p;
        c[5] = e * p - g * m;
        c[6] = g * h - e * k;
        c[7] = 0;
        c[8] = h * n - i * m;
        c[9] = f * m - e * n;
        c[10] = e * i - f * h;
        c[11] = 0;
        c[15] = 1;
        e = a[15];
        f = e - 1;
        f * f > 1.0E-6 ? (f = osg.Matrix._tmp0, c[12] = c[13] = c[14] = 0, i = a[3], k = a[7], m = a[11], g = c[0] * i + c[1] * k + c[2] * m, h = c[4] * i + c[5] * k + c[6] * m, n = c[8] * i + c[9] * k + c[10] * m, i = a[12], k = a[13], m = a[14], e = 1 / (e - (i * g + k * h + m * n)), i *= e, k *= e, m *= e, f[0] = i * g + 1, f[1] = k * g, f[2] = m * g, f[3] = -g * e, f[4] = i * h, f[5] =
                k * h + 1, f[6] = m * h, f[7] = -h * e, f[8] = i * n, f[9] = k * n, f[10] = m * n + 1, f[11] = -n * e, f[12] = -i, f[13] = -k, f[14] = -m, f[15] = e, osg.Matrix.preMult(c, f)) : (i = a[12], k = a[13], m = a[14], c[12] =  - (i * c[0] + k * c[4] + m * c[8]), c[13] =  - (i * c[1] + k * c[5] + m * c[9]), c[14] =  - (i * c[2] + k * c[6] + m * c[10]));
        return !0
    },
    transpose : function (a, c) {
        if (a === c) {
            var e = a[1],
            f = a[2],
            g = a[3],
            h = a[6],
            i = a[7],
            k = a[11];
            a[1] = a[4];
            a[2] = a[8];
            a[3] = a[12];
            a[4] = e;
            a[6] = a[9];
            a[7] = a[13];
            a[8] = f;
            a[9] = h;
            a[11] = a[14];
            a[12] = g;
            a[13] = i;
            a[14] = k;
            return a
        } else
            return c[0] = a[0], c[1] = a[4], c[2] = a[8], c[3] = a[12],
            c[4] = a[1], c[5] = a[5], c[6] = a[9], c[7] = a[13], c[8] = a[2], c[9] = a[6], c[10] = a[10], c[11] = a[14], c[12] = a[3], c[13] = a[7], c[14] = a[11], c[15] = a[15], c
    },
    makePerspective : function (a, c, e, f, g) {
        g === void 0 && (g = []);
        var a = e * Math.tan(a * Math.PI / 360),
        h = -a;
        return osg.Matrix.makeFrustum(h * c, a * c, h, a, e, f, g)
    },
    makeScale : function (a, c, e, f) {
        f === void 0 && (f = []);
        this.setRow(f, 0, a, 0, 0, 0);
        this.setRow(f, 1, 0, c, 0, 0);
        this.setRow(f, 2, 0, 0, e, 0);
        this.setRow(f, 3, 0, 0, 0, 1);
        return f
    },
    computeFrustrumCornersVectors : function (a, c) {
        var e = 1 / a[0],
        f = 1 / a[5];
        c[0] =
            [-e, f, 1];
        c[1] = [-e, -f, 1];
        c[2] = [e, -f, 1];
        c[3] = [e, f, 1];
        return c
    },
    makeFrustum : function (a, c, e, f, g, h, i) {
        i === void 0 && (i = []);
        var k = 2 * g / (f - e),
        m = (c + a) / (c - a),
        e = (f + e) / (f - e),
        f =  - (h + g) / (h - g),
        h = -2 * h * g / (h - g);
        this.setRow(i, 0, 2 * g / (c - a), 0, 0, 0);
        this.setRow(i, 1, 0, k, 0, 0);
        this.setRow(i, 2, m, e, f, -1);
        this.setRow(i, 3, 0, 0, h, 0);
        return i
    },
    makeRotateFromQuat : function (a, c) {
        this.makeIdentity(c);
        return this.setRotateFromQuat(c, a)
    },
    setRotateFromQuat : function (a, c) {
        var e = osg.Quat.length2(c);
        if (Math.abs(e) <= Number.MIN_VALUE)
            a[0] = 0, a[1] =
                0, a[2] = 0, a[4] = 0, a[5] = 0, a[6] = 0, a[8] = 0, a[9] = 0, a[10] = 0;
        else {
            var e = e !== 1 ? 2 / e : 2,
            f,
            g,
            h,
            i,
            k,
            m,
            n,
            p;
            f = e * c[0];
            g = e * c[1];
            h = e * c[2];
            e = c[0] * f;
            m = c[0] * g;
            n = c[0] * h;
            i = c[1] * g;
            k = c[1] * h;
            p = c[2] * h;
            f *= c[3];
            g *= c[3];
            h *= c[3];
            a[0] = 1 - (i + p);
            a[4] = m - h;
            a[8] = n + g;
            a[1] = m + h;
            a[5] = 1 - (e + p);
            a[9] = k - f;
            a[2] = n - g;
            a[6] = k + f;
            a[10] = 1 - (e + i)
        }
        return a
    }
};
osg.ShaderGeneratorType = {
    VertexInit : 0,
    VertexFunction : 1,
    VertexMain : 2,
    VertexEnd : 3,
    FragmentInit : 5,
    FragmentFunction : 6,
    FragmentMain : 7,
    FragmentEnd : 8
};
osg.Shader = function (a, c) {
    this.type = a;
    this.setText(c)
};
osg.Shader.VERTEX_SHADER = 35633;
osg.Shader.FRAGMENT_SHADER = 35632;
osg.Shader.prototype = {
    setText : function (a) {
        this.text = a
    },
    getText : function () {
        return this.text
    },
    compile : function () {
        this.shader = gl.createShader(this.type);
        gl.shaderSource(this.shader, this.text);
        gl.compileShader(this.shader);
        if (!gl.getShaderParameter(this.shader, gl.COMPILE_STATUS) && !gl.isContextLost()) {
            osg.log("can't compile shader:\n" + this.text + "\n");
            for (var a = ("\n" + this.text).split("\n"), c = "\n", e = 0, f = a.length; e < f; ++e)
                c += e + " " + a[e] + "\n";
            osg.log(c);
            osg.log(gl.getShaderInfoLog(this.shader))
        }
    }
};
osg.Shader.create = function (a, c) {
    osg.log("osg.Shader.create is deprecated, use new osg.Shader with the same arguments instead");
    return new osg.Shader(a, c)
};
osg.StateAttribute = function () {
    osg.Object.call(this);
    this._dirty = !0
};
osg.StateAttribute.prototype = osg.objectInehrit(osg.Object.prototype, {
        isDirty : function () {
            return this._dirty
        },
        dirty : function () {
            this._dirty = !0
        },
        setDirty : function (a) {
            this._dirty = a
        }
    });
osg.StateAttribute.OFF = 0;
osg.StateAttribute.ON = 1;
osg.StateAttribute.OVERRIDE = 2;
osg.StateAttribute.PROTECTED = 4;
osg.StateAttribute.INHERIT = 8;
osg.Uniform = function () {
    this.transpose = !1;
    this._dirty = !0;
    this.name = "";
    this.type = void 0
};
osg.Uniform.isUniform = function (a) {
    return a.prototype === osg.Uniform.prototype ? !0 : !1
};
osg.Uniform.prototype = {
    getName : function () {
        return this.name
    },
    getType : function () {
        return this.type
    },
    get : function () {
        return this.data
    },
    set : function (a) {
        this.data = a;
        this.dirty()
    },
    dirty : function () {
        this._dirty = !0
    },
    apply : function (a) {
        if (this._dirty)
            this.update.call(this.glData, this.data), this._dirty = !1;
        this.glCall(a, this.glData)
    },
    applyMatrix : function (a) {
        if (this._dirty)
            this.update.call(this.glData, this.data), this._dirty = !1;
        this.glCall(a, this.transpose, this.glData)
    },
    update : function (a) {
        for (var c = 0, e = a.length; c <
            e; ++c)
            this[c] = a[c]
    },
    _updateArray : function (a) {
        for (var c = 0, e = a.length; c < e; ++c)
            this[c] = a[c]
    },
    _updateFloat1 : function (a) {
        this[0] = a[0]
    },
    _updateFloat2 : function (a) {
        this[0] = a[0];
        this[1] = a[1]
    },
    _updateFloat3 : function (a) {
        this[0] = a[0];
        this[1] = a[1];
        this[2] = a[2]
    },
    _updateFloat4 : function (a) {
        this[0] = a[0];
        this[1] = a[1];
        this[2] = a[2];
        this[3] = a[3]
    },
    _updateFloat9 : function (a) {
        this[0] = a[0];
        this[1] = a[1];
        this[2] = a[2];
        this[3] = a[3];
        this[4] = a[4];
        this[5] = a[5];
        this[6] = a[6];
        this[7] = a[7];
        this[8] = a[8]
    },
    _updateFloat16 : function (a) {
        this[0] =
            a[0];
        this[1] = a[1];
        this[2] = a[2];
        this[3] = a[3];
        this[4] = a[4];
        this[5] = a[5];
        this[6] = a[6];
        this[7] = a[7];
        this[8] = a[8];
        this[9] = a[9];
        this[10] = a[10];
        this[11] = a[11];
        this[12] = a[12];
        this[13] = a[13];
        this[14] = a[14];
        this[15] = a[15]
    }
};
osg.Uniform.createFloat1 = function (a, c) {
    var e = a,
    f = c;
    f === void 0 && (f = e, e = [0]);
    var g = new osg.Uniform;
    g.data = [e];
    g.glCall = function (a, c) {
        gl.uniform1fv(a, c)
    };
    g.glData = new osg.Float32Array(g.data);
    g.update = osg.Uniform.prototype._updateFloat1;
    g.set = function (a) {
        typeof a === "number" ? this.data[0] = a : this.data = a;
        this.dirty()
    };
    g.name = f;
    g.type = "float";
    return g
};
osg.Uniform.createFloat = osg.Uniform.createFloat1;
osg.Uniform.float = osg.Uniform.createFloat1;
osg.Uniform.createFloatArray = function (a, c) {
    var e = osg.Uniform.createFloat.call(this, a, c);
    e.update = osg.Uniform.prototype._updateArray;
    return e
};
osg.Uniform.createFloat2 = function (a, c) {
    var e = a,
    f = c;
    f === void 0 && (f = e, e = [0, 0]);
    var g = new osg.Uniform;
    g.data = e;
    g.glCall = function (a, c) {
        gl.uniform2fv(a, c)
    };
    g.glData = new osg.Float32Array(g.data);
    g.update = osg.Uniform.prototype._updateFloat2;
    g.name = f;
    g.type = "vec2";
    return g
};
osg.Uniform.vec2 = osg.Uniform.createFloat2;
osg.Uniform.createFloat2Array = function (a, c) {
    var e = osg.Uniform.createFloat2.call(this, a, c);
    e.update = osg.Uniform.prototype._updateArray;
    return e
};
osg.Uniform.createFloat3 = function (a, c) {
    var e = a,
    f = c;
    f === void 0 && (f = e, e = [0, 0, 0]);
    var g = new osg.Uniform;
    g.data = e;
    g.glCall = function (a, c) {
        gl.uniform3fv(a, c)
    };
    g.glData = new osg.Float32Array(g.data);
    g.update = osg.Uniform.prototype._updateFloat3;
    g.name = f;
    g.type = "vec3";
    return g
};
osg.Uniform.vec3 = osg.Uniform.createFloat3;
osg.Uniform.createFloat3Array = function (a, c) {
    var e = osg.Uniform.createFloat3.call(this, a, c);
    e.update = osg.Uniform.prototype._updateArray;
    return e
};
osg.Uniform.createFloat4 = function (a, c) {
    var e = a,
    f = c;
    f === void 0 && (f = e, e = [0, 0, 0, 0]);
    var g = new osg.Uniform;
    g.data = e;
    g.glCall = function (a, c) {
        gl.uniform4fv(a, c)
    };
    g.glData = new osg.Float32Array(g.data);
    g.update = osg.Uniform.prototype._updateFloat4;
    g.name = f;
    g.type = "vec4";
    return g
};
osg.Uniform.vec4 = osg.Uniform.createFloat4;
osg.Uniform.createFloat4Array = function (a, c) {
    var e = osg.Uniform.createFloat4.call(this, a, c);
    e.update = osg.Uniform.prototype._updateArray;
    return e
};
osg.Uniform.createInt1 = function (a, c) {
    var e = a,
    f = c;
    f === void 0 && (f = e, e = [0]);
    var g = new osg.Uniform;
    g.data = [e];
    g.glCall = function (a, c) {
        gl.uniform1iv(a, c)
    };
    g.set = function (a) {
        typeof a === "number" ? this.data[0] = a : this.data = a;
        this.dirty()
    };
    g.glData = new osg.Int32Array(g.data);
    g.name = f;
    g.type = "int";
    return g
};
osg.Uniform.int = osg.Uniform.createInt1;
osg.Uniform.createInt = osg.Uniform.createInt1;
osg.Uniform.createIntArray = function (a, c) {
    var e = osg.Uniform.createInt.call(this, a, c);
    e.update = osg.Uniform.prototype._updateArray;
    return e
};
osg.Uniform.createInt2 = function (a, c) {
    var e = a,
    f = c;
    f === void 0 && (f = e, e = [0, 0]);
    var g = new osg.Uniform;
    g.data = e;
    g.glCall = function (a, c) {
        gl.uniform2iv(a, c)
    };
    g.glData = new osg.Int32Array(g.data);
    g.name = f;
    g.type = "vec2i";
    return g
};
osg.Uniform.vec2i = osg.Uniform.createInt2;
osg.Uniform.createInt2Array = function (a, c) {
    var e = osg.Uniform.createInt2.call(this, a, c);
    e.update = osg.Uniform.prototype._updateArray;
    return e
};
osg.Uniform.createInt3 = function (a, c) {
    var e = a,
    f = c;
    f === void 0 && (f = e, e = [0, 0, 0]);
    var g = new osg.Uniform;
    g.data = e;
    g.glCall = function (a, c) {
        gl.uniform3iv(a, c)
    };
    g.glData = new osg.Int32Array(g.data);
    g.name = f;
    g.type = "vec3i";
    return g
};
osg.Uniform.vec3i = osg.Uniform.createInt3;
osg.Uniform.createInt3Array = function (a, c) {
    var e = osg.Uniform.createInt3.call(this, a, c);
    e.update = osg.Uniform.prototype._updateArray;
    return e
};
osg.Uniform.createInt4 = function (a, c) {
    var e = a,
    f = c;
    f === void 0 && (f = e, e = [0, 0, 0, 0]);
    var g = new osg.Uniform;
    g.data = e;
    g.glCall = function (a, c) {
        gl.uniform4iv(a, c)
    };
    g.glData = new osg.Int32Array(g.data);
    g.name = f;
    g.type = "vec4i";
    return g
};
osg.Uniform.vec4i = osg.Uniform.createInt4;
osg.Uniform.createInt4Array = function (a, c) {
    var e = osg.Uniform.createInt4.call(this, a, c);
    e.update = osg.Uniform.prototype._updateArray;
    return e
};
osg.Uniform.createMatrix2 = function (a, c) {
    var e = a,
    f = c;
    f === void 0 && (f = e, e = [1, 0, 0, 1]);
    var g = new osg.Uniform;
    g.data = e;
    g.glCall = function (a, c, e) {
        gl.uniformMatrix2fv(a, c, e)
    };
    g.apply = g.applyMatrix;
    g.transpose = !1;
    g.glData = new osg.Float32Array(g.data);
    g.update = osg.Uniform.prototype._updateFloat4;
    g.name = f;
    g.type = "mat2";
    return g
};
osg.Uniform.createMat2 = osg.Uniform.createMatrix2;
osg.Uniform.mat2 = osg.Uniform.createMat2;
osg.Uniform.createMatrix3 = function (a, c) {
    var e = a,
    f = c;
    f === void 0 && (f = e, e = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
    var g = new osg.Uniform;
    g.data = e;
    g.glCall = function (a, c, e) {
        gl.uniformMatrix3fv(a, c, e)
    };
    g.apply = g.applyMatrix;
    g.transpose = !1;
    g.glData = new osg.Float32Array(g.data);
    g.update = osg.Uniform.prototype._updateFloat9;
    g.name = f;
    g.type = "mat3";
    return g
};
osg.Uniform.createMat3 = osg.Uniform.createMatrix3;
osg.Uniform.mat3 = osg.Uniform.createMatrix3;
osg.Uniform.createMatrix4 = function (a, c) {
    var e = a,
    f = c;
    f === void 0 && (f = e, e = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    var g = new osg.Uniform;
    g.data = e;
    g.glCall = function (a, c, e) {
        gl.uniformMatrix4fv(a, c, e)
    };
    g.apply = g.applyMatrix;
    g.transpose = !1;
    g.glData = new osg.Float32Array(g.data);
    g.update = osg.Uniform.prototype._updateFloat16;
    g.name = f;
    g.type = "mat4";
    return g
};
osg.Uniform.createMat4 = osg.Uniform.createMatrix4;
osg.Uniform.mat4 = osg.Uniform.createMatrix4;
osg.Node = function () {
    osg.Object.call(this);
    this.children = [];
    this.parents = [];
    this.nodeMask = -1;
    this.boundingSphere = new osg.BoundingSphere;
    this.boundingSphereComputed = !1;
    this._updateCallbacks = [];
    this._cullCallback = void 0
};
osg.Node.prototype = osg.objectInehrit(osg.Object.prototype, {
        getOrCreateStateSet : function () {
            if (this.stateset === void 0)
                this.stateset = new osg.StateSet;
            return this.stateset
        },
        getStateSet : function () {
            return this.stateset
        },
        accept : function (a) {
            a.validNodeMask(this) && (a.pushOntoNodePath(this), a.apply(this), a.popFromNodePath())
        },
        dirtyBound : function () {
            if (this.boundingSphereComputed === !0) {
                this.boundingSphereComputed = !1;
                for (var a = 0, c = this.parents.length; a < c; a++)
                    this.parents[a].dirtyBound()
            }
        },
        setNodeMask : function (a) {
            this.nodeMask =
                a
        },
        getNodeMask : function () {
            return this.nodeMask
        },
        setStateSet : function (a) {
            this.stateset = a
        },
        setUpdateCallback : function (a) {
            this._updateCallbacks[0] = a
        },
        getUpdateCallback : function () {
            return this._updateCallbacks[0]
        },
        addUpdateCallback : function (a) {
            this._updateCallbacks.push(a)
        },
        getUpdateCallbackList : function () {
            return this._updateCallbacks
        },
        setCullCallback : function (a) {
            this._cullCallback = a
        },
        getCullCallback : function () {
            return this._cullCallback
        },
        hasChild : function (a) {
            for (var c = 0, e = this.children.length; c < e; c++)
                if (this.children[c] ===
                    a)
                    return !0;
            return !1
        },
        addChild : function (a) {
            var c = this.children.push(a);
            a.addParent(this);
            this.dirtyBound();
            return c
        },
        getChildren : function () {
            return this.children
        },
        getParents : function () {
            return this.parents
        },
        addParent : function (a) {
            this.parents.push(a)
        },
        removeParent : function (a) {
            for (var c = 0, e = this.parents.length, f = this.parents; c < e; c++)
                if (f[c] === a) {
                    f.splice(c, 1);
                    break
                }
        },
        removeChildren : function () {
            var a = this.children;
            if (a.length !== 0) {
                for (var c = 0, e = a.length; c < e; c++)
                    a[c].removeParent(this);
                this.children.splice(0,
                    this.children.length);
                this.dirtyBound()
            }
        },
        removeChild : function (a) {
            for (var c = 0, e = this.children.length; c < e; c++)
                this.children[c] === a && (a.removeParent(this), this.children.splice(c, 1), this.dirtyBound())
        },
        traverse : function (a) {
            for (var c = 0, e = this.children.length; c < e; c++)
                this.children[c].accept(a)
        },
        ascend : function (a) {
            for (var c = 0, e = this.parents.length; c < e; c++)
                this.parents[c].accept(a)
        },
        getBound : function () {
            if (!this.boundingSphereComputed)
                this.computeBound(this.boundingSphere), this.boundingSphereComputed = !0;
            return this.boundingSphere
        },
        computeBound : function (a) {
            var c = new osg.BoundingBox;
            c.init();
            a.init();
            for (var e = 0, f = this.children.length; e < f; e++) {
                var g = this.children[e];
                (g.referenceFrame === void 0 || g.referenceFrame === osg.Transform.RELATIVE_RF) && c.expandBySphere(g.getBound())
            }
            if (!c.valid())
                return a;
            a._center = c.center();
            c = a._radius = 0;
            for (e = this.children.length; c < e; c++)
                f = this.children[c], (f.referenceFrame === void 0 || f.referenceFrame === osg.Transform.RELATIVE_RF) && a.expandRadiusBySphere(f.getBound());
            return a
        },
        getWorldMatrices : function (a) {
            var c = function (a) {
                this.nodePaths = [];
                this.halt = a;
                osg.NodeVisitor.call(this, osg.NodeVisitor.TRAVERSE_PARENTS)
            };
            c.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
                    apply : function (a) {
                        a.parents.length === 0 || a === this.halt ? this.nodePaths.push(this.nodePath.slice(0)) : this.traverse(a)
                    }
                });
            a = new c(a);
            this.accept(a);
            for (var c = [], e = 0, f = a.nodePaths.length; e < f; e++) {
                var g = a.nodePaths[e];
                g.length === 0 ? c.push(osg.Matrix.makeIdentity([])) : c.push(osg.computeLocalToWorld(g))
            }
            return c
        }
    });
osg.Node.prototype.objectType = osg.objectType.generate("Node");
osg.NodeVisitor = function (a) {
    this.traversalMask = -1;
    this.nodeMaskOverride = 0;
    this.traversalMode = a;
    if (a === void 0)
        this.traversalMode = osg.NodeVisitor.TRAVERSE_ALL_CHILDREN;
    this.nodePath = []
};
osg.NodeVisitor.TRAVERSE_PARENTS = 1;
osg.NodeVisitor.TRAVERSE_ALL_CHILDREN = 2;
osg.NodeVisitor._traversalFunctions = {};
osg.NodeVisitor._traversalFunctions[osg.NodeVisitor.TRAVERSE_PARENTS] = function (a) {
    a.ascend(this)
};
osg.NodeVisitor._traversalFunctions[osg.NodeVisitor.TRAVERSE_ALL_CHILDREN] = function (a) {
    a.traverse(this)
};
osg.NodeVisitor._pushOntoNodePath = {};
osg.NodeVisitor._pushOntoNodePath[osg.NodeVisitor.TRAVERSE_PARENTS] = function (a) {
    this.nodePath.unshift(a)
};
osg.NodeVisitor._pushOntoNodePath[osg.NodeVisitor.TRAVERSE_ALL_CHILDREN] = function (a) {
    this.nodePath.push(a)
};
osg.NodeVisitor._popFromNodePath = {};
osg.NodeVisitor._popFromNodePath[osg.NodeVisitor.TRAVERSE_PARENTS] = function () {
    return this.nodePath.shift()
};
osg.NodeVisitor._popFromNodePath[osg.NodeVisitor.TRAVERSE_ALL_CHILDREN] = function () {
    this.nodePath.pop()
};
osg.NodeVisitor.prototype = {
    setNodeMaskOverride : function (a) {
        this.nodeMaskOverride = a
    },
    getNodeMaskOverride : function () {
        return this.nodeMaskOverride
    },
    setTraversalMask : function (a) {
        this.traversalMask = a
    },
    getTraversalMask : function () {
        return this.traversalMask
    },
    pushOntoNodePath : function (a) {
        osg.NodeVisitor._pushOntoNodePath[this.traversalMode].call(this, a)
    },
    popFromNodePath : function () {
        osg.NodeVisitor._popFromNodePath[this.traversalMode].call(this)
    },
    validNodeMask : function (a) {
        return (this.traversalMask & (this.nodeMaskOverride |
                a.getNodeMask())) !== 0
    },
    apply : function (a) {
        this.traverse(a)
    },
    traverse : function (a) {
        osg.NodeVisitor._traversalFunctions[this.traversalMode].call(this, a)
    }
};
osg.Transform = function () {
    osg.Node.call(this);
    this.referenceFrame = osg.Transform.RELATIVE_RF
};
osg.Transform.RELATIVE_RF = 0;
osg.Transform.ABSOLUTE_RF = 1;
osg.Transform.prototype = osg.objectInehrit(osg.Node.prototype, {
        setReferenceFrame : function (a) {
            this.referenceFrame = a
        },
        getReferenceFrame : function () {
            return this.referenceFrame
        },
        computeBound : function (a) {
            osg.Node.prototype.computeBound.call(this, a);
            if (!a.valid())
                return a;
            var c = osg.Matrix.makeIdentity([]);
            this.computeLocalToWorldMatrix(c);
            var e = osg.Vec3.copy(a._center, []);
            e[0] += a._radius;
            osg.Matrix.transformVec3(c, e, e);
            var f = osg.Vec3.copy(a._center, []);
            f[1] += a._radius;
            osg.Matrix.transformVec3(c, f, f);
            var g =
                osg.Vec3.copy(a._center, []);
            g[2] += a._radius;
            osg.Matrix.transformVec3(c, g, g);
            osg.Matrix.transformVec3(c, a._center, a._center);
            osg.Vec3.sub(e, a._center, e);
            c = osg.Vec3.length(e);
            osg.Vec3.sub(f, a._center, f);
            f = osg.Vec3.length(f);
            osg.Vec3.sub(g, a._center, g);
            g = osg.Vec3.length(g);
            a._radius = c;
            if (a._radius < f)
                a._radius = f;
            if (a._radius < g)
                a._radius = g;
            return a
        }
    });
osg.computeLocalToWorld = function (a, c) {
    var e = c;
    e === void 0 && (e = !0);
    var f = osg.Matrix.makeIdentity([]),
    g = 0;
    if (e)
        for (g = a.length - 1; g > 0; g--)
            if (e = a[g], e.objectType === osg.Camera.prototype.objectType && (e.getReferenceFrame !== osg.Transform.RELATIVE_RF || e.getParents().length === 0))
                break;
    for (e = a.length; g < e; g++) {
        var h = a[g];
        h.computeLocalToWorldMatrix && h.computeLocalToWorldMatrix(f)
    }
    return f
};
osg.BlendFunc = function (a, c, e, f) {
    osg.StateAttribute.call(this);
    this._sourceFactor = osg.BlendFunc.ONE;
    this._destinationFactor = osg.BlendFunc.ZERO;
    this._sourceFactorAlpha = this._sourceFactor;
    this._destinationFactorAlpha = this._destinationFactor;
    this._separate = !1;
    a !== void 0 && this.setSource(a);
    c !== void 0 && this.setDestination(c);
    e !== void 0 && this.setSourceAlpha(e);
    f !== void 0 && this.setDestinationAlpha(f)
};
osg.BlendFunc.ZERO = 0;
osg.BlendFunc.ONE = 1;
osg.BlendFunc.SRC_COLOR = 768;
osg.BlendFunc.ONE_MINUS_SRC_COLOR = 769;
osg.BlendFunc.SRC_ALPHA = 770;
osg.BlendFunc.ONE_MINUS_SRC_ALPHA = 771;
osg.BlendFunc.DST_ALPHA = 772;
osg.BlendFunc.ONE_MINUS_DST_ALPHA = 773;
osg.BlendFunc.DST_COLOR = 774;
osg.BlendFunc.ONE_MINUS_DST_COLOR = 775;
osg.BlendFunc.SRC_ALPHA_SATURATE = 776;
osg.BlendFunc.BLEND_DST_RGB = 32968;
osg.BlendFunc.BLEND_SRC_RGB = 32969;
osg.BlendFunc.BLEND_DST_ALPHA = 32970;
osg.BlendFunc.BLEND_SRC_ALPHA = 32971;
osg.BlendFunc.CONSTANT_COLOR = 32769;
osg.BlendFunc.ONE_MINUS_CONSTANT_COLOR = 32770;
osg.BlendFunc.CONSTANT_ALPHA = 32771;
osg.BlendFunc.ONE_MINUS_CONSTANT_ALPHA = 32772;
osg.BlendFunc.BLEND_COLOR = 32773;
osg.BlendFunc.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        attributeType : "BlendFunc",
        cloneType : function () {
            return new osg.BlendFunc
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType
        },
        setSource : function (a) {
            this.setSourceRGB(a);
            this.setSourceAlpha(a)
        },
        setDestination : function (a) {
            this.setDestinationRGB(a);
            this.setDestinationAlpha(a)
        },
        checkSeparate : function () {
            return this._sourceFactor !== this._sourceFactorAlpha || this._destinationFactor !== this._destinationFactorAlpha
        },
        setSourceRGB : function (a) {
            this._sourceFactor = typeof a === "string" ? osg.BlendFunc[a] : a;
            this._separate = this.checkSeparate()
        },
        setSourceAlpha : function (a) {
            this._sourceFactorAlpha = typeof a === "string" ? osg.BlendFunc[a] : a;
            this._separate = this.checkSeparate()
        },
        setDestinationRGB : function (a) {
            this._destinationFactor = typeof a === "string" ? osg.BlendFunc[a] : a;
            this._separate = this.checkSeparate()
        },
        setDestinationAlpha : function (a) {
            this._destinationFactorAlpha = typeof a === "string" ? osg.BlendFunc[a] : a;
            this._separate = this.checkSeparate()
        },
        apply : function (a) {
            a = a.getGraphicContext();
            a.enable(a.BLEND);
            this._separate ? a.blendFuncSeparate(this._sourceFactor, this._destinationFactor, this._sourceFactorAlpha, this._destinationFactorAlpha) : a.blendFunc(this._sourceFactor, this._destinationFactor)
        }
    });
osg.BlendColor = function (a) {
    osg.StateAttribute.call(this);
    this._constantColor = Array(4);
    this._constantColor[0] = this._constantColor[1] = this._constantColor[2] = this._constantColor[3] = 1;
    a !== void 0 && this.setConstantColor(a)
};
osg.BlendColor.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        attributeType : "BlendColor",
        cloneType : function () {
            return new osg.BlendColor
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType
        },
        setConstantColor : function (a) {
            osg.Vec4.copy(a, this._constantColor)
        },
        getConstantColor : function () {
            return this._constantColor
        },
        apply : function (a) {
            a.getGraphicContext().blendColor(this._constantColor[0], this._constantColor[1], this._constantColor[2], this._constantColor[3]);
            this._dirty = !1
        }
    });
osg.BoundingBox = function () {
    this.init()
};
osg.BoundingBox.prototype = {
    _cache_radius2_tmp : [0, 0, 0],
    init : function () {
        this._min = [Infinity, Infinity, Infinity];
        this._max = [-Infinity, -Infinity, -Infinity]
    },
    valid : function () {
        return this._max[0] >= this._min[0] && this._max[1] >= this._min[1] && this._max[2] >= this._min[2]
    },
    expandBySphere : function (a) {
        if (a.valid()) {
            var c = this._max,
            e = this._min;
            e[0] = Math.min(e[0], a._center[0] - a._radius);
            e[1] = Math.min(e[1], a._center[1] - a._radius);
            e[2] = Math.min(e[2], a._center[2] - a._radius);
            c[0] = Math.max(c[0], a._center[0] + a._radius);
            c[1] = Math.max(c[1], a._center[1] + a._radius);
            c[2] = Math.max(c[2], a._center[2] + a._radius)
        }
    },
    expandByVec3 : function (a) {
        var c = this._min,
        e = this._max;
        c[0] = Math.min(c[0], a[0]);
        c[1] = Math.min(c[1], a[1]);
        c[2] = Math.min(c[2], a[2]);
        e[0] = Math.max(e[0], a[0]);
        e[1] = Math.max(e[1], a[1]);
        e[2] = Math.max(e[2], a[2])
    },
    center : function () {
        var a = this._min,
        c = this._max;
        return [(a[0] + c[0]) * 0.5, (a[1] + c[1]) * 0.5, (a[2] + c[2]) * 0.5]
    },
    radius : function () {
        return Math.sqrt(this.radius2())
    },
    radius2 : function () {
        var a = this._min,
        c = this._max,
        e = this._cache_radius2_tmp;
        e[0] = c[0] - a[0];
        e[1] = c[1] - a[1];
        e[2] = c[2] - a[2];
        return 0.25 * (e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
    },
    corner : function (a) {
        ret = [0, 0, 0];
        ret[0] = a & 1 ? this._max[0] : this._min[0];
        ret[1] = a & 2 ? this._max[1] : this._min[1];
        ret[2] = a & 4 ? this._max[2] : this._min[2];
        return ret
    }
};
osg.BoundingSphere = function () {
    this._center = [0, 0, 0];
    this._radius = -1
};
osg.BoundingSphere.prototype = {
    init : function () {
        this._center = [0, 0, 0];
        this._radius = -1
    },
    valid : function () {
        return this._radius >= 0
    },
    set : function (a, c) {
        this._center = a;
        this._radius = c
    },
    center : function () {
        return this._center
    },
    radius : function () {
        return this._radius
    },
    radius2 : function () {
        return this._radius * this._radius
    },
    expandByBox : function (a) {
        if (a.valid()) {
            var c;
            if (this.valid()) {
                var e = new osg.BoundingBox;
                e._min[0] = a._min[0];
                e._min[1] = a._min[1];
                e._min[2] = a._min[2];
                e._max[0] = a._max[0];
                e._max[1] = a._max[1];
                e._max[2] =
                    a._max[2];
                for (var f = 0; f < 8; f++) {
                    var g = osg.Vec3.sub(a.corner(c), this._center, []);
                    osg.Vec3.normalize(g, g);
                    nv[0] *= -this._radius;
                    nv[1] *= -this._radius;
                    nv[2] *= -this._radius;
                    nv[0] += this._center[0];
                    nv[1] += this._center[1];
                    nv[2] += this._center[2];
                    e.expandBy(nv)
                }
                c = e.center();
                this._center[0] = c[0];
                this._center[1] = c[1];
                this._center[2] = c[2];
                this._radius = e.radius()
            } else
                c = a.center(), this._center[0] = c[0], this._center[1] = c[1], this._center[2] = c[2], this._radius = a.radius()
        }
    },
    expandByVec3 : function (a) {
        this.valid() ? (a = osg.Vec3.sub(a,
                    this.center(), []), r = osg.Vec3.length(a), r > this.radius() && (dr = (r - this.radius()) * 0.5, this._center[0] += a[0] * (dr / r), this._center[1] += a[1] * (dr / r), this._center[2] += a[2] * (dr / r), this._radius += dr)) : (this._center[0] = a[0], this._center[1] = a[1], this._center[2] = a[2], this._radius = 0)
    },
    expandRadiusBySphere : function (a) {
        if (a.valid())
            if (this.valid()) {
                var c = osg.Vec3.sub,
                e = osg.Vec3.length,
                a = e(c(a._center, this._center, [])) + a._radius;
                if (a > this._radius)
                    this._radius = a
            } else
                this._center = osg.Vec3.copy(a._center, []), this._radius =
                    a._radius
    },
    expandBy : function (a) {
        if (a.valid())
            if (this.valid()) {
                var c = osg.Vec3.sub(this.center(), a.center(), []);
                d = osg.Vec3.length(c);
                if (!(d + a.radius() <= this.radius()))
                    d + this.radius() <= a.radius() ? (this._center[0] = a._center[0], this._center[1] = a._center[1], this._center[2] = a._center[2], this._radius = a._radius) : (new_radius = (this.radius() + d + a.radius()) * 0.5, ratio = (new_radius - this.radius()) / d, this._center[0] += (a._center[0] - this._center[0]) * ratio, this._center[1] += (a._center[1] - this._center[1]) * ratio, this._center[2] +=
                        (a._center[2] - this._center[2]) * ratio, this._radius = new_radius)
            } else
                this._center[0] = a._center[0], this._center[1] = a._center[1], this._center[2] = a._center[2], this._radius = a.radius()
    },
    contains : function (a) {
        a = osg.Vec3.sub(a, this.center(), []);
        return valid() && osg.Vec3.length2(a) <= radius2()
    },
    intersects : function (a) {
        var c = osg.Vec3.length2(osg.Vec3.sub(this.center(), a.center(), []));
        return valid() && a.valid() && c <= (this.radius() + a.radius()) * (this.radius() + a.radius())
    }
};
osg.BufferArray = function (a, c, e) {
    if (osg.BufferArray.instanceID === void 0)
        osg.BufferArray.instanceID = 0;
    this.instanceID = osg.BufferArray.instanceID;
    osg.BufferArray.instanceID += 1;
    this.dirty();
    this._itemSize = e;
    typeof a === "string" && (a = osg.BufferArray[a]);
    this._type = a;
    if (c !== void 0)
        this._elements = this._type === osg.BufferArray.ELEMENT_ARRAY_BUFFER ? new osg.Uint16Array(c) : new osg.Float32Array(c)
};
osg.BufferArray.ELEMENT_ARRAY_BUFFER = 34963;
osg.BufferArray.ARRAY_BUFFER = 34962;
osg.BufferArray.prototype = {
    setItemSize : function (a) {
        this._itemSize = a
    },
    isValid : function () {
        return this._buffer !== void 0 || this._elements !== void 0 ? !0 : !1
    },
    releaseGLObjects : function (a) {
        this._buffer !== void 0 && this._buffer !== null && a.deleteBuffer(this._buffer);
        this._buffer = void 0
    },
    bind : function (a) {
        var c = this._type,
        e = this._buffer;
        if (e)
            a.bindBuffer(c, e);
        else if (!e && this._elements.length > 0)
            this._buffer = a.createBuffer(), this._numItems = this._elements.length / this._itemSize, a.bindBuffer(c, this._buffer)
    },
    getItemSize : function () {
        return this._itemSize
    },
    dirty : function () {
        this._dirty = !0
    },
    isDirty : function () {
        return this._dirty
    },
    compile : function (a) {
        if (this._dirty)
            a.bufferData(this._type, this._elements, a.STATIC_DRAW), this._dirty = !1
    },
    getElements : function () {
        return this._elements
    },
    setElements : function (a) {
        this._elements = a;
        this._dirty = !0
    }
};
osg.BufferArray.create = function (a, c, e) {
    osg.log("osg.BufferArray.create is deprecated, use new osg.BufferArray with same arguments instead");
    return new osg.BufferArray(a, c, e)
};
osg.CullFace = function (a) {
    osg.StateAttribute.call(this);
    if (a === void 0)
        a = osg.CullFace.BACK;
    this.setMode(a)
};
osg.CullFace.DISABLE = 0;
osg.CullFace.FRONT = 1028;
osg.CullFace.BACK = 1029;
osg.CullFace.FRONT_AND_BACK = 1032;
osg.CullFace.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        attributeType : "CullFace",
        cloneType : function () {
            return new osg.CullFace
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType
        },
        setMode : function (a) {
            typeof a === "string" && (a = osg.CullFace[a]);
            this._mode = a
        },
        getMode : function () {
            return this._mode
        },
        apply : function (a) {
            a = a.getGraphicContext();
            this._mode === osg.CullFace.DISABLE ? a.disable(a.CULL_FACE) : (a.enable(a.CULL_FACE), a.cullFace(this._mode));
            this._dirty =
                !1
        }
    });
osg.CullSettings = function () {
    this._computeNearFar = !0;
    this._nearFarRatio = 0.005;
    var a = [0, 0, -1];
    this.bbCornerFar = (a[0] >= 0 ? 1 : 0) | (a[1] >= 0 ? 2 : 0) | (a[2] >= 0 ? 4 : 0);
    this.bbCornerNear = ~this.bbCornerFar & 7
};
osg.CullSettings.prototype = {
    setCullSettings : function (a) {
        this._computeNearFar = a._computeNearFar;
        this._nearFarRatio = a._nearFarRatio
    },
    setNearFarRatio : function (a) {
        this._nearFarRatio = a
    },
    getNearFarRatio : function () {
        return this._nearFarRatio
    },
    setComputeNearFar : function (a) {
        this._computeNearFar = a
    },
    getComputeNearFar : function () {
        return this._computeNearFar
    }
};
osg.Camera = function () {
    osg.Transform.call(this);
    osg.CullSettings.call(this);
    this.viewport = void 0;
    this.setClearColor([0, 0, 0, 1]);
    this.setClearDepth(1);
    this.setClearMask(osg.Camera.COLOR_BUFFER_BIT | osg.Camera.DEPTH_BUFFER_BIT);
    this.setViewMatrix(osg.Matrix.makeIdentity([]));
    this.setProjectionMatrix(osg.Matrix.makeIdentity([]));
    this.renderOrder = osg.Camera.NESTED_RENDER;
    this.renderOrderNum = 0
};
osg.Camera.PRE_RENDER = 0;
osg.Camera.NESTED_RENDER = 1;
osg.Camera.POST_RENDER = 2;
osg.Camera.COLOR_BUFFER_BIT = 16384;
osg.Camera.DEPTH_BUFFER_BIT = 256;
osg.Camera.STENCIL_BUFFER_BIT = 1024;
osg.Camera.prototype = osg.objectInehrit(osg.CullSettings.prototype, osg.objectInehrit(osg.Transform.prototype, {
            setClearDepth : function (a) {
                this.clearDepth = a
            },
            getClearDepth : function () {
                return this.clearDepth
            },
            setClearMask : function (a) {
                this.clearMask = a
            },
            getClearMask : function () {
                return this.clearMask
            },
            setClearColor : function (a) {
                this.clearColor = a
            },
            getClearColor : function () {
                return this.clearColor
            },
            setViewport : function (a) {
                this.viewport = a;
                this.getOrCreateStateSet().setAttributeAndMode(a)
            },
            getViewport : function () {
                return this.viewport
            },
            setViewMatrix : function (a) {
                this.modelviewMatrix = a
            },
            setProjectionMatrix : function (a) {
                this.projectionMatrix = a
            },
            setProjectionMatrixAsOrtho : function (a, c, e, f, g, h) {
                osg.Matrix.makeOrtho(a, c, e, f, g, h, this.getProjectionMatrix())
            },
            getViewMatrix : function () {
                return this.modelviewMatrix
            },
            getProjectionMatrix : function () {
                return this.projectionMatrix
            },
            getRenderOrder : function () {
                return this.renderOrder
            },
            setRenderOrder : function (a, c) {
                this.renderOrder = a;
                this.renderOrderNum = c
            },
            attachTexture : function (a, c, e) {
                this.frameBufferObject &&
                this.frameBufferObject.dirty();
                e === void 0 && (e = 0);
                if (this.attachments === void 0)
                    this.attachments = {};
                this.attachments[a] = {
                    texture : c,
                    level : e
                }
            },
            attachRenderBuffer : function (a, c) {
                this.frameBufferObject && this.frameBufferObject.dirty();
                if (this.attachments === void 0)
                    this.attachments = {};
                this.attachments[a] = {
                    format : c
                }
            },
            computeLocalToWorldMatrix : function (a) {
                this.referenceFrame === osg.Transform.RELATIVE_RF && osg.Matrix.preMult(a, this.modelviewMatrix);
                return !0
            },
            computeWorldToLocalMatrix : function (a) {
                var c = [];
                osg.Matrix.inverse(this.modelviewMatrix,
                    c);
                this.referenceFrame === osg.Transform.RELATIVE_RF && osg.Matrix.postMult(c, a);
                return !0
            }
        }));
osg.Camera.prototype.objectType = osg.objectType.generate("Camera");
osg.Depth = function (a, c, e, f) {
    osg.StateAttribute.call(this);
    this._func = osg.Depth.LESS;
    this._near = 0;
    this._far = 1;
    this._writeMask = !0;
    if (a !== void 0)
        this._func = typeof a === "string" ? osg.Depth[a] : a;
    if (c !== void 0)
        this._near = c;
    if (e !== void 0)
        this._far = e;
    if (f !== void 0)
        this._writeMask = f
};
osg.Depth.DISABLE = 0;
osg.Depth.NEVER = 512;
osg.Depth.LESS = 513;
osg.Depth.EQUAL = 514;
osg.Depth.LEQUAL = 515;
osg.Depth.GREATE = 516;
osg.Depth.NOTEQU = 517;
osg.Depth.GEQUAL = 518;
osg.Depth.ALWAYS = 519;
osg.Depth.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        attributeType : "Depth",
        cloneType : function () {
            return new osg.Depth
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType
        },
        setRange : function (a, c) {
            this._near = a;
            this._far = c
        },
        setWriteMask : function (a) {
            this._writeMask = a
        },
        apply : function (a) {
            a = a.getGraphicContext();
            this._func === 0 ? a.disable(a.DEPTH_TEST) : (a.enable(a.DEPTH_TEST), a.depthFunc(this._func), a.depthMask(this._writeMask), a.depthRange(this._near,
                    this._far))
        }
    });
osg.WGS_84_RADIUS_EQUATOR = 6378137;
osg.WGS_84_RADIUS_POLAR = 6356752.3142;
osg.EllipsoidModel = function () {
    this._radiusEquator = osg.WGS_84_RADIUS_EQUATOR;
    this._radiusPolar = osg.WGS_84_RADIUS_POLAR;
    this.computeCoefficients()
};
osg.EllipsoidModel.prototype = {
    setRadiusEquator : function () {
        this._radiusEquator = radius;
        this.computeCoefficients()
    },
    getRadiusEquator : function () {
        return this._radiusEquator
    },
    setRadiusPolar : function (a) {
        this._radiusPolar = a;
        this.computeCoefficients()
    },
    getRadiusPolar : function () {
        return this._radiusPolar
    },
    convertLatLongHeightToXYZ : function (a, c, e, f) {
        f === void 0 && (osg.warn("deprecated, use this signature convertLatLongHeightToXYZ( latitude, longitude, height, result )"), f = []);
        var g = Math.sin(a),
        h = Math.cos(a),
        i =
            this._radiusEquator / Math.sqrt(1 - this._eccentricitySquared * g * g),
        a = (i + e) * h * Math.cos(c),
        c = (i + e) * h * Math.sin(c),
        e = (i * (1 - this._eccentricitySquared) + e) * g;
        f[0] = a;
        f[1] = c;
        f[2] = e;
        return f
    },
    convertXYZToLatLongHeight : function (a, c, e, f) {
        f === void 0 && (osg.warn("deprecated, use this signature convertXYZToLatLongHeight( X,  Y,  Z , result)"), f = []);
        var g = Math.sqrt(a * a + c * c),
        h = Math.atan2(e * this._radiusEquator, g * this._radiusPolar),
        i = (this._radiusEquator * this._radiusEquator - this._radiusPolar * this._radiusPolar) / (this._radiusPolar *
            this._radiusPolar),
        k = Math.sin(h),
        h = Math.cos(h);
        latitude = Math.atan((e + i * this._radiusPolar * k * k * k) / (g - this._eccentricitySquared * this._radiusEquator * h * h * h));
        longitude = Math.atan2(c, a);
        a = Math.sin(latitude);
        a = this._radiusEquator / Math.sqrt(1 - this._eccentricitySquared * a * a);
        height = g / Math.cos(latitude) - a;
        f[0] = latitude;
        f[1] = longitude;
        f[2] = height;
        return f
    },
    computeLocalUpVector : function (a, c, e) {
        var f,
        g,
        a = this.convertXYZToLatLongHeight(a, c, e, f, g, void 0);
        f = a[0];
        g = a[1];
        return [Math.cos(g) * Math.cos(f), Math.sin(g) * Math.cos(f),
            Math.sin(f)]
    },
    isWGS84 : function () {
        return this._radiusEquator == osg.WGS_84_RADIUS_EQUATOR && this._radiusPolar == osg.WGS_84_RADIUS_POLAR
    },
    computeCoefficients : function () {
        var a = (this._radiusEquator - this._radiusPolar) / this._radiusEquator;
        this._eccentricitySquared = 2 * a - a * a
    },
    computeLocalToWorldTransformFromLatLongHeight : function (a, c, e, f) {
        f === void 0 && (osg.warn("deprecated, use this signature computeLocalToWorldTransformFromLatLongHeight(latitude, longitude, height, result)"), f = Array(16));
        e = this.convertLatLongHeightToXYZ(a,
                c, e, f);
        osg.Matrix.makeTranslate(e[0], e[1], e[2], f);
        this.computeCoordinateFrame(a, c, f);
        return f
    },
    computeLocalToWorldTransformFromXYZ : function (a, c, e) {
        var f = this.convertXYZToLatLongHeight(a, c, e),
        a = osg.Matrix.makeTranslate(a, c, e);
        this.computeCoordinateFrame(f[0], f[1], a);
        return a
    },
    computeCoordinateFrame : function (a, c, e) {
        var a = [Math.cos(c) * Math.cos(a), Math.sin(c) * Math.cos(a), Math.sin(a)],
        c = [-Math.sin(c), Math.cos(c), 0],
        f = osg.Vec3.cross(a, c, []);
        osg.Matrix.set(e, 0, 0, c[0]);
        osg.Matrix.set(e, 0, 1, c[1]);
        osg.Matrix.set(e,
            0, 2, c[2]);
        osg.Matrix.set(e, 1, 0, f[0]);
        osg.Matrix.set(e, 1, 1, f[1]);
        osg.Matrix.set(e, 1, 2, f[2]);
        osg.Matrix.set(e, 2, 0, a[0]);
        osg.Matrix.set(e, 2, 1, a[1]);
        osg.Matrix.set(e, 2, 2, a[2])
    }
};
osg.FrameBufferObject = function () {
    osg.StateAttribute.call(this);
    this.fbo = void 0;
    this.attachments = [];
    this.dirty()
};
osg.FrameBufferObject.COLOR_ATTACHMENT0 = 36064;
osg.FrameBufferObject.DEPTH_ATTACHMENT = 36096;
osg.FrameBufferObject.DEPTH_COMPONENT16 = 33189;
osg.FrameBufferObject.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        attributeType : "FrameBufferObject",
        cloneType : function () {
            return new osg.FrameBufferObject
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType
        },
        setAttachment : function (a) {
            this.attachments.push(a)
        },
        _reportFrameBufferError : function (a) {
            switch (a) {
            case 36054:
                osg.debug("FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
                break;
            case 36055:
                osg.debug("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
                break;
            case 36057:
                osg.debug("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
                break;
            case 36061:
                osg.debug("FRAMEBUFFER_UNSUPPORTED");
                break;
            default:
                osg.debug("FRAMEBUFFER unknown error " + a.toString(16))
            }
        },
        apply : function (a) {
            var c = a.getGraphicContext();
            if (this.attachments.length > 0)
                if (this.isDirty()) {
                    if (!this.fbo)
                        this.fbo = c.createFramebuffer();
                    c.bindFramebuffer(c.FRAMEBUFFER, this.fbo);
                    for (var e = !1, f = 0, g = this.attachments.length; f < g; ++f)
                        if (this.attachments[f].texture === void 0)
                            e = c.createRenderbuffer(), c.bindRenderbuffer(c.RENDERBUFFER,
                                e), c.renderbufferStorage(c.RENDERBUFFER, this.attachments[f].format, this.attachments[f].width, this.attachments[f].height), c.framebufferRenderbuffer(c.FRAMEBUFFER, this.attachments[f].attachment, c.RENDERBUFFER, e), e = !0;
                        else {
                            var h = this.attachments[f].texture;
                            a.applyTextureAttribute(0, h);
                            c.framebufferTexture2D(c.FRAMEBUFFER, this.attachments[f].attachment, h.getTextureTarget(), h.getTextureObject(), this.attachments[f].level)
                        }
                    a = c.checkFramebufferStatus(c.FRAMEBUFFER);
                    a !== 36053 && this._reportFrameBufferError(a);
                    e && c.bindRenderbuffer(c.RENDERBUFFER, null);
                    this.setDirty(!1)
                } else
                    c.bindFramebuffer(c.FRAMEBUFFER, this.fbo), osg.reportWebGLError === !0 && (a = c.checkFramebufferStatus(c.FRAMEBUFFER), a !== 36053 && this._reportFrameBufferError(a));
            else
                c.bindFramebuffer(c.FRAMEBUFFER, null)
        }
    });
osg.FrameStamp = function () {
    var a = 0,
    c = 0,
    e = 0;
    this.setReferenceTime = function (a) {
        c = a
    };
    this.setSimulationTime = function (a) {
        e = a
    };
    this.getReferenceTime = function () {
        return c
    };
    this.getSimulationTime = function () {
        return e
    };
    this.setFrameNumber = function (c) {
        a = c
    };
    this.getFrameNumber = function () {
        return a
    }
};
osg.Geometry = function () {
    osg.Node.call(this);
    this.primitives = [];
    this.attributes = {};
    this.boundingBox = new osg.BoundingBox;
    this.boundingBoxComputed = !1;
    this.cacheAttributeList = {}
    
};
osg.Geometry.prototype = osg.objectInehrit(osg.Node.prototype, {
        releaseGLObjects : function (a) {
            for (var c in this.attributes)
                this.attributes[c].releaseGLObjects(a);
            c = 0;
            for (var e = this.primitives.length; c < e; c++) {
                var f = this.primitives[c];
                f.getIndices !== void 0 && f.getIndices() !== void 0 && f.getIndices() !== null && f.indices.releaseGLObjects(a)
            }
        },
        dirtyBound : function () {
            if (this.boundingBoxComputed === !0)
                this.boundingBoxComputed = !1;
            osg.Node.dirtyBound.call(this)
        },
        dirty : function () {
            this.cacheAttributeList = {}
            
        },
        getPrimitives : function () {
            return this.primitives
        },
        getAttributes : function () {
            return this.attributes
        },
        getVertexAttributeList : function () {
            return this.attributes
        },
        getPrimitiveSetList : function () {
            return this.primitives
        },
        drawImplementation : function (a) {
            var c = a.getLastProgramApplied(),
            e = c.instanceID;
            if (this.cacheAttributeList[e] === void 0) {
                var f,
                g = c.attributesCache,
                h = [],
                c = "//generated by Geometry::implementation\n";
                c += "state.lazyDisablingOfVertexAttributes();\n";
                c += "var attr;\n";
                for (var i = 0, k = g.attributeKeys.length; i < k; i++) {
                    var m = g.attributeKeys[i];
                    f = g[m];
                    this.attributes[m] !==
                    void 0 && (h.push(f), c += 'attr = this.attributes["' + m + '"];\n', c += "if (!attr.isValid()) { return; }\n", c += "state.setVertexAttribArray(" + f + ", attr, false);\n")
                }
                c += "state.applyDisablingOfVertexAttributes();\n";
                g = this.primitives;
                c += "var primitives = this.primitives;\n";
                f = 0;
                for (g = g.length; f < g; ++f)
                    c += "primitives[" + f + "].draw(state);\n";
                this.cacheAttributeList[e] = new Function("state", c)
            }
            this.cacheAttributeList[e].call(this, a)
        },
        drawImplementationDummy : function (a) {
            a.getLastProgramApplied();
            for (var a = 0, c = this.primitives.length; a <
                c; ++a);
        },
        getBoundingBox : function () {
            if (!this.boundingBoxComputed)
                this.computeBoundingBox(this.boundingBox), this.boundingBoxComputed = !0;
            return this.boundingBox
        },
        computeBoundingBox : function (a) {
            var c = this.getAttributes().Vertex;
            if (c !== void 0 && c.getElements() !== void 0 && c.getItemSize() > 2) {
                var e = [0, 0, 0];
                vertexes = c.getElements();
                for (var c = 0, f = vertexes.length; c < f; c += 3)
                    e[0] = vertexes[c], e[1] = vertexes[c + 1], e[2] = vertexes[c + 2], a.expandByVec3(e)
            }
            return a
        },
        computeBound : function (a) {
            a.init();
            var c = this.getBoundingBox();
            a.expandByBox(c);
            return a
        }
    });
osg.Geometry.prototype.objectType = osg.objectType.generate("Geometry");
osg.Light = function (a) {
    osg.StateAttribute.call(this);
    a === void 0 && (a = 0);
    this._ambient = [0.2, 0.2, 0.2, 1];
    this._diffuse = [0.8, 0.8, 0.8, 1];
    this._specular = [0.2, 0.2, 0.2, 1];
    this._position = [0, 0, 1, 0];
    this._direction = [0, 0, -1];
    this._spotCutoff = 180;
    this._spotBlend = 0.01;
    this._constantAttenuation = 1;
    this._quadraticAttenuation = this._linearAttenuation = 0;
    this._lightUnit = a;
    this._enabled = 0;
    this.dirty()
};
osg.Light.uniforms = {};
osg.Light.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        attributeType : "Light",
        cloneType : function () {
            return new osg.Light(this._lightUnit)
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType + this._lightUnit
        },
        getOrCreateUniforms : function () {
            var a = osg.Light.uniforms,
            c = this.getTypeMember();
            if (a[c] === void 0) {
                var e = osg.Uniform;
                a[c] = {
                    ambient : e.createFloat4([0.2, 0.2, 0.2, 1], this.getUniformName("ambient")),
                    diffuse : e.createFloat4([0.8, 0.8, 0.8, 1], this.getUniformName("diffuse")),
                    specular : e.createFloat4([0.2, 0.2, 0.2, 1], this.getUniformName("specular")),
                    position : e.createFloat4([0, 0, 1, 0], this.getUniformName("position")),
                    direction : e.createFloat3([0, 0, 1], this.getUniformName("direction")),
                    spotCutoff : e.createFloat1(180, this.getUniformName("spotCutoff")),
                    spotBlend : e.createFloat1(0.01, this.getUniformName("spotBlend")),
                    constantAttenuation : e.createFloat1(0, this.getUniformName("constantAttenuation")),
                    linearAttenuation : e.createFloat1(0, this.getUniformName("linearAttenuation")),
                    quadraticAttenuation : e.createFloat1(0,
                        this.getUniformName("quadraticAttenuation")),
                    enable : e.createInt1(0, this.getUniformName("enable")),
                    matrix : e.createMatrix4(osg.Matrix.makeIdentity([]), this.getUniformName("matrix")),
                    invMatrix : e.createMatrix4(osg.Matrix.makeIdentity([]), this.getUniformName("invMatrix"))
                };
                a[c].uniformKeys = Object.keys(a[c])
            }
            return a[c]
        },
        setPosition : function (a) {
            osg.Vec4.copy(a, this._position)
        },
        getPosition : function () {
            return this._position
        },
        setAmbient : function (a) {
            this._ambient = a;
            this.dirty()
        },
        setSpecular : function (a) {
            this._specular =
                a;
            this.dirty()
        },
        setDiffuse : function (a) {
            this._diffuse = a;
            this.dirty()
        },
        setSpotCutoff : function (a) {
            this._spotCutoff = a;
            this.dirty()
        },
        getSpotCutoff : function () {
            return this._spotCutoff
        },
        setSpotBlend : function (a) {
            this._spotBlend = a;
            this.dirty()
        },
        getSpotBlend : function () {
            return this._spotBlend
        },
        setConstantAttenuation : function (a) {
            this._constantAttenuation = a;
            this.dirty()
        },
        setLinearAttenuation : function (a) {
            this._linearAttenuation = a;
            this.dirty()
        },
        setQuadraticAttenuation : function (a) {
            this._quadraticAttenuation = a;
            this.dirty()
        },
        setDirection : function (a) {
            this._direction = a;
            this.dirty()
        },
        getDirection : function () {
            return this._direction
        },
        setLightNumber : function (a) {
            this._lightUnit = a;
            this.dirty()
        },
        getLightNumber : function () {
            return this._lightUnit
        },
        getPrefix : function () {
            return this.getType() + this._lightUnit
        },
        getParameterName : function (a) {
            return this.getPrefix() + "_" + a
        },
        getUniformName : function (a) {
            return this.getPrefix() + "_uniform_" + a
        },
        applyPositionedUniform : function (a) {
            var c = this.getOrCreateUniforms();
            osg.Matrix.copy(a, c.matrix.get());
            c.matrix.dirty();
            osg.Matrix.copy(a, c.invMatrix.get());
            c.invMatrix.get()[12] = 0;
            c.invMatrix.get()[13] = 0;
            c.invMatrix.get()[14] = 0;
            osg.Matrix.inverse(c.invMatrix.get(), c.invMatrix.get());
            osg.Matrix.transpose(c.invMatrix.get(), c.invMatrix.get());
            c.invMatrix.dirty()
        },
        apply : function () {
            var a = this.getOrCreateUniforms();
            a.ambient.set(this._ambient);
            a.diffuse.set(this._diffuse);
            a.specular.set(this._specular);
            a.position.set(this._position);
            a.direction.set(this._direction);
            var c = Math.cos(this._spotCutoff * Math.PI /
                    180);
            a.spotCutoff.get()[0] = c;
            a.spotCutoff.dirty();
            a.spotBlend.get()[0] = (1 - c) * this._spotBlend;
            a.spotBlend.dirty();
            a.constantAttenuation.get()[0] = this._constantAttenuation;
            a.constantAttenuation.dirty();
            a.linearAttenuation.get()[0] = this._linearAttenuation;
            a.linearAttenuation.dirty();
            a.quadraticAttenuation.get()[0] = this._quadraticAttenuation;
            a.quadraticAttenuation.dirty();
            this.setDirty(!1)
        },
        _replace : function (a, c, e, f) {
            for (var g = 0, h = c.length; g < h; g++)
                e = e.replace(RegExp(a + c[g], "g"), f.call(this, c[g]));
            return e
        },
        _shader : {},
        _shaderCommon : {},
        generateShader : function (a) {
            return this._shader[a] ? this._shader[a].call(this) : ""
        },
        generateShaderCommon : function (a) {
            return this._shaderCommon[a] ? this._shaderCommon[a].call(this) : ""
        }
    });
osg.Light.prototype._shaderCommon[osg.ShaderGeneratorType.VertexInit] = function () {
    return "\nvarying vec3 FragNormal;\nvarying vec3 FragEyeVector;\n\n"
};
osg.Light.prototype._shaderCommon[osg.ShaderGeneratorType.VertexFunction] = function () {
    return "\nvec3 computeNormal() {\n   return vec3(NormalMatrix * vec4(Normal, 0.0));\n}\n\nvec3 computeEyeVertex() {\n   return vec3(ModelViewMatrix * vec4(Vertex,1.0));\n}\n\n"
};
osg.Light.prototype._shaderCommon[osg.ShaderGeneratorType.VertexMain] = function () {
    return "\n  FragEyeVector = computeEyeVertex();\n  FragNormal = computeNormal();\n"
};
osg.Light.prototype._shaderCommon[osg.ShaderGeneratorType.FragmentInit] = function () {
    return "varying vec3 FragNormal;\nvarying vec3 FragEyeVector;\n"
};
osg.Light.prototype._shaderCommon[osg.ShaderGeneratorType.FragmentFunction] = function () {
    return "\nfloat getLightAttenuation(vec3 lightDir, float constant, float linear, float quadratic) {\n    \n    float d = length(lightDir);\n    float att = 1.0 / ( constant + linear*d + quadratic*d*d);\n    return att;\n}\nvec4 computeLightContribution(vec4 materialAmbient,\n                              vec4 materialDiffuse,\n                              vec4 materialSpecular,\n                              float materialShininess,\n                              vec4 lightAmbient,\n                              vec4 lightDiffuse,\n                              vec4 lightSpecular,\n                              vec3 normal,\n                              vec3 eye,\n                              vec3 lightDirection,\n                              vec3 lightSpotDirection,\n                              float lightCosSpotCutoff,\n                              float lightSpotBlend,\n                              float lightAttenuation)\n{\n    vec3 L = lightDirection;\n    vec3 N = normal;\n    float NdotL = max(dot(L, N), 0.0);\n    float halfTerm = NdotL;\n    vec4 ambient = lightAmbient;\n    vec4 diffuse = vec4(0.0);\n    vec4 specular = vec4(0.0);\n    float spot = 0.0;\n\n    if (NdotL > 0.0) {\n        vec3 E = eye;\n        vec3 R = reflect(-L, N);\n        float RdotE = max(dot(R, E), 0.0);\n        if ( RdotE > 0.0) {\n           RdotE = pow( RdotE, materialShininess );\n        }\n        vec3 D = lightSpotDirection;\n        spot = 1.0;\n        if (lightCosSpotCutoff > 0.0) {\n          float cosCurAngle = dot(-L, D);\n          if (cosCurAngle < lightCosSpotCutoff) {\n             spot = 0.0;\n          } else {\n             if (lightSpotBlend > 0.0)\n               spot = cosCurAngle * smoothstep(0.0, 1.0, (cosCurAngle-lightCosSpotCutoff)/(lightSpotBlend));\n          }\n        }\n        diffuse = lightDiffuse * ((halfTerm));\n        specular = lightSpecular * RdotE;\n    }\n\n    return (materialAmbient*ambient + (materialDiffuse*diffuse + materialSpecular*specular) * spot) * lightAttenuation;\n}\nfloat linearrgb_to_srgb1(const in float c)\n{\n  float v = 0.0;\n  if(c < 0.0031308) {\n    if ( c > 0.0)\n      v = c * 12.92;\n  } else {\n    v = 1.055 * pow(c, 1.0/2.4) - 0.055;\n  }\n  return v;\n}\nvec4 linearrgb_to_srgb(const in vec4 col_from)\n{\n  vec4 col_to;\n  col_to.r = linearrgb_to_srgb1(col_from.r);\n  col_to.g = linearrgb_to_srgb1(col_from.g);\n  col_to.b = linearrgb_to_srgb1(col_from.b);\n  col_to.a = col_from.a;\n  return col_to;\n}\nfloat srgb_to_linearrgb1(const in float c)\n{\n  float v = 0.0;\n  if(c < 0.04045) {\n    if (c >= 0.0)\n      v = c * (1.0/12.92);\n  } else {\n    v = pow((c + 0.055)*(1.0/1.055), 2.4);\n  }\n return v;\n}\nvec4 srgb2linear(const in vec4 col_from)\n{\n  vec4 col_to;\n  col_to.r = srgb_to_linearrgb1(col_from.r);\n  col_to.g = srgb_to_linearrgb1(col_from.g);\n  col_to.b = srgb_to_linearrgb1(col_from.b);\n  col_to.a = col_from.a;\n  return col_to;\n}\n"
};
osg.Light.prototype._shaderCommon[osg.ShaderGeneratorType.FragmentMain] = function () {
    return "\n  vec3 normal = normalize(FragNormal);\n  vec3 eyeVector = normalize(-FragEyeVector);\n  vec4 lightColor = MaterialEmission;\n"
};
osg.Light.prototype._shaderCommon[osg.ShaderGeneratorType.FragmentEnd] = function () {
    return "\n  fragColor *= lightColor;\n"
};
osg.Light.prototype._shader[osg.ShaderGeneratorType.FragmentInit] = function () {
    var a = "\nuniform vec4 Light_position;\nuniform vec3 Light_direction;\nuniform mat4 Light_matrix;\nuniform mat4 Light_invMatrix;\nuniform float Light_constantAttenuation;\nuniform float Light_linearAttenuation;\nuniform float Light_quadraticAttenuation;\nuniform vec4 Light_ambient;\nuniform vec4 Light_diffuse;\nuniform vec4 Light_specular;\nuniform float Light_spotCutoff;\nuniform float Light_spotBlend;\n";
    uniforms = Object.keys(this.getOrCreateUniforms());
    return a = this._replace("Light_", uniforms, a, this.getUniformName)
};
osg.Light.prototype._shader[osg.ShaderGeneratorType.FragmentMain] = function () {
    var a;
    a = this._replace("", ["lightEye", "lightDir", "spotDirection", "attenuation"], "\n  vec3 lightEye = vec3(Light_matrix * Light_position);\n  vec3 lightDir;\n  if (Light_position[3] == 1.0) {\n    lightDir = lightEye - FragEyeVector;\n  } else {\n    lightDir = lightEye;\n  }\n  vec3 spotDirection = normalize(mat3(vec3(Light_invMatrix[0]), vec3(Light_invMatrix[1]), vec3(Light_invMatrix[2]))*Light_direction);\n  float attenuation = getLightAttenuation(lightDir, Light_constantAttenuation, Light_linearAttenuation, Light_quadraticAttenuation);\n  lightDir = normalize(lightDir);\n  lightColor += computeLightContribution(MaterialAmbient,\n                                         MaterialDiffuse, \n                                         MaterialSpecular,\n                                         MaterialShininess,\n                                         Light_ambient,\n                                         Light_diffuse,\n                                         Light_specular,\n                                         normal,\n                                         eyeVector,\n                                         lightDir,\n                                         spotDirection,\n                                         Light_spotCutoff,\n                                         Light_spotBlend,\n                                         attenuation);\n", this.getParameterName);
    uniforms = Object.keys(this.getOrCreateUniforms());
    return a = this._replace("Light_", uniforms, a, this.getUniformName)
};
osg.LightSource = function () {
    osg.Node.call(this);
    this._light = void 0
};
osg.LightSource.prototype = osg.objectInehrit(osg.Node.prototype, {
        getLight : function () {
            return this._light
        },
        setLight : function (a) {
            this._light = a
        }
    });
osg.LightSource.prototype.objectType = osg.objectType.generate("LightSource");
osg.LineWidth = function (a) {
    osg.StateAttribute.call(this);
    this.lineWidth = 1;
    if (a !== void 0)
        this.lineWidth = a
};
osg.LineWidth.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        attributeType : "LineWidth",
        cloneType : function () {
            return new osg.LineWidth
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType
        },
        apply : function (a) {
            a.getGraphicContext().lineWidth(this.lineWidth)
        }
    });
osg.Material = function () {
    osg.StateAttribute.call(this);
    this.ambient = [0.2, 0.2, 0.2, 1];
    this.diffuse = [0.8, 0.8, 0.8, 1];
    this.specular = [0, 0, 0, 1];
    this.emission = [0, 0, 0, 1];
    this.shininess = 12.5
};
osg.Material.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        _className : "Material",
        setEmission : function (a) {
            osg.Vec4.copy(a, this.emission);
            this._dirty = !0
        },
        setAmbient : function (a) {
            osg.Vec4.copy(a, this.ambient);
            this._dirty = !0
        },
        setSpecular : function (a) {
            osg.Vec4.copy(a, this.specular);
            this._dirty = !0
        },
        setDiffuse : function (a) {
            osg.Vec4.copy(a, this.diffuse);
            this._dirty = !0
        },
        setShininess : function (a) {
            this.shininess = a;
            this._dirty = !0
        },
        getEmission : function () {
            return this.emission
        },
        getAmbient : function () {
            return this.ambient
        },
        getSpecular : function () {
            return this.specular
        },
        getDiffuse : function () {
            return this.diffuse
        },
        getShininess : function () {
            return this.shininess
        },
        attributeType : "Material",
        cloneType : function () {
            return new osg.Material
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType
        },
        getOrCreateUniforms : function () {
            if (osg.Material.uniforms === void 0) {
                osg.Material.uniforms = {
                    ambient : osg.Uniform.createFloat4([0, 0, 0, 0], "MaterialAmbient"),
                    diffuse : osg.Uniform.createFloat4([0, 0, 0, 0], "MaterialDiffuse"),
                    specular : osg.Uniform.createFloat4([0, 0, 0, 0], "MaterialSpecular"),
                    emission : osg.Uniform.createFloat4([0, 0, 0, 0], "MaterialEmission"),
                    shininess : osg.Uniform.createFloat1([0], "MaterialShininess")
                };
                var a = [],
                c;
                for (c in osg.Material.uniforms)
                    a.push(c);
                osg.Material.uniforms.uniformKeys = a
            }
            return osg.Material.uniforms
        },
        apply : function () {
            var a = this.getOrCreateUniforms();
            a.ambient.set(this.ambient);
            a.diffuse.set(this.diffuse);
            a.specular.set(this.specular);
            a.emission.set(this.emission);
            a.shininess.set([this.shininess]);
            this._dirty = !1
        },
        _shader : {},
        _shaderCommon : {},
        generateShader : function (a) {
            return this._shader[a] ? this._shader[a].call(this) : ""
        }
    });
osg.Material.prototype._shader[osg.ShaderGeneratorType.VertexInit] = function () {
    return "uniform vec4 MaterialAmbient;\nuniform vec4 MaterialDiffuse;\nuniform vec4 MaterialSpecular;\nuniform vec4 MaterialEmission;\nuniform float MaterialShininess;\n"
};
osg.Material.prototype._shader[osg.ShaderGeneratorType.FragmentInit] = function () {
    return "uniform vec4 MaterialAmbient;\nuniform vec4 MaterialDiffuse;\nuniform vec4 MaterialSpecular;\nuniform vec4 MaterialEmission;\nuniform float MaterialShininess;\n"
};
osg.MatrixTransform = function () {
    osg.Transform.call(this);
    this.matrix = osg.Matrix.makeIdentity([])
};
osg.MatrixTransform.prototype = osg.objectInehrit(osg.Transform.prototype, {
        getMatrix : function () {
            return this.matrix
        },
        setMatrix : function (a) {
            this.matrix = a
        },
        computeLocalToWorldMatrix : function (a) {
            this.referenceFrame === osg.Transform.RELATIVE_RF && osg.Matrix.preMult(a, this.matrix);
            return !0
        },
        computeWorldToLocalMatrix : function (a) {
            var c = [];
            osg.Matrix.inverse(this.matrix, c);
            this.referenceFrame === osg.Transform.RELATIVE_RF && osg.Matrix.postMult(c, a);
            return !0
        }
    });
osg.MatrixTransform.prototype.objectType = osg.objectType.generate("MatrixTransform");
osg.PrimitiveSet = function () {};
osg.PrimitiveSet.POINTS = 0;
osg.PrimitiveSet.LINES = 1;
osg.PrimitiveSet.LINE_LOOP = 2;
osg.PrimitiveSet.LINE_STRIP = 3;
osg.PrimitiveSet.TRIANGLES = 4;
osg.PrimitiveSet.TRIANGLE_STRIP = 5;
osg.PrimitiveSet.TRIANGLE_FAN = 6;
osg.DrawArrays = function (a, c, e) {
    this.mode = a;
    this.first = c;
    this.count = e
};
osg.DrawArrays.prototype = {
    draw : function (a) {
        a.getGraphicContext().drawArrays(this.mode, this.first, this.count)
    },
    getMode : function () {
        return this.mode
    },
    getCount : function () {
        return this.count
    },
    getFirst : function () {
        return this.first
    }
};
osg.DrawArrays.create = function (a, c, e) {
    osg.log("osg.DrawArrays.create is deprecated, use new osg.DrawArrays with same arguments");
    return new osg.DrawArrays(a, c, e)
};
osg.DrawArrayLengths = function (a, c, e) {
    this._mode = a;
    this._first = c;
    this._arrayLengths = e.slice(0)
};
osg.DrawArrayLengths.prototype = {
    draw : function (a) {
        for (var a = a.getGraphicContext(), c = this._mode, e = this._first, f = this._arrayLengths, g = 0, h = f.length; g < h; g++) {
            var i = f[g];
            a.drawArrays(c, e, i);
            e += i
        }
    },
    getMode : function () {
        return this._mode
    },
    getNumIndices : function () {
        for (var a = 0, c = this._arrayLengths, e = 0, f = c.length; e < f; e++)
            a += c[e];
        return a
    },
    getArrayLengths : function () {
        return this._arrayLengths
    },
    getFirst : function () {
        return this._first
    },
    setFirst : function (a) {
        this._first = a
    }
};
osg.DrawElements = function (a, c) {
    this.mode = osg.PrimitiveSet.POINTS;
    if (a !== void 0)
        this.mode = a;
    this.offset = this.count = 0;
    this.indices = c;
    c !== void 0 && this.setIndices(c)
};
osg.DrawElements.prototype = {
    getMode : function () {
        return this.mode
    },
    draw : function (a) {
        a.setIndexArray(this.indices);
        a = a.getGraphicContext();
        a.drawElements(this.mode, this.count, a.UNSIGNED_SHORT, this.offset)
    },
    setIndices : function (a) {
        this.indices = a;
        this.count = a.getElements().length
    },
    getIndices : function () {
        return this.indices
    },
    setFirst : function (a) {
        this.offset = a
    },
    getFirst : function () {
        return this.offset
    },
    setCount : function (a) {
        this.count = a
    },
    getCount : function () {
        return this.count
    }
};
osg.DrawElements.create = function (a, c) {
    osg.log("osg.DrawElements.create is deprecated, use new osg.DrawElements with same arguments");
    return new osg.DrawElements(a, c)
};
osg.Program = function (a, c) {
    osg.StateAttribute.call(this);
    if (osg.Program.instanceID === void 0)
        osg.Program.instanceID = 0;
    this.instanceID = osg.Program.instanceID;
    osg.Program.instanceID += 1;
    this.program = null;
    this.setVertexShader(a);
    this.setFragmentShader(c);
    this.dirty = !0
};
osg.Program.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        attributeType : "Program",
        cloneType : function () {
            var a = new osg.Program;
            a.default_program = !0;
            return a
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType
        },
        setVertexShader : function (a) {
            this.vertex = a
        },
        setFragmentShader : function (a) {
            this.fragment = a
        },
        getVertexShader : function () {
            return this.vertex
        },
        getFragmentShader : function () {
            return this.fragment
        },
        apply : function () {
            if (!this.program || this.isDirty()) {
                if (this.default_program ===
                    !0)
                    return;
                this.vertex.shader || this.vertex.compile();
                this.fragment.shader || this.fragment.compile();
                this.program = gl.createProgram();
                gl.attachShader(this.program, this.vertex.shader);
                gl.attachShader(this.program, this.fragment.shader);
                gl.linkProgram(this.program);
                gl.validateProgram(this.program);
                if (!gl.getProgramParameter(this.program, gl.LINK_STATUS) && !gl.isContextLost())
                    return osg.log("can't link program\nvertex shader:\n" + this.vertex.text + "\n fragment shader:\n" + this.fragment.text), osg.log(gl.getProgramInfoLog(this.program)),
                    this.setDirty(!1), null;
                this.uniformsCache = {};
                this.uniformsCache.uniformKeys = [];
                this.attributesCache = {};
                this.attributesCache.attributeKeys = [];
                this.cacheUniformList(this.vertex.text);
                this.cacheUniformList(this.fragment.text);
                this.cacheAttributeList(this.vertex.text);
                this.setDirty(!1)
            }
            gl.useProgram(this.program)
        },
        cacheUniformList : function (a) {
            a = a.match(/uniform\s+\w+\s+\w+/g);
            if (a !== null)
                for (var c = 0, e = a.length; c < e; c++) {
                    var f = a[c].match(/uniform\s+\w+\s+(\w+)/)[1],
                    g = gl.getUniformLocation(this.program,
                            f);
                    g !== void 0 && g !== null && this.uniformsCache[f] === void 0 && (this.uniformsCache[f] = g, this.uniformsCache.uniformKeys.push(f))
                }
        },
        cacheAttributeList : function (a) {
            a = a.match(/attribute\s+\w+\s+\w+/g);
            if (a !== null)
                for (var c = 0, e = a.length; c < e; c++) {
                    var f = a[c].match(/attribute\s+\w+\s+(\w+)/)[1],
                    g = gl.getAttribLocation(this.program, f);
                    g !== -1 && g !== void 0 && this.attributesCache[f] === void 0 && (this.attributesCache[f] = g, this.attributesCache.attributeKeys.push(f))
                }
        }
    });
osg.Program.create = function (a, c) {
    console.log("osg.Program.create is deprecated use new osg.Program(vertex, fragment) instead");
    return new osg.Program(a, c)
};
osg.Projection = function () {
    osg.Node.call(this);
    this.projection = osg.Matrix.makeIdentity([])
};
osg.Projection.prototype = osg.objectInehrit(osg.Node.prototype, {
        getProjectionMatrix : function () {
            return this.projection
        },
        setProjectionMatrix : function (a) {
            this.projection = a
        }
    });
osg.Projection.prototype.objectType = osg.objectType.generate("Projection");
osg.Quat = {
    copy : function (a, c) {
        c[0] = a[0];
        c[1] = a[1];
        c[2] = a[2];
        c[3] = a[3];
        return c
    },
    makeIdentity : function (a) {
        return osg.Quat.init(a)
    },
    zeroRotation : function (a) {
        return osg.Quat.init(a)
    },
    init : function (a) {
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        a[3] = 1;
        return a
    },
    sub : function (a, c, e) {
        e[0] = a[0] - c[0];
        e[1] = a[1] - c[1];
        e[2] = a[2] - c[2];
        e[3] = a[3] - c[3];
        return e
    },
    add : function (a, c, e) {
        e[0] = a[0] + c[0];
        e[1] = a[1] + c[1];
        e[2] = a[2] + c[2];
        e[3] = a[3] + c[3];
        return e
    },
    dot : function (a, c) {
        return a[0] * c[0] + a[1] * c[1] + a[2] * c[2] + a[3] * c[3]
    },
    length2 : function (a) {
        return a[0] *
        a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]
    },
    neg : function (a, c) {
        c[0] = -a[0];
        c[1] = -a[1];
        c[2] = -a[2];
        c[3] = -a[3];
        return c
    },
    makeRotate : function (a, c, e, f, g) {
        var h = Math.sqrt(c * c + e * e + f * f);
        if (h < 1.0E-7)
            return this.init();
        var h = 1 / h,
        i = Math.cos(0.5 * a),
        a = Math.sin(0.5 * a);
        g === void 0 && (g = []);
        g[0] = c * a * h;
        g[1] = e * a * h;
        g[2] = f * a * h;
        g[3] = i;
        return g
    },
    lerp : function (a, c, e, f) {
        f[0] = c[0] + (e[0] - c[0]) * a;
        f[1] = c[1] + (e[1] - c[1]) * a;
        f[2] = c[2] + (e[2] - c[2]) * a;
        f[3] = c[3] + (e[3] - c[3]) * a;
        return f
    },
    slerp : function (a, c, e, f) {
        var g = this.dot(c, e);
        g < 0 && (g = -g, this.neg(e,
                e));
        var h,
        i;
        1 - g > 1.0E-5 ? (h = Math.acos(g), i = Math.sin(h), g = Math.sin((1 - a) * h) / i, a = Math.sin(a * h) / i) : g = 1 - a;
        f[0] = c[0] * g + e[0] * a;
        f[1] = c[1] * g + e[1] * a;
        f[2] = c[2] * g + e[2] * a;
        f[3] = c[3] * g + e[3] * a;
        return f
    },
    normalize : function (a, c) {
        var e = 1 / this.length2(a);
        c[0] = a[0] * e;
        c[1] = a[1] * e;
        c[2] = a[2] * e;
        c[3] = a[3] * e;
        return c
    },
    conj : function (a, c) {
        c[0] = -a[0];
        c[1] = -a[1];
        c[2] = -a[2];
        c[3] = a[3];
        return c
    },
    inverse : function (a, c) {
        var e = 1 / this.length2(a);
        this.conj(a, c);
        c[0] *= e;
        c[1] *= e;
        c[2] *= e;
        c[3] *= e;
        return c
    },
    mult : function (a, c, e) {
        e[0] = a[0] * c[3] +
            a[1] * c[2] - a[2] * c[1] + a[3] * c[0];
        e[1] = -a[0] * c[2] + a[1] * c[3] + a[2] * c[0] + a[3] * c[1];
        e[2] = a[0] * c[1] - a[1] * c[0] + a[2] * c[3] + a[3] * c[2];
        e[3] = -a[0] * c[0] - a[1] * c[1] - a[2] * c[2] + a[3] * c[3];
        return e
    },
    div : function (a, c, e) {
        c = 1 / c;
        e[0] = a[0] * c;
        e[1] = a[1] * c;
        e[2] = a[2] * c;
        e[3] = a[3] * c;
        return e
    },
    exp : function (a, c) {
        var e = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]),
        f = Math.exp(a[3]),
        g = 0;
        e > 1.0E-5 && (g = f * Math.sin(e) / e);
        c === void 0 && (c = []);
        c[0] = g * a[0];
        c[1] = g * a[1];
        c[2] = g * a[2];
        c[3] = f * Math.cos(e);
        return c
    },
    ln : function (a, c) {
        var e = a[0] * a[0] + a[1] * a[1] +
            a[2] * a[2],
        f = Math.sqrt(e),
        g = 0;
        f > 1.0E-5 && (g = Math.atan2(f, a[3]) / f);
        c === void 0 && (c = []);
        e += a[3] * a[3];
        c[0] = g * a[0];
        c[1] = g * a[1];
        c[2] = g * a[2];
        c[3] = 0.5 * Math.log(e);
        return c
    },
    squad : function (a, c, e, f, g, h) {
        c = this.slerp(a, c, g);
        e = this.slerp(a, e, f);
        return this.slerp(2 * a * (1 - a), c, e, h)
    },
    computeTangent : function (a, c, e, f) {
        c = this.inv(c);
        this.mult(e, c, void 0);
        this.ln(void 0, void 0);
        this.mult(a, c, void 0);
        this.ln(void 0, void 0);
        this.add(void 0, void 0, void 0);
        this.div(void 0, -4, void 0);
        this.exp(void 0, void 0);
        return this.mult(void 0,
            q1, f)
    }
};
osg.RenderBin = function () {
    this._leafs = [];
    this.positionedAttribute = [];
    this._renderStage = void 0;
    this._bins = {};
    this.stateGraphList = [];
    this._parent = void 0;
    this._binNum = 0;
    this._sorted = !1;
    this._sortMode = osg.RenderBin.SORT_BY_STATE
};
osg.RenderBin.SORT_BY_STATE = 0;
osg.RenderBin.SORT_BACK_TO_FRONT = 1;
osg.RenderBin.BinPrototypes = {
    RenderBin : function () {
        return new osg.RenderBin
    },
    DepthSortedBin : function () {
        var a = new osg.RenderBin;
        a._sortMode = osg.RenderBin.SORT_BACK_TO_FRONT;
        return a
    }
};
osg.RenderBin.prototype = {
    _createRenderBin : function (a) {
        return a === void 0 || osg.RenderBin.BinPrototypes[a] === void 0 ? osg.RenderBin.BinPrototypes.RenderBin() : osg.RenderBin.BinPrototypes[a]()
    },
    getStateGraphList : function () {
        return this.stateGraphList
    },
    copyLeavesFromStateGraphListToRenderLeafList : function () {
        this._leafs.splice(0, this._leafs.length);
        for (var a = !1, c = 0, e = this.stateGraphList.length; c < e; c++)
            for (var f = this.stateGraphList[c].leafs, g = 0, h = f.length; g < h; g++) {
                var i = f[g];
                isNaN(i.depth) ? a = !0 : this._leafs.push(i)
            }
        a &&
        osg.debug("warning: RenderBin::copyLeavesFromStateGraphListToRenderLeafList() detected NaN depth values, database may be corrupted.");
        this.stateGraphList.splice(0, this.stateGraphList.length)
    },
    sortBackToFront : function () {
        this.copyLeavesFromStateGraphListToRenderLeafList();
        this._leafs.sort(function (a, c) {
            return c.depth - a.depth
        })
    },
    sortImplementation : function () {
        var a = osg.RenderBin;
        switch (this._sortMode) {
        case a.SORT_BACK_TO_FRONT:
            this.sortBackToFront()
        }
    },
    sort : function () {
        if (!this._sorted) {
            for (var a = this._bins,
                c = Object.keys(a), e = 0, f = c.length; e < f; e++)
                a[c[e]].sort();
            this.sortImplementation();
            _sorted = !0
        }
    },
    setParent : function (a) {
        this._parent = a
    },
    getParent : function () {
        return this._parent
    },
    getBinNumber : function () {
        return this._binNum
    },
    findOrInsert : function (a, c) {
        var e = this._bins[a];
        if (e === void 0)
            e = this._createRenderBin(c), e._parent = this, e._binNum = a, e._renderStage = this._renderStage, this._bins[a] = e;
        return e
    },
    getStage : function () {
        return this._renderStage
    },
    addStateGraph : function (a) {
        this.stateGraphList.push(a)
    },
    reset : function () {
        this.stateGraphList.length =
            0;
        this._bins = {};
        this.positionedAttribute.length = 0;
        this._leafs.length = 0;
        this._sorted = !1
    },
    applyPositionedAttribute : function (a, c) {
        for (var e = 0, f = c.length; e < f; e++) {
            var g = c[e],
            h = g[1],
            g = g[0];
            a.setGlobalDefaultValue(h);
            h.apply(a);
            h.applyPositionedUniform(g, a);
            a.haveAppliedAttribute(h)
        }
    },
    drawImplementation : function (a, c) {
        for (var e = c, f = Object.keys(this._bins), g = this._bins, h = [], i = 0, k = f.length; i < k; i++)
            h.push(g[f[i]]);
        h.sort(function (a, c) {
            return a._binNum - c._binNum
        });
        f = 0;
        for (g = h.length; f < g; f++) {
            i = h[f];
            if (i.getBinNumber() >
                0)
                break;
            e = i.drawImplementation(a, e)
        }
        for (e = this.drawLeafs(a, e); f < g; f++)
            i = h[f], e = i.drawImplementation(a, e);
        return e
    },
    drawLeafs : function (a, c) {
        var e = this.stateGraphList,
        f = this._leafs,
        g,
        h,
        i,
        k = c,
        m = [],
        n = osg.Matrix;
        k && osg.StateGraph.prototype.moveToRootStateGraph(a, c.parent);
        for (var p, s, q, w, y = 0, E = f.length; y < E; y++)
            p = f[y], s = !1, k !== void 0 ? (k = k.parent, q = k.parent, w = p.parent, q !== w.parent ? (w.moveStateGraph(a, q, w.parent), a.pushStateSet(w.stateset), s = !0) : w !== k && (a.pushStateSet(w.stateset), s = !0)) : (p.parent.moveStateGraph(a,
                    void 0, p.parent.parent), a.pushStateSet(p.parent.stateset), s = !0), s === !0 && (a.apply(), g = a.getLastProgramApplied(), h = g.uniformsCache[a.modelViewMatrix.name], i = g.uniformsCache[a.projectionMatrix.name], g = g.uniformsCache[a.normalMatrix.name]), h !== void 0 && (a.modelViewMatrix.set(p.modelview), a.modelViewMatrix.apply(h)), i !== void 0 && (a.projectionMatrix.set(p.projection), a.projectionMatrix.apply(i)), g !== void 0 && (n.copy(p.modelview, m), m[12] = 0, m[13] = 0, m[14] = 0, n.inverse(m, m), n.transpose(m, m), a.normalMatrix.set(m),
                a.normalMatrix.apply(g)), p.geometry.drawImplementation(a), s === !0 && (a.popGeneratedProgram(), a.popStateSet()), k = p;
        f = 0;
        for (y = e.length; f < y; f++)
            for (var E = e[f], G = 0, O = E.leafs.length; G < O; G++)
                p = E.leafs[G], s = !1, k !== void 0 ? (k = k.parent, q = k.parent, w = p.parent, q !== w.parent ? (w.moveStateGraph(a, q, w.parent), a.pushStateSet(w.stateset), s = !0) : w !== k && (a.pushStateSet(w.stateset), s = !0)) : (p.parent.moveStateGraph(a, void 0, p.parent.parent), a.pushStateSet(p.parent.stateset), s = !0), s === !0 && (a.apply(), g = a.getLastProgramApplied(),
                    h = g.uniformsCache[a.modelViewMatrix.name], i = g.uniformsCache[a.projectionMatrix.name], g = g.uniformsCache[a.normalMatrix.name]), h !== void 0 && (a.modelViewMatrix.set(p.modelview), a.modelViewMatrix.apply(h)), i !== void 0 && (a.projectionMatrix.set(p.projection), a.projectionMatrix.apply(i)), g !== void 0 && (n.copy(p.modelview, m), m[12] = 0, m[13] = 0, m[14] = 0, n.inverse(m, m), n.transpose(m, m), a.normalMatrix.set(m), a.normalMatrix.apply(g)), p.geometry.drawImplementation(a), s === !0 && (a.popGeneratedProgram(), a.popStateSet()),
                k = p;
        return k
    }
};
osg.RenderStage = function () {
    osg.RenderBin.call(this);
    this.positionedAttribute = [];
    this.clearDepth = 1;
    this.clearColor = [0, 0, 0, 1];
    this.clearMask = osg.Camera.COLOR_BUFFER_BIT | osg.Camera.DEPTH_BUFFER_BIT;
    this.viewport = this.camera = void 0;
    this.preRenderList = [];
    this.postRenderList = [];
    this._renderStage = this
};
osg.RenderStage.prototype = osg.objectInehrit(osg.RenderBin.prototype, {
        reset : function () {
            osg.RenderBin.prototype.reset.call(this);
            this.preRenderList.length = 0;
            this.postRenderList.length = 0
        },
        setClearDepth : function (a) {
            this.clearDepth = a
        },
        getClearDepth : function () {
            return this.clearDepth
        },
        setClearColor : function (a) {
            this.clearColor = a
        },
        getClearColor : function () {
            return this.clearColor
        },
        setClearMask : function (a) {
            this.clearMask = a
        },
        getClearMask : function () {
            return this.clearMask
        },
        setViewport : function (a) {
            this.viewport =
                a
        },
        getViewport : function () {
            return this.viewport
        },
        setCamera : function (a) {
            this.camera = a
        },
        addPreRenderStage : function (a, c) {
            for (var e = 0, f = this.preRenderList.length; e < f; e++)
                if (c < this.preRenderList[e].order)
                    break;
            e < this.preRenderList.length ? this.preRenderList = this.preRenderList.splice(e, 0, {
                    order : c,
                    renderStage : a
                }) : this.preRenderList.push({
                    order : c,
                    renderStage : a
                })
        },
        addPostRenderStage : function (a, c) {
            for (var e = 0, f = this.postRenderList.length; e < f; e++)
                if (c < this.postRenderList[e].order)
                    break;
            e < this.postRenderList.length ?
            this.postRenderList = this.postRenderList.splice(e, 0, {
                    order : c,
                    renderStage : a
                }) : this.postRenderList.push({
                    order : c,
                    renderStage : a
                })
        },
        drawPreRenderStages : function (a, c) {
            for (var e = c, f = 0, g = this.preRenderList.length; f < g; ++f)
                e = this.preRenderList[f].renderStage.draw(a, e);
            return e
        },
        draw : function (a, c) {
            var e = this.drawPreRenderStages(a, c),
            e = this.drawImplementation(a, e);
            return e = this.drawPostRenderStages(a, e)
        },
        sort : function () {
            for (var a = 0, c = this.preRenderList.length; a < c; ++a)
                this.preRenderList[a].renderStage.sort();
            for (osg.RenderBin.prototype.sort.call(this); a < c; ++a)
                this.postRenderList[a].renderStage.sort()
        },
        drawPostRenderStages : function (a, c) {
            for (var e = c, f = 0, g = this.postRenderList.length; f < g; ++f)
                e = this.postRenderList[f].renderStage.draw(a, e);
            return e
        },
        applyCamera : function (a) {
            var c = a.getGraphicContext();
            if (this.camera === void 0)
                c.bindFramebuffer(c.FRAMEBUFFER, null);
            else {
                var c = this.camera.getViewport(),
                e = this.camera.frameBufferObject;
                if (!e)
                    e = new osg.FrameBufferObject, this.camera.frameBufferObject = e;
                if (e.isDirty() &&
                    this.camera.attachments !== void 0)
                    for (var f in this.camera.attachments) {
                        var g = this.camera.attachments[f],
                        h;
                        if (g.texture === void 0)
                            h = {
                                attachment : f,
                                format : g.format,
                                width : c.width(),
                                height : c.height()
                            };
                        else if (g.texture !== void 0 && (h = {
                                    attachment : f,
                                    texture : g.texture,
                                    level : g.level
                                }, g.format))
                            h.format = g.format;
                        e.setAttachment(h)
                    }
                e.apply(a)
            }
        },
        drawImplementation : function (a, c) {
            var e = a.getGraphicContext();
            this.applyCamera(a);
            this.viewport === void 0 && osg.log("RenderStage does not have a valid viewport");
            a.applyAttribute(this.viewport);
            this.clearMask & e.COLOR_BUFFER_BIT && e.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]);
            this.clearMask & e.DEPTH_BUFFER_BIT && (e.depthMask(!0), e.clearDepth(this.clearDepth));
            e.clear(this.clearMask);
            this.positionedAttribute && this.applyPositionedAttribute(a, this.positionedAttribute);
            return osg.RenderBin.prototype.drawImplementation.call(this, a, c)
        }
    });
osg.ShaderGenerator = function () {
    this.cache = []
};
osg.ShaderGenerator.prototype = {
    getActiveTypeMember : function (a) {
        for (var c = [], e = 0, f = a.attributeMap.attributeKeys.length; e < f; e++) {
            var g = a.attributeMap.attributeKeys[e],
            h = a.attributeMap[g];
            h.length === 0 && h.globalDefault.applyPositionedUniform === void 0 || (h.globalDefault.getOrCreateUniforms !== void 0 || h.globalDefault.writeToShader !== void 0) && c.push(g)
        }
        e = 0;
        for (f = a.textureAttributeMapList.length; e < f; e++)
            if (g = a.textureAttributeMapList[e], g !== void 0)
                for (var h = 0, i = g.attributeKeys.length; h < i; h++) {
                    var k = g.attributeKeys[h],
                    m = g[k];
                    m.length !== 0 && (m.globalDefault.getOrCreateUniforms !== void 0 || m.globalDefault.writeToShader !== void 0) && c.push(k + e)
                }
        return c
    },
    getActiveAttributeMapKeys : function (a) {
        for (var c = [], e = 0, f = a.attributeMap.attributeKeys.length; e < f; e++) {
            var g = a.attributeMap.attributeKeys[e],
            h = a.attributeMap[g];
            h.length === 0 && h.globalDefault.applyPositionedUniform === void 0 || (h.globalDefault.getOrCreateUniforms !== void 0 || h.globalDefault.writeToShader !== void 0) && c.push(g)
        }
        return c
    },
    getActiveTextureAttributeMapKeys : function (a) {
        for (var c =
                [], e = 0, f = a.textureAttributeMapList.length; e < f; e++) {
            var g = a.textureAttributeMapList[e];
            if (g !== void 0) {
                c[e] = [];
                for (var h = 0, i = g.attributeKeys.length; h < i; h++) {
                    var k = g.attributeKeys[h],
                    m = g[k];
                    m.length !== 0 && (m.globalDefault.getOrCreateUniforms !== void 0 || m.globalDefault.writeToShader !== void 0) && c[e].push(k)
                }
            }
        }
        return c
    },
    getActiveUniforms : function (a, c, e) {
        for (var f = {}, g = 0, h = c.length; g < h; g++) {
            var i = c[g];
            if (a.attributeMap[i].globalDefault.getOrCreateUniforms !== void 0)
                for (var i = a.attributeMap[i].globalDefault.getOrCreateUniforms(),
                    k = 0, m = i.uniformKeys.length; k < m; k++) {
                    var n = i[i.uniformKeys[k]];
                    f[n.name] = n
                }
        }
        c = 0;
        for (g = e.length; c < g; c++)
            if (h = e[c], h !== void 0) {
                i = 0;
                for (k = h.length; i < k; i++)
                    if (m = a.textureAttributeMapList[c][h[i]].globalDefault, m.getOrCreateUniforms !== void 0)
                        for (var m = m.getOrCreateUniforms(c), n = 0, p = m.uniformKeys.length; n < p; n++) {
                            var s = m[m.uniformKeys[n]];
                            f[s.name] = s
                        }
            }
        var a = [],
        q;
        for (q in f)
            a.push(q);
        f.uniformKeys = a;
        return f
    },
    getOrCreateProgram : function (a) {
        for (var c = this.getActiveTypeMember(a), e = 0, f = this.cache.length; e < f; ++e)
            if (this.compareAttributeMap(c,
                    this.cache[e].flattenKeys) === 0)
                return this.cache[e];
        var e = this.getActiveAttributeMapKeys(a),
        f = this.getActiveTextureAttributeMapKeys(a),
        g = this.getOrCreateVertexShader(a, e, f),
        h = this.getOrCreateFragmentShader(a, e, f),
        g = new osg.Program(new osg.Shader(gl.VERTEX_SHADER, g), new osg.Shader(gl.FRAGMENT_SHADER, h));
        g.flattenKeys = c;
        g.activeAttributeKeys = e;
        g.activeTextureAttributeKeys = f;
        g.activeUniforms = this.getActiveUniforms(a, e, f);
        g.generated = !0;
        osg.log(g.vertex.text);
        osg.log(g.fragment.text);
        this.cache.push(g);
        return g
    },
    compareAttributeMap : function (a, c) {
        for (var e, f = 0, g = a.length; f < g; f++)
            if (e = a[f], c.indexOf(e) === -1)
                return 1;
        return c.length !== a.length ? -1 : 0
    },
    fillTextureShader : function (a, c, e) {
        for (var f = "", g = {}, h = 0, i = c.length; h < i; h++) {
            var k = c[h];
            if (k !== void 0)
                for (var m = a[h], n = 0, p = k.length; n < p; n++) {
                    var s = k[n],
                    q = m[s].globalDefault;
                    q.generateShaderCommon !== void 0 && g[s] === void 0 && (f += q.generateShaderCommon(h, e), g[s] = !0);
                    q.generateShader && (f += q.generateShader(h, e))
                }
        }
        return f
    },
    fillShader : function (a, c, e) {
        for (var f =
                "", g = {}, h = 0, i = c.length; h < i; h++) {
            var k = a[c[h]].globalDefault,
            m = k.getType();
            k.generateShaderCommon !== void 0 && g[m] === void 0 && (f += k.generateShaderCommon(e), g[m] = !0);
            k.generateShader && (f += k.generateShader(e))
        }
        return f
    },
    getOrCreateVertexShader : function (a, c, e) {
        var f = osg.ShaderGeneratorType,
        g = "\n#ifdef GL_ES\nprecision highp float;\n#endif\nattribute vec3 Vertex;\nattribute vec4 Color;\nattribute vec3 Normal;\nuniform int ArrayColorEnabled;\nuniform mat4 ModelViewMatrix;\nuniform mat4 ProjectionMatrix;\nuniform mat4 NormalMatrix;\nvarying vec4 VertexColor;\n";
        g += this._writeShaderFromMode(a, c, e, f.VertexInit);
        g += "\nvec4 ftransform() {\n  return ProjectionMatrix * ModelViewMatrix * vec4(Vertex, 1.0);\n}";
        g += this._writeShaderFromMode(a, c, e, f.VertexFunction);
        g += "\nvoid main(void) {\n  gl_Position = ftransform();\n  if (ArrayColorEnabled == 1)\n    VertexColor = Color;\n  else\n    VertexColor = vec4(1.0,1.0,1.0,1.0);\n";
        g += this._writeShaderFromMode(a, c, e, f.VertexMain);
        g += "}\n";
        return g
    },
    _writeShaderFromMode : function (a, c, e, f) {
        var g = "";
        g += this.fillTextureShader(a.textureAttributeMapList,
            e, f);
        g += this.fillShader(a.attributeMap, c, f);
        return g
    },
    getOrCreateFragmentShader : function (a, c, e) {
        var f = "\n#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 VertexColor;\nuniform int ArrayColorEnabled;\nvec4 fragColor;\n",
        g = osg.ShaderGeneratorType;
        f += this._writeShaderFromMode(a, c, e, g.FragmentInit);
        f += this._writeShaderFromMode(a, c, e, g.FragmentFunction);
        f += "void main(void) {\n  fragColor = VertexColor;\n";
        f += this._writeShaderFromMode(a, c, e, g.FragmentMain);
        f += this._writeShaderFromMode(a, c, e, g.FragmentEnd);
        f += "\n  gl_FragColor = fragColor;\n}";
        return f
    }
};
osg.createTexturedBoxGeometry = function (a, c, e, f, g, h) {
    var i = new osg.Geometry;
    f /= 2;
    g /= 2;
    h /= 2;
    var k = [],
    m = [],
    n = [];
    k[0] = a - f;
    k[1] = c - g;
    k[2] = e + h;
    n[0] = 0;
    n[1] = -1;
    n[2] = 0;
    m[0] = 0;
    m[1] = 1;
    k[3] = a - f;
    k[4] = c - g;
    k[5] = e - h;
    n[3] = 0;
    n[4] = -1;
    n[5] = 0;
    m[2] = 0;
    m[3] = 0;
    k[6] = a + f;
    k[7] = c - g;
    k[8] = e - h;
    n[6] = 0;
    n[7] = -1;
    n[8] = 0;
    m[4] = 1;
    m[5] = 0;
    k[9] = a + f;
    k[10] = c - g;
    k[11] = e + h;
    n[9] = 0;
    n[10] = -1;
    n[11] = 0;
    m[6] = 1;
    m[7] = 1;
    k[12] = a + f;
    k[13] = c + g;
    k[14] = e + h;
    n[12] = 0;
    n[13] = 1;
    n[14] = 0;
    m[8] = 0;
    m[9] = 1;
    k[15] = a + f;
    k[16] = c + g;
    k[17] = e - h;
    n[15] = 0;
    n[16] = 1;
    n[17] = 0;
    m[10] = 0;
    m[11] =
        0;
    k[18] = a - f;
    k[19] = c + g;
    k[20] = e - h;
    n[18] = 0;
    n[19] = 1;
    n[20] = 0;
    m[12] = 1;
    m[13] = 0;
    k[21] = a - f;
    k[22] = c + g;
    k[23] = e + h;
    n[21] = 0;
    n[22] = 1;
    n[23] = 0;
    m[14] = 1;
    m[15] = 1;
    k[24] = a + f;
    k[25] = c - g;
    k[26] = e + h;
    n[24] = 1;
    n[25] = 0;
    n[26] = 0;
    m[16] = 0;
    m[17] = 1;
    k[27] = a + f;
    k[28] = c - g;
    k[29] = e - h;
    n[27] = 1;
    n[28] = 0;
    n[29] = 0;
    m[18] = 0;
    m[19] = 0;
    k[30] = a + f;
    k[31] = c + g;
    k[32] = e - h;
    n[30] = 1;
    n[31] = 0;
    n[32] = 0;
    m[20] = 1;
    m[21] = 0;
    k[33] = a + f;
    k[34] = c + g;
    k[35] = e + h;
    n[33] = 1;
    n[34] = 0;
    n[35] = 0;
    m[22] = 1;
    m[23] = 1;
    k[36] = a - f;
    k[37] = c + g;
    k[38] = e + h;
    n[36] = -1;
    n[37] = 0;
    n[38] = 0;
    m[24] = 0;
    m[25] = 1;
    k[39] = a -
        f;
    k[40] = c + g;
    k[41] = e - h;
    n[39] = -1;
    n[40] = 0;
    n[41] = 0;
    m[26] = 0;
    m[27] = 0;
    k[42] = a - f;
    k[43] = c - g;
    k[44] = e - h;
    n[42] = -1;
    n[43] = 0;
    n[44] = 0;
    m[28] = 1;
    m[29] = 0;
    k[45] = a - f;
    k[46] = c - g;
    k[47] = e + h;
    n[45] = -1;
    n[46] = 0;
    n[47] = 0;
    m[30] = 1;
    m[31] = 1;
    k[48] = a - f;
    k[49] = c + g;
    k[50] = e + h;
    n[48] = 0;
    n[49] = 0;
    n[50] = 1;
    m[32] = 0;
    m[33] = 1;
    k[51] = a - f;
    k[52] = c - g;
    k[53] = e + h;
    n[51] = 0;
    n[52] = 0;
    n[53] = 1;
    m[34] = 0;
    m[35] = 0;
    k[54] = a + f;
    k[55] = c - g;
    k[56] = e + h;
    n[54] = 0;
    n[55] = 0;
    n[56] = 1;
    m[36] = 1;
    m[37] = 0;
    k[57] = a + f;
    k[58] = c + g;
    k[59] = e + h;
    n[57] = 0;
    n[58] = 0;
    n[59] = 1;
    m[38] = 1;
    m[39] = 1;
    k[60] = a + f;
    k[61] =
        c + g;
    k[62] = e - h;
    n[60] = 0;
    n[61] = 0;
    n[62] = -1;
    m[40] = 0;
    m[41] = 1;
    k[63] = a + f;
    k[64] = c - g;
    k[65] = e - h;
    n[63] = 0;
    n[64] = 0;
    n[65] = -1;
    m[42] = 0;
    m[43] = 0;
    k[66] = a - f;
    k[67] = c - g;
    k[68] = e - h;
    n[66] = 0;
    n[67] = 0;
    n[68] = -1;
    m[44] = 1;
    m[45] = 0;
    k[69] = a - f;
    k[70] = c + g;
    k[71] = e - h;
    n[69] = 0;
    n[70] = 0;
    n[71] = -1;
    m[46] = 1;
    m[47] = 1;
    i.getAttributes().Vertex = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, k, 3);
    i.getAttributes().Normal = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, n, 3);
    i.getAttributes().TexCoord0 = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER,
            m, 2);
    a = new osg.DrawElements(osg.PrimitiveSet.TRIANGLES, new osg.BufferArray(osg.BufferArray.ELEMENT_ARRAY_BUFFER, [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23], 1));
    i.getPrimitives().push(a);
    return i
};
osg.createTexturedQuadGeometry = function (a, c, e, f, g, h, i, k, m, n, p, s, q) {
    s === void 0 && q === void 0 && (s = n, q = p, p = n = 0);
    var w = new osg.Geometry,
    y = [];
    y[0] = a + i;
    y[1] = c + k;
    y[2] = e + m;
    y[3] = a;
    y[4] = c;
    y[5] = e;
    y[6] = a + f;
    y[7] = c + g;
    y[8] = e + h;
    y[9] = a + f + i;
    y[10] = c + g + k;
    y[11] = e + h + m;
    s === void 0 && (s = 1);
    q === void 0 && (q = 1);
    a = [];
    a[0] = n;
    a[1] = q;
    a[2] = n;
    a[3] = p;
    a[4] = s;
    a[5] = p;
    a[6] = s;
    a[7] = q;
    f = osg.Vec3.cross([f, g, h], [i, k, m], []);
    g = [];
    g[0] = f[0];
    g[1] = f[1];
    g[2] = f[2];
    g[3] = f[0];
    g[4] = f[1];
    g[5] = f[2];
    g[6] = f[0];
    g[7] = f[1];
    g[8] = f[2];
    g[9] = f[0];
    g[10] = f[1];
    g[11] =
        f[2];
    w.getAttributes().Vertex = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, y, 3);
    w.getAttributes().Normal = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, g, 3);
    w.getAttributes().TexCoord0 = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, a, 2);
    y = new osg.DrawElements(osg.PrimitiveSet.TRIANGLES, new osg.BufferArray(osg.BufferArray.ELEMENT_ARRAY_BUFFER, [0, 1, 2, 0, 2, 3], 1));
    w.getPrimitives().push(y);
    return w
};
osg.createTexturedBox = function (a, c, e, f, g, h) {
    osg.log("osg.createTexturedBox is deprecated use instead osg.createTexturedBoxGeometry");
    return osg.createTexturedBoxGeometry(a, c, e, f, g, h)
};
osg.createTexturedQuad = function (a, c, e, f, g, h, i, k, m, n, p, s, q) {
    osg.log("osg.createTexturedQuad is deprecated use instead osg.createTexturedQuadGeometry");
    return osg.createTexturedQuadGeometry(a, c, e, f, g, h, i, k, m, n, p, s, q)
};
osg.createAxisGeometry = function (a) {
    a === void 0 && (a = 5);
    if (osg.createAxisGeometry.getShader === void 0)
        osg.createAxisGeometry.getShader = function () {
            if (osg.createAxisGeometry.getShader.program === void 0) {
                var a = new osg.Program(new osg.Shader(gl.VERTEX_SHADER, "#ifdef GL_ES\nprecision highp float;\n#endif\nattribute vec3 Vertex;\nattribute vec4 Color;\nuniform mat4 ModelViewMatrix;\nuniform mat4 ProjectionMatrix;\n\nvarying vec4 FragColor;\n\nvec4 ftransform() {\nreturn ProjectionMatrix * ModelViewMatrix * vec4(Vertex, 1.0);\n}\n\nvoid main(void) {\ngl_Position = ftransform();\nFragColor = Color;\n}"),
                        new osg.Shader(gl.FRAGMENT_SHADER, "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 FragColor;\nvoid main(void) {\ngl_FragColor = FragColor;\n}"));
                osg.createAxisGeometry.getShader.program = a
            }
            return osg.createAxisGeometry.getShader.program
        };
    var c = new osg.Geometry,
    e = [];
    e.push(0, 0, 0);
    e.push(a, 0, 0);
    e.push(0, 0, 0);
    e.push(0, a, 0);
    e.push(0, 0, 0);
    e.push(0, 0, a);
    a = [];
    a.push(1, 0, 0, 1);
    a.push(1, 0, 0, 1);
    a.push(0, 1, 0, 1);
    a.push(0, 1, 0, 1);
    a.push(0, 0, 1, 1);
    a.push(0, 0, 1, 1);
    c.getAttributes().Vertex = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER,
            e, 3);
    c.getAttributes().Color = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, a, 4);
    e = new osg.DrawArrays(osg.PrimitiveSet.LINES, 0, 6);
    c.getPrimitives().push(e);
    c.getOrCreateStateSet().setAttributeAndMode(osg.createAxisGeometry.getShader());
    return c
};
osg.Stack = function () {};
osg.Stack.create = function () {
    var a = [];
    a.globalDefault = void 0;
    a.lastApplied = void 0;
    a.back = function () {
        return this[this.length - 1]
    };
    return a
};
osg.StateGraph = function () {
    this.depth = 0;
    this.children = {};
    this.children.keys = [];
    this.leafs = [];
    this.parent = this.stateset = void 0
};
osg.StateGraph.prototype = {
    clean : function () {
        this.leafs.splice(0, this.leafs.length);
        this.parent = this.stateset = void 0;
        for (var a = this.children.keys, c = 0, e = a.length; c < e; c++)
            this.children[a[c]].clean();
        this.children = {};
        a.splice(0, a.length);
        this.children.keys = a
    },
    getStateSet : function () {
        return this.stateset
    },
    findOrInsert : function (a) {
        var c;
        this.children[a.id] ? c = this.children[a.id] : (c = new osg.StateGraph, c.parent = this, c.depth = this.depth + 1, c.stateset = a, this.children[a.id] = c, this.children.keys.push(a.id));
        return c
    },
    moveToRootStateGraph : function (a, c) {
        for (; c; )
            c.stateSet && a.popStateSet(), c = c._parent
    },
    moveStateGraph : function (a, c, e) {
        var f;
        if (!(e === c || e === void 0))
            if (c === void 0) {
                f = [];
                do
                    e.stateset !== void 0 && f.push(e.stateset), e = e.parent;
                while (e);
                f.reverse();
                for (c = 0, l = f.length; c < l; ++c)
                    a.pushStateSet(f[c])
            } else if (c.parent === e.parent)
                c.stateset !== void 0 && a.popStateSet(), e.stateset !== void 0 && a.pushStateSet(e.stateset);
            else {
                for (; c.depth > e.depth; )
                    c.stateset !== void 0 && a.popStateSet(), c = c.parent;
                for (f = []; e.depth > c.depth; )
                    e.stateset !==
                    void 0 && f.push(e.stateset), e = e.parent;
                for (; c !== e; )
                    c.stateset !== void 0 && a.popStateSet(), c = c.parent, e.stateset !== void 0 && f.push(e.stateset), e = e.parent;
                f.reverse();
                stackLength = f.length;
                for (c = 0; c < stackLength; ++c)
                    a.pushStateSet(f[c])
            }
    }
};
osg.State = function () {
    this._graphicContext = void 0;
    this.currentVBO = null;
    this.vertexAttribList = [];
    this.programs = osg.Stack.create();
    this.stateSets = osg.Stack.create();
    this.uniforms = {};
    this.uniforms.uniformKeys = [];
    this.textureAttributeMapList = [];
    this.attributeMap = {};
    this.attributeMap.attributeKeys = [];
    this.modeMap = {};
    this.shaderGenerator = new osg.ShaderGenerator;
    this.modelViewMatrix = osg.Uniform.createMatrix4(osg.Matrix.makeIdentity([]), "ModelViewMatrix");
    this.projectionMatrix = osg.Uniform.createMatrix4(osg.Matrix.makeIdentity([]),
            "ProjectionMatrix");
    this.normalMatrix = osg.Uniform.createMatrix4(osg.Matrix.makeIdentity([]), "NormalMatrix");
    this.uniformArrayState = {};
    this.uniformArrayState.uniformKeys = [];
    this.uniformArrayState.Color = osg.Uniform.createInt1(0, "ArrayColorEnabled");
    this.uniformArrayState.uniformKeys.push("Color");
    this.vertexAttribMap = {};
    this.vertexAttribMap._disable = [];
    this.vertexAttribMap._keys = []
};
osg.State.prototype = {
    setGraphicContext : function (a) {
        this._graphicContext = a
    },
    getGraphicContext : function () {
        return this._graphicContext
    },
    pushStateSet : function (a) {
        this.stateSets.push(a);
        a.attributeMap && this.pushAttributeMap(this.attributeMap, a.attributeMap);
        if (a.textureAttributeMapList)
            for (var c = a.textureAttributeMapList, e = 0, f = c.length; e < f; e++)
                if (c[e] !== void 0) {
                    if (!this.textureAttributeMapList[e])
                        this.textureAttributeMapList[e] = {},
                    this.textureAttributeMapList[e].attributeKeys = [];
                    this.pushAttributeMap(this.textureAttributeMapList[e],
                        c[e])
                }
        a.uniforms && this.pushUniformsList(this.uniforms, a.uniforms)
    },
    applyStateSet : function (a) {
        this.pushStateSet(a);
        this.apply();
        this.popStateSet()
    },
    popAllStateSets : function () {
        for (; this.stateSets.length; )
            this.popStateSet()
    },
    popStateSet : function () {
        var a = this.stateSets.pop();
        a.program && this.programs.pop();
        a.attributeMap && this.popAttributeMap(this.attributeMap, a.attributeMap);
        if (a.textureAttributeMapList)
            for (var c = a.textureAttributeMapList, e = 0, f = c.length; e < f; e++)
                c[e] !== void 0 && this.popAttributeMap(this.textureAttributeMapList[e],
                    c[e]);
        a.uniforms && this.popUniformsList(this.uniforms, a.uniforms)
    },
    haveAppliedAttribute : function (a) {
        var c = this.attributeMap[a.getTypeMember()];
        c.lastApplied = a;
        c.asChanged = !0
    },
    applyAttribute : function (a) {
        var c = a.getTypeMember(),
        e = this.attributeMap[c];
        if (e === void 0)
            e = osg.Stack.create(), this.attributeMap[c] = e, this.attributeMap[c].globalDefault = a.cloneType(), this.attributeMap.attributeKeys.push(c);
        if (e.lastApplied !== a)
            a.apply && a.apply(this), e.lastApplied = a, e.asChanged = !0
    },
    applyTextureAttribute : function (a,
        c) {
        var e = this.getGraphicContext();
        e.activeTexture(e.TEXTURE0 + a);
        e = c.getTypeMember();
        if (!this.textureAttributeMapList[a])
            this.textureAttributeMapList[a] = {},
        this.textureAttributeMapList[a].attributeKeys = [];
        var f = this.textureAttributeMapList[a][e];
        if (f === void 0)
            f = osg.Stack.create(), this.textureAttributeMapList[a][e] = f, f.globalDefault = c.cloneType(), this.textureAttributeMapList[a].attributeKeys.push(e);
        if (f.lastApplied !== c)
            c.apply && c.apply(this), f.lastApplied = c, f.asChanged = !0
    },
    getLastProgramApplied : function () {
        return this.programs.lastApplied
    },
    pushGeneratedProgram : function () {
        var a;
        if (this.attributeMap.Program !== void 0 && this.attributeMap.Program.length !== 0 && (a = this.attributeMap.Program.back().object, value = this.attributeMap.Program.back().value, a !== void 0 && value !== osg.StateAttribute.OFF))
            return this.programs.push(this.getObjectPair(a, value)), a;
        a = {
            textureAttributeMapList : this.textureAttributeMapList,
            attributeMap : this.attributeMap
        };
        var c = this.stateSets.back().getShaderGenerator();
        if (c === void 0)
            c = this.shaderGenerator;
        a = c.getOrCreateProgram(a);
        this.programs.push(this.getObjectPair(a, osg.StateAttribute.ON));
        return a
    },
    popGeneratedProgram : function () {
        this.programs.pop()
    },
    applyWithoutProgram : function () {
        this.applyAttributeMap(this.attributeMap);
        this.applyTextureAttributeMapList(this.textureAttributeMapList)
    },
    apply : function () {
        var a = this._graphicContext;
        this.applyAttributeMap(this.attributeMap);
        this.applyTextureAttributeMapList(this.textureAttributeMapList);
        this.pushGeneratedProgram();
        var c = this.programs.back().object;
        if (this.programs.lastApplied !==
            c)
            c.apply(this), this.programs.lastApplied = c;
        var e,
        f,
        g,
        h;
        if (c.generated === !0) {
            e = c.uniformsCache;
            f = c.activeUniforms;
            c = !1;
            for (g = 0, l = f.uniformKeys.length; g < l; g++) {
                var i = f.uniformKeys[g],
                a = e[i];
                a !== void 0 ? f[i].apply(a) : (c = !0, delete f[i])
            }
            if (c) {
                e = [];
                for (h in f)
                    h !== "uniformKeys" && e.push(h);
                f.uniformKeys = e
            }
        } else {
            var k = c.program;
            e = c.uniformsCache;
            i = this.uniforms;
            f = [];
            g = c.trackUniforms;
            var m;
            if (c.trackAttributes !== void 0 && g === void 0) {
                var n = c.trackAttributes.attributeKeys;
                if (n !== void 0)
                    for (g = 0, l = n.length; g <
                        l; g++)
                        if (h = n[g], attributeStack = this.attributeMap[h], attributeStack !== void 0 && (h = attributeStack.globalDefault, h.getOrCreateUniforms !== void 0)) {
                            h = h.getOrCreateUniforms();
                            for (m = 0, b = h.uniformKeys.length; m < b; m++)
                                f.push(h[h.uniformKeys[m]])
                        }
                n = c.trackAttributes.textureAttributeKeys;
                if (n !== void 0)
                    for (g = 0, l = n.length; g < l; g++) {
                        var p = n[g];
                        if (p !== void 0)
                            for (var s = 0, q = p.length; s < q; s++)
                                if (h = p[s], m = this.textureAttributeMapList[g], m !== void 0 && (attributeStack = m[h], attributeStack !== void 0 && (h = attributeStack.globalDefault,
                                            h.getOrCreateUniforms !== void 0))) {
                                    h = h.getOrCreateUniforms(g);
                                    for (m = 0, b = h.uniformKeys.length; m < b; m++)
                                        f.push(h[h.uniformKeys[m]])
                                }
                    }
                h = {};
                for (g = 0, l = f.length; g < l; g++)
                    n = f[g], p = a.getUniformLocation(k, n.name), p !== void 0 && p !== null && (h[n.name] = f[g]);
                c.trackUniforms = h
            }
            for (g = 0, l = e.uniformKeys.length; g < l; g++)
                k = e.uniformKeys[g], f = e[k], a = i[k], a === void 0 ? c.trackUniforms !== void 0 && (a = c.trackUniforms[k], a !== void 0 && a.apply(f)) : (a = a.length === 0 ? a.globalDefault : a.back().object, a.apply(f))
        }
    },
    applyUniformList : function (a,
        c) {
        for (var e, f, g = this.getLastProgramApplied().uniformsCache, h = 0, i = g.uniformKeys.length; h < i; h++) {
            var k = g.uniformKeys[h];
            e = g[k];
            f = c[k];
            if (f === void 0) {
                f = a[k];
                if (f === void 0)
                    continue;
                f = f.length === 0 ? f.globalDefault : f.back().object
            }
            f.apply(e)
        }
    },
    applyAttributeMap : function (a) {
        for (var c, e = 0, f = a.attributeKeys.length; e < f; e++)
            if (c = a[a.attributeKeys[e]], c !== void 0) {
                var g;
                g = c.length === 0 ? c.globalDefault : c.back().object;
                if (c.asChanged) {
                    if (c.lastApplied !== g)
                        g.apply && g.apply(this), c.lastApplied = g;
                    c.asChanged = !1
                }
            }
    },
    getObjectPair : function (a, c) {
        return {
            object : a,
            value : c
        }
    },
    pushUniformsList : function (a, c) {
        for (var e, f, g = 0, h = c.uniformKeys.length; g < h; g++) {
            uniformPair = c[c.uniformKeys[g]];
            f = uniformPair.getUniform();
            e = f.name;
            if (a[e] === void 0)
                a[e] = osg.Stack.create(), a[e].globalDefault = f, a.uniformKeys.push(e);
            var i = uniformPair.getValue();
            e = a[e];
            e.length === 0 ? e.push(this.getObjectPair(f, i)) : e[e.length - 1].value & osg.StateAttribute.OVERRIDE && !(i & osg.StateAttribute.PROTECTED) ? e.push(e[e.length - 1]) : e.push(this.getObjectPair(f, i))
        }
    },
    popUniformsList : function (a, c) {
        for (var e = 0, f = c.uniformKeys.length; e < f; e++)
            a[c.uniformKeys[e]].pop()
    },
    applyTextureAttributeMapList : function (a) {
        for (var c = this._graphicContext, e, f = 0, g = a.length; f < g; f++)
            if (e = a[f], e !== void 0)
                for (var h = 0, i = e.attributeKeys.length; h < i; h++) {
                    var k = e[e.attributeKeys[h]];
                    if (k !== void 0) {
                        var m;
                        m = k.length === 0 ? k.globalDefault : k.back().object;
                        if (k.asChanged)
                            c.activeTexture(c.TEXTURE0 + f), m.apply(this, f), k.lastApplied = m, k.asChanged = !1
                    }
                }
    },
    setGlobalDefaultValue : function (a) {
        var c = a.getTypeMember();
        this.attributeMap[c] ? this.attributeMap[c].globalDefault = a : (this.attributeMap[c] = osg.Stack.create(), this.attributeMap[c].globalDefault = a, this.attributeMap.attributeKeys.push(c))
    },
    pushAttributeMap : function (a, c) {
        for (var e, f = 0, g = c.attributeKeys.length; f < g; f++) {
            e = c.attributeKeys[f];
            var h = c[e],
            i = h.getAttribute();
            if (a[e] === void 0)
                a[e] = osg.Stack.create(), a[e].globalDefault = i.cloneType(), a.attributeKeys.push(e);
            h = h.getValue();
            e = a[e];
            e.length === 0 ? e.push(this.getObjectPair(i, h)) : e[e.length - 1].value & osg.StateAttribute.OVERRIDE &&
            !(h & osg.StateAttribute.PROTECTED) ? e.push(e[e.length - 1]) : e.push(this.getObjectPair(i, h));
            e.asChanged = !0
        }
    },
    popAttributeMap : function (a, c) {
        for (var e, f = 0, g = c.attributeKeys.length; f < g; f++)
            type = c.attributeKeys[f], e = a[type], e.pop(), e.asChanged = !0
    },
    setIndexArray : function (a) {
        var c = this._graphicContext;
        if (this.currentIndexVBO !== a)
            a.bind(c), this.currentIndexVBO = a;
        a.isDirty() && a.compile(c)
    },
    lazyDisablingOfVertexAttributes : function () {
        for (var a = this.vertexAttribMap._keys, c = 0, e = a.length; c < e; c++) {
            var f = a[c];
            this.vertexAttribMap[f] &&
            (this.vertexAttribMap._disable[f] = !0)
        }
    },
    applyDisablingOfVertexAttributes : function () {
        for (var a = this.vertexAttribMap._keys, c = 0, e = a.length; c < e; c++)
            if (this.vertexAttribMap._disable[a[c]] === !0) {
                var f = a[c];
                this._graphicContext.disableVertexAttribArray(f);
                this.vertexAttribMap._disable[f] = !1;
                this.vertexAttribMap[f] = !1
            }
        c = this.programs.lastApplied;
        if (c !== void 0 && c.generated === !0 && (e = !1, this.previousAppliedProgram !== this.programs.lastApplied ? (e = !0, this.previousAppliedProgram = this.programs.lastApplied) : (a = c.attributesCache.Color,
                    this.vertexAttribMap[a] !== this.previousColorAttrib && (e = !0)), e && (a = c.attributesCache.Color, a !== void 0)))
            this.vertexAttribMap[a] ? this.uniformArrayState.Color.set([1]) : this.uniformArrayState.Color.set([0]), this.previousColorAttrib = this.vertexAttribMap[a], this.uniformArrayState.Color.apply(c.uniformsCache.ArrayColorEnabled)
    },
    setVertexAttribArray : function (a, c, e) {
        var f = this.vertexAttribMap;
        f._disable[a] = !1;
        var g = this._graphicContext,
        h = !1;
        c.isDirty() && (c.bind(g), c.compile(g), h = !0);
        f[a] !== c && (h || c.bind(g),
            f[a] || (g.enableVertexAttribArray(a), f[a] === void 0 && f._keys.push(a)), f[a] = c, g.vertexAttribPointer(a, c._itemSize, g.FLOAT, e, 0, 0))
    }
};
osg.StateSet = function () {
    osg.Object.call(this);
    this.id = osg.StateSet.instance++;
    this.attributeMap = {};
    this.attributeMap.attributeKeys = [];
    this.textureAttributeMapList = [];
    this._binName = void 0;
    this._binNumber = 0;
    this._shaderGenerator = void 0
};
osg.StateSet.instance = 0;
osg.StateSet.AttributePair = function (a, c) {
    this._object = a;
    this._value = c
};
osg.StateSet.AttributePair.prototype = {
    getAttribute : function () {
        return this._object
    },
    getUniform : function () {
        return this._object
    },
    getValue : function () {
        return this._value
    }
};
osg.StateSet.prototype = osg.objectInehrit(osg.Object.prototype, {
        getAttributePair : function (a, c) {
            return new osg.StateSet.AttributePair(a, c)
        },
        addUniform : function (a, c) {
            if (c === void 0)
                c = osg.StateAttribute.ON;
            if (!this.uniforms)
                this.uniforms = {},
            this.uniforms.uniformKeys = [];
            var e = a.name;
            this.uniforms[e] = this.getAttributePair(a, c);
            this.uniforms.uniformKeys.indexOf(e) === -1 && this.uniforms.uniformKeys.push(e)
        },
        getUniform : function (a) {
            if (this.uniforms && this.uniforms[a])
                return this.uniforms[a].getAttribute()
        },
        getUniformList : function () {
            return this.uniforms
        },
        setTextureAttributeAndMode : function (a, c, e) {
            if (e === void 0)
                e = osg.StateAttribute.ON;
            this._setTextureAttribute(a, this.getAttributePair(c, e))
        },
        getNumTextureAttributeLists : function () {
            return this.textureAttributeMapList.length
        },
        getTextureAttribute : function (a, c) {
            return this.textureAttributeMapList[a] === void 0 || this.textureAttributeMapList[a][c] === void 0 ? void 0 : this.textureAttributeMapList[a][c].getAttribute()
        },
        removeTextureAttribute : function (a, c) {
            if (!(this.textureAttributeMapList[a] === void 0 || this.textureAttributeMapList[a][c] ===
                    void 0)) {
                delete this.textureAttributeMapList[a][c];
                var e = this.textureAttributeMapList[a].attributeKeys.indexOf(c);
                this.textureAttributeMapList[a].attributeKeys.splice(e, 1)
            }
        },
        getAttribute : function (a) {
            return this.attributeMap[a] === void 0 ? void 0 : this.attributeMap[a].getAttribute()
        },
        setAttributeAndMode : function (a, c) {
            if (c === void 0)
                c = osg.StateAttribute.ON;
            this._setAttribute(this.getAttributePair(a, c))
        },
        setAttribute : function (a, c) {
            if (c === void 0)
                c = osg.StateAttribute.ON;
            this._setAttribute(this.getAttributePair(a,
                    c))
        },
        removeAttribute : function (a) {
            this.attributeMap[a] !== void 0 && (delete this.attributeMap[a], this.attributeMap.attributeKeys.splice(this.attributeMap.attributeKeys.indexOf(a), 1))
        },
        setRenderingHint : function (a) {
            a === "OPAQUE_BIN" ? this.setRenderBinDetails(0, "RenderBin") : a === "TRANSPARENT_BIN" ? this.setRenderBinDetails(10, "DepthSortedBin") : this.setRenderBinDetails(0, "")
        },
        setRenderBinDetails : function (a, c) {
            this._binNumber = a;
            this._binName = c
        },
        getAttributeMap : function () {
            return this.attributeMap
        },
        getBinNumber : function () {
            return this._binNumber
        },
        getBinName : function () {
            return this._binName
        },
        setBinNumber : function (a) {
            this._binNumber = a
        },
        setBinName : function (a) {
            this._binName = a
        },
        getAttributeList : function () {
            for (var a = this.attributeMap, c = a.attributeKeys, e = c.length, f = Array(e), g = 0; g < e; g++)
                f[g] = a[c[g]];
            return f
        },
        setShaderGenerator : function (a) {
            this._shaderGenerator = a
        },
        getShaderGenerator : function () {
            return this._shaderGenerator
        },
        _getUniformMap : function () {
            return this.uniforms
        },
        _setTextureAttribute : function (a, c) {
            if (this.textureAttributeMapList[a] === void 0)
                this.textureAttributeMapList[a] = {},
            this.textureAttributeMapList[a].attributeKeys = [];
            var e = c.getAttribute().getTypeMember();
            this.textureAttributeMapList[a][e] = c;
            this.textureAttributeMapList[a].attributeKeys.indexOf(e) === -1 && this.textureAttributeMapList[a].attributeKeys.push(e)
        },
        _setAttribute : function (a) {
            var c = a.getAttribute().getTypeMember();
            this.attributeMap[c] = a;
            this.attributeMap.attributeKeys.indexOf(c) === -1 && this.attributeMap.attributeKeys.push(c)
        }
    });
osg.StateSet.prototype.setTextureAttributeAndModes = osg.StateSet.prototype.setTextureAttributeAndMode;
osg.StateSet.prototype.setAttributeAndModes = osg.StateSet.prototype.setAttributeAndMode;
osg.Texture = function () {
    osg.StateAttribute.call(this);
    this.setDefaultParameters()
};
osg.Texture.DEPTH_COMPONENT = 6402;
osg.Texture.ALPHA = 6406;
osg.Texture.RGB = 6407;
osg.Texture.RGBA = 6408;
osg.Texture.LUMINANCE = 6409;
osg.Texture.LUMINANCE_ALPHA = 6410;
osg.Texture.LINEAR = 9729;
osg.Texture.NEAREST = 9728;
osg.Texture.NEAREST_MIPMAP_NEAREST = 9984;
osg.Texture.LINEAR_MIPMAP_NEAREST = 9985;
osg.Texture.NEAREST_MIPMAP_LINEAR = 9986;
osg.Texture.LINEAR_MIPMAP_LINEAR = 9987;
osg.Texture.CLAMP_TO_EDGE = 33071;
osg.Texture.REPEAT = 10497;
osg.Texture.MIRRORED_REPEAT = 33648;
osg.Texture.TEXTURE_2D = 3553;
osg.Texture.TEXTURE_CUBE_MAP = 34067;
osg.Texture.TEXTURE_BINDING_CUBE_MAP = 34068;
osg.Texture.TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
osg.Texture.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
osg.Texture.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
osg.Texture.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
osg.Texture.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
osg.Texture.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
osg.Texture.MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
osg.Texture.UNSIGNED_BYTE = 5121;
osg.Texture.FLOAT = 5126;
osg.Texture.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        attributeType : "Texture",
        _className : "Texture",
        cloneType : function () {
            var a = new osg.Texture;
            a.default_type = !0;
            return a
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType
        },
        getOrCreateUniforms : function (a) {
            if (osg.Texture.uniforms === void 0)
                osg.Texture.uniforms = [];
            if (osg.Texture.uniforms[a] === void 0) {
                var c = this.getType() + a,
                e = {};
                e.texture = osg.Uniform.createInt1(a, c);
                e.uniformKeys = Object.keys(e);
                osg.Texture.uniforms[a] = e
            }
            return osg.Texture.uniforms[a]
        },
        setDefaultParameters : function () {
            this._minFilter = this._magFilter = osg.Texture.LINEAR;
            this._wrapT = this._wrapS = osg.Texture.CLAMP_TO_EDGE;
            this._textureHeight = this._textureWidth = 0;
            this._unrefImageDataAfterApply = !1;
            this.setInternalFormat(osg.Texture.RGBA);
            this._textureTarget = osg.Texture.TEXTURE_2D;
            this._type = osg.Texture.UNSIGNED_BYTE
        },
        getTextureTarget : function () {
            return this._textureTarget
        },
        getTextureObject : function () {
            return this._textureObject
        },
        setTextureSize : function (a,
            c) {
            this._textureWidth = a;
            this._textureHeight = c
        },
        init : function (a) {
            if (!this._textureObject)
                this._textureObject = a.createTexture(), this.dirty()
        },
        getWidth : function () {
            return this._textureWidth
        },
        getHeight : function () {
            return this._textureHeight
        },
        releaseGLObjects : function (a) {
            if (this._textureObject !== void 0 && this._textureObject !== null)
                a.deleteTexture(this._textureObject), this._textureObject = null, this._image = void 0
        },
        setWrapS : function (a) {
            this._wrapS = typeof a === "string" ? osg.Texture[a] : a
        },
        setWrapT : function (a) {
            this._wrapT =
                typeof a === "string" ? osg.Texture[a] : a
        },
        getWrapT : function () {
            return this._wrapT
        },
        getWrapS : function () {
            return this._wrapS
        },
        getMinFilter : function () {
            return this._minFilter
        },
        getMagFilter : function () {
            return this._magFilter
        },
        setMinFilter : function (a) {
            this._minFilter = typeof a === "string" ? osg.Texture[a] : a
        },
        setMagFilter : function (a) {
            this._magFilter = typeof a === "string" ? osg.Texture[a] : a
        },
        setImage : function (a, c) {
            this._image = a;
            this.setImageFormat(c);
            this.dirty()
        },
        getImage : function () {
            return this._image
        },
        setImageFormat : function (a) {
            a ?
            (typeof a === "string" && (a = osg.Texture[a]), this._imageFormat = a) : this._imageFormat = osg.Texture.RGBA;
            this.setInternalFormat(this._imageFormat)
        },
        setType : function (a) {
            this._type = typeof a === "string" ? osg.Texture[a] : a
        },
        setUnrefImageDataAfterApply : function (a) {
            this._unrefImageDataAfterApply = a
        },
        setInternalFormat : function (a) {
            this._internalFormat = a
        },
        getInternalFormat : function () {
            return this._internalFormat
        },
        setFromCanvas : function (a, c) {
            this.setImage(a, c)
        },
        setFromTypedArray : function (a, c) {
            this.setImage(a, c)
        },
        isImageReady : function (a) {
            if (a)
                if (a instanceof
                    Image) {
                    if (a.complete)
                        return a.naturalWidth !== void 0 && a.naturalWidth === 0 ? !1 : !0
                } else if (a instanceof HTMLCanvasElement)
                    return !0;
                else if (a instanceof Uint8Array)
                    return !0;
            return !1
        },
        applyFilterParameter : function (a, c) {
            a.texParameteri(c, a.TEXTURE_MAG_FILTER, this._magFilter);
            a.texParameteri(c, a.TEXTURE_MIN_FILTER, this._minFilter);
            a.texParameteri(c, a.TEXTURE_WRAP_S, this._wrapS);
            a.texParameteri(c, a.TEXTURE_WRAP_T, this._wrapT)
        },
        generateMipmap : function (a, c) {
            (this._minFilter === a.NEAREST_MIPMAP_NEAREST || this._minFilter ===
                a.LINEAR_MIPMAP_NEAREST || this._minFilter === a.NEAREST_MIPMAP_LINEAR || this._minFilter === a.LINEAR_MIPMAP_LINEAR) && a.generateMipmap(c)
        },
        apply : function (a) {
            a = a.getGraphicContext();
            if (this._textureObject !== void 0 && !this.isDirty())
                a.bindTexture(this._textureTarget, this._textureObject);
            else if (this.default_type)
                a.bindTexture(this._textureTarget, null);
            else {
                var c = this._image;
                if (c !== void 0)
                    if (this.isImageReady(c)) {
                        if (this._textureObject || this.init(a), this.setDirty(!1), a.bindTexture(this._textureTarget, this._textureObject),
                            c instanceof Image ? (this.setTextureSize(c.naturalWidth, c.naturalHeight), a.texImage2D(this._textureTarget, 0, this._internalFormat, this._imageFormat, this._type, this._image)) : c instanceof HTMLCanvasElement ? (this.setTextureSize(c.width, c.height), a.texImage2D(this._textureTarget, 0, this._internalFormat, this._imageFormat, this._type, this._image)) : c instanceof Uint8Array && a.texImage2D(this._textureTarget, 0, this._internalFormat, this._textureWidth, this._textureHeight, 0, this._internalFormat, this._type, this._image),
                            this.applyFilterParameter(a, this._textureTarget), this.generateMipmap(a, this._textureTarget), this._unrefImageDataAfterApply)
                            this._image = void 0
                    } else
                        a.bindTexture(this._textureTarget, null);
                else
                    this._textureHeight !== 0 && this._textureWidth !== 0 && (this._textureObject || this.init(a), a.bindTexture(this._textureTarget, this._textureObject), a.texImage2D(this._textureTarget, 0, this._internalFormat, this._textureWidth, this._textureHeight, 0, this._internalFormat, this._type, null), this.applyFilterParameter(a, this._textureTarget),
                        this.generateMipmap(a, this._textureTarget), this.setDirty(!1))
            }
        },
        setShaderGeneratorFunction : function (a, c) {
            this[c] = a
        },
        generateShader : function (a, c) {
            return this[c] ? this[c].call(this, a) : ""
        }
    });
osg.Texture.prototype[osg.ShaderGeneratorType.VertexInit] = function (a) {
    var c = "attribute vec2 TexCoord" + a + ";\n";
    c += "varying vec2 FragTexCoord" + a + ";\n";
    return c
};
osg.Texture.prototype[osg.ShaderGeneratorType.VertexMain] = function (a) {
    return "FragTexCoord" + a + " = TexCoord" + a + ";\n"
};
osg.Texture.prototype[osg.ShaderGeneratorType.FragmentInit] = function (a) {
    var c = "varying vec2 FragTexCoord" + a + ";\n";
    c += "uniform sampler2D Texture" + a + ";\n";
    c += "vec4 texColor" + a + ";\n";
    return c
};
osg.Texture.prototype[osg.ShaderGeneratorType.FragmentMain] = function (a) {
    var c = "texColor" + a + " = texture2D( Texture" + a + ", FragTexCoord" + a + ".xy );\n";
    c += "fragColor = fragColor * texColor" + a + ";\n";
    return c
};
osg.Texture.createFromURL = function (a, c) {
    var e = new osg.Texture;
    osgDB.Promise.when(osgDB.readImage(a)).then(function (a) {
        e.setImage(a, c)
    });
    return e
};
osg.Texture.createFromImg = function (a, c) {
    var e = new osg.Texture;
    e.setImage(a, c);
    return e
};
osg.Texture.createFromImage = osg.Texture.createFromImg;
osg.Texture.createFromCanvas = function (a, c) {
    var e = new osg.Texture;
    e.setFromCanvas(a, c);
    return e
};
osg.Texture.create = function (a) {
    osg.log("osg.Texture.create is deprecated, use osg.Texture.createFromURL instead");
    return osg.Texture.createFromURL(a)
};
osg.TextureCubeMap = function () {
    osg.Texture.call(this);
    this._images = {}
    
};
osg.TextureCubeMap.prototype = osg.objectInehrit(osg.Texture.prototype, {
        _className : "TextureCubeMap",
        setDefaultParameters : function () {
            osg.Texture.prototype.setDefaultParameters.call(this);
            this._textureTarget = osg.Texture.TEXTURE_CUBE_MAP
        },
        cloneType : function () {
            var a = new osg.TextureCubeMap;
            a.default_type = !0;
            return a
        },
        setImage : function (a, c, e) {
            typeof a === "string" && (a = osg.Texture[a]);
            this._images[a] === void 0 && (this._images[a] = {});
            typeof e === "string" && (e = osg.Texture[e]);
            if (e === void 0)
                e = osg.Texture.RGBA;
            this._images[a].image =
                c;
            this._images[a].format = e;
            this._images[a].dirty = !0;
            this.dirty()
        },
        getImage : function (a) {
            return this._images[a].image
        },
        applyTexImage2D_load : function (a, c, e, f, g, h, i) {
            if (!i)
                return !1;
            if (!osg.Texture.prototype.isImageReady(i))
                return !1;
            i instanceof Image ? this.setTextureSize(i.naturalWidth, i.naturalHeight) : i instanceof HTMLCanvasElement && this.setTextureSize(i.width, i.height);
            a.texImage2D(c, 0, f, g, h, i);
            return !0
        },
        _applyImageTarget : function (a, c, e) {
            var f = this._images[e];
            if (!f)
                return 0;
            if (!f.dirty)
                return 1;
            return this.applyTexImage2D_load(a,
                e, 0, c, f.format, a.UNSIGNED_BYTE, f.image) ? (f.dirty = !1, this._unrefImageDataAfterApply && delete this._images[e], 1) : 0
        },
        apply : function (a) {
            a = a.getGraphicContext();
            if (this._textureObject !== void 0 && !this.isDirty())
                a.bindTexture(this._textureTarget, this._textureObject);
            else if (this.default_type)
                a.bindTexture(this._textureTarget, null);
            else {
                this._textureObject || this.init(a);
                a.bindTexture(this._textureTarget, this._textureObject);
                var c = this._internalFormat,
                e = 0;
                e += this._applyImageTarget(a, c, a.TEXTURE_CUBE_MAP_POSITIVE_X);
                e += this._applyImageTarget(a, c, a.TEXTURE_CUBE_MAP_NEGATIVE_X);
                e += this._applyImageTarget(a, c, a.TEXTURE_CUBE_MAP_POSITIVE_Y);
                e += this._applyImageTarget(a, c, a.TEXTURE_CUBE_MAP_NEGATIVE_Y);
                e += this._applyImageTarget(a, c, a.TEXTURE_CUBE_MAP_POSITIVE_Z);
                e += this._applyImageTarget(a, c, a.TEXTURE_CUBE_MAP_NEGATIVE_Z);
                e === 6 && (this.setDirty(!1), this.applyFilterParameter(a, this._textureTarget), this.generateMipmap(a, this._textureTarget))
            }
        }
    });
osg.UpdateVisitor = function () {
    osg.NodeVisitor.call(this);
    var a = new osg.FrameStamp;
    this.getFrameStamp = function () {
        return a
    };
    this.setFrameStamp = function (c) {
        a = c
    }
};
osg.UpdateVisitor.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
        apply : function (a) {
            for (var c = a.getUpdateCallbackList(), e = 0, f = c.length; e < f; e++)
                if (!c[e].update(a, this))
                    return;
            this.traverse(a)
        }
    });
osg.Viewport = function (a, c, e, f) {
    osg.StateAttribute.call(this);
    a === void 0 && (a = 0);
    c === void 0 && (c = 0);
    e === void 0 && (e = 800);
    f === void 0 && (f = 600);
    this._x = a;
    this._y = c;
    this._width = e;
    this._height = f;
    this._dirty = !0
};
osg.Viewport.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        attributeType : "Viewport",
        cloneType : function () {
            return new osg.Viewport
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType
        },
        apply : function (a) {
            a.getGraphicContext().viewport(this._x, this._y, this._width, this._height);
            this._dirty = !1
        },
        setViewport : function (a, c, e, f) {
            this._x = a;
            this._y = c;
            this._width = e;
            this._height = f;
            this.dirty()
        },
        x : function () {
            return this._x
        },
        y : function () {
            return this._y
        },
        width : function () {
            return this._width
        },
        height : function () {
            return this._height
        },
        computeWindowMatrix : function () {
            var a = osg.Matrix.makeTranslate(1, 1, 1),
            c = osg.Matrix.makeScale(0.5 * this._width, 0.5 * this._height, 0.5),
            e = osg.Matrix.makeTranslate(this._x, this._y, 0);
            return osg.Matrix.preMult(e, osg.Matrix.preMult(c, a))
        }
    });
osg.CullStack = function () {
    this._modelviewMatrixStack = [];
    this._projectionMatrixStack = [];
    this._viewportStack = [];
    this._bbCornerNear = this._bbCornerFar = 0
};
osg.CullStack.prototype = {
    getCurrentProjectionMatrix : function () {
        return this._projectionMatrixStack[this._projectionMatrixStack.length - 1]
    },
    getCurrentModelviewMatrix : function () {
        return this._modelviewMatrixStack[this._modelviewMatrixStack.length - 1]
    },
    getViewport : function () {
        return this._viewportStack.length === 0 ? void 0 : this._viewportStack[this._viewportStack.length - 1]
    },
    getLookVectorLocal : function () {
        var a = this._modelviewMatrixStack[this._modelviewMatrixStack.length - 1];
        return [-a[2], -a[6], -a[10]]
    },
    pushViewport : function (a) {
        this._viewportStack.push(a)
    },
    popViewport : function () {
        this._viewportStack.pop()
    },
    pushModelviewMatrix : function (a) {
        this._modelviewMatrixStack.push(a);
        a = this.getLookVectorLocal();
        this._bbCornerFar = (a[0] >= 0 ? 1 : 0) | (a[1] >= 0 ? 2 : 0) | (a[2] >= 0 ? 4 : 0);
        this._bbCornerNear = ~this._bbCornerFar & 7
    },
    popModelviewMatrix : function () {
        this._modelviewMatrixStack.pop();
        var a;
        a = this._modelviewMatrixStack.length !== 0 ? this.getLookVectorLocal() : [0, 0, -1];
        this._bbCornerFar = (a[0] >= 0 ? 1 : 0) | (a[1] >= 0 ? 2 : 0) | (a[2] >= 0 ? 4 : 0);
        this._bbCornerNear = ~this._bbCornerFar & 7
    },
    pushProjectionMatrix : function (a) {
        this._projectionMatrixStack.push(a)
    },
    popProjectionMatrix : function () {
        this._projectionMatrixStack.pop()
    }
};
osg.CullVisitor = function () {
    osg.NodeVisitor.call(this);
    osg.CullSettings.call(this);
    osg.CullStack.call(this);
    this._rootRenderStage = this._currentRenderStage = this._currentRenderBin = this._currentStateGraph = this._rootStateGraph = void 0;
    this._computedNear = Number.POSITIVE_INFINITY;
    this._computedFar = Number.NEGATIVE_INFINITY;
    var a = [0, 0, -1];
    this._bbCornerFar = (a[0] >= 0 ? 1 : 0) | (a[1] >= 0 ? 2 : 0) | (a[2] >= 0 ? 4 : 0);
    this._bbCornerNear = ~this._bbCornerFar & 7;
    this._reserveMatrixStack = [[]];
    this._reserveMatrixStack.current = 0;
    this._reserveLeafStack =
        [{}
        
    ];
    this._reserveLeafStack.current = 0;
    this._renderBinStack = []
};
osg.CullVisitor.prototype = osg.objectInehrit(osg.CullStack.prototype, osg.objectInehrit(osg.CullSettings.prototype, osg.objectInehrit(osg.NodeVisitor.prototype, {
                distance : function (a, c) {
                    return  - (a[0] * c[2] + a[1] * c[6] + a[2] * c[10] + c[14])
                },
                handleCullCallbacksAndTraverse : function (a) {
                    var c = a.getCullCallback();
                    (!c || c.cull(a, this)) && this.traverse(a)
                },
                updateCalculatedNearFar : function (a, c) {
                    var e = c.getBoundingBox(),
                    f;
                    f = this.distance(e.corner(this._bbCornerNear), a);
                    e = this.distance(e.corner(this._bbCornerFar), a);
                    if (f >
                        e) {
                        var g = f;
                        f = e;
                        e = g
                    }
                    if (e < 0)
                        return !1;
                    if (f < this._computedNear)
                        this._computedNear = f;
                    if (e > this._computedFar)
                        this._computedFar = e;
                    return !0
                },
                clampProjectionMatrix : function (a, c, e, f, g) {
                    if (e < c - 1.0E-6)
                        return osg.log("clampProjectionMatrix not applied, invalid depth range, znear = " + c + "  zfar = " + e), !1;
                    var h,
                    i;
                    e < c + 1.0E-6 && (e = (c + e) * 0.5, c = e - 1.0E-6, e += 1.0E-6);
                    if (Math.abs(osg.Matrix.get(a, 0, 3)) < 1.0E-6 && Math.abs(osg.Matrix.get(a, 1, 3)) < 1.0E-6 && Math.abs(osg.Matrix.get(a, 2, 3)) < 1.0E-6)
                        i = (e - c) * 0.02, i < 1 && (i = 1), h = c - i, i = e +
                            i, c = h, e = i, osg.Matrix.set(a, 2, 2, -2 / (i - h)), osg.Matrix.set(a, 3, 2,  - (i + h) / (i - h));
                    else {
                        h = c * 0.98;
                        i = e * 1.02;
                        c = e * f;
                        h < c && (h = c);
                        var c = h,
                        e = i,
                        f = osg.Matrix.get(a, 2, 2),
                        k = osg.Matrix.get(a, 3, 2),
                        m = osg.Matrix.get(a, 2, 3),
                        n = osg.Matrix.get(a, 3, 3);
                        h = (-h * f + k) / (-h * m + n);
                        i = (-i * f + k) / (-i * m + n);
                        f = Math.abs(2 / (h - i));
                        osg.Matrix.postMult([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, f, 0, 0, 0,  - (h + i) / 2 * f, 1], a)
                    }
                    g !== void 0 && (g[0] = c, g[1] = e);
                    return !0
                },
                setStateGraph : function (a) {
                    this._currentStateGraph = this._rootStateGraph = a
                },
                setRenderStage : function (a) {
                    this._currentRenderBin =
                        this._rootRenderStage = a
                },
                reset : function () {
                    this._modelviewMatrixStack.splice(0, this._modelviewMatrixStack.length);
                    this._projectionMatrixStack.splice(0, this._projectionMatrixStack.length);
                    this._reserveMatrixStack.current = 0;
                    this._reserveLeafStack.current = 0;
                    this._computedNear = Number.POSITIVE_INFINITY;
                    this._computedFar = Number.NEGATIVE_INFINITY
                },
                getCurrentRenderBin : function () {
                    return this._currentRenderBin
                },
                setCurrentRenderBin : function (a) {
                    this._currentRenderBin = a
                },
                addPositionedAttribute : function (a) {
                    var c =
                        this._modelviewMatrixStack[this._modelviewMatrixStack.length - 1];
                    this._currentRenderBin.getStage().positionedAttribute.push([c, a])
                },
                pushStateSet : function (a) {
                    this._currentStateGraph = this._currentStateGraph.findOrInsert(a);
                    if (a.getBinName() !== void 0) {
                        var c = this._currentRenderBin;
                        this._renderBinStack.push(c);
                        this._currentRenderBin = c.getStage().findOrInsert(a.getBinNumber(), a.getBinName())
                    }
                },
                popStateSet : function () {
                    var a = this._currentStateGraph,
                    c = a.getStateSet();
                    this._currentStateGraph = a.parent;
                    if (c.getBinName() !==
                        void 0)
                        a = this._renderBinStack, this._currentRenderBin = a.length === 0 ? this._currentRenderBin.getStage() : a.pop()
                },
                popProjectionMatrix : function () {
                    this._computeNearFar === !0 && this._computedFar >= this._computedNear && this.clampProjectionMatrix(this._projectionMatrixStack[this._projectionMatrixStack.length - 1], this._computedNear, this._computedFar, this._nearFarRatio);
                    osg.CullStack.prototype.popProjectionMatrix.call(this)
                },
                apply : function (a) {
                    this[a.objectType].call(this, a)
                },
                _getReservedMatrix : function () {
                    var a = this._reserveMatrixStack[this._reserveMatrixStack.current++];
                    this._reserveMatrixStack.current === this._reserveMatrixStack.length && this._reserveMatrixStack.push(osg.Matrix.makeIdentity([]));
                    return a
                },
                _getReservedLeaf : function () {
                    var a = this._reserveLeafStack[this._reserveLeafStack.current++];
                    this._reserveLeafStack.current === this._reserveLeafStack.length && this._reserveLeafStack.push({});
                    return a
                }
            })));
osg.CullVisitor.prototype[osg.Camera.prototype.objectType] = function (a) {
    var c = a.getStateSet();
    c && this.pushStateSet(c);
    a.light && this.addPositionedAttribute(a.light);
    var e = this._getReservedMatrix(),
    f = this._getReservedMatrix();
    a.getReferenceFrame() === osg.Transform.RELATIVE_RF ? (osg.Matrix.mult(this._projectionMatrixStack[this._projectionMatrixStack.length - 1], a.getProjectionMatrix(), f), osg.Matrix.mult(this._modelviewMatrixStack[this._modelviewMatrixStack.length - 1], a.getViewMatrix(), e)) : (osg.Matrix.copy(a.getViewMatrix(),
            e), osg.Matrix.copy(a.getProjectionMatrix(), f));
    this.pushProjectionMatrix(f);
    this.pushModelviewMatrix(e);
    a.getViewport() && this.pushViewport(a.getViewport());
    var e = this._computedNear,
    f = this._computedFar,
    g = new osg.CullSettings;
    g.setCullSettings(this);
    this._computedNear = Number.POSITIVE_INFINITY;
    this._computedFar = Number.NEGATIVE_INFINITY;
    this.setCullSettings(a);
    if (a.getRenderOrder() === osg.Camera.NESTED_RENDER)
        this.handleCullCallbacksAndTraverse(a);
    else {
        var h = this.getCurrentRenderBin().getStage(),
        i = new osg.RenderStage;
        i.setCamera(a);
        i.setClearDepth(a.getClearDepth());
        i.setClearColor(a.getClearColor());
        i.setClearMask(a.getClearMask());
        h = a.getViewport() === void 0 ? h.getViewport() : a.getViewport();
        i.setViewport(h);
        h = this.getCurrentRenderBin();
        this.setCurrentRenderBin(i);
        this.handleCullCallbacksAndTraverse(a);
        this.setCurrentRenderBin(h);
        a.getRenderOrder() === osg.Camera.PRE_RENDER ? this.getCurrentRenderBin().getStage().addPreRenderStage(i, a.renderOrderNum) : this.getCurrentRenderBin().getStage().addPostRenderStage(i, a.renderOrderNum)
    }
    this.popModelviewMatrix();
    this.popProjectionMatrix();
    a.getViewport() && this.popViewport();
    this.setCullSettings(g);
    this._computedNear = e;
    this._computedFar = f;
    c && this.popStateSet()
};
osg.CullVisitor.prototype[osg.MatrixTransform.prototype.objectType] = function (a) {
    var c = this._getReservedMatrix();
    a.getReferenceFrame() === osg.Transform.RELATIVE_RF ? osg.Matrix.mult(this._modelviewMatrixStack[this._modelviewMatrixStack.length - 1], a.getMatrix(), c) : osg.Matrix.copy(a.getMatrix(), c);
    this.pushModelviewMatrix(c);
    (c = a.getStateSet()) && this.pushStateSet(c);
    a.light && this.addPositionedAttribute(a.light);
    this.handleCullCallbacksAndTraverse(a);
    c && this.popStateSet();
    this.popModelviewMatrix()
};
osg.CullVisitor.prototype[osg.Projection.prototype.objectType] = function (a) {
    lastMatrixStack = this._projectionMatrixStack[this._projectionMatrixStack.length - 1];
    var c = this._getReservedMatrix();
    osg.Matrix.mult(lastMatrixStack, a.getProjectionMatrix(), c);
    this.pushProjectionMatrix(c);
    (c = a.getStateSet()) && this.pushStateSet(c);
    this.handleCullCallbacksAndTraverse(a);
    c && this.popStateSet();
    this.popProjectionMatrix()
};
osg.CullVisitor.prototype[osg.Node.prototype.objectType] = function (a) {
    var c = a.getStateSet();
    c && this.pushStateSet(c);
    a.light && this.addPositionedAttribute(a.light);
    this.handleCullCallbacksAndTraverse(a);
    c && this.popStateSet()
};
osg.CullVisitor.prototype[osg.LightSource.prototype.objectType] = function (a) {
    var c = a.getStateSet();
    c && this.pushStateSet(c);
    var e = a.getLight();
    e && this.addPositionedAttribute(e);
    this.handleCullCallbacksAndTraverse(a);
    c && this.popStateSet()
};
osg.CullVisitor.prototype[osg.Geometry.prototype.objectType] = function (a) {
    var c = this._modelviewMatrixStack[this._modelviewMatrixStack.length - 1],
    e = a.getBoundingBox();
    if (!this._computeNearFar || !e.valid() || this.updateCalculatedNearFar(c, a)) {
        var f = a.getStateSet();
        f && this.pushStateSet(f);
        this.handleCullCallbacksAndTraverse(a);
        var g = this._currentStateGraph.leafs;
        g.length === 0 && this._currentRenderBin.addStateGraph(this._currentStateGraph);
        var h = this._getReservedLeaf(),
        i = 0;
        e.valid() && (i = this.distance(e.center(),
                    c));
        isNaN(i) ? osg.warn("warning geometry has a NaN depth, " + c + " center " + e.center()) : (h.parent = this._currentStateGraph, h.projection = this._projectionMatrixStack[this._projectionMatrixStack.length - 1], h.geometry = a, h.modelview = c, h.depth = i, g.push(h));
        f && this.popStateSet()
    }
};
var osgAnimation = {
    EaseOutQuad : function (a) {
        return  - (a * (a - 2))
    },
    EaseInQuad : function (a) {
        return a * a
    },
    EaseOutCubic : function (a) {
        a -= 1;
        return a * a * a + 1
    },
    EaseInCubic : function (a) {
        return a * a * a
    },
    EaseOutQuart : function (a) {
        a -= 1;
        return  - (a * a * a * a - 1)
    },
    EaseInQuart : function (a) {
        return a * a * a * a
    },
    EaseOutElastic : function (a) {
        return Math.pow(2, -10 * a) * Math.sin((a - 0.075) * 2 * Math.PI / 0.3) + 1
    }
};
osgAnimation.easeOutQuad = osgAnimation.EaseOutQuad;
osgAnimation.easeInQuad = osgAnimation.EaseInQuad;
osgAnimation.easeOutCubic = osgAnimation.EaseOutCubic;
osgAnimation.easeInCubic = osgAnimation.EaseInCubic;
osgAnimation.easeOutQuart = osgAnimation.EaseOutQuart;
osgAnimation.easeInQuart = osgAnimation.EaseInQuart;
osgAnimation.easeOutElastic = osgAnimation.EaseOutElastic;
osgAnimation.Animation = function () {
    osg.Object.call(this);
    this._channels = []
};
osgAnimation.Animation.prototype = osg.objectInehrit(osg.Object.prototype, {
        getChannels : function () {
            return this._channels
        },
        getDuration : function () {
            for (var a = 1E5, c = -1E5, e = 0, f = this._channels.length; e < f; e++)
                var g = this._channels[e], a = Math.min(a, g.getStartTime()), c = Math.max(c, g.getEndTime());
            return c - a
        }
    });
osgAnimation.BasicAnimationManager = function () {
    osg.Object.call(this);
    this._animations = {};
    this._actives = {};
    this._actives._keys = [];
    this._lastUpdate = void 0;
    this._targets = []
};
osgAnimation.BasicAnimationManager.prototype = osg.objectInehrit(osg.Object.prototype, {
        _updateAnimation : function (a, c, e) {
            var f = a.duration,
            g = a.weight,
            h = a.anim,
            i = a.start,
            k = a.loop;
            if (k > 0 && c - i >= k * f)
                return !0;
            c = (c - i) % f;
            (a = a.callback) && a(c);
            h = h.getChannels();
            a = 0;
            for (f = h.length; a < f; a++)
                h[a].update(c, g, e);
            return !1
        },
        update : function (a, c) {
            this.updateManager(c.getFrameStamp().getSimulationTime());
            return !0
        },
        updateManager : function (a) {
            for (var c = this._targets, e = 0, f = c.length; e < f; e++)
                c[e].reset();
            if (this._actives._keys.length >
                0)
                for (c = this._actives._keys.length - 1; c >= 0; ) {
                    for (var e = this._actives[c], f = this._actives[c]._keys, g = [], h = 0, i = f.length; h < i; h++) {
                        var k = e[f[h]];
                        if (k.start === void 0)
                            k.start = a;
                        this._updateAnimation(k, a, c) && g.push(h)
                    }
                    for (g = g.length - 1; g >= 0; g--)
                        h = f[g], f.splice(g, 1), delete e[h];
                    c--
                }
        },
        stopAll : function () {},
        isPlaying : function (a) {
            if (this._actives._keys.length > 0)
                for (var c = this._actives._keys.length - 1; c >= 0; ) {
                    if (this._actives[c][a])
                        return !0;
                    c--
                }
            return !1
        },
        stopAnimation : function (a) {
            if (this._actives._keys.length > 0)
                for (var c =
                        this._actives._keys.length - 1, e = function (a) {
                    return a !== "_keys"
                }; c >= 0; ) {
                    if (this._actives[c][a]) {
                        delete this._actives[c][a];
                        this._actives[c]._keys = Object.keys(this._actives[c]).filter(e);
                        break
                    }
                    c--
                }
        },
        playAnimationObject : function (a) {
            if (a.name !== void 0) {
                var c = this._animations[a.name];
                if (c === void 0)
                    osg.log("no animation " + a.name + " found");
                else if (!this.isPlaying(a.name)) {
                    if (a.priority === void 0)
                        a.priority = 0;
                    if (a.weight === void 0)
                        a.weight = 1;
                    if (a.timeFactor === void 0)
                        a.timeFactor = 1;
                    if (a.loop === void 0)
                        a.loop =
                            0;
                    if (this._actives[a.priority] === void 0)
                        this._actives[a.priority] = {},
                    this._actives[a.priority]._keys = [],
                    this._actives._keys.push(a.priority);
                    a.start = void 0;
                    a.duration = c.getDuration();
                    a.anim = c;
                    this._actives[a.priority][a.name] = a;
                    this._actives[a.priority]._keys.push(a.name)
                }
            }
        },
        playAnimation : function (a, c, e) {
            var f = a;
            if (typeof a === "object")
                if (a.getName === void 0)
                    return this.playAnimationObject(a);
                else
                    f = a.getName();
            return this.playAnimationObject({
                name : f,
                priority : c,
                weight : e
            })
        },
        registerAnimation : function (a) {
            this._animations[a.getName()] =
                a;
            this.buildTargetList()
        },
        getAnimationMap : function () {
            return this._animations
        },
        buildTargetList : function () {
            this._targets.length = 0;
            for (var a = Object.keys(this._animations), c = 0, e = a.length; c < e; c++)
                for (var f = this._animations[a[c]].getChannels(), g = 0, h = f.length; g < h; g++)
                    this._targets.push(f[g].getTarget())
        }
    });
osgAnimation.Channel = function (a, c) {
    osg.Object.call(this);
    this._sampler = a;
    this._target = c;
    this._targetName = void 0;
    this._data = {
        value : void 0,
        key : 0
    }
};
osgAnimation.Channel.prototype = osg.objectInehrit(osg.Object.prototype, {
        getKeyframes : function () {
            return this._sampler.getKeyframes()
        },
        setKeyframes : function (a) {
            this._sampler.setKeyframes(a)
        },
        getStartTime : function () {
            return this._sampler.getStartTime()
        },
        getEndTime : function () {
            return this._sampler.getEndTime()
        },
        getSampler : function () {
            return this._sampler
        },
        setSampler : function (a) {
            this._sampler = a
        },
        getTarget : function () {
            return this._target
        },
        setTarget : function (a) {
            this._target = a
        },
        setTargetName : function (a) {
            this._targetName =
                a
        },
        getTargetName : function () {
            return this._targetName
        },
        update : function (a, c, e) {
            c = c || 1;
            e = e || 0;
            if (!(c < 1.0E-4)) {
                var f = this._data;
                this._sampler.getValueAt(a, f);
                this._target.update.call(this._target, c, f.value, e)
            }
        },
        reset : function () {
            this._target.reset()
        }
    });
osgAnimation.Vec3LerpChannel = function (a, c) {
    var e = new osgAnimation.Sampler;
    a || (a = []);
    c || (c = new osgAnimation.Vec3Target);
    osgAnimation.Channel.call(this, e, c);
    e.setInterpolator(osgAnimation.Vec3LerpInterpolator);
    this.setKeyframes(a);
    this._data.value = osg.Vec3.copy(c.getValue(), [])
};
osgAnimation.Vec3LerpChannel.prototype = osgAnimation.Channel.prototype;
osgAnimation.FloatLerpChannel = function (a, c) {
    var e = new osgAnimation.Sampler;
    a || (a = []);
    c || (c = new osgAnimation.FloatTarget);
    osgAnimation.Channel.call(this, e, c);
    e.setInterpolator(osgAnimation.FloatLerpInterpolator);
    this.setKeyframes(a);
    this._data.value = c.getValue()
};
osgAnimation.FloatLerpChannel.prototype = osgAnimation.Channel.prototype;
osgAnimation.QuatLerpChannel = function (a, c) {
    var e = new osgAnimation.Sampler;
    a || (a = []);
    c || (c = new osgAnimation.QuatTarget);
    osgAnimation.Channel.call(this, e, c);
    e.setInterpolator(osgAnimation.QuatLerpInterpolator);
    this.setKeyframes(a);
    this._data.value = osg.Quat.copy(c.getValue(), [])
};
osgAnimation.QuatLerpChannel.prototype = osgAnimation.Channel.prototype;
osgAnimation.QuatSlerpChannel = function (a, c) {
    osgAnimation.QuatLerpChannel.call(this, a, c);
    this.getSampler().setInterpolator(osgAnimation.QuatSlerpInterpolator)
};
osgAnimation.QuatSlerpChannel.prototype = osgAnimation.Channel.prototype;
osgAnimation.Vec3LerpInterpolator = function (a, c, e) {
    var f,
    g;
    f = a[a.length - 1];
    if (c >= f.t)
        e.key = 0, e.value[0] = f[0], e.value[1] = f[1], e.value[2] = f[2];
    else if (f = a[0], g = f.t, c <= g)
        e.key = 0, e.value[0] = f[0], e.value[1] = f[1], e.value[2] = f[2];
    else {
        for (f = e.key; a[f + 1].t < c; )
            f++;
        g = f + 1;
        var h = a[f].t,
        i = a[f][0],
        k = a[f][1],
        m = a[f][2],
        n = a[g][1],
        p = a[g][2],
        c = (c - h) / (a[g].t - h);
        e.value[0] = i + (a[g][0] - i) * c;
        e.value[1] = k + (n - k) * c;
        e.value[2] = m + (p - m) * c;
        e.key = f
    }
};
osgAnimation.QuatLerpInterpolator = function (a, c, e) {
    var f,
    g;
    f = a[a.length - 1];
    if (c >= f.t)
        e.key = 0, e.value[0] = f[0], e.value[1] = f[1], e.value[2] = f[2], e.value[3] = f[3];
    else if (f = a[0], g = f.t, c <= g)
        e.key = 0, e.value[0] = f[0], e.value[1] = f[1], e.value[2] = f[2], e.value[3] = f[3];
    else {
        for (f = e.key; a[f + 1].t < c; )
            f++;
        g = f + 1;
        var h = a[f].t,
        i = a[f][0],
        k = a[f][1],
        m = a[f][2],
        n = a[f][3],
        p = a[g][1],
        s = a[g][2],
        q = a[g][3],
        c = (c - h) / (a[g].t - h);
        e.value[0] = i + (a[g][0] - i) * c;
        e.value[1] = k + (p - k) * c;
        e.value[2] = m + (s - m) * c;
        e.value[3] = n + (q - n) * c;
        e.key = f
    }
};
osgAnimation.QuatSlerpInterpolator = function (a, c, e) {
    var f,
    g;
    f = a[a.length - 1];
    if (c >= f.t)
        e.key = 0, e.value[0] = f[0], e.value[1] = f[1], e.value[2] = f[2], e.value[3] = f[3];
    else if (f = a[0], g = f.t, c <= g)
        e.key = 0, e.value[0] = f[0], e.value[1] = f[1], e.value[2] = f[2], e.value[3] = f[3];
    else {
        for (f = e.key; a[f + 1].t < c; )
            f++;
        g = f + 1;
        var h = a[f].t;
        osg.Quat.slerp((c - h) / (a[g].t - h), a[f], a[g], e.value);
        e.key = f
    }
};
osgAnimation.FloatLerpInterpolator = function (a, c, e) {
    var f,
    g;
    f = a[a.length - 1];
    if (c >= f.t)
        e.key = 0, e.value = f[0];
    else if (f = a[0], g = f.t, c <= g)
        e.key = 0, e.value = f[0];
    else {
        for (f = e.key; a[f + 1].t < c; )
            f++;
        g = f + 1;
        var h = a[f].t,
        i = a[f][0];
        e.value = i + (a[g][0] - i) * ((c - h) / (a[g].t - h));
        e.key = f
    }
};
osgAnimation.FloatStepInterpolator = function (a, c, e) {
    var f,
    g;
    f = a[a.length - 1];
    if (c >= f.t)
        e.key = 0, e.value = f[0];
    else if (f = a[0], g = f.t, c <= g)
        e.key = 0, e.value = f[0];
    else {
        for (f = e.key; a[f + 1].t < c; )
            f++;
        e.value = a[f][0];
        e.key = f
    }
};
osgAnimation.createVec3Keyframe = function (a, c) {
    var e = c.slice(0);
    e.t = a;
    return e
};
osgAnimation.createQuatKeyframe = function (a, c) {
    var e = c.slice(0);
    e.t = a;
    return e
};
osgAnimation.createFloatKeyframe = function (a, c) {
    var e = [c];
    e.t = a;
    return e
};
osgAnimation.LinkVisitor = function () {
    osg.NodeVisitor.call(this);
    this._animations = void 0;
    this._nbLinkTarget = 0
};
osgAnimation.LinkVisitor.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
        setAnimationMap : function (a) {
            this._animations = a;
            this._animationKeys = Object.keys(a)
        },
        apply : function (a) {
            for (var c = a.getUpdateCallbackList(), e = 0, f = c.length; e < f; e++) {
                var g = c[e];
                g instanceof osgAnimation.AnimationUpdateCallback && this.link(g)
            }
            this.traverse(a)
        },
        link : function (a) {
            for (var c = 0, e = this._animations, f = this._animationKeys, g = 0, h = f.length; g < h; g++)
                c += a.linkAnimation(e[f[g]]);
            this._nbLinkedTarget += c;
            osg.log("linked " + c + ' for "' +
                a.getName() + '"')
        }
    });
osgAnimation.Sampler = function (a, c) {
    a || (a = []);
    this._keys = a;
    this._interpolator = c
};
osgAnimation.Sampler.prototype = {
    getKeyframes : function () {
        return this._keys
    },
    setKeyframes : function (a) {
        this._keys = a
    },
    setInterpolator : function (a) {
        this._interpolator = a
    },
    getInterpolator : function () {
        return this._interpolator
    },
    getStartTime : function () {
        return this._keys.length === 0 ? void 0 : this._keys[0].t
    },
    getEndTime : function () {
        return this._keys.length === 0 ? void 0 : this._keys[this._keys.length - 1].t
    },
    getValueAt : function (a, c) {
        if (this._keys[c.key].t > a)
            c.key = 0;
        this._interpolator(this._keys, a, c)
    }
};
osgAnimation.StackedTranslate = function (a, c) {
    osg.Object.call(this);
    c || (c = [0, 0, 0]);
    this._translate = c;
    this._target = void 0;
    this.setName(a)
};
osgAnimation.StackedTranslate.prototype = osg.objectInehrit(osg.Object.prototype, {
        setTranslate : function (a) {
            osg.Vec3.copy(a, this._translate)
        },
        setTarget : function (a) {
            this._target = a
        },
        getTarget : function () {
            return this._target
        },
        update : function () {
            this._target !== void 0 && osg.Vec3.copy(this._target.getValue(), this._translate)
        },
        getOrCreateTarget : function () {
            if (!this._target)
                this._target = new osgAnimation.Vec3Target(this._translate);
            return this._target
        },
        applyToMatrix : function (a) {
            osg.Matrix.preMultTranslate(a, this._translate)
        }
    });
osgAnimation.StackedRotateAxis = function (a, c, e) {
    osg.Object.call(this);
    c || (c = [1, 0, 0]);
    e || (e = 0);
    this._axis = c;
    this._angle = e;
    this._target = void 0;
    this.setName(a);
    this._matrixTmp = [];
    osg.Matrix.makeIdentity(this._matrixTmp);
    this._quatTmp = [];
    osg.Quat.makeIdentity(this._quatTmp)
};
osgAnimation.StackedRotateAxis.prototype = osg.objectInehrit(osg.Object.prototype, {
        setAxis : function (a) {
            osg.Vec3.copy(a, this._axis)
        },
        setAngle : function (a) {
            this._angle = a
        },
        setTarget : function (a) {
            this._target = a
        },
        getTarget : function () {
            return this._target
        },
        update : function () {
            if (this._target !== void 0)
                this._angle = this._target.getValue()
        },
        getOrCreateTarget : function () {
            if (!this._target)
                this._target = new osgAnimation.FloatTarget(this._angle);
            return this._target
        },
        applyToMatrix : function (a) {
            var c = this._axis,
            e = this._quatTmp,
            f = this._matrixTmp;
            osg.Quat.makeRotate(this._angle, c[0], c[1], c[2], e);
            osg.Matrix.setRotateFromQuat(f, e);
            osg.Matrix.preMult(a, f)
        }
    });
osgAnimation.StackedQuaternion = function (a, c) {
    osg.Object.call(this);
    c || (c = [0, 0, 0, 1]);
    this._quaternion = c;
    this._target = void 0;
    this._matrixTmp = [];
    osg.Matrix.makeIdentity(this._matrixTmp);
    this.setName(a)
};
osgAnimation.StackedQuaternion.prototype = osg.objectInehrit(osg.Object.prototype, {
        setQuaternion : function (a) {
            osg.Quat.copy(a, this._quaternion)
        },
        setTarget : function (a) {
            this._target = a
        },
        getTarget : function () {
            return this._target
        },
        update : function () {
            this._target !== void 0 && osg.Quat.copy(this._target.getValue(), this._quaternion)
        },
        getOrCreateTarget : function () {
            if (!this._target)
                this._target = new osgAnimation.QuatTarget(this._quaternion);
            return this._target
        },
        applyToMatrix : function (a) {
            var c = this._matrixTmp;
            osg.Matrix.setRotateFromQuat(c,
                this._quaternion);
            osg.Matrix.preMult(a, c)
        }
    });
osgAnimation.Target = function () {
    this._lastPriority = this._count = this._priorityWeight = this._weight = 0;
    this._target = void 0
};
osgAnimation.Target.prototype = {
    reset : function () {
        this._priorityWeight = this._weight = 0
    },
    getValue : function () {
        return this._target
    }
};
osgAnimation.Vec3Target = function () {
    osgAnimation.Target.call(this);
    this._target = [0, 0, 0]
};
osgAnimation.Vec3Target.prototype = osg.objectInehrit(osgAnimation.Target.prototype, {
        update : function (a, c, e) {
            if (this._weight || this._priorityWeight) {
                if (this._lastPriority != e)
                    this._weight += this._priorityWeight * (1 - this._weight), this._priorityWeight = 0, this._lastPriority = e;
                this._priorityWeight += a;
                t = (1 - this._weight) * a / this._priorityWeight;
                osg.Vec3.lerp(t, this._target, c, this._target)
            } else
                this._priorityWeight = a, this._lastPriority = e, osg.Vec3.copy(c, this._target)
        }
    });
osgAnimation.FloatTarget = function (a) {
    osgAnimation.Target.call(this);
    this._target = [a]
};
osgAnimation.FloatTarget.prototype = osg.objectInehrit(osgAnimation.Target.prototype, {
        update : function (a, c, e) {
            if (this._weight || this._priorityWeight) {
                if (this._lastPriority != e)
                    this._weight += this._priorityWeight * (1 - this._weight), this._priorityWeight = 0, this._lastPriority = e;
                this._priorityWeight += a;
                t = (1 - this._weight) * a / this._priorityWeight;
                this._target += (c - this._target) * t
            } else
                this._priorityWeight = a, this._lastPriority = e, this._target = c
        }
    });
osgAnimation.QuatTarget = function () {
    osgAnimation.Target.call(this);
    this._target = [];
    osg.Quat.makeIdentity(this._target)
};
osgAnimation.QuatTarget.prototype = osg.objectInehrit(osgAnimation.Target.prototype, {
        update : function (a, c, e) {
            if (this._weight || this._priorityWeight) {
                if (this._lastPriority != e)
                    this._weight += this._priorityWeight * (1 - this._weight), this._priorityWeight = 0, this._lastPriority = e;
                this._priorityWeight += a;
                t = (1 - this._weight) * a / this._priorityWeight;
                osg.Quat.lerp(t, this._target, c, this._target);
                osg.Quat.normalize(this._target, this._target)
            } else
                this._priorityWeight = a, this._lastPriority = e, osg.Quat.copy(c, this._target)
        }
    });
osgAnimation.AnimationUpdateCallback = function () {};
osgAnimation.AnimationUpdateCallback.prototype = osg.objectInehrit(osg.Object.prototype, {
        linkChannel : function () {},
        linkAnimation : function (a) {
            var c = this.getName();
            if (c.length === 0)
                return osg.log("no name on an update callback, discard"), 0;
            for (var e = 0, a = a.getChannels(), f = 0, g = a.length; f < g; f++) {
                var h = a[f];
                h.getTargetName() === c && (this.linkChannel(h), e++)
            }
            return e
        }
    });
osgAnimation.UpdateMatrixTransform = function () {
    osgAnimation.AnimationUpdateCallback.call(this);
    this._stackedTransforms = []
};
osgAnimation.UpdateMatrixTransform.prototype = osg.objectInehrit(osgAnimation.AnimationUpdateCallback.prototype, {
        getStackedTransforms : function () {
            return this._stackedTransforms
        },
        update : function (a) {
            a = a.getMatrix();
            osg.Matrix.makeIdentity(a);
            for (var c = this._stackedTransforms, e = 0, f = c.length; e < f; e++) {
                var g = c[e];
                g.update();
                g.applyToMatrix(a)
            }
            return !0
        },
        linkChannel : function (a) {
            for (var c = a.getName(), e = this._stackedTransforms, f = 0, g = e.length; f < g; f++) {
                var h = e[f],
                i = h.getName();
                if (c.length > 0 && i === c && (h = h.getOrCreateTarget()))
                    return a.setTarget(h),
                    !0
            }
            osg.log("can't link channel " + c + ", does not contain a symbolic name that can be linked to TransformElements")
        }
    });
var osgUtil = {
    TriangleHit : function (a, c, e, f, g, h, i, k) {
        this.index = a;
        this.normal = c;
        this.r1 = e;
        this.v1 = f;
        this.r2 = g;
        this.v2 = h;
        this.r3 = i;
        this.v3 = k
    },
    TriangleIntersect : function () {
        this.hits = [];
        this.nodePath = []
    }
};
osgUtil.TriangleIntersect.prototype = {
    setNodePath : function (a) {
        this.nodePath = a
    },
    set : function (a, c) {
        this.start = a;
        this.end = c;
        this.dir = osg.Vec3.sub(c, a, []);
        this.length = osg.Vec3.length(this.dir);
        osg.Vec3.mult(this.dir, 1 / this.length, this.dir)
    },
    applyDrawElementsTriangles : function (a, c, e) {
        for (var f = [], g = [], h = [], i, k = 0; k < a; k += 3)
            i = e[k] * 3, f[0] = c[i], f[1] = c[i + 1], f[2] = c[i + 2], i = e[k + 1] * 3, g[0] = c[i], g[1] = c[i + 1], g[2] = c[i + 2], i = e[k + 2] * 3, h[0] = c[i], h[1] = c[i + 1], h[2] = c[i + 2], this.intersect(f, g, h)
    },
    applyDrawElementsTriangleStrip : function (a,
        c, e) {
        for (var f = [], g = [], h = [], i, k, m, n = 2, p = 0; n < a; n++, p++)
            n % 2 ? (i = e[p] * 3, k = e[p + 2] * 3, m = e[p + 1] * 3) : (i = e[p] * 3, k = e[p + 1] * 3, m = e[p + 2] * 3), f[0] = c[i], f[1] = c[i + 1], f[2] = c[i + 2], g[0] = c[k], g[1] = c[k + 1], g[2] = c[k + 2], h[0] = c[m], h[1] = c[m + 1], h[2] = c[m + 2], this.intersect(f, g, h)
    },
    applyDrawElementsTriangleFan : function (a, c, e) {
        var f = [],
        g = [],
        h = [],
        i = e[0] * 3;
        f[0] = c[i];
        f[1] = c[i + 1];
        f[2] = c[i + 2];
        for (var k, m = 2, n = 1; m < a; m++, n++)
            i = e[n] * 3, k = e[n + 1] * 3, g[0] = c[i], g[1] = c[i + 1], g[2] = c[i + 2], h[0] = c[k], h[1] = c[k + 1], h[2] = c[k + 2], this.intersect(f, g, h)
    },
    applyDrawArraysTriangles : function (a,
        c, e) {
        for (var f = [], g = [], h = []; a < c; a += 9)
            f[0] = e[a], f[1] = e[a + 1], f[2] = e[a + 2], g[0] = e[a + 3], g[1] = e[a + 4], g[2] = e[a + 5], h[0] = e[a + 6], h[1] = e[a + 7], h[2] = e[a + 8], this.intersect(f, g, h)
    },
    applyDrawArraysTriangleStrip : function (a, c, e) {
        for (var f = [], g = [], h = [], i, k, m = 2, n = a; m < c; m++, n++)
            m % 2 ? (a = n * 3, i = (n + 2) * 3, k = (n + 1) * 3) : (a = n * 3, i = (n + 1) * 3, k = (n + 2) * 3), f[0] = e[a], f[1] = e[a + 1], f[2] = e[a + 2], g[0] = e[i], g[1] = e[i + 1], g[2] = e[i + 2], h[0] = e[k], h[1] = e[k + 1], h[2] = e[k + 2], this.intersect(f, g, h)
    },
    applyDrawArraysTriangleFan : function (a, c, e) {
        var f = [],
        g = [],
        h =
            [],
        i = a * 3;
        f[0] = e[i];
        f[1] = e[i + 1];
        f[2] = e[i + 2];
        for (var k, i = 2, m = a + 1; i < c; i++, m++)
            a = m * 3, k = (m + 1) * 3, g[0] = e[a], g[1] = e[a + 1], g[2] = e[a + 2], h[0] = e[k], h[1] = e[k + 1], h[2] = e[k + 2], this.intersect(f, g, h)
    },
    apply : function (a) {
        if (a.getAttributes().Vertex)
            for (var c, e = a.getAttributes().Vertex.getElements(), f = this.index = 0, g = a.primitives.length; f < g; f++)
                if (c = a.primitives[f], c.getIndices !== void 0) {
                    var h = c.indices.getElements();
                    switch (c.getMode()) {
                    case gl.TRIANGLES:
                        this.applyDrawElementsTriangles(c.getCount(), e, h);
                        break;
                    case gl.TRIANGLE_STRIP:
                        this.applyDrawElementsTriangleStrip(c.getCount(),
                            e, h);
                        break;
                    case gl.TRIANGLE_FAN:
                        this.applyDrawElementsTriangleFan(c.getCount(), e, h)
                    }
                } else
                    switch (c.getMode()) {
                    case gl.TRIANGLES:
                        this.applyDrawArraysTriangles(c.getFirst(), c.getCount(), e);
                        break;
                    case gl.TRIANGLE_STRIP:
                        this.applyDrawArraysTriangleStrip(c.getFirst(), c.getCount(), e);
                        break;
                    case gl.TRIANGLE_FAN:
                        this.applyDrawArraysTriangleFan(c.getFirst(), c.getCount(), e)
                    }
    },
    intersect : function (a, c, e) {
        this.index++;
        if (!(a == c || c == e || a == e)) {
            var f = osg.Vec3.sub(c, a, []),
            g = osg.Vec3.cross(f, this.dir, []),
            h = osg.Vec3.dot(osg.Vec3.sub(this.start,
                        a, []), g),
            i = osg.Vec3.dot(osg.Vec3.sub(e, a, []), g);
            if (i >= 0) {
                if (h < 0)
                    return;
                if (h > i)
                    return
            } else {
                if (h > 0)
                    return;
                if (h < i)
                    return
            }
            var g = osg.Vec3.sub(e, c, []),
            k = osg.Vec3.cross(g, this.dir, []),
            m = osg.Vec3.dot(osg.Vec3.sub(this.start, c, []), k),
            k = osg.Vec3.dot(osg.Vec3.sub(a, c, []), k);
            if (k >= 0) {
                if (m < 0)
                    return;
                if (m > k)
                    return
            } else {
                if (m > 0)
                    return;
                if (m < k)
                    return
            }
            var n = osg.Vec3.sub(a, e, []),
            p = osg.Vec3.cross(n, this.dir, []),
            n = osg.Vec3.dot(osg.Vec3.sub(this.start, e, []), p),
            p = osg.Vec3.dot(osg.Vec3.sub(c, e, []), p);
            if (p >= 0) {
                if (n < 0)
                    return;
                if (n > p)
                    return
            } else {
                if (n > 0)
                    return;
                if (n < p)
                    return
            }
            if (h === 0)
                h = 0;
            else if (i !== 0)
                h /= i;
            else
                return;
            if (m === 0)
                m = 0;
            else if (k !== 0)
                m /= k;
            else
                return;
            if (n === 0)
                i = 0;
            else if (p !== 0)
                i = n / p;
            else
                return;
            k = m + i + h;
            if (k !== 1) {
                if (k === 0)
                    return;
                k = 1 / k;
                m *= k;
                i *= k;
                h *= k
            }
            k = [];
            osg.Vec3.add(osg.Vec3.mult(a, m, []), osg.Vec3.mult(c, i, []), k);
            osg.Vec3.add(osg.Vec3.mult(e, h, []), k, k);
            if (osg.Vec3.valid(k)) {
                if (k = osg.Vec3.dot(osg.Vec3.sub(k, this.start, []), this.dir), !(k < 0) && !(k > this.length))
                    f = osg.Vec3.cross(f, g, []), osg.Vec3.normalize(f, f), g = k / this.length,
                    k = [], k[0] = this.start[0] * (1 - g) + this.end[0] * g, k[1] = this.start[1] * (1 - g) + this.end[1] * g, k[2] = this.start[2] * (1 - g) + this.end[2] * g, this.hits.push({
                        ratio : g,
                        nodepath : this.nodePath.slice(0),
                        triangleHit : new osgUtil.TriangleHit(this.index - 1, f, m, a, i, c, h, e),
                        point : k
                    }), this.hit = !0
            } else
                osg.log("Warning: TriangleIntersect "), osg.log("hit:     " + k), osg.log("         " + a), osg.log("         " + c), osg.log("         " + e)
        }
    }
};
osgUtil.IntersectVisitor = function () {
    osg.NodeVisitor.call(this);
    this.matrix = [];
    this.hits = [];
    this.nodePath = []
};
osgUtil.IntersectVisitor.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
        addLineSegment : function (a, c) {
            this.start = a;
            this.end = c
        },
        intersectSegmentWithSphere : function (a, c, e) {
            var f = osg.Vec3.sub(a, e.center),
            e = osg.Vec3.length2(f) - e.radius * e.radius;
            if (e < 0)
                return !0;
            c = osg.Vec3.sub(c, a);
            a = osg.Vec3.length2(c);
            f = osg.Vec3.dot(f, c) * 2;
            e = f * f - 4 * a * e;
            if (e < 0)
                return !1;
            e = Math.sqrt(e);
            c = 0.5 * a;
            a = (-f - e) * c;
            f = (-f + e) * c;
            return a <= 0 && f <= 0 ? !1 : a >= 1 && f >= 1 ? !1 : !0
        },
        pushModelMatrix : function (a) {
            if (this.matrix.length > 0) {
                var c = osg.Matrix.copy(this.matrix[this.matrix.length -
                            1]);
                osg.Matrix.preMult(c, a);
                this.matrix.push(c)
            } else
                this.matrix.push(a)
        },
        getModelMatrix : function () {
            return this.matrix.length === 0 ? osg.Matrix.makeIdentity([]) : this.matrix[this.matrix.length - 1]
        },
        popModelMatrix : function () {
            return this.matrix.pop()
        },
        getWindowMatrix : function () {
            return this.windowMatrix
        },
        getProjectionMatrix : function () {
            return this.projectionMatrix
        },
        getViewMatrix : function () {
            return this.viewMatrix
        },
        intersectSegmentWithGeometry : function (a, c, e) {
            ti = new osgUtil.TriangleIntersect;
            ti.setNodePath(this.nodePath);
            ti.set(a, c);
            ti.apply(e);
            a = ti.hits.length;
            if (a > 0) {
                for (c = 0; c < a; c++)
                    this.hits.push(ti.hits[c]);
                return !0
            }
            return !1
        },
        pushCamera : function (a) {
            this.projectionMatrix = a.getProjectionMatrix();
            this.viewMatrix = a.getViewMatrix();
            a = a.getViewport();
            if (a !== void 0)
                this.windowMatrix = a.computeWindowMatrix()
        },
        applyCamera : function (a) {
            this.pushCamera(a);
            this.traverse(a)
        },
        applyNode : function (a) {
            a.getMatrix && this.pushModelMatrix(a.getMatrix());
            if (a.primitives) {
                var c = [];
                osg.Matrix.copy(this.getWindowMatrix(), c);
                osg.Matrix.preMult(c,
                    this.getProjectionMatrix());
                osg.Matrix.preMult(c, this.getViewMatrix());
                osg.Matrix.preMult(c, this.getModelMatrix());
                var e = [];
                if (!osg.Matrix.inverse(c, e))
                    return;
                c = osg.Matrix.transformVec3(e, this.start, Array(3));
                e = osg.Matrix.transformVec3(e, this.end, Array(3));
                this.intersectSegmentWithGeometry(c, e, a)
            }
            a.traverse && this.traverse(a);
            a.getMatrix && this.popModelMatrix()
        },
        apply : function (a) {
            this.enterNode(a) !== !1 && (a.getViewMatrix ? this.applyCamera(a) : this.applyNode(a))
        },
        enterNode : function (a) {
            return a.boundingSphere !==
            void 0 && !this.intersectSegmentWithSphere ? !1 : !0
        }
    });
(function () {
    var a = function (a) {
        if (a !== void 0)
            a.object !== void 0 && a.field !== void 0 && this.createInternalSlider(param), this._uniform = this.createInternalSliderUniform(param)
    };
    a.prototype = {
        setTargetHTML : function (a) {
            this.parent = a
        },
        addToDom : function (a) {
            var e = document.createElement("div");
            e.innerHTML = a;
            this.parent.appendChild(e)
        },
        getValue : function (a) {
            return window.localStorage ? window.localStorage.getItem(a) : null
        },
        setValue : function (a, e) {
            window.localStorage && window.localStorage.setItem(a, e)
        },
        createHTMLSlider : function (a,
            e, f, g) {
            var h = a.max,
            i = a.step,
            k = g + "(this.value)",
            a = '<div>NAME [ MIN - MAX ] <input type="range" min="MIN" max="MAX" value="VALUE" step="STEP" onchange="ONCHANGE" /><span id="UPDATE"></span></div>'.replace(/MIN/g, a.min),
            a = a.replace(/MAX/g, h + i),
            a = a.replace("STEP", i),
            a = a.replace("VALUE", e),
            a = a.replace(/NAME/g, f),
            a = a.replace(/UPDATE/g, g);
            return a = a.replace("ONCHANGE", k)
        },
        createUniformFunction : function (a, e, f, g, h) {
            self = this;
            return function () {
                return function (i) {
                    g.get()[f] = i;
                    g.dirty();
                    osg.debug(e + " value " +
                        i);
                    document.getElementById(h).innerHTML = Number(i).toFixed(4);
                    self.setValue(h, i);
                    if (a.onchange !== void 0)
                        a.onchange(g.get())
                }
            }
            ()
        },
        createFunction : function (a, e, f, g, h, i) {
            self = this;
            return function () {
                return function (k) {
                    typeof k === "string" && (k = parseFloat(k));
                    typeof g[h] === "number" ? g[h] = k : g[h][f] = k;
                    osg.debug(e + " value " + k);
                    document.getElementById(i).innerHTML = Number(k).toFixed(4);
                    self.setValue(i, k);
                    if (a.onchange !== void 0)
                        a.onchange(g[h])
                }
            }
            ()
        },
        getCallbackName : function (a, e) {
            return "change_" + e + "_" + a
        },
        copyDefaultValue : function (a) {
            var e =
                a.value;
            return e = Array.isArray(a.value) ? a.value.slice() : [e]
        },
        createInternalSliderUniform : function (a) {
            var e = a.value,
            f = a.uniform;
            if (f === void 0)
                f = a.type, f = f.charAt(0).toUpperCase() + f.slice(1), f = osg.Uniform["create" + f](e, a.name);
            for (var g = this.getCallbackName(a.name, a.id), h = e.length, i = 0; i < h; i++) {
                var k = i.toString(),
                m = a.name + k,
                k = g + k,
                n = e[i],
                p = this.getValue(k);
                p !== null ? n = p : a.uniform && a.uniform.get()[i] !== void 0 && (n = a.uniform.get()[i]);
                this.addToDom(this.createHTMLSlider(a, n, m, k));
                window[k] = this.createUniformFunction(a,
                        m, i, f, k);
                osg.log(m + " " + n);
                window[k](n)
            }
            return this.uniform = f
        },
        createInternalSlider : function (a) {
            for (var e = a.value, f = a.name, g = e.length, h = this.getCallbackName(f, a.id), i = a.object, k = a.field, m = 0; m < g; m++) {
                var n = m.toString(),
                p = f + n,
                n = h + n,
                s = e[m],
                s = this.getValue(n),
                s = s !== null ? s : typeof i[k] === "number" ? i[k] : i[k][m];
                this.addToDom(this.createHTMLSlider(a, s, p, n));
                window[n] = this.createFunction(a, p, m, i, k, n);
                osg.log(p + " " + s);
                window[n](s)
            }
        },
        createSlider : function (a) {
            a.html !== void 0 && this.setTargetHTML(a.html);
            if (a.id ===
                void 0)
                a.id = a.name;
            a.value = this.copyDefaultValue(a);
            if (a.type !== void 0)
                return this.createInternalSliderUniform(a);
            else {
                if (a.object === void 0)
                    a.object = {
                        data : a.value
                    },
                a.field = "data";
                return this.createInternalSlider(a)
            }
        }
    };
    osgUtil.ParameterVisitor = function () {
        osg.NodeVisitor.call(this);
        this.arraySlider = new a;
        this.setTargetHTML(document.body)
    };
    osgUtil.ParameterVisitor.createSlider = function (c) {
        (new a).createSlider(c)
    };
    osgUtil.ParameterVisitor.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
            setTargetHTML : function (a) {
                this.targetHTML =
                    a;
                this.arraySlider.setTargetHTML(this.targetHTML)
            },
            getUniformList : function (a, e) {
                var f = a.match(RegExp("(uniform).*?((?:[a-z][a-z]+)).*?((?:[a-z][a-z]+)).*?..*?..*?(.)(.).*?(\\{.*?\\})", ["g"]));
                if (f !== null)
                    for (var g = RegExp("(uniform).*?((?:[a-z][a-z]+)).*?((?:[a-z][a-z]+)).*?..*?..*?(.)(.).*?(\\{.*?\\})", ["i"]), h = 0, i = f.length; h < i; h++) {
                        var k = f[h].match(g);
                        if (k !== null) {
                            var m = k[2],
                            n = k[3],
                            k = JSON.parse(k[6]);
                            k.type = m;
                            k.name = n;
                            var p = k.value;
                            k.value = function () {
                                return p
                            };
                            e[n] = k
                        }
                    }
                return e
            },
            getUniformFromStateSet : function (a,
                e) {
                var f = a.getUniformList();
                if (f)
                    for (var g = Object.keys(e), h = 0, i = g.length; h < i; h++) {
                        var k = g[h];
                        if (f[k] !== void 0 && e[k].uniform === void 0)
                            e[k].uniform = f[k].object
                    }
            },
            findExistingUniform : function (a, e) {
                var f = function () {
                    osg.NodeVisitor.call(this, osg.NodeVisitor.TRAVERSE_PARENTS)
                };
                f.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
                        setUniformMap : function (a) {
                            this.uniformMap = a
                        },
                        apply : function (a) {
                            var c = a.getStateSet();
                            c && osgUtil.ParameterVisitor.prototype.getUniformFromStateSet(c, this.uniformMap);
                            this.traverse(a)
                        }
                    });
                f = new f;
                f.setUniformMap(e);
                a.accept(f)
            },
            applyProgram : function (a, e) {
                var f = e.getAttribute("Program"),
                g = f.getName();
                f.getVertexShader().getText();
                var h = {};
                this.getUniformList(f.getVertexShader().getText(), h);
                this.getUniformList(f.getFragmentShader().getText(), h);
                f = Object.keys(h);
                g === void 0 && (g = function (a) {
                    var c = 0,
                    e = 0;
                    if (a.length == 0)
                        return c;
                    for (k = 0; k < a.length; k++)
                        e = a.charCodeAt(k), c = (c << 5) - c + e, c &= c;
                    c < 0 && (c = -c);
                    return c
                }
                    (f.join("")).toString());
                this.findExistingUniform(a, h);
                for (var i = !1, k = 0; k < f.length; k++) {
                    i =
                        h[f[k]];
                    i.id = g;
                    var m = this.arraySlider.createSlider(i);
                    i.uniform === void 0 && m && e.addUniform(m);
                    i = !0
                }
                if (i)
                    g = document.createElement("div"), g.innerHTML = "<p> </p>", this.targetHTML.appendChild(g);
                osg.log(h)
            },
            applyStateSet : function (a, e) {
                e.getAttribute("Program") !== void 0 && this.applyProgram(a, e)
            },
            apply : function (a) {
                var e = this.targetHTML;
                e === void 0 || e === null || (e = a.getStateSet(), e !== void 0 && this.applyStateSet(a, e), this.traverse(a))
            }
        })
})();
(function () {
    osgUtil.Composer = function () {
        osg.Node.call(this);
        this._stack = [];
        this._dirty = this._renderToScreen = !1;
        var a = function () {};
        a.prototype = {
            update : function (a) {
                a.isDirty() && a.build()
            }
        };
        this.setUpdateCallback(new a);
        this.getOrCreateStateSet().setAttributeAndModes(new osg.Depth("DISABLE"))
    };
    osgUtil.Composer.prototype = osg.objectInehrit(osg.Node.prototype, {
            dirty : function () {
                for (var a = 0, c = this._stack.length; a < c; a++)
                    this._stack[a].filter.dirty()
            },
            addPass : function (a, c, e) {
                c instanceof osg.Texture ? this._stack.push({
                    filter : a,
                    texture : c
                }) : c !== void 0 && e !== void 0 ? this._stack.push({
                    filter : a,
                    width : Math.floor(c),
                    height : Math.floor(e)
                }) : this._stack.push({
                    filter : a
                })
            },
            renderToScreen : function (a, c) {
                this._renderToScreen = !0;
                this._renderToScreenWidth = a;
                this._renderToScreenHeight = c
            },
            isDirty : function () {
                for (var a = 0, c = this._stack.length; a < c; a++)
                    if (this._stack[a].filter.isDirty())
                        return !0;
                return !1
            },
            build : function () {
                var a = this;
                this.removeChildren();
                var c,
                e = this;
                this._stack.forEach(function (f, g, h) {
                    f.filter.isDirty() && f.filter.build();
                    var i =
                        f.filter.getStateSet(),
                    k;
                    f.texture !== void 0 ? (i = f.texture.getWidth(), k = f.texture.getHeight()) : f.width !== void 0 && f.height !== void 0 ? (i = f.width, k = f.height) : (k = i.getTextureAttribute(0, "Texture"), k === void 0 && osg.warn("osgComposer can't find any information to setup texture output size"), i = k.getWidth(), k = k.getHeight());
                    var m = new osg.Camera;
                    m.setClearMask(0);
                    var n,
                    p;
                    g === h.length - 1 && e._renderToScreen === !0 ? (i = e._renderToScreenWidth, k = e._renderToScreenHeight) : (m.setRenderOrder(osg.Camera.PRE_RENDER, 0), n = f.texture,
                        n === void 0 && (n = new osg.Texture, n.setTextureSize(i, k)), m.attachTexture(osg.FrameBufferObject.COLOR_ATTACHMENT0, n, 0));
                    p = new osg.Viewport(0, 0, i, k);
                    var s = osg.Matrix.makeOrtho(-i / 2, i / 2, -k / 2, k / 2, -5, 5, []);
                    m.setReferenceFrame(osg.Transform.ABSOLUTE_RF);
                    m.setViewport(p);
                    m.setProjectionMatrix(s);
                    m.setStateSet(f.filter.getStateSet());
                    p = osg.createTexturedQuadGeometry(-i / 2, -k / 2, 0, i, 0, 0, 0, k, 0);
                    f.filter.buildGeometry !== void 0 && (p = f.filter.buildGeometry(p));
                    p.setName("composer layer");
                    c = n;
                    g + 1 < h.length && h[g + 1].filter.getStateSet().setTextureAttributeAndModes(0,
                        c);
                    m.addChild(p);
                    f.filter.getStateSet().addUniform(osg.Uniform.createFloat2([i, k], "RenderSize"));
                    m.setName("Composer Pass" + g);
                    a.addChild(m)
                });
                this._resultTexture = c
            }
        });
    osgUtil.Composer.Filter = function () {
        this._stateSet = new osg.StateSet;
        this._dirty = !0
    };
    osgUtil.Composer.Filter.prototype = {
        getStateSet : function () {
            return this._stateSet
        },
        dirty : function () {
            this._dirty = !0
        },
        isDirty : function () {
            return this._dirty
        }
    };
    osgUtil.Composer.Filter.defaultVertexShader = "#ifdef GL_ES\nprecision highp float;\n#endif\nattribute vec3 Vertex;\nattribute vec2 TexCoord0;\nvarying vec2 FragTexCoord0;\nuniform mat4 ModelViewMatrix;\nuniform mat4 ProjectionMatrix;\nvoid main(void) {\n  gl_Position = ProjectionMatrix * ModelViewMatrix * vec4(Vertex,1.0);\n  FragTexCoord0 = TexCoord0;\n}\n";
    osgUtil.Composer.Filter.defaultFragmentShaderHeader = "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec2 FragTexCoord0;\nuniform vec2 RenderSize;\nuniform sampler2D Texture0;\n";
    osgUtil.Composer.Filter.shaderUtils = "vec4 packFloatTo4x8(in float v) {\nvec4 enc = vec4(1.0, 255.0, 65025.0, 160581375.0) * v;\nenc = fract(enc);\nenc -= enc.yzww * vec4(1.0/255.0,1.0/255.0,1.0/255.0,0.0);\nreturn enc;\n}\n \nvec4 pack2FloatTo4x8(in vec2 val) {\n const vec2 bitSh = vec2(256.0, 1.0);\n const vec2 bitMsk = vec2(0.0, 1.0/256.0);\n vec2 res1 = fract(val.x * bitSh);\n res1 -= res1.xx * bitMsk;\n vec2 res2 = fract(val.y * bitSh);\n res2 -= res2.xx * bitMsk;\n return vec4(res1.x,res1.y,res2.x,res2.y);\n}\n \nfloat unpack4x8ToFloat( vec4 rgba ) {\n return dot( rgba, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/160581375.0) );\n}\n \nvec2 unpack4x8To2Float(in vec4 val) {\n const vec2 unshift = vec2(1.0/256.0, 1.0);\n return vec2(dot(val.xy, unshift), dot(val.zw, unshift));\n}\nvec2 encodeNormal (vec3 n)\n{\n    float f = sqrt(8.0*n.z+8.0);\n    return n.xy / f + 0.5;\n}\nvec3 decodeNormal (vec2 enc)\n{\n    vec2 fenc = enc*4.0-2.0;\n    float f = dot(fenc,fenc);\n    float g = sqrt(1.0-f/4.0);\n    vec3 n;\n    n.xy = fenc*g;\n    n.z = 1.0-f/2.0;\n    return n;\n}\n";
    osgUtil.Composer.Filter.Helper = {
        getOrCreatePascalCoefficients : function () {
            var a = osgUtil.Composer.Filter.Helper.getOrCreatePascalCoefficients.cache;
            if (a !== void 0)
                return a;
            a = function (a) {
                for (var e = [[1]], f = 0; f < a - 1; f++) {
                    Math.pow(2, f);
                    var g = e[f],
                    h = g.length,
                    i = h + 1,
                    k = Array(h);
                    k[0] = 1;
                    for (var i = k[i - 1] = 1, m = 0; m < h - 1; m++) {
                        var n = g[m] + g[m + 1];
                        k[i++] = n
                    }
                    e.push(k)
                }
                (function () {
                    for (var a = 0; a < e.length; a++)
                        for (var c = e[a], f = Math.pow(2, a), g = 0; g < c.length; g++)
                            c[g] /= f
                })();
                return e
            }
            (20);
            return osgUtil.Composer.Filter.Helper.getOrCreatePascalCoefficients.cache =
                a
        }
    };
    osgUtil.Composer.Filter.Custom = function (a, c) {
        osgUtil.Composer.Filter.call(this);
        this._fragmentShader = a;
        this._uniforms = c;
        this._vertexShader = osgUtil.Composer.Filter.defaultVertexShader
    };
    osgUtil.Composer.Filter.Custom.prototype = osg.objectInehrit(osgUtil.Composer.Filter.prototype, {
            build : function () {
                var a = new osg.Program(new osg.Shader(gl.VERTEX_SHADER, this._vertexShader), new osg.Shader(gl.FRAGMENT_SHADER, this._fragmentShader));
                if (this._uniforms) {
                    var c = 0,
                    e = this._fragmentShader.match(/uniform\s+\w+\s+\w+/g);
                    if (e !== null)
                        for (var f = 0, g = e.length; f < g; f++) {
                            var h = e[f].match(/uniform\s+(\w+)\s+(\w+)/),
                            i = h[1],
                            h = h[2];
                            this._uniforms[h] !== void 0 && (uniform_value = this._uniforms[h], i.search("sampler") !== -1 ? (this._stateSet.setTextureAttributeAndModes(c, uniform_value), i = osg.Uniform.createInt1(c, h), c++) : i = osg.Uniform.isUniform(uniform_value) ? uniform_value : osg.Uniform[i](this._uniforms[h], h), this._stateSet.addUniform(i))
                        }
                }
                this._stateSet.setAttributeAndModes(a);
                this._dirty = !1
            }
        });
    osgUtil.Composer.Filter.AverageHBlur = function (a) {
        osgUtil.Composer.Filter.call(this);
        a === void 0 ? this.setBlurSize(5) : this.setBlurSize(a);
        this._pixelSize = 1
    };
    osgUtil.Composer.Filter.AverageHBlur.prototype = osg.objectInehrit(osgUtil.Composer.Filter.prototype, {
            setBlurSize : function (a) {
                a % 2 !== 1 && (a += 1);
                this._nbSamples = a;
                this.dirty()
            },
            setPixelSize : function (a) {
                this._pixelSize = a;
                this.dirty()
            },
            getUVOffset : function (a) {
                return "vec2(float(" + a + "), 0.0)/RenderSize[0];"
            },
            getShaderBlurKernel : function () {
                var a = this._nbSamples,
                c = [];
                c.push(" pixel = texture2D(Texture0, FragTexCoord0 );");
                c.push(" if (pixel.w == 0.0) { gl_FragColor = pixel; return; }");
                c.push(" vec2 offset;");
                for (var e = 1; e < Math.ceil(a / 2); e++)
                    c.push(" offset = " + this.getUVOffset(e * this._pixelSize)), c.push(" pixel += texture2D(Texture0, FragTexCoord0 + offset);"), c.push(" pixel += texture2D(Texture0, FragTexCoord0 - offset);");
                c.push(" pixel /= float(" + a + ");");
                return c
            },
            build : function () {
                var a = osgUtil.Composer.Filter.defaultVertexShader,
                c = [osgUtil.Composer.Filter.defaultFragmentShaderHeader, "uniform float width;\nvoid main (void)\n{\n  vec4 pixel;", this.getShaderBlurKernel().join("\n"),
                    "  gl_FragColor = vec4(pixel);\n}\n"].join("\n"),
                a = new osg.Program(new osg.Shader(gl.VERTEX_SHADER, a), new osg.Shader(gl.FRAGMENT_SHADER, c));
                this._stateSet.getUniform("Texture0") === void 0 && this._stateSet.addUniform(osg.Uniform.createInt1(0, "Texture0"));
                this._stateSet.setAttributeAndModes(a);
                this._dirty = !1
            }
        });
    osgUtil.Composer.Filter.AverageVBlur = function (a) {
        osgUtil.Composer.Filter.AverageHBlur.call(this, a)
    };
    osgUtil.Composer.Filter.AverageVBlur.prototype = osg.objectInehrit(osgUtil.Composer.Filter.AverageHBlur.prototype, {
            getUVOffset : function (a) {
                return "vec2(0.0, float(" + a + "))/RenderSize[1];"
            }
        });
    osgUtil.Composer.Filter.BilateralHBlur = function (a) {
        osgUtil.Composer.Filter.call(this);
        a === void 0 && (a = {});
        var c = a.nbSamples,
        e = a.depthTexture,
        a = a.radius;
        c === void 0 ? this.setBlurSize(5) : this.setBlurSize(c);
        this._depthTexture = e;
        this._radius = osg.Uniform.createFloat(1, "radius");
        this._pixelSize = osg.Uniform.createFloat(1, "pixelSize");
        this.setRadius(a)
    };
    osgUtil.Composer.Filter.BilateralHBlur.prototype = osg.objectInehrit(osgUtil.Composer.Filter.prototype, {
            setBlurSize : function (a) {
                a % 2 !== 1 && (a += 1);
                osg.log("BlurSize " + a);
                this._nbSamples = a;
                this.dirty()
            },
            setPixelSize : function (a) {
                this._pixelSize.get()[0] = a;
                this._pixelSize.dirty()
            },
            setRadius : function (a) {
                this._radius.get()[0] = a;
                this._radius.dirty()
            },
            getUVOffset : function (a) {
                return "vec2(0.0, float(" + a + ") * pixelSize )/RenderSize[1];"
            },
            getShaderBlurKernel : function () {
                var a = this._nbSamples,
                c = [];
                c.push(" pixel = texture2D(Texture0, FragTexCoord0 );");
                c.push(" if (pixel.w <= 0.0001) { gl_FragColor = vec4(1.0); return; }");
                c.push(" vec2 offset, tmpUV;");
                c.push(" depth = getDepthValue(texture2D(Texture1, FragTexCoord0 ));");
                for (var e = 1; e < Math.ceil(a / 2); e++)
                    c.push(" offset = " + this.getUVOffset(e)), c.push(" tmpUV =  FragTexCoord0 + offset;"), c.push(" tmpDepth = getDepthValue(texture2D(Texture1, tmpUV ));"), c.push(" if ( abs(depth-tmpDepth) < radius) {"), c.push("   pixel += texture2D(Texture0, tmpUV);"), c.push("   nbHits += 1.0;"), c.push(" }"), c.push(" tmpUV =  FragTexCoord0 - offset;"), c.push(" tmpDepth = getDepthValue(texture2D(Texture1, tmpUV ));"),
                    c.push(" if ( abs(depth-tmpDepth) < radius) {"), c.push("   pixel += texture2D(Texture0, tmpUV);"), c.push("   nbHits += 1.0;"), c.push(" }");
                c.push(" pixel /= nbHits;");
                return c
            },
            build : function () {
                var a = osgUtil.Composer.Filter.defaultVertexShader,
                c = [osgUtil.Composer.Filter.defaultFragmentShaderHeader, "uniform sampler2D Texture1;\nuniform float width;\nuniform mat4 projection;\nuniform float radius;\nuniform float pixelSize;\nfloat znear,zfar,zrange;\n", osgUtil.Composer.Filter.shaderUtils, "\nfloat getDepthValue(vec4 v) {\n  float depth = unpack4x8ToFloat(v);\n  depth = depth*zrange+znear;\n  return -depth;\n}\nvoid main (void)\n{\n  vec4 pixel;\n  float depth, tmpDepth;\n  znear = projection[3][2] / (projection[2][2]-1.0);\n  zfar = projection[3][2] / (projection[2][2]+1.0);\n  zrange = zfar-znear;\n  float nbHits = 1.0;",
                    this.getShaderBlurKernel().join("\n"), "  gl_FragColor = vec4(pixel);\n}\n"].join("\n"),
                a = new osg.Program(new osg.Shader(gl.VERTEX_SHADER, a), new osg.Shader(gl.FRAGMENT_SHADER, c));
                this._stateSet.getUniform("Texture0") === void 0 && this._stateSet.addUniform(osg.Uniform.createInt1(0, "Texture0"));
                this._stateSet.getUniform("Texture1") === void 0 && this._stateSet.addUniform(osg.Uniform.createInt1(1, "Texture1"));
                this._stateSet.addUniform(this._radius);
                this._stateSet.addUniform(this._pixelSize);
                this._stateSet.setTextureAttributeAndModes(1,
                    this._depthTexture);
                this._stateSet.setAttributeAndModes(a);
                this._dirty = !1
            }
        });
    osgUtil.Composer.Filter.BilateralVBlur = function (a) {
        osgUtil.Composer.Filter.BilateralHBlur.call(this, a)
    };
    osgUtil.Composer.Filter.BilateralVBlur.prototype = osg.objectInehrit(osgUtil.Composer.Filter.BilateralHBlur.prototype, {
            getUVOffset : function (a) {
                return "vec2(float(" + a + ")*pixelSize,0.0)/RenderSize[0];"
            }
        });
    osgUtil.Composer.Filter.InputTexture = function (a) {
        osgUtil.Composer.Filter.call(this);
        this._stateSet.setTextureAttributeAndModes(0,
            a)
    };
    osgUtil.Composer.Filter.InputTexture.prototype = osg.objectInehrit(osgUtil.Composer.Filter.prototype, {
            build : function () {
                this._dirty = !1
            }
        });
    osgUtil.Composer.Filter.HBlur = function (a) {
        osgUtil.Composer.Filter.call(this);
        a === void 0 ? this.setBlurSize(5) : this.setBlurSize(a)
    };
    osgUtil.Composer.Filter.HBlur.prototype = osg.objectInehrit(osgUtil.Composer.Filter.prototype, {
            setBlurSize : function (a) {
                a % 2 !== 1 && (a += 1);
                this._nbSamples = a;
                this.dirty()
            },
            getUVOffset : function (a) {
                return "vec2(float(" + a + "), 0.0)/RenderSize[0];"
            },
            build : function () {
                var a = this._nbSamples,
                c = osgUtil.Composer.Filter.defaultVertexShader,
                e = osgUtil.Composer.Filter.Helper.getOrCreatePascalCoefficients()[a - 1],
                f = Math.floor(a / 2),
                g = [];
                g.push(" pixel += float(" + e[f] + ")*texture2D(Texture0, FragTexCoord0 ).rgb;");
                var h = 1;
                g.push(" vec2 offset;");
                for (f += 1; f < a; f++) {
                    var i = e[f];
                    g.push(" offset = " + this.getUVOffset(f));
                    h++;
                    g.push(" pixel += " + i + "*texture2D(Texture0, FragTexCoord0 + offset).rgb;");
                    g.push(" pixel += " + i + "*texture2D(Texture0, FragTexCoord0 - offset).rgb;")
                }
                a =
                    [osgUtil.Composer.Filter.defaultFragmentShaderHeader, "uniform float width;\nvoid main (void)\n{\n  vec3 pixel;", g.join("\n"), "  gl_FragColor = vec4(pixel,1.0);\n}\n"].join("\n");
                c = new osg.Program(new osg.Shader(gl.VERTEX_SHADER, c), new osg.Shader(gl.FRAGMENT_SHADER, a));
                this._stateSet.getUniform("Texture0") === void 0 && this._stateSet.addUniform(osg.Uniform.createInt1(0, "Texture0"));
                this._stateSet.setAttributeAndModes(c);
                this._dirty = !1
            }
        });
    osgUtil.Composer.Filter.VBlur = function () {
        osgUtil.Composer.Filter.HBlur.call(this)
    };
    osgUtil.Composer.Filter.VBlur.prototype = osg.objectInehrit(osgUtil.Composer.Filter.HBlur.prototype, {
            getUVOffset : function (a) {
                return "vec2(0.0, float(" + a + "))/RenderSize[1];"
            }
        });
    osgUtil.Composer.Filter.BlendMix = function () {
        osgUtil.Composer.Filter.call(this);
        var a,
        c,
        e,
        f = 0,
        g = 1,
        h = this._stateSet;
        arguments.length === 3 ? (a = arguments[0], c = arguments[1], e = arguments[2], f = 1, g = 2, h.setTextureAttributeAndModes(f, a)) : arguments.length === 2 ? (c = arguments[0], e = arguments[1]) : arguments.length === 1 && (c = arguments[0], e = 0.5);
        h.setTextureAttributeAndModes(g,
            c);
        h.addUniform(osg.Uniform.createInt1(f, "Texture0"));
        h.addUniform(osg.Uniform.createInt1(g, "Texture1"));
        this._mixValueUniform = osg.Uniform.createFloat1(e, "MixValue");
        h.addUniform(mixValueUniform)
    };
    osgUtil.Composer.Filter.BlendMix = osg.objectInehrit(osgUtil.Composer.Filter.prototype, {
            getBlendFactorUniform : function () {
                return this._mixValueUniform
            },
            build : function () {
                var a = this._stateSet,
                c = osgUtil.Composer.Filter.defaultVertexShader,
                e = ["", osgUtil.Composer.Filter.defaultFragmentShaderHeader, "uniform sampler2D Texture1;\nuniform float MixValue;\nvoid main (void)\n{\n  gl_FragColor = mix(texture2D(Texture0,FragTexCoord0), texture2D(Texture1,FragTexCoord0),MixValue);\n}\n"].join("\n"),
                c = new osg.Program(new osg.Shader(gl.VERTEX_SHADER, c), new osg.Shader(gl.FRAGMENT_SHADER, e));
                a.setAttributeAndModes(c);
                this._dirty = !1
            }
        });
    osgUtil.Composer.Filter.BlendMultiply = function () {
        osgUtil.Composer.Filter.call(this);
        var a = this._stateSet,
        c,
        e,
        f = 0;
        arguments.length === 2 ? (c = arguments[0], e = arguments[1], f = 2, a.setTextureAttributeAndModes(f, c)) : arguments.length === 1 && (e = arguments[0]);
        a.setTextureAttributeAndModes(1, e);
        a.addUniform(osg.Uniform.createInt1(f, "Texture0"));
        a.addUniform(osg.Uniform.createInt1(1,
                "Texture1"))
    };
    osgUtil.Composer.Filter.BlendMultiply.prototype = osg.objectInehrit(osgUtil.Composer.Filter.prototype, {
            build : function () {
                var a = osgUtil.Composer.Filter.defaultVertexShader,
                c = ["", osgUtil.Composer.Filter.defaultFragmentShaderHeader, "uniform sampler2D Texture1;\nuniform float MixValue;\nvoid main (void)\n{\n  gl_FragColor = texture2D(Texture0,FragTexCoord0)*texture2D(Texture1,FragTexCoord0);\n}\n"].join("\n");
                this._stateSet.setAttributeAndModes(new osg.Program(new osg.Shader(gl.VERTEX_SHADER,
                            a), new osg.Shader(gl.FRAGMENT_SHADER, c)));
                this._dirty = !1
            }
        });
    osgUtil.Composer.Filter.SSAO = function (a) {
        osgUtil.Composer.Filter.call(this);
        var c = this._stateSet,
        e = 16,
        f = 0.05;
        if (a !== void 0) {
            if (a.nbSamples !== void 0)
                e = a.nbSamples;
            if (a.radius !== void 0)
                f = a.radius
        }
        var g = a.normal,
        a = a.position;
        this._radius = f;
        this._nbSamples = e;
        this._noiseTextureSize = 16;
        this._sceneRadius = 2;
        c.addUniform(osg.Uniform.createFloat1(1, "Power"));
        c.addUniform(osg.Uniform.createFloat1(f, "Radius"));
        c.addUniform(osg.Uniform.createInt1(0, "Texture0"));
        c.addUniform(osg.Uniform.createInt1(1, "Texture1"));
        c.addUniform(osg.Uniform.createInt1(2, "Texture2"));
        c.addUniform(osg.Uniform.createFloat1(0.1, "AngleLimit"));
        e = g.getWidth();
        f = g.getHeight();
        this._size = [e, f];
        c.setTextureAttributeAndModes(0, g);
        c.setTextureAttributeAndModes(1, a);
        this.initNoise()
    };
    osgUtil.Composer.Filter.SSAO.prototype = osg.objectInehrit(osgUtil.Composer.Filter.prototype, {
            initNoise : function () {
                var a = this._noiseTextureSize,
                c = Array(a * a * 3);
                (function (c) {
                    for (var e = 0; e < a * a; e++) {
                        var h,
                        i;
                        h = 2 * (Math.random() -
                                0.5);
                        i = 2 * (Math.random() - 0.5);
                        h = osg.Vec3.normalize([h, i, 0], []);
                        c[e * 3 + 0] = 255 * (h[0] * 0.5 + 0.5);
                        c[e * 3 + 1] = 255 * (h[1] * 0.5 + 0.5);
                        c[e * 3 + 2] = 255 * (h[2] * 0.5 + 0.5)
                    }
                })(c);
                var e = new osg.Texture;
                e.setWrapS("REPEAT");
                e.setWrapT("REPEAT");
                e.setMinFilter("NEAREST");
                e.setMagFilter("NEAREST");
                e.setTextureSize(a, a);
                e.setImage(new Uint8Array(c), "RGB");
                this._noiseTexture = e
            },
            setSceneRadius : function (a) {
                this._sceneRadius = a;
                this.dirty()
            },
            setAngleLimit : function (a) {
                var c = this._stateSet.getUniform("AngleLimit");
                c.get()[0] = a;
                c.dirty()
            },
            setNbSamples : function (a) {
                if (a !== this._nbSamples)
                    this._nbSamples = Math.floor(a), this.dirty()
            },
            setRadius : function (a) {
                var c = this._stateSet.getUniform("Radius");
                c.get()[0] = a;
                c.dirty()
            },
            setPower : function (a) {
                var c = this._stateSet.getUniform("Power");
                c.get()[0] = a;
                c.dirty()
            },
            build : function () {
                var a = this._stateSet,
                c = this._nbSamples,
                e = Array(c * 4);
                (function (a) {
                    for (var e = 0; e < c; e++) {
                        var f,
                        g,
                        n;
                        f = 2 * (Math.random() - 0.5);
                        g = 2 * (Math.random() - 0.5);
                        n = Math.random();
                        f = osg.Vec3.normalize([f, g, n], []);
                        g = Math.max(e / c, 0.1);
                        g = 0.1 +
                            0.9 * g * g;
                        a[e * 3 + 0] = f[0];
                        a[e * 3 + 1] = f[1];
                        a[e * 3 + 2] = f[2];
                        a[e * 3 + 3] = g
                    }
                })(e);
                a.setTextureAttributeAndModes(2, this._noiseTexture);
                var f = a.getUniform("noiseSampling");
                f === void 0 ? (f = osg.Uniform.createFloat2([this._size[0] / this._noiseTextureSize, this._size[1] / this._noiseTextureSize], "noiseSampling"), a.addUniform(f)) : (f.set([this._size[0] / this._noiseTextureSize, this._size[1] / this._noiseTextureSize]), f.dirty());
                for (var f = [], g = 0; g < c; g++)
                    f.push("kernel[" + g + "] = vec4(" + e[g * 3] + "," + e[g * 3 + 1] + ", " + e[g * 3 + 2] + ", " + e[g * 3 + 3] +
                        ");");
                f = f.join("\n");
                e = ["", osgUtil.Composer.Filter.defaultFragmentShaderHeader, "uniform sampler2D Texture1;\nuniform sampler2D Texture2;\nuniform mat4 projection;\nuniform vec2 noiseSampling;\nuniform float Power;\nuniform float Radius;\nuniform float AngleLimit;", "#define NB_SAMPLES " + this._nbSamples, "float depth;\nvec3 normal;\nvec4 position;", "vec4 kernel[" + c + "];", "mat3 computeBasis()\n{\n  vec2 uvrand = FragTexCoord0*noiseSampling;\n  vec3 rvec = texture2D(Texture2, uvrand*2.0).xyz*2.0-vec3(1.0);\n  vec3 tangent = normalize(rvec - normal * dot(rvec, normal));\n  vec3 bitangent = cross(normal, tangent);\n  mat3 tbn = mat3(tangent, bitangent, normal);\n  return tbn;\n}\nvoid main (void)\n{",
                    f, "  position = texture2D(Texture1, FragTexCoord0);\n  vec4 p = texture2D(Texture0, FragTexCoord0);\n  depth = p.w;\n  normal = vec3(p);\n  if ( position.w == 0.0) {\n     gl_FragColor = vec4(1.0,1.0,1.0,0.0);\n     return;\n  }\n\n mat3 tbn = computeBasis();\n float occlusion = 0.0;\n for (int i = 0; i < NB_SAMPLES; i++) {\n    vec3 vecKernel = vec3(kernel[i]);\n    vecKernel[2] = max(AngleLimit,vecKernel[2]);\n    vec3 sample = tbn * vecKernel;\n    vec3 dir = sample;\n    float w = dot(dir, normal);\n    float dist = 1.0-kernel[i].w;\n    w *= dist*dist*Power;\n    sample = dir * float(Radius) + position.xyz;\n    vec4 offset = projection * vec4(sample,1.0);\n    offset.xy /= offset.w;\n    offset.xy = offset.xy * 0.5 + 0.5;\n    float sample_depth = texture2D(Texture1, offset.xy).z;\n    float range_check = abs(sample.z - sample_depth) < float(Radius) ? 1.0 : 0.0;\n    occlusion += (sample_depth > sample.z ? 1.0 : 0.0) * range_check*w;\n }\n occlusion = 1.0 - (occlusion / float(NB_SAMPLES));\n gl_FragColor = vec4(vec3(occlusion),1.0);\n}\n"].join("\n");
                e = new osg.Program(new osg.Shader(gl.VERTEX_SHADER, "\n#ifdef GL_ES\nprecision highp float;\n#endif\nattribute vec3 Vertex;\nattribute vec2 TexCoord0;\nvarying vec2 FragTexCoord0;\nuniform mat4 ModelViewMatrix;\nuniform mat4 ProjectionMatrix;\nvoid main(void) {\n  gl_Position = ProjectionMatrix * ModelViewMatrix * vec4(Vertex,1.0);\n  FragTexCoord0 = TexCoord0;\n}\n"), new osg.Shader(gl.FRAGMENT_SHADER, e));
                a.setAttributeAndModes(e);
                this._dirty = !1
            }
        });
    osgUtil.Composer.Filter.SSAO8 = function (a) {
        osgUtil.Composer.Filter.SSAO.call(this,
            a)
    };
    osgUtil.Composer.Filter.SSAO8.prototype = osg.objectInehrit(osgUtil.Composer.Filter.SSAO.prototype, {
            buildGeometry : function (a) {
                a.getAttributes().TexCoord1 = this._texCoord1;
                return a
            },
            build : function () {
                var a = this._stateSet,
                c = this._nbSamples,
                e = Array(c * 4);
                (function (a) {
                    for (var e = 0; e < c; e++) {
                        var f,
                        g,
                        n;
                        f = 2 * (Math.random() - 0.5);
                        g = 2 * (Math.random() - 0.5);
                        n = Math.random();
                        f = osg.Vec3.normalize([f, g, n], []);
                        g = Math.max(e / c, 0.1);
                        g = 0.1 + 0.9 * g * g;
                        a[e * 3 + 0] = f[0];
                        a[e * 3 + 1] = f[1];
                        a[e * 3 + 2] = f[2];
                        a[e * 3 + 3] = g
                    }
                })(e);
                a.setTextureAttributeAndModes(2,
                    this._noiseTexture);
                var f = a.getUniform("noiseSampling");
                f === void 0 ? (f = osg.Uniform.createFloat2([this._size[0] / this._noiseTextureSize, this._size[1] / this._noiseTextureSize], "noiseSampling"), a.addUniform(f)) : (f.set([this._size[0] / this._noiseTextureSize, this._size[1] / this._noiseTextureSize]), f.dirty());
                for (var f = [], g = 0; g < c; g++)
                    f.push("kernel[" + g + "] = vec4(" + e[g * 3] + "," + e[g * 3 + 1] + ", " + e[g * 3 + 2] + ", " + e[g * 3 + 3] + ");");
                f = f.join("\n");
                e = ["", osgUtil.Composer.Filter.defaultFragmentShaderHeader, "varying vec3 FragTexCoord1;\nuniform sampler2D Texture1;\nuniform sampler2D Texture2;\nuniform mat4 projection;\nuniform vec2 noiseSampling;\nuniform float Power;\nuniform float Radius;\nuniform float AngleLimit;",
                    "#define NB_SAMPLES " + this._nbSamples, "float depth;\nfloat znear, zfar, zrange;\nvec3 normal;\nvec3 position;", "vec4 kernel[" + c + "];", osgUtil.Composer.Filter.shaderUtils, "mat3 computeBasis()\n{\n  vec2 uvrand = FragTexCoord0*noiseSampling;\n  //uvrand = rand(gl_FragCoord.xy);\n  vec3 rvec = texture2D(Texture2, uvrand*2.0).xyz*2.0-vec3(1.0);\n  //vec3 rvec = normalize(vec3(uvrand,0.0));\n  vec3 tangent = normalize(rvec - normal * dot(rvec, normal));\n  vec3 bitangent = cross(normal, tangent);\n  mat3 tbn = mat3(tangent, bitangent, normal);\n  return tbn;\n}\nfloat getDepthValue(vec4 v) {\n  float depth = unpack4x8ToFloat(v);\n  depth = depth*zrange+znear;\n  //depth = depth*zrange;\n  return -depth;\n}\nvoid main (void)\n{",
                    f, "  vec4 p = texture2D(Texture0, FragTexCoord0);\n  if (dot(p,p) < 0.001) { \n     gl_FragColor = vec4(1.0,1.0,1.0,0.0);\n     return;\n  }\n  znear = projection[3][2] / (projection[2][2]-1.0);\n  zfar = projection[3][2] / (projection[2][2]+1.0);\n  zrange = zfar-znear;\n  depth = getDepthValue(texture2D(Texture1, FragTexCoord0));\n  if ( -depth < znear) {\n     gl_FragColor = vec4(1.0,1.0,1.0,0.0);\n     return;\n  }\n  normal = decodeNormal(unpack4x8To2Float(p));\n  position = -FragTexCoord1*depth;\n  position.z = -position.z;\n\n mat3 tbn = computeBasis();\n float occlusion = 0.0;\n for (int i = 0; i < NB_SAMPLES; i++) {\n    vec3 vecKernel = vec3(kernel[i]);\n    vecKernel[2] = max(AngleLimit,vecKernel[2]);\n    vec3 sample = tbn * vec3(vecKernel);\n    vec3 dir = sample;\n    float w = dot(dir, normal);\n    float dist = 1.0-kernel[i].w;\n    w *= dist*dist*Power;\n    sample = dir * float(Radius) + position.xyz;\n    vec4 offset = projection * vec4(sample,1.0);\n    offset.xy /= offset.w;\n    offset.xy = offset.xy * 0.5 + 0.5;\n    float sample_depth = getDepthValue(texture2D(Texture1, offset.xy));\n    float range_check = abs(sample.z - sample_depth) < float(Radius) ? 1.0 : 0.0;\n    occlusion += (sample_depth > sample.z ? 1.0 : 0.0) * range_check*w;\n }\n occlusion = 1.0 - (occlusion / float(NB_SAMPLES));\n gl_FragColor = vec4(vec3(occlusion),1.0);\n}\n"].join("\n");
                e = new osg.Program(new osg.Shader(gl.VERTEX_SHADER, "\n#ifdef GL_ES\nprecision highp float;\n#endif\nattribute vec3 Vertex;\nattribute vec2 TexCoord0;\nattribute vec3 TexCoord1;\nvarying vec2 FragTexCoord0;\nvarying vec3 FragTexCoord1;\nuniform mat4 ModelViewMatrix;\nuniform mat4 ProjectionMatrix;\nvoid main(void) {\n  gl_Position = ProjectionMatrix * ModelViewMatrix * vec4(Vertex,1.0);\n  FragTexCoord0 = TexCoord0;\n  FragTexCoord1 = TexCoord1;\n}\n"), new osg.Shader(gl.FRAGMENT_SHADER, e));
                a.setAttributeAndModes(e);
                this._dirty = !1
            }
        })
})();
var osgDB = {
    ObjectWrapper : {}
    
};
osgDB.ObjectWrapper.serializers = {};
osgDB.readImage = function (a) {
    if (osgDB._input === void 0)
        osgDB._input = new osgDB.Input;
    return osgDB._input.readImageURL(a)
};
osgDB.parseSceneGraph = function (a, c) {
    if (a.Version !== void 0 && a.Version > 0) {
        var e = function (a) {
            for (var a = Object.keys(a), c = 0, e = a.length; c < e; c++)
                if (a[c] !== "Generator" && a[c] !== "Version")
                    return a[c]
        }
        (a);
        if (e) {
            var f = {};
            f[e] = a[e];
            e = new osgDB.Input(f);
            c !== void 0 && c.progressXHRCallback !== void 0 && e.setProgressXHRCallback(c.progressXHRCallback);
            return e.readObject()
        } else
            osg.log("can't parse scenegraph " + a)
    } else
        return osgDB.parseSceneGraph_deprecated(a)
};
osgDB.parseSceneGraph_deprecated = function (a) {
    var c = function (a, c) {
        var e = c[a];
        e === void 0 && (e = c[a.toLowerCase()]);
        return e
    },
    e = function (a, e) {
        var f = c("Name", e);
        f && a.setName !== void 0 && a.setName(f)
    },
    f = function (a, e) {
        var f = e.MagFilter || e.mag_filter || void 0;
        f && a.setMagFilter(f);
        (f = e.MinFilter || e.min_filter || void 0) && a.setMinFilter(f);
        (f = e.WrapT || e.wrap_t || void 0) && a.setWrapT(f);
        (f = e.WrapS || e.wrap_s || void 0) && a.setWrapS(f);
        f = c("File", e);
        osgDB.Promise.when(osgDB.readImage(f)).then(function (c) {
            a.setImage(c)
        })
    },
    g = function (a, g) {
        e(a, g);
        var h = c("Textures", g) || c("TextureAttributeList", g) || void 0;
        if (h)
            for (var i = 0, k = h.length; i < k; i++)
                if (c("File", h[i])) {
                    var m = new osg.Texture;
                    f(m, h[i]);
                    a.setTextureAttributeAndMode(i, m);
                    a.addUniform(osg.Uniform.createInt1(i, "Texture" + i))
                } else
                    osg.log("no texture on unit " + i + " skip it");
        if (h = c("BlendFunc", g))
            i = new osg.BlendFunc, e(i, h), i.setSourceRGB(h.SourceRGB), i.setSourceAlpha(h.SourceAlpha), i.setDestinationRGB(h.DestinationRGB), i.setDestinationAlpha(h.DestinationAlpha), a.setAttributeAndMode(i);
        if (h = c("Material", g))
            i = new osg.Material, e(i, h), i.setAmbient(c("Ambient", h)), i.setDiffuse(c("Diffuse", h)), i.setEmission(c("Emission", h)), i.setSpecular(c("Specular", h)), i.setShininess(c("Shininess", h)), a.setAttributeAndMode(i)
    },
    h,
    i = a.children,
    k = a.primitives || a.Primitives || void 0,
    m = a.attributes || a.Attributes || void 0;
    if (k || m) {
        h = new osg.Geometry;
        e(h, a);
        osg.extend(h, a);
        a = h;
        a.primitives = k;
        a.attributes = m;
        h = 0;
        for (var n = k.length; h < n; h++) {
            var p = k[h].mode;
            if (k[h].indices) {
                var s = k[h].indices,
                s = new osg.BufferArray(osg.BufferArray[s.type],
                        s.elements, s.itemSize),
                p = p ? osg.PrimitiveSet[p] : gl.TRIANGLES;
                k[h] = new osg.DrawElements(p, s)
            } else
                p = gl[p], k[h] = new osg.DrawArrays(p, k[h].first, k[h].count)
        }
        for (var q in m)
            m.hasOwnProperty(q) && (k = m[q], m[q] = new osg.BufferArray(gl[k.type], k.elements, k.itemSize))
    }
    if (m = c("StateSet", a))
        q = new osg.StateSet, g(q, m), a.stateset = q;
    if (g = a.matrix || a.Matrix || void 0)
        h = new osg.MatrixTransform, e(h, a), osg.extend(h, a), h.setMatrix(osg.Matrix.copy(g)), a = h;
    if (g = a.projection || a.Projection || void 0)
        h = new osg.Projection, e(h, a),
        osg.extend(h, a), h.setProjectionMatrix(osg.Matrix.copy(g)), a = h;
    a.objectType === void 0 && (h = new osg.Node, e(h, a), osg.extend(h, a), a = h);
    if (i) {
        a.children = [];
        g = 0;
        for (m = i.length; g < m; g++)
            a.addChild(osgDB.parseSceneGraph_deprecated(i[g]))
    }
    return a
};
osgDB.Input = function (a, c) {
    this._json = a;
    var e = c;
    e === void 0 && (e = {});
    this._identifierMap = e;
    this._objectRegistry = {};
    this._progressXHRCallback = void 0
};
osgDB.Input.prototype = {
    setProgressXHRCallback : function (a) {
        this._progressXHRCallback = a
    },
    registerObject : function (a, c) {
        this._objectRegistry[a] = c
    },
    getJSON : function () {
        return this._json
    },
    setJSON : function (a) {
        this._json = a;
        return this
    },
    getObjectWrapper : function (a) {
        if (this._objectRegistry[a] !== void 0)
            return new this._objectRegistry[a];
        for (var c = window, a = a.split("."), e = 0, f = a.length; e < f; e++)
            if (c = c[a[e]], c === void 0)
                return;
        return new c
    },
    readImageURL : function (a) {
        var c = osgDB.Promise.defer(),
        e = new Image;
        e.onerror =
        function () {
            osg.warn("warning use white texture as fallback instead of " + a);
            e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2P8DwQACgAD/il4QJ8AAAAASUVORK5CYII="
        };
        e.onload = function () {
            c.resolve(e)
        };
        e.src = a;
        return c.promise
    },
    readImage : function () {
        var a = this.getJSON(),
        c = a.UniqueID;
        if (c !== void 0 && (img = this._identifierMap[c], img !== void 0))
            return img;
        var e = this,
        f = osgDB.Promise.defer();
        osgDB.Promise.when(this.readImageURL(a.Url)).then(function (a) {
            c !== void 0 && (e._identifierMap[c] =
                    a);
            f.resolve(a)
        });
        return f.promise
    },
    readBinaryArrayURL : function (a) {
        if (this._identifierMap[a] !== void 0)
            return this._identifierMap[a];
        var c = osgDB.Promise.defer(),
        e = new XMLHttpRequest;
        e.open("GET", a, !0);
        e.responseType = "arraybuffer";
        this._progressXHRCallback && e.addEventListener("progress", this._progressXHRCallback, !1);
        e.addEventListener("error", function () {
            c.reject()
        }, !1);
        var f = this;
        e.addEventListener("load", function () {
            var g = e.response;
            g ? (f._identifierMap[a] = g, c.resolve(g)) : c.reject()
        }, !1);
        e.send(null);
        return this._identifierMap[a] = c.promise
    },
    readBufferArray : function () {
        var a = this.getJSON(),
        c = a.UniqueID,
        e;
        if (c !== void 0 && (e = this._identifierMap[c], e !== void 0))
            return e;
        if ((a.Elements !== void 0 || a.Array !== void 0) && a.ItemSize !== void 0 && a.Type) {
            var f,
            g;
            if (a.Elements !== void 0)
                f = new osg.BufferArray(osg.BufferArray[a.Type], a.Elements, a.ItemSize);
            else if (a.Array !== void 0) {
                var h = new osg.BufferArray(osg.BufferArray[a.Type]);
                h.setItemSize(a.ItemSize);
                var i,
                k;
                a.Array.Float32Array !== void 0 ? (i = a.Array.Float32Array,
                    k = "Float32Array") : a.Array.Uint16Array !== void 0 ? (i = a.Array.Uint16Array, k = "Uint16Array") : (osg.warn("Typed Array " + Object.keys(o.Array)[0]), k = "Float32Array");
                if (i !== void 0)
                    if (i.File !== void 0)
                        a = i.File, g = osgDB.Promise.defer(), osgDB.Promise.when(this.readBinaryArrayURL(a)).then(function (a) {
                            var c,
                            e;
                            (function () {
                                var a = new Uint8Array([18, 52]);
                                e = (new Uint16Array(a.buffer))[0].toString(16) === "1234"
                            })();
                            var f = 0;
                            if (i.Offset !== void 0)
                                f = i.Offset;
                            c = osg[k].BYTES_PER_ELEMENT;
                            var w = i.Size,
                            y = h.getItemSize(),
                            E = w * c * y;
                            if (e) {
                                osg.log("big endian detected");
                                w = new osg[k](w * y);
                                a = new DataView(a, f, E);
                                f = 0;
                                E = w.length;
                                if (k === "Uint16Array")
                                    for (; f < E; f++)
                                        tempArray[f] = a.getUint16(f * c, !0);
                                else if (k === "Float32Array")
                                    for (; f < E; f++)
                                        tempArray[f] = a.getFloat32(f * c, !0);
                                c = tempArray;
                                a = null
                            } else
                                c = new osg[k](a, f, y * w);
                            m = b = null;
                            h.setElements(c);
                            g.resolve(h)
                        });
                    else if (i.Elements !== void 0) {
                        var m = new osg[k](i.Elements);
                        h.setElements(m)
                    }
                f = h
            }
            c !== void 0 && (this._identifierMap[c] = f);
            return g !== void 0 ? g.promise : f
        }
    },
    readUserDataContainer : function () {
        var a = this.getJSON(),
        c,
        e = a.UniqueID;
        if (e !== void 0 && (c = this._identifierMap[e], c !== void 0))
            return c.Values;
        this._identifierMap[e] = a;
        return a.Values
    },
    readPrimitiveSet : function () {
        var a = this.getJSON(),
        c,
        e,
        f,
        g,
        h = a.DrawElementUShort || a.DrawElementUByte || a.DrawElementUInt || a.DrawElementsUShort || a.DrawElementsUByte || a.DrawElementsUInt || void 0;
        if (h) {
            c = h.UniqueID;
            if (c !== void 0 && (e = this._identifierMap[c], e !== void 0))
                return e;
            g = osgDB.Promise.defer();
            e = h.Indices;
            mode = (mode = h.Mode) ? osg.PrimitiveSet[mode] : osg.PrimitiveSet.TRIANGLES;
            f = new osg.DrawElements(mode);
            this.setJSON(e);
            osgDB.Promise.when(this.readBufferArray()).then(function (a) {
                f.setIndices(a);
                g.resolve(f)
            });
            this.setJSON(a)
        }
        if (h = a.DrawArray || a.DrawArrays) {
            c = h.UniqueID;
            if (c !== void 0 && (e = this._identifierMap[c], e !== void 0))
                return e;
            mode = h.Mode || h.mode;
            first = h.First !== void 0 ? h.First : h.first;
            count = h.Count !== void 0 ? h.Count : h.count;
            f = new osg.DrawArrays(osg.PrimitiveSet[mode], first, count)
        }
        if (a = a.DrawArrayLengths || void 0) {
            c = a.UniqueID;
            if (c !== void 0 && (e = this._identifierMap[c], e !== void 0))
                return e;
            mode = a.Mode;
            first = a.First;
            f = new osg.DrawArrayLengths(osg.PrimitiveSet[mode], first, a.ArrayLengths)
        }
        c !== void 0 && (this._identifierMap[c] = f);
        return g ? g.promise : f
    },
    readObject : function () {
        var a = this.getJSON(),
        c = Object.keys(a)[0];
        if (c) {
            var e = a[c].UniqueID,
            f;
            if (e !== void 0 && (f = this._identifierMap[e], f !== void 0))
                return f;
            if (f = this.getObjectWrapper(c)) {
                for (var g = osgDB.ObjectWrapper.serializers, h = c.split("."), i = 0, k = h.length; i < k; i++)
                    if (g = g[h[i]], g === void 0) {
                        osg.warn("can't find function to read object " + c + " - undefined");
                        return
                    }
                a = g(this.setJSON(a[c]), f);
                e !== void 0 && (this._identifierMap[e] = f);
                return a
            } else
                osg.warn("can't instanciate object " + c)
        } else
            osg.warn("can't find property for object " + a)
    }
};
osgDB.Promise = {};
(function () {
    var a = osgDB.Promise;
    (function (c) {
        if (typeof define === "function")
            define(c);
        else if (typeof a === "object")
            c(void 0, a);
        else if (typeof ses !== "undefined") {
            if (ses.ok())
                ses.makeQ = function () {
                    return c(void 0, {})
                }
        } else
            c(void 0, Q = {})
    })(function (a, e) {
        function f(a) {
            var c = Error.prepareStackTrace;
            Error.prepareStackTrace = function (a, c) {
                return c.filter(function (a) {
                    a = a.getFileName();
                    return a !== "module.js" && a !== "node.js" && a !== ca
                })
            };
            a = a.stack;
            Error.prepareStackTrace = c;
            return a
        }
        function g(a, c, e) {
            return function () {
                typeof console !==
                "undefined" && typeof console.warn === "function" && console.warn(c + " is deprecated, use " + e + " instead.");
                return a.apply(a, arguments)
            }
        }
        function h() {
            function a(f) {
                if (c)
                    return e = q(f), B(c, function (a, c) {
                        D(function () {
                            e.promiseSend.apply(e, c)
                        })
                    }, void 0), c = void 0, e
            }
            var c = [],
            e,
            f = la(h.prototype),
            g = la(i.prototype);
            g.promiseSend = function () {
                var a = v(arguments);
                c ? c.push(a) : D(function () {
                    e.promiseSend.apply(e, a)
                })
            };
            g.valueOf = function () {
                return c ? g : e.valueOf()
            };
            Error.captureStackTrace && Error.captureStackTrace(g, h);
            K(g);
            f.promise = g;
            f.resolve = a;
            f.reject = function (c) {
                return a(s(c))
            };
            return f
        }
        function i(a, c, e, f) {
            c === void 0 && (c = function (a) {
                return s(Error("Promise does not support operation: " + a))
            });
            var g = la(i.prototype);
            g.promiseSend = function (e, f) {
                var h = v(arguments, 2),
                i;
                try {
                    i = a[e] ? a[e].apply(g, h) : c.apply(g, [e].concat(h))
                } catch (k) {
                    i = s(k)
                }
                f(i)
            };
            if (e)
                g.valueOf = e;
            if (f)
                g.exception = f;
            K(g);
            return g
        }
        function k(a) {
            return Object(a) !== a ? a : a.valueOf()
        }
        function m(a) {
            return a && typeof a.promiseSend === "function"
        }
        function n(a) {
            return !m(k(a))
        }
        function p(a) {
            a = k(a);
            return m(a) && "exception" in a
        }
        function s(a) {
            var a = a || Error(),
            c = i({
                    when : function (c) {
                        if (c) {
                            var e = U(V, this);
                            e !== -1 && (X.splice(e, 1), V.splice(e, 1))
                        }
                        return c ? c(a) : s(a)
                    }
                }, function () {
                    return s(a)
                }, function () {
                    return this
                }, a);
            V.push(c);
            X.push(a);
            return c
        }
        function q(a) {
            if (m(a))
                return a;
            if (a && typeof a.then === "function") {
                var c = h();
                a.then(c.resolve, c.reject);
                return c.promise
            }
            return i({
                when : function () {
                    return a
                },
                get : function (c) {
                    return a[c]
                },
                put : function (c, e) {
                    return a[c] = e
                },
                del : function (c) {
                    return delete a[c]
                },
                post : function (c, e) {
                    return a[c].apply(a, e)
                },
                apply : function (c, e) {
                    return a.apply(c, e)
                },
                fapply : function (c) {
                    return a.apply(void 0, c)
                },
                viewInfo : function () {
                    function c(a) {
                        f[a] || (f[a] = typeof e[a])
                    }
                    for (var e = a, f = {}; e; )
                        Object.getOwnPropertyNames(e).forEach(c), e = Object.getPrototypeOf(e);
                    return {
                        type : typeof a,
                        properties : f
                    }
                },
                keys : function () {
                    return ba(a)
                }
            }, void 0, function () {
                return a
            })
        }
        function w(a, c) {
            a = q(a);
            return c ? i({
                viewInfo : function () {
                    return c
                }
            }, function (c) {
                var e = v(arguments);
                return G.apply(void 0, [a].concat(e))
            },
                function () {
                return k(a)
            }) : G(a, "viewInfo")
        }
        function y(a, c, e) {
            function f(a) {
                try {
                    return c ? c(a) : a
                } catch (e) {
                    return s(e)
                }
            }
            function g(a) {
                try {
                    return e ? e(a) : s(a)
                } catch (c) {
                    return s(c)
                }
            }
            var i = h(),
            k = !1;
            D(function () {
                q(a).promiseSend("when", function (a) {
                    k || (k = !0, q(a).promiseSend("when", function (a) {
                            i.resolve(f(a))
                        }, function (a) {
                            i.resolve(g(a))
                        }))
                }, function (a) {
                    k || (k = !0, i.resolve(g(a)))
                })
            });
            return i.promise
        }
        function E(a) {
            return function (c) {
                var e = v(arguments, 1);
                return G.apply(void 0, [c, a].concat(e))
            }
        }
        function G(a, c) {
            var e =
                h(),
            f = v(arguments, 2),
            a = q(a);
            D(function () {
                a.promiseSend.apply(a, [c, e.resolve].concat(f))
            });
            return e.promise
        }
        function O(a, c, e) {
            var f = h(),
            a = q(a);
            D(function () {
                a.promiseSend.apply(a, [c, f.resolve].concat(e))
            });
            return f.promise
        }
        function F(a) {
            return function (c) {
                var e = v(arguments, 1);
                return O(c, a, e)
            }
        }
        function R(a, c) {
            var e = v(arguments, 2);
            return P(a, c, e)
        }
        function I(a) {
            var c = v(arguments, 1);
            return ea(a, c)
        }
        function N(a) {
            return y(a, function (a) {
                var c = a.length;
                if (c === 0)
                    return q(a);
                var e = h();
                B(a, function (f, g, h) {
                    y(g,
                        function (f) {
                        a[h] = f;
                        --c === 0 && e.resolve(a)
                    }).fail(e.reject)
                }, void 0);
                return e.promise
            })
        }
        function A(a, c, e) {
            return M(a, c).apply(void 0, e)
        }
        function M(a) {
            if (arguments.length > 1)
                var c = arguments[1], e = v(arguments, 2), f = a, a = function () {
                    var a = e.concat(v(arguments));
                    return f.apply(c, a)
                };
            return function () {
                var c = h(),
                e = v(arguments);
                e.push(c.makeNodeResolver());
                ea(a, e).fail(c.reject);
                return c.promise
            }
        }
        var J = function () {},
        K = Object.freeze || J;
        if (typeof cajaVM !== "undefined")
            K = cajaVM.def;
        var D;
        if (typeof process !== "undefined")
            D =
                process.nextTick;
        else if (typeof msSetImmediate === "function")
            D = msSetImmediate.bind(window);
        else if (typeof setImmediate === "function")
            D = setImmediate;
        else if (typeof MessageChannel !== "undefined") {
            var u = new MessageChannel,
            S = {},
            L = S;
            u.port1.onmessage = function () {
                S = S.next;
                var a = S.task;
                delete S.task;
                a()
            };
            D = function (a) {
                L = L.next = {
                    task : a
                };
                u.port2.postMessage(0)
            }
        } else
            D = function (a) {
                setTimeout(a, 0)
            };
        var j;
        Function.prototype.bind ? (j = Function.prototype.bind, j = j.bind(j.call)) : j = function (a) {
            return function (c) {
                return a.call.apply(a,
                    arguments)
            }
        };
        var v = j(Array.prototype.slice),
        B = j(Array.prototype.reduce || function (a, c) {
                var e = 0,
                f = this.length;
                if (arguments.length === 1) {
                    do {
                        if (e in this) {
                            c = this[e++];
                            break
                        }
                        if (++e >= f)
                            throw new TypeError;
                    } while (1)
                }
                for (; e < f; e++)
                    e in this && (c = a(c, this[e], e));
                return c
            }),
        U = j(Array.prototype.indexOf || function (a) {
                for (var c = 0; c < this.length; c++)
                    if (this[c] === a)
                        return c;
                return -1
            }),
        fa = j(Array.prototype.map || function (a, c) {
                var e = this,
                f = [];
                B(e, function (g, h, i) {
                    f.push(a.call(c, h, i, e))
                }, void 0);
                return f
            }),
        la = Object.create ||
        function (a) {
            function c() {}
            
            c.prototype = a;
            return new c
        },
        ba = Object.keys || function (a) {
            var c = [],
            e;
            for (e in a)
                c.push(e);
            return c
        },
        pa = Object.prototype.toString,
        H;
        H = typeof ReturnValue !== "undefined" ? ReturnValue : function (a) {
            this.value = a
        };
        var ca;
        Error.captureStackTrace && (ca = function () {
            var a,
            c = Error.prepareStackTrace;
            Error.prepareStackTrace = function (c, e) {
                a = e[0].getFileName()
            };
            Error.prepareStackTrace = c;
            return a
        }
            ());
        e.nextTick = D;
        e.defer = h;
        h.prototype.makeNodeResolver = function () {
            var a = this;
            return function (c, e) {
                c ?
                a.reject(c) : arguments.length > 2 ? a.resolve(v(arguments, 1)) : a.resolve(e)
            }
        };
        h.prototype.node = g(h.prototype.makeNodeResolver, "node", "makeNodeResolver");
        e.promise = function (a) {
            var c = h();
            R(a, void 0, c.resolve, c.reject).fail(c.reject);
            return c.promise
        };
        e.makePromise = i;
        i.prototype.then = function (a, c) {
            return y(this, a, c)
        };
        B("isResolved,isFulfilled,isRejected,when,spread,send,get,put,del,post,invoke,keys,apply,call,bind,fapply,fcall,fbind,all,allResolved,view,viewInfo,timeout,delay,catch,finally,fail,fin,end".split(","),
            function (a, c) {
            i.prototype[c] = function () {
                return e[c].apply(e, [this].concat(v(arguments)))
            }
        }, void 0);
        i.prototype.toSource = function () {
            return this.toString()
        };
        i.prototype.toString = function () {
            return "[object Promise]"
        };
        K(i.prototype);
        e.nearer = k;
        e.isPromise = m;
        e.isResolved = function (a) {
            return n(a) || p(a)
        };
        e.isFulfilled = n;
        e.isRejected = p;
        var V = [],
        X = [];
        typeof window !== "undefined" && window.console && console.log("Should be empty:", X);
        e.reject = s;
        e.begin = q;
        e.resolve = q;
        e.ref = g(q, "ref", "resolve");
        e.master = function (a) {
            return i({
                isDef : function () {}
                
            },
                function (c) {
                var e = v(arguments);
                return G.apply(void 0, [a].concat(e))
            }, function () {
                return k(a)
            })
        };
        e.viewInfo = w;
        e.view = function (a) {
            return w(a).when(function (c) {
                var e;
                e = c.type === "function" ? function () {
                    return P(a, void 0, arguments)
                }
                 : {};
                var f = c.properties || {};
                ba(f).forEach(function (c) {
                    f[c] === "function" && (e[c] = function () {
                        return Y(a, c, arguments)
                    })
                });
                return q(e)
            })
        };
        e.when = y;
        e.spread = function (a, c, e) {
            return y(a, function (a) {
                return c.apply(void 0, a)
            }, e)
        };
        e.async = function (a) {
            return function () {
                function c(a, h) {
                    var i;
                    try {
                        i = e[a](h)
                    } catch (k) {
                        return pa(k) === "[object StopIteration]" || k instanceof H ? k.value : s(k)
                    }
                    return y(i, f, g)
                }
                var e = a.apply(this, arguments),
                f = c.bind(c, "send"),
                g = c.bind(c, "throw");
                return f()
            }
        };
        e["return"] = function (a) {
            throw new H(a);
        };
        e.sender = g(E, "sender", "dispatcher");
        e.Method = g(E, "Method", "dispatcher");
        e.send = g(G, "send", "dispatch");
        e.dispatch = O;
        e.dispatcher = F;
        e.get = F("get");
        e.put = F("put");
        e["delete"] = e.del = F("del");
        var Y = e.post = F("post");
        e.invoke = function (a, c) {
            var e = v(arguments, 2);
            return Y(a, c, e)
        };
        var P = e.apply = g(F("apply"), "apply", "fapply"),
        ea = e.fapply = F("fapply");
        e.call = g(R, "call", "fcall");
        e["try"] = I;
        e.fcall = I;
        e.bind = g(function (a, c) {
                var e = v(arguments, 2);
                return function () {
                    var f = e.concat(v(arguments));
                    return P(a, c, f)
                }
            }, "bind", "fbind");
        e.fbind = function (a) {
            var c = v(arguments, 1);
            return function () {
                var e = c.concat(v(arguments));
                return ea(a, e)
            }
        };
        e.keys = F("keys");
        e.all = N;
        e.allResolved = function (a) {
            return y(a, function (a) {
                return y(N(fa(a, function (a) {
                            return y(a, J, J)
                        })), function () {
                    return fa(a, q)
                })
            })
        };
        e["catch"] =
            e.fail = function (a, c) {
            return y(a, void 0, c)
        };
        e["finally"] = e.fin = function (a, c) {
            return y(a, function (a) {
                return y(c(), function () {
                    return a
                })
            }, function (a) {
                return y(c(), function () {
                    return s(a)
                })
            })
        };
        e.end = function (a) {
            y(a, void 0, function (c) {
                D(function () {
                    if (Error.captureStackTrace && "stack" in c) {
                        var e = f(c),
                        g = f(a),
                        e = e.concat("From previous event:", g),
                        h,
                        g = [];
                        try {
                            g.push(c.toString())
                        } catch (i) {
                            try {
                                g.push("<error: " + i + ">")
                            } catch (k) {
                                g.push("<error>")
                            }
                        }
                        for (var j = 0; j < e.length; j++) {
                            var m = e[j];
                            if (typeof m === "string")
                                g.push(m);
                            else {
                                try {
                                    var n = "";
                                    if (m.isNative())
                                        n = "native";
                                    else if (m.isEval())
                                        n = "eval at " + m.getEvalOrigin();
                                    else {
                                        var p = m.getFileName();
                                        if (p) {
                                            n += p;
                                            var s = m.getLineNumber();
                                            if (s !== null) {
                                                n += ":" + s;
                                                var q = m.getColumnNumber();
                                                q && (n += ":" + q)
                                            }
                                        }
                                    }
                                    n || (n = "unknown source");
                                    var u = "",
                                    w = m.getFunction().name,
                                    v = !0,
                                    A = m.isConstructor();
                                    if (!m.isToplevel() && !A) {
                                        var y = m.getMethodName();
                                        u += m.getTypeName() + ".";
                                        w ? (u += w, y && y !== w && (u += " [as " + y + "]")) : u += y || "<anonymous>"
                                    } else
                                        A ? u += "new " + (w || "<anonymous>") : w ? u += w : (u += n, v = !1);
                                    v && (u += " (" + n + ")");
                                    h = u
                                } catch (J) {
                                    try {
                                        h = "<error: " + J + ">"
                                    } catch (M) {
                                        h = "<error>"
                                    }
                                }
                                g.push("    at " + h)
                            }
                        }
                        h = g.join("\n");
                        c.stack = h
                    }
                    throw c;
                })
            })
        };
        e.timeout = function (a, c) {
            var e = h(),
            f = setTimeout(function () {
                    e.reject(Error("Timed out after " + c + " ms"))
                }, c);
            y(a, function (a) {
                clearTimeout(f);
                e.resolve(a)
            }, e.reject);
            return e.promise
        };
        e.delay = function (a, c) {
            c === void 0 && (c = a, a = void 0);
            var e = h();
            setTimeout(function () {
                e.resolve(a)
            }, c);
            return e.promise
        };
        e.napply = A;
        e.ncall = function (a, c) {
            var e = v(arguments, 2);
            return A(a, c, e)
        };
        e.nbind = M;
        e.npost =
        function (a, c, e) {
            return A(a[c], a, e)
        };
        e.ninvoke = function (a, c) {
            var e = v(arguments, 2);
            return A(a[c], a, e)
        };
        K(e)
    })
})();
var osgViewer = {};
WebGLUtils = function () {
    var a = 'This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',
    c = 'It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org">Click here for more information.</a>',
    e = function (a, c) {
        for (var e = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], i = null, k = 0; k < e.length; ++k) {
            try {
                i = a.getContext(e[k], c)
            } catch (m) {}
            
            if (i)
                break
        }
        return i
    };
    return {
        create3DContext : e,
        setupWebGL : function (f, g, h) {
            function i(e) {
                var f =
                    document.getElementsByTagName("body")[0];
                if (f) {
                    var g = window.WebGLRenderingContext ? c : a;
                    e && (g += "<br/><br/>Status: " + e);
                    f.innerHTML = '<div style="margin: auto; width:500px;z-index:10000;margin-top:20em;text-align:center;">' + g + "</div>"
                }
            }
            h = h || i;
            f.addEventListener && f.addEventListener("webglcontextcreationerror", function (a) {
                h(a.statusMessage)
            }, !1);
            (f = e(f, g)) || h("");
            return f
        }
    }
}
();
if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1E3 / 60)
        }
    }
();
if (!window.cancelRequestAnimFrame)
    window.cancelRequestAnimFrame = function () {
        return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
    }
();
WebGLDebugUtils = function () {
    function a(a) {
        if (k === null) {
            k = {};
            for (var c in a)
                typeof a[c] == "number" && (k[a[c]] = c)
        }
    }
    function c() {
        if (k === null)
            throw "WebGLDebugUtils.init(ctx) not called";
    }
    function e(a) {
        c();
        var e = k[a];
        return e !== void 0 ? e : "*UNKNOWN WebGL ENUM (0x" + a.toString(16) + ")"
    }
    function f(a, c, f) {
        a = i[a];
        return a !== void 0 && a[c] ? e(f) : f.toString()
    }
    function g(a, c, e) {
        a.__defineGetter__(e, function () {
            return c[e]
        });
        a.__defineSetter__(e, function (a) {
            c[e] = a
        })
    }
    function h(a) {
        var c = a.getParameter(a.MAX_VERTEX_ATTRIBS),
        e = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, e);
        var f;
        for (f = 0; f < c; ++f)
            a.disableVertexAttribArray(f), a.vertexAttribPointer(f, 4, a.FLOAT, !1, 0, 0), a.vertexAttrib1f(f, 0);
        a.deleteBuffer(e);
        c = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS);
        for (f = 0; f < c; ++f)
            a.activeTexture(a.TEXTURE0 + f), a.bindTexture(a.TEXTURE_CUBE_MAP, null), a.bindTexture(a.TEXTURE_2D, null);
        a.activeTexture(a.TEXTURE0);
        a.useProgram(null);
        a.bindBuffer(a.ARRAY_BUFFER, null);
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null);
        a.bindFramebuffer(a.FRAMEBUFFER,
            null);
        a.bindRenderbuffer(a.RENDERBUFFER, null);
        a.disable(a.BLEND);
        a.disable(a.CULL_FACE);
        a.disable(a.DEPTH_TEST);
        a.disable(a.DITHER);
        a.disable(a.SCISSOR_TEST);
        a.blendColor(0, 0, 0, 0);
        a.blendEquation(a.FUNC_ADD);
        a.blendFunc(a.ONE, a.ZERO);
        a.clearColor(0, 0, 0, 0);
        a.clearDepth(1);
        a.clearStencil(-1);
        a.colorMask(!0, !0, !0, !0);
        a.cullFace(a.BACK);
        a.depthFunc(a.LESS);
        a.depthMask(!0);
        a.depthRange(0, 1);
        a.frontFace(a.CCW);
        a.hint(a.GENERATE_MIPMAP_HINT, a.DONT_CARE);
        a.lineWidth(1);
        a.pixelStorei(a.PACK_ALIGNMENT, 4);
        a.pixelStorei(a.UNPACK_ALIGNMENT,
            4);
        a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, !1);
        a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1);
        a.UNPACK_COLORSPACE_CONVERSION_WEBGL && a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL, a.BROWSER_DEFAULT_WEBGL);
        a.polygonOffset(0, 0);
        a.sampleCoverage(1, !1);
        a.scissor(0, 0, a.canvas.width, a.canvas.height);
        a.stencilFunc(a.ALWAYS, 0, 4294967295);
        a.stencilMask(4294967295);
        a.stencilOp(a.KEEP, a.KEEP, a.KEEP);
        a.viewport(0, 0, a.canvas.width, a.canvas.height);
        for (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT | a.STENCIL_BUFFER_BIT); a.getError(); );
    }
    var i = {
        enable : {
            0 : !0
        },
        disable : {
            0 : !0
        },
        getParameter : {
            0 : !0
        },
        drawArrays : {
            0 : !0
        },
        drawElements : {
            0 : !0,
            2 : !0
        },
        createShader : {
            0 : !0
        },
        getShaderParameter : {
            1 : !0
        },
        getProgramParameter : {
            1 : !0
        },
        getVertexAttrib : {
            1 : !0
        },
        vertexAttribPointer : {
            2 : !0
        },
        bindTexture : {
            0 : !0
        },
        activeTexture : {
            0 : !0
        },
        getTexParameter : {
            0 : !0,
            1 : !0
        },
        texParameterf : {
            0 : !0,
            1 : !0
        },
        texParameteri : {
            0 : !0,
            1 : !0,
            2 : !0
        },
        texImage2D : {
            0 : !0,
            2 : !0,
            6 : !0,
            7 : !0
        },
        texSubImage2D : {
            0 : !0,
            6 : !0,
            7 : !0
        },
        copyTexImage2D : {
            0 : !0,
            2 : !0
        },
        copyTexSubImage2D : {
            0 : !0
        },
        generateMipmap : {
            0 : !0
        },
        bindBuffer : {
            0 : !0
        },
        bufferData : {
            0 : !0,
            2 : !0
        },
        bufferSubData : {
            0 : !0
        },
        getBufferParameter : {
            0 : !0,
            1 : !0
        },
        pixelStorei : {
            0 : !0,
            1 : !0
        },
        readPixels : {
            4 : !0,
            5 : !0
        },
        bindRenderbuffer : {
            0 : !0
        },
        bindFramebuffer : {
            0 : !0
        },
        checkFramebufferStatus : {
            0 : !0
        },
        framebufferRenderbuffer : {
            0 : !0,
            1 : !0,
            2 : !0
        },
        framebufferTexture2D : {
            0 : !0,
            1 : !0,
            2 : !0
        },
        getFramebufferAttachmentParameter : {
            0 : !0,
            1 : !0,
            2 : !0
        },
        getRenderbufferParameter : {
            0 : !0,
            1 : !0
        },
        renderbufferStorage : {
            0 : !0,
            1 : !0
        },
        clear : {
            0 : !0
        },
        depthFunc : {
            0 : !0
        },
        blendFunc : {
            0 : !0,
            1 : !0
        },
        blendFuncSeparate : {
            0 : !0,
            1 : !0,
            2 : !0,
            3 : !0
        },
        blendEquation : {
            0 : !0
        },
        blendEquationSeparate : {
            0 : !0,
            1 : !0
        },
        stencilFunc : {
            0 : !0
        },
        stencilFuncSeparate : {
            0 : !0,
            1 : !0
        },
        stencilMaskSeparate : {
            0 : !0
        },
        stencilOp : {
            0 : !0,
            1 : !0,
            2 : !0
        },
        stencilOpSeparate : {
            0 : !0,
            1 : !0,
            2 : !0,
            3 : !0
        },
        cullFace : {
            0 : !0
        },
        frontFace : {
            0 : !0
        }
    },
    k = null;
    return {
        init : a,
        mightBeEnum : function (a) {
            c();
            return k[a] !== void 0
        },
        glEnumToString : e,
        glFunctionArgToString : f,
        makeDebugContext : function (c, h) {
            function i(a, c) {
                return function () {
                    var e = a[c].apply(a, arguments),
                    f = a.getError();
                    f !== 0 && (k[f] = !0, h(f, c, arguments));
                    return e
                }
            }
            a(c);
            var h = h || function (a,
                c, g) {
                for (var h = "", i = 0; i < g.length; ++i)
                    h += (i === 0 ? "" : ", ") + f(c, i, g[i]);
                a = "WebGL error " + e(a) + " in " + c + "(" + h + ")";
                window.console && window.console.log && window.console.log(a)
            },
            k = {},
            q = {},
            w;
            for (w in c)
                typeof c[w] == "function" ? q[w] = i(c, w) : g(q, c, w);
            q.getError = function () {
                for (var a in k)
                    if (k[a])
                        return k[a] = !1, a;
                return c.NO_ERROR
            };
            return q
        },
        makeLostContextSimulatingCanvas : function (a) {
            function c(a) {
                return typeof a == "function" ? a : function (c) {
                    a.handleEvent(c)
                }
            }
            function e() {
                for (var a = Object.keys(D), c = 0; c < a.length; ++c)
                    delete D[a]
            }
            function f() {
                ++M;
                I || A == M && a.loseContext()
            }
            function i(a, c) {
                var e = a[c];
                return function () {
                    f();
                    if (!I)
                        return e.apply(a, arguments)
                }
            }
            function k(a) {
                return {
                    statusMessage : a,
                    preventDefault : function () {
                        J = !0
                    }
                }
            }
            function y(a) {
                for (var c in a)
                    typeof a[c] == "function" ? F[c] = i(a, c) : g(F, a, c);
                F.getError = function () {
                    f();
                    var a;
                    if (!I)
                        for (; a = E.getError(); )
                            D[a] = !0;
                    for (a in D)
                        if (D[a])
                            return delete D[a], a;
                    return F.NO_ERROR
                };
                var e = "createBuffer,createFramebuffer,createProgram,createRenderbuffer,createShader,createTexture".split(",");
                for (c = 0; c < e.length; ++c) {
                    var h = e[c];
                    F[h] = function (c) {
                        return function () {
                            f();
                            if (I)
                                return null;
                            var e = c.apply(a, arguments);
                            e.__webglDebugContextLostId__ = R;
                            N.push(e);
                            return e
                        }
                    }
                    (a[h])
                }
                e = "getActiveAttrib,getActiveUniform,getBufferParameter,getContextAttributes,getAttachedShaders,getFramebufferAttachmentParameter,getParameter,getProgramParameter,getProgramInfoLog,getRenderbufferParameter,getShaderParameter,getShaderInfoLog,getShaderSource,getTexParameter,getUniform,getUniformLocation,getVertexAttrib".split(",");
                for (c = 0; c < e.length; ++c)
                    h = e[c], F[h] = function (c) {
                        return function () {
                            f();
                            return I ? null : c.apply(a, arguments)
                        }
                    }
                (F[h]);
                e = "isBuffer,isEnabled,isFramebuffer,isProgram,isRenderbuffer,isShader,isTexture".split(",");
                for (c = 0; c < e.length; ++c)
                    h = e[c], F[h] = function (c) {
                        return function () {
                            f();
                            return I ? !1 : c.apply(a, arguments)
                        }
                    }
                (F[h]);
                F.checkFramebufferStatus = function (c) {
                    return function () {
                        f();
                        return I ? F.FRAMEBUFFER_UNSUPPORTED : c.apply(a, arguments)
                    }
                }
                (F.checkFramebufferStatus);
                F.getAttribLocation = function (c) {
                    return function () {
                        f();
                        return I ? -1 : c.apply(a, arguments)
                    }
                }
                (F.getAttribLocation);
                F.getVertexAttribOffset = function (c) {
                    return function () {
                        f();
                        return I ? 0 : c.apply(a, arguments)
                    }
                }
                (F.getVertexAttribOffset);
                F.isContextLost = function () {
                    return I
                };
                return F
            }
            var E,
            G = [],
            O = [],
            F = {},
            R = 1,
            I = !1,
            N = [],
            A = 0,
            M = 0,
            J = !1,
            K = 0,
            D = {};
            a.getContext = function (c) {
                return function () {
                    var e = c.apply(a, arguments);
                    if (e instanceof WebGLRenderingContext) {
                        if (e != E) {
                            if (E)
                                throw "got different context";
                            E = e;
                            F = y(E)
                        }
                        return F
                    }
                    return e
                }
            }
            (a.getContext);
            (function (a) {
                var e = a.addEventListener;
                a.addEventListener = function (f, g, h) {
                    switch (f) {
                    case "webglcontextlost":
                        G.push(c(g));
                        break;
                    case "webglcontextrestored":
                        O.push(c(g));
                        break;
                    default:
                        e.apply(a, arguments)
                    }
                }
            })(a);
            a.loseContext = function () {
                if (!I) {
                    I = !0;
                    A = 0;
                    for (++R; E.getError(); );
                    e();
                    D[E.CONTEXT_LOST_WEBGL] = !0;
                    var c = k("context lost"),
                    f = G.slice();
                    setTimeout(function () {
                        for (var e = 0; e < f.length; ++e)
                            f[e](c);
                        K >= 0 && setTimeout(function () {
                            a.restoreContext()
                        }, K)
                    }, 0)
                }
            };
            a.restoreContext = function () {
                I && O.length && setTimeout(function () {
                    if (!J)
                        throw "can not restore. webglcontestlost listener did not call event.preventDefault";
                    for (var a = 0; a < N.length; ++a) {
                        var c = N[a];
                        c instanceof WebGLBuffer ? E.deleteBuffer(c) : c instanceof WebGLFramebuffer ? E.deleteFramebuffer(c) : c instanceof WebGLProgram ? E.deleteProgram(c) : c instanceof WebGLRenderbuffer ? E.deleteRenderbuffer(c) : c instanceof WebGLShader ? E.deleteShader(c) : c instanceof WebGLTexture && E.deleteTexture(c)
                    }
                    h(E);
                    I = !1;
                    M = 0;
                    J = !1;
                    for (var a = O.slice(), c = k("context restored"), e = 0; e < a.length; ++e)
                        a[e](c)
                }, 0)
            };
            a.loseContextInNCalls = function (a) {
                if (I)
                    throw "You can not ask a lost contet to be lost";
                A = M + a
            };
            a.getNumCalls = function () {
                return M
            };
            a.setRestoreTimeout = function (a) {
                K = a
            };
            return a
        },
        resetToInitialState : h
    }
}
();
var Stats = {
    Stats : function (a) {
        this.layers = [];
        this.last_update = void 0;
        this.canvas = a
    }
};
Stats.Stats.prototype = {
    addLayer : function (a, c) {
        a === void 0 && (a = "rgb(255,255,255)");
        this.layers.push({
            previous : 0,
            color : a,
            getValue : c
        })
    },
    update : function () {
        var a = (new Date).getTime();
        if (this.last_update === void 0)
            this.last_update = a;
        var c = (a - this.last_update) * 120 / 1E3;
        if (!(c < 1)) {
            a -= (c - Math.floor(c)) / 0.12;
            var c = Math.floor(c),
            e = this.canvas,
            f = e.width,
            g = e.height,
            h = e.getContext("2d");
            h.save();
            h.globalCompositeOperation = "copy";
            h.mozImageSmoothingEnabled = !1;
            h.translate(-c, 0);
            h.drawImage(e, 0, 0, f, g);
            h.restore();
            h.clearRect(f -
                c, 0, c, g);
            for (var i = 0, k = this.layers.length; i < k; i++) {
                var m = this.layers[i],
                e = this.canvas,
                n = m.getValue(a),
                f = e.width,
                g = e.height;
                h.lineWidth = 1;
                h.strokeStyle = m.color;
                h.beginPath();
                h.moveTo(f - c, g - m.previous);
                h.lineTo(f, g - n);
                h.stroke();
                m.previous = n
            }
            this.last_update = a
        }
    }
};
osgViewer.View = function () {
    this._graphicContext = void 0;
    this._camera = new osg.Camera;
    this._scene = new osg.Node;
    this._sceneData = void 0;
    this._frameStamp = new osg.FrameStamp;
    this._manipulator = this._lightingMode = void 0;
    this.setLightingMode(osgViewer.View.LightingMode.HEADLIGHT);
    this._scene.getOrCreateStateSet().setAttributeAndMode(new osg.Material);
    this._scene.getOrCreateStateSet().setAttributeAndMode(new osg.Depth);
    this._scene.getOrCreateStateSet().setAttributeAndMode(new osg.BlendFunc);
    this._scene.getOrCreateStateSet().setAttributeAndMode(new osg.CullFace)
};
osgViewer.View.LightingMode = {
    NO_LIGHT : 0,
    HEADLIGHT : 1,
    SKY_LIGHT : 2
};
osgViewer.View.prototype = {
    setGraphicContext : function (a) {
        this._graphicContext = a
    },
    getGraphicContext : function () {
        return this._graphicContext
    },
    setUpView : function (a) {
        var c = a.width / a.height;
        this._camera.setViewport(new osg.Viewport(0, 0, a.width, a.height));
        osg.Matrix.makeLookAt([0, 0, -10], [0, 0, 0], [0, 1, 0], this._camera.getViewMatrix());
        osg.Matrix.makePerspective(60, c, 1, 1E3, this._camera.getProjectionMatrix())
    },
    computeIntersections : function (a, c, e) {
        e === void 0 && (e = -1);
        var f = new osgUtil.IntersectVisitor;
        f.setTraversalMask(e);
        f.addLineSegment([a, c, 0], [a, c, 1]);
        f.pushCamera(this._camera);
        this._sceneData.accept(f);
        return f.hits
    },
    setFrameStamp : function (a) {
        this._frameStamp = a
    },
    getFrameStamp : function () {
        return this._frameStamp
    },
    setCamera : function (a) {
        this._camera = a
    },
    getCamera : function () {
        return this._camera
    },
    setSceneData : function (a) {
        this._scene.removeChildren();
        this._scene.addChild(a);
        this._sceneData = a
    },
    getSceneData : function () {
        return this._sceneData
    },
    getScene : function () {
        return this._scene
    },
    getManipulator : function () {
        return this._manipulator
    },
    setManipulator : function (a) {
        this._manipulator = a
    },
    getLight : function () {
        return this._light
    },
    setLight : function (a) {
        this._light = a;
        this._lightingMode !== osgViewer.View.LightingMode.NO_LIGHT && this._scene.getOrCreateStateSet().setAttributeAndMode(this._light)
    },
    getLightingMode : function () {
        return this._lightingMode
    },
    setLightingMode : function (a) {
        if (this._lightingMode !== a)
            if (this._lightingMode = a, this._lightingMode !== osgViewer.View.LightingMode.NO_LIGHT) {
                if (!this._light)
                    this._light = new osg.Light, this._light.setAmbient([0.2,
                            0.2, 0.2, 1]), this._light.setDiffuse([0.8, 0.8, 0.8, 1]), this._light.setSpecular([0.5, 0.5, 0.5, 1])
            } else
                this._light = void 0
    }
};
osgViewer.Viewer = function (a, c, e) {
    osgViewer.View.call(this);
    c === void 0 && (c = {
            antialias : !0
        });
    osg.SimulateWebGLLostContext && (a = WebGLDebugUtils.makeLostContextSimulatingCanvas(a), a.loseContextInNCalls(osg.SimulateWebGLLostContext));
    gl = WebGLUtils.setupWebGL(a, c, e);
    var f = this;
    a.addEventListener("webglcontextlost", function (a) {
        f.contextLost();
        a.preventDefault()
    }, !1);
    a.addEventListener("webglcontextrestored", function () {
        f.contextRestored()
    }, !1);
    osg.reportWebGLError && (gl = WebGLDebugUtils.makeDebugContext(gl));
    if (gl) {
        this.setGraphicContext(gl);
        osg.init();
        this._canvas = a;
        this._frameRate = 60;
        osgUtil.UpdateVisitor = osg.UpdateVisitor;
        osgUtil.CullVisitor = osg.CullVisitor;
        this._urlOptions = !0;
        this._mouseEventNode = this._mouseWheelEventNode = a;
        this._keyboardEventNode = document;
        if (c) {
            if (c.mouseWheelEventNode)
                this._mouseWheelEventNode = c.mouseWheelEventNode;
            if (c.mouseEventNode)
                this._mouseEventNode = c.mouseEventNode;
            if (c.keyboardEventNode)
                this._keyboardEventNode = c.keyboardEventNode
        }
        this.setUpView(a)
    } else
        throw "No WebGL implementation found";
};
osgViewer.Viewer.prototype = osg.objectInehrit(osgViewer.View.prototype, {
        contextLost : function () {
            osg.log("webgl context lost");
            cancelRequestAnimFrame(this._requestID)
        },
        contextRestored : function () {
            osg.log("webgl context restored, but not supported - reload the page")
        },
        init : function () {
            this._done = !1;
            this._state = new osg.State;
            var a = this.getGraphicContext();
            this._state.setGraphicContext(a);
            a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, !0);
            this._updateVisitor = new osgUtil.UpdateVisitor;
            this._cullVisitor = new osgUtil.CullVisitor;
            this._renderStage =
                new osg.RenderStage;
            this._stateGraph = new osg.StateGraph;
            this._urlOptions && this.parseOptions();
            this.getCamera().setClearColor([0, 0, 0, 0])
        },
        getState : function () {
            return this._state
        },
        parseOptions : function () {
            var a = function () {
                for (var a = [], c, g = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), h = 0; h < g.length; h++) {
                    c = g[h].split("=");
                    var i = c[0].toLowerCase();
                    a.push(i);
                    c = c[1];
                    c === void 0 && (c = "1");
                    a[i] = c.toLowerCase()
                }
                return a
            }
            ();
            a.stats === "1" && this.initStats(a);
            var c = this.getGraphicContext();
            a.depth_test === "0" && this.getGraphicContext().disable(c.DEPTH_TEST);
            a.blend === "0" && this.getGraphicContext().disable(c.BLEND);
            a.cull_face === "0" && this.getGraphicContext().disable(c.CULL_FACE);
            a.light === "0" && this.setLightingMode(osgViewer.View.LightingMode.NO_LIGHT)
        },
        initStats : function (a) {
            var c = 50,
            e = 10;
            a.statsMaxMS !== void 0 && (c = parseInt(a.statsMaxMS, 10));
            a.statsStepMS !== void 0 && (e = parseInt(a.statsStepMS, 10));
            a = function (a) {
                var a = a === void 0 ? document.body : document.getElementById(a),
                f = document.createElement("div");
                f.innerHTML = "<div id='StatsDiv' style='float: left; position: relative; width: 300px; height: 150px; z-index: 10;'>\n<div id='StatsLegends' style='position: absolute; left: 0px; font-size: 14px;color: #ffffff;'>\n<div id='frameRate' style='color: #00ff00;' > frameRate </div>\n<div id='frameTime' style='color: #ffff00;' > frameTime </div>\n<div id='updateTime' style='color: #d07b1f;'> updateTime </div>\n<div id='cullTime' style='color: #73e0ff;'> cullTime </div>\n<div id='drawTime' style='color: #ff0000;'> drawTime </div>\n<div id='fps'> </div>\n</div>\n<div id='StatsCanvasDiv' style='position: relative;'>\n<canvas id='StatsCanvasGrid' width='300' height='150' style='z-index:-1; position: absolute; background: rgba(14,14,14,0.8); ' ></canvas>\n<canvas id='StatsCanvas' width='300' height='150' style='z-index:8; position: absolute;' ></canvas>\n<canvas id='StatsCanvasFps' width='30' height='15' style='z-index:9; position: absolute; top: 130px' ></canvas>\n</div>\n</div>";
                a.appendChild(f);
                a = document.getElementById("StatsCanvasGrid");
                f = a.getContext("2d");
                f.clearRect(0, 0, a.width, a.height);
                var g = Math.floor(c / e).toFixed(0),
                h = a.height / g;
                f.strokeStyle = "rgb(70,70,70)";
                for (var p = 0; p < g; p++)
                    f.beginPath(), f.moveTo(0, p * h), f.lineTo(a.width, p * h), f.stroke();
                f = document.getElementById("StatsCanvasFps").getContext("2d");
                f.font = "14px Sans";
                return document.getElementById("StatsCanvas")
            };
            if (this._canvasStats === void 0 || this._canvasStats === null)
                this._canvasStats = a();
            this._stats = new Stats.Stats(this._canvasStats);
            var f = this;
            this._frameRate = 1;
            this._drawTime = this._cullTime = this._updateTime = this._frameTime = 0;
            var g = this._canvasStats.height,
            h = g / c;
            g -= 2;
            a = function (a, c) {
                var e = document.getElementById(a);
                return e.style ? e.style.getPropertyValue(c) : null
            };
            this._stats.addLayer(a("frameRate", "color"), function () {
                var a = g / 60 * (1E3 / f._frameRate);
                return a > g ? g : a
            });
            this._stats.addLayer(a("frameTime", "color"), function () {
                var a = f._frameTime * h;
                return a > g ? g : a
            });
            this._stats.addLayer(a("updateTime", "color"), function () {
                var a = f._updateTime *
                    h;
                return a > g ? g : a
            });
            this._stats.addLayer(a("cullTime", "color"), function () {
                var a = f._cullTime * h;
                return a > g ? g : a
            });
            this._stats.addLayer(a("drawTime", "color"), function () {
                var a = f._drawTime * h;
                return a > g ? g : a
            })
        },
        update : function () {
            this.getScene().accept(this._updateVisitor)
        },
        cull : function () {
            this._stateGraph.clean();
            this._renderStage.reset();
            this._cullVisitor.reset();
            this._cullVisitor.setStateGraph(this._stateGraph);
            this._cullVisitor.setRenderStage(this._renderStage);
            var a = this.getCamera();
            this._cullVisitor.pushStateSet(a.getStateSet());
            this._cullVisitor.pushProjectionMatrix(a.getProjectionMatrix());
            a.getBound();
            this._cullVisitor.pushModelviewMatrix(osg.Matrix.makeIdentity([]));
            this._light && this._cullVisitor.addPositionedAttribute(this._light);
            this._cullVisitor.pushModelviewMatrix(a.getViewMatrix());
            this._cullVisitor.pushViewport(a.getViewport());
            this._cullVisitor.setCullSettings(a);
            this._renderStage.setClearDepth(a.getClearDepth());
            this._renderStage.setClearColor(a.getClearColor());
            this._renderStage.setClearMask(a.getClearMask());
            this._renderStage.setViewport(a.getViewport());
            this.getScene().accept(this._cullVisitor);
            this._cullVisitor.popModelviewMatrix();
            this._cullVisitor.popProjectionMatrix();
            this._cullVisitor.popViewport();
            this._cullVisitor.popStateSet();
            this._renderStage.sort()
        },
        draw : function () {
            var a = this.getState();
            this._renderStage.draw(a);
            a.popAllStateSets();
            a.applyWithoutProgram()
        },
        frame : function () {
            var a;
            a = (new Date).getTime();
            if (this._lastFrameTime === void 0)
                this._lastFrameTime = 0;
            this._frameRate = a - this._lastFrameTime;
            this._lastFrameTime = a;
            var c = this.getFrameStamp();
            if (c.getFrameNumber() === 0)
                c.setReferenceTime(a / 1E3), this._numberFrame = 0;
            c.setSimulationTime(a / 1E3 - c.getReferenceTime());
            this._updateVisitor.setFrameStamp(this.getFrameStamp());
            this.getManipulator() && (this.getManipulator().update(this._updateVisitor), osg.Matrix.copy(this.getManipulator().getInverseMatrix(), this.getCamera().getViewMatrix()));
            var e = (new Date).getTime();
            this.update();
            var f = (new Date).getTime();
            this._updateTime = f - e;
            this.cull();
            e = (new Date).getTime();
            this._cullTime = e - f;
            this.draw();
            this._drawTime = e = (new Date).getTime() - e;
            f = c.getFrameNumber() + 1;
            c.setFrameNumber(f);
            this._numberFrame++;
            c = (new Date).getTime();
            this._frameTime = (new Date).getTime() - a;
            if (this._stats !== void 0 && (this._stats.update(), this._numberFrame % 60 === 0))
                a = (this._numberFrame * 1E3 / (c - this._statsStartTime)).toFixed(1), this._statsStartTime = c, this._numberFrame = 0, c = document.getElementById("StatsCanvasFps"), f = c.getContext("2d"), f.clearRect(0, 0, c.width, c.height), f.fillStyle = "rgb(255,255,255)",
                f.fillText(a, 0, c.height)
        },
        setDone : function (a) {
            this._done = a
        },
        done : function () {
            return this._done
        },
        run : function () {
            var a = this,
            c = function () {
                if (!a.done())
                    a._requestID = window.requestAnimationFrame(c, a.canvas), a.frame()
            };
            c()
        },
        setupManipulator : function (a, c) {
            a === void 0 && (a = new osgGA.OrbitManipulator);
            a.setNode !== void 0 ? a.setNode(this.getSceneData()) : a.view = this;
            this.setManipulator(a);
            var e = this;
            if (c === void 0 || c === !1) {
                this._canvas.addEventListener("touchstart", function (a) {
                    return e.getManipulator().touchstart(a)
                },
                    !1);
                this._canvas.addEventListener("touchend", function (a) {
                    return e.getManipulator().touchend(a)
                }, !1);
                this._canvas.addEventListener("touchmove", function (a) {
                    return e.getManipulator().touchmove(a)
                }, !1);
                this._canvas.addEventListener("touchcancel", function (a) {
                    return e.getManipulator().touchcancel(a)
                }, !1);
                this._canvas.addEventListener("touchleave", function (a) {
                    return e.getManipulator().touchleave(a)
                }, !1);
                this._canvas.addEventListener("gesturestart", function (a) {
                    return e.getManipulator().gesturestart(a)
                }, !1);
                this._canvas.addEventListener("gesturechange", function (a) {
                    return e.getManipulator().gesturechange(a)
                }, !1);
                this._canvas.addEventListener("gestureend", function (a) {
                    return e.getManipulator().gestureend(a)
                }, !1);
                var f = function (a) {
                    return e.getManipulator().mousedown(a)
                },
                g = function (a) {
                    return e.getManipulator().mouseup(a)
                },
                h = function (a) {
                    return e.getManipulator().mousemove(a)
                },
                i = function (a) {
                    return e.getManipulator().dblclick(a)
                },
                k = function (a) {
                    var c = a || window.event,
                    f = [].slice.call(arguments, 1),
                    g = 0,
                    h = 0,
                    i = 0;
                    a.type =
                        "mousewheel";
                    a.wheelDelta && (g = a.wheelDelta / 120);
                    a.detail && (g = -a.detail / 3);
                    i = g;
                    c.axis !== void 0 && c.axis === c.HORIZONTAL_AXIS && (i = 0, h = -1 * g);
                    c.wheelDeltaY !== void 0 && (i = c.wheelDeltaY / 120);
                    c.wheelDeltaX !== void 0 && (h = -1 * c.wheelDeltaX / 120);
                    f.unshift(a, g, h, i);
                    c = e.getManipulator();
                    return c.mousewheel.apply(c, f)
                };
                e.getManipulator().mousedown && this._mouseEventNode.addEventListener("mousedown", f, !1);
                e.getManipulator().mouseup && this._mouseEventNode.addEventListener("mouseup", g, !1);
                e.getManipulator().mousemove &&
                this._mouseEventNode.addEventListener("mousemove", h, !1);
                e.getManipulator().dblclick && this._mouseEventNode.addEventListener("dblclick", i, !1);
                e.getManipulator().mousewheel && (this._mouseWheelEventNode.addEventListener("DOMMouseScroll", k, !1), this._mouseWheelEventNode.addEventListener("mousewheel", k, !1));
                f = function (a) {
                    return e.getManipulator().keydown(a)
                };
                g = function (a) {
                    return e.getManipulator().keyup(a)
                };
                e.getManipulator().keydown && this._keyboardEventNode.addEventListener("keydown", f, !1);
                e.getManipulator().keyup &&
                this._keyboardEventNode.addEventListener("keyup", g, !1);
                var m = this;
                window.onresize = function () {
                    var a = window.innerWidth,
                    c = window.innerHeight,
                    e = m._canvas.width,
                    f = m._canvas.height;
                    m._canvas.width = a;
                    m._canvas.height = c;
                    m._canvas.style.width = a;
                    m._canvas.style.height = c;
                    osg.log("window resize " + e + "x" + f + " to " + a + "x" + c);
                    e = m.getCamera();
                    f = e.getViewport();
                    a /= f.width();
                    c /= f.height();
                    var g = a / c;
                    f.setViewport(f.x() * a, f.y() * c, f.width() * a, f.height() * c);
                    g !== 1 && osg.Matrix.postMult(osg.Matrix.makeScale(1, g, 1, []), e.getProjectionMatrix())
                }
            }
        }
    });
osgGA = {
    Manipulator : function () {
        this._touches = [];
        this._inverseMatrix = Array(16);
        osg.Matrix.makeIdentity(this._inverseMatrix)
    }
};
osgGA.Manipulator.prototype = {
    getPositionRelativeToCanvas : function (a) {
        var c = a.target,
        e,
        f;
        if (a.pageX || a.pageY)
            e = a.pageX, f = a.pageY;
        else if (a.clientX || a.clientY)
            e = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, f = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        a = function (a) {
            for (var c = 0, e = 0, c = a.offsetLeft, e = a.offsetTop, f = document.getElementsByTagName("body")[0]; a.offsetParent && a != f; )
                c += a.offsetParent.offsetLeft, e += a.offsetParent.offsetTop, a = a.offsetParent;
            return [c,
                e]
        }
        (c);
        e -= a[0];
        f = c.height - (f - a[1]);
        return [e, f]
    },
    keydown : function () {},
    keyup : function () {},
    mouseup : function () {},
    mousedown : function () {},
    mousemove : function () {},
    dblclick : function () {},
    touchstart : function (a) {
        a.preventDefault();
        for (var a = a.changedTouches, c = 0, e = a.length; c < e; c++) {
            var f = a[c],
            g = f.identifier;
            this._touches[g] = f;
            f = this.getPositionRelativeToCanvas(f);
            osg.debug("touch " + g + " started at " + f[0] + " " + f[1])
        }
    },
    touchend : function (a) {
        a.preventDefault();
        for (var a = a.changedTouches, c = 0, e = a.length; c < e; c++) {
            var f =
                a[c],
            g = f.identifier;
            this._touches[g] = void 0;
            f = this.getPositionRelativeToCanvas(f);
            osg.debug("touch " + g + " stoped at " + f[0] + " " + f[1])
        }
    },
    touchmove : function (a) {
        a.preventDefault();
        for (var a = a.changedTouches, c = 0, e = a.length; c < e; c++) {
            var f = a[c],
            g = f.identifier,
            h = this.getPositionRelativeToCanvas(f),
            i = this.getPositionRelativeToCanvas(this._touches[g]),
            k = h[0] - i[0],
            h = h[1] - i[1];
            this._touches[g] = f;
            osg.debug("touch " + g + " moved " + k + " " + h)
        }
    },
    touchleave : function (a) {
        return this.touchend(a)
    },
    touchcancel : function (a) {
        a.preventDefault();
        for (var a = a.changedTouches, c = 0, e = a.length; c < e; c++) {
            var f = a[c],
            g = f.identifier;
            this._touches[g] = void 0;
            f = this.getPositionRelativeToCanvas(f);
            osg.debug("touch " + g + " cancelled at " + f[0] + " " + f[1])
        }
    },
    gesturestart : function (a) {
        a.preventDefault();
        osg.debug("gesturestart  scale " + a.scale + " rotation " + a.rotation)
    },
    gestureend : function (a) {
        a.preventDefault();
        osg.debug("gestureend  scale " + a.scale + " rotation " + a.rotation)
    },
    gesturechange : function (a) {
        a.preventDefault();
        osg.debug("gesturechange scale " + a.scale + " rotation " +
            a.rotation)
    },
    mousewheel : function (a, c, e, f) {
        a.preventDefault();
        osg.debug("mousewheel " + c + "  " + e + " " + f)
    },
    update : function () {},
    getInverseMatrix : function () {
        return this._inverseMatrix
    }
};
osgGA.OrbitManipulator = function () {
    osgGA.Manipulator.call(this);
    this.init()
};
osgGA.OrbitManipulator.Rotate = 0;
osgGA.OrbitManipulator.Pan = 1;
osgGA.OrbitManipulator.Zoom = 2;
osgGA.OrbitManipulator.Interpolator = function (a, c) {
    this._current = Array(a);
    this._target = Array(a);
    this._delta = Array(a);
    this._delay = c;
    if (this._delay === void 0)
        this._delay = 0.15;
    this._reset = !1;
    this.reset()
};
osgGA.OrbitManipulator.Interpolator.prototype = {
    reset : function () {
        for (var a = 0, c = this._current.length; a < c; a++)
            this._current[a] = this._target[a] = 0;
        this._reset = !0
    },
    update : function () {
        for (var a = 0, c = this._current.length; a < c; a++) {
            var e = (this._target[a] - this._current[a]) * this._delay;
            this._delta[a] = e;
            this._current[a] += e
        }
        return this._delta
    },
    set : function () {
        for (var a = 0, c = this._current.length; a < c; a++)
            this._current[a] = this._target[a] = arguments[a];
        this._reset = !1
    },
    isReset : function () {
        return this._reset
    },
    getCurrent : function () {
        return this._current
    },
    setTarget : function () {
        for (var a = 0, c = this._target.length; a < c; a++)
            this._target[a] = this._reset ? this._current[a] = arguments[a] : arguments[a];
        this._reset = !1
    },
    getTarget : function () {
        return this._target
    },
    getDelta : function () {
        return this._delta
    }
};
osgGA.OrbitManipulator.prototype = osg.objectInehrit(osgGA.Manipulator.prototype, {
        init : function () {
            this._distance = 25;
            this._target = Array(3);
            osg.Vec3.init(this._target);
            this._rotation = osg.Matrix.mult(osg.Matrix.makeRotate(Math.PI, 0, 0, 1, []), osg.Matrix.makeRotate(-Math.PI / 10, 1, 0, 0, []), []);
            this._time = 0;
            this._rotate = new osgGA.OrbitManipulator.Interpolator(2);
            this._pan = new osgGA.OrbitManipulator.Interpolator(2);
            this._zoom = new osgGA.OrbitManipulator.Interpolator(1);
            this._zoom.reset = function () {
                osgGA.OrbitManipulator.Interpolator.prototype.reset.call(this);
                this._start = 0
            };
            this._buttonup = !0;
            this._scale = 10;
            this._currentMode = void 0;
            this._minDistance = this._maxDistance = 0;
            this._scaleMouseMotion = 0.1;
            this._moveTouch = this._node = void 0;
            this._inverseMatrix = Array(16);
            this._rotateKey = 65;
            this._zoomKey = 83;
            this._panKey = 68
        },
        reset : function () {
            this.init()
        },
        setNode : function (a) {
            this._node = a
        },
        setTarget : function (a) {
            osg.Vec3.copy(a, this._target);
            var c = Array(3);
            this.getEyePosition(c);
            this._distance = osg.Vec3.distance(c, a)
        },
        setEyePosition : function (a) {
            var c = this._rotation,
            e = this._target,
            f = osg.Vec3.sub(a, e, []);
            osg.Vec3.normalize(f, f);
            var g = osg.Vec3.cross(f, [0, 0, 1], []);
            osg.Vec3.normalize(g, g);
            var h = osg.Vec3.cross(g, f, []);
            osg.Vec3.normalize(h, h);
            c[0] = g[0];
            c[1] = f[0];
            c[2] = h[0];
            c[3] = 0;
            c[4] = g[1];
            c[5] = f[1];
            c[6] = h[1];
            c[7] = 0;
            c[8] = g[2];
            c[9] = f[2];
            c[10] = h[2];
            c[11] = 0;
            c[12] = 0;
            c[13] = 0;
            c[14] = 0;
            c[15] = 1;
            this._distance = osg.Vec3.distance(a, e)
        },
        computeHomePosition : function () {
            if (this._node !== void 0) {
                var a = this._node.getBound();
                this.setDistance(a.radius() * 1.5);
                this.setTarget(a.center())
            }
        },
        keydown : function (a) {
            if (a.keyCode ===
                32)
                this.computeHomePosition();
            else if (a.keyCode === 33)
                this.distanceIncrease();
            else if (a.keyCode === 34)
                this.distanceDecrease();
            else if (a.keyCode === this._panKey && this._currentMode !== osgGA.OrbitManipulator.Pan)
                this._currentMode = osgGA.OrbitManipulator.Pan, this._pan.reset(), this.pushButton(), a.preventDefault();
            else if (a.keyCode === this._zoomKey && this._currentMode !== osgGA.OrbitManipulator.Zoom)
                this._currentMode = osgGA.OrbitManipulator.Zoom, this._zoom.reset(), this.pushButton(), a.preventDefault();
            else if (a.keyCode ===
                this._rotateKey && this._currentMode !== osgGA.OrbitManipulator.Rotate)
                this._currentMode = osgGA.OrbitManipulator.Rotate, this._rotate.reset(), this.pushButton(), a.preventDefault()
        },
        keyup : function (a) {
            a.keyCode === this._panKey ? this.mouseup(a) : a.keyCode === this._rotateKey ? this.mouseup(a) : a.keyCode === this._rotateKey && this.mouseup(a);
            this._currentMode = void 0
        },
        touchstart : function (a) {
            if (this._currentMode === void 0)
                this._currentMode = osgGA.OrbitManipulator.Rotate;
            var c = a.changedTouches;
            if (this._moveTouch === void 0)
                this._moveTouch =
                    new osgGA.OrbitManipulator.TouchEvent;
            if (this._moveTouch.id === void 0) {
                var c = c[0],
                e = c.identifier,
                f = this.getPositionRelativeToCanvas(c);
                this._rotate.set(f[0], f[1]);
                this._moveTouch.init(e, f[0], f[1]);
                this.pushButton(c)
            }
            a.preventDefault()
        },
        touchend : function (a) {
            a.preventDefault();
            this._moveTouch = this._currentMode = void 0;
            this.releaseButton(a)
        },
        touchmove : function (a) {
            a.preventDefault();
            for (var a = a.changedTouches, c = 0, e = a.length; c < e; c++) {
                var f = a[c],
                g = f.identifier;
                g === this._moveTouch.id && (f = this.getPositionRelativeToCanvas(f),
                    this._rotate.setTarget(f[0], f[1]), this._moveTouch.init(g, f[0], f[1]))
            }
        },
        touchleave : function (a) {
            return this.touchend(a)
        },
        touchcancel : function (a) {
            this.touchend(a)
        },
        gesturestart : function (a) {
            a.preventDefault();
            if (this._moveTouch)
                this._moveTouch.id = void 0;
            this._moveTouch.init(void 0, 0, 0, a.scale, a.rotation);
            this._zoom.reset()
        },
        gestureend : function (a) {
            a.preventDefault();
            this._moveTouch.init(void 0, 0, 0, a.scale, a.rotation);
            this._currentMode = void 0
        },
        gesturechange : function (a) {
            a.preventDefault();
            var c = (a.scale -
                this._moveTouch.scale) * 5;
            this._moveTouch.init(void 0, 0, 0, a.scale, a.rotation);
            this._zoom.setTarget(this._zoom.getTarget()[0] - c)
        },
        mouseup : function (a) {
            this.releaseButton(a);
            this._currentMode = void 0
        },
        mousedown : function (a) {
            if (this._currentMode === void 0)
                this._currentMode = a.button === 0 ? a.shiftKey ? osgGA.OrbitManipulator.Pan : a.ctrlKey ? osgGA.OrbitManipulator.Zoom : osgGA.OrbitManipulator.Rotate : osgGA.OrbitManipulator.Pan;
            this.pushButton(a);
            var c = this.getPositionRelativeToCanvas(a);
            if (this._currentMode === osgGA.OrbitManipulator.Rotate)
                this._rotate.reset(c[0],
                    c[1]), this._rotate.set(c[0], c[1]);
            else if (this._currentMode === osgGA.OrbitManipulator.Pan)
                this._pan.reset(c[0], c[1]), this._pan.set(c[0], c[1]);
            else if (this._currentMode === osgGA.OrbitManipulator.Zoom)
                this._zoom._start = c[1], this._zoom.set(0);
            a.preventDefault()
        },
        mousemove : function (a) {
            if (this._buttonup !== !0) {
                var c = this.getPositionRelativeToCanvas(a);
                if (isNaN(c[0]) === !1 && isNaN(c[1]) === !1)
                    if (this._currentMode === osgGA.OrbitManipulator.Rotate)
                        this._rotate.setTarget(c[0], c[1]);
                    else if (this._currentMode === osgGA.OrbitManipulator.Pan)
                        this._pan.setTarget(c[0],
                            c[1]);
                    else if (this._currentMode === osgGA.OrbitManipulator.Zoom) {
                        if (this._zoom.isReset())
                            this._zoom._start = c[1], this._zoom.set(0);
                        var e = c[1] - this._zoom._start;
                        this._zoom._start = c[1];
                        this._zoom.setTarget(this._zoom.getTarget()[0] - e / 20)
                    }
                a.preventDefault();
                a.preventDefault()
            }
        },
        setMaxDistance : function (a) {
            this._maxDistance = a
        },
        setMinDistance : function (a) {
            this._minDistance = a
        },
        setDistance : function (a) {
            this._distance = a
        },
        getDistance : function () {
            return this._distance
        },
        computePan : function (a, c) {
            c *= this._distance;
            a *=
            this._distance;
            var e = Array(16),
            f = Array(3),
            g = Array(3);
            osg.Matrix.inverse(this._rotation, e);
            f[0] = osg.Matrix.get(e, 0, 0);
            f[1] = osg.Matrix.get(e, 0, 1);
            f[2] = osg.Matrix.get(e, 0, 2);
            osg.Vec3.normalize(f, f);
            g[0] = osg.Matrix.get(e, 2, 0);
            g[1] = osg.Matrix.get(e, 2, 1);
            g[2] = osg.Matrix.get(e, 2, 2);
            osg.Vec3.normalize(g, g);
            osg.Vec3.mult(f, -a, f);
            osg.Vec3.mult(g, c, g);
            osg.Vec3.add(this._target, f, this._target);
            osg.Vec3.add(this._target, g, this._target)
        },
        computeRotation : function (a, c) {
            var e = osg.Matrix.makeRotate(a / 10, 0, 0, 1, []),
            f = osg.Matrix.mult(this._rotation, e, []),
            e = osg.Matrix.makeRotate(c / 10, 1, 0, 0, []),
            e = osg.Matrix.mult(e, f, []),
            g = [];
            osg.Matrix.inverse(e, g);
            g = osg.Matrix.transformVec3(g, [0, this._distance, 0], Array(3));
            g = osg.Vec3.neg(g, []);
            osg.Vec3.normalize(g, g);
            g = osg.Vec3.dot(g, [0, 0, 1]);
            this._rotation = Math.abs(g) > 0.95 ? f : e
        },
        releaseButton : function () {
            this._buttonup = !0
        },
        mousewheel : function (a, c) {
            a.preventDefault();
            this._zoom.setTarget(this._zoom.getTarget()[0] - c)
        },
        computeZoom : function (a) {
            this.zoom(a)
        },
        zoom : function (a) {
            a *= this._distance;
            if (this._minDistance > 0 && a < this._minDistance)
                a = this._minDistance;
            if (this._maxDistance > 0 && a > this._maxDistance)
                a = this._maxDistance;
            this._distance = a
        },
        pushButton : function () {
            this._buttonup = !1
        },
        getTarget : function (a) {
            osg.Vec3.copy(this._target, a)
        },
        getEyePosition : function (a) {
            var c = Array(16);
            osg.Matrix.inverse(this._rotation, c);
            osg.Matrix.transformVec3(c, [0, this._distance, 0], a);
            osg.Vec3.add(this._target, a, a)
        },
        update : function (a) {
            a = a.getFrameStamp().getSimulationTime();
            if (this._lastUpdate === void 0)
                this._lastUpdate =
                    a;
            this._lastUpdate = a;
            a = this._rotate.update();
            this.computeRotation(-a[0] * 0.1, -a[1] * 0.1);
            a = this._pan.update();
            this.computePan(-a[0] * 0.002, -a[1] * 0.002);
            a = this._zoom.update();
            this.computeZoom(1 + a[0] / 10);
            var a = this._target,
            c = this._distance,
            e = Array(3);
            osg.Matrix.inverse(this._rotation, this._inverseMatrix);
            osg.Matrix.transformVec3(this._inverseMatrix, [0, c, 0], e);
            osg.Matrix.makeLookAt(osg.Vec3.add(a, e, e), a, [0, 0, 1], this._inverseMatrix)
        },
        getInverseMatrix : function () {
            return this._inverseMatrix
        }
    });
osgGA.OrbitManipulator.TouchEvent = function () {
    this.y = this.x = 0;
    this.scale = 1;
    this.rotation = 0;
    this.id = void 0
};
osgGA.OrbitManipulator.TouchEvent.prototype = {
    init : function (a, c, e, f, g) {
        this.id = a;
        this.x = c;
        this.y = e;
        if (f !== void 0)
            this.scale = f;
        if (g !== void 0)
            this.rotation = g
    }
};
osgGA.FirstPersonManipulator = function () {
    osgGA.Manipulator.call(this);
    this.init()
};
osgGA.FirstPersonManipulator.prototype = osg.objectInehrit(osgGA.Manipulator.prototype, {
        setNode : function (a) {
            this._node = a;
            this.computeHomePosition()
        },
        computeHomePosition : function () {
            if (this._node !== void 0) {
                var a = this._node.getBound();
                this._radius = a.radius();
                this._eye = [0, -a.radius() * 1.5, 0];
                this._angleHorizontal = this._angleVertical = 0
            }
        },
        init : function () {
            this._direction = [0, 1, 0];
            this._angleHorizontal = this._angleVertical = 0;
            this._eye = [0, 25, 10];
            this._up = [0, 0, 1];
            this._buttonup = !0;
            this._radius = 1;
            this._forward = new osgGA.OrbitManipulator.Interpolator(1);
            this._side = new osgGA.OrbitManipulator.Interpolator(1);
            this._lookPosition = new osgGA.OrbitManipulator.Interpolator(2);
            this._stepFactor = 1;
            this._target = Array(3);
            osg.Vec3.init(this._target)
        },
        reset : function () {
            this.init()
        },
        getEyePosition : function (a) {
            a[0] = this._eye[0];
            a[1] = this._eye[1];
            a[2] = this._eye[2];
            return a
        },
        setEyePosition : function (a) {
            this._eye[0] = a[0];
            this._eye[1] = a[1];
            this._eye[2] = a[2]
        },
        getTarget : function (a, c) {
            c === void 0 && (c = 25);
            var e = osg.Vec3.mult(this._direction, c, Array(3));
            osg.Vec3.add(this._eye,
                e, a)
        },
        setTarget : function (a) {
            this._target[0] = a[0];
            this._target[1] = a[1];
            this._target[2] = a[2];
            var c = Array(3);
            osg.Vec3.sub(a, this._eye, c);
            c[2] = 0;
            osg.Vec3.normalize(c, c);
            this._angleHorizontal = Math.acos(c[1]);
            if (c[0] < 0)
                this._angleHorizontal = -this._angleHorizontal;
            osg.Vec3.sub(a, this._eye, c);
            osg.Vec3.normalize(c, c);
            this._angleVertical = -Math.asin(c[2]);
            osg.Vec3.copy(c, this._direction)
        },
        mousedown : function (a) {
            a = this.getPositionRelativeToCanvas(a);
            this._lookPosition.set(a[0], a[1]);
            this._buttonup = !1
        },
        mouseup : function () {
            this._buttonup =
                !0
        },
        mousemove : function (a) {
            this._buttonup !== !0 && (a = this.getPositionRelativeToCanvas(a), this._lookPosition.setTarget(a[0], a[1]))
        },
        computeRotation : function (a, c) {
            this._angleVertical += c * 0.01;
            this._angleHorizontal -= a * 0.01;
            var e = [],
            f = [],
            g = [];
            osg.Matrix.makeRotate(this._angleVertical, 1, 0, 0, e);
            osg.Matrix.makeRotate(this._angleHorizontal, 0, 0, 1, f);
            osg.Matrix.mult(f, e, g);
            this._direction = osg.Matrix.transformVec3(g, [0, 1, 0], []);
            osg.Vec3.normalize(this._direction, this._direction);
            this._up = osg.Matrix.transformVec3(g,
                    [0, 0, 1], [])
        },
        mousewheel : function (a, c) {
            a.preventDefault();
            this._stepFactor = Math.min(Math.max(0.001, this._stepFactor + c * 0.01), 4)
        },
        update : function (a) {
            var c = a.getFrameStamp().getSimulationTime();
            if (this._lastUpdate === void 0)
                this._lastUpdate = c;
            a = c - this._lastUpdate;
            this._lastUpdate = c;
            this._forward.update();
            this._side.update();
            c = this._lookPosition.update();
            this.computeRotation(-c[0] * 0.5, -c[1] * 0.5);
            c = Array(2);
            c[0] = this._forward.getCurrent()[0];
            c[1] = this._side.getCurrent()[0];
            osg.Vec2.length(c) > 1 && osg.Vec2.normalize(c,
                c);
            var e = this._radius;
            this._radius < 0.001 && (e = 1);
            this.moveForward(c[0] * e * this._stepFactor * a);
            this.strafe(c[1] * e * this._stepFactor * a);
            this._target = a = osg.Vec3.add(this._eye, this._direction, []);
            osg.Matrix.makeLookAt(this._eye, a, this._up, this._inverseMatrix)
        },
        getInverseMatrix : function () {
            return this._inverseMatrix
        },
        moveForward : function (a) {
            a = osg.Vec3.mult(osg.Vec3.normalize(this._direction, []), a, []);
            this._eye = osg.Vec3.add(this._eye, a, [])
        },
        strafe : function (a) {
            var c = osg.Vec3.cross(this._direction, this._up, []),
            a = osg.Vec3.mult(osg.Vec3.normalize(c, c), a, []);
            this._eye = osg.Vec3.add(this._eye, a, [])
        },
        keydown : function (a) {
            if (a.keyCode === 32)
                this.computeHomePosition();
            else if (a.keyCode === 87 || a.keyCode === 90 || a.keyCode === 38)
                return this._forward.setTarget(1), !1;
            else if (a.keyCode === 83 || a.keyCode === 40)
                return this._forward.setTarget(-1), !1;
            else if (a.keyCode === 68 || a.keyCode === 39)
                return this._side.setTarget(1), !1;
            else if (a.keyCode === 65 || a.keyCode === 81 || a.keyCode === 37)
                return this._side.setTarget(-1), !1
        },
        keyup : function (a) {
            if (a.keyCode ===
                87 || a.keyCode === 90 || a.keyCode === 38)
                return this._forward.setTarget(0), !1;
            else if (a.keyCode == 83 || a.keyCode === 40)
                return this._forward.setTarget(0), !1;
            else if (a.keyCode == 68 || a.keyCode === 39)
                return this._side.setTarget(0), !1;
            else if (a.keyCode === 65 || a.keyCode === 81 || a.keyCode === 37)
                return this._side.setTarget(0), !1
        }
    });
osgGA.SwitchManipulator = function () {
    osgGA.Manipulator.call(this);
    this._manipulatorList = [];
    this._currentManipulator = void 0
};
osgGA.SwitchManipulator.prototype = osg.objectInehrit(osgGA.Manipulator.prototype, {
        update : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.update(a)
        },
        setNode : function (a) {
            var c = this.getCurrentManipulator();
            c.setNode === void 0 ? osg.log("manipulator has not setNode method") : c.setNode(a)
        },
        getNumManipulator : function () {
            return this._manipulatorList.length
        },
        addManipulator : function (a) {
            this._manipulatorList.push(a);
            if (this._currentManipulator === void 0)
                this._currentManipulator = 0
        },
        getManipulatorList : function () {
            return this._manipulatorList
        },
        setManipulatorIndex : function (a) {
            this._currentManipulator = a
        },
        getCurrentManipulatorIndex : function () {
            return this._currentManipulator
        },
        getCurrentManipulator : function () {
            return this._manipulatorList[this._currentManipulator]
        },
        reset : function () {
            this.getCurrentManipulator().reset()
        },
        computeHomePosition : function () {
            var a = this.getCurrentManipulator();
            a !== void 0 && a.computeHomePosition()
        },
        keydown : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.keydown(a)
        },
        keyup : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.keyup(a)
        },
        mouseup : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.mouseup(a)
        },
        mousedown : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.mousedown(a)
        },
        mousemove : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.mousemove(a)
        },
        dblclick : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.dblclick(a)
        },
        touchstart : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.touchstart(a)
        },
        touchend : function (a) {
            var c =
                this.getCurrentManipulator();
            if (c !== void 0)
                return c.touchend(a)
        },
        touchmove : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.touchmove(a)
        },
        touchleave : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.touchleave(a)
        },
        touchcancel : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.touchcancel(a)
        },
        gesturestart : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.gesturestart(a)
        },
        gestureend : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.gestureend(a)
        },
        gesturechange : function (a) {
            var c = this.getCurrentManipulator();
            if (c !== void 0)
                return c.gesturechange(a)
        },
        mousewheel : function (a, c, e, f) {
            var g = this.getCurrentManipulator();
            if (g !== void 0)
                return g.mousewheel(a, c, e, f)
        },
        getInverseMatrix : function () {
            var a = this.getCurrentManipulator();
            if (a !== void 0)
                return a.getInverseMatrix()
        }
    });
osgDB.ObjectWrapper.serializers.osg = {};
osgDB.ObjectWrapper.serializers.osg.Object = function (a, c) {
    var e = a.getJSON();
    e.Name && c.setName(e.Name);
    e.UserDataContainer && (e = a.setJSON(e.UserDataContainer).readUserDataContainer(), e !== void 0 && c.setUserData(e));
    return c
};
osgDB.ObjectWrapper.serializers.osg.Node = function (a, c) {
    var e = a.getJSON();
    osgDB.ObjectWrapper.serializers.osg.Object(a, c);
    var f = [],
    g = function (e) {
        var e = a.setJSON(e).readObject(),
        g = osgDB.Promise.defer();
        f.push(g.promise);
        osgDB.Promise.when(e).then(function (a) {
            a && c.addUpdateCallback(a);
            g.resolve()
        })
    };
    if (e.UpdateCallbacks)
        for (var h = 0, i = e.UpdateCallbacks.length; h < i; h++)
            g(e.UpdateCallbacks[h]);
    if (e.StateSet) {
        var g = a.setJSON(e.StateSet).readObject(),
        k = osgDB.Promise.defer();
        f.push(k.promise);
        osgDB.Promise.when(g).then(function (a) {
            c.setStateSet(a);
            k.resolve()
        })
    }
    g = function (e) {
        var e = a.setJSON(e).readObject(),
        g = osgDB.Promise.defer();
        f.push(g.promise);
        osgDB.Promise.when(e).then(function (a) {
            a && c.addChild(a);
            g.resolve(a)
        })
    };
    if (e.Children) {
        h = 0;
        for (i = e.Children.length; h < i; h++)
            g(e.Children[h])
    }
    var m = osgDB.Promise.defer();
    osgDB.Promise.all(f).then(function () {
        m.resolve(c)
    });
    return m.promise
};
osgDB.ObjectWrapper.serializers.osg.StateSet = function (a, c) {
    var e = a.getJSON();
    osgDB.ObjectWrapper.serializers.osg.Object(a, c);
    e.RenderingHint !== void 0 && c.setRenderingHint(e.RenderingHint);
    var f = function (e) {
        var e = a.setJSON(e).readObject(),
        f = osgDB.Promise.defer();
        g.push(f.promise);
        osgDB.Promise.when(e).then(function (a) {
            a !== void 0 && c.setAttributeAndMode(a);
            f.resolve()
        })
    },
    g = [];
    if (e.AttributeList !== void 0)
        for (var h = 0, i = e.AttributeList.length; h < i; h++)
            f(e.AttributeList[h]);
    f = function (e, f) {
        var h = a.setJSON(f).readObject(),
        i = osgDB.Promise.defer();
        g.push(i.promise);
        osgDB.Promise.when(h).then(function (a) {
            a && c.setTextureAttributeAndMode(e, a);
            i.resolve()
        })
    };
    if (e.TextureAttributeList) {
        e = e.TextureAttributeList;
        h = 0;
        for (i = e.length; h < i; h++)
            for (var k = e[h], m = 0, n = k.length; m < n; m++)
                f(h, k[m])
    }
    var p = osgDB.Promise.defer();
    osgDB.Promise.all(g).then(function () {
        p.resolve(c)
    });
    return p.promise
};
osgDB.ObjectWrapper.serializers.osg.Material = function (a, c) {
    var e = a.getJSON();
    if (e.Diffuse !== void 0 && e.Emission !== void 0 && e.Specular !== void 0 && e.Shininess !== void 0)
        return osgDB.ObjectWrapper.serializers.osg.Object(a, c), c.setAmbient(e.Ambient), c.setDiffuse(e.Diffuse), c.setEmission(e.Emission), c.setSpecular(e.Specular), c.setShininess(e.Shininess), c
};
osgDB.ObjectWrapper.serializers.osg.BlendFunc = function (a, c) {
    var e = a.getJSON();
    if (e.SourceRGB && e.SourceAlpha && e.DestinationRGB && e.DestinationAlpha)
        return osgDB.ObjectWrapper.serializers.osg.Object(a, c), c.setSourceRGB(e.SourceRGB), c.setSourceAlpha(e.SourceAlpha), c.setDestinationRGB(e.DestinationRGB), c.setDestinationAlpha(e.DestinationAlpha), c
};
osgDB.ObjectWrapper.serializers.osg.CullFace = function (a, c) {
    var e = a.getJSON();
    if (e.Mode !== void 0)
        return osgDB.ObjectWrapper.serializers.osg.Object(a, c), c.setMode(e.Mode), c
};
osgDB.ObjectWrapper.serializers.osg.BlendColor = function (a, c) {
    var e = a.getJSON();
    if (e.ConstantColor !== void 0)
        return osgDB.ObjectWrapper.serializers.osg.Object(a, c), c.setConstantColor(e.ConstantColor), c
};
osgDB.ObjectWrapper.serializers.osg.Light = function (a, c) {
    var e = a.getJSON();
    if (e.LightNum !== void 0 && e.Ambient !== void 0 && e.Diffuse !== void 0 && e.Direction !== void 0 && e.Position !== void 0 && e.Specular !== void 0 && e.SpotCutoff !== void 0 && e.LinearAttenuation !== void 0 && e.ConstantAttenuation !== void 0 && e.QuadraticAttenuation !== void 0)
        return osgDB.ObjectWrapper.serializers.osg.Object(a, c), c.setAmbient(e.Ambient), c.setConstantAttenuation(e.ConstantAttenuation), c.setDiffuse(e.Diffuse), c.setDirection(e.Direction), c.setLightNumber(e.LightNum),
        c.setLinearAttenuation(e.LinearAttenuation), c.setPosition(e.Position), c.setQuadraticAttenuation(e.QuadraticAttenuation), c.setSpecular(e.Specular), c.setSpotCutoff(e.SpotCutoff), c.setSpotBlend(0.01), e.SpotExponent !== void 0 && c.setSpotBlend(e.SpotExponent / 128), c
};
osgDB.ObjectWrapper.serializers.osg.Texture = function (a, c) {
    var e = a.getJSON();
    osgDB.ObjectWrapper.serializers.osg.Object(a, c);
    e.MinFilter !== void 0 && c.setMinFilter(e.MinFilter);
    e.MagFilter !== void 0 && c.setMagFilter(e.MagFilter);
    e.WrapT !== void 0 && c.setWrapT(e.WrapT);
    e.WrapS !== void 0 && c.setWrapS(e.WrapS);
    e.File !== void 0 && osgDB.Promise.when(a.readImageURL(e.File)).then(function (a) {
        c.setImage(a)
    });
    return c
};
osgDB.ObjectWrapper.serializers.osg.Projection = function (a, c) {
    var e = a.getJSON();
    if (e.Matrix !== void 0) {
        var f = osgDB.ObjectWrapper.serializers.osg.Node(a, c);
        e.Matrix !== void 0 && c.setMatrix(e.Matrix);
        return f
    }
};
osgDB.ObjectWrapper.serializers.osg.MatrixTransform = function (a, c) {
    var e = a.getJSON();
    if (e.Matrix) {
        var f = osgDB.ObjectWrapper.serializers.osg.Node(a, c);
        e.Matrix !== void 0 && c.setMatrix(e.Matrix);
        return f
    }
};
osgDB.ObjectWrapper.serializers.osg.LightSource = function (a, c) {
    var e = a.getJSON();
    if (e.Light !== void 0) {
        var f = osgDB.Promise.defer(),
        g = osgDB.ObjectWrapper.serializers.osg.Node(a, c);
        osgDB.Promise.all([a.setJSON(e.Light).readObject(), g]).then(function (a) {
            c.setLight(a[0]);
            f.resolve(c)
        });
        return f.promise
    }
};
osgDB.ObjectWrapper.serializers.osg.Geometry = function (a, c) {
    var e = a.getJSON();
    if (e.PrimitiveSetList !== void 0 && e.VertexAttributeList !== void 0) {
        var f = [];
        f.push(osgDB.ObjectWrapper.serializers.osg.Node(a, c));
        for (var g = function (e) {
            var g = osgDB.Promise.defer();
            f.push(g.promise);
            e = a.setJSON(e).readPrimitiveSet();
            osgDB.Promise.when(e).then(function (a) {
                a !== void 0 && c.getPrimitives().push(a);
                g.resolve(a)
            })
        }, h = 0, i = e.PrimitiveSetList.length; h < i; h++)
            g(e.PrimitiveSetList[h]);
        var g = function (e, g) {
            var h = osgDB.Promise.defer();
            f.push(h.promise);
            var i = a.setJSON(g).readBufferArray();
            osgDB.Promise.when(i).then(function (a) {
                a !== void 0 && (c.getVertexAttributeList()[e] = a);
                h.resolve(a)
            })
        },
        k;
        for (k in e.VertexAttributeList)
            e.VertexAttributeList.hasOwnProperty(k) && g(k, e.VertexAttributeList[k]);
        var m = osgDB.Promise.defer();
        osgDB.Promise.all(f).then(function () {
            m.resolve(c)
        });
        return m.promise
    }
};
osgDB.ObjectWrapper.serializers.osgAnimation = {};
osgDB.ObjectWrapper.serializers.osgAnimation.Animation = function (a, c) {
    var e = a.getJSON(),
    f;
    e.Name && e.Channels && e.Channels.length > 0 ? f = !0 : (e.Name || osg.log("animation has field Name, error"), f = !1);
    if (f && osgDB.ObjectWrapper.serializers.osg.Object(a, c)) {
        f = 0;
        for (var g = e.Channels.length; f < g; f++)
            osgDB.Promise.when(a.setJSON(e.Channels[f]).readObject()).then(function (a) {
                a && c.getChannels().push(a)
            });
        return c
    }
};
osgDB.ObjectWrapper.serializers.osgAnimation.Vec3LerpChannel = function (a, c) {
    var e = a.getJSON();
    if (e.KeyFrames && e.TargetName && e.Name && osgDB.ObjectWrapper.serializers.osg.Object(a, c)) {
        c.setTargetName(e.TargetName);
        for (var f = c.getSampler().getKeyframes(), g = 0, h = e.KeyFrames.length; g < h; g++) {
            var i = e.KeyFrames[g],
            k = i.slice(1);
            k.t = i[0];
            f.push(k)
        }
        return c
    }
};
osgDB.ObjectWrapper.serializers.osgAnimation.QuatLerpChannel = function (a, c) {
    return osgDB.ObjectWrapper.serializers.osgAnimation.Vec3LerpChannel(a, c)
};
osgDB.ObjectWrapper.serializers.osgAnimation.QuatSlerpChannel = function (a, c) {
    return osgDB.ObjectWrapper.serializers.osgAnimation.Vec3LerpChannel(a, c)
};
osgDB.ObjectWrapper.serializers.osgAnimation.FloatLerpChannel = function (a, c) {
    var e = a.getJSON();
    if (e.KeyFrames && e.TargetName && e.Name && osgDB.ObjectWrapper.serializers.osg.Object(a, c)) {
        c.setTargetName(e.TargetName);
        for (var f = c.getSampler().getKeyframes(), g = 0, h = e.KeyFrames.length; g < h; g++) {
            var i = e.KeyFrames[g],
            k = i.slice(1);
            k.t = i[0];
            f.push(k)
        }
        return c
    }
};
osgDB.ObjectWrapper.serializers.osgAnimation.BasicAnimationManager = function (a, c) {
    var e = a.getJSON();
    if (e.Animations) {
        for (var f = 0, g = e.Animations.length; f < g; f++) {
            var h = a.setJSON(e.Animations[f]).readObject();
            h && c.registerAnimation(h)
        }
        return c
    }
};
osgDB.ObjectWrapper.serializers.osgAnimation.UpdateMatrixTransform = function (a, c) {
    var e = a.getJSON();
    if (e.Name && e.StackedTransforms && osgDB.ObjectWrapper.serializers.osg.Object(a, c) !== void 0) {
        for (var f = 0, g = e.StackedTransforms.length; f < g; f++) {
            var h = a.setJSON(e.StackedTransforms[f]).readObject();
            h && c.getStackedTransforms().push(h)
        }
        return c
    }
};
osgDB.ObjectWrapper.serializers.osgAnimation.StackedTranslate = function (a, c) {
    var e = a.getJSON();
    if (e.Name && osgDB.ObjectWrapper.serializers.osg.Object(a, c))
        return e.Translate && c.setTranslate(e.Translate), c
};
osgDB.ObjectWrapper.serializers.osgAnimation.StackedQuaternion = function (a, c) {
    var e = a.getJSON();
    if (e.Name && osgDB.ObjectWrapper.serializers.osg.Object(a, c))
        return e.Quaternion && c.setQuaternion(e.Quaternion), c
};
osgDB.ObjectWrapper.serializers.osgAnimation.StackedRotateAxis = function (a, c) {
    var e = a.getJSON();
    if (e.Axis && osgDB.ObjectWrapper.serializers.osg.Object(a, c))
        return e.Angle && c.setAngle(e.Angle), c.setAxis(e.Axis), c
};
osgExtra = {
    TextureUnifierVisitor : function () {
        osg.NodeVisitor.call(this);
        this._map = {}
        
    }
};
osgExtra.TextureUnifierVisitor.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
        findOrInsert : function (a) {
            var c = a.getImage().getAttribute("src");
            this._map[c] === void 0 && (this._map[c] = a);
            return this._map[c]
        },
        apply : function (a) {
            var c = a.getStateSet();
            if (c)
                for (var e = 0; e < 8; e++) {
                    var f = c.getTextureAttribute(e, "Texture");
                    if (f) {
                        var g = f.getImage();
                        g && g.getAttribute("src") !== null && (f = this.findOrInsert(f), c.setTextureAttributeAndMode(e, f))
                    }
                }
            this.traverse(a)
        }
    });
osg.Light.prototype._shaderCommon[osg.ShaderGeneratorType.FragmentEnd] = function () {
    return "\n  fragColor = linearrgb_to_srgb(fragColor*lightColor);\n"
};
osg.Texture.prototype[osg.ShaderGeneratorType.FragmentMain] = function (a) {
    var c = "texColor" + a + " = srgb2linear(texture2D( Texture" + a + ", FragTexCoord" + a + ".xy ).rgba);\n";
    c += "fragColor = fragColor * texColor" + a + ";\n";
    return c
};
osgExtra.FindLightVisitor = function () {
    osg.NodeVisitor.call(this);
    this._lightsourceNodes = []
};
osgExtra.FindLightVisitor.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
        getLights : function () {
            return this._lightsourceNodes
        },
        apply : function (a) {
            a.objectType === osg.LightSource.prototype.objectType && this._lightsourceNodes.push(a);
            this.traverse(a)
        }
    });
osgExtra.TextureUnitVisitor = function () {
    osg.NodeVisitor.call(this);
    this._map = {}
    
};
osgExtra.TextureUnitVisitor.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
        apply : function (a) {
            var c = a.getStateSet();
            if (c)
                for (var e = c.getNumTextureAttributeLists(), f = 0; f < e; f++)
                    c.getTextureAttribute(f, "Texture") && (this._map[f] = !0);
            this.traverse(a)
        }
    });
osgExtra.ProcessInputFormatVisitor = function () {
    osg.NodeVisitor.call(this)
};
osgExtra.ProcessInputFormatVisitor.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
        getObject : function (a) {
            var c = {};
            a.forEach(function (a) {
                c[a.Name] = a.Value
            });
            return c
        },
        handleWavefront : function (a, c, e) {
            if (!(a === void 0 || c === void 0 || e === void 0) && e.processed === void 0) {
                a = new osg.BlenderMaterial;
                if (e.ka !== void 0) {
                    var f = JSON.parse(e.ka);
                    e.map_ka !== void 0 && (f = [1, 1, 1]);
                    a.setAmbientColor(f);
                    a.setAmbient(1)
                }
                e.kd !== void 0 && (f = JSON.parse(e.kd), e.map_kd !== void 0 && (f = [1, 1, 1]), a.setDiffuseColor(f));
                e.ks !== void 0 &&
                (f = JSON.parse(e.ks), e.map_ks !== void 0 && (f = [1, 1, 1]), a.setSpecularColor(f));
                e.ns !== void 0 && (f = JSON.parse(e.ns), e.map_ns !== void 0 && (f = 1), a.setSpecularHardness(f));
                e.tr !== void 0 && a.setTranslucency(JSON.parse(e.tr));
                c.removeAttribute("Material");
                c.setAttributeAndMode(a);
                c.setShaderGenerator(osg.blenderShaderGenerator);
                var g,
                h = [];
                (function () {
                    for (var a = 0; a < c.getNumTextureAttributeLists(); a++) {
                        var e = c.getTextureAttribute(a, "Texture");
                        e !== void 0 && (e.className() === "BlenderTextureMaterial" && (e = e.getTexture()),
                            h[a] = e)
                    }
                })();
                e.map_ka !== void 0 && (f = JSON.parse(e.map_ka), g = h[f], g !== void 0 && (c.removeTextureAttribute(f, "Texture"), g = new osg.BlenderTextureMaterial(g, "AmbientColor"), g.setTexCoordUnit(0), g.setBlendMode("MULTIPLY"), c.setTextureAttributeAndMode(f, g), a.setAmbient(1)));
                e.map_kd !== void 0 && (f = JSON.parse(e.map_kd), g = h[f], g !== void 0 && (c.removeTextureAttribute(f, "Texture"), g = new osg.BlenderTextureMaterial(g, "DiffuseColor"), g.setTexCoordUnit(0), g.setBlendMode("MULTIPLY"), c.setTextureAttributeAndMode(f, g)));
                e.map_d !== void 0 && (f = JSON.parse(e.map_d), g = h[f], g !== void 0 && (c.removeTextureAttribute(f, "Texture"), g.setImageFormat(osg.Texture.LUMINANCE), g.setInternalFormat(osg.Texture.LUMINANCE), g = new osg.BlenderTextureMaterial(g, "Alpha"), g.setTexCoordUnit(0), c.setRenderingHint("TRANSPARENT_BIN"), c.setTextureAttributeAndMode(f, g), c.setAttributeAndModes(new osg.BlendFunc("SRC_ALPHA", "ONE_MINUS_SRC_ALPHA"))));
                e.map_ks !== void 0 && (f = JSON.parse(e.map_ks), g = h[f], g !== void 0 && (c.removeTextureAttribute(f, "Texture"), g =
                            new osg.BlenderTextureMaterial(g, "SpecularColor"), g.setTexCoordUnit(0), g.setBlendMode("MULTIPLY"), c.setTextureAttributeAndMode(f, g)));
                e.map_ns !== void 0 && (f = JSON.parse(e.map_ns), g = h[f], g !== void 0 && (c.removeTextureAttribute(f, "Texture"), g = new osg.BlenderTextureMaterial(g, "SpecularHardness"), g.setTexCoordUnit(0), g.setBlendMode("MULTIPLY"), c.setTextureAttributeAndMode(f, g)));
                e.bump !== void 0 && (f = JSON.parse(e.bump), g = h[f], g !== void 0 && (c.removeTextureAttribute(f, "Texture"), g = new osg.BlenderTextureMaterial(g,
                                "Normal"), g.setTexCoordUnit(0), c.setTextureAttributeAndMode(f, g)));
                e.processed = !0
            }
        },
        handleLightwave : function (a, c, e) {
            if (!(a === void 0 || c === void 0 || e === void 0) && e.processed === void 0) {
                var a = new osg.BlenderMaterial,
                f = c.getAttribute("Material");
                f !== void 0 && f.className() === "Material" && (a.setAmbientColor(a.getAmbient()), a.setAmbient(1), a.setDiffuseColor(a.getDiffuse()), a.setSpecularColor(a.getSpecular()), c.removeAttribute("Material"), c.setAttributeAndMode(a), c.setShaderGenerator(osg.blenderShaderGenerator));
                var g,
                h = [];
                (function () {
                    for (var a = 0; a < c.getNumTextureAttributeLists(); a++) {
                        var e = c.getTextureAttribute(a, "Texture");
                        e !== void 0 && (e.className() === "BlenderTextureMaterial" && (e = e.getTexture()), h[a] = e)
                    }
                })();
                e.diffuse !== void 0 && (f = JSON.parse(e.diffuse), g = h[f], g !== void 0 && (c.removeTextureAttribute(f, "Texture"), g = new osg.BlenderTextureMaterial(g, "DiffuseColor"), g.setTexCoordUnit(0), g.setBlendMode("MULTIPLY"), c.setTextureAttributeAndMode(f, g), a.setAmbient(1), a.setDiffuseColor([1, 1, 1])));
                e.specular !== void 0 &&
                (f = JSON.parse(e.specular), g = h[f], g !== void 0 && (c.removeTextureAttribute(f, "Texture"), g = new osg.BlenderTextureMaterial(g, "SpecularColor"), g.setTexCoordUnit(0), g.setBlendMode("MULTIPLY"), c.setTextureAttributeAndMode(f, g), a.setSpecularColor([1, 1, 1])));
                e.transparency !== void 0 && (f = JSON.parse(e.transparency), g = h[f], g !== void 0 && (c.removeTextureAttribute(f, "Texture"), g.setImageFormat(osg.Texture.LUMINANCE), g.setInternalFormat(osg.Texture.LUMINANCE), g = new osg.BlenderTextureMaterial(g, "Alpha"), g.setTexCoordUnit(0),
                        c.setRenderingHint("TRANSPARENT_BIN"), c.setTextureAttributeAndMode(f, g), c.setAttributeAndModes(new osg.BlendFunc("SRC_ALPHA", "ONE_MINUS_SRC_ALPHA"))));
                e.processed = !0
            }
        },
        handleDefault : function (a, c, e) {
            if (!(a === void 0 || c === void 0) && !(e !== void 0 && e.processed)) {
                a = c.getAttribute("Material");
                a !== void 0 && (e = new osg.BlenderMaterial, e.setAmbientColor(a.getAmbient()), e.setAmbient(1), e.setDiffuseColor(a.getDiffuse()), e.setSpecularColor(a.getSpecular()), e.setSpecularHardness(a.getShininess()), e.setTranslucency(a.getDiffuse()[3]),
                    c.removeAttribute("Material"), c.setAttributeAndMode(e), c.setShaderGenerator(osg.blenderShaderGenerator));
                var f = [];
                (function () {
                    for (var a = 0; a < c.getNumTextureAttributeLists(); a++) {
                        var e = c.getTextureAttribute(a, "Texture");
                        e !== void 0 && (e.className() === "BlenderTextureMaterial" && (e = e.getTexture()), f[a] = e)
                    }
                })();
                (function () {
                    for (var a = c.getNumTextureAttributeLists(), e = function (a, c, e) {
                        e !== void 0 && (a.removeTextureAttribute(c, "Texture"), e = new osg.BlenderTextureMaterial(e, "DiffuseColor"), e.setTexCoordUnit(c), e.setBlendMode("MULTIPLY"),
                            a.setTextureAttributeAndMode(c, e))
                    }, i = function (a, c, e) {
                        e !== void 0 && (a.removeTextureAttribute(c, "Texture"), e = new osg.BlenderTextureMaterial(e, "AmbientColor"), e.setTexCoordUnit(c), e.setBlendMode("MULTIPLY"), a.setTextureAttributeAndMode(c, e))
                    }, k = function (a, c, e) {
                        e !== void 0 && (a.removeTextureAttribute(c, "Texture"), e = new osg.BlenderTextureMaterial(e, "SpecularColor"), e.setTexCoordUnit(c), e.setBlendMode("MULTIPLY"), a.setTextureAttributeAndMode(c, e))
                    }, m = 0; m < a; m++) {
                        var n = m;
                        c.getTextureAttribute(m, "Texture") !==
                        void 0 && (a === 1 ? e(c, n, f[n]) : a >= 2 && (n === 0 ? i(c, n, f[n]) : n === 1 ? e(c, n, f[n]) : n === 2 && k(c, n, f[n])))
                    }
                })();
                e = c.getUserData();
                e === void 0 && (e = {}, c.setUserData(e));
                e.processed = !0
            }
        },
        apply : function (a) {
            var c = a.getStateSet();
            if (c !== void 0 && c.getUserData() !== void 0) {
                var e = this.getObject(c.getUserData());
                e.source !== void 0 && e.source === "wavefront" && this.handleWavefront(a, c, e)
            }
            this.traverse(a)
        }
    });
osgExtra.FindBlenderAttributeVisitor = function () {
    osg.NodeVisitor.call(this);
    this._lights = [];
    this._materials = [];
    this._id = 0
};
osgExtra.FindBlenderAttributeVisitor.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
        hasComponent : function () {
            return this._lights.length > 0 || this._materials.length > 0
        },
        getLights : function () {
            return this._lights
        },
        getMaterials : function () {
            return this._materials
        },
        apply : function (a) {
            if (a.objectType === osg.LightSource.prototype.objectType)
                a.getLight() !== void 0 && a.getLight().getType() === "BlenderLight" && this._lights.push(a.getLight());
            else if (a.getStateSet() !== void 0) {
                var c = a.getStateSet().getAttribute("BlenderMaterial");
                if (c !== void 0 && c._id === void 0)
                    c._id = this._id, this._id += 1, this._materials.push(c)
            }
            this.traverse(a)
        }
    });
osgExtra.SwitchManipulator = function () {
    osgGA.SwitchManipulator.call(this)
};
osgExtra.SwitchManipulator.prototype = osg.objectInehrit(osgGA.SwitchManipulator.prototype, {
        setNode : function (a) {
            this._manipulatorList.forEach(function (c) {
                c.setNode(a)
            })
        },
        setTarget : function (a) {
            this.getCurrentManipulator().setTarget(a)
        },
        setEyePosition : function (a) {
            this.getCurrentManipulator().setEyePosition(a)
        },
        getEyePosition : function (a) {
            this.getCurrentManipulator().getEyePosition(a)
        },
        getTarget : function (a, c) {
            this.getCurrentManipulator().getTarget(a, c)
        },
        getDistance : function () {
            this.getCurrentManipulator().getDistance()
        },
        setDistance : function (a) {
            this.getCurrentManipulator().setDistance(a)
        }
    });
osgExtra.FirstPersonManipulator = function () {
    osgGA.FirstPersonManipulator.call(this);
    this._stepFactor = 0.5
};
osgExtra.FirstPersonManipulator.prototype = osg.objectInehrit(osgGA.FirstPersonManipulator.prototype, {
        setDistance : function (a) {
            this._distance = a
        },
        getDistance : function () {
            return this._distance
        },
        getTarget : function (a) {
            osgGA.FirstPersonManipulator.prototype.getTarget.call(this, a, this._distance)
        },
        mousewheel : function (a, c, e, f) {
            osgGA.FirstPersonManipulator.prototype.mousewheel.call(this, a, c, e, f);
            userUINotify(this._stepFactor)
        }
    });
osgExtra.UpdateCullbackAnimator = function (a, c, e, f, g, h) {
    this._startEye = a;
    this._endEye = e;
    this._startTarget = c;
    this._endTarget = f;
    this._duration = g;
    this._start = -1;
    this._currentEye = Array(3);
    this._currentTarget = Array(3);
    this._manipulator = h
};
osgExtra.UpdateCullbackAnimator.prototype = {
    getEye : function () {
        return this._currentEye
    },
    getTarget : function () {
        return this._currentTarget
    },
    setFinishCallback : function (a) {
        this._finishCallback = a
    },
    update : function (a, c) {
        var e = c.getFrameStamp().getSimulationTime();
        if (this._start < 0)
            this._start = e;
        e = (e - this._start) / this._duration;
        e > 1 && (e = 1, a.setNodeMask(0), this._finishCallback());
        e = osgAnimation.easeOutQuart(e);
        osg.Vec3.lerp(e, this._startTarget, this._endTarget, this._currentTarget);
        osg.Vec3.lerp(e, this._startEye,
            this._endEye, this._currentEye);
        this._manipulator._buttonup = !0;
        this._manipulator.setTarget(this._currentTarget);
        this._manipulator.setEyePosition(this._currentEye);
        return !0
    }
};
osgExtra.LockTextureBinding = !1;
(function () {})();
test = function () {};
var ShaderNode = {};
ShaderNode.Node = function () {
    this._inputs = [];
    this._output = void 0;
    for (var a = 0, c = arguments.length; a < c; a++) {
        if (arguments[a] === void 0)
            break;
        this._inputs.push(arguments[a])
    }
    this._id = ShaderNode.Node.instance++
};
ShaderNode.Node.instance = 0;
ShaderNode.Node.prototype = {
    autoConnectOutput : function (a) {
        a._output === void 0 && this.connectOutput(this)
    },
    connectInput : function (a) {
        this._inputs.push(a)
    },
    connectOutput : function (a) {
        this._output = a;
        this.autoLink(a)
    },
    getInputs : function () {
        return this._inputs
    },
    autoLink : function (a) {
        a !== void 0 && a.connectInput(this)
    },
    computeFragment : function () {},
    computeVertex : function () {}
    
};
ShaderNode.Variable = function (a, c) {
    ShaderNode.Node.call(this);
    this._prefix = c;
    this._type = a;
    this._value = void 0
};
ShaderNode.Variable.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        getType : function () {
            return this._type
        },
        getVariable : function () {
            return this._prefix
        },
        setValue : function (a) {
            this._value = a
        },
        declare : function () {
            return this._value !== void 0 ? this._type + " " + this.getVariable() + " = " + this._value + ";" : this._type + " " + this.getVariable() + ";"
        }
    });
ShaderNode.Uniform = function (a, c) {
    ShaderNode.Variable.call(this, a, c)
};
ShaderNode.Uniform.prototype = osg.objectInehrit(ShaderNode.Variable.prototype, {
        declare : function () {},
        globalDeclaration : function () {
            return "uniform " + this._type + " " + this.getVariable() + ";"
        }
    });
ShaderNode.Varying = function (a, c) {
    ShaderNode.Variable.call(this, a, c)
};
ShaderNode.Varying.prototype = osg.objectInehrit(ShaderNode.Variable.prototype, {
        declare : function () {},
        globalDeclaration : function () {
            return "varying " + this._type + " " + this.getVariable() + ";"
        }
    });
ShaderNode.Sampler = function (a, c) {
    ShaderNode.Variable.call(this, a, c)
};
ShaderNode.Sampler.prototype = osg.objectInehrit(ShaderNode.Variable.prototype, {
        declare : function () {},
        globalDeclaration : function () {
            return "uniform " + this._type + " " + this.getVariable() + ";"
        }
    });
ShaderNode.BlendNode = function (a, c, e, f) {
    ShaderNode.Node.call(this, c, e, f);
    this._mode = a
};
ShaderNode.BlendNode.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        computeFragment : function () {
            var a = this._mode;
            this[a] === void 0 && (a = "MIX");
            return this[a]()
        },
        ADD : function () {
            return this._output.getVariable() + " = " + this._inputs[0].getVariable() + " + (" + this._inputs[1].getVariable() + " * " + this._inputs[2].getVariable() + ");"
        },
        MIX : function () {
            return this._output.getVariable() + " = mix(" + this._inputs[0].getVariable() + ", " + this._inputs[1].getVariable() + ", " + this._inputs[2].getVariable() + ");"
        },
        MULTIPLY : function () {
            return this._output.getVariable() +
            " = " + this._inputs[0].getVariable() + " * mix( " + this._inputs[0].getType() + "(1.0), " + this._inputs[1].getVariable() + ", " + this._inputs[2].getVariable() + ");"
        }
    });
ShaderNode.TextureRGB = function (a, c, e) {
    ShaderNode.Node.call(this);
    this._sampler = a;
    this.connectInput(a);
    this.connectInput(c);
    e !== void 0 && this.connectOutput(e);
    this._uv = c
};
ShaderNode.TextureRGB.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        type : "TextureRGB",
        computeFragment : function () {
            return ["", this._output.getVariable() + " = TextureRGB( " + this._sampler.getVariable() + " , " + this._uv.getVariable() + ".xy);"].join("\n")
        },
        globalFunctionDeclaration : function () {
            return "\nvec3 TextureRGB(const in sampler2D texture, const in vec2 uv) {\n  return texture2D(texture, uv).rgb;\n}"
        }
    });
ShaderNode.TextureRGBA = function (a, c, e) {
    ShaderNode.TextureRGB.call(this, a, c, e)
};
ShaderNode.TextureRGBA.prototype = osg.objectInehrit(ShaderNode.TextureRGB.prototype, {
        type : "TextureRGBA",
        computeFragment : function () {
            return ["", this._output.getVariable() + " = TextureRGBA( " + this._sampler.getVariable() + " , " + this._uv.getVariable() + ".xy);"].join("\n")
        },
        globalFunctionDeclaration : function () {
            return "\nvec4 TextureRGBA(const in sampler2D texture, const in vec2 uv) {\n  return texture2D(texture, uv);\n}"
        }
    });
ShaderNode.TextureAlpha = function (a, c, e) {
    ShaderNode.TextureRGB.call(this, a, c, e)
};
ShaderNode.TextureAlpha.prototype = osg.objectInehrit(ShaderNode.TextureRGB.prototype, {
        type : "TextureAlpha",
        computeFragment : function () {
            return ["", this._output.getVariable() + " = TextureAlpha( " + this._sampler.getVariable() + " , " + this._uv.getVariable() + ".xy);"].join("\n")
        },
        globalFunctionDeclaration : function () {
            return "\nfloat TextureAlpha(const in sampler2D texture, const in vec2 uv) {\n  return texture2D(texture, uv).a;\n}"
        }
    });
ShaderNode.TextureCubemapRGB = function (a, c, e) {
    ShaderNode.TextureRGB.call(this, a, c, e)
};
ShaderNode.TextureCubemapRGB.prototype = osg.objectInehrit(ShaderNode.TextureRGB.prototype, {
        type : "TextureCubemapRGB",
        computeFragment : function () {
            return ["", this._output.getVariable() + " = TextureCubemapRGB( " + this._sampler.getVariable() + " , " + this._uv.getVariable() + ".xyz);"].join("\n")
        },
        globalFunctionDeclaration : function () {
            return "\nvec3 TextureCubemapRGB(const in samplerCube texture, const in vec3 uv) {\n  return textureCube(texture, uv).rgb;\n}"
        }
    });
ShaderNode.TextureTranslucency = function (a, c) {
    ShaderNode.TextureAlpha.call(this, a, c)
};
ShaderNode.TextureTranslucency.prototype = osg.objectInehrit(ShaderNode.TextureAlpha.prototype, {
        computeFragment : function () {
            return ["", this._output.getVariable() + " = 1.0 - TextureAlpha( " + this._sampler.getVariable() + " , " + this._uv.getVariable() + ".xy);"].join("\n")
        }
    });
ShaderNode.TextureIntensity = function (a, c, e) {
    ShaderNode.TextureRGB.call(this, a, c, e)
};
ShaderNode.TextureIntensity.prototype = osg.objectInehrit(ShaderNode.TextureRGB.prototype, {
        type : "TextureIntensity",
        computeFragment : function () {
            return ["", this._output.getVariable() + " = textureIntensity( " + this._sampler.getVariable() + " , " + this._uv.getVariable() + ".xy);"].join("\n")
        },
        globalFunctionDeclaration : function () {
            return "\nfloat textureIntensity(const in sampler2D texture, const in vec2 uv) {\n  vec3 rgb = texture2D(texture, uv).rgb;\n  return dot(rgb,vec3(1.0/3.0));\n}"
        }
    });
ShaderNode.TextureNormal = function (a, c, e) {
    ShaderNode.TextureRGB.call(this, a, c, e)
};
ShaderNode.TextureNormal.prototype = osg.objectInehrit(ShaderNode.TextureRGB.prototype, {
        type : "TextureNormal",
        computeFragment : function () {
            return ["", this._output.getVariable() + " = textureNormal( " + this._sampler.getVariable() + " , " + this._uv.getVariable() + ".xy);"].join("\n")
        },
        globalFunctionDeclaration : function () {
            return "\nvec3 textureNormal(in sampler2D texture, const in vec2 uv) {\n  vec3 rgb = texture2D(texture, uv).rgb;\n  return normalize((2.0*rgb-vec3(1.0)));\n}"
        }
    });
ShaderNode.NormalizeNormalAndEyeVector = function (a, c) {
    ShaderNode.Node.apply(this, arguments);
    this._normal = a;
    this._position = c;
    this.connectInput(a);
    this.connectInput(c)
};
ShaderNode.NormalizeNormalAndEyeVector.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        type : "NormalizeNormalAndEyeVector",
        connectOutputNormal : function (a) {
            this._outputNormal = a;
            this.autoLink(this._outputNormal)
        },
        connectOutputEyeVector : function (a) {
            this._outputEyeVector = a;
            this.autoLink(this._outputEyeVector)
        },
        computeFragment : function () {
            return ["", this._outputNormal.getVariable() + " = normalize(" + this._normal.getVariable() + ");", this._outputEyeVector.getVariable() + " = -normalize(" + this._position.getVariable() +
                ");"].join("\n")
        }
    });
ShaderNode.AddVector = function () {
    ShaderNode.Node.apply(this, arguments)
};
ShaderNode.AddVector.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        type : "AddVector",
        computeFragment : function () {
            str = this._output.getVariable() + " = " + this._inputs[0].getVariable();
            for (var a = 1, c = this._inputs.length; a < c; a++)
                str += " + " + this._inputs[a].getVariable();
            str += ";";
            return str
        }
    });
ShaderNode.ReflectionVector = function () {
    ShaderNode.Node.apply(this, arguments)
};
ShaderNode.ReflectionVector.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        type : "ReflectionVector",
        computeFragment : function () {
            return str = "  reflection_spec(" + this._inputs[0].getVariable() + ", " + this._inputs[1].getVariable() + ", " + this._output.getVariable() + ");"
        }
    });
ShaderNode.SetAlpha = function (a, c, e) {
    ShaderNode.Node.call(this, a, c);
    e !== void 0 && this.connectOutput(e)
};
ShaderNode.SetAlpha.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        type : "SetAlpha",
        computeFragment : function () {
            return str = this._output.getVariable() + " = vec4(" + this._inputs[0].getVariable() + ".rgb, " + this._inputs[1].getVariable() + ");"
        }
    });
ShaderNode.PassValue = function (a, c) {
    ShaderNode.Node.call(this, a);
    c !== void 0 && this.connectOutput(c)
};
ShaderNode.PassValue.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        computeFragment : function () {
            return this._output.getVariable() + " = " + this._inputs[0].getVariable() + ";"
        }
    });
ShaderNode.Srgb2Linear = function (a, c) {
    ShaderNode.Node.call(this, a);
    this.connectOutput(c)
};
ShaderNode.Srgb2Linear.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        type : "Srgb2Linear",
        computeFragment : function () {
            var a = this._inputs[0].getType();
            return this._output.getVariable() + " = srgb2linearrgb_" + a + "(" + this._inputs[0].getVariable() + ");"
        },
        globalFunctionDeclaration : function () {
            return "float srgb_to_linearrgb1(const in float c)\n{\n  float v = 0.0;\n  if(c < 0.04045) {\n    if (c >= 0.0)\n      v = c * (1.0/12.92);\n  } else {\n    v = pow((c + 0.055)*(1.0/1.055), 2.4);\n  }\n return v;\n}\nvec4 srgb2linearrgb_vec4(const in vec4 col_from)\n{\n  vec4 col_to;\n  col_to.r = srgb_to_linearrgb1(col_from.r);\n  col_to.g = srgb_to_linearrgb1(col_from.g);\n  col_to.b = srgb_to_linearrgb1(col_from.b);\n  col_to.a = col_from.a;\n  return col_to;\n}\nvec3 srgb2linearrgb_vec3(const in vec3 col_from)\n{\n  vec3 col_to;\n  col_to.r = srgb_to_linearrgb1(col_from.r);\n  col_to.g = srgb_to_linearrgb1(col_from.g);\n  col_to.b = srgb_to_linearrgb1(col_from.b);\n  return col_to;\n}\n"
        }
    });
ShaderNode.Linear2Srgb = function (a, c) {
    ShaderNode.Node.call(this, a);
    this.connectOutput(c)
};
ShaderNode.Linear2Srgb.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        type : "Linear2Srgb",
        computeFragment : function () {
            return this._output.getVariable() + " = linearrgb2srgb(" + this._inputs[0].getVariable() + ");"
        },
        globalFunctionDeclaration : function () {
            return "float linearrgb_to_srgb1(const in float c)\n{\n  float v = 0.0;\n  if(c < 0.0031308) {\n    if ( c > 0.0)\n      v = c * 12.92;\n  } else {\n    v = 1.055 * pow(c, 1.0/2.4) - 0.055;\n  }\n  return v;\n}\nvec4 linearrgb2srgb(const in vec4 col_from)\n{\n  vec4 col_to;\n  col_to.r = linearrgb_to_srgb1(col_from.r);\n  col_to.g = linearrgb_to_srgb1(col_from.g);\n  col_to.b = linearrgb_to_srgb1(col_from.b);\n  col_to.a = col_from.a;\n  return col_to;\n}\n\n"
        }
    });
ShaderNode.Vec3ToVec4 = function (a, c, e) {
    ShaderNode.Node.call(this, a);
    this.connectOutput(e)
};
ShaderNode.Vec3ToVec4.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        computeFragment : function () {
            return this._output.getVariable() + " = vec4(" + this._inputs[0].getVariable() + "," + value.toString() + ");"
        }
    });
ShaderNode.DotVector = function () {
    ShaderNode.Node.apply(this, arguments)
};
ShaderNode.DotVector.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        computeFragment : function () {
            return this._output.getVariable() + " = dot(" + this._inputs[0].getVariable() + "," + this._inputs[1].getVariable() + ");"
        }
    });
ShaderNode.MultVector = function () {
    ShaderNode.Node.apply(this, arguments)
};
ShaderNode.MultVector.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        type : "MultVector",
        computeFragment : function () {
            var a = this._output.getVariable() + " = " + this._inputs[0].getVariable();
            this._inputs.forEach(function (c, e) {
                e !== 0 && (a += " * " + c.getVariable())
            });
            a += ";\n";
            return a
        }
    });
ShaderNode.PreMultAlpha = function (a, c) {
    ShaderNode.Node.call(this, a);
    c !== void 0 && this.connectOutput(c)
};
ShaderNode.PreMultAlpha.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        type : "PreMultAlpha",
        computeFragment : function () {
            return this._output.getVariable() + " = " + this._inputs[0].getVariable() + ".rgb * " + this._inputs[0].getVariable() + ".a;"
        }
    });
ShaderNode.FragColor = function () {
    ShaderNode.Node.call(this);
    this._prefix = "gl_FragColor"
};
ShaderNode.FragColor.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        type : "gl_FragColor",
        connectOutput : function () {},
        getVariable : function () {
            return this._prefix
        }
    });
ShaderNode.ComputeDotClamped = function () {
    ShaderNode.Node.call(this)
};
ShaderNode.ComputeDotClamped.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        computeFragment : function () {
            return this._output.getVariable() + " = max( dot(" + this._inputs[0].getVariable() + ", " + this._inputs[1].getVariable() + "), 0.0);"
        }
    });
ShaderNode.NormalTangentSpace = function (a, c, e, f) {
    ShaderNode.Node.call(this, a, c, e);
    f !== void 0 && this.connectOutput(f)
};
ShaderNode.NormalTangentSpace.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        type : "NormalTangentSpace",
        globalFunctionDeclaration : function () {
            return "\nvoid mtex_nspace_tangent(const in vec4 tangent, const in vec3 normal, const in vec3 texnormal, out vec3 outnormal) {\n  vec3 tang = normalize(tangent.xyz);\n  vec3 B = tangent.w * cross(normal, tang);\n  outnormal = texnormal.x*tang + texnormal.y*B + texnormal.z*normal;\n  outnormal = normalize(outnormal);\n}"
        },
        computeFragment : function () {
            return "mtex_nspace_tangent(" +
            this._inputs[0].getVariable() + ", " + this._inputs[1].getVariable() + ", " + this._inputs[2].getVariable() + ", " + this._output.getVariable() + ");"
        }
    });
ShaderNode.LightNode = function (a, c) {
    ShaderNode.Node.call(this);
    this._light = c;
    this._material = a
};
ShaderNode.LightNode.prototype = osg.objectInehrit(ShaderNode.Node.prototype, {
        type : "LightNode",
        connectMaterialAmbient : function (a) {
            this._inputs[0] = a
        },
        getMaterialAmbient : function () {
            return this._inputs[0]
        },
        connectMaterialHardness : function (a) {
            this._inputs[1] = a
        },
        getMaterialHardness : function () {
            return this._inputs[1]
        },
        connectMaterialDiffuseIntensity : function (a) {
            this._inputs[2] = a
        },
        getMaterialDiffuseIntensity : function () {
            return this._inputs[2]
        },
        connectMaterialSpecularIntensity : function (a) {
            this._inputs[3] = a
        },
        getMaterialSpecularIntensity : function () {
            return this._inputs[3]
        },
        connectMaterialDiffuseColor : function (a) {
            this._inputs[4] = a
        },
        getMaterialDiffuseColor : function () {
            return this._inputs[4]
        },
        connectMaterialSpecularColor : function (a) {
            this._inputs[5] = a
        },
        getMaterialSpecularColor : function () {
            return this._inputs[5]
        },
        connectLightColor : function (a) {
            this._inputs[6] = a
        },
        getLightColor : function () {
            return this._inputs[6]
        },
        connectNormal : function (a) {
            this._inputs[7] = a
        },
        getNormal : function () {
            return this._inputs[7]
        },
        connectDiffuseToonSize : function (a) {
            this._inputs[8] =
                a
        },
        getDiffuseToonSize : function () {
            return this._inputs[8]
        },
        connectSpecularToonSize : function (a) {
            this._inputs[9] = a
        },
        getSpecularToonSize : function () {
            return this._inputs[9]
        },
        connectDiffuseToonSmooth : function (a) {
            this._inputs[18] = a
        },
        getDiffuseToonSmooth : function () {
            return this._inputs[18]
        },
        connectSpecularToonSmooth : function (a) {
            this._inputs[12] = a
        },
        getSpecularToonSmooth : function () {
            return this._inputs[12]
        },
        connectLightSpotCutoff : function (a) {
            this._inputs[11] = a
        },
        getLightSpotCutoff : function () {
            return this._inputs[11]
        },
        connectLightSpotBlend : function (a) {
            this._inputs[13] = a
        },
        getLightSpotBlend : function () {
            return this._inputs[13]
        },
        connectLightSpotDirection : function (a) {
            this._inputs[10] = a
        },
        getLightSpotDirection : function () {
            return this._inputs[10]
        },
        connectLightDistance : function (a) {
            this._inputs[14] = a
        },
        getLightDistance : function () {
            return this._inputs[14]
        },
        connectLightPosition : function (a) {
            this._inputs[15] = a
        },
        getLightPosition : function () {
            return this._inputs[15]
        },
        connectLightDirection : function (a) {
            this._inputs[16] = a
        },
        getLightDirection : function () {
            return this._inputs[16]
        },
        connectEyeVector : function (a) {
            this._inputs[17] = a
        },
        getEyeVector : function () {
            return this._inputs[17]
        },
        connectRoughness : function (a) {
            this._inputs[19] = a
        },
        getRoughness : function () {
            return this._inputs[19]
        },
        connectDarkness : function (a) {
            this._inputs[20] = a
        },
        getDarkness : function () {
            return this._inputs[20]
        },
        connectDiffuseFresnel : function (a) {
            this._inputs[21] = a
        },
        getDiffuseFresnel : function () {
            return this._inputs[21]
        },
        connectDiffuseFresnelFactor : function (a) {
            this._inputs[22] = a
        },
        getDiffuseFresnelFactor : function () {
            return this._inputs[22]
        },
        connectSpecularSlope : function (a) {
            this._inputs[23] = a
        },
        getSpecularSlope : function () {
            return this._inputs[23]
        },
        connectSpecularIor : function (a) {
            this._inputs[24] = a
        },
        getSpecularIor : function () {
            return this._inputs[24]
        },
        globalFunctionDeclaration : function () {
            return "void lamp_falloff_invsquare(const in float lampdist, const in float dist, out float visifac)\n{\n  visifac = lampdist/(lampdist + dist*dist);\n}\nvoid lamp_falloff_invlinear(const in float lampdist, const in float dist, out float visifac)\n{\n  visifac = lampdist/(lampdist + dist);\n}\nvoid lamp_visibility_sphere(const in float lampdist, const in float dist, const in float visifac, out float outvisifac)\n{\n  float t= lampdist - dist;\n\n  outvisifac= visifac*max(t, 0.0)/lampdist;\n}\nvoid lamp_visibility_sun_hemi(const in vec3 lampvec, out vec3 lv, out float dist, out float visifac)\n{\n  lv = -lampvec;\n  dist = 1.0;\n  visifac = 1.0;\n}\n\nvoid lamp_visibility_other(const in vec3 co, const in vec3 lampco, out vec3 lv, out float dist, out float visifac)\n{\n  lv = lampco-co;\n  dist = length(lv);\n  lv = normalize(lv);\n  visifac = 1.0;\n}\nvoid lamp_visibility_spot_circle(const in vec3 lampvec, const in vec3 lv, out float inpr)\n{\n  inpr = dot(lv, lampvec);\n}\n\nvoid lamp_visibility_spot(const in float spotsi, const in float spotbl, const in float inpr0, const in float visifac, out float outvisifac)\n{\n  float t = spotsi;\n  float inpr = inpr0;\n\n  if(inpr <= t) {\n    outvisifac = 0.0;\n  }\n  else {\n    t = inpr - t;\n\n    /* soft area */\n    if(spotbl != 0.0)\n      inpr *= smoothstep(0.0, 1.0, t/spotbl);\n\n    outvisifac = visifac*inpr;\n  }\n}\n\nvoid lamp_visibility_clamp(const in float visifac, out float outvisifac)\n{\n  if (visifac < 0.001)\n    outvisifac = 0.0;\n  else\n    outvisifac = visifac;\n}\nvoid shade_visifac(const in float i, const in float visifac, const in float refl, out float outi)\n{\n  /*if(i > 0.0)*/\n    outi = max(i*visifac*refl, 0.0);\n  /*else\n    outi = i;*/\n}\nvoid shade_specular_cooktorr(const in vec3 n, const in vec3 l, const in vec3 v, const in float hard, out float specfac)\n{\n  vec3 h = normalize(v + l);\n  float nh = dot(n, h);\n\n  if(nh < 0.0) {\n    specfac = 0.0;\n  }\n  else {\n    float nv = max(dot(n, v), 0.0);\n    float i = pow(nh, hard);\n\n    i = i/(0.1+nv);\n    specfac = i;\n  }\n}\nvoid reflection_spec(const in vec3 normal, const in vec3 view, out vec3 vec)\n{\n  vec3 lv = reflect(view, normal);\n  lv = normalize(lv);\n  vec3 x = vec3(CubemapTransform[0][0], CubemapTransform[1][0], CubemapTransform[2][0]);\n  vec3 y = vec3(CubemapTransform[0][1], CubemapTransform[1][1], CubemapTransform[2][1]);\n  vec3 z = vec3(CubemapTransform[0][2], CubemapTransform[1][2], CubemapTransform[2][2]);\n  x = vec3(CubemapTransform[0][0], CubemapTransform[0][1], CubemapTransform[0][2]);\n  y = vec3(CubemapTransform[1][0], CubemapTransform[1][1], CubemapTransform[1][2]);\n  z = vec3(CubemapTransform[2][0], CubemapTransform[2][1], CubemapTransform[2][2]);\n  mat3 m = mat3(x,y,z);\n  vec = m*lv;\n}\nvoid shade_hemi_spec(const in vec3 vn, const in vec3 lightv, const in vec3 view, const in float spec, const in float hard, const in float visifac, out float t)\n{\n  vec3 lv = lightv + view;\n  lv = normalize(lv);\n\n  t = dot(vn, lv);\n  t = 0.5*t + 0.5;\n\n  t = visifac*spec*pow(t, hard);\n}\nvoid shade_specular_phong(const in vec3 n, const in vec3 l, const in vec3 v, const in float hard, out float specfac)\n{\n  vec3 h = normalize(l + v);\n  float rslt = max(dot(h, n), 0.0);\n\n  specfac = pow(rslt, hard);\n}\nvoid shade_spec_t(const in float shadfac, const in float spec, const in float visifac, const in float specfac, out float t)\n{\n  t = shadfac*spec*visifac*specfac;\n}\nvoid shade_diffuse_lambert(const in vec3 vn, const in vec3 lv, out float inp)\n{\n  inp = dot(vn, lv);\n}\nvoid shade_diffuse_toon(const in vec3 n, const in vec3 l, const in vec3 v, const in float size, const in float tsmooth, out float is)\n{\n  float rslt = dot(n, l);\n  float ang = acos(rslt);\n\n  if(ang < size) is = 1.0;\n  else if(ang > (size + tsmooth) || tsmooth == 0.0) is = 0.0;\n  else is = 1.0 - ((ang - size)/tsmooth);\n}\nvoid shade_specular_toon(const in vec3 n, const in vec3 l, const in vec3 v, const in float size, const in float tsmooth, out float specfac)\n{\n  vec3 h = normalize(l + v);\n  float rslt = dot(h, n);\n  float ang = acos(rslt);\n\n  if(ang < size) rslt = 1.0;\n  else if(ang >= (size + tsmooth) || tsmooth == 0.0) rslt = 0.0;\n  else rslt = 1.0 - ((ang - size)/tsmooth);\n\n  specfac = rslt;\n}\nfloat exp_blender(const in float f)\n{\n  return pow(2.71828182846, f);\n}\nvoid shade_specular_blinn(const in vec3 n, const in vec3 l, const in vec3 v, const in float refrac, const in float specpower, out float specfac)\n{\n  float spec_power = specpower;\n  if(refrac < 1.0) {\n    specfac = 0.0;\n  }\n  else if(spec_power == 0.0) {\n    specfac = 0.0;\n  }\n  else {\n    if(spec_power<100.0)\n      spec_power= sqrt(1.0/spec_power);\n    else\n      spec_power= 10.0/spec_power;\n\n    vec3 h = normalize(v + l);\n    float nh = dot(n, h);\n    if(nh < 0.0) {\n      specfac = 0.0;\n    }\n    else {\n      float nv = max(dot(n, v), 0.01);\n      float nl = dot(n, l);\n      if(nl <= 0.01) {\n        specfac = 0.0;\n      }\n      else {\n        float vh = max(dot(v, h), 0.01);\n\n        float a = 1.0;\n        float b = (2.0*nh*nv)/vh;\n        float c = (2.0*nh*nl)/vh;\n\n        float g = 0.0;\n\n        if(a < b && a < c) g = a;\n        else if(b < a && b < c) g = b;\n        else if(c < a && c < b) g = c;\n\n        float p = sqrt(((refrac * refrac)+(vh*vh)-1.0));\n        float f = (((p-vh)*(p-vh))/((p+vh)*(p+vh)))*(1.0+((((vh*(p+vh))-1.0)*((vh*(p+vh))-1.0))/(((vh*(p-vh))+1.0)*((vh*(p-vh))+1.0))));\n        float ang = acos(nh);\n\n        specfac = max(f*g*exp_blender((-(ang*ang)/(2.0*spec_power*spec_power))), 0.0);\n      }\n    }\n  }\n}\n#define M_PI 3.14159265\nvoid shade_specular_wardiso(const in vec3 n, const in vec3 l, const in vec3 v, const in float rms, out float specfac)\n{\n  vec3 h = normalize(l + v);\n  float nh = max(dot(n, h), 0.001);\n  float nv = max(dot(n, v), 0.001);\n  float nl = max(dot(n, l), 0.001);\n  float angle = tan(acos(nh));\n  float alpha = max(rms, 0.001);\n\n  specfac= nl * (1.0/(4.0*M_PI*alpha*alpha))*(exp_blender(-(angle*angle)/(alpha*alpha))/(sqrt(nv*nl)));\n}\nvoid shade_is_hemi(const in float inp, out float is)\n{\n  is = 0.5*inp + 0.5;\n}\nvoid shade_diffuse_oren_nayer(const in float nl, const in vec3 n, const in vec3 l, const in vec3 v, const in float rough, out float is)\n{\n  vec3 h = normalize(v + l);\n  float nh = max(dot(n, h), 0.0);\n  float nv = max(dot(n, v), 0.0);\n  float realnl = dot(n, l);\n\n  if(realnl < 0.0) {\n    is = 0.0;\n  }\n  else if(nl < 0.0) {\n    is = 0.0;\n  }\n  else {\n    float vh = max(dot(v, h), 0.0);\n    float Lit_A = acos(realnl);\n    float View_A = acos(nv);\n\n    vec3 Lit_B = normalize(l - realnl*n);\n    vec3 View_B = normalize(v - nv*n);\n\n    float t = max(dot(Lit_B, View_B), 0.0);\n\n    float a, b;\n\n    if(Lit_A > View_A) {\n      a = Lit_A;\n      b = View_A;\n    }\n    else {\n      a = View_A;\n      b = Lit_A;\n    }\n\n    float A = 1.0 - (0.5*((rough*rough)/((rough*rough) + 0.33)));\n    float B = 0.45*((rough*rough)/((rough*rough) + 0.09));\n\n    b *= 0.95;\n    is = nl*(A + (B * t * sin(a) * tan(b)));\n  }\n}\nvoid shade_diffuse_minnaert(const in float nl, const in vec3 n, const in vec3 v, const in float darkness, out float is)\n{\n  if(nl <= 0.0) {\n    is = 0.0;\n  }\n  else {\n    float nv = max(dot(n, v), 0.0);\n\n    if(darkness <= 1.0)\n      is = nl*pow(max(nv*nl, 0.1), darkness - 1.0);\n    else\n      is = nl*pow(1.0001 - nv, darkness - 1.0);\n  }\n}\nfloat fresnel_fac(const in vec3 view, const in vec3 vn, const in float grad, const in float fac)\n{\n  float t1, t2;\n  float ffac;\n\n  if(fac==0.0) {\n    ffac = 1.0;\n  }\n  else {\n    t1= dot(view, vn);\n    if(t1>0.0)  t2= 1.0+t1;\n    else t2= 1.0-t1;\n\n    t2= grad + (1.0-grad)*pow(t2, fac);\n\n    if(t2<0.0) ffac = 0.0;\n    else if(t2>1.0) ffac = 1.0;\n    else ffac = t2;\n  }\n\n  return ffac;\n}\n\nvoid shade_diffuse_fresnel(const in vec3 vn, const in vec3 lv, const in vec3 view, const in float fac_i, const in float fac, out float is)\n{\n  is = fresnel_fac(lv, vn, fac_i, fac);\n}\n// lights global variables\nvec3 lightvector;\nfloat spotAttenuation;\nfloat dist;\nfloat visifac;\nfloat falloff;\nfloat lightInput;\nfloat lightOutput;\nvec3 diffuseOutCol;\nfloat specfac;\nfloat specularTerm;\nvec3 specularOutCol;\n"
        },
        computeFragment : function () {
            var a = "\nspecularOutCol = vec3(0.0);\ndiffuseOutCol = vec3(0.0);\n",
            c = this._light.getFalloffType(),
            e = "";
            c === "INVERSE_SQUARE" ? e = "lamp_falloff_invsquare(" + this._light.getOrCreateUniforms().distance.getName() + ", dist, visifac);" : c === "INVERSE_LINEAR" ? e = "lamp_falloff_invlinear(" + this._light.getOrCreateUniforms().distance.getName() + ", dist, visifac);" : c === "CONSTANT_LINEAR" && (e = "visifac = 1.0;");
            var f = "",
            g = "",
            c = this._light.getLightType();
            c === "POINT" ? (g += ["lamp_visibility_other(FragEyeVector, vec3(" +
                    this._light.getOrCreateUniforms().position.getName() + "), lightvector, dist, visifac);", e, ""].join("\n"), this._light.getUseSphere() && (f = "lamp_visibility_sphere( " + this._light.getOrCreateUniforms().distance.getName() + ", dist, visifac, visifac);")) : c === "SUN" || c === "HEMI" ? g += ["lamp_visibility_sun_hemi(" + this._light.getOrCreateUniforms().position.getName() + ", lightvector, dist, visifac);", ""].join("\n") : c === "SPOT" && (g += ["lamp_visibility_other(FragEyeVector, vec3(" + this._light.getOrCreateUniforms().position.getName() +
                    "), lightvector, dist, visifac);", e, "lamp_visibility_spot_circle(" + this._light.getOrCreateUniforms().direction.getName() + ", -lightvector, spotAttenuation);", "lamp_visibility_spot(" + this._light.getOrCreateUniforms().spotCutoff.getName() + ", " + this._light.getOrCreateUniforms().spotBlend.getName() + ", spotAttenuation, visifac, visifac);", ""].join("\n"), this._light.getUseSphere() && (f = "lamp_visibility_sphere( " + this._light.getOrCreateUniforms().distance.getName() + ", dist, visifac, visifac);"));
            a += ["", g,
                f, "lamp_visibility_clamp(visifac, visifac);\n"].join("\n");
            e = "";
            f = this._material.getDiffuseShader();
            this._light.getUseDiffuse() ? (c === "HEMI" ? (e += "shade_diffuse_lambert(" + this.getNormal().getVariable() + ", lightvector, lightInput);", e += "\nshade_is_hemi(lightInput, lightInput);") : f === "TOON" ? e += "shade_diffuse_toon(" + this.getNormal().getVariable() + ", lightvector, " + this.getEyeVector().getVariable() + ", " + this.getDiffuseToonSize().getVariable() + ", " + this.getDiffuseToonSmooth().getVariable() + ",lightInput);" :
                f === "LAMBERT" ? e += "shade_diffuse_lambert(" + this.getNormal().getVariable() + ", lightvector, lightInput);" : f === "OREN_NAYAR" ? (e += "shade_diffuse_lambert(" + this.getNormal().getVariable() + ", lightvector, lightInput);", e += "shade_diffuse_oren_nayer(lightInput," + this.getNormal().getVariable() + ", lightvector, " + this.getEyeVector().getVariable() + ", " + this.getRoughness().getVariable() + ",lightInput);") : f === "MINNAERT" ? (e += "shade_diffuse_lambert(" + this.getNormal().getVariable() + ", lightvector, lightInput);", e += "shade_diffuse_minnaert(lightInput," +
                    this.getNormal().getVariable() + ", " + this.getEyeVector().getVariable() + ", " + this.getDarkness().getVariable() + ",lightInput);") : f === "FRESNEL" && (e += "shade_diffuse_fresnel(" + this.getNormal().getVariable() + ", lightvector, " + this.getEyeVector().getVariable() + ", " + this.getDiffuseFresnelFactor().getVariable() + ", " + this.getDiffuseFresnel().getVariable() + ", lightInput);"), a += ["", e, "shade_visifac(lightInput, visifac, " + this.getMaterialDiffuseIntensity().getVariable() + ", lightOutput);", "diffuseOutCol = " + this._light.getOrCreateUniforms().color.getName() +
                    " * lightOutput;", "diffuseOutCol = max(diffuseOutCol * " + this.getMaterialDiffuseColor().getVariable() + ", vec3(0.0));"].join("\n")) : a += "diffuseOutCol = vec3(0.0);";
            e = "";
            f = this._material.getSpecularShader();
            this._light.getUseSpecular() ? (c === "HEMI" ? a += "\nshade_hemi_spec(" + this.getNormal().getVariable() + ", lightvector, " + this.getEyeVector().getVariable() + ", " + this.getMaterialSpecularIntensity().getVariable() + ", " + this.getMaterialHardness().getVariable() + " , visifac, specularTerm);" : (f === "TOON" ? e += "shade_specular_toon(" +
                    this.getNormal().getVariable() + ", lightvector, " + this.getEyeVector().getVariable() + ", " + this.getSpecularToonSize().getVariable() + ", " + this.getSpecularToonSmooth().getVariable() + ",specfac);" : f === "COOKTORR" ? e += "shade_specular_cooktorr(" + this.getNormal().getVariable() + ", lightvector, " + this.getEyeVector().getVariable() + ", " + this.getMaterialHardness().getVariable() + ", specfac);" : f === "PHONG" ? e += "shade_specular_phong(" + this.getNormal().getVariable() + ", lightvector, " + this.getEyeVector().getVariable() + ", " +
                    this.getMaterialHardness().getVariable() + ", specfac);" : f === "BLINN" ? e += "shade_specular_blinn(" + this.getNormal().getVariable() + ", lightvector, " + this.getEyeVector().getVariable() + ", " + this.getSpecularIor().getVariable() + ", " + this.getMaterialHardness().getVariable() + ", specfac);" : f === "WARDISO" && (e += "shade_specular_wardiso(" + this.getNormal().getVariable() + ", lightvector, " + this.getEyeVector().getVariable() + ", " + this.getSpecularSlope().getVariable() + ", specfac);"), a += ["", e, "shade_spec_t(1.0, " + this.getMaterialSpecularIntensity().getVariable() +
                        ", visifac, specfac, specularTerm);", ""].join("\n")), a += ["", "specularOutCol = specularTerm * " + this.getMaterialSpecularColor().getVariable() + " * " + this._light.getOrCreateUniforms().color.getName() + ";", "specularOutCol = max(specularOutCol, vec3(0.0));\n"].join("\n")) : a += "specularOutCol = vec3(0.0);";
            a += this._output.getVariable() + " = specularOutCol + diffuseOutCol;";
            return a
        }
    });
ShaderNode.ShaderContext = function (a, c, e) {
    this._state = a;
    this._variables = {};
    this._vertexShader = [];
    this._fragmentShader = [];
    for (var a = [], f, g = 0, h = c.length; g < h; g++) {
        var i = c[g].blenderType;
        i === "BlenderLight" ? a.push(c[g]) : i === "BlenderMaterial" ? f = c[g] : osg.warn("ShaderContext, dont know type " + i)
    }
    c = Array(e.length);
    g = 0;
    for (h = e.length; g < h; g++)
        if (i = e[g], i !== void 0)
            for (var k = 0, m = i.length; k < m; k++)
                i[k].blenderType === "BlenderTextureMaterial" && (c[g] = i[k]);
    this._lights = a;
    this._material = f;
    this._textures = c
};
ShaderNode.ShaderContext.prototype = {
    getVariable : function (a) {
        return this._variables[a]
    },
    Variable : function (a, c) {
        var e = c;
        e === void 0 && (e = "tmp_" + Object.keys(this._variables).length);
        var f = new ShaderNode.Variable(a, e);
        return this._variables[e] = f
    },
    Uniform : function (a, c) {
        var e = c;
        e === void 0 && (e = "tmp_" + Object.keys(this._variables).length);
        var f = new ShaderNode.Uniform(a, e);
        return this._variables[e] = f
    },
    Varying : function (a, c) {
        var e = c;
        e === void 0 && (e = "tmp_" + Object.keys(this._variables).length);
        var f = new ShaderNode.Varying(a,
                e);
        return this._variables[e] = f
    },
    Sampler : function (a, c) {
        var e = c;
        e === void 0 && (e = "sampler_" + Object.keys(this._variables).length);
        var f = new ShaderNode.Sampler(a, e);
        return this._variables[e] = f
    },
    createFragmentShaderGraph : function () {
        for (var a = this._lights, c = this._material, e = this._textures, f = c.getOrCreateUniforms(), g = Object.keys(f), h = 0, i = g.length; h < i; h++) {
            var k = g[h];
            k !== "uniformKeys" && (k = f[k], this.Uniform(k.type, k.name))
        }
        var m = this.getVariable(f.ambientColor.name),
        n = this.getVariable(f.ambientFactor.name),
        p = this.getVariable(f.emit.name),
        s = this.getVariable(f.diffuseColor.name),
        q = this.getVariable(f.specularColor.name),
        w = this.getVariable(f.diffuseIntensity.name),
        y = this.getVariable(f.specularIntensity.name),
        E = this.getVariable(f.hardness.name),
        G = this.getVariable(f.translucency.name),
        h = this.getVariable(f.roughness.name),
        i = this.getVariable(f.darkness.name),
        k = this.getVariable(f.diffuseFresnel.name),
        O = this.getVariable(f.diffuseFresnelFactor.name),
        F = this.getVariable(f.specularSlope.name),
        R = this.getVariable(f.specularIor.name),
        I = this.Varying("vec3", "FragNormal"),
        N = this.Varying("vec4", "FragTangent"),
        A = this.Varying("vec3", "FragEyeVector"),
        M = this.Variable("vec3", "normal"),
        J = this.Variable("vec3", "eyeVector"),
        I = new ShaderNode.NormalizeNormalAndEyeVector(I, A);
        I.connectOutputNormal(M);
        I.connectOutputEyeVector(J);
        for (var I = osg.BlenderTextureMaterial.prototype.channelType, K = {}, A = function (a) {
            if (K[a] === void 0)
                K[a] = [], K[a].pushEntry = function (a, c) {
                    this.push({
                        variable : a,
                        texture : c
                    })
                };
            return K[a]
        }, D = 0, u = e.length; D < u; D++) {
            var S = e[D];
            if (S !==
                void 0)
                for (var L = I.length, g = 0; g < L; g++) {
                    var j = S.getChannels()[I[g]];
                    if (j !== void 0) {
                        var v = this.getVariable("Texture" + D);
                        v === void 0 && (S.getTexture().className() === "Texture" ? v = this.Sampler("sampler2D", "Texture" + D) : S.getTexture().className() === "TextureCubeMap" && (v = this.Sampler("samplerCube", "Texture" + D)));
                        var B = S.getTexCoordUnit();
                        B === void 0 && (B = D);
                        var U = this.getVariable("FragTexCoord" + B);
                        U === void 0 && (U = this.Varying("vec2", "FragTexCoord" + B));
                        j = j.getName();
                        if (j === "DiffuseColor") {
                            var j = A(j),
                            B = this.Variable("vec3"),
                            fa;
                            S.getPremultiplyAlpha() ? (fa = this.Variable("vec4"), B = this.Variable("vec4"), v = new ShaderNode.TextureRGBA(v, U, fa), v = new ShaderNode.Srgb2Linear(fa, B), U = this.Variable("vec3"), v = new ShaderNode.PreMultAlpha(B, U), B = U) : (fa = this.Variable("vec3"), B = this.Variable("vec3"), v = new ShaderNode.TextureRGB(v, U, fa), v = new ShaderNode.Srgb2Linear(fa, B));
                            j.pushEntry(B, D)
                        } else
                            j === "DiffuseIntensity" ? (j = A(j), v = new ShaderNode.TextureIntensity(v, U), B = this.Variable("float"), v.connectOutput(B), j.pushEntry(B, D)) : j === "Alpha" ?
                            (j = A(j), v = S.getTexture().getInternalFormat() === osg.Texture.LUMINANCE ? new ShaderNode.TextureIntensity(v, U) : new ShaderNode.TextureAlpha(v, U), B = this.Variable("float"), v.connectOutput(B), j.pushEntry(B, D)) : j === "Translucency" ? (j = A(j), v = new ShaderNode.TextureTranslucency(v, U), B = this.Variable("float"), v.connectOutput(B), j.pushEntry(B, D)) : j === "SpecularColor" ? (j = A(j), v = new ShaderNode.TextureRGB(v, U), B = this.Variable("vec3"), v.connectOutput(B), j.pushEntry(B, D)) : j === "SpecularIntensity" ? (j = A(j), v = new ShaderNode.TextureIntensity(v,
                                        U), B = this.Variable("float"), v.connectOutput(B), j.pushEntry(B, D)) : j === "SpecularHardness" ? (j = A(j), v = new ShaderNode.TextureIntensity(v, U), B = this.Variable("float"), v.connectOutput(B), j.pushEntry(B, D)) : j === "AmbientColor" ? (j = A(j), B = this.Variable("vec3"), fa = this.Variable("vec3"), B = this.Variable("vec3"), v = new ShaderNode.TextureRGB(v, U, fa), v = new ShaderNode.Srgb2Linear(fa, B), j.pushEntry(B, D)) : j === "Ambient" ? (j = A(j), v = new ShaderNode.TextureIntensity(v, U), B = this.Variable("float"), v.connectOutput(B), j.pushEntry(B,
                                    D)) : j === "Emit" ? (j = A(j), v = new ShaderNode.TextureIntensity(v, U), B = this.Variable("float"), v.connectOutput(B), j.pushEntry(B, D)) : j === "Mirror" ? (j = A(j), v = new ShaderNode.TextureIntensity(v, U), B = this.Variable("float"), v.connectOutput(B), j.pushEntry(B, D)) : j === "MirrorCubemap" ? (U = this.Variable("vec3"), (new ShaderNode.ReflectionVector(M, J)).connectOutput(U), j = A(j), v = new ShaderNode.TextureCubemapRGB(v, U), B = this.Variable("vec3"), v.connectOutput(B), j.pushEntry(B, D)) : j === "Normal" && (j = A(j), v = new ShaderNode.TextureNormal(v,
                                        U), B = this.Variable("vec3"), v.connectOutput(B), j.pushEntry(B, D))
                    }
                }
        }
        var la = this,
        A = function (a, c, f) {
            var g = new ShaderNode.PassValue;
            if (K[c] !== void 0 && K[c].length > 0) {
                for (var h = K[c], i = f, k, j = 0, m = h.length; j < m; j++) {
                    var n = h[j],
                    p = n.texture,
                    q = e[p];
                    k = q.getBlendMode();
                    var i = la.Variable(f.getType()),
                    s = q.getOrCreateUniforms(p)[c],
                    u = la.getVariable(s.getName());
                    u === void 0 && (u = la.Uniform(s.getType(), s.getName()));
                    !(K.Alpha !== void 0 && K.Alpha.length > 0) && q.getUseAlpha() && (q = q.getTexCoordUnit(), q === void 0 && (q = p), q = la.getVariable("FragTexCoord" +
                                q), p = la.getVariable("Texture" + p), q = new ShaderNode.TextureAlpha(p, q), p = la.Variable("float"), q.connectOutput(p), q = la.Variable("float"), (new ShaderNode.MultVector(p, u)).connectOutput(q), u = q);
                    (new ShaderNode.BlendNode(k, f, n.variable, u)).connectOutput(i);
                    f = i
                }
                f = i
            }
            g.connectOutput(a);
            g.connectInput(f)
        },
        I = this.Variable("vec3", "diffuseColor");
        A(I, "DiffuseColor", s);
        s = this.Variable("float", "diffuseIntensity");
        A(s, "DiffuseIntensity", w);
        w = this.Variable("float", "translucency");
        A(w, "Translucency", G);
        w = this.Variable("float",
                "defaultAlpha");
        w.setValue("1.0");
        G = this.Variable("float", "alpha");
        A(G, "Alpha", w);
        w = this.Variable("vec3", "specularColor");
        A(w, "SpecularColor", q);
        q = this.Variable("float", "specularIntensity");
        A(q, "SpecularIntensity", y);
        y = this.Variable("float", "specularHardness");
        A(y, "SpecularHardness", E);
        E = this.Variable("float", "ambient");
        A(E, "Ambient", n);
        n = this.Variable("vec3", "ambientColor");
        A(n, "AmbientColor", m);
        m = this.Variable("float", "emit");
        A(m, "Emit", p);
        if (K.MirrorCubemap !== void 0 && K.MirrorCubemap.length > 0) {
            var ba =
                this.Variable("float", "defaultMirror");
            ba.setValue("0.0");
            p = this.Variable("float");
            A(p, "Mirror", ba);
            D = this.Variable("vec3");
            ba = this.Variable("vec3", "defaultCubemapMirror");
            ba.setValue("vec3(0.0)");
            u = this.Variable("vec3");
            A(D, "MirrorCubemap", ba);
            ba = this.Variable("vec3");
            (new ShaderNode.MultVector(p, D)).connectOutput(ba);
            (new ShaderNode.AddVector(w, ba)).connectOutput(u);
            w = u
        }
        p = this.Variable("vec3");
        D = this.Variable("vec3");
        m = new ShaderNode.MultVector(I, m);
        m.connectOutput(D);
        u = this.Variable("vec3");
        m =
            new ShaderNode.MultVector(n, E);
        m.connectOutput(u);
        m = new ShaderNode.AddVector(u, D);
        m.connectOutput(p);
        n = this.Variable("vec3");
        A(n, "Normal", M);
        m = this.Variable("vec3", "final_normal");
        K.Normal !== void 0 && K.Normal.length > 0 ? new ShaderNode.NormalTangentSpace(N, M, n, m) : new ShaderNode.PassValue(n, m);
        var N = this.Variable("vec3", "light_accumulator"),
        pa;
        a.length > 0 && (pa = new ShaderNode.AddVector, pa.connectOutput(N));
        M = this.getVariable(f.diffuseToonSize.name);
        n = this.getVariable(f.diffuseToonSmooth.name);
        A = this.getVariable(f.specularToonSize.name);
        D = this.getVariable(f.specularToonSmooth.name);
        u = 0;
        for (S = a.length; u < S; u++) {
            L = a[u];
            f = L.getOrCreateUniforms();
            g = Object.keys(f);
            v = 0;
            for (U = g.length; v < U; v++)
                j = g[v], j !== "uniformKeys" && (j = f[j], this.Uniform(j.type, j.name));
            g = this.getVariable(f.position.name);
            v = this.getVariable(f.direction.name);
            U = this.getVariable(f.distance.name);
            j = this.getVariable(f.spotCutoff.name);
            B = this.getVariable(f.spotBlend.name);
            f = this.getVariable(f.color.name);
            fa = this.Variable("vec3");
            this.Variable("vec3");
            L = new ShaderNode.LightNode(c,
                    L);
            L.connectSpecularIor(R);
            L.connectSpecularSlope(F);
            L.connectDiffuseFresnel(k);
            L.connectDiffuseFresnelFactor(O);
            L.connectDarkness(i);
            L.connectRoughness(h);
            L.connectDiffuseToonSmooth(n);
            L.connectDiffuseToonSize(M);
            L.connectSpecularToonSmooth(D);
            L.connectSpecularToonSize(A);
            L.connectMaterialAmbient(E);
            L.connectMaterialDiffuseIntensity(s);
            L.connectMaterialSpecularIntensity(q);
            L.connectMaterialSpecularColor(w);
            L.connectMaterialHardness(y);
            L.connectMaterialDiffuseColor(I);
            L.connectLightColor(f);
            L.connectNormal(m);
            L.connectEyeVector(J);
            L.connectLightSpotCutoff(j);
            L.connectLightSpotBlend(B);
            L.connectLightPosition(g);
            L.connectLightDirection(v);
            L.connectLightDistance(U);
            L.connectOutput(fa);
            pa.connectInput(fa)
        }
        K.MirrorCubemap !== void 0 && K.MirrorCubemap.length > 0 && pa.connectInput(ba);
        a = new ShaderNode.FragColor;
        pa = this.Variable("vec3");
        ba = new ShaderNode.AddVector(p);
        ba.connectOutput(pa);
        c.getShadeless() === !0 ? ba.connectInput(I) : ba.connectInput(N);
        c = this.Variable("vec4");
        new ShaderNode.SetAlpha(pa, G, c);
        new ShaderNode.Linear2Srgb(c,
            a);
        return a
    },
    traverse : function (a, c) {
        for (var e = 0, f = c.getInputs().length; e < f; e++) {
            var g = c.getInputs()[e];
            g !== void 0 && g !== c && this.traverse(a, g)
        }
        a.call(a, c)
    },
    evaluateGlobalFunctionDeclaration : function (a) {
        var c = function (a) {
            a.globalFunctionDeclaration && this._map[a.type] === void 0 && (this._map[a.type] = !0, this._text.push(a.globalFunctionDeclaration()))
        };
        c._map = {};
        c._text = [];
        this.traverse(c, a);
        return c._text.join("\n")
    },
    evaluateGlobalVariableDeclaration : function (a) {
        var c = function (a) {
            this._map[a._id] === void 0 &&
            (this._map[a._id] = !0, a.globalDeclaration !== void 0 && (a = a.globalDeclaration(), a !== void 0 && this._text.push(a)))
        };
        c._map = {};
        c._text = [];
        this.traverse(c, a);
        return c._text.join("\n")
    },
    evaluate : function (a) {
        var c = function (a) {
            if (this._mapTraverse[a._id] === void 0) {
                var c = a.computeFragment();
                c !== void 0 && this._text.push(c);
                this._mapTraverse[a._id] = !0
            }
        };
        c._text = [];
        c._mapTraverse = [];
        this.traverse(c, a);
        this._fragmentShader.push(c._text.join("\n"))
    },
    createVertexShaderGraph : function () {
        var a = this._textures;
        this._vertexShader.push("\n#ifdef GL_ES\nprecision highp float;\n#endif\nattribute vec3 Vertex;\nattribute vec4 Color;\nattribute vec3 Normal;\nattribute vec4 Tangent;\nuniform int ArrayColorEnabled;\nuniform mat4 ModelViewMatrix;\nuniform mat4 ProjectionMatrix;\nuniform mat4 NormalMatrix;\nvarying vec4 VertexColor;\nvarying vec3 FragNormal;\nvarying vec4 FragTangent;\nvarying vec3 FragEyeVector;\n\n");
        for (var c = {}, e = 0, f = a.length; e < f; e++) {
            var g = a[e];
            g !== void 0 && (g = g.getTexCoordUnit(), g === void 0 && (g = e), c[g] === void 0 && (this._vertexShader.push("attribute vec2 TexCoord" + g + ";"), this._vertexShader.push("varying vec2 FragTexCoord" + g + ";"), c[g] = !0))
        }
        this._vertexShader.push("void main() {");
        this._vertexShader.push("  FragNormal = vec3(NormalMatrix * vec4(Normal, 0.0));");
        this._vertexShader.push("  FragTangent = NormalMatrix * Tangent;");
        this._vertexShader.push("  FragEyeVector = vec3(ModelViewMatrix * vec4(Vertex,1.0));");
        this._vertexShader.push("  gl_Position = ProjectionMatrix * ModelViewMatrix * vec4(Vertex, 1.0);");
        this._vertexShader.push("\n  if (ArrayColorEnabled == 1)\n    VertexColor = Color;\n  else\n    VertexColor = vec4(1.0,1.0,1.0,1.0);\n");
        var h = this;
        (function () {
            for (var c = {}, e = 0, f = a.length; e < f; e++)
                if (a[e] !== void 0) {
                    var g = a[e].getTexCoordUnit();
                    g === void 0 && (g = e);
                    c[g] === void 0 && (h._vertexShader.push("FragTexCoord" + g + " = TexCoord" + g + ";"), c[g] = !0)
                }
        })();
        this._vertexShader.push("}")
    },
    createVertexShader : function () {
        this.createVertexShaderGraph();
        return this._vertexShader.join("\n")
    },
    createFragmentShader : function () {
        var a = this.createFragmentShaderGraph();
        this._fragmentShader.push("\n#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 VertexColor;\nuniform mat4 CubemapTransform;\nuniform mat4 NormalMatrix;\n");
        var c = Object.keys(this._variables);
        this._fragmentShader.push(this.evaluateGlobalVariableDeclaration(a));
        this._fragmentShader.push("");
        this._fragmentShader.push(this.evaluateGlobalFunctionDeclaration(a));
        this._fragmentShader.push("void main() {");
        for (var e = 0, f = c.length; e < f; e++)
            this._variables[c[e]].declare() !== void 0 && this._fragmentShader.push(this._variables[c[e]].declare());
        this.evaluate(a);
        this._fragmentShader.push("}");
        return this._fragmentShader.join("\n")
    }
};
osg.BlenderLight = function (a) {
    osg.StateAttribute.call(this);
    a === void 0 && (a = 0);
    this._color = [1, 1, 1];
    this._useSpecular = this._useDiffuse = !0;
    this._position = [0, 0, 0];
    this._direction = [0, 0, -1];
    this._spotCutoff = Math.cos(25);
    this._spotBlend = 0.01;
    this._falloffType = "INVERSE_SQUARE";
    this._distance = 25;
    this._energy = 1;
    this._lightUnit = a;
    this._type = "POINT";
    this._useSphere = !1;
    this._enabled = 0;
    this.dirty()
};
osg.BlenderLight.uniforms = {};
osg.BlenderLight.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        blenderType : "BlenderLight",
        attributeType : "BlenderLight",
        cloneType : function () {
            return new osg.BlenderLight(this._lightUnit)
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType + this._lightUnit
        },
        getUniformName : function (a) {
            return this.getPrefix() + "_uniform_" + a
        },
        getHash : function () {
            return "BlenderLight" + this._lightUnit + this._type + this._falloffType + this._useSphere.toString() + this._useDiffuse.toString() +
            this._useSpecular.toString()
        },
        getOrCreateUniforms : function () {
            var a = osg.BlenderLight,
            c = osg.Uniform,
            e = this.getTypeMember();
            if (a.uniforms[e] === void 0) {
                uniformList = {
                    color : "createFloat3",
                    position : "createFloat3",
                    direction : "createFloat3",
                    spotCutoff : "createFloat1",
                    spotBlend : "createFloat1",
                    distance : "createFloat1"
                };
                for (var f = Object.keys(uniformList), g = {}, h = 0; h < f.length; h++) {
                    var i = f[h];
                    g[i] = (0, c[uniformList[i]])(this.getUniformName(i))
                }
                g.uniformKeys = f;
                a.uniforms[e] = g
            }
            return a.uniforms[e]
        },
        setPosition : function (a) {
            osg.Vec3.copy(a,
                this._position)
        },
        setDirection : function (a) {
            osg.Vec3.copy(a, this._direction)
        },
        setColor : function (a) {
            osg.Vec3.copy(a, this._color);
            this.dirty()
        },
        getColor : function () {
            return this._color
        },
        setEnergy : function (a) {
            this._energy = a;
            this.dirty()
        },
        getEnergy : function () {
            return this._energy
        },
        setSpotCutoff : function (a) {
            this._spotCutoff = a;
            this.dirty()
        },
        setSpotBlend : function (a) {
            this._spotBlend = a;
            this.dirty()
        },
        setUseDiffuse : function (a) {
            this._useDiffuse = a;
            this.dirty()
        },
        getUseDiffuse : function () {
            return this._useDiffuse
        },
        setUseSpecular : function (a) {
            this._useSpecular =
                a;
            this.dirty()
        },
        getUseSpecular : function () {
            return this._useSpecular
        },
        setLightType : function (a) {
            this._position = a === "SUN" || a === "HEMI" ? [0, 0, -1] : [0, 0, 0];
            this._type = a;
            this.dirty()
        },
        getLightType : function () {
            return this._type
        },
        setFalloffType : function (a) {
            this._falloffType = a
        },
        getFalloffType : function () {
            return this._falloffType
        },
        setUseSphere : function (a) {
            this._useSphere = a
        },
        getUseSphere : function () {
            return this._useSphere
        },
        setDistance : function (a) {
            this._distance = a;
            this.dirty()
        },
        getDistance : function () {
            return this._distance
        },
        setLightNumber : function (a) {
            this._lightUnit = a;
            this.dirty()
        },
        getLightNumber : function () {
            return this._lightUnit
        },
        getPrefix : function () {
            return this.getType() + this._lightUnit
        },
        getParameterName : function (a) {
            return this.getPrefix() + "_" + a
        },
        applyPositionedUniform : function (a) {
            var c = this.getOrCreateUniforms(),
            e;
            this._type === "SUN" || this._type === "HEMI" ? (e = Array(16), osg.Matrix.copy(a, e), e[12] = 0, e[13] = 0, e[14] = 0, osg.Matrix.inverse(e, e), osg.Matrix.transpose(e, e), osg.Matrix.transformVec3(e, this._position, c.position.get())) :
            osg.Matrix.transformVec3(a, this._position, c.position.get());
            this._type === "SPOT" && (e = Array(16), osg.Matrix.copy(a, e), e[12] = 0, e[13] = 0, e[14] = 0, osg.Matrix.inverse(e, e), osg.Matrix.transpose(e, e), osg.Matrix.transformVec3(e, this._direction, c.direction.get()));
            c.position.dirty();
            c.direction.dirty()
        },
        apply : function () {
            var a = this.getOrCreateUniforms(),
            c = a.color.get();
            c[0] = this._color[0] * this._energy;
            c[1] = this._color[1] * this._energy;
            c[2] = this._color[2] * this._energy;
            a.color.dirty();
            osg.Vec3.copy(this._position,
                a.position.get());
            osg.Vec3.copy(this._direction, a.direction.get());
            a.position.dirty();
            a.direction.dirty();
            c = Math.cos(this._spotCutoff * 0.5);
            a.spotCutoff.get()[0] = c;
            a.spotCutoff.dirty();
            a.spotBlend.get()[0] = (1 - c) * this._spotBlend;
            a.spotBlend.dirty();
            a.distance.get()[0] = this._distance;
            a.distance.dirty();
            this.setDirty(!1)
        }
    });
osg.BlenderMaterial = function () {
    osg.StateAttribute.call(this);
    this._diffuseColor = [0, 0, 0];
    this._diffuseIntensity = 1;
    this._specularColor = [0, 0, 0];
    this._specularIntensity = 1;
    this._translucency = this._emit = 0;
    this._specularHardness = 12.5;
    this._roughness = 0.5;
    this._darkness = 1;
    this._shadeless = !1;
    this._ambientColor = [0, 0, 0];
    this._ambient = 0;
    this._diffuseShader = "LAMBERT";
    this._specularShader = "COOKTORR";
    this._diffuseFresnel = 0.1;
    this._diffuseFresnelFactor = 0.5;
    this._specularToonSmooth = this._diffuseToonSmooth = this._specularToonSize =
        this._diffuseToonSize = 1
};
osg.defineProperties = function (a, c) {
    a.forEach(function (a) {
        c["_" + a] = void 0
    })
};
osg.defineGetterSetter = function (a, c) {
    a.forEach(function (a) {
        var f = "set" + a,
        g = "get" + a,
        h = "_" + (a.substr(0, 1).toLowerCase() + a.substr(1));
        c[f] = function (a) {
            this[h] = a;
            this.dirty()
        };
        c[g] = function () {
            return this[h]
        }
    });
    return c
};
osg.BlenderMaterial.prototype = osg.defineGetterSetter("Shadeless,DiffuseShader,SpecularShader,Ambient,AmbientColor,DiffuseColor,SpecularColor,Emit,DiffuseIntensity,SpecularIntensity,Translucency,SpecularHardness,Roughness,Darkness,SpecularIor,SpecularSlope,DiffuseFresnel,DiffuseFresnelFactor,DiffuseToonSize,DiffuseToonSmooth,SpecularToonSize,SpecularToonSmooth".split(","), osg.objectInehrit(osg.StateAttribute.prototype, {
            blenderType : "BlenderMaterial",
            attributeType : "BlenderMaterial",
            getHash : function () {
                return this.attributeType +
                this._diffuseShader + this._specularShader + this._shadeless.toString()
            },
            cloneType : function () {
                return new osg.BlenderMaterial
            },
            getType : function () {
                return this.attributeType
            },
            getTypeMember : function () {
                return this.attributeType
            },
            getParameterName : function (a) {
                return this.getType() + "_uniform_" + a
            },
            getOrCreateUniforms : function () {
                var a = osg.BlenderMaterial,
                c = osg.Uniform;
                if (a.uniforms === void 0) {
                    uniformList = {
                        ambientFactor : "createFloat1",
                        ambientColor : "createFloat3",
                        diffuseColor : "createFloat3",
                        specularColor : "createFloat3",
                        emit : "createFloat1",
                        diffuseIntensity : "createFloat1",
                        specularIntensity : "createFloat1",
                        translucency : "createFloat1",
                        hardness : "createFloat1",
                        roughness : "createFloat1",
                        darkness : "createFloat1",
                        specularIor : "createFloat1",
                        specularSlope : "createFloat1",
                        diffuseFresnel : "createFloat1",
                        diffuseFresnelFactor : "createFloat1",
                        diffuseToonSize : "createFloat1",
                        diffuseToonSmooth : "createFloat1",
                        specularToonSize : "createFloat1",
                        specularToonSmooth : "createFloat1"
                    };
                    for (var e = Object.keys(uniformList), f = {}, g = 0; g < e.length; g++) {
                        var h =
                            e[g];
                        f[h] = (0, c[uniformList[h]])(this.getParameterName(h))
                    }
                    f.uniformKeys = e;
                    a.uniforms = f
                }
                return a.uniforms
            },
            apply : function () {
                var a = this.getOrCreateUniforms();
                a.ambientFactor.set(this._ambient);
                a.diffuseColor.set(this._diffuseColor);
                a.specularColor.set(this._specularColor);
                a.emit.set(this._emit);
                a.diffuseIntensity.set(this._diffuseIntensity);
                a.specularIntensity.set(this._specularIntensity);
                a.translucency.set(1 - this._translucency);
                this._diffuseShader === "TOON" ? (a.diffuseToonSmooth.set(this._diffuseToonSmooth),
                    a.diffuseToonSize.set(this._diffuseToonSize)) : this._diffuseShader === "OREN_NAYAR" ? a.roughness.set(this._roughness) : this._diffuseShader === "MINNAERT" ? a.darkness.set(this._darkness) : this._diffuseShader === "FRESNEL" && (a.diffuseFresnel.set(this._diffuseFresnel), a.diffuseFresnelFactor.set(this._diffuseFresnelFactor));
                this._specularShader === "TOON" ? (a.specularToonSmooth.set(this._specularToonSmooth), a.specularToonSize.set(this._specularToonSize)) : this._specularShader === "BLINN" ? (a.specularIor.set(this._specularIor),
                    a.hardness.set(this._specularHardness)) : this._specularShader === "COOKTORR" || this._specularShader === "PHONG" ? a.hardness.set(this._specularHardness) : this._specularShader === "WARDISO" && a.specularSlope.set(this._specularSlope);
                this.setDirty(!1)
            }
        }));
osg.BlenderTextureMaterial = function (a) {
    this._texture = a;
    this._channels = {};
    for (var c = 1; c < arguments.length; c++) {
        var e = arguments[c];
        this._channels[e] = new osg.BlenderTextureMaterial.Channel(e)
    }
    this._texCoordUnit = void 0;
    this._useAlpha = this._usePremultiplyAlpha = !1;
    this._blendMode = "MIX"
};
osg.BlenderTextureMaterial.uniforms = [];
osg.BlenderTextureMaterial.prototype = osg.objectInehrit(osg.StateAttribute.prototype, {
        attributeType : "Texture",
        blenderType : "BlenderTextureMaterial",
        _className : "BlenderTextureMaterial",
        channelType : "DiffuseColor,DiffuseIntensity,Alpha,Translucency,SpecularColor,SpecularIntensity,SpecularHardness,AmbientColor,Ambient,Emit,Mirror,MirrorCubemap,Normal".split(","),
        cloneType : function () {
            return new osg.BlenderTextureMaterial(new osg.Texture)
        },
        getTexture : function () {
            return this._texture
        },
        setPremultiplyAlpha : function (a) {
            this._usePremultiplyAlpha =
                a
        },
        getPremultiplyAlpha : function () {
            return this._usePremultiplyAlpha
        },
        setUseAlpha : function (a) {
            this._useAlpha = a
        },
        getUseAlpha : function () {
            return this._useAlpha
        },
        setTexCoordUnit : function (a) {
            this._texCoordUnit = a
        },
        getTexCoordUnit : function () {
            return this._texCoordUnit
        },
        getType : function () {
            return this.attributeType
        },
        getTypeMember : function () {
            return this.attributeType
        },
        getBlendMode : function () {
            return this._blendMode
        },
        setBlendMode : function (a) {
            this._blendMode = a
        },
        getChannels : function () {
            return this._channels
        },
        setChannels : function (a) {
            this._channels =
                a
        },
        getChannelType : function () {
            return this.channelType
        },
        getOrCreateUniforms : function (a) {
            var c = osg.BlenderTextureMaterial.uniforms;
            if (c[a] === void 0) {
                var e = {};
                this._texture.getType();
                var f = this._texture.getOrCreateUniforms(a);
                e.texture = f.texture;
                for (var f = this.channelType, g = 0, h = f.length; g < h; g++) {
                    var i = f[g];
                    e[i] = osg.Uniform.createFloat1(this.getType() + a + "_uniform_" + i)
                }
                e.uniformKeys = Object.keys(e);
                c[a] = e
            }
            return c[a]
        },
        apply : function (a, c) {
            this._texture !== void 0 && this._texture.apply(a);
            for (var e = this.getOrCreateUniforms(c),
                f = Object.keys(this._channels), g = 0, h = f.length; g < h; g++) {
                var i = f[g],
                k = e[i];
                k.get()[0] = this._channels[i].getFactor();
                k.dirty()
            }
        },
        getHash : function () {
            for (var a = this.attributeType, c = Object.keys(this._channels), e = 0, f = c.length; e < f; e++)
                a += c[e];
            return a
        }
    });
osg.BlenderTextureMaterial.Channel = function (a, c) {
    this._name = a;
    var e = c;
    e === void 0 && (e = 1);
    this._factor = e
};
osg.BlenderTextureMaterial.Channel.prototype = {
    setName : function (a) {
        this._name = a
    },
    getName : function () {
        return this._name
    },
    setFactor : function (a) {
        this._factor = a
    },
    getFactor : function () {
        return this._factor
    }
};
osg.BlenderShaderGenerator = function () {
    this._cache = {};
    this._attributeSupported = {};
    this._attributeSupported[osg.BlenderMaterial.prototype.attributeType] = !0;
    this._attributeSupported[osg.Texture.prototype.attributeType] = !0;
    this._attributeSupported[osg.BlenderLight.prototype.attributeType] = !0
};
osg.BlenderShaderGenerator.prototype = {
    getActiveAttributeList : function (a, c) {
        for (var e = "", f = a.attributeMap, g = 0, h = f.attributeKeys.length; g < h; g++) {
            var i = f[f.attributeKeys[g]].lastApplied;
            i.blenderType !== void 0 && this._attributeSupported[i.getType()] !== void 0 && (e += i.getHash(), c.push(i))
        }
        return e
    },
    getActiveTextureAttributeList : function (a, c) {
        for (var e = "", f = a.textureAttributeMapList, g = 0, h = f.length; g < h; g++) {
            var i = f[g];
            if (i !== void 0) {
                c[g] = [];
                for (var k = 0, m = i.attributeKeys.length; k < m; k++) {
                    var n = i.attributeKeys[k];
                    if (this._attributeSupported[n] !== void 0 && (n = i[n], n.length !== 0))
                        n = n.lastApplied, n.blenderType !== void 0 && (e += n.getHash(), c[g].push(n))
                }
            }
        }
        return e
    },
    getActiveUniforms : function (a, c, e) {
        for (var a = {}, f = 0, g = c.length; f < g; f++)
            for (var h = c[f].getOrCreateUniforms(), i = 0, k = h.uniformKeys.length; i < k; i++) {
                var m = h[h.uniformKeys[i]];
                a[m.name] = m
            }
        c = 0;
        for (f = e.length; c < f; c++)
            if (g = e[c], g !== void 0) {
                h = 0;
                for (i = g.length; h < i; h++)
                    for (var k = g[h].getOrCreateUniforms(c), m = 0, n = k.uniformKeys.length; m < n; m++) {
                        var p = k[k.uniformKeys[m]];
                        a[p.name] = p
                    }
            }
        e = Object.keys(a);
        a.uniformKeys = e;
        return a
    },
    getOrCreateProgram : function (a) {
        var c = "",
        e = [],
        f = [];
        c += this.getActiveAttributeList(a, e);
        c += this.getActiveTextureAttributeList(a, f);
        if (this._cache[c] !== void 0)
            return this._cache[c];
        var g = new ShaderNode.ShaderContext(a, e, f),
        h = g.createVertexShader(),
        g = g.createFragmentShader(),
        h = new osg.Program(new osg.Shader(gl.VERTEX_SHADER, h), new osg.Shader(gl.FRAGMENT_SHADER, g));
        h.hash = c;
        h.activeUniforms = this.getActiveUniforms(a, e, f);
        h.generated = !0;
        console.log(h.fragment.text);
        return this._cache[c] = h
    }
};
osg.blenderShaderGenerator = new osg.BlenderShaderGenerator;
osg.BlenderNodeVisitor = function () {
    osg.NodeVisitor.call(this);
    this._shaderGenerator = osg.blenderShaderGenerator;
    this._lights = [];
    this._materials = []
};
osg.BlenderNodeVisitor.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
        hasBlenderComponent : function () {
            return this._lights.length > 0 || this._materials.length > 0
        },
        getLights : function () {
            return this._lights
        },
        getMaterials : function () {
            return this._materials
        },
        getObject : function (a) {
            var c = {};
            a.forEach(function (a) {
                c[a.Name] = a.Value
            });
            return c
        },
        createLight : function (a) {
            if (!(a === void 0 || a.getUserData() === void 0)) {
                var c = this.getObject(a.getUserData());
                if (c.source === "blender") {
                    var e = new osg.BlenderLight;
                    e.setLightNumber(a.getLightNumber());
                    c.SpotSize !== void 0 && e.setSpotCutoff(JSON.parse(c.SpotSize));
                    c.SpotBlend !== void 0 && e.setSpotBlend(JSON.parse(c.SpotBlend));
                    c.UseSphere !== void 0 && e.setUseSphere(JSON.parse(c.UseSphere));
                    e.setEnergy(JSON.parse(c.Energy));
                    if (c.Type === "AREA")
                        c.Type = "HEMI";
                    e.setLightType(c.Type);
                    e.setColor(JSON.parse(c.Color));
                    e.setDistance(JSON.parse(c.Distance));
                    e.setFalloffType(c.FalloffType);
                    c.UseDiffuse !== void 0 && e.setUseDiffuse(JSON.parse(c.UseDiffuse));
                    c.UseSpecular !== void 0 && e.setUseSpecular(JSON.parse(c.UseSpecular));
                    this._lights.push(e);
                    return e
                }
            }
        },
        createMaterial : function (a, c) {
            if (!(a === void 0 || a.getUserData() === void 0)) {
                var e = this.getObject(a.getUserData());
                if (e.source === "blender") {
                    var f = new osg.BlenderMaterial,
                    g = function (a, c) {
                        if (e[a] !== void 0) {
                            var g = "set" + a;
                            if (f[g] === void 0)
                                osg.warn("material has not method " + g);
                            else if (c === void 0 || c === !0)
                                f[g](JSON.parse(e[a]));
                            else
                                f[g](e[a])
                        }
                    };
                    g("DiffuseColor");
                    g("DiffuseIntensity");
                    g("SpecularColor");
                    g("SpecularIntensity");
                    g("SpecularHardness");
                    g("Emit");
                    g("Translucency");
                    g("Ambient");
                    g("DiffuseShader", !1);
                    g("SpecularShader", !1);
                    g("DiffuseToonSize");
                    g("DiffuseToonSmooth");
                    g("SpecularToonSize");
                    g("SpecularToonSmooth");
                    g("Roughness");
                    g("Darkness");
                    g("DiffuseFresnel");
                    g("DiffuseFresnelFactor");
                    g("SpecularIor");
                    g("SpecularSlope");
                    g("Shadeless");
                    e.Transparency !== void 0 && (c.setAttributeAndModes(new osg.BlendFunc("SRC_ALPHA", "ONE_MINUS_SRC_ALPHA")), c.setRenderingHint("TRANSPARENT_BIN"));
                    this._materials.push(f);
                    return f
                }
            }
        },
        apply : function (a) {
            if (a.objectType === osg.LightSource.prototype.objectType) {
                if (a.getLight() !==
                    void 0 && a.getLight().getType() !== "BlenderLight" && a._blenderProcessed === void 0) {
                    var c = this.createLight(a.getLight());
                    c !== void 0 && a.setLight(c);
                    a._blenderProcessed = !0
                }
            } else if (a.getStateSet() !== void 0 && a.getStateSet()._blenderProcessed === void 0) {
                var e = a.getStateSet();
                e._blenderProcessed = !0;
                if (e.getUserData() !== void 0) {
                    var f = this.getObject(e.getUserData()),
                    g = e.getAttributeMap();
                    if (g !== void 0) {
                        var h = this;
                        Object.keys(g).forEach(function (a) {
                            if (g[a].getAttribute !== void 0) {
                                var a = g[a].getAttribute(),
                                c = a.getType();
                                c === "Light" ? (a = h.createLight(a), a !== void 0 && (e.setAttributeAndModes(a), e.removeAttribute("Light"))) : c === "Material" && (a = h.createMaterial(a, e), a !== void 0 && (e.setAttributeAndModes(a), e.removeAttribute("Material")))
                            }
                        })
                    }
                    var i = {};
                    f.source === "blender" && (e.setShaderGenerator(this._shaderGenerator), e.addUniform(sketchfab.rendering.cubemap._cubemapTransform), Object.keys(f).forEach(function (a) {
                            var c = a.substr(0, 2),
                            g = parseInt(c, 10);
                            if (!isNaN(g)) {
                                c = i[g];
                                if (c === void 0) {
                                    c = e.getTextureAttribute(g, "Texture");
                                    i[g] =
                                        new osg.BlenderTextureMaterial(c);
                                    for (c = 0; c < g; c++)
                                        i[c] === void 0 && (i[c] = void 0);
                                    c = i[g]
                                }
                                for (var g = a.substr(3), h = 0, s = c.getChannelType().length; h < s; h++)
                                    if (c.getChannelType()[h] === g) {
                                        g === "NormalMap" && (c._texture.setMinFilter("LINEAR"), c._texture.setMagFilter("LINEAR"));
                                        c.getChannels()[g] = new osg.BlenderTextureMaterial.Channel(g, parseFloat(f[a]));
                                        break
                                    }
                                g === "BlendType" ? c.setBlendMode(f[a]) : g === "UsePremultiplyAlpha" ? c.setPremultiplyAlpha(JSON.parse(f[a])) : g === "UseAlpha" && c.setUseAlpha(JSON.parse(f[a]))
                            }
                        }),
                        Object.keys(i).forEach(function (a) {
                            if (i[a] !== void 0) {
                                var c = parseInt(a, 10);
                                e.removeTextureAttribute(c, "Texture");
                                e.setTextureAttributeAndModes(c, i[a])
                            }
                        }))
                }
            }
            this.traverse(a)
        }
    });
test("osg.ShaderNode", function () {
    (function () {
        var a = [],
        c = [[], []];
        a.push(new osg.BlenderLight(0));
        a.push(new osg.BlenderLight(1));
        a.push(new osg.BlenderMaterial);
        c[0].push(new osg.BlenderTextureMaterial);
        c[1].push(new osg.BlenderTextureMaterial);
        a = new ShaderNode.ShaderContext({}, a, c);
        a.createVertexShader();
        a.createFragmentShader()
    })();
    (function () {
        var a = createCanvas(),
        a = new osgViewer.Viewer(a);
        a.init();
        a.getState().setGraphicContext(createFakeRenderer());
        var c = new osg.BlenderLight(0),
        e = new osg.BlenderLight(1),
        f = new osg.LightSource;
        f.setLight(c);
        var g = new osg.LightSource;
        g.setLight(e);
        e = new osg.Node;
        c = osg.createTexturedBoxGeometry(0, 0, 0, 2, 2, 2);
        e.addChild(f);
        e.addChild(g);
        e.addChild(c);
        f = new osg.BlenderMaterial;
        f.setDiffuseColor([1, 0, 1]);
        f.setDiffuseIntensity(0.5);
        f.setSpecularColor([0.4, 0.4, 0.4]);
        f.setDiffuseIntensity(0.68);
        var g = new osg.BlenderTextureMaterial(new osg.Texture, "DiffuseColor", "DiffuseIntensity"),
        h = new osg.BlenderTextureMaterial(new osg.Texture, "DiffuseColor"),
        i = new osg.BlenderTextureMaterial(new osg.Texture,
                "SpecularColor"),
        k = new osg.BlenderTextureMaterial(new osg.Texture, "DiffuseIntensity"),
        m = new osg.StateSet;
        m.setTextureAttributeAndModes(0, g);
        m.setTextureAttributeAndModes(1, h);
        m.setTextureAttributeAndModes(2, i);
        m.setTextureAttributeAndModes(3, k);
        m.setAttributeAndModes(f);
        m.setShaderGenerator(new osg.BlenderShaderGenerator);
        c.setStateSet(m);
        a.setSceneData(e);
        a.frame()
    })()
});
var sketchfab = function (a) {
    a.editor = {};
    a.editor.createSlider = function (a, e, f, g, h, i, k) {
        var m = sketchfab.editor.urlid;
        m === void 0 && (m = "");
        var n = $(a);
        if (n.length !== 0) {
            var p = m + "_" + a;
            k && window.localStorage !== void 0 && (a = window.localStorage.getItem(p), a !== null && (h = parseFloat(a)));
            var a = Math.floor((f - e) / g),
            s = a / (f - e),
            f = Math.max(1, Math.floor(g * s)),
            g = function () {
                var a = n.noUiSlider("value")[1],
                a = e + a / s,
                c = i(a);
                c === void 0 && (c = a);
                a = parseFloat(a.toFixed(6));
                n.find(".slider-value").text(c);
                k && window.localStorage !== void 0 &&
                window.localStorage.setItem(p, a)
            };
            n.empty().noUiSlider("init", {
                knobs : 1,
                connect : "lower",
                scale : [0, a],
                start : [h],
                step : f,
                change : g
            }).find(".noUi-handle div").each(function () {
                $(this).append('<span class="slider-value"></span>')
            });
            g()
        }
    };
    a.editor.createSliderOld = function (a, e, f, g, h, i, k) {
        var m = sketchfab.editor.urlid;
        m === void 0 && (m = "");
        var n = $(a);
        if (n.length !== 0) {
            var p = m + "_" + a;
            k && window.localStorage !== void 0 && (a = window.localStorage.getItem(p), a !== null && (h = parseFloat(a)));
            a = function () {
                var a = n.noUiSlider("value")[1];
                i(a);
                a = parseFloat(a.toFixed(6));
                n.find(".slider-value").text(a);
                k && window.localStorage !== void 0 && window.localStorage.setItem(p, a)
            };
            n.empty().noUiSlider("init", {
                knobs : 1,
                connect : "lower",
                scale : [e, f],
                start : [h],
                step : g,
                change : a
            }).find(".noUi-handle div").each(function () {
                $(this).append('<span class="slider-value"></span>')
            });
            a()
        }
    };
    a.editor.collapsible = function (a, e) {
        $(a).each(function () {
            var a = $(this);
            a._options = e;
            a.isCollapsed = e.enable;
            a.isEnabled = e.enable;
            a.onEnable = e.onEnable;
            a.arrow = a.first().find(".js-triangle-arrow");
            a.checkbox = a.first().find(":checkbox");
            a.legend = a.first().find("legend");
            a.formBox = a.find(".form-box");
            a.toggle = function () {
                a.isCollapsed ? a.expand() : a.collapse()
            };
            a.expand = function () {
                a.isCollapsed = !1;
                a.formBox.removeClass("hide-form-box");
                a.arrow.addClass("toggled")
            };
            a.collapse = function () {
                a.isCollapsed = !0;
                a.formBox.show();
                a.arrow.removeClass("toggled");
                a.formBox.addClass("hide-form-box")
            };
            a.enable = function () {
                a.isEnabled = !0;
                a.checkbox.prop("checked", !0);
                a.expand();
                if (a._options.onEnable !== void 0)
                    a._options.onEnable()
            };
            a.disable = function () {
                a.isEnabled = !1;
                a.checkbox.prop("checked", !1);
                a.collapse();
                if (a._options.onDisable !== void 0)
                    a._options.onDisable()
            };
            a.arrow.click(function () {
                a.toggle()
            });
            a.checkbox.click(function () {
                a.isEnabled ? a.disable() : a.enable()
            });
            a.legend.click(function () {
                a.isEnabled ? a.disable() : a.enable()
            });
            a.isEnabled ? (a.checkbox.prop("checked", !0), a.expand()) : (a.checkbox.prop("checked", !1), a.collapse())
        })
    };
    return a
}
(sketchfab || {});
function editUI(a) {
    sketchfab.editor.urlid = a;
    $(".js-edit-button").click(function () {
        $(".js-edit").addClass("visible");
        $(this).addClass("edit-button-hide")
    });
    $(".js-edit .close, .js-edit .js-cancel-meta").click(function () {
        $(".js-edit").removeClass("visible");
        $(".js-edit-button").removeClass("edit-button-hide")
    });
    $("#js-snapshot-take").click(function () {
        var c = $(this);
        c.addClass("snapshot-taking");
        var e = sketchfab.cameras.getCurrentCamera();
        e === void 0 && (e = new sketchfab.Camera, sketchfab.cameras.add(e));
        e =
            f();
        console.log(e);
        var k = g();
        sketchfab.cameras.getCurrentCamera().setPosition(e);
        sketchfab.cameras.getCurrentCamera().setTarget(k);
        a = document.getElementById("model-urlid").value;
        var e = $("#3DView")[0],
        k = e.width,
        m = e.height;
        $.when(createThumbnail(e.toDataURL(), k, m)).done(function () {
            uploadMeta(a);
            sketchfab.cameras.getCurrentCamera().save(a);
            $('<div class="snapshot-flash"></div>').appendTo($("#view-frame")).fadeOut("slow", function () {
                $(this).remove();
                $(".snapshot-preview").slideDown("normal", function () {
                    $(this).delay(2E3).fadeOut("slow");
                    c.removeClass("snapshot-taking");
                    c.css("visibility", "visible")
                })
            })
        })
    });
    $("#check_wireframe").click(function () {
        $("#check_wireframe").attr("checked") === "checked" ? editSetWireframe(!0) : editSetWireframe(!1)
    });
    var c = [0, 0, 0, 0],
    e = function (a) {
        var e = "#axis" + a;
        $(e).click(function () {
            var f = $(e);
            c[0] = 0;
            c[1] = 0;
            c[2] = 0;
            f.hasClass("rotate0") ? c[a] = 1 : f.hasClass("rotate1") ? c[a] = 2 : f.hasClass("rotate2") && (c[a] = 3);
            a === 3 && (c[0] = c[1] = c[2] = c[3] = 0);
            editSetOrientation(c)
        })
    };
    e(0);
    e(1);
    e(2);
    e(3);
    $("#axis3").addClass("selected");
    $("#save-meta").click(function () {
        var a = $(this),
        c;
        if (!a.hasClass("wait"))
            c = document.getElementById("model-urlid").value, $.when(uploadMeta(c), uploadOptionShading(c), uploadOptionOrientation(c), uploadOptionWireframe(c), uploadOptionSSAO(c), sketchfab.rendering.cubemap.save()).then(function () {
                a.removeClass("wait")
            }).fail(function () {
                a.removeClass("wait")
            }), a.addClass("wait")
    });
    $("#hints div[data-color]").click(function () {
        var a = $(this).data("color");
        setWireframeColor(a.substr(1) + "33");
        editSetWireframe(!0)
    });
    $("#hints div[data-color]").each(function () {
        var a = $(this);
        a.css("background-color", a.data("color"))
    });
    var f = function () {
        var a = Array(3);
        Viewer.getManipulator().getEyePosition(a);
        return a
    },
    g = function () {
        var a = Array(3);
        Viewer.getManipulator().getTarget(a);
        return a
    };
    $("#check_predefinedshading").click(function () {
        var a = $("#check_predefinedshading");
        a.attr("checked") === "checked" && (a = a.val(), editSetShadingType[a]())
    });
    $("#check_shadeless").click(function () {
        var a = $("#check_shadeless");
        a.attr("checked") === "checked" &&
        (a = a.val(), editSetShadingType[a]())
    });
    $("#check_fileshading").click(function () {
        var a = $("#check_fileshading");
        a.attr("checked") === "checked" && (a = a.val(), editSetShadingType[a]())
    });
    $("#hints div[data-shading]").click(function () {
        var a = $(this).data("index");
        editSetPredefinedShadingIndex(parseInt(a));
        editSetPredefinedShading(!0);
        $("#check_predefinedshading").click()
    });
    $("#hints div[data-shading]").each(function () {
        var a = $(this);
        a.css("background-color", a.data("shading"))
    })
}
var editGetOrientation = function () {
    for (var a = [0, 0, 0, 0], c, e = 0; e < 4; e++)
        c = "#axis" + e, c = $(c), c.hasClass("selected") === !0 && (c.hasClass("rotate0") ? a[e] = 1 : c.hasClass("rotate1") ? a[e] = 2 : c.hasClass("rotate2") && (a[e] = 3));
    return a
}, editGetDisableLighting = function () {
    return $("#check_shadeless").attr("checked") === "checked" ? !0 : !1
}, editGetWireframe = function () {
    return $("#check_wireframe").attr("checked") === "checked" ? !0 : !1
}, uploadOptionShading = function (a) {
    var c = $("input:radio[name=shading]:checked").val(),
    e = {};
    e.type =
        c;
    c === "predefined-shading" && (e["shading-index"] = editGetPredefinedShadingIndex());
    return $.post("/v1/models/" + a + "/options/shading", {
        value : JSON.stringify(e)
    })
}, uploadOptionWireframe = function (a) {
    var c = editGetWireframe(),
    e = getWireframeColorString(),
    c = {
        enable : c
    };
    if (e !== void 0)
        c.color = e;
    return $.post("/v1/models/" + a + "/options/wireframe", {
        value : JSON.stringify(c)
    })
}, uploadOptionSSAO = function (a) {
    var c = sketchfab.rendering.ssao.getConfig();
    if (sketchfab.rendering.ssao.hasChanged())
        return $.post("/v1/models/" +
            a + "/options/ssao", {
            value : JSON.stringify(c)
        })
}, uploadOptionOrientation = function (a) {
    var c = editGetOrientation(),
    e = {};
    e.axis = c;
    return $.post("/v1/models/" + a + "/options/orientation", {
        value : JSON.stringify(e)
    })
}, createThumbnail = function (a, c, e) {
    var f = $.Deferred(),
    g = [854, Math.floor(533.75)],
    h = new Image;
    h.onload = function () {
        var a = document.createElement("canvas");
        a.setAttribute("width", g[0]);
        a.setAttribute("height", g[1]);
        var k = 1 / (c / e),
        m = a.getContext("2d"),
        n = 0,
        p = 0,
        s = c,
        q = e;
        k < 0.625 ? (k = q / 0.625, n = (s - k) / 2, s = k) : k > 0.625 &&
        (k = s * 0.625, p = (q - k) / 2, q = k);
        m.fillStyle = "transparent";
        m.fillRect(0, 0, g[0], g[1]);
        m.drawImage(h, n, p, s, q, 0, 0, g[0], g[1]);
        $("#js-snapshot-preview").find(".no-screenshot").remove();
        $("#js-snapshot").find(".snapshot-legend").remove();
        $("#js-snapshot-preview").find("img").remove();
        $("#js-snapshot-preview").find("canvas").remove();
        $("#js-snapshot-preview").append(a);
        f.resolve()
    };
    h.src = a;
    return f.promise()
}, uploadMeta = function (a) {
    var c = window.WebKitBlobBuilder || window.MozBlobBuilder || window.BlobBuilder,
    e = function (a) {
        var e;
        e = a.split(",")[0].indexOf("base64") >= 0 ? atob(a.split(",")[1]) : unescape(a.split(",")[1]);
        for (var a = a.split(",")[0].split(":")[1].split(";")[0], f = new ArrayBuffer(e.length), g = new Uint8Array(f), h = 0; h < e.length; h++)
            g[h] = e.charCodeAt(h);
        e = new c;
        e.append(f);
        return e.getBlob(a)
    },
    f = new FormData,
    g;
    if ((g = $("#js-snapshot-preview").find("canvas")[0]) && g.toDataURL !== void 0)
        g = g.toDataURL(), e = e(g), f.append("image", e);
    f.append("description", document.getElementById("model-desc").value);
    f.append("modelname", document.getElementById("model-name").value);
    f.append("tags", document.getElementById("model-tags").value);
    var e = new XMLHttpRequest,
    h = $.Deferred();
    e.upload.addEventListener("progress", function () {}, !1);
    e.addEventListener("load", function () {
        h.resolve()
    }, !1);
    e.addEventListener("error", function () {
        h.resolve()
    }, !1);
    e.addEventListener("abort", function () {
        h.resolve()
    }, !1);
    e.open("POST", "//" + document.location.host + "/v1/models/" + a + "/meta");
    e.send(f);
    return h.promise()
}, Viewer, userUINotify = function (a) {
    console.log(a)
}, sketchfab = function (a) {
    a.rendering = {};
    a.rendering.findNodeByName = function (a, e) {
        var f = function (a) {
            osg.NodeVisitor.call(this);
            this._result = [];
            this._search = a
        };
        f.prototype = osg.objectInehrit(osg.NodeVisitor.prototype, {
                apply : function (a) {
                    a.getName() === this._search && this._result.push(a);
                    this.traverse(a)
                }
            });
        f = new f(a);
        e.accept(f);
        return f._result
    };
    a.rendering.subGraphRTT = function (a, e) {
        var f,
        g;
        f = a.getWidth();
        g = a.getHeight();
        var h = new osg.Camera;
        h.setName("subGraph2Texture");
        h.setViewport(new osg.Viewport(0, 0, f, g));
        h.setClearColor([0, 0, 0, 0]);
        h.setRenderOrder(osg.Camera.PRE_RENDER,
            0);
        h.attachTexture(osg.FrameBufferObject.COLOR_ATTACHMENT0, a, 0);
        h.attachRenderBuffer(osg.FrameBufferObject.DEPTH_ATTACHMENT, osg.FrameBufferObject.DEPTH_COMPONENT16);
        h.addChild(e);
        return h
    };
    (function () {
        var c = function (a, c) {
            this._options = c;
            if (c === void 0)
                this._options = {
                    radius : 0.01,
                    power : 1,
                    blurPixelDistance : 1.5,
                    angleLimit : 0.001,
                    nbSamples : 16,
                    blurNbSamples : 1,
                    enable : !1,
                    version : 1
                };
            this._hasChanged = !1;
            this._options.enable = a
        };
        c.prototype = {
            enable : function (a) {
                this._options.enable = a;
                a === !0 ? (this._regularScene.setNodeMask(0),
                    this._ssaoScene.setNodeMask(-1), this._options.enable = !0) : (this._regularScene.setNodeMask(-1), this._ssaoScene.setNodeMask(0), this._options.enable = !1);
                this._hasChanged = !0
            },
            setConfig : function (a) {
                this._options = a;
                this.setupScene(this._scene);
                this.setUserInterface()
            },
            setUserInterface : function () {
                if (sketchfab.editor !== void 0 && sketchfab.editor.collapsible !== void 0) {
                    var a = this;
                    sketchfab.editor.collapsible($(".js-edit-ssao"), {
                        enable : a._options.enable,
                        onEnable : function () {
                            a.enable(!0)
                        },
                        onDisable : function () {
                            a.enable(!1)
                        }
                    })
                }
                this.updateRadius(this._options.radius);
                this.updatePower(this._options.power);
                this.updateBlurPixelDistance(this._options.blurPixelDistance);
                this.updateAngleLimit(this._options.angleLimit);
                this.updateNbSamples(this._options.nbSamples);
                this.updateBlurNbSamples(this._options.blurNbSamples);
                this._options.enable ? this.enable(!0) : this.enable(!1)
            },
            hasChanged : function () {
                return this._hasChanged
            },
            getConfig : function () {
                return this._options
            },
            resize : function () {
                this._scene !== void 0 && this.setupScene(this._scene)
            },
            createTexture : function (a, c, g, h) {
                h === void 0 &&
                (h = "NEAREST");
                var i = new osg.Texture;
                i.setTextureSize(a, c);
                i.setInternalFormat(g);
                i.setMinFilter(h);
                i.setMagFilter(h);
                return i
            },
            setupScene : function (a) {
                var c = this._options,
                g = this._root,
                h = this._regularScene,
                i = this._ssaoScene;
                if (g === void 0)
                    this._scene = a, g = new osg.Node, h = new osg.Node, i = new osg.Node, this._root = g, this._regularScene = h, this._ssaoScene = i, g.addChild(h), h.setNodeMask(-1), h.addChild(a), i.setNodeMask(0), g.addChild(i), g.setName("SSAO Node");
                i.removeChildren();
                var k,
                h = window.innerWidth;
                k = window.innerHeight;
                var m = new function () {
                    this._projection = [];
                    this.cull = function (a, c) {
                        this._projection = c.getCurrentProjectionMatrix();
                        return !0
                    }
                },
                n = osg.Uniform.createMat4(osg.Matrix.makeIdentity([]), "projection"),
                p = new osg.BufferArray("ARRAY_BUFFER", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 3),
                s = new function (a, c, e) {
                    this._ucb = a;
                    this._projection = c;
                    this._array = e;
                    this.update = function () {
                        osg.Matrix.copy(this._ucb._projection, this._projection.get());
                        this._projection.dirty();
                        var a = this._array.getElements(),
                        c = [];
                        osg.Matrix.computeFrustrumCornersVectors(this._projection.get(),
                            c);
                        for (var e = 0; e < 4; e++) {
                            var f = c[e];
                            a[e * 3 + 0] = f[0];
                            a[e * 3 + 1] = f[1];
                            a[e * 3 + 2] = f[2]
                        }
                        return !0
                    }
                }
                (m, n, p);
                i.getOrCreateStateSet().addUniform(osg.Uniform.createInt1(0, "Texture0"));
                i.getOrCreateStateSet().addUniform(osg.Uniform.createInt1(1, "Texture1"));
                var q = this,
                w = function (a, c, e, f, g) {
                    c = q.createTexture(c, e, g, "NEAREST");
                    a = sketchfab.rendering.subGraphRTT(c, a);
                    a.getOrCreateStateSet().setAttributeAndModes(f, osg.StateAttribute.OVERRIDE | osg.StateAttribute.ON);
                    a.setName("generateDepth");
                    a.setCullCallback(m);
                    return {
                        texture : c,
                        camera : a
                    }
                },
                y = new osg.BlendFunc("ONE", "ZERO"),
                E;
                (function (c, f) {
                    var g;
                    g = new osg.Program(new osg.Shader(gl.VERTEX_SHADER, "\n#ifdef GL_ES\nprecision highp float;\n#endif\nattribute vec3 Vertex;\nuniform mat4 ModelViewMatrix;\nuniform mat4 ProjectionMatrix;\nvarying float FragDepth;\nvoid main(void) {\n  vec4 pos = ModelViewMatrix * vec4(Vertex,1.0);\n  gl_Position = ProjectionMatrix * pos;\n  FragDepth = pos.z;\n}\n"), new osg.Shader(gl.FRAGMENT_SHADER, "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform mat4 ProjectionMatrix;\nvarying float FragDepth;\nvec4 packFloatTo4x8(in float v) {\nvec4 enc = vec4(1.0, 255.0, 65025.0, 160581375.0) * v;\nenc = fract(enc);\nenc -= enc.yzww * vec4(1.0/255.0,1.0/255.0,1.0/255.0,0.0);\nreturn enc;\n}\n \nvec4 pack2FloatTo4x8(in vec2 val) {\n const vec2 bitSh = vec2(256.0, 1.0);\n const vec2 bitMsk = vec2(0.0, 1.0/256.0);\n vec2 res1 = fract(val.x * bitSh);\n res1 -= res1.xx * bitMsk;\n vec2 res2 = fract(val.y * bitSh);\n res2 -= res2.xx * bitMsk;\n return vec4(res1.x,res1.y,res2.x,res2.y);\n}\n \nfloat unpack4x8ToFloat( vec4 rgba ) {\n return dot( rgba, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/160581375.0) );\n}\n \nvec2 unpack4x8To2Float(in vec4 val) {\n const vec2 unshift = vec2(1.0/256.0, 1.0);\n return vec2(dot(val.xy, unshift), dot(val.zw, unshift));\n}\nvec2 encodeNormal (vec3 n)\n{\n    float f = sqrt(8.0*n.z+8.0);\n    return n.xy / f + 0.5;\n}\nvec3 decodeNormal (vec2 enc)\n{\n    vec2 fenc = enc*4.0-2.0;\n    float f = dot(fenc,fenc);\n    float g = sqrt(1.0-f/4.0);\n    vec3 n;\n    n.xy = fenc*g;\n    n.z = 1.0-f/2.0;\n    return n;\n}\n\nvoid main(void) {\n  float znear = ProjectionMatrix[3][2] / (ProjectionMatrix[2][2]-1.0);\n  float zfar = ProjectionMatrix[3][2] / (ProjectionMatrix[2][2]+1.0);\n  float depth = (-FragDepth - znear)/(zfar-znear);\n  gl_FragColor = packFloatTo4x8(depth);\n}\n"));
                    g = w(a, c, f, g, osg.Texture.RGBA);
                    g.camera.setCullCallback(m);
                    i.addChild(g.camera);
                    g.camera.getOrCreateStateSet().setAttributeAndModes(y, osg.StateAttribute.OVERRIDE);
                    E = g.texture
                })(h, k);
                var G;
                (function (c, f) {
                    var g;
                    g = new osg.Program(new osg.Shader(gl.VERTEX_SHADER, "\n#ifdef GL_ES\nprecision highp float;\n#endif\nattribute vec3 Vertex;\nattribute vec3 Normal;\nuniform mat4 ModelViewMatrix;\nuniform mat4 ProjectionMatrix;\nuniform mat4 NormalMatrix;\nvarying vec3 FragNormal;\nvoid main(void) {\n  vec4 pos = ModelViewMatrix * vec4(Vertex,1.0);\n  gl_Position = ProjectionMatrix * pos;\n  FragNormal = vec3(NormalMatrix * vec4(Normal,0.0));\n}\n"),
                            new osg.Shader(gl.FRAGMENT_SHADER, "\n#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec3 FragNormal;\nvec4 packFloatTo4x8(in float v) {\nvec4 enc = vec4(1.0, 255.0, 65025.0, 160581375.0) * v;\nenc = fract(enc);\nenc -= enc.yzww * vec4(1.0/255.0,1.0/255.0,1.0/255.0,0.0);\nreturn enc;\n}\n \nvec4 pack2FloatTo4x8(in vec2 val) {\n const vec2 bitSh = vec2(256.0, 1.0);\n const vec2 bitMsk = vec2(0.0, 1.0/256.0);\n vec2 res1 = fract(val.x * bitSh);\n res1 -= res1.xx * bitMsk;\n vec2 res2 = fract(val.y * bitSh);\n res2 -= res2.xx * bitMsk;\n return vec4(res1.x,res1.y,res2.x,res2.y);\n}\n \nfloat unpack4x8ToFloat( vec4 rgba ) {\n return dot( rgba, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/160581375.0) );\n}\n \nvec2 unpack4x8To2Float(in vec4 val) {\n const vec2 unshift = vec2(1.0/256.0, 1.0);\n return vec2(dot(val.xy, unshift), dot(val.zw, unshift));\n}\nvec2 encodeNormal (vec3 n)\n{\n    float f = sqrt(8.0*n.z+8.0);\n    return n.xy / f + 0.5;\n}\nvec3 decodeNormal (vec2 enc)\n{\n    vec2 fenc = enc*4.0-2.0;\n    float f = dot(fenc,fenc);\n    float g = sqrt(1.0-f/4.0);\n    vec3 n;\n    n.xy = fenc*g;\n    n.z = 1.0-f/2.0;\n    return n;\n}\n\nvoid main(void) {\n  vec2 normal = encodeNormal(normalize(FragNormal));\n  gl_FragColor = pack2FloatTo4x8(normal);\n}\n"));
                    g = w(a, c, f, g, osg.Texture.RGBA);
                    i.addChild(g.camera);
                    g.camera.getOrCreateStateSet().setAttributeAndModes(y, osg.StateAttribute.OVERRIDE);
                    G = g.texture
                })(h, k);
                var O = new osgUtil.Composer;
                i.addChild(a);
                i.addChild(O);
                var F = new osgUtil.Composer.Filter.SSAO8({
                        normal : G,
                        position : E,
                        radius : 0.1
                    });
                O.getOrCreateStateSet().addUniform(n, osg.StateAttribute.ON | osg.StateAttribute.OVERRIDE);
                F._texCoord1 = p;
                var R = new osgUtil.Composer.Filter.BilateralVBlur({
                        nbSamples : 5,
                        depthTexture : E,
                        radius : 0.1
                    }),
                I = new osgUtil.Composer.Filter.BilateralHBlur({
                        nbSamples : 5,
                        depthTexture : E,
                        radius : 0.1
                    });
                O.addPass(F);
                q.createTexture(h, k, osg.Texture.RGBA, "LINEAR");
                O.addPass(R, q.createTexture(h, k, osg.Texture.RGBA, "LINEAR"));
                O.addPass(I);
                I.getStateSet().setAttributeAndModes(new osg.BlendFunc("ZERO", "SRC_COLOR"));
                O.renderToScreen(window.innerWidth, window.innerHeight);
                O.build();
                this._composer = O;
                var N = Viewer.draw;
                Viewer.draw = function () {
                    s.update();
                    N.call(this)
                };
                (function () {
                    var g = parseFloat((a.getBound().radius() * 0.001).toFixed(5)),
                    h = parseFloat((a.getBound().radius() * 0.05).toFixed(5)),
                    i = (h - g) / 100,
                    k = g + 10 * i,
                    k = c.radius,
                    m = function (a) {
                        c.radius = a;
                        F.setRadius(a);
                        R.setRadius(a);
                        I.setRadius(a)
                    };
                    sketchfab && sketchfab.editor && sketchfab.editor.createSliderOld && sketchfab.editor.createSliderOld(".js-ssao-slider-radius", g, h, i, k, m, !1);
                    q.updateRadius = m;
                    m(k)
                })();
                (function () {
                    var a = 1,
                    a = c.power,
                    e = function (a) {
                        c.power = a;
                        F.setPower(a)
                    };
                    sketchfab && sketchfab.editor && sketchfab.editor.createSliderOld && sketchfab.editor.createSliderOld(".js-ssao-slider-power", 0.1, 16, 0.159, a, e, !1);
                    q.updatePower = e;
                    e(a)
                })();
                (function () {
                    var a =
                        1,
                    a = c.blurPixelDistance,
                    e = function (a) {
                        c.blurPixelDistance = a;
                        R.setPixelSize(a);
                        I.setPixelSize(a)
                    };
                    sketchfab && sketchfab.editor && sketchfab.editor.createSliderOld && sketchfab.editor.createSliderOld(".js-ssao-slider-blur-pixeldistance", 1, 6, 0.5, a, e, !1);
                    q.updateBlurPixelDistance = e;
                    e(a)
                })();
                (function () {
                    var a = 0,
                    a = c.angleLimit,
                    e = function (a) {
                        c.angleLimit = a;
                        F.setAngleLimit(a)
                    };
                    sketchfab && sketchfab.editor && sketchfab.editor.createSliderOld && sketchfab.editor.createSliderOld(".js-ssao-slider-angle-threshold", 0, 1,
                        0.01, a, e, !1);
                    q.updateAngleLimit = e;
                    e(a)
                })();
                (function () {
                    var a = 16,
                    a = c.nbSamples,
                    e = function (a) {
                        c.nbSamples = a;
                        F.setNbSamples(a)
                    };
                    sketchfab && sketchfab.editor && sketchfab.editor.createSliderOld && sketchfab.editor.createSliderOld(".js-ssao-slider-nbsamples", 4, 64, 1, a, e, !1);
                    q.updateNbSamples = e;
                    e(a)
                })();
                (function () {
                    var a = 1,
                    a = c.blurNbSamples,
                    e = function (a) {
                        c.blurNbSamples = a;
                        R.setBlurSize(a);
                        I.setBlurSize(a)
                    };
                    sketchfab && sketchfab.editor && sketchfab.editor.createSliderOld && sketchfab.editor.createSliderOld(".js-ssao-slider-blur-nbsamples",
                        1, 15, 2, a, e, !1);
                    q.updateBlurNbSamples = e;
                    e(a)
                })();
                return g
            }
        };
        a.rendering.ssao = new c(!1);
        $(window).resize(function () {
            a.rendering.ssao.resize.call(a.rendering.ssao)
        })
    })();
    (function () {
        CubeMap = function () {
            this._options = {
                enable : !1,
                current : void 0,
                exposure : 1,
                version : 1
            };
            this._hasChanged = !1;
            this._cubemaps = {};
            this._time = osg.Uniform.createFloat1(-1, "time");
            this._exposure = osg.Uniform.createFloat1(1, "exposure");
            this._cubemapTransform = osg.Uniform.createMatrix4([], "CubemapTransform");
            var a = this;
            this._update = new function () {
                this._currentTexture =
                    this._lastTime = 0;
                this._changeTexture = !1;
                this._queue = [];
                this.update = function (e, f) {
                    var g = f.getFrameStamp().getSimulationTime();
                    if (this._lastTime < 0)
                        this._lastTime = g, a._time.get()[0] = 0;
                    g = Math.min(1, g - this._lastTime);
                    this._currentTexture === 0 && (g = 1 - Math.min(1, g));
                    a._time.get()[0] = g;
                    a._time.dirty();
                    if (this._queue.length > 0) {
                        this._lastTime = -1;
                        var g = (this._currentTexture + 1) % 2,
                        h = this._queue[0];
                        a._scene.getOrCreateStateSet().setTextureAttributeAndModes(g, h);
                        this._queue.splice(0, 1);
                        this._currentTexture = g;
                        this._changeTexture =
                            !1
                    }
                    return !0
                };
                this.changeTexture = function (a) {
                    this._queue.push(a)
                }
            }
        };
        CubeMap.prototype = {
            enable : function (a) {
                this._options.enable = a;
                if (a === !0) {
                    this._scene.setNodeMask(-1);
                    this._options.enable = !0;
                    this._timeout !== void 0 && clearTimeout(this._timeout);
                    if (this._options.current === void 0 || this._cubemaps[this._options.current] === void 0)
                        this._options.current = Object.keys(this._cubemaps)[0];
                    this.setTexture(this._options.current)
                } else {
                    var e = this;
                    this._options.enable = !1;
                    this.setTexture(void 0);
                    this._timeout = setTimeout(function () {
                            e._scene.setNodeMask(0);
                            e._timeout = void 0
                        }, 1050)
                }
                this._exposure.get()[0] = this._options.exposure;
                this._exposure.dirty();
                this._hasChanged = !0
            },
            loadCubemapList : function (a) {
                var e = $.Deferred(),
                f = this,
                g = sketchfab.rendering.viewer.getGraphicContext(),
                g = g.getParameter(g.MAX_CUBE_MAP_TEXTURE_SIZE);
                $.getJSON("/v1/models/" + a + "/cubemaps/" + g).done(function (a) {
                    f._cubemaps = JSON.parse(a.result);
                    e.resolve()
                });
                return e.promise()
            },
            setUserInterface : function () {
                var a = $(".js-edit-cubemap-list");
                a.empty();
                var e = this;
                Object.keys(this._cubemaps).forEach(function (f) {
                    e._options.current ===
                    f ? a.append("<option selected='selected'>" + f + "</option>") : a.append("<option>" + f + "</option>")
                });
                a.change(function () {
                    $(".js-edit-cubemap-list option:selected").each(function () {
                        var a = $(this).text();
                        e._options.current = a;
                        e._options.enable && e.setTexture(a)
                    })
                });
                sketchfab.editor !== void 0 && sketchfab.editor.collapsible !== void 0 && sketchfab.editor.collapsible($(".js-edit-cubemap"), {
                    enable : this._options.enable,
                    onEnable : function () {
                        e.enable(!0)
                    },
                    onDisable : function () {
                        e.enable(!1)
                    }
                });
                if ($(".js-bind-edit-cubemap").length >
                    0) {
                    var f = function (a) {
                        a /= 128;
                        return a * a * a * a * 64
                    },
                    g = function (a) {
                        if (g.inv === void 0) {
                            for (var c = {}, e = 0; e < 128; e++)
                                c[f(e)] = e;
                            g.inv = c
                        }
                        return g.inv[a]
                    },
                    h = function (a) {
                        a = f(a);
                        e._options.exposure = a;
                        e._exposure.get()[0] = a;
                        e._exposure.dirty();
                        return parseFloat(a.toFixed(5))
                    },
                    i = Math.floor(g(this._options.exposure));
                    isNaN(i) && (i = 30);
                    sketchfab && sketchfab.editor && sketchfab.editor.createSlider && sketchfab.editor.createSlider(".js-cubemap-slider-exposure", 0, 127, 1, i, h, !1)
                }
            },
            setConfig : function (a) {
                this._options = a;
                this.setUserInterface();
                this.enable(a.enable)
            },
            hasChanged : function () {
                return this._hasChanged
            },
            getConfig : function () {
                return this._options
            },
            _addTexture : function (a) {
                this._update.changeTexture(a)
            },
            getOrCreateDefaultCubemap : function () {
                if (this._defaultCubemap !== void 0)
                    return this._defaultCubemap;
                var a = document.createElement("canvas");
                a.width = 1;
                a.height = 1;
                var e = a.getContext("2d"),
                f = e.createImageData(1, 1);
                f.data[0] = 0;
                f.data[1] = 0;
                f.data[2] = 0;
                f.data[3] = 0;
                e.putImageData(f, 0, 0);
                e = new osg.TextureCubeMap;
                e.setImage("TEXTURE_CUBE_MAP_POSITIVE_X",
                    a);
                e.setImage("TEXTURE_CUBE_MAP_NEGATIVE_X", a);
                e.setImage("TEXTURE_CUBE_MAP_POSITIVE_Y", a);
                e.setImage("TEXTURE_CUBE_MAP_NEGATIVE_Y", a);
                e.setImage("TEXTURE_CUBE_MAP_POSITIVE_Z", a);
                e.setImage("TEXTURE_CUBE_MAP_NEGATIVE_Z", a);
                e.setMinFilter("NEAREST");
                e.setMagFilter("NEAREST");
                return this._defaultCubemap = e
            },
            setTexture : function (a) {
                if (this._cubemaps[a] === void 0)
                    this._addTexture(this.getOrCreateDefaultCubemap());
                else if (this._cubemaps[a].cache !== void 0)
                    this._addTexture(this._cubemaps[a].cache), a = new osg.BlenderTextureMaterial(this._cubemaps[a].cache,
                            "MirrorCubemap"), getOrCreateRootNode().getOrCreateStateSet().setTextureAttributeAndModes(7, a);
                else {
                    sketchfab.loadingIndicator.get().start();
                    var e = this._cubemaps[a],
                    a = "",
                    f = sketchfab.rendering.viewer.getGraphicContext();
                    f.getParameter(f.MAX_CUBE_MAP_TEXTURE_SIZE) < e.size && (a = f.getParameter(f.MAX_CUBE_MAP_TEXTURE_SIZE));
                    var f = function (a, c) {
                        if (c.length === 0)
                            return a;
                        var e = a.split("/"),
                        f = e.pop();
                        e.push(c + "_" + f);
                        return e.join("/")
                    },
                    g = this;
                    osgDB.Promise.all([osgDB.readImage(f(e.posx, a)), osgDB.readImage(f(e.negx,
                                    a)), osgDB.readImage(f(e.posy, a)), osgDB.readImage(f(e.negy, a)), osgDB.readImage(f(e.posz, a)), osgDB.readImage(f(e.negz, a))]).then(function (a) {
                        sketchfab.loadingIndicator.get().stop();
                        var c = new osg.TextureCubeMap;
                        c.setImage("TEXTURE_CUBE_MAP_POSITIVE_X", a[0]);
                        c.setImage("TEXTURE_CUBE_MAP_NEGATIVE_X", a[1]);
                        c.setImage("TEXTURE_CUBE_MAP_POSITIVE_Y", a[3]);
                        c.setImage("TEXTURE_CUBE_MAP_NEGATIVE_Y", a[2]);
                        c.setImage("TEXTURE_CUBE_MAP_POSITIVE_Z", a[4]);
                        c.setImage("TEXTURE_CUBE_MAP_NEGATIVE_Z", a[5]);
                        c.setMinFilter("LINEAR_MIPMAP_LINEAR");
                        e.cache = c;
                        g._addTexture(c);
                        a = new osg.BlenderTextureMaterial(c, "MirrorCubemap");
                        a.getChannels().MirrorCubemap.setFactor(1);
                        a.setBlendMode("MIX");
                        getOrCreateRootNode().getOrCreateStateSet().setTextureAttributeAndModes(7, a)
                    })
                }
            },
            save : function () {
                var a = document.getElementById("model-urlid").value;
                if (this.hasChanged())
                    return $.post("/v1/models/" + a + "/options/cubemap", {
                        value : JSON.stringify(this.getConfig())
                    })
            },
            setupScene : function (a) {
                var e = osg.createTexturedBoxGeometry(0, 0, 0, 50, 50, 50);
                e.getOrCreateStateSet().setAttributeAndModes(new osg.Program(new osg.Shader(gl.VERTEX_SHADER,
                            "\n#ifdef GL_ES\nprecision highp float;\n#endif\nattribute vec3 Vertex;\nattribute vec3 Normal;\nattribute vec2 TexCoord0;\nuniform mat4 ModelViewMatrix;\nuniform mat4 ProjectionMatrix;\nvarying vec3 osg_FragVertex;\nvoid main(void) {\n  osg_FragVertex = Vertex;\n  gl_Position = ProjectionMatrix * ModelViewMatrix * vec4(Vertex,1.0);\n}"), new osg.Shader(gl.FRAGMENT_SHADER, "\n#ifdef GL_ES\nprecision highp float;\n#endif\nuniform samplerCube Texture0;\nuniform samplerCube Texture1;\nuniform float time;\nuniform float exposure;\nvarying vec3 osg_FragVertex;\nfloat srgb_to_linearrgb1(const in float c)\n{\n  float v = 0.0;\n  if(c < 0.04045) {\n       if (c >= 0.0)\n       v = c * (1.0/12.92);\n  } else {\n       v = pow((c + 0.055)*(1.0/1.055), 2.4);\n  }\n return v;\n}\nvec4 srgb2linearrgb_vec4(const in vec4 col_from)\n{\n  vec4 col_to;\n  col_to.r = srgb_to_linearrgb1(col_from.r);\n  col_to.g = srgb_to_linearrgb1(col_from.g);\n  col_to.b = srgb_to_linearrgb1(col_from.b);\n  col_to.a = col_from.a;\n  return col_to;\n}\nvec3 srgb2linearrgb_vec3(const in vec3 col_from)\n{\n  vec3 col_to;\n  col_to.r = srgb_to_linearrgb1(col_from.r);\n  col_to.g = srgb_to_linearrgb1(col_from.g);\n  col_to.b = srgb_to_linearrgb1(col_from.b);\n  return col_to;\n}\nfloat linearrgb_to_srgb1(const in float c)\n{\n  float v = 0.0;\n  if(c < 0.0031308) {\n       if (c >= 1.0)\n       v = c * 12.92;\n  } else {\n       v = (1.055 * (pow(c, (1.0/2.4)))) - 0.055;\n  }\n return v;\n}\nvec4 linearrgb2srgb_vec4(const in vec4 col_from)\n{\n  vec4 col_to;\n  col_to.r = linearrgb_to_srgb1(col_from.r);\n  col_to.g = linearrgb_to_srgb1(col_from.g);\n  col_to.b = linearrgb_to_srgb1(col_from.b);\n  col_to.a = col_from.a;\n  return col_to;\n}\nvec3 linearrgb2srgb_vec3(const in vec3 col_from)\n{\n  vec3 col_to;\n  col_to.r = linearrgb_to_srgb1(col_from.r);\n  col_to.g = linearrgb_to_srgb1(col_from.g);\n  col_to.b = linearrgb_to_srgb1(col_from.b);\n  return col_to;\n}\nvoid main(void) {\n  vec3 eye = normalize(-osg_FragVertex);\n  vec4 lin0 = srgb2linearrgb_vec4(textureCube(Texture0, eye));\n  vec4 lin1 = srgb2linearrgb_vec4(textureCube(Texture1, eye));\n  vec4 result = mix(lin0, lin1, min(time,1.0));\n  result = result*vec4(exposure,exposure,exposure,1.0);\n  gl_FragColor = linearrgb2srgb_vec4(result);\n}\n")));
                e.getOrCreateStateSet().addUniform(osg.Uniform.createInt1(0, "Texture0"));
                e.getOrCreateStateSet().addUniform(osg.Uniform.createInt1(1, "Texture1"));
                e.getOrCreateStateSet().addUniform(osg.Uniform.createInt1(7, "Texture7"));
                e.getOrCreateStateSet().addUniform(this._exposure);
                e.getOrCreateStateSet().addUniform(this._time);
                var f = new osg.MatrixTransform;
                f.addUpdateCallback(this._update);
                f.setMatrix(osg.Matrix.makeRotate(-Math.PI / 2, 1, 0, 0, []));
                f.addChild(e);
                this._scene = f;
                this._scene.setNodeMask(0);
                var g = this;
                this._scene.getOrCreateStateSet().setTextureAttributeAndModes(0, this.getOrCreateDefaultCubemap());
                this._scene.getOrCreateStateSet().setTextureAttributeAndModes(1, this.getOrCreateDefaultCubemap());
                this._scene.getOrCreateStateSet().setAttributeAndModes(new osg.Depth("DISABLE"));
                this._scene.setCullCallback(new function () {
                    this.cull = function (a, c) {
                        osg.Matrix.setTrans(c.getCurrentModelviewMatrix(), 0, 0, 0);
                        var e = c.getCurrentModelviewMatrix();
                        osg.Matrix.copy(e, g._cubemapTransform.get());
                        g._cubemapTransform.dirty();
                        return !0
                    }
                });
                a.addChild(this._scene)
            }
        };
        a.rendering.cubemap = new CubeMap
    })();
    a.loadingIndicator = {
        _element : null,
        _progressElement : null,
        _nbRequests : 0,
        _progessPercentage : 0,
        _timeoutId : null,
        get : function () {
            if (null === this._element)
                this._element = $("#js-loading-indicator"), this._progressElement = this._element.find("span");
            return this
        },
        start : function () {
            this._nbRequests++;
            this._show()
        },
        stop : function () {
            this._nbRequests--;
            var a = this;
            this._timeoutId = setTimeout(function () {
                    a._hide()
                }, 800)
        },
        setProgress : function (a) {
            this._progessPercentage =
                a;
            null === this._progessPercentage ? this._progressElement.html("") : this._progressElement.html(this._progessPercentage + "%")
        },
        _show : function () {
            null !== this._timeoutId && clearTimeout(this._timeoutId);
            this._element.addClass("loading")
        },
        _hide : function () {
            if (this._nbRequests <= 0)
                this._nbRequests = 0, this.setProgress(null), this._element.removeClass("loading")
        }
    };
    a.Camera = function (a) {
        this._options = a;
        if (a === void 0)
            this._options = {};
        this.getPosition = function () {
            return this._options.position
        };
        this.setPosition = function (a) {
            this._options.position =
                a
        };
        this.getTarget = function () {
            return this._options.target
        };
        this.setTarget = function (a) {
            this._options.target = a
        };
        this.isValid = function () {
            return this.isValidVector(this.getTarget()) && this.isValidVector(this.getPosition())
        };
        this.isValidVector = function (a) {
            return a !== void 0 && Object.prototype.toString.call(a) === "[object Array]" && a.length === 3 && a[0] !== null && a[1] !== null && a[2] !== null
        };
        this.save = function (a) {
            if (this._options.target !== void 0 && this._options.position !== void 0)
                return $.post("/v1/models/" + a + "/options/camera", {
                    value : JSON.stringify({
                        target : this._options.target,
                        position : this._options.position
                    })
                })
        }
    };
    a.cameras = {
        list : [],
        add : function (a) {
            this.list.push(a)
        },
        getCurrentCamera : function () {
            if (this.list.length > 0)
                return this.list[0];
            else
                osg.log("No camera defined for the model")
        }
    };
    return a
}
(sketchfab || {});
function getUrlVars() {
    for (var a = [], c, e = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), f = 0; f < e.length; f++)
        c = e[f].split("="), a.push(c[0]), a[c[0]] = c[1];
    return a
}
function getModelID() {
    var a = window.location.pathname.split("/"),
    a = a[a.length - 1];
    return a.length === 0 ? void 0 : a
}
var editSetDisableLightingOld = function (a) {
    var c = $("#check_lighting");
    c.length && a && c.attr("checked", !0);
    c = editSetDisableLighting.material;
    if (c === void 0)
        c = new osg.Material, editSetDisableLighting.material = c;
    a === !0 ? (c.setEmission([1, 1, 1, 1]), c.setAmbient([0, 0, 0, 0]), c.setDiffuse([0, 0, 0, 0]), c.setSpecular([0, 0, 0, 0]), getOrCreateRootNode().getOrCreateStateSet().setAttributeAndMode(c, osg.StateAttribute.ON | osg.StateAttribute.OVERRIDE)) : (c = new osg.Material, getOrCreateRootNode().getOrCreateStateSet().setAttributeAndMode(c,
            osg.StateAttribute.OFF))
};
editSetDisableLighting = editSetDisableLightingOld;
var BlenderVisitorResult, editSetDisableLightingBlender = function (a) {
    var c = $("#check_lighting");
    c.length && a && c.attr("checked", !0);
    for (var c = 0, e = BlenderVisitorResult.getMaterials().length; c < e; c++) {
        var f = BlenderVisitorResult.getMaterials()[c];
        if (f !== void 0) {
            if (f.backupShadeless === void 0)
                f.backupShadeless = f.getShadeless();
            a === !0 ? f.setShadeless(!0) : f.setShadeless(f.backupShadeless)
        }
    }
}, editSetPredefinedShadingIndex = function (a) {
    if (a !== editSetPredefinedShading.selected)
        editSetPredefinedShading.selected = a
},
editGetPredefinedShadingIndex = function () {
    return editSetPredefinedShading.selected === void 0 ? 0 : editSetPredefinedShading.selected
}, editSetShadingType = {
    "no-shading" : function () {
        editSetPredefinedShading(!1);
        editSetDisableLighting(!0)
    },
    "predefined-shading" : function () {
        editSetDisableLighting(!1);
        editSetPredefinedShading(!0)
    },
    "default-shading" : function () {
        editSetDisableLighting(!1);
        editSetPredefinedShading(!1)
    }
}, editSetPredefinedShading = function (a) {
    var c = editSetPredefinedShading;
    if (c.selected === void 0)
        c.selected =
            0;
    var e = $("#check_predefinedshading");
    e.length && a && e.attr("checked", !0);
    var f = c.lightsourceNodes;
    if (f === void 0)
        e = new osgExtra.FindLightVisitor, getOrCreateRootNode().getModelNode().accept(e), f = e._lightsourceNodes, c.lightsourceNodes = f;
    e = c.textureUnitUsed;
    if (e === void 0)
        e = new osgExtra.TextureUnitVisitor, getOrCreateRootNode().getModelNode().accept(e), e = Object.keys(e._map), c.textureUnitUsed = e;
    if (c.disableAllLights === void 0) {
        for (var e = 0, g = f.length; e < g; e++)
            f[e]._backupLight = f[e].getLight();
        c.disableAllLights =
        function () {
            for (var a = 0, c = f.length; a < c; a++) {
                if (f[a]._noLight === void 0)
                    f[a]._noLight = new osg.Light, f[a]._noLight.setAmbient([0, 0, 0, 0]), f[a]._noLight.setDiffuse([0, 0, 0, 0]), f[a]._noLight.setSpecular([0, 0, 0, 0]), f[a].getLight() !== void 0 && f[a]._noLight.setLightNumber(f[a].getLight().getLightNumber());
                f[a]._backupLight = f[a].getLight();
                f[a].getLight() && (f[a].getLight().getLightNumber() === 0 ? f[a].setLight(void 0) : f[a].setLight(f[a]._noLight))
            }
        }
    }
    if (c.disableAllTextures === void 0) {
        e = new Image;
        e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2P8DwQACgAD/il4QJ8AAAAASUVORK5CYII=";
        var h = new osg.Texture;
        h.setImage(e);
        c.defaultTexture = h;
        c.disableAllTextures = function () {
            for (var a = 0, e = c.textureUnitUsed.length; a < e; a++)
                getOrCreateRootNode().getOrCreateStateSet().setTextureAttributeAndMode(c.textureUnitUsed[a], h, osg.StateAttribute.ON | osg.StateAttribute.OVERRIDE)
        }
    }
    e = c.materials;
    if (e === void 0) {
        e = [];
        c.materials = e;
        var i = function () {
            if (i.material === void 0) {
                var a = new osg.Material;
                a.setAmbient([0, 0, 0, 1]);
                a.setDiffuse([0.792, 0.8 * 0.8, 0.7 * 0.8, 1]);
                a.setSpecular([0.2, 0.1826, 0.1656, 1]);
                a.setShininess(35);
                i.material = a
            }
            a = i.material;
            getOrCreateRootNode().getOrCreateStateSet().setAttributeAndMode(a, osg.StateAttribute.ON | osg.StateAttribute.OVERRIDE);
            c.disableAllLights();
            c.disableAllTextures()
        };
        e.push(i);
        var k = function () {
            if (k.material === void 0) {
                var a = new osg.Material;
                a.setAmbient([0, 0, 0, 1]);
                a.setDiffuse([0.21, 0.8 * 0.35, 0.35, 1]);
                a.setSpecular([0.6, 0.6, 0.6, 1]);
                a.setShininess(16);
                k.material = a
            }
            a = k.material;
            getOrCreateRootNode().getOrCreateStateSet().setAttributeAndMode(a, osg.StateAttribute.ON | osg.StateAttribute.OVERRIDE);
            c.disableAllLights();
            c.disableAllTextures()
        };
        e.push(k);
        var m = function () {
            if (m.material === void 0) {
                var a = new osg.Material;
                a.setAmbient([0, 0, 0, 1]);
                a.setDiffuse([0.68, 0.219 * 0.28, 0.253 * 0.28, 1]);
                a.setSpecular([0.31, 0.279, 0.248, 1]);
                a.setShininess(16);
                m.material = a
            }
            a = m.material;
            getOrCreateRootNode().getOrCreateStateSet().setAttributeAndMode(a, osg.StateAttribute.ON | osg.StateAttribute.OVERRIDE);
            c.disableAllLights();
            c.disableAllTextures()
        };
        e.push(m)
    }
    if (a === !0) {
        a = 0;
        if (c.selected >= 0 && c.selected < e.length)
            a = c.selected;
        e[a]()
    } else {
        getOrCreateRootNode().getOrCreateStateSet().setAttributeAndMode(new osg.Material, osg.StateAttribute.OFF);
        a = 0;
        for (e = f.length; a < e; a++)
            f[a].setLight(f[a]._backupLight);
        var n = getOrCreateRootNode();
        (function () {
            for (var a = 0, e = c.textureUnitUsed.length; a < e; a++)
                n.getOrCreateStateSet().setTextureAttributeAndMode(c.textureUnitUsed[a], c.defaultTexture, osg.StateAttribute.OFF)
        })()
    }
}, validVectorNumber = function (a) {
    for (var c = 0; c < 3; c++)
        if (a[c] === null || a[c] === void 0 || isNaN(a[c]) === !0)
            return !1;
    return !0
}, editSetCameraTarget =
function (a) {
    validVectorNumber(a) === !1 ? osg.log("editSetCameraTarget position " + a[0] + " " + a[1] + " " + a[2] + " not valid") : Viewer.getManipulator().setTarget(a)
}, editSetCameraPosition = function (a) {
    validVectorNumber(a) === !1 ? osg.log("editSetCameraTarget position " + a[0] + " " + a[1] + " " + a[2] + " not valid") : Viewer.getManipulator().setEyePosition(a)
}, editToogleNavigation = function () {
    var a = Viewer.getManipulator(),
    c = a.getCurrentManipulator(),
    e = a.orbit.getDistance(),
    f = a.getNumManipulator(),
    g = a.getCurrentManipulatorIndex();
    a.setManipulatorIndex((g + 1) % f);
    var f = a.getCurrentManipulator(),
    g = Array(3),
    h = Array(3);
    c.getEyePosition(h);
    c.getTarget(g);
    f.type === "OrbitManipulator" ? (f.setTarget(g), f.setEyePosition(h)) : (f.setEyePosition(h), f.setTarget(g));
    a.getCurrentManipulator().setDistance(e)
}, editSetWireframe = function (a) {
    var c = $("#check_wireframe");
    if (c.length) {
        var e = "checked";
        a || (e = !1);
        c.attr("checked", e)
    }
    c = getOrCreateWireframeNode();
    if (a === !0) {
        if (c.activateWireframe !== void 0)
            c.activateWireframe(), c.activateWireframe = void 0;
        c.setNodeMask(-1)
    } else
        c.setNodeMask(0)
}, editSetOrientation = function (a) {
    for (var c = 0; c < 4; c++) {
        var e = $("#axis" + c);
        if (!e.length)
            break;
        a[c] > 0 ? e.hasClass("selected") === !1 && (e.addClass("selected"), a[c] === 1 ? e.addClass("rotate0") : a[c] === 2 ? e.addClass("rotate1") : a[c] === 3 && e.addClass("rotate2")) : e.removeClass("selected")
    }
    getOrCreateOrientationNode(a)
}, getWireframeDefaultColor = function () {
    return "88888833"
}, getWireframeColorString = function () {
    return getOrCreateWireframeNode().color_str
}, setWireframeColor = function (a) {
    var c =
    function (a) {
        if (a.length !== 8)
            return [1, 0, 1, 1];
        var c = parseInt(a.substr(0, 2), 16) / 255,
        g = parseInt(a.substr(2, 2), 16) / 255,
        h = parseInt(a.substr(4, 2), 16) / 255,
        a = parseInt(a.substr(6, 2), 16) / 255,
        c = [c * a, g * a, h * a, a];
        osg.log("wireframe color " + c);
        return c
    }
    (a);
    getOrCreateWireframeNode().color_str = a;
    getOrCreateWireframeNode().color.set(c);
    getOrCreateWireframeNode().color.dirty()
}, getOrCreateRootNode = function () {
    var a = getOrCreateRootNode.nodeCache;
    if (a === void 0)
        a = new osg.Node, a.setName("root"), getOrCreateRootNode.nodeCache =
            a;
    return a
}, getOrCreateAutoRotationNode = function () {
    var a = getOrCreateAutoRotationNode.nodeCache;
    if (a === void 0)
        a = new osg.MatrixTransform, a.setName("autoRotationNode"), getOrCreateAutoRotationNode.nodeCache = a;
    return a
}, getOrCreateOrientationNode = function (a) {
    var c = getOrCreateOrientationNode.nodeCache;
    if (c === void 0)
        c = new osg.MatrixTransform, c.setName("OrientationNode"), getOrCreateOrientationNode.nodeCache = c;
    if (a !== void 0) {
        osg.log(a);
        var e = c.getMatrix();
        osg.Matrix.makeRotate(Math.PI / 2 * (a[0] + a[1] + a[2]), a[0],
            a[1], a[2], e);
        c.dirtyBound();
        Viewer.getManipulator().getCurrentManipulator().computeHomePosition()
    }
    return c
}, getOrCreateWireframeNode = function () {
    var a = getOrCreateWireframeNode;
    if (a.cache === void 0) {
        a.cache = new osg.Node;
        a.cache.setName("WireFrame");
        a.cache.setNodeMask(0);
        a.cache.getOrCreateStateSet().setAttributeAndMode(new osg.Depth("LEQUAL"));
        a.cache.getOrCreateStateSet().setAttributeAndMode(new osg.BlendFunc("ONE", "ONE_MINUS_SRC_ALPHA"));
        a.cache.color = osg.Uniform.createFloat4([1, 0, 1, 1], "Color");
        var c =
            new osg.Program(new osg.Shader(gl.VERTEX_SHADER, "#ifdef GL_ES\nprecision highp float;\n#endif\nattribute vec3 Vertex;\nuniform mat4 ModelViewMatrix;\nuniform mat4 ProjectionMatrix;\n\nvoid main(void) {\n  vec4 view = ModelViewMatrix * vec4(Vertex, 1.0);\n  view[3] += 0.001;\ngl_Position = ProjectionMatrix * view;\n}"), new osg.Shader(gl.FRAGMENT_SHADER, "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform vec4 Color;\nvoid main(void) {\ngl_FragColor = Color;\n}"));
        a.cache.getOrCreateStateSet().setAttributeAndMode(c);
        a.cache.getOrCreateStateSet().addUniform(a.cache.color)
    }
    return a.cache
}, UpdateCallbackSpinner = function () {
    this._rotation = this._direction = 0;
    this._toggleSpin = 1
};
UpdateCallbackSpinner.prototype = {
    setDirection : function (a) {
        this._direction = -a
    },
    toggleSpin : function (a) {
        this._toggleSpin = a == "start" ? 1 : 0
    },
    update : function (a, c) {
        var e = c.getFrameStamp().getSimulationTime();
        if (this._lastTime === void 0)
            this._lastTime = e;
        var f = e - this._lastTime;
        this._toggleSpin === 1 && (this._rotation += f);
        this._lastTime = e;
        if (this._rotation < 1)
            this._rotation = osgAnimation.easeOutQuart(this._rotation);
        a.setMatrix(osg.Matrix.makeRotate(this._rotation * this._direction * 0.6, 0, 0, 1, []));
        return !0
    }
};
var getOrCreateSpinner = function () {
    var a = getOrCreateSpinner.cache;
    if (a === void 0)
        a = new UpdateCallbackSpinner, getOrCreateSpinner.cache = a;
    return a
}, toggleAutospin = function (a) {
    var c = getOrCreateSpinner();
    c.toggleSpin(a);
    getOrCreateAutoRotationNode().setUpdateCallback(c)
}, getModelNode = void 0;
function main(a, c) {
    a === void 0 && (a = getModelID(), a === void 0 && (a = 0));
    getUrlVars();
    var e,
    f;
    f = window.innerHeight;
    e = window.innerWidth;
    $("body").css("overflow", "hidden");
    $("body").css("margin", 0);
    $("body").css("padding", 0);
    var g = document.getElementById("3DView");
    $(g).attr("tabindex", "0").mousedown(function () {
        $(this).focus();
        return !1
    });
    g.width = e;
    g.height = f;
    element = document.getElementById("View");
    element.style.width = e;
    element.style.height = f;
    element.style.margin = "0";
    element.style.padding = "0";
    osgGA.OrbitManipulator.prototype.computeHomePosition =
    function () {
        if (this._node !== void 0) {
            this._rotation = osg.Matrix.makeRotate(Math.PI, 0, 0, 1, []);
            var a = this._node.getBound();
            this.setDistance(a.radius() * 1.5);
            this.setTarget(a.center())
        }
    };
    var h = new osgViewer.Viewer(g, {
            antialias : !0,
            preserveDrawingBuffer : !0,
            keyboardEventNode : g
        });
    Viewer = sketchfab.rendering.viewer = h;
    var i = !1,
    k = function (a) {
        i = !0;
        var c = new XMLHttpRequest,
        e = $.Deferred(),
        f = function () {
            e.reject()
        };
        c.addEventListener("progress", function () {}, !1);
        c.addEventListener("load", function () {
            if (c.status !== 200)
                f();
            else {
                var g = getOrCreateWireframeNode();
                osg.log("loaded " + a.url);
                g.activateWireframe = function () {
                    var a = JSON.parse(c.responseText),
                    a = osgDB.parseSceneGraph(a);
                    osgDB.Promise.when(a).then(function (a) {
                        var c = new osgExtra.FindLightVisitor;
                        a.accept(c);
                        for (var e = 0, f = c._lightsourceNodes.length; e < f; e++)
                            c._lightsourceNodes[e].setLight(void 0);
                        g.addChild(a)
                    })
                };
                e.resolve()
            }
        }, !1);
        c.addEventListener("error", f, !1);
        c.open("GET", a.url, !0);
        c.send(null);
        return e.promise()
    },
    m = function (a) {
        var c = new XMLHttpRequest,
        e = a.sizeUncompress,
        f = 0,
        g = {},
        i = function (a) {
            if (e !== void 0 && e > 0) {
                if (this.xhr_id === void 0)
                    this.xhr_id = Object.keys(g).length;
                g[this.xhr_id] = a.loaded;
                var c = 0;
                Object.keys(g).forEach(function (a) {
                    c += g[a]
                });
                f += a.loaded;
                a = 100 * c / e;
                $("#progress").html(a.toFixed() + "%");
                sketchfab.loadingIndicator.get().setProgress(a.toFixed())
            }
        },
        k = $.Deferred(),
        m = function () {
            sketchfab.loadingIndicator.get().stop();
            k.reject()
        };
        c.addEventListener("progress", i, !1);
        c.addEventListener("load", function () {
            if (c.status !== 200)
                m();
            else {
                var e = JSON.parse(c.responseText);
                osg.log("loaded " + a.url);
                var f = {},
                g = osgDB.Input.prototype.readImageURL,
                q = osgDB.Input.prototype.readBinaryArrayURL;
                osgDB.Input.prototype.readBinaryArrayURL = function (c) {
                    c = a.urlBase + "/" + c;
                    if (f[c] !== void 0)
                        return f[c];
                    var e = osgDB.Promise.defer();
                    osgDB.Promise.when(q.call(this, c)).then(function (a) {
                        f[c] = a;
                        e.resolve(a)
                    });
                    return e.promise
                };
                osgDB.Input.prototype.readImageURL = function (c) {
                    c = a.urlBase + "/" + c;
                    if (f[c] !== void 0)
                        return f[c];
                    var e = g.call(this, c).valueOf();
                    return f[c] = e
                };
                e = osgDB.parseSceneGraph(e, {
                        progressXHRCallback : i
                    });
                osgDB.Promise.when(e).then(function (a) {
                    var c = new osgExtra.TextureUnifierVisitor;
                    a.accept(c);
                    c = new osgExtra.ProcessInputFormatVisitor;
                    a.accept(c);
                    c = new osg.BlenderNodeVisitor;
                    a.accept(c);
                    c = new osgExtra.FindBlenderAttributeVisitor;
                    a.accept(c);
                    BlenderVisitorResult = c;
                    if (c.hasComponent()) {
                        if (editSetDisableLighting = editSetDisableLightingBlender, c.getLights().length === 0) {
                            var c = Viewer.getCamera(),
                            e = new osg.BlenderLight;
                            e.setLightType("SUN");
                            e.setPosition(osg.Vec3.normalize([1, 0, -1], []));
                            var f = 0.6;
                            e.setColor([1 *
                                    f, 0.8 * f, 0.5 * f]);
                            c.getOrCreateStateSet().setAttributeAndMode(e);
                            e = new osg.BlenderLight(1);
                            e.setLightType("SUN");
                            e.setPosition(osg.Vec3.normalize([-1, 0, -1], []));
                            f = 0.6;
                            e.setColor([0.7 * f, 0.7 * f, 1 * f]);
                            c.getOrCreateStateSet().setAttributeAndMode(e)
                        }
                    } else
                        c = new osgExtra.FindLightVisitor, a.accept(c), c.getLights().length === 0 && (c = Viewer.getCamera(), e = new osg.Light, f = osg.Vec3.normalize([1, 0, 1], []), f[3] = 0, e.setPosition(f), f = 0.6, e.setDiffuse([1 * f, 0.8 * f, 0.5 * f, 1]), c.getOrCreateStateSet().setAttributeAndMode(e), e =
                                new osg.Light(1), f = osg.Vec3.normalize([-1, 0, 1], []), f[3] = 0, e.setPosition(f), f = 0.6, e.setDiffuse([0.7 * f, 0.7 * f, 1 * f, 1]), c.getOrCreateStateSet().setAttributeAndMode(e));
                    c = getOrCreateRootNode();
                    sketchfab.rendering.cubemap.setupScene(c);
                    var g = getOrCreateAutoRotationNode(),
                    e = getOrCreateOrientationNode(),
                    f = getOrCreateWireframeNode();
                    c.addChild(g);
                    g.addChild(e);
                    g = sketchfab.rendering.ssao.setupScene(a);
                    e.addChild(g);
                    sketchfab.rendering.ssao.setUserInterface();
                    e.addChild(f);
                    c.getOrCreateStateSet().setAttributeAndMode(new osg.CullFace("DISABLE"));
                    c.getModelNode = function () {
                        return a
                    };
                    h.setSceneData(getOrCreateRootNode());
                    h.getManipulator().setNode(e);
                    h.getManipulator().computeHomePosition();
                    k.resolve()
                })
            }
        }, !1);
        c.addEventListener("error", m, !1);
        sketchfab.loadingIndicator.get().start();
        c.open("GET", a.url, !0);
        c.send(null);
        return k.promise()
    };
    h.init();
    osg.setNotifyLevel(osg.INFO);
    e = new osgExtra.SwitchManipulator;
    f = new osgGA.OrbitManipulator;
    f.type = "OrbitManipulator";
    g = new osgExtra.FirstPersonManipulator;
    g.type = "FirstPersonManipulator";
    e.orbit = f;
    e.fps = g;
    g._lookPosition._delay = 0.25;
    e.addManipulator(f);
    e.addManipulator(g);
    h.setupManipulator(e);
    h.getCamera().setClearColor([0, 0, 0, 0]);
    h.run();
    showViewer();
    (function (a) {
        a = $("#view-frame").attr("data-model");
       $.getJSON(document.location.protocol + "//" + document.location.host + "/mall/webgl/o3g/v1/models/" + a+".js").done(function (c) {
       // $.getJSON("./o3g/v1/models/" + a+".js").done(function (c) {
            osg.log("loaded model meta");
            osg.log(c);
            c.success || osg.warn(c.error);
            var c = c.result,
            e = c.url.slice(0, c.url.lastIndexOf("/"));
            c.urlBase = e;
            var f = {};
            f.urlBase = c.urlBase;
            f.url = c.urlWireframe;
            if (c.sizeUncompressWireframe === void 0)
                c.sizeUncompressWireframe =
                    1;
            f.sizeUncompress = c.sizeUncompressWireframe;
            $.when(m(c)).then(function () {
                var e = c.options;
                e.lighting !== void 0 && editSetDisableLighting(!e.lighting.enable);
                e.orientation !== void 0 && e.orientation.axis !== void 0 && editSetOrientation(e.orientation.axis);
                setWireframeColor(getWireframeDefaultColor());
                e.wireframe !== void 0 && (editSetWireframe(e.wireframe.enable), e.wireframe.color !== void 0 && setWireframeColor(e.wireframe.color));
                if (e.camera !== void 0 && e.camera.target !== void 0 && e.camera.position !== void 0) {
                    var g = new sketchfab.Camera(e.camera);
                    sketchfab.cameras.add(g)
                }
                g = sketchfab.cameras.getCurrentCamera();
                g !== void 0 && g.isValid() && (Viewer.getManipulator().setTarget(g.getTarget()), Viewer.getManipulator().setEyePosition(g.getPosition()));
                e.ssao !== void 0 && sketchfab.rendering.ssao.setConfig(e.ssao);
                $.when(sketchfab.rendering.cubemap.loadCubemapList(a)).then(function () {
                    e.cubemap !== void 0 ? sketchfab.rendering.cubemap.setConfig(e.cubemap) : sketchfab.rendering.cubemap.setUserInterface()
                });
                var h = function () {
                    (c.thumbnail === null || Object.keys(c.thumbnails).length ===
                        0) && setTimeout(function () {
                        $("#js-snapshot-take").click()
                    }, 500)
                },
                i = function () {
                    osgExtra.LockTextureBinding = !1;
                    Viewer.frame();
                    removeLoading();
                    var a = Viewer.getManipulator().getCurrentManipulator(),
                    c = Array(3),
                    e = Array(3);
                    a.getEyePosition(e);
                    a.getTarget(c);
                    getOrCreateAutoRotationNode();
                    var f = getOrCreateOrientationNode(),
                    g = new osg.Node,
                    i = f.getBound().radius() * 1.5,
                    k = osg.Vec3.sub(c, e, Array(3));
                    k[2] = 0;
                    osg.Vec3.normalize(k, k);
                    var m = 1;
                    k[0] > k[1] && (m = 0);
                    var n = (m + 1) % 2,
                    p = osg.Vec3.init(Array(3)),
                    n = p[n] = 1;
                    k[m] < 0 && (n =
                            -1);
                    p[2] = 0.2 * n;
                    osg.Vec3.mult(p, i * 10 * n, p);
                    i = osg.Vec3.add(e, p, Array(3));
                    a = new osgExtra.UpdateCullbackAnimator(i, e, e, c, 2.5, a);
                    a.setFinishCallback(function () {
                        osgExtra.LockTextureBinding = !1;
                        h()
                    });
                    g.setUpdateCallback(a);
                    f.addChild(g);
                    osgExtra.LockTextureBinding = !0;
                    sketchfab.loadingIndicator.get().stop()
                };
                e.wireframe !== void 0 && e.wireframe.enable === !0 ? $.when(k(f)).then(function () {
                    var a = getOrCreateWireframeNode();
                    a.activateWireframe();
                    a.activateWireframe = void 0;
                    i()
                }) : i();
                e.shading !== void 0 && e.shading.type !==
                void 0 ? (e.shading.type === "predefined-shading" && editSetPredefinedShadingIndex(e.shading["shading-index"]), editSetShadingType[e.shading.type](), $("input:radio[value=" + e.shading.type + "]").attr("checked", !0)) : (editSetShadingType["default-shading"](), $("input:radio[value=default-shading]").attr("checked", !0))
            }).then(function () {
                i || setTimeout(function () {
                    $.when(k(f)).then(function () {
                        osg.log("wireframe model ready")
                    }, function () {
                        osg.log("wireframe model not available")
                    })
                }, 2500)
            })
        }).fail(function (c) {
            c === null ?
            osg.log("get null while trying to retrieve model " + a) : c.error && osg.log("error " + c.error)
        }).complete(function () {})
    })(a);
    c = getUrlVars();
    if (c !== void 0 && c.autospin)
        c.autospin = c.autospin.match(/[0-9]*[.]?[0-9]*/), e = getOrCreateSpinner(), e.setDirection(c.autospin), getOrCreateAutoRotationNode().setUpdateCallback(e);
    window.editUI && editUI(a)
};
