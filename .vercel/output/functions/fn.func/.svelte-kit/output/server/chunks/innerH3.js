import { c as create_ssr_component, e as escape } from "./index2.js";
/* empty css                                       */const css = {
  code: ".heading.svelte-d7nsnd{font-family:'Noto Serif Georgian', serif;font-weight:300;color:#dcca87;font-size:calc(1em + 1vw)}",
  map: null
};
const InnerH3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css);
  return `<div class="heading svelte-d7nsnd">${escape(heading)}
</div>`;
});
export {
  InnerH3 as I
};
