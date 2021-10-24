/*

I would like to make a good overall design and see what people 
like/how people use this product. 

So I'm adding some tracking to this project to see how people are 
using the site.

*/

import { v4 } from "uuid";
import axios from "axios";
import { CoolComponents } from "./pimp-my-readme"
import { isLocal } from "../util/util";

const EVENTS = {
    CLICKED_EXAMPLE: "Clicked Example", // Done
    CLICKED_WAVY_BANNER: "Clicked on Wavy Banner",
    CLICKED_SLIDING_TEXT: "Clicked on Sliding Text",
    CLICKED_VISITORS: "Clicked on Number of Visitors",
    CLICKED_SOCIAL: "Clicked on Social Icons",
    CLICKED_TECH: "Clicked on Technologies", 
    CLICKED_REFRESH_PREVIEW: "Clicked Refresh Preview", // DONE
    CLICKED_COPY_MARKDOWN: "Clicked on Copy Markdown", // DONE
    CLICKED_WEBAPP: "Clicked on webapp.io", // DONE
    CLICKED_GITHUB_REPO: "Clicked on GitHub repo", // Done
}

const getUserId = () => {
    let anonUserId = localStorage.getItem("anon_user_id");
    if (anonUserId === null) {
        anonUserId = v4();
        localStorage.setItem("anon_user_id", anonUserId);
    }
    return anonUserId;
}

const trackSelectedComponent = (key) => {
    if (key === CoolComponents.WavyBanner) {
        trackEvent(EVENTS.CLICKED_WAVY_BANNER);
    } else if (key === CoolComponents.SlidingText) {
        trackEvent(EVENTS.CLICKED_SLIDING_TEXT);
    } else if (key === CoolComponents.SocialMedia) {
        trackEvent(EVENTS.CLICKED_SOCIAL);
    } else if (key === CoolComponents.TopTech) {
        trackEvent(EVENTS.CLICKED_TECH);
    } else if (key === CoolComponents.VisitorCounter) {
        trackEvent(EVENTS.CLICKED_VISITORS);
    }
}

const trackEvent = (eventName = "") => {
    let url = "https://webapp.io/api/segment/event";
    if (isLocal()) {
        url = "http://webapplocal.io/api/segment/event";
    }
    if (eventName === "") return;
    const payload = {
        Email: "",
        AnonUserId: "",
        Event: eventName,
    };
    payload.AnonUserId = getUserId();
    axios.post(url, payload, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    });
}

export {
    EVENTS,
    getUserId,
    trackEvent,
    trackSelectedComponent
}