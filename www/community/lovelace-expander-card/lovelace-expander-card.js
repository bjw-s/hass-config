var or = Object.defineProperty;
var un = (e) => {
  throw TypeError(e);
};
var ur = (e, t, n) => t in e ? or(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var z = (e, t, n) => ur(e, typeof t != "symbol" ? t + "" : t, n), cn = (e, t, n) => t.has(e) || un("Cannot " + n);
var X = (e, t, n) => (cn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Nt = (e, t, n) => t.has(e) ? un("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Rt = (e, t, n, r) => (cn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
const cr = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(cr);
const Yt = 1, jt = 2, En = 4, fr = 8, dr = 16, vr = 1, _r = 2, hr = 4, pr = 8, gr = 16, mr = 4, br = 1, $r = 2, kn = "[", Wt = "[!", Gt = "]", Ze = {}, te = Symbol(), yr = "http://www.w3.org/2000/svg", xn = !1;
function Kt(e) {
  console.warn("hydration_mismatch");
}
var zt = Array.isArray, Jt = Array.from, vt = Object.keys, _t = Object.defineProperty, Ie = Object.getOwnPropertyDescriptor, wr = Object.getOwnPropertyDescriptors, Er = Object.prototype, kr = Array.prototype, Ot = Object.getPrototypeOf;
function xr(e) {
  return typeof e == "function";
}
const ot = () => {
};
function Cr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const $e = 2, Cn = 4, We = 8, Zt = 16, Se = 32, Et = 64, Le = 128, ht = 256, ee = 512, xe = 1024, tt = 2048, Ce = 4096, nt = 8192, Tn = 16384, rt = 32768, Tr = 65536, Sr = 1 << 18, Sn = 1 << 19, ct = Symbol("$state"), Ar = Symbol("");
function An(e) {
  return e === this.v;
}
function Nr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Xt(e) {
  return !Nr(e, this.v);
}
function Rr(e) {
  throw new Error("effect_in_teardown");
}
function Or() {
  throw new Error("effect_in_unowned_derived");
}
function Ir(e) {
  throw new Error("effect_orphan");
}
function Pr() {
  throw new Error("effect_update_depth_exceeded");
}
function Lr() {
  throw new Error("hydration_failed");
}
function Dr(e) {
  throw new Error("props_invalid_value");
}
function Mr() {
  throw new Error("state_descriptors_fixed");
}
function Fr() {
  throw new Error("state_prototype_fixed");
}
function qr() {
  throw new Error("state_unsafe_local_read");
}
function Br() {
  throw new Error("state_unsafe_mutation");
}
function ae(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: An,
    version: 0
  };
}
function ce(e) {
  return /* @__PURE__ */ Hr(ae(e));
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  var n;
  const t = ae(e);
  return t.equals = Xt, B !== null && B.l !== null && ((n = B.l).s ?? (n.s = [])).push(t), t;
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  return O !== null && O.f & $e && (pe === null ? Jr([e]) : pe.push(e)), e;
}
function T(e, t) {
  return O !== null && Pt() && O.f & $e && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (pe === null || !pe.includes(e)) && Br(), e.equals(t) || (e.v = t, e.version = Hn(), Nn(e, xe), Pt() && k !== null && k.f & ee && !(k.f & Se) && (G !== null && G.includes(e) ? (ge(k, xe), Ct(k)) : ke === null ? Zr([e]) : ke.push(e))), t;
}
function Nn(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Pt(), a = n.length, i = 0; i < a; i++) {
      var s = n[i], c = s.f;
      c & xe || !r && s === k || (ge(s, t), c & (ee | Le) && (c & $e ? Nn(
        /** @type {Derived} */
        s,
        tt
      ) : Ct(
        /** @type {Effect} */
        s
      )));
    }
}
function Vr(e) {
  k === null && O === null && Ir(), O !== null && O.f & Le && Or(), an && Rr();
}
function Ur(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ge(e, t, n, r = !0) {
  var a = (e & Et) !== 0, i = k, s = {
    ctx: B,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | xe,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: a ? null : i,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (n) {
    var c = He;
    try {
      fn(!0), xt(s), s.f |= Tn;
    } catch (u) {
      throw De(s), u;
    } finally {
      fn(c);
    }
  } else t !== null && Ct(s);
  var f = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & Sn) === 0;
  if (!f && !a && r && (i !== null && Ur(s, i), O !== null && O.f & $e)) {
    var o = (
      /** @type {Derived} */
      O
    );
    (o.children ?? (o.children = [])).push(s);
  }
  return s;
}
function Yr(e) {
  const t = Ge(We, null, !1);
  return ge(t, ee), t.teardown = e, t;
}
function en(e) {
  Vr();
  var t = k !== null && (k.f & We) !== 0 && // TODO do we actually need this? removing them changes nothing
  B !== null && !B.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      B
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: k,
      reaction: O
    });
  } else {
    var r = kt(e);
    return r;
  }
}
function Rn(e) {
  const t = Ge(Et, e, !0);
  return () => {
    De(t);
  };
}
function kt(e) {
  return Ge(Cn, e, !1);
}
function tn(e) {
  return Ge(We, e, !0);
}
function re(e) {
  return tn(e);
}
function nn(e, t = 0) {
  return Ge(We | Zt | t, e, !0);
}
function Ye(e, t = !0) {
  return Ge(We | Se, e, !0, t);
}
function On(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = an, r = O;
    dn(!0), mt(null);
    try {
      t.call(null);
    } finally {
      dn(n), mt(r);
    }
  }
}
function De(e, t = !0) {
  var n = !1;
  if ((t || e.f & Sr) && e.nodes_start !== null) {
    for (var r = e.nodes_start, a = e.nodes_end; r !== null; ) {
      var i = r === a ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  Un(e, t && !n), et(e, 0), ge(e, nt);
  var s = e.transitions;
  if (s !== null)
    for (const f of s)
      f.stop();
  On(e);
  var c = e.parent;
  c !== null && c.first !== null && In(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.parent = e.fn = e.nodes_start = e.nodes_end = null;
}
function In(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function pt(e, t) {
  var n = [];
  rn(e, n, !0), Pn(n, () => {
    De(e), t && t();
  });
}
function Pn(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var a of e)
      a.out(r);
  } else
    t();
}
function rn(e, t, n) {
  if (!(e.f & Ce)) {
    if (e.f ^= Ce, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var a = r.next, i = (r.f & rt) !== 0 || (r.f & Se) !== 0;
      rn(r, t, i ? n : !1), r = a;
    }
  }
}
function Xe(e) {
  Ln(e, !0);
}
function Ln(e, t) {
  if (e.f & Ce) {
    e.f ^= Ce, it(e) && xt(e);
    for (var n = e.first; n !== null; ) {
      var r = n.next, a = (n.f & rt) !== 0 || (n.f & Se) !== 0;
      Ln(n, a ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let gt = !1, It = [];
function Dn() {
  gt = !1;
  const e = It.slice();
  It = [], Cr(e);
}
function at(e) {
  gt || (gt = !0, queueMicrotask(Dn)), It.push(e);
}
function jr() {
  gt && Dn();
}
// @__NO_SIDE_EFFECTS__
function fe(e) {
  let t = $e | xe;
  k === null ? t |= Le : k.f |= Sn;
  const n = {
    children: null,
    deps: null,
    equals: An,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: k
  };
  if (O !== null && O.f & $e) {
    var r = (
      /** @type {Derived} */
      O
    );
    (r.children ?? (r.children = [])).push(n);
  }
  return n;
}
// @__NO_SIDE_EFFECTS__
function Wr(e) {
  const t = /* @__PURE__ */ fe(e);
  return t.equals = Xt, t;
}
function Mn(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var n = 0; n < t.length; n += 1) {
      var r = t[n];
      r.f & $e ? Gr(
        /** @type {Derived} */
        r
      ) : De(
        /** @type {Effect} */
        r
      );
    }
  }
}
function Fn(e) {
  var t, n = k;
  bt(e.parent);
  try {
    Mn(e), t = Vn(e);
  } finally {
    bt(n);
  }
  var r = (Be || e.f & Le) && e.deps !== null ? tt : ee;
  ge(e, r), e.equals(t) || (e.v = t, e.version = Hn());
}
function Gr(e) {
  Mn(e), et(e, 0), ge(e, nt), e.children = e.deps = e.reactions = // @ts-expect-error `signal.fn` cannot be `null` while the signal is alive
  e.fn = null;
}
function Kr(e) {
  throw new Error("lifecycle_outside_component");
}
const qn = 0, zr = 1;
let ft = qn, Qe = !1, He = !1, an = !1;
function fn(e) {
  He = e;
}
function dn(e) {
  an = e;
}
let Oe = [], Ve = 0;
let O = null;
function mt(e) {
  O = e;
}
let k = null;
function bt(e) {
  k = e;
}
let pe = null;
function Jr(e) {
  pe = e;
}
let G = null, ne = 0, ke = null;
function Zr(e) {
  ke = e;
}
let Bn = 0, Be = !1, B = null;
function Hn() {
  return ++Bn;
}
function Pt() {
  return B !== null && B.l === null;
}
function it(e) {
  var s, c;
  var t = e.f;
  if (t & xe)
    return !0;
  if (t & tt) {
    var n = e.deps, r = (t & Le) !== 0;
    if (n !== null) {
      var a;
      if (t & ht) {
        for (a = 0; a < n.length; a++)
          ((s = n[a]).reactions ?? (s.reactions = [])).push(e);
        e.f ^= ht;
      }
      for (a = 0; a < n.length; a++) {
        var i = n[a];
        if (it(
          /** @type {Derived} */
          i
        ) && Fn(
          /** @type {Derived} */
          i
        ), r && k !== null && !Be && !((c = i == null ? void 0 : i.reactions) != null && c.includes(e)) && (i.reactions ?? (i.reactions = [])).push(e), i.version > e.version)
          return !0;
      }
    }
    r || ge(e, ee);
  }
  return !1;
}
function Xr(e, t, n) {
  throw e;
}
function Vn(e) {
  var u;
  var t = G, n = ne, r = ke, a = O, i = Be, s = pe;
  G = /** @type {null | Value[]} */
  null, ne = 0, ke = null, O = e.f & (Se | Et) ? null : e, Be = !He && (e.f & Le) !== 0, pe = null;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (G !== null) {
      var o;
      if (et(e, ne), f !== null && ne > 0)
        for (f.length = ne + G.length, o = 0; o < G.length; o++)
          f[ne + o] = G[o];
      else
        e.deps = f = G;
      if (!Be)
        for (o = ne; o < f.length; o++)
          ((u = f[o]).reactions ?? (u.reactions = [])).push(e);
    } else f !== null && ne < f.length && (et(e, ne), f.length = ne);
    return c;
  } finally {
    G = t, ne = n, ke = r, O = a, Be = i, pe = s;
  }
}
function Qr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = n.indexOf(e);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = t.reactions = null : (n[r] = n[a], n.pop());
    }
  }
  n === null && t.f & $e && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (G === null || !G.includes(t)) && (ge(t, tt), t.f & (Le | ht) || (t.f ^= ht), et(
    /** @type {Derived} **/
    t,
    0
  ));
}
function et(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Qr(e, n[r]);
}
function Un(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    De(n, t), n = r;
  }
}
function xt(e) {
  var t = e.f;
  if (!(t & nt)) {
    ge(e, ee);
    var n = k, r = B;
    k = e, B = e.ctx;
    try {
      t & Zt || Un(e), On(e);
      var a = Vn(e);
      e.teardown = typeof a == "function" ? a : null, e.version = Bn;
    } catch (i) {
      Xr(
        /** @type {Error} */
        i
      );
    } finally {
      k = n, B = r;
    }
  }
}
function Yn() {
  Ve > 1e3 && (Ve = 0, Pr()), Ve++;
}
function jn(e) {
  var t = e.length;
  if (t !== 0) {
    Yn();
    var n = He;
    He = !0;
    try {
      for (var r = 0; r < t; r++) {
        var a = e[r];
        a.f & ee || (a.f ^= ee);
        var i = [];
        Wn(a, i), ea(i);
      }
    } finally {
      He = n;
    }
  }
}
function ea(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      !(r.f & (nt | Ce)) && it(r) && (xt(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? In(r) : r.fn = null));
    }
}
function ta() {
  if (Qe = !1, Ve > 1001)
    return;
  const e = Oe;
  Oe = [], jn(e), Qe || (Ve = 0);
}
function Ct(e) {
  ft === qn && (Qe || (Qe = !0, queueMicrotask(ta)));
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Et | Se)) {
      if (!(n & ee)) return;
      t.f ^= ee;
    }
  }
  Oe.push(t);
}
function Wn(e, t) {
  var n = e.first, r = [];
  e: for (; n !== null; ) {
    var a = n.f, i = (a & Se) !== 0, s = i && (a & ee) !== 0;
    if (!s && !(a & Ce))
      if (a & We) {
        i ? n.f ^= ee : it(n) && xt(n);
        var c = n.first;
        if (c !== null) {
          n = c;
          continue;
        }
      } else a & Cn && r.push(n);
    var f = n.next;
    if (f === null) {
      let l = n.parent;
      for (; l !== null; ) {
        if (e === l)
          break e;
        var o = l.next;
        if (o !== null) {
          n = o;
          continue e;
        }
        l = l.parent;
      }
    }
    n = f;
  }
  for (var u = 0; u < r.length; u++)
    c = r[u], t.push(c), Wn(c, t);
}
function se(e) {
  var t = ft, n = Oe;
  try {
    Yn();
    const a = [];
    ft = zr, Oe = a, Qe = !1, jn(n);
    var r = e == null ? void 0 : e();
    return jr(), (Oe.length > 0 || a.length > 0) && se(), Ve = 0, r;
  } finally {
    ft = t, Oe = n;
  }
}
function h(e) {
  var t = e.f;
  if (t & nt)
    return e.v;
  if (O !== null) {
    pe !== null && pe.includes(e) && qr();
    var n = O.deps;
    G === null && n !== null && n[ne] === e ? ne++ : G === null ? G = [e] : G.push(e), ke !== null && k !== null && k.f & ee && !(k.f & Se) && ke.includes(e) && (ge(k, xe), Ct(k));
  }
  if (t & $e) {
    var r = (
      /** @type {Derived} */
      e
    );
    it(r) && Fn(r);
  }
  return e.v;
}
function Tt(e) {
  const t = O;
  try {
    return O = null, e();
  } finally {
    O = t;
  }
}
const na = ~(xe | tt | ee);
function ge(e, t) {
  e.f = e.f & na | t;
}
function St(e, t = !1, n) {
  B = {
    p: B,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, t || (B.l = {
    s: null,
    u: null,
    r1: [],
    r2: ae(!1)
  });
}
function At(e) {
  const t = B;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = k, r = O;
      t.e = null;
      try {
        for (var a = 0; a < s.length; a++) {
          var i = s[a];
          bt(i.effect), mt(i.reaction), kt(i.fn);
        }
      } finally {
        bt(n), mt(r);
      }
    }
    B = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function ie(e, t = null, n) {
  if (typeof e != "object" || e === null || ct in e)
    return e;
  const r = Ot(e);
  if (r !== Er && r !== kr)
    return e;
  var a = /* @__PURE__ */ new Map(), i = zt(e), s = ae(0);
  i && a.set("length", ae(
    /** @type {any[]} */
    e.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, o, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Mr();
        var l = a.get(o);
        return l === void 0 ? (l = ae(u.value), a.set(o, l)) : T(l, ie(u.value, c)), !0;
      },
      deleteProperty(f, o) {
        var u = a.get(o);
        return u === void 0 ? o in f && a.set(o, ae(te)) : (T(u, te), vn(s)), !0;
      },
      get(f, o, u) {
        var _;
        if (o === ct)
          return e;
        var l = a.get(o), v = o in f;
        if (l === void 0 && (!v || (_ = Ie(f, o)) != null && _.writable) && (l = ae(ie(v ? f[o] : te, c)), a.set(o, l)), l !== void 0) {
          var d = h(l);
          return d === te ? void 0 : d;
        }
        return Reflect.get(f, o, u);
      },
      getOwnPropertyDescriptor(f, o) {
        var u = Reflect.getOwnPropertyDescriptor(f, o);
        if (u && "value" in u) {
          var l = a.get(o);
          l && (u.value = h(l));
        } else if (u === void 0) {
          var v = a.get(o), d = v == null ? void 0 : v.v;
          if (v !== void 0 && d !== te)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(f, o) {
        var d;
        if (o === ct)
          return !0;
        var u = a.get(o), l = u !== void 0 && u.v !== te || Reflect.has(f, o);
        if (u !== void 0 || k !== null && (!l || (d = Ie(f, o)) != null && d.writable)) {
          u === void 0 && (u = ae(l ? ie(f[o], c) : te), a.set(o, u));
          var v = h(u);
          if (v === te)
            return !1;
        }
        return l;
      },
      set(f, o, u, l) {
        var m;
        var v = a.get(o), d = o in f;
        if (i && o === "length")
          for (var _ = u; _ < /** @type {Source<number>} */
          v.v; _ += 1) {
            var p = a.get(_ + "");
            p !== void 0 ? T(p, te) : _ in f && (p = ae(te), a.set(_ + "", p));
          }
        v === void 0 ? (!d || (m = Ie(f, o)) != null && m.writable) && (v = ae(void 0), T(v, ie(u, c)), a.set(o, v)) : (d = v.v !== te, T(v, ie(u, c)));
        var b = Reflect.getOwnPropertyDescriptor(f, o);
        if (b != null && b.set && b.set.call(l, u), !d) {
          if (i && typeof o == "string") {
            var $ = (
              /** @type {Source<number>} */
              a.get("length")
            ), w = Number(o);
            Number.isInteger(w) && w >= $.v && T($, w + 1);
          }
          vn(s);
        }
        return !0;
      },
      ownKeys(f) {
        h(s);
        var o = Reflect.ownKeys(f).filter((v) => {
          var d = a.get(v);
          return d === void 0 || d.v !== te;
        });
        for (var [u, l] of a)
          l.v !== te && !(u in f) && o.push(u);
        return o;
      },
      setPrototypeOf() {
        Fr();
      }
    }
  );
}
function vn(e, t = 1) {
  T(e, e.v + t);
}
var _n, Gn, Kn;
function Lt() {
  if (_n === void 0) {
    _n = window;
    var e = Element.prototype, t = Node.prototype;
    Gn = Ie(t, "firstChild").get, Kn = Ie(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Ke(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return Gn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  return Kn.call(e);
}
function V(e) {
  if (!S)
    return /* @__PURE__ */ Te(e);
  var t = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Te(N)
  );
  return t === null && (t = N.appendChild(Ke())), ue(t), t;
}
function qe(e, t) {
  if (!S) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Te(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ae(n) : n;
  }
  return N;
}
function W(e, t = 1, n = !1) {
  let r = S ? N : e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ae(r);
  if (!S)
    return r;
  var a = r.nodeType;
  if (n && a !== 3) {
    var i = Ke();
    return r == null || r.before(i), ue(i), i;
  }
  return ue(r), /** @type {TemplateNode} */
  r;
}
function zn(e) {
  e.textContent = "";
}
let S = !1;
function de(e) {
  S = e;
}
let N;
function ue(e) {
  if (e === null)
    throw Kt(), Ze;
  return N = e;
}
function je() {
  return ue(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ae(N)
  );
}
function D(e) {
  if (S) {
    if (/* @__PURE__ */ Ae(N) !== null)
      throw Kt(), Ze;
    N = e;
  }
}
function Dt() {
  for (var e = 0, t = N; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Gt) {
        if (e === 0) return t;
        e -= 1;
      } else (n === kn || n === Wt) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ae(t)
    );
    t.remove(), t = r;
  }
}
const Jn = /* @__PURE__ */ new Set(), Mt = /* @__PURE__ */ new Set();
function ra(e, t, n, r) {
  function a(i) {
    if (r.capture || Je.call(t, i), !i.cancelBubble)
      return n.call(this, i);
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? at(() => {
    t.addEventListener(e, a, r);
  }) : t.addEventListener(e, a, r), a;
}
function Ne(e, t, n, r, a) {
  var i = { capture: r, passive: a }, s = ra(e, t, n, i);
  (t === document.body || t === window || t === document) && Yr(() => {
    t.removeEventListener(e, s, i);
  });
}
function Zn(e) {
  for (var t = 0; t < e.length; t++)
    Jn.add(e[t]);
  for (var n of Mt)
    n(e);
}
function Je(e) {
  var b;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, a = ((b = e.composedPath) == null ? void 0 : b.call(e)) || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  ), s = 0, c = e.__root;
  if (c) {
    var f = a.indexOf(c);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var o = a.indexOf(t);
    if (o === -1)
      return;
    f <= o && (s = f);
  }
  if (i = /** @type {Element} */
  a[s] || e.target, i !== t) {
    _t(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    try {
      for (var u, l = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var d = i["__" + r];
          if (d !== void 0 && !/** @type {any} */
          i.disabled)
            if (zt(d)) {
              var [_, ...p] = d;
              _.apply(i, [e, ...p]);
            } else
              d.call(i, e);
        } catch ($) {
          u ? l.push($) : u = $;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (u) {
        for (let $ of l)
          queueMicrotask(() => {
            throw $;
          });
        throw u;
      }
    } finally {
      e.__root = t, delete e.currentTarget;
    }
  }
}
function aa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Pe(e, t) {
  var n = (
    /** @type {Effect} */
    k
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function q(e, t) {
  var n = (t & br) !== 0, r = (t & $r) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    if (S)
      return Pe(N, null), N;
    a === void 0 && (a = aa(i ? e : "<!>" + e), n || (a = /** @type {Node} */
    /* @__PURE__ */ Te(a)));
    var s = (
      /** @type {TemplateNode} */
      r ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(s)
      ), f = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Pe(c, f);
    } else
      Pe(s, s);
    return s;
  };
}
function ia() {
  if (S)
    return Pe(N, null), N;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ke();
  return e.append(t, n), Pe(t, n), e;
}
function I(e, t) {
  if (S) {
    k.nodes_end = N, je();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const sa = ["touchstart", "touchmove"];
function la(e) {
  return sa.includes(e);
}
let $t = !0;
function hn(e) {
  $t = e;
}
function oa(e, t) {
  t !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = t, e.nodeValue = t == null ? "" : t + "");
}
function Xn(e, t) {
  return Qn(e, t);
}
function ua(e, t) {
  Lt(), t.intro = t.intro ?? !1;
  const n = t.target, r = S, a = N;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== kn); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Ae(i);
    if (!i)
      throw Ze;
    de(!0), ue(
      /** @type {Comment} */
      i
    ), je();
    const s = Qn(e, { ...t, anchor: i });
    if (N === null || N.nodeType !== 8 || /** @type {Comment} */
    N.data !== Gt)
      throw Kt(), Ze;
    return de(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Ze)
      return t.recover === !1 && Lr(), Lt(), zn(n), de(!1), Xn(e, t);
    throw s;
  } finally {
    de(r), ue(a);
  }
}
const Fe = /* @__PURE__ */ new Map();
function Qn(e, { target: t, anchor: n, props: r = {}, events: a, context: i, intro: s = !0 }) {
  Lt();
  var c = /* @__PURE__ */ new Set(), f = (l) => {
    for (var v = 0; v < l.length; v++) {
      var d = l[v];
      if (!c.has(d)) {
        c.add(d);
        var _ = la(d);
        t.addEventListener(d, Je, { passive: _ });
        var p = Fe.get(d);
        p === void 0 ? (document.addEventListener(d, Je, { passive: _ }), Fe.set(d, 1)) : Fe.set(d, p + 1);
      }
    }
  };
  f(Jt(Jn)), Mt.add(f);
  var o = void 0, u = Rn(() => {
    var l = n ?? t.appendChild(Ke());
    return Ye(() => {
      if (i) {
        St({});
        var v = (
          /** @type {ComponentContext} */
          B
        );
        v.c = i;
      }
      a && (r.$$events = a), S && Pe(
        /** @type {TemplateNode} */
        l,
        null
      ), $t = s, o = e(l, r) || {}, $t = !0, S && (k.nodes_end = N), i && At();
    }), () => {
      var _;
      for (var v of c) {
        t.removeEventListener(v, Je);
        var d = (
          /** @type {number} */
          Fe.get(v)
        );
        --d === 0 ? (document.removeEventListener(v, Je), Fe.delete(v)) : Fe.set(v, d);
      }
      Mt.delete(f), Ft.delete(o), l !== n && ((_ = l.parentNode) == null || _.removeChild(l));
    };
  });
  return Ft.set(o, u), o;
}
let Ft = /* @__PURE__ */ new WeakMap();
function ca(e) {
  const t = Ft.get(e);
  t && t();
}
function Q(e, t, n, r = null, a = !1) {
  S && je();
  var i = e, s = null, c = null, f = null, o = a ? rt : 0;
  nn(() => {
    if (f === (f = !!t())) return;
    let u = !1;
    if (S) {
      const l = (
        /** @type {Comment} */
        i.data === Wt
      );
      f === l && (i = Dt(), ue(i), de(!1), u = !0);
    }
    f ? (s ? Xe(s) : s = Ye(() => n(i)), c && pt(c, () => {
      c = null;
    })) : (c ? Xe(c) : r && (c = Ye(() => r(i))), s && pt(s, () => {
      s = null;
    })), u && de(!0);
  }, o), S && (i = N);
}
let Ue = null;
function pn(e) {
  Ue = e;
}
function fa(e, t) {
  return t;
}
function da(e, t, n, r) {
  for (var a = [], i = t.length, s = 0; s < i; s++)
    rn(t[s].e, a, !0);
  var c = i > 0 && a.length === 0 && n !== null;
  if (c) {
    var f = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    zn(f), f.append(
      /** @type {Element} */
      n
    ), r.clear(), we(e, t[0].prev, t[i - 1].next);
  }
  Pn(a, () => {
    for (var o = 0; o < i; o++) {
      var u = t[o];
      c || (r.delete(u.k), we(e, u.prev, u.next)), De(u.e, !c);
    }
  });
}
function qt(e, t, n, r, a, i = null) {
  var s = e, c = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, f = (t & En) !== 0;
  if (f) {
    var o = (
      /** @type {Element} */
      e
    );
    s = S ? ue(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Te(o)
    ) : o.appendChild(Ke());
  }
  S && je();
  var u = null;
  nn(() => {
    var l = n(), v = zt(l) ? l : l == null ? [] : Jt(l), d = v.length;
    let _ = !1;
    if (S) {
      var p = (
        /** @type {Comment} */
        s.data === Wt
      );
      p !== (d === 0) && (s = Dt(), ue(s), de(!1), _ = !0);
    }
    if (S) {
      for (var b = null, $, w = 0; w < d; w++) {
        if (N.nodeType === 8 && /** @type {Comment} */
        N.data === Gt) {
          s = /** @type {Comment} */
          N, _ = !0, de(!1);
          break;
        }
        var m = v[w], x = r(m, w);
        $ = er(N, c, b, null, m, x, w, a, t), c.items.set(x, $), b = $;
      }
      d > 0 && ue(Dt());
    }
    S || va(v, c, s, a, t, r), i !== null && (d === 0 ? u ? Xe(u) : u = Ye(() => i(s)) : u !== null && pt(u, () => {
      u = null;
    })), _ && de(!0);
  }), S && (s = N);
}
function va(e, t, n, r, a, i) {
  var Y, L, j, J;
  var s = (a & fr) !== 0, c = (a & (Yt | jt)) !== 0, f = e.length, o = t.items, u = t.first, l = u, v, d = null, _, p = [], b = [], $, w, m, x;
  if (s)
    for (x = 0; x < f; x += 1)
      $ = e[x], w = i($, x), m = o.get(w), m !== void 0 && ((Y = m.a) == null || Y.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(m));
  for (x = 0; x < f; x += 1) {
    if ($ = e[x], w = i($, x), m = o.get(w), m === void 0) {
      var P = l ? (
        /** @type {TemplateNode} */
        l.e.nodes_start
      ) : n;
      d = er(
        P,
        t,
        d,
        d === null ? t.first : d.next,
        $,
        w,
        x,
        r,
        a
      ), o.set(w, d), p = [], b = [], l = d.next;
      continue;
    }
    if (c && _a(m, $, x, a), m.e.f & Ce && (Xe(m.e), s && ((L = m.a) == null || L.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(m))), m !== l) {
      if (v !== void 0 && v.has(m)) {
        if (p.length < b.length) {
          var y = b[0], R;
          d = y.prev;
          var U = p[0], _e = p[p.length - 1];
          for (R = 0; R < p.length; R += 1)
            gn(p[R], y, n);
          for (R = 0; R < b.length; R += 1)
            v.delete(b[R]);
          we(t, U.prev, _e.next), we(t, d, U), we(t, _e, y), l = y, d = _e, x -= 1, p = [], b = [];
        } else
          v.delete(m), gn(m, l, n), we(t, m.prev, m.next), we(t, m, d === null ? t.first : d.next), we(t, d, m), d = m;
        continue;
      }
      for (p = [], b = []; l !== null && l.k !== w; )
        l.e.f & Ce || (v ?? (v = /* @__PURE__ */ new Set())).add(l), b.push(l), l = l.next;
      if (l === null)
        continue;
      m = l;
    }
    p.push(m), d = m, l = m.next;
  }
  if (l !== null || v !== void 0) {
    for (var A = v === void 0 ? [] : Jt(v); l !== null; )
      A.push(l), l = l.next;
    var me = A.length;
    if (me > 0) {
      var H = a & En && f === 0 ? n : null;
      if (s) {
        for (x = 0; x < me; x += 1)
          (j = A[x].a) == null || j.measure();
        for (x = 0; x < me; x += 1)
          (J = A[x].a) == null || J.fix();
      }
      da(t, A, H, o);
    }
  }
  s && at(() => {
    var C;
    if (_ !== void 0)
      for (m of _)
        (C = m.a) == null || C.apply();
  }), k.first = t.first && t.first.e, k.last = d && d.e;
}
function _a(e, t, n, r) {
  r & Yt && T(e.v, t), r & jt ? T(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function er(e, t, n, r, a, i, s, c, f) {
  var o = Ue;
  try {
    var u = (f & Yt) !== 0, l = (f & dr) === 0, v = u ? l ? /* @__PURE__ */ Qt(a) : ae(a) : a, d = f & jt ? ae(s) : s, _ = {
      i: d,
      v,
      k: i,
      a: null,
      // @ts-expect-error
      e: null,
      prev: n,
      next: r
    };
    return Ue = _, _.e = Ye(() => c(e, v, d), S), _.e.prev = n && n.e, _.e.next = r && r.e, n === null ? t.first = _ : (n.next = _, n.e.next = _.e), r !== null && (r.prev = _, r.e.prev = _.e), _;
  } finally {
    Ue = o;
  }
}
function gn(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, a = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ae(i)
    );
    a.before(i), i = s;
  }
}
function we(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function ha(e, t, n, r, a, i) {
  let s = S;
  S && je();
  var c, f, o = null;
  S && N.nodeType === 1 && (o = /** @type {Element} */
  N, je());
  var u = (
    /** @type {TemplateNode} */
    S ? N : e
  ), l, v = Ue;
  nn(() => {
    const d = t() || null;
    var _ = d === "svg" ? yr : null;
    if (d !== c) {
      var p = Ue;
      pn(v), l && (d === null ? pt(l, () => {
        l = null, f = null;
      }) : d === f ? Xe(l) : (De(l), hn(!1))), d && d !== f && (l = Ye(() => {
        if (o = S ? (
          /** @type {Element} */
          o
        ) : _ ? document.createElementNS(_, d) : document.createElement(d), Pe(o, o), r) {
          var b = (
            /** @type {TemplateNode} */
            S ? /* @__PURE__ */ Te(o) : o.appendChild(Ke())
          );
          S && (b === null ? de(!1) : ue(b)), r(o, b);
        }
        k.nodes_end = o, u.before(o);
      })), c = d, c && (f = c), hn(!0), pn(p);
    }
  }, rt), s && (de(!0), ue(u));
}
function sn(e, t) {
  at(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const a = document.createElement("style");
      a.id = t.hash, a.textContent = t.code, r.appendChild(a);
    }
  });
}
function Re(e, t, n, r) {
  var a = e.__attributes ?? (e.__attributes = {});
  S && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || a[t] !== (a[t] = n) && (t === "loading" && (e[Ar] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && tr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function g(e, t, n) {
  tr(e).includes(t) ? e[t] = n : Re(e, t, n);
}
var mn = /* @__PURE__ */ new Map();
function tr(e) {
  var t = mn.get(e.nodeName);
  if (t) return t;
  mn.set(e.nodeName, t = []);
  for (var n, r = Ot(e); r.constructor.name !== "Element"; ) {
    n = wr(r);
    for (var a in n)
      n[a].set && t.push(a);
    r = Ot(r);
  }
  return t;
}
function Bt(e, t) {
  var n = e.__className, r = pa(t);
  S && e.className === r ? e.__className = r : (n !== r || S && e.className !== r) && (t == null ? e.removeAttribute("class") : e.className = r, e.__className = r);
}
function pa(e) {
  return e ?? "";
}
const ga = requestAnimationFrame, ma = () => performance.now(), Ee = {
  tick: (
    /** @param {any} _ */
    (e) => ga(e)
  ),
  now: () => ma(),
  tasks: /* @__PURE__ */ new Set()
};
function nr(e) {
  Ee.tasks.forEach((t) => {
    t.c(e) || (Ee.tasks.delete(t), t.f());
  }), Ee.tasks.size !== 0 && Ee.tick(nr);
}
function ba(e) {
  let t;
  return Ee.tasks.size === 0 && Ee.tick(nr), {
    promise: new Promise((n) => {
      Ee.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      Ee.tasks.delete(t);
    }
  };
}
function ut(e, t) {
  e.dispatchEvent(new CustomEvent(t));
}
function $a(e) {
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function bn(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [a, i] = r.split(":");
    if (!a || i === void 0) break;
    const s = $a(a.trim());
    t[s] = i.trim();
  }
  return t;
}
const ya = (e) => e;
function wa(e, t, n, r) {
  var a = (e & mr) !== 0, i = "both", s, c = t.inert, f, o;
  function u() {
    return s ?? (s = n()(
      t,
      /** @type {P} */
      {},
      {
        direction: i
      }
    ));
  }
  var l = {
    is_global: a,
    in() {
      t.inert = c, ut(t, "introstart"), f = Ht(t, u(), o, 1, () => {
        ut(t, "introend"), f == null || f.abort(), f = s = void 0;
      });
    },
    out(p) {
      t.inert = !0, ut(t, "outrostart"), o = Ht(t, u(), f, 0, () => {
        ut(t, "outroend"), p == null || p();
      });
    },
    stop: () => {
      f == null || f.abort(), o == null || o.abort();
    }
  }, v = (
    /** @type {Effect} */
    k
  );
  if ((v.transitions ?? (v.transitions = [])).push(l), $t) {
    var d = a;
    if (!d) {
      for (var _ = (
        /** @type {Effect | null} */
        v.parent
      ); _ && _.f & rt; )
        for (; (_ = _.parent) && !(_.f & Zt); )
          ;
      d = !_ || (_.f & Tn) !== 0;
    }
    d && kt(() => {
      Tt(() => l.in());
    });
  }
}
function Ht(e, t, n, r, a) {
  var i = r === 1;
  if (xr(t)) {
    var s, c = !1;
    return at(() => {
      if (!c) {
        var b = t({ direction: i ? "in" : "out" });
        s = Ht(e, b, n, r, a);
      }
    }), {
      abort: () => {
        c = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (n == null || n.deactivate(), !(t != null && t.duration))
    return a(), {
      abort: ot,
      deactivate: ot,
      reset: ot,
      t: () => r
    };
  const { delay: f = 0, css: o, tick: u, easing: l = ya } = t;
  var v = [];
  if (i && n === void 0 && (u && u(0, 1), o)) {
    var d = bn(o(0, 1));
    v.push(d, d);
  }
  var _ = () => 1 - r, p = e.animate(v, { duration: f });
  return p.onfinish = () => {
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var $ = r - b, w = (
      /** @type {number} */
      t.duration * Math.abs($)
    ), m = [];
    if (w > 0) {
      if (o)
        for (var x = Math.ceil(w / 16.666666666666668), P = 0; P <= x; P += 1) {
          var y = b + $ * l(P / x), R = o(y, 1 - y);
          m.push(bn(R));
        }
      _ = () => {
        var U = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + $ * l(U / w);
      }, u && ba(() => {
        if (p.playState !== "running") return !1;
        var U = _();
        return u(U, 1 - U), !0;
      });
    }
    p = e.animate(m, { duration: w, fill: "forwards" }), p.onfinish = () => {
      _ = () => r, u == null || u(r, 1 - r), a();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null);
    },
    deactivate: () => {
      a = ot;
    },
    reset: () => {
      r === 0 && (u == null || u(1, 0));
    },
    t: () => _()
  };
}
function $n(e, t) {
  return e === t || (e == null ? void 0 : e[ct]) === t;
}
function Vt(e = {}, t, n, r) {
  return kt(() => {
    var a, i;
    return tn(() => {
      a = i, i = [], Tt(() => {
        e !== n(...i) && (t(e, ...i), a && $n(n(...a), e) && t(null, ...a));
      });
    }), () => {
      at(() => {
        i && $n(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function ve(e, t, n, r) {
  var x;
  var a = (n & vr) !== 0, i = (n & _r) !== 0, s = (n & pr) !== 0, c = (n & gr) !== 0, f = (
    /** @type {V} */
    e[t]
  ), o = (x = Ie(e, t)) == null ? void 0 : x.set, u = (
    /** @type {V} */
    r
  ), l = !0, v = !1, d = () => (v = !0, l && (l = !1, c ? u = Tt(
    /** @type {() => V} */
    r
  ) : u = /** @type {V} */
  r), u);
  f === void 0 && r !== void 0 && (o && i && Dr(), f = d(), o && o(f));
  var _;
  if (i)
    _ = () => {
      var P = (
        /** @type {V} */
        e[t]
      );
      return P === void 0 ? d() : (l = !0, v = !1, P);
    };
  else {
    var p = (a ? fe : Wr)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    p.f |= Tr, _ = () => {
      var P = h(p);
      return P !== void 0 && (u = /** @type {V} */
      void 0), P === void 0 ? u : P;
    };
  }
  if (!(n & hr))
    return _;
  if (o) {
    var b = e.$$legacy;
    return function(P, y) {
      return arguments.length > 0 ? ((!i || !y || b) && o(y ? _() : P), P) : _();
    };
  }
  var $ = !1, w = /* @__PURE__ */ Qt(f), m = /* @__PURE__ */ fe(() => {
    var P = _(), y = h(w);
    return $ ? ($ = !1, y) : w.v = P;
  });
  return a || (m.equals = Xt), function(P, y) {
    var R = h(m);
    if (arguments.length > 0) {
      const U = y ? h(m) : i && s ? ie(P) : P;
      return m.equals(U) || ($ = !0, T(w, U), v && u !== void 0 && (u = U), h(m)), P;
    }
    return R;
  };
}
function Ea(e) {
  return new ka(e);
}
var be, oe;
class ka {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Nt(this, be);
    /** @type {Record<string, any>} */
    Nt(this, oe);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, c) => {
      var f = /* @__PURE__ */ Qt(c);
      return n.set(s, f), f;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, c) {
          return h(n.get(c) ?? r(c, Reflect.get(s, c)));
        },
        has(s, c) {
          return h(n.get(c) ?? r(c, Reflect.get(s, c))), Reflect.has(s, c);
        },
        set(s, c, f) {
          return T(n.get(c) ?? r(c, f), f), Reflect.set(s, c, f);
        }
      }
    );
    Rt(this, oe, (t.hydrate ? ua : Xn)(t.component, {
      target: t.target,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && se(), Rt(this, be, a.$$events);
    for (const s of Object.keys(X(this, oe)))
      s === "$set" || s === "$destroy" || s === "$on" || _t(this, s, {
        get() {
          return X(this, oe)[s];
        },
        /** @param {any} value */
        set(c) {
          X(this, oe)[s] = c;
        },
        enumerable: !0
      });
    X(this, oe).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(a, s);
    }, X(this, oe).$destroy = () => {
      ca(X(this, oe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    X(this, oe).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    X(this, be)[t] = X(this, be)[t] || [];
    const r = (...a) => n.call(this, ...a);
    return X(this, be)[t].push(r), () => {
      X(this, be)[t] = X(this, be)[t].filter(
        /** @param {any} fn */
        (a) => a !== r
      );
    };
  }
  $destroy() {
    X(this, oe).$destroy();
  }
}
be = new WeakMap(), oe = new WeakMap();
let rr;
typeof HTMLElement == "function" && (rr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    z(this, "$$ctor");
    /** Slots */
    z(this, "$$s");
    /** @type {any} The Svelte component instance */
    z(this, "$$c");
    /** Whether or not the custom element is connected */
    z(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    z(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    z(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    z(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    z(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    z(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    z(this, "$$me");
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const a = this.$$c.$on(t, n);
      this.$$l_u.set(n, a);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const a = this.$$l_u.get(n);
      a && (a(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(a) {
        return (i) => {
          const s = document.createElement("slot");
          a !== "default" && (s.name = a), I(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = xa(this);
      for (const a of this.$$s)
        a in r && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), n.default = !0) : n[a] = t(a));
      for (const a of this.attributes) {
        const i = this.$$g_p(a.name);
        i in this.$$d || (this.$$d[i] = dt(i, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = Ea({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Rn(() => {
        tn(() => {
          var a;
          this.$$r = !0;
          for (const i of vt(this.$$c)) {
            if (!((a = this.$$p_d[i]) != null && a.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = dt(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const i of this.$$l[a]) {
          const s = this.$$c.$on(a, i);
          this.$$l_u.set(i, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, n, r) {
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = dt(t, r, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return vt(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function dt(e, t, n, r) {
  var i;
  const a = (i = n[e]) == null ? void 0 : i.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (a) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (a) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function xa(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ln(e, t, n, r, a, i) {
  let s = class extends rr {
    constructor() {
      super(e, n, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return vt(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return vt(t).forEach((c) => {
    _t(s.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(f) {
        var l;
        f = dt(c, f, t), this.$$d[c] = f;
        var o = this.$$c;
        if (o) {
          var u = (l = Ie(o, c)) == null ? void 0 : l.get;
          u ? o[c] = f : o.$set({ [c]: f });
        }
      }
    });
  }), r.forEach((c) => {
    _t(s.prototype, c, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[c];
      }
    });
  }), i && (s = i(s)), e.element = /** @type {any} */
  s, s;
}
var yn, wn;
(function(e) {
  e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
})(yn || (yn = {})), function(e) {
  e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
}(wn || (wn = {}));
var Ca = function(e, t, n, r) {
  r = r || {}, n = n ?? {};
  var a = new Event(t, { bubbles: r.bubbles === void 0 || r.bubbles, cancelable: !!r.cancelable, composed: r.composed === void 0 || r.composed });
  return a.detail = n, e.dispatchEvent(a), a;
}, Ta = (e, t, n) => {
  t()[n()] = !t()[n()];
}, Sa = /* @__PURE__ */ q("<ha-formfield><ha-switch></ha-switch></ha-formfield>", 2), Aa = /* @__PURE__ */ q("<ha-textfield></ha-textfield>", 2), Na = (e, t) => T(t, !0), Ra = /* @__PURE__ */ q("<ha-icon></ha-icon>", 2), Oa = /* @__PURE__ */ q("<ha-icon></ha-icon>", 2), Ia = (e, t, n, r) => {
  t()[n()] = void 0, r();
}, Pa = /* @__PURE__ */ q("<ha-icon-button><ha-icon></ha-icon></ha-icon-button>", 2), La = (e, t) => {
  T(t, !1);
}, Da = /* @__PURE__ */ q('<div class="sub-panel svelte-3xmus2"><mwc-button>Cancel</mwc-button> <hui-card-picker></hui-card-picker></div>', 2), Ma = /* @__PURE__ */ q('<div class="sub-panel svelte-3xmus2"><hui-card-element-editor></hui-card-element-editor></div>', 2), Fa = /* @__PURE__ */ q('<div class="row svelte-3xmus2"><ha-textfield></ha-textfield> <ha-icon-button><!></ha-icon-button> <!></div> <!>', 3), qa = /* @__PURE__ */ q("<!> <!> <!>", 1), Ba = /* @__PURE__ */ q('<form class="content svelte-3xmus2"></form>'), Ha = /* @__PURE__ */ q("<paper-tab></paper-tab>", 2), Va = /* @__PURE__ */ q("<paper-tabs></paper-tabs> <paper-tabs><paper-tab><ha-icon></ha-icon></paper-tab></paper-tabs>", 3), Ua = (e, t, n, r) => {
  var a;
  t().cards = (a = t().cards) == null ? void 0 : a.filter((i, s) => s !== h(n)), T(n, 0), r();
}, Ya = /* @__PURE__ */ q('<div class="sub-panel svelte-3xmus2"><mwc-button>Remove</mwc-button> <hui-card-element-editor></hui-card-element-editor></div>', 2), ja = (e, t, n) => {
  T(t, !1), n();
}, Wa = /* @__PURE__ */ q('<div class="sub-panel svelte-3xmus2"><mwc-button>Cancel</mwc-button> <hui-card-picker></hui-card-picker></div>', 2), Ga = /* @__PURE__ */ q('<form class="content svelte-3xmus2"><div class="row svelte-3xmus2"><!></div> <!> <!></form>'), Ka = /* @__PURE__ */ q("<paper-tabs><paper-tab>Layout</paper-tab> <paper-tab>Cards</paper-tab></paper-tabs> <!>", 3);
const za = {
  hash: "svelte-3xmus2",
  code: `
    .content.svelte-3xmus2 {
        display: grid;
        gap: 1em;
        width: 100%;
    }
    ha-textfield.svelte-3xmus2 {
        width: 100%;
    }
    paper-tabs.svelte-3xmus2 {
        width: 100%;
        padding-bottom: 0.5em;
    }

    .row.svelte-3xmus2 {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .tab-selected.svelte-3xmus2 {
        border-bottom: solid;
        background: #72727215;
    }

    .sub-panel.svelte-3xmus2 {
        border: 1px solid;
        border-radius: 1em;
        padding: 1em;
    }
    .mwc-button.svelte-3xmus2 {
        margin: 1em;
    }

    #add-card.svelte-3xmus2 {
        width: fit-content;
    }
`
};
function Ja(e, t) {
  St(t, !0), sn(e, za);
  const n = ve(t, "hass", 7), r = ve(t, "lovelace", 7), a = ve(t, "self", 7), i = ve(t, "config", 23, () => ({})), s = {
    title: [
      "string",
      {
        label: "Title (Not displayed if using Title-Card)"
      }
    ],
    clear: ["boolean", { label: "Remove background" }],
    "clear-children": [
      "boolean",
      { label: "Remove child card background/borders" }
    ],
    expanded: [
      "boolean",
      {
        label: "Start expanded (Always expanded in editor)"
      }
    ],
    "expand-id": ["string", { label: "LocalStorage ID" }],
    "button-background": [
      "string",
      { label: "Button background (CSS color)" }
    ],
    gap: ["string", { label: "Gap between cards" }],
    padding: [
      "string",
      { label: "Padding of all card content" }
    ],
    "child-padding": [
      "string",
      { label: "Padding of child cards" }
    ],
    "title-card": ["card", { label: "Title card" }],
    "title-card-padding": [
      "string",
      {
        label: "Padding of title card",
        cond: (y) => y["title-card"] !== void 0
      }
    ],
    "title-card-button-overlay": [
      "boolean",
      {
        label: "Expand button as overlay on title card",
        cond: (y) => y["title-card"] !== void 0
      }
    ],
    "overlay-margin": [
      "string",
      {
        label: "Margin of overlay button",
        cond: (y) => !!y["title-card-button-overlay"]
      }
    ],
    cards: ["card[]"]
  }, c = () => {
    Ca(a(), "config-changed", { config: i() }, {
      bubbles: !0,
      cancelable: !1,
      composed: !0
      // makes the event jump shadow DOM boundary
    });
  };
  let f = ce(0);
  const o = (y) => T(f, ie(y.detail.selected)), u = (y) => (R) => {
    R.stopPropagation(), i()[y] = R.detail.config;
  }, l = (y) => (R) => {
    y(R);
  };
  let v = ce(!1), d = ce(0), _ = ce(!1), p = ce(void 0), b = ce(void 0);
  en(() => {
    h(p) && (h(p).lovelace = r()), h(b) && (h(b).lovelace = r());
  });
  var $ = Ka(), w = qe($);
  g(w, "scrollable", !0), g(w, "class", "svelte-3xmus2");
  var m = V(w), x = W(m, 2);
  D(w);
  var P = W(w, 2);
  return Q(
    P,
    () => h(f) === 0,
    (y) => {
      var R = Ba();
      R.__input = c, qt(R, 21, () => Object.entries(s), ([U, [_e, A]]) => U, (U, _e) => {
        let A = () => h(_e)[0], me = () => h(_e)[1][0], H = () => h(_e)[1][1];
        var Y = qa(), L = qe(Y);
        Q(L, () => {
          var C, E;
          return me() === "boolean" && (!((C = H()) != null && C.cond) || ((E = H()) == null ? void 0 : E.cond(i())));
        }, (C) => {
          var E = Sa(), K = V(E);
          K.__input = [Ta, i, A], D(E), re(() => {
            var M;
            g(E, "label", ((M = H()) == null ? void 0 : M.label) || A()), g(K, "checked", i()[A()] ?? !1), g(K, "configValue", i()[A()]);
          }), I(C, E);
        });
        var j = W(L, 2);
        Q(j, () => {
          var C, E;
          return me() === "string" && (!((C = H()) != null && C.cond) || ((E = H()) == null ? void 0 : E.cond(i())));
        }, (C) => {
          var E = Aa(), K = /* @__PURE__ */ fe(() => l((M) => {
            var Z;
            i()[A()] = (Z = M == null ? void 0 : M.target) == null ? void 0 : Z.value;
          }));
          E.__input = function(...M) {
            var Z;
            (Z = h(K)) == null || Z.apply(this, M);
          }, g(E, "class", "svelte-3xmus2"), re(() => {
            var M;
            g(E, "label", ((M = H()) == null ? void 0 : M.label) || A()), g(E, "value", i()[A()] ?? ""), g(E, "configValue", i()[A()]);
          }), I(C, E);
        });
        var J = W(j, 2);
        Q(J, () => {
          var C, E;
          return me() === "card" && (!((C = H()) != null && C.cond) || ((E = H()) == null ? void 0 : E.cond(i())));
        }, (C) => {
          var E = Fa(), K = qe(E), M = V(K);
          g(M, "readonly", !0), g(M, "class", "svelte-3xmus2");
          var Z = W(M, 2);
          Z.__click = [Na, v], g(Z, "role", "button"), g(Z, "tabindex", "0");
          var st = V(Z);
          Q(
            st,
            () => !i()[A()],
            (le) => {
              var F = Ra();
              g(F, "icon", "mdi:plus"), I(le, F);
            },
            (le) => {
              var F = Oa();
              g(F, "icon", "mdi:redo"), I(le, F);
            }
          ), D(Z);
          var ir = W(Z, 2);
          Q(ir, () => i()[A()], (le) => {
            var F = Pa();
            g(F, "role", "button"), g(F, "tabindex", "0"), F.__click = [Ia, i, A, c];
            var ye = V(F);
            g(ye, "icon", "mdi:close"), D(F), I(le, F);
          }), D(K);
          var sr = W(K, 2);
          Q(
            sr,
            () => h(v),
            (le) => {
              var F = Da(), ye = V(F);
              g(ye, "role", "button"), g(ye, "tabindex", "0"), ye.__click = [La, v];
              var Me = W(ye, 2);
              Vt(Me, (he) => T(p, he), () => h(p));
              var ze = /* @__PURE__ */ fe(() => l((he) => {
                console.log("cardpicker-config-changed"), u(A())(he), T(v, !1);
              }));
              D(F), re(() => {
                g(Me, "hass", n()), g(Me, "lovelace", r());
              }), Ne("config-changed", Me, function(...he) {
                var lt;
                (lt = h(ze)) == null || lt.apply(this, he);
              }), I(le, F);
            },
            (le) => {
              var F = ia(), ye = qe(F);
              Q(
                ye,
                () => i()[A()],
                (Me) => {
                  var ze = Ma(), he = V(ze), lt = /* @__PURE__ */ fe(() => u(A()));
                  D(ze), re(() => {
                    g(he, "hass", n()), g(he, "lovelace", r()), g(he, "value", i()[A()]);
                  }), Ne("config-changed", he, function(...lr) {
                    var on;
                    (on = h(lt)) == null || on.apply(this, lr);
                  }), I(Me, ze);
                },
                null,
                !0
              ), I(le, F);
            }
          ), re(() => {
            var le, F;
            g(M, "label", ((le = H()) == null ? void 0 : le.label) || A()), g(M, "value", ((F = i()[A()]) == null ? void 0 : F.type) ?? ""), g(M, "configValue", i()[A()]);
          }), I(C, E);
        }), I(U, Y);
      }), D(R), I(y, R);
    },
    (y) => {
      var R = Ga();
      R.__input = c;
      var U = V(R), _e = V(U);
      Q(_e, () => !h(_), (H) => {
        var Y = Va(), L = qe(Y);
        g(L, "scrollable", !0);
        var j = /* @__PURE__ */ fe(() => l((K) => {
          T(d, ie(K.detail.selected));
        }));
        g(L, "class", "svelte-3xmus2"), qt(L, 21, () => i().cards || [], fa, (K, M, Z) => {
          var st = Ha();
          st.textContent = `${Z + 1} `, I(K, st);
        }), D(L);
        var J = W(L, 2);
        g(J, "id", "add-card"), g(J, "class", "svelte-3xmus2");
        var C = V(J), E = V(C);
        g(E, "icon", "mdi:plus"), D(C), D(J), re(() => g(L, "selected", h(d))), Ne("iron-activate", L, function(...K) {
          var M;
          (M = h(j)) == null || M.apply(this, K);
        }), Ne("iron-activate", J, () => T(_, !0)), I(H, Y);
      }), D(U);
      var A = W(U, 2);
      Q(A, () => {
        var H, Y;
        return ((Y = (H = i()) == null ? void 0 : H.cards) == null ? void 0 : Y.length) && !h(_);
      }, (H) => {
        var Y = Ya(), L = V(Y);
        g(L, "role", "button"), g(L, "tabindex", "0"), L.__click = [
          Ua,
          i,
          d,
          c
        ];
        var j = W(L, 2), J = /* @__PURE__ */ fe(() => l((C) => {
          C.stopPropagation(), i().cards && (i().cards[h(d)] = C.detail.config, c());
        }));
        D(Y), re(() => {
          g(j, "hass", n()), g(j, "lovelace", r()), g(j, "value", i().cards[h(d)]);
        }), Ne("config-changed", j, function(...C) {
          var E;
          (E = h(J)) == null || E.apply(this, C);
        }), I(H, Y);
      });
      var me = W(A, 2);
      Q(me, () => h(_), (H) => {
        var Y = Wa(), L = V(Y);
        g(L, "role", "button"), g(L, "tabindex", "0"), L.__click = [ja, _, c];
        var j = W(L, 2);
        Vt(j, (C) => T(b, C), () => h(b));
        var J = /* @__PURE__ */ fe(() => l((C) => {
          var E;
          console.log("cardpicker-config-changed"), C.stopPropagation(), i().cards || (i().cards = []), (E = i().cards) == null || E.push(C.detail.config), c(), T(_, !1), T(d, i().cards.length - 1);
        }));
        D(Y), re(() => {
          g(j, "hass", n()), g(j, "lovelace", r());
        }), Ne("config-changed", j, function(...C) {
          var E;
          (E = h(J)) == null || E.apply(this, C);
        }), I(H, Y);
      }), D(R), I(y, R);
    }
  ), re(() => {
    g(w, "selected", h(f)), g(m, "class", `${`${h(f) === 0 ? "tab-selected" : ""}` ?? ""} svelte-3xmus2`), g(x, "class", `${`${h(f) !== 0 ? "tab-selected" : ""}` ?? ""} svelte-3xmus2`);
  }), Ne("iron-activate", w, o), I(e, $), At({
    get hass() {
      return n();
    },
    set hass(y) {
      n(y), se();
    },
    get lovelace() {
      return r();
    },
    set lovelace(y) {
      r(y), se();
    },
    get self() {
      return a();
    },
    set self(y) {
      a(y), se();
    },
    get config() {
      return i();
    },
    set config(y = {}) {
      i(y), se();
    }
  });
}
Zn(["input", "click"]);
customElements.define("expander-card-editor", ln(
  Ja,
  {
    hass: {},
    lovelace: {},
    self: {},
    config: {}
  },
  [],
  [],
  !0,
  (e) => class extends e {
    constructor() {
      super();
      z(this, "config");
      z(this, "self");
      this.self = this;
    }
    setConfig(n = {}) {
      this.config = { ...this.config || {}, ...n };
    }
  }
));
function Za(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Xa(e, { delay: t = 0, duration: n = 400, easing: r = Za, axis: a = "y" } = {}) {
  const i = getComputedStyle(e), s = +i.opacity, c = a === "y" ? "height" : "width", f = parseFloat(i[c]), o = a === "y" ? ["top", "bottom"] : ["left", "right"], u = o.map(
    ($) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${$[0].toUpperCase()}${$.slice(1)}`
    )
  ), l = parseFloat(i[`padding${u[0]}`]), v = parseFloat(i[`padding${u[1]}`]), d = parseFloat(i[`margin${u[0]}`]), _ = parseFloat(i[`margin${u[1]}`]), p = parseFloat(
    i[`border${u[0]}Width`]
  ), b = parseFloat(
    i[`border${u[1]}Width`]
  );
  return {
    delay: t,
    duration: n,
    easing: r,
    css: ($) => `overflow: hidden;opacity: ${Math.min($ * 20, 1) * s};${c}: ${$ * f}px;padding-${o[0]}: ${$ * l}px;padding-${o[1]}: ${$ * v}px;margin-${o[0]}: ${$ * d}px;margin-${o[1]}: ${$ * _}px;border-${o[0]}-width: ${$ * p}px;border-${o[1]}-width: ${$ * b}px;`
  };
}
let yt = ce(void 0);
const Qa = async () => (T(yt, ie(await window.loadCardHelpers().then((e) => e))), h(yt)), ei = () => h(yt) ? h(yt) : Qa();
function ar(e) {
  B === null && Kr(), B.l !== null ? ti(B).m.push(e) : en(() => {
    const t = Tt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ti(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
var ni = /* @__PURE__ */ q("<span>Loading...</span>"), ri = /* @__PURE__ */ q("<!> <!>", 1);
const ai = { hash: "svelte-3kpd", code: `
` };
function Ut(e, t) {
  St(t, !0), sn(e, ai);
  const n = ve(t, "type", 7, "div"), r = ve(t, "config", 7), a = ve(t, "hass", 7), i = ve(t, "clearChild", 7, !1);
  let s = ce(void 0), c = ce(!0);
  en(() => {
    h(s) && (h(s).hass = a());
  }), ar(async () => {
    var d;
    console.log("ExpanderSubCard onMount");
    const v = (await ei()).createCardElement(r());
    if (v.hass = a(), !h(s)) {
      console.error("container doesn't exist");
      return;
    }
    if (h(s).replaceWith(v), T(s, ie(v)), i()) {
      const _ = document.createElement("style");
      _.innerHTML = `
                ha-card {
                    background-color: transparent !important;
                    border-style: none !important;
                }
            `, (d = v.shadowRoot) == null || d.appendChild(_);
    }
    T(c, !1);
  });
  var f = ri(), o = qe(f);
  ha(o, n, !1, (l, v) => {
    Vt(l, (d) => T(s, ie(d)), () => h(s)), Bt(l, "svelte-3kpd"), wa(3, l, () => Xa);
  });
  var u = W(o, 2);
  return Q(u, () => h(c), (l) => {
    var v = ni();
    Re(v, "style", "padding: 1em; display: block; "), I(l, v);
  }), I(e, f), At({
    get type() {
      return n();
    },
    set type(l = "div") {
      n(l), se();
    },
    get config() {
      return r();
    },
    set config(l) {
      r(l), se();
    },
    get hass() {
      return a();
    },
    set hass(l) {
      a(l), se();
    },
    get clearChild() {
      return i();
    },
    set clearChild(l = !1) {
      i(l), se();
    }
  });
}
customElements.define("expander-sub-card", ln(
  Ut,
  {
    type: {},
    config: {},
    hass: {},
    clearChild: { type: "Boolean" }
  },
  [],
  [],
  !0
));
const wt = {
  gap: "0.6em",
  padding: "1em",
  clear: !1,
  "clear-children": !1,
  title: "Expander",
  "overlay-margin": "2em",
  "child-padding": "0.5em",
  "button-background": "transparent"
};
var ii = (e, t, n) => {
  if (T(t, !h(t)), n()["expand-id"] !== void 0)
    try {
      localStorage.setItem(`expander-${n()["expand-id"]}`, h(t) ? "true" : "false");
    } catch (r) {
      console.error(r);
    }
}, si = /* @__PURE__ */ q('<div><div class="title-card-container svelte-1n379ek"><!></div> <button aria-label="Toggle"><ha-icon></ha-icon></button></div>', 2), li = (e, t, n) => {
  if (T(t, !h(t)), n()["expand-id"] !== void 0)
    try {
      localStorage.setItem(`expander-${n()["expand-id"]}`, h(t) ? "true" : "false");
    } catch (r) {
      console.error(r);
    }
}, oi = /* @__PURE__ */ q('<button class="header ripple svelte-1n379ek"><div class="primary title svelte-1n379ek"> </div> <ha-icon></ha-icon></button>', 2), ui = /* @__PURE__ */ q('<div class="animation-wrapper svelte-1n379ek"><div class="children-container svelte-1n379ek"></div></div>'), ci = /* @__PURE__ */ q("<ha-card><!> <!></ha-card>", 2);
const fi = {
  hash: "svelte-1n379ek",
  code: `
    .expander-card.svelte-1n379ek {
        display: grid;
        padding: var(--padding);
        grid-template-rows: 0fr;
        transition: all 0.5s ease-in-out;
    }

    .animation-wrapper.svelte-1n379ek {
        display: grid;
        overflow: hidden;
        grid-template-rows: 0;
        transition: grid-template-rows 0.5s ease-in-out;
    }

    .children-container.svelte-1n379ek {
        padding:  var(--child-padding);
        display: grid;
        gap: var(--gap);
        transition: all 0.3s ease-in-out;
        overflow: hidden;
        & > :first-child {
            margin-top: var(--gap);
        }
    }
    .clear.svelte-1n379ek {
        background-color: transparent;
        border-style: none;
    }
    .clear-children.svelte-1n379ek {
        & ::slotted(ha-card) {
            background-color: transparent !important;
            border-style: none !important;
        }
    }

    ::slotted(ha-card) {
        background-color: transparent !important;
        border-style: none !important;
    }

    .title-card-header.svelte-1n379ek {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }
    .title-card-header-overlay.svelte-1n379ek {
        display: block;
    }
    .title-card-container.svelte-1n379ek {
        width: 100%;
        padding: var(--title-padding);
    }
    .header.svelte-1n379ek {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.8em 0.8em;
        margin: 2px;
        background: var(--button-background);
        border-style: none;
    }
    .header-overlay.svelte-1n379ek {
        position: absolute;
        top: 0;
        right: 0;
        margin: var(--overlay-margin);
    }
    .title.svelte-1n379ek {
        width: 100%;
        text-align: left;
    }
    .ico.svelte-1n379ek {
        color: var(--primary-text-color);
        transition-property: transform;
        transition-duration: 0.35s;
    }

    .flipped.svelte-1n379ek {
        transform: rotate(180deg);
    }

    .ripple.svelte-1n379ek {
        background-position: center;
        transition: background 0.8s;
        border-radius: 1em;
    }
    .ripple.svelte-1n379ek:hover {
        background: #ffffff12 radial-gradient(circle, transparent 1%, #ffffff12 1%) center/15000%;
    }
    .ripple.svelte-1n379ek:active {
        background-color: #ffffff25;
        background-size: 100%;
        transition: background 0s;
    }
`
};
function di(e, t) {
  St(t, !0), sn(e, fi);
  let n = ce(!1), r = ce(!1);
  const a = ve(t, "hass", 7), i = ve(t, "self", 7), s = ve(t, "config", 7, wt);
  ar(() => {
    var u, l;
    if (T(r, ie(((l = (u = i()) == null ? void 0 : u.parentElement) == null ? void 0 : l.hasAttribute("preview")) || !1)), h(r))
      T(n, !0);
    else {
      let v = s().expanded;
      if (s()["expand-id"] !== void 0)
        try {
          const d = localStorage.getItem(`expander-${s()["expand-id"]}`);
          v = d ? d === "true" : v;
        } catch (d) {
          console.error(d);
        }
      v !== void 0 && setTimeout(() => T(n, ie(v)), 100);
    }
  });
  var c = ci(), f = V(c);
  Q(
    f,
    () => s()["title-card"],
    (u) => {
      var l = si(), v = V(l), d = V(v), _ = /* @__PURE__ */ fe(() => s()["clear-children"] || !1);
      Ut(d, {
        get hass() {
          return a();
        },
        get config() {
          return s()["title-card"];
        },
        get type() {
          return s()["title-card"].type;
        },
        get clearChild() {
          return h(_);
        }
      }), D(v);
      var p = W(v, 2);
      p.__click = [ii, n, s];
      var b = V(p);
      g(b, "icon", "mdi:chevron-down"), D(p), D(l), re(() => {
        Bt(l, `${`title-card-header${s()["title-card-button-overlay"] ? "-overlay" : ""}` ?? ""} svelte-1n379ek`), Re(v, "style", `--title-padding:${s()["title-card-padding"] ?? ""}`), Re(p, "style", `--overlay-margin:${s()["overlay-margin"] ?? ""}; --button-background:${s()["button-background"] ?? ""};`), Bt(p, `${`header ripple ${s()["title-card-button-overlay"] ? "header-overlay" : ""}` ?? ""} svelte-1n379ek`), g(b, "class", `${`primaryico ${h(n) ? "flipped" : ""}` ?? ""} svelte-1n379ek`);
      }), I(u, l);
    },
    (u) => {
      var l = oi();
      l.__click = [li, n, s];
      var v = V(l), d = V(v);
      D(v);
      var _ = W(v, 2);
      g(_, "icon", "mdi:chevron-down"), D(l), re(() => {
        Re(l, "style", `--button-background:${s()["button-background"] ?? ""};`), oa(d, s().title), g(_, "class", `${` primaryico ${h(n) ? "flipped" : ""}` ?? ""} svelte-1n379ek`);
      }), I(u, l);
    }
  );
  var o = W(f, 2);
  return Q(o, () => s().cards, (u) => {
    var l = ui(), v = V(l);
    qt(v, 20, () => s().cards, (d) => d, (d, _) => {
      var p = /* @__PURE__ */ fe(() => s()["clear-children"] || !1);
      Ut(d, {
        get hass() {
          return a();
        },
        get config() {
          return _;
        },
        get type() {
          return _.type;
        },
        get clearChild() {
          return h(p);
        }
      });
    }), D(v), D(l), re(() => {
      Re(l, "style", `grid-template-rows: ${(h(n) ? "1fr" : "0fr") ?? ""};`), Re(v, "style", `--gap:${s().gap}; --child-padding:${s()["child-padding"]};`);
    }), I(u, l);
  }), D(c), re(() => {
    g(c, "class", `${`expander-card ${s().clear ? "clear" : ""}` ?? ""} svelte-1n379ek`), g(c, "style", `--padding:${s().padding ?? ""}; --gap:${s().gap ?? ""}`);
  }), I(e, c), At({
    get hass() {
      return a();
    },
    set hass(u) {
      a(u), se();
    },
    get self() {
      return i();
    },
    set self(u) {
      i(u), se();
    },
    get config() {
      return s();
    },
    set config(u = wt) {
      s(u), se();
    }
  });
}
Zn(["click"]);
customElements.define("expander-card", ln(di, { hass: {}, self: {}, config: {} }, [], [], !0, (e) => class extends e {
  constructor() {
    super();
    // re-declare props used in customClass.
    z(this, "config");
    z(this, "self");
    this.self = this;
  }
  static getConfigElement() {
    return document.createElement("expander-card-editor");
  }
  static getStubConfig() {
    return { ...wt };
  }
  setConfig(n = {}) {
    this.config = { ...wt, ...n };
  }
}));
const vi = "versionStr";
console.info(`ExpanderCard Version: ${vi}`);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "expander-card",
  name: "Expander Card",
  preview: !0,
  description: "Expander Card"
});
export {
  di as default
};
