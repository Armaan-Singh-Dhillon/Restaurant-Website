import { c as create_ssr_component, h as createEventDispatcher, d as each, e as escape, v as validate_component } from "../../../chunks/index2.js";
/* empty css                                                    *//* empty css                                                     *//* empty css                                                *//* empty css                                                */import "siema";
/* empty css                                                      *//* empty css                                                     *//* empty css                                                  */import "../../../chunks/dishes.js";
import { l as loading } from "../../../chunks/globalLoader.js";
const Thumb_svelte_svelte_type_style_lang = "";
const Slider_svelte_svelte_type_style_lang = "";
const shopBar_svelte_svelte_type_style_lang = "";
function paginate({ items, pageSize: pageSize2, currentPage }) {
  return items.slice((currentPage - 1) * pageSize2, (currentPage - 1) * pageSize2 + pageSize2);
}
var SymbolType;
(function(SymbolType2) {
  SymbolType2["PREVIOUS_PAGE"] = "PREVIOUS_PAGE";
  SymbolType2["NEXT_PAGE"] = "NEXT_PAGE";
  SymbolType2["ELLIPSIS"] = "ELLIPSIS";
})(SymbolType || (SymbolType = {}));
function generateNavigationOptions({ totalItems, pageSize: pageSize2, currentPage, limit, showStepOptions = false }) {
  const totalPages = Math.ceil(totalItems / pageSize2);
  const limited = limit && totalPages > getLimitThreshold(limit);
  const options = limited ? generateLimitedOptions({ totalPages, limit, currentPage }) : generateUnlimitedOptions({ totalPages });
  return showStepOptions ? addStepOptions({ options, currentPage, totalPages }) : options;
}
function generateUnlimitedOptions({ totalPages }) {
  return new Array(totalPages).fill(null).map((_, index) => ({
    type: "number",
    value: index + 1
  }));
}
function generateLimitedOptions({ totalPages, limit, currentPage }) {
  const boundarySize = limit * 2 + 2;
  const firstBoundary = 1 + boundarySize;
  const lastBoundary = totalPages - boundarySize;
  const totalShownPages = firstBoundary + 2;
  if (currentPage <= firstBoundary - limit) {
    return Array(totalShownPages).fill(null).map((_, index) => {
      if (index === totalShownPages - 1) {
        return {
          type: "number",
          value: totalPages
        };
      } else if (index === totalShownPages - 2) {
        return {
          type: "symbol",
          symbol: SymbolType.ELLIPSIS,
          value: firstBoundary + 1
        };
      }
      return {
        type: "number",
        value: index + 1
      };
    });
  } else if (currentPage >= lastBoundary + limit) {
    return Array(totalShownPages).fill(null).map((_, index) => {
      if (index === 0) {
        return {
          type: "number",
          value: 1
        };
      } else if (index === 1) {
        return {
          type: "symbol",
          symbol: SymbolType.ELLIPSIS,
          value: lastBoundary - 1
        };
      }
      return {
        type: "number",
        value: lastBoundary + index - 2
      };
    });
  } else if (currentPage >= firstBoundary - limit && currentPage <= lastBoundary + limit) {
    return Array(totalShownPages).fill(null).map((_, index) => {
      if (index === 0) {
        return {
          type: "number",
          value: 1
        };
      } else if (index === 1) {
        return {
          type: "symbol",
          symbol: SymbolType.ELLIPSIS,
          value: currentPage - limit + (index - 2)
        };
      } else if (index === totalShownPages - 1) {
        return {
          type: "number",
          value: totalPages
        };
      } else if (index === totalShownPages - 2) {
        return {
          type: "symbol",
          symbol: SymbolType.ELLIPSIS,
          value: currentPage + limit + 1
        };
      }
      return {
        type: "number",
        value: currentPage - limit + (index - 2)
      };
    });
  }
  return [];
}
function addStepOptions({ options, currentPage, totalPages }) {
  return [
    {
      type: "symbol",
      symbol: SymbolType.PREVIOUS_PAGE,
      value: currentPage <= 1 ? 1 : currentPage - 1
    },
    ...options || [],
    {
      type: "symbol",
      symbol: SymbolType.NEXT_PAGE,
      value: currentPage >= totalPages ? totalPages : currentPage + 1
    }
  ];
}
function getLimitThreshold(limit) {
  const maximumUnlimitedPages = 3;
  const numberOfBoundaryPages = 2;
  return limit * 2 + maximumUnlimitedPages + numberOfBoundaryPages;
}
const PaginationNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let totalPages;
  createEventDispatcher();
  let { totalItems = 0 } = $$props;
  let { pageSize: pageSize2 = 1 } = $$props;
  let { currentPage = 1 } = $$props;
  let { limit = void 0 } = $$props;
  let { showStepOptions = false } = $$props;
  if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0)
    $$bindings.totalItems(totalItems);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize2 !== void 0)
    $$bindings.pageSize(pageSize2);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.showStepOptions === void 0 && $$bindings.showStepOptions && showStepOptions !== void 0)
    $$bindings.showStepOptions(showStepOptions);
  options = generateNavigationOptions({
    totalItems,
    pageSize: pageSize2,
    currentPage,
    limit,
    showStepOptions
  });
  totalPages = Math.ceil(totalItems / pageSize2);
  return `<div class="pagination-nav">${each(options, (option) => {
    return `<span class="${[
      "option",
      (option.type === "number" ? "number" : "") + " " + (option.type === "symbol" && option.symbol === SymbolType.PREVIOUS_PAGE ? "prev" : "") + " " + (option.type === "symbol" && option.symbol === SymbolType.NEXT_PAGE ? "next" : "") + " " + (option.type === "symbol" && option.symbol === SymbolType.NEXT_PAGE && currentPage >= totalPages || option.type === "symbol" && option.symbol === SymbolType.PREVIOUS_PAGE && currentPage <= 1 ? "disabled" : "") + " " + (option.type === "symbol" && option.symbol === SymbolType.ELLIPSIS ? "ellipsis" : "") + " " + (option.type === "number" && option.value === currentPage ? "active" : "")
    ].join(" ").trim()}" role="presentation">${option.type === "number" ? `${slots.number ? slots.number({ value: option.value }) : `
          <span>${escape(option.value)}</span>
        `}` : `${option.type === "symbol" && option.symbol === SymbolType.ELLIPSIS ? `${slots.ellipsis ? slots.ellipsis({}) : `
          <span>...</span>
        `}` : `${option.type === "symbol" && option.symbol === SymbolType.PREVIOUS_PAGE ? `${slots.prev ? slots.prev({}) : `
          <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg>
        `}` : `${option.type === "symbol" && option.symbol === SymbolType.NEXT_PAGE ? `${slots.next ? slots.next({}) : `
          <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
        `}` : ``}`}`}`}
    </span>`;
  })}</div>`;
});
const LightPaginationNav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".light-pagination-nav.svelte-s5ru8s .pagination-nav{display:flex;justify-content:center;background:#FFF;border-radius:3px;box-shadow:0 1px 2px rgba(0, 0, 0, 0.3)}.light-pagination-nav.svelte-s5ru8s .option{padding:10px;display:flex;align-items:center;justify-content:center;transition:0.2s all ease-out;user-select:none;color:hsl(200, 90%, 10%)}.light-pagination-nav.svelte-s5ru8s .option.number,.light-pagination-nav.svelte-s5ru8s .option.ellipsis{padding:10px 15px}.light-pagination-nav.svelte-s5ru8s .option:hover{background:rgba(0, 0, 0, 0.1);cursor:pointer}.light-pagination-nav.svelte-s5ru8s .option.active{color:hsl(200, 70%, 50%)}",
  map: null
};
const LightPaginationNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="light-pagination-nav svelte-s5ru8s">${validate_component(PaginationNav, "PaginationNav").$$render($$result, Object.assign({}, $$props), {}, {})}
</div>`;
});
const DarkPaginationNav_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tag-container.svelte-1ghmzk2.svelte-1ghmzk2{display:flex;flex-wrap:wrap}.tags.svelte-1ghmzk2.svelte-1ghmzk2{background-color:#242424;color:#aaa;font-family:'Noto Serif Georgian', serif;font-size:calc(0.6em + 0.6vw);padding:5px;margin:0.2rem 0.5rem;transition:all 0.5s ease-in-out}.tags.svelte-1ghmzk2.svelte-1ghmzk2:hover{color:#dcca87;cursor:pointer;scale:1.1}a.svelte-1ghmzk2.svelte-1ghmzk2{text-decoration:none}.back.svelte-1ghmzk2 img.svelte-1ghmzk2{height:400px}.image-container.svelte-1ghmzk2.svelte-1ghmzk2{overflow:hidden;position:relative}.image-container.svelte-1ghmzk2 img.svelte-1ghmzk2{width:100%;aspect-ratio:9/10;object-fit:cover;transition:all 0.5s ease-in-out}.image-container.svelte-1ghmzk2 img.svelte-1ghmzk2:hover{scale:1.4;opacity:0.5}.back-container.svelte-1ghmzk2 img.svelte-1ghmzk2{width:100%;object-fit:cover;opacity:0.8}.back-container.svelte-1ghmzk2.svelte-1ghmzk2{position:relative}.back-head.svelte-1ghmzk2.svelte-1ghmzk2{position:absolute;z-index:1;top:50%;text-align:center;width:100%;transform:translateY(-50%)}.container.svelte-1ghmzk2.svelte-1ghmzk2{display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));gap:1vw;margin:8rem 0}.sidebar.svelte-1ghmzk2.svelte-1ghmzk2{grid-column:span 2 / auto;grid-row:span 2 / auto}.item.svelte-1ghmzk2.svelte-1ghmzk2{grid-column:span 2 / auto;max-height:450px;background-color:rgb(0, 0, 0);display:flex;flex-direction:column;align-items:center}@media(min-width: 1600px){.container.svelte-1ghmzk2.svelte-1ghmzk2{grid-template-columns:repeat(auto-fit, minmax(200px, 1fr))}}@media(max-width: 768px){.container.svelte-1ghmzk2.svelte-1ghmzk2{display:flex;flex-direction:column;align-items:center}.sidebar.svelte-1ghmzk2.svelte-1ghmzk2{width:100%}}",
  map: null
};
let pageSize = 6;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [];
  let currentPage = 1;
  loading.set(true);
  $$result.css.add(css);
  paginate({ items, pageSize, currentPage });
  return `${``}
${validate_component(LightPaginationNav, "LightPaginationNav").$$render(
    $$result,
    {
      totalItems: items.length,
      pageSize,
      currentPage,
      limit: 1,
      showStepOptions: true
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
