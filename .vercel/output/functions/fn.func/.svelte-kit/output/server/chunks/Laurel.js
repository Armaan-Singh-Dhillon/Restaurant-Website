import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute } from "./index2.js";
import { s as spoon, H as H4, P } from "./P.js";
import { nanoid } from "nanoid/non-secure";
import { H as H1 } from "./H1.js";
import { H as H3 } from "./H3.js";
Promise.resolve();
/* @__PURE__ */ new Set();
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const id = nanoid();
  let { value } = $$props;
  let { initial = 0 } = $$props;
  let { duration = 3e3 } = $$props;
  let { step = 1 } = $$props;
  let { roundto = 1 } = $$props;
  let { format = true } = $$props;
  function formatNumber(input) {
    if (format) {
      return Math.round(input).toLocaleString();
    }
    return input;
  }
  const counterResult = [];
  const max = parseInt(value);
  while (duration / ((max - initial) / step) < 2) {
    step++;
  }
  counterResult[id] = initial;
  setInterval(
    () => {
    },
    duration / ((max - initial) / step)
  );
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.initial === void 0 && $$bindings.initial && initial !== void 0)
    $$bindings.initial(initial);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.roundto === void 0 && $$bindings.roundto && roundto !== void 0)
    $$bindings.roundto(roundto);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  return `<span>${escape(formatNumber(counterResult[id]))}</span>`;
});
const CountersH4_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".image-container.svelte-g34m2h{width:30px}img.svelte-g34m2h{width:100%;transform:rotate(90deg)}.description.svelte-g34m2h{color:white;font-size:calc(0.2rem + 1vw)}.title.svelte-g34m2h{font-family:'Noto Serif Georgian', serif;color:#dcca87;font-size:calc(3.5em + 1vw);font-weight:400}.heading.svelte-g34m2h{display:flex;border-image:linear-gradient(#000, #fff, #000) 1;border-right:1px solid;border-left:1px solid;flex-direction:column;align-items:center}",
  map: null
};
const CountersH4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { description } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$2);
  return `<div class="heading svelte-g34m2h"><div class="title svelte-g34m2h">${validate_component(Component, "Countup").$$render($$result, { value }, {}, {})}+
	</div>

	<div class="image-container svelte-g34m2h"><img${add_attribute("src", spoon, 0)} alt="" class="svelte-g34m2h"></div>
	<div class="description svelte-g34m2h">${escape(description)}</div>
</div>`;
});
const HIstoryBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".history-bar.svelte-i79ntt{padding:8rem 0;display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));align-items:center;background-color:black}",
  map: null
};
const HIstoryBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="history-bar svelte-i79ntt">${validate_component(CountersH4, "CountersH4").$$render(
    $$result,
    {
      value: 30,
      description: "Breakfast Options"
    },
    {},
    {}
  )}
	${validate_component(CountersH4, "CountersH4").$$render($$result, { value: 50, description: "Dinner Options" }, {}, {})}
	${validate_component(CountersH4, "CountersH4").$$render(
    $$result,
    {
      value: 52,
      description: "Tables Available"
    },
    {},
    {}
  )}
	${validate_component(CountersH4, "CountersH4").$$render(
    $$result,
    {
      value: 20,
      description: "Years Of Experience"
    },
    {},
    {}
  )}
