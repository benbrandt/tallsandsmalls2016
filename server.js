import compression from 'compression';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './app/routes/routes';

const app = express();

app.use(compression());

// serve our static assets
app.use(express.static(path.join(__dirname, 'build')));

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <head>
        <meta charset="UTF-8" />
        <title>Talls and Smalls 201</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
      <script type="text/javascript">
        WebFontConfig = {
          google: { families: [ 'Pacifico::latin', 'Roboto:700,300,300italic:latin' ] }
        };
        (function() {
          var wf = document.createElement('script');
          wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
          wf.type = 'text/javascript';
          wf.async = 'true';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(wf, s);
        })();
      </script>
    </head>
    <body>
      <div id=app>${appHtml}</div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `;
}

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props} />);
      res.send(renderPage(appHtml));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT);
});
