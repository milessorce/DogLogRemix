var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __objSpread = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// <stdin>
__markAsModule(exports);
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = import_server.default.renderToString(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: __objSpread(__objSpread({}, Object.fromEntries(responseHeaders)), {
      "Content-Type": "text/html"
    })
  });
}

// route-module:/Users/macbookpro/Desktop/Projects/DogLog Repos/doglog-remix-0.17/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  headers: () => headers,
  links: () => links3
});
var import_remix2 = __toModule(require("remix"));
var import_react_router_dom4 = __toModule(require("react-router-dom"));

// app/components/Article.tsx
var import_react = __toModule(require("react"));
function extractContent(str) {
  if (typeof window !== "undefined") {
    const span = document.createElement("span");
    span.innerHTML = str;
    return span.textContent || span.innerText;
  }
  return "";
}
var Article = (0, import_react.forwardRef)(({feed, post}, ref) => {
  return /* @__PURE__ */ React.createElement("article", {
    className: "article",
    ref
  }, /* @__PURE__ */ React.createElement("a", {
    className: "article__link",
    href: post.guid,
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "article__image",
    src: post.thumbnail,
    alt: "",
    loading: "lazy"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "article__heading",
    suppressHydrationWarning: true
  }, post.title)), /* @__PURE__ */ React.createElement("p", {
    className: "article__description skeleton",
    suppressHydrationWarning: true
  }, extractContent(post.description)), /* @__PURE__ */ React.createElement("div", {
    className: "article__medium-link"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "article__author",
    href: "https://appdoglog.medium.com/",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "article__author-logo",
    src: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto,w_28/DogLog/DogLogIcon.png",
    loading: "lazy",
    alt: "",
    width: "28"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "article__author-link"
  }, "DogLog Blog"))));
});

// app/components/Carousel.tsx
var import_react3 = __toModule(require("react"));

// app/context/env.tsx
var import_react2 = __toModule(require("react"));
var EnvContext = (0, import_react2.createContext)(null);

// app/components/Carousel.tsx
var import_react_responsive_carousel = __toModule(require("react-responsive-carousel"));
function Carousel({items, dynamicHeight}) {
  const env = (0, import_react3.useContext)(EnvContext);
  const isMobile = env == null ? void 0 : env.isMobile;
  const [activeIndex, setActiveIndex] = (0, import_react3.useState)(0);
  const carouselDotsRef = (0, import_react3.useRef)([]);
  const handleArrowClick = (0, import_react3.useCallback)((direction) => {
    const itemsLength = carouselDotsRef.current.length;
    let newActiveIndex;
    if (direction === "right") {
      newActiveIndex = activeIndex < itemsLength - 1 ? activeIndex + 1 : 0;
    } else {
      newActiveIndex = activeIndex > 0 ? activeIndex - 1 : itemsLength - 1;
    }
    const activeDotRef = carouselDotsRef.current[newActiveIndex];
    activeDotRef && activeDotRef.focus();
    setActiveIndex(newActiveIndex);
  }, [activeIndex, carouselDotsRef]);
  const handleDotClick = (event) => {
    setActiveIndex(Number(event.currentTarget.dataset.index));
  };
  const handleKeyUp = (0, import_react3.useCallback)((event) => {
    let direction;
    if ([38, 39].indexOf(event.keyCode) > -1) {
      direction = "right";
    } else if ([37, 40].indexOf(event.keyCode) > -1) {
      direction = "left";
    }
    direction && handleArrowClick(direction);
  }, [handleArrowClick]);
  const handleKeyDown = (event) => {
    [37, 38, 39, 40].indexOf(event.keyCode) > -1 && event.preventDefault();
  };
  const handleChange = (0, import_react3.useCallback)((index) => {
    index !== activeIndex && setActiveIndex(index);
  }, [activeIndex]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react_responsive_carousel.Carousel, {
    selectedItem: activeIndex,
    onChange: handleChange,
    emulateTouch: true,
    infiniteLoop: true,
    autoPlay: false,
    showArrows: false,
    showIndicators: false,
    showThumbs: false,
    showStatus: false,
    dynamicHeight,
    interval: 99999999
  }, items.map((item, i) => /* @__PURE__ */ React.createElement("div", {
    key: item.imageSrc || item.text
  }, item.imageSrc ? /* @__PURE__ */ React.createElement("img", {
    className: "screenshot",
    src: item.imageSrc,
    loading: "lazy"
  }) : null, item.text && /* @__PURE__ */ React.createElement("span", {
    className: "carousel-item-text",
    id: `slide-text-${i}`
  }, item.text, item.author && /* @__PURE__ */ React.createElement("span", {
    className: "carousel-item-text--author"
  }, "\u2014 ", item.author, " \u2014"))))), /* @__PURE__ */ React.createElement("div", {
    className: "carousel-dot-container"
  }, /* @__PURE__ */ React.createElement("button", {
    className: `carousel-dot-arrow carousel-dot-arrow--left left-arrow ${isMobile ? "carousel-dot-arrow--is-mobile" : ""}`,
    onClick: () => handleArrowClick("left"),
    "aria-label": "Previous slide",
    tabIndex: -1,
    suppressHydrationWarning: true
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-chevron-left left-arrow",
    "aria-hidden": "true"
  })), items.map((item, i) => /* @__PURE__ */ React.createElement("button", {
    className: `carousel-dot ${activeIndex === i ? "carousel-dot--active " : ""} ${isMobile ? "carousel-dot--is-mobile" : ""}`,
    tabIndex: activeIndex === i ? void 0 : -1,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    onClick: handleDotClick,
    ref: (el) => carouselDotsRef.current[i] = el,
    key: item.imageSrc || item.text,
    suppressHydrationWarning: true,
    "data-index": i,
    "aria-label": `Slide ${i + 1}`,
    "aria-describedby": `slide-text-${i}`
  })), /* @__PURE__ */ React.createElement("button", {
    className: `carousel-dot-arrow carousel-dot-arrow--right right-arrow ${isMobile ? "carousel-dot-arrow--is-mobile" : ""}`,
    onClick: () => handleArrowClick("right"),
    "aria-label": "Next slide",
    tabIndex: -1,
    suppressHydrationWarning: true
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-chevron-right right-arrow"
  }))));
}
var Carousel_default = Carousel;

