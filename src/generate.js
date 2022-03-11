
const svelteCompiler = require('svelte/compiler')
const fs  = require('fs')
const path = require('path')

const SvelteComponent = fs.readFileSync(path.resolve(__dirname, './Example.svelte'), 'utf8')

// ServerSide
const { js } = svelteCompiler.compile(SvelteComponent, { generate: "ssr", format: "cjs", hydratable: true})


// ClientSide
const { js: script } = svelteCompiler.compile(SvelteComponent, { generate: "dom", format: "esm", css: false, hydratable: true})

fs.writeFileSync('./src/ssrOutput.js', js.code)
fs.writeFileSync('./src/clientOutput.js', script.code)

const {default: ssrComponent} = require('./ssrOutput.js')

const { html, head, css } = ssrComponent.render({textHello: "World"})

const { default: template } =  require('./template.js')

// const { default: ClientComponent } =  require('./clientOutput.js')

fs.writeFileSync('./public/index.html', template(head, html))


// console.log("hello")
// const app = new ClientComponent({
// 	target: document.body,
// 	hydrate: true,
// 	props: {
// 		textHello: 'world'
// 	}
// });


// exports.default = app;