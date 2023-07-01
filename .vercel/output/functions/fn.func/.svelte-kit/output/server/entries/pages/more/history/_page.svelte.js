import { c as create_ssr_component, s as setContext, a as add_attribute, g as getContext, e as escape, n as null_to_empty, f as compute_slots, v as validate_component, d as each } from "../../../../chunks/index2.js";
import { L as Laurel, H as HIstoryBar } from "../../../../chunks/Laurel.js";
import { I as InnerH3 } from "../../../../chunks/innerH3.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { h as hex } from "../../../../chunks/hex.js";
import "../../../../chunks/P.js";
import { I as InnerH1 } from "../../../../chunks/innerH1.js";
const Timeline_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".timeline.svelte-1qx6lg0{display:flex;flex-direction:column;padding:6px 16px;flex-grow:1}",
  map: null
};
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { position = "right" } = $$props;
  let { style = null } = $$props;
  setContext("TimelineConfig", { rootPosition: position });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$5);
  return `<ul class="timeline svelte-1qx6lg0"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}
</ul>`;
});
const TimelineItem_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".alternate:nth-of-type(even) > .timeline-content{text-align:right}.alternate:nth-of-type(odd) > .timeline-opposite-content{text-align:right}.opposite-block.svelte-77d8h8{flex:1;margin:6px 16px}.timeline-item.svelte-77d8h8{list-style:none;display:flex;position:relative;min-height:70px}.left.svelte-77d8h8{flex-direction:row-reverse}.right.svelte-77d8h8{flex-direction:row}.alternate.svelte-77d8h8:nth-of-type(even){flex-direction:row-reverse}.alternate.svelte-77d8h8:nth-of-type(odd){flex-direction:row}",
  map: null
};
const TimelineItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { position = null } = $$props;
  let { style = null } = $$props;
  const config = getContext("TimelineConfig");
  const itemPosition = position ? position : config.rootPosition;
  setContext("ParentPosition", itemPosition);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$4);
  return `<li class="${escape(null_to_empty(`timeline-item ${itemPosition}`), true) + " svelte-77d8h8"}"${add_attribute("style", style, 0)}>${!$$slots["opposite-content"] ? `<div class="opposite-block svelte-77d8h8"></div>` : `${slots["opposite-content"] ? slots["opposite-content"]({}) : ``}`}
	${slots.default ? slots.default({}) : ``}
</li>`;
});
const TimelineSeparator_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".timeline-separator.svelte-6e6s8c{display:flex;flex-direction:column;flex:0;align-items:center}",
  map: null
};
const TimelineSeparator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = null } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$3);
  return `<div class="timeline-separator svelte-6e6s8c"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const TimelineDot_svelte_svelte_type_style_lang = "";
const TimelineConnector_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".timeline-connector.svelte-1usms3k{width:2px;background-color:#bdbdbd;flex-grow:1}",
  map: null
};
const TimelineConnector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = null } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$2);
  return `<span class="timeline-connector svelte-1usms3k"${add_attribute("style", style, 0)}></span>`;
});
const TimelineContent_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".timeline-content.svelte-ov1kt8{margin:0;flex:1;margin:6px 16px}.left.svelte-ov1kt8{text-align:right}.right.svelte-ov1kt8{text-align:left}",
  map: null
};
const TimelineContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = null } = $$props;
  const config = getContext("TimelineConfig");
  const parentPosition = getContext("ParentPosition");
  const itemPosition = parentPosition ? parentPosition : config.rootPosition;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$1);
  return `<div class="${escape(null_to_empty(`timeline-content ${itemPosition}`), true) + " svelte-ov1kt8"}"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const TimelineOppositeContent_svelte_svelte_type_style_lang = "";