// app/components/Features.tsx
var import_react5 = __toModule(require("react"));

// app/hooks/useOnScreen.ts
var import_react4 = __toModule(require("react"));
function useOnScreen(ref, useOnce = false) {
  if (typeof window !== "undefined") {
    const [isIntersecting, setIntersecting] = (0, import_react4.useState)(false);
    const observer = new IntersectionObserver(([entry2]) => {
      setIntersecting(entry2.isIntersecting);
      if (useOnce && entry2.isIntersecting) {
        observer.disconnect();
      }
    });
    (0, import_react4.useEffect)(() => {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, []);
    return isIntersecting;
  }
  return false;
}

// app/components/Features.tsx
function Features() {
  const sectionRef = (0, import_react5.useRef)(null);
  const sectionVisible = useOnScreen(sectionRef, true);
  return /* @__PURE__ */ React.createElement("section", {
    className: `section section--dark section--features ${sectionVisible ? "section--animated" : ""}`,
    id: "features",
    ref: sectionRef
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-container"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "section-header fadeIn"
  }, "Features"), /* @__PURE__ */ React.createElement("p", {
    className: "section-subheader fadeIn"
  }, "DogLog connects all aspects of your dog's life in one easy-to-use app."), /* @__PURE__ */ React.createElement("div", {
    className: "features-list-container"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "features-column features-column--left"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "features-column--list-item"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "features-heading"
  }, "Share everything"), /* @__PURE__ */ React.createElement("p", null, "Coordinate and track pet related activities with family members, dog walkers, and pet sitters.")), /* @__PURE__ */ React.createElement("li", {
    className: "features-column--list-item"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "features-heading"
  }, "Track what's relevant"), /* @__PURE__ */ React.createElement("p", null, "Create custom events to track what matters to you and your dog."))), /* @__PURE__ */ React.createElement("ul", {
    className: "features-column features-column--right"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "features-column--list-item"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "features-heading"
  }, "Never forget what's important"), /* @__PURE__ */ React.createElement("p", null, "Reminders help you remember your dog's chores, medicines, and appointments.")), /* @__PURE__ */ React.createElement("li", {
    className: "features-column--list-item"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "features-heading"
  }, "Understand trends"), /* @__PURE__ */ React.createElement("p", null, "Analyze your data to figure out trends and enforce a routine."))), /* @__PURE__ */ React.createElement("div", {
    className: "features-column features-column--screenshot"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "features-screenshot",
    src: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/features-screenshot.png",
    loading: "lazy",
    alt: "Features screenshot"
  })))));
}

// app/components/Features2.tsx
var import_react6 = __toModule(require("react"));
function MoreFeatures() {
  const sectionRef = (0, import_react6.useRef)(null);
  const sectionVisible = useOnScreen(sectionRef, true);
  return /* @__PURE__ */ React.createElement("section", {
    className: `section section--features-2 ${sectionVisible ? "section--animated" : ""}`,
    ref: sectionRef
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "more-features-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "more-features-column"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "section-header fadeIn"
  }, "Even More Features"), /* @__PURE__ */ React.createElement("p", {
    className: "section-subheader fadeIn"
  }, "Even more ways DogLog helps you care for happier, healthier pups."), /* @__PURE__ */ React.createElement("div", {
    className: "features-icon-list"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "features-icon-list-item fadeIn fadeIn--left"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "icon material-icons",
    "aria-hidden": "true"
  }, "photo_camera"), /* @__PURE__ */ React.createElement("h3", {
    className: "features-heading"
  }, "Save photos to your feed"), /* @__PURE__ */ React.createElement("p", null, "Photograph events and log your pet's life with photos.")), /* @__PURE__ */ React.createElement("div", {
    className: "features-icon-list-item fadeIn fadeIn--right"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "icon material-icons",
    "aria-hidden": "true"
  }, "thumb_up"), /* @__PURE__ */ React.createElement("h3", {
    className: "features-heading"
  }, "Like & Comment"), /* @__PURE__ */ React.createElement("p", null, "Keep in touch about all of your dog's activities in the Feed.")), /* @__PURE__ */ React.createElement("div", {
    className: "features-icon-list-item features-icon-list-item--connect fadeIn fadeIn--left"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "icon material-icons",
    "aria-hidden": "true"
  }, "people"), /* @__PURE__ */ React.createElement("h3", {
    className: "features-heading"
  }, "Connect all pet caretakers"), /* @__PURE__ */ React.createElement("p", null, "Invite family members, friends, vets, walkers, and sitters.")), /* @__PURE__ */ React.createElement("div", {
    className: "features-icon-list-item fadeIn fadeIn--right"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "icon icon--health material-icons",
    "aria-hidden": "true"
  }, "timeline"), /* @__PURE__ */ React.createElement("h3", {
    className: "features-heading"
  }, "Long-term health tracking"), /* @__PURE__ */ React.createElement("p", null, "Aggregate all health and behavioral records in one place.")), /* @__PURE__ */ React.createElement("div", {
    className: "features-icon-list-item features-icon-list-item--notifications fadeIn fadeIn--left"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "icon material-icons",
    "aria-hidden": "true"
  }, "notifications"), /* @__PURE__ */ React.createElement("h3", {
    className: "features-heading"
  }, "Event Notification"), /* @__PURE__ */ React.createElement("p", null, "Stay up to date on your pet's day.")), /* @__PURE__ */ React.createElement("div", {
    className: "features-icon-list-item features-icon-list-item--tracking fadeIn fadeIn--right"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/DogLogIconInverted.png",
    className: "icon icon--tracking",
    loading: "lazy",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "features-heading"
  }, "Multi-pet tracking"), /* @__PURE__ */ React.createElement("p", null, "Track each of your pets' information together in one Pack.")))), /* @__PURE__ */ React.createElement("div", {
    className: "more-features-screenshot-container fadeIn fadeIn--screenshot"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/features-screenshot-2.png",
    loading: "lazy",
    alt: "Features screenshot"
  })))));
}

