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
	let p;
	let t2;
	let t3;
	let button;
	let t4;
	let t5;
	let a;
	let t6;
	let mounted;
	let dispose;

	return {
		c() {
			h1 = element("h1");
			t0 = text("About");
			t1 = space();
			p = element("p");
			t2 = text("It is a long established fact that a reader will be distracted by the readable\n  content of a page when looking at its layout. The point of using Lorem Ipsum\n  is that it has a more-or-less normal distribution of letters, as opposed to\n  using 'Content here, content here', making it look like readable English. Many\n  desktop publishing packages and web page editors now use Lorem Ipsum as their\n  default model text, and a search for 'lorem ipsum' will uncover many web sites\n  still in their infancy. Various versions have evolved over the years,\n  sometimes by accident, sometimes on purpose (injected humour and the like).");
			t3 = space();
			button = element("button");
			t4 = text("This is my button");
			t5 = space();
			a = element("a");
			t6 = text("Home");
			this.h();
		},
		l(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "About");
			h1_nodes.forEach(detach);
			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "It is a long established fact that a reader will be distracted by the readable\n  content of a page when looking at its layout. The point of using Lorem Ipsum\n  is that it has a more-or-less normal distribution of letters, as opposed to\n  using 'Content here, content here', making it look like readable English. Many\n  desktop publishing packages and web page editors now use Lorem Ipsum as their\n  default model text, and a search for 'lorem ipsum' will uncover many web sites\n  still in their infancy. Various versions have evolved over the years,\n  sometimes by accident, sometimes on purpose (injected humour and the like).");
			p_nodes.forEach(detach);
			t3 = claim_space(nodes);
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "This is my button");
			button_nodes.forEach(detach);
			t5 = claim_space(nodes);
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			t6 = claim_text(a_nodes, "Home");
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h1, "class", "about svelte-14ktwa5");
			attr(a, "href", "/");
		},
		m(target, anchor) {
			insert_hydration(target, h1, anchor);
			append_hydration(h1, t0);
			insert_hydration(target, t1, anchor);
			insert_hydration(target, p, anchor);
			append_hydration(p, t2);
			insert_hydration(target, t3, anchor);
			insert_hydration(target, button, anchor);
			append_hydration(button, t4);
			insert_hydration(target, t5, anchor);
			insert_hydration(target, a, anchor);
			append_hydration(a, t6);

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
			if (detaching) detach(t1);
			if (detaching) detach(p);
			if (detaching) detach(t3);
			if (detaching) detach(button);
			if (detaching) detach(t5);
			if (detaching) detach(a);
			mounted = false;
			dispose();
		}
	};
}

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