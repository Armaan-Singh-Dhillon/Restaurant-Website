import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as subscribe, n as null_to_empty } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { s as showLoginModal } from "../../chunks/firebaseConfig.js";
/* empty css                                                  *//* empty css                                                 */import { s as search } from "../../chunks/search.js";
import { getAuth } from "firebase/auth";
import { H as H2 } from "../../chunks/H2.js";
import { H as H4, P } from "../../chunks/P.js";
import { B as Button } from "../../chunks/Button.js";
import { s as scissor$1 } from "../../chunks/scissors.js";
import { l as loading } from "../../chunks/globalLoader.js";
import "firebase/firestore";
import "../../chunks/blogStore.js";
import "../../chunks/dishes.js";
import { I as InnerH3 } from "../../chunks/innerH3.js";
/* empty css                                             */import "../../chunks/singletons.js";
const haveAccount = writable(true);
const bars = "/_app/immutable/assets/bars.ed6d3936.svg";
const Navbar_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".login.svelte-1uvz7ez.svelte-1uvz7ez{font-size:calc(0.25em + 1vw);font-family:'Open Sans', sans-serif;cursor:pointer}a.svelte-1uvz7ez.svelte-1uvz7ez{text-decoration:none;color:white}.page-arrow.svelte-1uvz7ez.svelte-1uvz7ez{display:flex}.sidedowns.svelte-1uvz7ez.svelte-1uvz7ez{padding:1rem;border:2px dotted #aaa;background-color:#242424}.tags.svelte-1uvz7ez.svelte-1uvz7ez{position:relative;cursor:pointer}.tags.svelte-1uvz7ez.svelte-1uvz7ez::before{content:'';position:absolute;background-color:#dcca87;top:99%;left:0;right:0;bottom:0;transform:scaleX(0);transition:all 0.5s ease-in-out;transform-origin:left}.tags.svelte-1uvz7ez.svelte-1uvz7ez:hover::before{transform:scaleX(1)}.drop-container.svelte-1uvz7ez.svelte-1uvz7ez{position:relative;display:flex}.dropdowns.svelte-1uvz7ez.svelte-1uvz7ez{position:absolute;left:0;top:150%;width:500%;display:grid;border:2px solid #dcca87;gap:2rem;background-color:#000;z-index:10;padding:1rem}.cross.svelte-1uvz7ez.svelte-1uvz7ez{position:absolute;top:0;right:0;z-index:20}.bars.svelte-1uvz7ez.svelte-1uvz7ez{cursor:pointer}.navbar.svelte-1uvz7ez.svelte-1uvz7ez{color:#fff;justify-content:space-between;display:flex;position:relative}.side.svelte-1uvz7ez.svelte-1uvz7ez{position:absolute;top:0;left:0;background-color:#000;right:50%;z-index:10;background-color:black;display:grid;gap:2rem;font-family:'Open Sans', sans-serif;font-size:calc(0.8em + 1vw)}.heading.svelte-1uvz7ez.svelte-1uvz7ez{font-family:'Cormorant Upright', serif;font-size:calc(1.5em + 1vw);display:flex;align-items:center;flex:0.35}.st-containers.svelte-1uvz7ez img.svelte-1uvz7ez{width:100%}.st-containers.svelte-1uvz7ez.svelte-1uvz7ez{width:calc(0.5em + 1vw)}.section-2.svelte-1uvz7ez.svelte-1uvz7ez{flex:1;font-family:'Open Sans', sans-serif;font-size:calc(0.25em + 1vw);display:flex;justify-content:space-evenly;align-items:center}.stickers.svelte-1uvz7ez.svelte-1uvz7ez{display:flex;flex:1;justify-content:space-evenly;align-items:center}.bars.svelte-1uvz7ez.svelte-1uvz7ez{display:none}.section-3.svelte-1uvz7ez.svelte-1uvz7ez{flex:0.3;display:flex;justify-content:space-between;align-items:center}@media(max-width: 1000px){.section-3.svelte-1uvz7ez.svelte-1uvz7ez{flex:0.1}}@media(max-width: 600px){.bars.svelte-1uvz7ez.svelte-1uvz7ez{display:block}.section-3.svelte-1uvz7ez.svelte-1uvz7ez{flex:0.4}.section-1.svelte-1uvz7ez.svelte-1uvz7ez{flex:0.6}.section-2.svelte-1uvz7ez.svelte-1uvz7ez{display:none;flex:0}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getAuth();
  $$result.css.add(css$7);
  return `<div class="navbar svelte-1uvz7ez"><div class="section-1 svelte-1uvz7ez"><a href="/" class="svelte-1uvz7ez"><div class="heading svelte-1uvz7ez">Wine And Dine</div></a></div>

	<div class="section-2 svelte-1uvz7ez"><div class="tags svelte-1uvz7ez"><a href="/" class="svelte-1uvz7ez">Home </a></div>
		<div class="drop-container tags svelte-1uvz7ez">Pages

			${``}</div>
		<div class="tags svelte-1uvz7ez"><a href="/menu" class="svelte-1uvz7ez">Menu </a></div>
		<div class="tags svelte-1uvz7ez"><a href="/shop" class="svelte-1uvz7ez">Shop</a></div>
		<div class="tags svelte-1uvz7ez"><a href="/blog" class="svelte-1uvz7ez">Blog </a></div></div>
	${``}

	<div class="section-3 svelte-1uvz7ez"><div class="stickers svelte-1uvz7ez"><div class="st-containers svelte-1uvz7ez"><img${add_attribute("src", search, 0)} alt="" srcset="" class="svelte-1uvz7ez"></div>

			${``}

			<div class="st-containers bars svelte-1uvz7ez">
				<img${add_attribute("src", bars, 0)} alt="" srcset="" class="svelte-1uvz7ez"></div></div>
		<div class="st-containers svelte-1uvz7ez">${`
				<div class="login svelte-1uvz7ez">Login</div>`}</div></div>
</div>`;
});
const H5_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".heading.svelte-1fkn6pb{font-size:calc(0.8em + 1vw);font-family:'Cormorant Upright', serif;font-weight:600;color:white\r\n    }",
  map: null
};
const H5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css$6);
  return `<div class="heading svelte-1fkn6pb">${escape(heading)}</div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".inbox.svelte-176owki{width:100%;display:flex;justify-content:center}.text-box.svelte-176owki{width:50%;position:relative}input.svelte-176owki{width:100%;height:100%;padding:8px;background-color:#242424;border:none}.text-box.svelte-176owki::before{content:'';position:absolute;background-color:#dcca87;top:95%;left:0;right:0;bottom:0;transform:scaleX(0);transform-origin:left;transition:0.4s all}.text-box.svelte-176owki:hover::before{transform:scaleX(1)}input.svelte-176owki:focus{outline:none}.section.svelte-176owki{display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));gap:1rem;justify-items:center}.footer.svelte-176owki{background-color:#000}.subscription.svelte-176owki{grid-area:3/1/-1/-1;z-index:8;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.modifier.svelte-176owki{border:2px solid #dcca87;grid-area:2/1/-1/-1}.subscribe.svelte-176owki{display:grid;grid-template-columns:repeat(8, 1fr);grid-template-rows:repeat(8, minmax(20px, 80px))}.sticker.svelte-176owki{grid-area:1/2/3/2}img.svelte-176owki{width:100%;height:100%}@media(max-width: 325px){.sticker.svelte-176owki{grid-area:1/2/3/5}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="footer svelte-176owki"><div class="subscribe svelte-176owki"><div class="sticker svelte-176owki"><img${add_attribute("src", scissor$1, 0)} alt="" class="svelte-176owki"></div>
		<div class="modifier svelte-176owki"></div>
		<div class="subscription svelte-176owki"><div>${validate_component(H4, "H4").$$render($$result, { heading: "Newsletter" }, {}, {})}</div>
			<div>${validate_component(H2, "H2").$$render($$result, { heading: "Subscribe To Our Newsletter" }, {}, {})}</div>
			<div>${validate_component(P, "P").$$render($$result, { paragraph: "and never miss updates" }, {}, {})}</div>
			<div class="inbox svelte-176owki"><div class="text-box svelte-176owki"><input type="text" placeholder="Enter Your Email" class="svelte-176owki"></div>
				${validate_component(Button, "Button").$$render($$result, { text: "Subscribe" }, {}, {})}</div></div></div>
	<div class="middle"><div class="section svelte-176owki"><div class="items">${validate_component(H5, "H5").$$render($$result, { heading: "Contact Us" }, {}, {})}

				<div>${validate_component(P, "P").$$render(
    $$result,
    {
      paragraph: "9 W53rd St New York, NY 10019"
    },
    {},
    {}
  )}
					${validate_component(P, "P").$$render($$result, { paragraph: "USA +1212-344-1230 " }, {}, {})}
					${validate_component(P, "P").$$render($$result, { paragraph: "+1212-555-1230" }, {}, {})}</div></div>
			<div class="items">${validate_component(H2, "H2").$$render($$result, { heading: "Wine And Dine" }, {}, {})}</div>
			<div class="items">${validate_component(H5, "H5").$$render($$result, { heading: "Working Hours" }, {}, {})}
				<div>${validate_component(P, "P").$$render($$result, { paragraph: "Monday-Friday:" }, {}, {})}
					${validate_component(P, "P").$$render($$result, { paragraph: "08:00 am -12:00 am" }, {}, {})}
					${validate_component(P, "P").$$render($$result, { paragraph: "Saturday-Sunday:" }, {}, {})}
					${validate_component(P, "P").$$render($$result, { paragraph: "07:00am -11:00 pm" }, {}, {})}</div></div></div></div>
</div>`;
});
const scissor = "/_app/immutable/assets/loaderscicssors.1375b5b5.svg";
const loader = "/_app/immutable/assets/loader.2ce87383.svg";
const backToTop_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".bar.svelte-y8axoq{width:1.5px;height:40px;background-image:linear-gradient(#dcc87a 60%, #000)}.back-to-top.svelte-y8axoq{opacity:1;transition:opacity 0.5s, visibility 0.5s;position:fixed;display:flex;flex-direction:column;align-items:center;z-index:99;right:20px;user-select:none;bottom:20px;color:white;background-color:black;cursor:pointer}.back-to-top.hidden.svelte-y8axoq{opacity:0;visibility:hidden}",
  map: null
};
const BackToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css$4);
  return `


<div class="${["back-to-top svelte-y8axoq", "hidden"].join(" ").trim()}"><div class="bar svelte-y8axoq"></div>
	${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Top" }, {}, {})}
</div>`;
});
const modal_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "dialog.svelte-lfrd2u.svelte-lfrd2u{width:50%;position:fixed;margin:auto;border-radius:0.2em;border:none;padding:0;background-color:#242424;border:2px dotted #aaa;padding:1rem}dialog.svelte-lfrd2u.svelte-lfrd2u::backdrop{background:rgba(0, 0, 0, 0.3)}.para.svelte-lfrd2u.svelte-lfrd2u{cursor:pointer}dialog.svelte-lfrd2u>div.svelte-lfrd2u{padding:1em}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_showLoginModal;
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => value);
  let dialog;
  $$result.css.add(css$3);
  $$unsubscribe_showLoginModal();
  return `
<dialog class="svelte-lfrd2u"${add_attribute("this", dialog, 0)}>
	<div class="svelte-lfrd2u">${slots.default ? slots.default({}) : ``}
		
		<div autofocus class="para svelte-lfrd2u">${validate_component(P, "P").$$render($$result, { paragraph: "Close" }, {}, {})}</div></div>
</dialog>`;
});
const register_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".pointer.svelte-14uf87n{cursor:pointer}.cnbtn.svelte-14uf87n{display:flex;justify-content:space-evenly;flex-direction:column;align-items:center}.text-box.svelte-14uf87n{width:100%;position:relative}input.svelte-14uf87n{width:100%;height:100%;padding:8px;color:#dcca87;background-color:#000;border:none;font-size:calc(0.4em + 1vw)}.text-box.svelte-14uf87n::before{content:'';position:absolute;background-color:#dcca87;top:95%;left:0;right:0;bottom:0;transform:scaleX(0);transform-origin:left;transition:0.4s all}.text-box.svelte-14uf87n:hover::before{transform:scaleX(1)}input.svelte-14uf87n:focus{outline:none}form.svelte-14uf87n{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:2rem}label.svelte-14uf87n{display:flex;flex-direction:column}main.svelte-14uf87n{color:white}",
  map: null
};
const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const userData = {
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    password: "",
    cart: {},
    orders: {}
  };
  getAuth();
  $$result.css.add(css$2);
  return `<div class="cnbtn svelte-14uf87n">${validate_component(H4, "H4").$$render($$result, { heading: "Sign Up" }, {}, {})}</div>
<main class="svelte-14uf87n"><form class="svelte-14uf87n"><label class="svelte-14uf87n">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Name:" }, {}, {})}

			<div class="text-box svelte-14uf87n"><input type="text" required class="svelte-14uf87n"${add_attribute("value", userData.name, 0)}></div></label>
		<label class="svelte-14uf87n">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Email:" }, {}, {})}

			<div class="text-box svelte-14uf87n"><input type="email" required class="svelte-14uf87n"${add_attribute("value", userData.email, 0)}></div></label>

		<label class="svelte-14uf87n">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Password:" }, {}, {})}

			<div class="text-box svelte-14uf87n"><input type="password" class="svelte-14uf87n"${add_attribute("value", userData.password, 0)}></div></label>
		<label class="svelte-14uf87n">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Address:" }, {}, {})}

			<div class="text-box svelte-14uf87n"><input type="text" class="svelte-14uf87n"${add_attribute("value", userData.address, 0)}></div></label>
		<label class="svelte-14uf87n">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Phone:" }, {}, {})}

			<div class="text-box svelte-14uf87n"><input type="tel" class="svelte-14uf87n"${add_attribute("value", userData.phoneNumber, 0)}></div></label></form></main>
<div class="cnbtn svelte-14uf87n">
	<div class="pointer svelte-14uf87n">${validate_component(P, "P").$$render($$result, { paragraph: "Already Have An Account ?" }, {}, {})}</div>

	
	<div>${validate_component(Button, "Button").$$render($$result, { text: "Submit" }, {}, {})}</div>
</div>`;
});
const login_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".pointer.svelte-1mf9fv8{cursor:pointer}.cnbtn.svelte-1mf9fv8{display:flex;justify-content:space-evenly;flex-direction:column;align-items:center}.text-box.svelte-1mf9fv8{width:100%;position:relative}input.svelte-1mf9fv8{width:100%;height:100%;padding:8px;color:#dcca87;background-color:#000;border:none;font-size:calc(0.4em + 1vw)}.text-box.svelte-1mf9fv8::before{content:'';position:absolute;background-color:#dcca87;top:95%;left:0;right:0;bottom:0;transform:scaleX(0);transform-origin:left;transition:0.4s all}.text-box.svelte-1mf9fv8:hover::before{transform:scaleX(1)}input.svelte-1mf9fv8:focus{outline:none}form.svelte-1mf9fv8{display:grid;grid-template-columns:0.5fr;justify-content:space-evenly;gap:2rem}label.svelte-1mf9fv8{display:flex;flex-direction:column}main.svelte-1mf9fv8{color:white}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  getAuth();
  $$result.css.add(css$1);
  return `<div class="cnbtn svelte-1mf9fv8">${validate_component(H4, "H4").$$render($$result, { heading: "Login" }, {}, {})}</div>
<main class="svelte-1mf9fv8"><form class="svelte-1mf9fv8"><label class="svelte-1mf9fv8">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Email:" }, {}, {})}

			<div class="text-box svelte-1mf9fv8"><input type="email" required class="svelte-1mf9fv8"${add_attribute("value", email, 0)}></div></label>
		<br>
		<label class="svelte-1mf9fv8">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: "Password:" }, {}, {})}

			<div class="text-box svelte-1mf9fv8"><input type="password" required class="svelte-1mf9fv8"${add_attribute("value", password, 0)}></div></label>
		<br></form></main>


<div class="cnbtn svelte-1mf9fv8"><div class="pointer svelte-1mf9fv8">${validate_component(P, "P").$$render($$result, { paragraph: "Dont have an account ?" }, {}, {})}</div>
	<div>${validate_component(Button, "Button").$$render($$result, { text: "Submit" }, {}, {})}</div>
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".none.svelte-v16jek.svelte-v16jek{visibility:hidden}.main.svelte-v16jek.svelte-v16jek{position:relative}.center.svelte-v16jek.svelte-v16jek{display:flex;justify-content:space-evenly;align-items:center;position:sticky;top:0;left:0;right:0;bottom:0;z-index:10;width:100%;height:100vh;background-color:#000}.loader-container.svelte-v16jek img.svelte-v16jek{width:80%;object-fit:cover}.loader-container.svelte-v16jek.svelte-v16jek{width:20%}@keyframes svelte-v16jek-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.loader-container.svelte-v16jek.svelte-v16jek{position:relative;animation:2s 1 svelte-v16jek-scale}@keyframes svelte-v16jek-scale{0%{transform:scale(0.2)}100%{transform:scale(1)}}.loader.svelte-v16jek.svelte-v16jek{position:absolute;top:0;left:0;right:0;bottom:0;animation:12s infinite svelte-v16jek-rotate}.container.svelte-v16jek.svelte-v16jek{background-image:radial-gradient(rgba(0, 0, 0, 0.4), #000),\r\n			url(../lib//images//background/background.jpg)}.main.svelte-v16jek.svelte-v16jek{padding:2rem}.svelte-v16jek.svelte-v16jek::-webkit-scrollbar{width:10px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading, $$unsubscribe_isLoading;
  let $showLoginModal, $$unsubscribe_showLoginModal;
  let $haveAccount, $$unsubscribe_haveAccount;
  $$unsubscribe_isLoading = subscribe(loading, (value) => $isLoading = value);
  $$unsubscribe_showLoginModal = subscribe(showLoginModal, (value) => $showLoginModal = value);
  $$unsubscribe_haveAccount = subscribe(haveAccount, (value) => $haveAccount = value);
  loading.set(true);
  getAuth();
  $$result.css.add(css);
  $$unsubscribe_isLoading();
  $$unsubscribe_showLoginModal();
  $$unsubscribe_haveAccount();
  return `<div class="main svelte-v16jek">${$isLoading ? `<div class="center svelte-v16jek"><div class="loader-container svelte-v16jek"><img${add_attribute("src", scissor, 0)} class="scissor svelte-v16jek" alt="">
				<img${add_attribute("src", loader, 0)} class="loader svelte-v16jek" alt=""></div></div>` : ``}

	<div class="${escape(null_to_empty(`container ${$isLoading ? "none" : ""}`), true) + " svelte-v16jek"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

		${$showLoginModal ? `${validate_component(Modal, "Modal").$$render($$result, {}, {}, {
    default: () => {
      return `${$haveAccount ? `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}` : `${validate_component(Register, "Register").$$render($$result, {}, {}, {})}`}`;
    }
  })}` : ``}

		<div class="main svelte-v16jek">${slots.default ? slots.default({}) : ``}</div>
		${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}
		${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>
</div>`;
});
export {
  Layout as default
};
