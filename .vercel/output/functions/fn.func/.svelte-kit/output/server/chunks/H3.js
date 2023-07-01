import { c as create_ssr_component, e as escape } from "./index2.js";
/* empty css                                  */const css = {
  code: ".heading.svelte-14gph4l{font-size:calc(1em + 1vw);font-family:'Cormorant Upright', serif;font-weight:600;color:#fff}",
  map: null
};
const H3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css);
  return `<div class="heading svelte-14gph4l">${escape(heading)}</div>`;
});
export {
  H3 as H
};
