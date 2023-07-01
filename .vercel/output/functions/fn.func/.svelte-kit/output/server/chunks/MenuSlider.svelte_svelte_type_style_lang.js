import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute, n as null_to_empty } from "./index2.js";
import { H as H3 } from "./H3.js";
import { P, H as H4 } from "./P.js";
import { H as H1 } from "./H1.js";
/* empty css                                  */import { I as InnerH1 } from "./innerH1.js";
/* empty css                                  *//* empty css                                       */const cocktail = "/_app/immutable/assets/cocktail.6d08028c.jpg";
const MenuCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".card.svelte-79rhxd{width:100%;margin:1rem}.upper-card.svelte-79rhxd{width:100%;display:flex;justify-content:space-between;color:white;align-items:center}.u-line.svelte-79rhxd{flex:1;align-self:flex-end;margin:4px;padding:2px;border-bottom:1px solid #ebebeb}.item.svelte-79rhxd{font-size:calc(0.8em + 1vw);font-family:'Cormorant Upright', serif;font-weight:600;color:#dcca87}.price.svelte-79rhxd{font-size:calc(0.5em + 1vw)}",
  map: null
};
const MenuCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { price = 0 } = $$props;
  let { item = "" } = $$props;
  let { text = "" } = $$props;
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$2);
  return `<div class="card svelte-79rhxd"><div class="upper-card svelte-79rhxd"><div class="item svelte-79rhxd">${escape(item)}</div>
		<div class="u-line svelte-79rhxd"></div>
		<div class="price svelte-79rhxd">$${escape(price)}</div></div>
	<div>${validate_component(P, "P").$$render($$result, { paragraph: text }, {}, {})}</div>
</div>`;
});
const Menu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".columns.svelte-qtx1b6{display:flex;flex-direction:column;align-items:center;padding:2rem}.container.svelte-qtx1b6{display:flex;flex-direction:column;align-items:center;color:white;padding:10rem 0}.menu.svelte-qtx1b6{width:100%;display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr))}img.svelte-qtx1b6{width:100%;height:100%;object-fit:cover}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="container svelte-qtx1b6"><div>${validate_component(H4, "H4").$$render($$result, { heading: "Menu That Fits You Palatte" }, {}, {})}
            ${validate_component(H1, "H1").$$render($$result, { heading: "Today's Special" }, {}, {})}</div>
	<div class="menu svelte-qtx1b6"><div class="columns svelte-qtx1b6">${validate_component(H3, "H3").$$render($$result, { heading: "Wine & Beer" }, {}, {})}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "Chapel Hill Shiraz",
      price: 56,
      text: "AU | Bottle"
    },
    {},
    {}
  )}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "Vineyard Reserve Chardonnay",
      price: 42,
      text: "US | Bottle"
    },
    {},
    {}
  )}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "La Rioja Tempranillo",
      price: 38,
      text: "ES | Bottle"
    },
    {},
    {}
  )}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "Craft IPA",
      price: 8,
      text: "USD | Pint"
    },
    {},
    {}
  )}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "Belgian Witbier",
      price: 9,
      text: "USD | Pint"
    },
    {},
    {}
  )}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "German Hefeweizen",
      price: 10,
      text: "USD | Pint"
    },
    {},
    {}
  )}
            ${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "Irish Stout",
      price: 11,
      text: "USD | Pint"
    },
    {},
    {}
  )}</div>
		<div><img${add_attribute("src", cocktail, 0)} alt="" class="svelte-qtx1b6"></div>
		<div class="columns svelte-qtx1b6">${validate_component(H3, "H3").$$render($$result, { heading: "Cocktails" }, {}, {})}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "Chapel Hill Shiraz",
      price: 56,
      text: "AU | Bottle"
    },
    {},
    {}
  )}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "Sapphire Martini",
      price: 18,
      text: "USD | Bottle"
    },
    {},
    {}
  )}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "Golden Margarita",
      price: 25,
      text: "USD | Bottle"
    },
    {},
    {}
  )}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "Diamond Fizz",
      price: 32,
      text: "USD | Bottle"
    },
    {},
    {}
  )}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "Platinum Cosmopolitan",
      price: 20,
      text: "USD | Bottle"
    },
    {},
    {}
  )}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "Emerald Martini",
      price: 22,
      text: "USD | Bottle"
    },
    {},
    {}
  )}
			${validate_component(MenuCard, "MenuCard").$$render(
    $$result,
    {
      item: "Royal Manhattan",
      price: 28,
      text: "USD | Bottle"
    },
    {},
    {}
  )}</div></div>