// app/components/Footer.tsx
var import_react_router_dom = __toModule(require("react-router-dom"));
var links = [
  {
    path: "/#features",
    text: "Features"
  },
  {
    path: "/about-us",
    text: "About Us"
  },
  {
    path: "/blog",
    text: "Blog"
  },
  {
    path: "/media",
    text: "Media"
  }
];
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "section section--footer footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "download-buttons"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "app-icon app-icon--app-store",
    href: "https://itunes.apple.com/us/app/doglog-track-your-pets-life/id1229529595?mt=8",
    "aria-label": "Download DogLog on the Apple App Store"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto,w_208/DogLog/badgeappstore.png",
    "aria-hidden": "true",
    loading: "lazy",
    width: "208"
  })), /* @__PURE__ */ React.createElement("a", {
    className: "app-icon app-icon--android-store",
    href: "https://play.google.com/store/apps/details?id=com.mobikode.dog",
    "aria-label": "Download DogLog on the Google Play Store"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto,w_208/DogLog/badgegoogleplay.png",
    "aria-hidden": "true",
    loading: "lazy",
    width: "208"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "social-media-links"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.facebook.com/DogLogApp/",
    "aria-label": "DogLog Facebook"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fab fa-facebook-f"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.instagram.com/doglogapp/",
    "aria-label": "DogLog Instagram"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fab fa-instagram"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/company/doglog/",
    "aria-label": "DogLog LinkedIn"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fab fa-linkedin-in"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "mailto:support@doglogapp.com",
    "aria-label": "Email DogLog Support"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-envelope"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "footer__links"
  }, links.map((link) => /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: link.path,
    key: link.text
  }, link.text)), /* @__PURE__ */ React.createElement("a", {
    href: "mailto:support@doglogapp.com"
  }, "Contact Us")), /* @__PURE__ */ React.createElement("p", {
    className: "copyright"
  }, "Copyright \xA9 2021 DogLog, All rights reserved"));
}

// app/components/Hero.tsx
var import_react7 = __toModule(require("react"));
function Hero() {
  const isBrowser = typeof window !== "undefined";
  const [isScrollButtonVisible, setIsScrollButtonVisible] = (0, import_react7.useState)(true);
  const rootRef = (0, import_react7.useRef)(null);
  const containerRef = (0, import_react7.useRef)(null);
  const featuresSectionObserver = isBrowser ? (0, import_react7.useRef)(new IntersectionObserver(([entry2], observer) => {
    setIsScrollButtonVisible(!entry2.isIntersecting);
  }, {threshold: 0.2})) : (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
    var _a;
    const featuresSection = document.getElementById("features");
    featuresSection && ((_a = featuresSectionObserver.current) == null ? void 0 : _a.observe(featuresSection));
    return () => {
      var _a2;
      (_a2 = featuresSectionObserver.current) == null ? void 0 : _a2.disconnect();
    };
  }, []);
  (0, import_react7.useEffect)(() => {
    setTimeout(() => {
      rootRef.current.style.backgroundImage = `url(https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/header-image.jpg)`;
    }, 100);
  }, []);
  return /* @__PURE__ */ React.createElement("section", {
    id: "home",
    className: "hero-header parallax-container",
    ref: rootRef
  }, /* @__PURE__ */ React.createElement("div", {
    className: "linear-gradient-background"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header-container",
    ref: containerRef
  }, /* @__PURE__ */ React.createElement("img", {
    className: "header-image",
    src: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/DogLogIconLarge_White.png",
    alt: "DogLog"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "header-headline"
  }, "Track and coordinate your pet's activities and health"), /* @__PURE__ */ React.createElement("div", {
    className: "header-subcontainer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header-app-store-container"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "app-icon app-icon--app-store",
    href: "https://itunes.apple.com/us/app/doglog-track-your-pets-life/id1229529595?mt=8",
    "aria-label": "Get the app on the Apple App Store"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/badgeappstore.png",
    alt: ""
  })), /* @__PURE__ */ React.createElement("a", {
    className: "app-icon app-icon--android-store",
    href: "https://play.google.com/store/apps/details?id=com.mobikode.dog",
    "aria-label": "Get the app on the Google Play Store"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/badgegoogleplay.png",
    alt: ""
  }))))), /* @__PURE__ */ React.createElement("button", {
    className: `scroll-button ${!isScrollButtonVisible && "fadeOut"}`,
    onClick: () => window.scrollTo({top: window.innerHeight, left: 0, behavior: "smooth"}),
    "aria-label": "Scroll down to Features"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/dyrrwpemp/image/upload/fl_lossy,q_auto/DogLog/down-icon.png",
    alt: ""
  }))));
}

// app/components/NavBar.tsx
var import_react8 = __toModule(require("react"));
var import_react_router_dom2 = __toModule(require("react-router-dom"));

