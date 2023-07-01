import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute } from "../../chunks/index2.js";
import { H as HIstoryBar, L as Laurel } from "../../chunks/Laurel.js";
import { B as Backeffectmenu, M as Menu } from "../../chunks/MenuSlider.svelte_svelte_type_style_lang.js";
import { H as H4, P } from "../../chunks/P.js";
import { B as Button } from "../../chunks/Button.js";
import { C as Carousel } from "../../chunks/Carousel.js";
import { H as H1 } from "../../chunks/H1.js";
/* empty css                                                 */import { H as H3 } from "../../chunks/H3.js";
import { s as scissor } from "../../chunks/scissors.js";
import "siema";
/* empty css                                                   */const HeadingMain_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".heading.svelte-z8nh00{font-size:calc(6em + 1vw);font-family:'Cormorant Upright', serif;font-weight:600;color:#dcca87;margin:2rem 0;animation-duration:3s;animation-name:slidein}",
  map: null
};
const HeadingMain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css$2);
  return `<div class="heading svelte-z8nh00">${escape(heading)}
</div>`;
});
const cusine1 = "/_app/immutable/assets/cusine1.b12976d9.jpg";
const cusine2 = "/_app/immutable/assets/cusine2.ef7d4db4.jpg";
const cusine3 = "/_app/immutable/assets/cusine3.c1ccad62.jpg";
const cusine4 = "/_app/immutable/assets/pancakes.6534f6c6.jpg";
const arrow = "/_app/immutable/assets/chevron-right-svgrepo-com.9e399b46.svg";
const Hero_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".carousel-container.svelte-1ga2d1g.svelte-1ga2d1g{height:750px}.left.svelte-1ga2d1g.svelte-1ga2d1g{transform:rotate(180deg)}.arrow.svelte-1ga2d1g.svelte-1ga2d1g{background:none;color:white;border:none;width:45px;height:45px;padding:12px;display:inline-block;position:relative}.arrow.svelte-1ga2d1g.svelte-1ga2d1g::before{content:'';position:absolute;background-color:#dcca87;z-index:-1;top:0;right:0;bottom:0;width:0;transition:all ease-out 0.4s}.arrow.svelte-1ga2d1g.svelte-1ga2d1g:hover::before{left:0;right:auto;width:100%}.buttons.svelte-1ga2d1g.svelte-1ga2d1g{position:absolute;z-index:2;bottom:30%;background-color:black}.heading-container.svelte-1ga2d1g.svelte-1ga2d1g{width:50%}.intro.svelte-1ga2d1g.svelte-1ga2d1g{padding:2rem;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center}.container.svelte-1ga2d1g.svelte-1ga2d1g{display:flex;justify-content:space-evenly;padding:4rem 0}.hero.svelte-1ga2d1g.svelte-1ga2d1g{width:90%;color:white;display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:2rem}img.svelte-1ga2d1g.svelte-1ga2d1g{width:100%;height:100%;object-fit:cover}.modifier1.svelte-1ga2d1g.svelte-1ga2d1g{background-color:#dcca87;position:absolute;width:70%;height:60%;left:0;bottom:0;color:#dcca87}.modifier2.svelte-1ga2d1g.svelte-1ga2d1g{background-color:#dcca87;position:absolute;width:70%;height:60%;right:0;color:#dcca87}.image-container.svelte-1ga2d1g.svelte-1ga2d1g{height:800px;position:relative}.image.svelte-1ga2d1g.svelte-1ga2d1g{z-index:1;width:95%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.image.svelte-1ga2d1g img.svelte-1ga2d1g{width:100%;height:100%;object-fit:cover}.right-control.svelte-1ga2d1g.svelte-1ga2d1g,.left-control.svelte-1ga2d1g.svelte-1ga2d1g{color:white}@media(max-width: 768px){.image-container.svelte-1ga2d1g.svelte-1ga2d1g{height:400px}.image.svelte-1ga2d1g.svelte-1ga2d1g{width:90%}.carousel-container.svelte-1ga2d1g.svelte-1ga2d1g{height:380px}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="container svelte-1ga2d1g"><div class="hero svelte-1ga2d1g"><div class="rotate"><div class="intro svelte-1ga2d1g"><div class="heading-container svelte-1ga2d1g">${validate_component(H4, "H4").$$render($$result, { heading: "Quality Served Timely" }, {}, {})}</div>
				${validate_component(HeadingMain, "HeadingMain").$$render($$result, { heading: "Food That Surprise You" }, {}, {})}
				${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: "Whether you prefer a full-bodied red wine to accompany your perfectly cooked steak or a refreshing artisanal cocktail to start your evening, our knowledgeable staff will guide you through the extensive beverage menu, ensuring a seamless pairing with your chosen dishes. "
    },
    {},
    {}
  )}
				${validate_component(Button, "Button").$$render($$result, { text: "Explore Menu" }, {}, {})}</div></div>

		<div class="image-container svelte-1ga2d1g"><div class="image svelte-1ga2d1g">${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      autoplay: "5000",
      perPage: "1",
      controls: "false",
      duration: "600"
    },
    {},
    {
      "right-control": () => {
        return `<span class="right-control svelte-1ga2d1g" slot="right-control"><div class="buttons svelte-1ga2d1g"><button class="arrow svelte-1ga2d1g"><img${add_attribute("src", arrow, 0)} alt="" class="svelte-1ga2d1g"></button></div></span>`;
      },
      "left-control": () => {
        return `<span class="left-control svelte-1ga2d1g" slot="left-control"><div class="buttons svelte-1ga2d1g"><button class="arrow svelte-1ga2d1g"><img${add_attribute("src", arrow, 0)} class="left svelte-1ga2d1g" alt=""></button></div></span>`;
      },
      default: () => {
        return `<div class="carousel-container svelte-1ga2d1g"><img${add_attribute("src", cusine1, 0)} alt="" srcset="" class="svelte-1ga2d1g"></div>
					<div class="carousel-container svelte-1ga2d1g"><img${add_attribute("src", cusine2, 0)} alt="" srcset="" class="svelte-1ga2d1g"></div>
					<div class="carousel-container svelte-1ga2d1g"><img${add_attribute("src", cusine3, 0)} alt="" srcset="" class="svelte-1ga2d1g"></div>

					<div class="carousel-container svelte-1ga2d1g"><img${add_attribute("src", cusine4, 0)} alt="" srcset="" class="svelte-1ga2d1g"></div>`;
      }
    }
  )}</div>

			<div class="modifier1 svelte-1ga2d1g"></div>
			<div class="modifier2 svelte-1ga2d1g"></div></div></div>
