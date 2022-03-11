/* generated by Svelte v3.46.4 */
import {
	SvelteComponent,
	append_hydration,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert_hydration,
	listen,
	noop,
	safe_not_equal,
	space,
	text
} from "svelte/internal";

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let t2;
	let h2;
	let t3;
	let t4;
	let p;
	let t5;
	let t6;
	let button;
	let t7;
	let mounted;
	let dispose;

	return {
		c() {
			h1 = element("h1");
			t0 = text("Hello ");
			t1 = text(textHello);
			t2 = space();
			h2 = element("h2");
			t3 = text("Hello this is heading 2");
			t4 = space();
			p = element("p");
			t5 = text("It is a long established fact that a reader will be distracted by the readable\n  content of a page when looking at its layout. The point of using Lorem Ipsum\n  is that it has a more-or-less normal distribution of letters, as opposed to\n  using 'Content here, content here', making it look like readable English. Many\n  desktop publishing packages and web page editors now use Lorem Ipsum as their\n  default model text, and a search for 'lorem ipsum' will uncover many web sites\n  still in their infancy. Various versions have evolved over the years,\n  sometimes by accident, sometimes on purpose (injected humour and the like).");
			t6 = space();
			button = element("button");
			t7 = text("This is my button");
			this.h();
		},
		l(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Hello ");
			t1 = claim_text(h1_nodes, textHello);
			h1_nodes.forEach(detach);
			t2 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, "Hello this is heading 2");
			h2_nodes.forEach(detach);
			t4 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t5 = claim_text(p_nodes, "It is a long established fact that a reader will be distracted by the readable\n  content of a page when looking at its layout. The point of using Lorem Ipsum\n  is that it has a more-or-less normal distribution of letters, as opposed to\n  using 'Content here, content here', making it look like readable English. Many\n  desktop publishing packages and web page editors now use Lorem Ipsum as their\n  default model text, and a search for 'lorem ipsum' will uncover many web sites\n  still in their infancy. Various versions have evolved over the years,\n  sometimes by accident, sometimes on purpose (injected humour and the like).");
			p_nodes.forEach(detach);
			t6 = claim_space(nodes);
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			t7 = claim_text(button_nodes, "This is my button");
			button_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h1, "class", "greeting svelte-9led3h");
		},
		m(target, anchor) {
			insert_hydration(target, h1, anchor);
			append_hydration(h1, t0);
			append_hydration(h1, t1);
			insert_hydration(target, t2, anchor);
			insert_hydration(target, h2, anchor);
			append_hydration(h2, t3);
			insert_hydration(target, t4, anchor);
			insert_hydration(target, p, anchor);
			append_hydration(p, t5);
			insert_hydration(target, t6, anchor);
			insert_hydration(target, button, anchor);
			append_hydration(button, t7);

			if (!mounted) {
				dispose = listen(button, "click", /*click_handler*/ ctx[0]);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h1);
			if (detaching) detach(t2);
			if (detaching) detach(h2);
			if (detaching) detach(t4);
			if (detaching) detach(p);
			if (detaching) detach(t6);
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

let textHello = "word";

function instance($$self) {
	const click_handler = () => {
		console.log("Hello");
	};

	return [click_handler];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;