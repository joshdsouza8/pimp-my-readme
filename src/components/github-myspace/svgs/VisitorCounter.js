import React, { useState, useContext, useEffect } from "react";
import { MarkdownPreviewContext } from "../common/EditCoolComponent";
import "../../../styles/github-readme-builder.scss";
import { CommonTextField } from "../common/CommonTextField";
import queryString from "query-string";
let origin = "https://github-readme.webapp.io";

const VisitorCounter = () => {
    const { setSrc, setMarkdown } = useContext(MarkdownPreviewContext);
    const [page, setPage] = useState("webapp.io");

    useEffect(() => {
        origin = window.location.origin;
    }, []);

    useEffect(() => {
        const params = {
            page: page,
        };
        const query = queryString.stringify(params);
        const src = `/github-readme-builder/visitor-counter?${query}`;
        const md = `[![Visitor Counter for ${page}](${origin}/github-readme-builder/visitor-counter?${query}})](${origin})`;
        setSrc(src);
        setMarkdown(md);
    }, [page])
    
    return (
        <div className="d-block">
            <CommonTextField
                name="GitHub Username"
                value={page}
                onChange={e => setPage(e.target.value)}
            />
        </div>
    )
}

export default VisitorCounter;