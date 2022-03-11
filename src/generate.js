
const svelteCompiler = require('svelte/compiler')
const fs  = require('fs')
const path = require('path')

const files = ['bundle', 'about']



console.log("Generating Startedd")
for(let i = 0; i < files.length; i++) {
  const fileName = files[i]
  const SvelteComponent = fs.readFileSync(path.resolve(__dirname, `./routes/${fileName}.svelte`), 'utf8')

  // console.log(SvelteComponent)
  const { js } = svelteCompiler.compile(SvelteComponent, { generate: "ssr", format: "cjs", hydratable: true})

  const ssrComponent = eval(js.code)
  const { html, head, css } = ssrComponent.render()
  const { default: template } =  require('./template.js')

  fs.writeFileSync(`./public/${fileName}.html`, template(head, html, css.code, fileName))

  const { js: script } = svelteCompiler.compile(SvelteComponent, { generate: "dom", format: "esm", css: false, hydratable: true})
  fs.writeFileSync(`./src/${fileName}ClientOutput.js`, script.code)
}

console.log("Generating ended")