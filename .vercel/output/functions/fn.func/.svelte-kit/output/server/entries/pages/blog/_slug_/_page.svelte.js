import { c as create_ssr_component, a as add_attribute, v as validate_component, d as each, b as subscribe, e as escape } from "../../../../chunks/index2.js";
import { H as H1 } from "../../../../chunks/H1.js";
import { H as H4, P } from "../../../../chunks/P.js";
import { I as InnerH3 } from "../../../../chunks/innerH3.js";
import { s as search } from "../../../../chunks/search.js";
import "../../../../chunks/blogStore.js";
import "../../../../chunks/singletons.js";
import { I as InnerH1 } from "../../../../chunks/innerH1.js";
import { h as hex } from "../../../../chunks/hex.js";
import "firebase/firestore";
import { u as userStore } from "../../../../chunks/firebaseConfig.js";
import { l as loading } from "../../../../chunks/globalLoader.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { B as Button } from "../../../../chunks/Button.js";
import "firebase/auth";
const Sidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".amazing-post.svelte-1sjtu5a img.svelte-1sjtu5a{width:100%}.search-icon.svelte-1sjtu5a.svelte-1sjtu5a{width:20px}.popular-tags.svelte-1sjtu5a.svelte-1sjtu5a{display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr))}.search-tags.svelte-1sjtu5a.svelte-1sjtu5a{padding:10px;border:none;background-color:#242424;color:#aaa}.title-tags.svelte-1sjtu5a.svelte-1sjtu5a{font-size:calc(0.8em + 1vw);font-family:'Noto Serif Georgian', serif;font-weight:300;margin:40px 0;color:#dcca87}.sidebar.svelte-1sjtu5a.svelte-1sjtu5a{background-color:black}.category-tags-single.svelte-1sjtu5a.svelte-1sjtu5a{font-size:16px;font-family:'Noto Serif Georgian', serif;font-weight:400;color:#aaa;margin:20px 0}.search.svelte-1sjtu5a.svelte-1sjtu5a{position:relative;display:flex}.search.svelte-1sjtu5a input.svelte-1sjtu5a{width:100%;padding:5px;background-color:#000;border:none;color:#aaa}.search.svelte-1sjtu5a.svelte-1sjtu5a::before{content:'';position:absolute;background-color:#dcca87;top:95%;left:0;right:0;bottom:0;transform:scaleX(0);transform-origin:left;transition:0.4s all}.search.svelte-1sjtu5a.svelte-1sjtu5a:hover::before{transform:scaleX(1)}input.svelte-1sjtu5a.svelte-1sjtu5a:focus{outline:none}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [];
  $$result.css.add(css$1);
  return `<div class="sidebar glow svelte-1sjtu5a"><div><div class="search svelte-1sjtu5a"><input type="" placeholder="Search" class="svelte-1sjtu5a">
			<img${add_attribute("src", search, 0)} class="search-icon svelte-1sjtu5a" alt=""></div>
		<div class="categories"><div class="title-tags svelte-1sjtu5a">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "All Categories" }, {}, {})}
				<div class="category-tags"><div class="category-tags-single svelte-1sjtu5a">Baking</div>
					<div class="category-tags-single svelte-1sjtu5a">Cooking Tips</div>
					<div class="category-tags-single svelte-1sjtu5a">Photography</div></div></div>
			<div class="title-tags svelte-1sjtu5a">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Popular Tags" }, {}, {})}
				<div class="popular-tags svelte-1sjtu5a"><div class="category-tags-single svelte-1sjtu5a"><button class="search-tags svelte-1sjtu5a">Baking </button></div>
					<div class="category-tags-single svelte-1sjtu5a"><button class="search-tags svelte-1sjtu5a">Cooking </button></div>
					<div class="category-tags-single svelte-1sjtu5a"><button class="search-tags svelte-1sjtu5a">Grilling </button></div></div></div>
			<div class="title-tags svelte-1sjtu5a">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Amazing Posts" }, {}, {})}
				${each(data.slice(0, 3), (item) => {
    return `
					<div class="amazing-post svelte-1sjtu5a"><div class="image-container"><img${add_attribute("src", item.image1, 0)} alt="" srcset="" class="svelte-1sjtu5a"></div>
						${validate_component(H4, "H4").$$render($$result, { heading: item.name }, {}, {})}
						${validate_component(P, "P").$$render($$result, { paragraph: item.mainTitle }, {}, {})}
					</div>`;
  })}</div></div></div>
</div>`;
});
const back = "/_app/immutable/assets/blog-inner.9c358454.avif";
const calendar = "/_app/immutable/assets/calendar.63af278d.svg";
const quote = "/_app/immutable/assets/quote.15c996fb.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".addreview.svelte-2jzfnb.svelte-2jzfnb{width:80%}.search.svelte-2jzfnb.svelte-2jzfnb{position:relative}.search.svelte-2jzfnb.svelte-2jzfnb::before{content:'';position:absolute;top:98%;bottom:0;left:0;right:0;background-color:#dcca87;transform:scaleX(0);transform-origin:left;transition:all 0.5s ease-in-out}.search.svelte-2jzfnb.svelte-2jzfnb:hover::before{transform:scaleX(1)}textarea.svelte-2jzfnb.svelte-2jzfnb{resize:none;width:100%;padding:1rem;background-color:#000;border:1px solid #aaa;color:#aaa;font-size:calc(0.5em + 1vw)}.video-container.svelte-2jzfnb video.svelte-2jzfnb{width:100%}.point-container.svelte-2jzfnb.svelte-2jzfnb{display:flex;align-items:center}.point-image.svelte-2jzfnb img.svelte-2jzfnb{width:100%}.point-image.svelte-2jzfnb.svelte-2jzfnb{width:15px;margin-right:8px}.quote.svelte-2jzfnb.svelte-2jzfnb{display:grid;grid-template-rows:20px repeat(4, 1fr);grid-template-columns:repeat(4, 1fr)}.quote-image-container.svelte-2jzfnb.svelte-2jzfnb{grid-area:1/2;z-index:1}.quote-container.svelte-2jzfnb.svelte-2jzfnb{padding:2rem;grid-area:2/1/-1/-1}.quote-auth.svelte-2jzfnb.svelte-2jzfnb{font-family:'Poppins', sans-serif;font-size:calc(0.5em + 1vw)}.quote-content.svelte-2jzfnb.svelte-2jzfnb{font-family:'Sacramento', cursive;font-size:calc(2.5em + 1vw);word-spacing:4px}.main-heading.svelte-2jzfnb.svelte-2jzfnb{font-family:'Noto Serif Georgian', serif;font-weight:300;color:#dcca87;font-size:calc(2em + 1vw)}.inner-container.svelte-2jzfnb.svelte-2jzfnb{margin-right:10px;display:flex;align-items:center}.nameline-element.svelte-2jzfnb.svelte-2jzfnb{font-family:'Poppins', sans-serif;font-size:14px;display:flex;align-items:center}.separator.svelte-2jzfnb.svelte-2jzfnb::before{content:'';background-color:#aaa;width:5px;height:5px;margin:auto 1rem;border-radius:50%}.nameline.svelte-2jzfnb.svelte-2jzfnb{display:flex;margin:20px 0;text-transform:capitalize}.image-container.svelte-2jzfnb.svelte-2jzfnb{height:500px}.image-container.svelte-2jzfnb img.svelte-2jzfnb{width:100%;height:100%;object-fit:cover}.container.svelte-2jzfnb.svelte-2jzfnb{color:white;display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));gap:1rem;background-color:#000;margin:8rem 0}.content.svelte-2jzfnb.svelte-2jzfnb{grid-column:span 4 / auto}.sidebar.svelte-2jzfnb.svelte-2jzfnb{grid-column:span 2 / auto}.glow.svelte-2jzfnb.svelte-2jzfnb{border-top:2px solid #dcca87;border-bottom:2px solid #dcca87}.header.svelte-2jzfnb.svelte-2jzfnb{position:relative;height:400px}.heading.svelte-2jzfnb.svelte-2jzfnb{width:80%;position:absolute;z-index:1;position:absolute;top:50%;left:50%;font-family:'Noto Serif Georgian', serif;transform:translate(-50%, -50%);text-align:center}.header.svelte-2jzfnb img.svelte-2jzfnb{width:100%;height:100%;object-fit:cover;opacity:0.5}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userStore;
  let $isLoading, $$unsubscribe_isLoading;
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  $$unsubscribe_isLoading = subscribe(loading, (value) => $isLoading = value);
  let { data } = $$props;
  let blogdata = {};
  let comments = [];
  loading.set(true);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_userStore();
  $$unsubscribe_isLoading();
  return `${$isLoading ? `${validate_component(H1, "H1").$$render($$result, { heading: "Loading" }, {}, {})}` : `<div class="header svelte-2jzfnb"><div class="heading svelte-2jzfnb">${validate_component(InnerH1, "InnerH1").$$render($$result, { heading: blogdata.name }, {}, {})}</div>
		<img${add_attribute("src", back, 0)} alt="" class="svelte-2jzfnb"></div>
	<div class="container svelte-2jzfnb"><div class="content svelte-2jzfnb"><div class="image-container svelte-2jzfnb"><img${add_attribute("src", blogdata.image1, 0)} alt="" class="svelte-2jzfnb"></div>
			<div class="nameline svelte-2jzfnb"><div class="nameline-element svelte-2jzfnb"><div class="inner-container svelte-2jzfnb"></div>

					${escape(blogdata.writer.Postedby)}</div>
				<div class="nameline-element separator svelte-2jzfnb"><div class="inner-container svelte-2jzfnb"><img${add_attribute("src", calendar, 0)} alt=""></div>
					${escape(blogdata.date)}</div></div>

			<div class="main-heading svelte-2jzfnb">${escape(blogdata.mainTitle)}</div>
			${validate_component(P, "P").$$render($$result, { paragraph: blogdata.intro }, {}, {})}
			${validate_component(P, "P").$$render($$result, { paragraph: blogdata.subpara }, {}, {})}

			<div class="main-heading svelte-2jzfnb">${escape(blogdata.subtitle1)}</div>
			<div class="point-container svelte-2jzfnb"><div class="point-image svelte-2jzfnb"><img${add_attribute("src", hex, 0)} alt="" class="svelte-2jzfnb"></div>
				<div class="point-content">${validate_component(P, "P").$$render($$result, { paragraph: blogdata.pointsintro.point1 }, {}, {})}</div></div>
			<div class="point-container svelte-2jzfnb"><div class="point-image svelte-2jzfnb"><img${add_attribute("src", hex, 0)} alt="" class="svelte-2jzfnb"></div>
				<div class="point-content">${validate_component(P, "P").$$render($$result, { paragraph: blogdata.pointsintro.point2 }, {}, {})}</div></div>
			<div class="point-container svelte-2jzfnb"><div class="point-image svelte-2jzfnb"><img${add_attribute("src", hex, 0)} alt="" class="svelte-2jzfnb"></div>
				<div class="point-content">${validate_component(P, "P").$$render($$result, { paragraph: blogdata.pointsintro.point3 }, {}, {})}</div></div>
			<div class="video-container svelte-2jzfnb"><video loop controls class="svelte-2jzfnb"><source${add_attribute("src", blogdata.video, 0)} type="video/mp4"><track kind="captions" src="" label="English" srclang="en" default>
					Your browser does not support the video tag.
				</video></div>
			${validate_component(P, "P").$$render($$result, { paragraph: blogdata.videopara }, {}, {})}

			<div class="quote svelte-2jzfnb"><div class="quote-image-container svelte-2jzfnb"><img${add_attribute("src", quote, 0)} class="quote-image" alt=""></div>
				<div class="quote-container glow svelte-2jzfnb"><div class="quote-content svelte-2jzfnb">${escape(blogdata.quote)}</div>
					<div class="quote-auth svelte-2jzfnb">-${escape(blogdata.writer.Postedby)}</div></div></div>
			${validate_component(P, "P").$$render($$result, { paragraph: blogdata.outropara }, {}, {})}

			<div class="main-heading svelte-2jzfnb">${escape(blogdata.outroTitle)}</div>
			<div class="points"><div class="point-container svelte-2jzfnb"><div class="point-image svelte-2jzfnb"><img${add_attribute("src", hex, 0)} alt="" class="svelte-2jzfnb"></div>
					<div class="point-content">${validate_component(P, "P").$$render($$result, { paragraph: blogdata.pointsoutro.point1 }, {}, {})}</div></div>
				<div class="point-container svelte-2jzfnb"><div class="point-image svelte-2jzfnb"><img${add_attribute("src", hex, 0)} alt="" class="svelte-2jzfnb"></div>
					<div class="point-content">${validate_component(P, "P").$$render($$result, { paragraph: blogdata.pointsoutro.point2 }, {}, {})}</div></div>

				<div class="point-container svelte-2jzfnb"><div class="point-image svelte-2jzfnb"><img${add_attribute("src", hex, 0)} alt="" class="svelte-2jzfnb"></div>
					<div class="point-content">${validate_component(P, "P").$$render($$result, { paragraph: blogdata.pointsoutro.point3 }, {}, {})}</div></div></div>
			<div class="quote svelte-2jzfnb"><div class="quote-image-container svelte-2jzfnb"><img${add_attribute("src", quote, 0)} class="quote-image" alt=""></div>
				<div class="quote-container glow svelte-2jzfnb"><div class="quote-content svelte-2jzfnb">${escape(blogdata.finalWords)}</div></div></div></div>

		<div class="sidebar svelte-2jzfnb">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div></div>
	${comments.length !== 0 ? `<div>${validate_component(H4, "H4").$$render($$result, { heading: "Comments" }, {}, {})}
			${each(comments, (item) => {
    return `<div class="comment"><div>${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: item.name }, {}, {})}</div>
					${validate_component(P, "P").$$render($$result, { paragraph: item.review }, {}, {})}
				</div>`;
  })}</div>` : ``}

	<div class="addreview svelte-2jzfnb">${validate_component(H2, "H2").$$render($$result, { heading: "Add Your Reviews" }, {}, {})}
		
		<form class="content svelte-2jzfnb"><label>${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Comment" }, {}, {})}</label>
			<div class="search svelte-2jzfnb"><textarea rows="4" cols="50" class="svelte-2jzfnb">${""}</textarea></div></form></div>
	
	<div>${validate_component(Button, "Button").$$render($$result, { text: "submit" }, {}, {})}</div>`}`;
});
export {
  Page as default
};