// app/utilties/debounce.ts
function debounce(func, waitMilliseconds = 50, options = {}) {
  var _a;
  let timeoutId;
  const isImmediate = (_a = options.isImmediate) != null ? _a : false;
  const maxWait = options.maxWait;
  let lastInvokeTime = Date.now();
  function nextInvokeTimeout() {
    if (maxWait !== void 0) {
      const timeSinceLastInvocation = Date.now() - lastInvokeTime;
      if (timeSinceLastInvocation + waitMilliseconds >= maxWait) {
        return maxWait - timeSinceLastInvocation;
      }
    }
    return waitMilliseconds;
  }
  const debouncedFunction = function(...args) {
    const context = this;
    const invokeFunction = function() {
      timeoutId = void 0;
      lastInvokeTime = Date.now();
      if (!isImmediate) {
        func.apply(context, args);
      }
    };
    const shouldCallNow = isImmediate && timeoutId === void 0;
    if (timeoutId !== void 0) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(invokeFunction, nextInvokeTimeout());
    if (shouldCallNow) {
      func.apply(context, args);
    }
  };
  debouncedFunction.cancel = function() {
    if (timeoutId !== void 0) {
      clearTimeout(timeoutId);
    }
  };
  return debouncedFunction;
}

// app/components/NavBar.tsx
var links2 = [
  {path: "/#features", text: "FEATURES"},
  {path: "/about-us", text: "ABOUT US"},
  {path: "/blog", text: "BLOG"},
  {path: "/media", text: "MEDIA"}
];
function NavBar() {
  const isBrowser = typeof window !== "undefined";
  const location = (0, import_react_router_dom2.useLocation)();
  const rootRef = (0, import_react8.useRef)(null);
  const [open, setOpen] = (0, import_react8.useState)(false);
  const [isDropdown, setIsDropdown] = (0, import_react8.useState)(false);
  const [isVisible, setIsVisible] = (0, import_react8.useState)(location.pathname !== "/");
  const navbarObserver = isBrowser ? (0, import_react8.useRef)(new IntersectionObserver((entries, observer) => {
    setIsVisible(!entries[0].isIntersecting);
  }, {threshold: 0.75})) : (0, import_react8.useRef)(null);
  (0, import_react8.useEffect)(() => {
    if (navbarObserver.current && location.pathname === "/") {
      const heroHeader = document.querySelector(".hero-header");
      heroHeader && navbarObserver.current.observe(heroHeader);
    }
    setOpen(false);
    return () => {
      var _a;
      (_a = navbarObserver.current) == null ? void 0 : _a.disconnect();
    };
  }, [location]);
  (0, import_react8.useEffect)(() => {
    rootRef.current.style.transition = "all 1.5s ease";
    const debouncedResizeHandler = debounce(() => {
      setIsDropdown(window.innerWidth <= 768);
    }, 250);
    setIsDropdown(window.innerWidth <= 768);
    window.addEventListener("resize", debouncedResizeHandler);
    return () => {
      window.removeEventListener("resize", debouncedResizeHandler);
    };
  }, []);
  const handleLogoClick = () => {
    scrollTo(0, 0);
    setOpen(false);
    setIsVisible(false);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: `navbar navbar--${isVisible ? "visible" : "hidden"}`,
    ref: rootRef
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-content-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: `top-drawer ${open ? "top-drawer--open" : ""}`
  }, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    className: "navbar-logo-anchor",
    to: location.pathname === "/" ? "" : "/",
    onClick: handleLogoClick,
    "aria-label": "Home"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "navbar-logo",
    src: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/DogLogIcon_Red.png",
    loading: "lazy",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "navbar-toggle",
    onClick: () => setOpen(!open)
  }, Array(3).fill(null).map((el, i) => /* @__PURE__ */ React.createElement("span", {
    key: `toggle-icon-bar-${i}`,
    className: "toggle-icon-bar"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: `links ${open ? "links--visible" : ""} ${isDropdown ? "links--dropdown" : ""}`
  }, links2.map((link) => /* @__PURE__ */ React.createElement(import_react_router_dom2.NavLink, {
    to: link.path,
    onClick: () => setOpen(false),
    key: link.text,
    "aria-current": "page",
    end: true
  }, link.text)))));
}

// app/components/Quotes.tsx
var import_react9 = __toModule(require("react"));
var quotes = [
  {
    text: `I use this daily to record our dog's activities, very useful when there's more than one caregiver! Custom events are great. Tried other apps and this was the best one.`,
    author: "Martin P."
  },
  {
    text: `I really love this app! It allows me to keep up with my pup and her sensitive stomach. I can log all of her feedings, bathroom breaks, weight, and even customize some tasks. It is a must have!`,
    author: "Heather M."
  },
  {
    text: `DogLog is essential to not feeding the dog twice when there is more than one person caring for a dog; to know when the last time he got his meds; track his weight to determine if he's being overfed; etc. And the fact that all entries are kept "in the cloud" means your app is automatically updated whenever anyone makes an entry. And you can program reminders so that infrequent tasks are not completely forgotten. I highly recommend DogLog.`,
    author: "John B."
  },
  {
    text: `Tracking my 11-week old puppy for the past 2 weeks has been extremely helpful. I can see patterns in what times he eats, when we go outside, when he's most likely to have an accident.`,
    author: "Mel A."
  },
  {
    text: `This app is essential for tracking our pup's day. My wife and I are able to keep her bathroom activities straight so we know whether she's acting out because she might have to go to the bathroom or she's just being mischievous! When she ate something that caused her to be sick, we were able to show the vet just how many bowel movements she had in the last 48 hours. We love being able to check the reports and statistics too! All around, the experience using this app has been great!`,
    author: "Zan P."
  },
  {
    text: `It\u2019s worked great to keep track of the intake and \u201Couttake\u201D of our senior dog. It\u2019s also great for keeping track of monthly tick treatments and exercise too. That way we have a central location to check if the dog has been walked in our busy household.`,
    author: "Penny M."
  }
];
function Quotes() {
  const sectionRef = (0, import_react9.useRef)(null);
  const sectionVisible = useOnScreen(sectionRef, true);
  return /* @__PURE__ */ React.createElement("section", {
    className: `section section--quotes ${sectionVisible ? "section--animated" : ""}`,
    ref: sectionRef
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-container"
  }, /* @__PURE__ */ React.createElement(Carousel_default, {
    items: quotes,
    dynamicHeight: true
  })));
}

