import { c as create_ssr_component, e as escape } from "./index2.js";
/* empty css                                       */const css = {
  code: ".heading.svelte-1cp9ppt{font-family:'Noto Serif Georgian', serif;font-weight:300;color:white;font-size:calc(1.5em + 1.5vw)}",
  map: null
};
const InnerH1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css);
  return `<div class="heading svelte-1cp9ppt">${escape(heading)}
</div>`;
});
export {
  InnerH1 as I
};
