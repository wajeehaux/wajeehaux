import { P as projects } from "../chunks/project-constants.6nUnrCRU.js";
import { S as Component, i as init, g as createElement, s as space, m as text, A as detach, h as claim_element, f as claim_text, c as children, j as claim_space, n as set_style, x as insert, l as append, y as set_data, a as mount_component, o as destroy_component } from "../chunks/index.EGvn7Pvp.js";

function load({ params }) {
    const project = projects.find(p => p.slug === "information-architecture-workbook");
    if (!project) throw new Error(404);
    return { ...project };
}

const prerender = true;

function create_fragment(ctx) {
    let meta;
    let t0;
    let section;
    let div0;
    let div1;
    let h1;
    let t1;
    let t2;
    let p0;
    let t3;
    let t4;
    let p1;
    let t5;
    let t6;
    let div2;
    let div3;
    let t7;
    let p2;
    let t8;
    let t9;
    let h2;
    let t10;
    let t11;
    let div4;
    let each_blocks = [];
    let each_1_lookup = new Map();
    let each_value = ctx[0].allImages;
    const get_key = ctx => ctx[1];
    
    for (let i = 0; i < each_value.length; i++) {
        let child_ctx = get_each_context(ctx, each_value, i);
        let key = get_key(child_ctx);
        each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
    }

    return {
        c() {
            meta = createElement("meta");
            t0 = space();
            section = createElement("section");
            div0 = createElement("div");
            div1 = createElement("div");
            h1 = createElement("h1");
            t1 = text(ctx[0].title);
            t2 = space();
            p0 = createElement("p");
            t3 = text(ctx[0].subtitle);
            t4 = space();
            p1 = createElement("p");
            t5 = text(ctx[0].date);
            t6 = space();
            div2 = createElement("div");
            div3 = createElement("div");
            t7 = text("Project overview");
            t8 = space();
            p2 = createElement("p");
            t9 = text(ctx[0].description);
            t10 = space();
            h2 = createElement("h2");
            t11 = text("Design");
            div4 = createElement("div");
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
        },
        m(target, anchor) {
            insert(document.head, meta, null);
            insert(target, t0, anchor);
            insert(target, section, anchor);
            append(section, div0);
            append(div0, div1);
            append(div1, h1);
            append(h1, t1);
            append(div1, t2);
            append(div1, p0);
            append(p0, t3);
            append(div1, t4);
            append(div1, p1);
            append(p1, t5);
            append(div0, t6);
            append(div0, div2);
            append(div2, div3);
            append(div3, t7);
            append(div2, t8);
            append(div2, p2);
            append(p2, t9);
            append(section, t10);
            append(section, h2);
            append(h2, t11);
            append(section, div4);
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(div4, null);
        },
        p(ctx, [dirty]) {
            if (dirty & /*data*/ 1) set_data(t1, ctx[0].title);
            if (dirty & /*data*/ 1) set_data(t3, ctx[0].subtitle);
            if (dirty & /*data*/ 1) set_data(t5, ctx[0].date);
            if (dirty & /*data*/ 1) set_data(t9, ctx[0].description);
        },
        d(detaching) {
            if (detaching) detach(meta);
            if (detaching) detach(t0);
            if (detaching) detach(section);
        }
    };
}

function get_each_context(ctx, list, i) {
    return [ctx[0], list[i], i];
}

function create_each_block(key, ctx) {
    let img;

    return {
        c() {
            img = createElement("img");
            set_style(img, "max-width", "100%");
            set_style(img, "height", "auto");
            img.src = ctx[1];
        },
        m(target, anchor) {
            insert(target, img, anchor);
        },
        p: () => {},
        d(detaching) {
            if (detaching) detach(img);
        }
    };
}

function instance($$self, $$props, $$invalidate) {
    let { data } = $$props;
    $$self.$$set = $$props => {
        if ('data' in $$props) $$invalidate(0, data = $$props.data);
    };
    return [data];
}

class InformationArchitectureWorkbook extends Component {
    constructor(options) {
        super();
        init(this, options, instance, create_fragment, J, { data: 0 });
    }
}

export { InformationArchitectureWorkbook as component, prerender, load };