// app/components/Screenshots.tsx
var import_react10 = __toModule(require("react"));
var screenshots = [
  {imageSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/screen__photos.png"},
  {imageSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/screen__log-events.png"},
  {imageSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/screen__reminders.png"},
  {imageSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/screen__chart.png"}
];
function Screenshots() {
  const sectionRef = (0, import_react10.useRef)(null);
  const sectionVisible = useOnScreen(sectionRef, true);
  const [breakpoint, setBreakpoint] = (0, import_react10.useState)("small");
  (0, import_react10.useEffect)(() => {
    let breakpoint2 = "small";
    if (window.innerWidth > 767) {
      breakpoint2 = "large";
    }
    setBreakpoint(breakpoint2);
  }, []);
  return /* @__PURE__ */ React.createElement("section", {
    className: `section section--dark section--screenshots ${sectionVisible ? "section--animated" : ""}`,
    ref: sectionRef
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-container section-container--screenshots"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "section-header fadeIn"
  }, "Screenshots"), /* @__PURE__ */ React.createElement("p", {
    className: "section-subheader fadeIn"
  }, "DogLog's easy-to-use interface allows you to better track, understand, and communicate everything related to your pets."), breakpoint === "small" ? /* @__PURE__ */ React.createElement(Carousel_default, {
    items: screenshots
  }) : /* @__PURE__ */ React.createElement(BasicScreenshots, null)));
}
function BasicScreenshots() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "screenshot-container"
  }, screenshots.map((image, i) => /* @__PURE__ */ React.createElement("img", {
    className: `screenshot fadeIn fadeIn--${i < 2 ? "left" : "right"}`,
    src: image.imageSrc,
    key: image.imageSrc,
    alt: ""
  })));
}

// app/components/ScrollToTop.ts
var import_react11 = __toModule(require("react"));
var import_react_router_dom3 = __toModule(require("react-router-dom"));
function ScrollToTop() {
  const {pathname} = (0, import_react_router_dom3.useLocation)();
  (0, import_react11.useEffect)(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// app/styles/global.css
var global_default = "/build/_assets/global-F4YKCWBE.css";

// route-module:/Users/macbookpro/Desktop/Projects/DogLog Repos/doglog-remix-0.17/app/root.tsx
var links3 = () => {
  return [{rel: "stylesheet", href: global_default}];
};
function headers() {
  return {
    "Cache-Control": "max-age=604800, public"
  };
}
function Document({children}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "keywords",
    content: "dog, dogs, pet, pets, app, application, petcare, mobile, track, tracking, tracker, activities, blog, doglog, log, doge, fetch, rover, walk, walking, walker, pee, poop, vet, happy, healthy, safe, pup, puppy, schedule, simple, reminder, reminders, treat, treats, medicine, meal"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:title",
    content: "DogLog: Track and coordinate your pet's activities and health"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:description",
    content: "Organize your pet's life and be the best dog owner you can be. Track medicine, walks, puppy training, and more while sharing photos and reminders for your pets. Share records with family members and vets. Great for puppies and senior dogs."
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "https://res.cloudinary.com/dyrrwpemp/image/upload/v1626810769/DogLog/favicon.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "true"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap",
    type: "text/css"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
    integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
    crossOrigin: "anonymous"
  }), /* @__PURE__ */ React.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-863XK73Y70"
  }), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-863XK73Y70');`
    }
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement("div", {
    id: "modal-root"
  }), /* @__PURE__ */ React.createElement(ScrollToTop, null), /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement(import_react_router_dom4.Outlet, null), /* @__PURE__ */ React.createElement(Footer, null), /* @__PURE__ */ React.createElement("div", {
    id: "modal-backdrop-root"
  }));
}
function ErrorBoundary({error}) {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement("div", {
    className: "error-boundary"
  }, /* @__PURE__ */ React.createElement("h1", null, "Application Error"), /* @__PURE__ */ React.createElement("pre", null, error.message, " ")));
}

// route-module:/Users/macbookpro/Desktop/Projects/DogLog Repos/doglog-remix-0.17/app/routes/404.tsx
var __exports = {};
__export(__exports, {
  default: () => FourOhFour,
  links: () => links4,
  loader: () => loader,
  meta: () => meta
});
var import_remix3 = __toModule(require("remix"));

// app/styles/routes/404.css
var __default = "/build/_assets/404-GC7DS6ES.css";

// route-module:/Users/macbookpro/Desktop/Projects/DogLog Repos/doglog-remix-0.17/app/routes/404.tsx
var meta = () => {
  return {
    title: `DogLog - 404`,
    description: `There's nothing here!`
  };
};
var links4 = () => {
  return [{rel: "stylesheet", href: __default}];
};
var loader = () => {
  return (0, import_remix3.json)({notFound: true}, {status: 404});
};
function FourOhFour() {
  const data = (0, import_remix3.useRouteData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "error-heading"
  }, "404"), /* @__PURE__ */ React.createElement("p", {
    className: "error-message"
  }, "Oops! The page you are looking for doesn't exist."));
}

