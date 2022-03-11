const template = (head, html, css, name) => `
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="stylesheet" type="text/css" href="build/bundle.css">
  <script defer type="module" src="build/${name}ClientOutput.js"></script>
  ${head}

  <script type="module">
  import Component from './build/${name}ClientOutput.js'
  new Component({
    target: document.body,
    hydrate: true,
  });
</script>
  <style>
  ${css}
  </style>
</head>

<body>
  ${html}
  <a href="/">Home</a>
</body>

</html>`

exports.default = template;