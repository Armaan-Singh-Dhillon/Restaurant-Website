import { c as create_ssr_component, v as validate_component, d as each, a as add_attribute, e as escape } from "../../../chunks/index2.js";
import "../../../chunks/blogStore.js";
import { H as H2 } from "../../../chunks/H2.js";
import { H as H4, P } from "../../../chunks/P.js";
import { l as loading } from "../../../chunks/globalLoader.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-2ztkut.svelte-2ztkut{text-decoration:none;color:#dcca87}.stamps.svelte-2ztkut.svelte-2ztkut{display:flex;justify-content:space-between;font-size:calc(0.1em + 1vw)}.container.svelte-2ztkut.svelte-2ztkut{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 570px));justify-content:space-evenly;gap:1rem;margin:4rem 0}.heading.svelte-2ztkut.svelte-2ztkut{font-size:calc(0.5em + 1vw);font-family:'Cormorant Upright', serif;display:inline;font-weight:600;color:#dcca87;position:relative;z-index:1}.heading.svelte-2ztkut.svelte-2ztkut::before{content:'';position:absolute;top:95%;left:0;right:0;bottom:0;background-color:#dcca87;z-index:-1;transform:scaleX(0);transition:all 0.5s;transform-origin:left}.heading.svelte-2ztkut.svelte-2ztkut:hover::before{transform:scaleX(1)}.image-container.svelte-2ztkut.svelte-2ztkut{height:400px;background-image:url(../../lib/images/background/blogbackground.jpg);display:flex;justify-content:space-evenly;align-items:center;overflow:hidden}.blog.svelte-2ztkut.svelte-2ztkut{color:white}.card.svelte-2ztkut img.svelte-2ztkut{width:100%;height:100%;object-fit:cover;transition:all 0.5s ease-in-out}.card-image.svelte-2ztkut.svelte-2ztkut{overflow:hidden;height:350px}.card.svelte-2ztkut img.svelte-2ztkut:hover{transform:scale(1.1)}.read.svelte-2ztkut.svelte-2ztkut{font-size:calc(1vw);font-family:'Cormorant Upright', serif;display:flex;font-weight:600;color:#dcca87;align-items:center}.read.svelte-2ztkut.svelte-2ztkut::before{content:'';width:0px;height:2.5px;background-color:#dcca87;transform-origin:left;transition:all 0.5s ease-in-out;margin-right:4px}.read.svelte-2ztkut.svelte-2ztkut:hover::before{width:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [];
  loading.set(true);
  $$result.css.add(css);
  return `<div class="blog svelte-2ztkut"><div class="image-container svelte-2ztkut">${validate_component(H2, "H2").$$render($$result, { heading: "Welcome To Our Blog" }, {}, {})}</div>

	<div class="container svelte-2ztkut">${each(data, (item) => {
    return `<div class="card svelte-2ztkut"><div class="card-image svelte-2ztkut"><img${add_attribute("src", item.image1, 0)} alt="" class="svelte-2ztkut"></div>
				<div class="stamps svelte-2ztkut"><div>${escape(item.date)}</div>
					<div>${escape(item.writer.Postedby)}
					</div></div>
				<div><a${add_attribute("href", `blog/${item.id}`, 0)} class="svelte-2ztkut">${validate_component(H4, "H4").$$render($$result, { heading: item.name }, {}, {})}
					</a></div>
				<div class="heading svelte-2ztkut"><a${add_attribute("href", `blog/${item.id}`, 0)} class="svelte-2ztkut">${escape(item.mainTitle)}
					</a></div>
				<div>${validate_component(P, "P").$$render($$result, { paragraph: item.intro }, {}, {})}</div>
				<div class="read svelte-2ztkut"><a${add_attribute("href", `blog/${item.id}`, 0)} class="svelte-2ztkut">Read More </a></div>
			</div>`;
  })}</div>
</div>`;
});
export {
  Page as default
};
