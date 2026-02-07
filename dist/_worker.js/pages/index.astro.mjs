globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { e as createComponent, g as addAttribute, k as renderHead, l as renderComponent, r as renderTemplate, h as createAstro } from '../chunks/astro/server_DgE8dEt3.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_COJq3QI6.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_COJq3QI6.mjs';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

const Calendar = () => {
  const [date, setDate] = reactExports.useState(/* @__PURE__ */ new Date());
  const [status, setStatus] = reactExports.useState("");
  const handleBooking = async () => {
    setStatus("Booking...");
    try {
      const appointmentData = {
        userId: 1,
        serviceId: 1,
        startTime: new Date(date.getTime() - date.getTimezoneOffset() * 6e4).toISOString().slice(0, 19).replace("T", " "),
        endTime: new Date(date.getTime() - date.getTimezoneOffset() * 6e4 + 30 * 60 * 1e3).toISOString().slice(0, 19).replace("T", " ")
      };
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(appointmentData)
      });
      const result = await response.json();
      if (response.ok) {
        setStatus(`Success: ${result.message}`);
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Booking failed:", error);
      setStatus("Error: Could not connect to the server.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg max-w-md mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-center mb-4", children: "Book an Appointment" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "datetime-local",
          value: date.toISOString().substring(0, 16),
          onChange: (e) => setDate(new Date(e.target.value)),
          className: "p-2 border rounded mb-4"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleBooking,
          className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
          children: "Book Now"
        }
      ),
      status && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center", children: status })
    ] })
  ] });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Booking Platform</title>${renderHead()}</head> <body class="bg-gray-100"> <main class="container mx-auto p-8"> <h1 class="text-4xl font-bold text-center mb-8">
Schedule Your Appointment
</h1> ${renderComponent($$result, "Calendar", Calendar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/50240/Agendador/src/components/Calendar.jsx", "client:component-export": "default" })} </main> </body></html>`;
}, "C:/Users/50240/Agendador/src/pages/index.astro", void 0);

const $$file = "C:/Users/50240/Agendador/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
