import React from "react";
import { hydrate } from "react-dom";
import GithubReadMeBuilder from "./pimp-my-readme/home";

const MainWrapper = () => (
    <GithubReadMeBuilder />
)
hydrate(<MainWrapper />, document.getElementById("reactele"));