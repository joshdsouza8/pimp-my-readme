import React, { useState, createContext, useEffect } from "react";
import { MarkdownCopy } from "./MarkdownCopy";
import "../../../styles/github-readme-builder.scss";
import {CoolComponents, PREVIEW_SOURCES} from "../index";
import WavyBanner from "../svgs/WavyBanner";
import SlidingText from "../svgs/SlidingText";
import SocialMedia from "../svgs/SocialMedia";
import VisitorCounter from "../svgs/VisitorCounter";
import Technology from "../svgs/Technology";

const MarkdownPreviewContext = createContext({});

const EditCoolComponent = ({ component }) => {
    const [src, setSrc] = useState(PREVIEW_SOURCES.WavyBanner.src)
    const [markdown, setMarkdown] = useState("")
    const [tempSource, setTempSource] = useState(src);
    const values = {
        setSrc,
        setMarkdown,
    };

    useEffect(() => {
        setTempSource(PREVIEW_SOURCES[component].src);
    }, [component]);

    return (
        <MarkdownPreviewContext.Provider value={values}>
            <div className="d-block">
                {
                    component === CoolComponents.SlidingText ?
                        <SlidingText />
                        :
                    component === CoolComponents.SocialMedia ?
                        <SocialMedia />
                    :
                    component === CoolComponents.VisitorCounter ?
                        <VisitorCounter />
                    :
                    component === CoolComponents.WavyBanner ?
                        <WavyBanner />
                    :
                    component === CoolComponents.TopTech ?
                        <Technology />
                    :
                    null
                }

                <div className="w-100 py-4">
                    <h2 className="CoolComponent--Subtitle">Preview</h2>
                    <button className="btn btn-primary mb-3" onClick={() => setTempSource(src)}>
                        Refresh Preview
                    </button>
                    <img src={tempSource} className="FramePreview--Image" />
                </div>

                <MarkdownCopy
                    markdown={markdown}
                />
            </div>
        </MarkdownPreviewContext.Provider>
    )
}

export default EditCoolComponent;
export {
    MarkdownPreviewContext,
}