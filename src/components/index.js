import React from "react";
import { hydrate } from "react-dom";
import GithubReadMeBuilder from "./pimp-my-readme/home";
hydrate(<GithubReadMeBuilder />, document.getElementById("reactele"));