</div>`;
});
const sign = "/_app/immutable/assets/Kevin-Luo.b7a42a36.png";
const chef = "/_app/immutable/assets/chef-kevin.5eab47fe.png";
const chefsword_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sign-container.svelte-1d3rcqm{width:40%}.heading-container.svelte-1d3rcqm{width:50%}.intro.svelte-1d3rcqm{padding:2rem;display:flex;flex-direction:column;justify-content:center}.container.svelte-1d3rcqm{display:flex;justify-content:space-evenly;padding-top:8rem;padding-bottom:16rem;position:relative;background-color:black}.hero.svelte-1d3rcqm{width:90%;color:white;display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:2rem}img.svelte-1d3rcqm{width:100%;height:100%;object-fit:cover}.image.svelte-1d3rcqm{grid-area:2/2/-2/-2;z-index:1}.svg-container.svelte-1d3rcqm{width:10%;margin:2rem;position:absolute;left:85%;bottom:0}",
  map: null
};
const Chefsword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-1d3rcqm"><div class="hero svelte-1d3rcqm"><div><img${add_attribute("src", chef, 0)} alt="" class="image svelte-1d3rcqm"></div>

		<div class="intro svelte-1d3rcqm"><div class="heading-container svelte-1d3rcqm">${validate_component(H4, "H4").$$render($$result, { heading: "Chef's Word" }, {}, {})}</div>
			${validate_component(H1, "H1").$$render($$result, { heading: "What We Believe In " }, {}, {})}
			${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: "Within these walls, we weave culinary dreams, creating dishes that tantalize the palate and transport you to a world of indulgence and refinement."
    },
    {},
    {}
  )}
			${validate_component(H3, "H3").$$render($$result, { heading: "Kevin Luo" }, {}, {})}
			${validate_component(P, "P").$$render($$result, { paragraph: "Chef & Founder" }, {}, {})}
			<div class="sign-container svelte-1d3rcqm"><img${add_attribute("src", sign, 0)} alt="" srcset="" class="svelte-1d3rcqm"></div>
			<div></div></div></div>
	<div class="svg-container svelte-1d3rcqm"><img${add_attribute("src", scissor, 0)} alt="" class="svelte-1d3rcqm"></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(Backeffectmenu, "Backeffectmenu").$$render($$result, {}, {}, {})}
${validate_component(HIstoryBar, "HIstoryBar").$$render($$result, {}, {}, {})}
${validate_component(Chefsword, "Chefsword").$$render($$result, {}, {}, {})}
${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}
${validate_component(Laurel, "Laurel").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
