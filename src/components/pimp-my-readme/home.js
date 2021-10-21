import React, {useState} from "react";
import "../../styles/github-readme-builder.scss";
import {
    CoolComponents,
    PREVIEW_SOURCES,
} from "./index";
import EditCoolComponent from "./common/EditCoolComponent";
import { Heart } from "react-feather"

const GithubReadMeBuilder = () => {
    const [selectedComponent, setSelectedComponent] = useState(CoolComponents.SlidingText);

    const webappTag = <p className="ReadMeBuilder--Paragraph__Small text-center">
        Made with <Heart color="red" /> by <a href="/">webapp.io</a>
    </p>;

    return (
        <div className="ReadMeBuilder">
            <div className="ReadMeBuilder__White ReadMeBuilder--Top">
                <div className="d-block px-1">
                    <h1 className="ReadMeBuilder--Title text-center">
                        Pimp My README
                    </h1>
                    <p className="ReadMeBuilder--Paragraph">
                        Make your README profile look cool with some custom components.
                    </p>
                    {webappTag}
                </div>
            </div>

            {/* Try Me CTA for GitHub  Cool Component */}
            <div className="container text-center pt-5">
                <a
                    href="/#component-editor"
                    onClick={() => setSelectedComponent(CoolComponents.WavyBanner)}
                    className="btn ReadMeBuilder--CTA--Text d-flex justify-content-center align-items-center"
                >
                    <div className="ReadMeBuilder--CTA--ArrowWrapper">
                        <img
                            className="ReadMeBuilder--CTA--Image"
                            src="/try-me.svg"
                        />
                    </div>
                    <div className="ReadMeBuilder--CTA--ImageWrapper">
                        <img
                            className="ReadMeBuilder--CTA--Image"
                            src="/pimp-my-readme/wavy-banner?title=JellyBear&subtitle=I%27m%20the%20webapp.io%20mascot%20:)"
                        />
                    </div>
                </a>
            </div>

            {/* Preview of Cool Components to try */}
            <div className="container-fluid">
                <div className="d-flex justify-content-center CoolComponent--Preview flex-wrap">
                    {
                        Object.keys(PREVIEW_SOURCES).map(key => {
                            return (
                                <div
                                    key={key}
                                    className="CoolComponent--Preview--Object mx-3">
                                        <img
                                        className="btn btn-outline-primary"
                                        onClick={() => {
                                            setSelectedComponent(key);
                                            window.location.href="/#component-editor";
                                        }}
                                        src={PREVIEW_SOURCES[key].src}
                                        title={PREVIEW_SOURCES[key].component}
                                        className="CoolComponent--Preview--Image" />
                                        {
                                            PREVIEW_SOURCES[key].helperText ?
                                            <p>
                                            {PREVIEW_SOURCES[key].helperText}
                                            </p>
                                            :
                                            null
                                        }
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => {
                                            setSelectedComponent(key);
                                            window.location.href="/#component-editor";
                                        }}
                                    >Try me!</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Editing Section for Cool Components */}
            <div className="container p-5">
                <h1 className="ReadMeBuilder--Title" id="component-editor">Pimp out your Cool Component</h1>
                <EditCoolComponent component={selectedComponent} />
            </div>


            <div className="container text-center">
                {webappTag}
            </div>
        </div>
    )
}

export default GithubReadMeBuilder;