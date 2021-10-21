import React, { useState, useContext, useEffect } from "react";
import { CommonTextField } from "../common/CommonTextField";
import { MarkdownPreviewContext } from "../common/EditCoolComponent";
import queryString from "query-string";
let origin = "https://github-readme.webapp.io";

const WavyBanner = () => {
    const { setSrc, setMarkdown } = useContext(MarkdownPreviewContext);
    const [title, setTitle] = useState("Jellybear");
    const [subtitle, setSubtitle] = useState("I'm the webapp.io mascot :)");

    useEffect(() => {
        origin = window.location.origin;
    }, []);

    useEffect(() => {
        const params = {
            title: title,
            subtitle: subtitle,
        }
        const query = queryString.stringify(params);
        const source = `/github-readme-builder/wavy-banner?${query}`;
        const md = `[![${title}, ${subtitle}](${origin}/github-readme-builder/wavy-banner?${query})](${origin})`;
        setSrc(source);
        setMarkdown(md);
    }, [title, subtitle]);

    return (
        <div className="d-block">
            <CommonTextField
                name="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <CommonTextField
                name="Subtitle"
                value={subtitle}
                onChange={e => setSubtitle(e.target.value)}
            />
        </div>
    )
}

export default WavyBanner;