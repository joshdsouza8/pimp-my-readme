import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";
import GithubReadMeBuilder from "../components/pimp-my-readme/home";

const router = express.Router();

router.get("/", async (req, res) => {
  const theHtml = `
  <html>
  <head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="icon" href="/jellybear.png">
  <title>Pimp my README</title>
  <meta property="og:image" content="/jellybear-lg.png">
  <meta name="description" content="Let's bring the blink elements back! Pimp my README is an open source profile builder that you can use to add some cool components to your markdown profiles - Made with <3 by webapp.io :)">
  </head>
  <body>
  <div id="reactele">{{{reactele}}}</div>
  <script src="/app.js" charset="utf-8"></script>
  <script src="/vendor.js" charset="utf-8"></script>
  </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(<GithubReadMeBuilder />);
  const htmlToSend = hbsTemplate({ reactele: reactComp });
  res.send(htmlToSend);
});

export default router;