// route-module:/Users/macbookpro/Desktop/Projects/DogLog Repos/doglog-remix-0.17/app/routes/about-us.tsx
var about_us_exports = {};
__export(about_us_exports, {
  default: () => AboutUs,
  headers: () => headers2,
  links: () => links5,
  meta: () => meta2
});

// app/styles/routes/about-us.css
var about_us_default = "/build/_assets/about-us-E2SYTVRB.css";

// route-module:/Users/macbookpro/Desktop/Projects/DogLog Repos/doglog-remix-0.17/app/routes/about-us.tsx
var links5 = () => {
  return [
    {rel: "stylesheet", href: about_us_default},
    {rel: "canonical", href: "https://www.doglogapp.com/about-us"}
  ];
};
var meta2 = () => {
  return {
    title: "DogLog - About Us",
    description: "Read about the DogLog family"
  };
};
function headers2() {
  return {
    "cache-control": "max-age=15552000, public"
  };
}
var members = [
  {
    name: "Lynn",
    title: "Co-Founder & President",
    smallPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_240/DogLog/lynn.jpg",
    mediumPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_256/DogLog/lynn.jpg",
    largePhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_288/DogLog/lynn.jpg",
    linkedInUrl: "https://www.linkedin.com/in/lynnmarks1/"
  },
  {
    name: "Gideon",
    title: "Co-Founder & Advisor",
    smallPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_240/DogLog/gideon.jpg",
    mediumPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_256/DogLog/gideon.jpg",
    largePhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_288/DogLog/gideon.jpg",
    linkedInUrl: "https://www.linkedin.com/in/gideonmarks/"
  },
  {
    name: "Ron",
    title: "Co-Founder",
    smallPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_240/DogLog/ron.jpg",
    mediumPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_256/DogLog/ron.jpg",
    largePhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_288/DogLog/ron.jpg",
    linkedInUrl: "https://www.linkedin.com/in/ron-marks-50023b76/"
  },
  {
    name: "Miles",
    title: "Developer & Advisor",
    smallPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_240/DogLog/miles.jpg",
    mediumPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_256/DogLog/miles.jpg",
    largePhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_288/DogLog/miles.jpg",
    linkedInUrl: "https://www.linkedin.com/in/milessorce/"
  },
  {
    name: "Liat",
    title: "Head of Business Development",
    smallPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_240/DogLog/liat.jpg",
    mediumPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_256/DogLog/liat.jpg",
    largePhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_288/DogLog/liat.jpg",
    linkedInUrl: "https://www.linkedin.com/in/liat-marks-8b9586194/"
  },
  {
    name: "Emily",
    title: "UI/UX Designer",
    smallPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_240/DogLog/emily.jpg",
    mediumPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_256/DogLog/emily.jpg",
    largePhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_288/DogLog/emily.jpg",
    linkedInUrl: "https://www.linkedin.com/in/emily-garverick"
  },
  {
    name: "Joy",
    title: "Chief Cuddles Officer",
    smallPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_240/DogLog/joy.jpg",
    mediumPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_256/DogLog/joy.jpg",
    largePhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_288/DogLog/joy.jpg"
  },
  {
    name: "Cali",
    title: "Chief Fluff Officer",
    smallPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_240/DogLog/cali.jpg",
    mediumPhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_256/DogLog/cali.jpg",
    largePhotoSrc: "https://res.cloudinary.com/dyrrwpemp/image/upload/w_288/DogLog/cali.jpg"
  }
];
function AboutUs() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "about-us",
    className: "about-us"
  }, /* @__PURE__ */ React.createElement("section", {
    id: "our-family",
    className: "section section--animated section--our-family"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-container section-container--our-family"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "section-header fadeIn"
  }, "Our Pack"), /* @__PURE__ */ React.createElement("div", {
    className: "headshots-container fadeIn"
  }, members.map((member) => /* @__PURE__ */ React.createElement(Tile, __objSpread(__objSpread({}, member), {
    key: member.name
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "section-container section-container--our-story"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "section-header fadeIn"
  }, "Our Story"), /* @__PURE__ */ React.createElement("div", {
    className: "our-story-image-container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/lynn-cali.jpg",
    loading: "lazy",
    alt: "Founder Lynn Marks and her dog Cali"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "our-story-container"
  }, /* @__PURE__ */ React.createElement("p", null, "DogLog was inspired by our family\u2019s life in San Francisco. We needed a system to coordinate caring for our dog, Joy. We wanted to ensure that she never went too long without being taken outside, or suceeded in tricking us into giving her double feedings. We needed an easier way to verify what Joy had and hadn\u2019t done yet. After attempting to keep a log with sticky notes and texts, we developed DogLog to keep all dog-related information in one centralized place that was accessible by all family members. Now, we use DogLog to track Cali's (our puppy) health, feedings, and walks."), /* @__PURE__ */ React.createElement("h3", {
    className: "go-fund-me"
  }, "Help us improve DogLog"), /* @__PURE__ */ React.createElement("p", null, "DogLog has been entirely self-funded by our dog-loving family. We offer DogLog as a free service because we want to help pet owners everywhere provide the best possible care for their pets. You can help us build new features, grow the DogLog community, and make it easier to care for your pets by making a contribution today."), /* @__PURE__ */ React.createElement("a", {
    className: "go-fund-me-link go-fund-me-button",
    href: "https://www.gofundme.com/f/doglogapp",
    "aria-label": "Contribute to DogLog's GoFundMe"
  }, "Contribute")))));
}
function Tile({name, title, smallPhotoSrc, mediumPhotoSrc, largePhotoSrc, linkedInUrl}) {
  const content = [
    /* @__PURE__ */ React.createElement("picture", {
      key: smallPhotoSrc
    }, /* @__PURE__ */ React.createElement("source", {
      srcSet: largePhotoSrc,
      media: "(max-width: 631px)"
    }), /* @__PURE__ */ React.createElement("source", {
      srcSet: mediumPhotoSrc,
      media: "(max-width: 992px)"
    }), /* @__PURE__ */ React.createElement("img", {
      src: smallPhotoSrc,
      alt: ""
    })),
    /* @__PURE__ */ React.createElement("p", {
      className: "name",
      key: name
    }, name),
    /* @__PURE__ */ React.createElement("p", {
      className: "title",
      key: title
    }, title)
  ];
  return linkedInUrl ? /* @__PURE__ */ React.createElement("a", {
    className: "headshot-container",
    href: linkedInUrl,
    target: "_blank",
    rel: "noopener"
  }, content) : /* @__PURE__ */ React.createElement("div", {
    className: "headshot-container"
  }, content);
}

