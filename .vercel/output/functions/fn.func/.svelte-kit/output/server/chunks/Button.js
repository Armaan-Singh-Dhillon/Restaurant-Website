import { c as create_ssr_component, e as escape } from "./index2.js";
/* empty css                                      */const css = {
  code: ".btn.svelte-kx8yj6{background-color:black;border:none;padding:0.8rem;font-family:'Cormorant Upright', serif;font-size:calc(0.2em + 1vw);cursor:pointer;color:white;z-index:2;position:relative;border-top:2px solid #dcca87;border-bottom:2px solid #dcca87}.btn.svelte-kx8yj6::before{content:'';position:absolute;background-color:#dcca87;z-index:-1;top:0;right:0;bottom:0;width:0;transition:all ease-in-out 0.5s}.btn.svelte-kx8yj6:hover::before{left:0;right:auto;width:100%}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `<div class="heading"><button class="btn svelte-kx8yj6">${escape(text)}</button>
</div>`;
});
export {
  Button as B
};
