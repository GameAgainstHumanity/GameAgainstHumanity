// function template(title, initialState = {}, content = '') {
//   const page = `<!DOCTYPE html>
//               <html lang="en">
//               <head>
//                 <meta charset="utf-8">
//                 <title> Game Against Humanity </title>
//                 <link href="dist/style.css" rel="stylesheet">
//               </head>
//               <body>
//                 <div class="content">
//                   <div id="app" class="wrap-inner">
//                     <!--- magic happens here -->  ${content}
//                   </div>
//                 </div>
//                 <div id="root">hi</div>
//                 <script src="client.js" type="text/javascript"></script>
//               </body>
//               </html>
//               `;

//   return page;
// }

function template(title, initialState = {}, content = '') {
  const page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> Game Against Humanity </title>
                <link href="http://localhost:3001/dist/style.css" rel="stylesheet">
              </head>
              <body>
                <div class="content">
                  <div id="app" class="wrap-inner">
                    <!--- magic happens here -->  ${content}
                  </div>
                </div>
                <div id="root">hi</div>
                <script src="http://localhost:3001/dist/client.js" type="text/javascript"></script>

              </body>
              </html>
              `;

  return page;
}

module.exports = template;