const timeline_svelte_svelte_type_style_lang = "";
const css = {
  code: ".para.svelte-ya544j{font-size:calc(0.4em + 1vw);color:#aaa}.heading.svelte-ya544j{font-family:'Noto Serif Georgian', serif;font-weight:300;color:#dcca87;font-size:calc(0.4em + 1vw)}.yearleft.svelte-ya544j{position:absolute;bottom:0;left:0;z-index:10}.yearright.svelte-ya544j{position:absolute;bottom:0;right:0;z-index:10}.stickerleft.svelte-ya544j{position:absolute;width:80%;top:20%;left:0;transform:translateY(-50%);z-index:8;padding:1rem;border:2px dotted #aaa;background-color:#242424}.stickerright.svelte-ya544j{position:absolute;width:80%;top:20%;right:0;transform:translateY(-50%);background-color:#242424;padding:1rem;border:1px dotted #aaa;z-index:8}.card.svelte-ya544j{height:400px;position:relative}.cardimgleft.svelte-ya544j{width:50%;height:100%;object-fit:cover;position:absolute;left:0;z-index:1}.cardimgright.svelte-ya544j{width:50%;height:100%;object-fit:cover;position:absolute;right:0;z-index:1}.points.svelte-ya544j{width:12px}",
  map: null
};
const Timeline_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const timelineData = [
    {
      time: "1930",
      title: "Restaurant Inauguration",
      image: "restaurant-interior.jpg",
      description: "The luxury restaurant opens its doors for the first time."
    },
    {
      time: "1940",
      title: "Expansion of Cuisines",
      image: "cusines.jpg",
      description: "Introduction of French and Italian cuisines to the menu."
    },
    {
      time: "1955",
      title: "Renovation and Redesign",
      image: "renovation.jpg",
      description: "The restaurant undergoes a major renovation and revamps its interior design."
    },
    {
      time: "1962",
      title: "Increase in Staff",
      image: "increase-chef.jpg",
      description: "Expansion of the restaurant's team to cater to growing demand."
    },
    {
      time: "1975",
      title: "Receiving Michelin Star",
      image: "michelin.png",
      description: "The restaurant is awarded a prestigious Michelin star for culinary excellence."
    },
    {
      time: "1988",
      title: "Launch of Signature Dish",
      image: "signature.jpg",
      description: "The restaurant introduces its iconic signature dish, becoming a customer favorite."
    },
    {
      time: "2005",
      title: "Expansion to International Locations",
      image: "international.jpg",
      description: "The restaurant opens branches in major cities around the world."
    },
    {
      time: "2020",
      title: "Receiving James Beard Award",
      image: "james.jpg",
      description: "The restaurant is honored with a prestigious James Beard Award."
    }
  ];
  $$result.css.add(css);
  return `<div class="container"><div>${validate_component(H2, "H2").$$render($$result, { heading: "Timeline" }, {}, {})}</div>
	${`${validate_component(Timeline, "Timeline").$$render($$result, { position: "alternate" }, {}, {
    default: () => {
      return `${each(timelineData, (option, i) => {
        return `${validate_component(TimelineItem, "TimelineItem").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TimelineSeparator, "TimelineSeparator").$$render($$result, {}, {}, {
              default: () => {
                return `<img${add_attribute("src", hex, 0)} alt="" srcset="" class="points svelte-ya544j">
						${validate_component(TimelineConnector, "TimelineConnector").$$render($$result, { style: "width: 1px;" }, {}, {})}
					`;
              }
            })}
					${validate_component(TimelineContent, "TimelineContent").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="card svelte-ya544j"><div class="${escape(null_to_empty(`${(i + 1) % 2 != 0 ? "stickerleft" : "stickerright"}`), true) + " svelte-ya544j"}">${validate_component(InnerH3, "InnerH3").$$render($$result, { heading: option.title }, {}, {})}
								<div class="para svelte-ya544j">${escape(option.description)}
								</div></div>
							<img${add_attribute("src", `../../src/lib/images/timeline/${option.image}`, 0)} alt="" srcset="" class="${escape(null_to_empty(`${(i + 1) % 2 == 0 ? "cardimgleft" : "cardimgright"}`), true) + " svelte-ya544j"}">
							<div class="${escape(null_to_empty(`${(i + 1) % 2 != 0 ? "yearleft" : "yearright"}`), true) + " svelte-ya544j"}">${validate_component(InnerH1, "InnerH1").$$render($$result, { heading: option.time }, {}, {})}
							</div></div>
					`;
              }
            })}
				`;
          }
        })}`;
      })}`;
    }
  })}`}</div>
`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Laurel, "Laurel").$$render($$result, {}, {}, {})}
${validate_component(HIstoryBar, "HIstoryBar").$$render($$result, {}, {}, {})}

${validate_component(Timeline_1, "Timeline").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
