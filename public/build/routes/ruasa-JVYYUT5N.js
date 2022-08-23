import {
  Link
} from "/build/_shared/chunk-R5U4NKPG.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-NTN7YPXJ.js";

// browser-route-module:/Users/vramirezurueta/Documents/REPOS_PER/ruasa_2022/app/routes/ruasa.tsx?browser
init_react();

// app/routes/ruasa.tsx
init_react();

// app/components/Navigation/Navigation.tsx
init_react();
var navLinks = [
  { title: "Home", url: "/" },
  { title: "Propiedades", url: "/properties" },
  { title: "Contacto", url: "/contact" }
];
function Navigation() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "nav-container"
  }, /* @__PURE__ */ React.createElement("div", null, "Ruasa Logo"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", {
    className: "nav-list"
  }, navLinks.map(({ title, url }) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: url
    }, /* @__PURE__ */ React.createElement(Link, {
      to: url
    }, title));
  }))));
}

// app/components/Search/Search.tsx
init_react();
function Search() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("input", null), /* @__PURE__ */ React.createElement("select", null, "Todas las Propiedaes"), /* @__PURE__ */ React.createElement("select", null, "Precio"));
}

// app/styles/ruasa.css
var ruasa_default = "/build/_assets/ruasa-CNBF3RVE.css";

// app/images/landing.jpeg
var landing_default = "/build/_assets/landing-AA3LTZZ5.jpeg";

// app/routes/ruasa.tsx
function links() {
  return [{ rel: "stylesheet", href: ruasa_default }];
}
function RUASA() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "landing"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "landing-img",
    src: landing_default,
    alt: "ruasa"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "welcome-message"
  }, "Encuentra la casa de tus sue\xF1os"), /* @__PURE__ */ React.createElement(Navigation, null), /* @__PURE__ */ React.createElement(Search, null)));
}
export {
  RUASA as default,
  links
};
//# sourceMappingURL=/build/routes/ruasa-JVYYUT5N.js.map
