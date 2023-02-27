if (!self.define) {
  let e,
    i = {};
  const r = (r, n) => (
    (r = new URL(r + ".js", n).href),
    i[r] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = r), (e.onload = i), document.head.appendChild(e);
        } else (e = r), importScripts(r), i();
      }).then(() => {
        let e = i[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, s) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[o]) return;
    let f = {};
    const t = (e) => r(e, o),
      c = { module: { uri: o }, exports: f, require: t };
    i[o] = Promise.all(n.map((e) => c[e] || t(e))).then((e) => (s(...e), f));
  };
}
define(["./workbox-73aa35fd"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "favicon.ico", revision: "1ba2ae710d927f13d483fd5d1e548c9b" },
        { url: "index.html", revision: "880e70149692610762fd5613bfba170b" },
        { url: "manifest.json", revision: "e54fb76fe61f419f632bee1ae5080e3e" },
        {
          url: "res/144x144.png",
          revision: "f6ba714b91bc8f1a75a4e86919807043",
        },
        {
          url: "res/192x192.png",
          revision: "876b5efb3fe3d4f8810e7a0c9d653809",
        },
        {
          url: "res/512x512.png",
          revision: "99447bd8f9f7c6275c2d6f5b31e62869",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
