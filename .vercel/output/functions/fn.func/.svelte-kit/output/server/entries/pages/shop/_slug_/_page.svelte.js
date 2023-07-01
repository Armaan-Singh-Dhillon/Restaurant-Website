import { c as create_ssr_component, d as each, e as escape, b as subscribe, a as add_attribute, v as validate_component } from "../../../../chunks/index2.js";
import { C as Carousel } from "../../../../chunks/Carousel.js";
import { B as Button } from "../../../../chunks/Button.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { I as InnerH3 } from "../../../../chunks/innerH3.js";
import { H as H3 } from "../../../../chunks/H3.js";
import { P, H as H4 } from "../../../../chunks/P.js";
/* empty css                                                     */import "firebase/firestore";
import { u as userStore } from "../../../../chunks/firebaseConfig.js";
import { l as loading } from "../../../../chunks/globalLoader.js";
import "firebase/auth";
const css$1 = {
  code: ".star-container.svelte-o0wt08{display:flex}.star.svelte-o0wt08{width:5%;height:25px;background-repeat:no-repeat;background-size:contain}.full.svelte-o0wt08{background-image:url(../lib/images/logos/full-star.svg)}.half.svelte-o0wt08{background-image:url(../lib/images/logos/half-star.svg)}.empty.svelte-o0wt08{background-image:url(../lib/images/logos/zero-star.svg)}",
  map: null
};
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { starData = 0 } = $$props;
  function getStarType(index) {
    const roundedRating = Math.round(starData * 2) / 2;
    if (index <= roundedRating) {
      if (index === Math.floor(roundedRating) && roundedRating % 1 !== 0) {
        return "half";
      }
      return "full";
    }
    return "empty";
  }
  if ($$props.starData === void 0 && $$bindings.starData && starData !== void 0)
    $$bindings.starData(starData);
  $$result.css.add(css$1);
  return `<div class="star-container svelte-o0wt08">${each(Array.from({ length: 5 }, (_, index) => index + 1), (star) => {
    return `<div class="${"star " + escape(getStarType(star), true) + " svelte-o0wt08"}"></div>`;
  })}
</div>`;
});
const cook = "/_app/immutable/assets/cook.bf53174b.svg";
const sale = "/_app/immutable/assets/discount.33c945c6.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "textarea.svelte-1v4cjzb.svelte-1v4cjzb{resize:none;width:100%;padding:1rem;background-color:#000;border:1px solid #aaa;color:#aaa;font-size:calc(0.5em + 1vw)}.search.svelte-1v4cjzb.svelte-1v4cjzb{position:relative}.search.svelte-1v4cjzb.svelte-1v4cjzb::before{content:'';position:absolute;top:92%;bottom:0;left:0;right:0;background-color:#dcca87;transform:scaleX(0);transform-origin:left;transition:all 0.5s ease-in-out}.search.svelte-1v4cjzb.svelte-1v4cjzb:hover::before{transform:scaleX(1)}input.svelte-1v4cjzb.svelte-1v4cjzb:focus{outline:none}.sale.svelte-1v4cjzb.svelte-1v4cjzb{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem}.sale.svelte-1v4cjzb img.svelte-1v4cjzb{width:100%;object-fit:contain}.topping-name.svelte-1v4cjzb.svelte-1v4cjzb{display:flex;justify-content:space-between}.topping-container.svelte-1v4cjzb.svelte-1v4cjzb{display:grid;width:100%;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem}.check.svelte-1v4cjzb.svelte-1v4cjzb{width:100%;display:flex;justify-content:space-between;align-items:center}.ingredient-container.svelte-1v4cjzb.svelte-1v4cjzb{display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));gap:1rem}.ing.svelte-1v4cjzb.svelte-1v4cjzb{color:whitesmoke;font-size:calc(0.2em + 1vw);font-family:'Open Sans', sans-serif}.quote.svelte-1v4cjzb.svelte-1v4cjzb{display:grid;border-top:2px solid #dcca87;border-bottom:2px solid #dcca87;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));color:white}.quote-container.svelte-1v4cjzb.svelte-1v4cjzb{padding:2rem;grid-area:2/1/-1/4;display:flex;flex-direction:column;justify-content:space-between}.quote-auth.svelte-1v4cjzb.svelte-1v4cjzb{font-family:'Poppins', sans-serif;font-size:calc(0.5em + 1vw)}.quote-content.svelte-1v4cjzb.svelte-1v4cjzb{font-family:'Open Sans', sans-serif;font-size:calc(0.5em + 1vw);word-spacing:4px;color:white}.supplements.svelte-1v4cjzb.svelte-1v4cjzb{display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));background-color:black;gap:1rem}.content.svelte-1v4cjzb.svelte-1v4cjzb{display:flex;flex-direction:column;justify-content:space-evenly}.cook.svelte-1v4cjzb.svelte-1v4cjzb{width:50%;padding:10px}.deliverycook.svelte-1v4cjzb.svelte-1v4cjzb{background-color:#242424;border:2px dotted #aaa;display:flex;flex-wrap:wrap;padding:10px;justify-content:space-between}.section.svelte-1v4cjzb.svelte-1v4cjzb{margin-bottom:calc(1em + 1vw)}.tags-container.svelte-1v4cjzb.svelte-1v4cjzb{display:flex;flex-wrap:wrap;justify-content:start;align-items:flex-start}.tags.svelte-1v4cjzb.svelte-1v4cjzb{color:#aaa;font-size:calc(0.3em + 1vw);margin:10px 10px;padding:8px;background-color:#242424;transition:all 0.5s ease-in-out}.tags.svelte-1v4cjzb.svelte-1v4cjzb:hover{cursor:pointer;scale:1.1;color:#dcca87}.container.svelte-1v4cjzb.svelte-1v4cjzb{display:grid;grid-template-columns:repeat(8, 1fr);gap:1rem}.image-container.svelte-1v4cjzb.svelte-1v4cjzb{grid-area:1/1/3/5}.image-container.svelte-1v4cjzb img.svelte-1v4cjzb{width:100%;height:50vw;object-fit:cover}.info.svelte-1v4cjzb.svelte-1v4cjzb{grid-area:1/5/3/-1}.options.svelte-1v4cjzb.svelte-1v4cjzb{grid-area:3/5/3/-1}.ingredients.svelte-1v4cjzb.svelte-1v4cjzb{grid-area:4/1/4/-1;background-color:#242424;border:2px dotted #aaa;padding:1rem}.supplements.svelte-1v4cjzb.svelte-1v4cjzb{grid-column:span 8 / auto}.reviews.svelte-1v4cjzb.svelte-1v4cjzb{grid-area:5/5/5/-1}.sale.svelte-1v4cjzb.svelte-1v4cjzb{grid-area:3/1/3/5;background-color:#242424;border:2px dotted #aaa}.addreview.svelte-1v4cjzb.svelte-1v4cjzb{grid-area:5/1/5/5;background-color:#000}img.svelte-1v4cjzb.svelte-1v4cjzb{width:100%;height:100%;object-fit:cover}@media(max-width: 768px){.container.svelte-1v4cjzb.svelte-1v4cjzb{display:flex;flex-direction:column}.topping-container.svelte-1v4cjzb.svelte-1v4cjzb{display:flex;justify-content:space-between}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $isLoading, $$unsubscribe_isLoading;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_isLoading = subscribe(loading, (value) => $isLoading = value);
  let { data } = $$props;
  loading.set(true);
  let dishData = {};
  const currentDate = /* @__PURE__ */ new Date();
  currentDate.getFullYear();
  String(currentDate.getMonth() + 1).padStart(2, "0");
  String(currentDate.getDate()).padStart(2, "0");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    console.log($userStore);
  }
  $$unsubscribe_userStore();
  $$unsubscribe_isLoading();
  return `${$isLoading ? `hi` : `<div class="container svelte-1v4cjzb"><div class="image-container svelte-1v4cjzb"><img${add_attribute("src", dishData.image, 0)} alt="" srcset="" class="svelte-1v4cjzb"></div>
		<div class="info svelte-1v4cjzb"><div class="title section svelte-1v4cjzb">${validate_component(H2, "H2").$$render($$result, { heading: dishData.name }, {}, {})}</div>
			<div class="star-container section svelte-1v4cjzb">${validate_component(Star, "Star").$$render($$result, { starData: dishData.reviews.averageRating }, {}, {})}</div>
			<div class="price section svelte-1v4cjzb">${validate_component(H3, "H3").$$render($$result, { heading: `Price : $${dishData.price}` }, {}, {})}</div>
			<div class="description section svelte-1v4cjzb">${validate_component(P, "P").$$render($$result, { paragraph: dishData.description }, {}, {})}</div>
			<div class="type section svelte-1v4cjzb">${validate_component(H3, "H3").$$render($$result, { heading: `Type: ${dishData.type}` }, {}, {})}</div>
			<div class="tag-section section svelte-1v4cjzb">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Tags" }, {}, {})}
				<div class="tags-container svelte-1v4cjzb">${each(dishData.tags, (item) => {
    return `<div class="tags svelte-1v4cjzb">${escape(item)}</div>`;
  })}</div></div>
			<div class="deliverycook section svelte-1v4cjzb"><div class="content svelte-1v4cjzb">${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: `Delievery Time : ${dishData.deliveryTime} min`
    },
    {},
    {}
  )}
					${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: `Avergae Time To Cook : ${dishData.averageTimeToCook} min`
    },
    {},
    {}
  )}
					${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: `Fat Content : ${dishData.fatContent} g`
    },
    {},
    {}
  )}
					${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: `Protein Content : ${dishData.protein} g`
    },
    {},
    {}
  )}</div>
				<div class="cook svelte-1v4cjzb"><img${add_attribute("src", cook, 0)} alt="" class="svelte-1v4cjzb"></div></div></div>
		<div class="options svelte-1v4cjzb">${validate_component(H2, "H2").$$render($$result, { heading: "Toppings And Add-Ons" }, {}, {})}

			<div class="topping-name svelte-1v4cjzb"><div class="topping-container svelte-1v4cjzb">${each(Object.entries(dishData.options), ([key, value]) => {
    return `<div class="topping">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: key }, {}, {})}
							${value.length != 0 ? `<div class="checkBoxes">${each(value, (item) => {
      return `<div class="check svelte-1v4cjzb">${validate_component(P, "P").$$render($$result, { paragraph: item }, {}, {})}
											<input type="checkbox" ${""} class="svelte-1v4cjzb">
										</div>`;
    })}
								</div>` : `${validate_component(P, "P").$$render(
      $$result,
      {
        paragraph: `Sorry Extra ${key} Might Not Be Available !`
      },
      {},
      {}
    )}`}
						</div>`;
  })}</div></div></div>
		<div class="ingredients svelte-1v4cjzb">${validate_component(H2, "H2").$$render($$result, { heading: "Ingredients" }, {}, {})}
			<div class="ingredient-container svelte-1v4cjzb">${each(Object.entries(dishData.ingredients), ([key, value]) => {
    return `${value.length != 0 ? `<div class="item">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: key }, {}, {})}

							

							${each(value, (item) => {
      return `<div class="herbs"><div>${validate_component(H4, "H4").$$render($$result, { heading: item.name }, {}, {})}</div>
									<div class="ing svelte-1v4cjzb">${escape(item.description)}</div>

									<div class="uses">${item.uses ? `${each(item.uses, (use) => {
        return `${validate_component(P, "P").$$render($$result, { paragraph: use }, {}, {})}`;
      })}` : ``}</div>
								</div>`;
    })}
						</div>` : ``}`;
  })}</div></div>
		<div class="supplements svelte-1v4cjzb">${dishData.supplements != null ? `<div class="item-card">${validate_component(H2, "H2").$$render($$result, { heading: "Beverages" }, {}, {})}

					<div class="beverages">${dishData.supplements.beverages.length != 0 ? `${each(dishData.supplements.beverages, (item) => {
    return `<div class="item">${validate_component(H4, "H4").$$render($$result, { heading: item.name }, {}, {})}
									${validate_component(P, "P").$$render($$result, { paragraph: item.description }, {}, {})}
								</div>`;
  })}` : ``}</div></div>
				<div class="item-card">${validate_component(H2, "H2").$$render($$result, { heading: "Food Drinks" }, {}, {})}

					<div class="beverages">${dishData.supplements.foodDrinks.length != 0 ? `${each(dishData.supplements.foodDrinks, (item) => {
    return `<div class="item">${validate_component(H4, "H4").$$render($$result, { heading: item.name }, {}, {})}
									${validate_component(P, "P").$$render($$result, { paragraph: item.description }, {}, {})}
								</div>`;
  })}` : `${validate_component(H4, "H4").$$render(
    $$result,
    {
      heading: "No Food Drinks Available With This Item"
    },
    {},
    {}
  )}`}</div></div>` : ``}</div>
		<div class="reviews svelte-1v4cjzb">
			<div class="review-section">${validate_component(H2, "H2").$$render($$result, { heading: "Customer Reviews" }, {}, {})}

				${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      perPage: "1",
      autoplay: "5000",
      dots: "false",
      controls: "false",
      duration: "2000"
    },
    {},
    {
      default: () => {
        return `${each(dishData.reviews.customerReviews, (item) => {
          return `<div class="quote svelte-1v4cjzb"><div class="quote-container svelte-1v4cjzb"><div>${validate_component(Star, "Star").$$render($$result, { starData: item.rating }, {}, {})}</div>
								<div class="quote-content svelte-1v4cjzb">${escape(item.review)}</div>

								<div class="quote-auth svelte-1v4cjzb">${validate_component(P, "P").$$render($$result, { paragraph: item.date }, {}, {})}</div>
								<div class="quote-auth svelte-1v4cjzb">-${escape(item.name)}</div></div>
						</div>`;
        })}`;
      }
    }
  )}</div></div>
		<div class="sale svelte-1v4cjzb"><div class="sale-outer"><img${add_attribute("src", sale, 0)} alt="" srcset="" class="svelte-1v4cjzb"></div>
			${dishData.salesAndOffers.length != 0 ? `${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      perPage: "1",
      autoplay: "5000",
      dots: "false",
      controls: "false",
      duration: "1000"
    },
    {},
    {
      default: () => {
        return `${each(dishData.salesAndOffers, (item) => {
          return `<div class="sale-title">${validate_component(H2, "H2").$$render($$result, { heading: item.title }, {}, {})}
							<div class="sale-decription">${validate_component(P, "P").$$render($$result, { paragraph: item.description }, {}, {})}</div>
							<div class="date-info-sale"><div class="Start">${validate_component(P, "P").$$render($$result, { paragraph: item.startDate }, {}, {})}</div>
								<div class="end">${validate_component(P, "P").$$render($$result, { paragraph: item.endDate }, {}, {})}
								</div></div>
						</div>`;
        })}`;
      }
    }
  )}` : `${validate_component(H4, "H4").$$render(
    $$result,
    {
      heading: "No Current Offer On This Dish "
    },
    {},
    {}
  )}`}</div>
		

		<div class="addreview svelte-1v4cjzb">${validate_component(H2, "H2").$$render($$result, { heading: "Add Your Reviews" }, {}, {})}
			<form class="content svelte-1v4cjzb"><label>${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Comment" }, {}, {})}</label>
				<div class="search svelte-1v4cjzb"><textarea type="text" class="svelte-1v4cjzb">${""}</textarea></div>
				
				<div>${validate_component(Button, "Button").$$render($$result, { text: "Submit" }, {}, {})}</div></form></div></div>`}`;
});
export {
  Page as default
};
