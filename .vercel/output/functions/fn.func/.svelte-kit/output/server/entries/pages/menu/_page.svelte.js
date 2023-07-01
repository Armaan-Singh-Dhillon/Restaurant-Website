import { c as create_ssr_component, v as validate_component, d as each, a as add_attribute, e as escape } from "../../../chunks/index2.js";
import { H as H1 } from "../../../chunks/H1.js";
import { H as H4, P } from "../../../chunks/P.js";
import { H as H3 } from "../../../chunks/H3.js";
import { I as InnerH3 } from "../../../chunks/innerH3.js";
import { a as MenuCard, M as Menu, B as Backeffectmenu } from "../../../chunks/MenuSlider.svelte_svelte_type_style_lang.js";
import { C as Carousel } from "../../../chunks/Carousel.js";
import { I as InnerH1 } from "../../../chunks/innerH1.js";
const data$1 = [
  {
    image: "1.jpg",
    price: 12,
    name: "Icecream Honey"
  },
  {
    image: "2.jpg",
    price: 4,
    name: "Continental Soup"
  },
  {
    image: "3.jpg",
    price: 9,
    name: "Soft-Ruh-Drink"
  },
  {
    image: "4.jpg",
    price: 8,
    name: "Egg Madness"
  },
  {
    image: "5.jpg",
    price: 10,
    name: "Beer-Drink"
  }
];
const css$3 = {
  code: "img.svelte-n7hl2n{height:40vw}",
  map: null
};
const MenuSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="container">${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      autoplay: "2000",
      controls: "false",
      duration: "600"
    },
    {},
    {
      default: () => {
        return `${each(data$1, (item) => {
          return `<img${add_attribute("src", `src/lib/images/menu/slider/${item.image}`, 0)} alt="" srcset="" class="svelte-n7hl2n">`;
        })}`;
      }
    }
  )}
</div>`;
});
const data = [
  {
    image: "01-min.png",
    title: "Biscuit & Sausage Gravy",
    subTitle: "Sunny-Side Up Egg",
    price: 16
  },
  {
    image: "02-min.png",
    title: "Shrimp & Grits",
    subTitle: "Jalapeno Gouda Grits / Asparagus",
    price: 25
  },
  {
    image: "03-min.png",
    title: "Breakfast Plate",
    subTitle: "Ricotta / hazelnut / chili",
    price: 10
  },
  {
    image: "04-min.png",
    title: "Vegetable Frittata",
    subTitle: "Cavaillon / sour cream",
    price: 25
  },
  {
    image: "05-min.png",
    title: "Whole Grilled Mackerel With Green Sauce",
    subTitle: "Smoked / carrot / yogurt / miso",
    price: 40
  },
  {
    image: "06-min.png",
    title: "Salmon Lox",
    subTitle: "Cream Cheese / Cucumber / Capers / Red Onion",
    price: 35
  }
];
const exclusiveMenu_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".header.svelte-dqwyhi.svelte-dqwyhi{display:flex;flex-direction:column;align-items:center}.container.svelte-dqwyhi.svelte-dqwyhi{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));row-gap:5rem;column-gap:8rem}.info.svelte-dqwyhi.svelte-dqwyhi{padding:2rem}.image-container.svelte-dqwyhi img.svelte-dqwyhi{width:100%}",
  map: null
};
const ExclusiveMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="header svelte-dqwyhi">${validate_component(H4, "H4").$$render($$result, { heading: "Our Menu" }, {}, {})}
	${validate_component(H1, "H1").$$render($$result, { heading: "Exclusive Menu" }, {}, {})}</div>

<div class="container svelte-dqwyhi">${each(data, (item) => {
    return `<div class="card"><div class="image-container svelte-dqwyhi"><img${add_attribute("src", `src/lib/images/menu/exclusive/${item.image}`, 0)} alt="" class="svelte-dqwyhi"></div>
			<div class="info svelte-dqwyhi">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: item.title }, {}, {})}

				${validate_component(P, "P").$$render($$result, { paragraph: item.subTitle }, {}, {})}
				${validate_component(H3, "H3").$$render($$result, { heading: `$${item.price}` }, {}, {})}</div>
		</div>`;
  })}
</div>`;
});
const appetizers = [
  {
    item: "Spinach and Artichoke Dip",
    price: 9,
    text: "Classic dip served with tortilla chips"
  },
  {
    item: "Bruschetta",
    price: 8,
    text: "Toasted bread topped with fresh tomatoes, basil, and garlic"
  },
  {
    item: "Chicken Wings",
    price: 10,
    text: "Crispy chicken wings with your choice of sauce"
  },
  {
    item: "Fried Calamari",
    price: 12,
    text: "Lightly breaded and fried calamari served with marinara sauce"
  },
  {
    item: "Cheese Sticks",
    price: 7,
    text: "Breaded and fried mozzarella cheese sticks served with marinara sauce"
  },
  {
    item: "Garlic Shrimp",
    price: 11,
    text: "Sautéed shrimp in garlic butter sauce"
  },
  {
    item: "Stuffed Mushrooms",
    price: 9,
    text: "Mushroom caps filled with a savory stuffing"
  },
  {
    item: "Potato Skins",
    price: 8,
    text: "Crispy potato skins filled with bacon, cheese, and sour cream"
  }
];
const mainCourses = [
  {
    item: "Grilled Salmon",
    price: 18,
    text: "Fresh grilled salmon served with steamed vegetables and mashed potatoes"
  },
  {
    item: "Chicken Parmesan",
    price: 16,
    text: "Breaded chicken breast topped with marinara sauce and melted cheese, served with pasta"
  },
  {
    item: "Beef Tenderloin",
    price: 22,
    text: "Juicy beef tenderloin steak cooked to perfection, served with roasted potatoes and sautéed vegetables"
  },
  {
    item: "Vegetable Stir-Fry",
    price: 14,
    text: "Assorted fresh vegetables stir-fried in a savory sauce, served with steamed rice"
  },
  {
    item: "Pasta Carbonara",
    price: 15,
    text: "Creamy pasta dish with bacon, eggs, and Parmesan cheese"
  },
  {
    item: "Lamb Chops",
    price: 20,
    text: "Grilled lamb chops served with mint sauce, roasted potatoes, and grilled asparagus"
  }
];
const MenuList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".menu.svelte-e9n4pu{width:100%;display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 600px));gap:4rem;justify-content:center;background-color:#000}.header.svelte-e9n4pu{display:flex;flex-direction:column;align-items:center}",
  map: null
};
const MenuList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="header svelte-e9n4pu">${validate_component(H1, "H1").$$render($$result, { heading: "Appetizers" }, {}, {})}</div>

