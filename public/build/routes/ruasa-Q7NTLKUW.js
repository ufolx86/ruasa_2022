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

// app/components/Footer/Footer.tsx
init_react();
function Footer() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "footer-container"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Follow Us")));
}

// app/styles/ruasa.css
var ruasa_default = "/build/_assets/ruasa-M23SCCJN.css";

// app/images/landing.jpeg
var landing_default = "/build/_assets/landing-AA3LTZZ5.jpeg";

// app/images/house1.jpeg
var house1_default = "/build/_assets/house1-A4GZP6HS.jpeg";

// app/routes/ruasa.tsx
function links() {
  return [{ rel: "stylesheet", href: ruasa_default }];
}
function RUASA() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "landing-main"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "landing-img",
    src: landing_default,
    alt: "ruasa"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "welcome-message"
  }, "Encuentra la casa de tus sue\xF1os"), /* @__PURE__ */ React.createElement(Navigation, null), /* @__PURE__ */ React.createElement(Search, null)), /* @__PURE__ */ React.createElement("div", {
    className: "featured-properties"
  }, /* @__PURE__ */ React.createElement("h1", null, "Propiedades Destacadas"), /* @__PURE__ */ React.createElement("div", {
    className: "property"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "property-pic",
    src: house1_default,
    alt: "house1"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "property-description"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "property-title"
  }, "Titulo de la Propiedad"), /* @__PURE__ */ React.createElement("h4", {
    className: "property-price"
  }, "$4,400,000"), /* @__PURE__ */ React.createElement("hr", {
    className: "horizontal-divider"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "property-details"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "detail-info"
  }, "Beds"), /* @__PURE__ */ React.createElement("div", {
    className: "detail-info"
  }, "Baths"), /* @__PURE__ */ React.createElement("div", {
    className: "detail-info"
  }, "Size"))))), /* @__PURE__ */ React.createElement(Footer, null));
}
export {
  RUASA as default,
  links
};
//# sourceMappingURL=/build/routes/ruasa-Q7NTLKUW.js.map
