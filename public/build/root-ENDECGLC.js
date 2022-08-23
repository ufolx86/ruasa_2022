import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-R5U4NKPG.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react
} from "/build/_shared/chunk-NTN7YPXJ.js";

// empty-module:./session.server
var require_session = __commonJS({
  "empty-module:./session.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Users/vramirezurueta/Documents/REPOS_PER/ruasa_2022/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-2BSCAUHM.css";

// app/root.tsx
var import_session = __toESM(require_session());
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "h-full"
  }, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-ENDECGLC.js.map