<div class="menu svelte-e9n4pu">${each(appetizers, (item) => {
    return `${validate_component(MenuCard, "MenuCard").$$render(
      $$result,
      {
        item: item.item,
        price: item.price,
        text: item.text
      },
      {},
      {}
    )}`;
  })}</div>
${validate_component(MenuSlider, "MenuSlider").$$render($$result, {}, {}, {})}
<div class="header svelte-e9n4pu">${validate_component(H1, "H1").$$render($$result, { heading: "Main Course" }, {}, {})}</div>
<div class="menu svelte-e9n4pu">${each(mainCourses, (item) => {
    return `${validate_component(MenuCard, "MenuCard").$$render(
      $$result,
      {
        item: item.item,
        price: item.price,
        text: item.text
      },
      {},
      {}
    )}`;
  })}
</div>`;
});
const image1 = "/_app/immutable/assets/1.388a8781.jpg";
const image2 = "/_app/immutable/assets/2.620e4328.jpg";
const image3 = "/_app/immutable/assets/3.bdcd7a5a.jpg";
const image4 = "/_app/immutable/assets/4.197c9df0.jpg";
const image5 = "/_app/immutable/assets/5.b08cb88a.jpg";
const image6 = "/_app/immutable/assets/6.2c8bd811.jpg";
const dailyFlavour_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-3oqbsx.svelte-3oqbsx{width:100%;height:40vw;min-height:300px;object-fit:cover;animation:scale 1s ease-in}.price.svelte-3oqbsx.svelte-3oqbsx{margin:10px}.card.svelte-3oqbsx.svelte-3oqbsx{position:relative}.card-upper.svelte-3oqbsx.svelte-3oqbsx{width:100%;display:flex;padding:2rem;background-color:black;position:absolute;z-index:1}.text.svelte-3oqbsx.svelte-3oqbsx{color:#aaa;font-family:'Poppins', sans-serif;font-size:calc(0.4em + 1vw)}.card-upper.svelte-3oqbsx .title.svelte-3oqbsx{font-family:'Noto Serif Georgian', serif;font-weight:300;color:white;font-size:calc(1.5em + 1vw)}.tags.svelte-3oqbsx.svelte-3oqbsx{font-family:'Poppins', sans-serif;font-weight:300;color:#aaa;font-size:calc(1em + 1vw);padding:10px 0;display:flex}.tags.svelte-3oqbsx.svelte-3oqbsx::before{content:'';width:2px;background-color:black;transform:scaleX(0);margin:2px;transition:all 0.4s ease-in;background-color:#dcca87}.tags.svelte-3oqbsx.svelte-3oqbsx:hover{color:#dcca87;cursor:pointer}.tags.svelte-3oqbsx.svelte-3oqbsx:hover::before{transform:scaleX(1);margin-right:20px}.container.svelte-3oqbsx.svelte-3oqbsx{display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));gap:1rem;background-color:black}.one.svelte-3oqbsx.svelte-3oqbsx{grid-column:span 8 / auto}.two.svelte-3oqbsx.svelte-3oqbsx{grid-column:span 8 / auto;font-family:'Sacramento', cursive;font-size:calc(2.5em + 1.5vw);word-spacing:4px;color:#dcca87}.three.svelte-3oqbsx.svelte-3oqbsx{grid-column:span 4 / auto;color:white}.four.svelte-3oqbsx.svelte-3oqbsx{grid-column:span 6 / auto}.five.svelte-3oqbsx.svelte-3oqbsx{grid-column:span 6 / auto}",
  map: null
};
const DailyFlavour = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let weekday = "monday";
  const data2 = {
    monday: {
      name: "Meatless Madness",
      content: "peach puree, ginger ale, splash of lemon juice.",
      price: 25.16
    },
    tuesday: {
      name: "Tropical Delight",
      content: "mango puree, pineapple juice, coconut milk.",
      price: 28.5
    },
    wednesday: {
      name: "Berry Blast",
      content: "strawberry puree, blueberry syrup, lemonade.",
      price: 22.8
    },
    thursday: {
      name: "Citrus Splash",
      content: "orange juice, grapefruit juice, lime slices.",
      price: 19.99
    },
    friday: {
      name: "Minty Mojito",
      content: "muddled mint leaves, lime juice, soda water.",
      price: 24.75
    },
    saturday: {
      name: "Sunset Sangria",
      content: "red wine, orange slices, brandy, soda water.",
      price: 32.4
    },
    sunday: {
      name: "Creamy Cappuccino",
      content: "espresso, steamed milk, frothed milk.",
      price: 18.6
    }
  };
  $$result.css.add(css);
  return `<div class="container svelte-3oqbsx"><div class="one svelte-3oqbsx">${validate_component(H4, "H4").$$render($$result, { heading: "Special Dishes" }, {}, {})}
		${validate_component(InnerH1, "InnerH1").$$render($$result, { heading: "Daily Flavor Explosion" }, {}, {})}</div>
	<div class="two svelte-3oqbsx">Our Daily Flavor Explosion is a section dedicated to showcasing the vibrant and diverse flavors
		that our talented team has curated. Each day, our chefs select the finest seasonal ingredients,
		sourced locally whenever possible, to craft a menu that surprises and delights.
	</div>
	
	<div class="three svelte-3oqbsx"><div class="tags svelte-3oqbsx" value="monday">Monday</div>
		<div class="tags svelte-3oqbsx" value="tuesday">Tuesday</div>
		<div class="tags svelte-3oqbsx" value="wednesday">Wednesday</div>
		<div class="tags svelte-3oqbsx" value="thursday">Thursday</div>
		<div class="tags svelte-3oqbsx" value="friday">Friday</div>
		<div class="tags svelte-3oqbsx" value="saturday">Saturday</div>
		<div class="tags svelte-3oqbsx" value="sunday">Sunday</div></div>

	<div class="four svelte-3oqbsx"><div class="card svelte-3oqbsx"><div class="card-upper svelte-3oqbsx"><div class="info"><div class="title svelte-3oqbsx">${escape(data2[weekday].name)}</div>
					<div class="text svelte-3oqbsx">${escape(data2[weekday].content)}</div></div>
				<div class="price svelte-3oqbsx">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: `$${data2[weekday].price}` }, {}, {})}</div></div>
			<div class="image-container">${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      autoplay: "2000",
      perPage: "1",
      controls: "false",
      duration: "600"
    },
    {},
    {
      default: () => {
        return `<img${add_attribute("src", image1, 0)} alt="" class="svelte-3oqbsx">
					<img${add_attribute("src", image2, 0)} alt="" class="svelte-3oqbsx">
					<img${add_attribute("src", image3, 0)} alt="" class="svelte-3oqbsx">`;
      }
    }
  )}</div></div></div>
	<div class="five svelte-3oqbsx"><div class="image-container">${validate_component(Carousel, "Carousel").$$render(
    $$result,
    {
      autoplay: "5000",
      perPage: "1",
      controls: "false",
      duration: "600"
    },
    {},
    {
      default: () => {
        return `<img${add_attribute("src", image4, 0)} alt="" class="svelte-3oqbsx">
				<img${add_attribute("src", image5, 0)} alt="" class="svelte-3oqbsx">
				<img${add_attribute("src", image6, 0)} alt="" class="svelte-3oqbsx">`;
      }
    }
  )}</div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}
${validate_component(Backeffectmenu, "Backeffectmenu").$$render($$result, {}, {}, {})}
${validate_component(DailyFlavour, "DailyFlavour").$$render($$result, {}, {}, {})}

${validate_component(ExclusiveMenu, "ExclusiveMenu").$$render($$result, {}, {}, {})}

${validate_component(MenuList, "MenuList").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
