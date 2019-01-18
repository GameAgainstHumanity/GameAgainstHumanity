"use strict";

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
function template(title) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var page = "<!DOCTYPE html>\n              <html lang=\"en\">\n              <head>\n                <meta charset=\"utf-8\">\n                <title> Game Against Humanity </title>\n                <link href=\"http://localhost:3001/dist/style.css\" rel=\"stylesheet\">\n              </head>\n              <body>\n                <div class=\"content\">\n                  <div id=\"app\" class=\"wrap-inner\">\n                    <!--- magic happens here -->  ".concat(content, "\n                  </div>\n                </div>\n                <div id=\"root\">hi</div>\n                <script src=\"http://localhost:3001/dist/client.js\" type=\"text/javascript\"></script>\n\n              </body>\n              </html>\n              ");
  return page;
}

module.exports = template;