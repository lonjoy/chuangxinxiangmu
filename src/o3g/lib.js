(function (g, j) {
	function p(a, c, d) {
		if (d === j && a.nodeType === 1)
			if (d = a.getAttribute("data-" + c), typeof d === "string") {
				try {
					d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : !b.isNaN(d) ? parseFloat(d) : wa.test(d) ? b.parseJSON(d) : d
				} catch (e) {}
				
				b.data(a, c, d)
			} else
				d = j;
		return d
	}
	function l(a) {
		for (var c in a)
			if (c !== "toJSON")
				return !1;
		return !0
	}
	function E() {
		return !1
	}
	function z() {
		return !0
	}
	function A(a, c, d) {
		var e = b.extend({}, d[0]);
		e.type = a;
		e.originalEvent = {};
		e.liveFired = j;
		b.event.handle.call(c, e);
		e.isDefaultPrevented() && d[0].preventDefault()
	}
	function I(a) {
		var c,
		d,
		e,
		h,
		o,
		f,
		M,
		i,
		r,
		k,
		j,
		g = [];
		h = [];
		o = b._data(this, "events");
		if (!(a.liveFired === this || !o || !o.live || a.target.disabled || a.button && a.type === "click")) {
			a.namespace && (j = RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
			a.liveFired = this;
			var n = o.live.slice(0);
			for (M = 0; M < n.length; M++)
				o = n[M], o.origType.replace(V, "") === a.type ? h.push(o.selector) : n.splice(M--, 1);
			h = b(a.target).closest(h, a.currentTarget);
			i = 0;
			for (r = h.length; i < r; i++) {
				k = h[i];
				for (M = 0; M < n.length; M++)
					if (o = n[M], k.selector ===
						o.selector && (!j || j.test(o.namespace)) && !k.elem.disabled) {
						f = k.elem;
						e = null;
						if (o.preType === "mouseenter" || o.preType === "mouseleave")
							a.type = o.preType, e = b(a.relatedTarget).closest(o.selector)[0];
						(!e || e !== f) && g.push({
							elem : f,
							handleObj : o,
							level : k.level
						})
					}
			}
			i = 0;
			for (r = g.length; i < r; i++) {
				h = g[i];
				if (d && h.level > d)
					break;
				a.currentTarget = h.elem;
				a.data = h.handleObj.data;
				a.handleObj = h.handleObj;
				j = h.handleObj.origHandler.apply(h.elem, arguments);
				if (j === !1 || a.isPropagationStopped())
					if (d = h.level, j === !1 && (c = !1), a.isImmediatePropagationStopped())
						break
			}
			return c
		}
	}
	function B(a, c) {
		return (a && a !== "*" ? a + "." : "") + c.replace(ha, "`").replace(N, "&")
	}
	function u(a, c, d) {
		if (b.isFunction(c))
			return b.grep(a, function (a, b) {
				return !!c.call(a, b, a) === d
			});
		else if (c.nodeType)
			return b.grep(a, function (a) {
				return a === c === d
			});
		else if (typeof c === "string") {
			var e = b.grep(a, function (a) {
					return a.nodeType === 1
				});
			if (K.test(c))
				return b.filter(c, e, !d);
			else
				c = b.filter(c, e)
		}
		return b.grep(a, function (a) {
			return b.inArray(a, c) >= 0 === d
		})
	}
	function w(a, c) {
		if (c.nodeType === 1 && b.hasData(a)) {
			var d = b.expando,
			e =
				b.data(a),
			h = b.data(c, e);
			if (e = e[d]) {
				var o = e.events,
				h = h[d] = b.extend({}, e);
				if (o) {
					delete h.handle;
					h.events = {};
					for (var f in o) {
						d = 0;
						for (e = o[f].length; d < e; d++)
							b.event.add(c, f + (o[f][d].namespace ? "." : "") + o[f][d].namespace, o[f][d], o[f][d].data)
					}
				}
			}
		}
	}
	function J(a, c) {
		if (c.nodeType === 1) {
			var d = c.nodeName.toLowerCase();
			c.clearAttributes();
			c.mergeAttributes(a);
			if (d === "object")
				c.outerHTML = a.outerHTML;
			else if (d === "input" && (a.type === "checkbox" || a.type === "radio")) {
				if (a.checked)
					c.defaultChecked = c.checked = a.checked;
				if (c.value !==
					a.value)
					c.value = a.value
			} else if (d === "option")
				c.selected = a.defaultSelected;
			else if (d === "input" || d === "textarea")
				c.defaultValue = a.defaultValue;
			c.removeAttribute(b.expando)
		}
	}
	function P(a) {
		return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
	}
	function O(a, c) {
		c.src ? b.ajax({
			url : c.src,
			async : !1,
			dataType : "script"
		}) : b.globalEval(c.text || c.textContent || c.innerHTML || "");
		c.parentNode && c.parentNode.removeChild(c)
	}
	function Q(a, c, d) {
		var e = c === "width" ? a.offsetWidth :
			a.offsetHeight;
		if (d === "border")
			return e;
		b.each(c === "width" ? Ta : Ua, function () {
			d || (e -= parseFloat(b.css(a, "padding" + this)) || 0);
			d === "margin" ? e += parseFloat(b.css(a, "margin" + this)) || 0 : e -= parseFloat(b.css(a, "border" + this + "Width")) || 0
		});
		return e
	}
	function C(a) {
		return function (c, d) {
			var r;
			typeof c !== "string" && (d = c, c = "*");
			if (b.isFunction(d))
				for (var e = c.toLowerCase().split(Fa), h = 0, o = e.length, f, M; h < o; h++)
					f = e[h], (M = /^\+/.test(f)) && (f = f.substr(1) || "*"), r = a[f] = a[f] || [], f = r, f[M ? "unshift" : "push"](d)
		}
	}
	function G(a, c,
		b, e, h, o) {
		h = h || c.dataTypes[0];
		o = o || {};
		o[h] = !0;
		for (var h = a[h], f = 0, M = h ? h.length : 0, i = a === xa, r; f < M && (i || !r); f++)
			r = h[f](c, b, e), typeof r === "string" && (!i || o[r] ? r = j : (c.dataTypes.unshift(r), r = G(a, c, b, e, r, o)));
		if ((i || !r) && !o["*"])
			r = G(a, c, b, e, "*", o);
		return r
	}
	function ia(a, c, d, e) {
		if (b.isArray(c) && c.length)
			b.each(c, function (c, h) {
				d || Va.test(a) ? e(a, h) : ia(a + "[" + (typeof h === "object" || b.isArray(h) ? c : "") + "]", h, d, e)
			});
		else if (!d && c != null && typeof c === "object")
			if (b.isArray(c) || b.isEmptyObject(c))
				e(a, "");
			else
				for (var h in c)
					ia(a +
						"[" + h + "]", c[h], d, e);
		else
			e(a, c)
	}
	function oa() {
		b(g).unload(function () {
			for (var a in ja)
				ja[a](0, 1)
		})
	}
	function pa() {
		try {
			return new g.XMLHttpRequest
		} catch (a) {}
		
	}
	function s(a, c) {
		var d = {};
		b.each(Ga.concat.apply([], Ga.slice(0, c)), function () {
			d[this] = a
		});
		return d
	}
	function qa(a) {
		if (!ya[a]) {
			var c = b("<" + a + ">").appendTo("body"),
			d = c.css("display");
			c.remove();
			if (d === "none" || d === "")
				d = "block";
			ya[a] = d
		}
		return ya[a]
	}
	function aa(a) {
		return b.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
	}
	var m = g.document,
	b = function () {
		function a() {
			if (!c.isReady) {
				try {
					m.documentElement.doScroll("left")
				} catch (b) {
					setTimeout(a, 1);
					return
				}
				c.ready()
			}
		}
		var c = function (a, b) {
			return new c.fn.init(a, b, h)
		},
		b = g.jQuery,
		e = g.$,
		h,
		o = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
		f = /\S/,
		i = /^\s+/,
		k = /\s+$/,
		r = /\d/,
		Sa = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
		n = /^[\],:{}\s]*$/,
		y = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
		q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
		l = /(?:^|:|,)(?:\s*\[)+/g,
		x = /(webkit)[ \/]([\w.]+)/,
		H = /(opera)(?:.*version)?[ \/]([\w.]+)/,
		u = /(msie) ([\w.]+)/,
		p = /(mozilla)(?:.*? rv:([\w.]+))?/,
		v = navigator.userAgent,
		da = !1,
		za,
		Aa = "then done fail isResolved isRejected promise".split(" "),
		ka,
		Wa = Object.prototype.toString,
		Ba = Object.prototype.hasOwnProperty,
		Ca = Array.prototype.push,
		w = Array.prototype.slice,
		D = String.prototype.trim,
		L = Array.prototype.indexOf,
		W = {};
		c.fn = c.prototype = {
			constructor : c,
			init : function (a, b, d) {
				var e;
				if (!a)
					return this;
				if (a.nodeType)
					return this.context = this[0] = a, this.length = 1, this;
				if (a === "body" && !b && m.body)
					return this.context =
						m, this[0] = m.body, this.selector = "body", this.length = 1, this;
				if (typeof a === "string")
					if ((e = o.exec(a)) && (e[1] || !b))
						if (e[1])
							return d = (b = b instanceof c ? b[0] : b) ? b.ownerDocument || b : m, (a = Sa.exec(a)) ? c.isPlainObject(b) ? (a = [m.createElement(a[1])], c.fn.attr.call(a, b, !0)) : a = [d.createElement(a[1])] : (a = c.buildFragment([e[1]], [d]), a = (a.cacheable ? c.clone(a.fragment) : a.fragment).childNodes), c.merge(this, a);
						else {
							if ((b = m.getElementById(e[2])) && b.parentNode) {
								if (b.id !== e[2])
									return d.find(a);
								this.length = 1;
								this[0] = b
							}
							this.context =
								m;
							this.selector = a;
							return this
						}
					else
						return !b || b.jquery ? (b || d).find(a) : this.constructor(b).find(a);
				else if (c.isFunction(a))
					return d.ready(a);
				if (a.selector !== j)
					this.selector = a.selector, this.context = a.context;
				return c.makeArray(a, this)
			},
			selector : "",
			jquery : "1.5.1",
			length : 0,
			size : function () {
				return this.length
			},
			toArray : function () {
				return w.call(this, 0)
			},
			get : function (a) {
				return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
			},
			pushStack : function (a, b, d) {
				var e = this.constructor();
				c.isArray(a) ? Ca.apply(e,
					a) : c.merge(e, a);
				e.prevObject = this;
				e.context = this.context;
				if (b === "find")
					e.selector = this.selector + (this.selector ? " " : "") + d;
				else if (b)
					e.selector = this.selector + "." + b + "(" + d + ")";
				return e
			},
			each : function (a, b) {
				return c.each(this, a, b)
			},
			ready : function (a) {
				c.bindReady();
				za.done(a);
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
				return this.pushStack(w.apply(this, arguments), "slice", w.call(arguments).join(","))
			},
			map : function (a) {
				return this.pushStack(c.map(this, function (c, b) {
						return a.call(c, b, c)
					}))
			},
			end : function () {
				return this.prevObject || this.constructor(null)
			},
			push : Ca,
			sort : [].sort,
			splice : [].splice
		};
		c.fn.init.prototype = c.fn;
		c.extend = c.fn.extend = function () {
			var a,
			b,
			d,
			e,
			h,
			v = arguments[0] || {},
			o = 1,
			f = arguments.length,
			F = !1;
			typeof v === "boolean" && (F = v, v = arguments[1] || {}, o = 2);
			typeof v !== "object" && !c.isFunction(v) && (v = {});
			f === o && (v = this, --o);
			for (; o < f; o++)
				if ((a = arguments[o]) != null)
					for (b in a)
						d = v[b], e = a[b], v !== e && (F && e &&
							(c.isPlainObject(e) || (h = c.isArray(e))) ? (h ? (h = !1, d = d && c.isArray(d) ? d : []) : d = d && c.isPlainObject(d) ? d : {}, v[b] = c.extend(F, d, e)) : e !== j && (v[b] = e));
			return v
		};
		c.extend({
			noConflict : function (a) {
				g.$ = e;
				if (a)
					g.jQuery = b;
				return c
			},
			isReady : !1,
			readyWait : 1,
			ready : function (a) {
				a === !0 && c.readyWait--;
				if (!c.readyWait || a !== !0 && !c.isReady) {
					if (!m.body)
						return setTimeout(c.ready, 1);
					c.isReady = !0;
					a !== !0 && --c.readyWait > 0 || (za.resolveWith(m, [c]), c.fn.trigger && c(m).trigger("ready").unbind("ready"))
				}
			},
			bindReady : function () {
				if (!da) {
					da =
						!0;
					if (m.readyState === "complete")
						return setTimeout(c.ready, 1);
					if (m.addEventListener)
						m.addEventListener("DOMContentLoaded", ka, !1), g.addEventListener("load", c.ready, !1);
					else if (m.attachEvent) {
						m.attachEvent("onreadystatechange", ka);
						g.attachEvent("onload", c.ready);
						var b = !1;
						try {
							b = g.frameElement == null
						} catch (d) {}
						
						m.documentElement.doScroll && b && a()
					}
				}
			},
			isFunction : function (a) {
				return c.type(a) === "function"
			},
			isArray : function (a) {
				return c.type(a) === "array"
			},
			isWindow : function (a) {
				return a && typeof a === "object" && "setInterval" in
				a
			},
			isNaN : function (a) {
				return a == null || !r.test(a) || isNaN(a)
			},
			type : function (a) {
				return a == null ? String(a) : W[Wa.call(a)] || "object"
			},
			isPlainObject : function (a) {
				if (!a || c.type(a) !== "object" || a.nodeType || c.isWindow(a))
					return !1;
				if (a.constructor && !Ba.call(a, "constructor") && !Ba.call(a.constructor.prototype, "isPrototypeOf"))
					return !1;
				for (var b in a);
				return b === j || Ba.call(a, b)
			},
			isEmptyObject : function (a) {
				for (var c in a)
					return !1;
				return !0
			},
			error : function (a) {
				throw a;
			},
			parseJSON : function (a) {
				if (typeof a !== "string" || !a)
					return null;
				a = c.trim(a);
				if (n.test(a.replace(y, "@").replace(q, "]").replace(l, "")))
					return g.JSON && g.JSON.parse ? g.JSON.parse(a) : (new Function("return " + a))();
				else
					c.error("Invalid JSON: " + a)
			},
			parseXML : function (a, b, d) {
				g.DOMParser ? (d = new DOMParser, b = d.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a));
				d = b.documentElement;
				(!d || !d.nodeName || d.nodeName === "parsererror") && c.error("Invalid XML: " + a);
				return b
			},
			noop : function () {},
			globalEval : function (a) {
				if (a && f.test(a)) {
					var b =
						m.head || m.getElementsByTagName("head")[0] || m.documentElement,
					d = m.createElement("script");
					c.support.scriptEval() ? d.appendChild(m.createTextNode(a)) : d.text = a;
					b.insertBefore(d, b.firstChild);
					b.removeChild(d)
				}
			},
			nodeName : function (a, c) {
				return a.nodeName && a.nodeName.toUpperCase() === c.toUpperCase()
			},
			each : function (a, b, d) {
				var e,
				h = 0,
				v = a.length,
				o = v === j || c.isFunction(a);
				if (d)
					if (o)
						for (e in a) {
							if (b.apply(a[e], d) === !1)
								break
						}
					else
						for (; h < v; ) {
							if (b.apply(a[h++], d) === !1)
								break
						}
				else if (o)
					for (e in a) {
						if (b.call(a[e], e, a[e]) ===
							!1)
							break
					}
				else
					for (d = a[0]; h < v && b.call(d, h, d) !== !1; d = a[++h]);
				return a
			},
			trim : D ? function (a) {
				return a == null ? "" : D.call(a)
			}
			 : function (a) {
				return a == null ? "" : a.toString().replace(i, "").replace(k, "")
			},
			makeArray : function (a, b) {
				var d = b || [];
				if (a != null) {
					var e = c.type(a);
					a.length == null || e === "string" || e === "function" || e === "regexp" || c.isWindow(a) ? Ca.call(d, a) : c.merge(d, a)
				}
				return d
			},
			inArray : function (a, c) {
				if (c.indexOf)
					return c.indexOf(a);
				for (var b = 0, d = c.length; b < d; b++)
					if (c[b] === a)
						return b;
				return -1
			},
			merge : function (a, c) {
				var b =
					a.length,
				d = 0;
				if (typeof c.length === "number")
					for (var e = c.length; d < e; d++)
						a[b++] = c[d];
				else
					for (; c[d] !== j; )
						a[b++] = c[d++];
				a.length = b;
				return a
			},
			grep : function (a, c, b) {
				for (var d = [], e, b = !!b, h = 0, v = a.length; h < v; h++)
					e = !!c(a[h], h), b !== e && d.push(a[h]);
				return d
			},
			map : function (a, c, b) {
				for (var d = [], e, h = 0, v = a.length; h < v; h++)
					e = c(a[h], h, b), e != null && (d[d.length] = e);
				return d.concat.apply([], d)
			},
			guid : 1,
			proxy : function (a, b, d) {
				arguments.length === 2 && (typeof b === "string" ? (d = a, a = d[b], b = j) : b && !c.isFunction(b) && (d = b, b = j));
				!b && a && (b =
					function () {
					return a.apply(d || this, arguments)
				});
				if (a)
					b.guid = a.guid = a.guid || b.guid || c.guid++;
				return b
			},
			access : function (a, b, d, e, h, v) {
				var o = a.length;
				if (typeof b === "object") {
					for (var f in b)
						c.access(a, f, b[f], e, h, d);
					return a
				}
				if (d !== j) {
					e = !v && e && c.isFunction(d);
					for (f = 0; f < o; f++)
						h(a[f], b, e ? d.call(a[f], f, h(a[f], b)) : d, v);
					return a
				}
				return o ? h(a[0], b) : j
			},
			now : function () {
				return (new Date).getTime()
			},
			_Deferred : function () {
				var a = [],
				b,
				d,
				e,
				h = {
					done : function () {
						if (!e) {
							var d = arguments,
							v,
							o,
							f,
							F,
							da;
							b && (da = b, b = 0);
							v = 0;
							for (o = d.length; v <
								o; v++)
								f = d[v], F = c.type(f), F === "array" ? h.done.apply(h, f) : F === "function" && a.push(f);
							da && h.resolveWith(da[0], da[1])
						}
						return this
					},
					resolveWith : function (c, h) {
						if (!e && !b && !d) {
							d = 1;
							try {
								for (; a[0]; )
									a.shift().apply(c, h)
							} catch (v) {
								throw v;
							}
							finally {
								b = [c, h],
								d = 0
							}
						}
						return this
					},
					resolve : function () {
						h.resolveWith(c.isFunction(this.promise) ? this.promise() : this, arguments);
						return this
					},
					isResolved : function () {
						return !(!d && !b)
					},
					cancel : function () {
						e = 1;
						a = [];
						return this
					}
				};
				return h
			},
			Deferred : function (a) {
				var b = c._Deferred(),
				d = c._Deferred(),
				e;
				c.extend(b, {
					then : function (a, c) {
						b.done(a).fail(c);
						return this
					},
					fail : d.done,
					rejectWith : d.resolveWith,
					reject : d.resolve,
					isRejected : d.isResolved,
					promise : function (a) {
						if (a == null) {
							if (e)
								return e;
							e = a = {}
							
						}
						for (var c = Aa.length; c--; )
							a[Aa[c]] = b[Aa[c]];
						return a
					}
				});
				b.done(d.cancel).fail(b.cancel);
				delete b.cancel;
				a && a.call(b, b);
				return b
			},
			when : function (a) {
				var b = arguments.length,
				d = b <= 1 && a && c.isFunction(a.promise) ? a : c.Deferred(),
				e = d.promise();
				if (b > 1) {
					for (var h = w.call(arguments, 0), v = b, o = function (a) {
						return function (c) {
							h[a] =
								arguments.length > 1 ? w.call(arguments, 0) : c;
							--v || d.resolveWith(e, h)
						}
					}; b--; )
						(a = h[b]) && c.isFunction(a.promise) ? a.promise().then(o(b), d.reject) : --v;
					v || d.resolveWith(e, h)
				} else
					d !== a && d.resolve(a);
				return e
			},
			uaMatch : function (a) {
				a = a.toLowerCase();
				a = x.exec(a) || H.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && p.exec(a) || [];
				return {
					browser : a[1] || "",
					version : a[2] || "0"
				}
			},
			sub : function () {
				function a(c, b) {
					return new a.fn.init(c, b)
				}
				c.extend(!0, a, this);
				a.superclass = this;
				a.fn = a.prototype = this();
				a.fn.constructor = a;
				a.subclass =
					this.subclass;
				a.fn.init = function (d, e) {
					e && e instanceof c && !(e instanceof a) && (e = a(e));
					return c.fn.init.call(this, d, e, b)
				};
				a.fn.init.prototype = a.fn;
				var b = a(m);
				return a
			},
			browser : {}
			
		});
		za = c._Deferred();
		c.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, c) {
			W["[object " + c + "]"] = c.toLowerCase()
		});
		v = c.uaMatch(v);
		if (v.browser)
			c.browser[v.browser] = !0, c.browser.version = v.version;
		if (c.browser.webkit)
			c.browser.safari = !0;
		if (L)
			c.inArray = function (a, c) {
				return L.call(c, a)
			};
		f.test("\u00a0") &&
		(i = /^[\s\xA0]+/, k = /[\s\xA0]+$/);
		h = c(m);
		m.addEventListener ? ka = function () {
			m.removeEventListener("DOMContentLoaded", ka, !1);
			c.ready()
		}
		 : m.attachEvent && (ka = function () {
			m.readyState === "complete" && (m.detachEvent("onreadystatechange", ka), c.ready())
		});
		return c
	}
	();
	(function () {
		b.support = {};
		var a = m.createElement("div");
		a.style.display = "none";
		a.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		var c = a.getElementsByTagName("*"),
		d = a.getElementsByTagName("a")[0],
		e = m.createElement("select"),
		h = e.appendChild(m.createElement("option")),
		o = a.getElementsByTagName("input")[0];
		if (c && c.length && d) {
			b.support = {
				leadingWhitespace : a.firstChild.nodeType === 3,
				tbody : !a.getElementsByTagName("tbody").length,
				htmlSerialize : !!a.getElementsByTagName("link").length,
				style : /red/.test(d.getAttribute("style")),
				hrefNormalized : d.getAttribute("href") === "/a",
				opacity : /^0.55$/.test(d.style.opacity),
				cssFloat : !!d.style.cssFloat,
				checkOn : o.value === "on",
				optSelected : h.selected,
				deleteExpando : !0,
				optDisabled : !1,
				checkClone : !1,
				noCloneEvent : !0,
				noCloneChecked : !0,
				boxModel : null,
				inlineBlockNeedsLayout : !1,
				shrinkWrapBlocks : !1,
				reliableHiddenOffsets : !0
			};
			o.checked = !0;
			b.support.noCloneChecked = o.cloneNode(!0).checked;
			e.disabled = !0;
			b.support.optDisabled = !h.disabled;
			var f = null;
			b.support.scriptEval = function () {
				if (f === null) {
					var a = m.documentElement,
					c = m.createElement("script"),
					d = "script" + b.now();
					try {
						c.appendChild(m.createTextNode("window." + d + "=1;"))
					} catch (e) {}
					
					a.insertBefore(c, a.firstChild);
					g[d] ? (f = !0, delete g[d]) : f = !1;
					a.removeChild(c)
				}
				return f
			};
			try {
				delete a.test
			} catch (i) {
				b.support.deleteExpando = !1
			}
			!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function r() {
					b.support.noCloneEvent = !1;
					a.detachEvent("onclick", r)
				}), a.cloneNode(!0).fireEvent("onclick"));
			a = m.createElement("div");
			a.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
			c = m.createDocumentFragment();
			c.appendChild(a.firstChild);
			b.support.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
			b(function () {
				var a = m.createElement("div"),
				c = m.getElementsByTagName("body")[0];
				if (c) {
					a.style.width = a.style.paddingLeft = "1px";
					c.appendChild(a);
					b.boxModel = b.support.boxModel = a.offsetWidth === 2;
					if ("zoom" in a.style)
						a.style.display = "inline", a.style.zoom = 1, b.support.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", b.support.shrinkWrapBlocks = a.offsetWidth !== 2;
					a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
					var d = a.getElementsByTagName("td");
					b.support.reliableHiddenOffsets = d[0].offsetHeight ===
						0;
					d[0].style.display = "";
					d[1].style.display = "none";
					b.support.reliableHiddenOffsets = b.support.reliableHiddenOffsets && d[0].offsetHeight === 0;
					a.innerHTML = "";
					c.removeChild(a).style.display = "none"
				}
			});
			c = function (a) {
				var c = m.createElement("div"),
				a = "on" + a;
				if (!c.attachEvent)
					return !0;
				var b = a in c;
				b || (c.setAttribute(a, "return;"), b = typeof c[a] === "function");
				return b
			};
			b.support.submitBubbles = c("submit");
			b.support.changeBubbles = c("change");
			a = c = d = null
		}
	})();
	var wa = /^(?:\{.*\}|\[.*\])$/;
	b.extend({
		cache : {},
		uuid : 0,
		expando : "jQuery" +
		(b.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData : {
			embed : !0,
			object : "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet : !0
		},
		hasData : function (a) {
			a = a.nodeType ? b.cache[a[b.expando]] : a[b.expando];
			return !!a && !l(a)
		},
		data : function (a, c, d, e) {
			if (b.acceptData(a)) {
				var h = b.expando,
				o = typeof c === "string",
				f = a.nodeType,
				i = f ? b.cache : a,
				k = f ? a[b.expando] : a[b.expando] && b.expando;
				if (k && (!e || !k || i[k][h]) || !(o && d === j)) {
					if (!k)
						f ? a[b.expando] = k = ++b.uuid : k = b.expando;
					if (!i[k] && (i[k] = {}, !f))
						i[k].toJSON = b.noop;
					if (typeof c === "object" ||
						typeof c === "function")
						e ? i[k][h] = b.extend(i[k][h], c) : i[k] = b.extend(i[k], c);
					a = i[k];
					e && (a[h] || (a[h] = {}), a = a[h]);
					d !== j && (a[c] = d);
					if (c === "events" && !a[c])
						return a[h] && a[h].events;
					return o ? a[c] : a
				}
			}
		},
		removeData : function (a, c, d) {
			if (b.acceptData(a)) {
				var e = b.expando,
				h = a.nodeType,
				o = h ? b.cache : a,
				f = h ? a[b.expando] : b.expando;
				if (o[f]) {
					if (c) {
						var i = d ? o[f][e] : o[f];
						if (i && (delete i[c], !l(i)))
							return
					}
					if (d && (delete o[f][e], !l(o[f])))
						return;
					c = o[f][e];
					b.support.deleteExpando || o != g ? delete o[f] : o[f] = null;
					if (c) {
						o[f] = {};
						if (!h)
							o[f].toJSON =
								b.noop;
						o[f][e] = c
					} else
						h && (b.support.deleteExpando ? delete a[b.expando] : a.removeAttribute ? a.removeAttribute(b.expando) : a[b.expando] = null)
				}
			}
		},
		_data : function (a, c, d) {
			return b.data(a, c, d, !0)
		},
		acceptData : function (a) {
			if (a.nodeName) {
				var c = b.noData[a.nodeName.toLowerCase()];
				if (c)
					return !(c === !0 || a.getAttribute("classid") !== c)
			}
			return !0
		}
	});
	b.fn.extend({
		data : function (a, c) {
			var d = null;
			if (typeof a === "undefined") {
				if (this.length && (d = b.data(this[0]), this[0].nodeType === 1))
					for (var e = this[0].attributes, h, f = 0, F = e.length; f <
						F; f++)
						h = e[f].name, h.indexOf("data-") === 0 && (h = h.substr(5), p(this[0], h, d[h]));
				return d
			} else if (typeof a === "object")
				return this.each(function () {
					b.data(this, a)
				});
			var i = a.split(".");
			i[1] = i[1] ? "." + i[1] : "";
			return c === j ? (d = this.triggerHandler("getData" + i[1] + "!", [i[0]]), d === j && this.length && (d = b.data(this[0], a), d = p(this[0], a, d)), d === j && i[1] ? this.data(i[0]) : d) : this.each(function () {
				var d = b(this),
				e = [i[0], c];
				d.triggerHandler("setData" + i[1] + "!", e);
				b.data(this, a, c);
				d.triggerHandler("changeData" + i[1] + "!", e)
			})
		},
		removeData : function (a) {
			return this.each(function () {
				b.removeData(this,
					a)
			})
		}
	});
	b.extend({
		queue : function (a, c, d) {
			if (a) {
				var c = (c || "fx") + "queue",
				e = b._data(a, c);
				if (!d)
					return e || [];
				!e || b.isArray(d) ? e = b._data(a, c, b.makeArray(d)) : e.push(d);
				return e
			}
		},
		dequeue : function (a, c) {
			var c = c || "fx",
			d = b.queue(a, c),
			e = d.shift();
			e === "inprogress" && (e = d.shift());
			e && (c === "fx" && d.unshift("inprogress"), e.call(a, function () {
					b.dequeue(a, c)
				}));
			d.length || b.removeData(a, c + "queue", !0)
		}
	});
	b.fn.extend({
		queue : function (a, c) {
			typeof a !== "string" && (c = a, a = "fx");
			if (c === j)
				return b.queue(this[0], a);
			return this.each(function () {
				var d =
					b.queue(this, a, c);
				a === "fx" && d[0] !== "inprogress" && b.dequeue(this, a)
			})
		},
		dequeue : function (a) {
			return this.each(function () {
				b.dequeue(this, a)
			})
		},
		delay : function (a, c) {
			a = b.fx ? b.fx.speeds[a] || a : a;
			c = c || "fx";
			return this.queue(c, function () {
				var d = this;
				setTimeout(function () {
					b.dequeue(d, c)
				}, a)
			})
		},
		clearQueue : function (a) {
			return this.queue(a || "fx", [])
		}
	});
	var ba = /[\n\t\r]/g,
	t = /\s+/,
	Da = /\r/g,
	R = /^(?:href|src|style)$/,
	la = /^(?:button|input)$/i,
	ra = /^(?:button|input|object|select|textarea)$/i,
	U = /^a(?:rea)?$/i,
	Y = /^(?:radio|checkbox)$/i;
	b.props = {
		"for" : "htmlFor",
		"class" : "className",
		readonly : "readOnly",
		maxlength : "maxLength",
		cellspacing : "cellSpacing",
		rowspan : "rowSpan",
		colspan : "colSpan",
		tabindex : "tabIndex",
		usemap : "useMap",
		frameborder : "frameBorder"
	};
	b.fn.extend({
		attr : function (a, c) {
			return b.access(this, a, c, !0, b.attr)
		},
		removeAttr : function (a) {
			return this.each(function () {
				b.attr(this, a, "");
				this.nodeType === 1 && this.removeAttribute(a)
			})
		},
		addClass : function (a) {
			if (b.isFunction(a))
				return this.each(function (c) {
					var d = b(this);
					d.addClass(a.call(this,
							c, d.attr("class")))
				});
			if (a && typeof a === "string")
				for (var c = (a || "").split(t), d = 0, e = this.length; d < e; d++) {
					var h = this[d];
					if (h.nodeType === 1)
						if (h.className) {
							for (var f = " " + h.className + " ", F = h.className, i = 0, k = c.length; i < k; i++)
								f.indexOf(" " + c[i] + " ") < 0 && (F += " " + c[i]);
							h.className = b.trim(F)
						} else
							h.className = a
				}
			return this
		},
		removeClass : function (a) {
			if (b.isFunction(a))
				return this.each(function (c) {
					var d = b(this);
					d.removeClass(a.call(this, c, d.attr("class")))
				});
			if (a && typeof a === "string" || a === j)
				for (var c = (a || "").split(t),
					d = 0, e = this.length; d < e; d++) {
					var h = this[d];
					if (h.nodeType === 1 && h.className)
						if (a) {
							for (var f = (" " + h.className + " ").replace(ba, " "), F = 0, i = c.length; F < i; F++)
								f = f.replace(" " + c[F] + " ", " ");
							h.className = b.trim(f)
						} else
							h.className = ""
				}
			return this
		},
		toggleClass : function (a, c) {
			var d = typeof a,
			e = typeof c === "boolean";
			if (b.isFunction(a))
				return this.each(function (d) {
					var e = b(this);
					e.toggleClass(a.call(this, d, e.attr("class"), c), c)
				});
			return this.each(function () {
				if (d === "string")
					for (var h, f = 0, F = b(this), i = c, k = a.split(t); h = k[f++]; )
						i =
							e ? i : !F.hasClass(h), F[i ? "addClass" : "removeClass"](h);
				else if (d === "undefined" || d === "boolean")
					this.className && b._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : b._data(this, "__className__") || ""
			})
		},
		hasClass : function (a) {
			for (var a = " " + a + " ", c = 0, b = this.length; c < b; c++)
				if ((" " + this[c].className + " ").replace(ba, " ").indexOf(a) > -1)
					return !0;
			return !1
		},
		val : function (a) {
			if (!arguments.length) {
				var c = this[0];
				if (c) {
					if (b.nodeName(c, "option")) {
						var d = c.attributes.value;
						return !d || d.specified ?
						c.value : c.text
					}
					if (b.nodeName(c, "select")) {
						var d = c.selectedIndex,
						e = [],
						h = c.options,
						c = c.type === "select-one";
						if (d < 0)
							return null;
						for (var f = c ? d : 0, i = c ? d + 1 : h.length; f < i; f++) {
							var k = h[f];
							if (k.selected && (b.support.optDisabled ? !k.disabled : k.getAttribute("disabled") === null) && (!k.parentNode.disabled || !b.nodeName(k.parentNode, "optgroup"))) {
								a = b(k).val();
								if (c)
									return a;
								e.push(a)
							}
						}
						if (c && !e.length && h.length)
							return b(h[d]).val();
						return e
					}
					if (Y.test(c.type) && !b.support.checkOn)
						return c.getAttribute("value") === null ? "on" :
						c.value;
					return (c.value || "").replace(Da, "")
				}
				return j
			}
			var g = b.isFunction(a);
			return this.each(function (c) {
				var d = b(this),
				e = a;
				if (this.nodeType === 1)
					if (g && (e = a.call(this, c, d.val())), e == null ? e = "" : typeof e === "number" ? e += "" : b.isArray(e) && (e = b.map(e, function (a) {
										return a == null ? "" : a + ""
									})), b.isArray(e) && Y.test(this.type))
						this.checked = b.inArray(d.val(), e) >= 0;
					else if (b.nodeName(this, "select")) {
						var h = b.makeArray(e);
						b("option", this).each(function () {
							this.selected = b.inArray(b(this).val(), h) >= 0
						});
						if (!h.length)
							this.selectedIndex =
								-1
					} else
						this.value = e
			})
		}
	});
	b.extend({
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
		attr : function (a, c, d, e) {
			if (!a || a.nodeType === 3 || a.nodeType === 8 || a.nodeType === 2)
				return j;
			if (e && c in b.attrFn)
				return b(a)[c](d);
			var e = a.nodeType !== 1 || !b.isXMLDoc(a),
			h = d !== j,
			c = e && b.props[c] || c;
			if (a.nodeType === 1) {
				var f = R.test(c);
				if ((c in a || a[c] !== j) && e && !f) {
					h && (c === "type" && la.test(a.nodeName) && a.parentNode && b.error("type property can't be changed"), d === null ? a.nodeType === 1 && a.removeAttribute(c) :
						a[c] = d);
					if (b.nodeName(a, "form") && a.getAttributeNode(c))
						return a.getAttributeNode(c).nodeValue;
					if (c === "tabIndex")
						return (c = a.getAttributeNode("tabIndex")) && c.specified ? c.value : ra.test(a.nodeName) || U.test(a.nodeName) && a.href ? 0 : j;
					return a[c]
				}
				if (!b.support.style && e && c === "style") {
					if (h)
						a.style.cssText = "" + d;
					return a.style.cssText
				}
				h && a.setAttribute(c, "" + d);
				if (!a.attributes[c] && a.hasAttribute && !a.hasAttribute(c))
					return j;
				a = !b.support.hrefNormalized && e && f ? a.getAttribute(c, 2) : a.getAttribute(c);
				return a === null ?
				j : a
			}
			h && (a[c] = d);
			return a[c]
		}
	});
	var V = /\.(.*)$/,
	ca = /^(?:textarea|input|select)$/i,
	ha = /\./g,
	N = / /g,
	i = /[^\w\s.|`]/g,
	f = function (a) {
		return a.replace(i, "\\$&")
	};
	b.event = {
		add : function (a, c, d, e) {
			if (!(a.nodeType === 3 || a.nodeType === 8)) {
				try {
					b.isWindow(a) && a !== g && !a.frameElement && (a = g)
				} catch (h) {}
				
				if (d === !1)
					d = E;
				else if (!d)
					return;
				var f,
				i;
				if (d.handler)
					f = d, d = f.handler;
				if (!d.guid)
					d.guid = b.guid++;
				if (i = b._data(a)) {
					var k = i.events,
					n = i.handle;
					if (!k)
						i.events = k = {};
					if (!n)
						i.handle = n = function () {
							return typeof b !== "undefined" &&
							!b.event.triggered ? b.event.handle.apply(n.elem, arguments) : j
						};
					n.elem = a;
					for (var c = c.split(" "), r, y = 0, q; r = c[y++]; ) {
						i = f ? b.extend({}, f) : {
							handler : d,
							data : e
						};
						r.indexOf(".") > -1 ? (q = r.split("."), r = q.shift(), i.namespace = q.slice(0).sort().join(".")) : (q = [], i.namespace = "");
						i.type = r;
						if (!i.guid)
							i.guid = d.guid;
						var m = k[r],
						l = b.event.special[r] || {};
						if (!m && (m = k[r] = [], !l.setup || l.setup.call(a, e, q, n) === !1))
							a.addEventListener ? a.addEventListener(r, n, !1) : a.attachEvent && a.attachEvent("on" + r, n);
						if (l.add && (l.add.call(a, i), !i.handler.guid))
							i.handler.guid =
								d.guid;
						m.push(i);
						b.event.global[r] = !0
					}
					a = null
				}
			}
		},
		global : {},
		remove : function (a, c, d, e) {
			if (!(a.nodeType === 3 || a.nodeType === 8)) {
				d === !1 && (d = E);
				var h,
				o,
				i = 0,
				k,
				g,
				r,
				n,
				y,
				q,
				m = b.hasData(a) && b._data(a),
				l = m && m.events;
				if (m && l) {
					if (c && c.type)
						d = c.handler, c = c.type;
					if (!c || typeof c === "string" && c.charAt(0) === ".")
						for (h in c = c || "", l)
							b.event.remove(a, h + c);
					else {
						for (c = c.split(" "); h = c[i++]; )
							if (n = h, k = h.indexOf(".") < 0, g = [], k || (g = h.split("."), h = g.shift(), r = RegExp("(^|\\.)" + b.map(g.slice(0).sort(), f).join("\\.(?:.*\\.)?") + "(\\.|$)")),
								y = l[h])
								if (d) {
									n = b.event.special[h] || {};
									for (o = e || 0; o < y.length; o++)
										if (q = y[o], d.guid === q.guid) {
											if (k || r.test(q.namespace))
												e == null && y.splice(o--, 1), n.remove && n.remove.call(a, q);
											if (e != null)
												break
										}
									if (y.length === 0 || e != null && y.length === 1)
										(!n.teardown || n.teardown.call(a, g) === !1) && b.removeEvent(a, h, m.handle), delete l[h]
								} else
									for (o = 0; o < y.length; o++)
										if (q = y[o], k || r.test(q.namespace))
											b.event.remove(a, n, q.handler, o), y.splice(o--, 1);
						if (b.isEmptyObject(l)) {
							if (c = m.handle)
								c.elem = null;
							delete m.events;
							delete m.handle;
							b.isEmptyObject(m) &&
							b.removeData(a, j, !0)
						}
					}
				}
			}
		},
		trigger : function (a, c, d, e) {
			var h = a.type || a;
			if (!e) {
				a = typeof a === "object" ? a[b.expando] ? a : b.extend(b.Event(h), a) : b.Event(h);
				if (h.indexOf("!") >= 0)
					a.type = h = h.slice(0, -1), a.exclusive = !0;
				d || (a.stopPropagation(), b.event.global[h] && b.each(b.cache, function () {
						var d = this[b.expando];
						d && d.events && d.events[h] && b.event.trigger(a, c, d.handle.elem)
					}));
				if (!d || d.nodeType === 3 || d.nodeType === 8)
					return j;
				a.result = j;
				a.target = d;
				c = b.makeArray(c);
				c.unshift(a)
			}
			a.currentTarget = d;
			(e = b._data(d, "handle")) &&
			e.apply(d, c);
			e = d.parentNode || d.ownerDocument;
			try {
				if ((!d || !d.nodeName || !b.noData[d.nodeName.toLowerCase()]) && d["on" + h] && d["on" + h].apply(d, c) === !1)
					a.result = !1, a.preventDefault()
			} catch (f) {}
			
			if (!a.isPropagationStopped() && e)
				b.event.trigger(a, c, e, !0);
			else if (!a.isDefaultPrevented()) {
				var i,
				e = a.target,
				k = h.replace(V, ""),
				g = b.nodeName(e, "a") && k === "click",
				r = b.event.special[k] || {};
				if ((!r._default || r._default.call(d, a) === !1) && !g && (!e || !e.nodeName || !b.noData[e.nodeName.toLowerCase()])) {
					try {
						if (e[k])
							(i = e["on" + k]) &&
							(e["on" + k] = null), b.event.triggered = !0, e[k]()
					} catch (n) {}
					
					i && (e["on" + k] = i);
					b.event.triggered = !1
				}
			}
		},
		handle : function (a) {
			var c,
			d,
			e,
			h;
			d = [];
			var f = b.makeArray(arguments),
			a = f[0] = b.event.fix(a || g.event);
			a.currentTarget = this;
			c = a.type.indexOf(".") < 0 && !a.exclusive;
			if (!c)
				e = a.type.split("."), a.type = e.shift(), d = e.slice(0).sort(), e = RegExp("(^|\\.)" + d.join("\\.(?:.*\\.)?") + "(\\.|$)");
			a.namespace = a.namespace || d.join(".");
			h = b._data(this, "events");
			d = (h || {})[a.type];
			if (h && d) {
				d = d.slice(0);
				h = 0;
				for (var i = d.length; h < i; h++) {
					var k =
						d[h];
					if (c || e.test(k.namespace)) {
						a.handler = k.handler;
						a.data = k.data;
						a.handleObj = k;
						k = k.handler.apply(this, f);
						if (k !== j)
							a.result = k, k === !1 && (a.preventDefault(), a.stopPropagation());
						if (a.isImmediatePropagationStopped())
							break
					}
				}
			}
			return a.result
		},
		props : "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
		fix : function (a) {
			if (a[b.expando])
				return a;
			for (var c = a, a = b.Event(c), d = this.props.length, e; d; )
				e = this.props[--d], a[e] = c[e];
			if (!a.target)
				a.target = a.srcElement || m;
			if (a.target.nodeType === 3)
				a.target = a.target.parentNode;
			if (!a.relatedTarget && a.fromElement)
				a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
			if (a.pageX == null && a.clientX != null)
				c = m.documentElement, d = m.body, a.pageX = a.clientX + (c && c.scrollLeft || d && d.scrollLeft || 0) - (c && c.clientLeft || d && d.clientLeft || 0), a.pageY = a.clientY + (c && c.scrollTop ||
						d && d.scrollTop || 0) - (c && c.clientTop || d && d.clientTop || 0);
			if (a.which == null && (a.charCode != null || a.keyCode != null))
				a.which = a.charCode != null ? a.charCode : a.keyCode;
			if (!a.metaKey && a.ctrlKey)
				a.metaKey = a.ctrlKey;
			if (!a.which && a.button !== j)
				a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
			return a
		},
		guid : 1E8,
		proxy : b.proxy,
		special : {
			ready : {
				setup : b.bindReady,
				teardown : b.noop
			},
			live : {
				add : function (a) {
					b.event.add(this, B(a.origType, a.selector), b.extend({}, a, {
							handler : I,
							guid : a.handler.guid
						}))
				},
				remove : function (a) {
					b.event.remove(this,
						B(a.origType, a.selector), a)
				}
			},
			beforeunload : {
				setup : function (a, c, d) {
					if (b.isWindow(this))
						this.onbeforeunload = d
				},
				teardown : function (a, c) {
					if (this.onbeforeunload === c)
						this.onbeforeunload = null
				}
			}
		}
	};
	b.removeEvent = m.removeEventListener ? function (a, c, b) {
		a.removeEventListener && a.removeEventListener(c, b, !1)
	}
	 : function (a, c, b) {
		a.detachEvent && a.detachEvent("on" + c, b)
	};
	b.Event = function (a) {
		if (!this.preventDefault)
			return new b.Event(a);
		a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented ||
				a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? z : E) : this.type = a;
		this.timeStamp = b.now();
		this[b.expando] = !0
	};
	b.Event.prototype = {
		preventDefault : function () {
			this.isDefaultPrevented = z;
			var a = this.originalEvent;
			if (a)
				a.preventDefault ? a.preventDefault() : a.returnValue = !1
		},
		stopPropagation : function () {
			this.isPropagationStopped = z;
			var a = this.originalEvent;
			if (a)
				a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
		},
		stopImmediatePropagation : function () {
			this.isImmediatePropagationStopped = z;
			this.stopPropagation()
		},
		isDefaultPrevented : E,
		isPropagationStopped : E,
		isImmediatePropagationStopped : E
	};
	var k = function (a) {
		var c = a.relatedTarget;
		try {
			if (c === m || c.parentNode) {
				for (; c && c !== this; )
					c = c.parentNode;
				if (c !== this)
					a.type = a.data, b.event.handle.apply(this, arguments)
			}
		} catch (d) {}
		
	},
	n = function (a) {
		a.type = a.data;
		b.event.handle.apply(this, arguments)
	};
	b.each({
		mouseenter : "mouseover",
		mouseleave : "mouseout"
	}, function (a, c) {
		b.event.special[a] = {
			setup : function (d) {
				b.event.add(this, c, d && d.selector ? n : k, a)
			},
			teardown : function (a) {
				b.event.remove(this,
					c, a && a.selector ? n : k)
			}
		}
	});
	if (!b.support.submitBubbles)
		b.event.special.submit = {
			setup : function () {
				if (this.nodeName && this.nodeName.toLowerCase() !== "form")
					b.event.add(this, "click.specialSubmit", function (a) {
						var c = a.target,
						d = c.type;
						(d === "submit" || d === "image") && b(c).closest("form").length && A("submit", this, arguments)
					}), b.event.add(this, "keypress.specialSubmit", function (a) {
						var c = a.target,
						d = c.type;
						(d === "text" || d === "password") && b(c).closest("form").length && a.keyCode === 13 && A("submit", this, arguments)
					});
				else
					return !1
			},
			teardown : function () {
				b.event.remove(this, ".specialSubmit")
			}
		};
	if (!b.support.changeBubbles) {
		var y,
		x = function (a) {
			var c = a.type,
			d = a.value;
			if (c === "radio" || c === "checkbox")
				d = a.checked;
			else if (c === "select-multiple")
				d = a.selectedIndex > -1 ? b.map(a.options, function (a) {
						return a.selected
					}).join("-") : "";
			else if (a.nodeName.toLowerCase() === "select")
				d = a.selectedIndex;
			return d
		},
		q = function (a, c) {
			var d = a.target,
			e,
			h;
			if (ca.test(d.nodeName) && !d.readOnly && (e = b._data(d, "_change_data"), h = x(d), (a.type !== "focusout" || d.type !== "radio") &&
					b._data(d, "_change_data", h), !(e === j || h === e)))
				if (e != null || h)
					a.type = "change", a.liveFired = j, b.event.trigger(a, c, d)
		};
		b.event.special.change = {
			filters : {
				focusout : q,
				beforedeactivate : q,
				click : function (a) {
					var c = a.target,
					b = c.type;
					(b === "radio" || b === "checkbox" || c.nodeName.toLowerCase() === "select") && q.call(this, a)
				},
				keydown : function (a) {
					var c = a.target,
					b = c.type;
					(a.keyCode === 13 && c.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (b === "checkbox" || b === "radio") || b === "select-multiple") && q.call(this, a)
				},
				beforeactivate : function (a) {
					a =
						a.target;
					b._data(a, "_change_data", x(a))
				}
			},
			setup : function () {
				if (this.type === "file")
					return !1;
				for (var a in y)
					b.event.add(this, a + ".specialChange", y[a]);
				return ca.test(this.nodeName)
			},
			teardown : function () {
				b.event.remove(this, ".specialChange");
				return ca.test(this.nodeName)
			}
		};
		y = b.event.special.change.filters;
		y.focus = y.beforeactivate
	}
	m.addEventListener && b.each({
		focus : "focusin",
		blur : "focusout"
	}, function (a, c) {
		function d(a) {
			a = b.event.fix(a);
			a.type = c;
			return b.event.handle.call(this, a)
		}
		b.event.special[c] = {
			setup : function () {
				this.addEventListener(a,
					d, !0)
			},
			teardown : function () {
				this.removeEventListener(a, d, !0)
			}
		}
	});
	b.each(["bind", "one"], function (a, c) {
		b.fn[c] = function (a, e, h) {
			if (typeof a === "object") {
				for (var f in a)
					this[c](f, e, a[f], h);
				return this
			}
			if (b.isFunction(e) || e === !1)
				h = e, e = j;
			var i = c === "one" ? b.proxy(h, function (a) {
					b(this).unbind(a, i);
					return h.apply(this, arguments)
				}) : h;
			if (a === "unload" && c !== "one")
				this.one(a, e, h);
			else {
				f = 0;
				for (var k = this.length; f < k; f++)
					b.event.add(this[f], a, i, e)
			}
			return this
		}
	});
	b.fn.extend({
		unbind : function (a, c) {
			if (typeof a === "object" &&
				!a.preventDefault)
				for (var d in a)
					this.unbind(d, a[d]);
			else {
				d = 0;
				for (var e = this.length; d < e; d++)
					b.event.remove(this[d], a, c)
			}
			return this
		},
		delegate : function (a, c, b, e) {
			return this.live(c, b, e, a)
		},
		undelegate : function (a, c, b) {
			return arguments.length === 0 ? this.unbind("live") : this.die(c, null, b, a)
		},
		trigger : function (a, c) {
			return this.each(function () {
				b.event.trigger(a, c, this)
			})
		},
		triggerHandler : function (a, c) {
			if (this[0]) {
				var d = b.Event(a);
				d.preventDefault();
				d.stopPropagation();
				b.event.trigger(d, c, this[0]);
				return d.result
			}
		},
		toggle : function (a) {
			for (var c = arguments, d = 1; d < c.length; )
				b.proxy(a, c[d++]);
			return this.click(b.proxy(a, function (e) {
					var h = (b._data(this, "lastToggle" + a.guid) || 0) % d;
					b._data(this, "lastToggle" + a.guid, h + 1);
					e.preventDefault();
					return c[h].apply(this, arguments) || !1
				}))
		},
		hover : function (a, c) {
			return this.mouseenter(a).mouseleave(c || a)
		}
	});
	var H = {
		focus : "focusin",
		blur : "focusout",
		mouseenter : "mouseover",
		mouseleave : "mouseout"
	};
	b.each(["live", "die"], function (a, c) {
		b.fn[c] = function (a, e, h, f) {
			var i,
			k = 0,
			g,
			r,
			n = f || this.selector,
			f = f ? this : b(this.context);
			if (typeof a === "object" && !a.preventDefault) {
				for (i in a)
					f[c](i, e, a[i], n);
				return this
			}
			b.isFunction(e) && (h = e, e = j);
			for (a = (a || "").split(" "); (i = a[k++]) != null; )
				if (g = V.exec(i), r = "", g && (r = g[0], i = i.replace(V, "")), i === "hover")
					a.push("mouseenter" + r, "mouseleave" + r);
				else if (g = i, i === "focus" || i === "blur" ? (a.push(H[i] + r), i += r) : i = (H[i] || i) + r, c === "live") {
					r = 0;
					for (var y = f.length; r < y; r++)
						b.event.add(f[r], "live." + B(i, n), {
							data : e,
							selector : n,
							handler : h,
							origType : i,
							origHandler : h,
							preType : g
						})
				} else
					f.unbind("live." +
						B(i, n), h);
			return this
		}
	});
	b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, c) {
		b.fn[c] = function (a, b) {
			b == null && (b = a, a = null);
			return arguments.length > 0 ? this.bind(c, a, b) : this.trigger(c)
		};
		b.attrFn && (b.attrFn[c] = !0)
	});
	(function () {
		function a(a, c, b, d, e, h) {
			for (var e = 0, f = d.length; e < f; e++) {
				var o = d[e];
				if (o) {
					for (var i = !1, o = o[a]; o; ) {
						if (o.sizcache ===
							b) {
							i = d[o.sizset];
							break
						}
						if (o.nodeType === 1 && !h)
							o.sizcache = b, o.sizset = e;
						if (o.nodeName.toLowerCase() === c) {
							i = o;
							break
						}
						o = o[a]
					}
					d[e] = i
				}
			}
		}
		function c(a, c, b, d, e, h) {
			for (var e = 0, f = d.length; e < f; e++) {
				var o = d[e];
				if (o) {
					for (var i = !1, o = o[a]; o; ) {
						if (o.sizcache === b) {
							i = d[o.sizset];
							break
						}
						if (o.nodeType === 1) {
							if (!h)
								o.sizcache = b, o.sizset = e;
							if (typeof c !== "string") {
								if (o === c) {
									i = !0;
									break
								}
							} else if (r.filter(c, [o]).length > 0) {
								i = o;
								break
							}
						}
						o = o[a]
					}
					d[e] = i
				}
			}
		}
		var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
		e = 0,
		h = Object.prototype.toString,
		f = !1,
		i = !0,
		k = /\\/g,
		g = /\W/;
		[0, 0].sort(function () {
			i = !1;
			return 0
		});
		var r = function (a, c, b, e) {
			var b = b || [],
			f = c = c || m;
			if (c.nodeType !== 1 && c.nodeType !== 9)
				return [];
			if (!a || typeof a !== "string")
				return b;
			var o,
			i,
			k,
			F,
			g,
			j = !0,
			q = r.isXML(c),
			l = [],
			M = a;
			do
				if (d.exec(""), o = d.exec(M))
					if (M = o[3], l.push(o[1]), o[2]) {
						F = o[3];
						break
					}
			while (o);
			if (l.length > 1 && y.exec(a))
				if (l.length === 2 && n.relative[l[0]])
					i = w(l[0] + l[1], c);
				else
					for (i = n.relative[l[0]] ? [c] : r(l.shift(), c); l.length; )
						a = l.shift(), n.relative[a] && (a +=
							l.shift()), i = w(a, i);
			else if (!e && l.length > 1 && c.nodeType === 9 && !q && n.match.ID.test(l[0]) && !n.match.ID.test(l[l.length - 1]) && (o = r.find(l.shift(), c, q), c = o.expr ? r.filter(o.expr, o.set)[0] : o.set[0]), c) {
				o = e ? {
					expr : l.pop(),
					set : x(e)
				}
				 : r.find(l.pop(), l.length === 1 && (l[0] === "~" || l[0] === "+") && c.parentNode ? c.parentNode : c, q);
				i = o.expr ? r.filter(o.expr, o.set) : o.set;
				for (l.length > 0 ? k = x(i) : j = !1; l.length; )
					o = g = l.pop(), n.relative[g] ? o = l.pop() : g = "", o == null && (o = c), n.relative[g](k, o, q)
			} else
				k = [];
			k || (k = i);
			k || r.error(g || a);
			if (h.call(k) ===
				"[object Array]")
				if (j)
					if (c && c.nodeType === 1)
						for (a = 0; k[a] != null; a++)
							k[a] && (k[a] === !0 || k[a].nodeType === 1 && r.contains(c, k[a])) && b.push(i[a]);
					else
						for (a = 0; k[a] != null; a++)
							k[a] && k[a].nodeType === 1 && b.push(i[a]);
				else
					b.push.apply(b, k);
			else
				x(k, b);
			F && (r(F, f, b, e), r.uniqueSort(b));
			return b
		};
		r.uniqueSort = function (a) {
			if (u && (f = i, a.sort(u), f))
				for (var c = 1; c < a.length; c++)
					a[c] === a[c - 1] && a.splice(c--, 1);
			return a
		};
		r.matches = function (a, c) {
			return r(a, null, null, c)
		};
		r.matchesSelector = function (a, c) {
			return r(c, null, null, [a]).length >
			0
		};
		r.find = function (a, c, b) {
			var d;
			if (!a)
				return [];
			for (var e = 0, h = n.order.length; e < h; e++) {
				var f,
				o = n.order[e];
				if (f = n.leftMatch[o].exec(a)) {
					var i = f[1];
					f.splice(1, 1);
					if (i.substr(i.length - 1) !== "\\" && (f[1] = (f[1] || "").replace(k, ""), d = n.find[o](f, c, b), d != null)) {
						a = a.replace(n.match[o], "");
						break
					}
				}
			}
			d || (d = typeof c.getElementsByTagName !== "undefined" ? c.getElementsByTagName("*") : []);
			return {
				set : d,
				expr : a
			}
		};
		r.filter = function (a, c, b, d) {
			for (var e, h, f = a, o = [], i = c, k = c && c[0] && r.isXML(c[0]); a && c.length; ) {
				for (var g in n.filter)
					if ((e =
								n.leftMatch[g].exec(a)) != null && e[2]) {
						var F,
						y,
						l = n.filter[g];
						y = e[1];
						h = !1;
						e.splice(1, 1);
						if (y.substr(y.length - 1) !== "\\") {
							i === o && (o = []);
							if (n.preFilter[g])
								if (e = n.preFilter[g](e, i, b, o, d, k)) {
									if (e === !0)
										continue
								} else
									h = F = !0;
							if (e)
								for (var q = 0; (y = i[q]) != null; q++)
									if (y) {
										F = l(y, e, q, i);
										var m = d^!!F;
										b && F != null ? m ? h = !0 : i[q] = !1 : m && (o.push(y), h = !0)
									}
							if (F !== j) {
								b || (i = o);
								a = a.replace(n.match[g], "");
								if (!h)
									return [];
								break
							}
						}
					}
				if (a === f)
					if (h == null)
						r.error(a);
					else
						break;
				f = a
			}
			return i
		};
		r.error = function (a) {
			throw "Syntax error, unrecognized expression: " +
			a;
		};
		var n = r.selectors = {
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
					var b = typeof c === "string",
					d = b && !g.test(c),
					b = b && !d;
					d && (c = c.toLowerCase());
					for (var d = 0, e = a.length, h; d < e; d++)
						if (h = a[d]) {
							for (; (h = h.previousSibling) && h.nodeType !== 1; );
							a[d] = b || h && h.nodeName.toLowerCase() === c ? h || !1 : h === c
						}
					b && r.filter(c,
						a, !0)
				},
				">" : function (a, c) {
					var b,
					d = typeof c === "string",
					e = 0,
					h = a.length;
					if (d && !g.test(c))
						for (c = c.toLowerCase(); e < h; e++) {
							if (b = a[e])
								b = b.parentNode, a[e] = b.nodeName.toLowerCase() === c ? b : !1
						}
					else {
						for (; e < h; e++)
							(b = a[e]) && (a[e] = d ? b.parentNode : b.parentNode === c);
						d && r.filter(c, a, !0)
					}
				},
				"" : function (b, d, h) {
					var f,
					o = e++,
					i = c;
					typeof d === "string" && !g.test(d) && (f = d = d.toLowerCase(), i = a);
					i("parentNode", d, o, b, f, h)
				},
				"~" : function (b, d, h) {
					var f,
					o = e++,
					i = c;
					typeof d === "string" && !g.test(d) && (f = d = d.toLowerCase(), i = a);
					i("previousSibling",
						d, o, b, f, h)
				}
			},
			find : {
				ID : function (a, c, b) {
					if (typeof c.getElementById !== "undefined" && !b)
						return (a = c.getElementById(a[1])) && a.parentNode ? [a] : []
				},
				NAME : function (a, c) {
					if (typeof c.getElementsByName !== "undefined") {
						for (var b = [], d = c.getElementsByName(a[1]), e = 0, h = d.length; e < h; e++)
							d[e].getAttribute("name") === a[1] && b.push(d[e]);
						return b.length === 0 ? null : b
					}
				},
				TAG : function (a, c) {
					if (typeof c.getElementsByTagName !== "undefined")
						return c.getElementsByTagName(a[1])
				}
			},
			preFilter : {
				CLASS : function (a, c, b, d, e, h) {
					a = " " + a[1].replace(k,
							"") + " ";
					if (h)
						return a;
					for (var h = 0, f; (f = c[h]) != null; h++)
						f && (e^(f.className && (" " + f.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? b || d.push(f) : b && (c[h] = !1));
					return !1
				},
				ID : function (a) {
					return a[1].replace(k, "")
				},
				TAG : function (a) {
					return a[1].replace(k, "").toLowerCase()
				},
				CHILD : function (a) {
					if (a[1] === "nth") {
						a[2] || r.error(a[0]);
						a[2] = a[2].replace(/^\+|\s*/g, "");
						var c = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
						a[2] = c[1] + (c[2] || 1) - 0;
						a[3] = c[3] - 0
					} else
						a[2] && r.error(a[0]);
					a[0] = e++;
					return a
				},
				ATTR : function (a, c, b, d, e, h) {
					c = a[1] = a[1].replace(k, "");
					!h && n.attrMap[c] && (a[1] = n.attrMap[c]);
					a[4] = (a[4] || a[5] || "").replace(k, "");
					a[2] === "~=" && (a[4] = " " + a[4] + " ");
					return a
				},
				PSEUDO : function (a, c, b, e, h) {
					if (a[1] === "not")
						if ((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))
							a[3] = r(a[3], null, null, c);
						else
							return a = r.filter(a[3], c, b, 1^h), b || e.push.apply(e, a), !1;
					else if (n.match.POS.test(a[0]) || n.match.CHILD.test(a[0]))
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
				has : function (a, c, b) {
					return !!r(b[3], a).length
				},
				header : function (a) {
					return /h\d/i.test(a.nodeName)
				},
				text : function (a) {
					return "text" === a.getAttribute("type")
				},
				radio : function (a) {
					return "radio" === a.type
				},
				checkbox : function (a) {
					return "checkbox" ===
					a.type
				},
				file : function (a) {
					return "file" === a.type
				},
				password : function (a) {
					return "password" === a.type
				},
				submit : function (a) {
					return "submit" === a.type
				},
				image : function (a) {
					return "image" === a.type
				},
				reset : function (a) {
					return "reset" === a.type
				},
				button : function (a) {
					return "button" === a.type || a.nodeName.toLowerCase() === "button"
				},
				input : function (a) {
					return /input|select|textarea|button/i.test(a.nodeName)
				}
			},
			setFilters : {
				first : function (a, c) {
					return c === 0
				},
				last : function (a, c, b, d) {
					return c === d.length - 1
				},
				even : function (a, c) {
					return c % 2 ===
					0
				},
				odd : function (a, c) {
					return c % 2 === 1
				},
				lt : function (a, c, b) {
					return c < b[3] - 0
				},
				gt : function (a, c, b) {
					return c > b[3] - 0
				},
				nth : function (a, c, b) {
					return b[3] - 0 === c
				},
				eq : function (a, c, b) {
					return b[3] - 0 === c
				}
			},
			filter : {
				PSEUDO : function (a, c, b, d) {
					var e = c[1],
					h = n.filters[e];
					if (h)
						return h(a, b, c, d);
					else if (e === "contains")
						return (a.textContent || a.innerText || r.getText([a]) || "").indexOf(c[3]) >= 0;
					else if (e === "not") {
						c = c[3];
						b = 0;
						for (d = c.length; b < d; b++)
							if (c[b] === a)
								return !1;
						return !0
					} else
						r.error(e)
				},
				CHILD : function (a, c) {
					var b = c[1],
					d = a;
					switch (b) {
					case "only":
					case "first":
						for (; d =
								d.previousSibling; )
							if (d.nodeType === 1)
								return !1;
						if (b === "first")
							return !0;
						d = a;
					case "last":
						for (; d = d.nextSibling; )
							if (d.nodeType === 1)
								return !1;
						return !0;
					case "nth":
						var b = c[2],
						e = c[3];
						if (b === 1 && e === 0)
							return !0;
						var h = c[0],
						f = a.parentNode;
						if (f && (f.sizcache !== h || !a.nodeIndex)) {
							for (var o = 0, d = f.firstChild; d; d = d.nextSibling)
								if (d.nodeType === 1)
									d.nodeIndex = ++o;
							f.sizcache = h
						}
						d = a.nodeIndex - e;
						return b === 0 ? d === 0 : d % b === 0 && d / b >= 0
					}
				},
				ID : function (a, c) {
					return a.nodeType === 1 && a.getAttribute("id") === c
				},
				TAG : function (a, c) {
					return c ===
					"*" && a.nodeType === 1 || a.nodeName.toLowerCase() === c
				},
				CLASS : function (a, c) {
					return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(c) > -1
				},
				ATTR : function (a, c) {
					var b = c[1],
					b = n.attrHandle[b] ? n.attrHandle[b](a) : a[b] != null ? a[b] : a.getAttribute(b),
					d = b + "",
					e = c[2],
					h = c[4];
					return b == null ? e === "!=" : e === "=" ? d === h : e === "*=" ? d.indexOf(h) >= 0 : e === "~=" ? (" " + d + " ").indexOf(h) >= 0 : !h ? d && b !== !1 : e === "!=" ? d !== h : e === "^=" ? d.indexOf(h) === 0 : e === "$=" ? d.substr(d.length - h.length) === h : e === "|=" ? d === h || d.substr(0, h.length + 1) === h + "-" :
					!1
				},
				POS : function (a, c, b, d) {
					var e = n.setFilters[c[2]];
					if (e)
						return e(a, b, c, d)
				}
			}
		},
		y = n.match.POS,
		q = function (a, c) {
			return "\\" + (c - 0 + 1)
		},
		l;
		for (l in n.match)
			n.match[l] = RegExp(n.match[l].source + /(?![^\[]*\])(?![^\(]*\))/.source), n.leftMatch[l] = RegExp(/(^(?:.|\r|\n)*?)/.source + n.match[l].source.replace(/\\(\d+)/g, q));
		var x = function (a, c) {
			a = Array.prototype.slice.call(a, 0);
			if (c)
				return c.push.apply(c, a), c;
			return a
		};
		try {
			Array.prototype.slice.call(m.documentElement.childNodes, 0)
		} catch (H) {
			x = function (a, c) {
				var b = 0,
				d = c ||
					[];
				if (h.call(a) === "[object Array]")
					Array.prototype.push.apply(d, a);
				else if (typeof a.length === "number")
					for (var e = a.length; b < e; b++)
						d.push(a[b]);
				else
					for (; a[b]; b++)
						d.push(a[b]);
				return d
			}
		}
		var u,
		p;
		m.documentElement.compareDocumentPosition ? u = function (a, c) {
			if (a === c)
				return f = !0, 0;
			if (!a.compareDocumentPosition || !c.compareDocumentPosition)
				return a.compareDocumentPosition ? -1 : 1;
			return a.compareDocumentPosition(c) & 4 ? -1 : 1
		}
		 : (u = function (a, c) {
			var b,
			d,
			e = [],
			h = [];
			b = a.parentNode;
			d = c.parentNode;
			var i = b;
			if (a === c)
				return f =
					!0, 0;
			else if (b === d)
				return p(a, c);
			else if (b) {
				if (!d)
					return 1
			} else
				return -1;
			for (; i; )
				e.unshift(i), i = i.parentNode;
			for (i = d; i; )
				h.unshift(i), i = i.parentNode;
			b = e.length;
			d = h.length;
			for (i = 0; i < b && i < d; i++)
				if (e[i] !== h[i])
					return p(e[i], h[i]);
			return i === b ? p(a, h[i], -1) : p(e[i], c, 1)
		}, p = function (a, c, b) {
			if (a === c)
				return b;
			for (a = a.nextSibling; a; ) {
				if (a === c)
					return -1;
				a = a.nextSibling
			}
			return 1
		});
		r.getText = function (a) {
			for (var c = "", b, d = 0; a[d]; d++)
				b = a[d], b.nodeType === 3 || b.nodeType === 4 ? c += b.nodeValue : b.nodeType !== 8 && (c += r.getText(b.childNodes));
			return c
		};
		(function () {
			var a = m.createElement("div"),
			c = "script" + (new Date).getTime(),
			b = m.documentElement;
			a.innerHTML = "<a name='" + c + "'/>";
			b.insertBefore(a, b.firstChild);
			if (m.getElementById(c))
				n.find.ID = function (a, c, b) {
					if (typeof c.getElementById !== "undefined" && !b)
						return (c = c.getElementById(a[1])) ? c.id === a[1] || typeof c.getAttributeNode !== "undefined" && c.getAttributeNode("id").nodeValue === a[1] ? [c] : j : []
				},
			n.filter.ID = function (a, c) {
				var b = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
				return a.nodeType ===
				1 && b && b.nodeValue === c
			};
			b.removeChild(a);
			b = a = null
		})();
		(function () {
			var a = m.createElement("div");
			a.appendChild(m.createComment(""));
			if (a.getElementsByTagName("*").length > 0)
				n.find.TAG = function (a, c) {
					var b = c.getElementsByTagName(a[1]);
					if (a[1] === "*") {
						for (var d = [], e = 0; b[e]; e++)
							b[e].nodeType === 1 && d.push(b[e]);
						b = d
					}
					return b
				};
			a.innerHTML = "<a href='#'></a>";
			if (a.firstChild && typeof a.firstChild.getAttribute !== "undefined" && a.firstChild.getAttribute("href") !== "#")
				n.attrHandle.href = function (a) {
					return a.getAttribute("href",
						2)
				};
			a = null
		})();
		m.querySelectorAll && function () {
			var a = r,
			c = m.createElement("div");
			c.innerHTML = "<p class='TEST'></p>";
			if (!(c.querySelectorAll && c.querySelectorAll(".TEST").length === 0)) {
				r = function (c, b, d, e) {
					b = b || m;
					if (!e && !r.isXML(b)) {
						var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(c);
						if (h && (b.nodeType === 1 || b.nodeType === 9))
							if (h[1])
								return x(b.getElementsByTagName(c), d);
							else if (h[2] && n.find.CLASS && b.getElementsByClassName)
								return x(b.getElementsByClassName(h[2]), d);
						if (b.nodeType === 9) {
							if (c === "body" && b.body)
								return x([b.body],
									d);
							else if (h && h[3]) {
								var f = b.getElementById(h[3]);
								if (f && f.parentNode) {
									if (f.id === h[3])
										return x([f], d)
								} else
									return x([], d)
							}
							try {
								return x(b.querySelectorAll(c), d)
							} catch (o) {}
							
						} else if (b.nodeType === 1 && b.nodeName.toLowerCase() !== "object") {
							var h = b,
							i = (f = b.getAttribute("id")) || "__sizzle__",
							k = b.parentNode,
							g = /^\s*[+~]/.test(c);
							f ? i = i.replace(/'/g, "\\$&") : b.setAttribute("id", i);
							if (g && k)
								b = b.parentNode;
							try {
								if (!g || k)
									return x(b.querySelectorAll("[id='" + i + "'] " + c), d)
							} catch (F) {}
							
							finally {
								f || h.removeAttribute("id")
							}
						}
					}
					return a(c,
						b, d, e)
				};
				for (var b in a)
					r[b] = a[b];
				c = null
			}
		}
		();
		(function () {
			var a = m.documentElement,
			c = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector,
			b = !1;
			try {
				c.call(m.documentElement, "[test!='']:sizzle")
			} catch (d) {
				b = !0
			}
			if (c)
				r.matchesSelector = function (a, d) {
					d = d.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!r.isXML(a))
						try {
							if (b || !n.match.PSEUDO.test(d) && !/!=/.test(d))
								return c.call(a, d)
						} catch (e) {}
						
					return r(d, null, null, [a]).length > 0
				}
		})();
		(function () {
			var a = m.createElement("div");
			a.innerHTML =
				"<div class='test e'></div><div class='test'></div>";
			if (a.getElementsByClassName && a.getElementsByClassName("e").length !== 0 && (a.lastChild.className = "e", a.getElementsByClassName("e").length !== 1))
				n.order.splice(1, 0, "CLASS"), n.find.CLASS = function (a, c, b) {
					if (typeof c.getElementsByClassName !== "undefined" && !b)
						return c.getElementsByClassName(a[1])
				},
			a = null
		})();
		r.contains = m.documentElement.contains ? function (a, c) {
			return a !== c && (a.contains ? a.contains(c) : !0)
		}
		 : m.documentElement.compareDocumentPosition ? function (a,
			c) {
			return !!(a.compareDocumentPosition(c) & 16)
		}
		 : function () {
			return !1
		};
		r.isXML = function (a) {
			return (a = (a ? a.ownerDocument || a : 0).documentElement) ? a.nodeName !== "HTML" : !1
		};
		var w = function (a, c) {
			for (var b, d = [], e = "", h = c.nodeType ? [c] : c; b = n.match.PSEUDO.exec(a); )
				e += b[0], a = a.replace(n.match.PSEUDO, "");
			a = n.relative[a] ? a + "*" : a;
			b = 0;
			for (var f = h.length; b < f; b++)
				r(a, h[b], d);
			return r.filter(e, d)
		};
		b.find = r;
		b.expr = r.selectors;
		b.expr[":"] = b.expr.filters;
		b.unique = r.uniqueSort;
		b.text = r.getText;
		b.isXMLDoc = r.isXML;
		b.contains = r.contains
	})();
	var L = /Until$/,
	W = /^(?:parents|prevUntil|prevAll)/,
	D = /,/,
	K = /^.[^:#\[\.,]*$/,
	S = Array.prototype.slice,
	Z = b.expr.match.POS,
	Ea = {
		children : !0,
		contents : !0,
		next : !0,
		prev : !0
	};
	b.fn.extend({
		find : function (a) {
			for (var c = this.pushStack("", "find", a), d = 0, e = 0, h = this.length; e < h; e++)
				if (d = c.length, b.find(a, this[e], c), e > 0)
					for (var f = d; f < c.length; f++)
						for (var i = 0; i < d; i++)
							if (c[i] === c[f]) {
								c.splice(f--, 1);
								break
							}
			return c
		},
		has : function (a) {
			var c = b(a);
			return this.filter(function () {
				for (var a = 0, e = c.length; a < e; a++)
					if (b.contains(this,
							c[a]))
						return !0
			})
		},
		not : function (a) {
			return this.pushStack(u(this, a, !1), "not", a)
		},
		filter : function (a) {
			return this.pushStack(u(this, a, !0), "filter", a)
		},
		is : function (a) {
			return !!a && b.filter(a, this).length > 0
		},
		closest : function (a, c) {
			var d = [],
			e,
			h,
			f = this[0];
			if (b.isArray(a)) {
				var i,
				k = {},
				n = 1;
				if (f && a.length) {
					e = 0;
					for (h = a.length; e < h; e++)
						i = a[e], k[i] || (k[i] = b.expr.match.POS.test(i) ? b(i, c || this.context) : i);
					for (; f && f.ownerDocument && f !== c; ) {
						for (i in k)
							e = k[i], (e.jquery ? e.index(f) > -1 : b(f).is(e)) && d.push({
								selector : i,
								elem : f,
								level : n
							});
						f = f.parentNode;
						n++
					}
				}
				return d
			}
			i = Z.test(a) ? b(a, c || this.context) : null;
			e = 0;
			for (h = this.length; e < h; e++)
				for (f = this[e]; f; )
					if (i ? i.index(f) > -1 : b.find.matchesSelector(f, a)) {
						d.push(f);
						break
					} else if (f = f.parentNode, !f || !f.ownerDocument || f === c)
						break;
			d = d.length > 1 ? b.unique(d) : d;
			return this.pushStack(d, "closest", a)
		},
		index : function (a) {
			if (!a || typeof a === "string")
				return b.inArray(this[0], a ? b(a) : this.parent().children());
			return b.inArray(a.jquery ? a[0] : a, this)
		},
		add : function (a, c) {
			var d = typeof a === "string" ? b(a,
					c) : b.makeArray(a),
			e = b.merge(this.get(), d);
			return this.pushStack(!d[0] || !d[0].parentNode || d[0].parentNode.nodeType === 11 || !e[0] || !e[0].parentNode || e[0].parentNode.nodeType === 11 ? e : b.unique(e))
		},
		andSelf : function () {
			return this.add(this.prevObject)
		}
	});
	b.each({
		parent : function (a) {
			return (a = a.parentNode) && a.nodeType !== 11 ? a : null
		},
		parents : function (a) {
			return b.dir(a, "parentNode")
		},
		parentsUntil : function (a, c, d) {
			return b.dir(a, "parentNode", d)
		},
		next : function (a) {
			return b.nth(a, 2, "nextSibling")
		},
		prev : function (a) {
			return b.nth(a,
				2, "previousSibling")
		},
		nextAll : function (a) {
			return b.dir(a, "nextSibling")
		},
		prevAll : function (a) {
			return b.dir(a, "previousSibling")
		},
		nextUntil : function (a, c, d) {
			return b.dir(a, "nextSibling", d)
		},
		prevUntil : function (a, c, d) {
			return b.dir(a, "previousSibling", d)
		},
		siblings : function (a) {
			return b.sibling(a.parentNode.firstChild, a)
		},
		children : function (a) {
			return b.sibling(a.firstChild)
		},
		contents : function (a) {
			return b.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : b.makeArray(a.childNodes)
		}
	}, function (a,
			c) {
		b.fn[a] = function (d, e) {
			var h = b.map(this, c, d),
			f = S.call(arguments);
			L.test(a) || (e = d);
			e && typeof e === "string" && (h = b.filter(e, h));
			h = this.length > 1 && !Ea[a] ? b.unique(h) : h;
			if ((this.length > 1 || D.test(e)) && W.test(a))
				h = h.reverse();
			return this.pushStack(h, a, f.join(","))
		}
	});
	b.extend({
		filter : function (a, c, d) {
			d && (a = ":not(" + a + ")");
			return c.length === 1 ? b.find.matchesSelector(c[0], a) ? [c[0]] : [] : b.find.matches(a, c)
		},
		dir : function (a, c, d) {
			for (var e = [], a = a[c]; a && a.nodeType !== 9 && (d === j || a.nodeType !== 1 || !b(a).is(d)); )
				a.nodeType ===
				1 && e.push(a), a = a[c];
			return e
		},
		nth : function (a, c, b) {
			for (var c = c || 1, e = 0; a; a = a[b])
				if (a.nodeType === 1 && ++e === c)
					break;
			return a
		},
		sibling : function (a, c) {
			for (var b = []; a; a = a.nextSibling)
				a.nodeType === 1 && a !== c && b.push(a);
			return b
		}
	});
	var X = / jQuery\d+="(?:\d+|null)"/g,
	ma = /^\s+/,
	Ha = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	sa = /<([\w:]+)/,
	Xa = /<tbody/i,
	Ya = /<|&#?\w+;/,
	Ia = /<(?:script|object|embed|option|style)/i,
	Ja = /checked\s*(?:[^=]|=\s*.checked.)/i,
	T = {
		option : [1, "<select multiple='multiple'>",
			"</select>"],
		legend : [1, "<fieldset>", "</fieldset>"],
		thead : [1, "<table>", "</table>"],
		tr : [2, "<table><tbody>", "</tbody></table>"],
		td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		col : [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		area : [1, "<map>", "</map>"],
		_default : [0, "", ""]
	};
	T.optgroup = T.option;
	T.tbody = T.tfoot = T.colgroup = T.caption = T.thead;
	T.th = T.td;
	if (!b.support.htmlSerialize)
		T._default = [1, "div<div>", "</div>"];
	b.fn.extend({
		text : function (a) {
			if (b.isFunction(a))
				return this.each(function (c) {
					var d =
						b(this);
					d.text(a.call(this, c, d.text()))
				});
			if (typeof a !== "object" && a !== j)
				return this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(a));
			return b.text(this)
		},
		wrapAll : function (a) {
			if (b.isFunction(a))
				return this.each(function (c) {
					b(this).wrapAll(a.call(this, c))
				});
			if (this[0]) {
				var c = b(a, this[0].ownerDocument).eq(0).clone(!0);
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
			if (b.isFunction(a))
				return this.each(function (c) {
					b(this).wrapInner(a.call(this, c))
				});
			return this.each(function () {
				var c = b(this),
				d = c.contents();
				d.length ? d.wrapAll(a) : c.append(a)
			})
		},
		wrap : function (a) {
			return this.each(function () {
				b(this).wrapAll(a)
			})
		},
		unwrap : function () {
			return this.parent().each(function () {
				b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
			}).end()
		},
		append : function () {
			return this.domManip(arguments, !0, function (a) {
				this.nodeType === 1 && this.appendChild(a)
			})
		},
		prepend : function () {
			return this.domManip(arguments,
				!0, function (a) {
				this.nodeType === 1 && this.insertBefore(a, this.firstChild)
			})
		},
		before : function () {
			if (this[0] && this[0].parentNode)
				return this.domManip(arguments, !1, function (a) {
					this.parentNode.insertBefore(a, this)
				});
			else if (arguments.length) {
				var a = b(arguments[0]);
				a.push.apply(a, this.toArray());
				return this.pushStack(a, "before", arguments)
			}
		},
		after : function () {
			if (this[0] && this[0].parentNode)
				return this.domManip(arguments, !1, function (a) {
					this.parentNode.insertBefore(a, this.nextSibling)
				});
			else if (arguments.length) {
				var a =
					this.pushStack(this, "after", arguments);
				a.push.apply(a, b(arguments[0]).toArray());
				return a
			}
		},
		remove : function (a, c) {
			for (var d = 0, e; (e = this[d]) != null; d++)
				if (!a || b.filter(a, [e]).length)
					!c && e.nodeType === 1 && (b.cleanData(e.getElementsByTagName("*")), b.cleanData([e])), e.parentNode && e.parentNode.removeChild(e);
			return this
		},
		empty : function () {
			for (var a = 0, c; (c = this[a]) != null; a++)
				for (c.nodeType === 1 && b.cleanData(c.getElementsByTagName("*")); c.firstChild; )
					c.removeChild(c.firstChild);
			return this
		},
		clone : function (a, c) {
			a =
				a == null ? !1 : a;
			c = c == null ? a : c;
			return this.map(function () {
				return b.clone(this, a, c)
			})
		},
		html : function (a) {
			if (a === j)
				return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(X, "") : null;
			else if (typeof a === "string" && !Ia.test(a) && (b.support.leadingWhitespace || !ma.test(a)) && !T[(sa.exec(a) || ["", ""])[1].toLowerCase()]) {
				a = a.replace(Ha, "<$1></$2>");
				try {
					for (var c = 0, d = this.length; c < d; c++)
						if (this[c].nodeType === 1)
							b.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a
				} catch (e) {
					this.empty().append(a)
				}
			} else
				b.isFunction(a) ?
				this.each(function (c) {
					var d = b(this);
					d.html(a.call(this, c, d.html()))
				}) : this.empty().append(a);
			return this
		},
		replaceWith : function (a) {
			if (this[0] && this[0].parentNode) {
				if (b.isFunction(a))
					return this.each(function (c) {
						var d = b(this),
						e = d.html();
						d.replaceWith(a.call(this, c, e))
					});
				typeof a !== "string" && (a = b(a).detach());
				return this.each(function () {
					var c = this.nextSibling,
					d = this.parentNode;
					b(this).remove();
					c ? b(c).before(a) : b(d).append(a)
				})
			} else
				return this.pushStack(b(b.isFunction(a) ? a() : a), "replaceWith", a)
		},
		detach : function (a) {
			return this.remove(a,
				!0)
		},
		domManip : function (a, c, d) {
			var e,
			h,
			f,
			i = a[0],
			k = [];
			if (!b.support.checkClone && arguments.length === 3 && typeof i === "string" && Ja.test(i))
				return this.each(function () {
					b(this).domManip(a, c, d, !0)
				});
			if (b.isFunction(i))
				return this.each(function (e) {
					var h = b(this);
					a[0] = i.call(this, e, c ? h.html() : j);
					h.domManip(a, c, d)
				});
			if (this[0]) {
				e = i && i.parentNode;
				e = b.support.parentNode && e && e.nodeType === 11 && e.childNodes.length === this.length ? {
					fragment : e
				}
				 : b.buildFragment(a, this, k);
				f = e.fragment;
				if (h = f.childNodes.length === 1 ? f = f.firstChild :
						f.firstChild) {
					c = c && b.nodeName(h, "tr");
					h = 0;
					for (var n = this.length, g = n - 1; h < n; h++)
						d.call(c ? b.nodeName(this[h], "table") ? this[h].getElementsByTagName("tbody")[0] || this[h].appendChild(this[h].ownerDocument.createElement("tbody")) : this[h] : this[h], e.cacheable || n > 1 && h < g ? b.clone(f, !0, !0) : f)
				}
				k.length && b.each(k, O)
			}
			return this
		}
	});
	b.buildFragment = function (a, c, d) {
		var e,
		h,
		f,
		c = c && c[0] ? c[0].ownerDocument || c[0] : m;
		if (a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && c === m && a[0].charAt(0) === "<" && !Ia.test(a[0]) && (b.support.checkClone ||
				!Ja.test(a[0])))
			h = !0, (f = b.fragments[a[0]]) && f !== 1 && (e = f);
		e || (e = c.createDocumentFragment(), b.clean(a, c, e, d));
		h && (b.fragments[a[0]] = f ? e : 1);
		return {
			fragment : e,
			cacheable : h
		}
	};
	b.fragments = {};
	b.each({
		appendTo : "append",
		prependTo : "prepend",
		insertBefore : "before",
		insertAfter : "after",
		replaceAll : "replaceWith"
	}, function (a, c) {
		b.fn[a] = function (d) {
			var e = [],
			d = b(d),
			h = this.length === 1 && this[0].parentNode;
			if (h && h.nodeType === 11 && h.childNodes.length === 1 && d.length === 1)
				return d[c](this[0]), this;
			else {
				for (var h = 0, f = d.length; h <
					f; h++) {
					var i = (h > 0 ? this.clone(!0) : this).get();
					b(d[h])[c](i);
					e = e.concat(i)
				}
				return this.pushStack(e, a, d.selector)
			}
		}
	});
	b.extend({
		clone : function (a, c, d) {
			var e = a.cloneNode(!0),
			h,
			f,
			i;
			if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !b.isXMLDoc(a)) {
				J(a, e);
				h = P(a);
				f = P(e);
				for (i = 0; h[i]; ++i)
					J(h[i], f[i])
			}
			if (c && (w(a, e), d)) {
				h = P(a);
				f = P(e);
				for (i = 0; h[i]; ++i)
					w(h[i], f[i])
			}
			return e
		},
		clean : function (a, c, d, e) {
			c = c || m;
			typeof c.createElement === "undefined" && (c = c.ownerDocument || c[0] &&
					c[0].ownerDocument || m);
			for (var h = [], f = 0, i; (i = a[f]) != null; f++)
				if (typeof i === "number" && (i += ""), i) {
					if (typeof i === "string" && !Ya.test(i))
						i = c.createTextNode(i);
					else if (typeof i === "string") {
						i = i.replace(Ha, "<$1></$2>");
						var k = (sa.exec(i) || ["", ""])[1].toLowerCase(),
						n = T[k] || T._default,
						g = n[0],
						j = c.createElement("div");
						for (j.innerHTML = n[1] + i + n[2]; g--; )
							j = j.lastChild;
						if (!b.support.tbody) {
							g = Xa.test(i);
							k = k === "table" && !g ? j.firstChild && j.firstChild.childNodes : n[1] === "<table>" && !g ? j.childNodes : [];
							for (n = k.length - 1; n >=
								0; --n)
								b.nodeName(k[n], "tbody") && !k[n].childNodes.length && k[n].parentNode.removeChild(k[n])
						}
						!b.support.leadingWhitespace && ma.test(i) && j.insertBefore(c.createTextNode(ma.exec(i)[0]), j.firstChild);
						i = j.childNodes
					}
					i.nodeType ? h.push(i) : h = b.merge(h, i)
				}
			if (d)
				for (f = 0; h[f]; f++)
					e && b.nodeName(h[f], "script") && (!h[f].type || h[f].type.toLowerCase() === "text/javascript") ? e.push(h[f].parentNode ? h[f].parentNode.removeChild(h[f]) : h[f]) : (h[f].nodeType === 1 && h.splice.apply(h, [f + 1, 0].concat(b.makeArray(h[f].getElementsByTagName("script")))),
						d.appendChild(h[f]));
			return h
		},
		cleanData : function (a) {
			for (var c, d, e = b.cache, h = b.expando, f = b.event.special, i = b.support.deleteExpando, k = 0, n; (n = a[k]) != null; k++)
				if (!n.nodeName || !b.noData[n.nodeName.toLowerCase()])
					if (d = n[b.expando]) {
						if ((c = e[d] && e[d][h]) && c.events) {
							for (var g in c.events)
								f[g] ? b.event.remove(n, g) : b.removeEvent(n, g, c.handle);
							if (c.handle)
								c.handle.elem = null
						}
						i ? delete n[b.expando] : n.removeAttribute && n.removeAttribute(b.expando);
						delete e[d]
					}
		}
	});
	var Ka = /alpha\([^)]*\)/i,
	Za = /opacity=([^)]*)/,
	$a = /-([a-z])/ig,
	ab = /([A-Z])/g,
	La = /^-?\d+(?:px)?$/i,
	bb = /^-?\d/,
	cb = {
		position : "absolute",
		visibility : "hidden",
		display : "block"
	},
	Ta = ["Left", "Right"],
	Ua = ["Top", "Bottom"],
	na,
	ea,
	ta,
	db = function (a, c) {
		return c.toUpperCase()
	};
	b.fn.css = function (a, c) {
		if (arguments.length === 2 && c === j)
			return this;
		return b.access(this, a, c, !0, function (a, c, h) {
			return h !== j ? b.style(a, c, h) : b.css(a, c)
		})
	};
	b.extend({
		cssHooks : {
			opacity : {
				get : function (a, c) {
					if (c) {
						var b = na(a, "opacity", "opacity");
						return b === "" ? "1" : b
					} else
						return a.style.opacity
				}
			}
		},
		cssNumber : {
			zIndex : !0,
			fontWeight : !0,
			opacity : !0,
			zoom : !0,
			lineHeight : !0
		},
		cssProps : {
			"float" : b.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style : function (a, c, d, e) {
			if (a && !(a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
				var h,
				f = b.camelCase(c),
				i = a.style,
				k = b.cssHooks[f],
				c = b.cssProps[f] || f;
				if (d !== j) {
					if (!(typeof d === "number" && isNaN(d) || d == null))
						if (typeof d === "number" && !b.cssNumber[f] && (d += "px"), !k || !("set" in k) || (d = k.set(a, d)) !== j)
							try {
								i[c] = d
							} catch (n) {}
							
				} else {
					if (k && "get" in k && (h = k.get(a, !1, e)) !== j)
						return h;
					return i[c]
				}
			}
		},
		css : function (a,
			c, d) {
			var e,
			f = b.camelCase(c),
			i = b.cssHooks[f],
			c = b.cssProps[f] || f;
			if (i && "get" in i && (e = i.get(a, !0, d)) !== j)
				return e;
			else if (na)
				return na(a, c, f)
		},
		swap : function (a, c, b) {
			var e = {},
			f;
			for (f in c)
				e[f] = a.style[f], a.style[f] = c[f];
			b.call(a);
			for (f in c)
				a.style[f] = e[f]
		},
		camelCase : function (a) {
			return a.replace($a, db)
		}
	});
	b.curCSS = b.css;
	b.each(["height", "width"], function (a, c) {
		b.cssHooks[c] = {
			get : function (a, e, f) {
				var i;
				if (e) {
					a.offsetWidth !== 0 ? i = Q(a, c, f) : b.swap(a, cb, function () {
							i = Q(a, c, f)
						});
					if (i <= 0 && (i = na(a, c, c), i === "0px" &&
							ta && (i = ta(a, c, c)), i != null))
						return i === "" || i === "auto" ? "0px" : i;
					if (i < 0 || i == null)
						return i = a.style[c], i === "" || i === "auto" ? "0px" : i;
					return typeof i === "string" ? i : i + "px"
				}
			},
			set : function (a, c) {
				if (La.test(c)) {
					if (c = parseFloat(c), c >= 0)
						return c + "px"
				} else
					return c
			}
		}
	});
	if (!b.support.opacity)
		b.cssHooks.opacity = {
			get : function (a, c) {
				return Za.test((c && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : c ? "1" : ""
			},
			set : function (a, c) {
				var d = a.style;
				d.zoom = 1;
				var e = b.isNaN(c) ? "" : "alpha(opacity=" +
					c * 100 + ")",
				f = d.filter || "";
				d.filter = Ka.test(f) ? f.replace(Ka, e) : d.filter + " " + e
			}
		};
	m.defaultView && m.defaultView.getComputedStyle && (ea = function (a, c, d) {
		var e,
		d = d.replace(ab, "-$1").toLowerCase();
		if (!(c = a.ownerDocument.defaultView))
			return j;
		if (c = c.getComputedStyle(a, null))
			e = c.getPropertyValue(d), e === "" && !b.contains(a.ownerDocument.documentElement, a) && (e = b.style(a, d));
		return e
	});
	m.documentElement.currentStyle && (ta = function (a, c) {
		var b,
		e = a.currentStyle && a.currentStyle[c],
		f = a.runtimeStyle && a.runtimeStyle[c],
		i =
			a.style;
		if (!La.test(e) && bb.test(e)) {
			b = i.left;
			if (f)
				a.runtimeStyle.left = a.currentStyle.left;
			i.left = c === "fontSize" ? "1em" : e || 0;
			e = i.pixelLeft + "px";
			i.left = b;
			if (f)
				a.runtimeStyle.left = f
		}
		return e === "" ? "auto" : e
	});
	na = ea || ta;
	if (b.expr && b.expr.filters)
		b.expr.filters.hidden = function (a) {
			var c = a.offsetHeight;
			return a.offsetWidth === 0 && c === 0 || !b.support.reliableHiddenOffsets && (a.style.display || b.css(a, "display")) === "none"
		},
	b.expr.filters.visible = function (a) {
		return !b.expr.filters.hidden(a)
	};
	var eb = /%20/g,
	Va = /\[\]$/,
	Ma = /\r?\n/g,
	fb = /#.*$/,
	gb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	hb = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	ib = /^(?:GET|HEAD)$/,
	jb = /^\/\//,
	Na = /\?/,
	kb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	lb = /^(?:select|textarea)/i,
	Fa = /\s+/,
	mb = /([?&])_=[^&]*/,
	nb = /(^|\-)([a-z])/g,
	ob = function (a, c, b) {
		return c + b.toUpperCase()
	},
	Oa = /^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,
	Pa = b.fn.load,
	xa = {},
	Qa = {},
	fa,
	ga;
	try {
		fa = m.location.href
	} catch (ub) {
		fa = m.createElement("a"),
		fa.href = "",
		fa = fa.href
	}
	ga = Oa.exec(fa.toLowerCase());
	b.fn.extend({
		load : function (a, c, d) {
			if (typeof a !== "string" && Pa)
				return Pa.apply(this, arguments);
			else if (!this.length)
				return this;
			var e = a.indexOf(" ");
			if (e >= 0)
				var f = a.slice(e, a.length), a = a.slice(0, e);
			e = "GET";
			c && (b.isFunction(c) ? (d = c, c = j) : typeof c === "object" && (c = b.param(c, b.ajaxSettings.traditional), e = "POST"));
			var i = this;
			b.ajax({
				url : a,
				type : e,
				dataType : "html",
				data : c,
				complete : function (a, c, e) {
					e = a.responseText;
					a.isResolved() && (a.done(function (a) {
							e = a
						}), i.html(f ?
							b("<div>").append(e.replace(kb, "")).find(f) : e));
					d && i.each(d, [e, c, a])
				}
			});
			return this
		},
		serialize : function () {
			return b.param(this.serializeArray())
		},
		serializeArray : function () {
			return this.map(function () {
				return this.elements ? b.makeArray(this.elements) : this
			}).filter(function () {
				return this.name && !this.disabled && (this.checked || lb.test(this.nodeName) || hb.test(this.type))
			}).map(function (a, c) {
				var d = b(this).val();
				return d == null ? null : b.isArray(d) ? b.map(d, function (a) {
					return {
						name : c.name,
						value : a.replace(Ma, "\r\n")
					}
				}) : {
					name : c.name,
					value : d.replace(Ma, "\r\n")
				}
			}).get()
		}
	});
	b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, c) {
		b.fn[c] = function (a) {
			return this.bind(c, a)
		}
	});
	b.each(["get", "post"], function (a, c) {
		b[c] = function (a, e, f, i) {
			b.isFunction(e) && (i = i || f, f = e, e = j);
			return b.ajax({
				type : c,
				url : a,
				data : e,
				success : f,
				dataType : i
			})
		}
	});
	b.extend({
		getScript : function (a, c) {
			return b.get(a, j, c, "script")
		},
		getJSON : function (a, c, d) {
			return b.get(a, c, d, "json")
		},
		ajaxSetup : function (a, c) {
			c ? b.extend(!0,
				a, b.ajaxSettings, c) : (c = a, a = b.extend(!0, b.ajaxSettings, c));
			for (var d in {
				context : 1,
				url : 1
			})
				d in c ? a[d] = c[d] : d in b.ajaxSettings && (a[d] = b.ajaxSettings[d]);
			return a
		},
		ajaxSettings : {
			url : fa,
			isLocal : /(?:^file|^widget|\-extension):$/.test(ga[1]),
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
				"*" : "*/*"
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
				"* text" : g.String,
				"text html" : !0,
				"text json" : b.parseJSON,
				"text xml" : b.parseXML
			}
		},
		ajaxPrefilter : C(xa),
		ajaxTransport : C(Qa),
		ajax : function (a, c) {
			function d(a, c, d, q) {
				if (H !== 2) {
					H = 2;
					p && clearTimeout(p);
					x = j;
					l = q || "";
					v.readyState = a ? 4 : 0;
					var m,
					u,
					D;
					if (d) {
						var q = e,
						L = v,
						W = q.contents,
						K = q.dataTypes,
						P = q.responseFields,
						t,
						s,
						A,
						B;
						for (s in P)
							s in d && (L[P[s]] = d[s]);
						for (; K[0] === "*"; )
							K.shift(), t === j && (t = q.mimeType || L.getResponseHeader("content-type"));
						if (t)
							for (s in W)
								if (W[s] &&
									W[s].test(t)) {
									K.unshift(s);
									break
								}
						if (K[0]in d)
							A = K[0];
						else {
							for (s in d) {
								if (!K[0] || q.converters[s + " " + K[0]]) {
									A = s;
									break
								}
								B || (B = s)
							}
							A = A || B
						}
						A ? (A !== K[0] && K.unshift(A), d = d[A]) : d = void 0
					} else
						d = j;
					if (a >= 200 && a < 300 || a === 304) {
						if (e.ifModified) {
							if (t = v.getResponseHeader("Last-Modified"))
								b.lastModified[y] = t;
							if (t = v.getResponseHeader("Etag"))
								b.etag[y] = t
						}
						if (a === 304)
							c = "notmodified", m = !0;
						else
							try {
								t = e;
								t.dataFilter && (d = t.dataFilter(d, t.dataType));
								var I = t.dataTypes;
								s = {};
								var C,
								Z,
								Ea = I.length,
								G,
								S = I[0],
								X,
								E,
								Q,
								J,
								O;
								for (C = 1; C < Ea; C++) {
									if (C ===
										1)
										for (Z in t.converters)
											typeof Z === "string" && (s[Z.toLowerCase()] = t.converters[Z]);
									X = S;
									S = I[C];
									if (S === "*")
										S = X;
									else if (X !== "*" && X !== S) {
										E = X + " " + S;
										Q = s[E] || s["* " + S];
										if (!Q)
											for (J in O = j, s)
												if (G = J.split(" "), G[0] === X || G[0] === "*")
													if (O = s[G[1] + " " + S]) {
														J = s[J];
														J === !0 ? Q = O : O === !0 && (Q = J);
														break
													}
										!Q && !O && b.error("No conversion from " + E.replace(" ", " to "));
										Q !== !0 && (d = Q ? Q(d) : O(J(d)))
									}
								}
								u = d;
								c = "success";
								m = !0
							} catch (z) {
								c = "parsererror",
								D = z
							}
					} else if (D = c, !c || a)
						c = "error", a < 0 && (a = 0);
					v.status = a;
					v.statusText = c;
					m ? k.resolveWith(f,
						[u, c, v]) : k.rejectWith(f, [v, c, D]);
					v.statusCode(g);
					g = j;
					w && i.trigger("ajax" + (m ? "Success" : "Error"), [v, e, m ? u : D]);
					n.resolveWith(f, [v, c]);
					w && (i.trigger("ajaxComplete", [v, e]), --b.active || b.event.trigger("ajaxStop"))
				}
			}
			typeof a === "object" && (c = a, a = j);
			var c = c || {},
			e = b.ajaxSetup({}, c),
			f = e.context || e,
			i = f !== e && (f.nodeType || f instanceof b) ? b(f) : b.event,
			k = b.Deferred(),
			n = b._Deferred(),
			g = e.statusCode || {},
			y,
			q = {},
			l,
			m,
			x,
			p,
			u,
			H = 0,
			w,
			D,
			v = {
				readyState : 0,
				setRequestHeader : function (a, c) {
					H || (q[a.toLowerCase().replace(nb, ob)] = c);
					return this
				},
				getAllResponseHeaders : function () {
					return H === 2 ? l : null
				},
				getResponseHeader : function (a) {
					var c;
					if (H === 2) {
						if (!m)
							for (m = {}; c = gb.exec(l); )
								m[c[1].toLowerCase()] = c[2];
						c = m[a.toLowerCase()]
					}
					return c === j ? null : c
				},
				overrideMimeType : function (a) {
					if (!H)
						e.mimeType = a;
					return this
				},
				abort : function (a) {
					a = a || "abort";
					x && x.abort(a);
					d(0, a);
					return this
				}
			};
			k.promise(v);
			v.success = v.done;
			v.error = v.fail;
			v.complete = n.done;
			v.statusCode = function (a) {
				if (a) {
					var c;
					if (H < 2)
						for (c in a)
							g[c] = [g[c], a[c]];
					else
						c = a[v.status], v.then(c,
							c)
				}
				return this
			};
			e.url = ((a || e.url) + "").replace(fb, "").replace(jb, ga[1] + "//");
			e.dataTypes = b.trim(e.dataType || "*").toLowerCase().split(Fa);
			if (!e.crossDomain)
				u = Oa.exec(e.url.toLowerCase()), e.crossDomain = !(!u || !(u[1] != ga[1] || u[2] != ga[2] || (u[3] || (u[1] === "http:" ? 80 : 443)) != (ga[3] || (ga[1] === "http:" ? 80 : 443))));
			if (e.data && e.processData && typeof e.data !== "string")
				e.data = b.param(e.data, e.traditional);
			G(xa, e, c, v);
			if (H === 2)
				return !1;
			w = e.global;
			e.type = e.type.toUpperCase();
			e.hasContent = !ib.test(e.type);
			w && b.active++ ===
			0 && b.event.trigger("ajaxStart");
			if (!e.hasContent && (e.data && (e.url += (Na.test(e.url) ? "&" : "?") + e.data), y = e.url, e.cache === !1)) {
				u = b.now();
				var L = e.url.replace(mb, "$1_=" + u);
				e.url = L + (L === e.url ? (Na.test(e.url) ? "&" : "?") + "_=" + u : "")
			}
			if (e.data && e.hasContent && e.contentType !== !1 || c.contentType)
				q["Content-Type"] = e.contentType;
			e.ifModified && (y = y || e.url, b.lastModified[y] && (q["If-Modified-Since"] = b.lastModified[y]), b.etag[y] && (q["If-None-Match"] = b.etag[y]));
			q.Accept = e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] +
				(e.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : e.accepts["*"];
			for (D in e.headers)
				v.setRequestHeader(D, e.headers[D]);
			if (e.beforeSend && (e.beforeSend.call(f, v, e) === !1 || H === 2))
				return v.abort(), !1;
			for (D in {
				success : 1,
				error : 1,
				complete : 1
			})
				v[D](e[D]);
			if (x = G(Qa, e, c, v)) {
				v.readyState = 1;
				w && i.trigger("ajaxSend", [v, e]);
				e.async && e.timeout > 0 && (p = setTimeout(function () {
							v.abort("timeout")
						}, e.timeout));
				try {
					H = 1,
					x.send(q, d)
				} catch (W) {
					status < 2 ? d(-1, W) : b.error(W)
				}
			} else
				d(-1, "No Transport");
			return v
		},
		param : function (a, c) {
			var d = [],
			e = function (a, c) {
				c = b.isFunction(c) ? c() : c;
				d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
			};
			if (c === j)
				c = b.ajaxSettings.traditional;
			if (b.isArray(a) || a.jquery && !b.isPlainObject(a))
				b.each(a, function () {
					e(this.name, this.value)
				});
			else
				for (var f in a)
					ia(f, a[f], c, e);
			return d.join("&").replace(eb, "+")
		}
	});
	b.extend({
		active : 0,
		lastModified : {},
		etag : {}
		
	});
	var pb = b.now(),
	ua = /(\=)\?(&|$)|()\?\?()/i;
	b.ajaxSetup({
		jsonp : "callback",
		jsonpCallback : function () {
			return b.expando + "_" + pb++
		}
	});
	b.ajaxPrefilter("json jsonp",
		function (a, c, d) {
		var e = typeof a.data === "string";
		if (a.dataTypes[0] === "jsonp" || c.jsonpCallback || c.jsonp != null || a.jsonp !== !1 && (ua.test(a.url) || e && ua.test(a.data))) {
			var f,
			i = a.jsonpCallback = b.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
			k = g[i],
			c = a.url,
			n = a.data,
			j = "$1" + i + "$2",
			y = function () {
				g[i] = k;
				if (f && b.isFunction(k))
					g[i](f[0])
			};
			a.jsonp !== !1 && (c = c.replace(ua, j), a.url === c && (e && (n = n.replace(ua, j)), a.data === n && (c += (/\?/.test(c) ? "&" : "?") + a.jsonp + "=" + i)));
			a.url = c;
			a.data = n;
			g[i] = function (a) {
				f = [a]
			};
			d.then(y, y);
			a.converters["script json"] = function () {
				f || b.error(i + " was not called");
				return f[0]
			};
			a.dataTypes[0] = "json";
			return "script"
		}
	});
	b.ajaxSetup({
		accepts : {
			script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents : {
			script : /javascript|ecmascript/
		},
		converters : {
			"text script" : function (a) {
				b.globalEval(a);
				return a
			}
		}
	});
	b.ajaxPrefilter("script", function (a) {
		if (a.cache === j)
			a.cache = !1;
		if (a.crossDomain)
			a.type = "GET", a.global = !1
	});
	b.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var c,
			b = m.head || m.getElementsByTagName("head")[0] || m.documentElement;
			return {
				send : function (e, f) {
					c = m.createElement("script");
					c.async = "async";
					if (a.scriptCharset)
						c.charset = a.scriptCharset;
					c.src = a.url;
					c.onload = c.onreadystatechange = function (a, e) {
						if (!c.readyState || /loaded|complete/.test(c.readyState))
							c.onload = c.onreadystatechange = null, b && c.parentNode && b.removeChild(c), c = j, e || f(200, "success")
					};
					b.insertBefore(c, b.firstChild)
				},
				abort : function () {
					if (c)
						c.onload(0, 1)
				}
			}
		}
	});
	var qb = b.now(),
	ja;
	b.ajaxSettings.xhr = g.ActiveXObject ?
	function () {
		var a;
		if (!(a = !this.isLocal && pa()))
			a : {
				try {
					a = new g.ActiveXObject("Microsoft.XMLHTTP");
					break a
				} catch (c) {}
				
				a = void 0
			}
		return a
	}
	 : pa;
	ea = b.ajaxSettings.xhr();
	b.support.ajax = !!ea;
	b.support.cors = ea && "withCredentials" in ea;
	ea = j;
	b.support.ajax && b.ajaxTransport(function (a) {
		if (!a.crossDomain || b.support.cors) {
			var c;
			return {
				send : function (d, e) {
					var f = a.xhr(),
					i,
					k;
					a.username ? f.open(a.type, a.url, a.async, a.username, a.password) : f.open(a.type, a.url, a.async);
					if (a.xhrFields)
						for (k in a.xhrFields)
							f[k] = a.xhrFields[k];
					a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
					if ((!a.crossDomain || a.hasContent) && !d["X-Requested-With"])
						d["X-Requested-With"] = "XMLHttpRequest";
					try {
						for (k in d)
							f.setRequestHeader(k, d[k])
					} catch (n) {}
					
					f.send(a.hasContent && a.data || null);
					c = function (d, k) {
						var n,
						g,
						y,
						q,
						l;
						try {
							if (c && (k || f.readyState === 4)) {
								c = j;
								if (i)
									f.onreadystatechange = b.noop, delete ja[i];
								if (k)
									f.readyState !== 4 && f.abort();
								else {
									n = f.status;
									y = f.getAllResponseHeaders();
									q = {};
									if ((l = f.responseXML) && l.documentElement)
										q.xml = l;
									q.text = f.responseText;
									try {
										g = f.statusText
									} catch (m) {
										g = ""
									}
									!n && a.isLocal && !a.crossDomain ? n = q.text ? 200 : 404 : n === 1223 && (n = 204)
								}
							}
						} catch (x) {
							k || e(-1, x)
						}
						q && e(n, g, q, y)
					};
					!a.async || f.readyState === 4 ? c() : (ja || (ja = {}, oa()), i = qb++, f.onreadystatechange = ja[i] = c)
				},
				abort : function () {
					c && c(0, 1)
				}
			}
		}
	});
	var ya = {},
	rb = /^(?:toggle|show|hide)$/,
	sb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
	va,
	Ga = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
	b.fn.extend({
		show : function (a,
			c, d) {
			if (a || a === 0)
				return this.animate(s("show", 3), a, c, d);
			else {
				for (var d = 0, e = this.length; d < e; d++) {
					a = this[d];
					c = a.style.display;
					if (!b._data(a, "olddisplay") && c === "none")
						c = a.style.display = "";
					c === "" && b.css(a, "display") === "none" && b._data(a, "olddisplay", qa(a.nodeName))
				}
				for (d = 0; d < e; d++)
					if (a = this[d], c = a.style.display, c === "" || c === "none")
						a.style.display = b._data(a, "olddisplay") || "";
				return this
			}
		},
		hide : function (a, c, d) {
			if (a || a === 0)
				return this.animate(s("hide", 3), a, c, d);
			else {
				a = 0;
				for (c = this.length; a < c; a++)
					d = b.css(this[a],
							"display"), d !== "none" && !b._data(this[a], "olddisplay") && b._data(this[a], "olddisplay", d);
				for (a = 0; a < c; a++)
					this[a].style.display = "none";
				return this
			}
		},
		_toggle : b.fn.toggle,
		toggle : function (a, c, d) {
			var e = typeof a === "boolean";
			b.isFunction(a) && b.isFunction(c) ? this._toggle.apply(this, arguments) : a == null || e ? this.each(function () {
				var c = e ? a : b(this).is(":hidden");
				b(this)[c ? "show" : "hide"]()
			}) : this.animate(s("toggle", 3), a, c, d);
			return this
		},
		fadeTo : function (a, c, b, e) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity : c
			},
				a, b, e)
		},
		animate : function (a, c, d, e) {
			var f = b.speed(c, d, e);
			if (b.isEmptyObject(a))
				return this.each(f.complete);
			return this[f.queue === !1 ? "each" : "queue"](function () {
				var c = b.extend({}, f),
				d,
				e = this.nodeType === 1,
				i = e && b(this).is(":hidden"),
				k = this;
				for (d in a) {
					var n = b.camelCase(d);
					d !== n && (a[n] = a[d], delete a[d], d = n);
					if (a[d] === "hide" && i || a[d] === "show" && !i)
						return c.complete.call(this);
					if (e && (d === "height" || d === "width"))
						if (c.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], b.css(this, "display") ===
							"inline" && b.css(this, "float") === "none")
							b.support.inlineBlockNeedsLayout ? qa(this.nodeName) === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1) : this.style.display = "inline-block";
					if (b.isArray(a[d]))
						(c.specialEasing = c.specialEasing || {})[d] = a[d][1], a[d] = a[d][0]
				}
				if (c.overflow != null)
					this.style.overflow = "hidden";
				c.curAnim = b.extend({}, a);
				b.each(a, function (d, e) {
					var f = new b.fx(k, c, d);
					if (rb.test(e))
						f[e === "toggle" ? i ? "show" : "hide" : e](a);
					else {
						var h = sb.exec(e),
						n = f.cur();
						if (h) {
							var g =
								parseFloat(h[2]),
							j = h[3] || (b.cssNumber[d] ? "" : "px");
							j !== "px" && (b.style(k, d, (g || 1) + j), n *= (g || 1) / f.cur(), b.style(k, d, n + j));
							h[1] && (g = (h[1] === "-=" ? -1 : 1) * g + n);
							f.custom(n, g, j)
						} else
							f.custom(n, e, "")
					}
				});
				return !0
			})
		},
		stop : function (a, c) {
			var d = b.timers;
			a && this.queue([]);
			this.each(function () {
				for (var a = d.length - 1; a >= 0; a--)
					if (d[a].elem === this) {
						if (c)
							d[a](!0);
						d.splice(a, 1)
					}
			});
			c || this.dequeue();
			return this
		}
	});
	b.each({
		slideDown : s("show", 1),
		slideUp : s("hide", 1),
		slideToggle : s("toggle", 1),
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
		b.fn[a] = function (a, b, f) {
			return this.animate(c, a, b, f)
		}
	});
	b.extend({
		speed : function (a, c, d) {
			var e = a && typeof a === "object" ? b.extend({}, a) : {
				complete : d || !d && c || b.isFunction(a) && a,
				duration : a,
				easing : d && c || c && !b.isFunction(c) && c
			};
			e.duration = b.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in b.fx.speeds ? b.fx.speeds[e.duration] : b.fx.speeds._default;
			e.old = e.complete;
			e.complete = function () {
				e.queue !== !1 && b(this).dequeue();
				b.isFunction(e.old) && e.old.call(this)
			};
			return e
		},
		easing : {
			linear : function (a, c, b, e) {
				return b + e * a
			},
			swing : function (a, c, b, e) {
				return (-Math.cos(a * Math.PI) / 2 + 0.5) * e + b
			}
		},
		timers : [],
		fx : function (a, c, b) {
			this.options = c;
			this.elem = a;
			this.prop = b;
			if (!c.orig)
				c.orig = {}
				
		}
	});
	b.fx.prototype = {
		update : function () {
			this.options.step && this.options.step.call(this.elem, this.now, this);
			(b.fx.step[this.prop] || b.fx.step._default)(this)
		},
		cur : function () {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
				return this.elem[this.prop];
			var a,
			c = b.css(this.elem,
					this.prop);
			return isNaN(a = parseFloat(c)) ? !c || c === "auto" ? 0 : c : a
		},
		custom : function (a, c, d) {
			function e(a) {
				return f.step(a)
			}
			var f = this,
			i = b.fx;
			this.startTime = b.now();
			this.start = a;
			this.end = c;
			this.unit = d || this.unit || (b.cssNumber[this.prop] ? "" : "px");
			this.now = this.start;
			this.pos = this.state = 0;
			e.elem = this.elem;
			e() && b.timers.push(e) && !va && (va = setInterval(i.tick, i.interval))
		},
		show : function () {
			this.options.orig[this.prop] = b.style(this.elem, this.prop);
			this.options.show = !0;
			this.custom(this.prop === "width" || this.prop ===
				"height" ? 1 : 0, this.cur());
			b(this.elem).show()
		},
		hide : function () {
			this.options.orig[this.prop] = b.style(this.elem, this.prop);
			this.options.hide = !0;
			this.custom(this.cur(), 0)
		},
		step : function (a) {
			var c = b.now(),
			d = !0;
			if (a || c >= this.options.duration + this.startTime) {
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				this.options.curAnim[this.prop] = !0;
				for (var e in this.options.curAnim)
					this.options.curAnim[e] !== !0 && (d = !1);
				if (d) {
					if (this.options.overflow != null && !b.support.shrinkWrapBlocks) {
						var f = this.elem,
						i = this.options;
						b.each(["", "X", "Y"], function (a, c) {
							f.style["overflow" + c] = i.overflow[a]
						})
					}
					this.options.hide && b(this.elem).hide();
					if (this.options.hide || this.options.show)
						for (var k in this.options.curAnim)
							b.style(this.elem, k, this.options.orig[k]);
					this.options.complete.call(this.elem)
				}
				return !1
			} else
				a = c - this.startTime, this.state = a / this.options.duration, c = this.options.easing || (b.easing.swing ? "swing" : "linear"), this.pos = b.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || c](this.state, a, 0, 1, this.options.duration),
				this.now = this.start + (this.end - this.start) * this.pos, this.update();
			return !0
		}
	};
	b.extend(b.fx, {
		tick : function () {
			for (var a = b.timers, c = 0; c < a.length; c++)
				a[c]() || a.splice(c--, 1);
			a.length || b.fx.stop()
		},
		interval : 13,
		stop : function () {
			clearInterval(va);
			va = null
		},
		speeds : {
			slow : 600,
			fast : 200,
			_default : 400
		},
		step : {
			opacity : function (a) {
				b.style(a.elem, "opacity", a.now)
			},
			_default : function (a) {
				a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] =
					a.now
			}
		}
	});
	if (b.expr && b.expr.filters)
		b.expr.filters.animated = function (a) {
			return b.grep(b.timers, function (c) {
				return a === c.elem
			}).length
		};
	var tb = /^t(?:able|d|h)$/i,
	Ra = /^(?:body|html)$/i;
	b.fn.offset = "getBoundingClientRect" in m.documentElement ? function (a) {
		var c = this[0],
		d;
		if (a)
			return this.each(function (c) {
				b.offset.setOffset(this, a, c)
			});
		if (!c || !c.ownerDocument)
			return null;
		if (c === c.ownerDocument.body)
			return b.offset.bodyOffset(c);
		try {
			d = c.getBoundingClientRect()
		} catch (e) {}
		
		var f = c.ownerDocument,
		i = f.documentElement;
		if (!d || !b.contains(i, c))
			return d ? {
				top : d.top,
				left : d.left
			}
		 : {
			top : 0,
			left : 0
		};
		c = f.body;
		f = aa(f);
		return {
			top : d.top + (f.pageYOffset || b.support.boxModel && i.scrollTop || c.scrollTop) - (i.clientTop || c.clientTop || 0),
			left : d.left + (f.pageXOffset || b.support.boxModel && i.scrollLeft || c.scrollLeft) - (i.clientLeft || c.clientLeft || 0)
		}
	}
	 : function (a) {
		var c = this[0];
		if (a)
			return this.each(function (c) {
				b.offset.setOffset(this, a, c)
			});
		if (!c || !c.ownerDocument)
			return null;
		if (c === c.ownerDocument.body)
			return b.offset.bodyOffset(c);
		b.offset.initialize();
		var d,
		e = c.offsetParent,
		f = c.ownerDocument,
		i = f.documentElement,
		k = f.body;
		d = (f = f.defaultView) ? f.getComputedStyle(c, null) : c.currentStyle;
		for (var n = c.offsetTop, g = c.offsetLeft; (c = c.parentNode) && c !== k && c !== i; ) {
			if (b.offset.supportsFixedPosition && d.position === "fixed")
				break;
			d = f ? f.getComputedStyle(c, null) : c.currentStyle;
			n -= c.scrollTop;
			g -= c.scrollLeft;
			if (c === e) {
				n += c.offsetTop;
				g += c.offsetLeft;
				if (b.offset.doesNotAddBorder && (!b.offset.doesAddBorderForTableAndCells || !tb.test(c.nodeName)))
					n += parseFloat(d.borderTopWidth) ||
					0, g += parseFloat(d.borderLeftWidth) || 0;
				e = c.offsetParent
			}
			b.offset.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (n += parseFloat(d.borderTopWidth) || 0, g += parseFloat(d.borderLeftWidth) || 0)
		}
		if (d.position === "relative" || d.position === "static")
			n += k.offsetTop, g += k.offsetLeft;
		b.offset.supportsFixedPosition && d.position === "fixed" && (n += Math.max(i.scrollTop, k.scrollTop), g += Math.max(i.scrollLeft, k.scrollLeft));
		return {
			top : n,
			left : g
		}
	};
	b.offset = {
		initialize : function () {
			var a = m.body,
			c = m.createElement("div"),
			d,
			e,
			f,
			i = parseFloat(b.css(a, "marginTop")) || 0;
			b.extend(c.style, {
				position : "absolute",
				top : 0,
				left : 0,
				margin : 0,
				border : 0,
				width : "1px",
				height : "1px",
				visibility : "hidden"
			});
			c.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
			a.insertBefore(c, a.firstChild);
			d = c.firstChild;
			e = d.firstChild;
			f = d.nextSibling.firstChild.firstChild;
			this.doesNotAddBorder = e.offsetTop !== 5;
			this.doesAddBorderForTableAndCells = f.offsetTop === 5;
			e.style.position = "fixed";
			e.style.top = "20px";
			this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop === 15;
			e.style.position = e.style.top = "";
			d.style.overflow = "hidden";
			d.style.position = "relative";
			this.subtractsBorderForOverflowNotVisible = e.offsetTop === -5;
			this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i;
			a.removeChild(c);
			b.offset.initialize = b.noop
		},
		bodyOffset : function (a) {
			var c =
				a.offsetTop,
			d = a.offsetLeft;
			b.offset.initialize();
			b.offset.doesNotIncludeMarginInBodyOffset && (c += parseFloat(b.css(a, "marginTop")) || 0, d += parseFloat(b.css(a, "marginLeft")) || 0);
			return {
				top : c,
				left : d
			}
		},
		setOffset : function (a, c, d) {
			var e = b.css(a, "position");
			if (e === "static")
				a.style.position = "relative";
			var f = b(a),
			i = f.offset(),
			k = b.css(a, "top"),
			n = b.css(a, "left"),
			g = e === "absolute" && b.inArray("auto", [k, n]) > -1,
			e = {},
			j = {};
			g && (j = f.position());
			k = g ? j.top : parseInt(k, 10) || 0;
			n = g ? j.left : parseInt(n, 10) || 0;
			b.isFunction(c) && (c =
					c.call(a, d, i));
			if (c.top != null)
				e.top = c.top - i.top + k;
			if (c.left != null)
				e.left = c.left - i.left + n;
			"using" in c ? c.using.call(a, e) : f.css(e)
		}
	};
	b.fn.extend({
		position : function () {
			if (!this[0])
				return null;
			var a = this[0],
			c = this.offsetParent(),
			d = this.offset(),
			e = Ra.test(c[0].nodeName) ? {
				top : 0,
				left : 0
			}
			 : c.offset();
			d.top -= parseFloat(b.css(a, "marginTop")) || 0;
			d.left -= parseFloat(b.css(a, "marginLeft")) || 0;
			e.top += parseFloat(b.css(c[0], "borderTopWidth")) || 0;
			e.left += parseFloat(b.css(c[0], "borderLeftWidth")) || 0;
			return {
				top : d.top - e.top,
				left : d.left - e.left
			}
		},
		offsetParent : function () {
			return this.map(function () {
				for (var a = this.offsetParent || m.body; a && !Ra.test(a.nodeName) && b.css(a, "position") === "static"; )
					a = a.offsetParent;
				return a
			})
		}
	});
	b.each(["Left", "Top"], function (a, c) {
		var d = "scroll" + c;
		b.fn[d] = function (c) {
			var f = this[0],
			i;
			if (!f)
				return null;
			return c !== j ? this.each(function () {
				(i = aa(this)) ? i.scrollTo(!a ? c : b(i).scrollLeft(), a ? c : b(i).scrollTop()) : this[d] = c
			}) : (i = aa(f)) ? "pageXOffset" in i ? i[a ? "pageYOffset" : "pageXOffset"] : b.support.boxModel && i.document.documentElement[d] ||
			i.document.body[d] : f[d]
		}
	});
	b.each(["Height", "Width"], function (a, c) {
		var d = c.toLowerCase();
		b.fn["inner" + c] = function () {
			return this[0] ? parseFloat(b.css(this[0], d, "padding")) : null
		};
		b.fn["outer" + c] = function (a) {
			return this[0] ? parseFloat(b.css(this[0], d, a ? "margin" : "border")) : null
		};
		b.fn[d] = function (a) {
			var f = this[0];
			if (!f)
				return a == null ? null : this;
			if (b.isFunction(a))
				return this.each(function (c) {
					var f = b(this);
					f[d](a.call(this, c, f[d]()))
				});
			if (b.isWindow(f)) {
				var i = f.document.documentElement["client" + c];
				return f.document.compatMode ===
				"CSS1Compat" && i || f.document.body["client" + c] || i
			} else
				return f.nodeType === 9 ? Math.max(f.documentElement["client" + c], f.body["scroll" + c], f.documentElement["scroll" + c], f.body["offset" + c], f.documentElement["offset" + c]) : a === j ? (f = b.css(f, d), i = parseFloat(f), b.isNaN(i) ? f : i) : this.css(d, typeof a === "string" ? a : a + "px")
		}
	});
	g.jQuery = g.$ = b
})(window);
jQuery.cookie = function (g, j, p) {
	if (typeof j != "undefined") {
		p = p || {};
		if (j === null)
			j = "", p.expires = -1;
		var l = "";
		if (p.expires && (typeof p.expires == "number" || p.expires.toUTCString))
			typeof p.expires == "number" ? (l = new Date, l.setTime(l.getTime() + p.expires * 864E5)) : l = p.expires, l = "; expires=" + l.toUTCString();
		var E = p.path ? "; path=" + p.path : "",
		z = p.domain ? "; domain=" + p.domain.split(":")[0] : "",
		p = p.secure ? "; secure" : "";
		document.cookie = [g, "=", encodeURIComponent(j), l, E, z, p].join("")
	} else {
		j = null;
		if (document.cookie && document.cookie !=
			"") {
			p = document.cookie.split(";");
			for (l = 0; l < p.length; l++)
				if (E = jQuery.trim(p[l]), E.substring(0, g.length + 1) == g + "=") {
					j = decodeURIComponent(E.substring(g.length + 1));
					break
				}
		}
		return j
	}
};
var DISQUS = function () {
	var g = window.document,
	j = g.getElementsByTagName("script"),
	p,
	l,
	E,
	z;
	p = g.getElementsByTagName("head")[0] || g.getElementsByTagName("body")[0];
	l = {
		running : !1,
		timer : null,
		queue : []
	};
	z = {};
	E = j[j.length - 1].src.split("/");
	E.pop();
	E = E.join("/");
	z.defer = function (g, j) {
		function p() {
			if (l.queue.length === 0)
				l.running = !1, clearInterval(l.timer);
			else {
				var g = l.queue.shift();
				if (g[0]())
					g[1]();
				else
					l.queue.push(g)
			}
		}
		l.queue.push([g, j]);
		p();
		if (!l.running)
			l.running = !0, l.timer = setInterval(p, 100);
		return l.queue.length
	};
	z.each = function (g, j) {
		var l = g.length,
		u = Array.prototype.forEach;
		if (isNaN(l))
			for (var p in g)
				g.hasOwnProperty(p) && j(g[p], p, g);
		else if (u)
			u.call(g, j);
		else
			for (u = 0; u < l; u++)
				j(g[u], u, g)
	};
	z.extend = function () {
		var g,
		j;
		arguments.length <= 1 ? (g = z, j = [arguments[0] || {}
				
			]) : (g = arguments[0] || {}, j = Array.prototype.slice.call(arguments, 1));
		for (var l = 0; l < j.length; l++)
			for (var p in j[l])
				j[l].hasOwnProperty(p) && (g[p] = j[l][p]);
		return g
	};
	z.load = function (j, l) {
		j = (j.slice(0, 4) != "http" ? E + "/" : "") + j;
		if (l) {
			var B = j.slice(j.length - 1);
			j +=
			(B != "&" && B != "?" ? "?" : "") + (new Date).getTime()
		}
		B = g.createElement("script");
		B.src = j;
		B.async = !0;
		B.charset = "UTF-8";
		p.appendChild(B);
		return B
	};
	return z
}
();
DISQUS.extend({
	comments : {},
	host : {},
	net : {},
	widgets : {}
	
});
(function () {
	function g(g) {
		return g < 10 ? "0" + g : g
	}
	function j(g) {
		A.lastIndex = 0;
		return A.test(g) ? '"' + g.replace(A, function (g) {
			var j = u[g];
			return typeof j === "string" ? j : "\\u" + ("0000" + g.charCodeAt(0).toString(16)).slice(-4)
		}) + '"' : '"' + g + '"'
	}
	function p(g, l) {
		var u,
		C,
		G,
		J,
		A = I,
		z,
		s = l[g];
		s && typeof s === "object" && typeof s.toJSON === "function" && !E && (s = s.toJSON(g));
		typeof w === "function" && (s = w.call(l, g, s));
		switch (typeof s) {
		case "string":
			return j(s);
		case "number":
			return isFinite(s) ? String(s) : "null";
		case "boolean":
		case "null":
			return String(s);
		case "object":
			if (!s)
				return "null";
			I += B;
			z = [];
			if (Object.prototype.toString.apply(s) === "[object Array]") {
				J = s.length;
				for (u = 0; u < J; u += 1)
					z[u] = p(u, s) || "null";
				G = z.length === 0 ? "[]" : I ? "[\n" + I + z.join(",\n" + I) + "\n" + A + "]" : "[" + z.join(",") + "]";
				I = A;
				return G
			}
			if (w && typeof w === "object") {
				J = w.length;
				for (u = 0; u < J; u += 1)
					C = w[u], typeof C === "string" && (G = p(C, s)) && z.push(j(C) + (I ? ": " : ":") + G)
			} else
				for (C in s)
					Object.hasOwnProperty.call(s, C) && (G = p(C, s)) && z.push(j(C) + (I ? ": " : ":") + G);
			G = z.length === 0 ? "{}" : I ? "{\n" + I + z.join(",\n" + I) + "\n" +
				A + "}" : "{" + z.join(",") + "}";
			I = A;
			return G
		}
	}
	var l = {},
	E = !1;
	if (typeof Date.prototype.toJSON !== "function")
		Date.prototype.toJSON = function () {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + g(this.getUTCMonth() + 1) + "-" + g(this.getUTCDate()) + "T" + g(this.getUTCHours()) + ":" + g(this.getUTCMinutes()) + ":" + g(this.getUTCSeconds()) + "Z" : null
		},
	String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
		return this.valueOf()
	};
	var z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	A = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	I,
	B,
	u = {
		"\u0008" : "\\b",
		"\t" : "\\t",
		"\n" : "\\n",
		"\u000c" : "\\f",
		"\r" : "\\r",
		'"' : '\\"',
		"\\" : "\\\\"
	},
	w;
	l.stringify = function (g, j, l) {
		var u;
		B = I = "";
		if (typeof l === "number")
			for (u = 0; u < l; u += 1)
				B += " ";
		else
			typeof l === "string" && (B = l);
		if ((w = j) && typeof j !== "function" && (typeof j !== "object" || typeof j.length !== "number"))
			throw Error("JSON.stringify");
		return p("", {
			"" : g
		})
	};
	l.parse = function (g, j) {
		function l(g,
			u) {
			var p,
			w,
			s = g[u];
			if (s && typeof s === "object")
				for (p in s)
					Object.hasOwnProperty.call(s, p) && (w = l(s, p), w !== void 0 ? s[p] = w : delete s[p]);
			return j.call(g, u, s)
		}
		var u,
		g = String(g);
		z.lastIndex = 0;
		z.test(g) && (g = g.replace(z, function (g) {
					return "\\u" + ("0000" + g.charCodeAt(0).toString(16)).slice(-4)
				}));
		if (/^[\],:{}\s]*$/.test(g.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
			return u = eval("(" + g + ")"),
			typeof j === "function" ? l({
				"" : u
			}, "") : u;
		throw new SyntaxError("JSON.parse");
	};
	DISQUS.json = {};
	var J = {
		a : [1, 2, 3]
	};
	if (Object.toJSON && Object.toJSON(J).replace(/\s/g, "") === '{"a":[1,2,3]}')
		DISQUS.json.stringify = Object.toJSON;
	if (typeof String.prototype.evalJSON === "function" && (J = '{"a":[1,2,3]}'.evalJSON(), J.a && J.a.length === 3 && J.a[2] === 3))
		DISQUS.json.parse = function (g) {
			return g.evalJSON()
		};
	(function () {
		var g = [1, 2, 3];
		typeof g.toJSON === "function" && (g = g.toJSON(), E = !(g && g.length === 3 && g[2] === 3))
	})();
	if (!DISQUS.json.stringify ||
		!DISQUS.json.parse)
		DISQUS.json = {
			stringify : l.stringify,
			parse : l.parse
		}
})();
DISQUS === void 0 && (DISQUS = {});
$.extend(DISQUS, {
	storage : function () {
		var g = {},
		j = window,
		p = j.document,
		l;
		g.disabled = !1;
		g.set = function () {};
		g.get = function () {};
		g.remove = function () {};
		g.clear = function () {};
		g.transact = function (j, l) {
			var p = g.get(j);
			typeof p == "undefined" && (p = {});
			l(p);
			g.set(j, p)
		};
		g.serialize = function (g) {
			return DISQUS.json.stringify(g)
		};
		g.deserialize = function (g) {
			if (typeof g == "string")
				return DISQUS.json.parse(g)
		};
		var E;
		try {
			E = "localStorage" in j && j.localStorage
		} catch (z) {
			E = !1
		}
		if (E)
			l = j.localStorage, g.set = function (j, p) {
				l.setItem(j, g.serialize(p))
			},
		g.get = function (j) {
			return g.deserialize(l.getItem(j))
		},
		g.remove = function (g) {
			l.removeItem(g)
		},
		g.clear = function () {
			l.clear()
		};
		else {
			var A;
			try {
				A = "globalStorage" in j && j.globalStorage && j.globalStorage[j.location.hostname]
			} catch (I) {
				A = !1
			}
			if (A)
				l = j.globalStorage[j.location.hostname], g.set = function (j, p) {
					l[j] = g.serialize(p)
				},
			g.get = function (j) {
				return g.deserialize(l[j] && l[j].value)
			},
			g.remove = function (g) {
				delete l[g]
			},
			g.clear = function () {
				for (var g in l)
					delete l[g]
			};
			else if (p.documentElement.addBehavior)
				l = p.createElement("div"),
				j = function (j) {
					return function () {
						var w = Array.prototype.slice.call(arguments, 0);
						w.unshift(l);
						p.body.appendChild(l);
						l.addBehavior("#default#userData");
						l.load("localStorage");
						w = j.apply(g, w);
						p.body.removeChild(l);
						return w
					}
				},
			g.set = j(function (j, l, p) {
					j.setAttribute(l, g.serialize(p));
					j.save("localStorage")
				}),
			g.get = j(function (j, l) {
					return g.deserialize(j.getAttribute(l))
				}),
			g.remove = j(function (g, j) {
					g.removeAttribute(j);
					g.save("localStorage")
				}),
			g.clear = j(function (g) {
					var j = g.XMLDocument.documentElement.attributes;
					g.load("localStorage");
					for (var l = 0, p; p = j[l]; l++)
						g.removeAttribute(p.name);
					g.save("localStorage")
				})
		}
		try {
			g.set("__storejs__", "__storejs__");
			if (g.get("__storejs__") != "__storejs__")
				g.disabled = !0;
			g.remove("__storejs__")
		} catch (B) {
			g.disabled = !0
		}
		return g
	}
	()
});
(function (g, j, p, l, E, z) {
	function A(b, f) {
		var k = typeof b[f];
		return k == "function" || !!(k == "object" && b[f]) || k == "unknown"
	}
	function I() {
		I = aa;
		V = !0;
		for (var b = 0; b < ca.length; b++)
			ca[b]();
		ca.length = 0
	}
	function B(b, f) {
		V ? b.call(f) : ca.push(function () {
			b.call(f)
		})
	}
	function u() {
		var b = parent;
		if (ba !== "")
			for (var f = 0, k = ba.split("."); f < k.length; f++)
				b = b[k[f]];
		return b.easyXDM
	}
	function w(b) {
		var f = b.match(m),
		b = f[2],
		k = f[3],
		f = f[4] || "";
		if (b == "http:" && f == ":80" || b == "https:" && f == ":443")
			f = "";
		return b + "//" + k + f
	}
	function J(i) {
		i = i.replace(wa,
				"$1/");
		if (!i.match(/^(http||https):\/\//)) {
			var f = i.substring(0, 1) === "/" ? "" : p.pathname;
			f.substring(f.length - 1) !== "/" && (f = f.substring(0, f.lastIndexOf("/") + 1));
			i = p.protocol + "//" + p.host + f + i
		}
		for (; b.test(i); )
			i = i.replace(b, "");
		return i
	}
	function P(b, f) {
		var k = "",
		g = b.indexOf("#");
		g !== -1 && (k = b.substring(g).replace("#", "&"), b = b.substring(0, g));
		var g = [],
		j;
		for (j in f)
			f.hasOwnProperty(j) && g.push(j + "=" + z(f[j]));
		return b + (ra ? "#" : b.indexOf("?") == -1 ? "?" : "&") + g.join("&") + k
	}
	function O(b) {
		return typeof b === "undefined"
	}
	function Q() {
		var b = {},
		f = {
			a : [1, 2, 3]
		};
		if (typeof JSON != "undefined" && typeof JSON.stringify === "function" && JSON.stringify(f).replace(/\s/g, "") === '{"a":[1,2,3]}')
			return JSON;
		if (Object.toJSON && Object.toJSON(f).replace(/\s/g, "") === '{"a":[1,2,3]}')
			b.stringify = Object.toJSON;
		if (typeof String.prototype.evalJSON === "function" && (f = '{"a":[1,2,3]}'.evalJSON(), f.a && f.a.length === 3 && f.a[2] === 3))
			b.parse = function (b) {
				return b.evalJSON()
			};
		if (b.stringify && b.parse)
			return Q = function () {
				return b
			},
		b;
		return null
	}
	function C(b, f,
		k) {
		var g,
		j;
		for (j in f)
			f.hasOwnProperty(j) && (j in b ? (g = f[j], typeof g === "object" ? C(b[j], g, k) : k || (b[j] = f[j])) : b[j] = f[j]);
		return b
	}
	function G(b) {
		if (O(la)) {
			var f = j.createElement("iframe");
			f.name = R + "TEST";
			C(f.style, {
				position : "absolute",
				left : "-2000px",
				top : "0px"
			});
			j.body.appendChild(f);
			la = f.contentWindow !== g.frames[f.name];
			j.body.removeChild(f)
		}
		la && !~navigator.userAgent.indexOf("Firefox") ? f = j.createElement('<iframe name="' + b.props.name + '"/>') : (f = j.createElement("IFRAME"), f.name = b.props.name);
		f.id = f.name =
			b.props.name;
		delete b.props.name;
		b.onLoad && U(f, "load", b.onLoad);
		if (typeof b.container == "string")
			b.container = j.getElementById(b.container);
		if (!b.container)
			f.style.position = "absolute", f.style.top = "-2000px", f.style.left = "0px", b.container = j.body;
		var k = b.props.src;
		delete b.props.src;
		C(f, b.props);
		f.border = f.frameBorder = 0;
		b.container.appendChild(f);
		f.src = k;
		b.props.src = k;
		return f
	}
	function ia(b) {
		var f = b.protocol,
		k;
		b.isHost = b.isHost || O(N.xdm_p);
		ra = b.hash || !1;
		if (!b.props)
			b.props = {};
		if (b.isHost) {
			if (b.remote =
					J(b.remote), b.channel = b.channel || "default" + qa++, b.secret = Math.random().toString(16).substring(2), O(f))
				if (s.parent == s && w(p.href) == w(b.remote))
					f = "4";
				else if (A(g, "postMessage") || A(j, "postMessage"))
					f = "1";
				else {
					if (f = A(g, "ActiveXObject"))
						try {
							new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
							f = !0
						} catch (n) {
							f = !1
						}
					f ? f = "6" : navigator.product === "Gecko" && "frameElement" in g && navigator.userAgent.indexOf("WebKit") == -1 ? f = "5" : b.remoteHelper ? (b.remoteHelper = J(b.remoteHelper), f = "2") : f = "0"
				}
		} else {
			b.channel = N.xdm_c;
			b.secret =
				N.xdm_s;
			b.remote = N.xdm_e;
			var f = N.xdm_p,
			l;
			if (l = b.acl) {
				a : {
					l = b.acl;
					var m = b.remote;
					typeof l == "string" && (l = [l]);
					for (var q, H = l.length; H--; )
						if (q = l[H], q = RegExp(q.substr(0, 1) == "^" ? q : "^" + q.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$"), q.test(m)) {
							l = !0;
							break a
						}
					l = !1
				}
				l = !l
			}
			if (l)
				throw Error("Access denied for " + b.remote);
		}
		switch (f) {
		case "0":
			C(b, {
				interval : 100,
				delay : 2E3,
				useResize : !0,
				useParent : !1,
				usePolling : !1
			}, !0);
			if (b.isHost) {
				if (!b.local) {
					k = p.protocol + "//" + p.host;
					f = j.body.getElementsByTagName("img");
					for (m = f.length; m--; )
						if (l =
								f[m], l.src.substring(0, k.length) === k) {
							b.local = l.src;
							break
						}
					if (!b.local)
						b.local = g
				}
				k = {
					xdm_c : b.channel,
					xdm_p : 0
				};
				b.local === g ? (b.usePolling = !0, b.useParent = !0, b.local = p.protocol + "//" + p.host + p.pathname + p.search, k.xdm_e = b.local, k.xdm_pa = 1) : k.xdm_e = J(b.local);
				if (b.container)
					b.useResize = !1, k.xdm_po = 1;
				b.remote = P(b.remote, k)
			} else
				C(b, {
					channel : N.xdm_c,
					remote : N.xdm_e,
					useParent : !O(N.xdm_pa),
					usePolling : !O(N.xdm_po),
					useResize : b.useParent ? !1 : b.useResize
				});
			k = [new t.stack.HashTransport(b), new t.stack.ReliableBehavior({}),
				new t.stack.QueueBehavior({
					encode : !0,
					maxLength : 4E3 - b.remote.length
				}), new t.stack.VerifyBehavior({
					initiate : b.isHost
				})];
			break;
		case "1":
			k = [new t.stack.PostMessageTransport(b)];
			break;
		case "2":
			k = [new t.stack.NameTransport(b), new t.stack.QueueBehavior, new t.stack.VerifyBehavior({
					initiate : b.isHost
				})];
			break;
		case "3":
			k = [new t.stack.NixTransport(b)];
			break;
		case "4":
			k = [new t.stack.SameOriginTransport(b)];
			break;
		case "5":
			k = [new t.stack.FrameElementTransport(b)];
			break;
		case "6":
			if (!b.swf)
				b.swf = "../../tools/easyxdm.swf";
			k = [new t.stack.FlashTransport(b)]
		}
		k.push(new t.stack.QueueBehavior({
				lazy : b.lazy,
				remove : !0
			}));
		return k
	}
	function oa(b) {
		for (var f, k = {
				incoming : function (b, f) {
					this.up.incoming(b, f)
				},
				outgoing : function (b, f) {
					this.down.outgoing(b, f)
				},
				callback : function (b) {
					this.up.callback(b)
				},
				init : function () {
					this.down.init()
				},
				destroy : function () {
					this.down.destroy()
				}
			}, g = 0, j = b.length; g < j; g++) {
			f = b[g];
			C(f, k, !0);
			if (g !== 0)
				f.down = b[g - 1];
			if (g !== j - 1)
				f.up = b[g + 1]
		}
		return f
	}
	function pa(b) {
		b.up.down = b.down;
		b.down.up = b.up;
		b.up = b.down = null
	}
	var s = this,
	qa = Math.floor(Math.random() * 1E4),
	aa = Function.prototype,
	m = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
	b = /[\-\w]+\/\.\.\//,
	wa = /([^:])\/\//g,
	ba = "",
	t = {},
	Da = g.easyXDM,
	R = "easyXDM_",
	la,
	ra = !1,
	U,
	Y;
	if (A(g, "addEventListener"))
		U = function (b, f, g) {
			b.addEventListener(f, g, !1)
		},
	Y = function (b, f, g) {
		b.removeEventListener(f, g, !1)
	};
	else if (A(g, "attachEvent"))
		U = function (b, f, g) {
			b.attachEvent("on" + f, g)
		},
	Y = function (b, f, g) {
		b.detachEvent("on" + f, g)
	};
	else
		throw Error("Browser not supported");
	var V = !1,
	ca = [],
	ha;
	"readyState" in
	j ? (ha = j.readyState, V = ha == "complete" || ~navigator.userAgent.indexOf("AppleWebKit/") && (ha == "loaded" || ha == "interactive")) : V = !!j.body;
	V || (A(g, "addEventListener") ? U(j, "DOMContentLoaded", I) : (U(j, "readystatechange", function () {
				j.readyState == "complete" && I()
			}), j.documentElement.doScroll && g === top && function f() {
			if (!V) {
				try {
					j.documentElement.doScroll("left")
				} catch (b) {
					l(f, 1);
					return
				}
				I()
			}
		}
			()), U(g, "load", I));
	var N = function (b) {
		for (var b = b.substring(1).split("&"), g = {}, j, l = b.length; l--; )
			j = b[l].split("="), g[j[0]] = E(j[1]);
		return g
	}
	(/xdm_e=/.test(p.search) ? p.search : p.hash);
	C(t, {
		version : "2.4.12.1",
		query : N,
		stack : {},
		apply : C,
		getJSONObject : Q,
		whenReady : B,
		noConflict : function (b) {
			g.easyXDM = Da;
			(ba = b) && (R = "easyXDM_" + ba.replace(".", "_") + "_");
			return t
		}
	});
	t.DomHelper = {
		on : U,
		un : Y,
		requiresJSON : function (b) {
			typeof g.JSON == "object" && g.JSON || j.write('<script type="text/javascript" src="' + b + '"><\/script>')
		}
	};
	(function () {
		var b = {};
		t.Fn = {
			set : function (g, j) {
				b[g] = j
			},
			get : function (g, j) {
				var l = b[g];
				j && delete b[g];
				return l
			}
		}
	})();
	t.Socket = function (b) {
		var g =
			oa(ia(b).concat([{
							incoming : function (g, k) {
								b.onMessage(g, k)
							},
							callback : function (g) {
								if (b.onReady)
									b.onReady(g)
							}
						}
					])),
		j = w(b.remote);
		this.origin = w(b.remote);
		this.destroy = function () {
			g.destroy()
		};
		this.postMessage = function (b) {
			g.outgoing(b, j)
		};
		g.init()
	};
	t.Rpc = function (b, g) {
		if (g.local)
			for (var j in g.local)
				if (g.local.hasOwnProperty(j)) {
					var l = g.local[j];
					typeof l === "function" && (g.local[j] = {
							method : l
						})
				}
		var m = oa(ia(b).concat([new t.stack.RpcBehavior(this, g), {
							callback : function (g) {
								if (b.onReady)
									b.onReady(g)
							}
						}
					]));
		this.origin =
			w(b.remote);
		this.destroy = function () {
			m.destroy()
		};
		m.init()
	};
	t.stack.SameOriginTransport = function (b) {
		var g,
		j,
		m,
		x;
		return g = {
			outgoing : function (b, f, g) {
				m(b);
				g && g()
			},
			destroy : function () {
				j && (j.parentNode.removeChild(j), j = null)
			},
			onDOMReady : function () {
				x = w(b.remote);
				b.isHost ? (C(b.props, {
						src : P(b.remote, {
							xdm_e : p.protocol + "//" + p.host + p.pathname,
							xdm_c : b.channel,
							xdm_p : 4
						}),
						name : R + b.channel + "_provider"
					}), j = G(b), t.Fn.set(b.channel, function (b) {
						m = b;
						l(function () {
							g.up.callback(!0)
						}, 0);
						return function (b) {
							g.up.incoming(b,
								x)
						}
					})) : (m = u().Fn.get(b.channel, !0)(function (b) {
							g.up.incoming(b, x)
						}), l(function () {
						g.up.callback(!0)
					}, 0))
			},
			init : function () {
				B(g.onDOMReady, g)
			}
		}
	};
	t.stack.FlashTransport = function (b) {
		function g(b) {
			l(function () {
				p.up.incoming(b, q)
			}, 0)
		}
		function n(g) {
			var k = b.swf,
			n = "easyXDM_swf_" + Math.floor(Math.random() * 1E4);
			t.Fn.set("flash_loaded", function () {
				t.stack.FlashTransport.__swf = H = L.firstChild;
				g()
			});
			L = j.createElement("div");
			C(L.style, {
				height : "1px",
				width : "1px",
				postition : "absolute",
				left : 0,
				top : 0
			});
			j.body.appendChild(L);
			var l = "proto=" + s.location.protocol + "&domain=" + s.location.href.match(m)[3] + "&ns=" + ba;
			L.innerHTML = "<object height='1' width='1' type='application/x-shockwave-flash' id='" + n + "' data='" + k + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + k + "'></param><param name='flashvars' value='" + l + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + l + "' allowScriptAccess='always' wmode='transparent' src='" + k + "' height='1' width='1'></embed></object>"
		}
		var p,
		x,
		q,
		H,
		L;
		return p = {
			outgoing : function (g, k, j) {
				H.postMessage(b.channel, g);
				j && j()
			},
			destroy : function () {
				try {
					H.destroyChannel(b.channel)
				} catch (g) {}
				
				H = null;
				x && (x.parentNode.removeChild(x), x = null)
			},
			onDOMReady : function () {
				q = b.remote;
				H = t.stack.FlashTransport.__swf;
				t.Fn.set("flash_" + b.channel + "_init", function () {
					l(function () {
						p.up.callback(!0)
					})
				});
				t.Fn.set("flash_" + b.channel + "_onMessage", g);
				var j = function () {
					H.createChannel(b.channel, b.secret, w(b.remote), b.isHost);
					b.isHost && (C(b.props, {
							src : P(b.remote, {
								xdm_e : w(s.location.href),
								xdm_c : b.channel,
								xdm_p : 6,
								xdm_s : b.secret
							}),
							name : R + b.channel + "_provider"
						}), x = G(b))
				};
				H ? j() : n(j)
			},
			init : function () {
				B(p.onDOMReady, p)
			}
		}
	};
	t.stack.PostMessageTransport = function (b) {
		function k(g) {
			var k;
			if (g.origin)
				k = w(g.origin);
			else if (g.uri)
				k = w(g.uri);
			else if (g.domain)
				k = p.protocol + "//" + g.domain;
			else
				throw "Unable to retrieve the origin of the event";
			k == q && g.data.substring(0, b.channel.length + 1) == b.channel + " " && j.up.incoming(g.data.substring(b.channel.length + 1), k)
		}
		var j,
		m,
		x,
		q;
		return j = {
			outgoing : function (g, j, k) {
				x.postMessage(b.channel +
					" " + g, j || q);
				k && k()
			},
			destroy : function () {
				Y(g, "message", k);
				m && (x = null, m.parentNode.removeChild(m), m = null)
			},
			onDOMReady : function () {
				q = w(b.remote);
				b.isHost ? (U(g, "message", function L(q) {
						q.data == b.channel + "-ready" && (x = "postMessage" in m.contentWindow ? m.contentWindow : m.contentWindow.document, Y(g, "message", L), U(g, "message", k), l(function () {
								j.up.callback(!0)
							}, 0))
					}), C(b.props, {
						src : P(b.remote, {
							xdm_e : w(p.href),
							xdm_c : b.channel,
							xdm_p : 1
						}),
						name : R + b.channel + "_provider"
					}), m = G(b)) : (U(g, "message", k), x = "postMessage" in g.parent ?
						g.parent : g.parent.document, x.postMessage(b.channel + "-ready", q), l(function () {
						j.up.callback(!0)
					}, 0))
			},
			init : function () {
				B(j.onDOMReady, j)
			}
		}
	};
	t.stack.FrameElementTransport = function (b) {
		var k,
		n,
		m,
		x;
		return k = {
			outgoing : function (b, f, g) {
				m.call(this, b);
				g && g()
			},
			destroy : function () {
				n && (n.parentNode.removeChild(n), n = null)
			},
			onDOMReady : function () {
				x = w(b.remote);
				if (b.isHost)
					C(b.props, {
						src : P(b.remote, {
							xdm_e : w(p.href),
							xdm_c : b.channel,
							xdm_p : 5
						}),
						name : R + b.channel + "_provider"
					}), n = G(b), n.fn = function (b) {
						delete n.fn;
						m = b;
						l(function () {
							k.up.callback(!0)
						},
							0);
						return function (b) {
							k.up.incoming(b, x)
						}
					};
				else {
					if (j.referrer && w(j.referrer) != N.xdm_e)
						g.top.location = N.xdm_e;
					m = g.frameElement.fn(function (b) {
							k.up.incoming(b, x)
						});
					k.up.callback(!0)
				}
			},
			init : function () {
				B(k.onDOMReady, k)
			}
		}
	};
	t.stack.NixTransport = function (b) {
		var k,
		n,
		m,
		x,
		q;
		return k = {
			outgoing : function (b, f, g) {
				m(b);
				g && g()
			},
			destroy : function () {
				q = null;
				n && (n.parentNode.removeChild(n), n = null)
			},
			onDOMReady : function () {
				x = w(b.remote);
				if (b.isHost) {
					try {
						A(g, "getNixProxy") || g.execScript("Class NixProxy\n    Private m_parent, m_child, m_Auth\n\n    Public Sub SetParent(obj, auth)\n        If isEmpty(m_Auth) Then m_Auth = auth\n        SET m_parent = obj\n    End Sub\n    Public Sub SetChild(obj)\n        SET m_child = obj\n        m_parent.ready()\n    End Sub\n\n    Public Sub SendToParent(data, auth)\n        If m_Auth = auth Then m_parent.send(CStr(data))\n    End Sub\n    Public Sub SendToChild(data, auth)\n        If m_Auth = auth Then m_child.send(CStr(data))\n    End Sub\nEnd Class\nFunction getNixProxy()\n    Set GetNixProxy = New NixProxy\nEnd Function\n",
							"vbscript"),
						q = getNixProxy(),
						q.SetParent({
							send : function (b) {
								k.up.incoming(b, x)
							},
							ready : function () {
								l(function () {
									k.up.callback(!0)
								}, 0)
							}
						}, b.secret),
						m = function (g) {
							q.SendToChild(g, b.secret)
						}
					} catch (t) {
						throw Error("Could not set up VBScript NixProxy:" + t.message);
					}
					C(b.props, {
						src : P(b.remote, {
							xdm_e : w(p.href),
							xdm_c : b.channel,
							xdm_s : b.secret,
							xdm_p : 3
						}),
						name : R + b.channel + "_provider"
					});
					n = G(b);
					n.contentWindow.opener = q
				} else {
					if (j.referrer && w(j.referrer) != N.xdm_e)
						g.top.location = N.xdm_e;
					try {
						q = g.opener
					} catch (u) {
						throw Error("Cannot access window.opener");
					}
					q.SetChild({
						send : function (b) {
							s.setTimeout(function () {
								k.up.incoming(b, x)
							}, 0)
						}
					});
					m = function (g) {
						q.SendToParent(g, b.secret)
					};
					l(function () {
						k.up.callback(!0)
					}, 0)
				}
			},
			init : function () {
				B(k.onDOMReady, k)
			}
		}
	};
	t.stack.NameTransport = function (b) {
		function g(j) {
			u.contentWindow.sendMessage(j, b.remoteHelper + (s ? "#_3" : "#_2") + b.channel)
		}
		function j() {
			s ? (++D === 2 || !s) && q.up.callback(!0) : (g("ready"), q.up.callback(!0))
		}
		function m(b) {
			q.up.incoming(b, S)
		}
		function p() {
			K && l(function () {
				K(!0)
			}, 0)
		}
		var q,
		s,
		u,
		z,
		D,
		K,
		S,
		Z;
		return q = {
			outgoing : function (b,
				f, j) {
				K = j;
				g(b)
			},
			destroy : function () {
				u.parentNode.removeChild(u);
				u = null;
				s && (z.parentNode.removeChild(z), z = null)
			},
			onDOMReady : function () {
				s = b.isHost;
				D = 0;
				S = w(b.remote);
				b.local = J(b.local);
				s ? (t.Fn.set(b.channel, function (g) {
						s && g === "ready" && (t.Fn.set(b.channel, m), j())
					}), Z = P(b.remote, {
							xdm_e : b.local,
							xdm_c : b.channel,
							xdm_p : 2
						}), C(b.props, {
						src : Z + "#" + b.channel,
						name : R + b.channel + "_provider"
					}), z = G(b)) : (b.remoteHelper = b.remote, t.Fn.set(b.channel, m));
				u = G({
						props : {
							src : b.local + "#_4" + b.channel
						},
						onLoad : function X() {
							var g = u ||
								this;
							Y(g, "load", X);
							t.Fn.set(b.channel + "_load", p);
							(function sa() {
								typeof g.contentWindow.sendMessage == "function" ? j() : l(sa, 50)
							})()
						}
					})
			},
			init : function () {
				B(q.onDOMReady, q)
			}
		}
	};
	t.stack.HashTransport = function (b) {
		function j() {
			if (t) {
				var b = t.location.href,
				f = "",
				g = b.indexOf("#");
				g != -1 && (f = b.substring(g));
				f && f != s && (s = f, n.up.incoming(s.substring(s.indexOf("_") + 1), z))
			}
		}
		var n,
		m,
		p,
		q,
		s,
		u,
		t,
		D,
		K,
		z;
		return n = {
			outgoing : function (g) {
				if (D)
					g = b.remote + "#" + u++ + "_" + g, (m || !K ? D.contentWindow : D).location = g
			},
			destroy : function () {
				g.clearInterval(p);
				(m || !K) && D.parentNode.removeChild(D);
				D = null
			},
			onDOMReady : function () {
				m = b.isHost;
				q = b.interval;
				s = "#" + b.channel;
				u = 0;
				K = b.useParent;
				z = w(b.remote);
				if (m) {
					b.props = {
						src : b.remote,
						name : R + b.channel + "_provider"
					};
					if (K)
						b.onLoad = function () {
							t = g;
							p = setInterval(j, q);
							n.up.callback(!0)
						};
					else {
						var A = 0,
						B = b.delay / 50;
						(function ma() {
							if (++A > B)
								throw Error("Unable to reference listenerwindow");
							try {
								t = D.contentWindow.frames[R + b.channel + "_consumer"]
							} catch (g) {}
							
							t ? (p = setInterval(j, q), n.up.callback(!0)) : l(ma, 50)
						})()
					}
					D = G(b)
				} else
					t = g, p = setInterval(j,
							q), K ? (D = parent, n.up.callback(!0)) : (C(b, {
							props : {
								src : b.remote + "#" + b.channel + new Date,
								name : R + b.channel + "_consumer"
							},
							onLoad : function () {
								n.up.callback(!0)
							}
						}), D = G(b))
			},
			init : function () {
				B(n.onDOMReady, n)
			}
		}
	};
	t.stack.ReliableBehavior = function () {
		var b,
		g,
		j = 0,
		l = 0,
		m = "";
		return b = {
			incoming : function (q, p) {
				var s = q.indexOf("_"),
				t = q.substring(0, s).split(","),
				q = q.substring(s + 1);
				t[0] == j && (m = "", g && g(!0));
				q.length > 0 && (b.down.outgoing(t[1] + "," + j + "_" + m, p), l != t[1] && (l = t[1], b.up.incoming(q, p)))
			},
			outgoing : function (q, p, s) {
				m = q;
				g =
					s;
				b.down.outgoing(l + "," + ++j + "_" + q, p)
			}
		}
	};
	t.stack.QueueBehavior = function (b) {
		function g() {
			if (b.remove && m.length === 0)
				pa(j);
			else if (!p && !(m.length === 0 || s)) {
				p = !0;
				var q = m.shift();
				j.down.outgoing(q.data, q.origin, function (b) {
					p = !1;
					q.callback && l(function () {
						q.callback(b)
					}, 0);
					g()
				})
			}
		}
		var j,
		m = [],
		p = !0,
		q = "",
		s,
		t = 0,
		u = !1,
		D = !1;
		return j = {
			init : function () {
				O(b) && (b = {});
				if (b.maxLength)
					t = b.maxLength, D = !0;
				b.lazy ? u = !0 : j.down.init()
			},
			callback : function (b) {
				p = !1;
				var f = j.up;
				g();
				f.callback(b)
			},
			incoming : function (g, k) {
				if (D) {
					var l = g.indexOf("_"),
					m = parseInt(g.substring(0, l), 10);
					q += g.substring(l + 1);
					m === 0 && (b.encode && (q = E(q)), j.up.incoming(q, k), q = "")
				} else
					j.up.incoming(g, k)
			},
			outgoing : function (l, q, p) {
				b.encode && (l = z(l));
				var s = [],
				w;
				if (D) {
					for (; l.length !== 0; )
						w = l.substring(0, t), l = l.substring(w.length), s.push(w);
					for (; w = s.shift(); )
						m.push({
							data : s.length + "_" + w,
							origin : q,
							callback : s.length === 0 ? p : null
						})
				} else
					m.push({
						data : l,
						origin : q,
						callback : p
					});
				u ? j.down.init() : g()
			},
			destroy : function () {
				s = !0;
				j.down.destroy()
			}
		}
	};
	t.stack.VerifyBehavior = function (b) {
		function g() {
			l =
				Math.random().toString(16).substring(2);
			j.down.outgoing(l)
		}
		var j,
		l,
		m;
		return j = {
			incoming : function (q, p) {
				var s = q.indexOf("_");
				s === -1 ? q === l ? j.up.callback(!0) : m || (m = q, b.initiate || g(), j.down.outgoing(q)) : q.substring(0, s) === m && j.up.incoming(q.substring(s + 1), p)
			},
			outgoing : function (b, f, g) {
				j.down.outgoing(l + "_" + b, f, g)
			},
			callback : function () {
				b.initiate && g()
			}
		}
	};
	t.stack.RpcBehavior = function (b, g) {
		function j(b) {
			b.jsonrpc = "2.0";
			p.down.outgoing(s.stringify(b))
		}
		function l(b, f) {
			var g = Array.prototype.slice;
			return function () {
				var k =
					arguments.length,
				l,
				m = {
					method : f
				};
				k > 0 && typeof arguments[k - 1] === "function" ? (k > 1 && typeof arguments[k - 2] === "function" ? (l = {
							success : arguments[k - 2],
							error : arguments[k - 1]
						}, m.params = g.call(arguments, 0, k - 2)) : (l = {
							success : arguments[k - 1]
						}, m.params = g.call(arguments, 0, k - 1)), u["" + ++t] = l, m.id = t) : m.params = g.call(arguments, 0);
				if (b.namedParams && m.params.length === 1)
					m.params = m.params[0];
				j(m)
			}
		}
		function m(b, f, g, k) {
			if (g) {
				var l,
				p;
				f ? (l = function (b) {
					l = aa;
					j({
						id : f,
						result : b
					})
				}, p = function (b, g) {
					p = aa;
					var k = {
						id : f,
						error : {
							code : -32099,
							message : b
						}
					};
					if (g)
						k.error.data = g;
					j(k)
				}) : l = p = aa;
				Object.prototype.toString.call(k) === "[object Array]" || (k = [k]);
				try {
					var q = g.method.apply(g.scope, k.concat([l, p]));
					O(q) || l(q)
				} catch (s) {
					p(s.message)
				}
			} else
				f && j({
					id : f,
					error : {
						code : -32601,
						message : "Procedure not found."
					}
				})
		}
		var p,
		s = g.serializer || Q(),
		t = 0,
		u = {};
		return p = {
			incoming : function (b) {
				b = s.parse(b);
				if (b.method)
					g.handle ? g.handle(b, j) : m(b.method, b.id, g.local[b.method], b.params);
				else {
					var f = u[b.id];
					b.error ? f.error && f.error(b.error) : f.success && f.success(b.result);
					delete u[b.id]
				}
			},
			init : function () {
				if (g.remote)
					for (var j in g.remote)
						g.remote.hasOwnProperty(j) && (b[j] = l(g.remote[j], j));
				p.down.init()
			},
			destroy : function () {
				for (var j in g.remote)
					g.remote.hasOwnProperty(j) && b.hasOwnProperty(j) && delete b[j];
				p.down.destroy()
			}
		}
	};
	s.easyXDM = t
})(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent);
DISQUS.net = {
	easyXDM : easyXDM.noConflict("DISQUS.net"),
	rpc : function (g, j) {
		if (!g.swf)
			g.swf = DISQUS.settings.get("disqus.debug") ? DISQUS.settings.get("disqus.urls.main") + "/xdm.swf" : DISQUS.settings.get("disqus.urls.media") + "/xdm.swf";
		if (typeof g.hash == "undefined")
			g.hash = !DISQUS.settings.get("disqus.debug");
		DISQUS.extend(j, {
			serializer : {
				parse : DISQUS.json.parse,
				stringify : DISQUS.json.stringify
			}
		});
		var p = new DISQUS.net.easyXDM.Rpc(g, j);
		p.isReady = !1;
		return p
	}
};