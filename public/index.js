var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};

// ../../AppData/Local/deno/deno_esbuild/preact@10.26.7/node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var y = [];
var v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var w = Array.isArray;
function d(n2, l3) {
  for (var u3 in l3)
    n2[u3] = l3[u3];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l3, u3, t3) {
  var i3, r3, o3, e3 = {};
  for (o3 in u3)
    "key" == o3 ? i3 = u3[o3] : "ref" == o3 ? r3 = u3[o3] : e3[o3] = u3[o3];
  if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
    for (o3 in l3.defaultProps)
      null == e3[o3] && (e3[o3] = l3.defaultProps[o3]);
  return m(l3, e3, i3, r3, null);
}
function m(n2, t3, i3, r3, o3) {
  var e3 = { type: n2, props: t3, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
  return null == o3 && null != l.vnode && l.vnode(e3), e3;
}
function k(n2) {
  return n2.children;
}
function x(n2, l3) {
  this.props = n2, this.context = l3;
}
function S(n2, l3) {
  if (null == l3)
    return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++)
    if (null != (u3 = n2.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return C(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n2, u3, t3, r3, o3, f3, c3, s3 = 1; i.length; )
    i.length > s3 && i.sort(e), n2 = i.shift(), s3 = i.length, n2.__d && (t3 = void 0, o3 = (r3 = (u3 = n2).__v).__e, f3 = [], c3 = [], u3.__P && ((t3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(t3), O(u3.__P, t3, r3, u3.__n, u3.__P.namespaceURI, 32 & r3.__u ? [o3] : null, f3, null == o3 ? S(r3) : o3, !!(32 & r3.__u), c3), t3.__v = r3.__v, t3.__.__k[t3.__i] = t3, z(f3, t3, c3), t3.__e != o3 && C(t3)));
  $.__r = 0;
}
function I(n2, l3, u3, t3, i3, r3, o3, e3, f3, c3, s3) {
  var a3, h3, v3, w3, d3, g2, _2 = t3 && t3.__k || y, m3 = l3.length;
  for (f3 = P(u3, l3, _2, f3, m3), a3 = 0; a3 < m3; a3++)
    null != (v3 = u3.__k[a3]) && (h3 = -1 == v3.__i ? p : _2[v3.__i] || p, v3.__i = a3, g2 = O(n2, v3, h3, i3, r3, o3, e3, f3, c3, s3), w3 = v3.__e, v3.ref && h3.ref != v3.ref && (h3.ref && q(h3.ref, null, v3), s3.push(v3.ref, v3.__c || w3, v3)), null == d3 && null != w3 && (d3 = w3), 4 & v3.__u || h3.__k === v3.__k ? f3 = A(v3, f3, n2) : "function" == typeof v3.type && void 0 !== g2 ? f3 = g2 : w3 && (f3 = w3.nextSibling), v3.__u &= -7);
  return u3.__e = d3, f3;
}
function P(n2, l3, u3, t3, i3) {
  var r3, o3, e3, f3, c3, s3 = u3.length, a3 = s3, h3 = 0;
  for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++)
    null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? (f3 = r3 + h3, (o3 = n2.__k[r3] = "string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? m(null, o3, null, null, null) : w(o3) ? m(k, { children: o3 }, null, null, null) : null == o3.constructor && o3.__b > 0 ? m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : o3).__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 != (c3 = o3.__i = L(o3, u3, f3, a3)) && (a3--, (e3 = u3[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f3 && (c3 == f3 - 1 ? h3-- : c3 == f3 + 1 ? h3++ : (c3 > f3 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
  if (a3)
    for (r3 = 0; r3 < s3; r3++)
      null != (e3 = u3[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = S(e3)), B(e3, e3));
  return t3;
}
function A(n2, l3, u3) {
  var t3, i3;
  if ("function" == typeof n2.type) {
    for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++)
      t3[i3] && (t3[i3].__ = n2, l3 = A(t3[i3], l3, u3));
    return l3;
  }
  n2.__e != l3 && (l3 && n2.type && !u3.contains(l3) && (l3 = S(n2)), u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function L(n2, l3, u3, t3) {
  var i3, r3, o3 = n2.key, e3 = n2.type, f3 = l3[u3];
  if (null === f3 && null == n2.key || f3 && o3 == f3.key && e3 == f3.type && 0 == (2 & f3.__u))
    return u3;
  if (t3 > (null != f3 && 0 == (2 & f3.__u) ? 1 : 0))
    for (i3 = u3 - 1, r3 = u3 + 1; i3 >= 0 || r3 < l3.length; ) {
      if (i3 >= 0) {
        if ((f3 = l3[i3]) && 0 == (2 & f3.__u) && o3 == f3.key && e3 == f3.type)
          return i3;
        i3--;
      }
      if (r3 < l3.length) {
        if ((f3 = l3[r3]) && 0 == (2 & f3.__u) && o3 == f3.key && e3 == f3.type)
          return r3;
        r3++;
      }
    }
  return -1;
}
function T(n2, l3, u3) {
  "-" == l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || v.test(l3) ? u3 : u3 + "px";
}
function j(n2, l3, u3, t3, i3) {
  var r3, o3;
  n:
    if ("style" == l3)
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
          for (l3 in t3)
            u3 && l3 in u3 || T(n2.style, l3, "");
        if (u3)
          for (l3 in u3)
            t3 && u3[l3] == t3[l3] || T(n2.style, l3, u3[l3]);
      }
    else if ("o" == l3[0] && "n" == l3[1])
      r3 = l3 != (l3 = l3.replace(f, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = c, n2.addEventListener(l3, r3 ? a : s, r3)) : n2.removeEventListener(l3, r3 ? a : s, r3);
    else {
      if ("http://www.w3.org/2000/svg" == i3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2)
        try {
          n2[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
    }
}
function F(n2) {
  return function(u3) {
    if (this.l) {
      var t3 = this.l[u3.type + n2];
      if (null == u3.t)
        u3.t = c++;
      else if (u3.t < t3.u)
        return;
      return t3(l.event ? l.event(u3) : u3);
    }
  };
}
function O(n2, u3, t3, i3, r3, o3, e3, f3, c3, s3) {
  var a3, h3, p3, y3, v3, _2, m3, b, S2, C3, M2, $2, P2, A3, H, L2, T3, j3 = u3.type;
  if (null != u3.constructor)
    return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), o3 = [f3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
  n:
    if ("function" == typeof j3)
      try {
        if (b = u3.props, S2 = "prototype" in j3 && j3.prototype.render, C3 = (a3 = j3.contextType) && i3[a3.__c], M2 = a3 ? C3 ? C3.props.value : a3.__ : i3, t3.__c ? m3 = (h3 = u3.__c = t3.__c).__ = h3.__E : (S2 ? u3.__c = h3 = new j3(b, M2) : (u3.__c = h3 = new x(b, M2), h3.constructor = j3, h3.render = D), C3 && C3.sub(h3), h3.props = b, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), S2 && null == h3.__s && (h3.__s = h3.state), S2 && null != j3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, j3.getDerivedStateFromProps(b, h3.__s))), y3 = h3.props, v3 = h3.state, h3.__v = u3, p3)
          S2 && null == j3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), S2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
        else {
          if (S2 && null == j3.getDerivedStateFromProps && b !== y3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b, M2), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b, h3.__s, M2) || u3.__v == t3.__v) {
            for (u3.__v != t3.__v && (h3.props = b, h3.state = h3.__s, h3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.some(function(n3) {
              n3 && (n3.__ = u3);
            }), $2 = 0; $2 < h3._sb.length; $2++)
              h3.__h.push(h3._sb[$2]);
            h3._sb = [], h3.__h.length && e3.push(h3);
            break n;
          }
          null != h3.componentWillUpdate && h3.componentWillUpdate(b, h3.__s, M2), S2 && null != h3.componentDidUpdate && h3.__h.push(function() {
            h3.componentDidUpdate(y3, v3, _2);
          });
        }
        if (h3.context = M2, h3.props = b, h3.__P = n2, h3.__e = false, P2 = l.__r, A3 = 0, S2) {
          for (h3.state = h3.__s, h3.__d = false, P2 && P2(u3), a3 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++)
            h3.__h.push(h3._sb[H]);
          h3._sb = [];
        } else
          do {
            h3.__d = false, P2 && P2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
          } while (h3.__d && ++A3 < 25);
        h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), S2 && !p3 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(y3, v3)), L2 = a3, null != a3 && a3.type === k && null == a3.key && (L2 = N(a3.props.children)), f3 = I(n2, w(L2) ? L2 : [L2], u3, t3, i3, r3, o3, e3, f3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && e3.push(h3), m3 && (h3.__E = h3.__ = null);
      } catch (n3) {
        if (u3.__v = null, c3 || null != o3)
          if (n3.then) {
            for (u3.__u |= c3 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; )
              f3 = f3.nextSibling;
            o3[o3.indexOf(f3)] = null, u3.__e = f3;
          } else
            for (T3 = o3.length; T3--; )
              g(o3[T3]);
        else
          u3.__e = t3.__e, u3.__k = t3.__k;
        l.__e(n3, u3, t3);
      }
    else
      null == o3 && u3.__v == t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : f3 = u3.__e = V(t3.__e, u3, t3, i3, r3, o3, e3, c3, s3);
  return (a3 = l.diffed) && a3(u3), 128 & u3.__u ? void 0 : f3;
}
function z(n2, u3, t3) {
  for (var i3 = 0; i3 < t3.length; i3++)
    q(t3[i3], t3[++i3], t3[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function N(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b && n2.__b > 0 ? n2 : w(n2) ? n2.map(N) : d({}, n2);
}
function V(u3, t3, i3, r3, o3, e3, f3, c3, s3) {
  var a3, h3, y3, v3, d3, _2, m3, b = i3.props, k3 = t3.props, x2 = t3.type;
  if ("svg" == x2 ? o3 = "http://www.w3.org/2000/svg" : "math" == x2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (a3 = 0; a3 < e3.length; a3++)
      if ((d3 = e3[a3]) && "setAttribute" in d3 == !!x2 && (x2 ? d3.localName == x2 : 3 == d3.nodeType)) {
        u3 = d3, e3[a3] = null;
        break;
      }
  }
  if (null == u3) {
    if (null == x2)
      return document.createTextNode(k3);
    u3 = document.createElementNS(o3, x2, k3.is && k3), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
  }
  if (null == x2)
    b === k3 || c3 && u3.data == k3 || (u3.data = k3);
  else {
    if (e3 = e3 && n.call(u3.childNodes), b = i3.props || p, !c3 && null != e3)
      for (b = {}, a3 = 0; a3 < u3.attributes.length; a3++)
        b[(d3 = u3.attributes[a3]).name] = d3.value;
    for (a3 in b)
      if (d3 = b[a3], "children" == a3)
        ;
      else if ("dangerouslySetInnerHTML" == a3)
        y3 = d3;
      else if (!(a3 in k3)) {
        if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3)
          continue;
        j(u3, a3, null, d3, o3);
      }
    for (a3 in k3)
      d3 = k3[a3], "children" == a3 ? v3 = d3 : "dangerouslySetInnerHTML" == a3 ? h3 = d3 : "value" == a3 ? _2 = d3 : "checked" == a3 ? m3 = d3 : c3 && "function" != typeof d3 || b[a3] === d3 || j(u3, a3, d3, b[a3], o3);
    if (h3)
      c3 || y3 && (h3.__html == y3.__html || h3.__html == u3.innerHTML) || (u3.innerHTML = h3.__html), t3.__k = [];
    else if (y3 && (u3.innerHTML = ""), I("template" == t3.type ? u3.content : u3, w(v3) ? v3 : [v3], t3, i3, r3, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o3, e3, f3, e3 ? e3[0] : i3.__k && S(i3, 0), c3, s3), null != e3)
      for (a3 = e3.length; a3--; )
        g(e3[a3]);
    c3 || (a3 = "value", "progress" == x2 && null == _2 ? u3.removeAttribute("value") : null != _2 && (_2 !== u3[a3] || "progress" == x2 && !_2 || "option" == x2 && _2 != b[a3]) && j(u3, a3, _2, b[a3], o3), a3 = "checked", null != m3 && m3 != u3[a3] && j(u3, a3, m3, b[a3], o3));
  }
  return u3;
}
function q(n2, u3, t3) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
    } else
      n2.current = u3;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function B(n2, u3, t3) {
  var i3, r3;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || q(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount)
      try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    i3.base = i3.__P = null;
  }
  if (i3 = n2.__k)
    for (r3 = 0; r3 < i3.length; r3++)
      i3[r3] && B(i3[r3], u3, t3 || "function" != typeof n2.type);
  t3 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function D(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function E(u3, t3, i3) {
  var r3, o3, e3, f3;
  t3 == document && (t3 = document.documentElement), l.__ && l.__(u3, t3), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, e3 = [], f3 = [], O(t3, u3 = (!r3 && i3 || t3).__k = _(k, null, [u3]), o3 || p, p, t3.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : t3.firstChild, r3, f3), z(e3, u3, f3);
}
n = y.slice, l = { __e: function(n2, l3, u3, t3) {
  for (var i3, r3, o3; l3 = l3.__; )
    if ((i3 = l3.__c) && !i3.__)
      try {
        if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), o3 = i3.__d), o3)
          return i3.__E = i3;
      } catch (l4) {
        n2 = l4;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, x.prototype.setState = function(n2, l3) {
  var u3;
  u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
  return n2.__v.__b - l3.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// ../../AppData/Local/deno/deno_esbuild/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = { type: "error", data: "parser error" };

// ../../AppData/Local/deno/deno_esbuild/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({ type, data }, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
function toArray(data) {
  if (data instanceof Uint8Array) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  } else {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
}
var TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (withNativeBlob && packet.data instanceof Blob) {
    return packet.data.arrayBuffer().then(toArray).then(callback);
  } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
    return callback(toArray(packet.data));
  }
  encodePacket(packet, false, (encoded) => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}

// ../../AppData/Local/deno/deno_esbuild/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i3 = 0; i3 < chars.length; i3++) {
  lookup[chars.charCodeAt(i3)] = i3;
}
var decode = (base64) => {
  let bufferLength = base64.length * 0.75, len = base64.length, i3, p3 = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i3 = 0; i3 < len; i3 += 4) {
    encoded1 = lookup[base64.charCodeAt(i3)];
    encoded2 = lookup[base64.charCodeAt(i3 + 1)];
    encoded3 = lookup[base64.charCodeAt(i3 + 2)];
    encoded4 = lookup[base64.charCodeAt(i3 + 3)];
    bytes[p3++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p3++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p3++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// ../../AppData/Local/deno/deno_esbuild/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return { base64: true, data };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      if (data instanceof Blob) {
        return data;
      } else {
        return new Blob([data]);
      }
    case "arraybuffer":
    default:
      if (data instanceof ArrayBuffer) {
        return data;
      } else {
        return data.buffer;
      }
  }
};

// ../../AppData/Local/deno/deno_esbuild/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i3) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i3] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i3 = 0; i3 < encodedPackets.length; i3++) {
    const decodedPacket = decodePacket(encodedPackets[i3], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
function createPacketEncoderStream() {
  return new TransformStream({
    transform(packet, controller) {
      encodePacketToBinary(packet, (encodedPacket) => {
        const payloadLength = encodedPacket.length;
        let header;
        if (payloadLength < 126) {
          header = new Uint8Array(1);
          new DataView(header.buffer).setUint8(0, payloadLength);
        } else if (payloadLength < 65536) {
          header = new Uint8Array(3);
          const view = new DataView(header.buffer);
          view.setUint8(0, 126);
          view.setUint16(1, payloadLength);
        } else {
          header = new Uint8Array(9);
          const view = new DataView(header.buffer);
          view.setUint8(0, 127);
          view.setBigUint64(1, BigInt(payloadLength));
        }
        if (packet.data && typeof packet.data !== "string") {
          header[0] |= 128;
        }
        controller.enqueue(header);
        controller.enqueue(encodedPacket);
      });
    }
  });
}
var TEXT_DECODER;
function totalLength(chunks) {
  return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
  if (chunks[0].length === size) {
    return chunks.shift();
  }
  const buffer = new Uint8Array(size);
  let j3 = 0;
  for (let i3 = 0; i3 < size; i3++) {
    buffer[i3] = chunks[0][j3++];
    if (j3 === chunks[0].length) {
      chunks.shift();
      j3 = 0;
    }
  }
  if (chunks.length && j3 < chunks[0].length) {
    chunks[0] = chunks[0].slice(j3);
  }
  return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  const chunks = [];
  let state = 0;
  let expectedLength = -1;
  let isBinary2 = false;
  return new TransformStream({
    transform(chunk, controller) {
      chunks.push(chunk);
      while (true) {
        if (state === 0) {
          if (totalLength(chunks) < 1) {
            break;
          }
          const header = concatChunks(chunks, 1);
          isBinary2 = (header[0] & 128) === 128;
          expectedLength = header[0] & 127;
          if (expectedLength < 126) {
            state = 3;
          } else if (expectedLength === 126) {
            state = 1;
          } else {
            state = 2;
          }
        } else if (state === 1) {
          if (totalLength(chunks) < 2) {
            break;
          }
          const headerArray = concatChunks(chunks, 2);
          expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
          state = 3;
        } else if (state === 2) {
          if (totalLength(chunks) < 8) {
            break;
          }
          const headerArray = concatChunks(chunks, 8);
          const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
          const n2 = view.getUint32(0);
          if (n2 > Math.pow(2, 53 - 32) - 1) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
          expectedLength = n2 * Math.pow(2, 32) + view.getUint32(4);
          state = 3;
        } else {
          if (totalLength(chunks) < expectedLength) {
            break;
          }
          const data = concatChunks(chunks, expectedLength);
          controller.enqueue(decodePacket(isBinary2 ? data : TEXT_DECODER.decode(data), binaryType));
          state = 0;
        }
        if (expectedLength === 0 || expectedLength > maxPayload) {
          controller.enqueue(ERROR_PACKET);
          break;
        }
      }
    }
  });
}
var protocol = 4;

// ../../AppData/Local/deno/deno_esbuild/@socket.io/component-emitter@3.1.2/node_modules/@socket.io/component-emitter/lib/esm/index.js
function Emitter(obj) {
  if (obj)
    return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function(event, fn) {
  function on2() {
    this.off(event, on2);
    fn.apply(this, arguments);
  }
  on2.fn = fn;
  this.on(event, on2);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks)
    return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i3 = 0; i3 < callbacks.length; i3++) {
    cb = callbacks[i3];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i3, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function(event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
  for (var i3 = 1; i3 < arguments.length; i3++) {
    args[i3 - 1] = arguments[i3];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i3 = 0, len = callbacks.length; i3 < len; ++i3) {
      callbacks[i3].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function(event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function(event) {
  return !!this.listeners(event).length;
};

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/globals.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb) => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();
var defaultBinaryType = "arraybuffer";
function createCookieJar() {
}

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k3) => {
    if (obj.hasOwnProperty(k3)) {
      acc[k3] = obj[k3];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c3 = 0, length = 0;
  for (let i3 = 0, l3 = str.length; i3 < l3; i3++) {
    c3 = str.charCodeAt(i3);
    if (c3 < 128) {
      length += 1;
    } else if (c3 < 2048) {
      length += 2;
    } else if (c3 < 55296 || c3 >= 57344) {
      length += 3;
    } else {
      i3++;
      length += 4;
    }
  }
  return length;
}
function randomString() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode(obj) {
  let str = "";
  for (let i3 in obj) {
    if (obj.hasOwnProperty(i3)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i3) + "=" + encodeURIComponent(obj[i3]);
    }
  }
  return str;
}
function decode2(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i3 = 0, l3 = pairs.length; i3 < l3; i3++) {
    let pair = pairs[i3].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/transport.js
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
    this.supportsBinary = !opts.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   */
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  /**
   * Closes the transport.
   */
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {
    }
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(data) {
    const packet = decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(onPause) {
  }
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
};

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/transports/polling.js
var Polling = class extends Transport {
  constructor() {
    super(...arguments);
    this._polling = false;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this._polling || !this.writable) {
      let total = 0;
      if (this._polling) {
        total++;
        this.once("pollComplete", function() {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function() {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(data) {
    const callback = (packet) => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({ description: "transport closed by the server" });
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this._polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this._poll();
      } else {
      }
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const close = () => {
      this.write([{ type: "close" }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data) => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
};

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {
}
var hasCORS = value;

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/transports/polling-xhr.js
function empty() {
}
var BaseXHR = class extends Polling {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(opts) {
    super(opts);
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class _Request extends Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(createRequest, uri, opts) {
    super();
    this.createRequest = createRequest;
    installTimerFunctions(this, opts);
    this._opts = opts;
    this._method = opts.method || "GET";
    this._uri = uri;
    this._data = void 0 !== opts.data ? opts.data : null;
    this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var _a;
    const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this._opts.xd;
    const xhr = this._xhr = this.createRequest(opts);
    try {
      xhr.open(this._method, this._uri, true);
      try {
        if (this._opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i3 in this._opts.extraHeaders) {
            if (this._opts.extraHeaders.hasOwnProperty(i3)) {
              xhr.setRequestHeader(i3, this._opts.extraHeaders[i3]);
            }
          }
        }
      } catch (e3) {
      }
      if ("POST" === this._method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e3) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e3) {
      }
      (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this._opts.withCredentials;
      }
      if (this._opts.requestTimeout) {
        xhr.timeout = this._opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a2;
        if (xhr.readyState === 3) {
          (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(
            // @ts-ignore
            xhr.getResponseHeader("set-cookie")
          );
        }
        if (4 !== xhr.readyState)
          return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this._onLoad();
        } else {
          this.setTimeoutFn(() => {
            this._onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this._data);
    } catch (e3) {
      this.setTimeoutFn(() => {
        this._onError(e3);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this._index = _Request.requestsCount++;
      _Request.requests[this._index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(err) {
    this.emitReserved("error", err, this._xhr);
    this._cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(fromError) {
    if ("undefined" === typeof this._xhr || null === this._xhr) {
      return;
    }
    this._xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this._xhr.abort();
      } catch (e3) {
      }
    }
    if (typeof document !== "undefined") {
      delete _Request.requests[this._index];
    }
    this._xhr = null;
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const data = this._xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this._cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i3 in Request.requests) {
    if (Request.requests.hasOwnProperty(i3)) {
      Request.requests[i3].abort();
    }
  }
}
var hasXHR2 = function() {
  const xhr = newRequest({
    xdomain: false
  });
  return xhr && xhr.responseType !== null;
}();
var XHR = class extends BaseXHR {
  constructor(opts) {
    super(opts);
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd }, this.opts);
    return new Request(newRequest, this.uri(), opts);
  }
};
function newRequest(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e3) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e3) {
    }
  }
}

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/transports/websocket.js
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var BaseWS = class extends Transport {
  get name() {
    return "websocket";
  }
  doOpen() {
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = this.createSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e3) => this.onError("websocket error", e3);
  }
  write(packets) {
    this.writable = false;
    for (let i3 = 0; i3 < packets.length; i3++) {
      const packet = packets[i3];
      const lastPacket = i3 === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data) => {
        try {
          this.doWrite(packet, data);
        } catch (e3) {
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.onerror = () => {
      };
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
};
var WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var WS = class extends BaseWS {
  createSocket(uri, protocols, opts) {
    return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
  }
  doWrite(_packet, data) {
    this.ws.send(data);
  }
};

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/transports/webtransport.js
var WT = class extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((err) => {
      this.onError("webtransport error", err);
    });
    this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((stream) => {
        const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = createPacketEncoderStream();
        encoderStream.readable.pipeTo(stream.writable);
        this._writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({ done, value: value2 }) => {
            if (done) {
              return;
            }
            this.onPacket(value2);
            read();
          }).catch((err) => {
          });
        };
        read();
        const packet = { type: "open" };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this._writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i3 = 0; i3 < packets.length; i3++) {
      const packet = packets[i3];
      const lastPacket = i3 === packets.length - 1;
      this._writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a;
    (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
  }
};

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  webtransport: WT,
  polling: XHR
};

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function parse(str) {
  if (str.length > 8e3) {
    throw "URI too long";
  }
  const src = str, b = str.indexOf("["), e3 = str.indexOf("]");
  if (b != -1 && e3 != -1) {
    str = str.substring(0, b) + str.substring(b, e3).replace(/:/g, ";") + str.substring(e3, str.length);
  }
  let m3 = re.exec(str || ""), uri = {}, i3 = 14;
  while (i3--) {
    uri[parts[i3]] = m3[i3] || "";
  }
  if (b != -1 && e3 != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/socket.js
var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
var OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
  addEventListener("offline", () => {
    OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
  }, false);
}
var SocketWithoutUpgrade = class _SocketWithoutUpgrade extends Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(uri, opts) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    this._prevBufferLen = 0;
    this._pingInterval = -1;
    this._pingTimeout = -1;
    this._maxPayload = -1;
    this._pingTimeoutTime = Infinity;
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      const parsedUri = parse(uri);
      opts.hostname = parsedUri.host;
      opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
      opts.port = parsedUri.port;
      if (parsedUri.query)
        opts.query = parsedUri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = [];
    this._transportsByName = {};
    opts.transports.forEach((t3) => {
      const transportName = t3.prototype.name;
      this.transports.push(transportName);
      this._transportsByName[transportName] = t3;
    });
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode2(this.opts.query);
    }
    if (withEventListeners) {
      if (this.opts.closeOnBeforeunload) {
        this._beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this._beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this._offlineEventListener = () => {
          this._onClose("transport close", {
            description: "network connection lost"
          });
        };
        OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
      }
    }
    if (this.opts.withCredentials) {
      this._cookieJar = createCookieJar();
    }
    this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(name2) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol;
    query.transport = name2;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name2]);
    return new this._transportsByName[name2](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const transportName = this.opts.rememberUpgrade && _SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const transport = this.createTransport(transportName);
    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason) => this._onClose("transport close", reason));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open";
    _SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this._sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          this._resetPingTimeout();
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this._onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {
    }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this._pingInterval = data.pingInterval;
    this._pingTimeout = data.pingTimeout;
    this._maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState)
      return;
    this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const delay = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + delay;
    this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, delay);
    if (this.opts.autoUnref) {
      this._pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen);
    this._prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this._getWritablePackets();
      this.transport.send(packets);
      this._prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i3 = 0; i3 < this.writeBuffer.length; i3++) {
      const data = this.writeBuffer[i3].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i3 > 0 && payloadSize > this._maxPayload) {
        return this.writeBuffer.slice(0, i3);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return true;
    const hasExpired = Date.now() > this._pingTimeoutTime;
    if (hasExpired) {
      this._pingTimeoutTime = 0;
      nextTick(() => {
        this._onClose("ping timeout");
      }, this.setTimeoutFn);
    }
    return hasExpired;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const close = () => {
      this._onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(err) {
    _SocketWithoutUpgrade.priorWebsocketSuccess = false;
    if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
      this.transports.shift();
      return this._open();
    }
    this.emitReserved("error", err);
    this._onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this._pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (withEventListeners) {
        if (this._beforeunloadEventListener) {
          removeEventListener("beforeunload", this._beforeunloadEventListener, false);
        }
        if (this._offlineEventListener) {
          const i3 = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
          if (i3 !== -1) {
            OFFLINE_EVENT_LISTENERS.splice(i3, 1);
          }
        }
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this._prevBufferLen = 0;
    }
  }
};
SocketWithoutUpgrade.protocol = protocol;
var SocketWithUpgrade = class extends SocketWithoutUpgrade {
  constructor() {
    super(...arguments);
    this._upgrades = [];
  }
  onOpen() {
    super.onOpen();
    if ("open" === this.readyState && this.opts.upgrade) {
      for (let i3 = 0; i3 < this._upgrades.length; i3++) {
        this._probe(this._upgrades[i3]);
      }
    }
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(name2) {
    let transport = this.createTransport(name2);
    let failed = false;
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed)
              return;
            if ("closed" === this.readyState)
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this._upgrades.indexOf("webtransport") !== -1 && name2 !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  onHandshake(data) {
    this._upgrades = this._filterUpgrades(data.upgrades);
    super.onHandshake(data);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    for (let i3 = 0; i3 < upgrades.length; i3++) {
      if (~this.transports.indexOf(upgrades[i3]))
        filteredUpgrades.push(upgrades[i3]);
    }
    return filteredUpgrades;
  }
};
var Socket = class extends SocketWithUpgrade {
  constructor(uri, opts = {}) {
    const o3 = typeof uri === "object" ? uri : opts;
    if (!o3.transports || o3.transports && typeof o3.transports[0] === "string") {
      o3.transports = (o3.transports || ["polling", "websocket", "webtransport"]).map((transportName) => transports[transportName]).filter((t3) => !!t3);
    }
    super(uri, o3);
  }
};

// ../../AppData/Local/deno/deno_esbuild/engine.io-client@6.6.3/node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;

// ../../AppData/Local/deno/deno_esbuild/socket.io-client@4.8.1/node_modules/socket.io-client/build/esm/url.js
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = parse(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// ../../AppData/Local/deno/deno_esbuild/socket.io-parser@4.2.4/node_modules/socket.io-parser/build/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol3
});

// ../../AppData/Local/deno/deno_esbuild/socket.io-parser@4.2.4/node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer3 = typeof ArrayBuffer === "function";
var isView2 = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob2 = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer3 && (obj instanceof ArrayBuffer || isView2(obj)) || withNativeBlob2 && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i3 = 0, l3 = obj.length; i3 < l3; i3++) {
      if (hasBinary(obj[i3])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// ../../AppData/Local/deno/deno_esbuild/socket.io-parser@4.2.4/node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (isBinary(data)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i3 = 0; i3 < data.length; i3++) {
      newData[i3] = _deconstructPacket(data[i3], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i3 = 0; i3 < data.length; i3++) {
      data[i3] = _reconstructPacket(data[i3], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// ../../AppData/Local/deno/deno_esbuild/socket.io-parser@4.2.4/node_modules/socket.io-parser/build/esm/index.js
var RESERVED_EVENTS = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
];
var protocol3 = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer) {
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
function isObject(value2) {
  return Object.prototype.toString.call(value2) === "[object Object]";
}
var Decoder = class _Decoder extends Emitter {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(str) {
    let i3 = 0;
    const p3 = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p3.type] === void 0) {
      throw new Error("unknown packet type " + p3.type);
    }
    if (p3.type === PacketType.BINARY_EVENT || p3.type === PacketType.BINARY_ACK) {
      const start = i3 + 1;
      while (str.charAt(++i3) !== "-" && i3 != str.length) {
      }
      const buf = str.substring(start, i3);
      if (buf != Number(buf) || str.charAt(i3) !== "-") {
        throw new Error("Illegal attachments");
      }
      p3.attachments = Number(buf);
    }
    if ("/" === str.charAt(i3 + 1)) {
      const start = i3 + 1;
      while (++i3) {
        const c3 = str.charAt(i3);
        if ("," === c3)
          break;
        if (i3 === str.length)
          break;
      }
      p3.nsp = str.substring(start, i3);
    } else {
      p3.nsp = "/";
    }
    const next = str.charAt(i3 + 1);
    if ("" !== next && Number(next) == next) {
      const start = i3 + 1;
      while (++i3) {
        const c3 = str.charAt(i3);
        if (null == c3 || Number(c3) != c3) {
          --i3;
          break;
        }
        if (i3 === str.length)
          break;
      }
      p3.id = Number(str.substring(start, i3 + 1));
    }
    if (str.charAt(++i3)) {
      const payload = this.tryParse(str.substr(i3));
      if (_Decoder.isPayloadValid(p3.type, payload)) {
        p3.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p3;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e3) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};

// ../../AppData/Local/deno/deno_esbuild/socket.io-client@4.8.1/node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// ../../AppData/Local/deno/deno_esbuild/socket.io-client@4.8.1/node_modules/socket.io-client/build/esm/socket.js
var RESERVED_EVENTS2 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
var Socket2 = class extends Emitter {
  /**
   * `Socket` constructor.
   */
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect)
      this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const io = this.io;
    this.subs = [
      on(io, "open", this.onopen.bind(this)),
      on(io, "packet", this.onpacket.bind(this)),
      on(io, "error", this.onerror.bind(this)),
      on(io, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if ("open" === this.io._readyState)
      this.onopen();
    return this;
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(ev, ...args) {
    var _a, _b, _c;
    if (RESERVED_EVENTS2.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
    const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
    const discardPacket = this.flags.volatile && !isTransportWritable;
    if (discardPacket) {
    } else if (isConnected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  /**
   * @private
   */
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i3 = 0; i3 < this.sendBuffer.length; i3++) {
        if (this.sendBuffer[i3].id === id) {
          this.sendBuffer.splice(i3, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    const fn = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, args);
    };
    fn.withError = true;
    this.acks[id] = fn;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(ev, ...args) {
    return new Promise((resolve, reject) => {
      const fn = (arg1, arg2) => {
        return arg1 ? reject(arg1) : resolve(arg2);
      };
      fn.withError = true;
      args.push(fn);
      this.emit(ev, ...args);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({ fromQueue: true }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    if (typeof this.auth == "function") {
      this.auth((data) => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(data) {
    this.packet({
      type: PacketType.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
    this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((id) => {
      const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
      if (!isBuffered) {
        const ack = this.acks[id];
        delete this.acks[id];
        if (ack.withError) {
          ack.call(this, new Error("socket has been disconnected"));
        }
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(id) {
    const self2 = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      self2.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(packet) {
    const ack = this.acks[packet.id];
    if (typeof ack !== "function") {
      return;
    }
    delete this.acks[packet.id];
    if (ack.withError) {
      packet.data.unshift(null);
    }
    ack.apply(this, packet.data);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    if (this.connected) {
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i3 = 0; i3 < listeners.length; i3++) {
        if (listener === listeners[i3]) {
          listeners.splice(i3, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i3 = 0; i3 < listeners.length; i3++) {
        if (listener === listeners[i3]) {
          listeners.splice(i3, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// ../../AppData/Local/deno/deno_esbuild/socket.io-client@4.8.1/node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min) {
  this.ms = min;
};
Backoff.prototype.setMax = function(max) {
  this.max = max;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};

// ../../AppData/Local/deno/deno_esbuild/socket.io-client@4.8.1/node_modules/socket.io-client/build/esm/manager.js
var Manager = class extends Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || esm_exports;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v3) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v3;
    if (!v3) {
      this.skipReconnect = true;
    }
    return this;
  }
  reconnectionAttempts(v3) {
    if (v3 === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v3;
    return this;
  }
  reconnectionDelay(v3) {
    var _a;
    if (v3 === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v3;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v3);
    return this;
  }
  randomizationFactor(v3) {
    var _a;
    if (v3 === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v3;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v3);
    return this;
  }
  reconnectionDelayMax(v3) {
    var _a;
    if (v3 === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v3;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v3);
    return this;
  }
  timeout(v3) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v3;
    return this;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(fn) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket(this.uri, this.opts);
    const socket = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self2.onopen();
      fn && fn();
    });
    const onError = (err) => {
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const errorSub = on(socket, "error", onError);
    if (false !== this._timeout) {
      const timeout = this._timeout;
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(fn) {
    return this.open(fn);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(
      on(socket, "ping", this.onping.bind(this)),
      on(socket, "data", this.ondata.bind(this)),
      on(socket, "error", this.onerror.bind(this)),
      on(socket, "close", this.onclose.bind(this)),
      // @ts-ignore
      on(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e3) {
      this.onclose("parse error", e3);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(packet) {
    nextTick(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(err) {
    this.emitReserved("error", err);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket2(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i3 = 0; i3 < encodedPackets.length; i3++) {
      this.engine.write(encodedPackets[i3], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(reason, description) {
    var _a;
    this.cleanup();
    (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self2 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self2.skipReconnect)
          return;
        this.emitReserved("reconnect_attempt", self2.backoff.attempts);
        if (self2.skipReconnect)
          return;
        self2.open((err) => {
          if (err) {
            self2._reconnecting = false;
            self2.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self2.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// ../../AppData/Local/deno/deno_esbuild/socket.io-client@4.8.1/node_modules/socket.io-client/build/esm/index.js
var cache = {};
function lookup2(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup2, {
  Manager,
  Socket: Socket2,
  io: lookup2,
  connect: lookup2
});

// ../../AppData/Local/deno/deno_esbuild/preact@10.26.7/node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var s2 = c2.__;
function p2(n2, t3) {
  c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
  var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
}
function d2(n2) {
  return o2 = 1, h2(D2, n2);
}
function h2(n2, u3, i3) {
  var o3 = p2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.__f)) {
    var f3 = function(n3, t3, r3) {
      if (!o3.__c.__H)
        return true;
      var u4 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u4.every(function(n4) {
        return !n4.__N;
      }))
        return !c3 || c3.call(this, n3, t3, r3);
      var i4 = o3.__c.props !== n3;
      return u4.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), c3 && c3.call(this, n3, t3, r3) || i4;
    };
    r2.__f = true;
    var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n3, t3, r3) {
      if (this.__e) {
        var u4 = c3;
        c3 = void 0, f3(n3, t3, r3), c3 = u4;
      }
      e3 && e3.call(this, n3, t3, r3);
    }, r2.shouldComponentUpdate = f3;
  }
  return o3.__N || o3.__;
}
function y2(n2, u3) {
  var i3 = p2(t2++, 3);
  !c2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.u = u3, r2.__H.__h.push(i3));
}
function A2(n2) {
  return o2 = 5, T2(function() {
    return { current: n2 };
  }, []);
}
function T2(n2, r3) {
  var u3 = p2(t2++, 7);
  return C2(u3.__H, r3) && (u3.__ = n2(), u3.__H = r3, u3.__h = n2), u3.__;
}
function j2() {
  for (var n2; n2 = f2.shift(); )
    if (n2.__P && n2.__H)
      try {
        n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
      } catch (t3) {
        n2.__H.__h = [], c2.__e(t3, n2.__v);
      }
}
c2.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, c2.__ = function(n2, t3) {
  n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
}, c2.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
  })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
}, c2.diffed = function(n2) {
  v2 && v2(n2);
  var t3 = n2.__c;
  t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
    n3.u && (n3.__H = n3.u), n3.u = void 0;
  })), u2 = r2 = null;
}, c2.__c = function(n2, t3) {
  t3.some(function(n3) {
    try {
      n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B2(n4);
      });
    } catch (r3) {
      t3.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t3 = [], c2.__e(r3, n3.__v);
    }
  }), l2 && l2(n2, t3);
}, c2.unmount = function(n2) {
  m2 && m2(n2);
  var t3, r3 = n2.__c;
  r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
    try {
      z2(n3);
    } catch (n4) {
      t3 = n4;
    }
  }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n2) {
  var t3, r3 = function() {
    clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r3, 35);
  k2 && (t3 = requestAnimationFrame(r3));
}
function z2(n2) {
  var t3 = r2, u3 = n2.__c;
  "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
}
function B2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function C2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
function D2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

// components/TabbedContainer.tsx
function TabbedContainer({ tabs }) {
  const getInitialIndex = () => {
    const param = new URLSearchParams(window.location.search).get("tab");
    const index = tabs.findIndex(
      (tab) => tab.title.toLowerCase() === param?.toLowerCase()
    );
    return index >= 0 ? index : 0;
  };
  const [activeIndex, setActiveIndex] = d2(getInitialIndex);
  y2(() => {
    const url2 = new URL(window.location.href);
    url2.searchParams.set("tab", tabs[activeIndex].title.toLowerCase());
    window.history.replaceState(null, "", url2.toString());
  }, [activeIndex]);
  return /* @__PURE__ */ _("div", { class: "container-fluid" }, /* @__PURE__ */ _("div", { class: "tab-bar" }, tabs.map((tab, index) => /* @__PURE__ */ _(
    "button",
    {
      class: "tab-selector " + (activeIndex === index ? "bubble" : ""),
      key: index,
      type: "button",
      onClick: () => setActiveIndex(index),
      style: {
        fontWeight: activeIndex === index ? "500" : "400"
      }
    },
    tab.title
  ))), /* @__PURE__ */ _("div", { style: { paddingTop: "1rem" } }, tabs[activeIndex]?.content));
}

// components/Container.tsx
function Container({
  children
}) {
  return /* @__PURE__ */ _("div", { class: "container-fluid row" }, children);
}

// components/DashboardItem.tsx
function DashboardItem({ children, noBubble = false }) {
  return /* @__PURE__ */ _("div", { class: "column-item " + (!noBubble ? " bubble" : "") }, children);
}

// components/AngleDisplay.tsx
var AngleDisplay = ({
  angle,
  counterClockwise = false,
  zero = -90,
  radius = 30
}) => {
  const canvasRef = A2(null);
  y2(() => {
    angle = (angle + zero) / 180 * Math.PI * (counterClockwise ? -1 : 1);
    const canvas = canvasRef.current;
    if (!canvas)
      return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(-100, -100, 1e4, 1e4);
      ctx.beginPath();
      ctx.arc(radius / 2, radius / 2, radius / 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgb(255, 1, 152)";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(radius / 2, radius / 2, radius / 2 - Math.ceil(radius / 10), 0, Math.PI * 2);
      ctx.fillStyle = "rgb(51, 51, 94)";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(radius / 2, radius / 2);
      ctx.lineTo(Math.cos(angle) * radius * 0.5 + radius / 2, Math.sin(angle) * radius * 0.5 + radius / 2);
      ctx.strokeStyle = "rgb(68, 142, 205)";
      ctx.lineWidth = Math.ceil(radius / 10);
      ctx.stroke();
    }
  }, [angle, radius]);
  return /* @__PURE__ */ _(k, null, /* @__PURE__ */ _("canvas", { ref: canvasRef, width: radius, height: radius }));
};
var AngleDisplay_default = AngleDisplay;

// components/Readout.tsx
var Readout = ({
  text,
  chars: chars2,
  angle = false,
  small = false,
  color = "#eed",
  temperature = false
}) => {
  return /* @__PURE__ */ _("div", { style: "margin-bottom: 0; padding-bottom: 0;" }, /* @__PURE__ */ _(
    "b",
    {
      style: {
        ...angle ? {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          color,
          width: chars2 ? `${chars2 * 1.3}rem` : void 0,
          fontSize: "1.2rem",
          lineHeight: "1.2rem",
          paddingTop: "0.2rem",
          paddingBottom: "0.2rem"
        } : {
          display: "inline-block",
          color,
          width: chars2 ? `${chars2 * 1.3}rem` : void 0
        },
        ...temperature ? Number(text) > 60 ? {
          borderColor: "red"
        } : Number(text) > 50 ? {
          borderColor: "yellow"
        } : {} : {}
      },
      class: "readout" + (small ? " small" : "")
    },
    angle ? /* @__PURE__ */ _(k, null, /* @__PURE__ */ _("div", { style: "padding-right: 0.5rem;" }, angle ? text?.toString().padStart(3, "0") : text), /* @__PURE__ */ _("div", null, /* @__PURE__ */ _(AngleDisplay_default, { angle: Number(text), radius: 25 }))) : /* @__PURE__ */ _(k, null, text)
  ));
};
var Readout_default = Readout;

// components/NTReadout.tsx
var NTReadout = ({
  nt,
  socket,
  defaultVal = "null",
  chars: chars2,
  precision,
  color = "#eed",
  small,
  index,
  angle = false,
  temperature = false
}) => {
  const [value2, setValue] = d2(defaultVal);
  y2(() => {
    const handler = (newVal) => {
      if (newVal !== void 0 && newVal !== null) {
        if (Array.isArray(newVal) && typeof index === "number") {
          newVal = newVal[index];
        }
        if (precision !== void 0) {
          if (precision == 0) {
            newVal = Math.floor(newVal);
          } else {
            newVal = newVal.toFixed(precision);
          }
        }
        setValue(newVal);
      }
    };
    socket.on(nt, handler);
    return () => {
      socket.off(nt, handler);
    };
  }, [nt, socket, index, precision]);
  return /* @__PURE__ */ _(Readout_default, { text: value2 !== void 0 && value2 !== null ? value2 : null, angle, temperature, small, color, chars: chars2 });
};
var NTReadout_default = NTReadout;

// components/Button.tsx
var Button = ({
  text,
  onClick,
  onRelease,
  disabled = false,
  color = "rgb(68,142,205)",
  style
}) => {
  const buttonClass = `button${disabled ? " disabled" : ""}`;
  return /* @__PURE__ */ _(
    "button",
    {
      className: buttonClass,
      type: "button",
      onMouseDown: () => !disabled && onClick?.(),
      onMouseUp: () => !disabled && onRelease?.(),
      style: {
        backgroundColor: color,
        ...style ? style : {}
      },
      disabled
    },
    text
  );
};
var Button_default = Button;

// components/Switch.tsx
var Switch = ({
  initialState = false,
  onColor = "rgb(116,255,6)",
  offColor = "#ccc",
  disabled = false,
  vertical = false,
  onToggle
}) => {
  const [isOn, setIsOn] = d2(initialState);
  y2(() => {
    setIsOn(initialState);
  }, [initialState]);
  const handleClick = () => {
    if (disabled)
      return;
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };
  const switchClass = `switch ${isOn ? "on" : "off"} ${vertical ? "vertical" : ""} ${disabled ? "disabled" : ""}`;
  return /* @__PURE__ */ _(
    "div",
    {
      className: switchClass,
      style: {
        backgroundColor: disabled ? "#e0e0e0" : isOn ? onColor : offColor
      },
      onClick: handleClick
    },
    /* @__PURE__ */ _(
      "div",
      {
        className: "knob"
      }
    )
  );
};
var Switch_default = Switch;

// components/FlexRow.tsx
function FlexRow({
  children,
  noPadding = false
}) {
  return /* @__PURE__ */ _("div", { style: "display: flex; justify-center: center; align-items: center;" }, noPadding ? children : children.map((item, index) => {
    return (
      // apply styles padding only when the item isn't the last one
      /* @__PURE__ */ _(
        "div",
        {
          style: index < children.length ? { paddingRight: "0.5rem" } : {}
        },
        item
      )
    );
  }));
}

// components/ArmableButton.tsx
var ArmableButton = ({
  text,
  onClick,
  onRelease,
  onToggle,
  disabled = true,
  btnColor = "rgb(68,142,205)"
}) => {
  const [isDisabled, setIsDisabled] = d2(disabled);
  return /* @__PURE__ */ _(FlexRow, { noPadding: true }, /* @__PURE__ */ _("div", { style: "margin-right: 10px; height: 100%;" }, /* @__PURE__ */ _(
    Button_default,
    {
      text,
      color: btnColor,
      disabled: isDisabled,
      onClick,
      onRelease
    }
  )), /* @__PURE__ */ _(Switch_default, { onColor: "#ef0001", offColor: "rgba(116, 255, 6, 1)", onToggle: (on2) => {
    setIsDisabled(!on2);
    onToggle?.(on2);
  } }));
};
var ArmableButton_default = ArmableButton;

// panels/SimpleSubsystem.tsx
var SimpleSubsystem = ({
  absolute = false,
  unit,
  gearRatio = 1,
  dashboardItem = false,
  fillContainer = false,
  velocity = false,
  precision = 0,
  socket,
  name: name2
}) => {
  if (!unit) {
    unit = velocity ? "rpm" : "deg";
  }
  const onToggle = (on2) => {
    socket.emit("Unlock_" + name2, on2);
    console.log("Setting " + name2 + " to " + on2);
  };
  const onClick = () => {
    socket.emit("Calibrate_" + name2, true);
  };
  const onRelease = () => {
    socket.emit("Calibrate_" + name2, false);
  };
  return /* @__PURE__ */ _(
    "div",
    {
      class: "bubble" + (dashboardItem ? " column-item" : "") + (fillContainer ? " h-100" : ""),
      style: {
        //vertically align in column
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: fillContainer ? "0.5rem" : "1rem"
      }
    },
    /* @__PURE__ */ _("label", null, name2),
    !velocity && !absolute ? /* @__PURE__ */ _(k, null, /* @__PURE__ */ _(
      ArmableButton_default,
      {
        text: "CALIB",
        onToggle,
        onClick,
        onRelease
      }
    ), !(typeof InstallTrigger !== "undefined") ? /* @__PURE__ */ _(k, null) : /* @__PURE__ */ _("br", null)) : /* @__PURE__ */ _(k, null),
    absolute ? /* @__PURE__ */ _("div", { style: {
      //vertically align them in a row. should prob split this into a class.
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center"
    } }, /* @__PURE__ */ _("div", null, /* @__PURE__ */ _("div", { style: "min-height: 2.5rem; margin-top: 1rem;", class: "flex-row" }, /* @__PURE__ */ _("label", { class: "label-small pr-3" }, velocity ? "Vel" : "Pos", " (", unit, ")"), /* @__PURE__ */ _(
      NTReadout_default,
      {
        nt: name2 + (velocity ? "_Velocity_(" + unit + ")" : "_Position_(" + unit + ")"),
        precision,
        chars: 3,
        socket
      }
    )), /* @__PURE__ */ _("div", { style: "min-height: 2.5rem", class: "flex-row" }, /* @__PURE__ */ _("label", { class: "label-small pr-3" }, "Temp (C)"), /* @__PURE__ */ _(NTReadout_default, { nt: name2 + "_Temp_(C)", socket, precision: 3, temperature: true }))), /* @__PURE__ */ _("div", { style: "margin-left: 0.25rem;" }, /* @__PURE__ */ _(Switch_default, { onColor: "#ef0001", offColor: "rgba(116, 255, 6, 1)", onToggle, vertical: true }))) : /* @__PURE__ */ _(k, null, /* @__PURE__ */ _("div", { style: "min-height: 2.5rem; margin-top: 0.5rem;", class: "flex-row" }, /* @__PURE__ */ _("label", { class: "label-small pr-2" }, velocity ? "Vel" : "Pos", " (", unit, ")"), /* @__PURE__ */ _(
      NTReadout_default,
      {
        nt: name2 + (velocity ? "_Velocity_(" + unit + ")" : "_Position_(" + unit + ")"),
        precision,
        chars: 3,
        socket
      }
    )), /* @__PURE__ */ _("div", { style: "min-height: 2.5rem", class: "flex-row" }, /* @__PURE__ */ _("label", { class: "label-small pr-3" }, "Temp (C)"), /* @__PURE__ */ _(NTReadout_default, { nt: name2 + "_Temp_(C)", socket, precision: 3, temperature: true })))
  );
};
var SimpleSubsystem_default = SimpleSubsystem;

// panels/SwerveModules.tsx
var SwerveModules = ({
  socket,
  dashboardItem = false,
  shifting = false
}) => {
  const onToggleUnlock = (on2) => {
    socket.emit("Unlock_Azimuth", on2);
    console.log("Setting " + name + " to " + on2);
  };
  const onClickCalib = () => {
    socket.emit("Calibrate_Wheels", true);
  };
  const onReleaseCalib = () => {
    socket.emit("Calibrate_Wheels", false);
  };
  const onClickHome = () => {
    socket.emit("Home_Wheels", true);
  };
  const onReleaseHome = () => {
    socket.emit("Home_Wheels", false);
  };
  return /* @__PURE__ */ _("div", { class: "swerve-modules " + (dashboardItem ? "column-item" : ""), style: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    wrap: "no-wrap"
  } }, /* @__PURE__ */ _("table", null, /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("th", null), /* @__PURE__ */ _("th", null, "Module 1"), /* @__PURE__ */ _("th", null, "Module 0")), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Angle (deg)")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_1_Details`, precision: 0, index: 0, chars: 4, socket, angle: true })), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_0_Details`, precision: 0, index: 0, chars: 4, socket, angle: true }))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Temp (C)")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_1_Details`, index: 1, precision: 0, chars: 4, socket, temperature: true })), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_0_Details`, index: 1, precision: 0, chars: 4, socket, temperature: true }))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Vel (ft/s)")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_1_Details`, precision: 1, index: 2, chars: 4, socket })), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_0_Details`, precision: 1, index: 2, chars: 4, socket }))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Shifter")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_1_Details`, index: 3, chars: 4, socket })), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_0_Details`, index: 3, chars: 4, socket })))), /* @__PURE__ */ _("table", { class: "mt-3" }, /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("th", null), /* @__PURE__ */ _("th", null, "Module 2"), /* @__PURE__ */ _("th", null, "Module 3")), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Angle (deg)")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_2_Details`, precision: 0, index: 0, chars: 4, socket, angle: true })), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_3_Details`, precision: 0, index: 0, chars: 4, socket, angle: true }))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Temp (C)")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_2_Details`, index: 1, precision: 0, chars: 4, socket, temperature: true })), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_3_Details`, index: 1, precision: 0, chars: 4, socket, temperature: true }))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Vel (ft/s)")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_2_Details`, precision: 1, index: 2, chars: 4, socket })), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_3_Details`, precision: 1, index: 2, chars: 4, socket }))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Shifter")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_2_Details`, index: 3, chars: 4, socket })), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTReadout_default, { nt: `Swerve_3_Details`, index: 3, chars: 4, socket })))), /* @__PURE__ */ _("div", { style: "display: flex; justify-center: center; align-items: center; padding-top: 1rem;" }, /* @__PURE__ */ _("div", { style: "padding-right: 0.4rem;" }, /* @__PURE__ */ _(Button_default, { text: "HOME", onClick: onClickHome, onRelease: onReleaseHome })), /* @__PURE__ */ _(ArmableButton_default, { text: "CALIB", onClick: onClickCalib, onRelease: onReleaseCalib })));
};
var SwerveModules_default = SwerveModules;

// components/BooleanReadout.tsx
var BooleanReadout = ({
  text,
  chars: chars2,
  onColor = "rgba(116, 255, 6, 0.8)",
  offColor = "rgba(200, 200, 200, 0.8)",
  on: on2 = false
}) => {
  return /* @__PURE__ */ _("b", { class: "boolean-readout", style: {
    backgroundColor: on2 ? onColor : offColor,
    width: typeof chars2 === "number" ? "0" : "",
    overflow: "hidden",
    textAlign: "center"
  } }, text);
};
var BooleanReadout_default = BooleanReadout;

// components/NTBooleanReadout.tsx
var NTBooleanReadout = ({
  nt,
  socket,
  text,
  defaultVal = false,
  index,
  chars: chars2,
  onColor,
  offColor
}) => {
  const [value2, setValue] = d2(defaultVal);
  y2(() => {
    const handler = (newVal) => {
      if (newVal !== void 0 && newVal !== null) {
        if (Array.isArray(newVal) && typeof index === "number") {
          newVal = newVal[index];
        }
        setValue(newVal);
      }
    };
    socket.on(nt, handler);
    return () => {
      socket.off(nt, handler);
    };
  }, [nt, socket, index]);
  return /* @__PURE__ */ _(BooleanReadout_default, { text, chars: chars2, onColor, offColor, on: value2 });
};
var NTBooleanReadout_default = NTBooleanReadout;

// panels/MasterStates.tsx
var MasterStates = ({
  masterStates,
  socket,
  dashboardItem = false
}) => {
  socket.on("Confirmed_States", (val) => {
    console.log(val);
  });
  return /* @__PURE__ */ _("div", { class: "bubble " + (dashboardItem ? "column-item" : "") }, /* @__PURE__ */ _("div", { style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  } }, masterStates.map((state, index) => /* @__PURE__ */ _("div", { style: "padding:1rem;" }, /* @__PURE__ */ _(NTBooleanReadout_default, { nt: "Confirmed_States", socket, chars: 4, index, text: state })))));
};
var MasterStates_default = MasterStates;

// components/DashboardSubRow.tsx
function DashboardSubRow({
  children
}) {
  return /* @__PURE__ */ _("div", { class: "row d-flex align-items-stretch column-item p-0" }, children.map((item, index) => {
    return (
      // apply styles padding only when the item isn't the last one
      /* @__PURE__ */ _(
        "div",
        {
          class: "col",
          style: index < children.length - 1 ? { paddingRight: "0.5rem" } : {}
        },
        item
      )
    );
  }));
}

// panels/FieldMap.tsx
var FieldMap = ({
  socket
}) => {
  const canvasRef = A2(null);
  const imageRef = A2(null);
  function render(canvasRef2, imageRef2) {
    const canvas = canvasRef2.current;
    if (!canvas)
      return;
    if (!imageRef2.current)
      return;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    const robotPos = [24, 24];
    const robotSize = [21.75, 23.75];
    const bottomLeft = [289, 3465];
    const fieldWidth = 317;
    const fieldWidthpx = 1634 - 289;
    const fieldScale = fieldWidthpx / fieldWidth;
    const robotPospx = [robotPos[0] * fieldScale + bottomLeft[0], robotPos[1] * fieldScale + bottomLeft[1]];
    const robotSizepx = [robotSize[0] * fieldScale, robotSize[1] * fieldScale];
    ctx.drawImage(imageRef2.current, 0, 0);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "red";
    ctx.strokeRect(robotPospx[0], canvas.height - robotPospx[1], robotSizepx[0], robotSizepx[1]);
  }
  y2(() => {
    render(canvasRef, imageRef);
  }, [canvasRef, imageRef]);
  setTimeout(() => {
    render(canvasRef, imageRef);
  }, 200);
  return /* @__PURE__ */ _(k, null, /* @__PURE__ */ _("canvas", { ref: canvasRef, width: 1926, height: 3999, style: "width: 193px;" }), /* @__PURE__ */ _("img", { ref: imageRef, style: "display:none", src: `/assets/fieldmap${"red"}.png` }));
};
var FieldMap_default = FieldMap;

// components/Dropdown.tsx
var Dropdown = ({ label, items, valSetter }) => {
  if (!label) {
    label = items[0];
  }
  valSetter(label);
  const [isOpen, setIsOpen] = d2(false);
  const [selectedLabel, setSelectedLabel] = d2(label);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  document.addEventListener("click", (e3) => {
    if (!e3.target.classList.contains("dropdown-toggle")) {
      setIsOpen(false);
    }
  });
  const handleItemClick = (item) => {
    setSelectedLabel(item);
    valSetter(item);
  };
  return /* @__PURE__ */ _("div", { class: "dropdown" }, /* @__PURE__ */ _(
    "button",
    {
      class: "btn dropdown-toggle",
      type: "button",
      onClick: toggleMenu,
      "aria-expanded": isOpen
    },
    selectedLabel
  ), /* @__PURE__ */ _("ul", { class: `dropdown-menu${isOpen ? " show" : ""}` }, items.map((item, index) => /* @__PURE__ */ _("li", { key: index }, /* @__PURE__ */ _(
    "button",
    {
      class: "dropdown-item" + (item == selectedLabel ? " active" : ""),
      onClick: () => handleItemClick(item)
    },
    item
  )))));
};
var Dropdown_default = Dropdown;

// components/Input.tsx
var Input = ({
  valSetter = (val) => {
  },
  defaultVal,
  chars: chars2 = 5,
  small = false,
  noSendBtn = false,
  number = false,
  color = "#eed",
  precision,
  arrowIncrement = 0.1,
  max,
  min
}) => {
  if (typeof defaultVal == void 0 || typeof defaultVal == null) {
    if (number)
      defaultVal = 0;
    else
      defaultVal = "";
  }
  const [shiftPressed, setShiftPressed] = d2(false);
  const [ctrlPressed, setCtrlPressed] = d2(false);
  const [currentVal, setCurrentVal] = d2(defaultVal);
  const inputRef = A2(null);
  y2(() => {
    const onKey = (e3) => {
      if (!noSendBtn) {
        setShiftPressed(e3.shiftKey);
      }
      setCtrlPressed(e3.ctrlKey);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("keyup", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("keyup", onKey);
    };
  }, []);
  const onUpdate = () => {
    if (inputRef.current) {
      let newVal = inputRef.current.value;
      if (number) {
        newVal = parseFloat(newVal);
        if (isNaN(newVal))
          newVal = 0;
        if (precision !== void 0) {
          if (precision == 0) {
            newVal = Math.floor(newVal);
          } else {
            newVal = newVal.toFixed(precision);
            newVal = parseFloat(newVal);
            if (isNaN(newVal))
              newVal = 0;
          }
        }
      }
      valSetter(newVal);
      setCurrentVal(newVal);
    }
  };
  const increment = () => {
    if (!inputRef.current)
      return;
    let v3 = parseFloat(inputRef.current.value);
    if (isNaN(v3))
      v3 = 0;
    inputRef.current.value = (v3 + arrowIncrement * (ctrlPressed ? 10 : 1)).toString();
    onUpdate();
  };
  const decrement = () => {
    if (!inputRef.current)
      return;
    let v3 = parseFloat(inputRef.current.value);
    if (isNaN(v3))
      v3 = 0;
    inputRef.current.value = (v3 - arrowIncrement * (ctrlPressed ? 10 : 1)).toString();
    onUpdate();
  };
  return /* @__PURE__ */ _(
    "div",
    {
      style: {
        position: "relative",
        // make this the containing block
        display: "grid",
        gridTemplateColumns: shiftPressed ? "1fr auto" : "1fr",
        alignItems: "center",
        width: `calc(${chars2}ch + 3rem)`,
        maxWidth: "100%",
        gap: 0
      }
    },
    /* @__PURE__ */ _(
      "input",
      {
        type: number ? "number" : "text",
        ref: inputRef,
        value: currentVal,
        onInput: onUpdate,
        class: "readout" + (small ? " small" : ""),
        style: {
          color,
          width: "100%",
          minWidth: 0,
          paddingRight: number && !shiftPressed ? "1.9rem" : "0.5rem",
          borderTopRightRadius: shiftPressed ? 0 : void 0,
          borderBottomRightRadius: shiftPressed ? 0 : void 0
        }
      }
    ),
    shiftPressed && /* @__PURE__ */ _(
      Button_default,
      {
        text: /* @__PURE__ */ _(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          },
          /* @__PURE__ */ _("path", { d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" }),
          /* @__PURE__ */ _("path", { d: "M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" })
        ),
        onClick: onUpdate,
        style: {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          height: "100%",
          padding: "0.3rem 0.5rem"
        }
      }
    ),
    number && !shiftPressed && /* @__PURE__ */ _(
      "div",
      {
        style: {
          position: "absolute",
          right: `${ctrlPressed ? 0.3 : 0.5}rem`,
          // tweak to sit inside padding
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "0.1rem",
          pointerEvents: "none"
          // let clicks through to the Buttons
        }
      },
      /* @__PURE__ */ _(
        Button_default,
        {
          text: "\u25B2",
          onClick: increment,
          style: {
            pointerEvents: "auto",
            // re-enable clicks on the arrows
            padding: `0 ${ctrlPressed ? 0.4 : 0.3}rem`,
            fontSize: `${ctrlPressed ? 1 : 0.8}rem`,
            lineHeight: `${ctrlPressed ? 1 : 0.8}rem`,
            borderRadius: `${ctrlPressed ? 10 : 6}px`
          }
        }
      ),
      /* @__PURE__ */ _(
        Button_default,
        {
          text: "\u25BC",
          onClick: decrement,
          style: {
            pointerEvents: "auto",
            padding: `0 ${ctrlPressed ? 0.4 : 0.3}rem`,
            fontSize: `${ctrlPressed ? 1 : 0.8}rem`,
            lineHeight: `${ctrlPressed ? 1 : 0.8}rem`,
            borderRadius: `${ctrlPressed ? 10 : 6}px`
          }
        }
      )
    )
  );
};
var Input_default = Input;

// components/NTInput.tsx
var NTInput = ({
  nt,
  socket,
  defaultVal,
  number = false,
  chars: chars2,
  precision,
  color,
  small
}) => {
  if (defaultVal == void 0 || defaultVal == null) {
    if (number)
      defaultVal = 0;
    else
      defaultVal = "";
  }
  socket.emit(nt, defaultVal);
  const setValueWrapper = (newVal) => {
    socket.emit(nt, newVal);
  };
  return /* @__PURE__ */ _(Input_default, { number, chars: chars2, color, small, precision, defaultVal, valSetter: setValueWrapper });
};
var NTInput_default = NTInput;

// panels/ActuatorTesting.tsx
var ActuatorTesting = ({
  socket,
  dashboardItem = false
}) => {
  const [actuator, setActuator] = d2("No_Test");
  const [actuatorNames, setActuatorNames] = d2(["No_Test"]);
  socket.on("Legal_Actuator_Names", (val) => {
    setActuatorNames(val);
  });
  const setActuatorVal = (newVal) => {
    setActuator(newVal);
    socket.emit("Test_Actuator_Name", actuator);
  };
  return /* @__PURE__ */ _(
    "div",
    {
      class: "actuator-testing" + (dashboardItem ? " column-item" : ""),
      style: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        wrap: "no-wrap"
      }
    },
    /* @__PURE__ */ _("table", null, /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("th", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Name:")), /* @__PURE__ */ _("th", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Value (dc):")), /* @__PURE__ */ _("th", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Period (s):"))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(Dropdown_default, { items: actuatorNames, valSetter: setActuatorVal })), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTInput_default, { socket, nt: "Test_Actuator_Value", defaultVal: 0, number: true, precision: 2 })), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(NTInput_default, { socket, nt: "Test_Actuator_Period", defaultVal: 0, number: true, precision: 1 }))))
  );
};
var ActuatorTesting_default = ActuatorTesting;

// panels/DriverProfiles.tsx
var DriverProfiles = ({ socket, dashboardItem = false }) => {
  const [driver, setDriver] = d2("Devin");
  const [driverNames, setDriverNames] = d2(["Devin"]);
  socket.on("Legal_Drivers", (val) => {
    setDriverNames(val);
    socket.emit("Selected_Driver", driver);
  });
  const setDriverVal = (newVal) => {
    setDriver(newVal);
    socket.emit("Selected_Driver", driver);
  };
  return /* @__PURE__ */ _(
    "div",
    {
      class: "driver-profiles" + (dashboardItem ? " column-item" : ""),
      style: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        wrap: "no-wrap"
      }
    },
    /* @__PURE__ */ _(FlexRow, null, /* @__PURE__ */ _(Dropdown_default, { items: driverNames, valSetter: setDriverVal }), /* @__PURE__ */ _(Button_default, { text: "SAVE" })),
    /* @__PURE__ */ _("table", null, /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Strafe Deadband")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(
      Input_default,
      {
        number: true,
        noSendBtn: true,
        defaultVal: 0.08,
        arrowIncrement: 0.01,
        precision: 2,
        chars: 5
      }
    ))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Strafe Scaling")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(
      Input_default,
      {
        number: true,
        noSendBtn: true,
        defaultVal: 3,
        arrowIncrement: 0.1,
        precision: 2,
        chars: 5
      }
    ))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Strafe Max")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(
      Input_default,
      {
        number: true,
        noSendBtn: true,
        defaultVal: 1,
        arrowIncrement: 0.01,
        precision: 2,
        chars: 5
      }
    ))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Rotate Deadband")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(
      Input_default,
      {
        number: true,
        noSendBtn: true,
        defaultVal: 0.15,
        arrowIncrement: 0.01,
        precision: 2,
        chars: 5
      }
    ))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Rotate Scaling")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(
      Input_default,
      {
        number: true,
        noSendBtn: true,
        defaultVal: 3.5,
        arrowIncrement: 0.1,
        precision: 2,
        chars: 5
      }
    ))), /* @__PURE__ */ _("tr", null, /* @__PURE__ */ _("td", null, /* @__PURE__ */ _("label", { class: "label-small" }, "Rotate Max")), /* @__PURE__ */ _("td", null, /* @__PURE__ */ _(
      Input_default,
      {
        number: true,
        noSendBtn: true,
        defaultVal: 0.6,
        arrowIncrement: 0.01,
        precision: 2,
        chars: 5
      }
    ))))
  );
};
var DriverProfiles_default = DriverProfiles;

// pages/index.tsx
function pages_default() {
  const socket = lookup2();
  const tabs = [
    {
      title: "Checklist",
      content: /* @__PURE__ */ _(Container, null, "Checklist thingy idk. Pretty low-priority ngl")
    },
    {
      title: "Setup/Auto",
      content: /* @__PURE__ */ _(Container, null, "Setup stuffs. probably gonna make this at some point")
    },
    {
      title: "TeleOp",
      content: /* @__PURE__ */ _(Container, null, /* @__PURE__ */ _(FieldMap_default, { socket }))
    },
    {
      title: "Tune",
      content: /* @__PURE__ */ _(Container, null, /* @__PURE__ */ _("div", { class: "row bubble" }, /* @__PURE__ */ _("div", { class: "col-4 column" }, /* @__PURE__ */ _(DashboardItem, null, /* @__PURE__ */ _("div", null, /* @__PURE__ */ _("h3", null, "Drivetrain"), /* @__PURE__ */ _(
        SwerveModules_default,
        {
          socket,
          shifting: true,
          dashboardItem: true
        }
      )))), /* @__PURE__ */ _("div", { class: "col-3 column" }, /* @__PURE__ */ _(DashboardItem, null, /* @__PURE__ */ _("div", null, /* @__PURE__ */ _("h3", null, "Profiles"), /* @__PURE__ */ _(DriverProfiles_default, { socket })))), /* @__PURE__ */ _("div", { class: "col-5 column" }, /* @__PURE__ */ _(DashboardSubRow, null, /* @__PURE__ */ _(
        SimpleSubsystem_default,
        {
          name: "Pivot",
          socket,
          absolute: true,
          dashboardItem: true,
          fillContainer: true
        }
      ), /* @__PURE__ */ _(
        SimpleSubsystem_default,
        {
          name: "Extender",
          socket,
          unit: "in",
          precision: 1,
          dashboardItem: true,
          fillContainer: true
        }
      )), /* @__PURE__ */ _(DashboardSubRow, null, /* @__PURE__ */ _(
        SimpleSubsystem_default,
        {
          name: "Wrist",
          socket,
          absolute: true,
          dashboardItem: true,
          fillContainer: true
        }
      ), /* @__PURE__ */ _(
        SimpleSubsystem_default,
        {
          name: "Intake",
          socket,
          velocity: true,
          precision: 1,
          unit: "rpm",
          dashboardItem: true,
          fillContainer: true
        }
      )), /* @__PURE__ */ _(DashboardItem, null, /* @__PURE__ */ _("div", null, /* @__PURE__ */ _("h3", null, "Actuator Testing"), /* @__PURE__ */ _(ActuatorTesting_default, { socket }))))))
    },
    {
      title: "Variables",
      content: /* @__PURE__ */ _(Container, null, "very helpful thingy that is on the TODO list")
    }
  ];
  return /* @__PURE__ */ _(Container, null, /* @__PURE__ */ _("div", { class: "row", style: "padding-left: 1rem;" }, /* @__PURE__ */ _("div", { class: "col column" }, /* @__PURE__ */ _(TabbedContainer, { tabs })), /* @__PURE__ */ _("div", { class: "col column", style: "flex: 0 0 12rem;" }, /* @__PURE__ */ _(DashboardItem, { noBubble: true }, /* @__PURE__ */ _(FlexRow, null, /* @__PURE__ */ _("label", { class: "label-small", style: "margin-right: 0; padding-right: 0;" }, "Loop (ms): "), /* @__PURE__ */ _(
    NTReadout_default,
    {
      nt: "Control_Loop_Time",
      precision: 0,
      socket
    }
  ))), /* @__PURE__ */ _(DashboardItem, { noBubble: true }, /* @__PURE__ */ _(
    MasterStates_default,
    {
      socket,
      masterStates: ["STOW", "FEED", "SCOR", "CLMB"]
    }
  )))));
}

// pages/indexLoader.tsx
E(/* @__PURE__ */ _(pages_default, null), document.getElementsByTagName("main")[0]);