// route-module:/Users/macbookpro/Desktop/Projects/DogLog Repos/doglog-remix-0.17/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  headers: () => headers3,
  links: () => links6,
  loader: () => loader2,
  meta: () => meta3
});
var import_react12 = __toModule(require("react"));
var import_remix4 = __toModule(require("remix"));

// app/styles/routes/blog.css
var blog_default = "/build/_assets/blog-2PUFGIYO.css";

// route-module:/Users/macbookpro/Desktop/Projects/DogLog Repos/doglog-remix-0.17/app/routes/blog.tsx
var links6 = () => {
  return [
    {rel: "stylesheet", href: blog_default},
    {rel: "canonical", href: "https://www.doglogapp.com/blog"}
  ];
};
function headers3() {
  return {
    "Cache-Control": "max-age=84600, public"
  };
}
var meta3 = () => {
  return {
    title: "DogLog - Blog",
    description: "Stories by DogLog App on Medium"
  };
};
var loader2 = async () => {
  const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@AppDogLog");
  const json2 = await res.json();
  return json2;
};
function Blog() {
  const isBrowser = typeof window !== "undefined";
  const {feed, items} = (0, import_remix4.useRouteData)();
  const [page, setPage] = (0, import_react12.useState)(1);
  const lastPageIndex = items.length % 3 ? 3 * page - items.length % 3 : 3 * page - 1;
  const articleRef = (0, import_react12.useRef)(null);
  const articleObserver = isBrowser ? (0, import_react12.useRef)(new IntersectionObserver(([entry2], observer) => {
    if (entry2.isIntersecting) {
      articleRef.current && observer.unobserve(articleRef.current);
      setPage((page2) => page2 + 1);
    }
  }, {threshold: 0.6})) : (0, import_react12.useRef)(null);
  (0, import_react12.useEffect)(() => {
    if (articleObserver.current && articleRef.current) {
      articleObserver.current.observe(articleRef.current);
    }
    return () => {
      var _a;
      (_a = articleObserver.current) == null ? void 0 : _a.disconnect();
    };
  }, [articleRef.current]);
  return /* @__PURE__ */ React.createElement("section", {
    className: "section section--blog"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-container section-container--blog"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "section-header"
  }, "DogLog Blog"), items.slice(0, page * 3).map((item, index) => /* @__PURE__ */ React.createElement(Article, {
    key: item.guid,
    feed,
    post: item,
    ref: index === lastPageIndex ? articleRef : null
  }))));
}

// route-module:/Users/macbookpro/Desktop/Projects/DogLog Repos/doglog-remix-0.17/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  headers: () => headers4,
  links: () => links7,
  meta: () => meta4
});
var import_react_router_dom5 = __toModule(require("react-router-dom"));

// app/hooks/useEnvDetection.ts
var import_react13 = __toModule(require("react"));

// app/utilties/detectMobile.ts
function detectMobile() {
  try {
    return window.orientation !== void 0 || navigator.userAgent.indexOf("IEMobile") !== -1;
  } catch (e) {
    return false;
  }
}

// app/hooks/useEnvDetection.ts
function useEnvDetection(navigator2) {
  return (0, import_react13.useMemo)(() => {
    if (navigator2) {
      let browser = "";
      if (navigator2.userAgent.includes("Chrome")) {
        browser = "chrome";
      } else if (navigator2.userAgent.includes("Safari")) {
        browser = "safari";
      } else if (navigator2.userAgent.includes("Firefox")) {
        browser = "firefox";
      }
      return {
        browser,
        isIpad: !!navigator2.userAgent.match(/iPad/gi),
        isMobile: detectMobile(),
        isBrowser: true
      };
    }
    return {
      browser: "chrome",
      isIpad: false,
      isMobile: false,
      isBrowser: false
    };
  }, [navigator2]);
}

// app/styles/routes/index.css
var routes_default = "/build/_assets/index-5P53R5A7.css";

