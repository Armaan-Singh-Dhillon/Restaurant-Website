import { c as create_ssr_component, e as escape } from "./index2.js";
/* empty css                                  */const css = {
  code: ".heading.svelte-1xdblgo{font-size:calc(1rem + 2.5vw);font-family:'Cormorant Upright', serif;font-weight:600;color:#dcca87;margin:2rem 0}",
  map: null
};
const H1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css);
  return `<div class="heading svelte-1xdblgo">${escape(heading)}
</div>`;
});
export {
  H1 as H
};
