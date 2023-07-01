import { c as create_ssr_component, e as escape } from "./index2.js";
const H2_svelte_svelte_type_style_lang = "";
const css = {
  code: ".heading.svelte-1ob9usz{font-size:calc(2.5em + 1vw);font-family:'Cormorant Upright', serif;font-weight:600;color:#dcca87;text-align:center}@media(max-width: 768px){.heading.svelte-1ob9usz{font-size:calc(1.5em + 1vw)}}",
  map: null
};
const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css);
  return `<div class="heading svelte-1ob9usz">${escape(heading)}
</div>`;
});
export {
  H2 as H
};
