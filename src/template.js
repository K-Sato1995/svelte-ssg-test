const template = (head, html, css) => `
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="stylesheet" type="text/css" href="build/bundle.css">
  <script defer src="build/bundle.js"></script>
  ${head}
  <style>
  ${css}
  </style>
</head>

<body>
  ${html}
</body>

</html>`

exports.default = template;