// route-module:/Users/macbookpro/Desktop/Projects/DogLog Repos/doglog-remix-0.17/app/routes/index.tsx
var import_react14 = __toModule(require("react"));
var links7 = () => {
  return [
    {rel: "preconnect", href: "https://res.cloudinary.com/"},
    {rel: "stylesheet", href: routes_default},
    {rel: "stylesheet", href: "https://unpkg.com/react-responsive-carousel@3.2.19/lib/styles/carousel.min.css"},
    {rel: "preload", href: "https://res.cloudinary.com/dyrrwpemp/image/upload/e_blur:100/v1636252090/DogLog/header-image-small.jpg", as: "image"},
    {rel: "preload", href: "https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/header-image.jpg", as: "image"},
    {rel: "canonical", href: "https://www.doglogapp.com/"}
  ];
};
function headers4() {
  return {
    "Cache-Control": "max-age=2592000, public"
  };
}
var meta4 = () => {
  return {
    title: `DogLog - Track and coordinate your pet's activities and health`,
    description: `Track your pet's health and wellbeing. Coordinate pet-related tasks. Organize your pet's life and be the best pet owner you can be.`
  };
};
function Index() {
  const env = useEnvDetection(typeof navigator === "undefined" ? null : navigator);
  const {pathname, hash} = (0, import_react_router_dom5.useLocation)();
  (0, import_react14.useEffect)(() => {
    if (pathname === "/" && hash === "#features") {
      const features = document.getElementById("features");
      features && features.scrollIntoView({behavior: "smooth"});
    }
  }, [pathname, hash]);
  return /* @__PURE__ */ React.createElement(EnvContext.Provider, {
    value: env
  }, /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(Features, null), /* @__PURE__ */ React.createElement(MoreFeatures, null), /* @__PURE__ */ React.createElement(Screenshots, null), /* @__PURE__ */ React.createElement(Quotes, null));
}

// route-module:/Users/macbookpro/Desktop/Projects/DogLog Repos/doglog-remix-0.17/app/routes/media.tsx
var media_exports = {};
__export(media_exports, {
  default: () => Media,
  headers: () => headers5,
  links: () => links8,
  meta: () => meta5
});

// app/styles/routes/media.css
var media_default = "/build/_assets/media-3EUQ5VV6.css";

// route-module:/Users/macbookpro/Desktop/Projects/DogLog Repos/doglog-remix-0.17/app/routes/media.tsx
var links8 = () => {
  return [
    {rel: "stylesheet", href: media_default},
    {rel: "canonical", href: "https://www.doglogapp.com/media"}
  ];
};
function headers5() {
  return {
    "Cache-Control": "max-age=84600, public"
  };
}
var meta5 = () => {
  return {
    title: "DogLog - Media",
    description: "DogLog in the media"
  };
};
var articles = [
  {
    imageSrc: "https://appoftheday.downloadastro.com/wp-content/themes/appoftheday/assets/img/logo-01.png",
    articleUrl: "https://appoftheday.downloadastro.com/app/doglog-track-your-pets-life/",
    title: "Interview with App of the Day",
    date: "November 2021"
  },
  {
    imageSrc: "https://www.doobert.com/wp-content/themes/wt_metro_child/img/logo-doobert.svg",
    articleUrl: "https://www.doobert.com/doglog-app-lynn-marks-gideon-marks/",
    title: "DogLog on the Animal Innovations Show Podcast",
    date: "August 2021"
  },
  {
    imageSrc: "https://static.wixstatic.com/media/fa7e92_9650e9722b274a41b367ce39eed506b3~mv2.png/v1/fill/w_200,h_156,al_c,q_85,usm_0.66_1.00_0.01/MellaLogo-01.webp",
    articleUrl: "https://www.mella.ai/podcast/episode/22f8161e/21-how-can-you-track-your-pets-activities-lynn-and-gideon-marks",
    title: "DogLog on the Mella Podcast",
    date: "March 2021"
  },
  {
    imageSrc: "https://fox40.com/wp-content/uploads/sites/13/2021/05/FOX40_Logo_Horizontal_GENERIC_Color.png",
    articleUrl: "https://fox40.com/news/local-news/local-siblings-create-app-to-help-busy-dog-owners-keep-track-of-their-pets-schedules/",
    title: "Local Siblings Create App to Help Busy Dog Owners Keep Track of Their Pet\u2019s Schedules",
    date: "November 2018"
  },
  {
    imageSrc: "https://bloximages.newyork1.vip.townnews.com/losaltosonline.com/content/tncms/custom/image/37c9728a-8666-11eb-8535-570adb2075d9.png?resize=1200%2C187",
    articleUrl: "https://www.losaltosonline.com/business/local-siblings-create-pet-tracker-app-inspired-by-their-own-dog/article_ee743a9f-2744-503d-99fe-941cf63a64ff.html",
    title: "Local siblings create pet tracker app inspired by their own dog",
    date: "August 2018"
  }
];
function Article2({imageSrc, articleUrl, title, date}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "article"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "article__link",
    href: articleUrl,
    target: "_blank"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "article__image",
    src: imageSrc,
    alt: title
  }), /* @__PURE__ */ React.createElement("div", {
    className: "article__content-container"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "article__date"
  }, date), /* @__PURE__ */ React.createElement("h2", {
    className: "article__title"
  }, title)));
}
function Media() {
  const isBrowser = typeof window !== "undefined";
  return /* @__PURE__ */ React.createElement("section", {
    className: "section section--media"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-container section-container--media"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "section-header"
  }, "Media"), /* @__PURE__ */ React.createElement("div", {
    className: "media__articles"
  }, articles.map((article) => /* @__PURE__ */ React.createElement(Article2, __objSpread(__objSpread({}, article), {
    key: article.articleUrl
  }))))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = {module: entry_server_exports};
var routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "/",
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "*",
    caseSensitive: false,
    module: __exports
  },
  "routes/about-us": {
    id: "routes/about-us",
    parentId: "root",
    path: "about-us",
    caseSensitive: false,
    module: about_us_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    caseSensitive: false,
    module: blog_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "/",
    caseSensitive: false,
    module: routes_exports
  },
  "routes/media": {
    id: "routes/media",
    parentId: "root",
    path: "media",
    caseSensitive: false,
    module: media_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
