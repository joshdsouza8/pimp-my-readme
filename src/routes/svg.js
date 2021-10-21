import express, { Router } from "express";
import { ChevronRight } from "react-feather";
const router = express.Router();
const {
    getSlidingTextWithEmojis, getWavyBanner, getVisitorCounter, getSocialIcons, getTechnologiesSvg,
} = require("../util/svg");
const {
    getSocialMediaSVG, getTechnologySVG,
} = require("../util/svg-helper");
const axios = require("axios").default;
const { encodeStringForHTML } = require("../util/util");


router.get("/sliding-text", (req, res) => {

    // Get Query Params
    const text = decodeURIComponent(req.query.text) || "webapp.io github readme builder";
    const emojis = decodeURIComponent(req.query.emojis) || "";

    // Get the Emoji's
    const emojiArray = emojis.split("_");
    const emojiAsHtml = emojiArray.reduce((str, emoji) => {
        // Set the Emoji
        let tempString = `&#x${emoji};`;

        // Check if Emoji has other attributes and add in a string
        if (emoji.includes("-")) {
            tempString = emojis.split("-").reduce((tempStr, attr) => {
                return tempStr + `&#x${attr};`;
            }, "");
        }

        // Return back the emoji in a span element
        if (emoji.length > 0) {
            return str + `<span class="emoji">${tempString}</span>`
        }

        return str;
    }, "");

    const svg = getSlidingTextWithEmojis(encodeStringForHTML(text), emojiAsHtml);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svg);
})

router.get("/wavy-banner", (req, res) => {
    // Get Query Params
    const title = req.query.title || "webapp.io";
    const subtitle = req.query.subtitle || "review code changes like Facebook does"
    const svg = getWavyBanner(encodeStringForHTML(title), encodeStringForHTML(subtitle));
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svg);
})

router.get("/visitor-counter", async (req, res) => {
    // Get Query params
    const page = req.query.page;
    const response = await axios.get(`https://api.countapi.xyz/hit/webappio/${page}`);
    const data = response.data || 1;
    const svg = getVisitorCounter(data.value);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svg);
})

router.get("/social-media", async (req, res) => {
    const social = req.query.social || "";
    const socialSvg = getSocialMediaSVG(social);
    const svg = getSocialIcons(socialSvg);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svg);
})

router.get("/technology", (req, res) => {
    const technology = req.query.technology || "webapp.io";
    
    const technologies = technology.split("_").reduce((str, tech) => {
        if (tech.length > 0) {
            const { svg, text } = getTechnologySVG(tech);  
            return str + `
            <div class="item">
                ${svg}
                <p class="item-text">
                 ${text}
                </p>
            </div>
            `;
        }
        return str;
    }, "");

    const svg = getTechnologiesSvg(technologies);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svg);
})

export default router;