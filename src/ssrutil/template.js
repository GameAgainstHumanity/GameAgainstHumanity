function template(title, initialState = {}, content = '') {
  let scripts = '';
  if (content) {
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="dist/ssr.js"></script>
                `;
  } else {
    scripts = ' <script src="dist/bundle.js"> </script> ';
  }
  const page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="dist/style.css" rel="stylesheet">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->  ${content}
                   </div>
                </div>
                  ${scripts}
              </body>
              </html>
              `;

  return page;
}

module.exports = template;
