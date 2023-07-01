import { c as create_ssr_component, v as validate_component, a as add_attribute, d as each, e as escape, n as null_to_empty } from "../../../../chunks/index2.js";
import { I as InnerH3 } from "../../../../chunks/innerH3.js";
import { I as InnerH1 } from "../../../../chunks/innerH1.js";
const back = "/_app/immutable/assets/01-min-scaled.720051a0.jpg";
const shake = "/_app/immutable/assets/shake.168538a6.jfif";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".para.svelte-1d54liv.svelte-1d54liv{margin:1rem 0;color:#aaa;font-size:calc(0.5em + 1vw);font-family:'Open Sans', sans-serif}.card-container.svelte-1d54liv.svelte-1d54liv{display:flex;flex-direction:column;justify-content:space-between;cursor:pointer}.card.svelte-1d54liv.svelte-1d54liv{padding:1rem}.show.svelte-1d54liv.svelte-1d54liv{background-color:#242424;border:1px solid #dcca87}.faq.svelte-1d54liv.svelte-1d54liv{background-color:black}.hero.svelte-1d54liv.svelte-1d54liv{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem;margin:6rem 0}.title.svelte-1d54liv.svelte-1d54liv{position:absolute;z-index:2;top:50%;left:50%;transform:translate(-50%, -50%)}.image-container.svelte-1d54liv.svelte-1d54liv{height:400px;position:relative}.image-container.svelte-1d54liv img.svelte-1d54liv{width:100%;height:100%;object-fit:cover;opacity:0.7}.hero.svelte-1d54liv img.svelte-1d54liv{width:100%;height:45vw;object-fit:cover}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [
    {
      question: "What are the restaurant's opening hours?",
      answer: "We are open from 12:00 PM to 10:00 PM, Monday to Sunday.",
      show: false
    },
    {
      question: "Do I need to make a reservation?",
      show: false,
      answer: "While walk-ins are welcome, we highly recommend making a reservation, especially during busy hours, to ensure a table is available for you."
    },
    {
      show: false,
      question: "Does the restaurant have vegetarian/vegan options?",
      answer: "Yes, we offer a variety of vegetarian and vegan dishes. Our menu is designed to cater to different dietary preferences and restrictions."
    },
    {
      show: false,
      question: "Is there a dress code?",
      answer: "We encourage smart casual attire. While formal attire is not mandatory, we appreciate guests dressing up to enhance the dining experience."
    },
    {
      show: false,
      question: "Can I bring my own wine?",
      answer: "We have an extensive wine selection available, and we kindly ask that you do not bring your own wine. Our sommelier will be happy to assist you in choosing the perfect wine to accompany your meal."
    }
  ];
  $$result.css.add(css);
  return `<div class="faq svelte-1d54liv"><div class="image-container svelte-1d54liv"><div class="title svelte-1d54liv">${validate_component(InnerH1, "InnerH1").$$render($$result, { heading: "FAQ" }, {}, {})}</div>
		<img${add_attribute("src", back, 0)} alt="" srcset="" class="svelte-1d54liv"></div>

	<div class="hero svelte-1d54liv"><div class="shake"><img${add_attribute("src", shake, 0)} alt="" srcset="" class="svelte-1d54liv"></div>
		

		<div class="card-container svelte-1d54liv">${each(data, (item, i) => {
    return `<div class="${escape(null_to_empty(`card ${item.show ? "show" : ""}`), true) + " svelte-1d54liv"}">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: item.question }, {}, {})}
					${item.show ? `<div class="para svelte-1d54liv">${escape(item.answer)}
						</div>` : ``}
				</div>`;
  })}</div></div>
</div>`;
});
export {
  Page as default
};