</div>`;
});
const backeffectmenu_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-f0e1gg.svelte-f0e1gg{display:grid;height:800px;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));position:relative}.back1.svelte-f0e1gg.svelte-f0e1gg{background-image:url(../lib/images/background/02-min-scaled.jpg);background-size:cover}.back2.svelte-f0e1gg.svelte-f0e1gg{background-image:url(../lib/images/background/01-min-scaled.jpg);background-size:cover}.back3.svelte-f0e1gg.svelte-f0e1gg{background-image:url(../lib/images/background/03-min-scaled.jpg);background-size:cover}.one.svelte-f0e1gg.svelte-f0e1gg{transition:all 0.4s ease-in-out;display:flex;flex-direction:column;justify-content:end;padding:1rem}.two.svelte-f0e1gg.svelte-f0e1gg{transition:all 0.4s ease-in-out;display:flex;flex-direction:column;padding:1rem;justify-content:end}.three.svelte-f0e1gg.svelte-f0e1gg{transition:all 0.4s ease-in-out;padding:1rem;display:flex;flex-direction:column;justify-content:end}.show.svelte-f0e1gg.svelte-f0e1gg{margin:0;transform:scaleY(0);transition:all 0.4s;transform-origin:bottom}.one.svelte-f0e1gg.svelte-f0e1gg:hover{backdrop-filter:blur(10px)}.one.svelte-f0e1gg:hover .show.svelte-f0e1gg{transform:scaleY(1);margin:20px 0 10px 0}.two.svelte-f0e1gg:hover .show.svelte-f0e1gg{transform:scaleY(1);margin:20px 0 10px 0}.three.svelte-f0e1gg:hover .show.svelte-f0e1gg{transform:scaleY(1);margin:20px 0 10px 0}.two.svelte-f0e1gg.svelte-f0e1gg:hover{backdrop-filter:blur(10px)}.three.svelte-f0e1gg.svelte-f0e1gg:hover{backdrop-filter:blur(10px)}.read.svelte-f0e1gg.svelte-f0e1gg{font-size:calc(1em + 1vw);font-family:'Cormorant Upright', serif;display:flex;font-weight:600;color:#dcca87;align-items:center}.read.svelte-f0e1gg.svelte-f0e1gg::before{content:'';width:0px;height:2.5px;background-color:#dcca87;transform-origin:left;transition:all 0.5s ease-in-out;margin-right:4px}.read.svelte-f0e1gg.svelte-f0e1gg:hover::before{width:20px}",
  map: null
};
const Backeffectmenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selector = "back1";
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`container ${selector} `), true) + " svelte-f0e1gg"}"><div class="one svelte-f0e1gg" value="back1">${validate_component(InnerH1, "InnerH1").$$render($$result, { heading: "Mocktail Menu" }, {}, {})}
		<div class="show svelte-f0e1gg">${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: "Quench your thirst with our delightful mocktail menu, offering a refreshing array of non-alcoholic beverages crafted to perfection."
    },
    {},
    {}
  )}</div>
		<div class="read svelte-f0e1gg">Read More</div></div>
	<div class="two svelte-f0e1gg" value="back2">${validate_component(InnerH1, "InnerH1").$$render($$result, { heading: "Main Cousrse" }, {}, {})}
		<div class="show svelte-f0e1gg">${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: "Indulge in our chef's culinary artistry with our main course menu, where expertly crafted dishes showcase a symphony of flavors, carefully selected ingredients, and exquisite presentation."
    },
    {},
    {}
  )}</div>
		<div class="read svelte-f0e1gg">Read More</div></div>
	<div class="three svelte-f0e1gg" value="back3">${validate_component(InnerH1, "InnerH1").$$render($$result, { heading: "Best Dessert" }, {}, {})}
		<div class="show svelte-f0e1gg">${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: "Experience a symphony of flavors with our award-winning dessert, skillfully crafted using premium ingredients and innovative techniques to create a memorable culinary experience."
    },
    {},
    {}
  )}</div>
		<div class="read svelte-f0e1gg">Read More</div></div>
</div>`;
});
const MenuSlider_svelte_svelte_type_style_lang = "";
export {
  Backeffectmenu as B,
  Menu as M,
  MenuCard as a
};
