import { c as create_ssr_component, e as escape, a as add_attribute } from "./index2.js";
/* empty css                                  */const spoon = "/_app/immutable/assets/spoon-svgrepo-com.113aa82e.svg";
const css$1 = {
  code: ".image-container.svelte-ut1a7h{width:30px}img.svelte-ut1a7h{width:100%;transform:rotate(90deg)}.heading.svelte-ut1a7h{font-size:calc(0.8em + 1vw);font-family:'Cormorant Upright', serif;font-weight:600;color:white;display:flex;flex-direction:column;align-items:left}",
  map: null
};
const H4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css$1);
  return `<div class="heading svelte-ut1a7h"><div class="title">${escape(heading)}</div>
    <div class="image-container svelte-ut1a7h"><img${add_attribute("src", spoon, 0)} alt="" class="svelte-ut1a7h"></div></div>`;
});
const P_svelte_svelte_type_style_lang = "";
const css = {
  code: ".paragraph.svelte-ddjo6w{color:#aaa;font-size:calc(0.6rem + 0.6vw);font-family:'Open Sans', sans-serif;margin:1rem 0}",
  map: null
};
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { paragraph = "" } = $$props;
  if ($$props.paragraph === void 0 && $$bindings.paragraph && paragraph !== void 0)
    $$bindings.paragraph(paragraph);
  $$result.css.add(css);
  return `<div class="paragraph svelte-ddjo6w">${escape(paragraph)}
</div>`;
});
export {
  H4 as H,
  P,
  spoon as s
};