</div>`;
});
const aw1 = "/_app/immutable/assets/aw1.f698a33b.svg";
const aw2 = "/_app/immutable/assets/aw2.1b0221fc.svg";
const aw3 = "/_app/immutable/assets/aw3.5977070a.svg";
const aw4 = "/_app/immutable/assets/aw4.4ab46399.svg";
const pancakes = "/_app/immutable/assets/pexels-ash-376464.57799eda.jpg";
const W = "/_app/immutable/assets/W.f901abcf.svg";
const Laurel_svelte_svelte_type_style_lang = "";
const css = {
  code: ".badges.svelte-8x1tkf.svelte-8x1tkf{display:grid;grid-template-columns:1fr}.award.svelte-8x1tkf.svelte-8x1tkf{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));justify-content:center}.card.svelte-8x1tkf.svelte-8x1tkf{display:flex;flex-direction:column}.image-container.svelte-8x1tkf img.svelte-8x1tkf{object-fit:contain;width:80px;grid-column:1/-1}.image-container.svelte-8x1tkf.svelte-8x1tkf{position:relative}.img-section.svelte-8x1tkf.svelte-8x1tkf{display:grid;grid-template-columns:0.4fr 0.2fr 1fr;grid-template-rows:2.8fr 1.6fr}.main-img.svelte-8x1tkf.svelte-8x1tkf{width:100%;height:100%;object-fit:cover}.alphabet.svelte-8x1tkf.svelte-8x1tkf{z-index:1;grid-area:2/1/-1/3;width:100%;height:100%;object-fit:contain;opacity:0.8}.main-img.svelte-8x1tkf.svelte-8x1tkf{grid-area:1/2/3/-1}",
  map: null
};
const Laurel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="laurel"><div class="award svelte-8x1tkf"><div>${validate_component(H4, "H4").$$render($$result, { heading: "Awards & Recognition" }, {}, {})}
			${validate_component(H1, "H1").$$render($$result, { heading: "Our Laurels" }, {}, {})}
			<div class="badges svelte-8x1tkf"><div class="card svelte-8x1tkf"><div class="image-container svelte-8x1tkf"><img${add_attribute("src", aw1, 0)} alt="" class="svelte-8x1tkf"></div>
					<div class="paragraph">${validate_component(H3, "H3").$$render($$result, { heading: "Rising Star" }, {}, {})}
						${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: " We are thrilled to be recognized as a Rising Star in the culinary world. This prestigious award celebrates our dedication to innovation, creativity, and pushing the boundaries of gastronomy. Join us on a journey of culinary discovery as our talented team "
    },
    {},
    {}
  )}</div></div>
				<div class="card svelte-8x1tkf"><div class="image-container svelte-8x1tkf"><img${add_attribute("src", aw2, 0)} alt="" class="svelte-8x1tkf"></div>
					<div class="paragraph">${validate_component(H3, "H3").$$render($$result, { heading: "AA Hospitality" }, {}, {})}
						${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: "We are honored to have received the AA Hospitality award, a symbol of excellence in the industry. With meticulous attention to detail and a passion for delivering impeccable service, we strive to create unforgettable dining experiences for our guests. Visit us and savor the finest flavors, complemented by an ambiance that reflects our commitment to hospitality."
    },
    {},
    {}
  )}</div></div>
				<div class="card svelte-8x1tkf"><div class="image-container svelte-8x1tkf"><img${add_attribute("src", aw3, 0)} alt="" class="svelte-8x1tkf"></div>
					<div class="paragraph">${validate_component(H3, "H3").$$render($$result, { heading: "Outstanding Chef" }, {}, {})}
						${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: " Our chef has been recognized as an Outstanding Chef, an accolade that acknowledges their exceptional culinary skills and visionary approach to gastronomy. With their expertise and creativity, they craft extraordinary dishes that showcase the finest ingredients and innovative techniques. Join us for a dining experience curated by an extraordinary talent that will redefine your perception of food."
    },
    {},
    {}
  )}</div></div>
				<div class="card svelte-8x1tkf"><div class="image-container svelte-8x1tkf"><img${add_attribute("src", aw4, 0)} alt="" class="svelte-8x1tkf"></div>
					<div class="paragraph">${validate_component(H3, "H3").$$render($$result, { heading: "Bib Gourmond" }, {}, {})}
						${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: "Our restaurant is proud to have been awarded the prestigious Bib Gourmand recognition. This esteemed accolade is a testament to our commitment to providing exceptional dining experiences at an affordable price. Come and indulge in our culinary delights, where quality and value go hand in hand."
    },
    {},
    {}
  )}</div></div></div></div>
		<div class="img-section svelte-8x1tkf"><img${add_attribute("src", pancakes, 0)} class="main-img svelte-8x1tkf" alt="">

			<img${add_attribute("src", W, 0)} class="alphabet svelte-8x1tkf" alt=""></div></div>
</div>`;
});
export {
  HIstoryBar as H,
  Laurel as L
};
