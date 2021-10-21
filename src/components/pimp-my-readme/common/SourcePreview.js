import React, { useState } from "react";
import "../../../styles/github-readme-builder.scss";

const SourcePreview = ({ src }) => {
    return (
        <div className="w-100 py-4">
            <h2 className="CoolComponent--Subtitle">Preview</h2>
            <button className="btn btn-primary mb-3">
                Refresh Preview
            </button>
            <img src={src} className="FramePreview--Image" />
        </div>
    )
}

export {
    SourcePreview,
}